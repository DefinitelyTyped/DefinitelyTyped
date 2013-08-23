/// <reference path="knockout.deferred.updates.d.ts" />

// Turn *off* deferred updates for computed observables and subscriptions
ko.computed.deferUpdates = false;

var myComputed = ko.computed(() => { /* ... */ });
// Turn *on* deferred updates for this computed observable
myComputed.deferUpdates = true;

var myObservable = ko.observable();
var mySubscription = myObservable.subscribe((value) => { /* ... */ });
// Turn *on* deferred updates for this subscription
mySubscription.deferUpdates = true;

// Turn *off* deferred updates for this computed observable
myComputed.extend({ deferred: false });


//
// Examples 
//

function nestedComputedNoPlugin() {
    var vm: any = {
        a: ko.observable(0),
        b: ko.observable(0),
        c: ko.observable(0),
        d: ko.observable(0),
        e: ko.observable(0),
        f: ko.observable(0)
    };

    var startTime = new Date().getTime();
    var updateArray = [];

    function firstUpdate() {
        var updateList = document.getElementById('updates');
        while (updateList.firstChild) updateList.removeChild(updateList.firstChild);
    }

    function pushUpdate(name, value, color) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(name + ' ' + value + '; ' + (new Date().getTime() - startTime) + ' ms'));
        li.style.color = color;
        document.getElementById('updates').appendChild(li);
    }

    function lastUpdate() {
    }

    var updateCounter = 0, plusminus = 1;

    vm.doUpdate = function () {
        var u = updateCounter += plusminus;
        startTime = new Date().getTime();
        vm.a(u);
        vm.b(u);
        vm.c(u);
        vm.d(u);
        vm.e(u);
        vm.f(u);
        plusminus = !u ? 1 : (u == 9) ? -1 : plusminus;
    };

    vm.setThrottle = function (value) {
        vm.A.throttleEvaluation = value;
        vm._B.throttleEvaluation = value;
        vm.C.throttleEvaluation = value;
        vm.D.throttleEvaluation = value;
        vm.E.throttleEvaluation = value;
        vm.F.throttleEvaluation = value;
    };

    vm.runNormal = function () {
        ko.computed.deferUpdates = false;
        vm.setThrottle(undefined);
        vm.doUpdate();
    };

    vm.runThrottle = function () {
        ko.computed.deferUpdates = false;
        vm.setThrottle(1);
        vm.doUpdate();
    };

    vm.A = ko.computed(function () {
        var result = '' + vm.a();
        firstUpdate();
        pushUpdate('A', result, 'green');
        return result;
    }, null, { deferEvaluation: true });

    vm._B = ko.computed(function () {
        var result = '' + vm.A() + vm.b();
        pushUpdate('B', result, 'darkturquoise');
        return result;
    }, null, { deferEvaluation: true });

    vm.C = ko.computed(function () {
        var result = '' + vm._B() + vm.c();
        pushUpdate('C', result, 'royalblue');
        return result;
    }, null, { deferEvaluation: true });

    vm.D = ko.computed(function () {
        var result = '' + vm.C() + vm.d();
        pushUpdate('D', result, 'indigo');
        return result;
    }, null, { deferEvaluation: true });

    vm.E = ko.computed(function () {
        var result = '' + vm.D() + vm.e();
        pushUpdate('E', result, 'firebrick');
        return result;
    }, null, { deferEvaluation: true });

    vm.F = ko.computed(function () {
        var f = vm.f(), result = '' + vm.E() + f;
        pushUpdate('F', result, 'orangered');
        if (result === '' + f + f + f + f + f + f) lastUpdate();
        return result;
    }, null, { deferEvaluation: true });

    vm.A();
    vm._B();
    vm.C();
    vm.D();
    vm.E();
    vm.F();

    ko.applyBindings(vm);
};

function nestedComputedPlugin() {
    var vm: any = {
        a: ko.observable(0),
        b: ko.observable(0),
        c: ko.observable(0),
        d: ko.observable(0),
        e: ko.observable(0),
        f: ko.observable(0)
    };

    var startTime = new Date().getTime();
    var updateArray = [];

    function firstUpdate() {
        var updateList = document.getElementById('updates');
        while (updateList.firstChild)
            updateList.removeChild(updateList.firstChild);
    }

    function pushUpdate(name, value, color) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(name + ' ' + value + '; ' + (new Date().getTime() - startTime) + ' ms'));
        li.style.color = color;
        document.getElementById('updates').appendChild(li);
    }

    function lastUpdate() {
    }

    var updateCounter = 0, plusminus = 1;

    vm.doUpdate = function () {
        var u = updateCounter += plusminus;
        startTime = new Date().getTime();
        vm.a(u);
        vm.b(u);
        vm.c(u);
        vm.d(u);
        vm.e(u);
        vm.f(u);
        plusminus = !u ? 1 : (u == 9) ? -1 : plusminus;
    };

    vm.setThrottle = function (value) {
        vm.A.throttleEvaluation = value;
        vm._B.throttleEvaluation = value;
        vm.C.throttleEvaluation = value;
        vm.D.throttleEvaluation = value;
        vm.E.throttleEvaluation = value;
        vm.F.throttleEvaluation = value;
    };

    vm.runNormal = function () {
        ko.computed.deferUpdates = false;
        vm.setThrottle(undefined);
        vm.doUpdate();
    };

    vm.runThrottle = function () {
        ko.computed.deferUpdates = false;
        vm.setThrottle(1);
        vm.doUpdate();
    };

    vm.runDefer = function () {
        ko.computed.deferUpdates = true;
        vm.setThrottle(undefined);
        vm.doUpdate();
    };

    vm.runWrappedDefer = ko.tasks.makeProcessedCallback(vm.runDefer);

    vm.A = ko.computed(function () {
        var result = '' + vm.a();
        firstUpdate();
        pushUpdate('A', result, 'green');
        return result;
    }, null, { deferEvaluation: true });

    vm._B = ko.computed(function () {
        var result = '' + vm.A() + vm.b();
        pushUpdate('B', result, 'darkturquoise');
        return result;
    }, null, { deferEvaluation: true });

    vm.C = ko.computed(function () {
        var result = '' + vm._B() + vm.c();
        pushUpdate('C', result, 'royalblue');
        return result;
    }, null, { deferEvaluation: true });

    vm.D = ko.computed(function () {
        var result = '' + vm.C() + vm.d();
        pushUpdate('D', result, 'indigo');
        return result;
    }, null, { deferEvaluation: true });

    vm.E = ko.computed(function () {
        var result = '' + vm.D() + vm.e();
        pushUpdate('E', result, 'firebrick');
        return result;
    }, null, { deferEvaluation: true });

    vm.F = ko.computed(function () {
        var f = vm.f(), result = '' + vm.E() + f;
        pushUpdate('F', result, 'orangered');
        if (result === '' + f + f + f + f + f + f) lastUpdate();
        return result;
    }, null, { deferEvaluation: true });

    vm.A();
    vm._B();
    vm.C();
    vm.D();
    vm.E();
    vm.F();

    ko.applyBindings(vm);
}
