namespace dataTests {
    const { data } = adone;

    namespace jsonTests {
        const { json } = data;

        { const a: Buffer = json.encode(1); }
        { const a: Buffer = json.encode({}); }
        { const a: Buffer = json.encode([]); }
        { const a: Buffer = json.encode(1, {}); }
        { const a: Buffer = json.encode(1, { replacer: ["a", "b", "c"] }); }
        { const a: Buffer = json.encode(1, { replacer: (k: string, v: any) => null }); }
        { const a: Buffer = json.encode(1, { space: "    " }); }
        { const a: Buffer = json.encode(1, { newline: true }); }

        json.decode("123");
        json.decode(Buffer.from("123"));

        { const a: string = json.encodeStable({ a: 1 }); }
        { const a: string = json.encodeStable({ a: 1 }, {}); }
        json.encodeStable({ a: 1 }, {
            cmp: (a, b) => {
                a.key + "1";
                a.value;
                b.key + "1";
                a.value;
                return 2;
            }
        });
        json.encodeStable({ a: 1 }, {
            cycles: true
        });
        json.encodeStable({ a: 1 }, {
            replacer: ["a", "b"]
        });
        json.encodeStable({ a: 1 }, {
            replacer: (key: string, value: any) => null
        });
        json.encodeStable({ a: 1 }, {
            space: "    "
        });
        { const a: string = json.encodeSafe({ a: 1 }); }
        json.decode("hello");
    }

    namespace mpakTests {
        const { mpak } = data;

        { const a: Buffer = mpak.encode({ a: 1 }); }
        mpak.decode("hello");
        mpak.decode(adone.collection.ByteArray.wrap("hello"));
        mpak.decode(Buffer.from("123"));
        mpak.decode(new Uint8Array(10));
        mpak.decode(new ArrayBuffer(10));

        mpak.tryDecode(new adone.collection.ByteArray());

        new mpak.Encoder([]);
        new mpak.Encoder([{
            type: 10,
            check: () => true,
            encode: () => new adone.collection.ByteArray(10)
        }]);
        { const a: adone.collection.ByteArray = new mpak.Encoder([]).encode("hello"); }
        { const a: adone.collection.ByteArray = new mpak.Encoder([]).encode("hello", new adone.collection.ByteArray(10)).flip(); }

        new mpak.Decoder([]);
        new mpak.Decoder([{
            type: 10,
            decode: (buf: adone.collection.ByteArray) => null
        }]);
        new mpak.Decoder([]).decode("hello");
        new mpak.Decoder([]).decode(adone.collection.ByteArray.wrap("hello"));
        new mpak.Decoder([]).decode(Buffer.from("123"));
        new mpak.Decoder([]).decode(new Uint8Array(10));
        new mpak.Decoder([]).decode(new ArrayBuffer(10));
        new mpak.Decoder([]).tryDecode(adone.collection.ByteArray.wrap("hello"));

        new mpak.Serializer();
        new mpak.Serializer(100);
        mpak.registerCommonTypesFor(new mpak.Serializer());
        { const a: adone.data.mpak.Encoder = new mpak.Serializer().encoder; }
        { const a: adone.data.mpak.Decoder = new mpak.Serializer().decoder; }
        { const a: adone.data.mpak.Serializer = new mpak.Serializer().registerEncoder(10, (x) => true, (x) => new adone.collection.ByteArray(10)); }
        { const a: adone.data.mpak.Serializer = new mpak.Serializer().registerDecoder(10, (buf: adone.collection.ByteArray) => null); }
        { const a: adone.data.mpak.Serializer = new mpak.Serializer().register(10, Date, (x: Date) => x, (buf: adone.collection.ByteArray) => null); }
        new mpak.Serializer().encode(123);
        new mpak.Serializer().encode(123, new adone.collection.ByteArray(10));

        class ExByteArray extends adone.collection.ByteArray {
            fafa() {
                return "I am useful!";
            }
        }

        new mpak.Serializer().encode(123, new ExByteArray(10)).fafa();

