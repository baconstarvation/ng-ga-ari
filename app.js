// gist file
// https://gist.github.com/auser/9288156

angular.module('myApp', []);

// directives are functions

/*
function say(mag) {
	alert("Hi " + mag);
}

<div say="world"></div>
*/


// built-in directives

	// ng-click
	<h4>State is {{ state }}</h4>
	<button ng-click="state = !state">Change state</button>

		// ng-click is the directive which is a function
		// view binding -- taking an angular expression and applying it in the field
		// clicking the change state button keeps changing state from true to false; false to true


	// ng-show/ng-hide
	<button ng-click="state = !state">Change state</button>
	<div ng-show="state">
		<h4>Im out of hiding when the state is true</h4>
		<h4>Weeeeee</h4>
	</div>

		// if the angular expression that we passl eads to a truthy value, show div. if false value, hide the div.

	// ng-model
	<input ng-model

		// take value inside element and apply it to this javascript variable
		// anything thats inside this input box apply to the name javascript variable
		// youre binding the model (the javascript value) to the

	// ng-repeat
		// takes, for every single name in our var, we want to iterate over that object or in this case the array -- and we're going to clone
		// the element tha the ng-repeat is on , add that as a sibling, and for every single value we are going to iterate down
		// with directives, you can put them all into pretty much any element
	<ul ng-init="names=['Ari', 'Anand', 'Q', 'Colby']">
		<li ng-repeat="name in names">{{ name }}</li>
	</ul>

