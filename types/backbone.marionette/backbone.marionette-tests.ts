import * as Marionette from 'backbone.marionette';
import * as Backbone from 'backbone';

class DestroyWarn extends Marionette.Behavior {
    // you can set default options
    // just like you can in your Backbone Models
    // they will be overriden if you pass in an option with the same key
    defaults = {
        "message": "you are destroying!"
    };

    // behaviors have events that are bound to the views DOM
    events = {
        "click @ui.destroy": "warnBeforeDestroy"
    };

    warnBeforeDestroy() {
        alert(this.options.message);
        // every Behavior has a hook into the
        // view that it is attached to
        this.view.destroy();
    }
}


Marionette.Behaviors.getBehaviorClass = (options, key) => {
    if (key === "DestroyWarn")
        return DestroyWarn;

    return undefined;
};

class MyRouter extends Marionette.AppRouter {
    // "someMethod" must exist at controller.someMethod
    appRoutes = {
        "some/route": "someMethod"
    };

    /* standard routes can be mixed with appRoutes/Controllers above */
    routes = {
        "some/otherRoute": "someOtherMethod"
    };

    someOtherMethod() {
        // do something here.
    }

}

class MyApplication extends Marionette.Application {
    initialize(options?: any) {
        console.log("initializing application");
        this.layoutView = new AppLayoutView();
    }

    layoutView: AppLayoutView;
    mainRegion: Marionette.Region;

    onStart() {
        this.mainRegion = new Marionette.Region({ el: '#main' });
        this.layoutView.addRegion('main', this.mainRegion);
        this.layoutView.render();
        this.layoutView.showChildView('main', new MyView(new MyModel));
        let view: Backbone.View<Backbone.Model> = this.layoutView.getChildView('main');
        let regions: {[key: string]: Marionette.Region} = this.layoutView.getRegions();
        let prefix: string = this.layoutView.childViewEventPrefix;
        let region: Marionette.Region = this.layoutView.removeRegion('main');
        let layout: Marionette.View<Backbone.Model> = this.layoutView.destroy();
    }
}

class AppLayoutView extends Marionette.View<Backbone.Model> {
    constructor() {
        super({ el: 'body' });
    }

    template() {
        return "<div id='main'></div>";
    }

    initialize(options?: any) {
        console.log("initializing layoutview");
    }
}

class MyModel extends Backbone.Model {

    constructor(options?: any) {
        super(options);
    }

    getName(): string {
        return this.get('name');
    }

    setName(value: string) {
        this.set(value);
    }
}

class MyBaseView extends Marionette.View<MyModel> {

    constructor() {
    super();
    this.getOption<string>('foo');
    this.triggers = {
        'click .foo': 'bar'
    };
    }

}

class MyView extends Marionette.View<MyModel> {
    behaviors: any;

    constructor(model: MyModel) {
        super({ model: model });

        this.ui = {
            destroy: '.destroy'
        };

        this.behaviors = {
            DestroyWarn: {
                message: 'hello'
            }
        };
    }

    template() {
        return '<h1>' + this.model.getName() + '</h1> <button class="destroy">Destroy Me</button>';
    }
};


class MainRegion extends Marionette.Region {
    constructor() {
        super();
        this.el = '#main';
    }
}


class MyObject extends Marionette.Object {
    name: string;
    options: any;

    constructor() {
        super();
        this.name = 'Adam';

        this.options = {
            name: 'Foo'
        };

        this.on("before:destroy", () => {
            console.log("before:destroy");
        });
    }

    onBeforeDestroy(arg: any) {
        console.log("in onBeforeDestroy with arg " + arg);
    }
}

class MyRegion extends Marionette.Region {
    constructor() {
        super();
        this.el = '#main-nav';
    }
}

class MyJQueryRegion extends Marionette.Region {
    constructor() {
        super();
        this.el = $('#main-nav');
    }
}

class MyHtmlElRegion extends Marionette.Region {
    constructor() {
        super();
        this.el = document.querySelector("body");
    }
}

class MyCollectionView extends Marionette.CollectionView<MyModel, MyView> {
    constructor() {
        super();
        this.childView = MyView;
        this.childViewEvents = {
            render: function () {
                console.log("a childView has been rendered");
            }
        };

        this.childViewOptions = function (model: any, index: any): any {
            // do some calculations based on the model
            return {
                foo: "bar",
                childIndex: index
            }
        };

        this.childViewOptions = {
            foo: "bar"
        };

        this.childViewEventPrefix = "some:prefix";

        this.on('some:prefix:render', function () {

        });

    }
}

var app: MyApplication;

function ApplicationTests() {
    app = new MyApplication();

    app.start();

    var view = new MyView(new MyModel());
    app.mainRegion.show(view);
}

function ObjectTests() {
    var obj = new MyObject();
    console.log(obj.getOption('name'));
    obj.destroy("goodbye");
}

function RegionManagerTests() {
    var rm = new Marionette.RegionManager();
    rm.addRegions({
        contentRegion: {
            el: '#content',
            regionClass: MainRegion
        },

        navigationRegion: {
            el: '#navigation',
            regionClass: MainRegion,

            // Options passed to instance of `MyOtherRegion` for
            // the `navigationRegion` on `App`
            navigationOption: 42,
            anotherNavigationOption: 'foo'
        },

        footerRegion: {
            regionClass: MainRegion,
            someOption: 42,
            someValue: 'value'
        }
    });
}

function RegionTests() {
    var myView: Marionette.View<MyModel> = new MyView(new MyModel());

    // render and display the view
    app.mainRegion.show(myView);

    // empties the current view
    app.mainRegion.empty();

    myView = new MyView(new MyModel());
    app.mainRegion.show(myView, { preventDestroy: true, forceShow: true, triggerAttach: true, triggerBeforeAttach: false });

    var hasView: boolean = app.mainRegion.hasView();

    app.mainRegion.reset();

    Marionette.Region.prototype.attachHtml = function (view: any): void {
        this.$el.empty().append(view.el);
    }

    myView = new Marionette.View<MyModel>({
        el: $("#existing-view-stuff")
    });

    app.mainRegion.attachView(myView);

    app.mainRegion.on("empty", function (view: any, region: any, options: any) {
        // manipulate the `view` or do something extra
        // with the `region`
        // you also have access to the `options` that were passed to the Region.show call
    });

}

function ViewTests() {
    const v = new MyView(new MyModel());
    const isDestroyed: boolean = v.isDestroyed();
    const isRendered: boolean = v.isRendered();
    const isAttached: boolean = v.isAttached();
    const vv: Marionette.View<Backbone.Model> = v.delegateEntityEvents();
}

function CollectionViewTests() {
    var cv = new MyCollectionView();
    cv.collection.add(new MyModel());
    app.mainRegion.attachView(cv);
    cv.addEmptyView(new MyModel, MyView);
    cv.proxyChildEvents(new MyView(new MyModel));
    let children: Backbone.ChildViewContainer<Marionette.View<Backbone.Model>> = cv.destroyChildren();
    let view: Marionette.CollectionView<Backbone.Model, Marionette.View<Backbone.Model>> = cv.destroy();
}

class MyController extends Marionette.Controller {

}

function AppRouterTests() {
    var myController = new MyController();
    var router = new MyRouter();

    router.appRoute("/foo", "fooThat");

    router.processAppRoutes(myController, {
        "foo": "doFoo",
        "bar/:id": "doBar"
    });

}

