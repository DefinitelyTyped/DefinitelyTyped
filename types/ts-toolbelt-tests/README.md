# Testing ts-toolbelt

Regression testing for `ts-toolbelt` against multiple TS versions.

It's also used for monitoring the performance with the benchmarks.

### Getting started

**To update the tests**

```sh
    cd ./DefinitelyTyped;
    npm i;
    cd ./types/ts-toolbelt-tests/scripts;
    npm i;
    npm run update-tests.sh;
    cd ../../../;
```

`update-tests` just grabs the latest version that sits on branch `master`.
The tests from the repository get cloned & linted into the `test` folder.
So update to the latest version version in the `package.json` accordingly.

**To run the tests**

Then test against TS >= 3.5 and above

```sh
    npm test
```

### FAQ

**Why is prettier disabled on this package?**
> Because it's unable to format it correctly