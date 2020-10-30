// issue: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/369
// https://github.com/witoldsz/angular-http-auth/blob/master/src/angular-http-auth.js
/**
 * @license HTTP Auth Interceptor Module for AngularJS
 * (c) 2012 Witold Szczerba
 * License: MIT
 */

class AuthService {
    /**
      * Holds all the requests which failed due to 401 response,
      * so they can be re-requested in future, once login is completed.
      */
    buffer: Array<{ config: ng.IRequestConfig; deferred: ng.IDeferred<any>; }> = [];

    /**
     * Required by HTTP interceptor.
     * Function is attached to provider to be invisible for regular users of this service.
     */
    pushToBuffer = (config: ng.IRequestConfig, deferred: ng.IDeferred<any>) => {
        this.buffer.push({
            config,
            deferred
        });
    }

    $get = [
        '$rootScope', '$injector', ($rootScope: ng.IScope, $injector: ng.auto.IInjectorService) => {
            let $http: ng.IHttpService; // initialized later because of circular dependency problem
            function retry(config: ng.IRequestConfig, deferred: ng.IDeferred<any>) {
                $http = $http || $injector.get<ng.IHttpService>('$http');
                $http(config).then(response => {
                    deferred.resolve(response);
                });
            }
            function retryAll() {
                for (const request of this.buffer) {
                    retry(request.config, request.deferred);
                }

                this.buffer = [];
            }

            return {
                loginConfirmed() {
                    $rootScope.$broadcast('event:auth-loginConfirmed');
                    retryAll();
                }
            };
        }
    ];
}

angular.module('http-auth-interceptor', [])

    .provider('authService', AuthService)

/**
 * $http interceptor.
 * On 401 response - it stores the request and broadcasts 'event:angular-auth-loginRequired'.
 */
    .config([
        '$httpProvider', 'authServiceProvider',
        ($httpProvider: ng.IHttpProvider, authServiceProvider: AuthService) => {
            $httpProvider.defaults.headers.common = { Authorization: 'Bearer token' };
            $httpProvider.defaults.headers.get.Authorization = 'Bearer token';
            $httpProvider.defaults.headers.post['Authorization'] = (config: ng.IRequestConfig) =>
                'Bearer token';

            const interceptor = [
                '$rootScope', '$q',
                ($rootScope: ng.IScope, $q: ng.IQService) => {
                    return {
                        request(config: ng.IRequestConfig) {
                            if (!config.params) config.params = {};
                            config.params.rnd = Math.random();
                            return config;
                        },
                        responseError(rejection: any) {
                            if (rejection.status === 401) {
                                const deferred = $q.defer<ng.IHttpResponse<any>>();
                                authServiceProvider.pushToBuffer(rejection.config, deferred);
                                $rootScope.$broadcast('event:auth-loginRequired');
                                return deferred.promise;
                            }
                            return $q.reject(rejection);
                        }
                    };
                }
            ];
            $httpProvider.interceptors.push(interceptor);
        }
    ]);

namespace HttpAndRegularPromiseTests {
    interface Person {
        firstName: string;
        lastName: string;
    }

    type ExpectedResponse = Person;

    interface SomeControllerScope extends ng.IScope {
        person: Person;
        theAnswer: number;
        letters: string[];
        snack: string;
        nothing?: string;
    }

    function someController($scope: SomeControllerScope, $http: ng.IHttpService, $q: ng.IQService) {
        $http.get<ExpectedResponse>('http://somewhere/some/resource')
            .then((response: ng.IHttpResponse<ExpectedResponse>) => {
                // typing lost, so something like
                // const i: number = response.data
                // would type check
                $scope.person = response.data;
            });

        $http.get<ExpectedResponse>('http://somewhere/some/resource')
            .then((response: ng.IHttpResponse<ExpectedResponse>) => {
                // typing lost, so something like
                // const i: number = response.data
                // would NOT type check
                $scope.person = response.data;
            });

        const aPromise: ng.IPromise<Person> = $q.when({ firstName: 'Jack', lastName: 'Sparrow' });
        aPromise.then((person: Person) => {
            $scope.person = person;
        });

        const bPromise: ng.IPromise<number> = $q.when(42);
        bPromise.then((answer: number) => {
            $scope.theAnswer = answer;
        });

        const cPromise: ng.IPromise<string[]> = $q.when(['a', 'b', 'c']);
        cPromise.then((letters: string[]) => {
            $scope.letters = letters;
        });

        // When $q.when is passed an IPromise<T>, it returns an IPromise<T>
        const dPromise: ng.IPromise<string> = $q.when($q.when('ALBATROSS!'));
        dPromise.then((snack: string) => {
            $scope.snack = snack;
        });

        // $q.when may be called without arguments
        const ePromise: ng.IPromise<void> = $q.when();
        ePromise.then(() => {
            $scope.nothing = 'really nothing';
        });
    }
}

// Test for AngularJS Syntax

namespace My.Namespace {
    export const x: any = null; // need to export something for module to kick in
}

class TestProvider implements ng.IServiceProvider {
    constructor(private readonly $scope: ng.IScope) {}

    $get() {}
}

