/// <reference path="inversify.d.ts" />

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

    class Katana implements IKatana {
        public hit() {
            return "cut!";
        }
    }

    class Shuriken implements IShuriken {
        public throw() {
            return "hit!";
        }
    }

    @inversify.inject("IKatana", "IShuriken")
    class Ninja implements INinja {

        private _katana: IKatana;
        private _shuriken: IShuriken;

        public constructor(katana: IKatana, shuriken: IShuriken) {
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
    let module: inversify.IKernelModule = (k: inversify.IKernel) => {
        k.bind<INinja>("INinja").to(Ninja);
        k.bind<IKatana>("IKatana").to(Katana).inTransientScope();
        k.bind<IShuriken>("IShuriken").to(Shuriken).inSingletonScope();
    };

    let options: inversify.IKernelOptions = {
        middleware: [],
        modules: [module]
    };

    kernel = new inversify.Kernel(options);
    let ninja2 = kernel.get<INinja>("INinja");
    console.log(ninja2);

    // binding types
    kernel.bind<IKatana>("IKatana").to(Katana);
    kernel.bind<IKatana>("IKatana").toValue(new Katana());

    kernel.bind<inversify.INewable<IKatana>>("IKatana").toConstructor<IKatana>(Katana);

    kernel.bind<inversify.IFactory<IKatana>>("IKatana").toFactory<IKatana>((context) => {
        return () => {
            return kernel.get<IKatana>("IKatana");
        };
    });

    kernel.bind<inversify.IFactory<IKatana>>("IKatana").toAutoFactory<IKatana>();

    kernel.bind<inversify.IProvider<IKatana>>("IKatana").toProvider<IKatana>((context) => {
        return () => {
            return new Promise<IKatana>((resolve) => {
                let katana = kernel.get<IKatana>("IKatana");
                resolve(katana);
            });
        };
    });

    kernel.bind<IKatana>("IKatana").to(Katana).proxy((katanaToBeInjected: IKatana) => {
        // BLOCK http://stackoverflow.com/questions/35906938/how-to-enable-harmony-proxies-in-gulp-mocha
        /*
        let handler = {
            apply: function(target, thisArgument, argumentsList) {
                console.log(`Starting: ${performance.now()}`);
                let result = target.apply(thisArgument, argumentsList);
                console.log(`Finished: ${performance.now()}`);
                return result;
            }
        };
        return new Proxy(katanaToBeInjected, handler);
        */
        return katanaToBeInjected;
    });

    interface IWeapon {}
    interface ISamurai {
        katana: IWeapon;
        shuriken: IWeapon;
    }

    @inversify.inject("IWeapon", "IWeapon")
    class Samurai implements ISamurai {
        public katana: IWeapon;
        public shuriken: IWeapon;
        public constructor(
            @inversify.tagged("canThrow", false) katana: IWeapon,
            @inversify.tagged("canThrow", true) shuriken: IWeapon
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

    @inversify.inject("IWeapon", "IWeapon")
    class Samurai2 implements ISamurai {
        public katana: IWeapon;
        public shuriken: IWeapon;
        public constructor(
            @throwable("canThrow", false) katana: IWeapon,
            @notThrowable("canThrow", true) shuriken: IWeapon
        ) {
            this.katana = katana;
            this.shuriken = shuriken;
        }
    }

    @inversify.inject("IWeapon", "IWeapon")
    class Samurai3 implements ISamurai {
        public katana: IWeapon;
        public shuriken: IWeapon;
        public constructor(
            @inversify.named("strong") katana: IWeapon,
            @inversify.named("weak") shuriken: IWeapon
        ) {
            this.katana = katana;
            this.shuriken = shuriken;
        }
    }

    kernel.bind<ISamurai>("ISamurai").to(Samurai3);
    kernel.bind<IWeapon>("IWeapon").to(Katana).whenTargetNamed("strong");
    kernel.bind<IWeapon>("IWeapon").to(Shuriken).whenTargetNamed("weak");

    @inversify.inject("IWeapon", "IWeapon")
    @inversify.paramNames("katana", "shuriken")
    class Samurai4 implements ISamurai {
        public katana: IWeapon;
        public shuriken: IWeapon;
        public constructor(
            katana: IWeapon,
            shuriken: IWeapon
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

}
