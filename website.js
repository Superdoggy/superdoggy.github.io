window.addEventListener('load', function() {
  var canvas = document.getElementById('website');
  var ctx = canvas.getContext && canvas.getContext('2d');
  if(ctx) {
    website(canvas, ctx);
  }
});
var website = function(cvs, ctx) {
  var w = screen.width;
  var h = screen.height
  cvs.width = w;
  cvs.height = h;
  cts.fillStyle = "#000";
  cts.fillRect(0, 0, w, h);
}
