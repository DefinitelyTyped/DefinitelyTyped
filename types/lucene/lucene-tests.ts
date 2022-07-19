import * as lucene from 'lucene';

const ast = lucene.parse('query'); // $ExpectType AST
// @ts-expect-error
lucene.parse(1);

lucene.toString(ast); // $ExpectType string

if ('right' in ast) {
    ast; // $ExpectType BinaryAST
    ast.left; // $ExpectType Node | AST || AST | Node || LeftOnlyAST | BinaryAST | NodeTerm | NodeRangedTerm
    ast.operator; // $ExpectType Operator
    ast.right; // $ExpectType Node | AST || AST | Node || LeftOnlyAST | BinaryAST | NodeTerm | NodeRangedTerm
} else {
    ast; // $ExpectType LeftOnlyAST
    ast.left; // $ExpectType Node | AST || AST | Node || LeftOnlyAST | BinaryAST | NodeTerm | NodeRangedTerm
    // @ts-expect-error
    ast.operator;
    // @ts-expect-error
    ast.right;
}

lucene.phrase.escape(''); // $ExpectType string
// @ts-expect-error
lucene.phrase.escape(1);

lucene.phrase.unescape(''); // $ExpectType string
// @ts-expect-error
lucene.phrase.unescape(1);
