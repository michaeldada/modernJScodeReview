exports.tempConvert = function(kelvin){
  var returnArray=[];
  returnArray.push(kelvin-273);
  returnArray.push((1.8*(kelvin-273)+32));
  return returnArray;
};
