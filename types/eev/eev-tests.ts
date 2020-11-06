import Eev = require('eev');

const callback = () => {};

Eev.on('someEvent', callback);
Eev.off('someEvent', callback);
Eev.emit('someEvent');
