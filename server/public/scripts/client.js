const app = angular.module('myApp', ['ngRoute']);

console.log('in client.js');


app.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'views/search.html',
        controller: 'SearchController as sc'
    }).when('/favorite', {
        templateUrl: 'views/favorite.html',
        controller: 'FavoriteController as fc'
    }).otherwise({ template: '<h1>404 Page Not Found</h1>'})
})
