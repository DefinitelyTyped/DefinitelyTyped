// Type definitions for FHIR DSTU2 v0.5.0
// Project: http://www.hl7.org/fhir/2015May/index.html
// Definitions by: Artifact Health <www.artifacthealth.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare module fhir {
    /**
     * Any combination of lowercase letters, numerals, "-" and ".", with a length limit of 36 characters.  (This might be an integer, an unprefixed OID, UUID or any other identifier pattern that meets these constraints.)  Systems SHALL send ids as lower-case but SHOULD interpret them case-insensitively.
     */
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
     * A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are specified, a time zone SHALL be populated. The format is a union of the schema types gYear, gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be zero-filled and may be ignored.  Dates SHALL be valid dates.
     */
    type dateTime = string;
    /**
     * A date, or partial date (e.g. just year or year + month). There is no time zone. The format is a union of the schema types gYear, gYearMonth and date.  Dates SHALL be valid dates.
     */
    type date = string;
    /**
     * An instant in time - known at least to the second
     */
    type instant = string;
    /**
     * A time during the day, with no date specified
     */
    type time = string;
    /**
     * A string which has at least one character and no leading or trailing whitespace and where there is no whitespace other than single spaces in the contents
     */
    type code = string;
    /**
     * A stream of bytes
     */
    type base64Binary = string;
    /**
     * A reference to a code defined by a terminology system
     */
    interface Coding extends Element {
        /**
         * Identity of the terminology system
         */
        system?: uri;
        /**
         * Version of the system - if relevant
         */
        version?: string;
        /**
         * Symbol in syntax defined by the system
         */
        code?: code;
        /**
         * Representation defined by the system
         */
        display?: string;
        /**
         * If this code was chosen directly by the user
         */
        primary?: boolean;
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
    }
    /**
     * An integer with a value that is not negative (e.g. >= 0)
     */
    type unsignedInt = number;
    /**
     * Content in a format defined elsewhere
     */
    interface Attachment extends Element {
        /**
         * Mime type of the content, with charset etc.
         */
        contentType?: code;
        /**
         * Human language of the content (BCP-47)
         */
        language?: code;
        /**
         * Data inline, base64ed
         */
        data?: base64Binary;
        /**
         * Uri where the data can be found
         */
        url?: uri;
        /**
         * Number of bytes of content (if url provided)
         */
        size?: unsignedInt;
        /**
         * Hash of the data (sha-1, base64ed )
         */
        hash?: base64Binary;
        /**
         * Label to display in place of the data
         */
        title?: string;
        /**
         * Date attachment was first created
         */
        creation?: dateTime;
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
         * End time with inclusive boundary, if not ongoing
         */
        end?: dateTime;
    }
    /**
     * A reference from one resource to another
     */
    interface Reference extends Element {
        /**
         * Relative, internal or absolute URL reference
         */
        reference?: string;
        /**
         * Text alternative for the resource
         */
        display?: string;
    }
    /**
     * Details of a Technology mediated contact point (phone, fax, email, etc)
     */
    interface ContactPoint extends Element {
        /**
         * phone | fax | email | url
         */
        system?: code;
        /**
         * The actual contact point details
         */
        value?: string;
        /**
         * home | work | temp | old | mobile - purpose of this contact point
         */
        use?: code;
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
         * Text representation of the address
         */
        text?: string;
        /**
         * Street name, number, direction & P.O. Box etc
         */
        line?: string[];
        /**
         * Name of city, town etc.
         */
        city?: string;
        /**
         * Sub-unit of country (abreviations ok)
         */
        state?: string;
        /**
         * Postal code for area
         */
        postalCode?: string;
        /**
         * Country (can be ISO 3166 3 letter code)
         */
        country?: string;
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
         * Text representation of the full name
         */
        text?: string;
        /**
         * Family name (often called 'Surname')
         */
        family?: string[];
        /**
         * Given names (not always 'first'). Includes middle names
         */
        given?: string[];
        /**
         * Parts that come before the name
         */
        prefix?: string[];
        /**
         * Parts that come after the name
         */
        suffix?: string[];
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
         * Name used for the organization
         */
        name?: string;
        /**
         * Kind of organization
         */
        type?: CodeableConcept;
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
        /**
         * Whether the organization's record is still in active use
         */
        active?: boolean;
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
         * Description of identifier
         */
        type?: CodeableConcept;
        /**
         * The namespace for the identifier
         */
        system?: uri;
        /**
         * The value that is unique
         */
        value?: string;
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
     * A measured or measurable amount
     */
    interface Quantity extends Element {
        /**
         * Numerical value (with implicit precision)
         */
        value?: decimal;
        /**
         * < | <= | >= | > - how to understand the value
         */
        comparator?: code;
        /**
         * Unit representation
         */
        units?: string;
        /**
         * System that defines coded unit form
         */
        system?: uri;
        /**
         * Coded form of the unit
         */
        code?: code;
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
     * When the event is to occur
     */
    interface TimingRepeat extends Element {
        /**
         * Start and/or end limits
         */
        bounds?: Period;
        /**
         * Number of times to repeat
         */
        count?: integer;
        /**
         * How long when it happens
         */
        duration?: decimal;
        /**
         * s | min | h | d | wk | mo | a - unit of time (UCUM)
         */
        durationUnits?: code;
        /**
         * Event occurs frequency times per duration
         */
        frequency?: integer;
        /**
         * Event occurs frequency times per duration
         */
        frequencyMax?: integer;
        /**
         * Event occurs frequency times per period
         */
        period?: decimal;
        /**
         * Upper limit of period (3-4 hours)
         */
        periodMax?: decimal;
        /**
         * s | min | h | d | wk | mo | a - unit of time (UCUM)
         */
        periodUnits?: code;
        /**
         * Regular life events the event is tied to
         */
        when?: code;
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
         * When the event is to occur
         */
        repeat?: TimingRepeat;
        /**
         * BID | TID | QID | AM | PM +
         */
        code?: CodeableConcept;
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
         * Latitude with WGS84 datum
         */
        latitude: decimal;
        /**
         * Altitude with WGS84 datum
         */
        altitude?: decimal;
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
         * Name of the location as used by humans
         */
        name?: string;
        /**
         * Description of the Location, which helps in finding or referencing the place
         */
        description?: string;
        /**
         * instance | kind
         */
        mode?: code;
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
        /**
         * active | suspended | inactive
         */
        status?: code;
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
         * Is this always available? (hence times are irrelevant) e.g. 24 hour service
         */
        allDay?: boolean;
        /**
         * The opening time of day. Note: If the AllDay flag is set, then this time is ignored
         */
        availableStartTime?: time;
        /**
         * The closing time of day. Note: If the AllDay flag is set, then this time is ignored
         */
        availableEndTime?: time;
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
         * The location where this healthcare service may be provided
         */
        location: Reference;
        /**
         * Identifies the broad category of service being performed or delivered. Selecting a Service Category then determines the list of relevant service types that can be selected in the Primary Service Type
         */
        serviceCategory?: CodeableConcept;
        /**
         * A specific type of service that may be delivered or performed
         */
        serviceType?: HealthcareServiceServiceType[];
        /**
         * Further description of the service as it would be presented to a consumer while searching
         */
        serviceName?: string;
        /**
         * Any additional description of the service and/or any specific issues not covered by the other attributes, which can be displayed as further detail under the serviceName
         */
        comment?: string;
        /**
         * Extra details about the service that can't be placed in the other fields
         */
        extraDetails?: string;
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
         * Program Names that can be used to categorize the service
         */
        programName?: string[];
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
         * Indicates if an appointment is required for access to this service
         */
        appointmentRequired?: boolean;
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
         * The date  of birth for the practitioner
         */
        birthDate?: date;
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
         * Organization that is associated with the contact
         */
        organization?: Reference;
        /**
         * The period during which this contact person or organization is valid to be contacted relating to this patient
         */
        period?: Period;
    }
    /**
     * If this patient is an animal (non-human)
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
         * The date of birth for the individual
         */
        birthDate?: date;
        /**
         * Indicates if the individual is deceased or not
         */
        deceasedBoolean?: boolean;
        /**
         * Indicates if the individual is deceased or not
         */
        deceasedDateTime?: dateTime;
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
         * Whether patient is part of a multiple birth
         */
        multipleBirthInteger?: integer;
        /**
         * Image of the patient
         */
        photo?: Attachment[];
        /**
         * A contact party (e.g. guardian, partner, friend) for the patient
         */
        contact?: PatientContact[];
        /**
         * If this patient is an animal (non-human)
         */
        animal?: PatientAnimal;
        /**
         * A list of Languages which may be used to communicate with the patient about his or her health
         */
        communication?: PatientCommunication[];
        /**
         * Patient's nominated care provider
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
        /**
         * Whether this patient's record is in active use
         */
        active?: boolean;
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
         * Address where the related person can be contacted or visited
         */
        address?: Address;
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
     * An XML digital Signature
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
         * Who signed the signature
         */
        whoUri?: uri;
        /**
         * Who signed the signature
         */
        whoReference?: Reference;
        /**
         * The actual XML Dig-Sig
         */
        blob: base64Binary;
    }
    /**
     * Optional Extensions Element - found in all resources.
     */
    interface Extension extends Element {
        /**
         * identifies the meaning of the extension
         */
        url: uri;
        /**
         * Value of extension
         */
        valueInteger?: integer;
        /**
         * Value of extension
         */
        valueDecimal?: decimal;
        /**
         * Value of extension
         */
        valueDateTime?: dateTime;
        /**
         * Value of extension
         */
        valueDate?: date;
        /**
         * Value of extension
         */
        valueInstant?: instant;
        /**
         * Value of extension
         */
        valueTime?: time;
        /**
         * Value of extension
         */
        valueString?: string;
        /**
         * Value of extension
         */
        valueUri?: uri;
        /**
         * Value of extension
         */
        valueBoolean?: boolean;
        /**
         * Value of extension
         */
        valueCode?: code;
        /**
         * Value of extension
         */
        valueBase64Binary?: base64Binary;
        /**
         * Value of extension
         */
        valueCoding?: Coding;
        /**
         * Value of extension
         */
        valueCodeableConcept?: CodeableConcept;
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
        valueSignature?: Signature;
        /**
         * Value of extension
         */
        valueReference?: Reference;
    }
    /**
     * Base for all elements
     */
    interface Element {
        /**
         * xml:id (or equivalent in JSON)
         */
        id?: id;
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
         * When the resource version last changed
         */
        lastUpdated?: instant;
        /**
         * Profiles this resource claims to conform to
         */
        profile?: uri[];
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
    interface Resource {
        /**
         * Logical id of this artefact
         */
        id?: id;
        /**
         * Metadata about the resource
         */
        meta?: Meta;
        /**
         * A set of rules under which this content was created
         */
        implicitRules?: uri;
        /**
         * Language of the resource content
         */
        language?: code;
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
         * Limited xhtml content
         */
        div: string;
    }
    /**
     * A resource with narrative, extensions, and contained resources
     */
    interface DomainResource extends Resource {
        /**
         * The type of the resource.
         */
        resourceType?: code;
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
     * Adverse Reaction Events linked to exposure to substance
     */
    interface AllergyIntoleranceEvent extends Element {
        /**
         * Specific substance considered to be responsible for event
         */
        substance?: CodeableConcept;
        /**
         * unlikely | likely | confirmed - clinical certainty about the specific substance
         */
        certainty?: code;
        /**
         * Clinical symptoms/signs associated with the Event
         */
        manifestation: CodeableConcept[];
        /**
         * Description of the event as a whole
         */
        description?: string;
        /**
         * Date(/time) when manifestations showed
         */
        onset?: dateTime;
        /**
         * How long Manifestations persisted
         */
        duration?: Duration;
        /**
         * mild | moderate | severe (of event as a whole)
         */
        severity?: code;
        /**
         * How the subject was exposed to the substance
         */
        exposureRoute?: CodeableConcept;
        /**
         * Text about event not captured in other fields
         */
        comment?: string;
    }
    /**
     * A length of time
     */
    interface Duration extends Quantity {
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
         * When recorded
         */
        recordedDate?: dateTime;
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
         * unconfirmed | confirmed | resolved | refuted | entered-in-error
         */
        status?: code;
        /**
         * low | high | unassessible - Estimated potential clinical harm
         */
        criticality?: code;
        /**
         * immune | non-immune - Underlying mechanism (if known)
         */
        type?: code;
        /**
         * food | medication | environment - Category of Substance
         */
        category?: code;
        /**
         * Date(/time) of last known occurence of a reaction
         */
        lastOccurence?: dateTime;
        /**
         * Additional text not captured in other fields
         */
        comment?: string;
        /**
         * Adverse Reaction Events linked to exposure to substance
         */
        event?: AllergyIntoleranceEvent[];
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
         * BUSY | FREE | BUSY-UNAVAILABLE | BUSY-TENTATIVE
         */
        freeBusyType: code;
        /**
         * Date/Time that the slot is to begin
         */
        start: instant;
        /**
         * Date/Time that the slot is to conclude
         */
        end: instant;
        /**
         * This slot has already been overbooked, appointments are unlikely to be accepted for this time
         */
        overbooked?: boolean;
        /**
         * Comments on the slot to describe any extended information. Such as custom constraints on the slot
         */
        comment?: string;
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
         * available | not-available | entered-in-error
         */
        status?: code;
        /**
         * Name of device manufacturer
         */
        manufacturer?: string;
        /**
         * Model id assigned by the manufacturer
         */
        model?: string;
        /**
         * Version number (i.e. software)
         */
        version?: string;
        /**
         * Manufacture date
         */
        manufactureDate?: dateTime;
        /**
         * Date and time of expiry of this device (if applicable)
         */
        expiry?: dateTime;
        /**
         * FDA Mandated Unique Device Identifier
         */
        udi?: string;
        /**
         * Lot number of manufacture
         */
        lotNumber?: string;
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
        /**
         * Information about a group of medication produced or packaged from one production run.
         */
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
         * What kind of substance this is
         */
        type: CodeableConcept;
        /**
         * Textual description of the substance, comments
         */
        description?: string;
        /**
         * If this describes a specific package/container of the substance
         */
        instance?: SubstanceInstance;
        /**
         * Composition information about the substance
         */
        ingredient?: SubstanceIngredient[];
    }
    /**
     * Information about a group of medication produced or packaged from one production run.
     */
    interface MedicationProductBatch extends Element {
        /**
         * The assigned lot number of a batch of the specified product.
         */
        lotNumber?: string;
        /**
         * When this specific batch of product will expire.
         */
        expirationDate?: dateTime;
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
         * Common / Commercial name
         */
        name?: string;
        /**
         * Codes that identify this medication
         */
        code?: CodeableConcept;
        /**
         * True if a brand
         */
        isBrand?: boolean;
        /**
         * Manufacturer of the item
         */
        manufacturer?: Reference;
        /**
         * product | package
         */
        kind?: code;
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
        identifier?: Identifier;
        /**
         * person | animal | practitioner | device | medication | substance
         */
        type: code;
        /**
         * Descriptive or actual
         */
        actual: boolean;
        /**
         * Kind of Group members
         */
        code?: CodeableConcept;
        /**
         * Label for Group
         */
        name?: string;
        /**
         * Number of members
         */
        quantity?: unsignedInt;
        /**
         * Trait of group members
         */
        characteristic?: GroupCharacteristic[];
        /**
         * Who or what is in group
         */
        member?: Reference[];
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
         * If required by policy
         */
        authority?: Reference;
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
         * accepted | declined | tentative | needs-action
         */
        status: code;
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
         * pending | booked | arrived | fulfilled | cancelled | noshow
         */
        status: code;
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
         * The brief description of the appointment as would be shown on a subject line in a meeting request, or appointment list. Detailed or expanded information should be put in the comment field
         */
        description?: string;
        /**
         * Date/Time that the appointment is to take place
         */
        start: instant;
        /**
         * Date/Time that the appointment is to conclude
         */
        end: instant;
        /**
         * The slot that this appointment is filling. If provided then the schedule will not be provided as slots are not recursive, and the start/end values MUST be the same as from the slot
         */
        slot?: Reference[];
        /**
         * Additional comments about the appointment
         */
        comment?: string;
        /**
         * An Order that lead to the creation of this appointment
         */
        order?: Reference;
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
         * Additional comments about the appointment
         */
        comment?: string;
        /**
         * Date/Time that the appointment is to take place, or requested new start time
         */
        start?: instant;
        /**
         * Date/Time that the appointment is to conclude, or requested new end time
         */
        end?: instant;
    }
    /**
     * What was done
     */
    interface AuditEventEvent extends Element {
        /**
         * Type/identifier of event
         */
        type: CodeableConcept;
        /**
         * More specific type/id for the event
         */
        subtype?: CodeableConcept[];
        /**
         * Type of action performed during the event
         */
        action?: code;
        /**
         * Time when the event occurred on source
         */
        dateTime: instant;
        /**
         * Whether the event succeeded or failed
         */
        outcome?: code;
        /**
         * Description of the event outcome
         */
        outcomeDesc?: string;
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
        userId?: string;
        /**
         * Alternative User id e.g. authentication
         */
        altId?: string;
        /**
         * Human-meaningful name for the user
         */
        name?: string;
        /**
         * Whether user is initiator
         */
        requestor: boolean;
        /**
         * Where
         */
        location?: Reference;
        /**
         * Policy that authorized event
         */
        policy?: uri[];
        /**
         * Type of media
         */
        media?: Coding;
        /**
         * Logical network location for application activity
         */
        network?: AuditEventParticipantNetwork;
        /**
         * Participant purposeOfUse
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
        identifier?: string;
        /**
         * The type of network access point
         */
        type?: code;
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
         * The id of source where event originated
         */
        identifier: string;
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
        type?: code;
        /**
         * What role the Object played
         */
        role?: code;
        /**
         * Life-cycle stage for the object
         */
        lifecycle?: code;
        /**
         * Policy-defined sensitivity for the object
         */
        sensitivity?: CodeableConcept;
        /**
         * Instance-specific descriptor for Object
         */
        name?: string;
        /**
         * Descriptive text
         */
        description?: string;
        /**
         * Actual query for object
         */
        query?: base64Binary;
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
         * Property value
         */
        value: base64Binary;
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
         * Identifies the
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
    }
    /**
     * Pure binary content defined by sime other format than FHIR
     */
    interface Binary extends Resource {
        /**
         * MimeType of the binary content
         */
        contentType: code;
        /**
         * The actual content
         */
        content: base64Binary;
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
         * Reference details for the link
         */
        url: uri;
    }
    /**
     * Entry in the bundle - will have a resource, or information
     */
    interface BundleEntry extends Element {
        /**
         * Base URL, if different to bundle base
         */
        base?: uri;
        /**
         * Links related to this entry
         */
        link?: BundleLink[];
        /**
         * Resources in this bundle
         */
        resource?: Resource;
        /**
         * Search related information
         */
        search?: BundleEntrySearch;
        /**
         * Transaction Related Information
         */
        transaction?: BundleEntryTransaction;
        /**
         * Transaction Related Information
         */
        transactionResponse?: BundleEntryTransactionResponse;
    }
    /**
     * Search related information
     */
    interface BundleEntrySearch extends Element {
        /**
         * match | include - why this is in the result set
         */
        mode?: code;
        /**
         * Search ranking (between 0 and 1)
         */
        score?: decimal;
    }
    /**
     * Transaction Related Information
     */
    interface BundleEntryTransaction extends Element {
        /**
         * GET | POST | PUT | DELETE
         */
        method: code;
        /**
         * The URL for the transaction
         */
        url: uri;
        /**
         * For managing cache currency
         */
        ifNoneMatch?: string;
        /**
         * For managing update contention
         */
        ifMatch?: string;
        /**
         * For managing update contention
         */
        ifModifiedSince?: instant;
        /**
         * For conditional creates
         */
        ifNoneExist?: string;
    }
    /**
     * Transaction Related Information
     */
    interface BundleEntryTransactionResponse extends Element {
        /**
         * Status return code for entry
         */
        status: string;
        /**
         * The location, if the operation returns a location
         */
        location?: uri;
        /**
         * The etag for the resource (if relevant)
         */
        etag?: string;
        /**
         * Server's date time modified
         */
        lastModified?: instant;
    }
    /**
     * Contains a collection of resources
     */
    interface Bundle extends Resource {
        /**
         * document | message | transaction | transaction-response | history | searchset | collection
         */
        type: code;
        /**
         * Stated Base URL
         */
        base?: uri;
        /**
         * If search, the total number of matches
         */
        total?: unsignedInt;
        /**
         * Links related to this Bundle
         */
        link?: BundleLink[];
        /**
         * Entry in the bundle - will have a resource, or information
         */
        entry?: BundleEntry[];
        /**
         * XML Digital Signature (base64 encoded)
         */
        signature?: base64Binary;
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
         * The time that the episode was in the specified status
         */
        period: Period;
    }
    /**
     * The status history for the EpisodeOfCare
     */
    interface EpisodeOfCareStatusHistory extends Element {
        /**
         * planned | waitlist | active | onhold | finished | cancelled
         */
        status: code;
        /**
         * The period during this EpisodeOfCare that the specific status applied
         */
        period: Period;
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
         * Identifier of request
         */
        identifier?: Identifier[];
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
         * Encounter
         */
        encounter?: Reference;
        /**
         * Date referral/transfer of care request is sent
         */
        dateSent?: dateTime;
        /**
         * Reason for referral / Transfer of care request
         */
        reason?: CodeableConcept;
        /**
         * A textual description of the referral
         */
        description?: string;
        /**
         * Service(s) requested
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
     * The list of practitioners that may be facilitating this episode of care for specific purposes
     */
    interface EpisodeOfCareCareTeam extends Element {
        /**
         * The practitioner (or Organization) within the team
         */
        member?: Reference;
        /**
         * The role that this team member is taking within this episode of care
         */
        role?: CodeableConcept[];
        /**
         * The period of time that this practitioner is performing some role within the episode of care
         */
        period?: Period;
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
         * The status history for the EpisodeOfCare
         */
        statusHistory?: EpisodeOfCareStatusHistory[];
        /**
         * Specific type of EpisodeOfCare
         */
        type?: CodeableConcept[];
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
         * A list of conditions/problems/diagnoses that this episode of care is intended to be providing care for
         */
        condition?: Reference[];
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
     * Details about an admission to a clinic
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
         * Diet preferences reported by the patient
         */
        dietPreference?: CodeableConcept;
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
        dischargeDiagnosis?: Reference;
        /**
         * Is this hospitalization a readmission?
         */
        reAdmission?: boolean;
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
         * planned | present | reserved
         */
        status?: code;
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
         * List of Encounter statuses
         */
        statusHistory?: EncounterStatusHistory[];
        /**
         * inpatient | outpatient | ambulatory | emergency +
         */
        class?: code;
        /**
         * Specific type of encounter
         */
        type?: CodeableConcept[];
        /**
         * The patient present at the encounter
         */
        patient?: Reference;
        /**
         * An episode of care that this encounter should be recorded against
         */
        episodeOfCare?: Reference;
        /**
         * Incoming Referral Request
         */
        incomingReferralRequest?: Reference[];
        /**
         * List of participants involved in the encounter
         */
        participant?: EncounterParticipant[];
        /**
         * The appointment that scheduled this encounter
         */
        fulfills?: Reference;
        /**
         * The start and end time of the encounter
         */
        period?: Period;
        /**
         * Quantity of time the encounter lasted (less time absent)
         */
        length?: Duration;
        /**
         * Reason the encounter takes place (code)
         */
        reason?: CodeableConcept[];
        /**
         * Reason the encounter takes place (resource)
         */
        indication?: Reference[];
        /**
         * Indicates the urgency of the encounter
         */
        priority?: CodeableConcept;
        /**
         * Details about an admission to a clinic
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
     * An integer with a value that is positive (e.g. >0)
     */
    type positiveInt = number;
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
         * Multiply data by this before adding to origin
         */
        factor?: decimal;
        /**
         * Lower limit of detection
         */
        lowerLimit?: decimal;
        /**
         * Upper limit of detection
         */
        upperLimit?: decimal;
        /**
         * Number of sample points at each time point
         */
        dimensions: positiveInt;
        /**
         * Decimal values with spaces, or "E" | "U" | "L"
         */
        data: string;
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
         * Collection time
         */
        collectedDateTime?: dateTime;
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
        bodySiteCodeableConcept?: CodeableConcept;
        /**
         * Anatomical collection site
         */
        bodySiteReference?: Reference;
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
         * not-calibrated | calibration-required | calibrated | unspecified
         */
        state?: code;
        /**
         * Describes the time last calibration has been performed
         */
        time?: instant;
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
         * black | red | green | yellow | blue | magenta | cyan | white
         */
        color?: code;
        /**
         * measurement | setting | calculation | unspecified
         */
        category: code;
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
    }
    /**
     * Observations related to this observation
     */
    interface ObservationRelated extends Element {
        /**
         * has-component | has-member | derived-from | sequel-to | replaces | qualified-by | interfered-by
         */
        type?: code;
        /**
         * Observation that is related to this one
         */
        target: Reference;
    }
    /**
     * Measurements and simple assertions
     */
    interface Observation extends DomainResource {
        /**
         * Type of observation (code / type)
         */
        code: CodeableConcept;
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
         * Actual result
         */
        valueDateTime?: dateTime;
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
         * Physiologically Relevant time/time-period for observation
         */
        appliesDateTime?: dateTime;
        /**
         * Physiologically Relevant time/time-period for observation
         */
        appliesPeriod?: Period;
        /**
         * Date/Time this was made available
         */
        issued?: instant;
        /**
         * registered | preliminary | final | amended +
         */
        status: code;
        /**
         * ok | ongoing | early | questionable | calibrating | error +
         */
        reliability?: code;
        /**
         * Observed body part
         */
        bodySiteCodeableConcept?: CodeableConcept;
        /**
         * Observed body part
         */
        bodySiteReference?: Reference;
        /**
         * How it was done
         */
        method?: CodeableConcept;
        /**
         * Unique Id for this particular observation
         */
        identifier?: Identifier[];
        /**
         * Who and/or what this is about
         */
        subject?: Reference;
        /**
         * Specimen used for this observation
         */
        specimen?: Reference;
        /**
         * Who did the observation
         */
        performer?: Reference[];
        /**
         * (Measurement) Device
         */
        device?: Reference;
        /**
         * Healthcare event during which this observation is made
         */
        encounter?: Reference;
        /**
         * Provides guide for interpretation
         */
        referenceRange?: ObservationReferenceRange[];
        /**
         * Observations related to this observation
         */
        related?: ObservationRelated[];
    }
    /**
     * Grouped questions
     */
    interface QuestionnaireGroup extends Element {
        /**
         * To link questionnaire with questionnaire answers
         */
        linkId?: string;
        /**
         * Name to be displayed for group
         */
        title?: string;
        /**
         * Concept that represents this section on a questionnaire
         */
        concept?: Coding[];
        /**
         * Additional text for the group
         */
        text?: string;
        /**
         * Must group be included in data results?
         */
        required?: boolean;
        /**
         * Whether the group may repeat
         */
        repeats?: boolean;
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
         * To link questionnaire with questionnaire answers
         */
        linkId?: string;
        /**
         * Concept that represents this question on a questionnaire
         */
        concept?: Coding[];
        /**
         * Text of the question as it is shown to the user
         */
        text?: string;
        /**
         * boolean | decimal | integer | date | dateTime +
         */
        type?: code;
        /**
         * Must question be answered in data results?
         */
        required?: boolean;
        /**
         * Can question  have multiple answers?
         */
        repeats?: boolean;
        /**
         * Valueset containing the possible options
         */
        options?: Reference;
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
         * Contact details for individual or publisher
         */
        telecom?: ContactPoint[];
    }
    /**
     * When value set defines its own codes
     */
    interface ValueSetDefine extends Element {
        /**
         * URI to identify the code system
         */
        system: uri;
        /**
         * Version of this system
         */
        version?: string;
        /**
         * If code comparison is case sensitive
         */
        caseSensitive?: boolean;
        /**
         * Concepts in the code system
         */
        concept?: ValueSetDefineConcept[];
    }
    /**
     * Concepts in the code system
     */
    interface ValueSetDefineConcept extends Element {
        /**
         * Code that identifies concept
         */
        code: code;
        /**
         * If this code is not for use as a real concept
         */
        abstract?: boolean;
        /**
         * Text to Display to the user
         */
        display?: string;
        /**
         * Formal Definition
         */
        definition?: string;
        /**
         * Additional representations for the concept
         */
        designation?: ValueSetDefineConceptDesignation[];
        /**
         * Child Concepts (is-a / contains)
         */
        concept?: ValueSetDefineConcept[];
    }
    /**
     * Additional representations for the concept
     */
    interface ValueSetDefineConceptDesignation extends Element {
        /**
         * Language of the designation
         */
        language?: code;
        /**
         * Details how this designation would be used
         */
        use?: Coding;
        /**
         * The text value for this designation
         */
        value: string;
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
         * Specific version of the code system referred to
         */
        version?: string;
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
         * Test to display for this code for this value set
         */
        display?: string;
        /**
         * Additional representations for this valueset
         */
        designation?: ValueSetDefineConceptDesignation[];
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
         * = | is-a | is-not-a | regex | in | not-in
         */
        op: code;
        /**
         * Code from the system, or regex criteria
         */
        value: code;
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
         * Time valueset expansion happened
         */
        timestamp: dateTime;
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
         * Value of the parameter
         */
        valueString?: string;
        /**
         * Value of the parameter
         */
        valueBoolean?: boolean;
        /**
         * Value of the parameter
         */
        valueInteger?: integer;
        /**
         * Value of the parameter
         */
        valueDecimal?: decimal;
        /**
         * Value of the parameter
         */
        valueUri?: uri;
        /**
         * Value of the parameter
         */
        valueCode?: code;
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
         * If user cannot select this entry
         */
        abstract?: boolean;
        /**
         * Version in which this code / display is defined
         */
        version?: string;
        /**
         * Code - if blank, this is not a choosable code
         */
        code?: code;
        /**
         * User display for the concept
         */
        display?: string;
        /**
         * Codes contained in this concept
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
         * Additional identifier for the value set (v2 / CDA)
         */
        identifier?: Identifier;
        /**
         * Logical id for this version of the value set
         */
        version?: string;
        /**
         * Informal name for this value set
         */
        name?: string;
        /**
         * Content intends to support these contexts
         */
        useContext?: CodeableConcept[];
        /**
         * Indicates whether or not any change to the content logical definition may occur
         */
        immutable?: boolean;
        /**
         * Name of the publisher (Organization or individual)
         */
        publisher?: string;
        /**
         * Contact details of the publisher
         */
        contact?: ValueSetContact[];
        /**
         * Human language description of the value set
         */
        description?: string;
        /**
         * Why is this needed?
         */
        requirements?: string;
        /**
         * Use and/or Publishing restrictions
         */
        copyright?: string;
        /**
         * draft | active | retired
         */
        status: code;
        /**
         * If for testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Whether this is intended to be used with an extensible binding
         */
        extensible?: boolean;
        /**
         * Date for given status
         */
        date?: dateTime;
        /**
         * Fixed date for all referenced code systems and value sets
         */
        lockedDate?: date;
        /**
         * When value set defines its own codes
         */
        define?: ValueSetDefine;
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
         * draft | published | retired
         */
        status: code;
        /**
         * Date this version was authored
         */
        date?: dateTime;
        /**
         * Organization/individual who designed the questionnaire
         */
        publisher?: string;
        /**
         * Contact information of the publisher
         */
        telecom?: ContactPoint[];
        /**
         * Grouped questions
         */
        group: QuestionnaireGroup;
    }
    /**
     * Grouped questions
     */
    interface QuestionnaireAnswersGroup extends Element {
        /**
         * Corresponding group within Questionnaire
         */
        linkId?: string;
        /**
         * Name for this group
         */
        title?: string;
        /**
         * Additional text for the group
         */
        text?: string;
        /**
         * The subject this group's answers are about
         */
        subject?: Reference;
        /**
         * Nested questionnaire answers group
         */
        group?: QuestionnaireAnswersGroup[];
        /**
         * Questions in this group
         */
        question?: QuestionnaireAnswersGroupQuestion[];
    }
    /**
     * Questions in this group
     */
    interface QuestionnaireAnswersGroupQuestion extends Element {
        /**
         * Corresponding question within Questionnaire
         */
        linkId?: string;
        /**
         * Text of the question as it is shown to the user
         */
        text?: string;
        /**
         * The response(s) to the question
         */
        answer?: QuestionnaireAnswersGroupQuestionAnswer[];
        /**
         * Nested questionnaire group
         */
        group?: QuestionnaireAnswersGroup[];
    }
    /**
     * The response(s) to the question
     */
    interface QuestionnaireAnswersGroupQuestionAnswer extends Element {
        /**
         * Single-valued answer to the question
         */
        valueBoolean?: boolean;
        /**
         * Single-valued answer to the question
         */
        valueDecimal?: decimal;
        /**
         * Single-valued answer to the question
         */
        valueInteger?: integer;
        /**
         * Single-valued answer to the question
         */
        valueDate?: date;
        /**
         * Single-valued answer to the question
         */
        valueDateTime?: dateTime;
        /**
         * Single-valued answer to the question
         */
        valueInstant?: instant;
        /**
         * Single-valued answer to the question
         */
        valueTime?: time;
        /**
         * Single-valued answer to the question
         */
        valueString?: string;
        /**
         * Single-valued answer to the question
         */
        valueUri?: uri;
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
    }
    /**
     * A structured set of questions and their answers
     */
    interface QuestionnaireAnswers extends DomainResource {
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
        group?: QuestionnaireAnswersGroup;
    }
    /**
     * Condition that the related person had
     */
    interface FamilyMemberHistoryCondition extends Element {
        /**
         * Condition suffered by relation
         */
        type: CodeableConcept;
        /**
         * deceased | permanent disability | etc.
         */
        outcome?: CodeableConcept;
        /**
         * When condition first manifested
         */
        onsetAge?: Age;
        /**
         * When condition first manifested
         */
        onsetRange?: Range;
        /**
         * When condition first manifested
         */
        onsetString?: string;
        /**
         * Extra information about condition
         */
        note?: string;
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
         * The family member described
         */
        name?: string;
        /**
         * Relationship to the subject
         */
        relationship: CodeableConcept;
        /**
         * male | female | other | unknown
         */
        gender?: code;
        /**
         * (approximate) date of birth
         */
        bornPeriod?: Period;
        /**
         * (approximate) date of birth
         */
        bornDate?: date;
        /**
         * (approximate) date of birth
         */
        bornString?: string;
        /**
         * (approximate) age
         */
        ageAge?: Age;
        /**
         * (approximate) age
         */
        ageRange?: Range;
        /**
         * (approximate) age
         */
        ageString?: string;
        /**
         * Dead? How old/when?
         */
        deceasedBoolean?: boolean;
        /**
         * Dead? How old/when?
         */
        deceasedAge?: Age;
        /**
         * Dead? How old/when?
         */
        deceasedRange?: Range;
        /**
         * Dead? How old/when?
         */
        deceasedDate?: date;
        /**
         * Dead? How old/when?
         */
        deceasedString?: string;
        /**
         * General note about related person
         */
        note?: string;
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
         * Target of the relationship
         */
        target: Reference;
    }
    /**
     * Clinical context of document
     */
    interface DocumentReferenceContext extends Element {
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
         * Source patient info
         */
        sourcePatientInfo?: Reference;
        /**
         * Related things
         */
        related?: DocumentReferenceContextRelated[];
    }
    /**
     * Related things
     */
    interface DocumentReferenceContextRelated extends Element {
        /**
         * Related Identifier
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
         * Kind of document
         */
        type: CodeableConcept;
        /**
         * Categorization of document
         */
        class?: CodeableConcept;
        /**
         * Format/content rules for the document
         */
        format?: uri[];
        /**
         * Who and/or what authored the document
         */
        author: Reference[];
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
         * When this document reference created
         */
        indexed: instant;
        /**
         * current | superceded | entered-in-error
         */
        status: code;
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
         * Document security-tags
         */
        confidentiality?: CodeableConcept[];
        /**
         * Where to access the document
         */
        content: Attachment[];
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
         * More information about the event and its context
         */
        description?: CodeableConcept;
        /**
         * The date at which the event happened
         */
        dateTime: dateTime;
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
        bodySiteCodeableConcept?: CodeableConcept;
        /**
         * Location of requested test (if applicable)
         */
        bodySiteReference?: Reference;
        /**
         * proposed | draft | planned | requested | received | accepted | in-progress | review | completed | cancelled | suspended | rejected | failed
         */
        status?: code;
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
        clinicalNotes?: string;
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
         * routine | urgent | stat | asap
         */
        priority?: code;
        /**
         * A list of events of interest in the lifecycle
         */
        event?: DiagnosticOrderEvent[];
        /**
         * The items the orderer requested
         */
        item?: DiagnosticOrderItem[];
    }
    /**
     * An oid represented as a URI
     */
    type oid = string;
    /**
     * Each study has one or more series of instances
     */
    interface ImagingStudySeries extends Element {
        /**
         * Numeric identifier of this series (0020,0011)
         */
        number?: unsignedInt;
        /**
         * The modality of the instances in the series (0008,0060)
         */
        modality: code;
        /**
         * Formal identifier for this series (0020,000E)
         */
        uid: oid;
        /**
         * A description of the series (0008,103E)
         */
        description?: string;
        /**
         * Number of Series Related Instances (0020,1209)
         */
        numberOfInstances: unsignedInt;
        /**
         * ONLINE | OFFLINE | NEARLINE | UNAVAILABLE (0008,0056)
         */
        availability?: code;
        /**
         * Retrieve URI (0008,1115 > 0008,1190)
         */
        url?: uri;
        /**
         * Body part examined (Map from 0018,0015)
         */
        bodySite?: Coding;
        /**
         * Body part laterality
         */
        laterality?: Coding;
        /**
         * When the series started
         */
        dateTime?: dateTime;
        /**
         * A single instance taken from a patient (image or other)
         */
        instance?: ImagingStudySeriesInstance[];
    }
    /**
     * A single instance taken from a patient (image or other)
     */
    interface ImagingStudySeriesInstance extends Element {
        /**
         * The number of this instance in the series (0020,0013)
         */
        number?: unsignedInt;
        /**
         * Formal identifier for this instance (0008,0018)
         */
        uid: oid;
        /**
         * DICOM class type (0008,0016)
         */
        sopclass: oid;
        /**
         * Type of instance (image etc) (0004,1430)
         */
        type?: string;
        /**
         * Description (0070,0080 | 0040,A043 > 0008,0104 | 0042,0010 | 0008,0008)
         */
        title?: string;
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
         * When the study was started (0008,0020)+(0008,0030)
         */
        started?: dateTime;
        /**
         * Who the images are of
         */
        patient: Reference;
        /**
         * Formal identifier for the study (0020,000D)
         */
        uid: oid;
        /**
         * Accession Number (0008,0050)
         */
        accession?: Identifier;
        /**
         * Other identifiers for the study (0020,0010)
         */
        identifier?: Identifier[];
        /**
         * Order(s) that caused this study to be performed
         */
        order?: Reference[];
        /**
         * All series.modality if actual acquisition modalities
         */
        modalityList?: code[];
        /**
         * Referring physician (0008,0090)
         */
        referrer?: Reference;
        /**
         * ONLINE | OFFLINE | NEARLINE | UNAVAILABLE (0008,0056)
         */
        availability?: code;
        /**
         * Retrieve URI (0008,1190)
         */
        url?: uri;
        /**
         * Number of Study Related Series (0020,1206)
         */
        numberOfSeries: unsignedInt;
        /**
         * Number of Study Related Instances (0020,1208)
         */
        numberOfInstances: unsignedInt;
        /**
         * Diagnoses etc with request (0040,1002)
         */
        clinicalInformation?: string;
        /**
         * Type of procedure performed (0008,1032)
         */
        procedure?: Coding[];
        /**
         * Who interpreted images (0008,1060)
         */
        interpreter?: Reference;
        /**
         * Institution-generated description (0008,1030)
         */
        description?: string;
        /**
         * Each study has one or more series of instances
         */
        series?: ImagingStudySeries[];
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
         * Height of the image in pixels(photo/video)
         */
        height?: positiveInt;
        /**
         * Width of the image in pixels (photo/video)
         */
        width?: positiveInt;
        /**
         * Number of frames if > 1 (photo)
         */
        frames?: positiveInt;
        /**
         * Length in seconds (audio / video)
         */
        duration?: unsignedInt;
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
         * Name/Code for this diagnostic report
         */
        name: CodeableConcept;
        /**
         * registered | partial | final | corrected | appended | cancelled | entered-in-error
         */
        status: code;
        /**
         * Date this version was released
         */
        issued: dateTime;
        /**
         * The subject of the report, usually, but not always, the patient
         */
        subject: Reference;
        /**
         * Responsible Diagnostic Service
         */
        performer: Reference;
        /**
         * Health care event when test ordered
         */
        encounter?: Reference;
        /**
         * Id for external references to this report
         */
        identifier?: Identifier[];
        /**
         * What was requested
         */
        requestDetail?: Reference[];
        /**
         * Biochemistry, Hematology etc.
         */
        serviceCategory?: CodeableConcept;
        /**
         * Physiologically Relevant time/time-period for report
         */
        diagnosticDateTime?: dateTime;
        /**
         * Physiologically Relevant time/time-period for report
         */
        diagnosticPeriod?: Period;
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
         * Communication medium
         */
        medium?: CodeableConcept[];
        /**
         * Requester of communication
         */
        requester?: Reference;
        /**
         * proposed | planned | requested | received | accepted | in-progress | completed | suspended | rejected | failed
         */
        status?: code;
        /**
         * Encounter leading to message
         */
        encounter?: Reference;
        /**
         * When scheduled
         */
        scheduledTime?: dateTime;
        /**
         * Indication for message
         */
        reason?: CodeableConcept[];
        /**
         * When ordered or proposed
         */
        orderedOn?: dateTime;
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
         * PRN
         */
        prnReason?: CodeableConcept[];
        /**
         * When ordered
         */
        orderedOn?: dateTime;
        /**
         * When recorded
         */
        recordedOn?: dateTime;
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
         * routine | urgent | stat | asap
         */
        priority?: code;
    }
    /**
     * How medication should be taken
     */
    interface MedicationPrescriptionDosageInstruction extends Element {
        /**
         * Dosage instructions expressed as text
         */
        text?: string;
        /**
         * Supplemental instructions - e.g. "with meals"
         */
        additionalInstructions?: CodeableConcept;
        /**
         * When medication should be administered
         */
        scheduledDateTime?: dateTime;
        /**
         * When medication should be administered
         */
        scheduledPeriod?: Period;
        /**
         * When medication should be administered
         */
        scheduledTiming?: Timing;
        /**
         * Take "as needed" f(or x)
         */
        asNeededBoolean?: boolean;
        /**
         * Take "as needed" f(or x)
         */
        asNeededCodeableConcept?: CodeableConcept;
        /**
         * Body site to administer to
         */
        site?: CodeableConcept;
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
        rate?: Ratio;
        /**
         * Upper limit on medication per unit of time
         */
        maxDosePerPeriod?: Ratio;
    }
    /**
     * Medication supply authorization
     */
    interface MedicationPrescriptionDispense extends Element {
        /**
         * Product to be supplied
         */
        medication?: Reference;
        /**
         * Time period supply is authorized for
         */
        validityPeriod?: Period;
        /**
         * # of refills authorized
         */
        numberOfRepeatsAllowed?: positiveInt;
        /**
         * Amount of medication to supply per dispense
         */
        quantity?: Quantity;
        /**
         * Days supply per dispense
         */
        expectedSupplyDuration?: Duration;
    }
    /**
     * Any restrictions on medication substitution?
     */
    interface MedicationPrescriptionSubstitution extends Element {
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
    interface MedicationPrescription extends DomainResource {
        /**
         * External identifier
         */
        identifier?: Identifier[];
        /**
         * When prescription was authorized
         */
        dateWritten?: dateTime;
        /**
         * active | on-hold | completed | entered-in-error | stopped | superceded | draft
         */
        status?: code;
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
         * Medication to be taken
         */
        medication?: Reference;
        /**
         * How medication should be taken
         */
        dosageInstruction?: MedicationPrescriptionDosageInstruction[];
        /**
         * Medication supply authorization
         */
        dispense?: MedicationPrescriptionDispense;
        /**
         * Any restrictions on medication substitution?
         */
        substitution?: MedicationPrescriptionSubstitution;
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
        scheduled?: Timing;
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
         * Scheduled frequency of supplement
         */
        scheduled?: Timing;
        /**
         * Amount of the nutritional supplement
         */
        quantity?: Quantity;
        /**
         * Instructions or additional information about the oral supplement
         */
        instruction?: string;
    }
    /**
     * Enteral formula components
     */
    interface NutritionOrderEnteralFormula extends Element {
        /**
         * Formula feeding instructions expressed as text
         */
        administrationInstructions?: string;
        /**
         * Type of enteral or infant formula
         */
        baseFormulaType?: CodeableConcept;
        /**
         * Product or brand name of the enteral or infant formula
         */
        baseFormulaProductName?: string;
        /**
         * Scheduled frequency of enteral feeding
         */
        scheduled?: Timing;
        /**
         * Type of modular component to add to the feeding
         */
        additiveType?: CodeableConcept;
        /**
         * Product or brand name of the modular additive
         */
        additiveProductName?: string;
        /**
         * Amount of energy per specified volume that is required
         */
        caloricDensity?: Quantity;
        /**
         * How the formula should enter the patient's gastrointestinal tract
         */
        routeofAdministration?: CodeableConcept;
        /**
         * The volume of formula to provide
         */
        quantity?: Quantity;
        /**
         * Speed with which the formula is provided per period of time
         */
        rate?: Ratio;
        /**
         * Change in the rate of administration over a given time
         */
        rateAdjustment?: Quantity;
        /**
         * Upper limit on formula volume per unit of time
         */
        maxVolumeToDeliver?: Quantity;
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
         * proposed | draft | planned | requested | active | on-hold | completed | cancelled
         */
        status?: code;
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
     * Target body sites
     */
    interface ProcedureRequestBodySite extends Element {
        /**
         * Target body site
         */
        siteCodeableConcept?: CodeableConcept;
        /**
         * Target body site
         */
        siteReference?: Reference;
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
         * Procedure Type
         */
        type: CodeableConcept;
        /**
         * Target body sites
         */
        bodySite?: ProcedureRequestBodySite[];
        /**
         * Indication
         */
        indication?: CodeableConcept[];
        /**
         * Procedure timing schedule
         */
        timingDateTime?: dateTime;
        /**
         * Procedure timing schedule
         */
        timingPeriod?: Period;
        /**
         * Procedure timing schedule
         */
        timingTiming?: Timing;
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
         * Notes
         */
        notes?: string[];
        /**
         * PRN
         */
        asNeededBoolean?: boolean;
        /**
         * PRN
         */
        asNeededCodeableConcept?: CodeableConcept;
        /**
         * When Requested
         */
        orderedOn?: dateTime;
        /**
         * Ordering Party
         */
        orderer?: Reference;
        /**
         * routine | urgent | stat | asap
         */
        priority?: code;
    }
    /**
     * Items to re-adjudicate
     */
    interface ProcessRequestItem extends Element {
        /**
         * Service instance
         */
        sequenceLinkId: integer;
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
         * Reference number/string
         */
        reference?: string;
        /**
         * Items to re-adjudicate
         */
        item?: ProcessRequestItem[];
        /**
         * Resource type(s) to include
         */
        include?: string[];
        /**
         * Resource type(s) to exclude
         */
        exclude?: string[];
        /**
         * Period
         */
        period?: Period;
    }
    /**
     * Supply details
     */
    interface SupplyDispense extends Element {
        /**
         * External identifier
         */
        identifier?: Identifier;
        /**
         * in-progress | dispensed | abandoned
         */
        status?: code;
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
        whenHandedOver?: dateTime;
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
     * A supply -  request and provision
     */
    interface Supply extends DomainResource {
        /**
         * The kind of supply (central, non-stock, etc)
         */
        kind?: CodeableConcept;
        /**
         * Unique identifier
         */
        identifier?: Identifier;
        /**
         * requested | dispensed | received | failed | cancelled
         */
        status?: code;
        /**
         * Medication, Substance, or Device requested to be supplied
         */
        orderedItem?: Reference;
        /**
         * Patient for whom the item is supplied
         */
        patient?: Reference;
        /**
         * Supply details
         */
        dispense?: SupplyDispense[];
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
         * Lens sphere
         */
        sphere?: decimal;
        /**
         * Lens cylinder
         */
        cylinder?: decimal;
        /**
         * Lens axis
         */
        axis?: integer;
        /**
         * Lens prism
         */
        prism?: decimal;
        /**
         * up | down | in | out
         */
        base?: code;
        /**
         * Lens add
         */
        add?: decimal;
        /**
         * Contact Lens power
         */
        power?: decimal;
        /**
         * Contact lens back curvature
         */
        backCurve?: decimal;
        /**
         * Contact Lens diameter
         */
        diameter?: decimal;
        /**
         * Lens wear duration
         */
        duration?: Quantity;
        /**
         * Lens add
         */
        color?: string;
        /**
         * Lens add
         */
        brand?: string;
        /**
         * Notes for coatings
         */
        notes?: string;
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
     * Precise location details
     */
    interface ProcedureBodySite extends Element {
        /**
         * Precise location details
         */
        siteCodeableConcept?: CodeableConcept;
        /**
         * Precise location details
         */
        siteReference?: Reference;
    }
    /**
     * The people who performed the procedure
     */
    interface ProcedurePerformer extends Element {
        /**
         * The reference to the practitioner
         */
        person?: Reference;
        /**
         * The role the person was in
         */
        role?: CodeableConcept;
    }
    /**
     * A procedure that is related to this one
     */
    interface ProcedureRelatedItem extends Element {
        /**
         * caused-by | because-of
         */
        type?: code;
        /**
         * The related item - e.g. a procedure
         */
        target?: Reference;
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
         * Additional information on reaction
         */
        detail?: Reference;
        /**
         * Was reaction self-reported?
         */
        reported?: boolean;
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
         * Details of vaccine protocol
         */
        description?: string;
        /**
         * Who is responsible for protocol
         */
        authority?: Reference;
        /**
         * Name of vaccine series
         */
        series?: string;
        /**
         * Recommended number of doses for immunity
         */
        seriesDoses?: positiveInt;
        /**
         * Disease immunized against
         */
        doseTarget: CodeableConcept;
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
         * Vaccination administration date
         */
        date: dateTime;
        /**
         * Vaccine product administered
         */
        vaccineType: CodeableConcept;
        /**
         * Who was immunized?
         */
        patient: Reference;
        /**
         * Was immunization given?
         */
        wasNotGiven: boolean;
        /**
         * Is this a self-reported record?
         */
        reported: boolean;
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
         * Vaccine expiration date
         */
        expirationDate?: date;
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
         * Vaccine recommendation applies to
         */
        vaccineType: CodeableConcept;
        /**
         * Recommended dose number
         */
        doseNumber?: positiveInt;
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
         * Protocol details
         */
        description?: string;
        /**
         * Who is responsible for protocol
         */
        authority?: Reference;
        /**
         * Name of vaccination series
         */
        series?: string;
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
     * Details of how medication was taken
     */
    interface MedicationAdministrationDosage extends Element {
        /**
         * Dosage Instructions
         */
        text?: string;
        /**
         * Body site administered to
         */
        site?: CodeableConcept;
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
        rate?: Ratio;
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
         * Start and end time of administration
         */
        effectiveTimePeriod?: Period;
        /**
         * What was administered?
         */
        medication?: Reference;
        /**
         * Device used to administer
         */
        device?: Reference[];
        /**
         * Information about the administration
         */
        note?: string;
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
         * E.g. "Take with food"
         */
        additionalInstructions?: CodeableConcept;
        /**
         * When medication should be administered
         */
        scheduleDateTime?: dateTime;
        /**
         * When medication should be administered
         */
        schedulePeriod?: Period;
        /**
         * When medication should be administered
         */
        scheduleTiming?: Timing;
        /**
         * Take "as needed" f(or x)
         */
        asNeededBoolean?: boolean;
        /**
         * Take "as needed" f(or x)
         */
        asNeededCodeableConcept?: CodeableConcept;
        /**
         * Body site to administer to
         */
        site?: CodeableConcept;
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
        rate?: Ratio;
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
        medication?: Reference;
        /**
         * Dispense processing time
         */
        whenPrepared?: dateTime;
        /**
         * Handover time
         */
        whenHandedOver?: dateTime;
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
         * Medicine administration instructions to the patient/carer
         */
        dosageInstruction?: MedicationDispenseDosageInstruction[];
        /**
         * Deals with substitution of one medicine for another
         */
        substitution?: MedicationDispenseSubstitution;
    }
    /**
     * Details of how medication was taken
     */
    interface MedicationStatementDosage extends Element {
        /**
         * Dosage Instructions
         */
        text?: string;
        /**
         * When/how often was medication taken?
         */
        schedule?: Timing;
        /**
         * Take "as needed" f(or x)
         */
        asNeededBoolean?: boolean;
        /**
         * Take "as needed" f(or x)
         */
        asNeededCodeableConcept?: CodeableConcept;
        /**
         * Where on body was medication administered?
         */
        site?: CodeableConcept;
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
        quantity?: Quantity;
        /**
         * Dose quantity per unit of time
         */
        rate?: Ratio;
        /**
         * Maximum dose that was consumed per unit of time
         */
        maxDosePerPeriod?: Ratio;
    }
    /**
     * Administration of medication to a patient
     */
    interface MedicationStatement extends DomainResource {
        /**
         * External Identifier
         */
        identifier?: Identifier[];
        /**
         * Who was/is taking medication
         */
        patient?: Reference;
        /**
         * The person who provided the information about the taking of this medication.
         */
        informationSource?: Reference;
        /**
         * When the statement was asserted?
         */
        dateAsserted?: dateTime;
        /**
         * in-progress | completed | entered-in-error
         */
        status: code;
        /**
         * True if medication is/was not being taken
         */
        wasNotGiven?: boolean;
        /**
         * True if asserting medication was not given
         */
        reasonNotGiven?: CodeableConcept[];
        /**
         * A reason for why the medication is being/was taken.
         */
        reasonForUseCodeableConcept?: CodeableConcept;
        /**
         * A reason for why the medication is being/was taken.
         */
        reasonForUseReference?: Reference;
        /**
         * Over what period was medication consumed?
         */
        effectiveDateTime?: dateTime;
        /**
         * Over what period was medication consumed?
         */
        effectivePeriod?: Period;
        /**
         * Further information about the statement
         */
        note?: string;
        /**
         * What medication was taken?
         */
        medication?: Reference;
        /**
         * Details of how medication was taken
         */
        dosage?: MedicationStatementDosage[];
    }
    /**
     * Device changed in procedure
     */
    interface ProcedureDevice extends Element {
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
        patient: Reference;
        /**
         * in-progress | aborted | completed | entered-in-error
         */
        status: code;
        /**
         * Classification of the procedure
         */
        category?: CodeableConcept;
        /**
         * Identification of the procedure
         */
        type: CodeableConcept;
        /**
         * Precise location details
         */
        bodySite?: ProcedureBodySite[];
        /**
         * Reason procedure performed
         */
        indication?: CodeableConcept[];
        /**
         * The people who performed the procedure
         */
        performer?: ProcedurePerformer[];
        /**
         * Date/Period the procedure was performed
         */
        performedDateTime?: dateTime;
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
         * A procedure that is related to this one
         */
        relatedItem?: ProcedureRelatedItem[];
        /**
         * Additional information about procedure
         */
        notes?: string;
        /**
         * Device changed in procedure
         */
        device?: ProcedureDevice[];
        /**
         * Items used during procedure
         */
        used?: Reference[];
    }
    /**
     * A clinical assessment performed when planning treatments and management strategies for a patient
     */
    interface ClinicalImpression extends DomainResource {
        /**
         * The patient being asssesed
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
         * When the assessment occurred
         */
        date?: dateTime;
        /**
         * Why/how the assessment was performed
         */
        description?: string;
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
         * Summary of the assessment
         */
        summary?: string;
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
     * Anatomical location, if relevant
     */
    interface ConditionLocation extends Element {
        /**
         * Location - may include laterality
         */
        siteCodeableConcept?: CodeableConcept;
        /**
         * Location - may include laterality
         */
        siteReference?: Reference;
    }
    /**
     * Causes for this Condition
     */
    interface ConditionDueTo extends Element {
        /**
         * Relationship target by means of a predefined code
         */
        code?: CodeableConcept;
        /**
         * Relationship target resource
         */
        target?: Reference;
    }
    /**
     * Precedent for this Condition
     */
    interface ConditionOccurredFollowing extends Element {
        /**
         * Relationship target by means of a predefined code
         */
        code?: CodeableConcept;
        /**
         * Relationship target resource
         */
        target?: Reference;
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
         * When first detected/suspected/entered
         */
        dateAsserted?: date;
        /**
         * Identification of the condition, problem or diagnosis
         */
        code: CodeableConcept;
        /**
         * E.g. complaint | symptom | finding | diagnosis
         */
        category?: CodeableConcept;
        /**
         * provisional | working | confirmed | refuted | entered-in-error | unknown
         */
        clinicalStatus: code;
        /**
         * Subjective severity of condition
         */
        severity?: CodeableConcept;
        /**
         * Estimated or actual date,  date-time, or age
         */
        onsetDateTime?: dateTime;
        /**
         * Estimated or actual date,  date-time, or age
         */
        onsetAge?: Age;
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
         * If/when in resolution/remission
         */
        abatementDate?: date;
        /**
         * If/when in resolution/remission
         */
        abatementAge?: Age;
        /**
         * If/when in resolution/remission
         */
        abatementBoolean?: boolean;
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
        location?: ConditionLocation[];
        /**
         * Causes for this Condition
         */
        dueTo?: ConditionDueTo[];
        /**
         * Precedent for this Condition
         */
        occurredFollowing?: ConditionOccurredFollowing[];
        /**
         * Additional information about the Condition
         */
        notes?: string;
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
        member: Reference;
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
         * Condition assessed
         */
        condition?: Reference;
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
    }
    /**
     * What was end result of goal?
     */
    interface GoalOutcome extends Element {
        /**
         * Code or observation that resulted from gual
         */
        resultCodeableConcept?: CodeableConcept;
        /**
         * Code or observation that resulted from gual
         */
        resultReference?: Reference;
    }
    /**
     * Describes the intended objective(s) of patient care
     */
    interface Goal extends DomainResource {
        /**
         * External Ids for this goal
         */
        identifier?: Identifier[];
        /**
         * The patient for whom this goal is intended for
         */
        patient?: Reference;
        /**
         * Reach goal on or before
         */
        targetDate?: date;
        /**
         * What's the desired outcome?
         */
        description: string;
        /**
         * proposed | planned | in-progress | achieved | sustaining | cancelled | accepted | rejected
         */
        status: code;
        /**
         * When goal status took effect
         */
        statusDate?: date;
        /**
         * Who's responsible for creating Goal?
         */
        author?: Reference;
        /**
         * high | medium |low
         */
        priority?: CodeableConcept;
        /**
         * Health issues this goal addresses
         */
        concern?: Reference[];
        /**
         * Comments about the goal
         */
        notes?: string;
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
         * Comments about the activity
         */
        notes?: string;
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
        category: code;
        /**
         * Detail type of activity
         */
        code?: CodeableConcept;
        /**
         * Why activity should be done
         */
        reasonCodeableConcept?: CodeableConcept;
        /**
         * Why activity should be done
         */
        reasonReference?: Reference;
        /**
         * Goals this activity relates to
         */
        goal?: Reference[];
        /**
         * not-started | scheduled | in-progress | on-hold | completed | cancelled
         */
        status?: code;
        /**
         * Reason for current status
         */
        statusReason?: CodeableConcept;
        /**
         * Do NOT do
         */
        prohibited: boolean;
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
        product?: Reference;
        /**
         * How to consume/day?
         */
        dailyAmount?: Quantity;
        /**
         * How much to administer/supply/consume
         */
        quantity?: Quantity;
        /**
         * Extra info on activity occurrence
         */
        note?: string;
    }
    /**
     * Healthcare plan for patient
     */
    interface CarePlan extends DomainResource {
        /**
         * External Ids for this plan
         */
        identifier?: Identifier[];
        /**
         * Who care plan is for
         */
        patient?: Reference;
        /**
         * planned | active | completed
         */
        status: code;
        /**
         * Time period plan covers
         */
        period?: Period;
        /**
         * Who is responsible for plan
         */
        author?: Reference[];
        /**
         * When last updated
         */
        modified?: dateTime;
        /**
         * Type of plan
         */
        category?: CodeableConcept[];
        /**
         * Health issues this plan addresses
         */
        concern?: Reference[];
        /**
         * Information considered as part of plan
         */
        support?: Reference[];
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
        notes?: string;
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
         * Is the focal Coverage
         */
        focal: boolean;
        /**
         * Insurance information
         */
        coverage: Reference;
        /**
         * Business agreement
         */
        businessArrangement?: string;
        /**
         * Patient relationship to subscriber
         */
        relationship: Coding;
        /**
         * Pre-Authorization/Determination Reference
         */
        preAuthRef?: string[];
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
         * Count of Contract Valued Items
         */
        quantity?: Quantity;
        /**
         * Contract Valued Item fee, charge, or cost
         */
        unitPrice?: Money;
        /**
         * Contract Valued Item Price Scaling Factor
         */
        factor?: decimal;
        /**
         * Contract Valued Item Difficulty Scaling Factor
         */
        points?: decimal;
        /**
         * Total Contract Valued Item Value
         */
        net?: Money;
    }
    /**
     * An amount of money. With regard to precision, see [[X]]
     */
    interface Money extends Quantity {
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
         * Contract Term Valued Item Count
         */
        quantity?: Quantity;
        /**
         * Contract Term Valued Item fee, charge, or cost
         */
        unitPrice?: Money;
        /**
         * Contract Term Valued Item Price Scaling Factor
         */
        factor?: decimal;
        /**
         * Contract Term Valued Item Difficulty Scaling Factor
         */
        points?: decimal;
        /**
         * Total Contract Term Valued Item Value
         */
        net?: Money;
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
         * When composition attested
         */
        time?: dateTime;
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
         * Full details for the event(s) the composition consents
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
         * Classification of section (recommended)
         */
        code?: CodeableConcept;
        /**
         * The Content of the section (narrative + data entries)
         */
        content?: Reference;
        /**
         * Nested Section
         */
        section?: CompositionSection[];
    }
    /**
     * Entries in the list
     */
    interface ListEntry extends Element {
        /**
         * Workflow information about this item
         */
        flag?: CodeableConcept[];
        /**
         * If this item is actually marked as deleted
         */
        deleted?: boolean;
        /**
         * When item added to list
         */
        date?: dateTime;
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
         * What the purpose of this list is
         */
        code?: CodeableConcept;
        /**
         * If all resources have the same subject
         */
        subject?: Reference;
        /**
         * Who and/or what defined the list contents
         */
        source?: Reference;
        /**
         * current | retired | entered-in-error
         */
        status: code;
        /**
         * When the list was prepared
         */
        date?: dateTime;
        /**
         * What order the list has
         */
        orderedBy?: CodeableConcept;
        /**
         * working | snapshot | changes
         */
        mode: code;
        /**
         * Comments about the note
         */
        note?: string;
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
        title?: string;
        /**
         * preliminary | final | appended | amended | entered-in-error
         */
        status: code;
        /**
         * As defined by affinity domain
         */
        confidentiality?: code;
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
         * An identifier for the plan
         */
        plan?: string;
        /**
         * An identifier for the subsection of the plan
         */
        subPlan?: string;
        /**
         * The dependent number
         */
        dependent?: positiveInt;
        /**
         * The plan instance or sequence counter
         */
        sequence?: positiveInt;
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
         * List of note numbers which apply
         */
        noteNumber?: positiveInt[];
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
         * Monitary amount
         */
        amount?: Money;
        /**
         * Non-monitory value
         */
        value?: decimal;
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
         * Monitary amount
         */
        amount?: Money;
        /**
         * Non-monitory value
         */
        value?: decimal;
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
         * Monitary amount
         */
        amount?: Money;
        /**
         * Non-monitory value
         */
        value?: decimal;
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
         * Group, Service or Product
         */
        service: Coding;
        /**
         * Professional fee or Product charge
         */
        fee?: Money;
        /**
         * List of note numbers which apply
         */
        noteNumberLinkId?: positiveInt[];
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
         * Monitary amount
         */
        amount?: Money;
        /**
         * Non-monitory value
         */
        value?: decimal;
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
        fee?: Money;
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
         * Monitary amount
         */
        amount?: Money;
        /**
         * Non-monitory value
         */
        value?: decimal;
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
         * Detail sequence number
         */
        detailSequenceLinkId?: positiveInt;
        /**
         * Subdetail sequence number
         */
        subdetailSequenceLinkId?: positiveInt;
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
         * display | print | printoper
         */
        type?: Coding;
        /**
         * Note explanitory text
         */
        text?: string;
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
         * Is the focal Coverage
         */
        focal: boolean;
        /**
         * Insurance information
         */
        coverage: Reference;
        /**
         * Business agreement
         */
        businessArrangement?: string;
        /**
         * Patient relationship to subscriber
         */
        relationship: Coding;
        /**
         * Pre-Authorization/Determination Reference
         */
        preAuthRef?: string[];
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
         * Disposition Message
         */
        disposition?: string;
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
        totalCost?: Money;
        /**
         * Unallocated deductable
         */
        unallocDeductable?: Money;
        /**
         * Total benefit payable for the Claim
         */
        totalBenefit?: Money;
        /**
         * Payment adjustment for non-Claim issues
         */
        paymentAdjustment?: Money;
        /**
         * Reason for Payment adjustment
         */
        paymentAdjustmentReason?: Coding;
        /**
         * Expected data of Payment
         */
        paymentDate?: date;
        /**
         * Payment amount
         */
        paymentAmount?: Money;
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
         * Item Code
         */
        service: Coding;
        /**
         * Date of Service
         */
        serviceDate?: date;
        /**
         * Count of Products or Services
         */
        quantity?: Quantity;
        /**
         * Fee, charge or cost per point
         */
        unitPrice?: Money;
        /**
         * Price scaling factor
         */
        factor?: decimal;
        /**
         * Difficulty scaling factor
         */
        points?: decimal;
        /**
         * Total item cost
         */
        net?: Money;
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
        unitPrice?: Money;
        /**
         * Price scaling factor
         */
        factor?: decimal;
        /**
         * Difficulty scaling factor
         */
        points?: decimal;
        /**
         * Total additional item cost
         */
        net?: Money;
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
        unitPrice?: Money;
        /**
         * Price scaling factor
         */
        factor?: decimal;
        /**
         * Difficulty scaling factor
         */
        points?: decimal;
        /**
         * Net additional item cost
         */
        net?: Money;
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
         * Initial service Date
         */
        priorDate?: date;
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
         * Accident Date
         */
        accident?: date;
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
         * Communication medium
         */
        medium?: CodeableConcept[];
        /**
         * in-progress | completed | suspended | rejected | failed
         */
        status?: code;
        /**
         * Encounter leading to message
         */
        encounter?: Reference;
        /**
         * When sent
         */
        sent?: dateTime;
        /**
         * When received
         */
        received?: dateTime;
        /**
         * Indication for message
         */
        reason?: CodeableConcept[];
        /**
         * Focus of message
         */
        subject?: Reference;
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
         * Identifies what this mapping refers to
         */
        uri?: uri;
        /**
         * Names what this mapping refers to
         */
        name?: string;
        /**
         * Versions, Issues, Scope limitations etc
         */
        comments?: string;
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
         * Text description of how slicing works (or not)
         */
        description?: string;
        /**
         * If elements must be in same order as slices
         */
        ordered?: boolean;
        /**
         * closed | open | openAtEnd
         */
        rules: code;
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
         * Profile.structure to apply
         */
        profile?: uri;
        /**
         * contained | referenced | bundled - how aggregated
         */
        aggregation?: code[];
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
         * Short human label
         */
        name?: string;
        /**
         * error | warning
         */
        severity: code;
        /**
         * Human description of constraint
         */
        human: string;
        /**
         * XPath expression of constraint
         */
        xpath: string;
    }
    /**
     * ValueSet details if this is coded
     */
    interface ElementDefinitionBinding extends Element {
        /**
         * Descriptive Name
         */
        name: string;
        /**
         * required | extensible | preferred | example
         */
        strength: code;
        /**
         * Human explanation of the value set
         */
        description?: string;
        /**
         * Source of value set
         */
        valueSetUri?: uri;
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
         * Computable language of mapping
         */
        language?: code;
        /**
         * Details of the mapping
         */
        map: string;
    }
    /**
     * Definition of an elements in a resource or extension
     */
    interface ElementDefinition extends Element {
        /**
         * The path of the element (see the Detailed Descriptions)
         */
        path: string;
        /**
         * How this element is represented in instances
         */
        representation?: code[];
        /**
         * Name for this particular element definition (reference target)
         */
        name?: string;
        /**
         * Name for element to display with or prompt for element
         */
        label?: string;
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
         * Full formal definition as narrative text
         */
        definition?: string;
        /**
         * Comments about the use of this element
         */
        comments?: string;
        /**
         * Why is this needed?
         */
        requirements?: string;
        /**
         * Other names
         */
        alias?: string[];
        /**
         * Minimum Cardinality
         */
        min?: integer;
        /**
         * Maximum Cardinality (a number or *)
         */
        max?: string;
        /**
         * Data type and Profile for this element
         */
        type?: ElementDefinitionType[];
        /**
         * To another element constraint (by element.name)
         */
        nameReference?: string;
        /**
         * Specified value it missing from instance
         */
        defaultValueInteger?: integer;
        /**
         * Specified value it missing from instance
         */
        defaultValueDecimal?: decimal;
        /**
         * Specified value it missing from instance
         */
        defaultValueDateTime?: dateTime;
        /**
         * Specified value it missing from instance
         */
        defaultValueDate?: date;
        /**
         * Specified value it missing from instance
         */
        defaultValueInstant?: instant;
        /**
         * Specified value it missing from instance
         */
        defaultValueTime?: time;
        /**
         * Specified value it missing from instance
         */
        defaultValueString?: string;
        /**
         * Specified value it missing from instance
         */
        defaultValueUri?: uri;
        /**
         * Specified value it missing from instance
         */
        defaultValueBoolean?: boolean;
        /**
         * Specified value it missing from instance
         */
        defaultValueCode?: code;
        /**
         * Specified value it missing from instance
         */
        defaultValueBase64Binary?: base64Binary;
        /**
         * Specified value it missing from instance
         */
        defaultValueCoding?: Coding;
        /**
         * Specified value it missing from instance
         */
        defaultValueCodeableConcept?: CodeableConcept;
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
        defaultValueSignature?: Signature;
        /**
         * Specified value it missing from instance
         */
        defaultValueReference?: Reference;
        /**
         * Implicit meaning when this element is missing
         */
        meaningWhenMissing?: string;
        /**
         * Value must be exactly this
         */
        fixedInteger?: integer;
        /**
         * Value must be exactly this
         */
        fixedDecimal?: decimal;
        /**
         * Value must be exactly this
         */
        fixedDateTime?: dateTime;
        /**
         * Value must be exactly this
         */
        fixedDate?: date;
        /**
         * Value must be exactly this
         */
        fixedInstant?: instant;
        /**
         * Value must be exactly this
         */
        fixedTime?: time;
        /**
         * Value must be exactly this
         */
        fixedString?: string;
        /**
         * Value must be exactly this
         */
        fixedUri?: uri;
        /**
         * Value must be exactly this
         */
        fixedBoolean?: boolean;
        /**
         * Value must be exactly this
         */
        fixedCode?: code;
        /**
         * Value must be exactly this
         */
        fixedBase64Binary?: base64Binary;
        /**
         * Value must be exactly this
         */
        fixedCoding?: Coding;
        /**
         * Value must be exactly this
         */
        fixedCodeableConcept?: CodeableConcept;
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
        fixedSignature?: Signature;
        /**
         * Value must be exactly this
         */
        fixedReference?: Reference;
        /**
         * Value must have at least these property values
         */
        patternInteger?: integer;
        /**
         * Value must have at least these property values
         */
        patternDecimal?: decimal;
        /**
         * Value must have at least these property values
         */
        patternDateTime?: dateTime;
        /**
         * Value must have at least these property values
         */
        patternDate?: date;
        /**
         * Value must have at least these property values
         */
        patternInstant?: instant;
        /**
         * Value must have at least these property values
         */
        patternTime?: time;
        /**
         * Value must have at least these property values
         */
        patternString?: string;
        /**
         * Value must have at least these property values
         */
        patternUri?: uri;
        /**
         * Value must have at least these property values
         */
        patternBoolean?: boolean;
        /**
         * Value must have at least these property values
         */
        patternCode?: code;
        /**
         * Value must have at least these property values
         */
        patternBase64Binary?: base64Binary;
        /**
         * Value must have at least these property values
         */
        patternCoding?: Coding;
        /**
         * Value must have at least these property values
         */
        patternCodeableConcept?: CodeableConcept;
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
        patternSignature?: Signature;
        /**
         * Value must have at least these property values
         */
        patternReference?: Reference;
        /**
         * Example value: [as defined for type]
         */
        exampleInteger?: integer;
        /**
         * Example value: [as defined for type]
         */
        exampleDecimal?: decimal;
        /**
         * Example value: [as defined for type]
         */
        exampleDateTime?: dateTime;
        /**
         * Example value: [as defined for type]
         */
        exampleDate?: date;
        /**
         * Example value: [as defined for type]
         */
        exampleInstant?: instant;
        /**
         * Example value: [as defined for type]
         */
        exampleTime?: time;
        /**
         * Example value: [as defined for type]
         */
        exampleString?: string;
        /**
         * Example value: [as defined for type]
         */
        exampleUri?: uri;
        /**
         * Example value: [as defined for type]
         */
        exampleBoolean?: boolean;
        /**
         * Example value: [as defined for type]
         */
        exampleCode?: code;
        /**
         * Example value: [as defined for type]
         */
        exampleBase64Binary?: base64Binary;
        /**
         * Example value: [as defined for type]
         */
        exampleCoding?: Coding;
        /**
         * Example value: [as defined for type]
         */
        exampleCodeableConcept?: CodeableConcept;
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
        exampleSignature?: Signature;
        /**
         * Example value: [as defined for type]
         */
        exampleReference?: Reference;
        /**
         * Max length for strings
         */
        maxLength?: integer;
        /**
         * Reference to invariant about presence
         */
        condition?: id[];
        /**
         * Condition that must evaluate to true
         */
        constraint?: ElementDefinitionConstraint[];
        /**
         * If the element must supported
         */
        mustSupport?: boolean;
        /**
         * If this modifies the meaning of other elements
         */
        isModifier?: boolean;
        /**
         * Include when _summary = true?
         */
        isSummary?: boolean;
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
         * Other identifiers for the StructureDefinition
         */
        identifier?: Identifier[];
        /**
         * Logical id for this version of the StructureDefinition
         */
        version?: string;
        /**
         * Informal name for this StructureDefinition
         */
        name: string;
        /**
         * Content intends to support these contexts
         */
        useContext?: CodeableConcept[];
        /**
         * Use this name when displaying the value
         */
        display?: string;
        /**
         * Name of the publisher (Organization or individual)
         */
        publisher?: string;
        /**
         * Contact details of the publisher
         */
        contact?: StructureDefinitionContact[];
        /**
         * Natural language description of the StructureDefinition
         */
        description?: string;
        /**
         * Scope and Usage this structure definition is for
         */
        requirements?: string;
        /**
         * Use and/or Publishing restrictions
         */
        copyright?: string;
        /**
         * Assist with indexing and finding
         */
        code?: Coding[];
        /**
         * draft | active | retired
         */
        status: code;
        /**
         * If for testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Date for this version of the StructureDefinition
         */
        date?: dateTime;
        /**
         * FHIR Version this StructureDefinition targets
         */
        fhirVersion?: id;
        /**
         * External specification that the content is mapped to
         */
        mapping?: StructureDefinitionMapping[];
        /**
         * type | resource | constraint | extension
         */
        type: code;
        /**
         * Whether the structure is abstract
         */
        abstract: boolean;
        /**
         * resource | datatype | mapping | extension
         */
        contextType?: code;
        /**
         * Where the extension can be used in instances
         */
        context?: string[];
        /**
         * Structure that this set of constraints applies to
         */
        base?: uri;
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
         * Identifies element being mapped
         */
        code?: code;
        /**
         * Other elements required for this mapping (from context)
         */
        dependsOn?: ConceptMapElementDependsOn[];
        /**
         * Target of this map
         */
        map?: ConceptMapElementMap[];
    }
    /**
     * Other elements required for this mapping (from context)
     */
    interface ConceptMapElementDependsOn extends Element {
        /**
         * Reference to element/field/valueset mapping depends on
         */
        element: uri;
        /**
         * Code System (if necessary)
         */
        codeSystem: uri;
        /**
         * Value of the referenced element
         */
        code: string;
    }
    /**
     * Target of this map
     */
    interface ConceptMapElementMap extends Element {
        /**
         * System of the target (if necessary)
         */
        codeSystem?: uri;
        /**
         * Code that identifies the target element
         */
        code?: code;
        /**
         * equivalent | equal | wider | subsumes | narrower | specialises | inexact | unmatched | disjoint
         */
        equivalence: code;
        /**
         * Description of status/issues in mapping
         */
        comments?: string;
        /**
         * Other concepts that this mapping also produces
         */
        product?: ConceptMapElementDependsOn[];
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
         * Additional identifier for the concept map
         */
        identifier?: Identifier;
        /**
         * Logical id for this version of the concept map
         */
        version?: string;
        /**
         * Informal name for this concept map
         */
        name?: string;
        /**
         * Content intends to support these contexts
         */
        useContext?: CodeableConcept[];
        /**
         * Name of the publisher (Organization or individual)
         */
        publisher?: string;
        /**
         * Contact details of the publisher
         */
        contact?: ConceptMapContact[];
        /**
         * Human language description of the concept map
         */
        description?: string;
        /**
         * Why is this needed?
         */
        requirements?: string;
        /**
         * Use and/or Publishing restrictions
         */
        copyright?: string;
        /**
         * draft | active | retired
         */
        status: code;
        /**
         * If for testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Date for given status
         */
        date?: dateTime;
        /**
         * Identifies the source of the concepts which are being mapped
         */
        sourceUri?: uri;
        /**
         * Identifies the source of the concepts which are being mapped
         */
        sourceReference?: Reference;
        /**
         * Provides context to the mappings
         */
        targetUri?: uri;
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
         * Version covered by this statement
         */
        version?: string;
        /**
         * Date this version released
         */
        releaseDate?: dateTime;
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
         * Base URL for the installation
         */
        url?: uri;
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
         * General description of implementation
         */
        documentation?: string;
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
         * Definition of an operation or a custom query
         */
        operation?: ConformanceRestOperation[];
        /**
         * How documents are accepted in /Mailbox
         */
        documentMailbox?: uri[];
        /**
         * Compartments served/used by system
         */
        compartment?: uri[];
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
         * OAuth | OAuth2 | NTLM | Basic | Kerberos
         */
        service?: CodeableConcept[];
        /**
         * General description of how security works
         */
        description?: string;
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
         * Actual certificate
         */
        blob?: base64Binary;
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
         * What structural features are supported
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
         * Whether vRead can return past versions
         */
        readHistory?: boolean;
        /**
         * If update can commit to a new identity
         */
        updateCreate?: boolean;
        /**
         * If allows/uses conditional create
         */
        conditionalCreate?: boolean;
        /**
         * If allows/uses conditional update
         */
        conditionalUpdate?: boolean;
        /**
         * If allows/uses conditional delete
         */
        conditionalDelete?: boolean;
        /**
         * _include values supported by the server
         */
        searchInclude?: string[];
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
         * Anything special about operation behavior
         */
        documentation?: string;
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
         * Source of definition for parameter
         */
        definition?: uri;
        /**
         * number | date | string | token | reference | composite | quantity | uri
         */
        type: code;
        /**
         * Server-specific usage
         */
        documentation?: string;
        /**
         * Types of resource (if a resource reference)
         */
        target?: code[];
        /**
         * Chained names supported
         */
        chain?: string[];
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
         * Anything special about operation behavior
         */
        documentation?: string;
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
         * Contact details for individual or publisher
         */
        telecom?: ContactPoint[];
    }
    /**
     * Parameters for the operation/query
     */
    interface OperationDefinitionParameter extends Element {
        /**
         * Name of the parameter
         */
        name: code;
        /**
         * in | out
         */
        use: code;
        /**
         * Minimum Cardinality
         */
        min: integer;
        /**
         * Maximum Cardinality (a number or *)
         */
        max: string;
        /**
         * Description of meaning/use
         */
        documentation?: string;
        /**
         * What type this parameter hs
         */
        type?: code;
        /**
         * Profile on the type
         */
        profile?: Reference;
        /**
         * Parts of a Tuple Parameter
         */
        part?: OperationDefinitionParameterPart[];
    }
    /**
     * Parts of a Tuple Parameter
     */
    interface OperationDefinitionParameterPart extends Element {
        /**
         * Name of the parameter
         */
        name: code;
        /**
         * Minimum Cardinality
         */
        min: unsignedInt;
        /**
         * Maximum Cardinality (a number or *)
         */
        max: string;
        /**
         * Description of meaning/use
         */
        documentation?: string;
        /**
         * What type this parameter hs
         */
        type: code;
        /**
         * Profile on the type
         */
        profile?: Reference;
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
         * Logical id for this version of the operation definition
         */
        version?: string;
        /**
         * Informal name for this profile
         */
        name: string;
        /**
         * Name of the publisher (Organization or individual)
         */
        publisher?: string;
        /**
         * Contact details of the publisher
         */
        contact?: OperationDefinitionContact[];
        /**
         * Natural language description of the operation
         */
        description?: string;
        /**
         * Why is this needed?
         */
        requirements?: string;
        /**
         * draft | active | retired
         */
        status: code;
        /**
         * If for testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Date for this version of the operation definition
         */
        date?: dateTime;
        /**
         * operation | query
         */
        kind: code;
        /**
         * Whether operation causes changes to content
         */
        idempotent?: boolean;
        /**
         * Name used to invoke the operation
         */
        code: code;
        /**
         * Additional information about use
         */
        notes?: string;
        /**
         * Marks this as a profile of the base
         */
        base?: Reference;
        /**
         * Invoke at the system level?
         */
        system: boolean;
        /**
         * Invoke at resource level for these type
         */
        type?: code[];
        /**
         * Invoke on an instance?
         */
        instance: boolean;
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
         * Actual endpoint being described
         */
        endpoint?: uri;
        /**
         * Reliable Message Cache Length (min)
         */
        reliableCache?: unsignedInt;
        /**
         * Messaging interface behavior details
         */
        documentation?: string;
        /**
         * Declare support for this event
         */
        event: ConformanceMessagingEvent[];
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
         * sender | receiver
         */
        mode: code;
        /**
         * http | ftp | mllp +
         */
        protocol?: Coding[];
        /**
         * Resource that's focus of message
         */
        focus: code;
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
         * Description of document support
         */
        documentation?: string;
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
         * Logical id for this version of the statement
         */
        version?: string;
        /**
         * Informal name for this conformance statement
         */
        name?: string;
        /**
         * Name of the publisher (Organization or individual)
         */
        publisher?: string;
        /**
         * Contact details of the publisher
         */
        contact?: ConformanceContact[];
        /**
         * Human description of the conformance statement
         */
        description?: string;
        /**
         * Why is this needed?
         */
        requirements?: string;
        /**
         * Use and/or Publishing restrictions
         */
        copyright?: string;
        /**
         * draft | active | retired
         */
        status?: code;
        /**
         * If for testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Publication Date(/time)
         */
        date: dateTime;
        /**
         * Software that is covered by this conformance statement
         */
        software?: ConformanceSoftware;
        /**
         * If this describes a specific instance
         */
        implementation?: ConformanceImplementation;
        /**
         * FHIR Version
         */
        fhirVersion: id;
        /**
         * True if application accepts unknown elements
         */
        acceptUnknown: boolean;
        /**
         * formats supported (xml | json | mime type)
         */
        format: code[];
        /**
         * Profiles supported by the system
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
     * Step taken to address
     */
    interface ContraindicationMitigation extends Element {
        /**
         * What mitigation?
         */
        action: CodeableConcept;
        /**
         * Date committed
         */
        date?: dateTime;
        /**
         * Who is committing?
         */
        author?: Reference;
    }
    /**
     * Clinical issue with action
     */
    interface Contraindication extends DomainResource {
        /**
         * Associated patient
         */
        patient?: Reference;
        /**
         * E.g. Drug-drug, duplicate therapy, etc.
         */
        category?: CodeableConcept;
        /**
         * high | medium | low
         */
        severity?: code;
        /**
         * Problem resource
         */
        implicated?: Reference[];
        /**
         * Description and context
         */
        detail?: string;
        /**
         * When identified
         */
        date?: dateTime;
        /**
         * Who found issue?
         */
        author?: Reference;
        /**
         * Unique id for the contraindication
         */
        identifier?: Identifier;
        /**
         * Authority for issue
         */
        reference?: uri;
        /**
         * Step taken to address
         */
        mitigation?: ContraindicationMitigation[];
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
         * Identifies what this mapping refers to
         */
        uri?: uri;
        /**
         * Names what this mapping refers to
         */
        name?: string;
        /**
         * Versions, Issues, Scope limitations etc
         */
        comments?: string;
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
         * Logical id to reference this data element
         */
        identifier?: Identifier;
        /**
         * Logical id for this version of the data element
         */
        version?: string;
        /**
         * Descriptive label for this element definition
         */
        name?: string;
        /**
         * Content intends to support these contexts
         */
        useContext?: CodeableConcept[];
        /**
         * If for testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * draft | active | retired
         */
        status: code;
        /**
         * Date for this version of the data element
         */
        date?: dateTime;
        /**
         * Use and/or Publishing restrictions
         */
        copyright?: string;
        /**
         * Name of the publisher (Organization or individual)
         */
        publisher?: string;
        /**
         * Contact details of the publisher
         */
        contact?: DataElementContact[];
        /**
         * comparable | fully-specified | equivalent | convertable | scaleable | flexible
         */
        specificity?: code;
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
     * A record of a device being used by a patient where the record is the result of a report from the patient or another clinician.
     */
    interface DeviceUseStatement extends DomainResource {
        /**
         * Target body site
         */
        bodySiteCodeableConcept?: CodeableConcept;
        /**
         * Target body site
         */
        bodySiteReference?: Reference;
        /**
         * The time period over which the device was used.
         */
        whenUsed?: Period;
        /**
         * The details of the device used.
         */
        device: Reference;
        /**
         * An external identifier for this statement such as an IRI.
         */
        identifier?: Identifier[];
        /**
         * Reason or justification for the use of the device.
         */
        indication?: CodeableConcept[];
        /**
         * Details about the device statement that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
         */
        notes?: string[];
        /**
         * The time at which the statement was made/recorded.
         */
        recordedOn?: dateTime;
        /**
         * The patient who used the device.
         */
        subject: Reference;
        /**
         * How often the device was used.
         */
        timingTiming?: Timing;
        /**
         * How often the device was used.
         */
        timingPeriod?: Period;
        /**
         * How often the device was used.
         */
        timingDateTime?: dateTime;
    }
    /**
     * Contents of the manifest
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
         * Related Identifier
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
         * Who and/or what authored the document
         */
        author?: Reference[];
        /**
         * When this document manifest created
         */
        created?: dateTime;
        /**
         * The source system/application/software
         */
        source?: uri;
        /**
         * current | superceded | entered-in-error
         */
        status: code;
        /**
         * Human-readable description (title)
         */
        description?: string;
        /**
         * Contents of the manifest
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
         * Disposition Message
         */
        disposition?: string;
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
         * Disposition Message
         */
        disposition?: string;
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
         * Disposition Message
         */
        disposition?: string;
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
         * Time period when flag is active
         */
        period?: Period;
        /**
         * Who is flag about?
         */
        patient: Reference;
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
     * Study identity of the selected instances
     */
    interface ImagingObjectSelectionStudy extends Element {
        /**
         * Study instance uid
         */
        uid: oid;
        /**
         * Retrieve URL
         */
        url?: uri;
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
         * Series instance uid
         */
        uid?: oid;
        /**
         * Retrieve URL
         */
        url?: uri;
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
         * SOP class uid of instance
         */
        sopClass: oid;
        /**
         * Uid of the selected instance
         */
        uid: oid;
        /**
         * Retrieve URL
         */
        url: uri;
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
         * Retrieve URL
         */
        url: uri;
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
         * Author (human or machine)
         */
        author?: Reference;
        /**
         * Authoring time of the selection
         */
        authoringTime?: dateTime;
        /**
         * Study identity of the selected instances
         */
        study: ImagingObjectSelectionStudy[];
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
         * ok | transient-error | fatal-error
         */
        code: code;
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
         * Error or warning code
         */
        code: CodeableConcept;
        /**
         * Additional diagnostic information about the issue
         */
        details?: string;
        /**
         * XPath of element(s) related to issue
         */
        location?: string[];
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
         * Name of software running the system
         */
        software?: string;
        /**
         * Version of software running
         */
        version?: string;
        /**
         * Human contact for problems
         */
        contact?: ContactPoint;
        /**
         * Actual message source address or id
         */
        endpoint: uri;
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
         * Particular delivery destination within the destination
         */
        target?: Reference;
        /**
         * Actual destination address or id
         */
        endpoint: uri;
    }
    /**
     * A resource that describes a message that is exchanged between systems
     */
    interface MessageHeader extends DomainResource {
        /**
         * Id of this message
         */
        identifier: id;
        /**
         * Time that the message was sent
         */
        timestamp: instant;
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
     * Unique identifiers used for system
     */
    interface NamingSystemUniqueId extends Element {
        /**
         * oid | uuid | uri | other
         */
        type: code;
        /**
         * The unique identifier
         */
        value: string;
        /**
         * Is this the id that should be used for this type
         */
        preferred?: boolean;
        /**
         * When is identifier valid?
         */
        period?: Period;
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
         * Contact details for individual or publisher
         */
        telecom?: ContactPoint[];
    }
    /**
     * System of unique identification
     */
    interface NamingSystem extends DomainResource {
        /**
         * codesystem | identifier | root
         */
        type: code;
        /**
         * Human-readable label
         */
        name: string;
        /**
         * Publication Date(/time)
         */
        date: dateTime;
        /**
         * draft | active | retired
         */
        status: code;
        /**
         * ISO 3-char country code
         */
        country?: code;
        /**
         * e.g. driver,  provider,  patient, bank etc
         */
        category?: CodeableConcept;
        /**
         * Who maintains system namespace?
         */
        responsible?: string;
        /**
         * What does namingsystem identify?
         */
        description?: string;
        /**
         * How/where is it used
         */
        usage?: string;
        /**
         * Unique identifiers used for system
         */
        uniqueId: NamingSystemUniqueId[];
        /**
         * Name of the publisher (Organization or individual)
         */
        publisher?: string;
        /**
         * Contact details of the publisher
         */
        contact?: NamingSystemContact[];
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
         * Who made the response
         */
        who?: Reference;
        /**
         * If required by policy
         */
        authorityCodeableConcept?: CodeableConcept;
        /**
         * If required by policy
         */
        authorityReference?: Reference;
        /**
         * pending | review | rejected | error | accepted | cancelled | replaced | aborted | completed
         */
        orderStatus: code;
        /**
         * Additional description of the response
         */
        description?: string;
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
         * If parameter is a data type
         */
        valueInteger?: integer;
        /**
         * If parameter is a data type
         */
        valueDecimal?: decimal;
        /**
         * If parameter is a data type
         */
        valueDateTime?: dateTime;
        /**
         * If parameter is a data type
         */
        valueDate?: date;
        /**
         * If parameter is a data type
         */
        valueInstant?: instant;
        /**
         * If parameter is a data type
         */
        valueTime?: time;
        /**
         * If parameter is a data type
         */
        valueString?: string;
        /**
         * If parameter is a data type
         */
        valueUri?: uri;
        /**
         * If parameter is a data type
         */
        valueBoolean?: boolean;
        /**
         * If parameter is a data type
         */
        valueCode?: code;
        /**
         * If parameter is a data type
         */
        valueBase64Binary?: base64Binary;
        /**
         * If parameter is a data type
         */
        valueCoding?: Coding;
        /**
         * If parameter is a data type
         */
        valueCodeableConcept?: CodeableConcept;
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
        valueSignature?: Signature;
        /**
         * If parameter is a data type
         */
        valueReference?: Reference;
        /**
         * If parameter is a whole resource
         */
        resource?: Resource;
        /**
         * Named part of a parameter (e.g. Tuple)
         */
        part?: ParametersParameterPart[];
    }
    /**
     * Named part of a parameter (e.g. Tuple)
     */
    interface ParametersParameterPart extends Element {
        /**
         * Name from the definition
         */
        name: string;
        /**
         * Value of the part
         */
        valueInteger?: integer;
        /**
         * Value of the part
         */
        valueDecimal?: decimal;
        /**
         * Value of the part
         */
        valueDateTime?: dateTime;
        /**
         * Value of the part
         */
        valueDate?: date;
        /**
         * Value of the part
         */
        valueInstant?: instant;
        /**
         * Value of the part
         */
        valueTime?: time;
        /**
         * Value of the part
         */
        valueString?: string;
        /**
         * Value of the part
         */
        valueUri?: uri;
        /**
         * Value of the part
         */
        valueBoolean?: boolean;
        /**
         * Value of the part
         */
        valueCode?: code;
        /**
         * Value of the part
         */
        valueBase64Binary?: base64Binary;
        /**
         * Value of the part
         */
        valueCoding?: Coding;
        /**
         * Value of the part
         */
        valueCodeableConcept?: CodeableConcept;
        /**
         * Value of the part
         */
        valueAttachment?: Attachment;
        /**
         * Value of the part
         */
        valueIdentifier?: Identifier;
        /**
         * Value of the part
         */
        valueQuantity?: Quantity;
        /**
         * Value of the part
         */
        valueRange?: Range;
        /**
         * Value of the part
         */
        valuePeriod?: Period;
        /**
         * Value of the part
         */
        valueRatio?: Ratio;
        /**
         * Value of the part
         */
        valueHumanName?: HumanName;
        /**
         * Value of the part
         */
        valueAddress?: Address;
        /**
         * Value of the part
         */
        valueContactPoint?: ContactPoint;
        /**
         * Value of the part
         */
        valueTiming?: Timing;
        /**
         * Value of the part
         */
        valueSignature?: Signature;
        /**
         * Value of the part
         */
        valueReference?: Reference;
        /**
         * If part is a whole resource
         */
        resource?: Resource;
    }
    /**
     * Operation Request or Response
     */
    interface Parameters extends Resource {
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
         * Detail amount
         */
        amount?: Money;
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
         * Disposition Message
         */
        disposition?: string;
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
        total: Money;
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
         * The birth date for the person
         */
        birthDate?: dateTime;
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
         * Agents Role
         */
        role: Coding;
        /**
         * Agent Type
         */
        type: Coding;
        /**
         * Identity of agent
         */
        referenceUri?: uri;
        /**
         * Identity of agent
         */
        referenceReference?: Reference;
        /**
         * Human description of participant
         */
        display?: string;
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
         * Entity Type
         */
        type: Coding;
        /**
         * Identity of entity
         */
        reference: uri;
        /**
         * Human description of entity
         */
        display?: string;
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
         * Reason the activity is occurring
         */
        reason?: CodeableConcept;
        /**
         * Where the activity occurred, if relevant
         */
        location?: Reference;
        /**
         * Policy or plan the activity was defined by
         */
        policy?: uri[];
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
         * Name of search parameter
         */
        name: string;
        /**
         * Name of the publisher (Organization or individual)
         */
        publisher?: string;
        /**
         * Contact details of the publisher
         */
        contact?: SearchParameterContact[];
        /**
         * Why this search parameter is defined
         */
        requirements?: string;
        /**
         * draft | active | retired
         */
        status?: code;
        /**
         * If for testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Publication Date(/time)
         */
        date?: dateTime;
        /**
         * The resource type this search parameter applies to
         */
        base: code;
        /**
         * number | date | string | token | reference | composite | quantity | uri
         */
        type: code;
        /**
         * Documentation for  search parameter
         */
        description: string;
        /**
         * XPath that extracts the values
         */
        xpath?: string;
        /**
         * Types of resource (if a resource reference)
         */
        target?: code[];
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
         * Where the channel points to
         */
        endpoint?: uri;
        /**
         * Mimetype to send, or blank for no payload
         */
        payload: string;
        /**
         * Usage depends on the channel type
         */
        header?: string;
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
         * Contact details for source (e.g. troubleshooting)
         */
        contact?: ContactPoint[];
        /**
         * Description of why this subscription was created
         */
        reason: string;
        /**
         * requested | active | error | off
         */
        status: code;
        /**
         * Latest error note
         */
        error?: string;
        /**
         * The channel on which to report matches to the criteria
         */
        channel: SubscriptionChannel;
        /**
         * When to automatically delete the subscription
         */
        end?: instant;
        /**
         * A tag to add to matching resources
         */
        tag?: Coding[];
    }
}
