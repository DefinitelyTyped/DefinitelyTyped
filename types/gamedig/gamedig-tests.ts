import Gamedig = require("gamedig");

Gamedig.query({
  type: "tf2",
  host: "127.0.0.1"
}, (error, state) => {
  if (error) throw error();

  const {
    name,
    map,
    password,
    maxplayers,
    players,
    bots,
    notes
  } = state;
});
