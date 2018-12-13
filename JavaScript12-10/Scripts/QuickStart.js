//Defined function added to Global Window Object
function show(){
    console.log("show function called");
}

var app={};
//creating java script with string literal syntax

//Using Funtion Expression - app.show refers to the anonymous function
app.show=function(){
    console.log("app object show function called");
}