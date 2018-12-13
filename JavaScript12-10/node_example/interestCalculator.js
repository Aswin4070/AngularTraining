var app = {};

app.simpleInterest = function(principle, duration, rateOfInterest){
    return principle * duration* rateOfInterest;
}

module.exports =app;