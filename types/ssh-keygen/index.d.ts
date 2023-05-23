// Type definitions for ssh-keygen 0.5
// Project: http://github.com/ericvicenti/ssh-keygen
// Definitions by: Juniper Hovey <https://github.com/TreehouseFalcon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "ssh-keygen" {
	interface KeygenOptions {
		location?: string;
		comment?: string;
		password?: string | false;
		read?: boolean;
		force?: boolean;
		destroy?: boolean;
		format?: string;
	}

	interface KeygenOutput {
		key: string;
		putKey: string;
	}

	export default function keygen(
		opts?: KeygenOptions | object,
		callback?: (err: string | null, out: KeygenOutput) => unknown,
	): unknown;
}
