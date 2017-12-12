import { assert } from "chai";
import { readFileSync } from "fs";
import ProtoBuf = require("protobufjs");

function testProtoBufJs() {
    assert.ok("Builder" in ProtoBuf, "ProtoBuf should contain property Builder");
    assert.ok("ByteBuffer" in ProtoBuf, "ProtoBuf should contain property ByteBuffer");
    assert.ok("DotProto" in ProtoBuf, "ProtoBuf should contain property DotProto");
    assert.ok("Reflect" in ProtoBuf, "ProtoBuf should contain property Reflect");
    assert.ok("loadJson" in ProtoBuf, "ProtoBuf should contain property loadJson");
    assert.ok("loadJsonFile" in ProtoBuf, "ProtoBuf should contain property loadJsonFile");
    assert.ok("loadProto" in ProtoBuf, "ProtoBuf should contain property loadProto");
    assert.ok("loadProtoFile" in ProtoBuf, "ProtoBuf should contain property loadProtoFile");
    assert.ok("newBuilder" in ProtoBuf, "ProtoBuf should contain property newBuilder");

    var jsonProto: ProtoBuf.ProtoBuilder = ProtoBuf.loadJson(readFileSync("test.json",
        {"encoding": "utf8"}));
    assertIsProtoBuilder(jsonProto, "loadJson");

    var jsonFileProto: ProtoBuf.ProtoBuilder = ProtoBuf.loadJsonFile("test.json");
    assertIsProtoBuilder(jsonFileProto, "loadJsonFile");

    ProtoBuf.loadJsonFile("test.json", (error: any, builder: ProtoBuf.ProtoBuilder) => {
        assertIsProtoBuilder(builder, "loadJsonFile callback");
      });

    var proto: ProtoBuf.ProtoBuilder = ProtoBuf.loadProto(readFileSync("test.proto",
        {"encoding": "utf8"}));
    assertIsProtoBuilder(proto, "loadProto");

    var protoFile: ProtoBuf.ProtoBuilder = ProtoBuf.loadProtoFile("test.proto");
    assertIsProtoBuilder(protoFile, "loadProtoFile");

    ProtoBuf.loadProtoFile("test.proto", (error: any, builder: ProtoBuf.ProtoBuilder) => {
        assertIsProtoBuilder(builder, "loadProtoFile callback");
      });

     var newBuilder: ProtoBuf.ProtoBuilder = ProtoBuf.newBuilder();
     assertIsProtoBuilder(newBuilder, "newBuilder");

     assertIsNamespace(protoFile.ns, "protoFile.ns");
     assertIsNamespace(protoFile.ptr, "protoFile.ptr");

     assertIsMetaMessage<any>(protoFile.build(), "protoFile.build()");
     assertIsProtoBuf(protoFile.result, "protoFile.result");

     assertIsProtoBuilder(protoFile.create(), "protoFile.create()");
     assertIsProtoBuilder(protoFile.define("js"), "protoFile.define()");

     assertIsT(protoFile.lookup(), "protoFile.lookup()");
}

function testBuilderJs() {
    var Builder: ProtoBuf.Builder = ProtoBuf.Builder;
    assertIsBuilder(Builder, "Builder");

    var newBuilder: ProtoBuf.ProtoBuilder = new ProtoBuf.Builder();
    assertIsProtoBuilder(newBuilder, "new Builder()");

    var Message: ProtoBuf.Message = Builder.Message;
    var Service: ProtoBuf.Service = Builder.Service;
}

function testDotProtoJs() {
    var DotProto: ProtoBuf.DotProto = ProtoBuf.DotProto;
    assertIsDotProto(DotProto, "DotProto");
}

function testReflectJs() {
    var Reflect: ProtoBuf.Reflect = ProtoBuf.Reflect;
    assertIsReflect(Reflect, "Reflect");
}

