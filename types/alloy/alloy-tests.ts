function test_controller_on() {
  const $: AlloyController = null as any;
  $.on('foo', console.log);
}

function test_controller_create_style() {
  const $: AlloyController = null as any;
  $.createStyle({
    foo: 'bar'
  });
}

function test_controller() {
  const $: AlloyController = {} as any;
  $.UI.create('View', {
    classes: 'dialog'
  });
}

function test_widget() {
  const Widget: WidgetInterface = {} as any;

  const collection = Widget.createCollection('book');
  collection.first();

  const model = Widget.createModel('book');
  model.set('title', 'foobar');

  const controller = Widget.createController('index');
  controller.getView('window');
}

function test_globals() {
  if (OS_ANDROID) {
    console.log('running on android');
  }
  if (OS_IOS) {
    console.log('running on ios');
  }
}

function test_alloy_globals() {
  Alloy.Globals.foo = 'bar';
  Alloy.Globals.bar = () => {};
}

function test_createController() {
  const controller = Alloy.createController('index');
  controller.getView('window');
}

function test_createCollection() {
  const collection = Alloy.createCollection('book');
  collection.first();
}

function test_createModel() {
  const model = Alloy.createModel('book');
  model.set('title', 'Harry Potter and the Order of the Phoenix');
}

function test_createWidget() {
  const widget = Alloy.createWidget('com.test.widget');
  widget.getView('label');
}

function test_singleton_collections() {
  const c1 = Alloy.Collections.instance('book');
  c1.first();
  const c2 = Alloy.Collections.test as Backbone.Collection;
  c2.first();
}

function test_singleton_models() {
  const m1 = Alloy.Models.instance('book');
  m1.set('title', 'foo');
  const m2 = Alloy.Models.test as Backbone.Model;
  m2.set('title', 'foo');
}
