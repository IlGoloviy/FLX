function reverseNumber(a) {
	const reversedNum = a.toString().split('').reverse().join('');
	return Math.sign(a) * parseInt(reversedNum);
}

reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);