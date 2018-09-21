import {
    compare,
    isBlank,
    isEmpty,
    isEqual,
    isNone,
    isPresent,
    tryInvoke,
    typeOf
} from '@ember/utils';

(function() {
    /** isNone */
    const maybeUndefined: string | undefined = 'not actually undefined';
    if (isNone(maybeUndefined)) {
        return;
    }
    const anotherString = maybeUndefined + 'another string';
    isNone();              // $ExpectType boolean
    isNone(null);          // $ExpectType boolean
    isNone(undefined);     // $ExpectType boolean
    isNone('');            // $ExpectType boolean
    isNone([]);            // $ExpectType boolean
    isNone(function() {}); // $ExpectType boolean
})();

(function() {
    /** tryInvoke */
    let d = new Date('03/15/2013');

    tryInvoke(d, 'getTime');              // $ExpectType number
    tryInvoke(d, 'setFullYear', [2014]);  // $ExpectType number
    tryInvoke(d, 'noSuchMethod', [2014]); // $ExpectType undefined
    tryInvoke(d, 'getTime');
    tryInvoke(d, 'setFullYear', [2014]);
    tryInvoke(d, 'noSuchMethod', [2014]);
})();

(function() {
    /** isPresent */
    isPresent();                // $ExpectType boolean
    isPresent(null);            // $ExpectType boolean
    isPresent(undefined);       // $ExpectType boolean
    isPresent('');              // $ExpectType boolean
    isPresent('  ');            // $ExpectType boolean
    isPresent('\n\t');          // $ExpectType boolean
    isPresent([]);              // $ExpectType boolean
    isPresent({ length: 0 });   // $ExpectType boolean
    isPresent(false);           // $ExpectType boolean
    isPresent(true);            // $ExpectType boolean
    isPresent('string');        // $ExpectType boolean
    isPresent(0);               // $ExpectType boolean
    isPresent(function() {});   // $ExpectType boolean
    isPresent({});              // $ExpectType boolean
    isPresent(false);           // $ExpectType boolean
    isPresent('\n\t Hello');    // $ExpectType boolean
    isPresent([1, 2, 3]);       // $ExpectType boolean
})();

(function() {
    /** typeOf */
    typeOf(null);                   // $ExpectType "null"
    typeOf(undefined);              // $ExpectType "undefined"
    typeOf('michael');              // $ExpectType "string"
    // tslint:disable-next-line:no-construct
    typeOf(new String('michael'));  // $ExpectType "string"
    typeOf(101);                    // $ExpectType "number"
    // tslint:disable-next-line:no-construct
    typeOf(new Number(101));        // $ExpectType "number"
    typeOf(true);                   // $ExpectType "boolean"
    // tslint:disable-next-line:no-construct
    typeOf(new Boolean(true));      // $ExpectType "boolean"
    typeOf(() => 4);                // $ExpectType "function"
    typeOf([1, 2, 90]);             // $ExpectType "array"
    typeOf(/abc/);                  // $ExpectType "regexp"
    typeOf(new Date());             // $ExpectType "date"
    typeOf(new FileList());               // $ExpectType "filelist"
    // typeOf(EmberObject.extend());   // $ExpectType "class"
    // typeOf(EmberObject.create());   // $ExpectType "instance"
    typeOf(new Error('teamocil'));  // $ExpectType "error"

    typeOf();
    typeOf(null);
    typeOf(undefined);
    typeOf('michael');
    // tslint:disable-next-line:no-construct
    typeOf(new String('michael'));
    typeOf(101);
    // tslint:disable-next-line:no-construct
    typeOf(new Number(101));
    typeOf(true);
    // tslint:disable-next-line:no-construct
    typeOf(new Boolean(true));
    typeOf(() => 4);
    typeOf([1, 2, 90]);
    typeOf(/abc/);
    typeOf(new Date());
    typeOf(FileList);
    typeOf(new Error('teamocil'));
})();

(function() {
    /** isEqual */
    isEqual('foo', 'bar'); // $ExpectType boolean
    isEqual(14, 37); // $ExpectType boolean
    isEqual(14, '1'); // $ExpectType boolean
    isEqual(() => 4, () => 37); // $ExpectType boolean
    isEqual(14); // $ExpectError
    isEqual(); // $ExpectError
})();

(function() {
    /** compare */
    compare('foo', 'bar'); // $ExpectType number
    compare(14, 37); // $ExpectType number
    compare(class {}, class {}); // $ExpectType number
    compare([], class {}); // $ExpectType number
    compare([], undefined); // $ExpectType number
    compare({}, () => 4); // $ExpectType number
    compare(14); // $ExpectError
    compare(); // $ExpectError
})();

(function() {
    /** isBlank */

    isBlank(); // $ExpectType boolean
    isBlank(null); // $ExpectType boolean
    isBlank(undefined); // $ExpectType boolean
    isBlank(''); // $ExpectType boolean
    isBlank([]); // $ExpectType boolean
    isBlank('\n\t'); // $ExpectType boolean
    isBlank('  '); // $ExpectType boolean
    isBlank({}); // $ExpectType boolean
    isBlank('\n\t Hello'); // $ExpectType boolean
    isBlank('Hello world'); // $ExpectType boolean
    isBlank([1, 2, 3]); // $ExpectType boolean
})();

(function() {
    /** isEmpty */

    isEmpty(); // $ExpectType boolean
    isEmpty(null); // $ExpectType boolean
    isEmpty(undefined); // $ExpectType boolean
    isEmpty(''); // $ExpectType boolean
    isEmpty([]); // $ExpectType boolean
    isEmpty({ size: 0 }); // $ExpectType boolean
    isEmpty({}); // $ExpectType boolean
    isEmpty('Adam Hawkins'); // $ExpectType boolean
    isEmpty([0, 1, 2]); // $ExpectType boolean
    isEmpty('\n\t'); // $ExpectType boolean
    isEmpty('  '); // $ExpectType boolean
    isEmpty({ size: 1 }); // $ExpectType boolean
    isEmpty({ size: () => 0 }); // $ExpectType boolean
})();
