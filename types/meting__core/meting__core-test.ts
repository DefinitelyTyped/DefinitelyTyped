import Meting, {
    type FormattedLyric,
    type FormattedPic,
    type FormattedSong,
    type FormattedUrl,
    type Platform,
} from "@meting/core";

const platforms: readonly Platform[] = ["netease", "tencent", "kugou", "baidu", "kuwo"] as const;

// @ts-expect-error
const wrongPlatform: Platform = "wrong";

const defaultMeting = new Meting("tencent");
defaultMeting.site("netease").cookie("foo=bar").format(true);
defaultMeting.search("test", { type: 1 });

// @ts-expect-error
defaultMeting.info.statusCode = 200;
// @ts-expect-error
defaultMeting.VERSION = "9999.99.99";

platforms.forEach((platform) => {
    const meting = new Meting(platform);

    meting.site(platform).cookie("foo=bar").format(true);

    meting.search("test").then((res: string) => {
        const songList: FormattedSong[] = JSON.parse(res);
        songList.forEach((song) => {
            (song.id, song.name, song.artist, song.album, song.pic_id, song.url_id, song.lyric_id, song.source);
        });
    });

    meting.url("123").then((res: string) => {
        const url: FormattedUrl = JSON.parse(res);
        (url.url, url.br, url.size);
    });

    meting.pic("123").then((res: string) => {
        const pic: FormattedPic = JSON.parse(res);
        pic.url;
    });

    meting.lyric("123").then((res: string) => {
        const lyric: FormattedLyric = JSON.parse(res);
        (lyric.lyric, lyric.tlyric);
    });
});
