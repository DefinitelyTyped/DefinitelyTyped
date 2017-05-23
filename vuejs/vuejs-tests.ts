/// <reference path="vuejs.d.ts" />

var test_empty_constructor = new Vue();

class Model {
    str: string
    lst: Array<number>
    num: number
    bool: boolean
}

var test_constructor: VueJSInstance<Model> = new Vue({
    data: new Model()
});

var test_function_contructor: VueJSInstance<Model> = new Vue({
    data: function() {
        return new Model();
    }
});

// Test access by $data
var text = test_constructor.$data.str;
test_constructor.$data.bool = false;

// Test data proxy
// Not work.
//var num = test_function_contructor.num;
//test_function_contructor.num = 10;

var test_instance: VueJSInstance<Model> = new Vue({
    data: {
        str: "Text",
        num: 1,
        lst: [1, 2, 3],
        bool: true
    },
    props: {
        name: String,
        age: {
            type: Number,
            default: 10
        },
        email: {
            type: String,
            required: true,
            twoWay: false,
            validator: function(value: any) {
                return 10;
            }
        }
    },
    methods: {
        onClick: function() {
            // Do something.
        },
        onHover: function(e: Event) {
            // Do something.
        }
    },
    computed: {
        fullName: function() {
            return 'first ' + "last";
        }
    },
    template: '<div></div>',
    created: function() {
        // Do something.
    },
    directives: {
        name: {
            bind: function() {
                var el = this.el;
            },
            update: function() {
                //
            },
            unbind: function() {

            }
        },
        age: function(val: any, old: any) {

        }
    }
});

var name2 = test_instance.$get("name");
test_instance.$set("name", "abc");
test_instance.$add("name2", "abc");
test_instance.$delete("name2");
test_instance.$eval("name | uppercase");
var str = test_instance.$interpolate("Hello, {{name}}");

test_instance.$dispatch("up", 1, 2, 3);
test_instance.$before(".nav", function() {
    console.log("Done");
});

Vue.config.debug = true;
Vue.nextTick(function() {
    console.log("Next Tick");
})

class Model2 {
    name: string
}

var MyComponent = Vue.extend({
    data: function() {
        return new Model2();
    }
});
var instance: VueJSInstance<Model2> = new MyComponent();
var name3 = instance.$data.name;

Vue.component("aComponent", MyComponent);
