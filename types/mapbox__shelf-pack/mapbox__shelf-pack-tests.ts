import * as ShelfPack from '@mapbox/shelf-pack';

let sprite = new ShelfPack(64, 64);

for (let i = 0; i < 5; i++) {
    const bin = sprite.packOne(32, 32);
}

sprite.clear();

sprite.resize(128, 128);

sprite = new ShelfPack(64, 64);

[100, 101, 102].forEach(id => {
    const bin = sprite.packOne(16, 16, id);
});

const bin102 = sprite.packOne(16, 16, 102);

const bin101 = sprite.getBin(101);
sprite.ref(bin101);

const bin100 = sprite.getBin(100);
sprite.unref(bin100);

const bin103 = sprite.packOne(16, 15, 103);
sprite.unref(bin103);

const bin104 = sprite.packOne(16, 16, 104);
