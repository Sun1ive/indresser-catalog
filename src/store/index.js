import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    items: [
      {
        title: 'Платье трапеция с коротким рукавом синее',
        price: 890,
        id: 'f6gjh6',
        desc: {
          color: 'Цвет: синий',
          one: 'Фасон: платье трапеция с коротким рукавом',
          two: 'Длина: выше колена',
          three: 'Карманы: в боковых подрезах',
          four: '',
          five: 'Подкладка: да',
        },
        img: '/static/dresses/d1blue_1.jpg',
        gallery: [
          '/static/dresses/d1blue_1.jpg',
          '/static/dresses/d1blue_2.jpg',
          '/static/dresses/d1blue_3.jpg',
          '/static/dresses/d1blue_4.jpg',
        ],
      },
      {
        title: 'Платье трапеция с коротким рукавом черное',
        price: 890,
        id: 'zbf54g',
        desc: {
          color: 'Цвет: черный',
          one: 'Фасон: платье трапеция с коротким рукавом',
          two: 'Длина: выше колена',
          three: 'Карманы: в боковых подрезах',
          four: '',
          five: 'Подкладка: да',
        },
        img: '/static/dresses/d1black_4.jpg',
        gallery: [
          '/static/dresses/d1black_2.jpg',
          '/static/dresses/d1black_1.jpg',
          '/static/dresses/d1black_3.jpg',
          '/static/dresses/d1black_4.jpg',
        ],
      },
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
        img: '/static/dresses/d2bej1.jpg',
        gallery: [
          '/static/dresses/d2bej1.jpg',
          '/static/dresses/d2bej2.jpg',
          '/static/dresses/d2bej3.jpg',
          '/static/dresses/d2bej4.jpg',
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
        img: '/static/dresses/d2blue1.jpg',
        gallery: [
          '/static/dresses/d2blue1.jpg',
          '/static/dresses/d2blue2.jpg',
          '/static/dresses/d2blue3.jpg',
          '/static/dresses/d2blue4.jpg',
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
        img: '/static/dresses/d3black1.jpg',
        gallery: [
          '/static/dresses/d3black1.jpg',
          '/static/dresses/d3black2.jpg',
          '/static/dresses/d3black3.jpg',
          '/static/dresses/d3black4.jpg',
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
        img: '/static/dresses/d3blue1.jpg',
        gallery: [
          '/static/dresses/d3blue1.jpg',
          '/static/dresses/d3blue2.jpg',
          '/static/dresses/d3blue3.jpg',
        ],
      },
      {
        title: 'Платье футляр с подрезами розовое',
        price: 1090,
        id: 'htrgf43x',
        desc: {
          color: 'Цвет: розовое',
          one: 'Фасон: приталенный силуэт',
          two: 'Длина: на уровне колена',
          three: 'Карманы: нет',
          four: 'Рукав: крылышко',
          five: 'Подкладка: нет',
        },
        img: '/static/dresses/d6pink_4.jpg',
        gallery: [
          '/static/dresses/d6pink_1.jpg',
          '/static/dresses/d6pink_2.jpg',
          '/static/dresses/d6pink_3.jpg',
          '/static/dresses/d6pink_4.jpg',
        ],
      },
      {
        title: 'Платье футляр с подрезами черное',
        price: 1090,
        id: 'glkjh43j',
        desc: {
          color: 'Цвет: черное',
          one: 'Фасон: приталенный силуэт',
          two: 'Длина: на уровне колена',
          three: 'Карманы: нет',
          four: 'Рукав: крылышко',
          five: 'Подкладка: нет',
        },
        img: '/static/dresses/d6black_3.jpg',
        gallery: [
          '/static/dresses/d6black_1.jpg',
          '/static/dresses/d6black_2.jpg',
          '/static/dresses/d6black_3.jpg',
          '/static/dresses/d6black_4.jpg',
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
        img: '/static/dresses/d9_1.jpg',
        gallery: [
          '/static/dresses/d9_1.jpg',
          '/static/dresses/d9_2.jpg',
          '/static/dresses/d9_3.jpg',
          '/static/dresses/d9_4.jpg',
        ],
      },
      {
        title: 'Платье прямого силуэта фиолетовое',
        price: 890,
        id: 'fdsf43cx',
        desc: {
          color: 'Цвет: фиолетовый, вставка - бежевый',
          one: 'Фасон: платье прямого силуэта',
          two: 'Длина: до колена',
          three: 'Карманы: есть',
          four: '',
          five: 'Подкладка: без',
        },
        img: '/static/dresses/d9darkblue_3.jpg',
        gallery: [
          '/static/dresses/d9darkblue_1.jpg',
          '/static/dresses/d9darkblue_2.jpg',
          '/static/dresses/d9darkblue_3.jpg',
          '/static/dresses/d9darkblue_4.jpg',
        ],
      },
      {
        title: 'Платье футляр с коротким рукавом прямого кроя',
        price: 990,
        id: 'zxcg32sd',
        desc: {
          color: 'Цвет: синий с бежевым воротником',
          one: 'Фасон: платье футляр свободного силуэта',
          two: 'Длина: выше колена',
          three: 'Карманы: есть',
          four: 'Рукав: короткий',
          five: 'Подкладка: без',
        },
        img: '/static/dresses/d15_3.jpg',
        gallery: [
          '/static/dresses/d15_1.jpg',
          '/static/dresses/d15_2.jpg',
          '/static/dresses/d15_3.jpg',
          '/static/dresses/d15_4.jpg',
        ],
      },
      {
        title: 'Платье прямого силуэта темно розовое',
        price: 890,
        id: 'fds2xz1',
        desc: {
          color: 'Цвет: темно-розовый',
          one: 'Фасон: платье прямого силуэта',
          two: 'Длина: до колена',
          three: 'Карманы: в боковых швах',
          four: 'Особенности: по низу рукава складка',
          five: 'Подкладка: есть',
        },
        img: '/static/dresses/d16_1.jpg',
        gallery: [
          '/static/dresses/d16_1.jpg',
          '/static/dresses/d16_2.jpg',
          '/static/dresses/d16_3.jpg',
          '/static/dresses/d16_4.jpg',
        ],
      },
      {
        title: 'Платье футляр темно розовое',
        price: 1090,
        id: 'kmgfd2',
        desc: {
          color: 'Цвет: темно розовый, верх - светло розовый',
          one: 'Фасон: платье футляр полуприлегающего силуэта',
          two: 'Длина: ниже колена',
          three: 'Карманы: есть',
          four: '',
          five: 'Подкладка: нет',
        },
        img: '/static/dresses/d18_1.jpg',
        gallery: [
          '/static/dresses/d18_1.jpg',
          '/static/dresses/d18_2.jpg',
          '/static/dresses/d18_3.jpg',
          '/static/dresses/d18_4.jpg',
        ],
      },
      {
        title: 'Платье футляр черное с бежевым верхом',
        price: 1090,
        id: 'fdsjk1',
        desc: {
          color: 'Цвет: черный, верх - светло розовый',
          one: 'Фасон: платье футляр полуприлегающего силуэта',
          two: 'Длина: ниже колена',
          three: 'Карманы: есть',
          four: 'Особенности: Кокетка по полочке и спине. Со шлицей',
          five: 'Подкладка: нет',
        },
        img: '/static/dresses/d18_black_bej1.jpg',
        gallery: [
          '/static/dresses/d18_black_bej1.jpg',
          '/static/dresses/d18_black_bej2.jpg',
          '/static/dresses/d18_black_bej3.jpg',
          '/static/dresses/d18_black_bej4.jpg',
        ],
      },
      {
        title: 'Платье полуприлегающего силуэта черное',
        price: 890,
        id: 'l1kjfd43',
        desc: {
          color: 'Цвет: черный',
          one: 'Фасон: платье полуприлегающего силуэта',
          two: 'Длина: до колен',
          three: 'Карманы: нет',
          four: 'Особенности: по спинке молния',
          five: 'Подкладка: нет',
        },
        img: '/static/dresses/d19_black1.jpg',
        gallery: [
          '/static/dresses/d19_black1.jpg',
          '/static/dresses/d19_black2.jpg',
          '/static/dresses/d19_black3.jpg',
          '/static/dresses/d19_black4.jpg',
        ],
      },
      {
        title: 'Платье полуприлегающего силуэта красное',
        price: 890,
        id: 'llm435',
        desc: {
          color: 'Цвет: красный',
          one: 'Фасон: платье полуприлегающего силуэта',
          two: 'Длина: до колен',
          three: 'Карманы: нет',
          four: 'Особенности: по спинке молния',
          five: 'Подкладка: нет',
        },
        img: '/static/dresses/d19_red1.jpg',
        gallery: [
          '/static/dresses/d19_red1.jpg',
          '/static/dresses/d19_red2.jpg',
          '/static/dresses/d19_red3.jpg',
          '/static/dresses/d19_red4.jpg',
        ],
      },
      {
        title: 'Платье прямого силуэта темно розовое',
        price: 990,
        id: 'jhfs43c',
        desc: {
          color: 'Цвет: темно розовое',
          one: 'Фасон: платье прямого силуэта с вертикальным воланом',
          two: 'Длина: до колен',
          three: 'Карманы: есть',
          four: '',
          five: 'Подкладка: нет',
        },
        img: '/static/dresses/d20_bordo1.jpg',
        gallery: [
          '/static/dresses/d20_bordo1.jpg',
          '/static/dresses/d20_bordo2.jpg',
          '/static/dresses/d20_bordo3.jpg',
          '/static/dresses/d20_bordo4.jpg',
        ],
      },
      {
        title: 'Платье прямого силуэта темно синие',
        price: 990,
        id: 'jhfs43c',
        desc: {
          color: 'Цвет: темно синий',
          one: 'Фасон: платье прямого силуэта с вертикальным воланом',
          two: 'Длина: до колен',
          three: 'Карманы: есть',
          four: '',
          five: 'Подкладка: нет',
        },
        img: '/static/dresses/d20_darkblue1.jpg',
        gallery: [
          '/static/dresses/d20_darkblue1.jpg',
          '/static/dresses/d20_darkblue2.jpg',
          '/static/dresses/d20_darkblue3.jpg',
          '/static/dresses/d20_darkblue4.jpg',
        ],
      },
    ],
    currentItem: '',
    isActiveModal: false,
  },
  mutations: {
    getCurrentItem(state, payload) {
      state.currentItem = payload;
    },
    showModal: (state) => {
      state.isActiveModal = true;
    },
    closeModal: (state) => {
      state.isActiveModal = false;
    },
  },
});

export default store;
