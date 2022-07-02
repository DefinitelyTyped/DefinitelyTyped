import UserAgent = require('user-agents');

const agent = new UserAgent();
agent.data; // random data
agent.appName; // data.appName
agent.random; // new agent
agent.toString(); // user agent string

const agent2 = new UserAgent(/Safari/);
agent2.data; // random with safari

const agent3 = new UserAgent(new RegExp('MacIntel'));
agent3.data; // $ExpectType Data

const agent4 = new UserAgent({ platform: 'Win32' });
agent4.data; // $ExpectType Data
agent4.data.userAgent; // $ExpectType string

const agent5 = new UserAgent([{ platform: 'Win32' }, /Mozilla/]);
agent5.data; // random with multiple filters
agent5.data.userAgent; // userAgent

// @ts-expect-error
new UserAgent([{ platform: 'Win32' }, /Mozilla/, undefined, 20]);
