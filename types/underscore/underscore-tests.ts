declare const $: any;
declare const window: any;
declare const alert: (msg: string) => any;
declare const console: {log: any};

_.each([1, 2, 3], (num) => alert(num.toString()));
_.each({ one: 1, two: 2, three: 3 }, (value, key) => alert(value.toString()));

_.map([1, 2, 3], (num) => num * 3);
_.map({ one: 1, two: 2, three: 3 }, (value, key) => value * 3);
let plucked: string[] = _.map([{key: 'apples'}, {key: 'oranges'}], 'key');

//var sum = _.reduce([1, 2, 3], (memo, num) => memo + num, 0);	// https://typescript.codeplex.com/workitem/1960
var sum = _.reduce<number, number>([1, 2, 3], (memo, num) => memo + num, 0);
sum = _.reduce<number, number>([1, 2, 3], (memo, num) => memo + num); // memo is optional #issue 5 github
sum = _.reduce<string, number>({'a':'1', 'b':'2', 'c':'3'}, (memo, numstr) => memo + (+numstr));

var list = [[0, 1], [2, 3], [4, 5]];
//var flat = _.reduceRight(list, (a, b) => a.concat(b), []);	// https://typescript.codeplex.com/workitem/1960
var flat = _.reduceRight<number[], number[]>(list, (a, b) => a.concat(b), []);

// as a breaking change, consider moving functions like isNumber and bind that only make sense to call on single values to ChainSingle (or at least duplicate them there)

// Collection Functions
// as a breaking change, consider creating separate UnderscoreObject and ChainObject interfaces for dictionaries instead of taking both ListIterators and ObjectIterators
// maybe also UnderscoreString and ChainString since each and forEach returns the original string and all iterators get the full string as their third parameter

// each, forEach
{
    const context = {};

    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const iterator = (value: { a: string }, index: number, list: _.List<{ a: string }>) => value.a += 'b';
        let result: { a: string }[];

        result = _.each<{ a: string }>(array, iterator);
        result = _.each<{ a: string }>(array, iterator, context);
        result = _.each(array, iterator);
        result = _.each(array, iterator, context);

        result = _<{ a: string }>(array).each(iterator);
        result = _<{ a: string }>(array).each(iterator, context);
        result = _(array).each(iterator);
        result = _(array).each(iterator, context);

        result = _.chain<{ a: string }>(array).each(iterator).value();
        result = _.chain<{ a: string }>(array).each(iterator, context).value();
        result = _.chain(array).each(iterator).value();
        result = _.chain(array).each(iterator, context).value();

        result = _.forEach<{ a: string }>(array, iterator);
        result = _.forEach<{ a: string }>(array, iterator, context);
        result = _.forEach(array, iterator);
        result = _.forEach(array, iterator, context);

        result = _<{ a: string }>(array).forEach(iterator);
        result = _<{ a: string }>(array).forEach(iterator, context);
        result = _(array).forEach(iterator);
        result = _(array).forEach(iterator, context);

        result = _.chain<{ a: string }>(array).forEach(iterator).value();
        result = _.chain<{ a: string }>(array).forEach(iterator, context).value();
        result = _.chain(array).forEach(iterator).value();
        result = _.chain(array).forEach(iterator, context).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const iterator = (value: { a: string }, index: number, list: _.List<{ a: string }>) => value.a += 'b';
        let result: _.List<{ a: string }>;

        result = _.each<{ a: string }>(list, iterator);
        result = _.each<{ a: string }>(list, iterator, context);
        result = _.each(list, iterator);
        result = _.each(list, iterator, context);

        result = _<{ a: string }>(list).each(iterator);
        result = _<{ a: string }>(list).each(iterator, context);
        result = _(list).each(iterator);
        result = _(list).each(iterator, context);

        result = _.chain<{ a: string }>(list).each(iterator).value();
        result = _.chain<{ a: string }>(list).each(iterator, context).value();
        result = _.chain(list).each(iterator).value();
        result = _.chain(list).each(iterator, context).value();

        result = _.forEach<{ a: string }>(list, iterator);
        result = _.forEach<{ a: string }>(list, iterator, context);
        result = _.forEach(list, iterator);
        result = _.forEach(list, iterator, context);

        result = _<{ a: string }>(list).forEach(iterator);
        result = _<{ a: string }>(list).forEach(iterator, context);
        result = _(list).forEach(iterator);
        result = _(list).forEach(iterator, context);

        result = _.chain<{ a: string }>(list).forEach(iterator).value();
        result = _.chain<{ a: string }>(list).forEach(iterator, context).value();
        result = _.chain(list).forEach(iterator).value();
        result = _.chain(list).forEach(iterator, context).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const iterator = (element: { a: string }, key: string, list: _.Dictionary<{ a: string }>) => element.a += 'b';
        let result: _.Dictionary<{ a: string }>;

        result = _.each<{ a: string }>(dict, iterator);
        result = _.each<{ a: string }>(dict, iterator, context);
        result = _.each(dict, iterator);
        result = _.each(dict, iterator, context);

        result = _<{ a: string }>(dict).each(iterator);
        result = _<{ a: string }>(dict).each(iterator, context);
        result = _(dict).each(iterator);
        result = _(dict).each(iterator, context);

        result = _.chain<{ a: string }>(dict).each(iterator).value();
        result = _.chain<{ a: string }>(dict).each(iterator, context).value();
        result = _.chain(dict).each(iterator).value();
        result = _.chain(dict).each(iterator, context).value();

        result = _.forEach<{ a: string }>(dict, iterator);
        result = _.forEach<{ a: string }>(dict, iterator, context);
        result = _.forEach(dict, iterator);
        result = _.forEach(dict, iterator, context);

        result = _<{ a: string }>(dict).forEach(iterator);
        result = _<{ a: string }>(dict).forEach(iterator, context);
        result = _(dict).forEach(iterator);
        result = _(dict).forEach(iterator, context);

        result = _.chain<{ a: string }>(dict).forEach(iterator).value();
        result = _.chain<{ a: string }>(dict).forEach(iterator, context).value();
        result = _.chain(dict).forEach(iterator).value();
        result = _.chain(dict).forEach(iterator, context).value();
    }
}

// map, collect
{
    const context = {};

    // function iterator
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const iterator = (value: { a: string }, index: number, list: _.List<{ a: string }>) => value.a;
        let result: string[];

        result = _.map<{ a: string }, string>(array, iterator);
        result = _.map<{ a: string }, string>(array, iterator, context);
        result = _.map(array, iterator);
        result = _.map(array, iterator, context);

        result = _<{ a: string }>(array).map<string>(iterator);
        result = _<{ a: string }>(array).map<string>(iterator, context);
        result = _(array).map(iterator);
        result = _(array).map(iterator, context);

        result = _.chain<{ a: string }>(array).map<string>(iterator).value();
        result = _.chain<{ a: string }>(array).map<string>(iterator, context).value();
        result = _.chain(array).map(iterator).value();
        result = _.chain(array).map(iterator, context).value();

        result = _.collect<{ a: string }, string>(array, iterator);
        result = _.collect<{ a: string }, string>(array, iterator, context);
        result = _.collect(array, iterator);
        result = _.collect(array, iterator, context);

        result = _<{ a: string }>(array).collect<string>(iterator);
        result = _<{ a: string }>(array).collect<string>(iterator, context);
        result = _(array).collect(iterator);
        result = _(array).collect(iterator, context);

        result = _.chain<{ a: string }>(array).collect<string>(iterator).value();
        result = _.chain<{ a: string }>(array).collect<string>(iterator, context).value();
        result = _.chain(array).collect(iterator).value();
        result = _.chain(array).collect(iterator, context).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const iterator = (value: { a: string }, index: number, list: _.List<{ a: string }>) => value.a;
        let result: string[];

        result = _.map<{ a: string }, string>(list, iterator);
        result = _.map<{ a: string }, string>(list, iterator, context);
        result = _.map(list, iterator);
        result = _.map(list, iterator, context);

        result = _<{ a: string }>(list).map<string>(iterator);
        result = _<{ a: string }>(list).map<string>(iterator, context);
        result = _(list).map(iterator);
        result = _(list).map(iterator, context);

        result = _.chain<{ a: string }>(list).map<string>(iterator).value();
        result = _.chain<{ a: string }>(list).map<string>(iterator, context).value();
        result = _.chain(list).map(iterator).value();
        result = _.chain(list).map(iterator, context).value();

        result = _.collect<{ a: string }, string>(list, iterator);
        result = _.collect<{ a: string }, string>(list, iterator, context);
        result = _.collect(list, iterator);
        result = _.collect(list, iterator, context);

        result = _<{ a: string }>(list).collect<string>(iterator);
        result = _<{ a: string }>(list).collect<string>(iterator, context);
        result = _(list).collect(iterator);
        result = _(list).collect(iterator, context);

        result = _.chain<{ a: string }>(list).collect<string>(iterator).value();
        result = _.chain<{ a: string }>(list).collect<string>(iterator, context).value();
        result = _.chain(list).collect(iterator).value();
        result = _.chain(list).collect(iterator, context).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const iterator = (element: { a: string }, key: string, list: _.Dictionary<{ a: string }>) => element.a;
        let result: string[];

        result = _.map<{ a: string }, string>(dict, iterator);
        result = _.map<{ a: string }, string>(dict, iterator, context);
        result = _.map(dict, iterator);
        result = _.map(dict, iterator, context);

        result = _<{ a: string }>(dict).map<string>(iterator);
        result = _<{ a: string }>(dict).map<string>(iterator, context);
        result = _(dict).map(iterator);
        result = _(dict).map(iterator, context);

        result = _.chain<{ a: string }>(dict).map<string>(iterator).value();
        result = _.chain<{ a: string }>(dict).map<string>(iterator, context).value();
        result = _.chain(dict).map(iterator).value();
        result = _.chain(dict).map(iterator, context).value();

        result = _.collect<{ a: string }, string>(dict, iterator);
        result = _.collect<{ a: string }, string>(dict, iterator, context);
        result = _.collect(dict, iterator);
        result = _.collect(dict, iterator, context);

        result = _<{ a: string }>(dict).collect<string>(iterator);
        result = _<{ a: string }>(dict).collect<string>(iterator, context);
        result = _(dict).collect(iterator);
        result = _(dict).collect(iterator, context);

        result = _.chain<{ a: string }>(dict).collect<string>(iterator).value();
        result = _.chain<{ a: string }>(dict).collect<string>(iterator, context).value();
        result = _.chain(dict).collect(iterator).value();
        result = _.chain(dict).collect(iterator, context).value();
    }

    {
        const str = 'abc';
        const iterator = (value: string, index: number, list: _.List<string>) => value + 'b';
        let result: string[];

        result = _.map<string, string>(str, iterator);
        result = _.map<string, string>(str, iterator, context);
        result = _.map(str, iterator);
        result = _.map(str, iterator, context);

        result = _<string>(str).map<string>(iterator);
        result = _<string>(str).map<string>(iterator, context);
        result = _(str).map(iterator);
        result = _(str).map(iterator, context);

        result = _.chain<string>(str).map<string>(iterator).value();
        result = _.chain<string>(str).map<string>(iterator, context).value();
        result = _.chain(str).map(iterator).value();
        result = _.chain(str).map(iterator, context).value();

        result = _.collect<string, string>(str, iterator);
        result = _.collect<string, string>(str, iterator, context);
        result = _.collect(str, iterator);
        result = _.collect(str, iterator, context);

        result = _<string>(str).collect<string>(iterator);
        result = _<string>(str).collect<string>(iterator, context);
        result = _(str).collect(iterator);
        result = _(str).collect(iterator, context);

        result = _.chain<string>(str).collect<string>(iterator).value();
        result = _.chain<string>(str).collect<string>(iterator, context).value();
        result = _.chain(str).collect(iterator).value();
        result = _.chain(str).collect(iterator, context).value();
    }

    // partial object iterator
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const properties = { a: 'a' };
        let result: boolean[];

        result = _.map<{ a: string }>(array, properties);
        result = _.map(array, properties);

        result = _<{ a: string }>(array).map(properties);
        result = _(array).map(properties);

        result = _.chain<{ a: string }>(array).map(properties).value();
        result = _.chain(array).map(properties).value();

        result = _.collect<{ a: string }>(array, properties);
        result = _.collect(array, properties);

        result = _<{ a: string }>(array).collect(properties);
        result = _(array).collect(properties);

        result = _.chain<{ a: string }>(array).collect(properties).value();
        result = _.chain(array).collect(properties).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const properties = { a: 'a' };
        let result: boolean[];

        result = _.map<{ a: string }>(list, properties);
        result = _.map(list, properties);

        result = _<{ a: string }>(list).map(properties);
        result = _(list).map(properties);

        result = _.chain<{ a: string }>(list).map(properties).value();
        result = _.chain(list).map(properties).value();

        result = _.collect<{ a: string }>(list, properties);
        result = _.collect(list, properties);

        result = _<{ a: string }>(list).collect(properties);
        result = _(list).collect(properties);

        result = _.chain<{ a: string }>(list).collect(properties).value();
        result = _.chain(list).collect(properties).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const properties = { a: 'a' };
        let result: boolean[];

        result = _.map<{ a: string }>(dict, properties);
        result = _.map(dict, properties);

        result = _<{ a: string }>(dict).map(properties);
        result = _(dict).map(properties);

        result = _.chain<{ a: string }>(dict).map(properties).value();
        result = _.chain(dict).map(properties).value();

        result = _.collect<{ a: string }>(dict, properties);
        result = _.collect(dict, properties);

        result = _<{ a: string }>(dict).collect(properties);
        result = _(dict).collect(properties);

        result = _.chain<{ a: string }>(dict).collect(properties).value();
        result = _.chain(dict).collect(properties).value();
    }

    // property name iterator
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const property = 'a';
        let result: string[];

        result = _.map<{ a: string }, typeof property>(array, property);
        result = _.map(array, property);

        result = _<{ a: string }>(array).map<typeof property>(property);
        result = _(array).map(property);

        result = _.chain<{ a: string }>(array).map<typeof property>(property).value();
        result = _.chain(array).map(property).value();

        result = _.collect<{ a: string }, typeof property>(array, property);
        result = _.collect(array, property);

        result = _<{ a: string }>(array).collect<typeof property>(property);
        result = _(array).collect(property);

        result = _.chain<{ a: string }>(array).collect<typeof property>(property).value();
        result = _.chain(array).collect(property).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const property = 'a';
        let result: string[];

        result = _.map<{ a: string }, typeof property>(list, property);
        result = _.map(list, property);

        result = _<{ a: string }>(list).map<typeof property>(property);
        result = _(list).map(property);

        result = _.chain<{ a: string }>(list).map<typeof property>(property).value();
        result = _.chain(list).map(property).value();

        result = _.collect<{ a: string }, typeof property>(list, property);
        result = _.collect(list, property);

        result = _<{ a: string }>(list).collect<typeof property>(property);
        result = _(list).collect(property);

        result = _.chain<{ a: string }>(list).collect<typeof property>(property).value();
        result = _.chain(list).collect(property).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const property = 'a';
        let result: string[];

        result = _.map<{ a: string }, typeof property>(dict, property);
        result = _.map(dict, property);

        result = _<{ a: string }>(dict).map<typeof property>(property);
        result = _(dict).map(property);

        result = _.chain<{ a: string }>(dict).map<typeof property>(property).value();
        result = _.chain(dict).map(property).value();

        result = _.collect<{ a: string }, typeof property>(dict, property);
        result = _.collect(dict, property);

        result = _<{ a: string }>(dict).collect<typeof property>(property);
        result = _(dict).collect(property);

        result = _.chain<{ a: string }>(dict).collect<typeof property>(property).value();
        result = _.chain(dict).collect(property).value();
    }
}

// reduce, foldl, inject
{
    const context = {};

    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const iterator = (prev: string, value: { a: string }, index: number, list: _.List<{ a: string }>) => prev + value.a;
        const memo = '';
        let result: string;

        result = _.reduce<{ a: string }, string>(array, iterator, memo);
        result = _.reduce<{ a: string }, string>(array, iterator, memo, context);
        result = _.reduce(array, iterator, memo);
        result = _.reduce(array, iterator, memo, context);

        result = _<{ a: string }>(array).reduce<string>(iterator, memo);
        result = _<{ a: string }>(array).reduce<string>(iterator, memo, context);
        result = _(array).reduce(iterator, memo);
        result = _(array).reduce(iterator, memo, context);

        result = _.chain<{ a: string }>(array).reduce<string>(iterator, memo).value();
        result = _.chain<{ a: string }>(array).reduce<string>(iterator, memo, context).value();
        result = _.chain(array).reduce(iterator, memo).value();
        result = _.chain(array).reduce(iterator, memo, context).value();

        result = _.foldl<{ a: string }, string>(array, iterator, memo);
        result = _.foldl<{ a: string }, string>(array, iterator, memo, context);
        result = _.foldl(array, iterator, memo);
        result = _.foldl(array, iterator, memo, context);

        result = _<{ a: string }>(array).foldl<string>(iterator, memo);
        result = _<{ a: string }>(array).foldl<string>(iterator, memo, context);
        result = _(array).foldl(iterator, memo);
        result = _(array).foldl(iterator, memo, context);

        result = _.chain<{ a: string }>(array).foldl<string>(iterator, memo).value();
        result = _.chain<{ a: string }>(array).foldl<string>(iterator, memo, context).value();
        result = _.chain(array).foldl(iterator, memo).value();
        result = _.chain(array).foldl(iterator, memo, context).value();

        result = _.inject<{ a: string }, string>(array, iterator, memo);
        result = _.inject<{ a: string }, string>(array, iterator, memo, context);
        result = _.inject(array, iterator, memo);
        result = _.inject(array, iterator, memo, context);

        result = _<{ a: string }>(array).inject<string>(iterator, memo);
        result = _<{ a: string }>(array).inject<string>(iterator, memo, context);
        result = _(array).inject(iterator, memo);
        result = _(array).inject(iterator, memo, context);

        result = _.chain<{ a: string }>(array).inject<string>(iterator, memo).value();
        result = _.chain<{ a: string }>(array).inject<string>(iterator, memo, context).value();
        result = _.chain(array).inject(iterator, memo).value();
        result = _.chain(array).inject(iterator, memo, context).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const iterator = (prev: string, value: { a: string }, index: number, list: _.List<{ a: string }>) => prev + value.a;
        const memo = '';
        let result: string;

        result = _.reduce<{ a: string }, string>(list, iterator, memo);
        result = _.reduce<{ a: string }, string>(list, iterator, memo, context);
        result = _.reduce(list, iterator, memo);
        result = _.reduce(list, iterator, memo, context);

        result = _<{ a: string }>(list).reduce<string>(iterator, memo);
        result = _<{ a: string }>(list).reduce<string>(iterator, memo, context);
        result = _(list).reduce(iterator, memo);
        result = _(list).reduce(iterator, memo, context);

        result = _.chain<{ a: string }>(list).reduce<string>(iterator, memo).value();
        result = _.chain<{ a: string }>(list).reduce<string>(iterator, memo, context).value();
        result = _.chain(list).reduce(iterator, memo).value();
        result = _.chain(list).reduce(iterator, memo, context).value();

        result = _.foldl<{ a: string }, string>(list, iterator, memo);
        result = _.foldl<{ a: string }, string>(list, iterator, memo, context);
        result = _.foldl(list, iterator, memo);
        result = _.foldl(list, iterator, memo, context);

        result = _<{ a: string }>(list).foldl<string>(iterator, memo);
        result = _<{ a: string }>(list).foldl<string>(iterator, memo, context);
        result = _(list).foldl(iterator, memo);
        result = _(list).foldl(iterator, memo, context);

        result = _.chain<{ a: string }>(list).foldl<string>(iterator, memo).value();
        result = _.chain<{ a: string }>(list).foldl<string>(iterator, memo, context).value();
        result = _.chain(list).foldl(iterator, memo).value();
        result = _.chain(list).foldl(iterator, memo, context).value();

        result = _.inject<{ a: string }, string>(list, iterator, memo);
        result = _.inject<{ a: string }, string>(list, iterator, memo, context);
        result = _.inject(list, iterator, memo);
        result = _.inject(list, iterator, memo, context);

        result = _<{ a: string }>(list).inject<string>(iterator, memo);
        result = _<{ a: string }>(list).inject<string>(iterator, memo, context);
        result = _(list).inject(iterator, memo);
        result = _(list).inject(iterator, memo, context);

        result = _.chain<{ a: string }>(list).inject<string>(iterator, memo).value();
        result = _.chain<{ a: string }>(list).inject<string>(iterator, memo, context).value();
        result = _.chain(list).inject(iterator, memo).value();
        result = _.chain(list).inject(iterator, memo, context).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const iterator = (prev: string, element: { a: string }, key: string, list: _.Dictionary<{ a: string }>) => prev + element.a;
        const memo = '';
        let result: string;

        result = _.reduce<{ a: string }, string>(dict, iterator, memo);
        result = _.reduce<{ a: string }, string>(dict, iterator, memo, context);
        result = _.reduce(dict, iterator, memo);
        result = _.reduce(dict, iterator, memo, context);

        result = _<{ a: string }>(dict).reduce<string>(iterator, memo);
        result = _<{ a: string }>(dict).reduce<string>(iterator, memo, context);
        result = _(dict).reduce(iterator, memo);
        result = _(dict).reduce(iterator, memo, context);

        result = _.chain<{ a: string }>(dict).reduce<string>(iterator, memo).value();
        result = _.chain<{ a: string }>(dict).reduce<string>(iterator, memo, context).value();
        result = _.chain(dict).reduce(iterator, memo).value();
        result = _.chain(dict).reduce(iterator, memo, context).value();

        result = _.foldl<{ a: string }, string>(dict, iterator, memo);
        result = _.foldl<{ a: string }, string>(dict, iterator, memo, context);
        result = _.foldl(dict, iterator, memo);
        result = _.foldl(dict, iterator, memo, context);

        result = _<{ a: string }>(dict).foldl<string>(iterator, memo);
        result = _<{ a: string }>(dict).foldl<string>(iterator, memo, context);
        result = _(dict).foldl(iterator, memo);
        result = _(dict).foldl(iterator, memo, context);

        result = _.chain<{ a: string }>(dict).foldl<string>(iterator, memo).value();
        result = _.chain<{ a: string }>(dict).foldl<string>(iterator, memo, context).value();
        result = _.chain(dict).foldl(iterator, memo).value();
        result = _.chain(dict).foldl(iterator, memo, context).value();

        result = _.inject<{ a: string }, string>(dict, iterator, memo);
        result = _.inject<{ a: string }, string>(dict, iterator, memo, context);
        result = _.inject(dict, iterator, memo);
        result = _.inject(dict, iterator, memo, context);

        result = _<{ a: string }>(dict).inject<string>(iterator, memo);
        result = _<{ a: string }>(dict).inject<string>(iterator, memo, context);
        result = _(dict).inject(iterator, memo);
        result = _(dict).inject(iterator, memo, context);

        result = _.chain<{ a: string }>(dict).inject<string>(iterator, memo).value();
        result = _.chain<{ a: string }>(dict).inject<string>(iterator, memo, context).value();
        result = _.chain(dict).inject(iterator, memo).value();
        result = _.chain(dict).inject(iterator, memo, context).value();

        result = _.chain<{ a: string }>(dict).inject<string>(iterator, memo).value();
        result = _.chain<{ a: string }>(dict).inject<string>(iterator, memo, context).value();
        result = _.chain(dict).inject(iterator, memo).value();
        result = _.chain(dict).inject(iterator, memo, context).value();
    }

    {
        const str = 'abc';
        const iterator = (prev: _.Dictionary<number>, value: string, index: number, list: _.List<string>) => {
            prev[value] = index;
            return prev;
        };
        const memo: _.Dictionary<number> = {};
        let result: _.Dictionary<number>;

        result = _.reduce<string, _.Dictionary<number>>(str, iterator, memo);
        result = _.reduce<string, _.Dictionary<number>>(str, iterator, memo, context);
        result = _.reduce(str, iterator, memo);
        result = _.reduce(str, iterator, memo, context);

        result = _<string>(str).reduce<_.Dictionary<number>>(iterator, memo);
        result = _<string>(str).reduce<_.Dictionary<number>>(iterator, memo, context);
        result = _(str).reduce(iterator, memo);
        result = _(str).reduce(iterator, memo, context);

        result = _.chain<string>(str).reduce<_.Dictionary<number>>(iterator, memo).value();
        result = _.chain<string>(str).reduce<_.Dictionary<number>>(iterator, memo, context).value();
        result = _.chain(str).reduce(iterator, memo).value();
        result = _.chain(str).reduce(iterator, memo, context).value();

        result = _.foldl<string, _.Dictionary<number>>(str, iterator, memo);
        result = _.foldl<string, _.Dictionary<number>>(str, iterator, memo, context);
        result = _.foldl(str, iterator, memo);
        result = _.foldl(str, iterator, memo, context);

        result = _<string>(str).foldl<_.Dictionary<number>>(iterator, memo);
        result = _<string>(str).foldl<_.Dictionary<number>>(iterator, memo, context);
        result = _(str).foldl(iterator, memo);
        result = _(str).foldl(iterator, memo, context);

        result = _.chain<string>(str).foldl<_.Dictionary<number>>(iterator, memo).value();
        result = _.chain<string>(str).foldl<_.Dictionary<number>>(iterator, memo, context).value();
        result = _.chain(str).foldl(iterator, memo).value();
        result = _.chain(str).foldl(iterator, memo, context).value();

        result = _.inject<string, _.Dictionary<number>>(str, iterator, memo);
        result = _.inject<string, _.Dictionary<number>>(str, iterator, memo, context);
        result = _.inject(str, iterator, memo);
        result = _.inject(str, iterator, memo, context);

        result = _<string>(str).inject<_.Dictionary<number>>(iterator, memo);
        result = _<string>(str).inject<_.Dictionary<number>>(iterator, memo, context);
        result = _(str).inject(iterator, memo);
        result = _(str).inject(iterator, memo, context);

        result = _.chain<string>(str).inject<_.Dictionary<number>>(iterator, memo).value();
        result = _.chain<string>(str).inject<_.Dictionary<number>>(iterator, memo, context).value();
        result = _.chain(str).inject(iterator, memo).value();
        result = _.chain(str).inject(iterator, memo, context).value();
    }
}

