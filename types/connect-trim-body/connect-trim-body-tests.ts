import connectTrimBody from 'connect-trim-body';
import express from 'express';

const app = express();

app.use(connectTrimBody());
