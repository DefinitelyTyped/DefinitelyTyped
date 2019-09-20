import { Socket, socket } from "nanomsg";
const pub: Socket = socket("pub");
const sub: Socket = socket("sub");

const addr = "tcp://127.0.0.1:7789";
pub.bind(addr);
sub.connect(addr);

sub.on('data', buf => {
  console.log(String(buf));
  pub.close();
  sub.close();
});

setTimeout(() => {
  pub.send("Hello from nanomsg!");
}, 100);
