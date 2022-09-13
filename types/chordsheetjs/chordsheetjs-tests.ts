import { Song, HtmlTableFormatter } from 'chordsheetjs';

const song = new Song({ key: 'value' });
const formatter = new HtmlTableFormatter();
formatter.format(song);
