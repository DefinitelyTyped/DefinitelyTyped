let client = AgoraRTC.createClient({
  mode: 'live',
  codec: 'vp8'
});

let stream = AgoraRTC.createStream({
  video: true,
  audio: true,
  streamID: 21230,
  screen: false
});

client.init('74a0b7bb5d3e47c7abca0533d17b0afa', () => {
  client.join('74a0b7bb5d3e47c7abca0533d17b0afa', 'testyy', 21230, uid => {
    stream.init(() => {
      client.publish(stream, err => {
        throw(err);
      });
    }, err => {
      throw(err);
    });
  }, err => {
    throw(err);
  });
}, err => {
  throw(err);
});
