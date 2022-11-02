import * as jsonLogic from 'json-logic-js';

jsonLogic.apply({ var: ['a'] }, { a: 1, b: 2 }); // $ExpectType any
jsonLogic.apply({ var: 'a' }, { a: 1, b: 2 }); // $ExpectType any
jsonLogic.apply({ var: ['z', 26] }, { a: 1, b: 2 }); // $ExpectType any
// $ExpectType any
jsonLogic.apply(
    { var: 'champ.name' },
    {
        champ: {
            name: 'Fezzig',
            height: 223,
        },
        challenger: {
            name: 'Dread Pirate Roberts',
            height: 183,
        },
    },
);
jsonLogic.apply({ var: 1 }, ['zero', 'one', 'two']); // $ExpectType any
// $ExpectType any
jsonLogic.apply(
    { and: [{ '<': [{ var: 'temp' }, 110] }, { '==': [{ var: 'pie.filling' }, 'apple'] }] },
    {
        temp: 100,
        pie: { filling: 'apple' },
    },
);
// $ExpectType any
jsonLogic.apply({ cat: ['Hello, ', { var: '' }] }, 'Dolly');

// $ExpectType any
jsonLogic.apply({ missing: ['a', 'b'] }, { a: 'apple', c: 'carrot' });
// $ExpectType any
jsonLogic.apply({ if: [{ missing: ['a', 'b'] }, 'Not enough fruit', 'OK to proceed'] }, { a: 'apple', b: 'banana' });
jsonLogic.apply(
    // @ts-expect-error
    { if: [{ missing: ['a', 'b'] }, 'Need three or more (odd total) elements for "if"'] },
    { a: 'apple', b: 'banana' },
);

// $ExpectType any
jsonLogic.apply({ missing_some: [1, ['a', 'b', 'c']] }, { a: 'apple' });
// $ExpectType any
jsonLogic.apply({ missing_some: [2, ['a', 'b', 'c']] }, { a: 'apple' });
// $ExpectType any
jsonLogic.apply(
    {
        if: [
            { merge: [{ missing: ['first_name', 'last_name'] }, { missing_some: [1, ['cell_phone', 'home_phone']] }] },
            'We require first name, last name, and one phone number.',
            'OK to proceed',
        ],
    },
    { first_name: 'Bruce', last_name: 'Wayne' },
);

// $ExpectType any
jsonLogic.apply({ if: [true, 'yes', 'no'] });
// $ExpectType any
jsonLogic.apply({ if: [false, 'yes', 'no'] });
// $ExpectType any
jsonLogic.apply(
    { if: [{ '<': [{ var: 'temp' }, 0] }, 'freezing', { '<': [{ var: 'temp' }, 100] }, 'liquid', 'gas'] },
    { temp: 55 },
);
// $ExpectType any
jsonLogic.apply({
    if: [
        { '==': [{ '%': [{ var: 'i' }, 15] }, 0] },
        'fizzbuzz',

        { '==': [{ '%': [{ var: 'i' }, 3] }, 0] },
        'fizz',

        { '==': [{ '%': [{ var: 'i' }, 5] }, 0] },
        'buzz',

        { var: 'i' },
    ],
});

// $ExpectType any
jsonLogic.apply({ '==': [1, 1] });
// $ExpectType any
jsonLogic.apply({ '==': [1, '1'] });
// $ExpectType any
jsonLogic.apply({ '==': [0, false] });

// $ExpectType any
jsonLogic.apply({ '===': [1, 1] });
// $ExpectType any
jsonLogic.apply({ '===': [1, '1'] });

// $ExpectType any
jsonLogic.apply({ '!=': [1, 2] });
// $ExpectType any
jsonLogic.apply({ '!=': [1, '1'] });

// $ExpectType any
jsonLogic.apply({ '!==': [1, 2] });
// $ExpectType any
jsonLogic.apply({ '!==': [1, '1'] });

// $ExpectType any
jsonLogic.apply({ '!': [true] });
// $ExpectType any
jsonLogic.apply({ '!': true });

// $ExpectType any
jsonLogic.apply({ '!!': [[]] });
// $ExpectType any
jsonLogic.apply({ '!!': ['0'] });

// $ExpectType any
jsonLogic.apply({ or: [true, false] });
// $ExpectType any
jsonLogic.apply({ or: [false, 0, 'a'] });

// $ExpectType any
jsonLogic.apply({ and: [true, true] });
// $ExpectType any
jsonLogic.apply({ and: [true, 'a', 3] });

// $ExpectType any
jsonLogic.apply({ '>': [2, 1] });
// $ExpectType any
jsonLogic.apply({ '>=': [1, 1] });
// $ExpectType any
jsonLogic.apply({ '<': [1, 2] });
// $ExpectType any
jsonLogic.apply({ '<=': [1, 1] });
// $ExpectType any
jsonLogic.apply({ '<': [1, 2, 3] });
// $ExpectType any
jsonLogic.apply({ '<=': [1, 2, 3] });
// $ExpectType any
jsonLogic.apply({ '<': [0, { var: 'temp' }, 100] }, { temp: 37 });

// $ExpectType any
jsonLogic.apply({ max: [1, 2, 3] });
// $ExpectType any
jsonLogic.apply({ min: [1, 2, 3] });

