<template>
  <article class="card-body mx-auto" style="max-width: 700px;">
    <h4 class="card-title mt-3 text-center text-white">Create Account</h4>
    <p class="social-medias">
      <a href="" class="btn btn-block btn-twitter">
        <i class="fab fa-twitter"></i> Login via Twitter</a
      >
      <a href="" class="btn btn-block btn-facebook">
        <i class="fab fa-facebook-f"></i> Login via facebook</a
      >
      <a href="" class="btn btn-block btn-google">
        <i class="fab fa-google"></i> Login via Google</a
      >
    </p>
    <br>
    <RegisterArticleForm />
  </article>
</template>

<script>
import RegisterArticleForm from './Register-Article-Form.vue'
export default {
  name: 'RegisterArticle',
  components: {
    RegisterArticleForm
  }
}
</script>

<style scoped>

.btn-facebook {
  background-color: #405d9d;
  color: #fff;
}
.btn-twitter {
  background-color: #42aeec;
  color: #fff;
}

.btn-google {
  background-color: #ff0000;
  color: #fff;
}

.social-medias{
    text-align: center;
}
</style>
