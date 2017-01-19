angular.module('App', ['ui.router','ui.materialize']) //sets app
.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/'); //catch all
        $stateProvider
         .state('home',{
             url: '/',
             templateUrl: 'views/home.html',
             controller: 'home'
         })
         .state('specs', {
             url: '/specs',
             templateUrl: 'views/specs.html',
             controller: 'specs'
         })
         .state('review', {
             url: '/review',
             templateUrl: 'views/review.html',
             controller: 'review'
         });
}]);
