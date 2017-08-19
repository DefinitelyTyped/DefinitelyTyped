import * as orientjs from 'orientjs';

let dbserver = orientjs({
    host: 'localhost',
    port: 2424,
    username: 'root',
    password: 'root'
    });
let db = dbserver.use({
        name: 'mytestdb',
        username: 'root',
        password: 'root'
    });


{
    var manager = new orientjs.Migration.Manager({
        db: db,
        dir: __dirname + '/migrations'
    });

    manager.up(1)
    .then(function () {
        console.log('migrated up by one!')
    });
}
