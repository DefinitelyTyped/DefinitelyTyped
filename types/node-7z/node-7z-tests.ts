import { ChildProcess } from "child_process";
import * as Seven from "node-7z"; // Name the class as you want!

const stream = Seven.extractFull("myArchive.7z", "destination", { password: "myPassword" });
stream.on("progress", progress => {
    /** Do something with progress data */
});
stream.on("data", data => {
    /** Do something with processed file data */
});
stream.on("end", () => {
    /** Finished */
    console.log(`Files read from disk - ${stream.info.get("Files read from disk")}`);
});
stream.on("error", err => {
    /** Do something with error */
});

const archive = "archive";
const source = "source";
const sourceList = [source];
const target = "target";
const targetList = [target];
const targetListList = [[target]];
const file = "file";
const fileList = [file];
const output = "output";
const childProcess = new ChildProcess();

/** Seven.add() tests */
{
    // $ExpectType ZipStream
    Seven.add(archive, source);

    // $ExpectType ZipStream
    Seven.add(archive, source, {});

    // $ExpectType ZipStream
    Seven.add(archive, source, {
        $progress: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        $defer: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        $childProcess: childProcess,
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        $bin: "$bin",
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        $cherryPick: ["$cherryPick"],
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        $raw: ["$raw"],
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        $spawnOptions: {},
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        alternateStreamExtract: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        alternateStreamReplace: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        deleteFilesAfter: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        fullyQualifiedPaths: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        hardlinks: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        largePages: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        latestTimeStamp: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        noArchiveOnFail: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        noRootDuplication: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        noWildcards: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        ntSecurity: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        sortByType: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        openFiles: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        recursive: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        symlinks: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        techInfo: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        timeStats: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        toStdout: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        yes: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        alternateStreamStore: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        caseSensitive: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        archiveNameMode: "archiveNameMode",
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        archiveType: "archiveType",
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        cpuAffinity: "cpuAffinity",
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        excludeArchiveType: "excludeArchiveType",
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        fromStdin: "fromStdin",
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        hashMethod: "hashMethod",
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        listFileCharset: "listFileCharset",
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        charset: "charset",
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        logLevel: "logLevel",
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        outputDir: "outputDir",
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        overwrite: "a",
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        password: "password",
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        sfx: "sfx",
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        updateOptions: "updateOptions",
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        workingDir: "workingDir",
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        multiBlockSize: "multiBlockSize",
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        excludeArchive: ["excludeArchive"],
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        exclude: ["exclude"],
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        include: ["include"],
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        includeArchive: ["includeArchive"],
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        method: ["method"],
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        outputStreams: ["outputStreams"],
    });
    // $ExpectType ZipStream
    Seven.add(archive, source, {
        volumes: ["volumes"],
    });

    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {});
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        $progress: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        $defer: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        $childProcess: childProcess,
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        $bin: "$bin",
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        $cherryPick: ["$cherryPick"],
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        $raw: ["$raw"],
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        $spawnOptions: {},
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        alternateStreamExtract: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        alternateStreamReplace: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        deleteFilesAfter: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        fullyQualifiedPaths: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        hardlinks: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        largePages: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        latestTimeStamp: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        noArchiveOnFail: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        noRootDuplication: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        noWildcards: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        ntSecurity: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        sortByType: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        openFiles: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        recursive: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        symlinks: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        techInfo: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        timeStats: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        toStdout: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        yes: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        alternateStreamStore: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        caseSensitive: true,
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        archiveNameMode: "archiveNameMode",
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        archiveType: "archiveType",
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        cpuAffinity: "cpuAffinity",
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        excludeArchiveType: "excludeArchiveType",
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        fromStdin: "fromStdin",
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        hashMethod: "hashMethod",
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        listFileCharset: "listFileCharset",
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        charset: "charset",
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        logLevel: "logLevel",
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        outputDir: "outputDir",
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        overwrite: "a",
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        password: "password",
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        sfx: "sfx",
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        updateOptions: "updateOptions",
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        workingDir: "workingDir",
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        multiBlockSize: "multiBlockSize",
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        excludeArchive: ["excludeArchive"],
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        exclude: ["exclude"],
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        include: ["include"],
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        includeArchive: ["includeArchive"],
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        method: ["method"],
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        outputStreams: ["outputStreams"],
    });
    // $ExpectType ZipStream
    Seven.add(archive, sourceList, {
        volumes: ["volumes"],
    });
}

