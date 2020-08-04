import youtube = require('simple-youtube-api');
const yt = new youtube('api key');

yt.getChannel('test');

yt.getChannelByID('123456');

yt.searchChannels('test', 5);

yt.getVideo('https://www.youtube.com/watch?v=F5EbXtaiWww');

yt.getVideoByID('123456');

yt.search('test', 1);
