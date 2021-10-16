export default class ValidationRules {
  static NotEmpty (word, fieldName) {
    if (word === '') {
      throw new Error(`${fieldName} must be not empty`)
    }
  }

  static EqualThan (number, expectedNumber) {
    if (number > expectedNumber) {
      return 'first number must be equal than expected number'
    }
  }

  static NotEqualThan (number, expectedNumber) {
    if (number < expectedNumber) {
      return 'first number must be not equal than expected number '
    }
  }

  static NotEqualForText (text, expectedText, textFieldName, expectedTextFieldName) {
    if (text.trim() !== expectedText.trim()) {
      return `${textFieldName} must be equal ${expectedTextFieldName}`
    }
  }

  static Equal (number, expectedNumber) {
    if (number === expectedNumber) {
      return 'first number must be equal expected number'
    }
  }

  static NotNull (word, fieldName) {
    if (word === null) {
      return `${fieldName} must be not null`
    }
  }
}
