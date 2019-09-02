import * as Subtitle from 'subtitle';

Subtitle.parse("");

const subtitles = [
        {
            start: '00:00:20,000',
            end: '00:00:24,400',
            text: 'Bla Bla Bla Bla'
        },
        {
            start: 24600,
            end: 27800,
            text: 'Bla Bla Bla Bla',
            settings: 'align:middle line:90%'
        }
    ];

const srt = Subtitle.stringify(subtitles);
const vtt = Subtitle.stringifyVtt(subtitles);

const newSubtitles: Subtitle.subTitleType[] = Subtitle.resync(subtitles, 1000);

Subtitle.toMS('00:00:24,400');

Subtitle.toSrtTime(24400);

Subtitle.toVttTime(24400);