// reduceRight, foldr
{
    const context = {};

    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const iterator = (prev: string, value: { a: string }, index: number, list: _.List<{ a: string }>) => prev + value.a;
        const memo = '';
        let result: string;

        result = _.reduceRight<{ a: string }, string>(array, iterator, memo);
        result = _.reduceRight<{ a: string }, string>(array, iterator, memo, context);
        result = _.reduceRight(array, iterator, memo);
        result = _.reduceRight(array, iterator, memo, context);

        result = _<{ a: string }>(array).reduceRight<string>(iterator, memo);
        result = _<{ a: string }>(array).reduceRight<string>(iterator, memo, context);
        result = _(array).reduceRight(iterator, memo);
        result = _(array).reduceRight(iterator, memo, context);

        result = _.chain<{ a: string }>(array).reduceRight<string>(iterator, memo).value();
        result = _.chain<{ a: string }>(array).reduceRight<string>(iterator, memo, context).value();
        result = _.chain(array).reduceRight(iterator, memo).value();
        result = _.chain(array).reduceRight(iterator, memo, context).value();

        result = _.foldr<{ a: string }, string>(array, iterator, memo);
        result = _.foldr<{ a: string }, string>(array, iterator, memo, context);
        result = _.foldr(array, iterator, memo);
        result = _.foldr(array, iterator, memo, context);

        result = _<{ a: string }>(array).foldr<string>(iterator, memo);
        result = _<{ a: string }>(array).foldr<string>(iterator, memo, context);
        result = _(array).foldr(iterator, memo);
        result = _(array).foldr(iterator, memo, context);

        result = _.chain<{ a: string }>(array).foldr<string>(iterator, memo).value();
        result = _.chain<{ a: string }>(array).foldr<string>(iterator, memo, context).value();
        result = _.chain(array).foldr(iterator, memo).value();
        result = _.chain(array).foldr(iterator, memo, context).value();

        result = _.chain<{ a: string }>(array).foldr<string>(iterator, memo).value();
        result = _.chain<{ a: string }>(array).foldr<string>(iterator, memo, context).value();
        result = _.chain(array).foldr(iterator, memo).value();
        result = _.chain(array).foldr(iterator, memo, context).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const iterator = (prev: string, value: { a: string }, index: number, list: _.List<{ a: string }>) => prev + value.a;
        const memo = '';
        let result: string;

        result = _.reduceRight<{ a: string }, string>(list, iterator, memo);
        result = _.reduceRight<{ a: string }, string>(list, iterator, memo, context);
        result = _.reduceRight(list, iterator, memo);
        result = _.reduceRight(list, iterator, memo, context);

        result = _<{ a: string }>(list).reduceRight<string>(iterator, memo);
        result = _<{ a: string }>(list).reduceRight<string>(iterator, memo, context);
        result = _(list).reduceRight(iterator, memo);
        result = _(list).reduceRight(iterator, memo, context);

        result = _.chain<{ a: string }>(list).reduceRight<string>(iterator, memo).value();
        result = _.chain<{ a: string }>(list).reduceRight<string>(iterator, memo, context).value();
        result = _.chain(list).reduceRight(iterator, memo).value();
        result = _.chain(list).reduceRight(iterator, memo, context).value();

        result = _.foldr<{ a: string }, string>(list, iterator, memo);
        result = _.foldr<{ a: string }, string>(list, iterator, memo, context);
        result = _.foldr(list, iterator, memo);
        result = _.foldr(list, iterator, memo, context);

        result = _<{ a: string }>(list).foldr<string>(iterator, memo);
        result = _<{ a: string }>(list).foldr<string>(iterator, memo, context);
        result = _(list).foldr(iterator, memo);
        result = _(list).foldr(iterator, memo, context);

        result = _.chain<{ a: string }>(list).foldr<string>(iterator, memo).value();
        result = _.chain<{ a: string }>(list).foldr<string>(iterator, memo, context).value();
        result = _.chain(list).foldr(iterator, memo).value();
        result = _.chain(list).foldr(iterator, memo, context).value();

        result = _.chain<{ a: string }>(list).foldr<string>(iterator, memo).value();
        result = _.chain<{ a: string }>(list).foldr<string>(iterator, memo, context).value();
        result = _.chain(list).foldr(iterator, memo).value();
        result = _.chain(list).foldr(iterator, memo, context).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const iterator = (prev: string, element: { a: string }, key: string, list: _.Dictionary<{ a: string }>) => prev + element.a;
        const memo = '';
        let result: string;

        result = _.reduceRight<{ a: string }, string>(dict, iterator, memo);
        result = _.reduceRight<{ a: string }, string>(dict, iterator, memo, context);
        result = _.reduceRight(dict, iterator, memo);
        result = _.reduceRight(dict, iterator, memo, context);

        result = _<{ a: string }>(dict).reduceRight<string>(iterator, memo);
        result = _<{ a: string }>(dict).reduceRight<string>(iterator, memo, context);
        result = _(dict).reduceRight(iterator, memo);
        result = _(dict).reduceRight(iterator, memo, context);

        result = _.chain<{ a: string }>(dict).reduceRight<string>(iterator, memo).value();
        result = _.chain<{ a: string }>(dict).reduceRight<string>(iterator, memo, context).value();
        result = _.chain(dict).reduceRight(iterator, memo).value();
        result = _.chain(dict).reduceRight(iterator, memo, context).value();

        result = _.foldr<{ a: string }, string>(dict, iterator, memo);
        result = _.foldr<{ a: string }, string>(dict, iterator, memo, context);
        result = _.foldr(dict, iterator, memo);
        result = _.foldr(dict, iterator, memo, context);

        result = _<{ a: string }>(dict).foldr<string>(iterator, memo);
        result = _<{ a: string }>(dict).foldr<string>(iterator, memo, context);
        result = _(dict).foldr(iterator, memo);
        result = _(dict).foldr(iterator, memo, context);

        result = _.chain<{ a: string }>(dict).foldr<string>(iterator, memo).value();
        result = _.chain<{ a: string }>(dict).foldr<string>(iterator, memo, context).value();
        result = _.chain(dict).foldr(iterator, memo).value();
        result = _.chain(dict).foldr(iterator, memo, context).value();

        result = _.chain<{ a: string }>(dict).foldr<string>(iterator, memo).value();
        result = _.chain<{ a: string }>(dict).foldr<string>(iterator, memo, context).value();
        result = _.chain(dict).foldr(iterator, memo).value();
        result = _.chain(dict).foldr(iterator, memo, context).value();
    }

    {
        const str = 'abc';
        const iterator = (prev: _.Dictionary<number>, value: string, index: number, list: _.List<string>) => {
            prev[value] = index;
            return prev;
        };
        const memo: _.Dictionary<number> = {};
        let result: _.Dictionary<number>;

        result = _.reduceRight<string, _.Dictionary<number>>(str, iterator, memo);
        result = _.reduceRight<string, _.Dictionary<number>>(str, iterator, memo, context);
        result = _.reduceRight(str, iterator, memo);
        result = _.reduceRight(str, iterator, memo, context);

        result = _<string>(str).reduceRight<_.Dictionary<number>>(iterator, memo);
        result = _<string>(str).reduceRight<_.Dictionary<number>>(iterator, memo, context);
        result = _(str).reduceRight(iterator, memo);
        result = _(str).reduceRight(iterator, memo, context);

        result = _.chain<string>(str).reduceRight<_.Dictionary<number>>(iterator, memo).value();
        result = _.chain<string>(str).reduceRight<_.Dictionary<number>>(iterator, memo, context).value();
        result = _.chain(str).reduceRight(iterator, memo).value();
        result = _.chain(str).reduceRight(iterator, memo, context).value();

        result = _.foldr<string, _.Dictionary<number>>(str, iterator, memo);
        result = _.foldr<string, _.Dictionary<number>>(str, iterator, memo, context);
        result = _.foldr(str, iterator, memo);
        result = _.foldr(str, iterator, memo, context);

        result = _<string>(str).foldr<_.Dictionary<number>>(iterator, memo);
        result = _<string>(str).foldr<_.Dictionary<number>>(iterator, memo, context);
        result = _(str).foldr(iterator, memo);
        result = _(str).foldr(iterator, memo, context);

        result = _.chain<string>(str).foldr<_.Dictionary<number>>(iterator, memo).value();
        result = _.chain<string>(str).foldr<_.Dictionary<number>>(iterator, memo, context).value();
        result = _.chain(str).foldr(iterator, memo).value();
        result = _.chain(str).foldr(iterator, memo, context).value();
    }
}

// find, detect
{
    const context = {};

    // function iterator
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const iterator = (value: {a: string}, index: number, list: _.List<{a: string}>) => value.a === 'b';
        let result: {a: string} | undefined;

        result = _.find<{ a: string }>(array, iterator);
        result = _.find<{ a: string }>(array, iterator, context);
        result = _.find(array, iterator);
        result = _.find(array, iterator, context);

        result = _<{ a: string }>(array).find(iterator);
        result = _<{ a: string }>(array).find(iterator, context);
        result = _(array).find(iterator);
        result = _(array).find(iterator, context);

        result = _.chain<{ a: string }>(array).find(iterator).value();
        result = _.chain<{ a: string }>(array).find(iterator, context).value();
        result = _.chain(array).find(iterator).value();
        result = _.chain(array).find(iterator, context).value();

        result = _.detect<{ a: string }>(array, iterator);
        result = _.detect<{ a: string }>(array, iterator, context);
        result = _.detect(array, iterator);
        result = _.detect(array, iterator, context);

        result = _<{ a: string }>(array).detect(iterator);
        result = _<{ a: string }>(array).detect(iterator, context);
        result = _(array).detect(iterator);
        result = _(array).detect(iterator, context);

        result = _.chain<{ a: string }>(array).detect(iterator).value();
        result = _.chain<{ a: string }>(array).detect(iterator, context).value();
        result = _.chain(array).detect(iterator).value();
        result = _.chain(array).detect(iterator, context).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const iterator = (value: { a: string }, index: number, list: _.List<{ a: string }>) => value.a === 'b';
        let result: { a: string } | undefined;

        result = _.find<{ a: string }>(list, iterator);
        result = _.find<{ a: string }>(list, iterator, context);
        result = _.find(list, iterator);
        result = _.find(list, iterator, context);

        result = _<{ a: string }>(list).find(iterator);
        result = _<{ a: string }>(list).find(iterator, context);
        result = _(list).find(iterator);
        result = _(list).find(iterator, context);

        result = _.chain<{ a: string }>(list).find(iterator).value();
        result = _.chain<{ a: string }>(list).find(iterator, context).value();
        result = _.chain(list).find(iterator).value();
        result = _.chain(list).find(iterator, context).value();

        result = _.detect<{ a: string }>(list, iterator);
        result = _.detect<{ a: string }>(list, iterator, context);
        result = _.detect(list, iterator);
        result = _.detect(list, iterator, context);

        result = _<{ a: string }>(list).detect(iterator);
        result = _<{ a: string }>(list).detect(iterator, context);
        result = _(list).detect(iterator);
        result = _(list).detect(iterator, context);

        result = _.chain<{ a: string }>(list).detect(iterator).value();
        result = _.chain<{ a: string }>(list).detect(iterator, context).value();
        result = _.chain(list).detect(iterator).value();
        result = _.chain(list).detect(iterator, context).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const iterator = (element: { a: string }, key: string, list: _.Dictionary<{ a: string }>) => element.a === 'b';
        let result: { a: string } | undefined;

        result = _.find<{ a: string }>(dict, iterator);
        result = _.find<{ a: string }>(dict, iterator, context);
        result = _.find(dict, iterator);
        result = _.find(dict, iterator, context);

        result = _<{ a: string }>(dict).find(iterator);
        result = _<{ a: string }>(dict).find(iterator, context);
        result = _(dict).find(iterator);
        result = _(dict).find(iterator, context);

        result = _.chain<{ a: string }>(dict).find(iterator).value();
        result = _.chain<{ a: string }>(dict).find(iterator, context).value();
        result = _.chain(dict).find(iterator).value();
        result = _.chain(dict).find(iterator, context).value();

        result = _.detect<{ a: string }>(dict, iterator);
        result = _.detect<{ a: string }>(dict, iterator, context);
        result = _.detect(dict, iterator);
        result = _.detect(dict, iterator, context);

        result = _<{ a: string }>(dict).detect(iterator);
        result = _<{ a: string }>(dict).detect(iterator, context);
        result = _(dict).detect(iterator);
        result = _(dict).detect(iterator, context);

        result = _.chain<{ a: string }>(dict).detect(iterator).value();
        result = _.chain<{ a: string }>(dict).detect(iterator, context).value();
        result = _.chain(dict).detect(iterator).value();
        result = _.chain(dict).detect(iterator, context).value();
    }

    {
        const str = 'abc';
        const iterator = (value: string, index: number, list: _.List<string>) => value === 'b';
        let result: string | undefined;

        result = _.find<string>(str, iterator);
        result = _.find<string>(str, iterator, context);
        result = _.find(str, iterator);
        result = _.find(str, iterator, context);

        result = _<string>(str).find(iterator);
        result = _<string>(str).find(iterator, context);
        result = _(str).find(iterator);
        result = _(str).find(iterator, context);

        result = _.chain<string>(str).find(iterator).value();
        result = _.chain<string>(str).find(iterator, context).value();
        result = _.chain(str).find(iterator).value();
        result = _.chain(str).find(iterator, context).value();

        result = _.detect<string>(str, iterator);
        result = _.detect<string>(str, iterator, context);
        result = _.detect(str, iterator);
        result = _.detect(str, iterator, context);

        result = _<string>(str).detect(iterator);
        result = _<string>(str).detect(iterator, context);
        result = _(str).detect(iterator);
        result = _(str).detect(iterator, context);

        result = _.chain<string>(str).detect(iterator).value();
        result = _.chain<string>(str).detect(iterator, context).value();
        result = _.chain(str).detect(iterator).value();
        result = _.chain(str).detect(iterator, context).value();
    }

    // partial object iterator
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const properties = { a: 'b' };
        let result: { a: string } | undefined;

        result = _.find<{ a: string }>(array, properties);
        result = _.find(array, properties);

        result = _<{ a: string }>(array).find(properties);
        result = _(array).find(properties);

        result = _.chain<{ a: string }>(array).find(properties).value();
        result = _.chain(array).find(properties).value();

        result = _.detect<{ a: string }>(array, properties);
        result = _.detect(array, properties);

        result = _<{ a: string }>(array).detect(properties);
        result = _(array).detect(properties);

        result = _.chain<{ a: string }>(array).detect(properties).value();
        result = _.chain(array).detect(properties).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const properties = { a: 'b' };
        let result: { a: string } | undefined;

        result = _.find<{ a: string }>(list, properties);
        result = _.find(list, properties);

        result = _<{ a: string }>(list).find(properties);
        result = _(list).find(properties);

        result = _.chain<{ a: string }>(list).find(properties).value();
        result = _.chain(list).find(properties).value();

        result = _.detect<{ a: string }>(list, properties);
        result = _.detect(list, properties);

        result = _<{ a: string }>(list).detect(properties);
        result = _(list).detect(properties);

        result = _.chain<{ a: string }>(list).detect(properties).value();
        result = _.chain(list).detect(properties).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const properties = { a: 'b' };
        let result: { a: string } | undefined;

        result = _.find<{ a: string }>(dict, properties);
        result = _.find(dict, properties);

        result = _<{ a: string }>(dict).find(properties);
        result = _(dict).find(properties);

        result = _.chain<{ a: string }>(dict).find(properties).value();
        result = _.chain(dict).find(properties).value();

        result = _.detect<{ a: string }>(dict, properties);
        result = _.detect(dict, properties);

        result = _<{ a: string }>(dict).detect(properties);
        result = _(dict).detect(properties);

        result = _.chain<{ a: string }>(dict).detect(properties).value();
        result = _.chain(dict).detect(properties).value();
    }

    // property name iterator
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const property = 'a';
        let result: { a: string } | undefined;

        result = _.find<{ a: string }>(array, property);
        result = _.find(array, property);

        result = _<{ a: string }>(array).find(property);
        result = _(array).find(property);

        result = _.chain<{ a: string }>(array).find(property).value();
        result = _.chain(array).find(property).value();

        result = _.detect<{ a: string }>(array, property);
        result = _.detect(array, property);

        result = _<{ a: string }>(array).detect(property);
        result = _(array).detect(property);

        result = _.chain<{ a: string }>(array).detect(property).value();
        result = _.chain(array).detect(property).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const property = 'a';
        let result: { a: string } | undefined;

        result = _.find<{ a: string }>(list, property);
        result = _.find(list, property);

        result = _<{ a: string }>(list).find(property);
        result = _(list).find(property);

        result = _.chain<{ a: string }>(list).find(property).value();
        result = _.chain(list).find(property).value();

        result = _.detect<{ a: string }>(list, property);
        result = _.detect(list, property);

        result = _<{ a: string }>(list).detect(property);
        result = _(list).detect(property);

        result = _.chain<{ a: string }>(list).detect(property).value();
        result = _.chain(list).detect(property).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const property = 'a';
        let result: { a: string } | undefined;

        result = _.find<{ a: string }>(dict, property);
        result = _.find(dict, property);

        result = _<{ a: string }>(dict).find(property);
        result = _(dict).find(property);

        result = _.chain<{ a: string }>(dict).find(property).value();
        result = _.chain(dict).find(property).value();

        result = _.detect<{ a: string }>(dict, property);
        result = _.detect(dict, property);

        result = _<{ a: string }>(dict).detect(property);
        result = _(dict).detect(property);

        result = _.chain<{ a: string }>(dict).detect(property).value();
        result = _.chain(dict).detect(property).value();
    }
}

// filter, select
{
    const context = {};

    // function iterator
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const iterator = (value: { a: string }, index: number, list: _.List<{ a: string }>) => value.a === 'b';
        let result: { a: string }[];

        result = _.filter<{ a: string }>(array, iterator);
        result = _.filter<{ a: string }>(array, iterator, context);
        result = _.filter(array, iterator);
        result = _.filter(array, iterator, context);

        result = _<{ a: string }>(array).filter(iterator);
        result = _<{ a: string }>(array).filter(iterator, context);
        result = _(array).filter(iterator);
        result = _(array).filter(iterator, context);

        result = _.chain<{ a: string }>(array).filter(iterator).value();
        result = _.chain<{ a: string }>(array).filter(iterator, context).value();
        result = _.chain(array).filter(iterator).value();
        result = _.chain(array).filter(iterator, context).value();

        result = _.select<{ a: string }>(array, iterator);
        result = _.select<{ a: string }>(array, iterator, context);
        result = _.select(array, iterator);
        result = _.select(array, iterator, context);

        result = _<{ a: string }>(array).select(iterator);
        result = _<{ a: string }>(array).select(iterator, context);
        result = _(array).select(iterator);
        result = _(array).select(iterator, context);

        result = _.chain<{ a: string }>(array).select(iterator).value();
        result = _.chain<{ a: string }>(array).select(iterator, context).value();
        result = _.chain(array).select(iterator).value();
        result = _.chain(array).select(iterator, context).value();

        result = _.chain<{ a: string }>(array).select(iterator).value();
        result = _.chain<{ a: string }>(array).select(iterator, context).value();
        result = _.chain(array).select(iterator).value();
        result = _.chain(array).select(iterator, context).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const iterator = (value: { a: string }, index: number, list: _.List<{ a: string }>) => value.a === 'b';
        let result: { a: string }[];

        result = _.filter<{ a: string }>(list, iterator);
        result = _.filter<{ a: string }>(list, iterator, context);
        result = _.filter(list, iterator);
        result = _.filter(list, iterator, context);

        result = _<{ a: string }>(list).filter(iterator);
        result = _<{ a: string }>(list).filter(iterator, context);
        result = _(list).filter(iterator);
        result = _(list).filter(iterator, context);

        result = _.chain<{ a: string }>(list).filter(iterator).value();
        result = _.chain<{ a: string }>(list).filter(iterator, context).value();
        result = _.chain(list).filter(iterator).value();
        result = _.chain(list).filter(iterator, context).value();

        result = _.select<{ a: string }>(list, iterator);
        result = _.select<{ a: string }>(list, iterator, context);
        result = _.select(list, iterator);
        result = _.select(list, iterator, context);

        result = _<{ a: string }>(list).select(iterator);
        result = _<{ a: string }>(list).select(iterator, context);
        result = _(list).select(iterator);
        result = _(list).select(iterator, context);

        result = _.chain<{ a: string }>(list).select(iterator).value();
        result = _.chain<{ a: string }>(list).select(iterator, context).value();
        result = _.chain(list).select(iterator).value();
        result = _.chain(list).select(iterator, context).value();

        result = _.chain<{ a: string }>(list).select(iterator).value();
        result = _.chain<{ a: string }>(list).select(iterator, context).value();
        result = _.chain(list).select(iterator).value();
        result = _.chain(list).select(iterator, context).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const iterator = (element: { a: string }, key: string, list: _.Dictionary<{ a: string }>) => element.a === 'b';
        let result: { a: string }[];

        result = _.filter<{ a: string }>(dict, iterator);
        result = _.filter<{ a: string }>(dict, iterator, context);
        result = _.filter(dict, iterator);
        result = _.filter(dict, iterator, context);

        result = _<{ a: string }>(dict).filter(iterator);
        result = _<{ a: string }>(dict).filter(iterator, context);
        result = _(dict).filter(iterator);
        result = _(dict).filter(iterator, context);

        result = _.chain<{ a: string }>(dict).filter(iterator).value();
        result = _.chain<{ a: string }>(dict).filter(iterator, context).value();
        result = _.chain(dict).filter(iterator).value();
        result = _.chain(dict).filter(iterator, context).value();

        result = _.select<{ a: string }>(dict, iterator);
        result = _.select<{ a: string }>(dict, iterator, context);
        result = _.select(dict, iterator);
        result = _.select(dict, iterator, context);

        result = _<{ a: string }>(dict).select(iterator);
        result = _<{ a: string }>(dict).select(iterator, context);
        result = _(dict).select(iterator);
        result = _(dict).select(iterator, context);

        result = _.chain<{ a: string }>(dict).select(iterator).value();
        result = _.chain<{ a: string }>(dict).select(iterator, context).value();
        result = _.chain(dict).select(iterator).value();
        result = _.chain(dict).select(iterator, context).value();

        result = _.chain<{ a: string }>(dict).select(iterator).value();
        result = _.chain<{ a: string }>(dict).select(iterator, context).value();
        result = _.chain(dict).select(iterator).value();
        result = _.chain(dict).select(iterator, context).value();
    }

    {
        const str = 'abc';
        const iterator = (value: string, index: number, list: _.List<string>) => value === 'b';
        let result: string[];

        result = _.filter<string>(str, iterator);
        result = _.filter<string>(str, iterator, context);
        result = _.filter(str, iterator);
        result = _.filter(str, iterator, context);

        result = _<string>(str).filter(iterator);
        result = _<string>(str).filter(iterator, context);
        result = _(str).filter(iterator);
        result = _(str).filter(iterator, context);

        result = _.chain<string>(str).filter(iterator).value();
        result = _.chain<string>(str).filter(iterator, context).value();
        result = _.chain(str).filter(iterator).value();
        result = _.chain(str).filter(iterator, context).value();

        result = _.select<string>(str, iterator);
        result = _.select<string>(str, iterator, context);
        result = _.select(str, iterator);
        result = _.select(str, iterator, context);

        result = _<string>(str).select(iterator);
        result = _<string>(str).select(iterator, context);
        result = _(str).select(iterator);
        result = _(str).select(iterator, context);

        result = _.chain<string>(str).select(iterator).value();
        result = _.chain<string>(str).select(iterator, context).value();
        result = _.chain(str).select(iterator).value();
        result = _.chain(str).select(iterator, context).value();
    }

    // partial object iterator
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const properties = { a: 'b' };
        let result: { a: string }[];

        result = _.filter<{ a: string }>(array, properties);
        result = _.filter(array, properties);

        result = _<{ a: string }>(array).filter(properties);
        result = _(array).filter(properties);

        result = _.chain<{ a: string }>(array).filter(properties).value();
        result = _.chain(array).filter(properties).value();

        result = _.select<{ a: string }>(array, properties);
        result = _.select(array, properties);

        result = _<{ a: string }>(array).select(properties);
        result = _(array).select(properties);

        result = _.chain<{ a: string }>(array).select(properties).value();
        result = _.chain(array).select(properties).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const properties = { a: 'b' };
        let result: { a: string }[];

        result = _.filter<{ a: string }>(list, properties);
        result = _.filter(list, properties);

        result = _<{ a: string }>(list).filter(properties);
        result = _(list).filter(properties);

        result = _.chain<{ a: string }>(list).filter(properties).value();
        result = _.chain(list).filter(properties).value();

        result = _.select<{ a: string }>(list, properties);
        result = _.select(list, properties);

        result = _<{ a: string }>(list).select(properties);
        result = _(list).select(properties);

        result = _.chain<{ a: string }>(list).select(properties).value();
        result = _.chain(list).select(properties).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const properties = { a: 'b' };
        let result: { a: string }[];

        result = _.filter<{ a: string }>(dict, properties);
        result = _.filter(dict, properties);

        result = _<{ a: string }>(dict).filter(properties);
        result = _(dict).filter(properties);

        result = _.chain<{ a: string }>(dict).filter(properties).value();
        result = _.chain(dict).filter(properties).value();

        result = _.select<{ a: string }>(dict, properties);
        result = _.select(dict, properties);

        result = _<{ a: string }>(dict).select(properties);
        result = _(dict).select(properties);

        result = _.chain<{ a: string }>(dict).select(properties).value();
        result = _.chain(dict).select(properties).value();
    }

    // property name iterator
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const property = 'a';
        let result: { a: string }[];

        result = _.filter<{ a: string }>(array, property);
        result = _.filter(array, property);

        result = _<{ a: string }>(array).filter(property);
        result = _(array).filter(property);

        result = _.chain<{ a: string }>(array).filter(property).value();
        result = _.chain(array).filter(property).value();

        result = _.select<{ a: string }>(array, property);
        result = _.select(array, property);

        result = _<{ a: string }>(array).select(property);
        result = _(array).select(property);

        result = _.chain<{ a: string }>(array).select(property).value();
        result = _.chain(array).select(property).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const property = 'a';
        let result: { a: string }[];

        result = _.filter<{ a: string }>(list, property);
        result = _.filter(list, property);

        result = _<{ a: string }>(list).filter(property);
        result = _(list).filter(property);

        result = _.chain<{ a: string }>(list).filter(property).value();
        result = _.chain(list).filter(property).value();

        result = _.select<{ a: string }>(list, property);
        result = _.select(list, property);

        result = _<{ a: string }>(list).select(property);
        result = _(list).select(property);

        result = _.chain<{ a: string }>(list).select(property).value();
        result = _.chain(list).select(property).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const property = 'a';
        let result: { a: string }[];

        result = _.filter<{ a: string }>(dict, property);
        result = _.filter(dict, property);

        result = _<{ a: string }>(dict).filter(property);
        result = _(dict).filter(property);

        result = _.chain<{ a: string }>(dict).filter(property).value();
        result = _.chain(dict).filter(property).value();

        result = _.select<{ a: string }>(dict, property);
        result = _.select(dict, property);

        result = _<{ a: string }>(dict).select(property);
        result = _(dict).select(property);

        result = _.chain<{ a: string }>(dict).select(property).value();
        result = _.chain(dict).select(property).value();
    }
}

