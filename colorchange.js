
function mouseOverColor(obj) {
    var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      var color = "rgb("+r+","+g+","+b+")"
	  obj.style.backgroundColor= color;
};

function mouseOutColor(obj) {
	var r =  255;
      var g = 255;
      var b = 255;
      var color = "rgb("+r+","+g+","+b+")"
	  obj.style.backgroundColor= color;
};


function mouseOverLinkColor(obj, color) {
	  var h2s = document.getElementById("myNav");
	  h2s.style.backgroundColor= color;
};

function mouseOutLinkColor(obj) {
	  var h2s = document.getElementById("myNav");
	  h2s.style.backgroundColor= 'rgba(0,0,0, 0.9)';
};

$('.square1').on('click', function() {
     $(this).toggleClass("active");
});