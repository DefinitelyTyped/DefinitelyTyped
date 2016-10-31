// Type definitions for SharePoint JSOM 
// Project: https://github.com/gandjustas/sptypescript
// Definitions by: Stanislav Vyshchepan <http://blog.gandjustas.ru>, Andrey Markeev <http://markeev.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="SP.d.ts"/>

declare namespace SP {
    export namespace Workflow {
        export class WorkflowAssociation extends SP.ClientObject {
            get_allowManual(): boolean;
            set_allowManual(value: boolean): void;
            get_associationData(): string;
            set_associationData(value: string): void;
            get_autoStartChange(): boolean;
            set_autoStartChange(value: boolean): void;
            get_autoStartCreate(): boolean;
            set_autoStartCreate(value: boolean): void;
            get_baseId(): SP.Guid;
            get_created(): Date;
            get_description(): string;
            set_description(value: string): void;
            get_enabled(): boolean;
            set_enabled(value: boolean): void;
            get_historyListTitle(): string;
            set_historyListTitle(value: string): void;
            get_id(): SP.Guid;
            get_instantiationUrl(): string;
            get_internalName(): string;
            get_isDeclarative(): boolean;
            get_listId(): SP.Guid;
            get_modified(): Date;
            get_name(): string;
            set_name(value: string): void;
            get_taskListTitle(): string;
            set_taskListTitle(value: string): void;
            get_webId(): SP.Guid;
            update(): void;
            deleteObject(): void;
        }
        export class WorkflowAssociationCollection extends SP.ClientObjectCollection<WorkflowAssociation> {
            itemAt(index: number): SP.Workflow.WorkflowAssociation;
            get_item(index: number): SP.Workflow.WorkflowAssociation;
            getById(associationId: SP.Guid): SP.Workflow.WorkflowAssociation;
            add(parameters: SP.Workflow.WorkflowAssociationCreationInformation): SP.Workflow.WorkflowAssociation;
            getByName(name: string): SP.Workflow.WorkflowAssociation;
        }
        export class WorkflowAssociationCreationInformation extends SP.ClientValueObject {
            get_contentTypeAssociationHistoryListName(): string;
            set_contentTypeAssociationHistoryListName(value: string): void;
            get_contentTypeAssociationTaskListName(): string;
            set_contentTypeAssociationTaskListName(value: string): void;
            get_historyList(): SP.List;
            set_historyList(value: SP.List): void;
            get_name(): string;
            set_name(value: string): void;
            get_taskList(): SP.List;
            set_taskList(value: SP.List): void;
            get_template(): SP.Workflow.WorkflowTemplate;
            set_template(value: SP.Workflow.WorkflowTemplate): void;
            get_typeId(): string;
            writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
            constructor();
        }
        export class WorkflowTemplate extends SP.ClientObject {
            get_allowManual(): boolean;
            get_associationUrl(): string;
            get_autoStartChange(): boolean;
            get_autoStartCreate(): boolean;
            get_description(): string;
            get_id(): SP.Guid;
            get_isDeclarative(): boolean;
            get_name(): string;
            get_permissionsManual(): SP.BasePermissions;
        }
        export class WorkflowTemplateCollection extends SP.ClientObjectCollection<WorkflowTemplate> {
            itemAt(index: number): SP.Workflow.WorkflowTemplate;
            get_item(index: number): SP.Workflow.WorkflowTemplate;
            getById(templateId: SP.Guid): SP.Workflow.WorkflowTemplate;
            getByName(name: string): SP.Workflow.WorkflowTemplate;
        }
    }
}