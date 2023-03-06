import * as TableStore from 'tablestore';

// initialize
const client = new TableStore.Client({
    accessKeyId: '<your access key id>',
    accessKeySecret: '<your access key secret>',
    endpoint: '<your endpoint>',
    instancename: '<your instance name>',
    maxRetries: 20,
});

// integer type
const numberA = TableStore.Long.fromNumber(1000);
const numberB = TableStore.Long.fromString('2000');

const numA = numberA.toNumber();
const strA = numberA.toString();

const numB = numberB.toNumber();
const strB = numberB.toString();

// create table
const createTable1 = () => {
    const params: TableStore.CreateTableParams = {
        tableMeta: {
            tableName: 'sampleTable',
            primaryKey: [
                {
                    name: 'gid',
                    type: 'INTEGER',
                },
                {
                    name: 'uid',
                    type: 'INTEGER',
                },
            ],
        },
        reservedThroughput: {
            capacityUnit: {
                read: 0,
                write: 0,
            },
        },
        tableOptions: {
            timeToLive: -1,
            maxVersions: 1,
        },
    };

    client.createTable(params, (err, data) => {
        if (err) {
            console.log('error:', err);
            return;
        }
        console.log('success:', data);
    });
};

const createTable2 = () => {
    const params: TableStore.CreateTableParams = {
        tableMeta: {
            tableName: 'sdkGlobalTest',
            primaryKey: [
                {
                    name: 'pk1',
                    type: TableStore.PrimaryKeyType.INTEGER,
                },
                {
                    name: 'pk2',
                    type: TableStore.PrimaryKeyType.INTEGER,
                },
            ],
            definedColumn: [
                {
                    name: 'col1',
                    type: TableStore.DefinedColumnType.DCT_INTEGER,
                },
                {
                    name: 'col2',
                    type: TableStore.DefinedColumnType.DCT_INTEGER,
                },
            ],
        },
        reservedThroughput: {
            capacityUnit: {
                read: 0,
                write: 0,
            },
        },
        tableOptions: {
            timeToLive: -1,
            maxVersions: 1,
        },
        streamSpecification: {
            enableStream: false,
        },
        indexMetas: [
            {
                name: 'sdkGlobalIndex1',
                primaryKey: ['pk2'],
                definedColumn: ['col1', 'col2'],
            },
            {
                name: 'sdkGlobalIndex2',
                primaryKey: ['col1'],
                definedColumn: ['col2'],
            },
        ],
    };

    client.createTable(params, (err, data) => {
        if (err) {
            console.log('error:', err);
            return;
        }
        console.log('success:', data);
    });
};

const createTable3 = () => {
    const params = {
        tableMeta: {
            tableName: 'sdkLocalTest',
            primaryKey: [
                {
                    name: 'pk1',
                    type: TableStore.PrimaryKeyType.INTEGER,
                },
                {
                    name: 'pk2',
                    type: TableStore.PrimaryKeyType.INTEGER,
                },
            ],
            definedColumn: [
                {
                    name: 'col1',
                    type: TableStore.DefinedColumnType.DCT_INTEGER,
                },
                {
                    name: 'col2',
                    type: TableStore.DefinedColumnType.DCT_INTEGER,
                },
            ],
        },
        reservedThroughput: {
            capacityUnit: {
                read: 0,
                write: 0,
            },
        },
        tableOptions: {
            timeToLive: -1,
            maxVersions: 1,
        },
        streamSpecification: {
            enableStream: false,
        },
        indexMetas: [
            {
                name: 'sdklocalIndex1',
                primaryKey: ['pk1', 'col1'],
                definedColumn: ['col2'],
                indexUpdateMode: TableStore.IndexUpdateMode.IUM_SYNC_INDEX,
                indexType: TableStore.IndexType.IT_LOCAL_INDEX,
            },

            {
                name: 'sdklocalIndex2',
                primaryKey: ['pk1', 'col2'],
                definedColumn: ['col1'],
                indexUpdateMode: TableStore.IndexUpdateMode.IUM_SYNC_INDEX,
                indexType: TableStore.IndexType.IT_LOCAL_INDEX,
            },
        ],
    };

    client.createTable(params, (err, data) => {
        if (err) {
            console.log('error:', err);
            return;
        }
        console.log('success:', data);
    });
};

// update table
const updateTable = () => {
    const params = {
        tableName: 'sampleTable',
        tableOptions: {
            maxVersions: 5,
        },
    };

    client.updateTable(params, (err, data) => {
        if (err) {
            console.log('error:', err);
            return;
        }
        console.log('success:', data);
    });
};

// list table
client.listTable({}, (err, data) => {
    if (err) {
        console.log('error:', err);
        return;
    }
    console.log('success:', data);
});

