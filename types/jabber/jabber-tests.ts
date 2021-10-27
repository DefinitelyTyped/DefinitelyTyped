import Jabber = require('jabber');

// $ExpectType Jabber
new Jabber();

// $ExpectError
new Jabber('asd');

// $ExpectError
new Jabber([], '1');

// $ExpectType Jabber
const jabberInstance = new Jabber([], 1, 'asd', 'asd');

// $ExpectType string
const email = jabberInstance.createEmail('asd');

// $ExpectType string
const fullName = jabberInstance.createFullName(true);

// $ExpectError
jabberInstance.createParagraph();

// $ExpectType string
const paragraph = jabberInstance.createParagraph(1);

// $ExpectError
jabberInstance.createWord();

const word = jabberInstance.createWord(1, true, true);
