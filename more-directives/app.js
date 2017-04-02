angular.module("moreDirectivesApp", [])
.controller("ModeDirectivesController", ModeDirectivesController);

function ModeDirectivesController(){
    this.myList = [
        {'name': "Jim", 'age':32 },
        {'name': "Solo", 'age':44 },
        {'name': "Remy", 'age':66 },
        {'name': "Polo", 'age':43 },
        {'name': "Han", 'age':31 }
        
    ];

}