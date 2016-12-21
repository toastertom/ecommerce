angular.module('mars-bags')

.controller('checkoutCtrl', function ($scope, $stateParams, mainService, $state, ngCart) {

  // Pulling the total from ngCart
  var totalCost = ngCart.totalCost() * 100;

  //
  var handler = StripeCheckout.configure({
  key: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
  image: '/public/images/MbLogoCircle1.png',
  locale: 'auto',
  token: function(token) {
    // Use the token to create the charge with a server-side script.
    var token = token.id + '/charge/';
    // You can access the token ID with `token.id`
  }
});

$scope.checkout = function () {
  handler.open({
    name: 'MarsBags.com',
    description: 'Credit/Debit Card',
    amount: totalCost
  });
};

//
// handler.close();
})
