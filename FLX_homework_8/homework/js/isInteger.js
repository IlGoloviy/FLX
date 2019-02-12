function isInteger(a) {
	return (a ^ 0) === a;
}

isInteger(5);
isInteger(5.1);