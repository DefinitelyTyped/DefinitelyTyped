/// <reference path="./inversify-inject-decorators.d.ts" />
/// <reference path="../inversify/inversify.d.ts" />

import getDecorators from "inversify-inject-decorators";
import { Kernel, injectable, tagged, named } from "inversify";

module lazyInject {

  let kernel = new Kernel();
  let { lazyInject } = getDecorators(kernel);
  let TYPES = { Weapon: "Weapon" };

  interface Weapon {
      name: string;
      durability: number;
      use(): void;
  }

  @injectable()
  class Sword implements Weapon {
      public name: string;
      public durability: number;
      public constructor() {
          this.durability = 100;
          this.name = "Sword";
      }
      public use() {
          this.durability = this.durability - 10;
      }
  }

  class Warrior {
      @lazyInject(TYPES.Weapon)
      public weapon: Weapon;
  }

  kernel.bind<Weapon>(TYPES.Weapon).to(Sword);

  let warrior = new Warrior();
  console.log(warrior.weapon instanceof Sword); // true

}

module lazyInjectNamed {

  let kernel = new Kernel();
  let { lazyInjectNamed } = getDecorators(kernel);
  let TYPES = { Weapon: "Weapon" };

  interface Weapon {
      name: string;
      durability: number;
      use(): void;
  }

  @injectable()
  class Sword implements Weapon {
      public name: string;
      public durability: number;
      public constructor() {
          this.durability = 100;
          this.name = "Sword";
      }
      public use() {
          this.durability = this.durability - 10;
      }
  }

  @injectable()
  class Shuriken implements Weapon {
      public name: string;
      public durability: number;
      public constructor() {
          this.durability = 100;
          this.name = "Shuriken";
      }
      public use() {
          this.durability = this.durability - 10;
      }
  }

  class Warrior {

      @lazyInjectNamed(TYPES.Weapon, "not-throwwable")
      @named("not-throwwable")
      public primaryWeapon: Weapon;

      @lazyInjectNamed(TYPES.Weapon, "throwwable")
      @named("throwwable")
      public secondaryWeapon: Weapon;

  }

  kernel.bind<Weapon>(TYPES.Weapon).to(Sword).whenTargetNamed("not-throwwable");
  kernel.bind<Weapon>(TYPES.Weapon).to(Shuriken).whenTargetNamed("throwwable");

  let warrior = new Warrior();
  console.log(warrior.primaryWeapon instanceof Sword); // true
  console.log(warrior.primaryWeapon instanceof Shuriken); // true

}

module lazyInjectTagged {

  let kernel = new Kernel();
  let { lazyInjectTagged } = getDecorators(kernel);
  let TYPES = { Weapon: "Weapon" };

  interface Weapon {
      name: string;
      durability: number;
      use(): void;
  }

  @injectable()
  class Sword implements Weapon {
      public name: string;
      public durability: number;
      public constructor() {
          this.durability = 100;
          this.name = "Sword";
      }
      public use() {
          this.durability = this.durability - 10;
      }
  }

  @injectable()
  class Shuriken implements Weapon {
      public name: string;
      public durability: number;
      public constructor() {
          this.durability = 100;
          this.name = "Shuriken";
      }
      public use() {
          this.durability = this.durability - 10;
      }
  }

  class Warrior {

      @lazyInjectTagged(TYPES.Weapon, "throwwable", false)
      @tagged("throwwable", false)
      public primaryWeapon: Weapon;

      @lazyInjectTagged(TYPES.Weapon, "throwwable", true)
      @tagged("throwwable", true)
      public secondaryWeapon: Weapon;

  }

  kernel.bind<Weapon>(TYPES.Weapon).to(Sword).whenTargetTagged("throwwable", false);
  kernel.bind<Weapon>(TYPES.Weapon).to(Shuriken).whenTargetTagged("throwwable", true);

  let warrior = new Warrior();
  console.log(warrior.primaryWeapon instanceof Sword); // true
  console.log(warrior.primaryWeapon instanceof Shuriken); // true

}

module lazyMultiInject {

  let kernel = new Kernel();
  let { lazyMultiInject } = getDecorators(kernel);
  let TYPES = { Weapon: "Weapon" };

  interface Weapon {
      name: string;
      durability: number;
      use(): void;
  }

  @injectable()
  class Sword implements Weapon {
      public name: string;
      public durability: number;
      public constructor() {
          this.durability = 100;
          this.name = "Sword";
      }
      public use() {
          this.durability = this.durability - 10;
      }
  }

  @injectable()
  class Shuriken implements Weapon {
      public name: string;
      public durability: number;
      public constructor() {
          this.durability = 100;
          this.name = "Shuriken";
      }
      public use() {
          this.durability = this.durability - 10;
      }
  }

  class Warrior {

      @lazyMultiInject(TYPES.Weapon)
      public weapons: Weapon[];

  }

  kernel.bind<Weapon>(TYPES.Weapon).to(Sword);
  kernel.bind<Weapon>(TYPES.Weapon).to(Shuriken);

  let warrior = new Warrior();
  console.log(warrior.weapons[0] instanceof Sword); // true
  console.log(warrior.weapons[1] instanceof Shuriken); // true

}
