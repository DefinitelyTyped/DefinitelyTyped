import Watchpack = require('watchpack');

const watch = new Watchpack({
    ignored: '**/.git',
});

watch.watch({
    files: ['test.js'],
    directories: ['lib/'],
    missing: ['dist/'],
    startTime: 1000,
});
watch.watch({
    files: ['test.js'],
    directories: ['lib/'],
});
watch.watch({
    files: ['test.js'],
});
watch.watch({
    directories: ['lib/'],
});

let time: number;
time = watch.getTimes()['test.js'];

watch.on('change', (filePath, modifiedTime, explanation) => {
    console.log(`${filePath} got changed at ${new Date(modifiedTime)}, noticed by ${explanation}`);
});

watch.on('remove', (filePath, explanation) => {
    console.log(`${filePath} got removed, noticed by ${explanation}`);
});

watch.on('aggregated', (changes, removals) => {
    console.log(`watchpack: aggregated ${changes.size} changes and ${removals.size} removals`);
});

setTimeout(() => {
    watch.pause();
}, 1000);

// $ExpectType { changes: Set<string>; removals: Set<string>; }
watch.getAggregated();

setTimeout(() => {
    watch.close();
}, 2000);
