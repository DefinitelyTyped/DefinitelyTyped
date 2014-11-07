// Type definitions for gently
// Project: https://www.npmjs.org/package/gently
// Definitions by: bonnici <https://github.com/bonnici>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/gently.d.ts

declare module "gently" {
	export = Gently;

	class Gently {
		constructor();
		hijacked: any[];

		expect(obj: any, method: string, stubFn?: (...args: any[]) => any): (...args: any[]) => any;
		expect(obj: any, method: string, count: number, stubFn: (...args: any[]) => any): (...args: any[]) => any;

		restore(obj: any, method: string): void;

		hijack(realRequire: (id: string) => any): (id: string) => any;

		stub(location: string, exportsName?: string): any;

		verify(msg?: string): void;
	}
}
