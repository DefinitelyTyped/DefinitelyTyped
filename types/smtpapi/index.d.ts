declare var SmtpApi: SmtpApi.Constructor;
export = SmtpApi;

declare namespace SmtpApi {
    interface Header {
        to: string[];
        sub: Object;
        unique_args: Object;
        category: string[];
        section: Object;
        filters: Object;
        send_at: "" | number;
        send_each_at: number[];
        asm_group_id: number;
        ip_pool: string;
    }

    interface Constructor {
        new(): Instance;
        new(header: Header): Instance;
    }

    interface Instance {
        header: Header;
        version: string;

        jsonObject(): Header;
        jsonString(): string;

        addTo(to: string): void;
        addTo(tos: string[]): void;
        addSubstitution(key: string, val: string): void;
        addSubstitution(key: string, val: string[]): void;
        addUniqueArg(key: string, val: string): void;
        addCategory(cat: string): void;
        addCategory(cat: string[]): void;
        addSection(sec: string, val: string): void;
        addFilter(filter: string, setting: string, val: number): void;
        addFilter(filter: string, setting: string, val: string): void;
        addSendEachAt(send_each_at: number): void;
        addSendEachAt(send_each_at: number[]): void;

        setTos(email: string): void;
        setTos(emails: string[]): void;
        setSubstitutions(subs: Object): void;
        setUniqueArgs(val: Object): void;
        setCategories(cats: string): void;
        setCategories(cats: string[]): void;
        setSections(sec: Object): void;
        setFilters(filters: Object): void;
        setSendAt(send_at: number): void;
        setSendEachAt(send_each_at: number[]): void;
        setASMGroupID(asm_group_id: number): void;
        setIpPool(ip_pool: string): void;
    }
}
