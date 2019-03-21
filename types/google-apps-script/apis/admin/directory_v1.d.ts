// Type definitions for Google Apps Script 2019-03-22
// Project: https://developers.google.com/apps-script/
// Definitions by: mtgto <https://github.com/mtgto/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Admin_directory_v1 {
    namespace Admin {
      namespace Directory_v1 {
        namespace Collection {
          namespace Groups {
            export interface AliasesCollection {
              // Add a alias for the group
              insert(resource: Admin.Directory_v1.Schema.Alias, groupKey: string): Admin_directory_v1.Admin.Directory_v1.Schema.Alias;
              // List all aliases for a group
              list(groupKey: string): Admin_directory_v1.Admin.Directory_v1.Schema.Aliases;
              // Remove a alias for the group
              remove(groupKey: string, alias: string): void;
            }
          }
          namespace Resources {
            export interface BuildingsCollection {
              // Retrieves a building.
              get(customer: string, buildingId: string): Admin_directory_v1.Admin.Directory_v1.Schema.Building;
              // Inserts a building.
              insert(resource: Admin.Directory_v1.Schema.Building, customer: string): Admin_directory_v1.Admin.Directory_v1.Schema.Building;
              // Inserts a building.
              insert(resource: Admin.Directory_v1.Schema.Building, customer: string, optionalArgs: object): Admin_directory_v1.Admin.Directory_v1.Schema.Building;
              // Retrieves a list of buildings for an account.
              list(customer: string): Admin_directory_v1.Admin.Directory_v1.Schema.Buildings;
              // Retrieves a list of buildings for an account.
              list(customer: string, optionalArgs: object): Admin_directory_v1.Admin.Directory_v1.Schema.Buildings;
              // Updates a building. This method supports patch semantics.
              patch(resource: Admin.Directory_v1.Schema.Building, customer: string, buildingId: string): Admin_directory_v1.Admin.Directory_v1.Schema.Building;
              // Updates a building. This method supports patch semantics.
              patch(resource: Admin.Directory_v1.Schema.Building, customer: string, buildingId: string, optionalArgs: object): Admin_directory_v1.Admin.Directory_v1.Schema.Building;
              // Deletes a building.
              remove(customer: string, buildingId: string): void;
              // Updates a building.
              update(resource: Admin.Directory_v1.Schema.Building, customer: string, buildingId: string): Admin_directory_v1.Admin.Directory_v1.Schema.Building;
              // Updates a building.
              update(resource: Admin.Directory_v1.Schema.Building, customer: string, buildingId: string, optionalArgs: object): Admin_directory_v1.Admin.Directory_v1.Schema.Building;
            }
            export interface CalendarsCollection {
              // Retrieves a calendar resource.
              get(customer: string, calendarResourceId: string): Admin_directory_v1.Admin.Directory_v1.Schema.CalendarResource;
              // Inserts a calendar resource.
              insert(resource: Admin.Directory_v1.Schema.CalendarResource, customer: string): Admin_directory_v1.Admin.Directory_v1.Schema.CalendarResource;
              // Retrieves a list of calendar resources for an account.
              list(customer: string): Admin_directory_v1.Admin.Directory_v1.Schema.CalendarResources;
              // Retrieves a list of calendar resources for an account.
              list(customer: string, optionalArgs: object): Admin_directory_v1.Admin.Directory_v1.Schema.CalendarResources;
              // Updates a calendar resource.
              // This method supports patch semantics, meaning you only need to include the fields you wish to update. Fields that are not present in the request will be preserved. This method supports patch semantics.
              patch(resource: Admin.Directory_v1.Schema.CalendarResource, customer: string, calendarResourceId: string): Admin_directory_v1.Admin.Directory_v1.Schema.CalendarResource;
              // Deletes a calendar resource.
              remove(customer: string, calendarResourceId: string): void;
              // Updates a calendar resource.
              // This method supports patch semantics, meaning you only need to include the fields you wish to update. Fields that are not present in the request will be preserved.
              update(resource: Admin.Directory_v1.Schema.CalendarResource, customer: string, calendarResourceId: string): Admin_directory_v1.Admin.Directory_v1.Schema.CalendarResource;
            }
            export interface FeaturesCollection {
              // Retrieves a feature.
              get(customer: string, featureKey: string): Admin_directory_v1.Admin.Directory_v1.Schema.Feature;
              // Inserts a feature.
              insert(resource: Admin.Directory_v1.Schema.Feature, customer: string): Admin_directory_v1.Admin.Directory_v1.Schema.Feature;
              // Retrieves a list of features for an account.
              list(customer: string): Admin_directory_v1.Admin.Directory_v1.Schema.Features;
              // Retrieves a list of features for an account.
              list(customer: string, optionalArgs: object): Admin_directory_v1.Admin.Directory_v1.Schema.Features;
              // Updates a feature. This method supports patch semantics.
              patch(resource: Admin.Directory_v1.Schema.Feature, customer: string, featureKey: string): Admin_directory_v1.Admin.Directory_v1.Schema.Feature;
              // Deletes a feature.
              remove(customer: string, featureKey: string): void;
              // Renames a feature.
              rename(resource: Admin.Directory_v1.Schema.FeatureRename, customer: string, oldName: string): void;
              // Updates a feature.
              update(resource: Admin.Directory_v1.Schema.Feature, customer: string, featureKey: string): Admin_directory_v1.Admin.Directory_v1.Schema.Feature;
            }
          }
          namespace Users {
            export interface AliasesCollection {
              // Add a alias for the user
              insert(resource: Admin.Directory_v1.Schema.Alias, userKey: string): Admin_directory_v1.Admin.Directory_v1.Schema.Alias;
              // List all aliases for a user
              list(userKey: string): Admin_directory_v1.Admin.Directory_v1.Schema.Aliases;
              // List all aliases for a user
              list(userKey: string, optionalArgs: object): Admin_directory_v1.Admin.Directory_v1.Schema.Aliases;
              // Remove a alias for the user
              remove(userKey: string, alias: string): void;
              // Watch for changes in user aliases list
              watch(resource: Admin.Directory_v1.Schema.Channel, userKey: string): Admin_directory_v1.Admin.Directory_v1.Schema.Channel;
              // Watch for changes in user aliases list
              watch(resource: Admin.Directory_v1.Schema.Channel, userKey: string, optionalArgs: object): Admin_directory_v1.Admin.Directory_v1.Schema.Channel;
            }
            export interface PhotosCollection {
              // Retrieve photo of a user
              get(userKey: string): Admin_directory_v1.Admin.Directory_v1.Schema.UserPhoto;
              // Add a photo for the user. This method supports patch semantics.
              patch(resource: Admin.Directory_v1.Schema.UserPhoto, userKey: string): Admin_directory_v1.Admin.Directory_v1.Schema.UserPhoto;
              // Remove photos for the user
              remove(userKey: string): void;
              // Add a photo for the user
              update(resource: Admin.Directory_v1.Schema.UserPhoto, userKey: string): Admin_directory_v1.Admin.Directory_v1.Schema.UserPhoto;
            }
          }
          export interface AspsCollection {
            // Get information about an ASP issued by a user.
            get(userKey: string, codeId: number): Admin_directory_v1.Admin.Directory_v1.Schema.Asp;
            // List the ASPs issued by a user.
            list(userKey: string): Admin_directory_v1.Admin.Directory_v1.Schema.Asps;
            // Delete an ASP issued by a user.
            remove(userKey: string, codeId: number): void;
          }
          export interface ChannelsCollection {
            // Stop watching resources through this channel
            stop(resource: Admin.Directory_v1.Schema.Channel): void;
          }
          export interface ChromeosdevicesCollection {
            // Take action on Chrome OS Device
            action(resource: Admin.Directory_v1.Schema.ChromeOsDeviceAction, customerId: string, resourceId: string): void;
            // Retrieve Chrome OS Device
            get(customerId: string, deviceId: string): Admin_directory_v1.Admin.Directory_v1.Schema.ChromeOsDevice;
            // Retrieve Chrome OS Device
            get(customerId: string, deviceId: string, optionalArgs: object): Admin_directory_v1.Admin.Directory_v1.Schema.ChromeOsDevice;
            // Retrieve all Chrome OS Devices of a customer (paginated)
            list(customerId: string): Admin_directory_v1.Admin.Directory_v1.Schema.ChromeOsDevices;
            // Retrieve all Chrome OS Devices of a customer (paginated)
            list(customerId: string, optionalArgs: object): Admin_directory_v1.Admin.Directory_v1.Schema.ChromeOsDevices;
            // Move or insert multiple Chrome OS Devices to organizational unit
            moveDevicesToOu(resource: Admin.Directory_v1.Schema.ChromeOsMoveDevicesToOu, customerId: string, orgUnitPath: string): void;
            // Update Chrome OS Device. This method supports patch semantics.
            patch(resource: Admin.Directory_v1.Schema.ChromeOsDevice, customerId: string, deviceId: string): Admin_directory_v1.Admin.Directory_v1.Schema.ChromeOsDevice;
            // Update Chrome OS Device. This method supports patch semantics.
            patch(resource: Admin.Directory_v1.Schema.ChromeOsDevice, customerId: string, deviceId: string, optionalArgs: object): Admin_directory_v1.Admin.Directory_v1.Schema.ChromeOsDevice;
            // Update Chrome OS Device
            update(resource: Admin.Directory_v1.Schema.ChromeOsDevice, customerId: string, deviceId: string): Admin_directory_v1.Admin.Directory_v1.Schema.ChromeOsDevice;
            // Update Chrome OS Device
            update(resource: Admin.Directory_v1.Schema.ChromeOsDevice, customerId: string, deviceId: string, optionalArgs: object): Admin_directory_v1.Admin.Directory_v1.Schema.ChromeOsDevice;
          }
          export interface CustomersCollection {
            // Retrieves a customer.
            get(customerKey: string): Admin_directory_v1.Admin.Directory_v1.Schema.Customer;
            // Updates a customer. This method supports patch semantics.
            patch(resource: Admin.Directory_v1.Schema.Customer, customerKey: string): Admin_directory_v1.Admin.Directory_v1.Schema.Customer;
            // Updates a customer.
            update(resource: Admin.Directory_v1.Schema.Customer, customerKey: string): Admin_directory_v1.Admin.Directory_v1.Schema.Customer;
          }
          export interface DomainAliasesCollection {
            // Retrieves a domain alias of the customer.
            get(customer: string, domainAliasName: string): Admin_directory_v1.Admin.Directory_v1.Schema.DomainAlias;
            // Inserts a Domain alias of the customer.
            insert(resource: Admin.Directory_v1.Schema.DomainAlias, customer: string): Admin_directory_v1.Admin.Directory_v1.Schema.DomainAlias;
            // Lists the domain aliases of the customer.
            list(customer: string): Admin_directory_v1.Admin.Directory_v1.Schema.DomainAliases;
            // Lists the domain aliases of the customer.
            list(customer: string, optionalArgs: object): Admin_directory_v1.Admin.Directory_v1.Schema.DomainAliases;
            // Deletes a Domain Alias of the customer.
            remove(customer: string, domainAliasName: string): void;
          }
          export interface DomainsCollection {
            // Retrieves a domain of the customer.
            get(customer: string, domainName: string): Admin_directory_v1.Admin.Directory_v1.Schema.Domains;
            // Inserts a domain of the customer.
            insert(resource: Admin.Directory_v1.Schema.Domains, customer: string): Admin_directory_v1.Admin.Directory_v1.Schema.Domains;
            // Lists the domains of the customer.
            list(customer: string): Admin_directory_v1.Admin.Directory_v1.Schema.Domains2;
            // Deletes a domain of the customer.
            remove(customer: string, domainName: string): void;
          }
          export interface GroupsCollection {
            Aliases?: Admin_directory_v1.Admin.Directory_v1.Collection.Groups.AliasesCollection;
            // Retrieve Group
            get(groupKey: string): Admin_directory_v1.Admin.Directory_v1.Schema.Group;
            // Create Group
            insert(resource: Admin.Directory_v1.Schema.Group): Admin_directory_v1.Admin.Directory_v1.Schema.Group;
            // Retrieve all groups of a domain or of a user given a userKey (paginated)
            list(): Admin_directory_v1.Admin.Directory_v1.Schema.Groups;
            // Retrieve all groups of a domain or of a user given a userKey (paginated)
            list(optionalArgs: object): Admin_directory_v1.Admin.Directory_v1.Schema.Groups;
            // Update Group. This method supports patch semantics.
            patch(resource: Admin.Directory_v1.Schema.Group, groupKey: string): Admin_directory_v1.Admin.Directory_v1.Schema.Group;
            // Delete Group
            remove(groupKey: string): void;
            // Update Group
            update(resource: Admin.Directory_v1.Schema.Group, groupKey: string): Admin_directory_v1.Admin.Directory_v1.Schema.Group;
          }
          export interface MembersCollection {
            // Retrieve Group Member
            get(groupKey: string, memberKey: string): Admin_directory_v1.Admin.Directory_v1.Schema.Member;
            // Checks whether the given user is a member of the group. Membership can be direct or nested.
            hasMember(groupKey: string, memberKey: string): Admin_directory_v1.Admin.Directory_v1.Schema.MembersHasMember;
            // Add user to the specified group.
            insert(resource: Admin.Directory_v1.Schema.Member, groupKey: string): Admin_directory_v1.Admin.Directory_v1.Schema.Member;
            // Retrieve all members in a group (paginated)
            list(groupKey: string): Admin_directory_v1.Admin.Directory_v1.Schema.Members;
            // Retrieve all members in a group (paginated)
            list(groupKey: string, optionalArgs: object): Admin_directory_v1.Admin.Directory_v1.Schema.Members;
            // Update membership of a user in the specified group. This method supports patch semantics.
            patch(resource: Admin.Directory_v1.Schema.Member, groupKey: string, memberKey: string): Admin_directory_v1.Admin.Directory_v1.Schema.Member;
            // Remove membership.
            remove(groupKey: string, memberKey: string): void;
            // Update membership of a user in the specified group.
            update(resource: Admin.Directory_v1.Schema.Member, groupKey: string, memberKey: string): Admin_directory_v1.Admin.Directory_v1.Schema.Member;
          }
          export interface MobiledevicesCollection {
            // Take action on Mobile Device
            action(resource: Admin.Directory_v1.Schema.MobileDeviceAction, customerId: string, resourceId: string): void;
            // Retrieve Mobile Device
            get(customerId: string, resourceId: string): Admin_directory_v1.Admin.Directory_v1.Schema.MobileDevice;
            // Retrieve Mobile Device
            get(customerId: string, resourceId: string, optionalArgs: object): Admin_directory_v1.Admin.Directory_v1.Schema.MobileDevice;
            // Retrieve all Mobile Devices of a customer (paginated)
            list(customerId: string): Admin_directory_v1.Admin.Directory_v1.Schema.MobileDevices;
            // Retrieve all Mobile Devices of a customer (paginated)
            list(customerId: string, optionalArgs: object): Admin_directory_v1.Admin.Directory_v1.Schema.MobileDevices;
            // Delete Mobile Device
            remove(customerId: string, resourceId: string): void;
          }
          export interface NotificationsCollection {
            // Retrieves a notification.
            get(customer: string, notificationId: string): Admin_directory_v1.Admin.Directory_v1.Schema.Notification;
            // Retrieves a list of notifications.
            list(customer: string): Admin_directory_v1.Admin.Directory_v1.Schema.Notifications;
            // Retrieves a list of notifications.
            list(customer: string, optionalArgs: object): Admin_directory_v1.Admin.Directory_v1.Schema.Notifications;
            // Updates a notification. This method supports patch semantics.
            patch(resource: Admin.Directory_v1.Schema.Notification, customer: string, notificationId: string): Admin_directory_v1.Admin.Directory_v1.Schema.Notification;
            // Deletes a notification
            remove(customer: string, notificationId: string): void;
            // Updates a notification.
            update(resource: Admin.Directory_v1.Schema.Notification, customer: string, notificationId: string): Admin_directory_v1.Admin.Directory_v1.Schema.Notification;
          }
          export interface OrgunitsCollection {
            // Retrieve organizational unit
            get(customerId: string, orgUnitPath: String[]): Admin_directory_v1.Admin.Directory_v1.Schema.OrgUnit;
            // Add organizational unit
            insert(resource: Admin.Directory_v1.Schema.OrgUnit, customerId: string): Admin_directory_v1.Admin.Directory_v1.Schema.OrgUnit;
            // Retrieve all organizational units
            list(customerId: string): Admin_directory_v1.Admin.Directory_v1.Schema.OrgUnits;
            // Retrieve all organizational units
            list(customerId: string, optionalArgs: object): Admin_directory_v1.Admin.Directory_v1.Schema.OrgUnits;
            // Update organizational unit. This method supports patch semantics.
            patch(resource: Admin.Directory_v1.Schema.OrgUnit, customerId: string, orgUnitPath: String[]): Admin_directory_v1.Admin.Directory_v1.Schema.OrgUnit;
            // Remove organizational unit
            remove(customerId: string, orgUnitPath: String[]): void;
            // Update organizational unit
            update(resource: Admin.Directory_v1.Schema.OrgUnit, customerId: string, orgUnitPath: String[]): Admin_directory_v1.Admin.Directory_v1.Schema.OrgUnit;
          }
          export interface PrivilegesCollection {
            // Retrieves a paginated list of all privileges for a customer.
            list(customer: string): Admin_directory_v1.Admin.Directory_v1.Schema.Privileges;
          }
          export interface ResolvedAppAccessSettingsCollection {
            // Retrieves resolved app access settings of the logged in user.
            GetSettings(): Admin_directory_v1.Admin.Directory_v1.Schema.AppAccessCollections;
            // Retrieves the list of apps trusted by the admin of the logged in user.
            ListTrustedApps(): Admin_directory_v1.Admin.Directory_v1.Schema.TrustedApps;
          }
          export interface ResourcesCollection {
            Buildings?: Admin_directory_v1.Admin.Directory_v1.Collection.Resources.BuildingsCollection;
            Calendars?: Admin_directory_v1.Admin.Directory_v1.Collection.Resources.CalendarsCollection;
            Features?: Admin_directory_v1.Admin.Directory_v1.Collection.Resources.FeaturesCollection;
          }
          export interface RoleAssignmentsCollection {
            // Retrieve a role assignment.
            get(customer: string, roleAssignmentId: string): Admin_directory_v1.Admin.Directory_v1.Schema.RoleAssignment;
            // Creates a role assignment.
            insert(resource: Admin.Directory_v1.Schema.RoleAssignment, customer: string): Admin_directory_v1.Admin.Directory_v1.Schema.RoleAssignment;
            // Retrieves a paginated list of all roleAssignments.
            list(customer: string): Admin_directory_v1.Admin.Directory_v1.Schema.RoleAssignments;
            // Retrieves a paginated list of all roleAssignments.
            list(customer: string, optionalArgs: object): Admin_directory_v1.Admin.Directory_v1.Schema.RoleAssignments;
            // Deletes a role assignment.
            remove(customer: string, roleAssignmentId: string): void;
          }
          export interface RolesCollection {
            // Retrieves a role.
            get(customer: string, roleId: string): Admin_directory_v1.Admin.Directory_v1.Schema.Role;
            // Creates a role.
            insert(resource: Admin.Directory_v1.Schema.Role, customer: string): Admin_directory_v1.Admin.Directory_v1.Schema.Role;
            // Retrieves a paginated list of all the roles in a domain.
            list(customer: string): Admin_directory_v1.Admin.Directory_v1.Schema.Roles;
            // Retrieves a paginated list of all the roles in a domain.
            list(customer: string, optionalArgs: object): Admin_directory_v1.Admin.Directory_v1.Schema.Roles;
            // Updates a role. This method supports patch semantics.
            patch(resource: Admin.Directory_v1.Schema.Role, customer: string, roleId: string): Admin_directory_v1.Admin.Directory_v1.Schema.Role;
            // Deletes a role.
            remove(customer: string, roleId: string): void;
            // Updates a role.
            update(resource: Admin.Directory_v1.Schema.Role, customer: string, roleId: string): Admin_directory_v1.Admin.Directory_v1.Schema.Role;
          }
          export interface SchemasCollection {
            // Retrieve schema
            get(customerId: string, schemaKey: string): Admin_directory_v1.Admin.Directory_v1.Schema.Schema;
            // Create schema.
            insert(resource: Admin.Directory_v1.Schema.Schema, customerId: string): Admin_directory_v1.Admin.Directory_v1.Schema.Schema;
            // Retrieve all schemas for a customer
            list(customerId: string): Admin_directory_v1.Admin.Directory_v1.Schema.Schemas;
            // Update schema. This method supports patch semantics.
            patch(resource: Admin.Directory_v1.Schema.Schema, customerId: string, schemaKey: string): Admin_directory_v1.Admin.Directory_v1.Schema.Schema;
            // Delete schema
            remove(customerId: string, schemaKey: string): void;
            // Update schema
            update(resource: Admin.Directory_v1.Schema.Schema, customerId: string, schemaKey: string): Admin_directory_v1.Admin.Directory_v1.Schema.Schema;
          }
          export interface TokensCollection {
            // Get information about an access token issued by a user.
            get(userKey: string, clientId: string): Admin_directory_v1.Admin.Directory_v1.Schema.Token;
            // Returns the set of tokens specified user has issued to 3rd party applications.
            list(userKey: string): Admin_directory_v1.Admin.Directory_v1.Schema.Tokens;
            // Delete all access tokens issued by a user for an application.
            remove(userKey: string, clientId: string): void;
          }
          export interface UsersCollection {
            Aliases?: Admin_directory_v1.Admin.Directory_v1.Collection.Users.AliasesCollection;
            Photos?: Admin_directory_v1.Admin.Directory_v1.Collection.Users.PhotosCollection;
            // retrieve user
            get(userKey: string): Admin_directory_v1.Admin.Directory_v1.Schema.User;
            // retrieve user
            get(userKey: string, optionalArgs: object): Admin_directory_v1.Admin.Directory_v1.Schema.User;
            // create user.
            insert(resource: Admin.Directory_v1.Schema.User): Admin_directory_v1.Admin.Directory_v1.Schema.User;
            // Retrieve either deleted users or all users in a domain (paginated)
            list(): Admin_directory_v1.Admin.Directory_v1.Schema.Users;
            // Retrieve either deleted users or all users in a domain (paginated)
            list(optionalArgs: object): Admin_directory_v1.Admin.Directory_v1.Schema.Users;
            // change admin status of a user
            makeAdmin(resource: Admin.Directory_v1.Schema.UserMakeAdmin, userKey: string): void;
            // update user. This method supports patch semantics.
            patch(resource: Admin.Directory_v1.Schema.User, userKey: string): Admin_directory_v1.Admin.Directory_v1.Schema.User;
            // Delete user
            remove(userKey: string): void;
            // Undelete a deleted user
            undelete(resource: Admin.Directory_v1.Schema.UserUndelete, userKey: string): void;
            // update user
            update(resource: Admin.Directory_v1.Schema.User, userKey: string): Admin_directory_v1.Admin.Directory_v1.Schema.User;
            // Watch for changes in users list
            watch(resource: Admin.Directory_v1.Schema.Channel): Admin_directory_v1.Admin.Directory_v1.Schema.Channel;
            // Watch for changes in users list
            watch(resource: Admin.Directory_v1.Schema.Channel, optionalArgs: object): Admin_directory_v1.Admin.Directory_v1.Schema.Channel;
          }
          export interface VerificationCodesCollection {
            // Generate new backup verification codes for the user.
            generate(userKey: string): void;
            // Invalidate the current backup verification codes for the user.
            invalidate(userKey: string): void;
            // Returns the current set of valid backup verification codes for the specified user.
            list(userKey: string): Admin_directory_v1.Admin.Directory_v1.Schema.VerificationCodes;
          }
        }
        namespace Schema {
          export interface Alias {
            alias?: string;
            etag?: string;
            id?: string;
            kind?: string;
            primaryEmail?: string;
          }
          export interface Aliases {
            aliases?: Object[];
            etag?: string;
            kind?: string;
          }
          export interface AppAccessCollections {
            blockedApiAccessBuckets?: String[];
            enforceSettingsForAndroidDrive?: Boolean;
            errorMessage?: string;
            etag?: string;
            kind?: string;
            resourceId?: string;
            resourceName?: string;
            trustDomainOwnedApps?: Boolean;
          }
          export interface Asp {
            codeId?: number;
            creationTime?: string;
            etag?: string;
            kind?: string;
            lastTimeUsed?: string;
            name?: string;
            userKey?: string;
          }
          export interface Asps {
            etag?: string;
            items?: Admin_directory_v1.Admin.Directory_v1.Schema.Asp[];
            kind?: string;
          }
          export interface Building {
            address?: Admin_directory_v1.Admin.Directory_v1.Schema.BuildingAddress;
            buildingId?: string;
            buildingName?: string;
            coordinates?: Admin_directory_v1.Admin.Directory_v1.Schema.BuildingCoordinates;
            description?: string;
            etags?: string;
            floorNames?: String[];
            kind?: string;
          }
          export interface BuildingAddress {
            addressLines?: String[];
            administrativeArea?: string;
            languageCode?: string;
            locality?: string;
            postalCode?: string;
            regionCode?: string;
            sublocality?: string;
          }
          export interface BuildingCoordinates {
            latitude?: Number;
            longitude?: Number;
          }
          export interface Buildings {
            buildings?: Admin_directory_v1.Admin.Directory_v1.Schema.Building[];
            etag?: string;
            kind?: string;
            nextPageToken?: string;
          }
          export interface CalendarResource {
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
          export interface CalendarResources {
            etag?: string;
            items?: Admin_directory_v1.Admin.Directory_v1.Schema.CalendarResource[];
            kind?: string;
            nextPageToken?: string;
          }
          export interface Channel {
            address?: string;
            expiration?: string;
            id?: string;
            kind?: string;
            params?: object;
            payload?: Boolean;
            resourceId?: string;
            resourceUri?: string;
            token?: string;
            type?: string;
          }
          export interface ChromeOsDevice {
            activeTimeRanges?: Admin_directory_v1.Admin.Directory_v1.Schema.ChromeOsDeviceActiveTimeRanges[];
            annotatedAssetId?: string;
            annotatedLocation?: string;
            annotatedUser?: string;
            bootMode?: string;
            cpuStatusReports?: Admin_directory_v1.Admin.Directory_v1.Schema.ChromeOsDeviceCpuStatusReports[];
            deviceFiles?: Admin_directory_v1.Admin.Directory_v1.Schema.ChromeOsDeviceDeviceFiles[];
            deviceId?: string;
            diskVolumeReports?: Admin_directory_v1.Admin.Directory_v1.Schema.ChromeOsDeviceDiskVolumeReports[];
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
            recentUsers?: Admin_directory_v1.Admin.Directory_v1.Schema.ChromeOsDeviceRecentUsers[];
            serialNumber?: string;
            status?: string;
            supportEndDate?: string;
            systemRamFreeReports?: Admin_directory_v1.Admin.Directory_v1.Schema.ChromeOsDeviceSystemRamFreeReports[];
            systemRamTotal?: string;
            tpmVersionInfo?: Admin_directory_v1.Admin.Directory_v1.Schema.ChromeOsDeviceTpmVersionInfo;
            willAutoRenew?: Boolean;
          }
          export interface ChromeOsDeviceAction {
            action?: string;
            deprovisionReason?: string;
          }
          export interface ChromeOsDeviceActiveTimeRanges {
            activeTime?: number;
            date?: string;
          }
          export interface ChromeOsDeviceCpuStatusReports {
            cpuTemperatureInfo?: Admin_directory_v1.Admin.Directory_v1.Schema.ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo[];
            cpuUtilizationPercentageInfo?: number[];
            reportTime?: string;
          }
          export interface ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo {
            label?: string;
            temperature?: number;
          }
          export interface ChromeOsDeviceDeviceFiles {
            createTime?: string;
            downloadUrl?: string;
            name?: string;
            type?: string;
          }
          export interface ChromeOsDeviceDiskVolumeReports {
            volumeInfo?: Admin_directory_v1.Admin.Directory_v1.Schema.ChromeOsDeviceDiskVolumeReportsVolumeInfo[];
          }
          export interface ChromeOsDeviceDiskVolumeReportsVolumeInfo {
            storageFree?: string;
            storageTotal?: string;
            volumeId?: string;
          }
          export interface ChromeOsDeviceRecentUsers {
            email?: string;
            type?: string;
          }
          export interface ChromeOsDeviceSystemRamFreeReports {
            reportTime?: string;
            systemRamFreeInfo?: String[];
          }
          export interface ChromeOsDeviceTpmVersionInfo {
            family?: string;
            firmwareVersion?: string;
            manufacturer?: string;
            specLevel?: string;
            tpmModel?: string;
            vendorSpecific?: string;
          }
          export interface ChromeOsDevices {
            chromeosdevices?: Admin_directory_v1.Admin.Directory_v1.Schema.ChromeOsDevice[];
            etag?: string;
            kind?: string;
            nextPageToken?: string;
          }
          export interface ChromeOsMoveDevicesToOu {
            deviceIds?: String[];
          }
          export interface Customer {
            alternateEmail?: string;
            customerCreationTime?: string;
            customerDomain?: string;
            etag?: string;
            id?: string;
            kind?: string;
            language?: string;
            phoneNumber?: string;
            postalAddress?: Admin_directory_v1.Admin.Directory_v1.Schema.CustomerPostalAddress;
          }
          export interface CustomerPostalAddress {
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
          export interface DomainAlias {
            creationTime?: string;
            domainAliasName?: string;
            etag?: string;
            kind?: string;
            parentDomainName?: string;
            verified?: Boolean;
          }
          export interface DomainAliases {
            domainAliases?: Admin_directory_v1.Admin.Directory_v1.Schema.DomainAlias[];
            etag?: string;
            kind?: string;
          }
          export interface Domains {
            creationTime?: string;
            domainAliases?: Admin_directory_v1.Admin.Directory_v1.Schema.DomainAlias[];
            domainName?: string;
            etag?: string;
            isPrimary?: Boolean;
            kind?: string;
            verified?: Boolean;
          }
          export interface Domains2 {
            domains?: Admin_directory_v1.Admin.Directory_v1.Schema.Domains[];
            etag?: string;
            kind?: string;
          }
          export interface Feature {
            etags?: string;
            kind?: string;
            name?: string;
          }
          export interface FeatureInstance {
            feature?: Admin_directory_v1.Admin.Directory_v1.Schema.Feature;
          }
          export interface FeatureRename {
            newName?: string;
          }
          export interface Features {
            etag?: string;
            features?: Admin_directory_v1.Admin.Directory_v1.Schema.Feature[];
            kind?: string;
            nextPageToken?: string;
          }
          export interface Group {
            adminCreated?: Boolean;
            aliases?: String[];
            description?: string;
            directMembersCount?: string;
            email?: string;
            etag?: string;
            id?: string;
            kind?: string;
            name?: string;
            nonEditableAliases?: String[];
          }
          export interface Groups {
            etag?: string;
            groups?: Admin_directory_v1.Admin.Directory_v1.Schema.Group[];
            kind?: string;
            nextPageToken?: string;
          }
          export interface Member {
            delivery_settings?: string;
            email?: string;
            etag?: string;
            id?: string;
            kind?: string;
            role?: string;
            status?: string;
            type?: string;
          }
          export interface Members {
            etag?: string;
            kind?: string;
            members?: Admin_directory_v1.Admin.Directory_v1.Schema.Member[];
            nextPageToken?: string;
          }
          export interface MembersHasMember {
            isMember?: Boolean;
          }
          export interface MobileDevice {
            adbStatus?: Boolean;
            applications?: Admin_directory_v1.Admin.Directory_v1.Schema.MobileDeviceApplications[];
            basebandVersion?: string;
            bootloaderVersion?: string;
            brand?: string;
            buildNumber?: string;
            defaultLanguage?: string;
            developerOptionsStatus?: Boolean;
            deviceCompromisedStatus?: string;
            deviceId?: string;
            devicePasswordStatus?: string;
            email?: String[];
            encryptionStatus?: string;
            etag?: string;
            firstSync?: string;
            hardware?: string;
            hardwareId?: string;
            imei?: string;
            kernelVersion?: string;
            kind?: string;
            lastSync?: string;
            managedAccountIsOnOwnerProfile?: Boolean;
            manufacturer?: string;
            meid?: string;
            model?: string;
            name?: String[];
            networkOperator?: string;
            os?: string;
            otherAccountsInfo?: String[];
            privilege?: string;
            releaseVersion?: string;
            resourceId?: string;
            securityPatchLevel?: string;
            serialNumber?: string;
            status?: string;
            supportsWorkProfile?: Boolean;
            type?: string;
            unknownSourcesStatus?: Boolean;
            userAgent?: string;
            wifiMacAddress?: string;
          }
          export interface MobileDeviceAction {
            action?: string;
          }
          export interface MobileDeviceApplications {
            displayName?: string;
            packageName?: string;
            permission?: String[];
            versionCode?: number;
            versionName?: string;
          }
          export interface MobileDevices {
            etag?: string;
            kind?: string;
            mobiledevices?: Admin_directory_v1.Admin.Directory_v1.Schema.MobileDevice[];
            nextPageToken?: string;
          }
          export interface Notification {
            body?: string;
            etag?: string;
            fromAddress?: string;
            isUnread?: Boolean;
            kind?: string;
            notificationId?: string;
            sendTime?: string;
            subject?: string;
          }
          export interface Notifications {
            etag?: string;
            items?: Admin_directory_v1.Admin.Directory_v1.Schema.Notification[];
            kind?: string;
            nextPageToken?: string;
            unreadNotificationsCount?: number;
          }
          export interface OrgUnit {
            blockInheritance?: Boolean;
            description?: string;
            etag?: string;
            kind?: string;
            name?: string;
            orgUnitId?: string;
            orgUnitPath?: string;
            parentOrgUnitId?: string;
            parentOrgUnitPath?: string;
          }
          export interface OrgUnits {
            etag?: string;
            kind?: string;
            organizationUnits?: Admin_directory_v1.Admin.Directory_v1.Schema.OrgUnit[];
          }
          export interface Privilege {
            childPrivileges?: Admin_directory_v1.Admin.Directory_v1.Schema.Privilege[];
            etag?: string;
            isOuScopable?: Boolean;
            kind?: string;
            privilegeName?: string;
            serviceId?: string;
            serviceName?: string;
          }
          export interface Privileges {
            etag?: string;
            items?: Admin_directory_v1.Admin.Directory_v1.Schema.Privilege[];
            kind?: string;
          }
          export interface Role {
            etag?: string;
            isSuperAdminRole?: Boolean;
            isSystemRole?: Boolean;
            kind?: string;
            roleDescription?: string;
            roleId?: string;
            roleName?: string;
            rolePrivileges?: Admin_directory_v1.Admin.Directory_v1.Schema.RoleRolePrivileges[];
          }
          export interface RoleAssignment {
            assignedTo?: string;
            etag?: string;
            kind?: string;
            orgUnitId?: string;
            roleAssignmentId?: string;
            roleId?: string;
            scopeType?: string;
          }
          export interface RoleAssignments {
            etag?: string;
            items?: Admin_directory_v1.Admin.Directory_v1.Schema.RoleAssignment[];
            kind?: string;
            nextPageToken?: string;
          }
          export interface RoleRolePrivileges {
            privilegeName?: string;
            serviceId?: string;
          }
          export interface Roles {
            etag?: string;
            items?: Admin_directory_v1.Admin.Directory_v1.Schema.Role[];
            kind?: string;
            nextPageToken?: string;
          }
          export interface Schema {
            displayName?: string;
            etag?: string;
            fields?: Admin_directory_v1.Admin.Directory_v1.Schema.SchemaFieldSpec[];
            kind?: string;
            schemaId?: string;
            schemaName?: string;
          }
          export interface SchemaFieldSpec {
            displayName?: string;
            etag?: string;
            fieldId?: string;
            fieldName?: string;
            fieldType?: string;
            indexed?: Boolean;
            kind?: string;
            multiValued?: Boolean;
            numericIndexingSpec?: Admin_directory_v1.Admin.Directory_v1.Schema.SchemaFieldSpecNumericIndexingSpec;
            readAccessType?: string;
          }
          export interface SchemaFieldSpecNumericIndexingSpec {
            maxValue?: Number;
            minValue?: Number;
          }
          export interface Schemas {
            etag?: string;
            kind?: string;
            schemas?: Admin_directory_v1.Admin.Directory_v1.Schema.Schema[];
          }
          export interface Token {
            anonymous?: Boolean;
            clientId?: string;
            displayText?: string;
            etag?: string;
            kind?: string;
            nativeApp?: Boolean;
            scopes?: String[];
            userKey?: string;
          }
          export interface Tokens {
            etag?: string;
            items?: Admin_directory_v1.Admin.Directory_v1.Schema.Token[];
            kind?: string;
          }
          export interface TrustedAppId {
            androidPackageName?: string;
            certificateHashSHA1?: string;
            certificateHashSHA256?: string;
            etag?: string;
            kind?: string;
          }
          export interface TrustedApps {
            etag?: string;
            kind?: string;
            nextPageToken?: string;
            trustedApps?: Admin_directory_v1.Admin.Directory_v1.Schema.TrustedAppId[];
          }
          export interface User {
            addresses?: object;
            agreedToTerms?: Boolean;
            aliases?: String[];
            archived?: Boolean;
            changePasswordAtNextLogin?: Boolean;
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
            includeInGlobalAddressList?: Boolean;
            ipWhitelisted?: Boolean;
            isAdmin?: Boolean;
            isDelegatedAdmin?: Boolean;
            isEnforcedIn2Sv?: Boolean;
            isEnrolledIn2Sv?: Boolean;
            isMailboxSetup?: Boolean;
            keywords?: object;
            kind?: string;
            languages?: object;
            lastLoginTime?: string;
            locations?: object;
            name?: Admin_directory_v1.Admin.Directory_v1.Schema.UserName;
            nonEditableAliases?: String[];
            notes?: object;
            orgUnitPath?: string;
            organizations?: object;
            password?: string;
            phones?: object;
            posixAccounts?: object;
            primaryEmail?: string;
            relations?: object;
            sshPublicKeys?: object;
            suspended?: Boolean;
            suspensionReason?: string;
            thumbnailPhotoEtag?: string;
            thumbnailPhotoUrl?: string;
            websites?: object;
          }
          export interface UserAbout {
            contentType?: string;
            value?: string;
          }
          export interface UserAddress {
            country?: string;
            countryCode?: string;
            customType?: string;
            extendedAddress?: string;
            formatted?: string;
            locality?: string;
            poBox?: string;
            postalCode?: string;
            primary?: Boolean;
            region?: string;
            sourceIsStructured?: Boolean;
            streetAddress?: string;
            type?: string;
          }
          export interface UserEmail {
            address?: string;
            customType?: string;
            primary?: Boolean;
            type?: string;
          }
          export interface UserExternalId {
            customType?: string;
            type?: string;
            value?: string;
          }
          export interface UserGender {
            addressMeAs?: string;
            customGender?: string;
            type?: string;
          }
          export interface UserIm {
            customProtocol?: string;
            customType?: string;
            im?: string;
            primary?: Boolean;
            protocol?: string;
            type?: string;
          }
          export interface UserKeyword {
            customType?: string;
            type?: string;
            value?: string;
          }
          export interface UserLanguage {
            customLanguage?: string;
            languageCode?: string;
          }
          export interface UserLocation {
            area?: string;
            buildingId?: string;
            customType?: string;
            deskCode?: string;
            floorName?: string;
            floorSection?: string;
            type?: string;
          }
          export interface UserMakeAdmin {
            status?: Boolean;
          }
          export interface UserName {
            familyName?: string;
            fullName?: string;
            givenName?: string;
          }
          export interface UserOrganization {
            costCenter?: string;
            customType?: string;
            department?: string;
            description?: string;
            domain?: string;
            fullTimeEquivalent?: number;
            location?: string;
            name?: string;
            primary?: Boolean;
            symbol?: string;
            title?: string;
            type?: string;
          }
          export interface UserPhone {
            customType?: string;
            primary?: Boolean;
            type?: string;
            value?: string;
          }
          export interface UserPhoto {
            etag?: string;
            height?: number;
            id?: string;
            kind?: string;
            mimeType?: string;
            photoData?: string;
            primaryEmail?: string;
            width?: number;
          }
          export interface UserPosixAccount {
            accountId?: string;
            gecos?: string;
            gid?: string;
            homeDirectory?: string;
            operatingSystemType?: string;
            primary?: Boolean;
            shell?: string;
            systemId?: string;
            uid?: string;
            username?: string;
          }
          export interface UserRelation {
            customType?: string;
            type?: string;
            value?: string;
          }
          export interface UserSshPublicKey {
            expirationTimeUsec?: string;
            fingerprint?: string;
            key?: string;
          }
          export interface UserUndelete {
            orgUnitPath?: string;
          }
          export interface UserWebsite {
            customType?: string;
            primary?: Boolean;
            type?: string;
            value?: string;
          }
          export interface Users {
            etag?: string;
            kind?: string;
            nextPageToken?: string;
            trigger_event?: string;
            users?: Admin_directory_v1.Admin.Directory_v1.Schema.User[];
          }
          export interface VerificationCode {
            etag?: string;
            kind?: string;
            userId?: string;
            verificationCode?: string;
          }
          export interface VerificationCodes {
            etag?: string;
            items?: Admin_directory_v1.Admin.Directory_v1.Schema.VerificationCode[];
            kind?: string;
          }
        }
      }
    }
  }
  export interface Admin_directory_v1 {
    Asps?: Admin_directory_v1.Admin.Directory_v1.Collection.AspsCollection;
    Channels?: Admin_directory_v1.Admin.Directory_v1.Collection.ChannelsCollection;
    Chromeosdevices?: Admin_directory_v1.Admin.Directory_v1.Collection.ChromeosdevicesCollection;
    Customers?: Admin_directory_v1.Admin.Directory_v1.Collection.CustomersCollection;
    DomainAliases?: Admin_directory_v1.Admin.Directory_v1.Collection.DomainAliasesCollection;
    Domains?: Admin_directory_v1.Admin.Directory_v1.Collection.DomainsCollection;
    Groups?: Admin_directory_v1.Admin.Directory_v1.Collection.GroupsCollection;
    Members?: Admin_directory_v1.Admin.Directory_v1.Collection.MembersCollection;
    Mobiledevices?: Admin_directory_v1.Admin.Directory_v1.Collection.MobiledevicesCollection;
    Notifications?: Admin_directory_v1.Admin.Directory_v1.Collection.NotificationsCollection;
    Orgunits?: Admin_directory_v1.Admin.Directory_v1.Collection.OrgunitsCollection;
    Privileges?: Admin_directory_v1.Admin.Directory_v1.Collection.PrivilegesCollection;
    ResolvedAppAccessSettings?: Admin_directory_v1.Admin.Directory_v1.Collection.ResolvedAppAccessSettingsCollection;
    Resources?: Admin_directory_v1.Admin.Directory_v1.Collection.ResourcesCollection;
    RoleAssignments?: Admin_directory_v1.Admin.Directory_v1.Collection.RoleAssignmentsCollection;
    Roles?: Admin_directory_v1.Admin.Directory_v1.Collection.RolesCollection;
    Schemas?: Admin_directory_v1.Admin.Directory_v1.Collection.SchemasCollection;
    Tokens?: Admin_directory_v1.Admin.Directory_v1.Collection.TokensCollection;
    Users?: Admin_directory_v1.Admin.Directory_v1.Collection.UsersCollection;
    VerificationCodes?: Admin_directory_v1.Admin.Directory_v1.Collection.VerificationCodesCollection;
    // Create a new instance of Alias
    newAlias(): Admin_directory_v1.Admin.Directory_v1.Schema.Alias;
    // Create a new instance of Building
    newBuilding(): Admin_directory_v1.Admin.Directory_v1.Schema.Building;
    // Create a new instance of BuildingAddress
    newBuildingAddress(): Admin_directory_v1.Admin.Directory_v1.Schema.BuildingAddress;
    // Create a new instance of BuildingCoordinates
    newBuildingCoordinates(): Admin_directory_v1.Admin.Directory_v1.Schema.BuildingCoordinates;
    // Create a new instance of CalendarResource
    newCalendarResource(): Admin_directory_v1.Admin.Directory_v1.Schema.CalendarResource;
    // Create a new instance of Channel
    newChannel(): Admin_directory_v1.Admin.Directory_v1.Schema.Channel;
    // Create a new instance of ChromeOsDevice
    newChromeOsDevice(): Admin_directory_v1.Admin.Directory_v1.Schema.ChromeOsDevice;
    // Create a new instance of ChromeOsDeviceAction
    newChromeOsDeviceAction(): Admin_directory_v1.Admin.Directory_v1.Schema.ChromeOsDeviceAction;
    // Create a new instance of ChromeOsDeviceActiveTimeRanges
    newChromeOsDeviceActiveTimeRanges(): Admin_directory_v1.Admin.Directory_v1.Schema.ChromeOsDeviceActiveTimeRanges;
    // Create a new instance of ChromeOsDeviceCpuStatusReports
    newChromeOsDeviceCpuStatusReports(): Admin_directory_v1.Admin.Directory_v1.Schema.ChromeOsDeviceCpuStatusReports;
    // Create a new instance of ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo
    newChromeOsDeviceCpuStatusReportsCpuTemperatureInfo(): Admin_directory_v1.Admin.Directory_v1.Schema.ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo;
    // Create a new instance of ChromeOsDeviceDeviceFiles
    newChromeOsDeviceDeviceFiles(): Admin_directory_v1.Admin.Directory_v1.Schema.ChromeOsDeviceDeviceFiles;
    // Create a new instance of ChromeOsDeviceDiskVolumeReports
    newChromeOsDeviceDiskVolumeReports(): Admin_directory_v1.Admin.Directory_v1.Schema.ChromeOsDeviceDiskVolumeReports;
    // Create a new instance of ChromeOsDeviceDiskVolumeReportsVolumeInfo
    newChromeOsDeviceDiskVolumeReportsVolumeInfo(): Admin_directory_v1.Admin.Directory_v1.Schema.ChromeOsDeviceDiskVolumeReportsVolumeInfo;
    // Create a new instance of ChromeOsDeviceRecentUsers
    newChromeOsDeviceRecentUsers(): Admin_directory_v1.Admin.Directory_v1.Schema.ChromeOsDeviceRecentUsers;
    // Create a new instance of ChromeOsDeviceSystemRamFreeReports
    newChromeOsDeviceSystemRamFreeReports(): Admin_directory_v1.Admin.Directory_v1.Schema.ChromeOsDeviceSystemRamFreeReports;
    // Create a new instance of ChromeOsDeviceTpmVersionInfo
    newChromeOsDeviceTpmVersionInfo(): Admin_directory_v1.Admin.Directory_v1.Schema.ChromeOsDeviceTpmVersionInfo;
    // Create a new instance of ChromeOsMoveDevicesToOu
    newChromeOsMoveDevicesToOu(): Admin_directory_v1.Admin.Directory_v1.Schema.ChromeOsMoveDevicesToOu;
    // Create a new instance of Customer
    newCustomer(): Admin_directory_v1.Admin.Directory_v1.Schema.Customer;
    // Create a new instance of CustomerPostalAddress
    newCustomerPostalAddress(): Admin_directory_v1.Admin.Directory_v1.Schema.CustomerPostalAddress;
    // Create a new instance of DomainAlias
    newDomainAlias(): Admin_directory_v1.Admin.Directory_v1.Schema.DomainAlias;
    // Create a new instance of Domains
    newDomains(): Admin_directory_v1.Admin.Directory_v1.Schema.Domains;
    // Create a new instance of Feature
    newFeature(): Admin_directory_v1.Admin.Directory_v1.Schema.Feature;
    // Create a new instance of FeatureRename
    newFeatureRename(): Admin_directory_v1.Admin.Directory_v1.Schema.FeatureRename;
    // Create a new instance of Group
    newGroup(): Admin_directory_v1.Admin.Directory_v1.Schema.Group;
    // Create a new instance of Member
    newMember(): Admin_directory_v1.Admin.Directory_v1.Schema.Member;
    // Create a new instance of MobileDeviceAction
    newMobileDeviceAction(): Admin_directory_v1.Admin.Directory_v1.Schema.MobileDeviceAction;
    // Create a new instance of Notification
    newNotification(): Admin_directory_v1.Admin.Directory_v1.Schema.Notification;
    // Create a new instance of OrgUnit
    newOrgUnit(): Admin_directory_v1.Admin.Directory_v1.Schema.OrgUnit;
    // Create a new instance of Role
    newRole(): Admin_directory_v1.Admin.Directory_v1.Schema.Role;
    // Create a new instance of RoleAssignment
    newRoleAssignment(): Admin_directory_v1.Admin.Directory_v1.Schema.RoleAssignment;
    // Create a new instance of RoleRolePrivileges
    newRoleRolePrivileges(): Admin_directory_v1.Admin.Directory_v1.Schema.RoleRolePrivileges;
    // Create a new instance of Schema
    newSchema(): Admin_directory_v1.Admin.Directory_v1.Schema.Schema;
    // Create a new instance of SchemaFieldSpec
    newSchemaFieldSpec(): Admin_directory_v1.Admin.Directory_v1.Schema.SchemaFieldSpec;
    // Create a new instance of SchemaFieldSpecNumericIndexingSpec
    newSchemaFieldSpecNumericIndexingSpec(): Admin_directory_v1.Admin.Directory_v1.Schema.SchemaFieldSpecNumericIndexingSpec;
    // Create a new instance of User
    newUser(): Admin_directory_v1.Admin.Directory_v1.Schema.User;
    // Create a new instance of UserMakeAdmin
    newUserMakeAdmin(): Admin_directory_v1.Admin.Directory_v1.Schema.UserMakeAdmin;
    // Create a new instance of UserName
    newUserName(): Admin_directory_v1.Admin.Directory_v1.Schema.UserName;
    // Create a new instance of UserPhoto
    newUserPhoto(): Admin_directory_v1.Admin.Directory_v1.Schema.UserPhoto;
    // Create a new instance of UserUndelete
    newUserUndelete(): Admin_directory_v1.Admin.Directory_v1.Schema.UserUndelete;
  }
}
