import type { LibCrypto } from "./libcrypto";
/**
 * @function
 * Returns the Merkle root of a tree.
 *
 * @param treeHashes: The tree, hashed.
 * @returns Promise<Uint8Array>
 */
export declare const getMerkleRoot: (treeHashes: Uint8Array, module?: LibCrypto) => Promise<Uint8Array>;
/**
 * @function
 * getMerkleProof
 *
 * @description
 * Returns the Merkle proof of an element of a tree.
 * Can be used as a receipt of a transaction etc.
 *
 * @param {Uint8Array[]} treeHashes: The tree.
 * @param {Uint8Array} elementHash: The element.
 *
 * @returns {Promise<Uint8Array>}: The Merkle proof.
 */
export declare const getMerkleProof: (treeHashes: Uint8Array, elementHash: Uint8Array, module?: LibCrypto, proofFixedLen?: number) => Promise<Uint8Array>;
/**
 * @function
 * Calculates the Merkle root from the element hash and its Merkle proof.
 *
 * @param hash: The hash of the base element in question.
 * @param proof: The first element is the first leave that was added for the calculation etc. The last
 * byte is either 0 or 1, indicating whether it is to the left or to the right in the tree.
 *
 * @returns The Merkle root
 */
export declare const getMerkleRootFromProof: (item: Uint8Array, proof: Uint8Array) => Promise<Uint8Array>;
/**
 * Verifies that the hash was indeed included in the calculation of the Merkle root.
 * @param hash: The hash of the base element in question.
 * @param root: The Merkle root.
 * @param proof: The first element is the first leave that was added for the calculation etc. The last
 * byte is either 0 or 1, indicating whether it is to the left or to the right in the tree.
 */
export declare const verifyMerkleProof: (item: Uint8Array, root: Uint8Array, proof: Uint8Array, module?: LibCrypto) => Promise<boolean>;
//# sourceMappingURL=merkle.d.ts.map