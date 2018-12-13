
var example = (function(){
    console.log('inside life');

    //Free Variable
    var counter =0;


    //closure fucntion - closing around counter
    return function(){
        return counter++;
    }

})();

var counterRef=example;

console.log(counterRef());
console.log(counterRef());
console.log(counterRef());
console.log(counterRef());