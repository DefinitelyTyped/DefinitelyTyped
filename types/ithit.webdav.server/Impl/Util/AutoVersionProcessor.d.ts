import { Func } from "typescript-dotnet-commonjs/System/FunctionTypes";
import { IVersionableItem } from "../../DeltaV/IVersionableItem";
export declare class AutoVersionProcessor {
    static process(verItem: IVersionableItem, doTask: Func<Promise<boolean>>, canCheckin: Func<boolean>): Promise<void>;
}
