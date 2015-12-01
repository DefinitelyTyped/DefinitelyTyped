/// <reference path="rethinkdb.d.ts" />

import * as r from 'rethinkdb';

let callback = (err, result) => { };
let conn = <rethinkdb.RConnectionInterface>{};

// TESTS FOR: add //
r.expr<number>(2).add(2).run(conn, callback)

// TESTS FOR: and //
var a = true, b = false;
r.expr<boolean>(a).and(b).run(conn, callback);
// result passed to callback
false

// TESTS FOR: append //
r.table('marvel').get('IronMan')<Array<any>>('equipment').append('newBoots').run(conn, callback)

// TESTS FOR: args //
r.table('people').getAll('Alice', 'Bob').run(conn, callback)
// or
r.table('people').getAll(r.args(['Alice', 'Bob'])).run(conn, callback)

// TESTS FOR: avg //
r.expr<Array<number>>([3, 5, 7]).avg().run(conn, callback)

// TESTS FOR: between //
r.table('marvel').between(10, 20).run(conn, callback)

// TESTS FOR: binary //
var fs = require('fs');
fs.readFile('./defaultAvatar.png', function (err, avatarImage) {
    if (err) {
        // Handle error
    }
    else {
        r.table('users').get('100').update({
            avatar: avatarImage
        })
    }
});

// TESTS FOR: () (bracket) //
r.table('marvel').get('IronMan')('firstAppearance').run(conn, callback)

// TESTS FOR: branch //

// Result passed to callback
// "big"
var x = 10;
r.branch(r.expr(x).gt(5), 'big', 'small').run(conn, callback);
r.branch(r.expr(x).gt(5), 'big', r.expr<string>('yo')).run(conn, callback);
r.branch(r.expr(x).gt(5), 15, 17).run(conn, callback);
r.branch(r.expr(x).gt(5), 15, r.expr(x).gt(10), 98, 32).run(conn, callback);

// TESTS FOR: ceil //
r.ceil(12.345).run(conn, callback);
13.0

// TESTS FOR: changeAt //
r.expr<Array<number>>(["Iron Man", "Bruce", "Spider-Man"]).changeAt(1, "Hulk").run(conn, callback)

// TESTS FOR: changes //
r.table<{ game:any }>('games').changes().run(conn, function(err, cursor) {
  cursor.each(console.log)

  // TESTS FOR: close //
  cursor.close()
  
  // TESTS FOR: each //
  cursor.each(function(err, row) {
      if (err) throw err;
      //processRow(row);
  });
  
  // TESTS FOR: eachAsync //
  cursor.eachAsync(function(row) {
      // if a Promise is returned, it will be processed before the cursor
      // continues iteration.
      console.log(row);
      //return asyncRowHandler(row);
  }).then(function () {
      console.log("done processing"); 
  });
  
  // TESTS FOR: next //
  cursor.next(function(err, row) {
      if (err) throw err;
      // processRow(row);
  });
  
  // TESTS FOR: toArray //
  cursor.toArray(function(err, results) {
    if (err) throw err;
    // processResults(results);
    for (let result of results) {
      console.log(result);
    }
  });
})

// TESTS FOR: circle //
r.table('geo').insert({
    id: 300,
    name: 'Hayes Valley',
    neighborhood: r.circle([-122.423246,37.779388], 1000)
}).run(conn, callback);

// TESTS FOR: close //
conn.close(function(err) { if (err) throw err; })

// TESTS FOR: coerceTo //
r.table('posts').map(function (post) {
    return post.merge({ comments: r.table('comments').getAll(post<string>('id'), {index: 'postId'}).coerceTo('array')});
}).run(conn, callback)

// TESTS FOR: concatMap //
r.table('marvel').concatMap(function(hero) {
    return hero('defeatedMonsters')
}).run(conn, callback)

// TESTS FOR: config //
r.table('users').config().run(conn, callback);

// TESTS FOR: connect //
r.connect({
    db: 'marvel'
}, function(err, conn) {
    // ...
});
var promise = r.connect({db: 'marvel'});

// TESTS FOR: contains //
r.table('marvel').get('ironman')<Array<any>>('opponents').contains('superman').run(conn, callback)

// TESTS FOR: count //
r.table('marvel').count().add(r.table('dc').count()).run(conn, callback)

