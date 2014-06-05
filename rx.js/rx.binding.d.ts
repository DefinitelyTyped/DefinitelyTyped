// Type definitions for RxJS-Binding v2.2.25
// Project: http://rx.codeplex.com/
// Definitions by: Carl de Billy <http://carl.debilly.net/>
// Definitions by: Igor Oleinikov <https://github.com/Igorbek>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="rx.d.ts" />
///<reference path="rx.binding-lite.d.ts" />

declare module Rx {
	export interface Observable<T> {
		replayWhileObserved(bufferSize?: number, window?: number, scheduler?: IScheduler): Observable<T>;
	}
}