function assertIsProtoBuilder(pb: ProtoBuf.ProtoBuilder, name: string) {
    if (pb != null && pb != undefined) {
        assert.ok("ns" in pb, name + " should contain property ns");
        assert.ok("ptr" in pb, name + " should contain property ptr");
        assert.ok("resolved" in pb, name + " should contain property resolved");
        assert.ok("result" in pb, name + " should contain property result");
        assert.ok("files" in pb, name + " should contain property files");
        assert.ok("importRoot" in pb, name + " should contain property importRoot");
        assert.ok("options" in pb, name + " should contain property options");
        assert.ok("reset" in pb, name + " should contain property reset");
        assert.ok("define" in pb, name + " should contain property define");
        assert.ok("create" in pb, name + " should contain property create");
        assert.ok("resolveAll" in pb, name + " should contain property resolveAll");
        assert.ok("build" in pb, name + " should contain property build");
        assert.ok("lookup" in pb, name + " should contain property lookup");
        assert.ok("syntax" in pb, name + " should contain property syntax");
    }
}

function assertIsBuilder(b: ProtoBuf.Builder, name: string) {
    assert.ok("Message" in b, name + " should contain property Message");
    assert.ok("Service" in b, name + " should contain property Service");
    assert.ok("isValidMessage" in b, name + " should contain property isValidMessage");
    assert.ok("isValidMessageField" in b, name + " should contain property isValidMessageField");
    assert.ok("isValidEnum" in b, name + " should contain property isValidEnum");
    assert.ok("isValidService" in b, name + " should contain property isValidService");
    assert.ok("isValidExtend" in b, name + " should contain property isValidExtend");
}

function assertIsProtoBuf(pb: ProtoBuf.ProtoBuf, name: string) {
    for (var pkg in pb) {
        if (pb.hasOwnProperty(pkg)) {
            for (var property in pb[pkg]) {
                if (typeof pb[pkg][property] == typeof Object
                      && pb[pkg].hasOwnProperty(property)) {
                    assertIsMetaMessage(pb[pkg][property],
                        name + "." + pkg + "." + property);
                }
            }
        }
    }
}

function assertIsMetaMessage<T>(mm: ProtoBuf.MetaMessage<T>, name: string) {
    assert.ok("decode" in mm, name + " should contain property decode");
    assert.ok("decodeDelimited" in mm, name + " should contain property decodeDelimited");
    assert.ok("decode64" in mm, name + " should contain property decode64");
    assert.ok("decodeHex" in mm, name + " should contain property decodeHex");
    assert.ok("decodeJSON" in mm, name + " should contain property decodeJSON");
}

function assertIsDotProto(dp: ProtoBuf.DotProto, name: string) {
    assert.ok("Parser" in dp, name + " should contain property Parser");
    assert.ok("Tokenizer" in dp, name + " should contain property Tokenizer");

    assertIsParser(new dp.Parser(readFileSync("test.proto", {"encoding": "utf8"})),
        name + ".Parser");
    assertIsTokenizer(new dp.Tokenizer(readFileSync("test.proto", {"encoding": "utf8"})),
        name + ".Tokenizer");
}

function assertIsParser(p: ProtoBuf.Parser, name: string) {
    assert.ok("tn" in p, name + " should contain property tn");
    assert.ok("parse" in p, name + " should contain property parse");
    assert.ok("toString" in p, name + " should contain property toString");

    assertIsTokenizer(p.tn, name + ".tn");
    assertIsMetaProto(p.parse(), name + ".parse()");
}

function assertIsTokenizer(t: ProtoBuf.Tokenizer, name: string) {
    assert.ok("source" in t, name + " should contain property source");
    assert.ok("index" in t, name + " should contain property index");
    assert.ok("line" in t, name + " should contain property line");
    assert.ok("stack" in t, name + " should contain property stack");
    assert.ok("readingString" in t, name + " should contain property readingString");
    assert.ok("stringEndsWith" in t, name + " should contain property stringEndsWith");
    assert.ok("next" in t, name + " should contain property next");
    assert.ok("peek" in t, name + " should contain property peek");
    assert.ok("toString" in t, name + " should contain property toString");
}

