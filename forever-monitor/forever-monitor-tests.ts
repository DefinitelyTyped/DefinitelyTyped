// Test from https://github.com/foreverjs/forever-monitor

import * as forever from "forever-monitor";

const child = new (forever.Monitor)('your-filename.js', {
  max: 3,
  silent: true,
  args: []
});

child.on('exit', function() {
  console.log('your-filename.js has exited after 3 restarts');
});

child.start();
