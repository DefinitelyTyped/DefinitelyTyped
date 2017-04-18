/// <reference path="../../karma-jasmine/karma-jasmine.d.ts" />
/// <reference path="../aurelia-dependency-injection.d.ts" />
/// <reference path="../aurelia-metadata.d.ts" />

import {Container, inject, transient, singleton, Lazy, All, Optional, Parent} from 'aurelia-dependency-injection';
import {decorators} from 'aurelia-metadata';

export var run = () => {
    describe('container', () => {
        describe('injection', () => {
            it('01: instantiates class without injected services', function () {
                var container = new Container();
                var app = container.get(App_01);

                expect(app).toEqual(jasmine.any(App_01));
            });

            it('02: uses static inject method (ES6)', function () {
                var container = new Container();
                var app = container.get(App_02);

                expect(app.logger).toEqual(jasmine.any(Logger_02));
            });

            it('03: uses static inject property (TypeScript,CoffeeScript,ES5)', function () {
                App_03.inject = [Logger_03];

                var container = new Container();
                var app = container.get(App_03);

                expect(app.logger).toEqual(jasmine.any(Logger_03));
            });
        });

        describe('registration', () => {
            it('04: asserts keys are defined', () => {
                var container = new Container();

                expect(() => container.get(null)).toThrow();
                expect(() => container.get(undefined)).toThrow();

                expect(() => container.get(null)).toThrow();
                expect(() => container.get(undefined)).toThrow();

                expect(() => container.registerInstance(null, {})).toThrow();
                expect(() => container.registerInstance(undefined, {})).toThrow();

                expect(() => container.registerSingleton(null)).toThrow();
                expect(() => container.registerSingleton(undefined)).toThrow();

                expect(() => container.registerTransient(null)).toThrow();
                expect(() => container.registerTransient(undefined)).toThrow();

                expect(() => container.autoRegister(null)).toThrow();
                expect(() => container.autoRegister(undefined)).toThrow();

                expect(() => container.autoRegisterAll([null])).toThrow();
                expect(() => container.autoRegisterAll([undefined])).toThrow();

                expect(() => container.registerHandler(null, null)).toThrow();
                expect(() => container.registerHandler(undefined, null)).toThrow();

                expect(() => (<any>container).hasHandler(null)).toThrow();
                expect(() => (<any>container).hasHandler(undefined)).toThrow();
            });

            it('05: automatically configures as singleton', () => {
                inject(Logger_05)(App1_05);
                inject(Logger_05)(App2_05);

                var container = new Container();
                var app1 = container.get(App1_05);
                var app2 = container.get(App2_05);

                expect(app1.logger).toBe(app2.logger);
            });

            it('06: configures singleton via api', () => {
                inject(Logger_06)(App1_06);
                inject(Logger_06)(App2_06);

                var container = new Container();
                container.registerSingleton(Logger_06, Logger_06);

                var app1 = container.get(App1_06);
                var app2 = container.get(App2_06);

                expect(app1.logger).toBe(app2.logger);
            });

            it('08: configures singleton via metadata property (ES5, AtScript, TypeScript, CoffeeScript)', () => {
                var container = new Container();
                var app1 = container.get(App1_08);
                var app2 = container.get(App2_08);

                expect(app1.logger).toBe(app2.logger);
            });

            it('09: configures transient (non singleton) via api', () => {
                var container = new Container();
                container.registerTransient(Logger_09, Logger_09);

                var app1 = container.get(App1_09);
                var app2 = container.get(App2_09);

                expect(app1.logger).not.toBe(app2.logger);
            });

            it('10: configures transient (non singleton) via metadata method (ES6)', () => {
                var container = new Container();
                var app1 = container.get(App1_10);
                var app2 = container.get(App2_10);

                expect(app1.logger).not.toBe(app2.logger);
            });

            it('12: configures instance via api', () => {
                var container = new Container();
                var instance = new Logger_12();
                container.registerInstance(Logger_12, instance);

                var app1 = container.get(App1_12);
                var app2 = container.get(App2_12);

                expect(app1.logger).toBe(instance);
                expect(app2.logger).toBe(instance);
            });

            it('13: configures custom via api', () => {
                var container = new Container();
                container.registerHandler(Logger_13, c => "something strange");

                var app1 = container.get(App1_13);
                var app2 = container.get(App2_13);

                expect(app1.logger).toEqual("something strange");
                expect(app2.logger).toEqual("something strange");
            });

            // typescript wont let a class extend a property
            //it('14: uses base metadata method (ES6) when derived does not specify', () => {
            //    var container = new Container();
            //    var app1 = container.get(App1_14);
            //    var app2 = container.get(App2_14);

            //    expect(app1.logger).not.toBe(app2.logger);
            //});

            it('16: overrides base metadata method (ES6) with derived configuration', () => {
                var container = new Container();
                var app1 = container.get(App1_16);
                var app2 = container.get(App2_16);

                expect(app1.logger).not.toBe(app2.logger);
            });

            it('18: configures key as service when transient api only provided with key', () => {
                var container = new Container();
                container.registerTransient(Logger_18);

                var logger1 = container.get(Logger_18),
                    logger2 = container.get(Logger_18);

                expect(logger1).toEqual(jasmine.any(Logger_18));
                expect(logger2).toEqual(jasmine.any(Logger_18));
                expect(logger2).not.toBe(logger1);
            });

            it('19: configures key as service when singleton api only provided with key', () => {
                var container = new Container();
                container.registerSingleton(Logger_19);

                var logger1 = container.get(Logger_19),
                    logger2 = container.get(Logger_19);

                expect(logger1).toEqual(jasmine.any(Logger_19));
                expect(logger2).toEqual(jasmine.any(Logger_19));
                expect(logger2).toBe(logger1);
            });

            it('20: configures concrete singelton via api for abstract dependency', () => {
                var container = new Container();
                container.registerSingleton(LoggerBase_20, Logger_20);

                var app = container.get(App_20);

                expect(app.logger).toEqual(jasmine.any(Logger_20));
            });

            it('21: configures concrete transient via api for abstract dependency', () => {
                var container = new Container();
                container.registerTransient(LoggerBase_21, Logger_21);

                var app = container.get(App_21);

                expect(app.logger).toEqual(jasmine.any(Logger_21));
            });

            // typescript wont let a class extend a property
            //it('22: doesn\'t get hidden when a super class adds metadata which doesn\'t include the base registration type', () => {
            //    Reflect.defineMetadata('something', 'test', Logger_22);

            //    var container = new Container();
            //    var app1 = container.get(App1_22);
            //    var app2 = container.get(App2_22);

            //    expect(app1.logger).not.toBe(app2.logger);
            //});

            describe('Custom resolvers', () => {
                describe('Lazy', () => {
                    it('23: provides a function which, when called, will return the instance', () => {
                        var container = new Container();
                        var app1 = container.get(App1_23);

                        var logger = app1.getLogger;

                        expect(logger()).toEqual(jasmine.any(Logger_23));
                    });
                });

                describe('All', () => {
                    it('24: resolves all matching dependencies as an array of instances', () => {
                        var container = new Container();
                        container.registerSingleton(LoggerBase_24, VerboseLogger_24);
                        container.registerTransient(LoggerBase_24, Logger_24);
                        var app = container.get(App_24);

                        expect(app.loggers).toEqual(jasmine.any(Array));
                        expect(app.loggers.length).toBe(2);
                        expect(app.loggers[0]).toEqual(jasmine.any(VerboseLogger_24));
                        expect(app.loggers[1]).toEqual(jasmine.any(Logger_24));
                    });
                });

                describe('Optional', () => {
                    it('25: injects the instance if its registered in the container', () => {

                        var container = new Container();
                        container.registerSingleton(Logger_25, Logger_25);
                        var app = container.get(App_25);

                        expect(app.logger).toEqual(jasmine.any(Logger_25));
                    });

                    it('26: injects null if key is not registered in the container', () => {
                        var container = new Container();
                        container.registerSingleton(VerboseLogger_26, Logger_26);
                        var app = container.get(App_26);

                        expect(app.logger).toBe(null);
                    });

                    it('27: injects null if key nor function is registered in the container', () => {
                        var container = new Container();
                        var app = container.get(App_27);

                        expect(app.logger).toBe(null);
                    });

                    it('28: doesn\'t check the parent container hierarchy when checkParent is false or default', () => {
                        var parentContainer = new Container();
                        parentContainer.registerSingleton(Logger_28, Logger_28);

                        var childContainer = parentContainer.createChild();
                        childContainer.registerSingleton(App_28, App_28);

                        var app = childContainer.get(App_28);

                        expect(app.logger).toBe(null);
                    });

                    it('29: checks the parent container hierarchy when checkParent is true', () => {
                        var parentContainer = new Container();
                        parentContainer.registerSingleton(Logger_29, Logger_29);

                        var childContainer = parentContainer.createChild();
                        childContainer.registerSingleton(App_29, App_29);

                        var app = childContainer.get(App_29);

                        expect(app.logger).toEqual(jasmine.any(Logger_29));
                    });
                });

                describe('Parent', () => {
                    it('30: bypasses the current container and injects instance from parent container', () => {
                        var parentContainer = new Container();
                        var parentInstance = new Logger_30();
                        parentContainer.registerInstance(Logger_30, parentInstance);

                        var childContainer = parentContainer.createChild();
                        var childInstance = new Logger_30();
                        childContainer.registerInstance(Logger_30, childInstance);
                        childContainer.registerSingleton(App_30, App_30);

                        var app = childContainer.get(App_30);

                        expect(app.logger).toBe(parentInstance);
                    });

                    it('31: returns null when no parent container exists', () => {
                        var container = new Container();
                        var instance = new Logger_31();
                        container.registerInstance(Logger_31, instance);

                        var app = container.get(App_31);

                        expect(app.logger).toBe(null);
                    });
                });
            });
        });
    });
}


