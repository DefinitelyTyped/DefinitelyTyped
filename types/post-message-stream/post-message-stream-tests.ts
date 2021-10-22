import PostMessageStream = require("post-message-stream");

const streamA = new PostMessageStream({
  name: "thing one",
  target: "thing two"
});

streamA.on("data", (data) => console.log(data));
streamA.write("test");
