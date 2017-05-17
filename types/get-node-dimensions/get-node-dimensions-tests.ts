import * as NodeDimensions from 'get-node-dimensions';

const div = document.getElementById('div-to-measure');

if (div !== null) {
  const dimensions: NodeDimensions.NodeDimensions = NodeDimensions.getNodeDimensions(div);
}
