<template>
  <div class="container is-fluid">

    <!-- <div class="myButton back" @click="backToCatalog">Вернуться назад в каталог</div> -->

    <div class="myButton back" @click="backToCatalog">Назад в каталог</div>

    <slider animation="fade">
      <slider-item height="500px" v-for="(item, i) in currentItem.gallery" :key="i">
        <div>
           <img :src="item" :alt="currentItem.title"> 
        </div>
      </slider-item>
    </slider>

    <div class="box">
      
      <h3>{{ currentItem.title }}</h3>
      <div>Цена: <span class="red">{{ currentItem.price }}</span> грн</div>
      <div>{{ currentItem.desc.one }}</div>
      <div>{{ currentItem.desc.two }}</div>
      <div>{{ currentItem.desc.three }}</div>
      <div>{{ currentItem.desc.four }}</div>
      <div>{{ currentItem.desc.five }}</div>

      <div>Состав: 
        <span>{{ currentItem.comp.one }}</span>
        <span>{{ currentItem.comp.two }}</span>
        <span>{{ currentItem.comp.three }}</span>
      </div>

      <div class="myButton Red" @click="buyIt(currentItem)">Купить</div>
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
    buyIt() {
      this.$router.push('/order');
    },
  },
  computed: {
    currentItem() {
      return this.$store.state.currentItem;
    },
  },
  mounted() {
    const ITEM = this.$store.state.currentItem.title;
    if (ITEM === '') {
      this.$router.push('/');
    }
  },
};
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  justify-content: center;
  padding-bottom: 4rem;
}
.comp {
  display: flex;
  align-items: center;
}
.box {
  min-width: 200px;
  text-align: left;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  font-size: responsive 1rem 1.1rem;
  background-color: #fff;
  color: #000;
  font-size: responsive 1rem 1.4rem;
  padding: 1rem 2rem;
  font-family: Arial, Helvetica, sans-serif;
}
.box h3 {
  font-size: responsive 1rem 2rem;
  font-weight: bold;
}
.box .red {
  color: red;
  font-size: responsive 1rem 1.5rem;
}
.back {
  position: absolute;
  left: 50%;
  bottom: -2%;
  transform: translateX(-50%);
  max-width: 270px;
  font-size: responsive 1rem 1.3rem;
}
.myButton {
  margin: 1rem 0;
  transition: .4s linear;
  background-color: #fff;
  color: #000;
}
.myButton:hover {
  background-color: red;
  color: #fff;
  border-color: red;
}
@media (max-width: 900px) {
  .container {
    flex-direction: column;
    align-items: center;
  }
  .box {
    text-align: center;
    width: 100%;
  }
  .myButton {
    margin: 1rem auto;
  }
}
</style>