        new mpak.Serializer().decode("hello");
        new mpak.Serializer().decode(adone.collection.ByteArray.wrap("hello"));
        new mpak.Serializer().decode(Buffer.from("123"));
        new mpak.Serializer().decode(new Uint8Array(10));
        new mpak.Serializer().decode(new ArrayBuffer(10));

        { const a: adone.data.mpak.Serializer = mpak.serializer; }
    }

    namespace json5Tests {
        const { json5 } = data;

        { const a: Buffer = json5.encode(123); }
        { const a: Buffer = json5.encode(123, {}); }
        { const a: Buffer = json5.encode(123, { replacer: (key: string, value: any) => null }); }
        { const a: Buffer = json5.encode(123, { replacer: ["a", "b", "c"] }); }
        { const a: Buffer = json5.encode(123, { space: "    " }); }
        json5.decode("hello");
        json5.decode(Buffer.from("hello"));
        json5.decode(Buffer.from("hello"), (holder: object, key: string, value: any) => null);
    }

    namespace base64Tests {
        const { base64 } = data;

        { const a: Buffer = base64.encode("string"); }
        { const a: Buffer = base64.encode(Buffer.from("string")); }
        { const a: string = base64.encode("string", { buffer: false }); }
        { const a: Buffer = base64.encode("string", { buffer: true }); }
        { const a: Buffer = base64.encode("string", {}); }

        { const a: string = base64.decode("string"); }
        { const a: string = base64.decode(Buffer.from("string")); }
        { const a: string = base64.decode("string", {}); }
        { const a: string = base64.decode("string", { buffer: false }); }
        { const a: Buffer = base64.decode("string", { buffer: true }); }
        { const a: string = base64.decode("string", { encoding: "utf8" }); }

        { const a: string = base64.encodeVLQ(123); }
        { const a: number = base64.decodeVLQ("H"); }
        { const a: number = base64.decodeVLQ("H", 1); }
        { const a: number = base64.decodeVLQ("H", 1, false); }
        { const a: { value: number, index: number } = base64.decodeVLQ("H", 1, true); }

        { const a: number = base64.decodeCharCode("C"); }
        { const a: string = base64.decodeNumber(12); }
    }

    namespace yamlTests {
        const { yaml } = data;

        namespace loaderTests {
            const { loader } = yaml;

            loader.loadAll("hello")[0];
            loader.loadAll(Buffer.from("hello"))[0];
            loader.loadAll("hello", (doc) => 123);
            loader.loadAll("hello", undefined, {});
            loader.loadAll("hello", undefined, { filename: "hello" });
            loader.loadAll("hello", undefined, { json: true });
            loader.loadAll("hello", undefined, { onWarning: (warn) => null });
            loader.loadAll("hello", undefined, { schema: yaml.schema.CORE });

            { const a: any = loader.load("hello"); }
            { const a: any = loader.load(Buffer.from("hello")); }
            loader.load("hello", {});
            loader.load("hello", { filename: "hello" });
            loader.load("hello", { json: true });
            loader.load("hello", { onWarning: (warn) => null });
            loader.load("hello", { schema: yaml.schema.DEFAULT_FULL });

            loader.safeLoadAll("hello")[0];
            loader.safeLoadAll(Buffer.from("hello"))[0];
            loader.safeLoadAll(Buffer.from("hello"))[0];

            loader.safeLoadAll("hello", (doc) => null);
            loader.safeLoadAll("hello", undefined, {})[0];
            loader.safeLoadAll("hello", undefined, { filename: "hello" })[0];
            loader.safeLoadAll("hello", undefined, { json: true })[0];
            loader.safeLoadAll("hello", undefined, { onWarning: (warn) => null })[0];
            loader.safeLoadAll("hello", undefined, { schema: yaml.schema.JSON })[0];

            loader.safeLoad("hello");
            loader.safeLoad(Buffer.from("hello"));
            loader.safeLoad("hello", { filename: "hello" });
            loader.safeLoad("hello", { json: true });
            loader.safeLoad("hello", { onWarning: (warn) => null });
            loader.safeLoad("hello", { schema: yaml.schema.DEFAULT_SAFE });
        }

