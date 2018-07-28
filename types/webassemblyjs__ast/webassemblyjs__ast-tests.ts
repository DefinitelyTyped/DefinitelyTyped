import * as t from "@webassemblyjs/ast";

t.instruction("get_local", []);

const ast: t.Node = {};

t.traverse(ast, { ModuleImport: () => {} });
t.instruction("get_local", []);
