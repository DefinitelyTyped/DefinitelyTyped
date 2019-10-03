// Type definitions for composer-concerto 0.71
// Project: https://github.com/hyperledger/composer-concerto#readme
// Definitions by: Giacomo Minighin <https://github.com/j4m3sb0mb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 2.2

/**
 * AssetDeclaration defines the schema (aka model or class) for
 * an Asset. It extends ClassDeclaration which manages a set of
 * fields, a super-type and the specification of an
 * identifying field.
 */
export class AssetDeclaration extends ClassDeclaration {
    /**
     * Create an AssetDeclaration
     * @throws {IllegalModelException}
     */
    constructor(modelFile: ModelFile, ast: any);
    /**
     * Returns true if this class can be pointed to by a relationship.
     */
    isRelationshipTarget(): boolean;
    /**
     * Returns the base system type for Assets from the system namespace.
     */
    getSystemType(): string;
}

/**
 * A base class for all Composer exceptions
 */
export class BaseException extends Error {
    /**
     * Create the BaseException
     */
    constructor(message: string, component?: string);
}

/**
 * Exception throws when a composer file is semantically invalid
 */
export class BaseFileException extends BaseException {
    /**
     * Create an BaseFileException
     */
    constructor(message: string, fileLocation?: string, fullMessage?: string, fileName?: string, component?: string);
    /**
     * Returns the file location associated with the exception or null
     */
    getFileLocation(): string | null;
    /**
     * Returns the error message without the location of the error
     */
    getShortMessage(): string;
    /**
     * Returns the fileName for the error
     */
    getFileName(): string | null;
}

/**
 * ClassDeclaration defines the structure (model/schema) of composite data.
 * It is composed of a set of Properties, may have an identifying field, and may
 * have a super-type.
 * A ClassDeclaration is conceptually owned by a ModelFile which
 * defines all the classes that are part of a namespace.
 */
export abstract class ClassDeclaration extends Decorated {
    /**
     * Create a ClassDeclaration from an Abstract Syntax Tree. The AST is the
     * result of parsing.
     * @throws {IllegalModelException}
     */
    constructor(modelFile: ModelFile, ast: string);
    /**
     * Resolve the super type on this class and store it as an internal property.
     */
    _resolveSuperType(): ClassDeclaration | null;
    /**
     * Returns the base system type for this type of class declaration. Override
     * this method in derived classes to specify a base system type.
     */
    getSystemType(): string | null;
    /**
     * Returns true if this class is d as abstract in the model file.
     */
    isAbstract(): boolean;
    /**
     * Returns true if this class is an enumeration.
     */
    isEnum(): boolean;
    /**
     * Returns true if this class is the definition of a concept.
     */
    isConcept(): boolean;
    /**
     * Returns true if this class is the definition of an event.
     */
    isEvent(): boolean;
    /**
     * Returns true if this class can be pointed to by a relationship.
     */
    isRelationshipTarget(): boolean;
    /**
     * Returns true if this class can be pointed to by a relationship in a
     * system model
     */
    isSystemRelationshipTarget(): boolean;
    /**
     * Returns true is this type is in the system namespace.
     */
    isSystemType(): boolean;
    /**
     * Returns true if this class is a system core type - both in the system
     * namespace, and also one of the system core types (Asset, Participant, etc).
     */
    isSystemCoreType(): boolean;
    /**
     * Returns the short name of a class. This name does not include the
     * namespace from the owning ModelFile.
     */
    getName(): string;
    /**
     * Return the namespace of this class.
     */
    getNamespace(): string;
    /**
     * Returns the fully qualified name of this class.
     * The name will include the namespace if present.
     */
    getFullyQualifiedName(): string;
    /**
     * Returns the name of the identifying field for this class. Note
     * that the identifying field may come from a super type.
     */
    getIdentifierFieldName(): string;
    /**
     * Returns the field with a given name or null if it does not exist.
     * The field must be directly owned by this class -- the super-type is
     * not introspected.
     */
    getOwnProperty(name: string): Property | null;
    /**
     * Returns the fields directly defined by this class.
     */
    getOwnProperties(): Property[];
    /**
     * Returns the FQN of the super type for this class or null if this
     * class does not have a super type.
     */
    getSuperType(): string | null;
    /**
     * Get the super type class declaration for this class.
     */
    getSuperTypeDeclaration(): ClassDeclaration | null;
    /**
     * Get the class declarations for all subclasses of this class, including this class.
     */
    getAssignableClassDeclarations(): ClassDeclaration[];
    /**
     * Get all the super-type declarations for this type.
     */
    getAllSuperTypeDeclarations(): ClassDeclaration[];
    /**
     * Returns the property with a given name or null if it does not exist.
     * Fields defined in super-types are also introspected.
     */
    getProperty(name: string): Property | null;
    /**
     * Returns the properties defined in this class and all super classes.
     */
    getProperties(): Property[];
    /**
     * Get a nested property using a dotted property path.
     * @throws {IllegalModelException} if the property path is invalid or the property does not exist
     */
    getNestedProperty(propertyPath: string): Property;
    /**
     * Returns the string representation of this class.
     */
    toString(): string;
}

