import mkdirp = require("async-mkdirp");

mkdirp('str')
  .then(() => { /* ... */ })
  .catch(() => { /* ... */ });

mkdirp('str', 0o777)
  .then(() => { /* ... */ })
  .catch(() => { /* ... */ });
