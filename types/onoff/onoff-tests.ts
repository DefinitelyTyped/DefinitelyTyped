import * as onoff from 'onoff';

var led:onoff.Gpio = new onoff.Gpio(17, 'out');

var toggleLed = function():void {
    var lastState:number = led.readSync();
    led.writeSync(lastState ^ 1);
};

var intervalId:NodeJS.Timer = setInterval(toggleLed, 100);

setTimeout(function() {
    clearInterval(intervalId);
    led.writeSync(0);
    led.unexport();
}, 2000);
