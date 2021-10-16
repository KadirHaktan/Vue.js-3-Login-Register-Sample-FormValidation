<template>
  <div class="container-fluid">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title" style="color:white;">Home</h5>
        <p class="card-text" style="color:white;">
          Welcome to Vue.js 3 Login and Register Sample
        </p>
        <hr class="bg-light"/>
        <router-link to="/" class="nav-item nav-link">Home</router-link>
        <router-link to="/register" class="nav-item nav-link">Register</router-link>
        <router-link to="/login" class="nav-link">Login</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.card {
  height: 370px;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: auto;
  margin-left: auto;
  width: 500px;
  background-color: rgba(0, 0, 0, 0.5) !important;
}
</style>
