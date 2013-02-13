// module with implicit name: login

// i only want this to run when the person has logged in.
// i'm going to do that revealing elements when they log in that they interact with
// in ways defined by this file. 
// ??? I feel like there is probably a better way to do that though.
define(function () {

	// i think what i want to do is return a an object that has
	// the "game loop" in it. Then, when I'm ready in main.js
	// ill start the game loop (search.js)


	$(document).ready(function () {
		console.log('so search.js just kind of goes ahead and runs.');

		// 1. show some search choices.
		// 2. user picks a choice.
		// 3. show some results.
		// 4. user picks a result.
		// 5. show user whether or not they were right
		// 6. user acknowledges this message.
		// 7. repeat steps 1-6

		// each searchChoice should have a model and a view
		// each search result should have a model and a view
		
	});

	// I think this is all the exports stuff
	return { test : function() { console.log('this is search.js'); } };
})