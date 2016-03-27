// Type definitions for bson 0.4.21
// Project: https://github.com/mongodb/js-bson
// Definitions by: Hiroki Horiuchi <https://github.com/horiuchi/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts"/>


declare module 'bson' {

  namespace bson {

      export module BSONPure {

          export interface DeserializeOptions {
              /** {Boolean, default:false}, evaluate functions in the BSON document scoped to the object deserialized. */
              evalFunctions?: boolean;
              /** {Boolean, default:false}, cache evaluated functions for reuse. */
              cacheFunctions?: boolean;
              /** {Boolean, default:false}, use a crc32 code for caching, otherwise use the string of the function. */
              cacheFunctionsCrc32?: boolean;
              /** {Boolean, default:false}, deserialize Binary data directly into node.js Buffer object. */
              promoteBuffers?: boolean;
          }
          export class BSON {
              /**
               * @param {Object} object the Javascript object to serialize.
               * @param {Boolean} checkKeys the serializer will check if keys are valid.
               * @param {Boolean} asBuffer return the serialized object as a Buffer object (ignore).
               * @param {Boolean} serializeFunctions serialize the javascript functions (default:false)
               * @return {Buffer} returns a TypedArray or Array depending on what your browser supports
               */
              serialize(object: any, checkKeys?: boolean, asBuffer?: boolean, serializeFunctions?: boolean): Buffer;
              deserialize(buffer: Buffer, options?: DeserializeOptions, isArray?: boolean): any;
          }


          export interface Binary {}
          export interface BinaryStatic {
              SUBTYPE_DEFAULT: number;
              SUBTYPE_FUNCTION: number;
              SUBTYPE_BYTE_ARRAY: number;
              SUBTYPE_UUID_OLD: number;
              SUBTYPE_UUID: number;
              SUBTYPE_MD5: number;
              SUBTYPE_USER_DEFINED: number;

              new (buffer: Buffer, subType?: number): Binary;
          }
          export let Binary: BinaryStatic;

          export interface Code {}
          export interface CodeStatic {
              new (code: string | Function, scope?: any): Code;
          }
          export let Code: CodeStatic;

          export interface DBRef {}
          export interface DBRefStatic {
              new (namespace: string, oid: ObjectID, db?: string): DBRef;
          }
          export let DBRef: DBRefStatic;

          export interface Double {}
          export interface DoubleStatic {
              new (value: number): Double;
          }
          export let Double: DoubleStatic;

          export interface Long {}
          export interface LongStatic {
              new (low: number, high: number): Long;
              fromInt(i: number): Long;
              fromNumber(n: number): Long;
              fromBits(lowBits: number, highBits: number): Long;
              fromString(s: string, opt_radix?: number): Long;
          }
          export let Long: LongStatic;

          export interface MaxKey {}
          export interface MaxKeyStatic {
              new (): MaxKey;
          }
          export let MaxKey: MaxKeyStatic;

          export interface MinKey {}
          export interface MinKeyStatic {
              new (): MinKey;
          }
          export let MinKey: MinKeyStatic;

          export interface ObjectID {}
          export interface ObjectIDStatic {
              new (id?: number | string | ObjectID): ObjectID;
              createPk(): ObjectID;
              createFromTime(time: number): ObjectID;
              createFromHexString(hexString: string): ObjectID;
              isValid(id: number | string | ObjectID): boolean;
          }
          export let ObjectID: ObjectIDStatic;
          export let ObjectId: ObjectIDStatic;

          export interface BSONRegExp {}
          export interface BSONRegExpStatic {
              new (pattern: string, options: string): BSONRegExp;
          }
          export let BSONRegExp: BSONRegExpStatic;

          export interface Symbol {}
          export interface SymbolStatic {
              new (value: string): Symbol;
          }
          export let Symbol: SymbolStatic;

          export interface Timestamp {}
          export interface TimestampStatic {
              new (low: number, high: number): Timestamp;
              fromInt(i: number): Timestamp;
              fromNumber(n: number): Timestamp;
              fromBits(lowBits: number, highBits: number): Timestamp;
              fromString(s: string, opt_radix?: number): Timestamp;
          }
          export let Timestamp: TimestampStatic;

      }

      export let BSONNative: typeof BSONPure;

  }

  export = bson;
}

