angular.module('mars-bags', ['ui.router', 'ngCart']).config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url:'/',
                templateUrl: "public/views/homeTpl.html",
                controller:'mainCtrl'
            })
            .state('shop', {
              url:'/product-description/',
              templateUrl:'public/views/shopTpl.html',
              controller:'mainCtrl'
            })
            .state('about', {
              url:'/about',

              templateUrl: "public/views/aboutTpl.html"
            })
            .state('charity-water', {
              url:'/charity-water',

              templateUrl: "public/views/charity-waterTpl.html"
            })
            .state('news-events', {
              url:'/news-events',

              templateUrl: "public/views/news-eventsTpl.html"
            })
            .state('terms-conditions', {
              url:'/terms-conditions',

              templateUrl: "public/views/terms-conditionsTpl.html"
            })
            .state('contact-us', {
              url:'/contact-us',

              templateUrl: "public/views/contact-usTpl.html"
            })
            .state('product-description', {
              url:'/product-description/:id',
              templateUrl:'public/views/productDescriptionTpl.html',
              controller:'productDescriptionCtrl'
            })
            .state('cart', {
              url:'/cart',
              templateUrl: "public/views/cartTpl.html",
              controller: 'checkoutCtrl'
            })
            .state('checkout', {
              url:'/checkout',
              templateUrl: "public/views/checkoutTpl.html",
              controller: 'checkoutCtrl'
            })

          $urlRouterProvider
            .otherwise('/');
    });
