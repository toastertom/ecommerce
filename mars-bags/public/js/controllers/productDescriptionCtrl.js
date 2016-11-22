angular.module('mars-bags').controller('productDescriptionCtrl', function ($scope, $stateParams, mainService, $state) {

  // Get all products
  $scope.getProductInfo = function () {
    mainService.getProducts().then(function (response) {
      console.log(response);
      $scope.products = response.data;
     console.log("products.data",$scope.products);
    });
  }
  $scope.getProductInfo();

  //get single product
  $scope.getProduct = function (id) {
    mainService.getProduct(id).then(function (response) {

      $scope.itemById = response.data[0];

      $state.go('product-description')

      console.log("itemid Object", $scope.itemById);
    });
  }
  $scope.getProduct($stateParams.id);
})
