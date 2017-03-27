/**
 * @enum
 */
export namespace MyGame.Example{
export enum Color{
  Red= 1, 
  Green= 2, 
  Blue= 8
}};

/**
 * @enum
 */
export namespace MyGame.Example{
export enum Any{
  NONE= 0, 
  Monster= 1, 
  TestSimpleTableWithEnum= 2, 
  MyGame_Example2_Monster= 3
}};

/**
 * @constructor
 */
export namespace MyGame.Example2{
export class Monster {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  bb: flatbuffers.ByteBuffer= null;

  /**
   * @type {number}
   */
  bb_pos: number = 0;
/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Monster}
 */
__init(i: number, bb: flatbuffers.ByteBuffer): Monster {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Monster=} obj
 * @returns {Monster}
 */
static getRootAsMonster(bb: flatbuffers.ByteBuffer, obj?: Monster): Monster {
  return (obj || new Monster).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Builder} builder
 */
static startMonster(builder: flatbuffers.Builder) {
  builder.startObject(0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
static endMonster(builder: flatbuffers.Builder): flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

}
}
/**
 * @constructor
 */
export namespace MyGame.Example{
export class Test {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  bb: flatbuffers.ByteBuffer= null;

  /**
   * @type {number}
   */
  bb_pos: number = 0;
/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Test}
 */
__init(i: number, bb: flatbuffers.ByteBuffer): Test {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @returns {number}
 */
a(): number {
  return this.bb.readInt16(this.bb_pos);
};

/**
 * @param {number} value
 * @returns {boolean}
 */
mutate_a(value: number): boolean {
  var offset = this.bb.__offset(this.bb_pos, 0);

  if (offset === 0) {
    return false;
  }

  this.bb.writeInt16(this.bb_pos + offset, value);
  return true;
};

/**
 * @returns {number}
 */
b(): number {
  return this.bb.readInt8(this.bb_pos + 2);
};

/**
 * @param {number} value
 * @returns {boolean}
 */
mutate_b(value: number): boolean {
  var offset = this.bb.__offset(this.bb_pos, 2);

  if (offset === 0) {
    return false;
  }

  this.bb.writeInt8(this.bb_pos + offset, value);
  return true;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} a
 * @param {number} b
 * @returns {flatbuffers.Offset}
 */
static createTest(builder: flatbuffers.Builder, a: number, b: number): flatbuffers.Offset {
  builder.prep(2, 4);
  builder.pad(1);
  builder.writeInt8(b);
  builder.writeInt16(a);
  return builder.offset();
};

}
}
/**
 * @constructor
 */
export namespace MyGame.Example{
export class TestSimpleTableWithEnum {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  bb: flatbuffers.ByteBuffer= null;