// IModule Registering Test
let mod = angular.module('tests', []);
mod.controller('name', ($scope: ng.IScope) => { });
mod.controller('name', ['$scope', ($scope: ng.IScope) => { }]);
mod.controller('name', class {
    // Uncommenting the next line should lead to a type error because this signature isn't compatible
    // with the signature of the `$onChanges` hook:
    // $onChanges(x: number) { }
});
mod.controller({
    MyCtrl: class {},
    MyCtrl2() {},
    MyCtrl3: ['$fooService', ($fooService: any) => { }]
});
mod.directive('myDirectiveA', ($rootScope: ng.IRootScopeService) => {
    return (scope, el, attrs) => {
        let foo = 'none';
        el.on('click', e => {
            foo = e.type;
            $rootScope.$apply();
        });
        scope.$watch(() => foo, () => el.text(foo));
    };
});
mod.directive('myDirectiveB', ['$rootScope', ($rootScope: ng.IRootScopeService) => {
    return {
        link(scope, el, attrs) {
            el.on('click', e => {
                // Doesn't exist on jqLite
                // el.hide();
            });
        }
    };
}]);
mod.directive({
    myFooDir: () => ({
        template: 'my-foo-dir.tpl.html'
    }),
    myBarDir: ['$fooService', ($fooService: any) => ({
        template: 'my-bar-dir.tpl.html'
    })]
});
mod.factory('name', ($scope: ng.IScope) => {});
mod.factory('name', ['$scope', ($scope: ng.IScope) => {}]);
mod.factory({
    name1(foo: any) {},
    name2: ['foo', (foo: any) => {}]
});
mod.filter('name', ($scope: ng.IScope) => () => {});
mod.filter('name', ['$scope', ($scope: ng.IScope) => () => {}]);
mod.filter({
    name1(foo: any) { return () => {}; },
    name2: ['foo', (foo: any) => () => {}],
});
const customStatefulFilter: ng.IFilterFunction = (s) => 1;
mod.filter('name', () => customStatefulFilter);
mod.filter('name', ['$scope', () => customStatefulFilter]);
mod.filter({
    name1: () => customStatefulFilter,
    name2: ['foo', () => customStatefulFilter],
});
mod.provider('name', ($scope: ng.IScope) => ({ $get: () => { } }));
mod.provider('name', TestProvider);
mod.provider('name', ['$scope', ($scope: ng.IScope) => {}]);
mod.provider(My.Namespace);
mod.service('name', ($scope: ng.IScope) => {});
mod.service('name', ['$scope', ($scope: ng.IScope) => {}]);
mod.service({
    MyCtrl: class {},
    MyCtrl2: () => {},
    MyCtrl3: ['$fooService', ($fooService: any) => {}]
});
mod.constant('name', 23);
mod.constant('name', '23');
mod.constant(My.Namespace);
mod.value('name', 23);
mod.value('name', '23');
mod.value(My.Namespace);
mod.decorator('name', ($scope: ng.IScope) => {});
mod.decorator('name', ['$scope', ($scope: ng.IScope) => {}]);

// QProvider tests
angular.module('qprovider-test', [])
    .config(['$qProvider', ($qProvider: ng.IQProvider) => {
        const provider: ng.IQProvider = $qProvider.errorOnUnhandledRejections(false);
        const currentValue: boolean = $qProvider.errorOnUnhandledRejections();
    }]);

// Promise signature tests
let foo: ng.IPromise<number>;
foo.then((x) => {
    // x is inferred to be a number
    x.toFixed();
    return 'asdf';
}).then((x) => {
    // x is inferred to be string
    const len = x.length;
    return 123;
}, (e) => {
    return anyOf2([123], toPromise([123])); // IPromise<T> | T, both are good for the 2nd arg of .then()
}).then((x) => {
    // x is infered to be a number or number[]
    if (Array.isArray(x)) {
        x[0].toFixed();
    } else {
        x.toFixed();
    }
    return;
}).catch(e => {
    return foo || 123; // IPromise<T> | T, both are good for .catch()
}).then(x => {
    // x is infered to be void | number
    x && x.toFixed();
    // Typescript will prevent you to actually use x as a local variable before you check it is not void
    // Try object:
    return { a: 123 };
}).then((x) => {
    // Object is inferred here
    x.a = 123;
    // Try a promise
    const y: ng.IPromise<number> = null;
    const condition: boolean = null;
    return condition ? y : x.a; // IPromise<T> | T, both are good for the 1st arg of .then()
}).then((x) => {
    // x is infered to be a number, which is the resolved value of a promise
    x.toFixed();
});

namespace TestPromiseInterop {
    declare const promiseInterop: ng.IPromise<number>;
    const ngStringPromise: ng.IPromise<string> =
        promiseInterop.then((num) => Promise.resolve(String(num)));
    const caughtStringPromise: ng.IPromise<string|number> =
        promiseInterop.catch((reason) => Promise.resolve('oh noes'));
}

// $q signature tests
namespace TestQ {
    interface AbcObject {
        a: number;
        b: string;
        c: boolean;
    }
    interface EfObject {
        e: number;
        f: boolean;
    }
    interface GhObject {
        g: string;
        h: number;
    }
    const abcObject: AbcObject = null;
    const abcObjectPromise: angular.IPromise<AbcObject> = null;
    const abcObjectPromiseLike: PromiseLike<AbcObject> = null;
    const efObject: EfObject = null;
    const efObjectPromise: angular.IPromise<EfObject> = null;
    const efObjectPromiseLike: PromiseLike<EfObject> = null;
    const ghObject: GhObject = null;
    const ghObjectPromise: angular.IPromise<GhObject> = null;

    const $q: angular.IQService = null;
    const promiseAny: angular.IPromise<any> = null;

    const assertPromiseType = <T>(arg: angular.IPromise<T>) => arg;

    // $q constructor
    {
        let result: angular.IPromise<AbcObject>;
        result = new $q<AbcObject>((resolve: (value: AbcObject) => any) => {});
        result = new $q<AbcObject>((resolve: (value: AbcObject) => any, reject: (value: any) => any) => {});
        result = $q<AbcObject>((resolve: (value: AbcObject) => any) => {});
        result = $q<AbcObject>((resolve: (value: AbcObject) => any, reject: (value: any) => any) => {});
    }

    // $q.all
    {
        let result: angular.IPromise<any[]>;
        result = $q.all([promiseAny, promiseAny]);
        // TS should infer that n1 and n2 are numbers and have toFixed.
        $q.all([1, $q.when(2)]).then(([ n1, n2 ]) => n1.toFixed() + n2.toFixed());
        $q.all([1, $q.when(2), '3']).then(([ n1, n2, n3 ]) => n1.toFixed() + n2.toFixed() + n3.slice(1));
    }
    {
        let result: angular.IPromise<AbcObject[]>;
        result = $q.all<AbcObject>([promiseAny, promiseAny]);
    }
    {
        let result: angular.IPromise<{[id: string]: any; }>;
        result = $q.all({a: promiseAny, b: promiseAny});
    }
    {
        let result: angular.IPromise<{a: number; b: string; }>;
        result = $q.all<{a: number; b: string; }>({a: promiseAny, b: promiseAny});
    }
    {
        const result = $q.all({ num: $q.when(2), str: $q.when('test') });
        // TS should infer that num is a number and str is a string
        result.then(r => (r.num * 2) + r.str.indexOf('s'));
    }
    {
        const result = $q.all({ num: $q.when(2), str: 'test' });
        // TS should infer that num is a number and str is a string
        result.then(r => (r.num * 2) + r.str.indexOf('s'));
    }

