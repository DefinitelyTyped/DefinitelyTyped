window.addEventListener('batterystatus', (ev) => { console.log('Battery level is ' + ev.level); });
window.addEventListener('batterycritical', (ev) => { console.log('Battery is critical: ' + ev.level); });
window.addEventListener('batterylow', (ev) => { console.log('Battery is low: ' + ev.level); });

window.removeEventListener('batterystatus', (ev) => { console.log('Remove: Battery level is ' + ev.level); });
window.removeEventListener('batterycritical', (ev) => { console.log('Remove: Battery is critical: ' + ev.level); });
window.removeEventListener('batterylow', (ev) => { console.log('Remove: Battery is low: ' + ev.level); });

window.addEventListener('batterycritical',
    () => { alert('Battery is critical low!'); });