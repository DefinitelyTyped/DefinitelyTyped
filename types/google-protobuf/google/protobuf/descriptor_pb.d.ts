import * as jspb from "../../index";

export class FileDescriptorSet extends jspb.Message {
  clearFileList(): void;
  getFileList(): Array<FileDescriptorProto>;
  setFileList(value: Array<FileDescriptorProto>): void;
  addFile(value?: FileDescriptorProto, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileDescriptorSet.AsObject;
  static toObject(includeInstance: boolean, msg: FileDescriptorSet): FileDescriptorSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileDescriptorSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileDescriptorSet;
  static deserializeBinaryFromReader(message: FileDescriptorSet, reader: jspb.BinaryReader): FileDescriptorSet;
}

export namespace FileDescriptorSet {
  export type AsObject = {
    fileList: Array<FileDescriptorProto.AsObject>,
  }
}

export class FileDescriptorProto extends jspb.Message {
  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  hasPackage(): boolean;
  clearPackage(): void;
  getPackage(): string;
  setPackage(value: string): void;

  clearDependencyList(): void;
  getDependencyList(): Array<string>;
  setDependencyList(value: Array<string>): void;
  addDependency(value: string, index?: number): void;

  clearPublicDependencyList(): void;
  getPublicDependencyList(): Array<number>;
  setPublicDependencyList(value: Array<number>): void;
  addPublicDependency(value: number, index?: number): void;

  clearWeakDependencyList(): void;
  getWeakDependencyList(): Array<number>;
  setWeakDependencyList(value: Array<number>): void;
  addWeakDependency(value: number, index?: number): void;

  clearMessageTypeList(): void;
  getMessageTypeList(): Array<DescriptorProto>;
  setMessageTypeList(value: Array<DescriptorProto>): void;
  addMessageType(value?: DescriptorProto, index?: number): void;

  clearEnumTypeList(): void;
  getEnumTypeList(): Array<EnumDescriptorProto>;
  setEnumTypeList(value: Array<EnumDescriptorProto>): void;
  addEnumType(value?: EnumDescriptorProto, index?: number): void;

  clearServiceList(): void;
  getServiceList(): Array<ServiceDescriptorProto>;
  setServiceList(value: Array<ServiceDescriptorProto>): void;
  addService(value?: ServiceDescriptorProto, index?: number): void;

  clearExtensionList(): void;
  getExtensionList(): Array<FieldDescriptorProto>;
  setExtensionList(value: Array<FieldDescriptorProto>): void;
  addExtension(value?: FieldDescriptorProto, index?: number): void;

  hasOptions(): boolean;
  clearOptions(): void;
  getOptions(): FileOptions;
  setOptions(value?: FileOptions): void;

  hasSourceCodeInfo(): boolean;
  clearSourceCodeInfo(): void;
  getSourceCodeInfo(): SourceCodeInfo;
  setSourceCodeInfo(value?: SourceCodeInfo): void;

  hasSyntax(): boolean;
  clearSyntax(): void;
  getSyntax(): string;
  setSyntax(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileDescriptorProto.AsObject;
  static toObject(includeInstance: boolean, msg: FileDescriptorProto): FileDescriptorProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileDescriptorProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileDescriptorProto;
  static deserializeBinaryFromReader(message: FileDescriptorProto, reader: jspb.BinaryReader): FileDescriptorProto;
}

export namespace FileDescriptorProto {
  export type AsObject = {
    name?: string,
    package?: string,
    dependencyList: Array<string>,
    publicDependencyList: Array<number>,
    weakDependencyList: Array<number>,
    messageTypeList: Array<DescriptorProto.AsObject>,
    enumTypeList: Array<EnumDescriptorProto.AsObject>,
    serviceList: Array<ServiceDescriptorProto.AsObject>,
    extensionList: Array<FieldDescriptorProto.AsObject>,
    options: FileOptions.AsObject,
    sourceCodeInfo: SourceCodeInfo.AsObject,
    syntax?: string,
  }
}

export class DescriptorProto extends jspb.Message {
  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  clearFieldList(): void;
  getFieldList(): Array<FieldDescriptorProto>;
  setFieldList(value: Array<FieldDescriptorProto>): void;
  addField(value?: FieldDescriptorProto, index?: number): void;

