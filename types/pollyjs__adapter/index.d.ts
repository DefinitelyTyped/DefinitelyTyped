// Type definitions for @pollyjs/adapter 1.3
// Project: https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter
// Definitions by: feinoujc <https://github.com/feinoujc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
export default class Adapter {
	static readonly name: string;
	static readonly type: string;
	connect(): void;
	disconnect(): void;
}
