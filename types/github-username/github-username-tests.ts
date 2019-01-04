import githubUsername = require('github-username');

// $ExpectType Promise<string>
githubUsername('sindresorhus@gmail.com', 'deadbeef');
