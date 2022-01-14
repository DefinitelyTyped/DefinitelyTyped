
import Yoga = require('typeflex');
const Node = Yoga.Node;
const root = Node.create();
root.setWidth(500);
root.calculateLayout(500, 300, Yoga.DIRECTION_LTR);
const layout = root.getComputedLayout()
