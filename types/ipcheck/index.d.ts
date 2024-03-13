declare const ipcheck: ipcheck.IPCheckStatic;
export = ipcheck;
export as namespace ipcheck;

declare namespace ipcheck {
    interface IPCheck {
        address: number[];
        input: string;
        ipv: 4 | 6 | 0;
        mask: number;
        valid: boolean;

        match(cidr: IPCheck | string): boolean;
    }

    interface IPCheckConstructor {
        new(input: string): IPCheck;
    }

    interface IPCheckStatic extends IPCheckConstructor {
        match(ip: IPCheck | string, cidr: IPCheck | string): boolean;
    }
}
