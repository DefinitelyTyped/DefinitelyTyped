import * as JQuery from 'jquery';
import * as Marionette from 'backbone.marionette';
import * as Backbone from 'backbone';

class DestroyWarn extends Marionette.Behavior {
    // you can set default options
    // just like you can in your Backbone Models
    // they will be overridden if you pass in an option with the same key
    defaults = {
        message: 'you are destroying!'
    };

    ui = {
        destroy: '.foo'
    };

    // behaviors have events that are bound to the views DOM
    events = {
        'click @ui.destroy': 'warnBeforeDestroy'
    };

    warnBeforeDestroy() {
        alert(this.options.message);
        // every Behavior has a hook into the
        // view that it is attached to
        this.view.destroy();
    }
}

Marionette.Behaviors.getBehaviorClass = (options, key) => {
    if (key === 'DestroyWarn')
        return DestroyWarn;

    return undefined;
};

class MyRouter extends Marionette.AppRouter {
    // 'someMethod' must exist at controller.someMethod
    appRoutes = {
        'some/route': 'someMethod'
    };

    /* standard routes can be mixed with appRoutes/Controllers above */
    routes = {
        'some/otherRoute': 'someOtherMethod'
    };

    someOtherMethod() {
        // do something here.
    }
}

class MyApplication extends Marionette.Application {
    initialize(options?: any) {
        console.log('initializing application');
        this.layoutView = new AppLayoutView();
    }

    layoutView: AppLayoutView;
    mainRegion: Marionette.Region;

    onStart() {
        this.mainRegion = new Marionette.Region({ el: '#main' });
        this.layoutView.addRegion('main', this.mainRegion);
        this.layoutView.render();
        this.layoutView.showChildView('main', new MyView(new MyModel()));
        const view: Backbone.View<Backbone.Model> = this.layoutView.getChildView('main');
        const regions: {[key: string]: Marionette.Region} = this.layoutView.getRegions();
        const region: Marionette.Region = this.layoutView.removeRegion('main');
        const layout: Marionette.View<Backbone.Model> = this.layoutView.destroy();

        if (typeof this.layoutView.childViewEventPrefix === 'string') {
            this.layoutView.childViewEventPrefix;
        }
    }
}

class AppLayoutView extends Marionette.View<Backbone.Model> {
    constructor() {
        super({ el: 'body' });
    }

    template() {
        return '<div id="main"></div>';
    }

    initialize(options?: any) {
        console.log('initializing layoutview');
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
        this.getOption('foo');
        this.triggers = {
            'click .foo': 'bar'
        };
    }
}

class MyView extends Marionette.View<MyModel> {
    behaviors: any = {
        DestroyWarn: {
            message: 'hello'
        }
    };

    constructor(model: MyModel) {
        super({ model });

        this.ui = {
            destroy: '.destroy'
        };
    }

    template() {
        return `<h1>${this.model.getName()}</h1> <button class="destroy">Destroy Me</button>`;
    }
}

class MyOtherView extends MyView {
    private readonly foo: string;

    constructor(model: MyModel) {
        super(model);
        this.foo = 'bar';
    }
}

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

        this.on('before:destroy', () => {
            console.log('before:destroy');
        });
    }

    onBeforeDestroy(arg: any) {
        console.log('in onBeforeDestroy with arg ' + arg);
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
        this.el = document.querySelector('body');
    }
}

type MyCollectionViewChildViews = MyView | MyOtherView;

class MyCollectionView extends Marionette.CollectionView<MyModel, MyCollectionViewChildViews> {
    constructor(options?: Marionette.CollectionViewOptions<MyModel>) {
        super(options);

        this.childView = (model: MyModel) => {
            if (model.get('isFoo')) {
                return MyView;
            }

            return MyOtherView;
        };

        this.childView = MyView;

        this.childViewEvents = {
            render() {
                console.log('a childView has been rendered');
            }
        };

        this.childViewOptions = (model: any, index: any): any => {
            // do some calculations based on the model
            return {
                id: 'bar'
            };
        };

        this.childViewOptions = {
            id: 'bar'
        };

        this.childViewEventPrefix = 'some:prefix';

        this.on('some:prefix:render', () => {
        });
    }
}

let app: MyApplication;

function ApplicationTests() {
    app = new MyApplication();

    app.start();

    const view = new MyView(new MyModel());
    app.mainRegion.show(view);
}

function ObjectTests() {
    const obj = new MyObject();
    console.log(obj.getOption('name'));
    obj.destroy('goodbye');
}

function RegionTests() {
    let myView: Marionette.View<MyModel> = new MyView(new MyModel());

    // render and display the view
    app.mainRegion.show(myView);

    // empties the current view
    app.mainRegion.empty();

    myView = new MyView(new MyModel());
    app.mainRegion.show(myView, { preventDestroy: true });

    const hasView: boolean = app.mainRegion.hasView();

    app.mainRegion.reset();

    Marionette.Region.prototype.attachHtml = (view: any): void => {
        this.$el.empty().append(view.el);
    };

    myView = new Marionette.View<MyModel>({
        el: $('#existing-view-stuff')
    });

    app.mainRegion.show(myView);

    app.mainRegion.on('empty', (view: any, region: any, options: any) => {
        // manipulate the `view` or do something extra
        // with the `region`
        // you also have access to the `options` that were passed to the Region.show call
    });
}

function BehaviorTest() {
    const b = new DestroyWarn();
    const uiHandle: JQuery = b.getUI('destroy');
}

function ViewTests() {
    const v = new MyView(new MyModel());
    const isDestroyed: boolean = v.isDestroyed();
    const isRendered: boolean = v.isRendered();
    const isAttached: boolean = v.isAttached();
    const vv: Marionette.View<Backbone.Model> = v.delegateEntityEvents();
    const uiHandle: JQuery = v.getUI('destroy');
}

function CollectionViewTests() {
    const cvWithoutOptions = new MyCollectionView();
    const cv = new MyCollectionView({
        viewFilter: (_view?: MyCollectionViewChildViews, _index?: number, children?: MyCollectionViewChildViews[]) =>
            true,
    });
    cv.collection.add(new MyModel());
    app.mainRegion.show(cv);
    cv.emptyView = MyView;
    const view: Marionette.CollectionView<MyModel, MyCollectionViewChildViews> = cv.destroy();
}

class MyController {
    doFoo() { }

    doBar() { }
}

function AppRouterTests() {
    const myController = new MyController();
    const router = new MyRouter();

    router.appRoute('/foo', 'fooThat');

    router.processAppRoutes(myController, {
        foo: 'doFoo',
        'bar/:id': 'doBar'
    });
}