// $ExpectType any
jsonLogic.apply({ '+': [4, 2] });
// $ExpectType any
jsonLogic.apply({ '-': [4, 2] });
// $ExpectType any
jsonLogic.apply({ '*': [4, 2] });
// $ExpectType any
jsonLogic.apply({ '/': [4, 2] });
// $ExpectType any
jsonLogic.apply({ '+': [2, 2, 2, 2, 2] });
// $ExpectType any
jsonLogic.apply({ '*': [2, 2, 2, 2, 2] });
// $ExpectType any
jsonLogic.apply({ '-': 2 });
// $ExpectType any
jsonLogic.apply({ '+': '3.14' });
// $ExpectType any
jsonLogic.apply({ '%': [101, 2] });

// $ExpectType any
jsonLogic.apply({ map: [{ var: 'integers' }, { '*': [{ var: '' }, 2] }] }, { integers: [1, 2, 3, 4, 5] });
// $ExpectType any
jsonLogic.apply({ filter: [{ var: 'integers' }, { '%': [{ var: '' }, 2] }] }, { integers: [1, 2, 3, 4, 5] });
// $ExpectType any
jsonLogic.apply(
    { reduce: [{ var: 'integers' }, { '+': [{ var: 'current' }, { var: 'accumulator' }] }, 0] },
    { integers: [1, 2, 3, 4, 5] },
);

// $ExpectType any
jsonLogic.apply({ all: [[1, 2, 3], { '>': [{ var: '' }, 0] }] });
// $ExpectType any
jsonLogic.apply({ some: [[-1, 0, 1], { '>': [{ var: '' }, 0] }] });
// $ExpectType any
jsonLogic.apply({ none: [[-3, -2, -1], { '>': [{ var: '' }, 0] }] });
// $ExpectType any
jsonLogic.apply(
    { some: [{ var: 'pies' }, { '==': [{ var: 'filling' }, 'apple'] }] },
    {
        pies: [
            { filling: 'pumpkin', temp: 110 },
            { filling: 'rhubarb', temp: 210 },
            { filling: 'apple', temp: 310 },
        ],
    },
);

// $ExpectType any
jsonLogic.apply({
    merge: [
        [1, 2],
        [3, 4],
    ],
});
// $ExpectType any
jsonLogic.apply({ merge: [1, 2, [3, 4]] });
// $ExpectType any
jsonLogic.apply(
    { missing: { merge: ['vin', { if: [{ var: 'financing' }, ['apr', 'term'], []] }] } },
    { financing: true },
);
// $ExpectType any
jsonLogic.apply(
    { missing: { merge: ['vin', { if: [{ var: 'financing' }, ['apr', 'term'], []] }] } },
    { financing: false },
);
// $ExpectType any
jsonLogic.apply({ in: ['Ringo', ['John', 'Paul', 'George', 'Ringo']] });

// $ExpectType any
jsonLogic.apply({ in: ['Spring', 'Springfield'] });
// $ExpectType any
jsonLogic.apply({ cat: ['I love', ' pie'] });
// $ExpectType any
jsonLogic.apply({ cat: ['I love ', { var: 'filling' }, ' pie'] }, { filling: 'apple', temp: 110 });
// $ExpectType any
jsonLogic.apply({ substr: ['jsonlogic', 4] });
// $ExpectType any
jsonLogic.apply({ substr: ['jsonlogic', 1, 3] });

// $ExpectType any
jsonLogic.apply({ log: 'apple' });

// $ExpectType void
jsonLogic.add_operation('op', () => true);
// @ts-expect-error
jsonLogic.add_operation(1, (x: number, y: number) => x + y);
// @ts-expect-error
jsonLogic.add_operation();

// $ExpectType void
jsonLogic.rm_operation('op');
// @ts-expect-error
jsonLogic.rm_operation(1);
// @ts-expect-error
jsonLogic.rm_operation();

// Undocumented functions

// $ExpectType boolean
jsonLogic.is_logic({ logic: ['test', 'test'] });
// $ExpectType boolean
jsonLogic.truthy({ logic: ['test', 'test'] });
// $ExpectType string
jsonLogic.get_operator({ logic: ['test', 'test'] });
// $ExpectType any
jsonLogic.get_values({ logic: ['test', 'test'] });
// $ExpectType any[]
jsonLogic.uses_data({ logic: ['test', 'test'] });
// $ExpectType boolean
jsonLogic.rule_like('test', 'test');

// Test the extensibility of the RulesLogic type

type StartsWithAndEndsWith =
    | { startsWith: [JsonLogicWithAdditionalOperations, JsonLogicWithAdditionalOperations] }
    | { endsWith: [JsonLogicWithAdditionalOperations, JsonLogicWithAdditionalOperations] };
type JsonLogicWithAdditionalOperations = jsonLogic.RulesLogic<StartsWithAndEndsWith>;
const jsonExtendedLogic: JsonLogicWithAdditionalOperations = {
    and: [{ startsWith: ['Springfield', 'Spring'] }, { endsWith: ['Springfield', 'field'] }],
};
// $ExpectType any
jsonLogic.apply(jsonExtendedLogic);
// @ts-expect-error
const invalidExtendedLogic: JsonLogicWithAdditionalOperations = { invalidOperator: ['Springfield', 'Spring'] };

// Test prevention of overriding reserved operations

interface OverrideReservedOp {
    and: [string, string];
}
// @ts-expect-error
type JsonLogicOverridden = jsonLogic.RulesLogic<OverrideReservedOp>;
