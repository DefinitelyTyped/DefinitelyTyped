// Test from https://github.com/foreverjs/forever-monitor

import * as forever from "forever-monitor";
forever.start('script')
  .on("start", () => console.log("started"));

forever.kill(10, true);

const child = new (forever.Monitor)('your-filename.js', {
  max: 3,
  silent: true,
  args: []
});

child.on('exit', () => {
  console.log('your-filename.js has exited after 3 restarts');
});

child.start()
  .on("start", () => console.log("started"))
  .restart()
  .stop()
  .on("exit", () => console.log("STOPPED"));
