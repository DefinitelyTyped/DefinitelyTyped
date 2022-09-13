import usetube = require('usetube');

// $ExpectType Promise<YouTubeResults>
usetube.searchVideo('test');

// $ExpectType Promise<VideoDesc>
usetube.getVideoDesc('test');

// $ExpectType Promise<Video[]>
usetube.getChannelVideos('test');

// $ExpectType Promise<string>
usetube.getChannelDesc('test');

// $ExpectType Promise<Video[]>
usetube.getPlaylistVideos('test');

// $ExpectType Promise<string>
usetube.getVideoDate('test');

// $ExpectType Promise<ChannelResults>
usetube.searchChannel('test');
