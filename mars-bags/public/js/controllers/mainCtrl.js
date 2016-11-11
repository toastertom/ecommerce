angular.module('mars-bags').controller('mainCtrl', function ($scope, mainService) {

  $scope.getProductInfo = function () {
    mainService.getProducts().then(function (response) {
      console.log(response);
      $scope.products = response.data
     console.log("products.data",$scope.products);
    });
  }
  $scope.getProductInfo();
})
