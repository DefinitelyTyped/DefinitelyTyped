import context = require("contextjs");

context.init();

context.settings({compress: true});

context.attach('#test', [
  {header: 'header 1'},
  {divider: true},
  {text:'foobar', submenu: [
    {text:'sub1'},
    {text:'sub2'}
  ]}
]);

context.destroy('#test');
