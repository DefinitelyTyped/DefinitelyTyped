import getNodeDimensions = require('get-node-dimensions');

const div = document.getElementById('div-to-measure');

if (div !== null) {
  const dimensions = getNodeDimensions(div);
}
