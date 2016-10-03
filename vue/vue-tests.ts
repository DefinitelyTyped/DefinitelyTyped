/// <reference path="vue.d.ts" />

namespace TestConfig {
  "use strict";

  Vue.config.debug = true;
  Vue.config.delimiters = ["${", "}"];
  Vue.config.unsafeDelimiters = ['{!!', '!!}'];
  Vue.config.silent = true;
  Vue.config.async = false;
  Vue.config.devtools = true;
}

namespace TestGlobalAPI {
  "use strict";

  var AppConstructor = Vue.extend({});
  var extendedApp = new AppConstructor();
  Vue.nextTick(() => {});
  Vue.set({}, "key", "value");
  Vue.delete({}, "key");
  Vue.directive("directive", {
    bind: function() {},
    update: function(val: any, oldVal: any) {},
    unbind: function() {},
    params: ['a'],
    paramWatchers: {
      a: function(val: any, oldVal: any) {}
    },
    twoWay: true,
    acceptStatement: true,
    priority: 1,
    terminal: true,
    count: 30
  });
  Vue.directive("my-directive", function() {
    const d = this as vuejs.Directive;
    d.el;
    d.vm;
    d.expression;
    d.arg;
    d.name;
    d.modifiers;
    d.descriptor;
    d.params;
  });
  var myDirective = Vue.directive("my-directive");
  var elementDirective = Vue.elementDirective("element-directive");
  Vue.elementDirective("element-directive", elementDirective);
  Vue.elementDirective("element-directive", {
    bind: function() {},
    unbind: function() {}
  });
  var filter = Vue.filter("filter");
  Vue.filter("filter", filter);
  Vue.filter("filter", function(val: any) {
    return val;
  });
  Vue.filter("filter", {
    read: function(val: any) {},
    write: function(val: any, oldVal: any) {}
  });
  var Component = Vue.component("component");
  Vue.component("component", Component);
  Vue.component("component", {
    data: function() {
      return { d: 0 }
    },
    methods: {
      action: function() {}
    },
    props: ["a", "b"],
    computed: {
      a: function() { return this.d; },
      b: {
        get: function() { return this.a; },
        set: function(val: number) { this.d = val; }
      }
    }
  });
  Vue.component("component", {
    props: {
      a: [String, Number],
      b: {
        type: [Number, Function],
        required: true
      }
    },
    init: function() {}
  });
  Vue.component("component", {
    activate: function(callback: Function) {
      callback();
    }
  });
  var transition = Vue.transition("transition");
  Vue.transition("transition", transition);
  Vue.transition("transition", {
    css: false,
    stagger: function(index) {
      return index;
    },
    beforeEnter: function(el) {
      el.textContent = 'beforeEnter';
    },
    enter: function(el, done) {
      el.textContent = 'enter';
      setTimeout(function() {
        done();
      }, 1000);
    },
    afterEnter: function(el) {
      el.textContent = 'afterEnter';
    },
    enterCancelled: function(el) {
      el.textContent = 'enterCancelled';
    },
    beforeLeave: function (el) {
      el.textContent = 'beforeLeave';
    },
    leave: function (el, done) {
      el.textContent = 'leave';
      done();
    },
    afterLeave: function (el) {
      el.textContent = 'afterLeave';
    },
    leaveCancelled: function (el) {
      el.textContent = 'leaveCancelled';
    }
  });
  var myPartial: string = Vue.partial("my-partial", "<div>Hello</div>");
  myPartial = Vue.partial("my-partial");
  Vue.use(() => {}, {});
  Vue.use({install: () => {}, option: () => {}});
  Vue.mixin({ready() {}});
}

namespace TestInstanceProperty {
  "use strict";

  var vm = new Vue({el: '#app'});
  var data: any = vm.$data;
  var el: HTMLElement = vm.$el;
  var options: any = vm.$options;
  var parent: any = vm.$parent;
  var root: any = vm.$root;
  var children: any[] = vm.$children;
  var refs: any = vm.$refs;
  var els: any = vm.$els;
}

namespace TestInscanceMethods {
  "use strict";

  var vm = new Vue({el: '#app'});
  vm.$watch('a.b.c', function(newVal: string, oldVal: number) {});
  vm.$watch(function() {return this.a + this.b}, function(newVal: string, oldVal: string) {});
  var unwatch = vm.$watch('a', (value: any) => {});
  unwatch();
  vm.$watch('someObject', (value: any) => {}, {deep: true});
  vm.$watch('a', (value: any) => {}, {immidiate: true});
  vm.$get('a.b');
  vm.$set('a.b', 2);
  vm.$delete('a');
  var s: string = vm.$eval('msg | uppercase');
  s = vm.$interpolate('{{msg}} world!');
  vm.$log();
  vm.$log('item');

  vm
    .$on('test', (msg: any) => {})
    .$once('testOnce', (msg: any) => {})
    .$off("event", () => {})
    .$emit("event", 1, 2)
    .$dispatch("event", 1, 2, 3)
    .$broadcast("event", 1, 2, 3, 4)

    .$appendTo(document.createElement("div"), () => {})
    .$before('#app', () => {})
    .$after(document.getElementById('app'))
    .$remove(() => {})
    .$nextTick(() => {});

  vm
    .$mount('#app')
    .$destroy(false);
}

namespace TestVueUtil {
  "use strict";

  var _ = Vue.util;
  var target = document.createElement('div');
  var child = document.createElement('div');
  var parent = document.createElement('div');
  var a: any[];
  var b: boolean;
  var f: Function;
  var n: number;
  var s: string;
  var o: any;
  o = _.checkComponentAttr(target, {});
  _.warn('oops', new Error());
  b = _.inDoc(target);
  s = _.getAttr(target, 'v-test');
  _.before(target, child);
  _.after(target, child);
  _.remove(target);
  _.prepend(target, parent);
  _.replace(child, target);
  _.on(target, 'click', () => {});
  _.off(target, 'click', () => {});
  _.removeClass(target, 'header');
  _.addClass(target, 'header');
  _.nextTick(() => {}, {});
  b = _.isLiteral('123');
  s = _._toString('hi');
  var ns: number | string = _.toNumber('12');
  s = _.stripQuotes('"123"');
  s = _.camelize('abc');
  s = _.hyphenate('whatsUp');
  s = _.classify('abc');
  f = _.bind(() => {}, {});
  a = _.toAarray(document.getElementsByClassName('target'));
  o = _.extend({}, {a: 1, b: 2});
  b = _.isObject({});
  b = _.isPlainObject({});
  b = _.isArray([]);
  _.def({}, 'test', 123);
  _.def({}, 'test2', 123, true);
  f = _.debounce(() => {}, 100);
  b = _.looseEqual(1, '1');
}

namespace TestExplicitExtend {
  "use strict";

  export class Application extends Vue {
    text: string;
    constructor() {
      super();
      this._init({
        // data is necessary to always write in init()
        data: {
          text: "hello world."
        },
        methods: {
          action: this.action
        },
        props: {
            propA: Object,
            propB: {
                type: Application,
                default: () => new Application(),
                twoWay: true,
                coerce(value: any) {}
            }
        }
      });
    }
    action(): void {
      console.log("action");
      this.$on("event", (value: any) => {}).anotherAction();
    }
    anotherAction(): void {
      this.$emit("event");
    }
    $els: {
      target: HTMLDivElement;
    }
  }

  var app = new Application();
  app.$mount("#main").$destroy();
}
