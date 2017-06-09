/**
 * Test suite created by Maxime LUCE <https://github.com/SomaticIT>
 *
 * Created by using code samples from https://github.com/LearnBoost/stylus/blob/master/docs/js.md.
 */

import stylus = require("stylus");

var str = "This is a stylus test";

/**
 * Basic Usage
 */
stylus.render(str, { filename: 'nesting.css' }, function(err, css){
  if (err) throw err;
  console.log(css);
});

stylus(str)
    .set('filename', 'nesting.css')
    .render(function (err, css) {
        // logic
    });

/**
 * .set(setting, value)
 * https://github.com/LearnBoost/stylus/blob/master/docs/js.md#setsetting-value
 */
stylus(str)
    .set('filename', __dirname + '/test.styl')
    .set('paths', [__dirname, __dirname + '/mixins'])
    .render(function (err, css) {
        // logic
    });

/**
 * .include(path)
 * https://github.com/LearnBoost/stylus/blob/master/docs/js.md#includepath
 */
stylus(str)
    .include(require('nib').path)
    .include(process.env.HOME + '/mixins')
    .render(function (err, css) {
        // logic
    });

/**
 * .import(path)
 * https://github.com/LearnBoost/stylus/blob/master/docs/js.md#importpath
 */
stylus(str)
    .set('filename', __dirname + '/test.styl')
    .import('mixins/vendor')
    .render(function (err, css) {
        if (err) throw err;
        console.log(css);
    });

/**
 * .define(name, node|fn)
 * https://github.com/LearnBoost/stylus/blob/master/docs/js.md#definename-node
 */
stylus(str)
    .define('has-canvas', stylus.nodes.false)
    .define('some-setting', new stylus.nodes.String('some value'))

    .define('string', 'some string')
    .define('number', 15.5)
    .define('some-bool', true)
    .define('list', [1, 2, 3])
    .define('list', [1, 2, [3, 4, [5, 6]]])
    .define('list', { foo: 'bar', bar: 'baz' })
    .define('families', ['Helvetica Neue', 'Helvetica', 'sans-serif'])

    .define('get-list', function () {
        return ['foo', 'bar', 'baz'];
    })

    .render(function (err, css) {
        if (err) throw err;
        console.log(css);
    });

/**
 * .use(fn)
 * https://github.com/LearnBoost/stylus/blob/master/docs/js.md#usefn
 */
var mylib = function (style: any) {
    style.define('number', 15.5);
    style.define('get-list', function () {
        return ['foo', 'bar', 'baz'];
    });
};

stylus(str)
    .use(mylib)
    .render(function (err, css) {
        if (err) throw err;
        console.log(css);
    });
