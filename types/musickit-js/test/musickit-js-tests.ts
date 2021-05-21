MusicKit.configure();

const player = MusicKit.getInstance();

const test = async () => {
    const {
        attributes: { albumName, artistName, durationInMillis, name },
    } = await player.api.song("");
};


player.addEventListener("playbackStateDidChange", (event) => {
  console.log("playbackStateDidChange", event);

  const { oldState, state } = event;
});

player.addEventListener("playbackProgressDidChange", (event) => {
  console.log("playbackProgressDidChange", event);
  console.log("player", player.player.currentPlaybackTime);
})