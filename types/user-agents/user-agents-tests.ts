import UserAgent = require('user-agents');

const agent = new UserAgent();
agent.data; // random data
agent.appName; // data.appName
agent.random; // new agent
agent.toString(); // user agent string

const agent2 = new UserAgent(/Safari/);
agent2.data; // random with safari

const agent3 = new UserAgent({ platform: 'Win32' });
agent3.data; // random with win32
agent3.data.userAgent; // userAgent
