// Your code goes here

let money = +(prompt('input money'));
let discount = +(prompt('input the discount'));

if ((money > 0 && money < 9999999) && (discount > 0 && discount < 99)) {
  let saved = (money / 100) * discount;
  let price = money - saved;
  alert('Price without discount: ' + money +
       '\nDiscount: ' + discount + '%\n' +
       'Price with discount: ' + truncated(price) +
       '\nSaved: ' + truncated(saved));
} else {
  alert('Invalid input data');
}

function truncated(num) {
return Math.trunc(num * 100) / 100;
}