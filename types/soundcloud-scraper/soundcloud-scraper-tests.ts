import * as SoundCloud from 'soundcloud-scraper';

const placeholder = 'test';

// Client Tests
const client = new SoundCloud.Client();

client.apiVersion(); // $ExpectType Promise<string>
client.createAPIKey(placeholder); // $ExpectType Promise<void>
client.fetchStreamURL(placeholder); // $ExpectType Promise<string>
client.getEmbed(placeholder); // $ExpectType Promise<Embed>
client.getPlaylist(placeholder); // $ExpectType Promise<Playlist>
client.getSongInfo(placeholder); // $ExpectType Promise<Song>
client.getUser(placeholder); // $ExpectType Promise<UserInfo>
client.search(placeholder, 'all'); // $ExpectType Promise<SearchResult[]>

// Downloader Tests
const downloader = new SoundCloud.Downloader();

downloader.downloadHLS(placeholder); // $ExpectType Promise<Stream>
downloader.downloadProgressive(placeholder); // $ExpectType Promise<IncomingMessage>

// Embed tests
const embed = new SoundCloud.Embed({}, placeholder);

embed.toHTML(); // $ExpectType string
embed.toJSON(); // $ExpectType object
embed.toString(); // $ExpectType string

// Song tests
const song = new SoundCloud.Song({});

song.downloadHLS(); // $ExpectType Promise<Stream>
song.downloadProgressive(); // $ExpectType Promise<IncomingMessage>
song.toJSON(); // $ExpectType SongData
song.toString(); // $ExpectType string

// Utils tests
const utils = SoundCloud.Util;

utils.fetchSongStreamURL(placeholder, placeholder); // $ExpectType Promise<string>
utils.keygen(); // $ExpectType Promise<string>
utils.last([]); // $ExpectType void
utils.loadHTML(placeholder); // $ExpectType Root
utils.parseComments(placeholder); // $ExpectType Comment[]
utils.parseDuration(placeholder); // $ExpectType number
utils.parseHTML(placeholder); // $ExpectType Promise<string>
utils.request(placeholder); // $ExpectType Promise<Response>
utils.validateURL(placeholder); // $ExpectType boolean
