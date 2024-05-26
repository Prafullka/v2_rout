<template>
  <div>
    <h1>404</h1>
    <h2>Page not found {{ this.$router.currentRoute.name }}</h2>
    <router-link :to="{ name: 'home' }">Go to Home</router-link>
  </div>
</template>

<script>
export default {
  created() {
    console.log("this.$router.name  :", this.$router.name);
    console.log("this.$router.currentRoute.name  :", this.$router.currentRoute.name);
  }
}
</script>

<style></style>