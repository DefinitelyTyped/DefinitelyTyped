export interface ABIDefinition {
    constant?: boolean;
    payable?: boolean;
    stateMutability?: "pure" | "view" | "nonpayable" | "payable";
    anonymous?: boolean;
    inputs?: Array<{ name: string; type: ABIDataTypes; indexed?: boolean }>;
    name?: string;
    outputs?: Array<{ name: string; type: ABIDataTypes }>;
    type: "function" | "constructor" | "event" | "fallback";
}

type ABIDataTypes = "uint256" | "boolean" | "string" | "bytes" | string; // TODO complete list

export default interface ABI {
    decodeLog(inputs: object, hexString: string, topics: string[]): object;
    encodeParameter(type: string, parameter: any): string;
    encodeParameters(types: string[], paramaters: any[]): string;
    encodeEventSignature(name: string | object): string;
    encodeFunctionCall(jsonInterface: object, parameters: any[]): string;
    encodeFunctionSignature(name: string | object): string;
    decodeParameter(type: string, hex: string): any;
    decodeParameters(
        types: string[],
        hex: string
    ): EthAbiDecodeParametersResultArray;
    decodeParameters(
        types: EthAbiDecodeParametersType[],
        hex: string
    ): EthAbiDecodeParametersResultObject;
}

interface EthAbiDecodeParametersType {
    name: string;
    type: string;
}
interface EthAbiDecodeParametersResultArray {
    [index: number]: any;
}
type EthAbiDecodeParametersResultObject = EthAbiDecodeParametersResultArray & {
    [key: string]: any;
};
