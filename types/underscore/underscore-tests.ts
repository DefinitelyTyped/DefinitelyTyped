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

// Collection Functions
// as a breaking change, consider creating separate UnderscoreObject and ChainObject interfaces for dictionaries instead of taking both ListIterators and ObjectIterators

// each, forEach
// as a breaking change, consider either adding an overload for strings or changing function definitions to things like
// _.each<TItem, TList extends _.List<TItem>>(list: TList, iterator: _.ListIterator<TItem, void>, context ?: any): TList;
// to better reflect that _.each and its variations always return the original object
// if that happens, also add tests for strings and array-like objects with extra properties as inputs
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

        result = _<{ a: string }>(array).chain().each(iterator).value();
        result = _<{ a: string }>(array).chain().each(iterator, context).value();
        result = _(array).chain().each(iterator).value();
        result = _(array).chain().each(iterator, context).value();

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

        result = _<{ a: string }>(array).chain().forEach(iterator).value();
        result = _<{ a: string }>(array).chain().forEach(iterator, context).value();
        result = _(array).chain().forEach(iterator).value();
        result = _(array).chain().forEach(iterator, context).value();
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

        result = _<{ a: string }>(list).chain().each(iterator).value();
        result = _<{ a: string }>(list).chain().each(iterator, context).value();
        result = _(list).chain().each(iterator).value();
        result = _(list).chain().each(iterator, context).value();

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

        result = _<{ a: string }>(list).chain().forEach(iterator).value();
        result = _<{ a: string }>(list).chain().forEach(iterator, context).value();
        result = _(list).chain().forEach(iterator).value();
        result = _(list).chain().forEach(iterator, context).value();
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

        result = _<{ a: string }>(dict).chain().each(iterator).value();
        result = _<{ a: string }>(dict).chain().each(iterator, context).value();
        result = _(dict).chain().each(iterator).value();
        result = _(dict).chain().each(iterator, context).value();

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

        result = _<{ a: string }>(dict).chain().forEach(iterator).value();
        result = _<{ a: string }>(dict).chain().forEach(iterator, context).value();
        result = _(dict).chain().forEach(iterator).value();
        result = _(dict).chain().forEach(iterator, context).value();
    }
}

// map, collect
{
    const context = {};

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

        result = _<{ a: string }>(array).chain().map<string>(iterator).value();
        result = _<{ a: string }>(array).chain().map<string>(iterator, context).value();
        result = _(array).chain().map(iterator).value();
        result = _(array).chain().map(iterator, context).value();

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

        result = _<{ a: string }>(array).chain().collect<string>(iterator).value();
        result = _<{ a: string }>(array).chain().collect<string>(iterator, context).value();
        result = _(array).chain().collect(iterator).value();
        result = _(array).chain().collect(iterator, context).value();
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

        result = _<{ a: string }>(list).chain().map<string>(iterator).value();
        result = _<{ a: string }>(list).chain().map<string>(iterator, context).value();
        result = _(list).chain().map(iterator).value();
        result = _(list).chain().map(iterator, context).value();

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

        result = _<{ a: string }>(list).chain().collect<string>(iterator).value();
        result = _<{ a: string }>(list).chain().collect<string>(iterator, context).value();
        result = _(list).chain().collect(iterator).value();
        result = _(list).chain().collect(iterator, context).value();
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

        result = _<{ a: string }>(dict).chain().map<string>(iterator).value();
        result = _<{ a: string }>(dict).chain().map<string>(iterator, context).value();
        result = _(dict).chain().map(iterator).value();
        result = _(dict).chain().map(iterator, context).value();

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

        result = _<{ a: string }>(dict).chain().collect<string>(iterator).value();
        result = _<{ a: string }>(dict).chain().collect<string>(iterator, context).value();
        result = _(dict).chain().collect(iterator).value();
        result = _(dict).chain().collect(iterator, context).value();
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

        result = _<string>(str).chain().map<string>(iterator).value();
        result = _<string>(str).chain().map<string>(iterator, context).value();
        result = _(str).chain().map(iterator).value();
        result = _(str).chain().map(iterator, context).value();

        result = _.collect<string, string>(str, iterator);
        result = _.collect<string, string>(str, iterator, context);
        result = _.collect(str, iterator);
        result = _.collect(str, iterator, context);

        result = _<string>(str).collect<string>(iterator);
        result = _<string>(str).collect<string>(iterator, context);
        result = _(str).collect(iterator);
        result = _(str).collect(iterator, context);

        result = _<string>(str).chain().collect<string>(iterator).value();
        result = _<string>(str).chain().collect<string>(iterator, context).value();
        result = _(str).chain().collect(iterator).value();
        result = _(str).chain().collect(iterator, context).value();
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

        result = _<{ a: string }>(array).chain().reduce<string>(iterator, memo).value();
        result = _<{ a: string }>(array).chain().reduce<string>(iterator, memo, context).value();
        result = _(array).chain().reduce(iterator, memo).value();
        result = _(array).chain().reduce(iterator, memo, context).value();

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

        result = _<{ a: string }>(array).chain().foldl<string>(iterator, memo).value();
        result = _<{ a: string }>(array).chain().foldl<string>(iterator, memo, context).value();
        result = _(array).chain().foldl(iterator, memo).value();
        result = _(array).chain().foldl(iterator, memo, context).value();

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

        result = _<{ a: string }>(array).chain().inject<string>(iterator, memo).value();
        result = _<{ a: string }>(array).chain().inject<string>(iterator, memo, context).value();
        result = _(array).chain().inject(iterator, memo).value();
        result = _(array).chain().inject(iterator, memo, context).value();
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

        result = _<{ a: string }>(list).chain().reduce<string>(iterator, memo).value();
        result = _<{ a: string }>(list).chain().reduce<string>(iterator, memo, context).value();
        result = _(list).chain().reduce(iterator, memo).value();
        result = _(list).chain().reduce(iterator, memo, context).value();

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

        result = _<{ a: string }>(list).chain().foldl<string>(iterator, memo).value();
        result = _<{ a: string }>(list).chain().foldl<string>(iterator, memo, context).value();
        result = _(list).chain().foldl(iterator, memo).value();
        result = _(list).chain().foldl(iterator, memo, context).value();

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

        result = _<{ a: string }>(list).chain().inject<string>(iterator, memo).value();
        result = _<{ a: string }>(list).chain().inject<string>(iterator, memo, context).value();
        result = _(list).chain().inject(iterator, memo).value();
        result = _(list).chain().inject(iterator, memo, context).value();
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

        result = _<{ a: string }>(dict).chain().reduce<string>(iterator, memo).value();
        result = _<{ a: string }>(dict).chain().reduce<string>(iterator, memo, context).value();
        result = _(dict).chain().reduce(iterator, memo).value();
        result = _(dict).chain().reduce(iterator, memo, context).value();

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

        result = _<{ a: string }>(dict).chain().foldl<string>(iterator, memo).value();
        result = _<{ a: string }>(dict).chain().foldl<string>(iterator, memo, context).value();
        result = _(dict).chain().foldl(iterator, memo).value();
        result = _(dict).chain().foldl(iterator, memo, context).value();

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

        result = _<{ a: string }>(dict).chain().inject<string>(iterator, memo).value();
        result = _<{ a: string }>(dict).chain().inject<string>(iterator, memo, context).value();
        result = _(dict).chain().inject(iterator, memo).value();
        result = _(dict).chain().inject(iterator, memo, context).value();
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

        result = _<string>(str).chain().reduce<_.Dictionary<number>>(iterator, memo).value();
        result = _<string>(str).chain().reduce<_.Dictionary<number>>(iterator, memo, context).value();
        result = _(str).chain().reduce(iterator, memo).value();
        result = _(str).chain().reduce(iterator, memo, context).value();

        result = _.foldl<string, _.Dictionary<number>>(str, iterator, memo);
        result = _.foldl<string, _.Dictionary<number>>(str, iterator, memo, context);
        result = _.foldl(str, iterator, memo);
        result = _.foldl(str, iterator, memo, context);

        result = _<string>(str).foldl<_.Dictionary<number>>(iterator, memo);
        result = _<string>(str).foldl<_.Dictionary<number>>(iterator, memo, context);
        result = _(str).foldl(iterator, memo);
        result = _(str).foldl(iterator, memo, context);

        result = _<string>(str).chain().foldl<_.Dictionary<number>>(iterator, memo).value();
        result = _<string>(str).chain().foldl<_.Dictionary<number>>(iterator, memo, context).value();
        result = _(str).chain().foldl(iterator, memo).value();
        result = _(str).chain().foldl(iterator, memo, context).value();

        result = _.inject<string, _.Dictionary<number>>(str, iterator, memo);
        result = _.inject<string, _.Dictionary<number>>(str, iterator, memo, context);
        result = _.inject(str, iterator, memo);
        result = _.inject(str, iterator, memo, context);

        result = _<string>(str).inject<_.Dictionary<number>>(iterator, memo);
        result = _<string>(str).inject<_.Dictionary<number>>(iterator, memo, context);
        result = _(str).inject(iterator, memo);
        result = _(str).inject(iterator, memo, context);

        result = _<string>(str).chain().inject<_.Dictionary<number>>(iterator, memo).value();
        result = _<string>(str).chain().inject<_.Dictionary<number>>(iterator, memo, context).value();
        result = _(str).chain().inject(iterator, memo).value();
        result = _(str).chain().inject(iterator, memo, context).value();
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

        result = _<{ a: string }>(array).chain().reduceRight<string>(iterator, memo).value();
        result = _<{ a: string }>(array).chain().reduceRight<string>(iterator, memo, context).value();
        result = _(array).chain().reduceRight(iterator, memo).value();
        result = _(array).chain().reduceRight(iterator, memo, context).value();

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

        result = _<{ a: string }>(array).chain().foldr<string>(iterator, memo).value();
        result = _<{ a: string }>(array).chain().foldr<string>(iterator, memo, context).value();
        result = _(array).chain().foldr(iterator, memo).value();
        result = _(array).chain().foldr(iterator, memo, context).value();
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

        result = _<{ a: string }>(list).chain().reduceRight<string>(iterator, memo).value();
        result = _<{ a: string }>(list).chain().reduceRight<string>(iterator, memo, context).value();
        result = _(list).chain().reduceRight(iterator, memo).value();
        result = _(list).chain().reduceRight(iterator, memo, context).value();

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

        result = _<{ a: string }>(list).chain().foldr<string>(iterator, memo).value();
        result = _<{ a: string }>(list).chain().foldr<string>(iterator, memo, context).value();
        result = _(list).chain().foldr(iterator, memo).value();
        result = _(list).chain().foldr(iterator, memo, context).value();
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

        result = _<{ a: string }>(dict).chain().reduceRight<string>(iterator, memo).value();
        result = _<{ a: string }>(dict).chain().reduceRight<string>(iterator, memo, context).value();
        result = _(dict).chain().reduceRight(iterator, memo).value();
        result = _(dict).chain().reduceRight(iterator, memo, context).value();

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

        result = _<{ a: string }>(dict).chain().foldr<string>(iterator, memo).value();
        result = _<{ a: string }>(dict).chain().foldr<string>(iterator, memo, context).value();
        result = _(dict).chain().foldr(iterator, memo).value();
        result = _(dict).chain().foldr(iterator, memo, context).value();
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

        result = _<string>(str).chain().reduceRight<_.Dictionary<number>>(iterator, memo).value();
        result = _<string>(str).chain().reduceRight<_.Dictionary<number>>(iterator, memo, context).value();
        result = _(str).chain().reduceRight(iterator, memo).value();
        result = _(str).chain().reduceRight(iterator, memo, context).value();

        result = _.foldr<string, _.Dictionary<number>>(str, iterator, memo);
        result = _.foldr<string, _.Dictionary<number>>(str, iterator, memo, context);
        result = _.foldr(str, iterator, memo);
        result = _.foldr(str, iterator, memo, context);

        result = _<string>(str).foldr<_.Dictionary<number>>(iterator, memo);
        result = _<string>(str).foldr<_.Dictionary<number>>(iterator, memo, context);
        result = _(str).foldr(iterator, memo);
        result = _(str).foldr(iterator, memo, context);

        result = _<string>(str).chain().foldr<_.Dictionary<number>>(iterator, memo).value();
        result = _<string>(str).chain().foldr<_.Dictionary<number>>(iterator, memo, context).value();
        result = _(str).chain().foldr(iterator, memo).value();
        result = _(str).chain().foldr(iterator, memo, context).value();
    }
}