  clearExtensionList(): void;
  getExtensionList(): Array<FieldDescriptorProto>;
  setExtensionList(value: Array<FieldDescriptorProto>): void;
  addExtension(value?: FieldDescriptorProto, index?: number): void;

  clearNestedTypeList(): void;
  getNestedTypeList(): Array<DescriptorProto>;
  setNestedTypeList(value: Array<DescriptorProto>): void;
  addNestedType(value?: DescriptorProto, index?: number): void;

  clearEnumTypeList(): void;
  getEnumTypeList(): Array<EnumDescriptorProto>;
  setEnumTypeList(value: Array<EnumDescriptorProto>): void;
  addEnumType(value?: EnumDescriptorProto, index?: number): void;

  clearExtensionRangeList(): void;
  getExtensionRangeList(): Array<DescriptorProto.ExtensionRange>;
  setExtensionRangeList(value: Array<DescriptorProto.ExtensionRange>): void;
  addExtensionRange(value?: DescriptorProto.ExtensionRange, index?: number): void;

  clearOneofDeclList(): void;
  getOneofDeclList(): Array<OneofDescriptorProto>;
  setOneofDeclList(value: Array<OneofDescriptorProto>): void;
  addOneofDecl(value?: OneofDescriptorProto, index?: number): void;

  hasOptions(): boolean;
  clearOptions(): void;
  getOptions(): MessageOptions;
  setOptions(value?: MessageOptions): void;

  clearReservedRangeList(): void;
  getReservedRangeList(): Array<DescriptorProto.ReservedRange>;
  setReservedRangeList(value: Array<DescriptorProto.ReservedRange>): void;
  addReservedRange(value?: DescriptorProto.ReservedRange, index?: number): void;

  clearReservedNameList(): void;
  getReservedNameList(): Array<string>;
  setReservedNameList(value: Array<string>): void;
  addReservedName(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DescriptorProto.AsObject;
  static toObject(includeInstance: boolean, msg: DescriptorProto): DescriptorProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DescriptorProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DescriptorProto;
  static deserializeBinaryFromReader(message: DescriptorProto, reader: jspb.BinaryReader): DescriptorProto;
}

export namespace DescriptorProto {
  export type AsObject = {
    name?: string,
    fieldList: Array<FieldDescriptorProto.AsObject>,
    extensionList: Array<FieldDescriptorProto.AsObject>,
    nestedTypeList: Array<DescriptorProto.AsObject>,
    enumTypeList: Array<EnumDescriptorProto.AsObject>,
    extensionRangeList: Array<DescriptorProto.ExtensionRange.AsObject>,
    oneofDeclList: Array<OneofDescriptorProto.AsObject>,
    options: MessageOptions.AsObject,
    reservedRangeList: Array<DescriptorProto.ReservedRange.AsObject>,
    reservedNameList: Array<string>,
  }

  export class ExtensionRange extends jspb.Message {
    hasStart(): boolean;
    clearStart(): void;
    getStart(): number;
    setStart(value: number): void;

    hasEnd(): boolean;
    clearEnd(): void;
    getEnd(): number;
    setEnd(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExtensionRange.AsObject;
    static toObject(includeInstance: boolean, msg: ExtensionRange): ExtensionRange.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExtensionRange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExtensionRange;
    static deserializeBinaryFromReader(message: ExtensionRange, reader: jspb.BinaryReader): ExtensionRange;
  }

  export namespace ExtensionRange {
    export type AsObject = {
      start?: number,
      end?: number,
    }
  }

  export class ReservedRange extends jspb.Message {
    hasStart(): boolean;
    clearStart(): void;
    getStart(): number;
    setStart(value: number): void;

    hasEnd(): boolean;
    clearEnd(): void;
    getEnd(): number;
    setEnd(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReservedRange.AsObject;
    static toObject(includeInstance: boolean, msg: ReservedRange): ReservedRange.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReservedRange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReservedRange;
    static deserializeBinaryFromReader(message: ReservedRange, reader: jspb.BinaryReader): ReservedRange;
  }

  export namespace ReservedRange {
    export type AsObject = {
      start?: number,
      end?: number,
    }
  }
}

export class FieldDescriptorProto extends jspb.Message {
  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  hasNumber(): boolean;
  clearNumber(): void;
  getNumber(): number;
  setNumber(value: number): void;

  hasLabel(): boolean;
  clearLabel(): void;
  getLabel(): FieldDescriptorProto.Label;
  setLabel(value: FieldDescriptorProto.Label): void;