/** Seven.delete() tests */
{
    // $ExpectType ZipStream
    Seven.delete(archive, target);

    // $ExpectType ZipStream
    Seven.delete(archive, target, {});

    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        $progress: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        $defer: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        $childProcess: childProcess,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        $bin: "$bin",
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        $cherryPick: ["$cherryPick"],
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        $raw: ["$raw"],
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        $spawnOptions: {},
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        alternateStreamExtract: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        alternateStreamReplace: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        deleteFilesAfter: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        fullyQualifiedPaths: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        hardlinks: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        largePages: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        latestTimeStamp: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        noArchiveOnFail: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        noRootDuplication: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        noWildcards: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        ntSecurity: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        sortByType: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        openFiles: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        recursive: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        symlinks: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        techInfo: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        timeStats: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        toStdout: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        yes: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        alternateStreamStore: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        caseSensitive: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        archiveNameMode: "archiveNameMode",
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        archiveType: "archiveType",
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        cpuAffinity: "cpuAffinity",
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        excludeArchiveType: "excludeArchiveType",
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        fromStdin: "fromStdin",
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        hashMethod: "hashMethod",
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        listFileCharset: "listFileCharset",
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        charset: "charset",
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        logLevel: "logLevel",
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        outputDir: "outputDir",
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        overwrite: "a",
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        password: "password",
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        sfx: "sfx",
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        updateOptions: "updateOptions",
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        workingDir: "workingDir",
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        multiBlockSize: "multiBlockSize",
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        excludeArchive: ["excludeArchive"],
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        exclude: ["exclude"],
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        include: ["include"],
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        includeArchive: ["includeArchive"],
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        method: ["method"],
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        outputStreams: ["outputStreams"],
    });
    // $ExpectType ZipStream
    Seven.delete(archive, target, {
        volumes: ["volumes"],
    });

    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {});
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        $progress: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        $defer: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        $childProcess: childProcess,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        $bin: "$bin",
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        $cherryPick: ["$cherryPick"],
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        $raw: ["$raw"],
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        $spawnOptions: {},
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        alternateStreamExtract: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        alternateStreamReplace: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        deleteFilesAfter: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        fullyQualifiedPaths: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        hardlinks: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        largePages: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        latestTimeStamp: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        noArchiveOnFail: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        noRootDuplication: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        noWildcards: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        ntSecurity: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        sortByType: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        openFiles: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        recursive: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        symlinks: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        techInfo: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        timeStats: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        toStdout: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        yes: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        alternateStreamStore: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        caseSensitive: true,
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        archiveNameMode: "archiveNameMode",
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        archiveType: "archiveType",
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        cpuAffinity: "cpuAffinity",
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        excludeArchiveType: "excludeArchiveType",
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        fromStdin: "fromStdin",
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        hashMethod: "hashMethod",
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        listFileCharset: "listFileCharset",
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        charset: "charset",
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        logLevel: "logLevel",
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        outputDir: "outputDir",
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        overwrite: "a",
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        password: "password",
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        sfx: "sfx",
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        updateOptions: "updateOptions",
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        workingDir: "workingDir",
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        multiBlockSize: "multiBlockSize",
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        excludeArchive: ["excludeArchive"],
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        exclude: ["exclude"],
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        include: ["include"],
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        includeArchive: ["includeArchive"],
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        method: ["method"],
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        outputStreams: ["outputStreams"],
    });
    // $ExpectType ZipStream
    Seven.delete(archive, targetList, {
        volumes: ["volumes"],
    });
}

