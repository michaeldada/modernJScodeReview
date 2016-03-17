
exports.keyWordsearch = function(){
        gapi.client.setApiKey('AIzaSyCvjqLF84b-96a8p5KeWKutbiqy3f9SsYA');
        gapi.client.load('youtube', 'v3', function() {

          function makeRequest() {
            var q = $('#song').val() + $('#artist').val();
            // console.log(q);
            var request = gapi.client.youtube.search.list({
             q:q,
             part:"id",
             type:"video",
             fields:"items/id/videoId"
            });
            request.execute(function(response) {
      // debugger;
            var str = JSON.stringify(response.items[0].id.videoId);
            str = str.replace(/['"]+/g, '');
            console.log(str.replace(/['"]+/g, ''));
            console.log(str);
            var url = "https://www.youtube.com/embed/" + str + "?autoplay=1";
            console.log(url);
            $('#myIframe').attr('src', url)




                    console.log(str);
                  });
          }

          function makeRequest2() {
                  var q = $('#song').val() + $('#artist').val()+"parody";
                  console.log(q);
                  var request = gapi.client.youtube.search.list({
                   q:q,
                   part:"id",
                   type:"video",
                   fields:"items/id/videoId"
                  });
                  request.execute(function(response) {
            // debugger;
                  var str = JSON.stringify(response.items[0].id.videoId);
                  str = str.replace(/['"]+/g, '');
                  console.log(str.replace(/['"]+/g, ''));
                  console.log(str);
                  var url = "https://www.youtube.com/embed/" + str + "?autoplay=1";
                  console.log(url);
                  $('#parodyIframe').attr('src', url)




                  console.log(str);
          });
          }


        makeRequest();
        makeRequest2();

        });
}