/**
 * Resource is an instance that has a type. The type of the resource
 * specifies a set of properites (which themselves have types).
 *
 * Type information in Composer is used to validate the structure of
 * Resource instances and for serialization.
 *
 * Resources are used in Composer to represent Assets, Participants, Transactions and
 * other domain classes that can be serialized for long-term persistent storage.
 */
export class Concept extends Typed {
    /**
     * Create a Concept.
     *
     * Note: Only to be called by framework code. Applications should
     * retrieve instances from {@link Factory}
     */
    constructor(modelManager: ModelManager, classDeclaration: ClassDeclaration, ns: string, type: string);
    /**
     * Determine if this typed is a concept.
     */
    isConcept(): boolean;
}

/**
 * ConceptDeclaration defines the schema (aka model or class) for
 * a Concept. It extends ClassDeclaration which manages a set of
 * fields, a super-type and the specification of an
 * identifying field.
 */
export class ConceptDeclaration extends ClassDeclaration {
    /**
     * Create a ConceptDeclaration.
     * @throws {IllegalModelException}
     */
    constructor(modelFile: ModelFile, ast: any);
    /**
     * Returns true if this class is the definition of a concept.
     */
    isConcept(): boolean;
}

/**
 * EnumDeclaration defines an enumeration of static values.
 * It extends ClassDeclaration which manages a set of fields,
 * a super-type and the specification of an identifying field.
 */
export class EnumDeclaration extends ClassDeclaration {
    /**
     * Create an EnumDeclaration.
     * @throws {IllegalModelException}
     */
    constructor(modelFile: ModelFile, ast: any);
    /**
     * Returns true if this class is an enumeration.
     */
    isEnum(): boolean;
}

/**
 * Class representing a value from a set of enumerated values
 */
export class EnumValueDeclaration extends Property {
    /**
     * Create a EnumValueDeclaration.
     * @throws {IllegalModelException}
     */
    constructor(parent: ClassDeclaration, ast: any);
}

/**
 * Class representing the definition of an Event.
 * It extends ClassDeclaration which manages a set of fields,
 * a super-type and the specification of an identifying field.
 */
export class EventDeclaration extends ClassDeclaration {
    /**
     * Create an EventDeclaration.
     * @throws {IllegalModelException}
     */
    constructor(modelFile: ModelFile, ast: any);
    /**
     * Returns the base system type for Events from the system namespace.
     */
    getSystemType(): string;
    /**
     * Returns true if this class is the definition of an event.
     */
    isEvent(): boolean;
}

/**
 * Class representing the definition of a Field. A Field is owned
 * by a ClassDeclaration and has a name, type and additional metadata
 * (see below).
 */
