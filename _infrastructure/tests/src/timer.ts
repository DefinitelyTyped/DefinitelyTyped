/// <reference path="../_ref.d.ts" />
/// <reference path="../runner.ts" />

module DT {
	'use strict';

	/////////////////////////////////
	// Timer.start starts a timer
	// Timer.end stops the timer and sets asString to the pretty print value
	/////////////////////////////////
	export class Timer {
		startTime: number;
		time = 0;
		asString: string = '<not-started>'

		public start() {
			this.time = 0;
			this.startTime = this.now();
			this.asString = '<started>';
		}

		public now(): number {
			return Date.now();
		}

		public end() {
			this.time = (this.now() - this.startTime) / 1000;
			this.asString = Timer.prettyDate(this.startTime, this.now());
		}

		public static prettyDate(date1: number, date2: number): string {
			var diff = ((date2 - date1) / 1000);
			var day_diff = Math.floor(diff / 86400);

			if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31) {
				return null;
			}

			return (<string><any> (day_diff == 0 && (
			diff < 60 && (diff + ' seconds') ||
			diff < 120 && '1 minute' ||
			diff < 3600 && Math.floor(diff / 60) + ' minutes' ||
			diff < 7200 && '1 hour' ||
			diff < 86400 && Math.floor(diff / 3600) + ' hours') ||
			day_diff == 1 && 'Yesterday' ||
			day_diff < 7 && day_diff + ' days' ||
			day_diff < 31 && Math.ceil(day_diff / 7) + ' weeks'));
		}
	}
}
