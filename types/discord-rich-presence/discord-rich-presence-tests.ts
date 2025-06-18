import * as createClient from "discord-rich-presence";

const client = createClient("180984871685062656");

client.updatePresence({
    state: "slithering",
    details: "🐍",
    startTimestamp: new Date(),
    endTimestamp: Date.now() + 1337,
    largeImageKey: "snek_large",
    smallImageKey: "snek_small",
});

client.on("error", (err: string) => console.log(`Error: ${err}`));

client.on("connected", () => {
    console.log("Connected.");
    client.disconnect();
});