// find, detect
// as a breaking change, ideally the Chain<T, V>.find<T, ...> and Chain<T, V>.detect<T, ...> functions should be updated to not take a T type argument
// since they should ideally use T from Chain
{
    const context = {};

    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const iterator = (value: {a: string}, index: number, list: _.List<{a: string}>) => value.a === 'b';
        let result: {a: string} | undefined;

        result = _.find<{a: string}>(array, iterator);
        result = _.find<{ a: string }>(array, iterator, context);
        result = _.find(array, iterator);
        result = _.find(array, iterator, context);

        result = _<{ a: string }>(array).find<{a: string}>(iterator);
        result = _<{ a: string }>(array).find<{ a: string }>(iterator, context);
        result = _(array).find(iterator);
        result = _(array).find(iterator, context);

        result = _<{ a: string }>(array).chain().find<{a: string}>(iterator).value();
        result = _<{ a: string }>(array).chain().find<{ a: string }>(iterator, context).value();
        result = _(array).chain().find(iterator).value();
        result = _(array).chain().find(iterator, context).value();

        result = _.detect<{a: string}>(array, iterator);
        result = _.detect<{ a: string }>(array, iterator, context);
        result = _.detect(array, iterator);
        result = _.detect(array, iterator, context);

        result = _<{ a: string }>(array).detect<{a: string}>(iterator);
        result = _<{ a: string }>(array).detect<{ a: string }>(iterator, context);
        result = _(array).detect(iterator);
        result = _(array).detect(iterator, context);

        result = _<{ a: string }>(array).chain().detect<{a: string}>(iterator).value();
        result = _<{ a: string }>(array).chain().detect<{ a: string }>(iterator, context).value();
        result = _(array).chain().detect(iterator).value();
        result = _(array).chain().detect(iterator, context).value();
    }

    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const properties = { a: 'b' };
        let result: { a: string } | undefined;

        result = _.find<{ a: string }, { a: string }>(array, properties);
        result = _.find(array, properties);

        result = _(array).find<{ a: string }, { a: string }>(properties);
        result = _(array).find(properties);

        result = _(array).chain().find<{ a: string }, { a: string }>(properties).value();

        result = _.detect<{ a: string }, { a: string }>(array, properties);
        result = _.detect(array, properties);

        result = _(array).detect<{ a: string }, { a: string }>(properties);
        result = _(array).detect(properties);

        result = _(array).chain().detect<{ a: string }, { a: string }>(properties).value();
    }

    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const property = 'a';
        let result: { a: string } | undefined;

        result = _.find<{ a: string }>(array, property);
        result = _.find(array, property);

        result = _(array).find<{ a: string }>(property);
        result = _(array).find(property);

        result = _(array).chain().find<{ a: string }>(property).value();

        result = _.detect<{ a: string }>(array, property);
        result = _.detect(array, property);

        result = _(array).detect<{ a: string }>(property);
        result = _(array).detect(property);

        result = _(array).chain().detect<{ a: string }>(property).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const iterator = (value: { a: string }, index: number, list: _.List<{ a: string }>) => value.a === 'b';
        let result: { a: string } | undefined;

        result = _.find<{ a: string }>(list, iterator);
        result = _.find<{ a: string }>(list, iterator, context);
        result = _.find(list, iterator);
        result = _.find(list, iterator, context);

        result = _<{ a: string }>(list).find<{ a: string }>(iterator);
        result = _<{ a: string }>(list).find<{ a: string }>(iterator, context);
        result = _(list).find(iterator);
        result = _(list).find(iterator, context);

        result = _<{ a: string }>(list).chain().find<{ a: string }>(iterator).value();
        result = _<{ a: string }>(list).chain().find<{ a: string }>(iterator, context).value();
        result = _(list).chain().find(iterator).value();
        result = _(list).chain().find(iterator, context).value();

        result = _.detect<{ a: string }>(list, iterator);
        result = _.detect<{ a: string }>(list, iterator, context);
        result = _.detect(list, iterator);
        result = _.detect(list, iterator, context);

        result = _<{ a: string }>(list).detect<{ a: string }>(iterator);
        result = _<{ a: string }>(list).detect<{ a: string }>(iterator, context);
        result = _(list).detect(iterator);
        result = _(list).detect(iterator, context);

        result = _<{ a: string }>(list).chain().detect<{ a: string }>(iterator).value();
        result = _<{ a: string }>(list).chain().detect<{ a: string }>(iterator, context).value();
        result = _(list).chain().detect(iterator).value();
        result = _(list).chain().detect(iterator, context).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const properties = { a: 'b' };
        let result: { a: string } | undefined;

        result = _.find<{ a: string }, { a: string }>(list, properties);
        result = _.find(list, properties);

        result = _(list).find<{ a: string }, { a: string }>(properties);
        result = _(list).find(properties);

        result = _(list).chain().find<{ a: string }, { a: string }>(properties).value();

        result = _.detect<{ a: string }, { a: string }>(list, properties);
        result = _.detect(list, properties);

        result = _(list).detect<{ a: string }, { a: string }>(properties);
        result = _(list).detect(properties);

        result = _(list).chain().detect<{ a: string }, { a: string }>(properties).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const property = 'a';
        let result: { a: string } | undefined;

        result = _.find<{ a: string }>(list, property);
        result = _.find(list, property);

        result = _(list).find<{ a: string }>(property);
        result = _(list).find(property);

        result = _(list).chain().find<{ a: string }>(property).value();

        result = _.detect<{ a: string }>(list, property);
        result = _.detect(list, property);

        result = _(list).detect<{ a: string }>(property);
        result = _(list).detect(property);

        result = _(list).chain().detect<{ a: string }>(property).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const iterator = (element: { a: string }, key: string, list: _.Dictionary<{ a: string }>) => element.a === 'b';
        let result: { a: string } | undefined;

        result = _.find<{ a: string }>(dict, iterator);
        result = _.find<{ a: string }>(dict, iterator, context);
        result = _.find(dict, iterator);
        result = _.find(dict, iterator, context);

        result = _<{ a: string }>(dict).find<{ a: string }>(iterator);
        result = _<{ a: string }>(dict).find<{ a: string }>(iterator, context);
        result = _(dict).find(iterator);
        result = _(dict).find(iterator, context);

        result = _<{ a: string }>(dict).chain().find<{ a: string }>(iterator).value();
        result = _<{ a: string }>(dict).chain().find<{ a: string }>(iterator, context).value();
        result = _(dict).chain().find(iterator).value();
        result = _(dict).chain().find(iterator, context).value();

        result = _.detect<{ a: string }>(dict, iterator);
        result = _.detect<{ a: string }>(dict, iterator, context);
        result = _.detect(dict, iterator);
        result = _.detect(dict, iterator, context);

        result = _<{ a: string }>(dict).detect<{ a: string }>(iterator);
        result = _<{ a: string }>(dict).detect<{ a: string }>(iterator, context);
        result = _(dict).detect(iterator);
        result = _(dict).detect(iterator, context);

        result = _<{ a: string }>(dict).chain().detect<{ a: string }>(iterator).value();
        result = _<{ a: string }>(dict).chain().detect<{ a: string }>(iterator, context).value();
        result = _(dict).chain().detect(iterator).value();
        result = _(dict).chain().detect(iterator, context).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const properties = { a: 'b' };
        let result: { a: string } | undefined;

        result = _.find<{ a: string }, { a: string }>(dict, properties);
        result = _.find(dict, properties);

        result = _(dict).find<{ a: string }, { a: string }>(properties);
        result = _(dict).find(properties);

        result = _(dict).chain().find<{ a: string }, { a: string }>(properties).value();

        result = _.detect<{ a: string }, { a: string }>(dict, properties);
        result = _.detect(dict, properties);

        result = _(dict).detect<{ a: string }, { a: string }>(properties);
        result = _(dict).detect(properties);

        result = _(dict).chain().detect<{ a: string }, { a: string }>(properties).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const property = 'a';
        let result: { a: string } | undefined;

        result = _.find<{ a: string }>(dict, property);
        result = _.find(dict, property);

        result = _(dict).find<{ a: string }>(property);
        result = _(dict).find(property);

        result = _(dict).chain().find<{ a: string }>(property).value();

        result = _.detect<{ a: string }>(dict, property);
        result = _.detect(dict, property);

        result = _(dict).detect<{ a: string }>(property);
        result = _(dict).detect(property);

        result = _(dict).chain().detect<{ a: string }>(property).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const iterator = (element: {a: string}, key: string, list: _.Dictionary<{a: string}>) => element.a === 'b';
        let result: {a: string} | undefined;

        result = _.find<{a: string}>(dict, iterator);
        result = _.find<{a: string}>(dict, iterator, context);
        result = _.find<{a: string}, {a: string}>(dict, {a: 'b'});
        result = _.find<{a: string}>(dict, 'a');

        result = _(dict).find<{a: string}>(iterator);
        result = _(dict).find<{a: string}>(iterator, context);
        result = _(dict).find<{a: string}, {a: string}>({a: 'b'});
        result = _(dict).find<{a: string}>('a');

        result = _(dict).chain().find<{a: string}>(iterator).value();
        result = _(dict).chain().find<{a: string}>(iterator, context).value();
        result = _(dict).chain().find<{a: string}, {a: string}>({a: 'b'}).value();
        result = _(dict).chain().find<{a: string}>('a').value();

        result = _.detect<{a: string}>(dict, iterator);
        result = _.detect<{a: string}>(dict, iterator, context);
        result = _.detect<{a: string}, {a: string}>(dict, {a: 'b'});
        result = _.detect<{a: string}>(dict, 'a');

        result = _(dict).detect<{a: string}>(iterator);
        result = _(dict).detect<{a: string}>(iterator, context);
        result = _(dict).detect<{a: string}, {a: string}>({a: 'b'});
        result = _(dict).detect<{a: string}>('a');

        result = _(dict).chain().detect<{a: string}>(iterator).value();
        result = _(dict).chain().detect<{a: string}>(iterator, context).value();
        result = _(dict).chain().detect<{a: string}, {a: string}>({a: 'b'}).value();
        result = _(dict).chain().detect<{a: string}>('a').value();
    }

    {
        const str = 'abc';
        const iterator = (value: string, index: number, list: _.List<string>) => value === 'b';
        let result: string | undefined;

        result = _.find<string>(str, iterator);
        result = _.find<string>(str, iterator, context);
        result = _.find(str, iterator);
        result = _.find(str, iterator, context);

        result = _(str).find<string>(iterator);
        result = _(str).find<string>(iterator, context);
        result = _(str).find(iterator);
        result = _(str).find(iterator, context);

        result = _(str).chain().find<string>(iterator).value();
        result = _(str).chain().find<string>(iterator, context).value();
        result = _(str).chain().find(iterator).value();
        result = _(str).chain().find(iterator, context).value();

        result = _.detect<string>(str, iterator);
        result = _.detect<string>(str, iterator, context);
        result = _.detect(str, iterator);
        result = _.detect(str, iterator, context);

        result = _(str).detect<string>(iterator);
        result = _(str).detect<string>(iterator, context);
        result = _(str).detect(iterator);
        result = _(str).detect(iterator, context);

        result = _(str).chain().detect<string>(iterator).value();
        result = _(str).chain().detect<string>(iterator, context).value();
        result = _(str).chain().detect(iterator).value();
        result = _(str).chain().detect(iterator, context).value();
    }
}

