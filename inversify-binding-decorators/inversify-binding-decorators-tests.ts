/// <reference path="./inversify-binding-decorators.d.ts" />

import { inject, Kernel } from "inversify";
import { autoProvide, makeProvideDecorator, makeFluentProvideDecorator } from "inversify-binding-decorators";

module decorator {
    let kernel = new Kernel();
    let provide = makeProvideDecorator(kernel);

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

    let TYPE = {
        IKatana: "IKatana",
        INinja: "INinja",
        IShuriken: "IShuriken"
    };

    @provide(TYPE.IKatana)
    class Katana implements IKatana {
        public hit() {
            return "cut!";
        }
    }

    @provide(TYPE.IShuriken)
    class Shuriken implements IShuriken {
        public throw() {
            return "hit!";
        }
    }

    @provide(TYPE.INinja)
    class Ninja implements INinja {

        private _katana: IKatana;
        private _shuriken: IShuriken;

        public constructor(
            @inject("IKatana") katana: IKatana,
            @inject("IShuriken") shuriken: IShuriken
        ) {
            this._katana = katana;
            this._shuriken = shuriken;
        }

        public fight() { return this._katana.hit(); };
        public sneak() { return this._shuriken.throw(); };

    }

    let ninja = kernel.get<INinja>(TYPE.INinja);
    console.log(ninja);

}

module fluent_decorator {
    let kernel = new Kernel();
    let provide = makeFluentProvideDecorator(kernel);

    let provideSingleton = function(identifier: string) {
        return provide(identifier).inSingletonScope().done();
    };

    let provideTransient = function(identifier: string) {
        return provide(identifier).done();
    };

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

    let TYPE = {
        IKatana: "IKatana",
        INinja: "INinja",
        IShuriken: "IShuriken"
    };

    @provideSingleton(TYPE.IKatana)
    class Katana implements IKatana {
        private _mark: any;
        public constructor() {
            this._mark = Math.random();
        }
        public hit() {
            return "cut! " + this._mark;
        }
    }

    @provideTransient(TYPE.IShuriken)
    class Shuriken implements IShuriken {
        private _mark: any;
        public constructor() {
            this._mark = Math.random();
        }
        public throw() {
            return "hit! " + this._mark;
        }
    }

    @provideTransient(TYPE.INinja)
    class Ninja implements INinja {

        private _katana: IKatana;
        private _shuriken: IShuriken;

        public constructor(
            @inject("IKatana") katana: IKatana,
            @inject("IShuriken") shuriken: IShuriken
        ) {
            this._katana = katana;
            this._shuriken = shuriken;
        }

        public fight() { return this._katana.hit(); };
        public sneak() { return this._shuriken.throw(); };

    }

    let ninja = kernel.get<INinja>(TYPE.INinja);
    console.log(ninja);

}

module auto_provide {

    let warriors = {
        Ninja: class Ninja {},
        Samurai: class Samurai {}
    };

    let weapons = {
        Katana: class Katana {},
        Shuriken: class Shuriken {},
    };

    let kernel = new Kernel();
    autoProvide(kernel, warriors, weapons);

}
