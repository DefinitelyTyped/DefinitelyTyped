import * as solc from "solc";
import { ContractAbi } from "ethereum-protocol";
import * as linker from "solc/linker";
import * as solcAbi from "solc/abi";

const bytecode = "0x";
linker.linkBytecode(bytecode, { MyLibrary: "0x123456..." });
linker.findLinkReferences(bytecode);

const abi: ContractAbi = [];
solcAbi.update("0.3.6", abi);

const solcBin = "";

solc.loadRemoteVersion(
    "1.0.0",
    (_1: Error | null, _2?: solc.SolcInstance) => {}
);

const findImports = (_: string) => ({ contents: "contract A" });

const solcInstance = solc.setupMethods(solcBin);
const sources = {
    sources: {
        "fileA.sol": "contract A",
        "fileB.sol": "contract B"
    }
};
const optimizerEnabled = 1;
solcInstance.compile(sources, optimizerEnabled, findImports);