// describe table
client.describeTable({ tableName: 'sampleTable' }, (err, data) => {
    if (err) {
        console.log('error:', err);
        return;
    }
    console.log('success:', data);
});

// delete table
client.deleteTable({ tableName: 'sampleTable' }, (err, data) => {
    if (err) {
        console.log('error:', err);
        return;
    }
    console.log('success:', data);
});

// auto increment
function createTableWithAutoIncrementPk() {
    const tableName = 'autoIncTable';
    const pk1 = 'stringPK';
    const pk2 = 'autoIncPK';
    const createParams: TableStore.CreateTableParams = {
        tableMeta: {
            tableName,
            primaryKey: [
                {
                    name: pk1,
                    type: 'STRING',
                },
                {
                    name: pk2,
                    type: 'INTEGER',
                    option: 'AUTO_INCREMENT',
                },
            ],
        },
        reservedThroughput: {
            capacityUnit: {
                read: 0,
                write: 0,
            },
        },
        tableOptions: {
            timeToLive: -1,
            maxVersions: 1,
        },
    };

    client.createTable(createParams, (err, data) => {
        if (err) {
            console.log('error:', err);
            return;
        }
        console.log('create table success');
    });
}

function putRow() {
    const tableName = 'autoIncTable';

    const putParams: TableStore.PutRowParams = {
        tableName,
        condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
        primaryKey: [{ stringPK: 'pk1' }, { autoIncPK: TableStore.PK_AUTO_INCR }],
        attributeColumns: [{ col1: 'col1val' }],
        returnContent: { returnType: TableStore.ReturnType.Primarykey },
    };

    client.putRow(putParams, (err, data) => {
        if (err) {
            console.log('error:', err);
            return;
        }

        console.log('put row success,autoIncrement pk value:' + JSON.stringify(data.row?.primaryKey));
    });
}

// update table with condition
const updateTableWithCondition = () => {
    const Long = TableStore.Long;

    const condition = new TableStore.CompositeCondition(TableStore.LogicalOperator.AND);
    condition.addSubCondition(new TableStore.SingleColumnCondition('name', 'john', TableStore.ComparatorType.EQUAL));
    condition.addSubCondition(new TableStore.SingleColumnCondition('addr', 'china', TableStore.ComparatorType.EQUAL));

    const params: TableStore.UpdateRowParams = {
        tableName: 'sampleTable',
        primaryKey: [{ gid: Long.fromNumber(20013) }, { uid: Long.fromNumber(20013) }],
        updateOfAttributeColumns: [{ PUT: [{ col1: 'test6' }] }],
        condition: new TableStore.Condition(TableStore.RowExistenceExpectation.EXPECT_EXIST, condition),
    };

    client.updateRow(params, (err, data) => {
        if (err) {
            console.log('error:', err);
            return;
        }
        console.log('success:', data);
    });
};

// transaction
(async () => {
    const tableName = 'test';
    const primaryKey = [{ id: 'partitionKeyValue' }];
    try {
        const response = await client.startLocalTransaction({
            tableName,
            primaryKey: [
                {
                    id: 'partitionKeyValue',
                },
            ],
        });

        const transactionId = response.transactionId;

        await client.putRow({
            tableName,
            condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
            primaryKey,
            attributeColumns: [
                {
                    col: 'updated',
                },
            ],
            transactionId,
        });

        await client.commitTransaction({
            transactionId,
        });
    } catch (e) {
        console.error(e);
    }
})();

(async () => {
    const tableName = 'test';
    const primaryKey = [{ id: 'partitionKeyValue' }];
    try {
        const response = await client.startLocalTransaction({
            tableName,
            primaryKey: [
                {
                    id: 'partitionKeyValue',
                },
            ],
        });
        const transactionId = response.transactionId;

        await client.putRow({
            tableName,
            condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
            primaryKey,
            attributeColumns: [
                {
                    col: 'updated',
                },
            ],
            transactionId,
        });
        await client.abortTransaction({
            transactionId,
        });
    } catch (e) {
        console.error(e);
    }
})();

// attribute increment
const attributeIncrement = () => {
    const Long = TableStore.Long;
    const params: TableStore.UpdateRowParams = {
        tableName: '<Your-Table-Name>',
        condition: new TableStore.Condition(TableStore.RowExistenceExpectation.EXPECT_EXIST, null),
        primaryKey: [{ pk0: Long.fromNumber(1) }],
        updateOfAttributeColumns: [{ INCREMENT: [{ price: Long.fromNumber(10) }] }],
        returnContent: {
            returnColumns: ['price'],
            returnType: TableStore.ReturnType.AfterModify,
        },
    };

    client.updateRow(params, (err, data) => {
        if (err) {
            console.log('error:', err);
            return;
        }

        console.log('success:', JSON.stringify(data, null, 2));
    });
};

