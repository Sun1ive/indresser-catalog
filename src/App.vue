<template>
  <div id="app">
    <app-Header></app-header>
    <main>
      <router-view/>
    </main>
    <app-Footer></app-Footer>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  name: 'app',
  components: {
    'app-Header': Header,
    'app-Footer': Footer,
  },
};
</script>

<style>
#app {
  font-family: 'Open-Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  background-image: url('./assets/bg.png');
}
main {
  min-height: 83vh;
  margin: 1rem;
}
</style>
