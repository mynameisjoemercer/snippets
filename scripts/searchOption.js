(function($){

	var SearchOption = Backbone.Model.extend({
		initialize: function() {
			console.log('just initialized a SearchOption')
		}
	});

	var SearchOptionView = Backbone.View.extend({
		el: $('div.search'),
		events: {
			// ??? onclick?
			'click span.searchOption': 'runSearch'
		},

		initialize: function(){

			console.log("Does logging to the console work? Yes.");

			_.bindAll(this, 'render', 'addItem', 'appendItem'); // this applies the ListView object for these methods

			this.render(); // => this.render is called upon the page being initialized
		},

		render: function(){
			$(this.el).append("<p class='searchOption'>PROGRAMMING</p>");
		},

		runSearch: function(){
			console.log('RUNNING A SEARCH');
		}
	});

	var searchOptionView = new SearchOptionView();

})(jQuery);