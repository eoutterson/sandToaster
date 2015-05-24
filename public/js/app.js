angular.module("Sandy", [
  'ui.router',
  'famous.angular'])
  .run(function(){

  })
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('app', {
        url:'/',
        templateUrl:'templates/main.html',
        controller:'MainController',
      })
    $urlRouterProvider.otherwise('/');
  });




