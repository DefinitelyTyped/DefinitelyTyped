let room = HBInit({
    roomName: "test room",
    playerName: "bot",
    geo: {code: "DE", lat: 50, lon: 50}
});

room.onPlayerJoin = p => {
    const cf = room.CollisionFlags;
    room.setPlayerDiscProperties(p.id, { cGroup: cf.ball });
    room.sendAnnouncement(`${p.name} has joined.`);
};
