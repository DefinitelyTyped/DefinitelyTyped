interface MyModel {
    numericProperty: number;
}
function testConstructor(model: PouchDB.Core.Document<MyModel>) {
    const db = new PouchDB<MyModel>('mydb');
    db.viewCleanup().catch((error) => {
    });
}

function testQuery() {
    const pouch = new PouchDB('mydb');
    // find pokemon with name === 'Pika pi!'
    pouch.query('my_index/by_name', {
        key          : 'Pika pi!',
        include_docs : true
    }).then((result) => {
        // handle result
    }).catch((err) => {
        // handle errors
    });

    // find the first 5 pokemon whose name starts with 'P'
    pouch.query('my_index/by_name', {
        startkey     : 'P',
        endkey       : 'P\uffff',
        limit        : 5,
        include_docs : true
    }).then((result) => {
        // handle result
    }).catch((err) => {
        // handle errors
    });
}
