import * as PDFTK from 'node-pdftk';

PDFTK.configure({
    bin: '/usr/local/bin/pdftk',
    Promise,
    ignoreWarnings: true,
    tempDir: './pdftk',
});

PDFTK.configure({
    bin: '/usr/local/bin/pdftk',
});

[
    {
        input: 'string',
    },
    {
        input: Buffer.from('buffer'),
    },
].forEach(scenario => {
    const { input } = scenario;
    const pdftk = PDFTK.input(input); // $ExpectType PDFTK

    pdftk.allow(['FillIn']).attachFiles(['./file1.pdf', './file2.pdf']); // $ExpectType PDFTK

    pdftk.allow(['FillIn']).compress().output('./fileoutput.pdf'); // $ExpectType Promise<Buffer>
    pdftk.allow(['FillIn']).compress().output('./fileoutput.pdf', './destination/folder'); // $ExpectType Promise<string>
    pdftk.allow(['FillIn']).compress().output(); // $ExpectType Promise<Buffer>

    PDFTK.input(input).flatten().ignoreWarnings().inputPw('password').burst('page_%02d.pdf'); // $ExpectType Promise<string>
    PDFTK.input(input).flatten().ignoreWarnings().inputPw('password').burst(); // $ExpectType Promise<Buffer>
});

[{ input: [Buffer.from('buffer'), Buffer.from('buffer')] }].forEach(scenario => {
    const { input } = scenario;
    const pdftk = PDFTK.input(input);

    pdftk.output(); // $ExpectType Promise<Buffer>
});

[
    {
        input: {
            A: Buffer.from('buffer'),
            B: Buffer.from('buffer'),
            C: Buffer.from('buffer'),
        },
    },
].forEach(scenario => {
    const { input } = scenario;
    const pdftk = PDFTK.input(input);

    pdftk.cat('A B C').output(); // $ExpectType Promise<Buffer>
});
