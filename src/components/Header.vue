<template>
  <header>
    <div class="container is-fluid">
      <img @click="goHome" src="../assets/logo.png" alt="logo">
      <a class="download myButton" href="https://dresses.indresser.com/catalog.pdf" download>Скачать каталог</a>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.container {
  margin: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.container img {
  cursor: pointer;
}

a.myButton {
  margin: 0;
  max-width: 200px;
  color: #000;
  transition: .4s linear;
}
a.myButton:hover {
  background-color: #000;
  color: #fff;
  border-color: #fff;
}

@media (max-width: 600px) {
  .container {
    flex-direction: column;
  }
  .container img {
    margin: 1rem 0;
  }
}
</style>