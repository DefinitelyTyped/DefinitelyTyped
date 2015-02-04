/// <reference path="di-lite.d.ts" />

interface Dependency {
    dependencies?: string;
}

function doTest(test: (ctx: any, ...obj: Dependency[]) => void) {
    // create di context
    var ctx = di.createContext(),
        A: Dependency = () => {
            this.dependencies = "b, c";
        },
        B: Dependency = () => {
            this.dependencies = "c";
        },
        C: Dependency = () => {};

    // register a class with an unique name
    ctx.register("a", A);
    ctx.register("b", B);
    ctx.register("c", C);

    test(ctx, A, B, C);
}

module BasicWiring {
    doTest(ctx => {
        // initialize di container so all singleton(default) objects will be wired at this stage
        ctx.initialize();

        var instanceOfA = ctx.get("a");
        instanceOfA.b === ctx.get("b"); // true
        instanceOfA.c === ctx.get("c"); // true

        var instanceOfB = ctx.get("b");
        instanceOfB.c === ctx.get("c"); // true
    });
}

module WiringWithAssignment {
    doTest((ctx, A) => {
        A.dependencies = "bee=b, c"; // mix explicit and implicit assignment

        ctx.initialize();

        var instanceOfA = ctx.get("a");
        instanceOfA.bee === ctx.get("b"); // true - explicit assignment
        instanceOfA.c === ctx.get("c"); // true - implicit assignment
    });
}

module PassiveDependencyResolution {
    doTest((ctx, A) => {
        ctx.register("a", A);
        ctx.get("a"); // this triggers the dependency resolution for "a" alone
        ctx.initialize();
    });
}

module PrototypeStrategy {
    doTest((ctx, A) => {
        ctx.register("prototype", A).strategy(di.strategy.proto);
        ctx.get("prototype") === ctx.get("prototype"); // false
        ctx.create("prototype", 100); // create can be used if you want to explicitly pass in a new parameter
    });
}

module PassingConstructorArguments {
    class ProfileView { }

    doTest(ctx => {
        ctx.register("str", String, "hello world"); // signle simple argument
        ctx.register("profileView", ProfileView, { el: "#profile_div" }); // signle object literal argument
        ctx.register("array", Array, ["Saab", "Volvo", "BMW"]); // multiple argument is passed in using an array
    });
}

module CyclicalDependency {
    doTest((ctx, A, B) => {
        A.dependencies = "b";
        B.dependencies = "a";

        ctx.register("a", A);
        ctx.register("b", B);

        ctx.initialize();

        ctx.get("a").b === ctx.get("b"); // true
        ctx.get("b").a === ctx.get("a"); // true
        ctx.get("a").b.a === ctx.get("a"); // true
        ctx.get("b").a.b === ctx.get("b"); // true
    });
}

module FunctionalObject {
    doTest(ctx => {
        var FuncObject = (spec: any) => {
                var that = {};
                return that;
            },
            spec: any = [];

        ctx.register("funcObjSingleton", FuncObject, spec).factory(di.factory.func);

        // function chaining can be used to customize your object registration
        ctx.register("funcObjProto", FuncObject, spec)
            .strategy(di.strategy.proto)
            .factory(di.factory.func);

        ctx.initialize();

        ctx.get("funcObjSingleton"); // will return you a signleton instance of FuncObject
        ctx.get("funcObjProto"); // will return you a new instance of FuncObject each time
    });
}

module RuntimeDependenciesOverride {
    doTest((ctx, A) => {
        ctx.register("a", A)
            .dependencies("bee=b"); // dependencies specified here will take precedence
        ctx.get("a").bee === ctx.get("b"); // true
    });
}

module CreateYourOwn {
    class Backbone {
        history: History = new History();
    }

    class History {
        start() {}
    }

    doTest(ctx => {
        ctx.register("history").object(new Backbone().history);
        ctx.get("history").start(); // you can use it since it is already created and initialized
        ctx.initialize(); // initialize the rest of the objects
    });
}
