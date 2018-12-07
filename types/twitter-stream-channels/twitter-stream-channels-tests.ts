import TwitterStreamChannels = require("twitter-stream-channels");

const tsc = new TwitterStreamChannels({
  consumer_key: '',
  consumer_secret: '',
  app_only_auth: true,
});

let channels = {
  "js-frameworks": ['angularjs', 'jquery', 'backbone', 'emberjs'],
  "web": ['javascript', 'nodejs', 'html5', 'css', 'angularjs']
};

tsc.streamChannels({track: channels})
