import rename = require('rename');

// @ts-expect-error
rename();
// @ts-expect-error
rename('a.js');
// @ts-expect-error
rename(undefined, undefined);

// These fail to produce errors on 2.4
// rename(1, 2);                   // @ts-expect-error
// rename('a.js', () => { });       // @ts-expect-error
// rename('a.js', (obj) => { });    // @ts-expect-error

// @ts-expect-error
rename({ non: "existent" }, 'b.js');

rename('a.js', 'b.js');         // $ExpectType FilePath
rename('a.js', { suffix: '-debug' });
rename('a.js', (fileObject) => {
    return { suffix: '-debug' };
});

rename({}, 'b.js');
rename({ basename: 'a', extname: '.js' }, 'b.js');

function transformer(obj: rename.FileObject): rename.Specification {
    return {
        suffix: obj.hash || '-debug'
    };
}

rename({ basename: 'a', extname: '.js' }, transformer);
rename({ basename: 'a', extname: '.js', hash: '-123' }, transformer);

rename({
    basename: 'c',
    extname: '.js',
    hash: '111'
}, {
        // tslint:disable-next-line no-invalid-template-strings
        suffix: '-${hash}'
    });

rename.parse("p.js"); // $ExpectType ParsedFileObject
rename.parse({ dirname: '.'}); // $ExpectType ParsedFileObject

// @ts-expect-error
rename.stringify();

// This fails to produce an error on 2.4
// rename.stringify("abcd.js");    // @ts-expect-error

rename.stringify({});
// @ts-expect-error
rename.stringify({ suffix: ".js" });
rename.stringify({ extname: ".js" });
