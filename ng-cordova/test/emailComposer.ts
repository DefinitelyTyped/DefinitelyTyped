// For the full application demo please see following repo :
// https://github.com/ksachdeva/ngCordova-typescript-demo

namespace demo.email {
	'use strict';

	export class EmailComposerController {

		isAvailable:boolean;
		status:string;

		static $inject:Array<string> = ["$ionicPlatform", "$cordovaEmailComposer"];
		constructor($ionicPlatform:ionic.platform.IonicPlatformService, $cordovaEmailComposer:ngCordova.IEmailComposerService) {

			this.status = "";

			$ionicPlatform.ready(() => {

				$cordovaEmailComposer.isAvailable().then((available) => {
					this.isAvailable = available;
				});

				let email = <ngCordova.IEmailComposerOptions>{
		      to: 'max@mustermann.de',
		      cc: 'erika@mustermann.de',
		      bcc: ['john@doe.com', 'jane@doe.com'],
		      subject: 'Cordova Icons',
		      body: 'How are you? Nice greetings from Leipzig',
		      isHtml: true
		    };

		    $cordovaEmailComposer.open(email).then(null, () => {
		      // user cancelled email
					this.status = "User Cancelled Email";
		    });

			});
		}

	}

	angular.module("demo.email").controller("EmailComposerController", EmailComposerController);
}