        namespace dumperTests {
            const { dumper } = yaml;
            { const a: string = dumper.dump("hello"); }
            { const a: string = dumper.dump(Buffer.from("hello")); }
            { const a: string = dumper.dump("hello", {}); }
            { const a: string = dumper.dump("hello", { condenseFlow: true }); }
            { const a: string = dumper.dump("hello", { flowLevel: 1 }); }
            { const a: string = dumper.dump("hello", { indent: 4 }); }
            { const a: string = dumper.dump("hello", { lineWidth: 80 }); }
            { const a: string = dumper.dump("hello", { noCompatMode: true }); }
            { const a: string = dumper.dump("hello", { noRefs: false }); }
            { const a: string = dumper.dump("hello", { schema: yaml.schema.CORE }); }
            { const a: string = dumper.dump("hello", { skipInvalid: true }); }
            { const a: string = dumper.dump("hello", { sortKeys: true }); }
            { const a: string = dumper.dump("hello", { styles: { a: "h" } }); }
            { const a: string = dumper.safeDump("hello"); }
            { const a: string = dumper.safeDump(Buffer.from("hello")); }
            { const a: string = dumper.safeDump("hello", {}); }
            { const a: string = dumper.safeDump("hello", { condenseFlow: true }); }
            { const a: string = dumper.safeDump("hello", { flowLevel: 1 }); }
            { const a: string = dumper.safeDump("hello", { indent: 4 }); }
            { const a: string = dumper.safeDump("hello", { lineWidth: 80 }); }
            { const a: string = dumper.safeDump("hello", { noCompatMode: true }); }
            { const a: string = dumper.safeDump("hello", { noRefs: false }); }
            { const a: string = dumper.safeDump("hello", { schema: yaml.schema.CORE }); }
            { const a: string = dumper.safeDump("hello", { skipInvalid: true }); }
            { const a: string = dumper.safeDump("hello", { sortKeys: true }); }
            { const a: string = dumper.safeDump("hello", { styles: { a: "h" } }); }
        }

        namespace typeTests {
            const { type } = yaml;

            new type.Type("tag", { kind: "scalar" });
            new type.Type("tag", { kind: "sequence" });
            new type.Type("tag", { kind: "mapping" });
            new type.Type("tag", { kind: "scalar", resolve: (a: string) => true });
            new type.Type("tag", { kind: "scalar", construct: (a: string) => null });
            new type.Type("tag", { kind: "scalar", instanceOf: Date });
            new type.Type("tag", { kind: "scalar", predicate: (a) => true });
            new type.Type("tag", { kind: "scalar", represent: (a, s: string) => "asd" });
            new type.Type("tag", { kind: "scalar", represent: { check: (a, s: string) => "asd" } });
            new type.Type("tag", { kind: "scalar", defaultStyle: "asd" });
            new type.Type("tag", { kind: "scalar", styleAliases: {} });
            new type.Type<number>("tag", { kind: "scalar" }).construct("hello") + 1;
            !new type.Type<number>("tag", { kind: "scalar" }).resolve("hello");
            new type.Type<number>("tag", { kind: "scalar" }).instanceOf;
            new type.Type<number>("tag", { kind: "scalar" }).predicate;
            new type.Type<number>("tag", { kind: "scalar" }).represent;
            new type.Type<number>("tag", { kind: "scalar" }).defaultStyle;
            new type.Type<number>("tag", { kind: "scalar" }).styleAliases;
            type.Binary.construct("hello").fill(0);
            { const a: boolean = type.Bool.construct("hello"); }
            type.Float.construct("hello") + 3.14;
            type.Int.construct("hello") + 3;
            type.Map.construct("hello");
            type.Merge.construct("hello");
            type.Null.construct("hello") === null;
            type.Omap.construct("hello")[0];
            type.Pairs.construct("hello")[0][0].charCodeAt(0);
            type.Seq.construct("hello")[0];
            type.Set.construct("hello");
            type.Str.construct("hello").charAt(0);
            type.Timestamp.construct("hello").getFullYear();
            type.js.Function.construct("hello").apply(null, [1, 2, 3]);
            type.js.RegExp.construct("hello").test("123");
            type.js.Undefined.construct("hello") === undefined;
        }

        namespace schemaTests {
            const { schema } = yaml;

