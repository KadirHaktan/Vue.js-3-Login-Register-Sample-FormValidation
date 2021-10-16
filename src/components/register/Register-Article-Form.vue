<template>
  <form id="registerform" @submit.prevent="checkform">
    <div class="form-group input-group">
      <div class="input-group-prepend">
        <span class="input-group-text"> <i class="fa fa-user"></i> </span>
      </div>
      <input id="fullname" v-model="fullname"  name="fullname" class="form-control" placeholder="Full name" type="text" />
    </div>
    <br/>
    <div class="form-group input-group">
      <div class="input-group-prepend">
        <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
      </div>
      <input
        id="email"
        v-model="email"
        name="email"
        class="form-control"
        placeholder="Email address"
        type="email"
      />
    </div>
    <br/>
    <div class="form-group input-group">
      <div class="input-group-prepend">
        <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
      </div>
      <input
        id="password"
        v-model="password"
        name="password"
        class="form-control"
        placeholder="Create password"
        type="password"
      />
    </div>
    <br/>
    <div class="form-group input-group">
      <div class="input-group-prepend">
        <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
      </div>
      <input
        name="repeatpassword"
        id="repeatpassword"
        v-model="repeatpassword"
        class="form-control"
        placeholder="Repeat password"
        type="password"
      />
    </div>
    <br/>
    <div class="form-group text-center">
      <button type="submit" class="btn btn-primary btn-block">
        Create Account
      </button>
    </div>
     <hr class="my-4 bg-light">
    <p class="text-center text-white">Have an account? <a href="">Log In</a></p>
  </form>
</template>

<script>
import UserValidationRules from '../../scripts/validation/user-validation-rules'
import CatchErrorMessages from '../../scripts/validation/error-messages-handle'
import Swal from 'sweetalert2'

export default {
  name: 'RegisterArticleForm',
  data () {
    return {
      fullname: '',
      email: '',
      password: '',
      repeatpassword: '',
      errors: []
    }
  },
  methods: {
    checkform () {
      this.errors = CatchErrorMessages(UserValidationRules.NotEmpty(this.email, 'Email'),
        UserValidationRules.NotEmpty(this.password, 'Password'),
        UserValidationRules.NotEmpty(this.fullname, 'Full Name'),
        UserValidationRules.NotEmpty(this.repeatpassword, 'Repeat Password'),
        UserValidationRules.Email(this.email),
        UserValidationRules.Password(this.password),
        UserValidationRules.PasswordLenght(this.password),
        UserValidationRules.NotEqualForText(this.repeatpassword, this.password, 'Repeat password', 'password'))

      const errorMessages = `<ul>${this.errors.map(error => `<li>${error}</li>`).join('')}</ul>`

      Swal.fire('Errors', errorMessages, 'error')
    }
  }
}

</script>
<style scoped>
input{
  height: 40px;
}
.input-group-text{
  height: 40px;
}

.btn btn-primary btn-block{
  align-content: center;
}

</style>
