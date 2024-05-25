<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- {{ destinations }} -->
    <div v-for="(destination) in destinations" :key="destination.name">
      <router-link :to="destination" >{{ destination.name }}</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  data() {
    return {
      destinations: this.$store.getters.destinations
    }
  },
  computed: {
    
    // // if data inside this.$store.getters.destinations is changing ferquently 
    // // then use this as this part is reactive
    // destinations() {
    //   return this.$store.getters.destinations
    // }
  },
  components: {
    // HelloWorld,
  },
};
</script>
