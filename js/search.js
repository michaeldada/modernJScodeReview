exports.makeRequest = function() {
        var q = $('#song').val() + $('#artist').val();
        console.log(q);
        var request = gapi.client.youtube.search.list({
         q:q,
         part:"id",
         type:"video",
         fields:"items/id/videoId"
        });
        request.execute(function(response) {

        var str = JSON.stringify(response.items[0].id.videoId);
        str = str.replace(/[^\w\s]/gi, '')
        console.log(str);
        var url = "https://www.youtube.com/embed/" + str+ "?autoplay=1";
        console.log(url);
        $('#myIframe').attr('src', url)

        console.log(str);
        });
}

exports.makeRequest2 = function() {
        var q = $('#song').val() + $('#artist').val() + "parody";
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
        str = str.replace(/[^\w\s]/gi, '')
        console.log(str);
        var url = "https://www.youtube.com/embed/" + str + "?autoplay=1";
        console.log(url);
        $('#parodyIframe').attr('src', url)

        });
}
