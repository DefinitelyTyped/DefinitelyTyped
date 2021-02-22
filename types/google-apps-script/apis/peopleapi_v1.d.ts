// Type definitions for Google Apps Script 2021-02-11
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/mtgto/dts-google-apps-script-advanced
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
    namespace People {
        namespace Collection {
            namespace ContactGroups {
                interface MembersCollection {
                    // Modify the members of a contact group owned by the authenticated user. The only system contact groups that can have
                    // members added are `contactGroups/myContacts` and `contactGroups/starred`. Other system contact groups are deprecated and
                    // can only have contacts removed.
                    modify(resource: Schema.ModifyContactGroupMembersRequest, resourceName: string): Schema.ModifyContactGroupMembersResponse;
                }
            }
            namespace People {
                interface ConnectionsCollection {
                    // Provides a list of the authenticated user's contacts. The request returns a 400 error if `personFields` is not
                    // specified. The request returns a 410 error if `sync_token` is specified and is expired. Sync tokens expire after 7 days
                    // to prevent data drift between clients and the server. To handle a sync token expired error, a request should be sent
                    // without `sync_token` to get all contacts.
                    list(resourceName: string): Schema.ListConnectionsResponse;
                    // Provides a list of the authenticated user's contacts. The request returns a 400 error if `personFields` is not
                    // specified. The request returns a 410 error if `sync_token` is specified and is expired. Sync tokens expire after 7 days
                    // to prevent data drift between clients and the server. To handle a sync token expired error, a request should be sent
                    // without `sync_token` to get all contacts.
                    list(resourceName: string, optionalArgs: object): Schema.ListConnectionsResponse;
                }
            }
            interface ContactGroupsCollection {
                Members?: Collection.ContactGroups.MembersCollection;
                // Get a list of contact groups owned by the authenticated user by specifying a list of contact group resource names.
                batchGet(): Schema.BatchGetContactGroupsResponse;
                // Get a list of contact groups owned by the authenticated user by specifying a list of contact group resource names.
                batchGet(optionalArgs: object): Schema.BatchGetContactGroupsResponse;
                // Create a new contact group owned by the authenticated user.
                create(resource: Schema.CreateContactGroupRequest): Schema.ContactGroup;
                // Get a specific contact group owned by the authenticated user by specifying a contact group resource name.
                get(resourceName: string): Schema.ContactGroup;
                // Get a specific contact group owned by the authenticated user by specifying a contact group resource name.
                get(resourceName: string, optionalArgs: object): Schema.ContactGroup;
                // List all contact groups owned by the authenticated user. Members of the contact groups are not populated.
                list(): Schema.ListContactGroupsResponse;
                // List all contact groups owned by the authenticated user. Members of the contact groups are not populated.
                list(optionalArgs: object): Schema.ListContactGroupsResponse;
                // Delete an existing contact group owned by the authenticated user by specifying a contact group resource name.
                remove(resourceName: string): void;
                // Delete an existing contact group owned by the authenticated user by specifying a contact group resource name.
                remove(resourceName: string, optionalArgs: object): void;
                // Update the name of an existing contact group owned by the authenticated user.
                update(resource: Schema.UpdateContactGroupRequest, resourceName: string): Schema.ContactGroup;
            }
            interface OtherContactsCollection {
                // Copies an "Other contact" to a new contact in the user's "myContacts" group
                copyOtherContactToMyContactsGroup(resource: Schema.CopyOtherContactToMyContactsGroupRequest, resourceName: string): Schema.Person;
                // List all "Other contacts", that is contacts that are not in a contact group. "Other contacts" are typically auto created
                // contacts from interactions.
                list(): Schema.ListOtherContactsResponse;
                // List all "Other contacts", that is contacts that are not in a contact group. "Other contacts" are typically auto created
                // contacts from interactions.
                list(optionalArgs: object): Schema.ListOtherContactsResponse;
            }
            interface PeopleCollection {
                Connections?: Collection.People.ConnectionsCollection;
                // Create a new contact and return the person resource for that contact. The request returns a 400 error if more than one
                // field is specified on a field that is a singleton for contact sources: * biographies * birthdays * genders * names
                createContact(resource: Schema.Person): Schema.Person;
                // Create a new contact and return the person resource for that contact. The request returns a 400 error if more than one
                // field is specified on a field that is a singleton for contact sources: * biographies * birthdays * genders * names
                createContact(resource: Schema.Person, optionalArgs: object): Schema.Person;
                // Delete a contact person. Any non-contact data will not be deleted.
                deleteContact(resourceName: string): void;
                // Delete a contact's photo.
                deleteContactPhoto(resourceName: string): Schema.DeleteContactPhotoResponse;
                // Delete a contact's photo.
                deleteContactPhoto(resourceName: string, optionalArgs: object): Schema.DeleteContactPhotoResponse;
                // Provides information about a person by specifying a resource name. Use `people/me` to indicate the authenticated user.
                // The request returns a 400 error if 'personFields' is not specified.
                get(resourceName: string): Schema.Person;
                // Provides information about a person by specifying a resource name. Use `people/me` to indicate the authenticated user.
                // The request returns a 400 error if 'personFields' is not specified.
                get(resourceName: string, optionalArgs: object): Schema.Person;
                // Provides information about a list of specific people by specifying a list of requested resource names. Use `people/me`
                // to indicate the authenticated user. The request returns a 400 error if 'personFields' is not specified.
                getBatchGet(): Schema.GetPeopleResponse;
                // Provides information about a list of specific people by specifying a list of requested resource names. Use `people/me`
                // to indicate the authenticated user. The request returns a 400 error if 'personFields' is not specified.
                getBatchGet(optionalArgs: object): Schema.GetPeopleResponse;
                // Provides a list of domain profiles and domain contacts in the authenticated user's domain directory.
                listDirectoryPeople(): Schema.ListDirectoryPeopleResponse;
                // Provides a list of domain profiles and domain contacts in the authenticated user's domain directory.
                listDirectoryPeople(optionalArgs: object): Schema.ListDirectoryPeopleResponse;
                // Provides a list of domain profiles and domain contacts in the authenticated user's domain directory that match the
                // search query.
                searchDirectoryPeople(): Schema.SearchDirectoryPeopleResponse;
                // Provides a list of domain profiles and domain contacts in the authenticated user's domain directory that match the
                // search query.
                searchDirectoryPeople(optionalArgs: object): Schema.SearchDirectoryPeopleResponse;
                // Update contact data for an existing contact person. Any non-contact data will not be modified. Any non-contact data in
                // the person to update will be ignored. All fields specified in the `update_mask` will be replaced. The server returns a
                // 400 error if `person.metadata.sources` is not specified for the contact to be updated or if there is no contact source.
                // The server returns a 400 error with reason `"failedPrecondition"` if `person.metadata.sources.etag` is different than
                // the contact's etag, which indicates the contact has changed since its data was read. Clients should get the latest
                // person and merge their updates into the latest person. The server returns a 400 error if `memberships` are being updated
                // and there are no contact group memberships specified on the person. The server returns a 400 error if more than one
                // field is specified on a field that is a singleton for contact sources: * biographies * birthdays * genders * names
                updateContact(resource: Schema.Person, resourceName: string): Schema.Person;
                // Update contact data for an existing contact person. Any non-contact data will not be modified. Any non-contact data in
                // the person to update will be ignored. All fields specified in the `update_mask` will be replaced. The server returns a
                // 400 error if `person.metadata.sources` is not specified for the contact to be updated or if there is no contact source.
                // The server returns a 400 error with reason `"failedPrecondition"` if `person.metadata.sources.etag` is different than
                // the contact's etag, which indicates the contact has changed since its data was read. Clients should get the latest
                // person and merge their updates into the latest person. The server returns a 400 error if `memberships` are being updated
                // and there are no contact group memberships specified on the person. The server returns a 400 error if more than one
                // field is specified on a field that is a singleton for contact sources: * biographies * birthdays * genders * names
                updateContact(resource: Schema.Person, resourceName: string, optionalArgs: object): Schema.Person;
                // Update a contact's photo.
                updateContactPhoto(resource: Schema.UpdateContactPhotoRequest, resourceName: string): Schema.UpdateContactPhotoResponse;
            }
        }
        namespace Schema {
            // A person's physical address. May be a P.O. box or street address. All fields are optional.
            interface Address {
                // The city of the address.
                city?: string;
                // The country of the address.
                country?: string;
                // The [ISO 3166-1 alpha-2](http://www.iso.org/iso/country_codes.htm) country code of the address.
                countryCode?: string;
                // The extended address of the address; for example, the apartment number.
                extendedAddress?: string;
                // Output only. The type of the address translated and formatted in the viewer's account locale or the `Accept-Language`
                // HTTP header locale.
                formattedType?: string;
                // The unstructured value of the address. If this is not set by the user it will be automatically constructed from
                // structured values.
                formattedValue?: string;
                // Metadata about the address.
                metadata?: Schema.FieldMetadata;
                // The P.O. box of the address.
                poBox?: string;
                // The postal code of the address.
                postalCode?: string;
                // The region of the address; for example, the state or province.
                region?: string;
                // The street address.
                streetAddress?: string;
                // The type of the address. The type can be custom or one of these predefined values: * `home` * `work` * `other`
                type?: string;
            }
            // A person's age range.
            interface AgeRangeType {
                // The age range.
                ageRange?: string;
                // Metadata about the age range.
                metadata?: Schema.FieldMetadata;
            }
            // The response to a batch get contact groups request.
            interface BatchGetContactGroupsResponse {
                // The list of responses for each requested contact group resource.
                responses?: Schema.ContactGroupResponse[];
            }
            // A person's short biography.
            interface Biography {
                // The content type of the biography.
                contentType?: string;
                // Metadata about the biography.
                metadata?: Schema.FieldMetadata;
                // The short biography.
                value?: string;
            }
            // A person's birthday. At least one of the `date` and `text` fields are specified. The `date` and `text` fields typically
            // represent the same date, but are not guaranteed to.
            interface Birthday {
                // The date of the birthday.
                date?: Schema.Date;
                // Metadata about the birthday.
                metadata?: Schema.FieldMetadata;
                // A free-form string representing the user's birthday.
                text?: string;
            }
            // **DEPRECATED**: No data will be returned A person's bragging rights.
            interface BraggingRights {
                // Metadata about the bragging rights.
                metadata?: Schema.FieldMetadata;
                // The bragging rights; for example, `climbed mount everest`.
                value?: string;
            }
            // A person's calendar URL.
            interface CalendarUrl {
                // Output only. The type of the calendar URL translated and formatted in the viewer's account locale or the
                // `Accept-Language` HTTP header locale.
                formattedType?: string;
                // Metadata about the calendar URL.
                metadata?: Schema.FieldMetadata;
                // The type of the calendar URL. The type can be custom or one of these predefined values: * `home` * `freeBusy` * `work`
                type?: string;
                // The calendar URL.
                url?: string;
            }
            // Arbitrary client data that is populated by clients. Duplicate keys and values are allowed.
            interface ClientData {
                // The client specified key of the client data.
                key?: string;
                // Metadata about the client data.
                metadata?: Schema.FieldMetadata;
                // The client specified value of the client data.
                value?: string;
            }
            // A contact group.
            interface ContactGroup {
                // The group's client data.
                clientData?: Schema.GroupClientData[];
                // The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the resource. Used for web cache validation.
                etag?: string;
                // Output only. The name translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header
                // locale for system groups names. Group names set by the owner are the same as name.
                formattedName?: string;
                // Output only. The contact group type.
                groupType?: string;
                // Output only. The total number of contacts in the group irrespective of max members in specified in the request.
                memberCount?: Integer;
                // Output only. The list of contact person resource names that are members of the contact group. The field is only
                // populated for GET requests and will only return as many members as `maxMembers` in the get request.
                memberResourceNames?: string[];
                // Output only. Metadata about the contact group.
                metadata?: Schema.ContactGroupMetadata;
                // The contact group name set by the group owner or a system provided name for system groups.
                name?: string;
                // The resource name for the contact group, assigned by the server. An ASCII string, in the form of
                // `contactGroups/{contact_group_id}`.
                resourceName?: string;
            }
            // A Google contact group membership.
            interface ContactGroupMembership {
                // Output only. The contact group ID for the contact group membership.
                contactGroupId?: string;
                // The resource name for the contact group, assigned by the server. An ASCII string, in the form of
                // `contactGroups/{contact_group_id}`. Only contact_group_resource_name can be used for modifying memberships. Any contact
                // group membership can be removed, but only user group or "myContacts" or "starred" system groups memberships can be
                // added. A contact must always have at least one contact group membership.
                contactGroupResourceName?: string;
            }
            // The metadata about a contact group.
            interface ContactGroupMetadata {
                // Output only. True if the contact group resource has been deleted. Populated only for
                // [`ListContactGroups`](/people/api/rest/v1/contactgroups/list) requests that include a sync token.
                deleted?: boolean;
                // Output only. The time the group was last updated.
                updateTime?: string;
            }
            // The response for a specific contact group.
            interface ContactGroupResponse {
                // The contact group.
                contactGroup?: Schema.ContactGroup;
                // The original requested resource name.
                requestedResourceName?: string;
                // The status of the response.
                status?: Schema.Status;
            }
            // A request to copy an "Other contact" to my contacts group.
            interface CopyOtherContactToMyContactsGroupRequest {
                // Required. A field mask to restrict which fields are copied into the new contact. Valid values are: * emailAddresses *
                // names * phoneNumbers
                copyMask?: string;
                // Optional. A field mask to restrict which fields on the person are returned. Multiple fields can be specified by
                // separating them with commas. Defaults to the copy mask with metadata and membership fields if not set. Valid values are:
                // * addresses * ageRanges * biographies * birthdays * calendarUrls * clientData * coverPhotos * emailAddresses * events *
                // externalIds * genders * imClients * interests * locales * locations * memberships * metadata * miscKeywords * names *
                // nicknames * occupations * organizations * phoneNumbers * photos * relations * sipAddresses * skills * urls * userDefined
                readMask?: string;
                // Optional. A mask of what source types to return. Defaults to READ_SOURCE_TYPE_CONTACT and READ_SOURCE_TYPE_PROFILE if
                // not set.
                sources?: string[];
            }
            // A person's cover photo. A large image shown on the person's profile page that represents who they are or what they care
            // about.
            interface CoverPhoto {
                // True if the cover photo is the default cover photo; false if the cover photo is a user-provided cover photo.
                default?: boolean;
                // Metadata about the cover photo.
                metadata?: Schema.FieldMetadata;
                // The URL of the cover photo.
                url?: string;
            }
            // A request to create a new contact group.
            interface CreateContactGroupRequest {
                // Required. The contact group to create.
                contactGroup?: Schema.ContactGroup;
                // Optional. A field mask to restrict which fields on the group are returned. Defaults to `metadata`, `groupType`, and
                // `name` if not set or set to empty. Valid fields are: * clientData * groupType * metadata * name
                readGroupFields?: string;
            }
            // Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified
            // elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following:
            // * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an
            // anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a
            // credit card expiration date Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
            interface Date {
                // Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and
                // month where the day isn't significant.
                day?: Integer;
                // Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
                month?: Integer;
                // Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
                year?: Integer;
            }
            // The response for deleteing a contact's photo.
            interface DeleteContactPhotoResponse {
                // The updated person, if person_fields is set in the DeleteContactPhotoRequest; otherwise this will be unset.
                person?: Schema.Person;
            }
            // A G Suite Domain membership.
            interface DomainMembership {
                // True if the person is in the viewer's G Suite domain.
                inViewerDomain?: boolean;
            }
            // A person's email address.
            interface EmailAddress {
                // The display name of the email.
                displayName?: string;
                // Output only. The type of the email address translated and formatted in the viewer's account locale or the
                // `Accept-Language` HTTP header locale.
                formattedType?: string;
                // Metadata about the email address.
                metadata?: Schema.FieldMetadata;
                // The type of the email address. The type can be custom or one of these predefined values: * `home` * `work` * `other`
                type?: string;
                // The email address.
                value?: string;
            }
            // An event related to the person.
            interface Event {
                // The date of the event.
                date?: Schema.Date;
                // Output only. The type of the event translated and formatted in the viewer's account locale or the `Accept-Language` HTTP
                // header locale.
                formattedType?: string;
                // Metadata about the event.
                metadata?: Schema.FieldMetadata;
                // The type of the event. The type can be custom or one of these predefined values: * `anniversary` * `other`
                type?: string;
            }
            // An identifier from an external entity related to the person.
            interface ExternalId {
                // Output only. The type of the event translated and formatted in the viewer's account locale or the `Accept-Language` HTTP
                // header locale.
                formattedType?: string;
                // Metadata about the external ID.
                metadata?: Schema.FieldMetadata;
                // The type of the external ID. The type can be custom or one of these predefined values: * `account` * `customer` *
                // `loginId` * `network` * `organization`
                type?: string;
                // The value of the external ID.
                value?: string;
            }
            // Metadata about a field.
            interface FieldMetadata {
                // True if the field is the primary field; false if the field is a secondary field.
                primary?: boolean;
                // The source of the field.
                source?: Schema.Source;
                // Output only. True if the field is verified; false if the field is unverified. A verified field is typically a name,
                // email address, phone number, or website that has been confirmed to be owned by the person.
                verified?: boolean;
            }
            // The name that should be used to sort the person in a list.
            interface FileAs {
                // Metadata about the file-as.
                metadata?: Schema.FieldMetadata;
                // The file-as value
                value?: string;
            }
            // A person's gender.
            interface Gender {
                // The type of pronouns that should be used to address the person. The value can be custom or one of these predefined
                // values: * `male` * `female` * `other`
                addressMeAs?: string;
                // Output only. The value of the gender translated and formatted in the viewer's account locale or the `Accept-Language`
                // HTTP header locale. Unspecified or custom value are not localized.
                formattedValue?: string;
                // Metadata about the gender.
                metadata?: Schema.FieldMetadata;
                // The gender for the person. The gender can be custom or one of these predefined values: * `male` * `female` *
                // `unspecified`
                value?: string;
            }
            // The response to a get request for a list of people by resource name.
            interface GetPeopleResponse {
                // The response for each requested resource name.
                responses?: Schema.PersonResponse[];
            }
            // Arbitrary client data that is populated by clients. Duplicate keys and values are allowed.
            // LINT.IfChange(GroupClientData)
            interface GroupClientData {
                // The client specified key of the client data.
                key?: string;
                // The client specified value of the client data.
                value?: string;
            }
            // A person's instant messaging client.
            interface ImClient {
                // Output only. The protocol of the IM client formatted in the viewer's account locale or the `Accept-Language` HTTP header
                // locale.
                formattedProtocol?: string;
                // Output only. The type of the IM client translated and formatted in the viewer's account locale or the `Accept-Language`
                // HTTP header locale.
                formattedType?: string;
                // Metadata about the IM client.
                metadata?: Schema.FieldMetadata;
                // The protocol of the IM client. The protocol can be custom or one of these predefined values: * `aim` * `msn` * `yahoo` *
                // `skype` * `qq` * `googleTalk` * `icq` * `jabber` * `netMeeting`
                protocol?: string;
                // The type of the IM client. The type can be custom or one of these predefined values: * `home` * `work` * `other`
                type?: string;
                // The user name used in the IM client.
                username?: string;
            }
            // One of the person's interests.
            interface Interest {
                // Metadata about the interest.
                metadata?: Schema.FieldMetadata;
                // The interest; for example, `stargazing`.
                value?: string;
            }
            // The response to a request for the authenticated user's connections.
            interface ListConnectionsResponse {
                // The list of people that the requestor is connected to.
                connections?: Schema.Person[];
                // A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent
                // pages.
                nextPageToken?: string;
                // A token, which can be sent as `sync_token` to retrieve changes since the last request. Request must set
                // `request_sync_token` to return the sync token. When the response is paginated, only the last page will contain
                // `nextSyncToken`.
                nextSyncToken?: string;
                // The total number of items in the list without pagination.
                totalItems?: Integer;
                // **DEPRECATED** (Please use totalItems) The total number of people in the list without pagination.
                totalPeople?: Integer;
            }
            // The response to a list contact groups request.
            interface ListContactGroupsResponse {
                // The list of contact groups. Members of the contact groups are not populated.
                contactGroups?: Schema.ContactGroup[];
                // The token that can be used to retrieve the next page of results.
                nextPageToken?: string;
                // The token that can be used to retrieve changes since the last request.
                nextSyncToken?: string;
                // The total number of items in the list without pagination.
                totalItems?: Integer;
            }
            // The response to a request for the authenticated user's domain directory.
            interface ListDirectoryPeopleResponse {
                // A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent
                // pages.
                nextPageToken?: string;
                // A token, which can be sent as `sync_token` to retrieve changes since the last request. Request must set
                // `request_sync_token` to return the sync token.
                nextSyncToken?: string;
                // The list of people in the domain directory.
                people?: Schema.Person[];
            }
            // The response to a request for the authenticated user's "Other contacts".
            interface ListOtherContactsResponse {
                // A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent
                // pages.
                nextPageToken?: string;
                // A token, which can be sent as `sync_token` to retrieve changes since the last request. Request must set
                // `request_sync_token` to return the sync token.
                nextSyncToken?: string;
                // The list of "Other contacts" returned as Person resources. "Other contacts" support a limited subset of fields. See
                // ListOtherContactsRequest.request_mask for more detailed information.
                otherContacts?: Schema.Person[];
            }
            // A person's locale preference.
            interface Locale {
                // Metadata about the locale.
                metadata?: Schema.FieldMetadata;
                // The well-formed [IETF BCP 47](https://tools.ietf.org/html/bcp47) language tag representing the locale.
                value?: string;
            }
            // A person's location.
            interface Location {
                // The building identifier.
                buildingId?: string;
                // Whether the location is the current location.
                current?: boolean;
                // The individual desk location.
                deskCode?: string;
                // The floor name or number.
                floor?: string;
                // The floor section in `floor_name`.
                floorSection?: string;
                // Metadata about the location.
                metadata?: Schema.FieldMetadata;
                // The type of the location. The type can be custom or one of these predefined values: * `desk` * `grewUp`
                type?: string;
                // The free-form value of the location.
                value?: string;
            }
            // A person's membership in a group. Only contact group memberships can be modified.
            interface Membership {
                // The contact group membership.
                contactGroupMembership?: Schema.ContactGroupMembership;
                // Output only. The domain membership.
                domainMembership?: Schema.DomainMembership;
                // Metadata about the membership.
                metadata?: Schema.FieldMetadata;
            }
            // A person's miscellaneous keyword.
            interface MiscKeyword {
                // Output only. The type of the miscellaneous keyword translated and formatted in the viewer's account locale or the
                // `Accept-Language` HTTP header locale.
                formattedType?: string;
                // Metadata about the miscellaneous keyword.
                metadata?: Schema.FieldMetadata;
                // The miscellaneous keyword type.
                type?: string;
                // The value of the miscellaneous keyword.
                value?: string;
            }
            // A request to modify an existing contact group's members. Contacts can be removed from any group but they can only be
            // added to a user group or "myContacts" or "starred" system groups.
            interface ModifyContactGroupMembersRequest {
                // Optional. The resource names of the contact people to add in the form of `people/{person_id}`. The total number of
                // resource names in `resource_names_to_add` and `resource_names_to_remove` must be less than or equal to 1000.
                resourceNamesToAdd?: string[];
                // Optional. The resource names of the contact people to remove in the form of `people/{person_id}`. The total number of
                // resource names in `resource_names_to_add` and `resource_names_to_remove` must be less than or equal to 1000.
                resourceNamesToRemove?: string[];
            }
            // The response to a modify contact group members request.
            interface ModifyContactGroupMembersResponse {
                // The contact people resource names that cannot be removed from their last contact group.
                canNotRemoveLastContactGroupResourceNames?: string[];
                // The contact people resource names that were not found.
                notFoundResourceNames?: string[];
            }
            // A person's name. If the name is a mononym, the family name is empty.
            interface Name {
                // Output only. The display name formatted according to the locale specified by the viewer's account or the
                // `Accept-Language` HTTP header.
                displayName?: string;
                // Output only. The display name with the last name first formatted according to the locale specified by the viewer's
                // account or the `Accept-Language` HTTP header.
                displayNameLastFirst?: string;
                // The family name.
                familyName?: string;
                // The given name.
                givenName?: string;
                // The honorific prefixes, such as `Mrs.` or `Dr.`
                honorificPrefix?: string;
                // The honorific suffixes, such as `Jr.`
                honorificSuffix?: string;
                // Metadata about the name.
                metadata?: Schema.FieldMetadata;
                // The middle name(s).
                middleName?: string;
                // The family name spelled as it sounds.
                phoneticFamilyName?: string;
                // The full name spelled as it sounds.
                phoneticFullName?: string;
                // The given name spelled as it sounds.
                phoneticGivenName?: string;
                // The honorific prefixes spelled as they sound.
                phoneticHonorificPrefix?: string;
                // The honorific suffixes spelled as they sound.
                phoneticHonorificSuffix?: string;
                // The middle name(s) spelled as they sound.
                phoneticMiddleName?: string;
                // The free form name value.
                unstructuredName?: string;
            }
            // A person's nickname.
            interface Nickname {
                // Metadata about the nickname.
                metadata?: Schema.FieldMetadata;
                // The type of the nickname.
                type?: string;
                // The nickname.
                value?: string;
            }
            // A person's occupation.
            interface Occupation {
                // Metadata about the occupation.
                metadata?: Schema.FieldMetadata;
                // The occupation; for example, `carpenter`.
                value?: string;
            }
            // A person's past or current organization. Overlapping date ranges are permitted.
            interface Organization {
                // True if the organization is the person's current organization; false if the organization is a past organization.
                current?: boolean;
                // The person's department at the organization.
                department?: string;
                // The domain name associated with the organization; for example, `google.com`.
                domain?: string;
                // The end date when the person left the organization.
                endDate?: Schema.Date;
                // Output only. The type of the organization translated and formatted in the viewer's account locale or the
                // `Accept-Language` HTTP header locale.
                formattedType?: string;
                // The person's job description at the organization.
                jobDescription?: string;
                // The location of the organization office the person works at.
                location?: string;
                // Metadata about the organization.
                metadata?: Schema.FieldMetadata;
                // The name of the organization.
                name?: string;
                // The phonetic name of the organization.
                phoneticName?: string;
                // The start date when the person joined the organization.
                startDate?: Schema.Date;
                // The symbol associated with the organization; for example, a stock ticker symbol, abbreviation, or acronym.
                symbol?: string;
                // The person's job title at the organization.
                title?: string;
                // The type of the organization. The type can be custom or one of these predefined values: * `work` * `school`
                type?: string;
            }
            // Information about a person merged from various data sources such as the authenticated user's contacts and profile data.
            // Most fields can have multiple items. The items in a field have no guaranteed order, but each non-empty field is
            // guaranteed to have exactly one field with `metadata.primary` set to true.
            interface Person {
                // The person's street addresses.
                addresses?: Schema.Address[];
                // Output only. **DEPRECATED** (Please use `person.ageRanges` instead) The person's age range.
                ageRange?: string;
                // Output only. The person's age ranges.
                ageRanges?: Schema.AgeRangeType[];
                // The person's biographies. This field is a singleton for contact sources.
                biographies?: Schema.Biography[];
                // The person's birthdays. This field is a singleton for contact sources.
                birthdays?: Schema.Birthday[];
                // **DEPRECATED**: No data will be returned The person's bragging rights.
                braggingRights?: Schema.BraggingRights[];
                // The person's calendar URLs.
                calendarUrls?: Schema.CalendarUrl[];
                // The person's client data.
                clientData?: Schema.ClientData[];
                // Output only. The person's cover photos.
                coverPhotos?: Schema.CoverPhoto[];
                // The person's email addresses.
                emailAddresses?: Schema.EmailAddress[];
                // The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the resource. Used for web cache validation.
                etag?: string;
                // The person's events.
                events?: Schema.Event[];
                // The person's external IDs.
                externalIds?: Schema.ExternalId[];
                // The person's file-ases.
                fileAses?: Schema.FileAs[];
                // The person's genders. This field is a singleton for contact sources.
                genders?: Schema.Gender[];
                // The person's instant messaging clients.
                imClients?: Schema.ImClient[];
                // The person's interests.
                interests?: Schema.Interest[];
                // The person's locale preferences.
                locales?: Schema.Locale[];
                // The person's locations.
                locations?: Schema.Location[];
                // The person's group memberships.
                memberships?: Schema.Membership[];
                // Output only. Metadata about the person.
                metadata?: Schema.PersonMetadata;
                // The person's miscellaneous keywords.
                miscKeywords?: Schema.MiscKeyword[];
                // The person's names. This field is a singleton for contact sources.
                names?: Schema.Name[];
                // The person's nicknames.
                nicknames?: Schema.Nickname[];
                // The person's occupations.
                occupations?: Schema.Occupation[];
                // The person's past or current organizations.
                organizations?: Schema.Organization[];
                // The person's phone numbers.
                phoneNumbers?: Schema.PhoneNumber[];
                // Output only. The person's photos.
                photos?: Schema.Photo[];
                // The person's relations.
                relations?: Schema.Relation[];
                // Output only. **DEPRECATED**: No data will be returned The person's relationship interests.
                relationshipInterests?: Schema.RelationshipInterest[];
                // Output only. **DEPRECATED**: No data will be returned The person's relationship statuses.
                relationshipStatuses?: Schema.RelationshipStatus[];
                // **DEPRECATED**: (Please use `person.locations` instead) The person's residences.
                residences?: Schema.Residence[];
                // The resource name for the person, assigned by the server. An ASCII string with a max length of 27 characters, in the
                // form of `people/{person_id}`.
                resourceName?: string;
                // The person's SIP addresses.
                sipAddresses?: Schema.SipAddress[];
                // The person's skills.
                skills?: Schema.Skill[];
                // Output only. **DEPRECATED**: No data will be returned The person's taglines.
                taglines?: Schema.Tagline[];
                // The person's associated URLs.
                urls?: Schema.Url[];
                // The person's user defined data.
                userDefined?: Schema.UserDefined[];
            }
            // The metadata about a person.
            interface PersonMetadata {
                // Output only. True if the person resource has been deleted. Populated only for
                // [`connections.list`](/people/api/rest/v1/people.connections/list) requests that include a sync token.
                deleted?: boolean;
                // Output only. Resource names of people linked to this resource.
                linkedPeopleResourceNames?: string[];
                // Output only. **DEPRECATED** (Please use `person.metadata.sources.profileMetadata.objectType` instead) The type of the
                // person object.
                objectType?: string;
                // Output only. Any former resource names this person has had. Populated only for
                // [`connections.list`](/people/api/rest/v1/people.connections/list) requests that include a sync token. The resource name
                // may change when adding or removing fields that link a contact and profile such as a verified email, verified phone
                // number, or profile URL.
                previousResourceNames?: string[];
                // The sources of data for the person.
                sources?: Schema.Source[];
            }
            // The response for a single person
            interface PersonResponse {
                // **DEPRECATED** (Please use status instead) [HTTP 1.1 status code]
                // (http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html).
                httpStatusCode?: Integer;
                // The person.
                person?: Schema.Person;
                // The original requested resource name. May be different than the resource name on the returned person. The resource name
                // can change when adding or removing fields that link a contact and profile such as a verified email, verified phone
                // number, or a profile URL.
                requestedResourceName?: string;
                // The status of the response.
                status?: Schema.Status;
            }
            // A person's phone number.
            interface PhoneNumber {
                // Output only. The canonicalized [ITU-T E.164](https://law.resource.org/pub/us/cfr/ibr/004/itu-t.E.164.1.2008.pdf) form of
                // the phone number.
                canonicalForm?: string;
                // Output only. The type of the phone number translated and formatted in the viewer's account locale or the
                // `Accept-Language` HTTP header locale.
                formattedType?: string;
                // Metadata about the phone number.
                metadata?: Schema.FieldMetadata;
                // The type of the phone number. The type can be custom or one of these predefined values: * `home` * `work` * `mobile` *
                // `homeFax` * `workFax` * `otherFax` * `pager` * `workMobile` * `workPager` * `main` * `googleVoice` * `other`
                type?: string;
                // The phone number.
                value?: string;
            }
            // A person's photo. A picture shown next to the person's name to help others recognize the person.
            interface Photo {
                // True if the photo is a default photo; false if the photo is a user-provided photo.
                default?: boolean;
                // Metadata about the photo.
                metadata?: Schema.FieldMetadata;
                // The URL of the photo. You can change the desired size by appending a query parameter `sz={size}` at the end of the url,
                // where {size} is the size in pixels. Example:
                // https://lh3.googleusercontent.com/-T_wVWLlmg7w/AAAAAAAAAAI/AAAAAAAABa8/00gzXvDBYqw/s100/photo.jpg?sz=50
                url?: string;
            }
            // The metadata about a profile.
            interface ProfileMetadata {
                // Output only. The profile object type.
                objectType?: string;
                // Output only. The user types.
                userTypes?: string[];
            }
            // A person's relation to another person.
            interface Relation {
                // Output only. The type of the relation translated and formatted in the viewer's account locale or the locale specified in
                // the Accept-Language HTTP header.
                formattedType?: string;
                // Metadata about the relation.
                metadata?: Schema.FieldMetadata;
                // The name of the other person this relation refers to.
                person?: string;
                // The person's relation to the other person. The type can be custom or one of these predefined values: * `spouse` *
                // `child` * `mother` * `father` * `parent` * `brother` * `sister` * `friend` * `relative` * `domesticPartner` * `manager`
                // * `assistant` * `referredBy` * `partner`
                type?: string;
            }
            // **DEPRECATED**: No data will be returned A person's relationship interest .
            interface RelationshipInterest {
                // Output only. The value of the relationship interest translated and formatted in the viewer's account locale or the
                // locale specified in the Accept-Language HTTP header.
                formattedValue?: string;
                // Metadata about the relationship interest.
                metadata?: Schema.FieldMetadata;
                // The kind of relationship the person is looking for. The value can be custom or one of these predefined values: *
                // `friend` * `date` * `relationship` * `networking`
                value?: string;
            }
            // **DEPRECATED**: No data will be returned A person's relationship status.
            interface RelationshipStatus {
                // Output only. The value of the relationship status translated and formatted in the viewer's account locale or the
                // `Accept-Language` HTTP header locale.
                formattedValue?: string;
                // Metadata about the relationship status.
                metadata?: Schema.FieldMetadata;
                // The relationship status. The value can be custom or one of these predefined values: * `single` * `inARelationship` *
                // `engaged` * `married` * `itsComplicated` * `openRelationship` * `widowed` * `inDomesticPartnership` * `inCivilUnion`
                value?: string;
            }
            // **DEPRECATED**: Please use `person.locations` instead. A person's past or current residence.
            interface Residence {
                // True if the residence is the person's current residence; false if the residence is a past residence.
                current?: boolean;
                // Metadata about the residence.
                metadata?: Schema.FieldMetadata;
                // The address of the residence.
                value?: string;
            }
            // The response to a request for people in the authenticated user's domain directory that match the specified query.
            interface SearchDirectoryPeopleResponse {
                // A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent
                // pages.
                nextPageToken?: string;
                // The list of people in the domain directory that match the query.
                people?: Schema.Person[];
                // The total number of items in the list without pagination.
                totalSize?: Integer;
            }
            // A person's SIP address. Session Initial Protocol addresses are used for VoIP communications to make voice or video calls
            // over the internet.
            interface SipAddress {
                // Output only. The type of the SIP address translated and formatted in the viewer's account locale or the
                // `Accept-Language` HTTP header locale.
                formattedType?: string;
                // Metadata about the SIP address.
                metadata?: Schema.FieldMetadata;
                // The type of the SIP address. The type can be custom or or one of these predefined values: * `home` * `work` * `mobile` *
                // `other`
                type?: string;
                // The SIP address in the [RFC 3261 19.1](https://tools.ietf.org/html/rfc3261#section-19.1) SIP URI format.
                value?: string;
            }
            // A skill that the person has.
            interface Skill {
                // Metadata about the skill.
                metadata?: Schema.FieldMetadata;
                // The skill; for example, `underwater basket weaving`.
                value?: string;
            }
            // The source of a field.
            interface Source {
                // **Only populated in `person.metadata.sources`.** The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the
                // source. Used for web cache validation.
                etag?: string;
                // The unique identifier within the source type generated by the server.
                id?: string;
                // Output only. **Only populated in `person.metadata.sources`.** Metadata about a source of type PROFILE.
                profileMetadata?: Schema.ProfileMetadata;
                // The source type.
                type?: string;
                // Output only. **Only populated in `person.metadata.sources`.** Last update timestamp of this source.
                updateTime?: string;
            }
            // The `Status` type defines a logical error model that is suitable for different programming environments, including REST
            // APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data:
            // error code, error message, and error details. You can find out more about this error model and how to work with it in
            // the [API Design Guide](https://cloud.google.com/apis/design/errors).
            interface Status {
                // The status code, which should be an enum value of google.rpc.Code.
                code?: Integer;
                // A list of messages that carry the error details. There is a common set of message types for APIs to use.
                details?: object[];
                // A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent
                // in the google.rpc.Status.details field, or localized by the client.
                message?: string;
            }
            // **DEPRECATED**: No data will be returned A brief one-line description of the person.
            interface Tagline {
                // Metadata about the tagline.
                metadata?: Schema.FieldMetadata;
                // The tagline.
                value?: string;
            }
            // A request to update an existing user contact group. All updated fields will be replaced.
            interface UpdateContactGroupRequest {
                // Required. The contact group to update.
                contactGroup?: Schema.ContactGroup;
                // Optional. A field mask to restrict which fields on the group are returned. Defaults to `metadata`, `groupType`, and
                // `name` if not set or set to empty. Valid fields are: * clientData * groupType * memberCount * metadata * name
                readGroupFields?: string;
                // Optional. A field mask to restrict which fields on the group are updated. Multiple fields can be specified by separating
                // them with commas. Defaults to `name` if not set or set to empty. Updated fields are replaced. Valid values are: *
                // clientData * name
                updateGroupFields?: string;
            }
            // A request to update an existing contact's photo. All requests must have a valid photo format: JPEG or PNG.
            interface UpdateContactPhotoRequest {
                // Optional. A field mask to restrict which fields on the person are returned. Multiple fields can be specified by
                // separating them with commas. Defaults to empty if not set, which will skip the post mutate get. Valid values are: *
                // addresses * ageRanges * biographies * birthdays * calendarUrls * clientData * coverPhotos * emailAddresses * events *
                // externalIds * genders * imClients * interests * locales * locations * memberships * metadata * miscKeywords * names *
                // nicknames * occupations * organizations * phoneNumbers * photos * relations * sipAddresses * skills * urls * userDefined
                personFields?: string;
                // Required. Raw photo bytes
                photoBytes?: Byte[];
                // Optional. A mask of what source types to return. Defaults to READ_SOURCE_TYPE_CONTACT and READ_SOURCE_TYPE_PROFILE if
                // not set.
                sources?: string[];
            }
            // The response for updating a contact's photo.
            interface UpdateContactPhotoResponse {
                // The updated person, if person_fields is set in the UpdateContactPhotoRequest; otherwise this will be unset.
                person?: Schema.Person;
            }
            // A person's associated URLs.
            interface Url {
                // Output only. The type of the URL translated and formatted in the viewer's account locale or the `Accept-Language` HTTP
                // header locale.
                formattedType?: string;
                // Metadata about the URL.
                metadata?: Schema.FieldMetadata;
                // The type of the URL. The type can be custom or one of these predefined values: * `home` * `work` * `blog` * `profile` *
                // `homePage` * `ftp` * `reservations` * `appInstallPage`: website for a Currents application. * `other`
                type?: string;
                // The URL.
                value?: string;
            }
            // Arbitrary user data that is populated by the end users.
            interface UserDefined {
                // The end user specified key of the user defined data.
                key?: string;
                // Metadata about the user defined data.
                metadata?: Schema.FieldMetadata;
                // The end user specified value of the user defined data.
                value?: string;
            }
        }
    }
    // Provides access to information about profiles and contacts.
    interface People {
        ContactGroups?: People.Collection.ContactGroupsCollection;
        OtherContacts?: People.Collection.OtherContactsCollection;
        People?: People.Collection.PeopleCollection;
        // Create a new instance of Address
        newAddress(): People.Schema.Address;
        // Create a new instance of AgeRangeType
        newAgeRangeType(): People.Schema.AgeRangeType;
        // Create a new instance of Biography
        newBiography(): People.Schema.Biography;
        // Create a new instance of Birthday
        newBirthday(): People.Schema.Birthday;
        // Create a new instance of BraggingRights
        newBraggingRights(): People.Schema.BraggingRights;
        // Create a new instance of CalendarUrl
        newCalendarUrl(): People.Schema.CalendarUrl;
        // Create a new instance of ClientData
        newClientData(): People.Schema.ClientData;
        // Create a new instance of ContactGroup
        newContactGroup(): People.Schema.ContactGroup;
        // Create a new instance of ContactGroupMembership
        newContactGroupMembership(): People.Schema.ContactGroupMembership;
        // Create a new instance of ContactGroupMetadata
        newContactGroupMetadata(): People.Schema.ContactGroupMetadata;
        // Create a new instance of CopyOtherContactToMyContactsGroupRequest
        newCopyOtherContactToMyContactsGroupRequest(): People.Schema.CopyOtherContactToMyContactsGroupRequest;
        // Create a new instance of CoverPhoto
        newCoverPhoto(): People.Schema.CoverPhoto;
        // Create a new instance of CreateContactGroupRequest
        newCreateContactGroupRequest(): People.Schema.CreateContactGroupRequest;
        // Create a new instance of Date
        newDate(): People.Schema.Date;
        // Create a new instance of DomainMembership
        newDomainMembership(): People.Schema.DomainMembership;
        // Create a new instance of EmailAddress
        newEmailAddress(): People.Schema.EmailAddress;
        // Create a new instance of Event
        newEvent(): People.Schema.Event;
        // Create a new instance of ExternalId
        newExternalId(): People.Schema.ExternalId;
        // Create a new instance of FieldMetadata
        newFieldMetadata(): People.Schema.FieldMetadata;
        // Create a new instance of FileAs
        newFileAs(): People.Schema.FileAs;
        // Create a new instance of Gender
        newGender(): People.Schema.Gender;
        // Create a new instance of GroupClientData
        newGroupClientData(): People.Schema.GroupClientData;
        // Create a new instance of ImClient
        newImClient(): People.Schema.ImClient;
        // Create a new instance of Interest
        newInterest(): People.Schema.Interest;
        // Create a new instance of Locale
        newLocale(): People.Schema.Locale;
        // Create a new instance of Location
        newLocation(): People.Schema.Location;
        // Create a new instance of Membership
        newMembership(): People.Schema.Membership;
        // Create a new instance of MiscKeyword
        newMiscKeyword(): People.Schema.MiscKeyword;
        // Create a new instance of ModifyContactGroupMembersRequest
        newModifyContactGroupMembersRequest(): People.Schema.ModifyContactGroupMembersRequest;
        // Create a new instance of Name
        newName(): People.Schema.Name;
        // Create a new instance of Nickname
        newNickname(): People.Schema.Nickname;
        // Create a new instance of Occupation
        newOccupation(): People.Schema.Occupation;
        // Create a new instance of Organization
        newOrganization(): People.Schema.Organization;
        // Create a new instance of Person
        newPerson(): People.Schema.Person;
        // Create a new instance of PersonMetadata
        newPersonMetadata(): People.Schema.PersonMetadata;
        // Create a new instance of PhoneNumber
        newPhoneNumber(): People.Schema.PhoneNumber;
        // Create a new instance of Photo
        newPhoto(): People.Schema.Photo;
        // Create a new instance of ProfileMetadata
        newProfileMetadata(): People.Schema.ProfileMetadata;
        // Create a new instance of Relation
        newRelation(): People.Schema.Relation;
        // Create a new instance of RelationshipInterest
        newRelationshipInterest(): People.Schema.RelationshipInterest;
        // Create a new instance of RelationshipStatus
        newRelationshipStatus(): People.Schema.RelationshipStatus;
        // Create a new instance of Residence
        newResidence(): People.Schema.Residence;
        // Create a new instance of SipAddress
        newSipAddress(): People.Schema.SipAddress;
        // Create a new instance of Skill
        newSkill(): People.Schema.Skill;
        // Create a new instance of Source
        newSource(): People.Schema.Source;
        // Create a new instance of Tagline
        newTagline(): People.Schema.Tagline;
        // Create a new instance of UpdateContactGroupRequest
        newUpdateContactGroupRequest(): People.Schema.UpdateContactGroupRequest;
        // Create a new instance of UpdateContactPhotoRequest
        newUpdateContactPhotoRequest(): People.Schema.UpdateContactPhotoRequest;
        // Create a new instance of Url
        newUrl(): People.Schema.Url;
        // Create a new instance of UserDefined
        newUserDefined(): People.Schema.UserDefined;
    }
}
declare const People: GoogleAppsScript.People;
