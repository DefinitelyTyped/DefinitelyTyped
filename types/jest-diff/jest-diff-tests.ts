import diff = require('jest-diff');

diff([], ['a']); // $ExpectType string
diff(false, true);
diff(null, null);
diff(1000, 1001);
diff(/d+/, /w+/);
diff(new Map(), new Map());
diff(new Set(), new Set());
diff(new Date(), new Date());
diff('ts', 'js');
diff(Symbol(), Symbol(1));
diff(undefined, undefined);

diff([], ['a'], { }); // $ExpectType string
diff([], ['a'], { expand: false }); // $ExpectType string
diff([], ['a'], { contextLines: 3 }); // $ExpectType string
// $ExpectType string
diff([], ['a'], {
    aAnnotation: 'esperado',
    bAnnotation: 'recibido'
});

diff(); // $ExpectError
diff([]); // $ExpectError
// diff([], {}, []); // $ExpectError (does not error on 2.3)

diff([], ['a'], { expand: false }); // $ExpectType string
diff([], ['a'], { contextLines: 3 }); // $ExpectType string
// $ExpectType string
diff([], ['a'], {
    aAnnotation: 'esperado',
    bAnnotation: 'recibido'
});

// $ExpectError
diff([], ['a'], {
    expand: 'yeah',
    aAnnotation: false,
    bAnnotation: {},
    contextLines: 'two'
});
