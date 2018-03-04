app.service('SwapiService', ['$http', function($http){
  console.log('SwapiService created')
  let self = this;

  self.search = {};
  self.Favorites = {};

  self.startSearch = function(keyword, catergory){
      console.log('in start search', keyword, catergory);
      $http({
      method: 'GET',
      url: `https://swapi.co/api/${catergory}/?search=${keyword}`
    })
    .then(function(response){
      console.log(response.data, 'response from get');
      self.search.result = response.data;
    })
    .catch(function(error){
      console.log('error in search', error);
    })
  }
//end self.startSearch

  self.pageMove = function(link){
    console.log('in page move', link);
    $http({
    method: 'GET',
    url: `${link}`
    })
    .then(function(response){
      console.log(response.data, 'response from pageMove');
      self.search.result = response.data;
    })
    .catch(function(error){
      console.log('error in pageMove', error);
    })
  }
  //end self.pageMove

self.addFavorite = function(newFavorite){
  console.log('in add favorite', newFavorite);

  $http({
  method: 'POST',
  url: `/swapi`,
  data: newFavorite
  })
  .then(function(response){
    console.log(response, 'response from favorite post');
    self.getFavorites();
  })
  .catch(function(error){
    console.log('error in favorite post', error);
  })
}
//end addFavorite

self.getFavorites = function(){
  console.log('in get favorites');
  $http({
  method: 'GET',
  url: `/swapi`
  })
  .then(function(response){
    console.log(response.data, 'response from get');
    self.Favorites.list = response.data;
  })
  .catch(function(error){
    console.log('error in search', error);
  })
}
//end getFavorites
self.getFavorites();

self.deleteFavorite = function(id){
  console.log('in deleteFavorite', id);
  $http({
    method: 'DELETE',
    url: `/swapi/${id}`
  }).then(function(response){
    console.log('success in delete favorite', response);
    self.getFavorites();
  }).catch(function(error){
    console.log('error in delete favorite', error);
  })
}
//end deleteFavorite

}])//end swapi service
