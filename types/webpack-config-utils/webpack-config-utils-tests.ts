import webpackConfigUtils = require('webpack-config-utils');
import { getIfUtils, removeEmpty, propIf, propIfNot } from 'webpack-config-utils';

{
    // propIf/propIfNot

    // $ExpectType "value" | "alternate"
    propIf(true, 'value', 'alternate'); // 'value'

    // $ExpectType "value" | "alternate"
    propIf(false, 'value', 'alternate'); // 'alternate'

    // $ExpectType "value" | "alternate"
    propIf('false', 'value', 'alternate'); // 'alternate'

    // $ExpectType "value" | "alternate"
    propIfNot(true, 'value', 'alternate'); // 'alternate'

    // $ExpectType "value" | "alternate"
    propIfNot(false, 'value', 'alternate'); // 'value'

    // $ExpectType "value" | "alternate"
    propIfNot('false', 'value', 'alternate'); // 'value'
}
{
    // getIfUtils
    {
        const expectedMethods = [
            'ifProduction',
            'ifNotProduction',
            'ifProd',
            'ifNotProd',
            'ifTest',
            'ifNotTest',
            'ifDevelopment',
            'ifNotDevelopment',
            'ifDev',
            'ifNotDev'
        ];
        const utils = getIfUtils({});
    }
    {
        const expectedMethods = ['ifFoo', 'ifNotFoo', 'ifBar', 'ifNotBar'];
        const utils = getIfUtils({}, ['foo', 'bar']);
        const { ifFoo, ifBar, ifNotFoo, ifNotBar } = utils;
    }

    {
        const { ifProduction } = getIfUtils('production');

        // $ExpectType "value" | "alternate"
        ifProduction('value', 'alternate'); // 'value'
    }
    {
        const { ifNotDev } = getIfUtils({ dev: false });

        // $ExpectType "value" | "alternate"
        ifNotDev('value', 'alternate'); // 'value'
    }
    {
        // $ExpectError
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

    // $ExpectType NonEmptyObject<{ a: number; b: string; c: undefined; d: null; }, "b" | "a" | "d">
    const emptiedObject = removeEmpty({ a: 1, b: 'b', c: undefined, d: null }); // {a: 1, b: 'b', d: null}
    const {a, b, d} = emptiedObject;

    {
        // $ExpectError
        const {a, b, c, d} = emptiedObject; // Error
    }

    // $ExpectType number | null
    const firstItem = emptiedArray[0];
}