// where
{
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const properties = { a: 'b' };
        let result: { a: string }[];

        result = _.where<{ a: string }>(array, properties);
        result = _.where(array, properties);

        result = _<{ a: string }>(array).where(properties);
        result = _(array).where(properties);

        result = _.chain<{ a: string }>(array).where(properties).value();
        result = _.chain(array).where(properties).value();

        result = _.chain<{ a: string }>(array).where(properties).value();
        result = _.chain(array).where(properties).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const properties = { a: 'b' };
        let result: { a: string }[];

        result = _.where<{ a: string }>(list, properties);
        result = _.where(list, properties);

        result = _<{ a: string }>(list).where(properties);
        result = _(list).where(properties);

        result = _.chain<{ a: string }>(list).where(properties).value();
        result = _.chain(list).where(properties).value();

        result = _.chain<{ a: string }>(list).where(properties).value();
        result = _.chain(list).where(properties).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const properties = { a: 'b' };
        let result: { a: string }[];

        result = _.where<{ a: string }>(dict, properties);
        result = _.where(dict, properties);

        result = _<{ a: string }>(dict).where(properties);
        result = _(dict).where(properties);

        result = _.chain<{ a: string }>(dict).where(properties).value();
        result = _.chain(dict).where(properties).value();

        result = _.chain<{ a: string }>(dict).where(properties).value();
        result = _.chain(dict).where(properties).value();
    }
}

// findWhere
{
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const properties = { a: 'b' };
        let result: { a: string } | undefined;

        result = _.findWhere<{ a: string }>(array, properties);
        result = _.findWhere(array, properties);

        result = _<{ a: string }>(array).findWhere(properties);
        result = _(array).findWhere(properties);

        result = _.chain<{ a: string }>(array).findWhere(properties).value();
        result = _.chain(array).findWhere(properties).value();

        result = _.chain<{ a: string }>(array).findWhere(properties).value();
        result = _.chain(array).findWhere(properties).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const properties = { a: 'b' };
        let result: { a: string } | undefined;

        result = _.findWhere<{ a: string }>(list, properties);
        result = _.findWhere(list, properties);

        result = _<{ a: string }>(list).findWhere(properties);
        result = _(list).findWhere(properties);

        result = _.chain<{ a: string }>(list).findWhere(properties).value();
        result = _.chain(list).findWhere(properties).value();

        result = _.chain<{ a: string }>(list).findWhere(properties).value();
        result = _.chain(list).findWhere(properties).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const properties = { a: 'b' };
        let result: { a: string } | undefined;

        result = _.findWhere<{ a: string }>(dict, properties);
        result = _.findWhere(dict, properties);

        result = _<{ a: string }>(dict).findWhere(properties);
        result = _(dict).findWhere(properties);

        result = _.chain<{ a: string }>(dict).findWhere(properties).value();
        result = _.chain(dict).findWhere(properties).value();

        result = _.chain<{ a: string }>(dict).findWhere(properties).value();
        result = _.chain(dict).findWhere(properties).value();
    }
}

// reject
{
    const context = {};

    // function iterator
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const iterator = (value: { a: string }, index: number, list: _.List<{ a: string }>) => value.a === 'b';
        let result: { a: string }[];

        result = _.reject<{ a: string }>(array, iterator);
        result = _.reject<{ a: string }>(array, iterator, context);
        result = _.reject(array, iterator);
        result = _.reject(array, iterator, context);

        result = _<{ a: string }>(array).reject(iterator);
        result = _<{ a: string }>(array).reject(iterator, context);
        result = _(array).reject(iterator);
        result = _(array).reject(iterator, context);

        result = _.chain<{ a: string }>(array).reject(iterator).value();
        result = _.chain<{ a: string }>(array).reject(iterator, context).value();
        result = _.chain(array).reject(iterator).value();
        result = _.chain(array).reject(iterator, context).value();

        result = _.chain<{ a: string }>(array).reject(iterator).value();
        result = _.chain<{ a: string }>(array).reject(iterator, context).value();
        result = _.chain(array).reject(iterator).value();
        result = _.chain(array).reject(iterator, context).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const iterator = (value: { a: string }, index: number, list: _.List<{ a: string }>) => value.a === 'b';
        let result: { a: string }[];

        result = _.reject<{ a: string }>(list, iterator);
        result = _.reject<{ a: string }>(list, iterator, context);
        result = _.reject(list, iterator);
        result = _.reject(list, iterator, context);

        result = _<{ a: string }>(list).reject(iterator);
        result = _<{ a: string }>(list).reject(iterator, context);
        result = _(list).reject(iterator);
        result = _(list).reject(iterator, context);

        result = _.chain<{ a: string }>(list).reject(iterator).value();
        result = _.chain<{ a: string }>(list).reject(iterator, context).value();
        result = _.chain(list).reject(iterator).value();
        result = _.chain(list).reject(iterator, context).value();

        result = _.chain<{ a: string }>(list).reject(iterator).value();
        result = _.chain<{ a: string }>(list).reject(iterator, context).value();
        result = _.chain(list).reject(iterator).value();
        result = _.chain(list).reject(iterator, context).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const iterator = (element: { a: string }, key: string, list: _.Dictionary<{ a: string }>) => element.a === 'b';
        let result: { a: string }[];

        result = _.reject<{ a: string }>(dict, iterator);
        result = _.reject<{ a: string }>(dict, iterator, context);
        result = _.reject(dict, iterator);
        result = _.reject(dict, iterator, context);

        result = _<{ a: string }>(dict).reject(iterator);
        result = _<{ a: string }>(dict).reject(iterator, context);
        result = _(dict).reject(iterator);
        result = _(dict).reject(iterator, context);

        result = _.chain<{ a: string }>(dict).reject(iterator).value();
        result = _.chain<{ a: string }>(dict).reject(iterator, context).value();
        result = _.chain(dict).reject(iterator).value();
        result = _.chain(dict).reject(iterator, context).value();

        result = _.chain<{ a: string }>(dict).reject(iterator).value();
        result = _.chain<{ a: string }>(dict).reject(iterator, context).value();
        result = _.chain(dict).reject(iterator).value();
        result = _.chain(dict).reject(iterator, context).value();
    }

    {
        const str = 'abc';
        const iterator = (value: string, index: number, list: _.List<string>) => value === 'b';
        let result: string[];

        result = _.reject<string>(str, iterator);
        result = _.reject<string>(str, iterator, context);
        result = _.reject(str, iterator);
        result = _.reject(str, iterator, context);

        result = _<string>(str).reject(iterator);
        result = _<string>(str).reject(iterator, context);
        result = _(str).reject(iterator);
        result = _(str).reject(iterator, context);

        result = _.chain<string>(str).reject(iterator).value();
        result = _.chain<string>(str).reject(iterator, context).value();
        result = _.chain(str).reject(iterator).value();
        result = _.chain(str).reject(iterator, context).value();
    }

    // partial object iterator
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const properties = { a: 'b' };
        let result: { a: string }[];

        result = _.reject<{ a: string }>(array, properties);
        result = _.reject(array, properties);

        result = _<{ a: string }>(array).reject(properties);
        result = _(array).reject(properties);

        result = _.chain<{ a: string }>(array).reject(properties).value();
        result = _.chain(array).reject(properties).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const properties = { a: 'b' };
        let result: { a: string }[];

        result = _.reject<{ a: string }>(list, properties);
        result = _.reject(list, properties);

        result = _<{ a: string }>(list).reject(properties);
        result = _(list).reject(properties);

        result = _.chain<{ a: string }>(list).reject(properties).value();
        result = _.chain(list).reject(properties).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const properties = { a: 'b' };
        let result: { a: string }[];

        result = _.reject<{ a: string }>(dict, properties);
        result = _.reject(dict, properties);

        result = _<{ a: string }>(dict).reject(properties);
        result = _(dict).reject(properties);

        result = _.chain<{ a: string }>(dict).reject(properties).value();
        result = _.chain(dict).reject(properties).value();
    }

    // property name iterator
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const property = 'a';
        let result: { a: string }[];

        result = _.reject<{ a: string }>(array, property);
        result = _.reject(array, property);

        result = _<{ a: string }>(array).reject(property);
        result = _(array).reject(property);

        result = _.chain<{ a: string }>(array).reject(property).value();
        result = _.chain(array).reject(property).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const property = 'a';
        let result: { a: string }[];

        result = _.reject<{ a: string }>(list, property);
        result = _.reject(list, property);

        result = _<{ a: string }>(list).reject(property);
        result = _(list).reject(property);

        result = _.chain<{ a: string }>(list).reject(property).value();
        result = _.chain(list).reject(property).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const property = 'a';
        let result: { a: string }[];

        result = _.reject<{ a: string }>(dict, property);
        result = _.reject(dict, property);

        result = _<{ a: string }>(dict).reject(property);
        result = _(dict).reject(property);

        result = _.chain<{ a: string }>(dict).reject(property).value();
        result = _.chain(dict).reject(property).value();
    }
}

// every, all
{
    const context = {};

    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const iterator = (value: { a: string }, index: number, list: _.List<{ a: string }>) => value.a === 'b';
        let result: boolean;

        result = _.every<{ a: string }>(array, iterator);
        result = _.every<{ a: string }>(array, iterator, context);
        result = _.every(array, iterator);
        result = _.every(array, iterator, context);

        result = _<{ a: string }>(array).every(iterator);
        result = _<{ a: string }>(array).every(iterator, context);
        result = _(array).every(iterator);
        result = _(array).every(iterator, context);

        result = _.chain<{ a: string }>(array).every(iterator).value();
        result = _.chain<{ a: string }>(array).every(iterator, context).value();
        result = _.chain(array).every(iterator).value();
        result = _.chain(array).every(iterator, context).value();

        result = _.all<{ a: string }>(array, iterator);
        result = _.all<{ a: string }>(array, iterator, context);
        result = _.all(array, iterator);
        result = _.all(array, iterator, context);

        result = _<{ a: string }>(array).all(iterator);
        result = _<{ a: string }>(array).all(iterator, context);
        result = _(array).all(iterator);
        result = _(array).all(iterator, context);

        result = _.chain<{ a: string }>(array).all(iterator).value();
        result = _.chain<{ a: string }>(array).all(iterator, context).value();
        result = _.chain(array).all(iterator).value();
        result = _.chain(array).all(iterator, context).value();

        result = _.chain<{ a: string }>(array).all(iterator).value();
        result = _.chain<{ a: string }>(array).all(iterator, context).value();
        result = _.chain(array).all(iterator).value();
        result = _.chain(array).all(iterator, context).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const iterator = (value: { a: string }, index: number, list: _.List<{ a: string }>) => value.a === 'b';
        let result: boolean;

        result = _.every<{ a: string }>(list, iterator);
        result = _.every<{ a: string }>(list, iterator, context);
        result = _.every(list, iterator);
        result = _.every(list, iterator, context);

        result = _<{ a: string }>(list).every(iterator);
        result = _<{ a: string }>(list).every(iterator, context);
        result = _(list).every(iterator);
        result = _(list).every(iterator, context);

        result = _.chain<{ a: string }>(list).every(iterator).value();
        result = _.chain<{ a: string }>(list).every(iterator, context).value();
        result = _.chain(list).every(iterator).value();
        result = _.chain(list).every(iterator, context).value();

        result = _.all<{ a: string }>(list, iterator);
        result = _.all<{ a: string }>(list, iterator, context);
        result = _.all(list, iterator);
        result = _.all(list, iterator, context);

        result = _<{ a: string }>(list).all(iterator);
        result = _<{ a: string }>(list).all(iterator, context);
        result = _(list).all(iterator);
        result = _(list).all(iterator, context);

        result = _.chain<{ a: string }>(list).all(iterator).value();
        result = _.chain<{ a: string }>(list).all(iterator, context).value();
        result = _.chain(list).all(iterator).value();
        result = _.chain(list).all(iterator, context).value();

        result = _.chain<{ a: string }>(list).all(iterator).value();
        result = _.chain<{ a: string }>(list).all(iterator, context).value();
        result = _.chain(list).all(iterator).value();
        result = _.chain(list).all(iterator, context).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const iterator = (element: { a: string }, key: string, list: _.Dictionary<{ a: string }>) => element.a === 'b';
        let result: boolean;

        result = _.every<{ a: string }>(dict, iterator);
        result = _.every<{ a: string }>(dict, iterator, context);
        result = _.every(dict, iterator);
        result = _.every(dict, iterator, context);

        result = _<{ a: string }>(dict).every(iterator);
        result = _<{ a: string }>(dict).every(iterator, context);
        result = _(dict).every(iterator);
        result = _(dict).every(iterator, context);

        result = _.chain<{ a: string }>(dict).every(iterator).value();
        result = _.chain<{ a: string }>(dict).every(iterator, context).value();
        result = _.chain(dict).every(iterator).value();
        result = _.chain(dict).every(iterator, context).value();

        result = _.all<{ a: string }>(dict, iterator);
        result = _.all<{ a: string }>(dict, iterator, context);
        result = _.all(dict, iterator);
        result = _.all(dict, iterator, context);

        result = _<{ a: string }>(dict).all(iterator);
        result = _<{ a: string }>(dict).all(iterator, context);
        result = _(dict).all(iterator);
        result = _(dict).all(iterator, context);

        result = _.chain<{ a: string }>(dict).all(iterator).value();
        result = _.chain<{ a: string }>(dict).all(iterator, context).value();
        result = _.chain(dict).all(iterator).value();
        result = _.chain(dict).all(iterator, context).value();

        result = _.chain<{ a: string }>(dict).all(iterator).value();
        result = _.chain<{ a: string }>(dict).all(iterator, context).value();
        result = _.chain(dict).all(iterator).value();
        result = _.chain(dict).all(iterator, context).value();
    }

    {
        const str = 'abc';
        const iterator = (value: string, index: number, list: _.List<string>) => value === 'b';
        let result: boolean;

        result = _.every<string>(str, iterator);
        result = _.every<string>(str, iterator, context);
        result = _.every(str, iterator);
        result = _.every(str, iterator, context);

        result = _<string>(str).every(iterator);
        result = _<string>(str).every(iterator, context);
        result = _(str).every(iterator);
        result = _(str).every(iterator, context);

        result = _.chain<string>(str).every(iterator).value();
        result = _.chain<string>(str).every(iterator, context).value();
        result = _.chain(str).every(iterator).value();
        result = _.chain(str).every(iterator, context).value();

        result = _.all<string>(str, iterator);
        result = _.all<string>(str, iterator, context);
        result = _.all(str, iterator);
        result = _.all(str, iterator, context);

        result = _<string>(str).all(iterator);
        result = _<string>(str).all(iterator, context);
        result = _(str).all(iterator);
        result = _(str).all(iterator, context);

        result = _.chain<string>(str).all(iterator).value();
        result = _.chain<string>(str).all(iterator, context).value();
        result = _.chain(str).all(iterator).value();
        result = _.chain(str).all(iterator, context).value();
    }

    // partial object iterator
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const properties = { a: 'b' };
        let result: boolean;

        result = _.every<{ a: string }>(array, properties);
        result = _.every(array, properties);

        result = _<{ a: string }>(array).every(properties);
        result = _(array).every(properties);

        result = _.chain<{ a: string }>(array).every(properties).value();
        result = _.chain(array).every(properties).value();

        result = _.all<{ a: string }>(array, properties);
        result = _.all(array, properties);

        result = _<{ a: string }>(array).all(properties);
        result = _(array).all(properties);

        result = _.chain<{ a: string }>(array).all(properties).value();
        result = _.chain(array).all(properties).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const properties = { a: 'b' };
        let result: boolean;

        result = _.every<{ a: string }>(list, properties);
        result = _.every(list, properties);

        result = _<{ a: string }>(list).every(properties);
        result = _(list).every(properties);

        result = _.chain<{ a: string }>(list).every(properties).value();
        result = _.chain(list).every(properties).value();

        result = _.all<{ a: string }>(list, properties);
        result = _.all(list, properties);

        result = _<{ a: string }>(list).all(properties);
        result = _(list).all(properties);

        result = _.chain<{ a: string }>(list).all(properties).value();
        result = _.chain(list).all(properties).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const properties = { a: 'b' };
        let result: boolean;

        result = _.every<{ a: string }>(dict, properties);
        result = _.every(dict, properties);

        result = _<{ a: string }>(dict).every(properties);
        result = _(dict).every(properties);

        result = _.chain<{ a: string }>(dict).every(properties).value();
        result = _.chain(dict).every(properties).value();

        result = _.all<{ a: string }>(dict, properties);
        result = _.all(dict, properties);

        result = _<{ a: string }>(dict).all(properties);
        result = _(dict).all(properties);

        result = _.chain<{ a: string }>(dict).all(properties).value();
        result = _.chain(dict).all(properties).value();
    }

    // property name iterator
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const property = 'a';
        let result: boolean;

        result = _.every<{ a: string }>(array, property);
        result = _.every(array, property);

        result = _<{ a: string }>(array).every(property);
        result = _(array).every(property);

        result = _.chain<{ a: string }>(array).every(property).value();
        result = _.chain(array).every(property).value();

        result = _.all<{ a: string }>(array, property);
        result = _.all(array, property);

        result = _<{ a: string }>(array).all(property);
        result = _(array).all(property);

        result = _.chain<{ a: string }>(array).all(property).value();
        result = _.chain(array).all(property).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const property = 'a';
        let result: boolean;

        result = _.every<{ a: string }>(list, property);
        result = _.every(list, property);

        result = _<{ a: string }>(list).every(property);
        result = _(list).every(property);

        result = _.chain<{ a: string }>(list).every(property).value();
        result = _.chain(list).every(property).value();

        result = _.all<{ a: string }>(list, property);
        result = _.all(list, property);

        result = _<{ a: string }>(list).all(property);
        result = _(list).all(property);

        result = _.chain<{ a: string }>(list).all(property).value();
        result = _.chain(list).all(property).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const property = 'a';
        let result: boolean;

        result = _.every<{ a: string }>(dict, property);
        result = _.every(dict, property);

        result = _<{ a: string }>(dict).every(property);
        result = _(dict).every(property);

        result = _.chain<{ a: string }>(dict).every(property).value();
        result = _.chain(dict).every(property).value();

        result = _.all<{ a: string }>(dict, property);
        result = _.all(dict, property);

        result = _<{ a: string }>(dict).all(property);
        result = _(dict).all(property);

        result = _.chain<{ a: string }>(dict).all(property).value();
        result = _.chain(dict).all(property).value();
    }
}

// some, any
{
    const context = {};

    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const iterator = (value: { a: string }, index: number, list: _.List<{ a: string }>) => value.a === 'b';
        let result: boolean;

        result = _.some<{ a: string }>(array, iterator);
        result = _.some<{ a: string }>(array, iterator, context);
        result = _.some(array, iterator);
        result = _.some(array, iterator, context);

        result = _<{ a: string }>(array).some(iterator);
        result = _<{ a: string }>(array).some(iterator, context);
        result = _(array).some(iterator);
        result = _(array).some(iterator, context);

        result = _.chain<{ a: string }>(array).some(iterator).value();
        result = _.chain<{ a: string }>(array).some(iterator, context).value();
        result = _.chain(array).some(iterator).value();
        result = _.chain(array).some(iterator, context).value();

        result = _.any<{ a: string }>(array, iterator);
        result = _.any<{ a: string }>(array, iterator, context);
        result = _.any(array, iterator);
        result = _.any(array, iterator, context);

        result = _<{ a: string }>(array).any(iterator);
        result = _<{ a: string }>(array).any(iterator, context);
        result = _(array).any(iterator);
        result = _(array).any(iterator, context);

        result = _.chain<{ a: string }>(array).any(iterator).value();
        result = _.chain<{ a: string }>(array).any(iterator, context).value();
        result = _.chain(array).any(iterator).value();
        result = _.chain(array).any(iterator, context).value();

        result = _.chain<{ a: string }>(array).any(iterator).value();
        result = _.chain<{ a: string }>(array).any(iterator, context).value();
        result = _.chain(array).any(iterator).value();
        result = _.chain(array).any(iterator, context).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const iterator = (value: { a: string }, index: number, list: _.List<{ a: string }>) => value.a === 'b';
        let result: boolean;

        result = _.some<{ a: string }>(list, iterator);
        result = _.some<{ a: string }>(list, iterator, context);
        result = _.some(list, iterator);
        result = _.some(list, iterator, context);

        result = _<{ a: string }>(list).some(iterator);
        result = _<{ a: string }>(list).some(iterator, context);
        result = _(list).some(iterator);
        result = _(list).some(iterator, context);

        result = _.chain<{ a: string }>(list).some(iterator).value();
        result = _.chain<{ a: string }>(list).some(iterator, context).value();
        result = _.chain(list).some(iterator).value();
        result = _.chain(list).some(iterator, context).value();

        result = _.any<{ a: string }>(list, iterator);
        result = _.any<{ a: string }>(list, iterator, context);
        result = _.any(list, iterator);
        result = _.any(list, iterator, context);

        result = _<{ a: string }>(list).any(iterator);
        result = _<{ a: string }>(list).any(iterator, context);
        result = _(list).any(iterator);
        result = _(list).any(iterator, context);

        result = _.chain<{ a: string }>(list).any(iterator).value();
        result = _.chain<{ a: string }>(list).any(iterator, context).value();
        result = _.chain(list).any(iterator).value();
        result = _.chain(list).any(iterator, context).value();

        result = _.chain<{ a: string }>(list).any(iterator).value();
        result = _.chain<{ a: string }>(list).any(iterator, context).value();
        result = _.chain(list).any(iterator).value();
        result = _.chain(list).any(iterator, context).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const iterator = (element: { a: string }, key: string, list: _.Dictionary<{ a: string }>) => element.a === 'b';
        let result: boolean;

        result = _.some<{ a: string }>(dict, iterator);
        result = _.some<{ a: string }>(dict, iterator, context);
        result = _.some(dict, iterator);
        result = _.some(dict, iterator, context);

        result = _<{ a: string }>(dict).some(iterator);
        result = _<{ a: string }>(dict).some(iterator, context);
        result = _(dict).some(iterator);
        result = _(dict).some(iterator, context);

        result = _.chain<{ a: string }>(dict).some(iterator).value();
        result = _.chain<{ a: string }>(dict).some(iterator, context).value();
        result = _.chain(dict).some(iterator).value();
        result = _.chain(dict).some(iterator, context).value();

        result = _.any<{ a: string }>(dict, iterator);
        result = _.any<{ a: string }>(dict, iterator, context);
        result = _.any(dict, iterator);
        result = _.any(dict, iterator, context);

        result = _<{ a: string }>(dict).any(iterator);
        result = _<{ a: string }>(dict).any(iterator, context);
        result = _(dict).any(iterator);
        result = _(dict).any(iterator, context);

        result = _.chain<{ a: string }>(dict).any(iterator).value();
        result = _.chain<{ a: string }>(dict).any(iterator, context).value();
        result = _.chain(dict).any(iterator).value();
        result = _.chain(dict).any(iterator, context).value();

        result = _.chain<{ a: string }>(dict).any(iterator).value();
        result = _.chain<{ a: string }>(dict).any(iterator, context).value();
        result = _.chain(dict).any(iterator).value();
        result = _.chain(dict).any(iterator, context).value();
    }

    {
        const str = 'abc';
        const iterator = (value: string, index: number, list: _.List<string>) => value === 'b';
        let result: boolean;

        result = _.some<string>(str, iterator);
        result = _.some<string>(str, iterator, context);
        result = _.some(str, iterator);
        result = _.some(str, iterator, context);

        result = _<string>(str).some(iterator);
        result = _<string>(str).some(iterator, context);
        result = _(str).some(iterator);
        result = _(str).some(iterator, context);

        result = _.chain<string>(str).some(iterator).value();
        result = _.chain<string>(str).some(iterator, context).value();
        result = _.chain(str).some(iterator).value();
        result = _.chain(str).some(iterator, context).value();

        result = _.any<string>(str, iterator);
        result = _.any<string>(str, iterator, context);
        result = _.any(str, iterator);
        result = _.any(str, iterator, context);

        result = _<string>(str).any(iterator);
        result = _<string>(str).any(iterator, context);
        result = _(str).any(iterator);
        result = _(str).any(iterator, context);

        result = _.chain<string>(str).any(iterator).value();
        result = _.chain<string>(str).any(iterator, context).value();
        result = _.chain(str).any(iterator).value();
        result = _.chain(str).any(iterator, context).value();
    }

    // partial object iterator
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const properties = { a: 'b' };
        let result: boolean;

        result = _.some<{ a: string }>(array, properties);
        result = _.some(array, properties);

        result = _<{ a: string }>(array).some(properties);
        result = _(array).some(properties);

        result = _.chain<{ a: string }>(array).some(properties).value();
        result = _.chain(array).some(properties).value();

        result = _.any<{ a: string }>(array, properties);
        result = _.any(array, properties);

        result = _<{ a: string }>(array).any(properties);
        result = _(array).any(properties);

        result = _.chain<{ a: string }>(array).any(properties).value();
        result = _.chain(array).any(properties).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const properties = { a: 'b' };
        let result: boolean;

        result = _.some<{ a: string }>(list, properties);
        result = _.some(list, properties);

        result = _<{ a: string }>(list).some(properties);
        result = _(list).some(properties);

        result = _.chain<{ a: string }>(list).some(properties).value();
        result = _.chain(list).some(properties).value();

        result = _.any<{ a: string }>(list, properties);
        result = _.any(list, properties);

        result = _<{ a: string }>(list).any(properties);
        result = _(list).any(properties);

        result = _.chain<{ a: string }>(list).any(properties).value();
        result = _.chain(list).any(properties).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const properties = { a: 'b' };
        let result: boolean;

        result = _.some<{ a: string }>(dict, properties);
        result = _.some(dict, properties);

        result = _<{ a: string }>(dict).some(properties);
        result = _(dict).some(properties);

        result = _.chain<{ a: string }>(dict).some(properties).value();
        result = _.chain(dict).some(properties).value();

        result = _.any<{ a: string }>(dict, properties);
        result = _.any(dict, properties);

        result = _<{ a: string }>(dict).any(properties);
        result = _(dict).any(properties);

        result = _.chain<{ a: string }>(dict).any(properties).value();
        result = _.chain(dict).any(properties).value();
    }

    // property name iterator
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const property = 'a';
        let result: boolean;

        result = _.some<{ a: string }>(array, property);
        result = _.some(array, property);

        result = _<{ a: string }>(array).some(property);
        result = _(array).some(property);

        result = _.chain<{ a: string }>(array).some(property).value();
        result = _.chain(array).some(property).value();

        result = _.any<{ a: string }>(array, property);
        result = _.any(array, property);

        result = _<{ a: string }>(array).any(property);
        result = _(array).any(property);

        result = _.chain<{ a: string }>(array).any(property).value();
        result = _.chain(array).any(property).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const property = 'a';
        let result: boolean;

        result = _.some<{ a: string }>(list, property);
        result = _.some(list, property);

        result = _<{ a: string }>(list).some(property);
        result = _(list).some(property);

        result = _.chain<{ a: string }>(list).some(property).value();
        result = _.chain(list).some(property).value();

        result = _.any<{ a: string }>(list, property);
        result = _.any(list, property);

        result = _<{ a: string }>(list).any(property);
        result = _(list).any(property);

        result = _.chain<{ a: string }>(list).any(property).value();
        result = _.chain(list).any(property).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const property = 'a';
        let result: boolean;

        result = _.some<{ a: string }>(dict, property);
        result = _.some(dict, property);

        result = _<{ a: string }>(dict).some(property);
        result = _(dict).some(property);

        result = _.chain<{ a: string }>(dict).some(property).value();
        result = _.chain(dict).some(property).value();

        result = _.any<{ a: string }>(dict, property);
        result = _.any(dict, property);

        result = _<{ a: string }>(dict).any(property);
        result = _(dict).any(property);

        result = _.chain<{ a: string }>(dict).any(property).value();
        result = _.chain(dict).any(property).value();
    }
}

