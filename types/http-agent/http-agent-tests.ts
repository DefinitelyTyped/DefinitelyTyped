import httpAgent = require('http-agent');

let agent = new httpAgent.HttpAgent('api.github.com/octocat?test=1');
agent.addListener('next', () => {});
agent.url; // $ExpectType string
agent.body; // $ExpectType string
agent.port; // $ExpectType number
agent.host; // $ExpectType string
agent.options; // $ExpectType OptionsWithUri
agent = new httpAgent.HttpAgent('api.github.com', ['octocat?test=1']);
agent = new httpAgent.HttpAgent('https://api.github.com', [{ method: 'GET', uri: 'octocat?test=1' }]);
agent = new httpAgent.HttpAgent('example.com', ['/', 'page', 'another']);
agent = new httpAgent.HttpAgent('example.com', ['/', 'page', 'another'], { encoding: 'utf8' });
agent = new httpAgent.HttpAgent({ host: 'example.com', urls: ['/', 'page', 'another'], encoding: 'utf8' });
agent = new httpAgent.HttpAgent({ host: 'example.com', encoding: 'utf8' }, ['/', 'page', 'another']);
agent = httpAgent.create('https://api.github.com', [{ method: 'GET', uri: 'octocat?test=1' }]);
agent = httpAgent.create({ host: 'example.com', encoding: 'utf8' }, ['/', 'page', 'another']);
agent.prevUrls; // $ExpectType string[]
agent.nextUrls; // $ExpectType string[]
agent.addUrl('test'); // $ExpectType void
