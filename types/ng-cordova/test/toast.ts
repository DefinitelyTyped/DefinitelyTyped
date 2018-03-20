// For the full application demo please see following repo :
// https://github.com/ksachdeva/ngCordova-typescript-demo

namespace demo.toast {
	'use strict';

	export class ToastController {

		toastMessage:string = 'enter a message';
		msg:string;

		static $inject:Array<string> = ["$cordovaToast"];
		constructor(private readonly $cordovaToast:ngCordova.IToastService) {

		}

		center() {
			this.$cordovaToast.show(this.toastMessage, 'long', 'center')
				.then((success) => {
					console.log("center msg displayed");
				},  (error) => {
					this.msg = error.message;
				});
		}

		top() {
			this.$cordovaToast.showShortTop(this.toastMessage)
				.then((success) => {
					console.log("short top msg displayed");
				},  (error) => {
					this.msg = error.message;
				});
		}

		bottom() {
			this.$cordovaToast.showLongBottom(this.toastMessage)
				.then((success) => {
					console.log("long bottom msg displayed");
				},  (error) => {
					this.msg = error.message;
				});
		}

	}

	angular.module("demo.toast").controller("ToastController", ToastController);
}