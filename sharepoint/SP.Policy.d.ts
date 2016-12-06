// Type definitions for SharePoint JSOM 
// Project: https://github.com/gandjustas/sptypescript
// Definitions by: Stanislav Vyshchepan <http://blog.gandjustas.ru>, Andrey Markeev <http://markeev.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="SP.d.ts"/>

declare namespace SP {
    export namespace CompliancePolicy {
        export enum SPContainerType {
            site,//: 0,
            web,//: 1,
            list//: 2
        }

        export class SPContainerId extends ClientObject {
            static createFromList(context: ClientRuntimeContext, list: List): SPContainerId;
            static createFromWeb(context: ClientRuntimeContext, web: Web): SPContainerId;
            static createFromSite(context: ClientRuntimeContext, site: Site): SPContainerId;
            static create(context: ClientRuntimeContext, containerId: any): SPContainerId;

            get_containerType(): ContentType;
            set_containerType(value: ContentType): ContentType;

            get_listId(): SP.Guid;
            set_listId(value: SP.Guid): SP.Guid;

            get_siteId(): SP.Guid;
            set_siteId(value: SP.Guid): SP.Guid;

            get_siteUrl(): string;
            set_siteUrl(value: string): string;

            get_tenantId(): SP.Guid;
            set_tenantId(value: SP.Guid): SP.Guid;

            get_title(): string;
            set_title(value: string): string;

            get_version(): any;
            set_version(value: any): any;

            get_webId(): SP.Guid;
            set_webId(value: SP.Guid): SP.Guid;

            serialize(): SP.StringResult;
        }

        export class SPPolicyAssociation extends ClientObject {

            get_allowOverride(): boolean;
            set_allowOverride(value: boolean): boolean;

            get_comment(): string;
            set_comment(value: string): string;

            get_defaultPolicyDefinitionConfigId(): any[];
            set_defaultPolicyDefinitionConfigId(value: any[]): any[];

            get_description(): string;
            set_description(value: string): string;

            get_identity(): boolean;
            set_identity(value: boolean): boolean;

            get_name(): string;
            set_name(value: string): string;

            get_policyApplyStatus(): any;
            set_policyApplyStatus(value: any): any;

            get_policyDefinitionConfigIds(): any[];
            set_policyDefinitionConfigIds(value: any[]): any[];

            get_scope(): any;
            set_scope(value: any): any;

            get_source(): any;
            set_source(value: any): any;

            get_version(): any;
            set_version(value: any): any;

            get_whenAppliedUTC(): Date;
            set_whenAppliedUTC(value: Date): Date;

            get_whenChangedUTC(): Date;
            set_whenChangedUTC(value: Date): Date;

            get_whenCreatedUTC(): Date;
            set_whenCreatedUTC(value: Date): Date;
        }

        export class SPPolicyBinding extends ClientObject {

            get_identity(): any;
            set_identity(value: any): any;

            get_isExempt(): boolean;
            set_isExempt(value: boolean): boolean;

            get_mode(): any;
            set_mode(value: any): any;

            get_name(): string;
            set_name(value: string): string;

            get_policyApplyStatus(): any;
            set_policyApplyStatus(value: any): any;

            get_policyAssociationConfigId(): any;
            set_policyAssociationConfigId(value: any): any;

            get_policyDefinitionConfigId(): any;
            set_policyDefinitionConfigId(value: any): any;

            get_policyRuleConfigId(): any;
            set_policyRuleConfigId(value: any): any;

            get_scope(): any;
            set_scope(value: any): any;

            get_source(): any;
            set_source(value: any): any;

            get_version(): any;
            set_version(value: any): any;

            get_whenAppliedUTC(): Date;
            set_whenAppliedUTC(value: Date): Date;

            get_whenChangedUTC(): Date;
            set_whenChangedUTC(value: Date): Date;

            get_whenCreatedUTC(): Date;
            set_whenCreatedUTC(value: Date): Date;
        }

        export class SPPolicyDefinition extends ClientObject {

            get_comment(): string;
            set_comment(value: string): string;

            get_createdBy(): any;
            set_createdBy(value: any): any;

            get_defaultPolicyRuleConfigId(): any;
            set_defaultPolicyRuleConfigId(value: any): any;

            get_description(): string;
            set_description(value: string): string;

            get_enabled(): boolean;
            set_enabled(value: boolean): boolean;

            get_identity(): any;
            set_identity(value: any): any;

            get_lastModifiedBy(): any;
            set_lastModifiedBy(value: any): any;

            get_name(): string;
            set_name(value: string): string;

            get_mode(): any;
            set_mode(value: any): any;

            get_scenario(): any;
            set_scenario(value: any): any;

            get_source(): any;
            set_source(value: any): any;

            get_version(): any;
            set_version(value: any): any;

            get_whenChangedUTC(): Date;
            set_whenChangedUTC(value: Date): Date;

            get_whenCreatedUTC(): Date;
            set_whenCreatedUTC(value: Date): Date;


        }

