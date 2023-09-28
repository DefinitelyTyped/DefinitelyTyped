import title = require("title");

title("tHe cHicaGo maNual oF StyLe"); // $ExpectType string
title("TypeSCRipt is great", {}); // $ExpectType string
// $ExpectType string
title("TypeSCRipt is great", {
    special: ["TypeScript"],
});
