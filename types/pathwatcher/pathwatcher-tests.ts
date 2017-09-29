import { File, Directory } from "pathwatcher";

let bool: boolean;
let str: string;
let sub: EventKit.Disposable;

let file: PathWatcher.File;
let dir: PathWatcher.Directory;

// File =======================================================================
// Construction
file = new File("Test.file");
new File("Test.file", false);

file.create().then(() => {});

// Event Subscription
sub = file.onDidChange(() => {});
sub = file.onDidRename(() => {});
sub = file.onDidDelete(() => {});
sub = file.onWillThrowWatchError(() => {});

// File Metadata
bool = file.isFile();
bool = file.isDirectory();
bool = file.isSymbolicLink();
file.exists().then((result: boolean) => {});
bool = file.existsSync();
file.getDigest().then((digest: string) => {});
str = file.getDigestSync();
file.setEncoding("utf8");
str = file.getEncoding();

// Managing Paths
str = file.getPath();
str = file.getRealPathSync();
file.getRealPath().then((path: string) => {});
str = file.getBaseName();

// Traversing
dir = file.getParent();

// Reading and Writing
file.read().then((contents: string) => {});
file.read(true).then((contents: string) => {});
file.createReadStream();
file.write("Test").then(() => {});
file.createWriteStream();
file.writeSync("Test");

// Directory ==================================================================
// Construction
dir = new Directory("Test.file");
new Directory("Test.file", true);

dir.create().then((success: boolean) => {});
dir.create(0o0777).then((success: boolean) => {});

// Event Subscription
sub = dir.onDidChange(() => {});

// Directory Metadata
bool = dir.isFile();
bool = dir.isDirectory();
bool = dir.isSymbolicLink();
dir.exists().then((exists: boolean) => {});
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
