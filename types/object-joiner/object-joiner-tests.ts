import objectJoiner = require("object-joiner");

const rs: any = objectJoiner(
  {
    a: 1234,
    x: 2222
  },
  {
    a: 5555
  }
);