// filter, select
{
    const context = {};

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

        result = _<{ a: string }>(array).chain().filter(iterator).value();
        result = _<{ a: string }>(array).chain().filter(iterator, context).value();
        result = _(array).chain().filter(iterator).value();
        result = _(array).chain().filter(iterator, context).value();

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

        result = _<{ a: string }>(array).chain().select(iterator).value();
        result = _<{ a: string }>(array).chain().select(iterator, context).value();
        result = _(array).chain().select(iterator).value();
        result = _(array).chain().select(iterator, context).value();
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

        result = _<{ a: string }>(list).chain().filter(iterator).value();
        result = _<{ a: string }>(list).chain().filter(iterator, context).value();
        result = _(list).chain().filter(iterator).value();
        result = _(list).chain().filter(iterator, context).value();

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

        result = _<{ a: string }>(list).chain().select(iterator).value();
        result = _<{ a: string }>(list).chain().select(iterator, context).value();
        result = _(list).chain().select(iterator).value();
        result = _(list).chain().select(iterator, context).value();
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

        result = _<{ a: string }>(dict).chain().filter(iterator).value();
        result = _<{ a: string }>(dict).chain().filter(iterator, context).value();
        result = _(dict).chain().filter(iterator).value();
        result = _(dict).chain().filter(iterator, context).value();

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

        result = _<{ a: string }>(dict).chain().select(iterator).value();
        result = _<{ a: string }>(dict).chain().select(iterator, context).value();
        result = _(dict).chain().select(iterator).value();
        result = _(dict).chain().select(iterator, context).value();
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

        result = _<string>(str).chain().filter(iterator).value();
        result = _<string>(str).chain().filter(iterator, context).value();
        result = _(str).chain().filter(iterator).value();
        result = _(str).chain().filter(iterator, context).value();

        result = _.select<string>(str, iterator);
        result = _.select<string>(str, iterator, context);
        result = _.select(str, iterator);
        result = _.select(str, iterator, context);

        result = _<string>(str).select(iterator);
        result = _<string>(str).select(iterator, context);
        result = _(str).select(iterator);
        result = _(str).select(iterator, context);

        result = _<string>(str).chain().select(iterator).value();
        result = _<string>(str).chain().select(iterator, context).value();
        result = _(str).chain().select(iterator).value();
        result = _(str).chain().select(iterator, context).value();
    }
}

// where
{
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const properties = { a: 'b' };
        let result: { a: string }[];

        result = _.where<{ a: string }, { a: string }>(array, properties);
        result = _.where(array, properties);

        result = _<{ a: string }>(array).where<{ a: string }>(properties);
        result = _(array).where(properties);

        result = _.chain<{ a: string }>(array).where<{ a: string }>(properties).value();
        result = _.chain(array).where(properties).value();

        result = _<{ a: string }>(array).chain().where<{ a: string }>(properties).value();
        result = _(array).chain().where(properties).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const properties = { a: 'b' };
        let result: { a: string }[];

        result = _.where<{ a: string }, { a: string }>(list, properties);
        result = _.where(list, properties);

        result = _<{ a: string }>(list).where<{ a: string }>(properties);
        result = _(list).where(properties);

        result = _.chain<{ a: string }>(list).where<{ a: string }>(properties).value();
        result = _.chain(list).where(properties).value();

        result = _<{ a: string }>(list).chain().where<{ a: string }>(properties).value();
        result = _(list).chain().where(properties).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const properties = { a: 'b' };
        let result: { a: string }[];

        result = _.where<{ a: string }, { a: string }>(dict, properties);
        result = _.where(dict, properties);

        result = _<{ a: string }>(dict).where<{ a: string }>(properties);
        result = _(dict).where(properties);

        result = _.chain<{ a: string }>(dict).where<{ a: string }>(properties).value();
        result = _.chain(dict).where(properties).value();

        result = _<{ a: string }>(dict).chain().where<{ a: string }>(properties).value();
        result = _(dict).chain().where(properties).value();
    }
}

// findWhere
// as a breaking change, ideally the return value for these functions should be updated to include undefined
{
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const properties = { a: 'b' };
        let result: { a: string } | undefined;

        result = _.findWhere<{ a: string }, { a: string }>(array, properties);
        result = _.findWhere(array, properties);

        result = _<{ a: string }>(array).findWhere<{ a: string }>(properties);
        result = _(array).findWhere(properties);

        result = _.chain<{ a: string }>(array).findWhere<{ a: string }>(properties).value();
        result = _.chain(array).findWhere(properties).value();

        result = _<{ a: string }>(array).chain().findWhere<{ a: string }>(properties).value();
        result = _(array).chain().findWhere(properties).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const properties = { a: 'b' };
        let result: { a: string } | undefined;

        result = _.findWhere<{ a: string }, { a: string }>(list, properties);
        result = _.findWhere(list, properties);

        result = _<{ a: string }>(list).findWhere<{ a: string }>(properties);
        result = _(list).findWhere(properties);

        result = _.chain<{ a: string }>(list).findWhere<{ a: string }>(properties).value();
        result = _.chain(list).findWhere(properties).value();

        result = _<{ a: string }>(list).chain().findWhere<{ a: string }>(properties).value();
        result = _(list).chain().findWhere(properties).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const properties = { a: 'b' };
        let result: { a: string } | undefined;

        result = _.findWhere<{ a: string }, { a: string }>(dict, properties);
        result = _.findWhere(dict, properties);

        result = _<{ a: string }>(dict).findWhere<{ a: string }>(properties);
        result = _(dict).findWhere(properties);

        result = _.chain<{ a: string }>(dict).findWhere<{ a: string }>(properties).value();
        result = _.chain(dict).findWhere(properties).value();

        result = _<{ a: string }>(dict).chain().findWhere<{ a: string }>(properties).value();
        result = _(dict).chain().findWhere(properties).value();
    }
}

// reject
{
    const context = {};

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

        result = _<{ a: string }>(array).chain().reject(iterator).value();
        result = _<{ a: string }>(array).chain().reject(iterator, context).value();
        result = _(array).chain().reject(iterator).value();
        result = _(array).chain().reject(iterator, context).value();
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

        result = _<{ a: string }>(list).chain().reject(iterator).value();
        result = _<{ a: string }>(list).chain().reject(iterator, context).value();
        result = _(list).chain().reject(iterator).value();
        result = _(list).chain().reject(iterator, context).value();
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

        result = _<{ a: string }>(dict).chain().reject(iterator).value();
        result = _<{ a: string }>(dict).chain().reject(iterator, context).value();
        result = _(dict).chain().reject(iterator).value();
        result = _(dict).chain().reject(iterator, context).value();
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

        result = _<string>(str).chain().reject(iterator).value();
        result = _<string>(str).chain().reject(iterator, context).value();
        result = _(str).chain().reject(iterator).value();
        result = _(str).chain().reject(iterator, context).value();
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

        result = _<{ a: string }>(array).chain().every(iterator).value();
        result = _<{ a: string }>(array).chain().every(iterator, context).value();
        result = _(array).chain().every(iterator).value();
        result = _(array).chain().every(iterator, context).value();

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

        result = _<{ a: string }>(array).chain().all(iterator).value();
        result = _<{ a: string }>(array).chain().all(iterator, context).value();
        result = _(array).chain().all(iterator).value();
        result = _(array).chain().all(iterator, context).value();
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

        result = _<{ a: string }>(list).chain().every(iterator).value();
        result = _<{ a: string }>(list).chain().every(iterator, context).value();
        result = _(list).chain().every(iterator).value();
        result = _(list).chain().every(iterator, context).value();

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

        result = _<{ a: string }>(list).chain().all(iterator).value();
        result = _<{ a: string }>(list).chain().all(iterator, context).value();
        result = _(list).chain().all(iterator).value();
        result = _(list).chain().all(iterator, context).value();
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

        result = _<{ a: string }>(dict).chain().every(iterator).value();
        result = _<{ a: string }>(dict).chain().every(iterator, context).value();
        result = _(dict).chain().every(iterator).value();
        result = _(dict).chain().every(iterator, context).value();

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

        result = _<{ a: string }>(dict).chain().all(iterator).value();
        result = _<{ a: string }>(dict).chain().all(iterator, context).value();
        result = _(dict).chain().all(iterator).value();
        result = _(dict).chain().all(iterator, context).value();
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

        result = _<string>(str).chain().every(iterator).value();
        result = _<string>(str).chain().every(iterator, context).value();
        result = _(str).chain().every(iterator).value();
        result = _(str).chain().every(iterator, context).value();

        result = _.all<string>(str, iterator);
        result = _.all<string>(str, iterator, context);
        result = _.all(str, iterator);
        result = _.all(str, iterator, context);

        result = _<string>(str).all(iterator);
        result = _<string>(str).all(iterator, context);
        result = _(str).all(iterator);
        result = _(str).all(iterator, context);

        result = _<string>(str).chain().all(iterator).value();
        result = _<string>(str).chain().all(iterator, context).value();
        result = _(str).chain().all(iterator).value();
        result = _(str).chain().all(iterator, context).value();
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

        result = _<{ a: string }>(array).chain().some(iterator).value();
        result = _<{ a: string }>(array).chain().some(iterator, context).value();
        result = _(array).chain().some(iterator).value();
        result = _(array).chain().some(iterator, context).value();

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

        result = _<{ a: string }>(array).chain().any(iterator).value();
        result = _<{ a: string }>(array).chain().any(iterator, context).value();
        result = _(array).chain().any(iterator).value();
        result = _(array).chain().any(iterator, context).value();
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

        result = _<{ a: string }>(list).chain().some(iterator).value();
        result = _<{ a: string }>(list).chain().some(iterator, context).value();
        result = _(list).chain().some(iterator).value();
        result = _(list).chain().some(iterator, context).value();

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

        result = _<{ a: string }>(list).chain().any(iterator).value();
        result = _<{ a: string }>(list).chain().any(iterator, context).value();
        result = _(list).chain().any(iterator).value();
        result = _(list).chain().any(iterator, context).value();
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

        result = _<{ a: string }>(dict).chain().some(iterator).value();
        result = _<{ a: string }>(dict).chain().some(iterator, context).value();
        result = _(dict).chain().some(iterator).value();
        result = _(dict).chain().some(iterator, context).value();

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

        result = _<{ a: string }>(dict).chain().any(iterator).value();
        result = _<{ a: string }>(dict).chain().any(iterator, context).value();
        result = _(dict).chain().any(iterator).value();
        result = _(dict).chain().any(iterator, context).value();
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

        result = _<string>(str).chain().some(iterator).value();
        result = _<string>(str).chain().some(iterator, context).value();
        result = _(str).chain().some(iterator).value();
        result = _(str).chain().some(iterator, context).value();

        result = _.any<string>(str, iterator);
        result = _.any<string>(str, iterator, context);
        result = _.any(str, iterator);
        result = _.any(str, iterator, context);

        result = _<string>(str).any(iterator);
        result = _<string>(str).any(iterator, context);
        result = _(str).any(iterator);
        result = _(str).any(iterator, context);

        result = _<string>(str).chain().any(iterator).value();
        result = _<string>(str).chain().any(iterator, context).value();
        result = _(str).chain().any(iterator).value();
        result = _(str).chain().any(iterator, context).value();
    }
}

