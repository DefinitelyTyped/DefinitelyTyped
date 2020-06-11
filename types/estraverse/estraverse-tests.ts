import * as estraverse from 'estraverse';
import * as estree from 'estree';

let ast: estree.Node = {
    "type": "Program",
    "body": [
        {
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "answer"
                    },
                    "init": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                            "type": "Literal",
                            "value": 6,
                            "raw": "6"
                        },
                        "right": {
                            "type": "Literal",
                            "value": 7,
                            "raw": "7"
                        }
                    }
                }
            ],
            "kind": "var"
        }
    ],
    "sourceType": "script"
};

estraverse.traverse(ast, {
    enter(node: estree.Node, parentNode: estree.Node | null) {
        if (node.type === 'Identifier') {
            return estraverse.VisitorOption.Skip;
        }
    },
    leave: (node: estree.Node, parentNode: estree.Node | null) => {},
    fallback: 'iteration',
    keys: {
        TestExpression: ['argument']
    }
});

estraverse.replace(ast, {
    enter: (node: estree.Node, parentNode: estree.Node | null) => {
        return node;
    },
    leave: (node: estree.Node, parentNode: estree.Node | null) => {
        return node;
    }
});

{
    const visitor: estraverse.Visitor = {
        enter(node, parent) {
            this.break(); // $ExpectType void
            this.current(); // $ExpectType Node
            this.notify(estraverse.VisitorOption.Break); // $ExpectType void
            this.parents(); // $ExpectType Node[]
            this.path(); // $ExpectType (string | number)[] | null
            this.remove(); // $ExpectType void
            this.skip(); // $ExpectType void
            this.type(); // $ExpectType string
        },
    };
}