        export class SPPolicyRule extends ClientObject {

            get_comment(): string;
            set_comment(value: string): string;

            get_createdBy(): any;
            set_createdBy(value: any): any;

            get_description(): string;
            set_description(value: string): string;

            get_enabled(): boolean;
            set_enabled(value: boolean): boolean;
            get_identity(): any;
            set_identity(value: any): any;

            get_lastModifiedBy(): any;
            set_lastModifiedBy(value: any): any;

            get_mode(): any;
            set_mode(value: any): any;

            get_name(): string;
            set_name(value: string): string;

            get_policyDefinitionConfigId(): any;
            set_policyDefinitionConfigId(value: any): any;

            get_priority(): any;
            set_priority(value: any): any;

            get_ruleBlob(): any;
            set_ruleBlob(value: any): any;

            get_whenChangedUTC(): Date;
            set_whenChangedUTC(value: Date): Date;

            get_whenCreatedUTC(): Date;
            set_whenCreatedUTC(value: Date): Date;
        }

        export class SPPolicyStore extends ClientObject {
            constructor(context: ClientRuntimeContext, web: Web);

            static createPolicyDefinition(context: ClientRuntimeContext): SPPolicyDefinition;
            static createPolicyBinding(context: ClientRuntimeContext): SPPolicyBinding;
            static createPolicyAssociation(context: ClientRuntimeContext): SPPolicyAssociation;
            static createPolicyRule(context: ClientRuntimeContext): SPPolicyRule;


            updatePolicyRule(policyRule: SPPolicyRule): void;

            getPolicyRule(policyRuleId: any, throwIfNull: boolean): SPPolicyRule;

            deletePolicyRule(policyRuleId: any): void;

            notifyUnifiedPolicySync(notificationId: any, syncSvcUrl: string, changeInfos: any, syncNow: boolean, fullSyncForTenant: boolean): void;

            updatePolicyDefinition(policyDefinition: SPPolicyDefinition): void;

            getPolicyDefinition(policyDefinitionId: any): SPPolicyDefinition;

            deletePolicyDefinition(policyDefinitionId: any): void;

            getPolicyDefinitions(scenario: any): ClientObjectList<SPPolicyDefinition>;

            updatePolicyBinding(policyBinding: SPPolicyBinding): void;

            getPolicyBinding(policyBindingId: any): SPPolicyBinding;

            deletePolicyBinding(policyBindingId: any): void;

            updatePolicyAssociation(policyAssociation: SPPolicyAssociation): void;

            getPolicyAssociation(policyAssociationId: any): SPPolicyAssociation;

            getPolicyAssociationForContainer(containerId: SPContainerId): SPPolicyAssociation;

            deletePolicyAssociation(policyAssociationId: any): void;
        }

        export class SPPolicyStoreProxy extends ClientObject {
            constructor(context: ClientRuntimeContext, web: Web);

            get_policyStoreUrl(): string;
        }

    }

    export namespace Discovery {

        export enum ExportStatus {
            notStarted,//: 0,
            started,//: 1,
            complete,//: 2,
            failed//: 3
        }

        export class Case extends ClientObject {
            constructor(context: ClientRuntimeContext, web: Web);
            getExportContent(sourceIds: number[]): SP.StringResult;
        }
        export class Export extends ClientObject {
            constructor(context: ClientRuntimeContext, item: ListItem);
            get_status(): ExportStatus;
            set_status(value: ExportStatus): ExportStatus;
            update(): void;
            getExportContent(): SP.StringResult;
        }
    }

    export namespace InformationPolicy {
        export class ProjectPolicy extends SP.ClientObject {
            constructor(context: ClientRuntimeContext, objectPath: ObjectPath);
            get_description(): string;

            get_emailBody(): string;
            set_emailBody(value: string): string;

            get_emailBodyWithTeamMailbox(): string;
            set_emailBodyWithTeamMailbox(value: string): string;

            get_emailSubject(): string;
            set_emailSubject(value: string): string;

            get_name(): string;
            savePolicy(): void;


            static getProjectPolicies(context: ClientRuntimeContext, web: Web): ClientObjectList<ProjectPolicy>;
            static getCurrentlyAppliedProject(context: ClientRuntimeContext, web: Web): ProjectPolicy;
            static applyProjectPolicy(context: ClientRuntimeContext, web: Web, projectPolicy: ProjectPolicy): void;
            static openProject(context: ClientRuntimeContext, web: Web): void;
            static closeProject(context: ClientRuntimeContext, web: Web): void;
            static postponeProject(context: ClientRuntimeContext, web: Web): void;
            static doesProjectHavePolicy(context: ClientRuntimeContext, web: Web): SP.BooleanResult;
            static isProjectClosed(context: ClientRuntimeContext, web: Web): SP.BooleanResult;
            static getProjectCloseDate(context: ClientRuntimeContext, web: Web): SP.DateTimeResult;
            static getProjectExpirationDate(context: ClientRuntimeContext, web: Web): SP.DateTimeResult;
        }
    }
}