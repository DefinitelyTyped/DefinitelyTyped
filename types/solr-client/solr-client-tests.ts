import { createQuery, createClient } from "solr-client";

const query = createQuery();
const client = createClient();

query; // $ExpectType Query
client; // $ExpectType Client

query.q({id: "1"}); // $ExpectType Query

client.search(query); // $ExpectType ClientRequest

(() => {
    client.search(query, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
});
