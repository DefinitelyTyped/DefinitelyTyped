import cloneStats = require("clone-stats");
import { Stats, statSync } from "fs";

// Get stats for a file (using package.json as example)
const stats: Stats = statSync("package.json");

// Clone the stats
const cloned: Stats = cloneStats(stats);

// Verify cloned stats has all properties
const size: number = cloned.size;
const mode: number = cloned.mode;
const mtime: Date = cloned.mtime;
const atime: Date = cloned.atime;
const ctime: Date = cloned.ctime;
const birthtime: Date = cloned.birthtime;

// Verify cloned stats has all methods
const isFile: boolean = cloned.isFile();
const isDirectory: boolean = cloned.isDirectory();
const isSymbolicLink: boolean = cloned.isSymbolicLink();
const isBlockDevice: boolean = cloned.isBlockDevice();
const isCharacterDevice: boolean = cloned.isCharacterDevice();
const isFIFO: boolean = cloned.isFIFO();
const isSocket: boolean = cloned.isSocket();
