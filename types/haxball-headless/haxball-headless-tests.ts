let room = HBInit({
    roomName: "test room",
    playerName: "bot",
    geo: {code: "DE", lat: 50, lon: 50}
});

room.onPlayerJoin = p => {
    room.sendAnnouncement(`${p.name} has joined.`);
};
