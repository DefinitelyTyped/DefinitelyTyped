import { createReadStream, Item, Node } from "pbf2json";
import * as through from "through2";

createReadStream({
    file: "planet.osm.pbf",
    tags: ["addr:housenumber+addr:street,name"],
    leveldb: "/tmp",
    waynodes: "",
    options: { metadata: true },
})
    .pipe(
        through.obj((item: Item, _e, next) => {
            const { name } = item.tags;

            // $ExpectType Metadata | undefined
            item.meta;
            // $ExpectType string | undefined
            item.meta?.timestamp;
            // $ExpectType number | undefined
            item.meta?.changeset;

            // $ExpectType string | undefined
            name;

            // $ExpectType "node" | "way" | "relation"
            item.type;

            next();

            if (item.type === "node") return;
            if (item.type === "way") return;
            if (item.type === "relation") return;

            // $ExpectType never
            item;
        }),
    )
    .on("finish", console.log);

const node: Node = {
    type: "node",
    id: 1,
    meta: {
        timestamp: "2019-05-16T16:57:38Z",
        changeset: 123,
        uid: 10123456,
        user: "redactedddd",
        version: 2,
    },
    tags: {
        "addr:housenumber": "1",
        "addr:street": "Marine Parade",
        "addr:suburb": "Devonport",
    },
    lat: -36,
    lon: 174,
};
