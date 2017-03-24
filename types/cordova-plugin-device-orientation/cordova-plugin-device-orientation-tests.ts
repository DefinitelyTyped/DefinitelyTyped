navigator.compass.getCurrentHeading(
    (heading: CompassHeading)=> { console.log('Got heading to ' + heading.magneticHeading); },
    (error: CompassError)=> { alert('Error! ' + error.code); },
    { frequency: 10 });

var accelhandle = navigator.compass.watchHeading(
    (heading: CompassHeading) => { console.log('Got heading to ' + heading.magneticHeading); },
    (error: CompassError) => { alert('Error! ' + error.code); },
    { frequency: 10 });

navigator.compass.clearWatch(accelhandle);
