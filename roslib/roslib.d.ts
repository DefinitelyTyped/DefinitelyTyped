// Type definitions for roslib.js
// Project: http://wiki.ros.org/roslibjs
// Definitions by: Stefan Profanter <https://github.com/Pro/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module ROSLIB {
	export class Ros {
		constructor(data: {
			url: string
		});

		on(eventName: string, callback: (event: any) => void) : void;
		connect(url: string) : void;
	}


	export class Service {
		constructor(data: {
			ros: Ros,
			name: string,
			serviceType: string
		});
	}
}