            new schema.Schema({});
            new schema.Schema({
                include: [
                    schema.CORE
                ]
            });
            new schema.Schema({
                implicit: [
                    yaml.type.Int
                ]
            });
            new schema.Schema({
                explicit: [
                    yaml.type.Int
                ]
            });
            { const a: adone.data.yaml.schema.Schema = new schema.Schema().include[0]; }
            { const a: adone.data.yaml.type.Type = new schema.Schema().implicit[0]; }
            { const a: adone.data.yaml.type.Type = new schema.Schema().explicit[0]; }
            { const a: adone.data.yaml.type.Type = new schema.Schema().compiledImplicit[0]; }
            { const a: adone.data.yaml.type.Type = new schema.Schema().compiledExplicit[0]; }
            { const a: adone.data.yaml.type.Type = new schema.Schema().compiledTypeMap.scalar.hello; }
            { const a: adone.data.yaml.type.Type = new schema.Schema().compiledTypeMap.sequence.hello; }
            { const a: adone.data.yaml.type.Type = new schema.Schema().compiledTypeMap.mapping.hello; }
            { const a: adone.data.yaml.type.Type = new schema.Schema().compiledTypeMap.fallback.hello; }

            { const a: adone.data.yaml.schema.Schema = schema.create(schema.CORE, yaml.type.Binary); }
            { const a: adone.data.yaml.schema.Schema = schema.create([schema.CORE], [yaml.type.Binary]); }

            { const a: adone.data.yaml.schema.Schema = schema.CORE; }
            { const a: adone.data.yaml.schema.Schema = schema.DEFAULT_FULL; }
            { const a: adone.data.yaml.schema.Schema = schema.DEFAULT_SAFE; }
            { const a: adone.data.yaml.schema.Schema = schema.FAILSAFE; }
            { const a: adone.data.yaml.schema.Schema = schema.JSON; }
        }

        const mark = new yaml.Mark("hello", "hello", 1, 2, 3);
        { const a: string = mark.getSnippet(); }
        { const a: string = mark.getSnippet(1); }
        { const a: string = mark.getSnippet(1, 1); }
        { const a: string = mark.toString(); }
        { const a: string = mark.toString(true); }
        { const a: string = new yaml.Exception("message", mark).reason; }
        { const a: adone.data.yaml.Mark = new yaml.Exception("message", mark).mark; }

        { const a: Buffer = yaml.encode("hello"); }
        { const a: Buffer = yaml.encode("hello", {}); }
        { const a: Buffer = yaml.encode("hello", { condenseFlow: true }); }
        { const a: Buffer = yaml.encode("hello", { flowLevel: -1 }); }
        { const a: Buffer = yaml.encode("hello", { indent: 3 }); }
        { const a: Buffer = yaml.encode("hello", { lineWidth: 80 }); }
        { const a: Buffer = yaml.encode("hello", { noCompatMode: true }); }
        { const a: Buffer = yaml.encode("hello", { noRefs: true }); }
        { const a: Buffer = yaml.encode("hello", { schema: yaml.schema.CORE }); }
        { const a: Buffer = yaml.encode("hello", { skipInvalid: true }); }
        { const a: Buffer = yaml.encode("hello", { sortKeys: true }); }
        { const a: Buffer = yaml.encode("hello", { styles: {} }); }

        yaml.decode("hello");
        yaml.decode(Buffer.from("hello"));
        yaml.decode("hello", {});
        yaml.decode("hello", { filename: "hello" });
        yaml.decode("hello", { json: true });
        yaml.decode("hello", { onWarning: (warn) => null });
        yaml.decode("hello", { schema: yaml.schema.CORE });

        yaml.loadAll("hello")[0];
        yaml.loadAll(Buffer.from("hello"))[0];
        yaml.loadAll("hello", (doc) => 123);
        yaml.loadAll("hello", undefined, {});
        yaml.loadAll("hello", undefined, { filename: "hello" });
        yaml.loadAll("hello", undefined, { json: true });
        yaml.loadAll("hello", undefined, { onWarning: (warn) => null });
        yaml.loadAll("hello", undefined, { schema: yaml.schema.CORE });

