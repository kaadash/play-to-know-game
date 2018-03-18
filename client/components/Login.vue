<template>
  <div class="login-wrapper">
    <div class="login-container">
      <input type="text">
      <input type="text">
      <button @click="$store.commit('LOGIN')">Login</button>
      <button @click="$store.commit('LOGIN_WITH_FACEBOOK')">Login with facebook</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
    }
  }
}
</script>

<style scope>
  .login-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: rgb(41, 194, 11);
  }
  .login-container {
    padding: 20px;
    min-width: 400px;
    border-radius: 5px;
    background: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, .4);
    display: flex;
    flex-direction: column;
    input {
      margin-bottom: 20px;
    }
  }
</style>
