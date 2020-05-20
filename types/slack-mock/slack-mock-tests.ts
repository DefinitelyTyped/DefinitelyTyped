import SlackMock = require("slack-mock");

// Initialization

const slackMock = SlackMock.instance;
SlackMock({
    logLevel: "error",
    rtmPort: 9090
});
SlackMock();

// Events
const eventPayload = { };
slackMock.events.send('http://localhost:9000/event', eventPayload)
    .then(() => {
        slackMock.events.calls.length;
        slackMock.events.calls[0].statusCode;
        slackMock.events.calls[0].headers;
        slackMock.events.calls[0].params;
        slackMock.events.calls[0].url;
    });

slackMock.events.reset();

// Incoming Webhooks
slackMock.incomingWebhooks.calls.length;
slackMock.incomingWebhooks.calls[0].params.text;

// Interactive Buttons
slackMock.interactiveButtons.addResponse({
    statusCode: 201
});

const interactiveButtonPayload = {text: 'abc'};
slackMock.interactiveButtons.send('http://localhost:9000/button', interactiveButtonPayload)
    .then(() => {
        slackMock.interactiveButtons.calls.length;
        slackMock.interactiveButtons.calls[0].params.text;
    });

// Outgoing Webhooks
const outgoingWebhookPayload = {text: 'abc'};
slackMock.outgoingWebhooks.send('http://localhost:9000/outgoing', outgoingWebhookPayload)
    .then(() => {
        slackMock.outgoingWebhooks.calls.length;
        slackMock.outgoingWebhooks.calls[0].params.text;
    });

// RTM
slackMock.rtm.send('1234', {
    type: 'message',
    channel: 'mockChannel',
    user: 'usr',
    text: 'hello'})
    .then(() => {
        slackMock.rtm.calls.length;
        slackMock.rtm.calls[0].message.text;
    });
slackMock.rtm.startServer('1234');
slackMock.rtm.stopServer('1234');

// Slash Commands
const slashCommandPayload = { };
slackMock.slashCommands.send('http://localhost:9000/slash', slashCommandPayload)
    .then(() => {
        slackMock.slashCommands.calls.length;
        slackMock.slashCommands.calls[0].params.text;
        slackMock.slashCommands.calls[0].params.response_type;
    });

// Web (OAuth Example)

const botToken = 'xoxb-XXXXXXXXXXXX-TTTTTTTTTTTTTT';
slackMock.web.addResponse({
  url: 'https://slack.com/api/oauth.access',
  statusCode: 200,
  body: {
    access_token: 'xoxp-XXXXXXXX-XXXXXXXX-XXXXX',
    scope: 'incoming-webhook,commands,bot',
    team_name: 'mockTeam',
    team_id: 'Tmock',
    bot: {
      bot_user_id: 'Bmock',
      bot_access_token: botToken
    }
  }
});

slackMock.web.addResponse({
  url: 'https://slack.com/api/rtm.start',
  statusCode: 200,
  body: {
    ok: true,
    self: {
      name: 'mockSelf',
      id: 'Bmock'
    },
    team: {
      name: 'mockTeam',
      id: 'Tmock'
    }
  }
});
