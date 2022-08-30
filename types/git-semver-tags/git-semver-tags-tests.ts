import * as gitSemverTags from "git-semver-tags";

declare const callback: gitSemverTags.Callback;
declare const options: gitSemverTags.Options;

// $ExpectType void
gitSemverTags(callback);

gitSemverTags({ tagPrefix: 'skip/', skipUnstable: true }, (err, tags) => {
    if (err) {
        //
    }
});

// $ExpectType void
gitSemverTags(options, callback);

// @ts-expect-error
gitSemverTags();

// @ts-expect-error
gitSemverTags(options);

// @ts-expect-error
gitSemverTags(callback, options);
