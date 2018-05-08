// Type definitions for Sdk.Soap.js
// Project: https://code.msdn.microsoft.com/SdkSoapjs-9b51b99a
// Definitions by: Markus Mauch <https://github.com/markusmauch>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as Q from "q";

declare global {
    namespace Sdk {
        interface IEntityView {
            attributes: AttributeCollection;
            entityState: EntityState;
            id: string;
            logicalName: string;
            relatedEntities: RelatedEntityCollection;
        }

        interface IEntityCollectionView {
            entityName: string;
            entities: Array<IEntityView>;
            minActiveRowVersion: string;
            moreRecords: boolean;
            pagingCookie: string;
            totalRecordCount: number;
            totalRecordCountLimitExceeded: boolean;
        }

        interface IEntityReferenceView {
            Id: string;
            Type: string;
            Name: string;
        }

        interface IEntityReferenceCollectionView extends Array<IEntityReferenceView> {
        }

        class Q {
            /**
             * Creates a link between records.
             * @param entityName The logical name of the entity that is specified in the entityId parameter.
             * @param entityId The ID of the record to which the related records are associated.
             * @param relationship The name of the relationship to be used to create the link.
             * @param relatedEntities A collection of Sdk.EntityReference objects to be associated.
             */
            static associate(entityName: string, entityId: string, relationship: string, relatedEntities: Sdk.Collection<Sdk.EntityReference>): Q.Promise<void>;
            /**
             * Creates an entity record and returns a string representation of the GUID value that is the Id of the created entity.
             * @param entity An entity instance.
             */
            static create(entity: Sdk.Entity): Q.Promise<string>;

            /**
             * Deletes an entity record
             * @param entityName The LogicalName of the entity to delete.
             * @param id An ID of the record to delete.
             */
            static del(entityName: string, id: string): Q.Promise<void>;

            /**
             * Removes a link between records.
             * @param entityName The logical name of the entity that is specified in the entityId parameter.
             * @param entityId The ID of the record to which the related records are disassociated.
             * @param relationship The name of the relationship to be used to remove the link.
             * @param relatedEntities A collection of Sdk.EntityReference objects to be disassociated.
             */
            static disassociate(entityName: string, entityId: string, relationship: string, relatedEntities: Sdk.Collection<Sdk.EntityReference>): Q.Promise<void>;

            /**
             * Executes a SOAP Request using the SOAPAction Execute.
             * @param request A request object.
             */
            static execute(request: Sdk.OrganizationRequest): Q.Promise<OrganizationResponse>;

            /**
             * Retrieves an entity instance.
             * @param entityName The logical name of the entity to retrieve.
             * @param id The id of the entity to retrieve.
             * @param columnSet The columns of the entities to retrieve.
             */
            static retrieve(entityName: string, id: string, columnSet: Sdk.ColumnSet): Q.Promise<Entity>;

            /**
             * Retrieves the results of a query
             * @param query An Sdk.Query.QueryByAttribute query.
             */
            static retrieveMultiple(query: Sdk.Query.QueryByAttribute): Q.Promise<Sdk.EntityCollection>;

            /**
             * Retrieves the results of a query
             * @param query An Sdk.Query.QueryExpression query.
             */
            static retrieveMultiple(query: Sdk.Query.QueryExpression): Q.Promise<Sdk.EntityCollection>;

            /**
             * Retrieves the results of a query
             * @param query An Sdk.Query.FetchExpression query.
             */
            static retrieveMultiple(query: Sdk.Query.FetchExpression): Q.Promise<Sdk.EntityCollection>;

            /**
             * Updates an entity instance.
             * @param entity An entity instance to update.
             */
            static update(entity: Entity): Q.Promise<boolean>;
        }

        class ColumnSet {
            /**
             * Specifies the attributes for which non- null values are returned from a query.
             * @param columns Comma separated string values for attribute logical names.
             */
            constructor(...columns: string[]);

            /**
             * Specifies the attributes for which non- null values are returned from a query.
             * @param columns An array of string values.
             */
            constructor(columns: string[]);

            /**
             * Specifies the attributes for which non- null values are returned from a query.
             * @param allColumns If Boolean true value is passed as the first parameter all columns will be included. (Not recommended for production code).
             */
            constructor(allColumns: boolean);

            /**
             * Gets the collection of column names.
             * @returns The collection of column names.
             */
            getColumns(): Sdk.Collection<string>;

            /**
             * Adds a column to the collection.
             * @param column The logical name of the attribute to add.
             */
            addColumn(column: string): void;

            /**
             * Adds a string array of column names.
             * @param columns A string array of column names.
             */
            addColumns(columns: Array<string>): void;

            /**
             * Sets the AllColumns property.
             * @params allColumns A boolean value.
             */
            setAllColumns(allColumns: boolean): void;

            /**
             * Whether all columns will be returned.
             */
            getAllColumns(): boolean;

            /**
             * Gets the number of columns.
             */
            getCount(): number;


            /// prototype methods

            /**
             * Removes a column from the ColumnSet.
             * @param columnName The logical name of an attribute to be removed from the ColumnSet.
             * @param errorIfNotFound Whether to throw an error when the column to remove is not found. The default is false
             */
            removeColumn(columnName: string, errorIfNotFound?: boolean): void;

            /**
             * The XML node with "<d:columnSet>" as the root element.
             */
            toXml(): string;

            /**
             * XML nodes for columnSet properties.
             */
            toValueXml(): string;
        }

        class ValueType {
        }

        class Collection<T>
        {
            /**
             * A Collection for a specified type.
             * @param type The function that specifies the type.
             * @param items An array of items to add to the collection.
             */
            constructor(type: T, items?: Array<T>);

            /**
             * Gets the type defined for the collection.
             */
            getType(): T;

            /**
             * Adds an item to the collection.
             * @param item An item to add to the collection.
             */
            add(item: T): void;

            /**
             * Adds an array of objects to the collection.
             * @param items An array of items to add to the collection.
             */
            addRange(items: any[]): void;

            /**
             * Removes all items from the collection.
             */
            clear(): void;

            /**
             * Returns whether an object exists within the collection.
             * @param item The item to search in the collection.
             */
            contains(item: T): boolean;

            /**
             * Returns whether an object exists within the collection.
             * @param predicate A comparer function which is invoked for each item of the collection.
             */
            contains(predicate: (item: T) => boolean): boolean;

            /**
             * Returns an Sdk.Collection that contains all the items of this collection that satisfy the specified predicate function.
             * @param predicate A predicate function that takes a collection item as argument and returns a boolean.
             */
            select(predicate: (item: T) => boolean): Collection<T>;

            /**
             * Applies the action contained within a delegate function.
             * @param fn Delegate function with parameters for item and index.
             */
            forEach(fn: (item: T, index: number) => any): void;

            /**
             * Gets the item in the collection at the specified index.
             * @param index The index of the item to return.
             */
            getByIndex(index: number): T;

            /**
             * Removes an item from the collection.
             * @param item A reference to the item to be removed.
             */
            remove(item: T): void;

            /**
             * Gets a copy of the array of items in the collection.
             */
            toArray(): Array<T>;

            /**
             * Returns the number of items in the collection.
             */
            getCount(): number;
        }

        class EntityCollection {
            /**
             * Contains a collection of entity instances.
             * @param entities Initializes a new instance of the EntityCollection class setting the Sdk.Collection of Sdk.Entity objects.
             */
            constructor(entities: Sdk.Collection<Sdk.Entity>);

            /**
             * Adds an entity to the collection.
             * @param entity
             */
            addEntity(entity: Sdk.Entity): void;

            /**
             * Gets the collection of entities.
             */
            getEntities(): Sdk.Collection<Sdk.Entity>;

            /**
             * Gets an entity in the collection.
             * @param index The index of the entity in the collection.
             */
            getEntity(index: number): Sdk.Entity;

            /**
             * Gets an entity in the collection.
             * @param id The id of the entity in the collection.
             */
            getEntity(id: Sdk.Guid): Sdk.Entity;

            /**
             * Sets an item in the collection.
             * @param index The index of the entity in the collection.
             * @param value The Sdk.Entity value to set.
             */
            setEntity(index: number, value: Sdk.Entity): void;

            /**
             * Sets an item in the collection.
             * @param id The Sdk.Guid id of the entity in the collection.
             * @param value The Sdk.Entity value to set.
             */
            setEntity(id: Sdk.Guid, value: Sdk.Entity): void;

            /**
             * Gets the logical name of the entity.
             */
            getEntityName(): string;

            /**
             * Sets the logical name of the entity.
             * @param name The logical name of the entity.
             */
            setEntityName(name: string): void;

            /**
             * Gets the lowest active row version value.
             */
            getMinActiveRowVersion(): string;

            /**
             * Sets the lowest active row version value.
             * @param minActiveRowVersion The lowest active row version value.
             */
            setMinActiveRowVersion(minActiveRowVersion: string): void;

            /**
             * Gets whether there are more records available.
             */
            getMoreRecords(): boolean;

            /**
             * Sets whether there are more records available.
             * @param moreRecords Whether there are more records available.
             */
            setMoreRecords(moreRecords: boolean): void;

            /**
             * Gets the current paging information.
             */
            getPagingCookie(): string;

            /**
             * Sets the current paging information.
             * @param pagingCookie The current paging information.
             */
            setPagingCookie(pagingCookie: string): void;

            /**
             * Gets the total number of records in the collection if ReturnTotalRecordCount was true when the query was executed.
             */
            getTotalRecordCount(): number;

            /**
             * Sets the total number of records in the collection if ReturnTotalRecordCount was true when the query was executed.
             * @param totalRecordCount The total number of records in the collection if ReturnTotalRecordCount was true when the query was executed.
             */
            setTotalRecordCount(totalRecordCount: number): void;

            /**
             * Gets whether the results of the query exceeds the total record count.
             */
            getTotalRecordCountLimitExceeded(): boolean;

            /**
             * Sets whether the results of the query exceeds the total record count.
             * @param totalRecordCountLimitExceeded Whether the results of the query exceeds the total record count.
             */
            setTotalRecordCountLimitExceeded(totalRecordCountLimitExceeded: boolean): void;

            /**
             * XML definition of an the child nodes of an entity.
             */
            toValueXml(): string;

            /**
             * Returns a view of the entity collection
             */
            view(): IEntityCollectionView;
        }

        class EntityReferenceCollection {
            /**
             * Contains a collection of EntityReference instances.
             * @param entityReferences Initializes a new instance of the EntityReferenceCollection class setting the Sdk.Collection of Sdk.EntityReference objects.
             */
            constructor(entityReferences?: Sdk.Collection<EntityReference>);

            /**
             * Gets the collection of entity references.
             */
            getEntityReferences(): Sdk.Collection<EntityReference>;

            /**
             * Sets the collection of entity references.
             * @param entityReferences The entity references
             */
            setEntityReferences(entityReferences: Sdk.Collection<EntityReference>): void;


            /// prototype methods

            /**
             * Removes an entity reference to the collection.
             * @param entityReference The entity reference to remove.
             */
            remove(entityReference: Sdk.EntityReference): void;

            /**
             * Returns a view of the data in an entity reference collection instance.
             */
            view(): IEntityReferenceCollectionView;

            /**
             * Returns the values of serialized entity reference collection as XML nodes.
             */
            toValueXml(): string;
        }

        class RelatedEntityCollection extends EntityCollection {
        }

        class AttributeCollection extends Collection<AttributeBase>
        {
            constructor();

            /**
             * Adds an attribute to the Attribute Collection.
             * @param attribute The attribute to add.
             * @param isChanged Override the the attribute IsChanged value.
             */
            add(attribute: AttributeBase, isChanged?: boolean): void;

            /**
             * Gets the attributes in the collection.
              */
            getAttributes(): Collection<AttributeBase>;


            /// prototype methods

            /**
             * Allows for a delegate function to be applied to each attribute in the collection.
             * @param fm The function to be applied. Function should have parameters for the attribute and the iterator i.e.: '(att,i)'
             */
            forEach(fn: (attribute: AttributeBase, index: number) => any): void;

            /**
             * Returns all attributes in the collection.
             */
            get(): Sdk.Collection<AttributeBase>;

            /**
             * Returns the attribute with matching name.
             * @param attribuetName
             */
            get(attribuetName: string): AttributeBase;

            /**
             * Returns the attribute with matching index.
             * @param attribuetName
             */
            get(index: number): AttributeBase;

            /**
             * Gets an attribute at a given index.
             * @param index The index.
             */
            getAttributeByIndex(index: number): AttributeBase;

            /**
             * Gets an attribute with a given name.
             * @param name The Logical name of the attribute.
             */
            getAttributeByName(name: string): AttributeBase;

            /**
             * Gets an array of the names of attributes in a collection.
             */
            getNames(): Array<string>;
            /**
             * The XML for an attribute collection.
             */
            toXml(action: string): string;
        }

        class FormattedValueCollection {
        }

        class RelatedEntitiesCollection {
        }

        class AttributeBase {
            /**
             * Gets whether the value of the attribute has changed.
             */
            getIsChanged(): boolean;

            /**
             * Gets the logical name of the attribute.
             */
            getName(): string;

            /**
             * Gets the value type of the attribute.
             */
            getType(): Sdk.ValueType;

            /**
             * Gets the value of the attribute.
             * The type of value depends on the type of attribute.
             */
            getValue(): any;

            /**
             * Whether the value of the attribute is set.
             */
            isValueSet(): boolean;

            /**
             * Sets whether the value of the attribute has changed.
             * @param isChanged Whether the value of the attribute has changed.
             */
            setIsChanged(isChanged: boolean): void;

            /**
             * Sets the name of the attribute
             * @param name The name of the attribute.
             */
            setName(name: string): void;

            /**
             * For internal use only.
             * @param type The type of the attribute.
             */
            setType(type: Sdk.ValueType): void;

            /**
             * Sets the general value of the attribute
             * @param name The value of the attribute.
             */
            setValue(value: any): void;

            /// prototype methods
            /**
             * XML node for Attribute.
             */
            toXml(action: string): string;
        }

        class Boolean extends AttributeBase {
            /**
             * A Boolean Attribute.
             * @param name The logical name of the attribute .
             * @param value The value of the managed property.
             */
            constructor(name: string, value?: boolean)

            /**
             * Gets the value of a Boolean attribute.
             */
            getValue(): boolean;

            /**
             * Sets the value of a Boolean attribute.
             * @param value
             */
            setValue(value: boolean): void;
        }

        class DateTime extends AttributeBase {
            /**
             * A DateTime Attribute.
             * @param name The logical name of the attribute.
             * @param value The value of the attribute.
             */
            constructor(name: string, value?: Date);

            /**
             * Gets the value of a DateTime attribute.
             */
            getValue(): Date;

            /**
             * Sets the value of a DateTime attribute.
             * @param value The value to set.
             */
            setValue(value: Date): void;
        }

        class Decimal extends AttributeBase {
            /**
             * A Decimal Attribute.
             * @param name The logical name of the attribute.
             * @param value The value of the attribute.
             */
            constructor(name: string, value?: number);

            /**
             * Gets the value of a Decimal attribute.
             */
            getValue(): number;

            /**
             * Sets the value of a Decimal attribute.
             * @param value The value to set.
             */
            setValue(value: number): void;
        }

        class Double {
            /**
             * A Double Attribute.
             * @param name The logical name of the attribute.
             * @param value The value of the attribute.
             */
            constructor(name: string, value?: number);

            /**
             * Gets the value of a Double attribute.
             */
            getValue(): number;

            /**
             * Sets the value of a Double attribute.
             * @param value The value to set.
             */
            setValue(value: number): void;
        }

        class Guid extends AttributeBase {
            /**
             * A Guid Attribute.
             * @param name The logical name of the attribute.
             * @param value" The value of the attribute
             */
            constructor(name: string, value?: string);

            /**
             * Gets the value of a Guid attribute.
             */
            getValue(): string;

            /**
             * Sets the value of a Guid attribute.
             * @param value The value to set.
             */
            setValue(value: string): void;
        }

        class Int extends AttributeBase {
            /**
             * An Integer Attribute.
             * @param name The logical name of the attribute.
             * @param value The value of the attribute.
             */
            constructor(name: string, value?: number);

            /**
             * Gets the value of an Integer attribute.
             */
            getValue(): number;

            /**
             * Sets the value of an Integer attribute.
             * @param value The value to set.
             */
            setValue(value: number): void;
        }

        class Long extends AttributeBase {
            /**
             * A Long Attribute.
             * @param name The logical name of the attribute.
             * @param value The value of the attribute.
             */
            constructor(name: string, value?: number);

            /**
             * Gets the value of a Long attribute.
             */
            getValue(): number;

            /**
             * Sets the value of a Long attribute.
             * @param value The value to set.
             */
            setValue(value: number): void;
        }

        class Lookup extends AttributeBase {
            /**
             * A Lookup Attribute.
             * @param name The logical name of the attribute.
             * @param value The value of the attribute.
             */
            constructor(name: string, value?: EntityReference);

            /**
             * Gets the value of a Lookup attribute.
             */
            getValue(): EntityReference;

            /**
             * Sets the value of a Lookup attribute.
             * @param value The value to set.
             */
            setValue(value: EntityReference): void;
        }

        class Money extends AttributeBase {
            /**
             * A Money Attribute.
             * @param name The logical name of the attribute.
             * @param value The value of the attribute.
             */
            constructor(name: string, value?: number);

            /**
             * Gets the value of a Money attribute.
             */
            getValue(): number;

            /**
             * Sets the value of a Money attribute.
             * @param value The value to set.
             */
            setValue(value: number): void;
        }

        class OptionSet extends AttributeBase {
            /**
             * An OptionSet Attribute.
             * @param name The logical name of the attribute.
             * @param value The value of the attribute.
             */
            constructor(name: string, value?: number);

            /**
             * Gets the value of a OptionSet attribute.
             */
            getValue(): number;

            /**
             * Sets the value of an OptionSet attribute.
             * @param value The value to set.
             */
            setValue(value: number): void;
        }

        class PartyList extends AttributeBase {
            /**
             * A PartyList Attribute.
             * @param name The logical name of the attribute.
             * @param value The value of the attribute.
             */
            constructor(name: string, value?: EntityCollection);

            /**
             * Gets the value of a PartyList attribute.
             */
            getValue(): EntityCollection;

            /**
             * Sets the value of a PartyList attribute.
             * @param value The value to set.
             */
            setValue(value: EntityCollection): void;
        }

        class String extends AttributeBase {
            /**
             * A String Attribute.
             * @param name The logical name of the attribute.
             * @param value The value of the attribute.
             */
            constructor(name: string, value?: string);

            /**
             * Gets the value of a String attribute.
             */
            getValue(): string;

            /**
             * Sets the value of a String attribute.
             * @param value The value to set.
             */
            setValue(value: string): void;
        }

        class EntityState {
        }

        class Entity {
            /**
             * Represents an instance of an entity (a record).
             * @param type The logical name of the entity.
             */
            constructor(type: string);

            /**
             * Gets the collection of attributes for the entity.
             */
            getAttributes(): Sdk.AttributeCollection;

            /**
             * Gets the collection of attributes for the entity.
             * @param attributeName The attribute with matching name is returned.
             */
            getAttributes(attributeName: string): Sdk.AttributeBase;

            /**
             * Gets the collection of attributes for the entity.
             * @param index The attribute with matching index is returned.
             */
            getAttributes(index: number): Sdk.AttributeBase;

            /**
             * Checks whether the entity has an attribute that satisfies the specified predicate.
             * @param A comparer function that takes an Sdk.AttributeBase as argument and returns a boolean.
             */
            containsAttribute(predicate: (attribute: Sdk.AttributeBase) => boolean): boolean;

            /**
             * Checks whether the entity has an attribute with the specified name.
             * @param The name of the attribute.
             */
            containsAttribute(name: string): boolean;

            /**
             * Sets the collection of attributes for the entity.
             * @param attributes The collection of attributes for the entity.
             */
            setAttributes(attributes: Sdk.AttributeCollection): void;

            /**
             * Gets the state of the entity.
             */
            getEntityState(): Sdk.EntityState;

            /**
             * Sets the state of the entity.
             * @param state The state of the entity.
             */
            setEntityState(state: Sdk.EntityState): void;

            /**
             * Gets the collection of formatted values for the entity attributes.
             */
            getFormattedValues(): Sdk.FormattedValueCollection;

            /**
             * Sets the collection of formatted values for the entity attributes.
             * @param values" The collection of formatted values for the entity attributes.
             */
            setFormattedValues(values: Sdk.FormattedValueCollection): void;

            /**
             * Gets the Id of the record represented by this entity instance.
             */
            getId(): string;

            /**
             * Sets the Id of the record represented by this entity instance.
             * @param id The Id of the record represented by this entity instance.
             * @param override Allow setting the Id property, for example when creating a new record from an existing one.
             */
            setId(id: string, override?: boolean): void;

            /**
             * Gets the logical name of the entity.
             */
            getType(): string;

            /**
             * Sets the logical name of the entity.
             * @param type The logical name of the entity.
             */
            setType(type: string): void;

            /**
             * Gets a collection of related entities.
             */
            getRelatedEntities(): Sdk.RelatedEntitiesCollection;

            /**
             * Sets a collection of related entities.
             * @param relatedEntities A collection of related entities.
             */
            setRelatedEntities(relatedEntities: Sdk.RelatedEntitiesCollection): void;

            /**
             * Adds an attribute with an optional value to a newly instantiated Sdk.Entity
             * @param attribute The attribute to add
             * @param isChanged Whether the attribute should be considered changed, the default is true.
             */
            addAttribute(attribute: Sdk.AttributeBase, isChanged?: boolean): void;

            /**
             * Adds an entity to the related entities.
             * @param relationshipSchemaName The relationship SchemaName.
             * @param entity The entity to add.
             */
            addRelatedEntity(relationshipSchemaName: string, entity: Sdk.Entity): void;

            /**
             * Gets the value to indicate whether data for the entity has changed.
             */
            getIsChanged(): boolean;

            /**
             * Sets the value to indicate whether data for the entity has changed.
             * @param isChanged The value to indicate whether data for the entity has changed.
             */
            setIsChanged(isChanged: boolean): void;

            /**
             * Gets the value of the specified attribute.
             * @param logicalName The logical name of the attribute.
             */
            getValue(logicalName: string): any;

            /**
             * Generates properties for the entity based on metadata.
             */
            initializeSubClass(metadata: Sdk.Mdq.IEntityMetadata): void;

            /**
             * Sets the value of the specified attribute.
             * @param logicalName The logical name of the attribute.
             * @param value The value for the attribute. Simple JavaScript types may be used for most attribute types. Sdk.EntityReference, Sdk.EntityCollection, and Sdk.BooleanManagedPropertyValue cannot use simple JavaScript types.
             */
            setValue(logicalName: string, value: Object): void;

            /**
             * Generates an entity reference.
             */
            toEntityReference(): Sdk.EntityReference;

            /**
             * Overrides the default toString method.
             */
            toString(): string;

            /**
             * XML definition of an the child nodes of an entity.
             * @param action
             */
            toValueXml(action: string): string;

            /**
             * XML definition of an entity where the root node is <entity>.
             */
            toXml(action: string): string;

            /**
             * Returns a view of the data in an entity instance
             */
            view(): IEntityView;
        }

        class EntityReference {
            /**
             * Identifies a record.
             * @param logicalName The logical name of the entity.
             * @param id The id of the record.
             * @param name The value of the primary attribute of the entity instance. This property can contain a value or null. This property is not automatically populated unless the EntityReference object has been retrieved from the server.
             */
            constructor(logicalName: string, id: string, name?: string);

            /**
             * Gets the logicalName representing the type of referenced entity.
             */
            getType(): string;

            /**
             * Gets the Id value of the referenced entity.
             */
            getId(): string;

            /**
             * Gets the primary attribute value of the referenced entity.
             */
            getName(): string;

            /**
             * Sets the logicalName representing the type of referenced entity.
             * @param type The logicalName representing the type of referenced entity.
             */
            setType(type: string): void;

            /**
             * Sets the Id value of the entity.
             * @param id The Id value of the entity.
             */
            setId(id: string): void;

            /**
             * Sets the primary attribute value of the referenced entity.
             * @param name The primary attribute value of the referenced entity.
             */
            setName(name: string): void;


            /// prototype methods

            /**
             * Returns a serialized entity reference where the root element is <a:EntityReference>.
             */
            toXml(): string;

            /**
             * Returns the values of serialized entity reference as XML nodes.
             */
            toValueXml(): string;

            /**
             * Returns a view of the data in an EntityReference
             */
            view(): IEntityReferenceView;
        }

        class OrganizationRequest {
            /**
             * Sets the request XML.
             * @param xml The request XML.
             */
            setRequestXml(xml: string): void;

            /**
             * Gets the request XML.
             */
            getRequestXml(): string;

            /**
             * Sets the response type.
             * @param type A class that inherits from Sdk.OrganizationResponse.
             */
            setResponseType(type: OrganizationResponse): void;

            /**
             * Gets the response type.
             */
            getResponseType(): OrganizationResponse;
        }

        class OrganizationResponse {
        }

        /**
         * Contains the data that is needed to convert a query in FetchXML to a QueryExpression.
         * @param fetchXml Sets the query to convert.
         */
        class FetchXmlToQueryExpressionRequest extends Sdk.OrganizationRequest {
            constructor(fetchXml: string);

            /**
             * Sets the query to convert.
             * @param The query to convert.
             */
            setFetchXml(value: string): void;
        }

        /**
         * Response to FetchXmlToQueryExpressionRequest.
         * @param responseXml The response XML to the FetchXmlToQueryExpressionRequest.
         */
        class FetchXmlToQueryExpressionResponse extends Sdk.OrganizationResponse {
            constructor(responseXml: string);

            /**
             * Gets the results of the query conversion.
             */
            public getQuery(): Query.QueryExpression;
        }

        /**
         * Contains the data that is needed to  convert a query, which is represented as a QueryExpression class, to its equivalent query, which is represented as FetchXML.
         * @param query The query.
         */
        class QueryExpressionToFetchXmlRequest extends Sdk.OrganizationRequest {
            constructor(query: Sdk.Query.QueryBase);

            /**
             * Sets the query to convert.
             * @param query The query.
             * @param query
             */
            public setQuery(query: Sdk.Query.QueryBase): void;
        }

        /**
         * Response to QueryExpressionToFetchXmlRequest.
         */
        class QueryExpressionToFetchXmlResponse extends Sdk.OrganizationResponse {
            constructor(responseXml: string);

            /**
             * Gets the results of the query conversion.
             */
            public getFetchXml(): string;
        }

        /**
         * Request to retrieve metadata and metadata changes.
         * @param query The Sdk.Mdq.EntityQueryExpression that defines the query.
         * @param clientVersionStamp The Sdk.Mdq.RetrieveMetadataChangesResponse.ServerVersionStamp value from a previous request. When included only the metadata changes since the previous request will be returned.
         * @param deletedMetadataFilters An Sdk.Mdq.DeletedMetadataFilters enumeration value. When included the deleted metadata changes will be limited to the types defined by the enumeration.
         */
        class RetrieveMetadataChangesRequest extends Sdk.OrganizationRequest {
            constructor(query: Sdk.Mdq.EntityQueryExpression, clientVersionStamp?: string, deletedMetadataFilters?: Sdk.Mdq.DeletedMetadataFilters);
            getEntityMetadata(): Sdk.Mdq.IEntityMetadata[];
            getServerVersionStamp(): string;
            getDeletedMetadata(): Object;
        }

        /**
         * Response to RetrieveMetadataChangesRequest.
         * @param resopnseXml The response XML.
         */
        class RetrieveMetadataChangesResponse {
            constructor(responseXml: string);

            /***
             *
             */
            public getEntityMetadata(): Array<Mdq.IEntityMetadata>;

            /***
             *
             */
            public getServerVersionStamp(): string;

            /***
             *
             */
            public getDeletedMetadata(): any;
        }


        /**
         * Contains the data that is needed to set the state of an entity record.
         * @param entityMoniker Sets the entity.
         * @param state Sets the state of the entity record.
         * @param status Sets the status that corresponds to the State property.
         */
        class SetStateRequest extends Sdk.OrganizationRequest {
            constructor(entityMoniker: EntityReference, state: number, status: number);

            /**
             * Sets the entity.
             * @param value The entity.
             */
            public setEntityMoniker(value: EntityReference): void;

            /**
             * Sets the state of the entity record.
             * @param value The state of the entity record.
             */
            setState(value: number): void;

            /**
             * Sets the status that corresponds to the State property.
             * @param value The status that corresponds to the State property.
             */
            setStatus(value: number): void;
        }

        /**
         * Response to SetStateRequest.
         */
        class SetStateResponse {
            constructor(responseXml: string);
        }
    }

    namespace Sdk.Query {
        class QueryBase {
            /**
             * Internal Use Only.
             * @param type An Abstract class for different query classes to inherit from.
             */
            constructor(type: string);

            /**
             * Gets the columns to include.
             */
            getColumnSet(): Sdk.ColumnSet;

            /**
             * Sets the columns to include.
             * @param columns An Sdk.ColumnSet instance.
             */
            setColumnSet(columns: Sdk.ColumnSet): void;

            /**
             * Sets the columns to include.
             * @param columns An array of attribute logical names for the columns to return.
             */
            setColumnSet(columns: Array<string>): void;

            /**
             * Sets the columns to include.
             * @param columns Pass each attribute logical name as an argument.
             */
            setColumnSet(...columns: string[]): void;

            /**
             *
             */
            getQueryType(): string;

            /**
             * Gets the logical name of the entity.
             */
            getEntityName(): string;

            /**
             * Sets the logical name of the entity.
             * @param name The logical name of the entity.
             */
            setEntityName(name: string): void;

            /**
             * Gets the number of pages and the number of entity instances per page returned from the query.
             */
            getPageInfo(): Sdk.Query.PagingInfo;

            /**
             * Sets the number of pages and the number of entity instances per page returned from the query.
             * @param pageInfo The number of pages and the number of entity instances per page returned from the query.
             */
            setPageInfo(pageInfo: Sdk.Query.PagingInfo): void;

            /**
             * Adds the specified column to the column set.
             * @param columnName The logical name of the column to add.
             */
            addColumn(columnName: string): void;

            /**
             * Removes a column from the ColumnSet used by the query.
             * @param columnName The logical name of an attribute to be removed from the ColumnSet.
             * @param errorIfNotFound Whether to throw an error when the column to remove is not found. The default is false.
             */
            removeColumn(columnName: string, errorIfNotFound?: boolean): void;

            /**
             * Gets an Sdk.Collection of Sdk.Query.OrderExpression instances that define the order in which the entity instances are returned from the query.
             */
            getOrders(): Sdk.Collection<Sdk.Query.OrderExpression>;

            /**
             * Gets the number of rows to be returned.
             */
            getTopCount(): number;

            /**
             * Sets the number of rows to be returned.
             * @param count The number of rows to be returned.
             */
            setTopCount(count: number): void;

            /**
             * Gets the serialized QueryExpression.
             */
            toXml(): string;

            /**
             * Gets the serialized QueryExpression values.
             */
            toValueXml(): string;
        }

        class QueryByAttribute extends QueryBase {
            /**
             * Initializes a new instance of the QueryByAttribute class setting the entity name.
             * @param entityName The logical name of the entity.
             *
             */
            constructor(entityName: string);

            /**
             * Gets An Sdk.Collection of Sdk.AttributeBase attributes.
             */
            getAttributeValues(): Sdk.Collection<Sdk.AttributeBase>;

            /**
             * Sets an Sdk.Collection of Sdk.Query.OrderExpression instances that define the order in which the entity instances are returned from the query.
             * @param orders An Sdk.Collection of Sdk.Query.OrderExpression instances that define the order in which the entity instances are returned from the query.
             */
            setOrders(orders: Sdk.Collection<Sdk.Query.OrderExpression>): void;

            /// prototype methods

            /**
             * Adds the attribute with values to include in the query.
             * @param attributeValue One of the classes that inherit from Sdk.AttributeBase including the value to use as criteria.
             */
            addAttributeValue(attributeValue: Sdk.AttributeBase): void;

            /**
             * Adds an order to apply to the results of the query.
             * @param order An order expression.
             */
            addOrder(order: Sdk.Query.OrderExpression): void;

            /**
             * Removes an attribute with values to include in the query.
             * @param attributeValue One of the classes that inherit from Sdk.AttributeBase including the value to use as criteria.
             * @param errorIfNotFound Whether to throw an error when the attribute to remove is not found. The default is false.
             */
            removeAttributeValue(attributeValue: Sdk.AttributeBase, errorIfNotFound?: boolean): void;
        }

        class QueryExpression extends QueryBase {
            /**
             * Initializes a new instance of the QueryExpression class setting the entity name.
             * @param entityName The name of the entity.
             */
            constructor(entityName: string);

            /**
             * Gets the complex condition and logical filter expressions that filter the results of the query.
             */
            getCriteria(): FilterExpression;

            /**
             * Sets the complex condition and logical filter expressions that filter the results of the query.
             * @param criteria The query condition and filter criteria.
             */
            setCriteria(criteria: FilterExpression): void;

            /**
             * Gets whether the results of the query contain duplicate entity instances.
             */
            getDistinct(): boolean;

            /**
             * Sets whether the results of the query contain duplicate entity instances.
             */
            setDistinct(isDistinct: boolean): void;

            /**
             * Gets an Sdk.Collection of Sdk.Query.LinkEntity instances.
             */
            getLinkEntities(): Sdk.Collection<LinkEntity>;

            /**
             * Gets a value that indicates that no shared locks are issued against the data that would prohibit other transactions from modifying the data in the records returned from the query.
             */
            getNoLock(): boolean;

            /**
             * Sets a value that indicates that no shared locks are issued against the data that would prohibit other transactions from modifying the data in the records returned from the query.
             * @param isNoLock True if there are no shared locks are issued against the data that would prohibit other transactions from modifying the data in the records returned from the query; otherwise, false.
             */
            setNoLock(isNoLock: boolean): void;

            /// prototype methods

            /**
             *  Contains a condition expression used to filter the results of the query.
             * @param entityName The logical name of the entity in the condition expression.
             * @param attributeName The logical name of the attribute in the condition expression.
             * @param operator The condition operator.
             * @param values The value(s) to compare. Use one of the following classes that inherit from Sdk.Query.ValueBase:
             *          Sdk.Query.Booleans
             *          Sdk.Query.BooleanManagedProperties
             *          Sdk.Query.Dates
             *          Sdk.Query.Decimals
             *          Sdk.Query.Doubles
             *          Sdk.Query.EntityReferences
             *          Sdk.Query.Guids
             *          Sdk.Query.Ints
             *          Sdk.Query.Longs
             *          Sdk.Query.Money
             *          Sdk.Query.OptionSets
             *          Sdk.Query.Strings
             */
            addCondition(entityName: string, attributeName: string, conditionOperator: Sdk.Query.ConditionOperator, values: Sdk.Query.ValueBase): void;

            /**
             * Adds the specified link to the query expression setting the entity name to link to, the attribute name to link from and the attribute name to link to.
             * @param firstParam An Sdk.Query.LinkEntity instance.
             */
            addLink(firstParam: Sdk.Query.LinkEntity): void;

            /**
             * Adds the specified link to the query expression setting the entity name to link to, the attribute name to link from and the attribute name to link to.
             * @param firstParam The name of entity to link from.
             * @param linkFromAttributeName The name of the attribute to link from.
             * @param linkToAttributeName The name of the attribute to link to.
             * @param joinOperator The join operator. The default value is Inner
             */
            addLink(firstParam: string, linkFromAttributeName: string, linkToAttributeName: string, joinOperator: Sdk.Query.JoinOperator): void;

            /**
             * Adds the specified order expression to the query expression.
             * @param attributeName The name of the attribute.
             * @param orderType The order, ascending or descending. Ascending is the default if not specified.
             */
            addOrder(attributeName: string, orderType: Sdk.Query.OrderType): void;
        }

        class OrderExpression {
        }

        class ConditionExpression {
            /**
             * Contains a condition expression used to filter the results of the query.
             * @param name entityName The logical name of the entity in the condition expression.
             * @param name attributeName The logical name of the attribute in the condition expression.
             * @param name operator The condition operator.
             * @param name values The value(s) to compare.
             *  Use one of the following classes that inherit from Sdk.Query.ValueBase: </para>
             *  - Sdk.Query.Booleans </para>
             *  - Sdk.Query.BooleanManagedProperties </para>
             *  - Sdk.Query.Dates </para>
             *  - Sdk.Query.Decimals </para>
             *  - Sdk.Query.Doubles </para>
             *  - Sdk.Query.EntityReferences </para>
             *  - Sdk.Query.Guids </para>
             *  - Sdk.Query.Ints </para>
             *  - Sdk.Query.Longs </para>
             *  - Sdk.Query.Money </para>
             *  - Sdk.Query.OptionSets </para>
             *  - Sdk.Query.Strings </para>
             */
            constructor(entityName: string, attributeName: string, operator: ConditionOperator, values?: ValueBase);

            /**
             * Returns the logical name of the entity in the condition expression.
             */
            getEntityName(): string;

            /**
             * Sets the logical name of the entity in the condition expression.
             * @param name The logical name of the entity in the condition expression.
             */
            setEntityName(name: string): void;

            /**
             * Returns the logical name of the attribute in the condition expression.
             */
            getAttributeName(): string;

            /**
             * Sets the logical name of the attribute in the condition expression.
             * @param name The logical name of the attribute in the condition expression.
             */
            setAttributeName(name: string): void;

            /**
             * Returns the condition operator.
             */
            getOperator(): ConditionOperator;

            /**
             * Sets the condition operator.
             * @param operator The condition operator.
             */
            setOperator(operator: ConditionOperator): void;

            /**
             * Returns the values for the attribute.
             */
            getValues(): ValueBase;

            /**
             * Sets the values for the attribute.
             * @param The value(s) to compare
             *  Use one of the following classes that inherit from Sdk.Query.ValueBase:
             *  - Sdk.Query.Booleans
             *  - Sdk.Query.BooleanManagedProperties
             *  - Sdk.Query.Dates
             *  - Sdk.Query.Decimals
             *  - Sdk.Query.Doubles
             *  - Sdk.Query.EntityReferences
             *  - Sdk.Query.Guids
             *  - Sdk.Query.Ints
             *  - Sdk.Query.Longs
             *  - Sdk.Query.Money
             *  - Sdk.Query.OptionSets
             *  - Sdk.Query.Strings
             */
            setValues(values: ValueBase): void;
        }

        /**
         * Specifies complex condition and logical filter expressions used for filtering the results of the query.
         * @param logicalOperator The filter operator.
         */
        class FilterExpression {
            constructor(logicalOperator: LogicalOperator);

            /**
             * Adds a condition to the filter expression setting the attribute name, condition operator, and values.
             * @param conditionExpression The expression that will set the condition.
             */
            public addCondition(firstParam: ConditionExpression): void;

            /**
             * Adds a condition to the filter expression setting the attribute name, condition operator, and values.
             * @param entityName The entityName of the new ConditionExpression that will be instantiated using the other parameters.
             * @param attributeName The attribute name to use in the condition expression.
             * @param conditionOperator The condition operator if the first parameter is a string.
             * @param values The value(s) to compare.
             *  Use one of the following classes that
             *  - Sdk.Query.Booleans
             *  - Sdk.Query.BooleanManagedProperties
             *  - Sdk.Query.Dates
             *  - Sdk.Query.Decimals
             *  - Sdk.Query.Doubles
             *  - Sdk.Query.EntityReferences
             *  - Sdk.Query.Guids
             *  - Sdk.Query.Ints
             *  - Sdk.Query.Longs
             *  - Sdk.Query.Money
             *  - Sdk.Query.OptionSets
             *  - Sdk.Query.Strings
             */
            public addCondition(entityName: string, attributeName: string, conditionOperator: ConditionOperator, values?: ValueBase): void;

            /**
             * Adds a child filter to the filter expression.
             * @param filterExpression The filter to add.
             */
            addFilter(filterExpression: FilterExpression): void;

            /**
             * Adds a child filter to the filter expression.
             * @param logicalOperator Creates new FilterExpression with the specified logical operator and adds it.
             */
            addFilter(logicalOperator: LogicalOperator): void;

            /**
             * Returns a collection of Sdk.Query.ConditionExpression values.
             */
            getConditions(): Sdk.Collection<ConditionExpression>;

            /**
             * Gets the logical AND/OR filter operator.
             */
            getFilterOperator(): LogicalOperator

            /**
             * Returns an Sdk.Collection of Sdk.Query.FilterExpression.
             */
            getFilters(): Sdk.Collection<FilterExpression>;

            /**
             * Gets whether the expression is part of a quick find query.
             */
            getIsQuickFindFilter(): boolean;

            /**
             * Sets the filter operator.
             * @param filterOperator The filter operator.
             */
            setFilterOperator(filterOperator: LogicalOperator): void;

            /**
             * Sets whether the expression is part of a quick find query.
             * @param isQuickFind True if the filter is part of a quick find query; otherwise, false.
             */
            setIsQuickFindFilter(isQuickFind: boolean): void;
        }

        class FetchExpression {
            /**
             * @param fetchXml The FetchXml to be used in a query.
             */
            constructor(fetchXml: string);

            /**
             * Gets the FetchXml to be used in a query.
             */
            public getFetchXml(): string;

            /**
             * Sets the FetchXml to be used in a query.
             * @param fetchXml The FetchXml to be used in a query.
             */
            public setFetchXml(fetchXml: string): void;
        }

        class LinkEntity {
            /**
             * Initializes a new instance of the Sdk.Query.LinkEntity class setting the required properties.
             * @param linkFromEntityName The logical name of the entity to link from.
             * @param linkToEntityName The logical name of the entity to link to.
             * @param linkFromAttributeName The name of the attribute to link from.
             * @param linkToAttributeName The name of the attribute to link to.
             * @param joinOperator The join operator.
             * @param entityAlias The string representing an alias for the linkToEntityName.
             */
            constructor(
                linkFromEntityName: string,
                linkToEntityName: string,
                linkFromAttributeName: string,
                linkToAttributeName: string,
                joinOperator: Sdk.Query.JoinOperator,
                entityAlias: string);

            /**
             * Adds a linked entity.
             * @param linkEntity An Sdk.Query.LinkEntity to add.
             */
            public addLink(linkEntity: Sdk.Query.LinkEntity): void;

            /**
             * Gets the column set.
             */
            public getColumns(): Sdk.ColumnSet;

            /**
             * Sets the columns to include.
             * @param columns An Sdk.ColumnSet instance.
             */
            public setColumns(columns: Sdk.ColumnSet): void;

            /**
             * Sets the columns to include.
             * @param columns An Array of attribute logical names for the columns to return.
             */
            public setColumns(columns: string[]): void;

            /**
             * Sets the columns to include.
             * @param columns Pass each attribute logical name as an argument.
             */
            public setColumns(...columns: string[]): void;

            /**
             * Gets the alias for the entity.
             */
            public getEntityAlias(): string;

            /**
             * Sets the alias for the entity.
             * @param alias The alias for the entity.
             */
            public setEntityAlias(alias: string): void;

            /**
             * Gets the join operator.
             */
            public getJoinOperator(): Sdk.Query.JoinOperator;

            /**
             * Sets the join operator.
             * @param operator The join operator.
             */
            public setJoinOperator(operator: Sdk.Query.JoinOperator): void;

            /**
             * Gets the complex condition and logical filter expressions that filter the results of the query.
             */
            public getLinkCriteria(): Sdk.Query.FilterExpression;

            /**
             * Sets the complex condition and logical filter expressions that filter the results of the query.
             * @param criteria The complex condition and logical filter expressions that filter the results of the query.
             */
            public setLinkCriteria(criteria: Sdk.Query.FilterExpression): void;

            /**
             * Gets the collection of Sdk.Query.LinkEntity that define links between multiple entity types.
             */
            public getLinkEntities(): Sdk.Collection<Sdk.Query.LinkEntity>;

            /**
             * Gets the logical name of the attribute of the entity that you are linking from.
             */
            public getLinkFromAttributeName(): string;

            /**
             * Sets the logical name of the attribute of the entity that you are linking from.
             * @param name The logical name of the attribute of the entity that you are linking from.
             */
            public setLinkFromAttributeName(name: string): void;

            /**
             * Gets the logical name of the entity that you are linking from.
             */
            public getLinkFromEntityName(): string;

            /**
             * Sets the logical name of the entity that you are linking from.
             * @param name The logical name of the entity that you are linking from.
             */
            public setLinkFromEntityName(name: string): void;

            /**
             * Gets the logical name of the attribute of the entity that you are linking to
             */
            public getLinkToAttributeName(): string;

            /**
             * Sets the logical name of the attribute of the entity that you are linking to.
             * @param name The logical name of the attribute of the entity that you are linking to.
             */
            public setLinkToAttributeName(name: string): void;

            /**
             * Gets the logical name of the entity that you are linking to.
             */
            public getLinkToEntityName(): string;

            /**
             * Sets the logical name of the entity that you are linking to.
             * @param name The logical name of the entity that you are linking to.
             */
            public setLinkToEntityName(name: string): void;

            /**
             * Gets the serialized link entity.
             */
            public toXml(): string;

            /**
             * Gets the serialized link entity values.
             */
            public toValueXml(): string;
        }

        class PagingInfo {
            /**
             * Gets the number of entity instances returned per page.
             */
            getCount(): number;

            /**
             * Sets the number of entity instances returned per page.
             * @param The number of entity instances returned per page
             */
            setCount(count: number): void;

            /**
             * Gets the number of pages returned from the query.
             */
            getPageNumber(): number;

            /**
             * Sets the number of pages returned from the query.
             * @param The number of pages returned from the query.
             */
            setPageNumber(pages: number): void;

            /**
             * Gets the info used to page large result sets.
             */
            getPagingCookie(): string;

            /**
             * Sets the info used to page large result sets.
             */
            setPagingCookie(cookie: string): void;

            /**
             * Gets whether the total number of records should be returned from the query.
             */
            getReturnTotalRecordCount(): boolean;

            /**
             * Sets whether the total number of records should be returned from the query.
             * @param Specifies whether the TotalRecordCount should be set when the query is executed.
             */
            setReturnTotalRecordCount(returnTotalRecordsCount: boolean): void;


            /// prototype methods

            /**
             * Gets the serialized paging info.
             *
            toXml():string;

            /**
             * Gets the serialized paging info values.
             */
            toValueXml(): string;
        }

        export enum ConditionOperator {
            Equal,
            NotEqual,
            GreaterThan,
            LessThan,
            GreaterEqual,
            LessEqual,
            Like,
            NotLike,
            In,
            NotIn,
            Between,
            NotBetween,
            Null,
            NotNull,
            Yesterday,
            Today,
            Tomorrow,
            Last7Days,
            Next7Days,
            LastWeek,
            ThisWeek,
            NextWeek,
            LastMonth,
            ThisMonth,
            NextMonth,
            On,
            OnOrBefore,
            OnOrAfter,
            LastYear,
            ThisYear,
            NextYear,
            LastXHours,
            NextXHours,
            LastXDays,
            NextXDays,
            LastXWeeks,
            NextXWeeks,
            LastXMonths,
            NextXMonths,
            LastXYears,
            NextXYears,
            EqualUserId,
            NotEqualUserId,
            EqualBusinessId,
            NotEqualBusinessId,
            Mask,
            NotMask,
            Contains,
            DoesNotContain,
            EqualUserLanguage,
            NotOn,
            OlderThanXMonths,
            BeginsWith,
            DoesNotBeginWith,
            EndsWith,
            DoesNotEndWith,
            ThisFiscalYear,
            ThisFiscalPeriod,
            NextFiscalYear,
            NextFiscalPeriod,
            LastFiscalYear,
            LastFiscalPeriod,
            LastXFiscalYears,
            LastXFiscalPeriods,
            NextXFiscalYears,
            NextXFiscalPeriods,
            InFiscalYear,
            InFiscalPeriod,
            InFiscalPeriodAndYear,
            InOrBeforeFiscalPeriodAndYear,
            InOrAfterFiscalPeriodAndYear,
            EqualUserOrUserTeams,
            EqualUserTeams,
        }

        export enum JoinOperator {
            Inner,
            LeftOuter,
            Natural,
        }

        export enum OrderType {
            Ascending,
            Descending,
        }

        export class ValueBase
        { }

        /**
         * Specifies Boolean values to be compared in the query.
         * @param args An array of Boolean values.
         */
        class Booleans extends ValueBase {
            constructor(args: boolean[]);

            /**
             * Returns the type of value with namespace prefix.
             */
            public getType(): string;

            /**
             * Returns an Sdk.Collection of boolean values.
             */
            public getValues(): Sdk.Collection<boolean>;


            /**
             * Specifies a Boolean value to be compared in the query.
             * @param setValueArgs An array of boolean values.
             */
            public setValues(setValueArgs: boolean[]): void;
        }

        /**
         * Specifies the Date values to be compared in the query.
         * @param args An array of Date values.
         */
        class Dates extends ValueBase {
            constructor(args: Date[]);

            /**
             * Returns the type of value with namespace prefix.
             */
            public getType(): string;

            /**
             * Returns an Sdk.Collection of Date values.
             */
            public getValues(): Sdk.Collection<Date>;

            /**
             * Specifies the Date values to be compared in the query.
             * @param setValueArgs An array of Date values.
             */
            public setValues(setValueArgs: Date[]): void;
        }

        /**
         * Specifies the Decimal values to be compared in the query.
         * @param args An array of Decimal values.
         */
        class Decimals extends ValueBase {
            constructor(args: number[]);

            /**
             * Returns the type of value with namespace prefix.
             */
            public getType(): string;

            /**
             * Returns an Sdk.Collection of number values.
             */
            public getValues(): Sdk.Collection<number>;

            /**
             * Specifies the Decimal values to be compared in the query.
             * @param setValueArgs An array of number values.
             */
            public setValues(setValueArgs: number[]): void;
        }

        /**
         * Specifies the Double values to be compared in the query.
         * @param args An array of Double values.
         */
        class Doubles extends ValueBase {
            constructor(args: number[]);

            /**
             * Returns the type of value with namespace prefix.
             */
            public getType(): string;

            /**
             * Returns an Sdk.Collection of number values.
             */
            public getValues(): Sdk.Collection<number>;

            /**
             * Specifies the Double values to be compared in the query.
             * @param setValueArgs An array of number values.
             */
            public setValues(setValueArgs: number[]): void;
        }

        /**
         * Specifies the Int values to be compared in the query.
         * @param args An array of Int values.
         */
        class Ints extends ValueBase {
            constructor(args: number[]);

            /**
             * Returns the type of value with namespace prefix.
             */
            public getType(): string;

            /**
             * Returns an Sdk.Collection of number values.
             */
            public getValues(): Sdk.Collection<number>;

            /**
             * Specifies the Int values to be compared in the query
             * @param setValueArgs An array of number values.
             */
            public setValues(setValueArgs: number[]): void;
        }

        /**
         * Specifies the Long values to be compared in the query.
         * @param args An array of Long values.
         */
        class Longs extends ValueBase {
            constructor(args: number[]);

            /**
             * Returns the type of value with namespace prefix.
             */
            public getType(): string;

            /**
             * Returns an Sdk.Collection of number values.
             */
            public getValues(): Sdk.Collection<number>;

            /**
             * Specifies the Long values to be compared in the query.
             * @param setValueArgs An array of number values.
             */
            public setValues(setValueArgs: number[]): void;
        }

        /**
         * Specifies the Sdk.EntityReference values to be compared in the query.
         * @param args An array of Sdk.EntityReference values.
         */
        class EntityReferences extends ValueBase {
            constructor(args: Sdk.EntityReference[]);

            /**
             * Returns the type of value with namespace prefix.
             */
            public getType(): string;

            /**
             * Returns an Sdk.Collection of Sdk.EntityReference values.
             */
            public getValues(): Sdk.Collection<number>;

            /**
             * Specifies the Long values to be compared in the query.
             * @param setValueArgs An array of Sdk.EntityReference values.
             */
            public setValues(setValueArgs: Sdk.EntityReference[]): void;
        }

        /**
         * Specifies the Sdk.Query.Guids values to be compared in the query.
         * @param args An array of GUID string values.
         */
        class Guids extends ValueBase {
            constructor(args: string[]);

            /**
             * Returns the type of value with namespace prefix.
             */
            public getType(): string;

            /**
             * Returns an Sdk.Collection of GUID string values.
             */
            public getValues(): Sdk.Collection<string>;

            /**
             * Specifies the Long values to be compared in the query.
             * @param setValueArgs An array of GUID string values.
             */
            public setValues(setValueArgs: string[]): void;
        }

        /**
         * Specifies the Money values to be compared in the query.
         * @param args An array of number values.
         */
        class Money extends ValueBase {
            constructor(args: number[]);

            /**
             * Returns the type of value with namespace prefix.
             */
            public getType(): string;

            /**
             * Returns an Sdk.Collection of number values.
             */
            public getValues(): Sdk.Collection<number>;

            /**
             * Specifies the Money values to be compared in the query.
             * @param setValueArgs An array of number values.
             */
            public setValues(setValueArgs: number[]): void;
        }

        /**
         * Specifies the OptionSet values to be compared in the query.
         * @param args An array of number values.
         */
        class OptionSets extends ValueBase {
            constructor(args: number[]);

            /**
             * Returns the type of value with namespace prefix.
             */
            public getType(): string;

            /**
             * Returns an Sdk.Collection of number values.
             */
            public getValues(): Sdk.Collection<number>;

            /**
             * Specifies the OptionSet values to be compared in the query.
             * @param setValueArgs An array of number values.
             */
            public setValues(setValueArgs: number[]): void;
        }

        /**
         * Specifies the String values to be compared in the query.
         * @param args An array of String values.
         */
        class Strings extends ValueBase {
            constructor(args: string[]);

            /**
             * Returns the type of value with namespace prefix.
             */
            public getType(): string;

            /**
             * Returns an Sdk.Collection of String values.
             */
            public getValues(): Sdk.Collection<string>;

            /**
             * Specifies the String values to be compared in the query.
             * @param setValueArgs An array of String values.
             */
            public setValues(setValueArgs: string[]): void
        }

        export enum LogicalOperator {
            Or,
            And,
        }
    }

    namespace Sdk.Util {
        /**
         * Verifies the parameter is a string formatted as a GUID.
         * @param value The value to check.
         */
        function isGuid(value: string): boolean;

        /**
         * Verifies the parameter is a string formatted as a GUID or null.
         * @param value The value to check.
         */
        function isGuidOrNull(value: string): boolean;

        /**
         * Verifies the parameter is a valid enum value.
         * @param enumeration The enumeration.
         * @param value The value to check.
         */

        /**
         * Returns an empty GUID.
         */
        function getEmptyGuid(): string;

        /**
         * Formats a string with the arguments from an array.
         * @param string The string containing placeholders for items in the array.
         * @param args An array of strings to replace the placeholders.
         */
        function format(string: string, args: string[]): string;

        /**
         *
         */
        function getError(resp: any): string;

        /**
         * Returns the clinent URL.
         */
        function getClientUrl(): string;

        /**
         * Provides a way to override the client Url when a client-side context is not available.
         * @param url The client URL to use instead of the default.
         */
        function setClientUrl(url: string): void;

        /**
         *
         */
        function getXMLHttpRequest(action: string, async: boolean): any;

        /**
         * Creates an entity from XML.
         * @param The serialized entity returned from the SOAP service as XML.
         */
        function createEntityFromNode(node: string): void;
    }

    namespace Sdk.Xml {
    }

    namespace Sdk.Mdq {
        /**
         * Defines a complex query to retrieve entity metadata.
         * @param criteria The filter criteria for the metadata query.
         * @param properties The properties to be returned by the query.
         * @param attributeQuery A query expression for the entity attribute metadata to return.
         * @param relationshipQuery A query expression for the entity relationship metadata to return.
         * @param labelQuery A query expression for the labels to return.
         */
        export class EntityQueryExpression {
            constructor(
                criteria: Sdk.Mdq.MetadataFilterExpression,
                properties: Sdk.Mdq.MetadataPropertiesExpression,
                attributeQuery?: Sdk.Mdq.AttributeQueryExpression,
                relationshipQuery?: Sdk.Mdq.RelationshipQueryExpression,
                labelQuery?: Sdk.Mdq.LabelQueryExpression);
        }

        /**
         * An enumeration that specifies the type of deleted metadata to retrieve.
         */
        export enum DeletedMetadataFilters {
            All, // All deleted metadata
            Attribute, // Deleted Attribute metadata
            Default, // The value used if not set. Equals Entity
            Entity, //Deleted Entity metadata
            Label, //Deleted Label metadata
            OptionSet, // Deleted OptionSet metadata
            Relationship, //Deleted Relationship metadata
        }

        /**
         * Specifies complex condition and logical filter expressions used for filtering the results of a metadata query.
         * @param filterOperator The logical AND/OR filter operator.
         */

        export class MetadataFilterExpression {
            constructor(filterOperator: Sdk.Mdq.LogicalOperator);

            /**
             * Adds a condition. This method accepts either the properties to create a new Sdk.Mdq.MetadataConditionExpression or a Sdk.Mdq.MetadataConditionExpression as the first argument.
             * @param propertyName The metadata property to evaluate.
             * @param conditionOperator The condition operator.
             * @param value The metadata value to evaluate.
             */
            public addCondition(
                propertyName: SearchableEntityMetadataProperties | SearchableAttributeMetadataProperties | SearchableRelationshipMetadataProperties,
                conditionOperator: MetadataConditionOperator,
                value: Object): void;
            public addCondition(
                propertyName: SearchableAttributeMetadataProperties, conditionOperator: MetadataConditionOperator, value: any): void;
            public addCondition(
                propertyName: SearchableEntityMetadataProperties | SearchableAttributeMetadataProperties | SearchableRelationshipMetadataProperties,
                conditionOperator: MetadataConditionOperator,
                value: Object): void;
            addCondition(propertyName: SearchableAttributeMetadataProperties, conditionOperator: MetadataConditionOperator): void;
            public addCondition(
                propertyName: SearchableEntityMetadataProperties | SearchableAttributeMetadataProperties | SearchableRelationshipMetadataProperties,
                conditionOperator: MetadataConditionOperator,
                value: Object): void;
        }

        /**
         * Defines a complex query to retrieve attribute metadata for entities retrieved using an Sdk.Mdq.EntityQueryExpression.
         * @param criteria The filter criteria for the metadata query.
         * @param properties The properties to be returned by the query.
         */
        export class AttributeQueryExpression {
            constructor(criteria: MetadataFilterExpression, properties: Sdk.Mdq.MetadataPropertiesExpression);
        }

        /**
         * Defines a complex query to retrieve entity relationship metadata for entities retrieved using an EntityQueryExpression.
         * @param criteria The filter criteria for the metadata query.
         * @param properties The properties to be returned by the query.
         */
        export class RelationshipQueryExpression {
            constructor(criteria: MetadataFilterExpression, properties: Mdq.MetadataPropertiesExpression);
        }

        /**
         * Defines the languages for the labels to be retrieved for metadata items that have labels.
         * @param languages An array of LCID number values.
         */
        export class LabelQueryExpression {
            constructor(languages: Array<number>);
        }

        /**
         * Logical operator.
         */
        export enum LogicalOperator {
            And,
            Or,
        }

        /**
         * Specifies the properties for which non-null values are returned from a query.
         * @param allProperties  Whether to retrieve all the properties of a metadata object.
         * @param propertyNames: >An array of strings representing the metadata properties to retrieve.
         */
        export class MetadataPropertiesExpression {
            constructor(allProperties: boolean, propertyNames?: Array<EntityMetadataProperties | AttributeMetadataProperties | RelationshipMetadataProperties | any>);
        }

        export enum RelationshipMetadataProperties {
            AssociatedMenuConfiguration,
            CascadeConfiguration,
            HasChanged,
            Entity1AssociatedMenuConfiguration,
            Entity1IntersectAttribute,
            Entity1LogicalName,
            Entity2AssociatedMenuConfiguration,
            Entity2IntersectAttribute,
            Entity2LogicalName,
            IntersectEntityName,
            IsCustomizable,
            IntroducedVersion,
            IsCustomRelationship,
            IsManaged,
            IsValidForAdvancedFind,
            MetadataId,
            ReferencedAttribute,
            ReferencedEntity,
            ReferencingAttribute,
            ReferencingEntity,
            RelationshipType,
            SchemaName,
            SecurityTypes,
        }

        export enum AttributeMetadataProperties {
            AttributeOf,
            AttributeType,
            AttributeTypeName,
            CalculationOf,
            CanBeSecuredForCreate,
            CanBeSecuredForRead,
            CanBeSecuredForUpdate,
            CanModifyAdditionalSettings,
            ColumnNumber,
            DefaultFormValue,
            DefaultValue,
            DeprecatedVersion,
            Description,
            DisplayName,
            EntityLogicalName,
            Format,
            FormatName,
            ImeMode,
            IntroducedVersion,
            IsAuditEnabled,
            IsCustomAttribute,
            IsCustomizable,
            IsManaged,
            IsPrimaryId,
            IsPrimaryName,
            IsRenameable,
            IsSecured,
            IsValidForAdvancedFind,
            IsValidForCreate,
            IsValidForRead,
            IsValidForUpdate,
            LinkedAttributeId,
            LogicalName,
            MaxLength,
            MaxValue,
            MetadataId,
            MinValue,
            OptionSet,
            Precision,
            PrecisionSource,
            RequiredLevel,
            SchemaName,
            Targets,
            YomiOf,
        }

        export enum EntityMetadataProperties {
            ActivityTypeMask,
            Attributes,
            AutoCreateAccessTeams,
            AutoRouteToOwnerQueue,
            CanBeInManyToMany,
            CanBePrimaryEntityInRelationship,
            CanBeRelatedEntityInRelationship,
            CanCreateAttributes,
            CanCreateCharts,
            CanCreateForms,
            CanCreateViews,
            CanModifyAdditionalSettings,
            CanTriggerWorkflow,
            Description,
            DisplayCollectionName,
            DisplayName,
            IconLargeName,
            IconMediumName,
            IconSmallName,
            IntroducedVersion,
            IsActivity,
            IsActivityParty,
            IsAIRUpdated,
            IsAuditEnabled,
            IsAvailableOffline,
            IsBusinessProcessEnabled,
            IsChildEntity,
            IsConnectionsEnabled,
            IsCustomEntity,
            IsCustomizable,
            IsDocumentManagementEnabled,
            IsDuplicateDetectionEnabled,
            IsEnabledForCharts,
            IsImportable,
            IsIntersect,
            IsMailMergeEnabled,
            IsManaged,
            IsMappable,
            IsQuickCreateEnabled,
            IsReadingPaneEnabled,
            IsRenameable,
            IsValidForAdvancedFind,
            IsValidForQueue,
            IsVisibleInMobile,
            IsVisibleInMobileClient,
            LogicalName,
            ManyToManyRelationships,
            ManyToOneRelationships,
            MetadataId,
            ObjectTypeCode,
            OneToManyRelationships,
            OwnershipType,
            PrimaryIdAttribute,
            PrimaryImageAttribute,
            PrimaryNameAttribute,
            Privileges,
            RecurrenceBaseEntityLogicalName,
            ReportViewName,
            SchemaName,
        }

        export enum SearchableEntityMetadataProperties {
            ActivityTypeMask,
            AutoCreateAccessTeams,
            AutoRouteToOwnerQueue,
            CanBeInManyToMany,
            CanBePrimaryEntityInRelationship,
            CanBeRelatedEntityInRelationship,
            CanCreateAttributes,
            CanCreateCharts,
            CanCreateForms,
            CanCreateViews,
            CanModifyAdditionalSettings,
            CanTriggerWorkflow,
            IconLargeName,
            IconMediumName,
            IconSmallName,
            IntroducedVersion,
            IsActivity,
            IsActivityParty,
            IsAIRUpdated,
            IsAuditEnabled,
            IsAvailableOffline,
            IsBusinessProcessEnabled,
            IsChildEntity,
            IsConnectionsEnabled,
            IsCustomEntity,
            IsCustomizable,
            IsDocumentManagementEnabled,
            IsDuplicateDetectionEnabled,
            IsEnabledForCharts,
            IsImportable,
            IsIntersect,
            IsMailMergeEnabled,
            IsManaged,
            IsMappable,
            IsQuickCreateEnabled,
            IsReadingPaneEnabled,
            IsRenameable,
            IsValidForAdvancedFind,
            IsValidForQueue,
            IsVisibleInMobile,
            IsVisibleInMobileClient,
            LogicalName,
            MetadataId,
            ObjectTypeCode,
            OwnershipType,
            PrimaryIdAttribute,
            PrimaryImageAttribute,
            PrimaryNameAttribute,
            RecurrenceBaseEntityLogicalName,
            ReportViewName,
            SchemaName,
        }

        export enum SearchableAttributeMetadataProperties {
            AttributeOf,
            AttributeType,
            CalculationOf,
            CanBeSecuredForCreate,
            CanBeSecuredForRead,
            CanBeSecuredForUpdate,
            CanModifyAdditionalSettings,
            ColumnNumber,
            DefaultFormValue,
            DefaultValue,
            DeprecatedVersion,
            EntityLogicalName,
            Format,
            FormatName,
            ImeMode,
            IntroducedVersion,
            IsAuditEnabled,
            IsCustomAttribute,
            IsCustomizable,
            IsManaged,
            IsPrimaryId,
            IsPrimaryName,
            IsRenameable,
            IsSecured,
            IsValidForAdvancedFind,
            IsValidForCreate,
            IsValidForRead,
            IsValidForUpdate,
            LinkedAttributeId,
            LogicalName,
            MaxLength,
            MaxValue,
            MetadataId,
            MinValue,
            Precision,
            PrecisionSource,
            RequiredLevel,
            SchemaName,
            YomiOf,
        }

        export enum SearchableRelationshipMetadataProperties {
            HasChanged,
            Entity1IntersectAttribute,
            Entity1LogicalName,
            Entity2IntersectAttribute,
            Entity2LogicalName,
            IntersectEntityName,
            IsCustomizable,
            IntroducedVersion,
            IsCustomRelationship,
            IsManaged,
            IsValidForAdvancedFind,
            MetadataId,
            ReferencedAttribute,
            ReferencedEntity,
            ReferencingAttribute,
            ReferencingEntity,
            RelationshipType,
            SchemaName,
            SecurityTypes,
        }

        export enum MetadataConditionOperator {
            Equals,
            NotEquals,
            In,
            NotIn,
            GreaterThan,
            LessThan,
        }

        export interface IEntityMetadata {
            ActivityTypeMask: number;
            Attributes: IAttributeMetadata[];
            AutoCreateAccessTeams: any;
            AutoRouteToOwnerQueue: boolean;
            CanBeInManyToMany: ManagedProperty<boolean>;
            CanBePrimaryEntityInRelationship: ManagedProperty<boolean>;
            CanBeRelatedEntityInRelationship: ManagedProperty<boolean>;
            CanCreateAttributes: ManagedProperty<boolean>;
            CanCreateCharts: ManagedProperty<boolean>;
            CanCreateForms: ManagedProperty<boolean>;
            CanCreateViews: ManagedProperty<boolean>;
            CanModifyAdditionalSettings: ManagedProperty<boolean>;
            CanTriggerWorkflow: boolean;
            Description: Label;
            DisplayCollectionName: Label;
            DisplayName: Label;
            IconLargeName: string;
            IconMediumName: string;
            IconSmallName: string;
            IntroducedVersion: any;
            IsActivity: boolean;
            IsActivityParty: boolean;
            IsAIRUpdated: boolean;
            IsAuditEnabled: ManagedProperty<boolean>;
            IsAvailableOffline: boolean;
            IsBusinessProcessEnabled: boolean;
            IsChildEntity: boolean;
            IsConnectionsEnabled: ManagedProperty<boolean>;
            IsCustomEntity: boolean;
            IsCustomizable: ManagedProperty<boolean>;
            IsDocumentManagementEnabled: boolean;
            IsDuplicateDetectionEnabled: ManagedProperty<boolean>;
            IsEnabledForCharts: boolean;
            IsImportable: boolean;
            IsIntersect: boolean;
            IsMailMergeEnabled: ManagedProperty<boolean>;
            IsManaged: boolean;
            IsMappable: ManagedProperty<boolean>;
            IsQuickCreateEnabled: boolean;
            IsReadingPaneEnabled: boolean;
            IsRenameable: boolean;
            IsValidForAdvancedFind: boolean;
            IsValidForQueue: ManagedProperty<boolean>;
            IsVisibleInMobile: ManagedProperty<boolean>;
            IsVisibleInMobileClient: boolean;
            LogicalName: string;
            ManyToManyRelationships: ManyToManyRelationshipMetadata;
            ManyToOneRelationships: OneToManyRelationshipMetadata;
            MetadataId: string;
            ObjectTypeCode: number;
            OneToManyRelationships: OneToManyRelationshipMetadata;
            OwnershipType: "BusinessOwned" | "BusinessParented" | "None	OrganizationOwned" | "TeamOwned	UserOwned";
            PrimaryIdAttribute: string;
            PrimaryImageAttribute: string;
            PrimaryNameAttribute: string;
            Privileges: SecurityPrivilegeMetadata[];
            RecurrenceBaseEntityLogicalName: string;
            ReportViewName: string;
            SchemaName: string;
        }

        export interface SecurityPrivilegeMetadata {
            CanBeBasic: boolean;
            CanBeDeep: boolean;
            CanBeEntityReference: boolean;
            CanBeGlobal: boolean;
            CanBeLocal: boolean;
            CanBeParentEntityReference: boolean;
            ExtensionData: boolean;
            Name: string;
            PrivilegeId: string;
            PrivilegeType: "Append" | "AppendTo" | "Assign" | "Create" | "Delete" | "None" | "Read" | "Share" | "Write";
        }

        export interface OneToManyRelationshipMetadata {
            AssociatedMenuConfiguration: AssociatedMenuConfiguration;
            CascadeConfiguration: CascadeConfiguration;
            HasChanged: any;
            IntroducedVersion: any;
            IsCustomizable: ManagedProperty<boolean>;
            IsCustomRelationship: boolean;
            IsHierarchical: any;
            IsManaged: boolean;
            IsValidForAdvancedFind: boolean;
            MetadataId: string;
            ReferencedAttribute: string;
            ReferencedEntity: string;
            ReferencingAttribute: string;
            ReferencingEntity: string;
            RelationshipType: string;
            SchemaName: string;
            SecurityTypes: any;
        }

        export interface CascadeConfiguration {
            Assign: CascadeType;
            Delete: CascadeType;
            ExtensionData: CascadeType;
            Merge: CascadeType;
            Reparent: CascadeType;
            Share: CascadeType;
            Unshare: CascadeType;
        }

        export type CascadeType = "Active" | "Cascade" | "NoCascade" | "UserOwned";

        export interface ManyToManyRelationshipMetadata {
            Entity1AssociatedMenuConfiguration: AssociatedMenuConfiguration;
            Entity1IntersectAttribute: string;
            Entity1LogicalName: string;
            Entity2AssociatedMenuConfiguration: AssociatedMenuConfiguration;
            Entity2IntersectAttribute: string;
            Entity2LogicalName: string;
            HasChanged: boolean;
            IntersectEntityName: string;
            IntroducedVersion: any;
            IsCustomizable: ManagedProperty<boolean>;
            IsCustomRelationship: boolean;
            IsManaged: boolean;
            IsValidForAdvancedFind: boolean;
            MetadataId: string;
            RelationshipType: RelationshipType;
            SchemaName: string;
            SecurityTypes: SecurityType;
        }

        export interface AssociatedMenuConfiguration {
            Behavior: AssociatedMenuBehavior;
            Group: AssociatedMenuGroup;
            Label: Label;
            Order: number;
        }

        export type AssociatedMenuBehavior = "DoNotDisplay" | "UseCollectionName" | "UseLabel";

        export type AssociatedMenuGroup = "Details" | "Marketing" | "Sales" | "Service";

        export type RelationshipType = "Default" | "ManyToManyRelationship" | "OneToManyRelationship";

        export type SecurityType = "Append" | "Inheritance" | "None" | "ParentChild" | "Pointer";

        export interface IAttributeMetadata {
            AttributeOf: string;
            AttributeType: "Customer" | "DateTime" | "Decimal" | "Double" | "EntityName" | "Integer" | "Lookup" | "ManagedProperty" | "Memo" | "Money" | "Owner" | "PartyList" | "Picklist" | "State" | "Status" | "Uniqueidentifier" | "Virtual"
            AttributeTypeName: "BigIntType" | "BooleanType" | "CalendarRulesType" | "CustomerType" | "DateTimeType" | "DecimalType" | "DoubleType" | "EntityNameType" | "ImageType" | "IntegerType" | "LookupType" | "ManagedPropertyType" | "MemoType" | "MoneyType" | "OwnerType" | "PartyListType" | "PicklistType" | "StateType	StatusType" | "StringType" | "UniqueidentifierType" | "VirtualType";
            CalculationOf: any;
            CanBeSecuredForCreate: boolean;
            CanBeSecuredForRead: boolean;
            CanBeSecuredForUpdate: boolean;
            CanModifyAdditionalSettings: ManagedProperty<boolean>;
            ColumnNumber: number;
            DefaultFormValue: any;
            DefaultValue: any;
            DeprecatedVersion: any;
            Description: Label;
            DisplayName: Label;
            EntityLogicalName: string;
            Format: any;
            FormatName: string;
            ImeMode: any;
            IntroducedVersion: any;
            IsAuditEnabled: boolean;
            IsCustomAttribute: boolean;
            IsCustomizable: ManagedProperty<boolean>;
            IsManaged: boolean;
            IsPrimaryId: boolean;
            IsPrimaryName: boolean;
            IsRenameable: ManagedProperty<boolean>;
            IsSecured: boolean;
            IsValidForAdvancedFind: ManagedProperty<boolean>;
            IsValidForCreate: boolean;
            IsValidForRead: boolean;
            IsValidForUpdate: boolean;
            LinkedAttributeId: string;
            LogicalName: string;
            MaxLength: number;
            MaxValue: any;
            MetadataId: string;
            MinValue: number;
            OptionSet: any;
            Precision: any;
            PrecisionSource: any;
            RequiredLevel: ManagedProperty<string>;
            SchemaName: string;
            Targets: string[];
            YomiOf: any;
        }

        export interface ManagedProperty<T> {
            CanBeChanged: boolean;
            ManagedPropertyLogicalName: string;
            Value: T;
        }

        export interface Label {
            LocalizedLabels: LocalizedLabel[];
            UserLocalizedLabel: LocalizedLabel;
        }

        export interface LocalizedLabel {
            Label: string;
            LangaugeCode: number;
            MetadataId: string;
            HasChanged: boolean;
            IsManaged: boolean;
        }

        namespace ValueEnums {
            export enum OwnershipType {
                None,
                OrganizationOwned,
                TeamOwned,
                UserOwned,
            }

            export enum AttributeTypeCode {
                BigInt,
                Boolean,
                CalendarRules,
                Customer,
                DateTime,
                Decimal,
                Double,
                EntityName,
                Integer,
                Lookup,
                ManagedProperty,
                Memo,
                Money,
                Owner,
                PartyList,
                Picklist,
                State,
                Status,
                String,
                Uniqueidentifier,
                Virtual,
            }


            export enum AttributeRequiredLevel {
                ApplicationRequired,
                None,
                Recommended,
                SystemRequired,
            }


            export enum DateTimeFormat {
                DateAndTime,
                DateOnly,
            }

            export enum ImeMode {
                Active,
                Auto,
                Disabled,
                Inactive,
            }



            export enum IntegerFormat {
                Duration,
                Language,
                Locale,
                None,
                TimeZone,
            }


            export enum SecurityTypes {
                Append,
                Inheritance,
                None,
                ParentChild,
                Pointer,
            }

            export enum StringFormat {
                Email,
                PhoneticGuide,
                Text,
                TextArea,
                TickerSymbol,
                Url,
                VersionNumber,
            }
        }
    }

    namespace Sdk.Mdq.ValueEnums
    { }
}