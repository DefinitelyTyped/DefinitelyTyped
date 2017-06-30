import * as framebus from "./index";

let popup = window.open('https://example.com');
framebus.include(popup);
framebus.emit('hello popup and friends!');

framebus.target('https://example.com').on('my cool event', () => {});

framebus.publish('Marco!', callback, 'http://listener.example.com');

let callback = (data: any) => {
    console.log('Got back %s as a reply!', data);
};
framebus.publish('Marco!', callback, 'http://listener.example.com');