/** Seven.extract() tests */
{
    // $ExpectType ZipStream
    Seven.extract(archive, output);

    // $ExpectType ZipStream
    Seven.extract(archive, output, {});

    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        $progress: true,
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        $defer: true,
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        $childProcess: childProcess,
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        $bin: "$bin",
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        $cherryPick: ["$cherryPick"],
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        $raw: ["$raw"],
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        $spawnOptions: {},
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        alternateStreamExtract: true,
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        alternateStreamReplace: true,
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        deleteFilesAfter: true,
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        fullyQualifiedPaths: true,
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        hardlinks: true,
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        largePages: true,
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        latestTimeStamp: true,
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        noArchiveOnFail: true,
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        noRootDuplication: true,
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        noWildcards: true,
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        ntSecurity: true,
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        sortByType: true,
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        openFiles: true,
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        recursive: true,
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        symlinks: true,
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        techInfo: true,
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        timeStats: true,
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        toStdout: true,
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        yes: true,
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        alternateStreamStore: true,
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        caseSensitive: true,
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        archiveNameMode: "archiveNameMode",
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        archiveType: "archiveType",
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        cpuAffinity: "cpuAffinity",
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        excludeArchiveType: "excludeArchiveType",
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        fromStdin: "fromStdin",
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        hashMethod: "hashMethod",
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        listFileCharset: "listFileCharset",
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        charset: "charset",
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        logLevel: "logLevel",
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        outputDir: "outputDir",
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        overwrite: "a",
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        password: "password",
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        sfx: "sfx",
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        updateOptions: "updateOptions",
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        workingDir: "workingDir",
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        multiBlockSize: "multiBlockSize",
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        excludeArchive: ["excludeArchive"],
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        exclude: ["exclude"],
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        include: ["include"],
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        includeArchive: ["includeArchive"],
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        method: ["method"],
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        outputStreams: ["outputStreams"],
    });
    // $ExpectType ZipStream
    Seven.extract(archive, output, {
        volumes: ["volumes"],
    });
}

/** Seven.extractFull() tests */
{
    // $ExpectType ZipStream
    Seven.extractFull(archive, output);

    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {});

    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        $progress: true,
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        $defer: true,
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        $childProcess: childProcess,
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        $bin: "$bin",
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        $cherryPick: ["$cherryPick"],
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        $raw: ["$raw"],
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        $spawnOptions: {},
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        alternateStreamExtract: true,
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        alternateStreamReplace: true,
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        deleteFilesAfter: true,
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        fullyQualifiedPaths: true,
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        hardlinks: true,
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        largePages: true,
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        latestTimeStamp: true,
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        noArchiveOnFail: true,
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        noRootDuplication: true,
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        noWildcards: true,
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        ntSecurity: true,
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        sortByType: true,
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        openFiles: true,
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        recursive: true,
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        symlinks: true,
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        techInfo: true,
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        timeStats: true,
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        toStdout: true,
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        yes: true,
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        alternateStreamStore: true,
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        caseSensitive: true,
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        archiveNameMode: "archiveNameMode",
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        archiveType: "archiveType",
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        cpuAffinity: "cpuAffinity",
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        excludeArchiveType: "excludeArchiveType",
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        fromStdin: "fromStdin",
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        hashMethod: "hashMethod",
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        listFileCharset: "listFileCharset",
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        charset: "charset",
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        logLevel: "logLevel",
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        outputDir: "outputDir",
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        overwrite: "a",
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        password: "password",
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        sfx: "sfx",
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        updateOptions: "updateOptions",
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        workingDir: "workingDir",
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        multiBlockSize: "multiBlockSize",
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        excludeArchive: ["excludeArchive"],
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        exclude: ["exclude"],
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        include: ["include"],
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        includeArchive: ["includeArchive"],
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        method: ["method"],
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        outputStreams: ["outputStreams"],
    });
    // $ExpectType ZipStream
    Seven.extractFull(archive, output, {
        volumes: ["volumes"],
    });
}

