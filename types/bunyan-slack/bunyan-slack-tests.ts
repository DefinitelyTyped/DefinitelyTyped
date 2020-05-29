import BunyanSlack = require('bunyan-slack');

const bunyanSlack = new BunyanSlack({
    webhook_url: 'https://hooks.slack.com/services/',
});
