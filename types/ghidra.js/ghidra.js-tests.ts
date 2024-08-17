/// <reference types="node" />
/// <reference types="./index" />

const assert = require("assert");

const domainFile = currentProgram.getDomainFile();

assert.equal(currentProgram.getName(), "yes");
assert.equal(domainFile.getPathname(), "/yes");
assert.equal(currentProgram.getExecutableFormat(), "Mac OS X Mach-O");
assert.equal(currentProgram.getLanguageID().getIdAsString(), "AARCH64:LE:64:AppleSilicon");
assert.equal(currentProgram.getCompilerSpec().getCompilerSpecID().getIdAsString(), "default");
