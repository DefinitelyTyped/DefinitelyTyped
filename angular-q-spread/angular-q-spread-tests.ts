interface IMyService {
    getFirstname(): ng.IPromise<string>;
    getLastname(): ng.IPromise<string>;
}

interface IScope {
    name: string;
}

function TestCtrl($scope: IScope, $q: ng.IQService, MyService: IMyService) {
    $scope.name = null;

    function firstCallback(firstname: string, lastname: string)
    {
        return firstname + ' ' + lastname;
    }

    function anotherCallback(fullname: string)
    {
        $scope.name = fullname;
    }

    function failureCallback(reason: any)
    {
        alert('Could not load data: ' + reason);
    }

    $q
        .all([
            MyService.getFirstname(),
            MyService.getLastname()
        ])
        .spread(firstCallback)
        .then(anotherCallback)
        .catch(failureCallback);
};

TestCtrl.$inject = ['$scope', '$q', 'MyService'];

angular.module('test').controller('TestCtrl', TestCtrl);
