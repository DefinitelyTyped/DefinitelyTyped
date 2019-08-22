import * as sass from 'sass';

sass.renderSync({
    file: 'index.scss',
    sourceMap: true,
    outFile: 'index.css',
});

const n0: sass.types.Number = new sass.types.Number(0);
const m: sass.types.Map = new sass.types.Map(3);
const t: sass.types.Boolean = sass.types.Boolean.TRUE;
const s: sass.types.String = new sass.types.String("foo");
m.setValue(0, t);
m.setValue(1, sass.types.Null.NULL);
m.setValue(2, s);
