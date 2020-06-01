// For the full application demo please see following repo :
// https://github.com/ksachdeva/ngCordova-typescript-demo

namespace demo.dialog {
    'use strict';

    export class DialogController {

    action:string;

        static $inject:Array<string> = ["$ionicPlatform", "$cordovaDialogs"];
        constructor($ionicPlatform:ionic.platform.IonicPlatformService, private readonly $cordovaDialogs:ngCordova.IDialogsService) {
      this.action = "Press any button !";
        }

    alert() {
      this.action = "Alert";
      this.$cordovaDialogs.alert('Wow!');
    }

    confirm() {
      this.action = "Confirm";
      this.$cordovaDialogs.confirm('Are you sure?', "Custom title").then(function (buttonIndex) {
        this.$cordovaDialogs.alert("Button index : " + buttonIndex);
      });
    }

    prompt() {
      this.action = "Prompt";
      this.$cordovaDialogs.prompt('Please Login', "Custom title").then(function (result) {
       this.$cordovaDialogs.alert("Input: " + result.input1 + "\n Button index : " + result.buttonIndex);
      });
    }

    beep() {
      this.action = "Beep";
      this.$cordovaDialogs.beep(3);
    }

    }

    angular.module("demo.dialog").controller("DialogController", DialogController);
}
