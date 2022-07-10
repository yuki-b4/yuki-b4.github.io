function scrollWindow(id) {
  let scroll_to_id = id.replace("navbar_", "").replace(/\r?\n/g, '')
  console.log()
  let element = document.getElementById(scroll_to_id)
  var rect = element.getBoundingClientRect();
  var elemtop = rect.top + window.pageYOffset;
  document.documentElement.scrollTop = elemtop;
}