// filter
function getRowWithCondition() {
    const condition = new TableStore.SingleColumnCondition('col1', '表格存储', TableStore.ComparatorType.EQUAL, true);

    client.getRow(
        {
            tableName: 'A',
            primaryKey: [{ pk0: 'test' }],
            columnFilter: condition,
        },
        (err, data) => {
            if (err) {
                console.log('error:', err);
                return;
            }
            console.log('success:', data);
        },
    );
}

function getRowWithCompositeCondition() {
    const Long = TableStore.Long;
    const condition = new TableStore.CompositeCondition(TableStore.LogicalOperator.AND);
    condition.addSubCondition(
        new TableStore.SingleColumnCondition('col1', '表格存储', TableStore.ComparatorType.EQUAL),
    );
    condition.addSubCondition(
        new TableStore.SingleColumnCondition('col5', Long.fromNumber(123456789), TableStore.ComparatorType.EQUAL),
    );

    client.getRow(
        {
            tableName: 'A',
            primaryKey: [{ pk0: 'test' }],
            columnFilter: condition,
        },
        (err, data) => {
            if (err) {
                console.log('error:', err);
                return;
            }
            console.log('success:', data);
        },
    );
}

// single row operations
const putARow = () => {
    const Long = TableStore.Long;
    const currentTimeStamp = Date.now();
    const params: TableStore.PutRowParams = {
        tableName: 'sampleTable',
        condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
        primaryKey: [{ gid: Long.fromNumber(20013) }, { uid: Long.fromNumber(20013) }],
        attributeColumns: [
            { col1: '表格存储' },
            { col2: '2', timestamp: currentTimeStamp },
            { col3: 3.1 },
            { col4: -0.32 },
            { col5: Long.fromNumber(123456789) },
        ],
        returnContent: { returnType: TableStore.ReturnType.Primarykey },
    };

    client.putRow(params, (err, data) => {
        if (err) {
            console.log('error:', err);
            return;
        }

        console.log('success:', data);
    });
};

const getARow = () => {
    const Long = TableStore.Long;
    const params: TableStore.GetRowParams = {
        tableName: 'sampleTable',
        primaryKey: [{ gid: Long.fromNumber(20004) }, { uid: Long.fromNumber(20004) }],
        maxVersions: 2,
    };
    const condition = new TableStore.CompositeCondition(TableStore.LogicalOperator.AND);
    condition.addSubCondition(new TableStore.SingleColumnCondition('name', 'john', TableStore.ComparatorType.EQUAL));
    condition.addSubCondition(new TableStore.SingleColumnCondition('addr', 'china', TableStore.ComparatorType.EQUAL));

    params.columnFilter = condition;

    client.getRow(params, (err, data) => {
        if (err) {
            console.log('error:', err);
            return;
        }
        console.log('success:', data);
    });
};

const updateARow = () => {
    const Long = TableStore.Long;
    const params: TableStore.UpdateRowParams = {
        tableName: 'sampleTable',
        condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
        primaryKey: [{ gid: Long.fromNumber(9) }, { uid: Long.fromNumber(90) }],
        updateOfAttributeColumns: [
            { PUT: [{ col4: Long.fromNumber(4) }, { col5: '5' }, { col6: Long.fromNumber(6) }] },
            { DELETE: [{ col1: Long.fromNumber(1496826473186) }] },
            { DELETE_ALL: ['col2'] },
        ],
    };

    client.updateRow(params, (err, data) => {
        if (err) {
            console.log('error:', err);
            return;
        }

        console.log('success:', data);
    });
};

const deleteARow = () => {
    const Long = TableStore.Long;
    const params: TableStore.DeleteRowParams = {
        tableName: 'sampleTable',
        condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
        primaryKey: [{ gid: Long.fromNumber(8) }, { uid: Long.fromNumber(80) }],
    };

    client.deleteRow(params, (err, data) => {
        if (err) {
            console.log('error:', err);
            return;
        }

        console.log('success:', data);
    });
};

