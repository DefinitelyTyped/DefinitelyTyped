// Type definitions for SharePoint JSOM 
// Project: https://github.com/gandjustas/sptypescript
// Definitions by: Stanislav Vyshchepan <http://blog.gandjustas.ru>, Andrey Markeev <http://markeev.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="SP.d.ts"/>

declare namespace SP {
    export namespace WebParts {
        export class LimitedWebPartManager extends SP.ClientObject {
            get_hasPersonalizedParts(): boolean;
            get_scope(): SP.WebParts.PersonalizationScope;
            get_webParts(): SP.WebParts.WebPartDefinitionCollection;
            addWebPart(webPart: SP.WebParts.WebPart, zoneId: string, zoneIndex: number): SP.WebParts.WebPartDefinition;
            importWebPart(webPartXml: string): SP.WebParts.WebPartDefinition;
        }
        export enum PersonalizationScope {
            user,
            shared,
        }
        export class TileData extends SP.ClientValueObject {
            get_backgroundImageLocation(): string;
            set_backgroundImageLocation(value: string): void;
            get_description(): string;
            set_description(value: string): void;
            get_iD(): number;
            set_iD(value: number): void;
            get_linkLocation(): string;
            set_linkLocation(value: string): void;
            get_tileOrder(): number;
            set_tileOrder(value: number): void;
            get_title(): string;
            set_title(value: string): void;
            get_typeId(): string;
            writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
            constructor();
        }
        export class WebPart extends SP.ClientObject {
            get_hidden(): boolean;
            set_hidden(value: boolean): void;
            get_isClosed(): boolean;
            get_properties(): SP.PropertyValues;
            get_subtitle(): string;
            get_title(): string;
            set_title(value: string): void;
            get_titleUrl(): string;
            set_titleUrl(value: string): void;
            get_zoneIndex(): number;
        }
        export class WebPartDefinition extends SP.ClientObject {
            get_id(): SP.Guid;
            get_webPart(): SP.WebParts.WebPart;
            saveWebPartChanges(): void;
            closeWebPart(): void;
            openWebPart(): void;
            deleteWebPart(): void;
            moveWebPartTo(zoneID: string, zoneIndex: number): void;
        }
        export class WebPartDefinitionCollection extends SP.ClientObjectCollection<WebPartDefinition> {
            itemAt(index: number): SP.WebParts.WebPartDefinition;
            get_item(index: number): SP.WebParts.WebPartDefinition;
            getById(id: SP.Guid): SP.WebParts.WebPartDefinition;
            getByControlId(controlId: string): SP.WebParts.WebPartDefinition;
        }
    }
}