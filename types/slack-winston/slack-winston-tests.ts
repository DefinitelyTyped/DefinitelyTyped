import { Slack, SlackTransportOptions } from 'slack-winston';

const slackOptions: SlackTransportOptions = {
  domain: "abc",
  token: "abc",
  webhook_url: "abc",
  channel: "abc",
  username: "abc",
  icon_emoji: ":sparkles:",
  level: 'alert',
};

const slackTransport = new Slack(slackOptions);
