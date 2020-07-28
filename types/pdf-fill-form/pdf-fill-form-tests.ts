import { write, writeBuffer, read, readBuffer, writeAsync, ReadableFields } from 'pdf-fill-form';
import { readFileSync } from 'fs';

const buffer = readFileSync('test.pdf');

async function main() {
    // Workaround because TS 3.9 resolves to ReadableFields and TS 3.6 to the object
    // $ExpectType ReadableFields || { name: string; page: number; value: string; id: number; type: string; }[]
    await read('./test.pdf');

    // $ExpectType ReadableFields || { name: string; page: number; value: string; id: number; type: string; }[]
    await readBuffer(buffer);

    // $ExpectType Buffer
    await write('test.pdf', { field: 'test' }, { save: 'pdf' });

    // $ExpectType Buffer
    await writeBuffer(buffer, { otherField: '123' }, { save: 'imgpdf', antialias: true });

    // $ExpectError
    await writeBuffer(buffer, { field: 123 });
}

main();
