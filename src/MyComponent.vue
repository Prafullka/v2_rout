<template>
    <!-- Component's template here -->
    <div></div>
</template>

<script>
export default {
    // The name of the component, useful for debugging
    name: 'MyComponent',

    // The props the component accepts from its parent
    props: {
        myProp: {
            type: String,
            required: true
        }
    },

    // Reactive data for the component, must be a function returning an object
    data() {
        return {
            myData: 'Hello, world!'
        };
    },

    // Computed properties for the component, cached based on dependencies
    computed: {
        reversedMessage() {
            return this.myData.split('').reverse().join('');
        }
    },

    // Methods for the component, can be used as event handlers or general methods
    methods: {
        myMethod() {
            console.log('This is a method');
        }
    },

    // Watchers to react to changes in data/props
    watch: {
        myData(newVal, oldVal) {
            console.log('myData changed from', oldVal, 'to', newVal);
        }
    },

    // Lifecycle hooks to run code at specific stages of the component's lifecycle
    beforeCreate() {
        console.log('Component is about to be created');
    },
    created() {
        console.log('Component has been created');
    },
    beforeMount() {
        console.log('Component is about to be mounted');
    },
    mounted() {
        console.log('Component has been mounted');
    },
    beforeUpdate() {
        console.log('Component is about to update');
    },
    updated() {
        console.log('Component has been updated');
    },
    beforeDestroy() {
        console.log('Component is about to be destroyed');
    },
    destroyed() {
        console.log('Component has been destroyed');
    },

    // Registering local components to be used within this component
    components: {
        ChildComponent
    },

    // Registering local custom directives
    directives: {
        myDirective: {
            bind(el, binding, vnode) {
                el.style.color = binding.value;
            }
        }
    },

    // Registering local filters
    filters: {
        capitalize(value) {
            if (!value) return '';
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
    },

    // Using mixins to share reusable functionality
    mixins: [myMixin],

    // Extending another component
    extends: BaseComponent,

    // Providing properties for dependency injection
    provide() {
        return {
            myService: new MyService()
        };
    },

    // Injecting dependencies provided by an ancestor component
    inject: ['myService'],

    // Customizing the prop and event for v-model
    model: {
        prop: 'checked',
        event: 'change'
    }
};
</script>

<style scoped>
/* Component-specific styles here */
</style>