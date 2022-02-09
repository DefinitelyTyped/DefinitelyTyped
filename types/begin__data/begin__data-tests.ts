import { BeginDataType, ReadonlyBeginDataType, get, set, destroy, count, incr, decr, page } from '@begin/data';

interface TestData {
    key: string;
    name?: string;
    age?: number;
}

const table = 'test-table';
const key = 'test-key';

const obj: BeginDataType = {
    propString: 'data',
    propNumber: 1.23,
    propBoolean: false,
    propArrayEmpty: [],
    propObjectEmpty: {},
    propArray: ['value', 0, true],
    propObject: {
        propNestedObject: {
            propNestedArray: [{}, 1],
        },
        propNestedString: 'value',
    },
};
// $ExpectType ReadonlyBeginDataType
obj as ReadonlyBeginDataType;

// Get without key.
(async () => {
    const res = await get({ table });
    // $ExpectType DataGetEntireTableResult
    res;
    // $ExpectType string
    res[0].table;
    res[0].table = 'another-table';
    // $ExpectType string
    res[0].key;
    // $ExpectType TestData
    res[0] as TestData;
    // $ExpectType string | undefined
    res.cursor;
})();

// Get without key with callback.
get({ table }, (err, res) => {
    // $ExpectType Error | null | undefined
    err;
    // $ExpectType DataGetEntireTableResult
    res;
    // $ExpectType string | undefined
    res.cursor;
});

// Get with limit.
(async () => {
    const res = await get({ table, limit: 10 });
    // $ExpectType DataGetEntireTableResult
    res;
})();

// Get with key.
(async () => {
    const res = await get({ table, key });
    // $ExpectType DataGetSingleResult
    res;
    if (res) {
        // $ExpectType string
        res.table;
        res.table = 'another-table';
        // $ExpectType string
        res.key;
        // $ExpectType TestData
        res as TestData;
    } else {
        // $ExpectType null | undefined
        res;
    }
})();

// Get with key with callback.
get({ table, key }, (err, res) => {
    // $ExpectType Error | null | undefined
    err;
    // $ExpectType DataGetSingleResult
    res;
    // $ExpectType TestData
    res as TestData;
});

// Get with list.
(async () => {
    const res = await get([
        { table, key },
        { table, key },
    ]);
    // $ExpectType DataGetMultipleResult
    res;
    // $ExpectType string
    res[0].table;
    res[0].table = 'another-table';
    // $ExpectType string
    res[0].key;
    // $ExpectType TestData
    res[0] as TestData;
    // Error: There is no cursor.
    // $ExpectError
    res.cursor;
})();

// Get with key with callback.
get(
    [
        { table, key },
        { table, key },
    ],
    (err, res) => {
        // $ExpectType Error | null | undefined
        err;
        // $ExpectType DataGetMultipleResult
        res;
        // Error: There is no cursor.
        // $ExpectError
        res.cursor;
    },
);

// Error: Get with unnecessary property.
// $ExpectError
get({ table, key, propUnknown: 'value' });

// Set without key.
(async () => {
    const res = await set({
        table,
        ...obj,
    });
    // $ExpectType DataSetSingleResult
    res;
    // $ExpectType string
    res.table;
    res.table = 'another-table';
    // $ExpectType string
    res.key;
    // $ExpectType TestData
    res as TestData;
})();

// Set with callback.
set(
    {
        table,
        ...obj,
    },
    (err, res) => {
        // $ExpectType Error | null | undefined
        err;
        // $ExpectType DataSetSingleResult
        res;
        // $ExpectType TestData
        res as TestData;
    },
);

// Set with key.
set({
    table,
    key,
    ...obj,
});

// Set with TTL.
set({
    table,
    key,
    // 1 week TTL
    // Hover ttl: to check documention is shown.
    ttl: Date.now() / 1000 + 60 * 60 * 24 * 7,
    ...obj,
});

// Set with ttl prop with invalid TTL value.
set({
    table,
    ttl: 'invalid',
    ...obj,
});

