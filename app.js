angular.module('Eva', [
    'Eva.chat',
    'Eva.about',
    'ngRoute'
  ])
  .config(function($routeProvider, $httpProvider) {
    $httpProvider.defaults.headers.post = { 
      'Authorization': 'Bearer ' + 'e0449f3c12754d25b7c9fd67a589f7b9',
      'Content-Type': 'application/json;charset=utf-8'
     };

    $routeProvider
      .when('/chat', {
        templateUrl: 'chat/chat.html',
        controller: 'chatCtrl'
      })
      .when('/about', {
        templateUrl: 'about/about.html',
        controller: 'aboutCtrl'
      })
      .otherwise({
        redirectTo: '/chat'
      });
  })
