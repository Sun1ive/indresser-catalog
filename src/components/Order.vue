<template>
  <div class="container is-fluid">
    <form class="form" @submit.prevent="submit">
    <h3>{{ currentItem.title }}</h3>
    <img :src="currentItem.img" :alt="currentItem.title">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Name">
        </div>
      </div>
      <div class="field">
        <label class="label">Phone</label>
        <div class="control">
          <input class="input" type="text" placeholder="Phone">
        </div>
      </div>
      <div class="field">
        <label class="label">email</label>
        <div class="control">
          <input class="input" type="text" placeholder="email">
        </div>
      </div>
      <button type="submit" class="myButton Red">Подтвердить заказ</button>
    </form>
  </div>
</template>

<script>
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
    submit() {
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