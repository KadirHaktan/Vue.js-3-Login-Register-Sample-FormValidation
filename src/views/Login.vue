<template>
  <div class="container-fluid">
    <div class="card">
      <LoginHeader/>
      <LoginBody/>
      <LoginFooter/>
    </div>
  </div>
</template>

<script>
import LoginHeader from '../components/login/Login-Header.vue'
import LoginBody from '../components/login/login-body/Login-Body.vue'
import LoginFooter from '../components/login/Login-Footer.vue'
export default {
  name: 'Login',
  components: {
    LoginHeader,
    LoginBody,
    LoginFooter
  }
}
</script>

<style scoped>
.card{
height: 370px;
margin-top: auto;
margin-bottom: auto;
margin-right: auto;
margin-left: auto;
width: 500px;
background-color: rgba(0,0,0,0.5) !important;
}
</style>
