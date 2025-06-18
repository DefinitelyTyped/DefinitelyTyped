export default class QuantumCircuit {
    constructor(numQubits?: number);

    MCU1Circuit(ctrlQubits: any): any;

    MCXCircuit(ctrlQubits: any): any;

    addGate(gateName: string, column: number, wires: number | number[], options?: any): any;

    addMeasure(wire: any, creg: any, cbit: any): void;

    angles(): any;

    appendCircuit(circuit: any, pack: any): void;

    appendGate(gateName: any, wires: any, options: any): any;

    appendQubits(numQubits: any): void;

    applyGate(gateName: any, column: any, wires: any, options: any): void;

    applyTransform(U: any, qubits: any): void;

    chanceMap(): any;

    circuitMatrix(endianness: any): any;

    clear(): void;

    clearGates(): void;

    clearPartitions(): void;

    continue(): void;

    convertToCustomGate(gateName: any, decompose: any, addToCircuit: any): void;

    countOps(obj: any, options: any): any;

    countParameterizedGates(): any;

    createCreg(creg: any, len: any): void;

    createPartitions(): void;

    cregBase(creg: any): any;

    cregCount(): any;

    cregTotalBits(): any;

    cregsAsString(): any;

    decodeMultiControlledGateName(gateName: any): any;

    decompose(obj: any): any;

    decomposeGateAt(column: any, wire: any): any;

    defaultHybridOptions(): any;

    densityMatrix(): any;

    eigenvalues2x2(A: any): any;

    eulerAnglesZYZ(inputMatrix: any): any;

    evalMathString(str: any, vars: any): any;

    exportAQASM(
        comment: any,
        decompose: any,
        isExportPyAQASM: any,
        exportAsGateName: any,
        asJupyter: any,
        shots: any,
        hybrid: any,
        indentDepth: any,
    ): any;

    exportBraket(
        comment: any,
        decompose: any,
        exportAsGateName: any,
        versionStr: any,
        asJupyter: any,
        shots: any,
        hybrid: any,
        indentDepth: any,
    ): any;

    exportCirq(
        comment: any,
        decompose: any,
        exportAsGateName: any,
        versionStr: any,
        asJupyter: any,
        shots: any,
        exportTfq: any,
    ): any;

    exportJavaScript(comment: any, decompose: any, exportAsGateName: any, asJupyter: any): any;

    exportPyAQASM(comment: any, decompose: any, exportAsGateName: any, asJupyter: any, shots: any, hybrid: any): any;

    exportPyquil(
        comment: any,
        decompose: any,
        exportAsGateName: any,
        versionStr: any,
        lattice: any,
        asQVM: any,
        asJupyter: any,
        shots: any,
        hybrid: any,
    ): any;

    exportQASM(
        comment: any,
        decompose: any,
        exportAsGateName: any,
        circuitReplacement: any,
        compatibilityMode: any,
        insideSubmodule: any,
    ): any;

    exportQSharp(
        comment: any,
        decompose: any,
        exportAsGateName: any,
        versionStr: any,
        asJupyter: any,
        circuitName: any,
        indentDepth?: any,
    ): any;

    exportQiskit(
        comment: any,
        decompose: any,
        exportAsGateName: any,
        versionStr: any,
        providerName: any,
        backendName: any,
        asJupyter: any,
        shots: any,
        circuitReplacement: any,
        insideSubmodule: any,
        hybrid: any,
    ): any;

    exportQobj(circuitName: any, experimentName: any, numShots: any, circuitReplacement: any): any;

    exportQuEST(comment: any, decompose: any, exportAsGateName: any, definedFunc: any): any;

    exportQuil(comment: any, decompose: any, exportAsGateName: any, versionStr: any): any;

    exportQuirk(decompose: any): any;

    exportRaw(): any;

    exportSVG(embedded: any, options?: any): any;

    exportTFQ(comment: any, decompose: any, exportAsGateName: any, versionStr: any, asJupyter: any, shots: any): any;

    exportToAQASM(options: any, isExportPyAQASM: any, exportAsGateName: any, indentDepth: any): any;

    exportToBraket(options: any, exportAsGateName: any): any;

    exportToCirq(options: any, exportAsGateName: any): any;

    exportToGenerator(options: any): any;

    exportToIonq(options: any, circuitReplacement: any): any;

    exportToPyAQASM(options: any, exportAsGateName: any): any;

    exportToPyquil(options: any, exportAsGateName: any): any;

    exportToQASM(options: any, exportAsGateName: any, circuitReplacement: any, insideSubmodule: any): any;

    exportToQSharp(options: any, exportAsGateName: any): any;

    exportToQiskit(options: any, exportAsGateName: any, circuitReplacement: any, insideSubmodule: any): any;

    exportToQobj(options: any, circuitReplacement: any): any;

    exportToQuEST(options: any, exportAsGateName: any, definedFunc: any): any;

    exportToQuil(options: any, exportAsGateName: any): any;

    exportToSVG(options: any): any;

    exportToTFQ(options: any, exportAsGateName: any): any;

    findGlobalParams(): any;

    flipHorizontally(): void;

    flipVertically(): void;

    formatComplex(complex: any, options: any): any;

    getBipartiteState(q1: any, q2: any): any;

    getControllableGatesAtColumn(column: any): any;

    getCouplingMap(options: any): any;

    getCreg(creg: any): any;

    getCregBit(creg: any, cbit: any): any;

    getCregValue(creg: any): any;

    getCregs(): any;

    getGateAt(column: any, wire: any): any;

    getGateBefore(column: any, wire: any): any;

    getGateById(gateId: any): any;

    getGateDef(name: any): any;

    getGatePosById(gateId: any): any;

    getGatesAtColumn(column: any): any;

    getGlobalParams(): any;

    getOrRegisterMultiControlledEquivalent(gateName: any, inverseControl: any): any;

    getRawGate(gate: any, gateOptions: any, globalOptions: any): any;

    gotClassicalControl(): any;

    gotGlobalParams(): any;

    gotMeasurement(): any;

    grayCodeChain(numCtrlQubits: any, gateName: any, gateOptions: any): any;

    importIonq(data: any, errorCallback: any): void;

    importQASM(input: any, errorCallback: any, compatibilityMode: any): void;

    importQobj(qobj: any, errorCallback: any): void;

    importQuil(quil: any, errorCallback: any, options: any, qubitNames: any, renamedGates: any, lineOffset: any): void;

    importRaw(data: any, errorCallback: any): void;

    init(numQubits: any, options: any): void;

    initState(): void;

    insertColumn(colIndex: any): void;

    insertGate(gateName: any, column: any, wires: any, options: any): any;

    insertSpace(column: any, wires: any): any;

    isControllableGate(gateName: any): any;

    isEmptyCell(col: any, wire: any): any;

    isEmptyPlace(col: any, wires: any, usingCregs: any): any;

    isHermitianMatrix(H: any, precision: any): any;

    isIdentityMatrix(m: any, precision: any): any;

    isMultiControlledGate(gateName: any): any;

    isUnitaryMatrix(U: any, precision: any): any;

    lastNonEmptyPlace(wires: any, usingCregs: any): any;

    load(obj: any): void;

    makeAllParamsGlobal(): void;

    matrixAbs(U: any): any;

    matrixArg(U: any): any;

    matrixDiff(matrix1: any, matrix2: any): any;

    matrixHasComplexElement(M: any): any;

    matrixIm(U: any): any;

    matrixRe(U: any): any;

    matrixZeroImagToReal(M: any): any;

    measure(wire: number, creg: string, cbit: number, force?: boolean): any;

    measureAll(force?: any): any;

    measureAllMultishot(shots: any): any;

    minCregSize(creg: any): any;

    multiControlledGateName(namePrefix: any, ctrlQubits: any): any;

    multiplySquareMatrices(m1: any, m2: any): any;

    numAmplitudes(onlyPossible: any): any;

    numCols(): any;

    numGates(decompose: any): any;

    parseMathString(str: any): any;

    parseMatrix(M: any, vars: any): any;

    partialTrace(qubit: any): any;

    partitionBounds(partitionIndex: any): any;

    partitionCircuit(partitionIndex: any): any;

    print(onlyPossible?: boolean): void;

    printPartitions(): void;

    probabilities(): any;

    probability(wire: any): any;

    randomCircuit(numQubits: any, numGates: any, options: any): void;

    randomString(len: any): any;

    randomUnitary(numQubits: any): any;

    registerGate(name: any, obj: any): void;

    registerMCU1Gate(ctrlQubits: any): any;

    registerMCXGate(ctrlQubits: any): any;

    registerMultiControlledGate(rootName: any, ctrlQubits: any): any;

    removeCreg(creg: any): void;

    removeGate(gateId: any): void;

    removeGateAt(column: any, wire: any): void;

    removeLeadingColumns(): void;

    removeMeasurementAndClassicalControl(): void;

    removeQubit(wire: any): void;

    removeTrailingColumns(): void;

    removeTrailingRows(): void;

    removeUnusedMultiControlledGates(): void;

    renameCreg(oldName: any, newName: any): void;

    resetQubit(wire: any, value: any): void;

    resetState(): void;

    resizeCreg(creg: any, size: any): void;

    run(initialValues?: any, options?: any): void;

    save(decompose: any, lightweight: any): any;

    setCombinedState(combineList: any): void;

    setCregBit(creg: any, cbit: any, value: any): void;

    splitIntoBlocks(blockSize: any, options: any): void;

    stateAsArray(onlyPossible: any, skipItems: any, blockSize: any, reverseBits: any): any;

    stateAsSimpleArray(reverseBits: any): any;

    stateAsString(onlyPossible: any): any;

    stringifyMatrix(M: any, options: any): any;

    transformMatrix(totalQubits: any, U: any, targetQubits: any, endianness: any): any;

    updateGlobalParams(): any;

    usedGates(options: any): any;

    validCustomGateName(baseName: any): any;
}
