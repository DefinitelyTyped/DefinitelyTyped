/// <reference path="angular2.d.ts"/>

// Use Typescript 1.4 style imports
import ng = require("angular2/angular2");

class Service {
	
}

class Cmp {
	static annotations: any[];
}
Cmp.annotations = [
  ng.Component({
    selector: 'cmp',
    injectables: [Service]
  }),
  ng.View({
    template: '{{greeting}} world!',
    directives: [ng.For, ng.If]
  })
];

ng.bootstrap(Cmp);