// batch row operations
const wraiteMutipleRows = () => {
    const Long = TableStore.Long;
    const params: TableStore.BatchWriteRowParams = {
        tables: [
            {
                tableName: 'sampleTable',
                rows: [
                    {
                        type: 'UPDATE',
                        condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
                        primaryKey: [{ gid: Long.fromNumber(20010) }, { uid: Long.fromNumber(20010) }],
                        attributeColumns: [{ PUT: [{ col1: 'test3' }, { col2: 'test4' }] }],
                        returnContent: { returnType: 1 },
                    },
                    {
                        type: 'PUT',
                        condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
                        primaryKey: [{ gid: Long.fromNumber(20020) }, { uid: Long.fromNumber(20020) }],
                        attributeColumns: [{ col1: 'test1' }, { col2: 'test2' }],
                        returnContent: { returnType: TableStore.ReturnType.Primarykey },
                    },
                    {
                        type: 'DELETE',
                        condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
                        primaryKey: [{ gid: Long.fromNumber(20018) }, { uid: Long.fromNumber(20018) }],
                    },
                ],
            },
        ],
    };

    client.batchWriteRow(params, (err, data) => {
        if (err) {
            console.log('error:', err);
            return;
        }

        console.log('success:', data);
    });
};

const getMultipleRows = () => {
    const Long = TableStore.Long;
    const params: TableStore.BatchGetRowParams = {
        tables: [
            {
                tableName: 'sampleTable',
                primaryKey: [
                    [{ gid: Long.fromNumber(20013) }, { uid: Long.fromNumber(20013) }],
                    [{ gid: Long.fromNumber(20015) }, { uid: Long.fromNumber(20015) }],
                ],
                startColumn: 'col2',
                endColumn: 'col4',
            },
            {
                tableName: 'notExistTable',
                primaryKey: [[{ gid: Long.fromNumber(10001) }, { uid: Long.fromNumber(10001) }]],
            },
        ],
    };

    const maxRetryTimes = 3;
    let retryCount = 0;

    function batchGetRow(params: TableStore.BatchGetRowParams) {
        client.batchGetRow(params, (err, data) => {
            if (err) {
                console.log('error:', err);
                return;
            }

            let isAllSuccess = true;
            const retryRequest: TableStore.BatchGetRowParams = { tables: [] };
            for (const table of data.tables) {
                const faildRequest: TableStore.RowParamsInBatchGet = {
                    tableName: table[0].tableName,
                    primaryKey: [],
                };

                for (const row of table) {
                    if (!row.isOk && null != row.primaryKey) {
                        isAllSuccess = false;
                        const pks = [];
                        const pko = row.primaryKey;
                        for (const k of pko) {
                            const { name, value } = k;
                            const kp: { [key: string]: TableStore.CellValue } = {};
                            kp[name] = value;
                            pks.push(kp);
                        }
                        faildRequest.primaryKey.push(pks);
                    } else {
                        // get success data
                    }
                }

                if (faildRequest.primaryKey.length > 0) {
                    retryRequest.tables.push(faildRequest);
                }
            }

            if (!isAllSuccess && retryCount++ < maxRetryTimes) {
                batchGetRow(retryRequest);
            }

            console.log('success:', data);
        });
    }

    batchGetRow(params);
};

const getRange = () => {
    const params: TableStore.GetRangeParams = {
        tableName: 'sampleTable',
        direction: TableStore.Direction.FORWARD,
        inclusiveStartPrimaryKey: [{ gid: TableStore.INF_MIN }, { uid: TableStore.INF_MIN }],
        exclusiveEndPrimaryKey: [{ gid: TableStore.INF_MAX }, { uid: TableStore.INF_MAX }],
        limit: 50,
    };

    client.getRange(params, (err, data) => {
        if (err) {
            console.log('error:', err);
            return;
        }

        if (data.nextStartPrimaryKey) {
        }

        console.log('success:', data);
    });
};

TableStore.events.on('a', () => {});

// index and search
const TABLE_NAME = 'table_name';
const INDEX_NAME = 'index_name';
() => {
    client.search(
        {
            tableName: TABLE_NAME,
            indexName: INDEX_NAME,
            searchQuery: {
                offset: 0,
                limit: 10,
                query: {
                    queryType: TableStore.QueryType.TERM_QUERY,
                    query: {
                        fieldName: 'Col_Keyword',
                        term: 'hangzhou',
                    },
                },
                getTotalCount: true,
            },
            columnToGet: {
                returnType: TableStore.ColumnReturnType.RETURN_ALL,
            },
        },
        (err, data) => {
            if (err) {
                console.log('error:', err);
                return;
            }
            console.log('success:', JSON.stringify(data, null, 2));
        },
    );
};

() => {
    client.search(
        {
            tableName: TABLE_NAME,
            indexName: INDEX_NAME,
            searchQuery: {
                offset: 0,
                limit: 10,
                query: {
                    queryType: TableStore.QueryType.MATCH_ALL_QUERY,
                },
                getTotalCount: true,
            },
            columnToGet: {
                returnType: TableStore.ColumnReturnType.RETURN_SPECIFIED,
                returnNames: ['Col_1', 'Col_2', 'Col_3'],
            },
        },
        (err, data) => {
            if (err) {
                console.log('error:', err);
                return;
            }
            console.log('success:', JSON.stringify(data, null, 2));
        },
    );
};

