import { createReadStream, Item } from 'pbf2json';
import * as through from 'through2';

createReadStream({
    file: 'planet.osm.pbf',
    tags: ['addr:housenumber+addr:street,name'],
    leveldb: '/tmp',
    waynodes: '',
})
    .pipe(
        through.obj((item: Item, _e, next) => {
            const { name } = item.tags;

            // $ExpectType string | undefined
            name;

            // $ExpectType "node" | "way" | "relation"
            item.type;

            next();

            if (item.type === 'node') return;
            if (item.type === 'way') return;
            if (item.type === 'relation') return;

            // $ExpectType never
            item;
        }),
    )
    .on('finish', console.log);
