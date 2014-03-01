// gist file
// https://gist.github.com/auser/9288156

angular.module('myApp', []);

// directives are functions
function say(mag) {
	alert("Hi " + mag);
}

<div say="world"></div>