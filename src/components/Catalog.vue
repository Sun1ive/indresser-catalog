<template>
  <div class="container is-fluid">
    <h1>this is a main page</h1>

   <slider animation="fade">
      <slider-item height="700px" v-for="(item, i) in currentItem.gallery" :key="i">
        <div>
           <img :src="item" alt=""> 
        </div>
      </slider-item>
    </slider>
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
  computed: {
    currentItem() {
      return this.$store.state.currentItem;
    },
  },
};
</script>

<style scoped>

</style>