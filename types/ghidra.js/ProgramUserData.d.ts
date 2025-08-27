import { IntPropertyMap } from "./IntPropertyMap";
import type { JavaClass } from "./JavaClass";
import { LongPropertyMap } from "./LongPropertyMap";
import { ObjectPropertyMap } from "./ObjectPropertyMap";
import { Options } from "./Options";
import { PropertyMap } from "./PropertyMap";
import { Saveable } from "./Saveable";
import { StringPropertyMap } from "./StringPropertyMap";
import { VoidPropertyMap } from "./VoidPropertyMap";

export interface ProgramUserData extends JavaClass {
    startTransaction(): number;
    endTransaction(transactionID: number): void;
    getBooleanProperty(owner: string, propertyName: string, create: boolean): VoidPropertyMap;
    getIntProperty(owner: string, propertyName: string, create: boolean): IntPropertyMap;
    getLongProperty(owner: string, propertyName: string, create: boolean): LongPropertyMap;
    getObjectProperty(
        owner: string,
        propertyName: string,
        saveableObjectClass: Saveable,
        create: boolean,
    ): ObjectPropertyMap;
    getOptions(propertyListName: string): Options;
    getOptionsNames(): string[];
    getProperties(owner: string): PropertyMap[];
    getPropertyOwners(): string[];
    getStringProperty(owner: string, propertyName: string, create: boolean): StringPropertyMap;
}
