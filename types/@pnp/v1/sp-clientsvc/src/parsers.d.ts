import { IObjectPath } from "./objectpath";
/**
 * Used within the request pipeline to parse ProcessQuery results
 */
export declare class ProcessQueryParser<T = any> {
    protected op: IObjectPath;
    constructor(op: IObjectPath);
    /**
     * Parses the response checking for errors
     *
     * @param r Response object
     */
    parse(r: Response): Promise<T>;
    findResult(json: any): Promise<T | null>;
    /**
     * Locates a result by ObjectPath id
     *
     * @param parsed the parsed JSON body from the response
     * @param id The ObjectPath id whose result we want
     */
    protected getParsedResultById<R = any>(parsed: any[], id: number): R;
}
