const favoriteController = app.controller('FavoriteController', ['SwapiService', function(SwapiService){
    let self = this;
console.log('favoritecontroller created');

self.Favorites = SwapiService.Favorites;
self.deleteFavorite = SwapiService.deleteFavorite;
self.getPicture = SwapiService.getPicture;
self.searchOut = SwapiService.searchOut;
}])//end serchController