  /**
   * @type {number}
   */
  bb_pos: number = 0;
/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {TestSimpleTableWithEnum}
 */
__init(i: number, bb: flatbuffers.ByteBuffer): TestSimpleTableWithEnum {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {TestSimpleTableWithEnum=} obj
 * @returns {TestSimpleTableWithEnum}
 */
static getRootAsTestSimpleTableWithEnum(bb: flatbuffers.ByteBuffer, obj?: TestSimpleTableWithEnum): TestSimpleTableWithEnum {
  return (obj || new TestSimpleTableWithEnum).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {MyGame.Example.Color}
 */
color(): MyGame.Example.Color {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? /** @type {MyGame.Example.Color} */ (this.bb.readInt8(this.bb_pos + offset)) : MyGame.Example.Color.Green;
};

/**
 * @param {MyGame.Example.Color} value
 * @returns {boolean}
 */
mutate_color(value: MyGame.Example.Color): boolean {
  var offset = this.bb.__offset(this.bb_pos, 4);

  if (offset === 0) {
    return false;
  }

  this.bb.writeInt8(this.bb_pos + offset, value);
  return true;
};

/**
 * @param {flatbuffers.Builder} builder
 */
static startTestSimpleTableWithEnum(builder: flatbuffers.Builder) {
  builder.startObject(1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {MyGame.Example.Color} color
 */
static addColor(builder: flatbuffers.Builder, color: MyGame.Example.Color) {
  builder.addFieldInt8(0, color, MyGame.Example.Color.Green);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
static endTestSimpleTableWithEnum(builder: flatbuffers.Builder): flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

}
}
/**
 * @constructor
 */
export namespace MyGame.Example{
export class Vec3 {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  bb: flatbuffers.ByteBuffer= null;

  /**
   * @type {number}
   */
  bb_pos: number = 0;
/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Vec3}
 */
__init(i: number, bb: flatbuffers.ByteBuffer): Vec3 {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @returns {number}
 */
x(): number {
  return this.bb.readFloat32(this.bb_pos);
};

/**
 * @param {number} value
 * @returns {boolean}
 */
mutate_x(value: number): boolean {
  var offset = this.bb.__offset(this.bb_pos, 0);

  if (offset === 0) {
    return false;
  }

  this.bb.writeFloat32(this.bb_pos + offset, value);
  return true;
};

/**
 * @returns {number}
 */
y(): number {
  return this.bb.readFloat32(this.bb_pos + 4);
};

/**
 * @param {number} value
 * @returns {boolean}
 */
mutate_y(value: number): boolean {
  var offset = this.bb.__offset(this.bb_pos, 4);

  if (offset === 0) {
    return false;
  }

  this.bb.writeFloat32(this.bb_pos + offset, value);
  return true;
};

/**
 * @returns {number}
 */
z(): number {
  return this.bb.readFloat32(this.bb_pos + 8);
};

/**
 * @param {number} value
 * @returns {boolean}
 */
mutate_z(value: number): boolean {
  var offset = this.bb.__offset(this.bb_pos, 8);

  if (offset === 0) {
    return false;
  }

  this.bb.writeFloat32(this.bb_pos + offset, value);
  return true;
};

/**
 * @returns {number}
 */
test1(): number {
  return this.bb.readFloat64(this.bb_pos + 16);
};

/**
 * @param {number} value
 * @returns {boolean}
 */
mutate_test1(value: number): boolean {
  var offset = this.bb.__offset(this.bb_pos, 16);

  if (offset === 0) {
    return false;
  }

  this.bb.writeFloat64(this.bb_pos + offset, value);
  return true;
};

/**
 * @returns {MyGame.Example.Color}
 */
test2(): MyGame.Example.Color {
  return /** @type {MyGame.Example.Color} */ (this.bb.readInt8(this.bb_pos + 24));
};

/**
 * @param {MyGame.Example.Color} value
 * @returns {boolean}
 */
mutate_test2(value: MyGame.Example.Color): boolean {
  var offset = this.bb.__offset(this.bb_pos, 24);

  if (offset === 0) {
    return false;
  }

  this.bb.writeInt8(this.bb_pos + offset, value);
  return true;
};

/**
 * @param {MyGame.Example.Test=} obj
 * @returns {MyGame.Example.Test}
 */
test3(obj?: MyGame.Example.Test): MyGame.Example.Test {
  return (obj || new MyGame.Example.Test).__init(this.bb_pos + 26, this.bb);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} test1
 * @param {MyGame.Example.Color} test2
 * @param {number} test3_a
 * @param {number} test3_b
 * @returns {flatbuffers.Offset}
 */
static createVec3(builder: flatbuffers.Builder, x: number, y: number, z: number, test1: number, test2: MyGame.Example.Color, test3_a: number, test3_b: number): flatbuffers.Offset {
  builder.prep(16, 32);
  builder.pad(2);
  builder.prep(2, 4);
  builder.pad(1);
  builder.writeInt8(test3_b);
  builder.writeInt16(test3_a);
  builder.pad(1);
  builder.writeInt8(test2);
  builder.writeFloat64(test1);
  builder.pad(4);
  builder.writeFloat32(z);
  builder.writeFloat32(y);
  builder.writeFloat32(x);
  return builder.offset();
};

}
}
/**
 * @constructor
 */
export namespace MyGame.Example{
export class Stat {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  bb: flatbuffers.ByteBuffer= null;

  /**
   * @type {number}
   */
  bb_pos: number = 0;
/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Stat}
 */
__init(i: number, bb: flatbuffers.ByteBuffer): Stat {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Stat=} obj
 * @returns {Stat}
 */
static getRootAsStat(bb: flatbuffers.ByteBuffer, obj?: Stat): Stat {
  return (obj || new Stat).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
id(): string
id(optionalEncoding: flatbuffers.Encoding): string|Uint8Array
id(optionalEncoding?: any): string|Uint8Array {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns {flatbuffers.Long}
 */
val(): flatbuffers.Long {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @param {flatbuffers.Long} value
 * @returns {boolean}
 */
mutate_val(value: flatbuffers.Long): boolean {
  var offset = this.bb.__offset(this.bb_pos, 6);

  if (offset === 0) {
    return false;
  }

  this.bb.writeInt64(this.bb_pos + offset, value);
  return true;
};

/**
 * @returns {number}
 */
count(): number {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.readUint16(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
static startStat(builder: flatbuffers.Builder) {
  builder.startObject(3);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} idOffset
 */
static addId(builder: flatbuffers.Builder, idOffset: flatbuffers.Offset) {
  builder.addFieldOffset(0, idOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} val
 */
static addVal(builder: flatbuffers.Builder, val: flatbuffers.Long) {
  builder.addFieldInt64(1, val, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} count
 */
static addCount(builder: flatbuffers.Builder, count: number) {
  builder.addFieldInt16(2, count, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
static endStat(builder: flatbuffers.Builder): flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

}
}
/**
 * an example documentation comment: monster object
 *
 * @constructor
 */
export namespace MyGame.Example{
export class Monster {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  bb: flatbuffers.ByteBuffer= null;

  /**
   * @type {number}
   */
  bb_pos: number = 0;
/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Monster}
 */
__init(i: number, bb: flatbuffers.ByteBuffer): Monster {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Monster=} obj
 * @returns {Monster}
 */
static getRootAsMonster(bb: flatbuffers.ByteBuffer, obj?: Monster): Monster {
  return (obj || new Monster).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {boolean}
 */
static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean {
  return bb.__has_identifier('MONS');
};

/**
 * @param {MyGame.Example.Vec3=} obj
 * @returns {MyGame.Example.Vec3}
 */
pos(obj?: MyGame.Example.Vec3): MyGame.Example.Vec3 {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new MyGame.Example.Vec3).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @returns {number}
 */
mana(): number {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readInt16(this.bb_pos + offset) : 150;
};

/**
 * @param {number} value
 * @returns {boolean}
 */
mutate_mana(value: number): boolean {
  var offset = this.bb.__offset(this.bb_pos, 6);

  if (offset === 0) {
    return false;
  }

  this.bb.writeInt16(this.bb_pos + offset, value);
  return true;
};

/**
 * @returns {number}
 */
hp(): number {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.readInt16(this.bb_pos + offset) : 100;
};

/**
 * @param {number} value
 * @returns {boolean}
 */
mutate_hp(value: number): boolean {
  var offset = this.bb.__offset(this.bb_pos, 8);

  if (offset === 0) {
    return false;
  }

  this.bb.writeInt16(this.bb_pos + offset, value);
  return true;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
name(): string
name(optionalEncoding: flatbuffers.Encoding): string|Uint8Array
name(optionalEncoding?: any): string|Uint8Array {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {number} index
 * @returns {number}
 */
inventory(index: number): number {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns {number}
 */
inventoryLength(): number {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
inventoryArray(): Uint8Array {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @returns {MyGame.Example.Color}
 */
color(): MyGame.Example.Color {
  var offset = this.bb.__offset(this.bb_pos, 16);
  return offset ? /** @type {MyGame.Example.Color} */ (this.bb.readInt8(this.bb_pos + offset)) : MyGame.Example.Color.Blue;
};

/**
 * @param {MyGame.Example.Color} value
 * @returns {boolean}
 */
mutate_color(value: MyGame.Example.Color): boolean {
  var offset = this.bb.__offset(this.bb_pos, 16);

  if (offset === 0) {
    return false;
  }

  this.bb.writeInt8(this.bb_pos + offset, value);
  return true;
};

/**
 * @returns {MyGame.Example.Any}
 */
testType(): MyGame.Example.Any {
  var offset = this.bb.__offset(this.bb_pos, 18);
  return offset ? /** @type {MyGame.Example.Any} */ (this.bb.readUint8(this.bb_pos + offset)) : MyGame.Example.Any.NONE;
};

/**
 * @param {flatbuffers.Table} obj
 * @returns {?flatbuffers.Table}
 */
test<T extends flatbuffers.Table>(obj: T): T {
  var offset = this.bb.__offset(this.bb_pos, 20);
  return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
};

/**
 * @param {number} index
 * @param {MyGame.Example.Test=} obj
 * @returns {MyGame.Example.Test}
 */
test4(index: number, obj?: MyGame.Example.Test): MyGame.Example.Test {
  var offset = this.bb.__offset(this.bb_pos, 22);
  return offset ? (obj || new MyGame.Example.Test).__init(this.bb.__vector(this.bb_pos + offset) + index * 4, this.bb) : null;
};

/**
 * @returns {number}
 */
test4Length(): number {
  var offset = this.bb.__offset(this.bb_pos, 22);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
testarrayofstring(index: number): string
testarrayofstring(index: number, optionalEncoding: flatbuffers.Encoding): string|Uint8Array
testarrayofstring(index: number, optionalEncoding?: any): string|Uint8Array {
  var offset = this.bb.__offset(this.bb_pos, 24);
  return offset ? this.bb.__string(this.bb.__vector(this.bb_pos + offset) + index * 4, optionalEncoding) : null;
};

/**
 * @returns {number}
 */
testarrayofstringLength(): number {
  var offset = this.bb.__offset(this.bb_pos, 24);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * an example documentation comment: this will end up in the generated code
 * multiline too
 *
 * @param {number} index
 * @param {MyGame.Example.Monster=} obj
 * @returns {MyGame.Example.Monster}
 */
testarrayoftables(index: number, obj?: MyGame.Example.Monster): MyGame.Example.Monster {
  var offset = this.bb.__offset(this.bb_pos, 26);
  return offset ? (obj || new MyGame.Example.Monster).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
};

/**
 * @returns {number}
 */
testarrayoftablesLength(): number {
  var offset = this.bb.__offset(this.bb_pos, 26);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param {MyGame.Example.Monster=} obj
 * @returns {MyGame.Example.Monster}
 */
enemy(obj?: MyGame.Example.Monster): MyGame.Example.Monster {
  var offset = this.bb.__offset(this.bb_pos, 28);
  return offset ? (obj || new MyGame.Example.Monster).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
};

/**
 * @param {number} index
 * @returns {number}
 */
testnestedflatbuffer(index: number): number {
  var offset = this.bb.__offset(this.bb_pos, 30);
  return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns {number}
 */
testnestedflatbufferLength(): number {
  var offset = this.bb.__offset(this.bb_pos, 30);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
testnestedflatbufferArray(): Uint8Array {
  var offset = this.bb.__offset(this.bb_pos, 30);
  return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {MyGame.Example.Stat=} obj
 * @returns {MyGame.Example.Stat}
 */
testempty(obj?: MyGame.Example.Stat): MyGame.Example.Stat {
  var offset = this.bb.__offset(this.bb_pos, 32);
  return offset ? (obj || new MyGame.Example.Stat).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
};

/**
 * @returns {boolean}
 */
testbool(): boolean {
  var offset = this.bb.__offset(this.bb_pos, 34);
  return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
};

/**
 * @returns {number}
 */
testhashs32Fnv1(): number {
  var offset = this.bb.__offset(this.bb_pos, 36);
  return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @param {number} value
 * @returns {boolean}
 */
mutate_testhashs32_fnv1(value: number): boolean {
  var offset = this.bb.__offset(this.bb_pos, 36);

  if (offset === 0) {
    return false;
  }

  this.bb.writeInt32(this.bb_pos + offset, value);
  return true;
};

/**
 * @returns {number}
 */
testhashu32Fnv1(): number {
  var offset = this.bb.__offset(this.bb_pos, 38);
  return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @returns {flatbuffers.Long}
 */
testhashs64Fnv1(): flatbuffers.Long {
  var offset = this.bb.__offset(this.bb_pos, 40);
  return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @param {flatbuffers.Long} value
 * @returns {boolean}
 */
mutate_testhashs64_fnv1(value: flatbuffers.Long): boolean {
  var offset = this.bb.__offset(this.bb_pos, 40);

  if (offset === 0) {
    return false;
  }

  this.bb.writeInt64(this.bb_pos + offset, value);
  return true;
};

/**
 * @returns {flatbuffers.Long}
 */
testhashu64Fnv1(): flatbuffers.Long {
  var offset = this.bb.__offset(this.bb_pos, 42);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @returns {number}
 */
testhashs32Fnv1a(): number {
  var offset = this.bb.__offset(this.bb_pos, 44);
  return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @param {number} value
 * @returns {boolean}
 */
mutate_testhashs32_fnv1a(value: number): boolean {
  var offset = this.bb.__offset(this.bb_pos, 44);

  if (offset === 0) {
    return false;
  }

  this.bb.writeInt32(this.bb_pos + offset, value);
  return true;
};

/**
 * @returns {number}
 */
testhashu32Fnv1a(): number {
  var offset = this.bb.__offset(this.bb_pos, 46);
  return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @returns {flatbuffers.Long}
 */
testhashs64Fnv1a(): flatbuffers.Long {
  var offset = this.bb.__offset(this.bb_pos, 48);
  return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @param {flatbuffers.Long} value
 * @returns {boolean}
 */
mutate_testhashs64_fnv1a(value: flatbuffers.Long): boolean {
  var offset = this.bb.__offset(this.bb_pos, 48);

  if (offset === 0) {
    return false;
  }

  this.bb.writeInt64(this.bb_pos + offset, value);
  return true;
};

/**
 * @returns {flatbuffers.Long}
 */
testhashu64Fnv1a(): flatbuffers.Long {
  var offset = this.bb.__offset(this.bb_pos, 50);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @param {number} index
 * @returns {boolean}
 */
testarrayofbools(index: number): boolean {
  var offset = this.bb.__offset(this.bb_pos, 52);
  return offset ? !!this.bb.readInt8(this.bb.__vector(this.bb_pos + offset) + index) : false;
};

/**
 * @returns {number}
 */
testarrayofboolsLength(): number {
  var offset = this.bb.__offset(this.bb_pos, 52);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Int8Array}
 */
testarrayofboolsArray(): Int8Array {
  var offset = this.bb.__offset(this.bb_pos, 52);
  return offset ? new Int8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @returns {number}
 */
testf(): number {
  var offset = this.bb.__offset(this.bb_pos, 54);
  return offset ? this.bb.readFloat32(this.bb_pos + offset) : 3.14159;
};

/**
 * @param {number} value
 * @returns {boolean}
 */
mutate_testf(value: number): boolean {
  var offset = this.bb.__offset(this.bb_pos, 54);

  if (offset === 0) {
    return false;
  }

  this.bb.writeFloat32(this.bb_pos + offset, value);
  return true;
};

/**
 * @returns {number}
 */
testf2(): number {
  var offset = this.bb.__offset(this.bb_pos, 56);
  return offset ? this.bb.readFloat32(this.bb_pos + offset) : 3.0;
};

/**
 * @param {number} value
 * @returns {boolean}
 */
mutate_testf2(value: number): boolean {
  var offset = this.bb.__offset(this.bb_pos, 56);

  if (offset === 0) {
    return false;
  }

  this.bb.writeFloat32(this.bb_pos + offset, value);
  return true;
};

/**
 * @returns {number}
 */
testf3(): number {
  var offset = this.bb.__offset(this.bb_pos, 58);
  return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0.0;
};

/**
 * @param {number} value
 * @returns {boolean}
 */
mutate_testf3(value: number): boolean {
  var offset = this.bb.__offset(this.bb_pos, 58);

  if (offset === 0) {
    return false;
  }

  this.bb.writeFloat32(this.bb_pos + offset, value);
  return true;
};

/**
 * @param {number} index
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
testarrayofstring2(index: number): string
testarrayofstring2(index: number, optionalEncoding: flatbuffers.Encoding): string|Uint8Array
testarrayofstring2(index: number, optionalEncoding?: any): string|Uint8Array {
  var offset = this.bb.__offset(this.bb_pos, 60);
  return offset ? this.bb.__string(this.bb.__vector(this.bb_pos + offset) + index * 4, optionalEncoding) : null;
};

/**
 * @returns {number}
 */
testarrayofstring2Length(): number {
  var offset = this.bb.__offset(this.bb_pos, 60);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
static startMonster(builder: flatbuffers.Builder) {
  builder.startObject(29);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} posOffset
 */
static addPos(builder: flatbuffers.Builder, posOffset: flatbuffers.Offset) {
  builder.addFieldStruct(0, posOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} mana
 */
static addMana(builder: flatbuffers.Builder, mana: number) {
  builder.addFieldInt16(1, mana, 150);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} hp
 */
static addHp(builder: flatbuffers.Builder, hp: number) {
  builder.addFieldInt16(2, hp, 100);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} nameOffset
 */
static addName(builder: flatbuffers.Builder, nameOffset: flatbuffers.Offset) {
  builder.addFieldOffset(3, nameOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} inventoryOffset
 */
static addInventory(builder: flatbuffers.Builder, inventoryOffset: flatbuffers.Offset) {
  builder.addFieldOffset(5, inventoryOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
static createInventoryVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset {
if (!data){
  return null
}
  builder.startVector(1, data.length, 1);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
static startInventoryVector(builder: flatbuffers.Builder, numElems: number) {
  builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {MyGame.Example.Color} color
 */
static addColor(builder: flatbuffers.Builder, color: MyGame.Example.Color) {
  builder.addFieldInt8(6, color, MyGame.Example.Color.Blue);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {MyGame.Example.Any} testType
 */
static addTestType(builder: flatbuffers.Builder, testType: MyGame.Example.Any) {
  builder.addFieldInt8(7, testType, MyGame.Example.Any.NONE);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} testOffset
 */
static addTest(builder: flatbuffers.Builder, testOffset: flatbuffers.Offset) {
  builder.addFieldOffset(8, testOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} test4Offset
 */
static addTest4(builder: flatbuffers.Builder, test4Offset: flatbuffers.Offset) {
  builder.addFieldOffset(9, test4Offset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
static startTest4Vector(builder: flatbuffers.Builder, numElems: number) {
  builder.startVector(4, numElems, 2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} testarrayofstringOffset
 */
static addTestarrayofstring(builder: flatbuffers.Builder, testarrayofstringOffset: flatbuffers.Offset) {
  builder.addFieldOffset(10, testarrayofstringOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Offset>} data
 * @returns {flatbuffers.Offset}
 */
static createTestarrayofstringVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset {
if (!data){
  return null
}
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
static startTestarrayofstringVector(builder: flatbuffers.Builder, numElems: number) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} testarrayoftablesOffset
 */
static addTestarrayoftables(builder: flatbuffers.Builder, testarrayoftablesOffset: flatbuffers.Offset) {
  builder.addFieldOffset(11, testarrayoftablesOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Offset>} data
 * @returns {flatbuffers.Offset}
 */
static createTestarrayoftablesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset {
if (!data){
  return null
}
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
static startTestarrayoftablesVector(builder: flatbuffers.Builder, numElems: number) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} enemyOffset
 */
static addEnemy(builder: flatbuffers.Builder, enemyOffset: flatbuffers.Offset) {
  builder.addFieldOffset(12, enemyOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} testnestedflatbufferOffset
 */
static addTestnestedflatbuffer(builder: flatbuffers.Builder, testnestedflatbufferOffset: flatbuffers.Offset) {
  builder.addFieldOffset(13, testnestedflatbufferOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
static createTestnestedflatbufferVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset {
if (!data){
  return null
}
  builder.startVector(1, data.length, 1);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
static startTestnestedflatbufferVector(builder: flatbuffers.Builder, numElems: number) {
  builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} testemptyOffset
 */
static addTestempty(builder: flatbuffers.Builder, testemptyOffset: flatbuffers.Offset) {
  builder.addFieldOffset(14, testemptyOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {boolean} testbool
 */
static addTestbool(builder: flatbuffers.Builder, testbool: boolean) {
  builder.addFieldInt8(15, +testbool, +false);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} testhashs32Fnv1
 */
static addTesthashs32Fnv1(builder: flatbuffers.Builder, testhashs32Fnv1: number) {
  builder.addFieldInt32(16, testhashs32Fnv1, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} testhashu32Fnv1
 */
static addTesthashu32Fnv1(builder: flatbuffers.Builder, testhashu32Fnv1: number) {
  builder.addFieldInt32(17, testhashu32Fnv1, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} testhashs64Fnv1
 */
static addTesthashs64Fnv1(builder: flatbuffers.Builder, testhashs64Fnv1: flatbuffers.Long) {
  builder.addFieldInt64(18, testhashs64Fnv1, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} testhashu64Fnv1
 */
static addTesthashu64Fnv1(builder: flatbuffers.Builder, testhashu64Fnv1: flatbuffers.Long) {
  builder.addFieldInt64(19, testhashu64Fnv1, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} testhashs32Fnv1a
 */
static addTesthashs32Fnv1a(builder: flatbuffers.Builder, testhashs32Fnv1a: number) {
  builder.addFieldInt32(20, testhashs32Fnv1a, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} testhashu32Fnv1a
 */
static addTesthashu32Fnv1a(builder: flatbuffers.Builder, testhashu32Fnv1a: number) {
  builder.addFieldInt32(21, testhashu32Fnv1a, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} testhashs64Fnv1a
 */
static addTesthashs64Fnv1a(builder: flatbuffers.Builder, testhashs64Fnv1a: flatbuffers.Long) {
  builder.addFieldInt64(22, testhashs64Fnv1a, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} testhashu64Fnv1a
 */
static addTesthashu64Fnv1a(builder: flatbuffers.Builder, testhashu64Fnv1a: flatbuffers.Long) {
  builder.addFieldInt64(23, testhashu64Fnv1a, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} testarrayofboolsOffset
 */
static addTestarrayofbools(builder: flatbuffers.Builder, testarrayofboolsOffset: flatbuffers.Offset) {
  builder.addFieldOffset(24, testarrayofboolsOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<boolean>} data
 * @returns {flatbuffers.Offset}
 */
static createTestarrayofboolsVector(builder: flatbuffers.Builder, data: boolean[]): flatbuffers.Offset {
if (!data){
  return null
}
  builder.startVector(1, data.length, 1);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt8(+data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
static startTestarrayofboolsVector(builder: flatbuffers.Builder, numElems: number) {
  builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} testf
 */
static addTestf(builder: flatbuffers.Builder, testf: number) {
  builder.addFieldFloat32(25, testf, 3.14159);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} testf2
 */
static addTestf2(builder: flatbuffers.Builder, testf2: number) {
  builder.addFieldFloat32(26, testf2, 3.0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} testf3
 */
static addTestf3(builder: flatbuffers.Builder, testf3: number) {
  builder.addFieldFloat32(27, testf3, 0.0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} testarrayofstring2Offset
 */
static addTestarrayofstring2(builder: flatbuffers.Builder, testarrayofstring2Offset: flatbuffers.Offset) {
  builder.addFieldOffset(28, testarrayofstring2Offset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Offset>} data
 * @returns {flatbuffers.Offset}
 */
static createTestarrayofstring2Vector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset {
if (!data){
  return null
}
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
static startTestarrayofstring2Vector(builder: flatbuffers.Builder, numElems: number) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
static endMonster(builder: flatbuffers.Builder): flatbuffers.Offset {
  var offset = builder.endObject();
  builder.requiredField(offset, 10); // name
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
static finishMonsterBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset) {
  builder.finish(offset, 'MONS');
};

}
}
