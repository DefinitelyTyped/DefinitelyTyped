namespace streamsTests {
    const { stream } = adone;

    namespace CoreStreamTests {
        const { CoreStream } = stream;

        new CoreStream();
        new CoreStream(undefined);
        new CoreStream(undefined, {});
        new CoreStream(undefined, { async: true });
        new CoreStream(undefined, { sync: true });
        new CoreStream(undefined, {
            transform(x) {
                this.push(x);
            }
        });
        new CoreStream(undefined, {
            flush() {
                this.push(1);
            }
        });

        new CoreStream([]);
        new CoreStream(new CoreStream([]));

        { const a: boolean = new CoreStream().write(1); }
        { const a: boolean = new CoreStream().push(1); }
        { const a: adone.stream.CoreStream<any, any> = new CoreStream().end(); }
        { const a: adone.stream.CoreStream<any, any> = new CoreStream().destroy(); }
        { const a: adone.stream.CoreStream<any, any> = new CoreStream().pause(); }
        { const a: adone.stream.CoreStream<any, any> = new CoreStream().resume(); }
        { const a: boolean = new CoreStream().isPaused(); }
        { const a: boolean = new CoreStream().isEnded(); }
        { const a: nodestd.stream.Transform = new CoreStream().pipe(new adone.std.stream.Transform()); }
        { const a: adone.stream.CoreStream<any, number> = new CoreStream().throughSync(function () { this.push(1); }); }
        { const a: adone.stream.CoreStream<any, number> = new CoreStream().throughSync(function () { this.push(1); }, function () { this.push(1); }); }
        { const a: adone.stream.CoreStream<any, number> = new CoreStream().throughAsync(function () { this.push(1); }); }
        { const a: adone.stream.CoreStream<any, number> = new CoreStream().throughAsync(function () { this.push(1); }, function () { this.push(1); }); }
        { const a: adone.stream.CoreStream<any, number> = new CoreStream().through(function () { this.push(1); }, function () { this.push(1); }); }
        { const a: adone.stream.CoreStream<number, string> = new CoreStream<number, number>([1, 2, 3]).map((x) => `${x}`); }
        { const a: adone.stream.CoreStream<any, number | string> = new CoreStream<string, string>().mapIf((x) => x === "1", () => 1); }
        { const a: adone.stream.CoreStream<any, number | string> = new CoreStream<number, string>().mapIf(async (x) => x === "1", () => 1); }
        { const a: adone.stream.CoreStream<number, number> = new CoreStream<number, number>().filter((x) => x === 1); }
        { const a: adone.stream.CoreStream<any, any> = new CoreStream().filter(async (x) => x === 1); }
        { const a: adone.stream.CoreStream<number, number> = new CoreStream<number, number>().forEach(async (x) => x === 1); }
        { const a: adone.stream.CoreStream<number, number> = new CoreStream<number, number>().forEach(async (x) => x === 1, {}); }
        { const a: adone.stream.CoreStream<number, number> = new CoreStream<number, number>().forEach(async (x) => x === 1, { passthrough: true }); }
        { const a: adone.stream.CoreStream<number, number> = new CoreStream<number, number>().forEach(async (x) => x === 1, { wait: true }); }
        { const a: adone.stream.CoreStream<any, any> = new CoreStream().done(() => {}); }
        { const a: adone.stream.CoreStream<any, any> = new CoreStream().done(() => {}, {}); }
        { const a: adone.stream.CoreStream<any, any> = new CoreStream().done(() => {}, { passthrough: true }); }
        { const a: adone.stream.CoreStream<any, any> = new CoreStream().toArray((x: any[]) => {}); }
        { const a: adone.stream.CoreStream<any, any> = new CoreStream().toArray((x: any[]) => {}, {}); }
        { const a: adone.stream.CoreStream<any, any> = new CoreStream().toArray((x: any[]) => {}, { passthrough: true }); }
        { const a: adone.stream.CoreStream<number, string> = new CoreStream<number, string>().unique(); }
        { const a: adone.stream.CoreStream<number, number> = new CoreStream<number, number>().unique((x) => x + 1); }
        { const a: adone.stream.CoreStream<any, any> = new CoreStream().stash((x) => x === 1); }
        { const a: adone.stream.CoreStream<any, any> = new CoreStream().stash("hello", (x) => x === 1); }
        { const a: adone.stream.CoreStream<number, string> = new CoreStream().unstash("hello"); }
        { const a: adone.stream.CoreStream<any, any> = new CoreStream().unstash(); }
        { const a: adone.stream.CoreStream<any, string> = new CoreStream().flatten(); }
        { const a: Promise<any[]> = new CoreStream().then(); }
        { const a: Promise<string> = new CoreStream().then(() => "1"); }
        { const a: Promise<number> = new CoreStream().then(() => 1, () => 2); }
        { const a: Promise<any[]> = new CoreStream().catch(); }
        { const a: Promise<number[] | number> = new CoreStream<number, number>().catch(() => 1); }
        { const a: adone.stream.CoreStream<any, any> = CoreStream.merge([new CoreStream()]); }
        { const a: adone.stream.CoreStream<any, any> = CoreStream.merge([new adone.std.stream.Readable()]); }
        { const a: adone.stream.CoreStream<any, any> = CoreStream.merge([new adone.std.stream.Transform()]); }
        { const a: adone.stream.CoreStream<any, any> = CoreStream.merge([new adone.std.stream.Transform()]); }
        { const a: adone.stream.CoreStream<any, any> = CoreStream.merge([new adone.std.stream.Duplex()]); }
        { const a: adone.stream.CoreStream<any, any> = CoreStream.merge([], {}); }
        { const a: adone.stream.CoreStream<any, any> = CoreStream.merge([], { end: true }); }
        { const a: adone.stream.CoreStream<any, any> = CoreStream.merge([], { sourceOptions: {} }); }
        { const a: adone.stream.CoreStream<any, any> = CoreStream.merge([], { sourceOptions: { async: true } }); }
        { const a: adone.stream.CoreStream<any, any> = CoreStream.merge([], { sourceOptions: { sync: false } }); }
        { const a: adone.stream.CoreStream<any, any> = CoreStream.merge([], { sourceOptions: { transform(x) { this.push(x); } } }); }
        { const a: adone.stream.CoreStream<any, any> = CoreStream.merge([], { sourceOptions: { flush() { this.push(1); } } }); }
        (async () => {
            const res = await new CoreStream([1, 2, 3, 4, 5])
                .map((x: number) => `${x}`)
                .mapIf((x: string) => x[0] === "1", (x) => x.slice(1))
                .map((x) => [x, x, x])
                .filter((x: [string, string, string]) => x[1] === "hello");
            for (const [a, b, c] of res) {
                const d: string = a;
                const e: string = b;
                const f: string = c;
            }
        });
    }

    namespace coreTests {
        { const a: adone.stream.CoreStream<any, any> = stream.core(); }
        { const a: adone.stream.CoreStream<number, number> = stream.core([1, 2, 3]); }
        { const a: adone.stream.CoreStream<any, any> = stream.core(stream.core([])); }
        { const a: adone.stream.CoreStream<any, any> = stream.core(undefined, {}); }
        { const a: adone.stream.CoreStream<any, any> = stream.core(undefined, { async: true }); }
        { const a: adone.stream.CoreStream<any, any> = stream.core(undefined, { sync: false }); }
        { const a: adone.stream.CoreStream<any, number> = stream.core<string, number>(undefined, { transform(x) { this.push(Number(x)); } }); }
        { const a: adone.stream.CoreStream<any, number> = stream.core(undefined, { flush() { this.push(1); } }); }
    }
}