  hasType(): boolean;
  clearType(): void;
  getType(): FieldDescriptorProto.Type;
  setType(value: FieldDescriptorProto.Type): void;

  hasTypeName(): boolean;
  clearTypeName(): void;
  getTypeName(): string;
  setTypeName(value: string): void;

  hasExtendee(): boolean;
  clearExtendee(): void;
  getExtendee(): string;
  setExtendee(value: string): void;

  hasDefaultValue(): boolean;
  clearDefaultValue(): void;
  getDefaultValue(): string;
  setDefaultValue(value: string): void;

  hasOneofIndex(): boolean;
  clearOneofIndex(): void;
  getOneofIndex(): number;
  setOneofIndex(value: number): void;

  hasJsonName(): boolean;
  clearJsonName(): void;
  getJsonName(): string;
  setJsonName(value: string): void;

  hasOptions(): boolean;
  clearOptions(): void;
  getOptions(): FieldOptions;
  setOptions(value?: FieldOptions): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldDescriptorProto.AsObject;
  static toObject(includeInstance: boolean, msg: FieldDescriptorProto): FieldDescriptorProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FieldDescriptorProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldDescriptorProto;
  static deserializeBinaryFromReader(message: FieldDescriptorProto, reader: jspb.BinaryReader): FieldDescriptorProto;
}

export namespace FieldDescriptorProto {
  export type AsObject = {
    name?: string,
    number?: number,
    label?: FieldDescriptorProto.Label,
    type?: FieldDescriptorProto.Type,
    typeName?: string,
    extendee?: string,
    defaultValue?: string,
    oneofIndex?: number,
    jsonName?: string,
    options: FieldOptions.AsObject,
  }

  export enum Type {
    TYPE_DOUBLE = 1,
    TYPE_FLOAT = 2,
    TYPE_INT64 = 3,
    TYPE_UINT64 = 4,
    TYPE_INT32 = 5,
    TYPE_FIXED64 = 6,
    TYPE_FIXED32 = 7,
    TYPE_BOOL = 8,
    TYPE_STRING = 9,
    TYPE_GROUP = 10,
    TYPE_MESSAGE = 11,
    TYPE_BYTES = 12,
    TYPE_UINT32 = 13,
    TYPE_ENUM = 14,
    TYPE_SFIXED32 = 15,
    TYPE_SFIXED64 = 16,
    TYPE_SINT32 = 17,
    TYPE_SINT64 = 18,
  }

  export enum Label {
    LABEL_OPTIONAL = 1,
    LABEL_REQUIRED = 2,
    LABEL_REPEATED = 3,
  }
}

export class OneofDescriptorProto extends jspb.Message {
  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  hasOptions(): boolean;
  clearOptions(): void;
  getOptions(): OneofOptions;
  setOptions(value?: OneofOptions): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OneofDescriptorProto.AsObject;
  static toObject(includeInstance: boolean, msg: OneofDescriptorProto): OneofDescriptorProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OneofDescriptorProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OneofDescriptorProto;
  static deserializeBinaryFromReader(message: OneofDescriptorProto, reader: jspb.BinaryReader): OneofDescriptorProto;
}

export namespace OneofDescriptorProto {
  export type AsObject = {
    name?: string,
    options: OneofOptions.AsObject,
  }
}

export class EnumDescriptorProto extends jspb.Message {
  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  clearValueList(): void;
  getValueList(): Array<EnumValueDescriptorProto>;
  setValueList(value: Array<EnumValueDescriptorProto>): void;
  addValue(value?: EnumValueDescriptorProto, index?: number): void;

  hasOptions(): boolean;
  clearOptions(): void;
  getOptions(): EnumOptions;
  setOptions(value?: EnumOptions): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnumDescriptorProto.AsObject;
  static toObject(includeInstance: boolean, msg: EnumDescriptorProto): EnumDescriptorProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnumDescriptorProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnumDescriptorProto;
  static deserializeBinaryFromReader(message: EnumDescriptorProto, reader: jspb.BinaryReader): EnumDescriptorProto;
}

export namespace EnumDescriptorProto {
  export type AsObject = {
    name?: string,
    valueList: Array<EnumValueDescriptorProto.AsObject>,
    options: EnumOptions.AsObject,
  }
}

export class EnumValueDescriptorProto extends jspb.Message {
  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  hasNumber(): boolean;
  clearNumber(): void;
  getNumber(): number;
  setNumber(value: number): void;

