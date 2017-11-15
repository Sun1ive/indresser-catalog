import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    items: [
      {
        title: 'Платье трапеция бежевое',
        price: 990,
        id: 'f2s4h6',
        desc: {
          color: 'Цвет: бежевый',
          one: 'Фасон: платье трапеция с подрезами',
          two: 'Длина: выше колена',
          three: 'Карманы: в боковых швах',
          four: '',
          five: 'Подкладка: да',
        },
        img: '/src/assets/dresses/d2bej1.jpg',
        gallery: [
          '/src/assets/dresses/d2bej1.jpg',
          '/src/assets/dresses/d2bej2.jpg',
          '/src/assets/dresses/d2bej3.jpg',
          '/src/assets/dresses/d2bej4.jpg',
        ],
      },
    ],
    currentItem: '',
  },
  mutations: {
    getCurrentItem(state, payload) {
      state.currentItem = payload;
    },
  },
});

export default store;