// TESTS FOR: date //
r.table("users").filter(function(user:rethinkdb.RObjectInterface<Object>) {
    return user<Date>("birthdate").date().eq(r.now().date())
}).run(conn, callback)

// TESTS FOR: day //
r.table("users").filter(
    r.row<Date>("birthdate").day().eq(24)
).run(conn, callback)

// TESTS FOR: dayOfWeek //
r.now().dayOfWeek().run(conn, callback)

// TESTS FOR: dayOfYear //
r.table("users").filter(
    r.row<Date>("birthdate").dayOfYear().eq(1)
)

// TESTS FOR: db //
r.db('heroes').table('marvel').run(conn, callback)

// TESTS FOR: dbCreate //
r.dbCreate('superheroes').run(conn, callback)

// TESTS FOR: dbDrop //
r.dbDrop('superheroes').run(conn, callback)

// TESTS FOR: dbList //
r.dbList().run(conn, callback)

// TESTS FOR: default //
r.table("posts").map(function (post) {
    return {
        title: post("title"),
        author: post("author").default("Anonymous")
    }
}).run(conn, callback);

// TESTS FOR: delete //
r.table("comments").get("7eab9e63-73f1-4f33-8ce4-95cbea626f59").delete().run(conn, callback)

// TESTS FOR: deleteAt //
r(['a','b','c','d','e','f']).deleteAt(1).run(conn, callback)
// result passed to callback
// ['a', 'c', 'd', 'e', 'f']

// TESTS FOR: difference //
r.table('marvel').get('IronMan')<Array<any>>('equipment').difference(['Boots']).run(conn, callback)

// TESTS FOR: distance //
var point1 = r.point(-122.423246,37.779388);
var point2 = r.point(-117.220406,32.719464);
r.distance(point1, point2, {unit: 'km'}).run(conn, callback);
// result returned to callback 
734.1252496021841

// TESTS FOR: distinct //
r.table('marvel').concatMap(function(hero) {
    return hero('villainList')
}).distinct().run(conn, callback)

// TESTS FOR: div //
r.expr<number>(2).div(2).run(conn, callback)

// TESTS FOR: downcase //
r.expr<string>("Sentence about LaTeX.").downcase().run(conn, callback)

// TESTS FOR: during //
r.table("posts").filter(
    r.row<Date>('date').during(r.time(2013, 12, 1), r.time(2013, 12, 10))
).run(conn, callback);

// TESTS FOR: epochTime //
r.table("user").get("John").update({birthdate: r.epochTime(531360000)})
    .run(conn, callback)

// TESTS FOR: eq //
r.table('users').get("1")('role').eq('administrator').run(conn, callback);

// TESTS FOR: eqJoin //


// TESTS FOR: error //<rethinkdb.RObjectInterface<any>>
r.table('marvel').get('IronMan').do((ironman:rethinkdb.RObjectInterface<any>) => {
    return r.branch(ironman('victories').lt(ironman('battles')),
        r.error('impossible code path'),
        ironman)
}).run(conn, callback)

// TESTS FOR: EventEmitter (cursor) //


// TESTS FOR: expr //
r.expr<{a:string}>({a:'b'}).merge({b:[1,2,3]}).run(conn, callback)

// TESTS FOR: fill //
r.table('geo').insert({
    id: 201,
    rectangle: r.line(
        [-122.423246,37.779388],
        [-122.423246,37.329898],
        [-121.886420,37.329898],
        [-121.886420,37.779388]
    )
}).run(conn, callback);
r.table('geo').get('201').update({
    rectangle: r.row<rethinkdb.RLineInterface>('rectangle').fill()
}, {nonAtomic: true}).run(conn, callback);

// TESTS FOR: filter //
r.table('users').filter({age: 30}).run(conn, callback)

// TESTS FOR: floor //
r.floor(12.345).run(conn, callback);
12.0

// TESTS FOR: forEach //
r.table('marvel').forEach(function(hero) {
    return r.table('villains').get(hero<string>('villainDefeated')).delete()
}).run(conn, callback)

// TESTS FOR: ge //
r.table('players').get('1')('score').ge(10).run(conn, callback);

