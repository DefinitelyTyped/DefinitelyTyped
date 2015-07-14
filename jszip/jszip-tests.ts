/// <reference path='jszip.d.ts' />

var SEVERITY = {
	DEBUG: 0,
	INFO: 1,
	WARN: 2,
	ERROR: 3,
	FATAL: 4
}

function testJSZip() {
	var newJszip = new JSZip();

	newJszip.file("test.txt", "test string");
	newJszip.file("test/test.txt", "test string");

	var serializedZip = newJszip.generate({compression: "DEFLATE", type: "base64"});

	newJszip = new JSZip();
	newJszip.load(serializedZip, {base64: true, checkCRC32: true});

    if (newJszip.file("test.txt").asText() === "test string") {
		log(SEVERITY.INFO, "all ok");
	} else {
		log(SEVERITY.ERROR, "no matching file found");
	}
    if (newJszip.file("test/test.txt").asText() === "test string") {
		log(SEVERITY.INFO, "all ok");
	} else {
		log(SEVERITY.ERROR, "no matching file found");
	}

	var folder = newJszip.folder("test");
	if(folder.file("test.txt").asText() == "test string") {
		log(SEVERITY.INFO, "all ok");
	}
	else {
		log(SEVERITY.ERROR, "wrong file");
	}

	var folders = newJszip.folder(new RegExp("^test"));

	if(folders.length == 1) {
		log(SEVERITY.INFO, "all ok");
		if(folders[0].dir == true) {
			log(SEVERITY.INFO, "all ok");
		}
		else {
			log(SEVERITY.ERROR, "wrong file");
		}
	} else {
		log(SEVERITY.ERROR, "wrong number of folder");
	}

	var files = newJszip.file(new RegExp("^test"));
	if(files.length == 2) {
		log(SEVERITY.INFO, "all ok");
        if (files[0].asText() == "test string" && files[1].asText() == "test string") {
			log(SEVERITY.INFO, "all ok");
		}
		else {
			log(SEVERITY.ERROR, "wrong data in files");
		}
	}
	else {
		log(SEVERITY.ERROR, "wrong number of files");
	}

	var filterFiles = newJszip.filter((relativePath: string, file: JSZipObject) => {
        if (file.asText() == "test string") {
			return true;
		}
		return false;
	});

	if(filterFiles.length == 2) {
		log(SEVERITY.INFO, "all ok");
	}
	else {
		log(SEVERITY.ERROR, "wrong number of files");
	}

	newJszip.remove("test/test.txt");

	filterFiles = newJszip.filter((relativePath: string, file: JSZipObject) => {
        if (file.asText() == "test string") {
			return true;
		}
		return false;
	});

	if(filterFiles.length == 1) {
		log(SEVERITY.INFO, "all ok");
	}
	else {
		log(SEVERITY.ERROR, "wrong number of files");
	}

	var uncompressedStr = JSZip.compressions.DEFLATE.uncompress(
		JSZip.compressions.DEFLATE.compress("\0\1\2\3\4\5\6\7",{level:9}));
	var uncompressedArr = JSZip.compressions.DEFLATE.uncompress(
		JSZip.compressions.DEFLATE.compress([0,1,2,3,4,5,6,7],{level:9}));
	var uncompressedUint8Arr = JSZip.compressions.DEFLATE.uncompress(
		JSZip.compressions.DEFLATE.compress(new Uint8Array([0,1,2,3,4,5,6,7]),{level:9}));

	var every_match = [0,1,2,3,4,5,6,7].every(function(val, i){
		return uncompressedStr[i] === val &&
					 uncompressedArr[i] === val &&
					 uncompressedUint8Arr[i] === val;
	});
	if(every_match) {
		log(SEVERITY.INFO, "compress and uncompress ok.");
	}else{
		log(SEVERITY.ERROR, "compress or uncompress failed.");
	}

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