  hasOptions(): boolean;
  clearOptions(): void;
  getOptions(): EnumValueOptions;
  setOptions(value?: EnumValueOptions): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnumValueDescriptorProto.AsObject;
  static toObject(includeInstance: boolean, msg: EnumValueDescriptorProto): EnumValueDescriptorProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnumValueDescriptorProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnumValueDescriptorProto;
  static deserializeBinaryFromReader(message: EnumValueDescriptorProto, reader: jspb.BinaryReader): EnumValueDescriptorProto;
}

export namespace EnumValueDescriptorProto {
  export type AsObject = {
    name?: string,
    number?: number,
    options: EnumValueOptions.AsObject,
  }
}

export class ServiceDescriptorProto extends jspb.Message {
  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  clearMethodList(): void;
  getMethodList(): Array<MethodDescriptorProto>;
  setMethodList(value: Array<MethodDescriptorProto>): void;
  addMethod(value?: MethodDescriptorProto, index?: number): void;

  hasOptions(): boolean;
  clearOptions(): void;
  getOptions(): ServiceOptions;
  setOptions(value?: ServiceOptions): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceDescriptorProto.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceDescriptorProto): ServiceDescriptorProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceDescriptorProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceDescriptorProto;
  static deserializeBinaryFromReader(message: ServiceDescriptorProto, reader: jspb.BinaryReader): ServiceDescriptorProto;
}

export namespace ServiceDescriptorProto {
  export type AsObject = {
    name?: string,
    methodList: Array<MethodDescriptorProto.AsObject>,
    options: ServiceOptions.AsObject,
  }
}

export class MethodDescriptorProto extends jspb.Message {
  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  hasInputType(): boolean;
  clearInputType(): void;
  getInputType(): string;
  setInputType(value: string): void;

  hasOutputType(): boolean;
  clearOutputType(): void;
  getOutputType(): string;
  setOutputType(value: string): void;

  hasOptions(): boolean;
  clearOptions(): void;
  getOptions(): MethodOptions;
  setOptions(value?: MethodOptions): void;

  hasClientStreaming(): boolean;
  clearClientStreaming(): void;
  getClientStreaming(): boolean;
  setClientStreaming(value: boolean): void;

  hasServerStreaming(): boolean;
  clearServerStreaming(): void;
  getServerStreaming(): boolean;
  setServerStreaming(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MethodDescriptorProto.AsObject;
  static toObject(includeInstance: boolean, msg: MethodDescriptorProto): MethodDescriptorProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MethodDescriptorProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MethodDescriptorProto;
  static deserializeBinaryFromReader(message: MethodDescriptorProto, reader: jspb.BinaryReader): MethodDescriptorProto;
}

export namespace MethodDescriptorProto {
  export type AsObject = {
    name?: string,
    inputType?: string,
    outputType?: string,
    options: MethodOptions.AsObject,
    clientStreaming?: boolean,
    serverStreaming?: boolean,
  }
}

export class FileOptions extends jspb.Message {
  hasJavaPackage(): boolean;
  clearJavaPackage(): void;
  getJavaPackage(): string;
  setJavaPackage(value: string): void;

  hasJavaOuterClassname(): boolean;
  clearJavaOuterClassname(): void;
  getJavaOuterClassname(): string;
  setJavaOuterClassname(value: string): void;

  hasJavaMultipleFiles(): boolean;
  clearJavaMultipleFiles(): void;
  getJavaMultipleFiles(): boolean;
  setJavaMultipleFiles(value: boolean): void;

  hasJavaGenerateEqualsAndHash(): boolean;
  clearJavaGenerateEqualsAndHash(): void;
  getJavaGenerateEqualsAndHash(): boolean;
  setJavaGenerateEqualsAndHash(value: boolean): void;

  hasJavaStringCheckUtf8(): boolean;
  clearJavaStringCheckUtf8(): void;
  getJavaStringCheckUtf8(): boolean;
  setJavaStringCheckUtf8(value: boolean): void;

  hasOptimizeFor(): boolean;
  clearOptimizeFor(): void;
  getOptimizeFor(): FileOptions.OptimizeMode;
  setOptimizeFor(value: FileOptions.OptimizeMode): void;

