import Gamedig = require("gamedig");

Gamedig.query({
  type: "tf2",
  host: "127.0.0.1",
  port: 27015,
  maxAttempts: 1,
  socketTimeout: 2000,
  attemptTimeout: 10000,
  givenPortOnly: true,
  debug: false,
  requestRules: true
}, (error, state) => {
  if (error) throw error();

  const {
    name,
    map,
    password,
    maxplayers,
    players,
    bots,
    connect,
    ping
  } = state;
});
