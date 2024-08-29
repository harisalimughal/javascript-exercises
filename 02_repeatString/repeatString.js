let result='';
const repeatString = function(str,num) { 
    if(num<1){
        result='ERROR'
    }
    else{
        for(i = 0 ; i < num ; i++){
            result += str;
           }
        }

           return result;

};

// Do not edit below this line
module.exports = repeatString;