export class Field extends Property {
    /**
     * Create an Field.
     * @throws {IllegalModelException}
     */
    constructor(parent: ClassDeclaration, ast: any);
    /**
     * Returns the validator string for this field.
     */
    getValidator(): string | null;
    /**
     * Returns the default value for the field or null.
     */
    getDefaultValue(): string | null;
    /**
     * Returns a string representation of this property.
     */
    toString(): string;
}

/**
 * Writer buffers text to be written in memory. It handles simple
 * indentation and tracks the number of lines written.
 */
export class Writer {
    /**
     * Create a Writer.
     */
    constructor();
    /**
     * Writes text to the start of the buffer.
     */
    writeBeforeLine(tabs: number, text: string): void;
    /**
     * Append text to the buffer.
     */
    writeLine(tabs: number, text: string): void;
    /**
     * Returns the number of lines that have been written to the buffer.
     */
    getLineCount(): number;
    /**
     * Append text to the buffer, prepending tabs.
     */
    writeIndented(tabs: number, text: string): void;
    /**
     * Append text to the buffer (no automatic newline). The
     * text may contain newline, and these will increment the linesWritten
     * counter.
     */
    write(msg: string): void;
    /**
     * Returns the text that has been buffered in this Writer.
     */
    getBuffer(): string;
    /**
     * Empties the underyling buffer and resets the line count.
     */
    clearBuffer(): void;
}

/**
 * FileWriter creates text files under a directory tree. It can be used
 * by code generators to create source files for example.
 * Basic usage is: openFile(fileName), writeLine(...), closeFile().
 */
export class FileWriter extends Writer {
    /**
     * Create a FileWriter.
     */
    constructor(outputDirectory: string);
    /**
     * Opens a file for writing. The file will be created in the
     * root directory of this FileWriter.
     */
    openFile(fileName: string): void;
    /**
     * Opens a file for writing, with a location relative to the
     * root directory of this FileWriter.
     */
    openRelativeFile(relativeDir: string, fileName: string): void;
    /**
     * Writes text to the current open file.
     */
    writeLine(tabs: number, text: string): void;
    /**
     * Writes text to the start of the current open file.
     */
    writeBeforeLine(tabs: number, text: string): void;
    /**
     * Closes the current open file.
     */
    closeFile(): void;
}

/**
 * Use the Factory to create instances of Resource: transactions, participants
 * and assets.
 */
export class Factory {
    /**
     * Create the factory.
     */
    constructor(modelManager: ModelManager);
    /**
     * Create a new Resource with a given namespace, type name and id.
     * @throws {TypeNotFoundException} if the type is not registered with the ModelManager
     */
    newResource(ns: string, type: string, id: string, options?: {
        disableValidation?: boolean;
        generate?: string;
        includeOptionalFields?: boolean;
        allowEmptyId?: boolean;
    }): Resource;
    /**
     * Create a new Concept with a given namespace and type name.
     * @throws {TypeNotFoundException} if the type is not registered with the ModelManager
     */
    newConcept(ns: string, type: string, options?: {
        disableValidation?: boolean;
        generate?: string;
        includeOptionalFields?: boolean;
    }): Resource;
    /**
     * Create a new Relationship with a given namespace, type and identifier.
     * A relationship is a typed pointer to an instance. I.e the relationship
     * with `namespace = 'org.example'`, `type = 'Vehicle'` and `id = 'ABC' creates`
     * a pointer that points at an instance of org.example.Vehicle with the id
     * ABC.
     * @throws {TypeNotFoundException} if the type is not registered with the ModelManager
     */
    newRelationship(ns: string, type: string, id: string): Relationship;
    /**
     * Create a new transaction object. The identifier of the transaction is
     * set to a UUID.
     */
    newTransaction(ns: string, type: string, id?: string, options?: {
        generate?: string;
        includeOptionalFields?: boolean;
        allowEmptyId?: boolean;
    }): Resource;
    /**
     * Create a new event object. The identifier of the event is
     * set to a UUID.
     */
    newEvent(ns: string, type: string, id?: string, options?: {
        generate?: string;
        includeOptionalFields?: boolean;
        allowEmptyId?: boolean;
    }): Resource;
}

