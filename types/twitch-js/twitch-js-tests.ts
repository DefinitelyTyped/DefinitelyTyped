import * as twitchJs from 'twitch-js';
import * as WebSocket from 'ws';
import { RequestCallback, Options as ApiOptions } from 'request';

// Implementation of Logger interface.
class LoggerImpl implements twitchJs.Logger {
  info(message?: any, ...optionalParams: any[]) {}
  warn(message?: any, ...optionalParams: any[]) {}
  error(message?: any, ...optionalParams: any[]) {}
}

// =============================================================================
// Basic typed variables to use as parameters, return types, etc.
// =============================================================================
let string = 'foo';
let nullableString: string|null = string;
let stringArr: string[] = [string];
let number = 1;
const nullableNumber: number|null = number;
let boolean = true;
const date: Date = new Date();
const logger: twitchJs.Logger = new LoggerImpl();
const webSocket: WebSocket|null = new WebSocket(string);
const requestCallback: RequestCallback = () => {};
let readyState: 'CONNECTING'|'OPEN'|'CLOSING'|'CLOSED' = 'OPEN';
const listener: twitchJs.Listener = () => {};
let listenerArr: twitchJs.Listener[] = [listener];
const stringOrNumber: string|number = string;

// Complex objects.
const emote: twitchJs.Emote = {
  code: string,
  id: number,
};

const tagsCollection: twitchJs.TagsCollection = {
  a: string,
  b: boolean,
  c: number,
  d: null,
};

let clientOpts: twitchJs.ClientOptions = {
  channels: stringArr,
  connection: {
    server: string,
    port: number,
    reconnect: boolean,
    maxReconnectAttempts: number,
    maxReconnectInterval: number,
    reconnectDecay: number,
    reconnectInterval: number,
    secure: boolean,
    timeout: number,
  },
  identity: {
    username: string,
    password: string,
  },
  options: {
    clientId: string,
    debug: boolean,
    commandTimeout: number,
  },
  logger,
};

const message: twitchJs.Message = {
  raw: string,
  tags: tagsCollection,
  prefix: nullableString,
  command: string,
  params: stringArr,
};

const apiOpts: ApiOptions = {
  url: string,
};

// Promises
let promiseAny: Promise<any>;
let promiseS: Promise<[string]>;
let promiseSa: Promise<string[]>;
let promiseSs: Promise<[string, string]>;
let promiseSss: Promise<[string, string, string]>;
let promiseN: Promise<[number]>;
let promiseSn: Promise<[string, number]>;
let promiseSsn: Promise<[string, string, number]>;
let promiseSsns: Promise<[string, string, number, string]>;

// =============================================================================
// Client class constructor.
// =============================================================================
let client = new twitchJs.Client();
client = new twitchJs.Client({});
client = new twitchJs.Client({connection: {server: string}});
client = new twitchJs.Client({identity: {username: string}});
client = new twitchJs.Client({options: {clientId: string}});
client = new twitchJs.Client(clientOpts);

// =============================================================================
// Client class fields.
// =============================================================================
client.channels = stringArr;
client.clientId = string;
client.currentLatency = number;
client.emotes = string;
client.emotesets = {};
client.emotesets[string] = [emote];
client.globaluserstate = tagsCollection;
client.lastJoined = string;
client.latency = date;
client.log = logger;
client.maxReconnectAttempts = number;
client.maxReconnectInterval = number;
client.moderators = {};
client.moderators[string] = stringArr;
client.opts = clientOpts;
client.pingLoop = nullableNumber;
client.pingTimeout = nullableNumber;
client.port = string;
client.reason = string;
client.reconnect = boolean;
client.reconnectDecay = number;
client.reconnectInterval = number;
client.reconnectTimer = number;
client.secure = boolean;
client.server = string;
client.username = string;
client.userstate = tagsCollection;
client.wasCloseCalled = boolean;
client.ws = webSocket;

// =============================================================================
// Client class methods.
// =============================================================================

// Client.utils
number = client.utils.levenshtein(string, string, boolean);
client.utils.raffle.init(string);
client.utils.raffle.enter(string, string);
boolean = client.utils.raffle.leave(string, string);
nullableString = client.utils.raffle.pick(string);
client.utils.raffle.reset(string);
number = client.utils.raffle.count(string);
boolean = client.utils.raffle.isParticipating(string, string);

// Client base methods
promiseAny = client.api();
promiseAny = client.api(apiOpts);
promiseAny = client.api(apiOpts, requestCallback);
stringArr = client.getChannels();
clientOpts = client.getOptions();
string = client.getUsername();
client.handleMessage(message);
boolean = client.isMod(string, string);
readyState = client.readyState();

// Client commands
promiseSs = client.action(string, string);
promiseSss = client.ban(string, string, string);
promiseS = client.clear(string);
promiseS = client.color(string, string);
promiseSn = client.commercial(string, number);
promiseSn = client.connect();
promiseSn = client.disconnect();
promiseS = client.emoteonly(string);
promiseS = client.emoteonlyoff(string);
promiseSn = client.followersmode(string, number);
promiseS = client.followersmodeoff(string);
promiseSn = client.followersonly(string, number);
promiseS = client.followersonlyoff(string);
promiseSsn = client.host(string, string);
promiseS = client.join(string);
promiseS = client.leave(string);
promiseSs = client.mod(string, string);
promiseSa = client.mods(string);
promiseS = client.part(string);
promiseN = client.ping();
promiseS = client.r9kbeta(string);
promiseS = client.r9kbetaoff(string);
promiseS = client.r9kmode(string);
promiseS = client.r9kmodeoff(string);
promiseS = client.raw(string);
promiseSs = client.say(string, string);
promiseSn = client.slow(string, number);
promiseSn = client.slowmode(string, number);
promiseS = client.slowmodeoff(string);
promiseS = client.slowoff(string);
promiseS = client.subscribers(string);
promiseS = client.subscribersoff(string);
promiseSsns = client.timeout(string, string, number, string);
promiseSs = client.unban(string, string);
promiseS = client.unhost(string);
promiseSs = client.unmod(string, string);
promiseSs = client.whisper(string, string);

// Client EventEmitter inheritance
twitchJs.EventEmitter.defaultMaxListeners = number;
number = twitchJs.EventEmitter.listenerCount(client, stringOrNumber);
client = client.setMaxListeners(number);
boolean = client.emit(stringOrNumber);
boolean = client.emit(stringOrNumber, string, number, boolean);
client = client.addListener(stringOrNumber, listener);
client = client.on(stringOrNumber, listener);
client = client.once(stringOrNumber, listener);
client = client.removeListener(stringOrNumber, listener);
client = client.removeAllListeners();
client = client.removeAllListeners(stringOrNumber);
listenerArr = client.listeners(stringOrNumber);
number = client.listenerCount(stringOrNumber);
client.emits([string, number], [boolean, null]);
