function formatTime(minutes) {
	let day = (minutes / 1440 ^ 0);
	let hour = (minutes - day * 1440) / 60 ^ 0;
	let minute = (minutes - day * 1440) - (hour * 60);
	return day + ' day(s) ' + hour + ' hour(s) ' + minute + ' minute(s) ';
}

formatTime(120);
formatTime(59);
formatTime(3601);