        { const a: any = yaml.load("hello"); }
        { const a: any = yaml.load(Buffer.from("hello")); }
        yaml.load("hello", {});
        yaml.load("hello", { filename: "hello" });
        yaml.load("hello", { json: true });
        yaml.load("hello", { onWarning: (warn) => null });
        yaml.load("hello", { schema: yaml.schema.DEFAULT_FULL });

        yaml.safeLoadAll("hello")[0];
        yaml.safeLoadAll(Buffer.from("hello"))[0];
        yaml.safeLoadAll(Buffer.from("hello"))[0];

        yaml.safeLoadAll("hello", (doc) => null);
        yaml.safeLoadAll("hello", undefined, {})[0];
        yaml.safeLoadAll("hello", undefined, { filename: "hello" })[0];
        yaml.safeLoadAll("hello", undefined, { json: true })[0];
        yaml.safeLoadAll("hello", undefined, { onWarning: (warn) => null })[0];
        yaml.safeLoadAll("hello", undefined, { schema: yaml.schema.JSON })[0];

        yaml.safeLoad("hello");
        yaml.safeLoad(Buffer.from("hello"));
        yaml.safeLoad("hello", { filename: "hello" });
        yaml.safeLoad("hello", { json: true });
        yaml.safeLoad("hello", { onWarning: (warn) => null });
        yaml.safeLoad("hello", { schema: yaml.schema.DEFAULT_SAFE });

        { const a: string = yaml.dump("hello"); }
        { const a: string = yaml.dump(Buffer.from("hello")); }
        { const a: string = yaml.dump("hello", {}); }
        { const a: string = yaml.dump("hello", { condenseFlow: true }); }
        { const a: string = yaml.dump("hello", { flowLevel: 1 }); }
        { const a: string = yaml.dump("hello", { indent: 4 }); }
        { const a: string = yaml.dump("hello", { lineWidth: 80 }); }
        { const a: string = yaml.dump("hello", { noCompatMode: true }); }
        { const a: string = yaml.dump("hello", { noRefs: false }); }
        { const a: string = yaml.dump("hello", { schema: yaml.schema.CORE }); }
        { const a: string = yaml.dump("hello", { skipInvalid: true }); }
        { const a: string = yaml.dump("hello", { sortKeys: true }); }
        { const a: string = yaml.dump("hello", { styles: { a: "h" } }); }
        { const a: string = yaml.safeDump("hello"); }
        { const a: string = yaml.safeDump(Buffer.from("hello")); }
        { const a: string = yaml.safeDump("hello", {}); }
        { const a: string = yaml.safeDump("hello", { condenseFlow: true }); }
        { const a: string = yaml.safeDump("hello", { flowLevel: 1 }); }
        { const a: string = yaml.safeDump("hello", { indent: 4 }); }
        { const a: string = yaml.safeDump("hello", { lineWidth: 80 }); }
        { const a: string = yaml.safeDump("hello", { noCompatMode: true }); }
        { const a: string = yaml.safeDump("hello", { noRefs: false }); }
        { const a: string = yaml.safeDump("hello", { schema: yaml.schema.CORE }); }
        { const a: string = yaml.safeDump("hello", { skipInvalid: true }); }
        { const a: string = yaml.safeDump("hello", { sortKeys: true }); }
        { const a: string = yaml.safeDump("hello", { styles: { a: "h" } }); }
    }

    namespace bsonTests {
        const { bson } = data;

        new bson.Binary(10);
        { const a: string = new bson.Binary(10)._bsontype; }
        new bson.Binary(Buffer.from("hello"));
        new bson.Binary(Buffer.from("hello"), 10);
        new bson.Binary(10).put(0);
        new bson.Binary(10).write("hello");
        new bson.Binary(10).write("hello", 0);
        new bson.Binary(10).write(Buffer.from("hello"));
        new bson.Binary(10).read(10);
        new bson.Binary(10).read(10, 0);
        { const a: Buffer = new bson.Binary(10).value(true); }
        { const a: string = new bson.Binary(10).value(); }
        { const a: number = new bson.Binary(10).length(); }
        { const a: string = new bson.Binary(10).toJSON(); }
        { const a: string = new bson.Binary(10).toString(); }
        { const a: number = bson.Binary.BUFFER_SIZE; }
        { const a: number = bson.Binary.SUBTYPE_DEFAULT; }
        { const a: number = bson.Binary.SUBTYPE_FUNCTION; }
        { const a: number = bson.Binary.SUBTYPE_BYTE_ARRAY; }
        { const a: number = bson.Binary.SUBTYPE_UUID_OLD; }
        { const a: number = bson.Binary.SUBTYPE_UUID; }
        { const a: number = bson.Binary.SUBTYPE_MD5; }
        { const a: number = bson.Binary.SUBTYPE_USER_DEFINED; }

