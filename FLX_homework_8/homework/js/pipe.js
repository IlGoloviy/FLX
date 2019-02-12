function addOne(x) {
  return x + 1;
}

function pipe() {
	//return addOne.apply(context, arguments);
	let num = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    num = arguments[i](num);
  }
  return num;

}

pipe(1, addOne); 
pipe(1, addOne, addOne); 