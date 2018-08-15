import MailDev = require("maildev")

var options: MailDevOptions = {
  silent: true,
  disableWeb: true,
  smtp: 1025,
  web: 1080,
  webUser: 'admin',
  webPass: 'secret'
};
var maildev = new MailDev(options);

var errorCallback = (error: Error): void => {};
maildev.listen(errorCallback);

var eventName = 'new';
var emailCallback = (email: Object): void => {};
maildev.on(eventName, emailCallback)
