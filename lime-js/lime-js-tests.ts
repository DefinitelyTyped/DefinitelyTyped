

var transport = new Lime.WebSocketTransport(true);
var clientChannel = new Lime.ClientChannel(transport, true, true);

clientChannel.onMessage = (m) => {
  // message received callback
};
clientChannel.onNotification = (n) => {
  // notification received callback
};
clientChannel.onCommand = (c) => {
  // command received callback
};

transport.onOpen = () => {
  var authentication: Lime.Authentication = new Lime.GuestAuthentication();
  Lime.ClientChannelExtensions.establishSession(clientChannel, "none", "none", "test@msging.net", authentication, "test", (err, session) => {
    var message: Lime.Message = <Lime.Message>{
      id: "123",
      to: "someone@test.net",
      type: "text/plain",
      content: "Hello, world!"
    };
    clientChannel.sendMessage(message);
  });
};
transport.onClose = () => {
  // transport closed callback
};
transport.onError = (err) => {
  // transport error callback
};

transport.open("ws://test.net");
