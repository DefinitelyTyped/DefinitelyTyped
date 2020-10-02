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

// $ExpectError
gitSemverTags();

// $ExpectError
gitSemverTags(options);

// $ExpectError
gitSemverTags(callback, options);
