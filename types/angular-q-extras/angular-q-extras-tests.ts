interface MyService {
    getFirstname(): ng.IPromise<string>;
    getLastname(): ng.IPromise<string>;
}

function TestCtrl($q: ng.IQService, MyService: MyService) {
    function arrayCallback(result: [ng.PromiseValue<string>, ng.PromiseValue<string>]) {
        const firstnameOk: boolean = $q.isFulfilledState(result[0]);
        const lastnameOk: boolean = $q.isFulfilledState(result[1]);
    }

    function objectCallback(result: {firstname: ng.PromiseValue<string>, lastname: ng.PromiseValue<string>}) {
      const firstnameOk: boolean = $q.isFulfilledState(result.firstname);
      const lastnameOk: boolean = $q.isFulfilledState(result.lastname);
    }

    $q
        .allSettled([
            MyService.getFirstname(),
            MyService.getLastname()
        ])
        .then(arrayCallback);

    $q
        .allSettled({
            firstname: MyService.getFirstname(),
            lastname: MyService.getLastname()
        })
        .then(objectCallback);
}

TestCtrl.$inject = ['$q', 'MyService'];

angular.module('test').controller('TestCtrl', TestCtrl);
