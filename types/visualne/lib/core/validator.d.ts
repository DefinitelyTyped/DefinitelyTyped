import { Data } from "./data";
export declare class Validator {
    static isValidData(data: Data): boolean;
    static isValidId(id: string): boolean;
    static validate(id: string, data: Data): {
        success: boolean;
        msg: string;
    };
}