// contains, include, includes
// as a smaller breaking change, consider changing the _.Collection<T> argument for include and includes to match the _.List<T> argument for contains
// as a larger breaking change, consider getting rid of _.Collection<T> or defining _.Collection<T> as
// type Collection<T> =  List<T> | Dictionary<T>
// since in its current form as an empty interface it does not provide any type safety
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

        result = _<{ a: string }>(array).chain().contains(value).value();
        result = _<{ a: string }>(array).chain().contains(value, fromIndex).value();
        result = _(array).chain().contains(value).value();
        result = _(array).chain().contains(value, fromIndex).value();

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

        result = _<{ a: string }>(array).chain().include(value).value();
        result = _<{ a: string }>(array).chain().include(value, fromIndex).value();
        result = _(array).chain().include(value).value();
        result = _(array).chain().include(value, fromIndex).value();

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

        result = _<{ a: string }>(array).chain().includes(value).value();
        result = _<{ a: string }>(array).chain().includes(value, fromIndex).value();
        result = _(array).chain().includes(value).value();
        result = _(array).chain().includes(value, fromIndex).value();
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

        result = _<{ a: string }>(list).chain().contains(value).value();
        result = _<{ a: string }>(list).chain().contains(value, fromIndex).value();
        result = _(list).chain().contains(value).value();
        result = _(list).chain().contains(value, fromIndex).value();

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

        result = _<{ a: string }>(list).chain().include(value).value();
        result = _<{ a: string }>(list).chain().include(value, fromIndex).value();
        result = _(list).chain().include(value).value();
        result = _(list).chain().include(value, fromIndex).value();

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

        result = _<{ a: string }>(list).chain().includes(value).value();
        result = _<{ a: string }>(list).chain().includes(value, fromIndex).value();
        result = _(list).chain().includes(value).value();
        result = _(list).chain().includes(value, fromIndex).value();
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

        result = _<{ a: string }>(dict).chain().contains(value).value();
        result = _(dict).chain().contains(value).value();

        result = _.include<{ a: string }>(dict, value);
        result = _.include(dict, value);

        result = _<{ a: string }>(dict).include(value);
        result = _(dict).include(value);

        result = _.chain<{ a: string }>(dict).include(value).value();
        result = _.chain(dict).include(value).value();

        result = _<{ a: string }>(dict).chain().include(value).value();
        result = _(dict).chain().include(value).value();

        result = _.includes<{ a: string }>(dict, value);
        result = _.includes(dict, value);

        result = _<{ a: string }>(dict).includes(value);
        result = _(dict).includes(value);

        result = _.chain<{ a: string }>(dict).includes(value).value();
        result = _.chain(dict).includes(value).value();

        result = _<{ a: string }>(dict).chain().includes(value).value();
        result = _(dict).chain().includes(value).value();
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

        result = _<string>(str).chain().contains(value).value();
        result = _<string>(str).chain().contains(value, fromIndex).value();
        result = _(str).chain().contains(value).value();
        result = _(str).chain().contains(value, fromIndex).value();

        result = _.include<string>(str, value);
        result = _.include<string>(str, value, fromIndex);
        result = _.include(str, value);
        result = _.include(str, value, fromIndex);

        result = _<string>(str).include(value);
        result = _<string>(str).include(value, fromIndex);
        result = _(str).include(value);
        result = _(str).include(value, fromIndex);

        result = _<string>(str).chain().include(value).value();
        result = _<string>(str).chain().include(value, fromIndex).value();
        result = _(str).chain().include(value).value();
        result = _(str).chain().include(value, fromIndex).value();

        result = _.includes<string>(str, value);
        result = _.includes<string>(str, value, fromIndex);
        result = _.includes(str, value);
        result = _.includes(str, value, fromIndex);

        result = _<string>(str).includes(value);
        result = _<string>(str).includes(value, fromIndex);
        result = _(str).includes(value);
        result = _(str).includes(value, fromIndex);

        result = _<string>(str).chain().includes(value).value();
        result = _<string>(str).chain().includes(value, fromIndex).value();
        result = _(str).chain().includes(value).value();
        result = _(str).chain().includes(value, fromIndex).value();
    }
}

// invoke
// as a small breaking change, consider updating invoke to result in any[]
// as a larger breaking change, consider updating invoke to be the following:
// invoke<TItem extends {}, TMethod extends { [KItem in keyof TItem]: TItem[KItem] extends Function ? KItem : never }[keyof TItem]>(list: _.List<TItem>, methodName: TMethod, ...args: Parameters<TItem[TMethod]>): ReturnType<TItem[TMethod]>[];
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

        result = _<{ func: () => number }>(array).chain().invoke(functionName).value();
        result = _(array).chain().invoke(functionName).value();
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

        result = _<{ func: () => number }>(list).chain().invoke(functionName).value();
        result = _(list).chain().invoke(functionName).value();
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

        result = _<{ func: () => number }>(dict).chain().invoke(functionName).value();
        result = _(dict).chain().invoke(functionName).value();
    }

    {
        const functionName = 'trim';
        const str = 'abc';
        let result: string[];

        result = _.invoke<string>(str, functionName);
        result = _.invoke(str, functionName);

        result = _<string>(str).invoke(functionName);
        result = _(str).invoke(functionName);

        result = _<string>(str).chain().invoke(functionName).value();
        result = _(str).chain().invoke(functionName).value();
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

        result = _<{ func: (input: number) => number }>(array).chain().invoke(functionName, arg).value();
        result = _(array).chain().invoke(functionName, arg).value();
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

        result = _<{ func: (input: number) => number }>(list).chain().invoke(functionName, arg).value();
        result = _(list).chain().invoke(functionName, arg).value();
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

        result = _<{ func: (input: number) => number }>(dict).chain().invoke(functionName, arg).value();
        result = _(dict).chain().invoke(functionName, arg).value();
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

        result = _<string>(str).chain().invoke(functionName, arg).value();
        result = _(str).chain().invoke(functionName, arg).value();
    }
}

// pluck
// as a breaking change, ideally update Underscore and Chain types to also figure out the correct resulting type instead of any[] or any
{
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const property = 'a';
        let result: string[];

        result = _.pluck<{ a: string }, 'a'>(array, property);
        result = _.pluck(array, property);

        result = _<{ a: string }>(array).pluck(property);
        result = _(array).pluck(property);

        result = _.chain<{ a: string }>(array).pluck(property).value();
        result = _.chain(array).pluck(property).value();

        result = _<{ a: string }>(array).chain().pluck(property).value();
        result = _(array).chain().pluck(property).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const property = 'a';
        let result: string[];

        result = _.pluck<{ a: string }, 'a'>(list, property);
        result = _.pluck(list, property);

        result = _<{ a: string }>(list).pluck(property);
        result = _(list).pluck(property);

        result = _.chain<{ a: string }>(list).pluck(property).value();
        result = _.chain(list).pluck(property).value();

        result = _<{ a: string }>(list).chain().pluck(property).value();
        result = _(list).chain().pluck(property).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const property = 'a';
        let result: string[];

        result = _.pluck<{ a: string }, 'a'>(dict, property);
        result = _.pluck(dict, property);

        result = _<{ a: string }>(dict).pluck(property);
        result = _(dict).pluck(property);

        result = _.chain<{ a: string }>(dict).pluck(property).value();
        result = _.chain(dict).pluck(property).value();

        result = _<{ a: string }>(dict).chain().pluck(property).value();
        result = _(dict).chain().pluck(property).value();
    }
}

// max
// as a breaking change, consider making the return type for the version of max that takes an iterator T | number
// since an empty collection will result in -Infinity
// as a breaking change, consider updating Underscore.max and Chain.max to take iterators with number results instead of any
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

        result = _<number>(array).chain().max().value();
        result = _(array).chain().max().value();
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

        result = _<number>(list).chain().max().value();
        result = _(list).chain().max().value();
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

        result = _<number>(dict).chain().max().value();
        result = _(dict).chain().max().value();
    }

    // with iterator
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

        result = _<{ a: number }>(array).chain().max(iterator).value();
        result = _<{ a: number }>(array).chain().max(iterator, context).value();
        result = _(array).chain().max(iterator).value();
        result = _(array).chain().max(iterator, context).value();
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

        result = _<{ a: number }>(list).chain().max(iterator).value();
        result = _<{ a: number }>(list).chain().max(iterator, context).value();
        result = _(list).chain().max(iterator).value();
        result = _(list).chain().max(iterator, context).value();
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

        result = _<{ a: number }>(dict).chain().max(iterator).value();
        result = _<{ a: number }>(dict).chain().max(iterator, context).value();
        result = _(dict).chain().max(iterator).value();
        result = _(dict).chain().max(iterator, context).value();
    }
}

// min
// as a breaking change, consider making the return type for the version of min that takes an iterator T | number
// since an empty collection will result in -Infinity
// as a breaking change, consider updating Underscore.min and Chain.min to take iterators with number results instead of any
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

        result = _<number>(array).chain().min().value();
        result = _(array).chain().min().value();
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

        result = _<number>(list).chain().min().value();
        result = _(list).chain().min().value();
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

        result = _<number>(dict).chain().min().value();
        result = _(dict).chain().min().value();
    }

    // with iterator
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

        result = _<{ a: number }>(array).chain().min(iterator).value();
        result = _<{ a: number }>(array).chain().min(iterator, context).value();
        result = _(array).chain().min(iterator).value();
        result = _(array).chain().min(iterator, context).value();
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

        result = _<{ a: number }>(list).chain().min(iterator).value();
        result = _<{ a: number }>(list).chain().min(iterator, context).value();
        result = _(list).chain().min(iterator).value();
        result = _(list).chain().min(iterator, context).value();
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

        result = _<{ a: number }>(dict).chain().min(iterator).value();
        result = _<{ a: number }>(dict).chain().min(iterator, context).value();
        result = _(dict).chain().min(iterator).value();
        result = _(dict).chain().min(iterator, context).value();
    }
}