// 01 ------------------------------------------------------------------
class App_01 { }

// 02 ------------------------------------------------------------------
class Logger_02 { }

class App_02 {
    static inject() { return [Logger_02]; };
    logger: any;
    constructor(logger: any) {
        this.logger = logger;
    }
}

// 03 ------------------------------------------------------------------
class Logger_03 { }

class App_03 {
    static inject: any;
    logger: any;
    constructor(logger: any) {
        this.logger = logger;
    }
}

// 04 ------------------------------------------------------------------

// 05 ------------------------------------------------------------------
class Logger_05 { }

class App1_05 {
    logger: any;
    constructor(logger: any) {
        this.logger = logger;
    }
}

class App2_05 {
    logger: any;
    constructor(logger: any) {
        this.logger = logger;
    }
}

// 06 ------------------------------------------------------------------
class Logger_06 { }

class App1_06 {
    logger: any;
    constructor(logger: any) {
        this.logger = logger;
    }
}

class App2_06 {
    logger: any;
    constructor(logger: any) {
        this.logger = logger;
    }
}

// 07 ------------------------------------------------------------------
// (removed)

// 08 ------------------------------------------------------------------
class Logger_08_Class { };

let Logger_08 = decorators(singleton()).on(Logger_08_Class);

class App1_08 {
    static inject() { return [Logger_08]; };
    logger: any;
    constructor(logger: any) {
        this.logger = logger;
    }
}

