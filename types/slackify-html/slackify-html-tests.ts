import slackify = require("slackify-html");

var text = slackify('this <a href="https://github.com">link</a> is <b>important</b>');
