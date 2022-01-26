module.exports = () => {
  const copyUrl = document.querySelector('#copyUrl')
  copyUrl.addEventListener('click', function(text) {
    navigator.clipboard.writeText(text)
      .then('copy success')
      .catch('fail')
  })
}

