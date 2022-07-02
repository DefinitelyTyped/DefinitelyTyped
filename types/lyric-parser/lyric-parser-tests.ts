import Lyric = require('lyric-parser');

const lyricStr =
    'W3RpOuiKkuenjV0NClthcjrpn7PpmJnor5flkKwv6LW15pa55amnXQ0KW2FsOuiKkuenjV0NCltieTpdDQpbb2Zmc2V0OjBdDQpbMDA6MDAuMDBd6IqS56eNIC0g6Z+z6ZiZ6K+X5ZCsL';

const lyric = new Lyric(lyricStr, handler);

function handler(params: { lineNum: number; txt: string }) {
    // this hanlder called when lineNum change
}

lyric.play(0);
lyric.stop();
lyric.seek(0);
lyric.togglePlay();
