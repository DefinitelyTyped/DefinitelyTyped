import { Client } from 'discord-rpc';

const clientID = '180984871685062656';

const client = new Client({ transport: 'ipc' });

client.on('ready', () => {
  client.subscribe('GAME_JOIN', ({ secret }) => {
    console.log('Game Join Request', secret);
  });

  client.subscribe('GAME_SPECTATE', ({ secret }) => {
    console.log('Game Spectate Request', secret);
  });

  client.setActivity({
    state: 'slithering',
    details: '🐍',
    startTimestamp: Date.now(),
    endTimestamp: Date.now() + 1337,
    largeImageKey: 'snek_large',
    smallImageKey: 'snek_small',
    partyId: 'snek_party',
    partySize: 1,
    partyMax: 1,
    matchSecret: 'slithers',
    joinSecret: 'boop',
    spectateSecret: 'sniff',
    instance: true,
  }).then(console.log);
});

client.login(clientID).catch(console.error);
