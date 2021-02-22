// Type definitions for Google Apps Script 2021-02-11
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/mtgto/dts-google-apps-script-advanced
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
    namespace AdminDirectory {
        namespace Collection {
            namespace Customer {
                namespace Devices {
                    namespace Chromeos {
                        interface CommandsCollection {
                            // Gets command data a specific command issued to the device.
                            get(customerId: string, deviceId: string, commandId: string): Schema.DirectoryChromeosdevicesCommand;
                        }
                    }
                    interface ChromeosCollection {
                        Commands?: Collection.Customer.Devices.Chromeos.CommandsCollection;
                        // Issues a command for the device to execute.
                        issueCommand(resource: Schema.DirectoryChromeosdevicesIssueCommandRequest, customerId: string, deviceId: string): Schema.DirectoryChromeosdevicesIssueCommandResponse;
                    }
                }
                interface DevicesCollection {
                    Chromeos?: Collection.Customer.Devices.ChromeosCollection;
                }
            }
            namespace Groups {
                interface AliasesCollection {
                    // Adds an alias for the group.
                    insert(resource: Schema.Alias, groupKey: string): Schema.Alias;
                    // Lists all aliases for a group.
                    list(groupKey: string): Schema.Aliases;
                    // Removes an alias.
                    remove(groupKey: string, alias: string): void;
                }
            }
            namespace Resources {
                interface BuildingsCollection {
                    // Retrieves a building.
                    get(customer: string, buildingId: string): Schema.Building;
                    // Inserts a building.
                    insert(resource: Schema.Building, customer: string): Schema.Building;
                    // Inserts a building.
                    insert(resource: Schema.Building, customer: string, optionalArgs: object): Schema.Building;
                    // Retrieves a list of buildings for an account.
                    list(customer: string): Schema.Buildings;
                    // Retrieves a list of buildings for an account.
                    list(customer: string, optionalArgs: object): Schema.Buildings;
                    // Patches a building via Apiary Patch Orchestration.
                    patch(resource: Schema.Building, customer: string, buildingId: string): Schema.Building;
                    // Patches a building via Apiary Patch Orchestration.
                    patch(resource: Schema.Building, customer: string, buildingId: string, optionalArgs: object): Schema.Building;
                    // Deletes a building.
                    remove(customer: string, buildingId: string): void;
                    // Updates a building.
                    update(resource: Schema.Building, customer: string, buildingId: string): Schema.Building;
                    // Updates a building.
                    update(resource: Schema.Building, customer: string, buildingId: string, optionalArgs: object): Schema.Building;
                }
                interface CalendarsCollection {
                    // Retrieves a calendar resource.
                    get(customer: string, calendarResourceId: string): Schema.CalendarResource;
                    // Inserts a calendar resource.
                    insert(resource: Schema.CalendarResource, customer: string): Schema.CalendarResource;
                    // Retrieves a list of calendar resources for an account.
                    list(customer: string): Schema.CalendarResources;
                    // Retrieves a list of calendar resources for an account.
                    list(customer: string, optionalArgs: object): Schema.CalendarResources;
                    // Patches a calendar resource via Apiary Patch Orchestration.
                    patch(resource: Schema.CalendarResource, customer: string, calendarResourceId: string): Schema.CalendarResource;
                    // Deletes a calendar resource.
                    remove(customer: string, calendarResourceId: string): void;
                    // Updates a calendar resource. This method supports patch semantics, meaning you only need to include the fields you wish
                    // to update. Fields that are not present in the request will be preserved.
                    update(resource: Schema.CalendarResource, customer: string, calendarResourceId: string): Schema.CalendarResource;
                }
                interface FeaturesCollection {
                    // Retrieves a feature.
                    get(customer: string, featureKey: string): Schema.Feature;
                    // Inserts a feature.
                    insert(resource: Schema.Feature, customer: string): Schema.Feature;
                    // Retrieves a list of features for an account.
                    list(customer: string): Schema.Features;
                    // Retrieves a list of features for an account.
                    list(customer: string, optionalArgs: object): Schema.Features;
                    // Patches a feature via Apiary Patch Orchestration.
                    patch(resource: Schema.Feature, customer: string, featureKey: string): Schema.Feature;
                    // Deletes a feature.
                    remove(customer: string, featureKey: string): void;
                    // Renames a feature.
                    rename(resource: Schema.FeatureRename, customer: string, oldName: string): void;
                    // Updates a feature.
                    update(resource: Schema.Feature, customer: string, featureKey: string): Schema.Feature;
                }
            }
            namespace Users {
                interface AliasesCollection {
                    // Adds an alias.
                    insert(resource: Schema.Alias, userKey: string): Schema.Alias;
                    // Lists all aliases for a user.
                    list(userKey: string): Schema.Aliases;
                    // Removes an alias.
                    remove(userKey: string, alias: string): void;
                    // Watch for changes in users list.
                    watch(resource: Schema.Channel, userKey: string): Schema.Channel;
                    // Watch for changes in users list.
                    watch(resource: Schema.Channel, userKey: string, optionalArgs: object): Schema.Channel;
                }
                interface PhotosCollection {
                    // Retrieves the user's photo.
                    get(userKey: string): Schema.UserPhoto;
                    // Adds a photo for the user. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
                    patch(resource: Schema.UserPhoto, userKey: string): Schema.UserPhoto;
                    // Removes the user's photo.
                    remove(userKey: string): void;
                    // Adds a photo for the user.
                    update(resource: Schema.UserPhoto, userKey: string): Schema.UserPhoto;
                }
            }
            interface AspsCollection {
                // Get information about an ASP issued by a user.
                get(userKey: string, codeId: Integer): Schema.Asp;
                // List the ASPs issued by a user.
                list(userKey: string): Schema.Asps;
                // Delete an ASP issued by a user.
                remove(userKey: string, codeId: Integer): void;
            }
            interface ChannelsCollection {
                // Stop watching resources through this channel.
                stop(resource: Schema.Channel): void;
            }
            interface ChromeosdevicesCollection {
                // Takes an action that affects a Chrome OS Device. This includes deprovisioning, disabling, and re-enabling devices.
                // *Warning:* * Deprovisioning a device will stop device policy syncing and remove device-level printers. After a device is
                // deprovisioned, it must be wiped before it can be re-enrolled. * Lost or stolen devices should use the disable action. *
                // Re-enabling a disabled device will consume a device license. If you do not have sufficient licenses available when
                // completing the re-enable action, you will receive an error. For more information about deprovisioning and disabling
                // devices, visit the [help center](https://support.google.com/chrome/a/answer/3523633).
                action(resource: Schema.ChromeOsDeviceAction, customerId: string, resourceId: string): void;
                // Retrieves a Chrome OS device's properties.
                get(customerId: string, deviceId: string): Schema.ChromeOsDevice;
                // Retrieves a Chrome OS device's properties.
                get(customerId: string, deviceId: string, optionalArgs: object): Schema.ChromeOsDevice;
                // Retrieves a paginated list of Chrome OS devices within an account.
                list(customerId: string): Schema.ChromeOsDevices;
                // Retrieves a paginated list of Chrome OS devices within an account.
                list(customerId: string, optionalArgs: object): Schema.ChromeOsDevices;
                // Move or insert multiple Chrome OS devices to an organizational unit. You can move up to 50 devices at once.
                moveDevicesToOu(resource: Schema.ChromeOsMoveDevicesToOu, customerId: string, orgUnitPath: string): void;
                // Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or
                // `annotatedAssetId`. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
                patch(resource: Schema.ChromeOsDevice, customerId: string, deviceId: string): Schema.ChromeOsDevice;
                // Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or
                // `annotatedAssetId`. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
                patch(resource: Schema.ChromeOsDevice, customerId: string, deviceId: string, optionalArgs: object): Schema.ChromeOsDevice;
                // Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or
                // `annotatedAssetId`.
                update(resource: Schema.ChromeOsDevice, customerId: string, deviceId: string): Schema.ChromeOsDevice;
                // Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or
                // `annotatedAssetId`.
                update(resource: Schema.ChromeOsDevice, customerId: string, deviceId: string, optionalArgs: object): Schema.ChromeOsDevice;
            }
            interface CustomerCollection {
                Devices?: Collection.Customer.DevicesCollection;
            }
            interface CustomersCollection {
                // Retrieves a customer.
                get(customerKey: string): Schema.Customer;
                // Patch Customers via Apiary Patch Orchestration
                patch(resource: Schema.Customer, customerKey: string): Schema.Customer;
                // Updates a customer.
                update(resource: Schema.Customer, customerKey: string): Schema.Customer;
            }
            interface DomainAliasesCollection {
                // Retrieves a domain alias of the customer.
                get(customer: string, domainAliasName: string): Schema.DomainAlias;
                // Inserts a domain alias of the customer.
                insert(resource: Schema.DomainAlias, customer: string): Schema.DomainAlias;
                // Lists the domain aliases of the customer.
                list(customer: string): Schema.DomainAliases;
                // Lists the domain aliases of the customer.
                list(customer: string, optionalArgs: object): Schema.DomainAliases;
                // Deletes a domain Alias of the customer.
                remove(customer: string, domainAliasName: string): void;
            }
            interface DomainsCollection {
                // Retrieves a domain of the customer.
                get(customer: string, domainName: string): Schema.Domains;
                // Inserts a domain of the customer.
                insert(resource: Schema.Domains, customer: string): Schema.Domains;
                // Lists the domains of the customer.
                list(customer: string): Schema.Domains2;
                // Deletes a domain of the customer.
                remove(customer: string, domainName: string): void;
            }
            interface GroupsCollection {
                Aliases?: Collection.Groups.AliasesCollection;
                // Retrieves a group's properties.
                get(groupKey: string): Schema.Group;
                // Creates a group.
                insert(resource: Schema.Group): Schema.Group;
                // Retrieve all groups of a domain or of a user given a userKey (paginated)
                list(): Schema.Groups;
                // Retrieve all groups of a domain or of a user given a userKey (paginated)
                list(optionalArgs: object): Schema.Groups;
                // Updates a group's properties. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
                patch(resource: Schema.Group, groupKey: string): Schema.Group;
                // Deletes a group.
                remove(groupKey: string): void;
                // Updates a group's properties.
                update(resource: Schema.Group, groupKey: string): Schema.Group;
            }
            interface MembersCollection {
                // Retrieves a group member's properties.
                get(groupKey: string, memberKey: string): Schema.Member;
                // Checks whether the given user is a member of the group. Membership can be direct or nested.
                hasMember(groupKey: string, memberKey: string): Schema.MembersHasMember;
                // Adds a user to the specified group.
                insert(resource: Schema.Member, groupKey: string): Schema.Member;
                // Retrieves a paginated list of all members in a group.
                list(groupKey: string): Schema.Members;
                // Retrieves a paginated list of all members in a group.
                list(groupKey: string, optionalArgs: object): Schema.Members;
                // Updates the membership properties of a user in the specified group. This method supports [patch
                // semantics](/admin-sdk/directory/v1/guides/performance#patch).
                patch(resource: Schema.Member, groupKey: string, memberKey: string): Schema.Member;
                // Removes a member from a group.
                remove(groupKey: string, memberKey: string): void;
                // Updates the membership of a user in the specified group.
                update(resource: Schema.Member, groupKey: string, memberKey: string): Schema.Member;
            }
            interface MobiledevicesCollection {
                // Takes an action that affects a mobile device. For example, remotely wiping a device.
                action(resource: Schema.MobileDeviceAction, customerId: string, resourceId: string): void;
                // Retrieves a mobile device's properties.
                get(customerId: string, resourceId: string): Schema.MobileDevice;
                // Retrieves a mobile device's properties.
                get(customerId: string, resourceId: string, optionalArgs: object): Schema.MobileDevice;
                // Retrieves a paginated list of all mobile devices for an account.
                list(customerId: string): Schema.MobileDevices;
                // Retrieves a paginated list of all mobile devices for an account.
                list(customerId: string, optionalArgs: object): Schema.MobileDevices;
                // Removes a mobile device.
                remove(customerId: string, resourceId: string): void;
            }
            interface OrgunitsCollection {
                // Retrieves an organizational unit.
                get(customerId: string, orgUnitPath: string): Schema.OrgUnit;
                // Adds an organizational unit.
                insert(resource: Schema.OrgUnit, customerId: string): Schema.OrgUnit;
                // Retrieves a list of all organizational units for an account.
                list(customerId: string): Schema.OrgUnits;
                // Retrieves a list of all organizational units for an account.
                list(customerId: string, optionalArgs: object): Schema.OrgUnits;
                // Updates an organizational unit. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch)
                patch(resource: Schema.OrgUnit, customerId: string, orgUnitPath: string): Schema.OrgUnit;
                // Removes an organizational unit.
                remove(customerId: string, orgUnitPath: string): void;
                // Updates an organizational unit.
                update(resource: Schema.OrgUnit, customerId: string, orgUnitPath: string): Schema.OrgUnit;
            }
            interface PrivilegesCollection {
                // Retrieves a paginated list of all privileges for a customer.
                list(customer: string): Schema.Privileges;
            }
            interface ResourcesCollection {
                Buildings?: Collection.Resources.BuildingsCollection;
                Calendars?: Collection.Resources.CalendarsCollection;
                Features?: Collection.Resources.FeaturesCollection;
            }
            interface RoleAssignmentsCollection {
                // Retrieve a role assignment.
                get(customer: string, roleAssignmentId: string): Schema.RoleAssignment;
                // Creates a role assignment.
                insert(resource: Schema.RoleAssignment, customer: string): Schema.RoleAssignment;
                // Retrieves a paginated list of all roleAssignments.
                list(customer: string): Schema.RoleAssignments;
                // Retrieves a paginated list of all roleAssignments.
                list(customer: string, optionalArgs: object): Schema.RoleAssignments;
                // Deletes a role assignment.
                remove(customer: string, roleAssignmentId: string): void;
            }
            interface RolesCollection {
                // Retrieves a role.
                get(customer: string, roleId: string): Schema.Role;
                // Creates a role.
                insert(resource: Schema.Role, customer: string): Schema.Role;
                // Retrieves a paginated list of all the roles in a domain.
                list(customer: string): Schema.Roles;
                // Retrieves a paginated list of all the roles in a domain.
                list(customer: string, optionalArgs: object): Schema.Roles;
                // Patch role via Apiary Patch Orchestration
                patch(resource: Schema.Role, customer: string, roleId: string): Schema.Role;
                // Deletes a role.
                remove(customer: string, roleId: string): void;
                // Updates a role.
                update(resource: Schema.Role, customer: string, roleId: string): Schema.Role;
            }
            interface SchemasCollection {
                // Retrieve schema
                get(customerId: string, schemaKey: string): Schema.Schema;
                // Create schema.
                insert(resource: Schema.Schema, customerId: string): Schema.Schema;
                // Retrieve all schemas for a customer
                list(customerId: string): Schema.Schemas;
                // Patch Schema via Apiary Patch Orchestration
                patch(resource: Schema.Schema, customerId: string, schemaKey: string): Schema.Schema;
                // Delete schema
                remove(customerId: string, schemaKey: string): void;
                // Update schema
                update(resource: Schema.Schema, customerId: string, schemaKey: string): Schema.Schema;
            }
            interface TokensCollection {
                // Get information about an access token issued by a user.
                get(userKey: string, clientId: string): Schema.Token;
                // Returns the set of tokens specified user has issued to 3rd party applications.
                list(userKey: string): Schema.Tokens;
                // Delete all access tokens issued by a user for an application.
                remove(userKey: string, clientId: string): void;
            }
            interface TwoStepVerificationCollection {
                // Turn off 2-Step Verification for user.
                turnOff(userKey: string): void;
            }
            interface UsersCollection {
                Aliases?: Collection.Users.AliasesCollection;
                Photos?: Collection.Users.PhotosCollection;
                // Retrieves a user.
                get(userKey: string): Schema.User;
                // Retrieves a user.
                get(userKey: string, optionalArgs: object): Schema.User;
                // Creates a user.
                insert(resource: Schema.User): Schema.User;
                // Retrieves a paginated list of either deleted users or all users in a domain.
                list(): Schema.Users;
                // Retrieves a paginated list of either deleted users or all users in a domain.
                list(optionalArgs: object): Schema.Users;
                // Makes a user a super administrator.
                makeAdmin(resource: Schema.UserMakeAdmin, userKey: string): void;
                // Updates a user using patch semantics. The update method should be used instead, since it also supports patch semantics
                // and has better performance. This method is unable to clear fields that contain repeated objects (`addresses`, `phones`,
                // etc). Use the update method instead.
                patch(resource: Schema.User, userKey: string): Schema.User;
                // Deletes a user.
                remove(userKey: string): void;
                // Sign a user out of all web and device sessions and reset their sign-in cookies. User will have to sign in by
                // authenticating again.
                signOut(userKey: string): void;
                // Undeletes a deleted user.
                undelete(resource: Schema.UserUndelete, userKey: string): void;
                // Updates a user. This method supports patch semantics, meaning you only need to include the fields you wish to update.
                // Fields that are not present in the request will be preserved, and fields set to `null` will be cleared.
                update(resource: Schema.User, userKey: string): Schema.User;
                // Watch for changes in users list
                watch(resource: Schema.Channel): Schema.Channel;
                // Watch for changes in users list
                watch(resource: Schema.Channel, optionalArgs: object): Schema.Channel;
            }
            interface VerificationCodesCollection {
                // Generate new backup verification codes for the user.
                generate(userKey: string): void;
                // Invalidate the current backup verification codes for the user.
                invalidate(userKey: string): void;
                // Returns the current set of valid backup verification codes for the specified user.
                list(userKey: string): Schema.VerificationCodes;
            }
        }
        namespace Schema {
            // JSON template for Alias object in Directory API.
            interface Alias {
                alias?: string;
                etag?: string;
                id?: string;
                kind?: string;
                primaryEmail?: string;
            }
            // JSON response template to list aliases in Directory API.
            interface Aliases {
                aliases?: object[];
                etag?: string;
                kind?: string;
            }
            // An application-specific password (ASP) is used with applications that do not accept a verification code when logging
            // into the application on certain devices. The ASP access code is used instead of the login and password you commonly use
            // when accessing an application through a browser. For more information about ASPs and how to create one, see the [help
            // center](//http://support.google.com/a/bin/answer.py?amp;answer=1032419).
            interface Asp {
                // The unique ID of the ASP.
                codeId?: Integer;
                // The time when the ASP was created. Expressed in [Unix time](http://en.wikipedia.org/wiki/Epoch_time) format.
                creationTime?: string;
                // ETag of the ASP.
                etag?: string;
                // The type of the API resource. This is always `admin#directory#asp`.
                kind?: string;
                // The time when the ASP was last used. Expressed in [Unix time](http://en.wikipedia.org/wiki/Epoch_time) format.
                lastTimeUsed?: string;
                // The name of the application that the user, represented by their `userId`, entered when the ASP was created.
                name?: string;
                // The unique ID of the user who issued the ASP.
                userKey?: string;
            }
            interface Asps {
                // ETag of the resource.
                etag?: string;
                // A list of ASP resources.
                items?: Schema.Asp[];
                // The type of the API resource. This is always `admin#directory#aspList`.
                kind?: string;
            }
            // Public API: Resources.buildings
            interface Building {
                // The postal address of the building. See [`PostalAddress`](/my-business/reference/rest/v4/PostalAddress) for details.
                // Note that only a single address line and region code are required.
                address?: Schema.BuildingAddress;
                // Unique identifier for the building. The maximum length is 100 characters.
                buildingId?: string;
                // The building name as seen by users in Calendar. Must be unique for the customer. For example, "NYC-CHEL". The maximum
                // length is 100 characters.
                buildingName?: string;
                // The geographic coordinates of the center of the building, expressed as latitude and longitude in decimal degrees.
                coordinates?: Schema.BuildingCoordinates;
                // A brief description of the building. For example, "Chelsea Market".
                description?: string;
                // ETag of the resource.
                etags?: string;
                // The display names for all floors in this building. The floors are expected to be sorted in ascending order, from lowest
                // floor to highest floor. For example, ["B2", "B1", "L", "1", "2", "2M", "3", "PH"] Must contain at least one entry.
                floorNames?: string[];
                // Kind of resource this is.
                kind?: string;
            }
            // Public API: Resources.buildings
            interface BuildingAddress {
                // Unstructured address lines describing the lower levels of an address.
                addressLines?: string[];
                // Optional. Highest administrative subdivision which is used for postal addresses of a country or region.
                administrativeArea?: string;
                // Optional. BCP-47 language code of the contents of this address (if known).
                languageCode?: string;
                // Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In
                // regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty
                // and use addressLines.
                locality?: string;
                // Optional. Postal code of the address.
                postalCode?: string;
                // Required. CLDR region code of the country/region of the address.
                regionCode?: string;
                // Optional. Sublocality of the address.
                sublocality?: string;
            }
            // Public API: Resources.buildings
            interface BuildingCoordinates {
                // Latitude in decimal degrees.
                latitude?: number;
                // Longitude in decimal degrees.
                longitude?: number;
            }
            // Public API: Resources.buildings
            interface Buildings {
                // The Buildings in this page of results.
                buildings?: Schema.Building[];
                // ETag of the resource.
                etag?: string;
                // Kind of resource this is.
                kind?: string;
                // The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the
                // next page of results.
                nextPageToken?: string;
            }
            // Public API: Resources.calendars
            interface CalendarResource {
                // Unique ID for the building a resource is located in.
                buildingId?: string;
                // Capacity of a resource, number of seats in a room.
                capacity?: Integer;
                // ETag of the resource.
                etags?: string;
                // Instances of features for the calendar resource.
                featureInstances?: object;
                // Name of the floor a resource is located on.
                floorName?: string;
                // Name of the section within a floor a resource is located in.
                floorSection?: string;
                // The read-only auto-generated name of the calendar resource which includes metadata about the resource such as building
                // name, floor, capacity, etc. For example, "NYC-2-Training Room 1A (16)".
                generatedResourceName?: string;
                // The type of the resource. For calendar resources, the value is `admin#directory#resources#calendars#CalendarResource`.
                kind?: string;
                // The category of the calendar resource. Either CONFERENCE_ROOM or OTHER. Legacy data is set to CATEGORY_UNKNOWN.
                resourceCategory?: string;
                // Description of the resource, visible only to admins.
                resourceDescription?: string;
                // The read-only email for the calendar resource. Generated as part of creating a new calendar resource.
                resourceEmail?: string;
                // The unique ID for the calendar resource.
                resourceId?: string;
                // The name of the calendar resource. For example, "Training Room 1A".
                resourceName?: string;
                // The type of the calendar resource, intended for non-room resources.
                resourceType?: string;
                // Description of the resource, visible to users and admins.
                userVisibleDescription?: string;
            }
            // Public API: Resources.calendars
            interface CalendarResources {
                // ETag of the resource.
                etag?: string;
                // The CalendarResources in this page of results.
                items?: Schema.CalendarResource[];
                // Identifies this as a collection of CalendarResources. This is always
                // `admin#directory#resources#calendars#calendarResourcesList`.
                kind?: string;
                // The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the
                // next page of results.
                nextPageToken?: string;
            }
            // An notification channel used to watch for resource changes.
            interface Channel {
                // The address where notifications are delivered for this channel.
                address?: string;
                // Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.
                expiration?: string;
                // A UUID or similar unique string that identifies this channel.
                id?: string;
                // Identifies this as a notification channel used to watch for changes to a resource, which is `api#channel`.
                kind?: string;
                // Additional parameters controlling delivery channel behavior. Optional.
                params?: object;
                // A Boolean value to indicate whether payload is wanted. Optional.
                payload?: boolean;
                // An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.
                resourceId?: string;
                // A version-specific identifier for the watched resource.
                resourceUri?: string;
                // An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.
                token?: string;
                // The type of delivery mechanism used for this channel.
                type?: string;
            }
            // Google Chrome devices run on the [Chrome OS](http://support.google.com/chromeos). For more information about common API
            // tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-chrome-devices).
            interface ChromeOsDevice {
                // List of active time ranges (Read-only).
                activeTimeRanges?: Schema.ChromeOsDeviceActiveTimeRanges[];
                // The asset identifier as noted by an administrator or specified during enrollment.
                annotatedAssetId?: string;
                // The address or location of the device as noted by the administrator. Maximum length is `200` characters. Empty values
                // are allowed.
                annotatedLocation?: string;
                // The user of the device as noted by the administrator. Maximum length is 100 characters. Empty values are allowed.
                annotatedUser?: string;
                // (Read-only) The timestamp after which the device will stop receiving Chrome updates or support
                autoUpdateExpiration?: string;
                // The boot mode for the device. The possible values are: * `Verified`: The device is running a valid version of the Chrome
                // OS. * `Dev`: The devices's developer hardware switch is enabled. When booted, the device has a command line shell. For
                // an example of a developer switch, see the [Chromebook developer
                // information](http://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/samsung-series-5-chromebook#TOC-Developer-switch).
                bootMode?: string;
                // Reports of CPU utilization and temperature (Read-only)
                cpuStatusReports?: Schema.ChromeOsDeviceCpuStatusReports[];
                // List of device files to download (Read-only)
                deviceFiles?: Schema.ChromeOsDeviceDeviceFiles[];
                // The unique ID of the Chrome device.
                deviceId?: string;
                // Reports of disk space and other info about mounted/connected volumes.
                diskVolumeReports?: Schema.ChromeOsDeviceDiskVolumeReports[];
                // (Read-only) Built-in MAC address for the docking station that the device connected to. Factory sets Media access control
                // address (MAC address) assigned for use by a dock. It is reserved specifically for MAC pass through device policy. The
                // format is twelve (12) hexadecimal digits without any delimiter (uppercase letters). This is only relevant for some
                // devices.
                dockMacAddress?: string;
                // ETag of the resource.
                etag?: string;
                // The device's MAC address on the ethernet network interface.
                ethernetMacAddress?: string;
                // (Read-only) MAC address used by the Chromebook’s internal ethernet port, and for onboard network (ethernet) interface.
                // The format is twelve (12) hexadecimal digits without any delimiter (uppercase letters). This is only relevant for some
                // devices.
                ethernetMacAddress0?: string;
                // The Chrome device's firmware version.
                firmwareVersion?: string;
                // The type of resource. For the Chromeosdevices resource, the value is `admin#directory#chromeosdevice`.
                kind?: string;
                // Date and time the device was last enrolled (Read-only)
                lastEnrollmentTime?: string;
                // Contains last known network (Read-only)
                lastKnownNetwork?: Schema.ChromeOsDeviceLastKnownNetwork[];
                // Date and time the device was last synchronized with the policy settings in the G Suite administrator control panel
                // (Read-only)
                lastSync?: string;
                // The device's wireless MAC address. If the device does not have this information, it is not included in the response.
                macAddress?: string;
                // (Read-only) The date the device was manufactured in yyyy-mm-dd format.
                manufactureDate?: string;
                // The Mobile Equipment Identifier (MEID) or the International Mobile Equipment Identity (IMEI) for the 3G mobile card in a
                // mobile device. A MEID/IMEI is typically used when adding a device to a wireless carrier's post-pay service plan. If the
                // device does not have this information, this property is not included in the response. For more information on how to
                // export a MEID/IMEI list, see the [Developer's
                // Guide](/admin-sdk/directory/v1/guides/manage-chrome-devices.html#export_meid).
                meid?: string;
                // The device's model information. If the device does not have this information, this property is not included in the
                // response.
                model?: string;
                // Notes about this device added by the administrator. This property can be
                // [searched](http://support.google.com/chromeos/a/bin/answer.py?answer=1698333) with the
                // [list](/admin-sdk/directory/v1/reference/chromeosdevices/list) method's `query` parameter. Maximum length is 500
                // characters. Empty values are allowed.
                notes?: string;
                // The device's order number. Only devices directly purchased from Google have an order number.
                orderNumber?: string;
                // The full parent path with the organizational unit's name associated with the device. Path names are case insensitive. If
                // the parent organizational unit is the top-level organization, it is represented as a forward slash, `/`. This property
                // can be [updated](/admin-sdk/directory/v1/guides/manage-chrome-devices#update_chrome_device) using the API. For more
                // information about how to create an organizational structure for your device, see the [administration help
                // center](http://support.google.com/a/bin/answer.py?answer=182433).
                orgUnitPath?: string;
                // The Chrome device's operating system version.
                osVersion?: string;
                // The Chrome device's platform version.
                platformVersion?: string;
                // List of recent device users, in descending order, by last login time.
                recentUsers?: Schema.RecentUsers[];
                // The Chrome device serial number entered when the device was enabled. This value is the same as the Admin console's
                // *Serial Number* in the *Chrome OS Devices* tab.
                serialNumber?: string;
                // The status of the device.
                status?: string;
                // Final date the device will be supported (Read-only)
                supportEndDate?: string;
                // Reports of amounts of available RAM memory (Read-only)
                systemRamFreeReports?: Schema.ChromeOsDeviceSystemRamFreeReports[];
                // Total RAM on the device [in bytes] (Read-only)
                systemRamTotal?: string;
                // Trusted Platform Module (TPM) (Read-only)
                tpmVersionInfo?: Schema.ChromeOsDeviceTpmVersionInfo;
                // Determines if the device will auto renew its support after the support end date. This is a read-only property.
                willAutoRenew?: boolean;
            }
            interface ChromeOsDeviceAction {
                // Action to be taken on the Chrome OS device.
                action?: string;
                // Only used when the action is `deprovision`. With the `deprovision` action, this field is required. *Note*: The
                // deprovision reason is audited because it might have implications on licenses for perpetual subscription customers.
                deprovisionReason?: string;
            }
            interface ChromeOsDeviceActiveTimeRanges {
                // Duration of usage in milliseconds.
                activeTime?: Integer;
                // Date of usage
                date?: string;
            }
            interface ChromeOsDeviceCpuStatusReports {
                // List of CPU temperature samples.
                cpuTemperatureInfo?: Schema.ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo[];
                cpuUtilizationPercentageInfo?: Integer[];
                // Date and time the report was received.
                reportTime?: string;
            }
            interface ChromeOsDeviceCpuStatusReportsCpuTemperatureInfo {
                // CPU label
                label?: string;
                // Temperature in Celsius degrees.
                temperature?: Integer;
            }
            interface ChromeOsDeviceDeviceFiles {
                // Date and time the file was created
                createTime?: string;
                // File download URL
                downloadUrl?: string;
                // File name
                name?: string;
                // File type
                type?: string;
            }
            interface ChromeOsDeviceDiskVolumeReports {
                // Disk volumes
                volumeInfo?: Schema.ChromeOsDeviceDiskVolumeReportsVolumeInfo[];
            }
            interface ChromeOsDeviceDiskVolumeReportsVolumeInfo {
                // Free disk space [in bytes]
                storageFree?: string;
                // Total disk space [in bytes]
                storageTotal?: string;
                // Volume id
                volumeId?: string;
            }
            // Information for an ip address.
            interface ChromeOsDeviceLastKnownNetwork {
                // The IP address.
                ipAddress?: string;
                // The WAN IP address.
                wanIpAddress?: string;
            }
            interface ChromeOsDeviceSystemRamFreeReports {
                // Date and time the report was received.
                reportTime?: string;
                systemRamFreeInfo?: string[];
            }
            // Trusted Platform Module (TPM) (Read-only)
            interface ChromeOsDeviceTpmVersionInfo {
                // TPM family. We use the TPM 2.0 style encoding, e.g.: TPM 1.2: "1.2" -> 312e3200 TPM 2.0: "2.0" -> 322e3000
                family?: string;
                // TPM firmware version.
                firmwareVersion?: string;
                // TPM manufacturer code.
                manufacturer?: string;
                // TPM specification level. See Library Specification for TPM 2.0 and Main Specification for TPM 1.2.
                specLevel?: string;
                // TPM model number.
                tpmModel?: string;
                // Vendor-specific information such as Vendor ID.
                vendorSpecific?: string;
            }
            interface ChromeOsDevices {
                // List of Chrome OS Device objects.
                chromeosdevices?: Schema.ChromeOsDevice[];
                // ETag of the resource.
                etag?: string;
                // Kind of resource this is.
                kind?: string;
                // Token used to access the next page of this result. To access the next page, use this token's value in the `pageToken`
                // query string of this request.
                nextPageToken?: string;
            }
            interface ChromeOsMoveDevicesToOu {
                // Chrome OS devices to be moved to OU
                deviceIds?: string[];
            }
            interface Customer {
                // The customer's secondary contact email address. This email address cannot be on the same domain as the `customerDomain`
                alternateEmail?: string;
                // The customer's creation time (Readonly)
                customerCreationTime?: string;
                // The customer's primary domain name string. Do not include the `www` prefix when creating a new customer.
                customerDomain?: string;
                // ETag of the resource.
                etag?: string;
                // The unique ID for the customer's Google Workspace account. (Readonly)
                id?: string;
                // Identifies the resource as a customer. Value: `admin#directory#customer`
                kind?: string;
                // The customer's ISO 639-2 language code. See the [Language Codes](/admin-sdk/directory/v1/languages) page for the list of
                // supported codes. Valid language codes outside the supported set will be accepted by the API but may lead to unexpected
                // behavior. The default value is `en`.
                language?: string;
                // The customer's contact phone number in [E.164](http://en.wikipedia.org/wiki/E.164) format.
                phoneNumber?: string;
                // The customer's postal address information.
                postalAddress?: Schema.CustomerPostalAddress;
            }
            interface CustomerPostalAddress {
                // A customer's physical address. The address can be composed of one to three lines.
                addressLine1?: string;
                // Address line 2 of the address.
                addressLine2?: string;
                // Address line 3 of the address.
                addressLine3?: string;
                // The customer contact's name.
                contactName?: string;
                // This is a required property. For `countryCode` information see the [ISO 3166 country code
                // elements](http://www.iso.org/iso/country_codes.htm).
                countryCode?: string;
                // Name of the locality. An example of a locality value is the city of `San Francisco`.
                locality?: string;
                // The company or company division name.
                organizationName?: string;
                // The postal code. A postalCode example is a postal zip code such as `10009`. This is in accordance with - http:
                // //portablecontacts.net/draft-spec.html#address_element.
                postalCode?: string;
                // Name of the region. An example of a region value is `NY` for the state of New York.
                region?: string;
            }
            // Information regarding a command that was issued to a device.
            interface DirectoryChromeosdevicesCommand {
                // The time at which the command will expire. If the device doesn't execute the command within this time the command will
                // become expired.
                commandExpireTime?: string;
                // Unique ID of a device command.
                commandId?: string;
                // The result of the command execution.
                commandResult?: Schema.DirectoryChromeosdevicesCommandResult;
                // The timestamp when the command was issued by the admin.
                issueTime?: string;
                // The payload that the command specified, if any.
                payload?: string;
                // Indicates the command state.
                state?: string;
                // The type of the command.
                type?: string;
            }
            // The result of executing a command.
            interface DirectoryChromeosdevicesCommandResult {
                // The error message with a short explanation as to why the command failed. Only present if the command failed.
                errorMessage?: string;
                // The time at which the command was executed or failed to execute.
                executeTime?: string;
                // The result of the command.
                result?: string;
            }
            // A request for issuing a command.
            interface DirectoryChromeosdevicesIssueCommandRequest {
                // The type of command.
                commandType?: string;
                // The payload for the command, provide it only if command supports it. The following commands support adding payload: -
                // SET_VOLUME: Payload is a stringified JSON object in the form: { "volume": 50 }. The volume has to be an integer in the
                // range [0,100].
                payload?: string;
            }
            // A response for issuing a command.
            interface DirectoryChromeosdevicesIssueCommandResponse {
                // The unique ID of the issued command, used to retrieve the command status.
                commandId?: string;
            }
            interface DomainAlias {
                // The creation time of the domain alias. (Read-only).
                creationTime?: string;
                // The domain alias name.
                domainAliasName?: string;
                // ETag of the resource.
                etag?: string;
                // Kind of resource this is.
                kind?: string;
                // The parent domain name that the domain alias is associated with. This can either be a primary or secondary domain name
                // within a customer.
                parentDomainName?: string;
                // Indicates the verification state of a domain alias. (Read-only)
                verified?: boolean;
            }
            interface DomainAliases {
                // List of domain alias objects.
                domainAliases?: Schema.DomainAlias[];
                // ETag of the resource.
                etag?: string;
                // Kind of resource this is.
                kind?: string;
            }
            interface Domains {
                // Creation time of the domain. Expressed in [Unix time](http://en.wikipedia.org/wiki/Epoch_time) format. (Read-only).
                creationTime?: string;
                // List of domain alias objects. (Read-only)
                domainAliases?: Schema.DomainAlias[];
                // The domain name of the customer.
                domainName?: string;
                // ETag of the resource.
                etag?: string;
                // Indicates if the domain is a primary domain (Read-only).
                isPrimary?: boolean;
                // Kind of resource this is.
                kind?: string;
                // Indicates the verification state of a domain. (Read-only).
                verified?: boolean;
            }
            interface Domains2 {
                // List of domain objects.
                domains?: Schema.Domains[];
                // ETag of the resource.
                etag?: string;
                // Kind of resource this is.
                kind?: string;
            }
            // JSON template for Feature object in Directory API.
            interface Feature {
                // ETag of the resource.
                etags?: string;
                // Kind of resource this is.
                kind?: string;
                // The name of the feature.
                name?: string;
            }
            // JSON template for a feature instance.
            interface FeatureInstance {
                // The feature that this is an instance of. A calendar resource may have multiple instances of a feature.
                feature?: Schema.Feature;
            }
            interface FeatureRename {
                // New name of the feature.
                newName?: string;
            }
            // Public API: Resources.features
            interface Features {
                // ETag of the resource.
                etag?: string;
                // The Features in this page of results.
                features?: Schema.Feature[];
                // Kind of resource this is.
                kind?: string;
                // The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the
                // next page of results.
                nextPageToken?: string;
            }
            // Google Groups provide your users the ability to send messages to groups of people using the group's email address. For
            // more information about common tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-groups).
            interface Group {
                // Value is `true` if this group was created by an administrator rather than a user.
                adminCreated?: boolean;
                // List of a group's alias email addresses.
                aliases?: string[];
                // An extended description to help users determine the purpose of a group. For example, you can include information about
                // who should join the group, the types of messages to send to the group, links to FAQs about the group, or related groups.
                // Maximum length is `4,096` characters.
                description?: string;
                // The number of users that are direct members of the group. If a group is a member (child) of this group (the parent),
                // members of the child group are not counted in the `directMembersCount` property of the parent group.
                directMembersCount?: string;
                // The group's email address. If your account has multiple domains, select the appropriate domain for the email address.
                // The `email` must be unique. This property is required when creating a group. Group email addresses are subject to the
                // same character usage rules as usernames, see the [administration help
                // center](http://support.google.com/a/bin/answer.py?answer=33386) for the details.
                email?: string;
                // ETag of the resource.
                etag?: string;
                // The unique ID of a group. A group `id` can be used as a group request URI's `groupKey`.
                id?: string;
                // The type of the API resource. For Groups resources, the value is `admin#directory#group`.
                kind?: string;
                // The group's display name.
                name?: string;
                // List of the group's non-editable alias email addresses that are outside of the account's primary domain or subdomains.
                // These are functioning email addresses used by the group. This is a read-only property returned in the API's response for
                // a group. If edited in a group's POST or PUT request, the edit is ignored by the API service.
                nonEditableAliases?: string[];
            }
            interface Groups {
                // ETag of the resource.
                etag?: string;
                // List of group objects.
                groups?: Schema.Group[];
                // Kind of resource this is.
                kind?: string;
                // Token used to access next page of this result.
                nextPageToken?: string;
            }
            // A Google Groups member can be a user or another group. This member can be inside or outside of your account's domains.
            // For more information about common group member tasks, see the [Developer's
            // Guide](/admin-sdk/directory/v1/guides/manage-group-members).
            interface Member {
                // Defines mail delivery preferences of member. This is only supported by create/update/get.
                delivery_settings?: string;
                // The member's email address. A member can be a user or another group. This property is required when adding a member to a
                // group. The `email` must be unique and cannot be an alias of another group. If the email address is changed, the API
                // automatically reflects the email address changes.
                email?: string;
                // ETag of the resource.
                etag?: string;
                // The unique ID of the group member. A member `id` can be used as a member request URI's `memberKey`.
                id?: string;
                // The type of the API resource. For Members resources, the value is `admin#directory#member`.
                kind?: string;
                // The member's role in a group. The API returns an error for cycles in group memberships. For example, if `group1` is a
                // member of `group2`, `group2` cannot be a member of `group1`. For more information about a member's role, see the
                // [administration help center](http://support.google.com/a/bin/answer.py?answer=167094).
                role?: string;
                // Status of member (Immutable)
                status?: string;
                // The type of group member.
                type?: string;
            }
            interface Members {
                // ETag of the resource.
                etag?: string;
                // Kind of resource this is.
                kind?: string;
                // List of member objects.
                members?: Schema.Member[];
                // Token used to access next page of this result.
                nextPageToken?: string;
            }
            // JSON template for Has Member response in Directory API.
            interface MembersHasMember {
                // Output only. Identifies whether the given user is a member of the group. Membership can be direct or nested.
                isMember?: boolean;
            }
            // Google Workspace Mobile Management includes Android, [Google
            // Sync](http://support.google.com/a/bin/answer.py?answer=135937), and iOS devices. For more information about common group
            // mobile device API tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-mobile-devices.html).
            interface MobileDevice {
                // Adb (USB debugging) enabled or disabled on device (Read-only)
                adbStatus?: boolean;
                // The list of applications installed on an Android mobile device. It is not applicable to Google Sync and iOS devices. The
                // list includes any Android applications that access Google Workspace data. When updating an applications list, it is
                // important to note that updates replace the existing list. If the Android device has two existing applications and the
                // API updates the list with five applications, the is now the updated list of five applications.
                applications?: Schema.MobileDeviceApplications[];
                // The device's baseband version.
                basebandVersion?: string;
                // Mobile Device Bootloader version (Read-only)
                bootloaderVersion?: string;
                // Mobile Device Brand (Read-only)
                brand?: string;
                // The device's operating system build number.
                buildNumber?: string;
                // The default locale used on the device.
                defaultLanguage?: string;
                // Developer options enabled or disabled on device (Read-only)
                developerOptionsStatus?: boolean;
                // The compromised device status.
                deviceCompromisedStatus?: string;
                // The serial number for a Google Sync mobile device. For Android and iOS devices, this is a software generated unique
                // identifier.
                deviceId?: string;
                // DevicePasswordStatus (Read-only)
                devicePasswordStatus?: string;
                // List of owner's email addresses. If your application needs the current list of user emails, use the
                // [get](/admin-sdk/directory/v1/reference/mobiledevices/get.html) method. For additional information, see the [retrieve a
                // user](/admin-sdk/directory/v1/guides/manage-users#get_user) method.
                email?: string[];
                // Mobile Device Encryption Status (Read-only)
                encryptionStatus?: string;
                // ETag of the resource.
                etag?: string;
                // Date and time the device was first synchronized with the policy settings in the G Suite administrator control panel
                // (Read-only)
                firstSync?: string;
                // Mobile Device Hardware (Read-only)
                hardware?: string;
                // The IMEI/MEID unique identifier for Android hardware. It is not applicable to Google Sync devices. When adding an
                // Android mobile device, this is an optional property. When updating one of these devices, this is a read-only property.
                hardwareId?: string;
                // The device's IMEI number.
                imei?: string;
                // The device's kernel version.
                kernelVersion?: string;
                // The type of the API resource. For Mobiledevices resources, the value is `admin#directory#mobiledevice`.
                kind?: string;
                // Date and time the device was last synchronized with the policy settings in the G Suite administrator control panel
                // (Read-only)
                lastSync?: string;
                // Boolean indicating if this account is on owner/primary profile or not.
                managedAccountIsOnOwnerProfile?: boolean;
                // Mobile Device manufacturer (Read-only)
                manufacturer?: string;
                // The device's MEID number.
                meid?: string;
                // The mobile device's model name, for example Nexus S. This property can be
                // [updated](/admin-sdk/directory/v1/reference/mobiledevices/update.html). For more information, see the [Developer's
                // Guide](/admin-sdk/directory/v1/guides/manage-mobile=devices#update_mobile_device).
                model?: string;
                // List of the owner's user names. If your application needs the current list of device owner names, use the
                // [get](/admin-sdk/directory/v1/reference/mobiledevices/get.html) method. For more information about retrieving mobile
                // device user information, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-users#get_user).
                name?: string[];
                // Mobile Device mobile or network operator (if available) (Read-only)
                networkOperator?: string;
                // The mobile device's operating system, for example IOS 4.3 or Android 2.3.5. This property can be
                // [updated](/admin-sdk/directory/v1/reference/mobiledevices/update.html). For more information, see the [Developer's
                // Guide](/admin-sdk/directory/v1/guides/manage-mobile-devices#update_mobile_device).
                os?: string;
                // List of accounts added on device (Read-only)
                otherAccountsInfo?: string[];
                // DMAgentPermission (Read-only)
                privilege?: string;
                // Mobile Device release version version (Read-only)
                releaseVersion?: string;
                // The unique ID the API service uses to identify the mobile device.
                resourceId?: string;
                // Mobile Device Security patch level (Read-only)
                securityPatchLevel?: string;
                // The device's serial number.
                serialNumber?: string;
                // The device's status.
                status?: string;
                // Work profile supported on device (Read-only)
                supportsWorkProfile?: boolean;
                // The type of mobile device.
                type?: string;
                // Unknown sources enabled or disabled on device (Read-only)
                unknownSourcesStatus?: boolean;
                // Gives information about the device such as `os` version. This property can be
                // [updated](/admin-sdk/directory/v1/reference/mobiledevices/update.html). For more information, see the [Developer's
                // Guide](/admin-sdk/directory/v1/guides/manage-mobile-devices#update_mobile_device).
                userAgent?: string;
                // The device's MAC address on Wi-Fi networks.
                wifiMacAddress?: string;
            }
            interface MobileDeviceAction {
                // The action to be performed on the device.
                action?: string;
            }
            interface MobileDeviceApplications {
                // The application's display name. An example is `Browser`.
                displayName?: string;
                // The application's package name. An example is `com.android.browser`.
                packageName?: string;
                // The list of permissions of this application. These can be either a standard Android permission or one defined by the
                // application, and are found in an application's [Android
                // manifest](http://developer.android.com/guide/topics/manifest/uses-permission-element.html). Examples of a Calendar
                // application's permissions are `READ_CALENDAR`, or `MANAGE_ACCOUNTS`.
                permission?: string[];
                // The application's version code. An example is `13`.
                versionCode?: Integer;
                // The application's version name. An example is `3.2-140714`.
                versionName?: string;
            }
            interface MobileDevices {
                // ETag of the resource.
                etag?: string;
                // Kind of resource this is.
                kind?: string;
                // List of Mobile Device objects.
                mobiledevices?: Schema.MobileDevice[];
                // Token used to access next page of this result.
                nextPageToken?: string;
            }
            // Managing your account's organizational units allows you to configure your users' access to services and custom settings.
            // For more information about common organizational unit tasks, see the [Developer's
            // Guide](/admin-sdk/directory/v1/guides/manage-org-units.html).
            interface OrgUnit {
                // Determines if a sub-organizational unit can inherit the settings of the parent organization. The default value is
                // `false`, meaning a sub-organizational unit inherits the settings of the nearest parent organizational unit. For more
                // information on inheritance and users in an organization structure, see the [administration help
                // center](http://support.google.com/a/bin/answer.py?answer=182442&topic=1227584&ctx=topic).
                blockInheritance?: boolean;
                // Description of the organizational unit.
                description?: string;
                // ETag of the resource.
                etag?: string;
                // The type of the API resource. For Orgunits resources, the value is `admin#directory#orgUnit`.
                kind?: string;
                // The organizational unit's path name. For example, an organizational unit's name within the /corp/support/sales_support
                // parent path is sales_support. Required.
                name?: string;
                // The unique ID of the organizational unit.
                orgUnitId?: string;
                // The full path to the organizational unit. The `orgUnitPath` is a derived property. When listed, it is derived from
                // `parentOrgunitPath` and organizational unit's `name`. For example, for an organizational unit named 'apps' under parent
                // organization '/engineering', the orgUnitPath is '/engineering/apps'. In order to edit an `orgUnitPath`, either update
                // the name of the organization or the `parentOrgunitPath`. A user's organizational unit determines which Google Workspace
                // services the user has access to. If the user is moved to a new organization, the user's access changes. For more
                // information about organization structures, see the [administration help
                // center](http://support.google.com/a/bin/answer.py?answer=182433&topic=1227584&ctx=topic). For more information about
                // moving a user to a different organization, see [Update a
                // user](/admin-sdk/directory/v1/guides/manage-users.html#update_user).
                orgUnitPath?: string;
                // The unique ID of the parent organizational unit. Required, unless `parentOrgUnitPath` is set.
                parentOrgUnitId?: string;
                // The organizational unit's parent path. For example, /corp/sales is the parent path for /corp/sales/sales_support
                // organizational unit. Required, unless `parentOrgUnitId` is set.
                parentOrgUnitPath?: string;
            }
            interface OrgUnits {
                // ETag of the resource.
                etag?: string;
                // The type of the API resource. For Org Unit resources, the type is `admin#directory#orgUnits`.
                kind?: string;
                // List of organizational unit objects.
                organizationUnits?: Schema.OrgUnit[];
            }
            interface Privilege {
                // A list of child privileges. Privileges for a service form a tree. Each privilege can have a list of child privileges;
                // this list is empty for a leaf privilege.
                childPrivileges?: Schema.Privilege[];
                // ETag of the resource.
                etag?: string;
                // If the privilege can be restricted to an organization unit.
                isOuScopable?: boolean;
                // The type of the API resource. This is always `admin#directory#privilege`.
                kind?: string;
                // The name of the privilege.
                privilegeName?: string;
                // The obfuscated ID of the service this privilege is for. This value is returned with
                // [`Privileges.list()`](/admin-sdk/directory/v1/reference/privileges/list).
                serviceId?: string;
                // The name of the service this privilege is for.
                serviceName?: string;
            }
            interface Privileges {
                // ETag of the resource.
                etag?: string;
                // A list of Privilege resources.
                items?: Schema.Privilege[];
                // The type of the API resource. This is always `admin#directory#privileges`.
                kind?: string;
            }
            // List of recent device users, in descending order, by last login time.
            interface RecentUsers {
                // The user's email address. This is only present if the user type is `USER_TYPE_MANAGED`.
                email?: string;
                // The type of the user.
                type?: string;
            }
            interface Role {
                // ETag of the resource.
                etag?: string;
                // Returns `true` if the role is a super admin role.
                isSuperAdminRole?: boolean;
                // Returns `true` if this is a pre-defined system role.
                isSystemRole?: boolean;
                // The type of the API resource. This is always `admin#directory#role`.
                kind?: string;
                // A short description of the role.
                roleDescription?: string;
                // ID of the role.
                roleId?: string;
                // Name of the role.
                roleName?: string;
                // The set of privileges that are granted to this role.
                rolePrivileges?: Schema.RoleRolePrivileges[];
            }
            interface RoleAssignment {
                // The unique ID of the user this role is assigned to.
                assignedTo?: string;
                // ETag of the resource.
                etag?: string;
                // The type of the API resource. This is always `admin#directory#roleAssignment`.
                kind?: string;
                // If the role is restricted to an organization unit, this contains the ID for the organization unit the exercise of this
                // role is restricted to.
                orgUnitId?: string;
                // ID of this roleAssignment.
                roleAssignmentId?: string;
                // The ID of the role that is assigned.
                roleId?: string;
                // The scope in which this role is assigned.
                scopeType?: string;
            }
            interface RoleAssignments {
                // ETag of the resource.
                etag?: string;
                // A list of RoleAssignment resources.
                items?: Schema.RoleAssignment[];
                // The type of the API resource. This is always `admin#directory#roleAssignments`.
                kind?: string;
                nextPageToken?: string;
            }
            interface RoleRolePrivileges {
                // The name of the privilege.
                privilegeName?: string;
                // The obfuscated ID of the service this privilege is for. This value is returned with
                // [`Privileges.list()`](/admin-sdk/directory/v1/reference/privileges/list).
                serviceId?: string;
            }
            interface Roles {
                // ETag of the resource.
                etag?: string;
                // A list of Role resources.
                items?: Schema.Role[];
                // The type of the API resource. This is always `admin#directory#roles`.
                kind?: string;
                nextPageToken?: string;
            }
            // The type of API resource. For Schema resources, this is always `admin#directory#schema`.
            interface Schema {
                // Display name for the schema.
                displayName?: string;
                // The ETag of the resource.
                etag?: string;
                // A list of fields in the schema.
                fields?: Schema.SchemaFieldSpec[];
                // Kind of resource this is.
                kind?: string;
                // The unique identifier of the schema (Read-only)
                schemaId?: string;
                // The schema's name.
                schemaName?: string;
            }
            // You can use schemas to add custom fields to user profiles. You can use these fields to store information such as the
            // projects your users work on, their physical locations, their hire dates, or whatever else fits your business needs. For
            // more information, see [Custom User Fields](/admin-sdk/directory/v1/guides/manage-schemas).
            interface SchemaFieldSpec {
                // Display Name of the field.
                displayName?: string;
                // The ETag of the field.
                etag?: string;
                // The unique identifier of the field (Read-only)
                fieldId?: string;
                // The name of the field.
                fieldName?: string;
                // The type of the field.
                fieldType?: string;
                // Boolean specifying whether the field is indexed or not. Default: `true`.
                indexed?: boolean;
                // The kind of resource this is. For schema fields this is always `admin#directory#schema#fieldspec`.
                kind?: string;
                // A boolean specifying whether this is a multi-valued field or not. Default: `false`.
                multiValued?: boolean;
                // Indexing spec for a numeric field. By default, only exact match queries will be supported for numeric fields. Setting
                // the `numericIndexingSpec` allows range queries to be supported.
                numericIndexingSpec?: Schema.SchemaFieldSpecNumericIndexingSpec;
                // Specifies who can view values of this field. See [Retrieve users as a
                // non-administrator](/admin-sdk/directory/v1/guides/manage-users#retrieve_users_non_admin) for more information. Note: It
                // may take up to 24 hours for changes to this field to be reflected.
                readAccessType?: string;
            }
            // Indexing spec for a numeric field. By default, only exact match queries will be supported for numeric fields. Setting
            // the `numericIndexingSpec` allows range queries to be supported.
            interface SchemaFieldSpecNumericIndexingSpec {
                // Maximum value of this field. This is meant to be indicative rather than enforced. Values outside this range will still
                // be indexed, but search may not be as performant.
                maxValue?: number;
                // Minimum value of this field. This is meant to be indicative rather than enforced. Values outside this range will still
                // be indexed, but search may not be as performant.
                minValue?: number;
            }
            // JSON response template for List Schema operation in Directory API.
            interface Schemas {
                // ETag of the resource.
                etag?: string;
                // Kind of resource this is.
                kind?: string;
                // List of UserSchema objects.
                schemas?: Schema.Schema[];
            }
            // JSON template for token resource in Directory API.
            interface Token {
                // Whether the application is registered with Google. The value is `true` if the application has an anonymous Client ID.
                anonymous?: boolean;
                // The Client ID of the application the token is issued to.
                clientId?: string;
                // The displayable name of the application the token is issued to.
                displayText?: string;
                // ETag of the resource.
                etag?: string;
                // The type of the API resource. This is always `admin#directory#token`.
                kind?: string;
                // Whether the token is issued to an installed application. The value is `true` if the application is installed to a
                // desktop or mobile device.
                nativeApp?: boolean;
                // A list of authorization scopes the application is granted.
                scopes?: string[];
                // The unique ID of the user that issued the token.
                userKey?: string;
            }
            // JSON response template for List tokens operation in Directory API.
            interface Tokens {
                // ETag of the resource.
                etag?: string;
                // A list of Token resources.
                items?: Schema.Token[];
                // The type of the API resource. This is always `admin#directory#tokenList`.
                kind?: string;
            }
            // The Directory API allows you to create and manage your account's users, user aliases, and user Gmail chat profile
            // photos. For more information about common tasks, see the [User Accounts Developer's
            // Guide](/admin-sdk/directory/v1/guides/manage-users.html) and the [User Aliases Developer's
            // Guide](/admin-sdk/directory/v1/guides/manage-user-aliases.html).
            interface User {
                // A list of the user's addresses. The maximum allowed data size for this field is 10Kb.
                addresses?: object;
                // Output only. This property is `true` if the user has completed an initial login and accepted the Terms of Service
                // agreement.
                agreedToTerms?: boolean;
                // Output only. List of the user's alias email addresses.
                aliases?: string[];
                // Indicates if user is archived.
                archived?: boolean;
                // Indicates if the user is forced to change their password at next login. This setting doesn't apply when [the user signs
                // in via a third-party identity provider](https://support.google.com/a/answer/60224).
                changePasswordAtNextLogin?: boolean;
                // User's G Suite account creation time. (Read-only)
                creationTime?: string;
                // Custom fields of the user.
                customSchemas?: object;
                // Output only. The customer ID to [retrieve all account
                // users](/admin-sdk/directory/v1/guides/manage-users.html#get_all_users). You can use the alias `my_customer` to represent
                // your account's `customerId`. As a reseller administrator, you can use the resold customer account's `customerId`. To get
                // a `customerId`, use the account's primary domain in the `domain` parameter of a
                // [users.list](/admin-sdk/directory/v1/reference/users/list) request.
                customerId?: string;
                deletionTime?: string;
                // A list of the user's email addresses. The maximum allowed data size for this field is 10Kb.
                emails?: object;
                // Output only. ETag of the resource.
                etag?: string;
                // A list of external IDs for the user, such as an employee or network ID. The maximum allowed data size for this field is
                // 2Kb.
                externalIds?: object;
                // The user's gender. The maximum allowed data size for this field is 1Kb.
                gender?: object;
                // Stores the hash format of the password property. We recommend sending the `password` property value as a base 16 bit
                // hexadecimal-encoded hash value. Set the `hashFunction` values as either the [SHA-1](http://wikipedia.org/wiki/SHA-1),
                // [MD5](http://wikipedia.org/wiki/MD5), or [crypt](https://en.wikipedia.org/wiki/Crypt_(C)) hash format.
                hashFunction?: string;
                // The unique ID for the user. A user `id` can be used as a user request URI's `userKey`.
                id?: string;
                // The user's Instant Messenger (IM) accounts. A user account can have multiple ims properties. But, only one of these ims
                // properties can be the primary IM contact. The maximum allowed data size for this field is 2Kb.
                ims?: object;
                // Indicates if the user's profile is visible in the Google Workspace global address list when the contact sharing feature
                // is enabled for the domain. For more information about excluding user profiles, see the [administration help
                // center](http://support.google.com/a/bin/answer.py?answer=1285988).
                includeInGlobalAddressList?: boolean;
                // If `true`, the user's IP address is [white listed](http://support.google.com/a/bin/answer.py?answer=60752).
                ipWhitelisted?: boolean;
                // Output only. Indicates a user with super admininistrator privileges. The `isAdmin` property can only be edited in the
                // [Make a user an administrator](/admin-sdk/directory/v1/guides/manage-users.html#make_admin) operation (
                // [makeAdmin](/admin-sdk/directory/v1/reference/users/makeAdmin.html) method). If edited in the user
                // [insert](/admin-sdk/directory/v1/reference/users/insert.html) or
                // [update](/admin-sdk/directory/v1/reference/users/update.html) methods, the edit is ignored by the API service.
                isAdmin?: boolean;
                // Output only. Indicates if the user is a delegated administrator. Delegated administrators are supported by the API but
                // cannot create or undelete users, or make users administrators. These requests are ignored by the API service. Roles and
                // privileges for administrators are assigned using the [Admin
                // console](http://support.google.com/a/bin/answer.py?answer=33325).
                isDelegatedAdmin?: boolean;
                // Output only. Is 2-step verification enforced (Read-only)
                isEnforcedIn2Sv?: boolean;
                // Output only. Is enrolled in 2-step verification (Read-only)
                isEnrolledIn2Sv?: boolean;
                // Output only. Indicates if the user's Google mailbox is created. This property is only applicable if the user has been
                // assigned a Gmail license.
                isMailboxSetup?: boolean;
                // The user's keywords. The maximum allowed data size for this field is 1Kb.
                keywords?: object;
                // Output only. The type of the API resource. For Users resources, the value is `admin#directory#user`.
                kind?: string;
                // The user's languages. The maximum allowed data size for this field is 1Kb.
                languages?: object;
                // User's last login time. (Read-only)
                lastLoginTime?: string;
                // The user's locations. The maximum allowed data size for this field is 10Kb.
                locations?: object;
                // Holds the given and family names of the user, and the read-only `fullName` value. The maximum number of characters in
                // the `givenName` and in the `familyName` values is 60. In addition, name values support unicode/UTF-8 characters, and can
                // contain spaces, letters (a-z), numbers (0-9), dashes (-), forward slashes (/), and periods (.). For more information
                // about character usage rules, see the [administration help
                // center](http://support.google.com/a/bin/answer.py?answer=33386). Maximum allowed data size for this field is 1Kb.
                name?: Schema.UserName;
                // Output only. List of the user's non-editable alias email addresses. These are typically outside the account's primary
                // domain or sub-domain.
                nonEditableAliases?: string[];
                // Notes for the user.
                notes?: object;
                // The full path of the parent organization associated with the user. If the parent organization is the top-level, it is
                // represented as a forward slash (`/`).
                orgUnitPath?: string;
                // A list of organizations the user belongs to. The maximum allowed data size for this field is 10Kb.
                organizations?: object;
                // User's password
                password?: string;
                // A list of the user's phone numbers. The maximum allowed data size for this field is 1Kb.
                phones?: object;
                // A list of [POSIX](http://www.opengroup.org/austin/papers/posix_faq.html) account information for the user.
                posixAccounts?: object;
                // The user's primary email address. This property is required in a request to create a user account. The `primaryEmail`
                // must be unique and cannot be an alias of another user.
                primaryEmail?: string;
                // Recovery email of the user.
                recoveryEmail?: string;
                // Recovery phone of the user. The phone number must be in the E.164 format, starting with the plus sign (+). Example:
                // *+16506661212*.
                recoveryPhone?: string;
                // A list of the user's relationships to other users. The maximum allowed data size for this field is 2Kb.
                relations?: object;
                // A list of SSH public keys.
                sshPublicKeys?: object;
                // Indicates if user is suspended.
                suspended?: boolean;
                // Output only. Has the reason a user account is suspended either by the administrator or by Google at the time of
                // suspension. The property is returned only if the `suspended` property is `true`.
                suspensionReason?: string;
                // Output only. ETag of the user's photo (Read-only)
                thumbnailPhotoEtag?: string;
                // Output only. Photo Url of the user (Read-only)
                thumbnailPhotoUrl?: string;
                // The user's websites. The maximum allowed data size for this field is 2Kb.
                websites?: object;
            }
            // JSON template for About (notes) of a user in Directory API.
            interface UserAbout {
                // About entry can have a type which indicates the content type. It can either be plain or html. By default, notes contents
                // are assumed to contain plain text.
                contentType?: string;
                // Actual value of notes.
                value?: string;
            }
            // JSON template for address.
            interface UserAddress {
                // Country.
                country?: string;
                // Country code.
                countryCode?: string;
                // Custom type.
                customType?: string;
                // Extended Address.
                extendedAddress?: string;
                // Formatted address.
                formatted?: string;
                // Locality.
                locality?: string;
                // Other parts of address.
                poBox?: string;
                // Postal code.
                postalCode?: string;
                // If this is user's primary address. Only one entry could be marked as primary.
                primary?: boolean;
                // Region.
                region?: string;
                // User supplied address was structured. Structured addresses are NOT supported at this time. You might be able to write
                // structured addresses but any values will eventually be clobbered.
                sourceIsStructured?: boolean;
                // Street.
                streetAddress?: string;
                // Each entry can have a type which indicates standard values of that entry. For example address could be of home work etc.
                // In addition to the standard type an entry can have a custom type and can take any value. Such type should have the
                // CUSTOM value as type and also have a customType value.
                type?: string;
            }
            // JSON template for an email.
            interface UserEmail {
                // Email id of the user.
                address?: string;
                // Custom Type.
                customType?: string;
                // If this is user's primary email. Only one entry could be marked as primary.
                primary?: boolean;
                // Each entry can have a type which indicates standard types of that entry. For example email could be of home, work etc.
                // In addition to the standard type, an entry can have a custom type and can take any value Such types should have the
                // CUSTOM value as type and also have a customType value.
                type?: string;
            }
            // JSON template for an externalId entry.
            interface UserExternalId {
                // Custom type.
                customType?: string;
                // The type of the Id.
                type?: string;
                // The value of the id.
                value?: string;
            }
            interface UserGender {
                // AddressMeAs. A human-readable string containing the proper way to refer to the profile owner by humans for example
                // he/him/his or they/them/their.
                addressMeAs?: string;
                // Custom gender.
                customGender?: string;
                // Gender.
                type?: string;
            }
            // JSON template for instant messenger of an user.
            interface UserIm {
                // Custom protocol.
                customProtocol?: string;
                // Custom type.
                customType?: string;
                // Instant messenger id.
                im?: string;
                // If this is user's primary im. Only one entry could be marked as primary.
                primary?: boolean;
                // Protocol used in the instant messenger. It should be one of the values from ImProtocolTypes map. Similar to type it can
                // take a CUSTOM value and specify the custom name in customProtocol field.
                protocol?: string;
                // Each entry can have a type which indicates standard types of that entry. For example instant messengers could be of home
                // work etc. In addition to the standard type an entry can have a custom type and can take any value. Such types should
                // have the CUSTOM value as type and also have a customType value.
                type?: string;
            }
            // JSON template for a keyword entry.
            interface UserKeyword {
                // Custom Type.
                customType?: string;
                // Each entry can have a type which indicates standard type of that entry. For example keyword could be of type occupation
                // or outlook. In addition to the standard type an entry can have a custom type and can give it any name. Such types should
                // have the CUSTOM value as type and also have a customType value.
                type?: string;
                // Keyword.
                value?: string;
            }
            // JSON template for a language entry.
            interface UserLanguage {
                // Other language. User can provide own language name if there is no corresponding Google III language code. If this is set
                // LanguageCode can't be set
                customLanguage?: string;
                // Language Code. Should be used for storing Google III LanguageCode string representation for language. Illegal values
                // cause SchemaException.
                languageCode?: string;
            }
            // JSON template for a location entry.
            interface UserLocation {
                // Textual location. This is most useful for display purposes to concisely describe the location. For example 'Mountain
                // View, CA', 'Near Seattle', 'US-NYC-9TH 9A209A.''
                area?: string;
                // Building Identifier.
                buildingId?: string;
                // Custom Type.
                customType?: string;
                // Most specific textual code of individual desk location.
                deskCode?: string;
                // Floor name/number.
                floorName?: string;
                // Floor section. More specific location within the floor. For example if a floor is divided into sections 'A', 'B' and 'C'
                // this field would identify one of those values.
                floorSection?: string;
                // Each entry can have a type which indicates standard types of that entry. For example location could be of types default
                // and desk. In addition to standard type an entry can have a custom type and can give it any name. Such types should have
                // 'custom' as type and also have a customType value.
                type?: string;
            }
            interface UserMakeAdmin {
                // Indicates the administrator status of the user.
                status?: boolean;
            }
            interface UserName {
                // The user's last name. Required when creating a user account.
                familyName?: string;
                // The user's full name formed by concatenating the first and last name values.
                fullName?: string;
                // The user's first name. Required when creating a user account.
                givenName?: string;
            }
            // JSON template for an organization entry.
            interface UserOrganization {
                // The cost center of the users department.
                costCenter?: string;
                // Custom type.
                customType?: string;
                // Department within the organization.
                department?: string;
                // Description of the organization.
                description?: string;
                // The domain to which the organization belongs to.
                domain?: string;
                // The full-time equivalent millipercent within the organization (100000 = 100%).
                fullTimeEquivalent?: Integer;
                // Location of the organization. This need not be fully qualified address.
                location?: string;
                // Name of the organization
                name?: string;
                // If it user's primary organization.
                primary?: boolean;
                // Symbol of the organization.
                symbol?: string;
                // Title (designation) of the user in the organization.
                title?: string;
                // Each entry can have a type which indicates standard types of that entry. For example organization could be of school
                // work etc. In addition to the standard type an entry can have a custom type and can give it any name. Such types should
                // have the CUSTOM value as type and also have a CustomType value.
                type?: string;
            }
            // JSON template for a phone entry.
            interface UserPhone {
                // Custom Type.
                customType?: string;
                // If this is user's primary phone or not.
                primary?: boolean;
                // Each entry can have a type which indicates standard types of that entry. For example phone could be of home_fax work
                // mobile etc. In addition to the standard type an entry can have a custom type and can give it any name. Such types should
                // have the CUSTOM value as type and also have a customType value.
                type?: string;
                // Phone number.
                value?: string;
            }
            interface UserPhoto {
                // ETag of the resource.
                etag?: string;
                // Height of the photo in pixels.
                height?: Integer;
                // The ID the API uses to uniquely identify the user.
                id?: string;
                // The type of the API resource. For Photo resources, this is `admin#directory#user#photo`.
                kind?: string;
                // The MIME type of the photo. Allowed values are `JPEG`, `PNG`, `GIF`, `BMP`, `TIFF`, and web-safe base64 encoding.
                mimeType?: string;
                // The user photo's upload data in [web-safe Base64](https://code.google.com/p/stringencoders/wiki/WebSafeBase64) format in
                // bytes. This means: * The slash (/) character is replaced with the underscore (_) character. * The plus sign (+)
                // character is replaced with the hyphen (-) character. * The equals sign (=) character is replaced with the asterisk (*).
                // * For padding, the period (.) character is used instead of the RFC-4648 baseURL definition which uses the equals sign
                // (=) for padding. This is done to simplify URL-parsing. * Whatever the size of the photo being uploaded, the API
                // downsizes it to 96x96 pixels.
                photoData?: Byte[];
                // The user's primary email address.
                primaryEmail?: string;
                // Width of the photo in pixels.
                width?: Integer;
            }
            // JSON template for a POSIX account entry.
            interface UserPosixAccount {
                // A POSIX account field identifier.
                accountId?: string;
                // The GECOS (user information) for this account.
                gecos?: string;
                // The default group ID.
                gid?: string;
                // The path to the home directory for this account.
                homeDirectory?: string;
                // The operating system type for this account.
                operatingSystemType?: string;
                // If this is user's primary account within the SystemId.
                primary?: boolean;
                // The path to the login shell for this account.
                shell?: string;
                // System identifier for which account Username or Uid apply to.
                systemId?: string;
                // The POSIX compliant user ID.
                uid?: string;
                // The username of the account.
                username?: string;
            }
            // JSON template for a relation entry.
            interface UserRelation {
                // Custom Type.
                customType?: string;
                // The relation of the user. Some of the possible values are mother father sister brother manager assistant partner.
                type?: string;
                // The name of the relation.
                value?: string;
            }
            // JSON template for a POSIX account entry.
            interface UserSshPublicKey {
                // An expiration time in microseconds since epoch.
                expirationTimeUsec?: string;
                // A SHA-256 fingerprint of the SSH public key. (Read-only)
                fingerprint?: string;
                // An SSH public key.
                key?: string;
            }
            interface UserUndelete {
                // OrgUnit of User
                orgUnitPath?: string;
            }
            // JSON template for a website entry.
            interface UserWebsite {
                // Custom Type.
                customType?: string;
                // If this is user's primary website or not.
                primary?: boolean;
                // Each entry can have a type which indicates standard types of that entry. For example website could be of home work blog
                // etc. In addition to the standard type an entry can have a custom type and can give it any name. Such types should have
                // the CUSTOM value as type and also have a customType value.
                type?: string;
                // Website.
                value?: string;
            }
            interface Users {
                // ETag of the resource.
                etag?: string;
                // Kind of resource this is.
                kind?: string;
                // Token used to access next page of this result.
                nextPageToken?: string;
                // Event that triggered this response (only used in case of Push Response)
                trigger_event?: string;
                // List of user objects.
                users?: Schema.User[];
            }
            // The Directory API allows you to view, generate, and invalidate backup verification codes for a user.
            interface VerificationCode {
                // ETag of the resource.
                etag?: string;
                // The type of the resource. This is always `admin#directory#verificationCode`.
                kind?: string;
                // The obfuscated unique ID of the user.
                userId?: string;
                // A current verification code for the user. Invalidated or used verification codes are not returned as part of the result.
                verificationCode?: string;
            }
            // JSON response template for List verification codes operation in Directory API.
            interface VerificationCodes {
                // ETag of the resource.
                etag?: string;
                // A list of verification code resources.
                items?: Schema.VerificationCode[];
                // The type of the resource. This is always `admin#directory#verificationCodesList`.
                kind?: string;
            }
        }
    }
    // Admin SDK lets administrators of enterprise domains to view and manage resources like user, groups etc. It also provides
    // audit and usage reports of domain.
    interface AdminDirectory {
        Asps?: AdminDirectory.Collection.AspsCollection;
        Channels?: AdminDirectory.Collection.ChannelsCollection;
        Chromeosdevices?: AdminDirectory.Collection.ChromeosdevicesCollection;
        Customer?: AdminDirectory.Collection.CustomerCollection;
        Customers?: AdminDirectory.Collection.CustomersCollection;
        DomainAliases?: AdminDirectory.Collection.DomainAliasesCollection;
        Domains?: AdminDirectory.Collection.DomainsCollection;
        Groups?: AdminDirectory.Collection.GroupsCollection;
        Members?: AdminDirectory.Collection.MembersCollection;
        Mobiledevices?: AdminDirectory.Collection.MobiledevicesCollection;
        Orgunits?: AdminDirectory.Collection.OrgunitsCollection;
        Privileges?: AdminDirectory.Collection.PrivilegesCollection;
        Resources?: AdminDirectory.Collection.ResourcesCollection;
        RoleAssignments?: AdminDirectory.Collection.RoleAssignmentsCollection;
        Roles?: AdminDirectory.Collection.RolesCollection;
        Schemas?: AdminDirectory.Collection.SchemasCollection;
        Tokens?: AdminDirectory.Collection.TokensCollection;
        TwoStepVerification?: AdminDirectory.Collection.TwoStepVerificationCollection;
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
        // Create a new instance of ChromeOsDeviceLastKnownNetwork
        newChromeOsDeviceLastKnownNetwork(): AdminDirectory.Schema.ChromeOsDeviceLastKnownNetwork;
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
        // Create a new instance of DirectoryChromeosdevicesIssueCommandRequest
        newDirectoryChromeosdevicesIssueCommandRequest(): AdminDirectory.Schema.DirectoryChromeosdevicesIssueCommandRequest;
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
        // Create a new instance of OrgUnit
        newOrgUnit(): AdminDirectory.Schema.OrgUnit;
        // Create a new instance of RecentUsers
        newRecentUsers(): AdminDirectory.Schema.RecentUsers;
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
declare const AdminDirectory: GoogleAppsScript.AdminDirectory;
