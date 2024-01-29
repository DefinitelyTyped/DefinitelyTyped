import arrayifyStream from "arrayify-stream";
import { EventEmitter } from "events";
import { Readable } from "stream";

async function test() {
    const readable = new Readable();
    const items = [1, 2, 3];
    items.forEach(item => readable.push(item));

    const result: Promise<any[]> = arrayifyStream(readable);
    const arr: any[] = await result;

    const emitter = new EventEmitter();
    const prom = arrayifyStream(emitter);
    emitter.emit("data", "123");
    emitter.emit("end");
    await prom;

    // @ts-expect-error
    arrayifyStream();
}
