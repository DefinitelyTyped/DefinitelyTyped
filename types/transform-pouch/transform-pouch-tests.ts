import * as PouchDB from "pouchdb";
import * as transform from "transform-pouch";
PouchDB.plugin(transform);

const db1 = new PouchDB<{example: number}>();
db1.transform<{transformed: number}>({
    incoming(doc) {
        console.log(doc.example);
        return {_id: doc._id, transformed: 1};
    },
    outgoing(doc) {
        console.log(doc.transformed);
        return {_id: doc._id, example: 1};
    }
});

const dbAsync = new PouchDB<{example: number}>();
dbAsync.transform<{transformed: number}>({
    async incoming(doc) {
        console.log(doc.example);
        return {_id: doc._id, transformed: 1};
    },
    async outgoing(doc) {
        console.log(doc.transformed);
        return {_id: doc._id, example: 1};
    }
});
