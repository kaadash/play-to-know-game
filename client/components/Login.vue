<template>
  <div class="login-wrapper">
    <div class="login-container">
      <label for="">email</label>
      <input type="text" v-model="email">
      <label for="">password</label>
      <input type="text" v-model="password">
      <button @click="goToDashboard">Login</button>
      <button @click="$store.commit('LOGIN_WITH_FACEBOOK')">Login with facebook</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: '',
    password: '',
  }),
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    goToDashboard: function() {
      this.$router.push('dashboard');
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
