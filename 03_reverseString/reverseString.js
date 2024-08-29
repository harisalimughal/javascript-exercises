const reverseString = function(str) {
    let stri='';
    for(i=str.length-1; i>=0;i--){
          stri+=str[i];
    }
    return stri;
};

// Do not edit below this line
module.exports = reverseString;
