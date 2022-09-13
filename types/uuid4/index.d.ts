// Type definitions for uuid4 2.0
// Project: https://github.com/tracker1/node-uuid4
// Definitions by: Brenek Harrison <https://github.com/BrenekH>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function uuid4(): string;

declare namespace uuid4 {
	function valid(uuid: string): boolean;
}

export = uuid4;
