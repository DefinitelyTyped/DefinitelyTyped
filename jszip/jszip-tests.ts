/// <reference path="../jquery/jquery.d.ts" />
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

	var serializedZip = newJszip.generate({compression: "DEFLATE", type:"base64"});

	newJszip = new JSZip();
	newJszip.load(serializedZip, {base64: true, checkCRC32: true});

	if(newJszip.file("test.txt").data === "test string") {
		log(SEVERITY.INFO, "all ok");
	} else {
		log(SEVERITY.ERROR, "no matching file found");
	}
	if(newJszip.file("test/test.txt").data === "test string") {
		log(SEVERITY.INFO, "all ok");
	} else {
		log(SEVERITY.ERROR, "no matching file found");
	}

	var folder = newJszip.folder("test");
	if(folder.file("test.txt").data == "test string") {
		log(SEVERITY.INFO, "all ok");
	} 
	else {
		log(SEVERITY.ERROR, "wrong file");
	}

	var folders = newJszip.folder(new RegExp("^test"));
	
	if(folders.length == 1) {
		log(SEVERITY.INFO, "all ok");
		if(folders[0].options.dir == true) {
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
		if(files[0].data == "test string" && files[1].data == "test string") {
			log(SEVERITY.INFO, "all ok");
		}
		else {
			log(SEVERITY.ERROR, "wrong data in files");	
		}
	} 
	else {
		log(SEVERITY.ERROR, "wrong number of files");
	}

	var filterFiles = newJszip.filter((relativePath: string, file: jszip.JSZipFile) => { 
			if(file.data == "test string") {
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

	filterFiles = newJszip.filter((relativePath: string, file: jszip.JSZipFile) => { 
			if(file.data == "test string") {
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

	log(SEVERITY.INFO, newJszip.crc32("Test"));
	log(SEVERITY.INFO, newJszip.utf8encode("Test"));
	log(SEVERITY.INFO, newJszip.utf8decode("Test"));
	newJszip.clone();
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