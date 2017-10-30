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
    const obj = {
      myString: jspb.Message.getFieldWithDefault(msg, 1, ""),
      myBool: jspb.Message.getFieldWithDefault(msg, 2, false),
      someLabelsList: jspb.Message.getField(msg, 3),
      someCodeGeneratorRequest: google_protobuf_compiler_plugin_pb.CodeGeneratorRequest.toObject(includeInstance, msg.getSomeCodeGeneratorRequest()),
      someAny: google_protobuf_any_pb.Any.toObject(includeInstance, msg.getSomeAny()),
      someMethod: google_protobuf_api_pb.Method.toObject(includeInstance, msg.getSomeMethod()),
      someGeneratedCodeInfo: google_protobuf_descriptor_pb.GeneratedCodeInfo.toObject(includeInstance, msg.getSomeGeneratedCodeInfo()),
      someDuration: google_protobuf_duration_pb.Duration.toObject(includeInstance, msg.getSomeDuration()),
      someEmpty: google_protobuf_empty_pb.Empty.toObject(includeInstance, msg.getSomeEmpty()),
      someFieldMask: google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, msg.getSomeFieldMask()),
      someSourceContext: google_protobuf_source_context_pb.SourceContext.toObject(includeInstance, msg.getSomeSourceContext()),
      someStruct: google_protobuf_struct_pb.Struct.toObject(includeInstance, msg.getSomeStruct()),
      someTimestamp: google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, msg.getSomeTimestamp()),
      someType: google_protobuf_type_pb.Type.toObject(includeInstance, msg.getSomeType()),
      someDoubleValue: google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, msg.getSomeDoubleValue()),
    };

    if (includeInstance) {
      // This is commented out because it's not valid in TS, but it's a simple append to an object
      // obj['$jspbMessageInstance'] = msg;
    }
    return obj;
  };

  static deserializeBinary(bytes: Uint8Array): MySimple {
    const reader = new jspb.BinaryReader(bytes);
    const msg = new MySimple;
    return MySimple.deserializeBinaryFromReader(msg, reader);
  }

  static deserializeBinaryFromReader(msg: MySimple, reader: jspb.BinaryReader): MySimple {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      const field = reader.getFieldNumber();
      switch (field) {
        case 1:
          const value1 = reader.readString();
          msg.setMyString(value1);
          break;
        case 2:
          const value2 = reader.readBool();
          msg.setMyBool(value2);
          break;
        case 3:
          const value3 = reader.readString();
          msg.addSomeLabels(value3);
          break;
        case 4:
          const value4 = new google_protobuf_compiler_plugin_pb.CodeGeneratorRequest;
          reader.readMessage(value4, google_protobuf_compiler_plugin_pb.CodeGeneratorRequest.deserializeBinaryFromReader);
          msg.setSomeCodeGeneratorRequest(value4);
          break;
        case 5:
          const value5 = new google_protobuf_any_pb.Any;
          reader.readMessage(value5, google_protobuf_any_pb.Any.deserializeBinaryFromReader);
          msg.setSomeAny(value5);
          break;
        case 6:
          const value6 = new google_protobuf_api_pb.Method;
          reader.readMessage(value6, google_protobuf_api_pb.Method.deserializeBinaryFromReader);
          msg.setSomeMethod(value6);
          break;
        case 7:
          const value7 = new google_protobuf_descriptor_pb.GeneratedCodeInfo;
          reader.readMessage(value7, google_protobuf_descriptor_pb.GeneratedCodeInfo.deserializeBinaryFromReader);
          msg.setSomeGeneratedCodeInfo(value7);
          break;
        case 8:
          const value8 = new google_protobuf_duration_pb.Duration;
          reader.readMessage(value8, google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
          msg.setSomeDuration(value8);
          break;
        case 9:
          const value9 = new google_protobuf_empty_pb.Empty;
          reader.readMessage(value9, google_protobuf_empty_pb.Empty.deserializeBinaryFromReader);
          msg.setSomeEmpty(value9);
          break;
        case 10:
          const value10 = new google_protobuf_field_mask_pb.FieldMask;
          reader.readMessage(value10, google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
          msg.setSomeFieldMask(value10);
          break;
        case 11:
          const value11 = new google_protobuf_source_context_pb.SourceContext;
          reader.readMessage(value11, google_protobuf_source_context_pb.SourceContext.deserializeBinaryFromReader);
          msg.setSomeSourceContext(value11);
          break;
        case 12:
          const value12 = new google_protobuf_struct_pb.Struct;
          reader.readMessage(value12, google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
          msg.setSomeStruct(value12);
          break;
        case 13:
          const value13 = new google_protobuf_timestamp_pb.Timestamp;
          reader.readMessage(value13, google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
          msg.setSomeTimestamp(value13);
          break;
        case 14:
          const value14 = new google_protobuf_type_pb.Type;
          reader.readMessage(value14, google_protobuf_type_pb.Type.deserializeBinaryFromReader);
          msg.setSomeType(value14);
          break;
        case 15:
          const value15 = new google_protobuf_wrappers_pb.DoubleValue;
          reader.readMessage(value15, google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
          msg.setSomeDoubleValue(value15);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  }

  serializeBinary(): Uint8Array {
    const writer = new jspb.BinaryWriter();
    MySimple.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  static serializeBinaryToWriter(message: MySimple, writer: jspb.BinaryWriter) {
    const f1 = message.getMyString();
    if (f1.length > 0) {
      writer.writeString(
        1,
        f1
      );
    }
    const f2 = message.getMyBool();
    if (f2) {
      writer.writeBool(
        2,
        f2
      );
    }
    const f3 = message.getSomeLabelsList();
    if (f3.length > 0) {
      writer.writeRepeatedString(
        3,
        f3
      );
    }
    const f4 = message.getSomeCodeGeneratorRequest();
    if (f4 != null) {
      writer.writeMessage(
        4,
        f4,
        google_protobuf_compiler_plugin_pb.CodeGeneratorRequest.serializeBinaryToWriter
      );
    }
    const f5 = message.getSomeAny();
    if (f5 != null) {
      writer.writeMessage(
        5,
        f5,
        google_protobuf_any_pb.Any.serializeBinaryToWriter
      );
    }
    const f6 = message.getSomeMethod();
    if (f6 != null) {
      writer.writeMessage(
        6,
        f6,
        google_protobuf_api_pb.Method.serializeBinaryToWriter
      );
    }
    const f7 = message.getSomeGeneratedCodeInfo();
    if (f7 != null) {
      writer.writeMessage(
        7,
        f7,
        google_protobuf_descriptor_pb.GeneratedCodeInfo.serializeBinaryToWriter
      );
    }
    const f8 = message.getSomeDuration();
    if (f8 != null) {
      writer.writeMessage(
        8,
        f8,
        google_protobuf_duration_pb.Duration.serializeBinaryToWriter
      );
    }
    const f9 = message.getSomeEmpty();
    if (f9 != null) {
      writer.writeMessage(
        9,
        f9,
        google_protobuf_empty_pb.Empty.serializeBinaryToWriter
      );
    }
    const f10 = message.getSomeFieldMask();
    if (f10 != null) {
      writer.writeMessage(
        10,
        f10,
        google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
      );
    }
    const f11 = message.getSomeSourceContext();
    if (f11 != null) {
      writer.writeMessage(
        11,
        f11,
        google_protobuf_source_context_pb.SourceContext.serializeBinaryToWriter
      );
    }
    const f12 = message.getSomeStruct();
    if (f12 != null) {
      writer.writeMessage(
        12,
        f12,
        google_protobuf_struct_pb.Struct.serializeBinaryToWriter
      );
    }
    const f13 = message.getSomeTimestamp();
    if (f13 != null) {
      writer.writeMessage(
        13,
        f13,
        google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
      );
    }
    const f14 = message.getSomeType();
    if (f14 != null) {
      writer.writeMessage(
        14,
        f14,
        google_protobuf_type_pb.Type.serializeBinaryToWriter
      );
    }
    const f15 = message.getSomeDoubleValue();
    if (f15 != null) {
      writer.writeMessage(
        15,
        f15,
        google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
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
    return jspb.Message.getField(this, 3) as string[];
  }

  setSomeLabelsList(value: Array<string>) {
    jspb.Message.setField(this, 3, value || []);
  }

  addSomeLabels(value: string, opt_index?: number) {
    jspb.Message.addToRepeatedField(this, 3, value, opt_index);
  }

  clearSomeLabelsList() {
    this.setSomeLabelsList([]);
  }

  getSomeCodeGeneratorRequest(): google_protobuf_compiler_plugin_pb.CodeGeneratorRequest {
    return jspb.Message.getWrapperField(this, google_protobuf_compiler_plugin_pb.CodeGeneratorRequest, 4);
  }

  setSomeCodeGeneratorRequest(value?: google_protobuf_compiler_plugin_pb.CodeGeneratorRequest) {
    jspb.Message.setWrapperField(this, 4, value);
  }

  clearSomeCodeGeneratorRequest() {
    this.setSomeCodeGeneratorRequest(undefined);
  }

  hasSomeCodeGeneratorRequest(): boolean {
    return jspb.Message.getField(this, 4) != null;
  }

  getSomeAny(): google_protobuf_any_pb.Any {
    return jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 5);
  }

  setSomeAny(value?: google_protobuf_any_pb.Any) {
    jspb.Message.setWrapperField(this, 5, value);
  }

  clearSomeAny() {
    this.setSomeAny(undefined);
  }

  hasSomeAny(): boolean {
    return jspb.Message.getField(this, 5) != null;
  }

  getSomeMethod(): google_protobuf_api_pb.Method {
    return jspb.Message.getWrapperField(this, google_protobuf_api_pb.Method, 6);
  }

  setSomeMethod(value?: google_protobuf_api_pb.Method) {
    jspb.Message.setWrapperField(this, 6, value);
  }

  clearSomeMethod() {
    this.setSomeMethod(undefined);
  }

  hasSomeMethod(): boolean {
    return jspb.Message.getField(this, 6) != null;
  }

  getSomeGeneratedCodeInfo(): google_protobuf_descriptor_pb.GeneratedCodeInfo {
    return jspb.Message.getWrapperField(this, google_protobuf_descriptor_pb.GeneratedCodeInfo, 7);
  }

  setSomeGeneratedCodeInfo(value?: google_protobuf_descriptor_pb.GeneratedCodeInfo) {
    jspb.Message.setWrapperField(this, 7, value);
  }

  clearSomeGeneratedCodeInfo() {
    this.setSomeGeneratedCodeInfo(undefined);
  }

  hasSomeGeneratedCodeInfo(): boolean {
    return jspb.Message.getField(this, 7) != null;
  }

  getSomeDuration(): google_protobuf_duration_pb.Duration {
    return jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 8);
  }

  setSomeDuration(value?: google_protobuf_duration_pb.Duration) {
    jspb.Message.setWrapperField(this, 8, value);
  }

  clearSomeDuration() {
    this.setSomeDuration(undefined);
  }

  hasSomeDuration(): boolean {
    return jspb.Message.getField(this, 8) != null;
  }

  getSomeEmpty(): google_protobuf_empty_pb.Empty {
    return jspb.Message.getWrapperField(this, google_protobuf_empty_pb.Empty, 9);
  }

  setSomeEmpty(value?: google_protobuf_empty_pb.Empty) {
    jspb.Message.setWrapperField(this, 9, value);
  }

  clearSomeEmpty() {
    this.setSomeEmpty(undefined);
  }

  hasSomeEmpty(): boolean {
    return jspb.Message.getField(this, 9) != null;
  }

  getSomeFieldMask(): google_protobuf_field_mask_pb.FieldMask {
    return jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10);
  }

  setSomeFieldMask(value?: google_protobuf_field_mask_pb.FieldMask) {
    jspb.Message.setWrapperField(this, 10, value);
  }

  clearSomeFieldMask() {
    this.setSomeFieldMask(undefined);
  }

  hasSomeFieldMask(): boolean {
    return jspb.Message.getField(this, 10) != null;
  }

  getSomeSourceContext(): google_protobuf_source_context_pb.SourceContext {
    return jspb.Message.getWrapperField(this, google_protobuf_source_context_pb.SourceContext, 11);
  }

  setSomeSourceContext(value?: google_protobuf_source_context_pb.SourceContext) {
    jspb.Message.setWrapperField(this, 11, value);
  }

  clearSomeSourceContext() {
    this.setSomeSourceContext(undefined);
  }

  hasSomeSourceContext(): boolean {
    return jspb.Message.getField(this, 11) != null;
  }

  getSomeStruct(): google_protobuf_struct_pb.Struct {
    return jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 12);
  }

  setSomeStruct(value?: google_protobuf_struct_pb.Struct) {
    jspb.Message.setWrapperField(this, 12, value);
  }

  clearSomeStruct() {
    this.setSomeStruct(undefined);
  }

  hasSomeStruct(): boolean {
    return jspb.Message.getField(this, 12) != null;
  }

  getSomeTimestamp(): google_protobuf_timestamp_pb.Timestamp {
    return jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 13);
  }

  setSomeTimestamp(value?: google_protobuf_timestamp_pb.Timestamp) {
    jspb.Message.setWrapperField(this, 13, value);
  }

  clearSomeTimestamp() {
    this.setSomeTimestamp(undefined);
  }

  hasSomeTimestamp(): boolean {
    return jspb.Message.getField(this, 13) != null;
  }

  getSomeType(): google_protobuf_type_pb.Type {
    return jspb.Message.getWrapperField(this, google_protobuf_type_pb.Type, 14);
  }

  setSomeType(value?: google_protobuf_type_pb.Type) {
    jspb.Message.setWrapperField(this, 14, value);
  }

  clearSomeType() {
    this.setSomeType(undefined);
  }

  hasSomeType(): boolean {
    return jspb.Message.getField(this, 14) != null;
  }

  getSomeDoubleValue(): google_protobuf_wrappers_pb.DoubleValue {
    return jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 15);
  }

  setSomeDoubleValue(value?: google_protobuf_wrappers_pb.DoubleValue) {
    jspb.Message.setWrapperField(this, 15, value);
  }

  clearSomeDoubleValue() {
    this.setSomeDoubleValue(undefined);
  }

  hasSomeDoubleValue(): boolean {
    return jspb.Message.getField(this, 15) != null;
  }
};
