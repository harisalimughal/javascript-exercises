const fibonacci = function(n) {
    var n2 = parseInt(n, 10); 
    if (n2 === 0) return 0;
    if (n2 < 1) return "OOPS"; 
    
    let a = 1, b = 1, temp;
    
    for (let i = 3; i <= n2; i++) { 
      temp = a + b;
      a = b;
      b = temp;
    }
    
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
