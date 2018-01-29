function check_empty() {
if (document.getElementById('form-name').value == "" || document.getElementById('form-email').value == "" || document.getElementById('msg').value == "") {
alert("Fill All Fields !");
} else {
document.getElementById('form').submit();
// alert("Form Submitted Successfully...");
}
}
//Function To Display Popup
function div_show() {
document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('abc').style.display = "none";
}

var myForm = [];
	function saveForm(){
		// Take each input's name and value and add it to the array we already created.
		$('form input[type=text]').each(function(){
			myForm.push({ name: this.name, value: this.value});
		});
	}
	function debug(){
			// Loop through our array and output the values.  These values should reflect what form inputs we have above and what their current values are.
		for (var i = 0; i < myForm.length; i++) {
			console.log(myForm[i].name+': '+myForm[i].value);
			alert("Form Submitted Successfully "+myForm[i].value);
	}
}