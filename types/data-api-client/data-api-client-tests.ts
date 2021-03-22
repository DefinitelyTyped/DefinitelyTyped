import Client = require('data-api-client');

const client = Client({
    resourceArn: '',
    secretArn: '',
    database: '',
});

client.query('SELECT * FROM Users;').then(res => {
    if (res.records?.length) {
        // ...
    }
});

client.query({ sql: 'SELECT * FROM Users;', transactionId: '' }).then(res => {
    if (res.records?.length) {
        // ...
    }
});

client.query({ sql: 'SELECT * FROM Users;', parameters: {}, transactionId: '' }).then(res => {
    if (res.records?.length) {
        // ...
    }
});

client
    .query<{ id: string; name: string }>('SELECT * FROM Users WHERE id = :id;', { id: 'id' })
    .then(res => {
        if (res.records?.length) {
            const user = res.records[0];
            user.id;
            user.name;
        }
    });

client
    .transaction()
    .query('INSERT INTO Users VALUES(:id, :name)', { id: 'id', name: 'name' })
    .query(prev => ['UPDATE Users SET name = :name WHERE id = :id', { id: prev.insertId, name: 'newName' }])
    .commit();
