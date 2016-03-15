var apiKey = require('./../.env').apiKey;

exports.getJSON = function(){
  returnArray = [];
  var allCities = ["Portland"];

  for(var i=0; i<allCities.length; i++){
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + allCities[i] + '&appid=' + apiKey, function(response) {
        returnArray.push(response);
    });
  }
  return returnArray;
};
