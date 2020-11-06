import Eev = require('eev');

const callback = () => {};

const eev = new Eev.default();

eev.on('someEvent', callback);
eev.off('someEvent', callback);
eev.emit('someEvent');
