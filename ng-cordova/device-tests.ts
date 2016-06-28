/// <reference path="device.d.ts" />
/// <reference path="../angularjs/angular.d.ts" />
/// <reference path="../ionic/ionic.d.ts" />

// For the full application demo please see following repo :
// https://github.com/ksachdeva/ngCordova-typescript-demo

namespace demo.device {
	'use strict';
	
	interface IDeviceViewModel {
		available:boolean;
        cordova:string;
        model:string;
        platform:string;
        uuid:string;
        version:string;
	}
	
	export class DeviceController {
		
		public vm:IDeviceViewModel;
		
		static $inject:Array<string> = ["$ionicPlatform", "$cordovaDevice"];		
		constructor($ionicPlatform:ionic.platform.IonicPlatformService, $cordovaDevice:ngCordova.IDeviceService) {
			
			$ionicPlatform.ready(() => {
				this.vm = {
					available : $cordovaDevice.getDevice().available,
					cordova : $cordovaDevice.getCordova(),
					model : $cordovaDevice.getModel(),
					platform : $cordovaDevice.getPlatform(),
					uuid : $cordovaDevice.getUUID(),
					version : $cordovaDevice.getVersion()
				};
			});
		}
								
	}
	
	angular.module("demo.device").controller("DeviceController", DeviceController);
}