var apiKey = require('./../.env').apiKey;

exports.getRepos = function(){
  var user = $('#username').val();
  console.log(user);
  $('#username').val("");
  $('#repoList').empty();
  $.get('https://api.github.com/users/'+user+'/repos'+'?access_token='+apiKey).then(function(response){

      for(i = 0; i < response.length; i++){
        var repoName = response[i].name;
        $('#repoList').append("<li><h3>"+"Name: "+repoName+"</h3></li>")
        var repoDescription = response[i].description;
        $('#repoList').append("<li>"+"Description: "+repoDescription+"</li>")
        var repoLanguage = response[i].language;
        $('#repoList').append("<li>"+"Language: "+repoLanguage+"</li>")
      }
  }).fail(function(error){

    console.log(error.responseJSON.message);
  });
};
