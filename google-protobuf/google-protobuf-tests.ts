import * as jspb from "google-protobuf";

/* This is a typescript version of a simple generated class from a proto file that is shown below. In order to make
 this ES5 JS file into TypeScript there have been quite a few modifications, but the same calls are made to the library
 classes.

 // FILE: simple.proto
 syntax = "proto3";

 package examplecom;

 message MySimple {
   string my_string = 1;
   bool my_bool = 2;
   repeated string some_labels = 3;
 }
*/

class MySimple extends jspb.Message {
  constructor(opt_data?: any) {
    super(); // This isn't actually called in the JS version of this file, but it's required by TS
    jspb.Message.initialize(this, opt_data, 0, -1, MySimple.repeatedFields_, null);
  };

  static repeatedFields_ = [3];

  toObject(opt_includeInstance: boolean): {} {
    return MySimple.toObject(opt_includeInstance, this);
  };

  static toObject(includeInstance: boolean, msg: MySimple): {} {
    const obj: {} = {
      myString: jspb.Message.getFieldWithDefault(msg, 1, ""),
      myBool: jspb.Message.getFieldWithDefault(msg, 2, false),
      someLabelsList: jspb.Message.getField(msg, 3),
    };

    if (includeInstance) {
      // This is commented out because it's not valid in TS, but it's a simple append to an object
      // obj['$jspbMessageInstance'] = msg;
    }
    return obj;
  };

  static deserializeBinary(bytes: Uint8Array) {
    const reader = new jspb.BinaryReader(bytes);
    const msg = new MySimple();
    return MySimple.deserializeBinaryFromReader(msg, reader);
  };

  static deserializeBinaryFromReader(msg: MySimple, reader: jspb.BinaryReader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      const field = reader.getFieldNumber();
      switch (field) {
        case 1:
          const value1 = (reader.readString());
          msg.setMyString(value1);
          break;
        case 2:
          const value2 = (reader.readBool());
          msg.setMyBool(value2);
          break;
        case 3:
          const value3 = (reader.readString());
          msg.addSomeLabels(value3);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

  serializeBinary(): Uint8Array {
    const writer = new jspb.BinaryWriter();
    MySimple.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  };

  static serializeBinaryToWriter(message: MySimple, writer: jspb.BinaryWriter) {
    let f1 = message.getMyString();
    if (f1.length > 0) {
      writer.writeString(
        1,
        f1,
      );
    }
    const f2 = message.getMyBool();
    if (f2) {
      writer.writeBool(
        2,
        f2,
      );
    }
    const f3 = message.getSomeLabelsList();
    if (f3.length > 0) {
      writer.writeRepeatedString(
        3,
        f3,
      );
    }
  }

  getMyString(): string {
    return jspb.Message.getFieldWithDefault(this, 1, "");
  }

  setMyString(value: string) {
    jspb.Message.setField(this, 1, value);
  }

  getMyBool(): boolean {
    return jspb.Message.getFieldWithDefault(this, 2, false);
  }

  setMyBool(value: boolean) {
    jspb.Message.setField(this, 2, value);
  }

  getSomeLabelsList(): string[] {
    return jspb.Message.getField(this, 3);
  }

  setSomeLabelsList(value: string[]) {
    jspb.Message.setField(this, 3, value || []);
  }

  addSomeLabels(value: string, opt_index?: number) {
    jspb.Message.addToRepeatedField(this, 3, value, opt_index);
  }

  clearSomeLabelsList() {
    this.setSomeLabelsList([]);
  }
}