() => {
    client.search(
        {
            tableName: TABLE_NAME,
            indexName: INDEX_NAME,
            searchQuery: {
                offset: 0,
                limit: 10,
                query: {
                    queryType: TableStore.QueryType.PREFIX_QUERY,
                    query: {
                        fieldName: 'Col_Keyword',
                        prefix: 'hang',
                    },
                },
                getTotalCount: true,
            },
            columnToGet: {
                returnType: TableStore.ColumnReturnType.RETURN_ALL,
            },
        },
        (err, data) => {
            if (err) {
                console.log('error:', err);
                return;
            }
            console.log('success:', JSON.stringify(data, null, 2));
        },
    );
};

() => {
    client.search(
        {
            tableName: TABLE_NAME,
            indexName: INDEX_NAME,
            searchQuery: {
                offset: 0,
                limit: 10,
                query: {
                    queryType: TableStore.QueryType.RANGE_QUERY,
                    query: {
                        fieldName: 'Col_Long',
                        rangeFrom: 1,
                        includeLower: true,
                        rangeTo: 10,
                        includeUpper: false,
                    },
                },
                getTotalCount: true,
            },
            columnToGet: {
                returnType: TableStore.ColumnReturnType.RETURN_ALL,
            },
        },
        (err, data) => {
            if (err) {
                console.log('error:', err);
                return;
            }
            console.log('success:', JSON.stringify(data, null, 2));
        },
    );
};

() => {
    client.search(
        {
            tableName: TABLE_NAME,
            indexName: INDEX_NAME,
            searchQuery: {
                offset: 0,
                limit: 10,
                query: {
                    queryType: TableStore.QueryType.WILDCARD_QUERY,
                    query: {
                        fieldName: 'Col_Keyword',
                        value: 'table*e',
                    },
                },
                getTotalCount: true,
            },
            columnToGet: {
                returnType: TableStore.ColumnReturnType.RETURN_ALL,
            },
        },
        (err, data) => {
            if (err) {
                console.log('error:', err);
                return;
            }
            console.log('success:', JSON.stringify(data, null, 2));
        },
    );
};

() => {
    client.search(
        {
            tableName: TABLE_NAME,
            indexName: INDEX_NAME,
            searchQuery: {
                offset: 0,
                limit: 10,
                query: {
                    queryType: TableStore.QueryType.GEO_DISTANCE_QUERY,
                    query: {
                        fieldName: 'Col_GeoPoint',
                        centerPoint: '1,1',
                        distance: 10000,
                    },
                },
                getTotalCount: true,
            },
            columnToGet: {
                returnType: TableStore.ColumnReturnType.RETURN_ALL,
            },
        },
        (err, data) => {
            if (err) {
                console.log('error:', err);
                return;
            }
            console.log('success:', JSON.stringify(data, null, 2));
        },
    );
};

() => {
    client.search(
        {
            tableName: TABLE_NAME,
            indexName: INDEX_NAME,
            searchQuery: {
                offset: 0,
                limit: 10,
                query: {
                    queryType: TableStore.QueryType.TERMS_QUERY,
                    query: {
                        fieldName: 'Col_Keyword',
                        terms: ['hangzhou', 'shanghai'],
                    },
                },
                getTotalCount: true,
            },
            columnToGet: {
                returnType: TableStore.ColumnReturnType.RETURN_ALL,
            },
        },
        (err, data) => {
            if (err) {
                console.log('error:', err);
                return;
            }
            console.log('success:', JSON.stringify(data, null, 2));
        },
    );
};

() => {
    client.search(
        {
            tableName: TABLE_NAME,
            indexName: INDEX_NAME,
            searchQuery: {
                offset: 0,
                limit: 10,
                query: {
                    queryType: TableStore.QueryType.MATCH_QUERY,
                    query: {
                        fieldName: 'Col_Keyword',
                        text: 'hangzhou',
                    },
                },
                getTotalCount: true,
            },
            columnToGet: {
                returnType: TableStore.ColumnReturnType.RETURN_ALL,
            },
        },
        (err, data) => {
            if (err) {
                console.log('error:', err);
                return;
            }
            console.log('success:', JSON.stringify(data, null, 2));
        },
    );
};

