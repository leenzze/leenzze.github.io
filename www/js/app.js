// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var leenzzeApp = angular.module('leenzzeApp', ['ionic','ngRoute','duScroll','ionicScroller',  'ui.bootstrap'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/Home', {
        controller: 'homeCtrl',
        templateUrl: 'view/home.html'
    })
    .when('/Profile',{
      controller : 'profileCtrl',
      templateUrl: 'view/profile.html'
    })
    .when('/Skills',{
      controller : 'skillsCtrl',
      templateUrl: 'view/skills.html'
    })
    .when('/Portfolio',{
      controller : 'portfolioCtrl',
      templateUrl: 'view/portfolio.html'
    })
    .when('/Experience',{
      controller : 'experienceCtrl',
      templateUrl: 'view/experience.html'
    })
    .otherwise({
        redirectTo:'/Home'
    });
}]);

leenzzeApp.directive('scrolltop', 
    [
        '$ionicScrollDelegate',
        function(
            $ionicScrollDelegate
            ) {
                return {
                    link: function (scope, element, attrs) {
                        element.on('click', function (event) {
                            //  - (element.height() +13)  + 70
                            // Also testes scrollBy
                            $ionicScrollDelegate.scrollTo(0, element.offset().top, true);
                        });
                    }
                };
            }
    ]
);