    // $q.defer
    {
        let result: angular.IDeferred<AbcObject>;
        result = $q.defer<AbcObject>();
        result.resolve(abcObject);
        const anyValue: any = null;
        result.reject(anyValue);
        result.promise.then(result => {
            return $q.resolve<AbcObject>(result);
        });
    }

    // $q.reject
    {
        let result: angular.IPromise<never>;
        result = $q.reject();
        result = $q.reject('');
        result.catch(() => 5).then(x => x.toFixed());
    }

    // $q.resolve
    {
        let result: angular.IPromise<void>;
        result = $q.resolve();
    }
    {
        let result: angular.IPromise<AbcObject>;
        result = $q.resolve<AbcObject>(abcObject);
        result = $q.resolve<AbcObject>(abcObjectPromise);
        const result2: angular.IPromise<AbcObject | GhObject> = $q.resolve<AbcObject | GhObject>(Math.random() > 0.5 ? abcObject : ghObjectPromise);
    }

    // $q.when
    {
        let result: angular.IPromise<void>;
        result = $q.when();
    }
    {
        let result: angular.IPromise<AbcObject>;
        let resultOther: angular.IPromise<AbcObject | GhObject>;

        result = $q.when<AbcObject>(abcObject);
        result = $q.when<AbcObject>(abcObjectPromise);
        result = $q.when<AbcObject>(abcObjectPromiseLike);

        result = $q.when<AbcObject, EfObject>(efObject, (result: EfObject) => abcObject);
        result = $q.when<AbcObject, EfObject>(efObject, (result: EfObject) => abcObject, (any) => any);
        result = $q.when<AbcObject, EfObject>(efObject, (result: EfObject) => abcObject, (any) => any, (any) => any);

        result = $q.when<AbcObject, EfObject>(efObjectPromise, (result: EfObject) => abcObject);
        resultOther = $q.when<AbcObject, GhObject, EfObject>(efObjectPromise, (result: EfObject) => abcObject, (any) => ghObject);
        resultOther = $q.when<AbcObject, GhObject, EfObject>(efObjectPromise, (result: EfObject) => abcObject, (any) => ghObject);
        resultOther = $q.when<AbcObject, GhObject, EfObject>(efObjectPromise, (result: EfObject) => abcObject, (any) => ghObject, (any) => any);
        resultOther = $q.when<AbcObject, GhObject, EfObject>(efObjectPromise, (result: EfObject) => abcObject, (any) => ghObjectPromise);
        resultOther = $q.when<AbcObject, GhObject, EfObject>(efObjectPromise, (result: EfObject) => abcObject, (any) => ghObjectPromise, (any) => any);

        result = $q.when<AbcObject, EfObject>(efObjectPromiseLike, (result: EfObject) => abcObject);
        resultOther = $q.when<AbcObject, GhObject, EfObject>(efObjectPromiseLike, (result: EfObject) => abcObject, (any) => ghObject);
        resultOther = $q.when<AbcObject, GhObject, EfObject>(efObjectPromiseLike, (result: EfObject) => abcObject, (any) => ghObject);
        resultOther = $q.when<AbcObject, GhObject, EfObject>(efObjectPromiseLike, (result: EfObject) => abcObject, (any) => ghObject, (any) => any);
        resultOther = $q.when<AbcObject, GhObject, EfObject>(efObjectPromiseLike, (result: EfObject) => abcObject, (any) => ghObjectPromise);
        resultOther = $q.when<AbcObject, GhObject, EfObject>(efObjectPromiseLike, (result: EfObject) => abcObject, (any) => ghObjectPromise, (any) => any);

        result = $q.when<AbcObject, EfObject>(efObject, (result: EfObject) => abcObjectPromise);
        result = $q.when<AbcObject, EfObject>(efObject, (result: EfObject) => abcObjectPromise, (any) => any);
        result = $q.when<AbcObject, EfObject>(efObject, (result: EfObject) => abcObjectPromise, (any) => any, (any) => any);

        result = $q.when<AbcObject, EfObject>(efObject, (result: EfObject) => abcObjectPromiseLike);
        result = $q.when<AbcObject, EfObject>(efObject, (result: EfObject) => abcObjectPromiseLike, (any) => any);
        result = $q.when<AbcObject, EfObject>(efObject, (result: EfObject) => abcObjectPromiseLike, (any) => any, (any) => any);

        result = $q.when<AbcObject, EfObject>(efObjectPromise, (result: EfObject) => abcObjectPromise);
        resultOther = $q.when<AbcObject, GhObject, EfObject>(efObjectPromise, (result: EfObject) => abcObjectPromise, (any) => ghObject);
        resultOther = $q.when<AbcObject, GhObject, EfObject>(efObjectPromise, (result: EfObject) => abcObjectPromise, (any) => ghObject, (any) => any);
        resultOther = $q.when<AbcObject, GhObject, EfObject>(efObjectPromise, (result: EfObject) => abcObjectPromise, (any) => ghObjectPromise);
        resultOther = $q.when<AbcObject, GhObject, EfObject>(efObjectPromise, (result: EfObject) => abcObjectPromise, (any) => ghObjectPromise, (any) => any);
    }
}

let httpFoo: ng.IHttpPromise<number>;
httpFoo.then((x) => {
    // When returning a promise the generic type must be inferred.
    const innerPromise: ng.IPromise<number> = null;
    return innerPromise;
}).then((x) => {
    // must still be number.
    x.toFixed();
});

httpFoo.then((response: ng.IHttpResponse<any>) => {
    const h = response.headers('test');
    h.charAt(0);
    const hs = response.headers();
    hs['content-type'].charAt(1);
});

// Deferred signature tests
namespace TestDeferred {
    const anything: any = null;

    interface AbcObject {
        a: number;
        b: string;
        c: boolean;
    }
    const abcObject: AbcObject = null;

    const deferred: angular.IDeferred<AbcObject> = null;

    // deferred.resolve
    {
        let result: void;
        result = deferred.resolve();
        result = deferred.resolve(abcObject);
    }

    // deferred.reject
    {
        let result: void;
        result = deferred.reject();
        result = deferred.reject(anything);
    }

