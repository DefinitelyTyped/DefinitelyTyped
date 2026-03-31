import * as R from "ramda";
import * as dist from "ramda/dist/ramda";
import * as distMin from "ramda/dist/ramda.min";
import * as srcIndex from "ramda/src/index";

(async () => {
    const Res = await import("ramda");
    const esIndex = await import("ramda/es/index");

    let typeChecker: typeof R;
    typeChecker = R;
    typeChecker = srcIndex;
    typeChecker = dist;
    typeChecker = distMin;
    typeChecker = Res;
    typeChecker = esIndex;
});
