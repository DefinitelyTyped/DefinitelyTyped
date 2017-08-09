import * as ibmdb from 'ibm_db';
const cn = '';
ibmdb.open("DATABASE=<dbname>;HOSTNAME=<myhost>;UID=db2user;PWD=password;PORT=<dbport>;PROTOCOL=TCPIP", (err: Error, conn: ibmdb.Database) => {
  if (err) return false;

  conn.query('select 1 from sysibm.sysdummy1', (err, data) => {
    if (err) return false;
    conn.close(() => {
      //
    });
  });
});
