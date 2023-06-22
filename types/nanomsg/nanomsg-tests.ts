import { Socket, socket } from 'nanomsg';
const pub: Socket = socket('pub'); // $ExpectType Socket
const sub: Socket = socket("sub"); // $ExpectType Socket

const addr = 'tcp://127.0.0.1:7789';
pub.bind(addr); // $ExpectType number | null
sub.connect(addr); // $ExpectType number | null

// $ExpectType Socket
sub.on('data', buf => {
    console.log(String(buf));
    pub.close(); // $ExpectType void
    sub.close(); // $ExpectType void
});

setTimeout(_ => {
    pub.send('Hello from nanomsg!'); // $ExpectType number
}, 100);
