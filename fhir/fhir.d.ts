// Type definitions for FHIR DSTU2 v1.0.0
// Project: http://www.hl7.org/fhir/2015Sep/index.html
// Definitions by: Artifact Health <http://www.artifacthealth.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace fhir {
    type id = string;
    /**
     * String of characters used to identify a name or a resource
     */
    type uri = string;
    /**
     * A whole number
     */
    type integer = number;
    /**
     * A rational number with implicit precision
     */
    type decimal = number;
    /**
     * A stream of bytes
     */
    type base64Binary = string;
    /**
     * An instant in time - known at least to the second
     */
    type instant = string;
    /**
     * A date, or partial date (e.g. just year or year + month). There is no time zone. The format is a union of the schema types gYear, gYearMonth and date.                 Dates SHALL be valid dates.
     */
    type date = string;
    /**
     * A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are specified, a time zone SHALL be populated. The format is a union of the schema types gYear, gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be zero-filled and may be ignored.                 Dates SHALL be valid dates.
     */
    type dateTime = string;
    /**
     * A time during the day, with no date specified
     */
    type time = string;
    type code = string;
    type oid = string;
    type unsignedInt = number;
    type positiveInt = number;
    type markdown = string;
    /**
     * A reference from one resource to another
     */
    interface Reference extends Element {
        /**
         * Relative, internal or absolute URL reference
         */
        reference?: string;
        /**
         * Contains reference's id, extensions, and comments.
         */
        _reference?: Element;
        /**
         * Text alternative for the resource
         */
        display?: string;
        /**
         * Contains display's id, extensions, and comments.
         */
        _display?: Element;
    }
    /**
     * A reference to a code defined by a terminology system
     */
    interface Coding extends Element {
        /**
         * Identity of the terminology system
         */
        system?: uri;
        /**
         * Contains system's id, extensions, and comments.
         */
        _system?: Element;
        /**
         * Version of the system - if relevant
         */
        version?: string;
        /**
         * Contains version's id, extensions, and comments.
         */
        _version?: Element;
        /**
         * Symbol in syntax defined by the system
         */
        code?: code;
        /**
         * Contains code's id, extensions, and comments.
         */
        _code?: Element;
        /**
         * Representation defined by the system
         */
        display?: string;
        /**
         * Contains display's id, extensions, and comments.
         */
        _display?: Element;
        /**
         * If this coding was chosen directly by the user
         */
        userSelected?: boolean;
        /**
         * Contains userSelected's id, extensions, and comments.
         */
        _userSelected?: Element;
    }
    /**
     * Concept - reference to a terminology or just  text
     */
    interface CodeableConcept extends Element {
        /**
         * Code defined by a terminology system
         */
        coding?: Coding[];
        /**
         * Plain text representation of the concept
         */
        text?: string;
        /**
         * Contains text's id, extensions, and comments.
         */
        _text?: Element;
    }
    /**
     * Time range defined by start and end date/time
     */
    interface Period extends Element {
        /**
         * Starting time with inclusive boundary
         */
        start?: dateTime;
        /**
         * Contains start's id, extensions, and comments.
         */
        _start?: Element;
        /**
         * End time with inclusive boundary, if not ongoing
         */
        end?: dateTime;
        /**
         * Contains end's id, extensions, and comments.
         */
        _end?: Element;
    }
    /**
     * Details of a Technology mediated contact point (phone, fax, email, etc)
     */
    interface ContactPoint extends Element {
        /**
         * phone | fax | email | pager | other
         */
        system?: code;
        /**
         * Contains system's id, extensions, and comments.
         */
        _system?: Element;
        /**
         * The actual contact point details
         */
        value?: string;
        /**
         * Contains value's id, extensions, and comments.
         */
        _value?: Element;
        /**
         * home | work | temp | old | mobile - purpose of this contact point
         */
        use?: code;
        /**
         * Contains use's id, extensions, and comments.
         */
        _use?: Element;
        /**
         * Specify preferred order of use (1 = highest)
         */
        rank?: positiveInt;
        /**
         * Contains rank's id, extensions, and comments.
         */
        _rank?: Element;
        /**
         * Time period when the contact point was/is in use
         */
        period?: Period;
    }
    /**
     * A postal address
     */
    interface Address extends Element {
        /**
         * home | work | temp | old - purpose of this address
         */
        use?: code;
        /**
         * Contains use's id, extensions, and comments.
         */
        _use?: Element;
        /**
         * postal | physical | both
         */
        type?: code;
        /**
         * Contains type's id, extensions, and comments.
         */
        _type?: Element;
        /**
         * Text representation of the address
         */
        text?: string;
        /**
         * Contains text's id, extensions, and comments.
         */
        _text?: Element;
        /**
         * Street name, number, direction & P.O. Box etc
         */
        line?: string[];
        /**
         * Contains line's id, extensions, and comments.
         */
        _line?: Element[];
        /**
         * Name of city, town etc.
         */
        city?: string;
        /**
         * Contains city's id, extensions, and comments.
         */
        _city?: Element;
        /**
         * District name (aka county)
         */
        district?: string;
        /**
         * Contains district's id, extensions, and comments.
         */
        _district?: Element;
        /**
         * Sub-unit of country (abreviations ok)
         */
        state?: string;
        /**
         * Contains state's id, extensions, and comments.
         */
        _state?: Element;
        /**
         * Postal code for area
         */
        postalCode?: string;
        /**
         * Contains postalCode's id, extensions, and comments.
         */
        _postalCode?: Element;
        /**
         * Country (can be ISO 3166 3 letter code)
         */
        country?: string;
        /**
         * Contains country's id, extensions, and comments.
         */
        _country?: Element;
        /**
         * Time period when address was/is in use
         */
        period?: Period;
    }
    /**
     * Contact for the organization for a certain purpose
     */
    interface OrganizationContact extends Element {
        /**
         * The type of contact
         */
        purpose?: CodeableConcept;
        /**
         * A name associated with the contact
         */
        name?: HumanName;
        /**
         * Contact details (telephone, email, etc)  for a contact
         */
        telecom?: ContactPoint[];
        /**
         * Visiting or postal addresses for the contact
         */
        address?: Address;
    }
    /**
     * Name of a human - parts and usage
     */
    interface HumanName extends Element {
        /**
         * usual | official | temp | nickname | anonymous | old | maiden
         */
        use?: code;
        /**
         * Contains use's id, extensions, and comments.
         */
        _use?: Element;
        /**
         * Text representation of the full name
         */
        text?: string;
        /**
         * Contains text's id, extensions, and comments.
         */
        _text?: Element;
        /**
         * Family name (often called 'Surname')
         */
        family?: string[];
        /**
         * Contains family's id, extensions, and comments.
         */
        _family?: Element[];
        /**
         * Given names (not always 'first'). Includes middle names
         */
        given?: string[];
        /**
         * Contains given's id, extensions, and comments.
         */
        _given?: Element[];
        /**
         * Parts that come before the name
         */
        prefix?: string[];
        /**
         * Contains prefix's id, extensions, and comments.
         */
        _prefix?: Element[];
        /**
         * Parts that come after the name
         */
        suffix?: string[];
        /**
         * Contains suffix's id, extensions, and comments.
         */
        _suffix?: Element[];
        /**
         * Time period when name was/is in use
         */
        period?: Period;
    }
    /**
     * A grouping of people or organizations with a common purpose
     */
    interface Organization extends DomainResource {
        /**
         * Identifies this organization  across multiple systems
         */
        identifier?: Identifier[];
        /**
         * Whether the organization's record is still in active use
         */
        active?: boolean;
        /**
         * Contains active's id, extensions, and comments.
         */
        _active?: Element;
        /**
         * Kind of organization
         */
        type?: CodeableConcept;
        /**
         * Name used for the organization
         */
        name?: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * A contact detail for the organization
         */
        telecom?: ContactPoint[];
        /**
         * An address for the organization
         */
        address?: Address[];
        /**
         * The organization of which this organization forms a part
         */
        partOf?: Reference;
        /**
         * Contact for the organization for a certain purpose
         */
        contact?: OrganizationContact[];
    }
    /**
     * An identifier intended for computation
     */
    interface Identifier extends Element {
        /**
         * usual | official | temp | secondary (If known)
         */
        use?: code;
        /**
         * Contains use's id, extensions, and comments.
         */
        _use?: Element;
        /**
         * Description of identifier
         */
        type?: CodeableConcept;
        /**
         * The namespace for the identifier
         */
        system?: uri;
        /**
         * Contains system's id, extensions, and comments.
         */
        _system?: Element;
        /**
         * The value that is unique
         */
        value?: string;
        /**
         * Contains value's id, extensions, and comments.
         */
        _value?: Element;
        /**
         * Time period when id is/was valid for use
         */
        period?: Period;
        /**
         * Organization that issued id (may be just text)
         */
        assigner?: Reference;
    }
    /**
     * Content in a format defined elsewhere
     */
    interface Attachment extends Element {
        /**
         * Mime type of the content, with charset etc.
         */
        contentType?: code;
        /**
         * Contains contentType's id, extensions, and comments.
         */
        _contentType?: Element;
        /**
         * Human language of the content (BCP-47)
         */
        language?: code;
        /**
         * Contains language's id, extensions, and comments.
         */
        _language?: Element;
        /**
         * Data inline, base64ed
         */
        data?: base64Binary;
        /**
         * Contains data's id, extensions, and comments.
         */
        _data?: Element;
        /**
         * Uri where the data can be found
         */
        url?: uri;
        /**
         * Contains url's id, extensions, and comments.
         */
        _url?: Element;
        /**
         * Number of bytes of content (if url provided)
         */
        size?: unsignedInt;
        /**
         * Contains size's id, extensions, and comments.
         */
        _size?: Element;
        /**
         * Hash of the data (sha-1, base64ed )
         */
        hash?: base64Binary;
        /**
         * Contains hash's id, extensions, and comments.
         */
        _hash?: Element;
        /**
         * Label to display in place of the data
         */
        title?: string;
        /**
         * Contains title's id, extensions, and comments.
         */
        _title?: Element;
        /**
         * Date attachment was first created
         */
        creation?: dateTime;
        /**
         * Contains creation's id, extensions, and comments.
         */
        _creation?: Element;
    }
    /**
     * The list of Roles/Organizations that the Practitioner is associated with
     */
    interface PractitionerPractitionerRole extends Element {
        /**
         * The Organization where the Practitioner performs the roles associated
         */
        managingOrganization?: Reference;
        /**
         * Roles which this practitioner may perform
         */
        role?: CodeableConcept;
        /**
         * Specific specialty of the practitioner
         */
        specialty?: CodeableConcept[];
        /**
         * The period during which the practitioner is authorized to perform in these role(s)
         */
        period?: Period;
        /**
         * The location(s) at which this practitioner provides care
         */
        location?: Reference[];
        /**
         * The list of healthcare services that this worker provides for this role's Organization/Location(s)
         */
        healthcareService?: Reference[];
    }
    /**
     * The absolute geographic location
     */
    interface LocationPosition extends Element {
        /**
         * Longitude with WGS84 datum
         */
        longitude: decimal;
        /**
         * Contains longitude's id, extensions, and comments.
         */
        _longitude?: Element;
        /**
         * Latitude with WGS84 datum
         */
        latitude: decimal;
        /**
         * Contains latitude's id, extensions, and comments.
         */
        _latitude?: Element;
        /**
         * Altitude with WGS84 datum
         */
        altitude?: decimal;
        /**
         * Contains altitude's id, extensions, and comments.
         */
        _altitude?: Element;
    }
    /**
     * Details and position information for a physical place
     */
    interface Location extends DomainResource {
        /**
         * Unique code or number identifying the location to its users
         */
        identifier?: Identifier[];
        /**
         * active | suspended | inactive
         */
        status?: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * Name of the location as used by humans
         */
        name?: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * Description of the Location, which helps in finding or referencing the place
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * instance | kind
         */
        mode?: code;
        /**
         * Contains mode's id, extensions, and comments.
         */
        _mode?: Element;
        /**
         * Indicates the type of function performed at the location
         */
        type?: CodeableConcept;
        /**
         * Contact details of the location
         */
        telecom?: ContactPoint[];
        /**
         * Physical location
         */
        address?: Address;
        /**
         * Physical form of the location
         */
        physicalType?: CodeableConcept;
        /**
         * The absolute geographic location
         */
        position?: LocationPosition;
        /**
         * The organization that is responsible for the provisioning and upkeep of the location
         */
        managingOrganization?: Reference;
        /**
         * Another Location which this Location is physically part of
         */
        partOf?: Reference;
    }
    /**
     * A specific type of service that may be delivered or performed
     */
    interface HealthcareServiceServiceType extends Element {
        /**
         * The specific type of service being delivered or performed
         */
        type: CodeableConcept;
        /**
         * Collection of Specialties handled by the Service Site. This is more of a Medical Term
         */
        specialty?: CodeableConcept[];
    }
    /**
     * A Collection of times that the Service Site is available
     */
    interface HealthcareServiceAvailableTime extends Element {
        /**
         * mon | tue | wed | thu | fri | sat | sun
         */
        daysOfWeek?: code[];
        /**
         * Contains daysOfWeek's id, extensions, and comments.
         */
        _daysOfWeek?: Element[];
        /**
         * Is this always available? (hence times are irrelevant) e.g. 24 hour service
         */
        allDay?: boolean;
        /**
         * Contains allDay's id, extensions, and comments.
         */
        _allDay?: Element;
        /**
         * The opening time of day. Note: If the AllDay flag is set, then this time is ignored
         */
        availableStartTime?: time;
        /**
         * Contains availableStartTime's id, extensions, and comments.
         */
        _availableStartTime?: Element;
        /**
         * The closing time of day. Note: If the AllDay flag is set, then this time is ignored
         */
        availableEndTime?: time;
        /**
         * Contains availableEndTime's id, extensions, and comments.
         */
        _availableEndTime?: Element;
    }
    /**
     * The HealthcareService is not available during this period of time due to the provided reason
     */
    interface HealthcareServiceNotAvailable extends Element {
        /**
         * The reason that can be presented to the user as to why this time is not available
         */
        description: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * Service is not available (seasonally or for a public holiday) from this date
         */
        during?: Period;
    }
    /**
     * The details of a Healthcare Service available at a location
     */
    interface HealthcareService extends DomainResource {
        /**
         * External Identifiers for this item
         */
        identifier?: Identifier[];
        /**
         * The organization that provides this Healthcare Service
         */
        providedBy?: Reference;
        /**
         * Identifies the broad category of service being performed or delivered. Selecting a Service Category then determines the list of relevant service types that can be selected in the Primary Service Type
         */
        serviceCategory?: CodeableConcept;
        /**
         * A specific type of service that may be delivered or performed
         */
        serviceType?: HealthcareServiceServiceType[];
        /**
         * The location where this healthcare service may be provided
         */
        location: Reference;
        /**
         * Further description of the service as it would be presented to a consumer while searching
         */
        serviceName?: string;
        /**
         * Contains serviceName's id, extensions, and comments.
         */
        _serviceName?: Element;
        /**
         * Any additional description of the service and/or any specific issues not covered by the other attributes, which can be displayed as further detail under the serviceName
         */
        comment?: string;
        /**
         * Contains comment's id, extensions, and comments.
         */
        _comment?: Element;
        /**
         * Extra details about the service that can't be placed in the other fields
         */
        extraDetails?: string;
        /**
         * Contains extraDetails's id, extensions, and comments.
         */
        _extraDetails?: Element;
        /**
         * If there is a photo/symbol associated with this HealthcareService, it may be included here to facilitate quick identification of the service in a list
         */
        photo?: Attachment;
        /**
         * List of contacts related to this specific healthcare service. If this is empty, then refer to the location's contacts
         */
        telecom?: ContactPoint[];
        /**
         * The location(s) that this service is available to (not where the service is provided)
         */
        coverageArea?: Reference[];
        /**
         * The code(s) that detail the conditions under which the healthcare service is available/offered
         */
        serviceProvisionCode?: CodeableConcept[];
        /**
         * Does this service have specific eligibility requirements that need to be met in order to use the service
         */
        eligibility?: CodeableConcept;
        /**
         * Describes the eligibility conditions for the service
         */
        eligibilityNote?: string;
        /**
         * Contains eligibilityNote's id, extensions, and comments.
         */
        _eligibilityNote?: Element;
        /**
         * Program Names that can be used to categorize the service
         */
        programName?: string[];
        /**
         * Contains programName's id, extensions, and comments.
         */
        _programName?: Element[];
        /**
         * Collection of Characteristics (attributes)
         */
        characteristic?: CodeableConcept[];
        /**
         * Ways that the service accepts referrals
         */
        referralMethod?: CodeableConcept[];
        /**
         * The public part of the 'keys' allocated to an Organization by an accredited body to support secure exchange of data over the internet. To be provided by the Organization, where available
         */
        publicKey?: string;
        /**
         * Contains publicKey's id, extensions, and comments.
         */
        _publicKey?: Element;
        /**
         * Indicates if an appointment is required for access to this service
         */
        appointmentRequired?: boolean;
        /**
         * Contains appointmentRequired's id, extensions, and comments.
         */
        _appointmentRequired?: Element;
        /**
         * A Collection of times that the Service Site is available
         */
        availableTime?: HealthcareServiceAvailableTime[];
        /**
         * The HealthcareService is not available during this period of time due to the provided reason
         */
        notAvailable?: HealthcareServiceNotAvailable[];
        /**
         * A description of Site availability exceptions, e.g., public holiday availability. Succinctly describing all possible exceptions to normal Site availability as details in the Available Times and Not Available Times
         */
        availabilityExceptions?: string;
        /**
         * Contains availabilityExceptions's id, extensions, and comments.
         */
        _availabilityExceptions?: Element;
    }
    /**
     * Qualifications obtained by training and certification
     */
    interface PractitionerQualification extends Element {
        /**
         * An identifier for this qualification for the practitioner
         */
        identifier?: Identifier[];
        /**
         * Coded representation of the qualification
         */
        code: CodeableConcept;
        /**
         * Period during which the qualification is valid
         */
        period?: Period;
        /**
         * Organization that regulates and issues the qualification
         */
        issuer?: Reference;
    }
    /**
     * A person with a  formal responsibility in the provisioning of healthcare or related services
     */
    interface Practitioner extends DomainResource {
        /**
         * A identifier for the person as this agent
         */
        identifier?: Identifier[];
        /**
         * Whether this practitioner's record is in active use
         */
        active?: boolean;
        /**
         * Contains active's id, extensions, and comments.
         */
        _active?: Element;
        /**
         * A name associated with the person
         */
        name?: HumanName;
        /**
         * A contact detail for the practitioner
         */
        telecom?: ContactPoint[];
        /**
         * Where practitioner can be found/visited
         */
        address?: Address[];
        /**
         * male | female | other | unknown
         */
        gender?: code;
        /**
         * Contains gender's id, extensions, and comments.
         */
        _gender?: Element;
        /**
         * The date  on which the practitioner was born
         */
        birthDate?: date;
        /**
         * Contains birthDate's id, extensions, and comments.
         */
        _birthDate?: Element;
        /**
         * Image of the person
         */
        photo?: Attachment[];
        /**
         * The list of Roles/Organizations that the Practitioner is associated with
         */
        practitionerRole?: PractitionerPractitionerRole[];
        /**
         * Qualifications obtained by training and certification
         */
        qualification?: PractitionerQualification[];
        /**
         * A language the practitioner is able to use in patient communication
         */
        communication?: CodeableConcept[];
    }
    /**
     * A contact party (e.g. guardian, partner, friend) for the patient
     */
    interface PatientContact extends Element {
        /**
         * The kind of relationship
         */
        relationship?: CodeableConcept[];
        /**
         * A name associated with the contact person
         */
        name?: HumanName;
        /**
         * A contact detail for the person
         */
        telecom?: ContactPoint[];
        /**
         * Address for the contact person
         */
        address?: Address;
        /**
         * male | female | other | unknown
         */
        gender?: code;
        /**
         * Contains gender's id, extensions, and comments.
         */
        _gender?: Element;
        /**
         * Organization that is associated with the contact
         */
        organization?: Reference;
        /**
         * The period during which this contact person or organization is valid to be contacted relating to this patient
         */
        period?: Period;
    }
    /**
     * This patient is known to be an animal (non-human)
     */
    interface PatientAnimal extends Element {
        /**
         * E.g. Dog, Cow
         */
        species: CodeableConcept;
        /**
         * E.g. Poodle, Angus
         */
        breed?: CodeableConcept;
        /**
         * E.g. Neutered, Intact
         */
        genderStatus?: CodeableConcept;
    }
    /**
     * A list of Languages which may be used to communicate with the patient about his or her health
     */
    interface PatientCommunication extends Element {
        /**
         * The language which can be used to communicate with the patient about his or her health
         */
        language: CodeableConcept;
        /**
         * Language preference indicator
         */
        preferred?: boolean;
        /**
         * Contains preferred's id, extensions, and comments.
         */
        _preferred?: Element;
    }
    /**
     * Link to another patient resource that concerns the same actual person
     */
    interface PatientLink extends Element {
        /**
         * The other patient resource that the link refers to
         */
        other: Reference;
        /**
         * replace | refer | seealso - type of link
         */
        type: code;
        /**
         * Contains type's id, extensions, and comments.
         */
        _type?: Element;
    }
    /**
     * Information about an individual or animal receiving health care services
     */
    interface Patient extends DomainResource {
        /**
         * An identifier for this patient
         */
        identifier?: Identifier[];
        /**
         * Whether this patient's record is in active use
         */
        active?: boolean;
        /**
         * Contains active's id, extensions, and comments.
         */
        _active?: Element;
        /**
         * A name associated with the patient
         */
        name?: HumanName[];
        /**
         * A contact detail for the individual
         */
        telecom?: ContactPoint[];
        /**
         * male | female | other | unknown
         */
        gender?: code;
        /**
         * Contains gender's id, extensions, and comments.
         */
        _gender?: Element;
        /**
         * The date of birth for the individual
         */
        birthDate?: date;
        /**
         * Contains birthDate's id, extensions, and comments.
         */
        _birthDate?: Element;
        /**
         * Indicates if the individual is deceased or not
         */
        deceasedBoolean?: boolean;
        /**
         * Contains deceasedBoolean's id, extensions, and comments.
         */
        _deceasedBoolean?: Element;
        /**
         * Indicates if the individual is deceased or not
         */
        deceasedDateTime?: dateTime;
        /**
         * Contains deceasedDateTime's id, extensions, and comments.
         */
        _deceasedDateTime?: Element;
        /**
         * Addresses for the individual
         */
        address?: Address[];
        /**
         * Marital (civil) status of a patient
         */
        maritalStatus?: CodeableConcept;
        /**
         * Whether patient is part of a multiple birth
         */
        multipleBirthBoolean?: boolean;
        /**
         * Contains multipleBirthBoolean's id, extensions, and comments.
         */
        _multipleBirthBoolean?: Element;
        /**
         * Whether patient is part of a multiple birth
         */
        multipleBirthInteger?: integer;
        /**
         * Contains multipleBirthInteger's id, extensions, and comments.
         */
        _multipleBirthInteger?: Element;
        /**
         * Image of the patient
         */
        photo?: Attachment[];
        /**
         * A contact party (e.g. guardian, partner, friend) for the patient
         */
        contact?: PatientContact[];
        /**
         * This patient is known to be an animal (non-human)
         */
        animal?: PatientAnimal;
        /**
         * A list of Languages which may be used to communicate with the patient about his or her health
         */
        communication?: PatientCommunication[];
        /**
         * Patient's nominated primary care provider
         */
        careProvider?: Reference[];
        /**
         * Organization that is the custodian of the patient record
         */
        managingOrganization?: Reference;
        /**
         * Link to another patient resource that concerns the same actual person
         */
        link?: PatientLink[];
    }
    /**
     * An person that is related to a patient, but who is not a direct target of care
     */
    interface RelatedPerson extends DomainResource {
        /**
         * A Human identifier for this person
         */
        identifier?: Identifier[];
        /**
         * The patient this person is related to
         */
        patient: Reference;
        /**
         * The nature of the relationship
         */
        relationship?: CodeableConcept;
        /**
         * A name associated with the person
         */
        name?: HumanName;
        /**
         * A contact detail for the person
         */
        telecom?: ContactPoint[];
        /**
         * male | female | other | unknown
         */
        gender?: code;
        /**
         * Contains gender's id, extensions, and comments.
         */
        _gender?: Element;
        /**
         * The date on which the related person was born
         */
        birthDate?: date;
        /**
         * Contains birthDate's id, extensions, and comments.
         */
        _birthDate?: Element;
        /**
         * Address where the related person can be contacted or visited
         */
        address?: Address[];
        /**
         * Image of the person
         */
        photo?: Attachment[];
        /**
         * Period of time that this relationship is considered valid
         */
        period?: Period;
    }
    /**
     * Text node with attribution
     */
    interface Annotation extends Element {
        /**
         * Individual responsible for the annotation
         */
        authorReference?: Reference;
        /**
         * Individual responsible for the annotation
         */
        authorString?: string;
        /**
         * Contains authorString's id, extensions, and comments.
         */
        _authorString?: Element;
        /**
         * When the annotation was made
         */
        time?: dateTime;
        /**
         * Contains time's id, extensions, and comments.
         */
        _time?: Element;
        /**
         * The annotation  - text content
         */
        text: string;
        /**
         * Contains text's id, extensions, and comments.
         */
        _text?: Element;
    }
    /**
     * A measured or measurable amount
     */
    interface Quantity extends Element {
        /**
         * Numerical value (with implicit precision)
         */
        value?: decimal;
        /**
         * Contains value's id, extensions, and comments.
         */
        _value?: Element;
        /**
         * < | <= | >= | > - how to understand the value
         */
        comparator?: code;
        /**
         * Contains comparator's id, extensions, and comments.
         */
        _comparator?: Element;
        /**
         * Unit representation
         */
        unit?: string;
        /**
         * Contains unit's id, extensions, and comments.
         */
        _unit?: Element;
        /**
         * System that defines coded unit form
         */
        system?: uri;
        /**
         * Contains system's id, extensions, and comments.
         */
        _system?: Element;
        /**
         * Coded form of the unit
         */
        code?: code;
        /**
         * Contains code's id, extensions, and comments.
         */
        _code?: Element;
    }
    /**
     * A fixed quantity (no comparator)
     */
    interface SimpleQuantity extends Quantity {
    }
    /**
     * Set of values bounded by low and high
     */
    interface Range extends Element {
        /**
         * Low limit
         */
        low?: Quantity;
        /**
         * High limit
         */
        high?: Quantity;
    }
    /**
     * A ratio of two Quantity values - a numerator and a denominator
     */
    interface Ratio extends Element {
        /**
         * Numerator value
         */
        numerator?: Quantity;
        /**
         * Denominator value
         */
        denominator?: Quantity;
    }
    /**
     * A series of measurements taken by a device
     */
    interface SampledData extends Element {
        /**
         * Zero value and units
         */
        origin: Quantity;
        /**
         * Number of milliseconds between samples
         */
        period: decimal;
        /**
         * Contains period's id, extensions, and comments.
         */
        _period?: Element;
        /**
         * Multiply data by this before adding to origin
         */
        factor?: decimal;
        /**
         * Contains factor's id, extensions, and comments.
         */
        _factor?: Element;
        /**
         * Lower limit of detection
         */
        lowerLimit?: decimal;
        /**
         * Contains lowerLimit's id, extensions, and comments.
         */
        _lowerLimit?: Element;
        /**
         * Upper limit of detection
         */
        upperLimit?: decimal;
        /**
         * Contains upperLimit's id, extensions, and comments.
         */
        _upperLimit?: Element;
        /**
         * Number of sample points at each time point
         */
        dimensions: positiveInt;
        /**
         * Contains dimensions's id, extensions, and comments.
         */
        _dimensions?: Element;
        /**
         * Decimal values with spaces, or "E" | "U" | "L"
         */
        data: string;
        /**
         * Contains data's id, extensions, and comments.
         */
        _data?: Element;
    }
    /**
     * An instance of a manufactured thing that is used in the provision of healthcare
     */
    interface Device extends DomainResource {
        /**
         * Instance id from manufacturer, owner, and others
         */
        identifier?: Identifier[];
        /**
         * What kind of device this is
         */
        type: CodeableConcept;
        /**
         * Device notes and comments
         */
        note?: Annotation[];
        /**
         * available | not-available | entered-in-error
         */
        status?: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * Name of device manufacturer
         */
        manufacturer?: string;
        /**
         * Contains manufacturer's id, extensions, and comments.
         */
        _manufacturer?: Element;
        /**
         * Model id assigned by the manufacturer
         */
        model?: string;
        /**
         * Contains model's id, extensions, and comments.
         */
        _model?: Element;
        /**
         * Version number (i.e. software)
         */
        version?: string;
        /**
         * Contains version's id, extensions, and comments.
         */
        _version?: Element;
        /**
         * Manufacture date
         */
        manufactureDate?: dateTime;
        /**
         * Contains manufactureDate's id, extensions, and comments.
         */
        _manufactureDate?: Element;
        /**
         * Date and time of expiry of this device (if applicable)
         */
        expiry?: dateTime;
        /**
         * Contains expiry's id, extensions, and comments.
         */
        _expiry?: Element;
        /**
         * FDA Mandated Unique Device Identifier
         */
        udi?: string;
        /**
         * Contains udi's id, extensions, and comments.
         */
        _udi?: Element;
        /**
         * Lot number of manufacture
         */
        lotNumber?: string;
        /**
         * Contains lotNumber's id, extensions, and comments.
         */
        _lotNumber?: Element;
        /**
         * Organization responsible for device
         */
        owner?: Reference;
        /**
         * Where the resource is found
         */
        location?: Reference;
        /**
         * If the resource is affixed to a person
         */
        patient?: Reference;
        /**
         * Details for human/organization for support
         */
        contact?: ContactPoint[];
        /**
         * Network address to contact device
         */
        url?: uri;
        /**
         * Contains url's id, extensions, and comments.
         */
        _url?: Element;
    }
    /**
     * A digital Signature - XML DigSig, JWT, Graphical image of signature, etc
     */
    interface Signature extends Element {
        /**
         * Indication of the reason the entity signed the object(s)
         */
        type: Coding[];
        /**
         * When the signature was created
         */
        when: instant;
        /**
         * Contains when's id, extensions, and comments.
         */
        _when?: Element;
        /**
         * Who signed the signature
         */
        whoUri?: uri;
        /**
         * Contains whoUri's id, extensions, and comments.
         */
        _whoUri?: Element;
        /**
         * Who signed the signature
         */
        whoReference?: Reference;
        /**
         * The technical format of the signature
         */
        contentType: code;
        /**
         * Contains contentType's id, extensions, and comments.
         */
        _contentType?: Element;
        /**
         * The actual signature content (XML DigSig. JWT, picture, etc)
         */
        blob: base64Binary;
        /**
         * Contains blob's id, extensions, and comments.
         */
        _blob?: Element;
    }
    /**
     * When the event is to occur
     */
    interface TimingRepeat extends Element {
        /**
         * Length/Range of lengths, or (Start and/or end) limits
         */
        boundsQuantity?: Quantity;
        /**
         * Length/Range of lengths, or (Start and/or end) limits
         */
        boundsRange?: Range;
        /**
         * Length/Range of lengths, or (Start and/or end) limits
         */
        boundsPeriod?: Period;
        /**
         * Number of times to repeat
         */
        count?: integer;
        /**
         * Contains count's id, extensions, and comments.
         */
        _count?: Element;
        /**
         * How long when it happens
         */
        duration?: decimal;
        /**
         * Contains duration's id, extensions, and comments.
         */
        _duration?: Element;
        /**
         * How long when it happens (Max)
         */
        durationMax?: decimal;
        /**
         * Contains durationMax's id, extensions, and comments.
         */
        _durationMax?: Element;
        /**
         * s | min | h | d | wk | mo | a - unit of time (UCUM)
         */
        durationUnits?: code;
        /**
         * Contains durationUnits's id, extensions, and comments.
         */
        _durationUnits?: Element;
        /**
         * Event occurs frequency times per period
         */
        frequency?: integer;
        /**
         * Contains frequency's id, extensions, and comments.
         */
        _frequency?: Element;
        /**
         * Event occurs up to frequencyMax times per period
         */
        frequencyMax?: integer;
        /**
         * Contains frequencyMax's id, extensions, and comments.
         */
        _frequencyMax?: Element;
        /**
         * Event occurs frequency times per period
         */
        period?: decimal;
        /**
         * Contains period's id, extensions, and comments.
         */
        _period?: Element;
        /**
         * Upper limit of period (3-4 hours)
         */
        periodMax?: decimal;
        /**
         * Contains periodMax's id, extensions, and comments.
         */
        _periodMax?: Element;
        /**
         * s | min | h | d | wk | mo | a - unit of time (UCUM)
         */
        periodUnits?: code;
        /**
         * Contains periodUnits's id, extensions, and comments.
         */
        _periodUnits?: Element;
        /**
         * Regular life events the event is tied to
         */
        when?: code;
        /**
         * Contains when's id, extensions, and comments.
         */
        _when?: Element;
    }
    /**
     * A length of time
     */
    interface Duration extends Quantity {
    }
    /**
     * A timing schedule that specifies an event that may occur multiple times
     */
    interface Timing extends Element {
        /**
         * When the event occurs
         */
        event?: dateTime[];
        /**
         * Contains event's id, extensions, and comments.
         */
        _event?: Element[];
        /**
         * When the event is to occur
         */
        repeat?: TimingRepeat;
        /**
         * QD | QOD | Q4H | Q6H | BID | TID | QID | AM | PM +
         */
        code?: CodeableConcept;
    }
    interface Extension extends Element {
        /**
         * identifies the meaning of the extension
         */
        url: uri;
        /**
         * Contains url's id, extensions, and comments.
         */
        _url?: Element;
        /**
         * Value of extension
         */
        valueBoolean?: boolean;
        /**
         * Contains valueBoolean's id, extensions, and comments.
         */
        _valueBoolean?: Element;
        /**
         * Value of extension
         */
        valueInteger?: integer;
        /**
         * Contains valueInteger's id, extensions, and comments.
         */
        _valueInteger?: Element;
        /**
         * Value of extension
         */
        valueDecimal?: decimal;
        /**
         * Contains valueDecimal's id, extensions, and comments.
         */
        _valueDecimal?: Element;
        /**
         * Value of extension
         */
        valueBase64Binary?: base64Binary;
        /**
         * Contains valueBase64Binary's id, extensions, and comments.
         */
        _valueBase64Binary?: Element;
        /**
         * Value of extension
         */
        valueInstant?: instant;
        /**
         * Contains valueInstant's id, extensions, and comments.
         */
        _valueInstant?: Element;
        /**
         * Value of extension
         */
        valueString?: string;
        /**
         * Contains valueString's id, extensions, and comments.
         */
        _valueString?: Element;
        /**
         * Value of extension
         */
        valueUri?: uri;
        /**
         * Contains valueUri's id, extensions, and comments.
         */
        _valueUri?: Element;
        /**
         * Value of extension
         */
        valueDate?: date;
        /**
         * Contains valueDate's id, extensions, and comments.
         */
        _valueDate?: Element;
        /**
         * Value of extension
         */
        valueDateTime?: dateTime;
        /**
         * Contains valueDateTime's id, extensions, and comments.
         */
        _valueDateTime?: Element;
        /**
         * Value of extension
         */
        valueTime?: time;
        /**
         * Contains valueTime's id, extensions, and comments.
         */
        _valueTime?: Element;
        /**
         * Value of extension
         */
        valueCode?: code;
        /**
         * Contains valueCode's id, extensions, and comments.
         */
        _valueCode?: Element;
        /**
         * Value of extension
         */
        valueOid?: oid;
        /**
         * Contains valueOid's id, extensions, and comments.
         */
        _valueOid?: Element;
        /**
         * Value of extension
         */
        valueId?: id;
        /**
         * Contains valueId's id, extensions, and comments.
         */
        _valueId?: Element;
        /**
         * Value of extension
         */
        valueUnsignedInt?: unsignedInt;
        /**
         * Contains valueUnsignedInt's id, extensions, and comments.
         */
        _valueUnsignedInt?: Element;
        /**
         * Value of extension
         */
        valuePositiveInt?: positiveInt;
        /**
         * Contains valuePositiveInt's id, extensions, and comments.
         */
        _valuePositiveInt?: Element;
        /**
         * Value of extension
         */
        valueMarkdown?: markdown;
        /**
         * Contains valueMarkdown's id, extensions, and comments.
         */
        _valueMarkdown?: Element;
        /**
         * Value of extension
         */
        valueAnnotation?: Annotation;
        /**
         * Value of extension
         */
        valueAttachment?: Attachment;
        /**
         * Value of extension
         */
        valueIdentifier?: Identifier;
        /**
         * Value of extension
         */
        valueCodeableConcept?: CodeableConcept;
        /**
         * Value of extension
         */
        valueCoding?: Coding;
        /**
         * Value of extension
         */
        valueQuantity?: Quantity;
        /**
         * Value of extension
         */
        valueRange?: Range;
        /**
         * Value of extension
         */
        valuePeriod?: Period;
        /**
         * Value of extension
         */
        valueRatio?: Ratio;
        /**
         * Value of extension
         */
        valueSampledData?: SampledData;
        /**
         * Value of extension
         */
        valueSignature?: Signature;
        /**
         * Value of extension
         */
        valueHumanName?: HumanName;
        /**
         * Value of extension
         */
        valueAddress?: Address;
        /**
         * Value of extension
         */
        valueContactPoint?: ContactPoint;
        /**
         * Value of extension
         */
        valueTiming?: Timing;
        /**
         * Value of extension
         */
        valueReference?: Reference;
        /**
         * Value of extension
         */
        valueMeta?: Meta;
    }
    /**
     * Base for all elements
     */
    interface Element {
        /**
         * Content that would be comments in an XML.
         */
        fhir_comments?: string[];
        /**
         * Contains fhir_comments's id, extensions, and comments.
         */
        _fhir_comments?: Element[];
        /**
         * xml:id (or equivalent in JSON)
         */
        id?: id;
        /**
         * Contains id's id, extensions, and comments.
         */
        _id?: Element;
        /**
         * Additional Content defined by implementations
         */
        extension?: Extension[];
    }
    /**
     * Metadata about a resource
     */
    interface Meta extends Element {
        /**
         * Version specific identifier
         */
        versionId?: id;
        /**
         * Contains versionId's id, extensions, and comments.
         */
        _versionId?: Element;
        /**
         * When the resource version last changed
         */
        lastUpdated?: instant;
        /**
         * Contains lastUpdated's id, extensions, and comments.
         */
        _lastUpdated?: Element;
        /**
         * Profiles this resource claims to conform to
         */
        profile?: uri[];
        /**
         * Contains profile's id, extensions, and comments.
         */
        _profile?: Element[];
        /**
         * Security Labels applied to this resource
         */
        security?: Coding[];
        /**
         * Tags applied
         */
        tag?: Coding[];
    }
    /**
     * Base Resource
     */
    interface ResourceBase {
        /**
         * The type of the resource.
         */
        resourceType?: code;
        /**
         * Contains resourceType's id, extensions, and comments.
         */
        _resourceType?: Element;
        /**
         * Logical id of this artifact
         */
        id?: id;
        /**
         * Contains id's id, extensions, and comments.
         */
        _id?: Element;
        /**
         * Metadata about the resource
         */
        meta?: Meta;
        /**
         * A set of rules under which this content was created
         */
        implicitRules?: uri;
        /**
         * Contains implicitRules's id, extensions, and comments.
         */
        _implicitRules?: Element;
        /**
         * Language of the resource content
         */
        language?: code;
        /**
         * Contains language's id, extensions, and comments.
         */
        _language?: Element;
    }
    /**
     * A human-readable formatted text, including images
     */
    interface Narrative extends Element {
        /**
         * generated | extensions | additional | empty
         */
        status: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * Limited xhtml content
         */
        div: string;
        /**
         * Contains div's id, extensions, and comments.
         */
        _div?: Element;
    }
    /**
     * A resource with narrative, extensions, and contained resources
     */
    interface DomainResource extends ResourceBase {
        /**
         * Text summary of the resource, for human interpretation
         */
        text?: Narrative;
        /**
         * Contained, inline Resources
         */
        contained?: Resource[];
        /**
         * Additional Content defined by implementations
         */
        extension?: Extension[];
        /**
         * Extensions that cannot be ignored
         */
        modifierExtension?: Extension[];
    }
    /**
     * An amount of money. With regard to precision, see [Decimal Precision](datatypes.html#precision)
     */
    interface Money extends Quantity {
    }
    interface Account extends DomainResource {
        /**
         * Account number
         */
        identifier?: Identifier[];
        /**
         * Human-readable label
         */
        name?: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * E.g. patient, expense, depreciation
         */
        type?: CodeableConcept;
        /**
         * active | inactive
         */
        status?: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * Valid from..to
         */
        activePeriod?: Period;
        /**
         * Base currency in which balance is tracked
         */
        currency?: Coding;
        /**
         * How much is in account?
         */
        balance?: Quantity;
        /**
         * Transaction window
         */
        coveragePeriod?: Period;
        /**
         * What is account tied to?
         */
        subject?: Reference;
        /**
         * Who is responsible?
         */
        owner?: Reference;
        /**
         * Explanation of purpose/use
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
    }
    /**
     * Adverse Reaction Events linked to exposure to substance
     */
    interface AllergyIntoleranceReaction extends Element {
        /**
         * Specific substance considered to be responsible for event
         */
        substance?: CodeableConcept;
        /**
         * unlikely | likely | confirmed - clinical certainty about the specific substance
         */
        certainty?: code;
        /**
         * Contains certainty's id, extensions, and comments.
         */
        _certainty?: Element;
        /**
         * Clinical symptoms/signs associated with the Event
         */
        manifestation: CodeableConcept[];
        /**
         * Description of the event as a whole
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * Date(/time) when manifestations showed
         */
        onset?: dateTime;
        /**
         * Contains onset's id, extensions, and comments.
         */
        _onset?: Element;
        /**
         * mild | moderate | severe (of event as a whole)
         */
        severity?: code;
        /**
         * Contains severity's id, extensions, and comments.
         */
        _severity?: Element;
        /**
         * How the subject was exposed to the substance
         */
        exposureRoute?: CodeableConcept;
        /**
         * Text about event not captured in other fields
         */
        note?: Annotation;
    }
    /**
     * Allergy or Intolerance (generally: Risk Of Adverse reaction to a substance)
     */
    interface AllergyIntolerance extends DomainResource {
        /**
         * External Ids for this item
         */
        identifier?: Identifier[];
        /**
         * Date(/time) when manifestations showed
         */
        onset?: dateTime;
        /**
         * Contains onset's id, extensions, and comments.
         */
        _onset?: Element;
        /**
         * When recorded
         */
        recordedDate?: dateTime;
        /**
         * Contains recordedDate's id, extensions, and comments.
         */
        _recordedDate?: Element;
        /**
         * Who recorded the sensitivity
         */
        recorder?: Reference;
        /**
         * Who the sensitivity is for
         */
        patient: Reference;
        /**
         * Source of the information about the allergy
         */
        reporter?: Reference;
        /**
         * Substance, (or class) considered to be responsible for risk
         */
        substance: CodeableConcept;
        /**
         * active | unconfirmed | confirmed | inactive | resolved | refuted | entered-in-error
         */
        status?: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * CRITL | CRITH | CRITU
         */
        criticality?: code;
        /**
         * Contains criticality's id, extensions, and comments.
         */
        _criticality?: Element;
        /**
         * allergy | intolerance - Underlying mechanism (if known)
         */
        type?: code;
        /**
         * Contains type's id, extensions, and comments.
         */
        _type?: Element;
        /**
         * food | medication | environment | other - Category of Substance
         */
        category?: code;
        /**
         * Contains category's id, extensions, and comments.
         */
        _category?: Element;
        /**
         * Date(/time) of last known occurence of a reaction
         */
        lastOccurence?: dateTime;
        /**
         * Contains lastOccurence's id, extensions, and comments.
         */
        _lastOccurence?: Element;
        /**
         * Additional text not captured in other fields
         */
        note?: Annotation;
        /**
         * Adverse Reaction Events linked to exposure to substance
         */
        reaction?: AllergyIntoleranceReaction[];
    }
    /**
     * A container for slot(s) of time that may be available for booking appointments
     */
    interface Schedule extends DomainResource {
        /**
         * External Ids for this item
         */
        identifier?: Identifier[];
        /**
         * The schedule type can be used for the categorization of healthcare services or other appointment types
         */
        type?: CodeableConcept[];
        /**
         * The resource this Schedule resource is providing availability information for. These are expected to usually be one of HealthcareService, Location, Practitioner, Device, Patient or RelatedPerson
         */
        actor: Reference;
        /**
         * The period of time that the slots that are attached to this Schedule resource cover (even if none exist). These  cover the amount of time that an organization's planning horizon; the interval for which they are currently accepting appointments. This does not define a "template" for planning outside these dates
         */
        planningHorizon?: Period;
        /**
         * Comments on the availability to describe any extended information. Such as custom constraints on the slot(s) that may be associated
         */
        comment?: string;
        /**
         * Contains comment's id, extensions, and comments.
         */
        _comment?: Element;
    }
    /**
     * A slot of time on a schedule that may be available for booking appointments
     */
    interface Slot extends DomainResource {
        /**
         * External Ids for this item
         */
        identifier?: Identifier[];
        /**
         * The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the availability resource
         */
        type?: CodeableConcept;
        /**
         * The schedule resource that this slot defines an interval of status information
         */
        schedule: Reference;
        /**
         * busy | free | busy-unavailable | busy-tentative
         */
        freeBusyType: code;
        /**
         * Contains freeBusyType's id, extensions, and comments.
         */
        _freeBusyType?: Element;
        /**
         * Date/Time that the slot is to begin
         */
        start: instant;
        /**
         * Contains start's id, extensions, and comments.
         */
        _start?: Element;
        /**
         * Date/Time that the slot is to conclude
         */
        end: instant;
        /**
         * Contains end's id, extensions, and comments.
         */
        _end?: Element;
        /**
         * This slot has already been overbooked, appointments are unlikely to be accepted for this time
         */
        overbooked?: boolean;
        /**
         * Contains overbooked's id, extensions, and comments.
         */
        _overbooked?: Element;
        /**
         * Comments on the slot to describe any extended information. Such as custom constraints on the slot
         */
        comment?: string;
        /**
         * Contains comment's id, extensions, and comments.
         */
        _comment?: Element;
    }
    /**
     * List of participants involved in the appointment
     */
    interface AppointmentParticipant extends Element {
        /**
         * Role of participant in the appointment
         */
        type?: CodeableConcept[];
        /**
         * A Person, Location/HealthcareService or Device that is participating in the appointment
         */
        actor?: Reference;
        /**
         * required | optional | information-only
         */
        required?: code;
        /**
         * Contains required's id, extensions, and comments.
         */
        _required?: Element;
        /**
         * accepted | declined | tentative | needs-action
         */
        status: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
    }
    /**
     * A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s)
     */
    interface Appointment extends DomainResource {
        /**
         * External Ids for this item
         */
        identifier?: Identifier[];
        /**
         * proposed | pending | booked | arrived | fulfilled | cancelled | noshow
         */
        status: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * The type of appointment that is being booked
         */
        type?: CodeableConcept;
        /**
         * The reason that this appointment is being scheduled, this is more clinical than administrative
         */
        reason?: CodeableConcept;
        /**
         * The priority of the appointment. Can be used to make informed decisions if needing to re-prioritize appointments. (The iCal Standard specifies 0 as undefined, 1 as highest, 9 as lowest priority)
         */
        priority?: unsignedInt;
        /**
         * Contains priority's id, extensions, and comments.
         */
        _priority?: Element;
        /**
         * The brief description of the appointment as would be shown on a subject line in a meeting request, or appointment list. Detailed or expanded information should be put in the comment field
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * Date/Time that the appointment is to take place
         */
        start?: instant;
        /**
         * Contains start's id, extensions, and comments.
         */
        _start?: Element;
        /**
         * Date/Time that the appointment is to conclude
         */
        end?: instant;
        /**
         * Contains end's id, extensions, and comments.
         */
        _end?: Element;
        /**
         * Number of minutes that the appointment is to take. This can be less than the duration between the start and end times (where actual time of appointment is only an estimate or is a planned appointment request)
         */
        minutesDuration?: positiveInt;
        /**
         * Contains minutesDuration's id, extensions, and comments.
         */
        _minutesDuration?: Element;
        /**
         * The slot that this appointment is filling. If provided then the schedule will not be provided as slots are not recursive, and the start/end values MUST be the same as from the slot
         */
        slot?: Reference[];
        /**
         * Additional comments about the appointment
         */
        comment?: string;
        /**
         * Contains comment's id, extensions, and comments.
         */
        _comment?: Element;
        /**
         * List of participants involved in the appointment
         */
        participant: AppointmentParticipant[];
    }
    /**
     * A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection
     */
    interface AppointmentResponse extends DomainResource {
        /**
         * External Ids for this item
         */
        identifier?: Identifier[];
        /**
         * Parent appointment that this response is replying to
         */
        appointment: Reference;
        /**
         * Date/Time that the appointment is to take place, or requested new start time
         */
        start?: instant;
        /**
         * Contains start's id, extensions, and comments.
         */
        _start?: Element;
        /**
         * Date/Time that the appointment is to conclude, or requested new end time
         */
        end?: instant;
        /**
         * Contains end's id, extensions, and comments.
         */
        _end?: Element;
        /**
         * Role of participant in the appointment
         */
        participantType?: CodeableConcept[];
        /**
         * A Person, Location/HealthcareService or Device that is participating in the appointment
         */
        actor?: Reference;
        /**
         * accepted | declined | tentative | in-process | completed | needs-action
         */
        participantStatus: code;
        /**
         * Contains participantStatus's id, extensions, and comments.
         */
        _participantStatus?: Element;
        /**
         * Additional comments about the appointment
         */
        comment?: string;
        /**
         * Contains comment's id, extensions, and comments.
         */
        _comment?: Element;
    }
    /**
     * What was done
     */
    interface AuditEventEvent extends Element {
        /**
         * Type/identifier of event
         */
        type: Coding;
        /**
         * More specific type/id for the event
         */
        subtype?: Coding[];
        /**
         * Type of action performed during the event
         */
        action?: code;
        /**
         * Contains action's id, extensions, and comments.
         */
        _action?: Element;
        /**
         * Time when the event occurred on source
         */
        dateTime: instant;
        /**
         * Contains dateTime's id, extensions, and comments.
         */
        _dateTime?: Element;
        /**
         * Whether the event succeeded or failed
         */
        outcome?: code;
        /**
         * Contains outcome's id, extensions, and comments.
         */
        _outcome?: Element;
        /**
         * Description of the event outcome
         */
        outcomeDesc?: string;
        /**
         * Contains outcomeDesc's id, extensions, and comments.
         */
        _outcomeDesc?: Element;
        /**
         * The purposeOfUse of the event
         */
        purposeOfEvent?: Coding[];
    }
    /**
     * A person, a hardware device or software process
     */
    interface AuditEventParticipant extends Element {
        /**
         * User roles (e.g. local RBAC codes)
         */
        role?: CodeableConcept[];
        /**
         * Direct reference to resource
         */
        reference?: Reference;
        /**
         * Unique identifier for the user
         */
        userId?: Identifier;
        /**
         * Alternative User id e.g. authentication
         */
        altId?: string;
        /**
         * Contains altId's id, extensions, and comments.
         */
        _altId?: Element;
        /**
         * Human-meaningful name for the user
         */
        name?: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * Whether user is initiator
         */
        requestor: boolean;
        /**
         * Contains requestor's id, extensions, and comments.
         */
        _requestor?: Element;
        /**
         * Where
         */
        location?: Reference;
        /**
         * Policy that authorized event
         */
        policy?: uri[];
        /**
         * Contains policy's id, extensions, and comments.
         */
        _policy?: Element[];
        /**
         * Type of media
         */
        media?: Coding;
        /**
         * Logical network location for application activity
         */
        network?: AuditEventParticipantNetwork;
        /**
         * Reason given for this user
         */
        purposeOfUse?: Coding[];
    }
    /**
     * Logical network location for application activity
     */
    interface AuditEventParticipantNetwork extends Element {
        /**
         * Identifier for the network access point of the user device
         */
        address?: string;
        /**
         * Contains address's id, extensions, and comments.
         */
        _address?: Element;
        /**
         * The type of network access point
         */
        type?: code;
        /**
         * Contains type's id, extensions, and comments.
         */
        _type?: Element;
    }
    /**
     * Application systems and processes
     */
    interface AuditEventSource extends Element {
        /**
         * Logical source location within the enterprise
         */
        site?: string;
        /**
         * Contains site's id, extensions, and comments.
         */
        _site?: Element;
        /**
         * The identity of source detecting the event
         */
        identifier: Identifier;
        /**
         * The type of source where event originated
         */
        type?: Coding[];
    }
    /**
     * Specific instances of data or objects that have been accessed
     */
    interface AuditEventObject extends Element {
        /**
         * Specific instance of object (e.g. versioned)
         */
        identifier?: Identifier;
        /**
         * Specific instance of resource (e.g. versioned)
         */
        reference?: Reference;
        /**
         * Type of object involved
         */
        type?: Coding;
        /**
         * What role the Object played
         */
        role?: Coding;
        /**
         * Life-cycle stage for the object
         */
        lifecycle?: Coding;
        /**
         * Security labels applied to the object
         */
        securityLabel?: Coding[];
        /**
         * Instance-specific descriptor for Object
         */
        name?: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * Descriptive text
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * Actual query for object
         */
        query?: base64Binary;
        /**
         * Contains query's id, extensions, and comments.
         */
        _query?: Element;
        /**
         * Additional Information about the Object
         */
        detail?: AuditEventObjectDetail[];
    }
    /**
     * Additional Information about the Object
     */
    interface AuditEventObjectDetail extends Element {
        /**
         * Name of the property
         */
        type: string;
        /**
         * Contains type's id, extensions, and comments.
         */
        _type?: Element;
        /**
         * Property value
         */
        value: base64Binary;
        /**
         * Contains value's id, extensions, and comments.
         */
        _value?: Element;
    }
    /**
     * Event record kept for security purposes
     */
    interface AuditEvent extends DomainResource {
        /**
         * What was done
         */
        event: AuditEventEvent;
        /**
         * A person, a hardware device or software process
         */
        participant: AuditEventParticipant[];
        /**
         * Application systems and processes
         */
        source: AuditEventSource;
        /**
         * Specific instances of data or objects that have been accessed
         */
        object?: AuditEventObject[];
    }
    /**
     * Resource for non-supported content
     */
    interface Basic extends DomainResource {
        /**
         * Business identifier
         */
        identifier?: Identifier[];
        /**
         * Kind of Resource
         */
        code: CodeableConcept;
        /**
         * Identifies the focus of this resource
         */
        subject?: Reference;
        /**
         * Who created
         */
        author?: Reference;
        /**
         * When created
         */
        created?: date;
        /**
         * Contains created's id, extensions, and comments.
         */
        _created?: Element;
    }
    /**
     * Pure binary content defined by sime other format than FHIR
     */
    interface Binary extends ResourceBase {
        /**
         * MimeType of the binary content
         */
        contentType: code;
        /**
         * Contains contentType's id, extensions, and comments.
         */
        _contentType?: Element;
        /**
         * The actual content
         */
        content: base64Binary;
        /**
         * Contains content's id, extensions, and comments.
         */
        _content?: Element;
    }
    /**
     * Specific and identified anatomical location
     */
    interface BodySite extends DomainResource {
        /**
         * Patient
         */
        patient: Reference;
        /**
         * Bodysite identifier
         */
        identifier?: Identifier[];
        /**
         * Named anatomical location
         */
        code?: CodeableConcept;
        /**
         * Modification to location code
         */
        modifier?: CodeableConcept[];
        /**
         * The Description of anatomical location
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * Attached images
         */
        image?: Attachment[];
    }
    /**
     * Links related to this Bundle
     */
    interface BundleLink extends Element {
        /**
         * http://www.iana.org/assignments/link-relations/link-relations.xhtml
         */
        relation: string;
        /**
         * Contains relation's id, extensions, and comments.
         */
        _relation?: Element;
        /**
         * Reference details for the link
         */
        url: uri;
        /**
         * Contains url's id, extensions, and comments.
         */
        _url?: Element;
    }
    /**
     * Entry in the bundle - will have a resource, or information
     */
    interface BundleEntry extends Element {
        /**
         * Links related to this entry
         */
        link?: BundleLink[];
        /**
         * Absolute URL for resource (server address, or UUID/OID)
         */
        fullUrl?: uri;
        /**
         * Contains fullUrl's id, extensions, and comments.
         */
        _fullUrl?: Element;
        /**
         * A resource in the bundle
         */
        resource?: Resource;
        /**
         * Search related information
         */
        search?: BundleEntrySearch;
        /**
         * Transaction Related Information
         */
        request?: BundleEntryRequest;
        /**
         * Transaction Related Information
         */
        response?: BundleEntryResponse;
    }
    /**
     * Search related information
     */
    interface BundleEntrySearch extends Element {
        /**
         * match | include | outcome - why this is in the result set
         */
        mode?: code;
        /**
         * Contains mode's id, extensions, and comments.
         */
        _mode?: Element;
        /**
         * Search ranking (between 0 and 1)
         */
        score?: decimal;
        /**
         * Contains score's id, extensions, and comments.
         */
        _score?: Element;
    }
    /**
     * Transaction Related Information
     */
    interface BundleEntryRequest extends Element {
        /**
         * GET | POST | PUT | DELETE
         */
        method: code;
        /**
         * Contains method's id, extensions, and comments.
         */
        _method?: Element;
        /**
         * URL for HTTP equivalent of this entry
         */
        url: uri;
        /**
         * Contains url's id, extensions, and comments.
         */
        _url?: Element;
        /**
         * For managing cache currency
         */
        ifNoneMatch?: string;
        /**
         * Contains ifNoneMatch's id, extensions, and comments.
         */
        _ifNoneMatch?: Element;
        /**
         * For managing update contention
         */
        ifModifiedSince?: instant;
        /**
         * Contains ifModifiedSince's id, extensions, and comments.
         */
        _ifModifiedSince?: Element;
        /**
         * For managing update contention
         */
        ifMatch?: string;
        /**
         * Contains ifMatch's id, extensions, and comments.
         */
        _ifMatch?: Element;
        /**
         * For conditional creates
         */
        ifNoneExist?: string;
        /**
         * Contains ifNoneExist's id, extensions, and comments.
         */
        _ifNoneExist?: Element;
    }
    /**
     * Transaction Related Information
     */
    interface BundleEntryResponse extends Element {
        /**
         * Status return code for entry
         */
        status: string;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * The location, if the operation returns a location
         */
        location?: uri;
        /**
         * Contains location's id, extensions, and comments.
         */
        _location?: Element;
        /**
         * The etag for the resource (if relevant)
         */
        etag?: string;
        /**
         * Contains etag's id, extensions, and comments.
         */
        _etag?: Element;
        /**
         * Server's date time modified
         */
        lastModified?: instant;
        /**
         * Contains lastModified's id, extensions, and comments.
         */
        _lastModified?: Element;
    }
    /**
     * Contains a collection of resources
     */
    interface Bundle extends ResourceBase {
        /**
         * document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection
         */
        type: code;
        /**
         * Contains type's id, extensions, and comments.
         */
        _type?: Element;
        /**
         * If search, the total number of matches
         */
        total?: unsignedInt;
        /**
         * Contains total's id, extensions, and comments.
         */
        _total?: Element;
        /**
         * Links related to this Bundle
         */
        link?: BundleLink[];
        /**
         * Entry in the bundle - will have a resource, or information
         */
        entry?: BundleEntry[];
        /**
         * Digital Signature
         */
        signature?: Signature;
    }
    /**
     * Trait of group members
     */
    interface GroupCharacteristic extends Element {
        /**
         * Kind of characteristic
         */
        code: CodeableConcept;
        /**
         * Value held by characteristic
         */
        valueCodeableConcept?: CodeableConcept;
        /**
         * Value held by characteristic
         */
        valueBoolean?: boolean;
        /**
         * Contains valueBoolean's id, extensions, and comments.
         */
        _valueBoolean?: Element;
        /**
         * Value held by characteristic
         */
        valueQuantity?: Quantity;
        /**
         * Value held by characteristic
         */
        valueRange?: Range;
        /**
         * Group includes or excludes
         */
        exclude: boolean;
        /**
         * Contains exclude's id, extensions, and comments.
         */
        _exclude?: Element;
        /**
         * Period over which characteristic is tested
         */
        period?: Period;
    }
    /**
     * Who or what is in group
     */
    interface GroupMember extends Element {
        /**
         * Reference to the group member
         */
        entity: Reference;
        /**
         * Period member belonged to the group
         */
        period?: Period;
        /**
         * If member is no longer in group
         */
        inactive?: boolean;
        /**
         * Contains inactive's id, extensions, and comments.
         */
        _inactive?: Element;
    }
    /**
     * Administrable medication details
     */
    interface MedicationProduct extends Element {
        /**
         * powder | tablets | carton +
         */
        form?: CodeableConcept;
        /**
         * Active or inactive ingredient
         */
        ingredient?: MedicationProductIngredient[];
        batch?: MedicationProductBatch[];
    }
    /**
     * Active or inactive ingredient
     */
    interface MedicationProductIngredient extends Element {
        /**
         * The product contained
         */
        item: Reference;
        /**
         * How much ingredient in product
         */
        amount?: Ratio;
    }
    /**
     * If this describes a specific package/container of the substance
     */
    interface SubstanceInstance extends Element {
        /**
         * Identifier of the package/container
         */
        identifier?: Identifier;
        /**
         * When no longer valid to use
         */
        expiry?: dateTime;
        /**
         * Contains expiry's id, extensions, and comments.
         */
        _expiry?: Element;
        /**
         * Amount of substance in the package
         */
        quantity?: Quantity;
    }
    /**
     * Composition information about the substance
     */
    interface SubstanceIngredient extends Element {
        /**
         * Optional amount (concentration)
         */
        quantity?: Ratio;
        /**
         * A component of the substance
         */
        substance: Reference;
    }
    /**
     * A homogeneous material with a definite composition
     */
    interface Substance extends DomainResource {
        /**
         * Unique identifier
         */
        identifier?: Identifier[];
        /**
         * What class/type of substance this is
         */
        category?: CodeableConcept[];
        /**
         * What substance this is
         */
        code: CodeableConcept;
        /**
         * Textual description of the substance, comments
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * If this describes a specific package/container of the substance
         */
        instance?: SubstanceInstance[];
        /**
         * Composition information about the substance
         */
        ingredient?: SubstanceIngredient[];
    }
    interface MedicationProductBatch extends Element {
        lotNumber?: string;
        /**
         * Contains lotNumber's id, extensions, and comments.
         */
        _lotNumber?: Element;
        expirationDate?: dateTime;
        /**
         * Contains expirationDate's id, extensions, and comments.
         */
        _expirationDate?: Element;
    }
    /**
     * Details about packaged medications
     */
    interface MedicationPackage extends Element {
        /**
         * E.g. box, vial, blister-pack
         */
        container?: CodeableConcept;
        /**
         * What is  in the package?
         */
        content?: MedicationPackageContent[];
    }
    /**
     * What is  in the package?
     */
    interface MedicationPackageContent extends Element {
        /**
         * A product in the package
         */
        item: Reference;
        /**
         * How many are in the package?
         */
        amount?: Quantity;
    }
    /**
     * Definition of a Medication
     */
    interface Medication extends DomainResource {
        /**
         * Codes that identify this medication
         */
        code?: CodeableConcept;
        /**
         * True if a brand
         */
        isBrand?: boolean;
        /**
         * Contains isBrand's id, extensions, and comments.
         */
        _isBrand?: Element;
        /**
         * Manufacturer of the item
         */
        manufacturer?: Reference;
        /**
         * Administrable medication details
         */
        product?: MedicationProduct;
        /**
         * Details about packaged medications
         */
        package?: MedicationPackage;
    }
    /**
     * Group of multiple entities
     */
    interface Group extends DomainResource {
        /**
         * Unique id
         */
        identifier?: Identifier[];
        /**
         * person | animal | practitioner | device | medication | substance
         */
        type: code;
        /**
         * Contains type's id, extensions, and comments.
         */
        _type?: Element;
        /**
         * Descriptive or actual
         */
        actual: boolean;
        /**
         * Contains actual's id, extensions, and comments.
         */
        _actual?: Element;
        /**
         * Kind of Group members
         */
        code?: CodeableConcept;
        /**
         * Label for Group
         */
        name?: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * Number of members
         */
        quantity?: unsignedInt;
        /**
         * Contains quantity's id, extensions, and comments.
         */
        _quantity?: Element;
        /**
         * Trait of group members
         */
        characteristic?: GroupCharacteristic[];
        /**
         * Who or what is in group
         */
        member?: GroupMember[];
    }
    /**
     * List of Encounter statuses
     */
    interface EncounterStatusHistory extends Element {
        /**
         * planned | arrived | in-progress | onleave | finished | cancelled
         */
        status: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * The time that the episode was in the specified status
         */
        period: Period;
    }
    /**
     * The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource)
     */
    interface EpisodeOfCareStatusHistory extends Element {
        /**
         * planned | waitlist | active | onhold | finished | cancelled
         */
        status: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * The period during this EpisodeOfCare that the specific status applied
         */
        period: Period;
    }
    /**
     * A duration (length of time) with a UCUM code
     */
    interface Age extends Quantity {
    }
    /**
     * Stage/grade, usually assessed formally
     */
    interface ConditionStage extends Element {
        /**
         * Simple summary (disease specific)
         */
        summary?: CodeableConcept;
        /**
         * Formal record of assessment
         */
        assessment?: Reference[];
    }
    /**
     * One or more sets of investigations (signs, symptions, etc)
     */
    interface ClinicalImpressionInvestigations extends Element {
        /**
         * A name/code for the set
         */
        code: CodeableConcept;
        /**
         * Record of a specific investigation
         */
        item?: Reference[];
    }
    /**
     * Collection details
     */
    interface SpecimenCollection extends Element {
        /**
         * Who collected the specimen
         */
        collector?: Reference;
        /**
         * Collector comments
         */
        comment?: string[];
        /**
         * Contains comment's id, extensions, and comments.
         */
        _comment?: Element[];
        /**
         * Collection time
         */
        collectedDateTime?: dateTime;
        /**
         * Contains collectedDateTime's id, extensions, and comments.
         */
        _collectedDateTime?: Element;
        /**
         * Collection time
         */
        collectedPeriod?: Period;
        /**
         * The quantity of specimen collected
         */
        quantity?: Quantity;
        /**
         * Technique used to perform collection
         */
        method?: CodeableConcept;
        /**
         * Anatomical collection site
         */
        bodySite?: CodeableConcept;
    }
    /**
     * Treatment and processing step details
     */
    interface SpecimenTreatment extends Element {
        /**
         * Textual description of procedure
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * Indicates the treatment or processing step  applied to the specimen
         */
        procedure?: CodeableConcept;
        /**
         * Material used in the processing step
         */
        additive?: Reference[];
    }
    /**
     * Direct container of specimen (tube/slide, etc)
     */
    interface SpecimenContainer extends Element {
        /**
         * Id for the container
         */
        identifier?: Identifier[];
        /**
         * Textual description of the container
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * Kind of container directly associated with specimen
         */
        type?: CodeableConcept;
        /**
         * Container volume or size
         */
        capacity?: Quantity;
        /**
         * Quantity of specimen within container
         */
        specimenQuantity?: Quantity;
        /**
         * Additive associated with container
         */
        additiveCodeableConcept?: CodeableConcept;
        /**
         * Additive associated with container
         */
        additiveReference?: Reference;
    }
    /**
     * Sample for analysis
     */
    interface Specimen extends DomainResource {
        /**
         * External Identifier
         */
        identifier?: Identifier[];
        /**
         * available | unavailable | unsatisfactory | entered-in-error
         */
        status?: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * Kind of material that forms the specimen
         */
        type?: CodeableConcept;
        /**
         * Specimen from which this specimen originated
         */
        parent?: Reference[];
        /**
         * Where the specimen came from. This may be from the patient(s) or from the environment or a device
         */
        subject: Reference;
        /**
         * Identifier assigned by the lab
         */
        accessionIdentifier?: Identifier;
        /**
         * The time when specimen was received for processing
         */
        receivedTime?: dateTime;
        /**
         * Contains receivedTime's id, extensions, and comments.
         */
        _receivedTime?: Element;
        /**
         * Collection details
         */
        collection?: SpecimenCollection;
        /**
         * Treatment and processing step details
         */
        treatment?: SpecimenTreatment[];
        /**
         * Direct container of specimen (tube/slide, etc)
         */
        container?: SpecimenContainer[];
    }
    /**
     * Production specification of the component
     */
    interface DeviceComponentProductionSpecification extends Element {
        /**
         * Specification type
         */
        specType?: CodeableConcept;
        /**
         * Internal component unique identification
         */
        componentId?: Identifier;
        /**
         * A printable string defining the component
         */
        productionSpec?: string;
        /**
         * Contains productionSpec's id, extensions, and comments.
         */
        _productionSpec?: Element;
    }
    /**
     * An instance of a medical-related component of a medical device
     */
    interface DeviceComponent extends DomainResource {
        /**
         * What kind of component it is
         */
        type: CodeableConcept;
        /**
         * Instance id assigned by the software stack
         */
        identifier: Identifier;
        /**
         * Recent system change timestamp
         */
        lastSystemChange: instant;
        /**
         * Contains lastSystemChange's id, extensions, and comments.
         */
        _lastSystemChange?: Element;
        /**
         * A source device of this component
         */
        source?: Reference;
        /**
         * Parent resource link
         */
        parent?: Reference;
        /**
         * Component operational status
         */
        operationalStatus?: CodeableConcept[];
        /**
         * Current supported parameter group
         */
        parameterGroup?: CodeableConcept;
        /**
         * other | chemical | electrical | impedance | nuclear | optical | thermal | biological | mechanical | acoustical | manual+
         */
        measurementPrinciple?: code;
        /**
         * Contains measurementPrinciple's id, extensions, and comments.
         */
        _measurementPrinciple?: Element;
        /**
         * Production specification of the component
         */
        productionSpecification?: DeviceComponentProductionSpecification[];
        /**
         * Language code for the human-readable text strings produced by the device
         */
        languageCode?: CodeableConcept;
    }
    /**
     * Describes the calibrations that have been performed or that are required to be performed
     */
    interface DeviceMetricCalibration extends Element {
        /**
         * unspecified | offset | gain | two-point
         */
        type?: code;
        /**
         * Contains type's id, extensions, and comments.
         */
        _type?: Element;
        /**
         * not-calibrated | calibration-required | calibrated | unspecified
         */
        state?: code;
        /**
         * Contains state's id, extensions, and comments.
         */
        _state?: Element;
        /**
         * Describes the time last calibration has been performed
         */
        time?: instant;
        /**
         * Contains time's id, extensions, and comments.
         */
        _time?: Element;
    }
    /**
     * Measurement, calculation or setting capability of a medical device
     */
    interface DeviceMetric extends DomainResource {
        /**
         * Type of metric
         */
        type: CodeableConcept;
        /**
         * Unique identifier of this DeviceMetric
         */
        identifier: Identifier;
        /**
         * Unit of metric
         */
        unit?: CodeableConcept;
        /**
         * Describes the link to the source Device
         */
        source?: Reference;
        /**
         * Describes the link to the parent DeviceComponent
         */
        parent?: Reference;
        /**
         * on | off | standby
         */
        operationalStatus?: code;
        /**
         * Contains operationalStatus's id, extensions, and comments.
         */
        _operationalStatus?: Element;
        /**
         * black | red | green | yellow | blue | magenta | cyan | white
         */
        color?: code;
        /**
         * Contains color's id, extensions, and comments.
         */
        _color?: Element;
        /**
         * measurement | setting | calculation | unspecified
         */
        category: code;
        /**
         * Contains category's id, extensions, and comments.
         */
        _category?: Element;
        /**
         * Describes the measurement repetition time
         */
        measurementPeriod?: Timing;
        /**
         * Describes the calibrations that have been performed or that are required to be performed
         */
        calibration?: DeviceMetricCalibration[];
    }
    /**
     * Provides guide for interpretation
     */
    interface ObservationReferenceRange extends Element {
        /**
         * Low Range, if relevant
         */
        low?: Quantity;
        /**
         * High Range, if relevant
         */
        high?: Quantity;
        /**
         * Indicates the meaning/use of this range of this range
         */
        meaning?: CodeableConcept;
        /**
         * Applicable age range, if relevant
         */
        age?: Range;
        /**
         * Text based reference range in an observation
         */
        text?: string;
        /**
         * Contains text's id, extensions, and comments.
         */
        _text?: Element;
    }
    /**
     * Resource related to this observation
     */
    interface ObservationRelated extends Element {
        /**
         * has-member | derived-from | sequel-to | replaces | qualified-by | interfered-by
         */
        type?: code;
        /**
         * Contains type's id, extensions, and comments.
         */
        _type?: Element;
        /**
         * Resource that is related to this one
         */
        target: Reference;
    }
    /**
     * Grouped questions
     */
    interface QuestionnaireGroup extends Element {
        /**
         * To link questionnaire with questionnaire response
         */
        linkId?: string;
        /**
         * Contains linkId's id, extensions, and comments.
         */
        _linkId?: Element;
        /**
         * Name to be displayed for group
         */
        title?: string;
        /**
         * Contains title's id, extensions, and comments.
         */
        _title?: Element;
        /**
         * Concept that represents this section on a questionnaire
         */
        concept?: Coding[];
        /**
         * Additional text for the group
         */
        text?: string;
        /**
         * Contains text's id, extensions, and comments.
         */
        _text?: Element;
        /**
         * Must group be included in data results?
         */
        required?: boolean;
        /**
         * Contains required's id, extensions, and comments.
         */
        _required?: Element;
        /**
         * Whether the group may repeat
         */
        repeats?: boolean;
        /**
         * Contains repeats's id, extensions, and comments.
         */
        _repeats?: Element;
        /**
         * Nested questionnaire group
         */
        group?: QuestionnaireGroup[];
        /**
         * Questions in this group
         */
        question?: QuestionnaireGroupQuestion[];
    }
    /**
     * Questions in this group
     */
    interface QuestionnaireGroupQuestion extends Element {
        /**
         * To link questionnaire with questionnaire response
         */
        linkId?: string;
        /**
         * Contains linkId's id, extensions, and comments.
         */
        _linkId?: Element;
        /**
         * Concept that represents this question on a questionnaire
         */
        concept?: Coding[];
        /**
         * Text of the question as it is shown to the user
         */
        text?: string;
        /**
         * Contains text's id, extensions, and comments.
         */
        _text?: Element;
        /**
         * boolean | decimal | integer | date | dateTime +
         */
        type?: code;
        /**
         * Contains type's id, extensions, and comments.
         */
        _type?: Element;
        /**
         * Must question be answered in data results?
         */
        required?: boolean;
        /**
         * Contains required's id, extensions, and comments.
         */
        _required?: Element;
        /**
         * Can question  have multiple answers?
         */
        repeats?: boolean;
        /**
         * Contains repeats's id, extensions, and comments.
         */
        _repeats?: Element;
        /**
         * Valueset containing permitted answers
         */
        options?: Reference;
        /**
         * Permitted answer
         */
        option?: Coding[];
        /**
         * Nested questionnaire group
         */
        group?: QuestionnaireGroup[];
    }
    /**
     * Contact details of the publisher
     */
    interface ValueSetContact extends Element {
        /**
         * Name of a individual to contact
         */
        name?: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * Contact details for individual or publisher
         */
        telecom?: ContactPoint[];
    }
    /**
     * An inline code system - part of this value set
     */
    interface ValueSetCodeSystem extends Element {
        /**
         * URI to identify the code system (e.g. in Coding.system)
         */
        system: uri;
        /**
         * Contains system's id, extensions, and comments.
         */
        _system?: Element;
        /**
         * Version (for use in Coding.version)
         */
        version?: string;
        /**
         * Contains version's id, extensions, and comments.
         */
        _version?: Element;
        /**
         * If code comparison is case sensitive
         */
        caseSensitive?: boolean;
        /**
         * Contains caseSensitive's id, extensions, and comments.
         */
        _caseSensitive?: Element;
        /**
         * Concepts in the code system
         */
        concept: ValueSetCodeSystemConcept[];
    }
    /**
     * Concepts in the code system
     */
    interface ValueSetCodeSystemConcept extends Element {
        /**
         * Code that identifies concept
         */
        code: code;
        /**
         * Contains code's id, extensions, and comments.
         */
        _code?: Element;
        /**
         * If this code is not for use as a real concept
         */
        abstract?: boolean;
        /**
         * Contains abstract's id, extensions, and comments.
         */
        _abstract?: Element;
        /**
         * Text to Display to the user
         */
        display?: string;
        /**
         * Contains display's id, extensions, and comments.
         */
        _display?: Element;
        /**
         * Formal Definition
         */
        definition?: string;
        /**
         * Contains definition's id, extensions, and comments.
         */
        _definition?: Element;
        /**
         * Additional representations for the concept
         */
        designation?: ValueSetCodeSystemConceptDesignation[];
        /**
         * Child Concepts (is-a / contains / categorises)
         */
        concept?: ValueSetCodeSystemConcept[];
    }
    /**
     * Additional representations for the concept
     */
    interface ValueSetCodeSystemConceptDesignation extends Element {
        /**
         * Human language of the designation
         */
        language?: code;
        /**
         * Contains language's id, extensions, and comments.
         */
        _language?: Element;
        /**
         * Details how this designation would be used
         */
        use?: Coding;
        /**
         * The text value for this designation
         */
        value: string;
        /**
         * Contains value's id, extensions, and comments.
         */
        _value?: Element;
    }
    /**
     * When value set includes codes from elsewhere
     */
    interface ValueSetCompose extends Element {
        /**
         * Import the contents of another value set
         */
        import?: uri[];
        /**
         * Contains import's id, extensions, and comments.
         */
        _import?: Element[];
        /**
         * Include one or more codes from a code system
         */
        include?: ValueSetComposeInclude[];
        /**
         * Explicitly exclude codes
         */
        exclude?: ValueSetComposeInclude[];
    }
    /**
     * Include one or more codes from a code system
     */
    interface ValueSetComposeInclude extends Element {
        /**
         * The system the codes come from
         */
        system: uri;
        /**
         * Contains system's id, extensions, and comments.
         */
        _system?: Element;
        /**
         * Specific version of the code system referred to
         */
        version?: string;
        /**
         * Contains version's id, extensions, and comments.
         */
        _version?: Element;
        /**
         * A concept defined in the system
         */
        concept?: ValueSetComposeIncludeConcept[];
        /**
         * Select codes/concepts by their properties (including relationships)
         */
        filter?: ValueSetComposeIncludeFilter[];
    }
    /**
     * A concept defined in the system
     */
    interface ValueSetComposeIncludeConcept extends Element {
        /**
         * Code or expression from system
         */
        code: code;
        /**
         * Contains code's id, extensions, and comments.
         */
        _code?: Element;
        /**
         * Test to display for this code for this value set
         */
        display?: string;
        /**
         * Contains display's id, extensions, and comments.
         */
        _display?: Element;
        /**
         * Additional representations for this valueset
         */
        designation?: ValueSetCodeSystemConceptDesignation[];
    }
    /**
     * Select codes/concepts by their properties (including relationships)
     */
    interface ValueSetComposeIncludeFilter extends Element {
        /**
         * A property defined by the code system
         */
        property: code;
        /**
         * Contains property's id, extensions, and comments.
         */
        _property?: Element;
        /**
         * = | is-a | is-not-a | regex | in | not-in
         */
        op: code;
        /**
         * Contains op's id, extensions, and comments.
         */
        _op?: Element;
        /**
         * Code from the system, or regex criteria
         */
        value: code;
        /**
         * Contains value's id, extensions, and comments.
         */
        _value?: Element;
    }
    /**
     * Used when the value set is "expanded"
     */
    interface ValueSetExpansion extends Element {
        /**
         * Uniquely identifies this expansion
         */
        identifier: uri;
        /**
         * Contains identifier's id, extensions, and comments.
         */
        _identifier?: Element;
        /**
         * Time valueset expansion happened
         */
        timestamp: dateTime;
        /**
         * Contains timestamp's id, extensions, and comments.
         */
        _timestamp?: Element;
        /**
         * Total number of codes in the expansion
         */
        total?: integer;
        /**
         * Contains total's id, extensions, and comments.
         */
        _total?: Element;
        /**
         * Offset at which this resource starts
         */
        offset?: integer;
        /**
         * Contains offset's id, extensions, and comments.
         */
        _offset?: Element;
        /**
         * Parameter that controlled the expansion process
         */
        parameter?: ValueSetExpansionParameter[];
        /**
         * Codes in the value set
         */
        contains?: ValueSetExpansionContains[];
    }
    /**
     * Parameter that controlled the expansion process
     */
    interface ValueSetExpansionParameter extends Element {
        /**
         * Name as assigned by server
         */
        name: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * Value of the named parameter
         */
        valueString?: string;
        /**
         * Contains valueString's id, extensions, and comments.
         */
        _valueString?: Element;
        /**
         * Value of the named parameter
         */
        valueBoolean?: boolean;
        /**
         * Contains valueBoolean's id, extensions, and comments.
         */
        _valueBoolean?: Element;
        /**
         * Value of the named parameter
         */
        valueInteger?: integer;
        /**
         * Contains valueInteger's id, extensions, and comments.
         */
        _valueInteger?: Element;
        /**
         * Value of the named parameter
         */
        valueDecimal?: decimal;
        /**
         * Contains valueDecimal's id, extensions, and comments.
         */
        _valueDecimal?: Element;
        /**
         * Value of the named parameter
         */
        valueUri?: uri;
        /**
         * Contains valueUri's id, extensions, and comments.
         */
        _valueUri?: Element;
        /**
         * Value of the named parameter
         */
        valueCode?: code;
        /**
         * Contains valueCode's id, extensions, and comments.
         */
        _valueCode?: Element;
    }
    /**
     * Codes in the value set
     */
    interface ValueSetExpansionContains extends Element {
        /**
         * System value for the code
         */
        system?: uri;
        /**
         * Contains system's id, extensions, and comments.
         */
        _system?: Element;
        /**
         * If user cannot select this entry
         */
        abstract?: boolean;
        /**
         * Contains abstract's id, extensions, and comments.
         */
        _abstract?: Element;
        /**
         * Version in which this code / display is defined
         */
        version?: string;
        /**
         * Contains version's id, extensions, and comments.
         */
        _version?: Element;
        /**
         * Code - if blank, this is not a choosable code
         */
        code?: code;
        /**
         * Contains code's id, extensions, and comments.
         */
        _code?: Element;
        /**
         * User display for the concept
         */
        display?: string;
        /**
         * Contains display's id, extensions, and comments.
         */
        _display?: Element;
        /**
         * Codes contained under this entry
         */
        contains?: ValueSetExpansionContains[];
    }
    /**
     * A set of codes drawn from one or more code systems
     */
    interface ValueSet extends DomainResource {
        /**
         * Globally unique logical id for  value set
         */
        url?: uri;
        /**
         * Contains url's id, extensions, and comments.
         */
        _url?: Element;
        /**
         * Additional identifier for the value set (v2 / CDA)
         */
        identifier?: Identifier;
        /**
         * Logical id for this version of the value set
         */
        version?: string;
        /**
         * Contains version's id, extensions, and comments.
         */
        _version?: Element;
        /**
         * Informal name for this value set
         */
        name?: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * draft | active | retired
         */
        status: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * If for testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Contains experimental's id, extensions, and comments.
         */
        _experimental?: Element;
        /**
         * Name of the publisher (Organization or individual)
         */
        publisher?: string;
        /**
         * Contains publisher's id, extensions, and comments.
         */
        _publisher?: Element;
        /**
         * Contact details of the publisher
         */
        contact?: ValueSetContact[];
        /**
         * Date for given status
         */
        date?: dateTime;
        /**
         * Contains date's id, extensions, and comments.
         */
        _date?: Element;
        /**
         * Fixed date for all referenced code systems and value sets
         */
        lockedDate?: date;
        /**
         * Contains lockedDate's id, extensions, and comments.
         */
        _lockedDate?: Element;
        /**
         * Human language description of the value set
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * Content intends to support these contexts
         */
        useContext?: CodeableConcept[];
        /**
         * Indicates whether or not any change to the content logical definition may occur
         */
        immutable?: boolean;
        /**
         * Contains immutable's id, extensions, and comments.
         */
        _immutable?: Element;
        /**
         * Why is this needed?
         */
        requirements?: string;
        /**
         * Contains requirements's id, extensions, and comments.
         */
        _requirements?: Element;
        /**
         * Use and/or Publishing restrictions
         */
        copyright?: string;
        /**
         * Contains copyright's id, extensions, and comments.
         */
        _copyright?: Element;
        /**
         * Whether this is intended to be used with an extensible binding
         */
        extensible?: boolean;
        /**
         * Contains extensible's id, extensions, and comments.
         */
        _extensible?: Element;
        /**
         * An inline code system - part of this value set
         */
        codeSystem?: ValueSetCodeSystem;
        /**
         * When value set includes codes from elsewhere
         */
        compose?: ValueSetCompose;
        /**
         * Used when the value set is "expanded"
         */
        expansion?: ValueSetExpansion;
    }
    /**
     * A structured set of questions
     */
    interface Questionnaire extends DomainResource {
        /**
         * External Ids for this questionnaire
         */
        identifier?: Identifier[];
        /**
         * Logical id for this version of Questionnaire
         */
        version?: string;
        /**
         * Contains version's id, extensions, and comments.
         */
        _version?: Element;
        /**
         * draft | published | retired
         */
        status: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * Date this version was authored
         */
        date?: dateTime;
        /**
         * Contains date's id, extensions, and comments.
         */
        _date?: Element;
        /**
         * Organization/individual who designed the questionnaire
         */
        publisher?: string;
        /**
         * Contains publisher's id, extensions, and comments.
         */
        _publisher?: Element;
        /**
         * Contact information of the publisher
         */
        telecom?: ContactPoint[];
        /**
         * Resource that can be subject of QuestionnaireResponse
         */
        subjectType?: code[];
        /**
         * Contains subjectType's id, extensions, and comments.
         */
        _subjectType?: Element[];
        /**
         * Grouped questions
         */
        group: QuestionnaireGroup;
    }
    /**
     * Grouped questions
     */
    interface QuestionnaireResponseGroup extends Element {
        /**
         * Corresponding group within Questionnaire
         */
        linkId?: string;
        /**
         * Contains linkId's id, extensions, and comments.
         */
        _linkId?: Element;
        /**
         * Name for this group
         */
        title?: string;
        /**
         * Contains title's id, extensions, and comments.
         */
        _title?: Element;
        /**
         * Additional text for the group
         */
        text?: string;
        /**
         * Contains text's id, extensions, and comments.
         */
        _text?: Element;
        /**
         * The subject this group's answers are about
         */
        subject?: Reference;
        /**
         * Nested questionnaire response group
         */
        group?: QuestionnaireResponseGroup[];
        /**
         * Questions in this group
         */
        question?: QuestionnaireResponseGroupQuestion[];
    }
    /**
     * Questions in this group
     */
    interface QuestionnaireResponseGroupQuestion extends Element {
        /**
         * Corresponding question within Questionnaire
         */
        linkId?: string;
        /**
         * Contains linkId's id, extensions, and comments.
         */
        _linkId?: Element;
        /**
         * Text of the question as it is shown to the user
         */
        text?: string;
        /**
         * Contains text's id, extensions, and comments.
         */
        _text?: Element;
        /**
         * The response(s) to the question
         */
        answer?: QuestionnaireResponseGroupQuestionAnswer[];
    }
    /**
     * The response(s) to the question
     */
    interface QuestionnaireResponseGroupQuestionAnswer extends Element {
        /**
         * Single-valued answer to the question
         */
        valueBoolean?: boolean;
        /**
         * Contains valueBoolean's id, extensions, and comments.
         */
        _valueBoolean?: Element;
        /**
         * Single-valued answer to the question
         */
        valueDecimal?: decimal;
        /**
         * Contains valueDecimal's id, extensions, and comments.
         */
        _valueDecimal?: Element;
        /**
         * Single-valued answer to the question
         */
        valueInteger?: integer;
        /**
         * Contains valueInteger's id, extensions, and comments.
         */
        _valueInteger?: Element;
        /**
         * Single-valued answer to the question
         */
        valueDate?: date;
        /**
         * Contains valueDate's id, extensions, and comments.
         */
        _valueDate?: Element;
        /**
         * Single-valued answer to the question
         */
        valueDateTime?: dateTime;
        /**
         * Contains valueDateTime's id, extensions, and comments.
         */
        _valueDateTime?: Element;
        /**
         * Single-valued answer to the question
         */
        valueInstant?: instant;
        /**
         * Contains valueInstant's id, extensions, and comments.
         */
        _valueInstant?: Element;
        /**
         * Single-valued answer to the question
         */
        valueTime?: time;
        /**
         * Contains valueTime's id, extensions, and comments.
         */
        _valueTime?: Element;
        /**
         * Single-valued answer to the question
         */
        valueString?: string;
        /**
         * Contains valueString's id, extensions, and comments.
         */
        _valueString?: Element;
        /**
         * Single-valued answer to the question
         */
        valueUri?: uri;
        /**
         * Contains valueUri's id, extensions, and comments.
         */
        _valueUri?: Element;
        /**
         * Single-valued answer to the question
         */
        valueAttachment?: Attachment;
        /**
         * Single-valued answer to the question
         */
        valueCoding?: Coding;
        /**
         * Single-valued answer to the question
         */
        valueQuantity?: Quantity;
        /**
         * Single-valued answer to the question
         */
        valueReference?: Reference;
        /**
         * Nested questionnaire group
         */
        group?: QuestionnaireResponseGroup[];
    }
    /**
     * A structured set of questions and their answers
     */
    interface QuestionnaireResponse extends DomainResource {
        /**
         * Unique id for this set of answers
         */
        identifier?: Identifier;
        /**
         * Form being answered
         */
        questionnaire?: Reference;
        /**
         * in-progress | completed | amended
         */
        status: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * The subject of the questions
         */
        subject?: Reference;
        /**
         * Person who received and recorded the answers
         */
        author?: Reference;
        /**
         * Date this version was authored
         */
        authored?: dateTime;
        /**
         * Contains authored's id, extensions, and comments.
         */
        _authored?: Element;
        /**
         * The person who answered the questions
         */
        source?: Reference;
        /**
         * Primary encounter during which the answers were collected
         */
        encounter?: Reference;
        /**
         * Grouped questions
         */
        group?: QuestionnaireResponseGroup;
    }
    /**
     * Component results
     */
    interface ObservationComponent extends Element {
        /**
         * Type of component observation (code / type)
         */
        code: CodeableConcept;
        /**
         * Actual component result
         */
        valueQuantity?: Quantity;
        /**
         * Actual component result
         */
        valueCodeableConcept?: CodeableConcept;
        /**
         * Actual component result
         */
        valueString?: string;
        /**
         * Contains valueString's id, extensions, and comments.
         */
        _valueString?: Element;
        /**
         * Actual component result
         */
        valueRange?: Range;
        /**
         * Actual component result
         */
        valueRatio?: Ratio;
        /**
         * Actual component result
         */
        valueSampledData?: SampledData;
        /**
         * Actual component result
         */
        valueAttachment?: Attachment;
        /**
         * Actual component result
         */
        valueTime?: time;
        /**
         * Contains valueTime's id, extensions, and comments.
         */
        _valueTime?: Element;
        /**
         * Actual component result
         */
        valueDateTime?: dateTime;
        /**
         * Contains valueDateTime's id, extensions, and comments.
         */
        _valueDateTime?: Element;
        /**
         * Actual component result
         */
        valuePeriod?: Period;
        /**
         * Why the component result is missing
         */
        dataAbsentReason?: CodeableConcept;
        /**
         * Provides guide for interpretation ofcomponent result
         */
        referenceRange?: ObservationReferenceRange[];
    }
    /**
     * Measurements and simple assertions
     */
    interface Observation extends DomainResource {
        /**
         * Unique Id for this particular observation
         */
        identifier?: Identifier[];
        /**
         * registered | preliminary | final | amended +
         */
        status: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * Classification of  type of observation
         */
        category?: CodeableConcept;
        /**
         * Type of observation (code / type)
         */
        code: CodeableConcept;
        /**
         * Who and/or what this is about
         */
        subject?: Reference;
        /**
         * Healthcare event during which this observation is made
         */
        encounter?: Reference;
        /**
         * Clinically Relevant time/time-period for observation
         */
        effectiveDateTime?: dateTime;
        /**
         * Contains effectiveDateTime's id, extensions, and comments.
         */
        _effectiveDateTime?: Element;
        /**
         * Clinically Relevant time/time-period for observation
         */
        effectivePeriod?: Period;
        /**
         * Date/Time this was made available
         */
        issued?: instant;
        /**
         * Contains issued's id, extensions, and comments.
         */
        _issued?: Element;
        /**
         * Who is responsible for the observation
         */
        performer?: Reference[];
        /**
         * Actual result
         */
        valueQuantity?: Quantity;
        /**
         * Actual result
         */
        valueCodeableConcept?: CodeableConcept;
        /**
         * Actual result
         */
        valueString?: string;
        /**
         * Contains valueString's id, extensions, and comments.
         */
        _valueString?: Element;
        /**
         * Actual result
         */
        valueRange?: Range;
        /**
         * Actual result
         */
        valueRatio?: Ratio;
        /**
         * Actual result
         */
        valueSampledData?: SampledData;
        /**
         * Actual result
         */
        valueAttachment?: Attachment;
        /**
         * Actual result
         */
        valueTime?: time;
        /**
         * Contains valueTime's id, extensions, and comments.
         */
        _valueTime?: Element;
        /**
         * Actual result
         */
        valueDateTime?: dateTime;
        /**
         * Contains valueDateTime's id, extensions, and comments.
         */
        _valueDateTime?: Element;
        /**
         * Actual result
         */
        valuePeriod?: Period;
        /**
         * Why the result is missing
         */
        dataAbsentReason?: CodeableConcept;
        /**
         * High, low, normal, etc.
         */
        interpretation?: CodeableConcept;
        /**
         * Comments about result
         */
        comments?: string;
        /**
         * Contains comments's id, extensions, and comments.
         */
        _comments?: Element;
        /**
         * Observed body part
         */
        bodySite?: CodeableConcept;
        /**
         * How it was done
         */
        method?: CodeableConcept;
        /**
         * Specimen used for this observation
         */
        specimen?: Reference;
        /**
         * (Measurement) Device
         */
        device?: Reference;
        /**
         * Provides guide for interpretation
         */
        referenceRange?: ObservationReferenceRange[];
        /**
         * Resource related to this observation
         */
        related?: ObservationRelated[];
        /**
         * Component results
         */
        component?: ObservationComponent[];
    }
    /**
     * Condition that the related person had
     */
    interface FamilyMemberHistoryCondition extends Element {
        /**
         * Condition suffered by relation
         */
        code: CodeableConcept;
        /**
         * deceased | permanent disability | etc.
         */
        outcome?: CodeableConcept;
        /**
         * When condition first manifested
         */
        onsetQuantity?: Quantity;
        /**
         * When condition first manifested
         */
        onsetRange?: Range;
        /**
         * When condition first manifested
         */
        onsetPeriod?: Period;
        /**
         * When condition first manifested
         */
        onsetString?: string;
        /**
         * Contains onsetString's id, extensions, and comments.
         */
        _onsetString?: Element;
        /**
         * Extra information about condition
         */
        note?: Annotation;
    }
    /**
     * Information about patient's relatives, relevant for patient
     */
    interface FamilyMemberHistory extends DomainResource {
        /**
         * External Id(s) for this record
         */
        identifier?: Identifier[];
        /**
         * Patient history is about
         */
        patient: Reference;
        /**
         * When history was captured/updated
         */
        date?: dateTime;
        /**
         * Contains date's id, extensions, and comments.
         */
        _date?: Element;
        /**
         * partial | completed | entered-in-error | health-unknown
         */
        status: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * The family member described
         */
        name?: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * Relationship to the subject
         */
        relationship: CodeableConcept;
        /**
         * male | female | other | unknown
         */
        gender?: code;
        /**
         * Contains gender's id, extensions, and comments.
         */
        _gender?: Element;
        /**
         * (approximate) date of birth
         */
        bornPeriod?: Period;
        /**
         * (approximate) date of birth
         */
        bornDate?: date;
        /**
         * Contains bornDate's id, extensions, and comments.
         */
        _bornDate?: Element;
        /**
         * (approximate) date of birth
         */
        bornString?: string;
        /**
         * Contains bornString's id, extensions, and comments.
         */
        _bornString?: Element;
        /**
         * (approximate) age
         */
        ageQuantity?: Quantity;
        /**
         * (approximate) age
         */
        ageRange?: Range;
        /**
         * (approximate) age
         */
        ageString?: string;
        /**
         * Contains ageString's id, extensions, and comments.
         */
        _ageString?: Element;
        /**
         * Dead? How old/when?
         */
        deceasedBoolean?: boolean;
        /**
         * Contains deceasedBoolean's id, extensions, and comments.
         */
        _deceasedBoolean?: Element;
        /**
         * Dead? How old/when?
         */
        deceasedQuantity?: Quantity;
        /**
         * Dead? How old/when?
         */
        deceasedRange?: Range;
        /**
         * Dead? How old/when?
         */
        deceasedDate?: date;
        /**
         * Contains deceasedDate's id, extensions, and comments.
         */
        _deceasedDate?: Element;
        /**
         * Dead? How old/when?
         */
        deceasedString?: string;
        /**
         * Contains deceasedString's id, extensions, and comments.
         */
        _deceasedString?: Element;
        /**
         * General note about related person
         */
        note?: Annotation;
        /**
         * Condition that the related person had
         */
        condition?: FamilyMemberHistoryCondition[];
    }
    /**
     * Relationships to other documents
     */
    interface DocumentReferenceRelatesTo extends Element {
        /**
         * replaces | transforms | signs | appends
         */
        code: code;
        /**
         * Contains code's id, extensions, and comments.
         */
        _code?: Element;
        /**
         * Target of the relationship
         */
        target: Reference;
    }
    /**
     * Document referenced
     */
    interface DocumentReferenceContent extends Element {
        /**
         * Where to access the document
         */
        attachment: Attachment;
        /**
         * Format/content rules for the document
         */
        format?: Coding[];
    }
    /**
     * Clinical context of document
     */
    interface DocumentReferenceContext extends Element {
        /**
         * Context of the document  content
         */
        encounter?: Reference;
        /**
         * Main Clinical Acts Documented
         */
        event?: CodeableConcept[];
        /**
         * Time of service that is being documented
         */
        period?: Period;
        /**
         * Kind of facility where patient was seen
         */
        facilityType?: CodeableConcept;
        /**
         * Additional details about where the content was created (e.g. clinical specialty)
         */
        practiceSetting?: CodeableConcept;
        /**
         * Patient demographics from source
         */
        sourcePatientInfo?: Reference;
        /**
         * Related identifiers or resources
         */
        related?: DocumentReferenceContextRelated[];
    }
    /**
     * Related identifiers or resources
     */
    interface DocumentReferenceContextRelated extends Element {
        /**
         * Identifer of related objects or events
         */
        identifier?: Identifier;
        /**
         * Related Resource
         */
        ref?: Reference;
    }
    /**
     * A reference to a document
     */
    interface DocumentReference extends DomainResource {
        /**
         * Master Version Specific Identifier
         */
        masterIdentifier?: Identifier;
        /**
         * Other identifiers for the document
         */
        identifier?: Identifier[];
        /**
         * Who|what is the subject of the document
         */
        subject?: Reference;
        /**
         * Kind of document (LOINC if possible)
         */
        type: CodeableConcept;
        /**
         * Categorization of document
         */
        class?: CodeableConcept;
        /**
         * Who and/or what authored the document
         */
        author?: Reference[];
        /**
         * Org which maintains the document
         */
        custodian?: Reference;
        /**
         * Who/What authenticated the document
         */
        authenticator?: Reference;
        /**
         * Document creation time
         */
        created?: dateTime;
        /**
         * Contains created's id, extensions, and comments.
         */
        _created?: Element;
        /**
         * When this document reference created
         */
        indexed: instant;
        /**
         * Contains indexed's id, extensions, and comments.
         */
        _indexed?: Element;
        /**
         * current | superseded | entered-in-error
         */
        status: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * preliminary | final | appended | amended | entered-in-error
         */
        docStatus?: CodeableConcept;
        /**
         * Relationships to other documents
         */
        relatesTo?: DocumentReferenceRelatesTo[];
        /**
         * Human-readable description (title)
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * Document security-tags
         */
        securityLabel?: CodeableConcept[];
        /**
         * Document referenced
         */
        content: DocumentReferenceContent[];
        /**
         * Clinical context of document
         */
        context?: DocumentReferenceContext;
    }
    /**
     * A list of events of interest in the lifecycle
     */
    interface DiagnosticOrderEvent extends Element {
        /**
         * proposed | draft | planned | requested | received | accepted | in-progress | review | completed | cancelled | suspended | rejected | failed
         */
        status: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * More information about the event and its context
         */
        description?: CodeableConcept;
        /**
         * The date at which the event happened
         */
        dateTime: dateTime;
        /**
         * Contains dateTime's id, extensions, and comments.
         */
        _dateTime?: Element;
        /**
         * Who recorded or did this
         */
        actor?: Reference;
    }
    /**
     * The items the orderer requested
     */
    interface DiagnosticOrderItem extends Element {
        /**
         * Code to indicate the item (test or panel) being ordered
         */
        code: CodeableConcept;
        /**
         * If this item relates to specific specimens
         */
        specimen?: Reference[];
        /**
         * Location of requested test (if applicable)
         */
        bodySite?: CodeableConcept;
        /**
         * proposed | draft | planned | requested | received | accepted | in-progress | review | completed | cancelled | suspended | rejected | failed
         */
        status?: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * Events specific to this item
         */
        event?: DiagnosticOrderEvent[];
    }
    /**
     * A request for a diagnostic service
     */
    interface DiagnosticOrder extends DomainResource {
        /**
         * Who and/or what test is about
         */
        subject: Reference;
        /**
         * Who ordered the test
         */
        orderer?: Reference;
        /**
         * Identifiers assigned to this order
         */
        identifier?: Identifier[];
        /**
         * The encounter that this diagnostic order is associated with
         */
        encounter?: Reference;
        /**
         * Explanation/Justification for test
         */
        reason?: CodeableConcept[];
        /**
         * Additional clinical information
         */
        supportingInformation?: Reference[];
        /**
         * If the whole order relates to specific specimens
         */
        specimen?: Reference[];
        /**
         * proposed | draft | planned | requested | received | accepted | in-progress | review | completed | cancelled | suspended | rejected | failed
         */
        status?: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * routine | urgent | stat | asap
         */
        priority?: code;
        /**
         * Contains priority's id, extensions, and comments.
         */
        _priority?: Element;
        /**
         * A list of events of interest in the lifecycle
         */
        event?: DiagnosticOrderEvent[];
        /**
         * The items the orderer requested
         */
        item?: DiagnosticOrderItem[];
        /**
         * Other notes and comments
         */
        note?: Annotation[];
    }
    /**
     * A request for a procedure to be performed
     */
    interface ProcedureRequest extends DomainResource {
        /**
         * Identifier
         */
        identifier?: Identifier[];
        /**
         * Subject
         */
        subject: Reference;
        /**
         * Procedure Code
         */
        code: CodeableConcept;
        /**
         * Target body sites
         */
        bodySite?: CodeableConcept[];
        /**
         * Indication
         */
        reasonCodeableConcept?: CodeableConcept;
        /**
         * Indication
         */
        reasonReference?: Reference;
        /**
         * Procedure timing schedule
         */
        scheduledDateTime?: dateTime;
        /**
         * Contains scheduledDateTime's id, extensions, and comments.
         */
        _scheduledDateTime?: Element;
        /**
         * Procedure timing schedule
         */
        scheduledPeriod?: Period;
        /**
         * Procedure timing schedule
         */
        scheduledTiming?: Timing;
        /**
         * Encounter
         */
        encounter?: Reference;
        /**
         * Performer
         */
        performer?: Reference;
        /**
         * proposed | draft | requested | received | accepted | in-progress | completed | suspended | rejected | aborted
         */
        status?: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * Notes
         */
        notes?: Annotation[];
        /**
         * PRN
         */
        asNeededBoolean?: boolean;
        /**
         * Contains asNeededBoolean's id, extensions, and comments.
         */
        _asNeededBoolean?: Element;
        /**
         * PRN
         */
        asNeededCodeableConcept?: CodeableConcept;
        /**
         * When Requested
         */
        orderedOn?: dateTime;
        /**
         * Contains orderedOn's id, extensions, and comments.
         */
        _orderedOn?: Element;
        /**
         * Ordering Party
         */
        orderer?: Reference;
        /**
         * routine | urgent | stat | asap
         */
        priority?: code;
        /**
         * Contains priority's id, extensions, and comments.
         */
        _priority?: Element;
    }
    /**
     * A request for referral or transfer of care
     */
    interface ReferralRequest extends DomainResource {
        /**
         * draft | requested | active | cancelled | accepted | rejected | completed
         */
        status: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * Business Identifier
         */
        identifier?: Identifier[];
        /**
         * Date of creation/activation
         */
        date?: dateTime;
        /**
         * Contains date's id, extensions, and comments.
         */
        _date?: Element;
        /**
         * Referral/Transition of care request type
         */
        type?: CodeableConcept;
        /**
         * The clinical specialty (discipline) that the referral is requested for
         */
        specialty?: CodeableConcept;
        /**
         * Urgency of referral / transfer of care request
         */
        priority?: CodeableConcept;
        /**
         * Patient referred to care or transfer
         */
        patient?: Reference;
        /**
         * Requester of referral / transfer of care
         */
        requester?: Reference;
        /**
         * Receiver of referral / transfer of care request
         */
        recipient?: Reference[];
        /**
         * Originating encounter
         */
        encounter?: Reference;
        /**
         * Date referral/transfer of care request is sent
         */
        dateSent?: dateTime;
        /**
         * Contains dateSent's id, extensions, and comments.
         */
        _dateSent?: Element;
        /**
         * Reason for referral / Transfer of care request
         */
        reason?: CodeableConcept;
        /**
         * A textual description of the referral
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * What actions are requested as part of referral?
         */
        serviceRequested?: CodeableConcept[];
        /**
         * Additonal information to support referral or transfer of care request
         */
        supportingInformation?: Reference[];
        /**
         * Requested service(s) fulfillment time
         */
        fulfillmentTime?: Period;
    }
    /**
     * The people who performed the procedure
     */
    interface ProcedurePerformer extends Element {
        /**
         * The reference to the practitioner
         */
        actor?: Reference;
        /**
         * The role the actor was in
         */
        role?: CodeableConcept;
    }
    /**
     * Device changed in procedure
     */
    interface ProcedureFocalDevice extends Element {
        /**
         * Kind of change to device
         */
        action?: CodeableConcept;
        /**
         * Device that was changed
         */
        manipulated: Reference;
    }
    /**
     * An action that was or is currently being performed on a patient
     */
    interface Procedure extends DomainResource {
        /**
         * External Ids for this procedure
         */
        identifier?: Identifier[];
        /**
         * Who procedure was performed on
         */
        subject: Reference;
        /**
         * in-progress | aborted | completed | entered-in-error
         */
        status: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * Classification of the procedure
         */
        category?: CodeableConcept;
        /**
         * Identification of the procedure
         */
        code: CodeableConcept;
        /**
         * True if procedure was not performed as scheduled
         */
        notPerformed?: boolean;
        /**
         * Contains notPerformed's id, extensions, and comments.
         */
        _notPerformed?: Element;
        /**
         * Reason procedure not performed
         */
        reasonNotPerformed?: CodeableConcept[];
        /**
         * Target body sites
         */
        bodySite?: CodeableConcept[];
        /**
         * Reason procedure performed
         */
        reasonCodeableConcept?: CodeableConcept;
        /**
         * Reason procedure performed
         */
        reasonReference?: Reference;
        /**
         * The people who performed the procedure
         */
        performer?: ProcedurePerformer[];
        /**
         * Date/Period the procedure was performed
         */
        performedDateTime?: dateTime;
        /**
         * Contains performedDateTime's id, extensions, and comments.
         */
        _performedDateTime?: Element;
        /**
         * Date/Period the procedure was performed
         */
        performedPeriod?: Period;
        /**
         * The encounter when procedure performed
         */
        encounter?: Reference;
        /**
         * Where the procedure happened
         */
        location?: Reference;
        /**
         * What was result of procedure?
         */
        outcome?: CodeableConcept;
        /**
         * Any report that results from the procedure
         */
        report?: Reference[];
        /**
         * Complication following the procedure
         */
        complication?: CodeableConcept[];
        /**
         * Instructions for follow up
         */
        followUp?: CodeableConcept[];
        /**
         * A request for this procedure
         */
        request?: Reference;
        /**
         * Additional information about procedure
         */
        notes?: Annotation[];
        /**
         * Device changed in procedure
         */
        focalDevice?: ProcedureFocalDevice[];
        /**
         * Items used during procedure
         */
        used?: Reference[];
    }
    /**
     * Each study has one or more series of instances
     */
    interface ImagingStudySeries extends Element {
        /**
         * Numeric identifier of this series
         */
        number?: unsignedInt;
        /**
         * Contains number's id, extensions, and comments.
         */
        _number?: Element;
        /**
         * The modality of the instances in the series
         */
        modality: Coding;
        /**
         * Formal identifier for this series
         */
        uid: oid;
        /**
         * Contains uid's id, extensions, and comments.
         */
        _uid?: Element;
        /**
         * A description of the series
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * Number of Series Related Instances
         */
        numberOfInstances: unsignedInt;
        /**
         * Contains numberOfInstances's id, extensions, and comments.
         */
        _numberOfInstances?: Element;
        /**
         * ONLINE | OFFLINE | NEARLINE | UNAVAILABLE
         */
        availability?: code;
        /**
         * Contains availability's id, extensions, and comments.
         */
        _availability?: Element;
        /**
         * Location of the referenced instance(s)
         */
        url?: uri;
        /**
         * Contains url's id, extensions, and comments.
         */
        _url?: Element;
        /**
         * Body part examined
         */
        bodySite?: Coding;
        /**
         * Body part laterality
         */
        laterality?: Coding;
        /**
         * When the series started
         */
        started?: dateTime;
        /**
         * Contains started's id, extensions, and comments.
         */
        _started?: Element;
        /**
         * A single SOP instance from the series
         */
        instance?: ImagingStudySeriesInstance[];
    }
    /**
     * A single SOP instance from the series
     */
    interface ImagingStudySeriesInstance extends Element {
        /**
         * The number of this instance in the series
         */
        number?: unsignedInt;
        /**
         * Contains number's id, extensions, and comments.
         */
        _number?: Element;
        /**
         * Formal identifier for this instance
         */
        uid: oid;
        /**
         * Contains uid's id, extensions, and comments.
         */
        _uid?: Element;
        /**
         * DICOM class type
         */
        sopClass: oid;
        /**
         * Contains sopClass's id, extensions, and comments.
         */
        _sopClass?: Element;
        /**
         * Type of instance (image etc)
         */
        type?: string;
        /**
         * Contains type's id, extensions, and comments.
         */
        _type?: Element;
        /**
         * Description of instance
         */
        title?: string;
        /**
         * Contains title's id, extensions, and comments.
         */
        _title?: Element;
        /**
         * Content of the instance
         */
        content?: Attachment[];
    }
    /**
     * A set of images produced in single study (one or more series of references images)
     */
    interface ImagingStudy extends DomainResource {
        /**
         * When the study was started
         */
        started?: dateTime;
        /**
         * Contains started's id, extensions, and comments.
         */
        _started?: Element;
        /**
         * Who the images are of
         */
        patient: Reference;
        /**
         * Formal identifier for the study
         */
        uid: oid;
        /**
         * Contains uid's id, extensions, and comments.
         */
        _uid?: Element;
        /**
         * Related workflow identifier ("Accession Number")
         */
        accession?: Identifier;
        /**
         * Other identifiers for the study
         */
        identifier?: Identifier[];
        /**
         * Order(s) that caused this study to be performed
         */
        order?: Reference[];
        /**
         * All series.modality if actual acquisition modalities
         */
        modalityList?: Coding[];
        /**
         * Referring physician (0008,0090)
         */
        referrer?: Reference;
        /**
         * ONLINE | OFFLINE | NEARLINE | UNAVAILABLE (0008,0056)
         */
        availability?: code;
        /**
         * Contains availability's id, extensions, and comments.
         */
        _availability?: Element;
        /**
         * Retrieve URI
         */
        url?: uri;
        /**
         * Contains url's id, extensions, and comments.
         */
        _url?: Element;
        /**
         * Number of Study Related Series
         */
        numberOfSeries: unsignedInt;
        /**
         * Contains numberOfSeries's id, extensions, and comments.
         */
        _numberOfSeries?: Element;
        /**
         * Number of Study Related Instances
         */
        numberOfInstances: unsignedInt;
        /**
         * Contains numberOfInstances's id, extensions, and comments.
         */
        _numberOfInstances?: Element;
        /**
         * Type of procedure performed
         */
        procedure?: Reference[];
        /**
         * Who interpreted images
         */
        interpreter?: Reference;
        /**
         * Institution-generated description
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * Each study has one or more series of instances
         */
        series?: ImagingStudySeries[];
    }
    /**
     * Study identity of the selected instances
     */
    interface ImagingObjectSelectionStudy extends Element {
        /**
         * Study instance UID
         */
        uid: oid;
        /**
         * Contains uid's id, extensions, and comments.
         */
        _uid?: Element;
        /**
         * Retrieve study URL
         */
        url?: uri;
        /**
         * Contains url's id, extensions, and comments.
         */
        _url?: Element;
        /**
         * Reference to ImagingStudy
         */
        imagingStudy?: Reference;
        /**
         * Series identity of the selected instances
         */
        series: ImagingObjectSelectionStudySeries[];
    }
    /**
     * Series identity of the selected instances
     */
    interface ImagingObjectSelectionStudySeries extends Element {
        /**
         * Series instance UID
         */
        uid?: oid;
        /**
         * Contains uid's id, extensions, and comments.
         */
        _uid?: Element;
        /**
         * Retrieve series URL
         */
        url?: uri;
        /**
         * Contains url's id, extensions, and comments.
         */
        _url?: Element;
        /**
         * The selected instance
         */
        instance: ImagingObjectSelectionStudySeriesInstance[];
    }
    /**
     * The selected instance
     */
    interface ImagingObjectSelectionStudySeriesInstance extends Element {
        /**
         * SOP class UID of instance
         */
        sopClass: oid;
        /**
         * Contains sopClass's id, extensions, and comments.
         */
        _sopClass?: Element;
        /**
         * Selected instance UID
         */
        uid: oid;
        /**
         * Contains uid's id, extensions, and comments.
         */
        _uid?: Element;
        /**
         * Retrieve instance URL
         */
        url: uri;
        /**
         * Contains url's id, extensions, and comments.
         */
        _url?: Element;
        /**
         * The frame set
         */
        frames?: ImagingObjectSelectionStudySeriesInstanceFrames[];
    }
    /**
     * The frame set
     */
    interface ImagingObjectSelectionStudySeriesInstanceFrames extends Element {
        /**
         * Frame numbers
         */
        frameNumbers: unsignedInt[];
        /**
         * Contains frameNumbers's id, extensions, and comments.
         */
        _frameNumbers?: Element[];
        /**
         * Retrieve frame URL
         */
        url: uri;
        /**
         * Contains url's id, extensions, and comments.
         */
        _url?: Element;
    }
    /**
     * Key Object Selection
     */
    interface ImagingObjectSelection extends DomainResource {
        /**
         * Instance UID
         */
        uid: oid;
        /**
         * Contains uid's id, extensions, and comments.
         */
        _uid?: Element;
        /**
         * Patient of the selected objects
         */
        patient: Reference;
        /**
         * Reason for selection
         */
        title: CodeableConcept;
        /**
         * Description text
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * Author (human or machine)
         */
        author?: Reference;
        /**
         * Authoring time of the selection
         */
        authoringTime?: dateTime;
        /**
         * Contains authoringTime's id, extensions, and comments.
         */
        _authoringTime?: Element;
        /**
         * Study identity of the selected instances
         */
        study: ImagingObjectSelectionStudy[];
    }
    /**
     * Key images associated with this report
     */
    interface DiagnosticReportImage extends Element {
        /**
         * Comment about the image (e.g. explanation)
         */
        comment?: string;
        /**
         * Contains comment's id, extensions, and comments.
         */
        _comment?: Element;
        /**
         * Reference to the image source
         */
        link: Reference;
    }
    /**
     * A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference
     */
    interface Media extends DomainResource {
        /**
         * photo | video | audio
         */
        type: code;
        /**
         * Contains type's id, extensions, and comments.
         */
        _type?: Element;
        /**
         * The type of acquisition equipment/process
         */
        subtype?: CodeableConcept;
        /**
         * Identifier(s) for the image
         */
        identifier?: Identifier[];
        /**
         * Who/What this Media is a record of
         */
        subject?: Reference;
        /**
         * The person who generated the image
         */
        operator?: Reference;
        /**
         * Imaging view e.g Lateral or Antero-posterior
         */
        view?: CodeableConcept;
        /**
         * Name of the device/manufacturer
         */
        deviceName?: string;
        /**
         * Contains deviceName's id, extensions, and comments.
         */
        _deviceName?: Element;
        /**
         * Height of the image in pixels(photo/video)
         */
        height?: positiveInt;
        /**
         * Contains height's id, extensions, and comments.
         */
        _height?: Element;
        /**
         * Width of the image in pixels (photo/video)
         */
        width?: positiveInt;
        /**
         * Contains width's id, extensions, and comments.
         */
        _width?: Element;
        /**
         * Number of frames if > 1 (photo)
         */
        frames?: positiveInt;
        /**
         * Contains frames's id, extensions, and comments.
         */
        _frames?: Element;
        /**
         * Length in seconds (audio / video)
         */
        duration?: unsignedInt;
        /**
         * Contains duration's id, extensions, and comments.
         */
        _duration?: Element;
        /**
         * Actual Media - reference or data
         */
        content: Attachment;
    }
    /**
     * A Diagnostic report - a combination of request information, atomic results, images, interpretation, as well as formatted reports
     */
    interface DiagnosticReport extends DomainResource {
        /**
         * Id for external references to this report
         */
        identifier?: Identifier[];
        /**
         * registered | partial | final | corrected | appended | cancelled | entered-in-error
         */
        status: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * Service category
         */
        category?: CodeableConcept;
        /**
         * Name/Code for this diagnostic report
         */
        code: CodeableConcept;
        /**
         * The subject of the report, usually, but not always, the patient
         */
        subject: Reference;
        /**
         * Health care event when test ordered
         */
        encounter?: Reference;
        /**
         * Clinically Relevant time/time-period for report
         */
        effectiveDateTime?: dateTime;
        /**
         * Contains effectiveDateTime's id, extensions, and comments.
         */
        _effectiveDateTime?: Element;
        /**
         * Clinically Relevant time/time-period for report
         */
        effectivePeriod?: Period;
        /**
         * DateTime this version was released
         */
        issued: instant;
        /**
         * Contains issued's id, extensions, and comments.
         */
        _issued?: Element;
        /**
         * Responsible Diagnostic Service
         */
        performer: Reference;
        /**
         * What was requested
         */
        request?: Reference[];
        /**
         * Specimens this report is based on
         */
        specimen?: Reference[];
        /**
         * Observations - simple, or complex nested groups
         */
        result?: Reference[];
        /**
         * Reference to full details of imaging associated with the diagnostic report
         */
        imagingStudy?: Reference[];
        /**
         * Key images associated with this report
         */
        image?: DiagnosticReportImage[];
        /**
         * Clinical Interpretation of test results
         */
        conclusion?: string;
        /**
         * Contains conclusion's id, extensions, and comments.
         */
        _conclusion?: Element;
        /**
         * Codes for the conclusion
         */
        codedDiagnosis?: CodeableConcept[];
        /**
         * Entire Report as issued
         */
        presentedForm?: Attachment[];
    }
    /**
     * Possible or likely findings and diagnoses
     */
    interface ClinicalImpressionFinding extends Element {
        /**
         * Specific text or code for finding
         */
        item: CodeableConcept;
        /**
         * Which investigations support finding
         */
        cause?: string;
        /**
         * Contains cause's id, extensions, and comments.
         */
        _cause?: Element;
    }
    /**
     * Diagnosis considered not possible
     */
    interface ClinicalImpressionRuledOut extends Element {
        /**
         * Specific text of code for diagnosis
         */
        item: CodeableConcept;
        /**
         * Grounds for elimination
         */
        reason?: string;
        /**
         * Contains reason's id, extensions, and comments.
         */
        _reason?: Element;
    }
    /**
     * Message payload
     */
    interface CommunicationRequestPayload extends Element {
        /**
         * Message part content
         */
        contentString?: string;
        /**
         * Contains contentString's id, extensions, and comments.
         */
        _contentString?: Element;
        /**
         * Message part content
         */
        contentAttachment?: Attachment;
        /**
         * Message part content
         */
        contentReference?: Reference;
    }
    /**
     * A request for information to be sent to a receiver
     */
    interface CommunicationRequest extends DomainResource {
        /**
         * Unique identifier
         */
        identifier?: Identifier[];
        /**
         * Message category
         */
        category?: CodeableConcept;
        /**
         * Message sender
         */
        sender?: Reference;
        /**
         * Message recipient
         */
        recipient?: Reference[];
        /**
         * Message payload
         */
        payload?: CommunicationRequestPayload[];
        /**
         * A channel of communication
         */
        medium?: CodeableConcept[];
        /**
         * An individual who requested a communication
         */
        requester?: Reference;
        /**
         * proposed | planned | requested | received | accepted | in-progress | completed | suspended | rejected | failed
         */
        status?: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * Encounter leading to message
         */
        encounter?: Reference;
        /**
         * When scheduled
         */
        scheduledDateTime?: dateTime;
        /**
         * Contains scheduledDateTime's id, extensions, and comments.
         */
        _scheduledDateTime?: Element;
        /**
         * When scheduled
         */
        scheduledPeriod?: Period;
        /**
         * Indication for message
         */
        reason?: CodeableConcept[];
        /**
         * When ordered or proposed
         */
        requestedOn?: dateTime;
        /**
         * Contains requestedOn's id, extensions, and comments.
         */
        _requestedOn?: Element;
        /**
         * Focus of message
         */
        subject?: Reference;
        /**
         * Message urgency
         */
        priority?: CodeableConcept;
    }
    /**
     * A request for a patient to use or be given a medical device
     */
    interface DeviceUseRequest extends DomainResource {
        /**
         * Target body site
         */
        bodySiteCodeableConcept?: CodeableConcept;
        /**
         * Target body site
         */
        bodySiteReference?: Reference;
        /**
         * proposed | planned | requested | received | accepted | in-progress | completed | suspended | rejected | aborted
         */
        status?: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * Device requested
         */
        device: Reference;
        /**
         * Encounter motivating request
         */
        encounter?: Reference;
        /**
         * Request identifier
         */
        identifier?: Identifier[];
        /**
         * Reason for request
         */
        indication?: CodeableConcept[];
        /**
         * Notes or comments
         */
        notes?: string[];
        /**
         * Contains notes's id, extensions, and comments.
         */
        _notes?: Element[];
        /**
         * PRN
         */
        prnReason?: CodeableConcept[];
        /**
         * When ordered
         */
        orderedOn?: dateTime;
        /**
         * Contains orderedOn's id, extensions, and comments.
         */
        _orderedOn?: Element;
        /**
         * When recorded
         */
        recordedOn?: dateTime;
        /**
         * Contains recordedOn's id, extensions, and comments.
         */
        _recordedOn?: Element;
        /**
         * Focus of request
         */
        subject: Reference;
        /**
         * Schedule for use
         */
        timingTiming?: Timing;
        /**
         * Schedule for use
         */
        timingPeriod?: Period;
        /**
         * Schedule for use
         */
        timingDateTime?: dateTime;
        /**
         * Contains timingDateTime's id, extensions, and comments.
         */
        _timingDateTime?: Element;
        /**
         * routine | urgent | stat | asap
         */
        priority?: code;
        /**
         * Contains priority's id, extensions, and comments.
         */
        _priority?: Element;
    }
    /**
     * How medication should be taken
     */
    interface MedicationOrderDosageInstruction extends Element {
        /**
         * Dosage instructions expressed as text
         */
        text?: string;
        /**
         * Contains text's id, extensions, and comments.
         */
        _text?: Element;
        /**
         * Supplemental instructions - e.g. "with meals"
         */
        additionalInstructions?: CodeableConcept;
        /**
         * When medication should be administered
         */
        timing?: Timing;
        /**
         * Take "as needed" (for x)
         */
        asNeededBoolean?: boolean;
        /**
         * Contains asNeededBoolean's id, extensions, and comments.
         */
        _asNeededBoolean?: Element;
        /**
         * Take "as needed" (for x)
         */
        asNeededCodeableConcept?: CodeableConcept;
        /**
         * Body site to administer to
         */
        siteCodeableConcept?: CodeableConcept;
        /**
         * Body site to administer to
         */
        siteReference?: Reference;
        /**
         * How drug should enter body
         */
        route?: CodeableConcept;
        /**
         * Technique for administering medication
         */
        method?: CodeableConcept;
        /**
         * Amount of medication per dose
         */
        doseRange?: Range;
        /**
         * Amount of medication per dose
         */
        doseQuantity?: Quantity;
        /**
         * Amount of medication per unit of time
         */
        rateRatio?: Ratio;
        /**
         * Amount of medication per unit of time
         */
        rateRange?: Range;
        /**
         * Upper limit on medication per unit of time
         */
        maxDosePerPeriod?: Ratio;
    }
    /**
     * Medication supply authorization
     */
    interface MedicationOrderDispenseRequest extends Element {
        /**
         * Product to be supplied
         */
        medicationCodeableConcept?: CodeableConcept;
        /**
         * Product to be supplied
         */
        medicationReference?: Reference;
        /**
         * Time period supply is authorized for
         */
        validityPeriod?: Period;
        /**
         * # of refills authorized
         */
        numberOfRepeatsAllowed?: positiveInt;
        /**
         * Contains numberOfRepeatsAllowed's id, extensions, and comments.
         */
        _numberOfRepeatsAllowed?: Element;
        /**
         * Amount of medication to supply per dispense
         */
        quantity?: Quantity;
        /**
         * Days supply per dispense
         */
        expectedSupplyDuration?: Quantity;
    }
    /**
     * Any restrictions on medication substitution?
     */
    interface MedicationOrderSubstitution extends Element {
        /**
         * generic | formulary +
         */
        type: CodeableConcept;
        /**
         * Why should substitution (not) be made
         */
        reason?: CodeableConcept;
    }
    /**
     * Prescription of medication to for patient
     */
    interface MedicationOrder extends DomainResource {
        /**
         * External identifier
         */
        identifier?: Identifier[];
        /**
         * When prescription was authorized
         */
        dateWritten?: dateTime;
        /**
         * Contains dateWritten's id, extensions, and comments.
         */
        _dateWritten?: Element;
        /**
         * active | on-hold | completed | entered-in-error | stopped | draft
         */
        status?: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * When prescription was stopped
         */
        dateEnded?: dateTime;
        /**
         * Contains dateEnded's id, extensions, and comments.
         */
        _dateEnded?: Element;
        /**
         * Why prescription was stopped
         */
        reasonEnded?: CodeableConcept;
        /**
         * Who prescription is for
         */
        patient?: Reference;
        /**
         * Who ordered the medication(s)
         */
        prescriber?: Reference;
        /**
         * Created during encounter / admission / stay
         */
        encounter?: Reference;
        /**
         * Reason or indication for writing the prescription
         */
        reasonCodeableConcept?: CodeableConcept;
        /**
         * Reason or indication for writing the prescription
         */
        reasonReference?: Reference;
        /**
         * Information about the prescription
         */
        note?: string;
        /**
         * Contains note's id, extensions, and comments.
         */
        _note?: Element;
        /**
         * Medication to be taken
         */
        medicationCodeableConcept?: CodeableConcept;
        /**
         * Medication to be taken
         */
        medicationReference?: Reference;
        /**
         * How medication should be taken
         */
        dosageInstruction?: MedicationOrderDosageInstruction[];
        /**
         * Medication supply authorization
         */
        dispenseRequest?: MedicationOrderDispenseRequest;
        /**
         * Any restrictions on medication substitution?
         */
        substitution?: MedicationOrderSubstitution;
        /**
         * An order/prescription that this supersedes
         */
        priorPrescription?: Reference;
    }
    /**
     * Oral diet components
     */
    interface NutritionOrderOralDiet extends Element {
        /**
         * Type of oral diet or diet restrictions that describe what can be consumed orally
         */
        type?: CodeableConcept[];
        /**
         * Scheduled frequency of diet
         */
        schedule?: Timing[];
        /**
         * Required  nutrient modifications
         */
        nutrient?: NutritionOrderOralDietNutrient[];
        /**
         * Required  texture modifications
         */
        texture?: NutritionOrderOralDietTexture[];
        /**
         * The required consistency of fluids and liquids provided to the patient
         */
        fluidConsistencyType?: CodeableConcept[];
        /**
         * Instructions or additional information about the oral diet
         */
        instruction?: string;
        /**
         * Contains instruction's id, extensions, and comments.
         */
        _instruction?: Element;
    }
    /**
     * Required  nutrient modifications
     */
    interface NutritionOrderOralDietNutrient extends Element {
        /**
         * Type of nutrient that is being modified
         */
        modifier?: CodeableConcept;
        /**
         * Quantity of the specified nutrient
         */
        amount?: Quantity;
    }
    /**
     * Required  texture modifications
     */
    interface NutritionOrderOralDietTexture extends Element {
        /**
         * Code to indicate how to alter the texture of the foods, e.g., pureed
         */
        modifier?: CodeableConcept;
        /**
         * Concepts that are used to identify an entity that is ingested for nutritional purposes
         */
        foodType?: CodeableConcept;
    }
    /**
     * Supplement components
     */
    interface NutritionOrderSupplement extends Element {
        /**
         * Type of supplement product requested
         */
        type?: CodeableConcept;
        /**
         * Product or brand name of the nutritional supplement
         */
        productName?: string;
        /**
         * Contains productName's id, extensions, and comments.
         */
        _productName?: Element;
        /**
         * Scheduled frequency of supplement
         */
        schedule?: Timing[];
        /**
         * Amount of the nutritional supplement
         */
        quantity?: Quantity;
        /**
         * Instructions or additional information about the oral supplement
         */
        instruction?: string;
        /**
         * Contains instruction's id, extensions, and comments.
         */
        _instruction?: Element;
    }
    /**
     * Enteral formula components
     */
    interface NutritionOrderEnteralFormula extends Element {
        /**
         * Type of enteral or infant formula
         */
        baseFormulaType?: CodeableConcept;
        /**
         * Product or brand name of the enteral or infant formula
         */
        baseFormulaProductName?: string;
        /**
         * Contains baseFormulaProductName's id, extensions, and comments.
         */
        _baseFormulaProductName?: Element;
        /**
         * Type of modular component to add to the feeding
         */
        additiveType?: CodeableConcept;
        /**
         * Product or brand name of the modular additive
         */
        additiveProductName?: string;
        /**
         * Contains additiveProductName's id, extensions, and comments.
         */
        _additiveProductName?: Element;
        /**
         * Amount of energy per specified volume that is required
         */
        caloricDensity?: Quantity;
        /**
         * How the formula should enter the patient's gastrointestinal tract
         */
        routeofAdministration?: CodeableConcept;
        /**
         * Formula feeding instruction as structured data
         */
        administration?: NutritionOrderEnteralFormulaAdministration[];
        /**
         * Upper limit on formula volume per unit of time
         */
        maxVolumeToDeliver?: Quantity;
        /**
         * Formula feeding instructions expressed as text
         */
        administrationInstruction?: string;
        /**
         * Contains administrationInstruction's id, extensions, and comments.
         */
        _administrationInstruction?: Element;
    }
    /**
     * Formula feeding instruction as structured data
     */
    interface NutritionOrderEnteralFormulaAdministration extends Element {
        /**
         * Scheduled frequency of enteral feeding
         */
        schedule?: Timing;
        /**
         * The volume of formula to provide
         */
        quantity?: Quantity;
        /**
         * Speed with which the formula is provided per period of time
         */
        rateQuantity?: Quantity;
        /**
         * Speed with which the formula is provided per period of time
         */
        rateRatio?: Ratio;
    }
    /**
     * A request for a diet, formula or nutritional supplement
     */
    interface NutritionOrder extends DomainResource {
        /**
         * The person who requires the diet, formula or nutritional supplement
         */
        patient: Reference;
        /**
         * Who ordered the diet, formula or nutritional supplement
         */
        orderer?: Reference;
        /**
         * Identifiers assigned to this order
         */
        identifier?: Identifier[];
        /**
         * The encounter associated with that this nutrition order
         */
        encounter?: Reference;
        /**
         * Date and time the nutrition order was requested
         */
        dateTime: dateTime;
        /**
         * Contains dateTime's id, extensions, and comments.
         */
        _dateTime?: Element;
        /**
         * proposed | draft | planned | requested | active | on-hold | completed | cancelled
         */
        status?: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * List of the patient's food and nutrition-related allergies and intolerances
         */
        allergyIntolerance?: Reference[];
        /**
         * Order-specific modifier about the type of food that should be given
         */
        foodPreferenceModifier?: CodeableConcept[];
        /**
         * Order-specific modifier about the type of food that should not be given
         */
        excludeFoodModifier?: CodeableConcept[];
        /**
         * Oral diet components
         */
        oralDiet?: NutritionOrderOralDiet;
        /**
         * Supplement components
         */
        supplement?: NutritionOrderSupplement[];
        /**
         * Enteral formula components
         */
        enteralFormula?: NutritionOrderEnteralFormula;
    }
    /**
     * When order should be fulfilled
     */
    interface OrderWhen extends Element {
        /**
         * Code specifies when request should be done. The code may simply be a priority code
         */
        code?: CodeableConcept;
        /**
         * A formal schedule
         */
        schedule?: Timing;
    }
    /**
     * A request to perform an action
     */
    interface Order extends DomainResource {
        /**
         * Identifiers assigned to this order by the orderer or by the receiver
         */
        identifier?: Identifier[];
        /**
         * When the order was made
         */
        date?: dateTime;
        /**
         * Contains date's id, extensions, and comments.
         */
        _date?: Element;
        /**
         * Patient this order is about
         */
        subject?: Reference;
        /**
         * Who initiated the order
         */
        source?: Reference;
        /**
         * Who is intended to fulfill the order
         */
        target?: Reference;
        /**
         * Text - why the order was made
         */
        reasonCodeableConcept?: CodeableConcept;
        /**
         * Text - why the order was made
         */
        reasonReference?: Reference;
        /**
         * When order should be fulfilled
         */
        when?: OrderWhen;
        /**
         * What action is being ordered
         */
        detail: Reference[];
    }
    /**
     * Items to re-adjudicate
     */
    interface ProcessRequestItem extends Element {
        /**
         * Service instance
         */
        sequenceLinkId: integer;
        /**
         * Contains sequenceLinkId's id, extensions, and comments.
         */
        _sequenceLinkId?: Element;
    }
    /**
     * Process request
     */
    interface ProcessRequest extends DomainResource {
        /**
         * cancel | poll | reprocess | status
         */
        action: code;
        /**
         * Contains action's id, extensions, and comments.
         */
        _action?: Element;
        /**
         * Business Identifier
         */
        identifier?: Identifier[];
        /**
         * Resource version
         */
        ruleset?: Coding;
        /**
         * Original version
         */
        originalRuleset?: Coding;
        /**
         * Creation date
         */
        created?: dateTime;
        /**
         * Contains created's id, extensions, and comments.
         */
        _created?: Element;
        /**
         * Target of the request
         */
        target?: Reference;
        /**
         * Responsible practitioner
         */
        provider?: Reference;
        /**
         * Responsible organization
         */
        organization?: Reference;
        /**
         * Request reference
         */
        request?: Reference;
        /**
         * Response reference
         */
        response?: Reference;
        /**
         * Nullify
         */
        nullify?: boolean;
        /**
         * Contains nullify's id, extensions, and comments.
         */
        _nullify?: Element;
        /**
         * Reference number/string
         */
        reference?: string;
        /**
         * Contains reference's id, extensions, and comments.
         */
        _reference?: Element;
        /**
         * Items to re-adjudicate
         */
        item?: ProcessRequestItem[];
        /**
         * Resource type(s) to include
         */
        include?: string[];
        /**
         * Contains include's id, extensions, and comments.
         */
        _include?: Element[];
        /**
         * Resource type(s) to exclude
         */
        exclude?: string[];
        /**
         * Contains exclude's id, extensions, and comments.
         */
        _exclude?: Element[];
        /**
         * Period
         */
        period?: Period;
    }
    /**
     * When the request should be fulfilled
     */
    interface SupplyRequestWhen extends Element {
        /**
         * Fulfilment code
         */
        code?: CodeableConcept;
        /**
         * Formal fulfillment schedule
         */
        schedule?: Timing;
    }
    /**
     * Request for a medication, substance or device
     */
    interface SupplyRequest extends DomainResource {
        /**
         * Patient for whom the item is supplied
         */
        patient?: Reference;
        /**
         * Who initiated this order
         */
        source?: Reference;
        /**
         * When the request was made
         */
        date?: dateTime;
        /**
         * Contains date's id, extensions, and comments.
         */
        _date?: Element;
        /**
         * Unique identifier
         */
        identifier?: Identifier;
        /**
         * requested | completed | failed | cancelled
         */
        status?: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * The kind of supply (central, non-stock, etc)
         */
        kind?: CodeableConcept;
        /**
         * Medication, Substance, or Device requested to be supplied
         */
        orderedItem?: Reference;
        /**
         * Who is intended to fulfill the request
         */
        supplier?: Reference[];
        /**
         * Why the supply item was requested
         */
        reasonCodeableConcept?: CodeableConcept;
        /**
         * Why the supply item was requested
         */
        reasonReference?: Reference;
        /**
         * When the request should be fulfilled
         */
        when?: SupplyRequestWhen;
    }
    /**
     * Vision supply authorization
     */
    interface VisionPrescriptionDispense extends Element {
        /**
         * Product to be supplied
         */
        product: Coding;
        /**
         * right | left
         */
        eye?: code;
        /**
         * Contains eye's id, extensions, and comments.
         */
        _eye?: Element;
        /**
         * Lens sphere
         */
        sphere?: decimal;
        /**
         * Contains sphere's id, extensions, and comments.
         */
        _sphere?: Element;
        /**
         * Lens cylinder
         */
        cylinder?: decimal;
        /**
         * Contains cylinder's id, extensions, and comments.
         */
        _cylinder?: Element;
        /**
         * Lens axis
         */
        axis?: integer;
        /**
         * Contains axis's id, extensions, and comments.
         */
        _axis?: Element;
        /**
         * Lens prism
         */
        prism?: decimal;
        /**
         * Contains prism's id, extensions, and comments.
         */
        _prism?: Element;
        /**
         * up | down | in | out
         */
        base?: code;
        /**
         * Contains base's id, extensions, and comments.
         */
        _base?: Element;
        /**
         * Lens add
         */
        add?: decimal;
        /**
         * Contains add's id, extensions, and comments.
         */
        _add?: Element;
        /**
         * Contact Lens power
         */
        power?: decimal;
        /**
         * Contains power's id, extensions, and comments.
         */
        _power?: Element;
        /**
         * Contact lens back curvature
         */
        backCurve?: decimal;
        /**
         * Contains backCurve's id, extensions, and comments.
         */
        _backCurve?: Element;
        /**
         * Contact Lens diameter
         */
        diameter?: decimal;
        /**
         * Contains diameter's id, extensions, and comments.
         */
        _diameter?: Element;
        /**
         * Lens wear duration
         */
        duration?: Quantity;
        /**
         * Lens add
         */
        color?: string;
        /**
         * Contains color's id, extensions, and comments.
         */
        _color?: Element;
        /**
         * Lens add
         */
        brand?: string;
        /**
         * Contains brand's id, extensions, and comments.
         */
        _brand?: Element;
        /**
         * Notes for coatings
         */
        notes?: string;
        /**
         * Contains notes's id, extensions, and comments.
         */
        _notes?: Element;
    }
    /**
     * Prescription for Vision correction products for a patient
     */
    interface VisionPrescription extends DomainResource {
        /**
         * Business identifier
         */
        identifier?: Identifier[];
        /**
         * When prescription was authorized
         */
        dateWritten?: dateTime;
        /**
         * Contains dateWritten's id, extensions, and comments.
         */
        _dateWritten?: Element;
        /**
         * Who prescription is for
         */
        patient?: Reference;
        /**
         * Who authorizes the Vision product
         */
        prescriber?: Reference;
        /**
         * Created during encounter / admission / stay
         */
        encounter?: Reference;
        /**
         * Reason or indication for writing the prescription
         */
        reasonCodeableConcept?: CodeableConcept;
        /**
         * Reason or indication for writing the prescription
         */
        reasonReference?: Reference;
        /**
         * Vision supply authorization
         */
        dispense?: VisionPrescriptionDispense[];
    }
    /**
     * A clinical assessment performed when planning treatments and management strategies for a patient
     */
    interface ClinicalImpression extends DomainResource {
        /**
         * The patient being assessed
         */
        patient: Reference;
        /**
         * The clinician performing the assessment
         */
        assessor?: Reference;
        /**
         * in-progress | completed | entered-in-error
         */
        status: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * When the assessment occurred
         */
        date?: dateTime;
        /**
         * Contains date's id, extensions, and comments.
         */
        _date?: Element;
        /**
         * Why/how the assessment was performed
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * Reference to last assessment
         */
        previous?: Reference;
        /**
         * General assessment of patient state
         */
        problem?: Reference[];
        /**
         * Request or event that necessitated this assessment
         */
        triggerCodeableConcept?: CodeableConcept;
        /**
         * Request or event that necessitated this assessment
         */
        triggerReference?: Reference;
        /**
         * One or more sets of investigations (signs, symptions, etc)
         */
        investigations?: ClinicalImpressionInvestigations[];
        /**
         * Clinical Protocol followed
         */
        protocol?: uri;
        /**
         * Contains protocol's id, extensions, and comments.
         */
        _protocol?: Element;
        /**
         * Summary of the assessment
         */
        summary?: string;
        /**
         * Contains summary's id, extensions, and comments.
         */
        _summary?: Element;
        /**
         * Possible or likely findings and diagnoses
         */
        finding?: ClinicalImpressionFinding[];
        /**
         * Diagnosies/conditions resolved since previous assessment
         */
        resolved?: CodeableConcept[];
        /**
         * Diagnosis considered not possible
         */
        ruledOut?: ClinicalImpressionRuledOut[];
        /**
         * Estimate of likely outcome
         */
        prognosis?: string;
        /**
         * Contains prognosis's id, extensions, and comments.
         */
        _prognosis?: Element;
        /**
         * Plan of action after assessment
         */
        plan?: Reference[];
        /**
         * Actions taken during assessment
         */
        action?: Reference[];
    }
    /**
     * Supporting evidence
     */
    interface ConditionEvidence extends Element {
        /**
         * Manifestation/symptom
         */
        code?: CodeableConcept;
        /**
         * Supporting information found elsewhere
         */
        detail?: Reference[];
    }
    /**
     * Detailed information about conditions, problems or diagnoses
     */
    interface Condition extends DomainResource {
        /**
         * External Ids for this condition
         */
        identifier?: Identifier[];
        /**
         * Who has the condition?
         */
        patient: Reference;
        /**
         * Encounter when condition first asserted
         */
        encounter?: Reference;
        /**
         * Person who asserts this condition
         */
        asserter?: Reference;
        /**
         * When first entered
         */
        dateRecorded?: date;
        /**
         * Contains dateRecorded's id, extensions, and comments.
         */
        _dateRecorded?: Element;
        /**
         * Identification of the condition, problem or diagnosis
         */
        code: CodeableConcept;
        /**
         * complaint | symptom | finding | diagnosis
         */
        category?: CodeableConcept;
        /**
         * active | relapse | remission | resolved
         */
        clinicalStatus?: code;
        /**
         * Contains clinicalStatus's id, extensions, and comments.
         */
        _clinicalStatus?: Element;
        /**
         * provisional | differential | confirmed | refuted | entered-in-error | unknown
         */
        verificationStatus: code;
        /**
         * Contains verificationStatus's id, extensions, and comments.
         */
        _verificationStatus?: Element;
        /**
         * Subjective severity of condition
         */
        severity?: CodeableConcept;
        /**
         * Estimated or actual date,  date-time, or age
         */
        onsetDateTime?: dateTime;
        /**
         * Contains onsetDateTime's id, extensions, and comments.
         */
        _onsetDateTime?: Element;
        /**
         * Estimated or actual date,  date-time, or age
         */
        onsetQuantity?: Quantity;
        /**
         * Estimated or actual date,  date-time, or age
         */
        onsetPeriod?: Period;
        /**
         * Estimated or actual date,  date-time, or age
         */
        onsetRange?: Range;
        /**
         * Estimated or actual date,  date-time, or age
         */
        onsetString?: string;
        /**
         * Contains onsetString's id, extensions, and comments.
         */
        _onsetString?: Element;
        /**
         * If/when in resolution/remission
         */
        abatementDateTime?: dateTime;
        /**
         * Contains abatementDateTime's id, extensions, and comments.
         */
        _abatementDateTime?: Element;
        /**
         * If/when in resolution/remission
         */
        abatementQuantity?: Quantity;
        /**
         * If/when in resolution/remission
         */
        abatementBoolean?: boolean;
        /**
         * Contains abatementBoolean's id, extensions, and comments.
         */
        _abatementBoolean?: Element;
        /**
         * If/when in resolution/remission
         */
        abatementPeriod?: Period;
        /**
         * If/when in resolution/remission
         */
        abatementRange?: Range;
        /**
         * If/when in resolution/remission
         */
        abatementString?: string;
        /**
         * Contains abatementString's id, extensions, and comments.
         */
        _abatementString?: Element;
        /**
         * Stage/grade, usually assessed formally
         */
        stage?: ConditionStage;
        /**
         * Supporting evidence
         */
        evidence?: ConditionEvidence[];
        /**
         * Anatomical location, if relevant
         */
        bodySite?: CodeableConcept[];
        /**
         * Additional information about the Condition
         */
        notes?: string;
        /**
         * Contains notes's id, extensions, and comments.
         */
        _notes?: Element;
    }
    /**
     * The list of practitioners that may be facilitating this episode of care for specific purposes
     */
    interface EpisodeOfCareCareTeam extends Element {
        /**
         * The role that this team member is taking within this episode of care
         */
        role?: CodeableConcept[];
        /**
         * The period of time that this practitioner is performing some role within the episode of care
         */
        period?: Period;
        /**
         * The practitioner (or Organization) within the team
         */
        member?: Reference;
    }
    /**
     * An association of a Patient with an Organization and  Healthcare Provider(s) for a period of time that the Organization assumes some level of responsibility
     */
    interface EpisodeOfCare extends DomainResource {
        /**
         * Identifier(s) by which this EpisodeOfCare is known
         */
        identifier?: Identifier[];
        /**
         * planned | waitlist | active | onhold | finished | cancelled
         */
        status: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource)
         */
        statusHistory?: EpisodeOfCareStatusHistory[];
        /**
         * Specific type of EpisodeOfCare
         */
        type?: CodeableConcept[];
        /**
         * A list of conditions/problems/diagnoses that this episode of care is intended to be providing care for
         */
        condition?: Reference[];
        /**
         * The patient that this EpisodeOfCare applies to
         */
        patient: Reference;
        /**
         * The organization that has assumed the specific responsibilities for the specified duration
         */
        managingOrganization?: Reference;
        /**
         * The interval during which the managing organization assumes the defined responsibility
         */
        period?: Period;
        /**
         * Referral Request(s) that this EpisodeOfCare manages activities within
         */
        referralRequest?: Reference[];
        /**
         * The practitioner that is the care manager/care co-ordinator for this patient
         */
        careManager?: Reference;
        /**
         * The list of practitioners that may be facilitating this episode of care for specific purposes
         */
        careTeam?: EpisodeOfCareCareTeam[];
    }
    /**
     * List of participants involved in the encounter
     */
    interface EncounterParticipant extends Element {
        /**
         * Role of participant in encounter
         */
        type?: CodeableConcept[];
        /**
         * Period of time during the encounter participant was present
         */
        period?: Period;
        /**
         * Persons involved in the encounter other than the patient
         */
        individual?: Reference;
    }
    /**
     * Details about the admission to a healthcare service
     */
    interface EncounterHospitalization extends Element {
        /**
         * Pre-admission identifier
         */
        preAdmissionIdentifier?: Identifier;
        /**
         * The location from which the patient came before admission
         */
        origin?: Reference;
        /**
         * From where patient was admitted (physician referral, transfer)
         */
        admitSource?: CodeableConcept;
        /**
         * The admitting Diagnosis as reported by admitting practitioner
         */
        admittingDiagnosis?: Reference[];
        /**
         * The type of hospital re-admission that has occurred (if any). If the value is absent, then this is not identified as a readmission
         */
        reAdmission?: CodeableConcept;
        /**
         * Diet preferences reported by the patient
         */
        dietPreference?: CodeableConcept[];
        /**
         * Special courtesies (VIP, board member)
         */
        specialCourtesy?: CodeableConcept[];
        /**
         * Wheelchair, translator, stretcher, etc
         */
        specialArrangement?: CodeableConcept[];
        /**
         * Location to which the patient is discharged
         */
        destination?: Reference;
        /**
         * Category or kind of location after discharge
         */
        dischargeDisposition?: CodeableConcept;
        /**
         * The final diagnosis given a patient before release from the hospital after all testing, surgery, and workup are complete
         */
        dischargeDiagnosis?: Reference[];
    }
    /**
     * List of locations the patient has been at
     */
    interface EncounterLocation extends Element {
        /**
         * Location the encounter takes place
         */
        location: Reference;
        /**
         * planned | active | reserved | completed
         */
        status?: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * Time period during which the patient was present at the location
         */
        period?: Period;
    }
    /**
     * An interaction during which services are provided to the patient
     */
    interface Encounter extends DomainResource {
        /**
         * Identifier(s) by which this encounter is known
         */
        identifier?: Identifier[];
        /**
         * planned | arrived | in-progress | onleave | finished | cancelled
         */
        status: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * List of Encounter statuses
         */
        statusHistory?: EncounterStatusHistory[];
        /**
         * inpatient | outpatient | ambulatory | emergency +
         */
        class?: code;
        /**
         * Contains class's id, extensions, and comments.
         */
        _class?: Element;
        /**
         * Specific type of encounter
         */
        type?: CodeableConcept[];
        /**
         * Indicates the urgency of the encounter
         */
        priority?: CodeableConcept;
        /**
         * The patient present at the encounter
         */
        patient?: Reference;
        /**
         * Episode(s) of care that this encounter should be recorded against
         */
        episodeOfCare?: Reference[];
        /**
         * The Referral that initiated this encounter
         */
        incomingReferral?: Reference[];
        /**
         * List of participants involved in the encounter
         */
        participant?: EncounterParticipant[];
        /**
         * The appointment that scheduled this encounter
         */
        appointment?: Reference;
        /**
         * The start and end time of the encounter
         */
        period?: Period;
        /**
         * Quantity of time the encounter lasted (less time absent)
         */
        length?: Quantity;
        /**
         * Reason the encounter takes place (code)
         */
        reason?: CodeableConcept[];
        /**
         * Reason the encounter takes place (resource)
         */
        indication?: Reference[];
        /**
         * Details about the admission to a healthcare service
         */
        hospitalization?: EncounterHospitalization;
        /**
         * List of locations the patient has been at
         */
        location?: EncounterLocation[];
        /**
         * The custodian organization of this Encounter record
         */
        serviceProvider?: Reference;
        /**
         * Another Encounter this encounter is part of
         */
        partOf?: Reference;
    }
    /**
     * Plans related to this one
     */
    interface CarePlanRelatedPlan extends Element {
        /**
         * includes | replaces | fulfills
         */
        code?: code;
        /**
         * Contains code's id, extensions, and comments.
         */
        _code?: Element;
        /**
         * Plan relationship exists with
         */
        plan: Reference;
    }
    /**
     * Who's involved in plan?
     */
    interface CarePlanParticipant extends Element {
        /**
         * Type of involvement
         */
        role?: CodeableConcept;
        /**
         * Who is involved
         */
        member?: Reference;
    }
    /**
     * Details of how medication was taken
     */
    interface MedicationStatementDosage extends Element {
        /**
         * Reported dosage information
         */
        text?: string;
        /**
         * Contains text's id, extensions, and comments.
         */
        _text?: Element;
        /**
         * When/how often was medication taken?
         */
        timing?: Timing;
        /**
         * Take "as needed" f(or x)
         */
        asNeededBoolean?: boolean;
        /**
         * Contains asNeededBoolean's id, extensions, and comments.
         */
        _asNeededBoolean?: Element;
        /**
         * Take "as needed" f(or x)
         */
        asNeededCodeableConcept?: CodeableConcept;
        /**
         * Where on body was medication administered?
         */
        siteCodeableConcept?: CodeableConcept;
        /**
         * Where on body was medication administered?
         */
        siteReference?: Reference;
        /**
         * How did the medication enter the body?
         */
        route?: CodeableConcept;
        /**
         * Technique used to administer medication
         */
        method?: CodeableConcept;
        /**
         * Amount administered in one dose
         */
        quantityQuantity?: Quantity;
        /**
         * Amount administered in one dose
         */
        quantityRange?: Range;
        /**
         * Dose quantity per unit of time
         */
        rateRatio?: Ratio;
        /**
         * Dose quantity per unit of time
         */
        rateRange?: Range;
        /**
         * Maximum dose that was consumed per unit of time
         */
        maxDosePerPeriod?: Ratio;
    }
    /**
     * Record of medication being taken by a patient
     */
    interface MedicationStatement extends DomainResource {
        /**
         * External Identifier
         */
        identifier?: Identifier[];
        /**
         * Who was/is taking medication
         */
        patient: Reference;
        informationSource?: Reference;
        /**
         * When the statement was asserted?
         */
        dateAsserted?: dateTime;
        /**
         * Contains dateAsserted's id, extensions, and comments.
         */
        _dateAsserted?: Element;
        /**
         * active | completed | entered-in-error | intended
         */
        status: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * True if medication is/was not being taken
         */
        wasNotTaken?: boolean;
        /**
         * Contains wasNotTaken's id, extensions, and comments.
         */
        _wasNotTaken?: Element;
        /**
         * True if asserting medication was not given
         */
        reasonNotTaken?: CodeableConcept[];
        reasonForUseCodeableConcept?: CodeableConcept;
        reasonForUseReference?: Reference;
        /**
         * Over what period was medication consumed?
         */
        effectiveDateTime?: dateTime;
        /**
         * Contains effectiveDateTime's id, extensions, and comments.
         */
        _effectiveDateTime?: Element;
        /**
         * Over what period was medication consumed?
         */
        effectivePeriod?: Period;
        /**
         * Further information about the statement
         */
        note?: string;
        /**
         * Contains note's id, extensions, and comments.
         */
        _note?: Element;
        /**
         * Additional supporting information
         */
        supportingInformation?: Reference[];
        /**
         * What medication was taken?
         */
        medicationCodeableConcept?: CodeableConcept;
        /**
         * What medication was taken?
         */
        medicationReference?: Reference;
        /**
         * Details of how medication was taken
         */
        dosage?: MedicationStatementDosage[];
    }
    /**
     * Outcome predicted
     */
    interface RiskAssessmentPrediction extends Element {
        /**
         * Possible outcome for the subject
         */
        outcome: CodeableConcept;
        /**
         * Likelihood of specified outcome
         */
        probabilityDecimal?: decimal;
        /**
         * Contains probabilityDecimal's id, extensions, and comments.
         */
        _probabilityDecimal?: Element;
        /**
         * Likelihood of specified outcome
         */
        probabilityRange?: Range;
        /**
         * Likelihood of specified outcome
         */
        probabilityCodeableConcept?: CodeableConcept;
        /**
         * Relative likelihood
         */
        relativeRisk?: decimal;
        /**
         * Contains relativeRisk's id, extensions, and comments.
         */
        _relativeRisk?: Element;
        /**
         * Timeframe or age range
         */
        whenPeriod?: Period;
        /**
         * Timeframe or age range
         */
        whenRange?: Range;
        /**
         * Explanation of prediction
         */
        rationale?: string;
        /**
         * Contains rationale's id, extensions, and comments.
         */
        _rationale?: Element;
    }
    /**
     * Potential outcomes for a subject with likelihood
     */
    interface RiskAssessment extends DomainResource {
        /**
         * Who/what does assessment apply to?
         */
        subject?: Reference;
        /**
         * When was assessment made?
         */
        date?: dateTime;
        /**
         * Contains date's id, extensions, and comments.
         */
        _date?: Element;
        /**
         * Condition assessed
         */
        condition?: Reference;
        /**
         * Where was assessment performed?
         */
        encounter?: Reference;
        /**
         * Who did assessment?
         */
        performer?: Reference;
        /**
         * Unique identifier for the assessment
         */
        identifier?: Identifier;
        /**
         * Evaluation mechanism
         */
        method?: CodeableConcept;
        /**
         * Information used in assessment
         */
        basis?: Reference[];
        /**
         * Outcome predicted
         */
        prediction?: RiskAssessmentPrediction[];
        /**
         * How to reduce risk
         */
        mitigation?: string;
        /**
         * Contains mitigation's id, extensions, and comments.
         */
        _mitigation?: Element;
    }
    /**
     * What was end result of goal?
     */
    interface GoalOutcome extends Element {
        /**
         * Code or observation that resulted from goal
         */
        resultCodeableConcept?: CodeableConcept;
        /**
         * Code or observation that resulted from goal
         */
        resultReference?: Reference;
    }
    /**
     * Describes the intended objective(s) for a patient, group or organization
     */
    interface Goal extends DomainResource {
        /**
         * External Ids for this goal
         */
        identifier?: Identifier[];
        /**
         * Who this goal is intended for
         */
        subject?: Reference;
        /**
         * When goal pursuit begins
         */
        startDate?: date;
        /**
         * Contains startDate's id, extensions, and comments.
         */
        _startDate?: Element;
        /**
         * When goal pursuit begins
         */
        startCodeableConcept?: CodeableConcept;
        /**
         * Reach goal on or before
         */
        targetDate?: date;
        /**
         * Contains targetDate's id, extensions, and comments.
         */
        _targetDate?: Element;
        /**
         * Reach goal on or before
         */
        targetQuantity?: Quantity;
        /**
         * E.g. Treatment, dietary, behavioral, etc.
         */
        category?: CodeableConcept[];
        /**
         * What's the desired outcome?
         */
        description: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * proposed | planned | accepted | rejected | in-progress | achieved | sustaining | on-hold | cancelled
         */
        status: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * When goal status took effect
         */
        statusDate?: date;
        /**
         * Contains statusDate's id, extensions, and comments.
         */
        _statusDate?: Element;
        /**
         * Reason for current status
         */
        statusReason?: CodeableConcept;
        /**
         * Who's responsible for creating Goal?
         */
        author?: Reference;
        /**
         * high | medium |low
         */
        priority?: CodeableConcept;
        /**
         * Issues addressed by this goal
         */
        addresses?: Reference[];
        /**
         * Comments about the goal
         */
        note?: Annotation[];
        /**
         * What was end result of goal?
         */
        outcome?: GoalOutcome[];
    }
    /**
     * Action to occur as part of plan
     */
    interface CarePlanActivity extends Element {
        /**
         * Appointments, orders, etc.
         */
        actionResulting?: Reference[];
        /**
         * Comments about the activity status/progress
         */
        progress?: Annotation[];
        /**
         * Activity details defined in specific resource
         */
        reference?: Reference;
        /**
         * In-line definition of activity
         */
        detail?: CarePlanActivityDetail;
    }
    /**
     * In-line definition of activity
     */
    interface CarePlanActivityDetail extends Element {
        /**
         * diet | drug | encounter | observation | procedure | supply | other
         */
        category?: CodeableConcept;
        /**
         * Detail type of activity
         */
        code?: CodeableConcept;
        /**
         * Why activity should be done
         */
        reasonCode?: CodeableConcept[];
        /**
         * Condition triggering need for activity
         */
        reasonReference?: Reference[];
        /**
         * Goals this activity relates to
         */
        goal?: Reference[];
        /**
         * not-started | scheduled | in-progress | on-hold | completed | cancelled
         */
        status?: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * Reason for current status
         */
        statusReason?: CodeableConcept;
        /**
         * Do NOT do
         */
        prohibited: boolean;
        /**
         * Contains prohibited's id, extensions, and comments.
         */
        _prohibited?: Element;
        /**
         * When activity is to occur
         */
        scheduledTiming?: Timing;
        /**
         * When activity is to occur
         */
        scheduledPeriod?: Period;
        /**
         * When activity is to occur
         */
        scheduledString?: string;
        /**
         * Contains scheduledString's id, extensions, and comments.
         */
        _scheduledString?: Element;
        /**
         * Where it should happen
         */
        location?: Reference;
        /**
         * Who will be responsible?
         */
        performer?: Reference[];
        /**
         * What is to be administered/supplied
         */
        productCodeableConcept?: CodeableConcept;
        /**
         * What is to be administered/supplied
         */
        productReference?: Reference;
        /**
         * How to consume/day?
         */
        dailyAmount?: Quantity;
        /**
         * How much to administer/supply/consume
         */
        quantity?: Quantity;
        /**
         * Extra info describing activity to perform
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
    }
    /**
     * Healthcare plan for patient or group
     */
    interface CarePlan extends DomainResource {
        /**
         * External Ids for this plan
         */
        identifier?: Identifier[];
        /**
         * Who care plan is for
         */
        subject?: Reference;
        /**
         * proposed | draft | active | completed | cancelled
         */
        status: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * Created in context of
         */
        context?: Reference;
        /**
         * Time period plan covers
         */
        period?: Period;
        /**
         * Who is responsible for contents of the plan
         */
        author?: Reference[];
        /**
         * When last updated
         */
        modified?: dateTime;
        /**
         * Contains modified's id, extensions, and comments.
         */
        _modified?: Element;
        /**
         * Type of plan
         */
        category?: CodeableConcept[];
        /**
         * Summary of nature of plan
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * Health issues this plan addresses
         */
        addresses?: Reference[];
        /**
         * Information considered as part of plan
         */
        support?: Reference[];
        /**
         * Plans related to this one
         */
        relatedPlan?: CarePlanRelatedPlan[];
        /**
         * Who's involved in plan?
         */
        participant?: CarePlanParticipant[];
        /**
         * Desired outcome of plan
         */
        goal?: Reference[];
        /**
         * Action to occur as part of plan
         */
        activity?: CarePlanActivity[];
        /**
         * Comments about the plan
         */
        note?: Annotation;
    }
    /**
     * Payee
     */
    interface ClaimPayee extends Element {
        /**
         * Party to be paid any benefits payable
         */
        type?: Coding;
        /**
         * Provider who is the payee
         */
        provider?: Reference;
        /**
         * Organization who is the payee
         */
        organization?: Reference;
        /**
         * Other person who is the payee
         */
        person?: Reference;
    }
    /**
     * Diagnosis
     */
    interface ClaimDiagnosis extends Element {
        /**
         * Sequence of diagnosis
         */
        sequence: positiveInt;
        /**
         * Contains sequence's id, extensions, and comments.
         */
        _sequence?: Element;
        /**
         * Patient's list of diagnosis
         */
        diagnosis: Coding;
    }
    /**
     * Insurance or medical plan
     */
    interface ClaimCoverage extends Element {
        /**
         * Service instance identifier
         */
        sequence: positiveInt;
        /**
         * Contains sequence's id, extensions, and comments.
         */
        _sequence?: Element;
        /**
         * Is the focal Coverage
         */
        focal: boolean;
        /**
         * Contains focal's id, extensions, and comments.
         */
        _focal?: Element;
        /**
         * Insurance information
         */
        coverage: Reference;
        /**
         * Business agreement
         */
        businessArrangement?: string;
        /**
         * Contains businessArrangement's id, extensions, and comments.
         */
        _businessArrangement?: Element;
        /**
         * Patient relationship to subscriber
         */
        relationship: Coding;
        /**
         * Pre-Authorization/Determination Reference
         */
        preAuthRef?: string[];
        /**
         * Contains preAuthRef's id, extensions, and comments.
         */
        _preAuthRef?: Element[];
        /**
         * Adjudication results
         */
        claimResponse?: Reference;
        /**
         * Original version
         */
        originalRuleset?: Coding;
    }
    /**
     * Contract Actor
     */
    interface ContractActor extends Element {
        /**
         * Contract Actor Type
         */
        entity: Reference;
        /**
         * Contract  Actor Role
         */
        role?: CodeableConcept[];
    }
    /**
     * Contract Valued Item
     */
    interface ContractValuedItem extends Element {
        /**
         * Contract Valued Item Type
         */
        entityCodeableConcept?: CodeableConcept;
        /**
         * Contract Valued Item Type
         */
        entityReference?: Reference;
        /**
         * Contract Valued Item Identifier
         */
        identifier?: Identifier;
        /**
         * Contract Valued Item Effective Tiem
         */
        effectiveTime?: dateTime;
        /**
         * Contains effectiveTime's id, extensions, and comments.
         */
        _effectiveTime?: Element;
        /**
         * Count of Contract Valued Items
         */
        quantity?: Quantity;
        /**
         * Contract Valued Item fee, charge, or cost
         */
        unitPrice?: Quantity;
        /**
         * Contract Valued Item Price Scaling Factor
         */
        factor?: decimal;
        /**
         * Contains factor's id, extensions, and comments.
         */
        _factor?: Element;
        /**
         * Contract Valued Item Difficulty Scaling Factor
         */
        points?: decimal;
        /**
         * Contains points's id, extensions, and comments.
         */
        _points?: Element;
        /**
         * Total Contract Valued Item Value
         */
        net?: Quantity;
    }
    /**
     * Contract Signer
     */
    interface ContractSigner extends Element {
        /**
         * Contract Signer Type
         */
        type: Coding;
        /**
         * Contract Signatory Party
         */
        party: Reference;
        /**
         * Contract Documentation Signature
         */
        signature: string;
        /**
         * Contains signature's id, extensions, and comments.
         */
        _signature?: Element;
    }
    /**
     * Contract Term List
     */
    interface ContractTerm extends Element {
        /**
         * Contract Term identifier
         */
        identifier?: Identifier;
        /**
         * Contract Term Issue Date Time
         */
        issued?: dateTime;
        /**
         * Contains issued's id, extensions, and comments.
         */
        _issued?: Element;
        /**
         * Contract Term Effective Time
         */
        applies?: Period;
        /**
         * Contract Term Type
         */
        type?: CodeableConcept;
        /**
         * Contract Term Subtype
         */
        subType?: CodeableConcept;
        /**
         * Subject of this Contract Term
         */
        subject?: Reference;
        /**
         * Contract Term Action
         */
        action?: CodeableConcept[];
        /**
         * Contract Term Action Reason
         */
        actionReason?: CodeableConcept[];
        /**
         * Contract Term Actor List
         */
        actor?: ContractTermActor[];
        /**
         * Human readable Contract term text
         */
        text?: string;
        /**
         * Contains text's id, extensions, and comments.
         */
        _text?: Element;
        /**
         * Contract Term Valued Item
         */
        valuedItem?: ContractTermValuedItem[];
        /**
         * Nested Contract Term Group
         */
        group?: ContractTerm[];
    }
    /**
     * Contract Term Actor List
     */
    interface ContractTermActor extends Element {
        /**
         * Contract Term Actor
         */
        entity: Reference;
        /**
         * Contract Term Actor Role
         */
        role?: CodeableConcept[];
    }
    /**
     * Contract Term Valued Item
     */
    interface ContractTermValuedItem extends Element {
        /**
         * Contract Term Valued Item Type
         */
        entityCodeableConcept?: CodeableConcept;
        /**
         * Contract Term Valued Item Type
         */
        entityReference?: Reference;
        /**
         * Contract Term Valued Item Identifier
         */
        identifier?: Identifier;
        /**
         * Contract Term Valued Item Effective Tiem
         */
        effectiveTime?: dateTime;
        /**
         * Contains effectiveTime's id, extensions, and comments.
         */
        _effectiveTime?: Element;
        /**
         * Contract Term Valued Item Count
         */
        quantity?: Quantity;
        /**
         * Contract Term Valued Item fee, charge, or cost
         */
        unitPrice?: Quantity;
        /**
         * Contract Term Valued Item Price Scaling Factor
         */
        factor?: decimal;
        /**
         * Contains factor's id, extensions, and comments.
         */
        _factor?: Element;
        /**
         * Contract Term Valued Item Difficulty Scaling Factor
         */
        points?: decimal;
        /**
         * Contains points's id, extensions, and comments.
         */
        _points?: Element;
        /**
         * Total Contract Term Valued Item Value
         */
        net?: Quantity;
    }
    /**
     * Attests to accuracy of composition
     */
    interface CompositionAttester extends Element {
        /**
         * personal | professional | legal | official
         */
        mode: code[];
        /**
         * Contains mode's id, extensions, and comments.
         */
        _mode?: Element[];
        /**
         * When composition attested
         */
        time?: dateTime;
        /**
         * Contains time's id, extensions, and comments.
         */
        _time?: Element;
        /**
         * Who attested the composition
         */
        party?: Reference;
    }
    /**
     * The clinical service(s) being documented
     */
    interface CompositionEvent extends Element {
        /**
         * Code(s) that apply to the event being documented
         */
        code?: CodeableConcept[];
        /**
         * The period covered by the documentation
         */
        period?: Period;
        /**
         * The event(s) being documented
         */
        detail?: Reference[];
    }
    /**
     * Composition is broken into sections
     */
    interface CompositionSection extends Element {
        /**
         * Label for section (e.g. for ToC)
         */
        title?: string;
        /**
         * Contains title's id, extensions, and comments.
         */
        _title?: Element;
        /**
         * Classification of section (recommended)
         */
        code?: CodeableConcept;
        /**
         * Text summary of the section, for human interpretation
         */
        text?: Narrative;
        /**
         * working | snapshot | changes
         */
        mode?: code;
        /**
         * Contains mode's id, extensions, and comments.
         */
        _mode?: Element;
        /**
         * What order the section entries are in
         */
        orderedBy?: CodeableConcept;
        /**
         * A reference to data that supports this section
         */
        entry?: Reference[];
        /**
         * Why the section is empty
         */
        emptyReason?: CodeableConcept;
        /**
         * Nested Section
         */
        section?: CompositionSection[];
    }
    /**
     * A set of resources composed into a single coherent clinical statement with clinical attestation
     */
    interface Composition extends DomainResource {
        /**
         * Logical identifier of composition (version-independent)
         */
        identifier?: Identifier;
        /**
         * Composition editing time
         */
        date: dateTime;
        /**
         * Contains date's id, extensions, and comments.
         */
        _date?: Element;
        /**
         * Kind of composition (LOINC if possible)
         */
        type: CodeableConcept;
        /**
         * Categorization of Composition
         */
        class?: CodeableConcept;
        /**
         * Human Readable name/title
         */
        title: string;
        /**
         * Contains title's id, extensions, and comments.
         */
        _title?: Element;
        /**
         * preliminary | final | amended | entered-in-error
         */
        status: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * As defined by affinity domain
         */
        confidentiality?: code;
        /**
         * Contains confidentiality's id, extensions, and comments.
         */
        _confidentiality?: Element;
        /**
         * Who and/or what the composition is about
         */
        subject: Reference;
        /**
         * Who and/or what authored the composition
         */
        author: Reference[];
        /**
         * Attests to accuracy of composition
         */
        attester?: CompositionAttester[];
        /**
         * Org which maintains the composition
         */
        custodian?: Reference;
        /**
         * The clinical service(s) being documented
         */
        event?: CompositionEvent[];
        /**
         * Context of the conposition
         */
        encounter?: Reference;
        /**
         * Composition is broken into sections
         */
        section?: CompositionSection[];
    }
    /**
     * Contract Friendly Language
     */
    interface ContractFriendly extends Element {
        /**
         * Easily comprehended representation of this Contract
         */
        contentAttachment?: Attachment;
        /**
         * Easily comprehended representation of this Contract
         */
        contentReference?: Reference;
    }
    /**
     * Contract Legal Language
     */
    interface ContractLegal extends Element {
        /**
         * Contract Legal Text
         */
        contentAttachment?: Attachment;
        /**
         * Contract Legal Text
         */
        contentReference?: Reference;
    }
    /**
     * Computable Contract Language
     */
    interface ContractRule extends Element {
        /**
         * Computable Contract Rules
         */
        contentAttachment?: Attachment;
        /**
         * Computable Contract Rules
         */
        contentReference?: Reference;
    }
    /**
     * Contract
     */
    interface Contract extends DomainResource {
        /**
         * Contract identifier
         */
        identifier?: Identifier;
        /**
         * When this Contract was issued
         */
        issued?: dateTime;
        /**
         * Contains issued's id, extensions, and comments.
         */
        _issued?: Element;
        /**
         * Effective time
         */
        applies?: Period;
        /**
         * Subject of this Contract
         */
        subject?: Reference[];
        /**
         * Authority under which this Contract has standing
         */
        authority?: Reference[];
        /**
         * Domain in which this Contract applies
         */
        domain?: Reference[];
        /**
         * Contract Tyoe
         */
        type?: CodeableConcept;
        /**
         * Contract Subtype
         */
        subType?: CodeableConcept[];
        /**
         * Contract Action
         */
        action?: CodeableConcept[];
        /**
         * Contract Action Reason
         */
        actionReason?: CodeableConcept[];
        /**
         * Contract Actor
         */
        actor?: ContractActor[];
        /**
         * Contract Valued Item
         */
        valuedItem?: ContractValuedItem[];
        /**
         * Contract Signer
         */
        signer?: ContractSigner[];
        /**
         * Contract Term List
         */
        term?: ContractTerm[];
        /**
         * Binding Contract
         */
        bindingAttachment?: Attachment;
        /**
         * Binding Contract
         */
        bindingReference?: Reference;
        /**
         * Contract Friendly Language
         */
        friendly?: ContractFriendly[];
        /**
         * Contract Legal Language
         */
        legal?: ContractLegal[];
        /**
         * Computable Contract Language
         */
        rule?: ContractRule[];
    }
    /**
     * Insurance or medical plan
     */
    interface Coverage extends DomainResource {
        /**
         * An identifier for the plan issuer
         */
        issuer?: Reference;
        /**
         * BIN Number
         */
        bin?: Identifier;
        /**
         * Coverage start and end dates
         */
        period?: Period;
        /**
         * Type of coverage
         */
        type?: Coding;
        /**
         * Subscriber ID
         */
        subscriberId?: Identifier;
        /**
         * The primary coverage ID
         */
        identifier?: Identifier[];
        /**
         * An identifier for the group
         */
        group?: string;
        /**
         * Contains group's id, extensions, and comments.
         */
        _group?: Element;
        /**
         * An identifier for the plan
         */
        plan?: string;
        /**
         * Contains plan's id, extensions, and comments.
         */
        _plan?: Element;
        /**
         * An identifier for the subsection of the plan
         */
        subPlan?: string;
        /**
         * Contains subPlan's id, extensions, and comments.
         */
        _subPlan?: Element;
        /**
         * The dependent number
         */
        dependent?: positiveInt;
        /**
         * Contains dependent's id, extensions, and comments.
         */
        _dependent?: Element;
        /**
         * The plan instance or sequence counter
         */
        sequence?: positiveInt;
        /**
         * Contains sequence's id, extensions, and comments.
         */
        _sequence?: Element;
        /**
         * Plan holder information
         */
        subscriber?: Reference;
        /**
         * Insurer network
         */
        network?: Identifier;
        /**
         * Contract details
         */
        contract?: Reference[];
    }
    /**
     * Line items
     */
    interface ClaimResponseItem extends Element {
        /**
         * Service instance
         */
        sequenceLinkId: positiveInt;
        /**
         * Contains sequenceLinkId's id, extensions, and comments.
         */
        _sequenceLinkId?: Element;
        /**
         * List of note numbers which apply
         */
        noteNumber?: positiveInt[];
        /**
         * Contains noteNumber's id, extensions, and comments.
         */
        _noteNumber?: Element[];
        /**
         * Adjudication details
         */
        adjudication?: ClaimResponseItemAdjudication[];
        /**
         * Detail line items
         */
        detail?: ClaimResponseItemDetail[];
    }
    /**
     * Adjudication details
     */
    interface ClaimResponseItemAdjudication extends Element {
        /**
         * Adjudication category such as co-pay, eligible, benefit, etc.
         */
        code: Coding;
        /**
         * Monetary amount
         */
        amount?: Quantity;
        /**
         * Non-monitory value
         */
        value?: decimal;
        /**
         * Contains value's id, extensions, and comments.
         */
        _value?: Element;
    }
    /**
     * Detail line items
     */
    interface ClaimResponseItemDetail extends Element {
        /**
         * Service instance
         */
        sequenceLinkId: positiveInt;
        /**
         * Contains sequenceLinkId's id, extensions, and comments.
         */
        _sequenceLinkId?: Element;
        /**
         * Detail adjudication
         */
        adjudication?: ClaimResponseItemDetailAdjudication[];
        /**
         * Subdetail line items
         */
        subDetail?: ClaimResponseItemDetailSubDetail[];
    }
    /**
     * Detail adjudication
     */
    interface ClaimResponseItemDetailAdjudication extends Element {
        /**
         * Adjudication category such as co-pay, eligible, benefit, etc.
         */
        code: Coding;
        /**
         * Monetary amount
         */
        amount?: Quantity;
        /**
         * Non-monitory value
         */
        value?: decimal;
        /**
         * Contains value's id, extensions, and comments.
         */
        _value?: Element;
    }
    /**
     * Subdetail line items
     */
    interface ClaimResponseItemDetailSubDetail extends Element {
        /**
         * Service instance
         */
        sequenceLinkId: positiveInt;
        /**
         * Contains sequenceLinkId's id, extensions, and comments.
         */
        _sequenceLinkId?: Element;
        /**
         * Subdetail adjudication
         */
        adjudication?: ClaimResponseItemDetailSubDetailAdjudication[];
    }
    /**
     * Subdetail adjudication
     */
    interface ClaimResponseItemDetailSubDetailAdjudication extends Element {
        /**
         * Adjudication category such as co-pay, eligible, benefit, etc.
         */
        code: Coding;
        /**
         * Monetary amount
         */
        amount?: Quantity;
        /**
         * Non-monitory value
         */
        value?: decimal;
        /**
         * Contains value's id, extensions, and comments.
         */
        _value?: Element;
    }
    /**
     * Insurer added line items
     */
    interface ClaimResponseAddItem extends Element {
        /**
         * Service instances
         */
        sequenceLinkId?: positiveInt[];
        /**
         * Contains sequenceLinkId's id, extensions, and comments.
         */
        _sequenceLinkId?: Element[];
        /**
         * Group, Service or Product
         */
        service: Coding;
        /**
         * Professional fee or Product charge
         */
        fee?: Quantity;
        /**
         * List of note numbers which apply
         */
        noteNumberLinkId?: positiveInt[];
        /**
         * Contains noteNumberLinkId's id, extensions, and comments.
         */
        _noteNumberLinkId?: Element[];
        /**
         * Added items adjudication
         */
        adjudication?: ClaimResponseAddItemAdjudication[];
        /**
         * Added items details
         */
        detail?: ClaimResponseAddItemDetail[];
    }
    /**
     * Added items adjudication
     */
    interface ClaimResponseAddItemAdjudication extends Element {
        /**
         * Adjudication category such as co-pay, eligible, benefit, etc.
         */
        code: Coding;
        /**
         * Monetary amount
         */
        amount?: Quantity;
        /**
         * Non-monitory value
         */
        value?: decimal;
        /**
         * Contains value's id, extensions, and comments.
         */
        _value?: Element;
    }
    /**
     * Added items details
     */
    interface ClaimResponseAddItemDetail extends Element {
        /**
         * Service or Product
         */
        service: Coding;
        /**
         * Professional fee or Product charge
         */
        fee?: Quantity;
        /**
         * Added items detail adjudication
         */
        adjudication?: ClaimResponseAddItemDetailAdjudication[];
    }
    /**
     * Added items detail adjudication
     */
    interface ClaimResponseAddItemDetailAdjudication extends Element {
        /**
         * Adjudication category such as co-pay, eligible, benefit, etc.
         */
        code: Coding;
        /**
         * Monetary amount
         */
        amount?: Quantity;
        /**
         * Non-monitory value
         */
        value?: decimal;
        /**
         * Contains value's id, extensions, and comments.
         */
        _value?: Element;
    }
    /**
     * Processing errors
     */
    interface ClaimResponseError extends Element {
        /**
         * Item sequence number
         */
        sequenceLinkId?: positiveInt;
        /**
         * Contains sequenceLinkId's id, extensions, and comments.
         */
        _sequenceLinkId?: Element;
        /**
         * Detail sequence number
         */
        detailSequenceLinkId?: positiveInt;
        /**
         * Contains detailSequenceLinkId's id, extensions, and comments.
         */
        _detailSequenceLinkId?: Element;
        /**
         * Subdetail sequence number
         */
        subdetailSequenceLinkId?: positiveInt;
        /**
         * Contains subdetailSequenceLinkId's id, extensions, and comments.
         */
        _subdetailSequenceLinkId?: Element;
        /**
         * Error code detailing processing issues
         */
        code: Coding;
    }
    /**
     * Processing notes
     */
    interface ClaimResponseNote extends Element {
        /**
         * Note Number for this note
         */
        number?: positiveInt;
        /**
         * Contains number's id, extensions, and comments.
         */
        _number?: Element;
        /**
         * display | print | printoper
         */
        type?: Coding;
        /**
         * Note explanitory text
         */
        text?: string;
        /**
         * Contains text's id, extensions, and comments.
         */
        _text?: Element;
    }
    /**
     * Insurance or medical plan
     */
    interface ClaimResponseCoverage extends Element {
        /**
         * Service instance identifier
         */
        sequence: positiveInt;
        /**
         * Contains sequence's id, extensions, and comments.
         */
        _sequence?: Element;
        /**
         * Is the focal Coverage
         */
        focal: boolean;
        /**
         * Contains focal's id, extensions, and comments.
         */
        _focal?: Element;
        /**
         * Insurance information
         */
        coverage: Reference;
        /**
         * Business agreement
         */
        businessArrangement?: string;
        /**
         * Contains businessArrangement's id, extensions, and comments.
         */
        _businessArrangement?: Element;
        /**
         * Patient relationship to subscriber
         */
        relationship: Coding;
        /**
         * Pre-Authorization/Determination Reference
         */
        preAuthRef?: string[];
        /**
         * Contains preAuthRef's id, extensions, and comments.
         */
        _preAuthRef?: Element[];
        /**
         * Adjudication results
         */
        claimResponse?: Reference;
        /**
         * Original version
         */
        originalRuleset?: Coding;
    }
    /**
     * Remittance resource
     */
    interface ClaimResponse extends DomainResource {
        /**
         * Response  number
         */
        identifier?: Identifier[];
        /**
         * Id of resource triggering adjudication
         */
        request?: Reference;
        /**
         * Resource version
         */
        ruleset?: Coding;
        /**
         * Original version
         */
        originalRuleset?: Coding;
        /**
         * Creation date
         */
        created?: dateTime;
        /**
         * Contains created's id, extensions, and comments.
         */
        _created?: Element;
        /**
         * Insurer
         */
        organization?: Reference;
        /**
         * Responsible practitioner
         */
        requestProvider?: Reference;
        /**
         * Responsible organization
         */
        requestOrganization?: Reference;
        /**
         * complete | error
         */
        outcome?: code;
        /**
         * Contains outcome's id, extensions, and comments.
         */
        _outcome?: Element;
        /**
         * Disposition Message
         */
        disposition?: string;
        /**
         * Contains disposition's id, extensions, and comments.
         */
        _disposition?: Element;
        /**
         * Party to be paid any benefits payable
         */
        payeeType?: Coding;
        /**
         * Line items
         */
        item?: ClaimResponseItem[];
        /**
         * Insurer added line items
         */
        addItem?: ClaimResponseAddItem[];
        /**
         * Processing errors
         */
        error?: ClaimResponseError[];
        /**
         * Total Cost of service from the Claim
         */
        totalCost?: Quantity;
        /**
         * Unallocated deductable
         */
        unallocDeductable?: Quantity;
        /**
         * Total benefit payable for the Claim
         */
        totalBenefit?: Quantity;
        /**
         * Payment adjustment for non-Claim issues
         */
        paymentAdjustment?: Quantity;
        /**
         * Reason for Payment adjustment
         */
        paymentAdjustmentReason?: Coding;
        /**
         * Expected data of Payment
         */
        paymentDate?: date;
        /**
         * Contains paymentDate's id, extensions, and comments.
         */
        _paymentDate?: Element;
        /**
         * Payment amount
         */
        paymentAmount?: Quantity;
        /**
         * Payment identifier
         */
        paymentRef?: Identifier;
        /**
         * Funds reserved status
         */
        reserved?: Coding;
        /**
         * Printed Form Identifier
         */
        form?: Coding;
        /**
         * Processing notes
         */
        note?: ClaimResponseNote[];
        /**
         * Insurance or medical plan
         */
        coverage?: ClaimResponseCoverage[];
    }
    /**
     * Goods and Services
     */
    interface ClaimItem extends Element {
        /**
         * Service instance
         */
        sequence: positiveInt;
        /**
         * Contains sequence's id, extensions, and comments.
         */
        _sequence?: Element;
        /**
         * Group or type of product or service
         */
        type: Coding;
        /**
         * Responsible practitioner
         */
        provider?: Reference;
        /**
         * Diagnosis Link
         */
        diagnosisLinkId?: positiveInt[];
        /**
         * Contains diagnosisLinkId's id, extensions, and comments.
         */
        _diagnosisLinkId?: Element[];
        /**
         * Item Code
         */
        service: Coding;
        /**
         * Date of Service
         */
        serviceDate?: date;
        /**
         * Contains serviceDate's id, extensions, and comments.
         */
        _serviceDate?: Element;
        /**
         * Count of Products or Services
         */
        quantity?: Quantity;
        /**
         * Fee, charge or cost per point
         */
        unitPrice?: Quantity;
        /**
         * Price scaling factor
         */
        factor?: decimal;
        /**
         * Contains factor's id, extensions, and comments.
         */
        _factor?: Element;
        /**
         * Difficulty scaling factor
         */
        points?: decimal;
        /**
         * Contains points's id, extensions, and comments.
         */
        _points?: Element;
        /**
         * Total item cost
         */
        net?: Quantity;
        /**
         * Unique Device Identifier
         */
        udi?: Coding;
        /**
         * Service Location
         */
        bodySite?: Coding;
        /**
         * Service Sub-location
         */
        subSite?: Coding[];
        /**
         * Service/Product billing modifiers
         */
        modifier?: Coding[];
        /**
         * Additional items
         */
        detail?: ClaimItemDetail[];
        /**
         * Prosthetic details
         */
        prosthesis?: ClaimItemProsthesis;
    }
    /**
     * Additional items
     */
    interface ClaimItemDetail extends Element {
        /**
         * Service instance
         */
        sequence: positiveInt;
        /**
         * Contains sequence's id, extensions, and comments.
         */
        _sequence?: Element;
        /**
         * Group or type of product or service
         */
        type: Coding;
        /**
         * Additional item codes
         */
        service: Coding;
        /**
         * Count of Products or Services
         */
        quantity?: Quantity;
        /**
         * Fee, charge or cost per point
         */
        unitPrice?: Quantity;
        /**
         * Price scaling factor
         */
        factor?: decimal;
        /**
         * Contains factor's id, extensions, and comments.
         */
        _factor?: Element;
        /**
         * Difficulty scaling factor
         */
        points?: decimal;
        /**
         * Contains points's id, extensions, and comments.
         */
        _points?: Element;
        /**
         * Total additional item cost
         */
        net?: Quantity;
        /**
         * Unique Device Identifier
         */
        udi?: Coding;
        /**
         * Additional items
         */
        subDetail?: ClaimItemDetailSubDetail[];
    }
    /**
     * Additional items
     */
    interface ClaimItemDetailSubDetail extends Element {
        /**
         * Service instance
         */
        sequence: positiveInt;
        /**
         * Contains sequence's id, extensions, and comments.
         */
        _sequence?: Element;
        /**
         * Type of product or service
         */
        type: Coding;
        /**
         * Additional item codes
         */
        service: Coding;
        /**
         * Count of Products or Services
         */
        quantity?: Quantity;
        /**
         * Fee, charge or cost per point
         */
        unitPrice?: Quantity;
        /**
         * Price scaling factor
         */
        factor?: decimal;
        /**
         * Contains factor's id, extensions, and comments.
         */
        _factor?: Element;
        /**
         * Difficulty scaling factor
         */
        points?: decimal;
        /**
         * Contains points's id, extensions, and comments.
         */
        _points?: Element;
        /**
         * Net additional item cost
         */
        net?: Quantity;
        /**
         * Unique Device Identifier
         */
        udi?: Coding;
    }
    /**
     * Prosthetic details
     */
    interface ClaimItemProsthesis extends Element {
        /**
         * Is this the initial service
         */
        initial?: boolean;
        /**
         * Contains initial's id, extensions, and comments.
         */
        _initial?: Element;
        /**
         * Initial service Date
         */
        priorDate?: date;
        /**
         * Contains priorDate's id, extensions, and comments.
         */
        _priorDate?: Element;
        /**
         * Prosthetic Material
         */
        priorMaterial?: Coding;
    }
    /**
     * Only if type = oral
     */
    interface ClaimMissingTeeth extends Element {
        /**
         * Tooth Code
         */
        tooth: Coding;
        /**
         * Reason for missing
         */
        reason?: Coding;
        /**
         * Date of Extraction
         */
        extractionDate?: date;
        /**
         * Contains extractionDate's id, extensions, and comments.
         */
        _extractionDate?: Element;
    }
    /**
     * Claim, Pre-determination or Pre-authorization
     */
    interface Claim extends DomainResource {
        /**
         * institutional | oral | pharmacy | professional | vision
         */
        type: code;
        /**
         * Contains type's id, extensions, and comments.
         */
        _type?: Element;
        /**
         * Claim number
         */
        identifier?: Identifier[];
        /**
         * Current specification followed
         */
        ruleset?: Coding;
        /**
         * Original specification followed
         */
        originalRuleset?: Coding;
        /**
         * Creation date
         */
        created?: dateTime;
        /**
         * Contains created's id, extensions, and comments.
         */
        _created?: Element;
        /**
         * Insurer
         */
        target?: Reference;
        /**
         * Responsible provider
         */
        provider?: Reference;
        /**
         * Responsible organization
         */
        organization?: Reference;
        /**
         * complete | proposed | exploratory | other
         */
        use?: code;
        /**
         * Contains use's id, extensions, and comments.
         */
        _use?: Element;
        /**
         * Desired processing priority
         */
        priority?: Coding;
        /**
         * Funds requested to be reserved
         */
        fundsReserve?: Coding;
        /**
         * Author
         */
        enterer?: Reference;
        /**
         * Servicing Facility
         */
        facility?: Reference;
        /**
         * Prescription
         */
        prescription?: Reference;
        /**
         * Original Prescription
         */
        originalPrescription?: Reference;
        /**
         * Payee
         */
        payee?: ClaimPayee;
        /**
         * Treatment Referral
         */
        referral?: Reference;
        /**
         * Diagnosis
         */
        diagnosis?: ClaimDiagnosis[];
        /**
         * List of presenting Conditions
         */
        condition?: Coding[];
        /**
         * The subject of the Products and Services
         */
        patient: Reference;
        /**
         * Insurance or medical plan
         */
        coverage?: ClaimCoverage[];
        /**
         * Eligibility exceptions
         */
        exception?: Coding[];
        /**
         * Name of School
         */
        school?: string;
        /**
         * Contains school's id, extensions, and comments.
         */
        _school?: Element;
        /**
         * Accident Date
         */
        accident?: date;
        /**
         * Contains accident's id, extensions, and comments.
         */
        _accident?: Element;
        /**
         * Accident Type
         */
        accidentType?: Coding;
        /**
         * Intervention and exception code (Pharma)
         */
        interventionException?: Coding[];
        /**
         * Goods and Services
         */
        item?: ClaimItem[];
        /**
         * Additional materials, documents, etc.
         */
        additionalMaterials?: Coding[];
        /**
         * Only if type = oral
         */
        missingTeeth?: ClaimMissingTeeth[];
    }
    /**
     * Message payload
     */
    interface CommunicationPayload extends Element {
        /**
         * Message part content
         */
        contentString?: string;
        /**
         * Contains contentString's id, extensions, and comments.
         */
        _contentString?: Element;
        /**
         * Message part content
         */
        contentAttachment?: Attachment;
        /**
         * Message part content
         */
        contentReference?: Reference;
    }
    /**
     * A record of information transmitted from a sender to a receiver
     */
    interface Communication extends DomainResource {
        /**
         * Unique identifier
         */
        identifier?: Identifier[];
        /**
         * Message category
         */
        category?: CodeableConcept;
        /**
         * Message sender
         */
        sender?: Reference;
        /**
         * Message recipient
         */
        recipient?: Reference[];
        /**
         * Message payload
         */
        payload?: CommunicationPayload[];
        /**
         * A channel of communication
         */
        medium?: CodeableConcept[];
        /**
         * in-progress | completed | suspended | rejected | failed
         */
        status?: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * Encounter leading to message
         */
        encounter?: Reference;
        /**
         * When sent
         */
        sent?: dateTime;
        /**
         * Contains sent's id, extensions, and comments.
         */
        _sent?: Element;
        /**
         * When received
         */
        received?: dateTime;
        /**
         * Contains received's id, extensions, and comments.
         */
        _received?: Element;
        /**
         * Indication for message
         */
        reason?: CodeableConcept[];
        /**
         * Focus of message
         */
        subject?: Reference;
        /**
         * CommunicationRequest producing this message
         */
        requestDetail?: Reference;
    }
    /**
     * Contact details of the publisher
     */
    interface ConceptMapContact extends Element {
        /**
         * Name of a individual to contact
         */
        name?: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * Contact details for individual or publisher
         */
        telecom?: ContactPoint[];
    }
    /**
     * Contact details of the publisher
     */
    interface StructureDefinitionContact extends Element {
        /**
         * Name of a individual to contact
         */
        name?: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * Contact details for individual or publisher
         */
        telecom?: ContactPoint[];
    }
    /**
     * External specification that the content is mapped to
     */
    interface StructureDefinitionMapping extends Element {
        /**
         * Internal id when this mapping is used
         */
        identity: id;
        /**
         * Contains identity's id, extensions, and comments.
         */
        _identity?: Element;
        /**
         * Identifies what this mapping refers to
         */
        uri?: uri;
        /**
         * Contains uri's id, extensions, and comments.
         */
        _uri?: Element;
        /**
         * Names what this mapping refers to
         */
        name?: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * Versions, Issues, Scope limitations etc
         */
        comments?: string;
        /**
         * Contains comments's id, extensions, and comments.
         */
        _comments?: Element;
    }
    /**
     * Snapshot view of the structure
     */
    interface StructureDefinitionSnapshot extends Element {
        /**
         * Definition of elements in the resource (if no StructureDefinition)
         */
        element: ElementDefinition[];
    }
    /**
     * This element is sliced - slices follow
     */
    interface ElementDefinitionSlicing extends Element {
        /**
         * Element values that used to distinguish the slices
         */
        discriminator?: string[];
        /**
         * Contains discriminator's id, extensions, and comments.
         */
        _discriminator?: Element[];
        /**
         * Text description of how slicing works (or not)
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * If elements must be in same order as slices
         */
        ordered?: boolean;
        /**
         * Contains ordered's id, extensions, and comments.
         */
        _ordered?: Element;
        /**
         * closed | open | openAtEnd
         */
        rules: code;
        /**
         * Contains rules's id, extensions, and comments.
         */
        _rules?: Element;
    }
    /**
     * Base definition information for tools
     */
    interface ElementDefinitionBase extends Element {
        /**
         * Path that identifies the base element
         */
        path: string;
        /**
         * Contains path's id, extensions, and comments.
         */
        _path?: Element;
        /**
         * Min cardinality of the base element
         */
        min: integer;
        /**
         * Contains min's id, extensions, and comments.
         */
        _min?: Element;
        /**
         * Max cardinality of the base element
         */
        max: string;
        /**
         * Contains max's id, extensions, and comments.
         */
        _max?: Element;
    }
    /**
     * Data type and Profile for this element
     */
    interface ElementDefinitionType extends Element {
        /**
         * Name of Data type or Resource
         */
        code: code;
        /**
         * Contains code's id, extensions, and comments.
         */
        _code?: Element;
        /**
         * Profile (StructureDefinition) to apply (or IG)
         */
        profile?: uri[];
        /**
         * Contains profile's id, extensions, and comments.
         */
        _profile?: Element[];
        /**
         * contained | referenced | bundled - how aggregated
         */
        aggregation?: code[];
        /**
         * Contains aggregation's id, extensions, and comments.
         */
        _aggregation?: Element[];
    }
    /**
     * Condition that must evaluate to true
     */
    interface ElementDefinitionConstraint extends Element {
        /**
         * Target of 'condition' reference above
         */
        key: id;
        /**
         * Contains key's id, extensions, and comments.
         */
        _key?: Element;
        /**
         * Why this constraint necessary or appropriate
         */
        requirements?: string;
        /**
         * Contains requirements's id, extensions, and comments.
         */
        _requirements?: Element;
        /**
         * error | warning
         */
        severity: code;
        /**
         * Contains severity's id, extensions, and comments.
         */
        _severity?: Element;
        /**
         * Human description of constraint
         */
        human: string;
        /**
         * Contains human's id, extensions, and comments.
         */
        _human?: Element;
        /**
         * XPath expression of constraint
         */
        xpath: string;
        /**
         * Contains xpath's id, extensions, and comments.
         */
        _xpath?: Element;
    }
    /**
     * ValueSet details if this is coded
     */
    interface ElementDefinitionBinding extends Element {
        /**
         * required | extensible | preferred | example
         */
        strength: code;
        /**
         * Contains strength's id, extensions, and comments.
         */
        _strength?: Element;
        /**
         * Human explanation of the value set
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * Source of value set
         */
        valueSetUri?: uri;
        /**
         * Contains valueSetUri's id, extensions, and comments.
         */
        _valueSetUri?: Element;
        /**
         * Source of value set
         */
        valueSetReference?: Reference;
    }
    /**
     * Map element to another set of definitions
     */
    interface ElementDefinitionMapping extends Element {
        /**
         * Reference to mapping declaration
         */
        identity: id;
        /**
         * Contains identity's id, extensions, and comments.
         */
        _identity?: Element;
        /**
         * Computable language of mapping
         */
        language?: code;
        /**
         * Contains language's id, extensions, and comments.
         */
        _language?: Element;
        /**
         * Details of the mapping
         */
        map: string;
        /**
         * Contains map's id, extensions, and comments.
         */
        _map?: Element;
    }
    /**
     * Definition of an element in a resource or extension
     */
    interface ElementDefinition extends Element {
        /**
         * The path of the element (see the Detailed Descriptions)
         */
        path: string;
        /**
         * Contains path's id, extensions, and comments.
         */
        _path?: Element;
        /**
         * How this element is represented in instances
         */
        representation?: code[];
        /**
         * Contains representation's id, extensions, and comments.
         */
        _representation?: Element[];
        /**
         * Name for this particular element definition (reference target)
         */
        name?: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * Name for element to display with or prompt for element
         */
        label?: string;
        /**
         * Contains label's id, extensions, and comments.
         */
        _label?: Element;
        /**
         * Defining code
         */
        code?: Coding[];
        /**
         * This element is sliced - slices follow
         */
        slicing?: ElementDefinitionSlicing;
        /**
         * Concise definition for xml presentation
         */
        short?: string;
        /**
         * Contains short's id, extensions, and comments.
         */
        _short?: Element;
        /**
         * Full formal definition as narrative text
         */
        definition?: markdown;
        /**
         * Contains definition's id, extensions, and comments.
         */
        _definition?: Element;
        /**
         * Comments about the use of this element
         */
        comments?: markdown;
        /**
         * Contains comments's id, extensions, and comments.
         */
        _comments?: Element;
        /**
         * Why is this needed?
         */
        requirements?: markdown;
        /**
         * Contains requirements's id, extensions, and comments.
         */
        _requirements?: Element;
        /**
         * Other names
         */
        alias?: string[];
        /**
         * Contains alias's id, extensions, and comments.
         */
        _alias?: Element[];
        /**
         * Minimum Cardinality
         */
        min?: integer;
        /**
         * Contains min's id, extensions, and comments.
         */
        _min?: Element;
        /**
         * Maximum Cardinality (a number or *)
         */
        max?: string;
        /**
         * Contains max's id, extensions, and comments.
         */
        _max?: Element;
        /**
         * Base definition information for tools
         */
        base?: ElementDefinitionBase;
        /**
         * Data type and Profile for this element
         */
        type?: ElementDefinitionType[];
        /**
         * To another element constraint (by element.name)
         */
        nameReference?: string;
        /**
         * Contains nameReference's id, extensions, and comments.
         */
        _nameReference?: Element;
        /**
         * Specified value it missing from instance
         */
        defaultValueBoolean?: boolean;
        /**
         * Contains defaultValueBoolean's id, extensions, and comments.
         */
        _defaultValueBoolean?: Element;
        /**
         * Specified value it missing from instance
         */
        defaultValueInteger?: integer;
        /**
         * Contains defaultValueInteger's id, extensions, and comments.
         */
        _defaultValueInteger?: Element;
        /**
         * Specified value it missing from instance
         */
        defaultValueDecimal?: decimal;
        /**
         * Contains defaultValueDecimal's id, extensions, and comments.
         */
        _defaultValueDecimal?: Element;
        /**
         * Specified value it missing from instance
         */
        defaultValueBase64Binary?: base64Binary;
        /**
         * Contains defaultValueBase64Binary's id, extensions, and comments.
         */
        _defaultValueBase64Binary?: Element;
        /**
         * Specified value it missing from instance
         */
        defaultValueInstant?: instant;
        /**
         * Contains defaultValueInstant's id, extensions, and comments.
         */
        _defaultValueInstant?: Element;
        /**
         * Specified value it missing from instance
         */
        defaultValueString?: string;
        /**
         * Contains defaultValueString's id, extensions, and comments.
         */
        _defaultValueString?: Element;
        /**
         * Specified value it missing from instance
         */
        defaultValueUri?: uri;
        /**
         * Contains defaultValueUri's id, extensions, and comments.
         */
        _defaultValueUri?: Element;
        /**
         * Specified value it missing from instance
         */
        defaultValueDate?: date;
        /**
         * Contains defaultValueDate's id, extensions, and comments.
         */
        _defaultValueDate?: Element;
        /**
         * Specified value it missing from instance
         */
        defaultValueDateTime?: dateTime;
        /**
         * Contains defaultValueDateTime's id, extensions, and comments.
         */
        _defaultValueDateTime?: Element;
        /**
         * Specified value it missing from instance
         */
        defaultValueTime?: time;
        /**
         * Contains defaultValueTime's id, extensions, and comments.
         */
        _defaultValueTime?: Element;
        /**
         * Specified value it missing from instance
         */
        defaultValueCode?: code;
        /**
         * Contains defaultValueCode's id, extensions, and comments.
         */
        _defaultValueCode?: Element;
        /**
         * Specified value it missing from instance
         */
        defaultValueOid?: oid;
        /**
         * Contains defaultValueOid's id, extensions, and comments.
         */
        _defaultValueOid?: Element;
        /**
         * Specified value it missing from instance
         */
        defaultValueId?: id;
        /**
         * Contains defaultValueId's id, extensions, and comments.
         */
        _defaultValueId?: Element;
        /**
         * Specified value it missing from instance
         */
        defaultValueUnsignedInt?: unsignedInt;
        /**
         * Contains defaultValueUnsignedInt's id, extensions, and comments.
         */
        _defaultValueUnsignedInt?: Element;
        /**
         * Specified value it missing from instance
         */
        defaultValuePositiveInt?: positiveInt;
        /**
         * Contains defaultValuePositiveInt's id, extensions, and comments.
         */
        _defaultValuePositiveInt?: Element;
        /**
         * Specified value it missing from instance
         */
        defaultValueMarkdown?: markdown;
        /**
         * Contains defaultValueMarkdown's id, extensions, and comments.
         */
        _defaultValueMarkdown?: Element;
        /**
         * Specified value it missing from instance
         */
        defaultValueAnnotation?: Annotation;
        /**
         * Specified value it missing from instance
         */
        defaultValueAttachment?: Attachment;
        /**
         * Specified value it missing from instance
         */
        defaultValueIdentifier?: Identifier;
        /**
         * Specified value it missing from instance
         */
        defaultValueCodeableConcept?: CodeableConcept;
        /**
         * Specified value it missing from instance
         */
        defaultValueCoding?: Coding;
        /**
         * Specified value it missing from instance
         */
        defaultValueQuantity?: Quantity;
        /**
         * Specified value it missing from instance
         */
        defaultValueRange?: Range;
        /**
         * Specified value it missing from instance
         */
        defaultValuePeriod?: Period;
        /**
         * Specified value it missing from instance
         */
        defaultValueRatio?: Ratio;
        /**
         * Specified value it missing from instance
         */
        defaultValueSampledData?: SampledData;
        /**
         * Specified value it missing from instance
         */
        defaultValueSignature?: Signature;
        /**
         * Specified value it missing from instance
         */
        defaultValueHumanName?: HumanName;
        /**
         * Specified value it missing from instance
         */
        defaultValueAddress?: Address;
        /**
         * Specified value it missing from instance
         */
        defaultValueContactPoint?: ContactPoint;
        /**
         * Specified value it missing from instance
         */
        defaultValueTiming?: Timing;
        /**
         * Specified value it missing from instance
         */
        defaultValueReference?: Reference;
        /**
         * Specified value it missing from instance
         */
        defaultValueMeta?: Meta;
        /**
         * Implicit meaning when this element is missing
         */
        meaningWhenMissing?: markdown;
        /**
         * Contains meaningWhenMissing's id, extensions, and comments.
         */
        _meaningWhenMissing?: Element;
        /**
         * Value must be exactly this
         */
        fixedBoolean?: boolean;
        /**
         * Contains fixedBoolean's id, extensions, and comments.
         */
        _fixedBoolean?: Element;
        /**
         * Value must be exactly this
         */
        fixedInteger?: integer;
        /**
         * Contains fixedInteger's id, extensions, and comments.
         */
        _fixedInteger?: Element;
        /**
         * Value must be exactly this
         */
        fixedDecimal?: decimal;
        /**
         * Contains fixedDecimal's id, extensions, and comments.
         */
        _fixedDecimal?: Element;
        /**
         * Value must be exactly this
         */
        fixedBase64Binary?: base64Binary;
        /**
         * Contains fixedBase64Binary's id, extensions, and comments.
         */
        _fixedBase64Binary?: Element;
        /**
         * Value must be exactly this
         */
        fixedInstant?: instant;
        /**
         * Contains fixedInstant's id, extensions, and comments.
         */
        _fixedInstant?: Element;
        /**
         * Value must be exactly this
         */
        fixedString?: string;
        /**
         * Contains fixedString's id, extensions, and comments.
         */
        _fixedString?: Element;
        /**
         * Value must be exactly this
         */
        fixedUri?: uri;
        /**
         * Contains fixedUri's id, extensions, and comments.
         */
        _fixedUri?: Element;
        /**
         * Value must be exactly this
         */
        fixedDate?: date;
        /**
         * Contains fixedDate's id, extensions, and comments.
         */
        _fixedDate?: Element;
        /**
         * Value must be exactly this
         */
        fixedDateTime?: dateTime;
        /**
         * Contains fixedDateTime's id, extensions, and comments.
         */
        _fixedDateTime?: Element;
        /**
         * Value must be exactly this
         */
        fixedTime?: time;
        /**
         * Contains fixedTime's id, extensions, and comments.
         */
        _fixedTime?: Element;
        /**
         * Value must be exactly this
         */
        fixedCode?: code;
        /**
         * Contains fixedCode's id, extensions, and comments.
         */
        _fixedCode?: Element;
        /**
         * Value must be exactly this
         */
        fixedOid?: oid;
        /**
         * Contains fixedOid's id, extensions, and comments.
         */
        _fixedOid?: Element;
        /**
         * Value must be exactly this
         */
        fixedId?: id;
        /**
         * Contains fixedId's id, extensions, and comments.
         */
        _fixedId?: Element;
        /**
         * Value must be exactly this
         */
        fixedUnsignedInt?: unsignedInt;
        /**
         * Contains fixedUnsignedInt's id, extensions, and comments.
         */
        _fixedUnsignedInt?: Element;
        /**
         * Value must be exactly this
         */
        fixedPositiveInt?: positiveInt;
        /**
         * Contains fixedPositiveInt's id, extensions, and comments.
         */
        _fixedPositiveInt?: Element;
        /**
         * Value must be exactly this
         */
        fixedMarkdown?: markdown;
        /**
         * Contains fixedMarkdown's id, extensions, and comments.
         */
        _fixedMarkdown?: Element;
        /**
         * Value must be exactly this
         */
        fixedAnnotation?: Annotation;
        /**
         * Value must be exactly this
         */
        fixedAttachment?: Attachment;
        /**
         * Value must be exactly this
         */
        fixedIdentifier?: Identifier;
        /**
         * Value must be exactly this
         */
        fixedCodeableConcept?: CodeableConcept;
        /**
         * Value must be exactly this
         */
        fixedCoding?: Coding;
        /**
         * Value must be exactly this
         */
        fixedQuantity?: Quantity;
        /**
         * Value must be exactly this
         */
        fixedRange?: Range;
        /**
         * Value must be exactly this
         */
        fixedPeriod?: Period;
        /**
         * Value must be exactly this
         */
        fixedRatio?: Ratio;
        /**
         * Value must be exactly this
         */
        fixedSampledData?: SampledData;
        /**
         * Value must be exactly this
         */
        fixedSignature?: Signature;
        /**
         * Value must be exactly this
         */
        fixedHumanName?: HumanName;
        /**
         * Value must be exactly this
         */
        fixedAddress?: Address;
        /**
         * Value must be exactly this
         */
        fixedContactPoint?: ContactPoint;
        /**
         * Value must be exactly this
         */
        fixedTiming?: Timing;
        /**
         * Value must be exactly this
         */
        fixedReference?: Reference;
        /**
         * Value must be exactly this
         */
        fixedMeta?: Meta;
        /**
         * Value must have at least these property values
         */
        patternBoolean?: boolean;
        /**
         * Contains patternBoolean's id, extensions, and comments.
         */
        _patternBoolean?: Element;
        /**
         * Value must have at least these property values
         */
        patternInteger?: integer;
        /**
         * Contains patternInteger's id, extensions, and comments.
         */
        _patternInteger?: Element;
        /**
         * Value must have at least these property values
         */
        patternDecimal?: decimal;
        /**
         * Contains patternDecimal's id, extensions, and comments.
         */
        _patternDecimal?: Element;
        /**
         * Value must have at least these property values
         */
        patternBase64Binary?: base64Binary;
        /**
         * Contains patternBase64Binary's id, extensions, and comments.
         */
        _patternBase64Binary?: Element;
        /**
         * Value must have at least these property values
         */
        patternInstant?: instant;
        /**
         * Contains patternInstant's id, extensions, and comments.
         */
        _patternInstant?: Element;
        /**
         * Value must have at least these property values
         */
        patternString?: string;
        /**
         * Contains patternString's id, extensions, and comments.
         */
        _patternString?: Element;
        /**
         * Value must have at least these property values
         */
        patternUri?: uri;
        /**
         * Contains patternUri's id, extensions, and comments.
         */
        _patternUri?: Element;
        /**
         * Value must have at least these property values
         */
        patternDate?: date;
        /**
         * Contains patternDate's id, extensions, and comments.
         */
        _patternDate?: Element;
        /**
         * Value must have at least these property values
         */
        patternDateTime?: dateTime;
        /**
         * Contains patternDateTime's id, extensions, and comments.
         */
        _patternDateTime?: Element;
        /**
         * Value must have at least these property values
         */
        patternTime?: time;
        /**
         * Contains patternTime's id, extensions, and comments.
         */
        _patternTime?: Element;
        /**
         * Value must have at least these property values
         */
        patternCode?: code;
        /**
         * Contains patternCode's id, extensions, and comments.
         */
        _patternCode?: Element;
        /**
         * Value must have at least these property values
         */
        patternOid?: oid;
        /**
         * Contains patternOid's id, extensions, and comments.
         */
        _patternOid?: Element;
        /**
         * Value must have at least these property values
         */
        patternId?: id;
        /**
         * Contains patternId's id, extensions, and comments.
         */
        _patternId?: Element;
        /**
         * Value must have at least these property values
         */
        patternUnsignedInt?: unsignedInt;
        /**
         * Contains patternUnsignedInt's id, extensions, and comments.
         */
        _patternUnsignedInt?: Element;
        /**
         * Value must have at least these property values
         */
        patternPositiveInt?: positiveInt;
        /**
         * Contains patternPositiveInt's id, extensions, and comments.
         */
        _patternPositiveInt?: Element;
        /**
         * Value must have at least these property values
         */
        patternMarkdown?: markdown;
        /**
         * Contains patternMarkdown's id, extensions, and comments.
         */
        _patternMarkdown?: Element;
        /**
         * Value must have at least these property values
         */
        patternAnnotation?: Annotation;
        /**
         * Value must have at least these property values
         */
        patternAttachment?: Attachment;
        /**
         * Value must have at least these property values
         */
        patternIdentifier?: Identifier;
        /**
         * Value must have at least these property values
         */
        patternCodeableConcept?: CodeableConcept;
        /**
         * Value must have at least these property values
         */
        patternCoding?: Coding;
        /**
         * Value must have at least these property values
         */
        patternQuantity?: Quantity;
        /**
         * Value must have at least these property values
         */
        patternRange?: Range;
        /**
         * Value must have at least these property values
         */
        patternPeriod?: Period;
        /**
         * Value must have at least these property values
         */
        patternRatio?: Ratio;
        /**
         * Value must have at least these property values
         */
        patternSampledData?: SampledData;
        /**
         * Value must have at least these property values
         */
        patternSignature?: Signature;
        /**
         * Value must have at least these property values
         */
        patternHumanName?: HumanName;
        /**
         * Value must have at least these property values
         */
        patternAddress?: Address;
        /**
         * Value must have at least these property values
         */
        patternContactPoint?: ContactPoint;
        /**
         * Value must have at least these property values
         */
        patternTiming?: Timing;
        /**
         * Value must have at least these property values
         */
        patternReference?: Reference;
        /**
         * Value must have at least these property values
         */
        patternMeta?: Meta;
        /**
         * Example value: [as defined for type]
         */
        exampleBoolean?: boolean;
        /**
         * Contains exampleBoolean's id, extensions, and comments.
         */
        _exampleBoolean?: Element;
        /**
         * Example value: [as defined for type]
         */
        exampleInteger?: integer;
        /**
         * Contains exampleInteger's id, extensions, and comments.
         */
        _exampleInteger?: Element;
        /**
         * Example value: [as defined for type]
         */
        exampleDecimal?: decimal;
        /**
         * Contains exampleDecimal's id, extensions, and comments.
         */
        _exampleDecimal?: Element;
        /**
         * Example value: [as defined for type]
         */
        exampleBase64Binary?: base64Binary;
        /**
         * Contains exampleBase64Binary's id, extensions, and comments.
         */
        _exampleBase64Binary?: Element;
        /**
         * Example value: [as defined for type]
         */
        exampleInstant?: instant;
        /**
         * Contains exampleInstant's id, extensions, and comments.
         */
        _exampleInstant?: Element;
        /**
         * Example value: [as defined for type]
         */
        exampleString?: string;
        /**
         * Contains exampleString's id, extensions, and comments.
         */
        _exampleString?: Element;
        /**
         * Example value: [as defined for type]
         */
        exampleUri?: uri;
        /**
         * Contains exampleUri's id, extensions, and comments.
         */
        _exampleUri?: Element;
        /**
         * Example value: [as defined for type]
         */
        exampleDate?: date;
        /**
         * Contains exampleDate's id, extensions, and comments.
         */
        _exampleDate?: Element;
        /**
         * Example value: [as defined for type]
         */
        exampleDateTime?: dateTime;
        /**
         * Contains exampleDateTime's id, extensions, and comments.
         */
        _exampleDateTime?: Element;
        /**
         * Example value: [as defined for type]
         */
        exampleTime?: time;
        /**
         * Contains exampleTime's id, extensions, and comments.
         */
        _exampleTime?: Element;
        /**
         * Example value: [as defined for type]
         */
        exampleCode?: code;
        /**
         * Contains exampleCode's id, extensions, and comments.
         */
        _exampleCode?: Element;
        /**
         * Example value: [as defined for type]
         */
        exampleOid?: oid;
        /**
         * Contains exampleOid's id, extensions, and comments.
         */
        _exampleOid?: Element;
        /**
         * Example value: [as defined for type]
         */
        exampleId?: id;
        /**
         * Contains exampleId's id, extensions, and comments.
         */
        _exampleId?: Element;
        /**
         * Example value: [as defined for type]
         */
        exampleUnsignedInt?: unsignedInt;
        /**
         * Contains exampleUnsignedInt's id, extensions, and comments.
         */
        _exampleUnsignedInt?: Element;
        /**
         * Example value: [as defined for type]
         */
        examplePositiveInt?: positiveInt;
        /**
         * Contains examplePositiveInt's id, extensions, and comments.
         */
        _examplePositiveInt?: Element;
        /**
         * Example value: [as defined for type]
         */
        exampleMarkdown?: markdown;
        /**
         * Contains exampleMarkdown's id, extensions, and comments.
         */
        _exampleMarkdown?: Element;
        /**
         * Example value: [as defined for type]
         */
        exampleAnnotation?: Annotation;
        /**
         * Example value: [as defined for type]
         */
        exampleAttachment?: Attachment;
        /**
         * Example value: [as defined for type]
         */
        exampleIdentifier?: Identifier;
        /**
         * Example value: [as defined for type]
         */
        exampleCodeableConcept?: CodeableConcept;
        /**
         * Example value: [as defined for type]
         */
        exampleCoding?: Coding;
        /**
         * Example value: [as defined for type]
         */
        exampleQuantity?: Quantity;
        /**
         * Example value: [as defined for type]
         */
        exampleRange?: Range;
        /**
         * Example value: [as defined for type]
         */
        examplePeriod?: Period;
        /**
         * Example value: [as defined for type]
         */
        exampleRatio?: Ratio;
        /**
         * Example value: [as defined for type]
         */
        exampleSampledData?: SampledData;
        /**
         * Example value: [as defined for type]
         */
        exampleSignature?: Signature;
        /**
         * Example value: [as defined for type]
         */
        exampleHumanName?: HumanName;
        /**
         * Example value: [as defined for type]
         */
        exampleAddress?: Address;
        /**
         * Example value: [as defined for type]
         */
        exampleContactPoint?: ContactPoint;
        /**
         * Example value: [as defined for type]
         */
        exampleTiming?: Timing;
        /**
         * Example value: [as defined for type]
         */
        exampleReference?: Reference;
        /**
         * Example value: [as defined for type]
         */
        exampleMeta?: Meta;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueBoolean?: boolean;
        /**
         * Contains minValueBoolean's id, extensions, and comments.
         */
        _minValueBoolean?: Element;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueInteger?: integer;
        /**
         * Contains minValueInteger's id, extensions, and comments.
         */
        _minValueInteger?: Element;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueDecimal?: decimal;
        /**
         * Contains minValueDecimal's id, extensions, and comments.
         */
        _minValueDecimal?: Element;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueBase64Binary?: base64Binary;
        /**
         * Contains minValueBase64Binary's id, extensions, and comments.
         */
        _minValueBase64Binary?: Element;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueInstant?: instant;
        /**
         * Contains minValueInstant's id, extensions, and comments.
         */
        _minValueInstant?: Element;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueString?: string;
        /**
         * Contains minValueString's id, extensions, and comments.
         */
        _minValueString?: Element;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueUri?: uri;
        /**
         * Contains minValueUri's id, extensions, and comments.
         */
        _minValueUri?: Element;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueDate?: date;
        /**
         * Contains minValueDate's id, extensions, and comments.
         */
        _minValueDate?: Element;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueDateTime?: dateTime;
        /**
         * Contains minValueDateTime's id, extensions, and comments.
         */
        _minValueDateTime?: Element;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueTime?: time;
        /**
         * Contains minValueTime's id, extensions, and comments.
         */
        _minValueTime?: Element;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueCode?: code;
        /**
         * Contains minValueCode's id, extensions, and comments.
         */
        _minValueCode?: Element;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueOid?: oid;
        /**
         * Contains minValueOid's id, extensions, and comments.
         */
        _minValueOid?: Element;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueId?: id;
        /**
         * Contains minValueId's id, extensions, and comments.
         */
        _minValueId?: Element;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueUnsignedInt?: unsignedInt;
        /**
         * Contains minValueUnsignedInt's id, extensions, and comments.
         */
        _minValueUnsignedInt?: Element;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValuePositiveInt?: positiveInt;
        /**
         * Contains minValuePositiveInt's id, extensions, and comments.
         */
        _minValuePositiveInt?: Element;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueMarkdown?: markdown;
        /**
         * Contains minValueMarkdown's id, extensions, and comments.
         */
        _minValueMarkdown?: Element;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueAnnotation?: Annotation;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueAttachment?: Attachment;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueIdentifier?: Identifier;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueCodeableConcept?: CodeableConcept;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueCoding?: Coding;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueQuantity?: Quantity;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueRange?: Range;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValuePeriod?: Period;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueRatio?: Ratio;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueSampledData?: SampledData;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueSignature?: Signature;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueHumanName?: HumanName;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueAddress?: Address;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueContactPoint?: ContactPoint;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueTiming?: Timing;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueReference?: Reference;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueMeta?: Meta;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueBoolean?: boolean;
        /**
         * Contains maxValueBoolean's id, extensions, and comments.
         */
        _maxValueBoolean?: Element;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueInteger?: integer;
        /**
         * Contains maxValueInteger's id, extensions, and comments.
         */
        _maxValueInteger?: Element;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueDecimal?: decimal;
        /**
         * Contains maxValueDecimal's id, extensions, and comments.
         */
        _maxValueDecimal?: Element;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueBase64Binary?: base64Binary;
        /**
         * Contains maxValueBase64Binary's id, extensions, and comments.
         */
        _maxValueBase64Binary?: Element;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueInstant?: instant;
        /**
         * Contains maxValueInstant's id, extensions, and comments.
         */
        _maxValueInstant?: Element;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueString?: string;
        /**
         * Contains maxValueString's id, extensions, and comments.
         */
        _maxValueString?: Element;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueUri?: uri;
        /**
         * Contains maxValueUri's id, extensions, and comments.
         */
        _maxValueUri?: Element;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueDate?: date;
        /**
         * Contains maxValueDate's id, extensions, and comments.
         */
        _maxValueDate?: Element;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueDateTime?: dateTime;
        /**
         * Contains maxValueDateTime's id, extensions, and comments.
         */
        _maxValueDateTime?: Element;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueTime?: time;
        /**
         * Contains maxValueTime's id, extensions, and comments.
         */
        _maxValueTime?: Element;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueCode?: code;
        /**
         * Contains maxValueCode's id, extensions, and comments.
         */
        _maxValueCode?: Element;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueOid?: oid;
        /**
         * Contains maxValueOid's id, extensions, and comments.
         */
        _maxValueOid?: Element;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueId?: id;
        /**
         * Contains maxValueId's id, extensions, and comments.
         */
        _maxValueId?: Element;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueUnsignedInt?: unsignedInt;
        /**
         * Contains maxValueUnsignedInt's id, extensions, and comments.
         */
        _maxValueUnsignedInt?: Element;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValuePositiveInt?: positiveInt;
        /**
         * Contains maxValuePositiveInt's id, extensions, and comments.
         */
        _maxValuePositiveInt?: Element;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueMarkdown?: markdown;
        /**
         * Contains maxValueMarkdown's id, extensions, and comments.
         */
        _maxValueMarkdown?: Element;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueAnnotation?: Annotation;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueAttachment?: Attachment;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueIdentifier?: Identifier;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueCodeableConcept?: CodeableConcept;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueCoding?: Coding;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueQuantity?: Quantity;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueRange?: Range;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValuePeriod?: Period;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueRatio?: Ratio;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueSampledData?: SampledData;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueSignature?: Signature;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueHumanName?: HumanName;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueAddress?: Address;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueContactPoint?: ContactPoint;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueTiming?: Timing;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueReference?: Reference;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueMeta?: Meta;
        /**
         * Max length for strings
         */
        maxLength?: integer;
        /**
         * Contains maxLength's id, extensions, and comments.
         */
        _maxLength?: Element;
        /**
         * Reference to invariant about presence
         */
        condition?: id[];
        /**
         * Contains condition's id, extensions, and comments.
         */
        _condition?: Element[];
        /**
         * Condition that must evaluate to true
         */
        constraint?: ElementDefinitionConstraint[];
        /**
         * If the element must supported
         */
        mustSupport?: boolean;
        /**
         * Contains mustSupport's id, extensions, and comments.
         */
        _mustSupport?: Element;
        /**
         * If this modifies the meaning of other elements
         */
        isModifier?: boolean;
        /**
         * Contains isModifier's id, extensions, and comments.
         */
        _isModifier?: Element;
        /**
         * Include when _summary = true?
         */
        isSummary?: boolean;
        /**
         * Contains isSummary's id, extensions, and comments.
         */
        _isSummary?: Element;
        /**
         * ValueSet details if this is coded
         */
        binding?: ElementDefinitionBinding;
        /**
         * Map element to another set of definitions
         */
        mapping?: ElementDefinitionMapping[];
    }
    /**
     * Differential view of the structure
     */
    interface StructureDefinitionDifferential extends Element {
        /**
         * Definition of elements in the resource (if no StructureDefinition)
         */
        element: ElementDefinition[];
    }
    /**
     * Structural Definition
     */
    interface StructureDefinition extends DomainResource {
        /**
         * Literal URL used to reference this StructureDefinition
         */
        url: uri;
        /**
         * Contains url's id, extensions, and comments.
         */
        _url?: Element;
        /**
         * Other identifiers for the StructureDefinition
         */
        identifier?: Identifier[];
        /**
         * Logical id for this version of the StructureDefinition
         */
        version?: string;
        /**
         * Contains version's id, extensions, and comments.
         */
        _version?: Element;
        /**
         * Informal name for this StructureDefinition
         */
        name: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * Use this name when displaying the value
         */
        display?: string;
        /**
         * Contains display's id, extensions, and comments.
         */
        _display?: Element;
        /**
         * draft | active | retired
         */
        status: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * If for testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Contains experimental's id, extensions, and comments.
         */
        _experimental?: Element;
        /**
         * Name of the publisher (Organization or individual)
         */
        publisher?: string;
        /**
         * Contains publisher's id, extensions, and comments.
         */
        _publisher?: Element;
        /**
         * Contact details of the publisher
         */
        contact?: StructureDefinitionContact[];
        /**
         * Date for this version of the StructureDefinition
         */
        date?: dateTime;
        /**
         * Contains date's id, extensions, and comments.
         */
        _date?: Element;
        /**
         * Natural language description of the StructureDefinition
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * Content intends to support these contexts
         */
        useContext?: CodeableConcept[];
        /**
         * Scope and Usage this structure definition is for
         */
        requirements?: string;
        /**
         * Contains requirements's id, extensions, and comments.
         */
        _requirements?: Element;
        /**
         * Use and/or Publishing restrictions
         */
        copyright?: string;
        /**
         * Contains copyright's id, extensions, and comments.
         */
        _copyright?: Element;
        /**
         * Assist with indexing and finding
         */
        code?: Coding[];
        /**
         * FHIR Version this StructureDefinition targets
         */
        fhirVersion?: id;
        /**
         * Contains fhirVersion's id, extensions, and comments.
         */
        _fhirVersion?: Element;
        /**
         * External specification that the content is mapped to
         */
        mapping?: StructureDefinitionMapping[];
        /**
         * datatype | resource | logical
         */
        kind: code;
        /**
         * Contains kind's id, extensions, and comments.
         */
        _kind?: Element;
        /**
         * Any datatype or resource, including abstract ones
         */
        constrainedType?: code;
        /**
         * Contains constrainedType's id, extensions, and comments.
         */
        _constrainedType?: Element;
        /**
         * Whether the structure is abstract
         */
        abstract: boolean;
        /**
         * Contains abstract's id, extensions, and comments.
         */
        _abstract?: Element;
        /**
         * resource | datatype | mapping | extension
         */
        contextType?: code;
        /**
         * Contains contextType's id, extensions, and comments.
         */
        _contextType?: Element;
        /**
         * Where the extension can be used in instances
         */
        context?: string[];
        /**
         * Contains context's id, extensions, and comments.
         */
        _context?: Element[];
        /**
         * Structure that this set of constraints applies to
         */
        base?: uri;
        /**
         * Contains base's id, extensions, and comments.
         */
        _base?: Element;
        /**
         * Snapshot view of the structure
         */
        snapshot?: StructureDefinitionSnapshot;
        /**
         * Differential view of the structure
         */
        differential?: StructureDefinitionDifferential;
    }
    /**
     * Mappings for a concept from the source set
     */
    interface ConceptMapElement extends Element {
        /**
         * Code System (if value set crosses code systems)
         */
        codeSystem?: uri;
        /**
         * Contains codeSystem's id, extensions, and comments.
         */
        _codeSystem?: Element;
        /**
         * Identifies element being mapped
         */
        code?: code;
        /**
         * Contains code's id, extensions, and comments.
         */
        _code?: Element;
        /**
         * Concept in target system for element
         */
        target?: ConceptMapElementTarget[];
    }
    /**
     * Concept in target system for element
     */
    interface ConceptMapElementTarget extends Element {
        /**
         * System of the target (if necessary)
         */
        codeSystem?: uri;
        /**
         * Contains codeSystem's id, extensions, and comments.
         */
        _codeSystem?: Element;
        /**
         * Code that identifies the target element
         */
        code?: code;
        /**
         * Contains code's id, extensions, and comments.
         */
        _code?: Element;
        /**
         * equivalent | equal | wider | subsumes | narrower | specializes | inexact | unmatched | disjoint
         */
        equivalence: code;
        /**
         * Contains equivalence's id, extensions, and comments.
         */
        _equivalence?: Element;
        /**
         * Description of status/issues in mapping
         */
        comments?: string;
        /**
         * Contains comments's id, extensions, and comments.
         */
        _comments?: Element;
        /**
         * Other elements required for this mapping (from context)
         */
        dependsOn?: ConceptMapElementTargetDependsOn[];
        /**
         * Other concepts that this mapping also produces
         */
        product?: ConceptMapElementTargetDependsOn[];
    }
    /**
     * Other elements required for this mapping (from context)
     */
    interface ConceptMapElementTargetDependsOn extends Element {
        /**
         * Reference to element/field/valueset mapping depends on
         */
        element: uri;
        /**
         * Contains element's id, extensions, and comments.
         */
        _element?: Element;
        /**
         * Code System (if necessary)
         */
        codeSystem: uri;
        /**
         * Contains codeSystem's id, extensions, and comments.
         */
        _codeSystem?: Element;
        /**
         * Value of the referenced element
         */
        code: string;
        /**
         * Contains code's id, extensions, and comments.
         */
        _code?: Element;
    }
    /**
     * A map from one set of concepts to one or more other concepts
     */
    interface ConceptMap extends DomainResource {
        /**
         * Globally unique logical id for concept map
         */
        url?: uri;
        /**
         * Contains url's id, extensions, and comments.
         */
        _url?: Element;
        /**
         * Additional identifier for the concept map
         */
        identifier?: Identifier;
        /**
         * Logical id for this version of the concept map
         */
        version?: string;
        /**
         * Contains version's id, extensions, and comments.
         */
        _version?: Element;
        /**
         * Informal name for this concept map
         */
        name?: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * draft | active | retired
         */
        status: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * If for testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Contains experimental's id, extensions, and comments.
         */
        _experimental?: Element;
        /**
         * Name of the publisher (Organization or individual)
         */
        publisher?: string;
        /**
         * Contains publisher's id, extensions, and comments.
         */
        _publisher?: Element;
        /**
         * Contact details of the publisher
         */
        contact?: ConceptMapContact[];
        /**
         * Date for given status
         */
        date?: dateTime;
        /**
         * Contains date's id, extensions, and comments.
         */
        _date?: Element;
        /**
         * Human language description of the concept map
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * Content intends to support these contexts
         */
        useContext?: CodeableConcept[];
        /**
         * Why is this needed?
         */
        requirements?: string;
        /**
         * Contains requirements's id, extensions, and comments.
         */
        _requirements?: Element;
        /**
         * Use and/or Publishing restrictions
         */
        copyright?: string;
        /**
         * Contains copyright's id, extensions, and comments.
         */
        _copyright?: Element;
        /**
         * Identifies the source of the concepts which are being mapped
         */
        sourceUri?: uri;
        /**
         * Contains sourceUri's id, extensions, and comments.
         */
        _sourceUri?: Element;
        /**
         * Identifies the source of the concepts which are being mapped
         */
        sourceReference?: Reference;
        /**
         * Provides context to the mappings
         */
        targetUri?: uri;
        /**
         * Contains targetUri's id, extensions, and comments.
         */
        _targetUri?: Element;
        /**
         * Provides context to the mappings
         */
        targetReference?: Reference;
        /**
         * Mappings for a concept from the source set
         */
        element?: ConceptMapElement[];
    }
    /**
     * Contact details of the publisher
     */
    interface ConformanceContact extends Element {
        /**
         * Name of a individual to contact
         */
        name?: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * Contact details for individual or publisher
         */
        telecom?: ContactPoint[];
    }
    /**
     * Software that is covered by this conformance statement
     */
    interface ConformanceSoftware extends Element {
        /**
         * A name the software is known by
         */
        name: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * Version covered by this statement
         */
        version?: string;
        /**
         * Contains version's id, extensions, and comments.
         */
        _version?: Element;
        /**
         * Date this version released
         */
        releaseDate?: dateTime;
        /**
         * Contains releaseDate's id, extensions, and comments.
         */
        _releaseDate?: Element;
    }
    /**
     * If this describes a specific instance
     */
    interface ConformanceImplementation extends Element {
        /**
         * Describes this specific instance
         */
        description: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * Base URL for the installation
         */
        url?: uri;
        /**
         * Contains url's id, extensions, and comments.
         */
        _url?: Element;
    }
    /**
     * If the endpoint is a RESTful one
     */
    interface ConformanceRest extends Element {
        /**
         * client | server
         */
        mode: code;
        /**
         * Contains mode's id, extensions, and comments.
         */
        _mode?: Element;
        /**
         * General description of implementation
         */
        documentation?: string;
        /**
         * Contains documentation's id, extensions, and comments.
         */
        _documentation?: Element;
        /**
         * Information about security of implementation
         */
        security?: ConformanceRestSecurity;
        /**
         * Resource served on the REST interface
         */
        resource: ConformanceRestResource[];
        /**
         * What operations are supported?
         */
        interaction?: ConformanceRestInteraction[];
        /**
         * not-supported | batch | transaction | both
         */
        transactionMode?: code;
        /**
         * Contains transactionMode's id, extensions, and comments.
         */
        _transactionMode?: Element;
        /**
         * Search params for searching all resources
         */
        searchParam?: ConformanceRestResourceSearchParam[];
        /**
         * Definition of an operation or a custom query
         */
        operation?: ConformanceRestOperation[];
        /**
         * Compartments served/used by system
         */
        compartment?: uri[];
        /**
         * Contains compartment's id, extensions, and comments.
         */
        _compartment?: Element[];
    }
    /**
     * Information about security of implementation
     */
    interface ConformanceRestSecurity extends Element {
        /**
         * Adds CORS Headers (http://enable-cors.org/)
         */
        cors?: boolean;
        /**
         * Contains cors's id, extensions, and comments.
         */
        _cors?: Element;
        /**
         * OAuth | SMART-on-FHIR | NTLM | Basic | Kerberos | Certificates
         */
        service?: CodeableConcept[];
        /**
         * General description of how security works
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * Certificates associated with security profiles
         */
        certificate?: ConformanceRestSecurityCertificate[];
    }
    /**
     * Certificates associated with security profiles
     */
    interface ConformanceRestSecurityCertificate extends Element {
        /**
         * Mime type for certificate
         */
        type?: code;
        /**
         * Contains type's id, extensions, and comments.
         */
        _type?: Element;
        /**
         * Actual certificate
         */
        blob?: base64Binary;
        /**
         * Contains blob's id, extensions, and comments.
         */
        _blob?: Element;
    }
    /**
     * Resource served on the REST interface
     */
    interface ConformanceRestResource extends Element {
        /**
         * A resource type that is supported
         */
        type: code;
        /**
         * Contains type's id, extensions, and comments.
         */
        _type?: Element;
        /**
         * Base System profile for all uses of resource
         */
        profile?: Reference;
        /**
         * What operations are supported?
         */
        interaction: ConformanceRestResourceInteraction[];
        /**
         * no-version | versioned | versioned-update
         */
        versioning?: code;
        /**
         * Contains versioning's id, extensions, and comments.
         */
        _versioning?: Element;
        /**
         * Whether vRead can return past versions
         */
        readHistory?: boolean;
        /**
         * Contains readHistory's id, extensions, and comments.
         */
        _readHistory?: Element;
        /**
         * If update can commit to a new identity
         */
        updateCreate?: boolean;
        /**
         * Contains updateCreate's id, extensions, and comments.
         */
        _updateCreate?: Element;
        /**
         * If allows/uses conditional create
         */
        conditionalCreate?: boolean;
        /**
         * Contains conditionalCreate's id, extensions, and comments.
         */
        _conditionalCreate?: Element;
        /**
         * If allows/uses conditional update
         */
        conditionalUpdate?: boolean;
        /**
         * Contains conditionalUpdate's id, extensions, and comments.
         */
        _conditionalUpdate?: Element;
        /**
         * not-supported | single | multiple - how conditional delete is supported
         */
        conditionalDelete?: code;
        /**
         * Contains conditionalDelete's id, extensions, and comments.
         */
        _conditionalDelete?: Element;
        /**
         * _include values supported by the server
         */
        searchInclude?: string[];
        /**
         * Contains searchInclude's id, extensions, and comments.
         */
        _searchInclude?: Element[];
        /**
         * _revinclude values supported by the server
         */
        searchRevInclude?: string[];
        /**
         * Contains searchRevInclude's id, extensions, and comments.
         */
        _searchRevInclude?: Element[];
        /**
         * Search params supported by implementation
         */
        searchParam?: ConformanceRestResourceSearchParam[];
    }
    /**
     * What operations are supported?
     */
    interface ConformanceRestResourceInteraction extends Element {
        /**
         * read | vread | update | delete | history-instance | validate | history-type | create | search-type
         */
        code: code;
        /**
         * Contains code's id, extensions, and comments.
         */
        _code?: Element;
        /**
         * Anything special about operation behavior
         */
        documentation?: string;
        /**
         * Contains documentation's id, extensions, and comments.
         */
        _documentation?: Element;
    }
    /**
     * Search params supported by implementation
     */
    interface ConformanceRestResourceSearchParam extends Element {
        /**
         * Name of search parameter
         */
        name: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * Source of definition for parameter
         */
        definition?: uri;
        /**
         * Contains definition's id, extensions, and comments.
         */
        _definition?: Element;
        /**
         * number | date | string | token | reference | composite | quantity | uri
         */
        type: code;
        /**
         * Contains type's id, extensions, and comments.
         */
        _type?: Element;
        /**
         * Server-specific usage
         */
        documentation?: string;
        /**
         * Contains documentation's id, extensions, and comments.
         */
        _documentation?: Element;
        /**
         * Types of resource (if a resource reference)
         */
        target?: code[];
        /**
         * Contains target's id, extensions, and comments.
         */
        _target?: Element[];
        /**
         * missing | exact | contains | not | text | in | not-in | below | above | type
         */
        modifier?: code[];
        /**
         * Contains modifier's id, extensions, and comments.
         */
        _modifier?: Element[];
        /**
         * Chained names supported
         */
        chain?: string[];
        /**
         * Contains chain's id, extensions, and comments.
         */
        _chain?: Element[];
    }
    /**
     * What operations are supported?
     */
    interface ConformanceRestInteraction extends Element {
        /**
         * transaction | search-system | history-system
         */
        code: code;
        /**
         * Contains code's id, extensions, and comments.
         */
        _code?: Element;
        /**
         * Anything special about operation behavior
         */
        documentation?: string;
        /**
         * Contains documentation's id, extensions, and comments.
         */
        _documentation?: Element;
    }
    /**
     * Definition of an operation or a custom query
     */
    interface ConformanceRestOperation extends Element {
        /**
         * Name by which the operation/query is invoked
         */
        name: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * The defined operation/query
         */
        definition: Reference;
    }
    /**
     * Contact details of the publisher
     */
    interface OperationDefinitionContact extends Element {
        /**
         * Name of a individual to contact
         */
        name?: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * Contact details for individual or publisher
         */
        telecom?: ContactPoint[];
    }
    /**
     * Parameters for the operation/query
     */
    interface OperationDefinitionParameter extends Element {
        /**
         * Name in Parameters.parameter.name or in URL
         */
        name: code;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * in | out
         */
        use: code;
        /**
         * Contains use's id, extensions, and comments.
         */
        _use?: Element;
        /**
         * Minimum Cardinality
         */
        min: integer;
        /**
         * Contains min's id, extensions, and comments.
         */
        _min?: Element;
        /**
         * Maximum Cardinality (a number or *)
         */
        max: string;
        /**
         * Contains max's id, extensions, and comments.
         */
        _max?: Element;
        /**
         * Description of meaning/use
         */
        documentation?: string;
        /**
         * Contains documentation's id, extensions, and comments.
         */
        _documentation?: Element;
        /**
         * What type this parameter has
         */
        type?: code;
        /**
         * Contains type's id, extensions, and comments.
         */
        _type?: Element;
        /**
         * Profile on the type
         */
        profile?: Reference;
        /**
         * ValueSet details if this is coded
         */
        binding?: OperationDefinitionParameterBinding;
        /**
         * Parts of a Tuple Parameter
         */
        part?: OperationDefinitionParameter[];
    }
    /**
     * ValueSet details if this is coded
     */
    interface OperationDefinitionParameterBinding extends Element {
        /**
         * required | extensible | preferred | example
         */
        strength: code;
        /**
         * Contains strength's id, extensions, and comments.
         */
        _strength?: Element;
        /**
         * Source of value set
         */
        valueSetUri?: uri;
        /**
         * Contains valueSetUri's id, extensions, and comments.
         */
        _valueSetUri?: Element;
        /**
         * Source of value set
         */
        valueSetReference?: Reference;
    }
    /**
     * Definition of an operation or a named query
     */
    interface OperationDefinition extends DomainResource {
        /**
         * Logical url to reference this operation definition
         */
        url?: uri;
        /**
         * Contains url's id, extensions, and comments.
         */
        _url?: Element;
        /**
         * Logical id for this version of the operation definition
         */
        version?: string;
        /**
         * Contains version's id, extensions, and comments.
         */
        _version?: Element;
        /**
         * Informal name for this operation
         */
        name: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * draft | active | retired
         */
        status: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * operation | query
         */
        kind: code;
        /**
         * Contains kind's id, extensions, and comments.
         */
        _kind?: Element;
        /**
         * If for testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Contains experimental's id, extensions, and comments.
         */
        _experimental?: Element;
        /**
         * Name of the publisher (Organization or individual)
         */
        publisher?: string;
        /**
         * Contains publisher's id, extensions, and comments.
         */
        _publisher?: Element;
        /**
         * Contact details of the publisher
         */
        contact?: OperationDefinitionContact[];
        /**
         * Date for this version of the operation definition
         */
        date?: dateTime;
        /**
         * Contains date's id, extensions, and comments.
         */
        _date?: Element;
        /**
         * Natural language description of the operation
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * Why is this needed?
         */
        requirements?: string;
        /**
         * Contains requirements's id, extensions, and comments.
         */
        _requirements?: Element;
        /**
         * Whether content is unchanged by operation
         */
        idempotent?: boolean;
        /**
         * Contains idempotent's id, extensions, and comments.
         */
        _idempotent?: Element;
        /**
         * Name used to invoke the operation
         */
        code: code;
        /**
         * Contains code's id, extensions, and comments.
         */
        _code?: Element;
        /**
         * Additional information about use
         */
        notes?: string;
        /**
         * Contains notes's id, extensions, and comments.
         */
        _notes?: Element;
        /**
         * Marks this as a profile of the base
         */
        base?: Reference;
        /**
         * Invoke at the system level?
         */
        system: boolean;
        /**
         * Contains system's id, extensions, and comments.
         */
        _system?: Element;
        /**
         * Invoke at resource level for these type
         */
        type?: code[];
        /**
         * Contains type's id, extensions, and comments.
         */
        _type?: Element[];
        /**
         * Invoke on an instance?
         */
        instance: boolean;
        /**
         * Contains instance's id, extensions, and comments.
         */
        _instance?: Element;
        /**
         * Parameters for the operation/query
         */
        parameter?: OperationDefinitionParameter[];
    }
    /**
     * If messaging is supported
     */
    interface ConformanceMessaging extends Element {
        /**
         * A messaging service end point
         */
        endpoint?: ConformanceMessagingEndpoint[];
        /**
         * Reliable Message Cache Length (min)
         */
        reliableCache?: unsignedInt;
        /**
         * Contains reliableCache's id, extensions, and comments.
         */
        _reliableCache?: Element;
        /**
         * Messaging interface behavior details
         */
        documentation?: string;
        /**
         * Contains documentation's id, extensions, and comments.
         */
        _documentation?: Element;
        /**
         * Declare support for this event
         */
        event: ConformanceMessagingEvent[];
    }
    /**
     * A messaging service end point
     */
    interface ConformanceMessagingEndpoint extends Element {
        /**
         * http | ftp | mllp +
         */
        protocol: Coding;
        /**
         * Address of end point
         */
        address: uri;
        /**
         * Contains address's id, extensions, and comments.
         */
        _address?: Element;
    }
    /**
     * Declare support for this event
     */
    interface ConformanceMessagingEvent extends Element {
        /**
         * Event type
         */
        code: Coding;
        /**
         * Consequence | Currency | Notification
         */
        category?: code;
        /**
         * Contains category's id, extensions, and comments.
         */
        _category?: Element;
        /**
         * sender | receiver
         */
        mode: code;
        /**
         * Contains mode's id, extensions, and comments.
         */
        _mode?: Element;
        /**
         * Resource that's focus of message
         */
        focus: code;
        /**
         * Contains focus's id, extensions, and comments.
         */
        _focus?: Element;
        /**
         * Profile that describes the request
         */
        request: Reference;
        /**
         * Profile that describes the response
         */
        response: Reference;
        /**
         * Endpoint-specific event documentation
         */
        documentation?: string;
        /**
         * Contains documentation's id, extensions, and comments.
         */
        _documentation?: Element;
    }
    /**
     * Document definition
     */
    interface ConformanceDocument extends Element {
        /**
         * producer | consumer
         */
        mode: code;
        /**
         * Contains mode's id, extensions, and comments.
         */
        _mode?: Element;
        /**
         * Description of document support
         */
        documentation?: string;
        /**
         * Contains documentation's id, extensions, and comments.
         */
        _documentation?: Element;
        /**
         * Constraint on a resource used in the document
         */
        profile: Reference;
    }
    /**
     * A conformance statement
     */
    interface Conformance extends DomainResource {
        /**
         * Logical uri to reference this statement
         */
        url?: uri;
        /**
         * Contains url's id, extensions, and comments.
         */
        _url?: Element;
        /**
         * Logical id for this version of the statement
         */
        version?: string;
        /**
         * Contains version's id, extensions, and comments.
         */
        _version?: Element;
        /**
         * Informal name for this conformance statement
         */
        name?: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * draft | active | retired
         */
        status?: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * If for testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Contains experimental's id, extensions, and comments.
         */
        _experimental?: Element;
        /**
         * Name of the publisher (Organization or individual)
         */
        publisher?: string;
        /**
         * Contains publisher's id, extensions, and comments.
         */
        _publisher?: Element;
        /**
         * Contact details of the publisher
         */
        contact?: ConformanceContact[];
        /**
         * Publication Date(/time)
         */
        date: dateTime;
        /**
         * Contains date's id, extensions, and comments.
         */
        _date?: Element;
        /**
         * Human description of the conformance statement
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * Why is this needed?
         */
        requirements?: string;
        /**
         * Contains requirements's id, extensions, and comments.
         */
        _requirements?: Element;
        /**
         * Use and/or Publishing restrictions
         */
        copyright?: string;
        /**
         * Contains copyright's id, extensions, and comments.
         */
        _copyright?: Element;
        /**
         * instance | capability | requirements
         */
        kind: code;
        /**
         * Contains kind's id, extensions, and comments.
         */
        _kind?: Element;
        /**
         * Software that is covered by this conformance statement
         */
        software?: ConformanceSoftware;
        /**
         * If this describes a specific instance
         */
        implementation?: ConformanceImplementation;
        /**
         * FHIR Version the system uses
         */
        fhirVersion: id;
        /**
         * Contains fhirVersion's id, extensions, and comments.
         */
        _fhirVersion?: Element;
        /**
         * no | extensions | elements | both
         */
        acceptUnknown: code;
        /**
         * Contains acceptUnknown's id, extensions, and comments.
         */
        _acceptUnknown?: Element;
        /**
         * formats supported (xml | json | mime type)
         */
        format: code[];
        /**
         * Contains format's id, extensions, and comments.
         */
        _format?: Element[];
        /**
         * Profiles for use cases supported
         */
        profile?: Reference[];
        /**
         * If the endpoint is a RESTful one
         */
        rest?: ConformanceRest[];
        /**
         * If messaging is supported
         */
        messaging?: ConformanceMessaging[];
        /**
         * Document definition
         */
        document?: ConformanceDocument[];
    }
    /**
     * Contact details of the publisher
     */
    interface DataElementContact extends Element {
        /**
         * Name of a individual to contact
         */
        name?: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * Contact details for individual or publisher
         */
        telecom?: ContactPoint[];
    }
    /**
     * External specification mapped to
     */
    interface DataElementMapping extends Element {
        /**
         * Internal id when this mapping is used
         */
        identity: id;
        /**
         * Contains identity's id, extensions, and comments.
         */
        _identity?: Element;
        /**
         * Identifies what this mapping refers to
         */
        uri?: uri;
        /**
         * Contains uri's id, extensions, and comments.
         */
        _uri?: Element;
        /**
         * Names what this mapping refers to
         */
        name?: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * Versions, Issues, Scope limitations etc
         */
        comments?: string;
        /**
         * Contains comments's id, extensions, and comments.
         */
        _comments?: Element;
    }
    /**
     * Resource data element
     */
    interface DataElement extends DomainResource {
        /**
         * Globally unique logical id for data element
         */
        url?: uri;
        /**
         * Contains url's id, extensions, and comments.
         */
        _url?: Element;
        /**
         * Logical id to reference this data element
         */
        identifier?: Identifier[];
        /**
         * Logical id for this version of the data element
         */
        version?: string;
        /**
         * Contains version's id, extensions, and comments.
         */
        _version?: Element;
        /**
         * Descriptive label for this element definition
         */
        name?: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * draft | active | retired
         */
        status: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * If for testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Contains experimental's id, extensions, and comments.
         */
        _experimental?: Element;
        /**
         * Name of the publisher (Organization or individual)
         */
        publisher?: string;
        /**
         * Contains publisher's id, extensions, and comments.
         */
        _publisher?: Element;
        /**
         * Contact details of the publisher
         */
        contact?: DataElementContact[];
        /**
         * Date for this version of the data element
         */
        date?: dateTime;
        /**
         * Contains date's id, extensions, and comments.
         */
        _date?: Element;
        /**
         * Content intends to support these contexts
         */
        useContext?: CodeableConcept[];
        /**
         * Use and/or Publishing restrictions
         */
        copyright?: string;
        /**
         * Contains copyright's id, extensions, and comments.
         */
        _copyright?: Element;
        /**
         * comparable | fully-specified | equivalent | convertable | scaleable | flexible
         */
        stringency?: code;
        /**
         * Contains stringency's id, extensions, and comments.
         */
        _stringency?: Element;
        /**
         * External specification mapped to
         */
        mapping?: DataElementMapping[];
        /**
         * Definition of element
         */
        element: ElementDefinition[];
    }
    /**
     * Step taken to address
     */
    interface DetectedIssueMitigation extends Element {
        /**
         * What mitigation?
         */
        action: CodeableConcept;
        /**
         * Date committed
         */
        date?: dateTime;
        /**
         * Contains date's id, extensions, and comments.
         */
        _date?: Element;
        /**
         * Who is committing?
         */
        author?: Reference;
    }
    /**
     * Clinical issue with action
     */
    interface DetectedIssue extends DomainResource {
        /**
         * Associated patient
         */
        patient?: Reference;
        /**
         * E.g. Drug-drug, duplicate therapy, etc.
         */
        category?: CodeableConcept;
        /**
         * high | moderate | low
         */
        severity?: code;
        /**
         * Contains severity's id, extensions, and comments.
         */
        _severity?: Element;
        /**
         * Problem resource
         */
        implicated?: Reference[];
        /**
         * Description and context
         */
        detail?: string;
        /**
         * Contains detail's id, extensions, and comments.
         */
        _detail?: Element;
        /**
         * When identified
         */
        date?: dateTime;
        /**
         * Contains date's id, extensions, and comments.
         */
        _date?: Element;
        /**
         * The provider or device that identified the issue
         */
        author?: Reference;
        /**
         * Unique id for the detected issue
         */
        identifier?: Identifier;
        /**
         * Authority for issue
         */
        reference?: uri;
        /**
         * Contains reference's id, extensions, and comments.
         */
        _reference?: Element;
        /**
         * Step taken to address
         */
        mitigation?: DetectedIssueMitigation[];
    }
    interface DeviceUseStatement extends DomainResource {
        /**
         * Target body site
         */
        bodySiteCodeableConcept?: CodeableConcept;
        /**
         * Target body site
         */
        bodySiteReference?: Reference;
        whenUsed?: Period;
        device: Reference;
        identifier?: Identifier[];
        indication?: CodeableConcept[];
        notes?: string[];
        /**
         * Contains notes's id, extensions, and comments.
         */
        _notes?: Element[];
        recordedOn?: dateTime;
        /**
         * Contains recordedOn's id, extensions, and comments.
         */
        _recordedOn?: Element;
        subject: Reference;
        timingTiming?: Timing;
        timingPeriod?: Period;
        timingDateTime?: dateTime;
        /**
         * Contains timingDateTime's id, extensions, and comments.
         */
        _timingDateTime?: Element;
    }
    /**
     * The items included
     */
    interface DocumentManifestContent extends Element {
        /**
         * Contents of this set of documents
         */
        pAttachment?: Attachment;
        /**
         * Contents of this set of documents
         */
        pReference?: Reference;
    }
    /**
     * Related things
     */
    interface DocumentManifestRelated extends Element {
        /**
         * Identifiers of things that are related
         */
        identifier?: Identifier;
        /**
         * Related Resource
         */
        ref?: Reference;
    }
    /**
     * A manifest that defines a set of documents
     */
    interface DocumentManifest extends DomainResource {
        /**
         * Unique Identifier for the set of documents
         */
        masterIdentifier?: Identifier;
        /**
         * Other identifiers for the manifest
         */
        identifier?: Identifier[];
        /**
         * The subject of the set of documents
         */
        subject?: Reference;
        /**
         * Intended to get notified about this set of documents
         */
        recipient?: Reference[];
        /**
         * What kind of document set this is
         */
        type?: CodeableConcept;
        /**
         * Who and/or what authored the manifest
         */
        author?: Reference[];
        /**
         * When this document manifest created
         */
        created?: dateTime;
        /**
         * Contains created's id, extensions, and comments.
         */
        _created?: Element;
        /**
         * The source system/application/software
         */
        source?: uri;
        /**
         * Contains source's id, extensions, and comments.
         */
        _source?: Element;
        /**
         * current | superseded | entered-in-error
         */
        status: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * Human-readable description (title)
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * The items included
         */
        content: DocumentManifestContent[];
        /**
         * Related things
         */
        related?: DocumentManifestRelated[];
    }
    /**
     * Eligibility request
     */
    interface EligibilityRequest extends DomainResource {
        /**
         * Business Identifier
         */
        identifier?: Identifier[];
        /**
         * Resource version
         */
        ruleset?: Coding;
        /**
         * Original version
         */
        originalRuleset?: Coding;
        /**
         * Creation date
         */
        created?: dateTime;
        /**
         * Contains created's id, extensions, and comments.
         */
        _created?: Element;
        /**
         * Insurer
         */
        target?: Reference;
        /**
         * Responsible practitioner
         */
        provider?: Reference;
        /**
         * Responsible organization
         */
        organization?: Reference;
    }
    /**
     * EligibilityResponse resource
     */
    interface EligibilityResponse extends DomainResource {
        /**
         * Business Identifier
         */
        identifier?: Identifier[];
        /**
         * Claim reference
         */
        request?: Reference;
        /**
         * complete | error
         */
        outcome?: code;
        /**
         * Contains outcome's id, extensions, and comments.
         */
        _outcome?: Element;
        /**
         * Disposition Message
         */
        disposition?: string;
        /**
         * Contains disposition's id, extensions, and comments.
         */
        _disposition?: Element;
        /**
         * Resource version
         */
        ruleset?: Coding;
        /**
         * Original version
         */
        originalRuleset?: Coding;
        /**
         * Creation date
         */
        created?: dateTime;
        /**
         * Contains created's id, extensions, and comments.
         */
        _created?: Element;
        /**
         * Insurer
         */
        organization?: Reference;
        /**
         * Responsible practitioner
         */
        requestProvider?: Reference;
        /**
         * Responsible organization
         */
        requestOrganization?: Reference;
    }
    /**
     * Enrollment request
     */
    interface EnrollmentRequest extends DomainResource {
        /**
         * Business Identifier
         */
        identifier?: Identifier[];
        /**
         * Resource version
         */
        ruleset?: Coding;
        /**
         * Original version
         */
        originalRuleset?: Coding;
        /**
         * Creation date
         */
        created?: dateTime;
        /**
         * Contains created's id, extensions, and comments.
         */
        _created?: Element;
        /**
         * Insurer
         */
        target?: Reference;
        /**
         * Responsible practitioner
         */
        provider?: Reference;
        /**
         * Responsible organization
         */
        organization?: Reference;
        /**
         * The subject of the Products and Services
         */
        subject: Reference;
        /**
         * Insurance information
         */
        coverage: Reference;
        /**
         * Patient relationship to subscriber
         */
        relationship: Coding;
    }
    /**
     * EnrollmentResponse resource
     */
    interface EnrollmentResponse extends DomainResource {
        /**
         * Business Identifier
         */
        identifier?: Identifier[];
        /**
         * Claim reference
         */
        request?: Reference;
        /**
         * complete | error
         */
        outcome?: code;
        /**
         * Contains outcome's id, extensions, and comments.
         */
        _outcome?: Element;
        /**
         * Disposition Message
         */
        disposition?: string;
        /**
         * Contains disposition's id, extensions, and comments.
         */
        _disposition?: Element;
        /**
         * Resource version
         */
        ruleset?: Coding;
        /**
         * Original version
         */
        originalRuleset?: Coding;
        /**
         * Creation date
         */
        created?: dateTime;
        /**
         * Contains created's id, extensions, and comments.
         */
        _created?: Element;
        /**
         * Insurer
         */
        organization?: Reference;
        /**
         * Responsible practitioner
         */
        requestProvider?: Reference;
        /**
         * Responsible organization
         */
        requestOrganization?: Reference;
    }
    /**
     * Remittance resource
     */
    interface ExplanationOfBenefit extends DomainResource {
        /**
         * Business Identifier
         */
        identifier?: Identifier[];
        /**
         * Claim reference
         */
        request?: Reference;
        /**
         * complete | error
         */
        outcome?: code;
        /**
         * Contains outcome's id, extensions, and comments.
         */
        _outcome?: Element;
        /**
         * Disposition Message
         */
        disposition?: string;
        /**
         * Contains disposition's id, extensions, and comments.
         */
        _disposition?: Element;
        /**
         * Resource version
         */
        ruleset?: Coding;
        /**
         * Original version
         */
        originalRuleset?: Coding;
        /**
         * Creation date
         */
        created?: dateTime;
        /**
         * Contains created's id, extensions, and comments.
         */
        _created?: Element;
        /**
         * Insurer
         */
        organization?: Reference;
        /**
         * Responsible practitioner
         */
        requestProvider?: Reference;
        /**
         * Responsible organization
         */
        requestOrganization?: Reference;
    }
    /**
     * Key information to flag to healthcare providers
     */
    interface Flag extends DomainResource {
        /**
         * Business identifier
         */
        identifier?: Identifier[];
        /**
         * Clinical, administrative, etc.
         */
        category?: CodeableConcept;
        /**
         * active | inactive | entered-in-error
         */
        status: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * Time period when flag is active
         */
        period?: Period;
        /**
         * Who/What is flag about?
         */
        subject: Reference;
        /**
         * Alert relevant during encounter
         */
        encounter?: Reference;
        /**
         * Flag creator
         */
        author?: Reference;
        /**
         * Partially deaf, Requires easy open caps, No permanent address, etc.
         */
        code: CodeableConcept;
    }
    /**
     * Administration / non-administration reasons
     */
    interface ImmunizationExplanation extends Element {
        /**
         * Why immunization occurred
         */
        reason?: CodeableConcept[];
        /**
         * Why immunization did not occur
         */
        reasonNotGiven?: CodeableConcept[];
    }
    /**
     * Details of a reaction that follows immunization
     */
    interface ImmunizationReaction extends Element {
        /**
         * When did reaction start?
         */
        date?: dateTime;
        /**
         * Contains date's id, extensions, and comments.
         */
        _date?: Element;
        /**
         * Additional information on reaction
         */
        detail?: Reference;
        /**
         * Was reaction self-reported?
         */
        reported?: boolean;
        /**
         * Contains reported's id, extensions, and comments.
         */
        _reported?: Element;
    }
    /**
     * What protocol was followed
     */
    interface ImmunizationVaccinationProtocol extends Element {
        /**
         * What dose number within series?
         */
        doseSequence: positiveInt;
        /**
         * Contains doseSequence's id, extensions, and comments.
         */
        _doseSequence?: Element;
        /**
         * Details of vaccine protocol
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * Who is responsible for protocol
         */
        authority?: Reference;
        /**
         * Name of vaccine series
         */
        series?: string;
        /**
         * Contains series's id, extensions, and comments.
         */
        _series?: Element;
        /**
         * Recommended number of doses for immunity
         */
        seriesDoses?: positiveInt;
        /**
         * Contains seriesDoses's id, extensions, and comments.
         */
        _seriesDoses?: Element;
        /**
         * Disease immunized against
         */
        targetDisease: CodeableConcept[];
        /**
         * Does dose count towards immunity?
         */
        doseStatus: CodeableConcept;
        /**
         * Why does does count/not count?
         */
        doseStatusReason?: CodeableConcept;
    }
    /**
     * Immunization event information
     */
    interface Immunization extends DomainResource {
        /**
         * Business identifier
         */
        identifier?: Identifier[];
        /**
         * in-progress | on-hold | completed | entered-in-error | stopped
         */
        status: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * Vaccination administration date
         */
        date?: dateTime;
        /**
         * Contains date's id, extensions, and comments.
         */
        _date?: Element;
        /**
         * Vaccine product administered
         */
        vaccineCode: CodeableConcept;
        /**
         * Who was immunized?
         */
        patient: Reference;
        /**
         * Flag for whether immunization was given
         */
        wasNotGiven: boolean;
        /**
         * Contains wasNotGiven's id, extensions, and comments.
         */
        _wasNotGiven?: Element;
        /**
         * Is this a self-reported record?
         */
        reported: boolean;
        /**
         * Contains reported's id, extensions, and comments.
         */
        _reported?: Element;
        /**
         * Who administered vaccine?
         */
        performer?: Reference;
        /**
         * Who ordered vaccination?
         */
        requester?: Reference;
        /**
         * Encounter administered as part of
         */
        encounter?: Reference;
        /**
         * Vaccine manufacturer
         */
        manufacturer?: Reference;
        /**
         * Where did vaccination occur?
         */
        location?: Reference;
        /**
         * Vaccine lot number
         */
        lotNumber?: string;
        /**
         * Contains lotNumber's id, extensions, and comments.
         */
        _lotNumber?: Element;
        /**
         * Vaccine expiration date
         */
        expirationDate?: date;
        /**
         * Contains expirationDate's id, extensions, and comments.
         */
        _expirationDate?: Element;
        /**
         * Body site vaccine  was administered
         */
        site?: CodeableConcept;
        /**
         * How vaccine entered body
         */
        route?: CodeableConcept;
        /**
         * Amount of vaccine administered
         */
        doseQuantity?: Quantity;
        /**
         * Vaccination notes
         */
        note?: Annotation[];
        /**
         * Administration / non-administration reasons
         */
        explanation?: ImmunizationExplanation;
        /**
         * Details of a reaction that follows immunization
         */
        reaction?: ImmunizationReaction[];
        /**
         * What protocol was followed
         */
        vaccinationProtocol?: ImmunizationVaccinationProtocol[];
    }
    /**
     * Vaccine administration recommendations
     */
    interface ImmunizationRecommendationRecommendation extends Element {
        /**
         * Date recommendation created
         */
        date: dateTime;
        /**
         * Contains date's id, extensions, and comments.
         */
        _date?: Element;
        /**
         * Vaccine recommendation applies to
         */
        vaccineCode: CodeableConcept;
        /**
         * Recommended dose number
         */
        doseNumber?: positiveInt;
        /**
         * Contains doseNumber's id, extensions, and comments.
         */
        _doseNumber?: Element;
        /**
         * Vaccine administration status
         */
        forecastStatus: CodeableConcept;
        /**
         * Dates governing proposed immunization
         */
        dateCriterion?: ImmunizationRecommendationRecommendationDateCriterion[];
        /**
         * Protocol used by recommendation
         */
        protocol?: ImmunizationRecommendationRecommendationProtocol;
        /**
         * Past immunizations supporting recommendation
         */
        supportingImmunization?: Reference[];
        /**
         * Patient observations supporting recommendation
         */
        supportingPatientInformation?: Reference[];
    }
    /**
     * Dates governing proposed immunization
     */
    interface ImmunizationRecommendationRecommendationDateCriterion extends Element {
        /**
         * Type of date
         */
        code: CodeableConcept;
        /**
         * Recommended date
         */
        value: dateTime;
        /**
         * Contains value's id, extensions, and comments.
         */
        _value?: Element;
    }
    /**
     * Protocol used by recommendation
     */
    interface ImmunizationRecommendationRecommendationProtocol extends Element {
        /**
         * Number of dose within sequence
         */
        doseSequence?: integer;
        /**
         * Contains doseSequence's id, extensions, and comments.
         */
        _doseSequence?: Element;
        /**
         * Protocol details
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * Who is responsible for protocol
         */
        authority?: Reference;
        /**
         * Name of vaccination series
         */
        series?: string;
        /**
         * Contains series's id, extensions, and comments.
         */
        _series?: Element;
    }
    /**
     * Guidance or advice relating to an immunization
     */
    interface ImmunizationRecommendation extends DomainResource {
        /**
         * Business identifier
         */
        identifier?: Identifier[];
        /**
         * Who this profile is for
         */
        patient: Reference;
        /**
         * Vaccine administration recommendations
         */
        recommendation: ImmunizationRecommendationRecommendation[];
    }
    /**
     * Contact details of the publisher
     */
    interface ImplementationGuideContact extends Element {
        /**
         * Name of a individual to contact
         */
        name?: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * Contact details for individual or publisher
         */
        telecom?: ContactPoint[];
    }
    /**
     * Another Implementation guide this depends on
     */
    interface ImplementationGuideDependency extends Element {
        /**
         * reference | inclusion
         */
        type: code;
        /**
         * Contains type's id, extensions, and comments.
         */
        _type?: Element;
        /**
         * Where to find dependency
         */
        uri: uri;
        /**
         * Contains uri's id, extensions, and comments.
         */
        _uri?: Element;
    }
    /**
     * Group of resources as used in .page.package
     */
    interface ImplementationGuidePackage extends Element {
        /**
         * Name used .page.package
         */
        name: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * Human readable text describing the package
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * Resource in the implementation guide
         */
        resource: ImplementationGuidePackageResource[];
    }
    /**
     * Resource in the implementation guide
     */
    interface ImplementationGuidePackageResource extends Element {
        /**
         * example | terminology | profile | extension | dictionary | logical
         */
        purpose: code;
        /**
         * Contains purpose's id, extensions, and comments.
         */
        _purpose?: Element;
        /**
         * Human Name for the resource
         */
        name?: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * Reason why included in guide
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * Short code to identify the resource
         */
        acronym?: string;
        /**
         * Contains acronym's id, extensions, and comments.
         */
        _acronym?: Element;
        /**
         * Location of the resource
         */
        sourceUri?: uri;
        /**
         * Contains sourceUri's id, extensions, and comments.
         */
        _sourceUri?: Element;
        /**
         * Location of the resource
         */
        sourceReference?: Reference;
        /**
         * Resource this is an example of (if applicable)
         */
        exampleFor?: Reference;
    }
    /**
     * Profiles that apply globally
     */
    interface ImplementationGuideGlobal extends Element {
        /**
         * Type this profiles applies to
         */
        type: code;
        /**
         * Contains type's id, extensions, and comments.
         */
        _type?: Element;
        /**
         * Profile that all resources must conform to
         */
        profile: Reference;
    }
    /**
     * Page/Section in the Guide
     */
    interface ImplementationGuidePage extends Element {
        /**
         * Where to find that page
         */
        source: uri;
        /**
         * Contains source's id, extensions, and comments.
         */
        _source?: Element;
        /**
         * Short name shown for navigational assistance
         */
        name: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * page | example | list | include | directory | dictionary | toc | resource
         */
        kind: code;
        /**
         * Contains kind's id, extensions, and comments.
         */
        _kind?: Element;
        /**
         * Kind of resource to include in the list
         */
        type?: code[];
        /**
         * Contains type's id, extensions, and comments.
         */
        _type?: Element[];
        /**
         * Name of package to include
         */
        package?: string[];
        /**
         * Contains package's id, extensions, and comments.
         */
        _package?: Element[];
        /**
         * Format of the page (e.g. html, markdown etc)
         */
        format?: code;
        /**
         * Contains format's id, extensions, and comments.
         */
        _format?: Element;
        /**
         * Nested Pages / Sections
         */
        page?: ImplementationGuidePage[];
    }
    /**
     * A set of rules about how FHIR is used
     */
    interface ImplementationGuide extends DomainResource {
        /**
         * Literal URL used to reference this Implementation Guide
         */
        url: uri;
        /**
         * Contains url's id, extensions, and comments.
         */
        _url?: Element;
        /**
         * Logical id for this version of the Implementation Guide
         */
        version?: string;
        /**
         * Contains version's id, extensions, and comments.
         */
        _version?: Element;
        /**
         * Informal name for this Implementation Guide
         */
        name: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * draft | active | retired
         */
        status: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * If for testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Contains experimental's id, extensions, and comments.
         */
        _experimental?: Element;
        /**
         * Name of the publisher (Organization or individual)
         */
        publisher?: string;
        /**
         * Contains publisher's id, extensions, and comments.
         */
        _publisher?: Element;
        /**
         * Contact details of the publisher
         */
        contact?: ImplementationGuideContact[];
        /**
         * Date for this version of the Implementation Guide
         */
        date?: dateTime;
        /**
         * Contains date's id, extensions, and comments.
         */
        _date?: Element;
        /**
         * Natural language description of the Implementation Guide
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * The implementation guide is intended to support these contexts
         */
        useContext?: CodeableConcept[];
        /**
         * Use and/or Publishing restrictions
         */
        copyright?: string;
        /**
         * Contains copyright's id, extensions, and comments.
         */
        _copyright?: Element;
        /**
         * FHIR Version this Implementation Guide targets
         */
        fhirVersion?: id;
        /**
         * Contains fhirVersion's id, extensions, and comments.
         */
        _fhirVersion?: Element;
        /**
         * Another Implementation guide this depends on
         */
        dependency?: ImplementationGuideDependency[];
        /**
         * Group of resources as used in .page.package
         */
        package: ImplementationGuidePackage[];
        /**
         * Profiles that apply globally
         */
        global?: ImplementationGuideGlobal[];
        /**
         * Image, css, script, etc
         */
        binary?: uri[];
        /**
         * Contains binary's id, extensions, and comments.
         */
        _binary?: Element[];
        /**
         * Page/Section in the Guide
         */
        page: ImplementationGuidePage;
    }
    /**
     * Entries in the list
     */
    interface ListEntry extends Element {
        /**
         * Status/Workflow information about this item
         */
        flag?: CodeableConcept;
        /**
         * If this item is actually marked as deleted
         */
        deleted?: boolean;
        /**
         * Contains deleted's id, extensions, and comments.
         */
        _deleted?: Element;
        /**
         * When item added to list
         */
        date?: dateTime;
        /**
         * Contains date's id, extensions, and comments.
         */
        _date?: Element;
        /**
         * Actual entry
         */
        item: Reference;
    }
    /**
     * Information summarized from a list of other resources
     */
    interface List extends DomainResource {
        /**
         * Business identifier
         */
        identifier?: Identifier[];
        /**
         * Descriptive name for the list
         */
        title?: string;
        /**
         * Contains title's id, extensions, and comments.
         */
        _title?: Element;
        /**
         * What the purpose of this list is
         */
        code?: CodeableConcept;
        /**
         * If all resources have the same subject
         */
        subject?: Reference;
        /**
         * Who and/or what defined the list contents (aka Author)
         */
        source?: Reference;
        /**
         * Context in which list created
         */
        encounter?: Reference;
        /**
         * current | retired | entered-in-error
         */
        status: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * When the list was prepared
         */
        date?: dateTime;
        /**
         * Contains date's id, extensions, and comments.
         */
        _date?: Element;
        /**
         * What order the list has
         */
        orderedBy?: CodeableConcept;
        /**
         * working | snapshot | changes
         */
        mode: code;
        /**
         * Contains mode's id, extensions, and comments.
         */
        _mode?: Element;
        /**
         * Comments about the list
         */
        note?: string;
        /**
         * Contains note's id, extensions, and comments.
         */
        _note?: Element;
        /**
         * Entries in the list
         */
        entry?: ListEntry[];
        /**
         * Why list is empty
         */
        emptyReason?: CodeableConcept;
    }
    /**
     * Details of how medication was taken
     */
    interface MedicationAdministrationDosage extends Element {
        /**
         * Dosage Instructions
         */
        text?: string;
        /**
         * Contains text's id, extensions, and comments.
         */
        _text?: Element;
        /**
         * Body site administered to
         */
        siteCodeableConcept?: CodeableConcept;
        /**
         * Body site administered to
         */
        siteReference?: Reference;
        /**
         * Path of substance into body
         */
        route?: CodeableConcept;
        /**
         * How drug was administered
         */
        method?: CodeableConcept;
        /**
         * Amount administered in one dose
         */
        quantity?: Quantity;
        /**
         * Dose quantity per unit of time
         */
        rateRatio?: Ratio;
        /**
         * Dose quantity per unit of time
         */
        rateRange?: Range;
    }
    /**
     * Administration of medication to a patient
     */
    interface MedicationAdministration extends DomainResource {
        /**
         * External identifier
         */
        identifier?: Identifier[];
        /**
         * in-progress | on-hold | completed | entered-in-error | stopped
         */
        status: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * Who received medication?
         */
        patient: Reference;
        /**
         * Who administered substance?
         */
        practitioner?: Reference;
        /**
         * Encounter administered as part of
         */
        encounter?: Reference;
        /**
         * Order administration performed against
         */
        prescription?: Reference;
        /**
         * True if medication not administered
         */
        wasNotGiven?: boolean;
        /**
         * Contains wasNotGiven's id, extensions, and comments.
         */
        _wasNotGiven?: Element;
        /**
         * Reason administration not performed
         */
        reasonNotGiven?: CodeableConcept[];
        /**
         * Reason administration performed
         */
        reasonGiven?: CodeableConcept[];
        /**
         * Start and end time of administration
         */
        effectiveTimeDateTime?: dateTime;
        /**
         * Contains effectiveTimeDateTime's id, extensions, and comments.
         */
        _effectiveTimeDateTime?: Element;
        /**
         * Start and end time of administration
         */
        effectiveTimePeriod?: Period;
        /**
         * What was administered?
         */
        medicationCodeableConcept?: CodeableConcept;
        /**
         * What was administered?
         */
        medicationReference?: Reference;
        /**
         * Device used to administer
         */
        device?: Reference[];
        /**
         * Information about the administration
         */
        note?: string;
        /**
         * Contains note's id, extensions, and comments.
         */
        _note?: Element;
        /**
         * Details of how medication was taken
         */
        dosage?: MedicationAdministrationDosage;
    }
    /**
     * Medicine administration instructions to the patient/carer
     */
    interface MedicationDispenseDosageInstruction extends Element {
        /**
         * Dosage Instructions
         */
        text?: string;
        /**
         * Contains text's id, extensions, and comments.
         */
        _text?: Element;
        /**
         * E.g. "Take with food"
         */
        additionalInstructions?: CodeableConcept;
        /**
         * When medication should be administered
         */
        timing?: Timing;
        /**
         * Take "as needed" f(or x)
         */
        asNeededBoolean?: boolean;
        /**
         * Contains asNeededBoolean's id, extensions, and comments.
         */
        _asNeededBoolean?: Element;
        /**
         * Take "as needed" f(or x)
         */
        asNeededCodeableConcept?: CodeableConcept;
        /**
         * Body site to administer to
         */
        siteCodeableConcept?: CodeableConcept;
        /**
         * Body site to administer to
         */
        siteReference?: Reference;
        /**
         * How drug should enter body
         */
        route?: CodeableConcept;
        /**
         * Technique for administering medication
         */
        method?: CodeableConcept;
        /**
         * Amount of medication per dose
         */
        doseRange?: Range;
        /**
         * Amount of medication per dose
         */
        doseQuantity?: Quantity;
        /**
         * Amount of medication per unit of time
         */
        rateRatio?: Ratio;
        /**
         * Amount of medication per unit of time
         */
        rateRange?: Range;
        /**
         * Upper limit on medication per unit of time
         */
        maxDosePerPeriod?: Ratio;
    }
    /**
     * Deals with substitution of one medicine for another
     */
    interface MedicationDispenseSubstitution extends Element {
        /**
         * Type of substitiution
         */
        type: CodeableConcept;
        /**
         * Why was substitution made
         */
        reason?: CodeableConcept[];
        /**
         * Who is responsible for the substitution
         */
        responsibleParty?: Reference[];
    }
    /**
     * Dispensing a medication to a named patient
     */
    interface MedicationDispense extends DomainResource {
        /**
         * External identifier
         */
        identifier?: Identifier;
        /**
         * in-progress | on-hold | completed | entered-in-error | stopped
         */
        status?: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * Who the dispense is for
         */
        patient?: Reference;
        /**
         * Practitioner responsible for dispensing medication
         */
        dispenser?: Reference;
        /**
         * Medication order that authorizes the dispense
         */
        authorizingPrescription?: Reference[];
        /**
         * Trial fill, partial fill, emergency fill, etc.
         */
        type?: CodeableConcept;
        /**
         * Amount dispensed
         */
        quantity?: Quantity;
        /**
         * Days Supply
         */
        daysSupply?: Quantity;
        /**
         * What medication was supplied
         */
        medicationCodeableConcept?: CodeableConcept;
        /**
         * What medication was supplied
         */
        medicationReference?: Reference;
        /**
         * Dispense processing time
         */
        whenPrepared?: dateTime;
        /**
         * Contains whenPrepared's id, extensions, and comments.
         */
        _whenPrepared?: Element;
        /**
         * Handover time
         */
        whenHandedOver?: dateTime;
        /**
         * Contains whenHandedOver's id, extensions, and comments.
         */
        _whenHandedOver?: Element;
        /**
         * Where the medication was sent
         */
        destination?: Reference;
        /**
         * Who collected the medication
         */
        receiver?: Reference[];
        /**
         * Information about the dispense
         */
        note?: string;
        /**
         * Contains note's id, extensions, and comments.
         */
        _note?: Element;
        /**
         * Medicine administration instructions to the patient/carer
         */
        dosageInstruction?: MedicationDispenseDosageInstruction[];
        /**
         * Deals with substitution of one medicine for another
         */
        substitution?: MedicationDispenseSubstitution;
    }
    /**
     * If this is a reply to prior message
     */
    interface MessageHeaderResponse extends Element {
        /**
         * Id of original message
         */
        identifier: id;
        /**
         * Contains identifier's id, extensions, and comments.
         */
        _identifier?: Element;
        /**
         * ok | transient-error | fatal-error
         */
        code: code;
        /**
         * Contains code's id, extensions, and comments.
         */
        _code?: Element;
        /**
         * Specific list of hints/warnings/errors
         */
        details?: Reference;
    }
    /**
     * A single issue associated with the action
     */
    interface OperationOutcomeIssue extends Element {
        /**
         * fatal | error | warning | information
         */
        severity: code;
        /**
         * Contains severity's id, extensions, and comments.
         */
        _severity?: Element;
        /**
         * Error or warning code
         */
        code: code;
        /**
         * Contains code's id, extensions, and comments.
         */
        _code?: Element;
        /**
         * Additional details about the error
         */
        details?: CodeableConcept;
        /**
         * Additional diagnostic information about the issue
         */
        diagnostics?: string;
        /**
         * Contains diagnostics's id, extensions, and comments.
         */
        _diagnostics?: Element;
        /**
         * XPath of element(s) related to issue
         */
        location?: string[];
        /**
         * Contains location's id, extensions, and comments.
         */
        _location?: Element[];
    }
    /**
     * Information about the success/failure of an action
     */
    interface OperationOutcome extends DomainResource {
        /**
         * A single issue associated with the action
         */
        issue: OperationOutcomeIssue[];
    }
    /**
     * Message Source Application
     */
    interface MessageHeaderSource extends Element {
        /**
         * Name of system
         */
        name?: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * Name of software running the system
         */
        software?: string;
        /**
         * Contains software's id, extensions, and comments.
         */
        _software?: Element;
        /**
         * Version of software running
         */
        version?: string;
        /**
         * Contains version's id, extensions, and comments.
         */
        _version?: Element;
        /**
         * Human contact for problems
         */
        contact?: ContactPoint;
        /**
         * Actual message source address or id
         */
        endpoint: uri;
        /**
         * Contains endpoint's id, extensions, and comments.
         */
        _endpoint?: Element;
    }
    /**
     * Message Destination Application(s)
     */
    interface MessageHeaderDestination extends Element {
        /**
         * Name of system
         */
        name?: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * Particular delivery destination within the destination
         */
        target?: Reference;
        /**
         * Actual destination address or id
         */
        endpoint: uri;
        /**
         * Contains endpoint's id, extensions, and comments.
         */
        _endpoint?: Element;
    }
    /**
     * A resource that describes a message that is exchanged between systems
     */
    interface MessageHeader extends DomainResource {
        /**
         * Time that the message was sent
         */
        timestamp: instant;
        /**
         * Contains timestamp's id, extensions, and comments.
         */
        _timestamp?: Element;
        /**
         * Code for the event this message represents
         */
        event: Coding;
        /**
         * If this is a reply to prior message
         */
        response?: MessageHeaderResponse;
        /**
         * Message Source Application
         */
        source: MessageHeaderSource;
        /**
         * Message Destination Application(s)
         */
        destination?: MessageHeaderDestination[];
        /**
         * The source of the data entry
         */
        enterer?: Reference;
        /**
         * The source of the decision
         */
        author?: Reference;
        /**
         * Intended "real-world" recipient for the data
         */
        receiver?: Reference;
        /**
         * Final responsibility for event
         */
        responsible?: Reference;
        /**
         * Cause of event
         */
        reason?: CodeableConcept;
        /**
         * The actual content of the message
         */
        data?: Reference[];
    }
    /**
     * Contact details of the publisher
     */
    interface NamingSystemContact extends Element {
        /**
         * Name of a individual to contact
         */
        name?: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * Contact details for individual or publisher
         */
        telecom?: ContactPoint[];
    }
    /**
     * Unique identifiers used for system
     */
    interface NamingSystemUniqueId extends Element {
        /**
         * oid | uuid | uri | other
         */
        type: code;
        /**
         * Contains type's id, extensions, and comments.
         */
        _type?: Element;
        /**
         * The unique identifier
         */
        value: string;
        /**
         * Contains value's id, extensions, and comments.
         */
        _value?: Element;
        /**
         * Is this the id that should be used for this type
         */
        preferred?: boolean;
        /**
         * Contains preferred's id, extensions, and comments.
         */
        _preferred?: Element;
        /**
         * When is identifier valid?
         */
        period?: Period;
    }
    /**
     * System of unique identification
     */
    interface NamingSystem extends DomainResource {
        /**
         * Human-readable label
         */
        name: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * draft | active | retired
         */
        status: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * codesystem | identifier | root
         */
        kind: code;
        /**
         * Contains kind's id, extensions, and comments.
         */
        _kind?: Element;
        /**
         * Name of the publisher (Organization or individual)
         */
        publisher?: string;
        /**
         * Contains publisher's id, extensions, and comments.
         */
        _publisher?: Element;
        /**
         * Contact details of the publisher
         */
        contact?: NamingSystemContact[];
        /**
         * Who maintains system namespace?
         */
        responsible?: string;
        /**
         * Contains responsible's id, extensions, and comments.
         */
        _responsible?: Element;
        /**
         * Publication Date(/time)
         */
        date: dateTime;
        /**
         * Contains date's id, extensions, and comments.
         */
        _date?: Element;
        /**
         * e.g. driver,  provider,  patient, bank etc
         */
        type?: CodeableConcept;
        /**
         * What does namingsystem identify?
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * Content intends to support these contexts
         */
        useContext?: CodeableConcept[];
        /**
         * How/where is it used
         */
        usage?: string;
        /**
         * Contains usage's id, extensions, and comments.
         */
        _usage?: Element;
        /**
         * Unique identifiers used for system
         */
        uniqueId: NamingSystemUniqueId[];
        /**
         * Use this instead
         */
        replacedBy?: Reference;
    }
    /**
     * A response to an order
     */
    interface OrderResponse extends DomainResource {
        /**
         * Identifiers assigned to this order by the orderer or by the receiver
         */
        identifier?: Identifier[];
        /**
         * The order that this is a response to
         */
        request: Reference;
        /**
         * When the response was made
         */
        date?: dateTime;
        /**
         * Contains date's id, extensions, and comments.
         */
        _date?: Element;
        /**
         * Who made the response
         */
        who?: Reference;
        /**
         * pending | review | rejected | error | accepted | cancelled | replaced | aborted | completed
         */
        orderStatus: code;
        /**
         * Contains orderStatus's id, extensions, and comments.
         */
        _orderStatus?: Element;
        /**
         * Additional description of the response
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * Details of the outcome of performing the order
         */
        fulfillment?: Reference[];
    }
    /**
     * Operation Parameter
     */
    interface ParametersParameter extends Element {
        /**
         * Name from the definition
         */
        name: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * If parameter is a data type
         */
        valueBoolean?: boolean;
        /**
         * Contains valueBoolean's id, extensions, and comments.
         */
        _valueBoolean?: Element;
        /**
         * If parameter is a data type
         */
        valueInteger?: integer;
        /**
         * Contains valueInteger's id, extensions, and comments.
         */
        _valueInteger?: Element;
        /**
         * If parameter is a data type
         */
        valueDecimal?: decimal;
        /**
         * Contains valueDecimal's id, extensions, and comments.
         */
        _valueDecimal?: Element;
        /**
         * If parameter is a data type
         */
        valueBase64Binary?: base64Binary;
        /**
         * Contains valueBase64Binary's id, extensions, and comments.
         */
        _valueBase64Binary?: Element;
        /**
         * If parameter is a data type
         */
        valueInstant?: instant;
        /**
         * Contains valueInstant's id, extensions, and comments.
         */
        _valueInstant?: Element;
        /**
         * If parameter is a data type
         */
        valueString?: string;
        /**
         * Contains valueString's id, extensions, and comments.
         */
        _valueString?: Element;
        /**
         * If parameter is a data type
         */
        valueUri?: uri;
        /**
         * Contains valueUri's id, extensions, and comments.
         */
        _valueUri?: Element;
        /**
         * If parameter is a data type
         */
        valueDate?: date;
        /**
         * Contains valueDate's id, extensions, and comments.
         */
        _valueDate?: Element;
        /**
         * If parameter is a data type
         */
        valueDateTime?: dateTime;
        /**
         * Contains valueDateTime's id, extensions, and comments.
         */
        _valueDateTime?: Element;
        /**
         * If parameter is a data type
         */
        valueTime?: time;
        /**
         * Contains valueTime's id, extensions, and comments.
         */
        _valueTime?: Element;
        /**
         * If parameter is a data type
         */
        valueCode?: code;
        /**
         * Contains valueCode's id, extensions, and comments.
         */
        _valueCode?: Element;
        /**
         * If parameter is a data type
         */
        valueOid?: oid;
        /**
         * Contains valueOid's id, extensions, and comments.
         */
        _valueOid?: Element;
        /**
         * If parameter is a data type
         */
        valueId?: id;
        /**
         * Contains valueId's id, extensions, and comments.
         */
        _valueId?: Element;
        /**
         * If parameter is a data type
         */
        valueUnsignedInt?: unsignedInt;
        /**
         * Contains valueUnsignedInt's id, extensions, and comments.
         */
        _valueUnsignedInt?: Element;
        /**
         * If parameter is a data type
         */
        valuePositiveInt?: positiveInt;
        /**
         * Contains valuePositiveInt's id, extensions, and comments.
         */
        _valuePositiveInt?: Element;
        /**
         * If parameter is a data type
         */
        valueMarkdown?: markdown;
        /**
         * Contains valueMarkdown's id, extensions, and comments.
         */
        _valueMarkdown?: Element;
        /**
         * If parameter is a data type
         */
        valueAnnotation?: Annotation;
        /**
         * If parameter is a data type
         */
        valueAttachment?: Attachment;
        /**
         * If parameter is a data type
         */
        valueIdentifier?: Identifier;
        /**
         * If parameter is a data type
         */
        valueCodeableConcept?: CodeableConcept;
        /**
         * If parameter is a data type
         */
        valueCoding?: Coding;
        /**
         * If parameter is a data type
         */
        valueQuantity?: Quantity;
        /**
         * If parameter is a data type
         */
        valueRange?: Range;
        /**
         * If parameter is a data type
         */
        valuePeriod?: Period;
        /**
         * If parameter is a data type
         */
        valueRatio?: Ratio;
        /**
         * If parameter is a data type
         */
        valueSampledData?: SampledData;
        /**
         * If parameter is a data type
         */
        valueSignature?: Signature;
        /**
         * If parameter is a data type
         */
        valueHumanName?: HumanName;
        /**
         * If parameter is a data type
         */
        valueAddress?: Address;
        /**
         * If parameter is a data type
         */
        valueContactPoint?: ContactPoint;
        /**
         * If parameter is a data type
         */
        valueTiming?: Timing;
        /**
         * If parameter is a data type
         */
        valueReference?: Reference;
        /**
         * If parameter is a data type
         */
        valueMeta?: Meta;
        /**
         * If parameter is a whole resource
         */
        resource?: Resource;
        /**
         * Named part of a parameter (e.g. Tuple)
         */
        part?: ParametersParameter[];
    }
    /**
     * Operation Request or Response
     */
    interface Parameters extends ResourceBase {
        /**
         * Operation Parameter
         */
        parameter?: ParametersParameter[];
    }
    /**
     * PaymentNotice request
     */
    interface PaymentNotice extends DomainResource {
        /**
         * Business Identifier
         */
        identifier?: Identifier[];
        /**
         * Resource version
         */
        ruleset?: Coding;
        /**
         * Original version
         */
        originalRuleset?: Coding;
        /**
         * Creation date
         */
        created?: dateTime;
        /**
         * Contains created's id, extensions, and comments.
         */
        _created?: Element;
        /**
         * Insurer or Regulatory body
         */
        target?: Reference;
        /**
         * Responsible practitioner
         */
        provider?: Reference;
        /**
         * Responsible organization
         */
        organization?: Reference;
        /**
         * Request reference
         */
        request?: Reference;
        /**
         * Response reference
         */
        response?: Reference;
        /**
         * Status of the payment
         */
        paymentStatus: Coding;
    }
    /**
     * Details
     */
    interface PaymentReconciliationDetail extends Element {
        /**
         * Type code
         */
        type: Coding;
        /**
         * Claim
         */
        request?: Reference;
        /**
         * Claim Response
         */
        responce?: Reference;
        /**
         * Submitter
         */
        submitter?: Reference;
        /**
         * Payee
         */
        payee?: Reference;
        /**
         * Invoice date
         */
        date?: date;
        /**
         * Contains date's id, extensions, and comments.
         */
        _date?: Element;
        /**
         * Detail amount
         */
        amount?: Quantity;
    }
    /**
     * Note text
     */
    interface PaymentReconciliationNote extends Element {
        /**
         * display | print | printoper
         */
        type?: Coding;
        /**
         * Notes text
         */
        text?: string;
        /**
         * Contains text's id, extensions, and comments.
         */
        _text?: Element;
    }
    /**
     * PaymentReconciliation resource
     */
    interface PaymentReconciliation extends DomainResource {
        /**
         * Business Identifier
         */
        identifier?: Identifier[];
        /**
         * Claim reference
         */
        request?: Reference;
        /**
         * complete | error
         */
        outcome?: code;
        /**
         * Contains outcome's id, extensions, and comments.
         */
        _outcome?: Element;
        /**
         * Disposition Message
         */
        disposition?: string;
        /**
         * Contains disposition's id, extensions, and comments.
         */
        _disposition?: Element;
        /**
         * Resource version
         */
        ruleset?: Coding;
        /**
         * Original version
         */
        originalRuleset?: Coding;
        /**
         * Creation date
         */
        created?: dateTime;
        /**
         * Contains created's id, extensions, and comments.
         */
        _created?: Element;
        /**
         * Period covered
         */
        period?: Period;
        /**
         * Insurer
         */
        organization?: Reference;
        /**
         * Responsible practitioner
         */
        requestProvider?: Reference;
        /**
         * Responsible organization
         */
        requestOrganization?: Reference;
        /**
         * Details
         */
        detail?: PaymentReconciliationDetail[];
        /**
         * Printed Form Identifier
         */
        form?: Coding;
        /**
         * Total amount of Payment
         */
        total: Quantity;
        /**
         * Note text
         */
        note?: PaymentReconciliationNote[];
    }
    /**
     * Link to a resource that concerns the same actual person
     */
    interface PersonLink extends Element {
        /**
         * The resource to which this actual person is associated
         */
        target: Reference;
        /**
         * level1 | level2 | level3 | level4
         */
        assurance?: code;
        /**
         * Contains assurance's id, extensions, and comments.
         */
        _assurance?: Element;
    }
    /**
     * A generic person record
     */
    interface Person extends DomainResource {
        /**
         * A Human identifier for this person
         */
        identifier?: Identifier[];
        /**
         * A name associated with the person
         */
        name?: HumanName[];
        /**
         * A contact detail for the person
         */
        telecom?: ContactPoint[];
        /**
         * male | female | other | unknown
         */
        gender?: code;
        /**
         * Contains gender's id, extensions, and comments.
         */
        _gender?: Element;
        /**
         * The date on which the person was born
         */
        birthDate?: date;
        /**
         * Contains birthDate's id, extensions, and comments.
         */
        _birthDate?: Element;
        /**
         * One or more addresses for the person
         */
        address?: Address[];
        /**
         * Image of the Person
         */
        photo?: Attachment;
        /**
         * The Organization that is the custodian of the person record
         */
        managingOrganization?: Reference;
        /**
         * This person's record is in active use
         */
        active?: boolean;
        /**
         * Contains active's id, extensions, and comments.
         */
        _active?: Element;
        /**
         * Link to a resource that concerns the same actual person
         */
        link?: PersonLink[];
    }
    /**
     * Notes
     */
    interface ProcessResponseNotes extends Element {
        /**
         * display | print | printoper
         */
        type?: Coding;
        /**
         * Notes text
         */
        text?: string;
        /**
         * Contains text's id, extensions, and comments.
         */
        _text?: Element;
    }
    /**
     * ProcessResponse resource
     */
    interface ProcessResponse extends DomainResource {
        /**
         * Business Identifier
         */
        identifier?: Identifier[];
        /**
         * Request reference
         */
        request?: Reference;
        /**
         * Processing outcome
         */
        outcome?: Coding;
        /**
         * Disposition Message
         */
        disposition?: string;
        /**
         * Contains disposition's id, extensions, and comments.
         */
        _disposition?: Element;
        /**
         * Resource version
         */
        ruleset?: Coding;
        /**
         * Original version
         */
        originalRuleset?: Coding;
        /**
         * Creation date
         */
        created?: dateTime;
        /**
         * Contains created's id, extensions, and comments.
         */
        _created?: Element;
        /**
         * Authoring Organization
         */
        organization?: Reference;
        /**
         * Responsible Practitioner
         */
        requestProvider?: Reference;
        /**
         * Responsible organization
         */
        requestOrganization?: Reference;
        /**
         * Printed Form Identifier
         */
        form?: Coding;
        /**
         * Notes
         */
        notes?: ProcessResponseNotes[];
        /**
         * Error code
         */
        error?: Coding[];
    }
    /**
     * Agents involved in creating resource
     */
    interface ProvenanceAgent extends Element {
        /**
         * What the agents involvement was
         */
        role: Coding;
        /**
         * Individual, device or organization playing role
         */
        actor?: Reference;
        /**
         * Authorization-system identifier for the agent
         */
        userId?: Identifier;
        /**
         * Track delegation between agents
         */
        relatedAgent?: ProvenanceAgentRelatedAgent[];
    }
    /**
     * Track delegation between agents
     */
    interface ProvenanceAgentRelatedAgent extends Element {
        /**
         * Type of relationship between agents
         */
        type: CodeableConcept;
        /**
         * Reference to other agent in this resource by id
         */
        target: uri;
        /**
         * Contains target's id, extensions, and comments.
         */
        _target?: Element;
    }
    /**
     * An entity used in this activity
     */
    interface ProvenanceEntity extends Element {
        /**
         * derivation | revision | quotation | source
         */
        role: code;
        /**
         * Contains role's id, extensions, and comments.
         */
        _role?: Element;
        /**
         * The type of resource in this entity
         */
        type: Coding;
        /**
         * Identity of entity
         */
        reference: uri;
        /**
         * Contains reference's id, extensions, and comments.
         */
        _reference?: Element;
        /**
         * Human description of entity
         */
        display?: string;
        /**
         * Contains display's id, extensions, and comments.
         */
        _display?: Element;
        /**
         * Entity is attributed to this agent
         */
        agent?: ProvenanceAgent;
    }
    /**
     * Who, What, When for a set of resources
     */
    interface Provenance extends DomainResource {
        /**
         * Target Reference(s) (usually version specific)
         */
        target: Reference[];
        /**
         * When the activity occurred
         */
        period?: Period;
        /**
         * When the activity was recorded / updated
         */
        recorded: instant;
        /**
         * Contains recorded's id, extensions, and comments.
         */
        _recorded?: Element;
        /**
         * Reason the activity is occurring
         */
        reason?: CodeableConcept[];
        /**
         * Activity that occurred
         */
        activity?: CodeableConcept;
        /**
         * Where the activity occurred, if relevant
         */
        location?: Reference;
        /**
         * Policy or plan the activity was defined by
         */
        policy?: uri[];
        /**
         * Contains policy's id, extensions, and comments.
         */
        _policy?: Element[];
        /**
         * Agents involved in creating resource
         */
        agent?: ProvenanceAgent[];
        /**
         * An entity used in this activity
         */
        entity?: ProvenanceEntity[];
        /**
         * Signature on target
         */
        signature?: Signature[];
    }
    /**
     * Contact details of the publisher
     */
    interface SearchParameterContact extends Element {
        /**
         * Name of a individual to contact
         */
        name?: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * Contact details for individual or publisher
         */
        telecom?: ContactPoint[];
    }
    /**
     * Search Parameter for a resource
     */
    interface SearchParameter extends DomainResource {
        /**
         * Literal URL used to reference this search parameter
         */
        url: uri;
        /**
         * Contains url's id, extensions, and comments.
         */
        _url?: Element;
        /**
         * Informal name for this search parameter
         */
        name: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * draft | active | retired
         */
        status?: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * If for testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Contains experimental's id, extensions, and comments.
         */
        _experimental?: Element;
        /**
         * Name of the publisher (Organization or individual)
         */
        publisher?: string;
        /**
         * Contains publisher's id, extensions, and comments.
         */
        _publisher?: Element;
        /**
         * Contact details of the publisher
         */
        contact?: SearchParameterContact[];
        /**
         * Publication Date(/time)
         */
        date?: dateTime;
        /**
         * Contains date's id, extensions, and comments.
         */
        _date?: Element;
        /**
         * Why this search parameter is defined
         */
        requirements?: string;
        /**
         * Contains requirements's id, extensions, and comments.
         */
        _requirements?: Element;
        /**
         * Code used in URL
         */
        code: code;
        /**
         * Contains code's id, extensions, and comments.
         */
        _code?: Element;
        /**
         * The resource type this search parameter applies to
         */
        base: code;
        /**
         * Contains base's id, extensions, and comments.
         */
        _base?: Element;
        /**
         * number | date | string | token | reference | composite | quantity | uri
         */
        type: code;
        /**
         * Contains type's id, extensions, and comments.
         */
        _type?: Element;
        /**
         * Documentation for  search parameter
         */
        description: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * XPath that extracts the values
         */
        xpath?: string;
        /**
         * Contains xpath's id, extensions, and comments.
         */
        _xpath?: Element;
        /**
         * normal | phonetic | nearby | distance | other
         */
        xpathUsage?: code;
        /**
         * Contains xpathUsage's id, extensions, and comments.
         */
        _xpathUsage?: Element;
        /**
         * Types of resource (if a resource reference)
         */
        target?: code[];
        /**
         * Contains target's id, extensions, and comments.
         */
        _target?: Element[];
    }
    /**
     * The channel on which to report matches to the criteria
     */
    interface SubscriptionChannel extends Element {
        /**
         * rest-hook | websocket | email | sms | message
         */
        type: code;
        /**
         * Contains type's id, extensions, and comments.
         */
        _type?: Element;
        /**
         * Where the channel points to
         */
        endpoint?: uri;
        /**
         * Contains endpoint's id, extensions, and comments.
         */
        _endpoint?: Element;
        /**
         * Mimetype to send, or blank for no payload
         */
        payload: string;
        /**
         * Contains payload's id, extensions, and comments.
         */
        _payload?: Element;
        /**
         * Usage depends on the channel type
         */
        header?: string;
        /**
         * Contains header's id, extensions, and comments.
         */
        _header?: Element;
    }
    /**
     * A server push subscription criteria
     */
    interface Subscription extends DomainResource {
        /**
         * Rule for server push criteria
         */
        criteria: string;
        /**
         * Contains criteria's id, extensions, and comments.
         */
        _criteria?: Element;
        /**
         * Contact details for source (e.g. troubleshooting)
         */
        contact?: ContactPoint[];
        /**
         * Description of why this subscription was created
         */
        reason: string;
        /**
         * Contains reason's id, extensions, and comments.
         */
        _reason?: Element;
        /**
         * requested | active | error | off
         */
        status: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * Latest error note
         */
        error?: string;
        /**
         * Contains error's id, extensions, and comments.
         */
        _error?: Element;
        /**
         * The channel on which to report matches to the criteria
         */
        channel: SubscriptionChannel;
        /**
         * When to automatically delete the subscription
         */
        end?: instant;
        /**
         * Contains end's id, extensions, and comments.
         */
        _end?: Element;
        /**
         * A tag to add to matching resources
         */
        tag?: Coding[];
    }
    /**
     * Delivery of Supply
     */
    interface SupplyDelivery extends DomainResource {
        /**
         * External identifier
         */
        identifier?: Identifier;
        /**
         * in-progress | completed | abandoned
         */
        status?: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * Patient for whom the item is supplied
         */
        patient?: Reference;
        /**
         * Category of dispense event
         */
        type?: CodeableConcept;
        /**
         * Amount dispensed
         */
        quantity?: Quantity;
        /**
         * Medication, Substance, or Device supplied
         */
        suppliedItem?: Reference;
        /**
         * Dispenser
         */
        supplier?: Reference;
        /**
         * Dispensing time
         */
        whenPrepared?: Period;
        /**
         * Handover time
         */
        time?: dateTime;
        /**
         * Contains time's id, extensions, and comments.
         */
        _time?: Element;
        /**
         * Where the Supply was sent
         */
        destination?: Reference;
        /**
         * Who collected the Supply
         */
        receiver?: Reference[];
    }
    /**
     * Contact details of the publisher
     */
    interface TestScriptContact extends Element {
        /**
         * Name of a individual to contact
         */
        name?: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * Contact details for individual or publisher
         */
        telecom?: ContactPoint[];
    }
    /**
     * Required capability that is assumed to function correctly on the FHIR server being tested
     */
    interface TestScriptMetadata extends Element {
        /**
         * Links to the FHIR specification
         */
        link?: TestScriptMetadataLink[];
        /**
         * Capabiltities that are assumed to function correctly on the FHIR server being tested
         */
        capability: TestScriptMetadataCapability[];
    }
    /**
     * Links to the FHIR specification
     */
    interface TestScriptMetadataLink extends Element {
        /**
         * URL to the specification
         */
        url: uri;
        /**
         * Contains url's id, extensions, and comments.
         */
        _url?: Element;
        /**
         * Short description
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
    }
    /**
     * Capabiltities that are assumed to function correctly on the FHIR server being tested
     */
    interface TestScriptMetadataCapability extends Element {
        /**
         * Are the capabilities required?
         */
        required?: boolean;
        /**
         * Contains required's id, extensions, and comments.
         */
        _required?: Element;
        /**
         * Are the capabilities validated?
         */
        validated?: boolean;
        /**
         * Contains validated's id, extensions, and comments.
         */
        _validated?: Element;
        /**
         * The expected capabilities of the server
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * Which server these requirements apply to
         */
        destination?: integer;
        /**
         * Contains destination's id, extensions, and comments.
         */
        _destination?: Element;
        /**
         * Links to the FHIR specification
         */
        link?: uri[];
        /**
         * Contains link's id, extensions, and comments.
         */
        _link?: Element[];
        /**
         * Required Conformance
         */
        conformance: Reference;
    }
    /**
     * Fixture in the test script - by reference (uri)
     */
    interface TestScriptFixture extends Element {
        /**
         * Whether or not to implicitly create the fixture during setup
         */
        autocreate?: boolean;
        /**
         * Contains autocreate's id, extensions, and comments.
         */
        _autocreate?: Element;
        /**
         * Whether or not to implicitly delete the fixture during teardown
         */
        autodelete?: boolean;
        /**
         * Contains autodelete's id, extensions, and comments.
         */
        _autodelete?: Element;
        /**
         * Reference of the resource
         */
        resource?: Reference;
    }
    /**
     * Placeholder for evaluated elements
     */
    interface TestScriptVariable extends Element {
        /**
         * Descriptive name for this variable
         */
        name: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * HTTP header field name for source
         */
        headerField?: string;
        /**
         * Contains headerField's id, extensions, and comments.
         */
        _headerField?: Element;
        /**
         * XPath or JSONPath against the fixture body
         */
        path?: string;
        /**
         * Contains path's id, extensions, and comments.
         */
        _path?: Element;
        /**
         * Fixture Id of source expression or headerField within this variable
         */
        sourceId?: id;
        /**
         * Contains sourceId's id, extensions, and comments.
         */
        _sourceId?: Element;
    }
    /**
     * A series of required setup operations before tests are executed
     */
    interface TestScriptSetup extends Element {
        /**
         * Capabiltities that are assumed to function correctly on the FHIR server being tested
         */
        metadata?: TestScriptMetadata;
        /**
         * A setup operation or assert to perform
         */
        action: TestScriptSetupAction[];
    }
    /**
     * A setup operation or assert to perform
     */
    interface TestScriptSetupAction extends Element {
        /**
         * The setup operation to perform
         */
        operation?: TestScriptSetupActionOperation;
        /**
         * The assertion to perform
         */
        assert?: TestScriptSetupActionAssert;
    }
    /**
     * The setup operation to perform
     */
    interface TestScriptSetupActionOperation extends Element {
        /**
         * The setup operation type that will be executed
         */
        type?: Coding;
        /**
         * Resource type
         */
        resource?: code;
        /**
         * Contains resource's id, extensions, and comments.
         */
        _resource?: Element;
        /**
         * Tracking/logging operation label
         */
        label?: string;
        /**
         * Contains label's id, extensions, and comments.
         */
        _label?: Element;
        /**
         * Tracking/reporting operation description
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * xml | json
         */
        accept?: code;
        /**
         * Contains accept's id, extensions, and comments.
         */
        _accept?: Element;
        /**
         * xml | json
         */
        contentType?: code;
        /**
         * Contains contentType's id, extensions, and comments.
         */
        _contentType?: Element;
        /**
         * Which server to perform the operation on
         */
        destination?: integer;
        /**
         * Contains destination's id, extensions, and comments.
         */
        _destination?: Element;
        /**
         * Whether or not to send the request url in encoded format
         */
        encodeRequestUrl?: boolean;
        /**
         * Contains encodeRequestUrl's id, extensions, and comments.
         */
        _encodeRequestUrl?: Element;
        /**
         * Explicitly defined path parameters
         */
        params?: string;
        /**
         * Contains params's id, extensions, and comments.
         */
        _params?: Element;
        /**
         * Each operation can have one ore more header elements
         */
        requestHeader?: TestScriptSetupActionOperationRequestHeader[];
        /**
         * Fixture Id of mapped response
         */
        responseId?: id;
        /**
         * Contains responseId's id, extensions, and comments.
         */
        _responseId?: Element;
        /**
         * Fixture Id of body for PUT and POST requests
         */
        sourceId?: id;
        /**
         * Contains sourceId's id, extensions, and comments.
         */
        _sourceId?: Element;
        /**
         * Id of fixture used for extracting the [id],  [type], and [vid] for GET requests
         */
        targetId?: id;
        /**
         * Contains targetId's id, extensions, and comments.
         */
        _targetId?: Element;
        /**
         * Request URL
         */
        url?: string;
        /**
         * Contains url's id, extensions, and comments.
         */
        _url?: Element;
    }
    /**
     * Each operation can have one ore more header elements
     */
    interface TestScriptSetupActionOperationRequestHeader extends Element {
        /**
         * HTTP header field name
         */
        field: string;
        /**
         * Contains field's id, extensions, and comments.
         */
        _field?: Element;
        /**
         * HTTP headerfield value
         */
        value: string;
        /**
         * Contains value's id, extensions, and comments.
         */
        _value?: Element;
    }
    /**
     * The assertion to perform
     */
    interface TestScriptSetupActionAssert extends Element {
        /**
         * Tracking/logging assertion label
         */
        label?: string;
        /**
         * Contains label's id, extensions, and comments.
         */
        _label?: Element;
        /**
         * Tracking/reporting assertion description
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * response | request
         */
        direction?: code;
        /**
         * Contains direction's id, extensions, and comments.
         */
        _direction?: Element;
        /**
         * Id of fixture used to compare the "sourceId/path" evaluations to
         */
        compareToSourceId?: string;
        /**
         * Contains compareToSourceId's id, extensions, and comments.
         */
        _compareToSourceId?: Element;
        /**
         * XPath or JSONPath expression against fixture used to compare the "sourceId/path" evaluations to
         */
        compareToSourcePath?: string;
        /**
         * Contains compareToSourcePath's id, extensions, and comments.
         */
        _compareToSourcePath?: Element;
        /**
         * xml | json
         */
        contentType?: code;
        /**
         * Contains contentType's id, extensions, and comments.
         */
        _contentType?: Element;
        /**
         * HTTP header field name
         */
        headerField?: string;
        /**
         * Contains headerField's id, extensions, and comments.
         */
        _headerField?: Element;
        /**
         * Fixture Id of minimum content resource
         */
        minimumId?: string;
        /**
         * Contains minimumId's id, extensions, and comments.
         */
        _minimumId?: Element;
        /**
         * Perform validation on navigation links?
         */
        navigationLinks?: boolean;
        /**
         * Contains navigationLinks's id, extensions, and comments.
         */
        _navigationLinks?: Element;
        /**
         * equals | notEquals | in | notIn | greaterThan | lessThan | empty | notEmpty | contains | notContains
         */
        operator?: code;
        /**
         * Contains operator's id, extensions, and comments.
         */
        _operator?: Element;
        /**
         * XPath or JSONPath expression
         */
        path?: string;
        /**
         * Contains path's id, extensions, and comments.
         */
        _path?: Element;
        /**
         * Resource type
         */
        resource?: code;
        /**
         * Contains resource's id, extensions, and comments.
         */
        _resource?: Element;
        /**
         * okay | created | noContent | notModified | bad | forbidden | notFound | methodNotAllowed | conflict | gone | preconditionFailed | unprocessable
         */
        response?: code;
        /**
         * Contains response's id, extensions, and comments.
         */
        _response?: Element;
        /**
         * HTTP response code to test
         */
        responseCode?: string;
        /**
         * Contains responseCode's id, extensions, and comments.
         */
        _responseCode?: Element;
        /**
         * Fixture Id of source expression or headerField
         */
        sourceId?: id;
        /**
         * Contains sourceId's id, extensions, and comments.
         */
        _sourceId?: Element;
        /**
         * Profile Id of validation profile reference
         */
        validateProfileId?: id;
        /**
         * Contains validateProfileId's id, extensions, and comments.
         */
        _validateProfileId?: Element;
        /**
         * The value to compare to
         */
        value?: string;
        /**
         * Contains value's id, extensions, and comments.
         */
        _value?: Element;
        /**
         * Will this assert produce a warning only on error?
         */
        warningOnly?: boolean;
        /**
         * Contains warningOnly's id, extensions, and comments.
         */
        _warningOnly?: Element;
    }
    /**
     * A test in this script
     */
    interface TestScriptTest extends Element {
        /**
         * Tracking/logging name of this test
         */
        name?: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * Tracking/reporting short description of the test
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * Capabiltities that are expected to function correctly on the FHIR server being tested
         */
        metadata?: TestScriptMetadata;
        /**
         * A test operation or assert to perform
         */
        action: TestScriptTestAction[];
    }
    /**
     * A test operation or assert to perform
     */
    interface TestScriptTestAction extends Element {
        /**
         * The setup operation to perform
         */
        operation?: TestScriptSetupActionOperation;
        /**
         * The setup assertion to perform
         */
        assert?: TestScriptSetupActionAssert;
    }
    /**
     * A series of required clean up steps
     */
    interface TestScriptTeardown extends Element {
        /**
         * One or more teardown operations to perform
         */
        action: TestScriptTeardownAction[];
    }
    /**
     * One or more teardown operations to perform
     */
    interface TestScriptTeardownAction extends Element {
        /**
         * The teardown operation to perform
         */
        operation?: TestScriptSetupActionOperation;
    }
    /**
     * Describes a set of tests
     */
    interface TestScript extends DomainResource {
        /**
         * Literal URL used to reference this TestScript
         */
        url: uri;
        /**
         * Contains url's id, extensions, and comments.
         */
        _url?: Element;
        /**
         * Logical id for this version of the TestScript
         */
        version?: string;
        /**
         * Contains version's id, extensions, and comments.
         */
        _version?: Element;
        /**
         * Informal name for this TestScript
         */
        name: string;
        /**
         * Contains name's id, extensions, and comments.
         */
        _name?: Element;
        /**
         * draft | active | retired
         */
        status: code;
        /**
         * Contains status's id, extensions, and comments.
         */
        _status?: Element;
        /**
         * External identifier
         */
        identifier?: Identifier;
        /**
         * If for testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Contains experimental's id, extensions, and comments.
         */
        _experimental?: Element;
        /**
         * Name of the publisher (Organization or individual)
         */
        publisher?: string;
        /**
         * Contains publisher's id, extensions, and comments.
         */
        _publisher?: Element;
        /**
         * Contact details of the publisher
         */
        contact?: TestScriptContact[];
        /**
         * Date for this version of the TestScript
         */
        date?: dateTime;
        /**
         * Contains date's id, extensions, and comments.
         */
        _date?: Element;
        /**
         * Natural language description of the TestScript
         */
        description?: string;
        /**
         * Contains description's id, extensions, and comments.
         */
        _description?: Element;
        /**
         * Content intends to support these contexts
         */
        useContext?: CodeableConcept[];
        /**
         * Scope and Usage this Test Script is for
         */
        requirements?: string;
        /**
         * Contains requirements's id, extensions, and comments.
         */
        _requirements?: Element;
        /**
         * Use and/or Publishing restrictions
         */
        copyright?: string;
        /**
         * Contains copyright's id, extensions, and comments.
         */
        _copyright?: Element;
        /**
         * Required capability that is assumed to function correctly on the FHIR server being tested
         */
        metadata?: TestScriptMetadata;
        /**
         * Whether or not the tests apply to more than one FHIR server
         */
        multiserver?: boolean;
        /**
         * Contains multiserver's id, extensions, and comments.
         */
        _multiserver?: Element;
        /**
         * Fixture in the test script - by reference (uri)
         */
        fixture?: TestScriptFixture[];
        /**
         * Reference of the validation profile
         */
        profile?: Reference[];
        /**
         * Placeholder for evaluated elements
         */
        variable?: TestScriptVariable[];
        /**
         * A series of required setup operations before tests are executed
         */
        setup?: TestScriptSetup;
        /**
         * A test in this script
         */
        test?: TestScriptTest[];
        /**
         * A series of required clean up steps
         */
        teardown?: TestScriptTeardown;
    }
    /**
     * Reference to a sub-type of ResourceBase. This is needed for stricter object literal typing introduced in TypeScript 1.6.
     */
    type Resource = (DomainResource|Organization|Location|HealthcareService|Practitioner|Patient|RelatedPerson|Device|Account|AllergyIntolerance|Schedule|Slot|Appointment|AppointmentResponse|AuditEvent|Basic|BodySite|Substance|Medication|Group|Specimen|DeviceComponent|DeviceMetric|ValueSet|Questionnaire|QuestionnaireResponse|Observation|FamilyMemberHistory|DocumentReference|DiagnosticOrder|ProcedureRequest|ReferralRequest|Procedure|ImagingStudy|ImagingObjectSelection|Media|DiagnosticReport|CommunicationRequest|DeviceUseRequest|MedicationOrder|NutritionOrder|Order|ProcessRequest|SupplyRequest|VisionPrescription|ClinicalImpression|Condition|EpisodeOfCare|Encounter|MedicationStatement|RiskAssessment|Goal|CarePlan|Composition|Contract|Coverage|ClaimResponse|Claim|Communication|StructureDefinition|ConceptMap|OperationDefinition|Conformance|DataElement|DetectedIssue|DeviceUseStatement|DocumentManifest|EligibilityRequest|EligibilityResponse|EnrollmentRequest|EnrollmentResponse|ExplanationOfBenefit|Flag|Immunization|ImmunizationRecommendation|ImplementationGuide|List|MedicationAdministration|MedicationDispense|OperationOutcome|MessageHeader|NamingSystem|OrderResponse|PaymentNotice|PaymentReconciliation|Person|ProcessResponse|Provenance|SearchParameter|Subscription|SupplyDelivery|TestScript|Binary|Bundle|Parameters);
}
