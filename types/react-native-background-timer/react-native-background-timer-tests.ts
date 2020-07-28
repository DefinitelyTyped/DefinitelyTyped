// Tests taken from Examples at https://github.com/ocetnik/react-native-background-timer
import BackgroundTimer from 'react-native-background-timer';

BackgroundTimer.runBackgroundTimer(() => {
    // do stuff
    },
    3000);
    // rest of code will be performing for iOS on background too
    BackgroundTimer.stopBackgroundTimer();

BackgroundTimer.start();
// Do whatever you want incuding setTimeout;
BackgroundTimer.stop();

// Start a timer that runs continuous after X milliseconds
const intervalId = BackgroundTimer.setInterval(() => {
    // this will be executed every 200 ms
    // even when app is the the background
}, 200);

// Cancel the timer when you are done with it
BackgroundTimer.clearInterval(intervalId);

// Start a timer that runs once after X milliseconds
const timeoutId = BackgroundTimer.setTimeout(() => {
    // this will be executed once after 10 seconds
    // even when app is the the background
}, 10000);

// Cancel the timeout if necessary
BackgroundTimer.clearTimeout(timeoutId);
