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
        desc: `Фасон: приталенный силуэт Цвет: розовый, черный Длина: на уровне колена Карманы: нет Рукав: крылышко Платье не на подкладке`,
        img: '/src/assets/dresses/d2bej1.jpg',
        gallery: [
          '/src/assets/dresses/d2bej1.jpg',
          '/src/assets/dresses/d2bej2.jpg',
          '/src/assets/dresses/d2bej3.jpg',
        ],
      },
      {
        title: 'Платье 0101',
        price: 1090,
        id: 'g1gt4e',
        desc: `Фасон: приталенный силуэт Цвет: розовый, черный Длина: на уровне колена Карманы: нет Рукав: крылышко Платье не на подкладке`,
        img: '/src/assets/dresses/d18_1.jpg',
        gallery: [
          '/src/assets/dresses/d18_1.jpg',
          '/src/assets/dresses/d18_2.jpg',
          '/src/assets/dresses/d18_3.jpg',
        ],
      },
    ],
    // currentItem: {
    //   title: '',
    //   price: '',
    //   id: '',
    //   img: '',
    //   desc: '',
    //   gallery: [],
    // },
    currentItem: {},
  },
  mutations: {
    getCurrentItem(state, payload) {
      state.currentItem = payload;
    },
  },
});

export default store;
