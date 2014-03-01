// gist file
// https://gist.github.com/auser/9288156

// ng-init is rarely used

angular.module('myApp', [])
.controller('HomeController', function($scope, $http) {

	$scope.user = {
		name: 'Ari'
	};

	$http({
		method: 'JSONP',
		url: 'http://www.reddit.com/r/angularjs.json',
		params: {
			'jsonp': 'JSON_CALLBACK'   // traditionally would just be called something like 'callback'
		}
	}).then(function(resp) {
		$scope.articles = resp.data.data.children;
	});

});