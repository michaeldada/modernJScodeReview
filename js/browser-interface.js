
var keyWordsearch = require('./../js/search.js').keyWordsearch;

$(document).ready(function() {
  $('#search-button').click(function() {
    keyWordsearch();

  });
});
