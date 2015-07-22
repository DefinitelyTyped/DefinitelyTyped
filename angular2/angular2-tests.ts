/// <reference path="angular2.d.ts"/>
/// <reference path="router.d.ts"/>

import {Component, View, Directive, bootstrap, bind, NgFor, NgIf} from "angular2/angular2";

class Service {
	
}
class Service2 {
  
}

class Cmp {
	static annotations: any[];
}
Cmp.annotations = [
  Component({
    selector: 'cmp',
    injectables: [Service, bind(Service2).toValue(null)]
  }),
  View({
    template: '{{greeting}} world!',
    directives: [NgFor, NgIf]
  }),
  Directive({
    selector: '[tooltip]',
    properties: [
      'text: tooltip'
    ],
    hostListeners: {
      'onmouseenter': 'onMouseEnter()',
      'onmouseleave': 'onMouseLeave()'
    }
  })
];

@Component({selector: 'cmp2'})
@View({templateUrl: '/index.html'})
class Cmp2 {
  
}

bootstrap(Cmp);
