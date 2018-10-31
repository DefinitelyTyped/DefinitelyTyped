import * as ChordSheetJS from 'chordsheetjs';

const song = new ChordSheetJS.Song({ key: 'value' });
const formatter = new ChordSheetJS.HtmlTableFormatter();
formatter.format(song);
