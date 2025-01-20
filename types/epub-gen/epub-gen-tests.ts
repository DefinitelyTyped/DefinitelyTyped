import Epub = require("epub-gen");

new Epub({ title: "", content: [] }); // $ExpectType Epub
(new Epub({ title: "", content: [] })).promise; // $ExpectType Promise<void>
