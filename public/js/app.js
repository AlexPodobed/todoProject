angular.module('TodoApp', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/todos', {
                templateUrl: 'js/todo/todo.template.html',
                controller: 'TodoCtrl'
            })
            .otherwise({
                redirectTo: '/todos'
            })
    });