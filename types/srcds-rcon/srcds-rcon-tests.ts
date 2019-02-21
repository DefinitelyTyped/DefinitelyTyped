import Rcon from "srcds-rcon";

// $ExpectType RconInterface
const rcon = Rcon({
    address: "192.168.1.10",
    password: "test"
});

// $ExpectType Promise<void>
rcon.connect();

// $ExpectType Promise<string>
rcon.command("sv_command 1", 1000);

// $ExpectType Promise<void>
rcon.disconnect();