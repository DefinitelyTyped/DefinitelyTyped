import * as jspb from "./index";

import * as google_protobuf_compiler_plugin_pb from "./google/protobuf/compiler/plugin_pb";
import * as google_protobuf_any_pb from "./google/protobuf/any_pb";
import * as google_protobuf_api_pb from "./google/protobuf/api_pb";
import * as google_protobuf_descriptor_pb from "./google/protobuf/descriptor_pb";
import * as google_protobuf_duration_pb from "./google/protobuf/duration_pb";
import * as google_protobuf_empty_pb from "./google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "./google/protobuf/field_mask_pb";
import * as google_protobuf_source_context_pb from "./google/protobuf/source_context_pb";
import * as google_protobuf_struct_pb from "./google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "./google/protobuf/timestamp_pb";
import * as google_protobuf_type_pb from "./google/protobuf/type_pb";
import * as google_protobuf_wrappers_pb from "./google/protobuf/wrappers_pb";

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
   google.protobuf.compiler.CodeGeneratorRequest some_code_generator_request = 4;
   google.protobuf.Any some_any = 5;
   google.protobuf.Method some_method = 6;
   google.protobuf.GeneratedCodeInfo some_generated_code_info = 7;
   google.protobuf.Duration some_duration = 8;
   google.protobuf.Empty some_empty = 9;
   google.protobuf.FieldMask some_field_mask = 10;
   google.protobuf.SourceContext some_source_context = 11;
   google.protobuf.Struct some_struct = 12;
   google.protobuf.Timestamp some_timestamp = 13;
   google.protobuf.Type some_type = 14;
   google.protobuf.DoubleValue some_double_value = 15;
 }
*/

class MySimple extends jspb.Message {
  constructor(opt_data?: any) {
    super(); // This isn't actually called in the JS version of this file, but it's required by TS
    jspb.Message.initialize(this, opt_data, 0, -1, MySimple.repeatedFields_, null);
  };

  static repeatedFields_ = [3];

  toObject(opt_includeInstance?: boolean): {} {
    return MySimple.toObject(opt_includeInstance || false, this);
  };

