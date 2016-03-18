var apiKey = require('./../.env').apiKey;

exports.getRepos = function(){
  var user = $('#username').val();
  console.log(user);
  $('#username').val("");
  $.get('https://api.github.com/users/'+user+'?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
