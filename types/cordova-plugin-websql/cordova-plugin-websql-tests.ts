var db = window.openDatabase('Test', '0.1', 'test', 1024 * 1024 * 5);
db.transaction(
    (tx: SqlTransaction) => {
        tx.executeSql('CREATE TABLE Sample IF NOT EXIST...');
        tx.executeSql('INSERT INTO Sample VALUES...');
    },
    (err: SqlError) => {
        if (err.code = SqlError.SYNTAX_ERR) {
            alert('Error ' + err.message);
        }
    },
    () => { console.log('Transaction completed successfully'); }
);
