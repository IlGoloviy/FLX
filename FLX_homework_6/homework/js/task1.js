// Your code goes here

let a = prompt('Quadratic equation\ninput value -> a');
let b = prompt('Quadratic equation\ninput value -> b');
let c = prompt('Quadratic equation\ninput value -> c');
let x, x1, x2;

if (isNaN(a) || isNaN(b) || isNaN(c) 
    || a === null || b === null || c === null 
    || a === '' || b === '' || c === '') {
  alert('Invalid input data'); 
} else {
  let discriminant = b * b - 4 * a * c;

  if (discriminant < 0) {
    alert('no solution'); 
  } else if (discriminant === 0) {
    x = -b / (2 * a);
    alert('x = ' + x); 
  } else {
    x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    alert('x1 = ' + x1 + ' and x2 = ' + x2);
  } 
}
