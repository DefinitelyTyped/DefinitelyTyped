import compile from "idyll-compiler";

// Dummy log
const log = (msg: string) => {};

// $ExpectType Node[] | Promise<Node[]>
compile("*italics*", { async: false }, () => log("window"));

// $ExpectType Node[] | Promise<Node[]>
compile("Simple **idyll**", { async: false });

// $ExpectType Node[] | Promise<Node[]>
compile(`# Test`);
