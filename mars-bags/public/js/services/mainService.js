angular.module('mars-bags').service('mainService', function ($http, $q) {

  this.getProducts = function () {
  return $http({
      method: 'GET',
      url: 'http://localhost:3003/api/products',
    }).then(function (response) {
        return response;
        console.log(response);
    })
  }
})
