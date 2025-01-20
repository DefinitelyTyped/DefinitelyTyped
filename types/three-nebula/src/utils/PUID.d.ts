export namespace PUID {
    const _id: number;
    const _uids: Map<any, string>;
    function getNewId(): string;

    function id(functionOrObject: any): string;
}

export default PUID;
