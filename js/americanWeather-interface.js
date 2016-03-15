var apiKey = require('./../.env').apiKey;
var tempConvert = require('./../js/tempConvert.js').tempConvert;
var getJSON = require('./../js/getJSON.js').getJSON;
var findCity = require('./../js/findCity.js').findCity;

$(document).ready(function(){
  var allJSON = getJSON();
  $('.btn-success').click(function(){
    var btnId = $(this).attr('id');
    var result = findCity(allJSON, btnId);
    $('#showResult').append("<p>"+result+"</p>");

  });
});
