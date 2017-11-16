<template>
<div class="columns is-multiline is-centered">
  <div class="column is-one-quarter" v-for="(item, i) in catalog" :key="i">
    <div class="card">
      <div class="card-image">
        <img :src="item.img" :alt="item.title" @click="goToItem(item)">
      </div>
      <div class="buttons">
         <a class="myButton buy" @click="goToOrder(item)">Купить</a>
         <a class="myButton" @click="goToItem(item)">Детали</a>
      </div>

      <div class="prices">
        <div class="oldPrice"><s>{{ item.price }}</s> грн</div>
        <!-- <div class="newPrice"><b>{{ newPrice }}</b> грн</div> -->
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    goToItem(item) {
      this.$store.commit('getCurrentItem', item);
      this.$router.push(`/${item.id}`);
    },
    goToOrder(item) {
      this.$store.commit('getCurrentItem', item);
      this.$router.push('/order');
    }
  },
  computed: {
    catalog() {
      return this.$store.state.items;
    }
  }
};
</script>

<style scoped>
.card {
  background-color: #fff;
}

.card-image img {
  max-height: 675px;
  cursor: pointer;
}
.buttons {
  display: flex;
  justify-content: space-around;
  padding: 1rem 0 2rem;
  margin-bottom: 0;
}
a {
  max-width: 120px;
  color: #333;
  transition: 0.4s ease-in-out;
}
a:hover {
  background-color: red;
  color: #fff;
  border-color: red;
}
.buy {
  background-color: red;
  border-color: red;
  color: #fff;
  transition: 0.4s ease-in-out;
}
.buy:hover {
  background-color: transparent;
  color: #000;
  border-color: #000;
}

@media (max-width: 1215px) {
  .buttons {
    padding: 0 1rem;
  }
}
</style>