/**
 * Dummy globalize replacement.
 */
export function Globalize(locale: string): any;

/**
 * Provides access to the structure of transactions, assets and participants.
 */
export class Introspector {
    /**
     * Create the Introspector.
     */
    constructor(modelManager: ModelManager);
    /**
     * Returns all the class declarations for the business network.
     */
    getClassDeclarations(): ClassDeclaration[];
    /**
     * Returns the class declaration with the given fully qualified name.
     * @throws {Error} if the class declaration does not exist
     */
    getClassDeclaration(fullyQualifiedTypeName: string): ClassDeclaration;
}

/**
 * Class representing a Model File. A Model File contains a single namespace
 * and a set of model elements: assets, transactions etc.
 */
export class ModelFile {
    /**
     * Create a ModelFile. This should only be called by framework code.
     * Use the ModelManager to manage ModelFiles.
     * @throws {IllegalModelException}
     */
    constructor(modelManager: ModelManager, definitions: string, fileName?: string, isSystemModelFile?: boolean);
    /**
     * Returns true if this ModelFile was downloaded from an external URI.
     */
    isExternal(): boolean;
    /**
     * Returns the ModelManager associated with this ModelFile.
     */
    getModelManager(): ModelManager;
    /**
     * Returns the types that have been imported into this ModelFile.
     */
    getImports(): string[];
    /**
     * Returns true if the type is defined in the model file.
     */
    isDefined(type: string): boolean;
    /**
     * Returns the type with the specified name or null.
     */
    getLocalType(type: string): ClassDeclaration | null;
    /**
     * Get the AssetDeclarations defined in this ModelFile or null.
     */
    getAssetDeclaration(name: string): AssetDeclaration | null;
    /**
     * Get the TransactionDeclaration defined in this ModelFile or null.
     */
    getTransactionDeclaration(name: string): TransactionDeclaration | null;
    /**
     * Get the EventDeclaration defined in this ModelFile or null.
     */
    getEventDeclaration(name: string): EventDeclaration | null;
    /**
     * Get the ParticipantDeclaration defined in this ModelFile or null.
     */
    getParticipantDeclaration(name: string): ParticipantDeclaration | null;
    /**
     * Get the Namespace for this model file.
     */
    getNamespace(): string;
    /**
     * Get the filename for this model file. Note that this may be null.
     */
    getName(): string | null;
    /**
     * Get the AssetDeclarations defined in this ModelFile.
     */
    getAssetDeclarations(includeSystemType?: boolean): AssetDeclaration[];
    /**
     * Get the TransactionDeclarations defined in this ModelFile.
     */
    getTransactionDeclarations(includeSystemType?: boolean): TransactionDeclaration[];
    /**
     * Get the EventDeclarations defined in this ModelFile.
     */
    getEventDeclarations(includeSystemType?: boolean): EventDeclaration[];
    /**
     * Get the ParticipantDeclarations defined in this ModelFile.
     */
    getParticipantDeclarations(includeSystemType?: boolean): ParticipantDeclaration[];
    /**
     * Get the ConceptDeclarations defined in this ModelFile.
     */
    getConceptDeclarations(includeSystemType?: boolean): ConceptDeclaration[];
    /**
     * Get the EnumDeclarations defined in this ModelFile.
     */
    getEnumDeclarations(includeSystemType?: boolean): EnumDeclaration[];
    /**
     * Get the instances of a given type in this ModelFile.
     */
    getDeclarations(type: (...params: any[]) => any, includeSystemType?: boolean): ClassDeclaration[];
    /**
     * Get all declarations in this ModelFile.
     */
    getAllDeclarations(): ClassDeclaration[];
    /**
     * Get the definitions for this model.
     */
    getDefinitions(): string;
    /**
     * Returns true if this ModelFile is a system model.
     */
    isSystemModelFile(): boolean;
}

