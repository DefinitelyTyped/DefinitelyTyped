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
    bindings: [Service, bind(Service2).toValue(null)]
  }),
  View({
    template: '{{greeting}} world!',
    directives: [NgFor, NgIf]
  }),
  Directive({
    selector: '[tooltip]',
    inputs: [
      'text: tooltip'
    ],
    outputs: [
      '(mouseenter):onMouseEnter()',
      '(mouseleave):onMouseLeave()'
    ]
  })
];

@Component({selector: 'cmp2'})
@View({templateUrl: '/index.html'})
class Cmp2 {
  
}

bootstrap(Cmp);
