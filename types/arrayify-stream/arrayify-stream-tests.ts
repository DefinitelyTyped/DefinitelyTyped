import arrayifyStream from 'arrayify-stream';
import { Readable } from 'stream';

async function test() {
    const readable = new Readable();
    const items = [1, 2, 3];
    items.forEach(item => readable.push(item));

    const result: Promise<any[]> = arrayifyStream(readable);
    const arr: any[] = await result;

    // $ExpectError
    arrayifyStream();
}
