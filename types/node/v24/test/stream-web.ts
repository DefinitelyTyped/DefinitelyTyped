import assert from "node:assert";
import { ReadableStream, TransformStream, WritableStream } from "node:stream/web";
import type { QueuingStrategySize } from "node:stream/web";

async function readResultHasRequiredValueProperty() {
    const stream = ReadableStream.from(["test"]);
    const reader = stream.getReader();
    {
        const result = await reader.read();
        assert(!result.done, "Expected a non-done result");
        // $ExpectType string
        result.value;
        assert.strictEqual(result.value, "test");
    }
    {
        const result = await reader.read();
        assert(result.done, "Expected a done result");
        // $ExpectType string | undefined
        result.value;

        assert.strictEqual(Object.prototype.hasOwnProperty.call(result, "value"), true);
        assert.strictEqual(result.value, undefined);
    }
}

async function readableStreamControllerTreatsExplicitUndefinedAsAChunk() {
    const stream = new ReadableStream<string | undefined>({
        start(controller) {
            // @ts-expect-error `chunk` is required; pass `undefined` explicitly when it is part of the chunk type.
            controller.enqueue();
            controller.enqueue(undefined);
            controller.close();
        },
    });
    const values: (string | undefined)[] = [];
    for await (const chunk of stream) {
        values.push(chunk);
    }
    // enqueue() and enqueue(undefined) should have the same effect
    assert.deepStrictEqual(values, [undefined, undefined]);
}

async function transformStreamControllerTreatsExplicitUndefinedAsAChunk() {
    const stream = new TransformStream<string, string | undefined>({
        transform(chunk, controller) {
            assert.strictEqual(chunk, "input");

            // @ts-expect-error `chunk` is required; pass `undefined` explicitly when it is part of the chunk type.
            controller.enqueue();
            controller.enqueue(undefined);
        },
    });
    const values: (string | undefined)[] = [];
    for await (const chunk of ReadableStream.from(["input"]).pipeThrough(stream)) {
        values.push(chunk);
    }
    // enqueue() and enqueue(undefined) should have the same effect
    assert.deepStrictEqual(values, [undefined, undefined]);
}

async function writableStreamWriterTreatsExplicitUndefinedAsAChunk() {
    const writtenChunks: (string | undefined)[] = [];

    const stream = new WritableStream<string | undefined>({
        write(chunk) {
            writtenChunks.push(chunk);
        },
    });
    const writer = stream.getWriter();
    // @ts-expect-error `chunk` is required; pass `undefined` explicitly when it is part of the chunk type.
    await writer.write();
    await writer.write(undefined);
    await writer.close();

    assert.deepStrictEqual(writtenChunks, [undefined, undefined]);
}

async function queuingStrategySizeReceivesTheChunk() {
    const sizeChunks: string[] = [];

    const size: QueuingStrategySize<string> = (chunk) => {
        // $ExpectType string
        chunk;
        sizeChunks.push(chunk);
        return chunk.length;
    };

    const stream = new ReadableStream<string>(
        {
            start(controller) {
                controller.enqueue("size");
                controller.close();
            },
        },
        {
            highWaterMark: 10,
            size,
        },
    );
    const result = await stream.getReader().read();
    assert.deepStrictEqual(result, { done: false, value: "size" });
    assert.deepStrictEqual(sizeChunks, ["size"]);
}
