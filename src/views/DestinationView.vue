<template>
  <div class="destination">
    <h1>This is page {{ this.$route.params }}</h1>
    <div>
      <!-- getDdescriptionFromData : {{ getDdescriptionFromRout }} -->
    </div>
    <div>
      data_description_rout : {{ data_description_rout }}
    </div>
    <hr>
    <div>
      data_description_store : {{ data_description_store }}
    </div>
    <hr>
    <hr>
    <div>
      getDdescriptionFromRout : {{ getDdescriptionFromRout }}
    </div>
    <hr>
    <div>
      getDdescriptionFromStore : {{ getDdescriptionFromStore.description }}
      <h1>table</h1>
      <table>
        <tr v-for="experience in getDdescriptionFromStore.experiences" :key="experience.name">
          <td> {{ experience.name }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data_description_rout: this.$route.params.description,
      data_description_store: this.$store.getters.destinationByName(this.$route.params.name).description
    }
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    getDdescriptionFromRout() {
      return this.$route.params.description
    },
    getDdescriptionFromStore() {
      // return 1 // this.$store
      return this.$store.getters.destinationByName(this.$route.params.name)
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter :", to, from, next);
    next()
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!
  },
  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate :", to, from, next);
    next()
    // called when the route that renders this component has changed.
    // This component being reused (by using an explicit `key`) in the new route or not doesn't change anything.
    // For example, for a route with dynamic params `/foo/:id`, when we
    // navigate between `/foo/1` and `/foo/2`, the same `Foo` component instance
    // will be reused (unless you provided a `key` to `<router-view>`), and this hook will be called when that happens.
    // has access to `this` component instance.
  },
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave :", to, from, next);
    next()
    // called when the route that renders this component is about to
    // be navigated away from.
    // has access to `this` component instance.
  }

}

</script>