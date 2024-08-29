// const removeFromArray = function(arr,num1) {
//     let arr1=arr.slice(0,num1-1);
//     let arr2=arr.slice(num1);
//     let arr3=arr1.concat(arr2);

//     return arr3;

    
// };

// const removeFromArray = function(arr,n1,n2) {
//     const arrwithoutN = [];
//   for(i=0;i<=arr.length;i++){
//     if(arr[i]!== n1 && arr[i]!== n2){
//         arrwithoutN.push(arr[i]);
//     }
//   }
//     return arrwithoutN;

    
// };

// const removeFromArray = function(arr,n1) {
//     const arrwithoutN = [];
//   for(i=0;i<=arr.length;i++){
//     if(arr[i]!== n1 ){
//         arrwithoutN.push(arr[i]);
//     }
//   }
//     return arrwithoutN;

    
// };

// const removeFromArray = function(arr,n1,n2) {
//     const arrwithoutN = [];
//   for(i=0;i<=arr.length;i++){
//     if(arr[i]!== n1 && arr[i]!== n2){
//         arrwithoutN.push(arr[i]);
//     }
//   }
//     return arrwithoutN;

    
// };

// const removeFromArray = function(arr,n1,n2,n3,n4) {
//     const arrwithoutN = [];
//   for(i=0;i<=arr.length;i++){
//     if(arr[i]!== n1 && arr[i]!== n2 && arr[i]!== n3 && arr[i]!== n4){
//         arrwithoutN.push(arr[i]);
//     }
//   }
//     return arrwithoutN;

    
// };

const removeFromArray = function(arr, ...valuestoRemove) {
    const arrwithoutN = [];
  for(i=0; i<arr.length; i++){
        if(!valuestoRemove.includes(arr[i])){
            arrwithoutN.push(arr[i]);
        }

    
  }
    return arrwithoutN;

    
};
// Do not edit below this line
module.exports = removeFromArray;
