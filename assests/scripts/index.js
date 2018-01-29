$(function() {
  $('#wrapper-about').hide();
  $('#wrapper-menu').hide();
  $('#wrapper-contact').hide();
});
//Web 3.0

function index_home(){
  $('#wrapper-about').css('display', 'none');
  $('#wrapper-menu').css('display', 'none');
  $('#wrapper-contact').css('display', 'none');
  $('#wrapper').css('display', 'block');
}
function index_about(){
  $('#wrapper').css('display', 'none');
  $('#wrapper-menu').css('display', 'none');
  $('#wrapper-contact').css('display', 'none');
  $('#wrapper-about').css('display', 'block');
}
function index_menu(){
  $('#wrapper').css('display', 'none');
  $('#wrapper-about').css('display', 'none');
  $('#wrapper-contact').css('display', 'none');
  $('#wrapper-menu').css('display', 'block');
}
function index_contact(){
  $('#wrapper').css('display', 'none');
  $('#wrapper-menu').css('display', 'none');
  $('#wrapper-about').css('display', 'none');
  $('#wrapper-contact').css('display', 'block');
}

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