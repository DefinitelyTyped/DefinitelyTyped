import FlowParser from "@node-red/flow-parser";

function flowParserTests() {
    const flow = FlowParser.parseFlow([]);
    flow.walk(obj => {
        switch (obj.TYPE) {
            case FlowParser.types.Flow:
                obj.info;
                obj.configs;
                obj.subflows;
                obj.groups;
                break;
            case FlowParser.types.Subflow:
                obj.instances;
                obj.in;
                obj.out;
                break;
            case FlowParser.types.Node:
                // $ExpectType number
                obj.x;
                // $ExpectType number
                obj.y;
                // $ExpectType string | undefined
                obj.groupId;
                break;
            case FlowParser.types.ConfigNode:
                obj.users;
                break;
            case FlowParser.types.Group:
                obj.style;
                break;
        }
    });
    flow.export();
}
