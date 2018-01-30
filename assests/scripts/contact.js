var GC = GC || {};
var myForm = [];
GC.ContactPage = function() {
	this.initialize();
}

GC.ContactPage.prototype = {
	initialize:function() {
		var myForm = [];
		this.div_show();
		this.check_empty();
		this.saveForm();
		this.debug();
		this.div_hide();
	},
  check_empty:function() {
  	$('#submit-form').click(function(){
		  if (document.getElementById('form-name').value == "" || document.getElementById('form-email').value == "" || document.getElementById('msg').value == "") {
		    alert("Fill All Fields !");
		  }
		  else {
		    document.getElementById('form').submit();
		  }
    });
  },

	div_show:function() {
		$('#popup').click(function(){
	      document.getElementById('abc').style.display = "block";
	    });
  },

	div_hide:function(){
		$('#close').click(function(){
  	  document.getElementById('abc').style.display = "none";
	  });
	},

	saveForm:function(){
		  $('#submit-form').click(function(){
		  $('form input[type=text]').each(function(){
			  myForm.push({ name: this.name, value: this.value});
		  });
	  });
	},

	debug:function(){
		$('#submit-form').click(function(){
			for (var i = 0; i < myForm.length; i++) {
				console.log(myForm[i].name+': '+myForm[i].value);
				alert("Form Submitted Successfully "+myForm[i].value);
		  }
	  });
	}
}
