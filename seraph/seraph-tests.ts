///<reference path="seraph.d.ts"/>

var db = seraph();

db.save({ name: "Test-Man", age: 40 }, function(err, node) {
    if (err) throw err;

    db.delete(node, function(err) {
        if (err) throw err;
    });
});

db.changePassword('b2(jk:4@#', function(err) {
    //password is now changed, and `db`'s options have been updated with the new password
});

var cypher = "START x = node({id}) "
    + "MATCH x -[r]-> n "
    + "RETURN n "
    + "ORDER BY n.name";

db.query(cypher, {id: 1}, function(err, result) {
    if (err) throw err;
});

db.queryRaw(cypher, {id: 3}, function(err, result) {
    if (err) throw err;
    // result contains the raw response from neo4j's rest API. See
    // http://docs.neo4j.org/chunked/milestone/rest-api-cypher.html
    // for more info
});

var operation = db.operation('node/4285/properties', 'PUT', { name: 'Jon' });
db.call(operation, function(err) {
    if (!err) console.log('Set `name` to `Jon` on node 4285!')
});

var operation = db.operation('node/4285/properties');
db.call(operation, function(err, properties) {
    if (err) throw err;

    // `properties` is an object containing the properties from node 4285
});

var txn = db.batch();

txn.save({ title: 'Kaikki Askeleet' });
txn.save({ title: 'Sinä Nukut Siinä' });
txn.save({ title: 'Pohjanmaa' });

txn.commit(function(err, results) {
    /* results -> [{ id: 1, title: 'Kaikki Askeleet' },
     { id: 2, title: 'Sinä Nukut Siinä' },
     { id: 3, title: 'Pohjanmaa' }] */
});

db.batch(function(txn) {
    txn.save({ title: 'Kaikki Askeleet' });
    txn.save({ title: 'Sinä Nukut Siinä' });
    txn.save({ title: 'Pohjanmaa' });
}, function(err, results) {
    /* results -> [{ id: 1, title: 'Kaikki Askeleet' },
     { id: 2, title: 'Sinä Nukut Siinä' },
     { id: 3, title: 'Pohjanmaa' }] */
});

var txn = db.batch();

txn.save({ title: 'Marmoritaivas' }, function(err, node) {
    // this code is not reached until `txn.commit` is called
    // node -> { id: 1, title: 'Marmoritaivas' }
});

txn.commit();

var txn = db.batch();

var singer = txn.save({name: 'Johanna Kurkela'});
var album = txn.save({title: 'Kauriinsilmät', year: 2008});
var performance2 = txn.relate(singer, 'performs_on', album, {role: 'Primary Artist'});
txn.rel.legacyindex('performances', performance2, 'year', '2008');

txn.commit(function(err, results) {});

// db.isBatch -> undefined
var txn = db.batch();
// txn.isBatch -> true
if (txn.isBatch) {}// Woo! I'm in a batch.

// Create a node
db.save({ name: 'Jon', age: 22, likes: 'Beer' }, function(err, node) {
    console.log(node); // -> { name: 'Jon', age: 22, likes: 'Beer', id: 1 }

    // Update it
    db.save(node, function(err, node) {
        console.log(node); // -> { name: 'Jon', age: 23, id: 1 }
    })
})

db.save({ name: 'Jon' }, 'Person', function(err, node) {

});

db.save({ name: 'Jon', age: 23 }, 'Person', function(err, node) {
    db.save(node, 'age', 24, function(err) {
    });
});

db.save({ make: 'Citroen', model: 'DS4' }, function(err, node) {
    db.read(node.id, function(err, node) {
        console.log(node) // -> { make: 'Citroen', model: 'DS4', id: 1 }
    })
})

db.save({ name: 'Jon' }, function(err, node) {
    db.delete(node, function(err) {
        if (!err) console.log('Jon has been deleted!');
    })
})

var predicate = { australian: true };
var people = db.find(predicate, function (err, people) {
    if (err) throw err;
});

db.relationships(452, 'out', 'knows', function(err, relationships) {
    // relationships = all outgoing `knows` relationships from node 452
})

db.save({ make: 'Citroen', model: 'DS4' }, function(err, node) {
    db.label(node, ['Car', 'Hatchback'], function(err) {
        // `node` is now labelled with "Car" and "Hatchback"!
    });
})

db.save({ make: 'Citroen', model: 'DS4' }, function(err, node) {
    db.label(node, ['Car', 'Hatchback'], function(err) {
        // `node` is now labelled with "Car" and "Hatchback"!
        db.removeLabel(node, 'Hatchback', function(err) {
            // `node` is now only labelled with "Car".
        });
    });
})

db.save({ make: 'Citroen', model: 'DS4' }, function(err, node) {
    db.label(node, ['Car', 'Hatchback'], function(err) {
        db.nodesWithLabel('Car', function(err, results) {
        });
    });
})

db.save({ make: 'Citroen', model: 'DS4' }, function(err, node) {
    db.label(node, ['Car', 'Hatchback'], function(err) {
        db.readLabels(node, function(err, labels) {
            //labels -> ['Car', 'Hatchback']
        });
    });
})