// sortBy
// as a breaking change, consider dropping TSort from UnderscoreStatic.sortBy and using any instead like Underscore and Chain do since TSort doesn't really add much
// as a breaking change, consider dropping the context property from overloads that take a property name since it's not useful
// as a breaking change, consider adding a type parameter to overloads that take a property name that is constrained to property names
// on the type being sorted
{
    const context = {};

    // with iterators
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const iterator = (value: { a: string }, index: number, list: _.List<{ a: string }>) => value.a;
        let result: { a: string }[];

        result = _.sortBy<{ a: string }, string>(array, iterator);
        result = _.sortBy<{ a: string }, string>(array, iterator, context);
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

        result = _<{ a: string }>(array).chain().sortBy(iterator).value();
        result = _<{ a: string }>(array).chain().sortBy(iterator, context).value();
        result = _(array).chain().sortBy(iterator).value();
        result = _(array).chain().sortBy(iterator, context).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const iterator = (value: { a: string }, index: number, list: _.List<{ a: string }>) => value.a;
        let result: { a: string }[];

        result = _.sortBy<{ a: string }, string>(list, iterator);
        result = _.sortBy<{ a: string }, string>(list, iterator, context);
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

        result = _<{ a: string }>(list).chain().sortBy(iterator).value();
        result = _<{ a: string }>(list).chain().sortBy(iterator, context).value();
        result = _(list).chain().sortBy(iterator).value();
        result = _(list).chain().sortBy(iterator, context).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const iterator = (element: { a: string }, key: string, list: _.Dictionary<{ a: string }>) => element.a;
        let result: { a: string }[];

        result = _.sortBy<{ a: string }, string>(dict, iterator);
        result = _.sortBy<{ a: string }, string>(dict, iterator, context);
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

        result = _<{ a: string }>(dict).chain().sortBy(iterator).value();
        result = _<{ a: string }>(dict).chain().sortBy(iterator, context).value();
        result = _(dict).chain().sortBy(iterator).value();
        result = _(dict).chain().sortBy(iterator, context).value();
    }

    // with property names
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const property = 'a';
        let result: { a: string }[];

        result = _.sortBy<{ a: string }>(array, property);
        result = _.sortBy<{ a: string }>(array, property, context);
        result = _.sortBy(array, property);
        result = _.sortBy(array, property, context);

        result = _<{ a: string }>(array).sortBy(property);
        result = _<{ a: string }>(array).sortBy(property, context);
        result = _(array).sortBy(property);
        result = _(array).sortBy(property, context);

        result = _.chain<{ a: string }>(array).sortBy(property).value();
        result = _.chain<{ a: string }>(array).sortBy(property, context).value();
        result = _.chain(array).sortBy(property).value();
        result = _.chain(array).sortBy(property, context).value();

        result = _<{ a: string }>(array).chain().sortBy(property).value();
        result = _<{ a: string }>(array).chain().sortBy(property, context).value();
        result = _(array).chain().sortBy(property).value();
        result = _(array).chain().sortBy(property, context).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const property = 'a';
        let result: { a: string }[];

        result = _.sortBy<{ a: string }>(list, property);
        result = _.sortBy<{ a: string }>(list, property, context);
        result = _.sortBy(list, property);
        result = _.sortBy(list, property, context);

        result = _<{ a: string }>(list).sortBy(property);
        result = _<{ a: string }>(list).sortBy(property, context);
        result = _(list).sortBy(property);
        result = _(list).sortBy(property, context);

        result = _.chain<{ a: string }>(list).sortBy(property).value();
        result = _.chain<{ a: string }>(list).sortBy(property, context).value();
        result = _.chain(list).sortBy(property).value();
        result = _.chain(list).sortBy(property, context).value();

        result = _<{ a: string }>(list).chain().sortBy(property).value();
        result = _<{ a: string }>(list).chain().sortBy(property, context).value();
        result = _(list).chain().sortBy(property).value();
        result = _(list).chain().sortBy(property, context).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const property = 'a';
        let result: { a: string }[];

        result = _.sortBy<{ a: string }>(dict, property);
        result = _.sortBy<{ a: string }>(dict, property, context);
        result = _.sortBy(dict, property);
        result = _.sortBy(dict, property, context);

        result = _<{ a: string }>(dict).sortBy(property);
        result = _<{ a: string }>(dict).sortBy(property, context);
        result = _(dict).sortBy(property);
        result = _(dict).sortBy(property, context);

        result = _.chain<{ a: string }>(dict).sortBy(property).value();
        result = _.chain<{ a: string }>(dict).sortBy(property, context).value();
        result = _.chain(dict).sortBy(property).value();
        result = _.chain(dict).sortBy(property, context).value();

        result = _<{ a: string }>(dict).chain().sortBy(property).value();
        result = _<{ a: string }>(dict).chain().sortBy(property, context).value();
        result = _(dict).chain().sortBy(property).value();
        result = _(dict).chain().sortBy(property, context).value();
    }
}

// groupBy
// as a breaking chage, consider changing the result of Underscore.groupBy to be _.Dictionary<T[]> instead of _.Dictionary<_.List<T>>
// as a breaking change, consider changing _.ListIterator<T, any> and _.ObjectIterator<T, any> to use allowed indexing types (string | number | symbol)
// instead of any
// as a breaking change, consider adding a type parameter to overloads that take a property name that is constrained to property names
// on the type being sorted
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

        result = _<{ a: string }>(array).chain().groupBy(iterator).value();
        result = _<{ a: string }>(array).chain().groupBy(iterator, context).value();
        result = _(array).chain().groupBy(iterator).value();
        result = _(array).chain().groupBy(iterator, context).value();
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

        result = _<{ a: string }>(list).chain().groupBy(iterator).value();
        result = _<{ a: string }>(list).chain().groupBy(iterator, context).value();
        result = _(list).chain().groupBy(iterator).value();
        result = _(list).chain().groupBy(iterator, context).value();
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

        result = _<{ a: string }>(dict).chain().groupBy(iterator).value();
        result = _<{ a: string }>(dict).chain().groupBy(iterator, context).value();
        result = _(dict).chain().groupBy(iterator).value();
        result = _(dict).chain().groupBy(iterator, context).value();
    }

    // with property names
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const property = 'a';
        let result: _.Dictionary<_.List<{ a: string }>>;

        result = _.groupBy<{ a: string }>(array, property);
        result = _.groupBy<{ a: string }>(array, property, context);
        result = _.groupBy(array, property);
        result = _.groupBy(array, property, context);

        result = _<{ a: string }>(array).groupBy(property);
        result = _<{ a: string }>(array).groupBy(property, context);
        result = _(array).groupBy(property);
        result = _(array).groupBy(property, context);

        result = _.chain<{ a: string }>(array).groupBy(property).value();
        result = _.chain<{ a: string }>(array).groupBy(property, context).value();
        result = _.chain(array).groupBy(property).value();
        result = _.chain(array).groupBy(property, context).value();

        result = _<{ a: string }>(array).chain().groupBy(property).value();
        result = _<{ a: string }>(array).chain().groupBy(property, context).value();
        result = _(array).chain().groupBy(property).value();
        result = _(array).chain().groupBy(property, context).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const property = 'a';
        let result: _.Dictionary<_.List<{ a: string }>>;

        result = _.groupBy<{ a: string }>(list, property);
        result = _.groupBy<{ a: string }>(list, property, context);
        result = _.groupBy(list, property);
        result = _.groupBy(list, property, context);

        result = _<{ a: string }>(list).groupBy(property);
        result = _<{ a: string }>(list).groupBy(property, context);
        result = _(list).groupBy(property);
        result = _(list).groupBy(property, context);

        result = _.chain<{ a: string }>(list).groupBy(property).value();
        result = _.chain<{ a: string }>(list).groupBy(property, context).value();
        result = _.chain(list).groupBy(property).value();
        result = _.chain(list).groupBy(property, context).value();

        result = _<{ a: string }>(list).chain().groupBy(property).value();
        result = _<{ a: string }>(list).chain().groupBy(property, context).value();
        result = _(list).chain().groupBy(property).value();
        result = _(list).chain().groupBy(property, context).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const property = 'a';
        let result: _.Dictionary<_.List<{ a: string }>>;

        result = _.groupBy<{ a: string }>(dict, property);
        result = _.groupBy<{ a: string }>(dict, property, context);
        result = _.groupBy(dict, property);
        result = _.groupBy(dict, property, context);

        result = _<{ a: string }>(dict).groupBy(property);
        result = _<{ a: string }>(dict).groupBy(property, context);
        result = _(dict).groupBy(property);
        result = _(dict).groupBy(property, context);

        result = _.chain<{ a: string }>(dict).groupBy(property).value();
        result = _.chain<{ a: string }>(dict).groupBy(property, context).value();
        result = _.chain(dict).groupBy(property).value();
        result = _.chain(dict).groupBy(property, context).value();

        result = _<{ a: string }>(dict).chain().groupBy(property).value();
        result = _<{ a: string }>(dict).chain().groupBy(property, context).value();
        result = _(dict).chain().groupBy(property).value();
        result = _(dict).chain().groupBy(property, context).value();
    }
}

// indexBy
// as a breaking change, consider changing _.ListIterator<T, any> and _.ObjectIterator<T, any> to use allowed indexing types (string | number | symbol)
// instead of any
// as a breaking change, consider adding a type parameter to overloads that take a property name that is constrained to property names
// on the type being sorted
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

        result = _<{ a: string }>(array).chain().indexBy(iterator).value();
        result = _<{ a: string }>(array).chain().indexBy(iterator, context).value();
        result = _(array).chain().indexBy(iterator).value();
        result = _(array).chain().indexBy(iterator, context).value();
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

        result = _<{ a: string }>(list).chain().indexBy(iterator).value();
        result = _<{ a: string }>(list).chain().indexBy(iterator, context).value();
        result = _(list).chain().indexBy(iterator).value();
        result = _(list).chain().indexBy(iterator, context).value();
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

        result = _<{ a: string }>(dict).chain().indexBy(iterator).value();
        result = _<{ a: string }>(dict).chain().indexBy(iterator, context).value();
        result = _(dict).chain().indexBy(iterator).value();
        result = _(dict).chain().indexBy(iterator, context).value();
    }

    // with property names
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const property = 'a';
        let result: _.Dictionary<{ a: string }>;

        result = _.indexBy<{ a: string }>(array, property);
        result = _.indexBy<{ a: string }>(array, property, context);
        result = _.indexBy(array, property);
        result = _.indexBy(array, property, context);

        result = _<{ a: string }>(array).indexBy(property);
        result = _<{ a: string }>(array).indexBy(property, context);
        result = _(array).indexBy(property);
        result = _(array).indexBy(property, context);

        result = _.chain<{ a: string }>(array).indexBy(property).value();
        result = _.chain<{ a: string }>(array).indexBy(property, context).value();
        result = _.chain(array).indexBy(property).value();
        result = _.chain(array).indexBy(property, context).value();

        result = _<{ a: string }>(array).chain().indexBy(property).value();
        result = _<{ a: string }>(array).chain().indexBy(property, context).value();
        result = _(array).chain().indexBy(property).value();
        result = _(array).chain().indexBy(property, context).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const property = 'a';
        let result: _.Dictionary<{ a: string }>;

        result = _.indexBy<{ a: string }>(list, property);
        result = _.indexBy<{ a: string }>(list, property, context);
        result = _.indexBy(list, property);
        result = _.indexBy(list, property, context);

        result = _<{ a: string }>(list).indexBy(property);
        result = _<{ a: string }>(list).indexBy(property, context);
        result = _(list).indexBy(property);
        result = _(list).indexBy(property, context);

        result = _.chain<{ a: string }>(list).indexBy(property).value();
        result = _.chain<{ a: string }>(list).indexBy(property, context).value();
        result = _.chain(list).indexBy(property).value();
        result = _.chain(list).indexBy(property, context).value();

        result = _<{ a: string }>(list).chain().indexBy(property).value();
        result = _<{ a: string }>(list).chain().indexBy(property, context).value();
        result = _(list).chain().indexBy(property).value();
        result = _(list).chain().indexBy(property, context).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const property = 'a';
        let result: _.Dictionary<{ a: string }>;

        result = _.indexBy<{ a: string }>(dict, property);
        result = _.indexBy<{ a: string }>(dict, property, context);
        result = _.indexBy(dict, property);
        result = _.indexBy(dict, property, context);

        result = _<{ a: string }>(dict).indexBy(property);
        result = _<{ a: string }>(dict).indexBy(property, context);
        result = _(dict).indexBy(property);
        result = _(dict).indexBy(property, context);

        result = _.chain<{ a: string }>(dict).indexBy(property).value();
        result = _.chain<{ a: string }>(dict).indexBy(property, context).value();
        result = _.chain(dict).indexBy(property).value();
        result = _.chain(dict).indexBy(property, context).value();

        result = _<{ a: string }>(dict).chain().indexBy(property).value();
        result = _<{ a: string }>(dict).chain().indexBy(property, context).value();
        result = _(dict).chain().indexBy(property).value();
        result = _(dict).chain().indexBy(property, context).value();
    }
}

