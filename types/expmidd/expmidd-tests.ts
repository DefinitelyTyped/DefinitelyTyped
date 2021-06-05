import express = require('express');
import runMiddleware from 'expmidd';
import Cors from 'cors';

const cors = Cors({
  methods: ['GET'],
});
namespace expmidd_tests {
  const app = express();
  app.get('/', async (req, res) => {
    await runMiddleware(req, res, cors);
    res.send('hello world');
  });
}
