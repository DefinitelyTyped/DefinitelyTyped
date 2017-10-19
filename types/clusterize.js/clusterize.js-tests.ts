import Clusterize = require('clusterize.js');

const clusterize = new Clusterize({ contentId: '', scrollId: '' });

clusterize.append(['<li></li>']);

clusterize.prepend(['<li></li>']);

clusterize.getRowsAmount();

clusterize.update(['<li></li>']);

clusterize.getScrollProgress();

clusterize.refresh();

clusterize.clear();

clusterize.destroy();
