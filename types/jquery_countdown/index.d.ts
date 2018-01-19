// Type definitions for JQuery.countdown 2.2.0
// Project: https://github.com/hilios/jQuery.countdown
// Definitions by: Larry Bahr <https://github.com/larrybahr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="jquery" />

interface JQuery
{
	countdown: JQueryCountdown.Countdown;
}

declare namespace JQueryCountdown
{
	interface JQueryCountdown extends JQuery
	{
		countdown: Countdown;
	}

	interface Countdown
	{
		/**
		 * @description Control the execution flow of the countdown
		 * @param control - Method to execute
		 * @example
		 * // Pause the countdown
		 * $('div#clock').countdown('pause');
		 * // Resume the countdown
		 * $('div#clock').countdown('resume');
		 * // Pause the countdown
		 * $('div#clock').countdown('stop');
		 * // Resume the countdown
		 * $('div#clock').countdown('start');
		 */
		(control: "pause" | "resume" | "stop" | "start"): JQueryCountdown;

		/**
		 * @description Create teh countdown
		 * @param finalDate - The target date that you are seeking to countdown
		 * @param [callback] - A function that will handle the event triggered, despite the fact we have three event types, all of them will have the same object properties, where you can access the offset calculation.
		 */
		(finalDate: Date | number | string, callback?: ((event: CallbackEventObject) => void)): JQueryCountdown;

		/**
		 * @description Create teh countdown
		 * @param finalDate - The target date that you are seeking to countdown
		 * @param [configurationObject] - The plugin accepts some configuration passing by an object has the function second argument. This way one can control the precision the plugin will have and allow customizations
		 */
		(finalDate: Date | number | string, configurationObject?: ConfigurationObject): JQueryCountdown;
	}

	/**
	 * @description A function that will handle the event triggered, despite the fact we have three event types, all of them will have the same object properties, where you can access the offset calculation.
	 * @callback CallbackEvent
	 * @param {CallbackEventObject} event
	 * @return {void}
	 */

	interface CallbackEventObject extends JQuery.Event<HTMLElement, null>
	{
		/**
		 * @description The namespaced event type {update,finish,stop}.countdown
		 */
		type: "update" | "finish" | "stop";

		/**
		 * @description The formatter function
		 * @example
		 * event.strftime('%-D day%!D %H:%M:%S');
		 * // => 1 day 23:45:56 (or) 2 days 23:45:56
		 * // Now in german
		 * event.strftime('%-D tag%!D:e; %H:%M:%S');
		 * // => 1 tag 23:45:56 (or) 2 tage 23:45:56
		 * event.strftime('%S %!S:sekunde,sekunden;');
		 * // => 01 sekunde (or) 02 sekunden
		 */
		strftime: (format: string) => string;

		/**
		 * @description The parsed final date native object
		 */
		finalDate: Date;

		/**
		 * @description Passed away the final date?
		 */
		elapsed: boolean;

		offset: {
			/**
		 	 * @description Seconds left for the next minute
		 	 */
			seconds: number;

			/**
		 	 * @description Minutes left for the next hour
		 	 */
			minutes: number;

			/**
			 * @description Hours left until next day
			 */
			hours: number;

			/**
		 	 * @description Days left until next week
		 	 */
			days: number;

			/**
			 * @description Days left until next week
			 */
			daysToWeek: number;

			/**
		 	 * @description Days left until next month
		 	 */
			daysToMonth: number;

			/**
			 * @description Weeks left until the final date
			 */
			weeks: number;

			/**
		 	 * @description Weeks left until the next month
		 	 */
			weeksToMonth: number;

			/**
			 * @description Months left until final date
			 */
			months: number;

			/**
		 	 * @description Years left until final date
		 	 */
			years: number;

			/**
			 * @description Total amount of days left until final date
			 */
			totalDays: number;

			/**
		 	 * @description Total amount of hours left until final date
		 	 */
			totalHours: number;

			/**
			 * @description Total amount of minutes left until final date
			 */
			totalMinutes: number;

			/**
		 	 * @description Total amount of seconds left until final date
		 	 */
			totalSeconds: number;
		};
	}

	interface ConfigurationObject
	{
		/**
		 * @description Allow to continue after finishes. Be aware that no finish event will be dispatched at this mode!
		 */
		elapse?: boolean;

		/**
		 * @description The update rate in milliseconds
		 */
		precision?: number;

		/**
		 * @description Deferred initialization mode. Just be aware that the developer MUST call the start method manually to begin the countdown:
		 * @example
		 * // It will render correctly since the start of the plugin.
		 * $('div#clock').countdown(finalDate, {defer: })
		 *   .on('update.countdown', function() {
		 *     // render something
		 *   })
		 *   .countdown('start');
		 */
		defer?: boolean;
	}
}