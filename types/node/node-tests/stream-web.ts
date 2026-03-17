import assert from "node:assert";
import { ReadableStream } from "node:stream/web";

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