// countBy
// as a breaking change, consider adding a type parameter to overloads that take a property name that is constrained to property names
// on the type being sorted
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

        result = _<{ a: string }>(array).chain().countBy(iterator).value();
        result = _<{ a: string }>(array).chain().countBy(iterator, context).value();
        result = _(array).chain().countBy(iterator).value();
        result = _(array).chain().countBy(iterator, context).value();
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

        result = _<{ a: string }>(list).chain().countBy(iterator).value();
        result = _<{ a: string }>(list).chain().countBy(iterator, context).value();
        result = _(list).chain().countBy(iterator).value();
        result = _(list).chain().countBy(iterator, context).value();
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

        result = _<{ a: string }>(dict).chain().countBy(iterator).value();
        result = _<{ a: string }>(dict).chain().countBy(iterator, context).value();
        result = _(dict).chain().countBy(iterator).value();
        result = _(dict).chain().countBy(iterator, context).value();
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

        result = _<string>(str).chain().countBy(iterator).value();
        result = _<string>(str).chain().countBy(iterator, context).value();
        result = _(str).chain().countBy(iterator).value();
        result = _(str).chain().countBy(iterator, context).value();
    }

    // with property names
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const property = 'a';
        let result: _.Dictionary<number>;

        result = _.countBy<{ a: string }>(array, property);
        result = _.countBy<{ a: string }>(array, property, context);
        result = _.countBy(array, property);
        result = _.countBy(array, property, context);

        result = _<{ a: string }>(array).countBy(property);
        result = _<{ a: string }>(array).countBy(property, context);
        result = _(array).countBy(property);
        result = _(array).countBy(property, context);

        result = _.chain<{ a: string }>(array).countBy(property).value();
        result = _.chain<{ a: string }>(array).countBy(property, context).value();
        result = _.chain(array).countBy(property).value();
        result = _.chain(array).countBy(property, context).value();

        result = _<{ a: string }>(array).chain().countBy(property).value();
        result = _<{ a: string }>(array).chain().countBy(property, context).value();
        result = _(array).chain().countBy(property).value();
        result = _(array).chain().countBy(property, context).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const property = 'a';
        let result: _.Dictionary<number>;

        result = _.countBy<{ a: string }>(list, property);
        result = _.countBy<{ a: string }>(list, property, context);
        result = _.countBy(list, property);
        result = _.countBy(list, property, context);

        result = _<{ a: string }>(list).countBy(property);
        result = _<{ a: string }>(list).countBy(property, context);
        result = _(list).countBy(property);
        result = _(list).countBy(property, context);

        result = _.chain<{ a: string }>(list).countBy(property).value();
        result = _.chain<{ a: string }>(list).countBy(property, context).value();
        result = _.chain(list).countBy(property).value();
        result = _.chain(list).countBy(property, context).value();

        result = _<{ a: string }>(list).chain().countBy(property).value();
        result = _<{ a: string }>(list).chain().countBy(property, context).value();
        result = _(list).chain().countBy(property).value();
        result = _(list).chain().countBy(property, context).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const property = 'a';
        let result: _.Dictionary<number>;

        result = _.countBy<{ a: string }>(dict, property);
        result = _.countBy<{ a: string }>(dict, property, context);
        result = _.countBy(dict, property);
        result = _.countBy(dict, property, context);

        result = _<{ a: string }>(dict).countBy(property);
        result = _<{ a: string }>(dict).countBy(property, context);
        result = _(dict).countBy(property);
        result = _(dict).countBy(property, context);

        result = _.chain<{ a: string }>(dict).countBy(property).value();
        result = _.chain<{ a: string }>(dict).countBy(property, context).value();
        result = _.chain(dict).countBy(property).value();
        result = _.chain(dict).countBy(property, context).value();

        result = _<{ a: string }>(dict).chain().countBy(property).value();
        result = _<{ a: string }>(dict).chain().countBy(property, context).value();
        result = _(dict).chain().countBy(property).value();
        result = _(dict).chain().countBy(property, context).value();
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

        result = _<{ a: string }>(array).chain().shuffle().value();
        result = _(array).chain().shuffle().value();
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

        result = _<{ a: string }>(list).chain().shuffle().value();
        result = _(list).chain().shuffle().value();
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

        result = _<{ a: string }>(dict).chain().shuffle().value();
        result = _(dict).chain().shuffle().value();
    }

    {
        const str = 'abc';
        let result: string[];

        result = _.shuffle<string>(str);
        result = _.shuffle(str);

        result = _<string>(str).shuffle();
        result = _(str).shuffle();

        result = _<string>(str).chain().shuffle().value();
        result = _(str).chain().shuffle().value();
    }
}

// sample
// as a breaking change, ideally all versions of sample without n should include undefined as a possible result since _.sample([]) yields undefined
// as a breaking change, ideally _Chain.sample should be updated to return _ChainSingle<T | undefined>
{
    // without n
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        let result: { a: string } | undefined;

        result = _.sample<{ a: string }>(array);
        result = _.sample(array);

        result = _<{ a: string }>(array).sample();
        result = _(array).sample();

        result = _.chain<{ a: string }>(array).sample<{ a: string }>().value();
        result = _.chain(array).sample<{ a: string }>().value();

        result = _<{ a: string }>(array).chain().sample<{ a: string }>().value();
        result = _(array).chain().sample<{ a: string }>().value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        let result: { a: string } | undefined;

        result = _.sample<{ a: string }>(list);
        result = _.sample(list);

        result = _<{ a: string }>(list).sample<{ a: string }>();
        result = _(list).sample<{ a: string }>();

        result = _.chain<{ a: string }>(list).sample<{ a: string }>().value();
        result = _.chain(list).sample<{ a: string }>().value();

        result = _<{ a: string }>(list).chain().sample<{ a: string }>().value();
        result = _(list).chain().sample<{ a: string }>().value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        let result: { a: string } | undefined;

        result = _.sample<{ a: string }>(dict);
        result = _.sample(dict);

        result = _<{ a: string }>(dict).sample<{ a: string }>();
        result = _(dict).sample<{ a: string }>();

        result = _.chain<{ a: string }>(dict).sample<{ a: string }>().value();
        result = _.chain(dict).sample<{ a: string }>().value();

        result = _<{ a: string }>(dict).chain().sample<{ a: string }>().value();
        result = _(dict).chain().sample<{ a: string }>().value();
    }

    {
        const str = 'abc';
        let result: string | undefined;

        result = _.sample<string>(str);
        result = _.sample(str);

        result = _<string>(str).sample<string>();
        result = _(str).sample<string>();

        result = _<string>(str).chain().sample<string>().value();
        result = _(str).chain().sample<string>().value();
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

        result = _.chain<{ a: string }>(array).sample<{ a: string }>(n).value();
        result = _.chain(array).sample<{ a: string }>(n).value();

        result = _<{ a: string }>(array).chain().sample<{ a: string }>(n).value();
        result = _(array).chain().sample<{ a: string }>(n).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const n = 2;
        let result: { a: string }[];

        result = _.sample<{ a: string }>(list, n);
        result = _.sample(list, n);

        result = _<{ a: string }>(list).sample<{ a: string }>(n);
        result = _(list).sample<{ a: string }>(n);

        result = _.chain<{ a: string }>(list).sample<{ a: string }>(n).value();
        result = _.chain(list).sample<{ a: string }>(n).value();

        result = _<{ a: string }>(list).chain().sample<{ a: string }>(n).value();
        result = _(list).chain().sample<{ a: string }>(n).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const n = 2;
        let result: { a: string }[];

        result = _.sample<{ a: string }>(dict, n);
        result = _.sample(dict, n);

        result = _<{ a: string }>(dict).sample<{ a: string }>(n);
        result = _(dict).sample<{ a: string }>(n);

        result = _.chain<{ a: string }>(dict).sample<{ a: string }>(n).value();
        result = _.chain(dict).sample<{ a: string }>(n).value();

        result = _<{ a: string }>(dict).chain().sample<{ a: string }>(n).value();
        result = _(dict).chain().sample<{ a: string }>(n).value();
    }

    {
        const str = 'abc';
        const n = 2;
        let result: string[];

        result = _.sample<string>(str, n);
        result = _.sample(str, n);

        result = _<string>(str).sample<string>(n);
        result = _(str).sample<string>(n);

        result = _<string>(str).chain().sample<string>(n).value();
        result = _(str).chain().sample<string>(n).value();
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

        result = _<{ a: string }>(array).chain().toArray().value();
        result = _(array).chain().toArray().value();
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

        result = _<{ a: string }>(list).chain().toArray().value();
        result = _(list).chain().toArray().value();
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

        result = _<{ a: string }>(dict).chain().toArray().value();
        result = _(dict).chain().toArray().value();
    }

    {
        const str = 'abc';
        let result: string[];

        result = _.toArray<string>(str);
        result = _.toArray(str);

        result = _<string>(str).toArray();
        result = _(str).toArray();

        result = _<string>(str).chain().toArray().value();
        result = _(str).chain().toArray().value();
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

        result = _<{ a: string }>(array).chain().size().value();
        result = _(array).chain().size().value();
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

        result = _<{ a: string }>(list).chain().size().value();
        result = _(list).chain().size().value();
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

        result = _<{ a: string }>(dict).chain().size().value();
        result = _(dict).chain().size().value();
    }

    {
        const str = 'abc';
        let result: number;

        result = _.size<string>(str);
        result = _.size(str);

        result = _<string>(str).size();
        result = _(str).size();

        result = _<string>(str).chain().size().value();
        result = _(str).chain().size().value();
    }
}

