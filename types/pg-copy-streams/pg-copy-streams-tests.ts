import { Client } from "pg";
import { from, to } from "pg-copy-streams";

const client = new Client('fake-config-string');

const copyStream = client.query(from('copy data from stdin;'));

copyStream.write('', err => {
  if (err) {
    console.error(err);
    return;
  }

  copyStream.end();
});

const readStream = client.query(to('copy data to stdout;'));

readStream.pipe(process.stdout);
