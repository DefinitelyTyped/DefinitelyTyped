// For the full application demo please see following repo :
// https://github.com/ksachdeva/ngCordova-typescript-demo

namespace demo.deviceorientation {
  'use strict';

  export class DeviceOrientationController {

    msg:string;
    heading:ngCordova.IDeviceOrientationHeading;
    this_watch:ngCordova.IDeviceOrientationWatchPromise;

    static $inject:Array<string> = ["$ionicPlatform", "$timeout", "$cordovaDeviceOrientation"];
    constructor($ionicPlatform:ionic.platform.IonicPlatformService,
      private $timeout:ng.ITimeoutService,
      private $cordovaDeviceOrientation:ngCordova.IDeviceOrientationService) {

        $ionicPlatform.ready(() => {
          this.getHeading();
        });

    }

    getHeading() {
     this.$cordovaDeviceOrientation
       .getCurrentHeading()
       .then((position) => {
         this.heading = position;
       }, (err) => {
         this.msg = err.message;
       });
   };


   watchHeading () {
     this.this_watch = this.$cordovaDeviceOrientation.watchHeading({frequency: 1000});

     this.this_watch.then(
       () => {
         /* unused */
       },
       (err) => {
         this.msg = err.message;
       },
       (position) => {
         this.$timeout(() => {
           this.heading = position;
         });
       }
     );

   };

    clearWatch () {
     this.$cordovaDeviceOrientation.clearWatch(this.this_watch.watchID);
   };

  }

  angular.module("demo.deviceorientation").controller("DeviceOrientationController", DeviceOrientationController);
}
