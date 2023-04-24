import { NodeInitializer, NodeDef } from 'node-red';
import * as helper from 'node-red-node-test-helper';

const anotherHelper = new helper.NodeTestHelper();

function helperTests(testHelper: typeof anotherHelper) {
    testHelper.startServer(() => {});
    testHelper.stopServer(() => {});

    interface SomeNodeDef extends NodeDef {
        key: string;
    }

    type FlowsItem = helper.TestFlowsItem<SomeNodeDef>;

    function withFlowsItem(item: FlowsItem) {
        // $ExpectType string
        item.id;
        // $ExpectType string
        item.type;
        // $ExpectType string | undefined
        item.key;
        // @ts-expect-error
        item.invalidKey;
    }

    type Flows = FlowsItem[];
    const flows: Flows = [{ id: 'n1', type: 'some-node', name: 'some-node' }];

    function withNodeInitializer(nodeInitializer: NodeInitializer) {
        // $ExpectType Promise<void>
        testHelper.load(nodeInitializer, flows, () => {});
    }
    // $ExpectType Promise<void>
    testHelper.unload();

    // $ExpectType Node<{}>
    const n = testHelper.getNode('some-node');

    // $ExpectType Promise<void>
    testHelper.clearFlows();
}

helperTests(helper);
helperTests(anotherHelper);
