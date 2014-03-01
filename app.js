angular.module('myApp', [])
.controller('HomeController', function($scope, $http) {

	$scope.user = {
		name: 'Ari'
	};

	$scope.getArticles = function(subreddit) {
		subreddit = subreddit || 'angularjs';

	$http({
		method: 'JSONP',
		url: 'http://www.reddit.com/r/' + subreddit + '.json',
		params: {
			'jsonp': 'JSON_CALLBACK'   // traditionally would just be called something like 'callback'
		}
	}).then(function(resp) {
		$scope.articles = resp.data.data.children;
	});
	}

$scope.getArticles();

});