() => {
    client.search(
        {
            tableName: TABLE_NAME,
            indexName: INDEX_NAME,
            searchQuery: {
                offset: 0,
                limit: 10,
                query: {
                    queryType: TableStore.QueryType.NESTED_QUERY,
                    query: {
                        path: 'Col_Nested',
                        query: {
                            queryType: TableStore.QueryType.TERM_QUERY,
                            query: {
                                fieldName: 'Col_Nested.Sub_Col_Keyword',
                                term: '开心',
                            },
                        },
                    },
                },
                getTotalCount: true,
            },
            columnToGet: {
                returnType: TableStore.ColumnReturnType.RETURN_ALL,
            },
        },
        (err, data) => {
            if (err) {
                console.log('error:', err);
                return;
            }
            console.log('success:', JSON.stringify(data, null, 2));
        },
    );
};

() => {
    client.search(
        {
            tableName: 'sampleTable',
            indexName: 'sampleSearchIndex',
            searchQuery: {
                offset: 0,
                limit: 10,
                getTotalCount: false,
                query: {
                    queryType: TableStore.QueryType.BOOL_QUERY,
                    query: {
                        shouldQueries: [
                            {
                                queryType: TableStore.QueryType.BOOL_QUERY,
                                query: {
                                    shouldQueries: [
                                        {
                                            queryType: TableStore.QueryType.RANGE_QUERY,
                                            query: {
                                                fieldName: 'col2',
                                                rangeTo: 4,
                                            },
                                        },
                                        {
                                            query: {
                                                fieldName: 'col3',
                                                rangeTo: 5,
                                            },
                                        },
                                    ],
                                    minimumShouldMatch: 1,
                                },
                            },
                            {
                                queryType: TableStore.QueryType.BOOL_QUERY,
                                query: {
                                    mustQueries: [
                                        {
                                            queryType: TableStore.QueryType.TERM_QUERY,
                                            query: {
                                                fieldName: 'col2',
                                                term: 4,
                                            },
                                        },
                                        {
                                            queryType: TableStore.QueryType.BOOL_QUERY,
                                            query: {
                                                shouldQueries: [
                                                    {
                                                        queryType: TableStore.QueryType.TERM_QUERY,
                                                        query: {
                                                            fieldName: 'col3',
                                                            term: 5,
                                                        },
                                                    },
                                                    {
                                                        query: {
                                                            fieldName: 'col3',
                                                            term: 6,
                                                        },
                                                    },
                                                ],
                                                minimumShouldMatch: 1,
                                            },
                                        },
                                    ],
                                },
                            },
                        ],
                        minimumShouldMatch: 1,
                    },
                },
            },
            columnToGet: {
                returnType: TableStore.ColumnReturnType.RETURN_SPECIFIED,
                returnNames: ['col2', 'col3', 'col4'],
            },
        },
        (err, data) => {
            if (err) {
                console.log('error:', err);
                return;
            }
            console.log('success:', JSON.stringify(data, null, 2));
        },
    );
};

() => {
    client.search(
        {
            tableName: TABLE_NAME,
            indexName: INDEX_NAME,
            searchQuery: {
                offset: 0,
                limit: 10,
                query: {
                    queryType: TableStore.QueryType.MATCH_PHRASE_QUERY,
                    query: {
                        fieldName: 'Col_Text',
                        text: 'hangzhou shanghai',
                    },
                },
                getTotalCount: true,
            },
            columnToGet: {
                returnType: TableStore.ColumnReturnType.RETURN_ALL,
            },
        },
        (err, data) => {
            if (err) {
                console.log('error:', err);
                return;
            }
            console.log('success:', JSON.stringify(data, null, 2));
        },
    );
};

() => {
    const sorters: TableStore.Sorter[] = [
        {
            scoreSort: {
                order: TableStore.SortOrder.SORT_ORDER_ASC,
            },
        },
        {
            primaryKeySort: {
                order: TableStore.SortOrder.SORT_ORDER_DESC,
            },
        },
        {
            fieldSort: {
                fieldName: 'Col_Keyword',
                order: TableStore.SortOrder.SORT_ORDER_DESC,
            },
        },
        {
            fieldSort: {
                fieldName: 'Col_Keyword',
                order: TableStore.SortOrder.SORT_ORDER_DESC,
            },
        },
        {
            fieldSort: {
                fieldName: 'Col_Long',
                order: TableStore.SortOrder.SORT_ORDER_DESC,
            },
        },
        {
            geoDistanceSort: {
                fieldName: 'Col_Geo_Point',
                points: ['0,0'],
                order: TableStore.SortOrder.SORT_ORDER_ASC,
            },
        },
    ];
};

() => {
    client.search(
        {
            tableName: TABLE_NAME,
            indexName: INDEX_NAME,
            searchQuery: {
                offset: 90,
                limit: 10,
                query: {
                    queryType: TableStore.QueryType.MATCH_ALL_QUERY,
                },
                getTotalCount: true,
            },
            columnToGet: {
                returnType: TableStore.ColumnReturnType.RETURN_ALL,
            },
        },
        (err, data) => {
            if (err) {
                console.log('error:', err);
                return;
            }
            console.log('success:', JSON.stringify(data, null, 2));
        },
    );
};