// TESTS FOR: geojson //
var geoJson = {
    'type': 'Point',
    'coordinates': [ -122.423246, 37.779388 ]
};
r.table('geo').insert({
    id: 'sfo',
    name: 'San Francisco',
    location: r.geojson(geoJson)
}).run(conn, callback);

// TESTS FOR: get //
r.table('posts').get('a9849eef-7176-4411-935b-79a6e3c56a74').run(conn, callback)

// TESTS FOR: getAll //
r.table('marvel').getAll('man_of_steel', {index:'code_name'}).run(conn, callback)

// TESTS FOR: getField //
r.table('marvel').get('IronMan').getField('firstAppearance').run(conn, callback)

// TESTS FOR: getIntersecting //
var circle1 = r.circle([-117.220406,32.719464], 10, {unit: 'mi'});
r.table('parks').getIntersecting(circle1, {index: 'area'}).run(conn, callback);

// TESTS FOR: getNearest //
var secretBase = r.point(-122.422876,37.777128);
r.table('hideouts').getNearest(secretBase,
    {index: 'location', maxDist: 5000}
).run(conn, callback)

// TESTS FOR: group //
r.table('games').group('player').max('points').run(conn, callback)

// TESTS FOR: gt //
r.table('players').get('1')('score').gt(10).run(conn, callback);

// TESTS FOR: hasFields //
r.table('players').hasFields('games_won').run(conn, callback)

// TESTS FOR: hours //
r.table("posts").filter(function(post) {
    return post<Date>("date").hours().lt(4)
})

// TESTS FOR: http //
r.table('posts').insert(r.http('http://httpbin.org/get')).run(conn, callback)

// TESTS FOR: inTimezone //
r.now().inTimezone('-08:00').hours().run(conn, callback)

// TESTS FOR: includes //
var point1 = r.point(-117.220406,32.719464);
var point2 = r.point(-117.206201,32.725186);
r.circle(point1, 2000).includes(point2).run(conn, callback);
// result returned to callback 
true

// TESTS FOR: indexCreate //
r.table('comments').indexCreate('postId').run(conn, callback)

// TESTS FOR: indexDrop //
r.table('dc').indexDrop('code_name').run(conn, callback)

// TESTS FOR: indexList //
r.table('marvel').indexList().run(conn, callback)

// TESTS FOR: indexRename //
r.table('comments').indexRename('postId', 'messageId').run(conn, callback)

// TESTS FOR: indexStatus //
r.table('test').indexStatus().run(conn, callback)
r.table('test').indexStatus('timestamp').run(conn, callback)

// TESTS FOR: indexWait //
r.table('test').indexWait().run(conn, callback)
r.table('test').indexWait('timestamp').run(conn, callback)

// TESTS FOR: info //
r.table('marvel').info().run(conn, callback)

// TESTS FOR: innerJoin //
r.table('marvel').innerJoin(r.table('dc'), function(marvelRow, dcRow) {
  return marvelRow('strength').lt(dcRow('strength'))
}).zip().run(conn, callback)

// TESTS FOR: insert //
r.table("posts").insert({
    id: 1,
    title: "Lorem ipsum",
    content: "Dolor sit amet"
}).run(conn, callback)

// TESTS FOR: insertAt //
r.expr<Array<string>>(["Iron Man", "Spider-Man"]).insertAt(1, "Hulk").run(conn, callback)

// TESTS FOR: intersects //
var point1 = r.point(-117.220406,32.719464);
var point2 = r.point(-117.206201,32.725186);
r.circle(point1, 2000).intersects(point2).run(conn, callback);
// result returned to callback 
true

// TESTS FOR: isEmpty //
r.table('marvel').isEmpty().run(conn, callback)

// TESTS FOR: ISO8601 //
r.table("user").get("John").update({birth: r.ISO8601('1986-11-03T08:30:00-07:00')}).run(conn, callback)

// TESTS FOR: js //
r.js("'str1' + 'str2'").run(conn, callback)

// TESTS FOR: json //
r.json("[1,2,3]").run(conn, callback)

// TESTS FOR: keys //
// row: { id: 1, mail: "fred@example.com", name: "fred" }
r.table('users').get('1').keys().run(conn, callback);
// Result passed to callback
[ "id", "mail", "name" ]

// TESTS FOR: le //
r.table('players').get('1')('score').le(10).run(conn, callback);

