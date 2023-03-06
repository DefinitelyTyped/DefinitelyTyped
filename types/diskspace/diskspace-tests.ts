import diskspace = require("diskspace");

diskspace.check("C", (_err, result) => result.status === "NOTREADY");
diskspace.check("/", (_err, result) => result.status === "READY");
