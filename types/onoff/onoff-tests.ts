import { Gpio, Value } from 'onoff';

const led = new Gpio(17, 'out');
const button = new Gpio(4, 'in', 'both');

button.watch((err, value) => {
	if (err) {
		throw err;
	}

	led.writeSync(value);
});

process.on('SIGINT', () => {
	led.unexport();
	button.unexport();
});

var toggleLed = function():void {
 	var lastState:number = led.readSync();
	led.writeSync(lastState === 0 ? 1 : 0);
};

var intervalId:NodeJS.Timer = setInterval(toggleLed, 100);

setTimeout(function() {
	clearInterval(intervalId);
	led.writeSync(0);
	led.unexport();
}, 2000);

const useLed = (led2: Gpio, value: Value) => led.writeSync(value);
let led2: { writeSync(value: Value): void };

if (Gpio.accessible) {
	led2 = new Gpio(17, 'out');
} else {
	led2 = {
		writeSync: (value: Value) => {
			console.log('virtual led now uses value: ' + value);
		}
	};
}

useLed(led, 1);