/**
 * Manages the Composer model files.
 *
 * The structure of {@link Resource}s (Assets, Transactions, Participants) is modelled
 * in a set of Composer files. The contents of these files are managed
 * by the {@link ModelManager}. Each Composer file has a single namespace and contains
 * a set of asset, transaction and participant type definitions.
 *
 * Composer applications load their Composer files and then call the {@link ModelManager#addModelFile addModelFile}
 * method to register the Composer file(s) with the ModelManager. The ModelManager
 * parses the text of the Composer file and will make all defined types available
 * to other Composer services, such as the {@link Serializer} (to convert instances to/from JSON)
 * and {@link Factory} (to create instances).
 */
export class ModelManager {
    /**
     * Create the ModelManager.
     */
    constructor();
    /**
     * Validates a Composer file (as a string) to the ModelManager.
     * Composer files have a single namespace.
     * Note that if there are dependencies between multiple files the files
     * must be added in dependency order, or the addModelFiles method can be
     * used to add a set of files irrespective of dependencies.
     * @throws {IllegalModelException}
     */
    validateModelFile(modelFile: string, fileName?: string): void;
    /**
     * Adds a Composer file (as a string) to the ModelManager.
     * Composer files have a single namespace. If a Composer file with the
     * same namespace has already been added to the ModelManager then it
     * will be replaced.
     * Note that if there are dependencies between multiple files the files
     * must be added in dependency order, or the addModelFiles method can be
     * used to add a set of files irrespective of dependencies.
     * @throws {IllegalModelException}
     */
    addModelFile(modelFile: string, fileName?: string, disableValidation?: boolean, systemModelTable?: boolean): any;
    /**
     * Updates a Composer file (as a string) on the ModelManager.
     * Composer files have a single namespace. If a Composer file with the
     * same namespace has already been added to the ModelManager then it
     * will be replaced.
     * @throws {IllegalModelException}
     */
    updateModelFile(modelFile: string, fileName?: string, disableValidation?: boolean): any;
    /**
     * Remove the Composer file for a given namespace
     */
    deleteModelFile(namespace: string): void;
    /**
     * Add a set of Composer files to the model manager.
     */
    addModelFiles(modelFiles: string[], fileNames?: string[], disableValidation?: boolean, systemModelTable?: boolean): any[];
    /**
     * Validates all models files in this model manager.
     */
    validateModelFiles(): void;
    /**
     * Downloads all ModelFiles that are external dependencies and adds or
     * updates them in this ModelManager.
     * @throws {IllegalModelException} if the models fail validation
     */
    updateExternalModels(options?: any, modelFileDownloader?: ModelFileDownloader): Promise<ModelFile[]>;
    /**
     * Remove all registered Composer files
     */
    clearModelFiles(): void;
    /**
     * Get the namespaces registered with the ModelManager.
     */
    getNamespaces(): string[];
    /**
     * Get all class declarations from system namespaces
     */
    getSystemTypes(): ClassDeclaration[];
    /**
     * Get the AssetDeclarations defined in this model manager.
     */
    getAssetDeclarations(includeSystemType?: boolean): AssetDeclaration[];
    /**
     * Get the TransactionDeclarations defined in this model manager.
     */
    getTransactionDeclarations(includeSystemType?: boolean): TransactionDeclaration[];
    /**
     * Get the EventDeclarations defined in this model manager.
     */
    getEventDeclarations(includeSystemType?: boolean): EventDeclaration[];
    /**
     * Get the ParticipantDeclarations defined in this model manager.
     */
    getParticipantDeclarations(includeSystemType?: boolean): ParticipantDeclaration[];
    /**
     * Get the EnumDeclarations defined in this model manager.
     */
    getEnumDeclarations(includeSystemType?: boolean): EnumDeclaration[];
    /**
     * Get the Concepts defined in this model manager.
     */
    getConceptDeclarations(includeSystemType?: boolean): ConceptDeclaration[];
    /**
     * Get a factory for creating new instances of types defined in this model manager.
     */
    getFactory(): Factory;
    /**
     * Get a serializer for serializing instances of types defined in this model manager.
     */
    getSerializer(): Serializer;
    /**
     * Get the decorator factories for this model manager.
     */
    getDecoratorFactories(): DecoratorFactory[];
    /**
     * Add a decorator factory to this model manager.
     */
    addDecoratorFactory(factory: DecoratorFactory): void;
}