    // deferred.notify
    {
        let result: void;
        result = deferred.notify();
        result = deferred.notify(anything);
    }

    // deferred.promise
    {
        let result: angular.IPromise<AbcObject>;
        result = deferred.promise;
    }
}

namespace TestInjector {
    const $injector: angular.auto.IInjectorService = null;

    $injector.strictDi = true;

    $injector.annotate(() => {});
    $injector.annotate(() => {}, true);

    // $injector.instantiate
    {
        class Foobar {}
        const result: Foobar = $injector.instantiate(Foobar);
    }

    // $injector.invoke
    {
        function foobar(v: boolean): number {
            return 7;
        }
        const result = $injector.invoke(foobar);
        if (!(typeof result === 'number')) {
            // This fails to compile if 'result' is not exactly a number.
            const expectNever: never = result;
        }

        const anyFunction: Function = foobar;
        let anyResult: string = $injector.invoke(anyFunction);

        const inlineAnnotatedFunction: any[] = [false, foobar];
        anyResult = $injector.invoke(inlineAnnotatedFunction);
        anyResult = $injector.invoke(inlineAnnotatedFunction, 'anyContext', 'anyLocals');
        anyResult = $injector.invoke(inlineAnnotatedFunction, 'anyContext');
        anyResult = $injector.invoke(inlineAnnotatedFunction, undefined, 'anyLocals');
    }

    // $injector.loadNewModules
    {
        const inlineAnnotatedFunction: any[] = [false, (v: boolean) => {}];
        const modA = angular.module('$injector.moduleA', []);
        $injector.loadNewModules([modA]);
        $injector.loadNewModules([modA.name]);
        $injector.loadNewModules([inlineAnnotatedFunction]);
    }

    // $injector.modules
    {
        const module: angular.IModule = $injector.modules['$injector.module'];
    }
}

// Promise signature tests
namespace TestPromise {
    const anything: any = null;

    interface AbcObject {
        kind: 'abc';
        a: number;
        b: string;
        c: boolean;
    }

    interface DefObject {
        kind: 'def';
        d: number;
        e: string;
        f: boolean;
    }

    function isAbcObject(x: AbcObject | DefObject): x is AbcObject {
        return x.kind === 'abc';
    }

    const abcObject: AbcObject = null;
    const abcObjectPromise: ng.IPromise<AbcObject> = null;
    const abcObjectHttpPromise: ng.IHttpPromise<AbcObject> = null;

    const defObject: DefObject = null;
    const defObjectPromise: ng.IPromise<DefObject> = null;
    const defObjectHttpPromise: ng.IHttpPromise<DefObject> = null;

    const promise: angular.IPromise<AbcObject> = null;
    const $q: angular.IQService = null;

    const rejectedPromise = $q.reject();

    // promise.then
    // $ExpectType IPromise<any>
    promise.then(result => anything);
    // $ExpectType IPromise<any>
    promise.then(result => anything, any => any);
    // $ExpectType IPromise<any>
    promise.then(result => anything, any => any, any => any);

    // $ExpectType IPromise<never>
    promise.then(result => rejectedPromise);
    // $ExpectType IPromise<never>
    promise.then(result => rejectedPromise, any => rejectedPromise);
    // $ExpectType IPromise<never>
    promise.then(result => rejectedPromise, any => rejectedPromise, any => any);

    // $ExpectType IPromise<AbcObject>
    promise.then(result => result);
    // $ExpectType IPromise<AbcObject>
    promise.then(result => abcObject);
    // $ExpectType IPromise<AbcObject>
    promise.then(result => abcObjectPromise);
    // $ExpectType IPromise<any>
    promise.then(result => result, any => any);
    // $ExpectType IPromise<number | AbcObject>
    promise.then(result => result, any => Math.random());
    // $ExpectType IPromise<any>
    promise.then(result => result, any => any, any => any);
    // $ExpectType IPromise<number | AbcObject>
    promise.then(result => result, any => Math.random(), any => any);
    // $ExpectType IPromise<AbcObject>
    promise.then(result => result, any => rejectedPromise, any => any);

    // $ExpectType IPromise<AbcObject>
    promise.then(result => anyOf2(rejectedPromise, result));
    // $ExpectType IPromise<AbcObject>
    promise.then(result => anyOf3(result, abcObjectPromise, rejectedPromise));
    // $ExpectType IPromise<AbcObject>
    promise.then(
        result => anyOf3(rejectedPromise, result, abcObjectPromise),
        reason => anyOf3(rejectedPromise, abcObject, abcObjectPromise)
    );

    // $ExpectType IPromise<IHttpResponse<AbcObject>>
    promise.then(result => abcObjectHttpPromise);

    // $ExpectType IPromise<AbcObject | DefObject>
    promise.then(result => result, any => defObject);

    // These are broken and seemingly can't be made to work
    // with the current limitations of TypeScript.

    // xExpectType IPromise<AbcObject | DefObject>
    // promise.then(result => anyOf2(result, defObjectPromise));
    // xExpectType IPromise<AbcObject | DefObject>
    // promise.then(result => anyOf3(rejectedPromise, result, defObjectPromise));
    // xExpectType IPromise<AbcObject | DefObject>
    // const a4 = promise.then(
    //     result => anyOf3(rejectedPromise, result, defObjectPromise),
    //     reason => anyOf3(rejectedPromise, defObject, abcObjectPromise)
    // );

    // $ExpectType IPromise<AbcObject | DefObject>
    promise.then<AbcObject | DefObject, AbcObject>(result =>
        anyOf3(abcObjectPromise, result, defObjectPromise)
    );

    // $ExpectType IPromise<AbcObject | DefObject>
    promise.then(result => result, any => defObject, any => any);
    // $ExpectType IPromise<AbcObject | DefObject>
    promise.then(result => abcObjectPromise, any => defObjectPromise);
    // $ExpectType IPromise<AbcObject | DefObject>
    promise.then(result => abcObjectPromise, any => defObjectPromise, any => any);
    // $ExpectType IPromise<IHttpResponse<AbcObject> | IHttpResponse<DefObject>>
    promise.then(result => abcObjectHttpPromise, any => defObjectHttpPromise);
    // $ExpectType IPromise<IHttpResponse<AbcObject> | IHttpResponse<DefObject>>
    promise.then(result => abcObjectHttpPromise, any => defObjectHttpPromise, any => any);

