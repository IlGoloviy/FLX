let game = confirm('Do you want to play a game?');
let numQuestion, numEnter, priceAttempt, price = 0;
let numQuestionMax = 5;
let priceAttemptMin = 10;

if (game === false) {
  alert('You did not become a millionaire, but can.');
} else {
  
  while (game === true) {
    do {
      numQuestion = (Math.random() * 1000).toFixed();
    } while (numQuestion < 0 || numQuestion > numQuestionMax);

    for (let i = 3; i > 0; i--) {
      if (i === 3) {
        priceAttempt = priceAttemptMin;
      } else if (i === 2) {
        priceAttempt = Math.floor(priceAttemptMin/2);
      } else if (i === 1) {
        priceAttempt = Math.floor((Math.floor(priceAttemptMin/2))/2);
      }
      numEnter = prompt('Enter number from 0 to ' + numQuestionMax +
        '\nAttempts left: ' + i +
        '\nTotal prize: ' + price +
        '\nPossible prize on current attempt: ' + priceAttempt);
      if (isNaN(numEnter) || numEnter === null || numEnter === '' || numEnter === undefined) {
        alert('Enter number please');
      }
      if (numQuestion === numEnter) {
        price = price + +(priceAttempt);
        game = confirm('Congratulation! \nYour prize is: ' + price + 
                       '$\nDo you want to continue?');
        if (game === false) {
          game = confirm('Do you want to play a game?');
          price = 0;
          numQuestionMax = 5;
          priceAttemptMin = 10;
        } else if (game === true) {
          priceAttemptMin = priceAttemptMin * 3;
          numQuestionMax = numQuestionMax * 2;
        }
        break;
      }
    }
    if (numQuestion !== numEnter) {
      alert('Thank you for a game. Your prize is: ' + price + '$');
      price = 0;
      numQuestionMax = 5;
      priceAttemptMin = 10;
      game = confirm('Do you want to play a game?');
    }
  }
  
}