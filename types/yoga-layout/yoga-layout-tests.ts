import yoga = require('yoga-layout');
const { Node, Config, DISPLAY_FLEX } = yoga;

const cfg = Config.create();

cfg.isExperimentalFeatureEnabled(yoga.EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS);

const root = Node.createWithConfig(cfg);
root.setWidth(500);
root.setHeight(300);
root.setJustifyContent(yoga.JUSTIFY_CENTER);

const node1 = yoga.Node.create();
node1.setWidth(100);
node1.setHeight(100);
node1.setDisplay(DISPLAY_FLEX);

const node2 = Node.create();
node2.setWidth(100);
node2.setHeight(100);

root.insertChild(node1, 0);
root.insertChild(node2, 1);

root.calculateLayout(500, 300, yoga.DIRECTION_LTR);
