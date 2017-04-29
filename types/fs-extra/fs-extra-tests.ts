import * as fs from 'fs-extra';
import * as Path from 'path';

const src = "";
const dest = "";
const file = "";
const dir = "";
const path = "";
const data = "";
const object = {};
const errorCallback = (err: Error) => { };
const readOptions: fs.ReadOptions = {
	reviver: {}
};
const writeOptions: fs.WriteOptions = {
	replacer: {}
};

fs.moveSync(src, dest, {});
fs.move(src, dest, {}).then(() => {
	// stub
});
fs.move(src, dest).then(() => {
	// stub
});
fs.move(src, dest, {}, () => {
	// stub
})
fs.move(src, dest, () => {
	// stub
})

fs.copy(src, dest).then(() => {
	// stub
});
fs.copy(src, dest, { clobber: true }).then(() => {
	// stub
});
fs.copy(src, dest, errorCallback);
fs.copy(src, dest, (src: string) => false, errorCallback);
fs.copy(src, dest,
	{
		clobber: true,
		preserveTimestamps: true,
		filter: (src: string) => false
	},
	errorCallback
);
fs.copy(src, dest,
	{
		clobber: true,
		preserveTimestamps: true,
		filter: /.*/
	},
	errorCallback
);
fs.copySync(src, dest);
fs.copySync(src, dest, (src: string) => false);
fs.copySync(src, dest, /.*/);
fs.copySync(src, dest,
	{
		clobber: true,
		preserveTimestamps: true,
		filter: (src: string) => false
	}
);
fs.copySync(src, dest,
	{
		clobber: true,
		preserveTimestamps: true,
		filter: /.*/
	}
);
fs.createFile(file).then(() => {
	// stub
});
fs.createFile(file, errorCallback);
fs.createFileSync(file);

fs.mkdirs(dir, {}).then(() => {
	// stub
});
fs.mkdirs(dir).then(() => {
	// stub
});

fs.mkdirp(dir, {}).then(() => {
	// stub
});
fs.mkdirp(dir).then(() => {
	// stub
});
fs.mkdirs(dir, errorCallback);
fs.mkdirs(dir, {}, errorCallback);
fs.mkdirsSync(dir);
fs.mkdirsSync(dir, {});
fs.mkdirp(dir, errorCallback);
fs.mkdirp(dir, {}, errorCallback);
fs.mkdirpSync(dir);
fs.mkdirpSync(dir, {});

fs.outputFile(file, data).then(() => {
	// stub
});
fs.outputFile(file, data, errorCallback);
fs.outputFileSync(file, data);

fs.outputJson(file, data).then(() => {
	// stub
});
fs.outputJson(file, data, errorCallback);
fs.outputJSON(file, data, errorCallback);
fs.outputJSON(file, data).then(() => {
	// stub
});

fs.outputJsonSync(file, data);
fs.outputJSONSync(file, data);

fs.readJson(file).then(() => {
	// stub
});

fs.readJson(file, readOptions).then(() => {
	// stub
});
fs.readJson(file, (error: Error, jsonObject: any) => { });
fs.readJson(file, readOptions, (error: Error, jsonObject: any) => { });
fs.readJSON(file, (error: Error, jsonObject: any) => { });
fs.readJSON(file, readOptions, (error: Error, jsonObject: any) => { });

fs.readJsonSync(file, readOptions);
fs.readJSONSync(file, readOptions);

fs.remove(dir, errorCallback);
fs.remove(dir).then(() => {
	// stub
});
fs.removeSync(dir);

fs.writeJson(file, object).then(() => {
	// stub
});
fs.writeJSON(file, object).then(() => {
	// stub
});
fs.writeJson(file, object, errorCallback);
fs.writeJson(file, object, writeOptions, errorCallback);
fs.writeJSON(file, object, errorCallback);
fs.writeJSON(file, object, writeOptions, errorCallback);
fs.writeJson(file, object, writeOptions).then(() => {
	// stub
});
fs.writeJSON(file, object, writeOptions).then(() => {
	// stub
});
fs.writeJsonSync(file, object, writeOptions);
fs.writeJSONSync(file, object, writeOptions);

fs.ensureDir(path).then(() => {
	// stub
});
fs.ensureDir(path, errorCallback);
fs.ensureDirSync(path);

fs.ensureFile(path).then(() => {
	// stub
});
fs.ensureFile(path, errorCallback);
fs.ensureFileSync(path);
fs.ensureLink(path).then(() => {
	// stub
});
fs.ensureLink(path, errorCallback);
fs.ensureLinkSync(path);
fs.ensureSymlink(path).then(() => {
	// stub
});
fs.ensureSymlink(path, errorCallback);
fs.ensureSymlinkSync(path);
fs.emptyDir(path).then(() => {
	// stub
});
fs.emptyDir(path, errorCallback);
fs.emptyDirSync(path);
fs.pathExists(path).then((_exist: boolean) => {
	// stub
});
fs.pathExists(path, (_err: Error, _exists: boolean) => { });
const x: boolean = fs.pathExistsSync(path);
