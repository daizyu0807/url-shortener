function CopyUrl() {
  const urlValue = document.querySelector('#urlValue').innerHTML.trim()
  navigator.clipboard.writeText(urlValue)
    .then(() => alert('copied'))
    .catch(error => console.log(error))
}
