//IIFE Implementaion
var module = (function(name){

    function show(){
        return "Show Function = " +name;
    }

    function display(){
        return "Dsplay Function";
    }

    return{
        sh:show,
        dis: display
    }

})("Aswin");

//Revealing Module pattern to the outer world 
var ex =module;
console.log(ex.sh());

//without bracket = method declaration as output
//with bracket = result of the method