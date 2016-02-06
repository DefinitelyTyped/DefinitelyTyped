/// <reference path="tsd.d.ts" />
/// <reference path="../angularjs/angular.d.ts" />
/// <reference path="../ionic/ionic.d.ts" />


namespace demo.network {
	'use strict';

	export class MediaController {

		networkType: string;
		connectionType: string;
		errorMsg: string;

		static $inject: Array<string> = ["$scope", "$cordovaMedia"];

		constructor($scope: ng.IScope, private $cordovaMedia: ngCordova.IMediaService) {

			var src = "/src/audio.mp3";
			var media = $cordovaMedia.newMedia(src);


			var iOSPlayOptions = {
				numberOfLoops: 2,
				playAudioWhenScreenIsLocked: false
			}

			media.play(iOSPlayOptions); // iOS only!
			media.play(); // Android

			media.pause();

			media.stop();

			media.release();

			media.seekTo(5000); // milliseconds value

			media.setVolume(0.5);

			media.startRecord();

			media.stopRecord();
		}
	}


	angular.module("demo.media").controller("MediaController", MediaController);
}
