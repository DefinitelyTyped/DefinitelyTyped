import { Obj } from './Obj';
import { Widget } from './Widget';

export type Value = {value: string, title: string};

export type AttributeProps = {
    title?: string;
    description?: string;
    values?: Value[];
    options?: {
        toolbar: string[]
    }
}

export type EditingConfigAttributes = Record<string, AttributeProps>

export type PropertiesGroup = {
    title: string;
    component: string;
}

export type ValidationReturnType = {message: string, severity: string} | string | void;

export type AttributeValidationCallback = (current: any, options: {obj?: Obj, widget?: Widget, content: any, name: string}) => ValidationReturnType;

export type AttributeBasedValidation = [string, AttributeValidationCallback];

export type ClassBasedValidation = (target: Widget | Obj) => ValidationReturnType;

export type Validation = (AttributeBasedValidation | ClassBasedValidation);

export interface EditingConfig {
    title?: string;
    thumbnail?: string;
    description?: string;
    titleForContent?: (instance: Obj | Widget) => string | void;
    descriptionForContent?: (instance: Obj | Widget) => string;
    attributes?: EditingConfigAttributes;
    properties?: string[];
    propertiesGroups?: PropertiesGroup[];
    hideInSelectionDialogs?: boolean;
    initialContent?: Record<string, any>;
    initializeCopy?: (originalInstance: Obj) => void;
    validations?: Validation[]
    
}