        new bson.Code("hello");
        { const a: string = new bson.Code("hello")._bsontype; }
        new bson.Code("hello", {});
        { const a: object = new bson.Code("hello").toJSON().scope; }
        { const a: string = new bson.Code("hello").toJSON().code; }

        new bson.DBRef("aa", new bson.ObjectId());
        { const a: string = new bson.DBRef("aa", new bson.ObjectId())._bsontype; }
        new bson.DBRef("aa", new bson.ObjectId(), "hh");
        { const a: string = new bson.DBRef("aa", new bson.ObjectId()).toJSON().$ref; }
        { const a: adone.data.bson.ObjectId = new bson.DBRef("aa", new bson.ObjectId()).toJSON().$id; }
        { const a: string = new bson.DBRef("aa", new bson.ObjectId()).toJSON().$db; }

        new bson.Decimal128(Buffer.from("0123456789abcdef"));
        { const a: string = new bson.Decimal128(Buffer.from("0123456789abcdef"))._bsontype; }
        { const a: string = new bson.Decimal128(Buffer.from("0123456789abcdef")).toString(); }
        { const a: string = new bson.Decimal128(Buffer.from("0123456789abcdef")).toJSON().$numberDecimal; }
        { const a: adone.data.bson.Decimal128 = bson.Decimal128.fromString("123"); }

        new bson.Double(3.14);
        { const a: string = new bson.Double(3.14)._bsontype; }
        { const a: number = new bson.Double(3.14).valueOf(); }
        { const a: number = new bson.Double(3.14).toJSON(); }

        new bson.Int32(100500);
        { const a: string = new bson.Int32(100500)._bsontype; }
        { const a: number = new bson.Int32(100500).valueOf(); }
        { const a: number = new bson.Int32(100500).toJSON(); }

        new bson.Long();
        { const a: string = new bson.Long()._bsontype; }
        { const a: adone.data.bson.Long = bson.Long.MIN_VALUE; }
        { const a: adone.data.bson.Long = bson.Long.MAX_UNSIGNED_VALUE; }
        { const a: adone.data.bson.Long = bson.Long.ZERO; }
        { const a: adone.data.bson.Long = bson.Long.UZERO; }
        { const a: adone.data.bson.Long = bson.Long.ONCE; }
        { const a: adone.data.bson.Long = bson.Long.UONE; }
        { const a: adone.data.bson.Long = bson.Long.ONE; }
        { const a: adone.data.bson.Long = bson.Long.NEG_ONE; }

        new bson.MaxKey();
        { const a: string = new bson.MaxKey()._bsontype; }

        new bson.MinKey();
        { const a: string = new bson.MinKey()._bsontype; }

        new bson.ObjectId();
        new bson.ObjectId("he");
        new bson.ObjectId(Buffer.from("asd"));
        new bson.ObjectId(new bson.ObjectId());
        new bson.ObjectId({ toHexString: () => "2", id: "he" });
        new bson.ObjectId({ toHexString: () => "2", id: Buffer.from("he") });
        new bson.ObjectId({ toHexString: () => "2", id: new bson.ObjectId() });
        { const a: string = new bson.ObjectId().toHexString(); }
        { const a: number = new bson.ObjectId().getInc(); }
        { const a: Buffer = new bson.ObjectId().generate(); }
        { const a: Buffer = new bson.ObjectId().generate(10050); }
        { const a: string = new bson.ObjectId().toString(); }
        { const a: string = new bson.ObjectId().toString("utf8"); }
        { const a: string = new bson.ObjectId().toJSON(); }
        new bson.ObjectId().equals("he");
        new bson.ObjectId().equals(Buffer.from("he"));
        new bson.ObjectId().equals(new bson.ObjectId());
        new bson.ObjectId().equals({ toHexString: () => "2" });
        { const a: Date = new bson.ObjectId().getTimestamp(); }
        { const a: adone.data.bson.ObjectId = bson.ObjectId.createPk(); }
        { const a: adone.data.bson.ObjectId = bson.ObjectId.createFromTime(100500); }
        { const a: adone.data.bson.ObjectId = bson.ObjectId.createFromHexString("deadbeef"); }
        { const a: boolean = bson.ObjectId.isValid("deadbeef"); }
        { const a: number = bson.ObjectId.index; }

