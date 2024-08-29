const convertToCelsius = function(x) {
  let Temp=(x-32)*(5/9);
  let roundedNumber = Math.round(Temp * 10) / 10;
  return roundedNumber;
};

const convertToFahrenheit = function(x) {
  let Temp = x*(9/5)+32;
  let roundedNumber = Math.round(Temp * 10) / 10;
  return roundedNumber;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
