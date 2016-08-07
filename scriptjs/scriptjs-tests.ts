/// <reference path="scriptjs.d.ts" />

import $script = require("scriptjs");

const callback = () => console.log('done');

function main(): void {
  $script('foo.js', callback);
  $script(['foo.js', 'bar.js'], callback);

  $script('foo.js', 'foo', callback);
  $script(['foo.js', 'bar.js'], 'bundle', callback);

  $script('foo', callback);
  $script('bundle', callback);

  $script.ready('foo', callback);
  $script.ready('bundle', callback);

  const deps = {
    foo: 'foo.js',
    bar: 'bar.js',
    thunk: ['thunkor.js', 'thunky.js'],
  };

  $script.ready(['foo', 'bar', 'thunk'], callback, (missing: string[]) => {
    missing.forEach((dep: string) => {
      $script(deps[dep], dep);
    });
  });

  $script.path('/js/modules/');

  $script.get('http://example.com/base.js', callback);

  $script.urlArgs('key=value&foo=bar');

  $script.order(['foo.js', 'bar.js'], 'bundle', callback);
}
