import { Events, Factory, View } from "bullbone";

// Events tests
const events = new Events();

// $ExpectType Events
events.on("test", (data: string) => console.log(data));

// $ExpectType Events
events.once("click", (e: Event) => {});

// $ExpectType Events
events.trigger("test", "hello", 123);

// $ExpectType Events
events.off("test");

// $ExpectType Events
events.listenTo(events, "change", (value: any) => {});

// $ExpectType Events
events.stopListening();

// Factory tests
const factory = new Factory({
    defaultViewName: "DefaultView",
    customLoader: {},
    viewLoader: (name: string, callback: (view: View) => void) => {
        callback(new View());
    },
    resources: {
        loaders: {
            template: (name: string, callback: (content: string) => void) => {
                callback("<div></div>");
            },
        },
    },
});

// $ExpectType string
factory.defaultViewName;

factory.create("TestView", { template: "test" }, (view: View) => {
    // $ExpectType View
    view;
});

factory.prepare(new View(), (view: View) => {
    // $ExpectType View
    view;
});

// View tests
const viewOptions = {
    template: "my-template",
    selector: ".container",
    data: { title: "Test" },
    events: {
        "click .button": (e: JQuery.Event) => {},
    },
};

const view = new View(viewOptions);

// $ExpectType string
view.cid;

// $ExpectType HTMLElement
view.element;

// $ExpectType boolean
view.isReady;

// $ExpectType JQuery<HTMLElement>
view.$el;

// Lifecycle methods
view.init();
view.setup();
view.setupFinal();

// $ExpectType Record<string, any>
view.data();

// Rendering
// $ExpectType Promise<View>
view.render((renderedView: View) => {});

// $ExpectType Promise<View>
view.reRender();

// $ExpectType Promise<void>
view.whenRendered();

// Element management
view.setElement(".new-selector");
view.undelegateEvents();

// Event handlers
view.addHandler("click", ".button", (e: Event) => {});
view.addHandler("click", ".button", "methodName");

// View state
// $ExpectType boolean
view.isRendered();

// $ExpectType boolean
view.isFullyRendered();

// Nested views
// $ExpectType Promise<View>
view.createView("child", "ChildView", { template: "child" });

// $ExpectType boolean
view.hasView("child");

// $ExpectType View | null
view.getView("child");

view.setView("child", new View());
view.clearView("child");

// Parent/child relationships
// $ExpectType boolean
view.hasParentView();

// Ready conditions
view.addReadyCondition((data: any) => true);
view.addReadyCondition(true);

// Waiting
view.waitForView("child");

// $ExpectType Promise<any> | undefined
view.wait(Promise.resolve());

// $ExpectType Promise<any> | undefined
view.wait(true);

// Removal
// $ExpectType View
view.remove();

view.onRemove();

// Events (inherited from Events)
// $ExpectType any
view.on("render", (data: any) => {});

// $ExpectType any
view.trigger("custom:event", "data");

// Template management
view.setTemplate("new-template");
view.setTemplateContent("<div>content</div>");

// Error cases
// @ts-expect-error
view.addHandler("click");

// @ts-expect-error
factory.create();
