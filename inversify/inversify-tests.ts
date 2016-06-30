/// <reference path="./inversify.d.ts" />
/// <reference path="../harmony-proxy/harmony-proxy.d.ts" />

import {
    Kernel,
    injectable, tagged, named, targetName,
    inject, multiInject, traverseAncerstors,
    taggedConstraint, namedConstraint, typeConstraint,
    makePropertyMultiInjectDecorator,
    makePropertyInjectTaggedDecorator,
    makePropertyInjectNamedDecorator,
    makePropertyInjectDecorator,
    KernelModule, interfaces
} from "inversify";

import * as Proxy from "harmony-proxy";

module external_module_test {

    interface Warrior {
        fight(): string;
        sneak(): string;
    }

    interface Weapon {
        hit(): string;
    }

    interface ThrowableWeapon extends Weapon {
        throw(): string;
    }

    @injectable()
    class Katana implements Weapon {
        public hit() {
            return "cut!";
        }
    }

    @injectable()
    class Shuriken implements ThrowableWeapon {
        public throw() {
            return "hit!";
        }
        public hit() {
            return "hit!";
        }
    }

    @injectable()
    class Ninja implements Warrior {

        private _katana: Weapon;
        private _shuriken: ThrowableWeapon;

        public constructor(
            @inject("Weapon") katana: Weapon,
            @inject("ThrowableWeapon") shuriken: ThrowableWeapon
        ) {
            this._katana = katana;
            this._shuriken = shuriken;
        }

        public fight() { return this._katana.hit(); };
        public sneak() { return this._shuriken.throw(); };

    }

    let kernel: interfaces.Kernel = new Kernel();
    kernel.bind<Warrior>("Warrior").to(Ninja);
    kernel.bind<Weapon>("Weapon").to(Katana);
    kernel.bind<ThrowableWeapon>("ThrowableWeapon").to(Shuriken).inSingletonScope();

    let ninja = kernel.get<Warrior>("Warrior");
    console.log(ninja);

    // Unbind
    kernel.unbind("Warrior");
    kernel.unbindAll();

    // Kernel modules
    let warriors: interfaces.KernelModule = new KernelModule((bind: interfaces.Bind) => {
        bind<Warrior>("Warrior").to(Ninja);
    });

    let weapons: interfaces.KernelModule = new KernelModule((bind: interfaces.Bind) => {
        bind<Weapon>("Weapon").to(Katana);
        bind<ThrowableWeapon>("ThrowableWeapon").to(Shuriken);
    });

    kernel = new Kernel();
    kernel.load(warriors, weapons);
    let ninja2 = kernel.get<Warrior>("Warrior");
    console.log(ninja2);

    // middleware
    function logger(planAndResolve: interfaces.PlanAndResolve<any>): interfaces.PlanAndResolve<any> {
        return (args: interfaces.PlanAndResolveArgs) => {
            let start = new Date().getTime();
            let result = planAndResolve(args);
            let end = new Date().getTime();
            console.log(end - start);
            return result;
        };
    }

    kernel.applyMiddleware(logger, logger);

    // binding types
    kernel.bind<Weapon>("Weapon").to(Katana);
    kernel.bind<Weapon>("Weapon").toConstantValue(new Katana());
    kernel.bind<Weapon>("Weapon").toDynamicValue(() => { return new Katana(); });

    kernel.bind<interfaces.Newable<Weapon>>("Weapon").toConstructor<Weapon>(Katana);

    kernel.bind<interfaces.Factory<Weapon>>("Weapon").toFactory<Weapon>((context) => {
        return () => {
            return kernel.get<Weapon>("Weapon");
        };
    });

    kernel.bind<interfaces.Factory<Weapon>>("Weapon").toAutoFactory<Weapon>("Weapon");

    kernel.bind<interfaces.Provider<Weapon>>("Weapon").toProvider<Weapon>((context) => {
        return () => {
            return new Promise<Weapon>((resolve) => {
                let katana = kernel.get<Weapon>("Weapon");
                resolve(katana);
            });
        };
    });

    kernel.bind<Weapon>("Weapon").to(Katana).onActivation((context: interfaces.Context, katanaToBeInjected: Weapon) => {
        let handler = {
            apply: function(target: any, thisArgument: any, argumentsList: any[]) {
                console.log(`Starting: ${performance.now()}`);
                let result = target.apply(thisArgument, argumentsList);
                console.log(`Finished: ${performance.now()}`);
                return result;
            }
        };
        return new Proxy(katanaToBeInjected, handler);
    });


    @injectable()
    class Samurai implements Warrior {
        public katana: Weapon;
        public shuriken: ThrowableWeapon;
        public constructor(
            @inject("Weapon") @tagged("canThrow", false) katana: Weapon,
            @inject("ThrowableWeapon") @tagged("canThrow", true) shuriken: ThrowableWeapon
        ) {
            this.katana = katana;
            this.shuriken = shuriken;
        }
        public fight() { return this.katana.hit(); };
        public sneak() { return this.shuriken.throw(); };
    }

