// Type definitions for SharePoint JSOM
// Project: https://github.com/gandjustas/sptypescript
// Definitions by: Stanislav Vyshchepan <http://blog.gandjustas.ru>, Andrey Markeev <http://markeev.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="SP.d.ts"/>

declare namespace SP {
    export namespace BusinessData {
        export class AppBdcCatalog extends SP.ClientObject {
            getEntity(namespace: string, name: string): SP.BusinessData.Entity;
            getLobSystemProperty(lobSystemName: string, propertyName: string): SP.StringResult;
            setLobSystemProperty(lobSystemName: string, propertyName: string, propertyValue: string): void;
            getLobSystemInstanceProperty(lobSystemName: string, lobSystemInstanceName: string, propertyName: string): SP.StringResult;
            setLobSystemInstanceProperty(lobSystemName: string, lobSystemInstanceName: string, propertyName: string, propertyValue: string): void;
            getConnectionId(lobSystemName: string, lobSystemInstanceName: string): SP.StringResult;
            setConnectionId(lobSystemName: string, lobSystemInstanceName: string, connectionId: string): void;
            getPermissibleConnections(): string[];
        }
        export class Entity extends SP.ClientObject {
            get_estimatedInstanceCount(): number;
            get_name(): string;
            get_namespace(): string;
            getIdentifiers(): SP.BusinessData.Collections.EntityIdentifierCollection;
            getIdentifierCount(): SP.IntResult;
            getLobSystem(): SP.BusinessData.LobSystem;
            getCreatorView(methodInstanceName: string): SP.BusinessData.EntityView;
            getUpdaterView(updaterName: string): SP.BusinessData.EntityView;
            getFinderView(methodInstanceName: string): SP.BusinessData.EntityView;
            getSpecificFinderView(specificFinderName: string): SP.BusinessData.EntityView;
            getDefaultSpecificFinderView(): SP.BusinessData.EntityView;
            findSpecificDefault(identity: SP.BusinessData.Runtime.EntityIdentity, lobSystemInstance: SP.BusinessData.LobSystemInstance): SP.BusinessData.Runtime.EntityInstance;
            findSpecific(identity: SP.BusinessData.Runtime.EntityIdentity, specificFinderName: string, lobSystemInstance: SP.BusinessData.LobSystemInstance): SP.BusinessData.Runtime.EntityInstance;
            findSpecificDefaultByBdcId(bdcIdentity: string, lobSystemInstance: SP.BusinessData.LobSystemInstance): SP.BusinessData.Runtime.EntityInstance;
            findSpecificByBdcId(bdcIdentity: string, specificFinderName: string, lobSystemInstance: SP.BusinessData.LobSystemInstance): SP.BusinessData.Runtime.EntityInstance;
            findFiltered(filterList: SP.BusinessData.Collections.FilterCollection, nameOfFinder: string, lobSystemInstance: SP.BusinessData.LobSystemInstance): SP.BusinessData.Collections.EntityInstanceCollection;
            findAssociated(entityInstance: SP.BusinessData.Runtime.EntityInstance, associationName: string, filterList: SP.BusinessData.Collections.FilterCollection, lobSystemInstance: SP.BusinessData.LobSystemInstance): SP.BusinessData.Collections.EntityInstanceCollection;
            getFilters(methodInstanceName: string): SP.BusinessData.Collections.FilterCollection;
            execute(methodInstanceName: string, lobSystemInstance: SP.BusinessData.LobSystemInstance, inputParams: any[]): SP.BusinessData.MethodExecutionResult;
            getAssociationView(associationName: string): SP.BusinessData.EntityView;
            create(fieldValues: SP.BusinessData.Runtime.EntityFieldValueDictionary, lobSystemInstance: SP.BusinessData.LobSystemInstance): SP.BusinessData.Runtime.EntityIdentity;
            subscribe(eventType: SP.BusinessData.Runtime.EntityEventType, notificationCallback: SP.BusinessData.Runtime.NotificationCallback, onBehalfOfUser: string, subscriberName: string, lobSystemInstance: SP.BusinessData.LobSystemInstance): SP.BusinessData.Runtime.Subscription;
            unsubscribe(subscription: SP.BusinessData.Runtime.Subscription, onBehalfOfUser: string, unsubscriberName: string, lobSystemInstance: SP.BusinessData.LobSystemInstance): void;
        }
        export class EntityField extends SP.ClientObject {
            get_containsLocalizedDisplayName(): boolean;
            get_defaultDisplayName(): string;
            get_localizedDisplayName(): string;
            get_name(): string;
        }
        export class EntityIdentifier extends SP.ClientObject {
            get_identifierType(): string;
            get_name(): string;
            getDefaultDisplayName(): SP.StringResult;
            containsLocalizedDisplayName(): SP.BooleanResult;
            getLocalizedDisplayName(): SP.StringResult;
        }
        export class EntityView extends SP.ClientObject {
            get_fields(): SP.BusinessData.Collections.EntityFieldCollection;
            get_name(): string;
            get_relatedSpecificFinderName(): string;
            getDefaultValues(): SP.BusinessData.Runtime.EntityFieldValueDictionary;
            getXmlSchema(): SP.StringResult;
            getTypeDescriptor(fieldDotNotation: string): SP.BusinessData.TypeDescriptor;
            getType(fieldDotNotation: string): SP.StringResult;
        }
        export class Filter extends SP.ClientObject {
            get_defaultDisplayName(): string;
            get_filterField(): string;
            get_filterType(): string;
            get_localizedDisplayName(): string;
            get_name(): string;
            get_valueCount(): number;
        }
        export class LobSystem extends SP.ClientObject {
            get_name(): string;
            getLobSystemInstances(): SP.BusinessData.Collections.LobSystemInstanceCollection;
        }
        export class LobSystemInstance extends SP.ClientObject {
            get_name(): string;
        }
        export class MethodExecutionResult extends SP.ClientObject {
            get_returnParameterCollection(): SP.BusinessData.ReturnParameterCollection;
        }
        export class ReturnParameterCollection extends SP.ClientObjectCollection<SP.BusinessData.Runtime.EntityFieldValueDictionary> {
            itemAt(index: number): SP.BusinessData.Runtime.EntityFieldValueDictionary;
            get_item(index: number): SP.BusinessData.Runtime.EntityFieldValueDictionary;
        }
        export class TypeDescriptor extends SP.ClientObject {
            get_containsReadOnly(): boolean;
            get_isCollection(): boolean;
            get_isReadOnly(): boolean;
            get_name(): string;
            get_typeName(): string;
            containsLocalizedDisplayName(): SP.BooleanResult;
            getLocalizedDisplayName(): SP.StringResult;
            getDefaultDisplayName(): SP.StringResult;
            isRoot(): SP.BooleanResult;
            isLeaf(): SP.BooleanResult;
            getChildTypeDescriptors(): SP.BusinessData.Collections.TypeDescriptorCollection;
            getParentTypeDescriptor(): SP.BusinessData.TypeDescriptor;
        }
        export namespace Collections {
            export class EntityFieldCollection extends SP.ClientObjectCollection<SP.BusinessData.EntityField> {
                itemAt(index: number): SP.BusinessData.EntityField;
                get_item(index: number): SP.BusinessData.EntityField;
            }
            export class EntityIdentifierCollection extends SP.ClientObjectCollection<SP.BusinessData.EntityIdentifier> {
                itemAt(index: number): SP.BusinessData.EntityIdentifier;
                get_item(index: number): SP.BusinessData.EntityIdentifier;
            }
            export class EntityInstanceCollection extends SP.ClientObjectCollection<SP.BusinessData.Runtime.EntityInstance> {
                itemAt(index: number): SP.BusinessData.Runtime.EntityInstance;
                get_item(index: number): SP.BusinessData.Runtime.EntityInstance;
            }
            export class FilterCollection extends SP.ClientObjectCollection<SP.BusinessData.Filter> {
                itemAt(index: number): SP.BusinessData.Filter;
                get_item(index: number): SP.BusinessData.Filter;
                setFilterValue(inputFilterName: string, valueIndex: number, value: any): void;
            }
            export class LobSystemInstanceCollection extends SP.ClientObjectCollection<SP.BusinessData.LobSystemInstance> {
                itemAt(index: number): SP.BusinessData.LobSystemInstance;
                get_item(index: number): SP.BusinessData.LobSystemInstance;
            }
            export class TypeDescriptorCollection extends SP.ClientObjectCollection<SP.BusinessData.TypeDescriptor> {
                itemAt(index: number): SP.BusinessData.TypeDescriptor;
                get_item(index: number): SP.BusinessData.TypeDescriptor;
            }
        }

