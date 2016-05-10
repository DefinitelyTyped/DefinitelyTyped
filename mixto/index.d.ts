// Type definitions for mixto
// Project: https://github.com/atom/mixto
// Definitions by: vvakame <https://github.com/vvakame/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Mixto {
	interface IMixinStatic {
		includeInto(constructor:any):void;
		extend(object:any):void;
	}
}

declare module "mixto" {
	var _tmp:Mixto.IMixinStatic;
	export = _tmp;
}
