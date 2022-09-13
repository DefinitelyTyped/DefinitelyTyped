import * as sqlite from 'react-native-sqlite-storage';

const db = sqlite.openDatabase(
    { name: 'test.db', location: 'default' },
    () => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM Employees a, Departments b WHERE a.department = b.department_id',
                [],
                (tx, results) => {
                    // Get rows with Web SQL Database spec compliance.
                    const len = results.rows.length;
                    for (let i = 0; i < len; i++) {
                        const row = results.rows.item(i);
                        const log = `Employee name: ${row.name}, Dept Name: ${row.deptName}`;
                    }
                },
            );
        });
    },
    err => {
        // log error
    },
);

sqlite.openDatabase({ name: 'test.db', location: 'default' }).then(db => {
    db.transaction(tx => {
        tx.executeSql('SELECT * FROM Employees a, Departments b WHERE a.department = b.department_id', []).then(
            (result: [sqlite.Transaction, sqlite.ResultSet]) => {
                // handle result
            },
        );
    })
        .then(() => {
            // handle transaction finished
        })
        .catch((e: sqlite.SQLError) => {
            // log error
        });
    db.executeSql('SELECT * FROM Employees a, Departments b WHERE a.department = b.department_id', []).then(
        (result: [sqlite.ResultSet]) => {
            // handle result
        },
    );
});

// @ts-expect-error
const invalidIOSDatabaseParams: sqlite.DatabaseParamsIOS = {
    name: 'db',
};

const correctIOSDatabaseParams: sqlite.DatabaseParamsIOS = {
    name: 'db',
    location: 'default',
};
sqlite.openDatabase(correctIOSDatabaseParams);

const androidDatabaseParams: sqlite.DatabaseParamsAndroid = {
    name: 'db',
};
sqlite.openDatabase(androidDatabaseParams);
