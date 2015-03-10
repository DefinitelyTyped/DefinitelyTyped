/// <reference path="./angular-idle.d.ts" />

angular.module('app', ['ngIdle'])
	.config(['$keepaliveProvider', '$idleProvider',
		($keepaliveProvider: angular.idle.IKeepAliveProvider, $idleProvider: angular.idle.IIdleProvider) => {
			$idleProvider.activeOn('mousemove keydown DOMMouseScroll mousewheel mousedown');
			$idleProvider.idleDuration(5);
			$idleProvider.warningDuration(5);
			$idleProvider.keepalive(true)
			$idleProvider.autoResume(true);
			$keepaliveProvider.interval(10);
		}])
	.run(['$keepalive', '$idle', ($keepalive: angular.idle.IKeepAliveService, $idle: angular.idle.IIdleService) => {
		$idle.watch();

		if ($idle.running() || $idle.idling()) {
			$idle.unwatch();
		}

		$keepalive.start();
		$keepalive.ping();
		$keepalive.stop();
	}]);