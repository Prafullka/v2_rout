<template>
  <div class="destination">
    <h1>This is page  <pre>{{ this.$route.params }}</pre> </h1>
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
      getDdescriptionFromStore : {{ getDdescriptionFromStore }}
    
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
      return this.$store.getters.destinationByName(this.$route.params.name).description
    }
  }

}

</script>