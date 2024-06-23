import { createClient, FacetOptions } from "solr-client";

const client = createClient();
const query = client.query();

query; // $ExpectType Query
client; // $ExpectType Client

query.q({ id: "1" }); // $ExpectType Query

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

const facetOptions1: FacetOptions = {
    on: true,
};

const facetOptions2: FacetOptions = {
    on: true,
    query: "test",
    field: "test",
    prefix: "test",
    sort: "test",
    limit: 1,
    offset: 1,
    mincout: 1,
    missing: false,
    method: "test",
    pivot: "test",
};

const facetOptions3: FacetOptions = {
    on: true,
    query: "test",
    field: ["test", "foo"],
    prefix: "test",
    sort: "test",
    limit: 1,
    offset: 1,
    mincout: 1,
    missing: false,
    method: "test",
    pivot: ["test", "foo"],
};

facetOptions1; // $ExpectType FacetOptions
facetOptions2; // $ExpectType FacetOptions
facetOptions3; // $ExpectType FacetOptions
