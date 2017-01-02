import * as fs from "fs-promise";

var src: string;
var dst: string;
var dir: string;
var path: string;
var data: any;
var writeOptions: fs.WriteOptions;
var writeJsonOptions: fs.WriteJsonOptions = {
    spaces: 2,
    replacer(key, value) {
        src = key;
        return value;
    }
};
var readJsonOptions: fs.ReadJsonOptions;

async function test() {
    await fs.copy(src, dst);
    await fs.emptyDir(dir);
    await fs.emptydir(dir);
    await fs.ensureFile(path);
    await fs.createFile(path);
    await fs.ensureDir(dir);
    await fs.ensureLink(src, dst);
    await fs.createLink(src, dst);
    await fs.ensureSymlink(src, dst);
    await fs.ensureSymlink(src, dst, "dir");
    await fs.ensureSymlink(src, dst, "file");
    await fs.ensureSymlink(src, dst, "junction");
    await fs.createSymlink(src, dst, "dir");
    await fs.mkdirs(dir);
    await fs.mkdirp(dir);
    await fs.move(src, dst);
    await fs.outputFile(path, "test");
    await fs.outputFile(path, "test", writeOptions);
    await fs.outputFile(path, new Buffer([1,2]));
    await fs.outputFile(path, new Buffer([1,2]), writeOptions);
    await fs.outputJson(path, data);
    await fs.outputJson(path, data, writeJsonOptions);
    await fs.outputJSON(path, data, writeJsonOptions);
    let json = await fs.readJson(path);
    json = await fs.readJson(path, readJsonOptions);
    json = await fs.readJSON(path, readJsonOptions);
    await fs.remove(path);
    let dirs: string[] = await fs.walk(dir);
    await fs.writeJson(path, data);
    await fs.writeJson(path, data, writeJsonOptions);
    await fs.writeJSON(path, data, writeJsonOptions);
    return dirs;
}

test().then((dirs: string[]) => {
    console.log(dirs);
}).catch((err) => {
    console.log(err);
});
