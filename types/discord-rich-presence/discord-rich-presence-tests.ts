import DiscordRPC from "discord-rich-presence";

const client = DiscordRPC("180984871685062656");

client.updatePresence({
    state: "slithering",
    details: "🐍",
    startTimestamp: Date.now(),
    endTimestamp: Date.now() + 1337,
    largeImageKey: "snek_large",
    smallImageKey: "snek_small",
});

client.on("error", err => console.log(`Error: ${err}`));

client.on("connected", () => {
    console.log("Connected.");
    client.disconnect();
});
