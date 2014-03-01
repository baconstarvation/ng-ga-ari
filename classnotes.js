// gist file
// https://gist.github.com/auser/9288156

angular.module('myApp', []);

// directives are functions that augment an element

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


// Expressions
// Angular expressions are similar to JavaScript and can be thought of like it.
// They don't throw errors, which is a good thing.
// If they did throw errors, the page would halt and the user would get a massive explosion.
<div>1 + 2 = {}


// Scopes. They are just plain old JavaScript objects.
// Expressions have access to the variables inside the parent scope...
// The $scope object is the glue between our JavaScript and our view (HTML).
<h2>Welcome back {{ user.name }}</h2>  // view binding
// Anything inside of angular goes on the scope.
// In this example, when we did ng-init, that is actually going on the local scope of that. Ex -- putting names on the local scope.
// anything we can do on a javascript object, we can do on a scope.
// Create variables
$scope.message = 'Hello';
// or objects
$scope.user = {
	name: 'Ari'
};
// Define functions
$scope.say = function(mag) {
	alert($scope.message + " " + msg);
}

// View
<h2>

// How to get access to the $scope
// Controllers -- A controller is a piece of code that defines functionality for a part of the page.
// Controllers are like mediators of functionality for portions of the page.

<div ng-controller="AddController">
	<h3>Count is at: {{ count }}</h3>
	<a ng-click="addOne()">Add one</a>
</div>
// in the scope of the AddController, we expect there to be a count
// directive: ng-controller ; explicitly setting AddController to that div and all its children
// execution environment: anything underneath this element will run in the 


// Data
// Clent side applications are only as exciting as the data they contain.
// $http is a wrapper on the browser's XMLHttpRequest API

// XHR requests are async
// whenever you're writing an angular app don't use jquery
// callback functions $.ajax

// Promises
// Rather than passing a callback function into the $http method to get called when the data returns, the $http object returns a promise.
// The promise API
promise
.then(function(data) {
	// called when no errors have occurred with data
})
.catch(function(err) {
	// called when an error has occurred
})
.finally(function(data) {
	// called always, regardless of the output result
})

// we'll be using jsonp to read from reddit

// creating a promise
// akin to creating an ajax call and resolving this thing
// anything that is prefaced inside of angular with a dollar sign is just an indication that it comes built in angular by default as an object
// ideally, if there are two dollar signs, you usually won't want to use it

// How come we even call the $http object?
// we're not writing assembly code in here.
angular.module('myApp', [])
.controller('HomeController', function($scope, $http) {
});

// Dependency Injection
// Anytime we rely on a library we either: 
// needs to find the dependency itself or
// needs to be handled on the dependency

// are we in testing mode or are we not in testing mode
// injecting at run-time is something that angular does. angular is awesome becaue it takes care of all this for us.
// $ is created on the fly, and it's not a service. whereas http is a service. angular just gives us magically.