/**
 * Exception throws when a Composer file is syntactically invalid
 */
export class ParseException extends BaseFileException {
    /**
     * Create an ParseException
     */
    constructor(message: string, fileLocation?: string, fileName?: string, fullMessageOverride?: string, component?: string);
}

/**
 * Class representing the definition of a Participant.
 * It extends ClassDeclaration which manages a set of fields,
 * a super-type and the specification of an identifying field.
 */
export class ParticipantDeclaration extends ClassDeclaration {
    /**
     * Create an ParticipantDeclaration.
     * @throws {IllegalModelException}
     */
    constructor(modelFile: ModelFile, ast: any);
    /**
     * Returns true if this class can be pointed to by a relationship.
     */
    isRelationshipTarget(): boolean;
    /**
     * Returns the base system type for Participants from the system namespace.
     */
    getSystemType(): string;
}

/**
 * Property representing an attribute of a class declaration,
 * either a Field or a Relationship.
 */
export class Property extends Decorated {
    /**
     * Create a Property.
     * @throws {IllegalModelException}
     */
    constructor(parent: ClassDeclaration, ast: any);
    /**
     * Returns the owner of this property.
     */
    getParent(): ClassDeclaration;
    /**
     * Returns the name of a property.
     */
    getName(): string;
    /**
     * Returns the type of a property.
     */
    getType(): string;
    /**
     * Returns true if the field is optional.
     */
    isOptional(): boolean;
    /**
     * Returns the fully qualified type name of a property.
     */
    getFullyQualifiedTypeName(): string;
    /**
     * Returns the fully name of a property (ns + class name + property name).
     */
    getFullyQualifiedName(): string;
    /**
     * Returns the namespace of the parent of this property.
     */
    getNamespace(): string;
    /**
     * Returns true if the field is d as an array type.
     */
    isArray(): boolean;
    /**
     * Returns true if the field is d as an enumerated value.
     */
    isTypeEnum(): boolean;
    /**
     *  Returns true if this property is a primitive type.
     */
    isPrimitive(): boolean;
}

/**
 * Identifiable is an entity with a namespace, type and an identifier.
 * Applications should retrieve instances from {@link Factory}
 * This class is abstract.
 */
export abstract class Identifiable extends Typed {
    /**
     * Create an Identifiable.
     *
     * Note: Only to be called by framework code. Applications should
     * retrieve instances from {@link Factory}
     */
    constructor(
        modelManager: ModelManager,
        classDeclaration: ClassDeclaration,
        ns: string,
        type: string,
        id: string
    );
    /**
     * Get the identifier of this instance
     */
    getIdentifier(): string;
    /**
     * Set the identifier of this instance
     */
    setIdentifier(id: string): void;
    /**
     * Get the fully qualified identifier of this instance.
     * (namespace '.' type '#' identifier).
     */
    getFullyQualifiedIdentifier(): string;
    /**
     * Returns the string representation of this class.
     */
    toString(): string;
    /**
     * Determine if this identifiable is a relationship.
     */
    isRelationship(): boolean;
    /**
     * Determine if this identifiable is a resource.
     */
    isResource(): boolean;
    /**
     * Returns a URI representation of a reference to this identifiable.
     */
    toURI(): string;
}

/**
 * A Relationship is a typed pointer to an instance. I.e the relationship
 * with namespace = 'org.example', type = 'Vehicle' and id = 'ABC' creates
 * a pointer that points at an instance of org.example.Vehicle with the id
 * ABC.
 *
 * Applications should retrieve instances from {@link Factory}
 */
