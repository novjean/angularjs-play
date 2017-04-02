var app = angular.module("CalculatorApp", []);
app.controller("CalculatorCtrl", CalculatorCtrl);

function CalculatorCtrl(){
    this.resultValue = 0;
    
    this.buttonClicked = function(button){
        this.selectedOperation= button;
    }
    this.computeResult = function(){
        var num1 = parseFloat(this.input1);
        var num2 = parseFloat(this.input2);
        
        if(this.selectedOperation == '+'){
            this.resultValue = num1 + num2;
        }
        else if(this.selectedOperation == '-'){
            this.resultValue = num1 - num2;
        }
        else if(this.selectedOperation == '*'){
            this.resultValue = num1 * num2;
        }
        else if(this.selectedOperation == '/'){
            this.resultValue = num1 / num2;
        }
        
        
    }
    
}