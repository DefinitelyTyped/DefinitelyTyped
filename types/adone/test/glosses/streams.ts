namespace streamsTests {
    const { stream } = adone;

    namespace CoreStreamTests {
        const { core: { Stream } } = stream;

        new Stream();
        new Stream(undefined);
        new Stream(undefined, {});
        new Stream(undefined, { async: true });
        new Stream(undefined, { sync: true });
        new Stream(undefined, {
            transform(x) {
                this.push(x);
            }
        });
        new Stream(undefined, {
            flush() {
                this.push(1);
            }
        });

        new Stream([]);
        new Stream(new Stream([]));

        { const a: boolean = new Stream().write(1); }
        { const a: boolean = new Stream().push(1); }
        { const a: adone.stream.core.Stream<any, any> = new Stream().end(); }
        { const a: adone.stream.core.Stream<any, any> = new Stream().destroy(); }
        { const a: adone.stream.core.Stream<any, any> = new Stream().pause(); }
        { const a: adone.stream.core.Stream<any, any> = new Stream().resume(); }
        { const a: boolean = new Stream().isPaused(); }
        { const a: boolean = new Stream().isEnded(); }
        { const a: nodestd.stream.Transform = new Stream().pipe(new adone.std.stream.Transform()); }
        { const a: adone.stream.core.Stream<any, number> = new Stream().throughSync(function () { this.push(1); }); }
        { const a: adone.stream.core.Stream<any, number> = new Stream().throughSync(function () { this.push(1); }, function () { this.push(1); }); }
        { const a: adone.stream.core.Stream<any, number> = new Stream().throughAsync(function () { this.push(1); }); }
        { const a: adone.stream.core.Stream<any, number> = new Stream().throughAsync(function () { this.push(1); }, function () { this.push(1); }); }
        { const a: adone.stream.core.Stream<any, number> = new Stream().through(function () { this.push(1); }, function () { this.push(1); }); }
        { const a: adone.stream.core.Stream<number, string> = new Stream<number, number>([1, 2, 3]).map((x) => `${x}`); }
        { const a: adone.stream.core.Stream<any, number | string> = new Stream<string, string>().mapIf((x) => x === "1", () => 1); }
        { const a: adone.stream.core.Stream<any, number | string> = new Stream<number, string>().mapIf(async (x) => x === "1", () => 1); }
        { const a: adone.stream.core.Stream<number, number> = new Stream<number, number>().filter((x) => x === 1); }
        { const a: adone.stream.core.Stream<any, any> = new Stream().filter(async (x) => x === 1); }
        { const a: adone.stream.core.Stream<number, number> = new Stream<number, number>().forEach(async (x) => x === 1); }
        { const a: adone.stream.core.Stream<number, number> = new Stream<number, number>().forEach(async (x) => x === 1, {}); }
        { const a: adone.stream.core.Stream<number, number> = new Stream<number, number>().forEach(async (x) => x === 1, { passthrough: true }); }
        { const a: adone.stream.core.Stream<number, number> = new Stream<number, number>().forEach(async (x) => x === 1, { wait: true }); }
        { const a: adone.stream.core.Stream<any, any> = new Stream().done(() => {}); }
        { const a: adone.stream.core.Stream<any, any> = new Stream().done(() => {}, {}); }
        { const a: adone.stream.core.Stream<any, any> = new Stream().done(() => {}, { passthrough: true }); }
        { const a: adone.stream.core.Stream<any, any> = new Stream().toArray((x: any[]) => {}); }
        { const a: adone.stream.core.Stream<any, any> = new Stream().toArray((x: any[]) => {}, {}); }
        { const a: adone.stream.core.Stream<any, any> = new Stream().toArray((x: any[]) => {}, { passthrough: true }); }
        { const a: adone.stream.core.Stream<number, string> = new Stream<number, string>().unique(); }
        { const a: adone.stream.core.Stream<number, number> = new Stream<number, number>().unique((x) => x + 1); }
        { const a: adone.stream.core.Stream<any, any> = new Stream().stash((x) => x === 1); }
        { const a: adone.stream.core.Stream<any, any> = new Stream().stash("hello", (x) => x === 1); }
        { const a: adone.stream.core.Stream<number, string> = new Stream().unstash("hello"); }
        { const a: adone.stream.core.Stream<any, any> = new Stream().unstash(); }
        { const a: adone.stream.core.Stream<any, string> = new Stream().flatten(); }
        { const a: Promise<any[]> = new Stream().then(); }
        { const a: Promise<string> = new Stream().then(() => "1"); }
        { const a: Promise<number> = new Stream().then(() => 1, () => 2); }
        { const a: Promise<any[]> = new Stream().catch(); }
        { const a: Promise<number[] | number> = new Stream<number, number>().catch(() => 1); }
        { const a: adone.stream.core.Stream<any, any> = Stream.merge([new Stream()]); }
        { const a: adone.stream.core.Stream<any, any> = Stream.merge([new adone.std.stream.Readable()]); }
        { const a: adone.stream.core.Stream<any, any> = Stream.merge([new adone.std.stream.Transform()]); }
        { const a: adone.stream.core.Stream<any, any> = Stream.merge([new adone.std.stream.Transform()]); }
        { const a: adone.stream.core.Stream<any, any> = Stream.merge([new adone.std.stream.Duplex()]); }
        { const a: adone.stream.core.Stream<any, any> = Stream.merge([], {}); }
        { const a: adone.stream.core.Stream<any, any> = Stream.merge([], { end: true }); }
        { const a: adone.stream.core.Stream<any, any> = Stream.merge([], { sourceOptions: {} }); }
        { const a: adone.stream.core.Stream<any, any> = Stream.merge([], { sourceOptions: { async: true } }); }
        { const a: adone.stream.core.Stream<any, any> = Stream.merge([], { sourceOptions: { sync: false } }); }
        { const a: adone.stream.core.Stream<any, any> = Stream.merge([], { sourceOptions: { transform(x) { this.push(x); } } }); }
        { const a: adone.stream.core.Stream<any, any> = Stream.merge([], { sourceOptions: { flush() { this.push(1); } } }); }
        (async () => {
            const res = await new Stream([1, 2, 3, 4, 5])
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
        { const a: adone.stream.core.Stream<any, any> = stream.core.create(); }
        { const a: adone.stream.core.Stream<number, number> = stream.core.create([1, 2, 3]); }
        { const a: adone.stream.core.Stream<any, any> = stream.core.create(stream.core.create([])); }
        { const a: adone.stream.core.Stream<any, any> = stream.core.create(undefined, {}); }
        { const a: adone.stream.core.Stream<any, any> = stream.core.create(undefined, { async: true }); }
        { const a: adone.stream.core.Stream<any, any> = stream.core.create(undefined, { sync: false }); }
        { const a: adone.stream.core.Stream<any, number> = stream.core.create<string, number>(undefined, { transform(x) { this.push(Number(x)); } }); }
        { const a: adone.stream.core.Stream<any, number> = stream.core.create(undefined, { flush() { this.push(1); } }); }
    }
}
