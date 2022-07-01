import * as ibmdb from 'ibm_db';
const cn = '';
ibmdb.open("DATABASE=<dbname>;HOSTNAME=<myhost>;UID=db2user;PWD=password;PORT=<dbport>;PROTOCOL=TCPIP", (err: Error, conn: ibmdb.Database) => {
  if (err) return false;

  conn.query('select 1 from sysibm.sysdummy1', (err, data) => {
      if (err) return false;
      // $ExpectType false
    conn.close((connErr) => {
      if (connErr) {
        // $ExpectType Error
        connErr;
      } else {
        // $ExpectType undefined
        connErr;
      }
    });
  });

    // ibmdb.ODBCResult
    conn.queryResult('select 1 from sysibm.sysdummy1', async (err, data) => {
      data.getColumnMetadataSync();
      data.fetchAll({fetchMode: 3}, (err, data) => {
        //
      });
      // $ExpectType Error | undefined
      const connErr = await conn.close();
      if (connErr) {
          // $ExpectType Error
          connErr;
      } else {
          // $ExpectType undefined
          connErr;
      }
    });
});

/** imdb.ODBCStatement */
const service = new ibmdb.ODBCStatement();
service.executeSync();
 service.executeSync(
  ["test"]
);
 service._executeSync();
 service._executeSync(
  ["test"]
);

/** ibm.Database */
new ibmdb.Database({
    connected: true,
});
