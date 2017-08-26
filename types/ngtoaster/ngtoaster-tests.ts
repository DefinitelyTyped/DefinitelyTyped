import ngtoaster = require("ngtoaster");
import * as ng from 'angular';
import * as angular from 'angular';

class NgToasterTestController {
  constructor(public $scope: ng.IScope, public $window: ng.IWindowService, public toaster: ngtoaster.IToasterService) {
    this.bar = 'Hi';
  }
  bar: string;

  pop(): void {
    this.toaster.success({ title: "title", body: "text1" });
    this.toaster.error("title", "text2");
    this.toaster.pop({ type: 'wait', title: "title", body: "text" });
    this.toaster.pop('success', "title", '<ul><li>Render html</li></ul>', 5000, 'trustedHtml');
    this.toaster.pop('error', "title", '<ul><li>Render html</li></ul>', null, 'trustedHtml');
    this.toaster.pop('wait', "title", null, null, 'template');
    this.toaster.pop('warning', "title", "myTemplate.html", null, 'template');
    this.toaster.pop('note', "title", "text");
    this.toaster.pop('success', "title", 'Its address is https://google.com.', 5000, 'trustedHtml', (toaster: ngtoaster.IToast): boolean => {
      var match = toaster.body.match(/http[s]?:\/\/[^\s]+/);
      if (match) {
        this.$window.open(match[0]);
      }
      return true;
    });
    this.toaster.pop('warning', "Hi ", "{template: 'myTemplateWithData.html', data: 'MyData'}", 15000, 'templateWithData');
  }

  goToLink(toaster: ngtoaster.IToast): boolean {
    var match = toaster.body.match(/http[s]?:\/\/[^\s]+/);
    if (match) {
      this.$window.open(match[0]);
    }
    return true;
  }

  clear(): void {
    this.toaster.clear();
  }
}

angular
  .module('main', ['ngAnimate', 'toaster'])
  .controller('myController', NgToasterTestController);