// partition
// as a breaking change, consider updating the return type of partition to be [T[], T[]]
{
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const iterator = (value: { a: string }, index: number, list: _.List<{ a: string }>) => value.a === 'b';
        let result: { a: string }[][];

        result = _.partition<{ a: string }>(array, iterator);
        result = _.partition(array, iterator);

        result = _<{ a: string }>(array).partition(iterator);
        result = _(array).partition(iterator);

        result = _.chain<{ a: string }>(array).partition(iterator).value();
        result = _.chain(array).partition(iterator).value();

        result = _<{ a: string }>(array).chain().partition(iterator).value();
        result = _(array).chain().partition(iterator).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const iterator = (value: { a: string }, index: number, list: _.List<{ a: string }>) => value.a === 'b';
        let result: { a: string }[][];

        result = _.partition<{ a: string }>(list, iterator);
        result = _.partition(list, iterator);

        result = _<{ a: string }>(list).partition(iterator);
        result = _(list).partition(iterator);

        result = _.chain<{ a: string }>(list).partition(iterator).value();
        result = _.chain(list).partition(iterator).value();

        result = _<{ a: string }>(list).chain().partition(iterator).value();
        result = _(list).chain().partition(iterator).value();
    }

    {
        const dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
        const iterator = (element: { a: string }, key: string, list: _.Dictionary<{ a: string }>) => element.a === 'b';
        let result: { a: string }[][];

        result = _.partition<{ a: string }>(dict, iterator);
        result = _.partition(dict, iterator);

        result = _<{ a: string }>(dict).partition(iterator);
        result = _(dict).partition(iterator);

        result = _.chain<{ a: string }>(dict).partition(iterator).value();
        result = _.chain(dict).partition(iterator).value();

        result = _<{ a: string }>(dict).chain().partition(iterator).value();
        result = _(dict).chain().partition(iterator).value();
    }

    {
        const str = 'abc';
        const iterator = (value: string, index: number, list: _.List<string>) => value === 'b';
        let result: string[][];

        result = _.partition<string>(str, iterator);
        result = _.partition(str, iterator);

        result = _<string>(str).partition(iterator);
        result = _(str).partition(iterator);

        result = _<string>(str).chain().partition(iterator).value();
        result = _(str).chain().partition(iterator).value();
    }
}

// Array Functions

// first, head, take
// as a breaking change, ideally _Chain.head and _Chain.take should be updated to return _ChainSingle<T | undefined> like _Chain.first correctly does
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

        result = _<{ a: string }>(array).chain().first().value();
        result = _(array).chain().first().value();

        result = _.head<{ a: string }>(array);
        result = _.head(array);

        result = _<{ a: string }>(array).head();
        result = _(array).head();

        result = _.chain<{ a: string }>(array).head().value();
        result = _.chain(array).head().value();

        result = _<{ a: string }>(array).chain().head().value();
        result = _(array).chain().head().value();

        result = _.take<{ a: string }>(array);
        result = _.take(array);

        result = _<{ a: string }>(array).take();
        result = _(array).take();

        result = _.chain<{ a: string }>(array).take().value();
        result = _.chain(array).take().value();

        result = _<{ a: string }>(array).chain().take().value();
        result = _(array).chain().take().value();
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

        result = _<{ a: string }>(list).chain().first().value();
        result = _(list).chain().first().value();

        result = _.head<{ a: string }>(list);
        result = _.head(list);

        result = _<{ a: string }>(list).head();
        result = _(list).head();

        result = _.chain<{ a: string }>(list).head().value();
        result = _.chain(list).head().value();

        result = _<{ a: string }>(list).chain().head().value();
        result = _(list).chain().head().value();

        result = _.take<{ a: string }>(list);
        result = _.take(list);

        result = _<{ a: string }>(list).take();
        result = _(list).take();

        result = _.chain<{ a: string }>(list).take().value();
        result = _.chain(list).take().value();

        result = _<{ a: string }>(list).chain().take().value();
        result = _(list).chain().take().value();
    }

    {
        const str = 'abc';
        let result: string | undefined;

        result = _.first<string>(str);
        result = _.first(str);

        result = _<string>(str).first();
        result = _(str).first();

        result = _<string>(str).chain().first().value();
        result = _(str).chain().first().value();

        result = _.head<string>(str);
        result = _.head(str);

        result = _<string>(str).head();
        result = _(str).head();

        result = _<string>(str).chain().head().value();
        result = _(str).chain().head().value();

        result = _.take<string>(str);
        result = _.take(str);

        result = _<string>(str).take();
        result = _(str).take();

        result = _<string>(str).chain().take().value();
        result = _(str).chain().take().value();
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

        result = _<{ a: string }>(array).chain().first(n).value();
        result = _(array).chain().first(n).value();

        result = _.head<{ a: string }>(array, n);
        result = _.head(array, n);

        result = _<{ a: string }>(array).head(n);
        result = _(array).head(n);

        result = _.chain<{ a: string }>(array).head(n).value();
        result = _.chain(array).head(n).value();

        result = _<{ a: string }>(array).chain().head(n).value();
        result = _(array).chain().head(n).value();

        result = _.take<{ a: string }>(array, n);
        result = _.take(array, n);

        result = _<{ a: string }>(array).take(n);
        result = _(array).take(n);

        result = _.chain<{ a: string }>(array).take(n).value();
        result = _.chain(array).take(n).value();

        result = _<{ a: string }>(array).chain().take(n).value();
        result = _(array).chain().take(n).value();
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

        result = _<{ a: string }>(list).chain().first(n).value();
        result = _(list).chain().first(n).value();

        result = _.head<{ a: string }>(list, n);
        result = _.head(list, n);

        result = _<{ a: string }>(list).head(n);
        result = _(list).head(n);

        result = _.chain<{ a: string }>(list).head(n).value();
        result = _.chain(list).head(n).value();

        result = _<{ a: string }>(list).chain().head(n).value();
        result = _(list).chain().head(n).value();

        result = _.take<{ a: string }>(list, n);
        result = _.take(list, n);

        result = _<{ a: string }>(list).take(n);
        result = _(list).take(n);

        result = _.chain<{ a: string }>(list).take(n).value();
        result = _.chain(list).take(n).value();

        result = _<{ a: string }>(list).chain().take(n).value();
        result = _(list).chain().take(n).value();
    }

    {
        const str = 'abc';
        const n = 2;
        let result: string[];

        result = _.first<string>(str, n);
        result = _.first(str, n);

        result = _<string>(str).first(n);
        result = _(str).first(n);

        result = _<string>(str).chain().first(n).value();
        result = _(str).chain().first(n).value();

        result = _.head<string>(str, n);
        result = _.head(str, n);

        result = _<string>(str).head(n);
        result = _(str).head(n);

        result = _<string>(str).chain().head(n).value();
        result = _(str).chain().head(n).value();

        result = _.take<string>(str, n);
        result = _.take(str, n);

        result = _<string>(str).take(n);
        result = _(str).take(n);

        result = _<string>(str).chain().take(n).value();
        result = _(str).chain().take(n).value();
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

        result = _<{ a: string }>(array).chain().initial().value();
        result = _(array).chain().initial().value();
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

        result = _<{ a: string }>(list).chain().initial().value();
        result = _(list).chain().initial().value();
    }

    {
        const str = 'abc';
        let result: string[];

        result = _.initial<string>(str);
        result = _.initial(str);

        result = _<string>(str).initial();
        result = _(str).initial();

        result = _<string>(str).chain().initial().value();
        result = _(str).chain().initial().value();
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

        result = _<{ a: string }>(array).chain().initial(n).value();
        result = _(array).chain().initial(n).value();
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

        result = _<{ a: string }>(list).chain().initial(n).value();
        result = _(list).chain().initial(n).value();
    }

    {
        const str = 'abc';
        const n = 2;
        let result: string[];

        result = _.initial<string>(str, n);
        result = _.initial(str, n);

        result = _<string>(str).initial(n);
        result = _(str).initial(n);

        result = _<string>(str).chain().initial(n).value();
        result = _(str).chain().initial(n).value();
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

        result = _<{ a: string }>(array).chain().last().value();
        result = _(array).chain().last().value();
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

        result = _<{ a: string }>(list).chain().last().value();
        result = _(list).chain().last().value();
    }

    {
        const str = 'abc';
        let result: string | undefined;

        result = _.last<string>(str);
        result = _.last(str);

        result = _<string>(str).last();
        result = _(str).last();

        result = _<string>(str).chain().last().value();
        result = _(str).chain().last().value();
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

        result = _<{ a: string }>(array).chain().last(n).value();
        result = _(array).chain().last(n).value();
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

        result = _<{ a: string }>(list).chain().last(n).value();
        result = _(list).chain().last(n).value();
    }

    {
        const str = 'abc';
        const n = 2;
        let result: string[];

        result = _.last<string>(str, n);
        result = _.last(str, n);

        result = _<string>(str).last(n);
        result = _(str).last(n);

        result = _<string>(str).chain().last(n).value();
        result = _(str).chain().last(n).value();
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

        result = _<{ a: string }>(array).chain().rest().value();
        result = _(array).chain().rest().value();

        result = _.tail<{ a: string }>(array);
        result = _.tail(array);

        result = _<{ a: string }>(array).tail();
        result = _(array).tail();

        result = _.chain<{ a: string }>(array).tail().value();
        result = _.chain(array).tail().value();

        result = _<{ a: string }>(array).chain().tail().value();
        result = _(array).chain().tail().value();

        result = _.drop<{ a: string }>(array);
        result = _.drop(array);

        result = _<{ a: string }>(array).drop();
        result = _(array).drop();

        result = _.chain<{ a: string }>(array).drop().value();
        result = _.chain(array).drop().value();

        result = _<{ a: string }>(array).chain().drop().value();
        result = _(array).chain().drop().value();
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

        result = _<{ a: string }>(list).chain().rest().value();
        result = _(list).chain().rest().value();

        result = _.tail<{ a: string }>(list);
        result = _.tail(list);

        result = _<{ a: string }>(list).tail();
        result = _(list).tail();

        result = _.chain<{ a: string }>(list).tail().value();
        result = _.chain(list).tail().value();

        result = _<{ a: string }>(list).chain().tail().value();
        result = _(list).chain().tail().value();

        result = _.drop<{ a: string }>(list);
        result = _.drop(list);

        result = _<{ a: string }>(list).drop();
        result = _(list).drop();

        result = _.chain<{ a: string }>(list).drop().value();
        result = _.chain(list).drop().value();

        result = _<{ a: string }>(list).chain().drop().value();
        result = _(list).chain().drop().value();
    }

    {
        const str = 'abc';
        let result: string[];

        result = _.rest<string>(str);
        result = _.rest(str);

        result = _<string>(str).rest();
        result = _(str).rest();

        result = _<string>(str).chain().rest().value();
        result = _(str).chain().rest().value();

        result = _.tail<string>(str);
        result = _.tail(str);

        result = _<string>(str).tail();
        result = _(str).tail();

        result = _<string>(str).chain().tail().value();
        result = _(str).chain().tail().value();

        result = _.drop<string>(str);
        result = _.drop(str);

        result = _<string>(str).drop();
        result = _(str).drop();

        result = _<string>(str).chain().drop().value();
        result = _(str).chain().drop().value();
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

        result = _<{ a: string }>(array).chain().rest(n).value();
        result = _(array).chain().rest(n).value();

        result = _.tail<{ a: string }>(array, n);
        result = _.tail(array, n);

        result = _<{ a: string }>(array).tail(n);
        result = _(array).tail(n);

        result = _.chain<{ a: string }>(array).tail(n).value();
        result = _.chain(array).tail(n).value();

        result = _<{ a: string }>(array).chain().tail(n).value();
        result = _(array).chain().tail(n).value();

        result = _.drop<{ a: string }>(array, n);
        result = _.drop(array, n);

        result = _<{ a: string }>(array).drop(n);
        result = _(array).drop(n);

        result = _.chain<{ a: string }>(array).drop(n).value();
        result = _.chain(array).drop(n).value();

        result = _<{ a: string }>(array).chain().drop(n).value();
        result = _(array).chain().drop(n).value();
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

        result = _<{ a: string }>(list).chain().rest(n).value();
        result = _(list).chain().rest(n).value();

        result = _.tail<{ a: string }>(list, n);
        result = _.tail(list, n);

        result = _<{ a: string }>(list).tail(n);
        result = _(list).tail(n);

        result = _.chain<{ a: string }>(list).tail(n).value();
        result = _.chain(list).tail(n).value();

        result = _<{ a: string }>(list).chain().tail(n).value();
        result = _(list).chain().tail(n).value();

        result = _.drop<{ a: string }>(list, n);
        result = _.drop(list, n);

        result = _<{ a: string }>(list).drop(n);
        result = _(list).drop(n);

        result = _.chain<{ a: string }>(list).drop(n).value();
        result = _.chain(list).drop(n).value();

        result = _<{ a: string }>(list).chain().drop(n).value();
        result = _(list).chain().drop(n).value();
    }

    {
        const str = 'abc';
        const n = 2;
        let result: string[];

        result = _.rest<string>(str, n);
        result = _.rest(str, n);

        result = _<string>(str).rest(n);
        result = _(str).rest(n);

        result = _<string>(str).chain().rest(n).value();
        result = _(str).chain().rest(n).value();

        result = _.tail<string>(str, n);
        result = _.tail(str, n);

        result = _<string>(str).tail(n);
        result = _(str).tail(n);

        result = _<string>(str).chain().tail(n).value();
        result = _(str).chain().tail(n).value();

        result = _.drop<string>(str, n);
        result = _.drop(str, n);

        result = _<string>(str).drop(n);
        result = _(str).drop(n);

        result = _<string>(str).chain().drop(n).value();
        result = _(str).chain().drop(n).value();
    }
}

