let login = prompt('enter your login');
let hoursCurrent = new Date().getHours();

if (login === null || login === '') {
  alert('Canceled');
} else if (login.length < 4) {
  alert('I don\'t know any users having name length less than 4 symbols');
} else if (login === 'Admin' || login === 'User') {
  let password = prompt('enter your password');
  if ((login === 'Admin' && password === 'RootPass') || (login === 'User' && password === 'UserPass')) {
    if (hoursCurrent < 20) {
      alert('Good day, dear ' + login + '!');
    } else if (hoursCurrent >= 20) {
      alert('Good evening, dear ' + login + '!');
    }
  } else {
    alert('Wrong password');
  }
} else {
  alert('I don’t know you');
}