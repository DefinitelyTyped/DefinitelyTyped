/// <reference path="./angular-idle.d.ts" />

angular.module('app', ['ngIdle'])
	.config(['$keepaliveProvider', '$idleProvider', 
		($keepaliveProvider: ng.idle.IKeepAliveProvider, $idleProvider: ng.idle.IIdleProvider) => {
			$idleProvider.activeOn('mousemove keydown DOMMouseScroll mousewheel mousedown');
			$idleProvider.idleDuration(5);
			$idleProvider.warningDuration(5);
			$idleProvider.keepalive(true)
			$idleProvider.autoResume(true);
			$keepaliveProvider.interval(10);
		}])
	.run(['$keepalive', '$idle', ($keepalive: ng.idle.IKeepAliveService, $idle: ng.idle.IIdleService) => {
		$idle.watch();
		
		if ($idle.running() || $idle.idling()) {
			$idle.unwatch();
		}
		
		$keepalive.start();
		$keepalive.ping();
		$keepalive.stop();
	}]);