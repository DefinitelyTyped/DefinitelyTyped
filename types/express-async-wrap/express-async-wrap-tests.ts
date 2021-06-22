import asyncWrap from 'express-async-wrap';
import express = require('express');

const app = express();

const promise = new Promise(resolve => {
  setTimeout(() => {
    resolve("Success");
  }, 250);
});

const asyncHandler = async (_: express.Request, res: express.Response) => {
  await promise;
  res.send('promise awaited');
};

app.get('/', asyncWrap(asyncHandler));
