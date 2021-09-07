import {
    write,
    writeBuffer,
    read,
    readBuffer,
    writeAsync,
    ReadableFields,
    writeSync,
    readSync,
    readBufferSync,
} from 'pdf-fill-form';
import { readFileSync } from 'fs';

const buffer = readFileSync('test.pdf');

async function main() {
    // Workaround because TS 3.9 resolves to ReadableFields and TS 3.6 to the object
    // $ExpectType ReadableFields || { name: string; page: number; value: string; id: number; type: string; }[]
    await read('./test.pdf');

    // $ExpectType ReadableFields || { name: string; page: number; value: string; id: number; type: string; }[]
    await readBuffer(buffer);

    // $ExpectType ReadableFields || { name: string; page: number; value: string; id: number; type: string; }[]
    readSync('./test.pdf');

    // $ExpectType ReadableFields || { name: string; page: number; value: string; id: number; type: string; }[]
    readBufferSync(buffer);

    // $ExpectType Buffer
    await write('test.pdf', { field: 'test' }, { save: 'pdf' });

    // $ExpectType Buffer
    writeSync('test.pdf', { field: 'test' }, { save: 'pdf' });

    // $ExpectType Buffer
    await writeBuffer(buffer, { otherField: '123' }, { save: 'imgpdf', antialias: true });

    // $ExpectType Buffer
    await writeBuffer(buffer, { field: 123, otherField: true });

    // $ExpectError
    await writeBuffer(buffer, { field: ['123', 'test'] });
}

main();