  hasGoPackage(): boolean;
  clearGoPackage(): void;
  getGoPackage(): string;
  setGoPackage(value: string): void;

  hasCcGenericServices(): boolean;
  clearCcGenericServices(): void;
  getCcGenericServices(): boolean;
  setCcGenericServices(value: boolean): void;

  hasJavaGenericServices(): boolean;
  clearJavaGenericServices(): void;
  getJavaGenericServices(): boolean;
  setJavaGenericServices(value: boolean): void;

  hasPyGenericServices(): boolean;
  clearPyGenericServices(): void;
  getPyGenericServices(): boolean;
  setPyGenericServices(value: boolean): void;

  hasDeprecated(): boolean;
  clearDeprecated(): void;
  getDeprecated(): boolean;
  setDeprecated(value: boolean): void;

  hasCcEnableArenas(): boolean;
  clearCcEnableArenas(): void;
  getCcEnableArenas(): boolean;
  setCcEnableArenas(value: boolean): void;

  hasObjcClassPrefix(): boolean;
  clearObjcClassPrefix(): void;
  getObjcClassPrefix(): string;
  setObjcClassPrefix(value: string): void;

  hasCsharpNamespace(): boolean;
  clearCsharpNamespace(): void;
  getCsharpNamespace(): string;
  setCsharpNamespace(value: string): void;

  hasSwiftPrefix(): boolean;
  clearSwiftPrefix(): void;
  getSwiftPrefix(): string;
  setSwiftPrefix(value: string): void;

  clearUninterpretedOptionList(): void;
  getUninterpretedOptionList(): Array<UninterpretedOption>;
  setUninterpretedOptionList(value: Array<UninterpretedOption>): void;
  addUninterpretedOption(value?: UninterpretedOption, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileOptions.AsObject;
  static toObject(includeInstance: boolean, msg: FileOptions): FileOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileOptions;
  static deserializeBinaryFromReader(message: FileOptions, reader: jspb.BinaryReader): FileOptions;
}

export namespace FileOptions {
  export type AsObject = {
    javaPackage?: string,
    javaOuterClassname?: string,
    javaMultipleFiles?: boolean,
    javaGenerateEqualsAndHash?: boolean,
    javaStringCheckUtf8?: boolean,
    optimizeFor?: FileOptions.OptimizeMode,
    goPackage?: string,
    ccGenericServices?: boolean,
    javaGenericServices?: boolean,
    pyGenericServices?: boolean,
    deprecated?: boolean,
    ccEnableArenas?: boolean,
    objcClassPrefix?: string,
    csharpNamespace?: string,
    swiftPrefix?: string,
    uninterpretedOptionList: Array<UninterpretedOption.AsObject>,
  }

  export enum OptimizeMode {
    SPEED = 1,
    CODE_SIZE = 2,
    LITE_RUNTIME = 3,
  }
}

export class MessageOptions extends jspb.Message {
  hasMessageSetWireFormat(): boolean;
  clearMessageSetWireFormat(): void;
  getMessageSetWireFormat(): boolean;
  setMessageSetWireFormat(value: boolean): void;

  hasNoStandardDescriptorAccessor(): boolean;
  clearNoStandardDescriptorAccessor(): void;
  getNoStandardDescriptorAccessor(): boolean;
  setNoStandardDescriptorAccessor(value: boolean): void;

  hasDeprecated(): boolean;
  clearDeprecated(): void;
  getDeprecated(): boolean;
  setDeprecated(value: boolean): void;

  hasMapEntry(): boolean;
  clearMapEntry(): void;
  getMapEntry(): boolean;
  setMapEntry(value: boolean): void;

  clearUninterpretedOptionList(): void;
  getUninterpretedOptionList(): Array<UninterpretedOption>;
  setUninterpretedOptionList(value: Array<UninterpretedOption>): void;
  addUninterpretedOption(value?: UninterpretedOption, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageOptions.AsObject;
  static toObject(includeInstance: boolean, msg: MessageOptions): MessageOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MessageOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageOptions;
  static deserializeBinaryFromReader(message: MessageOptions, reader: jspb.BinaryReader): MessageOptions;
}

export namespace MessageOptions {
  export type AsObject = {
    messageSetWireFormat?: boolean,
    noStandardDescriptorAccessor?: boolean,
    deprecated?: boolean,
    mapEntry?: boolean,
    uninterpretedOptionList: Array<UninterpretedOption.AsObject>,
  }
}

export class FieldOptions extends jspb.Message {
  hasCtype(): boolean;
  clearCtype(): void;
  getCtype(): FieldOptions.CType;
  setCtype(value: FieldOptions.CType): void;

