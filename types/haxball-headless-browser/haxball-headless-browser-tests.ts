let room = HBInit({
    roomName: "test room",
    playerName: "bot",
    geo: { code: "DE", lat: 50, lon: 50 },
});

const customStadium: StadiumObject = {
    "bg": {},
};

room.onPlayerJoin = p => {
    const cf = room.CollisionFlags;
    room.setPlayerDiscProperties(p.id, { cGroup: cf.ball });
    room.sendAnnouncement(`${p.name} has joined.`);
    room.setPlayerAvatar(p.id, null);
    room.setCustomStadium(JSON.stringify(customStadium));
};

room.onPlayerChat = (player, message) => {
    if (message === "!admin") {
        room.setPlayerAdmin(player.id, true);
        return false; // Filter the message
    }
    // Return nothing (void) to allow the message
};
