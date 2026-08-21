export as namespace Moddle;

export {};

/**
 * A model that can be used to create elements of a specific type.
 *
 * @example
 *
 * var Moddle = require('moddle');
 *
 * var pkg = {
 *   name: 'mypackage',
 *   prefix: 'my',
 *   types: [
 *     { name: 'Root' }
 *   ]
 * };
 *
 * var moddle = new Moddle([pkg]);
 */
export class Moddle {
    properties: Moddle.Properties;
    factory: Moddle.Factory;
    registry: Moddle.Registry;
    typeCache: Record<string, typeof Element>;

    constructor(packages: Moddle.PackageDefinition[]);

    /**
     * Returns the descriptor for an element.
     */
    getElementDescriptor(element: typeof Element): Moddle.Descriptor;

    /**
     * Returns the descriptor of an elements named property
     */
    getPropertyDescriptor(element: Moddle.Element, property: string): Moddle.PropertyDescriptor | undefined;

    /**
     * Returns true if the given descriptor or instance
     * represents the given type.
     *
     * May be applied to this, if element is omitted.
     */
    hasType(element: Moddle.Element, type?: string): boolean;

    /**
     * Create an instance of the specified type.
     *
     * @example
     *
     * var foo = moddle.create('my:Foo');
     * var bar = moddle.create('my:Bar', { id: 'BAR_1' });
     */
    create(descriptor: Moddle.Descriptor | string, attrs?: { [key: string]: any }): Moddle.Element;

    /**
     * Returns the type representing a given descriptor
     *
     * @example
     *
     * var Foo = moddle.getType('my:Foo');
     * var foo = new Foo({ 'id' : 'FOO_1' });
     */
    getType(descriptor: Moddle.Descriptor | string): typeof Element;

    /**
     * Creates an any-element type to be used within model instances.
     *
     * This can be used to create custom elements that lie outside the meta-model.
     * The created element contains all the meta-data required to serialize it
     * as part of meta-model elements.
     *
     * @example
     *
     * var foo = moddle.createAny('vendor:Foo', 'http://vendor', {
     *   value: 'bar'
     * });
     *
     * var container = moddle.create('my:Container', 'http://my', {
     *   any: [ foo ]
     * });
     */
    createAny(name: string, nsUri: string, properties: { [key: string]: any }): Moddle.AnyElement;

    /**
     * Returns a registered package by uri or prefix
     */
    getPackage(uriOrPrefix: string): Moddle.PackageDefinition;

    /**
     * Returns a snapshot of all known packages
     */
    getPackages(): Moddle.PackageDefinition[];

    /**
     * Returns a mapped type's descriptor
     */
    getTypeDescriptor(type: string): Moddle.TypeDefinition;
}

/**
 * Moddle base element.
 */
export class ModdleBase {
    get: (name: string) => any;
    set: (name: string, value: any) => any;
}

export class AnyElement extends ModdleBase {
    $descriptor: GenericDescriptor;
    $instanceOf: (element: Element | string, type?: string) => boolean;
    $type: string;
}

export class Element extends ModdleBase {
    static $descriptor: Descriptor;
    static $model: Moddle;

    $attrs: Record<string, any>;
    $type: string;
    $instanceOf: (element: Element | string, type?: string) => boolean;
    $parent: Element;
    hasType?: (element: Element, type?: string) => boolean;
    $descriptor: Descriptor;

    idNumeric?: number;

    [field: string]: any;

    constructor(fields?: { [field: string]: any });
}

/**
 * The root of a descriptor file is a package definition.
 */
export interface PackageDefinition {
    name: string;
    uri: string;
    /**
     * The `prefix` uniquely identifies elements in a package if more multiple packages are in place.
     */
    prefix: string;
    /**
     * The `types` collection contains all known types.
     */
    types: TypeDefinition[];
    /**
     * The `enumerations` property is reserved for future use.
     */
    enumerations?: unknown;
    /**
     * The `associations` property is reserved for future use.
     */
    associations?: unknown;
}

/**
 * A type is a moddle element with a (package-) unique name and a list of properties.
 */
export interface TypeDefinition {
    meta?: { [key: string]: any };
    name: string;
    properties?: PropertyDefinition[];
    traits?: string[];
    /**
     * Some meta-models require it to plug-in new properties that to certain existing model elements.
     * This can be acomplished using the extends field.
     */
    extends?: string[];
    /**
     * Types can inherit from one or more super types by specifying the `superClass` property.
     */
    superClass?: string[];
}

