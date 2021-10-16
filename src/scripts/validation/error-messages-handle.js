
export default function CatchErrorMessages (...errors) {
  // eslint-disable-next-line prefer-const
  let errorMessages = []
  for (let i = 0; i < errors.length; i++) {
    const error = errors[i]
    if (typeof error === 'string') {
      errorMessages.push(error)
    }
  }
  return errorMessages
}
