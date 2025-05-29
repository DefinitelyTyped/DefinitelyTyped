import { visit, Visitor } from "esrecurse";

// Mock AST node for testing
const mockAst = {
    type: "Program",
    body: [
        { type: "Literal", value: 42 },
        {
            type: "TestExpression",
            argument: { type: "Literal", value: 20 },
            extended: true,
        },
    ],
};

{
    // $ExpectType Visitor
    let visitor = new Visitor();
    // $ExpectType void
    visitor.visit(mockAst);

    // $ExpectType Visitor
    visitor = new Visitor(null, {
        fallback: "iteration",
        childVisitorKeys: { TestExpression: ["argument"] },
    });
    // $ExpectType void
    visitor.visit(mockAst);

    // $ExpectType Visitor
    visitor = new Visitor();
    visitor["Literal"] = (node: any) => {
        node.value;
    };
    // $ExpectType void
    visitor.visit(mockAst);
}

{
    class DerivedVisitor extends Visitor {
        constructor() {
            super(null);
        }

        Literal(node: any) {
            node.value;
        }
    }
    // $ExpectType DerivedVisitor
    const derivedVisitor = new DerivedVisitor();
    // $ExpectType void
    derivedVisitor.visit(mockAst);
}

{
    const objectVisitor = {
        Literal: (node: any) => {
            // $ExpectType any
            node.value;
        },
    };

    // $ExpectType void
    visit(mockAst, objectVisitor);

    // $ExpectType void
    visit(mockAst, objectVisitor, {
        fallback: (node: any) => Object.keys(node).filter((key) => key !== "parent"),
        childVisitorKeys: { TestExpression: ["argument"] },
    });

    // $ExpectType void
    visit(mockAst, new Visitor(), { fallback: "iteration" });
}
