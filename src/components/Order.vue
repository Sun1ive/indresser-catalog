<template>
  <div class="container is-fluid">
    <form class="form" @submit.prevent="makeOrder">
    <h3>{{ currentItem.title }}</h3>
    <p>Цена: {{ currentItem.price }} грн</p>
    <img :src="currentItem.img" :alt="currentItem.title">
      <div class="field">
        <label class="label">Ваше имя</label>
        <div class="control">
          <input class="input" required v-model="userData.name" type="text" placeholder="Введите Ваше имя">
        </div>
      </div>
      <div class="field mbot">
        <label class="label">Ваш телефон</label>
        <div class="control">
          <input class="input" required v-model="userData.phone" type="text" placeholder="Введите Ваш номер телефона">
        </div>
      </div>
      <button type="submit" class="myButton Red">Подтвердить заказ</button>
    </form>

    <app-Thanks></app-Thanks>
  </div>
</template>

<script>
import axios from 'axios';
import Thanks from './Thank';

export default {
  components: {
    'app-Thanks': Thanks,
  },
  data() {
    return {
      userData: {
        name: '',
        phone: '',
        email: '',
      },
    };
  },
  methods: {
    async submit() {
      try {
        const order = {
          name: this.userData.name,
          phone: this.userData.phone,
          item: this.currentItem.title,
        };
        await axios.post('https://dresses-2efb4.firebaseio.com/catalog.json', order);
      } catch (e) {
        console.log(e);
      }
    },
    makeOrder() {
      const validate = new RegExp('^[0-9]+$');
      if (validate.test(this.userData.phone)) {
        Email.send(
          `coats@indresser.com`,
          // 'info@indresser.com',
          'sunliveua@gmail.com',
          'Заявка с каталога платьев catalog.indresser.com',
          `Пользователь: ${this.userData.name},
          Телефон: ${this.userData.phone}, 
          Заказал: ${this.currentItem.title}`,
          'mail.adm.tools',
          'coats@indresser.com',
          '3DLao3x1AC8t',
        );
        this.submit();

        this.userData = {
          name: '',
          phone: '',
          email: '',
        };

        this.$store.commit('showModal');
        this.$router.push('/');
      } else {
        alert('Введите корректный телефон');
        this.userData.phone = '';
      }
    },
  },
  computed: {
    currentItem() {
      return this.$store.state.currentItem;
    },
  },
};
</script>

<style scoped>
.form {
  background-color: #fff;
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem 2rem;
  border-radius: 8px;
  box-shadow: 2px 2px 10px #333;
}
h3 {
  font-size: responsive 1rem 1.5rem;
  margin-bottom: 1rem;
}
.form .myButton {
  outline: none;
  background-color: transparent;
  max-width: 200px;
  transition: .4s ease;
}
.myButton:after {
  right: 5%;
}

.form .myButton:hover {
  background-color: red;
  border-color: red;
  color: #fff;
}

.form .label {
  text-align: left;
  margin-top: 1rem;
  margin-bottom: 0;
}
img {
  max-width: 400px;
  max-height: 400px;
  border-radius: 6px;
}
.field {
  max-width: 300px;
  margin: 0 auto;
}
.field + .mbot {
  margin-bottom: 2rem;
}
</style>