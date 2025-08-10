import { MemberLayout } from "./StructTypeNode.js";
declare class StructType {
    name: string;
    members: MemberLayout[];
    output: boolean;
    constructor(name: string, members: MemberLayout[]);
}
export default StructType;
