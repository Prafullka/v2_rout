<template>
  <div class="">
    <HistoryBack>
      <template v-slot:icon> ◄ </template>
      Go Back
    </HistoryBack>
    <div v-for="(destination) in destinations" :key="destination.name">
      <router-link :to="{ name: 'DestinationDetails', params: { ...destination } }">{{ destination.name }}</router-link>
    </div>
    <hr>
  </div>
</template>

<script>
import HistoryBack from '@/components/HistoryBack.vue';

export default {
  name: "TheNavBar",
  data() {
    return {
      destinations: this.$store.getters.destinations
    }
  },
  components: {
    HistoryBack
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
