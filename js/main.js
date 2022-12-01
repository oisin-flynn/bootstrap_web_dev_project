function copyURI(evt){
  evt.preventDefault();
  navigator.clipboard.writeText(evt.target.getAttribute())
}
