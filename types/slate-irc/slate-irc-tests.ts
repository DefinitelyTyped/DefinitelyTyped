import * as net from "net";
import SlateIRC = require("slate-irc");

let socket: net.Socket;
const client = SlateIRC(socket);

client.on("welcome", (name) => {
  console.log(client.me);
});

client.on("motd", (event) => {
  console.log(event.motd);
});

client.on("join", (event) => {
  console.log(`${event.nick} has joined ${event.channel}`);
});

client.on("part", (event) => {
  console.log(`${event.nick} has parted ${event.channels.join(", ")}`);
});

client.on("nick", (event) => {
  console.log(`${event.nick} is now known as ${event.new}`);
});

client.on("quit", (event) => {
  console.log(`${event.nick} has quit (${event.message}).`);
});

client.on("data", (event) => {
  console.log(`Got ${event.command} command: ${event.string}`);
});

client.on("message", (event) => {
  console.log(`[${event.to}] ${event.from}: ${event.message}`);
});

client.on("notice", (event) => {
  console.log(`[${event.to}] ${event.from}: ${event.message}`);
});

client.on("disconnect", () => {
  console.log("Disconnected.");
});

client.pass("pass");
client.nick("tobi");
client.user("tobi", "Tobi Ferret");

client.join("#channel");
client.join("#channel", "password");

client.names("#channel", (err, names) => {
  console.log(names);
});

client.part("#channel");
client.part("#channel", "Leaving...");
