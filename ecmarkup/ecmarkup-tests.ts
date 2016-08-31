/// <reference types="ecmarkup" />

import * as emu from "ecmarkup";

emu.build("string", (path: string) => Promise.resolve("string"), {
    contributors: "string",
    copyright: true,
    date: new Date(),
    location: "string",
    oldToc: true,
    toc: true,
    shortname: "string",
    stage: "string",
    status: "proposal",
    title: "string",
    version: "string",
    verbose: true
}).then((spec: emu.Spec) => {
    const output = spec.toHTML();
    const biblio = spec.exportBiblio();
});