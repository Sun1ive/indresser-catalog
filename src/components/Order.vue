<template>
  <div class="container is-fluid">
    <form class="form" @submit.prevent="submit">
    <h3>{{ currentItem.title }}</h3>
    <img :src="currentItem.img" :alt="currentItem.title">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" v-model="userData.name" type="text" placeholder="Name">
        </div>
      </div>
      <div class="field">
        <label class="label">Phone</label>
        <div class="control">
          <input class="input" v-model="userData.phone" type="text" placeholder="Phone">
        </div>
      </div>
      <div class="field">
        <label class="label">email</label>
        <div class="control">
          <input class="input" v-model="userData.email" type="text" placeholder="email">
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
          item: this.currentItem.title
        }
        const response = await axios.post('https://dresses-2efb4.firebaseio.com/catalog.json', order);
        console.log(response);
      } catch (e) {
        console.log(e);
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