db.relate(1, 'knows', 2, { for: '2 months' }, function(err, relationship) {

});

var props = { for: '2 months', location: 'Bergen' };
db.rel.create(1, 'knows', 2, props, function(err, relationship) {
    db.rel.update(relationship, function(err) {
        // properties on this relationship in the database are now equal to
        // { for: '3 months' }
    });
});

db.rel.create(1, 'knows', 2, { for: '2 months' }, function(err, newRelationship) {
    db.rel.read(newRelationship.id, function(err, readRelationship) {

    });
});

db.rel.create(1, 'knows', 2, { for: '2 months' }, function(err, rel) {
    db.rel.delete(rel.id, function(err) {
        if (!err) console.log("Relationship was deleted");
    });
});

db.constraints.list('Person', function(err, constraints) {
    console.log(constraints);
    // -> [{ type: 'UNIQUENESS', label: 'Person', { property_keys: ['name'] }]
});

db.constraints.uniqueness.list('Person', 'name', function(err, constraints) {
    console.log(constraints);
    // -> [{ type: 'UNIQUENESS', label: 'Person', { property_keys: ['name'] }]
});

// any node labelled Person should have a unique `name`
db.constraints.uniqueness.create('Person', 'name', function(err, constraint) {
    console.log(constraint);
    // -> { type: 'UNIQUENESS', label: 'Person', { property_keys: ['name'] }
});

// any node labelled Person should have a unique `name`
db.constraints.uniqueness.createIfNone('Person', 'name', function(err, constraint) {
    console.log(constraint);
    // -> { type: 'UNIQUENESS', label: 'Person', { property_keys: ['name'] }
    db.constraints.uniqueness.createIfNone('Person', 'name', function(err, constraint) {
        console.log(err);
        // -> undefined
        console.log(constraint);
        // -> { type: 'UNIQUENESS', label: 'Person', { property_keys: ['name'] }
    });
});

// any node labelled Person should have a unique `name`
db.constraints.uniqueness.create('Person', 'name', function(err, constraint) {
    console.log(constraint);
    // -> { type: 'UNIQUENESS', label: 'Person', { property_keys: ['name'] }
    db.constraints.uniqueness.drop('Person', 'name', function(err) {
        console.log(err);
        // -> undefined
        // the constraint has been dropped
    });
});

db.index.create('Person', 'name', function(err, index) {
    console.log(index); // -> { label: 'Person', { property_keys: ['name'] }
});

db.index.createIfNone('Person', 'name', function(err, index) {
    console.log(index); // -> { label: 'Person', { property_keys: ['name'] }
});

db.index.list('Person', function(err, index) {
    console.log(index); // -> [ { label: 'Person', { property_keys: ['name'] } ]
});

db.index.drop('Person', 'name', function(err) {
    if (!err) console.log('Index dropped!');
});

var indexConfig = { type: 'fulltext', provider: 'lucene' };
db.node.legacyindex.create('a_fulltext_index', indexConfig, function(err) {
    if (!err) console.log('a fulltext legacy index has been created!');
});

db.save({ name: 'Jon'}, function(err, node) {
    db.legacyindex('people', node, 'name', 12, function(err) {
        if (!err) console.log('Jon has been indexed!');
    });
});

db.rel.legacyindex.read('friendships', 'location', 'Norway', function(err, rels) {
    // `rels` is an array of all relationships indexed in the `friendships`
    // index, with a value `Norway` for the key `location`.
});

db.rel.legacyindex.readAsList('friendships', 'location', 'Norway', function(err, rels) {
    // `rels` is an array of all relationships indexed in the `friendships`
    // legacy index, with a value `Norway` for the key `location`.
});

db.node.legacyindex.remove('people', 6821, function(err) {
    if (!err) console.log("Every reference of node 6821 has been removed from the people index");
});

db.rel.legacyindex.remove('friendships', 351, 'in', 'Australia', function(err) {
    if (!err) console.log("Relationship 351 is no longer indexed as a friendship in Australia");
})

db.rel.legacyindex.delete('friendships', function(err) {
    if (!err) console.log('The `friendships` index has been deleted');
})

var tag = { name: 'finnish' };
db.node.legacyindex.getOrSaveUnique(tag, 'tags', 'name', tag.name, function(err, tag) {
    // tag == { id: 1, name: 'finnish' }

    // save another new object with the same properties
    db.node.legacyindex.getOrSaveUnique({name: 'finnish'}, 'tags', 'name', 'finnish', function(err, newTag) {
        // newTag == { id: 1, name: 'finnish' }
        // no save was performed because there was already an object at that index
    });
});

var tag = { name: 'finnish' };
db.node.legacyindex.saveUniqueOrFail(tag, 'tags', 'name', tag.name, function(err, tag) {
    // tag == { id: 1, name: 'finnish' }

    // save another new object with the same properties
    db.node.legacyindex.saveUniqueOrFail({name: 'finnish'}, 'tags', 'name', 'finnish', function(err, newTag) {
        // newTag == undefined
        // err.statusCode == 409 (conflict)
        // an error was thrown because there was already a node at that index.
    });
});

