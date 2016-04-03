// Type definitions for luaparse
// Project: https://github.com/oxyc/luaparse
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "luaparse" {
	export function parse(code: string, options?: Object): Object;
}
