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
    .when('/:id', {
      templateUrl: 'home.html',
      controller: 'HomeController'
    })
    .otherwise({
      redirectTo: '/angularjs'
    })
})
.controller('HomeController', function($scope, $routeParams, Reddit) {
  $scope.user = {name: 'Ari'};
  var subreddit = $routeParams.id;
 
  Reddit.getArticles(subreddit)
  .then(function(articles) {
    $scope.articles = articles;
  });
});