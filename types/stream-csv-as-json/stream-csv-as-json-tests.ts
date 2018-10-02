import * as make from 'stream-csv-as-json';
import * as Parser from 'stream-csv-as-json/Parser';
import * as Stringer from 'stream-csv-as-json/Stringer';
import * as AsObjects from 'stream-csv-as-json/AsObjects';

const used = (array: any[]) => array.forEach(value => console.log(!!value));

{
    // creating parser with the main module

    const p1 = make();
    const p2 = new make.Parser();
    const p3 = make.parser();

    const p4 = make({});
    const p5 = new make.Parser({});
    const p6 = make.parser({});

    const p7: make.Parser = make();
    const p8: make.Parser = new make.Parser();
    const p9: make.Parser = make.parser();

    used([p1, p2, p3, p4, p5, p6, p7, p8, p9]);
}

{
    // Parser tests

    const p1: Parser = new Parser({ packValues: false });
    const p2: Parser = Parser.make({ separator: '/' });
    const p3: Parser = Parser.parser({ streamValues: false });
    const p4: Parser.make.Constructor = Parser.make({ packValues: false, packStrings: true });
    const p5: Parser.parser.Constructor = Parser.parser({ packValues: false, packStrings: true, streamStrings: false });

    used([p1, p2, p3, p4, p5]);
}

{
    // Stringer tests

    const s1: Stringer = new Stringer();
    const s2: Stringer = Stringer.make({ useValues: true });
    const s3: Stringer = Stringer.stringer({ useStringValues: true });
    const s4: Stringer.make.Constructor = Stringer.make();
    const s5: Stringer.stringer.Constructor = Stringer.stringer();

    used([s1, s2, s3, s4, s5]);
}

{
    // StreamValues tests

    const parser: Parser = new Parser();

    const s1: AsObjects = new AsObjects();
    const s2: AsObjects = AsObjects.make();
    const s3: AsObjects = AsObjects.asObjects();
    const s4: AsObjects.make.Constructor = AsObjects.make();
    const s5: AsObjects.asObjects.Constructor = AsObjects.asObjects();

    used([s1, s2, s3, s4, s5]);

    parser.pipe(new AsObjects({ fieldPrefix: 'x' }));
    parser.pipe(AsObjects.make({ useStringValues: true }));
    parser.pipe(AsObjects.asObjects());

    AsObjects.withParser();
}
