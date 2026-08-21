import { MemberLayout } from "./StructTypeNode.js";

declare class StructType {
    constructor(name: string, members: MemberLayout[]);
    name: string;
    members: MemberLayout[];
    output: boolean;
}

export default StructType;
