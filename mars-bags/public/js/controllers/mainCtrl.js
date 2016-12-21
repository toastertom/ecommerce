angular.module('mars-bags').controller('mainCtrl', function ($scope, $stateParams, mainService, $state) {

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

  // add to cart buttons.
  //
  // $scope.showCart = false;
  //
  // $scope.addToCart = function () {
  //   console.log('test', $scope.showCart)
  //   $scope.showCart = !$scope.showCart;
  // }
  //
  // $scope.getCart = function () {
  //   console.log('am i running')
  //   return $scope.showCart
  // }

})
