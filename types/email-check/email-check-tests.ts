import emailCheck = require('email-check');

const checkWithoutOptions: Promise<boolean> = emailCheck('recipient@email.com');

const options: emailCheck.EmailCheckOptions = { from: 'sender@email.com', host: 'email.com', timeout: 10000 };
const checkWithOptions: Promise<boolean> = emailCheck('recipient@email.com', options);

const partialOptions: emailCheck.EmailCheckOptions = { from: 'sender@email.com' };
const checkWithPartialOptions: Promise<boolean> = emailCheck('recipient@email.com', partialOptions);
