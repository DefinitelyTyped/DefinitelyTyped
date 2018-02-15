import {
	Parse,
	Open,
	Entry,
	CentralDirectory
} from 'unzipper';

import { createReadStream } from 'fs';

import { get } from 'http';

createReadStream(
	'http://example.org/path/to/archive.zip'
).pipe(
	Parse()
).on('entry', (entry: Entry) => {
	entry.buffer.then((b1: Buffer) => {});
	const s1: string = entry.path;
	const s2: string = entry.type;
	const o1: {
		signature?: number;
		versionsNeededToExtract: number;
		flags: number;
		compressionMethod: number;
		lastModifiedTime: number;
		crc32: number;
		compressedSize: number;
		fileNameLength: number;
		extraFieldLength: number;
	} = entry.vars;

	const o2: {
		signature: number;
		partsize: number;
		uncompressedSize: number;
		compressedSize: number;
		offset: number;
		disknum: number;
	} = entry.extra;
});

const dir1: CentralDirectory = Open.file('Z:\\path\\to\\archive.zip');
const dir2: CentralDirectory = Open.url(get('url/to/archive.zip'), {});
const dir3: CentralDirectory = Open.s3('any', 'any');
