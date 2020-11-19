// tslint:disable:space-before-function-paren

import * as nodered from 'node-red';

interface MyFantasticNode extends nodered.Node {
    myStrProp: string;
    myNmbProp: number;
    someResource: any;
}

interface MyFantasticProps extends nodered.NodeProperties {
    config: nodered.NodeId;
}

export = (RED: nodered.Red) => {
    RED.nodes.registerType('my-fantastic-node', function (this: MyFantasticNode, props: MyFantasticProps) {
        RED.nodes.createNode(this, props);
        const config = RED.nodes.getNode(props.config);
        RED.nodes.eachNode(node => {
            RED.nodes.getNode(node.id);
        });
        this.log('Something fantastic happened.');
        this.warn('Something exceptional happened.');
        this.error('Something disastrous happened when I tried to process this.', { payload: 'Cookies' });
        this.debug('A behind the scenes look.');
        this.trace('A look behind the scenes, under the floor.');
        this.status({ fill: 'red', shape: 'dot', text: 'status' });
        this.status({});
        this.send({ payload: 'Milk' });
        this.send([
            [{ payload: 'FirstMessageFirstNode' }, { payload: 'SecondMessageFirstNode' }],
            { payload: 'MessageSecondNode' },
        ]);
        this.on('close', () => {
            this.someResource.close();
        });
    });
};
