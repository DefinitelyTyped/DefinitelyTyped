import { ABIDefinition } from "web3/eth/abi.d";

export const OLD_ABI_STANDARD: ABIDefinition[] = [
    {
        constant: true,
        payable: false,
        inputs: [
            {
                name: "paramAddress",
                type: "address"
            }
        ],
        name: "function1",
        outputs: [],
        type: "function"
    }, {
        constant: true,
        payable: false,
        inputs: [],
        name: "removeOwner",
        outputs: [
            {
                name: "paramAddress",
                type: "address"
            }
        ],
        type: "function"
    }, {
        constant: false,
        payable: false,
        inputs: [],
        name: "removeOwner",
        outputs: [],
        type: "function"
    }, {
        constant: false,
        payable: true,
        inputs: [],
        name: "removeOwner",
        outputs: [],
        type: "function"
    },
];

export const NEW_ABI_STANDARD: ABIDefinition[] = [
    {
        constant: true,
        payable: false,
        stateMutability: "view",
        inputs: [
            {
                name: "paramAddress",
                type: "address"
            }
        ],
        name: "function1",
        outputs: [],
        type: "function"
    }, {
        constant: true,
        payable: false,
        stateMutability: "pure",
        inputs: [],
        name: "removeOwner",
        outputs: [
            {
                name: "paramAddress",
                type: "address"
            }
        ],
        type: "function"
    }, {
        constant: false,
        payable: false,
        stateMutability: "nonpayable",
        inputs: [],
        name: "removeOwner",
        outputs: [],
        type: "function"
    }, {
        constant: false,
        payable: true,
        stateMutability: "payable",
        inputs: [],
        name: "removeOwner",
        outputs: [],
        type: "function"
    },
];
