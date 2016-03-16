var makeRequest = require('./../js/search.js').makeRequest;
var makeRequest2 = require('./../js/search.js').makeRequest2;

$("#search-button").submit(function(event){
  event.preventDefault();
  var keyWordsearch = function(){

    gapi.client.setApiKey('AIzaSyCvjqLF84b-96a8p5KeWKutbiqy3f9SsYA');
    gapi.client.load('youtube', 'v3', function() {
    makeRequest();
    makeRequest2();

  });
});
};