    // $ExpectType IPromise<DefObject>
    promise.then(result => defObject);
    // $ExpectType IPromise<any>
    promise.then(result => defObject, any => any);
    // $ExpectType IPromise<any>
    promise.then(result => defObject, any => any, any => any);
    // $ExpectType IPromise<DefObject>
    promise.then(result => defObjectPromise);
    // $ExpectType IPromise<any>
    promise.then(result => defObjectPromise, any => any);
    // $ExpectType IPromise<any>
    promise.then(result => defObjectPromise, any => any, any => any);
    // $ExpectType IPromise<IHttpResponse<DefObject>>
    promise.then(result => defObjectHttpPromise);
    // $ExpectType IPromise<any>
    promise.then(result => defObjectHttpPromise, any => any);
    // $ExpectType IPromise<any>
    promise.then(result => defObjectHttpPromise, any => any, any => any);

    // $ExpectType IPromise<boolean>
    promise
        .then(result => abcObject, any => defObject)
        .then(ambiguous => (isAbcObject(ambiguous) ? ambiguous.c : ambiguous.f));

    // promise.then + $q.reject:

    // $ExpectType IPromise<number>
    $q.resolve(true).then(result => Math.random() > 0.5 ? Math.random() : $q.reject());
    // $ExpectType IPromise<number>
    $q.resolve(true).then(result => Math.random() > 0.5 ? Math.random() : $q.reject('a'));
    // $ExpectType IPromise<never>
    $q.resolve().then(() => $q.reject('a'));
    // $ExpectType IPromise<void>
    $q.resolve().then(() => {
        if (Math.random() > 0.5) $q.reject();
    });

    // promise.catch
    // $ExpectType IPromise<any>
    promise.catch(err => err);
    // $ExpectType IPromise<any>
    promise.catch(err => anything);
    // $ExpectType IPromise<AbcObject>
    promise.catch(err => abcObject);
    // $ExpectType IPromise<AbcObject>
    promise.catch(err => anyOf2(abcObject, rejectedPromise));
    // $ExpectType IPromise<AbcObject>
    promise.catch(err => anyOf3(abcObject, abcObjectPromise, rejectedPromise));
    // $ExpectType IPromise<AbcObject>
    promise.catch(err => abcObjectPromise);
    // $ExpectType IPromise<AbcObject | IHttpResponse<AbcObject>>
    promise.catch(err => abcObjectHttpPromise);
    // $ExpectType IPromise<AbcObject | DefObject>
    promise.catch(err => defObject);
    // $ExpectType IPromise<AbcObject | DefObject>
    promise.catch(err => defObjectPromise);
    // $ExpectType IPromise<AbcObject | IHttpResponse<DefObject>>
    promise.catch(err => defObjectHttpPromise);

    // $ExpectType IPromise<boolean>
    promise
        .catch(err => defObject)
        .then(
            ambiguous => (isAbcObject(ambiguous) ? ambiguous.c : ambiguous.f)
        );

    // promise.finally
    // $ExpectType IPromise<AbcObject>
    promise.finally(() => anything);
    // $ExpectType IPromise<AbcObject>
    promise.finally(() => abcObject);
    // $ExpectType IPromise<AbcObject>
    promise.finally(() => defObject);
}

function test_angular_forEach() {
    const values: { [key: string]: string } = { name: 'misko', gender: 'male' };
    const log: string[] = [];
    angular.forEach(values, (value, key, obj) => {
        obj[key] = value;
        this.push(`${key}: ${value}`);
    }, log);
    // expect(log).toEqual(['name: misko', 'gender: male']);
    // TODO: Set minimum version to ts3.1 where this is always HTMLCollectionOf
    type Collection = NodeListOf<HTMLImageElement> | HTMLCollectionOf<HTMLImageElement>;
    const collection: Collection = angular.forEach(document.getElementsByTagName('img'), (value, key, obj) => {
        value; // $ExpectType HTMLImageElement
        key; // $ExpectType number
        const collection: Collection = obj;
    });
    // $ExpectType number[]
    angular.forEach([1, 2, 3], (value, key, obj) => {
        value; // $ExpectType number
        key; // $ExpectType number
        obj; // $ExpectType number[]
    });
    // $ExpectType string
    angular.forEach('123', (value, key, obj) => {
        value; // $ExpectType string
        key; // $ExpectType number
        obj; // $ExpectType string
    });
}

// angular.element() tests
let element = angular.element('<div></div>');
let scope: ng.IScope = element.scope();
let isolateScope: ng.IScope = element.isolateScope();
isolateScope = element.find('div').isolateScope();
isolateScope = element.children().isolateScope();
let element2 = angular.element(element);
let elementArray = angular.element(document.querySelectorAll('div'));
let elementReadyFn = angular.element(() => {
    console.log('ready');
});
angular.element(window);
declare let windowService: angular.IWindowService;
angular.element(windowService);

// $timeout signature tests
namespace TestTimeout {
    interface AbcObject {
        a: number;
        b: string;
        c: boolean;
    }
    const abcObjectFn: (...args: any[]) => AbcObject = null;
    const promiseAny: angular.IPromise<any> = null;
    const $timeout: angular.ITimeoutService = null;

    // $timeout
    {
        let result: angular.IPromise<any>;
        result = $timeout();
    }
    {
        let result: angular.IPromise<void>;
        result = $timeout(1);
        result = $timeout(1, true);
    }
    {
        let result: angular.IPromise<AbcObject>;
        result = $timeout(abcObjectFn);
        result = $timeout(abcObjectFn, 1);
        result = $timeout(abcObjectFn, 1, true);
        result = $timeout(abcObjectFn, 1, true, 1);
        result = $timeout(abcObjectFn, 1, true, 1, '');
        result = $timeout(abcObjectFn, 1, true, 1, '', true);
    }

    // $timeout.cancel
    {
        let result: boolean;
        result = $timeout.cancel();
        result = $timeout.cancel(promiseAny);
    }
}

function test_IAttributes(attributes: ng.IAttributes) {
    return attributes;
}

test_IAttributes({
    $normalize(classVal) { return 'foo'; },
    $addClass(classVal) {},
    $removeClass(classVal) {},
    $updateClass(newClass, oldClass) {},
    $set(key, value) {},
    $observe(name: any, fn: any) {
        return fn;
    },
    $attr: {}
});

