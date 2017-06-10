import massive = require('massive');

let dbconn: massive.Database;

function findUserById(id: number): Promise<any> {
  return dbconn.users.findOne({id: id});
}

massive('postgres://app:password@localhost:5432/app').then( db => {

    console.log(`DB connected successfully`);

    dbconn = db;

    findUserById(1).then(user => console.log(`User: ${JSON.stringify(user)}`));

});
