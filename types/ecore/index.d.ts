// Type definitions for ecore 0.12
// Project: https://github.com/emfjson/ecore.js
// Definitions by: Mike Tugushev <https://github.com/michael-whi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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

interface Edit {
    childTypes: (object: EObject, createDescriptor: any) => EObject[];
    siblingTypes: (object: EObject, createDescriptor: any) => EObject[];
    childDescriptors: (object: EObject) => EObject[];
    siblingDescriptors: (object: EObject) => EObject[];
    choiceOfValues: (owner: EObject, feature: EObject) => EObject[];
}
interface EObject {
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
    eContent: () => EObject[];
    eURI: () => string;
    fragment: () => string;
    eClass: EClass;
    eContents: () => EObject[];
    eContainer: EObject;
    _id: string;
    getEStructuralFeature: (feature: string | EObject) => any;
}
interface EList extends EObject {
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
type EString = EObject;
type EInt = EObject;
type EBoolean = EObject;
type EDouble = EObject;
type EDate = EObject;
type EIntegerObject = EObject;
type EFloatObject = EObject;
type ELongObject = EObject;
type EMap = EObject;
type EDiagnosticChain = EObject;
type JSObject = EObject;
type EModelElement = EObject;
type EAnnotation = EModelElement;
type ENamedElement = EModelElement;
type EClassifier = ENamedElement;
type EClass = EClassifier;
type EDataType = EClassifier;
type ETypedElement = ENamedElement;
type EStructuralFeature = ETypedElement;
type EAttribute = EStructuralFeature;
type EReference = EStructuralFeature;
type EOperation = ETypedElement;
type EParameter = ETypedElement;
type EEnum = EDataType;
type EEnumLiteral = ENamedElement;
type EGenericType = EObject;
type ETypeParameter = ENamedElement;
interface Resource extends EObject {
    add: (value: EObject) => void;
    addAll: (values: EObject[]) => EObject;
    clear: () => EList;
    each: (iterator: (value: any, key: any, list: EList) => void, context?: any) => void;
    save: (callback: () => void, options: any) => void;
    parse: (data: EObject, loader: () => void) => any;
    remove: () => void;
    rev: string;
    load: (res: any) => void;
    to: () => any;
}
interface EPackage extends EObject {
    getEPackage: (nsURI: string) => EPackage;
    register: (ePackage: EPackage) => void;
    ePackages: () => EPackage[];
    elements: (type: EObject) => EObject[];
    Registry: EPackageRegistry;
}
interface EPackageRegistry extends EObject {
    register: (ePackage: EPackage) => void;
    ePackages: () => EPackage[];
}
interface ResourceSet extends EObject {
    create: (uri: any) => Resource;
    getEObject: (uri: string) => EObject;
    parse: (data: EObject) => void;
    elements: (type?: string | EClass) => EObject[];
    toJSON: () => any;
}
export namespace ResourceSet {
    function create(): ResourceSet;
}