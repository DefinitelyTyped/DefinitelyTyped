// For the full application demo please see following repo :
// https://github.com/ksachdeva/ngCordova-typescript-demo

namespace demo.network {
	'use strict';

	export class NetworkController {

		networkType:string;
		connectionType:string;
		errorMsg:string;

		static $inject:Array<string> = ["$ionicPlatform", "$cordovaNetwork"];

		constructor($ionicPlatform:ionic.platform.IonicPlatformService, private $cordovaNetwork:ngCordova.INetworkInformationService) {

			$ionicPlatform.ready(() => {
				this.refresh();
			});
		}

		refresh() {
			this.networkType =  this.$cordovaNetwork.getNetwork();
			if (this.$cordovaNetwork.isOnline()) {
				this.connectionType = 'Online';
			}
			else if (this.$cordovaNetwork.isOffline()) {
				this.connectionType = 'Offline';
			}
			else {
				this.errorMsg = 'Error getting isOffline / isOnline methods';
			}
		}

	}


	angular.module("demo.network").controller("NetworkController", NetworkController);
}
