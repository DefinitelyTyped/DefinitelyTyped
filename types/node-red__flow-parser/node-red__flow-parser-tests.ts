import FlowParser from "@node-red/flow-parser";

function flowParserTests() {
    const flow = FlowParser.parseFlow([]);
    // $ExpectType typeof Node
    FlowParser.types.Node;

    flow.walk(obj => {
        // $ExpectType object
        obj.export();

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
                // $ExpectType string | undefined
                obj.category;
                // $ExpectType string | undefined
                obj.color;
                // $ExpectType string | undefined
                obj.icon;
                // $ExpectType string[]
                obj.inputLabels;
                // $ExpectType string[]
                obj.outputLabels;
                // $ExpectType object
                obj.env;
                // $ExpectType object
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
                // $ExpectType number | undefined
                obj.h;
                // $ExpectType string | undefined
                obj.icon;
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
                // $ExpectType string | undefined
                obj.groupId;
                obj.style;
                break;
        }
    });
    // $ExpectType object[]
    flow.export();
}
