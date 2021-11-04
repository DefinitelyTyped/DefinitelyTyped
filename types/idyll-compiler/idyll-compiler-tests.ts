import compile = require("idyll-compiler");

// Dummy log
const log = (msg: string) => {};

// $ExpectType Node[] | Promise<Node[]> || AST | Promise<AST>
compile("*italics*", { async: false }, () => log("window"));

// $ExpectType Node[] | Promise<Node[]> || AST | Promise<AST>
compile("Simple **idyll**", { async: false });

// $ExpectType Node[] | Promise<Node[]> || AST | Promise<AST>
compile(`# Test`);