    kernel.bind<Samurai>("Samurai").to(Samurai);
    kernel.bind<Weapon>("IWeapon").to(Katana).whenTargetTagged("canThrow", false);
    kernel.bind<ThrowableWeapon>("ThrowableWeapon").to(Shuriken).whenTargetTagged("canThrow", true);

    let throwable = tagged("canThrow", true);
    let notThrowable = tagged("canThrow", false);

    @injectable()
    class Samurai2 implements Samurai {
        public katana: Weapon;
        public shuriken: ThrowableWeapon;
        public constructor(
            @inject("Weapon") @throwable katana: Weapon,
            @inject("ThrowableWeapon") @notThrowable shuriken: ThrowableWeapon
        ) {
            this.katana = katana;
            this.shuriken = shuriken;
        }
        public fight() { return this.katana.hit(); };
        public sneak() { return this.shuriken.throw(); };
    }

    @injectable()
    class Samurai3 implements Samurai {
        public katana: Weapon;
        public shuriken: ThrowableWeapon;
        public constructor(
            @inject("Weapon") @named("strong") katana: Weapon,
            @inject("ThrowableWeapon") @named("weak") shuriken: ThrowableWeapon
        ) {
            this.katana = katana;
            this.shuriken = shuriken;
        }
        public fight() { return this.katana.hit(); };
        public sneak() { return this.shuriken.throw(); };
    }

    kernel.bind<Warrior>("Warrior").to(Samurai3);
    kernel.bind<Weapon>("Weapon").to(Katana).whenTargetNamed("strong");
    kernel.bind<Weapon>("Weapon").to(Shuriken).whenTargetNamed("weak");

    @injectable()
    class Samurai4 implements Samurai {
        public katana: Weapon;
        public shuriken: ThrowableWeapon;
        public constructor(
            @inject("Weapon") @targetName("katana") katana: Weapon,
            @inject("ThrowableWeapon") @targetName("shuriken") shuriken: ThrowableWeapon
        ) {
            this.katana = katana;
            this.shuriken = shuriken;
        }
        public fight() { return this.katana.hit(); };
        public sneak() { return this.shuriken.throw(); };
    }

    kernel.bind<Warrior>("Warrior").to(Samurai4);

    kernel.bind<Weapon>("Weapon").to(Katana).when((request: interfaces.Request) => {
        return request.target.name.equals("katana");
    });

    kernel.bind<Weapon>("Weapon").to(Shuriken).when((request: interfaces.Request) => {
        return request.target.name.equals("shuriken");
    });

    // custom constraints
    let whenParentNamedCanThrowConstraint = (request: interfaces.Request) => {
        return namedConstraint("canThrow")(request.parentRequest);
    };

    let whenAnyAncestorIsConstraint = (request: interfaces.Request) => {
        return traverseAncerstors(request, typeConstraint(Ninja));
    };

    let whenAnyAncestorTaggedConstraint = (request: interfaces.Request) => {
        return traverseAncerstors(request, taggedConstraint("canThrow")(true));
    };

    kernel.bind<Weapon>("Weapon").to(Shuriken).when(whenParentNamedCanThrowConstraint);
    kernel.bind<Weapon>("Weapon").to(Shuriken).when(whenAnyAncestorIsConstraint);
    kernel.bind<Weapon>("Weapon").to(Shuriken).when(whenAnyAncestorTaggedConstraint);

    // Constraint helpers
    kernel.bind<Weapon>("Weapon").to(Shuriken).whenInjectedInto(Ninja);
    kernel.bind<Weapon>("Weapon").to(Shuriken).whenInjectedInto("INinja");
    kernel.bind<Weapon>("Weapon").to(Shuriken).whenParentNamed("chinese");
    kernel.bind<Weapon>("Weapon").to(Shuriken).whenParentTagged("canThrow", true);
    kernel.bind<Weapon>("Weapon").to(Shuriken).whenTargetNamed("strong");
    kernel.bind<Weapon>("Weapon").to(Shuriken).whenTargetTagged("canThrow", true);
    kernel.bind<Weapon>("Weapon").to(Shuriken).whenAnyAncestorIs(Ninja);
    kernel.bind<Weapon>("Weapon").to(Shuriken).whenAnyAncestorIs("INinja");
    kernel.bind<Weapon>("Weapon").to(Shuriken).whenAnyAncestorNamed("strong");
    kernel.bind<Weapon>("Weapon").to(Shuriken).whenAnyAncestorTagged("canThrow", true);
    kernel.bind<Weapon>("Weapon").to(Shuriken).whenAnyAncestorMatches(whenParentNamedCanThrowConstraint);
    kernel.bind<Weapon>("Weapon").to(Shuriken).whenNoAncestorIs(Ninja);
    kernel.bind<Weapon>("Weapon").to(Shuriken).whenNoAncestorIs("INinja");
    kernel.bind<Weapon>("Weapon").to(Shuriken).whenNoAncestorNamed("strong");
    kernel.bind<Weapon>("Weapon").to(Shuriken).whenNoAncestorTagged("canThrow", true);
    kernel.bind<Weapon>("Weapon").to(Shuriken).whenNoAncestorMatches(whenParentNamedCanThrowConstraint);

