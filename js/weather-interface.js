var apiKey = require('./../.env').apiKey;
var tempConvert = require('./../js/tempConvert.js').tempConvert;

$(document).ready(function(){
  $('#weatherLocation').click(function(){
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      console.log(response.main.temp);

      var cel = tempConvert(response.main.temp)[0];
      var fahr= tempConvert(response.main.temp)[1];
      var hum = response.main.humidity;
      $('.showWeather').append("<h3>Celsius</h3><p>"+Math.round(cel)+"</p>");
      $('.showWeather').append("<h3>Fahrenheit</h3><p>"+Math.round(fahr)+"</p>");
      $('.showWeather').append("<h3>Humidity</h3><p>"+hum+"</p>");
    });
  });
});
