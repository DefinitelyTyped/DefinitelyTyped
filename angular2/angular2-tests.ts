/// <reference path="angular2.d.ts"/>

// Use Typescript 1.4 style imports
import ng = require("angular2/angular2");
import di = require("angular2/di");

class Service {
	
}
class Service2 {
  
}

class Cmp {
	static annotations: any[];
}
Cmp.annotations = [
  ng.Component({
    selector: 'cmp',
    injectables: [Service, di.bind(Service2).toValue(null)]
  }),
  ng.View({
    template: '{{greeting}} world!',
    directives: [ng.For, ng.If]
  })
];

ng.bootstrap(Cmp);
