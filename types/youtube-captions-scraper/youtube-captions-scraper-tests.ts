import { getSubtitles, Subtitle, SubtitleOutput } from "youtube-captions-scraper";

// $ExpectType Promise<SubtitleOutput>
const subtitles = getSubtitles({ videoID: "abc", lang: "en" });

const awaited = [] as SubtitleOutput;

// $ExpectType Subtitle
const subtitle = awaited[0];

// $ExpectType number
const start = subtitle.start;
// $ExpectType number
const duration = subtitle.dur;
// $ExpectType string
const text = subtitle.text;