  static toObject(includeInstance: boolean, msg: MySimple): {} {
    var f, obj = {
      myString: jspb.Message.getFieldWithDefault(msg, 1, ""),
      myBool: jspb.Message.getFieldWithDefault(msg, 2, false),
      someLabelsList: jspb.Message.getField(msg, 3),
      someCodeGeneratorRequest: (f = msg.getSomeCodeGeneratorRequest()) && google_protobuf_compiler_plugin_pb.CodeGeneratorRequest.toObject(includeInstance, f),
      someAny: (f = msg.getSomeAny()) && google_protobuf_any_pb.Any.toObject(includeInstance, f),
      someMethod: (f = msg.getSomeMethod()) && google_protobuf_api_pb.Method.toObject(includeInstance, f),
      someGeneratedCodeInfo: (f = msg.getSomeGeneratedCodeInfo()) && google_protobuf_descriptor_pb.GeneratedCodeInfo.toObject(includeInstance, f),
      someDuration: (f = msg.getSomeDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
      someEmpty: (f = msg.getSomeEmpty()) && google_protobuf_empty_pb.Empty.toObject(includeInstance, f),
      someFieldMask: (f = msg.getSomeFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
      someSourceContext: (f = msg.getSomeSourceContext()) && google_protobuf_source_context_pb.SourceContext.toObject(includeInstance, f),
      someStruct: (f = msg.getSomeStruct()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
      someTimestamp: (f = msg.getSomeTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
      someType: (f = msg.getSomeType()) && google_protobuf_type_pb.Type.toObject(includeInstance, f),
      someDoubleValue: (f = msg.getSomeDoubleValue()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
    };

    if (includeInstance) {
      // This is commented out because it's not valid in TS, but it's a simple append to an object
      // obj['$jspbMessageInstance'] = msg;
    }
    return obj;
  };

  static deserializeBinary(bytes: Uint8Array): MySimple {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new MySimple;
    return MySimple.deserializeBinaryFromReader(msg, reader);
  };

  static deserializeBinaryFromReader(msg: MySimple, reader: jspb.BinaryReader): MySimple {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value1 = /** @type {string} */ (reader.readString());
          msg.setMyString(value1);
          break;
        case 2:
          var value2 = /** @type {boolean} */ (reader.readBool());
          msg.setMyBool(value2);
          break;
        case 3:
          var value3 = /** @type {string} */ (reader.readString());
          msg.addSomeLabels(value3);
          break;
        case 4:
          var value4 = new google_protobuf_compiler_plugin_pb.CodeGeneratorRequest;
          reader.readMessage(value4, google_protobuf_compiler_plugin_pb.CodeGeneratorRequest.deserializeBinaryFromReader);
          msg.setSomeCodeGeneratorRequest(value4);
          break;
        case 5:
          var value5 = new google_protobuf_any_pb.Any;
          reader.readMessage(value5, google_protobuf_any_pb.Any.deserializeBinaryFromReader);
          msg.setSomeAny(value5);
          break;
        case 6:
          var value6 = new google_protobuf_api_pb.Method;
          reader.readMessage(value6, google_protobuf_api_pb.Method.deserializeBinaryFromReader);
          msg.setSomeMethod(value6);
          break;
        case 7:
          var value7 = new google_protobuf_descriptor_pb.GeneratedCodeInfo;
          reader.readMessage(value7, google_protobuf_descriptor_pb.GeneratedCodeInfo.deserializeBinaryFromReader);
          msg.setSomeGeneratedCodeInfo(value7);
          break;
        case 8:
          var value8 = new google_protobuf_duration_pb.Duration;
          reader.readMessage(value8, google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
          msg.setSomeDuration(value8);
          break;
        case 9:
          var value9 = new google_protobuf_empty_pb.Empty;
          reader.readMessage(value9, google_protobuf_empty_pb.Empty.deserializeBinaryFromReader);
          msg.setSomeEmpty(value9);
          break;
        case 10:
          var value10 = new google_protobuf_field_mask_pb.FieldMask;
          reader.readMessage(value10, google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
          msg.setSomeFieldMask(value10);
          break;
        case 11:
          var value11 = new google_protobuf_source_context_pb.SourceContext;
          reader.readMessage(value11, google_protobuf_source_context_pb.SourceContext.deserializeBinaryFromReader);
          msg.setSomeSourceContext(value11);
          break;
        case 12:
          var value12 = new google_protobuf_struct_pb.Struct;
          reader.readMessage(value12, google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
          msg.setSomeStruct(value12);
          break;
        case 13:
          var value13 = new google_protobuf_timestamp_pb.Timestamp;
          reader.readMessage(value13, google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
          msg.setSomeTimestamp(value13);
          break;
        case 14:
          var value14 = new google_protobuf_type_pb.Type;
          reader.readMessage(value14, google_protobuf_type_pb.Type.deserializeBinaryFromReader);
          msg.setSomeType(value14);
          break;
        case 15:
          var value15 = new google_protobuf_wrappers_pb.DoubleValue;
          reader.readMessage(value15, google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
          msg.setSomeDoubleValue(value15);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

  serializeBinary(): Uint8Array {
    var writer = new jspb.BinaryWriter();
    MySimple.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  };

  static serializeBinaryToWriter(message: MySimple, writer: jspb.BinaryWriter) {
    var f = undefined;
    f = message.getMyString();
    if (f.length > 0) {
      writer.writeString(
        1,
        f
      );
    }
    f = message.getMyBool();
    if (f) {
      writer.writeBool(
        2,
        f
      );
    }
    f = message.getSomeLabelsList();
    if (f.length > 0) {
      writer.writeRepeatedString(
        3,
        f
      );
    }
    f = message.getSomeCodeGeneratorRequest();
    if (f != null) {
      writer.writeMessage(
        4,
        f,
        google_protobuf_compiler_plugin_pb.CodeGeneratorRequest.serializeBinaryToWriter
      );
    }
    f = message.getSomeAny();
    if (f != null) {
      writer.writeMessage(
        5,
        f,
        google_protobuf_any_pb.Any.serializeBinaryToWriter
      );
    }
    f = message.getSomeMethod();
    if (f != null) {
      writer.writeMessage(
        6,
        f,
        google_protobuf_api_pb.Method.serializeBinaryToWriter
      );
    }
    f = message.getSomeGeneratedCodeInfo();
    if (f != null) {
      writer.writeMessage(
        7,
        f,
        google_protobuf_descriptor_pb.GeneratedCodeInfo.serializeBinaryToWriter
      );
    }
    f = message.getSomeDuration();
    if (f != null) {
      writer.writeMessage(
        8,
        f,
        google_protobuf_duration_pb.Duration.serializeBinaryToWriter
      );
    }
    f = message.getSomeEmpty();
    if (f != null) {
      writer.writeMessage(
        9,
        f,
        google_protobuf_empty_pb.Empty.serializeBinaryToWriter
      );
    }
    f = message.getSomeFieldMask();
    if (f != null) {
      writer.writeMessage(
        10,
        f,
        google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
      );
    }
    f = message.getSomeSourceContext();
    if (f != null) {
      writer.writeMessage(
        11,
        f,
        google_protobuf_source_context_pb.SourceContext.serializeBinaryToWriter
      );
    }
    f = message.getSomeStruct();
    if (f != null) {
      writer.writeMessage(
        12,
        f,
        google_protobuf_struct_pb.Struct.serializeBinaryToWriter
      );
    }
    f = message.getSomeTimestamp();
    if (f != null) {
      writer.writeMessage(
        13,
        f,
        google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
      );
    }
    f = message.getSomeType();
    if (f != null) {
      writer.writeMessage(
        14,
        f,
        google_protobuf_type_pb.Type.serializeBinaryToWriter
      );
    }
    f = message.getSomeDoubleValue();
    if (f != null) {
      writer.writeMessage(
        15,
        f,
        google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
      );
    }
  };

  getMyString(): string {
    return jspb.Message.getFieldWithDefault(this, 1, "");
  };

  setMyString(value: string) {
    jspb.Message.setField(this, 1, value);
  };

  getMyBool(): boolean {
    return jspb.Message.getFieldWithDefault(this, 2, false);
  };

  setMyBool(value: boolean) {
    jspb.Message.setField(this, 2, value);
  };

  getSomeLabelsList(): Array<string> {
    return jspb.Message.getField(this, 3);
  };

  setSomeLabelsList(value: Array<string>) {
    jspb.Message.setField(this, 3, value || []);
  };

  addSomeLabels(value: string, opt_index?: number) {
    jspb.Message.addToRepeatedField(this, 3, value, opt_index);
  };

  clearSomeLabelsList() {
    this.setSomeLabelsList([]);
  };

  getSomeCodeGeneratorRequest(): google_protobuf_compiler_plugin_pb.CodeGeneratorRequest | undefined {
    return jspb.Message.getWrapperField(this, google_protobuf_compiler_plugin_pb.CodeGeneratorRequest, 4) as google_protobuf_compiler_plugin_pb.CodeGeneratorRequest | undefined;
  };

  setSomeCodeGeneratorRequest(value?: google_protobuf_compiler_plugin_pb.CodeGeneratorRequest) {
    jspb.Message.setWrapperField(this, 4, value);
  };

  clearSomeCodeGeneratorRequest() {
    this.setSomeCodeGeneratorRequest(undefined);
  };

  hasSomeCodeGeneratorRequest(): boolean {
    return jspb.Message.getField(this, 4) != null;
  };

  getSomeAny(): google_protobuf_any_pb.Any | undefined {
    return jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 5) as google_protobuf_any_pb.Any | undefined;
  };

  setSomeAny(value?: google_protobuf_any_pb.Any) {
    jspb.Message.setWrapperField(this, 5, value);
  };

  clearSomeAny() {
    this.setSomeAny(undefined);
  };

  hasSomeAny(): boolean {
    return jspb.Message.getField(this, 5) != null;
  };

  getSomeMethod(): google_protobuf_api_pb.Method | undefined {
    return jspb.Message.getWrapperField(this, google_protobuf_api_pb.Method, 6) as google_protobuf_api_pb.Method | undefined;
  };

  setSomeMethod(value?: google_protobuf_api_pb.Method) {
    jspb.Message.setWrapperField(this, 6, value);
  };

  clearSomeMethod() {
    this.setSomeMethod(undefined);
  };

  hasSomeMethod(): boolean {
    return jspb.Message.getField(this, 6) != null;
  };

  getSomeGeneratedCodeInfo(): google_protobuf_descriptor_pb.GeneratedCodeInfo|undefined {
    return jspb.Message.getWrapperField(this, google_protobuf_descriptor_pb.GeneratedCodeInfo, 7) as google_protobuf_descriptor_pb.GeneratedCodeInfo | undefined;
  };

  setSomeGeneratedCodeInfo(value?: google_protobuf_descriptor_pb.GeneratedCodeInfo) {
    jspb.Message.setWrapperField(this, 7, value);
  };

  clearSomeGeneratedCodeInfo() {
    this.setSomeGeneratedCodeInfo(undefined);
  };

  hasSomeGeneratedCodeInfo(): boolean {
    return jspb.Message.getField(this, 7) != null;
  };

  getSomeDuration(): google_protobuf_duration_pb.Duration | undefined {
    return jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 8) as google_protobuf_duration_pb.Duration | undefined;
  };

  setSomeDuration(value?: google_protobuf_duration_pb.Duration) {
    jspb.Message.setWrapperField(this, 8, value);
  };

  clearSomeDuration() {
    this.setSomeDuration(undefined);
  };

  hasSomeDuration(): boolean {
    return jspb.Message.getField(this, 8) != null;
  };

  getSomeEmpty(): google_protobuf_empty_pb.Empty | undefined {
    return jspb.Message.getWrapperField(this, google_protobuf_empty_pb.Empty, 9) as google_protobuf_empty_pb.Empty | undefined;
  };

  setSomeEmpty(value?: google_protobuf_empty_pb.Empty) {
    jspb.Message.setWrapperField(this, 9, value);
  };

  clearSomeEmpty() {
    this.setSomeEmpty(undefined);
  };

  hasSomeEmpty(): boolean {
    return jspb.Message.getField(this, 9) != null;
  };

  getSomeFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined {
    return jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10) as google_protobuf_field_mask_pb.FieldMask | undefined;
  };

  setSomeFieldMask(value?: google_protobuf_field_mask_pb.FieldMask) {
    jspb.Message.setWrapperField(this, 10, value);
  };

  clearSomeFieldMask() {
    this.setSomeFieldMask(undefined);
  };

  hasSomeFieldMask(): boolean {
    return jspb.Message.getField(this, 10) != null;
  };

  getSomeSourceContext(): google_protobuf_source_context_pb.SourceContext | undefined {
    return jspb.Message.getWrapperField(this, google_protobuf_source_context_pb.SourceContext, 11) as google_protobuf_source_context_pb.SourceContext | undefined;
  };

  setSomeSourceContext(value?: google_protobuf_source_context_pb.SourceContext) {
    jspb.Message.setWrapperField(this, 11, value);
  };

  clearSomeSourceContext() {
    this.setSomeSourceContext(undefined);
  };

  hasSomeSourceContext(): boolean {
    return jspb.Message.getField(this, 11) != null;
  };

  getSomeStruct(): google_protobuf_struct_pb.Struct | undefined {
    return jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 12) as google_protobuf_struct_pb.Struct | undefined;
  };

  setSomeStruct(value?: google_protobuf_struct_pb.Struct) {
    jspb.Message.setWrapperField(this, 12, value);
  };

  clearSomeStruct() {
    this.setSomeStruct(undefined);
  };

  hasSomeStruct(): boolean {
    return jspb.Message.getField(this, 12) != null;
  };

  getSomeTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined {
    return jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 13) as google_protobuf_timestamp_pb.Timestamp | undefined;
  };

  setSomeTimestamp(value?: google_protobuf_timestamp_pb.Timestamp) {
    jspb.Message.setWrapperField(this, 13, value);
  };

  clearSomeTimestamp() {
    this.setSomeTimestamp(undefined);
  };

  hasSomeTimestamp(): boolean {
    return jspb.Message.getField(this, 13) != null;
  };

  getSomeType(): google_protobuf_type_pb.Type | undefined {
    return jspb.Message.getWrapperField(this, google_protobuf_type_pb.Type, 14) as google_protobuf_type_pb.Type | undefined;
  };

  setSomeType(value?: google_protobuf_type_pb.Type) {
    jspb.Message.setWrapperField(this, 14, value);
  };

  clearSomeType() {
    this.setSomeType(undefined);
  };

  hasSomeType(): boolean {
    return jspb.Message.getField(this, 14) != null;
  };

  getSomeDoubleValue(): google_protobuf_wrappers_pb.DoubleValue | undefined {
    return jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 15) as google_protobuf_wrappers_pb.DoubleValue | undefined;
  };

  setSomeDoubleValue(value?: google_protobuf_wrappers_pb.DoubleValue) {
    jspb.Message.setWrapperField(this, 15, value);
  };

  clearSomeDoubleValue() {
    this.setSomeDoubleValue(undefined);
  };

  hasSomeDoubleValue(): boolean {
    return jspb.Message.getField(this, 15) != null;
  };
};
