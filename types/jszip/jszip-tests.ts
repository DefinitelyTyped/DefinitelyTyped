var SEVERITY = {
	DEBUG: 0,
	INFO: 1,
	WARN: 2,
	ERROR: 3,
	FATAL: 4
}

function createTestZip(): JSZip {
	var zip = new JSZip();
	zip.file("test.txt", "test string");
	zip.file("test", null, { dir: true });
	zip.file("test/test.txt", "test string");
	return zip
}

function filterWithFileAsync(zip: JSZip, as: Serialization,
                             cb: (relativePath: string, file: JSZipObject, value: any) => boolean)
  : Promise<JSZipObject[]> {
	var promises: Promise<any>[] = [];
	var promiseIndices: {[key: string]: number} = {};
	zip.forEach((relativePath: string, file: JSZipObject) => {
		var promise = file.async(as);
		promiseIndices[file.name] = promises.length;
		promises.push(promise);
	});
	return Promise.all(promises).then(function(values: any[]) {
		var filtered = zip.filter((relativePath: string, file: JSZipObject) => {
			var index = promiseIndices[file.name];
			return cb(relativePath, file, values[index]);
		});
		return Promise.resolve(filtered);
	});
}

function testJSZip() {
	var zip = createTestZip();
	zip.generateAsync({compression: "DEFLATE", type: "base64"}).then(function(serializedZip: any) {
		var newJszip = new JSZip();
		return newJszip.loadAsync(serializedZip, {base64: true/*, checkCRC32: true*/});
	}).then(function(newJszip: JSZip) {
		newJszip.file("test.txt").async('text').then(function(text: string) {
			if (text === "test string") {
		log(SEVERITY.INFO, "all ok");
	} else {
		log(SEVERITY.ERROR, "no matching file found");
	}
		}).catch((e: any) => log(SEVERITY.ERROR, e));

		newJszip.file("test/test.txt").async('text').then(function(text: string) {
			if (text === "test string") {
		log(SEVERITY.INFO, "all ok");
	} else {
		log(SEVERITY.ERROR, "no matching file found");
	}
		}).catch((e: any) => log(SEVERITY.ERROR, e));

	var folder = newJszip.folder("test");
		folder.file("test.txt").async('text').then(function(text: string) {
			if (text == "test string") {
		log(SEVERITY.INFO, "all ok");
			} else {
		log(SEVERITY.ERROR, "wrong file");
	}
		}).catch((e: any) => log(SEVERITY.ERROR, e));

	var folders = newJszip.folder(new RegExp("^test"));

		if (folders.length == 1) {
		log(SEVERITY.INFO, "all ok");
			if (folders[0].dir == true) {
			log(SEVERITY.INFO, "all ok");
			} else {
			log(SEVERITY.ERROR, "wrong file");
		}
	} else {
		log(SEVERITY.ERROR, "wrong number of folder");
	}

	var files = newJszip.file(new RegExp("^test"));
		if (files.length == 2) {
		log(SEVERITY.INFO, "all ok");
			Promise.all([files[0].async('text'), files[1].async('text')]).then(function(texts: string[]) {
				if (texts[0] == "test string" && texts[1] == 'test string') {
			log(SEVERITY.INFO, "all ok");
				} else {
			log(SEVERITY.ERROR, "wrong data in files");
		}
			});
		} else {
		log(SEVERITY.ERROR, "wrong number of files");
	}

		filterWithFileAsync(newJszip, 'text', (relativePath: string, file: JSZipObject, text: string) => {
			if (text == "test string") {
			return true;
		}
		return false;
		}).then(function(filterFiles: JSZipObject[]) {
			if (filterFiles.length == 2) {
		log(SEVERITY.INFO, "all ok");
			} else {
		log(SEVERITY.ERROR, "wrong number of files");
	}
		}).catch((e: any) => log(SEVERITY.ERROR, e));
	}).catch((e: any)=> { console.error(e) });
}

function testJSZipRemove() {
	var newJszip = createTestZip();
	newJszip.remove("test/test.txt");

	filterWithFileAsync(newJszip, 'text', (relativePath: string, file: JSZipObject, text: string) => {
		if (text == "test string") {
			return true;
		}
		return false;
	}).then(function(filterFiles: JSZipObject[]) {
		if (filterFiles.length == 1) {
		log(SEVERITY.INFO, "all ok");
		} else {
		log(SEVERITY.ERROR, "wrong number of files");
	}
	}).catch((e: any) => log(SEVERITY.ERROR, e));
}

function log(severity:number, message: any) {
	var log = "";
	switch(severity) {
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
		    log += "[INFO]"
		    break;
	}
	console.log(log += message);
}

testJSZip();
testJSZipRemove();