  hasPacked(): boolean;
  clearPacked(): void;
  getPacked(): boolean;
  setPacked(value: boolean): void;

  hasJstype(): boolean;
  clearJstype(): void;
  getJstype(): FieldOptions.JSType;
  setJstype(value: FieldOptions.JSType): void;

  hasLazy(): boolean;
  clearLazy(): void;
  getLazy(): boolean;
  setLazy(value: boolean): void;

  hasDeprecated(): boolean;
  clearDeprecated(): void;
  getDeprecated(): boolean;
  setDeprecated(value: boolean): void;

  hasWeak(): boolean;
  clearWeak(): void;
  getWeak(): boolean;
  setWeak(value: boolean): void;

  clearUninterpretedOptionList(): void;
  getUninterpretedOptionList(): Array<UninterpretedOption>;
  setUninterpretedOptionList(value: Array<UninterpretedOption>): void;
  addUninterpretedOption(value?: UninterpretedOption, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldOptions.AsObject;
  static toObject(includeInstance: boolean, msg: FieldOptions): FieldOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FieldOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldOptions;
  static deserializeBinaryFromReader(message: FieldOptions, reader: jspb.BinaryReader): FieldOptions;
}

export namespace FieldOptions {
  export type AsObject = {
    ctype?: FieldOptions.CType,
    packed?: boolean,
    jstype?: FieldOptions.JSType,
    lazy?: boolean,
    deprecated?: boolean,
    weak?: boolean,
    uninterpretedOptionList: Array<UninterpretedOption.AsObject>,
  }

  export enum CType {
    STRING = 0,
    CORD = 1,
    STRING_PIECE = 2,
  }

  export enum JSType {
    JS_NORMAL = 0,
    JS_STRING = 1,
    JS_NUMBER = 2,
  }
}

export class OneofOptions extends jspb.Message {
  clearUninterpretedOptionList(): void;
  getUninterpretedOptionList(): Array<UninterpretedOption>;
  setUninterpretedOptionList(value: Array<UninterpretedOption>): void;
  addUninterpretedOption(value?: UninterpretedOption, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OneofOptions.AsObject;
  static toObject(includeInstance: boolean, msg: OneofOptions): OneofOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OneofOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OneofOptions;
  static deserializeBinaryFromReader(message: OneofOptions, reader: jspb.BinaryReader): OneofOptions;
}

export namespace OneofOptions {
  export type AsObject = {
    uninterpretedOptionList: Array<UninterpretedOption.AsObject>,
  }
}

export class EnumOptions extends jspb.Message {
  hasAllowAlias(): boolean;
  clearAllowAlias(): void;
  getAllowAlias(): boolean;
  setAllowAlias(value: boolean): void;

  hasDeprecated(): boolean;
  clearDeprecated(): void;
  getDeprecated(): boolean;
  setDeprecated(value: boolean): void;

  clearUninterpretedOptionList(): void;
  getUninterpretedOptionList(): Array<UninterpretedOption>;
  setUninterpretedOptionList(value: Array<UninterpretedOption>): void;
  addUninterpretedOption(value?: UninterpretedOption, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnumOptions.AsObject;
  static toObject(includeInstance: boolean, msg: EnumOptions): EnumOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnumOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnumOptions;
  static deserializeBinaryFromReader(message: EnumOptions, reader: jspb.BinaryReader): EnumOptions;
}

export namespace EnumOptions {
  export type AsObject = {
    allowAlias?: boolean,
    deprecated?: boolean,
    uninterpretedOptionList: Array<UninterpretedOption.AsObject>,
  }
}

export class EnumValueOptions extends jspb.Message {
  hasDeprecated(): boolean;
  clearDeprecated(): void;
  getDeprecated(): boolean;
  setDeprecated(value: boolean): void;

