import * as lucene from 'lucene';

const ast = lucene.parse('query'); // $ExpectType AST
lucene.parse(1); // $ExpectError

lucene.toString(ast); // $ExpectType string

if ('right' in ast) {
    ast; // $ExpectType BinaryAST
    ast.left; // $ExpectType Node | AST || AST | Node || LeftOnlyAST | BinaryAST | NodeTerm | NodeRangedTerm
    ast.operator; // $ExpectType Operator
    ast.right; // $ExpectType Node | AST || AST | Node || LeftOnlyAST | BinaryAST | NodeTerm | NodeRangedTerm
} else {
    ast; // $ExpectType LeftOnlyAST
    ast.left; // $ExpectType Node | AST || AST | Node || LeftOnlyAST | BinaryAST | NodeTerm | NodeRangedTerm
    ast.operator; // $ExpectError
    ast.right; // $ExpectError
}

lucene.phrase.escape(''); // $ExpectType string
lucene.phrase.escape(1); // $ExpectError

lucene.phrase.unescape(''); // $ExpectType string
lucene.phrase.unescape(1); // $ExpectError
