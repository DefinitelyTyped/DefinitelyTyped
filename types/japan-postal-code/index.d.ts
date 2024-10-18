declare namespace JapanPostalCode {
    interface Callback {
        (address: AddressData): void;
    }

    interface AddressData {
        prefecture: string;
        city: string;
        area: string;
        street: string;
    }
}

declare function get(zip_code: string, callback: JapanPostalCode.Callback): void;

declare const JapanPostalCode: {
    get: typeof get;
};
export = JapanPostalCode;
