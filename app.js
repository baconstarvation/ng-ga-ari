angular.module('myApp', [])
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
.controller('HomeController', function($scope, Reddit) {
	$scope.user = { name: 'Ari' };

	$scope.getArticles = function(subreddit) {
		Reddit.getArticles(subreddit)
		.then(function(articles) {
				$scope.articles = articles;	
		});
	}

	$scope.getArticles();
});