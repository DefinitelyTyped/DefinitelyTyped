import { flatbuffers } from "flatbuffers";

enum Color {
  Red= 1,
  Green= 2,
  Blue= 8
}

enum Any {
  NONE= 0,
  Monster= 1,
  TestSimpleTableWithEnum= 2,
  MyGame_Example2_Monster= 3
}

class Monster2 {
  bb: flatbuffers.ByteBuffer= null;

  bb_pos: number = 0;

  __init(i: number, bb: flatbuffers.ByteBuffer): Monster2 {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsMonster(bb: flatbuffers.ByteBuffer, obj?: Monster2): Monster2 {
    return (obj || new Monster2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static startMonster(builder: flatbuffers.Builder) {
    builder.startObject(0);
  }

  static endMonster(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }
}

class Test {
  bb: flatbuffers.ByteBuffer = null;

  bb_pos: number = 0;

  __init(i: number, bb: flatbuffers.ByteBuffer): Test {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  a(): number {
    return this.bb.readInt16(this.bb_pos);
  }

  mutate_a(value: number): boolean {
    const offset = this.bb.__offset(this.bb_pos, 0);

    if (offset === 0) {
      return false;
    }

    this.bb.writeInt16(this.bb_pos + offset, value);
    return true;
  }

  b(): number {
    return this.bb.readInt8(this.bb_pos + 2);
  }

  mutate_b(value: number): boolean {
    const offset = this.bb.__offset(this.bb_pos, 2);

    if (offset === 0) {
      return false;
    }

    this.bb.writeInt8(this.bb_pos + offset, value);
    return true;
  }

  static createTest(builder: flatbuffers.Builder, a: number, b: number): flatbuffers.Offset {
    builder.prep(2, 4);
    builder.pad(1);
    builder.writeInt8(b);
    builder.writeInt16(a);
    return builder.offset();
  }
}

class TestSimpleTableWithEnum {
  bb: flatbuffers.ByteBuffer= null;

  bb_pos: number = 0;

  __init(i: number, bb: flatbuffers.ByteBuffer): TestSimpleTableWithEnum {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsTestSimpleTableWithEnum(bb: flatbuffers.ByteBuffer, obj?: TestSimpleTableWithEnum): TestSimpleTableWithEnum {
    return (obj || new TestSimpleTableWithEnum()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  color(): Color {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? (this.bb.readInt8(this.bb_pos + offset)) : Color.Green;
  }

  mutate_color(value: Color): boolean {
    const offset = this.bb.__offset(this.bb_pos, 4);

    if (offset === 0) {
      return false;
    }

    this.bb.writeInt8(this.bb_pos + offset, value);
    return true;
  }

  static startTestSimpleTableWithEnum(builder: flatbuffers.Builder) {
    builder.startObject(1);
  }

  static addColor(builder: flatbuffers.Builder, color: Color) {
    builder.addFieldInt8(0, color, Color.Green);
  }

  static endTestSimpleTableWithEnum(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }
}

class Vec3 {
  bb: flatbuffers.ByteBuffer= null;

  bb_pos: number = 0;

  __init(i: number, bb: flatbuffers.ByteBuffer): Vec3 {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  x(): number {
    return this.bb.readFloat32(this.bb_pos);
  }

  mutate_x(value: number): boolean {
    const offset = this.bb.__offset(this.bb_pos, 0);

    if (offset === 0) {
      return false;
    }

    this.bb.writeFloat32(this.bb_pos + offset, value);
    return true;
  }

  y(): number {
    return this.bb.readFloat32(this.bb_pos + 4);
  }

  mutate_y(value: number): boolean {
    const offset = this.bb.__offset(this.bb_pos, 4);

    if (offset === 0) {
      return false;
    }

    this.bb.writeFloat32(this.bb_pos + offset, value);
    return true;
  }

  z(): number {
    return this.bb.readFloat32(this.bb_pos + 8);
  }

  mutate_z(value: number): boolean {
    const offset = this.bb.__offset(this.bb_pos, 8);

    if (offset === 0) {
      return false;
    }

    this.bb.writeFloat32(this.bb_pos + offset, value);
    return true;
  }

  test1(): number {
    return this.bb.readFloat64(this.bb_pos + 16);
  }

  mutate_test1(value: number): boolean {
    const offset = this.bb.__offset(this.bb_pos, 16);

    if (offset === 0) {
      return false;
    }

    this.bb.writeFloat64(this.bb_pos + offset, value);
    return true;
  }

  test2(): Color {
    return (this.bb.readInt8(this.bb_pos + 24));
  }

  mutate_test2(value: Color): boolean {
    const offset = this.bb.__offset(this.bb_pos, 24);

    if (offset === 0) {
      return false;
    }

    this.bb.writeInt8(this.bb_pos + offset, value);
    return true;
  }

  test3(obj?: Test): Test {
    return (obj || new Test()).__init(this.bb_pos + 26, this.bb);
  }

  static createVec3(builder: flatbuffers.Builder, x: number, y: number, z: number, test1: number, test2: Color, test3_a: number, test3_b: number): flatbuffers.Offset {
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
  }
}

class Stat {
  bb: flatbuffers.ByteBuffer= null;

  bb_pos: number = 0;

  __init(i: number, bb: flatbuffers.ByteBuffer): Stat {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsStat(bb: flatbuffers.ByteBuffer, obj?: Stat): Stat {
    return (obj || new Stat()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  id(optionalEncoding?: flatbuffers.Encoding): string|Uint8Array {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }

  val(): flatbuffers.Long {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
  }

  mutate_val(value: flatbuffers.Long): boolean {
    const offset = this.bb.__offset(this.bb_pos, 6);

    if (offset === 0) {
      return false;
    }

    this.bb.writeInt64(this.bb_pos + offset, value);
    return true;
  }

  count(): number {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.readUint16(this.bb_pos + offset) : 0;
  }

  static startStat(builder: flatbuffers.Builder) {
    builder.startObject(3);
  }

  static addId(builder: flatbuffers.Builder, idOffset: flatbuffers.Offset) {
    builder.addFieldOffset(0, idOffset, 0);
  }

  static addVal(builder: flatbuffers.Builder, val: flatbuffers.Long) {
    builder.addFieldInt64(1, val, builder.createLong(0, 0));
  }

  static addCount(builder: flatbuffers.Builder, count: number) {
    builder.addFieldInt16(2, count, 0);
  }

  static endStat(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }
}

class Monster {
  bb: flatbuffers.ByteBuffer= null;

  bb_pos: number = 0;

  __init(i: number, bb: flatbuffers.ByteBuffer): Monster {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsMonster(bb: flatbuffers.ByteBuffer, obj?: Monster): Monster {
    return (obj || new Monster()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean {
    return bb.__has_identifier('MONS');
  }

  pos(obj?: Vec3): Vec3 {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? (obj || new Vec3()).__init(this.bb_pos + offset, this.bb) : null;
  }

  mana(): number {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readInt16(this.bb_pos + offset) : 150;
  }

  mutate_mana(value: number): boolean {
    const offset = this.bb.__offset(this.bb_pos, 6);

    if (offset === 0) {
      return false;
    }

    this.bb.writeInt16(this.bb_pos + offset, value);
    return true;
  }

  hp(): number {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.readInt16(this.bb_pos + offset) : 100;
  }

  mutate_hp(value: number): boolean {
    const offset = this.bb.__offset(this.bb_pos, 8);

    if (offset === 0) {
      return false;
    }

    this.bb.writeInt16(this.bb_pos + offset, value);
    return true;
  }

  name(): string;
  name(optionalEncoding: flatbuffers.Encoding): string|Uint8Array;
  name(optionalEncoding?: any): string|Uint8Array {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }

  inventory(index: number): number {
    const offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
  }

  inventoryLength(): number {
    const offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }

  inventoryArray(): Uint8Array {
    const offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
  }

  color(): Color {
    const offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? (this.bb.readInt8(this.bb_pos + offset)) : Color.Blue;
  }

  mutate_color(value: Color): boolean {
    const offset = this.bb.__offset(this.bb_pos, 16);

    if (offset === 0) {
      return false;
    }

    this.bb.writeInt8(this.bb_pos + offset, value);
    return true;
  }

  testType(): Any {
    const offset = this.bb.__offset(this.bb_pos, 18);
    return offset ? (this.bb.readUint8(this.bb_pos + offset)) : Any.NONE;
  }

  test<T extends flatbuffers.Table>(obj: T): T {
    const offset = this.bb.__offset(this.bb_pos, 20);
    return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
  }

  test4(index: number, obj?: Test): Test {
    const offset = this.bb.__offset(this.bb_pos, 22);
    return offset ? (obj || new Test()).__init(this.bb.__vector(this.bb_pos + offset) + index * 4, this.bb) : null;
  }

  test4Length(): number {
    const offset = this.bb.__offset(this.bb_pos, 22);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }

  testarrayofstring(index: number): string;
  testarrayofstring(index: number, optionalEncoding: flatbuffers.Encoding): string|Uint8Array;
  testarrayofstring(index: number, optionalEncoding?: any): string|Uint8Array {
    const offset = this.bb.__offset(this.bb_pos, 24);
    return offset ? this.bb.__string(this.bb.__vector(this.bb_pos + offset) + index * 4, optionalEncoding) : null;
  }

  testarrayofstringLength(): number {
    const offset = this.bb.__offset(this.bb_pos, 24);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }

  testarrayoftables(index: number, obj?: Monster): Monster {
    const offset = this.bb.__offset(this.bb_pos, 26);
    return offset ? (obj || new Monster()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
  }

  testarrayoftablesLength(): number {
    const offset = this.bb.__offset(this.bb_pos, 26);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }

  enemy(obj?: Monster): Monster {
    const offset = this.bb.__offset(this.bb_pos, 28);
    return offset ? (obj || new Monster()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }

  testnestedflatbuffer(index: number): number {
    const offset = this.bb.__offset(this.bb_pos, 30);
    return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
  }

  testnestedflatbufferLength(): number {
    const offset = this.bb.__offset(this.bb_pos, 30);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }

  testnestedflatbufferArray(): Uint8Array {
    const offset = this.bb.__offset(this.bb_pos, 30);
    return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
  }

  testempty(obj?: Stat): Stat {
    const offset = this.bb.__offset(this.bb_pos, 32);
    return offset ? (obj || new Stat()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }

  testbool(): boolean {
    const offset = this.bb.__offset(this.bb_pos, 34);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }

  testhashs32Fnv1(): number {
    const offset = this.bb.__offset(this.bb_pos, 36);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }

  mutate_testhashs32_fnv1(value: number): boolean {
    const offset = this.bb.__offset(this.bb_pos, 36);

    if (offset === 0) {
      return false;
    }

    this.bb.writeInt32(this.bb_pos + offset, value);
    return true;
  }

  testhashu32Fnv1(): number {
    const offset = this.bb.__offset(this.bb_pos, 38);
    return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
  }

  testhashs64Fnv1(): flatbuffers.Long {
    const offset = this.bb.__offset(this.bb_pos, 40);
    return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
  }

  mutate_testhashs64_fnv1(value: flatbuffers.Long): boolean {
    const offset = this.bb.__offset(this.bb_pos, 40);

    if (offset === 0) {
      return false;
    }

    this.bb.writeInt64(this.bb_pos + offset, value);
    return true;
  }

  testhashu64Fnv1(): flatbuffers.Long {
    const offset = this.bb.__offset(this.bb_pos, 42);
    return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
  }

  testhashs32Fnv1a(): number {
    const offset = this.bb.__offset(this.bb_pos, 44);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }

  mutate_testhashs32_fnv1a(value: number): boolean {
    const offset = this.bb.__offset(this.bb_pos, 44);

    if (offset === 0) {
      return false;
    }

    this.bb.writeInt32(this.bb_pos + offset, value);
    return true;
  }

  testhashu32Fnv1a(): number {
    const offset = this.bb.__offset(this.bb_pos, 46);
    return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
  }

  testhashs64Fnv1a(): flatbuffers.Long {
    const offset = this.bb.__offset(this.bb_pos, 48);
    return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
  }

  mutate_testhashs64_fnv1a(value: flatbuffers.Long): boolean {
    const offset = this.bb.__offset(this.bb_pos, 48);

    if (offset === 0) {
      return false;
    }

    this.bb.writeInt64(this.bb_pos + offset, value);
    return true;
  }

  testhashu64Fnv1a(): flatbuffers.Long {
    const offset = this.bb.__offset(this.bb_pos, 50);
    return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
  }

  testarrayofbools(index: number): boolean {
    const offset = this.bb.__offset(this.bb_pos, 52);
    return offset ? !!this.bb.readInt8(this.bb.__vector(this.bb_pos + offset) + index) : false;
  }

  testarrayofboolsLength(): number {
    const offset = this.bb.__offset(this.bb_pos, 52);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }

  testarrayofboolsArray(): Int8Array {
    const offset = this.bb.__offset(this.bb_pos, 52);
    return offset ? new Int8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
  }

  testf(): number {
    const offset = this.bb.__offset(this.bb_pos, 54);
    return offset ? this.bb.readFloat32(this.bb_pos + offset) : 3.14159;
  }

  mutate_testf(value: number): boolean {
    const offset = this.bb.__offset(this.bb_pos, 54);

    if (offset === 0) {
      return false;
    }

    this.bb.writeFloat32(this.bb_pos + offset, value);
    return true;
  }

  testf2(): number {
    const offset = this.bb.__offset(this.bb_pos, 56);
    return offset ? this.bb.readFloat32(this.bb_pos + offset) : 3.0;
  }

  mutate_testf2(value: number): boolean {
    const offset = this.bb.__offset(this.bb_pos, 56);

    if (offset === 0) {
      return false;
    }

    this.bb.writeFloat32(this.bb_pos + offset, value);
    return true;
  }

  testf3(): number {
    const offset = this.bb.__offset(this.bb_pos, 58);
    return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0.0;
  }

  mutate_testf3(value: number): boolean {
    const offset = this.bb.__offset(this.bb_pos, 58);

    if (offset === 0) {
      return false;
    }

    this.bb.writeFloat32(this.bb_pos + offset, value);
    return true;
  }

  testarrayofstring2(index: number): string;
  testarrayofstring2(index: number, optionalEncoding: flatbuffers.Encoding): string|Uint8Array;
  testarrayofstring2(index: number, optionalEncoding?: any): string|Uint8Array {
    const offset = this.bb.__offset(this.bb_pos, 60);
    return offset ? this.bb.__string(this.bb.__vector(this.bb_pos + offset) + index * 4, optionalEncoding) : null;
  }

  testarrayofstring2Length(): number {
    const offset = this.bb.__offset(this.bb_pos, 60);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }

  static startMonster(builder: flatbuffers.Builder) {
    builder.startObject(29);
  }

  static addPos(builder: flatbuffers.Builder, posOffset: flatbuffers.Offset) {
    builder.addFieldStruct(0, posOffset, 0);
  }

  static addMana(builder: flatbuffers.Builder, mana: number) {
    builder.addFieldInt16(1, mana, 150);
  }

  static addHp(builder: flatbuffers.Builder, hp: number) {
    builder.addFieldInt16(2, hp, 100);
  }

  static addName(builder: flatbuffers.Builder, nameOffset: flatbuffers.Offset) {
    builder.addFieldOffset(3, nameOffset, 0);
  }

  static addInventory(builder: flatbuffers.Builder, inventoryOffset: flatbuffers.Offset) {
    builder.addFieldOffset(5, inventoryOffset, 0);
  }

  static createInventoryVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset {
    if (!data) {
      return null;
    }
    builder.startVector(1, data.length, 1);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addInt8(data[i]);
    }
    return builder.endVector();
  }

  static startInventoryVector(builder: flatbuffers.Builder, numElems: number) {
    builder.startVector(1, numElems, 1);
  }

  static addColor(builder: flatbuffers.Builder, color: Color) {
    builder.addFieldInt8(6, color, Color.Blue);
  }

  static addTestType(builder: flatbuffers.Builder, testType: Any) {
    builder.addFieldInt8(7, testType, Any.NONE);
  }

  static addTest(builder: flatbuffers.Builder, testOffset: flatbuffers.Offset) {
    builder.addFieldOffset(8, testOffset, 0);
  }

  static addTest4(builder: flatbuffers.Builder, test4Offset: flatbuffers.Offset) {
    builder.addFieldOffset(9, test4Offset, 0);
  }

  static startTest4Vector(builder: flatbuffers.Builder, numElems: number) {
    builder.startVector(4, numElems, 2);
  }

  static addTestarrayofstring(builder: flatbuffers.Builder, testarrayofstringOffset: flatbuffers.Offset) {
    builder.addFieldOffset(10, testarrayofstringOffset, 0);
  }

  static createTestarrayofstringVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset {
    if (!data) {
      return null;
    }
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }

  static startTestarrayofstringVector(builder: flatbuffers.Builder, numElems: number) {
    builder.startVector(4, numElems, 4);
  }

  static addTestarrayoftables(builder: flatbuffers.Builder, testarrayoftablesOffset: flatbuffers.Offset) {
    builder.addFieldOffset(11, testarrayoftablesOffset, 0);
  }

  static createTestarrayoftablesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset {
    if (!data) {
      return null;
    }
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }

  static startTestarrayoftablesVector(builder: flatbuffers.Builder, numElems: number) {
    builder.startVector(4, numElems, 4);
  }

  static addEnemy(builder: flatbuffers.Builder, enemyOffset: flatbuffers.Offset) {
    builder.addFieldOffset(12, enemyOffset, 0);
  }

  static addTestnestedflatbuffer(builder: flatbuffers.Builder, testnestedflatbufferOffset: flatbuffers.Offset) {
    builder.addFieldOffset(13, testnestedflatbufferOffset, 0);
  }

  static createTestnestedflatbufferVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset {
    if (!data) {
      return null;
    }
    builder.startVector(1, data.length, 1);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addInt8(data[i]);
    }
    return builder.endVector();
  }

  static startTestnestedflatbufferVector(builder: flatbuffers.Builder, numElems: number) {
    builder.startVector(1, numElems, 1);
  }

  static addTestempty(builder: flatbuffers.Builder, testemptyOffset: flatbuffers.Offset) {
    builder.addFieldOffset(14, testemptyOffset, 0);
  }

  static addTestbool(builder: flatbuffers.Builder, testbool: boolean) {
    builder.addFieldInt8(15, +testbool, +false);
  }

  static addTesthashs32Fnv1(builder: flatbuffers.Builder, testhashs32Fnv1: number) {
    builder.addFieldInt32(16, testhashs32Fnv1, 0);
  }

  static addTesthashu32Fnv1(builder: flatbuffers.Builder, testhashu32Fnv1: number) {
    builder.addFieldInt32(17, testhashu32Fnv1, 0);
  }

  static addTesthashs64Fnv1(builder: flatbuffers.Builder, testhashs64Fnv1: flatbuffers.Long) {
    builder.addFieldInt64(18, testhashs64Fnv1, builder.createLong(0, 0));
  }

  static addTesthashu64Fnv1(builder: flatbuffers.Builder, testhashu64Fnv1: flatbuffers.Long) {
    builder.addFieldInt64(19, testhashu64Fnv1, builder.createLong(0, 0));
  }

  static addTesthashs32Fnv1a(builder: flatbuffers.Builder, testhashs32Fnv1a: number) {
    builder.addFieldInt32(20, testhashs32Fnv1a, 0);
  }

  static addTesthashu32Fnv1a(builder: flatbuffers.Builder, testhashu32Fnv1a: number) {
    builder.addFieldInt32(21, testhashu32Fnv1a, 0);
  }

  static addTesthashs64Fnv1a(builder: flatbuffers.Builder, testhashs64Fnv1a: flatbuffers.Long) {
    builder.addFieldInt64(22, testhashs64Fnv1a, builder.createLong(0, 0));
  }

  static addTesthashu64Fnv1a(builder: flatbuffers.Builder, testhashu64Fnv1a: flatbuffers.Long) {
    builder.addFieldInt64(23, testhashu64Fnv1a, builder.createLong(0, 0));
  }

  static addTestarrayofbools(builder: flatbuffers.Builder, testarrayofboolsOffset: flatbuffers.Offset) {
    builder.addFieldOffset(24, testarrayofboolsOffset, 0);
  }

  static createTestarrayofboolsVector(builder: flatbuffers.Builder, data: boolean[]): flatbuffers.Offset {
    if (!data) {
      return null;
    }
    builder.startVector(1, data.length, 1);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addInt8(+data[i]);
    }
    return builder.endVector();
  }

  static startTestarrayofboolsVector(builder: flatbuffers.Builder, numElems: number) {
    builder.startVector(1, numElems, 1);
  }

  static addTestf(builder: flatbuffers.Builder, testf: number) {
    builder.addFieldFloat32(25, testf, 3.14159);
  }

  static addTestf2(builder: flatbuffers.Builder, testf2: number) {
    builder.addFieldFloat32(26, testf2, 3.0);
  }

  static addTestf3(builder: flatbuffers.Builder, testf3: number) {
    builder.addFieldFloat32(27, testf3, 0.0);
  }

  static addTestarrayofstring2(builder: flatbuffers.Builder, testarrayofstring2Offset: flatbuffers.Offset) {
    builder.addFieldOffset(28, testarrayofstring2Offset, 0);
  }

  static createTestarrayofstring2Vector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset {
    if (!data) {
      return null;
    }
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }

  static startTestarrayofstring2Vector(builder: flatbuffers.Builder, numElems: number) {
    builder.startVector(4, numElems, 4);
  }

  static endMonster(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    builder.requiredField(offset, 10); // name
    return offset;
  }

  static finishMonsterBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset) {
    builder.finish(offset, 'MONS');
  }
}
