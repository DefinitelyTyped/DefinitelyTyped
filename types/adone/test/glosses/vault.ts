namespace adoneTests.vault {
    const {
        is,
        vault
    } = adone;

    let num: number;
    let bool: boolean;
    let obj: object;
    let str: string;

    namespace Vault {
        const {
            Vault
        } = vault;

        new Vault({
            location: "a"
        });
        new Vault({
            location: "a",
            ValuableClass: vault.Valuable
        });

        const v = new Vault({
            location: "a"
        });

        v.addTag("hello").then((x) => {
            if (!is.null(x)) {
                num = x;
            }
        });
        v.clear().then((x) => {
            num = x;
        });
        v.close().then();
        v.create("hello").then((x) => {
            x.set("a", "b");
        });
        v.create("hello", ["a", "b"]).then((x) => {
            x.set("a", "b");
        });
        v.delete("a").then();
        v.deleteTag("a").then((x) => {
            bool = x;
        });
        v.entries().then((x) => {
            obj = x;
        });
        v.get("a").then((x) => {
            x.set("a", "b");
        });
        str = v.getNotes();
        bool = v.has("a");
        str = v.keys()[0];
        str = v.location();
        v.open().then(() => {});
        v.release("name");
        v.setNotes("asd").then();
        str = v.tagNames()[0];
        str = v.tagNames([1])[0];
        obj = v.tags()[0];
        obj = v.toJSON();
        v.toJSON({ valuable: { includeId: true } }).then((x) => {
            obj = x.valuables[0];
        });
        v.toJSON({ includeStats: true }).then((x) => {
            num = x.stats.created;
            num = x.stats.updated;
            str = x.stats.location;
        });
        v.values().then((x) => {
            x[0];
        });
    }

    namespace Valuable {
        new vault.Vault({ location: "a" }).get("a").then((v) => {
            v.addTag("a").then();
            v.clear().then((x) => {
                num = x;
            });
            v.clear({ includeNotes: true }).then((x) => {
                num = x;
            });
            v.clear({ includeTags: true }).then((x) => {
                num = x;
            });
            v.delete("a").then((x) => {
                num = x;
            });
            v.deleteAllTags();
            v.entries().then((x) => {
                obj = x;
            });
            v.entries({ entriesAsArray: true }).then((x) => {
                obj = x;
            });
            v.entries({ includeEntryId: true }).then((x) => {
                obj = x;
            });
            v.fromJSON({}).then((x) => {
                num = x;
            });
            v.get("a").then();
            str = v.getNotes();
            bool = v.has("a");
            bool = v.hasTag("a");
            num = v.internalId();
            str = v.keys()[0];
            str = v.name();
            v.set("a", "b").then((x) => {
                num = x;
            });
            v.set("a", "b", "wtf").then((x) => {
                num = x;
            });
            v.setMulti({ a: "1", b: "2" }).then();
            v.setNotes("a").then();
            obj = v.tags();
            obj = v.toJSON();
            obj = v.toJSON({ entriesAsArray: true });
            obj = v.toJSON({ includeEntryId: true });
            obj = v.toJSON({ includeId: false });
            obj = v.toJSON({ tags: "normal" });
            obj = v.toJSON({ tags: "none" });
            obj = v.toJSON({ tags: "onlyId" });
            obj = v.toJSON({ tags: "onlyName" });
            v.type("a");
        });
    }

    namespace slice {
        new vault.Vault({ location: "a" }).get("a").then((valuable) => {
            vault.slice(valuable, "s");
            vault.slice(valuable, ["s"]);
            vault.slice(valuable, ["s"], "a");
            vault.slice(valuable, ["s"], "a");
            const v = vault.slice(valuable, "s");
            v.addTag("a").then();
            v.delete("a").then((x) => {
                num = x;
            });
            v.deleteAllTags().then();
            v.deleteTag("a").then((x) => {
                bool = x;
            });
            v.entries().then((x) => {
                obj = x;
            });
            v.entries({}).then((x) => {
                obj = x;
            });
            v.entries({ entriesAsArray: true }).then((x) => {
                obj = x;
            });
            v.entries({ includeEntryId: true }).then((x) => {
                obj = x;
            });
            v.fromJSON({}).then((x) => {
                num = x;
            });
            v.get("a").then();
            str = v.getNotes();
            bool = v.has("a");
            bool = v.hasTag("a");
            num = v.internalId();
            str = v.keys()[0];
            str = v.name();
            v.set("a", "b").then((x) => {
                num = x;
            });
            v.set("a", "b", "wtf").then((x) => {
                num = x;
            });
            v.setMulti({}).then();
            v.setNotes("a").then((x) => {
                num = x;
            });
            obj = v.tags()[0];
            obj = v.toJSON();
            obj = v.toJSON({});
            obj = v.toJSON({ entriesAsArray: true });
            obj = v.toJSON({ includeEntryId: true });
            obj = v.toJSON({ includeId: true });
            obj = v.toJSON({ tags: "none" });
            obj = v.toJSON({ tags: "normal" });
            obj = v.toJSON({ tags: "onlyId" });
            obj = v.toJSON({ tags: "onlyName" });
            v.type("a");
        });
    }

    namespace open {
        vault.open({ location: "a" }).then((x) => {
            x.get("a").then((x) => x.setMulti({}));
        });
        vault.open({ location: "a", ValuableClass: vault.Valuable }).then((x) => {
            x.get("a").then((x) => x.setMulti({}));
        });
    }
}
