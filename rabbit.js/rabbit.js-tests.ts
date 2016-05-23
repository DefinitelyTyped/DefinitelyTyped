
import rabbit = require('rabbit.js');
var context = rabbit.createContext();

context.on('ready', function () { console.log('ready'); });

var pub = context.socket<rabbit.PubSocket>('PUB');
var sub = context.socket<rabbit.SubSocket>('SUB');
var push = context.socket<rabbit.PushSocket>('PUSH');
var pull = context.socket<rabbit.PullSocket>('PULL');
var req = context.socket<rabbit.ReqSocket>('REQ');
var rep = context.socket<rabbit.RepSocket>('REP');
var task = context.socket<rabbit.TaskSocket>('TASK');
var worker = context.socket<rabbit.WorkerSocket>('WORKER');

pub.connect('chat');
pub.write('hello', 'utf8');
pub.close();

sub.connect('chat');
sub.on('data', function (msg: string) { console.log(msg); });
sub.close();

rep.setEncoding('utf8');
rep.on('data', function (msg: string) { rep.write('msg', 'utf8'); });
rep.connect('uppercase');
req.connect('uppercase', function () { req.pipe(process.stdout); });

push.connect('items', function () { pull.pipe(push); });
push.close();
pull.connect('items', function () {});
pull.close();