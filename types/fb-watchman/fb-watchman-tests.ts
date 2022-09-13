import { Client } from "fb-watchman";

const client = new Client();
const clientB = new Client({});

client.capabilityCheck({ optional: [], required: ['relative_root'] }, e => {
    if (e) {
      client.end();
      return;
    }
});
client.connect();

client.command(['watch-project', '/tmp'], () => {});
