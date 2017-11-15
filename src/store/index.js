import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    items: [
      {
        title: 'Платье 0101',
        price: 990,
        id: 'f2s4h6',
        desc: {
          one: 'Фасон: приталенный силуэт',
          color: 'Цвет: розовый, черный',
          two: 'Длина: на уровне колена',
          three: 'Карманы: нет',
          four: 'Рукав: крылышко',
          six: 'Подкладка: нет',
        },
        img: '/src/assets/dresses/d2bej1.jpg',
        gallery: [
          '/src/assets/dresses/d2bej1.jpg',
          '/src/assets/dresses/d2bej2.jpg',
          '/src/assets/dresses/d2bej3.jpg',
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
