angular.module('mars-bags').service('mainService', function ($http, $q) {

  this.getProducts = function () {
    $http({
      method: 'GET',
      url: 'http://localhost:3003/api/products',
    }).then(function (response) {
          console.log(response);
    })

  }

})
