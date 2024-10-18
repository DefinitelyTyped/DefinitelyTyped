import * as gitSemverTags from "git-semver-tags";

declare const options: gitSemverTags.Options;

// $ExpectType Promise<string[]>
gitSemverTags();

// $ExpectType Promise<string[]>
gitSemverTags(options);

// @ts-expect-error
gitSemverTags({ ...options, foo: "bar" });

// @ts-expect-error
gitSemverTags({ ...options, lernaTags: "not a boolean" });

// @ts-expect-error
gitSemverTags({ ...options, package: 123 });

// @ts-expect-error
gitSemverTags({ ...options, tagPrefix: 123 });

// @ts-expect-error
gitSemverTags({ ...options, skipUnstable: "not a boolean" });
