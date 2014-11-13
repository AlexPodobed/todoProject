angular.module('TodoApp')
    .controller('TodoCtrl', ['$scope', 'TodoService', function($scope, TodoService){
        $scope.formData = {};
        $scope.editMode = false;
        var editedTodo, backupTodoName;

        function cancelEditing(){
            editedTodo.edit = false;
            $scope.editMode = false;
            $scope.formData = {};
        }


        TodoService.getTodos()
            .success(function(data){
                $scope.todos = data;
                console.log(data)
            });

        $scope.addTodo = function(){
            if( $scope.formData.text ){
                if($scope.editMode){
                    TodoService
                        .updateTodo($scope.formData._id, {text: $scope.formData.text})
                        .success(function(){
                            cancelEditing();
                        });
                }else {
                    TodoService
                        .addTodo({text: $scope.formData.text})
                        .success(function(){
                            $scope.todos.push($scope.formData);
                            $scope.formData = {};
                        });
                }
            }
        };

        $scope.markAsDone = function(todo){
            if(todo.edit) return;

            todo.done = !todo.done;
            TodoService.updateTodo(todo._id, {done: todo.done});
        };

        $scope.deleteTodo = function(todo){
            TodoService.deleteTodo(todo._id)
                .success(function(){
                    $scope.todos.map(function(el, i){
                        if(el === todo){
                            $scope.todos.splice(i, 1);
                            if($scope.editMode) cancelEditing();
                        }
                    });
                });
        };

        $scope.editTodo = function(todo){
            if(todo.done){ return }

            $scope.editMode = true;
            $scope.formData = todo;

            if(editedTodo) editedTodo.edit = false;
            todo.edit = true;
            editedTodo = todo;

            backupTodoName = todo.text;
        };

        $scope.cancelEdit = function(){
            editedTodo.text = backupTodoName;
            cancelEditing();
        };

    }]);