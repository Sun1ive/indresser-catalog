<template>
  <div class="container is-fluid">
    <form class="form" @submit.prevent="makeOrder">
    <h3>{{ currentItem.title }}</h3>
    <img :src="currentItem.img" :alt="currentItem.title">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" required v-model="userData.name" type="text" placeholder="Name">
        </div>
      </div>
      <div class="field">
        <label class="label">Phone</label>
        <div class="control">
          <input class="input" required v-model="userData.phone" type="text" placeholder="Phone">
        </div>
      </div>
      <div class="field">
        <label class="label">email</label>
        <div class="control">
          <input class="input" required v-model="userData.email" type="email" placeholder="email">
        </div>
      </div>
      <button type="submit" class="myButton Red">Подтвердить заказ</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
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
          email: this.userData.email,
          item: this.currentItem.title,
        };
        const response = await axios.post('https://dresses-2efb4.firebaseio.com/catalog.json', order);
        console.log(response);
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
          Телефон: ${this.userData.phone} \
          Почта: ${this.userData.email} \n
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
  max-width: 500px;
  margin: 0 auto;
  padding: 1rem 2rem;
}
h3 {
  font-size: responsive 1rem 2rem;
  margin-bottom: 1rem;
}
.form .myButton {
  outline: none;
  border: transparent;
  color: #fff;
  max-width: 200px;
}
.form .label {
  text-align: left;
}
img {
  max-width: 400px;
  max-height: 400px;
  border-radius: 6px;
}
</style>