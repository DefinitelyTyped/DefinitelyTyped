System.import('./hi.js').then((hi) => {
    hi.someProperty();
});

System.import<Hi>('./hi.js').then(hi => {
    hi.someExport();
});

System.import('./hi.js', 'https://example.com/base/');

System.register(['foo', 'bar'], (_export, _context) => {
    let foo;
    let bar;

    return {
        setters: [
            module => {
                foo = module;
            },
            module => {
                bar = module;
            }
        ],
        execute() {
            _export('a', 'thing');
            _export('b', 123);
            _export('c', () => 'hi');
            _export({some: 'thing'});

            _context.import('./other-thing.js');

            _context.meta.url;
        }
    };
});

// named register
System.register('name', [], () => ({}));

const update = System.delete('https://example.com/a.js');
if (update) {
    update();
} else {
    const expected: false = update;
}

const a = System.get('https://example.com/a.js');
if (a) {
    a.doThing();
} else {
    // $ExpectType null
    a;
}

const b = System.get<ModuleB>('https://example.com/b.js');
if (b) {
    b.theBThing();
} else {
    // $ExpectType null
    b;
}

const hasC: boolean = System.has('https://example.com/c.js');

System.set('https://example.com/d.js', {
    hi: 'there'
});

for (const entry of System.entries()) {
    // $ExpectType: string
    const moduleId = entry[0];
    const module = entry[1];
}

interface ModuleB {
    theBThing(): void;
}

interface Hi {
    someExport(): void;
}
