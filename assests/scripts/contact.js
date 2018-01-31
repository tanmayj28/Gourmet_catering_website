var GC = GC || {};
var myForm = [];
GC.ContactPage = function() {
	this.initialize();
}

GC.ContactPage.prototype = {
	initialize:function() {
		// var myForm = [];
		this.div_show();
		this.check_empty();
		this.saveForm();
		
		this.div_hide();
	},
  check_empty:function() {
  	$('#submit-form').click(function(){
		  if (document.getElementById('form-name').value == "" || document.getElementById('form-email').value == "" || document.getElementById('msg').value == "") {
		    alert("Fill All Fields !");
		  }
		  else {
	      var row = "Feedback Submitted. Thank you " + form.name.value + " and email id as " + form.email.value;
	      $('#display_message').append(row + '<br>');
	      alert("Feedback Submitted Successfully..." + form.name.value);
	      alert("Feedback Submitted Successfully..." + form.email.value);
	      document.getElementById('form').reset();
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
	    document.getElementById('form');
      var row = "Feedback Submitted. Thank you " + form.name.value + " and email id as " + form.email.value;
      $('#display_message').append(row + '<br>');
      alert("Feedback Submitted Successfully..." + form.name.value);
      alert("Feedback Submitted Successfully..." + form.email.value);
      document.getElementById('form').reset()
	  });
	}
}