import { Disposable } from "event-kit";
import { File, Directory } from "pathwatcher";

let bool: boolean;
let str: string;
let sub: Disposable;

let file: File;
let dir: Directory;

// File =======================================================================
// Construction
file = new File("Test.file");
new File("Test.file", false);

async function fileCreation() {
    bool = await file.create();
}

// Event Subscription
sub = file.onDidChange(() => {});
sub = file.onDidRename(() => {});
sub = file.onDidDelete(() => {});
sub = file.onWillThrowWatchError(() => {});

// File Metadata
bool = file.isFile();
bool = file.isDirectory();
bool = file.isSymbolicLink();

async function fileExists() {
    bool = await file.exists();
}

bool = file.existsSync();

async function getFileDigest() {
    str = await file.getDigest();
}

str = file.getDigestSync();
file.setEncoding("utf8");
str = file.getEncoding();

// Managing Paths
str = file.getPath();
str = file.getRealPathSync();

async function getFileRealPath() {
    str = await file.getRealPath();
}

str = file.getBaseName();

// Traversing
dir = file.getParent();

// Reading and Writing
async function readFile() {
    str = await file.read();
}

const stream = file.createReadStream();
stream.close();

async function writeFile() {
    await file.write("Test");
}

file.createWriteStream();
file.writeSync("Test");

// Directory ==================================================================
// Construction
dir = new Directory("Test.file");
new Directory("Test.file", true);

async function createDirectory() {
    bool = await dir.create();
    bool = await dir.create(0o0777);
}

// Event Subscription
sub = dir.onDidChange(() => {});

// Directory Metadata
bool = dir.isFile();
bool = dir.isDirectory();
bool = dir.isSymbolicLink();

async function directoryExists() {
    bool = await dir.exists();
}

bool = dir.existsSync();
bool = dir.isRoot();

// Managing Paths
str = dir.getPath();
str = dir.getRealPathSync();
str = dir.getBaseName();
dir.relativize("Test.file") ;

// Traversing
dir = dir.getParent();
file = dir.getFile("Test.file");
dir = dir.getSubdirectory("Test");
dir.getEntriesSync();
dir.getEntries((error, entries) => {});
bool = dir.contains("Test.file");