export interface PropertyDefinition {
    isBody?: boolean;
    isId?: boolean;
    /**
     * The default value to set if non is defined
     */
    default?: string | number | symbol | boolean;
    /**
     * Collection (i.e. list like) property.
     */
    isMany?: boolean;
    /**
     * Property name.
     */
    name: string;
    /**
     * Redefines the property inherited from a super type,
     * overriding name, type and qualifiers
     */
    redefines?: string;
    /**
     * The type attribute may reference simple types such as String, Boolean,
     * Integer or Real or any custom defined type.
     */
    type: BuiltInTypes | string;
    /**
     * Reference to another object via its id property
     */
    isReference?: boolean;
}

export interface PropertyDescriptor extends PropertyDefinition {
    inherited?: boolean;
    ns: Ns;
}

export interface Ns {
    localName: string;
    name: string;
    prefix?: string;
    uri?: string;
}

/**
 * A utility that gets and sets properties of model elements.
 */
export class Properties {
    model: Moddle;

    constructor(moddle: Moddle);

    /**
     * Sets a named property on the target element.
     * If the value is undefined, the property gets deleted.
     */
    set(target: Element, name: string, value?: any): void;

    /**
     * Returns the named property of the given element.
     */
    get(target: Element, name: string): any;

    /**
     * Define a property on the target element.
     */
    define(target: Element, name: string, options: { [key: string]: any }): void;

    /**
     * Define the descriptor for an element.
     */
    defineDescriptor(target: Element, descriptor: Descriptor): void;

    /**
     * Define the model for an element.
     */
    defineModel(target: Element, model: Moddle): void;
}

/**
 * A model element factory.
 */
export class Factory {
    model: Moddle;
    properties: Properties;

    constructor(model: Moddle, properties: Properties);

    createType(descriptor: Descriptor): typeof Element;
}

/**
 * A registry of Moddle packages.
 */
export class Registry {
    packageMap: Record<string, PackageDefinition>;
    typeMap: Record<string, TypeDefinition>;
    packages: PackageDefinition[];
    properties: Properties;

    constructor(packages: PackageDefinition[], properties: Properties);

    registerPackage(pkg: PackageDefinition): void;

    /**
     * Register a type from a specific package with us
     */
    registerType(type: TypeDefinition, pkg: PackageDefinition): void;

    definePackage(target: TypeDefinition | Descriptor, pkg: PackageDefinition): void;

    getPackage(uriOrPrefix: string): PackageDefinition;

    getPackages(): PackageDefinition[];

    /**
     * Traverse the type hierarchy from bottom to top,
     * calling iterator with (type, inherited) for all elements in
     * the inheritance chain.
     */
    mapTypes(
        nsName: Ns,
        iterator: (type: TypeDefinition, inherited: boolean) => void,
        trait?: boolean,
    ): void;

    /**
     * Returns the effective descriptor for a type.
     */
    getEffectiveDescriptor(name: string): Descriptor;
}

export interface GenericDescriptor {
    name: string;
    isGeneric: true;
    ns: {
        localName: string;
        prefix: string;
        uri: string;
    };
}

export interface Descriptor extends Omit<GenericDescriptor, "isGeneric" | "ns"> {
    allTypes: TypeDefinition[];
    allTypesByName: Record<string, TypeDefinition>;
    bodyProperty?: PropertyDefinition;
    idProperty?: PropertyDefinition;
    ns: Ns;
    properties: PropertyDescriptor[];
    propertiesByName: Record<string, PropertyDescriptor>;
}

/**
 * Parses a namespaced attribute name of the form (ns:)localName to an object,
 * given a default prefix to assume in case no explicit namespace is given.
 */
export function parseNameNs(name: string, defaultPrefix?: string): Ns;

/**
 * Built-in moddle types
 */
export type BuiltInTypes =
    | "String"
    | "Boolean"
    | "Integer"
    | "Real"
    | "Element";

interface ModdleTypesMap {
    "String": string;
    "Boolean": boolean;
    "Integer": number;
    "Real": number;
}

/**
 * Convert a type to its real representation
 */
export function coerceType<
    T extends BuiltInTypes | string,
    V,
>(type: T, value: V): ModdleTypesMap extends Record<T, infer E> ? E : V;

/**
 * Return whether the given type is built-in
 */
export function isBuiltInType(type?: string): boolean;

/**
 * Return whether the given type is simple
 */
export function isSimpleType(type: string): boolean;
