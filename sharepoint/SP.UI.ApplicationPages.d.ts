// Type definitions for SharePoint JSOM 
// Project: https://github.com/gandjustas/sptypescript
// Definitions by: Stanislav Vyshchepan <http://blog.gandjustas.ru>, Andrey Markeev <http://markeev.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="SP.d.ts"/>

declare namespace SP {
    export namespace UI {
        export namespace ApplicationPages {
            export class SelectorSelectionEventArgs extends Sys.EventArgs {
                constructor(entities: any);
                get_entities(): any;
            }
            export interface ISelectorComponent {
                get_selectedEntities(): any;
                set_selectedEntities(value: any): void;
                get_callback(): (sender: any, e: Sys.EventArgs) => void;
                set_callback(value: (sender: any, e: Sys.EventArgs) => void): void;
                get_scopeKey(): string;
                get_componentType(): SP.UI.ApplicationPages.SelectorType;
                revertTo(ent: SP.UI.ApplicationPages.ResolveEntity): void;
                removeEntity(ent: SP.UI.ApplicationPages.ResolveEntity): void;
                setEntity(ent: SP.UI.ApplicationPages.ResolveEntity): void;
            }
            export enum SelectorType {
                none,
                resource,
                people,
                people_And_Resource,
                event,
            }
            export class CalendarSelector extends Sys.Component {
                static instance(): SP.UI.ApplicationPages.CalendarSelector;
                registerSelector(selector: SP.UI.ApplicationPages.ISelectorComponent): void;
                getSelector(type: SP.UI.ApplicationPages.SelectorType, scopeKey: string): SP.UI.ApplicationPages.ISelectorComponent;
                addHandler(scopeKey: string, people: boolean, resource: boolean, handler: (sender: any, selection: SP.UI.ApplicationPages.SelectorSelectionEventArgs) => void): void;
                revertTo(scopeKey: string, ent: SP.UI.ApplicationPages.ResolveEntity): void;
                removeEntity(scopeKey: string, ent: SP.UI.ApplicationPages.ResolveEntity): void;
                constructor();
            }
            export class BaseSelectorComponent implements SP.UI.ApplicationPages.ISelectorComponent {
                constructor(key: string, type: SP.UI.ApplicationPages.SelectorType);
                get_scopeKey(): string;
                get_componentType(): SP.UI.ApplicationPages.SelectorType;
                get_selectedEntities(): any;
                set_selectedEntities(value: any): void;
                get_callback(): (sender: any, e: Sys.EventArgs) => void;
                set_callback(value: (sender: any, e: Sys.EventArgs) => void): void;
                revertTo(ent: SP.UI.ApplicationPages.ResolveEntity): void;
                removeEntity(ent: SP.UI.ApplicationPages.ResolveEntity): void;
                setEntity(ent: SP.UI.ApplicationPages.ResolveEntity): void;
            }
            export interface ICalendarController {
                moveToDate(date: string): void;
                moveToViewType(viewType: string): void;
                moveToViewDate(scope: SP.UI.ApplicationPages.CalendarScope, date: string): void;
                moveToView(scope: SP.UI.ApplicationPages.CalendarScope): void;
                expandAll(): void;
                collapseAll(): void;
                refreshItems(): void;
                getActiveScope(): SP.UI.ApplicationPages.CalendarScope;
                newItemDialog(contentTypeId: string): void;
                deleteItem(itemId: string): void;
            }
            export enum CalendarScope {
                nothing,
                monthly,
                weeklyGroup,
                daily,
                weekly,
                dailyGroup,
            }
            export class CalendarInstanceRepository {
                static registerInstance(instanceId: string, contoller: SP.UI.ApplicationPages.ICalendarController): void;
                static lookupInstance(instanceId: string): SP.UI.ApplicationPages.ICalendarController;
                static firstInstance(): SP.UI.ApplicationPages.ICalendarController;
            }
            export class ResolveEntity {
                tYPE_EVENT: string;
                tYPE_USER: string;
                tYPE_RESOURCE: string;
                tYPE_EXCHANGE: string;
                entityType: string;
                displayName: string;
                email: string;
                accountName: string;
                id: string;
                members: SP.UI.ApplicationPages.ResolveEntity[];
                needResolve: boolean;
                isGroup: boolean;
                get_key(): string;
                constructor();
            }
            export class ClientPeoplePickerQueryParameters extends SP.ClientValueObject {
                get_allowEmailAddresses(): boolean;
                set_allowEmailAddresses(value: boolean): void;
                get_allowMultipleEntities(): boolean;
                set_allowMultipleEntities(value: boolean): void;
                get_allUrlZones(): boolean;
                set_allUrlZones(value: boolean): void;
                get_enabledClaimProviders(): string;
                set_enabledClaimProviders(value: string): void;
                get_forceClaims(): boolean;
                set_forceClaims(value: boolean): void;
                get_maximumEntitySuggestions(): number;
                set_maximumEntitySuggestions(value: number): void;
                get_principalSource(): SP.Utilities.PrincipalSource;
                set_principalSource(value: SP.Utilities.PrincipalSource): void;
                get_principalType(): SP.Utilities.PrincipalType;
                set_principalType(value: SP.Utilities.PrincipalType): void;
                get_queryString(): string;
                set_queryString(value: string): void;
                get_required(): boolean;
                set_required(value: boolean): void;
                get_sharePointGroupID(): number;
                set_sharePointGroupID(value: number): void;
                get_urlZone(): SP.UrlZone;
                set_urlZone(value: SP.UrlZone): void;
                get_urlZoneSpecified(): boolean;
                set_urlZoneSpecified(value: boolean): void;
                get_web(): SP.Web;
                set_web(value: SP.Web): void;
                get_webApplicationID(): SP.Guid;
                set_webApplicationID(value: SP.Guid): void;
                get_typeId(): string;
                writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
                constructor();
            }
            export class ClientPeoplePickerWebServiceInterface {
                static clientPeoplePickerSearchUser(context: SP.ClientRuntimeContext, queryParams: SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters): SP.StringResult;
                static clientPeoplePickerResolveUser(context: SP.ClientRuntimeContext, queryParams: SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters): SP.StringResult;
            }
            export class PeoplePickerWebServiceInterface {
                static getSearchResultsByHierarchy(context: SP.ClientRuntimeContext, providerID: string, hierarchyNodeID: string, entityTypes: string, contextUrl: string): SP.StringResult;
                static getSearchResults(context: SP.ClientRuntimeContext, searchPattern: string, providerID: string, hierarchyNodeID: string, entityTypes: string): SP.StringResult;
            }
        }
    }
}