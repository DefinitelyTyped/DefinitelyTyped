import Rcon = require("srcds-rcon");

let rcon = Rcon({
    address: "192.168.1.10",
    password: "test"
})

rcon.connect().then(() => {
    return rcon.command("sv_airaccelerate 10").then(() => {
        console.log("changed sv_airaccelerate");
    });
}).then(
    () => rcon.command("status").then(status => console.log(`got status ${status}`))
).then(
    () => rcon.command("cvarlist").then(cvarlist => console.log(`cvarlist is \n${cvarlist}`))
).then(
    () => rcon.command("changelevel de_dust2").then(() => console.log("changed map"))
).then(
    () => rcon.disconnect()
).catch(err => {
    console.log("caught", err);
    console.log(err.stack);
});