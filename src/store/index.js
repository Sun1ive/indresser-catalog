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
      {
        title: 'Платье трапеция синее',
        price: 990,
        id: 'z4xvcw1',
        desc: {
          color: 'Цвет: синий',
          one: 'Фасон: платье трапеция с подрезами',
          two: 'Длина: выше колена',
          three: 'Карманы: в боковых швах',
          four: '',
          five: 'Подкладка: да',
        },
        img: '/src/assets/dresses/d2blue1.jpg',
        gallery: [
          '/src/assets/dresses/d2blue1.jpg',
          '/src/assets/dresses/d2blue2.jpg',
          '/src/assets/dresses/d2blue3.jpg',
          '/src/assets/dresses/d2blue4.jpg',
        ],
      },
      {
        title: 'Платье футляр черное',
        price: 990,
        id: 'fsdjie32',
        desc: {
          color: 'Цвет: черный',
          one: 'Фасон: платье футляр',
          two: 'Длина: до колена',
          three: 'Карманы: нет',
          four: 'Особенности: отрезное по талии',
          five: 'Подкладка: да',
        },
        img: '/src/assets/dresses/d3black1.jpg',
        gallery: [
          '/src/assets/dresses/d3black1.jpg',
          '/src/assets/dresses/d3black2.jpg',
          '/src/assets/dresses/d3black3.jpg',
          '/src/assets/dresses/d3black4.jpg',
        ],
      },
      {
        title: 'Платье футляр синее',
        price: 990,
        id: 'fsdjie32',
        desc: {
          color: 'Цвет: синий',
          one: 'Фасон: платье футляр',
          two: 'Длина: до колена',
          three: 'Карманы: нет',
          four: 'Особенности: отрезное по талии',
          five: 'Подкладка: да',
        },
        img: '/src/assets/dresses/d3blue1.jpg',
        gallery: [
          '/src/assets/dresses/d3blue1.jpg',
          '/src/assets/dresses/d3blue2.jpg',
          '/src/assets/dresses/d3blue3.jpg',
        ],
      },
      {
        title: 'Платье прямого силуэта синее',
        price: 890,
        id: 'f7ce32',
        desc: {
          color: 'Цвет: синий, вставка - бежевый',
          one: 'Фасон: платье прямого силуэта',
          two: 'Длина: до колена',
          three: 'Карманы: есть',
          four: '',
          five: 'Подкладка: без',
        },
        img: '/src/assets/dresses/d9_1.jpg',
        gallery: [
          '/src/assets/dresses/d9_1.jpg',
          '/src/assets/dresses/d9_2.jpg',
          '/src/assets/dresses/d9_3.jpg',
          '/src/assets/dresses/d9_4.jpg',
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
