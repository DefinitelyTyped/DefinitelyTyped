import { Socket, Channel, Presence } from 'phoenix';

function test_socket() {
  const socket = new Socket("/ws", {params: {userToken: "123"}});
  socket.connect();
}

function test_channel() {
  const socket = new Socket("/ws", {params: {userToken: "123"}});
  socket.connect();

  const channel = socket.channel("room:123", {token: '123'});

  channel.on("new_msg", msg => console.log("Got message", msg));

  channel.push("new_msg", {body: 'some value'}, 10000)
   .receive("ok", (msg) => console.log("created message", msg))
   .receive("error", (reasons) => console.log("create failed", reasons))
   .receive("timeout", () => console.log("Networking issue..."));

  channel.join()
    .receive("ok", ({messages}) => console.log("catching up", messages))
    .receive("error", ({reason}) => console.log("failed join", reason))
    .receive("timeout", () => console.log("Networking issue. Still waiting..."));
}

function test_hooks() {
  const socket = new Socket("/ws", {params: {userToken: "123"}});
  socket.connect();

  socket.onError(() => console.log("there was an error with the connection!"));
  socket.onClose(() => console.log("the connection dropped"));

  const channel = socket.channel("room:123", {token: '123'});

  channel.onError(() => console.log("there was an error!"));
  channel.onClose(() => console.log("the channel has gone away gracefully"))
}

function test_presence() {
    let state = {};
    const stateFromServer = {};

    const onJoin = (id: string, current: any, newPres: any) => {
      if(!current){
        console.log("user has entered for the first time", newPres)
      } else {
        console.log("user additional presence", newPres)
      }
    };

    const onLeave = (id: string, current: any, leftPres: any) => {
      if(current.metas.length === 0){
        console.log("user has left from all devices", leftPres)
      } else {
        console.log("user left from a device", leftPres)
      }
    };

    state = Presence.syncState(state, stateFromServer, onJoin, onLeave);

    const listBy = (id: string, {metas: [first, ...rest]} : {metas: any[]}) => {
      first.count = rest.length + 1;
      first.id = id;

      return first;
    };

    const onlineUsers = Presence.list(state, listBy);
}
