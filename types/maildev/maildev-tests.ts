import MailDev = require("maildev")

var options: MailDevOptions = {smtp: 1025};
var maildev = new MailDev(options);

var errorCallback = (error: Error): void => {};
maildev.listen(errorCallback);

var eventName = 'new';
var emailCallback = (email: Object): void => {};
maildev.on(eventName, emailCallback)
