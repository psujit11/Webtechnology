$(document).ready(function() {
	$('#user-form').submit(function(event) {
		event.preventDefault(); // prevent form submission
		
		// get form values
		var name = $('#name').val();
		var email = $('#email').val();
		var age = $('#age').val();
		var gender = $('#gender').val();
		
		// append user information to table
		$('#user-table tbody').append('<tr><td>' + name + '</td><td>' + email + '</td><td>' + age + '</td><td>' + gender + '</td></tr>');
		
		// clear form fields
		$('#name').val('');
		$('#email').val('');
		$('#age').val('');
		$('#gender').val('male');
	});
});
