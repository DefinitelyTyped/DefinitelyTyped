import "alter-polymer";
class Test extends Polymer.Element {
}

declare const Behavior1: {
  prop1?: any;
};

declare const Behavior2: {
  prop2?: any;
};

declare const Behavior3: {
  prop3?: any;
};

declare const Behavior4: {
  prop4?: any;
};

export class PolymerSample1 extends Polymer.mixinBehaviors([ Behavior1, Behavior2, Behavior3, Behavior4 ], Polymer.Element) {
  constructor() {
    super();
    console.log(this.prop1, this.prop2, this.prop3, this.prop4);
  }
}

export class PolymerSample2 extends Polymer.mixinBehaviors([ Behavior1, Behavior2, Behavior3 ], Polymer.Element) {
  constructor() {
    super();
    console.log(this.prop1, this.prop2, this.prop3);
  }
}

export class PolymerSample3 extends Polymer.mixinBehaviors([ Behavior1, Behavior2 ], Polymer.Element) {
  constructor() {
    super();
    console.log(this.prop1, this.prop2);
  }
}

export class PolymerSample4 extends Polymer.mixinBehaviors([ Behavior1 ], Polymer.Element) {
  constructor() {
    super();
    console.log(this.prop1);
  }
}
