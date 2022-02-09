import cassanknex = require('cassanknex');

const knex = cassanknex({
    connection: {
        contactPoints: ['127.0.0.1']
    }
});

knex.on('ready', (err) => {
});

interface BirdRow {
    type: string;
    canFly: boolean;
}

const qb = knex("animals")
    .insert<BirdRow>({
        type: 'Stork',
        canFly: true
    })
    .into('birds');

qb.exec((err, res) => {
});

qb.eachRow((n, row) => {
}, (err) => {
});

interface FooRow {
    id: string;
    foo: string;
    bar: number;
    baz: string[];
}

const query2 = knex("keyspace")
    .select<FooRow>("id", "foo", "bar", "baz")
    .ttl('foo')
    .where("id", "=", "1")
    .orWhere("id", "in", ["2", "3"])
    .orWhere("baz", "=", ["bar"])
    .andWhere("foo", "IN", ["baz", "bar"])
    .limit(10)
    .from("table");

query2.stream({
    readable() {
        const row = this.read();
    },
    end() {},
    error() {}
});

const values = {
    id: "foo",
    bar: 13,
    baz: ["foo", "bar"]
};

const query3 = knex("cassanKnexy")
    .insert<FooRow>(values)
    .usingTimestamp(250000)
    .usingTTL(50000)
    .into("columnFamily");

const [cql, params] = [query3.cql(), query3.bindings()];

const query4 = knex("cassanKnexy")
    .update("columnFamily")
    .add("bar", { foo: "baz" }) // "bar" is a map
    .remove("foo", ["bar"]) // "foo" is a set
    .where("id", "=", 1);
