/// <reference path="angular-mocks.d.ts" />

declare var mock: ng.IMockStatic;

mock.dump({ key: 'value' });

mock.inject(
    function () { return 1; },
    function () { return 2; }
    );

mock.module('module1', 'module2');
mock.module(
    function () { return 1; },
    function () { return 2; }
    );
mock.module({ module1: function () { return 1; } });

mock.TzDate(-7, '2013-1-1T15:00:00Z');
mock.TzDate(-8, 12345678);
