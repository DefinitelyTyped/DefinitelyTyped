import * as jstz from 'jstimezonedetect';

jstz.determine().name() === 'America/Montreal';
jstz.determine(false).name() === 'America/Montreal';
