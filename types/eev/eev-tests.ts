import Eev from 'eev';

const eev = new Eev();

const callback = () => {};

eev.on('something', callback);
eev.off('something', callback);
eev.emit('something');
