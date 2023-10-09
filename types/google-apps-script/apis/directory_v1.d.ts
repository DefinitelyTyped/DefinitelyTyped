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
                    insert(
                        resource: Schema.Building,
                        customer: string,
                        optionalArgs: object,
                    ): AdminDirectory.Schema.Building;
                    // Retrieves a list of buildings for an account.
                    list(customer: string): AdminDirectory.Schema.Buildings;
                    // Retrieves a list of buildings for an account.
                    list(customer: string, optionalArgs: object): AdminDirectory.Schema.Buildings;
                    // Updates a building. This method supports patch semantics.
                    patch(
                        resource: Schema.Building,
                        customer: string,
                        buildingId: string,
                    ): AdminDirectory.Schema.Building;
                    // Updates a building. This method supports patch semantics.
                    patch(
                        resource: Schema.Building,
                        customer: string,
                        buildingId: string,
                        optionalArgs: object,
                    ): AdminDirectory.Schema.Building;
                    // Deletes a building.
                    remove(customer: string, buildingId: string): void;
                    // Updates a building.
                    update(
                        resource: Schema.Building,
                        customer: string,
                        buildingId: string,
                    ): AdminDirectory.Schema.Building;
                    // Updates a building.
                    update(
                        resource: Schema.Building,
                        customer: string,
                        buildingId: string,
                        optionalArgs: object,
                    ): AdminDirectory.Schema.Building;
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
                    patch(
                        resource: Schema.CalendarResource,
                        customer: string,
                        calendarResourceId: string,
                    ): AdminDirectory.Schema.CalendarResource;
                    // Deletes a calendar resource.
                    remove(customer: string, calendarResourceId: string): void;
                    // Updates a calendar resource.
                    // This method supports patch semantics, meaning you only need to include the fields you wish to update. Fields that are not present in the request will be preserved.
                    update(
                        resource: Schema.CalendarResource,
                        customer: string,
                        calendarResourceId: string,
                    ): AdminDirectory.Schema.CalendarResource;
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
                    patch(
                        resource: Schema.Feature,
                        customer: string,
                        featureKey: string,
                    ): AdminDirectory.Schema.Feature;
                    // Deletes a feature.
                    remove(customer: string, featureKey: string): void;
                    // Renames a feature.
                    rename(resource: Schema.FeatureRename, customer: string, oldName: string): void;
                    // Updates a feature.
                    update(
                        resource: Schema.Feature,
                        customer: string,
                        featureKey: string,
                    ): AdminDirectory.Schema.Feature;
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
                    watch(
                        resource: Schema.Channel,
                        userKey: string,
                        optionalArgs: object,
                    ): AdminDirectory.Schema.Channel;
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
                moveDevicesToOu(
                    resource: Schema.ChromeOsMoveDevicesToOu,
                    customerId: string,
                    orgUnitPath: string,
                ): void;
                // Update Chrome OS Device. This method supports patch semantics.
                patch(
                    resource: Schema.ChromeOsDevice,
                    customerId: string,
                    deviceId: string,
                ): AdminDirectory.Schema.ChromeOsDevice;
                // Update Chrome OS Device. This method supports patch semantics.
                patch(
                    resource: Schema.ChromeOsDevice,
                    customerId: string,
                    deviceId: string,
                    optionalArgs: object,
                ): AdminDirectory.Schema.ChromeOsDevice;
                // Update Chrome OS Device
                update(
                    resource: Schema.ChromeOsDevice,
                    customerId: string,
                    deviceId: string,
                ): AdminDirectory.Schema.ChromeOsDevice;
                // Update Chrome OS Device
                update(
                    resource: Schema.ChromeOsDevice,
                    customerId: string,
                    deviceId: string,
                    optionalArgs: object,
                ): AdminDirectory.Schema.ChromeOsDevice;
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
                Aliases?: AdminDirectory.Collection.Groups.AliasesCollection | undefined;
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
                patch(
                    resource: Schema.Notification,
                    customer: string,
                    notificationId: string,
                ): AdminDirectory.Schema.Notification;
                // Deletes a notification
                remove(customer: string, notificationId: string): void;
                // Updates a notification.
                update(
                    resource: Schema.Notification,
                    customer: string,
                    notificationId: string,
                ): AdminDirectory.Schema.Notification;
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
                patch(
                    resource: Schema.OrgUnit,
                    customerId: string,
                    orgUnitPath: string[],
                ): AdminDirectory.Schema.OrgUnit;
                // Remove organizational unit
                remove(customerId: string, orgUnitPath: string[]): void;
                // Update organizational unit
                update(
                    resource: Schema.OrgUnit,
                    customerId: string,
                    orgUnitPath: string[],
                ): AdminDirectory.Schema.OrgUnit;
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
                Buildings?: AdminDirectory.Collection.Resources.BuildingsCollection | undefined;
                Calendars?: AdminDirectory.Collection.Resources.CalendarsCollection | undefined;
                Features?: AdminDirectory.Collection.Resources.FeaturesCollection | undefined;
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
                Aliases?: AdminDirectory.Collection.Users.AliasesCollection | undefined;
                Photos?: AdminDirectory.Collection.Users.PhotosCollection | undefined;
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
                alias?: string | undefined;
                etag?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                primaryEmail?: string | undefined;
            }
            interface Aliases {
                aliases?: any[] | undefined;
                etag?: string | undefined;
                kind?: string | undefined;
            }
            interface AppAccessCollections {
                blockedApiAccessBuckets?: string[] | undefined;
                enforceSettingsForAndroidDrive?: boolean | undefined;
                errorMessage?: string | undefined;
                etag?: string | undefined;
                kind?: string | undefined;
                resourceId?: string | undefined;
                resourceName?: string | undefined;
                trustDomainOwnedApps?: boolean | undefined;
            }
            interface Asp {
                codeId?: number | undefined;
                creationTime?: string | undefined;
                etag?: string | undefined;
                kind?: string | undefined;
                lastTimeUsed?: string | undefined;
                name?: string | undefined;
                userKey?: string | undefined;
            }
            interface Asps {
                etag?: string | undefined;
                items?: AdminDirectory.Schema.Asp[] | undefined;
                kind?: string | undefined;
            }
            interface Building {
                address?: AdminDirectory.Schema.BuildingAddress | undefined;
                buildingId?: string | undefined;
                buildingName?: string | undefined;
                coordinates?: AdminDirectory.Schema.BuildingCoordinates | undefined;
                description?: string | undefined;
                etags?: string | undefined;
                floorNames?: string[] | undefined;
                kind?: string | undefined;
            }
            interface BuildingAddress {
                addressLines?: string[] | undefined;
                administrativeArea?: string | undefined;
                languageCode?: string | undefined;
                locality?: string | undefined;
                postalCode?: string | undefined;
                regionCode?: string | undefined;
                sublocality?: string | undefined;
            }
            interface BuildingCoordinates {
                latitude?: number | undefined;
                longitude?: number | undefined;
            }
            interface Buildings {
                buildings?: AdminDirectory.Schema.Building[] | undefined;
                etag?: string | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
            }
            interface CalendarResource {
                buildingId?: string | undefined;
                capacity?: number | undefined;
                etags?: string | undefined;
                featureInstances?: object | undefined;
                floorName?: string | undefined;
                floorSection?: string | undefined;
                generatedResourceName?: string | undefined;
                kind?: string | undefined;
                resourceCategory?: string | undefined;
                resourceDescription?: string | undefined;
                resourceEmail?: string | undefined;
                resourceId?: string | undefined;
                resourceName?: string | undefined;
                resourceType?: string | undefined;
                userVisibleDescription?: string | undefined;
            }
            interface CalendarResources {
                etag?: string | undefined;
                items?: AdminDirectory.Schema.CalendarResource[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
            }
            interface Channel {
                address?: string | undefined;
                expiration?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                params?: object | undefined;
                payload?: boolean | undefined;
                resourceId?: string | undefined;
                resourceUri?: string | undefined;
                token?: string | undefined;
                type?: string | undefined;
            }
            interface ChromeOsDevice {
                activeTimeRanges?: AdminDirectory.Schema.ChromeOsDeviceActiveTimeRanges[] | undefined;
                annotatedAssetId?: string | undefined;
                annotatedLocation?: string | undefined;
                annotatedUser?: string | undefined;
                autoUpdateExpiration?: string | undefined;
                bootMode?: string | undefined;
                cpuStatusReports?: AdminDirectory.Schema.ChromeOsDeviceCpuStatusReports[] | undefined;
                deviceFiles?: AdminDirectory.Schema.ChromeOsDeviceDeviceFiles[] | undefined;
                deviceId?: string | undefined;
                diskVolumeReports?: AdminDirectory.Schema.ChromeOsDeviceDiskVolumeReports[] | undefined;
                etag?: string | undefined;
                ethernetMacAddress?: string | undefined;
                firmwareVersion?: string | undefined;
                kind?: string | undefined;
                lastEnrollmentTime?: string | undefined;
                lastSync?: string | undefined;
                macAddress?: string | undefined;
                meid?: string | undefined;
                model?: string | undefined;
                notes?: string | undefined;
                orderNumber?: string | undefined;
                orgUnitPath?: string | undefined;
                osVersion?: string | undefined;
                platformVersion?: string | undefined;
                recentUsers?: AdminDirectory.Schema.ChromeOsDeviceRecentUsers[] | undefined;
                serialNumber?: string | undefined;
                status?: string | undefined;
                supportEndDate?: string | undefined;
                systemRamFreeReports?: AdminDirectory.Schema.ChromeOsDeviceSystemRamFreeReports[] | undefined;
                systemRamTotal?: string | undefined;
                tpmVersionInfo?: AdminDirectory.Schema.ChromeOsDeviceTpmVersionInfo | undefined;
                willAutoRenew?: boolean | undefined;
            }
            interface ChromeOsDeviceAction {
                action?: string | undefined;
                deprovisionReason?: string | undefined;
            }
            interface ChromeOsDeviceActiveTimeRanges {
                activeTime?: number | undefined;
                date?: string | undefined;
            }
            interface ChromeOsDeviceCpuStatusReports {
                cpuTemperatureInfo?:
                    | AdminDirectory.Schema.ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo[]
                    | undefined;
                cpuUtilizationPercentageInfo?: number[] | undefined;
                reportTime?: string | undefined;
            }
            interface ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo {
                label?: string | undefined;
                temperature?: number | undefined;
            }
            interface ChromeOsDeviceDeviceFiles {
                createTime?: string | undefined;
                downloadUrl?: string | undefined;
                name?: string | undefined;
                type?: string | undefined;
            }
            interface ChromeOsDeviceDiskVolumeReports {
                volumeInfo?: AdminDirectory.Schema.ChromeOsDeviceDiskVolumeReportsVolumeInfo[] | undefined;
            }
            interface ChromeOsDeviceDiskVolumeReportsVolumeInfo {
                storageFree?: string | undefined;
                storageTotal?: string | undefined;
                volumeId?: string | undefined;
            }
            interface ChromeOsDeviceRecentUsers {
                email?: string | undefined;
                type?: string | undefined;
            }
            interface ChromeOsDeviceSystemRamFreeReports {
                reportTime?: string | undefined;
                systemRamFreeInfo?: string[] | undefined;
            }
            interface ChromeOsDeviceTpmVersionInfo {
                family?: string | undefined;
                firmwareVersion?: string | undefined;
                manufacturer?: string | undefined;
                specLevel?: string | undefined;
                tpmModel?: string | undefined;
                vendorSpecific?: string | undefined;
            }
            interface ChromeOsDevices {
                chromeosdevices?: AdminDirectory.Schema.ChromeOsDevice[] | undefined;
                etag?: string | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
            }
            interface ChromeOsMoveDevicesToOu {
                deviceIds?: string[] | undefined;
            }
            interface Customer {
                alternateEmail?: string | undefined;
                customerCreationTime?: string | undefined;
                customerDomain?: string | undefined;
                etag?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                language?: string | undefined;
                phoneNumber?: string | undefined;
                postalAddress?: AdminDirectory.Schema.CustomerPostalAddress | undefined;
            }
            interface CustomerPostalAddress {
                addressLine1?: string | undefined;
                addressLine2?: string | undefined;
                addressLine3?: string | undefined;
                contactName?: string | undefined;
                countryCode?: string | undefined;
                locality?: string | undefined;
                organizationName?: string | undefined;
                postalCode?: string | undefined;
                region?: string | undefined;
            }
            interface DomainAlias {
                creationTime?: string | undefined;
                domainAliasName?: string | undefined;
                etag?: string | undefined;
                kind?: string | undefined;
                parentDomainName?: string | undefined;
                verified?: boolean | undefined;
            }
            interface DomainAliases {
                domainAliases?: AdminDirectory.Schema.DomainAlias[] | undefined;
                etag?: string | undefined;
                kind?: string | undefined;
            }
            interface Domains {
                creationTime?: string | undefined;
                domainAliases?: AdminDirectory.Schema.DomainAlias[] | undefined;
                domainName?: string | undefined;
                etag?: string | undefined;
                isPrimary?: boolean | undefined;
                kind?: string | undefined;
                verified?: boolean | undefined;
            }
            interface Domains2 {
                domains?: AdminDirectory.Schema.Domains[] | undefined;
                etag?: string | undefined;
                kind?: string | undefined;
            }
            interface Feature {
                etags?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
            }
            interface FeatureInstance {
                feature?: AdminDirectory.Schema.Feature | undefined;
            }
            interface FeatureRename {
                newName?: string | undefined;
            }
            interface Features {
                etag?: string | undefined;
                features?: AdminDirectory.Schema.Feature[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
            }
            interface Group {
                adminCreated?: boolean | undefined;
                aliases?: string[] | undefined;
                description?: string | undefined;
                directMembersCount?: string | undefined;
                email?: string | undefined;
                etag?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
                nonEditableAliases?: string[] | undefined;
            }
            interface Groups {
                etag?: string | undefined;
                groups?: AdminDirectory.Schema.Group[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
            }
            interface Member {
                delivery_settings?: string | undefined;
                email?: string | undefined;
                etag?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                role?: string | undefined;
                status?: string | undefined;
                type?: string | undefined;
            }
            interface Members {
                etag?: string | undefined;
                kind?: string | undefined;
                members?: AdminDirectory.Schema.Member[] | undefined;
                nextPageToken?: string | undefined;
            }
            interface MembersHasMember {
                isMember?: boolean | undefined;
            }
            interface MobileDevice {
                adbStatus?: boolean | undefined;
                applications?: AdminDirectory.Schema.MobileDeviceApplications[] | undefined;
                basebandVersion?: string | undefined;
                bootloaderVersion?: string | undefined;
                brand?: string | undefined;
                buildNumber?: string | undefined;
                defaultLanguage?: string | undefined;
                developerOptionsStatus?: boolean | undefined;
                deviceCompromisedStatus?: string | undefined;
                deviceId?: string | undefined;
                devicePasswordStatus?: string | undefined;
                email?: string[] | undefined;
                encryptionStatus?: string | undefined;
                etag?: string | undefined;
                firstSync?: string | undefined;
                hardware?: string | undefined;
                hardwareId?: string | undefined;
                imei?: string | undefined;
                kernelVersion?: string | undefined;
                kind?: string | undefined;
                lastSync?: string | undefined;
                managedAccountIsOnOwnerProfile?: boolean | undefined;
                manufacturer?: string | undefined;
                meid?: string | undefined;
                model?: string | undefined;
                name?: string[] | undefined;
                networkOperator?: string | undefined;
                os?: string | undefined;
                otherAccountsInfo?: string[] | undefined;
                privilege?: string | undefined;
                releaseVersion?: string | undefined;
                resourceId?: string | undefined;
                securityPatchLevel?: string | undefined;
                serialNumber?: string | undefined;
                status?: string | undefined;
                supportsWorkProfile?: boolean | undefined;
                type?: string | undefined;
                unknownSourcesStatus?: boolean | undefined;
                userAgent?: string | undefined;
                wifiMacAddress?: string | undefined;
            }
            interface MobileDeviceAction {
                action?: string | undefined;
            }
            interface MobileDeviceApplications {
                displayName?: string | undefined;
                packageName?: string | undefined;
                permission?: string[] | undefined;
                versionCode?: number | undefined;
                versionName?: string | undefined;
            }
            interface MobileDevices {
                etag?: string | undefined;
                kind?: string | undefined;
                mobiledevices?: AdminDirectory.Schema.MobileDevice[] | undefined;
                nextPageToken?: string | undefined;
            }
            interface Notification {
                body?: string | undefined;
                etag?: string | undefined;
                fromAddress?: string | undefined;
                isUnread?: boolean | undefined;
                kind?: string | undefined;
                notificationId?: string | undefined;
                sendTime?: string | undefined;
                subject?: string | undefined;
            }
            interface Notifications {
                etag?: string | undefined;
                items?: AdminDirectory.Schema.Notification[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                unreadNotificationsCount?: number | undefined;
            }
            interface OrgUnit {
                blockInheritance?: boolean | undefined;
                description?: string | undefined;
                etag?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
                orgUnitId?: string | undefined;
                orgUnitPath?: string | undefined;
                parentOrgUnitId?: string | undefined;
                parentOrgUnitPath?: string | undefined;
            }
            interface OrgUnits {
                etag?: string | undefined;
                kind?: string | undefined;
                organizationUnits?: AdminDirectory.Schema.OrgUnit[] | undefined;
            }
            interface Privilege {
                childPrivileges?: AdminDirectory.Schema.Privilege[] | undefined;
                etag?: string | undefined;
                isOuScopable?: boolean | undefined;
                kind?: string | undefined;
                privilegeName?: string | undefined;
                serviceId?: string | undefined;
                serviceName?: string | undefined;
            }
            interface Privileges {
                etag?: string | undefined;
                items?: AdminDirectory.Schema.Privilege[] | undefined;
                kind?: string | undefined;
            }
            interface Role {
                etag?: string | undefined;
                isSuperAdminRole?: boolean | undefined;
                isSystemRole?: boolean | undefined;
                kind?: string | undefined;
                roleDescription?: string | undefined;
                roleId?: string | undefined;
                roleName?: string | undefined;
                rolePrivileges?: AdminDirectory.Schema.RoleRolePrivileges[] | undefined;
            }
            interface RoleAssignment {
                assignedTo?: string | undefined;
                etag?: string | undefined;
                kind?: string | undefined;
                orgUnitId?: string | undefined;
                roleAssignmentId?: string | undefined;
                roleId?: string | undefined;
                scopeType?: string | undefined;
            }
            interface RoleAssignments {
                etag?: string | undefined;
                items?: AdminDirectory.Schema.RoleAssignment[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
            }
            interface RoleRolePrivileges {
                privilegeName?: string | undefined;
                serviceId?: string | undefined;
            }
            interface Roles {
                etag?: string | undefined;
                items?: AdminDirectory.Schema.Role[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
            }
            interface Schema {
                displayName?: string | undefined;
                etag?: string | undefined;
                fields?: AdminDirectory.Schema.SchemaFieldSpec[] | undefined;
                kind?: string | undefined;
                schemaId?: string | undefined;
                schemaName?: string | undefined;
            }
            interface SchemaFieldSpec {
                displayName?: string | undefined;
                etag?: string | undefined;
                fieldId?: string | undefined;
                fieldName?: string | undefined;
                fieldType?: string | undefined;
                indexed?: boolean | undefined;
                kind?: string | undefined;
                multiValued?: boolean | undefined;
                numericIndexingSpec?: AdminDirectory.Schema.SchemaFieldSpecNumericIndexingSpec | undefined;
                readAccessType?: string | undefined;
            }
            interface SchemaFieldSpecNumericIndexingSpec {
                maxValue?: number | undefined;
                minValue?: number | undefined;
            }
            interface Schemas {
                etag?: string | undefined;
                kind?: string | undefined;
                schemas?: AdminDirectory.Schema.Schema[] | undefined;
            }
            interface Token {
                anonymous?: boolean | undefined;
                clientId?: string | undefined;
                displayText?: string | undefined;
                etag?: string | undefined;
                kind?: string | undefined;
                nativeApp?: boolean | undefined;
                scopes?: string[] | undefined;
                userKey?: string | undefined;
            }
            interface Tokens {
                etag?: string | undefined;
                items?: AdminDirectory.Schema.Token[] | undefined;
                kind?: string | undefined;
            }
            interface TrustedAppId {
                androidPackageName?: string | undefined;
                certificateHashSHA1?: string | undefined;
                certificateHashSHA256?: string | undefined;
                etag?: string | undefined;
                kind?: string | undefined;
            }
            interface TrustedApps {
                etag?: string | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                trustedApps?: AdminDirectory.Schema.TrustedAppId[] | undefined;
            }
            interface User {
                addresses?: object[] | undefined;
                agreedToTerms?: boolean | undefined;
                aliases?: string[] | undefined;
                archived?: boolean | undefined;
                changePasswordAtNextLogin?: boolean | undefined;
                creationTime?: string | undefined;
                customSchemas?: object | undefined;
                customerId?: string | undefined;
                deletionTime?: string | undefined;
                emails?: object[] | undefined;
                etag?: string | undefined;
                externalIds?: object[] | undefined;
                gender?: object | undefined;
                hashFunction?: string | undefined;
                id?: string | undefined;
                ims?: object[] | undefined;
                includeInGlobalAddressList?: boolean | undefined;
                ipWhitelisted?: boolean | undefined;
                isAdmin?: boolean | undefined;
                isDelegatedAdmin?: boolean | undefined;
                isEnforcedIn2Sv?: boolean | undefined;
                isEnrolledIn2Sv?: boolean | undefined;
                isMailboxSetup?: boolean | undefined;
                keywords?: object[] | undefined;
                kind?: string | undefined;
                languages?: object[] | undefined;
                lastLoginTime?: string | undefined;
                locations?: object[] | undefined;
                name?: AdminDirectory.Schema.UserName | undefined;
                nonEditableAliases?: string[] | undefined;
                notes?: object[] | undefined;
                orgUnitPath?: string | undefined;
                organizations?: UserOrganization[] | undefined;
                password?: string | undefined;
                phones?: object[] | undefined;
                posixAccounts?: object[] | undefined;
                primaryEmail?: string | undefined;
                relations?: object[] | undefined;
                sshPublicKeys?: object[] | undefined;
                suspended?: boolean | undefined;
                suspensionReason?: string | undefined;
                thumbnailPhotoEtag?: string | undefined;
                thumbnailPhotoUrl?: string | undefined;
                websites?: object[] | undefined;
            }
            interface UserAbout {
                contentType?: string | undefined;
                value?: string | undefined;
            }
            interface UserAddress {
                country?: string | undefined;
                countryCode?: string | undefined;
                customType?: string | undefined;
                extendedAddress?: string | undefined;
                formatted?: string | undefined;
                locality?: string | undefined;
                poBox?: string | undefined;
                postalCode?: string | undefined;
                primary?: boolean | undefined;
                region?: string | undefined;
                sourceIsStructured?: boolean | undefined;
                streetAddress?: string | undefined;
                type?: string | undefined;
            }
            interface UserEmail {
                address?: string | undefined;
                customType?: string | undefined;
                primary?: boolean | undefined;
                type?: string | undefined;
            }
            interface UserExternalId {
                customType?: string | undefined;
                type?: string | undefined;
                value?: string | undefined;
            }
            interface UserGender {
                addressMeAs?: string | undefined;
                customGender?: string | undefined;
                type?: string | undefined;
            }
            interface UserIm {
                customProtocol?: string | undefined;
                customType?: string | undefined;
                im?: string | undefined;
                primary?: boolean | undefined;
                protocol?: string | undefined;
                type?: string | undefined;
            }
            interface UserKeyword {
                customType?: string | undefined;
                type?: string | undefined;
                value?: string | undefined;
            }
            interface UserLanguage {
                customLanguage?: string | undefined;
                languageCode?: string | undefined;
            }
            interface UserLocation {
                area?: string | undefined;
                buildingId?: string | undefined;
                customType?: string | undefined;
                deskCode?: string | undefined;
                floorName?: string | undefined;
                floorSection?: string | undefined;
                type?: string | undefined;
            }
            interface UserMakeAdmin {
                status?: boolean | undefined;
            }
            interface UserName {
                familyName?: string | undefined;
                fullName?: string | undefined;
                givenName?: string | undefined;
            }
            interface UserOrganization {
                costCenter?: string | undefined;
                customType?: string | undefined;
                department?: string | undefined;
                description?: string | undefined;
                domain?: string | undefined;
                fullTimeEquivalent?: number | undefined;
                location?: string | undefined;
                name?: string | undefined;
                primary?: boolean | undefined;
                symbol?: string | undefined;
                title?: string | undefined;
                type?: string | undefined;
            }
            interface UserPhone {
                customType?: string | undefined;
                primary?: boolean | undefined;
                type?: string | undefined;
                value?: string | undefined;
            }
            interface UserPhoto {
                etag?: string | undefined;
                height?: number | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                mimeType?: string | undefined;
                photoData?: string | undefined;
                primaryEmail?: string | undefined;
                width?: number | undefined;
            }
            interface UserPosixAccount {
                accountId?: string | undefined;
                gecos?: string | undefined;
                gid?: string | undefined;
                homeDirectory?: string | undefined;
                operatingSystemType?: string | undefined;
                primary?: boolean | undefined;
                shell?: string | undefined;
                systemId?: string | undefined;
                uid?: string | undefined;
                username?: string | undefined;
            }
            interface UserRelation {
                customType?: string | undefined;
                type?: string | undefined;
                value?: string | undefined;
            }
            interface UserSshPublicKey {
                expirationTimeUsec?: string | undefined;
                fingerprint?: string | undefined;
                key?: string | undefined;
            }
            interface UserUndelete {
                orgUnitPath?: string | undefined;
            }
            interface UserWebsite {
                customType?: string | undefined;
                primary?: boolean | undefined;
                type?: string | undefined;
                value?: string | undefined;
            }
            interface Users {
                etag?: string | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                trigger_event?: string | undefined;
                users?: AdminDirectory.Schema.User[] | undefined;
            }
            interface VerificationCode {
                etag?: string | undefined;
                kind?: string | undefined;
                userId?: string | undefined;
                verificationCode?: string | undefined;
            }
            interface VerificationCodes {
                etag?: string | undefined;
                items?: AdminDirectory.Schema.VerificationCode[] | undefined;
                kind?: string | undefined;
            }
        }
    }
    interface AdminDirectory {
        Asps?: AdminDirectory.Collection.AspsCollection | undefined;
        Channels?: AdminDirectory.Collection.ChannelsCollection | undefined;
        Chromeosdevices?: AdminDirectory.Collection.ChromeosdevicesCollection | undefined;
        Customers?: AdminDirectory.Collection.CustomersCollection | undefined;
        DomainAliases?: AdminDirectory.Collection.DomainAliasesCollection | undefined;
        Domains?: AdminDirectory.Collection.DomainsCollection | undefined;
        Groups?: AdminDirectory.Collection.GroupsCollection | undefined;
        Members?: AdminDirectory.Collection.MembersCollection | undefined;
        Mobiledevices?: AdminDirectory.Collection.MobiledevicesCollection | undefined;
        Notifications?: AdminDirectory.Collection.NotificationsCollection | undefined;
        Orgunits?: AdminDirectory.Collection.OrgunitsCollection | undefined;
        Privileges?: AdminDirectory.Collection.PrivilegesCollection | undefined;
        ResolvedAppAccessSettings?: AdminDirectory.Collection.ResolvedAppAccessSettingsCollection | undefined;
        Resources?: AdminDirectory.Collection.ResourcesCollection | undefined;
        RoleAssignments?: AdminDirectory.Collection.RoleAssignmentsCollection | undefined;
        Roles?: AdminDirectory.Collection.RolesCollection | undefined;
        Schemas?: AdminDirectory.Collection.SchemasCollection | undefined;
        Tokens?: AdminDirectory.Collection.TokensCollection | undefined;
        Users?: AdminDirectory.Collection.UsersCollection | undefined;
        VerificationCodes?: AdminDirectory.Collection.VerificationCodesCollection | undefined;
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
