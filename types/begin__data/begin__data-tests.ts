import data, { BeginDataType, ReadonlyBeginDataType } from '@begin/data';

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
    const res = await data.get({ table });
    // $ExpectType DataGetEntireTableResult
    res;
    // $ExpectType string
    res[0].table;
    res[0].table = 'another-table';
    // $ExpectType string
    res[0].key;
    // $ExpectType TestData
    res[0] as TestData;
    const cursor = res.cursor;
    if (typeof cursor === 'string') {
        // $ExpectType string
        cursor;
    } else {
        // $ExpectType undefined
        cursor;
    }
})();

// Get without key with callback.
data.get({ table }, (err, res) => {
    // $ExpectType Error | null | undefined
    err;
    // $ExpectType DataGetEntireTableResult
    res;
    // $ExpectType string | undefined
    res.cursor;
});

// Get with limit.
(async () => {
    const res = await data.get({ table, limit: 10 });
    // $ExpectType DataGetEntireTableResult
    res;
})();

// Get with key.
(async () => {
    const res = await data.get({ table, key });
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
data.get({ table, key }, (err, res) => {
    // $ExpectType Error | null | undefined
    err;
    // $ExpectType DataGetSingleResult
    res;
    // $ExpectType TestData
    res as TestData;
});

// Get with list.
(async () => {
    const res = await data.get([
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
    // @ts-expect-error
    res.cursor;
})();

// Get with key with callback.
data.get(
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
        // @ts-expect-error
        res.cursor;
    },
);

// Error: Get with unnecessary property.
// @ts-expect-error
data.get({ table, key, propUnknown: 'value' });

// Set without key.
(async () => {
    const res = await data.set({
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
data.set(
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
data.set({
    table,
    key,
    ...obj,
});

// Set with TTL.
data.set({
    table,
    key,
    // 1 week TTL
    // Hover ttl: to check documention is shown.
    ttl: Date.now() / 1000 + 60 * 60 * 24 * 7,
    ...obj,
});

// Set with ttl prop with invalid TTL value.
data.set({
    table,
    ttl: 'invalid',
    ...obj,
});

// Set with omitting some props.
data.set({
    table,
    ...obj,
    ...{
        propString: undefined,
        propUnknown: undefined,
    },
});

// Set with list.
(async () => {
    const res = await data.set([
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
data.set(
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
// @ts-expect-error
data.set({});
// @ts-expect-error
data.set([{}]);

// Destroy.
(async () => {
    // $ExpectType void
    await data.destroy({ table, key });
    // Error: Destroy does not return old objects.
    // @ts-expect-error
    res as TestData;
})();

// Destroy with callback.
data.destroy({ table, key }, err => {
    // $ExpectType Error | null | undefined
    err;
});

// Destroy with list.
(async () => {
    // $ExpectType void
    await data.destroy([
        { table, key },
        { table, key },
    ]);
    // Error: Destroy does not return old objects.
    // @ts-expect-error
    res.length;
    // @ts-expect-error
    res[0] as TestData;
})();

// Destroy with list and callback.
data.destroy(
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
// @ts-expect-error
data.destroy({ table, key, propsUnknown: 'value' });

// Error: Destroy without key.
// @ts-expect-error
data.destroy({ table });

// Count.
(async () => {
    const res = await data.count({ table });
    // $ExpectType number
    res;
})();

// Count with callback.
data.count({ table }, (err, res) => {
    // $ExpectType Error | null | undefined
    err;
    // $ExpectType number
    res;
});

// Error: Count with unnecessary props.
// @ts-expect-error
data.count({ table, propsUnknown: 'value' });
// @ts-expect-error
data.count({ table, key });

// Increment.
(async () => {
    const res = await data.incr({ table, key, prop: 'propNumber' });
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

data.incr({ table, key, prop: 'propNumber' }, (err, res) => {
    // $ExpectType Error | null | undefined
    err;
    // $ExpectType DataIncrementResult
    res;
});

// Error: Increment with list.
// @ts-expect-error
data.incr([{ table, key, prop: 'propNumber' }]);

// Error: Increment without prop.
// @ts-expect-error
data.incr({ table, key });

// Decrement.
(async () => {
    const res = await data.decr({ table, key, prop: 'propNumber' });
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

data.decr({ table, key, prop: 'propNumber' }, (err, res) => {
    // $ExpectType Error | null | undefined
    err;
    // $ExpectType DataDecrementResult
    res;
    // $ExpectType TestData
    res as TestData;
});

// Error: Decrement with list.
// @ts-expect-error
data.decr([{ table, key, prop: 'propNumber' }]);

// Error: Decrement without prop.
// @ts-expect-error
data.decr({ table, key });

// Page.
(async () => {
    const list: TestData[] = [];
    for await (const buf of data.page({ table })) {
        // $ExpectType DataPageResult
        buf;
        list.concat(buf);
        // Error: There is no cursor.
        // @ts-expect-error
        buf.cursor;
    }
})();

// Error: Page with callback.
// @ts-expect-error
data.page({ table }, () => 0 as any);

// Error: Page with unnecessary props.
// @ts-expect-error
data.page({ table, key });

// Error: Page with list.
// @ts-expect-error
data.page([{ table, key }]);
