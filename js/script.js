var a = prompt( 'Введите  число', '' );
var b = prompt( 'Введите  степень', '' );

function pow( a, b ) {
  var result = 1;
  
  if (b < 0) {
    return 1 / pow(a, -b);
  }
  
  for( var i = 0; i < b; i++ ) {
    result *= a;
  }  
  
  return result;  
 }


var bigResult = pow( a, b );
console.log( bigResult );

