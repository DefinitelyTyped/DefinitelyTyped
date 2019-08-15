var app = angular.module('testModule', ['ng-command']);

class CommandTestController {

	constructor($command: ngCommand.ICommandFactory, $scope: ng.IScope, $timeout: ng.ITimeoutService) {

		var cmd = $command($scope, () => {
			return $timeout(() => {}, 0)
		})

		var cmdWithCanExecute = $command($scope, () => {
			return $timeout(() => {}, 0)
		}, () => false);

		cmd.isExecuting === false;
		cmd.canExecute === false;
		cmd.execute();
	}

}

app.controller('TestController', CommandTestController);
