import { AppHelper, Job } from "./index";

interface connectionObject {
    clientKey: string;
    clientSecret: string;
    username: string;
    password: string;
}

interface eachCB<T, U> {
    (this: T, docId: string, node: U): void;
}

interface gitanaCallback<T> {
    (this: T, error?: Error): void;
}

interface jobCallback<T> {
    (this: T, job: Job): void;
}

declare namespace Gitana {
    class Base {
        extend(): any;

        then(callback: gitanaCallback<this>): this;
    }

    class AbstractApplicationObject extends AbstractPlatformObject {
        constructor(application: any, object: any);

        base(): void;

        ref(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): string;

        static valueOf(type: any): any;
    }

    class AbstractClusterObject extends AbstractObject {
        constructor(cluster: any, object: any);

        base(): void;

        ref(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class AbstractDirectoryObject extends AbstractPlatformObject {
        constructor(directory: any, object: any);

        base(): void;

        ref(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class AbstractDomainObject {
        constructor(domain: any, object: any);

        base(): void;

        ref(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class AbstractMap extends AbstractPersistable {
        constructor(driver: any, object: any);

        asArray(): any[];

        base(): void;

        buildObject(json: any): void;

        chainCopyState(otherObject: any): void;

        clear(): void;

        count(callback: any): any;

        each(callback: eachCB<this, any>): this;

        eachX(callback: eachCB<this, any>): this;

        filter(callback: any): any;

        get(key: any): any;

        handleResponse(response: any): void;

        keepOne(emptyHandler: any): any;

        limit(size: any): any;

        offset(callback: any): any;

        paginate(pagination: any): any;

        refs(): any;

        select(key: any): any;

        size(callback: any): number;

        sort(comparator: any): any;

        totalRows(callback: any): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class AbstractNode extends AbstractRepositoryObject {
        constructor(branch: any, object: any);

        addFeature(featureId: string, featureConfig: any): any;

        attach(attachmentId: string, contentType: any, data: any, filename: any): NodeAttachment;

        attachment(attachmentId: string): NodeAttachment;

        attachmentDownloadUri(attachmentId: string): string;

        base(): void;

        chainCopyState(otherObject: any): void;

        changeQName(qname: any): any;

        changeTypeQName(typeQName: any): any;

        clone(): any;

        getBranch(): Branch;

        getBranchId(): string;

        getFeature(featureId: string, callback?: any): any;

        getFeatureIds(callback: any): any;

        getPreviewUri(name: any, config: any): string;

        getQName(): string;

        getTypeQName(): string;

        getUri(): string;

        handleSystemProperties(response: any): void;

        hasFeature(featureId: any, callback: any): any;

        isAssociation(): boolean;

        isContainer(): boolean;

        listAttachments(local?: any): NodeAttachmentMap;

        ref(): string;

        refresh(): this;

        removeFeature(featureId: string): any;

        stats(): any;

        touch(): this;

        unattach(attachmentId: string): this;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class AbstractObject extends AbstractPersistable {
        constructor(driver: any, object: any);

        base(): void;

        chainCopyState(otherObject: any): void;

        get(key: string): any;

        getDescription(): string;

        getId(): string;

        getProxiedUri(): string;

        getSystemMetadata(): SystemMetadata;

        getTitle(): string;

        getType(): string;

        getUri(): string;

        handleSystemProperties(response: any): void;

        loadFrom(anotherObject: any): void;

        ref(): string;

        replacePropertiesWith(object: any): void;

        set(key: string, value: any): void;

        stringify(pretty: any): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class AbstractPersistable extends Chainable {
        constructor(driver: any, object: any);

        base(): void;

        handleResponse(response: any): void;

        handleSystemProperties(response: any): void;

        json(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): string;

        static valueOf(type: any): any;
    }

    class AbstractPlatformDataStore extends DataStore {
        constructor(platform: any, object: any);

        base(): void;

        copy(target: any, asynchronous: any, config: any): any;

        findStack(): any;

        loadInfo(callback: any): any;

        ref(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class AbstractPlatformObject extends AbstractSelfableACLObject {
        constructor(platform: any, object: any);

        base(): void;

        getRepository(): Repository;

        getCluster(): Cluster;

        copy(target: any, asynchronous: any, config: any): any;

        exportArchive(settings: any): any;

        importArchive(settings: any, reportFn: any): any;

        ref(): string;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class AbstractPlatformObjectMap extends AbstractMap {
        constructor(platform: any, object: any);

        base(): void;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class AbstractRegistrarObject extends AbstractPlatformObject {
        constructor(registrar: any, object: any);

        base(): void;

        ref(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class AbstractRepositoryObject extends AbstractPlatformObject {
        constructor(repository: any, object: any);

        base(): void;

        ref(): any;

        trap(callback: gitanaCallback<this>): this;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class AbstractSelfableACLObject extends AbstractSelfableObject {
        constructor(driver: any, object: any);

        base(): void;

        checkAuthority(principal: any, authorityId: any, callback: any): any;

        checkPermission(principal: any, permissionId: any, callback: any): any;

        grantAuthority(principal: any, authorityId: any): any;

        listAuthorities(principal: any, callback: any): any;

        loadACL(callback: any): any;

        loadAuthorityGrants(principalIds: any, callback: any): any;

        revokeAllAuthorities(principal: any): any;

        revokeAuthority(principal: any, authorityId: any): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class AbstractSelfableObject extends AbstractObject {
        constructor(driver: any, object: any);

        base(): void;

        del(): any;

        reload(): this;

        update(): this;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class AbstractVaultObject {
        constructor(vault: any, object: any);

        base(): void;

        ref(): string;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class AbstractWebHostObject {
        constructor(webhost: any, object: any);

        base(): void;

        ref(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class AccessPolicy {
        constructor(platform: any, object: any);

        base(): void;

        clone(): any;

        getType(): any;

        getUri(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class AccessPolicyMap {
        constructor(platform: any, object: any);

        base(): void;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Activity {
        constructor(datastore: any, object: any);

        base(): void;

        clone(): any;

        del(): any;

        getObjectDataStoreId(): any;

        getObjectDataStoreTitle(): any;

        getObjectDataStoreTypeId(): any;

        getObjectId(): any;

        getObjectTitle(): any;

        getObjectTypeId(): any;

        getOtherDataStoreId(): any;

        getOtherDataStoreTitle(): any;

        getOtherDataStoreTypeId(): any;

        getOtherId(): any;

        getOtherTitle(): any;

        getOtherTypeId(): any;

        getTimestamp(): any;

        getType(): any;

        getUri(): any;

        getUserDomainId(): any;

        getUserEmail(): any;

        getUserId(): any;

        getUserName(): any;

        getUserTitle(): any;

        reload(): any;

        update(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class ActivityMap {
        constructor(datastore: any, object: any);

        base(): void;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class AppHelper extends AbstractObject {
        constructor(platform: any, config: any);

        application(): Application;

        base(): void;

        datastore(key: string): DataStore;

        init(callback: any): void;

        platform(): Platform;

        project(): Project;

        stack(): Stack;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Application extends AbstractPlatformObject {
        constructor(platform: any, object: any);

        base(): void;

        checkEmailAuthorities(checks: any, callback: any): any;

        checkEmailPermissions(checks: any, callback: any): any;

        checkEmailProviderAuthorities(checks: any, callback: any): any;

        checkEmailProviderPermissions(checks: any, callback: any): any;

        checkMessageAuthorities(checks: any, callback: any): any;

        checkMessagePermissions(checks: any, callback: any): any;

        checkPageRenditionAuthorities(deploymentKey: any, checks: any, callback: any): any;

        checkPageRenditionPermissions(deploymentKey: any, checks: any, callback: any): any;

        checkRegistrationAuthorities(checks: any, callback: any): any;

        checkRegistrationPermissions(checks: any, callback: any): any;

        checkSettingAuthorities(checks: any, callback: any): any;

        checkSettingPermissions(checks: any, callback: any): any;

        clone(): any;

        createEmail(object: any): any;

        createEmailProvider(object: any): any;

        createMessage(object: any): any;

        createPageRendition(deploymentKey: any, object: any): any;

        createRegistration(object: any): any;

        createSettings(object: any): any;

        deploy(deploymentKey: any): any;

        findDeployedApplication(deploymentKey: any): any;

        getType(): string;

        getUri(): string;

        invalidateAllPageRenditions(deploymentKey: any): any;

        listAutoClientMappingObjects(callback: any, pagination: any): any;

        listEmailProviders(pagination: any): EmailProviderMap;

        listEmails(pagination: any): EmailMap;

        listMessages(pagination: any): MessageMap;

        listPageRenditions(deploymentKey: any, pagination: any): any;

        listRegistrations(pagination: any): any;

        listSettings(pagination: any): SettingsMap;

        listTrustedDomainMappingObjects(callback: any, pagination: any): any;

        loadDeploymentInfo(deploymentKey: any, callback: any): any;

        queryEmailProviders(query: any, pagination: any): EmailProviderMap;

        queryEmails(query: any, pagination: any): EmailMap;

        queryMessages(query: any, pagination: any): MessageMap;

        queryPageRenditions(deploymentKey: any, query: any, pagination: any): any;

        queryRegistrations(query: any, pagination: any): any;

        querySettings(query: any, pagination: any): SettingsMap;

        readApplicationPrincipalSettings(...args: any[]): any;

        readApplicationSettings(scope: any, key: any): any;

        readEmail(emailId: any): Email;

        readEmailProvider(emailProviderId: any): EmailProvider;

        readMessage(messageId: any): Message;

        readPageRendition(deploymentKey: any, pageRenditionIdOrKey: any): any;

        readRegistration(registrationId: any): any;

        readSettings(settingId: any): any;

        refreshDeploymentKeys(deploymentKey: any): any;

        undeploy(deploymentKey: any): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class ApplicationMap extends AbstractPlatformObjectMap {
        constructor(platform: any, object: any);

        base(): void;

        asArray(): Application[];

        each(callback: eachCB<this, Application>): this;

        eachX(callback: eachCB<this, Application>): this;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Archive extends AbstractVaultObject {
        constructor(vault: any, object: any);

        attach(attachmentId: string, contentType: any, data: any): any;

        attachment(attachmentId: string): any;

        base(): void;

        clone(): any;

        getDownloadUri(): string;

        getPreviewUri(name: any, config: any): string;

        getType(): string;

        getUri(): string;

        listAttachments(local: any): any;

        publish(): any;

        unattach(attachmentId: any): any;

        unpublish(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class ArchiveMap extends AbstractPlatformObjectMap {
        constructor(vault: any, object: any);

        base(): void;

        asArray(): Archive[];

        each(callback: eachCB<this, Archive>): this;

        eachX(callback: eachCB<this, Archive>): this;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Association extends AbstractNode {
        constructor(branch: any, object: any);

        base(): void;

        getDirection(node: any): any;

        getDirectionality(): any;

        getOtherNodeId(node: Node): string;

        getSourceNodeChangesetId(): string;

        getSourceNodeId(): string;

        getSourceNodeType(): string;

        getTargetNodeChangesetId(): string;

        getTargetNodeId(): string;

        getTargetNodeType(): string;

        getType(): string;

        isAssociation(): boolean;

        readOtherNode(node: any): any;

        readSourceNode(): any;

        readTargetNode(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class AuthInfo {
        constructor(object: any);

        base(): void;

        getClientId(): any;

        getPrincipalDomainId(): any;

        getPrincipalId(): any;

        getPrincipalName(): any;

        getTenantDescription(): any;

        getTenantId(): any;

        getTenantTitle(): any;

        getTicket(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class AuthenticationGrant {
        constructor(platform: any, object: any);

        base(): void;

        clone(): any;

        getAllowOpenDriverAuthentication(): any;

        getClientId(): any;

        getEnabled(): any;

        getKey(): any;

        getPrincipalDomainId(): any;

        getPrincipalId(): any;

        getSecret(): any;

        getType(): any;

        getUri(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class AuthenticationGrantMap {
        constructor(platform: any, object: any);

        base(): void;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class AutoClientMapping {
        constructor(webhost: any, object: any);

        base(): void;

        clone(): any;

        getAutoManage(): any;

        getSourceUri(): any;

        getTargetApplicationId(): any;

        getTargetApplicationKey(): any;

        getTargetClientKey(): any;

        getTargetTenantId(): any;

        getType(): any;

        getUri(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class AutoClientMappingMap {
        constructor(webhost: any, object: any);

        base(): void;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class BillingProviderConfiguration {
        constructor(platform: any, object: any);

        base(): void;

        clone(): any;

        getType(): any;

        getUri(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class BillingProviderConfigurationMap {
        constructor(platform: any, object: any);

        base(): void;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class BinaryAttachment extends AbstractPersistable {
        constructor(persistable: any, attachment: any);

        base(): void;

        del(): any;

        download(callback: any): any;

        getContentType(): string;

        getDownloadUri(): string;

        getFilename(): string;

        getId(): string;

        getLength(): number | string;

        getPreviewUri(name: any, config: any): string;

        getUri(): string;

        stream(callback: any): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class BinaryAttachmentMap extends AbstractMap {
        constructor(persistable: any, object: any);

        base(): void;

        buildObject(attachment: any): any;

        chainCopyState(otherObject: any): void;

        asArray(): BinaryAttachment[];

        each(callback: eachCB<this, BinaryAttachment>): this;

        eachX(callback: eachCB<this, BinaryAttachment>): this;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Branch extends AbstractRepositoryObject {
        constructor(repository: any, object: any);

        adminContentMaintenance(): any;

        adminRebuildPathIndexes(): any;

        adminRebuildSearchIndexes(): any;

        adminUpgradeSchema(): any;

        archive(callback: any): any;

        associate(sourceNode: any, targetNode: any, object: any): Branch;

        base(): void;

        checkNodeAuthorities(checks: any, callback: any): any;

        checkNodePermissions(checks: any, callback: any): any;

        clone(): any;

        createContainer(object: any): any;

        createCustomIndex(name: any, index: any): any;

        createForExport(exportId: any, config: any, callback: any): any;

        createNode(object: any, options: any): any;

        deleteNodes(nodeIds: any): any;

        dropCustomIndex(name: any): any;

        find(config: any, pagination: any): NodeMap;

        findNodes(config: any, pagination: any): NodeMap;

        generateQName(object: any, callback: any): Branch;

        getBranchType(): string;

        getTip(): string;

        getType(): string;

        getUri(): string;

        graphqlQuery(query: any, operationName: any, variables: any, callback: any): any;

        graphqlSchema(callback: any): any;

        isMaster(): boolean;

        listDefinitions(filter: any, pagination: any): NodeMap;

        listItems(listKey: any, pagination: any): NodeMap;

        listMounts(pagination: any): any;

        loadCustomIndexes(callback: any): any;

        loadForms(filter: any, callback: any): any;

        loadHistoryChangesets(config: any, pagination: any, callback: any): any;

        loadHistoryNodeDiffs(config: any, pagination: any, callback: any): any;

        loadInfo(callback: any): any;

        loadSchema(qname: any, callback: any): any;

        loadSchemas(filter: any, callback: any): any;

        purgeAllDeletions(): any;

        queryDefinitions(json: any, pagination: any): NodeMap;

        queryDeletions(query: any, pagination: any): DeletionMap;

        queryItems(listKey: any, query: any, pagination: any): NodeMap;

        queryNodes(query: any, pagination: any): NodeMap;

        queryOne(query: any, errHandler: any): Node;

        readDefinition(qname: string): Definition;

        readDeletion(nodeId: string): Deletion;

        readGroupNode(group: any, createIfNotFound: any): any;

        readNode(nodeId: string, path: any, params: any): Node;

        readPersonNode(user: any, createIfNotFound: any): any;

        rootNode(): Node;

        searchNodes(search: any, pagination: any): NodeMap;

        startChangesetHistory(options: any, callback: any): any;

        startValidation(repair: boolean, callback: any): this;

        traverse(node: any, config: any): any;

        unarchive(callback: any): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class BranchMap extends AbstractPlatformObjectMap {
        trap(cb: gitanaCallback<this>): this;

        constructor(repository: any, object: any);

        base(): void;

        buildObject(json: any): any;

        asArray(): Branch[];

        each(callback: eachCB<this, Branch>): this;

        eachX(callback: eachCB<this, Branch>): this;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Chainable extends Base {
        constructor(driver: any);

        base(): void;

        chainCopyState(otherObject: any): void;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Changeset extends AbstractRepositoryObject {
        constructor(repository: any, object: any);

        base(): void;

        clone(): any;

        getType(): string;

        getUri(): string;

        listNodes(pagination: any): NodeMap;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class ChangesetMap extends AbstractPlatformObjectMap {
        constructor(repository: any, object: any);

        base(): void;

        buildObject(json: any): any;

        asArray(): Changeset[];

        each(callback: eachCB<this, Changeset>): this;

        eachX(callback: eachCB<this, Changeset>): this;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Client extends AbstractPlatformObject {
        constructor(platform: any, object: any);

        base(): void;

        clone(): any;

        getAllowOpenDriverAuthentication(): any;

        getAuthorizedGrantTypes(): any;

        getEnabled(): boolean;

        getScope(): any;

        getType(): string;

        getUri(): string;

        listAuthenticationGrants(pagination: any): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class ClientMap extends AbstractMap {
        constructor(platform: any, object: any);

        base(): void;

        asArray(): Client[];

        each(callback: eachCB<this, Client>): this;

        eachX(callback: eachCB<this, Client>): this;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Cluster extends DataStore {
        constructor(driver: any, object: any);

        base(): void;

        clone(): any;

        getType(): string;

        getUri(): string;

        killJob(jobId: string): any;

        loadContainedTypes(type: any, callback: any): Cluster;

        queryFailedJobs(query: any, pagination: any): JobMap;

        queryFinishedJobs(query: any, pagination: any): JobMap;

        queryJobs(query: any, pagination: any): JobMap;

        queryRunningJobs(query: any, pagination: any): JobMap;

        queryUnstartedJobs(query: any, pagination: any): JobMap;

        queryWaitingJobs(query: any, pagination: any): JobMap;

        readJob(jobId: string): Job;

        waitForJobCompletion(jobId: string, callback: jobCallback<this>, progressCallback?: any): Cluster;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Connection extends AbstractDirectoryObject {
        constructor(directory: any, object: any);

        base(): void;

        clone(): any;

        getType(): any;

        getUri(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class ConnectionMap extends AbstractPlatformObjectMap {
        constructor(directory: any, object: any);

        base(): void;

        buildObject(json: any): any;

        asArray(): Connection[];

        each(callback: eachCB<this, Connection>): this;

        eachX(callback: eachCB<this, Connection>): this;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class ContainedDataStore extends DataStore {
        constructor(container: any, object: any);

        base(): void;

        del(): any;

        exportArchive(settings: any): any;

        importArchive(settings: any, reportFn: any): any;

        reload(): any;

        update(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Context {
        constructor(configs: any);

        base(): void;

        branch(branch: any): any;

        init(): any;

        platform(platform: any): any;

        repository(repository: any): any;

        static create(config: any): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class CopyJob {
        constructor(cluster: any, object: any);

        base(): void;

        clone(): any;

        getImports(): any;

        getSingleImportTargetId(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class DataStore extends Repository {
        constructor(driver: any, object: any);

        base(): void;

        checkAuthority(principal: any, authorityId: any, callback: any): any;

        checkPermission(principal: any, permissionId: any, callback: any): any;

        createRole(roleKey: any, object: any): any;

        createTeam(teamKey: any, object: any): any;

        getMaxSize(): any;

        getObjectCount(): any;

        getSize(): any;

        getType(): any;

        getUri(): any;

        grantAuthority(principal: any, authorityId: any): any;

        listActivities(pagination: any): any;

        listAuthorities(principal: any, callback: any): any;

        listRoles(inherited: any): any;

        listTeams(): any;

        loadACL(callback: any): any;

        loadAuthorityGrants(principalIds: any, callback: any): any;

        queryActivities(query: any, pagination: any): any;

        readActivity(activityId: any): any;

        readOwnersTeam(): any;

        readRole(roleKeyOrId: any, inherited: any): any;

        readTeam(teamKey: any): any;

        ref(): any;

        revokeAllAuthorities(principal: any): any;

        revokeAuthority(principal: any, authorityId: any): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Defer {
        constructor();

        isRejected(): any;

        isResolved(): any;

        isUnresolved(): any;

        push(happy: any, sad: any): void;

        static all(args: any, ...obj: any[]): any;
    }

    class Definition extends Node {
        constructor(branch: any, object: any);

        base(): void;

        clone(): any;

        createForm(formKey: any, formObject: any, formPath: any): any;

        listChildDefinitions(pagination: any): any;

        listFormAssociations(): any;

        readForm(formKey: any): any;

        removeFormAssociation(formKey: any): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Deletion extends AbstractRepositoryObject {
        constructor(branch: any, object: any);

        base(): void;

        clone(): any;

        getType(): any;

        getUri(): any;

        ref(): any;

        restore(data: any, callback: any): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class DeletionMap extends AbstractPlatformObjectMap {
        constructor(branch: any, object: any);

        base(): void;

        buildObject(json: any): any;

        asArray(): Deletion[];

        each(callback: eachCB<this, Deletion>): this;

        eachX(callback: eachCB<this, Deletion>): this;

        clone(): any;

        del(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class DeployedApplication {
        constructor(webhost: any, object: any);

        base(): void;

        clone(): any;

        getType(): any;

        getUri(): any;

        redeploy(): any;

        restart(): any;

        start(): any;

        stop(): any;

        undeploy(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class DeployedApplicationMap {
        constructor(webhost: any, object: any);

        base(): void;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class DeploymentPackage {
        constructor(platform: any, object: any);

        base(): void;

        clone(): any;

        getType(): any;

        getUri(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class DeploymentPackageMap {
        constructor(platform: any, object: any);

        base(): void;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class DeploymentReceiver {
        constructor(platform: any, object: any);

        base(): void;

        clone(): any;

        getType(): any;

        getUri(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class DeploymentReceiverMap {
        constructor(platform: any, object: any);

        base(): void;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class DeploymentStrategy {
        constructor(platform: any, object: any);

        base(): void;

        clone(): any;

        getType(): any;

        getUri(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class DeploymentStrategyMap {
        constructor(platform: any, object: any);

        base(): void;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class DeploymentTarget {
        constructor(platform: any, object: any);

        base(): void;

        clone(): any;

        getType(): any;

        getUri(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class DeploymentTargetMap {
        constructor(platform: any, object: any);

        base(): void;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Descriptor {
        constructor(platform: any, object: any);

        base(): void;

        clone(): any;

        getType(): any;

        getUri(): any;

        test(data: any, callback: any): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class DescriptorMap {
        constructor(platform: any, object: any);

        base(): void;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Directory {
        constructor(platform: any, object: any);

        base(): void;

        checkConnectionAuthorities(checks: any, callback: any): any;

        checkConnectionPermissions(checks: any, callback: any): any;

        checkIdentityAuthorities(checks: any, callback: any): any;

        checkIdentityPermissions(checks: any, callback: any): any;

        clone(): any;

        createConnection(object: any): any;

        getType(): any;

        getUri(): any;

        listConnections(pagination: any): any;

        listIdentities(pagination: any): any;

        queryConnections(query: any, pagination: any): any;

        queryIdentities(query: any, pagination: any): any;

        readConnection(connectionId: any): any;

        readIdentity(identityId: any): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class DirectoryMap {
        constructor(platform: any, object: any);

        base(): void;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Domain {
        constructor(platform: any, object: any);

        addMember(group: any, principal: any): any;

        base(): void;

        checkGroupMemberships(checks: any, callback: any): any;

        checkPrincipalAuthorities(checks: any, callback: any): any;

        checkPrincipalPermissions(checks: any, callback: any): any;

        clone(): any;

        createGroup(object: any): any;

        createPrincipal(object: any): any;

        createUser(object: any): any;

        getType(): any;

        getUri(): any;

        listGroups(pagination: any): any;

        listMembers(group: any, filter: any, pagination: any, indirect: any): any;

        listPrincipals(pagination: any, options: any): any;

        listUsers(pagination: any): any;

        queryGroups(query: any, pagination: any): any;

        queryPrincipals(query: any, pagination: any, options: any): any;

        queryUsers(query: any, pagination: any): any;

        readPrincipal(principalId: any, options: any): any;

        removeMember(group: any, principal: any): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class DomainMap {
        constructor(platform: any, object: any);

        base(): void;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class DomainPrincipal {
        constructor(domain: any, object: any);

        attach(attachmentId: any, contentType: any, data: any): any;

        attachment(attachmentId: any): any;

        base(): void;

        beforeChainRun(): void;

        clone(): any;

        getDomainQualifiedId(): any;

        getDomainQualifiedName(): any;

        getName(): any;

        getPreviewUri(name: any, config: any): any;

        getType(): any;

        getUri(): any;

        listAttachments(local: any): any;

        listAuthenticationGrants(pagination: any): any;

        listMemberships(indirect: any, pagination: any): any;

        listTeamMemberships(teamable: any, pagination: any): any;

        unattach(attachmentId: any): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Email extends AbstractApplicationObject {
        constructor(application: any, object: any);

        base(): void;

        clone(): any;

        getType(): any;

        getUri(): any;

        send(emailProvider: any): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class EmailMap extends AbstractPlatformObjectMap {
        constructor(application: any, object: any);

        base(): void;

        buildObject(json: any): any;

        asArray(): Email[];

        each(callback: eachCB<this, Email>): this;

        eachX(callback: eachCB<this, Email>): this;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class EmailProvider extends AbstractApplicationObject {
        constructor(application: any, object: any);

        base(): void;

        clone(): any;

        getType(): any;

        getUri(): any;

        send(email: any, model: any): any;

        sendForExport(exportId: any, emailConfig: any, callback: any): any;

        test(from: any, to: any): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class EmailProviderMap extends AbstractPlatformObjectMap {
        constructor(application: any, object: any);

        base(): void;

        buildObject(json: any): any;

        asArray(): EmailProvider[];

        each(callback: eachCB<this, EmailProvider>): this;

        eachX(callback: eachCB<this, EmailProvider>): this;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Form extends Node {
        constructor(branch: any, object: any);

        base(): void;

        clone(): any;

        getEngineId(): any;

        setEngineId(engineId: any): void;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class HasFormAssociation extends Association {
        constructor(branch: any, object: any);

        base(): void;

        clone(): any;

        getFormKey(): any;

        setFormKey(formKey: any): void;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class HasTranslationAssociation extends Association {
        constructor(branch: any, object: any);

        base(): void;

        clone(): any;

        getEdition(): any;

        getLocale(): any;

        setEdition(edition: any): void;

        setLocale(locale: any): void;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Http {
        constructor(...args: any[]);

        base(): void;

        request(options: any): any;

        static Request(): any;

        static URLDecode(string: any): any;

        static URLEncode(string: any): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toQueryString(params: any): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Identity {
        constructor(directory: any, object: any);

        base(): void;

        changePassword(password: any, verifyPassword: any): any;

        clone(): any;

        findPolicyTenants(registrarId: any): any;

        findPolicyUserForTenant(tenantId: any): any;

        findPolicyUsers(tenantId: any): any;

        findPolicyUsersForTenant(tenantId: any): any;

        getType(): any;

        getUri(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class IdentityMap {
        constructor(directory: any, object: any);

        base(): void;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Job extends AbstractClusterObject {
        constructor(cluster: any, object: any);

        attach(attachmentId: string, contentType: any, data: any): any;

        attachment(attachmentId: string): NodeAttachment;

        base(): void;

        clone(): any;

        getAttempts(): any;

        getCurrentServer(): any;

        getCurrentServerTimeStamp(): any;

        getCurrentThread(): any;

        getLogEntries(): any;

        getPaused(): any;

        getPausedBy(): any;

        getPausedTimestamp(): any;

        getPlatformId(): string;

        getPreviewUri(name: any, config: any): string;

        getPriority(): any;

        getRunAsPrincipalDomainId(): string;

        getRunAsPrincipalId(): string;

        getScheduledStartTime(): string;

        getStarted(): any;

        getStartedBy(): string;

        getStartedTimestamp(): Timestamp;

        getState(): string;

        getStopped(): any;

        getStoppedTimestamp(): Timestamp;

        getSubmittedBy(): string;

        getSubmittedTimestamp(): Timestamp;

        getType(): string;

        getUri(): string;

        listAttachments(local: any): NodeAttachmentMap;

        unattach(attachmentId: any): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class JobMap extends AbstractMap {
        constructor(cluster: any, object: any);

        base(): void;

        asArray(): Job[];

        each(callback: eachCB<this, Job>): this;

        eachX(callback: eachCB<this, Job>): this;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class LogEntry extends AbstractObject {
        constructor(platform: any, object: any);

        base(): void;

        clone(): any;

        getBranchId(): any;

        getClassDescriptor(): any;

        getFilename(): any;

        getLevel(): any;

        getLineNumber(): any;

        getMessage(): any;

        getMethod(): any;

        getPrincipalId(): any;

        getRepositoryId(): any;

        getThread(): any;

        getThrowables(): any;

        getTimestamp(): any;

        getType(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class LogEntryMap extends AbstractMap {
        constructor(platform: any, object: any);

        base(): void;

        asArray(): LogEntry[];

        each(callback: eachCB<this, LogEntry>): this;

        eachX(callback: eachCB<this, LogEntry>): this;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class MergeConflict extends AbstractRepositoryObject {
        constructor(repository: any, object: any);

        base(): void;

        clone(): any;

        commit(branchId: any): any;

        getType(): any;

        getUri(): any;

        resolve(resolutionsArrayOrString: any, callback: any): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class MergeConflictMap extends AbstractPlatformObjectMap {
        constructor(repository: any, object: any);

        base(): void;

        buildObject(json: any): any;

        asArray(): MergeConflict[];

        each(callback: eachCB<this, MergeConflict>): this;

        eachX(callback: eachCB<this, MergeConflict>): this;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Message extends AbstractApplicationObject {
        constructor(application: any, object: any);

        base(): void;

        clone(): any;

        getType(): any;

        getUri(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class MessageMap extends AbstractPlatformObjectMap {
        constructor(application: any, object: any);

        base(): void;

        buildObject(json: any): any;

        asArray(): Message[];

        each(callback: eachCB<this, Message>): this;

        eachX(callback: eachCB<this, Message>): this;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Meter {
        constructor(registrar: any, object: any);

        base(): void;

        clone(): any;

        getType(): any;

        getUri(): any;

        static FIELD_BILLABLE_BYTE_COUNT: string;

        static FIELD_BILLABLE_BYTE_COUNT_PERCENTAGE: string;

        static FIELD_BILLABLE_OBJECT_COUNT: string;

        static FIELD_BILLABLE_OBJECT_COUNT_PERCENTAGE: string;

        static FIELD_MAX_BYTE_COUNT: string;

        static FIELD_MAX_OBJECT_COUNT: string;

        static FIELD_METER_END: string;

        static FIELD_METER_START: string;

        static FIELD_METER_TYPE: string;

        static FIELD_RAW_BYTE_COUNT: string;

        static FIELD_RAW_BYTE_COUNT_PERCENTAGE: string;

        static FIELD_RAW_OBJECT_COUNT: string;

        static FIELD_RAW_OBJECT_COUNT_PERCENTAGE: string;

        static FIELD_TENANT_ID: string;

        static FIELD_UNPROCESSED_BYTE_COUNT: string;

        static FIELD_UNPROCESSED_OBJECT_COUNT: string;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class MeterMap {
        constructor(registrar: any, object: any);

        base(): void;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Node extends AbstractNode {
        _type: string;

        constructor(branch: any, object: any);

        associate(targetNodeId: string | Node, object: any, undirected: boolean): this;

        associateOf(sourceNode: Node, object: any, undirected: boolean): this;

        associations(config: any, pagination: any): NodeMap;

        base(): void;

        checkAuthority(principal: any, authorityId: any, callback: any): any;

        checkLocked(callback: any): any;

        checkPermission(principal: any, permissionId: any, callback: any): any;

        childOf(sourceNode: any): any;

        createChild(object: any): any;

        createTranslation(edition: any, locale: any, object: any): any;

        editions(callback: any): any;

        find(config: any, pagination: any): NodeMap;

        findRelatives(config: any, associationConfig: any, pagination: any): NodeMap;

        getType(): string;

        grantAuthority(principal: any, authorityId: any): any;

        incomingAssociations(type: any, pagination: any): NodeMap;

        listAuthorities(principal: any): any;

        listChildren(pagination: any): NodeMap;

        listRelatives(config: any, pagination: any): NodeMap;

        listTranslations(edition: any, pagination: any): any;

        listVersions(pagination: any, excludeSystem: any): any;

        loadACL(callback: any): any;

        loadAuthorityGrants(principalIds: any, callback: any): any;

        loadTree(config: any, callback: any): this;

        locales(edition: any, callback: any): any;

        lock(): this;

        mount(mountKey: string): this;

        moveToFolder(targetFolder: string | Node): this;

        outgoingAssociations(type: any, pagination: any): NodeMap;

        patch(patches: any): any;

        queryRelatives(query: any, config: any, pagination: any): NodeMap;

        readTranslation(...args: any[]): any;

        readVersion(changesetId: any, params: any): any;

        resolvePath(rootNodeId: string, callback: any): any;

        restoreVersion(changesetId: any): any;

        revokeAllAuthorities(principal: any): any;

        revokeAuthority(principal: any, authorityId: any): any;

        traverse(config: any): TraversalResults;

        unassociate(targetNodeId: string | Node, type: any, undirected: any): this;

        unlock(): this;

        unmount(): this;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class NodeAttachment extends BinaryAttachment {
        constructor(persistable: any, attachment: any);

        base(): void;

        getFilename(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class NodeAttachmentMap extends BinaryAttachmentMap {
        constructor(persistable: any, object: any);

        base(): void;

        asArray(): NodeAttachment[];

        each(callback: eachCB<this, NodeAttachment>): this;

        eachX(callback: eachCB<this, NodeAttachment>): this;

        buildObject(attachment: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class NodeMap extends AbstractPlatformObjectMap {
        constructor(branch: any, object: any);

        base(): void;

        buildObject(json: any): any;

        asArray(): Node[];

        each(callback: eachCB<this, Node>): this;

        eachX(callback: eachCB<this, Node>): this;

        clone(): any;

        del(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class OAuth2Http {
        constructor(options: any, storage: any);

        base(): void;

        refresh(callback: any): any;

        request(options: any): any;

        static AUTHORIZATION_CODE: string;

        static COOKIE: string;

        static PASSWORD: string;

        static Storage(scope: any): any;

        static TICKET: string;

        static TOKEN: string;

        static TOKEN_METHOD: string;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class ObjectFactory {
        constructor();

        accessPolicy(platform: any, object: any): any;

        accessPolicyMap(platform: any, object: any): any;

        activity(datastore: any, object: any): any;

        activityMap(datastore: any, object: any): any;

        application(platform: any, object: any): any;

        applicationMap(platform: any, object: any): any;

        archive(vault: any, object: any): any;

        archiveMap(vault: any, object: any): any;

        association(branch: any, object: any): any;

        authenticationGrant(platform: any, object: any): any;

        authenticationGrantMap(platform: any, object: any): any;

        autoClientMapping(webhost: any, object: any): any;

        autoClientMappingMap(webhost: any, object: any): any;

        base(): void;

        billingProviderConfiguration(platform: any, object: any): any;

        billingProviderConfigurationMap(platform: any, object: any): any;

        branch(repository: any, object: any): any;

        branchMap(repository: any, object: any): any;

        changeset(repository: any, object: any): any;

        changesetMap(repository: any, object: any): any;

        client(platform: any, object: any): any;

        clientMap(platform: any, object: any): any;

        connection(directory: any, object: any): any;

        connectionMap(directory: any, object: any): any;

        definition(branch: any, object: any): any;

        deletion(branch: any, object: any): any;

        deletionMap(branch: any, object: any): any;

        deployedApplication(webhost: any, object: any): any;

        deployedApplicationMap(webhost: any, object: any): any;

        deploymentPackage(platform: any, object: any): any;

        deploymentPackageMap(platform: any, object: any): any;

        deploymentReceiver(platform: any, object: any): any;

        deploymentReceiverMap(platform: any, object: any): any;

        deploymentStrategy(platform: any, object: any): any;

        deploymentStrategyMap(platform: any, object: any): any;

        deploymentTarget(platform: any, object: any): any;

        deploymentTargetMap(platform: any, object: any): any;

        descriptor(platform: any, object: any): any;

        descriptorMap(platform: any, object: any): any;

        directory(platform: any, object: any): any;

        directoryMap(platform: any, object: any): any;

        domain(platform: any, object: any): any;

        domainMap(platform: any, object: any): any;

        domainPrincipal(domain: any, object: any): any;

        domainPrincipalMap(domain: any, object: any): any;

        email(application: any, object: any): any;

        emailMap(application: any, object: any): any;

        emailProvider(application: any, object: any): any;

        emailProviderMap(application: any, object: any): any;

        extendPrincipal(principal: any): void;

        form(branch: any, object: any): any;

        identity(directory: any, object: any): any;

        identityMap(directory: any, object: any): any;

        job(cluster: any, object: any): any;

        jobMap(cluster: any, object: any): any;

        logEntry(cluster: any, object: any): any;

        logEntryMap(cluster: any, object: any): any;

        mergeConflict(repository: any, object: any): any;

        mergeConflictMap(repository: any, object: any): any;

        message(application: any, object: any): any;

        messageMap(application: any, object: any): any;

        meter(registrar: any, object: any): any;

        meterMap(registrar: any, object: any): any;

        node(branch: any, object: any): any;

        nodeMap(branch: any, object: any): any;

        pageRendition(application: any, object: any): any;

        pageRenditionMap(application: any, object: any): any;

        plan(registrar: any, object: any): any;

        planMap(registrar: any, object: any): any;

        platform(cluster: any, object: any): any;

        platformDataStore(platform: any, object: any): any;

        platformDataStoreMap(platform: any, object: any): any;

        project(platform: any, object: any): any;

        projectMap(platform: any, object: any): any;

        registrar(platform: any, object: any): any;

        registrarMap(platform: any, object: any): any;

        registration(application: any, object: any): any;

        registrationMap(application: any, object: any): any;

        release(repository: any, object: any): any;

        releaseMap(repository: any, object: any): any;

        report(platform: any, object: any): any;

        reportMap(platform: any, object: any): any;

        repository(platform: any, object: any): any;

        repositoryMap(platform: any, object: any): any;

        resultMap(driver: any, resultMap: any): any;

        role(cluster: any, roleContainer: any, object: any): any;

        roleMap(cluster: any, roleContainer: any, object: any): any;

        scheduledWork(platform: any, object: any): any;

        scheduledWorkMap(platform: any, object: any): any;

        settings(application: any, object: any): any;

        settingsMap(application: any, object: any): any;

        stack(platform: any, object: any): any;

        stackMap(platform: any, object: any): any;

        team(cluster: any, teamable: any, object: any): any;

        teamMap(cluster: any, teamable: any, object: any): any;

        tenant(registrar: any, object: any): any;

        tenantMap(registrar: any, object: any): any;

        traversalResults(branch: any, object: any): any;

        trustedDomainMapping(webhost: any, object: any): any;

        trustedDomainMappingMap(webhost: any, object: any): any;

        uiConfig(platform: any, object: any): any;

        uiConfigMap(platform: any, object: any): any;

        vault(platform: any, object: any): any;

        vaultMap(platform: any, object: any): any;

        view(platform: any, object: any): any;

        viewMap(platform: any, object: any): any;

        webhost(platform: any, object: any): any;

        webhostMap(platform: any, object: any): any;

        workflowComment(platform: any, object: any): any;

        workflowCommentMap(platform: any, object: any): any;

        workflowInstance(platform: any, object: any): any;

        workflowInstanceMap(platform: any, object: any): any;

        workflowModel(platform: any, object: any): any;

        workflowModelMap(platform: any, object: any): any;

        workflowTask(platform: any, object: any): any;

        workflowTaskMap(platform: any, object: any): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static register(qname: any, objectClass: any): void;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class PageRendition {
        constructor(application: any, object: any);

        base(): void;

        clone(): any;

        getType(): any;

        getUri(): any;

        invalidate(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class PageRenditionMap {
        constructor(application: any, object: any);

        base(): void;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Person {
        constructor(branch: any, object: any);

        base(): void;

        clone(): any;

        getAddress(): any;

        getCity(): any;

        getCompanyName(): any;

        getEmail(): any;

        getFirstName(): any;

        getJobTitle(): any;

        getLastName(): any;

        getPhoneNumber(): any;

        getPrincipalDomainId(): any;

        getPrincipalId(): any;

        getPrincipalName(): any;

        getPrincipalType(): any;

        getState(): any;

        getZipcode(): any;

        readPrincipal(): any;

        setAddress(address: any): void;

        setCity(city: any): void;

        setCompanyName(companyName: any): void;

        setEmail(email: any): void;

        setFirstName(firstName: any): void;

        setJobTitle(jobTitle: any): void;

        setLastName(lastName: any): void;

        setPhoneNumber(phoneNumber: any): void;

        setState(state: any): void;

        setZipcode(zipcode: any): void;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Plan {
        constructor(registrar: any, object: any);

        base(): void;

        clone(): any;

        getPlanKey(): any;

        getType(): any;

        getUri(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class PlanMap {
        constructor(registrar: any, object: any);

        base(): void;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Platform {
        constructor(cluster: any, object: any);

        accessChecks(entries: any, callback: any): any;

        accessLookups(entries: any, callback: any): any;

        adminIndexDatastores(): any;

        adminRepair(): any;

        app(settings: any, callback: any): any;

        assignAccessPolicy(accessPolicyId: any, ref: any): any;

        authenticate(config: any, authFailureHandler: any): any;

        base(): void;

        checkApplicationAuthorities(checks: any, callback: any): any;

        checkApplicationPermissions(checks: any, callback: any): any;

        checkAuthenticationGrantAuthorities(checks: any, callback: any): any;

        checkAuthenticationGrantPermissions(checks: any, callback: any): any;

        checkBillingProviderConfigurationAuthorities(checks: any, callback: any): any;

        checkBillingProviderConfigurationPermissions(checks: any, callback: any): any;

        checkClientAuthorities(checks: any, callback: any): any;

        checkClientPermissions(checks: any, callback: any): any;

        checkDeploymentPackageAuthorities(checks: any, callback: any): any;

        checkDeploymentPackagePermissions(checks: any, callback: any): any;

        checkDeploymentReceiverAuthorities(checks: any, callback: any): any;

        checkDeploymentReceiverPermissions(checks: any, callback: any): any;

        checkDeploymentStrategyAuthorities(checks: any, callback: any): any;

        checkDeploymentStrategyPermissions(checks: any, callback: any): any;

        checkDeploymentTargetAuthorities(checks: any, callback: any): any;

        checkDeploymentTargetPermissions(checks: any, callback: any): any;

        checkDirectoryAuthorities(checks: any, callback: any): any;

        checkDirectoryPermissions(checks: any, callback: any): any;

        checkDomainAuthorities(checks: any, callback: any): any;

        checkDomainPermissions(checks: any, callback: any): any;

        checkProjectAuthorities(checks: any, callback: any): any;

        checkProjectPermissions(checks: any, callback: any): any;

        checkRegistrarAuthorities(checks: any, callback: any): any;

        checkRegistrarPermissions(checks: any, callback: any): any;

        checkReportAuthorities(checks: any, callback: any): any;

        checkReportPermissions(checks: any, callback: any): any;

        checkRepositoryAuthorities(checks: any, callback: any): any;

        checkRepositoryPermissions(checks: any, callback: any): any;

        checkScheduledWorkAuthorities(checks: any, callback: any): any;

        checkScheduledWorkPermissions(checks: any, callback: any): any;

        checkServiceDescriptorAuthorities(checks: any, callback: any): any;

        checkServiceDescriptorPermissions(checks: any, callback: any): any;

        checkStackAuthorities(checks: any, callback: any): any;

        checkStackPermissions(checks: any, callback: any): any;

        checkUIConfigAuthorities(checks: any, callback: any): any;

        checkUIConfigPermissions(checks: any, callback: any): any;

        checkVaultAuthorities(checks: any, callback: any): any;

        checkVaultPermissions(checks: any, callback: any): any;

        checkViewAuthorities(checks: any, callback: any): any;

        checkViewPermissions(checks: any, callback: any): any;

        checkWebHostAuthorities(checks: any, callback: any): any;

        checkWebHostPermissions(checks: any, callback: any): any;

        checkWorkflowCommentAuthorities(checks: any, callback: any): any;

        checkWorkflowCommentPermissions(checks: any, callback: any): any;

        checkWorkflowInstanceAuthorities(checks: any, callback: any): any;

        checkWorkflowInstancePermissions(checks: any, callback: any): any;

        checkWorkflowModelAuthorities(checks: any, callback: any): any;

        checkWorkflowModelPermissions(checks: any, callback: any): any;

        checkWorkflowTaskAuthorities(checks: any, callback: any): any;

        checkWorkflowTaskPermissions(checks: any, callback: any): any;

        clone(): any;

        createAccessPolicy(object: any): any;

        createApplication(object: any): any;

        createAuthenticationGrant(object: any): any;

        createBillingProviderConfiguration(providerId: any, object: any): any;

        createClient(object: any): any;

        createDeploymentReceiver(object: any): any;

        createDeploymentStrategy(object: any): any;

        createDeploymentTarget(object: any): any;

        createDirectory(object: any): any;

        createDomain(object: any): any;

        createLogEntry(message: any, level: any, obj: any): any;

        createProject(object: any): any;

        createRegistrar(object: any): any;

        createReport(object: any): any;

        createRepository(object: any): any;

        createScheduledWorkItem(object: any): any;

        createServiceDescriptor(object: any): any;

        createStack(object: any): any;

        createUIConfig(object: any): any;

        createVault(object: any): any;

        createView(object: any): any;

        createWebHost(object: any): any;

        createWorkflow(workflowModelId: any, object: any): any;

        createWorkflowComment(workflowId: any, workflowTaskId: any, object: any): any;

        createWorkflowModel(id: any, object: any): any;

        del(): any;

        executeReport(reportId: any, config: any, pagination: any, callback: any): any;

        exportDownloadUrl(exportId: any, index: any, useDispositionHeader: any): any;

        findAccessPolicies(ref: any, pagination: any): any;

        findStackForDataStore(datastoreType: any, datastoreId: any): any;

        getPlatform(): any;

        getTenantPreviewUri(name: any, config: any): any;

        getType(): any;

        getUri(): any;

        listAccessPolicies(pagination: any): any;

        listAccessPolicyTargets(accessPolicyId: any, pagination: any): any;

        listAllWorkflowModels(pagination: any): any;

        listApplicationTypes(pagination: any): any;

        listApplications(pagination: any): any;

        listBillingProviderConfigurations(pagination: any): any;

        listClients(pagination: any): any;

        listDeploymentPackages(pagination: any): any;

        listDeploymentReceivers(pagination: any): any;

        listDeploymentStrategies(pagination: any): any;

        listDeploymentTargets(pagination: any): any;

        listDirectories(pagination: any): any;

        listDomains(pagination: any): any;

        listProjectTypes(pagination: any): any;

        listProjects(pagination: any): any;

        listRegistrars(pagination: any): any;

        listReports(pagination: any): any;

        listRepositories(pagination: any): any;

        listRuleActions(pagination: any, callback: any): any;

        listRuleConditions(pagination: any, callback: any): any;

        listScheduledWorkItems(pagination: any): any;

        listServiceDescriptors(pagination: any): any;

        listStacks(pagination: any): any;

        listTasksForCurrentUser(filter: any, pagination: any): any;

        listTenantAttachments(): any;

        listUIConfigs(pagination: any): any;

        listVaults(pagination: any): any;

        listViews(pagination: any): any;

        listWebHosts(pagination: any): any;

        listWorkflowComments(pagination: any): any;

        listWorkflowModelVersions(id: any, pagination: any): any;

        listWorkflowModels(pagination: any): any;

        listWorkflowTasks(pagination: any): any;

        listWorkflows(pagination: any): any;

        loadInfo(callback: any): any;

        loadWorkflowHistory(workflowId: any, pagination: any, callback: any): any;

        logout(expireAccessToken: any): any;

        postLogEntry(message: any, level: any, obj: any): any;

        queryAccessPolicies(query: any, pagination: any): any;

        queryAllWorkflowModels(query: any, pagination: any): any;

        queryApplications(query: any, pagination: any): any;

        queryAuthenticationGrants(query: any, pagination: any): any;

        queryBillingProviderConfigurations(query: any, pagination: any): any;

        queryClients(query: any, pagination: any): any;

        queryDeploymentPackages(query: any, pagination: any): any;

        queryDeploymentReceivers(query: any, pagination: any): any;

        queryDeploymentStrategies(query: any, pagination: any): any;

        queryDeploymentTargets(query: any, pagination: any): any;

        queryDirectories(query: any, pagination: any): any;

        queryDomains(query: any, pagination: any): any;

        queryLogEntries(query: any, pagination: any): any;

        queryProjects(query: any, pagination: any): any;

        queryRegistrars(query: any, pagination: any): any;

        queryReports(query: any, pagination: any): any;

        queryRepositories(query: any, pagination: any): any;

        queryScheduledWorkItems(query: any, pagination: any): any;

        queryServiceDescriptors(query: any, pagination: any): any;

        queryStacks(query: any, pagination: any): any;

        queryTasks(query: any, pagination: any): any;

        queryTasksForCurrentUser(filter: any, query: any, pagination: any): any;

        queryUIConfigs(query: any, pagination: any): any;

        queryVaults(query: any, pagination: any): any;

        queryViews(query: any, pagination: any): any;

        queryWebHosts(query: any, pagination: any): any;

        queryWorkflowComments(query: any, pagination: any): any;

        queryWorkflowModelVersions(id: any, query: any, pagination: any): any;

        queryWorkflowModels(query: any, pagination: any): any;

        queryWorkflowTasks(query: any, pagination: any): any;

        queryWorkflows(query: any, pagination: any): any;

        readAccessPolicy(accessPolicyId: any): any;

        readApplication(applicationId: any): any;

        readAuthenticationGrant(authenticationGrantId: any): any;

        readBillingProviderConfiguration(billingProviderConfigurationId: any): any;

        readClient(clientId: any): any;

        readCluster(): any;

        readDeploymentPackage(deploymentPackageId: any): any;

        readDeploymentReceiver(deploymentReceiverId: any): any;

        readDeploymentStrategy(deploymentStrategyId: any): any;

        readDeploymentTarget(deploymentTargetId: any): any;

        readDirectory(directoryId: any): any;

        readDomain(domainId: any): any;

        readExportStatus(exportId: any, callback: any): any;

        readLog(callback: any): any;

        readLogEntry(logEntryId: any): any;

        readPrimaryDomain(): any;

        readProject(projectId: any): any;

        readRegistrar(registrarId: any): any;

        readReport(reportId: any): any;

        readRepository(repositoryId: any): any;

        readRuleAction(actionId: any, callback: any): any;

        readRuleCondition(conditionId: any, callback: any): any;

        readScheduledWorkItem(scheduledWorkId: any): any;

        readServiceDescriptor(descriptorId: any): any;

        readStack(stackId: any): any;

        readUIConfig(uiConfigId: any): any;

        readVault(vaultId: any): any;

        readView(viewId: any): any;

        readWebHost(webhostId: any): any;

        readWorkflow(workflowId: any): any;

        readWorkflowComment(workflowCommentId: any): any;

        readWorkflowModel(workflowModelId: any, workflowModelVersionId: any): any;

        readWorkflowTask(workflowTaskId: any): any;

        referenceDiff(sourceRef: any, targetRef: any, callback: any): any;

        referenceMerge(sourceRef: any, diffObject: any, callback: any): any;

        referenceReads(entries: any, callback: any): any;

        reload(): any;

        runExport(objects: any, configuration: any, callback: any): any;

        startCreateProject(object: any, params: any, callback: any): any;

        tenantAttach(attachmentId: any, contentType: any, data: any): any;

        tenantAttachment(attachmentId: any): any;

        tenantUnattach(attachmentId: any): any;

        unassignAccessPolicy(accessPolicyId: any, ref: any): any;

        unassignAllAccessPolicies(ref: any): any;

        update(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class PlatformDataStoreMap extends AbstractMap {
        constructor(platform: any, object: any);

        base(): void;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class PrincipalMap {
        constructor(domain: any, object: any);

        base(): void;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Project extends AbstractPlatformObject {
        constructor(platform: any, object: any);

        adminMaintenance(): any;

        attach(attachmentId: any, contentType: any, data: any): any;

        attachment(attachmentId: any): any;

        base(): void;

        clone(): any;

        getPreviewUri(name: any, config: any): any;

        getType(): any;

        getUri(): any;

        inviteUser(userId: any): any;

        listAttachments(local: any): any;

        readStack(): any;

        unattach(attachmentId: any): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class ProjectMap extends AbstractMap {
        constructor(platform: any, object: any);

        base(): void;

        asArray(): Project[];

        each(callback: eachCB<this, Project>): this;

        eachX(callback: eachCB<this, Project>): this;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Queue {
        constructor(concurrency: any);

        add(fn: any): void;

        go(): any;
    }

    class Registrar {
        constructor(platform: any, object: any);

        base(): void;

        checkMeterAuthorities(checks: any, callback: any): any;

        checkMeterPermissions(checks: any, callback: any): any;

        checkPlanAuthorities(checks: any, callback: any): any;

        checkPlanPermissions(checks: any, callback: any): any;

        checkTenantAuthorities(checks: any, callback: any): any;

        checkTenantPermissions(checks: any, callback: any): any;

        clone(): any;

        createMeter(object: any): any;

        createPlan(object: any): any;

        createTenant(principal: any, planKey: any, paymentMethod: any): any;

        getType(): any;

        getUri(): any;

        listMeters(pagination: any): any;

        listPlans(pagination: any): any;

        listTenants(pagination: any): any;

        lookupTenantForPrincipal(principal: any): any;

        queryMeters(query: any, pagination: any): any;

        queryPlans(query: any, pagination: any): any;

        queryTenants(query: any, pagination: any): any;

        readMeter(meterId: any): any;

        readPlan(planId: any): any;

        readTenant(tenantId: any): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class RegistrarMap {
        constructor(platform: any, object: any);

        base(): void;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Registration {
        constructor(application: any, object: any);

        base(): void;

        clone(): any;

        confirm(newUserPassword: any, paymentMethodObject: any): any;

        getType(): any;

        getUri(): any;

        sendConfirmationEmail(): any;

        sendWelcomeEmail(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class RegistrationMap {
        constructor(application: any, object: any);

        base(): void;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Release extends AbstractRepositoryObject {
        constructor(repository: any, object: any);

        archive(callback: any): any;

        base(): void;

        clone(): any;

        finalize(object: any, callback: any): any;

        getType(): any;

        getUri(): any;

        loadInfo(callback: any): any;

        releaseImmediately(callback: any): any;

        startFinalize(object: any, callback: any): any;

        unarchive(callback: any): any;

        unfinalize(callback: any): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class ReleaseMap extends AbstractPlatformObjectMap {
        constructor(repository: any, object: any);

        base(): void;

        buildObject(json: any): any;

        asArray(): Release[];

        each(callback: eachCB<this, Release>): this;

        eachX(callback: eachCB<this, Release>): this;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Report {
        constructor(platform: any, object: any);

        base(): void;

        clone(): any;

        getType(): any;

        getUri(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class ReportMap {
        constructor(platform: any, object: any);

        base(): void;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Repository extends AbstractRepositoryObject {
        constructor(platform: any, object: any);

        base(): void;

        checkBranchAuthorities(checks: any, callback: any): any;

        checkBranchPermissions(checks: any, callback: any): any;

        checkConflictAuthorities(checks: any, callback: any): any;

        checkConflictPermissions(checks: any, callback: any): any;

        checkReleaseAuthorities(checks: any, callback: any): any;

        checkReleasePermissions(checks: any, callback: any): any;

        clone(): any;

        copyFrom(sourceBranchId: any, targetBranchId: any, config: any): any;

        createBranch(branchId: any, changesetId: any, object: any): any;

        createRelease(object: any, sourceId: any): any;

        createSnapshot(changesetId: any, object: any): any;

        getMaxSize(): any;

        getObjectCount(): any;

        getSize(): any;

        getType(): any;

        getUri(): any;

        listBranches(pagination: any): BranchMap;

        listChangesetChildren(changesetId: any): any;

        listChangesetParents(changesetId: any): any;

        listChangesets(): ChangesetMap;

        listConflicts(pagination: any): MergeConflictMap;

        listMerges(sourceBranchId: any, mergeType: any): any;

        listPullSources(branchId: any, pagination: any): any;

        listReleases(pagination: any): ReleaseMap;

        queryBranches(query: any, pagination?: any): BranchMap;

        queryChangesets(query: any, pagination: any): ChangesetMap;

        queryConflicts(query: any, pagination: any): MergeConflictMap;

        queryReleases(query: any, pagination: any): ReleaseMap;

        readBranch(branchId: string): Branch;

        readChangeset(changesetId: string): Changeset;

        readConflict(conflictId: string): MergeConflict;

        readRelease(releaseId: string): Release;

        startChanges(sourceBranchId: string, targetBranchId: string, optionsOrCallback?: any, callback?: any): any;

        startCopyFrom(sourceBranchId: string, targetBranchId: string, config: any, callback: any): any;

        startCreateBranch(branchId: string, changesetId: string, object: any, callback: any): any;

        startCreateRelease(object: string, sourceId: string, callback: any): any;

        startDiff(sourceBranchId: string, targetBranchId: string, callback: any): any;

        startMerge(sourceBranchId: string, targetBranchId: string, callback: any): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class RepositoryMap extends AbstractPlatformObjectMap {
        constructor(platform: any, object: any);

        base(): void;

        buildObject(json: any): any;

        asArray(): Repository[];

        each(callback: eachCB<this, Repository>): this;

        eachX(callback: eachCB<this, Repository>): this;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Response {
        constructor(object: any);

        base(): void;

        getId(): any;

        isDataDocument(): any;

        isError(): any;

        isListDocument(): any;

        isOk(): any;

        isStatusDocument(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class ResultMap extends AbstractPlatformObjectMap {
        constructor(driver: any, resultMap: any);

        base(): void;

        buildObject(object: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Role {
        constructor(cluster: any, roleContainer: any, object: any);

        base(): void;

        del(): any;

        getPermissions(): any;

        getRoleKey(): any;

        getType(): any;

        getUri(): any;

        reload(): any;

        update(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class RoleMap extends AbstractPlatformObjectMap {
        constructor(cluster: any, roleContainer: any, object: any);

        base(): void;

        buildObject(json: any): any;

        asArray(): Role[];

        each(callback: eachCB<this, Role>): this;

        eachX(callback: eachCB<this, Role>): this;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class ScheduledWork {
        constructor(platform: any, object: any);

        base(): void;

        clone(): any;

        getType(): any;

        getUri(): any;

        trigger(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class ScheduledWorkMap extends AbstractPlatformObjectMap {
        constructor(platform: any, object: any);

        base(): void;

        buildObject(json: any): any;

        asArray(): ScheduledWork[];

        each(callback: eachCB<this, ScheduledWork>): this;

        eachX(callback: eachCB<this, ScheduledWork>): this;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Settings {
        constructor(application: any, object: any);

        attach(attachmentId: any, contentType: any, data: any): any;

        attachment(attachmentId: any): any;

        base(): void;

        clone(): any;

        getPreviewUri(name: any, config: any): any;

        getSetting(key: any): any;

        getSettings(): any;

        getType(): any;

        getUri(): any;

        listAttachments(local: any): any;

        setSetting(key: any, val: any): void;

        unattach(attachmentId: any): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class SettingsMap extends AbstractPlatformObjectMap {
        constructor(application: any, object: any);

        base(): void;

        buildObject(json: any): any;

        asArray(): Settings[];

        each(callback: eachCB<this, Settings>): this;

        eachX(callback: eachCB<this, Settings>): this;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Stack extends AbstractPlatformObject {
        constructor(platform: any, object: any);

        assignDataStore(datastore: any, key: any, ...args: any[]): any;

        attach(attachmentId: any, contentType: any, data: any): any;

        attachment(attachmentId: any): any;

        base(): void;

        clone(): any;

        createRole(roleKey: any, object: any): any;

        createTeam(teamKey: any, object: any): any;

        existsDataStore(key: any, callback: any): any;

        getKey(): any;

        getPreviewUri(name: any, config: any): any;

        getType(): any;

        getUri(): any;

        listAttachments(local: any): any;

        listDataStores(pagination: any): any;

        listRoles(inherited: any): any;

        listTeams(pagination: any): any;

        queryDataStores(query: any, pagination: any): PlatformDataStoreMap;

        queryLogEntries(query: any, pagination: any): LogEntryMap;

        readDataStore(key: any, callback: any): Stack;

        readLog(callback: any): this;

        readLogEntry(logEntryId: any): LogEntry;

        readOwnersTeam(): any;

        readRole(roleKeyOrId: any, inherited: any): any;

        readTeam(teamKey: any): any;

        unassignDataStore(key: any): any;

        unattach(attachmentId: any): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class StackMap extends AbstractMap {
        constructor(platform: any, object: any);

        base(): void;

        asArray(): Stack[];

        each(callback: eachCB<this, Stack>): this;

        eachX(callback: eachCB<this, Stack>): this;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class SystemMetadata extends Base {
        constructor();

        base(): void;

        get(key: any): any;

        getChangesetId(): string;

        getCreatedBy(): string;

        getCreatedByPrincipalDomainId(): string;

        getCreatedByPrincipalId(): string;

        getCreatedOn(): Timestamp;

        getModifiedBy(): string;

        getModifiedByPrincipalDomainId(): string;

        getModifiedByPrincipalId(): string;

        getModifiedOn(): Timestamp;

        updateFrom(json: any): void;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Team {
        constructor(cluster: any, teamable: any, object: any);

        addMember(principal: any): any;

        base(): void;

        clone(): any;

        del(): any;

        getGroupId(): any;

        getKey(): any;

        getRoleKeys(): any;

        getType(): any;

        getUri(): any;

        grant(authorityId: any): any;

        hasMember(principal: any, callback: any): any;

        listMembers(pagination: any): any;

        loadAuthorities(callback: any): any;

        reload(): any;

        removeMember(principal: any): any;

        revoke(authorityId: any): any;

        update(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class TeamMap {
        constructor(cluster: any, teamable: any, object: any);

        base(): void;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class TeamMember {
        constructor(team: any, object: any);

        base(): void;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class TeamMemberMap {
        constructor(team: any, object: any);

        base(): void;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Tenant {
        constructor(registrar: any, object: any);

        attach(attachmentId: any, contentType: any, data: any): any;

        attachment(attachmentId: any): any;

        base(): void;

        clone(): any;

        getDnsSlug(): any;

        getPlanKey(): any;

        getPlatformId(): any;

        getPrincipalDomainId(): any;

        getPrincipalId(): any;

        getType(): any;

        getUri(): any;

        listAllocatedApplicationObjects(callback: any, pagination: any): any;

        listAllocatedClientObjects(callback: any, pagination: any): any;

        listAllocatedDirectoryObjects(callback: any, pagination: any): any;

        listAllocatedDomainObjects(callback: any, pagination: any): any;

        listAllocatedObjects(callback: any, objectType: any, pagination: any): any;

        listAllocatedRegistrarObjects(callback: any, pagination: any): any;

        listAllocatedRepositoryObjects(callback: any, pagination: any): any;

        listAllocatedStackObjects(callback: any, pagination: any): any;

        listAllocatedVaultObjects(callback: any, pagination: any): any;

        listAttachments(local: any): any;

        listAutoClientMappingObjects(callback: any, pagination: any): any;

        readDefaultAllocatedClientObject(callback: any): any;

        readTenantPlan(): any;

        readTenantPrincipal(): any;

        unattach(attachmentId: any): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class TenantMap {
        constructor(registrar: any, object: any);

        base(): void;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Timestamp extends Base {
        constructor(object: any);

        base(): void;

        getDay(): any;

        getHour(): any;

        getMillisecond(): any;

        getMinute(): any;

        getMonth(): any;

        getSecond(): any;

        getTime(): any;

        getTimestamp(): any;

        getYear(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class TransferExportJob {
        constructor(cluster: any, object: any);

        base(): void;

        clone(): any;

        getImports(): any;

        getSingleImportTargetId(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class TransferImportJob {
        constructor(cluster: any, object: any);

        base(): void;

        clone(): any;

        getImports(): any;

        getSingleImportTargetId(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class TraversalResults extends AbstractPersistable {
        constructor(branch: any, object: any);

        association(id: string): Association;

        associationCount(callback: any): this;

        associations(): NodeMap;

        base(): void;

        center(): any;

        clear(): void;

        handleResponse(response: any): void;

        node(id: string): Node;

        nodeCount(callback: any): this;

        nodes(): NodeMap;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class TrustedDomainMapping {
        constructor(webhost: any, object: any);

        base(): void;

        clone(): any;

        getType(): any;

        getUri(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class TrustedDomainMappingMap {
        constructor(webhost: any, object: any);

        base(): void;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class UIConfig {
        constructor(platform: any, object: any);

        base(): void;

        clone(): any;

        getType(): any;

        getUri(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class UIConfigMap {
        constructor(platform: any, object: any);

        base(): void;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class Vault {
        constructor(platform: any, object: any);

        base(): void;

        checkArchiveAuthorities(checks: any, callback: any): any;

        checkArchivePermissions(checks: any, callback: any): any;

        clone(): any;

        getType(): any;

        getUri(): any;

        listArchives(pagination: any): any;

        lookupArchive(groupId: any, artifactId: any, versionId: any): any;

        queryArchives(query: any, pagination: any): any;

        readArchive(archiveId: any): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class VaultMap {
        constructor(platform: any, object: any);

        base(): void;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class View {
        constructor(platform: any, object: any);

        base(): void;

        clone(): any;

        getType(): any;

        getUri(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class ViewMap {
        constructor(platform: any, object: any);

        base(): void;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class WebHost {
        constructor(platform: any, object: any);

        base(): void;

        checkAutoClientMappingsAuthorities(checks: any, callback: any): any;

        checkAutoClientMappingsPermissions(checks: any, callback: any): any;

        checkDeployedApplicationsAuthorities(checks: any, callback: any): any;

        checkDeployedApplicationsPermissions(checks: any, callback: any): any;

        checkTrustedDomainMappingsAuthorities(checks: any, callback: any): any;

        checkTrustedDomainMappingsPermissions(checks: any, callback: any): any;

        clone(): any;

        createAutoClientMapping(host: any, applicationId: any, clientKey: any, authGrantKey: any, object: any): any;

        createTrustedDomainMapping(host: any, scope: any, platformId: any, object: any): any;

        getType(): any;

        getUri(): any;

        getUrlPatterns(): any;

        listAutoClientMappings(pagination: any): any;

        listDeployedApplications(pagination: any): any;

        listTrustedDomainMappings(pagination: any): any;

        queryAutoClientMappings(query: any, pagination: any): any;

        queryDeployedApplications(query: any, pagination: any): any;

        queryTrustedDomainMappings(query: any, pagination: any): any;

        readAutoClientMapping(autoClientMappingId: any): any;

        readDeployedApplication(deployedApplicationId: any): any;

        readTrustedDomainMapping(trustedDomainMappingId: any): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class WebHostMap {
        constructor(platform: any, object: any);

        base(): void;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class WorkflowComment {
        constructor(platform: any, object: any);

        base(): void;

        clone(): any;

        getType(): any;

        getUri(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class WorkflowCommentMap {
        constructor(platform: any, object: any);

        base(): void;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class WorkflowInstance {
        constructor(platform: any, object: any);

        addResource(resource: any): any;

        base(): void;

        clone(): any;

        getType(): any;

        getUri(): any;

        loadResource(id: any, callback: any): any;

        loadResourceList(callback: any): any;

        removeAllResources(): any;

        removeResource(resourceOrResourceId: any): any;

        resume(): any;

        start(data: any): any;

        suspend(): any;

        terminate(): any;

        upgradeModel(newModel: any, newModelVersion: any): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class WorkflowInstanceMap {
        constructor(platform: any, object: any);

        base(): void;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class WorkflowModel {
        constructor(platform: any, object: any);

        base(): void;

        clone(): any;

        deploy(): any;

        getType(): any;

        getUri(): any;

        undeploy(): any;

        update(force: any): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class WorkflowModelMap {
        constructor(platform: any, object: any);

        base(): void;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class WorkflowTask {
        constructor(platform: any, object: any);

        addResource(resource: any): any;

        base(): void;

        claim(): any;

        clone(): any;

        complete(routeId: any, data: any): any;

        delegate(user: any): any;

        getType(): any;

        getUri(): any;

        listDelegates(pagination: any): any;

        loadResource(id: any, callback: any): any;

        loadResourceList(callback: any): any;

        loadRoutes(callback: any): any;

        move(workflowNodeId: any, data: any): any;

        removeAllResources(): any;

        removeResource(resourceOrResourceId: any): any;

        unclaim(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class WorkflowTaskMap {
        constructor(platform: any, object: any);

        base(): void;

        buildObject(json: any): any;

        clone(): any;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;
    }

    class ancestor {
        constructor(...args: any[]);

        base(): void;

        static extend(_instance: any, _static: any, ...args: any[]): any;

        static forEach(object: any, block: any, context: any): void;

        static implement(...args: any[]): any;

        static toString(): any;

        static valueOf(type: any): any;

        static version: string;
    }
}

declare class Gitana {
    constructor(settings: any);

    ajax(
        method: any,
        url: any,
        contentType: any,
        data: any,
        headers: any,
        successCallback: any,
        failureCallback: any,
    ): any;

    authenticate(settings: any, authFailureHandler: any): any;

    base(): void;

    clearAuthentication(): void;

    defaultFailureCallback(http: any): void;

    destroy(): void;

    getApplicationInfo(): any;

    getAuthInfo(): any;

    getFactory(): any;

    getLocale(): any;

    getStackInfo(): any;

    gitanaDelete(url: any, params: any, successCallback: any, failureCallback: any): any;

    gitanaDownload(url: any, params: any, successCallback: any, failureCallback: any): any;

    gitanaGet(url: any, params: any, headers: any, successCallback: any, failureCallback: any): any;

    gitanaPatch(url: any, params: any, jsonData: any, successCallback: any, failureCallback: any): any;

    gitanaPost(url: any, params: any, jsonData: any, successCallback: any, failureCallback: any): any;

    gitanaPut(url: any, params: any, jsonData: any, successCallback: any, failureCallback: any): any;

    gitanaRequest(
        method: any,
        url: any,
        params: any,
        contentType: any,
        data: any,
        headers: any,
        successCallback: any,
        failureCallback: any,
    ): any;

    gitanaUpload(url: any, params: any, contentType: any, data: any, successCallback: any, failureCallback: any): any;

    refreshAuthentication(callback: any): void;

    reloadAuthInfo(callback: any): void;

    setLocale(locale: any): void;

    static AUTO_UPGRADE_TO_CLOUDFRONT: boolean;

    static CSRF_COOKIE_NAMES: string[];

    static CSRF_HEADER_NAME: string;

    static CSRF_TOKEN: any;

    static DEFAULT_CONFIG: {
        baseURL: string;
    };

    static DEFAULT_LOCALE: any;

    static EVERYONE: {
        name: string;
        type: string;
    };

    static HTTP_HEADERS: {};

    static HTTP_PARAMS: {};

    static HTTP_TIMEOUT: number;

    static HTTP_TIMEOUT_FN(xhr: any, method: any, url: any): void;

    static HTTP_WORK_QUEUE_SIZE: number;

    static HTTP_XHR_FACTORY(): any;

    static HTTP_X_CLOUDCMS_ORIGIN_HEADER: boolean;

    static MemoryCache(): any;

    static OAUTH2_TOKEN_REQUEST_HEADERS: {};

    static PLATFORM_CACHE(k: any, v: any): any;

    static PREFER_GET_OVER_POST: boolean;

    static Promise(defer: any): any;

    static REFRESH_TOKEN_FAILURE_FN(http: any): void;

    static TypedIDConstants: {
        TYPE_ACCESS_POLICY: string;
        TYPE_APPLICATION: string;
        TYPE_ARCHIVE: string;
        TYPE_ASSOCIATION: string;
        TYPE_AUTHENTICATION_GRANT: string;
        TYPE_AUTO_CLIENT_MAPPING: string;
        TYPE_BILLING_PROVIDERS_CONFIGURATION: string;
        TYPE_BRANCH: string;
        TYPE_CHANGESET: string;
        TYPE_CLIENT: string;
        TYPE_CLUSTER: string;
        TYPE_CONNECTION: string;
        TYPE_DELETION: string;
        TYPE_DEPLOYED_APPLICATION: string;
        TYPE_DEPLOYMENT_PACKAGE: string;
        TYPE_DEPLOYMENT_RECEIVER: string;
        TYPE_DEPLOYMENT_STRATEGY: string;
        TYPE_DEPLOYMENT_TARGET: string;
        TYPE_DESCRIPTOR: string;
        TYPE_DIRECTORY: string;
        TYPE_DOMAIN: string;
        TYPE_DOMAIN_GROUP: string;
        TYPE_DOMAIN_USER: string;
        TYPE_EMAIL: string;
        TYPE_EMAIL_PROVIDER: string;
        TYPE_IDENTITY: string;
        TYPE_JOB: string;
        TYPE_LOG_ENTRY: string;
        TYPE_MERGE_CONFLICT: string;
        TYPE_MESSAGE: string;
        TYPE_METER: string;
        TYPE_NODE: string;
        TYPE_PAGE_RENDITION: string;
        TYPE_PLAN: string;
        TYPE_PLATFORM: string;
        TYPE_PROJECT: string;
        TYPE_REGISTRAR: string;
        TYPE_REGISTRATION: string;
        TYPE_RELEASE: string;
        TYPE_REPORT: string;
        TYPE_REPOSITORY: string;
        TYPE_SCHEDULED_WORK: string;
        TYPE_SETTINGS: string;
        TYPE_STACK: string;
        TYPE_TENANT: string;
        TYPE_TRUSTED_DOMAIN_MAPPING: string;
        TYPE_UICONFIG: string;
        TYPE_VAULT: string;
        TYPE_VIEW: string;
        TYPE_WEB_HOST: string;
        TYPE_WORKFLOW_COMMENT: string;
        TYPE_WORKFLOW_INSTANCE: string;
        TYPE_WORKFLOW_MODEL: string;
        TYPE_WORKFLOW_TASK: string;
    };

    static VERSION: string;

    static WorkQueue(maxSize: any): any;

    static XHR_WITH_CREDENTIALS: boolean;

    static btoa(string: any): any;

    static configureRequestHeaders(method: any, url: any, headers: any, options: any): void;

    static connect(config: string | connectionObject, callback: gitanaCallback<AppHelper>): AppHelper;

    static contains(a: any, obj: any): any;

    static copyInto(target: any, source: any): void;

    static copyKeepers(target: any, source: any): void;

    static debug(str: any): void;

    static defaultErrorHandler(err: any): void;

    static deleteCookie(name: any, path: any): any;

    static deleteProperties(object: any, deleteFunctions: any): void;

    static determinePlatformCacheKey(config: any, fallbackToDefault: any): any;

    static disconnect(key: any, expireAccessToken: any): void;

    static error(str: any): void;

    static escape(text: any): any;

    static extend(_instance: any, _static: any, ...args: any[]): any;

    static forEach(object: any, block: any, context: any): void;

    static generateId(): any;

    static getCurrentHashStringParameter(paramName: any): any;

    static getCurrentQueryStringParameter(paramName: any): any;

    static getNumberOfKeys(map: any): any;

    static handleJobCompletion(chain: any, cluster: any, jobId: any, synchronous: any, reportFn: any): any;

    static implement(...args: any[]): any;

    static isArray(obj: any): any;

    static isBoolean(arg: any): any;

    static isElement(o: any): any;

    static isEmpty(obj: any): any;

    static isFunction(arg: any): any;

    static isNode(o: any): any;

    static isNumber(arg: any): any;

    static isObject(obj: any): any;

    static isString(arg: any): any;

    static isUndefined(obj: any): any;

    static loadDefaultConfig(): any;

    static makeArray(args: any): any;

    static readCookie(name: any): any;

    static requestCount: number;

    static reset(): void;

    static stampInto(target: any, source: any): void;

    static startsWith(text: any, prefix: any): any;

    static streamDownload(attachment: any, callback: any): void;

    static streamUpload(driver: any, readStream: any, uploadUri: any, contentType: any, callback: any): any;

    static stringify(object: any, pretty: any): any;

    static toCopyDependencyChain(typedID: any): any;

    static toDependencyObject(typedID: any): any;

    static toString(): any;

    static uniqueIdCounter: number;

    static valueOf(type: any): any;

    static writeCookie(name: any, value: any, path: any, days: any, domain: any): void;
}

declare global {
    function Chain<T>(param: T): T;
}

export = Gitana;
export as namespace Gitana;
