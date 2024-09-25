import flags = require("regexp.prototype.flags");
import "regexp.prototype.flags/auto";

declare function isFlags(f: flags.Flags): void;

isFlags(flags(/foo/));
isFlags(flags(/foo/g));
isFlags(flags(/foo/i));
isFlags(flags(/foo/m));
isFlags(flags(/foo/s));
isFlags(flags(/foo/u));
isFlags(flags(/foo/v));
isFlags(flags(/foo/y));
