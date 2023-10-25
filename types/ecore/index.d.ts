export function create(eClass: EClass): EObject;

export let EClass: EClass;
export let Edit: Edit;
export let EObject: EObject;
export let EList: EList;
export let EString: EString;
export let EInt: EInt;
export let EBoolean: EBoolean;
export let EDouble: EDouble;
export let EDate: EDate;
export let EIntegerObject: EIntegerObject;
export let EFloatObject: EFloatObject;
export let ELongObject: ELongObject;
export let EMap: EMap;
export let EDiagnosticChain: EDiagnosticChain;
export let JSObject: JSObject;
export let EModelElement: EModelElement;
export let EAnnotation: EAnnotation;
export let ENamedElement: ENamedElement;
export let EClassifier: EClassifier;
export let ETypedElement: ETypedElement;
export let EDataType: EDataType;
export let EStructuralFeature: EStructuralFeature;
export let EAttribute: EAttribute;
export let EReference: EReference;
export let EOperation: EOperation;
export let EParameter: EParameter;
export let EEnum: EEnum;
export let EEnumLiteral: EEnumLiteral;
export let EGenericType: EGenericType;
export let ETypeParameter: ETypeParameter;
export let Resource: Resource;
export let EPackageRegistry: EPackageRegistry;
export let EPackage: EPackage;

export interface Edit {
    childTypes: (object: EObject, createDescriptor: any) => EObject[];
    siblingTypes: (object: EObject, createDescriptor: any) => EObject[];
    childDescriptors: (object: EObject) => EObject[];
    siblingDescriptors: (object: EObject) => EObject[];
    choiceOfValues: (owner: EObject, feature: EObject) => EObject[];
}
export interface EObject {
    setEClass: (eClass: EClass) => void;
    create: (attributes: any) => EObject;
    has: (name: string) => boolean;
    isSet: (name: string) => boolean;
    set: (attrs: any, options: any) => EObject;
    unset: (attrs: any, options: any) => EObject;
    get: (feature: string) => any;
    getEObject: (uri: string) => EObject;
    isTypeOf: (type: string | EObject) => any;
    isKindOf: (type: string | EObject) => any;
    eResource: () => Resource;
    eURI: () => string;
    fragment: () => string;
    eClass: EClass;
    eContents: () => EObject[];
    eContainer: EObject;
    eContainingFeature: EObject;
    _id: string;
    getEStructuralFeature: (feature: string | EObject) => any;
}
export interface EList extends EObject {
    add: (eObject: EObject) => EList;
    addAll: (args: EObject[] | EObject) => EList;
    remove: (eObject: EObject) => EList;
    size: () => number;
    at: (position: number) => EObject;
    array: () => EObject[];
    first: () => EObject;
    find: (iterator: (value: any, key: any, list: EList) => boolean, context?: any) => EObject[];
    last: () => EObject;
    rest: (position: number) => EObject[];
    each: (iterator: (value: any, key: any, list: EList) => void, context?: any) => void;
    filter: (iterator: (value: any, key: any, list: EList) => boolean, context?: any) => EObject[];
    map: (iterator: (value: any, key: any, list: EList) => any, context?: any) => any[];
    reject: (iterator: (value: any, key: any, list: EList) => boolean, context?: any) => EObject[];
    contains: (eObject: EObject) => boolean;
    indexOf: (eObject: EObject) => number;
}
export type EString = EObject;
export type EInt = EObject;
export type EBoolean = EObject;
export type EDouble = EObject;
export type EDate = EObject;
export type EIntegerObject = EObject;
export type EFloatObject = EObject;
export type ELongObject = EObject;
export type EMap = EObject;
export type EDiagnosticChain = EObject;
export type JSObject = EObject;
export type EModelElement = EObject;
export type EAnnotation = EModelElement;
export type ENamedElement = EModelElement;
export type EClassifier = ENamedElement;
export type EClass = EClassifier;
export type EDataType = EClassifier;
export type ETypedElement = ENamedElement;
export type EStructuralFeature = ETypedElement;
export type EAttribute = EStructuralFeature;
export type EReference = EStructuralFeature;
export type EOperation = ETypedElement;
export type EParameter = ETypedElement;
export type EEnum = EDataType;
export type EEnumLiteral = ENamedElement;
export type EGenericType = EObject;
export type ETypeParameter = ENamedElement;
export interface Resource extends EObject {
    add: (value: EObject) => void;
    addAll: (values: EObject[]) => EObject;
    clear: () => EList;
    each: (iterator: (value: any, key: any, list: EList) => void, context?: any) => void;
    save: (callback: () => void, options: any) => void;
    parse: (data: EObject, loader?: () => void) => any;
    remove: () => void;
    rev: string;
    load: (res: any) => void;
    to: () => any;
}
export interface EPackage extends EObject {
    Registry: EPackageRegistry;
}
export interface EPackageRegistry extends EObject {
    getEPackage: (nsURI: string) => EPackage;
    register: (ePackage: EPackage) => void;
    ePackages: () => EPackage[];
    elements: (type: EObject) => EObject[];
    Registry: EPackageRegistry;
}

export interface ResourceSet extends EObject {
    create: (uri: any) => Resource;
    getEObject: (uri: string) => EObject;
    parse: (data: EObject) => void;
    elements: (type?: string | EClass) => EObject[];
    toJSON: () => any;
}
export namespace ResourceSet {
    function create(): ResourceSet;
}
