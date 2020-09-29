import { flatten, unflatten } from "flat";

namespace TestFlatten {
    type Target = {
        a: {
            b: number;
        },
        c: boolean[][];
    };

    let target: Target;

    type Result = {
        'a.b': number;
        'c.0.0': boolean;
    };

    let result: Result;

    result = flatten<Target, Result>(target);
    result = flatten<Target, Result>(target, {});
    result = flatten<Target, Result>(target, {
        delimiter: '_',
    });
    result = flatten<Target, Result>(target, {
        maxDepth: 3,
    });
    result = flatten<Target, Result>(target, {
        safe: true,
    });
    result = flatten<Target, Result>(target, {
        transformKey: (key: string) => key,
    });
}

namespace TestUnflatten {
    type Target = {
        'a.b': number;
        'c.0.0': boolean;
    };

    let target: Target;

    type Result = {
        a: {
            b: number;
        },
        c: boolean[][];
    };

    let result: Result;

    result = unflatten<Target, Result>(target);
    result = unflatten<Target, Result>(target, {});
    result = unflatten<Target, Result>(target, {
        delimiter: '_',
    });
    result = unflatten<Target, Result>(target, {
        object: true,
    });
    result = unflatten<Target, Result>(target, {
        overwrite: true,
    });
    result = unflatten<Target, Result>(target, {
        transformKey: (key: string) => key,
    });
}