// TESTS FOR: limit //
r.table('marvel').orderBy('belovedness').limit(10).run(conn, callback)

// TESTS FOR: line //
r.table('geo').insert({
    id: 101,
    route: r.line([-122.423246,37.779388], [-121.886420,37.329898])
}).run(conn, callback);

// TESTS FOR: literal //


// TESTS FOR: lt //
r.table('players').get('1')['score'].lt(10).run(conn, callback);

// TESTS FOR: map //
r.expr<Array<number>>([1, 2, 3, 4, 5]).map(function (val:rethinkdb.RNumberInterface) {
    return val.mul(val);
}).run(conn, callback);
// Result passed to callback
[1, 4, 9, 16, 25]

// TESTS FOR: match //
r.table('users').filter(function(doc){
    return doc<string>('name').match("^A")
}).run(conn, callback)

// TESTS FOR: max //
r.expr<Array<number>>([3, 5, 7]).max().run(conn, callback);

// TESTS FOR: merge //
r.table('marvel').get('thor').merge(
    r.table('equipment').get('hammer'),
    r.table('equipment').get('pimento_sandwich'),
    { lala: 123 }
).run(conn, callback)

// TESTS FOR: min //
r.expr<Array<number>>([3, 5, 7]).min().run(conn, callback);

// TESTS FOR: minutes //
r.table("posts").filter(function(post) {
    return post<Date>("date").minutes().lt(10)
})

// TESTS FOR: mod //
r.expr<number>(2).mod(2).run(conn, callback)

// TESTS FOR: month //
r.table("users").filter(
    r.row<Date>("birthdate").month().eq(11)
)

// TESTS FOR: mul //
r.expr<number>(2).mul(2).run(conn, callback)

// TESTS FOR: ne //
r.table('users').get('1')('role').ne('administrator').run(conn, callback);

// TESTS FOR: noreplyWait //
conn.noreplyWait(function(err) {  })

// TESTS FOR: not //
r(true).not().run(conn, callback)
r.not(true).run(conn, callback)

// TESTS FOR: now //
r.table("users").insert({
    name: "John",
    subscription_date: r.now()
}).run(conn, callback)

// TESTS FOR: nth //
r.expr<Array<number>>([1,2,3]).nth(1).run(conn, callback)

// TESTS FOR: object //
r.object('id', 5, 'data', ['foo', 'bar']).run(conn, callback)

// TESTS FOR: offsetsOf //
r.expr<Array<string>>(['a','b','c']).offsetsOf('c').run(conn, callback)

// TESTS FOR: or //
var a = true, b = false;
r.expr<boolean>(a).or(b).run(conn, callback);
// result passed to callback
true

// TESTS FOR: orderBy //
r.table('posts').orderBy({index: 'date'}).run(conn, callback)
r.table('posts').indexCreate('date').run(conn, callback)
r.table('posts').orderBy({index: r.desc('date')}).run(conn, callback)

// TESTS FOR: outerJoin //
r.table('marvel').outerJoin(r.table('dc'), function(marvelRow, dcRow) {
    return marvelRow('strength').lt(dcRow('strength'))
}).run(conn, callback)

// TESTS FOR: pluck //
r.table('marvel').get('IronMan').pluck('reactorState', 'reactorPower').run(conn, callback)

// TESTS FOR: point //
r.table('geo').insert({
    id: 1,
    name: 'San Francisco',
    location: r.point(-122.423246,37.779388)
}).run(conn, callback);

// TESTS FOR: polygon //
r.table('geo').insert({
    id: 101,
    rectangle: r.polygon(
        [-122.423246,37.779388],
        [-122.423246,37.329898],
        [-121.886420,37.329898],
        [-121.886420,37.779388]
    )
}).run(conn, callback);

// TESTS FOR: polygonSub //
var outerPolygon = r.polygon(
    [-122.4,37.7],
    [-122.4,37.3],
    [-121.8,37.3],
    [-121.8,37.7]
);
var innerPolygon = r.polygon(
    [-122.3,37.4],
    [-122.3,37.6],
    [-122.0,37.6],
    [-122.0,37.4]
);
outerPolygon.polygonSub(innerPolygon).run(conn, callback);

// TESTS FOR: prepend //
r.table('marvel').get('IronMan')<Array<string>>('equipment').prepend('newBoots').run(conn, callback)