// contains, include, includes
{
    const fromIndex = 1;

    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const value = array[0];
        let result: boolean;

        result = _.contains<{ a: string }>(array, value);
        result = _.contains<{ a: string }>(array, value, fromIndex);
        result = _.contains(array, value);
        result = _.contains(array, value, fromIndex);

        result = _<{ a: string }>(array).contains(value);
        result = _<{ a: string }>(array).contains(value, fromIndex);
        result = _(array).contains(value);
        result = _(array).contains(value, fromIndex);

        result = _.chain<{ a: string }>(array).contains(value).value();
        result = _.chain<{ a: string }>(array).contains(value, fromIndex).value();
        result = _.chain(array).contains(value).value();
        result = _.chain(array).contains(value, fromIndex).value();

        result = _.include<{ a: string }>(array, value);
        result = _.include<{ a: string }>(array, value, fromIndex);
        result = _.include(array, value);
        result = _.include(array, value, fromIndex);

        result = _<{ a: string }>(array).include(value);
        result = _<{ a: string }>(array).include(value, fromIndex);
        result = _(array).include(value);
        result = _(array).include(value, fromIndex);

        result = _.chain<{ a: string }>(array).include(value).value();
        result = _.chain<{ a: string }>(array).include(value, fromIndex).value();
        result = _.chain(array).include(value).value();
        result = _.chain(array).include(value, fromIndex).value();

        result = _.includes<{ a: string }>(array, value);
        result = _.includes<{ a: string }>(array, value, fromIndex);
        result = _.includes(array, value);
        result = _.includes(array, value, fromIndex);

        result = _<{ a: string }>(array).includes(value);
        result = _<{ a: string }>(array).includes(value, fromIndex);
        result = _(array).includes(value);
        result = _(array).includes(value, fromIndex);

        result = _.chain<{ a: string }>(array).includes(value).value();
        result = _.chain<{ a: string }>(array).includes(value, fromIndex).value();
        result = _.chain(array).includes(value).value();
        result = _.chain(array).includes(value, fromIndex).value();

        result = _.chain<{ a: string }>(array).includes(value).value();
        result = _.chain<{ a: string }>(array).includes(value, fromIndex).value();
        result = _.chain(array).includes(value).value();
        result = _.chain(array).includes(value, fromIndex).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const value = list[0];
        let result: boolean;

        result = _.contains<{ a: string }>(list, value);
        result = _.contains<{ a: string }>(list, value, fromIndex);
        result = _.contains(list, value);
        result = _.contains(list, value, fromIndex);

        result = _<{ a: string }>(list).contains(value);
        result = _<{ a: string }>(list).contains(value, fromIndex);
        result = _(list).contains(value);
        result = _(list).contains(value, fromIndex);

        result = _.chain<{ a: string }>(list).contains(value).value();
        result = _.chain<{ a: string }>(list).contains(value, fromIndex).value();
        result = _.chain(list).contains(value).value();
        result = _.chain(list).contains(value, fromIndex).value();

        result = _.include<{ a: string }>(list, value);
        result = _.include<{ a: string }>(list, value, fromIndex);
        result = _.include(list, value);
        result = _.include(list, value, fromIndex);

        result = _<{ a: string }>(list).include(value);
        result = _<{ a: string }>(list).include(value, fromIndex);
        result = _(list).include(value);
        result = _(list).include(value, fromIndex);

        result = _.chain<{ a: string }>(list).include(value).value();
        result = _.chain<{ a: string }>(list).include(value, fromIndex).value();
        result = _.chain(list).include(value).value();
        result = _.chain(list).include(value, fromIndex).value();

        result = _.includes<{ a: string }>(list, value);
        result = _.includes<{ a: string }>(list, value, fromIndex);
        result = _.includes(list, value);
        result = _.includes(list, value, fromIndex);

        result = _<{ a: string }>(list).includes(value);
        result = _<{ a: string }>(list).includes(value, fromIndex);
        result = _(list).includes(value);
        result = _(list).includes(value, fromIndex);

        result = _.chain<{ a: string }>(list).includes(value).value();
        result = _.chain<{ a: string }>(list).includes(value, fromIndex).value();
        result = _.chain(list).includes(value).value();
        result = _.chain(list).includes(value, fromIndex).value();

        result = _.chain<{ a: string }>(list).includes(value).value();
        result = _.chain<{ a: string }>(list).includes(value, fromIndex).value();
        result = _.chain(list).includes(value).value();
        result = _.chain(list).includes(value, fromIndex).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const value = dict['a'];
        let result: boolean;

        result = _.contains<{ a: string }>(dict, value);
        result = _.contains(dict, value);

        result = _<{ a: string }>(dict).contains(value);
        result = _(dict).contains(value);

        result = _.chain<{ a: string }>(dict).contains(value).value();
        result = _.chain(dict).contains(value).value();

        result = _.include<{ a: string }>(dict, value);
        result = _.include(dict, value);

        result = _<{ a: string }>(dict).include(value);
        result = _(dict).include(value);

        result = _.chain<{ a: string }>(dict).include(value).value();
        result = _.chain(dict).include(value).value();

        result = _.includes<{ a: string }>(dict, value);
        result = _.includes(dict, value);

        result = _<{ a: string }>(dict).includes(value);
        result = _(dict).includes(value);

        result = _.chain<{ a: string }>(dict).includes(value).value();
        result = _.chain(dict).includes(value).value();

        result = _.chain<{ a: string }>(dict).includes(value).value();
        result = _.chain(dict).includes(value).value();
    }

    {
        const str = 'abc';
        const value = str[0];
        let result: boolean;

        result = _.contains<string>(str, value);
        result = _.contains<string>(str, value, fromIndex);
        result = _.contains(str, value);
        result = _.contains(str, value, fromIndex);

        result = _<string>(str).contains(value);
        result = _<string>(str).contains(value, fromIndex);
        result = _(str).contains(value);
        result = _(str).contains(value, fromIndex);

        result = _.chain<string>(str).contains(value).value();
        result = _.chain<string>(str).contains(value, fromIndex).value();
        result = _.chain(str).contains(value).value();
        result = _.chain(str).contains(value, fromIndex).value();

        result = _.include<string>(str, value);
        result = _.include<string>(str, value, fromIndex);
        result = _.include(str, value);
        result = _.include(str, value, fromIndex);

        result = _<string>(str).include(value);
        result = _<string>(str).include(value, fromIndex);
        result = _(str).include(value);
        result = _(str).include(value, fromIndex);

        result = _.chain<string>(str).include(value).value();
        result = _.chain<string>(str).include(value, fromIndex).value();
        result = _.chain(str).include(value).value();
        result = _.chain(str).include(value, fromIndex).value();

        result = _.includes<string>(str, value);
        result = _.includes<string>(str, value, fromIndex);
        result = _.includes(str, value);
        result = _.includes(str, value, fromIndex);

        result = _<string>(str).includes(value);
        result = _<string>(str).includes(value, fromIndex);
        result = _(str).includes(value);
        result = _(str).includes(value, fromIndex);

        result = _.chain<string>(str).includes(value).value();
        result = _.chain<string>(str).includes(value, fromIndex).value();
        result = _.chain(str).includes(value).value();
        result = _.chain(str).includes(value, fromIndex).value();
    }
}

// invoke
// once TS 3.6 is reached as a minimum version, as a breaking change, consider updating invoke to be the following:
// type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T];
// invoke<T extends {}, TFunctionProperty extends FunctionPropertyNames<T>>(list: _.List<T>, methodName: TFunctionProperty, ...args: Parameters<T[TFunctionProperty]>): ReturnType<T[TFunctionProperty]>[];
{

    // without parameters
    {
        const functionName = 'func';
        const array: { func: () => number }[] = [{ [functionName]: Math.random }, { [functionName]: Math.random }];
        let result: number[];

        result = _.invoke<{ func: () => number }>(array, functionName);
        result = _.invoke(array, functionName);

        result = _<{ func: () => number }>(array).invoke(functionName);
        result = _(array).invoke(functionName);

        result = _.chain<{ func: () => number }>(array).invoke(functionName).value();
        result = _.chain(array).invoke(functionName).value();

        result = _.chain<{ func: () => number }>(array).invoke(functionName).value();
        result = _.chain(array).invoke(functionName).value();
    }

    {
        const functionName = 'func';
        const list: _.List<{ func: () => number }> = { 0: { [functionName]: Math.random }, 1: { [functionName]: Math.random }, length: 2 };
        let result: number[];

        result = _.invoke<{ func: () => number }>(list, functionName);
        result = _.invoke(list, functionName);

        result = _<{ func: () => number }>(list).invoke(functionName);
        result = _(list).invoke(functionName);

        result = _.chain<{ func: () => number }>(list).invoke(functionName).value();
        result = _.chain(list).invoke(functionName).value();

        result = _.chain<{ func: () => number }>(list).invoke(functionName).value();
        result = _.chain(list).invoke(functionName).value();
    }

    {
        const functionName = 'func';
        const dict: _.Dictionary<{ func: () => number }> = { a: { [functionName]: Math.random }, b: { [functionName]: Math.random } };
        let result: { a: string }[];

        result = _.invoke<{ func: () => number }>(dict, functionName);
        result = _.invoke(dict, functionName);

        result = _<{ func: () => number }>(dict).invoke(functionName);
        result = _(dict).invoke(functionName);

        result = _.chain<{ func: () => number }>(dict).invoke(functionName).value();
        result = _.chain(dict).invoke(functionName).value();

        result = _.chain<{ func: () => number }>(dict).invoke(functionName).value();
        result = _.chain(dict).invoke(functionName).value();
    }

    {
        const functionName = 'trim';
        const str = 'abc';
        let result: string[];

        result = _.invoke<string>(str, functionName);
        result = _.invoke(str, functionName);

        result = _<string>(str).invoke(functionName);
        result = _(str).invoke(functionName);

        result = _.chain<string>(str).invoke(functionName).value();
        result = _.chain(str).invoke(functionName).value();
    }

    // with parameters
    {
        const functionName = 'func';
        const array: { func: (input: number) => number }[] = [{ [functionName]: Math.abs }, { [functionName]: Math.abs }];
        const arg = -1;
        let result: number[];

        result = _.invoke<{ func: (input: number) => number }>(array, functionName, arg);
        result = _.invoke(array, functionName, arg);

        result = _<{ func: (input: number) => number }>(array).invoke(functionName, arg);
        result = _(array).invoke(functionName, arg);

        result = _.chain<{ func: (input: number) => number }>(array).invoke(functionName, arg).value();
        result = _.chain(array).invoke(functionName, arg).value();

        result = _.chain<{ func: (input: number) => number }>(array).invoke(functionName, arg).value();
        result = _.chain(array).invoke(functionName, arg).value();
    }

    {
        const functionName = 'func';
        const list: _.List<{ func: (input: number) => number }> = { 0: { [functionName]: Math.abs }, 1: { [functionName]: Math.abs }, length: 2 };
        const arg = -1;
        let result: number[];

        result = _.invoke<{ func: (input: number) => number }>(list, functionName, arg);
        result = _.invoke(list, functionName, arg);

        result = _<{ func: (input: number) => number }>(list).invoke(functionName, arg);
        result = _(list).invoke(functionName, arg);

        result = _.chain<{ func: (input: number) => number }>(list).invoke(functionName, arg).value();
        result = _.chain(list).invoke(functionName, arg).value();

        result = _.chain<{ func: (input: number) => number }>(list).invoke(functionName, arg).value();
        result = _.chain(list).invoke(functionName, arg).value();
    }

    {
        const functionName = 'func';
        const dict: _.Dictionary<{ func: (input: number) => number }> = { a: { [functionName]: Math.abs }, b: { [functionName]: Math.abs } };
        const arg = -1;
        let result: { a: string }[];

        result = _.invoke<{ func: (input: number) => number }>(dict, functionName, arg);
        result = _.invoke(dict, functionName, arg);

        result = _<{ func: (input: number) => number }>(dict).invoke(functionName, arg);
        result = _(dict).invoke(functionName, arg);

        result = _.chain<{ func: (input: number) => number }>(dict).invoke(functionName, arg).value();
        result = _.chain(dict).invoke(functionName, arg).value();

        result = _.chain<{ func: (input: number) => number }>(dict).invoke(functionName, arg).value();
        result = _.chain(dict).invoke(functionName, arg).value();
    }

    {
        const functionName = 'substring';
        const str = 'abc';
        const arg = 1;
        let result: string[];

        result = _.invoke<string>(str, functionName, arg);
        result = _.invoke(str, functionName, arg);

        result = _<string>(str).invoke(functionName, arg);
        result = _(str).invoke(functionName, arg);

        result = _.chain<string>(str).invoke(functionName, arg).value();
        result = _.chain(str).invoke(functionName, arg).value();
    }
}

// pluck
{
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const property = 'a';
        let result: string[];

        result = _.pluck<{ a: string }, typeof property>(array, property);
        result = _.pluck(array, property);

        result = _<{ a: string }>(array).pluck<typeof property>(property);
        result = _(array).pluck(property);

        result = _.chain<{ a: string }>(array).pluck<typeof property>(property).value();
        result = _.chain(array).pluck(property).value();

        result = _.chain<{ a: string }>(array).pluck<typeof property>(property).value();
        result = _.chain(array).pluck(property).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const property = 'a';
        let result: string[];

        result = _.pluck<{ a: string }, typeof property>(list, property);
        result = _.pluck(list, property);

        result = _<{ a: string }>(list).pluck<typeof property>(property);
        result = _(list).pluck(property);

        result = _.chain<{ a: string }>(list).pluck<typeof property>(property).value();
        result = _.chain(list).pluck(property).value();

        result = _.chain<{ a: string }>(list).pluck<typeof property>(property).value();
        result = _.chain(list).pluck(property).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const property = 'a';
        let result: string[];

        result = _.pluck<{ a: string }, typeof property>(dict, property);
        result = _.pluck(dict, property);

        result = _<{ a: string }>(dict).pluck<typeof property>(property);
        result = _(dict).pluck(property);

        result = _.chain<{ a: string }>(dict).pluck<typeof property>(property).value();
        result = _.chain(dict).pluck(property).value();

        result = _.chain<{ a: string }>(dict).pluck<typeof property>(property).value();
        result = _.chain(dict).pluck(property).value();
    }
}

// max
// as a breaking change, consider making the return type for the version of max that takes an iterator T | number
// since an empty collection will result in -Infinity
// as a breaking change, consider updating the overloads of max to take iterators with number results instead of any
// since the only other type that doesn't yield -Infinity is booleans, which isn't a terribly interesting case
{
    // without iterator
    {
        const array: number[] = [0, 1];
        let result: number;

        result = _.max<number>(array);
        result = _.max(array);

        result = _<number>(array).max();
        result = _(array).max();

        result = _.chain<number>(array).max().value();
        result = _.chain(array).max().value();

        result = _.chain<number>(array).max().value();
        result = _.chain(array).max().value();
    }

    {
        const list: _.List<number> = { 0: 0, 1: 1, length: 2 };
        let result: number;

        result = _.max<number>(list);
        result = _.max(list);

        result = _<number>(list).max();
        result = _(list).max();

        result = _.chain<number>(list).max().value();
        result = _.chain(list).max().value();

        result = _.chain<number>(list).max().value();
        result = _.chain(list).max().value();
    }

    {
        const dict: _.Dictionary<number> = { a: 0, b: 1 };
        let result: number;

        result = _.max<number>(dict);
        result = _.max(dict);

        result = _<number>(dict).max();
        result = _(dict).max();

        result = _.chain<number>(dict).max().value();
        result = _.chain(dict).max().value();

        result = _.chain<number>(dict).max().value();
        result = _.chain(dict).max().value();
    }

    // function iterator
    const context = {};

    {
        const array: { a: number }[] = [{ a: 0 }, { a: 1 }];
        const iterator = (value: { a: number }, index: number, list: _.List<{ a: number }>) => value.a;
        let result: { a: number };

        result = _.max<{ a: number }>(array, iterator);
        result = _.max<{ a: number }>(array, iterator, context);
        result = _.max(array, iterator);
        result = _.max(array, iterator, context);

        result = _<{ a: number }>(array).max(iterator);
        result = _<{ a: number }>(array).max(iterator, context);
        result = _(array).max(iterator);
        result = _(array).max(iterator, context);

        result = _.chain<{ a: number }>(array).max(iterator).value();
        result = _.chain<{ a: number }>(array).max(iterator, context).value();
        result = _.chain(array).max(iterator).value();
        result = _.chain(array).max(iterator, context).value();

        result = _.chain<{ a: number }>(array).max(iterator).value();
        result = _.chain<{ a: number }>(array).max(iterator, context).value();
        result = _.chain(array).max(iterator).value();
        result = _.chain(array).max(iterator, context).value();
    }

    {
        const list: _.List<{ a: number }> = { 0: { a: 0 }, 1: { a: 1 }, length: 2 };
        const iterator = (value: { a: number }, index: number, list: _.List<{ a: number }>) => value.a;
        let result: { a: number };

        result = _.max<{ a: number }>(list, iterator);
        result = _.max<{ a: number }>(list, iterator, context);
        result = _.max(list, iterator);
        result = _.max(list, iterator, context);

        result = _<{ a: number }>(list).max(iterator);
        result = _<{ a: number }>(list).max(iterator, context);
        result = _(list).max(iterator);
        result = _(list).max(iterator, context);

        result = _.chain<{ a: number }>(list).max(iterator).value();
        result = _.chain<{ a: number }>(list).max(iterator, context).value();
        result = _.chain(list).max(iterator).value();
        result = _.chain(list).max(iterator, context).value();

        result = _.chain<{ a: number }>(list).max(iterator).value();
        result = _.chain<{ a: number }>(list).max(iterator, context).value();
        result = _.chain(list).max(iterator).value();
        result = _.chain(list).max(iterator, context).value();
    }

    {
        const dict: _.Dictionary<{ a: number }> = { a: { a: 0 }, b: { a: 1 } };
        const iterator = (element: { a: number }, key: string, list: _.Dictionary<{ a: number }>) => element.a;
        let result: { a: number };

        result = _.max<{ a: number }>(dict, iterator);
        result = _.max<{ a: number }>(dict, iterator, context);
        result = _.max(dict, iterator);
        result = _.max(dict, iterator, context);

        result = _<{ a: number }>(dict).max(iterator);
        result = _<{ a: number }>(dict).max(iterator, context);
        result = _(dict).max(iterator);
        result = _(dict).max(iterator, context);

        result = _.chain<{ a: number }>(dict).max(iterator).value();
        result = _.chain<{ a: number }>(dict).max(iterator, context).value();
        result = _.chain(dict).max(iterator).value();
        result = _.chain(dict).max(iterator, context).value();

        result = _.chain<{ a: number }>(dict).max(iterator).value();
        result = _.chain<{ a: number }>(dict).max(iterator, context).value();
        result = _.chain(dict).max(iterator).value();
        result = _.chain(dict).max(iterator, context).value();
    }

    // property name iterator
    {
        const array: { a: number }[] = [{ a: 0 }, { a: 1 }];
        const property = 'a';
        let result: { a: number };

        result = _.max<{ a: number }>(array, property);
        result = _.max(array, property);

        result = _<{ a: number }>(array).max(property);
        result = _(array).max(property);

        result = _.chain<{ a: number }>(array).max(property).value();
        result = _.chain(array).max(property).value();
    }

    {
        const list: _.List<{ a: number }> = { 0: { a: 0 }, 1: { a: 1 }, length: 2 };
        const property = 'a';
        let result: { a: number };

        result = _.max<{ a: number }>(list, property);
        result = _.max(list, property);

        result = _<{ a: number }>(list).max(property);
        result = _(list).max(property);

        result = _.chain<{ a: number }>(list).max(property).value();
        result = _.chain(list).max(property).value();
    }

    {
        const dict: _.Dictionary<{ a: number }> = { a: { a: 0 }, b: { a: 1 } };
        const property = 'a';
        let result: { a: number };

        result = _.max<{ a: number }>(dict, property);
        result = _.max(dict, property);

        result = _<{ a: number }>(dict).max(property);
        result = _(dict).max(property);

        result = _.chain<{ a: number }>(dict).max(property).value();
        result = _.chain(dict).max(property).value();
    }
}

// min
// as a breaking change, consider making the return type for the version of min that takes an iterator T | number
// since an empty collection will result in -Infinity
// as a breaking change, consider updating the overloads of min to take iterators with number results instead of any
// since the only other type that doesn't yield -Infinity is booleans, which isn't a terribly interesting case
{
    // without iterator
    {
        const array: number[] = [0, 1];
        let result: number;

        result = _.min<number>(array);
        result = _.min(array);

        result = _<number>(array).min();
        result = _(array).min();

        result = _.chain<number>(array).min().value();
        result = _.chain(array).min().value();

        result = _.chain<number>(array).min().value();
        result = _.chain(array).min().value();
    }

    {
        const list: _.List<number> = { 0: 0, 1: 1, length: 2 };
        let result: number;

        result = _.min<number>(list);
        result = _.min(list);

        result = _<number>(list).min();
        result = _(list).min();

        result = _.chain<number>(list).min().value();
        result = _.chain(list).min().value();

        result = _.chain<number>(list).min().value();
        result = _.chain(list).min().value();
    }

    {
        const dict: _.Dictionary<number> = { a: 0, b: 1 };
        let result: number;

        result = _.min<number>(dict);
        result = _.min(dict);

        result = _<number>(dict).min();
        result = _(dict).min();

        result = _.chain<number>(dict).min().value();
        result = _.chain(dict).min().value();

        result = _.chain<number>(dict).min().value();
        result = _.chain(dict).min().value();
    }

    // function iterator
    const context = {};

    {
        const array: { a: number }[] = [{ a: 0 }, { a: 1 }];
        const iterator = (value: { a: number }, index: number, list: _.List<{ a: number }>) => value.a;
        let result: { a: number };

        result = _.min<{ a: number }>(array, iterator);
        result = _.min<{ a: number }>(array, iterator, context);
        result = _.min(array, iterator);
        result = _.min(array, iterator, context);

        result = _<{ a: number }>(array).min(iterator);
        result = _<{ a: number }>(array).min(iterator, context);
        result = _(array).min(iterator);
        result = _(array).min(iterator, context);

        result = _.chain<{ a: number }>(array).min(iterator).value();
        result = _.chain<{ a: number }>(array).min(iterator, context).value();
        result = _.chain(array).min(iterator).value();
        result = _.chain(array).min(iterator, context).value();

        result = _.chain<{ a: number }>(array).min(iterator).value();
        result = _.chain<{ a: number }>(array).min(iterator, context).value();
        result = _.chain(array).min(iterator).value();
        result = _.chain(array).min(iterator, context).value();
    }

    {
        const list: _.List<{ a: number }> = { 0: { a: 0 }, 1: { a: 1 }, length: 2 };
        const iterator = (value: { a: number }, index: number, list: _.List<{ a: number }>) => value.a;
        let result: { a: number };

        result = _.min<{ a: number }>(list, iterator);
        result = _.min<{ a: number }>(list, iterator, context);
        result = _.min(list, iterator);
        result = _.min(list, iterator, context);

        result = _<{ a: number }>(list).min(iterator);
        result = _<{ a: number }>(list).min(iterator, context);
        result = _(list).min(iterator);
        result = _(list).min(iterator, context);

        result = _.chain<{ a: number }>(list).min(iterator).value();
        result = _.chain<{ a: number }>(list).min(iterator, context).value();
        result = _.chain(list).min(iterator).value();
        result = _.chain(list).min(iterator, context).value();

        result = _.chain<{ a: number }>(list).min(iterator).value();
        result = _.chain<{ a: number }>(list).min(iterator, context).value();
        result = _.chain(list).min(iterator).value();
        result = _.chain(list).min(iterator, context).value();
    }

    {
        const dict: _.Dictionary<{ a: number }> = { a: { a: 0 }, b: { a: 1 } };
        const iterator = (element: { a: number }, key: string, list: _.Dictionary<{ a: number }>) => element.a;
        let result: { a: number };

        result = _.min<{ a: number }>(dict, iterator);
        result = _.min<{ a: number }>(dict, iterator, context);
        result = _.min(dict, iterator);
        result = _.min(dict, iterator, context);

        result = _<{ a: number }>(dict).min(iterator);
        result = _<{ a: number }>(dict).min(iterator, context);
        result = _(dict).min(iterator);
        result = _(dict).min(iterator, context);

        result = _.chain<{ a: number }>(dict).min(iterator).value();
        result = _.chain<{ a: number }>(dict).min(iterator, context).value();
        result = _.chain(dict).min(iterator).value();
        result = _.chain(dict).min(iterator, context).value();

        result = _.chain<{ a: number }>(dict).min(iterator).value();
        result = _.chain<{ a: number }>(dict).min(iterator, context).value();
        result = _.chain(dict).min(iterator).value();
        result = _.chain(dict).min(iterator, context).value();
    }

    // property name iterator
    {
        const array: { a: number }[] = [{ a: 0 }, { a: 1 }];
        const property = 'a';
        let result: { a: number };

        result = _.min<{ a: number }>(array, property);
        result = _.min(array, property);

        result = _<{ a: number }>(array).min(property);
        result = _(array).min(property);

        result = _.chain<{ a: number }>(array).min(property).value();
        result = _.chain(array).min(property).value();
    }

    {
        const list: _.List<{ a: number }> = { 0: { a: 0 }, 1: { a: 1 }, length: 2 };
        const property = 'a';
        let result: { a: number };

        result = _.min<{ a: number }>(list, property);
        result = _.min(list, property);

        result = _<{ a: number }>(list).min(property);
        result = _(list).min(property);

        result = _.chain<{ a: number }>(list).min(property).value();
        result = _.chain(list).min(property).value();
    }

    {
        const dict: _.Dictionary<{ a: number }> = { a: { a: 0 }, b: { a: 1 } };
        const property = 'a';
        let result: { a: number };

        result = _.min<{ a: number }>(dict, property);
        result = _.min(dict, property);

        result = _<{ a: number }>(dict).min(property);
        result = _(dict).min(property);

        result = _.chain<{ a: number }>(dict).min(property).value();
        result = _.chain(dict).min(property).value();
    }
}

