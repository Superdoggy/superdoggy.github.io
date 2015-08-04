var cvs;
var ctx;
var w;
var h;
window.addEventListener('load', function() {
  var canvas = document.getElementById('website');
  context = canvas.getContext && canvas.getContext('2d');
  if(context) {
    cvs = canvas;
    ctx = context;
    website();
  }
});
var background = function() {
  w = window.innerWidth;
  h = window.innerHeight;
  cvs.width = w;
  cvs.height = h;
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, w, h);
}
var website = function() {
  setTimeout(background(), 16);
}
