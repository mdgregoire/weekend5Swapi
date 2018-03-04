const app = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngAria', 'ngMessages']);

console.log('in client.js');


app.config(function($routeProvider, $mdThemingProvider){
    $routeProvider.when('/', {
        templateUrl: 'views/search.html',
        controller: 'SearchController as sc'
    }).when('/favorite', {
        templateUrl: 'views/favorite.html',
        controller: 'FavoriteController as fc'
    }).otherwise({ template: '<h1>404 Page Not Found</h1>'})
})

.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('green')
    .accentPalette('yellow')
    .warnPalette('red')
    .backgroundPalette('light-blue');
});
