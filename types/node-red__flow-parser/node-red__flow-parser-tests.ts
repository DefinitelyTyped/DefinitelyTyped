import FlowParser from "@node-red/flow-parser";

function flowParserTests() {
    const flow = FlowParser.parseFlow([]);
    // $ExpectType typeof Node
    FlowParser.types.Node;

    // $ExpectType undefined
    flow.globals.id;
    // $ExpectType undefined
    flow.globals.z;
    // $ExpectType undefined
    flow.globals.type;

    flow.walk(obj => {
        switch (obj.TYPE) {
            case FlowParser.types.Flow:
                // $ExpectType NRFlow
                obj;
                obj.info;
                obj.configs;
                obj.subflows;
                obj.groups;
                break;
            case FlowParser.types.Subflow:
                // $ExpectType NRSubflow
                obj;
                obj.instances;
                obj.in;
                obj.out;
                obj.category;
                obj.color;
                obj.env;
                obj.meta;
                break;
            case FlowParser.types.Node:
                // $ExpectType NRNode
                obj;
                // $ExpectType number
                obj.x;
                // $ExpectType number
                obj.y;
                // $ExpectType string | undefined
                obj.groupId;
                // $ExpectType number | undefined
                obj.w;
                obj.getNextNodes();
                obj.getNextNodes(true);
                break;
            case FlowParser.types.ConfigNode:
                // $ExpectType NRConfigNode
                obj;
                obj.users;
                break;
            case FlowParser.types.Group:
                // $ExpectType NRGroup
                obj;
                obj.style;
                break;
        }
    });
    flow.export();

    // The package exports only parseFlow and types at runtime.
    // @ts-expect-error
    new FlowParser.NRNode({});
}
