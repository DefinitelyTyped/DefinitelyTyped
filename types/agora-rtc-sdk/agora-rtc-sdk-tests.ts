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

client.init('abc', () => {
  client.join('abc', 'testyy', 21230, uid => {
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
