var GC = GC || {};

GC.AboutPage = function() {
	this.initialize();
}

GC.AboutPage.prototype = {
	initialize:function() {
		this.changeImage();
	},
	changeImage:function() {
		$('#myImage').click(function(){
			var image = document.getElementById('myImage');
			if (image.src.match("bulbon")) {
				image.src = "assests/images/pic_bulboff.gif";
			} else {
				image.src = "assests/images/pic_bulbon.gif";
			}
		});
	}
}