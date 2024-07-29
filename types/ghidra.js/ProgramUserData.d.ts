import { IntPropertyMap } from './IntPropertyMap';
import { LongPropertyMap } from './LongPropertyMap';
import { Options } from './Options';
import { VoidPropertyMap } from './VoidPropertyMap';
import { StringPropertyMap } from './StringPropertyMap';
import { PropertyMap } from './PropertyMap';
import { ObjectPropertyMap } from './ObjectPropertyMap';
import { Saveable } from './Saveable';

export interface ProgramUserData {
    startTransaction(): number;
    endTransaction(transactionID: number): void;
    getBooleanProperty(owner: string, propertyName: string, create: boolean): VoidPropertyMap;
    getIntProperty(owner: string, propertyName: string, create: boolean): IntPropertyMap;
    getLongProperty(owner: string, propertyName: string, create: boolean): LongPropertyMap;
    getObjectProperty(owner: string, propertyName: string, saveableObjectClass: Saveable, create: boolean): ObjectPropertyMap;
    getOptions(propertyListName: string): Options;
    getOptionsNames(): string[];
    getProperties(owner: string): PropertyMap[];
    getPropertyOwners(): string[];
    getStringProperty(owner: string, propertyName: string, create: boolean): StringPropertyMap;
}
