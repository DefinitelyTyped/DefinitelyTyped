navigator.accelerometer.getCurrentAcceleration(
    (acc: Acceleration) => { console.log('X: ' + acc.x + 'Y: ' + acc.y + 'Z: ' + acc.z); },
    () => { alert('Error!'); });

var acchandle: WatchHandle = navigator.accelerometer.watchAcceleration(
    (acc: Acceleration)=> { console.log('X: ' + acc.x + 'Y: ' + acc.y + 'Z: ' + acc.z); },
    () => { alert('Error!'); },
    { frequency: 10 });

navigator.accelerometer.clearWatch(acchandle);
