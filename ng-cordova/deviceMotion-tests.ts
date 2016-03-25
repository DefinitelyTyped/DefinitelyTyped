/// <reference path="tsd.d.ts" />
/// <reference path="../angularjs/angular.d.ts" />
/// <reference path="../ionic/ionic.d.ts" />

// For the full application demo please see following repo :
// https://github.com/ksachdeva/ngCordova-typescript-demo

namespace demo.devicemotion {
  'use strict';

  export class DeviceMotionController {

    motion:ngCordova.IDeviceMotionAcceleration;
    this_watch:ngCordova.IDeviceMotionWatchPromise;
    msg:string;

    static $inject:Array<string> = ["$ionicPlatform", "$cordovaDeviceMotion"];
    constructor($ionicPlatform:ionic.platform.IonicPlatformService, private $cordovaDeviceMotion:ngCordova.IDeviceMotionService) {
      $ionicPlatform.ready(() => {
        this.getAcceleration();
      });
    }

    getAcceleration () {
      this.$cordovaDeviceMotion.getCurrentAcceleration().then( (motion) => {
        this.motion = motion;
        console.log(motion);
      }, function (err) {
        this.msg = err.message;
        console.log(err);
      });
    }

    watchAcceleration () {
      var options = { frequency: 3000 };  // Update every 3 seconds

      this.this_watch = this.$cordovaDeviceMotion.watchAcceleration(options);

      this.this_watch.then(
        () => {  /* unused */
        },
        (err) => {
          this.msg = err.message;
        },
        (motion) => {
          this.motion = motion;
        });
    };

    clearWatch () {
      // use watchID from watchAccelaration()
      this.$cordovaDeviceMotion.clearWatch(this.this_watch.watchID);
    };

  }

  angular.module("demo.devicemotion").controller("DeviceMotionController", DeviceMotionController);
}