  clearUninterpretedOptionList(): void;
  getUninterpretedOptionList(): Array<UninterpretedOption>;
  setUninterpretedOptionList(value: Array<UninterpretedOption>): void;
  addUninterpretedOption(value?: UninterpretedOption, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnumValueOptions.AsObject;
  static toObject(includeInstance: boolean, msg: EnumValueOptions): EnumValueOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnumValueOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnumValueOptions;
  static deserializeBinaryFromReader(message: EnumValueOptions, reader: jspb.BinaryReader): EnumValueOptions;
}

export namespace EnumValueOptions {
  export type AsObject = {
    deprecated?: boolean,
    uninterpretedOptionList: Array<UninterpretedOption.AsObject>,
  }
}

export class ServiceOptions extends jspb.Message {
  hasDeprecated(): boolean;
  clearDeprecated(): void;
  getDeprecated(): boolean;
  setDeprecated(value: boolean): void;

  clearUninterpretedOptionList(): void;
  getUninterpretedOptionList(): Array<UninterpretedOption>;
  setUninterpretedOptionList(value: Array<UninterpretedOption>): void;
  addUninterpretedOption(value?: UninterpretedOption, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceOptions.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceOptions): ServiceOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceOptions;
  static deserializeBinaryFromReader(message: ServiceOptions, reader: jspb.BinaryReader): ServiceOptions;
}

export namespace ServiceOptions {
  export type AsObject = {
    deprecated?: boolean,
    uninterpretedOptionList: Array<UninterpretedOption.AsObject>,
  }
}

export class MethodOptions extends jspb.Message {
  hasDeprecated(): boolean;
  clearDeprecated(): void;
  getDeprecated(): boolean;
  setDeprecated(value: boolean): void;

  hasIdempotencyLevel(): boolean;
  clearIdempotencyLevel(): void;
  getIdempotencyLevel(): MethodOptions.IdempotencyLevel;
  setIdempotencyLevel(value: MethodOptions.IdempotencyLevel): void;

  clearUninterpretedOptionList(): void;
  getUninterpretedOptionList(): Array<UninterpretedOption>;
  setUninterpretedOptionList(value: Array<UninterpretedOption>): void;
  addUninterpretedOption(value?: UninterpretedOption, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MethodOptions.AsObject;
  static toObject(includeInstance: boolean, msg: MethodOptions): MethodOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MethodOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MethodOptions;
  static deserializeBinaryFromReader(message: MethodOptions, reader: jspb.BinaryReader): MethodOptions;
}

export namespace MethodOptions {
  export type AsObject = {
    deprecated?: boolean,
    idempotencyLevel?: MethodOptions.IdempotencyLevel,
    uninterpretedOptionList: Array<UninterpretedOption.AsObject>,
  }

  export enum IdempotencyLevel {
    IDEMPOTENCY_UNKNOWN = 0,
    NO_SIDE_EFFECTS = 1,
    IDEMPOTENT = 2,
  }
}

export class UninterpretedOption extends jspb.Message {
  clearNameList(): void;
  getNameList(): Array<UninterpretedOption.NamePart>;
  setNameList(value: Array<UninterpretedOption.NamePart>): void;
  addName(value?: UninterpretedOption.NamePart, index?: number): void;

  hasIdentifierValue(): boolean;
  clearIdentifierValue(): void;
  getIdentifierValue(): string;
  setIdentifierValue(value: string): void;

  hasPositiveIntValue(): boolean;
  clearPositiveIntValue(): void;
  getPositiveIntValue(): number;
  setPositiveIntValue(value: number): void;

  hasNegativeIntValue(): boolean;
  clearNegativeIntValue(): void;
  getNegativeIntValue(): number;
  setNegativeIntValue(value: number): void;

  hasDoubleValue(): boolean;
  clearDoubleValue(): void;
  getDoubleValue(): number;
  setDoubleValue(value: number): void;

  hasStringValue(): boolean;
  clearStringValue(): void;
  getStringValue(): Uint8Array | string;
  getStringValue_asU8(): Uint8Array;
  getStringValue_asB64(): string;
  setStringValue(value: Uint8Array | string): void;

  hasAggregateValue(): boolean;
  clearAggregateValue(): void;
  getAggregateValue(): string;
  setAggregateValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UninterpretedOption.AsObject;
  static toObject(includeInstance: boolean, msg: UninterpretedOption): UninterpretedOption.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UninterpretedOption, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UninterpretedOption;
  static deserializeBinaryFromReader(message: UninterpretedOption, reader: jspb.BinaryReader): UninterpretedOption;
}

export namespace UninterpretedOption {
  export type AsObject = {
    nameList: Array<UninterpretedOption.NamePart.AsObject>,
    identifierValue?: string,
    positiveIntValue?: number,
    negativeIntValue?: number,
    doubleValue?: number,
    stringValue: Uint8Array | string,
    aggregateValue?: string,
  }

