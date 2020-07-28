import * as PDFTK from 'node-pdftk';

PDFTK.configure({
    bin: '/usr/local/bin/pdftk',
    Promise,
    ignoreWarnings: true,
    tempDir: './pdftk',
});

[
    {
        input: 'string',
    },
    {
        input: Buffer.from('buffer'),
    },
].forEach(scenario => {
    const pdftk = PDFTK.input(scenario.input); // $ExpectType PDFTK

    pdftk.allow(['FillIn']).attachFiles(['./file1.pdf', './file2.pdf']); // $ExpectType PDFTK

    pdftk.allow(['FillIn']).compress().output('./fileoutput.pdf'); // $ExpectType Promise<Buffer>
    pdftk.allow(['FillIn']).compress().output('./fileoutput.pdf', './destination/folder'); // $ExpectType Promise<string>
    pdftk.allow(['FillIn']).compress().output(); // $ExpectType Promise<Buffer>

    PDFTK.input(scenario.input).flatten().ignoreWarnings().inputPw('password').burst('page_%02d.pdf'); // $ExpectType Promise<string>
    PDFTK.input(scenario.input).flatten().ignoreWarnings().inputPw('password').burst(); // $ExpectType Promise<Buffer>
});
