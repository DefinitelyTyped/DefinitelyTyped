/// <reference path="estraverse.d.ts" />

import * as estraverse from 'estraverse';

let ast: any = {
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
    enter: (node: any, parentNode: any) => {
        if (node.type === 'Identifier') {
            return estraverse.VisitorOption.Skip;
        }
    },
    leave: (node: any, parentNode: any) => {},
    fallback: 'iteration',
    keys: {
        TestExpression: ['argument']
    }
});

estraverse.replace(ast, {
    enter: (node: any, parentNode: any) => {
        return node;
    },
    leave: (node: any, parentNode: any) => {
        return node;
    }
});