class SampleDirective implements ng.IDirective {
    restrict = 'A';
    name = 'doh';

    compile(templateElement: JQLite) {
        return {
            post: this.link
        };
    }

    static instance(): ng.IDirective {
        return new SampleDirective();
    }

    link(scope: ng.IScope) {}
}

class SampleDirective2 implements ng.IDirective {
    restrict = 'EAC';

    compile(templateElement: JQLite) {
        return {
            pre: this.link
        };
    }

    static instance(): ng.IDirective {
        return new SampleDirective2();
    }

    link(scope: ng.IScope) {}
}

angular.module('SameplDirective', []).directive('sampleDirective', SampleDirective.instance).directive('sameplDirective2', SampleDirective2.instance);

angular.module('AnotherSampleDirective', []).directive('myDirective', ['$interpolate', '$q', ($interpolate: ng.IInterpolateService, $q: ng.IQService) => {
    return {
        restrict: 'A',
        link: (scope: ng.IScope, el: JQLite, attr: ng.IAttributes) => {
            $interpolate(attr['test'])(scope);
            $interpolate('', true)(scope);
            $interpolate('', true, 'html')(scope);
            $interpolate('', true, 'html', true)(scope);
            const defer = $q.defer();
            defer.reject();
            defer.resolve();
            defer.promise.then(d => d)
            .then(
                (): any => null,
                (): any => null)
            .catch((): any => null)
            .finally((): any => null);
            let promise = new $q((resolve) => {
                resolve();
            });

            promise = new $q((resolve, reject) => {
                reject();
                resolve(true);
            });

            promise = new $q<boolean>((resolver, reject) => {
                resolver(true);
                reject(false);
            });
        }
    };
}]);

// test from https://docs.angularjs.org/guide/directive
angular.module('docsSimpleDirective', [])
    .controller('Controller', ['$scope', ($scope: any) => {
        $scope.customer = {
            name: 'Naomi',
            address: '1600 Amphitheatre'
        };
    }])
    .directive('myCustomer', () => {
        return {
            template: 'Name: {{customer.name}} Address: {{customer.address}}'
        };
    });

angular.module('docsTemplateUrlDirective', [])
    .controller('Controller', ['$scope', ($scope: any) => {
        $scope.customer = {
            name: 'Naomi',
            address: '1600 Amphitheatre'
        };
    }])
    .directive('myCustomer', () => {
        return {
            templateUrl: 'my-customer.html'
        };
    });

angular.module('docsRestrictDirective', [])
    .controller('Controller', ['$scope', ($scope: any) => {
        $scope.customer = {
            name: 'Naomi',
            address: '1600 Amphitheatre'
        };
    }])
    .directive('myCustomer', () => {
        return {
            restrict: 'E',
            templateUrl: 'my-customer.html'
        };
    });

angular.module('docsScopeProblemExample', [])
    .controller('NaomiController', ['$scope', ($scope: any) => {
        $scope.customer = {
            name: 'Naomi',
            address: '1600 Amphitheatre'
        };
    }])
    .controller('IgorController', ['$scope', ($scope: any) => {
        $scope.customer = {
            name: 'Igor',
            address: '123 Somewhere'
        };
    }])
    .directive('myCustomer', () => {
        return {
            restrict: 'E',
            templateUrl: 'my-customer.html'
        };
    });

angular.module('docsIsolateScopeDirective', [])
    .controller('Controller', ['$scope', ($scope: any) => {
        $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
        $scope.igor = { name: 'Igor', address: '123 Somewhere' };
    }])
    .directive('myCustomer', () => {
        return {
            restrict: 'E',
            scope: {
                customerInfo: '=info'
            },
            templateUrl: 'my-customer-iso.html'
        };
    });

angular.module('docsIsolationExample', [])
    .controller('Controller', ['$scope', ($scope: any) => {
        $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
        $scope.vojta = { name: 'Vojta', address: '3456 Somewhere Else' };
    }])
    .directive('myCustomer', () => {
        return {
            restrict: 'E',
            scope: {
                customerInfo: '=info'
            },
            templateUrl: 'my-customer-plus-vojta.html'
        };
    });

angular.module('docsTimeDirective', [])
    .controller('Controller', ['$scope', ($scope: any) => {
        $scope.format = 'M/d/yy h:mm:ss a';
    }])
    .directive('myCurrentTime', ['$interval', 'dateFilter', ($interval: any, dateFilter: any) => {
        return {
            link(scope: ng.IScope, element: JQLite, attrs: ng.IAttributes) {
                let format: any;
                let timeoutId: angular.IPromise<any>;

                function updateTime() {
                    element.text(dateFilter(new Date(), format));
                }

                scope.$watch(attrs['myCurrentTime'], (value: any) => {
                    format = value;
                    updateTime();
                });

                element.on('$destroy', () => {
                    $interval.cancel(timeoutId);
                });

                // start the UI update process; save the timeoutId for canceling
                timeoutId = $interval(() => {
                    updateTime(); // update DOM
                }, 1000);
            }
        };
    }]);

angular.module('docsTransclusionDirective', [])
    .controller('Controller', ['$scope', ($scope: any) => {
        $scope.name = 'Tobias';
    }])
    .directive('myDialog', () => {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'my-dialog.html'
        };
    });

angular.module('docsTransclusionExample', [])
    .controller('Controller', ['$scope', ($scope: any) => {
        $scope.name = 'Tobias';
    }])
    .directive('myDialog', () => {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            templateUrl: 'my-dialog.html',
            link(scope: ng.IScope, element: JQLite) {
                scope['name'] = 'Jeff';
            }
        };
    });

angular.module('docsIsoFnBindExample', [])
    .controller('Controller', ['$scope', '$timeout', ($scope: any, $timeout: any) => {
        $scope.name = 'Tobias';
        $scope.hideDialog = () => {
            $scope.dialogIsHidden = true;
            $timeout(() => {
                $scope.dialogIsHidden = false;
            }, 2000);
        };
    }])
    .directive('myDialog', () => {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                close: '&onClose'
            },
            templateUrl: 'my-dialog-close.html'
        };
    });

