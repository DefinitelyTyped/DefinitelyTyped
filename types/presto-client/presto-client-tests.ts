import { Client } from 'presto-client';

const client = new Client({
    user: 'test',
});

client.execute({
    query: 'SELECT count(*) as cnt FROM tblname WHERE ...',
    catalog: 'hive',
    schema: 'default',
    source: 'nodejs-client',
    state: (error, query_id, stats) => {
        // do something with query stats
    },
    columns: (error, data) => {
        // do something with data
    },
    data: (error, data, columns, stats) => {
        // do something with data
    },
    success: (error, stats) => {
        // do something now that query is done
    },
    error: (error) => {
        // handle the error
    }
  });
