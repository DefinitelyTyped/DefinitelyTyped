import cp = require('mz/child_process');

// Promise:
cp.exec('node --version', {
	encoding: String(Math.random() < 0.5 ? 'utf-8' : 'buffer'),
}).then((params: [string | Buffer, string | Buffer]) => {
	(params[0] as Buffer).toString('utf8'); // $ExpectType string
});

// Callback:
cp.exec('node --version', (err, stdout) => {
	err; // $ExpectType ExecException | null
	stdout; // $ExpectType string
});

declare function execStringCallback(err: cp.ExecException | null, stdout: string, stderr: string): void;
declare function execBufferCallback(err: cp.ExecException | null, stdout: Buffer, stderr: Buffer): void;

declare const command: string;
declare const stringEncoding: BufferEncoding;
// tslint:disable-next-line: no-null-undefined-union
declare const bufferEncoding: 'buffer' | null | undefined;
// tslint:disable-next-line: no-null-undefined-union
declare const anyEncoding: string | null | undefined;

// tslint:disable-next-line: no-null-undefined-union
declare const unknownEncodingObject: { encoding: typeof anyEncoding } | null | undefined;

// cp.exec:
{
	// Callback:
	cp.exec(command, execStringCallback);
	cp.exec(command, { encoding: stringEncoding }, execStringCallback);
	cp.exec(command, { encoding: bufferEncoding }, execBufferCallback);
	cp.exec(command, unknownEncodingObject, (err, stdout, stderr) => {
		err; // $ExpectType ExecException | null
		stdout; // $ExpectType string | Buffer
		stderr; // $ExpectType string | Buffer
	});

	// Promise:
	cp.exec(command); // $ExpectType Promise<[string, string]>
	cp.exec(command, { encoding: stringEncoding }); // $ExpectType Promise<[string, string]>
	cp.exec(command, { encoding: bufferEncoding }); // $ExpectType Promise<[Buffer, Buffer]>
	cp.exec(command, unknownEncodingObject); // $ExpectType Promise<[string | Buffer, string | Buffer]>
}

declare function execFileStringCallback(err: Error | null, stdout: string, stderr: string): void;
declare function execFileBufferCallback(err: Error | null, stdout: Buffer, stderr: Buffer): void;

// tslint:disable-next-line: no-null-undefined-union
declare const args: string[] | null | undefined;

// cp.execFile:
{
	// Callback:
	// no `options` definitely means stdout/stderr are `string`.
	cp.execFile(command, execFileStringCallback);
	cp.execFile(command, args, execFileStringCallback);

	// `options` with `"buffer"` or `null` for `encoding` means stdout/stderr are definitely `Buffer`.
	cp.execFile(command, { encoding: bufferEncoding }, execFileBufferCallback);
	cp.execFile(command, args, { encoding: bufferEncoding }, execFileBufferCallback);

	// `options` with well known `encoding` means stdout/stderr are definitely `string`.
	cp.execFile(command, { encoding: stringEncoding }, execFileStringCallback);
	cp.execFile(command, args, { encoding: stringEncoding }, execFileStringCallback);

	// `options` with an `encoding` whose type is `string` means stdout/stderr could either be `Buffer` or `string`.
	// There is no guarantee the `encoding` is unknown as `string` is a superset of `BufferEncoding`.
	cp.execFile(command, { encoding: anyEncoding }, (err, stdout, stderr) => {
		err; // $ExpectType Error | null
		stdout; // $ExpectType string | Buffer
		stderr; // $ExpectType string | Buffer
	});

	cp.execFile(command, args, { encoding: anyEncoding }, (err, stdout, stderr) => {
		err; // $ExpectType Error | null
		stdout; // $ExpectType string | Buffer
		stderr; // $ExpectType string | Buffer
	});

	// `options` without an `encoding` means stdout/stderr are definitely `string`.
	cp.execFile(command, {}, execFileStringCallback);
	cp.execFile(command, args, {}, execFileStringCallback);

	// fallback if nothing else matches. Worst case is always `string | Buffer`.
	cp.execFile(command, unknownEncodingObject, (err, stdout, stderr) => {
		err; // $ExpectType Error | null
		stdout; // $ExpectType string | Buffer
		stderr; // $ExpectType string | Buffer
	});

	cp.execFile(command, args, unknownEncodingObject, (err, stdout, stderr) => {
		err; // $ExpectType Error | null
		stdout; // $ExpectType string | Buffer
		stderr; // $ExpectType string | Buffer
	});

	// Promise:
	// no `options` definitely means stdout/stderr are `string`.
	cp.execFile(command); // $ExpectType Promise<[string, string]>
	cp.execFile(command, args); // $ExpectType Promise<[string, string]>

	// `options` with `"buffer"` or `null` for `encoding` means stdout/stderr are definitely `Buffer`.
	cp.execFile(command, { encoding: bufferEncoding }); // $ExpectType Promise<[Buffer, Buffer]>
	cp.execFile(command, args, { encoding: bufferEncoding }); // $ExpectType Promise<[Buffer, Buffer]>

	// `options` with well known `encoding` means stdout/stderr are definitely `string`.
	cp.execFile(command, { encoding: stringEncoding }); // $ExpectType Promise<[string, string]>
	cp.execFile(command, args, { encoding: stringEncoding }); // $ExpectType Promise<[string, string]>

	// `options` with an `encoding` whose type is `string` means stdout/stderr could either be `Buffer` or `string`.
	// There is no guarantee the `encoding` is unknown as `string` is a superset of `BufferEncoding`.
	cp.execFile(command, { encoding: anyEncoding }); // $ExpectType Promise<[string | Buffer, string | Buffer]>
	cp.execFile(command, args, { encoding: anyEncoding }); // $ExpectType Promise<[string | Buffer, string | Buffer]>

	// `options` without an `encoding` means stdout/stderr are definitely `string`.
	cp.execFile(command, {}); // $ExpectType Promise<[string, string]>
	cp.execFile(command, args, {}); // $ExpectType Promise<[string, string]>

	// fallback if nothing else matches. Worst case is always `string | Buffer`.
	cp.execFile(command, unknownEncodingObject); // $ExpectType Promise<[string | Buffer, string | Buffer]>
	cp.execFile(command, args, unknownEncodingObject); // $ExpectType Promise<[string | Buffer, string | Buffer]>
}
