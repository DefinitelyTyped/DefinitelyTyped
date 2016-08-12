/// <reference path="./angular-es.d.ts" />

//
//  @Component
//
import { Component } from 'angular-es';
@Component({
    selector: '',
    template: ''
})
class MyComponentController {

}

//
// @Config
//
import { Config } from 'angular-es';

@Config
class MyConfig {

}

//
// @Constant
//
import { Constant } from 'angular-es';

@Constant('MyConstant')
class MyConstant {
    foo = 'foo';
    bar = 'bar';
}

//
// @Controller
//
import { Controller } from 'angular-es';

@Controller('MyController')
class MyController {

}

//
// @Decorator
//
import { Decorator } from 'angular-es';

@Decorator('MyServiceDecorator')
class MyServiceDecorator {

}

//
// @Directive
//
import { Directive } from 'angular-es';

@Directive('MyDirective')
class MyDirective {

}

//
// @Factory
//
import { Factory } from 'angular-es';

@Factory('MyFactory')
class MyFactory {
}

//
// @Filter
//
import { Filter } from 'angular-es';

@Filter('MyFilter')
class MyFilter {
}

//
// @Inject
//
import { Inject } from 'angular-es';

@Inject('fooBar')
class MyService {

    @Inject('bazBar')
    myMethod(bazBar) {
    }

    constructor(fooBar) {
    }
}

//
// @InjectAsProperty
//
import { InjectAsProperty } from 'angular-es';

@InjectAsProperty('fooBar')
class MyService {
    fooBar;

    myMethod() {
        this.fooBar !== undefined;
    }
}

//
// @Module
//
import { Module, Service } from 'angular-es';

@Module('my.module')
@Service('MyService')
class MyService {
}

//
// @Provider
//
import { Provider } from 'angular-es';

@Provider('MyProvider')
class MyProvider {
}

//
// @Run
//
import { Run } from 'angular-es';

@Run
class MyRunBlock {
}

//
// @Service
//
import { Service } from 'angular-es';

@Service('MyService')
class MyService {
}
//
// @Value
//
import { Value } from 'angular-es';

@Value('MyValue')
class MyValue {
}
