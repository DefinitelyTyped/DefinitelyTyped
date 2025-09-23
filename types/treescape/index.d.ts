export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null);
}
/**
 * Creates a binary tree from a level-order array (use `null` for empty nodes).
 * @param arr Level-order array representing the tree.
 * @returns The root TreeNode or null if the array is empty.
 */
export function convertToTree(arr: (number | null)[]): TreeNode | null;

/**
 * Prints the tree in ASCII format to the console.
 * @param treeNode The root TreeNode to print.
 */
export function printTree(treeNode: TreeNode | null): void;