// sortBy
{
    const context = {};

    // with iterators
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const iterator = (value: { a: string }, index: number, list: _.List<{ a: string }>) => value.a;
        let result: { a: string }[];

        result = _.sortBy<{ a: string }>(array, iterator);
        result = _.sortBy<{ a: string }>(array, iterator, context);
        result = _.sortBy(array, iterator);
        result = _.sortBy(array, iterator, context);

        result = _<{ a: string }>(array).sortBy(iterator);
        result = _<{ a: string }>(array).sortBy(iterator, context);
        result = _(array).sortBy(iterator);
        result = _(array).sortBy(iterator, context);

        result = _.chain<{ a: string }>(array).sortBy(iterator).value();
        result = _.chain<{ a: string }>(array).sortBy(iterator, context).value();
        result = _.chain(array).sortBy(iterator).value();
        result = _.chain(array).sortBy(iterator, context).value();

        result = _.chain<{ a: string }>(array).sortBy(iterator).value();
        result = _.chain<{ a: string }>(array).sortBy(iterator, context).value();
        result = _.chain(array).sortBy(iterator).value();
        result = _.chain(array).sortBy(iterator, context).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const iterator = (value: { a: string }, index: number, list: _.List<{ a: string }>) => value.a;
        let result: { a: string }[];

        result = _.sortBy<{ a: string }>(list, iterator);
        result = _.sortBy<{ a: string }>(list, iterator, context);
        result = _.sortBy(list, iterator);
        result = _.sortBy(list, iterator, context);

        result = _<{ a: string }>(list).sortBy(iterator);
        result = _<{ a: string }>(list).sortBy(iterator, context);
        result = _(list).sortBy(iterator);
        result = _(list).sortBy(iterator, context);

        result = _.chain<{ a: string }>(list).sortBy(iterator).value();
        result = _.chain<{ a: string }>(list).sortBy(iterator, context).value();
        result = _.chain(list).sortBy(iterator).value();
        result = _.chain(list).sortBy(iterator, context).value();

        result = _.chain<{ a: string }>(list).sortBy(iterator).value();
        result = _.chain<{ a: string }>(list).sortBy(iterator, context).value();
        result = _.chain(list).sortBy(iterator).value();
        result = _.chain(list).sortBy(iterator, context).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const iterator = (element: { a: string }, key: string, list: _.Dictionary<{ a: string }>) => element.a;
        let result: { a: string }[];

        result = _.sortBy<{ a: string }>(dict, iterator);
        result = _.sortBy<{ a: string }>(dict, iterator, context);
        result = _.sortBy(dict, iterator);
        result = _.sortBy(dict, iterator, context);

        result = _<{ a: string }>(dict).sortBy(iterator);
        result = _<{ a: string }>(dict).sortBy(iterator, context);
        result = _(dict).sortBy(iterator);
        result = _(dict).sortBy(iterator, context);

        result = _.chain<{ a: string }>(dict).sortBy(iterator).value();
        result = _.chain<{ a: string }>(dict).sortBy(iterator, context).value();
        result = _.chain(dict).sortBy(iterator).value();
        result = _.chain(dict).sortBy(iterator, context).value();

        result = _.chain<{ a: string }>(dict).sortBy(iterator).value();
        result = _.chain<{ a: string }>(dict).sortBy(iterator, context).value();
        result = _.chain(dict).sortBy(iterator).value();
        result = _.chain(dict).sortBy(iterator, context).value();
    }

    // with property names
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const property = 'a';
        let result: { a: string }[];

        result = _.sortBy<{ a: string }>(array, property);
        result = _.sortBy(array, property);

        result = _<{ a: string }>(array).sortBy(property);
        result = _(array).sortBy(property);

        result = _.chain<{ a: string }>(array).sortBy(property).value();
        result = _.chain(array).sortBy(property).value();

        result = _.chain<{ a: string }>(array).sortBy(property).value();
        result = _.chain(array).sortBy(property).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const property = 'a';
        let result: { a: string }[];

        result = _.sortBy<{ a: string }>(list, property);
        result = _.sortBy(list, property);

        result = _<{ a: string }>(list).sortBy(property);
        result = _(list).sortBy(property);

        result = _.chain<{ a: string }>(list).sortBy(property).value();
        result = _.chain(list).sortBy(property).value();

        result = _.chain<{ a: string }>(list).sortBy(property).value();
        result = _.chain(list).sortBy(property).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const property = 'a';
        let result: { a: string }[];

        result = _.sortBy<{ a: string }>(dict, property);
        result = _.sortBy(dict, property);

        result = _<{ a: string }>(dict).sortBy(property);
        result = _(dict).sortBy(property);

        result = _.chain<{ a: string }>(dict).sortBy(property).value();
        result = _.chain(dict).sortBy(property).value();

        result = _.chain<{ a: string }>(dict).sortBy(property).value();
        result = _.chain(dict).sortBy(property).value();
    }
}

// groupBy
{
    const context = {};

    // with iterators
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const iterator = (value: { a: string }, index: number, list: _.List<{ a: string }>) => value.a;
        let result: _.Dictionary<_.List<{ a: string }>>;

        result = _.groupBy<{ a: string }>(array, iterator);
        result = _.groupBy<{ a: string }>(array, iterator, context);
        result = _.groupBy(array, iterator);
        result = _.groupBy(array, iterator, context);

        result = _<{ a: string }>(array).groupBy(iterator);
        result = _<{ a: string }>(array).groupBy(iterator, context);
        result = _(array).groupBy(iterator);
        result = _(array).groupBy(iterator, context);

        result = _.chain<{ a: string }>(array).groupBy(iterator).value();
        result = _.chain<{ a: string }>(array).groupBy(iterator, context).value();
        result = _.chain(array).groupBy(iterator).value();
        result = _.chain(array).groupBy(iterator, context).value();

        result = _.chain<{ a: string }>(array).groupBy(iterator).value();
        result = _.chain<{ a: string }>(array).groupBy(iterator, context).value();
        result = _.chain(array).groupBy(iterator).value();
        result = _.chain(array).groupBy(iterator, context).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const iterator = (value: { a: string }, index: number, list: _.List<{ a: string }>) => value.a;
        let result: _.Dictionary<_.List<{ a: string }>>;

        result = _.groupBy<{ a: string }>(list, iterator);
        result = _.groupBy<{ a: string }>(list, iterator, context);
        result = _.groupBy(list, iterator);
        result = _.groupBy(list, iterator, context);

        result = _<{ a: string }>(list).groupBy(iterator);
        result = _<{ a: string }>(list).groupBy(iterator, context);
        result = _(list).groupBy(iterator);
        result = _(list).groupBy(iterator, context);

        result = _.chain<{ a: string }>(list).groupBy(iterator).value();
        result = _.chain<{ a: string }>(list).groupBy(iterator, context).value();
        result = _.chain(list).groupBy(iterator).value();
        result = _.chain(list).groupBy(iterator, context).value();

        result = _.chain<{ a: string }>(list).groupBy(iterator).value();
        result = _.chain<{ a: string }>(list).groupBy(iterator, context).value();
        result = _.chain(list).groupBy(iterator).value();
        result = _.chain(list).groupBy(iterator, context).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const iterator = (element: { a: string }, key: string, list: _.Dictionary<{ a: string }>) => element.a;
        let result: _.Dictionary<_.List<{ a: string }>>;

        result = _.groupBy<{ a: string }>(dict, iterator);
        result = _.groupBy<{ a: string }>(dict, iterator, context);
        result = _.groupBy(dict, iterator);
        result = _.groupBy(dict, iterator, context);

        result = _<{ a: string }>(dict).groupBy(iterator);
        result = _<{ a: string }>(dict).groupBy(iterator, context);
        result = _(dict).groupBy(iterator);
        result = _(dict).groupBy(iterator, context);

        result = _.chain<{ a: string }>(dict).groupBy(iterator).value();
        result = _.chain<{ a: string }>(dict).groupBy(iterator, context).value();
        result = _.chain(dict).groupBy(iterator).value();
        result = _.chain(dict).groupBy(iterator, context).value();

        result = _.chain<{ a: string }>(dict).groupBy(iterator).value();
        result = _.chain<{ a: string }>(dict).groupBy(iterator, context).value();
        result = _.chain(dict).groupBy(iterator).value();
        result = _.chain(dict).groupBy(iterator, context).value();
    }

    // with property names
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const property = 'a';
        let result: _.Dictionary<_.List<{ a: string }>>;

        result = _.groupBy<{ a: string }>(array, property);
        result = _.groupBy(array, property);

        result = _<{ a: string }>(array).groupBy(property);
        result = _(array).groupBy(property);

        result = _.chain<{ a: string }>(array).groupBy(property).value();
        result = _.chain(array).groupBy(property).value();

        result = _.chain<{ a: string }>(array).groupBy(property).value();
        result = _.chain(array).groupBy(property).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const property = 'a';
        let result: _.Dictionary<_.List<{ a: string }>>;

        result = _.groupBy<{ a: string }>(list, property);
        result = _.groupBy(list, property);

        result = _<{ a: string }>(list).groupBy(property);
        result = _(list).groupBy(property);

        result = _.chain<{ a: string }>(list).groupBy(property).value();
        result = _.chain(list).groupBy(property).value();

        result = _.chain<{ a: string }>(list).groupBy(property).value();
        result = _.chain(list).groupBy(property).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const property = 'a';
        let result: _.Dictionary<_.List<{ a: string }>>;

        result = _.groupBy<{ a: string }>(dict, property);
        result = _.groupBy(dict, property);

        result = _<{ a: string }>(dict).groupBy(property);
        result = _(dict).groupBy(property);

        result = _.chain<{ a: string }>(dict).groupBy(property).value();
        result = _.chain(dict).groupBy(property).value();

        result = _.chain<{ a: string }>(dict).groupBy(property).value();
        result = _.chain(dict).groupBy(property).value();
    }
}

// indexBy
{
    const context = {};

    // with iterators
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const iterator = (value: { a: string }, index: number, list: _.List<{ a: string }>) => value.a;
        let result: _.Dictionary<{ a: string }>;

        result = _.indexBy<{ a: string }>(array, iterator);
        result = _.indexBy<{ a: string }>(array, iterator, context);
        result = _.indexBy(array, iterator);
        result = _.indexBy(array, iterator, context);

        result = _<{ a: string }>(array).indexBy(iterator);
        result = _<{ a: string }>(array).indexBy(iterator, context);
        result = _(array).indexBy(iterator);
        result = _(array).indexBy(iterator, context);

        result = _.chain<{ a: string }>(array).indexBy(iterator).value();
        result = _.chain<{ a: string }>(array).indexBy(iterator, context).value();
        result = _.chain(array).indexBy(iterator).value();
        result = _.chain(array).indexBy(iterator, context).value();

        result = _.chain<{ a: string }>(array).indexBy(iterator).value();
        result = _.chain<{ a: string }>(array).indexBy(iterator, context).value();
        result = _.chain(array).indexBy(iterator).value();
        result = _.chain(array).indexBy(iterator, context).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const iterator = (value: { a: string }, index: number, list: _.List<{ a: string }>) => value.a;
        let result: _.Dictionary<{ a: string }>;

        result = _.indexBy<{ a: string }>(list, iterator);
        result = _.indexBy<{ a: string }>(list, iterator, context);
        result = _.indexBy(list, iterator);
        result = _.indexBy(list, iterator, context);

        result = _<{ a: string }>(list).indexBy(iterator);
        result = _<{ a: string }>(list).indexBy(iterator, context);
        result = _(list).indexBy(iterator);
        result = _(list).indexBy(iterator, context);

        result = _.chain<{ a: string }>(list).indexBy(iterator).value();
        result = _.chain<{ a: string }>(list).indexBy(iterator, context).value();
        result = _.chain(list).indexBy(iterator).value();
        result = _.chain(list).indexBy(iterator, context).value();

        result = _.chain<{ a: string }>(list).indexBy(iterator).value();
        result = _.chain<{ a: string }>(list).indexBy(iterator, context).value();
        result = _.chain(list).indexBy(iterator).value();
        result = _.chain(list).indexBy(iterator, context).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const iterator = (element: { a: string }, key: string, list: _.Dictionary<{ a: string }>) => element.a;
        let result: _.Dictionary<{ a: string }>;

        result = _.indexBy<{ a: string }>(dict, iterator);
        result = _.indexBy<{ a: string }>(dict, iterator, context);
        result = _.indexBy(dict, iterator);
        result = _.indexBy(dict, iterator, context);

        result = _<{ a: string }>(dict).indexBy(iterator);
        result = _<{ a: string }>(dict).indexBy(iterator, context);
        result = _(dict).indexBy(iterator);
        result = _(dict).indexBy(iterator, context);

        result = _.chain<{ a: string }>(dict).indexBy(iterator).value();
        result = _.chain<{ a: string }>(dict).indexBy(iterator, context).value();
        result = _.chain(dict).indexBy(iterator).value();
        result = _.chain(dict).indexBy(iterator, context).value();

        result = _.chain<{ a: string }>(dict).indexBy(iterator).value();
        result = _.chain<{ a: string }>(dict).indexBy(iterator, context).value();
        result = _.chain(dict).indexBy(iterator).value();
        result = _.chain(dict).indexBy(iterator, context).value();
    }

    // with property names
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const property = 'a';
        let result: _.Dictionary<{ a: string }>;

        result = _.indexBy<{ a: string }>(array, property);
        result = _.indexBy(array, property);

        result = _<{ a: string }>(array).indexBy(property);
        result = _(array).indexBy(property);

        result = _.chain<{ a: string }>(array).indexBy(property).value();
        result = _.chain(array).indexBy(property).value();

        result = _.chain<{ a: string }>(array).indexBy(property).value();
        result = _.chain(array).indexBy(property).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const property = 'a';
        let result: _.Dictionary<{ a: string }>;

        result = _.indexBy<{ a: string }>(list, property);
        result = _.indexBy(list, property);

        result = _<{ a: string }>(list).indexBy(property);
        result = _(list).indexBy(property);

        result = _.chain<{ a: string }>(list).indexBy(property).value();
        result = _.chain(list).indexBy(property).value();

        result = _.chain<{ a: string }>(list).indexBy(property).value();
        result = _.chain(list).indexBy(property).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const property = 'a';
        let result: _.Dictionary<{ a: string }>;

        result = _.indexBy<{ a: string }>(dict, property);
        result = _.indexBy(dict, property);

        result = _<{ a: string }>(dict).indexBy(property);
        result = _(dict).indexBy(property);

        result = _.chain<{ a: string }>(dict).indexBy(property).value();
        result = _.chain(dict).indexBy(property).value();

        result = _.chain<{ a: string }>(dict).indexBy(property).value();
        result = _.chain(dict).indexBy(property).value();
    }
}

// countBy
{
    const context = {};

    // with iterators
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const iterator = (value: { a: string }, index: number, list: _.List<{ a: string }>) => value.a;
        let result: _.Dictionary<number>;

        result = _.countBy<{ a: string }>(array, iterator);
        result = _.countBy<{ a: string }>(array, iterator, context);
        result = _.countBy(array, iterator);
        result = _.countBy(array, iterator, context);

        result = _<{ a: string }>(array).countBy(iterator);
        result = _<{ a: string }>(array).countBy(iterator, context);
        result = _(array).countBy(iterator);
        result = _(array).countBy(iterator, context);

        result = _.chain<{ a: string }>(array).countBy(iterator).value();
        result = _.chain<{ a: string }>(array).countBy(iterator, context).value();
        result = _.chain(array).countBy(iterator).value();
        result = _.chain(array).countBy(iterator, context).value();

        result = _.chain<{ a: string }>(array).countBy(iterator).value();
        result = _.chain<{ a: string }>(array).countBy(iterator, context).value();
        result = _.chain(array).countBy(iterator).value();
        result = _.chain(array).countBy(iterator, context).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const iterator = (value: { a: string }, index: number, list: _.List<{ a: string }>) => value.a;
        let result: _.Dictionary<number>;

        result = _.countBy<{ a: string }>(list, iterator);
        result = _.countBy<{ a: string }>(list, iterator, context);
        result = _.countBy(list, iterator);
        result = _.countBy(list, iterator, context);

        result = _<{ a: string }>(list).countBy(iterator);
        result = _<{ a: string }>(list).countBy(iterator, context);
        result = _(list).countBy(iterator);
        result = _(list).countBy(iterator, context);

        result = _.chain<{ a: string }>(list).countBy(iterator).value();
        result = _.chain<{ a: string }>(list).countBy(iterator, context).value();
        result = _.chain(list).countBy(iterator).value();
        result = _.chain(list).countBy(iterator, context).value();

        result = _.chain<{ a: string }>(list).countBy(iterator).value();
        result = _.chain<{ a: string }>(list).countBy(iterator, context).value();
        result = _.chain(list).countBy(iterator).value();
        result = _.chain(list).countBy(iterator, context).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const iterator = (element: { a: string }, key: string, list: _.Dictionary<{ a: string }>) => element.a;
        let result: _.Dictionary<number>;

        result = _.countBy<{ a: string }>(dict, iterator);
        result = _.countBy<{ a: string }>(dict, iterator, context);
        result = _.countBy(dict, iterator);
        result = _.countBy(dict, iterator, context);

        result = _<{ a: string }>(dict).countBy(iterator);
        result = _<{ a: string }>(dict).countBy(iterator, context);
        result = _(dict).countBy(iterator);
        result = _(dict).countBy(iterator, context);

        result = _.chain<{ a: string }>(dict).countBy(iterator).value();
        result = _.chain<{ a: string }>(dict).countBy(iterator, context).value();
        result = _.chain(dict).countBy(iterator).value();
        result = _.chain(dict).countBy(iterator, context).value();

        result = _.chain<{ a: string }>(dict).countBy(iterator).value();
        result = _.chain<{ a: string }>(dict).countBy(iterator, context).value();
        result = _.chain(dict).countBy(iterator).value();
        result = _.chain(dict).countBy(iterator, context).value();
    }

    {
        const str = 'abc';
        const iterator = (value: string, index: number, list: _.List<string>) => value;
        let result: _.Dictionary<number>;

        result = _.countBy<string>(str, iterator);
        result = _.countBy<string>(str, iterator, context);
        result = _.countBy(str, iterator);
        result = _.countBy(str, iterator, context);

        result = _<string>(str).countBy(iterator);
        result = _<string>(str).countBy(iterator, context);
        result = _(str).countBy(iterator);
        result = _(str).countBy(iterator, context);

        result = _.chain<string>(str).countBy(iterator).value();
        result = _.chain<string>(str).countBy(iterator, context).value();
        result = _.chain(str).countBy(iterator).value();
        result = _.chain(str).countBy(iterator, context).value();

        result = _.chain<string>(str).countBy(iterator).value();
        result = _.chain<string>(str).countBy(iterator, context).value();
        result = _.chain(str).countBy(iterator).value();
        result = _.chain(str).countBy(iterator, context).value();
    }

    // with property names
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const property = 'a';
        let result: _.Dictionary<number>;

        result = _.countBy<{ a: string }>(array, property);
        result = _.countBy(array, property);

        result = _<{ a: string }>(array).countBy(property);
        result = _(array).countBy(property);

        result = _.chain<{ a: string }>(array).countBy(property).value();
        result = _.chain(array).countBy(property).value();

        result = _.chain<{ a: string }>(array).countBy(property).value();
        result = _.chain(array).countBy(property).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const property = 'a';
        let result: _.Dictionary<number>;

        result = _.countBy<{ a: string }>(list, property);
        result = _.countBy(list, property);

        result = _<{ a: string }>(list).countBy(property);
        result = _(list).countBy(property);

        result = _.chain<{ a: string }>(list).countBy(property).value();
        result = _.chain(list).countBy(property).value();

        result = _.chain<{ a: string }>(list).countBy(property).value();
        result = _.chain(list).countBy(property).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const property = 'a';
        let result: _.Dictionary<number>;

        result = _.countBy<{ a: string }>(dict, property);
        result = _.countBy(dict, property);

        result = _<{ a: string }>(dict).countBy(property);
        result = _(dict).countBy(property);

        result = _.chain<{ a: string }>(dict).countBy(property).value();
        result = _.chain(dict).countBy(property).value();

        result = _.chain<{ a: string }>(dict).countBy(property).value();
        result = _.chain(dict).countBy(property).value();
    }
}

// shuffle
{
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        let result: { a: string }[];

        result = _.shuffle<{ a: string }>(array);
        result = _.shuffle(array);

        result = _<{ a: string }>(array).shuffle();
        result = _(array).shuffle();

        result = _.chain<{ a: string }>(array).shuffle().value();
        result = _.chain(array).shuffle().value();

        result = _.chain<{ a: string }>(array).shuffle().value();
        result = _.chain(array).shuffle().value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        let result: { a: string }[];

        result = _.shuffle<{ a: string }>(list);
        result = _.shuffle(list);

        result = _<{ a: string }>(list).shuffle();
        result = _(list).shuffle();

        result = _.chain<{ a: string }>(list).shuffle().value();
        result = _.chain(list).shuffle().value();

        result = _.chain<{ a: string }>(list).shuffle().value();
        result = _.chain(list).shuffle().value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        let result: { a: string }[];

        result = _.shuffle<{ a: string }>(dict);
        result = _.shuffle(dict);

        result = _<{ a: string }>(dict).shuffle();
        result = _(dict).shuffle();

        result = _.chain<{ a: string }>(dict).shuffle().value();
        result = _.chain(dict).shuffle().value();

        result = _.chain<{ a: string }>(dict).shuffle().value();
        result = _.chain(dict).shuffle().value();
    }

    {
        const str = 'abc';
        let result: string[];

        result = _.shuffle<string>(str);
        result = _.shuffle(str);

        result = _<string>(str).shuffle();
        result = _(str).shuffle();

        result = _.chain<string>(str).shuffle().value();
        result = _.chain(str).shuffle().value();
    }
}

// sample
{
    // without n
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        let result: { a: string } | undefined;

        result = _.sample<{ a: string }>(array);
        result = _.sample(array);

        result = _<{ a: string }>(array).sample();
        result = _(array).sample();

        result = _.chain<{ a: string }>(array).sample().value();
        result = _.chain(array).sample().value();

        result = _.chain<{ a: string }>(array).sample().value();
        result = _.chain(array).sample().value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        let result: { a: string } | undefined;

        result = _.sample<{ a: string }>(list);
        result = _.sample(list);

        result = _<{ a: string }>(list).sample();
        result = _(list).sample();

        result = _.chain<{ a: string }>(list).sample().value();
        result = _.chain(list).sample().value();

        result = _.chain<{ a: string }>(list).sample().value();
        result = _.chain(list).sample().value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        let result: { a: string } | undefined;

        result = _.sample<{ a: string }>(dict);
        result = _.sample(dict);

        result = _<{ a: string }>(dict).sample();
        result = _(dict).sample();

        result = _.chain<{ a: string }>(dict).sample().value();
        result = _.chain(dict).sample().value();

        result = _.chain<{ a: string }>(dict).sample().value();
        result = _.chain(dict).sample().value();
    }

    {
        const str = 'abc';
        let result: string | undefined;

        result = _.sample<string>(str);
        result = _.sample(str);

        result = _<string>(str).sample();
        result = _(str).sample();

        result = _.chain<string>(str).sample().value();
        result = _.chain(str).sample().value();
    }

    // with n
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const n = 2;
        let result: { a: string }[];

        result = _.sample<{ a: string }>(array, n);
        result = _.sample(array, n);

        result = _<{ a: string }>(array).sample(n);
        result = _(array).sample(n);

        result = _.chain<{ a: string }>(array).sample(n).value();
        result = _.chain(array).sample(n).value();

        result = _.chain<{ a: string }>(array).sample(n).value();
        result = _.chain(array).sample(n).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const n = 2;
        let result: { a: string }[];

        result = _.sample<{ a: string }>(list, n);
        result = _.sample(list, n);

        result = _<{ a: string }>(list).sample(n);
        result = _(list).sample(n);

        result = _.chain<{ a: string }>(list).sample(n).value();
        result = _.chain(list).sample(n).value();

        result = _.chain<{ a: string }>(list).sample(n).value();
        result = _.chain(list).sample(n).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const n = 2;
        let result: { a: string }[];

        result = _.sample<{ a: string }>(dict, n);
        result = _.sample(dict, n);

        result = _<{ a: string }>(dict).sample(n);
        result = _(dict).sample(n);

        result = _.chain<{ a: string }>(dict).sample(n).value();
        result = _.chain(dict).sample(n).value();

        result = _.chain<{ a: string }>(dict).sample(n).value();
        result = _.chain(dict).sample(n).value();
    }

    {
        const str = 'abc';
        const n = 2;
        let result: string[];

        result = _.sample<string>(str, n);
        result = _.sample(str, n);

        result = _<string>(str).sample(n);
        result = _(str).sample(n);

        result = _.chain<string>(str).sample(n).value();
        result = _.chain(str).sample(n).value();
    }
}

// toArray
{
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        let result: { a: string }[];

        result = _.toArray<{ a: string }>(array);
        result = _.toArray(array);

        result = _<{ a: string }>(array).toArray();
        result = _(array).toArray();

        result = _.chain<{ a: string }>(array).toArray().value();
        result = _.chain(array).toArray().value();

        result = _.chain<{ a: string }>(array).toArray().value();
        result = _.chain(array).toArray().value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        let result: { a: string }[];

        result = _.toArray<{ a: string }>(list);
        result = _.toArray(list);

        result = _<{ a: string }>(list).toArray();
        result = _(list).toArray();

        result = _.chain<{ a: string }>(list).toArray().value();
        result = _.chain(list).toArray().value();

        result = _.chain<{ a: string }>(list).toArray().value();
        result = _.chain(list).toArray().value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        let result: { a: string }[];

        result = _.toArray<{ a: string }>(dict);
        result = _.toArray(dict);

        result = _<{ a: string }>(dict).toArray();
        result = _(dict).toArray();

        result = _.chain<{ a: string }>(dict).toArray().value();
        result = _.chain(dict).toArray().value();

        result = _.chain<{ a: string }>(dict).toArray().value();
        result = _.chain(dict).toArray().value();
    }

    {
        const str = 'abc';
        let result: string[];

        result = _.toArray<string>(str);
        result = _.toArray(str);

        result = _<string>(str).toArray();
        result = _(str).toArray();

        result = _.chain<string>(str).toArray().value();
        result = _.chain(str).toArray().value();
    }
}

