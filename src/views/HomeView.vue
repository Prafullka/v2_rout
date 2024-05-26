<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <div v-for="(destination) in destinations" :key="destination.name">
      <router-link :to="{name: destination.name , params : {...destination} }" >{{ destination.name }}</router-link>
    </div> -->

    <hr>
    <!-- <div v-for="(destination) in destinations" :key="destination.name"> -->
      <!-- <router-link :to="{name: 'DestinationDetails' , params : {...destination} }" >{{ destination.name }}</router-link> -->
      <!-- <router-link :to="{name: 'DestinationDetails' , params : {a:'sdf'} }" >{{ destination.name }}</router-link> -->
    <!-- </div> -->

    
  </div>
</template>

<script>
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
};
</script>
