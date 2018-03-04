const searchController = app.controller('SearchController', ['SwapiService', function(SwapiService){
    let self = this;
console.log('searchcontroller created');

self.search = SwapiService.search;
self.startSearch = SwapiService.startSearch;
self.pageMove = SwapiService.pageMove;
self.addFavorite = SwapiService.addFavorite;
}])//end serchController
