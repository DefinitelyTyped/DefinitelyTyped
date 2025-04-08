declare const _default: {
    newKeyPairMemory: () => WebAssembly.Memory;
    keyPairFromSeedMemory: () => WebAssembly.Memory;
    keyPairFromSecretKeyMemory: () => WebAssembly.Memory;
    signMemory: (messageLen: number) => WebAssembly.Memory;
    verifyMemory: (messageLen: number) => WebAssembly.Memory;
    encryptAsymmetricMemory: (messageLen: number, additionalDataLen: number) => WebAssembly.Memory;
    decryptAsymmetricMemory: (encryptedLen: number, additionalDataLen: number) => WebAssembly.Memory;
    getMerkleRootMemory: (leavesLen: number) => WebAssembly.Memory;
    getMerkleProofMemory: (leavesLen: number) => WebAssembly.Memory;
    verifyMerkleProofMemory: (proofLen: number) => WebAssembly.Memory;
    argon2Memory: (mnemonicLen: number) => WebAssembly.Memory;
};
export default _default;
//# sourceMappingURL=memory.d.ts.map