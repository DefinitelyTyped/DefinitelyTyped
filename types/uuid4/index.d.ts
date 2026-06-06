declare function uuid4(): string;

declare namespace uuid4 {
    function valid(uuid: string): boolean;
}

export = uuid4;
