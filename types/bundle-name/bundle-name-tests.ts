import bundleName from "bundle-name";

// $ExpectType Promise<string>
bundleName("com.apple.Safari");

// @ts-expect-error
bundleName(1);

// @ts-expect-error
bundleName();
