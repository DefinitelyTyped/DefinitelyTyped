import * as JSZip from 'jszip';

const SEVERITY = {
	DEBUG: 0,
	INFO: 1,
	WARN: 2,
	ERROR: 3,
	FATAL: 4
};

function createTestZip(): JSZip {
	const zip = new JSZip();
	zip.file("test.txt", "test string");
	zip.file("test", null, { dir: true });
	zip.file("test/test.txt", "test string");
	return zip;
}

function filterWithFileAsync(zip: JSZip, as: JSZip.OutputType,
                             cb: (relativePath: string, file: JSZip.JSZipObject, value: any) => boolean)
  : Promise<JSZip.JSZipObject[]> {
	const promises: Array<Promise<any>> = [];
	const promiseIndices: {[key: string]: number} = {};
	zip.forEach((relativePath: string, file: JSZip.JSZipObject) => {
		const promise = file.async(as);
		promiseIndices[file.name] = promises.length;
		promises.push(promise);
	});
	return Promise.all(promises).then((values: any[]) => {
		const filtered = zip.filter((relativePath: string, file: JSZip.JSZipObject) => {
			const index = promiseIndices[file.name];
			return cb(relativePath, file, values[index]);
		});
		return Promise.resolve(filtered);
	});
}

function testJSZip() {
	const zip = createTestZip();
	zip.generateAsync({compression: "DEFLATE", type: "base64"}).then((serializedZip) => {
		const newJszip = new JSZip();
		return newJszip.loadAsync(serializedZip, {base64: true/*, checkCRC32: true*/});
	}).then((newJszip: JSZip) => {
		newJszip.file("test.txt").async('text').then((text: string) => {
			if (text === "test string") {
		log(SEVERITY.INFO, "all ok");
	} else {
		log(SEVERITY.ERROR, "no matching file found");
	}
		}).catch((e: any) => log(SEVERITY.ERROR, e));

		newJszip.file("test/test.txt").async('text').then((text: string) => {
			if (text === "test string") {
		log(SEVERITY.INFO, "all ok");
	} else {
		log(SEVERITY.ERROR, "no matching file found");
	}
		}).catch((e: any) => log(SEVERITY.ERROR, e));

	const folder = newJszip.folder("test");
		folder.file("test.txt").async('text').then((text: string) => {
			if (text === "test string") {
		log(SEVERITY.INFO, "all ok");
			} else {
		log(SEVERITY.ERROR, "wrong file");
	}
		}).catch((e: any) => log(SEVERITY.ERROR, e));

	const folders = newJszip.folder(new RegExp("^test"));

		if (folders.length === 1) {
		log(SEVERITY.INFO, "all ok");
			if (folders[0].dir) {
			log(SEVERITY.INFO, "all ok");
			} else {
			log(SEVERITY.ERROR, "wrong file");
		}
	} else {
		log(SEVERITY.ERROR, "wrong number of folder");
	}

	const files = newJszip.file(new RegExp("^test"));
		if (files.length === 2) {
		log(SEVERITY.INFO, "all ok");
			Promise.all([files[0].async('text'), files[1].async('text')]).then((texts: string[]) => {
				if (texts[0] === "test string" && texts[1] === 'test string') {
			log(SEVERITY.INFO, "all ok");
				} else {
			log(SEVERITY.ERROR, "wrong data in files");
		}
			});
		} else {
		log(SEVERITY.ERROR, "wrong number of files");
	}

		filterWithFileAsync(newJszip, 'text', (relativePath: string, file: JSZip.JSZipObject, text: string) => {
			if (text === "test string") {
			return true;
		}
		return false;
		}).then((filterFiles: JSZip.JSZipObject[]) => {
			if (filterFiles.length === 2) {
		log(SEVERITY.INFO, "all ok");
			} else {
		log(SEVERITY.ERROR, "wrong number of files");
	}
		}).catch((e: any) => log(SEVERITY.ERROR, e));
	}).catch((e: any) => { console.error(e); });
}

function testJSZipRemove() {
	const newJszip = createTestZip();
	newJszip.remove("test/test.txt");

	filterWithFileAsync(newJszip, 'text', (relativePath: string, file: JSZip.JSZipObject, text: string) => {
		if (text === "test string") {
			return true;
		}
		return false;
	}).then((filterFiles: JSZip.JSZipObject[]) => {
		if (filterFiles.length === 1) {
		log(SEVERITY.INFO, "all ok");
		} else {
		log(SEVERITY.ERROR, "wrong number of files");
	}
	}).catch((e: any) => log(SEVERITY.ERROR, e));
}

function log(severity: number, message: any) {
	let log = "";
	switch (severity) {
		case 0:
			log += "[DEBUG] ";
			break;
		case 1:
			log += "[INFO] ";
			break;
		case 2:
			log += "[WARN] ";
			break;
		case 3:
			log += "[ERROR] ";
			break;
		case 4:
			log += "[FATAL] ";
			break;
		default:
		    log += "[INFO]";
		    break;
	}
	console.log(log += message);
}

testJSZip();
testJSZipRemove();
