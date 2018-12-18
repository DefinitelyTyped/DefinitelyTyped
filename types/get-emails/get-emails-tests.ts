import getEmails = require('get-emails');

const text = 'Lorem ipsum dolor, sindresorhus@gmail.com consectetuer unicorn@rainbow.cake elit.';

// $ExpectType Set<string>
getEmails(text);
