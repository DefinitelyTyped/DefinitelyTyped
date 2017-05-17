import * as NodeDimensions from 'get-node-dimensions';

const div = document.getElementById('div-to-measure');

const dimensions: NodeDimensions.NodeDimensions = NodeDimensions.getNodeDimension(div);