function assertIsMetaProto(mp: ProtoBuf.MetaProto, name: string) {
    assert.ok("package" in mp, name + " should contain proeprty package");
    assert.ok("messages" in mp, name + " should contain proeprty messages");
    assert.ok("enums" in mp, name + " should contain proeprty enums");
    assert.ok("imports" in mp, name + " should contain proeprty imports");
    assert.ok("options" in mp, name + " should contain proeprty options");
    assert.ok("services" in mp, name + " should contain proeprty services");

    for (var message in mp.messages) {
        assertIsProtoMessage(mp.messages[message], name + ".messages." + message);
    }
    for (var en in mp.enums) {
        assertIsProtoEnum(mp.enums[en], name + ".enums." + en);
    }
    for (var serv in mp.services) {
        assertIsProtoService(mp.services[serv], name + ".services." + serv);
    }
}

function assertIsProtoEnum(pe: ProtoBuf.ProtoEnum, name: string) {
    assert.ok("name" in pe, name + " should contain property name");
    assert.ok("values" in pe, name + " should contain property values");
    assert.ok("options" in pe, name + " should contain property options");

    for (var value in pe.values) {
        assertIsProtoEnumValue(pe.values[value], name + ".values." + value);
    }
}

function assertIsProtoEnumValue(pev: ProtoBuf.ProtoEnumValue, name: string) {
    assert.ok("name" in pev, name + " should contain property name");
    assert.ok("id" in pev, name + " should contain property id");
}

function assertIsProtoField(pf: ProtoBuf.ProtoField, name: string) {
    assert.ok("rule" in pf, name + " should contain property rule");
    assert.ok("options" in pf, name + " should contain property options");
    assert.ok("type" in pf, name + " should contain property type");
    assert.ok("name" in pf, name + " should contain property name");
    assert.ok("id" in pf, name + " should contain property id");
}

function assertIsProtoMessage(pm: ProtoBuf.ProtoMessage, name: string) {
    assert.ok("name" in pm, name + " should contain property name");
    assert.ok("fields" in pm, name + " should contain property fields");
    assert.ok("enums" in pm, name + " should contain property enums");
    assert.ok("messages" in pm, name + " should contain property messages");
    assert.ok("options" in pm, name + " should contain property options");
    assert.ok("oneofs" in pm, name + " should contain property oneofs");

    for (var f in pm.fields) {
        assertIsProtoField(pm.fields[f], name + ".fields." + f);
    }
    for (var en in pm.enums) {
        assertIsProtoEnum(pm.enums[en], name + ".enums." + en);
    }
    for (var m in pm.messages) {
        assertIsProtoMessage(pm.messages[m], name + ".messages." + m);
    }
}

function assertIsProtoRpcService(rpc: ProtoBuf.ProtoRpcService, name: string) {
    assert.ok("request" in rpc, name + " should contain property request");
    assert.ok("response" in rpc, name + " should contain property response");
    assert.ok("options" in rpc, name + " should contain property options");
}

function assertIsProtoService(ps: ProtoBuf.ProtoService, name: string) {
    assert.ok("name" in ps, name + " should contain property name");
    assert.ok("rpc" in ps, name + " should contain property rpc");
    assert.ok("options" in ps, name + " should contain property options");

    for (var rpc in ps.rpc) {
      assertIsProtoRpcService(ps.rpc[rpc], name + ".rpc." + rpc);
    }
}

