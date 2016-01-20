/// <reference path="polymer.d.ts"/>

Polymer({
  is: "my-element",

  properties: {
    prop1: String,
    prop2: {
      type: Boolean,
      value: true,
      readOnly: false,
      reflectToAttribute: true,
      notify: true,
      computed: "__prop2()"
    }
  },

  hostAttributes: {
    "string-attribute": 'Value',
    "boolean-attribute": true,
    tabindex: 0
  },

  ready: function () {
    this.textContent = 'My element!';
    this.$.name.textContent = this.name;
    this.serialize({});
    this.async(function () {
      // access sibling or parent elements here
    });
  },

  __prop2: function () {
    var toLight = document.createElement('div');
    Polymer.dom(this).appendChild(toLight);

    var toLocal = document.createElement('div');
    var beforeNode = Polymer.dom(this.root).childNodes[0];
    Polymer.dom(this.root).insertBefore(toLocal, beforeNode);

    var allSpans = Polymer.dom(this).querySelectorAll('span');
  }
});

var MyElement = Polymer.Class(<polymer.Base>{
  is: 'my-element',

  created: function () {
    this.textContent = 'My element!';
  }

});

document.registerElement('my-element', MyElement);

// Equivalent:
var el1 = new MyElement();
var el2 = document.createElement('my-element');

// ES6 class syntax

// implicit implementation
class MyElement2 {
  is: string;

  beforeRegister() {
    this.is = "my-element2";
  }
}

Polymer(MyElement2);

// explicit implementation
class MyElement3 implements polymer.Base {
  is: string;

  beforeRegister() {
    this.is = "my-element3";
  }
}

Polymer(MyElement3);
