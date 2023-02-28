import { parse } from '@hapi/subtext';
import { IncomingMessage } from 'http';
import { Socket } from 'net';

const socket = new Socket();
const req = new IncomingMessage(socket);

parse(req, null, {
  output: "data",
  parse: true,
})
  .then(result => {
    console.log(result.payload);
    console.log(result.mime);
  });
