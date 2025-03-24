import ManagerFactory = require("asterisk-manager");

const manager = ManagerFactory(5038, "localhost", "admin", "password", true);

manager.on("connect", () => {
    console.log("Connected!");
});

manager.on("error", (err) => {
    console.error("Error:", err);
});

manager.connect(5038, "localhost", () => {
    console.log("Connected via connect method");
});

const isConnected: boolean = manager.isConnected();
const isStillConnected: boolean = manager.connected();

manager.login("admin", "password", true, (err, response) => {
    if (err) {
        console.error("Login error:", err);
    } else {
        console.log("Login response:", response);
    }
});

manager.action({ action: "ping" }, (err, response) => {
    if (err) {
        console.error("Ping error:", err);
    } else {
        console.log("Ping response:", response);
    }
});

manager.disconnect(() => {
    console.log("Disconnected");
});