/** Seven.hash() tests */
{
    // $ExpectType ZipStream
    Seven.hash(target);

    // $ExpectType ZipStream
    Seven.hash(target, {});

    // $ExpectType ZipStream
    Seven.hash(target, {
        $progress: true,
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        $defer: true,
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        $childProcess: childProcess,
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        $bin: "$bin",
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        $cherryPick: ["$cherryPick"],
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        $raw: ["$raw"],
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        $spawnOptions: {},
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        alternateStreamExtract: true,
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        alternateStreamReplace: true,
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        deleteFilesAfter: true,
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        fullyQualifiedPaths: true,
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        hardlinks: true,
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        largePages: true,
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        latestTimeStamp: true,
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        noArchiveOnFail: true,
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        noRootDuplication: true,
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        noWildcards: true,
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        ntSecurity: true,
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        sortByType: true,
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        openFiles: true,
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        recursive: true,
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        symlinks: true,
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        techInfo: true,
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        timeStats: true,
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        toStdout: true,
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        yes: true,
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        alternateStreamStore: true,
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        caseSensitive: true,
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        archiveNameMode: "archiveNameMode",
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        archiveType: "archiveType",
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        cpuAffinity: "cpuAffinity",
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        excludeArchiveType: "excludeArchiveType",
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        fromStdin: "fromStdin",
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        hashMethod: "hashMethod",
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        listFileCharset: "listFileCharset",
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        charset: "charset",
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        logLevel: "logLevel",
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        outputDir: "outputDir",
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        overwrite: "a",
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        password: "password",
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        sfx: "sfx",
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        updateOptions: "updateOptions",
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        workingDir: "workingDir",
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        multiBlockSize: "multiBlockSize",
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        excludeArchive: ["excludeArchive"],
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        exclude: ["exclude"],
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        include: ["include"],
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        includeArchive: ["includeArchive"],
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        method: ["method"],
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        outputStreams: ["outputStreams"],
    });
    // $ExpectType ZipStream
    Seven.hash(target, {
        volumes: ["volumes"],
    });

    // $ExpectType ZipStream
    Seven.hash(targetList, {});
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        $progress: true,
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        $defer: true,
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        $childProcess: childProcess,
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        $bin: "$bin",
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        $cherryPick: ["$cherryPick"],
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        $raw: ["$raw"],
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        $spawnOptions: {},
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        alternateStreamExtract: true,
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        alternateStreamReplace: true,
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        deleteFilesAfter: true,
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        fullyQualifiedPaths: true,
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        hardlinks: true,
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        largePages: true,
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        latestTimeStamp: true,
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        noArchiveOnFail: true,
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        noRootDuplication: true,
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        noWildcards: true,
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        ntSecurity: true,
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        sortByType: true,
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        openFiles: true,
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        recursive: true,
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        symlinks: true,
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        techInfo: true,
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        timeStats: true,
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        toStdout: true,
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        yes: true,
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        alternateStreamStore: true,
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        caseSensitive: true,
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        archiveNameMode: "archiveNameMode",
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        archiveType: "archiveType",
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        cpuAffinity: "cpuAffinity",
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        excludeArchiveType: "excludeArchiveType",
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        fromStdin: "fromStdin",
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        hashMethod: "hashMethod",
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        listFileCharset: "listFileCharset",
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        charset: "charset",
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        logLevel: "logLevel",
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        outputDir: "outputDir",
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        overwrite: "a",
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        password: "password",
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        sfx: "sfx",
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        updateOptions: "updateOptions",
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        workingDir: "workingDir",
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        multiBlockSize: "multiBlockSize",
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        excludeArchive: ["excludeArchive"],
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        exclude: ["exclude"],
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        include: ["include"],
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        includeArchive: ["includeArchive"],
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        method: ["method"],
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        outputStreams: ["outputStreams"],
    });
    // $ExpectType ZipStream
    Seven.hash(targetList, {
        volumes: ["volumes"],
    });
}

/** Seven.list() tests */
{
    // $ExpectType ZipStream
    Seven.list(archive);

    // $ExpectType ZipStream
    Seven.list(archive, {});

    // $ExpectType ZipStream
    Seven.list(archive, {
        $progress: true,
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        $defer: true,
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        $childProcess: childProcess,
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        $bin: "$bin",
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        $cherryPick: ["$cherryPick"],
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        $raw: ["$raw"],
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        $spawnOptions: {},
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        alternateStreamExtract: true,
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        alternateStreamReplace: true,
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        deleteFilesAfter: true,
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        fullyQualifiedPaths: true,
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        hardlinks: true,
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        largePages: true,
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        latestTimeStamp: true,
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        noArchiveOnFail: true,
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        noRootDuplication: true,
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        noWildcards: true,
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        ntSecurity: true,
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        sortByType: true,
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        openFiles: true,
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        recursive: true,
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        symlinks: true,
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        techInfo: true,
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        timeStats: true,
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        toStdout: true,
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        yes: true,
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        alternateStreamStore: true,
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        caseSensitive: true,
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        archiveNameMode: "archiveNameMode",
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        archiveType: "archiveType",
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        cpuAffinity: "cpuAffinity",
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        excludeArchiveType: "excludeArchiveType",
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        fromStdin: "fromStdin",
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        hashMethod: "hashMethod",
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        listFileCharset: "listFileCharset",
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        charset: "charset",
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        logLevel: "logLevel",
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        outputDir: "outputDir",
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        overwrite: "a",
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        password: "password",
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        sfx: "sfx",
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        updateOptions: "updateOptions",
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        workingDir: "workingDir",
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        multiBlockSize: "multiBlockSize",
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        excludeArchive: ["excludeArchive"],
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        exclude: ["exclude"],
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        include: ["include"],
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        includeArchive: ["includeArchive"],
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        method: ["method"],
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        outputStreams: ["outputStreams"],
    });
    // $ExpectType ZipStream
    Seven.list(archive, {
        volumes: ["volumes"],
    });
}

