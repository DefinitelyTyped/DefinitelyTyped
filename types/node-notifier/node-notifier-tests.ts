import notifier = require('node-notifier');
import path = require('path');
import fs = require('fs');

notifier.notify();
notifier.notify('Hello there');
notifier.notify(
    {
        title: 'My awesome title',
        message: 'Hello from node, Mr. User!',
        icon: path.join(__dirname, 'coulson.jpg'), // absolute path (not balloons)
        sound: true, // Only Notification Center or Windows Toasters
        wait: true, // wait with callback until user action is taken on notification
    },
    (err: any, response: any) => {
        // response is response from notification
    },
);

notifier.on('click', (notifierObject: any, options: any) => {
    // Happens if `wait: true` and user clicks notification
});

notifier.on('timeout', (notifierObject: any, options: any) => {
    // Happens if `wait: true` and notification closes
});

const options = {};

import NotificationCenter = require('node-notifier/notifiers/notificationcenter');
new NotificationCenter(options).notify();

import NotifySend = require('node-notifier/notifiers/notifysend');
new NotifySend(options).notify();

import WindowsToaster = require('node-notifier/notifiers/toaster');
new WindowsToaster(options).notify();

import Growl = require('node-notifier/notifiers/growl');
new Growl(options).notify();

import WindowsBalloon = require('node-notifier/notifiers/balloon');
new WindowsBalloon(options).notify();

new notifier.NotificationCenter(options).notify();
new notifier.NotifySend(options).notify();
new notifier.WindowsToaster(options).notify(options);
new notifier.WindowsBalloon(options).notify(options);
new notifier.Growl(options).notify(options);

//
// All notification options with their defaults:
//

const notifier2 = new notifier.NotificationCenter({
    withFallback: false, // use Growl if <= 10.8?
    customPath: void 0, // Relative path if you want to use your fork of terminal-notifier
});

notifier2.notify(
    {
        title: void 0,
        subtitle: void 0,
        message: void 0,
        sound: false, // Case Sensitive string of sound file (see below)
        icon: 'Terminal Icon', // Set icon? (Absolute path to image)
        contentImage: void 0, // Attach image? (Absolute path)
        open: void 0, // URL to open on click
        wait: false, // if wait for notification to end
        actions: ['Action 1', 'Action 2'],
        closeLabel: 'Close',
        dropdownLabel: 'Dropdown',
        reply: true,
        timeout: false,
    },
    (error: any, response: any) => {
        console.log(response);
    },
);

//
// Usage WindowsToaster
//

const notifier3 = new notifier.WindowsToaster({
    withFallback: false, // Fallback to Growl or Balloons?
    customPath: void 0, // Relative path if you want to use your fork of toast.exe
});

notifier3.notify(
    {
        title: void 0,
        message: void 0,
        icon: void 0, // absolute path to an icon
        sound: false, // true | false.
        wait: false, // if wait for notification to end
        appID: '',
        id: 1,
        install: '/',
        remove: 1,
    },
    (error: any, response: any) => {
        console.log(response);
    },
);

//
// Usage Growl
//

const notifier4 = new notifier.Growl({
    name: 'Growl Name Used', // Defaults as 'Node'
    host: 'localhost',
    port: 23053,
});

notifier4.notify({
    title: 'Foo',
    message: 'Hello World',
    icon: fs.readFileSync(__dirname + '/coulson.jpg', 'utf8'),
    wait: false, // if wait for user interaction

    // and other growl options like sticky etc.
    sticky: false,
    label: void 0,
    priority: void 0,
});

//
// Usage WindowsBalloon
//

const notifier5 = new notifier.WindowsBalloon({
    withFallback: false, // Try Windows 8 and Growl first?
    customPath: void 0, // Relative path if you want to use your fork of notifu
});

notifier5.notify(
    {
        title: void 0,
        message: void 0,
        sound: false, // true | false.
        time: 5000, // How long to show balloons in ms
        wait: false, // if wait for notification to end
    },
    (error: any, response: any) => {
        console.log(response);
    },
);

//
// Usage NotifySend
//

const notifier6 = new notifier.NotifySend();

notifier6.notify({
    title: 'Foo',
    message: 'Hello World',
    icon: __dirname + '/coulson.jpg',
    // .. and other notify-send flags:
    urgency: void 0,
    timeout: void 0,
    category: void 0,
    hint: void 0,
});

notifier6.notify({
    title: 'Foo',
    message: 'Hello World',
    icon: __dirname + '/coulson.jpg',
    wait: true,
    // .. and other notify-send flags:
    urgency: void 0,
    category: void 0,
    hint: void 0,
});

notifier6.notify({
    title: 'Foo',
    message: 'Hello World',
    icon: __dirname + '/coulson.jpg',
    timeout: false,
    // .. and other notify-send flags:
    urgency: void 0,
    category: void 0,
    hint: void 0,
});
