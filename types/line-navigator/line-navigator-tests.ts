import * as LineNavigator from 'line-navigator';

const file = new File(['test'], 'test.txt');

let lineNavigator = new LineNavigator(file);
lineNavigator = new LineNavigator(file, {});
lineNavigator = new LineNavigator(file, { chunkSize: 12345 });
lineNavigator = new LineNavigator(file, { encoding: 'cp-1250' });
lineNavigator = new LineNavigator(file, { throwOnLongLines: false });
lineNavigator = new LineNavigator(file, { chunkSize: 12345, encoding: 'cp-1250', throwOnLongLines: false });

const findCallback: LineNavigator.FindCallback = (err: any, index: number | undefined, match: LineNavigator.FindMatch | undefined) => { };
const findAllCallback: LineNavigator.FindAllCallback = (err: any, index: number, limitHit: boolean | undefined, results: LineNavigator.FindAllResult[] | undefined) => { };
const readLinesCallback: LineNavigator.ReadLinesCallback = (err: any, index: number, lines: string[] | undefined, isEof: boolean | undefined, progress: number | undefined) => { };

lineNavigator.find(new RegExp('test'), 12, findCallback);
lineNavigator.findAll(new RegExp('test'), 12, 12, findAllCallback);
lineNavigator.readLines(12, 12, readLinesCallback);
lineNavigator.readSomeLines(12, readLinesCallback);
