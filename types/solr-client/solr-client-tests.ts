import { createClient } from "solr-client";

const client = createClient();
const query = client.query();

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
