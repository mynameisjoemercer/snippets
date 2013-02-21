// module with implicit name: login
define(function () {
	$(document).ready(function () {

		$('#email').blur(function () {
			// verify an email
			if (this.value.split('@')[1]) {
				name = this.value.split('@')[0];
			}
		});
		$('#login').submit(function (e) {

			e.preventDefault();

			if( $('#password').val() ) {
				//store the user? currently has no purpose unless I want to pass it along
				user = name;

				// show user that something happened
				$('#login').remove();
				$('#header').append('<span id="welcome">Hi ' + name + '!</span>');
			}

		});

	});

	// I think this is all the exports stuff
	return { test : function() { console.log('returned an object with a method'); } };
 })