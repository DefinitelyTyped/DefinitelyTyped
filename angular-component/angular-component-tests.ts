/// <reference path="../angularjs/angular.d.ts" />
/// <reference path="angular-component.d.ts" />

// example taken from https://github.com/toddmotto/angular-component
angular
.module('app', [])
.component('counter', {
    bindings: {
      count: '='
    },
    controller: 'CounterCtrl',
    template: function () {
      return [
        '<div class="counter">',
          '<p>Counter component</p>',
          '<input type="text" ng-model="counter.count">',
          '<button type="button" ng-click="counter.decrement();">-</button>',
          '<button type="button" ng-click="counter.increment();">+</button>',
        '</div>'
      ].join('');
    }
})
.controller('CounterCtrl', function CounterCtrl() {
  function increment() {
    this.count++;
  }
  function decrement() {
    this.count--;
  }
  this.increment = increment;
  this.decrement = decrement;
})
.controller('MainCtrl', function MainCtrl() {
  this.count = 4;
});
