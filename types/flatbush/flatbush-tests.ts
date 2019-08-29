import Flatbush from 'flatbush';

const from: Flatbush = Flatbush.from(new ArrayBuffer(0));

const index = new Flatbush(1);
index.add(0, 0, 1, 1);
index.finish();

const results = index.search(0.5, 0.5, 0.5, 0.5);
const neighbors = index.neighbors(0.5, 0.5);
