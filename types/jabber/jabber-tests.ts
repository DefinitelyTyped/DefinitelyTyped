import Jabber = require('jabber');

// $ExpectType Jabber
new Jabber();

// @ts-expect-error
new Jabber('asd');

// @ts-expect-error
new Jabber([], '1');

// $ExpectType Jabber
const jabberInstance = new Jabber([], 1, 'asd', 'asd');

// $ExpectType string
const email = jabberInstance.createEmail('asd');

// $ExpectType string
const fullName = jabberInstance.createFullName(true);

// @ts-expect-error
jabberInstance.createParagraph();

// $ExpectType string
const paragraph = jabberInstance.createParagraph(1);

// @ts-expect-error
jabberInstance.createWord();

const word = jabberInstance.createWord(1, true, true);
