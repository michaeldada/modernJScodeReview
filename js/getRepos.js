var apiKey = require('./../.env').apiKey;

exports.getRepos = function(){
  var user = $('#username').val();
  console.log(user);
  $('#username').val("");
  $('#repoList').empty();
  $.get('https://api.github.com/users/'+user+'/repos'+'?access_token='+apiKey).then(function(response){
    // debugger;
      console.log(response);
      for(i = 0; i < response.length; i++){
        var repoName = response[i].name;
        console.log(repoName);
        $('#repoList').append("<li><h3>"+"Name: "+repoName+"</h3></li>")
        var repoDescription = response[i].description;
        $('#repoList').append("<li>"+"Description: "+repoDescription+"</li>")
        console.log(repoDescription);
        var repoLanguage = response[i].language;
        $('#repoList').append("<li>"+"Language: "+repoLanguage+"</li>")
        console.log(repoLanguage);
      }
  }).fail(function(error){

    console.log(error.responseJSON.message);
  });
};
