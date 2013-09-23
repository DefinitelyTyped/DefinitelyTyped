/// <reference path="superagent.d.ts" />

import superagent = require('superagent')

var agent = superagent.agent();
agent
  .post('http://localhost:3000/signin')
  .send({ email: 'test@dummy.com', password: 'bacon' })
  .end((err, res) => {
    if (err) throw err;
    if (res.status !== 200) throw new Error('bad status ' + res.status);
    if (res.body.foo === 'bar') throw new Error('bad body');
  });
