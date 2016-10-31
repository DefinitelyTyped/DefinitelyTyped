/// <reference path="tsd.d.ts" />
/// <reference path="../angularjs/angular.d.ts" />
/// <reference path="../ionic/ionic.d.ts" />

// For the full application demo please see following repo :
// https://github.com/ksachdeva/ngCordova-typescript-demo

namespace demo.geolocation {
	'use strict';

	export class GeolocationController {

    erroMsg:string;
		position:ngCordova.IGeoPosition;

		static $inject:Array<string> = ["$ionicPlatform", "$cordovaGeolocation"];
		constructor($ionicPlatform:ionic.platform.IonicPlatformService, private $cordovaGeolocation:ngCordova.IGeolocationService) {

		}

    getLocation = function () {

      this.$cordovaGeolocation
        .getCurrentPosition(<ngCordova.IGeolocationOptions>{timeout: 10000, enableHighAccuracy: false})
        .then((position:ngCordova.IGeoPosition) => {
          console.log("position found");
          this.position = position;
          // long = position.coords.longitude
          // lat = position.coords.latitude
        }, (err:ngCordova.IGeoPositionError) => {
          console.log("unable to find location");
          this.errorMsg = "Error : " + err.message;
        });
    };

	}

	angular.module("demo.geolocation").controller("GeolocationController", GeolocationController);
}
