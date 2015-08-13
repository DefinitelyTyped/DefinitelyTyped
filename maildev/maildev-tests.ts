/// <reference path="maildev.d.ts"/>

import MailDev = require("maildev")

var options: MailDevOptions = {smtp: 1025};
var maildev = new MailDev(options);

var errorCallback = (error: Error) => {};
maildev.listen(errorCallback);

var eventName = 'new';
maildev.on(eventName, errorCallback)
