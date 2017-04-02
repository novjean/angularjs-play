angular.module("todoApp",[])
.controller("TodoCtrl",TodoCtrl);

function TodoCtrl(){
    this.editMode = false;
    this.todos=[
        {element:"Learn Angular 1"},
        "Spring MVC",
        "Deploy App"
    ];

    this.addNewTodo = function(){
        this.todos.push(this.newTodo);
        this.newTodo="";
    }

    this.triggerEditMode = function(){
        this.editMode = !this.editMode;
    }

    this.deleteTodo = function(index){
        this.todos.splice(index, 1)
    }
}