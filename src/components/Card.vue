<template>
<div class="columns is-multiline">
  <div class="column is-one-quarter" v-for="(item, i) in catalog" :key="i">
    <div class="card">
      <div class="card-image">
        <img :src="item.img" :alt="item.title" @click="goToItem(item.id)">
      </div>
      <div class="card-content">
        <div class="content">{{ item.desc }}</div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import store from '@/store/index';

export default {
  methods: {
    goToItem(id) {
      this.$router.push(`/${id}`);
    },
  },
  computed: {
    catalog() {
      return store;
    },
  },
};
</script>

<style scoped>
.card-image img {
  max-height: 500px;
}
</style>