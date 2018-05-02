const a = parseFloat(prompt('Enter a'));
const b = parseFloat(prompt('Enter b'));
const c = parseFloat(prompt('Enter c'));

const result = solvedQuadr(a, b, c);
document.write(result);

function descr(a, b, c) {
    return b**2-4*a*c;
}

function solvedQuadr(a, b, c) {
    const d = descr(a, b, c);
    if (d > 0) { 
      var  x1 = (-1*b + Math.sqrt(d))/(2*a);
      var  x2 = (-1*b - Math.sqrt(d))/(2*a);
      
    } else {
       var x1 = -(b/(2*a));
       
    }
   return 'X1= ' + x1 +'; '+ 'X2 = ' + x2;
}

