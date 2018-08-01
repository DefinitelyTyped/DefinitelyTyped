import Clusterize = require('clusterize.js');

const options: Clusterize.Options = { contentId: '', scrollId: '' };
const clusterize = new Clusterize(options);

clusterize.append(['<li></li>']);

clusterize.prepend(['<li></li>']);

clusterize.getRowsAmount();

clusterize.update(['<li></li>']);

clusterize.getScrollProgress();

clusterize.refresh();

clusterize.clear();

clusterize.destroy();
