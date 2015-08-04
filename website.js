var cvs;
var ctx;
var w;
var h;
window.addEventListener('load', function() {
  var canvas_ = document.getElementById('website');
  var context_ = canvas_.getContext && canvas_.getContext('2d');
  if(context_) {
    cvs = canvas_;
    ctx = context_;
    website();
  }
});
var background = function() {
  w = window.innerWidth;
  h = window.innerHeight + 5;
  cvs.width = w;
  cvs.height = h;
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, w, h);
}
var website = function() {
  setInterval(background, 1000);
}
