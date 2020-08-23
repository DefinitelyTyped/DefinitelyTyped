import { urlToProperty, urlToList, propertyToUrl } from 'query-string-params';

urlToProperty(''); // $ExpectType SearchParamOptions
urlToList(''); // $ExpectType SearchParamOptions[]
propertyToUrl({}); // $ExpectType string

urlToProperty('foo=x,y&bar=z'); // $ExpectType SearchParamOptions
urlToList('foo=x,y&bar=z'); // $ExpectType SearchParamOptions[]
propertyToUrl({ foo: ['a', 'b'], bar: ['c'] }); // $ExpectType string
