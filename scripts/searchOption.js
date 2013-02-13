(function($){

	var SearchOption = Backbone.Model.extend({
		initialize: function() {
			console.log('just initialized a SearchOption')
		}
	});

	var List = Backbone.Collection.extend({
		model: Item
	});

	var ListView = Backbone.View.extend({
		el: $('body'),
		events: {
			'click button#add': 'addItem'
		},

		initialize: function(){

			console.log("Does logging to the console work? Yes.");

			_.bindAll(this, 'render', 'addItem', 'appendItem'); // this applies the ListView object for these methods

			this.collection = new List();

			// could have used .on() instead of.bind()
			// I feel like the important thing here is that we're binding the add button to the appendItem() method on the collection. 
			this.collection.bind('add', this.appendItem); // collection event binder

			this.counter = 0;
			this.render(); // => this.render is called upon the page being initialized
		},

		render: function(){
			// ??? Why wouldnt we just keep using this? It doesnt look like we reassigned this at any point.
			var self = this;

			$(this.el).append("<button id='add'>Add list item</button>");
			$(this.el).append("<ul></ul>");

			// ??? is _ to Underscore what $ is to jQuery?
			// ??? How did this.collection.models get defined? 
			// ??? Where does .each() come from. In the documentation they pass in the collection as an argument.

			// So this simplfies to _(the each function, this object) where the each function applies a function to each item?
			_(this.collection.models).each(function(item){
				self.appendItem(item);
			}, this);
		},

		addItem: function(){
			this.counter++;
			console.log(this.counter);
			var item = new Item();
			// So this line is getting the value of item at part2, then concatenating the value of this.counter to it, then setting that value back to item at part 2.
			// ??? Would it be more correct to say item.part2? And if not why not.
			// the note says "modify item defaults"...

			item.set({
				part2: item.get('part2') + this.counter
			});

			// this.collection is defined in the View.
			// I would have expected to add the item to the model, which would trigger an event to update the view
			this.collection.add(item);
		},

		appendItem: function(item){
			// finds the 'ul' section of this.el (which is 'body') and appends a new list item to it.
			// this list item that is appends is part1 + the new part2 which has been assigned the value of counter in the addItem function.
			$('ul', this.el).append("<li>"+item.get('part1')+" "+item.get('part2')+"</li>");
		}
	});

	var listView = new ListView();

})(jQuery);

// the add event listener is the this.collection.bind('add', this.appendItem) which listens for the add event and then runs the this.appendItem method.