        export namespace Infrastructure {
            export class ExternalSubscriptionStore extends SP.ClientObject {
                constructor(context: SP.ClientRuntimeContext, web: SP.Web);
                static newObject(context: SP.ClientRuntimeContext, web: SP.Web): SP.BusinessData.Infrastructure.ExternalSubscriptionStore;
                indexStore(): void;
            }
        }

        export namespace Runtime {
            export enum EntityEventType {
                none,
                itemAdded,
                itemUpdated,
                itemDeleted,
            }
            export class EntityFieldValueDictionary extends SP.ClientObject {
                get_fieldValues(): any;
                get_item(fieldName: string): any;
                set_item(fieldName: string, value: any): void;
                refreshLoad(): void;
                fromXml(xml: string): void;
                toXml(): SP.StringResult;
                createInstance(fieldInstanceDotNotation: string, fieldDotNotation: string): void;
                createCollectionInstance(fieldDotNotation: string, size: number): void;
                getCollectionSize(fieldDotNotation: string): SP.IntResult;
            }
            export class EntityIdentity extends SP.ClientObject {
                get_fieldValues(): any;
                get_item(fieldName: string): any;
                constructor(context: SP.ClientRuntimeContext, identifierValues: any[]);
                get_identifierCount(): number;
                static newObject(context: SP.ClientRuntimeContext, identifierValues: any[]): SP.BusinessData.Runtime.EntityIdentity;
                refreshLoad(): void;
            }
            export class EntityInstance extends SP.ClientObject {
                get_fieldValues(): any;
                get_item(fieldName: string): any;
                set_item(fieldName: string, value: any): void;
                refreshLoad(): void;
                createInstance(fieldInstanceDotNotation: string, fieldDotNotation: string): void;
                createCollectionInstance(fieldDotNotation: string, size: number): void;
                getIdentity(): SP.BusinessData.Runtime.EntityIdentity;
                deleteObject(): void;
                update(): void;
                fromXml(xml: string): void;
                toXml(): SP.StringResult;
            }
            export class NotificationCallback extends SP.ClientObject {
                constructor(context: SP.ClientRuntimeContext, notificationEndpoint: string);
                get_notificationContext(): string;
                set_notificationContext(value: string): void;
                get_notificationEndpoint(): string;
                get_notificationForwarderType(): string;
                set_notificationForwarderType(value: string): void;
                static newObject(context: SP.ClientRuntimeContext, notificationEndpoint: string): SP.BusinessData.Runtime.NotificationCallback;
            }
            export class Subscription extends SP.ClientObject {
                constructor(context: SP.ClientRuntimeContext, id: any, hash: string);
                get_hash(): string;
                get_iD(): any;
                static newObject(context: SP.ClientRuntimeContext, id: any, hash: string): SP.BusinessData.Runtime.Subscription;
            }
        }
    }
}