import { IList } from "typescript-dotnet-commonjs/System/Collections/IList";
import { PropertyName } from "../../PropertyName";
export declare class PropertyReader {
    private static nsDav;
    static ReadIncludeProps(parentNode: Element): IList<PropertyName>;
    static ReadProps(parentNode: Element, propTag?: string): IList<PropertyName>;
}
