import dush = require('dush');

const emitter = dush(); // $ExpectType Emitter

emitter // $ExpectType Emitter
  .on('hi', place => console.log(`hello ${place}!`))
  .on('hi', place => console.log(`hi ${place}, yeah!`));

emitter.emit('hi', 'world'); // $ExpectType Emitter
