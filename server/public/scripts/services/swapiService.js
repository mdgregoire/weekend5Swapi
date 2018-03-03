app.service('SwapiService', ['$http', function($http){
  console.log('SwapiService created')
  let self = this;

  self.search = {};



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





}])//end swapi service