        new bson.BSONRegExp("\\d");
        new bson.BSONRegExp("\\d", "mix");
        { const a: string = new bson.BSONRegExp("\\d")._bsontype; }

        new bson.Symbol("he");
        { const a: string = new bson.Symbol("he")._bsontype; }
        { const a: string = new bson.Symbol("he").valueOf(); }
        { const a: string = new bson.Symbol("he").toString(); }
        { const a: string = new bson.Symbol("he").inspect(); }
        { const a: string = new bson.Symbol("he").toJSON(); }

        new bson.Timestamp();
        new bson.Timestamp(100, 500);
        { const a: string = new bson.Timestamp()._bsontype; }
        { const a: adone.data.bson.Timestamp = bson.Timestamp.MIN_VALUE; }
        { const a: adone.data.bson.Timestamp = bson.Timestamp.MAX_VALUE; }
        { const a: adone.data.bson.Timestamp = bson.Timestamp.MAX_UNSIGNED_VALUE; }
        { const a: adone.data.bson.Timestamp = bson.Timestamp.ZERO; }
        { const a: adone.data.bson.Timestamp = bson.Timestamp.UZERO; }
        { const a: adone.data.bson.Timestamp = bson.Timestamp.ONCE; }
        { const a: adone.data.bson.Timestamp = bson.Timestamp.ONE; }
        { const a: adone.data.bson.Timestamp = bson.Timestamp.UONE; }
        { const a: adone.data.bson.Timestamp = bson.Timestamp.NEG_ONE; }

