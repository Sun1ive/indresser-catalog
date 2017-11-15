<template>
  <div class="container is-fluid">
    <h1>this is a main page</h1>

  <!--  <slider animation="fade">
      <slider-item v-for="(i, index) in list" :key="index">
        <div>
           <img :src="" alt=""> 
        </div>
      </slider-item>
    </slider> -->
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
    return {
    };
  },
};
</script>

<style scoped>

</style>