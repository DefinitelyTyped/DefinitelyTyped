// prettier-ignore

import * as discordrpc from "discord-rpc";

discordrpc.register('0'); // $ExpectType boolean
// @ts-expect-error
discordrpc.register(0);

const client = new discordrpc.Client({ transport: 'ipc' });
// @ts-expect-error
client.subscribe('ACTIVITY_JOIN', {}, () => {});
