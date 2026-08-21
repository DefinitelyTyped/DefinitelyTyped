import { convertToTree, printTree } from "treescape";

const tree = convertToTree([1, 2, 3, null, 4, 5, 6]);
printTree(tree);
