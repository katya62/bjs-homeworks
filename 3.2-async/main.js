class AlarmClock  {
	constructor () {
		this.arr = [];
		this.id = null;
	} 
	addClock (time,callback,id) {
		if (!id) { 
			throw new Error('Не передан Id');
		}
		if (this.arr.some(timer => timer.id === id )) { 
			throw new Error('Id уже существует');
		}
		this.arr.push ({time,callback,id});
	}

	removeClock(id) {
		const timersCount = this.arr.length;
		this.arr = this.arr.filter(timer => timer.id !== id );
		return timersCount !== this.arr.length;
	}
	getCurrentFormattedTime() {
		const date = new Date(); 
		return `${String(date.getHours()).padStart(2,'0')}:${String(date.getMinutes()).padStart(2,'0')}`;
	}
	checkClock(timer) {
		if (timer.time === this.getCurrentFormattedTime()) {
			timer.callback();
		}
	}
	start () {
		if (this.id === null) {
			this.id = setInterval (() => this.arr.forEach(timer => this.checkClock(timer)),1000);
		}
	}
	stop () {
		if (this.id !== null) {
			clearInterval(this.id);
			this.id = null;
		}
	}
	printAlarms () {
		this.arr.forEach(console.log);
	}
	clearAlarms () {
		this.stop();
		this.arr = [];
	}
}

let phoneAlarm = new AlarmClock;

phoneAlarm.addClock (phoneAlarm.getCurrentFormattedTime(), () => console.log ("Скоро спать"),1);
phoneAlarm.addClock ("22:16", () => {
	console.log ("Пора готовиться ко сну!");
	phoneAlarm.removeClock(2)
},2);
phoneAlarm.addClock ("22:17", () => console.log ("Иди умываться!"),3);

phoneAlarm.addClock ("22:18", () => {
	console.log ("Иди спать, завтра рано на работу!");
	phoneAlarm.clearAlarms();
	phoneAlarm.printAlarms();

},4);
phoneAlarm.addClock ("22:03", () => console.log ("Иди спать, завтра рано на работу!"),5);
phoneAlarm.printAlarms();
phoneAlarm.start();