// TESTS FOR: random //
r.random().run(conn, callback)

// TESTS FOR: range //
r.range(4).run(conn, callback)
[0, 1, 2, 3]

// TESTS FOR: rebalance //
r.table('superheroes').rebalance().run(conn, callback);

// TESTS FOR: reconfigure //
r.table('superheroes').reconfigure({shards: 2, replicas: 1}).run(conn, callback);

// TESTS FOR: reconnect //
conn.reconnect({noreplyWait: false}, function(error, connection) { })

// TESTS FOR: reduce //
r.table("posts").map(function(doc) {
    return 1
}).reduce(function(left, right) {
    return left.add(right)
}).run(conn, callback);

// TESTS FOR: replace //
r.table("posts").get('1').replace({
    id: 1,
    title: "Lorem ipsum",
    content: "Aleas jacta est",
    status: "draft"
}).run(conn, callback)

// TESTS FOR: round //
r.round(12.345).run(conn, callback);
12.0

// TESTS FOR: row //
r.table('users').filter(r.row('age').gt(5)).run(conn, callback)

// TESTS FOR: run //
r.table('marvel').run(conn, function(err, cursor) { cursor.each(console.log); })

// TESTS FOR: sample //
r.table('marvel').sample(3).run(conn, callback)

// TESTS FOR: seconds //
r.table("posts").filter(function(post) {
    return post<Date>("date").seconds().lt(30)
})

// TESTS FOR: server //
conn.server(callback);
// Result passed to callback
// { "id": "404bef53-4b2c-433f-9184-bc3f7bda4a15", "name": "amadeus" }

// TESTS FOR: setDifference //
r.table('marvel').get('IronMan')<Array<string>>('equipment').setDifference(['newBoots', 'arc_reactor']).run(conn, callback)

// TESTS FOR: setInsert //
r.table('marvel').get('IronMan')<Array<string>>('equipment').setInsert('newBoots').run(conn, callback)

// TESTS FOR: setIntersection //
r.table('marvel').get('IronMan')<Array<string>>('equipment').setIntersection(['newBoots', 'arc_reactor']).run(conn, callback)

// TESTS FOR: setUnion //
r.table('marvel').get('IronMan')<Array<string>>('equipment').setUnion(['newBoots', 'arc_reactor']).run(conn, callback)

// TESTS FOR: skip //
r.table('marvel').orderBy('successMetric').skip(10).run(conn, callback)

// TESTS FOR: slice //


// TESTS FOR: spliceAt //
r.expr<Array<string>>(["Iron Man", "Spider-Man"]).spliceAt(1, ["Hulk", "Thor"]).run(conn, callback)

// TESTS FOR: split //
r.expr<string>("foo  bar bax").split().run(conn, callback)

// TESTS FOR: status //
r.table('superheroes').status().run(conn, callback);

// TESTS FOR: sub //
r.expr<number>(2).sub(2).run(conn, callback)

// TESTS FOR: sum //
r.expr<Array<number>>([3, 5, 7]).sum().run(conn, callback)

// TESTS FOR: sync //
r.table('marvel').sync().run(conn, callback)

// TESTS FOR: table //
r.table('marvel').run(conn, callback)

// TESTS FOR: tableCreate //
r.db('heroes').tableCreate('dc_universe').run(conn, callback)

// TESTS FOR: tableDrop //
r.db('test').tableDrop('dc_universe').run(conn, callback)

// TESTS FOR: tableList //
r.db('test').tableList().run(conn, callback)

// TESTS FOR: time //
r.table("user").get("John").update({birthdate: r.time(1986, 11, 3, 'Z')})
    .run(conn, callback)

// TESTS FOR: timeOfDay //
r.table("posts").filter(
    r.row<Date>("date").timeOfDay().le(12*60*60)
).run(conn, callback)

// TESTS FOR: timezone //
r.table("users").filter(function(user) {
    return user<Date>("subscriptionDate").timezone().eq("-07:00")
})

// TESTS FOR: toEpochTime //
r.now().toEpochTime()

// TESTS FOR: toGeojson //
r.table('geo').get('sfo')<rethinkdb.RPointInterface>('location').toGeojson().run(conn, callback);
// result passed to callback
// {
//     'type': 'Point',
//     'coordinates': [ -122.423246, 37.779388 ]
// }

