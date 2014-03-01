angular.module('myApp', ['ngRoute'])
.service('Reddit', function($http) {

	this.getArticles = function(subreddit) {
			subreddit = subreddit || 'angularjs';

			return $http({
				method: 'JSONP',
				url: 'http://www.reddit.com/r/' + subreddit + '.json',
				params: {
					'jsonp': 'JSON_CALLBACK' 
				}
			}).then(function(resp) {
				return resp.data.data.children;
			});

		}
})
.config(function($routeProvider) {
	$routeProvider
		.when('/:subreddit', {
		// templateUrl: 'home.html',
			template: '<h1>Hello {{user.name}} from the home route</h1>',
			controller: 'HomeController'
		})
		.otherwise({
			redirectTo: '/angularjs'
		})
})
.controller('HomeController', function($scope, Reddit) {
	$scope.user = { name: 'baconator' };
	var subreddit = $routeParams.id;

	$scope.getArticles = function(subreddit) {
		Reddit.getArticles(subreddit)
		.then(function(articles) {
				$scope.articles = articles;	
		});
	}

	$scope.getArticles();
});