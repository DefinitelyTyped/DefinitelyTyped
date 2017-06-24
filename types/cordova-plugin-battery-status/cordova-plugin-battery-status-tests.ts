function eventCallBack(ev: BatteryStatusEvent) {
    console.log('Battery level is ' + ev.level);
}
window.addEventListener('batterystatus', (ev: BatteryStatusEvent) => { console.log('Battery level is ' + ev.level); });
window.addEventListener('batterystatus', (ev) => { console.log('Battery level is ' + ev.level); });
window.addEventListener('batterycritical', (ev) => { console.log('Battery is critical: ' + ev.level); });
window.addEventListener('batterylow', (ev) => { console.log('Battery is low: ' + ev.level); });

window.addEventListener('baterystatus', eventCallBack);
window.addEventListener('batterycritical', eventCallBack);
window.addEventListener('batterylow', eventCallBack);

window.removeEventListener('batterystatus', eventCallBack);
window.removeEventListener('batterycritical', eventCallBack);
window.removeEventListener('batterylow', eventCallBack);

window.addEventListener('batterycritical', () => { alert('Battery is critical low!'); });
window.addEventListener('batterylow', () => { alert('Battery is low!'); });

function batteryCriticalCallback() {
    alert('Battery is critical low!');
}

function batteryLowCallback() {
    alert('Battery is critical low!');
}

window.addEventListener('batterycritical', batteryCriticalCallback);
window.addEventListener('batterylow', batteryLowCallback);