export class Relationship extends Identifiable {
    /**
     * Create a Relationship.
     *
     * Note: Only to be called by framework code. Applications should
     * retrieve instances from {@link Factory}
     */
    constructor(
        modelManager: ModelManager,
        classDeclaration: ClassDeclaration,
        ns: string,
        type: string,
        id: string
    );
    /**
     * Determine if this identifiable is a relationship.
     */
    isRelationship(): boolean;
    /**
     * Contructs a Relationship instance from a URI representation (created using toURI).
     */
    static fromURI(
        modelManager: ModelManager,
        uriAsstring: string,
        defaultNamespace?: string,
        defaultType?: string
    ): Relationship;
}

/**
 * Class representing a relationship between model elements
 */
export class RelationshipDeclaration extends Property {
    /**
     * Create a Relationship.
     * @throws {IllegalModelException}
     */
    constructor(parent: ClassDeclaration, ast: any);
    /**
     * Returns a string representation of this property.
     */
    toString(): string;
}

/**
 * Resource is an instance that has a type. The type of the resource
 * specifies a set of properites (which themselves have types).
 *
 * Type information in Composer is used to validate the structure of
 * Resource instances and for serialization.
 *
 * Resources are used in Composer to represent Assets, Participants, Transactions and
 * other domain classes that can be serialized for long-term persistent storage.
 */
export class Resource extends Identifiable {
    /**
     * This constructor should not be called directly.
     */
    constructor(modelManager: ModelManager, classDeclaration: ClassDeclaration, ns: string, type: string, id: string);
    /**
     * Determine if this identifiable is a resource.
     * false if not.
     */
    isResource(): boolean;
    /**
     * Serialize this resource into a JavaScript object suitable for serialization to JSON,
     * using the default options for the serializer. If you need to set additional options
     * for the serializer, use the {@link Serializer#toJSON} method instead.
     */
    toJSON(): any;
}

/**
 * Class representing a security exception
 */
export class SecurityException extends BaseException {
    /**
     * Create the SecurityException.
     */
    constructor(message: string);
}

/**
 * Serialize Resources instances to/from various formats for long-term storage
 * (e.g. on the blockchain).
 */
export class Serializer {
    /**
     * Create a Serializer.
     */
    constructor(factory: Factory, modelManager: ModelManager);
    /**
     * Set the default options for the serializer.
     */
    setDefaultOptions(newDefaultOptions: any): void;
    /**
     * Convert a {@link Resource} to a JavaScript object suitable for long-term
     * peristent storage.
     * @throws {Error} - throws an exception if resource is not an instance of
     * Resource or fails validation.
     */
    toJSON(resource: Resource, options?: {
        validate?: boolean;
        convertResourcesToRelationships?: boolean;
        permitResourcesForRelationships?: boolean;
        deduplicateResources?: boolean;
    }): any;
    /**
     * Create a {@link Resource} from a JavaScript any representation.
     * The JavaScript any should have been created by calling the
     * {@link Serializer#toJSON toJSON} API.
     *
     * The Resource is populated based on the JavaScript any.
     */
    fromJSON(jsonany: any, options?: {
        acceptResourcesForRelationships: boolean;
        validate: boolean;
    }): Resource;
}

/**
 * Class representing the definition of an Transaction.
 */
export class TransactionDeclaration extends ClassDeclaration {
    /**
     * Create an TransactionDeclaration.
     * @throws {IllegalModelException}
     */
    constructor(modelFile: ModelFile, ast: any);
    /**
     * Returns the base system type for Transactions from the system namespace.
     */
    getSystemType(): string;
}

/**
 * Typed is an instance with a namespace and a type.
 */
export abstract class Typed {
    /**
     * Abstract class Typed.
     */
    constructor(modelManager: ModelManager, classDeclaration: ClassDeclaration, ns: string, type: string);
    /**
     * Get the type of the instance (a short name, not including namespace).
     */
    getType(): string;
    /**
     * Get the fully-qualified type name of the instance (including namespace).
     */
    getFullyQualifiedType(): string;
    /**
     * Get the namespace of the instance.
     */
    getNamespace(): string;
    /**
     * Sets a property on this Resource.
     */
    setPropertyValue(propName: string, value: string): void;
    /**
     * Adds a value to an array property on this Resource.
     */
    addArrayValue(propName: string, value: string): void;
    /**
     * Check to see if this instance is an instance of the specified fully qualified
     * type name.
     */
    instanceOf(fqt: string): boolean;
    /**
     * Other properties on this Resource
     */
    [propertyName: string]: any;
}

