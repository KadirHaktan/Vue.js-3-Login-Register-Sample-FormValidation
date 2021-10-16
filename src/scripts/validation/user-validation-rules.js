import GeneralValidationRules from './general-validation-rules'

export default class UserValidationRules extends GeneralValidationRules {
  static Email (email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!(re.test(email))) {
      return 'This email format is invalid'
    }
  }

  static PasswordLenght (password, expectedLenght) {
    if (password.lenght < expectedLenght) {
      return `Password's lenght must be greater than ${expectedLenght}`
    }
  }

  static Password (password) {
    const passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/
    if (!(passwordFormat.test(password))) {
      return 'This password format is invalid'
    }
  }
}
