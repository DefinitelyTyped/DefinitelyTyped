const element: JQuery = $('#element');
const target: JQuery = $('#target');

element.checkbox({
  /* Empty options */
}).bind('change', (event: HomeWorksEventObject) => {
  /* HomeWorks native event */
});

element.converter({
  /* Empty options */
});

element.dropdown({
  /* Empty options */
});

const dropdownHandlerTarget: JQuery = element.addHandler(target);

element.input({
  /* Empty options */
}).bind('change', (event: HomeWorksEventObject) => {
  /* HomeWorks native event */
});

element.modal({
  /* Any options */
}).each(() => {
  /* Chaining */
});
element.modal('show');
element.modal('hide');
element.modal('open');
element.modal('close');

notification('title', 'content', 'url', 'success');

element.ripple({
  /* Object options */
});
element.start({
  x: 1,
  y: 2
});

element.spinner({
  type: 'any',
  empty: 'any'
}).bind('change', (event: HomeWorksEventObject) => {
  /* HomeWorks native event */
});

element.step('method');
element.step({
  active: 0
}).bind('move', (event: HomeWorksStepEventObject) => {
  /* HomeWorks step event */
});

element.tab('method');
element.tab({
  active: 0
}).bind('move', (event: HomeWorksTabEventObject) => {
  /* HomeWorks step event */
});

toast('hello homeworks');
toast({
  message: 'hello homeworks'
});

element.toggle({
  placeholder: 'placeholder'
}).bind('change', (event: HomeWorksEventObject) => {
  /* HomeWorks native event */
});

element.upload({
  url: 'url',
  type: 'type',
  data: {},
  dest: 'dest',
  isBtn: true,
  beforeStart() {
  },
  complete(data: any) {
  },
  success(data?: any, state?: any, xhr?: any) {
  },
  error(xhr?: any, state?: any, error?: any) {
  },
  extensions: 'any'
});