function assertIsReflect(r: ProtoBuf.Reflect, name: string) {
    assert.ok("T" in r, name + " should contain property T");
    assert.ok("Namespace" in r, name + " should contain property Namespace");
    assert.ok("Message" in r, name + " should contain property Message");
    assert.ok("Enum" in r, name + " should contain property Enum");
    assert.ok("Extension" in r, name + " should contain property Extension");
    assert.ok("Service" in r, name + " should contain property Service");

    assertIsT(new ProtoBuf.Reflect.T(), "new ProtoBuf.Reflect.T()");
    assertIsNamespace(new ProtoBuf.Reflect.Namespace(), "new ProtoBuf.Reflect.Namespace()");
    assertIsMessage(new ProtoBuf.Reflect.Message(), "new ProtoBuf.Reflect.Message()");
    assertIsEnum(new ProtoBuf.Reflect.Enum(), "new ProtoBuf.Reflect.Enum()");
    assertIsExtension(new ProtoBuf.Reflect.Extension(), "new ProtoBuf.Reflect.Extension()");
    assertIsService(new ProtoBuf.Reflect.Service(), "new ProtoBuf.Reflect.Service()");

    assertIsValue(new ProtoBuf.Reflect.Enum.Value(), "new ProtoBuf.Reflect.Enum.Value()");
    assertIsOneOf(new ProtoBuf.Reflect.Message.OneOf(), "new ProtoBuf.Reflect.Message.OneOf()");
    assertIsMethod(new ProtoBuf.Reflect.Service.Method(), "new ProtoBuf.Reflect.Service.Method()");
    assertIsRPCMethod(new ProtoBuf.Reflect.Service.RPCMethod(),
        "new ProtoBuf.Reflect.Service.RPCMethod()");
}

function assertIsT(t: ProtoBuf.ReflectT, name: string) {
    if (t != null && t != undefined) {
        assertIsTNoRecursion(t, name);

        assertIsProtoBuilder(t.builder, name + ".builder");
        assertIsTNoRecursion(t.parent, name + ".parent");
    }
}

function assertIsTNoRecursion(t: ProtoBuf.ReflectT, name: string) {
    if (t != null) {
        assert.ok("builder" in t, name + " should contain property builder");
        assert.ok("parent" in t, name + " should contain property parent");
        assert.ok("name" in t, name + " should contain property name");
        assert.ok("fqn" in t, name + " should contain property fqn");
        assert.ok("toString" in t, name + " should contain property toString");
    }
}

function assertIsNamespace(ns: ProtoBuf.ReflectNamespace, name: string) {
    assertIsNamespaceNoRecursion(ns, name);

    assertIsT(ns, name);

    for (var child in ns.children) {
        assertIsT(ns.children[child], name + ".children." + child);
    }
    for (var child in ns.getChildren()) {
        assertIsT(ns.getChildren()[child], name + ".getChildren()." + child);
    }
    assertIsT(ns.getChild(), name + ".getChild()");
}

function assertIsNamespaceNoRecursion(ns: ProtoBuf.ReflectNamespace, name: string) {
    assert.ok("className" in ns, name + " should contain property className");
    assert.ok("children" in ns, name + " should contain property children");
    assert.ok("options" in ns, name + " should contain property options");
    assert.ok("syntax" in ns, name + " should contain property syntax");
    assert.ok("getChildren" in ns, name + " should contain property getChildren");
    assert.ok("addChild" in ns, name + " should contain property addChild");
    assert.ok("getChild" in ns, name + " should contain property getChild");
    assert.ok("resolve" in ns, name + " should contain property resolve");
    assert.ok("build" in ns, name + " should contain property build");
    assert.ok("buildOpt" in ns, name + " should contain property buildOpt");
    assert.ok("getOption" in ns, name + " should contain property getOption");
}

function assertIsMessage(m: ProtoBuf.ReflectMessage, name: string) {
    if (m != null && m != undefined) {
        assert.ok("extensions" in m, name + " should contain property extensions");
        assert.ok("clazz" in m, name + " should contain property clazz");
        assert.ok("isGroup" in m, name + " should contain property isGroup");
        assert.ok("build" in m, name + " should contain property build");
        assert.ok("encode" in m, name + " should contain property encode");
        assert.ok("calculate" in m, name + " should contain property calculate");
        assert.ok("decode" in m, name + " should contain property decode");

        assertIsNamespace(m, name);
    }
}

function assertIsEnum(e: ProtoBuf.ReflectEnum, name: string) {
    assert.ok("object" in e, name + " should contain property object");
    assert.ok("build" in e, name + " should contain property build");

    assertIsNamespace(e, name);
}

