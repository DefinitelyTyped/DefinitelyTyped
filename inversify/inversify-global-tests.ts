/// <reference path="inversify.d.ts" />

import * as Proxy from "harmony-proxy";

module global_module_test {

    interface INinja {
        fight(): string;
        sneak(): string;
    }

    interface IKatana {
        hit(): string;
    }

    interface IShuriken {
        throw(): string;
    }

    @inversify.injectable()
    class Katana implements IKatana {
        public hit() {
            return "cut!";
        }
    }

    @inversify.injectable()
    class Shuriken implements IShuriken {
        public throw() {
            return "hit!";
        }
    }

    @inversify.injectable()
    class Ninja implements INinja {

        private _katana: IKatana;
        private _shuriken: IShuriken;

        public constructor(
            @inversify.inject("IKatana") katana: IKatana,
            @inversify.inject("IShuriken") shuriken: IShuriken
        ) {
            this._katana = katana;
            this._shuriken = shuriken;
        }

        public fight() { return this._katana.hit(); };
        public sneak() { return this._shuriken.throw(); };

    }

    let kernel = new inversify.Kernel();
    kernel.bind<INinja>("INinja").to(Ninja);
    kernel.bind<IKatana>("IKatana").to(Katana);
    kernel.bind<IShuriken>("IShuriken").to(Shuriken).inSingletonScope();

    let ninja = kernel.get<INinja>("INinja");
    console.log(ninja);

    // Unbind
    kernel.unbind("INinja");
    kernel.unbindAll();

    // Kernel modules
    let warriors: inversify.IKernelModule = (k: inversify.IKernel) => {
        k.bind<INinja>("INinja").to(Ninja);
    };

    let weapons: inversify.IKernelModule = (k: inversify.IKernel) => {
        k.bind<IKatana>("IKatana").to(Katana);
        k.bind<IShuriken>("IShuriken").to(Shuriken).inSingletonScope();
    };

    kernel = new inversify.Kernel();
    kernel.load(warriors, weapons);
    let ninja2 = kernel.get<INinja>("INinja");
    console.log(ninja2);

    // middleware
    function logger(next: (context: inversify.IContext) => any) {
        return (context: inversify.IContext) => {
            let result = next(context);
            console.log("CONTEXT: ", context);
            console.log("RESULT: ", result);
            return result;
        };
    };

    function visualReporter(next: (context: inversify.IContext) => any) {
        return (context: inversify.IContext) => {
            let result = next(context);
            let _window: any = window;
            let devTools = _window.__inversify_devtools__;
            if (devTools !== undefined) { devTools.log(context, result); }
            return result;
        };
    };

    kernel.applyMiddleware(logger, visualReporter);

    // binding types
    kernel.bind<IKatana>("IKatana").to(Katana);
    kernel.bind<IKatana>("IKatana").toValue(new Katana());

    kernel.bind<inversify.INewable<IKatana>>("IKatana").toConstructor<IKatana>(Katana);

    kernel.bind<inversify.IFactory<IKatana>>("IKatana").toFactory<IKatana>((context) => {
        return () => {
            return kernel.get<IKatana>("IKatana");
        };
    });

    kernel.bind<inversify.IFactory<IKatana>>("IKatana").toAutoFactory<IKatana>("IKatana");

    kernel.bind<inversify.IProvider<IKatana>>("IKatana").toProvider<IKatana>((context) => {
        return () => {
            return new Promise<IKatana>((resolve) => {
                let katana = kernel.get<IKatana>("IKatana");
                resolve(katana);
            });
        };
    });

