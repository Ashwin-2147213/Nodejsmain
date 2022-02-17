var app = angular.module('myApp', ['ngRoute']);
 
app.config(function($routeProvider) {
$routeProvider
 
.when('/', {
templateUrl : 'page1.html',
controller : 'FirstController'}).when('/index/:first/:last',
{
    templateUrl:'index.html',
    controller:'FirstController'
})
 
.when('/database', {
templateUrl : 'page2.html',
controller : 'SecondController'
})
 
.when('/databasewithsearch', {
templateUrl : 'page3.html',
controller : 'ThirdController'
})
 
.otherwise({redirectTo: '/'});
});

    app.controller('FirstController', function($scope,$routeParams) {
    $scope.message = 'The law, in its majestic equality, forbids the rich as well as the poor to sleep under bridges, to beg in the streets, and to steal bread.'
    $scope.compname = 'Community Discussion Platform for Lawyers'
    });

     
    app.controller('SecondController', ['$scope', '$http', function($scope, $http)  {
        $scope.userData = undefined;
        var req = {
            method: 'GET',
            url: 'data.json',
            headers: { 'Content-Type': 'application/json' }
        };
        
        
        $http(req).then(function (response) {
            $scope.userData  = response.data;
        });
      }]);
     
      app.controller('ThirdController', ['$scope', '$http', function($scope, $http)  {
        $scope.userData = undefined;
        var req = {
            method: 'GET',
            url: 'data.json',
            headers: { 'Content-Type': 'application/json' }
        };
        
        
        $http(req).then(function (response) {
            $scope.userData  = response.data;
        });
      }]);