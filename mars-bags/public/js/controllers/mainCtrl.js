angular.module('mars-bags').controller('mainCtrl', function ($scope, mainService) {

  $scope.getProducts = function () {
    $scope.products = mainService.getProducts();
  }
  $scope.getProducts();
})
