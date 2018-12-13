var app2 = {}

app2.init= function(){

    var button=document.getElementById('showHead');
    var subHead=document.getElementById('showSubHead');

    //Function takes two arguments, second one is anonymous function also known as callback fucntion

    button.addEventListener('click',function(){

        // getElementById is  a method called with ()
        var headElement=document.getElementById('majHeading');
        
        //innerHtml is a property no ()
        headElement.innerHTML = 'JavaScript Exercises';


    });

    
    //WE SHOULD NOT USE app2.showSubHeading() IF WE ARE USING NAMED FUNCTIONS
    subHead.addEventListener('click',app2.showSubHeading('VDSI, Hyderabad'));
}
app2.showSubHeading =function(info){

    return function(){
        
    var headElement=document.getElementById('subHeading');
    headElement.innerHTML= 'VDSI, Hyderabad';

    };

}