function assertIsExtension(e: ProtoBuf.ReflectExtension, name: string) {
    assert.ok("field" in e, name + " should contain property field");

    assertIsT(e, name);

    assertIsField(e.field, name + ".field");
}

function assertIsService(s: ProtoBuf.ReflectService, name: string) {
    assert.ok("clazz" in s, name + " should contain property clazz");
    assert.ok("build" in s, name + " should contain property build");

    assertIsNamespace(s, name);
}

function assertIsField(f: ProtoBuf.ReflectField, name: string) {
    if (f != null && f != undefined) {
        assert.ok("className" in f, name + " should contain property className");
        assert.ok("required" in f, name + " should contain property required");
        assert.ok("repeated" in f, name + " should contain property repeated");
        assert.ok("type" in f, name + " should contain property type");
        assert.ok("resolvedType" in f, name + " should contain property resolvedType");
        assert.ok("id" in f, name + " should contain property id");
        assert.ok("options" in f, name + " should contain property options");
        assert.ok("defaultValue" in f, name + " should contain property defaultValue");
        assert.ok("oneof" in f, name + " should contain property oneof");
        assert.ok("originalName" in f, name + " should contain property originalName");
        assert.ok("build" in f, name + " should contain property build");
        assert.ok("mkLong" in f, name + " should contain property mkLong");
        assert.ok("verifyValue" in f, name + " should contain property verifyValue");
        assert.ok("encode" in f, name + " should contain property encode");
        assert.ok("encodeValue" in f, name + " should contain property encodeValue");
        assert.ok("calculate" in f, name + " should contain property calculate");
        assert.ok("calculateValue" in f, name + " should contain property calculateValue");
        assert.ok("decode" in f, name + " should contain property decode");

        assertIsT(f, name);

        assertIsT(f.resolvedType, name + ".resolvedType");
        assertIsOneOf(f.oneof, name + ".oneof");
    }
}

function assertIsWireTuple(wt: ProtoBuf.WireTuple, name: string) {
    assert.ok("name" in wt, name + " should contain property name");
    assert.ok("wireType" in wt, name + " should contain property wireType");
}

function assertIsExtensionField(ef: ProtoBuf.ReflectExtensionField, name: string) {
    assert.ok("extension" in ef, name + " should contain property extension");

    assertIsField(ef, name);

    assertIsExtension(ef.extension, name + ".extension");
}

function assertIsOneOf(oo: ProtoBuf.ReflectOneOf, name: string) {
    assert.ok("fields" in oo, name + " should contain property fields");

    for (var f in oo.fields) {
        assertIsField(oo.fields[f], name + ".fields." + f);
    }
}

function assertIsValue(v: ProtoBuf.ReflectValue, name: string) {
    assert.ok("className" in v, name + " should contain property className");
    assert.ok("id" in v, name + " should contain property id");

    assertIsT(v, name);
}

function assertIsMethod(m: ProtoBuf.ReflectMethod, name: string) {
    assert.ok("className" in m, name + " should contain property className");
    assert.ok("options" in m, name + " should contain property options");
    assert.ok("buildOpt" in m, name + " should contain property buildOpt");

    assertIsT(m, name);
}

function assertIsRPCMethod(rpc: ProtoBuf.ReflectRPCMethod, name: string) {
    assert.ok("requestName" in rpc, name + " should contain property requestName");
    assert.ok("responseName" in rpc, name + " should contain property responseName");
    assert.ok("resolvedRequestType" in rpc, name + " should contain property resolvedRequestType");
    assert.ok("resolvedResponseType" in rpc,
        name + " should contain property resolvedResponseType");

    assertIsMethod(rpc, name);

    assertIsMessage(rpc.resolvedRequestType, name + ".resolvedRequestType");
    assertIsMessage(rpc.resolvedResponseType, name + ".resolvedResponsetype");
}

testProtoBufJs();
testBuilderJs();
testDotProtoJs();
testReflectJs();
