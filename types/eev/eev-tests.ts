import Eev from 'eev';

const eev = new Eev();

const callback = () => {};

eev.on('someEvent', callback);
eev.off('someEvent', callback);
eev.emit('someEvent');
