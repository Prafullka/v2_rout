<template>
  <div @click="goBack" class="goBack">
    <slot name="icon"> ← </slot>
    <slot> Back </slot>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      console.log('going back');
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>
<style scoped>
.goBack {
  cursor: pointer;
}
</style>