// size
{
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        let result: number;

        result = _.size<{ a: string }>(array);
        result = _.size(array);

        result = _<{ a: string }>(array).size();
        result = _(array).size();

        result = _.chain<{ a: string }>(array).size().value();
        result = _.chain(array).size().value();

        result = _.chain<{ a: string }>(array).size().value();
        result = _.chain(array).size().value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        let result: number;

        result = _.size<{ a: string }>(list);
        result = _.size(list);

        result = _<{ a: string }>(list).size();
        result = _(list).size();

        result = _.chain<{ a: string }>(list).size().value();
        result = _.chain(list).size().value();

        result = _.chain<{ a: string }>(list).size().value();
        result = _.chain(list).size().value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        let result: number;

        result = _.size<{ a: string }>(dict);
        result = _.size(dict);

        result = _<{ a: string }>(dict).size();
        result = _(dict).size();

        result = _.chain<{ a: string }>(dict).size().value();
        result = _.chain(dict).size().value();

        result = _.chain<{ a: string }>(dict).size().value();
        result = _.chain(dict).size().value();
    }

    {
        const str = 'abc';
        let result: number;

        result = _.size<string>(str);
        result = _.size(str);

        result = _<string>(str).size();
        result = _(str).size();

        result = _.chain<string>(str).size().value();
        result = _.chain(str).size().value();
    }
}

// partition
{
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const iterator = (value: { a: string }, index: number, list: _.List<{ a: string }>) => value.a === 'b';
        let result: [{ a: string }[], { a: string }[]];

        result = _.partition<{ a: string }>(array, iterator);
        result = _.partition(array, iterator);

        result = _<{ a: string }>(array).partition(iterator);
        result = _(array).partition(iterator);

        result = _.chain<{ a: string }>(array).partition(iterator).value();
        result = _.chain(array).partition(iterator).value();

        result = _.chain<{ a: string }>(array).partition(iterator).value();
        result = _.chain(array).partition(iterator).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const iterator = (value: { a: string }, index: number, list: _.List<{ a: string }>) => value.a === 'b';
        let result: [{ a: string }[], { a: string }[]];

        result = _.partition<{ a: string }>(list, iterator);
        result = _.partition(list, iterator);

        result = _<{ a: string }>(list).partition(iterator);
        result = _(list).partition(iterator);

        result = _.chain<{ a: string }>(list).partition(iterator).value();
        result = _.chain(list).partition(iterator).value();

        result = _.chain<{ a: string }>(list).partition(iterator).value();
        result = _.chain(list).partition(iterator).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const iterator = (element: { a: string }, key: string, list: _.Dictionary<{ a: string }>) => element.a === 'b';
        let result: [{ a: string }[], { a: string }[]];

        result = _.partition<{ a: string }>(dict, iterator);
        result = _.partition(dict, iterator);

        result = _<{ a: string }>(dict).partition(iterator);
        result = _(dict).partition(iterator);

        result = _.chain<{ a: string }>(dict).partition(iterator).value();
        result = _.chain(dict).partition(iterator).value();

        result = _.chain<{ a: string }>(dict).partition(iterator).value();
        result = _.chain(dict).partition(iterator).value();
    }

    {
        const str = 'abc';
        const iterator = (value: string, index: number, list: _.List<string>) => value === 'b';
        let result: [string[], string[]];

        result = _.partition<string>(str, iterator);
        result = _.partition(str, iterator);

        result = _<string>(str).partition(iterator);
        result = _(str).partition(iterator);

        result = _.chain<string>(str).partition(iterator).value();
        result = _.chain(str).partition(iterator).value();
    }
}

// Array Functions

// first, head, take
{
    // without n
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        let result: { a: string } | undefined;

        result = _.first<{ a: string }>(array);
        result = _.first(array);

        result = _<{ a: string }>(array).first();
        result = _(array).first();

        result = _.chain<{ a: string }>(array).first().value();
        result = _.chain(array).first().value();

        result = _.head<{ a: string }>(array);
        result = _.head(array);

        result = _<{ a: string }>(array).head();
        result = _(array).head();

        result = _.chain<{ a: string }>(array).head().value();
        result = _.chain(array).head().value();

        result = _.take<{ a: string }>(array);
        result = _.take(array);

        result = _<{ a: string }>(array).take();
        result = _(array).take();

        result = _.chain<{ a: string }>(array).take().value();
        result = _.chain(array).take().value();

        result = _.chain<{ a: string }>(array).take().value();
        result = _.chain(array).take().value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        let result: { a: string } | undefined;

        result = _.first<{ a: string }>(list);
        result = _.first(list);

        result = _<{ a: string }>(list).first();
        result = _(list).first();

        result = _.chain<{ a: string }>(list).first().value();
        result = _.chain(list).first().value();

        result = _.head<{ a: string }>(list);
        result = _.head(list);

        result = _<{ a: string }>(list).head();
        result = _(list).head();

        result = _.chain<{ a: string }>(list).head().value();
        result = _.chain(list).head().value();

        result = _.take<{ a: string }>(list);
        result = _.take(list);

        result = _<{ a: string }>(list).take();
        result = _(list).take();

        result = _.chain<{ a: string }>(list).take().value();
        result = _.chain(list).take().value();

        result = _.chain<{ a: string }>(list).take().value();
        result = _.chain(list).take().value();
    }

    {
        const str = 'abc';
        let result: string | undefined;

        result = _.first<string>(str);
        result = _.first(str);

        result = _<string>(str).first();
        result = _(str).first();

        result = _.chain<string>(str).first().value();
        result = _.chain(str).first().value();

        result = _.head<string>(str);
        result = _.head(str);

        result = _<string>(str).head();
        result = _(str).head();

        result = _.chain<string>(str).head().value();
        result = _.chain(str).head().value();

        result = _.take<string>(str);
        result = _.take(str);

        result = _<string>(str).take();
        result = _(str).take();

        result = _.chain<string>(str).take().value();
        result = _.chain(str).take().value();
    }

    // with n
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const n = 2;
        let result: { a: string }[];

        result = _.first<{ a: string }>(array, n);
        result = _.first(array, n);

        result = _<{ a: string }>(array).first(n);
        result = _(array).first(n);

        result = _.chain<{ a: string }>(array).first(n).value();
        result = _.chain(array).first(n).value();

        result = _.head<{ a: string }>(array, n);
        result = _.head(array, n);

        result = _<{ a: string }>(array).head(n);
        result = _(array).head(n);

        result = _.chain<{ a: string }>(array).head(n).value();
        result = _.chain(array).head(n).value();

        result = _.take<{ a: string }>(array, n);
        result = _.take(array, n);

        result = _<{ a: string }>(array).take(n);
        result = _(array).take(n);

        result = _.chain<{ a: string }>(array).take(n).value();
        result = _.chain(array).take(n).value();

        result = _.chain<{ a: string }>(array).take(n).value();
        result = _.chain(array).take(n).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const n = 2;
        let result: { a: string }[];

        result = _.first<{ a: string }>(list, n);
        result = _.first(list, n);

        result = _<{ a: string }>(list).first(n);
        result = _(list).first(n);

        result = _.chain<{ a: string }>(list).first(n).value();
        result = _.chain(list).first(n).value();

        result = _.head<{ a: string }>(list, n);
        result = _.head(list, n);

        result = _<{ a: string }>(list).head(n);
        result = _(list).head(n);

        result = _.chain<{ a: string }>(list).head(n).value();
        result = _.chain(list).head(n).value();

        result = _.take<{ a: string }>(list, n);
        result = _.take(list, n);

        result = _<{ a: string }>(list).take(n);
        result = _(list).take(n);

        result = _.chain<{ a: string }>(list).take(n).value();
        result = _.chain(list).take(n).value();

        result = _.chain<{ a: string }>(list).take(n).value();
        result = _.chain(list).take(n).value();
    }

    {
        const str = 'abc';
        const n = 2;
        let result: string[];

        result = _.first<string>(str, n);
        result = _.first(str, n);

        result = _<string>(str).first(n);
        result = _(str).first(n);

        result = _.chain<string>(str).first(n).value();
        result = _.chain(str).first(n).value();

        result = _.head<string>(str, n);
        result = _.head(str, n);

        result = _<string>(str).head(n);
        result = _(str).head(n);

        result = _.chain<string>(str).head(n).value();
        result = _.chain(str).head(n).value();

        result = _.take<string>(str, n);
        result = _.take(str, n);

        result = _<string>(str).take(n);
        result = _(str).take(n);

        result = _.chain<string>(str).take(n).value();
        result = _.chain(str).take(n).value();
    }
}

// initial
{
    // without n
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        let result: { a: string }[];

        result = _.initial<{ a: string }>(array);
        result = _.initial(array);

        result = _<{ a: string }>(array).initial();
        result = _(array).initial();

        result = _.chain<{ a: string }>(array).initial().value();
        result = _.chain(array).initial().value();

        result = _.chain<{ a: string }>(array).initial().value();
        result = _.chain(array).initial().value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        let result: { a: string }[];

        result = _.initial<{ a: string }>(list);
        result = _.initial(list);

        result = _<{ a: string }>(list).initial();
        result = _(list).initial();

        result = _.chain<{ a: string }>(list).initial().value();
        result = _.chain(list).initial().value();

        result = _.chain<{ a: string }>(list).initial().value();
        result = _.chain(list).initial().value();
    }

    {
        const str = 'abc';
        let result: string[];

        result = _.initial<string>(str);
        result = _.initial(str);

        result = _<string>(str).initial();
        result = _(str).initial();

        result = _.chain<string>(str).initial().value();
        result = _.chain(str).initial().value();
    }

    // with n
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const n = 2;
        let result: { a: string }[];

        result = _.initial<{ a: string }>(array, n);
        result = _.initial(array, n);

        result = _<{ a: string }>(array).initial(n);
        result = _(array).initial(n);

        result = _.chain<{ a: string }>(array).initial(n).value();
        result = _.chain(array).initial(n).value();

        result = _.chain<{ a: string }>(array).initial(n).value();
        result = _.chain(array).initial(n).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const n = 2;
        let result: { a: string }[];

        result = _.initial<{ a: string }>(list, n);
        result = _.initial(list, n);

        result = _<{ a: string }>(list).initial(n);
        result = _(list).initial(n);

        result = _.chain<{ a: string }>(list).initial(n).value();
        result = _.chain(list).initial(n).value();

        result = _.chain<{ a: string }>(list).initial(n).value();
        result = _.chain(list).initial(n).value();
    }

    {
        const str = 'abc';
        const n = 2;
        let result: string[];

        result = _.initial<string>(str, n);
        result = _.initial(str, n);

        result = _<string>(str).initial(n);
        result = _(str).initial(n);

        result = _.chain<string>(str).initial(n).value();
        result = _.chain(str).initial(n).value();
    }
}

// last
{
    // without n
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        let result: { a: string } | undefined;

        result = _.last<{ a: string }>(array);
        result = _.last(array);

        result = _<{ a: string }>(array).last();
        result = _(array).last();

        result = _.chain<{ a: string }>(array).last().value();
        result = _.chain(array).last().value();

        result = _.chain<{ a: string }>(array).last().value();
        result = _.chain(array).last().value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        let result: { a: string } | undefined;

        result = _.last<{ a: string }>(list);
        result = _.last(list);

        result = _<{ a: string }>(list).last();
        result = _(list).last();

        result = _.chain<{ a: string }>(list).last().value();
        result = _.chain(list).last().value();

        result = _.chain<{ a: string }>(list).last().value();
        result = _.chain(list).last().value();
    }

    {
        const str = 'abc';
        let result: string | undefined;

        result = _.last<string>(str);
        result = _.last(str);

        result = _<string>(str).last();
        result = _(str).last();

        result = _.chain<string>(str).last().value();
        result = _.chain(str).last().value();
    }

    // with n
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const n = 2;
        let result: { a: string }[];

        result = _.last<{ a: string }>(array, n);
        result = _.last(array, n);

        result = _<{ a: string }>(array).last(n);
        result = _(array).last(n);

        result = _.chain<{ a: string }>(array).last(n).value();
        result = _.chain(array).last(n).value();

        result = _.chain<{ a: string }>(array).last(n).value();
        result = _.chain(array).last(n).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const n = 2;
        let result: { a: string }[];

        result = _.last<{ a: string }>(list, n);
        result = _.last(list, n);

        result = _<{ a: string }>(list).last(n);
        result = _(list).last(n);

        result = _.chain<{ a: string }>(list).last(n).value();
        result = _.chain(list).last(n).value();

        result = _.chain<{ a: string }>(list).last(n).value();
        result = _.chain(list).last(n).value();
    }

    {
        const str = 'abc';
        const n = 2;
        let result: string[];

        result = _.last<string>(str, n);
        result = _.last(str, n);

        result = _<string>(str).last(n);
        result = _(str).last(n);

        result = _.chain<string>(str).last(n).value();
        result = _.chain(str).last(n).value();
    }
}

// rest, tail, drop
{
    // without n
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        let result: { a: string }[];

        result = _.rest<{ a: string }>(array);
        result = _.rest(array);

        result = _<{ a: string }>(array).rest();
        result = _(array).rest();

        result = _.chain<{ a: string }>(array).rest().value();
        result = _.chain(array).rest().value();

        result = _.tail<{ a: string }>(array);
        result = _.tail(array);

        result = _<{ a: string }>(array).tail();
        result = _(array).tail();

        result = _.chain<{ a: string }>(array).tail().value();
        result = _.chain(array).tail().value();

        result = _.drop<{ a: string }>(array);
        result = _.drop(array);

        result = _<{ a: string }>(array).drop();
        result = _(array).drop();

        result = _.chain<{ a: string }>(array).drop().value();
        result = _.chain(array).drop().value();

        result = _.chain<{ a: string }>(array).drop().value();
        result = _.chain(array).drop().value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        let result: { a: string }[];

        result = _.rest<{ a: string }>(list);
        result = _.rest(list);

        result = _<{ a: string }>(list).rest();
        result = _(list).rest();

        result = _.chain<{ a: string }>(list).rest().value();
        result = _.chain(list).rest().value();

        result = _.tail<{ a: string }>(list);
        result = _.tail(list);

        result = _<{ a: string }>(list).tail();
        result = _(list).tail();

        result = _.chain<{ a: string }>(list).tail().value();
        result = _.chain(list).tail().value();

        result = _.drop<{ a: string }>(list);
        result = _.drop(list);

        result = _<{ a: string }>(list).drop();
        result = _(list).drop();

        result = _.chain<{ a: string }>(list).drop().value();
        result = _.chain(list).drop().value();

        result = _.chain<{ a: string }>(list).drop().value();
        result = _.chain(list).drop().value();
    }

    {
        const str = 'abc';
        let result: string[];

        result = _.rest<string>(str);
        result = _.rest(str);

        result = _<string>(str).rest();
        result = _(str).rest();

        result = _.chain<string>(str).rest().value();
        result = _.chain(str).rest().value();

        result = _.tail<string>(str);
        result = _.tail(str);

        result = _<string>(str).tail();
        result = _(str).tail();

        result = _.chain<string>(str).tail().value();
        result = _.chain(str).tail().value();

        result = _.drop<string>(str);
        result = _.drop(str);

        result = _<string>(str).drop();
        result = _(str).drop();

        result = _.chain<string>(str).drop().value();
        result = _.chain(str).drop().value();
    }

    // with n
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const n = 2;
        let result: { a: string }[];

        result = _.rest<{ a: string }>(array, n);
        result = _.rest(array, n);

        result = _<{ a: string }>(array).rest(n);
        result = _(array).rest(n);

        result = _.chain<{ a: string }>(array).rest(n).value();
        result = _.chain(array).rest(n).value();

        result = _.tail<{ a: string }>(array, n);
        result = _.tail(array, n);

        result = _<{ a: string }>(array).tail(n);
        result = _(array).tail(n);

        result = _.chain<{ a: string }>(array).tail(n).value();
        result = _.chain(array).tail(n).value();

        result = _.drop<{ a: string }>(array, n);
        result = _.drop(array, n);

        result = _<{ a: string }>(array).drop(n);
        result = _(array).drop(n);

        result = _.chain<{ a: string }>(array).drop(n).value();
        result = _.chain(array).drop(n).value();

        result = _.chain<{ a: string }>(array).drop(n).value();
        result = _.chain(array).drop(n).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const n = 2;
        let result: { a: string }[];

        result = _.rest<{ a: string }>(list, n);
        result = _.rest(list, n);

        result = _<{ a: string }>(list).rest(n);
        result = _(list).rest(n);

        result = _.chain<{ a: string }>(list).rest(n).value();
        result = _.chain(list).rest(n).value();

        result = _.tail<{ a: string }>(list, n);
        result = _.tail(list, n);

        result = _<{ a: string }>(list).tail(n);
        result = _(list).tail(n);

        result = _.chain<{ a: string }>(list).tail(n).value();
        result = _.chain(list).tail(n).value();

        result = _.drop<{ a: string }>(list, n);
        result = _.drop(list, n);

        result = _<{ a: string }>(list).drop(n);
        result = _(list).drop(n);

        result = _.chain<{ a: string }>(list).drop(n).value();
        result = _.chain(list).drop(n).value();

        result = _.chain<{ a: string }>(list).drop(n).value();
        result = _.chain(list).drop(n).value();
    }

    {
        const str = 'abc';
        const n = 2;
        let result: string[];

        result = _.rest<string>(str, n);
        result = _.rest(str, n);

        result = _<string>(str).rest(n);
        result = _(str).rest(n);

        result = _.chain<string>(str).rest(n).value();
        result = _.chain(str).rest(n).value();

        result = _.tail<string>(str, n);
        result = _.tail(str, n);

        result = _<string>(str).tail(n);
        result = _(str).tail(n);

        result = _.chain<string>(str).tail(n).value();
        result = _.chain(str).tail(n).value();

        result = _.drop<string>(str, n);
        result = _.drop(str, n);

        result = _<string>(str).drop(n);
        result = _(str).drop(n);

        result = _.chain<string>(str).drop(n).value();
        result = _.chain(str).drop(n).value();
    }
}

// compact
{
    {
        const array: ({ a: string } | undefined)[] = [{ a: 'a' }, { a: 'b' }];
        let result: { a: string }[];

        result = _.compact<{ a: string } | undefined>(array);
        result = _.compact(array);

        result = _<{ a: string } | undefined>(array).compact();
        result = _(array).compact();

        result = _.chain<{ a: string } | undefined>(array).compact().value();
        result = _.chain(array).compact().value();

        result = _.chain<{ a: string } | undefined>(array).compact().value();
        result = _.chain(array).compact().value();
    }

    {
        const list: _.List<({ a: string } | undefined)> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        let result: { a: string }[];

        result = _.compact<{ a: string } | undefined>(list);
        result = _.compact(list);

        result = _<{ a: string } | undefined>(list).compact();
        result = _(list).compact();

        result = _.chain<{ a: string } | undefined>(list).compact().value();
        result = _.chain(list).compact().value();

        result = _.chain<{ a: string } | undefined>(list).compact().value();
        result = _.chain(list).compact().value();
    }
}

// flatten
{
    // one dimension, deep
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        let result: { a: string }[];

        result = _.flatten<{ a: string }>(array);
        result = _.flatten(array);

        result = _<{ a: string }>(array).flatten();
        result = _(array).flatten();

        result = _.chain<{ a: string }>(array).flatten().value();
        result = _.chain(array).flatten().value();

        result = _.chain<{ a: string }>(array).flatten().value();
        result = _.chain(array).flatten().value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        let result: { a: string }[];

        result = _.flatten<{ a: string }>(list);
        result = _.flatten(list);

        result = _<{ a: string }>(list).flatten();
        result = _(list).flatten();

        result = _.chain<{ a: string }>(list).flatten().value();
        result = _.chain(list).flatten().value();

        result = _.chain<{ a: string }>(list).flatten().value();
        result = _.chain(list).flatten().value();
    }

    // one dimension, shallow
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        let result: { a: string }[];

        result = _.flatten<{ a: string }>(array, true);
        result = _.flatten(array, true);

        result = _<{ a: string }>(array).flatten(true);
        result = _(array).flatten(true);

        result = _.chain<{ a: string }>(array).flatten(true).value();
        result = _.chain(array).flatten(true).value();

        result = _.chain<{ a: string }>(array).flatten(true).value();
        result = _.chain(array).flatten(true).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        let result: { a: string }[];

        result = _.flatten<{ a: string }>(list, true);
        result = _.flatten(list, true);

        result = _<{ a: string }>(list).flatten(true);
        result = _(list).flatten(true);

        result = _.chain<{ a: string }>(list).flatten(true).value();
        result = _.chain(list).flatten(true).value();

        result = _.chain<{ a: string }>(list).flatten(true).value();
        result = _.chain(list).flatten(true).value();
    }

    // two dimensions, deep
    {
        const array: { a: string }[][] = [[{ a: 'a' }, { a: 'b' }], [{ a: 'a' }, { a: 'b' }]];
        let result: { a: string }[];

        result = _.flatten<{ a: string }[]>(array);
        result = _.flatten(array);

        result = _<{ a: string }[]>(array).flatten();
        result = _(array).flatten();

        result = _.chain<{ a: string }[]>(array).flatten().value();
        result = _.chain(array).flatten().value();

        result = _.chain<{ a: string }[]>(array).flatten().value();
        result = _.chain(array).flatten().value();
    }

    {
        const list: _.List<_.List<{ a: string }>> = { 0: { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 }, 1: { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 }, length: 2 };
        let result: { a: string }[];

        result = _.flatten<_.List<{ a: string }>>(list);
        result = _.flatten(list);

        result = _<_.List<{ a: string }>>(list).flatten();
        result = _(list).flatten();

        result = _.chain<_.List<{ a: string }>>(list).flatten().value();
        result = _.chain(list).flatten().value();

        result = _<_.List<{ a: string }>>(list).chain().flatten().value();
        result = _.chain(list).flatten().value();
    }

    // two dimensions, shallow
    {
        const array: { a: string }[][] = [[{ a: 'a' }, { a: 'b' }], [{ a: 'a' }, { a: 'b' }]];
        let result: { a: string }[];

        result = _.flatten<{ a: string }[]>(array, true);
        result = _.flatten(array, true);

        result = _<{ a: string }[]>(array).flatten(true);
        result = _(array).flatten(true);

        result = _.chain<{ a: string }[]>(array).flatten(true).value();
        result = _.chain(array).flatten(true).value();

        result = _.chain<{ a: string }[]>(array).flatten(true).value();
        result = _.chain(array).flatten(true).value();
    }

    {
        const list: _.List<_.List<{ a: string }>> = { 0: { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 }, 1: { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 }, length: 2 };
        let result: { a: string }[];

        result = _.flatten<_.List<{ a: string }>>(list, true);
        result = _.flatten(list, true);

        result = _<_.List<{ a: string }>>(list).flatten(true);
        result = _(list).flatten(true);

        result = _.chain<_.List<{ a: string }>>(list).flatten(true).value();
        result = _.chain(list).flatten(true).value();

        result = _<_.List<{ a: string }>>(list).chain().flatten(true).value();
        result = _.chain(list).flatten(true).value();
    }

    // three dimensions, deep
    {
        const array: { a: string }[][][] = [[[{ a: 'a' }, { a: 'b' }], [{ a: 'a' }, { a: 'b' }]]];
        let result: { a: string }[];

        result = _.flatten<{ a: string }[][]>(array);
        result = _.flatten(array);

        result = _<{ a: string }[][]>(array).flatten();
        result = _(array).flatten();

        result = _.chain<{ a: string }[][]>(array).flatten().value();
        result = _.chain(array).flatten().value();

        result = _.chain<{ a: string }[][]>(array).flatten().value();
        result = _.chain(array).flatten().value();
    }

    {
        const list: _.List<_.List<_.List<{ a: string }>>> = { 0: { 0: { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 }, 1: { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 }, length: 2 }, length: 1 };
        let result: { a: string }[];

        result = _.flatten<_.List<_.List<{ a: string }>>>(list);
        result = _.flatten(list);

        result = _<_.List<_.List<{ a: string }>>>(list).flatten();
        result = _(list).flatten();

        result = _.chain < _.List<_.List<{ a: string }>>>(list).flatten().value();
        result = _.chain(list).flatten().value();

        result = _<_.List<_.List<{ a: string }>>>(list).chain().flatten().value();
        result = _.chain(list).flatten().value();
    }

    // three dimensions, shallow
    {
        const array: { a: string }[][][] = [[[{ a: 'a' }, { a: 'b' }], [{ a: 'a' }, { a: 'b' }]]];
        let result: { a: string }[][];

        result = _.flatten<{ a: string }[][]>(array, true);
        result = _.flatten(array, true);

        result = _<{ a: string }[][]>(array).flatten(true);
        result = _(array).flatten(true);

        result = _.chain<{ a: string }[][]>(array).flatten(true).value();
        result = _.chain(array).flatten(true).value();

        result = _.chain<{ a: string }[][]>(array).flatten(true).value();
        result = _.chain(array).flatten(true).value();
    }

    {
        const list: _.List<_.List<_.List<{ a: string }>>> = { 0: { 0: { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 }, 1: { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 }, length: 2 }, length: 1 };
        let result: _.List<{ a: string }>[];

        result = _.flatten<_.List<_.List<{ a: string }>>>(list, true);
        result = _.flatten(list, true);

        result = _<_.List<_.List<{ a: string }>>>(list).flatten(true);
        result = _(list).flatten(true);

        result = _.chain<_.List<_.List<{ a: string }>>>(list).flatten(true).value();
        result = _.chain(list).flatten(true).value();

        result = _<_.List<_.List<{ a: string }>>>(list).chain().flatten(true).value();
        result = _.chain(list).flatten(true).value();
    }

    // four dimensions, deep - this is where recursion gives up, use a type that's definitely wrong to check that giving up happens
    {
        const array: { a: string }[][][][] = [[[[{ a: 'a' }, { a: 'b' }], [{ a: 'a' }, { a: 'b' }]]]];
        let result: number[];

        result = _.flatten<{ a: string }[][][]>(array);
        result = _.flatten(array);

        result = _<{ a: string }[][][]>(array).flatten();
        result = _(array).flatten();

        result = _.chain<{ a: string }[][][]>(array).flatten().value();
        result = _.chain(array).flatten().value();

        result = _.chain<{ a: string }[][][]>(array).flatten().value();
        result = _.chain(array).flatten().value();
    }

    {
        const list: _.List<_.List<_.List<_.List<{ a: string }>>>> = { 0: { 0: { 0: { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 }, 1: { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 }, length: 2 }, length: 1 }, length: 1 };
        let result: number[];

        result = _.flatten<_.List<_.List<_.List<{ a: string }>>>>(list);
        result = _.flatten(list);

        result = _<_.List<_.List<_.List<{ a: string }>>>>(list).flatten();
        result = _(list).flatten();

        result = _.chain<_.List<_.List<_.List<{ a: string }>>>>(list).flatten().value();
        result = _.chain(list).flatten().value();

        result = _<_.List<_.List<_.List<{ a: string }>>>>(list).chain().flatten().value();
        result = _.chain(list).flatten().value();
    }
}

