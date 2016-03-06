﻿// Type definitions for Insomnia-PhoneGap-Plugin v4.0.1
// Project: https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin/
// Definitions by: Markus Wagner <https://github.com/Ritzlgrmft/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface Plugins {
	insomnia: InsomniaPlugin.Insomnia;
}

declare module InsomniaPlugin {

	export interface Insomnia {
		
		/**
		 * Prevent the screen of the mobile device from falling asleep.
		 */
		keepAwake(success?: () => any, fail?: () => any): void;

		/**
		 * After making your app practically a zombie, you can allow it to sleep again by calling allowSleepAgain.
		 */
		allowSleepAgain(success?: () => any, fail?: () => any): void;
	}
}