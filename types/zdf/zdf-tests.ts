import * as zdf from "zdf";

// $ExpectType void
zdf.getSources(
    "",
    (
        result // $ExpectType ZdfInfo
    ) => {},
    (
        result // $ExpectType ZdfInfoMeta
    ) => {}
);

// $ExpectType void
zdf.downloadStream(
    "",
    undefined,
    (
        progress // $ExpectType ZdfProgress
    ) => {}
);
