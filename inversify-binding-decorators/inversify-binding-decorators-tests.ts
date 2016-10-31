/// <reference path="./inversify-binding-decorators.d.ts" />

import { inject, Kernel } from "inversify";
import { autoProvide, makeProvideDecorator, makeFluentProvideDecorator } from "inversify-binding-decorators";

module decorator {

    let kernel = new Kernel();
    let provide = makeProvideDecorator(kernel);

    interface Warrior {
        fight(): string;
        sneak(): string;
    }

    interface Weapon {
        hit(): string;
    }

    interface ThrowableWeapon {
        throw(): string;
    }

    let TYPE = {
        ThrowableWeapon: "ThrowableWeapon",
        Warrior: "Warrior",
        Weapon: "Weapon"
    };

    @provide(TYPE.Weapon)
    class Katana implements Weapon {
        public hit() {
            return "cut!";
        }
    }

    @provide(TYPE.ThrowableWeapon)
    class Shuriken implements ThrowableWeapon {
        public throw() {
            return "hit!";
        }
    }

    @provide(TYPE.Warrior)
    class Ninja implements Warrior {

        private _katana: Weapon;
        private _shuriken: ThrowableWeapon;

        public constructor(
            @inject(TYPE.Weapon) katana: Weapon,
            @inject(TYPE.ThrowableWeapon) shuriken: ThrowableWeapon
        ) {
            this._katana = katana;
            this._shuriken = shuriken;
        }

        public fight() { return this._katana.hit(); };
        public sneak() { return this._shuriken.throw(); };

    }

    let ninja = kernel.get<Warrior>(TYPE.Warrior);
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

    interface Warrior {
        fight(): string;
        sneak(): string;
    }

    interface Weapon {
        hit(): string;
    }

    interface ThrowableWeapon {
        throw(): string;
    }

    let TYPE = {
        ThrowableWeapon: "ThrowableWeapon",
        Warrior: "Warrior",
        Weapon: "Weapon"
    };

    @provideSingleton(TYPE.Weapon)
    class Katana implements Weapon {
        private _mark: any;
        public constructor() {
            this._mark = Math.random();
        }
        public hit() {
            return "cut! " + this._mark;
        }
    }

    @provideTransient(TYPE.ThrowableWeapon)
    class Shuriken implements ThrowableWeapon {
        private _mark: any;
        public constructor() {
            this._mark = Math.random();
        }
        public throw() {
            return "hit! " + this._mark;
        }
    }

    @provideTransient(TYPE.Warrior)
    class Ninja implements Warrior {

        private _katana: Weapon;
        private _shuriken: ThrowableWeapon;

        public constructor(
            @inject(TYPE.Weapon) katana: Weapon,
            @inject(TYPE.ThrowableWeapon) shuriken: ThrowableWeapon
        ) {
            this._katana = katana;
            this._shuriken = shuriken;
        }

        public fight() { return this._katana.hit(); };
        public sneak() { return this._shuriken.throw(); };

    }

    let ninja = kernel.get<Warrior>(TYPE.Warrior);
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
