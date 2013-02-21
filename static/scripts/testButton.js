// module with implicit name: login
define(function () {
	$(document).ready(function () {

		$('button').click(function (e) {

			// this is asynch, ie runs function when it gets the result

			var ajaxReq = $.getJSON('/query', function(result) {
				console.log(result);

				alert(result.part1.query);
			});

			// could also do asynch this way but then it would be promise based
			//ajaxReq.done()

		});

	});

	// I think this is all the exports stuff
	return { test : function() { console.log('returned an object with a method'); } };
 })