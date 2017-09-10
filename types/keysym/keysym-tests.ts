import * as keysym from 'keysym';

const records: keysym.Record[] = keysym.records;

const recordFromKeysym: keysym.Record | undefined = keysym.fromKeysym(32);
const recordFromName: keysym.Record | undefined = keysym.fromName('space');
const recordFromUnicodeCharacter: keysym.Record[] | undefined = keysym.fromUnicode(' ');
const recordFromUnicodeNumber: keysym.Record[] | undefined = keysym.fromUnicode(32);

const keysymFromRecord: number = records[0].keysym;
const unicodeFromRecord: number = records[0].unicode;
const statusFromRecord: string = records[0].status;
const namesFromRecord: string[] = records[0].names;
