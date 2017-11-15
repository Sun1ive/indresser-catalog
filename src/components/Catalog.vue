<template>
  <div class="container is-fluid">

    <a class="button is-link" @click="backToCatalog">Вернуться назад в каталог</a>

    <h1>{{ currentItem.title }}</h1>
    <slider animation="fade">
      <slider-item height="500px" v-for="(item, i) in currentItem.gallery" :key="i">
        <div>
           <img :src="item" :alt="currentItem.title"> 
        </div>
      </slider-item>
    </slider>

    <div class="box">
      <div>{{ currentItem.title }}</div>
      <div>Цена: <span class="red">{{ currentItem.price }}</span> грн</div>
      <div>{{ currentItem.desc.one }}</div>
      <div>{{ currentItem.desc.two }}</div>
      <div>{{ currentItem.desc.three }}</div>
      <div>{{ currentItem.desc.four }}</div>
      <div>{{ currentItem.desc.five }}</div>
      <div class="myButtonRed">Купить</div>
    </div>
  </div>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider';

export default {
  components: {
    Slider,
    SliderItem,
  },
  data() {
    return {};
  },
  methods: {
    backToCatalog() {
      this.$router.push('/');
    },
  },
  computed: {
    currentItem() {
      return this.$store.state.currentItem;
    },
  },
  mounted() {
    const ITEM = this.$store.state.currentItem;
    if (ITEM === '') {
      this.$router.push('/');
    }
  },
};
</script>

<style scoped>
.container {
  position: relative;
}
.button {
  /* position: absolute; */
  top: 0;
  left: 0;
}
.myButtonRed {
  margin-top: 1rem;
}
.box {
  margin-top: 1rem;
  max-width: 500px;
  margin: 0 auto;
  font-size: responsive 1rem 1.1rem;
}
.box .red {
  color: red;
  font-size: responsive 1rem 1.5rem;
}
</style>