class App2_08 {
    static inject() { return [Logger_08]; };
    logger: any;
    constructor(logger: any) {
        this.logger = logger;
    }
}

// 09 ------------------------------------------------------------------
class Logger_09 { }

class App1_09 {
    static inject() { return [Logger_09]; };
    logger: any;
    constructor(logger: any) {
        this.logger = logger;
    }
}

class App2_09 {
    static inject() { return [Logger_09]; };
    logger: any;
    constructor(logger: any) {
        this.logger = logger;
    }
}

// 10 ------------------------------------------------------------------
class Logger_10_Class { }

let Logger_10 = decorators(transient()).on(Logger_10_Class);

class App1_10 {
    static inject() { return [Logger_10]; };
    logger: any;
    constructor(logger: any) {
        this.logger = logger;
    }
}

class App2_10 {
    static inject() { return [Logger_10]; };
    logger: any;
    constructor(logger: any) {
        this.logger = logger;
    }
}

// 11 ------------------------------------------------------------------
// (removed)

// 12 ------------------------------------------------------------------
class Logger_12 { }

class App1_12 {
    static inject() { return [Logger_12]; };
    logger: any;
    constructor(logger: any) {
        this.logger = logger;
    }
}

class App2_12 {
    static inject() { return [Logger_12]; };
    logger: any;
    constructor(logger: any) {
        this.logger = logger;
    }
}

// 13 ------------------------------------------------------------------
class Logger_13 { }

class App1_13 {
    static inject() { return [Logger_13]; };
    logger: any;
    constructor(logger: any) {
        this.logger = logger;
    }
}

class App2_13 {
    static inject() { return [Logger_13]; };
    logger: any;
    constructor(logger: any) {
        this.logger = logger;
    }
}

// 14 ------------------------------------------------------------------
//class LoggerBase_14_Class { }

//let LoggerBase_14 = decorators(transient()).on(LoggerBase_14_Class);

//class Logger_14 extends LoggerBase_14; 
//class Logger_14 extends LoggerBase_14 { }

//class App1_14 {
//    static inject() { return [Logger_14]; };
//    logger: any;
//    constructor(logger: any) {
//        this.logger = logger;
//    }
//}

