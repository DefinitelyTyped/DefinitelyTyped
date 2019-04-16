/// <reference types="node"/>

import singleLineLog = require('single-line-log');
const log = singleLineLog.stderr;

let i = 0;

setInterval(() => {
  i++;

  const s = `line 1: ${Math.random()}`;

  log(s);

  if (i === 50) {
    log.clear();
    process.exit(0);
  }
}, 200);
