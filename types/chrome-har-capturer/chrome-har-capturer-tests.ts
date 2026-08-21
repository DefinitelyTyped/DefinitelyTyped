import { fromLog, run } from "chrome-har-capturer";

// $ExpectedType Loader<undefined>
run(["https://localhost"], {});

// $ExpectedType Loader<{a: number;}>
run(["https://localhost"], {
    postHook(url, client, index, urls) {
        return new Promise<{ "a": number }>((res) => res({ "a": 1 }));
    },
});

// $ExpectedType HAR<never>
fromLog("https://localhost", [{ method: "GET", params: {} }], {});