/** Seven.rename() tests */
{
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList);

    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {});

    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        $progress: true,
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        $defer: true,
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        $childProcess: childProcess,
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        $bin: "$bin",
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        $cherryPick: ["$cherryPick"],
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        $raw: ["$raw"],
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        $spawnOptions: {},
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        alternateStreamExtract: true,
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        alternateStreamReplace: true,
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        deleteFilesAfter: true,
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        fullyQualifiedPaths: true,
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        hardlinks: true,
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        largePages: true,
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        latestTimeStamp: true,
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        noArchiveOnFail: true,
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        noRootDuplication: true,
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        noWildcards: true,
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        ntSecurity: true,
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        sortByType: true,
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        openFiles: true,
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        recursive: true,
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        symlinks: true,
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        techInfo: true,
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        timeStats: true,
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        toStdout: true,
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        yes: true,
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        alternateStreamStore: true,
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        caseSensitive: true,
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        archiveNameMode: "archiveNameMode",
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        archiveType: "archiveType",
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        cpuAffinity: "cpuAffinity",
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        excludeArchiveType: "excludeArchiveType",
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        fromStdin: "fromStdin",
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        hashMethod: "hashMethod",
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        listFileCharset: "listFileCharset",
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        charset: "charset",
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        logLevel: "logLevel",
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        outputDir: "outputDir",
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        overwrite: "a",
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        password: "password",
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        sfx: "sfx",
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        updateOptions: "updateOptions",
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        workingDir: "workingDir",
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        multiBlockSize: "multiBlockSize",
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        excludeArchive: ["excludeArchive"],
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        exclude: ["exclude"],
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        include: ["include"],
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        includeArchive: ["includeArchive"],
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        method: ["method"],
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        outputStreams: ["outputStreams"],
    });
    // $ExpectType ZipStream
    Seven.rename(archive, targetListList, {
        volumes: ["volumes"],
    });
}

/** Seven.test() tests */
{
    // $ExpectType ZipStream
    Seven.test(archive);

    // $ExpectType ZipStream
    Seven.test(archive, {});

    // $ExpectType ZipStream
    Seven.test(archive, {
        $progress: true,
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        $defer: true,
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        $childProcess: childProcess,
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        $bin: "$bin",
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        $cherryPick: ["$cherryPick"],
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        $raw: ["$raw"],
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        $spawnOptions: {},
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        alternateStreamExtract: true,
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        alternateStreamReplace: true,
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        deleteFilesAfter: true,
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        fullyQualifiedPaths: true,
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        hardlinks: true,
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        largePages: true,
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        latestTimeStamp: true,
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        noArchiveOnFail: true,
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        noRootDuplication: true,
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        noWildcards: true,
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        ntSecurity: true,
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        sortByType: true,
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        openFiles: true,
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        recursive: true,
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        symlinks: true,
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        techInfo: true,
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        timeStats: true,
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        toStdout: true,
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        yes: true,
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        alternateStreamStore: true,
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        caseSensitive: true,
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        archiveNameMode: "archiveNameMode",
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        archiveType: "archiveType",
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        cpuAffinity: "cpuAffinity",
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        excludeArchiveType: "excludeArchiveType",
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        fromStdin: "fromStdin",
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        hashMethod: "hashMethod",
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        listFileCharset: "listFileCharset",
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        charset: "charset",
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        logLevel: "logLevel",
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        outputDir: "outputDir",
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        overwrite: "a",
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        password: "password",
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        sfx: "sfx",
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        updateOptions: "updateOptions",
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        workingDir: "workingDir",
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        multiBlockSize: "multiBlockSize",
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        excludeArchive: ["excludeArchive"],
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        exclude: ["exclude"],
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        include: ["include"],
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        includeArchive: ["includeArchive"],
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        method: ["method"],
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        outputStreams: ["outputStreams"],
    });
    // $ExpectType ZipStream
    Seven.test(archive, {
        volumes: ["volumes"],
    });
}