// compact
// the unwrapped methods use a type argument that includes falsy values, so they can be used to correctly end up
// with a result that has falsy values removed
// as a breaking change, consider updating the result of Underscore and Chain compact calls to be "(T extends undefined | null | false | '' | 0 ? never : T)[]"
// and updating this result to be { a: string }[]
// if this is changed, it would also be nice to change how the UnderscoreStatic compact calls work to use the same logic to be consistent
{
    {
        const array: ({ a: string } | undefined)[] = [{ a: 'a' }, { a: 'b' }];
        let result: { a: string }[];

        result = _.compact<{ a: string }>(array);
        result = _.compact(array);
    }

    {
        const list: _.List<({ a: string } | undefined)> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        let result: { a: string }[];

        result = _.compact<{ a: string }>(list);
        result = _.compact(list);
    }

    {
        const array: ({ a: string } | undefined)[] = [{ a: 'a' }, { a: 'b' }];
        let result: ({ a: string } | undefined)[];

        result = _<{ a: string } | undefined>(array).compact();
        result = _(array).compact();

        result = _.chain<{ a: string } | undefined>(array).compact().value();
        result = _.chain(array).compact().value();

        result = _<{ a: string } | undefined>(array).chain().compact().value();
        result = _(array).chain().compact().value();
    }

    {
        const list: _.List<({ a: string } | undefined)> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        let result: ({ a: string } | undefined)[];

        result = _<{ a: string } | undefined>(list).compact();
        result = _(list).compact();

        result = _.chain<{ a: string } | undefined>(list).compact().value();
        result = _.chain(list).compact().value();

        result = _<{ a: string } | undefined>(list).chain().compact().value();
        result = _(list).chain().compact().value();
    }
}

interface ArrayWrapper<T> {
    items: T[];
}

// flatten
// as a breaking change, since shallow flattening is likely the most common type of flattening consider adding the following type:
// type ListItemType<T> = T extends _.List<infer TItem> ? TItem : T;
// and updating the flatten functions to have the following two overloads:
// flatten<T>(array: _.List<T>, shallow: true): ListItemType<T>[];
// flatten<T>(array: _.List<T>, shallow?: false): T extends _.List<_.List<any>> ? any[] : ListItemType<T>[];
// and dropping the ChainOfArrays type
// unfortunately it's not possible to recursively collapse something like T[][][][] to T[] at this time
{
    // standard cases - the return value of all of these calls need to be manually checked and should be any[]
    {
        const array: { a: string }[][] = [[{ a: 'a' }, { a: 'b' }], [{ a: 'a' }, { a: 'b' }]];
        let result: { a: string }[];

        result = _.flatten(array);

        result = _<{ a: string }[]>(array).flatten();
        result = _(array).flatten();

        result = _.chain<{ a: string }[]>(array).flatten().value();
        result = _.chain(array).flatten().value();

        result = _<{ a: string }[]>(array).chain().flatten().value();
        result = _(array).chain().flatten().value();
    }

    {
        const list: _.List<_.List<{ a: string }>> = { 0: { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 }, 1: { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 }, length: 2 };
        let result: { a: string }[];

        result = _.flatten(list);

        result = _<_.List<{ a: string }>>(list).flatten();
        result = _(list).flatten();

        result = _.chain<_.List<{ a: string }>>(list).flatten().value();
        result = _.chain(list).flatten().value();

        result = _<_.List<{ a: string }>>(list).chain().flatten().value();
        result = _(list).chain().flatten().value();
    }

    // special case: ChainOfArrays<T> - the return value of all of these calls needs to be manually checked and should be { a: string }[]
    // this interface is technically incorrect since it doesn't distinguish between shallow and not shallow, but a shallow flatten is probably the most common
    // kind of flatten
    {
        const array: ArrayWrapper<{ a: string }>[] = [{ items: [{ a: 'a' }, { a: 'b' }] }, { items: [{ a: 'a' }, { a: 'b' }] }];
        let result: { a: string }[];

        result = _.chain<ArrayWrapper<{ a: string }>>(array).map(a => a.items).flatten().value();
        result = _.chain(array).map(a => a.items).flatten().value();

        result = _<ArrayWrapper<{ a: string }>>(array).chain().map(a => a.items).flatten().value();
        result = _(array).chain().map(a => a.items).flatten().value();
    }

    {
        const list: _.List<ArrayWrapper<{ a: string }>> = { 0: { items: [{ a: 'a' }, { a: 'b' }] }, 1: { items: [{ a: 'a' }, { a: 'b' }] }, length: 2 };
        let result: { a: string }[];

        result = _.chain<ArrayWrapper<{ a: string }>>(list).map(a => a.items).flatten().value();
        result = _.chain(list).map(a => a.items).flatten().value();

        result = _<ArrayWrapper<{ a: string }>>(list).chain().map(a => a.items).flatten().value();
        result = _(list).chain().map(a => a.items).flatten().value();
    }
}

// without
// as a breaking change, ideally the return value for these functions should be updated to include undefined
{
    {
        const array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
        const item = array[0];
        let result: { a: string }[];

        result = _.without<{ a: string }>(array, item);
        result = _.without(array, item);

        result = _<{ a: string }>(array).without(item);
        result = _(array).without(item);

        result = _.chain<{ a: string }>(array).without(item).value();
        result = _.chain(array).without(item).value();

        result = _<{ a: string }>(array).chain().without(item).value();
        result = _(array).chain().without(item).value();
    }

    {
        const list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
        const item = list[0];
        let result: { a: string }[];

        result = _.without<{ a: string }>(list, item);
        result = _.without(list, item);

        result = _<{ a: string }>(list).without(item);
        result = _(list).without(item);

        result = _.chain<{ a: string }>(list).without(item).value();
        result = _.chain(list).without(item).value();

        result = _<{ a: string }>(list).chain().without(item).value();
        result = _(list).chain().without(item).value();
    }

    {
        const str = 'abc';
        const item = str[0];
        let result: string[];

        result = _.without<string>(str, item);
        result = _.without(str, item);;

        result = _<string>(str).without(item);
        result = _(str).without(item);

        result = _<string>(str).chain().without(item).value();
        result = _(str).chain().without(item).value();
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

        result = _<{ a: string }>(array1).chain().union(array2).value();
        result = _(array1).chain().union(array2).value();
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

        result = _<{ a: string }>(list1).chain().union(list2).value();
        result = _(list1).chain().union(list2).value();
    }

    {
        const str1 = 'ab';
        const str2 = 'bc';
        let result: string[];

        result = _.union<string>(str1, str2);
        result = _.union(str1, str2);;

        result = _<string>(str1).union(str2);
        result = _(str1).union(str2);

        result = _<string>(str1).chain().union(str2).value();
        result = _(str1).chain().union(str2).value();
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

        result = _<{ a: string }>(array1).chain().intersection(array2).value();
        result = _(array1).chain().intersection(array2).value();
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

        result = _<{ a: string }>(list1).chain().intersection(list2).value();
        result = _(list1).chain().intersection(list2).value();
    }

    {
        const str1 = 'ab';
        const str2 = 'bc';
        let result: string[];

        result = _.intersection<string>(str1, str2);
        result = _.intersection(str1, str2);;

        result = _<string>(str1).intersection(str2);
        result = _(str1).intersection(str2);

        result = _<string>(str1).chain().intersection(str2).value();
        result = _(str1).chain().intersection(str2).value();
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

        result = _<{ a: string }>(array1).chain().difference(array2).value();
        result = _(array1).chain().difference(array2).value();
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

        result = _<{ a: string }>(list1).chain().difference(list2).value();
        result = _(list1).chain().difference(list2).value();
    }

    {
        const str1 = 'ab';
        const str2 = 'bc';
        let result: string[];

        result = _.difference<string>(str1, str2);
        result = _.difference(str1, str2);;

        result = _<string>(str1).difference(str2);
        result = _(str1).difference(str2);

        result = _<string>(str1).chain().difference(str2).value();
        result = _(str1).chain().difference(str2).value();
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

// Test map function with _ChainOfArrays<>
let usersTable_2 /*: { age: number; name: string; id: string }[][]*/ = _.chain(usersData)
    .map<{ age: number; name: string; id: string }>((p, k: string) => {
        return [{ id: k, ...p }];
    })
    .value();

let usersTable_3 /*: { score: number; fullName: string; login: string }[][]*/ = _.chain(usersTable)
    .map<{ score: number; fullName: string; login: string }>(p => {
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