  export class NamePart extends jspb.Message {
    hasNamePart(): boolean;
    clearNamePart(): void;
    getNamePart(): string;
    setNamePart(value: string): void;

    hasIsExtension(): boolean;
    clearIsExtension(): void;
    getIsExtension(): boolean;
    setIsExtension(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NamePart.AsObject;
    static toObject(includeInstance: boolean, msg: NamePart): NamePart.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NamePart, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NamePart;
    static deserializeBinaryFromReader(message: NamePart, reader: jspb.BinaryReader): NamePart;
  }

  export namespace NamePart {
    export type AsObject = {
      namePart?: string,
      isExtension?: boolean,
    }
  }
}

export class SourceCodeInfo extends jspb.Message {
  clearLocationList(): void;
  getLocationList(): Array<SourceCodeInfo.Location>;
  setLocationList(value: Array<SourceCodeInfo.Location>): void;
  addLocation(value?: SourceCodeInfo.Location, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SourceCodeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SourceCodeInfo): SourceCodeInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SourceCodeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SourceCodeInfo;
  static deserializeBinaryFromReader(message: SourceCodeInfo, reader: jspb.BinaryReader): SourceCodeInfo;
}

export namespace SourceCodeInfo {
  export type AsObject = {
    locationList: Array<SourceCodeInfo.Location.AsObject>,
  }

  export class Location extends jspb.Message {
    clearPathList(): void;
    getPathList(): Array<number>;
    setPathList(value: Array<number>): void;
    addPath(value: number, index?: number): void;

    clearSpanList(): void;
    getSpanList(): Array<number>;
    setSpanList(value: Array<number>): void;
    addSpan(value: number, index?: number): void;

    hasLeadingComments(): boolean;
    clearLeadingComments(): void;
    getLeadingComments(): string;
    setLeadingComments(value: string): void;

    hasTrailingComments(): boolean;
    clearTrailingComments(): void;
    getTrailingComments(): string;
    setTrailingComments(value: string): void;

    clearLeadingDetachedCommentsList(): void;
    getLeadingDetachedCommentsList(): Array<string>;
    setLeadingDetachedCommentsList(value: Array<string>): void;
    addLeadingDetachedComments(value: string, index?: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Location.AsObject;
    static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Location;
    static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
  }

  export namespace Location {
    export type AsObject = {
      pathList: Array<number>,
      spanList: Array<number>,
      leadingComments?: string,
      trailingComments?: string,
      leadingDetachedCommentsList: Array<string>,
    }
  }
}

export class GeneratedCodeInfo extends jspb.Message {
  clearAnnotationList(): void;
  getAnnotationList(): Array<GeneratedCodeInfo.Annotation>;
  setAnnotationList(value: Array<GeneratedCodeInfo.Annotation>): void;
  addAnnotation(value?: GeneratedCodeInfo.Annotation, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeneratedCodeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: GeneratedCodeInfo): GeneratedCodeInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GeneratedCodeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeneratedCodeInfo;
  static deserializeBinaryFromReader(message: GeneratedCodeInfo, reader: jspb.BinaryReader): GeneratedCodeInfo;
}

export namespace GeneratedCodeInfo {
  export type AsObject = {
    annotationList: Array<GeneratedCodeInfo.Annotation.AsObject>,
  }

  export class Annotation extends jspb.Message {
    clearPathList(): void;
    getPathList(): Array<number>;
    setPathList(value: Array<number>): void;
    addPath(value: number, index?: number): void;

    hasSourceFile(): boolean;
    clearSourceFile(): void;
    getSourceFile(): string;
    setSourceFile(value: string): void;

    hasBegin(): boolean;
    clearBegin(): void;
    getBegin(): number;
    setBegin(value: number): void;

    hasEnd(): boolean;
    clearEnd(): void;
    getEnd(): number;
    setEnd(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Annotation.AsObject;
    static toObject(includeInstance: boolean, msg: Annotation): Annotation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Annotation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Annotation;
    static deserializeBinaryFromReader(message: Annotation, reader: jspb.BinaryReader): Annotation;
  }

  export namespace Annotation {
    export type AsObject = {
      pathList: Array<number>,
      sourceFile?: string,
      begin?: number,
      end?: number,
    }
  }
}

