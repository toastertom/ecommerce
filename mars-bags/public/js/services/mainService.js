angular.module('mars-bags').service('mainService', function ($http, $q) {

  this.getProducts = function () {
  return $http({
      method: 'GET',
      url: 'http://localhost:3003/api/products',
    }).then(function (response) {
        return response;
    })
  }

  this.getProduct = function (itemid) {
  return $http({
      method: 'GET',
      url: 'http://localhost:3003/api/product/' + itemid
      // data: id
    }).then(function (response) {
      return response

    })
  }
//
//         return response;
//         console.log(response);
//     })
//   }
//
//   this.getLocation = function (id) {
//   let bookedLocation;
//   this.travelInfo.forEach(function (location) {
//     if (location.id == id) {
//       bookedLocation = location;
//     }
//   })
//   return bookedLocation;
// }
})