() => {
    const params: TableStore.SearchParams = {
        tableName: TABLE_NAME,
        indexName: INDEX_NAME,
        searchQuery: {
            offset: 0,
            limit: 10,
            token: null,
            query: {
                queryType: TableStore.QueryType.MATCH_ALL_QUERY,
            },
            getTotalCount: true,
        },
        columnToGet: {
            returnType: TableStore.ColumnReturnType.RETURN_SPECIFIED,
            returnNames: ['pic_tag', 'pic_description', 'time_stemp', 'pos'],
        },
    };

    (async () => {
        try {
            let data = (await client.search(params)) as any;
            console.log('success:', JSON.stringify(data, null, 2));

            while (data.nextToken && data.nextToken.length) {
                const nextToken = data.nextToken.toString('base64');
                const token = Buffer.from(nextToken, 'base64');

                params.searchQuery.token = token;
                data = await client.search(params);
                console.log('token success:', JSON.stringify(data, null, 2));
            }
        } catch (error) {
            console.log(error);
        }
    })();

    client.search(params, (err, data: any) => {
        console.log('success:', JSON.stringify(data, null, 2));

        if (data.nextToken && data.nextToken.length) {
            const nextToken = data.nextToken.toString('base64');
            const token = Buffer.from(nextToken, 'base64');

            params.searchQuery.token = token;
            client.search(params, (err, data) => {
                console.log('token success:', JSON.stringify(data, null, 2));
            });
        }
    });
};

() => {
    client.createSearchIndex(
        {
            tableName: TABLE_NAME,
            indexName: INDEX_NAME,
            schema: {
                fieldSchemas: [
                    {
                        fieldName: 'Col_Keyword',
                        fieldType: TableStore.FieldType.KEYWORD,
                        index: true,
                        enableSortAndAgg: true,
                        store: false,
                        isAnArray: false,
                    },
                    {
                        fieldName: 'Col_Long',
                        fieldType: TableStore.FieldType.LONG,
                        index: true,
                        enableSortAndAgg: true,
                        store: true,
                        isAnArray: false,
                    },
                    {
                        fieldName: 'Col_Text',
                        fieldType: TableStore.FieldType.TEXT,
                        index: true,
                        enableSortAndAgg: false,
                        store: true,
                        isAnArray: false,
                        analyzer: 'single_word',
                    },
                    {
                        fieldName: 'Col_Nested',
                        fieldType: TableStore.FieldType.NESTED,
                        index: false,
                        enableSortAndAgg: false,
                        store: false,
                        fieldSchemas: [
                            {
                                fieldName: 'Sub_Col_KeyWord',
                                fieldType: TableStore.FieldType.KEYWORD,
                                index: true,
                                enableSortAndAgg: true,
                                store: false,
                            },
                            {
                                fieldName: 'Sub_Col_Long',
                                fieldType: TableStore.FieldType.LONG,
                                index: true,
                                enableSortAndAgg: true,
                                store: false,
                            },
                        ],
                    },
                ],
                indexSetting: {
                    routingFields: ['Pk_Keyword'],
                    routingPartitionSize: null,
                },
                indexSort: {
                    sorters: [
                        {
                            primaryKeySort: {
                                order: TableStore.SortOrder.SORT_ORDER_ASC,
                            },
                        },
                        {
                            fieldSort: {
                                fieldName: 'Col_Keyword',
                                order: TableStore.SortOrder.SORT_ORDER_DESC,
                            },
                        },
                    ],
                },
            },
        },
        (err, data) => {
            if (err) {
                console.log('error:', err);
                return;
            }
            console.log('success:', data);
        },
    );
};

() => {
    client.deleteSearchIndex(
        {
            tableName: TABLE_NAME,
            indexName: INDEX_NAME,
        },
        (err, data) => {
            if (err) {
                console.log('error:', err);
                return;
            }
            console.log('success:', data);
        },
    );
};

() => {
    client.listSearchIndex(
        {
            tableName: TABLE_NAME,
        },
        (err, data) => {
            if (err) {
                console.log('error:', err);
                return;
            }
            console.log('success:', JSON.stringify(data, null, 2));
        },
    );
};

() => {
    client.describeSearchIndex(
        {
            tableName: TABLE_NAME,
            indexName: INDEX_NAME,
        },
        (err, data) => {
            if (err) {
                console.log('error:', err);
                return;
            }
            console.log('success:', JSON.stringify(data, null, 2));
        },
    );
};

