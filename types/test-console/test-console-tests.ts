import { stdout, stderr } from 'test-console';

for (const std of [stdout, stderr]) {
    // $ExpectType Inspector
    std.inspect();
    // $ExpectType Inspector
    std.inspect({ isTTY: true });

    // @ts-expect-error
    std.inspectSync();
    // @ts-expect-error
    std.inspectSync({});
    // $ExpectType ReadonlyArray<string> || Output
    std.inspectSync(() => {});
    // $ExpectType ReadonlyArray<string> || Output
    std.inspectSync(output => output);
    // $ExpectType ReadonlyArray<string> || Output
    std.inspectSync(_ => {});
    // $ExpectType ReadonlyArray<string> || Output
    std.inspectSync({ isTTY: false }, () => {});
    // $ExpectType ReadonlyArray<string> || Output
    std.inspectSync({ isTTY: false }, output => output);
    // $ExpectType ReadonlyArray<string> || Output
    std.inspectSync({ isTTY: false }, _ => {});

    // @ts-expect-error
    std.inspectAsync();
    // @ts-expect-error
    std.inspectAsync({});
    // @ts-expect-error
    std.inspectAsync(async output => output);
    // $ExpectType Promise<ReadonlyArray<string>> || Promise<Output>
    std.inspectAsync(async () => {});
    // $ExpectType Promise<ReadonlyArray<string>> || Promise<Output>
    std.inspectAsync(async _ => {});
    // @ts-expect-error
    std.inspectAsync({ isTTY: false }, async output => output);
    // $ExpectType Promise<ReadonlyArray<string>> || Promise<Output>
    std.inspectAsync({ isTTY: false }, async () => {});
    // $ExpectType Promise<ReadonlyArray<string>> || Promise<Output>
    std.inspectAsync({ isTTY: false }, async _ => {});

    // $ExpectType Restore
    std.ignore();
    // $ExpectType Restore
    std.ignore({ isTTY: false });

    // @ts-expect-error
    std.ignoreSync();
    // @ts-expect-error
    std.ignoreSync({});
    // @ts-expect-error
    std.ignoreSync(_ => {});
    // @ts-expect-error
    std.ignoreSync(output => output);
    // $ExpectType void
    std.ignoreSync(() => {});
    // @ts-expect-error
    std.ignoreSync({ isTTY: false }, _ => {});
    // @ts-expect-error
    std.ignoreSync({ isTTY: false }, output => output);
    // $ExpectType void
    std.ignoreSync({ isTTY: false }, () => {});

    // @ts-expect-error
    std.ignoreAsync();
    // @ts-expect-error
    std.ignoreAsync({});
    // @ts-expect-error
    std.ignoreAsync(async _ => {});
    // @ts-expect-error
    std.ignoreAsync(async output => output);
    // $ExpectType Promise<void>
    std.ignoreAsync(async () => {});
    // @ts-expect-error
    std.ignoreAsync({ isTTY: false }, async _ => {});
    // @ts-expect-error
    std.ignoreAsync({ isTTY: false }, async output => output);
    // $ExpectType Promise<void>
    std.ignoreAsync({ isTTY: false }, async () => {});
}
