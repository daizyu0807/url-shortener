module.exports = function shortenUrl(number) {
  const baseChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  const MAX = 61
  const MIN = 0
  let result = ""

  for (let i = 0; i < number; i++) {
    const randomIndex = Math.floor(Math.random() * (MAX - MIN + 1) + MIN)
    const chooseChar = baseChar[randomIndex]
    result += chooseChar
  }
  return result
}