() => {
    client.createIndex(
        {
            mainTableName: 'sdkGlobalIndexTest',
            indexMeta: {
                name: 'sdkGlobalIndex',
                primaryKey: ['col1'],
                definedColumn: ['col2'],
                includeBaseData: false,
                indexUpdateMode: TableStore.IndexUpdateMode.IUM_ASYNC_INDEX,
                indexType: TableStore.IndexType.IT_GLOBAL_INDEX,
            },
        },
        (err, data) => {
            if (err) {
                console.log('error:', err);
                return;
            }
            console.log('success:', JSON.stringify(data, null, 2));
        },
    );
};

() => {
    const Long = TableStore.Long;

    const params: TableStore.GetRowParams = {
        tableName: 'index1',
        primaryKey: [{ pk2: Long.fromNumber(2) }, { pk1: Long.fromNumber(1) }],
    };

    client.getRow(params, (err, data) => {
        if (err) {
            console.log('error:', err);
            return;
        }
        console.log('success:', JSON.stringify(data, null, 2));
    });
};

() => {
    const params: TableStore.GetRangeParams = {
        tableName: 'sdkIndex1',
        direction: TableStore.Direction.FORWARD,
        maxVersions: 10,
        inclusiveStartPrimaryKey: [{ pk2: TableStore.INF_MIN }, { pk1: TableStore.INF_MIN }],
        exclusiveEndPrimaryKey: [{ pk2: TableStore.INF_MAX }, { pk1: TableStore.INF_MAX }],
        limit: 2,
    };

    let resultRows: TableStore.Row[] = [];

    const getRange = () => {
        client.getRange(params, (err, data) => {
            if (err) {
                console.log('error:', err);
                return;
            }
            resultRows = resultRows.concat(data.rows);

            if (data.nextStartPrimaryKey) {
                params.inclusiveStartPrimaryKey = [
                    { pk2: data.nextStartPrimaryKey[0].value },
                    { pk1: data.nextStartPrimaryKey[1].value },
                ];
                getRange();
            } else {
                console.log(JSON.stringify(resultRows));
            }
        });
    };

    getRange();
};

() => {
    client.dropIndex(
        {
            mainTableName: 'sdkGlobalTest',
            indexName: 'sdkIndex1',
        },
        (err, data) => {
            if (err) {
                console.log('error:', err);
                return;
            }
            console.log('success:', JSON.stringify(data, null, 2));
        },
    );
};

() => {
    client.createIndex(
        {
            mainTableName: 'sdkLocalIndexTest',
            indexMeta: {
                name: 'sdkLocalIndex',
                primaryKey: ['pk1', 'col1'],
                definedColumn: ['col2'],
                includeBaseData: false,
                indexUpdateMode: TableStore.IndexUpdateMode.IUM_SYNC_INDEX,
                indexType: TableStore.IndexType.IT_LOCAL_INDEX,
            },
        },
        (err, data) => {
            if (err) {
                console.log('error:', err);
                return;
            }
            console.log('success:', JSON.stringify(data, null, 2));
        },
    );
};

() => {
    const Long = TableStore.Long;

    const params: TableStore.GetRowParams = {
        tableName: 'sdkLocalIndex',
        primaryKey: [{ pk1: Long.fromNumber(1) }, { col1: Long.fromNumber(2) }, { pk2: Long.fromNumber(2) }],
    };

    client.getRow(params, (err, data) => {
        if (err) {
            console.log('error:', err);
            return;
        }
        console.log('success:', JSON.stringify(data, null, 2));
    });
};

() => {
    const params: TableStore.GetRangeParams = {
        tableName: 'sdkLocalIndex',
        direction: TableStore.Direction.FORWARD,
        maxVersions: 10,
        inclusiveStartPrimaryKey: [
            { pk1: TableStore.INF_MIN },
            { col1: TableStore.INF_MIN },
            { pk2: TableStore.INF_MIN },
        ],
        exclusiveEndPrimaryKey: [
            { pk1: TableStore.INF_MIN },
            { col1: TableStore.INF_MIN },
            { pk2: TableStore.INF_MAX },
        ],
        limit: 2,
    };

    let resultRows: TableStore.Row[] = [];

    const getRange = () => {
        client.getRange(params, (err, data) => {
            if (err) {
                console.log('error:', err);
                return;
            }
            resultRows = resultRows.concat(data.rows);

            if (data.nextStartPrimaryKey) {
                params.inclusiveStartPrimaryKey = [
                    { pk1: data.nextStartPrimaryKey[0].value },
                    { col1: data.nextStartPrimaryKey[1].value },
                    { pk2: data.nextStartPrimaryKey[2].value },
                ];
                getRange();
            } else {
                console.log(JSON.stringify(resultRows));
            }
        });
    };

    getRange();
};