/**
 * Internal Model Utility Class
 */
export namespace ModelUtil {
    /**
     * Get the fully qualified name of a type.
     */
    function getFullyQualifiedName(namespace: string, type: string): string;
    /**
     * Returns the default system model table for a system model file where the class names
     * exactly match the defaults expected by the ClassDeclarations.
     *
     * The default names are:
     * - 'Transaction'
     * - 'Asset'
     * - 'Event'
     * - 'Participant'
     *
     */
    function getIdentitySystemModelTable(): string;
}

/**
 * Exception throws when a composer file is semantically invalid
 */
export class IllegalModelException extends BaseFileException {
    /**
     * Create an IllegalModelException.
     */
    constructor(message: string, modelFile?: ModelFile, fileLocation?: any, component?: string);
    /**
     * Returns the modelfile associated with the exception or null.
     */
    getModelFile(): ModelFile | null;
}

/**
 * Error thrown when a Composer type does not exist.
 */
export class TypeNotFoundException extends BaseException {
    /**
     * If the optional 'message' argument is not supplied, it will be set to a default value that
     * includes the type name.
     */
    constructor(typeName: string, message?: string, component?: string);
    /**
     * Get the name of the type that was not found.
     */
    getTypeName(): string;
}

/**
 * Decorated defines a model element that may have decorators attached.
 */
export class Decorated {
    /**
     * Create a Decorated from an Abstract Syntax Tree. The AST is the
     * result of parsing.
     * @throws {IllegalModelException}
     */
    constructor(modelFile: ModelFile, ast: string);
    /**
     * Returns the ModelFile that defines this class.
     */
    getModelFile(): ModelFile;
    /**
     * Returns the decorators for this class.
     */
    getDecorators(): Decorator[];
    /**
     * Returns the decorator for this class with a given name.
     */
    getDecorator(name: string): Decorator;
}

/**
 * Decorator encapsulates a decorator (annotation) on a class or property.
 */
export class Decorator {
    /**
     * Create a Decorator.
     * @throws {IllegalModelException}
     */
    constructor(parent: ClassDeclaration | Property, ast: any);
    /**
     * Returns the owner of this property.
     */
    getParent(): ClassDeclaration | Property;
    /**
     * Returns the name of a decorator.
     */
    getName(): string;
    /**
     * Returns the arguments for this decorator.
     */
    getArguments(): any[] | null;
}

/**
 * An interface for a class that processes a decorator and returns a specific
 * implementation class for that decorator.
 */
export abstract class DecoratorFactory {
    /**
     * Process the decorator, and return a specific implementation class for that
     * decorator, or return null if this decorator is not handled by this processor.
     */
    abstract newDecorator(parent: ClassDeclaration | Property, ast: any): Decorator;
}

/**
 * ModelFileLoader interface.
 */
export interface ModelFileLoader {
    /**
     * Returns true if this ModelLoader can process the URL
     */
    accepts(url: string): boolean;
    /**
     * Load a ModelFile from a URL and return it
     */
    load(url: string, options: any): Promise<ModelFile>;
}

/**
 * Downloads the transitive closure of a set of model files.
 */
export class ModelFileDownloader {
    /**
     * Create a ModelFileDownloader and bind to a ModelFileLoader.
     */
    constructor(mfl: ModelFileLoader, startDelay: number, jobDelay: number);
    /**
     * Download all external dependencies for an array of model files
     */
    downloadExternalDependencies(modelFiles: ModelFile[], options?: any): Promise<ModelFile[]>;
    /**
     * Execute a Job
     */
    runJob(job: any): Promise<any>;
}
