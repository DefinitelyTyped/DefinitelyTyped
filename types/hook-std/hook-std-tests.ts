import * as assert from 'assert';
import * as hookStd from 'hook-std';

const hookStdOptions: hookStd.Options = {
	silent: false,
	once: false,
	streams: [
		process.stdout,
		process.stderr,
	]
};

function callStdOut() {
	const testStr = 'test hook-std stdout';

	const transform: hookStd.Transform = str => {
		promise.unhook();
		assert.strictEqual(str.trim(), testStr);
	};

	const promise: hookStd.PromiseUnhook = hookStd.stdout(transform);

	console.log(testStr);

	promise.then();
}

callStdOut();

function callStdErr() {
	const testStr = 'test hook-std stderr';

	const transform: hookStd.Transform = str => {
		promise.unhook();
		assert.strictEqual(str.trim(), testStr);
	};

	const promise: hookStd.PromiseUnhook = hookStd.stderr(transform);

	console.log(testStr);

	promise.then();
}

callStdErr();

function callStdOutWithHook() {
	const testStr = 'test hook-std stdout with unhook function';

	const transform: hookStd.Transform = (str: string, unhook: hookStd.Unhook) => {
		unhook();
		assert.strictEqual(str.trim(), testStr);
	};

	const promise: hookStd.PromiseUnhook = hookStd.stdout(transform);

	console.log(testStr);

	promise.then();
}

callStdOutWithHook();

function callStdErrWithHook() {
	const testStr = 'test hook-std stderr with unhook function';

	const transform: hookStd.Transform = (str: string, unhook: hookStd.Unhook) => {
		unhook();
		assert.strictEqual(str.trim(), testStr);
	};

	const promise: hookStd.PromiseUnhook = hookStd.stderr(transform);

	console.log(testStr);

	promise.then();
}

callStdErrWithHook();

function callStdOutWithOpts() {
	const testStr = 'test hook-std stdout with options';

	const promise: hookStd.PromiseUnhook = hookStd.stdout({}, (str: string) => {
		promise.unhook();
		assert.strictEqual(str.trim(), testStr);
	});

	console.log(testStr);

	promise.then();
}

callStdOutWithOpts();

function callStdErrWithOpts() {
	const testStr = 'test hook-std stderr with options';

	const promise: hookStd.PromiseUnhook = hookStd.stderr({}, (str: string) => {
		promise.unhook();
		assert.strictEqual(str.trim(), testStr);
	});

	console.log(testStr);

	promise.then();
}

callStdErrWithOpts();

function callStdOutWithDefinedOpts() {
	const testStr = 'test hook-std stdout with defined options';

	const promise: hookStd.PromiseUnhook = hookStd.stdout(hookStdOptions, (str: string) => {
		promise.unhook();
		assert.strictEqual(str.trim(), testStr);
	});

	console.log(testStr);

	promise.then();
}

callStdOutWithDefinedOpts();

function callStdErrWithDefinedOpts() {
	const testStr = 'test hook-std stderr with defined options';

	const promise: hookStd.PromiseUnhook = hookStd.stderr(hookStdOptions, (str: string) => {
		promise.unhook();
		assert.strictEqual(str.trim(), testStr);
	});

	console.log(testStr);

	promise.then();
}

callStdErrWithDefinedOpts();