    kernel.bind<IKatana>("IKatana").to(Katana).onActivation((context: inversify.IContext, katanaToBeInjected: IKatana) => {
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

    interface IWeapon {}
    interface ISamurai {
        katana: IWeapon;
        shuriken: IWeapon;
    }

    @inversify.injectable()
    class Samurai implements ISamurai {
        public katana: IWeapon;
        public shuriken: IWeapon;
        public constructor(
            @inversify.inject("IWeapon") @inversify.tagged("canThrow", false) katana: IWeapon,
            @inversify.inject("IWeapon") @inversify.tagged("canThrow", true) shuriken: IWeapon
        ) {
            this.katana = katana;
            this.shuriken = shuriken;
        }
    }

    kernel.bind<Samurai>("Samurai").to(Samurai);
    kernel.bind<IWeapon>("IWeapon").to(Katana).whenTargetTagged("canThrow", false);
    kernel.bind<IWeapon>("IWeapon").to(Shuriken).whenTargetTagged("canThrow", true);

    let throwable = inversify.tagged("canThrow", true);
    let notThrowable = inversify.tagged("canThrow", false);

    @inversify.injectable()
    class Samurai2 implements ISamurai {
        public katana: IWeapon;
        public shuriken: IWeapon;
        public constructor(
            @inversify.inject("IWeapon") @throwable katana: IWeapon,
            @inversify.inject("IWeapon") @notThrowable shuriken: IWeapon
        ) {
            this.katana = katana;
            this.shuriken = shuriken;
        }
    }

    @inversify.injectable()
    class Samurai3 implements ISamurai {
        public katana: IWeapon;
        public shuriken: IWeapon;
        public constructor(
            @inversify.inject("IWeapon") @inversify.named("strong") katana: IWeapon,
            @inversify.inject("IWeapon") @inversify.named("weak") shuriken: IWeapon
        ) {
            this.katana = katana;
            this.shuriken = shuriken;
        }
    }

    kernel.bind<ISamurai>("ISamurai").to(Samurai3);
    kernel.bind<IWeapon>("IWeapon").to(Katana).whenTargetNamed("strong");
    kernel.bind<IWeapon>("IWeapon").to(Shuriken).whenTargetNamed("weak");

    @inversify.injectable()
    class Samurai4 implements ISamurai {
        public katana: IWeapon;
        public shuriken: IWeapon;
        public constructor(
            @inversify.inject("IWeapon") @inversify.paramName("katana") katana: IWeapon,
            @inversify.inject("IWeapon") @inversify.paramName("shuriken") shuriken: IWeapon
        ) {
            this.katana = katana;
            this.shuriken = shuriken;
        }
    }

    kernel.bind<ISamurai>("ISamurai").to(Samurai4);

    kernel.bind<IWeapon>("IWeapon").to(Katana).when((request: inversify.IRequest) => {
        return request.target.name.equals("katana");
    });

    kernel.bind<IWeapon>("IWeapon").to(Shuriken).when((request: inversify.IRequest) => {
        return request.target.name.equals("shuriken");
    });

    // custom constraints
    let whenParentNamedCanThrowConstraint = (request: inversify.IRequest) => {
        return inversify.namedConstraint("canThrow")(request.parentRequest);
    };

    let whenAnyAncestorIsConstraint = (request: inversify.IRequest) => {
        return inversify.traverseAncerstors(request, inversify.typeConstraint(Ninja));
    };

    let whenAnyAncestorTaggedConstraint = (request: inversify.IRequest) => {
        return inversify.traverseAncerstors(request, inversify.taggedConstraint("canThrow")(true));
    };

    kernel.bind<IWeapon>("IWeapon").to(Shuriken).when(whenParentNamedCanThrowConstraint);
    kernel.bind<IWeapon>("IWeapon").to(Shuriken).when(whenAnyAncestorIsConstraint);
    kernel.bind<IWeapon>("IWeapon").to(Shuriken).when(whenAnyAncestorTaggedConstraint);

    // Constraint helpers
    kernel.bind<IWeapon>("IWeapon").to(Shuriken).whenInjectedInto(Ninja);
    kernel.bind<IWeapon>("IWeapon").to(Shuriken).whenInjectedInto("INinja");
    kernel.bind<IWeapon>("IWeapon").to(Shuriken).whenParentNamed("chinese");
    kernel.bind<IWeapon>("IWeapon").to(Shuriken).whenParentTagged("canThrow", true);
    kernel.bind<IWeapon>("IWeapon").to(Shuriken).whenTargetNamed("strong");
    kernel.bind<IWeapon>("IWeapon").to(Shuriken).whenTargetTagged("canThrow", true);
    kernel.bind<IWeapon>("IWeapon").to(Shuriken).whenAnyAncestorIs(Ninja);
    kernel.bind<IWeapon>("IWeapon").to(Shuriken).whenAnyAncestorIs("INinja");
    kernel.bind<IWeapon>("IWeapon").to(Shuriken).whenAnyAncestorNamed("strong");
    kernel.bind<IWeapon>("IWeapon").to(Shuriken).whenAnyAncestorTagged("canThrow", true);
    kernel.bind<IWeapon>("IWeapon").to(Shuriken).whenAnyAncestorMatches(whenParentNamedCanThrowConstraint);
    kernel.bind<IWeapon>("IWeapon").to(Shuriken).whenNoAncestorIs(Ninja);
    kernel.bind<IWeapon>("IWeapon").to(Shuriken).whenNoAncestorIs("INinja");
    kernel.bind<IWeapon>("IWeapon").to(Shuriken).whenNoAncestorNamed("strong");
    kernel.bind<IWeapon>("IWeapon").to(Shuriken).whenNoAncestorTagged("canThrow", true);
    kernel.bind<IWeapon>("IWeapon").to(Shuriken).whenNoAncestorMatches(whenParentNamedCanThrowConstraint);

    // multi-injection
    @inversify.injectable()
    class Samurai5 implements ISamurai {
        public katana: IWeapon;
        public shuriken: IWeapon;
        public constructor(
            @inversify.multiInject("IWeapon") wpns: IWeapon[]
        ) {
            this.katana = wpns[0];
            this.shuriken = wpns[1];
        }
    }

    // symbols
    let SYMBOLS = {
        IKatana: Symbol("IKatana"),
        INinja: Symbol("INinja"),
        IShuriken: Symbol("IShuriken"),
    };

    @inversify.injectable()
    class Ninja1 implements INinja {

        private _katana: IKatana;
        private _shuriken: IShuriken;

        public constructor(
            @inversify.inject(SYMBOLS.IKatana) katana: IKatana,
            @inversify.inject(SYMBOLS.IShuriken) shuriken: IShuriken
        ) {
            this._katana = katana;
            this._shuriken = shuriken;
        }

        public fight() { return this._katana.hit(); };
        public sneak() { return this._shuriken.throw(); };

    }

    let kernel3 = new inversify.Kernel();
    kernel3.bind<INinja>(SYMBOLS.INinja).to(Ninja);
    kernel3.bind<IKatana>(SYMBOLS.IKatana).to(Katana);
    kernel3.bind<IShuriken>(SYMBOLS.IShuriken).to(Shuriken).inSingletonScope();

    let ninja4 = kernel3.get<INinja>("INinja");
    console.log(ninja4);

    // classes

    @inversify.injectable()
    class Ninja2 implements INinja {

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

    let kernel4 = new inversify.Kernel();
    kernel4.bind<Ninja>(Ninja).to(Ninja);
    kernel4.bind<Katana>(Katana).to(Katana);
    kernel4.bind<Shuriken>(Shuriken).to(Shuriken).inSingletonScope();

    let ninja5 = kernel4.get<INinja>("INinja");
    console.log(ninja5);

}