    // multi-injection
    @injectable()
    class Samurai5 implements Warrior {
        public katana: Weapon;
        public shuriken: Weapon;
        public constructor(
            @multiInject("Weapon") wpns: Weapon[]
        ) {
            this.katana = wpns[0];
            this.shuriken = wpns[1];
        }
        public fight() { return this.katana.hit(); };
        public sneak() { return this.shuriken.hit(); };
    }

    // symbols
    let SYMBOLS = {
        ThrowableWeapon: Symbol("ThrowableWeapon"),
        Warrior: Symbol("Warrior"),
        Weapon: Symbol("Weapon"),
    };

    @injectable()
    class Ninja1 implements Warrior {

        private _katana: Weapon;
        private _shuriken: ThrowableWeapon;

        public constructor(
            @inject(SYMBOLS.Weapon) katana: Weapon,
            @inject(SYMBOLS.ThrowableWeapon) shuriken: ThrowableWeapon
        ) {
            this._katana = katana;
            this._shuriken = shuriken;
        }

        public fight() { return this._katana.hit(); };
        public sneak() { return this._shuriken.throw(); };

    }

    let kernel3 = new Kernel();
    kernel3.bind<Warrior>(SYMBOLS.Warrior).to(Ninja);
    kernel3.bind<Weapon>(SYMBOLS.Weapon).to(Katana);
    kernel3.bind<ThrowableWeapon>(SYMBOLS.ThrowableWeapon).to(Shuriken).inSingletonScope();

    let ninja4 = kernel3.get<Warrior>("Warrior");
    console.log(ninja4);

    // classes

    @injectable()
    class Ninja2 implements Warrior {

        private _katana: Katana;
        private _shuriken: Shuriken;

        public constructor(
            katana: Katana,
            shuriken: Shuriken
        ) {
            this._katana = katana;
            this._shuriken = shuriken;
        }

        public fight() { return this._katana.hit(); };
        public sneak() { return this._shuriken.throw(); };

    }

    let kernel4 = new Kernel();
    kernel4.bind<Ninja>(Ninja).to(Ninja);
    kernel4.bind<Katana>(Katana).to(Katana);
    kernel4.bind<Shuriken>(Shuriken).to(Shuriken).inSingletonScope();

    let ninja5 = kernel4.get<Ninja>(Ninja);
    console.log(ninja5);

}

module property_injection {

    let kernel = new Kernel();

    let TYPES = { Weapon: "Weapon" };

    interface Weapon {
        durability: number;
        use(): void;
    }

    @injectable()
    class Sword implements Weapon {
        public durability: number;
        public constructor() {
            this.durability = 100;
        }
        public use() {
            this.durability = this.durability - 10;
        }
    }

    @injectable()
    class WarHammer implements Weapon {
        public durability: number;
        public constructor() {
            this.durability = 100;
        }
        public use() {
            this.durability = this.durability - 10;
        }
    }

    let propertyMultiInject = makePropertyMultiInjectDecorator(kernel);

    class Warrior1 {
        @propertyMultiInject(TYPES.Weapon)
        public weapons: Weapon[];
    }

    let propertyInject = makePropertyInjectDecorator(kernel);

    interface Service {
        count: number;
        increment(): void;
    }

    @injectable()
    class SomeService implements Service {
        public count: number;
        public constructor() {
            this.count = 0;
        }
        public increment() {
            this.count = this.count + 1;
        }
    }

    class SomeWebComponent {
        @propertyInject("Service")
        private _service: Service;
        public doSomething() {
            let count =  this._service.count;
            this._service.increment();
            return count;
        }
    }

    let propertyInjectNammed = makePropertyInjectNamedDecorator(kernel);

    class Warrior2 {

        @propertyInjectNammed(TYPES.Weapon, "not-throwwable")
        @named("not-throwwable")
        public primaryWeapon: Weapon;

        @propertyInjectNammed(TYPES.Weapon, "throwwable")
        @named("throwwable")
        public secondaryWeapon: Weapon;

    }

    let propertyInjectTagged = makePropertyInjectTaggedDecorator(kernel);

    class Warrior3 {

        @propertyInjectTagged(TYPES.Weapon, "throwwable", false)
        @tagged("throwwable", false)
        public primaryWeapon: Weapon;

        @propertyInjectTagged(TYPES.Weapon, "throwwable", true)
        @tagged("throwwable", true)
        public secondaryWeapon: Weapon;

    }

    kernel.snapshot();
    kernel.restore();

}