// TESTS FOR: toISO8601 //
r.now().toISO8601().run(conn, callback)
// Result passed to callback
"2015-04-20T18:37:52.690+00:00"

// TESTS FOR: toJsonString, toJSON //
r.table('hero').get('1').toJSON();
// result returned to callback
'{"id": 1, "name": "Batman", "city": "Gotham", "powers": ["martial arts", "cinematic entrances"]}'

// TESTS FOR: typeOf //
r.expr("foo").typeOf().run(conn, callback)

// TESTS FOR: ungroup //
r.table('games')
    .group('player').max('points')['points']
    .ungroup().orderBy(r.desc('reduction')).run(conn)

// TESTS FOR: union //
r.table('marvel').union(r.table('dc')).run(conn, callback);

// TESTS FOR: upcase //
r.expr<string>("Sentence about LaTeX.").upcase().run(conn, callback)

// TESTS FOR: update //
r.table("posts").get('1').update({status: "published"}).run(conn, callback)

// TESTS FOR: use //
conn.use('marvel');
// r.table('heroes').run(conn, callback) // refers to r.db('marvel').table('heroes')

// TESTS FOR: uuid //
r.uuid().run(conn, callback)
// result returned to callback
"27961a0e-f4e8-4eb3-bf95-c5203e1d87b9"

// TESTS FOR: values //
// row: { id: 1, mail: "fred@example.com", name: "fred" }
r.table('users').get('1').values().run(conn, callback);
// Result passed to callback
[ 1, "fred@example.com", "fred" ]

// TESTS FOR: wait //
r.table('superheroes').wait().run(conn, callback);

// TESTS FOR: withFields //
r.table('users').withFields('id', 'username', 'posts').run(conn, callback)

// TESTS FOR: without //
r.table('marvel').get('IronMan').without('personalVictoriesList').run(conn, callback)

// TESTS FOR: year //
r.table("users").filter(function(user) {
    return user<Date>("birthdate").year().eq(1986)
}).run(conn, callback)

// TESTS FOR: zip //
r.table('marvel').eqJoin('main_dc_collaborator', r.table('dc'))
    .zip().run(conn, callback)


/// OTHERS:

r.db('this').table('something').insert({ something: true, other: r.now().year() });

r.db('that').table("posts").map((post) => {
        return {
            title: post("title"),
            author: post("author").default("Anonymous")
        }
    });
    
r.db('that').table("posts").map((post) => {
        return {
            title: post("title"),
            author: post("author").default("Anonymous")
        }
    });

r.table('marvel').get('thor').merge(
    r.table('equipment').get('hammer'),
    r.table('equipment').get('pimento_sandwich')
);
    
r.db('test').table('').insert('')('');
r.line(1, 2);
r.literal({});
r.db('test').table('name').group('');

r.connect({});

r.now().coerceTo<rethinkdb.RStringInterface>('string');

r.table('marvel').map(
    r.branch(
        r.row('victories').gt(100),
        r.row<string>('name').add(' is a superhero'),
        r.row('victories').gt(10),
        r.row<string>('name').add(' is a hero'),
        r.row<string>('name').add(' is very nice')
    )
).run(conn, callback);

/// DefinitelyTyped originals (with the corrected mistake of "between" after "filter"):

r.connect({host: "localhost", port: 28015}, function(err, conn) {
    console.log("Hi", err, conn);
    var testDb = r.db('test')
    testDb.tableCreate('users').run(conn, function(err, stuff) {
        var users = testDb.table('users');

        users.insert({name: "bob"}).run(conn, function() {});

        users
          .between("james", "beth")
          .filter(function(doc?) {
              return doc("henry").eq("bob")
          })
          .limit(4)
          .run(conn, function() {

        });
    });
});

// use promises instead of callbacks
r.connect({host: "localhost", port: 28015}).then(function(conn) {
    console.log("Hi", conn)
    var testDb = r.db('test')
    testDb.tableCreate('users').run(conn).then(function(stuff) {
        var users = testDb.table('users')

        users.insert({name: "bob"}).run(conn, function() {})

        users
          .between("james", "beth")
          .filter(function(doc?) {
              return doc("henry").eq("bob")
          })
          .limit(4)
          .run(conn);

    });
});