import diskspace from "diskspace";
diskspace.check("C", (_err, result) => result.status === "NOTREADY");
diskspace.check("/", (_err, result) => result.status === "READY");
