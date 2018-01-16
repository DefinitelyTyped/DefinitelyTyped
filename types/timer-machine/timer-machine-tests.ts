import * as Timer from "timer-machine";

let myTimer = new Timer();

myTimer.start();
myTimer.stop();
myTimer.time();

Timer.get('my').start();
Timer.get('my').time();
Timer.destroy('my');

myTimer = Timer.get('my');

const timer1 = new Timer();
timer1.start();

const timer2 = new Timer(true);
timer2.start();

let timer = new Timer();
timer.stop();
timer.start();
timer.stop();

timer = new Timer();
timer.isStarted();
timer.toggle();
timer.isStarted();
timer.toggle();
timer.isStarted();

timer = new Timer();
timer.start();
timer.timeFromStart() === timer.time();

timer = new Timer();
timer.isStarted();
timer.start();
timer.isStarted();

timer = new Timer();
timer.isStopped();
timer.start();
timer.isStopped();

timer.on('start', () => {
});

timer.on('stop',  () => {
});

timer.on('time',  () => {
});