angular.module('dragModule', [])
    .directive('myDraggable', ['$document', ($document: any) => {
        return (scope: any, element: any, attr: any) => {
            let startX = 0;
            let startY = 0;
            let x = 0;
            let y = 0;

            element.css({
                position: 'relative',
                border: '1px solid red',
                backgroundColor: 'lightgrey',
                cursor: 'pointer'
            });

            element.on('mousedown', (event: any) => {
                // Prevent default dragging of selected content
                event.preventDefault();
                startX = event.pageX - x;
                startY = event.pageY - y;
                $document.on('mousemove', mousemove);
                $document.on('mouseup', mouseup);
            });

            function mousemove(event: any) {
                y = event.pageY - startY;
                x = event.pageX - startX;
                element.css({
                    top: y + 'px',
                    left:  x + 'px'
                });
            }

            function mouseup() {
                $document.off('mousemove', mousemove);
                $document.off('mouseup', mouseup);
            }
        };
    }]);

angular.module('docsTabsExample', [])
    .directive('myTabs', () => {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            controller($scope: ng.IScope) {
                const panes: any = $scope['panes'] = [];

                $scope['select'] = (pane: any) => {
                    angular.forEach(panes, (pane: any) => {
                        pane.selected = false;
                    });
                    pane.selected = true;
                };

                this.addPane = (pane: any) => {
                    if (panes.length === 0) {
                        $scope['select'](pane);
                    }
                    panes.push(pane);
                };
            },
            templateUrl: 'my-tabs.html'
        };
    })
    .directive('myPane', () => {
        return {
            require: '^myTabs',
            restrict: 'E',
            transclude: true,
            scope: {
                title: '@'
            },
            link(scope: ng.IScope, element: JQLite, attrs: ng.IAttributes, tabsCtrl: any) {
                tabsCtrl.addPane(scope);
            },
            templateUrl: 'my-pane.html'
        };
    });

angular.module('multiSlotTranscludeExample', [])
    .directive('dropDownMenu', () => {
        return {
            transclude: {
                button: 'button',
                list: 'ul',
            },
            link(scope, element, attrs, ctrl, transclude) {
                // without scope
                element.append(transclude());
                transclude(clone => element.append(clone));

                // with scope
                transclude(scope, clone => element.append(clone));
                transclude(scope, clone => element.append(clone), element, 'button');
                element.append(transclude(scope, null, element, 'list').addClass('drop-down-list'));
            }
        };
    });

// $ExpectType IModule
const componentModule = angular.module('componentExample', [])
    .component('counter', {
        require: {ctrl: '^ctrl'},
        bindings: {
            count: '='
        },
        controller: 'CounterCtrl',
        controllerAs: 'counterCtrl',
        template() {
            return '';
        },
        transclude: {
            el: 'target'
        }
    })
    .component('anotherCounter', {
        controller() {},
        require: {
            parent: '^parentCtrl'
        },
        template: '',
        transclude: true
    })
    .component({
        aThirdComponent: {
            controller: class AThirdComponentController {
                count: number;
            },
            bindings: {
                count: '='
            }
        }
    });

interface ICopyExampleUser {
    name?: string;
    email?: string;
    gender?: string;
}

interface ICopyExampleScope {
    user: ICopyExampleUser;
    master: ICopyExampleUser;
    update(copyExampleUser: ICopyExampleUser): any;
    reset(): any;
}

angular.module('copyExample', [])
    .controller('ExampleController', ['$scope', ($scope: ICopyExampleScope) => {
        $scope.master = { };

        $scope.update = user => {
            // Example with 1 argument
            $scope.master = angular.copy(user);
        };

        $scope.reset = () => {
            // Example with 2 arguments
            angular.copy($scope.master, $scope.user);
        };

        $scope.reset();
    }]);

// Extending IScope for a directive, see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/21160
interface IMyScope extends angular.IScope {
    myScopeProperty: boolean;
}

angular.module('aaa').directive('directive', () => ({
    link(scope: IMyScope) {
        console.log(scope.myScopeProperty);
        return;
    }
}));

namespace locationTests {
    const $location: ng.ILocationService = null;

    /*
     * From https://docs.angularjs.org/api/ng/service/$location
     */

    // given url http://example.com/#/some/path?foo=bar&baz=xoxo
    const searchObject = $location.search();
    // => {foo: 'bar', baz: 'xoxo'}

    function assert(condition: boolean) {
        if (!condition) {
            throw new Error();
        }
    }

    // set foo to 'yipee'
    $location.search('foo', 'yipee');
    // => $location

    // set foo to 5
    $location.search('foo', 5);
    // => $location

    /*
     * From: https://docs.angularjs.org/guide/$location
     */

    // in browser with HTML5 history support:
    // open http://example.com/#!/a -> rewrite to http://example.com/a
    // (replacing the http://example.com/#!/a history record)
    assert($location.path() === '/a');

    $location.path('/foo');
    assert($location.absUrl() === 'http://example.com/foo');

    assert($location.search() === {});
    $location.search({ a: 'b', c: true });
    assert($location.absUrl() === 'http://example.com/foo?a=b&c');

    $location.path('/new').search('x=y');
    assert($location.url() === 'new?x=y');
    assert($location.absUrl() === 'http://example.com/new?x=y');

    // in browser without html5 history support:
    // open http://example.com/new?x=y -> redirect to http://example.com/#!/new?x=y
    // (again replacing the http://example.com/new?x=y history item)
    assert($location.path() === '/new');
    assert($location.search() === { x: 'y' });

    $location.path('/foo/bar');
    assert($location.path() === '/foo/bar');
    assert($location.url() === '/foo/bar?x=y');
    assert($location.absUrl() === 'http://example.com/#!/foo/bar?x=y');
}

// NgModelController
function NgModelControllerTyping() {
    const ngModel: angular.INgModelController = null;
    const $http: angular.IHttpService = null;
    const $q: angular.IQService = null;

    // See https://docs.angularjs.org/api/ng/type/ngModel.NgModelController#$validators
    ngModel.$validators['validCharacters'] = (modelValue, viewValue) => {
        const value = modelValue || viewValue;
        return /[0-9]+/.test(value) &&
            /[a-z]+/.test(value) &&
            /[A-Z]+/.test(value) &&
            /\W+/.test(value);
    };

    ngModel.$asyncValidators['uniqueUsername'] = (modelValue, viewValue) => {
        const value = modelValue || viewValue;
        return $http.get('/api/users/' + value).
            then(() => $q.reject('exists'), () => true);
    };
}