// Set with omitting some props.
set({
    table,
    ...obj,
    ...{
        propString: undefined,
        propUnknown: undefined,
    },
});

// Set with list.
(async () => {
    const res = await set([
        { table, ...obj },
        { table, ...obj },
    ]);
    // $ExpectType DataSetMultipleResult
    res;
    // $ExpectType string
    res[0].table;
    res[0].table = 'another-table';
    // $ExpectType string
    res[0].key;
    // $ExpectType TestData
    res[0] as TestData;
})();

// Set with list and callback.
set(
    [
        { table, ...obj },
        { table, ...obj },
    ],
    (err, res) => {
        // $ExpectType Error | null | undefined
        err;
        // $ExpectType DataSetMultipleResult
        res;
        // $ExpectType TestData
        res[0] as TestData;
    },
);

// Error: Set without table.
// $ExpectError
set({});
// $ExpectError
set([{}]);

// Destroy.
(async () => {
    // $ExpectType void
    await destroy({ table, key });
})();

// Destroy with callback.
destroy({ table, key }, err => {
    // $ExpectType Error | null | undefined
    err;
});

// Destroy with list.
(async () => {
    // $ExpectType void
    await destroy([
        { table, key },
        { table, key },
    ]);
})();

// Destroy with list and callback.
destroy(
    [
        { table, key },
        { table, key },
    ],
    err => {
        // $ExpectType Error | null | undefined
        err;
    },
);

// Error: Destroy with unnecessary props.
// $ExpectError
destroy({ table, key, propsUnknown: 'value' });

// Error: Destroy without key.
// $ExpectError
destroy({ table });

// Count.
(async () => {
    const res = await count({ table });
    // $ExpectType number
    res;
})();

// Count with callback.
count({ table }, (err, res) => {
    // $ExpectType Error | null | undefined
    err;
    // $ExpectType number
    res;
});

// Error: Count with unnecessary props.
// $ExpectError
count({ table, propsUnknown: 'value' });
// $ExpectError
count({ table, key });

// Increment.
(async () => {
    const res = await incr({ table, key, prop: 'propNumber' });
    // $ExpectType DataIncrementResult
    res;
    // $ExpectType string
    res.table;
    res.table = 'another-table';
    // $ExpectType string
    res.key;
    // $ExpectType TestData
    res as TestData;
})();

incr({ table, key, prop: 'propNumber' }, (err, res) => {
    // $ExpectType Error | null | undefined
    err;
    // $ExpectType DataIncrementResult
    res;
});

// Error: Increment with list.
// $ExpectError
incr([{ table, key, prop: 'propNumber' }]);

// Error: Increment without prop.
// $ExpectError
incr({ table, key });

// Decrement.
(async () => {
    const res = await decr({ table, key, prop: 'propNumber' });
    // $ExpectType DataDecrementResult
    res;
    // $ExpectType string
    res.table;
    res.table = 'another-table';
    // $ExpectType string
    res.key;
    // $ExpectType TestData
    res as TestData;
})();

decr({ table, key, prop: 'propNumber' }, (err, res) => {
    // $ExpectType Error | null | undefined
    err;
    // $ExpectType DataDecrementResult
    res;
    // $ExpectType TestData
    res as TestData;
});

// Error: Decrement with list.
// $ExpectError
decr([{ table, key, prop: 'propNumber' }]);

// Error: Decrement without prop.
// $ExpectError
decr({ table, key });

// Page.
(async () => {
    const list: TestData[] = [];
    for await (const buf of page({ table })) {
        // $ExpectType DataPageResult
        buf;
        list.concat(buf);
        // Error: There is no cursor.
        // $ExpectError
        buf.cursor;
    }
})();

// Error: Page with callback.
// $ExpectError
page({ table }, () => 0 as any);

// Error: Page with unnecessary props.
// $ExpectError
page({ table, key });

// Error: Page with list.
// $ExpectError
page([{ table, key }]);