// without
{
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }, { a: 'c' }];
        const item1 = array[0];
        const item2 = array[1];
        let result: { a: string }[];

        result = _.without<{ a: string }>(array, item1, item2);
        result = _.without(array, item1, item2);

        result = _<{ a: string }>(array).without(item1, item2);
        result = _(array).without(item1, item2);

        result = _.chain<{ a: string }>(array).without(item1, item2).value();
        result = _.chain(array).without(item1, item2).value();

        result = _.chain<{ a: string }>(array).without(item1, item2).value();
        result = _.chain(array).without(item1, item2).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, 2: { a: 'c' }, length: 3 };
        const item1 = list[0];
        const item2 = list[1];
        let result: { a: string }[];

        result = _.without<{ a: string }>(list, item1, item2);
        result = _.without(list, item1, item2);

        result = _<{ a: string }>(list).without(item1, item2);
        result = _(list).without(item1, item2);

        result = _.chain<{ a: string }>(list).without(item1, item2).value();
        result = _.chain(list).without(item1, item2).value();

        result = _.chain<{ a: string }>(list).without(item1, item2).value();
        result = _.chain(list).without(item1, item2).value();
    }

    {
        const str = 'abc';
        const item1 = str[0];
        const item2 = str[1];
        let result: string[];

        result = _.without<string>(str, item1, item2);
        result = _.without(str, item1, item2);

        result = _<string>(str).without(item1, item2);
        result = _(str).without(item1, item2);

        result = _.chain<string>(str).without(item1, item2).value();
        result = _.chain(str).without(item1, item2).value();
    }
}

// union
{
    {
        const array1: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const array2: { a: string }[] = [array1[0], { a: 'c' }];
        let result: { a: string }[];

        result = _.union<{ a: string }>(array1, array2);
        result = _.union(array1, array2);

        result = _<{ a: string }>(array1).union(array2);
        result = _(array1).union(array2);

        result = _.chain<{ a: string }>(array1).union(array2).value();
        result = _.chain(array1).union(array2).value();

        result = _.chain<{ a: string }>(array1).union(array2).value();
        result = _.chain(array1).union(array2).value();
    }

    {
        const list1: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const list2: _.List<{ a: string }> = { 0: list1[0], 1: { a: 'c' }, length: 2 };
        let result: { a: string }[];

        result = _.union<{ a: string }>(list1, list2);
        result = _.union(list1, list2);

        result = _<{ a: string }>(list1).union(list2);
        result = _(list1).union(list2);

        result = _.chain<{ a: string }>(list1).union(list2).value();
        result = _.chain(list1).union(list2).value();

        result = _.chain<{ a: string }>(list1).union(list2).value();
        result = _.chain(list1).union(list2).value();
    }

    {
        const str1 = 'ab';
        const str2 = 'bc';
        let result: string[];

        result = _.union<string>(str1, str2);
        result = _.union(str1, str2);;

        result = _<string>(str1).union(str2);
        result = _(str1).union(str2);

        result = _.chain<string>(str1).union(str2).value();
        result = _.chain(str1).union(str2).value();
    }
}

// intersection
{
    {
        const array1: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const array2: { a: string }[] = [array1[0], { a: 'c' }];
        let result: { a: string }[];

        result = _.intersection<{ a: string }>(array1, array2);
        result = _.intersection(array1, array2);

        result = _<{ a: string }>(array1).intersection(array2);
        result = _(array1).intersection(array2);

        result = _.chain<{ a: string }>(array1).intersection(array2).value();
        result = _.chain(array1).intersection(array2).value();

        result = _.chain<{ a: string }>(array1).intersection(array2).value();
        result = _.chain(array1).intersection(array2).value();
    }

    {
        const list1: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const list2: _.List<{ a: string }> = { 0: list1[0], 1: { a: 'c' }, length: 2 };
        let result: { a: string }[];

        result = _.intersection<{ a: string }>(list1, list2);
        result = _.intersection(list1, list2);

        result = _<{ a: string }>(list1).intersection(list2);
        result = _(list1).intersection(list2);

        result = _.chain<{ a: string }>(list1).intersection(list2).value();
        result = _.chain(list1).intersection(list2).value();

        result = _.chain<{ a: string }>(list1).intersection(list2).value();
        result = _.chain(list1).intersection(list2).value();
    }

    {
        const str1 = 'ab';
        const str2 = 'bc';
        let result: string[];

        result = _.intersection<string>(str1, str2);
        result = _.intersection(str1, str2);;

        result = _<string>(str1).intersection(str2);
        result = _(str1).intersection(str2);

        result = _.chain<string>(str1).intersection(str2).value();
        result = _.chain(str1).intersection(str2).value();
    }
}

// difference
{
    {
        const array1: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const array2: { a: string }[] = [array1[0], { a: 'c' }];
        let result: { a: string }[];

        result = _.difference<{ a: string }>(array1, array2);
        result = _.difference(array1, array2);

        result = _<{ a: string }>(array1).difference(array2);
        result = _(array1).difference(array2);

        result = _.chain<{ a: string }>(array1).difference(array2).value();
        result = _.chain(array1).difference(array2).value();

        result = _.chain<{ a: string }>(array1).difference(array2).value();
        result = _.chain(array1).difference(array2).value();
    }

    {
        const list1: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const list2: _.List<{ a: string }> = { 0: list1[0], 1: { a: 'c' }, length: 2 };
        let result: { a: string }[];

        result = _.difference<{ a: string }>(list1, list2);
        result = _.difference(list1, list2);

        result = _<{ a: string }>(list1).difference(list2);
        result = _(list1).difference(list2);

        result = _.chain<{ a: string }>(list1).difference(list2).value();
        result = _.chain(list1).difference(list2).value();

        result = _.chain<{ a: string }>(list1).difference(list2).value();
        result = _.chain(list1).difference(list2).value();
    }

    {
        const str1 = 'ab';
        const str2 = 'bc';
        let result: string[];

        result = _.difference<string>(str1, str2);
        result = _.difference(str1, str2);;

        result = _<string>(str1).difference(str2);
        result = _(str1).difference(str2);

        result = _.chain<string>(str1).difference(str2).value();
        result = _.chain(str1).difference(str2).value();
    }
}

// uniq, unique
{
    const context = {};

    // function iterator
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const iterator = (value: { a: string }, index: number, list: _.List<{ a: string }>) => value.a;
        let result: { a: string }[];

        result = _.uniq<{ a: string }>(array);
        result = _.uniq<{ a: string }>(array, true);
        result = _.uniq<{ a: string }>(array, true, iterator);
        result = _.uniq<{ a: string }>(array, true, iterator, context);
        result = _.uniq(array);
        result = _.uniq(array, true);
        result = _.uniq(array, true, iterator);
        result = _.uniq(array, true, iterator, context);

        result = _<{ a: string }>(array).uniq();
        result = _<{ a: string }>(array).uniq(true);
        result = _<{ a: string }>(array).uniq(true, iterator);
        result = _<{ a: string }>(array).uniq(true, iterator, context);
        result = _(array).uniq();
        result = _(array).uniq(true);
        result = _(array).uniq(true, iterator);
        result = _(array).uniq(true, iterator, context);

        result = _.chain<{ a: string }>(array).uniq().value();
        result = _.chain<{ a: string }>(array).uniq(true).value();
        result = _.chain<{ a: string }>(array).uniq(true, iterator).value();
        result = _.chain<{ a: string }>(array).uniq(true, iterator, context).value();
        result = _.chain(array).uniq().value();
        result = _.chain(array).uniq(true).value();
        result = _.chain(array).uniq(true, iterator).value();
        result = _.chain(array).uniq(true, iterator, context).value();

        result = _.unique<{ a: string }>(array);
        result = _.unique<{ a: string }>(array, true);
        result = _.unique<{ a: string }>(array, true, iterator);
        result = _.unique<{ a: string }>(array, true, iterator, context);
        result = _.unique(array);
        result = _.unique(array, true);
        result = _.unique(array, true, iterator);
        result = _.unique(array, true, iterator, context);

        result = _<{ a: string }>(array).unique();
        result = _<{ a: string }>(array).unique(true);
        result = _<{ a: string }>(array).unique(true, iterator);
        result = _<{ a: string }>(array).unique(true, iterator, context);
        result = _(array).unique();
        result = _(array).unique(true);
        result = _(array).unique(true, iterator);
        result = _(array).unique(true, iterator, context);

        result = _.chain<{ a: string }>(array).unique().value();
        result = _.chain<{ a: string }>(array).unique(true).value();
        result = _.chain<{ a: string }>(array).unique(true, iterator).value();
        result = _.chain<{ a: string }>(array).unique(true, iterator, context).value();
        result = _.chain(array).unique().value();
        result = _.chain(array).unique(true).value();
        result = _.chain(array).unique(true, iterator).value();
        result = _.chain(array).unique(true, iterator, context).value();

        result = _.chain<{ a: string }>(array).unique().value();
        result = _.chain<{ a: string }>(array).unique(true).value();
        result = _.chain<{ a: string }>(array).unique(true, iterator).value();
        result = _.chain<{ a: string }>(array).unique(true, iterator, context).value();
        result = _.chain(array).unique().value();
        result = _.chain(array).unique(true).value();
        result = _.chain(array).unique(true, iterator).value();
        result = _.chain(array).unique(true, iterator, context).value();
    }

    {
        const list: _.List<({ a: string })> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const iterator = (value: { a: string }, index: number, list: _.List<{ a: string }>) => value.a;
        let result: { a: string }[];

        result = _.uniq<{ a: string }>(list);
        result = _.uniq<{ a: string }>(list, iterator);
        result = _.uniq<{ a: string }>(list, iterator, context);
        result = _.uniq<{ a: string }>(list, true);
        result = _.uniq<{ a: string }>(list, true, iterator);
        result = _.uniq<{ a: string }>(list, true, iterator, context);
        result = _.uniq(list);
        result = _.uniq(list, iterator);
        result = _.uniq(list, iterator, context);
        result = _.uniq(list, true);
        result = _.uniq(list, true, iterator);
        result = _.uniq(list, true, iterator, context);

        result = _<{ a: string }>(list).uniq();
        result = _<{ a: string }>(list).uniq(iterator);
        result = _<{ a: string }>(list).uniq(iterator, context);
        result = _<{ a: string }>(list).uniq(true);
        result = _<{ a: string }>(list).uniq(true, iterator);
        result = _<{ a: string }>(list).uniq(true, iterator, context);
        result = _(list).uniq();
        result = _(list).uniq(iterator);
        result = _(list).uniq(iterator, context);
        result = _(list).uniq(true);
        result = _(list).uniq(true, iterator);
        result = _(list).uniq(true, iterator, context);

        result = _.chain<{ a: string }>(list).uniq().value();
        result = _.chain<{ a: string }>(list).uniq(iterator).value();
        result = _.chain<{ a: string }>(list).uniq(iterator, context).value();
        result = _.chain<{ a: string }>(list).uniq(true).value();
        result = _.chain<{ a: string }>(list).uniq(true, iterator).value();
        result = _.chain<{ a: string }>(list).uniq(true, iterator, context).value();
        result = _.chain(list).uniq().value();
        result = _.chain(list).uniq(iterator).value();
        result = _.chain(list).uniq(iterator, context).value();
        result = _.chain(list).uniq(true).value();
        result = _.chain(list).uniq(true, iterator).value();
        result = _.chain(list).uniq(true, iterator, context).value();

        result = _.unique<{ a: string }>(list);
        result = _.unique<{ a: string }>(list, iterator);
        result = _.unique<{ a: string }>(list, iterator, context);
        result = _.unique<{ a: string }>(list, true);
        result = _.unique<{ a: string }>(list, true, iterator);
        result = _.unique<{ a: string }>(list, true, iterator, context);
        result = _.unique(list);
        result = _.unique(list, iterator);
        result = _.unique(list, iterator, context);
        result = _.unique(list, true);
        result = _.unique(list, true, iterator);
        result = _.unique(list, true, iterator, context);

        result = _<{ a: string }>(list).unique();
        result = _<{ a: string }>(list).unique(iterator);
        result = _<{ a: string }>(list).unique(iterator, context);
        result = _<{ a: string }>(list).unique(true);
        result = _<{ a: string }>(list).unique(true, iterator);
        result = _<{ a: string }>(list).unique(true, iterator, context);
        result = _(list).unique();
        result = _(list).unique(iterator);
        result = _(list).unique(iterator, context);
        result = _(list).unique(true);
        result = _(list).unique(true, iterator);
        result = _(list).unique(true, iterator, context);

        result = _.chain<{ a: string }>(list).unique().value();
        result = _.chain<{ a: string }>(list).unique(iterator).value();
        result = _.chain<{ a: string }>(list).unique(iterator, context).value();
        result = _.chain<{ a: string }>(list).unique(true).value();
        result = _.chain<{ a: string }>(list).unique(true, iterator).value();
        result = _.chain<{ a: string }>(list).unique(true, iterator, context).value();
        result = _.chain(list).unique().value();
        result = _.chain(list).unique(iterator).value();
        result = _.chain(list).unique(iterator, context).value();
        result = _.chain(list).unique(true).value();
        result = _.chain(list).unique(true, iterator).value();
        result = _.chain(list).unique(true, iterator, context).value();

        result = _.chain<{ a: string }>(list).unique().value();
        result = _.chain<{ a: string }>(list).unique(iterator).value();
        result = _.chain<{ a: string }>(list).unique(iterator, context).value();
        result = _.chain<{ a: string }>(list).unique(true).value();
        result = _.chain<{ a: string }>(list).unique(true, iterator).value();
        result = _.chain<{ a: string }>(list).unique(true, iterator, context).value();
        result = _.chain(list).unique().value();
        result = _.chain(list).unique(iterator).value();
        result = _.chain(list).unique(iterator, context).value();
        result = _.chain(list).unique(true).value();
        result = _.chain(list).unique(true, iterator).value();
        result = _.chain(list).unique(true, iterator, context).value();
    }

    // property name iterator
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const property = 'a';
        let result: { a: string }[];

        result = _.uniq<{ a: string }>(array, property);
        result = _.uniq<{ a: string }>(array, true, property);
        result = _.uniq(array, property);
        result = _.uniq(array, true, property);

        result = _<{ a: string }>(array).uniq( property);
        result = _<{ a: string }>(array).uniq(true, property);
        result = _(array).uniq(property);
        result = _(array).uniq(true, property);

        result = _.chain<{ a: string }>(array).uniq(property).value();
        result = _.chain<{ a: string }>(array).uniq(true, property).value();
        result = _.chain(array).uniq(property).value();
        result = _.chain(array).uniq(true, property).value();

        result = _.unique<{ a: string }>(array, property);
        result = _.unique<{ a: string }>(array, true, property);
        result = _.unique(array, property);
        result = _.unique(array, true, property);

        result = _<{ a: string }>(array).unique(property);
        result = _<{ a: string }>(array).unique(true, property);
        result = _(array).unique(property);
        result = _(array).unique(true, property);

        result = _.chain<{ a: string }>(array).unique(property).value();
        result = _.chain<{ a: string }>(array).unique(true, property).value();
        result = _.chain(array).unique(property).value();
        result = _.chain(array).unique(true, property).value();

        result = _.chain<{ a: string }>(array).unique(property).value();
        result = _.chain<{ a: string }>(array).unique(true, property).value();
        result = _.chain(array).unique(property).value();
        result = _.chain(array).unique(true, property).value();
    }

    {
        const list: _.List<({ a: string })> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const property = 'a';
        let result: { a: string }[];

        result = _.uniq<{ a: string }>(list, property);
        result = _.uniq<{ a: string }>(list, true, property);
        result = _.uniq(list, property);
        result = _.uniq(list, true, property);

        result = _<{ a: string }>(list).uniq(property);
        result = _<{ a: string }>(list).uniq(true, property);
        result = _(list).uniq(property);
        result = _(list).uniq(true, property);

        result = _.chain<{ a: string }>(list).uniq(property).value();
        result = _.chain<{ a: string }>(list).uniq(true, property).value();
        result = _.chain(list).uniq(property).value();
        result = _.chain(list).uniq(true, property).value();

        result = _.unique<{ a: string }>(list, property);
        result = _.unique<{ a: string }>(list, true, property);
        result = _.unique(list, property);
        result = _.unique(list, true, property);

        result = _<{ a: string }>(list).unique(property);
        result = _<{ a: string }>(list).unique(true, property);
        result = _(list).unique(property);
        result = _(list).unique(true, property);

        result = _.chain<{ a: string }>(list).unique(property).value();
        result = _.chain<{ a: string }>(list).unique(true, property).value();
        result = _.chain(list).unique(property).value();
        result = _.chain(list).unique(true, property).value();

        result = _.chain<{ a: string }>(list).unique(property).value();
        result = _.chain<{ a: string }>(list).unique(true, property).value();
        result = _.chain(list).unique(property).value();
        result = _.chain(list).unique(true, property).value();
    }
}

// chunk
{
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }, { a: 'c' }];
        const length = 2;
        let result: { a: string }[][];

        result = _.chunk<{ a: string }>(array, length);
        result = _.chunk(array, length);

        result = _<{ a: string }>(array).chunk(length);
        result = _(array).chunk(length);

        result = _.chain<{ a: string }>(array).chunk(length).value();
        result = _.chain(array).chunk(length).value();

        result = _.chain<{ a: string }>(array).chunk(length).value();
        result = _.chain(array).chunk(length).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, 2: { a: 'b' }, length: 3 };
        const length = 2;
        let result: { a: string }[][];

        result = _.chunk<{ a: string }>(list, length);
        result = _.chunk(list, length);

        result = _<{ a: string }>(list).chunk(length);
        result = _(list).chunk(length);

        result = _.chain<{ a: string }>(list).chunk(length).value();
        result = _.chain(list).chunk(length).value();

        result = _.chain<{ a: string }>(list).chunk(length).value();
        result = _.chain(list).chunk(length).value();
    }

    {
        const str = 'abc';
        const length = 2;
        let result: string[][];

        result = _.chunk<string>(str, length);
        result = _.chunk(str, length);

        result = _<string>(str).chunk(length);
        result = _(str).chunk(length);

        result = _.chain<string>(str).chunk(length).value();
        result = _.chain(str).chunk(length).value();
    }
}

// indexOf
{
    const isSorted = true;

    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const item = array[0];
        let result: number;

        result = _.indexOf<{ a: string }>(array, item);
        result = _.indexOf<{ a: string }>(array, item, isSorted);
        result = _.indexOf(array, item);
        result = _.indexOf(array, item, isSorted);

        result = _<{ a: string }>(array).indexOf(item);
        result = _<{ a: string }>(array).indexOf(item, isSorted);
        result = _(array).indexOf(item);
        result = _(array).indexOf(item, isSorted);

        result = _.chain<{ a: string }>(array).indexOf(item).value();
        result = _.chain<{ a: string }>(array).indexOf(item, isSorted).value();
        result = _.chain(array).indexOf(item).value();
        result = _.chain(array).indexOf(item, isSorted).value();

        result = _.chain<{ a: string }>(array).indexOf(item).value();
        result = _.chain<{ a: string }>(array).indexOf(item, isSorted).value();
        result = _.chain(array).indexOf(item).value();
        result = _.chain(array).indexOf(item, isSorted).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const item = list[0];
        let result: number;

        result = _.indexOf<{ a: string }>(list, item);
        result = _.indexOf<{ a: string }>(list, item, isSorted);
        result = _.indexOf(list, item);
        result = _.indexOf(list, item, isSorted);

        result = _<{ a: string }>(list).indexOf(item);
        result = _<{ a: string }>(list).indexOf(item, isSorted);
        result = _(list).indexOf(item);
        result = _(list).indexOf(item, isSorted);

        result = _.chain<{ a: string }>(list).indexOf(item).value();
        result = _.chain<{ a: string }>(list).indexOf(item, isSorted).value();
        result = _.chain(list).indexOf(item).value();
        result = _.chain(list).indexOf(item, isSorted).value();

        result = _.chain<{ a: string }>(list).indexOf(item).value();
        result = _.chain<{ a: string }>(list).indexOf(item, isSorted).value();
        result = _.chain(list).indexOf(item).value();
        result = _.chain(list).indexOf(item, isSorted).value();
    }

    {
        const str = 'abc';
        const item = str[0];
        let result: number;

        result = _.indexOf<string>(str, item);
        result = _.indexOf<string>(str, item, isSorted);
        result = _.indexOf(str, item);
        result = _.indexOf(str, item, isSorted);

        result = _<string>(str).indexOf(item);
        result = _<string>(str).indexOf(item, isSorted);
        result = _(str).indexOf(item);
        result = _(str).indexOf(item, isSorted);

        result = _.chain<string>(str).indexOf(item).value();
        result = _.chain<string>(str).indexOf(item, isSorted).value();
        result = _.chain(str).indexOf(item).value();
        result = _.chain(str).indexOf(item, isSorted).value();
    }
}

// lastIndexof
{
    const fromIndex = 1;

    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const item = array[0];
        let result: number;

        result = _.lastIndexOf<{ a: string }>(array, item);
        result = _.lastIndexOf<{ a: string }>(array, item, fromIndex);
        result = _.lastIndexOf(array, item);
        result = _.lastIndexOf(array, item, fromIndex);

        result = _<{ a: string }>(array).lastIndexOf(item);
        result = _<{ a: string }>(array).lastIndexOf(item, fromIndex);
        result = _(array).lastIndexOf(item);
        result = _(array).lastIndexOf(item, fromIndex);

        result = _.chain<{ a: string }>(array).lastIndexOf(item).value();
        result = _.chain<{ a: string }>(array).lastIndexOf(item, fromIndex).value();
        result = _.chain(array).lastIndexOf(item).value();
        result = _.chain(array).lastIndexOf(item, fromIndex).value();

        result = _.chain<{ a: string }>(array).lastIndexOf(item).value();
        result = _.chain<{ a: string }>(array).lastIndexOf(item, fromIndex).value();
        result = _.chain(array).lastIndexOf(item).value();
        result = _.chain(array).lastIndexOf(item, fromIndex).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const item = list[0];
        let result: number;

        result = _.lastIndexOf<{ a: string }>(list, item);
        result = _.lastIndexOf<{ a: string }>(list, item, fromIndex);
        result = _.lastIndexOf(list, item);
        result = _.lastIndexOf(list, item, fromIndex);

        result = _<{ a: string }>(list).lastIndexOf(item);
        result = _<{ a: string }>(list).lastIndexOf(item, fromIndex);
        result = _(list).lastIndexOf(item);
        result = _(list).lastIndexOf(item, fromIndex);

        result = _.chain<{ a: string }>(list).lastIndexOf(item).value();
        result = _.chain<{ a: string }>(list).lastIndexOf(item, fromIndex).value();
        result = _.chain(list).lastIndexOf(item).value();
        result = _.chain(list).lastIndexOf(item, fromIndex).value();

        result = _.chain<{ a: string }>(list).lastIndexOf(item).value();
        result = _.chain<{ a: string }>(list).lastIndexOf(item, fromIndex).value();
        result = _.chain(list).lastIndexOf(item).value();
        result = _.chain(list).lastIndexOf(item, fromIndex).value();
    }

    {
        const str = 'abc';
        const item = str[0];
        let result: number;

        result = _.lastIndexOf<string>(str, item);
        result = _.lastIndexOf<string>(str, item, fromIndex);
        result = _.lastIndexOf(str, item);
        result = _.lastIndexOf(str, item, fromIndex);

        result = _<string>(str).lastIndexOf(item);
        result = _<string>(str).lastIndexOf(item, fromIndex);
        result = _(str).lastIndexOf(item);
        result = _(str).lastIndexOf(item, fromIndex);

        result = _.chain<string>(str).lastIndexOf(item).value();
        result = _.chain<string>(str).lastIndexOf(item, fromIndex).value();
        result = _.chain(str).lastIndexOf(item).value();
        result = _.chain(str).lastIndexOf(item, fromIndex).value();
    }
}

