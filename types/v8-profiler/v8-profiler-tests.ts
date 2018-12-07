import * as fs from "fs";
import * as profiler from "v8-profiler";

{
    var snapshot1 = profiler.takeSnapshot('1');
    var snapshot2 = profiler.takeSnapshot();
    profiler.deleteAllSnapshots();
}
{
    profiler.startProfiling('', true);
    setTimeout(function () {
        var profile = profiler.stopProfiling('');
        profiler.deleteAllProfiles();
    }, 1000);
}
{
    var snapshot1 = profiler.takeSnapshot();
    var snapshot2 = profiler.takeSnapshot();

    console.log(snapshot1.getHeader(), snapshot2.getHeader());

    console.log(snapshot1.compare(snapshot2));

    // Export snapshot to file file
    snapshot1.export(function (error, result) {
        fs.writeFileSync('snapshot1.json', result);
        snapshot1.delete();
    });

    // Export snapshot to file stream
    snapshot2.export()
        .pipe(fs.createWriteStream('snapshot2.json'))
        .on('finish', snapshot2.delete);
}
{
    profiler.startProfiling('1', true);
    var profile1 = profiler.stopProfiling();
    profiler.startProfiling('2', true);
    var profile2 = profiler.stopProfiling();

    console.log(snapshot1.getHeader(), snapshot2.getHeader());

    profile1.export(function (error, result) {
        fs.writeFileSync('profile1.json', result);
        profile1.delete();
    });

    profile2.export()
        .pipe(fs.createWriteStream('profile2.json'))
        .on('finish', function () {
            profile2.delete();
        });
}
{
    var a: profiler.Profile;
    var b: profiler.Profiler;
    var c: profiler.Snapshot;
}
