// Type definitions for Apache Cordova DatePicker plugin
// Project: https://github.com/sectore/phonegap3-ios-datepicker-plugin
// Definitions by: Pascal Vantrepote
// Definitions: https://github.com/pvantrepote/DefinitelyTyped

interface Plugins {
    datePicker: DatePicker;
}

// /**
//  * Datepicker options
//  */
// interface IDatePickerOptions {

// 	/**
// 	 * The mode of the date picker.
// 	 * Values: date | time | datetime (iOS, Windows only)
// 	 * Default: date
// 	 */
// 	mode: string;

// 	/**
// 	 * Selected date.
// 	 * Default: new Date()
// 	 */
// 	date: Date | string;	
	
// 	/**
// 	 * Minimum date.
// 	 * minDate is a Date object for iOS and an integer for Android, so you need to account for that when using the plugin
// 	 */
// 	minDate: Date | number;
	
// 	/**
// 	 * Maximum date.
// 	 */
// 	maxDate: Date;
// }

// /**
//  * Datepicker android themes
//  */
// declare enum AndroidThemes {
// 	THEME_TRADITIONAL = 1,
// 	THEME_HOLO_DARK,
// 	THEME_HOLO_LIGHT,
// 	THEME_DEVICE_DEFAULT_DARK,
// 	THEME_DEVICE_DEFAULT_LIGHT	
// }

// /**
//  * Android options
//  */
// interface IAndroidDatePickerOptions extends IDatePickerOptions {
// 	/**
// 	 * Label of BUTTON_POSITIVE (done button). If empty, uses android.R.string.ok.
// 	 * Default: (empty String)
// 	 */
// 	okText: string;
	
// 	/**
// 	 * Label of BUTTON_NEGATIVE (cancel button). If empty, uses android.R.string.cancel.
// 	 * Default: (empty String)
// 	 */
// 	 cancelText:string;
	 
// 	 /**
// 	  * Label of today button. If empty, doesn't show the option to select current date.
// 	  * Default: (empty String)
// 	  */
// 	 todayText:string;
	 
// 	 /**
// 	  * Label of now button. If empty, doesn't show the option to select current time.
// 	  * Default: (empty String)
// 	  */
// 	 nowText:string;
	 
// 	 /**
// 	  * Shows time dialog in 24 hours format.
// 	  * Default: false
// 	  */
// 	 is24Hour: boolean;
	 
// 	 /**
// 	  * Choose the theme of the picker
// 	  * Default: THEME_TRADITIONAL
// 	  */
// 	 androidTheme: AndroidThemes;
	 
// }

// /**
//  * IOS Options
//  */
// interface IiOSDatePickerOptions extends IDatePickerOptions {
	
// 	/**
// 	 * Shows or hide dates earlier then selected date.
// 	 * Default: true
// 	 */
// 	allowOldDates: boolean;
	
// 	/**
// 	 * Shows or hide dates after selected date.
// 	 * Default: true
// 	 */
// 	allowFutureDates: boolean;

// 	/**
// 	 * Label of done button.
// 	 * Default: Done
// 	 */
// 	doneButtonLabel: string;	
	 
// 	/**
// 	 * Hex color of done button.
// 	 * Default: #0000FF
// 	 */
// 	doneButtonColor: string;
	 
// 	/**
// 	 * Label of cancel button.
// 	 * Default: Cancel
// 	 */
// 	cancelButtonLabel: string;
	 
// 	/**
// 	 * Label of cancel button.
// 	 * Default: Cancel
// 	 */
// 	cancelButtonColor: string;
	 
// 	/**
// 	 * Interval between options in the minute section of the date picker.
// 	 * Default: 1
// 	 */
// 	minuteInterval: number;
	 
// 	/**
// 	 * Force the UIPopoverArrowDirection enum. The value any will revert to default UIPopoverArrowDirectionAny and let the app choose the proper direction itself.
// 	 * Values: up | down | left | right | any
// 	 * Default: any
// 	 */
// 	popoverArrowDirection: string;
	 
// 	/**
// 	 * Force locale for datePicker.
// 	 * Default: en_us
// 	 */
// 	locale: string;

// }

// /**
//  * iPad Options
//  */
// interface IiPadDatePickerOptions extends IiOSDatePickerOptions {
// 	/**
// 	 * X position of date picker. The position is absolute to the root view of the application.
// 	 * Default: 0
// 	 */
// 	x: number;
	
// 	/**
// 	 * Y position of date picker. The position is absolute to the root view of the application.
// 	 * Default: 0
// 	 */
// 	y: number;
// }

interface DatePicker {
	
	// show the date picker
    show(
		options: Object,
        onSuccess: (value: string) => void
    ) :void;
	
}