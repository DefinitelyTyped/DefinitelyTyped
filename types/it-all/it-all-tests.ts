import all from 'it-all';

const asyncIterableAny: AsyncIterable<any> = {} as any;
const asyncIterableString: AsyncIterable<string> = {} as any;

const any: Promise<any> = all(asyncIterableAny);
const string: Promise<string[]> = all(asyncIterableString);
const string2: Promise<string[]> = all<string>(asyncIterableString);
