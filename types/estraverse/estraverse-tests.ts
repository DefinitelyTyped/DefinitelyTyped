import estraverse from 'estraverse';
import estree from 'estree';

declare const NODE: estree.Node;
declare const NODE_VISITOR: estraverse.Visitor;

declare const FLAG: estraverse.VisitorOption;

// Test cases for `Visitor`
{
    const visitor: estraverse.Visitor = {
        enter(node, parent) {
            // Test cases for `this`
            {
                // $ExpectType Controller
                this;
                this.break(); // $ExpectType void
                this.current(); // $ExpectType Node
                this.notify(FLAG); // $ExpectType void
                this.parents(); // $ExpectType Node[]
                this.path(); // $ExpectType (string | number)[] | null
                this.remove(); // $ExpectType void
                this.skip(); // $ExpectType void
                this.type(); // $ExpectType string
            }
        },
        leave(node, parent) {
            // Test cases for `this
            {
                // $ExpectType Controller
                this;
                this.break(); // $ExpectType void
                this.current(); // $ExpectType Node
                this.notify(FLAG); // $ExpectType void
                this.parents(); // $ExpectType Node[]
                this.path(); // $ExpectType (string | number)[] | null
                this.remove(); // $ExpectType void
                this.skip(); // $ExpectType void
                this.type(); // $ExpectType string
            }
        },
        fallback(node) {
           // Test cases for `this
            {
                // $ExpectType Controller
                this;
                this.break(); // $ExpectType void
                this.current(); // $ExpectType Node
                this.notify(FLAG); // $ExpectType void
                this.parents(); // $ExpectType Node[]
                this.path(); // $ExpectType (string | number)[] | null
                this.remove(); // $ExpectType void
                this.skip(); // $ExpectType void
                this.type(); // $ExpectType string
            }

            return [];
        }
    };
}

// Test cases for `traverse`
{
    estraverse.traverse(NODE, NODE_VISITOR); // $ExpectType void
}

// Test cases for `replace`
{
    estraverse.replace(NODE, NODE_VISITOR); // $ExpectType Node
}
