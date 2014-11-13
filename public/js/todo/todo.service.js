angular.module('TodoApp')
    .factory('TodoService', ['$http', function($http){
        var API_URL = '/api/todos';

        return {
            getTodos: function(){
                return $http.get(API_URL)
            },
            addTodo: function(data){
                return $http.post(API_URL, data);
            },
            deleteTodo: function(id){
                return $http.delete(API_URL + '/' + id);
            },
            updateTodo: function(id, data){
                return $http.put(API_URL + '/' + id, data);
            }
        }
    }]);