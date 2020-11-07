import Eev = require('eev');

const callback = () => {};

const eev: Eev = {
    on: (names, fn) => {},
    off: (names, fn) => {},
    emit: (name) => {}
};

eev.on('someEvent', callback);
eev.off('someEvent', callback);
eev.emit('someEvent');
