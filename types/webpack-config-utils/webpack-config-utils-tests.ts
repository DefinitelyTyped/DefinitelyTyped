import webpackConfigUtils = require('webpack-config-utils');
import { getIfUtils, removeEmpty, propIf, propIfNot } from 'webpack-config-utils';

{
    // propIf/propIfNot

    // $ExpectType "value"
    propIf(true, 'value', 'alternate');

    // $ExpectType "alternate"
    propIf(false, 'value', 'alternate');

    // $ExpectType "alternate"
    propIf('false', 'value', 'alternate');

    // $ExpectType "alternate"
    propIfNot(true, 'value', 'alternate');

    // $ExpectType "value"
    propIfNot(false, 'value', 'alternate');

    // $ExpectType "value"
    propIfNot('false', 'value', 'alternate');
}
{
    // getIfUtils
    {
        // $ExpectType IfUtils
        const utils = getIfUtils({});
    }
    {
        const utils = getIfUtils({}, ['foo', 'bar']); // 'ifFoo', 'ifNotFoo', 'ifBar', 'ifNotBar'
        const {
            ifFoo, // $ExpectType IfUtilsFn
            ifBar, // $ExpectType IfUtilsFn
            ifNotFoo, // $ExpectType IfUtilsFn
            ifNotBar // $ExpectType IfUtilsFn
        } = utils;
    }

    {
        const {
            ifProduction // $ExpectType IfUtilsFn
        } = getIfUtils('production');

        // $ExpectType "value" | "alternate" || "alternate" | "value"
        ifProduction('value', 'alternate'); // 'value'
    }
    {
        const { ifNotDev } = getIfUtils({ dev: false });

        // $ExpectType "value" | "alternate" || "alternate" | "value"
        ifNotDev('value', 'alternate'); // 'value'
    }
    {
        // @ts-expect-error
        getIfUtils(false); // webpack-config-utils:getIfUtils.*?string\/Object/);
    }
    {
        const { ifTest, ifProd, ifNotDev } = getIfUtils('test');
        // $ExpectType boolean
        ifTest(); // true;
        // $ExpectType boolean
        ifProd(); // false;
        // $ExpectType boolean
        ifNotDev(); // true;
    }
    {
        const { ifWatch, ifProd, ifNotDev, ifTest } = getIfUtils('watch', ['prod', 'dev', 'watch']);
        // $ExpectType boolean
        ifWatch(); // true
        // $ExpectType boolean
        ifProd(); // false
        // $ExpectType boolean
        ifNotDev(); // true
        // $ExpectType IfUtilsFn
        ifTest; // function
    }
}
{
    // removeEmpty
    // $ExpectType (number | null)[]
    const emptiedArray = removeEmpty([undefined, 0, 1, 2, undefined, 3, undefined, null]); // [0, 1, 2, 3, null]

    /* tslint:disable-next-line:max-line-length */
    // $ExpectType NonEmptyObject<{ a: number; b: string; c: undefined; d: null; }, "b" | "a" | "d"> || NonEmptyObject<{ a: number; b: string; c: undefined; d: null; }, DefinedObjKeys<{ a: number; b: string; c: undefined; d: null; }>>
    const emptiedObject = removeEmpty({ a: 1, b: 'b', c: undefined, d: null }); // {a: 1, b: 'b', d: null}
    const {
        a, // $ExpectType number
        b, // $ExpectType string
        d // $ExpectType null
    } = emptiedObject;

    {
        // @ts-expect-error
        const {a, b, c, d} = emptiedObject;
    }

    // $ExpectType number | null
    const firstItem = emptiedArray[0];
}
