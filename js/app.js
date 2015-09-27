angular.module('IMapp', ['postsModule', 'ngRoute']);

angular.module('IMapp').config(function($routeProvider) {
    $routeProvider.when('/postView', {
        controller: 'PostController',
        templateUrl: '../modules/posts/postView.html',
    });
});