/** Seven.update() tests */
{
    // $ExpectType ZipStream
    Seven.update(archive, file);

    // $ExpectType ZipStream
    Seven.update(archive, file, {});

    // $ExpectType ZipStream
    Seven.update(archive, file, {
        $progress: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        $defer: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        $childProcess: childProcess,
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        $bin: "$bin",
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        $cherryPick: ["$cherryPick"],
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        $raw: ["$raw"],
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        $spawnOptions: {},
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        alternateStreamExtract: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        alternateStreamReplace: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        deleteFilesAfter: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        fullyQualifiedPaths: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        hardlinks: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        largePages: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        latestTimeStamp: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        noArchiveOnFail: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        noRootDuplication: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        noWildcards: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        ntSecurity: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        sortByType: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        openFiles: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        recursive: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        symlinks: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        techInfo: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        timeStats: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        toStdout: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        yes: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        alternateStreamStore: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        caseSensitive: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        archiveNameMode: "archiveNameMode",
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        archiveType: "archiveType",
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        cpuAffinity: "cpuAffinity",
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        excludeArchiveType: "excludeArchiveType",
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        fromStdin: "fromStdin",
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        hashMethod: "hashMethod",
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        listFileCharset: "listFileCharset",
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        charset: "charset",
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        logLevel: "logLevel",
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        outputDir: "outputDir",
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        overwrite: "a",
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        password: "password",
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        sfx: "sfx",
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        updateOptions: "updateOptions",
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        workingDir: "workingDir",
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        multiBlockSize: "multiBlockSize",
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        excludeArchive: ["excludeArchive"],
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        exclude: ["exclude"],
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        include: ["include"],
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        includeArchive: ["includeArchive"],
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        method: ["method"],
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        outputStreams: ["outputStreams"],
    });
    // $ExpectType ZipStream
    Seven.update(archive, file, {
        volumes: ["volumes"],
    });

    // $ExpectType ZipStream
    Seven.update(archive, fileList, {});
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        $progress: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        $defer: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        $childProcess: childProcess,
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        $bin: "$bin",
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        $cherryPick: ["$cherryPick"],
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        $raw: ["$raw"],
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        $spawnOptions: {},
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        alternateStreamExtract: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        alternateStreamReplace: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        deleteFilesAfter: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        fullyQualifiedPaths: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        hardlinks: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        largePages: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        latestTimeStamp: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        noArchiveOnFail: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        noRootDuplication: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        noWildcards: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        ntSecurity: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        sortByType: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        openFiles: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        recursive: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        symlinks: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        techInfo: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        timeStats: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        toStdout: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        yes: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        alternateStreamStore: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        caseSensitive: true,
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        archiveNameMode: "archiveNameMode",
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        archiveType: "archiveType",
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        cpuAffinity: "cpuAffinity",
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        excludeArchiveType: "excludeArchiveType",
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        fromStdin: "fromStdin",
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        hashMethod: "hashMethod",
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        listFileCharset: "listFileCharset",
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        charset: "charset",
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        logLevel: "logLevel",
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        outputDir: "outputDir",
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        overwrite: "a",
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        password: "password",
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        sfx: "sfx",
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        updateOptions: "updateOptions",
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        workingDir: "workingDir",
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        multiBlockSize: "multiBlockSize",
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        excludeArchive: ["excludeArchive"],
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        exclude: ["exclude"],
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        include: ["include"],
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        includeArchive: ["includeArchive"],
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        method: ["method"],
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        outputStreams: ["outputStreams"],
    });
    // $ExpectType ZipStream
    Seven.update(archive, fileList, {
        volumes: ["volumes"],
    });
}

/** Seven.listen() tests */
const zipStream = new Seven.ZipStream();
// $ExpectType ZipStream
Seven.listen(zipStream);