//class App2_14 {
//    static inject() { return [Logger_14]; };
//    logger: any;
//    constructor(logger: any) {
//        this.logger = logger;
//    }
//}

// 15 ------------------------------------------------------------------
// (removed)

// 16 ------------------------------------------------------------------
class LoggerBase_16_Class { };
class Logger_16_Class extends LoggerBase_16_Class { };

let LoggerBase_16 = decorators(singleton()).on(LoggerBase_16_Class);
let Logger_16 = decorators(transient()).on(Logger_16_Class);

class App1_16 {
    static inject() { return [Logger_16]; };
    logger: any;
    constructor(logger: any) {
        this.logger = logger;
    }
}

class App2_16 {
    static inject() { return [Logger_16]; };
    logger: any;
    constructor(logger: any) {
        this.logger = logger;
    }
}

// 17 ------------------------------------------------------------------
// (removed)

// 18 ------------------------------------------------------------------
class Logger_18 { }

// 19 ------------------------------------------------------------------
class Logger_19 { }

// 20 ------------------------------------------------------------------
class LoggerBase_20 { }
class Logger_20 extends LoggerBase_20 { }

class App_20 {
    static inject() { return [LoggerBase_20]; };
    logger: any;
    constructor(logger: any) {
        this.logger = logger;
    }
}
// 21 ------------------------------------------------------------------
class LoggerBase_21 { }
class Logger_21 extends LoggerBase_21 { }

class App_21 {
    static inject() { return [LoggerBase_21]; };
    logger: any;
    constructor(logger: any) {
        this.logger = logger;
    }
}

// 22 ------------------------------------------------------------------
//class LoggerBase_22_Class { }

//let LoggerBase_22 = decorators(transient()).on(LoggerBase_22_Class);

//class Logger_22 extends LoggerBase_22 { }

//class App1_22 {
//    static inject() { return [Logger_22]; };
//    logger: any;
//    constructor(logger: any) {
//        this.logger = logger;
//    }
//}

//class App2_22 {
//    static inject() { return [Logger_22]; };
//    logger: any;
//    constructor(logger: any) {
//        this.logger = logger;
//    }
//}

// 23 ------------------------------------------------------------------
class Logger_23 { }

class App1_23 {
    static inject() { return [Lazy.of(Logger_23)]; };
    getLogger: any;
    constructor(getLogger: any) {
        this.getLogger = getLogger;
    }
}

// 24 ------------------------------------------------------------------
class LoggerBase_24 { }

class VerboseLogger_24 extends LoggerBase_24 { }

class Logger_24 extends LoggerBase_24 { }

class App_24 {
    static inject() { return [All.of(LoggerBase_24)]; };
    loggers: any;
    constructor(loggers: any) {
        this.loggers = loggers;
    }
}

// 25 ------------------------------------------------------------------
class Logger_25 { }

class App_25 {
    static inject() { return [Optional.of(Logger_25)]; };
    logger: any;
    constructor(logger: any) {
        this.logger = logger;
    }
}

// 26 ------------------------------------------------------------------
class VerboseLogger_26 { }
class Logger_26 { }

class App_26 {
    static inject() { return [Optional.of(Logger_26)]; };
    logger: any;
    constructor(logger: any) {
        this.logger = logger;
    }
}

// 27 ------------------------------------------------------------------
class VerboseLogger_27 { }
class Logger_27 { }

class App_27 {
    static inject() { return [Optional.of(Logger_27)]; };
    logger: any;
    constructor(logger: any) {
        this.logger = logger;
    }
}

// 28 ------------------------------------------------------------------
class Logger_28 { }

class App_28 {
    static inject() { return [Optional.of(Logger_28)]; };
    logger: any;
    constructor(logger: any) {
        this.logger = logger;
    }
}

// 29 ------------------------------------------------------------------
class Logger_29 { }

class App_29 {
    static inject() { return [Optional.of(Logger_29, true)]; };
    logger: any;
    constructor(logger: any) {
        this.logger = logger;
    }
}

// 30 ------------------------------------------------------------------
class Logger_30 { }

class App_30 {
    static inject() { return [Parent.of(Logger_30)]; };
    logger: any;
    constructor(logger: any) {
        this.logger = logger;
    }
}

// 31 ------------------------------------------------------------------
class Logger_31 { }

class App_31 {
    static inject() { return [Parent.of(Logger_31)]; };
    logger: any;
    constructor(logger: any) {
        this.logger = logger;
    }
}