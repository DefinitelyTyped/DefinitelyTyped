import massive = require('massive');

let dbconn: massive.Database;

function findUserById(id: number): Promise<any> {
  return dbconn.users.findOne({id: id});
}

massive('postgres://app:password@localhost:5432/app').then( db => {

    console.log(`DB connected successfully`);

    dbconn = db;

}).catch(err => {

    console.error(`Error connecting DB`);

});
