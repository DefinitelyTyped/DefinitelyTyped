

import express = require('express');
import Slack = require('node-slack');
let app = express();

var hook_url: string = 'foo_hook';
var options: Slack.Option = { proxy: '' };

var slack = new Slack(hook_url, options);

slack.send({
    text: 'Howdy!',
    channel: '#foo',
    username: 'Bot'
});

var attachment_array: any[] = [];

slack.send({
    text: 'Howdy!',
    channel: '#foo',
    username: 'Bot',
    icon_emoji: 'taco',
    attachments: attachment_array,
    unfurl_links: true,
    link_names: 1
});


app.post('/yesman', function(req, res) {

    var reply = slack.respond(req.body, function(hook: any) {

        return {
            text: 'Good point, ' + hook.user_name,
            username: 'Bot'
        };

    });

    res.json(reply);

});

