function findTypes() {
	let arrType = [];
	for (let i = 0; i < arguments.length; i++) {
		arrType.push(typeof(arguments[i]));
	}

	return arrType;
}

findTypes('number');
findTypes(null, 5, "hello");

function executeforEach(arr, func) {
	for (let i = 0; i < arr.length; i++) {
		func(arr[i]);
	}
}

executeforEach([1,2,3], function(el) { 
	console.log(el) 
});

function mapArray(arr, func) {
	const res = [];
  executeforEach(arr, function(el) {
    res.push(func(el));
	});
	
  return res;
}

mapArray([2, 5, 8], function(el) { 
	return el + 3;
});

function filterArray(arr, func) {
	const res = [];
	executeforEach(arr, function(el) {
		if (func(el)) {
			res.push(el);
		}
	});

	return res;
}

filterArray([2, 5, 8], function(el) { 
	return el > 3;
});

const arrTask = [
  {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 19,
    "eyeColor": "green",
    "name": "George",
    "favoriteFruit": "banana"
  }
];

function getAmountOfAdultPeople(data) {
	const arrObject = filterArray(arrTask, function(el) {
		if (el.age > data) {
			return el;
		}
	});

	return arrObject.length;
}

getAmountOfAdultPeople(18);

function getGreenAdultBananaLovers(data) {
	const arrObject = filterArray(arrTask, function(el) {
		if (el.age > data && el.favoriteFruit === 'banana' && el.eyeColor === 'green') {
			return el;
		}
	});

	return mapArray(arrObject, function(el) {
		return el.name;
	});
}

getGreenAdultBananaLovers(18);

function keys(obj) {
	let arrKeys = [];
	for (let key in obj) {
		arrKeys.push(key);
	}

	return arrKeys;
}

keys({keyOne: 1, keyTwo: 2, keyThree: 3});

function values(obj) {
	let arrValues = [];
	for (let key in obj) {
		arrValues.push(obj[key]);
	}

	return arrValues;
}

values({keyOne: 1, keyTwo: 2, keyThree: 3});

function showFormattedDate(date) {
	let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	return 'Date: ' + date.getDate() + ' of ' + month[date.getMonth()] + ', ' + date.getFullYear() ;
}

showFormattedDate(new Date('2019-01-27T01:10:00'));

function isEvenYear(date) {
	return !(date.getFullYear() % 2);
}

isEvenYear(new Date('2019-01-27T01:10:00'));

function isEvenMonth(date) {
	return Boolean(date.getMonth() % 2);
}

isEvenMonth(new Date('2019-02-27T01:10:00'));