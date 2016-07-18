/// <reference path="index.d.ts"/>

navigator.notification.alert('Alert!', () => { alert('You\'re alerted'); }, 'Alert', 'Ok');
navigator.notification.confirm('Are you ok?', (choice: number) => { alert('Your choice is ' + choice); });
