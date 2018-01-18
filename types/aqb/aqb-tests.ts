import { QB } from "./index";

/*
 * Most of these tests are taken directly from the examples
 * in the aqbjs Github documentation.
 *
 * https://github.com/arangodb/aqbjs
 */

/*
 * section aqb.js
 * https://github.com/arangodb/aqbjs#auto-casting-raw-data
 */
const doc = {
    aString: "hello",
    aDate: new Date(),
    aNumber: 23,
    anArray: [1, 2, 3, "potato"]
};

QB(doc);
QB.for('x').in('1..5').return('x');
QB.insert(QB(doc)).into('my_collection');

/*
 * section aqb.js
 * https://github.com/arangodb/aqbjs#aql-types
 */
QB.bool(true);
QB.num("12");
QB.int("1");
QB.str(23);
QB.list([ 1 , 2 , 3 , 4 , 5]);
QB.obj({'some.name': 'value'});
QB.ref("users");

/*
 * section aqb.js
 * https://github.com/arangodb/aqbjs#aql-expressions
 */
QB.range(1 , 5);
QB.get("property");
QB.ref("user").get("property");
QB.expr(QB.for('x').in('1..5').return('x').toAQL());

/*
 * section aqb.js
 * https://github.com/arangodb/aqbjs#aql-operations
 */
QB.and("a", "b");
QB.ref("a").and("b");
QB.or("a" , "b");
QB.ref("a").or("b");
QB.add("a"  , "b");
QB.ref("a").add("b");
QB.plus("a" , "b");
QB.ref("a").plus("b");
QB.sub("a" , "b");
QB.ref("a").sub("b");
QB.minus("a" , "b");
QB.ref("a").minus("b");
QB.mul("a" , "b");
QB.ref("a").mul("b");
QB.times("a" , "b");
QB.ref("a").times("b");
QB.div("a" , "b");
QB.ref("a").div("b");
QB.mod("a", "b");
QB.ref("a").mod("b");
QB.eq("a" , "b");
QB.ref("a").eq("b");
QB.neq("a", "b");
QB.ref("a").neq("b");
QB.gt("a" , "b");
QB.ref("a").gt("b");
QB.gte("a" , "b");
QB.ref("a").gte("b");
QB.lt("a" , "b");
QB.ref("a").lt("b");
QB.lte("a" , "b");
QB.ref("a").lte("b");
QB.in("a" , "b");
QB.ref("a").in("b");
QB.not("a");
QB.ref("a").not();
QB.notIn("a" , "b");
QB.ref("a").notIn("b");
QB.neg("a");
QB.ref("a").neg();
QB.if("x" , "y" , "z");
QB.ref("x").then("y").else("z");
QB.fn('MY::USER::FUNC')(1, 2, 3);
QB.fn('hello')();

/*
 * section aqb.js
 * https://github.com/arangodb/aqbjs#aql-statements
 */
QB.for('doc').in('my_collection');
QB.for('doc').in('my_collection').let('foo' , 23);
QB.for('doc').in('my_collection').let('foo' , 23);
// QB.for('doc').in('my_collection').let({a: 1, b: 2, c: 3});
QB.for('doc').in('my_collection').return('x');
QB.for('doc').in('my_collection').return({x: 'x'});
QB.for('doc').in('my_collection').returnDistinct('x');
QB.for('doc').in('my_collection').filter(QB.eq('a', 'b'));
QB.for('doc').in('my_collection').collectWithCountInto('x');
QB.for('doc').in('my_collection').collect('x', 'y');
// QB.for('doc').in('my_collection').collect({x: 'a', y: 'b'});
QB.for('doc').in('my_collection').collect('x' , 'y').withCountInto('z');
QB.for('doc').in('my_collection').collect('x' , 'y').into('z').keep('a' , 'b');
QB.for('doc').in('my_collection').collect('x' , 'y').into('z' , 'Z');
QB.for('doc').in('my_collection').collect('x' , 'y').into('z');
QB.for('doc').in('my_collection').collect('x' , 'y').into('z').options('opts');
QB.for('doc').in('my_collection').collect('x' , 'y').options('opts');
QB.for('doc').in('my_collection').collect('x' , 'y').keep('a' , 'b');
QB.for('doc').in('my_collection').collect('x' , 'y').sort('x', 'DESC', 'y', 'ASC');
QB.for('doc').in('my_collection').collect('x' , 'y').limit(20);
QB.for('doc').in('my_collection').collect('x' , 'y').limit(20 , 20);
QB.for('doc').in('my_collection').remove('x');
QB.for('doc').in('my_collection').remove('x').in('y');
QB.for('doc').in('my_collection').remove('x').in('y').returnOld('a');
QB.for('doc').in('my_collection').remove('x').in('y').options('opts');
QB.upsert('x').insert('y').replace('z').in('c');
QB.upsert('x').insert('y').replace('z').in('c').options('opts');
QB.upsert('x').insert('y').update('z').in('c');
QB.upsert('x').insert('y').update('z').in('c').options('opts');
QB.insert('x').into('y');
QB.insert('x').into('y').options('opts');
QB.insert('x').into('y').returnNew('z');
QB.update('x').in('y');
QB.update('x').into('y');
QB.update('x').with('y').in('z');
QB.update('x').with('y').into('z');
QB.update('x').with('y').into('z').options('opts');
QB.update('x').in('y').options('opts');
QB.update('x').with('y').into('z').returnNew('v');
QB.update('x').with('y').into('z').returnOld('v');
QB.update('x').in('y').options('opts').returnNew('v');
QB.update('x').in('y').options('opts').returnOld('v');

QB.replace('x').in('y');
QB.replace('x').into('y');
QB.replace('x').with('y').in('z');
QB.replace('x').with('y').into('z');
QB.replace('x').with('y').into('z').options('opts');
QB.replace('x').in('y').options('opts');
QB.replace('x').with('y').into('z').returnNew('v');
QB.replace('x').with('y').into('z').returnOld('v');
QB.replace('x').in('y').options('opts').returnNew('v');
QB.replace('x').in('y').options('opts').returnOld('v');
