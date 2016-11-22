app = angular.module('mars-bags');
app.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
             if (this.pageYOffset >= 630) {
                element.addClass('scroll-navbar');
                element.removeAttr('id');
              }  else {
                //  scope.boolChangeClass = false;
                element.removeClass('scroll-navbar');
                element.addClass('nav-one');
             }

        });
    };
});
