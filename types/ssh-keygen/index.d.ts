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
	);
}
