import EachReq = require("each");

function testEach() {
	var EachStaticClass: EachStatic = function (array: any[]) {
		return {
			paused: true,
			readable: false,
			started: 11,
			done: 12,
			total: 22,
			on: function (eventName: string, cb: (a: any, b?: () => void) => void) {
				return EachStaticClass([]);
			},
			parallel: function (mode: any) {
				return EachStaticClass([]);
			},
			shift: function (items: any[]) {},
			write: function (items: any[]) {},
			unshift: function (items: any[]) {},
			end: function () {
				return EachStaticClass([]);
			},
			times: function () {
				return EachStaticClass([]);
			},
			repeat: function () {
				return EachStaticClass([]);
			},
			sync: function () {
				return EachStaticClass([]);
			},
			files: function (a: any, glob?: any) {}
		};
	};

	var each: Each = EachStaticClass([1, 2, 3]);

	var each: Each = EachReq([4, 5, 6]);
}
