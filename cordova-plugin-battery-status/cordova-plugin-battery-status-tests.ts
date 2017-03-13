window.addEventListener('batterystatus',
    (ev: BatteryStatusEvent) => { console.log('Battery level is ' + ev.level); });

window.addEventListener('batterycritical',
    () => { alert('Battery is critical low!'); });