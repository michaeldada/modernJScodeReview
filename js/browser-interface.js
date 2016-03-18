var getRepos = require('./../js/getRepos.js').getRepos;

$(document).ready(function() {
  $('#search-button').click(function() {
    getRepos();
    
  });
});
