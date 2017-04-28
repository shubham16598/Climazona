var app = angular.module('app', []);

app.controller('ctrl', ['$scope', '$http', function($scope, $http) {

  $scope.newsCategory   = 'business';
  $scope.newsSource     = 'bloomberg';
  
  $scope.getSources = function() {
  $http({
  method: 'GET',
  url: 'https://newsapi.org/v1/sources',
  params: {
    language: 'en',
    category: $scope.newsCategory
  }
}).then(function successCallback(response) {
    $scope.sources = response.data.sources;
  }, function errorCallback(response) { 
    console.error( response );
  });
  };
  
  
  $scope.getArticles = function() {
    $http({
      method: 'GET',
      url: 'https://newsapi.org/v1/articles',
      params: {
        source: $scope.newsSource,
        apiKey: '3bddb1bdbb1948f9b1728a78184a0979'
      }
    }).then(function successCallback(response) {    
      $scope.articles = response.data.articles;
    }, function errorCallback(response) {
      console.error( response );
    });
  };
  
  $scope.getSources();
  $scope.getArticles();
  
  $scope.categories = ['business', 'entertainment', 'gaming', 'general', 'music', 'science-and-nature', 'sport', 'technology']
  

  
  
}]);