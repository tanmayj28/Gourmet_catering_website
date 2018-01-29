function mouseaway(my_image)
{
  my_image.src = "assests/images/tablesetting.jpg";
}

function changeImage() {
  var image = document.getElementById('myImage');
  if (image.src.match("bulbon")) {
    image.src = "file:///Users/tanmayjain/Desktop/gourmet%20catering/assests/images/pic_bulboff.gif";
  } else {
    image.src = "file:///Users/tanmayjain/Desktop/gourmet%20catering/assests/images/pic_bulbon.gif";
  }
}