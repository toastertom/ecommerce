angular.module('mars-bags', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "public/views/homeTpl.html",
                controller:'mainCtrl'
            })
            .state('shop',{
              url:'/shop',

              templateUrl: "public/views/shopTpl.html"
            })
            .state('about',{
              url:'/about',

              templateUrl: "public/views/aboutTpl.html"
            })
            .state('charity-water',{
              url:'/charity-water',

              templateUrl: "public/views/charity-waterTpl.html"
            })
            .state('news-events',{
              url:'/news-events',

              templateUrl: "public/views/news-eventsTpl.html"
            })
            .state('checkout',{
              url:'/checkout',

              templateUrl: "public/views/checkoutTpl.html"
            })
            .state('terms-conditions',{
              url:'/terms-conditions',

              templateUrl: "public/views/terms-conditionsTpl.html"
            })
            .state('contact-us',{
              url:'/contact-us',

              templateUrl: "public/views/contact-usTpl.html"
            })

          $urlRouterProvider
            .otherwise('/');
    });