// findIndex
{
    const context = {};

    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const iterator = (value: { a: string }, index: number, list: _.List<{ a: string }>) => value.a === 'b';
        let result: number;

        result = _.findIndex<{ a: string }>(array, iterator);
        result = _.findIndex<{ a: string }>(array, iterator, context);
        result = _.findIndex(array, iterator);
        result = _.findIndex(array, iterator, context);

        result = _<{ a: string }>(array).findIndex(iterator);
        result = _<{ a: string }>(array).findIndex(iterator, context);
        result = _(array).findIndex(iterator);
        result = _(array).findIndex(iterator, context);

        result = _.chain<{ a: string }>(array).findIndex(iterator).value();
        result = _.chain<{ a: string }>(array).findIndex(iterator, context).value();
        result = _.chain(array).findIndex(iterator).value();
        result = _.chain(array).findIndex(iterator, context).value();

        result = _.chain<{ a: string }>(array).findIndex(iterator).value();
        result = _.chain<{ a: string }>(array).findIndex(iterator, context).value();
        result = _.chain(array).findIndex(iterator).value();
        result = _.chain(array).findIndex(iterator, context).value();
    }

    {
        const array: { a: string, b: string }[] = [{ a: 'a', b: 'c' }, { a: 'b', b: 'd' }];
        const properties = { a: 'b' };
        let result: number;

        result = _.findIndex<{ a: string }>(array, properties);
        result = _.findIndex(array, properties);

        result = _<{ a: string }>(array).findIndex(properties);
        result = _(array).findIndex(properties);

        result = _.chain<{ a: string }>(array).findIndex(properties).value();
        result = _.chain(array).findIndex(properties).value();

        result = _.chain<{ a: string }>(array).findIndex(properties).value();
        result = _.chain(array).findIndex(properties).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const iterator = (value: { a: string }, index: number, list: _.List<{ a: string }>) => value.a === 'b';
        let result: number;

        result = _.findIndex<{ a: string }>(list, iterator);
        result = _.findIndex<{ a: string }>(list, iterator, context);
        result = _.findIndex(list, iterator);
        result = _.findIndex(list, iterator, context);

        result = _<{ a: string }>(list).findIndex(iterator);
        result = _<{ a: string }>(list).findIndex(iterator, context);
        result = _(list).findIndex(iterator);
        result = _(list).findIndex(iterator, context);

        result = _.chain<{ a: string }>(list).findIndex(iterator).value();
        result = _.chain<{ a: string }>(list).findIndex(iterator, context).value();
        result = _.chain(list).findIndex(iterator).value();
        result = _.chain(list).findIndex(iterator, context).value();

        result = _.chain<{ a: string }>(list).findIndex(iterator).value();
        result = _.chain<{ a: string }>(list).findIndex(iterator, context).value();
        result = _.chain(list).findIndex(iterator).value();
        result = _.chain(list).findIndex(iterator, context).value();
    }

    {
        const list: _.List<{ a: string, b: string }> = { 0: { a: 'a', b: 'c' }, 1: { a: 'b', b: 'd' }, length: 2 };
        const properties = { a: 'b' };
        let result: number;

        result = _.findIndex<{ a: string }>(list, properties);
        result = _.findIndex(list, properties);

        result = _<{ a: string }>(list).findIndex(properties);
        result = _(list).findIndex(properties);

        result = _.chain<{ a: string }>(list).findIndex(properties).value();
        result = _.chain(list).findIndex(properties).value();

        result = _.chain<{ a: string }>(list).findIndex(properties).value();
        result = _.chain(list).findIndex(properties).value();
    }

    {
        const str = 'abc';
        const iterator = (value: string, index: number, list: _.List<string>) => value === 'b';
        let result: number;

        result = _.findIndex<string>(str, iterator);
        result = _.findIndex<string>(str, iterator, context);
        result = _.findIndex(str, iterator);
        result = _.findIndex(str, iterator, context);

        result = _<string>(str).findIndex(iterator);
        result = _<string>(str).findIndex(iterator, context);
        result = _(str).findIndex(iterator);
        result = _(str).findIndex(iterator, context);

        result = _.chain<string>(str).findIndex(iterator).value();
        result = _.chain<string>(str).findIndex(iterator, context).value();
        result = _.chain(str).findIndex(iterator).value();
        result = _.chain(str).findIndex(iterator, context).value();
    }
}

// findLastIndex
{
    const context = {};

    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const iterator = (value: { a: string }, index: number, list: _.List<{ a: string }>) => value.a === 'b';
        let result: number;

        result = _.findLastIndex<{ a: string }>(array, iterator);
        result = _.findLastIndex<{ a: string }>(array, iterator, context);
        result = _.findLastIndex(array, iterator);
        result = _.findLastIndex(array, iterator, context);

        result = _<{ a: string }>(array).findLastIndex(iterator);
        result = _<{ a: string }>(array).findLastIndex(iterator, context);
        result = _(array).findLastIndex(iterator);
        result = _(array).findLastIndex(iterator, context);

        result = _.chain<{ a: string }>(array).findLastIndex(iterator).value();
        result = _.chain<{ a: string }>(array).findLastIndex(iterator, context).value();
        result = _.chain(array).findLastIndex(iterator).value();
        result = _.chain(array).findLastIndex(iterator, context).value();

        result = _.chain<{ a: string }>(array).findLastIndex(iterator).value();
        result = _.chain<{ a: string }>(array).findLastIndex(iterator, context).value();
        result = _.chain(array).findLastIndex(iterator).value();
        result = _.chain(array).findLastIndex(iterator, context).value();
    }

    {
        const array: { a: string, b: string }[] = [{ a: 'a', b: 'c' }, { a: 'b', b: 'd' }];
        const properties = { a: 'b' };
        let result: number;

        result = _.findLastIndex<{ a: string }>(array, properties);
        result = _.findLastIndex(array, properties);

        result = _<{ a: string }>(array).findLastIndex(properties);
        result = _(array).findLastIndex(properties);

        result = _.chain<{ a: string }>(array).findLastIndex(properties).value();
        result = _.chain(array).findLastIndex(properties).value();

        result = _.chain<{ a: string }>(array).findLastIndex(properties).value();
        result = _.chain(array).findLastIndex(properties).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const iterator = (value: { a: string }, index: number, list: _.List<{ a: string }>) => value.a === 'b';
        let result: number;

        result = _.findLastIndex<{ a: string }>(list, iterator);
        result = _.findLastIndex<{ a: string }>(list, iterator, context);
        result = _.findLastIndex(list, iterator);
        result = _.findLastIndex(list, iterator, context);

        result = _<{ a: string }>(list).findLastIndex(iterator);
        result = _<{ a: string }>(list).findLastIndex(iterator, context);
        result = _(list).findLastIndex(iterator);
        result = _(list).findLastIndex(iterator, context);

        result = _.chain<{ a: string }>(list).findLastIndex(iterator).value();
        result = _.chain<{ a: string }>(list).findLastIndex(iterator, context).value();
        result = _.chain(list).findLastIndex(iterator).value();
        result = _.chain(list).findLastIndex(iterator, context).value();

        result = _.chain<{ a: string }>(list).findLastIndex(iterator).value();
        result = _.chain<{ a: string }>(list).findLastIndex(iterator, context).value();
        result = _.chain(list).findLastIndex(iterator).value();
        result = _.chain(list).findLastIndex(iterator, context).value();
    }

    {
        const list: _.List<{ a: string, b: string }> = { 0: { a: 'a', b: 'c' }, 1: { a: 'b', b: 'd' }, length: 2 };
        const properties = { a: 'b' };
        let result: number;

        result = _.findLastIndex<{ a: string }>(list, properties);
        result = _.findLastIndex(list, properties);

        result = _<{ a: string }>(list).findLastIndex(properties);
        result = _(list).findLastIndex(properties);

        result = _.chain<{ a: string }>(list).findLastIndex(properties).value();
        result = _.chain(list).findLastIndex(properties).value();

        result = _.chain<{ a: string }>(list).findLastIndex(properties).value();
        result = _.chain(list).findLastIndex(properties).value();
    }

    {
        const str = 'abc';
        const iterator = (value: string, index: number, list: _.List<string>) => value === 'b';
        let result: number;

        result = _.findLastIndex<string>(str, iterator);
        result = _.findLastIndex<string>(str, iterator, context);
        result = _.findLastIndex(str, iterator);
        result = _.findLastIndex(str, iterator, context);

        result = _<string>(str).findLastIndex(iterator);
        result = _<string>(str).findLastIndex(iterator, context);
        result = _(str).findLastIndex(iterator);
        result = _(str).findLastIndex(iterator, context);

        result = _.chain<string>(str).findLastIndex(iterator).value();
        result = _.chain<string>(str).findLastIndex(iterator, context).value();
        result = _.chain(str).findLastIndex(iterator).value();
        result = _.chain(str).findLastIndex(iterator, context).value();
    }
}

// range
{
    const start = 0;
    const stop = 10;
    const step = 1;
    let result: number[];

    result = _.range(stop);
    result = _.range(start, stop);
    result = _.range(start, stop, step);

    result = _(stop).range();
    result = _(start).range(stop);
    result = _(start).range(stop, step);

    result = _.chain(stop).range().value();
    result = _.chain(start).range(stop).value();
    result = _.chain(start).range(stop, step).value();
}

// Chaining

// chain
// as a breaking change, consider either removing Chain.chain or making its return type "never" since while it is technically something that one can do as far as I can tell
// doing it always results in a stack overflow
// as a breaking chnage, consider updating chain<string>() to return Chain<string, string> rather than Chain<string, _.List<string>>
{
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        let result: _._Chain<{ a: string }, { a: string }[]>;

        result = _.chain<{ a: string }>(array);
        result = _.chain(array);

        result = _<{ a: string }>(array).chain();
        result = _(array).chain();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        let result: _._Chain<{ a: string }, _.List<{ a: string }>>;

        result = _.chain<{ a: string }>(list);
        result = _.chain(list);

        result = _<{ a: string }>(list).chain();
        result = _(list).chain();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        let result: _._Chain<{ a: string }, _.Dictionary<{ a: string }>>;

        result = _.chain<{ a: string }>(dict);
        result = _.chain(dict);

        result = _<{ a: string }>(dict).chain();
        result = _(dict).chain();
    }

    {
        const str = 'abc';
        let result: _._Chain<string, _.List<string>>;

        result = _.chain<string>(str);
        result = _.chain(str);

        result = _<string>(str).chain();
        result = _(str).chain();
    }
}

var evens = _.filter([1, 2, 3, 4, 5, 6], (num) => num % 2 == 0);

var capitalLetters = _.filter({ a: 'a', b: 'B', c: 'C', d: 'd' }, l => l === l.toUpperCase());

var listOfPlays = [{ title: "Cymbeline", author: "Shakespeare", year: 1611 }, { title: "The Tempest", author: "Shakespeare", year: 1611 }, { title: "Other", author: "Not Shakespeare", year: 2012 }];
_.where(listOfPlays, { author: "Shakespeare", year: 1611 });

var odds = _.reject([1, 2, 3, 4, 5, 6], (num) => num % 2 == 0);

_.every([true, 1, null, 'yes'], x => !!_.identity(x));

_.any([null, 0, 'yes', false]);

_.some([1, 2, 3, 4], l => l % 3 === 0);

_.some({ a: 'a', b: 'B', c: 'C', d: 'd' }, l => l === l.toUpperCase());

_.contains([1, 2, 3], 3);

_.contains([1, 2, 3], 3, 1);

_.invoke([[5, 1, 7], [3, 2, 1]], 'sort');

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/33479
var foo: any[] = [{'a': 1, 'b': 2}];
_.pluck(foo, 'a');

var stooges = [{ name: 'moe', age: 40 }, { name: 'larry', age: 50 }, { name: 'curly', age: 60 }];
_.pluck(stooges, 'name');

_.max(stooges, (stooge) => stooge.age);
_.min(stooges, (stooge) => stooge.age);
_.max({ a: 1, b: 2 });
_.max({ a: 'a', b: 'bb' }, (v, k) => v.length);
_.min({ a: 1, b: 2 });
_.min({ a: 'a', b: 'bb' }, (v, k) => v.length);

var numbers = [10, 5, 100, 2, 1000];
_.max(numbers);
_.min(numbers);

_.sortBy([1, 2, 3, 4, 5, 6], (num) => Math.sin(num));

_([1, 2, 3]).chain()
    .sortBy(x => -x)
    .sortBy(x => -x)
    .value().length;

_([1.3, 2.1, 2.4]).groupBy((e) => Math.floor(e));
_.groupBy([1.3, 2.1, 2.4], (num) => Math.floor(num).toString());
_.groupBy(['one', 'two', 'three'], 'length');

_.indexBy(stooges, 'age')['40'].age;
_(stooges).indexBy('age')['40'].name;
_(stooges)
    .chain()
    .indexBy('age')
    .value()['40'].age;

let pensioners: string[] = _.chain(stooges)
    .filter(p => p.age >= 60)
    .map(p => p.name)
    .value();

var usersData: _.Dictionary<{ age: number; name: string }> = {
    'user id': { name: 'moe', age: 40 },
    'other user Id': { name: 'larry', age: 50 },
    'fake id': { name: 'curly', age: 60 },
};

let youngPeopleId: string[] = _.chain(usersData)
    .map((p, k: string) => k)
    .value();

let usersTable: { age: number; name: string; id: string }[] = _.chain(usersData)
    .map<{ age: number; name: string; id: string }>((p, k: string) => {
        return { id: k, ...p };
    })
    .value();

let usersTable_2 /*: { age: number; name: string; id: string }[][]*/ = _.chain(usersData)
    .map<{ age: number; name: string; id: string }[]>((p, k: string) => {
        return [{ id: k, ...p }];
    })
    .value();

let usersTable_3 /*: { score: number; fullName: string; login: string }[][]*/ = _.chain(usersTable)
    .map<{ score: number; fullName: string; login: string }[]>(p => {
        return [
            {
                login: p.id,
                fullName: p.name,
                score: p.age,
            },
        ];
    })
    .value();

_.countBy([1, 2, 3, 4, 5], (num) => (num % 2 == 0) ? 'even' : 'odd');

_.shuffle([1, 2, 3, 4, 5, 6]);

(function (a, b, c, d) { return _.toArray(arguments).slice(1); })(1, 2, 3, 4);

_.size({ one: 1, two: 2, three: 3 });

_.partition<number>([0, 1, 2, 3, 4, 5], (num) => {return num % 2 == 0 });

interface Family {
    name: string;
    relation: string;
}
var isUncleMoe = _.matches<Family>({ name: 'moe', relation: 'uncle' });
_.filter([{ name: 'larry', relation: 'father' }, { name: 'moe', relation: 'uncle' }], isUncleMoe);
var uncleMoe: Family = { name: 'moe', relation: 'uncle' };
isUncleMoe(uncleMoe);

///////////////////////////////////////////////////////////////////////////////////////

_.first([5, 4, 3, 2, 1]);
_.initial([5, 4, 3, 2, 1]);
_.last([5, 4, 3, 2, 1]);
_.rest([5, 4, 3, 2, 1]);
_.compact([0, 1, false, 2, '', 3]);

_.flatten([1, 2, 3, 4]);
_.flatten([1, [2]]);

// typescript doesn't like the elements being different
_.flatten([1, [2], [3, [[4]]]]);
_.flatten([1, [2], [3, [[4]]]], true);
_.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
_.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
_.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);
_.difference([1, 2, 3, 4, 5], [5, 2, 10]);
_.uniq([1, 2, 1, 3, 1, 4]);
_.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
var r = _.object(['moe', 'larry', 'curly'], [30, 40, 50]);
_.object([['moe', 30], ['larry', 40], ['curly', 50]]);
_.indexOf([1, 2, 3], 2);
_.lastIndexOf([1, 2, 3, 1, 2, 3], 2);
_.sortedIndex([10, 20, 30, 40, 50], 35);
_.findIndex([1, 2, 3, 1, 2, 3], num => num % 2 === 0);
_.findIndex([{a: 'a'}, {a: 'b'}], {a: 'b'});
_.findLastIndex([1, 2, 3, 1, 2, 3], num => num % 2 === 0);
_.findLastIndex([{ a: 'a' }, { a: 'b' }], { a: 'b' });
_.range(10);
_.range(1, 11);
_.range(0, 30, 5);
_.range(0, 30, 5);
_.range(0);

///////////////////////////////////////////////////////////////////////////////////////

var func = function (greeting) { return `${greeting}: ${this.name}` };
// need a second var otherwise typescript thinks func signature is the above func type,
// instead of the newly returned _bind => func type.
var func2 = _.bind(func, { name: 'moe' }, 'hi');
func2();

var buttonView = {
    label: 'underscore',
    onClick() { alert('clicked: ' + this.label); },
    onHover() { console.log('hovering: ' + this.label); }
};
_.bindAll(buttonView);
$('#underscore_button').bind('click', buttonView.onClick);

var fibonacci = _.memoize(function (n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
});

class MyClass {};

var classMemoized = _.memoize<MyClass>(function (classInstance) {
    return new classInstance();
});

var log = _.bind(console.log, console);
_.delay(log, 1000, 'logged later');

_.defer(function () { alert('deferred'); });

var updatePosition = (param:string) => alert('updating position... Param: ' + param);
var throttled = _.throttle(updatePosition, 100);
$(window).scroll(throttled);
throttled.cancel();

var calculateLayout = (param:string) => alert('calculating layout... Param: ' + param);
var lazyLayout = _.debounce(calculateLayout, 300);
$(window).resize(lazyLayout);
lazyLayout.cancel();

var createApplication = (param:string) => alert('creating application... Param: ' + param);
var initialize = _.once(createApplication);
initialize("me");
initialize("me");

var notes: any[] = [1,2,3];
var render = () => alert("rendering...");
var renderNotes = _.after(notes.length, render);
_.each(notes, (note) => note.asyncSave({ success: renderNotes }));

var hello = function (name) { return "hello: " + name; };
// can't use the same "hello" var otherwise typescript fails
var hello2 = _.wrap(hello, (func) => { return `before, ${func("moe")} + after`; });
hello2();

var greet = function (name) { return "hi: " + name; };
var exclaim = function (statement) { return statement + "!"; };
var welcome = _.compose(exclaim, greet);
welcome('moe');

var partialApplicationTestFunction = (a: string, b: number, c: boolean, d: string, e: number, f: string) => {  }
var partialApplicationResult = _.partial(partialApplicationTestFunction, "", 1);
var parametersCanBeStubbed = _.partial(partialApplicationResult, _, _, _, "");

///////////////////////////////////////////////////////////////////////////////////////

_.keys({ one: 1, two: 2, three: 3 });
_.values({ one: 1, two: 2, three: 3 });
_.pairs({ one: 1, two: 2, three: 3 });
_.invert({ Moe: "Moses", Larry: "Louis", Curly: "Jerome" });
_.functions(_);
_.extend({ name: 'moe' }, { age: 50 });
_.extendOwn({ name: 'moe'}, { age: 50 });
_.assign({ name: 'moe'}, { age: 50 });

_.pick({ name: 'moe', age: 50, userid: 'moe1' }, 'name', 'age').age = 5;
_.pick({ name: 'moe', age: 50, userid: 'moe1' }, ['name', 'age']).age = 5;
_.pick({ name: 'moe', age: 50, userid: 'moe1' }, (value, key) => {
    return key === 'name' || key === 'age';
}).age = 5;

_({ name: 'moe', age: 50, userid: 'moe1' }).pick('name', 'age').age = 5;
_({ name: 'moe', age: 50, userid: 'moe1' }).pick(['name', 'age']).age = 5;
_({ name: 'moe', age: 50, userid: 'moe1' }).pick((value, key) => {
    return key === 'name' || key === 'age';
}).age = 5;

_.chain({ name: 'moe', age: 50, userid: 'moe1' }).pick('name', 'age').value().age = 5;
_.chain({ name: 'moe', age: 50, userid: 'moe1' }).pick(['name', 'age']).value().age = 5;
_.chain({ name: 'moe', age: 50, userid: 'moe1' }).pick((value, key) => {
    return key === 'name' || key === 'age';
}).value().age = 5;

_.omit({ name: 'moe', age: 50, userid: 'moe1' }, 'name');
_.omit({ name: 'moe', age: 50, userid: 'moe1' }, 'name', 'age');
_.omit({ name: 'moe', age: 50, userid: 'moe1' }, ['name', 'age']);

_.mapObject({ a: 1, b: 2 }, val => val * 2) === _.mapObject({ a: 2, b: 4 }, _.identity);
_.mapObject({ a: 1, b: 2 }, (val, key, o) => o[key] * 2) === _.mapObject({ a: 2, b: 4}, _.identity);
_.mapObject({ x: "string 1", y: "string 2" }, 'length') === _.mapObject({ x: "string 1", y: "string 2"}, _.property('length'));

var iceCream = { flavor: "chocolate" };
_.defaults(iceCream, { flavor: "vanilla", sprinkles: "lots" });

_.clone({ name: 'moe' });
_.clone(['i', 'am', 'an', 'object!']);

_([1, 2, 3, 4])
    .chain()
    .filter((num) => { return num % 2 == 0; })
    .tap(alert)
    .map((num) => { return num * num; })
    .value();

_.chain([1, 2, 3, 200])
    .filter((num) => { return num % 2 == 0; })
    .tap(alert)
    .map((num) => { return num * num; })
    .value();

_.has({ a: 1, b: 2, c: 3 }, "b");

var moe = { name: 'moe', luckyNumbers: [13, 27, 34] };
var clone = { name: 'moe', luckyNumbers: [13, 27, 34] };
moe == clone;
_.isEqual(moe, clone);

_.isEmpty([1, 2, 3]);
_.isEmpty({});

_.isElement($('body')[0]);

(function () { return _.isArray(arguments); })();
_.isArray([1, 2, 3]);

_.isObject({});
_.isObject(1);

_.property('name')(moe);
_.property(['name'])(moe);
_.property(['luckyNumbers', 2])(moe)

// (() => { return _.isArguments(arguments); })(1, 2, 3);
_.isArguments([1, 2, 3]);

_.isFunction(alert);

_.isString("moe");

_.isNumber(8.4 * 5);

_.isFinite(-101);

_.isFinite(-Infinity);

_.isBoolean(null);

_.isDate(new Date());

_.isRegExp(/moe/);

_.isNaN(NaN);
_.isNaN(undefined);

_.isNull(null);
_.isNull(undefined);

_.isUndefined((window).missingVariable);

//////////////////////////////////// User Defined Guard tests

function useElement(arg: Element) {};
function useArguments(arg: IArguments) {};
function useFunction(arg: Function) {};
function useError(arg: Error) {};
function useString(arg: String) {};
function useNumber(arg: Number) {};
function useBoolean(arg: Boolean) {};
function useDate(arg: Date) {};
function useRegExp(arg: RegExp) {};
function useArray<T>(arg: T[]) {};
function useSymbol(arg: symbol) {};

var guardedType: {} = {};
if(_.isElement(guardedType)) useElement(guardedType);
if(_.isArray(guardedType)) useArray(guardedType);
if(_.isArray<String>(guardedType)) useArray(guardedType);
if(_.isArguments(guardedType)) useArguments(guardedType);
if(_.isFunction(guardedType)) useFunction(guardedType);
if(_.isError(guardedType)) useError(guardedType);
if(_.isString(guardedType)) useString(guardedType);
if(_.isNumber(guardedType)) useNumber(guardedType);
if(_.isBoolean(guardedType)) useBoolean(guardedType);
if(_.isDate(guardedType)) useDate(guardedType);
if(_.isRegExp(guardedType)) useRegExp(guardedType);
if(_.isSymbol(guardedType)) useSymbol(guardedType);

///////////////////////////////////////////////////////////////////////////////////////

var UncleMoe = { name: 'moe' };
_.constant(UncleMoe)();

typeof _.now() === "number";

var underscore = _.noConflict();

var moe2 = { name: 'moe' };
moe2 === _.identity(moe);

var genie;
var r2 = _.times(3, (n) => { return n * n });
_(3).times(function (n) { genie.grantWishNumber(n); });

_.random(0, 100);

_.mixin({
    capitalize(string) {
        return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
    }
});
(<any>_("fabio")).capitalize();

_.uniqueId('contact_');

_.escape('Curly, Larry & Moe');

var object = { cheese: 'crumpets', stuff() { return 'nonsense'; } };
_.result(object, 'cheese');

_.result(object, 'stuff');

var compiled = _.template("hello: <%= name %>");
compiled({ name: 'moe' });
let source: string = compiled.source;
var list2 = "<% _.each(people, function(name) { %> <li><%= name %></li> <% }); %>";
_.template(list2)({ people: ['moe', 'curly', 'larry'] });
var template = _.template("<b><%- value %></b>");
template({ value: '<script>' });
var compiled2 = _.template("<% print('Hello ' + epithet); %>");
compiled2({ epithet: "stooge" });
var oldTemplateSettings = _.templateSettings;
_.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
};
var template2 = _.template("Hello {{ name }}!");
template2({ name: "Mustache" });
_.template("Using 'with': <%= data.answer %>", oldTemplateSettings)({ variable: 'data' });

_.template("Using 'with': <%= data.answer %>", { variable: 'data' })({ answer: 'no' });
let template0 = _.template("I don't depend on any variables");
template0();

//////////////// Chain Tests
function chain_tests() {
    // https://typescript.codeplex.com/workitem/1960
    var numArray: number[] = _.chain([1, 2, 3, 4, 5, 6, 7, 8])
        .filter(num => num % 2 == 0)
        .map(num => num * num)
        .value();

    var strArray: string[] = _([1, 2, 3, 4])
        .chain()
        .filter(num => num % 2 == 0)
        .tap(alert)
        .map(num => "string" + num)
        .value();

    var n: number = _.chain([1, 2, 3, 200])
        .filter(num => num % 2 == 0)
        .tap(alert)
        .map(num => num * num)
        .max()
        .value();

    // this test was failing as of commit 6de1126, and even changing _Chain.Find<T> to _Chain.Find<TItem = T> as a workaround did not help
    // most likely removing the type argument T local to the function in favor of using T from _Chain<T, V> is the best fix for this,
    // but that will be a breaking change
    // ideally _Chain.detect and _Chain.sample should also be updated as part of that update along with Underscore.find, Underscore.detect,
    // Underscore.sample, Underscore.findIndex, and Underscore.findLastIndex
    var hoverOverValueShouldBeNumberNotAny = _([1, 2, 3]).chain()
        .map(num => [num, num + 1])
        .flatten()
        .find(num => num % 2 == 0)
        .value();

    var firstVal: number | undefined = _.chain([1, 2, 3])
        .first()
        .value();

    var firstVal2: number | undefined = _.chain([])
        .first()
        .value();

    let numberObjects = [{property: 'odd', value: 1}, {property: 'even', value: 2}, {property: 'even', value: 0}];
    let evenAndOddGroupedNumbers = _.chain(numberObjects)
        .groupBy('property')
        .mapObject((objects) => _.pluck(objects, 'value'))
        .value(); // { odd: [1], even: [0, 2] }

  var matrixOfString : string[][] = _.chain({'foo' : '1', 'bar': '1'})
    .keys()    // return ['foo', 'bar'] : string[]
    .pairs()   // return [['foo', '0'], ['bar', '1']] : string[][]
    .value();

    interface IYears {
        2016: number;
        2017: number;
    }

    let yearObject: IYears = {2016: 1, 2017: 2};
    let valuePerYear: number[] = _.chain(yearObject)
        .values()
        .value()

    const arr1: string[] = ['z', 'x', 'y'];
    const query = 'z';
    let arr2: string[] = ['a', 'b', 'c'];
    arr2 = _.chain(arr1)
        .union(arr2)
        .without(query)
        .value();
}

var obj: { [k: string] : number } = {
       'test' : 5,
       'another' : 8,
       'third' : 10
    };
let empty = {};

_.chain(obj).map(function (value, key) {
    empty[key] = value;
    console.log("vk", value, key);
});

function strong_typed_values_tests() {
    var dictionaryLike: { [k: string] : {title: string, value: number} } = {
        'test' : { title: 'item1', value: 5 },
        'another' : { title: 'item2', value: 8 },
        'third' : { title: 'item3', value: 10 }
    };

    _.chain(dictionaryLike).values().filter((r) => {
        return r.value >= 8;
    }).map((r) => {
        return [r.title, true];
    }).object().value();

    var x: number = _(dictionaryLike).chain().filter((x) => {
        console.log(x.title);
        console.log(x.value.toFixed());
        return x.title == 'item1';
    }).size().value();

    _.values<{title: string, value: number}>(dictionaryLike);
}