        new bson.BSON();
        new bson.BSON([bson.Timestamp, bson.Binary]);
        { const a: Buffer = new bson.BSON().serialize({ a: 1 }); }
        { const a: Buffer = new bson.BSON().serialize({ a: 1 }, {}); }
        { const a: Buffer = new bson.BSON().serialize({ a: 1 }, { checkKeys: true }); }
        { const a: Buffer = new bson.BSON().serialize({ a: 1 }, { ignoreUndefined: true }); }
        { const a: Buffer = new bson.BSON().serialize({ a: 1 }, { serializeFunctions: false }); }
        { const a: number = new bson.BSON().serializeWithBufferAndIndex({ a: 1 }, Buffer.alloc(10)); }
        { const a: number = new bson.BSON().serializeWithBufferAndIndex({ a: 1 }, Buffer.alloc(10), {}); }
        { const a: number = new bson.BSON().serializeWithBufferAndIndex({ a: 1 }, Buffer.alloc(10), { checkKeys: true }); }
        { const a: number = new bson.BSON().serializeWithBufferAndIndex({ a: 1 }, Buffer.alloc(10), { ignoreUndefined: true }); }
        { const a: number = new bson.BSON().serializeWithBufferAndIndex({ a: 1 }, Buffer.alloc(10), { index: 10 }); }
        { const a: number = new bson.BSON().serializeWithBufferAndIndex({ a: 1 }, Buffer.alloc(10), { serializeFunctions: false }); }
        { const a: number = new bson.BSON().calculateObjectSize({ a: 1 }); }
        { const a: number = new bson.BSON().calculateObjectSize({ a: 1 }, {}); }
        { const a: number = new bson.BSON().calculateObjectSize({ a: 1 }, { ignoreUndefined: false }); }
        { const a: number = new bson.BSON().calculateObjectSize({ a: 1 }, { serializeFunctions: false }); }
        new bson.BSON().deserialize(Buffer.from("aahaha")).a;
        new bson.BSON().deserialize(Buffer.from("aahaha"), {}).a;
        new bson.BSON().deserialize(Buffer.from("aahaha"), { bsonRegExp: false }).a;
        new bson.BSON().deserialize(Buffer.from("aahaha"), { cacheFunctions: false }).a;
        new bson.BSON().deserialize(Buffer.from("aahaha"), { cacheFunctonsCrc32: false }).a;
        new bson.BSON().deserialize(Buffer.from("aahaha"), { evalFunctions: false }).a;
        new bson.BSON().deserialize(Buffer.from("aahaha"), { fieldsAsRaw: ["a"] }).a;
        new bson.BSON().deserialize(Buffer.from("aahaha"), { promoteBuffers: false }).a;
        new bson.BSON().deserialize(Buffer.from("aahaha"), { promoteLongs: false }).a;
        new bson.BSON().deserialize(Buffer.from("aahaha"), { promoteValues: true }).a;
        { const a: number = new bson.BSON().deserializeStream(Buffer.from("ahaha"), 1, 2, [], 2); }
        { const a: number = new bson.BSON().deserializeStream(Buffer.from("ahaha"), 1, 2, [], 2, {}); }
        { const a: number = new bson.BSON().deserializeStream(Buffer.from("ahaha"), 1, 2, [], 2, { bsonRegExp: false }); }
        { const a: number = new bson.BSON().deserializeStream(Buffer.from("ahaha"), 1, 2, [], 2, { cacheFunctions: false }); }
        { const a: number = new bson.BSON().deserializeStream(Buffer.from("ahaha"), 1, 2, [], 2, { cacheFunctonsCrc32: false }); }
        { const a: number = new bson.BSON().deserializeStream(Buffer.from("ahaha"), 1, 2, [], 2, { evalFunctions: false }); }
        { const a: number = new bson.BSON().deserializeStream(Buffer.from("ahaha"), 1, 2, [], 2, { fieldsAsRaw: ["b"] }); }
        { const a: number = new bson.BSON().deserializeStream(Buffer.from("ahaha"), 1, 2, [], 2, { promoteBuffers: false }); }
        { const a: number = new bson.BSON().deserializeStream(Buffer.from("ahaha"), 1, 2, [], 2, { promoteLongs: false }); }
        { const a: number = new bson.BSON().deserializeStream(Buffer.from("ahaha"), 1, 2, [], 2, { promoteValues: true }); }
        { const a: number = bson.c.BSON_INT32_MAX; }
        { const a: number = bson.c.BSON_INT32_MIN; }
        { const a: number = bson.c.BSON_INT64_MAX; }
        { const a: number = bson.c.BSON_INT64_MIN; }
        { const a: number = bson.c.JS_INT_MAX; }
        { const a: number = bson.c.JS_INT_MIN; }
        { const a: adone.data.bson.BSON = bson.serializer; }

        { const a: Buffer = bson.encode({ a: 1 }); }
        { const a: Buffer = bson.encode({ a: 1 }, {}); }
        { const a: Buffer = bson.encode({ a: 1 }, { checkKeys: true }); }
        { const a: Buffer = bson.encode({ a: 1 }, { ignoreUndefined: false }); }
        { const a: Buffer = bson.encode({ a: 1 }, { serializeFunctions: false }); }

        bson.decode(bson.encode({ a: 1 })).a;
        bson.decode(bson.encode({ a: 1 }), {}).a;
        bson.decode(bson.encode({ a: 1 }), { bsonRegExp: false }).a;
        bson.decode(bson.encode({ a: 1 }), { cacheFunctions: false }).a;
        bson.decode(bson.encode({ a: 1 }), { cacheFunctonsCrc32: false }).a;
        bson.decode(bson.encode({ a: 1 }), { evalFunctions: false }).a;
        bson.decode(bson.encode({ a: 1 }), { fieldsAsRaw: ["b"] }).a;
        bson.decode(bson.encode({ a: 1 }), { promoteBuffers: false }).a;
        bson.decode(bson.encode({ a: 1 }), { promoteLongs: false }).a;
        bson.decode(bson.encode({ a: 1 }), { promoteValues: true }).a;
    }
}