// FormController
angular.module('app').directive('formDebugChecker', () => {
    return {
        require: '^^form',
        link: (scope, el, attrs, ctrl) => {
            const form = ctrl as angular.IFormController;
            el.on('click', () => {
                const report = [] as string[];
                angular.forEach(form.$error, (controls, validationErrorKey) => {
                    const names = controls.map(control => control.$name);
                    report.push(`${validationErrorKey}: ${controls.length} control(s) (${names.join(', ')})`);
                });
                console.log(`This form has ${report.length} error(s).\n${report.join('\n')}`);
            });
        }
    };
});

let $filter: angular.IFilterService;

function testFilter() {
    const items: string[] = null;
    $filter('filter')(items, 'test');
    $filter('filter')(items, {name: 'test'});
    $filter('filter')(items, (val, index, array) => {
        return true;
    });
    $filter('filter')(items, (val, index, array) => {
      return true;
    }, (actual, expected) => {
        return actual === expected;
    });
}

function testCurrency() {
    $filter('currency')(126);
    $filter('currency')(126, '$', 2);
}

function testNumber() {
    $filter('number')(167);
    $filter('number')(167, 2);
}

function testDate() {
    $filter('date')(new Date());
    $filter('date')(new Date(), 'yyyyMMdd');
    $filter('date')(new Date(), 'yyyyMMdd', '+0430');
}

function testJson() {
    const json: string = $filter('json')({test: true}, 2);
}

function testLowercase() {
    const lower: string = $filter('lowercase')('test');
}

function testUppercase() {
    const lower: string = $filter('uppercase')('test');
}

function testLimitTo() {
    const limitTo = $filter('limitTo');
    let filtered: number[] = $filter('limitTo')([1, 2, 3], 5);
    filtered = $filter('limitTo')([1, 2, 3], 5, 2);

    let filteredString: string = $filter('limitTo')('124', 4);
    filteredString = $filter('limitTo')(124, 4);
}

function testOrderBy() {
    let filtered: number[] = $filter('orderBy')([1, 2, 3], 'test');
    filtered = $filter('orderBy')([1, 2, 3], 'test', true);
    filtered = $filter('orderBy')([1, 2, 3], ['prop1', 'prop2']);
    filtered = $filter('orderBy')([1, 2, 3], (val: number) => 1);
    let filtered2: string[] = $filter('orderBy')(['1', '2', '3'], (val: string) => 1);
    filtered2 = $filter('orderBy')(['1', '2', '3'], [
        (val: string) => 1,
        (val: string) => 2
    ]);
}

function testDynamicFilter() {
    // Test with separate variables
    const dateFilter = $filter('date');
    const myDate = new Date();
    dateFilter(myDate , 'EEE, MMM d');

    // Test with dynamic name
    const filterName = 'date';
    const dynDateFilter = $filter<ng.IFilterDate>(filterName);
    dynDateFilter(new Date());
}

type MyCustomFilter = (value: string) => string;

function testCustomFilter() {
    const filterCustom = $filter<MyCustomFilter>('custom');
    const filtered: string = filterCustom('test');
}

function parseTyping() {
    const $parse: angular.IParseService = null;
    const compiledExp = $parse('a.b.c');
    if (compiledExp.constant) {
        return compiledExp({});
    } else if (compiledExp.literal) {
        return compiledExp({}, {a: {b: {c: 42}}});
    }
}

function parseWithParams() {
    const $parse: angular.IParseService = null;
    const compiledExp1 = $parse('a.b.c', () => null);
    const compiledExp2 = $parse('a.b.c', null, false);
}

function doBootstrap(element: Element | JQuery, mode: string): ng.auto.IInjectorService {
    if (mode === 'debug') {
        return angular.bootstrap(element, ['main', ($provide: ng.auto.IProvideService) => {
            $provide.decorator('$rootScope', ($delegate: ng.IRootScopeService) => {
                $delegate['debug'] = true;
            });
        }, 'debug-helpers'], {
            strictDi: true
        });
    }
    return angular.bootstrap(element, ['main'], {
        strictDi: false
    });
}

function testIHttpParamSerializerJQLikeProvider() {
    const serializer: angular.IHttpParamSerializer = null;
    serializer({
        a: 'b'
    });
}

function testJqLiteRestoreBehavior() {
    angular.UNSAFE_restoreLegacyJqLiteXHTMLReplacement(); // $ExpectType void
}

function anyOf2<T1, T2>(v1: T1, v2: T2) {
    return Math.random() < 0.5 ? v1 : v2;
}

function anyOf3<T1, T2, T3>(v1: T1, v2: T2, v3: T3) {
    const rnd = Math.random();
    return rnd < 0.33 ? v1 : rnd < 0.66 ? v2 : v3;
}

function toPromise<T>(val: T): ng.IPromise<T> {
    const p: ng.IPromise<T> = null;
    return p;
}

const directiveCompileFn: ng.IDirectiveCompileFn = (
        templateElement: JQLite,
        templateAttributes: ng.IAttributes,
        transclude: ng.ITranscludeFunction
    ): ng.IDirectiveLinkFn => {
    return (
        scope: ng.IScope,
        instanceElement: JQLite,
        instanceAttributes: ng.IAttributes
    ) => {
        return null;
    };
};

interface MyScope extends ng.IScope {
    foo: string;
}

interface MyElement extends JQLite {
    foo: string;
}

interface MyAttributes extends ng.IAttributes {
    foo: string;
}
interface MyController extends ng.INgModelController {
    foo: string;
}

angular.module('WithGenerics', [])
    .directive('directiveUsingGenerics', () => {
        return {
            restrict: 'E',
            link(scope: MyScope, element: MyElement, templateAttributes: MyAttributes, controller: MyController) {
                scope['name'] = 'Jeff';
            }
        };
    })
    .directive('linkFunctionUsingGenerics', () => {
        return (scope: MyScope, element: MyElement, templateAttributes: MyAttributes, controller: MyController) => {
            scope['name'] = 'Jeff';
        };
    });

angular.errorHandlingConfig(); // $ExpectType IErrorHandlingConfig
// $ExpectType void
angular.errorHandlingConfig({
    objectMaxDepth: 5,
    urlErrorParamsEnabled: true,
});
