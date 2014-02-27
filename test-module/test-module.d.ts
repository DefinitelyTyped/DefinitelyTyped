interface Such {
	amaze(): void;
	much(): void;
	fuss(): void;
}
declare module 'test-module' {
    export function wow(): Such;
}
