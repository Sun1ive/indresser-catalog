<template>
  <div :class="{ 'is-active': isActive }" class="modal">
    <div class="modal-background"></div>
    <div class="modal-content">
    <h2>Спасибо!</h2>
      <span>Наш менеджер скоро свяжется с Вами</span>
    <div class="close" @click="closeThanks"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeThanks() {
      this.$store.commit('closeModal');
      setTimeout(() => {
        this.$router.push('/');
      }, 300);
    },
  },
  computed: {
    isActive() {
      return this.$store.state.isActiveModal;
    },
  },
};
</script>

<style scoped>
.modal-content {
  background-color: #fff;
  min-height: 150px;
  width: 450px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 11px;
}
.modal-content h2 {
  font-size: responsive 1rem 3rem;
  font-weight: bold;
}
.modal-content span {
  font-size: responsive 1rem 1.3rem;
}
.close {
  width: 30px;
  height: 30px;
  background-image: url('../assets/close.svg');
  position: absolute;
  right: 3%;
  top: 5%;
  opacity: 0.3;
  transition: 0.3s ease;
  cursor: pointer;
}
.close:hover {
  opacity: 1;
}
</style>