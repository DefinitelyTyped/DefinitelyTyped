import slackify = require("slackify-html");

var text = slackify('this <a href="http://github.com">link</a> is <b>important</b>');
