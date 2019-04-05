import vfileMessage = require('vfile-message');

const message = vfileMessage('Error!');
vfileMessage(new Error());
vfileMessage('Error!', {
  type: 'random node'
});
vfileMessage('Error!', {
  start: {
    line: 1,
    column: 1
  },
  end: {
    line: 1,
    column: 1
  }
});
vfileMessage('Error!', {
  line: 1,
  column: 1
});
vfileMessage('Error!', undefined, 'test');

message.file = '';
message.name = '';
message.reason = '';
message.message = '';
message.stack = '';
message.fatal = null;
message.fatal = true;
message.column = 1;
message.line = 1;
