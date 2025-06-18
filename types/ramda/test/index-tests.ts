import * as R from "ramda";
import * as dist from "ramda/dist/ramda";
import * as distMin from "ramda/dist/ramda.min";
import * as src from "ramda/src";
import * as srcIndex from "ramda/src/index";

(async () => {
    const Res = await import("ramda");
    const es = await import("ramda/es");
    const esIndex = await import("ramda/es/index");

    let typeChecker: typeof R;
    typeChecker = R;
    typeChecker = src;
    typeChecker = srcIndex;
    typeChecker = dist;
    typeChecker = distMin;
    typeChecker = Res;
    typeChecker = es;
    typeChecker = esIndex;
});
