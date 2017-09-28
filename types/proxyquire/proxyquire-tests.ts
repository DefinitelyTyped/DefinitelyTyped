

import proxyquire = require('proxyquire');

class Foo {}
var mock = {};

var myModule = proxyquire('myModule', mock);
var fooModule: Foo = proxyquire<Foo>('foo', mock);

myModule = proxyquire.noCallThru()
                     .load('myModule', mock);

fooModule = proxyquire.callThru()
                      .load<Foo>('foo', mock);

proxyquire.preserveCache();

proxyquire.noPreserveCache();
