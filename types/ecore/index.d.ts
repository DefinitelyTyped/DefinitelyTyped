export namespace Ecore {
    let create: (eClass: EClass) => EObject;

    let EClass: EClass;
    let Edit: Edit;
    let EObject: EObject;
    let EList: EList;
    let EString: EString;
    let EInt: EInt;
    let EBoolean: EBoolean;
    let EDouble: EDouble;
    let EDate: EDate;
    let EIntegerObject: EIntegerObject;
    let EFloatObject: EFloatObject;
    let ELongObject: ELongObject;
    let EMap: EMap;
    let EDiagnosticChain: EDiagnosticChain;
    let JSObject: JSObject;
    let EModelElement: EModelElement;
    let EAnnotation: EAnnotation;
    let ENamedElement: ENamedElement;
    let EClassifier: EClassifier;
    let ETypedElement: ETypedElement;
    let EDataType: EDataType;
    let EStructuralFeature: EStructuralFeature;
    let EAttribute: EAttribute;
    let EReference: EReference;
    let EOperation: EOperation;
    let EParameter: EParameter;
    let EEnum: EEnum;
    let EEnumLiteral: EEnumLiteral;
    let EGenericType: EGenericType;
    let ETypeParameter: ETypeParameter;
    let Resource: Resource;
    let EPackageRegistry: EPackageRegistry;
    let EPackage: EPackage;

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
        eContent: () => Array<EObject>;
        eURI: () => string;
        fragment: () => string;
        eClass: EClass;
        eContents: () => Array<EObject>;
        eContainer: EObject;
        _id: string;
        getEStructuralFeature: (feature: string | EObject) => any;
    }
    interface EList extends EObject {
        add: (eObject: EObject) => EList;
        addAll: (arguments: Array<EObject> | EObject) => EList;
        remove: (eObject: EObject) => EList;
        size: () => number;
        at: (position: number) => EObject;
        array: () => Array<EObject>;
        first: () => EObject;
        find: (iterator: (value: any, key: any, list: EList) => boolean, context?: any) => Array<EObject>;
        last: () => EObject;
        rest: (position: number) => Array<EObject>;
        each: (iterator: (value: any, key: any, list: EList) => void, context?: any) => void;
        filter: (iterator: (value: any, key: any, list: EList) => boolean, context?: any) => Array<EObject>;
        map: (iterator: (value: any, key: any, list: EList) => any, context?: any) => Array<any>;
        reject: (iterator: (value: any, key: any, list: EList) => boolean, context?: any) => Array<EObject>;
        contains: (eObject: EObject) => boolean;
        indexOf: (eObject: EObject) => number;
    }
    interface EString extends EObject {
    }
    interface EInt extends EObject {
    }
    interface EBoolean extends EObject {
    }
    interface EDouble extends EObject {
    }
    interface EDate extends EObject {
    }
    interface EIntegerObject extends EObject {
    }
    interface EFloatObject extends EObject {
    }
    interface ELongObject extends EObject {
    }
    interface EMap extends EObject {
    }
    interface EDiagnosticChain extends EObject {
    }
    interface JSObject extends EObject {
    }
    interface EModelElement extends EObject {
    }
    interface EAnnotation extends EModelElement {
    }
    interface ENamedElement extends EModelElement {
    }
    interface EPackage extends ENamedElement {

    }
    interface EClassifier extends ENamedElement {
    }
    interface EClass extends EClassifier {

    }
    interface EDataType extends EClassifier {
    }
    interface ETypedElement extends ENamedElement {
    }
    interface EStructuralFeature extends ETypedElement {
    }
    interface EAttribute extends EStructuralFeature {
    }
    interface EReference extends EStructuralFeature {
    }
    interface EOperation extends ETypedElement {
    }
    interface EParameter extends ETypedElement {
    }
    interface EEnum extends EDataType {
    }
    interface EEnumLiteral extends ENamedElement {
    }
    interface EGenericType extends EObject {
    }
    interface ETypeParameter extends ENamedElement {
    }
    interface Resource extends EObject {
        add: (value: EObject) => void;
        addAll: (values: EObject[]) => EObject;
        clear: () => EList;
        each: (iterator: (value: any, key: any, list: EList) => void, context?: any) => void;
        save: (callback: Function, options: object) => void;
        parse: (data: EObject, loader: Function) => any;
        getEObject: (fragment: String) => null | EObject;
        remove: () =>void;
        rev: string;
        load: (res: any) => void;
        to: () => any;
    }
    interface EPackage extends EObject {
        getEPackage: (nsURI: string)=> EPackage;
        register: (ePackage: EPackage)=> void;
        ePackages: ()=>EPackage[];
        elements: (type:EObject)=>EObject[];
        Registry: Ecore.EPackageRegistry;
    }
    interface EPackageRegistry extends EObject {
        register: (ePackage: EPackage) => void;
        ePackages: () => EPackage[];
    }
    interface ResourceSet extends EObject {
        create: (uri: object) => Resource;
        getEObject: (uri: string) => EObject;
        //uriConverter:; //needs additional research
        parse:(data:EObject) => void; //returns nothing ?!
        elements: (type?: string | EClass) => EObject[];
        toJSON: () => object;
    }
    namespace ResourceSet {
        function create(): Ecore.ResourceSet;
    }
}

export default Ecore