import * as framebus from "framebus";

const popup = window.open('https://example.com');
framebus.include(popup);
framebus.emit('hello popup and friends!');

framebus.target('https://example.com').on('my cool event', () => {});

function callback(data: any) {
    console.log('Got back %s as a reply!', data);
}

framebus.publish('Marco!', callback, 'http://listener.example.com');

framebus.publish('Marco!', callback, 'http://listener.example.com');
