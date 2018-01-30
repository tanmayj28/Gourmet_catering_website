var GC = GC || {};
var slideIndex = 0;

GC.IndexPage = function() {
  this.initialize();
}

GC.IndexPage.prototype = {
  initialize:function() {
    var slideIndex = 0;
    var myForm = [];
    this.changeImage();
    this.showSlides();
    this.index_about();
    this.index_menu();
    this.index_contact();
    this.index_home();
    this.div_show();
    this.check_empty();
    this.saveForm();
    this.debug();
    this.div_hide();
    $(window).on("load",function() {
      $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".fade").each(function() {
          var objectBottom = $(this).offset().top + $(this).outerHeight();
          if (objectBottom < windowBottom) { 
            if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
          } else { 
            if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
          }
        });
      }).scroll();
    });
  },
  changeImage:function() {
    $('.test-width-about-diff #myImage').click(function(){
      var image = document.getElementById('myImage');
      if (image.src.match("bulbon")) {
        image.src = "assests/images/pic_bulboff.gif";
      } else {
        image.src = "assests/images/pic_bulbon.gif";
      }
    });
  },
  showSlides:function() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) 
    {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex> slides.length) 
    {
      slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++)
    {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    var self = this;
    setInterval(self.showSlides, 2000);
  },
  index_home:function(){
    $('.test-navbar test-padding test-card #home-button').click(function(){
      $('#wrapper-about').css('display', 'none');
      $('#wrapper-menu').css('display', 'none');
      $('#wrapper-contact').css('display', 'none');
      $('#wrapper').css('display', 'block');
    });
  },
  index_about:function(){
    $('.test-right-nav #about-button').click(function(){
      $('#wrapper').css('display', 'none');
      $('#wrapper-menu').css('display', 'none');
      $('#wrapper-contact').css('display', 'none');
      $('#wrapper-about').css('display', 'block');
    });
  },
  index_menu:function(){
    $('.test-right-nav #menu-button').click(function(){ 
      $('#wrapper').css('display', 'none');
      $('#wrapper-about').css('display', 'none');
      $('#wrapper-contact').css('display', 'none');
      $('#wrapper-menu').css('display', 'block');
    });
  },

  index_contact:function(){
    $('.test-right-nav #contact-button').click(function(){ 
      $('#wrapper').css('display', 'none');
      $('#wrapper-menu').css('display', 'none');
      $('#wrapper-about').css('display', 'none');
      $('#wrapper-contact').css('display', 'block');
    });
  },
  check_empty:function() {
    $('#form #submit-form').click(function(){
      if (document.getElementById('form-name').value == "" || document.getElementById('form-email').value == "" || document.getElementById('msg').value == "") {
        alert("Fill All Fields !");
      }
      else {
        document.getElementById('form').submit();
      }
    });
  },

  div_show:function() {
    $('.test-popup-button #popup').click(function(){
        document.getElementById('abc').style.display = "block";
      });
  },
  
  div_hide:function(){
    $('#form #close').click(function(){
      document.getElementById('abc').style.display = "none";
    });
  },

  saveForm:function(){
    $('#form #submit-form').click(function(){
      $('form input[type=text]').each(function(){
        myForm.push({ name: this.name, value: this.value});
      });
    });
  },

  debug:function(){
    $('#form #submit-form').click(function(){
      for (var i = 0; i < myForm.length; i++) {
        console.log(myForm[i].name+': '+myForm[i].value);
        alert("Form Submitted Successfully "+myForm[i].value);
      }
    });
  }
}