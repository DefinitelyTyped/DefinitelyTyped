import { stdout, stderr } from 'test-console';

for (const std of [stdout, stderr]) {
    // $ExpectType Inspector
    std.inspect();
    // $ExpectType Inspector
    std.inspect({ isTTY: true });

    // $ExpectError
    std.inspectSync();
    // $ExpectError
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

    // $ExpectError
    std.inspectAsync();
    // $ExpectError
    std.inspectAsync({});
    // $ExpectError
    std.inspectAsync(async output => output);
    // $ExpectType Promise<ReadonlyArray<string>> || Promise<Output>
    std.inspectAsync(async () => {});
    // $ExpectType Promise<ReadonlyArray<string>> || Promise<Output>
    std.inspectAsync(async _ => {});
    // $ExpectError
    std.inspectAsync({ isTTY: false }, async output => output);
    // $ExpectType Promise<ReadonlyArray<string>> || Promise<Output>
    std.inspectAsync({ isTTY: false }, async () => {});
    // $ExpectType Promise<ReadonlyArray<string>> || Promise<Output>
    std.inspectAsync({ isTTY: false }, async _ => {});

    // $ExpectType Restore
    std.ignore();
    // $ExpectType Restore
    std.ignore({ isTTY: false });

    // $ExpectError
    std.ignoreSync();
    // $ExpectError
    std.ignoreSync({});
    // $ExpectError
    std.ignoreSync(_ => {});
    // $ExpectError
    std.ignoreSync(output => output);
    // $ExpectType void
    std.ignoreSync(() => {});
    // $ExpectError
    std.ignoreSync({ isTTY: false }, _ => {});
    // $ExpectError
    std.ignoreSync({ isTTY: false }, output => output);
    // $ExpectType void
    std.ignoreSync({ isTTY: false }, () => {});

    // $ExpectError
    std.ignoreAsync();
    // $ExpectError
    std.ignoreAsync({});
    // $ExpectError
    std.ignoreAsync(async _ => {});
    // $ExpectError
    std.ignoreAsync(async output => output);
    // $ExpectType Promise<void>
    std.ignoreAsync(async () => {});
    // $ExpectError
    std.ignoreAsync({ isTTY: false }, async _ => {});
    // $ExpectError
    std.ignoreAsync({ isTTY: false }, async output => output);
    // $ExpectType Promise<void>
    std.ignoreAsync({ isTTY: false }, async () => {});
}
