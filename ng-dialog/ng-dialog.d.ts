// Type definitions for ngDialog
// Project: https://github.com/likeastore/ngDialog
// Definitions by: Stephen Lautier <https://github.com/stephenlautier>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare module angular.dialog {

	interface IDialogService {
		getDefaults(): IDialogOptions;
		open(options: IDialogOpenOptions): IDialogOpenResult;
		openConfirm(options: IDialogOpenOptions): IPromise<any>;

		/**
		 * Determine whether the specified dialog is open or not.
		 * @param id Dialog id to check for.
		 * @returns {boolean} Indicating whether it exists or not.
		 */
		isOpen(id: string): boolean;
		close(id: string, value?: any): void;
		closeAll(value?: any): void;
		getOpenDialogs(): string[];
	}

	interface IDialogOpenResult {
		id: string;
		close: (value?: string) => void;
		closePromise: IPromise<IDialogClosePromise>;
	}

	interface IDialogClosePromise {
		id: string;
		value: any;
	}

	interface IDialogProvider extends angular.IServiceProvider {
		/**
		 * Default options for the dialogs.
		 * @param defaultOptions
		 * @returns {}
		 */
		setDefaults(defaultOptions: IDialogOptions): void;
	}

	/**
	 * Dialog Scope which extends the $scope.
	 */
	interface IDialogScope extends angular.IScope {
		/**
		 * This allows you to close dialog straight from handler in a popup element.
		 * @param value Any value passed to this function will be attached to the object which resolves on the close promise for this dialog.
		 * For dialogs opened with the openConfirm() method the value is used as the reject reason.
		 */
		closeThisDialog(value?: any): void;
	}

	interface IDialogOptions {
		/**
		 * This option allows you to control the dialog's look, you can use built-in themes or create your own styled modals.
		 * It will be appended with the "ngdialog" class e.g. className is "default-theme flat-ui" it will be class="ngdialog default-theme flat-ui".
		 */
		className?: string;
		/**
		 * If false it allows to hide overlay div behind the modals, default true.
		 */
		overlay?: boolean;

		/**
		 * If false it allows to hide close button on modals, default true.
		 */
		showClose?: boolean;

		/**
		 * It allows to close modals by clicking Esc button, default true.
		 * This will close all open modals if there several of them open at the same time.
		 */
		closeByEscape?: boolean;

		/**
		 * It allows to close modals by clicking on overlay background, default true. If @see Hammer.js is loaded, it will listen for tap instead of click.
		 */
		closeByDocument?: boolean;

		/**
		 * If true allows to use plain string as template, default false.
		 */
		plain?: boolean;

		/**
		 * Give a name for a dialog instance. It is useful for identifying specific dialog if there are multiple dialog boxes opened.
		 */
		name?: string | number;

		preCloseCallback?: string|Function;
	}

	/**
	 * Options which are provided to open a dialog.
	 */
	interface IDialogOpenOptions extends IDialogOptions {
		template: string;
		controller?: string|any;
		controllerAs?: string;
		/**
		 * Scope object that will be passed to dialog. If you use controller with separate $scope service this object will be passed to $scope.$parent param.
		 */
		scope?: ng.IScope;
	}
}
