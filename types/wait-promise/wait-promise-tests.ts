import * as wait from "wait-promise";

function exampleVoidFn() {}

async function testExamples() {
    await wait.check();
    const results = [
        await wait.check(() => true),
        await wait.until(() => true),
        await wait.till(() => true),
        await wait.before(500).until(() => true),
        await wait.after(500).until(() => true),
        await wait.limit(10).until(() => true),
        await wait.every(500).until(() => true),
        await wait.every(500, 10).until(() => true),
        await wait.and(exampleVoidFn).until(() => true),
        await wait
            .every(50)
            .and(exampleVoidFn)
            .until(() => true)
    ];
    await wait
        .every(500)
        .and(exampleVoidFn)
        .forward();
    await wait.sleep(200);
}
