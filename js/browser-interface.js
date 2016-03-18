var apiKey = require('./../.env').apiKey;
var getRepos = require('./../js/getRepos.js').getRepos;

$(document).ready(function() {
  $('#search-button').click(function() {
    getRepos();

  });
});
