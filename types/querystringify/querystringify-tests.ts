import * as qs from "querystringify";

qs.parse('?foo=bar');         // { foo: 'bar' }
qs.parse('foo=bar');          // { foo: 'bar' }
qs.parse('foo=bar&bar=foo');  // { foo: 'bar', bar: 'foo' }
qs.parse('foo&bar=foo');      // { foo: '', bar: 'foo' }

qs.stringify({ foo: 'bar' });       // foo=bar
qs.stringify({ foo: 'bar' }, true); // ?foo=bar
qs.stringify({ foo: 'bar' }, '&');  // &foo=bar
qs.stringify({ foo: '' }, '&');     // &foo=
