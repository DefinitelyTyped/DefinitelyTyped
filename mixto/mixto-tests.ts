/// <reference path="./mixto.d.ts" />

import Mixin = require("mixto");

interface ISampleStatic extends Mixto.IMixinStatic {
	new ():ISample;
}

interface ISample {
	test():string;
}

declare var Sample: ISampleStatic;

Sample.includeInto(Function);
Sample.extend({});
