export = Group;
declare class Group {
    readonly groupname: string;
    readonly description: string;
    readonly active: boolean;
    readonly attributes?: any;

    constructor(groupname: string, description?: string, active?: boolean, attributes?: any);
    toCrowd(): GroupObj;
    static fromCrowd(obj: {name: string, description?: string, active?: boolean, attributes: any}): Group;
}

interface GroupObj {
    readonly type: "GROUP";
    readonly name: string;
    readonly description: string;
    readonly active: boolean;
}
