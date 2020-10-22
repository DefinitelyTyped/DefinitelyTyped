import * as discordrpc from "discord-rpc";

discordrpc.register('0'); // $ExpectType boolean
discordrpc.register(0); // $ExpectError

const client = new discordrpc.Client({ transport: 'ipc' });
