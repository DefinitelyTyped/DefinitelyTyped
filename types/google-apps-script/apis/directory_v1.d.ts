// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace AdminDirectory {
    namespace Collection {
      namespace Groups {
        interface AliasesCollection {
          // Add a alias for the group
          insert(resource: Schema.Alias, groupKey: string): AdminDirectory.Schema.Alias;
          // List all aliases for a group
          list(groupKey: string): AdminDirectory.Schema.Aliases;
          // Remove a alias for the group
          remove(groupKey: string, alias: string): void;
        }
      }
      namespace Resources {
        interface BuildingsCollection {
          // Retrieves a building.
          get(customer: string, buildingId: string): AdminDirectory.Schema.Building;
          // Inserts a building.
          insert(resource: Schema.Building, customer: string): AdminDirectory.Schema.Building;
          // Inserts a building.
          insert(resource: Schema.Building, customer: string, optionalArgs: object): AdminDirectory.Schema.Building;
          // Retrieves a list of buildings for an account.
          list(customer: string): AdminDirectory.Schema.Buildings;
          // Retrieves a list of buildings for an account.
          list(customer: string, optionalArgs: object): AdminDirectory.Schema.Buildings;
          // Updates a building. This method supports patch semantics.
          patch(resource: Schema.Building, customer: string, buildingId: string): AdminDirectory.Schema.Building;
          // Updates a building. This method supports patch semantics.
          patch(resource: Schema.Building, customer: string, buildingId: string, optionalArgs: object): AdminDirectory.Schema.Building;
          // Deletes a building.
          remove(customer: string, buildingId: string): void;
          // Updates a building.
          update(resource: Schema.Building, customer: string, buildingId: string): AdminDirectory.Schema.Building;
          // Updates a building.
          update(resource: Schema.Building, customer: string, buildingId: string, optionalArgs: object): AdminDirectory.Schema.Building;
        }
        interface CalendarsCollection {
          // Retrieves a calendar resource.
          get(customer: string, calendarResourceId: string): AdminDirectory.Schema.CalendarResource;
          // Inserts a calendar resource.
          insert(resource: Schema.CalendarResource, customer: string): AdminDirectory.Schema.CalendarResource;
          // Retrieves a list of calendar resources for an account.
          list(customer: string): AdminDirectory.Schema.CalendarResources;
          // Retrieves a list of calendar resources for an account.
          list(customer: string, optionalArgs: object): AdminDirectory.Schema.CalendarResources;
          // Updates a calendar resource.
          // This method supports patch semantics, meaning you only need to include the fields you wish to update. Fields that are not present in the request will be preserved. This method supports patch semantics.
          patch(resource: Schema.CalendarResource, customer: string, calendarResourceId: string): AdminDirectory.Schema.CalendarResource;
          // Deletes a calendar resource.
          remove(customer: string, calendarResourceId: string): void;
          // Updates a calendar resource.
          // This method supports patch semantics, meaning you only need to include the fields you wish to update. Fields that are not present in the request will be preserved.
          update(resource: Schema.CalendarResource, customer: string, calendarResourceId: string): AdminDirectory.Schema.CalendarResource;
        }
        interface FeaturesCollection {
          // Retrieves a feature.
          get(customer: string, featureKey: string): AdminDirectory.Schema.Feature;
          // Inserts a feature.
          insert(resource: Schema.Feature, customer: string): AdminDirectory.Schema.Feature;
          // Retrieves a list of features for an account.
          list(customer: string): AdminDirectory.Schema.Features;
          // Retrieves a list of features for an account.
          list(customer: string, optionalArgs: object): AdminDirectory.Schema.Features;
          // Updates a feature. This method supports patch semantics.
          patch(resource: Schema.Feature, customer: string, featureKey: string): AdminDirectory.Schema.Feature;
          // Deletes a feature.
          remove(customer: string, featureKey: string): void;
          // Renames a feature.
          rename(resource: Schema.FeatureRename, customer: string, oldName: string): void;
          // Updates a feature.
          update(resource: Schema.Feature, customer: string, featureKey: string): AdminDirectory.Schema.Feature;
        }
      }
      namespace Users {
        interface AliasesCollection {
          // Add a alias for the user
          insert(resource: Schema.Alias, userKey: string): AdminDirectory.Schema.Alias;
          // List all aliases for a user
          list(userKey: string): AdminDirectory.Schema.Aliases;
          // List all aliases for a user
          list(userKey: string, optionalArgs: object): AdminDirectory.Schema.Aliases;
          // Remove a alias for the user
          remove(userKey: string, alias: string): void;
          // Watch for changes in user aliases list
          watch(resource: Schema.Channel, userKey: string): AdminDirectory.Schema.Channel;
          // Watch for changes in user aliases list
          watch(resource: Schema.Channel, userKey: string, optionalArgs: object): AdminDirectory.Schema.Channel;
        }
        interface PhotosCollection {
          // Retrieve photo of a user
          get(userKey: string): AdminDirectory.Schema.UserPhoto;
          // Add a photo for the user. This method supports patch semantics.
          patch(resource: Schema.UserPhoto, userKey: string): AdminDirectory.Schema.UserPhoto;
          // Remove photos for the user
          remove(userKey: string): void;
          // Add a photo for the user
          update(resource: Schema.UserPhoto, userKey: string): AdminDirectory.Schema.UserPhoto;
        }
      }
      interface AspsCollection {
        // Get information about an ASP issued by a user.
        get(userKey: string, codeId: number): AdminDirectory.Schema.Asp;
        // List the ASPs issued by a user.
        list(userKey: string): AdminDirectory.Schema.Asps;
        // Delete an ASP issued by a user.
        remove(userKey: string, codeId: number): void;
      }
      interface ChannelsCollection {
        // Stop watching resources through this channel
        stop(resource: Schema.Channel): void;
      }
      interface ChromeosdevicesCollection {
        // Take action on Chrome OS Device
        action(resource: Schema.ChromeOsDeviceAction, customerId: string, resourceId: string): void;
        // Retrieve Chrome OS Device
        get(customerId: string, deviceId: string): AdminDirectory.Schema.ChromeOsDevice;
        // Retrieve Chrome OS Device
        get(customerId: string, deviceId: string, optionalArgs: object): AdminDirectory.Schema.ChromeOsDevice;
        // Retrieve all Chrome OS Devices of a customer (paginated)
        list(customerId: string): AdminDirectory.Schema.ChromeOsDevices;
        // Retrieve all Chrome OS Devices of a customer (paginated)
        list(customerId: string, optionalArgs: object): AdminDirectory.Schema.ChromeOsDevices;
        // Move or insert multiple Chrome OS Devices to organizational unit
        moveDevicesToOu(resource: Schema.ChromeOsMoveDevicesToOu, customerId: string, orgUnitPath: string): void;
        // Update Chrome OS Device. This method supports patch semantics.
        patch(resource: Schema.ChromeOsDevice, customerId: string, deviceId: string): AdminDirectory.Schema.ChromeOsDevice;
        // Update Chrome OS Device. This method supports patch semantics.
        patch(resource: Schema.ChromeOsDevice, customerId: string, deviceId: string, optionalArgs: object): AdminDirectory.Schema.ChromeOsDevice;
        // Update Chrome OS Device
        update(resource: Schema.ChromeOsDevice, customerId: string, deviceId: string): AdminDirectory.Schema.ChromeOsDevice;
        // Update Chrome OS Device
        update(resource: Schema.ChromeOsDevice, customerId: string, deviceId: string, optionalArgs: object): AdminDirectory.Schema.ChromeOsDevice;
      }
      interface CustomersCollection {
        // Retrieves a customer.
        get(customerKey: string): AdminDirectory.Schema.Customer;
        // Updates a customer. This method supports patch semantics.
        patch(resource: Schema.Customer, customerKey: string): AdminDirectory.Schema.Customer;
        // Updates a customer.
        update(resource: Schema.Customer, customerKey: string): AdminDirectory.Schema.Customer;
      }
      interface DomainAliasesCollection {
        // Retrieves a domain alias of the customer.
        get(customer: string, domainAliasName: string): AdminDirectory.Schema.DomainAlias;
        // Inserts a Domain alias of the customer.
        insert(resource: Schema.DomainAlias, customer: string): AdminDirectory.Schema.DomainAlias;
        // Lists the domain aliases of the customer.
        list(customer: string): AdminDirectory.Schema.DomainAliases;
        // Lists the domain aliases of the customer.
        list(customer: string, optionalArgs: object): AdminDirectory.Schema.DomainAliases;
        // Deletes a Domain Alias of the customer.
        remove(customer: string, domainAliasName: string): void;
      }
      interface DomainsCollection {
        // Retrieves a domain of the customer.
        get(customer: string, domainName: string): AdminDirectory.Schema.Domains;
        // Inserts a domain of the customer.
        insert(resource: Schema.Domains, customer: string): AdminDirectory.Schema.Domains;
        // Lists the domains of the customer.
        list(customer: string): AdminDirectory.Schema.Domains2;
        // Deletes a domain of the customer.
        remove(customer: string, domainName: string): void;
      }
      interface GroupsCollection {
        Aliases?: AdminDirectory.Collection.Groups.AliasesCollection;
        // Retrieve Group
        get(groupKey: string): AdminDirectory.Schema.Group;
        // Create Group
        insert(resource: Schema.Group): AdminDirectory.Schema.Group;
        // Retrieve all groups of a domain or of a user given a userKey (paginated)
        list(): AdminDirectory.Schema.Groups;
        // Retrieve all groups of a domain or of a user given a userKey (paginated)
        list(optionalArgs: object): AdminDirectory.Schema.Groups;
        // Update Group. This method supports patch semantics.
        patch(resource: Schema.Group, groupKey: string): AdminDirectory.Schema.Group;
        // Delete Group
        remove(groupKey: string): void;
        // Update Group
        update(resource: Schema.Group, groupKey: string): AdminDirectory.Schema.Group;
      }
      interface MembersCollection {
        // Retrieve Group Member
        get(groupKey: string, memberKey: string): AdminDirectory.Schema.Member;
        // Checks whether the given user is a member of the group. Membership can be direct or nested.
        hasMember(groupKey: string, memberKey: string): AdminDirectory.Schema.MembersHasMember;
        // Add user to the specified group.
        insert(resource: Schema.Member, groupKey: string): AdminDirectory.Schema.Member;
        // Retrieve all members in a group (paginated)
        list(groupKey: string): AdminDirectory.Schema.Members;
        // Retrieve all members in a group (paginated)
        list(groupKey: string, optionalArgs: object): AdminDirectory.Schema.Members;
        // Update membership of a user in the specified group. This method supports patch semantics.
        patch(resource: Schema.Member, groupKey: string, memberKey: string): AdminDirectory.Schema.Member;
        // Remove membership.
        remove(groupKey: string, memberKey: string): void;
        // Update membership of a user in the specified group.
        update(resource: Schema.Member, groupKey: string, memberKey: string): AdminDirectory.Schema.Member;
      }
      interface MobiledevicesCollection {
        // Take action on Mobile Device
        action(resource: Schema.MobileDeviceAction, customerId: string, resourceId: string): void;
        // Retrieve Mobile Device
        get(customerId: string, resourceId: string): AdminDirectory.Schema.MobileDevice;
        // Retrieve Mobile Device
        get(customerId: string, resourceId: string, optionalArgs: object): AdminDirectory.Schema.MobileDevice;
        // Retrieve all Mobile Devices of a customer (paginated)
        list(customerId: string): AdminDirectory.Schema.MobileDevices;
        // Retrieve all Mobile Devices of a customer (paginated)
        list(customerId: string, optionalArgs: object): AdminDirectory.Schema.MobileDevices;
        // Delete Mobile Device
        remove(customerId: string, resourceId: string): void;
      }
      interface NotificationsCollection {
        // Retrieves a notification.
        get(customer: string, notificationId: string): AdminDirectory.Schema.Notification;
        // Retrieves a list of notifications.
        list(customer: string): AdminDirectory.Schema.Notifications;
        // Retrieves a list of notifications.
        list(customer: string, optionalArgs: object): AdminDirectory.Schema.Notifications;
        // Updates a notification. This method supports patch semantics.
        patch(resource: Schema.Notification, customer: string, notificationId: string): AdminDirectory.Schema.Notification;
        // Deletes a notification
        remove(customer: string, notificationId: string): void;
        // Updates a notification.
        update(resource: Schema.Notification, customer: string, notificationId: string): AdminDirectory.Schema.Notification;
      }
      interface OrgunitsCollection {
        // Retrieve organizational unit
        get(customerId: string, orgUnitPath: string[]): AdminDirectory.Schema.OrgUnit;
        // Add organizational unit
        insert(resource: Schema.OrgUnit, customerId: string): AdminDirectory.Schema.OrgUnit;
        // Retrieve all organizational units
        list(customerId: string): AdminDirectory.Schema.OrgUnits;
        // Retrieve all organizational units
        list(customerId: string, optionalArgs: object): AdminDirectory.Schema.OrgUnits;
        // Update organizational unit. This method supports patch semantics.
        patch(resource: Schema.OrgUnit, customerId: string, orgUnitPath: string[]): AdminDirectory.Schema.OrgUnit;
        // Remove organizational unit
        remove(customerId: string, orgUnitPath: string[]): void;
        // Update organizational unit
        update(resource: Schema.OrgUnit, customerId: string, orgUnitPath: string[]): AdminDirectory.Schema.OrgUnit;
      }
      interface PrivilegesCollection {
        // Retrieves a paginated list of all privileges for a customer.
        list(customer: string): AdminDirectory.Schema.Privileges;
      }
      interface ResolvedAppAccessSettingsCollection {
        // Retrieves resolved app access settings of the logged in user.
        GetSettings(): AdminDirectory.Schema.AppAccessCollections;
        // Retrieves the list of apps trusted by the admin of the logged in user.
        ListTrustedApps(): AdminDirectory.Schema.TrustedApps;
      }
      interface ResourcesCollection {
        Buildings?: AdminDirectory.Collection.Resources.BuildingsCollection;
        Calendars?: AdminDirectory.Collection.Resources.CalendarsCollection;
        Features?: AdminDirectory.Collection.Resources.FeaturesCollection;
      }
      interface RoleAssignmentsCollection {
        // Retrieve a role assignment.
        get(customer: string, roleAssignmentId: string): AdminDirectory.Schema.RoleAssignment;
        // Creates a role assignment.
        insert(resource: Schema.RoleAssignment, customer: string): AdminDirectory.Schema.RoleAssignment;
        // Retrieves a paginated list of all roleAssignments.
        list(customer: string): AdminDirectory.Schema.RoleAssignments;
        // Retrieves a paginated list of all roleAssignments.
        list(customer: string, optionalArgs: object): AdminDirectory.Schema.RoleAssignments;
        // Deletes a role assignment.
        remove(customer: string, roleAssignmentId: string): void;
      }
      interface RolesCollection {
        // Retrieves a role.
        get(customer: string, roleId: string): AdminDirectory.Schema.Role;
        // Creates a role.
        insert(resource: Schema.Role, customer: string): AdminDirectory.Schema.Role;
        // Retrieves a paginated list of all the roles in a domain.
        list(customer: string): AdminDirectory.Schema.Roles;
        // Retrieves a paginated list of all the roles in a domain.
        list(customer: string, optionalArgs: object): AdminDirectory.Schema.Roles;
        // Updates a role. This method supports patch semantics.
        patch(resource: Schema.Role, customer: string, roleId: string): AdminDirectory.Schema.Role;
        // Deletes a role.
        remove(customer: string, roleId: string): void;
        // Updates a role.
        update(resource: Schema.Role, customer: string, roleId: string): AdminDirectory.Schema.Role;
      }
      interface SchemasCollection {
        // Retrieve schema
        get(customerId: string, schemaKey: string): AdminDirectory.Schema.Schema;
        // Create schema.
        insert(resource: Schema.Schema, customerId: string): AdminDirectory.Schema.Schema;
        // Retrieve all schemas for a customer
        list(customerId: string): AdminDirectory.Schema.Schemas;
        // Update schema. This method supports patch semantics.
        patch(resource: Schema.Schema, customerId: string, schemaKey: string): AdminDirectory.Schema.Schema;
        // Delete schema
        remove(customerId: string, schemaKey: string): void;
        // Update schema
        update(resource: Schema.Schema, customerId: string, schemaKey: string): AdminDirectory.Schema.Schema;
      }
      interface TokensCollection {
        // Get information about an access token issued by a user.
        get(userKey: string, clientId: string): AdminDirectory.Schema.Token;
        // Returns the set of tokens specified user has issued to 3rd party applications.
        list(userKey: string): AdminDirectory.Schema.Tokens;
        // Delete all access tokens issued by a user for an application.
        remove(userKey: string, clientId: string): void;
      }
      interface UsersCollection {
        Aliases?: AdminDirectory.Collection.Users.AliasesCollection;
        Photos?: AdminDirectory.Collection.Users.PhotosCollection;
        // retrieve user
        get(userKey: string): AdminDirectory.Schema.User;
        // retrieve user
        get(userKey: string, optionalArgs: object): AdminDirectory.Schema.User;
        // create user.
        insert(resource: Schema.User): AdminDirectory.Schema.User;
        // Retrieve either deleted users or all users in a domain (paginated)
        list(): AdminDirectory.Schema.Users;
        // Retrieve either deleted users or all users in a domain (paginated)
        list(optionalArgs: object): AdminDirectory.Schema.Users;
        // change admin status of a user
        makeAdmin(resource: Schema.UserMakeAdmin, userKey: string): void;
        // update user. This method supports patch semantics.
        patch(resource: Schema.User, userKey: string): AdminDirectory.Schema.User;
        // Delete user
        remove(userKey: string): void;
        // Undelete a deleted user
        undelete(resource: Schema.UserUndelete, userKey: string): void;
        // update user
        update(resource: Schema.User, userKey: string): AdminDirectory.Schema.User;
        // Watch for changes in users list
        watch(resource: Schema.Channel): AdminDirectory.Schema.Channel;
        // Watch for changes in users list
        watch(resource: Schema.Channel, optionalArgs: object): AdminDirectory.Schema.Channel;
      }
      interface VerificationCodesCollection {
        // Generate new backup verification codes for the user.
        generate(userKey: string): void;
        // Invalidate the current backup verification codes for the user.
        invalidate(userKey: string): void;
        // Returns the current set of valid backup verification codes for the specified user.
        list(userKey: string): AdminDirectory.Schema.VerificationCodes;
      }
    }
    namespace Schema {
      interface Alias {
        alias?: string;
        etag?: string;
        id?: string;
        kind?: string;
        primaryEmail?: string;
      }
      interface Aliases {
        aliases?: any[];
        etag?: string;
        kind?: string;
      }
      interface AppAccessCollections {
        blockedApiAccessBuckets?: string[];
        enforceSettingsForAndroidDrive?: boolean;
        errorMessage?: string;
        etag?: string;
        kind?: string;
        resourceId?: string;
        resourceName?: string;
        trustDomainOwnedApps?: boolean;
      }
      interface Asp {
        codeId?: number;
        creationTime?: string;
        etag?: string;
        kind?: string;
        lastTimeUsed?: string;
        name?: string;
        userKey?: string;
      }
      interface Asps {
        etag?: string;
        items?: AdminDirectory.Schema.Asp[];
        kind?: string;
      }
      interface Building {
        address?: AdminDirectory.Schema.BuildingAddress;
        buildingId?: string;
        buildingName?: string;
        coordinates?: AdminDirectory.Schema.BuildingCoordinates;
        description?: string;
        etags?: string;
        floorNames?: string[];
        kind?: string;
      }
      interface BuildingAddress {
        addressLines?: string[];
        administrativeArea?: string;
        languageCode?: string;
        locality?: string;
        postalCode?: string;
        regionCode?: string;
        sublocality?: string;
      }
      interface BuildingCoordinates {
        latitude?: number;
        longitude?: number;
      }
      interface Buildings {
        buildings?: AdminDirectory.Schema.Building[];
        etag?: string;
        kind?: string;
        nextPageToken?: string;
      }
      interface CalendarResource {
        buildingId?: string;
        capacity?: number;
        etags?: string;
        featureInstances?: object;
        floorName?: string;
        floorSection?: string;
        generatedResourceName?: string;
        kind?: string;
        resourceCategory?: string;
        resourceDescription?: string;
        resourceEmail?: string;
        resourceId?: string;
        resourceName?: string;
        resourceType?: string;
        userVisibleDescription?: string;
      }
      interface CalendarResources {
        etag?: string;
        items?: AdminDirectory.Schema.CalendarResource[];
        kind?: string;
        nextPageToken?: string;
      }
      interface Channel {
        address?: string;
        expiration?: string;
        id?: string;
        kind?: string;
        params?: object;
        payload?: boolean;
        resourceId?: string;
        resourceUri?: string;
        token?: string;
        type?: string;
      }
      interface ChromeOsDevice {
        activeTimeRanges?: AdminDirectory.Schema.ChromeOsDeviceActiveTimeRanges[];
        annotatedAssetId?: string;
        annotatedLocation?: string;
        annotatedUser?: string;
        autoUpdateExpiration?: string;
        bootMode?: string;
        cpuStatusReports?: AdminDirectory.Schema.ChromeOsDeviceCpuStatusReports[];
        deviceFiles?: AdminDirectory.Schema.ChromeOsDeviceDeviceFiles[];
        deviceId?: string;
        diskVolumeReports?: AdminDirectory.Schema.ChromeOsDeviceDiskVolumeReports[];
        etag?: string;
        ethernetMacAddress?: string;
        firmwareVersion?: string;
        kind?: string;
        lastEnrollmentTime?: string;
        lastSync?: string;
        macAddress?: string;
        meid?: string;
        model?: string;
        notes?: string;
        orderNumber?: string;
        orgUnitPath?: string;
        osVersion?: string;
        platformVersion?: string;
        recentUsers?: AdminDirectory.Schema.ChromeOsDeviceRecentUsers[];
        serialNumber?: string;
        status?: string;
        supportEndDate?: string;
        systemRamFreeReports?: AdminDirectory.Schema.ChromeOsDeviceSystemRamFreeReports[];
        systemRamTotal?: string;
        tpmVersionInfo?: AdminDirectory.Schema.ChromeOsDeviceTpmVersionInfo;
        willAutoRenew?: boolean;
      }
      interface ChromeOsDeviceAction {
        action?: string;
        deprovisionReason?: string;
      }
      interface ChromeOsDeviceActiveTimeRanges {
        activeTime?: number;
        date?: string;
      }
      interface ChromeOsDeviceCpuStatusReports {
        cpuTemperatureInfo?: AdminDirectory.Schema.ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo[];
        cpuUtilizationPercentageInfo?: number[];
        reportTime?: string;
      }
      interface ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo {
        label?: string;
        temperature?: number;
      }
      interface ChromeOsDeviceDeviceFiles {
        createTime?: string;
        downloadUrl?: string;
        name?: string;
        type?: string;
      }
      interface ChromeOsDeviceDiskVolumeReports {
        volumeInfo?: AdminDirectory.Schema.ChromeOsDeviceDiskVolumeReportsVolumeInfo[];
      }
      interface ChromeOsDeviceDiskVolumeReportsVolumeInfo {
        storageFree?: string;
        storageTotal?: string;
        volumeId?: string;
      }
      interface ChromeOsDeviceRecentUsers {
        email?: string;
        type?: string;
      }
      interface ChromeOsDeviceSystemRamFreeReports {
        reportTime?: string;
        systemRamFreeInfo?: string[];
      }
      interface ChromeOsDeviceTpmVersionInfo {
        family?: string;
        firmwareVersion?: string;
        manufacturer?: string;
        specLevel?: string;
        tpmModel?: string;
        vendorSpecific?: string;
      }
      interface ChromeOsDevices {
        chromeosdevices?: AdminDirectory.Schema.ChromeOsDevice[];
        etag?: string;
        kind?: string;
        nextPageToken?: string;
      }
      interface ChromeOsMoveDevicesToOu {
        deviceIds?: string[];
      }
      interface Customer {
        alternateEmail?: string;
        customerCreationTime?: string;
        customerDomain?: string;
        etag?: string;
        id?: string;
        kind?: string;
        language?: string;
        phoneNumber?: string;
        postalAddress?: AdminDirectory.Schema.CustomerPostalAddress;
      }
      interface CustomerPostalAddress {
        addressLine1?: string;
        addressLine2?: string;
        addressLine3?: string;
        contactName?: string;
        countryCode?: string;
        locality?: string;
        organizationName?: string;
        postalCode?: string;
        region?: string;
      }
      interface DomainAlias {
        creationTime?: string;
        domainAliasName?: string;
        etag?: string;
        kind?: string;
        parentDomainName?: string;
        verified?: boolean;
      }
      interface DomainAliases {
        domainAliases?: AdminDirectory.Schema.DomainAlias[];
        etag?: string;
        kind?: string;
      }
      interface Domains {
        creationTime?: string;
        domainAliases?: AdminDirectory.Schema.DomainAlias[];
        domainName?: string;
        etag?: string;
        isPrimary?: boolean;
        kind?: string;
        verified?: boolean;
      }
      interface Domains2 {
        domains?: AdminDirectory.Schema.Domains[];
        etag?: string;
        kind?: string;
      }
      interface Feature {
        etags?: string;
        kind?: string;
        name?: string;
      }
      interface FeatureInstance {
        feature?: AdminDirectory.Schema.Feature;
      }
      interface FeatureRename {
        newName?: string;
      }
      interface Features {
        etag?: string;
        features?: AdminDirectory.Schema.Feature[];
        kind?: string;
        nextPageToken?: string;
      }
      interface Group {
        adminCreated?: boolean;
        aliases?: string[];
        description?: string;
        directMembersCount?: string;
        email?: string;
        etag?: string;
        id?: string;
        kind?: string;
        name?: string;
        nonEditableAliases?: string[];
      }
      interface Groups {
        etag?: string;
        groups?: AdminDirectory.Schema.Group[];
        kind?: string;
        nextPageToken?: string;
      }
      interface Member {
        delivery_settings?: string;
        email?: string;
        etag?: string;
        id?: string;
        kind?: string;
        role?: string;
        status?: string;
        type?: string;
      }
      interface Members {
        etag?: string;
        kind?: string;
        members?: AdminDirectory.Schema.Member[];
        nextPageToken?: string;
      }
      interface MembersHasMember {
        isMember?: boolean;
      }
      interface MobileDevice {
        adbStatus?: boolean;
        applications?: AdminDirectory.Schema.MobileDeviceApplications[];
        basebandVersion?: string;
        bootloaderVersion?: string;
        brand?: string;
        buildNumber?: string;
        defaultLanguage?: string;
        developerOptionsStatus?: boolean;
        deviceCompromisedStatus?: string;
        deviceId?: string;
        devicePasswordStatus?: string;
        email?: string[];
        encryptionStatus?: string;
        etag?: string;
        firstSync?: string;
        hardware?: string;
        hardwareId?: string;
        imei?: string;
        kernelVersion?: string;
        kind?: string;
        lastSync?: string;
        managedAccountIsOnOwnerProfile?: boolean;
        manufacturer?: string;
        meid?: string;
        model?: string;
        name?: string[];
        networkOperator?: string;
        os?: string;
        otherAccountsInfo?: string[];
        privilege?: string;
        releaseVersion?: string;
        resourceId?: string;
        securityPatchLevel?: string;
        serialNumber?: string;
        status?: string;
        supportsWorkProfile?: boolean;
        type?: string;
        unknownSourcesStatus?: boolean;
        userAgent?: string;
        wifiMacAddress?: string;
      }
      interface MobileDeviceAction {
        action?: string;
      }
      interface MobileDeviceApplications {
        displayName?: string;
        packageName?: string;
        permission?: string[];
        versionCode?: number;
        versionName?: string;
      }
      interface MobileDevices {
        etag?: string;
        kind?: string;
        mobiledevices?: AdminDirectory.Schema.MobileDevice[];
        nextPageToken?: string;
      }
      interface Notification {
        body?: string;
        etag?: string;
        fromAddress?: string;
        isUnread?: boolean;
        kind?: string;
        notificationId?: string;
        sendTime?: string;
        subject?: string;
      }
      interface Notifications {
        etag?: string;
        items?: AdminDirectory.Schema.Notification[];
        kind?: string;
        nextPageToken?: string;
        unreadNotificationsCount?: number;
      }
      interface OrgUnit {
        blockInheritance?: boolean;
        description?: string;
        etag?: string;
        kind?: string;
        name?: string;
        orgUnitId?: string;
        orgUnitPath?: string;
        parentOrgUnitId?: string;
        parentOrgUnitPath?: string;
      }
      interface OrgUnits {
        etag?: string;
        kind?: string;
        organizationUnits?: AdminDirectory.Schema.OrgUnit[];
      }
      interface Privilege {
        childPrivileges?: AdminDirectory.Schema.Privilege[];
        etag?: string;
        isOuScopable?: boolean;
        kind?: string;
        privilegeName?: string;
        serviceId?: string;
        serviceName?: string;
      }
      interface Privileges {
        etag?: string;
        items?: AdminDirectory.Schema.Privilege[];
        kind?: string;
      }
      interface Role {
        etag?: string;
        isSuperAdminRole?: boolean;
        isSystemRole?: boolean;
        kind?: string;
        roleDescription?: string;
        roleId?: string;
        roleName?: string;
        rolePrivileges?: AdminDirectory.Schema.RoleRolePrivileges[];
      }
      interface RoleAssignment {
        assignedTo?: string;
        etag?: string;
        kind?: string;
        orgUnitId?: string;
        roleAssignmentId?: string;
        roleId?: string;
        scopeType?: string;
      }
      interface RoleAssignments {
        etag?: string;
        items?: AdminDirectory.Schema.RoleAssignment[];
        kind?: string;
        nextPageToken?: string;
      }
      interface RoleRolePrivileges {
        privilegeName?: string;
        serviceId?: string;
      }
      interface Roles {
        etag?: string;
        items?: AdminDirectory.Schema.Role[];
        kind?: string;
        nextPageToken?: string;
      }
      interface Schema {
        displayName?: string;
        etag?: string;
        fields?: AdminDirectory.Schema.SchemaFieldSpec[];
        kind?: string;
        schemaId?: string;
        schemaName?: string;
      }
      interface SchemaFieldSpec {
        displayName?: string;
        etag?: string;
        fieldId?: string;
        fieldName?: string;
        fieldType?: string;
        indexed?: boolean;
        kind?: string;
        multiValued?: boolean;
        numericIndexingSpec?: AdminDirectory.Schema.SchemaFieldSpecNumericIndexingSpec;
        readAccessType?: string;
      }
      interface SchemaFieldSpecNumericIndexingSpec {
        maxValue?: number;
        minValue?: number;
      }
      interface Schemas {
        etag?: string;
        kind?: string;
        schemas?: AdminDirectory.Schema.Schema[];
      }
      interface Token {
        anonymous?: boolean;
        clientId?: string;
        displayText?: string;
        etag?: string;
        kind?: string;
        nativeApp?: boolean;
        scopes?: string[];
        userKey?: string;
      }
      interface Tokens {
        etag?: string;
        items?: AdminDirectory.Schema.Token[];
        kind?: string;
      }
      interface TrustedAppId {
        androidPackageName?: string;
        certificateHashSHA1?: string;
        certificateHashSHA256?: string;
        etag?: string;
        kind?: string;
      }
      interface TrustedApps {
        etag?: string;
        kind?: string;
        nextPageToken?: string;
        trustedApps?: AdminDirectory.Schema.TrustedAppId[];
      }
      interface User {
        addresses?: object;
        agreedToTerms?: boolean;
        aliases?: string[];
        archived?: boolean;
        changePasswordAtNextLogin?: boolean;
        creationTime?: string;
        customSchemas?: object;
        customerId?: string;
        deletionTime?: string;
        emails?: object;
        etag?: string;
        externalIds?: object;
        gender?: object;
        hashFunction?: string;
        id?: string;
        ims?: object;
        includeInGlobalAddressList?: boolean;
        ipWhitelisted?: boolean;
        isAdmin?: boolean;
        isDelegatedAdmin?: boolean;
        isEnforcedIn2Sv?: boolean;
        isEnrolledIn2Sv?: boolean;
        isMailboxSetup?: boolean;
        keywords?: object;
        kind?: string;
        languages?: object;
        lastLoginTime?: string;
        locations?: object;
        name?: AdminDirectory.Schema.UserName;
        nonEditableAliases?: string[];
        notes?: object;
        orgUnitPath?: string;
        organizations?: object;
        password?: string;
        phones?: object;
        posixAccounts?: object;
        primaryEmail?: string;
        relations?: object;
        sshPublicKeys?: object;
        suspended?: boolean;
        suspensionReason?: string;
        thumbnailPhotoEtag?: string;
        thumbnailPhotoUrl?: string;
        websites?: object;
      }
      interface UserAbout {
        contentType?: string;
        value?: string;
      }
      interface UserAddress {
        country?: string;
        countryCode?: string;
        customType?: string;
        extendedAddress?: string;
        formatted?: string;
        locality?: string;
        poBox?: string;
        postalCode?: string;
        primary?: boolean;
        region?: string;
        sourceIsStructured?: boolean;
        streetAddress?: string;
        type?: string;
      }
      interface UserEmail {
        address?: string;
        customType?: string;
        primary?: boolean;
        type?: string;
      }
      interface UserExternalId {
        customType?: string;
        type?: string;
        value?: string;
      }
      interface UserGender {
        addressMeAs?: string;
        customGender?: string;
        type?: string;
      }
      interface UserIm {
        customProtocol?: string;
        customType?: string;
        im?: string;
        primary?: boolean;
        protocol?: string;
        type?: string;
      }
      interface UserKeyword {
        customType?: string;
        type?: string;
        value?: string;
      }
      interface UserLanguage {
        customLanguage?: string;
        languageCode?: string;
      }
      interface UserLocation {
        area?: string;
        buildingId?: string;
        customType?: string;
        deskCode?: string;
        floorName?: string;
        floorSection?: string;
        type?: string;
      }
      interface UserMakeAdmin {
        status?: boolean;
      }
      interface UserName {
        familyName?: string;
        fullName?: string;
        givenName?: string;
      }
      interface UserOrganization {
        costCenter?: string;
        customType?: string;
        department?: string;
        description?: string;
        domain?: string;
        fullTimeEquivalent?: number;
        location?: string;
        name?: string;
        primary?: boolean;
        symbol?: string;
        title?: string;
        type?: string;
      }
      interface UserPhone {
        customType?: string;
        primary?: boolean;
        type?: string;
        value?: string;
      }
      interface UserPhoto {
        etag?: string;
        height?: number;
        id?: string;
        kind?: string;
        mimeType?: string;
        photoData?: string;
        primaryEmail?: string;
        width?: number;
      }
      interface UserPosixAccount {
        accountId?: string;
        gecos?: string;
        gid?: string;
        homeDirectory?: string;
        operatingSystemType?: string;
        primary?: boolean;
        shell?: string;
        systemId?: string;
        uid?: string;
        username?: string;
      }
      interface UserRelation {
        customType?: string;
        type?: string;
        value?: string;
      }
      interface UserSshPublicKey {
        expirationTimeUsec?: string;
        fingerprint?: string;
        key?: string;
      }
      interface UserUndelete {
        orgUnitPath?: string;
      }
      interface UserWebsite {
        customType?: string;
        primary?: boolean;
        type?: string;
        value?: string;
      }
      interface Users {
        etag?: string;
        kind?: string;
        nextPageToken?: string;
        trigger_event?: string;
        users?: AdminDirectory.Schema.User[];
      }
      interface VerificationCode {
        etag?: string;
        kind?: string;
        userId?: string;
        verificationCode?: string;
      }
      interface VerificationCodes {
        etag?: string;
        items?: AdminDirectory.Schema.VerificationCode[];
        kind?: string;
      }
    }
  }
  interface AdminDirectory {
    Asps?: AdminDirectory.Collection.AspsCollection;
    Channels?: AdminDirectory.Collection.ChannelsCollection;
    Chromeosdevices?: AdminDirectory.Collection.ChromeosdevicesCollection;
    Customers?: AdminDirectory.Collection.CustomersCollection;
    DomainAliases?: AdminDirectory.Collection.DomainAliasesCollection;
    Domains?: AdminDirectory.Collection.DomainsCollection;
    Groups?: AdminDirectory.Collection.GroupsCollection;
    Members?: AdminDirectory.Collection.MembersCollection;
    Mobiledevices?: AdminDirectory.Collection.MobiledevicesCollection;
    Notifications?: AdminDirectory.Collection.NotificationsCollection;
    Orgunits?: AdminDirectory.Collection.OrgunitsCollection;
    Privileges?: AdminDirectory.Collection.PrivilegesCollection;
    ResolvedAppAccessSettings?: AdminDirectory.Collection.ResolvedAppAccessSettingsCollection;
    Resources?: AdminDirectory.Collection.ResourcesCollection;
    RoleAssignments?: AdminDirectory.Collection.RoleAssignmentsCollection;
    Roles?: AdminDirectory.Collection.RolesCollection;
    Schemas?: AdminDirectory.Collection.SchemasCollection;
    Tokens?: AdminDirectory.Collection.TokensCollection;
    Users?: AdminDirectory.Collection.UsersCollection;
    VerificationCodes?: AdminDirectory.Collection.VerificationCodesCollection;
    // Create a new instance of Alias
    newAlias(): AdminDirectory.Schema.Alias;
    // Create a new instance of Building
    newBuilding(): AdminDirectory.Schema.Building;
    // Create a new instance of BuildingAddress
    newBuildingAddress(): AdminDirectory.Schema.BuildingAddress;
    // Create a new instance of BuildingCoordinates
    newBuildingCoordinates(): AdminDirectory.Schema.BuildingCoordinates;
    // Create a new instance of CalendarResource
    newCalendarResource(): AdminDirectory.Schema.CalendarResource;
    // Create a new instance of Channel
    newChannel(): AdminDirectory.Schema.Channel;
    // Create a new instance of ChromeOsDevice
    newChromeOsDevice(): AdminDirectory.Schema.ChromeOsDevice;
    // Create a new instance of ChromeOsDeviceAction
    newChromeOsDeviceAction(): AdminDirectory.Schema.ChromeOsDeviceAction;
    // Create a new instance of ChromeOsDeviceActiveTimeRanges
    newChromeOsDeviceActiveTimeRanges(): AdminDirectory.Schema.ChromeOsDeviceActiveTimeRanges;
    // Create a new instance of ChromeOsDeviceCpuStatusReports
    newChromeOsDeviceCpuStatusReports(): AdminDirectory.Schema.ChromeOsDeviceCpuStatusReports;
    // Create a new instance of ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo
    newChromeOsDeviceCpuStatusReportsCpuTemperatureInfo(): AdminDirectory.Schema.ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo;
    // Create a new instance of ChromeOsDeviceDeviceFiles
    newChromeOsDeviceDeviceFiles(): AdminDirectory.Schema.ChromeOsDeviceDeviceFiles;
    // Create a new instance of ChromeOsDeviceDiskVolumeReports
    newChromeOsDeviceDiskVolumeReports(): AdminDirectory.Schema.ChromeOsDeviceDiskVolumeReports;
    // Create a new instance of ChromeOsDeviceDiskVolumeReportsVolumeInfo
    newChromeOsDeviceDiskVolumeReportsVolumeInfo(): AdminDirectory.Schema.ChromeOsDeviceDiskVolumeReportsVolumeInfo;
    // Create a new instance of ChromeOsDeviceRecentUsers
    newChromeOsDeviceRecentUsers(): AdminDirectory.Schema.ChromeOsDeviceRecentUsers;
    // Create a new instance of ChromeOsDeviceSystemRamFreeReports
    newChromeOsDeviceSystemRamFreeReports(): AdminDirectory.Schema.ChromeOsDeviceSystemRamFreeReports;
    // Create a new instance of ChromeOsDeviceTpmVersionInfo
    newChromeOsDeviceTpmVersionInfo(): AdminDirectory.Schema.ChromeOsDeviceTpmVersionInfo;
    // Create a new instance of ChromeOsMoveDevicesToOu
    newChromeOsMoveDevicesToOu(): AdminDirectory.Schema.ChromeOsMoveDevicesToOu;
    // Create a new instance of Customer
    newCustomer(): AdminDirectory.Schema.Customer;
    // Create a new instance of CustomerPostalAddress
    newCustomerPostalAddress(): AdminDirectory.Schema.CustomerPostalAddress;
    // Create a new instance of DomainAlias
    newDomainAlias(): AdminDirectory.Schema.DomainAlias;
    // Create a new instance of Domains
    newDomains(): AdminDirectory.Schema.Domains;
    // Create a new instance of Feature
    newFeature(): AdminDirectory.Schema.Feature;
    // Create a new instance of FeatureRename
    newFeatureRename(): AdminDirectory.Schema.FeatureRename;
    // Create a new instance of Group
    newGroup(): AdminDirectory.Schema.Group;
    // Create a new instance of Member
    newMember(): AdminDirectory.Schema.Member;
    // Create a new instance of MobileDeviceAction
    newMobileDeviceAction(): AdminDirectory.Schema.MobileDeviceAction;
    // Create a new instance of Notification
    newNotification(): AdminDirectory.Schema.Notification;
    // Create a new instance of OrgUnit
    newOrgUnit(): AdminDirectory.Schema.OrgUnit;
    // Create a new instance of Role
    newRole(): AdminDirectory.Schema.Role;
    // Create a new instance of RoleAssignment
    newRoleAssignment(): AdminDirectory.Schema.RoleAssignment;
    // Create a new instance of RoleRolePrivileges
    newRoleRolePrivileges(): AdminDirectory.Schema.RoleRolePrivileges;
    // Create a new instance of Schema
    newSchema(): AdminDirectory.Schema.Schema;
    // Create a new instance of SchemaFieldSpec
    newSchemaFieldSpec(): AdminDirectory.Schema.SchemaFieldSpec;
    // Create a new instance of SchemaFieldSpecNumericIndexingSpec
    newSchemaFieldSpecNumericIndexingSpec(): AdminDirectory.Schema.SchemaFieldSpecNumericIndexingSpec;
    // Create a new instance of User
    newUser(): AdminDirectory.Schema.User;
    // Create a new instance of UserMakeAdmin
    newUserMakeAdmin(): AdminDirectory.Schema.UserMakeAdmin;
    // Create a new instance of UserName
    newUserName(): AdminDirectory.Schema.UserName;
    // Create a new instance of UserPhoto
    newUserPhoto(): AdminDirectory.Schema.UserPhoto;
    // Create a new instance of UserUndelete
    newUserUndelete(): AdminDirectory.Schema.UserUndelete;
  }
}

declare var AdminDirectory: GoogleAppsScript.AdminDirectory;
