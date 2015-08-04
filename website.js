window.addEventListener('load', function() {
  var canvas = document.getElementById('website');
  var ctx = canvas.getContext && canvas.getContext('2d');
  if(ctx) {
    website(canvas, ctx);
  }
});
var website = function(cvs, ctx) {
  var w = window.width;
  var h = window.height
  cvs.width = w;
  cvs.height = h;
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, w, h);
}
