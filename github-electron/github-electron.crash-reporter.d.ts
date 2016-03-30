// Type definitions for Electron v0.37.2
// Project: http://electron.atom.io/
// Definitions by: jedmao <https://github.com/jedmao/>, rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Electron {
	/**
	 * The crash-reporter module enables sending your app's crash reports.
	 */
	interface CrashReporter {
		/**
		 * You are required to call this method before using other crashReporter APIs.
		 */
		start(options: CrashReporterStartOptions): void;
		/**
		 * @returns The date and ID of the last crash report. When there was no crash report
		 * sent or the crash reporter is not started, null will be returned.
		 */
		getLastCrashReport(): CrashReporterPayload;
		/**
		 * @returns All uploaded crash reports. Each report contains the date and uploaded ID.
		 */
		getUploadedReports(): CrashReporterPayload[];
	}

	interface CrashReporterStartOptions {
		/**
		* Default: Electron
		*/
		productName?: string;
		companyName: string;
		/**
		* URL that crash reports would be sent to as POST.
		*/
		submitURL: string;
		/**
		* Send the crash report without user interaction.
		* Default: true.
		*/
		autoSubmit?: boolean;
		/**
		* Default: false.
		*/
		ignoreSystemCrashHandler?: boolean;
		/**
		* An object you can define which content will be send along with the report.
		* Only string properties are send correctly.
		* Nested objects are not supported.
		*/
		extra?: {[prop: string]: string};
	}

	interface CrashReporterPayload extends Object {
		/**
		* E.g., "electron-crash-service".
		*/
		rept: string;
		/**
		* The version of Electron.
		*/
		ver: string;
		/**
		* E.g., "win32".
		*/
		platform: string;
		/**
		* E.g., "renderer".
		*/
		process_type: string;
		ptime: number;
		/**
		* The version in package.json.
		*/
		_version: string;
		/**
		* The product name in the crashReporter options object.
		*/
		_productName: string;
		/**
		* Name of the underlying product. In this case, Electron.
		*/
		prod: string;
		/**
		* The company name in the crashReporter options object.
		*/
		_companyName: string;
		/**
		* The crashreporter as a file.
		*/
		upload_file_minidump: File;
	}
}
