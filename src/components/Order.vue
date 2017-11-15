<template>
  <div>
    <h1>this is an order page</h1>
    <h2>{{ currentItem.title }}</h2>
    <img :src="currentItem.img" alt="">
    KYPIT'
  </div>
</template>

<script>
export default {
  computed: {
    currentItem() {
      return this.$store.state.currentItem;
    },
  },
};
</script>

<style scoped>

</style>