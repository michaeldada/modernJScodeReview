exports.findCity = function(allJSON, btnId) {
  var low = false;
  var search = "";
  var returnString ="";
  var resultNum=0;
  var resultCity;
  if (btnId[1] == "l"){
    low = true;
  }
  if (btnId[0]=="t"){
    for(var i=0; i<allJSON.length; i++){
      if (low===false){
        if (allJSON[i].main.temp > resultNum){
          resultNum = allJSON[i].main.temp;
          resultCity = allJSON[i].name;
        }
        if (low===true){
          if (allJSON[i].main.temp < resultNum){
            resultNum = allJSON[i].main.temp;
            resultCity = allJSON[i].name;
          }
        }
      }
    }
    returnString = "City: "+resultCity+ ", Temperature: "+resultNum;
  }
  if (btnId[0]==="p"){
    for(var i=0; i<allJSON.length; i++){
      if (low===false){
        if (allJSON[i].main.pressure > resultNum){
          resultNum = allJSON[i].main.pressure;
          resultCity = allJSON[i].name;
        }
        if (low===true){
          if (allJSON[i].main.pressure < resultNum){
            resultNum = allJSON[i].main.pressure;
            resultCity = allJSON[i].name;
          }
        }
      }
    }
    returnString = "City: "+resultCity+ ", Pressure: "+resultNum;
  }
  if (btnId[0]==="w"){
    for(var i=0; i<allJSON.length; i++){
      if (low===false){
        if (allJSON[i].wind.speed > resultNum){
          resultNum = allJSON[i].wind.speed;
          resultCity = allJSON[i].name;
        }
        if (low===true){
          if (allJSON[i].wind.speed < resultNum){
            resultNum = allJSON[i].wind.speed;
            resultCity = allJSON[i].name;
          }
        }
      }
    }
    returnString = "City: "+resultCity+ ", Wind Speed: "+resultNum;
  }
  if (btnId[0]==="h"){
    for(var i=0; i<allJSON.length; i++){
      if (low===false){
        if (allJSON[i].main.humidity > resultNum){
          resultNum = allJSON[i].main.humidity;
          resultCity = allJSON[i].name;
        }
        if (low===true){
          if (allJSON[i].main.humidity < resultNum){
            resultNum = allJSON[i].main.humidity;
            resultCity = allJSON[i].name;
          }
        }
      }
    }
    returnString = "City: "+resultCity+ ", Humidity: "+resultNum;
  }
  return returnString;
};
