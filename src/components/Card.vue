<template>
<div class="columns is-multiline">
  <div class="column is-one-quarter" v-for="(item, i) in catalog" :key="i">
    <div class="card">
      <div class="card-image">
        <img :src="item.img" :alt="item.title" @click="goToItem(item)">
      </div>
      <div class="buttons">
         <a class="myButton Red" @click="goToOrder(item)">Купить</a> <a class="myButton darkGold" @click="goToItem(item)">Подробнее</a>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  methods: {
    goToItem(item) {
      this.$store.commit('getCurrentItem', item);
      this.$router.push(`/${item.id}`);
    },
    goToOrder(item) {
      this.$store.commit('getCurrentItem', item);
      this.$router.push('/order');
    },
  },
  computed: {
    catalog() {
      return this.$store.state.items;
    },
  },
};
</script>

<style scoped>
.card {
  background-color: #212121;
}

.card-image img {
  max-height: 675px;
  cursor: pointer;
}
.buttons {
  display: flex;
  justify-content: space-around;
  padding: 1rem 0 2rem;
}
a {
  color: #fff;
  max-width: 150px;
}
</style>