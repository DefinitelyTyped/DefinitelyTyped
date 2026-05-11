import { bundleId, bundleIdSync } from "bundle-id";

// $ExpectType Promise<string>
bundleId("Safari");

// $ExpectType string
bundleIdSync("Safari");

// @ts-expect-error
bundleId();

// @ts-expect-error
bundleId(1);

// @ts-expect-error
bundleIdSync();

// @ts-expect-error
bundleIdSync(1);
