// Very simple script: set the current year in the footer
var yearEl = document.getElementById('year');
if (yearEl) {
  var now = new Date();
  yearEl.textContent = now.getFullYear();
}
