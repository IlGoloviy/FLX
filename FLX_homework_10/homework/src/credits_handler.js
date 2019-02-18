function userCard(keys) {

  let balance = 100;
  let transactionLimit = 100;
  let historyLogs = [];
  let key = keys;
	
  let getCardOptions = function () {
  return {
      key,
      balance,
      transactionLimit,
      historyLogs
    }
  }

  function formatTime(time) {
    const month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const num = 10;
    let day = time.getDate() < num ? '0'+time.getDate() : time.getDate();
    let hour = time.getHours() < num ? '0'+time.getHours() : time.getHours();
    let min = time.getMinutes() < num ? '0'+time.getMinutes() : time.getMinutes();
    let sec = time.getSeconds() < num ? '0'+time.getSeconds() : time.getSeconds();
    let formatTime = day + '/' + month[time.getMonth()] + '/' + time.getFullYear()+', '+hour+':'+min+':'+sec;
    return formatTime;
  }

  let putCredits = function(amountCredits) {
    balance += amountCredits;
    historyLogs.push({
      operationType: 'Received credits',
      credits: amountCredits,
      operationTime: formatTime(new Date())
    });
  }

  let	takeCredits = function(amountCredits) {
    if (balance >= amountCredits && transactionLimit >= amountCredits) {
      balance = balance - amountCredits;
    } else {
      console.error('The amount of credits exceeds the balance of the card or the transaction limit');
    }
    historyLogs.push({
      operationType: 'Withdrawal of credits',
      credits: amountCredits,
      operationTime: formatTime(new Date())
    });
  }

  let	setTransactionLimit = function(sumLimit) {
    transactionLimit = sumLimit;
    historyLogs.push({
      operationType: 'Transaction limit change',
      credits: sumLimit,
      operationTime: formatTime(new Date())
    });
  }

  let	transferCredits = function(sumCredits, card) {
    const onePercent = 100, percentTaxed = 0.5;
    let taxed = sumCredits/onePercent * percentTaxed;
    if (balance >= sumCredits + taxed && transactionLimit >= sumCredits + taxed) {
      balance = balance - (sumCredits + taxed);
      card.putCredits(sumCredits);
      historyLogs.push({
        operationType: 'Withdrawal of credits',
        credits: sumCredits + taxed,
        operationTime: formatTime(new Date())
      });
    }
  }

  return {
    getCardOptions,
    putCredits,
    takeCredits,
    setTransactionLimit,
    transferCredits
  }
}

class UserAccount {
  constructor(name) {
    this.name = name;
    this.cards = [];
  }

  addCard() {
    const maxCard = 3;
    if (this.cards.length < maxCard) {
      this.cards.push(userCard(this.cards.length+1));
    }
  }

  getCardByKey(key) {
    return this.cards[key-1];
  }
}

// let user = new UserAccount('Bob');
// user.addCard();
// user.addCard();

// let card1 = user.getCardByKey(1);
// let card2 = user.getCardByKey(2);

// card1.putCredits(500);
// card1.setTransactionLimit(800);
// card1.transferCredits(300, card2);

// card2.takeCredits(50);

// console.log(card1.getCardOptions());

// console.log(card2.getCardOptions());