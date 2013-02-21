// module with implicit name: search
define([], function () {

	console.log('search.js is loading');

	function compile(result) {
		var el = '';

		el = el + '<li>';

		el = el + '<h3>';
		el = el + '<a href="' + result.url + '">' + result.name + '</a>';
		el = el + '</h3>';

		el = el + '<div class="snippet">';
		el = el + '<div><cite>';
		el = el + result.url;
		el = el + '</cite></div>';
		el = el + '<span>';
		el = el + result.snippet;
		el = el + '</span>';
		el = el + '</div>';

		el = el + '</li>';

		return el;
	}

	$(document).ready(function () {
		$('.searchOption').click(function() {
			$.getJSON('/query', function(response) {
				// we can show the query and the results etc
				$('.search').remove();

				// this should be a table
				$('body').append('<div class="searched"></div>');
				$('div.searched').append('<h2>Searched for: ' + response.query.query + '</h2>');

				$('body').append('<div class="results"</div>');
				$('div.results').append('<ol class="results"></ol>');

				$(response.query.results).each(function (index, result) {
					$('ol.results').append( compile(result) );
				});
			});
		});
		$('.searchOption').keyup(function(e) {
			if (e.keyCode === 13) {
				$.getJSON('/query', function(response) {
					// we can show the query and the results etc
					$('.search').remove();

					// this should be a table
					$('body').append('<div class="searched"></div>');
					$('div.searched').append('<h2>Searched for: ' + response.query.query + '</h2>');

					$('body').append('<div class="results"</div>');
					$('div.results').append('<ol class="results"></ol>');

					$(response.query.results).each(function (index, result) {
						$('ol.results').append( compile(result) );
					});
				});
			}
		});
		
	});

	// I think this is all the exports stuff
	return { test : function() { console.log('this is search.js'); } };
})