import { connect, Cursor } from 'mongodb';
import { connectionString } from '../index';
import { ObjectId } from 'bson';

/**
 * test the FilterQuery type using collection.find<T>() method
 * Monog uses FilterQuery type for every method that performs a document search
 * for example: findX, updateX, deleteX, distinct, countDocuments
 * So we don't add duplicate tests for every collection method and only use find
 */
async function run() {
  const client = await connect(connectionString);
  const db = client.db('test');

  /**
   * Test the generic FilterQuery using collection.find<T>() method
   */

  // a collection model for all possible MongoDB BSON types and TypeScript types
  interface UserModel {
    _id: ObjectId;        // ObjectId field
    name?: string;        // optional field
    family: string;       // string field
    age: number;          // number field
    gender: 'male' | 'female' | 'other'; // union field
    isBanned: boolean;    // boolean field
    addedBy?: UserModel;   // object field (Embedded/Nested Documents)
    createdAt: Date;       // date field
    schools: string[];     // array of string
    scores: number[];      // array of number
    friends?: UserModel[]; // array of objects
  }

  const sampleUser: UserModel = {
    _id: new ObjectId("577fa2d90c4cc47e31cf4b6f"),
    name: 'Peter',
    family: 'Anderson',
    age: 30,
    gender: 'male',
    isBanned: false,
    createdAt: new Date(),
    schools: ['s1', 's2'],
    scores: [100, 80, 90],
  };

  const collectionT = db.collection<UserModel>('test.filterQuery');

  /**
   * test simple field queries e.g. { name: 'John' }
   */
  /// it should query __string__ fields
  await collectionT.find({ name: 'John' }).toArray();
  // it should query string fields by regex
  await collectionT.find({ name: /Joh/i }).toArray();
  // it should query string fields by RegExp object
  await collectionT.find({ name: new RegExp('Joh', 'i') }).toArray();
  /// it should not accept wrong types for string fields
  // $ExpectError
  await collectionT.find({ name: 23 }).toArray();
  // $ExpectError
  await collectionT.find({ name: { prefix: 'Dr' } }).toArray();
  // $ExpectError
  await collectionT.find({ name: [ 'John' ] }).toArray();

  /// it should query __number__ fields
  await collectionT.find({ age: 12 }).toArray();
  /// it should not accept wrong types for number fields
  // $ExpectError
  await collectionT.find({ age: /12/i }).toArray(); // it cannot query number fields by regex
  // $ExpectError
  await collectionT.find({ age: '23' }).toArray();
  // $ExpectError
  await collectionT.find({ age: { prefix: 43 } }).toArray();
  // $ExpectError
  await collectionT.find({ age: [ 23, 43 ] }).toArray();

  /// it should query __nested document__ fields only by exact match
  // TODO: we currently cannot enforce field order but field order is important for mongo
  await collectionT.find({ addedBy: sampleUser }).toArray();
  /// nested documents query should contain all required fields
  // $ExpectError
  await collectionT.find({ addedBy: { family: 'Anderson' } }).toArray();
  /// it should not accept wrong types for nested document fields
  // $ExpectError
  await collectionT.find({ addedBy: 21 }).toArray();
  // $ExpectError
  await collectionT.find({ addedBy: 'Anderson' }).toArray();
  // $ExpectError
  await collectionT.find({ addedBy: [ sampleUser ] }).toArray();
  // $ExpectError
  await collectionT.find({ addedBy: [ { family: 'Anderson' } ] }).toArray();

  /// it should query __array__ fields by exact match
  await collectionT.find({ schools: ['s1', 's2', 's3'] }).toArray();
  /// it should query __array__ fields by element type
  await collectionT.find({ schools: 's1' }).toArray();
  await collectionT.find({ schools: /s1/i }).toArray();
  await collectionT.find({ scores: 23 }).toArray();
  await collectionT.find({ friends: sampleUser }).toArray();
  /// it should not query array fields by wrong types
  // $ExpectError
  await collectionT.find({ schools: 12 }).toArray();
  // $ExpectError
  await collectionT.find({ scores: 'high' }).toArray();
  // $ExpectError
  await collectionT.find({ friends: { name: 'hellow' } }).toArray();

  /// it should accept MongoDB ObjectId and Date as query parameter
  await collectionT.find({ createdAt: new Date() }).toArray();
  await collectionT.find({ _id: new ObjectId() }).toArray();
  /// it should not accept other types for ObjectId and Date
  // $ExpectError
  await collectionT.find({ createdAt: { a: 12 } }).toArray();
  // $ExpectError
  await collectionT.find({ createdAt: sampleUser }).toArray();
  // $ExpectError
  await collectionT.find({ _id: "577fa2d90c4cc47e31cf4b6f" }).toArray();
  // $ExpectError
  await collectionT.find({ _id: { a: 12 } }).toArray();

  /**
   * test comparison query operators
   */
  /// $eq $ne $gt $gte $lt $lte queries should behave exactly like simple queries above
  await collectionT.find({ name: { $eq: 'John' } }).toArray();
  await collectionT.find({ name: { $eq: /Jack/ } }).toArray();
  await collectionT.find({ gender: { $eq: 'male' } }).toArray();
  await collectionT.find({ age: { $gt: 12, $lt: 13 } }).toArray();
  await collectionT.find({ schools: { $eq: '12' } }).toArray();
  await collectionT.find({ scores: { $gte: 23 } }).toArray();
  await collectionT.find({ createdAt: { $lte: new Date() } }).toArray();
  await collectionT.find({ friends: { $ne: sampleUser } }).toArray();
  /// it should not accept wrong queries
  // $ExpectError
  await collectionT.find({ name: { $ne: 12 }}).toArray();
  // $ExpectError
  await collectionT.find({ gender: { $eq: '123' }}).toArray();
  // $ExpectError
  await collectionT.find({ createdAt: { $lte: '1232' } }).toArray();
  /// it should not accept undefined query selectors in query object
  // $ExpectError
  await collectionT.find({ age: { $undefined: 12 } }).toArray();

  /// it should query simple fields using $in and $nin selectors
  await collectionT.find({ name: { $in: [ 'John', 'Jack', 'Joe' ] } }).toArray();
  await collectionT.find({ age: { $in: [ 12, 13 ] } }).toArray();
  await collectionT.find({ friends: { $in: [ sampleUser ] } }).toArray();
  await collectionT.find({ createdAt: { $nin: [ new Date() ] } }).toArray();
  /// it should query array fields using $in and $nin selectors
  await collectionT.find({ schools: { $in: [ 's1', 's21', 's43' ] } }).toArray();
  await collectionT.find({ schools: { $in: [ /r1/, /s21/, /s43/ ] } }).toArray();
  await collectionT.find({ scores: { $in: [ 23, 43 ] } }).toArray();
  await collectionT.find({ scores: { $in: [ [ 100, 90, 80 ] ] } }).toArray();
  /// it should not accept wrong params for $in and $nin selectors
  // $ExpectError
  await collectionT.find({ name: { $in: [ 'John', 32, 42 ] } }).toArray();
  // $ExpectError
  await collectionT.find({ age: { $in: [ /12/, 12 ] } }).toArray();
  // $ExpectError
  await collectionT.find({ createdAt: { $nin: [ 12 ] } }).toArray();
  // $ExpectError
  await collectionT.find({ friends: { $in: [ { name: 'Pete' } ] } }).toArray();
  // $ExpectError
  await collectionT.find({ schools: { $in: [ { $eq: 21 } ] }}).toArray();

  /**
   * test logical query operators
   */
  /// it should accept any query selector for __$not operator__
  await collectionT.find({ name: { $not: { $eq: 'John' } } }).toArray();
  /// it should accept regex for string fields
  await collectionT.find({ name: { $not: /Hi/i } }).toArray();
  await collectionT.find({ schools: { $not: /Hi/ } }).toArray();
  /// it should not accept simple queries in $not operator
  // $ExpectError
  await collectionT.find({ name: { $not: 'John' } }).toArray();
  /// it should not accept regex for non strings
  // $ExpectError
  await collectionT.find({ age: { $not: /sdsd/ } }).toArray();

  /// it should accept any filter query for __$and, $or, $nor operator__
  await collectionT.find({ $and: [ { name: 'John' } ]}).toArray();
  await collectionT.find({ $and: [ { name: 'John' }, { age: { $in: [ 12, 14 ] } } ]}).toArray();
  await collectionT.find({ $or: [ { name: /John/i }, { schools: 's12' } ]}).toArray();
  await collectionT.find({ $nor: [ { name: { $ne: 'John' } } ]}).toArray();
  /// it should not accept __$and, $or, $nor operator__ as non-root query
  // $ExpectError
  await collectionT.find({ name: { $or: [ 'John', 'Joe' ] } }).toArray();
  /// it should not accept single objects for __$and, $or, $nor operator__ query
  // $ExpectError
  await collectionT.find({ $and: { name: 'John' } }).toArray();

  /**
   * test 'element' query operators
   */
  /// it should query using $exists
  await collectionT.find({ name: { $exists: true } }).toArray();
  await collectionT.find({ name: { $exists: false } }).toArray();
  /// it should not query $exists by wrong values
  // $ExpectError
  await collectionT.find({ name: { $exists: '' } }).toArray();
  // $ExpectError
  await collectionT.find({ name: { $exists: 'true' } }).toArray();

  /**
   * test evaluation query operators
   */
  /// it should query using $regex
  await collectionT.find({ name: { $regex: /12/i } }).toArray();
  /// it should query using $regex and $options
  await collectionT.find({ name: { $regex: /12/, $options: 'i' } }).toArray();
  /// it should not accept $regex for none string fields
  // $ExpectError
  await collectionT.find({ age: { $regex: /12/ } }).toArray();
  // $ExpectError
  await collectionT.find({ age: { $options: '3' } }).toArray();

  /// it should query using $mod
  await collectionT.find({ age: { $mod: [ 12, 2 ] } }).toArray();
  /// it should not accept $mod for none number fields
  // $ExpectError
  await collectionT.find({ name: { $mod: [ 12, 2 ] } }).toArray();
  /// it should not accept $mod with less/more than 2 elements
  // $ExpectError
  await collectionT.find({ age: { $mod: [ 12, 2, 2 ] } }).toArray();
  // $ExpectError
  await collectionT.find({ age: { $mod: [ 12 ] } }).toArray();
  // $ExpectError
  await collectionT.find({ age: { $mod: [ ] } }).toArray();

  /// it should fulltext search using $text
  await collectionT.find({ $text: { $search: 'Hello' } }).toArray();
  await collectionT.find({ $text: { $search: 'Hello', $caseSensitive: true } }).toArray();
  /// it should fulltext search only by string
  // $ExpectError
  await collectionT.find({ $text: { $search: 21, $caseSensitive: 'true' } }).toArray();
  // $ExpectError
  await collectionT.find({ $text: { $search: { name: 'hellow' } } }).toArray();
  // $ExpectError
  await collectionT.find({ $text: { $search: /regex/g } }).toArray();

  /// it should query using $where
  await collectionT.find({ $where: "functin() { return true }" }).toArray();
  await collectionT.find({ $where: function (this: any) { return this.name === "hellow"; }}).toArray();
  /// it should not fail when $where is not Function or String
  // $ExpectError
  await collectionT.find({ $where: 12 }).toArray();
  // $ExpectError
  await collectionT.find({ $where: /regex/g }).toArray();

  /**
   * test array query operators
   */
  /// it should query array fields
  await collectionT.find({ schools: { $size: 2 } }).toArray();
  await collectionT.find({ schools: { $all: [ 's1', 's2' ] } }).toArray();
  await collectionT.find({ friends: { $elemMatch: { name: 'Joe' } } }).toArray();
  /// it should not query non array fields
  // $ExpectError
  await collectionT.find({ name: { $all: [ 'world', 'world' ] } }).toArray();
  // $ExpectError
  await collectionT.find({ age: { $elemMatch: [ 'world', 'world' ] } }).toArray();
  // $ExpectError
  await collectionT.find({ gender: { $size: 2 } }).toArray();
}
