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
