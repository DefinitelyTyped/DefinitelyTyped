// For the full application demo please see following repo :
// https://github.com/ksachdeva/ngCordova-typescript-demo

/// <reference types="ionic" />

namespace demo.appavailability {
  'use strict';

  export class AppAvailabilityController {

    isAvailable:boolean;

    static $inject:Array<string> = ["$ionicPlatform", "$cordovaDevice", "$cordovaAppAvailability"];
    constructor($ionicPlatform:ionic.platform.IonicPlatformService,
       private $cordovaDevice:ngCordova.IDeviceService,
       private $cordovaAppAvailability:ngCordova.IAppAvailabilityService) {

      this.isAvailable = false;

      var scheme = "com.twitter.android";

      if ($cordovaDevice.getPlatform() == 'iOS') {
          scheme = "twitter://";
      }

      $ionicPlatform.ready(() => {
        $cordovaAppAvailability.check(scheme).then(() => {
          this.isAvailable = true;
        }, (err) => {
          // bad api design in plugin as well as in ngCordova !!
          this.isAvailable = false;
        })
      });
    }

  }

  angular.module("demo.appavailability").controller("AppAvailabilityController", AppAvailabilityController);
}
