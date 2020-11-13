// Type definitions for FHIR 4.0
// Project: http://hl7.org/fhir/index.html
// Definitions by: Artifact Health <https://www.artifacthealth.com>
//                 Vermonster <https://github.com/Vermonster>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare module fhir {
    /**
     * A stream of bytes
     */
    type base64Binary = string;
    /**
     * A URI that is a reference to a canonical URL on a FHIR resource
     */
    type canonical = string;
    /**
     * A string which has at least one character and no leading or trailing whitespace and where there is no whitespace other than single spaces in the contents
     */
    type code = string;
    /**
     * A date or partial date (e.g. just year or year + month). There is no time zone. The format is a union of the schema types gYear, gYearMonth and date.  Dates SHALL be valid dates.
     */
    type date = string;
    /**
     * A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are specified, a time zone SHALL be populated. The format is a union of the schema types gYear, gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be zero-filled and may be ignored.                 Dates SHALL be valid dates.
     */
    type dateTime = string;
    /**
     * A rational number with implicit precision
     */
    type decimal = number;
    /**
     * Any combination of letters, numerals, "-" and ".", with a length limit of 64 characters.  (This might be an integer, an unprefixed OID, UUID or any other identifier pattern that meets these constraints.)  Ids are case-insensitive.
     */
    type id = string;
    /**
     * An instant in time - known at least to the second
     */
    type instant = string;
    /**
     * A whole number
     */
    type integer = number;
    /**
     * A string that may contain Github Flavored Markdown syntax for optional processing by a mark down presentation engine
     */
    type markdown = string;
    /**
     * An OID represented as a URI
     */
    type oid = string;
    /**
     * An integer with a value that is positive (e.g. >0)
     */
    type positiveInt = number;
    /**
     * A time during the day, with no date specified
     */
    type time = string;
    /**
     * An integer with a value that is not negative (e.g. >= 0)
     */
    type unsignedInt = number;
    /**
     * String of characters used to identify a name or a resource
     */
    type uri = string;
    /**
     * A URI that is a literal reference
     */
    type url = string;
    /**
     * A UUID, represented as a URI
     */
    type uuid = string;
    /**
     * Time range defined by start and end date/time
     */
    interface Period extends Element {
        /**
         * Starting time with inclusive boundary
         */
        start?: dateTime;
        /**
         * Contains extended information for property 'start'.
         */
        _start?: Element;
        /**
         * End time with inclusive boundary, if not ongoing
         */
        end?: dateTime;
        /**
         * Contains extended information for property 'end'.
         */
        _end?: Element;
    }
    /**
     * An address expressed using postal conventions (as opposed to GPS or other location definition formats)
     */
    interface Address extends Element {
        /**
         * home | work | temp | old | billing - purpose of this address
         */
        use?: code;
        /**
         * Contains extended information for property 'use'.
         */
        _use?: Element;
        /**
         * postal | physical | both
         */
        type?: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * Text representation of the address
         */
        text?: string;
        /**
         * Contains extended information for property 'text'.
         */
        _text?: Element;
        /**
         * Street name, number, direction & P.O. Box etc.
         */
        line?: string[];
        /**
         * Contains extended information for property 'line'.
         */
        _line?: Element[];
        /**
         * Name of city, town etc.
         */
        city?: string;
        /**
         * Contains extended information for property 'city'.
         */
        _city?: Element;
        /**
         * District name (aka county)
         */
        district?: string;
        /**
         * Contains extended information for property 'district'.
         */
        _district?: Element;
        /**
         * Sub-unit of country (abbreviations ok)
         */
        state?: string;
        /**
         * Contains extended information for property 'state'.
         */
        _state?: Element;
        /**
         * Postal code for area
         */
        postalCode?: string;
        /**
         * Contains extended information for property 'postalCode'.
         */
        _postalCode?: Element;
        /**
         * Country (e.g. can be ISO 3166 2 or 3 letter code)
         */
        country?: string;
        /**
         * Contains extended information for property 'country'.
         */
        _country?: Element;
        /**
         * Time period when address was/is in use
         */
        period?: Period;
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
         * Contains extended information for property 'value'.
         */
        _value?: Element;
        /**
         * < | <= | >= | > - how to understand the value
         */
        comparator?: code;
        /**
         * Contains extended information for property 'comparator'.
         */
        _comparator?: Element;
        /**
         * Unit representation
         */
        unit?: string;
        /**
         * Contains extended information for property 'unit'.
         */
        _unit?: Element;
        /**
         * System that defines coded unit form
         */
        system?: uri;
        /**
         * Contains extended information for property 'system'.
         */
        _system?: Element;
        /**
         * Coded form of the unit
         */
        code?: code;
        /**
         * Contains extended information for property 'code'.
         */
        _code?: Element;
    }
    /**
     * A duration of time during which an organism (or a process) has existed
     */
    interface Age extends Quantity {
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
         * Contains extended information for property 'system'.
         */
        _system?: Element;
        /**
         * Version of the system - if relevant
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
        /**
         * Symbol in syntax defined by the system
         */
        code?: code;
        /**
         * Contains extended information for property 'code'.
         */
        _code?: Element;
        /**
         * Representation defined by the system
         */
        display?: string;
        /**
         * Contains extended information for property 'display'.
         */
        _display?: Element;
        /**
         * If this coding was chosen directly by the user
         */
        userSelected?: boolean;
        /**
         * Contains extended information for property 'userSelected'.
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
         * Contains extended information for property 'text'.
         */
        _text?: Element;
    }
    /**
     * An identifier intended for computation
     */
    interface Identifier extends Element {
        /**
         * usual | official | temp | secondary | old (If known)
         */
        use?: code;
        /**
         * Contains extended information for property 'use'.
         */
        _use?: Element;
        /**
         * Description of identifier
         */
        type?: CodeableConcept;
        /**
         * The namespace for the identifier value
         */
        system?: uri;
        /**
         * Contains extended information for property 'system'.
         */
        _system?: Element;
        /**
         * The value that is unique
         */
        value?: string;
        /**
         * Contains extended information for property 'value'.
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
     * A reference from one resource to another
     */
    interface Reference extends Element {
        /**
         * Literal reference, Relative, internal or absolute URL
         */
        reference?: string;
        /**
         * Contains extended information for property 'reference'.
         */
        _reference?: Element;
        /**
         * Type the reference refers to (e.g. "Patient")
         */
        type?: uri;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * Logical reference, when literal reference is not known
         */
        identifier?: Identifier;
        /**
         * Text alternative for the resource
         */
        display?: string;
        /**
         * Contains extended information for property 'display'.
         */
        _display?: Element;
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
         * Contains extended information for property 'authorString'.
         */
        _authorString?: Element;
        /**
         * When the annotation was made
         */
        time?: dateTime;
        /**
         * Contains extended information for property 'time'.
         */
        _time?: Element;
        /**
         * The annotation  - text content (as markdown)
         */
        text: markdown;
        /**
         * Contains extended information for property 'text'.
         */
        _text?: Element;
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
         * Contains extended information for property 'contentType'.
         */
        _contentType?: Element;
        /**
         * Human language of the content (BCP-47)
         */
        language?: code;
        /**
         * Contains extended information for property 'language'.
         */
        _language?: Element;
        /**
         * Data inline, base64ed
         */
        data?: base64Binary;
        /**
         * Contains extended information for property 'data'.
         */
        _data?: Element;
        /**
         * Uri where the data can be found
         */
        url?: url;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Number of bytes of content (if url provided)
         */
        size?: unsignedInt;
        /**
         * Contains extended information for property 'size'.
         */
        _size?: Element;
        /**
         * Hash of the data (sha-1, base64ed)
         */
        hash?: base64Binary;
        /**
         * Contains extended information for property 'hash'.
         */
        _hash?: Element;
        /**
         * Label to display in place of the data
         */
        title?: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
        /**
         * Date attachment was first created
         */
        creation?: dateTime;
        /**
         * Contains extended information for property 'creation'.
         */
        _creation?: Element;
    }
    /**
     * Details of a Technology mediated contact point (phone, fax, email, etc.)
     */
    interface ContactPoint extends Element {
        /**
         * phone | fax | email | pager | url | sms | other
         */
        system?: code;
        /**
         * Contains extended information for property 'system'.
         */
        _system?: Element;
        /**
         * The actual contact point details
         */
        value?: string;
        /**
         * Contains extended information for property 'value'.
         */
        _value?: Element;
        /**
         * home | work | temp | old | mobile - purpose of this contact point
         */
        use?: code;
        /**
         * Contains extended information for property 'use'.
         */
        _use?: Element;
        /**
         * Specify preferred order of use (1 = highest)
         */
        rank?: positiveInt;
        /**
         * Contains extended information for property 'rank'.
         */
        _rank?: Element;
        /**
         * Time period when the contact point was/is in use
         */
        period?: Period;
    }
    /**
     * A measured or measurable amount
     */
    interface Count extends Quantity {
    }
    /**
     * A length - a value with a unit that is a physical distance
     */
    interface Distance extends Quantity {
    }
    /**
     * A length of time
     */
    interface Duration extends Quantity {
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
         * Contains extended information for property 'use'.
         */
        _use?: Element;
        /**
         * Text representation of the full name
         */
        text?: string;
        /**
         * Contains extended information for property 'text'.
         */
        _text?: Element;
        /**
         * Family name (often called 'Surname')
         */
        family?: string;
        /**
         * Contains extended information for property 'family'.
         */
        _family?: Element;
        /**
         * Given names (not always 'first'). Includes middle names
         */
        given?: string[];
        /**
         * Contains extended information for property 'given'.
         */
        _given?: Element[];
        /**
         * Parts that come before the name
         */
        prefix?: string[];
        /**
         * Contains extended information for property 'prefix'.
         */
        _prefix?: Element[];
        /**
         * Parts that come after the name
         */
        suffix?: string[];
        /**
         * Contains extended information for property 'suffix'.
         */
        _suffix?: Element[];
        /**
         * Time period when name was/is in use
         */
        period?: Period;
    }
    /**
     * An amount of economic utility in some recognized currency
     */
    interface Money extends Element {
        /**
         * Numerical value (with implicit precision)
         */
        value?: decimal;
        /**
         * Contains extended information for property 'value'.
         */
        _value?: Element;
        /**
         * ISO 4217 Currency Code
         */
        currency?: code;
        /**
         * Contains extended information for property 'currency'.
         */
        _currency?: Element;
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
         * Contains extended information for property 'period'.
         */
        _period?: Element;
        /**
         * Multiply data by this before adding to origin
         */
        factor?: decimal;
        /**
         * Contains extended information for property 'factor'.
         */
        _factor?: Element;
        /**
         * Lower limit of detection
         */
        lowerLimit?: decimal;
        /**
         * Contains extended information for property 'lowerLimit'.
         */
        _lowerLimit?: Element;
        /**
         * Upper limit of detection
         */
        upperLimit?: decimal;
        /**
         * Contains extended information for property 'upperLimit'.
         */
        _upperLimit?: Element;
        /**
         * Number of sample points at each time point
         */
        dimensions: positiveInt;
        /**
         * Contains extended information for property 'dimensions'.
         */
        _dimensions?: Element;
        /**
         * Decimal values with spaces, or "E" | "U" | "L"
         */
        data?: string;
        /**
         * Contains extended information for property 'data'.
         */
        _data?: Element;
    }
    /**
     * A Signature - XML DigSig, JWS, Graphical image of signature, etc.
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
         * Contains extended information for property 'when'.
         */
        _when?: Element;
        /**
         * Who signed
         */
        who: Reference;
        /**
         * The party represented
         */
        onBehalfOf?: Reference;
        /**
         * The technical format of the signed resources
         */
        targetFormat?: code;
        /**
         * Contains extended information for property 'targetFormat'.
         */
        _targetFormat?: Element;
        /**
         * The technical format of the signature
         */
        sigFormat?: code;
        /**
         * Contains extended information for property 'sigFormat'.
         */
        _sigFormat?: Element;
        /**
         * The actual signature content (XML DigSig. JWS, picture, etc.)
         */
        data?: base64Binary;
        /**
         * Contains extended information for property 'data'.
         */
        _data?: Element;
    }
    /**
     * Base for elements defined inside a resource
     */
    interface BackboneElement extends Element {
        /**
         * Extensions that cannot be ignored even if unrecognized
         */
        modifierExtension?: Extension[];
    }
    /**
     * When the event is to occur
     */
    interface TimingRepeat extends Element {
        /**
         * Length/Range of lengths, or (Start and/or end) limits
         */
        boundsDuration?: Duration;
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
        count?: positiveInt;
        /**
         * Contains extended information for property 'count'.
         */
        _count?: Element;
        /**
         * Maximum number of times to repeat
         */
        countMax?: positiveInt;
        /**
         * Contains extended information for property 'countMax'.
         */
        _countMax?: Element;
        /**
         * How long when it happens
         */
        duration?: decimal;
        /**
         * Contains extended information for property 'duration'.
         */
        _duration?: Element;
        /**
         * How long when it happens (Max)
         */
        durationMax?: decimal;
        /**
         * Contains extended information for property 'durationMax'.
         */
        _durationMax?: Element;
        /**
         * s | min | h | d | wk | mo | a - unit of time (UCUM)
         */
        durationUnit?: code;
        /**
         * Contains extended information for property 'durationUnit'.
         */
        _durationUnit?: Element;
        /**
         * Event occurs frequency times per period
         */
        frequency?: positiveInt;
        /**
         * Contains extended information for property 'frequency'.
         */
        _frequency?: Element;
        /**
         * Event occurs up to frequencyMax times per period
         */
        frequencyMax?: positiveInt;
        /**
         * Contains extended information for property 'frequencyMax'.
         */
        _frequencyMax?: Element;
        /**
         * Event occurs frequency times per period
         */
        period?: decimal;
        /**
         * Contains extended information for property 'period'.
         */
        _period?: Element;
        /**
         * Upper limit of period (3-4 hours)
         */
        periodMax?: decimal;
        /**
         * Contains extended information for property 'periodMax'.
         */
        _periodMax?: Element;
        /**
         * s | min | h | d | wk | mo | a - unit of time (UCUM)
         */
        periodUnit?: code;
        /**
         * Contains extended information for property 'periodUnit'.
         */
        _periodUnit?: Element;
        /**
         * mon | tue | wed | thu | fri | sat | sun
         */
        dayOfWeek?: code[];
        /**
         * Contains extended information for property 'dayOfWeek'.
         */
        _dayOfWeek?: Element[];
        /**
         * Time of day for action
         */
        timeOfDay?: time[];
        /**
         * Contains extended information for property 'timeOfDay'.
         */
        _timeOfDay?: Element[];
        /**
         * Code for time period of occurrence
         */
        when?: code[];
        /**
         * Contains extended information for property 'when'.
         */
        _when?: Element[];
        /**
         * Minutes from event (before or after)
         */
        offset?: unsignedInt;
        /**
         * Contains extended information for property 'offset'.
         */
        _offset?: Element;
    }
    /**
     * A timing schedule that specifies an event that may occur multiple times
     */
    interface Timing extends BackboneElement {
        /**
         * When the event occurs
         */
        event?: dateTime[];
        /**
         * Contains extended information for property 'event'.
         */
        _event?: Element[];
        /**
         * When the event is to occur
         */
        repeat?: TimingRepeat;
        /**
         * BID | TID | QID | AM | PM | QD | QOD | +
         */
        code?: CodeableConcept;
    }
    /**
     * Contact information
     */
    interface ContactDetail extends Element {
        /**
         * Name of an individual to contact
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Contact details for individual or organization
         */
        telecom?: ContactPoint[];
    }
    /**
     * Contributor information
     */
    interface Contributor extends Element {
        /**
         * author | editor | reviewer | endorser
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * Who contributed the content
         */
        name: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Contact details of the contributor
         */
        contact?: ContactDetail[];
    }
    /**
     * What codes are expected
     */
    interface DataRequirementCodeFilter extends Element {
        /**
         * A code-valued attribute to filter on
         */
        path?: string;
        /**
         * Contains extended information for property 'path'.
         */
        _path?: Element;
        /**
         * A coded (token) parameter to search on
         */
        searchParam?: string;
        /**
         * Contains extended information for property 'searchParam'.
         */
        _searchParam?: Element;
        /**
         * Valueset for the filter
         */
        valueSet?: canonical;
        /**
         * Contains extended information for property 'valueSet'.
         */
        _valueSet?: Element;
        /**
         * What code is expected
         */
        code?: Coding[];
    }
    /**
     * What dates/date ranges are expected
     */
    interface DataRequirementDateFilter extends Element {
        /**
         * A date-valued attribute to filter on
         */
        path?: string;
        /**
         * Contains extended information for property 'path'.
         */
        _path?: Element;
        /**
         * A date valued parameter to search on
         */
        searchParam?: string;
        /**
         * Contains extended information for property 'searchParam'.
         */
        _searchParam?: Element;
        /**
         * The value of the filter, as a Period, DateTime, or Duration value
         */
        valueDateTime?: dateTime;
        /**
         * Contains extended information for property 'valueDateTime'.
         */
        _valueDateTime?: Element;
        /**
         * The value of the filter, as a Period, DateTime, or Duration value
         */
        valuePeriod?: Period;
        /**
         * The value of the filter, as a Period, DateTime, or Duration value
         */
        valueDuration?: Duration;
    }
    /**
     * Order of the results
     */
    interface DataRequirementSort extends Element {
        /**
         * The name of the attribute to perform the sort
         */
        path: string;
        /**
         * Contains extended information for property 'path'.
         */
        _path?: Element;
        /**
         * ascending | descending
         */
        direction: code;
        /**
         * Contains extended information for property 'direction'.
         */
        _direction?: Element;
    }
    /**
     * Describes a required data item
     */
    interface DataRequirement extends Element {
        /**
         * The type of the required data
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * The profile of the required data
         */
        profile?: canonical[];
        /**
         * Contains extended information for property 'profile'.
         */
        _profile?: Element[];
        /**
         * E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device
         */
        subjectCodeableConcept?: CodeableConcept;
        /**
         * E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device
         */
        subjectReference?: Reference;
        /**
         * Indicates specific structure elements that are referenced by the knowledge module
         */
        mustSupport?: string[];
        /**
         * Contains extended information for property 'mustSupport'.
         */
        _mustSupport?: Element[];
        /**
         * What codes are expected
         */
        codeFilter?: DataRequirementCodeFilter[];
        /**
         * What dates/date ranges are expected
         */
        dateFilter?: DataRequirementDateFilter[];
        /**
         * Number of results
         */
        limit?: positiveInt;
        /**
         * Contains extended information for property 'limit'.
         */
        _limit?: Element;
        /**
         * Order of the results
         */
        sort?: DataRequirementSort[];
    }
    /**
     * An expression that can be used to generate a value
     */
    interface Expression extends Element {
        /**
         * Natural language description of the condition
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Short name assigned to expression for reuse
         */
        name?: id;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * text/cql | text/fhirpath | application/x-fhir-query | etc.
         */
        language: code;
        /**
         * Contains extended information for property 'language'.
         */
        _language?: Element;
        /**
         * Expression in specified language
         */
        expression?: string;
        /**
         * Contains extended information for property 'expression'.
         */
        _expression?: Element;
        /**
         * Where the expression is found
         */
        reference?: uri;
        /**
         * Contains extended information for property 'reference'.
         */
        _reference?: Element;
    }
    /**
     * Definition of a parameter to a module
     */
    interface ParameterDefinition extends Element {
        /**
         * Name used to access the parameter value
         */
        name?: code;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * in | out
         */
        use: code;
        /**
         * Contains extended information for property 'use'.
         */
        _use?: Element;
        /**
         * Minimum cardinality
         */
        min?: integer;
        /**
         * Contains extended information for property 'min'.
         */
        _min?: Element;
        /**
         * Maximum cardinality (a number of *)
         */
        max?: string;
        /**
         * Contains extended information for property 'max'.
         */
        _max?: Element;
        /**
         * A brief description of the parameter
         */
        documentation?: string;
        /**
         * Contains extended information for property 'documentation'.
         */
        _documentation?: Element;
        /**
         * What type of value
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * What profile the value is expected to be
         */
        profile?: canonical;
        /**
         * Contains extended information for property 'profile'.
         */
        _profile?: Element;
    }
    /**
     * Related artifacts for a knowledge resource
     */
    interface RelatedArtifact extends Element {
        /**
         * documentation | justification | citation | predecessor | successor | derived-from | depends-on | composed-of
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * Short label
         */
        label?: string;
        /**
         * Contains extended information for property 'label'.
         */
        _label?: Element;
        /**
         * Brief description of the related artifact
         */
        display?: string;
        /**
         * Contains extended information for property 'display'.
         */
        _display?: Element;
        /**
         * Bibliographic citation for the artifact
         */
        citation?: markdown;
        /**
         * Contains extended information for property 'citation'.
         */
        _citation?: Element;
        /**
         * Where the artifact can be accessed
         */
        url?: url;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * What document is being referenced
         */
        document?: Attachment;
        /**
         * What resource is being referenced
         */
        resource?: canonical;
        /**
         * Contains extended information for property 'resource'.
         */
        _resource?: Element;
    }
    /**
     * Defines an expected trigger for a module
     */
    interface TriggerDefinition extends Element {
        /**
         * named-event | periodic | data-changed | data-added | data-modified | data-removed | data-accessed | data-access-ended
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * Name or URI that identifies the event
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Timing of the event
         */
        timingTiming?: Timing;
        /**
         * Timing of the event
         */
        timingReference?: Reference;
        /**
         * Timing of the event
         */
        timingDate?: date;
        /**
         * Contains extended information for property 'timingDate'.
         */
        _timingDate?: Element;
        /**
         * Timing of the event
         */
        timingDateTime?: dateTime;
        /**
         * Contains extended information for property 'timingDateTime'.
         */
        _timingDateTime?: Element;
        /**
         * Triggering data of the event (multiple = 'and')
         */
        data?: DataRequirement[];
        /**
         * Whether the event triggers (boolean expression)
         */
        condition?: Expression;
    }
    /**
     * Describes the context of use for a conformance or knowledge resource
     */
    interface UsageContext extends Element {
        /**
         * Type of context being specified
         */
        code: Coding;
        /**
         * Value that defines the context
         */
        valueCodeableConcept?: CodeableConcept;
        /**
         * Value that defines the context
         */
        valueQuantity?: Quantity;
        /**
         * Value that defines the context
         */
        valueRange?: Range;
        /**
         * Value that defines the context
         */
        valueReference?: Reference;
    }
    /**
     * Amount of medication administered
     */
    interface DosageDoseAndRate extends Element {
        /**
         * The kind of dose or rate specified
         */
        type?: CodeableConcept;
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
         * Amount of medication per unit of time
         */
        rateQuantity?: Quantity;
    }
    /**
     * How the medication is/was taken or should be taken
     */
    interface Dosage extends BackboneElement {
        /**
         * The order of the dosage instructions
         */
        sequence?: integer;
        /**
         * Contains extended information for property 'sequence'.
         */
        _sequence?: Element;
        /**
         * Free text dosage instructions e.g. SIG
         */
        text?: string;
        /**
         * Contains extended information for property 'text'.
         */
        _text?: Element;
        /**
         * Supplemental instruction or warnings to the patient - e.g. "with meals", "may cause drowsiness"
         */
        additionalInstruction?: CodeableConcept[];
        /**
         * Patient or consumer oriented instructions
         */
        patientInstruction?: string;
        /**
         * Contains extended information for property 'patientInstruction'.
         */
        _patientInstruction?: Element;
        /**
         * When medication should be administered
         */
        timing?: Timing;
        /**
         * Take "as needed" (for x)
         */
        asNeededBoolean?: boolean;
        /**
         * Contains extended information for property 'asNeededBoolean'.
         */
        _asNeededBoolean?: Element;
        /**
         * Take "as needed" (for x)
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
         * Amount of medication administered
         */
        doseAndRate?: DosageDoseAndRate[];
        /**
         * Upper limit on medication per unit of time
         */
        maxDosePerPeriod?: Ratio;
        /**
         * Upper limit on medication per administration
         */
        maxDosePerAdministration?: Quantity;
        /**
         * Upper limit on medication per lifetime of the patient
         */
        maxDosePerLifetime?: Quantity;
    }
    /**
     * Optional Extensions Element
     */
    interface Extension extends Element {
        /**
         * identifies the meaning of the extension
         */
        url: string;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Value of extension
         */
        valueBase64Binary?: base64Binary;
        /**
         * Contains extended information for property 'valueBase64Binary'.
         */
        _valueBase64Binary?: Element;
        /**
         * Value of extension
         */
        valueBoolean?: boolean;
        /**
         * Contains extended information for property 'valueBoolean'.
         */
        _valueBoolean?: Element;
        /**
         * Value of extension
         */
        valueCanonical?: canonical;
        /**
         * Contains extended information for property 'valueCanonical'.
         */
        _valueCanonical?: Element;
        /**
         * Value of extension
         */
        valueCode?: code;
        /**
         * Contains extended information for property 'valueCode'.
         */
        _valueCode?: Element;
        /**
         * Value of extension
         */
        valueDate?: date;
        /**
         * Contains extended information for property 'valueDate'.
         */
        _valueDate?: Element;
        /**
         * Value of extension
         */
        valueDateTime?: dateTime;
        /**
         * Contains extended information for property 'valueDateTime'.
         */
        _valueDateTime?: Element;
        /**
         * Value of extension
         */
        valueDecimal?: decimal;
        /**
         * Contains extended information for property 'valueDecimal'.
         */
        _valueDecimal?: Element;
        /**
         * Value of extension
         */
        valueId?: id;
        /**
         * Contains extended information for property 'valueId'.
         */
        _valueId?: Element;
        /**
         * Value of extension
         */
        valueInstant?: instant;
        /**
         * Contains extended information for property 'valueInstant'.
         */
        _valueInstant?: Element;
        /**
         * Value of extension
         */
        valueInteger?: integer;
        /**
         * Contains extended information for property 'valueInteger'.
         */
        _valueInteger?: Element;
        /**
         * Value of extension
         */
        valueMarkdown?: markdown;
        /**
         * Contains extended information for property 'valueMarkdown'.
         */
        _valueMarkdown?: Element;
        /**
         * Value of extension
         */
        valueOid?: oid;
        /**
         * Contains extended information for property 'valueOid'.
         */
        _valueOid?: Element;
        /**
         * Value of extension
         */
        valuePositiveInt?: positiveInt;
        /**
         * Contains extended information for property 'valuePositiveInt'.
         */
        _valuePositiveInt?: Element;
        /**
         * Value of extension
         */
        valueString?: string;
        /**
         * Contains extended information for property 'valueString'.
         */
        _valueString?: Element;
        /**
         * Value of extension
         */
        valueTime?: time;
        /**
         * Contains extended information for property 'valueTime'.
         */
        _valueTime?: Element;
        /**
         * Value of extension
         */
        valueUnsignedInt?: unsignedInt;
        /**
         * Contains extended information for property 'valueUnsignedInt'.
         */
        _valueUnsignedInt?: Element;
        /**
         * Value of extension
         */
        valueUri?: uri;
        /**
         * Contains extended information for property 'valueUri'.
         */
        _valueUri?: Element;
        /**
         * Value of extension
         */
        valueUrl?: url;
        /**
         * Contains extended information for property 'valueUrl'.
         */
        _valueUrl?: Element;
        /**
         * Value of extension
         */
        valueUuid?: uuid;
        /**
         * Contains extended information for property 'valueUuid'.
         */
        _valueUuid?: Element;
        /**
         * Value of extension
         */
        valueAddress?: Address;
        /**
         * Value of extension
         */
        valueAge?: Age;
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
        valueCodeableConcept?: CodeableConcept;
        /**
         * Value of extension
         */
        valueCoding?: Coding;
        /**
         * Value of extension
         */
        valueContactPoint?: ContactPoint;
        /**
         * Value of extension
         */
        valueCount?: Count;
        /**
         * Value of extension
         */
        valueDistance?: Distance;
        /**
         * Value of extension
         */
        valueDuration?: Duration;
        /**
         * Value of extension
         */
        valueHumanName?: HumanName;
        /**
         * Value of extension
         */
        valueIdentifier?: Identifier;
        /**
         * Value of extension
         */
        valueMoney?: Money;
        /**
         * Value of extension
         */
        valuePeriod?: Period;
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
        valueRatio?: Ratio;
        /**
         * Value of extension
         */
        valueReference?: Reference;
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
        valueTiming?: Timing;
        /**
         * Value of extension
         */
        valueContactDetail?: ContactDetail;
        /**
         * Value of extension
         */
        valueContributor?: Contributor;
        /**
         * Value of extension
         */
        valueDataRequirement?: DataRequirement;
        /**
         * Value of extension
         */
        valueExpression?: Expression;
        /**
         * Value of extension
         */
        valueParameterDefinition?: ParameterDefinition;
        /**
         * Value of extension
         */
        valueRelatedArtifact?: RelatedArtifact;
        /**
         * Value of extension
         */
        valueTriggerDefinition?: TriggerDefinition;
        /**
         * Value of extension
         */
        valueUsageContext?: UsageContext;
        /**
         * Value of extension
         */
        valueDosage?: Dosage;
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
         * Contains extended information for property 'fhir_comments'.
         */
        _fhir_comments?: Element[];
        /**
         * Unique id for inter-element referencing
         */
        id?: string;
        /**
         * Contains extended information for property 'id'.
         */
        _id?: Element;
        /**
         * Additional content defined by implementations
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
         * Contains extended information for property 'versionId'.
         */
        _versionId?: Element;
        /**
         * When the resource version last changed
         */
        lastUpdated?: instant;
        /**
         * Contains extended information for property 'lastUpdated'.
         */
        _lastUpdated?: Element;
        /**
         * Identifies where the resource comes from
         */
        source?: uri;
        /**
         * Contains extended information for property 'source'.
         */
        _source?: Element;
        /**
         * Profiles this resource claims to conform to
         */
        profile?: canonical[];
        /**
         * Contains extended information for property 'profile'.
         */
        _profile?: Element[];
        /**
         * Security Labels applied to this resource
         */
        security?: Coding[];
        /**
         * Tags applied to this resource
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
         * Contains extended information for property 'resourceType'.
         */
        _resourceType?: Element;
        /**
         * Logical id of this artifact
         */
        id?: string;
        /**
         * Contains extended information for property 'id'.
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
         * Contains extended information for property 'implicitRules'.
         */
        _implicitRules?: Element;
        /**
         * Language of the resource content
         */
        language?: code;
        /**
         * Contains extended information for property 'language'.
         */
        _language?: Element;
    }
    /**
     * Human-readable summary of the resource (essential clinical and business information)
     */
    interface Narrative extends Element {
        /**
         * generated | extensions | additional | empty
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Limited xhtml content
         */
        div: string;
        /**
         * Contains extended information for property 'div'.
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
         * Additional content defined by implementations
         */
        extension?: Extension[];
        /**
         * Extensions that cannot be ignored
         */
        modifierExtension?: Extension[];
    }
    /**
     * The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account
     */
    interface AccountCoverage extends BackboneElement {
        /**
         * The party(s), such as insurances, that may contribute to the payment of this account
         */
        coverage: Reference;
        /**
         * The priority of the coverage in the context of this account
         */
        priority?: positiveInt;
        /**
         * Contains extended information for property 'priority'.
         */
        _priority?: Element;
    }
    /**
     * The parties ultimately responsible for balancing the Account
     */
    interface AccountGuarantor extends BackboneElement {
        /**
         * Responsible entity
         */
        party: Reference;
        /**
         * Credit or other hold applied
         */
        onHold?: boolean;
        /**
         * Contains extended information for property 'onHold'.
         */
        _onHold?: Element;
        /**
         * Guarantee account during
         */
        period?: Period;
    }
    /**
     * Tracks balance, charges, for patient or cost center
     */
    interface Account extends DomainResource {
        /**
         * Account number
         */
        identifier?: Identifier[];
        /**
         * active | inactive | entered-in-error | on-hold | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * E.g. patient, expense, depreciation
         */
        type?: CodeableConcept;
        /**
         * Human-readable label
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * The entity that caused the expenses
         */
        subject?: Reference[];
        /**
         * Transaction window
         */
        servicePeriod?: Period;
        /**
         * The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account
         */
        coverage?: AccountCoverage[];
        /**
         * Entity managing the Account
         */
        owner?: Reference;
        /**
         * Explanation of purpose/use
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * The parties ultimately responsible for balancing the Account
         */
        guarantor?: AccountGuarantor[];
        /**
         * Reference to a parent Account
         */
        partOf?: Reference;
    }
    /**
     * Who should participate in the action
     */
    interface ActivityDefinitionParticipant extends BackboneElement {
        /**
         * patient | practitioner | related-person | device
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * E.g. Nurse, Surgeon, Parent, etc.
         */
        role?: CodeableConcept;
    }
    /**
     * Dynamic aspects of the definition
     */
    interface ActivityDefinitionDynamicValue extends BackboneElement {
        /**
         * The path to the element to be set dynamically
         */
        path: string;
        /**
         * Contains extended information for property 'path'.
         */
        _path?: Element;
        /**
         * An expression that provides the dynamic value for the customization
         */
        expression: Expression;
    }
    /**
     * The definition of a specific activity to be taken, independent of any particular patient or context
     */
    interface ActivityDefinition extends DomainResource {
        /**
         * Canonical identifier for this activity definition, represented as a URI (globally unique)
         */
        url?: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Additional identifier for the activity definition
         */
        identifier?: Identifier[];
        /**
         * Business version of the activity definition
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
        /**
         * Name for this activity definition (computer friendly)
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Name for this activity definition (human friendly)
         */
        title?: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
        /**
         * Subordinate title of the activity definition
         */
        subtitle?: string;
        /**
         * Contains extended information for property 'subtitle'.
         */
        _subtitle?: Element;
        /**
         * draft | active | retired | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * For testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Contains extended information for property 'experimental'.
         */
        _experimental?: Element;
        /**
         * Type of individual the activity definition is intended for
         */
        subjectCodeableConcept?: CodeableConcept;
        /**
         * Type of individual the activity definition is intended for
         */
        subjectReference?: Reference;
        /**
         * Date last changed
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Name of the publisher (organization or individual)
         */
        publisher?: string;
        /**
         * Contains extended information for property 'publisher'.
         */
        _publisher?: Element;
        /**
         * Contact details for the publisher
         */
        contact?: ContactDetail[];
        /**
         * Natural language description of the activity definition
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * The context that the content is intended to support
         */
        useContext?: UsageContext[];
        /**
         * Intended jurisdiction for activity definition (if applicable)
         */
        jurisdiction?: CodeableConcept[];
        /**
         * Why this activity definition is defined
         */
        purpose?: markdown;
        /**
         * Contains extended information for property 'purpose'.
         */
        _purpose?: Element;
        /**
         * Describes the clinical usage of the activity definition
         */
        usage?: string;
        /**
         * Contains extended information for property 'usage'.
         */
        _usage?: Element;
        /**
         * Use and/or publishing restrictions
         */
        copyright?: markdown;
        /**
         * Contains extended information for property 'copyright'.
         */
        _copyright?: Element;
        /**
         * When the activity definition was approved by publisher
         */
        approvalDate?: date;
        /**
         * Contains extended information for property 'approvalDate'.
         */
        _approvalDate?: Element;
        /**
         * When the activity definition was last reviewed
         */
        lastReviewDate?: date;
        /**
         * Contains extended information for property 'lastReviewDate'.
         */
        _lastReviewDate?: Element;
        /**
         * When the activity definition is expected to be used
         */
        effectivePeriod?: Period;
        /**
         * E.g. Education, Treatment, Assessment, etc.
         */
        topic?: CodeableConcept[];
        /**
         * Who authored the content
         */
        author?: ContactDetail[];
        /**
         * Who edited the content
         */
        editor?: ContactDetail[];
        /**
         * Who reviewed the content
         */
        reviewer?: ContactDetail[];
        /**
         * Who endorsed the content
         */
        endorser?: ContactDetail[];
        /**
         * Additional documentation, citations, etc.
         */
        relatedArtifact?: RelatedArtifact[];
        /**
         * Logic used by the activity definition
         */
        library?: canonical[];
        /**
         * Contains extended information for property 'library'.
         */
        _library?: Element[];
        /**
         * Kind of resource
         */
        kind?: code;
        /**
         * Contains extended information for property 'kind'.
         */
        _kind?: Element;
        /**
         * What profile the resource needs to conform to
         */
        profile?: canonical;
        /**
         * Contains extended information for property 'profile'.
         */
        _profile?: Element;
        /**
         * Detail type of activity
         */
        code?: CodeableConcept;
        /**
         * proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option
         */
        intent?: code;
        /**
         * Contains extended information for property 'intent'.
         */
        _intent?: Element;
        /**
         * routine | urgent | asap | stat
         */
        priority?: code;
        /**
         * Contains extended information for property 'priority'.
         */
        _priority?: Element;
        /**
         * True if the activity should not be performed
         */
        doNotPerform?: boolean;
        /**
         * Contains extended information for property 'doNotPerform'.
         */
        _doNotPerform?: Element;
        /**
         * When activity is to occur
         */
        timingTiming?: Timing;
        /**
         * When activity is to occur
         */
        timingDateTime?: dateTime;
        /**
         * Contains extended information for property 'timingDateTime'.
         */
        _timingDateTime?: Element;
        /**
         * When activity is to occur
         */
        timingAge?: Age;
        /**
         * When activity is to occur
         */
        timingPeriod?: Period;
        /**
         * When activity is to occur
         */
        timingRange?: Range;
        /**
         * When activity is to occur
         */
        timingDuration?: Duration;
        /**
         * Where it should happen
         */
        location?: Reference;
        /**
         * Who should participate in the action
         */
        participant?: ActivityDefinitionParticipant[];
        /**
         * What's administered/supplied
         */
        productReference?: Reference;
        /**
         * What's administered/supplied
         */
        productCodeableConcept?: CodeableConcept;
        /**
         * How much is administered/consumed/supplied
         */
        quantity?: Quantity;
        /**
         * Detailed dosage instructions
         */
        dosage?: Dosage[];
        /**
         * What part of body to perform on
         */
        bodySite?: CodeableConcept[];
        /**
         * What specimens are required to perform this action
         */
        specimenRequirement?: Reference[];
        /**
         * What observations are required to perform this action
         */
        observationRequirement?: Reference[];
        /**
         * What observations must be produced by this action
         */
        observationResultRequirement?: Reference[];
        /**
         * Transform to apply the template
         */
        transform?: canonical;
        /**
         * Contains extended information for property 'transform'.
         */
        _transform?: Element;
        /**
         * Dynamic aspects of the definition
         */
        dynamicValue?: ActivityDefinitionDynamicValue[];
    }
    /**
     * The suspected agent causing the adverse event
     */
    interface AdverseEventSuspectEntity extends BackboneElement {
        /**
         * Refers to the specific entity that caused the adverse event
         */
        instance: Reference;
        /**
         * Information on the possible cause of the event
         */
        causality?: AdverseEventSuspectEntityCausality[];
    }
    /**
     * Information on the possible cause of the event
     */
    interface AdverseEventSuspectEntityCausality extends BackboneElement {
        /**
         * Assessment of if the entity caused the event
         */
        assessment?: CodeableConcept;
        /**
         * AdverseEvent.suspectEntity.causalityProductRelatedness
         */
        productRelatedness?: string;
        /**
         * Contains extended information for property 'productRelatedness'.
         */
        _productRelatedness?: Element;
        /**
         * AdverseEvent.suspectEntity.causalityAuthor
         */
        author?: Reference;
        /**
         * ProbabilityScale | Bayesian | Checklist
         */
        method?: CodeableConcept;
    }
    /**
     * Medical care, research study or other healthcare event causing physical injury
     */
    interface AdverseEvent extends DomainResource {
        /**
         * Business identifier for the event
         */
        identifier?: Identifier;
        /**
         * actual | potential
         */
        actuality: code;
        /**
         * Contains extended information for property 'actuality'.
         */
        _actuality?: Element;
        /**
         * product-problem | product-quality | product-use-error | wrong-dose | incorrect-prescribing-information | wrong-technique | wrong-route-of-administration | wrong-rate | wrong-duration | wrong-time | expired-drug | medical-device-use-error | problem-different-manufacturer | unsafe-physical-environment
         */
        category?: CodeableConcept[];
        /**
         * Type of the event itself in relation to the subject
         */
        event?: CodeableConcept;
        /**
         * Subject impacted by event
         */
        subject: Reference;
        /**
         * Encounter created as part of
         */
        encounter?: Reference;
        /**
         * When the event occurred
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * When the event was detected
         */
        detected?: dateTime;
        /**
         * Contains extended information for property 'detected'.
         */
        _detected?: Element;
        /**
         * When the event was recorded
         */
        recordedDate?: dateTime;
        /**
         * Contains extended information for property 'recordedDate'.
         */
        _recordedDate?: Element;
        /**
         * Effect on the subject due to this event
         */
        resultingCondition?: Reference[];
        /**
         * Location where adverse event occurred
         */
        location?: Reference;
        /**
         * Seriousness of the event
         */
        seriousness?: CodeableConcept;
        /**
         * mild | moderate | severe
         */
        severity?: CodeableConcept;
        /**
         * resolved | recovering | ongoing | resolvedWithSequelae | fatal | unknown
         */
        outcome?: CodeableConcept;
        /**
         * Who recorded the adverse event
         */
        recorder?: Reference;
        /**
         * Who  was involved in the adverse event or the potential adverse event
         */
        contributor?: Reference[];
        /**
         * The suspected agent causing the adverse event
         */
        suspectEntity?: AdverseEventSuspectEntity[];
        /**
         * AdverseEvent.subjectMedicalHistory
         */
        subjectMedicalHistory?: Reference[];
        /**
         * AdverseEvent.referenceDocument
         */
        referenceDocument?: Reference[];
        /**
         * AdverseEvent.study
         */
        study?: Reference[];
    }
    /**
     * Adverse Reaction Events linked to exposure to substance
     */
    interface AllergyIntoleranceReaction extends BackboneElement {
        /**
         * Specific substance or pharmaceutical product considered to be responsible for event
         */
        substance?: CodeableConcept;
        /**
         * Clinical symptoms/signs associated with the Event
         */
        manifestation: CodeableConcept[];
        /**
         * Description of the event as a whole
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Date(/time) when manifestations showed
         */
        onset?: dateTime;
        /**
         * Contains extended information for property 'onset'.
         */
        _onset?: Element;
        /**
         * mild | moderate | severe (of event as a whole)
         */
        severity?: code;
        /**
         * Contains extended information for property 'severity'.
         */
        _severity?: Element;
        /**
         * How the subject was exposed to the substance
         */
        exposureRoute?: CodeableConcept;
        /**
         * Text about event not captured in other fields
         */
        note?: Annotation[];
    }
    /**
     * Allergy or Intolerance (generally: Risk of adverse reaction to a substance)
     */
    interface AllergyIntolerance extends DomainResource {
        /**
         * External ids for this item
         */
        identifier?: Identifier[];
        /**
         * active | inactive | resolved
         */
        clinicalStatus?: CodeableConcept;
        /**
         * unconfirmed | confirmed | refuted | entered-in-error
         */
        verificationStatus?: CodeableConcept;
        /**
         * allergy | intolerance - Underlying mechanism (if known)
         */
        type?: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * food | medication | environment | biologic
         */
        category?: code[];
        /**
         * Contains extended information for property 'category'.
         */
        _category?: Element[];
        /**
         * low | high | unable-to-assess
         */
        criticality?: code;
        /**
         * Contains extended information for property 'criticality'.
         */
        _criticality?: Element;
        /**
         * Code that identifies the allergy or intolerance
         */
        code?: CodeableConcept;
        /**
         * Who the sensitivity is for
         */
        patient: Reference;
        /**
         * Encounter when the allergy or intolerance was asserted
         */
        encounter?: Reference;
        /**
         * When allergy or intolerance was identified
         */
        onsetDateTime?: dateTime;
        /**
         * Contains extended information for property 'onsetDateTime'.
         */
        _onsetDateTime?: Element;
        /**
         * When allergy or intolerance was identified
         */
        onsetAge?: Age;
        /**
         * When allergy or intolerance was identified
         */
        onsetPeriod?: Period;
        /**
         * When allergy or intolerance was identified
         */
        onsetRange?: Range;
        /**
         * When allergy or intolerance was identified
         */
        onsetString?: string;
        /**
         * Contains extended information for property 'onsetString'.
         */
        _onsetString?: Element;
        /**
         * Date first version of the resource instance was recorded
         */
        recordedDate?: dateTime;
        /**
         * Contains extended information for property 'recordedDate'.
         */
        _recordedDate?: Element;
        /**
         * Who recorded the sensitivity
         */
        recorder?: Reference;
        /**
         * Source of the information about the allergy
         */
        asserter?: Reference;
        /**
         * Date(/time) of last known occurrence of a reaction
         */
        lastOccurrence?: dateTime;
        /**
         * Contains extended information for property 'lastOccurrence'.
         */
        _lastOccurrence?: Element;
        /**
         * Additional text not captured in other fields
         */
        note?: Annotation[];
        /**
         * Adverse Reaction Events linked to exposure to substance
         */
        reaction?: AllergyIntoleranceReaction[];
    }
    /**
     * Participants involved in appointment
     */
    interface AppointmentParticipant extends BackboneElement {
        /**
         * Role of participant in the appointment
         */
        type?: CodeableConcept[];
        /**
         * Person, Location/HealthcareService or Device
         */
        actor?: Reference;
        /**
         * required | optional | information-only
         */
        required?: code;
        /**
         * Contains extended information for property 'required'.
         */
        _required?: Element;
        /**
         * accepted | declined | tentative | needs-action
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Participation period of the actor
         */
        period?: Period;
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
         * proposed | pending | booked | arrived | fulfilled | cancelled | noshow | entered-in-error | checked-in | waitlist
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * The coded reason for the appointment being cancelled
         */
        cancelationReason?: CodeableConcept;
        /**
         * A broad categorization of the service that is to be performed during this appointment
         */
        serviceCategory?: CodeableConcept[];
        /**
         * The specific service that is to be performed during this appointment
         */
        serviceType?: CodeableConcept[];
        /**
         * The specialty of a practitioner that would be required to perform the service requested in this appointment
         */
        specialty?: CodeableConcept[];
        /**
         * The style of appointment or patient that has been booked in the slot (not service type)
         */
        appointmentType?: CodeableConcept;
        /**
         * Coded reason this appointment is scheduled
         */
        reasonCode?: CodeableConcept[];
        /**
         * Reason the appointment is to take place (resource)
         */
        reasonReference?: Reference[];
        /**
         * Used to make informed decisions if needing to re-prioritize
         */
        priority?: unsignedInt;
        /**
         * Contains extended information for property 'priority'.
         */
        _priority?: Element;
        /**
         * Shown on a subject line in a meeting request, or appointment list
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Additional information to support the appointment
         */
        supportingInformation?: Reference[];
        /**
         * When appointment is to take place
         */
        start?: instant;
        /**
         * Contains extended information for property 'start'.
         */
        _start?: Element;
        /**
         * When appointment is to conclude
         */
        end?: instant;
        /**
         * Contains extended information for property 'end'.
         */
        _end?: Element;
        /**
         * Can be less than start/end (e.g. estimate)
         */
        minutesDuration?: positiveInt;
        /**
         * Contains extended information for property 'minutesDuration'.
         */
        _minutesDuration?: Element;
        /**
         * The slots that this appointment is filling
         */
        slot?: Reference[];
        /**
         * The date that this appointment was initially created
         */
        created?: dateTime;
        /**
         * Contains extended information for property 'created'.
         */
        _created?: Element;
        /**
         * Additional comments
         */
        comment?: string;
        /**
         * Contains extended information for property 'comment'.
         */
        _comment?: Element;
        /**
         * Detailed information and instructions for the patient
         */
        patientInstruction?: string;
        /**
         * Contains extended information for property 'patientInstruction'.
         */
        _patientInstruction?: Element;
        /**
         * The service request this appointment is allocated to assess
         */
        basedOn?: Reference[];
        /**
         * Participants involved in appointment
         */
        participant: AppointmentParticipant[];
        /**
         * Potential date/time interval(s) requested to allocate the appointment within
         */
        requestedPeriod?: Period[];
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
         * Appointment this response relates to
         */
        appointment: Reference;
        /**
         * Time from appointment, or requested new start time
         */
        start?: instant;
        /**
         * Contains extended information for property 'start'.
         */
        _start?: Element;
        /**
         * Time from appointment, or requested new end time
         */
        end?: instant;
        /**
         * Contains extended information for property 'end'.
         */
        _end?: Element;
        /**
         * Role of participant in the appointment
         */
        participantType?: CodeableConcept[];
        /**
         * Person, Location, HealthcareService, or Device
         */
        actor?: Reference;
        /**
         * accepted | declined | tentative | needs-action
         */
        participantStatus: code;
        /**
         * Contains extended information for property 'participantStatus'.
         */
        _participantStatus?: Element;
        /**
         * Additional comments
         */
        comment?: string;
        /**
         * Contains extended information for property 'comment'.
         */
        _comment?: Element;
    }
    /**
     * Actor involved in the event
     */
    interface AuditEventAgent extends BackboneElement {
        /**
         * How agent participated
         */
        type?: CodeableConcept;
        /**
         * Agent role in the event
         */
        role?: CodeableConcept[];
        /**
         * Identifier of who
         */
        who?: Reference;
        /**
         * Alternative User identity
         */
        altId?: string;
        /**
         * Contains extended information for property 'altId'.
         */
        _altId?: Element;
        /**
         * Human friendly name for the agent
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Whether user is initiator
         */
        requestor: boolean;
        /**
         * Contains extended information for property 'requestor'.
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
         * Contains extended information for property 'policy'.
         */
        _policy?: Element[];
        /**
         * Type of media
         */
        media?: Coding;
        /**
         * Logical network location for application activity
         */
        network?: AuditEventAgentNetwork;
        /**
         * Reason given for this user
         */
        purposeOfUse?: CodeableConcept[];
    }
    /**
     * Logical network location for application activity
     */
    interface AuditEventAgentNetwork extends BackboneElement {
        /**
         * Identifier for the network access point of the user device
         */
        address?: string;
        /**
         * Contains extended information for property 'address'.
         */
        _address?: Element;
        /**
         * The type of network access point
         */
        type?: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
    }
    /**
     * Audit Event Reporter
     */
    interface AuditEventSource extends BackboneElement {
        /**
         * Logical source location within the enterprise
         */
        site?: string;
        /**
         * Contains extended information for property 'site'.
         */
        _site?: Element;
        /**
         * The identity of source detecting the event
         */
        observer: Reference;
        /**
         * The type of source where event originated
         */
        type?: Coding[];
    }
    /**
     * Data or objects used
     */
    interface AuditEventEntity extends BackboneElement {
        /**
         * Specific instance of resource
         */
        what?: Reference;
        /**
         * Type of entity involved
         */
        type?: Coding;
        /**
         * What role the entity played
         */
        role?: Coding;
        /**
         * Life-cycle stage for the entity
         */
        lifecycle?: Coding;
        /**
         * Security labels on the entity
         */
        securityLabel?: Coding[];
        /**
         * Descriptor for entity
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Descriptive text
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Query parameters
         */
        query?: base64Binary;
        /**
         * Contains extended information for property 'query'.
         */
        _query?: Element;
        /**
         * Additional Information about the entity
         */
        detail?: AuditEventEntityDetail[];
    }
    /**
     * Additional Information about the entity
     */
    interface AuditEventEntityDetail extends BackboneElement {
        /**
         * Name of the property
         */
        type: string;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * Property value
         */
        valueString?: string;
        /**
         * Contains extended information for property 'valueString'.
         */
        _valueString?: Element;
        /**
         * Property value
         */
        valueBase64Binary?: base64Binary;
        /**
         * Contains extended information for property 'valueBase64Binary'.
         */
        _valueBase64Binary?: Element;
    }
    /**
     * Event record kept for security purposes
     */
    interface AuditEvent extends DomainResource {
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
         * Contains extended information for property 'action'.
         */
        _action?: Element;
        /**
         * When the activity occurred
         */
        period?: Period;
        /**
         * Time when the event was recorded
         */
        recorded: instant;
        /**
         * Contains extended information for property 'recorded'.
         */
        _recorded?: Element;
        /**
         * Whether the event succeeded or failed
         */
        outcome?: code;
        /**
         * Contains extended information for property 'outcome'.
         */
        _outcome?: Element;
        /**
         * Description of the event outcome
         */
        outcomeDesc?: string;
        /**
         * Contains extended information for property 'outcomeDesc'.
         */
        _outcomeDesc?: Element;
        /**
         * The purposeOfUse of the event
         */
        purposeOfEvent?: CodeableConcept[];
        /**
         * Actor involved in the event
         */
        agent: AuditEventAgent[];
        /**
         * Audit Event Reporter
         */
        source: AuditEventSource;
        /**
         * Data or objects used
         */
        entity?: AuditEventEntity[];
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
         * When created
         */
        created?: date;
        /**
         * Contains extended information for property 'created'.
         */
        _created?: Element;
        /**
         * Who created
         */
        author?: Reference;
    }
    /**
     * Pure binary content defined by a format other than FHIR
     */
    interface Binary extends ResourceBase {
        /**
         * MimeType of the binary content
         */
        contentType: code;
        /**
         * Contains extended information for property 'contentType'.
         */
        _contentType?: Element;
        /**
         * Identifies another resource to use as proxy when enforcing access control
         */
        securityContext?: Reference;
        /**
         * The actual content
         */
        data?: base64Binary;
        /**
         * Contains extended information for property 'data'.
         */
        _data?: Element;
    }
    /**
     * How this product was collected
     */
    interface BiologicallyDerivedProductCollection extends BackboneElement {
        /**
         * Individual performing collection
         */
        collector?: Reference;
        /**
         * Who is product from
         */
        source?: Reference;
        /**
         * Time of product collection
         */
        collectedDateTime?: dateTime;
        /**
         * Contains extended information for property 'collectedDateTime'.
         */
        _collectedDateTime?: Element;
        /**
         * Time of product collection
         */
        collectedPeriod?: Period;
    }
    /**
     * Any processing of the product during collection
     */
    interface BiologicallyDerivedProductProcessing extends BackboneElement {
        /**
         * Description of of processing
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Procesing code
         */
        procedure?: CodeableConcept;
        /**
         * Substance added during processing
         */
        additive?: Reference;
        /**
         * Time of processing
         */
        timeDateTime?: dateTime;
        /**
         * Contains extended information for property 'timeDateTime'.
         */
        _timeDateTime?: Element;
        /**
         * Time of processing
         */
        timePeriod?: Period;
    }
    /**
     * Any manipulation of product post-collection
     */
    interface BiologicallyDerivedProductManipulation extends BackboneElement {
        /**
         * Description of manipulation
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Time of manipulation
         */
        timeDateTime?: dateTime;
        /**
         * Contains extended information for property 'timeDateTime'.
         */
        _timeDateTime?: Element;
        /**
         * Time of manipulation
         */
        timePeriod?: Period;
    }
    /**
     * Product storage
     */
    interface BiologicallyDerivedProductStorage extends BackboneElement {
        /**
         * Description of storage
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Storage temperature
         */
        temperature?: decimal;
        /**
         * Contains extended information for property 'temperature'.
         */
        _temperature?: Element;
        /**
         * farenheit | celsius | kelvin
         */
        scale?: code;
        /**
         * Contains extended information for property 'scale'.
         */
        _scale?: Element;
        /**
         * Storage timeperiod
         */
        duration?: Period;
    }
    /**
     * A material substance originating from a biological entity
     */
    interface BiologicallyDerivedProduct extends DomainResource {
        /**
         * External ids for this item
         */
        identifier?: Identifier[];
        /**
         * organ | tissue | fluid | cells | biologicalAgent
         */
        productCategory?: code;
        /**
         * Contains extended information for property 'productCategory'.
         */
        _productCategory?: Element;
        /**
         * What this biologically derived product is
         */
        productCode?: CodeableConcept;
        /**
         * available | unavailable
         */
        status?: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Procedure request
         */
        request?: Reference[];
        /**
         * The amount of this biologically derived product
         */
        quantity?: integer;
        /**
         * Contains extended information for property 'quantity'.
         */
        _quantity?: Element;
        /**
         * BiologicallyDerivedProduct parent
         */
        parent?: Reference[];
        /**
         * How this product was collected
         */
        collection?: BiologicallyDerivedProductCollection;
        /**
         * Any processing of the product during collection
         */
        processing?: BiologicallyDerivedProductProcessing[];
        /**
         * Any manipulation of product post-collection
         */
        manipulation?: BiologicallyDerivedProductManipulation;
        /**
         * Product storage
         */
        storage?: BiologicallyDerivedProductStorage[];
    }
    /**
     * Specific and identified anatomical structure
     */
    interface BodyStructure extends DomainResource {
        /**
         * Bodystructure identifier
         */
        identifier?: Identifier[];
        /**
         * Whether this record is in active use
         */
        active?: boolean;
        /**
         * Contains extended information for property 'active'.
         */
        _active?: Element;
        /**
         * Kind of Structure
         */
        morphology?: CodeableConcept;
        /**
         * Body site
         */
        location?: CodeableConcept;
        /**
         * Body site modifier
         */
        locationQualifier?: CodeableConcept[];
        /**
         * Text description
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Attached images
         */
        image?: Attachment[];
        /**
         * Who this is about
         */
        patient: Reference;
    }
    /**
     * Links related to this Bundle
     */
    interface BundleLink extends BackboneElement {
        /**
         * See http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1
         */
        relation: string;
        /**
         * Contains extended information for property 'relation'.
         */
        _relation?: Element;
        /**
         * Reference details for the link
         */
        url: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
    }
    /**
     * Entry in the bundle - will have a resource or information
     */
    interface BundleEntry extends BackboneElement {
        /**
         * Links related to this entry
         */
        link?: BundleLink[];
        /**
         * URI for resource (Absolute URL server address or URI for UUID/OID)
         */
        fullUrl?: uri;
        /**
         * Contains extended information for property 'fullUrl'.
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
         * Additional execution information (transaction/batch/history)
         */
        request?: BundleEntryRequest;
        /**
         * Results of execution (transaction/batch/history)
         */
        response?: BundleEntryResponse;
    }
    /**
     * Search related information
     */
    interface BundleEntrySearch extends BackboneElement {
        /**
         * match | include | outcome - why this is in the result set
         */
        mode?: code;
        /**
         * Contains extended information for property 'mode'.
         */
        _mode?: Element;
        /**
         * Search ranking (between 0 and 1)
         */
        score?: decimal;
        /**
         * Contains extended information for property 'score'.
         */
        _score?: Element;
    }
    /**
     * Additional execution information (transaction/batch/history)
     */
    interface BundleEntryRequest extends BackboneElement {
        /**
         * GET | HEAD | POST | PUT | DELETE | PATCH
         */
        method: code;
        /**
         * Contains extended information for property 'method'.
         */
        _method?: Element;
        /**
         * URL for HTTP equivalent of this entry
         */
        url: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * For managing cache currency
         */
        ifNoneMatch?: string;
        /**
         * Contains extended information for property 'ifNoneMatch'.
         */
        _ifNoneMatch?: Element;
        /**
         * For managing cache currency
         */
        ifModifiedSince?: instant;
        /**
         * Contains extended information for property 'ifModifiedSince'.
         */
        _ifModifiedSince?: Element;
        /**
         * For managing update contention
         */
        ifMatch?: string;
        /**
         * Contains extended information for property 'ifMatch'.
         */
        _ifMatch?: Element;
        /**
         * For conditional creates
         */
        ifNoneExist?: string;
        /**
         * Contains extended information for property 'ifNoneExist'.
         */
        _ifNoneExist?: Element;
    }
    /**
     * Results of execution (transaction/batch/history)
     */
    interface BundleEntryResponse extends BackboneElement {
        /**
         * Status response code (text optional)
         */
        status: string;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * The location (if the operation returns a location)
         */
        location?: uri;
        /**
         * Contains extended information for property 'location'.
         */
        _location?: Element;
        /**
         * The Etag for the resource (if relevant)
         */
        etag?: string;
        /**
         * Contains extended information for property 'etag'.
         */
        _etag?: Element;
        /**
         * Server's date time modified
         */
        lastModified?: instant;
        /**
         * Contains extended information for property 'lastModified'.
         */
        _lastModified?: Element;
        /**
         * OperationOutcome with hints and warnings (for batch/transaction)
         */
        outcome?: Resource;
    }
    /**
     * Contains a collection of resources
     */
    interface Bundle extends ResourceBase {
        /**
         * Persistent identifier for the bundle
         */
        identifier?: Identifier;
        /**
         * document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * When the bundle was assembled
         */
        timestamp?: instant;
        /**
         * Contains extended information for property 'timestamp'.
         */
        _timestamp?: Element;
        /**
         * If search, the total number of matches
         */
        total?: unsignedInt;
        /**
         * Contains extended information for property 'total'.
         */
        _total?: Element;
        /**
         * Links related to this Bundle
         */
        link?: BundleLink[];
        /**
         * Entry in the bundle - will have a resource or information
         */
        entry?: BundleEntry[];
        /**
         * Digital Signature
         */
        signature?: Signature;
    }
    /**
     * Software that is covered by this capability statement
     */
    interface CapabilityStatementSoftware extends BackboneElement {
        /**
         * A name the software is known by
         */
        name: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Version covered by this statement
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
        /**
         * Date this version was released
         */
        releaseDate?: dateTime;
        /**
         * Contains extended information for property 'releaseDate'.
         */
        _releaseDate?: Element;
    }
    /**
     * If this describes a specific instance
     */
    interface CapabilityStatementImplementation extends BackboneElement {
        /**
         * Describes this specific instance
         */
        description: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Base URL for the installation
         */
        url?: url;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Organization that manages the data
         */
        custodian?: Reference;
    }
    /**
     * If the endpoint is a RESTful one
     */
    interface CapabilityStatementRest extends BackboneElement {
        /**
         * client | server
         */
        mode: code;
        /**
         * Contains extended information for property 'mode'.
         */
        _mode?: Element;
        /**
         * General description of implementation
         */
        documentation?: markdown;
        /**
         * Contains extended information for property 'documentation'.
         */
        _documentation?: Element;
        /**
         * Information about security of implementation
         */
        security?: CapabilityStatementRestSecurity;
        /**
         * Resource served on the REST interface
         */
        resource?: CapabilityStatementRestResource[];
        /**
         * What operations are supported?
         */
        interaction?: CapabilityStatementRestInteraction[];
        /**
         * Search parameters for searching all resources
         */
        searchParam?: CapabilityStatementRestResourceSearchParam[];
        /**
         * Definition of a system level operation
         */
        operation?: CapabilityStatementRestResourceOperation[];
        /**
         * Compartments served/used by system
         */
        compartment?: canonical[];
        /**
         * Contains extended information for property 'compartment'.
         */
        _compartment?: Element[];
    }
    /**
     * Information about security of implementation
     */
    interface CapabilityStatementRestSecurity extends BackboneElement {
        /**
         * Adds CORS Headers (http://enable-cors.org/)
         */
        cors?: boolean;
        /**
         * Contains extended information for property 'cors'.
         */
        _cors?: Element;
        /**
         * OAuth | SMART-on-FHIR | NTLM | Basic | Kerberos | Certificates
         */
        service?: CodeableConcept[];
        /**
         * General description of how security works
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
    }
    /**
     * Resource served on the REST interface
     */
    interface CapabilityStatementRestResource extends BackboneElement {
        /**
         * A resource type that is supported
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * Base System profile for all uses of resource
         */
        profile?: canonical;
        /**
         * Contains extended information for property 'profile'.
         */
        _profile?: Element;
        /**
         * Profiles for use cases supported
         */
        supportedProfile?: canonical[];
        /**
         * Contains extended information for property 'supportedProfile'.
         */
        _supportedProfile?: Element[];
        /**
         * Additional information about the use of the resource type
         */
        documentation?: markdown;
        /**
         * Contains extended information for property 'documentation'.
         */
        _documentation?: Element;
        /**
         * What operations are supported?
         */
        interaction?: CapabilityStatementRestResourceInteraction[];
        /**
         * no-version | versioned | versioned-update
         */
        versioning?: code;
        /**
         * Contains extended information for property 'versioning'.
         */
        _versioning?: Element;
        /**
         * Whether vRead can return past versions
         */
        readHistory?: boolean;
        /**
         * Contains extended information for property 'readHistory'.
         */
        _readHistory?: Element;
        /**
         * If update can commit to a new identity
         */
        updateCreate?: boolean;
        /**
         * Contains extended information for property 'updateCreate'.
         */
        _updateCreate?: Element;
        /**
         * If allows/uses conditional create
         */
        conditionalCreate?: boolean;
        /**
         * Contains extended information for property 'conditionalCreate'.
         */
        _conditionalCreate?: Element;
        /**
         * not-supported | modified-since | not-match | full-support
         */
        conditionalRead?: code;
        /**
         * Contains extended information for property 'conditionalRead'.
         */
        _conditionalRead?: Element;
        /**
         * If allows/uses conditional update
         */
        conditionalUpdate?: boolean;
        /**
         * Contains extended information for property 'conditionalUpdate'.
         */
        _conditionalUpdate?: Element;
        /**
         * not-supported | single | multiple - how conditional delete is supported
         */
        conditionalDelete?: code;
        /**
         * Contains extended information for property 'conditionalDelete'.
         */
        _conditionalDelete?: Element;
        /**
         * literal | logical | resolves | enforced | local
         */
        referencePolicy?: code[];
        /**
         * Contains extended information for property 'referencePolicy'.
         */
        _referencePolicy?: Element[];
        /**
         * _include values supported by the server
         */
        searchInclude?: string[];
        /**
         * Contains extended information for property 'searchInclude'.
         */
        _searchInclude?: Element[];
        /**
         * _revinclude values supported by the server
         */
        searchRevInclude?: string[];
        /**
         * Contains extended information for property 'searchRevInclude'.
         */
        _searchRevInclude?: Element[];
        /**
         * Search parameters supported by implementation
         */
        searchParam?: CapabilityStatementRestResourceSearchParam[];
        /**
         * Definition of a resource operation
         */
        operation?: CapabilityStatementRestResourceOperation[];
    }
    /**
     * What operations are supported?
     */
    interface CapabilityStatementRestResourceInteraction extends BackboneElement {
        /**
         * read | vread | update | patch | delete | history-instance | history-type | create | search-type
         */
        code: code;
        /**
         * Contains extended information for property 'code'.
         */
        _code?: Element;
        /**
         * Anything special about operation behavior
         */
        documentation?: markdown;
        /**
         * Contains extended information for property 'documentation'.
         */
        _documentation?: Element;
    }
    /**
     * Search parameters supported by implementation
     */
    interface CapabilityStatementRestResourceSearchParam extends BackboneElement {
        /**
         * Name of search parameter
         */
        name: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Source of definition for parameter
         */
        definition?: canonical;
        /**
         * Contains extended information for property 'definition'.
         */
        _definition?: Element;
        /**
         * number | date | string | token | reference | composite | quantity | uri | special
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * Server-specific usage
         */
        documentation?: markdown;
        /**
         * Contains extended information for property 'documentation'.
         */
        _documentation?: Element;
    }
    /**
     * Definition of a resource operation
     */
    interface CapabilityStatementRestResourceOperation extends BackboneElement {
        /**
         * Name by which the operation/query is invoked
         */
        name: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * The defined operation/query
         */
        definition: canonical;
        /**
         * Contains extended information for property 'definition'.
         */
        _definition?: Element;
        /**
         * Specific details about operation behavior
         */
        documentation?: markdown;
        /**
         * Contains extended information for property 'documentation'.
         */
        _documentation?: Element;
    }
    /**
     * What operations are supported?
     */
    interface CapabilityStatementRestInteraction extends BackboneElement {
        /**
         * transaction | batch | search-system | history-system
         */
        code: code;
        /**
         * Contains extended information for property 'code'.
         */
        _code?: Element;
        /**
         * Anything special about operation behavior
         */
        documentation?: markdown;
        /**
         * Contains extended information for property 'documentation'.
         */
        _documentation?: Element;
    }
    /**
     * If messaging is supported
     */
    interface CapabilityStatementMessaging extends BackboneElement {
        /**
         * Where messages should be sent
         */
        endpoint?: CapabilityStatementMessagingEndpoint[];
        /**
         * Reliable Message Cache Length (min)
         */
        reliableCache?: unsignedInt;
        /**
         * Contains extended information for property 'reliableCache'.
         */
        _reliableCache?: Element;
        /**
         * Messaging interface behavior details
         */
        documentation?: markdown;
        /**
         * Contains extended information for property 'documentation'.
         */
        _documentation?: Element;
        /**
         * Messages supported by this system
         */
        supportedMessage?: CapabilityStatementMessagingSupportedMessage[];
    }
    /**
     * Where messages should be sent
     */
    interface CapabilityStatementMessagingEndpoint extends BackboneElement {
        /**
         * http | ftp | mllp +
         */
        protocol: Coding;
        /**
         * Network address or identifier of the end-point
         */
        address: url;
        /**
         * Contains extended information for property 'address'.
         */
        _address?: Element;
    }
    /**
     * Messages supported by this system
     */
    interface CapabilityStatementMessagingSupportedMessage extends BackboneElement {
        /**
         * sender | receiver
         */
        mode: code;
        /**
         * Contains extended information for property 'mode'.
         */
        _mode?: Element;
        /**
         * Message supported by this system
         */
        definition: canonical;
        /**
         * Contains extended information for property 'definition'.
         */
        _definition?: Element;
    }
    /**
     * Document definition
     */
    interface CapabilityStatementDocument extends BackboneElement {
        /**
         * producer | consumer
         */
        mode: code;
        /**
         * Contains extended information for property 'mode'.
         */
        _mode?: Element;
        /**
         * Description of document support
         */
        documentation?: markdown;
        /**
         * Contains extended information for property 'documentation'.
         */
        _documentation?: Element;
        /**
         * Constraint on the resources used in the document
         */
        profile: canonical;
        /**
         * Contains extended information for property 'profile'.
         */
        _profile?: Element;
    }
    /**
     * A statement of system capabilities
     */
    interface CapabilityStatement extends DomainResource {
        /**
         * Canonical identifier for this capability statement, represented as a URI (globally unique)
         */
        url?: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Business version of the capability statement
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
        /**
         * Name for this capability statement (computer friendly)
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Name for this capability statement (human friendly)
         */
        title?: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
        /**
         * draft | active | retired | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * For testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Contains extended information for property 'experimental'.
         */
        _experimental?: Element;
        /**
         * Date last changed
         */
        date: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Name of the publisher (organization or individual)
         */
        publisher?: string;
        /**
         * Contains extended information for property 'publisher'.
         */
        _publisher?: Element;
        /**
         * Contact details for the publisher
         */
        contact?: ContactDetail[];
        /**
         * Natural language description of the capability statement
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * The context that the content is intended to support
         */
        useContext?: UsageContext[];
        /**
         * Intended jurisdiction for capability statement (if applicable)
         */
        jurisdiction?: CodeableConcept[];
        /**
         * Why this capability statement is defined
         */
        purpose?: markdown;
        /**
         * Contains extended information for property 'purpose'.
         */
        _purpose?: Element;
        /**
         * Use and/or publishing restrictions
         */
        copyright?: markdown;
        /**
         * Contains extended information for property 'copyright'.
         */
        _copyright?: Element;
        /**
         * instance | capability | requirements
         */
        kind: code;
        /**
         * Contains extended information for property 'kind'.
         */
        _kind?: Element;
        /**
         * Canonical URL of another capability statement this implements
         */
        instantiates?: canonical[];
        /**
         * Contains extended information for property 'instantiates'.
         */
        _instantiates?: Element[];
        /**
         * Canonical URL of another capability statement this adds to
         */
        imports?: canonical[];
        /**
         * Contains extended information for property 'imports'.
         */
        _imports?: Element[];
        /**
         * Software that is covered by this capability statement
         */
        software?: CapabilityStatementSoftware;
        /**
         * If this describes a specific instance
         */
        implementation?: CapabilityStatementImplementation;
        /**
         * FHIR Version the system supports
         */
        fhirVersion: code;
        /**
         * Contains extended information for property 'fhirVersion'.
         */
        _fhirVersion?: Element;
        /**
         * formats supported (xml | json | ttl | mime type)
         */
        format: code[];
        /**
         * Contains extended information for property 'format'.
         */
        _format?: Element[];
        /**
         * Patch formats supported
         */
        patchFormat?: code[];
        /**
         * Contains extended information for property 'patchFormat'.
         */
        _patchFormat?: Element[];
        /**
         * Implementation guides supported
         */
        implementationGuide?: canonical[];
        /**
         * Contains extended information for property 'implementationGuide'.
         */
        _implementationGuide?: Element[];
        /**
         * If the endpoint is a RESTful one
         */
        rest?: CapabilityStatementRest[];
        /**
         * If messaging is supported
         */
        messaging?: CapabilityStatementMessaging[];
        /**
         * Document definition
         */
        document?: CapabilityStatementDocument[];
    }
    /**
     * Action to occur as part of plan
     */
    interface CarePlanActivity extends BackboneElement {
        /**
         * Results of the activity
         */
        outcomeCodeableConcept?: CodeableConcept[];
        /**
         * Appointment, Encounter, Procedure, etc.
         */
        outcomeReference?: Reference[];
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
    interface CarePlanActivityDetail extends BackboneElement {
        /**
         * Appointment | CommunicationRequest | DeviceRequest | MedicationRequest | NutritionOrder | Task | ServiceRequest | VisionPrescription
         */
        kind?: code;
        /**
         * Contains extended information for property 'kind'.
         */
        _kind?: Element;
        /**
         * Instantiates FHIR protocol or definition
         */
        instantiatesCanonical?: canonical[];
        /**
         * Contains extended information for property 'instantiatesCanonical'.
         */
        _instantiatesCanonical?: Element[];
        /**
         * Instantiates external protocol or definition
         */
        instantiatesUri?: uri[];
        /**
         * Contains extended information for property 'instantiatesUri'.
         */
        _instantiatesUri?: Element[];
        /**
         * Detail type of activity
         */
        code?: CodeableConcept;
        /**
         * Why activity should be done or why activity was prohibited
         */
        reasonCode?: CodeableConcept[];
        /**
         * Why activity is needed
         */
        reasonReference?: Reference[];
        /**
         * Goals this activity relates to
         */
        goal?: Reference[];
        /**
         * not-started | scheduled | in-progress | on-hold | completed | cancelled | stopped | unknown | entered-in-error
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Reason for current status
         */
        statusReason?: CodeableConcept;
        /**
         * If true, activity is prohibiting action
         */
        doNotPerform?: boolean;
        /**
         * Contains extended information for property 'doNotPerform'.
         */
        _doNotPerform?: Element;
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
         * Contains extended information for property 'scheduledString'.
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
         * Contains extended information for property 'description'.
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
         * Instantiates FHIR protocol or definition
         */
        instantiatesCanonical?: canonical[];
        /**
         * Contains extended information for property 'instantiatesCanonical'.
         */
        _instantiatesCanonical?: Element[];
        /**
         * Instantiates external protocol or definition
         */
        instantiatesUri?: uri[];
        /**
         * Contains extended information for property 'instantiatesUri'.
         */
        _instantiatesUri?: Element[];
        /**
         * Fulfills CarePlan
         */
        basedOn?: Reference[];
        /**
         * CarePlan replaced by this CarePlan
         */
        replaces?: Reference[];
        /**
         * Part of referenced CarePlan
         */
        partOf?: Reference[];
        /**
         * draft | active | on-hold | revoked | completed | entered-in-error | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * proposal | plan | order | option
         */
        intent: code;
        /**
         * Contains extended information for property 'intent'.
         */
        _intent?: Element;
        /**
         * Type of plan
         */
        category?: CodeableConcept[];
        /**
         * Human-friendly name for the care plan
         */
        title?: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
        /**
         * Summary of nature of plan
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Who the care plan is for
         */
        subject: Reference;
        /**
         * Encounter created as part of
         */
        encounter?: Reference;
        /**
         * Time period plan covers
         */
        period?: Period;
        /**
         * Date record was first recorded
         */
        created?: dateTime;
        /**
         * Contains extended information for property 'created'.
         */
        _created?: Element;
        /**
         * Who is the designated responsible party
         */
        author?: Reference;
        /**
         * Who provided the content of the care plan
         */
        contributor?: Reference[];
        /**
         * Who's involved in plan?
         */
        careTeam?: Reference[];
        /**
         * Health issues this plan addresses
         */
        addresses?: Reference[];
        /**
         * Information considered as part of plan
         */
        supportingInfo?: Reference[];
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
        note?: Annotation[];
    }
    /**
     * Members of the team
     */
    interface CareTeamParticipant extends BackboneElement {
        /**
         * Type of involvement
         */
        role?: CodeableConcept[];
        /**
         * Who is involved
         */
        member?: Reference;
        /**
         * Organization of the practitioner
         */
        onBehalfOf?: Reference;
        /**
         * Time period of participant
         */
        period?: Period;
    }
    /**
     * Planned participants in the coordination and delivery of care for a patient or group
     */
    interface CareTeam extends DomainResource {
        /**
         * External Ids for this team
         */
        identifier?: Identifier[];
        /**
         * proposed | active | suspended | inactive | entered-in-error
         */
        status?: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Type of team
         */
        category?: CodeableConcept[];
        /**
         * Name of the team, such as crisis assessment team
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Who care team is for
         */
        subject?: Reference;
        /**
         * Encounter created as part of
         */
        encounter?: Reference;
        /**
         * Time period team covers
         */
        period?: Period;
        /**
         * Members of the team
         */
        participant?: CareTeamParticipant[];
        /**
         * Why the care team exists
         */
        reasonCode?: CodeableConcept[];
        /**
         * Why the care team exists
         */
        reasonReference?: Reference[];
        /**
         * Organization responsible for the care team
         */
        managingOrganization?: Reference[];
        /**
         * A contact detail for the care team (that applies to all members)
         */
        telecom?: ContactPoint[];
        /**
         * Comments made about the CareTeam
         */
        note?: Annotation[];
    }
    /**
     * An item that this catalog entry is related to
     */
    interface CatalogEntryRelatedEntry extends BackboneElement {
        /**
         * triggers | is-replaced-by
         */
        relationtype: code;
        /**
         * Contains extended information for property 'relationtype'.
         */
        _relationtype?: Element;
        /**
         * The reference to the related item
         */
        item: Reference;
    }
    /**
     * An entry in a catalog
     */
    interface CatalogEntry extends DomainResource {
        /**
         * Unique identifier of the catalog item
         */
        identifier?: Identifier[];
        /**
         * The type of item - medication, device, service, protocol or other
         */
        type?: CodeableConcept;
        /**
         * Whether the entry represents an orderable item
         */
        orderable: boolean;
        /**
         * Contains extended information for property 'orderable'.
         */
        _orderable?: Element;
        /**
         * The item that is being defined
         */
        referencedItem: Reference;
        /**
         * Any additional identifier(s) for the catalog item, in the same granularity or concept
         */
        additionalIdentifier?: Identifier[];
        /**
         * Classification (category or class) of the item entry
         */
        classification?: CodeableConcept[];
        /**
         * draft | active | retired | unknown
         */
        status?: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * The time period in which this catalog entry is expected to be active
         */
        validityPeriod?: Period;
        /**
         * The date until which this catalog entry is expected to be active
         */
        validTo?: dateTime;
        /**
         * Contains extended information for property 'validTo'.
         */
        _validTo?: Element;
        /**
         * When was this catalog last updated
         */
        lastUpdated?: dateTime;
        /**
         * Contains extended information for property 'lastUpdated'.
         */
        _lastUpdated?: Element;
        /**
         * Additional characteristics of the catalog entry
         */
        additionalCharacteristic?: CodeableConcept[];
        /**
         * Additional classification of the catalog entry
         */
        additionalClassification?: CodeableConcept[];
        /**
         * An item that this catalog entry is related to
         */
        relatedEntry?: CatalogEntryRelatedEntry[];
    }
    /**
     * Who performed charged service
     */
    interface ChargeItemPerformer extends BackboneElement {
        /**
         * What type of performance was done
         */
        function?: CodeableConcept;
        /**
         * Individual who was performing
         */
        actor: Reference;
    }
    /**
     * Item containing charge code(s) associated with the provision of healthcare provider products
     */
    interface ChargeItem extends DomainResource {
        /**
         * Business Identifier for item
         */
        identifier?: Identifier[];
        /**
         * Defining information about the code of this charge item
         */
        definitionUri?: uri[];
        /**
         * Contains extended information for property 'definitionUri'.
         */
        _definitionUri?: Element[];
        /**
         * Resource defining the code of this ChargeItem
         */
        definitionCanonical?: canonical[];
        /**
         * Contains extended information for property 'definitionCanonical'.
         */
        _definitionCanonical?: Element[];
        /**
         * planned | billable | not-billable | aborted | billed | entered-in-error | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Part of referenced ChargeItem
         */
        partOf?: Reference[];
        /**
         * A code that identifies the charge, like a billing code
         */
        code: CodeableConcept;
        /**
         * Individual service was done for/to
         */
        subject: Reference;
        /**
         * Encounter / Episode associated with event
         */
        context?: Reference;
        /**
         * When the charged service was applied
         */
        occurrenceDateTime?: dateTime;
        /**
         * Contains extended information for property 'occurrenceDateTime'.
         */
        _occurrenceDateTime?: Element;
        /**
         * When the charged service was applied
         */
        occurrencePeriod?: Period;
        /**
         * When the charged service was applied
         */
        occurrenceTiming?: Timing;
        /**
         * Who performed charged service
         */
        performer?: ChargeItemPerformer[];
        /**
         * Organization providing the charged service
         */
        performingOrganization?: Reference;
        /**
         * Organization requesting the charged service
         */
        requestingOrganization?: Reference;
        /**
         * Organization that has ownership of the (potential, future) revenue
         */
        costCenter?: Reference;
        /**
         * Quantity of which the charge item has been serviced
         */
        quantity?: Quantity;
        /**
         * Anatomical location, if relevant
         */
        bodysite?: CodeableConcept[];
        /**
         * Factor overriding the associated rules
         */
        factorOverride?: decimal;
        /**
         * Contains extended information for property 'factorOverride'.
         */
        _factorOverride?: Element;
        /**
         * Price overriding the associated rules
         */
        priceOverride?: Money;
        /**
         * Reason for overriding the list price/factor
         */
        overrideReason?: string;
        /**
         * Contains extended information for property 'overrideReason'.
         */
        _overrideReason?: Element;
        /**
         * Individual who was entering
         */
        enterer?: Reference;
        /**
         * Date the charge item was entered
         */
        enteredDate?: dateTime;
        /**
         * Contains extended information for property 'enteredDate'.
         */
        _enteredDate?: Element;
        /**
         * Why was the charged  service rendered?
         */
        reason?: CodeableConcept[];
        /**
         * Which rendered service is being charged?
         */
        service?: Reference[];
        /**
         * Product charged
         */
        productReference?: Reference;
        /**
         * Product charged
         */
        productCodeableConcept?: CodeableConcept;
        /**
         * Account to place this charge
         */
        account?: Reference[];
        /**
         * Comments made about the ChargeItem
         */
        note?: Annotation[];
        /**
         * Further information supporting this charge
         */
        supportingInformation?: Reference[];
    }
    /**
     * Whether or not the billing code is applicable
     */
    interface ChargeItemDefinitionApplicability extends BackboneElement {
        /**
         * Natural language description of the condition
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Language of the expression
         */
        language?: string;
        /**
         * Contains extended information for property 'language'.
         */
        _language?: Element;
        /**
         * Boolean-valued expression
         */
        expression?: string;
        /**
         * Contains extended information for property 'expression'.
         */
        _expression?: Element;
    }
    /**
     * Group of properties which are applicable under the same conditions
     */
    interface ChargeItemDefinitionPropertyGroup extends BackboneElement {
        /**
         * Conditions under which the priceComponent is applicable
         */
        applicability?: ChargeItemDefinitionApplicability[];
        /**
         * Components of total line item price
         */
        priceComponent?: ChargeItemDefinitionPropertyGroupPriceComponent[];
    }
    /**
     * Components of total line item price
     */
    interface ChargeItemDefinitionPropertyGroupPriceComponent extends BackboneElement {
        /**
         * base | surcharge | deduction | discount | tax | informational
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * Code identifying the specific component
         */
        code?: CodeableConcept;
        /**
         * Factor used for calculating this component
         */
        factor?: decimal;
        /**
         * Contains extended information for property 'factor'.
         */
        _factor?: Element;
        /**
         * Monetary amount associated with this component
         */
        amount?: Money;
    }
    /**
     * Definition of properties and rules about how the price and the applicability of a ChargeItem can be determined
     */
    interface ChargeItemDefinition extends DomainResource {
        /**
         * Canonical identifier for this charge item definition, represented as a URI (globally unique)
         */
        url: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Additional identifier for the charge item definition
         */
        identifier?: Identifier[];
        /**
         * Business version of the charge item definition
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
        /**
         * Name for this charge item definition (human friendly)
         */
        title?: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
        /**
         * Underlying externally-defined charge item definition
         */
        derivedFromUri?: uri[];
        /**
         * Contains extended information for property 'derivedFromUri'.
         */
        _derivedFromUri?: Element[];
        /**
         * A larger definition of which this particular definition is a component or step
         */
        partOf?: canonical[];
        /**
         * Contains extended information for property 'partOf'.
         */
        _partOf?: Element[];
        /**
         * Completed or terminated request(s) whose function is taken by this new request
         */
        replaces?: canonical[];
        /**
         * Contains extended information for property 'replaces'.
         */
        _replaces?: Element[];
        /**
         * draft | active | retired | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * For testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Contains extended information for property 'experimental'.
         */
        _experimental?: Element;
        /**
         * Date last changed
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Name of the publisher (organization or individual)
         */
        publisher?: string;
        /**
         * Contains extended information for property 'publisher'.
         */
        _publisher?: Element;
        /**
         * Contact details for the publisher
         */
        contact?: ContactDetail[];
        /**
         * Natural language description of the charge item definition
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * The context that the content is intended to support
         */
        useContext?: UsageContext[];
        /**
         * Intended jurisdiction for charge item definition (if applicable)
         */
        jurisdiction?: CodeableConcept[];
        /**
         * Use and/or publishing restrictions
         */
        copyright?: markdown;
        /**
         * Contains extended information for property 'copyright'.
         */
        _copyright?: Element;
        /**
         * When the charge item definition was approved by publisher
         */
        approvalDate?: date;
        /**
         * Contains extended information for property 'approvalDate'.
         */
        _approvalDate?: Element;
        /**
         * When the charge item definition was last reviewed
         */
        lastReviewDate?: date;
        /**
         * Contains extended information for property 'lastReviewDate'.
         */
        _lastReviewDate?: Element;
        /**
         * When the charge item definition is expected to be used
         */
        effectivePeriod?: Period;
        /**
         * Billing codes or product types this definition applies to
         */
        code?: CodeableConcept;
        /**
         * Instances this definition applies to
         */
        instance?: Reference[];
        /**
         * Whether or not the billing code is applicable
         */
        applicability?: ChargeItemDefinitionApplicability[];
        /**
         * Group of properties which are applicable under the same conditions
         */
        propertyGroup?: ChargeItemDefinitionPropertyGroup[];
    }
    /**
     * Prior or corollary claims
     */
    interface ClaimRelated extends BackboneElement {
        /**
         * Reference to the related claim
         */
        claim?: Reference;
        /**
         * How the reference claim is related
         */
        relationship?: CodeableConcept;
        /**
         * File or case reference
         */
        reference?: Identifier;
    }
    /**
     * Recipient of benefits payable
     */
    interface ClaimPayee extends BackboneElement {
        /**
         * Category of recipient
         */
        type: CodeableConcept;
        /**
         * Recipient reference
         */
        party?: Reference;
    }
    /**
     * Members of the care team
     */
    interface ClaimCareTeam extends BackboneElement {
        /**
         * Order of care team
         */
        sequence: positiveInt;
        /**
         * Contains extended information for property 'sequence'.
         */
        _sequence?: Element;
        /**
         * Practitioner or organization
         */
        provider: Reference;
        /**
         * Indicator of the lead practitioner
         */
        responsible?: boolean;
        /**
         * Contains extended information for property 'responsible'.
         */
        _responsible?: Element;
        /**
         * Function within the team
         */
        role?: CodeableConcept;
        /**
         * Practitioner credential or specialization
         */
        qualification?: CodeableConcept;
    }
    /**
     * Supporting information
     */
    interface ClaimSupportingInfo extends BackboneElement {
        /**
         * Information instance identifier
         */
        sequence: positiveInt;
        /**
         * Contains extended information for property 'sequence'.
         */
        _sequence?: Element;
        /**
         * Classification of the supplied information
         */
        category: CodeableConcept;
        /**
         * Type of information
         */
        code?: CodeableConcept;
        /**
         * When it occurred
         */
        timingDate?: date;
        /**
         * Contains extended information for property 'timingDate'.
         */
        _timingDate?: Element;
        /**
         * When it occurred
         */
        timingPeriod?: Period;
        /**
         * Data to be provided
         */
        valueBoolean?: boolean;
        /**
         * Contains extended information for property 'valueBoolean'.
         */
        _valueBoolean?: Element;
        /**
         * Data to be provided
         */
        valueString?: string;
        /**
         * Contains extended information for property 'valueString'.
         */
        _valueString?: Element;
        /**
         * Data to be provided
         */
        valueQuantity?: Quantity;
        /**
         * Data to be provided
         */
        valueAttachment?: Attachment;
        /**
         * Data to be provided
         */
        valueReference?: Reference;
        /**
         * Explanation for the information
         */
        reason?: CodeableConcept;
    }
    /**
     * Pertinent diagnosis information
     */
    interface ClaimDiagnosis extends BackboneElement {
        /**
         * Diagnosis instance identifier
         */
        sequence: positiveInt;
        /**
         * Contains extended information for property 'sequence'.
         */
        _sequence?: Element;
        /**
         * Nature of illness or problem
         */
        diagnosisCodeableConcept?: CodeableConcept;
        /**
         * Nature of illness or problem
         */
        diagnosisReference?: Reference;
        /**
         * Timing or nature of the diagnosis
         */
        type?: CodeableConcept[];
        /**
         * Present on admission
         */
        onAdmission?: CodeableConcept;
        /**
         * Package billing code
         */
        packageCode?: CodeableConcept;
    }
    /**
     * Clinical procedures performed
     */
    interface ClaimProcedure extends BackboneElement {
        /**
         * Procedure instance identifier
         */
        sequence: positiveInt;
        /**
         * Contains extended information for property 'sequence'.
         */
        _sequence?: Element;
        /**
         * Category of Procedure
         */
        type?: CodeableConcept[];
        /**
         * When the procedure was performed
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Specific clinical procedure
         */
        procedureCodeableConcept?: CodeableConcept;
        /**
         * Specific clinical procedure
         */
        procedureReference?: Reference;
        /**
         * Unique device identifier
         */
        udi?: Reference[];
    }
    /**
     * Patient insurance information
     */
    interface ClaimInsurance extends BackboneElement {
        /**
         * Insurance instance identifier
         */
        sequence: positiveInt;
        /**
         * Contains extended information for property 'sequence'.
         */
        _sequence?: Element;
        /**
         * Coverage to be used for adjudication
         */
        focal: boolean;
        /**
         * Contains extended information for property 'focal'.
         */
        _focal?: Element;
        /**
         * Pre-assigned Claim number
         */
        identifier?: Identifier;
        /**
         * Insurance information
         */
        coverage: Reference;
        /**
         * Additional provider contract number
         */
        businessArrangement?: string;
        /**
         * Contains extended information for property 'businessArrangement'.
         */
        _businessArrangement?: Element;
        /**
         * Prior authorization reference number
         */
        preAuthRef?: string[];
        /**
         * Contains extended information for property 'preAuthRef'.
         */
        _preAuthRef?: Element[];
        /**
         * Adjudication results
         */
        claimResponse?: Reference;
    }
    /**
     * Details of the event
     */
    interface ClaimAccident extends BackboneElement {
        /**
         * When the incident occurred
         */
        date: date;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * The nature of the accident
         */
        type?: CodeableConcept;
        /**
         * Where the event occurred
         */
        locationAddress?: Address;
        /**
         * Where the event occurred
         */
        locationReference?: Reference;
    }
    /**
     * Product or service provided
     */
    interface ClaimItem extends BackboneElement {
        /**
         * Item instance identifier
         */
        sequence: positiveInt;
        /**
         * Contains extended information for property 'sequence'.
         */
        _sequence?: Element;
        /**
         * Applicable careTeam members
         */
        careTeamSequence?: positiveInt[];
        /**
         * Contains extended information for property 'careTeamSequence'.
         */
        _careTeamSequence?: Element[];
        /**
         * Applicable diagnoses
         */
        diagnosisSequence?: positiveInt[];
        /**
         * Contains extended information for property 'diagnosisSequence'.
         */
        _diagnosisSequence?: Element[];
        /**
         * Applicable procedures
         */
        procedureSequence?: positiveInt[];
        /**
         * Contains extended information for property 'procedureSequence'.
         */
        _procedureSequence?: Element[];
        /**
         * Applicable exception and supporting information
         */
        informationSequence?: positiveInt[];
        /**
         * Contains extended information for property 'informationSequence'.
         */
        _informationSequence?: Element[];
        /**
         * Revenue or cost center code
         */
        revenue?: CodeableConcept;
        /**
         * Benefit classification
         */
        category?: CodeableConcept;
        /**
         * Billing, service, product, or drug code
         */
        productOrService: CodeableConcept;
        /**
         * Product or service billing modifiers
         */
        modifier?: CodeableConcept[];
        /**
         * Program the product or service is provided under
         */
        programCode?: CodeableConcept[];
        /**
         * Date or dates of service or product delivery
         */
        servicedDate?: date;
        /**
         * Contains extended information for property 'servicedDate'.
         */
        _servicedDate?: Element;
        /**
         * Date or dates of service or product delivery
         */
        servicedPeriod?: Period;
        /**
         * Place of service or where product was supplied
         */
        locationCodeableConcept?: CodeableConcept;
        /**
         * Place of service or where product was supplied
         */
        locationAddress?: Address;
        /**
         * Place of service or where product was supplied
         */
        locationReference?: Reference;
        /**
         * Count of products or services
         */
        quantity?: Quantity;
        /**
         * Fee, charge or cost per item
         */
        unitPrice?: Money;
        /**
         * Price scaling factor
         */
        factor?: decimal;
        /**
         * Contains extended information for property 'factor'.
         */
        _factor?: Element;
        /**
         * Total item cost
         */
        net?: Money;
        /**
         * Unique device identifier
         */
        udi?: Reference[];
        /**
         * Anatomical location
         */
        bodySite?: CodeableConcept;
        /**
         * Anatomical sub-location
         */
        subSite?: CodeableConcept[];
        /**
         * Encounters related to this billed item
         */
        encounter?: Reference[];
        /**
         * Product or service provided
         */
        detail?: ClaimItemDetail[];
    }
    /**
     * Product or service provided
     */
    interface ClaimItemDetail extends BackboneElement {
        /**
         * Item instance identifier
         */
        sequence: positiveInt;
        /**
         * Contains extended information for property 'sequence'.
         */
        _sequence?: Element;
        /**
         * Revenue or cost center code
         */
        revenue?: CodeableConcept;
        /**
         * Benefit classification
         */
        category?: CodeableConcept;
        /**
         * Billing, service, product, or drug code
         */
        productOrService: CodeableConcept;
        /**
         * Service/Product billing modifiers
         */
        modifier?: CodeableConcept[];
        /**
         * Program the product or service is provided under
         */
        programCode?: CodeableConcept[];
        /**
         * Count of products or services
         */
        quantity?: Quantity;
        /**
         * Fee, charge or cost per item
         */
        unitPrice?: Money;
        /**
         * Price scaling factor
         */
        factor?: decimal;
        /**
         * Contains extended information for property 'factor'.
         */
        _factor?: Element;
        /**
         * Total item cost
         */
        net?: Money;
        /**
         * Unique device identifier
         */
        udi?: Reference[];
        /**
         * Product or service provided
         */
        subDetail?: ClaimItemDetailSubDetail[];
    }
    /**
     * Product or service provided
     */
    interface ClaimItemDetailSubDetail extends BackboneElement {
        /**
         * Item instance identifier
         */
        sequence: positiveInt;
        /**
         * Contains extended information for property 'sequence'.
         */
        _sequence?: Element;
        /**
         * Revenue or cost center code
         */
        revenue?: CodeableConcept;
        /**
         * Benefit classification
         */
        category?: CodeableConcept;
        /**
         * Billing, service, product, or drug code
         */
        productOrService: CodeableConcept;
        /**
         * Service/Product billing modifiers
         */
        modifier?: CodeableConcept[];
        /**
         * Program the product or service is provided under
         */
        programCode?: CodeableConcept[];
        /**
         * Count of products or services
         */
        quantity?: Quantity;
        /**
         * Fee, charge or cost per item
         */
        unitPrice?: Money;
        /**
         * Price scaling factor
         */
        factor?: decimal;
        /**
         * Contains extended information for property 'factor'.
         */
        _factor?: Element;
        /**
         * Total item cost
         */
        net?: Money;
        /**
         * Unique device identifier
         */
        udi?: Reference[];
    }
    /**
     * Claim, Pre-determination or Pre-authorization
     */
    interface Claim extends DomainResource {
        /**
         * Business Identifier for claim
         */
        identifier?: Identifier[];
        /**
         * active | cancelled | draft | entered-in-error
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Category or discipline
         */
        type: CodeableConcept;
        /**
         * More granular claim type
         */
        subType?: CodeableConcept;
        /**
         * claim | preauthorization | predetermination
         */
        use: code;
        /**
         * Contains extended information for property 'use'.
         */
        _use?: Element;
        /**
         * The recipient of the products and services
         */
        patient: Reference;
        /**
         * Relevant time frame for the claim
         */
        billablePeriod?: Period;
        /**
         * Resource creation date
         */
        created: dateTime;
        /**
         * Contains extended information for property 'created'.
         */
        _created?: Element;
        /**
         * Author of the claim
         */
        enterer?: Reference;
        /**
         * Target
         */
        insurer?: Reference;
        /**
         * Party responsible for the claim
         */
        provider: Reference;
        /**
         * Desired processing ugency
         */
        priority: CodeableConcept;
        /**
         * For whom to reserve funds
         */
        fundsReserve?: CodeableConcept;
        /**
         * Prior or corollary claims
         */
        related?: ClaimRelated[];
        /**
         * Prescription authorizing services and products
         */
        prescription?: Reference;
        /**
         * Original prescription if superseded by fulfiller
         */
        originalPrescription?: Reference;
        /**
         * Recipient of benefits payable
         */
        payee?: ClaimPayee;
        /**
         * Treatment referral
         */
        referral?: Reference;
        /**
         * Servicing facility
         */
        facility?: Reference;
        /**
         * Members of the care team
         */
        careTeam?: ClaimCareTeam[];
        /**
         * Supporting information
         */
        supportingInfo?: ClaimSupportingInfo[];
        /**
         * Pertinent diagnosis information
         */
        diagnosis?: ClaimDiagnosis[];
        /**
         * Clinical procedures performed
         */
        procedure?: ClaimProcedure[];
        /**
         * Patient insurance information
         */
        insurance: ClaimInsurance[];
        /**
         * Details of the event
         */
        accident?: ClaimAccident;
        /**
         * Product or service provided
         */
        item?: ClaimItem[];
        /**
         * Total claim cost
         */
        total?: Money;
    }
    /**
     * Adjudication for claim line items
     */
    interface ClaimResponseItem extends BackboneElement {
        /**
         * Claim item instance identifier
         */
        itemSequence: positiveInt;
        /**
         * Contains extended information for property 'itemSequence'.
         */
        _itemSequence?: Element;
        /**
         * Applicable note numbers
         */
        noteNumber?: positiveInt[];
        /**
         * Contains extended information for property 'noteNumber'.
         */
        _noteNumber?: Element[];
        /**
         * Adjudication details
         */
        adjudication: ClaimResponseItemAdjudication[];
        /**
         * Adjudication for claim details
         */
        detail?: ClaimResponseItemDetail[];
    }
    /**
     * Adjudication details
     */
    interface ClaimResponseItemAdjudication extends BackboneElement {
        /**
         * Type of adjudication information
         */
        category: CodeableConcept;
        /**
         * Explanation of adjudication outcome
         */
        reason?: CodeableConcept;
        /**
         * Monetary amount
         */
        amount?: Money;
        /**
         * Non-monetary value
         */
        value?: decimal;
        /**
         * Contains extended information for property 'value'.
         */
        _value?: Element;
    }
    /**
     * Adjudication for claim details
     */
    interface ClaimResponseItemDetail extends BackboneElement {
        /**
         * Claim detail instance identifier
         */
        detailSequence: positiveInt;
        /**
         * Contains extended information for property 'detailSequence'.
         */
        _detailSequence?: Element;
        /**
         * Applicable note numbers
         */
        noteNumber?: positiveInt[];
        /**
         * Contains extended information for property 'noteNumber'.
         */
        _noteNumber?: Element[];
        /**
         * Detail level adjudication details
         */
        adjudication: ClaimResponseItemAdjudication[];
        /**
         * Adjudication for claim sub-details
         */
        subDetail?: ClaimResponseItemDetailSubDetail[];
    }
    /**
     * Adjudication for claim sub-details
     */
    interface ClaimResponseItemDetailSubDetail extends BackboneElement {
        /**
         * Claim sub-detail instance identifier
         */
        subDetailSequence: positiveInt;
        /**
         * Contains extended information for property 'subDetailSequence'.
         */
        _subDetailSequence?: Element;
        /**
         * Applicable note numbers
         */
        noteNumber?: positiveInt[];
        /**
         * Contains extended information for property 'noteNumber'.
         */
        _noteNumber?: Element[];
        /**
         * Subdetail level adjudication details
         */
        adjudication?: ClaimResponseItemAdjudication[];
    }
    /**
     * Insurer added line items
     */
    interface ClaimResponseAddItem extends BackboneElement {
        /**
         * Item sequence number
         */
        itemSequence?: positiveInt[];
        /**
         * Contains extended information for property 'itemSequence'.
         */
        _itemSequence?: Element[];
        /**
         * Detail sequence number
         */
        detailSequence?: positiveInt[];
        /**
         * Contains extended information for property 'detailSequence'.
         */
        _detailSequence?: Element[];
        /**
         * Subdetail sequence number
         */
        subdetailSequence?: positiveInt[];
        /**
         * Contains extended information for property 'subdetailSequence'.
         */
        _subdetailSequence?: Element[];
        /**
         * Authorized providers
         */
        provider?: Reference[];
        /**
         * Billing, service, product, or drug code
         */
        productOrService: CodeableConcept;
        /**
         * Service/Product billing modifiers
         */
        modifier?: CodeableConcept[];
        /**
         * Program the product or service is provided under
         */
        programCode?: CodeableConcept[];
        /**
         * Date or dates of service or product delivery
         */
        servicedDate?: date;
        /**
         * Contains extended information for property 'servicedDate'.
         */
        _servicedDate?: Element;
        /**
         * Date or dates of service or product delivery
         */
        servicedPeriod?: Period;
        /**
         * Place of service or where product was supplied
         */
        locationCodeableConcept?: CodeableConcept;
        /**
         * Place of service or where product was supplied
         */
        locationAddress?: Address;
        /**
         * Place of service or where product was supplied
         */
        locationReference?: Reference;
        /**
         * Count of products or services
         */
        quantity?: Quantity;
        /**
         * Fee, charge or cost per item
         */
        unitPrice?: Money;
        /**
         * Price scaling factor
         */
        factor?: decimal;
        /**
         * Contains extended information for property 'factor'.
         */
        _factor?: Element;
        /**
         * Total item cost
         */
        net?: Money;
        /**
         * Anatomical location
         */
        bodySite?: CodeableConcept;
        /**
         * Anatomical sub-location
         */
        subSite?: CodeableConcept[];
        /**
         * Applicable note numbers
         */
        noteNumber?: positiveInt[];
        /**
         * Contains extended information for property 'noteNumber'.
         */
        _noteNumber?: Element[];
        /**
         * Added items adjudication
         */
        adjudication: ClaimResponseItemAdjudication[];
        /**
         * Insurer added line details
         */
        detail?: ClaimResponseAddItemDetail[];
    }
    /**
     * Insurer added line details
     */
    interface ClaimResponseAddItemDetail extends BackboneElement {
        /**
         * Billing, service, product, or drug code
         */
        productOrService: CodeableConcept;
        /**
         * Service/Product billing modifiers
         */
        modifier?: CodeableConcept[];
        /**
         * Count of products or services
         */
        quantity?: Quantity;
        /**
         * Fee, charge or cost per item
         */
        unitPrice?: Money;
        /**
         * Price scaling factor
         */
        factor?: decimal;
        /**
         * Contains extended information for property 'factor'.
         */
        _factor?: Element;
        /**
         * Total item cost
         */
        net?: Money;
        /**
         * Applicable note numbers
         */
        noteNumber?: positiveInt[];
        /**
         * Contains extended information for property 'noteNumber'.
         */
        _noteNumber?: Element[];
        /**
         * Added items detail adjudication
         */
        adjudication: ClaimResponseItemAdjudication[];
        /**
         * Insurer added line items
         */
        subDetail?: ClaimResponseAddItemDetailSubDetail[];
    }
    /**
     * Insurer added line items
     */
    interface ClaimResponseAddItemDetailSubDetail extends BackboneElement {
        /**
         * Billing, service, product, or drug code
         */
        productOrService: CodeableConcept;
        /**
         * Service/Product billing modifiers
         */
        modifier?: CodeableConcept[];
        /**
         * Count of products or services
         */
        quantity?: Quantity;
        /**
         * Fee, charge or cost per item
         */
        unitPrice?: Money;
        /**
         * Price scaling factor
         */
        factor?: decimal;
        /**
         * Contains extended information for property 'factor'.
         */
        _factor?: Element;
        /**
         * Total item cost
         */
        net?: Money;
        /**
         * Applicable note numbers
         */
        noteNumber?: positiveInt[];
        /**
         * Contains extended information for property 'noteNumber'.
         */
        _noteNumber?: Element[];
        /**
         * Added items detail adjudication
         */
        adjudication: ClaimResponseItemAdjudication[];
    }
    /**
     * Adjudication totals
     */
    interface ClaimResponseTotal extends BackboneElement {
        /**
         * Type of adjudication information
         */
        category: CodeableConcept;
        /**
         * Financial total for the category
         */
        amount: Money;
    }
    /**
     * Payment Details
     */
    interface ClaimResponsePayment extends BackboneElement {
        /**
         * Partial or complete payment
         */
        type: CodeableConcept;
        /**
         * Payment adjustment for non-claim issues
         */
        adjustment?: Money;
        /**
         * Explanation for the adjustment
         */
        adjustmentReason?: CodeableConcept;
        /**
         * Expected date of payment
         */
        date?: date;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Payable amount after adjustment
         */
        amount: Money;
        /**
         * Business identifier for the payment
         */
        identifier?: Identifier;
    }
    /**
     * Note concerning adjudication
     */
    interface ClaimResponseProcessNote extends BackboneElement {
        /**
         * Note instance identifier
         */
        number?: positiveInt;
        /**
         * Contains extended information for property 'number'.
         */
        _number?: Element;
        /**
         * display | print | printoper
         */
        type?: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * Note explanatory text
         */
        text: string;
        /**
         * Contains extended information for property 'text'.
         */
        _text?: Element;
        /**
         * Language of the text
         */
        language?: CodeableConcept;
    }
    /**
     * Patient insurance information
     */
    interface ClaimResponseInsurance extends BackboneElement {
        /**
         * Insurance instance identifier
         */
        sequence: positiveInt;
        /**
         * Contains extended information for property 'sequence'.
         */
        _sequence?: Element;
        /**
         * Coverage to be used for adjudication
         */
        focal: boolean;
        /**
         * Contains extended information for property 'focal'.
         */
        _focal?: Element;
        /**
         * Insurance information
         */
        coverage: Reference;
        /**
         * Additional provider contract number
         */
        businessArrangement?: string;
        /**
         * Contains extended information for property 'businessArrangement'.
         */
        _businessArrangement?: Element;
        /**
         * Adjudication results
         */
        claimResponse?: Reference;
    }
    /**
     * Processing errors
     */
    interface ClaimResponseError extends BackboneElement {
        /**
         * Item sequence number
         */
        itemSequence?: positiveInt;
        /**
         * Contains extended information for property 'itemSequence'.
         */
        _itemSequence?: Element;
        /**
         * Detail sequence number
         */
        detailSequence?: positiveInt;
        /**
         * Contains extended information for property 'detailSequence'.
         */
        _detailSequence?: Element;
        /**
         * Subdetail sequence number
         */
        subDetailSequence?: positiveInt;
        /**
         * Contains extended information for property 'subDetailSequence'.
         */
        _subDetailSequence?: Element;
        /**
         * Error code detailing processing issues
         */
        code: CodeableConcept;
    }
    /**
     * Response to a claim predetermination or preauthorization
     */
    interface ClaimResponse extends DomainResource {
        /**
         * Business Identifier for a claim response
         */
        identifier?: Identifier[];
        /**
         * active | cancelled | draft | entered-in-error
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * More granular claim type
         */
        type: CodeableConcept;
        /**
         * More granular claim type
         */
        subType?: CodeableConcept;
        /**
         * claim | preauthorization | predetermination
         */
        use: code;
        /**
         * Contains extended information for property 'use'.
         */
        _use?: Element;
        /**
         * The recipient of the products and services
         */
        patient: Reference;
        /**
         * Response creation date
         */
        created: dateTime;
        /**
         * Contains extended information for property 'created'.
         */
        _created?: Element;
        /**
         * Party responsible for reimbursement
         */
        insurer: Reference;
        /**
         * Party responsible for the claim
         */
        requestor?: Reference;
        /**
         * Id of resource triggering adjudication
         */
        request?: Reference;
        /**
         * queued | complete | error | partial
         */
        outcome: code;
        /**
         * Contains extended information for property 'outcome'.
         */
        _outcome?: Element;
        /**
         * Disposition Message
         */
        disposition?: string;
        /**
         * Contains extended information for property 'disposition'.
         */
        _disposition?: Element;
        /**
         * Preauthorization reference
         */
        preAuthRef?: string;
        /**
         * Contains extended information for property 'preAuthRef'.
         */
        _preAuthRef?: Element;
        /**
         * Preauthorization reference effective period
         */
        preAuthPeriod?: Period;
        /**
         * Party to be paid any benefits payable
         */
        payeeType?: CodeableConcept;
        /**
         * Adjudication for claim line items
         */
        item?: ClaimResponseItem[];
        /**
         * Insurer added line items
         */
        addItem?: ClaimResponseAddItem[];
        /**
         * Header-level adjudication
         */
        adjudication?: ClaimResponseItemAdjudication[];
        /**
         * Adjudication totals
         */
        total?: ClaimResponseTotal[];
        /**
         * Payment Details
         */
        payment?: ClaimResponsePayment;
        /**
         * Funds reserved status
         */
        fundsReserve?: CodeableConcept;
        /**
         * Printed form identifier
         */
        formCode?: CodeableConcept;
        /**
         * Printed reference or actual form
         */
        form?: Attachment;
        /**
         * Note concerning adjudication
         */
        processNote?: ClaimResponseProcessNote[];
        /**
         * Request for additional information
         */
        communicationRequest?: Reference[];
        /**
         * Patient insurance information
         */
        insurance?: ClaimResponseInsurance[];
        /**
         * Processing errors
         */
        error?: ClaimResponseError[];
    }
    /**
     * One or more sets of investigations (signs, symptoms, etc.)
     */
    interface ClinicalImpressionInvestigation extends BackboneElement {
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
     * Possible or likely findings and diagnoses
     */
    interface ClinicalImpressionFinding extends BackboneElement {
        /**
         * What was found
         */
        itemCodeableConcept?: CodeableConcept;
        /**
         * What was found
         */
        itemReference?: Reference;
        /**
         * Which investigations support finding
         */
        basis?: string;
        /**
         * Contains extended information for property 'basis'.
         */
        _basis?: Element;
    }
    /**
     * A clinical assessment performed when planning treatments and management strategies for a patient
     */
    interface ClinicalImpression extends DomainResource {
        /**
         * Business identifier
         */
        identifier?: Identifier[];
        /**
         * in-progress | completed | entered-in-error
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Reason for current status
         */
        statusReason?: CodeableConcept;
        /**
         * Kind of assessment performed
         */
        code?: CodeableConcept;
        /**
         * Why/how the assessment was performed
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Patient or group assessed
         */
        subject: Reference;
        /**
         * Encounter created as part of
         */
        encounter?: Reference;
        /**
         * Time of assessment
         */
        effectiveDateTime?: dateTime;
        /**
         * Contains extended information for property 'effectiveDateTime'.
         */
        _effectiveDateTime?: Element;
        /**
         * Time of assessment
         */
        effectivePeriod?: Period;
        /**
         * When the assessment was documented
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * The clinician performing the assessment
         */
        assessor?: Reference;
        /**
         * Reference to last assessment
         */
        previous?: Reference;
        /**
         * Relevant impressions of patient state
         */
        problem?: Reference[];
        /**
         * One or more sets of investigations (signs, symptoms, etc.)
         */
        investigation?: ClinicalImpressionInvestigation[];
        /**
         * Clinical Protocol followed
         */
        protocol?: uri[];
        /**
         * Contains extended information for property 'protocol'.
         */
        _protocol?: Element[];
        /**
         * Summary of the assessment
         */
        summary?: string;
        /**
         * Contains extended information for property 'summary'.
         */
        _summary?: Element;
        /**
         * Possible or likely findings and diagnoses
         */
        finding?: ClinicalImpressionFinding[];
        /**
         * Estimate of likely outcome
         */
        prognosisCodeableConcept?: CodeableConcept[];
        /**
         * RiskAssessment expressing likely outcome
         */
        prognosisReference?: Reference[];
        /**
         * Information supporting the clinical impression
         */
        supportingInfo?: Reference[];
        /**
         * Comments made about the ClinicalImpression
         */
        note?: Annotation[];
    }
    /**
     * Filter that can be used in a value set
     */
    interface CodeSystemFilter extends BackboneElement {
        /**
         * Code that identifies the filter
         */
        code: code;
        /**
         * Contains extended information for property 'code'.
         */
        _code?: Element;
        /**
         * How or why the filter is used
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * = | is-a | descendent-of | is-not-a | regex | in | not-in | generalizes | exists
         */
        operator: code[];
        /**
         * Contains extended information for property 'operator'.
         */
        _operator?: Element[];
        /**
         * What to use for the value
         */
        value: string;
        /**
         * Contains extended information for property 'value'.
         */
        _value?: Element;
    }
    /**
     * Additional information supplied about each concept
     */
    interface CodeSystemProperty extends BackboneElement {
        /**
         * Identifies the property on the concepts, and when referred to in operations
         */
        code: code;
        /**
         * Contains extended information for property 'code'.
         */
        _code?: Element;
        /**
         * Formal identifier for the property
         */
        uri?: uri;
        /**
         * Contains extended information for property 'uri'.
         */
        _uri?: Element;
        /**
         * Why the property is defined, and/or what it conveys
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * code | Coding | string | integer | boolean | dateTime | decimal
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
    }
    /**
     * Concepts in the code system
     */
    interface CodeSystemConcept extends BackboneElement {
        /**
         * Code that identifies concept
         */
        code: code;
        /**
         * Contains extended information for property 'code'.
         */
        _code?: Element;
        /**
         * Text to display to the user
         */
        display?: string;
        /**
         * Contains extended information for property 'display'.
         */
        _display?: Element;
        /**
         * Formal definition
         */
        definition?: string;
        /**
         * Contains extended information for property 'definition'.
         */
        _definition?: Element;
        /**
         * Additional representations for the concept
         */
        designation?: CodeSystemConceptDesignation[];
        /**
         * Property value for the concept
         */
        property?: CodeSystemConceptProperty[];
        /**
         * Child Concepts (is-a/contains/categorizes)
         */
        concept?: CodeSystemConcept[];
    }
    /**
     * Additional representations for the concept
     */
    interface CodeSystemConceptDesignation extends BackboneElement {
        /**
         * Human language of the designation
         */
        language?: code;
        /**
         * Contains extended information for property 'language'.
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
         * Contains extended information for property 'value'.
         */
        _value?: Element;
    }
    /**
     * Property value for the concept
     */
    interface CodeSystemConceptProperty extends BackboneElement {
        /**
         * Reference to CodeSystem.property.code
         */
        code: code;
        /**
         * Contains extended information for property 'code'.
         */
        _code?: Element;
        /**
         * Value of the property for this concept
         */
        valueCode?: code;
        /**
         * Contains extended information for property 'valueCode'.
         */
        _valueCode?: Element;
        /**
         * Value of the property for this concept
         */
        valueCoding?: Coding;
        /**
         * Value of the property for this concept
         */
        valueString?: string;
        /**
         * Contains extended information for property 'valueString'.
         */
        _valueString?: Element;
        /**
         * Value of the property for this concept
         */
        valueInteger?: integer;
        /**
         * Contains extended information for property 'valueInteger'.
         */
        _valueInteger?: Element;
        /**
         * Value of the property for this concept
         */
        valueBoolean?: boolean;
        /**
         * Contains extended information for property 'valueBoolean'.
         */
        _valueBoolean?: Element;
        /**
         * Value of the property for this concept
         */
        valueDateTime?: dateTime;
        /**
         * Contains extended information for property 'valueDateTime'.
         */
        _valueDateTime?: Element;
        /**
         * Value of the property for this concept
         */
        valueDecimal?: decimal;
        /**
         * Contains extended information for property 'valueDecimal'.
         */
        _valueDecimal?: Element;
    }
    /**
     * Declares the existence of and describes a code system or code system supplement
     */
    interface CodeSystem extends DomainResource {
        /**
         * Canonical identifier for this code system, represented as a URI (globally unique) (Coding.system)
         */
        url?: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Additional identifier for the code system (business identifier)
         */
        identifier?: Identifier[];
        /**
         * Business version of the code system (Coding.version)
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
        /**
         * Name for this code system (computer friendly)
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Name for this code system (human friendly)
         */
        title?: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
        /**
         * draft | active | retired | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * For testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Contains extended information for property 'experimental'.
         */
        _experimental?: Element;
        /**
         * Date last changed
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Name of the publisher (organization or individual)
         */
        publisher?: string;
        /**
         * Contains extended information for property 'publisher'.
         */
        _publisher?: Element;
        /**
         * Contact details for the publisher
         */
        contact?: ContactDetail[];
        /**
         * Natural language description of the code system
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * The context that the content is intended to support
         */
        useContext?: UsageContext[];
        /**
         * Intended jurisdiction for code system (if applicable)
         */
        jurisdiction?: CodeableConcept[];
        /**
         * Why this code system is defined
         */
        purpose?: markdown;
        /**
         * Contains extended information for property 'purpose'.
         */
        _purpose?: Element;
        /**
         * Use and/or publishing restrictions
         */
        copyright?: markdown;
        /**
         * Contains extended information for property 'copyright'.
         */
        _copyright?: Element;
        /**
         * If code comparison is case sensitive
         */
        caseSensitive?: boolean;
        /**
         * Contains extended information for property 'caseSensitive'.
         */
        _caseSensitive?: Element;
        /**
         * Canonical reference to the value set with entire code system
         */
        valueSet?: canonical;
        /**
         * Contains extended information for property 'valueSet'.
         */
        _valueSet?: Element;
        /**
         * grouped-by | is-a | part-of | classified-with
         */
        hierarchyMeaning?: code;
        /**
         * Contains extended information for property 'hierarchyMeaning'.
         */
        _hierarchyMeaning?: Element;
        /**
         * If code system defines a compositional grammar
         */
        compositional?: boolean;
        /**
         * Contains extended information for property 'compositional'.
         */
        _compositional?: Element;
        /**
         * If definitions are not stable
         */
        versionNeeded?: boolean;
        /**
         * Contains extended information for property 'versionNeeded'.
         */
        _versionNeeded?: Element;
        /**
         * not-present | example | fragment | complete | supplement
         */
        content: code;
        /**
         * Contains extended information for property 'content'.
         */
        _content?: Element;
        /**
         * Canonical URL of Code System this adds designations and properties to
         */
        supplements?: canonical;
        /**
         * Contains extended information for property 'supplements'.
         */
        _supplements?: Element;
        /**
         * Total concepts in the code system
         */
        count?: unsignedInt;
        /**
         * Contains extended information for property 'count'.
         */
        _count?: Element;
        /**
         * Filter that can be used in a value set
         */
        filter?: CodeSystemFilter[];
        /**
         * Additional information supplied about each concept
         */
        property?: CodeSystemProperty[];
        /**
         * Concepts in the code system
         */
        concept?: CodeSystemConcept[];
    }
    /**
     * Message payload
     */
    interface CommunicationPayload extends BackboneElement {
        /**
         * Message part content
         */
        contentString?: string;
        /**
         * Contains extended information for property 'contentString'.
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
         * Instantiates FHIR protocol or definition
         */
        instantiatesCanonical?: canonical[];
        /**
         * Contains extended information for property 'instantiatesCanonical'.
         */
        _instantiatesCanonical?: Element[];
        /**
         * Instantiates external protocol or definition
         */
        instantiatesUri?: uri[];
        /**
         * Contains extended information for property 'instantiatesUri'.
         */
        _instantiatesUri?: Element[];
        /**
         * Request fulfilled by this communication
         */
        basedOn?: Reference[];
        /**
         * Part of this action
         */
        partOf?: Reference[];
        /**
         * Reply to
         */
        inResponseTo?: Reference[];
        /**
         * preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Reason for current status
         */
        statusReason?: CodeableConcept;
        /**
         * Message category
         */
        category?: CodeableConcept[];
        /**
         * routine | urgent | asap | stat
         */
        priority?: code;
        /**
         * Contains extended information for property 'priority'.
         */
        _priority?: Element;
        /**
         * A channel of communication
         */
        medium?: CodeableConcept[];
        /**
         * Focus of message
         */
        subject?: Reference;
        /**
         * Description of the purpose/content
         */
        topic?: CodeableConcept;
        /**
         * Resources that pertain to this communication
         */
        about?: Reference[];
        /**
         * Encounter created as part of
         */
        encounter?: Reference;
        /**
         * When sent
         */
        sent?: dateTime;
        /**
         * Contains extended information for property 'sent'.
         */
        _sent?: Element;
        /**
         * When received
         */
        received?: dateTime;
        /**
         * Contains extended information for property 'received'.
         */
        _received?: Element;
        /**
         * Message recipient
         */
        recipient?: Reference[];
        /**
         * Message sender
         */
        sender?: Reference;
        /**
         * Indication for message
         */
        reasonCode?: CodeableConcept[];
        /**
         * Why was communication done?
         */
        reasonReference?: Reference[];
        /**
         * Message payload
         */
        payload?: CommunicationPayload[];
        /**
         * Comments made about the communication
         */
        note?: Annotation[];
    }
    /**
     * Message payload
     */
    interface CommunicationRequestPayload extends BackboneElement {
        /**
         * Message part content
         */
        contentString?: string;
        /**
         * Contains extended information for property 'contentString'.
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
         * Fulfills plan or proposal
         */
        basedOn?: Reference[];
        /**
         * Request(s) replaced by this request
         */
        replaces?: Reference[];
        /**
         * Composite request this is part of
         */
        groupIdentifier?: Identifier;
        /**
         * draft | active | on-hold | revoked | completed | entered-in-error | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Reason for current status
         */
        statusReason?: CodeableConcept;
        /**
         * Message category
         */
        category?: CodeableConcept[];
        /**
         * routine | urgent | asap | stat
         */
        priority?: code;
        /**
         * Contains extended information for property 'priority'.
         */
        _priority?: Element;
        /**
         * True if request is prohibiting action
         */
        doNotPerform?: boolean;
        /**
         * Contains extended information for property 'doNotPerform'.
         */
        _doNotPerform?: Element;
        /**
         * A channel of communication
         */
        medium?: CodeableConcept[];
        /**
         * Focus of message
         */
        subject?: Reference;
        /**
         * Resources that pertain to this communication request
         */
        about?: Reference[];
        /**
         * Encounter created as part of
         */
        encounter?: Reference;
        /**
         * Message payload
         */
        payload?: CommunicationRequestPayload[];
        /**
         * When scheduled
         */
        occurrenceDateTime?: dateTime;
        /**
         * Contains extended information for property 'occurrenceDateTime'.
         */
        _occurrenceDateTime?: Element;
        /**
         * When scheduled
         */
        occurrencePeriod?: Period;
        /**
         * When request transitioned to being actionable
         */
        authoredOn?: dateTime;
        /**
         * Contains extended information for property 'authoredOn'.
         */
        _authoredOn?: Element;
        /**
         * Who/what is requesting service
         */
        requester?: Reference;
        /**
         * Message recipient
         */
        recipient?: Reference[];
        /**
         * Message sender
         */
        sender?: Reference;
        /**
         * Why is communication needed?
         */
        reasonCode?: CodeableConcept[];
        /**
         * Why is communication needed?
         */
        reasonReference?: Reference[];
        /**
         * Comments made about communication request
         */
        note?: Annotation[];
    }
    /**
     * How a resource is related to the compartment
     */
    interface CompartmentDefinitionResource extends BackboneElement {
        /**
         * Name of resource type
         */
        code: code;
        /**
         * Contains extended information for property 'code'.
         */
        _code?: Element;
        /**
         * Search Parameter Name, or chained parameters
         */
        param?: string[];
        /**
         * Contains extended information for property 'param'.
         */
        _param?: Element[];
        /**
         * Additional documentation about the resource and compartment
         */
        documentation?: string;
        /**
         * Contains extended information for property 'documentation'.
         */
        _documentation?: Element;
    }
    /**
     * Compartment Definition for a resource
     */
    interface CompartmentDefinition extends DomainResource {
        /**
         * Canonical identifier for this compartment definition, represented as a URI (globally unique)
         */
        url: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Business version of the compartment definition
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
        /**
         * Name for this compartment definition (computer friendly)
         */
        name: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * draft | active | retired | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * For testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Contains extended information for property 'experimental'.
         */
        _experimental?: Element;
        /**
         * Date last changed
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Name of the publisher (organization or individual)
         */
        publisher?: string;
        /**
         * Contains extended information for property 'publisher'.
         */
        _publisher?: Element;
        /**
         * Contact details for the publisher
         */
        contact?: ContactDetail[];
        /**
         * Natural language description of the compartment definition
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * The context that the content is intended to support
         */
        useContext?: UsageContext[];
        /**
         * Why this compartment definition is defined
         */
        purpose?: markdown;
        /**
         * Contains extended information for property 'purpose'.
         */
        _purpose?: Element;
        /**
         * Patient | Encounter | RelatedPerson | Practitioner | Device
         */
        code: code;
        /**
         * Contains extended information for property 'code'.
         */
        _code?: Element;
        /**
         * Whether the search syntax is supported
         */
        search: boolean;
        /**
         * Contains extended information for property 'search'.
         */
        _search?: Element;
        /**
         * How a resource is related to the compartment
         */
        resource?: CompartmentDefinitionResource[];
    }
    /**
     * Attests to accuracy of composition
     */
    interface CompositionAttester extends BackboneElement {
        /**
         * personal | professional | legal | official
         */
        mode: code;
        /**
         * Contains extended information for property 'mode'.
         */
        _mode?: Element;
        /**
         * When the composition was attested
         */
        time?: dateTime;
        /**
         * Contains extended information for property 'time'.
         */
        _time?: Element;
        /**
         * Who attested the composition
         */
        party?: Reference;
    }
    /**
     * Relationships to other compositions/documents
     */
    interface CompositionRelatesTo extends BackboneElement {
        /**
         * replaces | transforms | signs | appends
         */
        code: code;
        /**
         * Contains extended information for property 'code'.
         */
        _code?: Element;
        /**
         * Target of the relationship
         */
        targetIdentifier?: Identifier;
        /**
         * Target of the relationship
         */
        targetReference?: Reference;
    }
    /**
     * The clinical service(s) being documented
     */
    interface CompositionEvent extends BackboneElement {
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
    interface CompositionSection extends BackboneElement {
        /**
         * Label for section (e.g. for ToC)
         */
        title?: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
        /**
         * Classification of section (recommended)
         */
        code?: CodeableConcept;
        /**
         * Who and/or what authored the section
         */
        author?: Reference[];
        /**
         * Who/what the section is about, when it is not about the subject of composition
         */
        focus?: Reference;
        /**
         * Text summary of the section, for human interpretation
         */
        text?: Narrative;
        /**
         * working | snapshot | changes
         */
        mode?: code;
        /**
         * Contains extended information for property 'mode'.
         */
        _mode?: Element;
        /**
         * Order of section entries
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
         * Version-independent identifier for the Composition
         */
        identifier?: Identifier;
        /**
         * preliminary | final | amended | entered-in-error
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Kind of composition (LOINC if possible)
         */
        type: CodeableConcept;
        /**
         * Categorization of Composition
         */
        category?: CodeableConcept[];
        /**
         * Who and/or what the composition is about
         */
        subject?: Reference;
        /**
         * Context of the Composition
         */
        encounter?: Reference;
        /**
         * Composition editing time
         */
        date: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Who and/or what authored the composition
         */
        author: Reference[];
        /**
         * Human Readable name/title
         */
        title: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
        /**
         * As defined by affinity domain
         */
        confidentiality?: code;
        /**
         * Contains extended information for property 'confidentiality'.
         */
        _confidentiality?: Element;
        /**
         * Attests to accuracy of composition
         */
        attester?: CompositionAttester[];
        /**
         * Organization which maintains the composition
         */
        custodian?: Reference;
        /**
         * Relationships to other compositions/documents
         */
        relatesTo?: CompositionRelatesTo[];
        /**
         * The clinical service(s) being documented
         */
        event?: CompositionEvent[];
        /**
         * Composition is broken into sections
         */
        section?: CompositionSection[];
    }
    /**
     * Same source and target systems
     */
    interface ConceptMapGroup extends BackboneElement {
        /**
         * Source system where concepts to be mapped are defined
         */
        source?: uri;
        /**
         * Contains extended information for property 'source'.
         */
        _source?: Element;
        /**
         * Specific version of the  code system
         */
        sourceVersion?: string;
        /**
         * Contains extended information for property 'sourceVersion'.
         */
        _sourceVersion?: Element;
        /**
         * Target system that the concepts are to be mapped to
         */
        target?: uri;
        /**
         * Contains extended information for property 'target'.
         */
        _target?: Element;
        /**
         * Specific version of the  code system
         */
        targetVersion?: string;
        /**
         * Contains extended information for property 'targetVersion'.
         */
        _targetVersion?: Element;
        /**
         * Mappings for a concept from the source set
         */
        element: ConceptMapGroupElement[];
        /**
         * What to do when there is no mapping for the source concept
         */
        unmapped?: ConceptMapGroupUnmapped;
    }
    /**
     * Mappings for a concept from the source set
     */
    interface ConceptMapGroupElement extends BackboneElement {
        /**
         * Identifies element being mapped
         */
        code?: code;
        /**
         * Contains extended information for property 'code'.
         */
        _code?: Element;
        /**
         * Display for the code
         */
        display?: string;
        /**
         * Contains extended information for property 'display'.
         */
        _display?: Element;
        /**
         * Concept in target system for element
         */
        target?: ConceptMapGroupElementTarget[];
    }
    /**
     * Concept in target system for element
     */
    interface ConceptMapGroupElementTarget extends BackboneElement {
        /**
         * Code that identifies the target element
         */
        code?: code;
        /**
         * Contains extended information for property 'code'.
         */
        _code?: Element;
        /**
         * Display for the code
         */
        display?: string;
        /**
         * Contains extended information for property 'display'.
         */
        _display?: Element;
        /**
         * relatedto | equivalent | equal | wider | subsumes | narrower | specializes | inexact | unmatched | disjoint
         */
        equivalence: code;
        /**
         * Contains extended information for property 'equivalence'.
         */
        _equivalence?: Element;
        /**
         * Description of status/issues in mapping
         */
        comment?: string;
        /**
         * Contains extended information for property 'comment'.
         */
        _comment?: Element;
        /**
         * Other elements required for this mapping (from context)
         */
        dependsOn?: ConceptMapGroupElementTargetDependsOn[];
        /**
         * Other concepts that this mapping also produces
         */
        product?: ConceptMapGroupElementTargetDependsOn[];
    }
    /**
     * Other elements required for this mapping (from context)
     */
    interface ConceptMapGroupElementTargetDependsOn extends BackboneElement {
        /**
         * Reference to property mapping depends on
         */
        property: uri;
        /**
         * Contains extended information for property 'property'.
         */
        _property?: Element;
        /**
         * Code System (if necessary)
         */
        system?: canonical;
        /**
         * Contains extended information for property 'system'.
         */
        _system?: Element;
        /**
         * Value of the referenced element
         */
        value: string;
        /**
         * Contains extended information for property 'value'.
         */
        _value?: Element;
        /**
         * Display for the code (if value is a code)
         */
        display?: string;
        /**
         * Contains extended information for property 'display'.
         */
        _display?: Element;
    }
    /**
     * What to do when there is no mapping for the source concept
     */
    interface ConceptMapGroupUnmapped extends BackboneElement {
        /**
         * provided | fixed | other-map
         */
        mode: code;
        /**
         * Contains extended information for property 'mode'.
         */
        _mode?: Element;
        /**
         * Fixed code when mode = fixed
         */
        code?: code;
        /**
         * Contains extended information for property 'code'.
         */
        _code?: Element;
        /**
         * Display for the code
         */
        display?: string;
        /**
         * Contains extended information for property 'display'.
         */
        _display?: Element;
        /**
         * canonical reference to an additional ConceptMap to use for mapping if the source concept is unmapped
         */
        url?: canonical;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
    }
    /**
     * A map from one set of concepts to one or more other concepts
     */
    interface ConceptMap extends DomainResource {
        /**
         * Canonical identifier for this concept map, represented as a URI (globally unique)
         */
        url?: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Additional identifier for the concept map
         */
        identifier?: Identifier;
        /**
         * Business version of the concept map
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
        /**
         * Name for this concept map (computer friendly)
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Name for this concept map (human friendly)
         */
        title?: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
        /**
         * draft | active | retired | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * For testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Contains extended information for property 'experimental'.
         */
        _experimental?: Element;
        /**
         * Date last changed
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Name of the publisher (organization or individual)
         */
        publisher?: string;
        /**
         * Contains extended information for property 'publisher'.
         */
        _publisher?: Element;
        /**
         * Contact details for the publisher
         */
        contact?: ContactDetail[];
        /**
         * Natural language description of the concept map
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * The context that the content is intended to support
         */
        useContext?: UsageContext[];
        /**
         * Intended jurisdiction for concept map (if applicable)
         */
        jurisdiction?: CodeableConcept[];
        /**
         * Why this concept map is defined
         */
        purpose?: markdown;
        /**
         * Contains extended information for property 'purpose'.
         */
        _purpose?: Element;
        /**
         * Use and/or publishing restrictions
         */
        copyright?: markdown;
        /**
         * Contains extended information for property 'copyright'.
         */
        _copyright?: Element;
        /**
         * The source value set that contains the concepts that are being mapped
         */
        sourceUri?: uri;
        /**
         * Contains extended information for property 'sourceUri'.
         */
        _sourceUri?: Element;
        /**
         * The source value set that contains the concepts that are being mapped
         */
        sourceCanonical?: canonical;
        /**
         * Contains extended information for property 'sourceCanonical'.
         */
        _sourceCanonical?: Element;
        /**
         * The target value set which provides context for the mappings
         */
        targetUri?: uri;
        /**
         * Contains extended information for property 'targetUri'.
         */
        _targetUri?: Element;
        /**
         * The target value set which provides context for the mappings
         */
        targetCanonical?: canonical;
        /**
         * Contains extended information for property 'targetCanonical'.
         */
        _targetCanonical?: Element;
        /**
         * Same source and target systems
         */
        group?: ConceptMapGroup[];
    }
    /**
     * Stage/grade, usually assessed formally
     */
    interface ConditionStage extends BackboneElement {
        /**
         * Simple summary (disease specific)
         */
        summary?: CodeableConcept;
        /**
         * Formal record of assessment
         */
        assessment?: Reference[];
        /**
         * Kind of staging
         */
        type?: CodeableConcept;
    }
    /**
     * Supporting evidence
     */
    interface ConditionEvidence extends BackboneElement {
        /**
         * Manifestation/symptom
         */
        code?: CodeableConcept[];
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
         * active | recurrence | relapse | inactive | remission | resolved
         */
        clinicalStatus?: CodeableConcept;
        /**
         * unconfirmed | provisional | differential | confirmed | refuted | entered-in-error
         */
        verificationStatus?: CodeableConcept;
        /**
         * problem-list-item | encounter-diagnosis
         */
        category?: CodeableConcept[];
        /**
         * Subjective severity of condition
         */
        severity?: CodeableConcept;
        /**
         * Identification of the condition, problem or diagnosis
         */
        code?: CodeableConcept;
        /**
         * Anatomical location, if relevant
         */
        bodySite?: CodeableConcept[];
        /**
         * Who has the condition?
         */
        subject: Reference;
        /**
         * Encounter created as part of
         */
        encounter?: Reference;
        /**
         * Estimated or actual date,  date-time, or age
         */
        onsetDateTime?: dateTime;
        /**
         * Contains extended information for property 'onsetDateTime'.
         */
        _onsetDateTime?: Element;
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
         * Contains extended information for property 'onsetString'.
         */
        _onsetString?: Element;
        /**
         * When in resolution/remission
         */
        abatementDateTime?: dateTime;
        /**
         * Contains extended information for property 'abatementDateTime'.
         */
        _abatementDateTime?: Element;
        /**
         * When in resolution/remission
         */
        abatementAge?: Age;
        /**
         * When in resolution/remission
         */
        abatementPeriod?: Period;
        /**
         * When in resolution/remission
         */
        abatementRange?: Range;
        /**
         * When in resolution/remission
         */
        abatementString?: string;
        /**
         * Contains extended information for property 'abatementString'.
         */
        _abatementString?: Element;
        /**
         * Date record was first recorded
         */
        recordedDate?: dateTime;
        /**
         * Contains extended information for property 'recordedDate'.
         */
        _recordedDate?: Element;
        /**
         * Who recorded the condition
         */
        recorder?: Reference;
        /**
         * Person who asserts this condition
         */
        asserter?: Reference;
        /**
         * Stage/grade, usually assessed formally
         */
        stage?: ConditionStage[];
        /**
         * Supporting evidence
         */
        evidence?: ConditionEvidence[];
        /**
         * Additional information about the Condition
         */
        note?: Annotation[];
    }
    /**
     * Policies covered by this consent
     */
    interface ConsentPolicy extends BackboneElement {
        /**
         * Enforcement source for policy
         */
        authority?: uri;
        /**
         * Contains extended information for property 'authority'.
         */
        _authority?: Element;
        /**
         * Specific policy covered by this consent
         */
        uri?: uri;
        /**
         * Contains extended information for property 'uri'.
         */
        _uri?: Element;
    }
    /**
     * Consent Verified by patient or family
     */
    interface ConsentVerification extends BackboneElement {
        /**
         * Has been verified
         */
        verified: boolean;
        /**
         * Contains extended information for property 'verified'.
         */
        _verified?: Element;
        /**
         * Person who verified
         */
        verifiedWith?: Reference;
        /**
         * When consent verified
         */
        verificationDate?: dateTime;
        /**
         * Contains extended information for property 'verificationDate'.
         */
        _verificationDate?: Element;
    }
    /**
     * Constraints to the base Consent.policyRule
     */
    interface ConsentProvision extends BackboneElement {
        /**
         * deny | permit
         */
        type?: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * Timeframe for this rule
         */
        period?: Period;
        /**
         * Who|what controlled by this rule (or group, by role)
         */
        actor?: ConsentProvisionActor[];
        /**
         * Actions controlled by this rule
         */
        action?: CodeableConcept[];
        /**
         * Security Labels that define affected resources
         */
        securityLabel?: Coding[];
        /**
         * Context of activities covered by this rule
         */
        purpose?: Coding[];
        /**
         * e.g. Resource Type, Profile, CDA, etc.
         */
        class?: Coding[];
        /**
         * e.g. LOINC or SNOMED CT code, etc. in the content
         */
        code?: CodeableConcept[];
        /**
         * Timeframe for data controlled by this rule
         */
        dataPeriod?: Period;
        /**
         * Data controlled by this rule
         */
        data?: ConsentProvisionData[];
        /**
         * Nested Exception Rules
         */
        provision?: ConsentProvision[];
    }
    /**
     * Who|what controlled by this rule (or group, by role)
     */
    interface ConsentProvisionActor extends BackboneElement {
        /**
         * How the actor is involved
         */
        role: CodeableConcept;
        /**
         * Resource for the actor (or group, by role)
         */
        reference: Reference;
    }
    /**
     * Data controlled by this rule
     */
    interface ConsentProvisionData extends BackboneElement {
        /**
         * instance | related | dependents | authoredby
         */
        meaning: code;
        /**
         * Contains extended information for property 'meaning'.
         */
        _meaning?: Element;
        /**
         * The actual data reference
         */
        reference: Reference;
    }
    /**
     * A healthcare consumer's  choices to permit or deny recipients or roles to perform actions for specific purposes and periods of time
     */
    interface Consent extends DomainResource {
        /**
         * Identifier for this record (external references)
         */
        identifier?: Identifier[];
        /**
         * draft | proposed | active | rejected | inactive | entered-in-error
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Which of the four areas this resource covers (extensible)
         */
        scope: CodeableConcept;
        /**
         * Classification of the consent statement - for indexing/retrieval
         */
        category: CodeableConcept[];
        /**
         * Who the consent applies to
         */
        patient?: Reference;
        /**
         * When this Consent was created or indexed
         */
        dateTime?: dateTime;
        /**
         * Contains extended information for property 'dateTime'.
         */
        _dateTime?: Element;
        /**
         * Who is agreeing to the policy and rules
         */
        performer?: Reference[];
        /**
         * Custodian of the consent
         */
        organization?: Reference[];
        /**
         * Source from which this consent is taken
         */
        sourceAttachment?: Attachment;
        /**
         * Source from which this consent is taken
         */
        sourceReference?: Reference;
        /**
         * Policies covered by this consent
         */
        policy?: ConsentPolicy[];
        /**
         * Regulation that this consents to
         */
        policyRule?: CodeableConcept;
        /**
         * Consent Verified by patient or family
         */
        verification?: ConsentVerification[];
        /**
         * Constraints to the base Consent.policyRule
         */
        provision?: ConsentProvision;
    }
    /**
     * Contract precursor content
     */
    interface ContractContentDefinition extends BackboneElement {
        /**
         * Content structure and use
         */
        type: CodeableConcept;
        /**
         * Detailed Content Type Definition
         */
        subType?: CodeableConcept;
        /**
         * Publisher Entity
         */
        publisher?: Reference;
        /**
         * When published
         */
        publicationDate?: dateTime;
        /**
         * Contains extended information for property 'publicationDate'.
         */
        _publicationDate?: Element;
        /**
         * amended | appended | cancelled | disputed | entered-in-error | executable | executed | negotiable | offered | policy | rejected | renewed | revoked | resolved | terminated
         */
        publicationStatus: code;
        /**
         * Contains extended information for property 'publicationStatus'.
         */
        _publicationStatus?: Element;
        /**
         * Publication Ownership
         */
        copyright?: markdown;
        /**
         * Contains extended information for property 'copyright'.
         */
        _copyright?: Element;
    }
    /**
     * Contract Term List
     */
    interface ContractTerm extends BackboneElement {
        /**
         * Contract Term Number
         */
        identifier?: Identifier;
        /**
         * Contract Term Issue Date Time
         */
        issued?: dateTime;
        /**
         * Contains extended information for property 'issued'.
         */
        _issued?: Element;
        /**
         * Contract Term Effective Time
         */
        applies?: Period;
        /**
         * Term Concern
         */
        topicCodeableConcept?: CodeableConcept;
        /**
         * Term Concern
         */
        topicReference?: Reference;
        /**
         * Contract Term Type or Form
         */
        type?: CodeableConcept;
        /**
         * Contract Term Type specific classification
         */
        subType?: CodeableConcept;
        /**
         * Term Statement
         */
        text?: string;
        /**
         * Contains extended information for property 'text'.
         */
        _text?: Element;
        /**
         * Protection for the Term
         */
        securityLabel?: ContractTermSecurityLabel[];
        /**
         * Context of the Contract term
         */
        offer: ContractTermOffer;
        /**
         * Contract Term Asset List
         */
        asset?: ContractTermAsset[];
        /**
         * Entity being ascribed responsibility
         */
        action?: ContractTermAction[];
        /**
         * Nested Contract Term Group
         */
        group?: ContractTerm[];
    }
    /**
     * Protection for the Term
     */
    interface ContractTermSecurityLabel extends BackboneElement {
        /**
         * Link to Security Labels
         */
        number?: unsignedInt[];
        /**
         * Contains extended information for property 'number'.
         */
        _number?: Element[];
        /**
         * Confidentiality Protection
         */
        classification: Coding;
        /**
         * Applicable Policy
         */
        category?: Coding[];
        /**
         * Handling Instructions
         */
        control?: Coding[];
    }
    /**
     * Context of the Contract term
     */
    interface ContractTermOffer extends BackboneElement {
        /**
         * Offer business ID
         */
        identifier?: Identifier[];
        /**
         * Offer Recipient
         */
        party?: ContractTermOfferParty[];
        /**
         * Negotiable offer asset
         */
        topic?: Reference;
        /**
         * Contract Offer Type or Form
         */
        type?: CodeableConcept;
        /**
         * Accepting party choice
         */
        decision?: CodeableConcept;
        /**
         * How decision is conveyed
         */
        decisionMode?: CodeableConcept[];
        /**
         * Response to offer text
         */
        answer?: ContractTermOfferAnswer[];
        /**
         * Human readable offer text
         */
        text?: string;
        /**
         * Contains extended information for property 'text'.
         */
        _text?: Element;
        /**
         * Pointer to text
         */
        linkId?: string[];
        /**
         * Contains extended information for property 'linkId'.
         */
        _linkId?: Element[];
        /**
         * Offer restriction numbers
         */
        securityLabelNumber?: unsignedInt[];
        /**
         * Contains extended information for property 'securityLabelNumber'.
         */
        _securityLabelNumber?: Element[];
    }
    /**
     * Offer Recipient
     */
    interface ContractTermOfferParty extends BackboneElement {
        /**
         * Referenced entity
         */
        reference: Reference[];
        /**
         * Participant engagement type
         */
        role: CodeableConcept;
    }
    /**
     * Response to offer text
     */
    interface ContractTermOfferAnswer extends BackboneElement {
        /**
         * The actual answer response
         */
        valueBoolean?: boolean;
        /**
         * Contains extended information for property 'valueBoolean'.
         */
        _valueBoolean?: Element;
        /**
         * The actual answer response
         */
        valueDecimal?: decimal;
        /**
         * Contains extended information for property 'valueDecimal'.
         */
        _valueDecimal?: Element;
        /**
         * The actual answer response
         */
        valueInteger?: integer;
        /**
         * Contains extended information for property 'valueInteger'.
         */
        _valueInteger?: Element;
        /**
         * The actual answer response
         */
        valueDate?: date;
        /**
         * Contains extended information for property 'valueDate'.
         */
        _valueDate?: Element;
        /**
         * The actual answer response
         */
        valueDateTime?: dateTime;
        /**
         * Contains extended information for property 'valueDateTime'.
         */
        _valueDateTime?: Element;
        /**
         * The actual answer response
         */
        valueTime?: time;
        /**
         * Contains extended information for property 'valueTime'.
         */
        _valueTime?: Element;
        /**
         * The actual answer response
         */
        valueString?: string;
        /**
         * Contains extended information for property 'valueString'.
         */
        _valueString?: Element;
        /**
         * The actual answer response
         */
        valueUri?: uri;
        /**
         * Contains extended information for property 'valueUri'.
         */
        _valueUri?: Element;
        /**
         * The actual answer response
         */
        valueAttachment?: Attachment;
        /**
         * The actual answer response
         */
        valueCoding?: Coding;
        /**
         * The actual answer response
         */
        valueQuantity?: Quantity;
        /**
         * The actual answer response
         */
        valueReference?: Reference;
    }
    /**
     * Contract Term Asset List
     */
    interface ContractTermAsset extends BackboneElement {
        /**
         * Range of asset
         */
        scope?: CodeableConcept;
        /**
         * Asset category
         */
        type?: CodeableConcept[];
        /**
         * Associated entities
         */
        typeReference?: Reference[];
        /**
         * Asset sub-category
         */
        subtype?: CodeableConcept[];
        /**
         * Kinship of the asset
         */
        relationship?: Coding;
        /**
         * Circumstance of the asset
         */
        context?: ContractTermAssetContext[];
        /**
         * Quality desctiption of asset
         */
        condition?: string;
        /**
         * Contains extended information for property 'condition'.
         */
        _condition?: Element;
        /**
         * Asset availability types
         */
        periodType?: CodeableConcept[];
        /**
         * Time period of the asset
         */
        period?: Period[];
        /**
         * Time period
         */
        usePeriod?: Period[];
        /**
         * Asset clause or question text
         */
        text?: string;
        /**
         * Contains extended information for property 'text'.
         */
        _text?: Element;
        /**
         * Pointer to asset text
         */
        linkId?: string[];
        /**
         * Contains extended information for property 'linkId'.
         */
        _linkId?: Element[];
        /**
         * Response to assets
         */
        answer?: ContractTermOfferAnswer[];
        /**
         * Asset restriction numbers
         */
        securityLabelNumber?: unsignedInt[];
        /**
         * Contains extended information for property 'securityLabelNumber'.
         */
        _securityLabelNumber?: Element[];
        /**
         * Contract Valued Item List
         */
        valuedItem?: ContractTermAssetValuedItem[];
    }
    /**
     * Circumstance of the asset
     */
    interface ContractTermAssetContext extends BackboneElement {
        /**
         * Creator,custodian or owner
         */
        reference?: Reference;
        /**
         * Codeable asset context
         */
        code?: CodeableConcept[];
        /**
         * Context description
         */
        text?: string;
        /**
         * Contains extended information for property 'text'.
         */
        _text?: Element;
    }
    /**
     * Contract Valued Item List
     */
    interface ContractTermAssetValuedItem extends BackboneElement {
        /**
         * Contract Valued Item Type
         */
        entityCodeableConcept?: CodeableConcept;
        /**
         * Contract Valued Item Type
         */
        entityReference?: Reference;
        /**
         * Contract Valued Item Number
         */
        identifier?: Identifier;
        /**
         * Contract Valued Item Effective Tiem
         */
        effectiveTime?: dateTime;
        /**
         * Contains extended information for property 'effectiveTime'.
         */
        _effectiveTime?: Element;
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
         * Contains extended information for property 'factor'.
         */
        _factor?: Element;
        /**
         * Contract Valued Item Difficulty Scaling Factor
         */
        points?: decimal;
        /**
         * Contains extended information for property 'points'.
         */
        _points?: Element;
        /**
         * Total Contract Valued Item Value
         */
        net?: Money;
        /**
         * Terms of valuation
         */
        payment?: string;
        /**
         * Contains extended information for property 'payment'.
         */
        _payment?: Element;
        /**
         * When payment is due
         */
        paymentDate?: dateTime;
        /**
         * Contains extended information for property 'paymentDate'.
         */
        _paymentDate?: Element;
        /**
         * Who will make payment
         */
        responsible?: Reference;
        /**
         * Who will receive payment
         */
        recipient?: Reference;
        /**
         * Pointer to specific item
         */
        linkId?: string[];
        /**
         * Contains extended information for property 'linkId'.
         */
        _linkId?: Element[];
        /**
         * Security Labels that define affected terms
         */
        securityLabelNumber?: unsignedInt[];
        /**
         * Contains extended information for property 'securityLabelNumber'.
         */
        _securityLabelNumber?: Element[];
    }
    /**
     * Entity being ascribed responsibility
     */
    interface ContractTermAction extends BackboneElement {
        /**
         * True if the term prohibits the  action
         */
        doNotPerform?: boolean;
        /**
         * Contains extended information for property 'doNotPerform'.
         */
        _doNotPerform?: Element;
        /**
         * Type or form of the action
         */
        type: CodeableConcept;
        /**
         * Entity of the action
         */
        subject?: ContractTermActionSubject[];
        /**
         * Purpose for the Contract Term Action
         */
        intent: CodeableConcept;
        /**
         * Pointer to specific item
         */
        linkId?: string[];
        /**
         * Contains extended information for property 'linkId'.
         */
        _linkId?: Element[];
        /**
         * State of the action
         */
        status: CodeableConcept;
        /**
         * Episode associated with action
         */
        context?: Reference;
        /**
         * Pointer to specific item
         */
        contextLinkId?: string[];
        /**
         * Contains extended information for property 'contextLinkId'.
         */
        _contextLinkId?: Element[];
        /**
         * When action happens
         */
        occurrenceDateTime?: dateTime;
        /**
         * Contains extended information for property 'occurrenceDateTime'.
         */
        _occurrenceDateTime?: Element;
        /**
         * When action happens
         */
        occurrencePeriod?: Period;
        /**
         * When action happens
         */
        occurrenceTiming?: Timing;
        /**
         * Who asked for action
         */
        requester?: Reference[];
        /**
         * Pointer to specific item
         */
        requesterLinkId?: string[];
        /**
         * Contains extended information for property 'requesterLinkId'.
         */
        _requesterLinkId?: Element[];
        /**
         * Kind of service performer
         */
        performerType?: CodeableConcept[];
        /**
         * Competency of the performer
         */
        performerRole?: CodeableConcept;
        /**
         * Actor that wil execute (or not) the action
         */
        performer?: Reference;
        /**
         * Pointer to specific item
         */
        performerLinkId?: string[];
        /**
         * Contains extended information for property 'performerLinkId'.
         */
        _performerLinkId?: Element[];
        /**
         * Why is action (not) needed?
         */
        reasonCode?: CodeableConcept[];
        /**
         * Why is action (not) needed?
         */
        reasonReference?: Reference[];
        /**
         * Why action is to be performed
         */
        reason?: string[];
        /**
         * Contains extended information for property 'reason'.
         */
        _reason?: Element[];
        /**
         * Pointer to specific item
         */
        reasonLinkId?: string[];
        /**
         * Contains extended information for property 'reasonLinkId'.
         */
        _reasonLinkId?: Element[];
        /**
         * Comments about the action
         */
        note?: Annotation[];
        /**
         * Action restriction numbers
         */
        securityLabelNumber?: unsignedInt[];
        /**
         * Contains extended information for property 'securityLabelNumber'.
         */
        _securityLabelNumber?: Element[];
    }
    /**
     * Entity of the action
     */
    interface ContractTermActionSubject extends BackboneElement {
        /**
         * Entity of the action
         */
        reference: Reference[];
        /**
         * Role type of the agent
         */
        role?: CodeableConcept;
    }
    /**
     * Contract Signatory
     */
    interface ContractSigner extends BackboneElement {
        /**
         * Contract Signatory Role
         */
        type: Coding;
        /**
         * Contract Signatory Party
         */
        party: Reference;
        /**
         * Contract Documentation Signature
         */
        signature: Signature[];
    }
    /**
     * Contract Friendly Language
     */
    interface ContractFriendly extends BackboneElement {
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
    interface ContractLegal extends BackboneElement {
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
    interface ContractRule extends BackboneElement {
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
     * Legal Agreement
     */
    interface Contract extends DomainResource {
        /**
         * Contract number
         */
        identifier?: Identifier[];
        /**
         * Basal definition
         */
        url?: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Business edition
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
        /**
         * amended | appended | cancelled | disputed | entered-in-error | executable | executed | negotiable | offered | policy | rejected | renewed | revoked | resolved | terminated
         */
        status?: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Negotiation status
         */
        legalState?: CodeableConcept;
        /**
         * Source Contract Definition
         */
        instantiatesCanonical?: Reference;
        /**
         * External Contract Definition
         */
        instantiatesUri?: uri;
        /**
         * Contains extended information for property 'instantiatesUri'.
         */
        _instantiatesUri?: Element;
        /**
         * Content derived from the basal information
         */
        contentDerivative?: CodeableConcept;
        /**
         * When this Contract was issued
         */
        issued?: dateTime;
        /**
         * Contains extended information for property 'issued'.
         */
        _issued?: Element;
        /**
         * Effective time
         */
        applies?: Period;
        /**
         * Contract cessation cause
         */
        expirationType?: CodeableConcept;
        /**
         * Contract Target Entity
         */
        subject?: Reference[];
        /**
         * Authority under which this Contract has standing
         */
        authority?: Reference[];
        /**
         * A sphere of control governed by an authoritative jurisdiction, organization, or person
         */
        domain?: Reference[];
        /**
         * Specific Location
         */
        site?: Reference[];
        /**
         * Computer friendly designation
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Human Friendly name
         */
        title?: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
        /**
         * Subordinate Friendly name
         */
        subtitle?: string;
        /**
         * Contains extended information for property 'subtitle'.
         */
        _subtitle?: Element;
        /**
         * Acronym or short name
         */
        alias?: string[];
        /**
         * Contains extended information for property 'alias'.
         */
        _alias?: Element[];
        /**
         * Source of Contract
         */
        author?: Reference;
        /**
         * Range of Legal Concerns
         */
        scope?: CodeableConcept;
        /**
         * Focus of contract interest
         */
        topicCodeableConcept?: CodeableConcept;
        /**
         * Focus of contract interest
         */
        topicReference?: Reference;
        /**
         * Legal instrument category
         */
        type?: CodeableConcept;
        /**
         * Subtype within the context of type
         */
        subType?: CodeableConcept[];
        /**
         * Contract precursor content
         */
        contentDefinition?: ContractContentDefinition;
        /**
         * Contract Term List
         */
        term?: ContractTerm[];
        /**
         * Extra Information
         */
        supportingInfo?: Reference[];
        /**
         * Key event in Contract History
         */
        relevantHistory?: Reference[];
        /**
         * Contract Signatory
         */
        signer?: ContractSigner[];
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
        /**
         * Binding Contract
         */
        legallyBindingAttachment?: Attachment;
        /**
         * Binding Contract
         */
        legallyBindingReference?: Reference;
    }
    /**
     * Additional coverage classifications
     */
    interface CoverageClass extends BackboneElement {
        /**
         * Type of class such as 'group' or 'plan'
         */
        type: CodeableConcept;
        /**
         * Value associated with the type
         */
        value: string;
        /**
         * Contains extended information for property 'value'.
         */
        _value?: Element;
        /**
         * Human readable description of the type and value
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
    }
    /**
     * Patient payments for services/products
     */
    interface CoverageCostToBeneficiary extends BackboneElement {
        /**
         * Cost category
         */
        type?: CodeableConcept;
        /**
         * The amount or percentage due from the beneficiary
         */
        valueQuantity?: Quantity;
        /**
         * The amount or percentage due from the beneficiary
         */
        valueMoney?: Money;
        /**
         * Exceptions for patient payments
         */
        exception?: CoverageCostToBeneficiaryException[];
    }
    /**
     * Exceptions for patient payments
     */
    interface CoverageCostToBeneficiaryException extends BackboneElement {
        /**
         * Exception category
         */
        type: CodeableConcept;
        /**
         * The effective period of the exception
         */
        period?: Period;
    }
    /**
     * Insurance or medical plan or a payment agreement
     */
    interface Coverage extends DomainResource {
        /**
         * Business Identifier for the coverage
         */
        identifier?: Identifier[];
        /**
         * active | cancelled | draft | entered-in-error
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Coverage category such as medical or accident
         */
        type?: CodeableConcept;
        /**
         * Owner of the policy
         */
        policyHolder?: Reference;
        /**
         * Subscriber to the policy
         */
        subscriber?: Reference;
        /**
         * ID assigned to the subscriber
         */
        subscriberId?: string;
        /**
         * Contains extended information for property 'subscriberId'.
         */
        _subscriberId?: Element;
        /**
         * Plan beneficiary
         */
        beneficiary: Reference;
        /**
         * Dependent number
         */
        dependent?: string;
        /**
         * Contains extended information for property 'dependent'.
         */
        _dependent?: Element;
        /**
         * Beneficiary relationship to the subscriber
         */
        relationship?: CodeableConcept;
        /**
         * Coverage start and end dates
         */
        period?: Period;
        /**
         * Issuer of the policy
         */
        payor: Reference[];
        /**
         * Additional coverage classifications
         */
        class?: CoverageClass[];
        /**
         * Relative order of the coverage
         */
        order?: positiveInt;
        /**
         * Contains extended information for property 'order'.
         */
        _order?: Element;
        /**
         * Insurer network
         */
        network?: string;
        /**
         * Contains extended information for property 'network'.
         */
        _network?: Element;
        /**
         * Patient payments for services/products
         */
        costToBeneficiary?: CoverageCostToBeneficiary[];
        /**
         * Reimbursement to insurer
         */
        subrogation?: boolean;
        /**
         * Contains extended information for property 'subrogation'.
         */
        _subrogation?: Element;
        /**
         * Contract details
         */
        contract?: Reference[];
    }
    /**
     * Supporting information
     */
    interface CoverageEligibilityRequestSupportingInfo extends BackboneElement {
        /**
         * Information instance identifier
         */
        sequence: positiveInt;
        /**
         * Contains extended information for property 'sequence'.
         */
        _sequence?: Element;
        /**
         * Data to be provided
         */
        information: Reference;
        /**
         * Applies to all items
         */
        appliesToAll?: boolean;
        /**
         * Contains extended information for property 'appliesToAll'.
         */
        _appliesToAll?: Element;
    }
    /**
     * Patient insurance information
     */
    interface CoverageEligibilityRequestInsurance extends BackboneElement {
        /**
         * Applicable coverage
         */
        focal?: boolean;
        /**
         * Contains extended information for property 'focal'.
         */
        _focal?: Element;
        /**
         * Insurance information
         */
        coverage: Reference;
        /**
         * Additional provider contract number
         */
        businessArrangement?: string;
        /**
         * Contains extended information for property 'businessArrangement'.
         */
        _businessArrangement?: Element;
    }
    /**
     * Item to be evaluated for eligibiity
     */
    interface CoverageEligibilityRequestItem extends BackboneElement {
        /**
         * Applicable exception or supporting information
         */
        supportingInfoSequence?: positiveInt[];
        /**
         * Contains extended information for property 'supportingInfoSequence'.
         */
        _supportingInfoSequence?: Element[];
        /**
         * Benefit classification
         */
        category?: CodeableConcept;
        /**
         * Billing, service, product, or drug code
         */
        productOrService?: CodeableConcept;
        /**
         * Product or service billing modifiers
         */
        modifier?: CodeableConcept[];
        /**
         * Perfoming practitioner
         */
        provider?: Reference;
        /**
         * Count of products or services
         */
        quantity?: Quantity;
        /**
         * Fee, charge or cost per item
         */
        unitPrice?: Money;
        /**
         * Servicing facility
         */
        facility?: Reference;
        /**
         * Applicable diagnosis
         */
        diagnosis?: CoverageEligibilityRequestItemDiagnosis[];
        /**
         * Product or service details
         */
        detail?: Reference[];
    }
    /**
     * Applicable diagnosis
     */
    interface CoverageEligibilityRequestItemDiagnosis extends BackboneElement {
        /**
         * Nature of illness or problem
         */
        diagnosisCodeableConcept?: CodeableConcept;
        /**
         * Nature of illness or problem
         */
        diagnosisReference?: Reference;
    }
    /**
     * CoverageEligibilityRequest resource
     */
    interface CoverageEligibilityRequest extends DomainResource {
        /**
         * Business Identifier for coverage eligiblity request
         */
        identifier?: Identifier[];
        /**
         * active | cancelled | draft | entered-in-error
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Desired processing priority
         */
        priority?: CodeableConcept;
        /**
         * auth-requirements | benefits | discovery | validation
         */
        purpose: code[];
        /**
         * Contains extended information for property 'purpose'.
         */
        _purpose?: Element[];
        /**
         * Intended recipient of products and services
         */
        patient: Reference;
        /**
         * Estimated date or dates of service
         */
        servicedDate?: date;
        /**
         * Contains extended information for property 'servicedDate'.
         */
        _servicedDate?: Element;
        /**
         * Estimated date or dates of service
         */
        servicedPeriod?: Period;
        /**
         * Creation date
         */
        created: dateTime;
        /**
         * Contains extended information for property 'created'.
         */
        _created?: Element;
        /**
         * Author
         */
        enterer?: Reference;
        /**
         * Party responsible for the request
         */
        provider?: Reference;
        /**
         * Coverage issuer
         */
        insurer: Reference;
        /**
         * Servicing facility
         */
        facility?: Reference;
        /**
         * Supporting information
         */
        supportingInfo?: CoverageEligibilityRequestSupportingInfo[];
        /**
         * Patient insurance information
         */
        insurance?: CoverageEligibilityRequestInsurance[];
        /**
         * Item to be evaluated for eligibiity
         */
        item?: CoverageEligibilityRequestItem[];
    }
    /**
     * Patient insurance information
     */
    interface CoverageEligibilityResponseInsurance extends BackboneElement {
        /**
         * Insurance information
         */
        coverage: Reference;
        /**
         * Coverage inforce indicator
         */
        inforce?: boolean;
        /**
         * Contains extended information for property 'inforce'.
         */
        _inforce?: Element;
        /**
         * When the benefits are applicable
         */
        benefitPeriod?: Period;
        /**
         * Benefits and authorization details
         */
        item?: CoverageEligibilityResponseInsuranceItem[];
    }
    /**
     * Benefits and authorization details
     */
    interface CoverageEligibilityResponseInsuranceItem extends BackboneElement {
        /**
         * Benefit classification
         */
        category?: CodeableConcept;
        /**
         * Billing, service, product, or drug code
         */
        productOrService?: CodeableConcept;
        /**
         * Product or service billing modifiers
         */
        modifier?: CodeableConcept[];
        /**
         * Performing practitioner
         */
        provider?: Reference;
        /**
         * Excluded from the plan
         */
        excluded?: boolean;
        /**
         * Contains extended information for property 'excluded'.
         */
        _excluded?: Element;
        /**
         * Short name for the benefit
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Description of the benefit or services covered
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * In or out of network
         */
        network?: CodeableConcept;
        /**
         * Individual or family
         */
        unit?: CodeableConcept;
        /**
         * Annual or lifetime
         */
        term?: CodeableConcept;
        /**
         * Benefit Summary
         */
        benefit?: CoverageEligibilityResponseInsuranceItemBenefit[];
        /**
         * Authorization required flag
         */
        authorizationRequired?: boolean;
        /**
         * Contains extended information for property 'authorizationRequired'.
         */
        _authorizationRequired?: Element;
        /**
         * Type of required supporting materials
         */
        authorizationSupporting?: CodeableConcept[];
        /**
         * Preauthorization requirements endpoint
         */
        authorizationUrl?: uri;
        /**
         * Contains extended information for property 'authorizationUrl'.
         */
        _authorizationUrl?: Element;
    }
    /**
     * Benefit Summary
     */
    interface CoverageEligibilityResponseInsuranceItemBenefit extends BackboneElement {
        /**
         * Benefit classification
         */
        type: CodeableConcept;
        /**
         * Benefits allowed
         */
        allowedUnsignedInt?: unsignedInt;
        /**
         * Contains extended information for property 'allowedUnsignedInt'.
         */
        _allowedUnsignedInt?: Element;
        /**
         * Benefits allowed
         */
        allowedString?: string;
        /**
         * Contains extended information for property 'allowedString'.
         */
        _allowedString?: Element;
        /**
         * Benefits allowed
         */
        allowedMoney?: Money;
        /**
         * Benefits used
         */
        usedUnsignedInt?: unsignedInt;
        /**
         * Contains extended information for property 'usedUnsignedInt'.
         */
        _usedUnsignedInt?: Element;
        /**
         * Benefits used
         */
        usedString?: string;
        /**
         * Contains extended information for property 'usedString'.
         */
        _usedString?: Element;
        /**
         * Benefits used
         */
        usedMoney?: Money;
    }
    /**
     * Processing errors
     */
    interface CoverageEligibilityResponseError extends BackboneElement {
        /**
         * Error code detailing processing issues
         */
        code: CodeableConcept;
    }
    /**
     * CoverageEligibilityResponse resource
     */
    interface CoverageEligibilityResponse extends DomainResource {
        /**
         * Business Identifier for coverage eligiblity request
         */
        identifier?: Identifier[];
        /**
         * active | cancelled | draft | entered-in-error
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * auth-requirements | benefits | discovery | validation
         */
        purpose: code[];
        /**
         * Contains extended information for property 'purpose'.
         */
        _purpose?: Element[];
        /**
         * Intended recipient of products and services
         */
        patient: Reference;
        /**
         * Estimated date or dates of service
         */
        servicedDate?: date;
        /**
         * Contains extended information for property 'servicedDate'.
         */
        _servicedDate?: Element;
        /**
         * Estimated date or dates of service
         */
        servicedPeriod?: Period;
        /**
         * Response creation date
         */
        created: dateTime;
        /**
         * Contains extended information for property 'created'.
         */
        _created?: Element;
        /**
         * Party responsible for the request
         */
        requestor?: Reference;
        /**
         * Eligibility request reference
         */
        request: Reference;
        /**
         * queued | complete | error | partial
         */
        outcome: code;
        /**
         * Contains extended information for property 'outcome'.
         */
        _outcome?: Element;
        /**
         * Disposition Message
         */
        disposition?: string;
        /**
         * Contains extended information for property 'disposition'.
         */
        _disposition?: Element;
        /**
         * Coverage issuer
         */
        insurer: Reference;
        /**
         * Patient insurance information
         */
        insurance?: CoverageEligibilityResponseInsurance[];
        /**
         * Preauthorization reference
         */
        preAuthRef?: string;
        /**
         * Contains extended information for property 'preAuthRef'.
         */
        _preAuthRef?: Element;
        /**
         * Printed form identifier
         */
        form?: CodeableConcept;
        /**
         * Processing errors
         */
        error?: CoverageEligibilityResponseError[];
    }
    /**
     * Supporting evidence
     */
    interface DetectedIssueEvidence extends BackboneElement {
        /**
         * Manifestation
         */
        code?: CodeableConcept[];
        /**
         * Supporting information
         */
        detail?: Reference[];
    }
    /**
     * Step taken to address
     */
    interface DetectedIssueMitigation extends BackboneElement {
        /**
         * What mitigation?
         */
        action: CodeableConcept;
        /**
         * Date committed
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
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
         * Unique id for the detected issue
         */
        identifier?: Identifier[];
        /**
         * registered | preliminary | final | amended +
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Issue Category, e.g. drug-drug, duplicate therapy, etc.
         */
        code?: CodeableConcept;
        /**
         * high | moderate | low
         */
        severity?: code;
        /**
         * Contains extended information for property 'severity'.
         */
        _severity?: Element;
        /**
         * Associated patient
         */
        patient?: Reference;
        /**
         * When identified
         */
        identifiedDateTime?: dateTime;
        /**
         * Contains extended information for property 'identifiedDateTime'.
         */
        _identifiedDateTime?: Element;
        /**
         * When identified
         */
        identifiedPeriod?: Period;
        /**
         * The provider or device that identified the issue
         */
        author?: Reference;
        /**
         * Problem resource
         */
        implicated?: Reference[];
        /**
         * Supporting evidence
         */
        evidence?: DetectedIssueEvidence[];
        /**
         * Description and context
         */
        detail?: string;
        /**
         * Contains extended information for property 'detail'.
         */
        _detail?: Element;
        /**
         * Authority for issue
         */
        reference?: uri;
        /**
         * Contains extended information for property 'reference'.
         */
        _reference?: Element;
        /**
         * Step taken to address
         */
        mitigation?: DetectedIssueMitigation[];
    }
    /**
     * Unique Device Identifier (UDI) Barcode string
     */
    interface DeviceUdiCarrier extends BackboneElement {
        /**
         * Mandatory fixed portion of UDI
         */
        deviceIdentifier?: string;
        /**
         * Contains extended information for property 'deviceIdentifier'.
         */
        _deviceIdentifier?: Element;
        /**
         * UDI Issuing Organization
         */
        issuer?: uri;
        /**
         * Contains extended information for property 'issuer'.
         */
        _issuer?: Element;
        /**
         * Regional UDI authority
         */
        jurisdiction?: uri;
        /**
         * Contains extended information for property 'jurisdiction'.
         */
        _jurisdiction?: Element;
        /**
         * UDI Machine Readable Barcode String
         */
        carrierAIDC?: base64Binary;
        /**
         * Contains extended information for property 'carrierAIDC'.
         */
        _carrierAIDC?: Element;
        /**
         * UDI Human Readable Barcode String
         */
        carrierHRF?: string;
        /**
         * Contains extended information for property 'carrierHRF'.
         */
        _carrierHRF?: Element;
        /**
         * barcode | rfid | manual +
         */
        entryType?: code;
        /**
         * Contains extended information for property 'entryType'.
         */
        _entryType?: Element;
    }
    /**
     * The name of the device as given by the manufacturer
     */
    interface DeviceDeviceName extends BackboneElement {
        /**
         * The name of the device
         */
        name: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * udi-label-name | user-friendly-name | patient-reported-name | manufacturer-name | model-name | other
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
    }
    /**
     * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication
     */
    interface DeviceSpecialization extends BackboneElement {
        /**
         * The standard that is used to operate and communicate
         */
        systemType: CodeableConcept;
        /**
         * The version of the standard that is used to operate and communicate
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
    }
    /**
     * The actual design of the device or software version running on the device
     */
    interface DeviceVersion extends BackboneElement {
        /**
         * The type of the device version
         */
        type?: CodeableConcept;
        /**
         * A single component of the device version
         */
        component?: Identifier;
        /**
         * The version text
         */
        value: string;
        /**
         * Contains extended information for property 'value'.
         */
        _value?: Element;
    }
    /**
     * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties
     */
    interface DeviceProperty extends BackboneElement {
        /**
         * Code that specifies the property DeviceDefinitionPropetyCode (Extensible)
         */
        type: CodeableConcept;
        /**
         * Property value as a quantity
         */
        valueQuantity?: Quantity[];
        /**
         * Property value as a code, e.g., NTP4 (synced to NTP)
         */
        valueCode?: CodeableConcept[];
    }
    /**
     * Item used in healthcare
     */
    interface Device extends DomainResource {
        /**
         * Instance identifier
         */
        identifier?: Identifier[];
        /**
         * The reference to the definition for the device
         */
        definition?: Reference;
        /**
         * Unique Device Identifier (UDI) Barcode string
         */
        udiCarrier?: DeviceUdiCarrier[];
        /**
         * active | inactive | entered-in-error | unknown
         */
        status?: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * online | paused | standby | offline | not-ready | transduc-discon | hw-discon | off
         */
        statusReason?: CodeableConcept[];
        /**
         * The distinct identification string
         */
        distinctIdentifier?: string;
        /**
         * Contains extended information for property 'distinctIdentifier'.
         */
        _distinctIdentifier?: Element;
        /**
         * Name of device manufacturer
         */
        manufacturer?: string;
        /**
         * Contains extended information for property 'manufacturer'.
         */
        _manufacturer?: Element;
        /**
         * Date when the device was made
         */
        manufactureDate?: dateTime;
        /**
         * Contains extended information for property 'manufactureDate'.
         */
        _manufactureDate?: Element;
        /**
         * Date and time of expiry of this device (if applicable)
         */
        expirationDate?: dateTime;
        /**
         * Contains extended information for property 'expirationDate'.
         */
        _expirationDate?: Element;
        /**
         * Lot number of manufacture
         */
        lotNumber?: string;
        /**
         * Contains extended information for property 'lotNumber'.
         */
        _lotNumber?: Element;
        /**
         * Serial number assigned by the manufacturer
         */
        serialNumber?: string;
        /**
         * Contains extended information for property 'serialNumber'.
         */
        _serialNumber?: Element;
        /**
         * The name of the device as given by the manufacturer
         */
        deviceName?: DeviceDeviceName[];
        /**
         * The model number for the device
         */
        modelNumber?: string;
        /**
         * Contains extended information for property 'modelNumber'.
         */
        _modelNumber?: Element;
        /**
         * The part number of the device
         */
        partNumber?: string;
        /**
         * Contains extended information for property 'partNumber'.
         */
        _partNumber?: Element;
        /**
         * The kind or type of device
         */
        type?: CodeableConcept;
        /**
         * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication
         */
        specialization?: DeviceSpecialization[];
        /**
         * The actual design of the device or software version running on the device
         */
        version?: DeviceVersion[];
        /**
         * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties
         */
        property?: DeviceProperty[];
        /**
         * Patient to whom Device is affixed
         */
        patient?: Reference;
        /**
         * Organization responsible for device
         */
        owner?: Reference;
        /**
         * Details for human/organization for support
         */
        contact?: ContactPoint[];
        /**
         * Where the device is found
         */
        location?: Reference;
        /**
         * Network address to contact device
         */
        url?: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Device notes and comments
         */
        note?: Annotation[];
        /**
         * Safety Characteristics of Device
         */
        safety?: CodeableConcept[];
        /**
         * The parent device
         */
        parent?: Reference;
    }
    /**
     * Unique Device Identifier (UDI) Barcode string
     */
    interface DeviceDefinitionUdiDeviceIdentifier extends BackboneElement {
        /**
         * The identifier that is to be associated with every Device that references this DeviceDefintiion for the issuer and jurisdication porvided in the DeviceDefinition.udiDeviceIdentifier
         */
        deviceIdentifier: string;
        /**
         * Contains extended information for property 'deviceIdentifier'.
         */
        _deviceIdentifier?: Element;
        /**
         * The organization that assigns the identifier algorithm
         */
        issuer: uri;
        /**
         * Contains extended information for property 'issuer'.
         */
        _issuer?: Element;
        /**
         * The jurisdiction to which the deviceIdentifier applies
         */
        jurisdiction: uri;
        /**
         * Contains extended information for property 'jurisdiction'.
         */
        _jurisdiction?: Element;
    }
    /**
     * A name given to the device to identify it
     */
    interface DeviceDefinitionDeviceName extends BackboneElement {
        /**
         * The name of the device
         */
        name: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * udi-label-name | user-friendly-name | patient-reported-name | manufacturer-name | model-name | other
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
    }
    /**
     * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication
     */
    interface DeviceDefinitionSpecialization extends BackboneElement {
        /**
         * The standard that is used to operate and communicate
         */
        systemType: string;
        /**
         * Contains extended information for property 'systemType'.
         */
        _systemType?: Element;
        /**
         * The version of the standard that is used to operate and communicate
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
    }
    /**
     * The shelf-life and storage information for a medicinal product item or container can be described using this class
     */
    interface ProductShelfLife extends BackboneElement {
        /**
         * Unique identifier for the packaged Medicinal Product
         */
        identifier?: Identifier;
        /**
         * This describes the shelf life, taking into account various scenarios such as shelf life of the packaged Medicinal Product itself, shelf life after transformation where necessary and shelf life after the first opening of a bottle, etc. The shelf life type shall be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified
         */
        type: CodeableConcept;
        /**
         * The shelf life time period can be specified using a numerical value for the period of time and its unit of time measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used
         */
        period: Quantity;
        /**
         * Special precautions for storage, if any, can be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified
         */
        specialPrecautionsForStorage?: CodeableConcept[];
    }
    /**
     * The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available
     */
    interface ProdCharacteristic extends BackboneElement {
        /**
         * Where applicable, the height can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used
         */
        height?: Quantity;
        /**
         * Where applicable, the width can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used
         */
        width?: Quantity;
        /**
         * Where applicable, the depth can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used
         */
        depth?: Quantity;
        /**
         * Where applicable, the weight can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used
         */
        weight?: Quantity;
        /**
         * Where applicable, the nominal volume can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used
         */
        nominalVolume?: Quantity;
        /**
         * Where applicable, the external diameter can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used
         */
        externalDiameter?: Quantity;
        /**
         * Where applicable, the shape can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used
         */
        shape?: string;
        /**
         * Contains extended information for property 'shape'.
         */
        _shape?: Element;
        /**
         * Where applicable, the color can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used
         */
        color?: string[];
        /**
         * Contains extended information for property 'color'.
         */
        _color?: Element[];
        /**
         * Where applicable, the imprint can be specified as text
         */
        imprint?: string[];
        /**
         * Contains extended information for property 'imprint'.
         */
        _imprint?: Element[];
        /**
         * Where applicable, the image can be provided The format of the image attachment shall be specified by regional implementations
         */
        image?: Attachment[];
        /**
         * Where applicable, the scoring can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used
         */
        scoring?: CodeableConcept;
    }
    /**
     * Device capabilities
     */
    interface DeviceDefinitionCapability extends BackboneElement {
        /**
         * Type of capability
         */
        type: CodeableConcept;
        /**
         * Description of capability
         */
        description?: CodeableConcept[];
    }
    /**
     * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties
     */
    interface DeviceDefinitionProperty extends BackboneElement {
        /**
         * Code that specifies the property DeviceDefinitionPropetyCode (Extensible)
         */
        type: CodeableConcept;
        /**
         * Property value as a quantity
         */
        valueQuantity?: Quantity[];
        /**
         * Property value as a code, e.g., NTP4 (synced to NTP)
         */
        valueCode?: CodeableConcept[];
    }
    /**
     * A substance used to create the material(s) of which the device is made
     */
    interface DeviceDefinitionMaterial extends BackboneElement {
        /**
         * The substance
         */
        substance: CodeableConcept;
        /**
         * Indicates an alternative material of the device
         */
        alternate?: boolean;
        /**
         * Contains extended information for property 'alternate'.
         */
        _alternate?: Element;
        /**
         * Whether the substance is a known or suspected allergen
         */
        allergenicIndicator?: boolean;
        /**
         * Contains extended information for property 'allergenicIndicator'.
         */
        _allergenicIndicator?: Element;
    }
    /**
     * An instance of a medical-related component of a medical device
     */
    interface DeviceDefinition extends DomainResource {
        /**
         * Instance identifier
         */
        identifier?: Identifier[];
        /**
         * Unique Device Identifier (UDI) Barcode string
         */
        udiDeviceIdentifier?: DeviceDefinitionUdiDeviceIdentifier[];
        /**
         * Name of device manufacturer
         */
        manufacturerString?: string;
        /**
         * Contains extended information for property 'manufacturerString'.
         */
        _manufacturerString?: Element;
        /**
         * Name of device manufacturer
         */
        manufacturerReference?: Reference;
        /**
         * A name given to the device to identify it
         */
        deviceName?: DeviceDefinitionDeviceName[];
        /**
         * The model number for the device
         */
        modelNumber?: string;
        /**
         * Contains extended information for property 'modelNumber'.
         */
        _modelNumber?: Element;
        /**
         * What kind of device or device system this is
         */
        type?: CodeableConcept;
        /**
         * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication
         */
        specialization?: DeviceDefinitionSpecialization[];
        /**
         * Available versions
         */
        version?: string[];
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element[];
        /**
         * Safety characteristics of the device
         */
        safety?: CodeableConcept[];
        /**
         * Shelf Life and storage information
         */
        shelfLifeStorage?: ProductShelfLife[];
        /**
         * Dimensions, color etc.
         */
        physicalCharacteristics?: ProdCharacteristic;
        /**
         * Language code for the human-readable text strings produced by the device (all supported)
         */
        languageCode?: CodeableConcept[];
        /**
         * Device capabilities
         */
        capability?: DeviceDefinitionCapability[];
        /**
         * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties
         */
        property?: DeviceDefinitionProperty[];
        /**
         * Organization responsible for device
         */
        owner?: Reference;
        /**
         * Details for human/organization for support
         */
        contact?: ContactPoint[];
        /**
         * Network address to contact device
         */
        url?: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Access to on-line information
         */
        onlineInformation?: uri;
        /**
         * Contains extended information for property 'onlineInformation'.
         */
        _onlineInformation?: Element;
        /**
         * Device notes and comments
         */
        note?: Annotation[];
        /**
         * The quantity of the device present in the packaging (e.g. the number of devices present in a pack, or the number of devices in the same package of the medicinal product)
         */
        quantity?: Quantity;
        /**
         * The parent device it can be part of
         */
        parentDevice?: Reference;
        /**
         * A substance used to create the material(s) of which the device is made
         */
        material?: DeviceDefinitionMaterial[];
    }
    /**
     * Describes the calibrations that have been performed or that are required to be performed
     */
    interface DeviceMetricCalibration extends BackboneElement {
        /**
         * unspecified | offset | gain | two-point
         */
        type?: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * not-calibrated | calibration-required | calibrated | unspecified
         */
        state?: code;
        /**
         * Contains extended information for property 'state'.
         */
        _state?: Element;
        /**
         * Describes the time last calibration has been performed
         */
        time?: instant;
        /**
         * Contains extended information for property 'time'.
         */
        _time?: Element;
    }
    /**
     * Measurement, calculation or setting capability of a medical device
     */
    interface DeviceMetric extends DomainResource {
        /**
         * Instance identifier
         */
        identifier?: Identifier[];
        /**
         * Identity of metric, for example Heart Rate or PEEP Setting
         */
        type: CodeableConcept;
        /**
         * Unit of Measure for the Metric
         */
        unit?: CodeableConcept;
        /**
         * Describes the link to the source Device
         */
        source?: Reference;
        /**
         * Describes the link to the parent Device
         */
        parent?: Reference;
        /**
         * on | off | standby | entered-in-error
         */
        operationalStatus?: code;
        /**
         * Contains extended information for property 'operationalStatus'.
         */
        _operationalStatus?: Element;
        /**
         * black | red | green | yellow | blue | magenta | cyan | white
         */
        color?: code;
        /**
         * Contains extended information for property 'color'.
         */
        _color?: Element;
        /**
         * measurement | setting | calculation | unspecified
         */
        category: code;
        /**
         * Contains extended information for property 'category'.
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
     * Device details
     */
    interface DeviceRequestParameter extends BackboneElement {
        /**
         * Device detail
         */
        code?: CodeableConcept;
        /**
         * Value of detail
         */
        valueCodeableConcept?: CodeableConcept;
        /**
         * Value of detail
         */
        valueQuantity?: Quantity;
        /**
         * Value of detail
         */
        valueRange?: Range;
        /**
         * Value of detail
         */
        valueBoolean?: boolean;
        /**
         * Contains extended information for property 'valueBoolean'.
         */
        _valueBoolean?: Element;
    }
    /**
     * Medical device request
     */
    interface DeviceRequest extends DomainResource {
        /**
         * External Request identifier
         */
        identifier?: Identifier[];
        /**
         * Instantiates FHIR protocol or definition
         */
        instantiatesCanonical?: canonical[];
        /**
         * Contains extended information for property 'instantiatesCanonical'.
         */
        _instantiatesCanonical?: Element[];
        /**
         * Instantiates external protocol or definition
         */
        instantiatesUri?: uri[];
        /**
         * Contains extended information for property 'instantiatesUri'.
         */
        _instantiatesUri?: Element[];
        /**
         * What request fulfills
         */
        basedOn?: Reference[];
        /**
         * What request replaces
         */
        priorRequest?: Reference[];
        /**
         * Identifier of composite request
         */
        groupIdentifier?: Identifier;
        /**
         * draft | active | on-hold | revoked | completed | entered-in-error | unknown
         */
        status?: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option
         */
        intent: code;
        /**
         * Contains extended information for property 'intent'.
         */
        _intent?: Element;
        /**
         * routine | urgent | asap | stat
         */
        priority?: code;
        /**
         * Contains extended information for property 'priority'.
         */
        _priority?: Element;
        /**
         * Device requested
         */
        codeReference?: Reference;
        /**
         * Device requested
         */
        codeCodeableConcept?: CodeableConcept;
        /**
         * Device details
         */
        parameter?: DeviceRequestParameter[];
        /**
         * Focus of request
         */
        subject: Reference;
        /**
         * Encounter motivating request
         */
        encounter?: Reference;
        /**
         * Desired time or schedule for use
         */
        occurrenceDateTime?: dateTime;
        /**
         * Contains extended information for property 'occurrenceDateTime'.
         */
        _occurrenceDateTime?: Element;
        /**
         * Desired time or schedule for use
         */
        occurrencePeriod?: Period;
        /**
         * Desired time or schedule for use
         */
        occurrenceTiming?: Timing;
        /**
         * When recorded
         */
        authoredOn?: dateTime;
        /**
         * Contains extended information for property 'authoredOn'.
         */
        _authoredOn?: Element;
        /**
         * Who/what is requesting diagnostics
         */
        requester?: Reference;
        /**
         * Filler role
         */
        performerType?: CodeableConcept;
        /**
         * Requested Filler
         */
        performer?: Reference;
        /**
         * Coded Reason for request
         */
        reasonCode?: CodeableConcept[];
        /**
         * Linked Reason for request
         */
        reasonReference?: Reference[];
        /**
         * Associated insurance coverage
         */
        insurance?: Reference[];
        /**
         * Additional clinical information
         */
        supportingInfo?: Reference[];
        /**
         * Notes or comments
         */
        note?: Annotation[];
        /**
         * Request provenance
         */
        relevantHistory?: Reference[];
    }
    /**
     * Record of use of a device
     */
    interface DeviceUseStatement extends DomainResource {
        /**
         * External identifier for this record
         */
        identifier?: Identifier[];
        /**
         * Fulfills plan, proposal or order
         */
        basedOn?: Reference[];
        /**
         * active | completed | entered-in-error +
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Patient using device
         */
        subject: Reference;
        /**
         * Supporting information
         */
        derivedFrom?: Reference[];
        /**
         * How often  the device was used
         */
        timingTiming?: Timing;
        /**
         * How often  the device was used
         */
        timingPeriod?: Period;
        /**
         * How often  the device was used
         */
        timingDateTime?: dateTime;
        /**
         * Contains extended information for property 'timingDateTime'.
         */
        _timingDateTime?: Element;
        /**
         * When statement was recorded
         */
        recordedOn?: dateTime;
        /**
         * Contains extended information for property 'recordedOn'.
         */
        _recordedOn?: Element;
        /**
         * Who made the statement
         */
        source?: Reference;
        /**
         * Reference to device used
         */
        device: Reference;
        /**
         * Why device was used
         */
        reasonCode?: CodeableConcept[];
        /**
         * Why was DeviceUseStatement performed?
         */
        reasonReference?: Reference[];
        /**
         * Target body site
         */
        bodySite?: CodeableConcept;
        /**
         * Addition details (comments, instructions)
         */
        note?: Annotation[];
    }
    /**
     * Key images associated with this report
     */
    interface DiagnosticReportMedia extends BackboneElement {
        /**
         * Comment about the image (e.g. explanation)
         */
        comment?: string;
        /**
         * Contains extended information for property 'comment'.
         */
        _comment?: Element;
        /**
         * Reference to the image source
         */
        link: Reference;
    }
    /**
     * A Diagnostic report - a combination of request information, atomic results, images, interpretation, as well as formatted reports
     */
    interface DiagnosticReport extends DomainResource {
        /**
         * Business identifier for report
         */
        identifier?: Identifier[];
        /**
         * What was requested
         */
        basedOn?: Reference[];
        /**
         * registered | partial | preliminary | final +
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Service category
         */
        category?: CodeableConcept[];
        /**
         * Name/Code for this diagnostic report
         */
        code: CodeableConcept;
        /**
         * The subject of the report - usually, but not always, the patient
         */
        subject?: Reference;
        /**
         * Health care event when test ordered
         */
        encounter?: Reference;
        /**
         * Clinically relevant time/time-period for report
         */
        effectiveDateTime?: dateTime;
        /**
         * Contains extended information for property 'effectiveDateTime'.
         */
        _effectiveDateTime?: Element;
        /**
         * Clinically relevant time/time-period for report
         */
        effectivePeriod?: Period;
        /**
         * DateTime this version was made
         */
        issued?: instant;
        /**
         * Contains extended information for property 'issued'.
         */
        _issued?: Element;
        /**
         * Responsible Diagnostic Service
         */
        performer?: Reference[];
        /**
         * Primary result interpreter
         */
        resultsInterpreter?: Reference[];
        /**
         * Specimens this report is based on
         */
        specimen?: Reference[];
        /**
         * Observations
         */
        result?: Reference[];
        /**
         * Reference to full details of imaging associated with the diagnostic report
         */
        imagingStudy?: Reference[];
        /**
         * Key images associated with this report
         */
        media?: DiagnosticReportMedia[];
        /**
         * Clinical conclusion (interpretation) of test results
         */
        conclusion?: string;
        /**
         * Contains extended information for property 'conclusion'.
         */
        _conclusion?: Element;
        /**
         * Codes for the clinical conclusion of test results
         */
        conclusionCode?: CodeableConcept[];
        /**
         * Entire report as issued
         */
        presentedForm?: Attachment[];
    }
    /**
     * Related things
     */
    interface DocumentManifestRelated extends BackboneElement {
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
     * A list that defines a set of documents
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
         * current | superseded | entered-in-error
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Kind of document set
         */
        type?: CodeableConcept;
        /**
         * The subject of the set of documents
         */
        subject?: Reference;
        /**
         * When this document manifest created
         */
        created?: dateTime;
        /**
         * Contains extended information for property 'created'.
         */
        _created?: Element;
        /**
         * Who and/or what authored the DocumentManifest
         */
        author?: Reference[];
        /**
         * Intended to get notified about this set of documents
         */
        recipient?: Reference[];
        /**
         * The source system/application/software
         */
        source?: uri;
        /**
         * Contains extended information for property 'source'.
         */
        _source?: Element;
        /**
         * Human-readable description (title)
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Items in manifest
         */
        content: Reference[];
        /**
         * Related things
         */
        related?: DocumentManifestRelated[];
    }
    /**
     * Relationships to other documents
     */
    interface DocumentReferenceRelatesTo extends BackboneElement {
        /**
         * replaces | transforms | signs | appends
         */
        code: code;
        /**
         * Contains extended information for property 'code'.
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
    interface DocumentReferenceContent extends BackboneElement {
        /**
         * Where to access the document
         */
        attachment: Attachment;
        /**
         * Format/content rules for the document
         */
        format?: Coding;
    }
    /**
     * Clinical context of document
     */
    interface DocumentReferenceContext extends BackboneElement {
        /**
         * Context of the document  content
         */
        encounter?: Reference[];
        /**
         * Main clinical acts documented
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
        related?: Reference[];
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
         * current | superseded | entered-in-error
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * preliminary | final | amended | entered-in-error
         */
        docStatus?: code;
        /**
         * Contains extended information for property 'docStatus'.
         */
        _docStatus?: Element;
        /**
         * Kind of document (LOINC if possible)
         */
        type?: CodeableConcept;
        /**
         * Categorization of document
         */
        category?: CodeableConcept[];
        /**
         * Who/what is the subject of the document
         */
        subject?: Reference;
        /**
         * When this document reference was created
         */
        date?: instant;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Who and/or what authored the document
         */
        author?: Reference[];
        /**
         * Who/what authenticated the document
         */
        authenticator?: Reference;
        /**
         * Organization which maintains the document
         */
        custodian?: Reference;
        /**
         * Relationships to other documents
         */
        relatesTo?: DocumentReferenceRelatesTo[];
        /**
         * Human-readable description
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
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
     * What sample size was involved?
     */
    interface EffectEvidenceSynthesisSampleSize extends BackboneElement {
        /**
         * Description of sample size
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * How many studies?
         */
        numberOfStudies?: integer;
        /**
         * Contains extended information for property 'numberOfStudies'.
         */
        _numberOfStudies?: Element;
        /**
         * How many participants?
         */
        numberOfParticipants?: integer;
        /**
         * Contains extended information for property 'numberOfParticipants'.
         */
        _numberOfParticipants?: Element;
    }
    /**
     * What was the result per exposure?
     */
    interface EffectEvidenceSynthesisResultsByExposure extends BackboneElement {
        /**
         * Description of results by exposure
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * exposure | exposure-alternative
         */
        exposureState?: code;
        /**
         * Contains extended information for property 'exposureState'.
         */
        _exposureState?: Element;
        /**
         * Variant exposure states
         */
        variantState?: CodeableConcept;
        /**
         * Risk evidence synthesis
         */
        riskEvidenceSynthesis: Reference;
    }
    /**
     * What was the estimated effect
     */
    interface EffectEvidenceSynthesisEffectEstimate extends BackboneElement {
        /**
         * Description of effect estimate
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Type of efffect estimate
         */
        type?: CodeableConcept;
        /**
         * Variant exposure states
         */
        variantState?: CodeableConcept;
        /**
         * Point estimate
         */
        value?: decimal;
        /**
         * Contains extended information for property 'value'.
         */
        _value?: Element;
        /**
         * What unit is the outcome described in?
         */
        unitOfMeasure?: CodeableConcept;
        /**
         * How precise the estimate is
         */
        precisionEstimate?: EffectEvidenceSynthesisEffectEstimatePrecisionEstimate[];
    }
    /**
     * How precise the estimate is
     */
    interface EffectEvidenceSynthesisEffectEstimatePrecisionEstimate extends BackboneElement {
        /**
         * Type of precision estimate
         */
        type?: CodeableConcept;
        /**
         * Level of confidence interval
         */
        level?: decimal;
        /**
         * Contains extended information for property 'level'.
         */
        _level?: Element;
        /**
         * Lower bound
         */
        from?: decimal;
        /**
         * Contains extended information for property 'from'.
         */
        _from?: Element;
        /**
         * Upper bound
         */
        to?: decimal;
        /**
         * Contains extended information for property 'to'.
         */
        _to?: Element;
    }
    /**
     * How certain is the effect
     */
    interface EffectEvidenceSynthesisCertainty extends BackboneElement {
        /**
         * Certainty rating
         */
        rating?: CodeableConcept[];
        /**
         * Used for footnotes or explanatory notes
         */
        note?: Annotation[];
        /**
         * A component that contributes to the overall certainty
         */
        certaintySubcomponent?: EffectEvidenceSynthesisCertaintyCertaintySubcomponent[];
    }
    /**
     * A component that contributes to the overall certainty
     */
    interface EffectEvidenceSynthesisCertaintyCertaintySubcomponent extends BackboneElement {
        /**
         * Type of subcomponent of certainty rating
         */
        type?: CodeableConcept;
        /**
         * Subcomponent certainty rating
         */
        rating?: CodeableConcept[];
        /**
         * Used for footnotes or explanatory notes
         */
        note?: Annotation[];
    }
    /**
     * A quantified estimate of effect based on a body of evidence
     */
    interface EffectEvidenceSynthesis extends DomainResource {
        /**
         * Canonical identifier for this effect evidence synthesis, represented as a URI (globally unique)
         */
        url?: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Additional identifier for the effect evidence synthesis
         */
        identifier?: Identifier[];
        /**
         * Business version of the effect evidence synthesis
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
        /**
         * Name for this effect evidence synthesis (computer friendly)
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Name for this effect evidence synthesis (human friendly)
         */
        title?: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
        /**
         * draft | active | retired | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Date last changed
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Name of the publisher (organization or individual)
         */
        publisher?: string;
        /**
         * Contains extended information for property 'publisher'.
         */
        _publisher?: Element;
        /**
         * Contact details for the publisher
         */
        contact?: ContactDetail[];
        /**
         * Natural language description of the effect evidence synthesis
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Used for footnotes or explanatory notes
         */
        note?: Annotation[];
        /**
         * The context that the content is intended to support
         */
        useContext?: UsageContext[];
        /**
         * Intended jurisdiction for effect evidence synthesis (if applicable)
         */
        jurisdiction?: CodeableConcept[];
        /**
         * Use and/or publishing restrictions
         */
        copyright?: markdown;
        /**
         * Contains extended information for property 'copyright'.
         */
        _copyright?: Element;
        /**
         * When the effect evidence synthesis was approved by publisher
         */
        approvalDate?: date;
        /**
         * Contains extended information for property 'approvalDate'.
         */
        _approvalDate?: Element;
        /**
         * When the effect evidence synthesis was last reviewed
         */
        lastReviewDate?: date;
        /**
         * Contains extended information for property 'lastReviewDate'.
         */
        _lastReviewDate?: Element;
        /**
         * When the effect evidence synthesis is expected to be used
         */
        effectivePeriod?: Period;
        /**
         * The category of the EffectEvidenceSynthesis, such as Education, Treatment, Assessment, etc.
         */
        topic?: CodeableConcept[];
        /**
         * Who authored the content
         */
        author?: ContactDetail[];
        /**
         * Who edited the content
         */
        editor?: ContactDetail[];
        /**
         * Who reviewed the content
         */
        reviewer?: ContactDetail[];
        /**
         * Who endorsed the content
         */
        endorser?: ContactDetail[];
        /**
         * Additional documentation, citations, etc.
         */
        relatedArtifact?: RelatedArtifact[];
        /**
         * Type of synthesis
         */
        synthesisType?: CodeableConcept;
        /**
         * Type of study
         */
        studyType?: CodeableConcept;
        /**
         * What population?
         */
        population: Reference;
        /**
         * What exposure?
         */
        exposure: Reference;
        /**
         * What comparison exposure?
         */
        exposureAlternative: Reference;
        /**
         * What outcome?
         */
        outcome: Reference;
        /**
         * What sample size was involved?
         */
        sampleSize?: EffectEvidenceSynthesisSampleSize;
        /**
         * What was the result per exposure?
         */
        resultsByExposure?: EffectEvidenceSynthesisResultsByExposure[];
        /**
         * What was the estimated effect
         */
        effectEstimate?: EffectEvidenceSynthesisEffectEstimate[];
        /**
         * How certain is the effect
         */
        certainty?: EffectEvidenceSynthesisCertainty[];
    }
    /**
     * List of past encounter statuses
     */
    interface EncounterStatusHistory extends BackboneElement {
        /**
         * planned | arrived | triaged | in-progress | onleave | finished | cancelled +
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * The time that the episode was in the specified status
         */
        period: Period;
    }
    /**
     * List of past encounter classes
     */
    interface EncounterClassHistory extends BackboneElement {
        /**
         * inpatient | outpatient | ambulatory | emergency +
         */
        class: Coding;
        /**
         * The time that the episode was in the specified class
         */
        period: Period;
    }
    /**
     * List of participants involved in the encounter
     */
    interface EncounterParticipant extends BackboneElement {
        /**
         * Role of participant in encounter
         */
        type?: CodeableConcept[];
        /**
         * Period of time during the encounter that the participant participated
         */
        period?: Period;
        /**
         * Persons involved in the encounter other than the patient
         */
        individual?: Reference;
    }
    /**
     * The list of diagnosis relevant to this encounter
     */
    interface EncounterDiagnosis extends BackboneElement {
        /**
         * The diagnosis or procedure relevant to the encounter
         */
        condition: Reference;
        /**
         * Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …)
         */
        use?: CodeableConcept;
        /**
         * Ranking of the diagnosis (for each role type)
         */
        rank?: positiveInt;
        /**
         * Contains extended information for property 'rank'.
         */
        _rank?: Element;
    }
    /**
     * Details about the admission to a healthcare service
     */
    interface EncounterHospitalization extends BackboneElement {
        /**
         * Pre-admission identifier
         */
        preAdmissionIdentifier?: Identifier;
        /**
         * The location/organization from which the patient came before admission
         */
        origin?: Reference;
        /**
         * From where patient was admitted (physician referral, transfer)
         */
        admitSource?: CodeableConcept;
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
         * Wheelchair, translator, stretcher, etc.
         */
        specialArrangement?: CodeableConcept[];
        /**
         * Location/organization to which the patient is discharged
         */
        destination?: Reference;
        /**
         * Category or kind of location after discharge
         */
        dischargeDisposition?: CodeableConcept;
    }
    /**
     * List of locations where the patient has been
     */
    interface EncounterLocation extends BackboneElement {
        /**
         * Location the encounter takes place
         */
        location: Reference;
        /**
         * planned | active | reserved | completed
         */
        status?: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * The physical type of the location (usually the level in the location hierachy - bed room ward etc.)
         */
        physicalType?: CodeableConcept;
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
         * planned | arrived | triaged | in-progress | onleave | finished | cancelled +
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * List of past encounter statuses
         */
        statusHistory?: EncounterStatusHistory[];
        /**
         * Classification of patient encounter
         */
        class: Coding;
        /**
         * List of past encounter classes
         */
        classHistory?: EncounterClassHistory[];
        /**
         * Specific type of encounter
         */
        type?: CodeableConcept[];
        /**
         * Specific type of service
         */
        serviceType?: CodeableConcept;
        /**
         * Indicates the urgency of the encounter
         */
        priority?: CodeableConcept;
        /**
         * The patient or group present at the encounter
         */
        subject?: Reference;
        /**
         * Episode(s) of care that this encounter should be recorded against
         */
        episodeOfCare?: Reference[];
        /**
         * The ServiceRequest that initiated this encounter
         */
        basedOn?: Reference[];
        /**
         * List of participants involved in the encounter
         */
        participant?: EncounterParticipant[];
        /**
         * The appointment that scheduled this encounter
         */
        appointment?: Reference[];
        /**
         * The start and end time of the encounter
         */
        period?: Period;
        /**
         * Quantity of time the encounter lasted (less time absent)
         */
        length?: Duration;
        /**
         * Coded reason the encounter takes place
         */
        reasonCode?: CodeableConcept[];
        /**
         * Reason the encounter takes place (reference)
         */
        reasonReference?: Reference[];
        /**
         * The list of diagnosis relevant to this encounter
         */
        diagnosis?: EncounterDiagnosis[];
        /**
         * The set of accounts that may be used for billing for this Encounter
         */
        account?: Reference[];
        /**
         * Details about the admission to a healthcare service
         */
        hospitalization?: EncounterHospitalization;
        /**
         * List of locations where the patient has been
         */
        location?: EncounterLocation[];
        /**
         * The organization (facility) responsible for this encounter
         */
        serviceProvider?: Reference;
        /**
         * Another Encounter this encounter is part of
         */
        partOf?: Reference;
    }
    /**
     * The technical details of an endpoint that can be used for electronic services
     */
    interface Endpoint extends DomainResource {
        /**
         * Identifies this endpoint across multiple systems
         */
        identifier?: Identifier[];
        /**
         * active | suspended | error | off | entered-in-error | test
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Protocol/Profile/Standard to be used with this endpoint connection
         */
        connectionType: Coding;
        /**
         * A name that this endpoint can be identified by
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Organization that manages this endpoint (might not be the organization that exposes the endpoint)
         */
        managingOrganization?: Reference;
        /**
         * Contact details for source (e.g. troubleshooting)
         */
        contact?: ContactPoint[];
        /**
         * Interval the endpoint is expected to be operational
         */
        period?: Period;
        /**
         * The type of content that may be used at this endpoint (e.g. XDS Discharge summaries)
         */
        payloadType: CodeableConcept[];
        /**
         * Mimetype to send. If not specified, the content could be anything (including no payload, if the connectionType defined this)
         */
        payloadMimeType?: code[];
        /**
         * Contains extended information for property 'payloadMimeType'.
         */
        _payloadMimeType?: Element[];
        /**
         * The technical base address for connecting to this endpoint
         */
        address: url;
        /**
         * Contains extended information for property 'address'.
         */
        _address?: Element;
        /**
         * Usage depends on the channel type
         */
        header?: string[];
        /**
         * Contains extended information for property 'header'.
         */
        _header?: Element[];
    }
    /**
     * Enroll in coverage
     */
    interface EnrollmentRequest extends DomainResource {
        /**
         * Business Identifier
         */
        identifier?: Identifier[];
        /**
         * active | cancelled | draft | entered-in-error
         */
        status?: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Creation date
         */
        created?: dateTime;
        /**
         * Contains extended information for property 'created'.
         */
        _created?: Element;
        /**
         * Target
         */
        insurer?: Reference;
        /**
         * Responsible practitioner
         */
        provider?: Reference;
        /**
         * The subject to be enrolled
         */
        candidate?: Reference;
        /**
         * Insurance information
         */
        coverage?: Reference;
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
         * active | cancelled | draft | entered-in-error
         */
        status?: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Claim reference
         */
        request?: Reference;
        /**
         * queued | complete | error | partial
         */
        outcome?: code;
        /**
         * Contains extended information for property 'outcome'.
         */
        _outcome?: Element;
        /**
         * Disposition Message
         */
        disposition?: string;
        /**
         * Contains extended information for property 'disposition'.
         */
        _disposition?: Element;
        /**
         * Creation date
         */
        created?: dateTime;
        /**
         * Contains extended information for property 'created'.
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
    }
    /**
     * Past list of status codes (the current status may be included to cover the start date of the status)
     */
    interface EpisodeOfCareStatusHistory extends BackboneElement {
        /**
         * planned | waitlist | active | onhold | finished | cancelled | entered-in-error
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Duration the EpisodeOfCare was in the specified status
         */
        period: Period;
    }
    /**
     * The list of diagnosis relevant to this episode of care
     */
    interface EpisodeOfCareDiagnosis extends BackboneElement {
        /**
         * Conditions/problems/diagnoses this episode of care is for
         */
        condition: Reference;
        /**
         * Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge …)
         */
        role?: CodeableConcept;
        /**
         * Ranking of the diagnosis (for each role type)
         */
        rank?: positiveInt;
        /**
         * Contains extended information for property 'rank'.
         */
        _rank?: Element;
    }
    /**
     * An association of a Patient with an Organization and  Healthcare Provider(s) for a period of time that the Organization assumes some level of responsibility
     */
    interface EpisodeOfCare extends DomainResource {
        /**
         * Business Identifier(s) relevant for this EpisodeOfCare
         */
        identifier?: Identifier[];
        /**
         * planned | waitlist | active | onhold | finished | cancelled | entered-in-error
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Past list of status codes (the current status may be included to cover the start date of the status)
         */
        statusHistory?: EpisodeOfCareStatusHistory[];
        /**
         * Type/class  - e.g. specialist referral, disease management
         */
        type?: CodeableConcept[];
        /**
         * The list of diagnosis relevant to this episode of care
         */
        diagnosis?: EpisodeOfCareDiagnosis[];
        /**
         * The patient who is the focus of this episode of care
         */
        patient: Reference;
        /**
         * Organization that assumes care
         */
        managingOrganization?: Reference;
        /**
         * Interval during responsibility is assumed
         */
        period?: Period;
        /**
         * Originating Referral Request(s)
         */
        referralRequest?: Reference[];
        /**
         * Care manager/care coordinator for the patient
         */
        careManager?: Reference;
        /**
         * Other practitioners facilitating this episode of care
         */
        team?: Reference[];
        /**
         * The set of accounts that may be used for billing for this EpisodeOfCare
         */
        account?: Reference[];
    }
    /**
     * A description of when an event can occur
     */
    interface EventDefinition extends DomainResource {
        /**
         * Canonical identifier for this event definition, represented as a URI (globally unique)
         */
        url?: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Additional identifier for the event definition
         */
        identifier?: Identifier[];
        /**
         * Business version of the event definition
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
        /**
         * Name for this event definition (computer friendly)
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Name for this event definition (human friendly)
         */
        title?: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
        /**
         * Subordinate title of the event definition
         */
        subtitle?: string;
        /**
         * Contains extended information for property 'subtitle'.
         */
        _subtitle?: Element;
        /**
         * draft | active | retired | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * For testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Contains extended information for property 'experimental'.
         */
        _experimental?: Element;
        /**
         * Type of individual the event definition is focused on
         */
        subjectCodeableConcept?: CodeableConcept;
        /**
         * Type of individual the event definition is focused on
         */
        subjectReference?: Reference;
        /**
         * Date last changed
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Name of the publisher (organization or individual)
         */
        publisher?: string;
        /**
         * Contains extended information for property 'publisher'.
         */
        _publisher?: Element;
        /**
         * Contact details for the publisher
         */
        contact?: ContactDetail[];
        /**
         * Natural language description of the event definition
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * The context that the content is intended to support
         */
        useContext?: UsageContext[];
        /**
         * Intended jurisdiction for event definition (if applicable)
         */
        jurisdiction?: CodeableConcept[];
        /**
         * Why this event definition is defined
         */
        purpose?: markdown;
        /**
         * Contains extended information for property 'purpose'.
         */
        _purpose?: Element;
        /**
         * Describes the clinical usage of the event definition
         */
        usage?: string;
        /**
         * Contains extended information for property 'usage'.
         */
        _usage?: Element;
        /**
         * Use and/or publishing restrictions
         */
        copyright?: markdown;
        /**
         * Contains extended information for property 'copyright'.
         */
        _copyright?: Element;
        /**
         * When the event definition was approved by publisher
         */
        approvalDate?: date;
        /**
         * Contains extended information for property 'approvalDate'.
         */
        _approvalDate?: Element;
        /**
         * When the event definition was last reviewed
         */
        lastReviewDate?: date;
        /**
         * Contains extended information for property 'lastReviewDate'.
         */
        _lastReviewDate?: Element;
        /**
         * When the event definition is expected to be used
         */
        effectivePeriod?: Period;
        /**
         * E.g. Education, Treatment, Assessment, etc.
         */
        topic?: CodeableConcept[];
        /**
         * Who authored the content
         */
        author?: ContactDetail[];
        /**
         * Who edited the content
         */
        editor?: ContactDetail[];
        /**
         * Who reviewed the content
         */
        reviewer?: ContactDetail[];
        /**
         * Who endorsed the content
         */
        endorser?: ContactDetail[];
        /**
         * Additional documentation, citations, etc.
         */
        relatedArtifact?: RelatedArtifact[];
        /**
         * "when" the event occurs (multiple = 'or')
         */
        trigger: TriggerDefinition[];
    }
    /**
     * A research context or question
     */
    interface Evidence extends DomainResource {
        /**
         * Canonical identifier for this evidence, represented as a URI (globally unique)
         */
        url?: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Additional identifier for the evidence
         */
        identifier?: Identifier[];
        /**
         * Business version of the evidence
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
        /**
         * Name for this evidence (computer friendly)
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Name for this evidence (human friendly)
         */
        title?: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
        /**
         * Title for use in informal contexts
         */
        shortTitle?: string;
        /**
         * Contains extended information for property 'shortTitle'.
         */
        _shortTitle?: Element;
        /**
         * Subordinate title of the Evidence
         */
        subtitle?: string;
        /**
         * Contains extended information for property 'subtitle'.
         */
        _subtitle?: Element;
        /**
         * draft | active | retired | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Date last changed
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Name of the publisher (organization or individual)
         */
        publisher?: string;
        /**
         * Contains extended information for property 'publisher'.
         */
        _publisher?: Element;
        /**
         * Contact details for the publisher
         */
        contact?: ContactDetail[];
        /**
         * Natural language description of the evidence
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Used for footnotes or explanatory notes
         */
        note?: Annotation[];
        /**
         * The context that the content is intended to support
         */
        useContext?: UsageContext[];
        /**
         * Intended jurisdiction for evidence (if applicable)
         */
        jurisdiction?: CodeableConcept[];
        /**
         * Use and/or publishing restrictions
         */
        copyright?: markdown;
        /**
         * Contains extended information for property 'copyright'.
         */
        _copyright?: Element;
        /**
         * When the evidence was approved by publisher
         */
        approvalDate?: date;
        /**
         * Contains extended information for property 'approvalDate'.
         */
        _approvalDate?: Element;
        /**
         * When the evidence was last reviewed
         */
        lastReviewDate?: date;
        /**
         * Contains extended information for property 'lastReviewDate'.
         */
        _lastReviewDate?: Element;
        /**
         * When the evidence is expected to be used
         */
        effectivePeriod?: Period;
        /**
         * The category of the Evidence, such as Education, Treatment, Assessment, etc.
         */
        topic?: CodeableConcept[];
        /**
         * Who authored the content
         */
        author?: ContactDetail[];
        /**
         * Who edited the content
         */
        editor?: ContactDetail[];
        /**
         * Who reviewed the content
         */
        reviewer?: ContactDetail[];
        /**
         * Who endorsed the content
         */
        endorser?: ContactDetail[];
        /**
         * Additional documentation, citations, etc.
         */
        relatedArtifact?: RelatedArtifact[];
        /**
         * What population?
         */
        exposureBackground: Reference;
        /**
         * What exposure?
         */
        exposureVariant?: Reference[];
        /**
         * What outcome?
         */
        outcome?: Reference[];
    }
    /**
     * What defines the members of the evidence element
     */
    interface EvidenceVariableCharacteristic extends BackboneElement {
        /**
         * Natural language description of the characteristic
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * What code or expression defines members?
         */
        definitionReference?: Reference;
        /**
         * What code or expression defines members?
         */
        definitionCanonical?: canonical;
        /**
         * Contains extended information for property 'definitionCanonical'.
         */
        _definitionCanonical?: Element;
        /**
         * What code or expression defines members?
         */
        definitionCodeableConcept?: CodeableConcept;
        /**
         * What code or expression defines members?
         */
        definitionExpression?: Expression;
        /**
         * What code or expression defines members?
         */
        definitionDataRequirement?: DataRequirement;
        /**
         * What code or expression defines members?
         */
        definitionTriggerDefinition?: TriggerDefinition;
        /**
         * What code/value pairs define members?
         */
        usageContext?: UsageContext[];
        /**
         * Whether the characteristic includes or excludes members
         */
        exclude?: boolean;
        /**
         * Contains extended information for property 'exclude'.
         */
        _exclude?: Element;
        /**
         * What time period do participants cover
         */
        participantEffectiveDateTime?: dateTime;
        /**
         * Contains extended information for property 'participantEffectiveDateTime'.
         */
        _participantEffectiveDateTime?: Element;
        /**
         * What time period do participants cover
         */
        participantEffectivePeriod?: Period;
        /**
         * What time period do participants cover
         */
        participantEffectiveDuration?: Duration;
        /**
         * What time period do participants cover
         */
        participantEffectiveTiming?: Timing;
        /**
         * Observation time from study start
         */
        timeFromStart?: Duration;
        /**
         * mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median
         */
        groupMeasure?: code;
        /**
         * Contains extended information for property 'groupMeasure'.
         */
        _groupMeasure?: Element;
    }
    /**
     * A population, intervention, or exposure definition
     */
    interface EvidenceVariable extends DomainResource {
        /**
         * Canonical identifier for this evidence variable, represented as a URI (globally unique)
         */
        url?: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Additional identifier for the evidence variable
         */
        identifier?: Identifier[];
        /**
         * Business version of the evidence variable
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
        /**
         * Name for this evidence variable (computer friendly)
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Name for this evidence variable (human friendly)
         */
        title?: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
        /**
         * Title for use in informal contexts
         */
        shortTitle?: string;
        /**
         * Contains extended information for property 'shortTitle'.
         */
        _shortTitle?: Element;
        /**
         * Subordinate title of the EvidenceVariable
         */
        subtitle?: string;
        /**
         * Contains extended information for property 'subtitle'.
         */
        _subtitle?: Element;
        /**
         * draft | active | retired | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Date last changed
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Name of the publisher (organization or individual)
         */
        publisher?: string;
        /**
         * Contains extended information for property 'publisher'.
         */
        _publisher?: Element;
        /**
         * Contact details for the publisher
         */
        contact?: ContactDetail[];
        /**
         * Natural language description of the evidence variable
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Used for footnotes or explanatory notes
         */
        note?: Annotation[];
        /**
         * The context that the content is intended to support
         */
        useContext?: UsageContext[];
        /**
         * Intended jurisdiction for evidence variable (if applicable)
         */
        jurisdiction?: CodeableConcept[];
        /**
         * Use and/or publishing restrictions
         */
        copyright?: markdown;
        /**
         * Contains extended information for property 'copyright'.
         */
        _copyright?: Element;
        /**
         * When the evidence variable was approved by publisher
         */
        approvalDate?: date;
        /**
         * Contains extended information for property 'approvalDate'.
         */
        _approvalDate?: Element;
        /**
         * When the evidence variable was last reviewed
         */
        lastReviewDate?: date;
        /**
         * Contains extended information for property 'lastReviewDate'.
         */
        _lastReviewDate?: Element;
        /**
         * When the evidence variable is expected to be used
         */
        effectivePeriod?: Period;
        /**
         * The category of the EvidenceVariable, such as Education, Treatment, Assessment, etc.
         */
        topic?: CodeableConcept[];
        /**
         * Who authored the content
         */
        author?: ContactDetail[];
        /**
         * Who edited the content
         */
        editor?: ContactDetail[];
        /**
         * Who reviewed the content
         */
        reviewer?: ContactDetail[];
        /**
         * Who endorsed the content
         */
        endorser?: ContactDetail[];
        /**
         * Additional documentation, citations, etc.
         */
        relatedArtifact?: RelatedArtifact[];
        /**
         * dichotomous | continuous | descriptive
         */
        type?: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * What defines the members of the evidence element
         */
        characteristic: EvidenceVariableCharacteristic[];
    }
    /**
     * Actor participating in the resource
     */
    interface ExampleScenarioActor extends BackboneElement {
        /**
         * ID or acronym of the actor
         */
        actorId: string;
        /**
         * Contains extended information for property 'actorId'.
         */
        _actorId?: Element;
        /**
         * person | entity
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * The name of the actor as shown in the page
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * The description of the actor
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
    }
    /**
     * Each resource and each version that is present in the workflow
     */
    interface ExampleScenarioInstance extends BackboneElement {
        /**
         * The id of the resource for referencing
         */
        resourceId: string;
        /**
         * Contains extended information for property 'resourceId'.
         */
        _resourceId?: Element;
        /**
         * The type of the resource
         */
        resourceType: code;
        /**
         * Contains extended information for property 'resourceType'.
         */
        _resourceType?: Element;
        /**
         * A short name for the resource instance
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Human-friendly description of the resource instance
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * A specific version of the resource
         */
        version?: ExampleScenarioInstanceVersion[];
        /**
         * Resources contained in the instance
         */
        containedInstance?: ExampleScenarioInstanceContainedInstance[];
    }
    /**
     * A specific version of the resource
     */
    interface ExampleScenarioInstanceVersion extends BackboneElement {
        /**
         * The identifier of a specific version of a resource
         */
        versionId: string;
        /**
         * Contains extended information for property 'versionId'.
         */
        _versionId?: Element;
        /**
         * The description of the resource version
         */
        description: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
    }
    /**
     * Resources contained in the instance
     */
    interface ExampleScenarioInstanceContainedInstance extends BackboneElement {
        /**
         * Each resource contained in the instance
         */
        resourceId: string;
        /**
         * Contains extended information for property 'resourceId'.
         */
        _resourceId?: Element;
        /**
         * A specific version of a resource contained in the instance
         */
        versionId?: string;
        /**
         * Contains extended information for property 'versionId'.
         */
        _versionId?: Element;
    }
    /**
     * Each major process - a group of operations
     */
    interface ExampleScenarioProcess extends BackboneElement {
        /**
         * The diagram title of the group of operations
         */
        title: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
        /**
         * A longer description of the group of operations
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Description of initial status before the process starts
         */
        preConditions?: markdown;
        /**
         * Contains extended information for property 'preConditions'.
         */
        _preConditions?: Element;
        /**
         * Description of final status after the process ends
         */
        postConditions?: markdown;
        /**
         * Contains extended information for property 'postConditions'.
         */
        _postConditions?: Element;
        /**
         * Each step of the process
         */
        step?: ExampleScenarioProcessStep[];
    }
    /**
     * Each step of the process
     */
    interface ExampleScenarioProcessStep extends BackboneElement {
        /**
         * Nested process
         */
        process?: ExampleScenarioProcess[];
        /**
         * If there is a pause in the flow
         */
        pause?: boolean;
        /**
         * Contains extended information for property 'pause'.
         */
        _pause?: Element;
        /**
         * Each interaction or action
         */
        operation?: ExampleScenarioProcessStepOperation;
        /**
         * Alternate non-typical step action
         */
        alternative?: ExampleScenarioProcessStepAlternative[];
    }
    /**
     * Each interaction or action
     */
    interface ExampleScenarioProcessStepOperation extends BackboneElement {
        /**
         * The sequential number of the interaction
         */
        number: string;
        /**
         * Contains extended information for property 'number'.
         */
        _number?: Element;
        /**
         * The type of operation - CRUD
         */
        type?: string;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * The human-friendly name of the interaction
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Who starts the transaction
         */
        initiator?: string;
        /**
         * Contains extended information for property 'initiator'.
         */
        _initiator?: Element;
        /**
         * Who receives the transaction
         */
        receiver?: string;
        /**
         * Contains extended information for property 'receiver'.
         */
        _receiver?: Element;
        /**
         * A comment to be inserted in the diagram
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Whether the initiator is deactivated right after the transaction
         */
        initiatorActive?: boolean;
        /**
         * Contains extended information for property 'initiatorActive'.
         */
        _initiatorActive?: Element;
        /**
         * Whether the receiver is deactivated right after the transaction
         */
        receiverActive?: boolean;
        /**
         * Contains extended information for property 'receiverActive'.
         */
        _receiverActive?: Element;
        /**
         * Each resource instance used by the initiator
         */
        request?: ExampleScenarioInstanceContainedInstance;
        /**
         * Each resource instance used by the responder
         */
        response?: ExampleScenarioInstanceContainedInstance;
    }
    /**
     * Alternate non-typical step action
     */
    interface ExampleScenarioProcessStepAlternative extends BackboneElement {
        /**
         * Label for alternative
         */
        title: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
        /**
         * A human-readable description of each option
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * What happens in each alternative option
         */
        step?: ExampleScenarioProcessStep[];
    }
    /**
     * Example of workflow instance
     */
    interface ExampleScenario extends DomainResource {
        /**
         * Canonical identifier for this example scenario, represented as a URI (globally unique)
         */
        url?: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Additional identifier for the example scenario
         */
        identifier?: Identifier[];
        /**
         * Business version of the example scenario
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
        /**
         * Name for this example scenario (computer friendly)
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * draft | active | retired | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * For testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Contains extended information for property 'experimental'.
         */
        _experimental?: Element;
        /**
         * Date last changed
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Name of the publisher (organization or individual)
         */
        publisher?: string;
        /**
         * Contains extended information for property 'publisher'.
         */
        _publisher?: Element;
        /**
         * Contact details for the publisher
         */
        contact?: ContactDetail[];
        /**
         * The context that the content is intended to support
         */
        useContext?: UsageContext[];
        /**
         * Intended jurisdiction for example scenario (if applicable)
         */
        jurisdiction?: CodeableConcept[];
        /**
         * Use and/or publishing restrictions
         */
        copyright?: markdown;
        /**
         * Contains extended information for property 'copyright'.
         */
        _copyright?: Element;
        /**
         * The purpose of the example, e.g. to illustrate a scenario
         */
        purpose?: markdown;
        /**
         * Contains extended information for property 'purpose'.
         */
        _purpose?: Element;
        /**
         * Actor participating in the resource
         */
        actor?: ExampleScenarioActor[];
        /**
         * Each resource and each version that is present in the workflow
         */
        instance?: ExampleScenarioInstance[];
        /**
         * Each major process - a group of operations
         */
        process?: ExampleScenarioProcess[];
        /**
         * Another nested workflow
         */
        workflow?: canonical[];
        /**
         * Contains extended information for property 'workflow'.
         */
        _workflow?: Element[];
    }
    /**
     * Prior or corollary claims
     */
    interface ExplanationOfBenefitRelated extends BackboneElement {
        /**
         * Reference to the related claim
         */
        claim?: Reference;
        /**
         * How the reference claim is related
         */
        relationship?: CodeableConcept;
        /**
         * File or case reference
         */
        reference?: Identifier;
    }
    /**
     * Recipient of benefits payable
     */
    interface ExplanationOfBenefitPayee extends BackboneElement {
        /**
         * Category of recipient
         */
        type?: CodeableConcept;
        /**
         * Recipient reference
         */
        party?: Reference;
    }
    /**
     * Care Team members
     */
    interface ExplanationOfBenefitCareTeam extends BackboneElement {
        /**
         * Order of care team
         */
        sequence: positiveInt;
        /**
         * Contains extended information for property 'sequence'.
         */
        _sequence?: Element;
        /**
         * Practitioner or organization
         */
        provider: Reference;
        /**
         * Indicator of the lead practitioner
         */
        responsible?: boolean;
        /**
         * Contains extended information for property 'responsible'.
         */
        _responsible?: Element;
        /**
         * Function within the team
         */
        role?: CodeableConcept;
        /**
         * Practitioner credential or specialization
         */
        qualification?: CodeableConcept;
    }
    /**
     * Supporting information
     */
    interface ExplanationOfBenefitSupportingInfo extends BackboneElement {
        /**
         * Information instance identifier
         */
        sequence: positiveInt;
        /**
         * Contains extended information for property 'sequence'.
         */
        _sequence?: Element;
        /**
         * Classification of the supplied information
         */
        category: CodeableConcept;
        /**
         * Type of information
         */
        code?: CodeableConcept;
        /**
         * When it occurred
         */
        timingDate?: date;
        /**
         * Contains extended information for property 'timingDate'.
         */
        _timingDate?: Element;
        /**
         * When it occurred
         */
        timingPeriod?: Period;
        /**
         * Data to be provided
         */
        valueBoolean?: boolean;
        /**
         * Contains extended information for property 'valueBoolean'.
         */
        _valueBoolean?: Element;
        /**
         * Data to be provided
         */
        valueString?: string;
        /**
         * Contains extended information for property 'valueString'.
         */
        _valueString?: Element;
        /**
         * Data to be provided
         */
        valueQuantity?: Quantity;
        /**
         * Data to be provided
         */
        valueAttachment?: Attachment;
        /**
         * Data to be provided
         */
        valueReference?: Reference;
        /**
         * Explanation for the information
         */
        reason?: Coding;
    }
    /**
     * Pertinent diagnosis information
     */
    interface ExplanationOfBenefitDiagnosis extends BackboneElement {
        /**
         * Diagnosis instance identifier
         */
        sequence: positiveInt;
        /**
         * Contains extended information for property 'sequence'.
         */
        _sequence?: Element;
        /**
         * Nature of illness or problem
         */
        diagnosisCodeableConcept?: CodeableConcept;
        /**
         * Nature of illness or problem
         */
        diagnosisReference?: Reference;
        /**
         * Timing or nature of the diagnosis
         */
        type?: CodeableConcept[];
        /**
         * Present on admission
         */
        onAdmission?: CodeableConcept;
        /**
         * Package billing code
         */
        packageCode?: CodeableConcept;
    }
    /**
     * Clinical procedures performed
     */
    interface ExplanationOfBenefitProcedure extends BackboneElement {
        /**
         * Procedure instance identifier
         */
        sequence: positiveInt;
        /**
         * Contains extended information for property 'sequence'.
         */
        _sequence?: Element;
        /**
         * Category of Procedure
         */
        type?: CodeableConcept[];
        /**
         * When the procedure was performed
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Specific clinical procedure
         */
        procedureCodeableConcept?: CodeableConcept;
        /**
         * Specific clinical procedure
         */
        procedureReference?: Reference;
        /**
         * Unique device identifier
         */
        udi?: Reference[];
    }
    /**
     * Patient insurance information
     */
    interface ExplanationOfBenefitInsurance extends BackboneElement {
        /**
         * Coverage to be used for adjudication
         */
        focal: boolean;
        /**
         * Contains extended information for property 'focal'.
         */
        _focal?: Element;
        /**
         * Insurance information
         */
        coverage: Reference;
        /**
         * Prior authorization reference number
         */
        preAuthRef?: string[];
        /**
         * Contains extended information for property 'preAuthRef'.
         */
        _preAuthRef?: Element[];
    }
    /**
     * Details of the event
     */
    interface ExplanationOfBenefitAccident extends BackboneElement {
        /**
         * When the incident occurred
         */
        date?: date;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * The nature of the accident
         */
        type?: CodeableConcept;
        /**
         * Where the event occurred
         */
        locationAddress?: Address;
        /**
         * Where the event occurred
         */
        locationReference?: Reference;
    }
    /**
     * Product or service provided
     */
    interface ExplanationOfBenefitItem extends BackboneElement {
        /**
         * Item instance identifier
         */
        sequence: positiveInt;
        /**
         * Contains extended information for property 'sequence'.
         */
        _sequence?: Element;
        /**
         * Applicable care team members
         */
        careTeamSequence?: positiveInt[];
        /**
         * Contains extended information for property 'careTeamSequence'.
         */
        _careTeamSequence?: Element[];
        /**
         * Applicable diagnoses
         */
        diagnosisSequence?: positiveInt[];
        /**
         * Contains extended information for property 'diagnosisSequence'.
         */
        _diagnosisSequence?: Element[];
        /**
         * Applicable procedures
         */
        procedureSequence?: positiveInt[];
        /**
         * Contains extended information for property 'procedureSequence'.
         */
        _procedureSequence?: Element[];
        /**
         * Applicable exception and supporting information
         */
        informationSequence?: positiveInt[];
        /**
         * Contains extended information for property 'informationSequence'.
         */
        _informationSequence?: Element[];
        /**
         * Revenue or cost center code
         */
        revenue?: CodeableConcept;
        /**
         * Benefit classification
         */
        category?: CodeableConcept;
        /**
         * Billing, service, product, or drug code
         */
        productOrService: CodeableConcept;
        /**
         * Product or service billing modifiers
         */
        modifier?: CodeableConcept[];
        /**
         * Program the product or service is provided under
         */
        programCode?: CodeableConcept[];
        /**
         * Date or dates of service or product delivery
         */
        servicedDate?: date;
        /**
         * Contains extended information for property 'servicedDate'.
         */
        _servicedDate?: Element;
        /**
         * Date or dates of service or product delivery
         */
        servicedPeriod?: Period;
        /**
         * Place of service or where product was supplied
         */
        locationCodeableConcept?: CodeableConcept;
        /**
         * Place of service or where product was supplied
         */
        locationAddress?: Address;
        /**
         * Place of service or where product was supplied
         */
        locationReference?: Reference;
        /**
         * Count of products or services
         */
        quantity?: Quantity;
        /**
         * Fee, charge or cost per item
         */
        unitPrice?: Money;
        /**
         * Price scaling factor
         */
        factor?: decimal;
        /**
         * Contains extended information for property 'factor'.
         */
        _factor?: Element;
        /**
         * Total item cost
         */
        net?: Money;
        /**
         * Unique device identifier
         */
        udi?: Reference[];
        /**
         * Anatomical location
         */
        bodySite?: CodeableConcept;
        /**
         * Anatomical sub-location
         */
        subSite?: CodeableConcept[];
        /**
         * Encounters related to this billed item
         */
        encounter?: Reference[];
        /**
         * Applicable note numbers
         */
        noteNumber?: positiveInt[];
        /**
         * Contains extended information for property 'noteNumber'.
         */
        _noteNumber?: Element[];
        /**
         * Adjudication details
         */
        adjudication?: ExplanationOfBenefitItemAdjudication[];
        /**
         * Additional items
         */
        detail?: ExplanationOfBenefitItemDetail[];
    }
    /**
     * Adjudication details
     */
    interface ExplanationOfBenefitItemAdjudication extends BackboneElement {
        /**
         * Type of adjudication information
         */
        category: CodeableConcept;
        /**
         * Explanation of adjudication outcome
         */
        reason?: CodeableConcept;
        /**
         * Monetary amount
         */
        amount?: Money;
        /**
         * Non-monitary value
         */
        value?: decimal;
        /**
         * Contains extended information for property 'value'.
         */
        _value?: Element;
    }
    /**
     * Additional items
     */
    interface ExplanationOfBenefitItemDetail extends BackboneElement {
        /**
         * Product or service provided
         */
        sequence: positiveInt;
        /**
         * Contains extended information for property 'sequence'.
         */
        _sequence?: Element;
        /**
         * Revenue or cost center code
         */
        revenue?: CodeableConcept;
        /**
         * Benefit classification
         */
        category?: CodeableConcept;
        /**
         * Billing, service, product, or drug code
         */
        productOrService: CodeableConcept;
        /**
         * Service/Product billing modifiers
         */
        modifier?: CodeableConcept[];
        /**
         * Program the product or service is provided under
         */
        programCode?: CodeableConcept[];
        /**
         * Count of products or services
         */
        quantity?: Quantity;
        /**
         * Fee, charge or cost per item
         */
        unitPrice?: Money;
        /**
         * Price scaling factor
         */
        factor?: decimal;
        /**
         * Contains extended information for property 'factor'.
         */
        _factor?: Element;
        /**
         * Total item cost
         */
        net?: Money;
        /**
         * Unique device identifier
         */
        udi?: Reference[];
        /**
         * Applicable note numbers
         */
        noteNumber?: positiveInt[];
        /**
         * Contains extended information for property 'noteNumber'.
         */
        _noteNumber?: Element[];
        /**
         * Detail level adjudication details
         */
        adjudication?: ExplanationOfBenefitItemAdjudication[];
        /**
         * Additional items
         */
        subDetail?: ExplanationOfBenefitItemDetailSubDetail[];
    }
    /**
     * Additional items
     */
    interface ExplanationOfBenefitItemDetailSubDetail extends BackboneElement {
        /**
         * Product or service provided
         */
        sequence: positiveInt;
        /**
         * Contains extended information for property 'sequence'.
         */
        _sequence?: Element;
        /**
         * Revenue or cost center code
         */
        revenue?: CodeableConcept;
        /**
         * Benefit classification
         */
        category?: CodeableConcept;
        /**
         * Billing, service, product, or drug code
         */
        productOrService: CodeableConcept;
        /**
         * Service/Product billing modifiers
         */
        modifier?: CodeableConcept[];
        /**
         * Program the product or service is provided under
         */
        programCode?: CodeableConcept[];
        /**
         * Count of products or services
         */
        quantity?: Quantity;
        /**
         * Fee, charge or cost per item
         */
        unitPrice?: Money;
        /**
         * Price scaling factor
         */
        factor?: decimal;
        /**
         * Contains extended information for property 'factor'.
         */
        _factor?: Element;
        /**
         * Total item cost
         */
        net?: Money;
        /**
         * Unique device identifier
         */
        udi?: Reference[];
        /**
         * Applicable note numbers
         */
        noteNumber?: positiveInt[];
        /**
         * Contains extended information for property 'noteNumber'.
         */
        _noteNumber?: Element[];
        /**
         * Subdetail level adjudication details
         */
        adjudication?: ExplanationOfBenefitItemAdjudication[];
    }
    /**
     * Insurer added line items
     */
    interface ExplanationOfBenefitAddItem extends BackboneElement {
        /**
         * Item sequence number
         */
        itemSequence?: positiveInt[];
        /**
         * Contains extended information for property 'itemSequence'.
         */
        _itemSequence?: Element[];
        /**
         * Detail sequence number
         */
        detailSequence?: positiveInt[];
        /**
         * Contains extended information for property 'detailSequence'.
         */
        _detailSequence?: Element[];
        /**
         * Subdetail sequence number
         */
        subDetailSequence?: positiveInt[];
        /**
         * Contains extended information for property 'subDetailSequence'.
         */
        _subDetailSequence?: Element[];
        /**
         * Authorized providers
         */
        provider?: Reference[];
        /**
         * Billing, service, product, or drug code
         */
        productOrService: CodeableConcept;
        /**
         * Service/Product billing modifiers
         */
        modifier?: CodeableConcept[];
        /**
         * Program the product or service is provided under
         */
        programCode?: CodeableConcept[];
        /**
         * Date or dates of service or product delivery
         */
        servicedDate?: date;
        /**
         * Contains extended information for property 'servicedDate'.
         */
        _servicedDate?: Element;
        /**
         * Date or dates of service or product delivery
         */
        servicedPeriod?: Period;
        /**
         * Place of service or where product was supplied
         */
        locationCodeableConcept?: CodeableConcept;
        /**
         * Place of service or where product was supplied
         */
        locationAddress?: Address;
        /**
         * Place of service or where product was supplied
         */
        locationReference?: Reference;
        /**
         * Count of products or services
         */
        quantity?: Quantity;
        /**
         * Fee, charge or cost per item
         */
        unitPrice?: Money;
        /**
         * Price scaling factor
         */
        factor?: decimal;
        /**
         * Contains extended information for property 'factor'.
         */
        _factor?: Element;
        /**
         * Total item cost
         */
        net?: Money;
        /**
         * Anatomical location
         */
        bodySite?: CodeableConcept;
        /**
         * Anatomical sub-location
         */
        subSite?: CodeableConcept[];
        /**
         * Applicable note numbers
         */
        noteNumber?: positiveInt[];
        /**
         * Contains extended information for property 'noteNumber'.
         */
        _noteNumber?: Element[];
        /**
         * Added items adjudication
         */
        adjudication?: ExplanationOfBenefitItemAdjudication[];
        /**
         * Insurer added line items
         */
        detail?: ExplanationOfBenefitAddItemDetail[];
    }
    /**
     * Insurer added line items
     */
    interface ExplanationOfBenefitAddItemDetail extends BackboneElement {
        /**
         * Billing, service, product, or drug code
         */
        productOrService: CodeableConcept;
        /**
         * Service/Product billing modifiers
         */
        modifier?: CodeableConcept[];
        /**
         * Count of products or services
         */
        quantity?: Quantity;
        /**
         * Fee, charge or cost per item
         */
        unitPrice?: Money;
        /**
         * Price scaling factor
         */
        factor?: decimal;
        /**
         * Contains extended information for property 'factor'.
         */
        _factor?: Element;
        /**
         * Total item cost
         */
        net?: Money;
        /**
         * Applicable note numbers
         */
        noteNumber?: positiveInt[];
        /**
         * Contains extended information for property 'noteNumber'.
         */
        _noteNumber?: Element[];
        /**
         * Added items adjudication
         */
        adjudication?: ExplanationOfBenefitItemAdjudication[];
        /**
         * Insurer added line items
         */
        subDetail?: ExplanationOfBenefitAddItemDetailSubDetail[];
    }
    /**
     * Insurer added line items
     */
    interface ExplanationOfBenefitAddItemDetailSubDetail extends BackboneElement {
        /**
         * Billing, service, product, or drug code
         */
        productOrService: CodeableConcept;
        /**
         * Service/Product billing modifiers
         */
        modifier?: CodeableConcept[];
        /**
         * Count of products or services
         */
        quantity?: Quantity;
        /**
         * Fee, charge or cost per item
         */
        unitPrice?: Money;
        /**
         * Price scaling factor
         */
        factor?: decimal;
        /**
         * Contains extended information for property 'factor'.
         */
        _factor?: Element;
        /**
         * Total item cost
         */
        net?: Money;
        /**
         * Applicable note numbers
         */
        noteNumber?: positiveInt[];
        /**
         * Contains extended information for property 'noteNumber'.
         */
        _noteNumber?: Element[];
        /**
         * Added items adjudication
         */
        adjudication?: ExplanationOfBenefitItemAdjudication[];
    }
    /**
     * Adjudication totals
     */
    interface ExplanationOfBenefitTotal extends BackboneElement {
        /**
         * Type of adjudication information
         */
        category: CodeableConcept;
        /**
         * Financial total for the category
         */
        amount: Money;
    }
    /**
     * Payment Details
     */
    interface ExplanationOfBenefitPayment extends BackboneElement {
        /**
         * Partial or complete payment
         */
        type?: CodeableConcept;
        /**
         * Payment adjustment for non-claim issues
         */
        adjustment?: Money;
        /**
         * Explanation for the variance
         */
        adjustmentReason?: CodeableConcept;
        /**
         * Expected date of payment
         */
        date?: date;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Payable amount after adjustment
         */
        amount?: Money;
        /**
         * Business identifier for the payment
         */
        identifier?: Identifier;
    }
    /**
     * Note concerning adjudication
     */
    interface ExplanationOfBenefitProcessNote extends BackboneElement {
        /**
         * Note instance identifier
         */
        number?: positiveInt;
        /**
         * Contains extended information for property 'number'.
         */
        _number?: Element;
        /**
         * display | print | printoper
         */
        type?: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * Note explanatory text
         */
        text?: string;
        /**
         * Contains extended information for property 'text'.
         */
        _text?: Element;
        /**
         * Language of the text
         */
        language?: CodeableConcept;
    }
    /**
     * Balance by Benefit Category
     */
    interface ExplanationOfBenefitBenefitBalance extends BackboneElement {
        /**
         * Benefit classification
         */
        category: CodeableConcept;
        /**
         * Excluded from the plan
         */
        excluded?: boolean;
        /**
         * Contains extended information for property 'excluded'.
         */
        _excluded?: Element;
        /**
         * Short name for the benefit
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Description of the benefit or services covered
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * In or out of network
         */
        network?: CodeableConcept;
        /**
         * Individual or family
         */
        unit?: CodeableConcept;
        /**
         * Annual or lifetime
         */
        term?: CodeableConcept;
        /**
         * Benefit Summary
         */
        financial?: ExplanationOfBenefitBenefitBalanceFinancial[];
    }
    /**
     * Benefit Summary
     */
    interface ExplanationOfBenefitBenefitBalanceFinancial extends BackboneElement {
        /**
         * Benefit classification
         */
        type: CodeableConcept;
        /**
         * Benefits allowed
         */
        allowedUnsignedInt?: unsignedInt;
        /**
         * Contains extended information for property 'allowedUnsignedInt'.
         */
        _allowedUnsignedInt?: Element;
        /**
         * Benefits allowed
         */
        allowedString?: string;
        /**
         * Contains extended information for property 'allowedString'.
         */
        _allowedString?: Element;
        /**
         * Benefits allowed
         */
        allowedMoney?: Money;
        /**
         * Benefits used
         */
        usedUnsignedInt?: unsignedInt;
        /**
         * Contains extended information for property 'usedUnsignedInt'.
         */
        _usedUnsignedInt?: Element;
        /**
         * Benefits used
         */
        usedMoney?: Money;
    }
    /**
     * Explanation of Benefit resource
     */
    interface ExplanationOfBenefit extends DomainResource {
        /**
         * Business Identifier for the resource
         */
        identifier?: Identifier[];
        /**
         * active | cancelled | draft | entered-in-error
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Category or discipline
         */
        type: CodeableConcept;
        /**
         * More granular claim type
         */
        subType?: CodeableConcept;
        /**
         * claim | preauthorization | predetermination
         */
        use: code;
        /**
         * Contains extended information for property 'use'.
         */
        _use?: Element;
        /**
         * The recipient of the products and services
         */
        patient: Reference;
        /**
         * Relevant time frame for the claim
         */
        billablePeriod?: Period;
        /**
         * Response creation date
         */
        created: dateTime;
        /**
         * Contains extended information for property 'created'.
         */
        _created?: Element;
        /**
         * Author of the claim
         */
        enterer?: Reference;
        /**
         * Party responsible for reimbursement
         */
        insurer: Reference;
        /**
         * Party responsible for the claim
         */
        provider: Reference;
        /**
         * Desired processing urgency
         */
        priority?: CodeableConcept;
        /**
         * For whom to reserve funds
         */
        fundsReserveRequested?: CodeableConcept;
        /**
         * Funds reserved status
         */
        fundsReserve?: CodeableConcept;
        /**
         * Prior or corollary claims
         */
        related?: ExplanationOfBenefitRelated[];
        /**
         * Prescription authorizing services or products
         */
        prescription?: Reference;
        /**
         * Original prescription if superceded by fulfiller
         */
        originalPrescription?: Reference;
        /**
         * Recipient of benefits payable
         */
        payee?: ExplanationOfBenefitPayee;
        /**
         * Treatment Referral
         */
        referral?: Reference;
        /**
         * Servicing Facility
         */
        facility?: Reference;
        /**
         * Claim reference
         */
        claim?: Reference;
        /**
         * Claim response reference
         */
        claimResponse?: Reference;
        /**
         * queued | complete | error | partial
         */
        outcome: code;
        /**
         * Contains extended information for property 'outcome'.
         */
        _outcome?: Element;
        /**
         * Disposition Message
         */
        disposition?: string;
        /**
         * Contains extended information for property 'disposition'.
         */
        _disposition?: Element;
        /**
         * Preauthorization reference
         */
        preAuthRef?: string[];
        /**
         * Contains extended information for property 'preAuthRef'.
         */
        _preAuthRef?: Element[];
        /**
         * Preauthorization in-effect period
         */
        preAuthRefPeriod?: Period[];
        /**
         * Care Team members
         */
        careTeam?: ExplanationOfBenefitCareTeam[];
        /**
         * Supporting information
         */
        supportingInfo?: ExplanationOfBenefitSupportingInfo[];
        /**
         * Pertinent diagnosis information
         */
        diagnosis?: ExplanationOfBenefitDiagnosis[];
        /**
         * Clinical procedures performed
         */
        procedure?: ExplanationOfBenefitProcedure[];
        /**
         * Precedence (primary, secondary, etc.)
         */
        precedence?: positiveInt;
        /**
         * Contains extended information for property 'precedence'.
         */
        _precedence?: Element;
        /**
         * Patient insurance information
         */
        insurance: ExplanationOfBenefitInsurance[];
        /**
         * Details of the event
         */
        accident?: ExplanationOfBenefitAccident;
        /**
         * Product or service provided
         */
        item?: ExplanationOfBenefitItem[];
        /**
         * Insurer added line items
         */
        addItem?: ExplanationOfBenefitAddItem[];
        /**
         * Header-level adjudication
         */
        adjudication?: ExplanationOfBenefitItemAdjudication[];
        /**
         * Adjudication totals
         */
        total?: ExplanationOfBenefitTotal[];
        /**
         * Payment Details
         */
        payment?: ExplanationOfBenefitPayment;
        /**
         * Printed form identifier
         */
        formCode?: CodeableConcept;
        /**
         * Printed reference or actual form
         */
        form?: Attachment;
        /**
         * Note concerning adjudication
         */
        processNote?: ExplanationOfBenefitProcessNote[];
        /**
         * When the benefits are applicable
         */
        benefitPeriod?: Period;
        /**
         * Balance by Benefit Category
         */
        benefitBalance?: ExplanationOfBenefitBenefitBalance[];
    }
    /**
     * Condition that the related person had
     */
    interface FamilyMemberHistoryCondition extends BackboneElement {
        /**
         * Condition suffered by relation
         */
        code: CodeableConcept;
        /**
         * deceased | permanent disability | etc.
         */
        outcome?: CodeableConcept;
        /**
         * Whether the condition contributed to the cause of death
         */
        contributedToDeath?: boolean;
        /**
         * Contains extended information for property 'contributedToDeath'.
         */
        _contributedToDeath?: Element;
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
        onsetPeriod?: Period;
        /**
         * When condition first manifested
         */
        onsetString?: string;
        /**
         * Contains extended information for property 'onsetString'.
         */
        _onsetString?: Element;
        /**
         * Extra information about condition
         */
        note?: Annotation[];
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
         * Instantiates FHIR protocol or definition
         */
        instantiatesCanonical?: canonical[];
        /**
         * Contains extended information for property 'instantiatesCanonical'.
         */
        _instantiatesCanonical?: Element[];
        /**
         * Instantiates external protocol or definition
         */
        instantiatesUri?: uri[];
        /**
         * Contains extended information for property 'instantiatesUri'.
         */
        _instantiatesUri?: Element[];
        /**
         * partial | completed | entered-in-error | health-unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * subject-unknown | withheld | unable-to-obtain | deferred
         */
        dataAbsentReason?: CodeableConcept;
        /**
         * Patient history is about
         */
        patient: Reference;
        /**
         * When history was recorded or last updated
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * The family member described
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Relationship to the subject
         */
        relationship: CodeableConcept;
        /**
         * male | female | other | unknown
         */
        sex?: CodeableConcept;
        /**
         * (approximate) date of birth
         */
        bornPeriod?: Period;
        /**
         * (approximate) date of birth
         */
        bornDate?: date;
        /**
         * Contains extended information for property 'bornDate'.
         */
        _bornDate?: Element;
        /**
         * (approximate) date of birth
         */
        bornString?: string;
        /**
         * Contains extended information for property 'bornString'.
         */
        _bornString?: Element;
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
         * Contains extended information for property 'ageString'.
         */
        _ageString?: Element;
        /**
         * Age is estimated?
         */
        estimatedAge?: boolean;
        /**
         * Contains extended information for property 'estimatedAge'.
         */
        _estimatedAge?: Element;
        /**
         * Dead? How old/when?
         */
        deceasedBoolean?: boolean;
        /**
         * Contains extended information for property 'deceasedBoolean'.
         */
        _deceasedBoolean?: Element;
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
         * Contains extended information for property 'deceasedDate'.
         */
        _deceasedDate?: Element;
        /**
         * Dead? How old/when?
         */
        deceasedString?: string;
        /**
         * Contains extended information for property 'deceasedString'.
         */
        _deceasedString?: Element;
        /**
         * Why was family member history performed?
         */
        reasonCode?: CodeableConcept[];
        /**
         * Why was family member history performed?
         */
        reasonReference?: Reference[];
        /**
         * General note about related person
         */
        note?: Annotation[];
        /**
         * Condition that the related person had
         */
        condition?: FamilyMemberHistoryCondition[];
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
         * active | inactive | entered-in-error
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Clinical, administrative, etc.
         */
        category?: CodeableConcept[];
        /**
         * Coded or textual message to display to user
         */
        code: CodeableConcept;
        /**
         * Who/What is flag about?
         */
        subject: Reference;
        /**
         * Time period when flag is active
         */
        period?: Period;
        /**
         * Alert relevant during encounter
         */
        encounter?: Reference;
        /**
         * Flag creator
         */
        author?: Reference;
    }
    /**
     * Target outcome for the goal
     */
    interface GoalTarget extends BackboneElement {
        /**
         * The parameter whose value is being tracked
         */
        measure?: CodeableConcept;
        /**
         * The target value to be achieved
         */
        detailQuantity?: Quantity;
        /**
         * The target value to be achieved
         */
        detailRange?: Range;
        /**
         * The target value to be achieved
         */
        detailCodeableConcept?: CodeableConcept;
        /**
         * The target value to be achieved
         */
        detailString?: string;
        /**
         * Contains extended information for property 'detailString'.
         */
        _detailString?: Element;
        /**
         * The target value to be achieved
         */
        detailBoolean?: boolean;
        /**
         * Contains extended information for property 'detailBoolean'.
         */
        _detailBoolean?: Element;
        /**
         * The target value to be achieved
         */
        detailInteger?: integer;
        /**
         * Contains extended information for property 'detailInteger'.
         */
        _detailInteger?: Element;
        /**
         * The target value to be achieved
         */
        detailRatio?: Ratio;
        /**
         * Reach goal on or before
         */
        dueDate?: date;
        /**
         * Contains extended information for property 'dueDate'.
         */
        _dueDate?: Element;
        /**
         * Reach goal on or before
         */
        dueDuration?: Duration;
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
         * proposed | planned | accepted | active | on-hold | completed | cancelled | entered-in-error | rejected
         */
        lifecycleStatus: code;
        /**
         * Contains extended information for property 'lifecycleStatus'.
         */
        _lifecycleStatus?: Element;
        /**
         * in-progress | improving | worsening | no-change | achieved | sustaining | not-achieved | no-progress | not-attainable
         */
        achievementStatus?: CodeableConcept;
        /**
         * E.g. Treatment, dietary, behavioral, etc.
         */
        category?: CodeableConcept[];
        /**
         * high-priority | medium-priority | low-priority
         */
        priority?: CodeableConcept;
        /**
         * Code or text describing goal
         */
        description: CodeableConcept;
        /**
         * Who this goal is intended for
         */
        subject: Reference;
        /**
         * When goal pursuit begins
         */
        startDate?: date;
        /**
         * Contains extended information for property 'startDate'.
         */
        _startDate?: Element;
        /**
         * When goal pursuit begins
         */
        startCodeableConcept?: CodeableConcept;
        /**
         * Target outcome for the goal
         */
        target?: GoalTarget[];
        /**
         * When goal status took effect
         */
        statusDate?: date;
        /**
         * Contains extended information for property 'statusDate'.
         */
        _statusDate?: Element;
        /**
         * Reason for current status
         */
        statusReason?: string;
        /**
         * Contains extended information for property 'statusReason'.
         */
        _statusReason?: Element;
        /**
         * Who's responsible for creating Goal?
         */
        expressedBy?: Reference;
        /**
         * Issues addressed by this goal
         */
        addresses?: Reference[];
        /**
         * Comments about the goal
         */
        note?: Annotation[];
        /**
         * What result was achieved regarding the goal?
         */
        outcomeCode?: CodeableConcept[];
        /**
         * Observation that resulted from goal
         */
        outcomeReference?: Reference[];
    }
    /**
     * Links this graph makes rules about
     */
    interface GraphDefinitionLink extends BackboneElement {
        /**
         * Path in the resource that contains the link
         */
        path?: string;
        /**
         * Contains extended information for property 'path'.
         */
        _path?: Element;
        /**
         * Which slice (if profiled)
         */
        sliceName?: string;
        /**
         * Contains extended information for property 'sliceName'.
         */
        _sliceName?: Element;
        /**
         * Minimum occurrences for this link
         */
        min?: integer;
        /**
         * Contains extended information for property 'min'.
         */
        _min?: Element;
        /**
         * Maximum occurrences for this link
         */
        max?: string;
        /**
         * Contains extended information for property 'max'.
         */
        _max?: Element;
        /**
         * Why this link is specified
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Potential target for the link
         */
        target?: GraphDefinitionLinkTarget[];
    }
    /**
     * Potential target for the link
     */
    interface GraphDefinitionLinkTarget extends BackboneElement {
        /**
         * Type of resource this link refers to
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * Criteria for reverse lookup
         */
        params?: string;
        /**
         * Contains extended information for property 'params'.
         */
        _params?: Element;
        /**
         * Profile for the target resource
         */
        profile?: canonical;
        /**
         * Contains extended information for property 'profile'.
         */
        _profile?: Element;
        /**
         * Compartment Consistency Rules
         */
        compartment?: GraphDefinitionLinkTargetCompartment[];
        /**
         * Additional links from target resource
         */
        link?: GraphDefinitionLink[];
    }
    /**
     * Compartment Consistency Rules
     */
    interface GraphDefinitionLinkTargetCompartment extends BackboneElement {
        /**
         * condition | requirement
         */
        use: code;
        /**
         * Contains extended information for property 'use'.
         */
        _use?: Element;
        /**
         * Patient | Encounter | RelatedPerson | Practitioner | Device
         */
        code: code;
        /**
         * Contains extended information for property 'code'.
         */
        _code?: Element;
        /**
         * identical | matching | different | custom
         */
        rule: code;
        /**
         * Contains extended information for property 'rule'.
         */
        _rule?: Element;
        /**
         * Custom rule, as a FHIRPath expression
         */
        expression?: string;
        /**
         * Contains extended information for property 'expression'.
         */
        _expression?: Element;
        /**
         * Documentation for FHIRPath expression
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
    }
    /**
     * Definition of a graph of resources
     */
    interface GraphDefinition extends DomainResource {
        /**
         * Canonical identifier for this graph definition, represented as a URI (globally unique)
         */
        url?: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Business version of the graph definition
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
        /**
         * Name for this graph definition (computer friendly)
         */
        name: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * draft | active | retired | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * For testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Contains extended information for property 'experimental'.
         */
        _experimental?: Element;
        /**
         * Date last changed
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Name of the publisher (organization or individual)
         */
        publisher?: string;
        /**
         * Contains extended information for property 'publisher'.
         */
        _publisher?: Element;
        /**
         * Contact details for the publisher
         */
        contact?: ContactDetail[];
        /**
         * Natural language description of the graph definition
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * The context that the content is intended to support
         */
        useContext?: UsageContext[];
        /**
         * Intended jurisdiction for graph definition (if applicable)
         */
        jurisdiction?: CodeableConcept[];
        /**
         * Why this graph definition is defined
         */
        purpose?: markdown;
        /**
         * Contains extended information for property 'purpose'.
         */
        _purpose?: Element;
        /**
         * Type of resource at which the graph starts
         */
        start: code;
        /**
         * Contains extended information for property 'start'.
         */
        _start?: Element;
        /**
         * Profile on base resource
         */
        profile?: canonical;
        /**
         * Contains extended information for property 'profile'.
         */
        _profile?: Element;
        /**
         * Links this graph makes rules about
         */
        link?: GraphDefinitionLink[];
    }
    /**
     * Include / Exclude group members by Trait
     */
    interface GroupCharacteristic extends BackboneElement {
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
         * Contains extended information for property 'valueBoolean'.
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
         * Value held by characteristic
         */
        valueReference?: Reference;
        /**
         * Group includes or excludes
         */
        exclude: boolean;
        /**
         * Contains extended information for property 'exclude'.
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
    interface GroupMember extends BackboneElement {
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
         * Contains extended information for property 'inactive'.
         */
        _inactive?: Element;
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
         * Whether this group's record is in active use
         */
        active?: boolean;
        /**
         * Contains extended information for property 'active'.
         */
        _active?: Element;
        /**
         * person | animal | practitioner | device | medication | substance
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * Descriptive or actual
         */
        actual: boolean;
        /**
         * Contains extended information for property 'actual'.
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
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Number of members
         */
        quantity?: unsignedInt;
        /**
         * Contains extended information for property 'quantity'.
         */
        _quantity?: Element;
        /**
         * Entity that is the custodian of the Group's definition
         */
        managingEntity?: Reference;
        /**
         * Include / Exclude group members by Trait
         */
        characteristic?: GroupCharacteristic[];
        /**
         * Who or what is in group
         */
        member?: GroupMember[];
    }
    /**
     * The formal response to a guidance request
     */
    interface GuidanceResponse extends DomainResource {
        /**
         * The identifier of the request associated with this response, if any
         */
        requestIdentifier?: Identifier;
        /**
         * Business identifier
         */
        identifier?: Identifier[];
        /**
         * What guidance was requested
         */
        moduleUri?: uri;
        /**
         * Contains extended information for property 'moduleUri'.
         */
        _moduleUri?: Element;
        /**
         * What guidance was requested
         */
        moduleCanonical?: canonical;
        /**
         * Contains extended information for property 'moduleCanonical'.
         */
        _moduleCanonical?: Element;
        /**
         * What guidance was requested
         */
        moduleCodeableConcept?: CodeableConcept;
        /**
         * success | data-requested | data-required | in-progress | failure | entered-in-error
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Patient the request was performed for
         */
        subject?: Reference;
        /**
         * Encounter during which the response was returned
         */
        encounter?: Reference;
        /**
         * When the guidance response was processed
         */
        occurrenceDateTime?: dateTime;
        /**
         * Contains extended information for property 'occurrenceDateTime'.
         */
        _occurrenceDateTime?: Element;
        /**
         * Device returning the guidance
         */
        performer?: Reference;
        /**
         * Why guidance is needed
         */
        reasonCode?: CodeableConcept[];
        /**
         * Why guidance is needed
         */
        reasonReference?: Reference[];
        /**
         * Additional notes about the response
         */
        note?: Annotation[];
        /**
         * Messages resulting from the evaluation of the artifact or artifacts
         */
        evaluationMessage?: Reference[];
        /**
         * The output parameters of the evaluation, if any
         */
        outputParameters?: Reference;
        /**
         * Proposed actions, if any
         */
        result?: Reference;
        /**
         * Additional required data
         */
        dataRequirement?: DataRequirement[];
    }
    /**
     * Specific eligibility requirements required to use the service
     */
    interface HealthcareServiceEligibility extends BackboneElement {
        /**
         * Coded value for the eligibility
         */
        code?: CodeableConcept;
        /**
         * Describes the eligibility conditions for the service
         */
        comment?: markdown;
        /**
         * Contains extended information for property 'comment'.
         */
        _comment?: Element;
    }
    /**
     * Times the Service Site is available
     */
    interface HealthcareServiceAvailableTime extends BackboneElement {
        /**
         * mon | tue | wed | thu | fri | sat | sun
         */
        daysOfWeek?: code[];
        /**
         * Contains extended information for property 'daysOfWeek'.
         */
        _daysOfWeek?: Element[];
        /**
         * Always available? e.g. 24 hour service
         */
        allDay?: boolean;
        /**
         * Contains extended information for property 'allDay'.
         */
        _allDay?: Element;
        /**
         * Opening time of day (ignored if allDay = true)
         */
        availableStartTime?: time;
        /**
         * Contains extended information for property 'availableStartTime'.
         */
        _availableStartTime?: Element;
        /**
         * Closing time of day (ignored if allDay = true)
         */
        availableEndTime?: time;
        /**
         * Contains extended information for property 'availableEndTime'.
         */
        _availableEndTime?: Element;
    }
    /**
     * Not available during this time due to provided reason
     */
    interface HealthcareServiceNotAvailable extends BackboneElement {
        /**
         * Reason presented to the user explaining why time not available
         */
        description: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Service not available from this date
         */
        during?: Period;
    }
    /**
     * The details of a healthcare service available at a location
     */
    interface HealthcareService extends DomainResource {
        /**
         * External identifiers for this item
         */
        identifier?: Identifier[];
        /**
         * Whether this HealthcareService record is in active use
         */
        active?: boolean;
        /**
         * Contains extended information for property 'active'.
         */
        _active?: Element;
        /**
         * Organization that provides this service
         */
        providedBy?: Reference;
        /**
         * Broad category of service being performed or delivered
         */
        category?: CodeableConcept[];
        /**
         * Type of service that may be delivered or performed
         */
        type?: CodeableConcept[];
        /**
         * Specialties handled by the HealthcareService
         */
        specialty?: CodeableConcept[];
        /**
         * Location(s) where service may be provided
         */
        location?: Reference[];
        /**
         * Description of service as presented to a consumer while searching
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Additional description and/or any specific issues not covered elsewhere
         */
        comment?: string;
        /**
         * Contains extended information for property 'comment'.
         */
        _comment?: Element;
        /**
         * Extra details about the service that can't be placed in the other fields
         */
        extraDetails?: markdown;
        /**
         * Contains extended information for property 'extraDetails'.
         */
        _extraDetails?: Element;
        /**
         * Facilitates quick identification of the service
         */
        photo?: Attachment;
        /**
         * Contacts related to the healthcare service
         */
        telecom?: ContactPoint[];
        /**
         * Location(s) service is intended for/available to
         */
        coverageArea?: Reference[];
        /**
         * Conditions under which service is available/offered
         */
        serviceProvisionCode?: CodeableConcept[];
        /**
         * Specific eligibility requirements required to use the service
         */
        eligibility?: HealthcareServiceEligibility[];
        /**
         * Programs that this service is applicable to
         */
        program?: CodeableConcept[];
        /**
         * Collection of characteristics (attributes)
         */
        characteristic?: CodeableConcept[];
        /**
         * The language that this service is offered in
         */
        communication?: CodeableConcept[];
        /**
         * Ways that the service accepts referrals
         */
        referralMethod?: CodeableConcept[];
        /**
         * If an appointment is required for access to this service
         */
        appointmentRequired?: boolean;
        /**
         * Contains extended information for property 'appointmentRequired'.
         */
        _appointmentRequired?: Element;
        /**
         * Times the Service Site is available
         */
        availableTime?: HealthcareServiceAvailableTime[];
        /**
         * Not available during this time due to provided reason
         */
        notAvailable?: HealthcareServiceNotAvailable[];
        /**
         * Description of availability exceptions
         */
        availabilityExceptions?: string;
        /**
         * Contains extended information for property 'availabilityExceptions'.
         */
        _availabilityExceptions?: Element;
        /**
         * Technical endpoints providing access to electronic services operated for the healthcare service
         */
        endpoint?: Reference[];
    }
    /**
     * Each study has one or more series of instances
     */
    interface ImagingStudySeries extends BackboneElement {
        /**
         * DICOM Series Instance UID for the series
         */
        uid: id;
        /**
         * Contains extended information for property 'uid'.
         */
        _uid?: Element;
        /**
         * Numeric identifier of this series
         */
        number?: unsignedInt;
        /**
         * Contains extended information for property 'number'.
         */
        _number?: Element;
        /**
         * The modality of the instances in the series
         */
        modality: Coding;
        /**
         * A short human readable summary of the series
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Number of Series Related Instances
         */
        numberOfInstances?: unsignedInt;
        /**
         * Contains extended information for property 'numberOfInstances'.
         */
        _numberOfInstances?: Element;
        /**
         * Series access endpoint
         */
        endpoint?: Reference[];
        /**
         * Body part examined
         */
        bodySite?: Coding;
        /**
         * Body part laterality
         */
        laterality?: Coding;
        /**
         * Specimen imaged
         */
        specimen?: Reference[];
        /**
         * When the series started
         */
        started?: dateTime;
        /**
         * Contains extended information for property 'started'.
         */
        _started?: Element;
        /**
         * Who performed the series
         */
        performer?: ImagingStudySeriesPerformer[];
        /**
         * A single SOP instance from the series
         */
        instance?: ImagingStudySeriesInstance[];
    }
    /**
     * Who performed the series
     */
    interface ImagingStudySeriesPerformer extends BackboneElement {
        /**
         * Type of performance
         */
        function?: CodeableConcept;
        /**
         * Who performed the series
         */
        actor: Reference;
    }
    /**
     * A single SOP instance from the series
     */
    interface ImagingStudySeriesInstance extends BackboneElement {
        /**
         * DICOM SOP Instance UID
         */
        uid: id;
        /**
         * Contains extended information for property 'uid'.
         */
        _uid?: Element;
        /**
         * DICOM class type
         */
        sopClass: Coding;
        /**
         * The number of this instance in the series
         */
        number?: unsignedInt;
        /**
         * Contains extended information for property 'number'.
         */
        _number?: Element;
        /**
         * Description of instance
         */
        title?: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
    }
    /**
     * A set of images produced in single study (one or more series of references images)
     */
    interface ImagingStudy extends DomainResource {
        /**
         * Identifiers for the whole study
         */
        identifier?: Identifier[];
        /**
         * registered | available | cancelled | entered-in-error | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * All series modality if actual acquisition modalities
         */
        modality?: Coding[];
        /**
         * Who or what is the subject of the study
         */
        subject: Reference;
        /**
         * Encounter with which this imaging study is associated
         */
        encounter?: Reference;
        /**
         * When the study was started
         */
        started?: dateTime;
        /**
         * Contains extended information for property 'started'.
         */
        _started?: Element;
        /**
         * Request fulfilled
         */
        basedOn?: Reference[];
        /**
         * Referring physician
         */
        referrer?: Reference;
        /**
         * Who interpreted images
         */
        interpreter?: Reference[];
        /**
         * Study access endpoint
         */
        endpoint?: Reference[];
        /**
         * Number of Study Related Series
         */
        numberOfSeries?: unsignedInt;
        /**
         * Contains extended information for property 'numberOfSeries'.
         */
        _numberOfSeries?: Element;
        /**
         * Number of Study Related Instances
         */
        numberOfInstances?: unsignedInt;
        /**
         * Contains extended information for property 'numberOfInstances'.
         */
        _numberOfInstances?: Element;
        /**
         * The performed Procedure reference
         */
        procedureReference?: Reference;
        /**
         * The performed procedure code
         */
        procedureCode?: CodeableConcept[];
        /**
         * Where ImagingStudy occurred
         */
        location?: Reference;
        /**
         * Why the study was requested
         */
        reasonCode?: CodeableConcept[];
        /**
         * Why was study performed
         */
        reasonReference?: Reference[];
        /**
         * User-defined comments
         */
        note?: Annotation[];
        /**
         * Institution-generated description
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Each study has one or more series of instances
         */
        series?: ImagingStudySeries[];
    }
    /**
     * Who performed event
     */
    interface ImmunizationPerformer extends BackboneElement {
        /**
         * What type of performance was done
         */
        function?: CodeableConcept;
        /**
         * Individual or organization who was performing
         */
        actor: Reference;
    }
    /**
     * Educational material presented to patient
     */
    interface ImmunizationEducation extends BackboneElement {
        /**
         * Educational material document identifier
         */
        documentType?: string;
        /**
         * Contains extended information for property 'documentType'.
         */
        _documentType?: Element;
        /**
         * Educational material reference pointer
         */
        reference?: uri;
        /**
         * Contains extended information for property 'reference'.
         */
        _reference?: Element;
        /**
         * Educational material publication date
         */
        publicationDate?: dateTime;
        /**
         * Contains extended information for property 'publicationDate'.
         */
        _publicationDate?: Element;
        /**
         * Educational material presentation date
         */
        presentationDate?: dateTime;
        /**
         * Contains extended information for property 'presentationDate'.
         */
        _presentationDate?: Element;
    }
    /**
     * Details of a reaction that follows immunization
     */
    interface ImmunizationReaction extends BackboneElement {
        /**
         * When reaction started
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Additional information on reaction
         */
        detail?: Reference;
        /**
         * Indicates self-reported reaction
         */
        reported?: boolean;
        /**
         * Contains extended information for property 'reported'.
         */
        _reported?: Element;
    }
    /**
     * Protocol followed by the provider
     */
    interface ImmunizationProtocolApplied extends BackboneElement {
        /**
         * Name of vaccine series
         */
        series?: string;
        /**
         * Contains extended information for property 'series'.
         */
        _series?: Element;
        /**
         * Who is responsible for publishing the recommendations
         */
        authority?: Reference;
        /**
         * Vaccine preventatable disease being targetted
         */
        targetDisease?: CodeableConcept[];
        /**
         * Dose number within series
         */
        doseNumberPositiveInt?: positiveInt;
        /**
         * Contains extended information for property 'doseNumberPositiveInt'.
         */
        _doseNumberPositiveInt?: Element;
        /**
         * Dose number within series
         */
        doseNumberString?: string;
        /**
         * Contains extended information for property 'doseNumberString'.
         */
        _doseNumberString?: Element;
        /**
         * Recommended number of doses for immunity
         */
        seriesDosesPositiveInt?: positiveInt;
        /**
         * Contains extended information for property 'seriesDosesPositiveInt'.
         */
        _seriesDosesPositiveInt?: Element;
        /**
         * Recommended number of doses for immunity
         */
        seriesDosesString?: string;
        /**
         * Contains extended information for property 'seriesDosesString'.
         */
        _seriesDosesString?: Element;
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
         * completed | entered-in-error | not-done
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Reason not done
         */
        statusReason?: CodeableConcept;
        /**
         * Vaccine product administered
         */
        vaccineCode: CodeableConcept;
        /**
         * Who was immunized
         */
        patient: Reference;
        /**
         * Encounter immunization was part of
         */
        encounter?: Reference;
        /**
         * Vaccine administration date
         */
        occurrenceDateTime?: dateTime;
        /**
         * Contains extended information for property 'occurrenceDateTime'.
         */
        _occurrenceDateTime?: Element;
        /**
         * Vaccine administration date
         */
        occurrenceString?: string;
        /**
         * Contains extended information for property 'occurrenceString'.
         */
        _occurrenceString?: Element;
        /**
         * When the immunization was first captured in the subject's record
         */
        recorded?: dateTime;
        /**
         * Contains extended information for property 'recorded'.
         */
        _recorded?: Element;
        /**
         * Indicates context the data was recorded in
         */
        primarySource?: boolean;
        /**
         * Contains extended information for property 'primarySource'.
         */
        _primarySource?: Element;
        /**
         * Indicates the source of a secondarily reported record
         */
        reportOrigin?: CodeableConcept;
        /**
         * Where immunization occurred
         */
        location?: Reference;
        /**
         * Vaccine manufacturer
         */
        manufacturer?: Reference;
        /**
         * Vaccine lot number
         */
        lotNumber?: string;
        /**
         * Contains extended information for property 'lotNumber'.
         */
        _lotNumber?: Element;
        /**
         * Vaccine expiration date
         */
        expirationDate?: date;
        /**
         * Contains extended information for property 'expirationDate'.
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
         * Who performed event
         */
        performer?: ImmunizationPerformer[];
        /**
         * Additional immunization notes
         */
        note?: Annotation[];
        /**
         * Why immunization occurred
         */
        reasonCode?: CodeableConcept[];
        /**
         * Why immunization occurred
         */
        reasonReference?: Reference[];
        /**
         * Dose potency
         */
        isSubpotent?: boolean;
        /**
         * Contains extended information for property 'isSubpotent'.
         */
        _isSubpotent?: Element;
        /**
         * Reason for being subpotent
         */
        subpotentReason?: CodeableConcept[];
        /**
         * Educational material presented to patient
         */
        education?: ImmunizationEducation[];
        /**
         * Patient eligibility for a vaccination program
         */
        programEligibility?: CodeableConcept[];
        /**
         * Funding source for the vaccine
         */
        fundingSource?: CodeableConcept;
        /**
         * Details of a reaction that follows immunization
         */
        reaction?: ImmunizationReaction[];
        /**
         * Protocol followed by the provider
         */
        protocolApplied?: ImmunizationProtocolApplied[];
    }
    /**
     * Immunization evaluation information
     */
    interface ImmunizationEvaluation extends DomainResource {
        /**
         * Business identifier
         */
        identifier?: Identifier[];
        /**
         * completed | entered-in-error
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Who this evaluation is for
         */
        patient: Reference;
        /**
         * Date evaluation was performed
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Who is responsible for publishing the recommendations
         */
        authority?: Reference;
        /**
         * Evaluation target disease
         */
        targetDisease: CodeableConcept;
        /**
         * Immunization being evaluated
         */
        immunizationEvent: Reference;
        /**
         * Status of the dose relative to published recommendations
         */
        doseStatus: CodeableConcept;
        /**
         * Reason for the dose status
         */
        doseStatusReason?: CodeableConcept[];
        /**
         * Evaluation notes
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Name of vaccine series
         */
        series?: string;
        /**
         * Contains extended information for property 'series'.
         */
        _series?: Element;
        /**
         * Dose number within series
         */
        doseNumberPositiveInt?: positiveInt;
        /**
         * Contains extended information for property 'doseNumberPositiveInt'.
         */
        _doseNumberPositiveInt?: Element;
        /**
         * Dose number within series
         */
        doseNumberString?: string;
        /**
         * Contains extended information for property 'doseNumberString'.
         */
        _doseNumberString?: Element;
        /**
         * Recommended number of doses for immunity
         */
        seriesDosesPositiveInt?: positiveInt;
        /**
         * Contains extended information for property 'seriesDosesPositiveInt'.
         */
        _seriesDosesPositiveInt?: Element;
        /**
         * Recommended number of doses for immunity
         */
        seriesDosesString?: string;
        /**
         * Contains extended information for property 'seriesDosesString'.
         */
        _seriesDosesString?: Element;
    }
    /**
     * Vaccine administration recommendations
     */
    interface ImmunizationRecommendationRecommendation extends BackboneElement {
        /**
         * Vaccine  or vaccine group recommendation applies to
         */
        vaccineCode?: CodeableConcept[];
        /**
         * Disease to be immunized against
         */
        targetDisease?: CodeableConcept;
        /**
         * Vaccine which is contraindicated to fulfill the recommendation
         */
        contraindicatedVaccineCode?: CodeableConcept[];
        /**
         * Vaccine recommendation status
         */
        forecastStatus: CodeableConcept;
        /**
         * Vaccine administration status reason
         */
        forecastReason?: CodeableConcept[];
        /**
         * Dates governing proposed immunization
         */
        dateCriterion?: ImmunizationRecommendationRecommendationDateCriterion[];
        /**
         * Protocol details
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Name of vaccination series
         */
        series?: string;
        /**
         * Contains extended information for property 'series'.
         */
        _series?: Element;
        /**
         * Recommended dose number within series
         */
        doseNumberPositiveInt?: positiveInt;
        /**
         * Contains extended information for property 'doseNumberPositiveInt'.
         */
        _doseNumberPositiveInt?: Element;
        /**
         * Recommended dose number within series
         */
        doseNumberString?: string;
        /**
         * Contains extended information for property 'doseNumberString'.
         */
        _doseNumberString?: Element;
        /**
         * Recommended number of doses for immunity
         */
        seriesDosesPositiveInt?: positiveInt;
        /**
         * Contains extended information for property 'seriesDosesPositiveInt'.
         */
        _seriesDosesPositiveInt?: Element;
        /**
         * Recommended number of doses for immunity
         */
        seriesDosesString?: string;
        /**
         * Contains extended information for property 'seriesDosesString'.
         */
        _seriesDosesString?: Element;
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
    interface ImmunizationRecommendationRecommendationDateCriterion extends BackboneElement {
        /**
         * Type of date
         */
        code: CodeableConcept;
        /**
         * Recommended date
         */
        value: dateTime;
        /**
         * Contains extended information for property 'value'.
         */
        _value?: Element;
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
         * Date recommendation(s) created
         */
        date: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Who is responsible for protocol
         */
        authority?: Reference;
        /**
         * Vaccine administration recommendations
         */
        recommendation: ImmunizationRecommendationRecommendation[];
    }
    /**
     * Another Implementation guide this depends on
     */
    interface ImplementationGuideDependsOn extends BackboneElement {
        /**
         * Identity of the IG that this depends on
         */
        uri: canonical;
        /**
         * Contains extended information for property 'uri'.
         */
        _uri?: Element;
        /**
         * NPM Package name for IG this depends on
         */
        packageId?: id;
        /**
         * Contains extended information for property 'packageId'.
         */
        _packageId?: Element;
        /**
         * Version of the IG
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
    }
    /**
     * Profiles that apply globally
     */
    interface ImplementationGuideGlobal extends BackboneElement {
        /**
         * Type this profile applies to
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * Profile that all resources must conform to
         */
        profile: canonical;
        /**
         * Contains extended information for property 'profile'.
         */
        _profile?: Element;
    }
    /**
     * Information needed to build the IG
     */
    interface ImplementationGuideDefinition extends BackboneElement {
        /**
         * Grouping used to present related resources in the IG
         */
        grouping?: ImplementationGuideDefinitionGrouping[];
        /**
         * Resource in the implementation guide
         */
        resource: ImplementationGuideDefinitionResource[];
        /**
         * Page/Section in the Guide
         */
        page?: ImplementationGuideDefinitionPage;
        /**
         * Defines how IG is built by tools
         */
        parameter?: ImplementationGuideDefinitionParameter[];
        /**
         * A template for building resources
         */
        template?: ImplementationGuideDefinitionTemplate[];
    }
    /**
     * Grouping used to present related resources in the IG
     */
    interface ImplementationGuideDefinitionGrouping extends BackboneElement {
        /**
         * Descriptive name for the package
         */
        name: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Human readable text describing the package
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
    }
    /**
     * Resource in the implementation guide
     */
    interface ImplementationGuideDefinitionResource extends BackboneElement {
        /**
         * Location of the resource
         */
        reference: Reference;
        /**
         * Versions this applies to (if different to IG)
         */
        fhirVersion?: code[];
        /**
         * Contains extended information for property 'fhirVersion'.
         */
        _fhirVersion?: Element[];
        /**
         * Human Name for the resource
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Reason why included in guide
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Is an example/What is this an example of?
         */
        exampleBoolean?: boolean;
        /**
         * Contains extended information for property 'exampleBoolean'.
         */
        _exampleBoolean?: Element;
        /**
         * Is an example/What is this an example of?
         */
        exampleCanonical?: canonical;
        /**
         * Contains extended information for property 'exampleCanonical'.
         */
        _exampleCanonical?: Element;
        /**
         * Grouping this is part of
         */
        groupingId?: id;
        /**
         * Contains extended information for property 'groupingId'.
         */
        _groupingId?: Element;
    }
    /**
     * Page/Section in the Guide
     */
    interface ImplementationGuideDefinitionPage extends BackboneElement {
        /**
         * Where to find that page
         */
        nameUrl?: url;
        /**
         * Contains extended information for property 'nameUrl'.
         */
        _nameUrl?: Element;
        /**
         * Where to find that page
         */
        nameReference?: Reference;
        /**
         * Short title shown for navigational assistance
         */
        title: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
        /**
         * html | markdown | xml | generated
         */
        generation: code;
        /**
         * Contains extended information for property 'generation'.
         */
        _generation?: Element;
        /**
         * Nested Pages / Sections
         */
        page?: ImplementationGuideDefinitionPage[];
    }
    /**
     * Defines how IG is built by tools
     */
    interface ImplementationGuideDefinitionParameter extends BackboneElement {
        /**
         * apply | path-resource | path-pages | path-tx-cache | expansion-parameter | rule-broken-links | generate-xml | generate-json | generate-turtle | html-template
         */
        code: code;
        /**
         * Contains extended information for property 'code'.
         */
        _code?: Element;
        /**
         * Value for named type
         */
        value: string;
        /**
         * Contains extended information for property 'value'.
         */
        _value?: Element;
    }
    /**
     * A template for building resources
     */
    interface ImplementationGuideDefinitionTemplate extends BackboneElement {
        /**
         * Type of template specified
         */
        code: code;
        /**
         * Contains extended information for property 'code'.
         */
        _code?: Element;
        /**
         * The source location for the template
         */
        source: string;
        /**
         * Contains extended information for property 'source'.
         */
        _source?: Element;
        /**
         * The scope in which the template applies
         */
        scope?: string;
        /**
         * Contains extended information for property 'scope'.
         */
        _scope?: Element;
    }
    /**
     * Information about an assembled IG
     */
    interface ImplementationGuideManifest extends BackboneElement {
        /**
         * Location of rendered implementation guide
         */
        rendering?: url;
        /**
         * Contains extended information for property 'rendering'.
         */
        _rendering?: Element;
        /**
         * Resource in the implementation guide
         */
        resource: ImplementationGuideManifestResource[];
        /**
         * HTML page within the parent IG
         */
        page?: ImplementationGuideManifestPage[];
        /**
         * Image within the IG
         */
        image?: string[];
        /**
         * Contains extended information for property 'image'.
         */
        _image?: Element[];
        /**
         * Additional linkable file in IG
         */
        other?: string[];
        /**
         * Contains extended information for property 'other'.
         */
        _other?: Element[];
    }
    /**
     * Resource in the implementation guide
     */
    interface ImplementationGuideManifestResource extends BackboneElement {
        /**
         * Location of the resource
         */
        reference: Reference;
        /**
         * Is an example/What is this an example of?
         */
        exampleBoolean?: boolean;
        /**
         * Contains extended information for property 'exampleBoolean'.
         */
        _exampleBoolean?: Element;
        /**
         * Is an example/What is this an example of?
         */
        exampleCanonical?: canonical;
        /**
         * Contains extended information for property 'exampleCanonical'.
         */
        _exampleCanonical?: Element;
        /**
         * Relative path for page in IG
         */
        relativePath?: url;
        /**
         * Contains extended information for property 'relativePath'.
         */
        _relativePath?: Element;
    }
    /**
     * HTML page within the parent IG
     */
    interface ImplementationGuideManifestPage extends BackboneElement {
        /**
         * HTML page name
         */
        name: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Title of the page, for references
         */
        title?: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
        /**
         * Anchor available on the page
         */
        anchor?: string[];
        /**
         * Contains extended information for property 'anchor'.
         */
        _anchor?: Element[];
    }
    /**
     * A set of rules about how FHIR is used
     */
    interface ImplementationGuide extends DomainResource {
        /**
         * Canonical identifier for this implementation guide, represented as a URI (globally unique)
         */
        url: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Business version of the implementation guide
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
        /**
         * Name for this implementation guide (computer friendly)
         */
        name: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Name for this implementation guide (human friendly)
         */
        title?: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
        /**
         * draft | active | retired | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * For testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Contains extended information for property 'experimental'.
         */
        _experimental?: Element;
        /**
         * Date last changed
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Name of the publisher (organization or individual)
         */
        publisher?: string;
        /**
         * Contains extended information for property 'publisher'.
         */
        _publisher?: Element;
        /**
         * Contact details for the publisher
         */
        contact?: ContactDetail[];
        /**
         * Natural language description of the implementation guide
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * The context that the content is intended to support
         */
        useContext?: UsageContext[];
        /**
         * Intended jurisdiction for implementation guide (if applicable)
         */
        jurisdiction?: CodeableConcept[];
        /**
         * Use and/or publishing restrictions
         */
        copyright?: markdown;
        /**
         * Contains extended information for property 'copyright'.
         */
        _copyright?: Element;
        /**
         * NPM Package name for IG
         */
        packageId: id;
        /**
         * Contains extended information for property 'packageId'.
         */
        _packageId?: Element;
        /**
         * SPDX license code for this IG (or not-open-source)
         */
        license?: code;
        /**
         * Contains extended information for property 'license'.
         */
        _license?: Element;
        /**
         * FHIR Version(s) this Implementation Guide targets
         */
        fhirVersion: code[];
        /**
         * Contains extended information for property 'fhirVersion'.
         */
        _fhirVersion?: Element[];
        /**
         * Another Implementation guide this depends on
         */
        dependsOn?: ImplementationGuideDependsOn[];
        /**
         * Profiles that apply globally
         */
        global?: ImplementationGuideGlobal[];
        /**
         * Information needed to build the IG
         */
        definition?: ImplementationGuideDefinition;
        /**
         * Information about an assembled IG
         */
        manifest?: ImplementationGuideManifest;
    }
    /**
     * Contact for the product
     */
    interface InsurancePlanContact extends BackboneElement {
        /**
         * The type of contact
         */
        purpose?: CodeableConcept;
        /**
         * A name associated with the contact
         */
        name?: HumanName;
        /**
         * Contact details (telephone, email, etc.)  for a contact
         */
        telecom?: ContactPoint[];
        /**
         * Visiting or postal addresses for the contact
         */
        address?: Address;
    }
    /**
     * Coverage details
     */
    interface InsurancePlanCoverage extends BackboneElement {
        /**
         * Type of coverage
         */
        type: CodeableConcept;
        /**
         * What networks provide coverage
         */
        network?: Reference[];
        /**
         * List of benefits
         */
        benefit: InsurancePlanCoverageBenefit[];
    }
    /**
     * List of benefits
     */
    interface InsurancePlanCoverageBenefit extends BackboneElement {
        /**
         * Type of benefit
         */
        type: CodeableConcept;
        /**
         * Referral requirements
         */
        requirement?: string;
        /**
         * Contains extended information for property 'requirement'.
         */
        _requirement?: Element;
        /**
         * Benefit limits
         */
        limit?: InsurancePlanCoverageBenefitLimit[];
    }
    /**
     * Benefit limits
     */
    interface InsurancePlanCoverageBenefitLimit extends BackboneElement {
        /**
         * Maximum value allowed
         */
        value?: Quantity;
        /**
         * Benefit limit details
         */
        code?: CodeableConcept;
    }
    /**
     * Plan details
     */
    interface InsurancePlanPlan extends BackboneElement {
        /**
         * Business Identifier for Product
         */
        identifier?: Identifier[];
        /**
         * Type of plan
         */
        type?: CodeableConcept;
        /**
         * Where product applies
         */
        coverageArea?: Reference[];
        /**
         * What networks provide coverage
         */
        network?: Reference[];
        /**
         * Overall costs
         */
        generalCost?: InsurancePlanPlanGeneralCost[];
        /**
         * Specific costs
         */
        specificCost?: InsurancePlanPlanSpecificCost[];
    }
    /**
     * Overall costs
     */
    interface InsurancePlanPlanGeneralCost extends BackboneElement {
        /**
         * Type of cost
         */
        type?: CodeableConcept;
        /**
         * Number of enrollees
         */
        groupSize?: positiveInt;
        /**
         * Contains extended information for property 'groupSize'.
         */
        _groupSize?: Element;
        /**
         * Cost value
         */
        cost?: Money;
        /**
         * Additional cost information
         */
        comment?: string;
        /**
         * Contains extended information for property 'comment'.
         */
        _comment?: Element;
    }
    /**
     * Specific costs
     */
    interface InsurancePlanPlanSpecificCost extends BackboneElement {
        /**
         * General category of benefit
         */
        category: CodeableConcept;
        /**
         * Benefits list
         */
        benefit?: InsurancePlanPlanSpecificCostBenefit[];
    }
    /**
     * Benefits list
     */
    interface InsurancePlanPlanSpecificCostBenefit extends BackboneElement {
        /**
         * Type of specific benefit
         */
        type: CodeableConcept;
        /**
         * List of the costs
         */
        cost?: InsurancePlanPlanSpecificCostBenefitCost[];
    }
    /**
     * List of the costs
     */
    interface InsurancePlanPlanSpecificCostBenefitCost extends BackboneElement {
        /**
         * Type of cost
         */
        type: CodeableConcept;
        /**
         * in-network | out-of-network | other
         */
        applicability?: CodeableConcept;
        /**
         * Additional information about the cost
         */
        qualifiers?: CodeableConcept[];
        /**
         * The actual cost value
         */
        value?: Quantity;
    }
    /**
     * Details of a Health Insurance product/plan provided by an organization
     */
    interface InsurancePlan extends DomainResource {
        /**
         * Business Identifier for Product
         */
        identifier?: Identifier[];
        /**
         * draft | active | retired | unknown
         */
        status?: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Kind of product
         */
        type?: CodeableConcept[];
        /**
         * Official name
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Alternate names
         */
        alias?: string[];
        /**
         * Contains extended information for property 'alias'.
         */
        _alias?: Element[];
        /**
         * When the product is available
         */
        period?: Period;
        /**
         * Plan issuer
         */
        ownedBy?: Reference;
        /**
         * Product administrator
         */
        administeredBy?: Reference;
        /**
         * Where product applies
         */
        coverageArea?: Reference[];
        /**
         * Contact for the product
         */
        contact?: InsurancePlanContact[];
        /**
         * Technical endpoint
         */
        endpoint?: Reference[];
        /**
         * What networks are Included
         */
        network?: Reference[];
        /**
         * Coverage details
         */
        coverage?: InsurancePlanCoverage[];
        /**
         * Plan details
         */
        plan?: InsurancePlanPlan[];
    }
    /**
     * Participant in creation of this Invoice
     */
    interface InvoiceParticipant extends BackboneElement {
        /**
         * Type of involvement in creation of this Invoice
         */
        role?: CodeableConcept;
        /**
         * Individual who was involved
         */
        actor: Reference;
    }
    /**
     * Line items of this Invoice
     */
    interface InvoiceLineItem extends BackboneElement {
        /**
         * Sequence number of line item
         */
        sequence?: positiveInt;
        /**
         * Contains extended information for property 'sequence'.
         */
        _sequence?: Element;
        /**
         * Reference to ChargeItem containing details of this line item or an inline billing code
         */
        chargeItemReference?: Reference;
        /**
         * Reference to ChargeItem containing details of this line item or an inline billing code
         */
        chargeItemCodeableConcept?: CodeableConcept;
        /**
         * Components of total line item price
         */
        priceComponent?: InvoiceLineItemPriceComponent[];
    }
    /**
     * Components of total line item price
     */
    interface InvoiceLineItemPriceComponent extends BackboneElement {
        /**
         * base | surcharge | deduction | discount | tax | informational
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * Code identifying the specific component
         */
        code?: CodeableConcept;
        /**
         * Factor used for calculating this component
         */
        factor?: decimal;
        /**
         * Contains extended information for property 'factor'.
         */
        _factor?: Element;
        /**
         * Monetary amount associated with this component
         */
        amount?: Money;
    }
    /**
     * Invoice containing ChargeItems from an Account
     */
    interface Invoice extends DomainResource {
        /**
         * Business Identifier for item
         */
        identifier?: Identifier[];
        /**
         * draft | issued | balanced | cancelled | entered-in-error
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Reason for cancellation of this Invoice
         */
        cancelledReason?: string;
        /**
         * Contains extended information for property 'cancelledReason'.
         */
        _cancelledReason?: Element;
        /**
         * Type of Invoice
         */
        type?: CodeableConcept;
        /**
         * Recipient(s) of goods and services
         */
        subject?: Reference;
        /**
         * Recipient of this invoice
         */
        recipient?: Reference;
        /**
         * Invoice date / posting date
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Participant in creation of this Invoice
         */
        participant?: InvoiceParticipant[];
        /**
         * Issuing Organization of Invoice
         */
        issuer?: Reference;
        /**
         * Account that is being balanced
         */
        account?: Reference;
        /**
         * Line items of this Invoice
         */
        lineItem?: InvoiceLineItem[];
        /**
         * Components of Invoice total
         */
        totalPriceComponent?: InvoiceLineItemPriceComponent[];
        /**
         * Net total of this Invoice
         */
        totalNet?: Money;
        /**
         * Gross total of this Invoice
         */
        totalGross?: Money;
        /**
         * Payment details
         */
        paymentTerms?: markdown;
        /**
         * Contains extended information for property 'paymentTerms'.
         */
        _paymentTerms?: Element;
        /**
         * Comments made about the invoice
         */
        note?: Annotation[];
    }
    /**
     * Represents a library of quality improvement components
     */
    interface Library extends DomainResource {
        /**
         * Canonical identifier for this library, represented as a URI (globally unique)
         */
        url?: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Additional identifier for the library
         */
        identifier?: Identifier[];
        /**
         * Business version of the library
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
        /**
         * Name for this library (computer friendly)
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Name for this library (human friendly)
         */
        title?: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
        /**
         * Subordinate title of the library
         */
        subtitle?: string;
        /**
         * Contains extended information for property 'subtitle'.
         */
        _subtitle?: Element;
        /**
         * draft | active | retired | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * For testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Contains extended information for property 'experimental'.
         */
        _experimental?: Element;
        /**
         * logic-library | model-definition | asset-collection | module-definition
         */
        type: CodeableConcept;
        /**
         * Type of individual the library content is focused on
         */
        subjectCodeableConcept?: CodeableConcept;
        /**
         * Type of individual the library content is focused on
         */
        subjectReference?: Reference;
        /**
         * Date last changed
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Name of the publisher (organization or individual)
         */
        publisher?: string;
        /**
         * Contains extended information for property 'publisher'.
         */
        _publisher?: Element;
        /**
         * Contact details for the publisher
         */
        contact?: ContactDetail[];
        /**
         * Natural language description of the library
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * The context that the content is intended to support
         */
        useContext?: UsageContext[];
        /**
         * Intended jurisdiction for library (if applicable)
         */
        jurisdiction?: CodeableConcept[];
        /**
         * Why this library is defined
         */
        purpose?: markdown;
        /**
         * Contains extended information for property 'purpose'.
         */
        _purpose?: Element;
        /**
         * Describes the clinical usage of the library
         */
        usage?: string;
        /**
         * Contains extended information for property 'usage'.
         */
        _usage?: Element;
        /**
         * Use and/or publishing restrictions
         */
        copyright?: markdown;
        /**
         * Contains extended information for property 'copyright'.
         */
        _copyright?: Element;
        /**
         * When the library was approved by publisher
         */
        approvalDate?: date;
        /**
         * Contains extended information for property 'approvalDate'.
         */
        _approvalDate?: Element;
        /**
         * When the library was last reviewed
         */
        lastReviewDate?: date;
        /**
         * Contains extended information for property 'lastReviewDate'.
         */
        _lastReviewDate?: Element;
        /**
         * When the library is expected to be used
         */
        effectivePeriod?: Period;
        /**
         * E.g. Education, Treatment, Assessment, etc.
         */
        topic?: CodeableConcept[];
        /**
         * Who authored the content
         */
        author?: ContactDetail[];
        /**
         * Who edited the content
         */
        editor?: ContactDetail[];
        /**
         * Who reviewed the content
         */
        reviewer?: ContactDetail[];
        /**
         * Who endorsed the content
         */
        endorser?: ContactDetail[];
        /**
         * Additional documentation, citations, etc.
         */
        relatedArtifact?: RelatedArtifact[];
        /**
         * Parameters defined by the library
         */
        parameter?: ParameterDefinition[];
        /**
         * What data is referenced by this library
         */
        dataRequirement?: DataRequirement[];
        /**
         * Contents of the library, either embedded or referenced
         */
        content?: Attachment[];
    }
    /**
     * Item to be linked
     */
    interface LinkageItem extends BackboneElement {
        /**
         * source | alternate | historical
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * Resource being linked
         */
        resource: Reference;
    }
    /**
     * Links records for 'same' item
     */
    interface Linkage extends DomainResource {
        /**
         * Whether this linkage assertion is active or not
         */
        active?: boolean;
        /**
         * Contains extended information for property 'active'.
         */
        _active?: Element;
        /**
         * Who is responsible for linkages
         */
        author?: Reference;
        /**
         * Item to be linked
         */
        item: LinkageItem[];
    }
    /**
     * Entries in the list
     */
    interface ListEntry extends BackboneElement {
        /**
         * Status/Workflow information about this item
         */
        flag?: CodeableConcept;
        /**
         * If this item is actually marked as deleted
         */
        deleted?: boolean;
        /**
         * Contains extended information for property 'deleted'.
         */
        _deleted?: Element;
        /**
         * When item added to list
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Actual entry
         */
        item: Reference;
    }
    /**
     * A list is a curated collection of resources
     */
    interface List extends DomainResource {
        /**
         * Business identifier
         */
        identifier?: Identifier[];
        /**
         * current | retired | entered-in-error
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * working | snapshot | changes
         */
        mode: code;
        /**
         * Contains extended information for property 'mode'.
         */
        _mode?: Element;
        /**
         * Descriptive name for the list
         */
        title?: string;
        /**
         * Contains extended information for property 'title'.
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
         * Context in which list created
         */
        encounter?: Reference;
        /**
         * When the list was prepared
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Who and/or what defined the list contents (aka Author)
         */
        source?: Reference;
        /**
         * What order the list has
         */
        orderedBy?: CodeableConcept;
        /**
         * Comments about the list
         */
        note?: Annotation[];
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
     * The absolute geographic location
     */
    interface LocationPosition extends BackboneElement {
        /**
         * Longitude with WGS84 datum
         */
        longitude: decimal;
        /**
         * Contains extended information for property 'longitude'.
         */
        _longitude?: Element;
        /**
         * Latitude with WGS84 datum
         */
        latitude: decimal;
        /**
         * Contains extended information for property 'latitude'.
         */
        _latitude?: Element;
        /**
         * Altitude with WGS84 datum
         */
        altitude?: decimal;
        /**
         * Contains extended information for property 'altitude'.
         */
        _altitude?: Element;
    }
    /**
     * What days/times during a week is this location usually open
     */
    interface LocationHoursOfOperation extends BackboneElement {
        /**
         * mon | tue | wed | thu | fri | sat | sun
         */
        daysOfWeek?: code[];
        /**
         * Contains extended information for property 'daysOfWeek'.
         */
        _daysOfWeek?: Element[];
        /**
         * The Location is open all day
         */
        allDay?: boolean;
        /**
         * Contains extended information for property 'allDay'.
         */
        _allDay?: Element;
        /**
         * Time that the Location opens
         */
        openingTime?: time;
        /**
         * Contains extended information for property 'openingTime'.
         */
        _openingTime?: Element;
        /**
         * Time that the Location closes
         */
        closingTime?: time;
        /**
         * Contains extended information for property 'closingTime'.
         */
        _closingTime?: Element;
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
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * The operational status of the location (typically only for a bed/room)
         */
        operationalStatus?: Coding;
        /**
         * Name of the location as used by humans
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * A list of alternate names that the location is known as, or was known as, in the past
         */
        alias?: string[];
        /**
         * Contains extended information for property 'alias'.
         */
        _alias?: Element[];
        /**
         * Additional details about the location that could be displayed as further information to identify the location beyond its name
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * instance | kind
         */
        mode?: code;
        /**
         * Contains extended information for property 'mode'.
         */
        _mode?: Element;
        /**
         * Type of function performed
         */
        type?: CodeableConcept[];
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
         * Organization responsible for provisioning and upkeep
         */
        managingOrganization?: Reference;
        /**
         * Another Location this one is physically a part of
         */
        partOf?: Reference;
        /**
         * What days/times during a week is this location usually open
         */
        hoursOfOperation?: LocationHoursOfOperation[];
        /**
         * Description of availability exceptions
         */
        availabilityExceptions?: string;
        /**
         * Contains extended information for property 'availabilityExceptions'.
         */
        _availabilityExceptions?: Element;
        /**
         * Technical endpoints providing access to services operated for the location
         */
        endpoint?: Reference[];
    }
    /**
     * Population criteria group
     */
    interface MeasureGroup extends BackboneElement {
        /**
         * Meaning of the group
         */
        code?: CodeableConcept;
        /**
         * Summary description
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Population criteria
         */
        population?: MeasureGroupPopulation[];
        /**
         * Stratifier criteria for the measure
         */
        stratifier?: MeasureGroupStratifier[];
    }
    /**
     * Population criteria
     */
    interface MeasureGroupPopulation extends BackboneElement {
        /**
         * initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation
         */
        code?: CodeableConcept;
        /**
         * The human readable description of this population criteria
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * The criteria that defines this population
         */
        criteria: Expression;
    }
    /**
     * Stratifier criteria for the measure
     */
    interface MeasureGroupStratifier extends BackboneElement {
        /**
         * Meaning of the stratifier
         */
        code?: CodeableConcept;
        /**
         * The human readable description of this stratifier
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * How the measure should be stratified
         */
        criteria?: Expression;
        /**
         * Stratifier criteria component for the measure
         */
        component?: MeasureGroupStratifierComponent[];
    }
    /**
     * Stratifier criteria component for the measure
     */
    interface MeasureGroupStratifierComponent extends BackboneElement {
        /**
         * Meaning of the stratifier component
         */
        code?: CodeableConcept;
        /**
         * The human readable description of this stratifier component
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Component of how the measure should be stratified
         */
        criteria: Expression;
    }
    /**
     * What other data should be reported with the measure
     */
    interface MeasureSupplementalData extends BackboneElement {
        /**
         * Meaning of the supplemental data
         */
        code?: CodeableConcept;
        /**
         * supplemental-data | risk-adjustment-factor
         */
        usage?: CodeableConcept[];
        /**
         * The human readable description of this supplemental data
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Expression describing additional data to be reported
         */
        criteria: Expression;
    }
    /**
     * A quality measure definition
     */
    interface Measure extends DomainResource {
        /**
         * Canonical identifier for this measure, represented as a URI (globally unique)
         */
        url?: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Additional identifier for the measure
         */
        identifier?: Identifier[];
        /**
         * Business version of the measure
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
        /**
         * Name for this measure (computer friendly)
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Name for this measure (human friendly)
         */
        title?: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
        /**
         * Subordinate title of the measure
         */
        subtitle?: string;
        /**
         * Contains extended information for property 'subtitle'.
         */
        _subtitle?: Element;
        /**
         * draft | active | retired | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * For testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Contains extended information for property 'experimental'.
         */
        _experimental?: Element;
        /**
         * E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device
         */
        subjectCodeableConcept?: CodeableConcept;
        /**
         * E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device
         */
        subjectReference?: Reference;
        /**
         * Date last changed
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Name of the publisher (organization or individual)
         */
        publisher?: string;
        /**
         * Contains extended information for property 'publisher'.
         */
        _publisher?: Element;
        /**
         * Contact details for the publisher
         */
        contact?: ContactDetail[];
        /**
         * Natural language description of the measure
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * The context that the content is intended to support
         */
        useContext?: UsageContext[];
        /**
         * Intended jurisdiction for measure (if applicable)
         */
        jurisdiction?: CodeableConcept[];
        /**
         * Why this measure is defined
         */
        purpose?: markdown;
        /**
         * Contains extended information for property 'purpose'.
         */
        _purpose?: Element;
        /**
         * Describes the clinical usage of the measure
         */
        usage?: string;
        /**
         * Contains extended information for property 'usage'.
         */
        _usage?: Element;
        /**
         * Use and/or publishing restrictions
         */
        copyright?: markdown;
        /**
         * Contains extended information for property 'copyright'.
         */
        _copyright?: Element;
        /**
         * When the measure was approved by publisher
         */
        approvalDate?: date;
        /**
         * Contains extended information for property 'approvalDate'.
         */
        _approvalDate?: Element;
        /**
         * When the measure was last reviewed
         */
        lastReviewDate?: date;
        /**
         * Contains extended information for property 'lastReviewDate'.
         */
        _lastReviewDate?: Element;
        /**
         * When the measure is expected to be used
         */
        effectivePeriod?: Period;
        /**
         * The category of the measure, such as Education, Treatment, Assessment, etc.
         */
        topic?: CodeableConcept[];
        /**
         * Who authored the content
         */
        author?: ContactDetail[];
        /**
         * Who edited the content
         */
        editor?: ContactDetail[];
        /**
         * Who reviewed the content
         */
        reviewer?: ContactDetail[];
        /**
         * Who endorsed the content
         */
        endorser?: ContactDetail[];
        /**
         * Additional documentation, citations, etc.
         */
        relatedArtifact?: RelatedArtifact[];
        /**
         * Logic used by the measure
         */
        library?: canonical[];
        /**
         * Contains extended information for property 'library'.
         */
        _library?: Element[];
        /**
         * Disclaimer for use of the measure or its referenced content
         */
        disclaimer?: markdown;
        /**
         * Contains extended information for property 'disclaimer'.
         */
        _disclaimer?: Element;
        /**
         * proportion | ratio | continuous-variable | cohort
         */
        scoring?: CodeableConcept;
        /**
         * opportunity | all-or-nothing | linear | weighted
         */
        compositeScoring?: CodeableConcept;
        /**
         * process | outcome | structure | patient-reported-outcome | composite
         */
        type?: CodeableConcept[];
        /**
         * How risk adjustment is applied for this measure
         */
        riskAdjustment?: string;
        /**
         * Contains extended information for property 'riskAdjustment'.
         */
        _riskAdjustment?: Element;
        /**
         * How is rate aggregation performed for this measure
         */
        rateAggregation?: string;
        /**
         * Contains extended information for property 'rateAggregation'.
         */
        _rateAggregation?: Element;
        /**
         * Detailed description of why the measure exists
         */
        rationale?: markdown;
        /**
         * Contains extended information for property 'rationale'.
         */
        _rationale?: Element;
        /**
         * Summary of clinical guidelines
         */
        clinicalRecommendationStatement?: markdown;
        /**
         * Contains extended information for property 'clinicalRecommendationStatement'.
         */
        _clinicalRecommendationStatement?: Element;
        /**
         * increase | decrease
         */
        improvementNotation?: CodeableConcept;
        /**
         * Defined terms used in the measure documentation
         */
        definition?: markdown[];
        /**
         * Contains extended information for property 'definition'.
         */
        _definition?: Element[];
        /**
         * Additional guidance for implementers
         */
        guidance?: markdown;
        /**
         * Contains extended information for property 'guidance'.
         */
        _guidance?: Element;
        /**
         * Population criteria group
         */
        group?: MeasureGroup[];
        /**
         * What other data should be reported with the measure
         */
        supplementalData?: MeasureSupplementalData[];
    }
    /**
     * Measure results for each group
     */
    interface MeasureReportGroup extends BackboneElement {
        /**
         * Meaning of the group
         */
        code?: CodeableConcept;
        /**
         * The populations in the group
         */
        population?: MeasureReportGroupPopulation[];
        /**
         * What score this group achieved
         */
        measureScore?: Quantity;
        /**
         * Stratification results
         */
        stratifier?: MeasureReportGroupStratifier[];
    }
    /**
     * The populations in the group
     */
    interface MeasureReportGroupPopulation extends BackboneElement {
        /**
         * initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation
         */
        code?: CodeableConcept;
        /**
         * Size of the population
         */
        count?: integer;
        /**
         * Contains extended information for property 'count'.
         */
        _count?: Element;
        /**
         * For subject-list reports, the subject results in this population
         */
        subjectResults?: Reference;
    }
    /**
     * Stratification results
     */
    interface MeasureReportGroupStratifier extends BackboneElement {
        /**
         * What stratifier of the group
         */
        code?: CodeableConcept[];
        /**
         * Stratum results, one for each unique value, or set of values, in the stratifier, or stratifier components
         */
        stratum?: MeasureReportGroupStratifierStratum[];
    }
    /**
     * Stratum results, one for each unique value, or set of values, in the stratifier, or stratifier components
     */
    interface MeasureReportGroupStratifierStratum extends BackboneElement {
        /**
         * The stratum value, e.g. male
         */
        value?: CodeableConcept;
        /**
         * Stratifier component values
         */
        component?: MeasureReportGroupStratifierStratumComponent[];
        /**
         * Population results in this stratum
         */
        population?: MeasureReportGroupStratifierStratumPopulation[];
        /**
         * What score this stratum achieved
         */
        measureScore?: Quantity;
    }
    /**
     * Stratifier component values
     */
    interface MeasureReportGroupStratifierStratumComponent extends BackboneElement {
        /**
         * What stratifier component of the group
         */
        code: CodeableConcept;
        /**
         * The stratum component value, e.g. male
         */
        value: CodeableConcept;
    }
    /**
     * Population results in this stratum
     */
    interface MeasureReportGroupStratifierStratumPopulation extends BackboneElement {
        /**
         * initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation
         */
        code?: CodeableConcept;
        /**
         * Size of the population
         */
        count?: integer;
        /**
         * Contains extended information for property 'count'.
         */
        _count?: Element;
        /**
         * For subject-list reports, the subject results in this population
         */
        subjectResults?: Reference;
    }
    /**
     * Results of a measure evaluation
     */
    interface MeasureReport extends DomainResource {
        /**
         * Additional identifier for the MeasureReport
         */
        identifier?: Identifier[];
        /**
         * complete | pending | error
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * individual | subject-list | summary | data-collection
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * What measure was calculated
         */
        measure: canonical;
        /**
         * Contains extended information for property 'measure'.
         */
        _measure?: Element;
        /**
         * What individual(s) the report is for
         */
        subject?: Reference;
        /**
         * When the report was generated
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Who is reporting the data
         */
        reporter?: Reference;
        /**
         * What period the report covers
         */
        period: Period;
        /**
         * increase | decrease
         */
        improvementNotation?: CodeableConcept;
        /**
         * Measure results for each group
         */
        group?: MeasureReportGroup[];
        /**
         * What data was used to calculate the measure score
         */
        evaluatedResource?: Reference[];
    }
    /**
     * A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference
     */
    interface Media extends DomainResource {
        /**
         * Identifier(s) for the image
         */
        identifier?: Identifier[];
        /**
         * Procedure that caused this media to be created
         */
        basedOn?: Reference[];
        /**
         * Part of referenced event
         */
        partOf?: Reference[];
        /**
         * preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Classification of media as image, video, or audio
         */
        type?: CodeableConcept;
        /**
         * The type of acquisition equipment/process
         */
        modality?: CodeableConcept;
        /**
         * Imaging view, e.g. Lateral or Antero-posterior
         */
        view?: CodeableConcept;
        /**
         * Who/What this Media is a record of
         */
        subject?: Reference;
        /**
         * Encounter associated with media
         */
        encounter?: Reference;
        /**
         * When Media was collected
         */
        createdDateTime?: dateTime;
        /**
         * Contains extended information for property 'createdDateTime'.
         */
        _createdDateTime?: Element;
        /**
         * When Media was collected
         */
        createdPeriod?: Period;
        /**
         * Date/Time this version was made available
         */
        issued?: instant;
        /**
         * Contains extended information for property 'issued'.
         */
        _issued?: Element;
        /**
         * The person who generated the image
         */
        operator?: Reference;
        /**
         * Why was event performed?
         */
        reasonCode?: CodeableConcept[];
        /**
         * Observed body part
         */
        bodySite?: CodeableConcept;
        /**
         * Name of the device/manufacturer
         */
        deviceName?: string;
        /**
         * Contains extended information for property 'deviceName'.
         */
        _deviceName?: Element;
        /**
         * Observing Device
         */
        device?: Reference;
        /**
         * Height of the image in pixels (photo/video)
         */
        height?: positiveInt;
        /**
         * Contains extended information for property 'height'.
         */
        _height?: Element;
        /**
         * Width of the image in pixels (photo/video)
         */
        width?: positiveInt;
        /**
         * Contains extended information for property 'width'.
         */
        _width?: Element;
        /**
         * Number of frames if > 1 (photo)
         */
        frames?: positiveInt;
        /**
         * Contains extended information for property 'frames'.
         */
        _frames?: Element;
        /**
         * Length in seconds (audio / video)
         */
        duration?: decimal;
        /**
         * Contains extended information for property 'duration'.
         */
        _duration?: Element;
        /**
         * Actual Media - reference or data
         */
        content: Attachment;
        /**
         * Comments made about the media
         */
        note?: Annotation[];
    }
    /**
     * Active or inactive ingredient
     */
    interface MedicationIngredient extends BackboneElement {
        /**
         * The actual ingredient or content
         */
        itemCodeableConcept?: CodeableConcept;
        /**
         * The actual ingredient or content
         */
        itemReference?: Reference;
        /**
         * Active ingredient indicator
         */
        isActive?: boolean;
        /**
         * Contains extended information for property 'isActive'.
         */
        _isActive?: Element;
        /**
         * Quantity of ingredient present
         */
        strength?: Ratio;
    }
    /**
     * Details about packaged medications
     */
    interface MedicationBatch extends BackboneElement {
        /**
         * Identifier assigned to batch
         */
        lotNumber?: string;
        /**
         * Contains extended information for property 'lotNumber'.
         */
        _lotNumber?: Element;
        /**
         * When batch will expire
         */
        expirationDate?: dateTime;
        /**
         * Contains extended information for property 'expirationDate'.
         */
        _expirationDate?: Element;
    }
    /**
     * Definition of a Medication
     */
    interface Medication extends DomainResource {
        /**
         * Business identifier for this medication
         */
        identifier?: Identifier[];
        /**
         * Codes that identify this medication
         */
        code?: CodeableConcept;
        /**
         * active | inactive | entered-in-error
         */
        status?: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Manufacturer of the item
         */
        manufacturer?: Reference;
        /**
         * powder | tablets | capsule +
         */
        form?: CodeableConcept;
        /**
         * Amount of drug in package
         */
        amount?: Ratio;
        /**
         * Active or inactive ingredient
         */
        ingredient?: MedicationIngredient[];
        /**
         * Details about packaged medications
         */
        batch?: MedicationBatch;
    }
    /**
     * Who performed the medication administration and what they did
     */
    interface MedicationAdministrationPerformer extends BackboneElement {
        /**
         * Type of performance
         */
        function?: CodeableConcept;
        /**
         * Who performed the medication administration
         */
        actor: Reference;
    }
    /**
     * Details of how medication was taken
     */
    interface MedicationAdministrationDosage extends BackboneElement {
        /**
         * Free text dosage instructions e.g. SIG
         */
        text?: string;
        /**
         * Contains extended information for property 'text'.
         */
        _text?: Element;
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
         * Amount of medication per dose
         */
        dose?: Quantity;
        /**
         * Dose quantity per unit of time
         */
        rateRatio?: Ratio;
        /**
         * Dose quantity per unit of time
         */
        rateQuantity?: Quantity;
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
         * Instantiates protocol or definition
         */
        instantiates?: uri[];
        /**
         * Contains extended information for property 'instantiates'.
         */
        _instantiates?: Element[];
        /**
         * Part of referenced event
         */
        partOf?: Reference[];
        /**
         * in-progress | not-done | on-hold | completed | entered-in-error | stopped | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Reason administration not performed
         */
        statusReason?: CodeableConcept[];
        /**
         * Type of medication usage
         */
        category?: CodeableConcept;
        /**
         * What was administered
         */
        medicationCodeableConcept?: CodeableConcept;
        /**
         * What was administered
         */
        medicationReference?: Reference;
        /**
         * Who received medication
         */
        subject: Reference;
        /**
         * Encounter or Episode of Care administered as part of
         */
        context?: Reference;
        /**
         * Additional information to support administration
         */
        supportingInformation?: Reference[];
        /**
         * Start and end time of administration
         */
        effectiveDateTime?: dateTime;
        /**
         * Contains extended information for property 'effectiveDateTime'.
         */
        _effectiveDateTime?: Element;
        /**
         * Start and end time of administration
         */
        effectivePeriod?: Period;
        /**
         * Who performed the medication administration and what they did
         */
        performer?: MedicationAdministrationPerformer[];
        /**
         * Reason administration performed
         */
        reasonCode?: CodeableConcept[];
        /**
         * Condition or observation that supports why the medication was administered
         */
        reasonReference?: Reference[];
        /**
         * Request administration performed against
         */
        request?: Reference;
        /**
         * Device used to administer
         */
        device?: Reference[];
        /**
         * Information about the administration
         */
        note?: Annotation[];
        /**
         * Details of how medication was taken
         */
        dosage?: MedicationAdministrationDosage;
        /**
         * A list of events of interest in the lifecycle
         */
        eventHistory?: Reference[];
    }
    /**
     * Who performed event
     */
    interface MedicationDispensePerformer extends BackboneElement {
        /**
         * Who performed the dispense and what they did
         */
        function?: CodeableConcept;
        /**
         * Individual who was performing
         */
        actor: Reference;
    }
    /**
     * Whether a substitution was performed on the dispense
     */
    interface MedicationDispenseSubstitution extends BackboneElement {
        /**
         * Whether a substitution was or was not performed on the dispense
         */
        wasSubstituted: boolean;
        /**
         * Contains extended information for property 'wasSubstituted'.
         */
        _wasSubstituted?: Element;
        /**
         * Code signifying whether a different drug was dispensed from what was prescribed
         */
        type?: CodeableConcept;
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
        identifier?: Identifier[];
        /**
         * Event that dispense is part of
         */
        partOf?: Reference[];
        /**
         * preparation | in-progress | cancelled | on-hold | completed | entered-in-error | stopped | declined | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Why a dispense was not performed
         */
        statusReasonCodeableConcept?: CodeableConcept;
        /**
         * Why a dispense was not performed
         */
        statusReasonReference?: Reference;
        /**
         * Type of medication dispense
         */
        category?: CodeableConcept;
        /**
         * What medication was supplied
         */
        medicationCodeableConcept?: CodeableConcept;
        /**
         * What medication was supplied
         */
        medicationReference?: Reference;
        /**
         * Who the dispense is for
         */
        subject?: Reference;
        /**
         * Encounter / Episode associated with event
         */
        context?: Reference;
        /**
         * Information that supports the dispensing of the medication
         */
        supportingInformation?: Reference[];
        /**
         * Who performed event
         */
        performer?: MedicationDispensePerformer[];
        /**
         * Where the dispense occurred
         */
        location?: Reference;
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
         * Amount of medication expressed as a timing amount
         */
        daysSupply?: Quantity;
        /**
         * When product was packaged and reviewed
         */
        whenPrepared?: dateTime;
        /**
         * Contains extended information for property 'whenPrepared'.
         */
        _whenPrepared?: Element;
        /**
         * When product was given out
         */
        whenHandedOver?: dateTime;
        /**
         * Contains extended information for property 'whenHandedOver'.
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
        note?: Annotation[];
        /**
         * How the medication is to be used by the patient or administered by the caregiver
         */
        dosageInstruction?: Dosage[];
        /**
         * Whether a substitution was performed on the dispense
         */
        substitution?: MedicationDispenseSubstitution;
        /**
         * Clinical issue with action
         */
        detectedIssue?: Reference[];
        /**
         * A list of relevant lifecycle events
         */
        eventHistory?: Reference[];
    }
    /**
     * Associated or related medication information
     */
    interface MedicationKnowledgeRelatedMedicationKnowledge extends BackboneElement {
        /**
         * Category of medicationKnowledge
         */
        type: CodeableConcept;
        /**
         * Associated documentation about the associated medication knowledge
         */
        reference: Reference[];
    }
    /**
     * Associated documentation about the medication
     */
    interface MedicationKnowledgeMonograph extends BackboneElement {
        /**
         * The category of medication document
         */
        type?: CodeableConcept;
        /**
         * Associated documentation about the medication
         */
        source?: Reference;
    }
    /**
     * Active or inactive ingredient
     */
    interface MedicationKnowledgeIngredient extends BackboneElement {
        /**
         * Medication(s) or substance(s) contained in the medication
         */
        itemCodeableConcept?: CodeableConcept;
        /**
         * Medication(s) or substance(s) contained in the medication
         */
        itemReference?: Reference;
        /**
         * Active ingredient indicator
         */
        isActive?: boolean;
        /**
         * Contains extended information for property 'isActive'.
         */
        _isActive?: Element;
        /**
         * Quantity of ingredient present
         */
        strength?: Ratio;
    }
    /**
     * The pricing of the medication
     */
    interface MedicationKnowledgeCost extends BackboneElement {
        /**
         * The category of the cost information
         */
        type: CodeableConcept;
        /**
         * The source or owner for the price information
         */
        source?: string;
        /**
         * Contains extended information for property 'source'.
         */
        _source?: Element;
        /**
         * The price of the medication
         */
        cost: Money;
    }
    /**
     * Program under which a medication is reviewed
     */
    interface MedicationKnowledgeMonitoringProgram extends BackboneElement {
        /**
         * Type of program under which the medication is monitored
         */
        type?: CodeableConcept;
        /**
         * Name of the reviewing program
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
    }
    /**
     * Guidelines for administration of the medication
     */
    interface MedicationKnowledgeAdministrationGuidelines extends BackboneElement {
        /**
         * Dosage for the medication for the specific guidelines
         */
        dosage?: MedicationKnowledgeAdministrationGuidelinesDosage[];
        /**
         * Indication for use that apply to the specific administration guidelines
         */
        indicationCodeableConcept?: CodeableConcept;
        /**
         * Indication for use that apply to the specific administration guidelines
         */
        indicationReference?: Reference;
        /**
         * Characteristics of the patient that are relevant to the administration guidelines
         */
        patientCharacteristics?: MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics[];
    }
    /**
     * Dosage for the medication for the specific guidelines
     */
    interface MedicationKnowledgeAdministrationGuidelinesDosage extends BackboneElement {
        /**
         * Type of dosage
         */
        type: CodeableConcept;
        /**
         * Dosage for the medication for the specific guidelines
         */
        dosage: Dosage[];
    }
    /**
     * Characteristics of the patient that are relevant to the administration guidelines
     */
    interface MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics extends BackboneElement {
        /**
         * Specific characteristic that is relevant to the administration guideline
         */
        characteristicCodeableConcept?: CodeableConcept;
        /**
         * Specific characteristic that is relevant to the administration guideline
         */
        characteristicQuantity?: Quantity;
        /**
         * The specific characteristic
         */
        value?: string[];
        /**
         * Contains extended information for property 'value'.
         */
        _value?: Element[];
    }
    /**
     * Categorization of the medication within a formulary or classification system
     */
    interface MedicationKnowledgeMedicineClassification extends BackboneElement {
        /**
         * The type of category for the medication (for example, therapeutic classification, therapeutic sub-classification)
         */
        type: CodeableConcept;
        /**
         * Specific category assigned to the medication
         */
        classification?: CodeableConcept[];
    }
    /**
     * Details about packaged medications
     */
    interface MedicationKnowledgePackaging extends BackboneElement {
        /**
         * A code that defines the specific type of packaging that the medication can be found in
         */
        type?: CodeableConcept;
        /**
         * The number of product units the package would contain if fully loaded
         */
        quantity?: Quantity;
    }
    /**
     * Specifies descriptive properties of the medicine
     */
    interface MedicationKnowledgeDrugCharacteristic extends BackboneElement {
        /**
         * Code specifying the type of characteristic of medication
         */
        type?: CodeableConcept;
        /**
         * Description of the characteristic
         */
        valueCodeableConcept?: CodeableConcept;
        /**
         * Description of the characteristic
         */
        valueString?: string;
        /**
         * Contains extended information for property 'valueString'.
         */
        _valueString?: Element;
        /**
         * Description of the characteristic
         */
        valueQuantity?: Quantity;
        /**
         * Description of the characteristic
         */
        valueBase64Binary?: base64Binary;
        /**
         * Contains extended information for property 'valueBase64Binary'.
         */
        _valueBase64Binary?: Element;
    }
    /**
     * Regulatory information about a medication
     */
    interface MedicationKnowledgeRegulatory extends BackboneElement {
        /**
         * Specifies the authority of the regulation
         */
        regulatoryAuthority: Reference;
        /**
         * Specifies if changes are allowed when dispensing a medication from a regulatory perspective
         */
        substitution?: MedicationKnowledgeRegulatorySubstitution[];
        /**
         * Specifies the schedule of a medication in jurisdiction
         */
        schedule?: MedicationKnowledgeRegulatorySchedule[];
        /**
         * The maximum number of units of the medication that can be dispensed in a period
         */
        maxDispense?: MedicationKnowledgeRegulatoryMaxDispense;
    }
    /**
     * Specifies if changes are allowed when dispensing a medication from a regulatory perspective
     */
    interface MedicationKnowledgeRegulatorySubstitution extends BackboneElement {
        /**
         * Specifies the type of substitution allowed
         */
        type: CodeableConcept;
        /**
         * Specifies if regulation allows for changes in the medication when dispensing
         */
        allowed: boolean;
        /**
         * Contains extended information for property 'allowed'.
         */
        _allowed?: Element;
    }
    /**
     * Specifies the schedule of a medication in jurisdiction
     */
    interface MedicationKnowledgeRegulatorySchedule extends BackboneElement {
        /**
         * Specifies the specific drug schedule
         */
        schedule: CodeableConcept;
    }
    /**
     * The maximum number of units of the medication that can be dispensed in a period
     */
    interface MedicationKnowledgeRegulatoryMaxDispense extends BackboneElement {
        /**
         * The maximum number of units of the medication that can be dispensed
         */
        quantity: Quantity;
        /**
         * The period that applies to the maximum number of units
         */
        period?: Duration;
    }
    /**
     * The time course of drug absorption, distribution, metabolism and excretion of a medication from the body
     */
    interface MedicationKnowledgeKinetics extends BackboneElement {
        /**
         * The drug concentration measured at certain discrete points in time
         */
        areaUnderCurve?: Quantity[];
        /**
         * The median lethal dose of a drug
         */
        lethalDose50?: Quantity[];
        /**
         * Time required for concentration in the body to decrease by half
         */
        halfLifePeriod?: Duration;
    }
    /**
     * Definition of Medication Knowledge
     */
    interface MedicationKnowledge extends DomainResource {
        /**
         * Code that identifies this medication
         */
        code?: CodeableConcept;
        /**
         * active | inactive | entered-in-error
         */
        status?: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Manufacturer of the item
         */
        manufacturer?: Reference;
        /**
         * powder | tablets | capsule +
         */
        doseForm?: CodeableConcept;
        /**
         * Amount of drug in package
         */
        amount?: Quantity;
        /**
         * Additional names for a medication
         */
        synonym?: string[];
        /**
         * Contains extended information for property 'synonym'.
         */
        _synonym?: Element[];
        /**
         * Associated or related medication information
         */
        relatedMedicationKnowledge?: MedicationKnowledgeRelatedMedicationKnowledge[];
        /**
         * A medication resource that is associated with this medication
         */
        associatedMedication?: Reference[];
        /**
         * Category of the medication or product
         */
        productType?: CodeableConcept[];
        /**
         * Associated documentation about the medication
         */
        monograph?: MedicationKnowledgeMonograph[];
        /**
         * Active or inactive ingredient
         */
        ingredient?: MedicationKnowledgeIngredient[];
        /**
         * The instructions for preparing the medication
         */
        preparationInstruction?: markdown;
        /**
         * Contains extended information for property 'preparationInstruction'.
         */
        _preparationInstruction?: Element;
        /**
         * The intended or approved route of administration
         */
        intendedRoute?: CodeableConcept[];
        /**
         * The pricing of the medication
         */
        cost?: MedicationKnowledgeCost[];
        /**
         * Program under which a medication is reviewed
         */
        monitoringProgram?: MedicationKnowledgeMonitoringProgram[];
        /**
         * Guidelines for administration of the medication
         */
        administrationGuidelines?: MedicationKnowledgeAdministrationGuidelines[];
        /**
         * Categorization of the medication within a formulary or classification system
         */
        medicineClassification?: MedicationKnowledgeMedicineClassification[];
        /**
         * Details about packaged medications
         */
        packaging?: MedicationKnowledgePackaging;
        /**
         * Specifies descriptive properties of the medicine
         */
        drugCharacteristic?: MedicationKnowledgeDrugCharacteristic[];
        /**
         * Potential clinical issue with or between medication(s)
         */
        contraindication?: Reference[];
        /**
         * Regulatory information about a medication
         */
        regulatory?: MedicationKnowledgeRegulatory[];
        /**
         * The time course of drug absorption, distribution, metabolism and excretion of a medication from the body
         */
        kinetics?: MedicationKnowledgeKinetics[];
    }
    /**
     * Medication supply authorization
     */
    interface MedicationRequestDispenseRequest extends BackboneElement {
        /**
         * First fill details
         */
        initialFill?: MedicationRequestDispenseRequestInitialFill;
        /**
         * Minimum period of time between dispenses
         */
        dispenseInterval?: Duration;
        /**
         * Time period supply is authorized for
         */
        validityPeriod?: Period;
        /**
         * Number of refills authorized
         */
        numberOfRepeatsAllowed?: unsignedInt;
        /**
         * Contains extended information for property 'numberOfRepeatsAllowed'.
         */
        _numberOfRepeatsAllowed?: Element;
        /**
         * Amount of medication to supply per dispense
         */
        quantity?: Quantity;
        /**
         * Number of days supply per dispense
         */
        expectedSupplyDuration?: Duration;
        /**
         * Intended dispenser
         */
        performer?: Reference;
    }
    /**
     * First fill details
     */
    interface MedicationRequestDispenseRequestInitialFill extends BackboneElement {
        /**
         * First fill quantity
         */
        quantity?: Quantity;
        /**
         * First fill duration
         */
        duration?: Duration;
    }
    /**
     * Any restrictions on medication substitution
     */
    interface MedicationRequestSubstitution extends BackboneElement {
        /**
         * Whether substitution is allowed or not
         */
        allowedBoolean?: boolean;
        /**
         * Contains extended information for property 'allowedBoolean'.
         */
        _allowedBoolean?: Element;
        /**
         * Whether substitution is allowed or not
         */
        allowedCodeableConcept?: CodeableConcept;
        /**
         * Why should (not) substitution be made
         */
        reason?: CodeableConcept;
    }
    /**
     * Ordering of medication for patient or group
     */
    interface MedicationRequest extends DomainResource {
        /**
         * External ids for this request
         */
        identifier?: Identifier[];
        /**
         * active | on-hold | cancelled | completed | entered-in-error | stopped | draft | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Reason for current status
         */
        statusReason?: CodeableConcept;
        /**
         * proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option
         */
        intent: code;
        /**
         * Contains extended information for property 'intent'.
         */
        _intent?: Element;
        /**
         * Type of medication usage
         */
        category?: CodeableConcept[];
        /**
         * routine | urgent | asap | stat
         */
        priority?: code;
        /**
         * Contains extended information for property 'priority'.
         */
        _priority?: Element;
        /**
         * True if request is prohibiting action
         */
        doNotPerform?: boolean;
        /**
         * Contains extended information for property 'doNotPerform'.
         */
        _doNotPerform?: Element;
        /**
         * Reported rather than primary record
         */
        reportedBoolean?: boolean;
        /**
         * Contains extended information for property 'reportedBoolean'.
         */
        _reportedBoolean?: Element;
        /**
         * Reported rather than primary record
         */
        reportedReference?: Reference;
        /**
         * Medication to be taken
         */
        medicationCodeableConcept?: CodeableConcept;
        /**
         * Medication to be taken
         */
        medicationReference?: Reference;
        /**
         * Who or group medication request is for
         */
        subject: Reference;
        /**
         * Encounter created as part of encounter/admission/stay
         */
        encounter?: Reference;
        /**
         * Information to support ordering of the medication
         */
        supportingInformation?: Reference[];
        /**
         * When request was initially authored
         */
        authoredOn?: dateTime;
        /**
         * Contains extended information for property 'authoredOn'.
         */
        _authoredOn?: Element;
        /**
         * Who/What requested the Request
         */
        requester?: Reference;
        /**
         * Intended performer of administration
         */
        performer?: Reference;
        /**
         * Desired kind of performer of the medication administration
         */
        performerType?: CodeableConcept;
        /**
         * Person who entered the request
         */
        recorder?: Reference;
        /**
         * Reason or indication for ordering or not ordering the medication
         */
        reasonCode?: CodeableConcept[];
        /**
         * Condition or observation that supports why the prescription is being written
         */
        reasonReference?: Reference[];
        /**
         * Instantiates FHIR protocol or definition
         */
        instantiatesCanonical?: canonical[];
        /**
         * Contains extended information for property 'instantiatesCanonical'.
         */
        _instantiatesCanonical?: Element[];
        /**
         * Instantiates external protocol or definition
         */
        instantiatesUri?: uri[];
        /**
         * Contains extended information for property 'instantiatesUri'.
         */
        _instantiatesUri?: Element[];
        /**
         * What request fulfills
         */
        basedOn?: Reference[];
        /**
         * Composite request this is part of
         */
        groupIdentifier?: Identifier;
        /**
         * Overall pattern of medication administration
         */
        courseOfTherapyType?: CodeableConcept;
        /**
         * Associated insurance coverage
         */
        insurance?: Reference[];
        /**
         * Information about the prescription
         */
        note?: Annotation[];
        /**
         * How the medication should be taken
         */
        dosageInstruction?: Dosage[];
        /**
         * Medication supply authorization
         */
        dispenseRequest?: MedicationRequestDispenseRequest;
        /**
         * Any restrictions on medication substitution
         */
        substitution?: MedicationRequestSubstitution;
        /**
         * An order/prescription that is being replaced
         */
        priorPrescription?: Reference;
        /**
         * Clinical Issue with action
         */
        detectedIssue?: Reference[];
        /**
         * A list of events of interest in the lifecycle
         */
        eventHistory?: Reference[];
    }
    /**
     * Record of medication being taken by a patient
     */
    interface MedicationStatement extends DomainResource {
        /**
         * External identifier
         */
        identifier?: Identifier[];
        /**
         * Fulfils plan, proposal or order
         */
        basedOn?: Reference[];
        /**
         * Part of referenced event
         */
        partOf?: Reference[];
        /**
         * active | completed | entered-in-error | intended | stopped | on-hold | unknown | not-taken
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Reason for current status
         */
        statusReason?: CodeableConcept[];
        /**
         * Type of medication usage
         */
        category?: CodeableConcept;
        /**
         * What medication was taken
         */
        medicationCodeableConcept?: CodeableConcept;
        /**
         * What medication was taken
         */
        medicationReference?: Reference;
        /**
         * Who is/was taking  the medication
         */
        subject: Reference;
        /**
         * Encounter / Episode associated with MedicationStatement
         */
        context?: Reference;
        /**
         * The date/time or interval when the medication is/was/will be taken
         */
        effectiveDateTime?: dateTime;
        /**
         * Contains extended information for property 'effectiveDateTime'.
         */
        _effectiveDateTime?: Element;
        /**
         * The date/time or interval when the medication is/was/will be taken
         */
        effectivePeriod?: Period;
        /**
         * When the statement was asserted?
         */
        dateAsserted?: dateTime;
        /**
         * Contains extended information for property 'dateAsserted'.
         */
        _dateAsserted?: Element;
        /**
         * Person or organization that provided the information about the taking of this medication
         */
        informationSource?: Reference;
        /**
         * Additional supporting information
         */
        derivedFrom?: Reference[];
        /**
         * Reason for why the medication is being/was taken
         */
        reasonCode?: CodeableConcept[];
        /**
         * Condition or observation that supports why the medication is being/was taken
         */
        reasonReference?: Reference[];
        /**
         * Further information about the statement
         */
        note?: Annotation[];
        /**
         * Details of how medication is/was taken or should be taken
         */
        dosage?: Dosage[];
    }
    /**
     * The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available
     */
    interface MarketingStatus extends BackboneElement {
        /**
         * The country in which the marketing authorisation has been granted shall be specified It should be specified using the ISO 3166 ‑ 1 alpha-2 code elements
         */
        country: CodeableConcept;
        /**
         * Where a Medicines Regulatory Agency has granted a marketing authorisation for which specific provisions within a jurisdiction apply, the jurisdiction can be specified using an appropriate controlled terminology The controlled term and the controlled term identifier shall be specified
         */
        jurisdiction?: CodeableConcept;
        /**
         * This attribute provides information on the status of the marketing of the medicinal product See ISO/TS 20443 for more information and examples
         */
        status: CodeableConcept;
        /**
         * The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE “Placed on the market” refers to the release of the Medicinal Product into the distribution chain
         */
        dateRange: Period;
        /**
         * The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE “Placed on the market” refers to the release of the Medicinal Product into the distribution chain
         */
        restoreDate?: dateTime;
        /**
         * Contains extended information for property 'restoreDate'.
         */
        _restoreDate?: Element;
    }
    /**
     * The product's name, including full name and possibly coded parts
     */
    interface MedicinalProductName extends BackboneElement {
        /**
         * The full product name
         */
        productName: string;
        /**
         * Contains extended information for property 'productName'.
         */
        _productName?: Element;
        /**
         * Coding words or phrases of the name
         */
        namePart?: MedicinalProductNameNamePart[];
        /**
         * Country where the name applies
         */
        countryLanguage?: MedicinalProductNameCountryLanguage[];
    }
    /**
     * Coding words or phrases of the name
     */
    interface MedicinalProductNameNamePart extends BackboneElement {
        /**
         * A fragment of a product name
         */
        part: string;
        /**
         * Contains extended information for property 'part'.
         */
        _part?: Element;
        /**
         * Idenifying type for this part of the name (e.g. strength part)
         */
        type: Coding;
    }
    /**
     * Country where the name applies
     */
    interface MedicinalProductNameCountryLanguage extends BackboneElement {
        /**
         * Country code for where this name applies
         */
        country: CodeableConcept;
        /**
         * Jurisdiction code for where this name applies
         */
        jurisdiction?: CodeableConcept;
        /**
         * Language code for this name
         */
        language: CodeableConcept;
    }
    /**
     * An operation applied to the product, for manufacturing or adminsitrative purpose
     */
    interface MedicinalProductManufacturingBusinessOperation extends BackboneElement {
        /**
         * The type of manufacturing operation
         */
        operationType?: CodeableConcept;
        /**
         * Regulatory authorization reference number
         */
        authorisationReferenceNumber?: Identifier;
        /**
         * Regulatory authorization date
         */
        effectiveDate?: dateTime;
        /**
         * Contains extended information for property 'effectiveDate'.
         */
        _effectiveDate?: Element;
        /**
         * To indicate if this proces is commercially confidential
         */
        confidentialityIndicator?: CodeableConcept;
        /**
         * The manufacturer or establishment associated with the process
         */
        manufacturer?: Reference[];
        /**
         * A regulator which oversees the operation
         */
        regulator?: Reference;
    }
    /**
     * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease
     */
    interface MedicinalProductSpecialDesignation extends BackboneElement {
        /**
         * Identifier for the designation, or procedure number
         */
        identifier?: Identifier[];
        /**
         * The type of special designation, e.g. orphan drug, minor use
         */
        type?: CodeableConcept;
        /**
         * The intended use of the product, e.g. prevention, treatment
         */
        intendedUse?: CodeableConcept;
        /**
         * Condition for which the medicinal use applies
         */
        indicationCodeableConcept?: CodeableConcept;
        /**
         * Condition for which the medicinal use applies
         */
        indicationReference?: Reference;
        /**
         * For example granted, pending, expired or withdrawn
         */
        status?: CodeableConcept;
        /**
         * Date when the designation was granted
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Animal species for which this applies
         */
        species?: CodeableConcept;
    }
    /**
     * Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use)
     */
    interface MedicinalProduct extends DomainResource {
        /**
         * Business identifier for this product. Could be an MPID
         */
        identifier?: Identifier[];
        /**
         * Regulatory type, e.g. Investigational or Authorized
         */
        type?: CodeableConcept;
        /**
         * If this medicine applies to human or veterinary uses
         */
        domain?: Coding;
        /**
         * The dose form for a single part product, or combined form of a multiple part product
         */
        combinedPharmaceuticalDoseForm?: CodeableConcept;
        /**
         * The legal status of supply of the medicinal product as classified by the regulator
         */
        legalStatusOfSupply?: CodeableConcept;
        /**
         * Whether the Medicinal Product is subject to additional monitoring for regulatory reasons
         */
        additionalMonitoringIndicator?: CodeableConcept;
        /**
         * Whether the Medicinal Product is subject to special measures for regulatory reasons
         */
        specialMeasures?: string[];
        /**
         * Contains extended information for property 'specialMeasures'.
         */
        _specialMeasures?: Element[];
        /**
         * If authorised for use in children
         */
        paediatricUseIndicator?: CodeableConcept;
        /**
         * Allows the product to be classified by various systems
         */
        productClassification?: CodeableConcept[];
        /**
         * Marketing status of the medicinal product, in contrast to marketing authorizaton
         */
        marketingStatus?: MarketingStatus[];
        /**
         * Pharmaceutical aspects of product
         */
        pharmaceuticalProduct?: Reference[];
        /**
         * Package representation for the product
         */
        packagedMedicinalProduct?: Reference[];
        /**
         * Supporting documentation, typically for regulatory submission
         */
        attachedDocument?: Reference[];
        /**
         * A master file for to the medicinal product (e.g. Pharmacovigilance System Master File)
         */
        masterFile?: Reference[];
        /**
         * A product specific contact, person (in a role), or an organization
         */
        contact?: Reference[];
        /**
         * Clinical trials or studies that this product is involved in
         */
        clinicalTrial?: Reference[];
        /**
         * The product's name, including full name and possibly coded parts
         */
        name: MedicinalProductName[];
        /**
         * Reference to another product, e.g. for linking authorised to investigational product
         */
        crossReference?: Identifier[];
        /**
         * An operation applied to the product, for manufacturing or adminsitrative purpose
         */
        manufacturingBusinessOperation?: MedicinalProductManufacturingBusinessOperation[];
        /**
         * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease
         */
        specialDesignation?: MedicinalProductSpecialDesignation[];
    }
    /**
     * Authorization in areas within a country
     */
    interface MedicinalProductAuthorizationJurisdictionalAuthorization extends BackboneElement {
        /**
         * The assigned number for the marketing authorization
         */
        identifier?: Identifier[];
        /**
         * Country of authorization
         */
        country?: CodeableConcept;
        /**
         * Jurisdiction within a country
         */
        jurisdiction?: CodeableConcept[];
        /**
         * The legal status of supply in a jurisdiction or region
         */
        legalStatusOfSupply?: CodeableConcept;
        /**
         * The start and expected end date of the authorization
         */
        validityPeriod?: Period;
    }
    /**
     * The regulatory procedure for granting or amending a marketing authorization
     */
    interface MedicinalProductAuthorizationProcedure extends BackboneElement {
        /**
         * Identifier for this procedure
         */
        identifier?: Identifier;
        /**
         * Type of procedure
         */
        type: CodeableConcept;
        /**
         * Date of procedure
         */
        datePeriod?: Period;
        /**
         * Date of procedure
         */
        dateDateTime?: dateTime;
        /**
         * Contains extended information for property 'dateDateTime'.
         */
        _dateDateTime?: Element;
        /**
         * Applcations submitted to obtain a marketing authorization
         */
        application?: MedicinalProductAuthorizationProcedure[];
    }
    /**
     * The regulatory authorization of a medicinal product
     */
    interface MedicinalProductAuthorization extends DomainResource {
        /**
         * Business identifier for the marketing authorization, as assigned by a regulator
         */
        identifier?: Identifier[];
        /**
         * The medicinal product that is being authorized
         */
        subject?: Reference;
        /**
         * The country in which the marketing authorization has been granted
         */
        country?: CodeableConcept[];
        /**
         * Jurisdiction within a country
         */
        jurisdiction?: CodeableConcept[];
        /**
         * The status of the marketing authorization
         */
        status?: CodeableConcept;
        /**
         * The date at which the given status has become applicable
         */
        statusDate?: dateTime;
        /**
         * Contains extended information for property 'statusDate'.
         */
        _statusDate?: Element;
        /**
         * The date when a suspended the marketing or the marketing authorization of the product is anticipated to be restored
         */
        restoreDate?: dateTime;
        /**
         * Contains extended information for property 'restoreDate'.
         */
        _restoreDate?: Element;
        /**
         * The beginning of the time period in which the marketing authorization is in the specific status shall be specified A complete date consisting of day, month and year shall be specified using the ISO 8601 date format
         */
        validityPeriod?: Period;
        /**
         * A period of time after authorization before generic product applicatiosn can be submitted
         */
        dataExclusivityPeriod?: Period;
        /**
         * The date when the first authorization was granted by a Medicines Regulatory Agency
         */
        dateOfFirstAuthorization?: dateTime;
        /**
         * Contains extended information for property 'dateOfFirstAuthorization'.
         */
        _dateOfFirstAuthorization?: Element;
        /**
         * Date of first marketing authorization for a company's new medicinal product in any country in the World
         */
        internationalBirthDate?: dateTime;
        /**
         * Contains extended information for property 'internationalBirthDate'.
         */
        _internationalBirthDate?: Element;
        /**
         * The legal framework against which this authorization is granted
         */
        legalBasis?: CodeableConcept;
        /**
         * Authorization in areas within a country
         */
        jurisdictionalAuthorization?: MedicinalProductAuthorizationJurisdictionalAuthorization[];
        /**
         * Marketing Authorization Holder
         */
        holder?: Reference;
        /**
         * Medicines Regulatory Agency
         */
        regulator?: Reference;
        /**
         * The regulatory procedure for granting or amending a marketing authorization
         */
        procedure?: MedicinalProductAuthorizationProcedure;
    }
    /**
     * Information about the use of the medicinal product in relation to other therapies described as part of the indication
     */
    interface MedicinalProductContraindicationOtherTherapy extends BackboneElement {
        /**
         * The type of relationship between the medicinal product indication or contraindication and another therapy
         */
        therapyRelationshipType: CodeableConcept;
        /**
         * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication
         */
        medicationCodeableConcept?: CodeableConcept;
        /**
         * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication
         */
        medicationReference?: Reference;
    }
    /**
     * A definition of a set of people that apply to some clinically related context, for example people contraindicated for a certain medication
     */
    interface Population extends BackboneElement {
        /**
         * The age of the specific population
         */
        ageRange?: Range;
        /**
         * The age of the specific population
         */
        ageCodeableConcept?: CodeableConcept;
        /**
         * The gender of the specific population
         */
        gender?: CodeableConcept;
        /**
         * Race of the specific population
         */
        race?: CodeableConcept;
        /**
         * The existing physiological conditions of the specific population to which this applies
         */
        physiologicalCondition?: CodeableConcept;
    }
    /**
     * MedicinalProductContraindication
     */
    interface MedicinalProductContraindication extends DomainResource {
        /**
         * The medication for which this is an indication
         */
        subject?: Reference[];
        /**
         * The disease, symptom or procedure for the contraindication
         */
        disease?: CodeableConcept;
        /**
         * The status of the disease or symptom for the contraindication
         */
        diseaseStatus?: CodeableConcept;
        /**
         * A comorbidity (concurrent condition) or coinfection
         */
        comorbidity?: CodeableConcept[];
        /**
         * Information about the use of the medicinal product in relation to other therapies as part of the indication
         */
        therapeuticIndication?: Reference[];
        /**
         * Information about the use of the medicinal product in relation to other therapies described as part of the indication
         */
        otherTherapy?: MedicinalProductContraindicationOtherTherapy[];
        /**
         * The population group to which this applies
         */
        population?: Population[];
    }
    /**
     * Information about the use of the medicinal product in relation to other therapies described as part of the indication
     */
    interface MedicinalProductIndicationOtherTherapy extends BackboneElement {
        /**
         * The type of relationship between the medicinal product indication or contraindication and another therapy
         */
        therapyRelationshipType: CodeableConcept;
        /**
         * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication
         */
        medicationCodeableConcept?: CodeableConcept;
        /**
         * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication
         */
        medicationReference?: Reference;
    }
    /**
     * MedicinalProductIndication
     */
    interface MedicinalProductIndication extends DomainResource {
        /**
         * The medication for which this is an indication
         */
        subject?: Reference[];
        /**
         * The disease, symptom or procedure that is the indication for treatment
         */
        diseaseSymptomProcedure?: CodeableConcept;
        /**
         * The status of the disease or symptom for which the indication applies
         */
        diseaseStatus?: CodeableConcept;
        /**
         * Comorbidity (concurrent condition) or co-infection as part of the indication
         */
        comorbidity?: CodeableConcept[];
        /**
         * The intended effect, aim or strategy to be achieved by the indication
         */
        intendedEffect?: CodeableConcept;
        /**
         * Timing or duration information as part of the indication
         */
        duration?: Quantity;
        /**
         * Information about the use of the medicinal product in relation to other therapies described as part of the indication
         */
        otherTherapy?: MedicinalProductIndicationOtherTherapy[];
        /**
         * Describe the undesirable effects of the medicinal product
         */
        undesirableEffect?: Reference[];
        /**
         * The population group to which this applies
         */
        population?: Population[];
    }
    /**
     * A specified substance that comprises this ingredient
     */
    interface MedicinalProductIngredientSpecifiedSubstance extends BackboneElement {
        /**
         * The specified substance
         */
        code: CodeableConcept;
        /**
         * The group of specified substance, e.g. group 1 to 4
         */
        group: CodeableConcept;
        /**
         * Confidentiality level of the specified substance as the ingredient
         */
        confidentiality?: CodeableConcept;
        /**
         * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product
         */
        strength?: MedicinalProductIngredientSpecifiedSubstanceStrength[];
    }
    /**
     * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product
     */
    interface MedicinalProductIngredientSpecifiedSubstanceStrength extends BackboneElement {
        /**
         * The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item
         */
        presentation: Ratio;
        /**
         * A lower limit for the quantity of substance in the unit of presentation. For use when there is a range of strengths, this is the lower limit, with the presentation attribute becoming the upper limit
         */
        presentationLowLimit?: Ratio;
        /**
         * The strength per unitary volume (or mass)
         */
        concentration?: Ratio;
        /**
         * A lower limit for the strength per unitary volume (or mass), for when there is a range. The concentration attribute then becomes the upper limit
         */
        concentrationLowLimit?: Ratio;
        /**
         * For when strength is measured at a particular point or distance
         */
        measurementPoint?: string;
        /**
         * Contains extended information for property 'measurementPoint'.
         */
        _measurementPoint?: Element;
        /**
         * The country or countries for which the strength range applies
         */
        country?: CodeableConcept[];
        /**
         * Strength expressed in terms of a reference substance
         */
        referenceStrength?: MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength[];
    }
    /**
     * Strength expressed in terms of a reference substance
     */
    interface MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength extends BackboneElement {
        /**
         * Relevant reference substance
         */
        substance?: CodeableConcept;
        /**
         * Strength expressed in terms of a reference substance
         */
        strength: Ratio;
        /**
         * Strength expressed in terms of a reference substance
         */
        strengthLowLimit?: Ratio;
        /**
         * For when strength is measured at a particular point or distance
         */
        measurementPoint?: string;
        /**
         * Contains extended information for property 'measurementPoint'.
         */
        _measurementPoint?: Element;
        /**
         * The country or countries for which the strength range applies
         */
        country?: CodeableConcept[];
    }
    /**
     * The ingredient substance
     */
    interface MedicinalProductIngredientSubstance extends BackboneElement {
        /**
         * The ingredient substance
         */
        code: CodeableConcept;
        /**
         * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product
         */
        strength?: MedicinalProductIngredientSpecifiedSubstanceStrength[];
    }
    /**
     * An ingredient of a manufactured item or pharmaceutical product
     */
    interface MedicinalProductIngredient extends DomainResource {
        /**
         * Identifier for the ingredient
         */
        identifier?: Identifier;
        /**
         * Ingredient role e.g. Active ingredient, excipient
         */
        role: CodeableConcept;
        /**
         * If the ingredient is a known or suspected allergen
         */
        allergenicIndicator?: boolean;
        /**
         * Contains extended information for property 'allergenicIndicator'.
         */
        _allergenicIndicator?: Element;
        /**
         * Manufacturer of this Ingredient
         */
        manufacturer?: Reference[];
        /**
         * A specified substance that comprises this ingredient
         */
        specifiedSubstance?: MedicinalProductIngredientSpecifiedSubstance[];
        /**
         * The ingredient substance
         */
        substance?: MedicinalProductIngredientSubstance;
    }
    /**
     * The specific medication, food or laboratory test that interacts
     */
    interface MedicinalProductInteractionInteractant extends BackboneElement {
        /**
         * The specific medication, food or laboratory test that interacts
         */
        itemReference?: Reference;
        /**
         * The specific medication, food or laboratory test that interacts
         */
        itemCodeableConcept?: CodeableConcept;
    }
    /**
     * MedicinalProductInteraction
     */
    interface MedicinalProductInteraction extends DomainResource {
        /**
         * The medication for which this is a described interaction
         */
        subject?: Reference[];
        /**
         * The interaction described
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * The specific medication, food or laboratory test that interacts
         */
        interactant?: MedicinalProductInteractionInteractant[];
        /**
         * The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction
         */
        type?: CodeableConcept;
        /**
         * The effect of the interaction, for example "reduced gastric absorption of primary medication"
         */
        effect?: CodeableConcept;
        /**
         * The incidence of the interaction, e.g. theoretical, observed
         */
        incidence?: CodeableConcept;
        /**
         * Actions for managing the interaction
         */
        management?: CodeableConcept;
    }
    /**
     * The manufactured item as contained in the packaged medicinal product
     */
    interface MedicinalProductManufactured extends DomainResource {
        /**
         * Dose form as manufactured and before any transformation into the pharmaceutical product
         */
        manufacturedDoseForm: CodeableConcept;
        /**
         * The “real world” units in which the quantity of the manufactured item is described
         */
        unitOfPresentation?: CodeableConcept;
        /**
         * The quantity or "count number" of the manufactured item
         */
        quantity: Quantity;
        /**
         * Manufacturer of the item (Note that this should be named "manufacturer" but it currently causes technical issues)
         */
        manufacturer?: Reference[];
        /**
         * Ingredient
         */
        ingredient?: Reference[];
        /**
         * Dimensions, color etc.
         */
        physicalCharacteristics?: ProdCharacteristic;
        /**
         * Other codeable characteristics
         */
        otherCharacteristics?: CodeableConcept[];
    }
    /**
     * Batch numbering
     */
    interface MedicinalProductPackagedBatchIdentifier extends BackboneElement {
        /**
         * A number appearing on the outer packaging of a specific batch
         */
        outerPackaging: Identifier;
        /**
         * A number appearing on the immediate packaging (and not the outer packaging)
         */
        immediatePackaging?: Identifier;
    }
    /**
     * A packaging item, as a contained for medicine, possibly with other packaging items within
     */
    interface MedicinalProductPackagedPackageItem extends BackboneElement {
        /**
         * Including possibly Data Carrier Identifier
         */
        identifier?: Identifier[];
        /**
         * The physical type of the container of the medicine
         */
        type: CodeableConcept;
        /**
         * The quantity of this package in the medicinal product, at the current level of packaging. The outermost is always 1
         */
        quantity: Quantity;
        /**
         * Material type of the package item
         */
        material?: CodeableConcept[];
        /**
         * A possible alternate material for the packaging
         */
        alternateMaterial?: CodeableConcept[];
        /**
         * A device accompanying a medicinal product
         */
        device?: Reference[];
        /**
         * The manufactured item as contained in the packaged medicinal product
         */
        manufacturedItem?: Reference[];
        /**
         * Allows containers within containers
         */
        packageItem?: MedicinalProductPackagedPackageItem[];
        /**
         * Dimensions, color etc.
         */
        physicalCharacteristics?: ProdCharacteristic;
        /**
         * Other codeable characteristics
         */
        otherCharacteristics?: CodeableConcept[];
        /**
         * Shelf Life and storage information
         */
        shelfLifeStorage?: ProductShelfLife[];
        /**
         * Manufacturer of this Package Item
         */
        manufacturer?: Reference[];
    }
    /**
     * A medicinal product in a container or package
     */
    interface MedicinalProductPackaged extends DomainResource {
        /**
         * Unique identifier
         */
        identifier?: Identifier[];
        /**
         * The product with this is a pack for
         */
        subject?: Reference[];
        /**
         * Textual description
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * The legal status of supply of the medicinal product as classified by the regulator
         */
        legalStatusOfSupply?: CodeableConcept;
        /**
         * Marketing information
         */
        marketingStatus?: MarketingStatus[];
        /**
         * Manufacturer of this Package Item
         */
        marketingAuthorization?: Reference;
        /**
         * Manufacturer of this Package Item
         */
        manufacturer?: Reference[];
        /**
         * Batch numbering
         */
        batchIdentifier?: MedicinalProductPackagedBatchIdentifier[];
        /**
         * A packaging item, as a contained for medicine, possibly with other packaging items within
         */
        packageItem: MedicinalProductPackagedPackageItem[];
    }
    /**
     * Characteristics e.g. a products onset of action
     */
    interface MedicinalProductPharmaceuticalCharacteristics extends BackboneElement {
        /**
         * A coded characteristic
         */
        code: CodeableConcept;
        /**
         * The status of characteristic e.g. assigned or pending
         */
        status?: CodeableConcept;
    }
    /**
     * The path by which the pharmaceutical product is taken into or makes contact with the body
     */
    interface MedicinalProductPharmaceuticalRouteOfAdministration extends BackboneElement {
        /**
         * Coded expression for the route
         */
        code: CodeableConcept;
        /**
         * The first dose (dose quantity) administered in humans can be specified, for a product under investigation, using a numerical value and its unit of measurement
         */
        firstDose?: Quantity;
        /**
         * The maximum single dose that can be administered as per the protocol of a clinical trial can be specified using a numerical value and its unit of measurement
         */
        maxSingleDose?: Quantity;
        /**
         * The maximum dose per day (maximum dose quantity to be administered in any one 24-h period) that can be administered as per the protocol referenced in the clinical trial authorisation
         */
        maxDosePerDay?: Quantity;
        /**
         * The maximum dose per treatment period that can be administered as per the protocol referenced in the clinical trial authorisation
         */
        maxDosePerTreatmentPeriod?: Ratio;
        /**
         * The maximum treatment period during which an Investigational Medicinal Product can be administered as per the protocol referenced in the clinical trial authorisation
         */
        maxTreatmentPeriod?: Duration;
        /**
         * A species for which this route applies
         */
        targetSpecies?: MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies[];
    }
    /**
     * A species for which this route applies
     */
    interface MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies extends BackboneElement {
        /**
         * Coded expression for the species
         */
        code: CodeableConcept;
        /**
         * A species specific time during which consumption of animal product is not appropriate
         */
        withdrawalPeriod?: MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod[];
    }
    /**
     * A species specific time during which consumption of animal product is not appropriate
     */
    interface MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod extends BackboneElement {
        /**
         * Coded expression for the type of tissue for which the withdrawal period applues, e.g. meat, milk
         */
        tissue: CodeableConcept;
        /**
         * A value for the time
         */
        value: Quantity;
        /**
         * Extra information about the withdrawal period
         */
        supportingInformation?: string;
        /**
         * Contains extended information for property 'supportingInformation'.
         */
        _supportingInformation?: Element;
    }
    /**
     * A pharmaceutical product described in terms of its composition and dose form
     */
    interface MedicinalProductPharmaceutical extends DomainResource {
        /**
         * An identifier for the pharmaceutical medicinal product
         */
        identifier?: Identifier[];
        /**
         * The administrable dose form, after necessary reconstitution
         */
        administrableDoseForm: CodeableConcept;
        /**
         * Todo
         */
        unitOfPresentation?: CodeableConcept;
        /**
         * Ingredient
         */
        ingredient?: Reference[];
        /**
         * Accompanying device
         */
        device?: Reference[];
        /**
         * Characteristics e.g. a products onset of action
         */
        characteristics?: MedicinalProductPharmaceuticalCharacteristics[];
        /**
         * The path by which the pharmaceutical product is taken into or makes contact with the body
         */
        routeOfAdministration: MedicinalProductPharmaceuticalRouteOfAdministration[];
    }
    /**
     * MedicinalProductUndesirableEffect
     */
    interface MedicinalProductUndesirableEffect extends DomainResource {
        /**
         * The medication for which this is an indication
         */
        subject?: Reference[];
        /**
         * The symptom, condition or undesirable effect
         */
        symptomConditionEffect?: CodeableConcept;
        /**
         * Classification of the effect
         */
        classification?: CodeableConcept;
        /**
         * The frequency of occurrence of the effect
         */
        frequencyOfOccurrence?: CodeableConcept;
        /**
         * The population group to which this applies
         */
        population?: Population[];
    }
    /**
     * Resource(s) that are the subject of the event
     */
    interface MessageDefinitionFocus extends BackboneElement {
        /**
         * Type of resource
         */
        code: code;
        /**
         * Contains extended information for property 'code'.
         */
        _code?: Element;
        /**
         * Profile that must be adhered to by focus
         */
        profile?: canonical;
        /**
         * Contains extended information for property 'profile'.
         */
        _profile?: Element;
        /**
         * Minimum number of focuses of this type
         */
        min: unsignedInt;
        /**
         * Contains extended information for property 'min'.
         */
        _min?: Element;
        /**
         * Maximum number of focuses of this type
         */
        max?: string;
        /**
         * Contains extended information for property 'max'.
         */
        _max?: Element;
    }
    /**
     * Responses to this message
     */
    interface MessageDefinitionAllowedResponse extends BackboneElement {
        /**
         * Reference to allowed message definition response
         */
        message: canonical;
        /**
         * Contains extended information for property 'message'.
         */
        _message?: Element;
        /**
         * When should this response be used
         */
        situation?: markdown;
        /**
         * Contains extended information for property 'situation'.
         */
        _situation?: Element;
    }
    /**
     * A resource that defines a type of message that can be exchanged between systems
     */
    interface MessageDefinition extends DomainResource {
        /**
         * Business Identifier for a given MessageDefinition
         */
        url?: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Primary key for the message definition on a given server
         */
        identifier?: Identifier[];
        /**
         * Business version of the message definition
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
        /**
         * Name for this message definition (computer friendly)
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Name for this message definition (human friendly)
         */
        title?: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
        /**
         * Takes the place of
         */
        replaces?: canonical[];
        /**
         * Contains extended information for property 'replaces'.
         */
        _replaces?: Element[];
        /**
         * draft | active | retired | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * For testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Contains extended information for property 'experimental'.
         */
        _experimental?: Element;
        /**
         * Date last changed
         */
        date: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Name of the publisher (organization or individual)
         */
        publisher?: string;
        /**
         * Contains extended information for property 'publisher'.
         */
        _publisher?: Element;
        /**
         * Contact details for the publisher
         */
        contact?: ContactDetail[];
        /**
         * Natural language description of the message definition
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * The context that the content is intended to support
         */
        useContext?: UsageContext[];
        /**
         * Intended jurisdiction for message definition (if applicable)
         */
        jurisdiction?: CodeableConcept[];
        /**
         * Why this message definition is defined
         */
        purpose?: markdown;
        /**
         * Contains extended information for property 'purpose'.
         */
        _purpose?: Element;
        /**
         * Use and/or publishing restrictions
         */
        copyright?: markdown;
        /**
         * Contains extended information for property 'copyright'.
         */
        _copyright?: Element;
        /**
         * Definition this one is based on
         */
        base?: canonical;
        /**
         * Contains extended information for property 'base'.
         */
        _base?: Element;
        /**
         * Protocol/workflow this is part of
         */
        parent?: canonical[];
        /**
         * Contains extended information for property 'parent'.
         */
        _parent?: Element[];
        /**
         * Event code  or link to the EventDefinition
         */
        eventCoding?: Coding;
        /**
         * Event code  or link to the EventDefinition
         */
        eventUri?: uri;
        /**
         * Contains extended information for property 'eventUri'.
         */
        _eventUri?: Element;
        /**
         * consequence | currency | notification
         */
        category?: code;
        /**
         * Contains extended information for property 'category'.
         */
        _category?: Element;
        /**
         * Resource(s) that are the subject of the event
         */
        focus?: MessageDefinitionFocus[];
        /**
         * always | on-error | never | on-success
         */
        responseRequired?: code;
        /**
         * Contains extended information for property 'responseRequired'.
         */
        _responseRequired?: Element;
        /**
         * Responses to this message
         */
        allowedResponse?: MessageDefinitionAllowedResponse[];
        /**
         * Canonical reference to a GraphDefinition
         */
        graph?: canonical[];
        /**
         * Contains extended information for property 'graph'.
         */
        _graph?: Element[];
    }
    /**
     * Message destination application(s)
     */
    interface MessageHeaderDestination extends BackboneElement {
        /**
         * Name of system
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Particular delivery destination within the destination
         */
        target?: Reference;
        /**
         * Actual destination address or id
         */
        endpoint: url;
        /**
         * Contains extended information for property 'endpoint'.
         */
        _endpoint?: Element;
        /**
         * Intended "real-world" recipient for the data
         */
        receiver?: Reference;
    }
    /**
     * Message source application
     */
    interface MessageHeaderSource extends BackboneElement {
        /**
         * Name of system
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Name of software running the system
         */
        software?: string;
        /**
         * Contains extended information for property 'software'.
         */
        _software?: Element;
        /**
         * Version of software running
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
        /**
         * Human contact for problems
         */
        contact?: ContactPoint;
        /**
         * Actual message source address or id
         */
        endpoint: url;
        /**
         * Contains extended information for property 'endpoint'.
         */
        _endpoint?: Element;
    }
    /**
     * If this is a reply to prior message
     */
    interface MessageHeaderResponse extends BackboneElement {
        /**
         * Id of original message
         */
        identifier: id;
        /**
         * Contains extended information for property 'identifier'.
         */
        _identifier?: Element;
        /**
         * ok | transient-error | fatal-error
         */
        code: code;
        /**
         * Contains extended information for property 'code'.
         */
        _code?: Element;
        /**
         * Specific list of hints/warnings/errors
         */
        details?: Reference;
    }
    /**
     * A resource that describes a message that is exchanged between systems
     */
    interface MessageHeader extends DomainResource {
        /**
         * Code for the event this message represents or link to event definition
         */
        eventCoding?: Coding;
        /**
         * Code for the event this message represents or link to event definition
         */
        eventUri?: uri;
        /**
         * Contains extended information for property 'eventUri'.
         */
        _eventUri?: Element;
        /**
         * Message destination application(s)
         */
        destination?: MessageHeaderDestination[];
        /**
         * Real world sender of the message
         */
        sender?: Reference;
        /**
         * The source of the data entry
         */
        enterer?: Reference;
        /**
         * The source of the decision
         */
        author?: Reference;
        /**
         * Message source application
         */
        source: MessageHeaderSource;
        /**
         * Final responsibility for event
         */
        responsible?: Reference;
        /**
         * Cause of event
         */
        reason?: CodeableConcept;
        /**
         * If this is a reply to prior message
         */
        response?: MessageHeaderResponse;
        /**
         * The actual content of the message
         */
        focus?: Reference[];
        /**
         * Link to the definition for this message
         */
        definition?: canonical;
        /**
         * Contains extended information for property 'definition'.
         */
        _definition?: Element;
    }
    /**
     * A sequence used as reference
     */
    interface MolecularSequenceReferenceSeq extends BackboneElement {
        /**
         * Chromosome containing genetic finding
         */
        chromosome?: CodeableConcept;
        /**
         * The Genome Build used for reference, following GRCh build versions e.g. 'GRCh 37'
         */
        genomeBuild?: string;
        /**
         * Contains extended information for property 'genomeBuild'.
         */
        _genomeBuild?: Element;
        /**
         * sense | antisense
         */
        orientation?: code;
        /**
         * Contains extended information for property 'orientation'.
         */
        _orientation?: Element;
        /**
         * Reference identifier
         */
        referenceSeqId?: CodeableConcept;
        /**
         * A pointer to another MolecularSequence entity as reference sequence
         */
        referenceSeqPointer?: Reference;
        /**
         * A string to represent reference sequence
         */
        referenceSeqString?: string;
        /**
         * Contains extended information for property 'referenceSeqString'.
         */
        _referenceSeqString?: Element;
        /**
         * watson | crick
         */
        strand?: code;
        /**
         * Contains extended information for property 'strand'.
         */
        _strand?: Element;
        /**
         * Start position of the window on the  reference sequence
         */
        windowStart?: integer;
        /**
         * Contains extended information for property 'windowStart'.
         */
        _windowStart?: Element;
        /**
         * End position of the window on the reference sequence
         */
        windowEnd?: integer;
        /**
         * Contains extended information for property 'windowEnd'.
         */
        _windowEnd?: Element;
    }
    /**
     * Variant in sequence
     */
    interface MolecularSequenceVariant extends BackboneElement {
        /**
         * Start position of the variant on the  reference sequence
         */
        start?: integer;
        /**
         * Contains extended information for property 'start'.
         */
        _start?: Element;
        /**
         * End position of the variant on the reference sequence
         */
        end?: integer;
        /**
         * Contains extended information for property 'end'.
         */
        _end?: Element;
        /**
         * Allele that was observed
         */
        observedAllele?: string;
        /**
         * Contains extended information for property 'observedAllele'.
         */
        _observedAllele?: Element;
        /**
         * Allele in the reference sequence
         */
        referenceAllele?: string;
        /**
         * Contains extended information for property 'referenceAllele'.
         */
        _referenceAllele?: Element;
        /**
         * Extended CIGAR string for aligning the sequence with reference bases
         */
        cigar?: string;
        /**
         * Contains extended information for property 'cigar'.
         */
        _cigar?: Element;
        /**
         * Pointer to observed variant information
         */
        variantPointer?: Reference;
    }
    /**
     * An set of value as quality of sequence
     */
    interface MolecularSequenceQuality extends BackboneElement {
        /**
         * indel | snp | unknown
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * Standard sequence for comparison
         */
        standardSequence?: CodeableConcept;
        /**
         * Start position of the sequence
         */
        start?: integer;
        /**
         * Contains extended information for property 'start'.
         */
        _start?: Element;
        /**
         * End position of the sequence
         */
        end?: integer;
        /**
         * Contains extended information for property 'end'.
         */
        _end?: Element;
        /**
         * Quality score for the comparison
         */
        score?: Quantity;
        /**
         * Method to get quality
         */
        method?: CodeableConcept;
        /**
         * True positives from the perspective of the truth data
         */
        truthTP?: decimal;
        /**
         * Contains extended information for property 'truthTP'.
         */
        _truthTP?: Element;
        /**
         * True positives from the perspective of the query data
         */
        queryTP?: decimal;
        /**
         * Contains extended information for property 'queryTP'.
         */
        _queryTP?: Element;
        /**
         * False negatives
         */
        truthFN?: decimal;
        /**
         * Contains extended information for property 'truthFN'.
         */
        _truthFN?: Element;
        /**
         * False positives
         */
        queryFP?: decimal;
        /**
         * Contains extended information for property 'queryFP'.
         */
        _queryFP?: Element;
        /**
         * False positives where the non-REF alleles in the Truth and Query Call Sets match
         */
        gtFP?: decimal;
        /**
         * Contains extended information for property 'gtFP'.
         */
        _gtFP?: Element;
        /**
         * Precision of comparison
         */
        precision?: decimal;
        /**
         * Contains extended information for property 'precision'.
         */
        _precision?: Element;
        /**
         * Recall of comparison
         */
        recall?: decimal;
        /**
         * Contains extended information for property 'recall'.
         */
        _recall?: Element;
        /**
         * F-score
         */
        fScore?: decimal;
        /**
         * Contains extended information for property 'fScore'.
         */
        _fScore?: Element;
        /**
         * Receiver Operator Characteristic (ROC) Curve
         */
        roc?: MolecularSequenceQualityRoc;
    }
    /**
     * Receiver Operator Characteristic (ROC) Curve
     */
    interface MolecularSequenceQualityRoc extends BackboneElement {
        /**
         * Genotype quality score
         */
        score?: integer[];
        /**
         * Contains extended information for property 'score'.
         */
        _score?: Element[];
        /**
         * Roc score true positive numbers
         */
        numTP?: integer[];
        /**
         * Contains extended information for property 'numTP'.
         */
        _numTP?: Element[];
        /**
         * Roc score false positive numbers
         */
        numFP?: integer[];
        /**
         * Contains extended information for property 'numFP'.
         */
        _numFP?: Element[];
        /**
         * Roc score false negative numbers
         */
        numFN?: integer[];
        /**
         * Contains extended information for property 'numFN'.
         */
        _numFN?: Element[];
        /**
         * Precision of the GQ score
         */
        precision?: decimal[];
        /**
         * Contains extended information for property 'precision'.
         */
        _precision?: Element[];
        /**
         * Sensitivity of the GQ score
         */
        sensitivity?: decimal[];
        /**
         * Contains extended information for property 'sensitivity'.
         */
        _sensitivity?: Element[];
        /**
         * FScore of the GQ score
         */
        fMeasure?: decimal[];
        /**
         * Contains extended information for property 'fMeasure'.
         */
        _fMeasure?: Element[];
    }
    /**
     * External repository which contains detailed report related with observedSeq in this resource
     */
    interface MolecularSequenceRepository extends BackboneElement {
        /**
         * directlink | openapi | login | oauth | other
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * URI of the repository
         */
        url?: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Repository's name
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Id of the dataset that used to call for dataset in repository
         */
        datasetId?: string;
        /**
         * Contains extended information for property 'datasetId'.
         */
        _datasetId?: Element;
        /**
         * Id of the variantset that used to call for variantset in repository
         */
        variantsetId?: string;
        /**
         * Contains extended information for property 'variantsetId'.
         */
        _variantsetId?: Element;
        /**
         * Id of the read
         */
        readsetId?: string;
        /**
         * Contains extended information for property 'readsetId'.
         */
        _readsetId?: Element;
    }
    /**
     * Structural variant
     */
    interface MolecularSequenceStructureVariant extends BackboneElement {
        /**
         * Structural variant change type
         */
        variantType?: CodeableConcept;
        /**
         * Does the structural variant have base pair resolution breakpoints?
         */
        exact?: boolean;
        /**
         * Contains extended information for property 'exact'.
         */
        _exact?: Element;
        /**
         * Structural variant length
         */
        length?: integer;
        /**
         * Contains extended information for property 'length'.
         */
        _length?: Element;
        /**
         * Structural variant outer
         */
        outer?: MolecularSequenceStructureVariantOuter;
        /**
         * Structural variant inner
         */
        inner?: MolecularSequenceStructureVariantInner;
    }
    /**
     * Structural variant outer
     */
    interface MolecularSequenceStructureVariantOuter extends BackboneElement {
        /**
         * Structural variant outer start
         */
        start?: integer;
        /**
         * Contains extended information for property 'start'.
         */
        _start?: Element;
        /**
         * Structural variant outer end
         */
        end?: integer;
        /**
         * Contains extended information for property 'end'.
         */
        _end?: Element;
    }
    /**
     * Structural variant inner
     */
    interface MolecularSequenceStructureVariantInner extends BackboneElement {
        /**
         * Structural variant inner start
         */
        start?: integer;
        /**
         * Contains extended information for property 'start'.
         */
        _start?: Element;
        /**
         * Structural variant inner end
         */
        end?: integer;
        /**
         * Contains extended information for property 'end'.
         */
        _end?: Element;
    }
    /**
     * Information about a biological sequence
     */
    interface MolecularSequence extends DomainResource {
        /**
         * Unique ID for this particular sequence. This is a FHIR-defined id
         */
        identifier?: Identifier[];
        /**
         * aa | dna | rna
         */
        type?: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * Base number of coordinate system (0 for 0-based numbering or coordinates, inclusive start, exclusive end, 1 for 1-based numbering, inclusive start, inclusive end)
         */
        coordinateSystem: integer;
        /**
         * Contains extended information for property 'coordinateSystem'.
         */
        _coordinateSystem?: Element;
        /**
         * Who and/or what this is about
         */
        patient?: Reference;
        /**
         * Specimen used for sequencing
         */
        specimen?: Reference;
        /**
         * The method for sequencing
         */
        device?: Reference;
        /**
         * Who should be responsible for test result
         */
        performer?: Reference;
        /**
         * The number of copies of the sequence of interest.  (RNASeq)
         */
        quantity?: Quantity;
        /**
         * A sequence used as reference
         */
        referenceSeq?: MolecularSequenceReferenceSeq;
        /**
         * Variant in sequence
         */
        variant?: MolecularSequenceVariant[];
        /**
         * Sequence that was observed
         */
        observedSeq?: string;
        /**
         * Contains extended information for property 'observedSeq'.
         */
        _observedSeq?: Element;
        /**
         * An set of value as quality of sequence
         */
        quality?: MolecularSequenceQuality[];
        /**
         * Average number of reads representing a given nucleotide in the reconstructed sequence
         */
        readCoverage?: integer;
        /**
         * Contains extended information for property 'readCoverage'.
         */
        _readCoverage?: Element;
        /**
         * External repository which contains detailed report related with observedSeq in this resource
         */
        repository?: MolecularSequenceRepository[];
        /**
         * Pointer to next atomic sequence
         */
        pointer?: Reference[];
        /**
         * Structural variant
         */
        structureVariant?: MolecularSequenceStructureVariant[];
    }
    /**
     * Unique identifiers used for system
     */
    interface NamingSystemUniqueId extends BackboneElement {
        /**
         * oid | uuid | uri | other
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * The unique identifier
         */
        value: string;
        /**
         * Contains extended information for property 'value'.
         */
        _value?: Element;
        /**
         * Is this the id that should be used for this type
         */
        preferred?: boolean;
        /**
         * Contains extended information for property 'preferred'.
         */
        _preferred?: Element;
        /**
         * Notes about identifier usage
         */
        comment?: string;
        /**
         * Contains extended information for property 'comment'.
         */
        _comment?: Element;
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
         * Name for this naming system (computer friendly)
         */
        name: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * draft | active | retired | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * codesystem | identifier | root
         */
        kind: code;
        /**
         * Contains extended information for property 'kind'.
         */
        _kind?: Element;
        /**
         * Date last changed
         */
        date: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Name of the publisher (organization or individual)
         */
        publisher?: string;
        /**
         * Contains extended information for property 'publisher'.
         */
        _publisher?: Element;
        /**
         * Contact details for the publisher
         */
        contact?: ContactDetail[];
        /**
         * Who maintains system namespace?
         */
        responsible?: string;
        /**
         * Contains extended information for property 'responsible'.
         */
        _responsible?: Element;
        /**
         * e.g. driver,  provider,  patient, bank etc.
         */
        type?: CodeableConcept;
        /**
         * Natural language description of the naming system
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * The context that the content is intended to support
         */
        useContext?: UsageContext[];
        /**
         * Intended jurisdiction for naming system (if applicable)
         */
        jurisdiction?: CodeableConcept[];
        /**
         * How/where is it used
         */
        usage?: string;
        /**
         * Contains extended information for property 'usage'.
         */
        _usage?: Element;
        /**
         * Unique identifiers used for system
         */
        uniqueId: NamingSystemUniqueId[];
    }
    /**
     * Oral diet components
     */
    interface NutritionOrderOralDiet extends BackboneElement {
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
         * Contains extended information for property 'instruction'.
         */
        _instruction?: Element;
    }
    /**
     * Required  nutrient modifications
     */
    interface NutritionOrderOralDietNutrient extends BackboneElement {
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
    interface NutritionOrderOralDietTexture extends BackboneElement {
        /**
         * Code to indicate how to alter the texture of the foods, e.g. pureed
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
    interface NutritionOrderSupplement extends BackboneElement {
        /**
         * Type of supplement product requested
         */
        type?: CodeableConcept;
        /**
         * Product or brand name of the nutritional supplement
         */
        productName?: string;
        /**
         * Contains extended information for property 'productName'.
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
         * Contains extended information for property 'instruction'.
         */
        _instruction?: Element;
    }
    /**
     * Enteral formula components
     */
    interface NutritionOrderEnteralFormula extends BackboneElement {
        /**
         * Type of enteral or infant formula
         */
        baseFormulaType?: CodeableConcept;
        /**
         * Product or brand name of the enteral or infant formula
         */
        baseFormulaProductName?: string;
        /**
         * Contains extended information for property 'baseFormulaProductName'.
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
         * Contains extended information for property 'additiveProductName'.
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
         * Contains extended information for property 'administrationInstruction'.
         */
        _administrationInstruction?: Element;
    }
    /**
     * Formula feeding instruction as structured data
     */
    interface NutritionOrderEnteralFormulaAdministration extends BackboneElement {
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
     * Diet, formula or nutritional supplement request
     */
    interface NutritionOrder extends DomainResource {
        /**
         * Identifiers assigned to this order
         */
        identifier?: Identifier[];
        /**
         * Instantiates FHIR protocol or definition
         */
        instantiatesCanonical?: canonical[];
        /**
         * Contains extended information for property 'instantiatesCanonical'.
         */
        _instantiatesCanonical?: Element[];
        /**
         * Instantiates external protocol or definition
         */
        instantiatesUri?: uri[];
        /**
         * Contains extended information for property 'instantiatesUri'.
         */
        _instantiatesUri?: Element[];
        /**
         * Instantiates protocol or definition
         */
        instantiates?: uri[];
        /**
         * Contains extended information for property 'instantiates'.
         */
        _instantiates?: Element[];
        /**
         * draft | active | on-hold | revoked | completed | entered-in-error | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option
         */
        intent: code;
        /**
         * Contains extended information for property 'intent'.
         */
        _intent?: Element;
        /**
         * The person who requires the diet, formula or nutritional supplement
         */
        patient: Reference;
        /**
         * The encounter associated with this nutrition order
         */
        encounter?: Reference;
        /**
         * Date and time the nutrition order was requested
         */
        dateTime: dateTime;
        /**
         * Contains extended information for property 'dateTime'.
         */
        _dateTime?: Element;
        /**
         * Who ordered the diet, formula or nutritional supplement
         */
        orderer?: Reference;
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
        /**
         * Comments
         */
        note?: Annotation[];
    }
    /**
     * Provides guide for interpretation
     */
    interface ObservationReferenceRange extends BackboneElement {
        /**
         * Low Range, if relevant
         */
        low?: Quantity;
        /**
         * High Range, if relevant
         */
        high?: Quantity;
        /**
         * Reference range qualifier
         */
        type?: CodeableConcept;
        /**
         * Reference range population
         */
        appliesTo?: CodeableConcept[];
        /**
         * Applicable age range, if relevant
         */
        age?: Range;
        /**
         * Text based reference range in an observation
         */
        text?: string;
        /**
         * Contains extended information for property 'text'.
         */
        _text?: Element;
    }
    /**
     * Component results
     */
    interface ObservationComponent extends BackboneElement {
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
         * Contains extended information for property 'valueString'.
         */
        _valueString?: Element;
        /**
         * Actual component result
         */
        valueBoolean?: boolean;
        /**
         * Contains extended information for property 'valueBoolean'.
         */
        _valueBoolean?: Element;
        /**
         * Actual component result
         */
        valueInteger?: integer;
        /**
         * Contains extended information for property 'valueInteger'.
         */
        _valueInteger?: Element;
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
        valueTime?: time;
        /**
         * Contains extended information for property 'valueTime'.
         */
        _valueTime?: Element;
        /**
         * Actual component result
         */
        valueDateTime?: dateTime;
        /**
         * Contains extended information for property 'valueDateTime'.
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
         * High, low, normal, etc.
         */
        interpretation?: CodeableConcept[];
        /**
         * Provides guide for interpretation of component result
         */
        referenceRange?: ObservationReferenceRange[];
    }
    /**
     * Measurements and simple assertions
     */
    interface Observation extends DomainResource {
        /**
         * Business Identifier for observation
         */
        identifier?: Identifier[];
        /**
         * Fulfills plan, proposal or order
         */
        basedOn?: Reference[];
        /**
         * Part of referenced event
         */
        partOf?: Reference[];
        /**
         * registered | preliminary | final | amended +
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Classification of  type of observation
         */
        category?: CodeableConcept[];
        /**
         * Type of observation (code / type)
         */
        code: CodeableConcept;
        /**
         * Who and/or what the observation is about
         */
        subject?: Reference;
        /**
         * What the observation is about, when it is not about the subject of record
         */
        focus?: Reference[];
        /**
         * Healthcare event during which this observation is made
         */
        encounter?: Reference;
        /**
         * Clinically relevant time/time-period for observation
         */
        effectiveDateTime?: dateTime;
        /**
         * Contains extended information for property 'effectiveDateTime'.
         */
        _effectiveDateTime?: Element;
        /**
         * Clinically relevant time/time-period for observation
         */
        effectivePeriod?: Period;
        /**
         * Clinically relevant time/time-period for observation
         */
        effectiveTiming?: Timing;
        /**
         * Clinically relevant time/time-period for observation
         */
        effectiveInstant?: instant;
        /**
         * Contains extended information for property 'effectiveInstant'.
         */
        _effectiveInstant?: Element;
        /**
         * Date/Time this version was made available
         */
        issued?: instant;
        /**
         * Contains extended information for property 'issued'.
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
         * Contains extended information for property 'valueString'.
         */
        _valueString?: Element;
        /**
         * Actual result
         */
        valueBoolean?: boolean;
        /**
         * Contains extended information for property 'valueBoolean'.
         */
        _valueBoolean?: Element;
        /**
         * Actual result
         */
        valueInteger?: integer;
        /**
         * Contains extended information for property 'valueInteger'.
         */
        _valueInteger?: Element;
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
        valueTime?: time;
        /**
         * Contains extended information for property 'valueTime'.
         */
        _valueTime?: Element;
        /**
         * Actual result
         */
        valueDateTime?: dateTime;
        /**
         * Contains extended information for property 'valueDateTime'.
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
        interpretation?: CodeableConcept[];
        /**
         * Comments about the observation
         */
        note?: Annotation[];
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
         * Related resource that belongs to the Observation group
         */
        hasMember?: Reference[];
        /**
         * Related measurements the observation is made from
         */
        derivedFrom?: Reference[];
        /**
         * Component results
         */
        component?: ObservationComponent[];
    }
    /**
     * Characteristics of quantitative results
     */
    interface ObservationDefinitionQuantitativeDetails extends BackboneElement {
        /**
         * Customary unit for quantitative results
         */
        customaryUnit?: CodeableConcept;
        /**
         * SI unit for quantitative results
         */
        unit?: CodeableConcept;
        /**
         * SI to Customary unit conversion factor
         */
        conversionFactor?: decimal;
        /**
         * Contains extended information for property 'conversionFactor'.
         */
        _conversionFactor?: Element;
        /**
         * Decimal precision of observation quantitative results
         */
        decimalPrecision?: integer;
        /**
         * Contains extended information for property 'decimalPrecision'.
         */
        _decimalPrecision?: Element;
    }
    /**
     * Qualified range for continuous and ordinal observation results
     */
    interface ObservationDefinitionQualifiedInterval extends BackboneElement {
        /**
         * reference | critical | absolute
         */
        category?: code;
        /**
         * Contains extended information for property 'category'.
         */
        _category?: Element;
        /**
         * The interval itself, for continuous or ordinal observations
         */
        range?: Range;
        /**
         * Range context qualifier
         */
        context?: CodeableConcept;
        /**
         * Targetted population of the range
         */
        appliesTo?: CodeableConcept[];
        /**
         * male | female | other | unknown
         */
        gender?: code;
        /**
         * Contains extended information for property 'gender'.
         */
        _gender?: Element;
        /**
         * Applicable age range, if relevant
         */
        age?: Range;
        /**
         * Applicable gestational age range, if relevant
         */
        gestationalAge?: Range;
        /**
         * Condition associated with the reference range
         */
        condition?: string;
        /**
         * Contains extended information for property 'condition'.
         */
        _condition?: Element;
    }
    /**
     * Definition of an observation
     */
    interface ObservationDefinition extends DomainResource {
        /**
         * Category of observation
         */
        category?: CodeableConcept[];
        /**
         * Type of observation (code / type)
         */
        code: CodeableConcept;
        /**
         * Business identifier for this ObservationDefinition instance
         */
        identifier?: Identifier[];
        /**
         * Quantity | CodeableConcept | string | boolean | integer | Range | Ratio | SampledData | time | dateTime | Period
         */
        permittedDataType?: code[];
        /**
         * Contains extended information for property 'permittedDataType'.
         */
        _permittedDataType?: Element[];
        /**
         * Multiple results allowed
         */
        multipleResultsAllowed?: boolean;
        /**
         * Contains extended information for property 'multipleResultsAllowed'.
         */
        _multipleResultsAllowed?: Element;
        /**
         * Method used to produce the observation
         */
        method?: CodeableConcept;
        /**
         * Preferred report name
         */
        preferredReportName?: string;
        /**
         * Contains extended information for property 'preferredReportName'.
         */
        _preferredReportName?: Element;
        /**
         * Characteristics of quantitative results
         */
        quantitativeDetails?: ObservationDefinitionQuantitativeDetails;
        /**
         * Qualified range for continuous and ordinal observation results
         */
        qualifiedInterval?: ObservationDefinitionQualifiedInterval[];
        /**
         * Value set of valid coded values for the observations conforming to this ObservationDefinition
         */
        validCodedValueSet?: Reference;
        /**
         * Value set of normal coded values for the observations conforming to this ObservationDefinition
         */
        normalCodedValueSet?: Reference;
        /**
         * Value set of abnormal coded values for the observations conforming to this ObservationDefinition
         */
        abnormalCodedValueSet?: Reference;
        /**
         * Value set of critical coded values for the observations conforming to this ObservationDefinition
         */
        criticalCodedValueSet?: Reference;
    }
    /**
     * Parameters for the operation/query
     */
    interface OperationDefinitionParameter extends BackboneElement {
        /**
         * Name in Parameters.parameter.name or in URL
         */
        name: code;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * in | out
         */
        use: code;
        /**
         * Contains extended information for property 'use'.
         */
        _use?: Element;
        /**
         * Minimum Cardinality
         */
        min: integer;
        /**
         * Contains extended information for property 'min'.
         */
        _min?: Element;
        /**
         * Maximum Cardinality (a number or *)
         */
        max: string;
        /**
         * Contains extended information for property 'max'.
         */
        _max?: Element;
        /**
         * Description of meaning/use
         */
        documentation?: string;
        /**
         * Contains extended information for property 'documentation'.
         */
        _documentation?: Element;
        /**
         * What type this parameter has
         */
        type?: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * If type is Reference | canonical, allowed targets
         */
        targetProfile?: canonical[];
        /**
         * Contains extended information for property 'targetProfile'.
         */
        _targetProfile?: Element[];
        /**
         * number | date | string | token | reference | composite | quantity | uri | special
         */
        searchType?: code;
        /**
         * Contains extended information for property 'searchType'.
         */
        _searchType?: Element;
        /**
         * ValueSet details if this is coded
         */
        binding?: OperationDefinitionParameterBinding;
        /**
         * References to this parameter
         */
        referencedFrom?: OperationDefinitionParameterReferencedFrom[];
        /**
         * Parts of a nested Parameter
         */
        part?: OperationDefinitionParameter[];
    }
    /**
     * ValueSet details if this is coded
     */
    interface OperationDefinitionParameterBinding extends BackboneElement {
        /**
         * required | extensible | preferred | example
         */
        strength: code;
        /**
         * Contains extended information for property 'strength'.
         */
        _strength?: Element;
        /**
         * Source of value set
         */
        valueSet: canonical;
        /**
         * Contains extended information for property 'valueSet'.
         */
        _valueSet?: Element;
    }
    /**
     * References to this parameter
     */
    interface OperationDefinitionParameterReferencedFrom extends BackboneElement {
        /**
         * Referencing parameter
         */
        source: string;
        /**
         * Contains extended information for property 'source'.
         */
        _source?: Element;
        /**
         * Element id of reference
         */
        sourceId?: string;
        /**
         * Contains extended information for property 'sourceId'.
         */
        _sourceId?: Element;
    }
    /**
     * Define overloaded variants for when  generating code
     */
    interface OperationDefinitionOverload extends BackboneElement {
        /**
         * Name of parameter to include in overload
         */
        parameterName?: string[];
        /**
         * Contains extended information for property 'parameterName'.
         */
        _parameterName?: Element[];
        /**
         * Comments to go on overload
         */
        comment?: string;
        /**
         * Contains extended information for property 'comment'.
         */
        _comment?: Element;
    }
    /**
     * Definition of an operation or a named query
     */
    interface OperationDefinition extends DomainResource {
        /**
         * Canonical identifier for this operation definition, represented as a URI (globally unique)
         */
        url?: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Business version of the operation definition
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
        /**
         * Name for this operation definition (computer friendly)
         */
        name: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Name for this operation definition (human friendly)
         */
        title?: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
        /**
         * draft | active | retired | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * operation | query
         */
        kind: code;
        /**
         * Contains extended information for property 'kind'.
         */
        _kind?: Element;
        /**
         * For testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Contains extended information for property 'experimental'.
         */
        _experimental?: Element;
        /**
         * Date last changed
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Name of the publisher (organization or individual)
         */
        publisher?: string;
        /**
         * Contains extended information for property 'publisher'.
         */
        _publisher?: Element;
        /**
         * Contact details for the publisher
         */
        contact?: ContactDetail[];
        /**
         * Natural language description of the operation definition
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * The context that the content is intended to support
         */
        useContext?: UsageContext[];
        /**
         * Intended jurisdiction for operation definition (if applicable)
         */
        jurisdiction?: CodeableConcept[];
        /**
         * Why this operation definition is defined
         */
        purpose?: markdown;
        /**
         * Contains extended information for property 'purpose'.
         */
        _purpose?: Element;
        /**
         * Whether content is changed by the operation
         */
        affectsState?: boolean;
        /**
         * Contains extended information for property 'affectsState'.
         */
        _affectsState?: Element;
        /**
         * Name used to invoke the operation
         */
        code: code;
        /**
         * Contains extended information for property 'code'.
         */
        _code?: Element;
        /**
         * Additional information about use
         */
        comment?: markdown;
        /**
         * Contains extended information for property 'comment'.
         */
        _comment?: Element;
        /**
         * Marks this as a profile of the base
         */
        base?: canonical;
        /**
         * Contains extended information for property 'base'.
         */
        _base?: Element;
        /**
         * Types this operation applies to
         */
        resource?: code[];
        /**
         * Contains extended information for property 'resource'.
         */
        _resource?: Element[];
        /**
         * Invoke at the system level?
         */
        system: boolean;
        /**
         * Contains extended information for property 'system'.
         */
        _system?: Element;
        /**
         * Invoke at the type level?
         */
        type: boolean;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * Invoke on an instance?
         */
        instance: boolean;
        /**
         * Contains extended information for property 'instance'.
         */
        _instance?: Element;
        /**
         * Validation information for in parameters
         */
        inputProfile?: canonical;
        /**
         * Contains extended information for property 'inputProfile'.
         */
        _inputProfile?: Element;
        /**
         * Validation information for out parameters
         */
        outputProfile?: canonical;
        /**
         * Contains extended information for property 'outputProfile'.
         */
        _outputProfile?: Element;
        /**
         * Parameters for the operation/query
         */
        parameter?: OperationDefinitionParameter[];
        /**
         * Define overloaded variants for when  generating code
         */
        overload?: OperationDefinitionOverload[];
    }
    /**
     * A single issue associated with the action
     */
    interface OperationOutcomeIssue extends BackboneElement {
        /**
         * fatal | error | warning | information
         */
        severity: code;
        /**
         * Contains extended information for property 'severity'.
         */
        _severity?: Element;
        /**
         * Error or warning code
         */
        code: code;
        /**
         * Contains extended information for property 'code'.
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
         * Contains extended information for property 'diagnostics'.
         */
        _diagnostics?: Element;
        /**
         * Deprecated: Path of element(s) related to issue
         */
        location?: string[];
        /**
         * Contains extended information for property 'location'.
         */
        _location?: Element[];
        /**
         * FHIRPath of element(s) related to issue
         */
        expression?: string[];
        /**
         * Contains extended information for property 'expression'.
         */
        _expression?: Element[];
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
     * Contact for the organization for a certain purpose
     */
    interface OrganizationContact extends BackboneElement {
        /**
         * The type of contact
         */
        purpose?: CodeableConcept;
        /**
         * A name associated with the contact
         */
        name?: HumanName;
        /**
         * Contact details (telephone, email, etc.)  for a contact
         */
        telecom?: ContactPoint[];
        /**
         * Visiting or postal addresses for the contact
         */
        address?: Address;
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
         * Contains extended information for property 'active'.
         */
        _active?: Element;
        /**
         * Kind of organization
         */
        type?: CodeableConcept[];
        /**
         * Name used for the organization
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * A list of alternate names that the organization is known as, or was known as in the past
         */
        alias?: string[];
        /**
         * Contains extended information for property 'alias'.
         */
        _alias?: Element[];
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
         * Technical endpoints providing access to services operated for the organization
         */
        endpoint?: Reference[];
    }
    /**
     * Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship
     */
    interface OrganizationAffiliation extends DomainResource {
        /**
         * Business identifiers that are specific to this role
         */
        identifier?: Identifier[];
        /**
         * Whether this organization affiliation record is in active use
         */
        active?: boolean;
        /**
         * Contains extended information for property 'active'.
         */
        _active?: Element;
        /**
         * The period during which the participatingOrganization is affiliated with the primary organization
         */
        period?: Period;
        /**
         * Organization where the role is available
         */
        organization?: Reference;
        /**
         * Organization that provides/performs the role (e.g. providing services or is a member of)
         */
        participatingOrganization?: Reference;
        /**
         * Health insurance provider network in which the participatingOrganization provides the role's services (if defined) at the indicated locations (if defined)
         */
        network?: Reference[];
        /**
         * Definition of the role the participatingOrganization plays
         */
        code?: CodeableConcept[];
        /**
         * Specific specialty of the participatingOrganization in the context of the role
         */
        specialty?: CodeableConcept[];
        /**
         * The location(s) at which the role occurs
         */
        location?: Reference[];
        /**
         * Healthcare services provided through the role
         */
        healthcareService?: Reference[];
        /**
         * Contact details at the participatingOrganization relevant to this Affiliation
         */
        telecom?: ContactPoint[];
        /**
         * Technical endpoints providing access to services operated for this role
         */
        endpoint?: Reference[];
    }
    /**
     * Operation Parameter
     */
    interface ParametersParameter extends BackboneElement {
        /**
         * Name from the definition
         */
        name: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * If parameter is a data type
         */
        valueBase64Binary?: base64Binary;
        /**
         * Contains extended information for property 'valueBase64Binary'.
         */
        _valueBase64Binary?: Element;
        /**
         * If parameter is a data type
         */
        valueBoolean?: boolean;
        /**
         * Contains extended information for property 'valueBoolean'.
         */
        _valueBoolean?: Element;
        /**
         * If parameter is a data type
         */
        valueCanonical?: canonical;
        /**
         * Contains extended information for property 'valueCanonical'.
         */
        _valueCanonical?: Element;
        /**
         * If parameter is a data type
         */
        valueCode?: code;
        /**
         * Contains extended information for property 'valueCode'.
         */
        _valueCode?: Element;
        /**
         * If parameter is a data type
         */
        valueDate?: date;
        /**
         * Contains extended information for property 'valueDate'.
         */
        _valueDate?: Element;
        /**
         * If parameter is a data type
         */
        valueDateTime?: dateTime;
        /**
         * Contains extended information for property 'valueDateTime'.
         */
        _valueDateTime?: Element;
        /**
         * If parameter is a data type
         */
        valueDecimal?: decimal;
        /**
         * Contains extended information for property 'valueDecimal'.
         */
        _valueDecimal?: Element;
        /**
         * If parameter is a data type
         */
        valueId?: id;
        /**
         * Contains extended information for property 'valueId'.
         */
        _valueId?: Element;
        /**
         * If parameter is a data type
         */
        valueInstant?: instant;
        /**
         * Contains extended information for property 'valueInstant'.
         */
        _valueInstant?: Element;
        /**
         * If parameter is a data type
         */
        valueInteger?: integer;
        /**
         * Contains extended information for property 'valueInteger'.
         */
        _valueInteger?: Element;
        /**
         * If parameter is a data type
         */
        valueMarkdown?: markdown;
        /**
         * Contains extended information for property 'valueMarkdown'.
         */
        _valueMarkdown?: Element;
        /**
         * If parameter is a data type
         */
        valueOid?: oid;
        /**
         * Contains extended information for property 'valueOid'.
         */
        _valueOid?: Element;
        /**
         * If parameter is a data type
         */
        valuePositiveInt?: positiveInt;
        /**
         * Contains extended information for property 'valuePositiveInt'.
         */
        _valuePositiveInt?: Element;
        /**
         * If parameter is a data type
         */
        valueString?: string;
        /**
         * Contains extended information for property 'valueString'.
         */
        _valueString?: Element;
        /**
         * If parameter is a data type
         */
        valueTime?: time;
        /**
         * Contains extended information for property 'valueTime'.
         */
        _valueTime?: Element;
        /**
         * If parameter is a data type
         */
        valueUnsignedInt?: unsignedInt;
        /**
         * Contains extended information for property 'valueUnsignedInt'.
         */
        _valueUnsignedInt?: Element;
        /**
         * If parameter is a data type
         */
        valueUri?: uri;
        /**
         * Contains extended information for property 'valueUri'.
         */
        _valueUri?: Element;
        /**
         * If parameter is a data type
         */
        valueUrl?: url;
        /**
         * Contains extended information for property 'valueUrl'.
         */
        _valueUrl?: Element;
        /**
         * If parameter is a data type
         */
        valueUuid?: uuid;
        /**
         * Contains extended information for property 'valueUuid'.
         */
        _valueUuid?: Element;
        /**
         * If parameter is a data type
         */
        valueAddress?: Address;
        /**
         * If parameter is a data type
         */
        valueAge?: Age;
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
        valueCodeableConcept?: CodeableConcept;
        /**
         * If parameter is a data type
         */
        valueCoding?: Coding;
        /**
         * If parameter is a data type
         */
        valueContactPoint?: ContactPoint;
        /**
         * If parameter is a data type
         */
        valueCount?: Count;
        /**
         * If parameter is a data type
         */
        valueDistance?: Distance;
        /**
         * If parameter is a data type
         */
        valueDuration?: Duration;
        /**
         * If parameter is a data type
         */
        valueHumanName?: HumanName;
        /**
         * If parameter is a data type
         */
        valueIdentifier?: Identifier;
        /**
         * If parameter is a data type
         */
        valueMoney?: Money;
        /**
         * If parameter is a data type
         */
        valuePeriod?: Period;
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
        valueRatio?: Ratio;
        /**
         * If parameter is a data type
         */
        valueReference?: Reference;
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
        valueTiming?: Timing;
        /**
         * If parameter is a data type
         */
        valueContactDetail?: ContactDetail;
        /**
         * If parameter is a data type
         */
        valueContributor?: Contributor;
        /**
         * If parameter is a data type
         */
        valueDataRequirement?: DataRequirement;
        /**
         * If parameter is a data type
         */
        valueExpression?: Expression;
        /**
         * If parameter is a data type
         */
        valueParameterDefinition?: ParameterDefinition;
        /**
         * If parameter is a data type
         */
        valueRelatedArtifact?: RelatedArtifact;
        /**
         * If parameter is a data type
         */
        valueTriggerDefinition?: TriggerDefinition;
        /**
         * If parameter is a data type
         */
        valueUsageContext?: UsageContext;
        /**
         * If parameter is a data type
         */
        valueDosage?: Dosage;
        /**
         * If parameter is a data type
         */
        valueMeta?: Meta;
        /**
         * If parameter is a whole resource
         */
        resource?: Resource;
        /**
         * Named part of a multi-part parameter
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
     * A contact party (e.g. guardian, partner, friend) for the patient
     */
    interface PatientContact extends BackboneElement {
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
         * Contains extended information for property 'gender'.
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
     * A language which may be used to communicate with the patient about his or her health
     */
    interface PatientCommunication extends BackboneElement {
        /**
         * The language which can be used to communicate with the patient about his or her health
         */
        language: CodeableConcept;
        /**
         * Language preference indicator
         */
        preferred?: boolean;
        /**
         * Contains extended information for property 'preferred'.
         */
        _preferred?: Element;
    }
    /**
     * Link to another patient resource that concerns the same actual person
     */
    interface PatientLink extends BackboneElement {
        /**
         * The other patient or related person resource that the link refers to
         */
        other: Reference;
        /**
         * replaced-by | replaces | refer | seealso
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
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
         * Contains extended information for property 'active'.
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
         * Contains extended information for property 'gender'.
         */
        _gender?: Element;
        /**
         * The date of birth for the individual
         */
        birthDate?: date;
        /**
         * Contains extended information for property 'birthDate'.
         */
        _birthDate?: Element;
        /**
         * Indicates if the individual is deceased or not
         */
        deceasedBoolean?: boolean;
        /**
         * Contains extended information for property 'deceasedBoolean'.
         */
        _deceasedBoolean?: Element;
        /**
         * Indicates if the individual is deceased or not
         */
        deceasedDateTime?: dateTime;
        /**
         * Contains extended information for property 'deceasedDateTime'.
         */
        _deceasedDateTime?: Element;
        /**
         * An address for the individual
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
         * Contains extended information for property 'multipleBirthBoolean'.
         */
        _multipleBirthBoolean?: Element;
        /**
         * Whether patient is part of a multiple birth
         */
        multipleBirthInteger?: integer;
        /**
         * Contains extended information for property 'multipleBirthInteger'.
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
         * A language which may be used to communicate with the patient about his or her health
         */
        communication?: PatientCommunication[];
        /**
         * Patient's nominated primary care provider
         */
        generalPractitioner?: Reference[];
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
     * PaymentNotice request
     */
    interface PaymentNotice extends DomainResource {
        /**
         * Business Identifier for the payment noctice
         */
        identifier?: Identifier[];
        /**
         * active | cancelled | draft | entered-in-error
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Request reference
         */
        request?: Reference;
        /**
         * Response reference
         */
        response?: Reference;
        /**
         * Creation date
         */
        created: dateTime;
        /**
         * Contains extended information for property 'created'.
         */
        _created?: Element;
        /**
         * Responsible practitioner
         */
        provider?: Reference;
        /**
         * Payment reference
         */
        payment: Reference;
        /**
         * Payment or clearing date
         */
        paymentDate?: date;
        /**
         * Contains extended information for property 'paymentDate'.
         */
        _paymentDate?: Element;
        /**
         * Party being paid
         */
        payee?: Reference;
        /**
         * Party being notified
         */
        recipient: Reference;
        /**
         * Monetary amount of the payment
         */
        amount: Money;
        /**
         * Issued or cleared Status of the payment
         */
        paymentStatus?: CodeableConcept;
    }
    /**
     * Settlement particulars
     */
    interface PaymentReconciliationDetail extends BackboneElement {
        /**
         * Business identifier of the payment detail
         */
        identifier?: Identifier;
        /**
         * Business identifier of the prior payment detail
         */
        predecessor?: Identifier;
        /**
         * Category of payment
         */
        type: CodeableConcept;
        /**
         * Request giving rise to the payment
         */
        request?: Reference;
        /**
         * Submitter of the request
         */
        submitter?: Reference;
        /**
         * Response committing to a payment
         */
        response?: Reference;
        /**
         * Date of commitment to pay
         */
        date?: date;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Contact for the response
         */
        responsible?: Reference;
        /**
         * Recipient of the payment
         */
        payee?: Reference;
        /**
         * Amount allocated to this payable
         */
        amount?: Money;
    }
    /**
     * Note concerning processing
     */
    interface PaymentReconciliationProcessNote extends BackboneElement {
        /**
         * display | print | printoper
         */
        type?: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * Note explanatory text
         */
        text?: string;
        /**
         * Contains extended information for property 'text'.
         */
        _text?: Element;
    }
    /**
     * PaymentReconciliation resource
     */
    interface PaymentReconciliation extends DomainResource {
        /**
         * Business Identifier for a payment reconciliation
         */
        identifier?: Identifier[];
        /**
         * active | cancelled | draft | entered-in-error
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Period covered
         */
        period?: Period;
        /**
         * Creation date
         */
        created: dateTime;
        /**
         * Contains extended information for property 'created'.
         */
        _created?: Element;
        /**
         * Party generating payment
         */
        paymentIssuer?: Reference;
        /**
         * Reference to requesting resource
         */
        request?: Reference;
        /**
         * Responsible practitioner
         */
        requestor?: Reference;
        /**
         * queued | complete | error | partial
         */
        outcome?: code;
        /**
         * Contains extended information for property 'outcome'.
         */
        _outcome?: Element;
        /**
         * Disposition message
         */
        disposition?: string;
        /**
         * Contains extended information for property 'disposition'.
         */
        _disposition?: Element;
        /**
         * When payment issued
         */
        paymentDate: date;
        /**
         * Contains extended information for property 'paymentDate'.
         */
        _paymentDate?: Element;
        /**
         * Total amount of Payment
         */
        paymentAmount: Money;
        /**
         * Business identifier for the payment
         */
        paymentIdentifier?: Identifier;
        /**
         * Settlement particulars
         */
        detail?: PaymentReconciliationDetail[];
        /**
         * Printed form identifier
         */
        formCode?: CodeableConcept;
        /**
         * Note concerning processing
         */
        processNote?: PaymentReconciliationProcessNote[];
    }
    /**
     * Link to a resource that concerns the same actual person
     */
    interface PersonLink extends BackboneElement {
        /**
         * The resource to which this actual person is associated
         */
        target: Reference;
        /**
         * level1 | level2 | level3 | level4
         */
        assurance?: code;
        /**
         * Contains extended information for property 'assurance'.
         */
        _assurance?: Element;
    }
    /**
     * A generic person record
     */
    interface Person extends DomainResource {
        /**
         * A human identifier for this person
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
         * Contains extended information for property 'gender'.
         */
        _gender?: Element;
        /**
         * The date on which the person was born
         */
        birthDate?: date;
        /**
         * Contains extended information for property 'birthDate'.
         */
        _birthDate?: Element;
        /**
         * One or more addresses for the person
         */
        address?: Address[];
        /**
         * Image of the person
         */
        photo?: Attachment;
        /**
         * The organization that is the custodian of the person record
         */
        managingOrganization?: Reference;
        /**
         * This person's record is in active use
         */
        active?: boolean;
        /**
         * Contains extended information for property 'active'.
         */
        _active?: Element;
        /**
         * Link to a resource that concerns the same actual person
         */
        link?: PersonLink[];
    }
    /**
     * What the plan is trying to accomplish
     */
    interface PlanDefinitionGoal extends BackboneElement {
        /**
         * E.g. Treatment, dietary, behavioral
         */
        category?: CodeableConcept;
        /**
         * Code or text describing the goal
         */
        description: CodeableConcept;
        /**
         * high-priority | medium-priority | low-priority
         */
        priority?: CodeableConcept;
        /**
         * When goal pursuit begins
         */
        start?: CodeableConcept;
        /**
         * What does the goal address
         */
        addresses?: CodeableConcept[];
        /**
         * Supporting documentation for the goal
         */
        documentation?: RelatedArtifact[];
        /**
         * Target outcome for the goal
         */
        target?: PlanDefinitionGoalTarget[];
    }
    /**
     * Target outcome for the goal
     */
    interface PlanDefinitionGoalTarget extends BackboneElement {
        /**
         * The parameter whose value is to be tracked
         */
        measure?: CodeableConcept;
        /**
         * The target value to be achieved
         */
        detailQuantity?: Quantity;
        /**
         * The target value to be achieved
         */
        detailRange?: Range;
        /**
         * The target value to be achieved
         */
        detailCodeableConcept?: CodeableConcept;
        /**
         * Reach goal within
         */
        due?: Duration;
    }
    /**
     * Action defined by the plan
     */
    interface PlanDefinitionAction extends BackboneElement {
        /**
         * User-visible prefix for the action (e.g. 1. or A.)
         */
        prefix?: string;
        /**
         * Contains extended information for property 'prefix'.
         */
        _prefix?: Element;
        /**
         * User-visible title
         */
        title?: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
        /**
         * Brief description of the action
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system
         */
        textEquivalent?: string;
        /**
         * Contains extended information for property 'textEquivalent'.
         */
        _textEquivalent?: Element;
        /**
         * routine | urgent | asap | stat
         */
        priority?: code;
        /**
         * Contains extended information for property 'priority'.
         */
        _priority?: Element;
        /**
         * Code representing the meaning of the action or sub-actions
         */
        code?: CodeableConcept[];
        /**
         * Why the action should be performed
         */
        reason?: CodeableConcept[];
        /**
         * Supporting documentation for the intended performer of the action
         */
        documentation?: RelatedArtifact[];
        /**
         * What goals this action supports
         */
        goalId?: id[];
        /**
         * Contains extended information for property 'goalId'.
         */
        _goalId?: Element[];
        /**
         * Type of individual the action is focused on
         */
        subjectCodeableConcept?: CodeableConcept;
        /**
         * Type of individual the action is focused on
         */
        subjectReference?: Reference;
        /**
         * When the action should be triggered
         */
        trigger?: TriggerDefinition[];
        /**
         * Whether or not the action is applicable
         */
        condition?: PlanDefinitionActionCondition[];
        /**
         * Input data requirements
         */
        input?: DataRequirement[];
        /**
         * Output data definition
         */
        output?: DataRequirement[];
        /**
         * Relationship to another action
         */
        relatedAction?: PlanDefinitionActionRelatedAction[];
        /**
         * When the action should take place
         */
        timingDateTime?: dateTime;
        /**
         * Contains extended information for property 'timingDateTime'.
         */
        _timingDateTime?: Element;
        /**
         * When the action should take place
         */
        timingAge?: Age;
        /**
         * When the action should take place
         */
        timingPeriod?: Period;
        /**
         * When the action should take place
         */
        timingDuration?: Duration;
        /**
         * When the action should take place
         */
        timingRange?: Range;
        /**
         * When the action should take place
         */
        timingTiming?: Timing;
        /**
         * Who should participate in the action
         */
        participant?: PlanDefinitionActionParticipant[];
        /**
         * create | update | remove | fire-event
         */
        type?: CodeableConcept;
        /**
         * visual-group | logical-group | sentence-group
         */
        groupingBehavior?: code;
        /**
         * Contains extended information for property 'groupingBehavior'.
         */
        _groupingBehavior?: Element;
        /**
         * any | all | all-or-none | exactly-one | at-most-one | one-or-more
         */
        selectionBehavior?: code;
        /**
         * Contains extended information for property 'selectionBehavior'.
         */
        _selectionBehavior?: Element;
        /**
         * must | could | must-unless-documented
         */
        requiredBehavior?: code;
        /**
         * Contains extended information for property 'requiredBehavior'.
         */
        _requiredBehavior?: Element;
        /**
         * yes | no
         */
        precheckBehavior?: code;
        /**
         * Contains extended information for property 'precheckBehavior'.
         */
        _precheckBehavior?: Element;
        /**
         * single | multiple
         */
        cardinalityBehavior?: code;
        /**
         * Contains extended information for property 'cardinalityBehavior'.
         */
        _cardinalityBehavior?: Element;
        /**
         * Description of the activity to be performed
         */
        definitionCanonical?: canonical;
        /**
         * Contains extended information for property 'definitionCanonical'.
         */
        _definitionCanonical?: Element;
        /**
         * Description of the activity to be performed
         */
        definitionUri?: uri;
        /**
         * Contains extended information for property 'definitionUri'.
         */
        _definitionUri?: Element;
        /**
         * Transform to apply the template
         */
        transform?: canonical;
        /**
         * Contains extended information for property 'transform'.
         */
        _transform?: Element;
        /**
         * Dynamic aspects of the definition
         */
        dynamicValue?: PlanDefinitionActionDynamicValue[];
        /**
         * A sub-action
         */
        action?: PlanDefinitionAction[];
    }
    /**
     * Whether or not the action is applicable
     */
    interface PlanDefinitionActionCondition extends BackboneElement {
        /**
         * applicability | start | stop
         */
        kind: code;
        /**
         * Contains extended information for property 'kind'.
         */
        _kind?: Element;
        /**
         * Boolean-valued expression
         */
        expression?: Expression;
    }
    /**
     * Relationship to another action
     */
    interface PlanDefinitionActionRelatedAction extends BackboneElement {
        /**
         * What action is this related to
         */
        actionId: id;
        /**
         * Contains extended information for property 'actionId'.
         */
        _actionId?: Element;
        /**
         * before-start | before | before-end | concurrent-with-start | concurrent | concurrent-with-end | after-start | after | after-end
         */
        relationship: code;
        /**
         * Contains extended information for property 'relationship'.
         */
        _relationship?: Element;
        /**
         * Time offset for the relationship
         */
        offsetDuration?: Duration;
        /**
         * Time offset for the relationship
         */
        offsetRange?: Range;
    }
    /**
     * Who should participate in the action
     */
    interface PlanDefinitionActionParticipant extends BackboneElement {
        /**
         * patient | practitioner | related-person | device
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * E.g. Nurse, Surgeon, Parent
         */
        role?: CodeableConcept;
    }
    /**
     * Dynamic aspects of the definition
     */
    interface PlanDefinitionActionDynamicValue extends BackboneElement {
        /**
         * The path to the element to be set dynamically
         */
        path?: string;
        /**
         * Contains extended information for property 'path'.
         */
        _path?: Element;
        /**
         * An expression that provides the dynamic value for the customization
         */
        expression?: Expression;
    }
    /**
     * The definition of a plan for a series of actions, independent of any specific patient or context
     */
    interface PlanDefinition extends DomainResource {
        /**
         * Canonical identifier for this plan definition, represented as a URI (globally unique)
         */
        url?: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Additional identifier for the plan definition
         */
        identifier?: Identifier[];
        /**
         * Business version of the plan definition
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
        /**
         * Name for this plan definition (computer friendly)
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Name for this plan definition (human friendly)
         */
        title?: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
        /**
         * Subordinate title of the plan definition
         */
        subtitle?: string;
        /**
         * Contains extended information for property 'subtitle'.
         */
        _subtitle?: Element;
        /**
         * order-set | clinical-protocol | eca-rule | workflow-definition
         */
        type?: CodeableConcept;
        /**
         * draft | active | retired | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * For testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Contains extended information for property 'experimental'.
         */
        _experimental?: Element;
        /**
         * Type of individual the plan definition is focused on
         */
        subjectCodeableConcept?: CodeableConcept;
        /**
         * Type of individual the plan definition is focused on
         */
        subjectReference?: Reference;
        /**
         * Date last changed
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Name of the publisher (organization or individual)
         */
        publisher?: string;
        /**
         * Contains extended information for property 'publisher'.
         */
        _publisher?: Element;
        /**
         * Contact details for the publisher
         */
        contact?: ContactDetail[];
        /**
         * Natural language description of the plan definition
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * The context that the content is intended to support
         */
        useContext?: UsageContext[];
        /**
         * Intended jurisdiction for plan definition (if applicable)
         */
        jurisdiction?: CodeableConcept[];
        /**
         * Why this plan definition is defined
         */
        purpose?: markdown;
        /**
         * Contains extended information for property 'purpose'.
         */
        _purpose?: Element;
        /**
         * Describes the clinical usage of the plan
         */
        usage?: string;
        /**
         * Contains extended information for property 'usage'.
         */
        _usage?: Element;
        /**
         * Use and/or publishing restrictions
         */
        copyright?: markdown;
        /**
         * Contains extended information for property 'copyright'.
         */
        _copyright?: Element;
        /**
         * When the plan definition was approved by publisher
         */
        approvalDate?: date;
        /**
         * Contains extended information for property 'approvalDate'.
         */
        _approvalDate?: Element;
        /**
         * When the plan definition was last reviewed
         */
        lastReviewDate?: date;
        /**
         * Contains extended information for property 'lastReviewDate'.
         */
        _lastReviewDate?: Element;
        /**
         * When the plan definition is expected to be used
         */
        effectivePeriod?: Period;
        /**
         * E.g. Education, Treatment, Assessment
         */
        topic?: CodeableConcept[];
        /**
         * Who authored the content
         */
        author?: ContactDetail[];
        /**
         * Who edited the content
         */
        editor?: ContactDetail[];
        /**
         * Who reviewed the content
         */
        reviewer?: ContactDetail[];
        /**
         * Who endorsed the content
         */
        endorser?: ContactDetail[];
        /**
         * Additional documentation, citations
         */
        relatedArtifact?: RelatedArtifact[];
        /**
         * Logic used by the plan definition
         */
        library?: canonical[];
        /**
         * Contains extended information for property 'library'.
         */
        _library?: Element[];
        /**
         * What the plan is trying to accomplish
         */
        goal?: PlanDefinitionGoal[];
        /**
         * Action defined by the plan
         */
        action?: PlanDefinitionAction[];
    }
    /**
     * Certification, licenses, or training pertaining to the provision of care
     */
    interface PractitionerQualification extends BackboneElement {
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
         * An identifier for the person as this agent
         */
        identifier?: Identifier[];
        /**
         * Whether this practitioner's record is in active use
         */
        active?: boolean;
        /**
         * Contains extended information for property 'active'.
         */
        _active?: Element;
        /**
         * The name(s) associated with the practitioner
         */
        name?: HumanName[];
        /**
         * A contact detail for the practitioner (that apply to all roles)
         */
        telecom?: ContactPoint[];
        /**
         * Address(es) of the practitioner that are not role specific (typically home address)
         */
        address?: Address[];
        /**
         * male | female | other | unknown
         */
        gender?: code;
        /**
         * Contains extended information for property 'gender'.
         */
        _gender?: Element;
        /**
         * The date  on which the practitioner was born
         */
        birthDate?: date;
        /**
         * Contains extended information for property 'birthDate'.
         */
        _birthDate?: Element;
        /**
         * Image of the person
         */
        photo?: Attachment[];
        /**
         * Certification, licenses, or training pertaining to the provision of care
         */
        qualification?: PractitionerQualification[];
        /**
         * A language the practitioner can use in patient communication
         */
        communication?: CodeableConcept[];
    }
    /**
     * Times the Service Site is available
     */
    interface PractitionerRoleAvailableTime extends BackboneElement {
        /**
         * mon | tue | wed | thu | fri | sat | sun
         */
        daysOfWeek?: code[];
        /**
         * Contains extended information for property 'daysOfWeek'.
         */
        _daysOfWeek?: Element[];
        /**
         * Always available? e.g. 24 hour service
         */
        allDay?: boolean;
        /**
         * Contains extended information for property 'allDay'.
         */
        _allDay?: Element;
        /**
         * Opening time of day (ignored if allDay = true)
         */
        availableStartTime?: time;
        /**
         * Contains extended information for property 'availableStartTime'.
         */
        _availableStartTime?: Element;
        /**
         * Closing time of day (ignored if allDay = true)
         */
        availableEndTime?: time;
        /**
         * Contains extended information for property 'availableEndTime'.
         */
        _availableEndTime?: Element;
    }
    /**
     * Not available during this time due to provided reason
     */
    interface PractitionerRoleNotAvailable extends BackboneElement {
        /**
         * Reason presented to the user explaining why time not available
         */
        description: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Service not available from this date
         */
        during?: Period;
    }
    /**
     * Roles/organizations the practitioner is associated with
     */
    interface PractitionerRole extends DomainResource {
        /**
         * Business Identifiers that are specific to a role/location
         */
        identifier?: Identifier[];
        /**
         * Whether this practitioner role record is in active use
         */
        active?: boolean;
        /**
         * Contains extended information for property 'active'.
         */
        _active?: Element;
        /**
         * The period during which the practitioner is authorized to perform in these role(s)
         */
        period?: Period;
        /**
         * Practitioner that is able to provide the defined services for the organization
         */
        practitioner?: Reference;
        /**
         * Organization where the roles are available
         */
        organization?: Reference;
        /**
         * Roles which this practitioner may perform
         */
        code?: CodeableConcept[];
        /**
         * Specific specialty of the practitioner
         */
        specialty?: CodeableConcept[];
        /**
         * The location(s) at which this practitioner provides care
         */
        location?: Reference[];
        /**
         * The list of healthcare services that this worker provides for this role's Organization/Location(s)
         */
        healthcareService?: Reference[];
        /**
         * Contact details that are specific to the role/location/service
         */
        telecom?: ContactPoint[];
        /**
         * Times the Service Site is available
         */
        availableTime?: PractitionerRoleAvailableTime[];
        /**
         * Not available during this time due to provided reason
         */
        notAvailable?: PractitionerRoleNotAvailable[];
        /**
         * Description of availability exceptions
         */
        availabilityExceptions?: string;
        /**
         * Contains extended information for property 'availabilityExceptions'.
         */
        _availabilityExceptions?: Element;
        /**
         * Technical endpoints providing access to services operated for the practitioner with this role
         */
        endpoint?: Reference[];
    }
    /**
     * The people who performed the procedure
     */
    interface ProcedurePerformer extends BackboneElement {
        /**
         * Type of performance
         */
        function?: CodeableConcept;
        /**
         * The reference to the practitioner
         */
        actor: Reference;
        /**
         * Organization the device or practitioner was acting for
         */
        onBehalfOf?: Reference;
    }
    /**
     * Manipulated, implanted, or removed device
     */
    interface ProcedureFocalDevice extends BackboneElement {
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
     * An action that is being or was performed on a patient
     */
    interface Procedure extends DomainResource {
        /**
         * External Identifiers for this procedure
         */
        identifier?: Identifier[];
        /**
         * Instantiates FHIR protocol or definition
         */
        instantiatesCanonical?: canonical[];
        /**
         * Contains extended information for property 'instantiatesCanonical'.
         */
        _instantiatesCanonical?: Element[];
        /**
         * Instantiates external protocol or definition
         */
        instantiatesUri?: uri[];
        /**
         * Contains extended information for property 'instantiatesUri'.
         */
        _instantiatesUri?: Element[];
        /**
         * A request for this procedure
         */
        basedOn?: Reference[];
        /**
         * Part of referenced event
         */
        partOf?: Reference[];
        /**
         * preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Reason for current status
         */
        statusReason?: CodeableConcept;
        /**
         * Classification of the procedure
         */
        category?: CodeableConcept;
        /**
         * Identification of the procedure
         */
        code?: CodeableConcept;
        /**
         * Who the procedure was performed on
         */
        subject: Reference;
        /**
         * Encounter created as part of
         */
        encounter?: Reference;
        /**
         * When the procedure was performed
         */
        performedDateTime?: dateTime;
        /**
         * Contains extended information for property 'performedDateTime'.
         */
        _performedDateTime?: Element;
        /**
         * When the procedure was performed
         */
        performedPeriod?: Period;
        /**
         * When the procedure was performed
         */
        performedString?: string;
        /**
         * Contains extended information for property 'performedString'.
         */
        _performedString?: Element;
        /**
         * When the procedure was performed
         */
        performedAge?: Age;
        /**
         * When the procedure was performed
         */
        performedRange?: Range;
        /**
         * Who recorded the procedure
         */
        recorder?: Reference;
        /**
         * Person who asserts this procedure
         */
        asserter?: Reference;
        /**
         * The people who performed the procedure
         */
        performer?: ProcedurePerformer[];
        /**
         * Where the procedure happened
         */
        location?: Reference;
        /**
         * Coded reason procedure performed
         */
        reasonCode?: CodeableConcept[];
        /**
         * The justification that the procedure was performed
         */
        reasonReference?: Reference[];
        /**
         * Target body sites
         */
        bodySite?: CodeableConcept[];
        /**
         * The result of procedure
         */
        outcome?: CodeableConcept;
        /**
         * Any report resulting from the procedure
         */
        report?: Reference[];
        /**
         * Complication following the procedure
         */
        complication?: CodeableConcept[];
        /**
         * A condition that is a result of the procedure
         */
        complicationDetail?: Reference[];
        /**
         * Instructions for follow up
         */
        followUp?: CodeableConcept[];
        /**
         * Additional information about the procedure
         */
        note?: Annotation[];
        /**
         * Manipulated, implanted, or removed device
         */
        focalDevice?: ProcedureFocalDevice[];
        /**
         * Items used during procedure
         */
        usedReference?: Reference[];
        /**
         * Coded items used during the procedure
         */
        usedCode?: CodeableConcept[];
    }
    /**
     * Actor involved
     */
    interface ProvenanceAgent extends BackboneElement {
        /**
         * How the agent participated
         */
        type?: CodeableConcept;
        /**
         * What the agents role was
         */
        role?: CodeableConcept[];
        /**
         * Who participated
         */
        who: Reference;
        /**
         * Who the agent is representing
         */
        onBehalfOf?: Reference;
    }
    /**
     * An entity used in this activity
     */
    interface ProvenanceEntity extends BackboneElement {
        /**
         * derivation | revision | quotation | source | removal
         */
        role: code;
        /**
         * Contains extended information for property 'role'.
         */
        _role?: Element;
        /**
         * Identity of entity
         */
        what: Reference;
        /**
         * Entity is attributed to this agent
         */
        agent?: ProvenanceAgent[];
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
        occurredPeriod?: Period;
        /**
         * When the activity occurred
         */
        occurredDateTime?: dateTime;
        /**
         * Contains extended information for property 'occurredDateTime'.
         */
        _occurredDateTime?: Element;
        /**
         * When the activity was recorded / updated
         */
        recorded: instant;
        /**
         * Contains extended information for property 'recorded'.
         */
        _recorded?: Element;
        /**
         * Policy or plan the activity was defined by
         */
        policy?: uri[];
        /**
         * Contains extended information for property 'policy'.
         */
        _policy?: Element[];
        /**
         * Where the activity occurred, if relevant
         */
        location?: Reference;
        /**
         * Reason the activity is occurring
         */
        reason?: CodeableConcept[];
        /**
         * Activity that occurred
         */
        activity?: CodeableConcept;
        /**
         * Actor involved
         */
        agent: ProvenanceAgent[];
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
     * Questions and sections within the Questionnaire
     */
    interface QuestionnaireItem extends BackboneElement {
        /**
         * Unique id for item in questionnaire
         */
        linkId: string;
        /**
         * Contains extended information for property 'linkId'.
         */
        _linkId?: Element;
        /**
         * ElementDefinition - details for the item
         */
        definition?: uri;
        /**
         * Contains extended information for property 'definition'.
         */
        _definition?: Element;
        /**
         * Corresponding concept for this item in a terminology
         */
        code?: Coding[];
        /**
         * E.g. "1(a)", "2.5.3"
         */
        prefix?: string;
        /**
         * Contains extended information for property 'prefix'.
         */
        _prefix?: Element;
        /**
         * Primary text for the item
         */
        text?: string;
        /**
         * Contains extended information for property 'text'.
         */
        _text?: Element;
        /**
         * group | display | boolean | decimal | integer | date | dateTime +
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * Only allow data when
         */
        enableWhen?: QuestionnaireItemEnableWhen[];
        /**
         * all | any
         */
        enableBehavior?: code;
        /**
         * Contains extended information for property 'enableBehavior'.
         */
        _enableBehavior?: Element;
        /**
         * Whether the item must be included in data results
         */
        required?: boolean;
        /**
         * Contains extended information for property 'required'.
         */
        _required?: Element;
        /**
         * Whether the item may repeat
         */
        repeats?: boolean;
        /**
         * Contains extended information for property 'repeats'.
         */
        _repeats?: Element;
        /**
         * Don't allow human editing
         */
        readOnly?: boolean;
        /**
         * Contains extended information for property 'readOnly'.
         */
        _readOnly?: Element;
        /**
         * No more than this many characters
         */
        maxLength?: integer;
        /**
         * Contains extended information for property 'maxLength'.
         */
        _maxLength?: Element;
        /**
         * Valueset containing permitted answers
         */
        answerValueSet?: canonical;
        /**
         * Contains extended information for property 'answerValueSet'.
         */
        _answerValueSet?: Element;
        /**
         * Permitted answer
         */
        answerOption?: QuestionnaireItemAnswerOption[];
        /**
         * Initial value(s) when item is first rendered
         */
        initial?: QuestionnaireItemInitial[];
        /**
         * Nested questionnaire items
         */
        item?: QuestionnaireItem[];
    }
    /**
     * Only allow data when
     */
    interface QuestionnaireItemEnableWhen extends BackboneElement {
        /**
         * Question that determines whether item is enabled
         */
        question: string;
        /**
         * Contains extended information for property 'question'.
         */
        _question?: Element;
        /**
         * exists | = | != | > | < | >= | <=
         */
        operator: code;
        /**
         * Contains extended information for property 'operator'.
         */
        _operator?: Element;
        /**
         * Value for question comparison based on operator
         */
        answerBoolean?: boolean;
        /**
         * Contains extended information for property 'answerBoolean'.
         */
        _answerBoolean?: Element;
        /**
         * Value for question comparison based on operator
         */
        answerDecimal?: decimal;
        /**
         * Contains extended information for property 'answerDecimal'.
         */
        _answerDecimal?: Element;
        /**
         * Value for question comparison based on operator
         */
        answerInteger?: integer;
        /**
         * Contains extended information for property 'answerInteger'.
         */
        _answerInteger?: Element;
        /**
         * Value for question comparison based on operator
         */
        answerDate?: date;
        /**
         * Contains extended information for property 'answerDate'.
         */
        _answerDate?: Element;
        /**
         * Value for question comparison based on operator
         */
        answerDateTime?: dateTime;
        /**
         * Contains extended information for property 'answerDateTime'.
         */
        _answerDateTime?: Element;
        /**
         * Value for question comparison based on operator
         */
        answerTime?: time;
        /**
         * Contains extended information for property 'answerTime'.
         */
        _answerTime?: Element;
        /**
         * Value for question comparison based on operator
         */
        answerString?: string;
        /**
         * Contains extended information for property 'answerString'.
         */
        _answerString?: Element;
        /**
         * Value for question comparison based on operator
         */
        answerCoding?: Coding;
        /**
         * Value for question comparison based on operator
         */
        answerQuantity?: Quantity;
        /**
         * Value for question comparison based on operator
         */
        answerReference?: Reference;
    }
    /**
     * Permitted answer
     */
    interface QuestionnaireItemAnswerOption extends BackboneElement {
        /**
         * Answer value
         */
        valueInteger?: integer;
        /**
         * Contains extended information for property 'valueInteger'.
         */
        _valueInteger?: Element;
        /**
         * Answer value
         */
        valueDate?: date;
        /**
         * Contains extended information for property 'valueDate'.
         */
        _valueDate?: Element;
        /**
         * Answer value
         */
        valueTime?: time;
        /**
         * Contains extended information for property 'valueTime'.
         */
        _valueTime?: Element;
        /**
         * Answer value
         */
        valueString?: string;
        /**
         * Contains extended information for property 'valueString'.
         */
        _valueString?: Element;
        /**
         * Answer value
         */
        valueCoding?: Coding;
        /**
         * Answer value
         */
        valueReference?: Reference;
        /**
         * Whether option is selected by default
         */
        initialSelected?: boolean;
        /**
         * Contains extended information for property 'initialSelected'.
         */
        _initialSelected?: Element;
    }
    /**
     * Initial value(s) when item is first rendered
     */
    interface QuestionnaireItemInitial extends BackboneElement {
        /**
         * Actual value for initializing the question
         */
        valueBoolean?: boolean;
        /**
         * Contains extended information for property 'valueBoolean'.
         */
        _valueBoolean?: Element;
        /**
         * Actual value for initializing the question
         */
        valueDecimal?: decimal;
        /**
         * Contains extended information for property 'valueDecimal'.
         */
        _valueDecimal?: Element;
        /**
         * Actual value for initializing the question
         */
        valueInteger?: integer;
        /**
         * Contains extended information for property 'valueInteger'.
         */
        _valueInteger?: Element;
        /**
         * Actual value for initializing the question
         */
        valueDate?: date;
        /**
         * Contains extended information for property 'valueDate'.
         */
        _valueDate?: Element;
        /**
         * Actual value for initializing the question
         */
        valueDateTime?: dateTime;
        /**
         * Contains extended information for property 'valueDateTime'.
         */
        _valueDateTime?: Element;
        /**
         * Actual value for initializing the question
         */
        valueTime?: time;
        /**
         * Contains extended information for property 'valueTime'.
         */
        _valueTime?: Element;
        /**
         * Actual value for initializing the question
         */
        valueString?: string;
        /**
         * Contains extended information for property 'valueString'.
         */
        _valueString?: Element;
        /**
         * Actual value for initializing the question
         */
        valueUri?: uri;
        /**
         * Contains extended information for property 'valueUri'.
         */
        _valueUri?: Element;
        /**
         * Actual value for initializing the question
         */
        valueAttachment?: Attachment;
        /**
         * Actual value for initializing the question
         */
        valueCoding?: Coding;
        /**
         * Actual value for initializing the question
         */
        valueQuantity?: Quantity;
        /**
         * Actual value for initializing the question
         */
        valueReference?: Reference;
    }
    /**
     * A structured set of questions
     */
    interface Questionnaire extends DomainResource {
        /**
         * Canonical identifier for this questionnaire, represented as a URI (globally unique)
         */
        url?: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Additional identifier for the questionnaire
         */
        identifier?: Identifier[];
        /**
         * Business version of the questionnaire
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
        /**
         * Name for this questionnaire (computer friendly)
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Name for this questionnaire (human friendly)
         */
        title?: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
        /**
         * Instantiates protocol or definition
         */
        derivedFrom?: canonical[];
        /**
         * Contains extended information for property 'derivedFrom'.
         */
        _derivedFrom?: Element[];
        /**
         * draft | active | retired | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * For testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Contains extended information for property 'experimental'.
         */
        _experimental?: Element;
        /**
         * Resource that can be subject of QuestionnaireResponse
         */
        subjectType?: code[];
        /**
         * Contains extended information for property 'subjectType'.
         */
        _subjectType?: Element[];
        /**
         * Date last changed
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Name of the publisher (organization or individual)
         */
        publisher?: string;
        /**
         * Contains extended information for property 'publisher'.
         */
        _publisher?: Element;
        /**
         * Contact details for the publisher
         */
        contact?: ContactDetail[];
        /**
         * Natural language description of the questionnaire
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * The context that the content is intended to support
         */
        useContext?: UsageContext[];
        /**
         * Intended jurisdiction for questionnaire (if applicable)
         */
        jurisdiction?: CodeableConcept[];
        /**
         * Why this questionnaire is defined
         */
        purpose?: markdown;
        /**
         * Contains extended information for property 'purpose'.
         */
        _purpose?: Element;
        /**
         * Use and/or publishing restrictions
         */
        copyright?: markdown;
        /**
         * Contains extended information for property 'copyright'.
         */
        _copyright?: Element;
        /**
         * When the questionnaire was approved by publisher
         */
        approvalDate?: date;
        /**
         * Contains extended information for property 'approvalDate'.
         */
        _approvalDate?: Element;
        /**
         * When the questionnaire was last reviewed
         */
        lastReviewDate?: date;
        /**
         * Contains extended information for property 'lastReviewDate'.
         */
        _lastReviewDate?: Element;
        /**
         * When the questionnaire is expected to be used
         */
        effectivePeriod?: Period;
        /**
         * Concept that represents the overall questionnaire
         */
        code?: Coding[];
        /**
         * Questions and sections within the Questionnaire
         */
        item?: QuestionnaireItem[];
    }
    /**
     * Groups and questions
     */
    interface QuestionnaireResponseItem extends BackboneElement {
        /**
         * Pointer to specific item from Questionnaire
         */
        linkId: string;
        /**
         * Contains extended information for property 'linkId'.
         */
        _linkId?: Element;
        /**
         * ElementDefinition - details for the item
         */
        definition?: uri;
        /**
         * Contains extended information for property 'definition'.
         */
        _definition?: Element;
        /**
         * Name for group or question text
         */
        text?: string;
        /**
         * Contains extended information for property 'text'.
         */
        _text?: Element;
        /**
         * The response(s) to the question
         */
        answer?: QuestionnaireResponseItemAnswer[];
        /**
         * Nested questionnaire response items
         */
        item?: QuestionnaireResponseItem[];
    }
    /**
     * The response(s) to the question
     */
    interface QuestionnaireResponseItemAnswer extends BackboneElement {
        /**
         * Single-valued answer to the question
         */
        valueBoolean?: boolean;
        /**
         * Contains extended information for property 'valueBoolean'.
         */
        _valueBoolean?: Element;
        /**
         * Single-valued answer to the question
         */
        valueDecimal?: decimal;
        /**
         * Contains extended information for property 'valueDecimal'.
         */
        _valueDecimal?: Element;
        /**
         * Single-valued answer to the question
         */
        valueInteger?: integer;
        /**
         * Contains extended information for property 'valueInteger'.
         */
        _valueInteger?: Element;
        /**
         * Single-valued answer to the question
         */
        valueDate?: date;
        /**
         * Contains extended information for property 'valueDate'.
         */
        _valueDate?: Element;
        /**
         * Single-valued answer to the question
         */
        valueDateTime?: dateTime;
        /**
         * Contains extended information for property 'valueDateTime'.
         */
        _valueDateTime?: Element;
        /**
         * Single-valued answer to the question
         */
        valueTime?: time;
        /**
         * Contains extended information for property 'valueTime'.
         */
        _valueTime?: Element;
        /**
         * Single-valued answer to the question
         */
        valueString?: string;
        /**
         * Contains extended information for property 'valueString'.
         */
        _valueString?: Element;
        /**
         * Single-valued answer to the question
         */
        valueUri?: uri;
        /**
         * Contains extended information for property 'valueUri'.
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
         * Nested groups and questions
         */
        item?: QuestionnaireResponseItem[];
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
         * Request fulfilled by this QuestionnaireResponse
         */
        basedOn?: Reference[];
        /**
         * Part of this action
         */
        partOf?: Reference[];
        /**
         * Form being answered
         */
        questionnaire?: canonical;
        /**
         * Contains extended information for property 'questionnaire'.
         */
        _questionnaire?: Element;
        /**
         * in-progress | completed | amended | entered-in-error | stopped
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * The subject of the questions
         */
        subject?: Reference;
        /**
         * Encounter created as part of
         */
        encounter?: Reference;
        /**
         * Date the answers were gathered
         */
        authored?: dateTime;
        /**
         * Contains extended information for property 'authored'.
         */
        _authored?: Element;
        /**
         * Person who received and recorded the answers
         */
        author?: Reference;
        /**
         * The person who answered the questions
         */
        source?: Reference;
        /**
         * Groups and questions
         */
        item?: QuestionnaireResponseItem[];
    }
    /**
     * A language which may be used to communicate with about the patient's health
     */
    interface RelatedPersonCommunication extends BackboneElement {
        /**
         * The language which can be used to communicate with the patient about his or her health
         */
        language: CodeableConcept;
        /**
         * Language preference indicator
         */
        preferred?: boolean;
        /**
         * Contains extended information for property 'preferred'.
         */
        _preferred?: Element;
    }
    /**
     * A person that is related to a patient, but who is not a direct target of care
     */
    interface RelatedPerson extends DomainResource {
        /**
         * A human identifier for this person
         */
        identifier?: Identifier[];
        /**
         * Whether this related person's record is in active use
         */
        active?: boolean;
        /**
         * Contains extended information for property 'active'.
         */
        _active?: Element;
        /**
         * The patient this person is related to
         */
        patient: Reference;
        /**
         * The nature of the relationship
         */
        relationship?: CodeableConcept[];
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
         * Contains extended information for property 'gender'.
         */
        _gender?: Element;
        /**
         * The date on which the related person was born
         */
        birthDate?: date;
        /**
         * Contains extended information for property 'birthDate'.
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
        /**
         * A language which may be used to communicate with about the patient's health
         */
        communication?: RelatedPersonCommunication[];
    }
    /**
     * Proposed actions, if any
     */
    interface RequestGroupAction extends BackboneElement {
        /**
         * User-visible prefix for the action (e.g. 1. or A.)
         */
        prefix?: string;
        /**
         * Contains extended information for property 'prefix'.
         */
        _prefix?: Element;
        /**
         * User-visible title
         */
        title?: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
        /**
         * Short description of the action
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system
         */
        textEquivalent?: string;
        /**
         * Contains extended information for property 'textEquivalent'.
         */
        _textEquivalent?: Element;
        /**
         * routine | urgent | asap | stat
         */
        priority?: code;
        /**
         * Contains extended information for property 'priority'.
         */
        _priority?: Element;
        /**
         * Code representing the meaning of the action or sub-actions
         */
        code?: CodeableConcept[];
        /**
         * Supporting documentation for the intended performer of the action
         */
        documentation?: RelatedArtifact[];
        /**
         * Whether or not the action is applicable
         */
        condition?: RequestGroupActionCondition[];
        /**
         * Relationship to another action
         */
        relatedAction?: RequestGroupActionRelatedAction[];
        /**
         * When the action should take place
         */
        timingDateTime?: dateTime;
        /**
         * Contains extended information for property 'timingDateTime'.
         */
        _timingDateTime?: Element;
        /**
         * When the action should take place
         */
        timingAge?: Age;
        /**
         * When the action should take place
         */
        timingPeriod?: Period;
        /**
         * When the action should take place
         */
        timingDuration?: Duration;
        /**
         * When the action should take place
         */
        timingRange?: Range;
        /**
         * When the action should take place
         */
        timingTiming?: Timing;
        /**
         * Who should perform the action
         */
        participant?: Reference[];
        /**
         * create | update | remove | fire-event
         */
        type?: CodeableConcept;
        /**
         * visual-group | logical-group | sentence-group
         */
        groupingBehavior?: code;
        /**
         * Contains extended information for property 'groupingBehavior'.
         */
        _groupingBehavior?: Element;
        /**
         * any | all | all-or-none | exactly-one | at-most-one | one-or-more
         */
        selectionBehavior?: code;
        /**
         * Contains extended information for property 'selectionBehavior'.
         */
        _selectionBehavior?: Element;
        /**
         * must | could | must-unless-documented
         */
        requiredBehavior?: code;
        /**
         * Contains extended information for property 'requiredBehavior'.
         */
        _requiredBehavior?: Element;
        /**
         * yes | no
         */
        precheckBehavior?: code;
        /**
         * Contains extended information for property 'precheckBehavior'.
         */
        _precheckBehavior?: Element;
        /**
         * single | multiple
         */
        cardinalityBehavior?: code;
        /**
         * Contains extended information for property 'cardinalityBehavior'.
         */
        _cardinalityBehavior?: Element;
        /**
         * The target of the action
         */
        resource?: Reference;
        /**
         * Sub action
         */
        action?: RequestGroupAction[];
    }
    /**
     * Whether or not the action is applicable
     */
    interface RequestGroupActionCondition extends BackboneElement {
        /**
         * applicability | start | stop
         */
        kind: code;
        /**
         * Contains extended information for property 'kind'.
         */
        _kind?: Element;
        /**
         * Boolean-valued expression
         */
        expression?: Expression;
    }
    /**
     * Relationship to another action
     */
    interface RequestGroupActionRelatedAction extends BackboneElement {
        /**
         * What action this is related to
         */
        actionId: id;
        /**
         * Contains extended information for property 'actionId'.
         */
        _actionId?: Element;
        /**
         * before-start | before | before-end | concurrent-with-start | concurrent | concurrent-with-end | after-start | after | after-end
         */
        relationship: code;
        /**
         * Contains extended information for property 'relationship'.
         */
        _relationship?: Element;
        /**
         * Time offset for the relationship
         */
        offsetDuration?: Duration;
        /**
         * Time offset for the relationship
         */
        offsetRange?: Range;
    }
    /**
     * A group of related requests
     */
    interface RequestGroup extends DomainResource {
        /**
         * Business identifier
         */
        identifier?: Identifier[];
        /**
         * Instantiates FHIR protocol or definition
         */
        instantiatesCanonical?: canonical[];
        /**
         * Contains extended information for property 'instantiatesCanonical'.
         */
        _instantiatesCanonical?: Element[];
        /**
         * Instantiates external protocol or definition
         */
        instantiatesUri?: uri[];
        /**
         * Contains extended information for property 'instantiatesUri'.
         */
        _instantiatesUri?: Element[];
        /**
         * Fulfills plan, proposal, or order
         */
        basedOn?: Reference[];
        /**
         * Request(s) replaced by this request
         */
        replaces?: Reference[];
        /**
         * Composite request this is part of
         */
        groupIdentifier?: Identifier;
        /**
         * draft | active | on-hold | revoked | completed | entered-in-error | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option
         */
        intent: code;
        /**
         * Contains extended information for property 'intent'.
         */
        _intent?: Element;
        /**
         * routine | urgent | asap | stat
         */
        priority?: code;
        /**
         * Contains extended information for property 'priority'.
         */
        _priority?: Element;
        /**
         * What's being requested/ordered
         */
        code?: CodeableConcept;
        /**
         * Who the request group is about
         */
        subject?: Reference;
        /**
         * Created as part of
         */
        encounter?: Reference;
        /**
         * When the request group was authored
         */
        authoredOn?: dateTime;
        /**
         * Contains extended information for property 'authoredOn'.
         */
        _authoredOn?: Element;
        /**
         * Device or practitioner that authored the request group
         */
        author?: Reference;
        /**
         * Why the request group is needed
         */
        reasonCode?: CodeableConcept[];
        /**
         * Why the request group is needed
         */
        reasonReference?: Reference[];
        /**
         * Additional notes about the response
         */
        note?: Annotation[];
        /**
         * Proposed actions, if any
         */
        action?: RequestGroupAction[];
    }
    /**
     * A research context or question
     */
    interface ResearchDefinition extends DomainResource {
        /**
         * Canonical identifier for this research definition, represented as a URI (globally unique)
         */
        url?: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Additional identifier for the research definition
         */
        identifier?: Identifier[];
        /**
         * Business version of the research definition
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
        /**
         * Name for this research definition (computer friendly)
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Name for this research definition (human friendly)
         */
        title?: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
        /**
         * Title for use in informal contexts
         */
        shortTitle?: string;
        /**
         * Contains extended information for property 'shortTitle'.
         */
        _shortTitle?: Element;
        /**
         * Subordinate title of the ResearchDefinition
         */
        subtitle?: string;
        /**
         * Contains extended information for property 'subtitle'.
         */
        _subtitle?: Element;
        /**
         * draft | active | retired | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * For testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Contains extended information for property 'experimental'.
         */
        _experimental?: Element;
        /**
         * E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device
         */
        subjectCodeableConcept?: CodeableConcept;
        /**
         * E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device
         */
        subjectReference?: Reference;
        /**
         * Date last changed
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Name of the publisher (organization or individual)
         */
        publisher?: string;
        /**
         * Contains extended information for property 'publisher'.
         */
        _publisher?: Element;
        /**
         * Contact details for the publisher
         */
        contact?: ContactDetail[];
        /**
         * Natural language description of the research definition
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Used for footnotes or explanatory notes
         */
        comment?: string[];
        /**
         * Contains extended information for property 'comment'.
         */
        _comment?: Element[];
        /**
         * The context that the content is intended to support
         */
        useContext?: UsageContext[];
        /**
         * Intended jurisdiction for research definition (if applicable)
         */
        jurisdiction?: CodeableConcept[];
        /**
         * Why this research definition is defined
         */
        purpose?: markdown;
        /**
         * Contains extended information for property 'purpose'.
         */
        _purpose?: Element;
        /**
         * Describes the clinical usage of the ResearchDefinition
         */
        usage?: string;
        /**
         * Contains extended information for property 'usage'.
         */
        _usage?: Element;
        /**
         * Use and/or publishing restrictions
         */
        copyright?: markdown;
        /**
         * Contains extended information for property 'copyright'.
         */
        _copyright?: Element;
        /**
         * When the research definition was approved by publisher
         */
        approvalDate?: date;
        /**
         * Contains extended information for property 'approvalDate'.
         */
        _approvalDate?: Element;
        /**
         * When the research definition was last reviewed
         */
        lastReviewDate?: date;
        /**
         * Contains extended information for property 'lastReviewDate'.
         */
        _lastReviewDate?: Element;
        /**
         * When the research definition is expected to be used
         */
        effectivePeriod?: Period;
        /**
         * The category of the ResearchDefinition, such as Education, Treatment, Assessment, etc.
         */
        topic?: CodeableConcept[];
        /**
         * Who authored the content
         */
        author?: ContactDetail[];
        /**
         * Who edited the content
         */
        editor?: ContactDetail[];
        /**
         * Who reviewed the content
         */
        reviewer?: ContactDetail[];
        /**
         * Who endorsed the content
         */
        endorser?: ContactDetail[];
        /**
         * Additional documentation, citations, etc.
         */
        relatedArtifact?: RelatedArtifact[];
        /**
         * Logic used by the ResearchDefinition
         */
        library?: canonical[];
        /**
         * Contains extended information for property 'library'.
         */
        _library?: Element[];
        /**
         * What population?
         */
        population: Reference;
        /**
         * What exposure?
         */
        exposure?: Reference;
        /**
         * What alternative exposure state?
         */
        exposureAlternative?: Reference;
        /**
         * What outcome?
         */
        outcome?: Reference;
    }
    /**
     * What defines the members of the research element
     */
    interface ResearchElementDefinitionCharacteristic extends BackboneElement {
        /**
         * What code or expression defines members?
         */
        definitionCodeableConcept?: CodeableConcept;
        /**
         * What code or expression defines members?
         */
        definitionCanonical?: canonical;
        /**
         * Contains extended information for property 'definitionCanonical'.
         */
        _definitionCanonical?: Element;
        /**
         * What code or expression defines members?
         */
        definitionExpression?: Expression;
        /**
         * What code or expression defines members?
         */
        definitionDataRequirement?: DataRequirement;
        /**
         * What code/value pairs define members?
         */
        usageContext?: UsageContext[];
        /**
         * Whether the characteristic includes or excludes members
         */
        exclude?: boolean;
        /**
         * Contains extended information for property 'exclude'.
         */
        _exclude?: Element;
        /**
         * What unit is the outcome described in?
         */
        unitOfMeasure?: CodeableConcept;
        /**
         * What time period does the study cover
         */
        studyEffectiveDescription?: string;
        /**
         * Contains extended information for property 'studyEffectiveDescription'.
         */
        _studyEffectiveDescription?: Element;
        /**
         * What time period does the study cover
         */
        studyEffectiveDateTime?: dateTime;
        /**
         * Contains extended information for property 'studyEffectiveDateTime'.
         */
        _studyEffectiveDateTime?: Element;
        /**
         * What time period does the study cover
         */
        studyEffectivePeriod?: Period;
        /**
         * What time period does the study cover
         */
        studyEffectiveDuration?: Duration;
        /**
         * What time period does the study cover
         */
        studyEffectiveTiming?: Timing;
        /**
         * Observation time from study start
         */
        studyEffectiveTimeFromStart?: Duration;
        /**
         * mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median
         */
        studyEffectiveGroupMeasure?: code;
        /**
         * Contains extended information for property 'studyEffectiveGroupMeasure'.
         */
        _studyEffectiveGroupMeasure?: Element;
        /**
         * What time period do participants cover
         */
        participantEffectiveDescription?: string;
        /**
         * Contains extended information for property 'participantEffectiveDescription'.
         */
        _participantEffectiveDescription?: Element;
        /**
         * What time period do participants cover
         */
        participantEffectiveDateTime?: dateTime;
        /**
         * Contains extended information for property 'participantEffectiveDateTime'.
         */
        _participantEffectiveDateTime?: Element;
        /**
         * What time period do participants cover
         */
        participantEffectivePeriod?: Period;
        /**
         * What time period do participants cover
         */
        participantEffectiveDuration?: Duration;
        /**
         * What time period do participants cover
         */
        participantEffectiveTiming?: Timing;
        /**
         * Observation time from study start
         */
        participantEffectiveTimeFromStart?: Duration;
        /**
         * mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median
         */
        participantEffectiveGroupMeasure?: code;
        /**
         * Contains extended information for property 'participantEffectiveGroupMeasure'.
         */
        _participantEffectiveGroupMeasure?: Element;
    }
    /**
     * A population, intervention, or exposure definition
     */
    interface ResearchElementDefinition extends DomainResource {
        /**
         * Canonical identifier for this research element definition, represented as a URI (globally unique)
         */
        url?: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Additional identifier for the research element definition
         */
        identifier?: Identifier[];
        /**
         * Business version of the research element definition
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
        /**
         * Name for this research element definition (computer friendly)
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Name for this research element definition (human friendly)
         */
        title?: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
        /**
         * Title for use in informal contexts
         */
        shortTitle?: string;
        /**
         * Contains extended information for property 'shortTitle'.
         */
        _shortTitle?: Element;
        /**
         * Subordinate title of the ResearchElementDefinition
         */
        subtitle?: string;
        /**
         * Contains extended information for property 'subtitle'.
         */
        _subtitle?: Element;
        /**
         * draft | active | retired | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * For testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Contains extended information for property 'experimental'.
         */
        _experimental?: Element;
        /**
         * E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device
         */
        subjectCodeableConcept?: CodeableConcept;
        /**
         * E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device
         */
        subjectReference?: Reference;
        /**
         * Date last changed
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Name of the publisher (organization or individual)
         */
        publisher?: string;
        /**
         * Contains extended information for property 'publisher'.
         */
        _publisher?: Element;
        /**
         * Contact details for the publisher
         */
        contact?: ContactDetail[];
        /**
         * Natural language description of the research element definition
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Used for footnotes or explanatory notes
         */
        comment?: string[];
        /**
         * Contains extended information for property 'comment'.
         */
        _comment?: Element[];
        /**
         * The context that the content is intended to support
         */
        useContext?: UsageContext[];
        /**
         * Intended jurisdiction for research element definition (if applicable)
         */
        jurisdiction?: CodeableConcept[];
        /**
         * Why this research element definition is defined
         */
        purpose?: markdown;
        /**
         * Contains extended information for property 'purpose'.
         */
        _purpose?: Element;
        /**
         * Describes the clinical usage of the ResearchElementDefinition
         */
        usage?: string;
        /**
         * Contains extended information for property 'usage'.
         */
        _usage?: Element;
        /**
         * Use and/or publishing restrictions
         */
        copyright?: markdown;
        /**
         * Contains extended information for property 'copyright'.
         */
        _copyright?: Element;
        /**
         * When the research element definition was approved by publisher
         */
        approvalDate?: date;
        /**
         * Contains extended information for property 'approvalDate'.
         */
        _approvalDate?: Element;
        /**
         * When the research element definition was last reviewed
         */
        lastReviewDate?: date;
        /**
         * Contains extended information for property 'lastReviewDate'.
         */
        _lastReviewDate?: Element;
        /**
         * When the research element definition is expected to be used
         */
        effectivePeriod?: Period;
        /**
         * The category of the ResearchElementDefinition, such as Education, Treatment, Assessment, etc.
         */
        topic?: CodeableConcept[];
        /**
         * Who authored the content
         */
        author?: ContactDetail[];
        /**
         * Who edited the content
         */
        editor?: ContactDetail[];
        /**
         * Who reviewed the content
         */
        reviewer?: ContactDetail[];
        /**
         * Who endorsed the content
         */
        endorser?: ContactDetail[];
        /**
         * Additional documentation, citations, etc.
         */
        relatedArtifact?: RelatedArtifact[];
        /**
         * Logic used by the ResearchElementDefinition
         */
        library?: canonical[];
        /**
         * Contains extended information for property 'library'.
         */
        _library?: Element[];
        /**
         * population | exposure | outcome
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * dichotomous | continuous | descriptive
         */
        variableType?: code;
        /**
         * Contains extended information for property 'variableType'.
         */
        _variableType?: Element;
        /**
         * What defines the members of the research element
         */
        characteristic: ResearchElementDefinitionCharacteristic[];
    }
    /**
     * Defined path through the study for a subject
     */
    interface ResearchStudyArm extends BackboneElement {
        /**
         * Label for study arm
         */
        name: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Categorization of study arm
         */
        type?: CodeableConcept;
        /**
         * Short explanation of study path
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
    }
    /**
     * A goal for the study
     */
    interface ResearchStudyObjective extends BackboneElement {
        /**
         * Label for the objective
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * primary | secondary | exploratory
         */
        type?: CodeableConcept;
    }
    /**
     * Investigation to increase healthcare-related patient-independent knowledge
     */
    interface ResearchStudy extends DomainResource {
        /**
         * Business Identifier for study
         */
        identifier?: Identifier[];
        /**
         * Name for this study
         */
        title?: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
        /**
         * Steps followed in executing study
         */
        protocol?: Reference[];
        /**
         * Part of larger study
         */
        partOf?: Reference[];
        /**
         * active | administratively-completed | approved | closed-to-accrual | closed-to-accrual-and-intervention | completed | disapproved | in-review | temporarily-closed-to-accrual | temporarily-closed-to-accrual-and-intervention | withdrawn
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * treatment | prevention | diagnostic | supportive-care | screening | health-services-research | basic-science | device-feasibility
         */
        primaryPurposeType?: CodeableConcept;
        /**
         * n-a | early-phase-1 | phase-1 | phase-1-phase-2 | phase-2 | phase-2-phase-3 | phase-3 | phase-4
         */
        phase?: CodeableConcept;
        /**
         * Classifications for the study
         */
        category?: CodeableConcept[];
        /**
         * Drugs, devices, etc. under study
         */
        focus?: CodeableConcept[];
        /**
         * Condition being studied
         */
        condition?: CodeableConcept[];
        /**
         * Contact details for the study
         */
        contact?: ContactDetail[];
        /**
         * References and dependencies
         */
        relatedArtifact?: RelatedArtifact[];
        /**
         * Used to search for the study
         */
        keyword?: CodeableConcept[];
        /**
         * Geographic region(s) for study
         */
        location?: CodeableConcept[];
        /**
         * What this is study doing
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Inclusion & exclusion criteria
         */
        enrollment?: Reference[];
        /**
         * When the study began and ended
         */
        period?: Period;
        /**
         * Organization that initiates and is legally responsible for the study
         */
        sponsor?: Reference;
        /**
         * Researcher who oversees multiple aspects of the study
         */
        principalInvestigator?: Reference;
        /**
         * Facility where study activities are conducted
         */
        site?: Reference[];
        /**
         * accrual-goal-met | closed-due-to-toxicity | closed-due-to-lack-of-study-progress | temporarily-closed-per-study-design
         */
        reasonStopped?: CodeableConcept;
        /**
         * Comments made about the study
         */
        note?: Annotation[];
        /**
         * Defined path through the study for a subject
         */
        arm?: ResearchStudyArm[];
        /**
         * A goal for the study
         */
        objective?: ResearchStudyObjective[];
    }
    /**
     * Physical entity which is the primary unit of interest in the study
     */
    interface ResearchSubject extends DomainResource {
        /**
         * Business Identifier for research subject in a study
         */
        identifier?: Identifier[];
        /**
         * candidate | eligible | follow-up | ineligible | not-registered | off-study | on-study | on-study-intervention | on-study-observation | pending-on-study | potential-candidate | screening | withdrawn
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Start and end of participation
         */
        period?: Period;
        /**
         * Study subject is part of
         */
        study: Reference;
        /**
         * Who is part of study
         */
        individual: Reference;
        /**
         * What path should be followed
         */
        assignedArm?: string;
        /**
         * Contains extended information for property 'assignedArm'.
         */
        _assignedArm?: Element;
        /**
         * What path was followed
         */
        actualArm?: string;
        /**
         * Contains extended information for property 'actualArm'.
         */
        _actualArm?: Element;
        /**
         * Agreement to participate in study
         */
        consent?: Reference;
    }
    /**
     * Outcome predicted
     */
    interface RiskAssessmentPrediction extends BackboneElement {
        /**
         * Possible outcome for the subject
         */
        outcome?: CodeableConcept;
        /**
         * Likelihood of specified outcome
         */
        probabilityDecimal?: decimal;
        /**
         * Contains extended information for property 'probabilityDecimal'.
         */
        _probabilityDecimal?: Element;
        /**
         * Likelihood of specified outcome
         */
        probabilityRange?: Range;
        /**
         * Likelihood of specified outcome as a qualitative value
         */
        qualitativeRisk?: CodeableConcept;
        /**
         * Relative likelihood
         */
        relativeRisk?: decimal;
        /**
         * Contains extended information for property 'relativeRisk'.
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
         * Contains extended information for property 'rationale'.
         */
        _rationale?: Element;
    }
    /**
     * Potential outcomes for a subject with likelihood
     */
    interface RiskAssessment extends DomainResource {
        /**
         * Unique identifier for the assessment
         */
        identifier?: Identifier[];
        /**
         * Request fulfilled by this assessment
         */
        basedOn?: Reference;
        /**
         * Part of this occurrence
         */
        parent?: Reference;
        /**
         * registered | preliminary | final | amended +
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Evaluation mechanism
         */
        method?: CodeableConcept;
        /**
         * Type of assessment
         */
        code?: CodeableConcept;
        /**
         * Who/what does assessment apply to?
         */
        subject: Reference;
        /**
         * Where was assessment performed?
         */
        encounter?: Reference;
        /**
         * When was assessment made?
         */
        occurrenceDateTime?: dateTime;
        /**
         * Contains extended information for property 'occurrenceDateTime'.
         */
        _occurrenceDateTime?: Element;
        /**
         * When was assessment made?
         */
        occurrencePeriod?: Period;
        /**
         * Condition assessed
         */
        condition?: Reference;
        /**
         * Who did assessment?
         */
        performer?: Reference;
        /**
         * Why the assessment was necessary?
         */
        reasonCode?: CodeableConcept[];
        /**
         * Why the assessment was necessary?
         */
        reasonReference?: Reference[];
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
         * Contains extended information for property 'mitigation'.
         */
        _mitigation?: Element;
        /**
         * Comments on the risk assessment
         */
        note?: Annotation[];
    }
    /**
     * What sample size was involved?
     */
    interface RiskEvidenceSynthesisSampleSize extends BackboneElement {
        /**
         * Description of sample size
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * How many studies?
         */
        numberOfStudies?: integer;
        /**
         * Contains extended information for property 'numberOfStudies'.
         */
        _numberOfStudies?: Element;
        /**
         * How many participants?
         */
        numberOfParticipants?: integer;
        /**
         * Contains extended information for property 'numberOfParticipants'.
         */
        _numberOfParticipants?: Element;
    }
    /**
     * What was the estimated risk
     */
    interface RiskEvidenceSynthesisRiskEstimate extends BackboneElement {
        /**
         * Description of risk estimate
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Type of risk estimate
         */
        type?: CodeableConcept;
        /**
         * Point estimate
         */
        value?: decimal;
        /**
         * Contains extended information for property 'value'.
         */
        _value?: Element;
        /**
         * What unit is the outcome described in?
         */
        unitOfMeasure?: CodeableConcept;
        /**
         * Sample size for group measured
         */
        denominatorCount?: integer;
        /**
         * Contains extended information for property 'denominatorCount'.
         */
        _denominatorCount?: Element;
        /**
         * Number with the outcome
         */
        numeratorCount?: integer;
        /**
         * Contains extended information for property 'numeratorCount'.
         */
        _numeratorCount?: Element;
        /**
         * How precise the estimate is
         */
        precisionEstimate?: RiskEvidenceSynthesisRiskEstimatePrecisionEstimate[];
    }
    /**
     * How precise the estimate is
     */
    interface RiskEvidenceSynthesisRiskEstimatePrecisionEstimate extends BackboneElement {
        /**
         * Type of precision estimate
         */
        type?: CodeableConcept;
        /**
         * Level of confidence interval
         */
        level?: decimal;
        /**
         * Contains extended information for property 'level'.
         */
        _level?: Element;
        /**
         * Lower bound
         */
        from?: decimal;
        /**
         * Contains extended information for property 'from'.
         */
        _from?: Element;
        /**
         * Upper bound
         */
        to?: decimal;
        /**
         * Contains extended information for property 'to'.
         */
        _to?: Element;
    }
    /**
     * How certain is the risk
     */
    interface RiskEvidenceSynthesisCertainty extends BackboneElement {
        /**
         * Certainty rating
         */
        rating?: CodeableConcept[];
        /**
         * Used for footnotes or explanatory notes
         */
        note?: Annotation[];
        /**
         * A component that contributes to the overall certainty
         */
        certaintySubcomponent?: RiskEvidenceSynthesisCertaintyCertaintySubcomponent[];
    }
    /**
     * A component that contributes to the overall certainty
     */
    interface RiskEvidenceSynthesisCertaintyCertaintySubcomponent extends BackboneElement {
        /**
         * Type of subcomponent of certainty rating
         */
        type?: CodeableConcept;
        /**
         * Subcomponent certainty rating
         */
        rating?: CodeableConcept[];
        /**
         * Used for footnotes or explanatory notes
         */
        note?: Annotation[];
    }
    /**
     * A quantified estimate of risk based on a body of evidence
     */
    interface RiskEvidenceSynthesis extends DomainResource {
        /**
         * Canonical identifier for this risk evidence synthesis, represented as a URI (globally unique)
         */
        url?: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Additional identifier for the risk evidence synthesis
         */
        identifier?: Identifier[];
        /**
         * Business version of the risk evidence synthesis
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
        /**
         * Name for this risk evidence synthesis (computer friendly)
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Name for this risk evidence synthesis (human friendly)
         */
        title?: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
        /**
         * draft | active | retired | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Date last changed
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Name of the publisher (organization or individual)
         */
        publisher?: string;
        /**
         * Contains extended information for property 'publisher'.
         */
        _publisher?: Element;
        /**
         * Contact details for the publisher
         */
        contact?: ContactDetail[];
        /**
         * Natural language description of the risk evidence synthesis
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Used for footnotes or explanatory notes
         */
        note?: Annotation[];
        /**
         * The context that the content is intended to support
         */
        useContext?: UsageContext[];
        /**
         * Intended jurisdiction for risk evidence synthesis (if applicable)
         */
        jurisdiction?: CodeableConcept[];
        /**
         * Use and/or publishing restrictions
         */
        copyright?: markdown;
        /**
         * Contains extended information for property 'copyright'.
         */
        _copyright?: Element;
        /**
         * When the risk evidence synthesis was approved by publisher
         */
        approvalDate?: date;
        /**
         * Contains extended information for property 'approvalDate'.
         */
        _approvalDate?: Element;
        /**
         * When the risk evidence synthesis was last reviewed
         */
        lastReviewDate?: date;
        /**
         * Contains extended information for property 'lastReviewDate'.
         */
        _lastReviewDate?: Element;
        /**
         * When the risk evidence synthesis is expected to be used
         */
        effectivePeriod?: Period;
        /**
         * The category of the EffectEvidenceSynthesis, such as Education, Treatment, Assessment, etc.
         */
        topic?: CodeableConcept[];
        /**
         * Who authored the content
         */
        author?: ContactDetail[];
        /**
         * Who edited the content
         */
        editor?: ContactDetail[];
        /**
         * Who reviewed the content
         */
        reviewer?: ContactDetail[];
        /**
         * Who endorsed the content
         */
        endorser?: ContactDetail[];
        /**
         * Additional documentation, citations, etc.
         */
        relatedArtifact?: RelatedArtifact[];
        /**
         * Type of synthesis
         */
        synthesisType?: CodeableConcept;
        /**
         * Type of study
         */
        studyType?: CodeableConcept;
        /**
         * What population?
         */
        population: Reference;
        /**
         * What exposure?
         */
        exposure?: Reference;
        /**
         * What outcome?
         */
        outcome: Reference;
        /**
         * What sample size was involved?
         */
        sampleSize?: RiskEvidenceSynthesisSampleSize;
        /**
         * What was the estimated risk
         */
        riskEstimate?: RiskEvidenceSynthesisRiskEstimate;
        /**
         * How certain is the risk
         */
        certainty?: RiskEvidenceSynthesisCertainty[];
    }
    /**
     * A container for slots of time that may be available for booking appointments
     */
    interface Schedule extends DomainResource {
        /**
         * External Ids for this item
         */
        identifier?: Identifier[];
        /**
         * Whether this schedule is in active use
         */
        active?: boolean;
        /**
         * Contains extended information for property 'active'.
         */
        _active?: Element;
        /**
         * High-level category
         */
        serviceCategory?: CodeableConcept[];
        /**
         * Specific service
         */
        serviceType?: CodeableConcept[];
        /**
         * Type of specialty needed
         */
        specialty?: CodeableConcept[];
        /**
         * Resource(s) that availability information is being provided for
         */
        actor: Reference[];
        /**
         * Period of time covered by schedule
         */
        planningHorizon?: Period;
        /**
         * Comments on availability
         */
        comment?: string;
        /**
         * Contains extended information for property 'comment'.
         */
        _comment?: Element;
    }
    /**
     * For Composite resources to define the parts
     */
    interface SearchParameterComponent extends BackboneElement {
        /**
         * Defines how the part works
         */
        definition: canonical;
        /**
         * Contains extended information for property 'definition'.
         */
        _definition?: Element;
        /**
         * Subexpression relative to main expression
         */
        expression: string;
        /**
         * Contains extended information for property 'expression'.
         */
        _expression?: Element;
    }
    /**
     * Search parameter for a resource
     */
    interface SearchParameter extends DomainResource {
        /**
         * Canonical identifier for this search parameter, represented as a URI (globally unique)
         */
        url: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Business version of the search parameter
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
        /**
         * Name for this search parameter (computer friendly)
         */
        name: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Original definition for the search parameter
         */
        derivedFrom?: canonical;
        /**
         * Contains extended information for property 'derivedFrom'.
         */
        _derivedFrom?: Element;
        /**
         * draft | active | retired | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * For testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Contains extended information for property 'experimental'.
         */
        _experimental?: Element;
        /**
         * Date last changed
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Name of the publisher (organization or individual)
         */
        publisher?: string;
        /**
         * Contains extended information for property 'publisher'.
         */
        _publisher?: Element;
        /**
         * Contact details for the publisher
         */
        contact?: ContactDetail[];
        /**
         * Natural language description of the search parameter
         */
        description: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * The context that the content is intended to support
         */
        useContext?: UsageContext[];
        /**
         * Intended jurisdiction for search parameter (if applicable)
         */
        jurisdiction?: CodeableConcept[];
        /**
         * Why this search parameter is defined
         */
        purpose?: markdown;
        /**
         * Contains extended information for property 'purpose'.
         */
        _purpose?: Element;
        /**
         * Code used in URL
         */
        code: code;
        /**
         * Contains extended information for property 'code'.
         */
        _code?: Element;
        /**
         * The resource type(s) this search parameter applies to
         */
        base: code[];
        /**
         * Contains extended information for property 'base'.
         */
        _base?: Element[];
        /**
         * number | date | string | token | reference | composite | quantity | uri | special
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * FHIRPath expression that extracts the values
         */
        expression?: string;
        /**
         * Contains extended information for property 'expression'.
         */
        _expression?: Element;
        /**
         * XPath that extracts the values
         */
        xpath?: string;
        /**
         * Contains extended information for property 'xpath'.
         */
        _xpath?: Element;
        /**
         * normal | phonetic | nearby | distance | other
         */
        xpathUsage?: code;
        /**
         * Contains extended information for property 'xpathUsage'.
         */
        _xpathUsage?: Element;
        /**
         * Types of resource (if a resource reference)
         */
        target?: code[];
        /**
         * Contains extended information for property 'target'.
         */
        _target?: Element[];
        /**
         * Allow multiple values per parameter (or)
         */
        multipleOr?: boolean;
        /**
         * Contains extended information for property 'multipleOr'.
         */
        _multipleOr?: Element;
        /**
         * Allow multiple parameters (and)
         */
        multipleAnd?: boolean;
        /**
         * Contains extended information for property 'multipleAnd'.
         */
        _multipleAnd?: Element;
        /**
         * eq | ne | gt | lt | ge | le | sa | eb | ap
         */
        comparator?: code[];
        /**
         * Contains extended information for property 'comparator'.
         */
        _comparator?: Element[];
        /**
         * missing | exact | contains | not | text | in | not-in | below | above | type | identifier | ofType
         */
        modifier?: code[];
        /**
         * Contains extended information for property 'modifier'.
         */
        _modifier?: Element[];
        /**
         * Chained names supported
         */
        chain?: string[];
        /**
         * Contains extended information for property 'chain'.
         */
        _chain?: Element[];
        /**
         * For Composite resources to define the parts
         */
        component?: SearchParameterComponent[];
    }
    /**
     * A request for a service to be performed
     */
    interface ServiceRequest extends DomainResource {
        /**
         * Identifiers assigned to this order
         */
        identifier?: Identifier[];
        /**
         * Instantiates FHIR protocol or definition
         */
        instantiatesCanonical?: canonical[];
        /**
         * Contains extended information for property 'instantiatesCanonical'.
         */
        _instantiatesCanonical?: Element[];
        /**
         * Instantiates external protocol or definition
         */
        instantiatesUri?: uri[];
        /**
         * Contains extended information for property 'instantiatesUri'.
         */
        _instantiatesUri?: Element[];
        /**
         * What request fulfills
         */
        basedOn?: Reference[];
        /**
         * What request replaces
         */
        replaces?: Reference[];
        /**
         * Composite Request ID
         */
        requisition?: Identifier;
        /**
         * draft | active | on-hold | revoked | completed | entered-in-error | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option
         */
        intent: code;
        /**
         * Contains extended information for property 'intent'.
         */
        _intent?: Element;
        /**
         * Classification of service
         */
        category?: CodeableConcept[];
        /**
         * routine | urgent | asap | stat
         */
        priority?: code;
        /**
         * Contains extended information for property 'priority'.
         */
        _priority?: Element;
        /**
         * True if service/procedure should not be performed
         */
        doNotPerform?: boolean;
        /**
         * Contains extended information for property 'doNotPerform'.
         */
        _doNotPerform?: Element;
        /**
         * What is being requested/ordered
         */
        code?: CodeableConcept;
        /**
         * Additional order information
         */
        orderDetail?: CodeableConcept[];
        /**
         * Service amount
         */
        quantityQuantity?: Quantity;
        /**
         * Service amount
         */
        quantityRatio?: Ratio;
        /**
         * Service amount
         */
        quantityRange?: Range;
        /**
         * Individual or Entity the service is ordered for
         */
        subject: Reference;
        /**
         * Encounter in which the request was created
         */
        encounter?: Reference;
        /**
         * When service should occur
         */
        occurrenceDateTime?: dateTime;
        /**
         * Contains extended information for property 'occurrenceDateTime'.
         */
        _occurrenceDateTime?: Element;
        /**
         * When service should occur
         */
        occurrencePeriod?: Period;
        /**
         * When service should occur
         */
        occurrenceTiming?: Timing;
        /**
         * Preconditions for service
         */
        asNeededBoolean?: boolean;
        /**
         * Contains extended information for property 'asNeededBoolean'.
         */
        _asNeededBoolean?: Element;
        /**
         * Preconditions for service
         */
        asNeededCodeableConcept?: CodeableConcept;
        /**
         * Date request signed
         */
        authoredOn?: dateTime;
        /**
         * Contains extended information for property 'authoredOn'.
         */
        _authoredOn?: Element;
        /**
         * Who/what is requesting service
         */
        requester?: Reference;
        /**
         * Performer role
         */
        performerType?: CodeableConcept;
        /**
         * Requested performer
         */
        performer?: Reference[];
        /**
         * Requested location
         */
        locationCode?: CodeableConcept[];
        /**
         * Requested location
         */
        locationReference?: Reference[];
        /**
         * Explanation/Justification for procedure or service
         */
        reasonCode?: CodeableConcept[];
        /**
         * Explanation/Justification for service or service
         */
        reasonReference?: Reference[];
        /**
         * Associated insurance coverage
         */
        insurance?: Reference[];
        /**
         * Additional clinical information
         */
        supportingInfo?: Reference[];
        /**
         * Procedure Samples
         */
        specimen?: Reference[];
        /**
         * Location on Body
         */
        bodySite?: CodeableConcept[];
        /**
         * Comments
         */
        note?: Annotation[];
        /**
         * Patient or consumer-oriented instructions
         */
        patientInstruction?: string;
        /**
         * Contains extended information for property 'patientInstruction'.
         */
        _patientInstruction?: Element;
        /**
         * Request provenance
         */
        relevantHistory?: Reference[];
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
         * A broad categorization of the service that is to be performed during this appointment
         */
        serviceCategory?: CodeableConcept[];
        /**
         * The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the availability resource
         */
        serviceType?: CodeableConcept[];
        /**
         * The specialty of a practitioner that would be required to perform the service requested in this appointment
         */
        specialty?: CodeableConcept[];
        /**
         * The style of appointment or patient that may be booked in the slot (not service type)
         */
        appointmentType?: CodeableConcept;
        /**
         * The schedule resource that this slot defines an interval of status information
         */
        schedule: Reference;
        /**
         * busy | free | busy-unavailable | busy-tentative | entered-in-error
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Date/Time that the slot is to begin
         */
        start: instant;
        /**
         * Contains extended information for property 'start'.
         */
        _start?: Element;
        /**
         * Date/Time that the slot is to conclude
         */
        end: instant;
        /**
         * Contains extended information for property 'end'.
         */
        _end?: Element;
        /**
         * This slot has already been overbooked, appointments are unlikely to be accepted for this time
         */
        overbooked?: boolean;
        /**
         * Contains extended information for property 'overbooked'.
         */
        _overbooked?: Element;
        /**
         * Comments on the slot to describe any extended information. Such as custom constraints on the slot
         */
        comment?: string;
        /**
         * Contains extended information for property 'comment'.
         */
        _comment?: Element;
    }
    /**
     * Collection details
     */
    interface SpecimenCollection extends BackboneElement {
        /**
         * Who collected the specimen
         */
        collector?: Reference;
        /**
         * Collection time
         */
        collectedDateTime?: dateTime;
        /**
         * Contains extended information for property 'collectedDateTime'.
         */
        _collectedDateTime?: Element;
        /**
         * Collection time
         */
        collectedPeriod?: Period;
        /**
         * How long it took to collect specimen
         */
        duration?: Duration;
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
        /**
         * Whether or how long patient abstained from food and/or drink
         */
        fastingStatusCodeableConcept?: CodeableConcept;
        /**
         * Whether or how long patient abstained from food and/or drink
         */
        fastingStatusDuration?: Duration;
    }
    /**
     * Processing and processing step details
     */
    interface SpecimenProcessing extends BackboneElement {
        /**
         * Textual description of procedure
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Indicates the treatment step  applied to the specimen
         */
        procedure?: CodeableConcept;
        /**
         * Material used in the processing step
         */
        additive?: Reference[];
        /**
         * Date and time of specimen processing
         */
        timeDateTime?: dateTime;
        /**
         * Contains extended information for property 'timeDateTime'.
         */
        _timeDateTime?: Element;
        /**
         * Date and time of specimen processing
         */
        timePeriod?: Period;
    }
    /**
     * Direct container of specimen (tube/slide, etc.)
     */
    interface SpecimenContainer extends BackboneElement {
        /**
         * Id for the container
         */
        identifier?: Identifier[];
        /**
         * Textual description of the container
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
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
         * Identifier assigned by the lab
         */
        accessionIdentifier?: Identifier;
        /**
         * available | unavailable | unsatisfactory | entered-in-error
         */
        status?: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Kind of material that forms the specimen
         */
        type?: CodeableConcept;
        /**
         * Where the specimen came from. This may be from patient(s), from a location (e.g., the source of an environmental sample), or a sampling of a substance or a device
         */
        subject?: Reference;
        /**
         * The time when specimen was received for processing
         */
        receivedTime?: dateTime;
        /**
         * Contains extended information for property 'receivedTime'.
         */
        _receivedTime?: Element;
        /**
         * Specimen from which this specimen originated
         */
        parent?: Reference[];
        /**
         * Why the specimen was collected
         */
        request?: Reference[];
        /**
         * Collection details
         */
        collection?: SpecimenCollection;
        /**
         * Processing and processing step details
         */
        processing?: SpecimenProcessing[];
        /**
         * Direct container of specimen (tube/slide, etc.)
         */
        container?: SpecimenContainer[];
        /**
         * State of the specimen
         */
        condition?: CodeableConcept[];
        /**
         * Comments
         */
        note?: Annotation[];
    }
    /**
     * Specimen in container intended for testing by lab
     */
    interface SpecimenDefinitionTypeTested extends BackboneElement {
        /**
         * Primary or secondary specimen
         */
        isDerived?: boolean;
        /**
         * Contains extended information for property 'isDerived'.
         */
        _isDerived?: Element;
        /**
         * Type of intended specimen
         */
        type?: CodeableConcept;
        /**
         * preferred | alternate
         */
        preference: code;
        /**
         * Contains extended information for property 'preference'.
         */
        _preference?: Element;
        /**
         * The specimen's container
         */
        container?: SpecimenDefinitionTypeTestedContainer;
        /**
         * Specimen requirements
         */
        requirement?: string;
        /**
         * Contains extended information for property 'requirement'.
         */
        _requirement?: Element;
        /**
         * Specimen retention time
         */
        retentionTime?: Duration;
        /**
         * Rejection criterion
         */
        rejectionCriterion?: CodeableConcept[];
        /**
         * Specimen handling before testing
         */
        handling?: SpecimenDefinitionTypeTestedHandling[];
    }
    /**
     * The specimen's container
     */
    interface SpecimenDefinitionTypeTestedContainer extends BackboneElement {
        /**
         * Container material
         */
        material?: CodeableConcept;
        /**
         * Kind of container associated with the kind of specimen
         */
        type?: CodeableConcept;
        /**
         * Color of container cap
         */
        cap?: CodeableConcept;
        /**
         * Container description
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Container capacity
         */
        capacity?: Quantity;
        /**
         * Minimum volume
         */
        minimumVolumeQuantity?: Quantity;
        /**
         * Minimum volume
         */
        minimumVolumeString?: string;
        /**
         * Contains extended information for property 'minimumVolumeString'.
         */
        _minimumVolumeString?: Element;
        /**
         * Additive associated with container
         */
        additive?: SpecimenDefinitionTypeTestedContainerAdditive[];
        /**
         * Specimen container preparation
         */
        preparation?: string;
        /**
         * Contains extended information for property 'preparation'.
         */
        _preparation?: Element;
    }
    /**
     * Additive associated with container
     */
    interface SpecimenDefinitionTypeTestedContainerAdditive extends BackboneElement {
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
     * Specimen handling before testing
     */
    interface SpecimenDefinitionTypeTestedHandling extends BackboneElement {
        /**
         * Temperature qualifier
         */
        temperatureQualifier?: CodeableConcept;
        /**
         * Temperature range
         */
        temperatureRange?: Range;
        /**
         * Maximum preservation time
         */
        maxDuration?: Duration;
        /**
         * Preservation instruction
         */
        instruction?: string;
        /**
         * Contains extended information for property 'instruction'.
         */
        _instruction?: Element;
    }
    /**
     * Kind of specimen
     */
    interface SpecimenDefinition extends DomainResource {
        /**
         * Business identifier of a kind of specimen
         */
        identifier?: Identifier;
        /**
         * Kind of material to collect
         */
        typeCollected?: CodeableConcept;
        /**
         * Patient preparation for collection
         */
        patientPreparation?: CodeableConcept[];
        /**
         * Time aspect for collection
         */
        timeAspect?: string;
        /**
         * Contains extended information for property 'timeAspect'.
         */
        _timeAspect?: Element;
        /**
         * Specimen collection procedure
         */
        collection?: CodeableConcept[];
        /**
         * Specimen in container intended for testing by lab
         */
        typeTested?: SpecimenDefinitionTypeTested[];
    }
    /**
     * External specification that the content is mapped to
     */
    interface StructureDefinitionMapping extends BackboneElement {
        /**
         * Internal id when this mapping is used
         */
        identity: id;
        /**
         * Contains extended information for property 'identity'.
         */
        _identity?: Element;
        /**
         * Identifies what this mapping refers to
         */
        uri?: uri;
        /**
         * Contains extended information for property 'uri'.
         */
        _uri?: Element;
        /**
         * Names what this mapping refers to
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Versions, Issues, Scope limitations etc.
         */
        comment?: string;
        /**
         * Contains extended information for property 'comment'.
         */
        _comment?: Element;
    }
    /**
     * If an extension, where it can be used in instances
     */
    interface StructureDefinitionContext extends BackboneElement {
        /**
         * fhirpath | element | extension
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * Where the extension can be used in instances
         */
        expression: string;
        /**
         * Contains extended information for property 'expression'.
         */
        _expression?: Element;
    }
    /**
     * Snapshot view of the structure
     */
    interface StructureDefinitionSnapshot extends BackboneElement {
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
         * Element values that are used to distinguish the slices
         */
        discriminator?: ElementDefinitionSlicingDiscriminator[];
        /**
         * Text description of how slicing works (or not)
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * If elements must be in same order as slices
         */
        ordered?: boolean;
        /**
         * Contains extended information for property 'ordered'.
         */
        _ordered?: Element;
        /**
         * closed | open | openAtEnd
         */
        rules: code;
        /**
         * Contains extended information for property 'rules'.
         */
        _rules?: Element;
    }
    /**
     * Element values that are used to distinguish the slices
     */
    interface ElementDefinitionSlicingDiscriminator extends Element {
        /**
         * value | exists | pattern | type | profile
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * Path to element value
         */
        path: string;
        /**
         * Contains extended information for property 'path'.
         */
        _path?: Element;
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
         * Contains extended information for property 'path'.
         */
        _path?: Element;
        /**
         * Min cardinality of the base element
         */
        min: unsignedInt;
        /**
         * Contains extended information for property 'min'.
         */
        _min?: Element;
        /**
         * Max cardinality of the base element
         */
        max: string;
        /**
         * Contains extended information for property 'max'.
         */
        _max?: Element;
    }
    /**
     * Data type and Profile for this element
     */
    interface ElementDefinitionType extends Element {
        /**
         * Data type or Resource (reference to definition)
         */
        code: uri;
        /**
         * Contains extended information for property 'code'.
         */
        _code?: Element;
        /**
         * Profiles (StructureDefinition or IG) - one must apply
         */
        profile?: canonical[];
        /**
         * Contains extended information for property 'profile'.
         */
        _profile?: Element[];
        /**
         * Profile (StructureDefinition or IG) on the Reference/canonical target - one must apply
         */
        targetProfile?: canonical[];
        /**
         * Contains extended information for property 'targetProfile'.
         */
        _targetProfile?: Element[];
        /**
         * contained | referenced | bundled - how aggregated
         */
        aggregation?: code[];
        /**
         * Contains extended information for property 'aggregation'.
         */
        _aggregation?: Element[];
        /**
         * either | independent | specific
         */
        versioning?: code;
        /**
         * Contains extended information for property 'versioning'.
         */
        _versioning?: Element;
    }
    /**
     * Example value (as defined for type)
     */
    interface ElementDefinitionExample extends Element {
        /**
         * Describes the purpose of this example
         */
        label: string;
        /**
         * Contains extended information for property 'label'.
         */
        _label?: Element;
        /**
         * Value of Example (one of allowed types)
         */
        valueBase64Binary?: base64Binary;
        /**
         * Contains extended information for property 'valueBase64Binary'.
         */
        _valueBase64Binary?: Element;
        /**
         * Value of Example (one of allowed types)
         */
        valueBoolean?: boolean;
        /**
         * Contains extended information for property 'valueBoolean'.
         */
        _valueBoolean?: Element;
        /**
         * Value of Example (one of allowed types)
         */
        valueCanonical?: canonical;
        /**
         * Contains extended information for property 'valueCanonical'.
         */
        _valueCanonical?: Element;
        /**
         * Value of Example (one of allowed types)
         */
        valueCode?: code;
        /**
         * Contains extended information for property 'valueCode'.
         */
        _valueCode?: Element;
        /**
         * Value of Example (one of allowed types)
         */
        valueDate?: date;
        /**
         * Contains extended information for property 'valueDate'.
         */
        _valueDate?: Element;
        /**
         * Value of Example (one of allowed types)
         */
        valueDateTime?: dateTime;
        /**
         * Contains extended information for property 'valueDateTime'.
         */
        _valueDateTime?: Element;
        /**
         * Value of Example (one of allowed types)
         */
        valueDecimal?: decimal;
        /**
         * Contains extended information for property 'valueDecimal'.
         */
        _valueDecimal?: Element;
        /**
         * Value of Example (one of allowed types)
         */
        valueId?: id;
        /**
         * Contains extended information for property 'valueId'.
         */
        _valueId?: Element;
        /**
         * Value of Example (one of allowed types)
         */
        valueInstant?: instant;
        /**
         * Contains extended information for property 'valueInstant'.
         */
        _valueInstant?: Element;
        /**
         * Value of Example (one of allowed types)
         */
        valueInteger?: integer;
        /**
         * Contains extended information for property 'valueInteger'.
         */
        _valueInteger?: Element;
        /**
         * Value of Example (one of allowed types)
         */
        valueMarkdown?: markdown;
        /**
         * Contains extended information for property 'valueMarkdown'.
         */
        _valueMarkdown?: Element;
        /**
         * Value of Example (one of allowed types)
         */
        valueOid?: oid;
        /**
         * Contains extended information for property 'valueOid'.
         */
        _valueOid?: Element;
        /**
         * Value of Example (one of allowed types)
         */
        valuePositiveInt?: positiveInt;
        /**
         * Contains extended information for property 'valuePositiveInt'.
         */
        _valuePositiveInt?: Element;
        /**
         * Value of Example (one of allowed types)
         */
        valueString?: string;
        /**
         * Contains extended information for property 'valueString'.
         */
        _valueString?: Element;
        /**
         * Value of Example (one of allowed types)
         */
        valueTime?: time;
        /**
         * Contains extended information for property 'valueTime'.
         */
        _valueTime?: Element;
        /**
         * Value of Example (one of allowed types)
         */
        valueUnsignedInt?: unsignedInt;
        /**
         * Contains extended information for property 'valueUnsignedInt'.
         */
        _valueUnsignedInt?: Element;
        /**
         * Value of Example (one of allowed types)
         */
        valueUri?: uri;
        /**
         * Contains extended information for property 'valueUri'.
         */
        _valueUri?: Element;
        /**
         * Value of Example (one of allowed types)
         */
        valueUrl?: url;
        /**
         * Contains extended information for property 'valueUrl'.
         */
        _valueUrl?: Element;
        /**
         * Value of Example (one of allowed types)
         */
        valueUuid?: uuid;
        /**
         * Contains extended information for property 'valueUuid'.
         */
        _valueUuid?: Element;
        /**
         * Value of Example (one of allowed types)
         */
        valueAddress?: Address;
        /**
         * Value of Example (one of allowed types)
         */
        valueAge?: Age;
        /**
         * Value of Example (one of allowed types)
         */
        valueAnnotation?: Annotation;
        /**
         * Value of Example (one of allowed types)
         */
        valueAttachment?: Attachment;
        /**
         * Value of Example (one of allowed types)
         */
        valueCodeableConcept?: CodeableConcept;
        /**
         * Value of Example (one of allowed types)
         */
        valueCoding?: Coding;
        /**
         * Value of Example (one of allowed types)
         */
        valueContactPoint?: ContactPoint;
        /**
         * Value of Example (one of allowed types)
         */
        valueCount?: Count;
        /**
         * Value of Example (one of allowed types)
         */
        valueDistance?: Distance;
        /**
         * Value of Example (one of allowed types)
         */
        valueDuration?: Duration;
        /**
         * Value of Example (one of allowed types)
         */
        valueHumanName?: HumanName;
        /**
         * Value of Example (one of allowed types)
         */
        valueIdentifier?: Identifier;
        /**
         * Value of Example (one of allowed types)
         */
        valueMoney?: Money;
        /**
         * Value of Example (one of allowed types)
         */
        valuePeriod?: Period;
        /**
         * Value of Example (one of allowed types)
         */
        valueQuantity?: Quantity;
        /**
         * Value of Example (one of allowed types)
         */
        valueRange?: Range;
        /**
         * Value of Example (one of allowed types)
         */
        valueRatio?: Ratio;
        /**
         * Value of Example (one of allowed types)
         */
        valueReference?: Reference;
        /**
         * Value of Example (one of allowed types)
         */
        valueSampledData?: SampledData;
        /**
         * Value of Example (one of allowed types)
         */
        valueSignature?: Signature;
        /**
         * Value of Example (one of allowed types)
         */
        valueTiming?: Timing;
        /**
         * Value of Example (one of allowed types)
         */
        valueContactDetail?: ContactDetail;
        /**
         * Value of Example (one of allowed types)
         */
        valueContributor?: Contributor;
        /**
         * Value of Example (one of allowed types)
         */
        valueDataRequirement?: DataRequirement;
        /**
         * Value of Example (one of allowed types)
         */
        valueExpression?: Expression;
        /**
         * Value of Example (one of allowed types)
         */
        valueParameterDefinition?: ParameterDefinition;
        /**
         * Value of Example (one of allowed types)
         */
        valueRelatedArtifact?: RelatedArtifact;
        /**
         * Value of Example (one of allowed types)
         */
        valueTriggerDefinition?: TriggerDefinition;
        /**
         * Value of Example (one of allowed types)
         */
        valueUsageContext?: UsageContext;
        /**
         * Value of Example (one of allowed types)
         */
        valueDosage?: Dosage;
        /**
         * Value of Example (one of allowed types)
         */
        valueMeta?: Meta;
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
         * Contains extended information for property 'key'.
         */
        _key?: Element;
        /**
         * Why this constraint is necessary or appropriate
         */
        requirements?: string;
        /**
         * Contains extended information for property 'requirements'.
         */
        _requirements?: Element;
        /**
         * error | warning
         */
        severity: code;
        /**
         * Contains extended information for property 'severity'.
         */
        _severity?: Element;
        /**
         * Human description of constraint
         */
        human: string;
        /**
         * Contains extended information for property 'human'.
         */
        _human?: Element;
        /**
         * FHIRPath expression of constraint
         */
        expression?: string;
        /**
         * Contains extended information for property 'expression'.
         */
        _expression?: Element;
        /**
         * XPath expression of constraint
         */
        xpath?: string;
        /**
         * Contains extended information for property 'xpath'.
         */
        _xpath?: Element;
        /**
         * Reference to original source of constraint
         */
        source?: canonical;
        /**
         * Contains extended information for property 'source'.
         */
        _source?: Element;
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
         * Contains extended information for property 'strength'.
         */
        _strength?: Element;
        /**
         * Human explanation of the value set
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Source of value set
         */
        valueSet?: canonical;
        /**
         * Contains extended information for property 'valueSet'.
         */
        _valueSet?: Element;
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
         * Contains extended information for property 'identity'.
         */
        _identity?: Element;
        /**
         * Computable language of mapping
         */
        language?: code;
        /**
         * Contains extended information for property 'language'.
         */
        _language?: Element;
        /**
         * Details of the mapping
         */
        map: string;
        /**
         * Contains extended information for property 'map'.
         */
        _map?: Element;
        /**
         * Comments about the mapping or its use
         */
        comment?: string;
        /**
         * Contains extended information for property 'comment'.
         */
        _comment?: Element;
    }
    /**
     * Definition of an element in a resource or extension
     */
    interface ElementDefinition extends BackboneElement {
        /**
         * Path of the element in the hierarchy of elements
         */
        path: string;
        /**
         * Contains extended information for property 'path'.
         */
        _path?: Element;
        /**
         * xmlAttr | xmlText | typeAttr | cdaText | xhtml
         */
        representation?: code[];
        /**
         * Contains extended information for property 'representation'.
         */
        _representation?: Element[];
        /**
         * Name for this particular element (in a set of slices)
         */
        sliceName?: string;
        /**
         * Contains extended information for property 'sliceName'.
         */
        _sliceName?: Element;
        /**
         * If this slice definition constrains an inherited slice definition (or not)
         */
        sliceIsConstraining?: boolean;
        /**
         * Contains extended information for property 'sliceIsConstraining'.
         */
        _sliceIsConstraining?: Element;
        /**
         * Name for element to display with or prompt for element
         */
        label?: string;
        /**
         * Contains extended information for property 'label'.
         */
        _label?: Element;
        /**
         * Corresponding codes in terminologies
         */
        code?: Coding[];
        /**
         * This element is sliced - slices follow
         */
        slicing?: ElementDefinitionSlicing;
        /**
         * Concise definition for space-constrained presentation
         */
        short?: string;
        /**
         * Contains extended information for property 'short'.
         */
        _short?: Element;
        /**
         * Full formal definition as narrative text
         */
        definition?: markdown;
        /**
         * Contains extended information for property 'definition'.
         */
        _definition?: Element;
        /**
         * Comments about the use of this element
         */
        comment?: markdown;
        /**
         * Contains extended information for property 'comment'.
         */
        _comment?: Element;
        /**
         * Why this resource has been created
         */
        requirements?: markdown;
        /**
         * Contains extended information for property 'requirements'.
         */
        _requirements?: Element;
        /**
         * Other names
         */
        alias?: string[];
        /**
         * Contains extended information for property 'alias'.
         */
        _alias?: Element[];
        /**
         * Minimum Cardinality
         */
        min?: unsignedInt;
        /**
         * Contains extended information for property 'min'.
         */
        _min?: Element;
        /**
         * Maximum Cardinality (a number or *)
         */
        max?: string;
        /**
         * Contains extended information for property 'max'.
         */
        _max?: Element;
        /**
         * Base definition information for tools
         */
        base?: ElementDefinitionBase;
        /**
         * Reference to definition of content for the element
         */
        contentReference?: uri;
        /**
         * Contains extended information for property 'contentReference'.
         */
        _contentReference?: Element;
        /**
         * Data type and Profile for this element
         */
        type?: ElementDefinitionType[];
        /**
         * Specified value if missing from instance
         */
        defaultValueBase64Binary?: base64Binary;
        /**
         * Contains extended information for property 'defaultValueBase64Binary'.
         */
        _defaultValueBase64Binary?: Element;
        /**
         * Specified value if missing from instance
         */
        defaultValueBoolean?: boolean;
        /**
         * Contains extended information for property 'defaultValueBoolean'.
         */
        _defaultValueBoolean?: Element;
        /**
         * Specified value if missing from instance
         */
        defaultValueCanonical?: canonical;
        /**
         * Contains extended information for property 'defaultValueCanonical'.
         */
        _defaultValueCanonical?: Element;
        /**
         * Specified value if missing from instance
         */
        defaultValueCode?: code;
        /**
         * Contains extended information for property 'defaultValueCode'.
         */
        _defaultValueCode?: Element;
        /**
         * Specified value if missing from instance
         */
        defaultValueDate?: date;
        /**
         * Contains extended information for property 'defaultValueDate'.
         */
        _defaultValueDate?: Element;
        /**
         * Specified value if missing from instance
         */
        defaultValueDateTime?: dateTime;
        /**
         * Contains extended information for property 'defaultValueDateTime'.
         */
        _defaultValueDateTime?: Element;
        /**
         * Specified value if missing from instance
         */
        defaultValueDecimal?: decimal;
        /**
         * Contains extended information for property 'defaultValueDecimal'.
         */
        _defaultValueDecimal?: Element;
        /**
         * Specified value if missing from instance
         */
        defaultValueId?: id;
        /**
         * Contains extended information for property 'defaultValueId'.
         */
        _defaultValueId?: Element;
        /**
         * Specified value if missing from instance
         */
        defaultValueInstant?: instant;
        /**
         * Contains extended information for property 'defaultValueInstant'.
         */
        _defaultValueInstant?: Element;
        /**
         * Specified value if missing from instance
         */
        defaultValueInteger?: integer;
        /**
         * Contains extended information for property 'defaultValueInteger'.
         */
        _defaultValueInteger?: Element;
        /**
         * Specified value if missing from instance
         */
        defaultValueMarkdown?: markdown;
        /**
         * Contains extended information for property 'defaultValueMarkdown'.
         */
        _defaultValueMarkdown?: Element;
        /**
         * Specified value if missing from instance
         */
        defaultValueOid?: oid;
        /**
         * Contains extended information for property 'defaultValueOid'.
         */
        _defaultValueOid?: Element;
        /**
         * Specified value if missing from instance
         */
        defaultValuePositiveInt?: positiveInt;
        /**
         * Contains extended information for property 'defaultValuePositiveInt'.
         */
        _defaultValuePositiveInt?: Element;
        /**
         * Specified value if missing from instance
         */
        defaultValueString?: string;
        /**
         * Contains extended information for property 'defaultValueString'.
         */
        _defaultValueString?: Element;
        /**
         * Specified value if missing from instance
         */
        defaultValueTime?: time;
        /**
         * Contains extended information for property 'defaultValueTime'.
         */
        _defaultValueTime?: Element;
        /**
         * Specified value if missing from instance
         */
        defaultValueUnsignedInt?: unsignedInt;
        /**
         * Contains extended information for property 'defaultValueUnsignedInt'.
         */
        _defaultValueUnsignedInt?: Element;
        /**
         * Specified value if missing from instance
         */
        defaultValueUri?: uri;
        /**
         * Contains extended information for property 'defaultValueUri'.
         */
        _defaultValueUri?: Element;
        /**
         * Specified value if missing from instance
         */
        defaultValueUrl?: url;
        /**
         * Contains extended information for property 'defaultValueUrl'.
         */
        _defaultValueUrl?: Element;
        /**
         * Specified value if missing from instance
         */
        defaultValueUuid?: uuid;
        /**
         * Contains extended information for property 'defaultValueUuid'.
         */
        _defaultValueUuid?: Element;
        /**
         * Specified value if missing from instance
         */
        defaultValueAddress?: Address;
        /**
         * Specified value if missing from instance
         */
        defaultValueAge?: Age;
        /**
         * Specified value if missing from instance
         */
        defaultValueAnnotation?: Annotation;
        /**
         * Specified value if missing from instance
         */
        defaultValueAttachment?: Attachment;
        /**
         * Specified value if missing from instance
         */
        defaultValueCodeableConcept?: CodeableConcept;
        /**
         * Specified value if missing from instance
         */
        defaultValueCoding?: Coding;
        /**
         * Specified value if missing from instance
         */
        defaultValueContactPoint?: ContactPoint;
        /**
         * Specified value if missing from instance
         */
        defaultValueCount?: Count;
        /**
         * Specified value if missing from instance
         */
        defaultValueDistance?: Distance;
        /**
         * Specified value if missing from instance
         */
        defaultValueDuration?: Duration;
        /**
         * Specified value if missing from instance
         */
        defaultValueHumanName?: HumanName;
        /**
         * Specified value if missing from instance
         */
        defaultValueIdentifier?: Identifier;
        /**
         * Specified value if missing from instance
         */
        defaultValueMoney?: Money;
        /**
         * Specified value if missing from instance
         */
        defaultValuePeriod?: Period;
        /**
         * Specified value if missing from instance
         */
        defaultValueQuantity?: Quantity;
        /**
         * Specified value if missing from instance
         */
        defaultValueRange?: Range;
        /**
         * Specified value if missing from instance
         */
        defaultValueRatio?: Ratio;
        /**
         * Specified value if missing from instance
         */
        defaultValueReference?: Reference;
        /**
         * Specified value if missing from instance
         */
        defaultValueSampledData?: SampledData;
        /**
         * Specified value if missing from instance
         */
        defaultValueSignature?: Signature;
        /**
         * Specified value if missing from instance
         */
        defaultValueTiming?: Timing;
        /**
         * Specified value if missing from instance
         */
        defaultValueContactDetail?: ContactDetail;
        /**
         * Specified value if missing from instance
         */
        defaultValueContributor?: Contributor;
        /**
         * Specified value if missing from instance
         */
        defaultValueDataRequirement?: DataRequirement;
        /**
         * Specified value if missing from instance
         */
        defaultValueExpression?: Expression;
        /**
         * Specified value if missing from instance
         */
        defaultValueParameterDefinition?: ParameterDefinition;
        /**
         * Specified value if missing from instance
         */
        defaultValueRelatedArtifact?: RelatedArtifact;
        /**
         * Specified value if missing from instance
         */
        defaultValueTriggerDefinition?: TriggerDefinition;
        /**
         * Specified value if missing from instance
         */
        defaultValueUsageContext?: UsageContext;
        /**
         * Specified value if missing from instance
         */
        defaultValueDosage?: Dosage;
        /**
         * Specified value if missing from instance
         */
        defaultValueMeta?: Meta;
        /**
         * Implicit meaning when this element is missing
         */
        meaningWhenMissing?: markdown;
        /**
         * Contains extended information for property 'meaningWhenMissing'.
         */
        _meaningWhenMissing?: Element;
        /**
         * What the order of the elements means
         */
        orderMeaning?: string;
        /**
         * Contains extended information for property 'orderMeaning'.
         */
        _orderMeaning?: Element;
        /**
         * Value must be exactly this
         */
        fixedBase64Binary?: base64Binary;
        /**
         * Contains extended information for property 'fixedBase64Binary'.
         */
        _fixedBase64Binary?: Element;
        /**
         * Value must be exactly this
         */
        fixedBoolean?: boolean;
        /**
         * Contains extended information for property 'fixedBoolean'.
         */
        _fixedBoolean?: Element;
        /**
         * Value must be exactly this
         */
        fixedCanonical?: canonical;
        /**
         * Contains extended information for property 'fixedCanonical'.
         */
        _fixedCanonical?: Element;
        /**
         * Value must be exactly this
         */
        fixedCode?: code;
        /**
         * Contains extended information for property 'fixedCode'.
         */
        _fixedCode?: Element;
        /**
         * Value must be exactly this
         */
        fixedDate?: date;
        /**
         * Contains extended information for property 'fixedDate'.
         */
        _fixedDate?: Element;
        /**
         * Value must be exactly this
         */
        fixedDateTime?: dateTime;
        /**
         * Contains extended information for property 'fixedDateTime'.
         */
        _fixedDateTime?: Element;
        /**
         * Value must be exactly this
         */
        fixedDecimal?: decimal;
        /**
         * Contains extended information for property 'fixedDecimal'.
         */
        _fixedDecimal?: Element;
        /**
         * Value must be exactly this
         */
        fixedId?: id;
        /**
         * Contains extended information for property 'fixedId'.
         */
        _fixedId?: Element;
        /**
         * Value must be exactly this
         */
        fixedInstant?: instant;
        /**
         * Contains extended information for property 'fixedInstant'.
         */
        _fixedInstant?: Element;
        /**
         * Value must be exactly this
         */
        fixedInteger?: integer;
        /**
         * Contains extended information for property 'fixedInteger'.
         */
        _fixedInteger?: Element;
        /**
         * Value must be exactly this
         */
        fixedMarkdown?: markdown;
        /**
         * Contains extended information for property 'fixedMarkdown'.
         */
        _fixedMarkdown?: Element;
        /**
         * Value must be exactly this
         */
        fixedOid?: oid;
        /**
         * Contains extended information for property 'fixedOid'.
         */
        _fixedOid?: Element;
        /**
         * Value must be exactly this
         */
        fixedPositiveInt?: positiveInt;
        /**
         * Contains extended information for property 'fixedPositiveInt'.
         */
        _fixedPositiveInt?: Element;
        /**
         * Value must be exactly this
         */
        fixedString?: string;
        /**
         * Contains extended information for property 'fixedString'.
         */
        _fixedString?: Element;
        /**
         * Value must be exactly this
         */
        fixedTime?: time;
        /**
         * Contains extended information for property 'fixedTime'.
         */
        _fixedTime?: Element;
        /**
         * Value must be exactly this
         */
        fixedUnsignedInt?: unsignedInt;
        /**
         * Contains extended information for property 'fixedUnsignedInt'.
         */
        _fixedUnsignedInt?: Element;
        /**
         * Value must be exactly this
         */
        fixedUri?: uri;
        /**
         * Contains extended information for property 'fixedUri'.
         */
        _fixedUri?: Element;
        /**
         * Value must be exactly this
         */
        fixedUrl?: url;
        /**
         * Contains extended information for property 'fixedUrl'.
         */
        _fixedUrl?: Element;
        /**
         * Value must be exactly this
         */
        fixedUuid?: uuid;
        /**
         * Contains extended information for property 'fixedUuid'.
         */
        _fixedUuid?: Element;
        /**
         * Value must be exactly this
         */
        fixedAddress?: Address;
        /**
         * Value must be exactly this
         */
        fixedAge?: Age;
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
        fixedCodeableConcept?: CodeableConcept;
        /**
         * Value must be exactly this
         */
        fixedCoding?: Coding;
        /**
         * Value must be exactly this
         */
        fixedContactPoint?: ContactPoint;
        /**
         * Value must be exactly this
         */
        fixedCount?: Count;
        /**
         * Value must be exactly this
         */
        fixedDistance?: Distance;
        /**
         * Value must be exactly this
         */
        fixedDuration?: Duration;
        /**
         * Value must be exactly this
         */
        fixedHumanName?: HumanName;
        /**
         * Value must be exactly this
         */
        fixedIdentifier?: Identifier;
        /**
         * Value must be exactly this
         */
        fixedMoney?: Money;
        /**
         * Value must be exactly this
         */
        fixedPeriod?: Period;
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
        fixedRatio?: Ratio;
        /**
         * Value must be exactly this
         */
        fixedReference?: Reference;
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
        fixedTiming?: Timing;
        /**
         * Value must be exactly this
         */
        fixedContactDetail?: ContactDetail;
        /**
         * Value must be exactly this
         */
        fixedContributor?: Contributor;
        /**
         * Value must be exactly this
         */
        fixedDataRequirement?: DataRequirement;
        /**
         * Value must be exactly this
         */
        fixedExpression?: Expression;
        /**
         * Value must be exactly this
         */
        fixedParameterDefinition?: ParameterDefinition;
        /**
         * Value must be exactly this
         */
        fixedRelatedArtifact?: RelatedArtifact;
        /**
         * Value must be exactly this
         */
        fixedTriggerDefinition?: TriggerDefinition;
        /**
         * Value must be exactly this
         */
        fixedUsageContext?: UsageContext;
        /**
         * Value must be exactly this
         */
        fixedDosage?: Dosage;
        /**
         * Value must be exactly this
         */
        fixedMeta?: Meta;
        /**
         * Value must have at least these property values
         */
        patternBase64Binary?: base64Binary;
        /**
         * Contains extended information for property 'patternBase64Binary'.
         */
        _patternBase64Binary?: Element;
        /**
         * Value must have at least these property values
         */
        patternBoolean?: boolean;
        /**
         * Contains extended information for property 'patternBoolean'.
         */
        _patternBoolean?: Element;
        /**
         * Value must have at least these property values
         */
        patternCanonical?: canonical;
        /**
         * Contains extended information for property 'patternCanonical'.
         */
        _patternCanonical?: Element;
        /**
         * Value must have at least these property values
         */
        patternCode?: code;
        /**
         * Contains extended information for property 'patternCode'.
         */
        _patternCode?: Element;
        /**
         * Value must have at least these property values
         */
        patternDate?: date;
        /**
         * Contains extended information for property 'patternDate'.
         */
        _patternDate?: Element;
        /**
         * Value must have at least these property values
         */
        patternDateTime?: dateTime;
        /**
         * Contains extended information for property 'patternDateTime'.
         */
        _patternDateTime?: Element;
        /**
         * Value must have at least these property values
         */
        patternDecimal?: decimal;
        /**
         * Contains extended information for property 'patternDecimal'.
         */
        _patternDecimal?: Element;
        /**
         * Value must have at least these property values
         */
        patternId?: id;
        /**
         * Contains extended information for property 'patternId'.
         */
        _patternId?: Element;
        /**
         * Value must have at least these property values
         */
        patternInstant?: instant;
        /**
         * Contains extended information for property 'patternInstant'.
         */
        _patternInstant?: Element;
        /**
         * Value must have at least these property values
         */
        patternInteger?: integer;
        /**
         * Contains extended information for property 'patternInteger'.
         */
        _patternInteger?: Element;
        /**
         * Value must have at least these property values
         */
        patternMarkdown?: markdown;
        /**
         * Contains extended information for property 'patternMarkdown'.
         */
        _patternMarkdown?: Element;
        /**
         * Value must have at least these property values
         */
        patternOid?: oid;
        /**
         * Contains extended information for property 'patternOid'.
         */
        _patternOid?: Element;
        /**
         * Value must have at least these property values
         */
        patternPositiveInt?: positiveInt;
        /**
         * Contains extended information for property 'patternPositiveInt'.
         */
        _patternPositiveInt?: Element;
        /**
         * Value must have at least these property values
         */
        patternString?: string;
        /**
         * Contains extended information for property 'patternString'.
         */
        _patternString?: Element;
        /**
         * Value must have at least these property values
         */
        patternTime?: time;
        /**
         * Contains extended information for property 'patternTime'.
         */
        _patternTime?: Element;
        /**
         * Value must have at least these property values
         */
        patternUnsignedInt?: unsignedInt;
        /**
         * Contains extended information for property 'patternUnsignedInt'.
         */
        _patternUnsignedInt?: Element;
        /**
         * Value must have at least these property values
         */
        patternUri?: uri;
        /**
         * Contains extended information for property 'patternUri'.
         */
        _patternUri?: Element;
        /**
         * Value must have at least these property values
         */
        patternUrl?: url;
        /**
         * Contains extended information for property 'patternUrl'.
         */
        _patternUrl?: Element;
        /**
         * Value must have at least these property values
         */
        patternUuid?: uuid;
        /**
         * Contains extended information for property 'patternUuid'.
         */
        _patternUuid?: Element;
        /**
         * Value must have at least these property values
         */
        patternAddress?: Address;
        /**
         * Value must have at least these property values
         */
        patternAge?: Age;
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
        patternCodeableConcept?: CodeableConcept;
        /**
         * Value must have at least these property values
         */
        patternCoding?: Coding;
        /**
         * Value must have at least these property values
         */
        patternContactPoint?: ContactPoint;
        /**
         * Value must have at least these property values
         */
        patternCount?: Count;
        /**
         * Value must have at least these property values
         */
        patternDistance?: Distance;
        /**
         * Value must have at least these property values
         */
        patternDuration?: Duration;
        /**
         * Value must have at least these property values
         */
        patternHumanName?: HumanName;
        /**
         * Value must have at least these property values
         */
        patternIdentifier?: Identifier;
        /**
         * Value must have at least these property values
         */
        patternMoney?: Money;
        /**
         * Value must have at least these property values
         */
        patternPeriod?: Period;
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
        patternRatio?: Ratio;
        /**
         * Value must have at least these property values
         */
        patternReference?: Reference;
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
        patternTiming?: Timing;
        /**
         * Value must have at least these property values
         */
        patternContactDetail?: ContactDetail;
        /**
         * Value must have at least these property values
         */
        patternContributor?: Contributor;
        /**
         * Value must have at least these property values
         */
        patternDataRequirement?: DataRequirement;
        /**
         * Value must have at least these property values
         */
        patternExpression?: Expression;
        /**
         * Value must have at least these property values
         */
        patternParameterDefinition?: ParameterDefinition;
        /**
         * Value must have at least these property values
         */
        patternRelatedArtifact?: RelatedArtifact;
        /**
         * Value must have at least these property values
         */
        patternTriggerDefinition?: TriggerDefinition;
        /**
         * Value must have at least these property values
         */
        patternUsageContext?: UsageContext;
        /**
         * Value must have at least these property values
         */
        patternDosage?: Dosage;
        /**
         * Value must have at least these property values
         */
        patternMeta?: Meta;
        /**
         * Example value (as defined for type)
         */
        example?: ElementDefinitionExample[];
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueDate?: date;
        /**
         * Contains extended information for property 'minValueDate'.
         */
        _minValueDate?: Element;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueDateTime?: dateTime;
        /**
         * Contains extended information for property 'minValueDateTime'.
         */
        _minValueDateTime?: Element;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueInstant?: instant;
        /**
         * Contains extended information for property 'minValueInstant'.
         */
        _minValueInstant?: Element;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueTime?: time;
        /**
         * Contains extended information for property 'minValueTime'.
         */
        _minValueTime?: Element;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueDecimal?: decimal;
        /**
         * Contains extended information for property 'minValueDecimal'.
         */
        _minValueDecimal?: Element;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueInteger?: integer;
        /**
         * Contains extended information for property 'minValueInteger'.
         */
        _minValueInteger?: Element;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValuePositiveInt?: positiveInt;
        /**
         * Contains extended information for property 'minValuePositiveInt'.
         */
        _minValuePositiveInt?: Element;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueUnsignedInt?: unsignedInt;
        /**
         * Contains extended information for property 'minValueUnsignedInt'.
         */
        _minValueUnsignedInt?: Element;
        /**
         * Minimum Allowed Value (for some types)
         */
        minValueQuantity?: Quantity;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueDate?: date;
        /**
         * Contains extended information for property 'maxValueDate'.
         */
        _maxValueDate?: Element;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueDateTime?: dateTime;
        /**
         * Contains extended information for property 'maxValueDateTime'.
         */
        _maxValueDateTime?: Element;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueInstant?: instant;
        /**
         * Contains extended information for property 'maxValueInstant'.
         */
        _maxValueInstant?: Element;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueTime?: time;
        /**
         * Contains extended information for property 'maxValueTime'.
         */
        _maxValueTime?: Element;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueDecimal?: decimal;
        /**
         * Contains extended information for property 'maxValueDecimal'.
         */
        _maxValueDecimal?: Element;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueInteger?: integer;
        /**
         * Contains extended information for property 'maxValueInteger'.
         */
        _maxValueInteger?: Element;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValuePositiveInt?: positiveInt;
        /**
         * Contains extended information for property 'maxValuePositiveInt'.
         */
        _maxValuePositiveInt?: Element;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueUnsignedInt?: unsignedInt;
        /**
         * Contains extended information for property 'maxValueUnsignedInt'.
         */
        _maxValueUnsignedInt?: Element;
        /**
         * Maximum Allowed Value (for some types)
         */
        maxValueQuantity?: Quantity;
        /**
         * Max length for strings
         */
        maxLength?: integer;
        /**
         * Contains extended information for property 'maxLength'.
         */
        _maxLength?: Element;
        /**
         * Reference to invariant about presence
         */
        condition?: id[];
        /**
         * Contains extended information for property 'condition'.
         */
        _condition?: Element[];
        /**
         * Condition that must evaluate to true
         */
        constraint?: ElementDefinitionConstraint[];
        /**
         * If the element must be supported
         */
        mustSupport?: boolean;
        /**
         * Contains extended information for property 'mustSupport'.
         */
        _mustSupport?: Element;
        /**
         * If this modifies the meaning of other elements
         */
        isModifier?: boolean;
        /**
         * Contains extended information for property 'isModifier'.
         */
        _isModifier?: Element;
        /**
         * Reason that this element is marked as a modifier
         */
        isModifierReason?: string;
        /**
         * Contains extended information for property 'isModifierReason'.
         */
        _isModifierReason?: Element;
        /**
         * Include when _summary = true?
         */
        isSummary?: boolean;
        /**
         * Contains extended information for property 'isSummary'.
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
    interface StructureDefinitionDifferential extends BackboneElement {
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
         * Canonical identifier for this structure definition, represented as a URI (globally unique)
         */
        url: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Additional identifier for the structure definition
         */
        identifier?: Identifier[];
        /**
         * Business version of the structure definition
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
        /**
         * Name for this structure definition (computer friendly)
         */
        name: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Name for this structure definition (human friendly)
         */
        title?: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
        /**
         * draft | active | retired | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * For testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Contains extended information for property 'experimental'.
         */
        _experimental?: Element;
        /**
         * Date last changed
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Name of the publisher (organization or individual)
         */
        publisher?: string;
        /**
         * Contains extended information for property 'publisher'.
         */
        _publisher?: Element;
        /**
         * Contact details for the publisher
         */
        contact?: ContactDetail[];
        /**
         * Natural language description of the structure definition
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * The context that the content is intended to support
         */
        useContext?: UsageContext[];
        /**
         * Intended jurisdiction for structure definition (if applicable)
         */
        jurisdiction?: CodeableConcept[];
        /**
         * Why this structure definition is defined
         */
        purpose?: markdown;
        /**
         * Contains extended information for property 'purpose'.
         */
        _purpose?: Element;
        /**
         * Use and/or publishing restrictions
         */
        copyright?: markdown;
        /**
         * Contains extended information for property 'copyright'.
         */
        _copyright?: Element;
        /**
         * Assist with indexing and finding
         */
        keyword?: Coding[];
        /**
         * FHIR Version this StructureDefinition targets
         */
        fhirVersion?: code;
        /**
         * Contains extended information for property 'fhirVersion'.
         */
        _fhirVersion?: Element;
        /**
         * External specification that the content is mapped to
         */
        mapping?: StructureDefinitionMapping[];
        /**
         * primitive-type | complex-type | resource | logical
         */
        kind: code;
        /**
         * Contains extended information for property 'kind'.
         */
        _kind?: Element;
        /**
         * Whether the structure is abstract
         */
        abstract: boolean;
        /**
         * Contains extended information for property 'abstract'.
         */
        _abstract?: Element;
        /**
         * If an extension, where it can be used in instances
         */
        context?: StructureDefinitionContext[];
        /**
         * FHIRPath invariants - when the extension can be used
         */
        contextInvariant?: string[];
        /**
         * Contains extended information for property 'contextInvariant'.
         */
        _contextInvariant?: Element[];
        /**
         * Type defined or constrained by this structure
         */
        type: uri;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * Definition that this type is constrained/specialized from
         */
        baseDefinition?: canonical;
        /**
         * Contains extended information for property 'baseDefinition'.
         */
        _baseDefinition?: Element;
        /**
         * specialization | constraint - How relates to base definition
         */
        derivation?: code;
        /**
         * Contains extended information for property 'derivation'.
         */
        _derivation?: Element;
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
     * Structure Definition used by this map
     */
    interface StructureMapStructure extends BackboneElement {
        /**
         * Canonical reference to structure definition
         */
        url: canonical;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * source | queried | target | produced
         */
        mode: code;
        /**
         * Contains extended information for property 'mode'.
         */
        _mode?: Element;
        /**
         * Name for type in this map
         */
        alias?: string;
        /**
         * Contains extended information for property 'alias'.
         */
        _alias?: Element;
        /**
         * Documentation on use of structure
         */
        documentation?: string;
        /**
         * Contains extended information for property 'documentation'.
         */
        _documentation?: Element;
    }
    /**
     * Named sections for reader convenience
     */
    interface StructureMapGroup extends BackboneElement {
        /**
         * Human-readable label
         */
        name: id;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Another group that this group adds rules to
         */
        extends?: id;
        /**
         * Contains extended information for property 'extends'.
         */
        _extends?: Element;
        /**
         * none | types | type-and-types
         */
        typeMode: code;
        /**
         * Contains extended information for property 'typeMode'.
         */
        _typeMode?: Element;
        /**
         * Additional description/explanation for group
         */
        documentation?: string;
        /**
         * Contains extended information for property 'documentation'.
         */
        _documentation?: Element;
        /**
         * Named instance provided when invoking the map
         */
        input: StructureMapGroupInput[];
        /**
         * Transform Rule from source to target
         */
        rule: StructureMapGroupRule[];
    }
    /**
     * Named instance provided when invoking the map
     */
    interface StructureMapGroupInput extends BackboneElement {
        /**
         * Name for this instance of data
         */
        name: id;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Type for this instance of data
         */
        type?: string;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * source | target
         */
        mode: code;
        /**
         * Contains extended information for property 'mode'.
         */
        _mode?: Element;
        /**
         * Documentation for this instance of data
         */
        documentation?: string;
        /**
         * Contains extended information for property 'documentation'.
         */
        _documentation?: Element;
    }
    /**
     * Transform Rule from source to target
     */
    interface StructureMapGroupRule extends BackboneElement {
        /**
         * Name of the rule for internal references
         */
        name: id;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Source inputs to the mapping
         */
        source: StructureMapGroupRuleSource[];
        /**
         * Content to create because of this mapping rule
         */
        target?: StructureMapGroupRuleTarget[];
        /**
         * Rules contained in this rule
         */
        rule?: StructureMapGroupRule[];
        /**
         * Which other rules to apply in the context of this rule
         */
        dependent?: StructureMapGroupRuleDependent[];
        /**
         * Documentation for this instance of data
         */
        documentation?: string;
        /**
         * Contains extended information for property 'documentation'.
         */
        _documentation?: Element;
    }
    /**
     * Source inputs to the mapping
     */
    interface StructureMapGroupRuleSource extends BackboneElement {
        /**
         * Type or variable this rule applies to
         */
        context: id;
        /**
         * Contains extended information for property 'context'.
         */
        _context?: Element;
        /**
         * Specified minimum cardinality
         */
        min?: integer;
        /**
         * Contains extended information for property 'min'.
         */
        _min?: Element;
        /**
         * Specified maximum cardinality (number or *)
         */
        max?: string;
        /**
         * Contains extended information for property 'max'.
         */
        _max?: Element;
        /**
         * Rule only applies if source has this type
         */
        type?: string;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * Default value if no value exists
         */
        defaultValueBase64Binary?: base64Binary;
        /**
         * Contains extended information for property 'defaultValueBase64Binary'.
         */
        _defaultValueBase64Binary?: Element;
        /**
         * Default value if no value exists
         */
        defaultValueBoolean?: boolean;
        /**
         * Contains extended information for property 'defaultValueBoolean'.
         */
        _defaultValueBoolean?: Element;
        /**
         * Default value if no value exists
         */
        defaultValueCanonical?: canonical;
        /**
         * Contains extended information for property 'defaultValueCanonical'.
         */
        _defaultValueCanonical?: Element;
        /**
         * Default value if no value exists
         */
        defaultValueCode?: code;
        /**
         * Contains extended information for property 'defaultValueCode'.
         */
        _defaultValueCode?: Element;
        /**
         * Default value if no value exists
         */
        defaultValueDate?: date;
        /**
         * Contains extended information for property 'defaultValueDate'.
         */
        _defaultValueDate?: Element;
        /**
         * Default value if no value exists
         */
        defaultValueDateTime?: dateTime;
        /**
         * Contains extended information for property 'defaultValueDateTime'.
         */
        _defaultValueDateTime?: Element;
        /**
         * Default value if no value exists
         */
        defaultValueDecimal?: decimal;
        /**
         * Contains extended information for property 'defaultValueDecimal'.
         */
        _defaultValueDecimal?: Element;
        /**
         * Default value if no value exists
         */
        defaultValueId?: id;
        /**
         * Contains extended information for property 'defaultValueId'.
         */
        _defaultValueId?: Element;
        /**
         * Default value if no value exists
         */
        defaultValueInstant?: instant;
        /**
         * Contains extended information for property 'defaultValueInstant'.
         */
        _defaultValueInstant?: Element;
        /**
         * Default value if no value exists
         */
        defaultValueInteger?: integer;
        /**
         * Contains extended information for property 'defaultValueInteger'.
         */
        _defaultValueInteger?: Element;
        /**
         * Default value if no value exists
         */
        defaultValueMarkdown?: markdown;
        /**
         * Contains extended information for property 'defaultValueMarkdown'.
         */
        _defaultValueMarkdown?: Element;
        /**
         * Default value if no value exists
         */
        defaultValueOid?: oid;
        /**
         * Contains extended information for property 'defaultValueOid'.
         */
        _defaultValueOid?: Element;
        /**
         * Default value if no value exists
         */
        defaultValuePositiveInt?: positiveInt;
        /**
         * Contains extended information for property 'defaultValuePositiveInt'.
         */
        _defaultValuePositiveInt?: Element;
        /**
         * Default value if no value exists
         */
        defaultValueString?: string;
        /**
         * Contains extended information for property 'defaultValueString'.
         */
        _defaultValueString?: Element;
        /**
         * Default value if no value exists
         */
        defaultValueTime?: time;
        /**
         * Contains extended information for property 'defaultValueTime'.
         */
        _defaultValueTime?: Element;
        /**
         * Default value if no value exists
         */
        defaultValueUnsignedInt?: unsignedInt;
        /**
         * Contains extended information for property 'defaultValueUnsignedInt'.
         */
        _defaultValueUnsignedInt?: Element;
        /**
         * Default value if no value exists
         */
        defaultValueUri?: uri;
        /**
         * Contains extended information for property 'defaultValueUri'.
         */
        _defaultValueUri?: Element;
        /**
         * Default value if no value exists
         */
        defaultValueUrl?: url;
        /**
         * Contains extended information for property 'defaultValueUrl'.
         */
        _defaultValueUrl?: Element;
        /**
         * Default value if no value exists
         */
        defaultValueUuid?: uuid;
        /**
         * Contains extended information for property 'defaultValueUuid'.
         */
        _defaultValueUuid?: Element;
        /**
         * Default value if no value exists
         */
        defaultValueAddress?: Address;
        /**
         * Default value if no value exists
         */
        defaultValueAge?: Age;
        /**
         * Default value if no value exists
         */
        defaultValueAnnotation?: Annotation;
        /**
         * Default value if no value exists
         */
        defaultValueAttachment?: Attachment;
        /**
         * Default value if no value exists
         */
        defaultValueCodeableConcept?: CodeableConcept;
        /**
         * Default value if no value exists
         */
        defaultValueCoding?: Coding;
        /**
         * Default value if no value exists
         */
        defaultValueContactPoint?: ContactPoint;
        /**
         * Default value if no value exists
         */
        defaultValueCount?: Count;
        /**
         * Default value if no value exists
         */
        defaultValueDistance?: Distance;
        /**
         * Default value if no value exists
         */
        defaultValueDuration?: Duration;
        /**
         * Default value if no value exists
         */
        defaultValueHumanName?: HumanName;
        /**
         * Default value if no value exists
         */
        defaultValueIdentifier?: Identifier;
        /**
         * Default value if no value exists
         */
        defaultValueMoney?: Money;
        /**
         * Default value if no value exists
         */
        defaultValuePeriod?: Period;
        /**
         * Default value if no value exists
         */
        defaultValueQuantity?: Quantity;
        /**
         * Default value if no value exists
         */
        defaultValueRange?: Range;
        /**
         * Default value if no value exists
         */
        defaultValueRatio?: Ratio;
        /**
         * Default value if no value exists
         */
        defaultValueReference?: Reference;
        /**
         * Default value if no value exists
         */
        defaultValueSampledData?: SampledData;
        /**
         * Default value if no value exists
         */
        defaultValueSignature?: Signature;
        /**
         * Default value if no value exists
         */
        defaultValueTiming?: Timing;
        /**
         * Default value if no value exists
         */
        defaultValueContactDetail?: ContactDetail;
        /**
         * Default value if no value exists
         */
        defaultValueContributor?: Contributor;
        /**
         * Default value if no value exists
         */
        defaultValueDataRequirement?: DataRequirement;
        /**
         * Default value if no value exists
         */
        defaultValueExpression?: Expression;
        /**
         * Default value if no value exists
         */
        defaultValueParameterDefinition?: ParameterDefinition;
        /**
         * Default value if no value exists
         */
        defaultValueRelatedArtifact?: RelatedArtifact;
        /**
         * Default value if no value exists
         */
        defaultValueTriggerDefinition?: TriggerDefinition;
        /**
         * Default value if no value exists
         */
        defaultValueUsageContext?: UsageContext;
        /**
         * Default value if no value exists
         */
        defaultValueDosage?: Dosage;
        /**
         * Default value if no value exists
         */
        defaultValueMeta?: Meta;
        /**
         * Optional field for this source
         */
        element?: string;
        /**
         * Contains extended information for property 'element'.
         */
        _element?: Element;
        /**
         * first | not_first | last | not_last | only_one
         */
        listMode?: code;
        /**
         * Contains extended information for property 'listMode'.
         */
        _listMode?: Element;
        /**
         * Named context for field, if a field is specified
         */
        variable?: id;
        /**
         * Contains extended information for property 'variable'.
         */
        _variable?: Element;
        /**
         * FHIRPath expression  - must be true or the rule does not apply
         */
        condition?: string;
        /**
         * Contains extended information for property 'condition'.
         */
        _condition?: Element;
        /**
         * FHIRPath expression  - must be true or the mapping engine throws an error instead of completing
         */
        check?: string;
        /**
         * Contains extended information for property 'check'.
         */
        _check?: Element;
        /**
         * Message to put in log if source exists (FHIRPath)
         */
        logMessage?: string;
        /**
         * Contains extended information for property 'logMessage'.
         */
        _logMessage?: Element;
    }
    /**
     * Content to create because of this mapping rule
     */
    interface StructureMapGroupRuleTarget extends BackboneElement {
        /**
         * Type or variable this rule applies to
         */
        context?: id;
        /**
         * Contains extended information for property 'context'.
         */
        _context?: Element;
        /**
         * type | variable
         */
        contextType?: code;
        /**
         * Contains extended information for property 'contextType'.
         */
        _contextType?: Element;
        /**
         * Field to create in the context
         */
        element?: string;
        /**
         * Contains extended information for property 'element'.
         */
        _element?: Element;
        /**
         * Named context for field, if desired, and a field is specified
         */
        variable?: id;
        /**
         * Contains extended information for property 'variable'.
         */
        _variable?: Element;
        /**
         * first | share | last | collate
         */
        listMode?: code[];
        /**
         * Contains extended information for property 'listMode'.
         */
        _listMode?: Element[];
        /**
         * Internal rule reference for shared list items
         */
        listRuleId?: id;
        /**
         * Contains extended information for property 'listRuleId'.
         */
        _listRuleId?: Element;
        /**
         * create | copy +
         */
        transform?: code;
        /**
         * Contains extended information for property 'transform'.
         */
        _transform?: Element;
        /**
         * Parameters to the transform
         */
        parameter?: StructureMapGroupRuleTargetParameter[];
    }
    /**
     * Parameters to the transform
     */
    interface StructureMapGroupRuleTargetParameter extends BackboneElement {
        /**
         * Parameter value - variable or literal
         */
        valueId?: id;
        /**
         * Contains extended information for property 'valueId'.
         */
        _valueId?: Element;
        /**
         * Parameter value - variable or literal
         */
        valueString?: string;
        /**
         * Contains extended information for property 'valueString'.
         */
        _valueString?: Element;
        /**
         * Parameter value - variable or literal
         */
        valueBoolean?: boolean;
        /**
         * Contains extended information for property 'valueBoolean'.
         */
        _valueBoolean?: Element;
        /**
         * Parameter value - variable or literal
         */
        valueInteger?: integer;
        /**
         * Contains extended information for property 'valueInteger'.
         */
        _valueInteger?: Element;
        /**
         * Parameter value - variable or literal
         */
        valueDecimal?: decimal;
        /**
         * Contains extended information for property 'valueDecimal'.
         */
        _valueDecimal?: Element;
    }
    /**
     * Which other rules to apply in the context of this rule
     */
    interface StructureMapGroupRuleDependent extends BackboneElement {
        /**
         * Name of a rule or group to apply
         */
        name: id;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Variable to pass to the rule or group
         */
        variable: string[];
        /**
         * Contains extended information for property 'variable'.
         */
        _variable?: Element[];
    }
    /**
     * A Map of relationships between 2 structures that can be used to transform data
     */
    interface StructureMap extends DomainResource {
        /**
         * Canonical identifier for this structure map, represented as a URI (globally unique)
         */
        url: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Additional identifier for the structure map
         */
        identifier?: Identifier[];
        /**
         * Business version of the structure map
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
        /**
         * Name for this structure map (computer friendly)
         */
        name: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Name for this structure map (human friendly)
         */
        title?: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
        /**
         * draft | active | retired | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * For testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Contains extended information for property 'experimental'.
         */
        _experimental?: Element;
        /**
         * Date last changed
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Name of the publisher (organization or individual)
         */
        publisher?: string;
        /**
         * Contains extended information for property 'publisher'.
         */
        _publisher?: Element;
        /**
         * Contact details for the publisher
         */
        contact?: ContactDetail[];
        /**
         * Natural language description of the structure map
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * The context that the content is intended to support
         */
        useContext?: UsageContext[];
        /**
         * Intended jurisdiction for structure map (if applicable)
         */
        jurisdiction?: CodeableConcept[];
        /**
         * Why this structure map is defined
         */
        purpose?: markdown;
        /**
         * Contains extended information for property 'purpose'.
         */
        _purpose?: Element;
        /**
         * Use and/or publishing restrictions
         */
        copyright?: markdown;
        /**
         * Contains extended information for property 'copyright'.
         */
        _copyright?: Element;
        /**
         * Structure Definition used by this map
         */
        structure?: StructureMapStructure[];
        /**
         * Other maps used by this map (canonical URLs)
         */
        import?: canonical[];
        /**
         * Contains extended information for property 'import'.
         */
        _import?: Element[];
        /**
         * Named sections for reader convenience
         */
        group: StructureMapGroup[];
    }
    /**
     * The channel on which to report matches to the criteria
     */
    interface SubscriptionChannel extends BackboneElement {
        /**
         * rest-hook | websocket | email | sms | message
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * Where the channel points to
         */
        endpoint?: url;
        /**
         * Contains extended information for property 'endpoint'.
         */
        _endpoint?: Element;
        /**
         * MIME type to send, or omit for no payload
         */
        payload?: code;
        /**
         * Contains extended information for property 'payload'.
         */
        _payload?: Element;
        /**
         * Usage depends on the channel type
         */
        header?: string[];
        /**
         * Contains extended information for property 'header'.
         */
        _header?: Element[];
    }
    /**
     * Server push subscription criteria
     */
    interface Subscription extends DomainResource {
        /**
         * requested | active | error | off
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Contact details for source (e.g. troubleshooting)
         */
        contact?: ContactPoint[];
        /**
         * When to automatically delete the subscription
         */
        end?: instant;
        /**
         * Contains extended information for property 'end'.
         */
        _end?: Element;
        /**
         * Description of why this subscription was created
         */
        reason: string;
        /**
         * Contains extended information for property 'reason'.
         */
        _reason?: Element;
        /**
         * Rule for server push
         */
        criteria: string;
        /**
         * Contains extended information for property 'criteria'.
         */
        _criteria?: Element;
        /**
         * Latest error note
         */
        error?: string;
        /**
         * Contains extended information for property 'error'.
         */
        _error?: Element;
        /**
         * The channel on which to report matches to the criteria
         */
        channel: SubscriptionChannel;
    }
    /**
     * If this describes a specific package/container of the substance
     */
    interface SubstanceInstance extends BackboneElement {
        /**
         * Identifier of the package/container
         */
        identifier?: Identifier;
        /**
         * When no longer valid to use
         */
        expiry?: dateTime;
        /**
         * Contains extended information for property 'expiry'.
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
    interface SubstanceIngredient extends BackboneElement {
        /**
         * Optional amount (concentration)
         */
        quantity?: Ratio;
        /**
         * A component of the substance
         */
        substanceCodeableConcept?: CodeableConcept;
        /**
         * A component of the substance
         */
        substanceReference?: Reference;
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
         * active | inactive | entered-in-error
         */
        status?: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
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
         * Contains extended information for property 'description'.
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
    /**
     * Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times
     */
    interface SubstanceNucleicAcidSubunit extends BackboneElement {
        /**
         * Index of linear sequences of nucleic acids in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts
         */
        subunit?: integer;
        /**
         * Contains extended information for property 'subunit'.
         */
        _subunit?: Element;
        /**
         * Actual nucleotide sequence notation from 5' to 3' end using standard single letter codes. In addition to the base sequence, sugar and type of phosphate or non-phosphate linkage should also be captured
         */
        sequence?: string;
        /**
         * Contains extended information for property 'sequence'.
         */
        _sequence?: Element;
        /**
         * The length of the sequence shall be captured
         */
        length?: integer;
        /**
         * Contains extended information for property 'length'.
         */
        _length?: Element;
        /**
         * (TBC)
         */
        sequenceAttachment?: Attachment;
        /**
         * The nucleotide present at the 5’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the first position in the sequence. A separate representation would be redundant
         */
        fivePrime?: CodeableConcept;
        /**
         * The nucleotide present at the 3’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the last position in the sequence. A separate representation would be redundant
         */
        threePrime?: CodeableConcept;
        /**
         * The linkages between sugar residues will also be captured
         */
        linkage?: SubstanceNucleicAcidSubunitLinkage[];
        /**
         * 5.3.6.8.1 Sugar ID (Mandatory)
         */
        sugar?: SubstanceNucleicAcidSubunitSugar[];
    }
    /**
     * The linkages between sugar residues will also be captured
     */
    interface SubstanceNucleicAcidSubunitLinkage extends BackboneElement {
        /**
         * The entity that links the sugar residues together should also be captured for nearly all naturally occurring nucleic acid the linkage is a phosphate group. For many synthetic oligonucleotides phosphorothioate linkages are often seen. Linkage connectivity is assumed to be 3’-5’. If the linkage is either 3’-3’ or 5’-5’ this should be specified
         */
        connectivity?: string;
        /**
         * Contains extended information for property 'connectivity'.
         */
        _connectivity?: Element;
        /**
         * Each linkage will be registered as a fragment and have an ID
         */
        identifier?: Identifier;
        /**
         * Each linkage will be registered as a fragment and have at least one name. A single name shall be assigned to each linkage
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Residues shall be captured as described in 5.3.6.8.3
         */
        residueSite?: string;
        /**
         * Contains extended information for property 'residueSite'.
         */
        _residueSite?: Element;
    }
    /**
     * 5.3.6.8.1 Sugar ID (Mandatory)
     */
    interface SubstanceNucleicAcidSubunitSugar extends BackboneElement {
        /**
         * The Substance ID of the sugar or sugar-like component that make up the nucleotide
         */
        identifier?: Identifier;
        /**
         * The name of the sugar or sugar-like component that make up the nucleotide
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * The residues that contain a given sugar will be captured. The order of given residues will be captured in the 5‘-3‘direction consistent with the base sequences listed above
         */
        residueSite?: string;
        /**
         * Contains extended information for property 'residueSite'.
         */
        _residueSite?: Element;
    }
    /**
     * Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction
     */
    interface SubstanceNucleicAcid extends DomainResource {
        /**
         * The type of the sequence shall be specified based on a controlled vocabulary
         */
        sequenceType?: CodeableConcept;
        /**
         * The number of linear sequences of nucleotides linked through phosphodiester bonds shall be described. Subunits would be strands of nucleic acids that are tightly associated typically through Watson-Crick base pairing. NOTE: If not specified in the reference source, the assumption is that there is 1 subunit
         */
        numberOfSubunits?: integer;
        /**
         * Contains extended information for property 'numberOfSubunits'.
         */
        _numberOfSubunits?: Element;
        /**
         * The area of hybridisation shall be described if applicable for double stranded RNA or DNA. The number associated with the subunit followed by the number associated to the residue shall be specified in increasing order. The underscore “” shall be used as separator as follows: “Subunitnumber Residue”
         */
        areaOfHybridisation?: string;
        /**
         * Contains extended information for property 'areaOfHybridisation'.
         */
        _areaOfHybridisation?: Element;
        /**
         * (TBC)
         */
        oligoNucleotideType?: CodeableConcept;
        /**
         * Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times
         */
        subunit?: SubstanceNucleicAcidSubunit[];
    }
    /**
     * Todo
     */
    interface SubstancePolymerMonomerSet extends BackboneElement {
        /**
         * Todo
         */
        ratioType?: CodeableConcept;
        /**
         * Todo
         */
        startingMaterial?: SubstancePolymerMonomerSetStartingMaterial[];
    }
    /**
     * Todo
     */
    interface SubstancePolymerMonomerSetStartingMaterial extends BackboneElement {
        /**
         * Todo
         */
        material?: CodeableConcept;
        /**
         * Todo
         */
        type?: CodeableConcept;
        /**
         * Todo
         */
        isDefining?: boolean;
        /**
         * Contains extended information for property 'isDefining'.
         */
        _isDefining?: Element;
        /**
         * Todo
         */
        amount?: SubstanceAmount;
    }
    /**
     * Reference range of possible or expected values
     */
    interface SubstanceAmountReferenceRange extends Element {
        /**
         * Lower limit possible or expected
         */
        lowLimit?: Quantity;
        /**
         * Upper limit possible or expected
         */
        highLimit?: Quantity;
    }
    /**
     * Chemical substances are a single substance type whose primary defining element is the molecular structure. Chemical substances shall be defined on the basis of their complete covalent molecular structure; the presence of a salt (counter-ion) and/or solvates (water, alcohols) is also captured. Purity, grade, physical form or particle size are not taken into account in the definition of a chemical substance or in the assignment of a Substance ID
     */
    interface SubstanceAmount extends BackboneElement {
        /**
         * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field
         */
        amountQuantity?: Quantity;
        /**
         * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field
         */
        amountRange?: Range;
        /**
         * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field
         */
        amountString?: string;
        /**
         * Contains extended information for property 'amountString'.
         */
        _amountString?: Element;
        /**
         * Most elements that require a quantitative value will also have a field called amount type. Amount type should always be specified because the actual value of the amount is often dependent on it. EXAMPLE: In capturing the actual relative amounts of substances or molecular fragments it is essential to indicate whether the amount refers to a mole ratio or weight ratio. For any given element an effort should be made to use same the amount type for all related definitional elements
         */
        amountType?: CodeableConcept;
        /**
         * A textual comment on a numeric value
         */
        amountText?: string;
        /**
         * Contains extended information for property 'amountText'.
         */
        _amountText?: Element;
        /**
         * Reference range of possible or expected values
         */
        referenceRange?: SubstanceAmountReferenceRange;
    }
    /**
     * Todo
     */
    interface SubstancePolymerRepeat extends BackboneElement {
        /**
         * Todo
         */
        numberOfUnits?: integer;
        /**
         * Contains extended information for property 'numberOfUnits'.
         */
        _numberOfUnits?: Element;
        /**
         * Todo
         */
        averageMolecularFormula?: string;
        /**
         * Contains extended information for property 'averageMolecularFormula'.
         */
        _averageMolecularFormula?: Element;
        /**
         * Todo
         */
        repeatUnitAmountType?: CodeableConcept;
        /**
         * Todo
         */
        repeatUnit?: SubstancePolymerRepeatRepeatUnit[];
    }
    /**
     * Todo
     */
    interface SubstancePolymerRepeatRepeatUnit extends BackboneElement {
        /**
         * Todo
         */
        orientationOfPolymerisation?: CodeableConcept;
        /**
         * Todo
         */
        repeatUnit?: string;
        /**
         * Contains extended information for property 'repeatUnit'.
         */
        _repeatUnit?: Element;
        /**
         * Todo
         */
        amount?: SubstanceAmount;
        /**
         * Todo
         */
        degreeOfPolymerisation?: SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation[];
        /**
         * Todo
         */
        structuralRepresentation?: SubstancePolymerRepeatRepeatUnitStructuralRepresentation[];
    }
    /**
     * Todo
     */
    interface SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation extends BackboneElement {
        /**
         * Todo
         */
        degree?: CodeableConcept;
        /**
         * Todo
         */
        amount?: SubstanceAmount;
    }
    /**
     * Todo
     */
    interface SubstancePolymerRepeatRepeatUnitStructuralRepresentation extends BackboneElement {
        /**
         * Todo
         */
        type?: CodeableConcept;
        /**
         * Todo
         */
        representation?: string;
        /**
         * Contains extended information for property 'representation'.
         */
        _representation?: Element;
        /**
         * Todo
         */
        attachment?: Attachment;
    }
    /**
     * Todo
     */
    interface SubstancePolymer extends DomainResource {
        /**
         * Todo
         */
        class?: CodeableConcept;
        /**
         * Todo
         */
        geometry?: CodeableConcept;
        /**
         * Todo
         */
        copolymerConnectivity?: CodeableConcept[];
        /**
         * Todo
         */
        modification?: string[];
        /**
         * Contains extended information for property 'modification'.
         */
        _modification?: Element[];
        /**
         * Todo
         */
        monomerSet?: SubstancePolymerMonomerSet[];
        /**
         * Todo
         */
        repeat?: SubstancePolymerRepeat[];
    }
    /**
     * This subclause refers to the description of each subunit constituting the SubstanceProtein. A subunit is a linear sequence of amino acids linked through peptide bonds. The Subunit information shall be provided when the finished SubstanceProtein is a complex of multiple sequences; subunits are not used to delineate domains within a single sequence. Subunits are listed in order of decreasing length; sequences of the same length will be ordered by decreasing molecular weight; subunits that have identical sequences will be repeated multiple times
     */
    interface SubstanceProteinSubunit extends BackboneElement {
        /**
         * Index of primary sequences of amino acids linked through peptide bonds in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts
         */
        subunit?: integer;
        /**
         * Contains extended information for property 'subunit'.
         */
        _subunit?: Element;
        /**
         * The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence
         */
        sequence?: string;
        /**
         * Contains extended information for property 'sequence'.
         */
        _sequence?: Element;
        /**
         * Length of linear sequences of amino acids contained in the subunit
         */
        length?: integer;
        /**
         * Contains extended information for property 'length'.
         */
        _length?: Element;
        /**
         * The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence
         */
        sequenceAttachment?: Attachment;
        /**
         * Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID
         */
        nTerminalModificationId?: Identifier;
        /**
         * The name of the fragment modified at the N-terminal of the SubstanceProtein shall be specified
         */
        nTerminalModification?: string;
        /**
         * Contains extended information for property 'nTerminalModification'.
         */
        _nTerminalModification?: Element;
        /**
         * Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID
         */
        cTerminalModificationId?: Identifier;
        /**
         * The modification at the C-terminal shall be specified
         */
        cTerminalModification?: string;
        /**
         * Contains extended information for property 'cTerminalModification'.
         */
        _cTerminalModification?: Element;
    }
    /**
     * A SubstanceProtein is defined as a single unit of a linear amino acid sequence, or a combination of subunits that are either covalently linked or have a defined invariant stoichiometric relationship. This includes all synthetic, recombinant and purified SubstanceProteins of defined sequence, whether the use is therapeutic or prophylactic. This set of elements will be used to describe albumins, coagulation factors, cytokines, growth factors, peptide/SubstanceProtein hormones, enzymes, toxins, toxoids, recombinant vaccines, and immunomodulators
     */
    interface SubstanceProtein extends DomainResource {
        /**
         * The SubstanceProtein descriptive elements will only be used when a complete or partial amino acid sequence is available or derivable from a nucleic acid sequence
         */
        sequenceType?: CodeableConcept;
        /**
         * Number of linear sequences of amino acids linked through peptide bonds. The number of subunits constituting the SubstanceProtein shall be described. It is possible that the number of subunits can be variable
         */
        numberOfSubunits?: integer;
        /**
         * Contains extended information for property 'numberOfSubunits'.
         */
        _numberOfSubunits?: Element;
        /**
         * The disulphide bond between two cysteine residues either on the same subunit or on two different subunits shall be described. The position of the disulfide bonds in the SubstanceProtein shall be listed in increasing order of subunit number and position within subunit followed by the abbreviation of the amino acids involved. The disulfide linkage positions shall actually contain the amino acid Cysteine at the respective positions
         */
        disulfideLinkage?: string[];
        /**
         * Contains extended information for property 'disulfideLinkage'.
         */
        _disulfideLinkage?: Element[];
        /**
         * This subclause refers to the description of each subunit constituting the SubstanceProtein. A subunit is a linear sequence of amino acids linked through peptide bonds. The Subunit information shall be provided when the finished SubstanceProtein is a complex of multiple sequences; subunits are not used to delineate domains within a single sequence. Subunits are listed in order of decreasing length; sequences of the same length will be ordered by decreasing molecular weight; subunits that have identical sequences will be repeated multiple times
         */
        subunit?: SubstanceProteinSubunit[];
    }
    /**
     * Todo
     */
    interface SubstanceReferenceInformationGene extends BackboneElement {
        /**
         * Todo
         */
        geneSequenceOrigin?: CodeableConcept;
        /**
         * Todo
         */
        gene?: CodeableConcept;
        /**
         * Todo
         */
        source?: Reference[];
    }
    /**
     * Todo
     */
    interface SubstanceReferenceInformationGeneElement extends BackboneElement {
        /**
         * Todo
         */
        type?: CodeableConcept;
        /**
         * Todo
         */
        element?: Identifier;
        /**
         * Todo
         */
        source?: Reference[];
    }
    /**
     * Todo
     */
    interface SubstanceReferenceInformationClassification extends BackboneElement {
        /**
         * Todo
         */
        domain?: CodeableConcept;
        /**
         * Todo
         */
        classification?: CodeableConcept;
        /**
         * Todo
         */
        subtype?: CodeableConcept[];
        /**
         * Todo
         */
        source?: Reference[];
    }
    /**
     * Todo
     */
    interface SubstanceReferenceInformationTarget extends BackboneElement {
        /**
         * Todo
         */
        target?: Identifier;
        /**
         * Todo
         */
        type?: CodeableConcept;
        /**
         * Todo
         */
        interaction?: CodeableConcept;
        /**
         * Todo
         */
        organism?: CodeableConcept;
        /**
         * Todo
         */
        organismType?: CodeableConcept;
        /**
         * Todo
         */
        amountQuantity?: Quantity;
        /**
         * Todo
         */
        amountRange?: Range;
        /**
         * Todo
         */
        amountString?: string;
        /**
         * Contains extended information for property 'amountString'.
         */
        _amountString?: Element;
        /**
         * Todo
         */
        amountType?: CodeableConcept;
        /**
         * Todo
         */
        source?: Reference[];
    }
    /**
     * Todo
     */
    interface SubstanceReferenceInformation extends DomainResource {
        /**
         * Todo
         */
        comment?: string;
        /**
         * Contains extended information for property 'comment'.
         */
        _comment?: Element;
        /**
         * Todo
         */
        gene?: SubstanceReferenceInformationGene[];
        /**
         * Todo
         */
        geneElement?: SubstanceReferenceInformationGeneElement[];
        /**
         * Todo
         */
        classification?: SubstanceReferenceInformationClassification[];
        /**
         * Todo
         */
        target?: SubstanceReferenceInformationTarget[];
    }
    /**
     * Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to define both Substances and Specified Group 1 Substances. For substances derived from Plants, fraction information will be captured at the Substance information level ( . Oils, Juices and Exudates). Additional information for Extracts, such as extraction solvent composition, will be captured at the Specified Substance Group 1 information level. For plasma-derived products fraction information will be captured at the Substance and the Specified Substance Group 1 levels
     */
    interface SubstanceSourceMaterialFractionDescription extends BackboneElement {
        /**
         * This element is capturing information about the fraction of a plant part, or human plasma for fractionation
         */
        fraction?: string;
        /**
         * Contains extended information for property 'fraction'.
         */
        _fraction?: Element;
        /**
         * The specific type of the material constituting the component. For Herbal preparations the particulars of the extracts (liquid/dry) is described in Specified Substance Group 1
         */
        materialType?: CodeableConcept;
    }
    /**
     * This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf
     */
    interface SubstanceSourceMaterialOrganism extends BackboneElement {
        /**
         * The family of an organism shall be specified
         */
        family?: CodeableConcept;
        /**
         * The genus of an organism shall be specified; refers to the Latin epithet of the genus element of the plant/animal scientific name; it is present in names for genera, species and infraspecies
         */
        genus?: CodeableConcept;
        /**
         * The species of an organism shall be specified; refers to the Latin epithet of the species of the plant/animal; it is present in names for species and infraspecies
         */
        species?: CodeableConcept;
        /**
         * The Intraspecific type of an organism shall be specified
         */
        intraspecificType?: CodeableConcept;
        /**
         * The intraspecific description of an organism shall be specified based on a controlled vocabulary. For Influenza Vaccine, the intraspecific description shall contain the syntax of the antigen in line with the WHO convention
         */
        intraspecificDescription?: string;
        /**
         * Contains extended information for property 'intraspecificDescription'.
         */
        _intraspecificDescription?: Element;
        /**
         * 4.9.13.6.1 Author type (Conditional)
         */
        author?: SubstanceSourceMaterialOrganismAuthor[];
        /**
         * 4.9.13.8.1 Hybrid species maternal organism ID (Optional)
         */
        hybrid?: SubstanceSourceMaterialOrganismHybrid;
        /**
         * 4.9.13.7.1 Kingdom (Conditional)
         */
        organismGeneral?: SubstanceSourceMaterialOrganismOrganismGeneral;
    }
    /**
     * 4.9.13.6.1 Author type (Conditional)
     */
    interface SubstanceSourceMaterialOrganismAuthor extends BackboneElement {
        /**
         * The type of author of an organism species shall be specified. The parenthetical author of an organism species refers to the first author who published the plant/animal name (of any rank). The primary author of an organism species refers to the first author(s), who validly published the plant/animal name
         */
        authorType?: CodeableConcept;
        /**
         * The author of an organism species shall be specified. The author year of an organism shall also be specified when applicable; refers to the year in which the first author(s) published the infraspecific plant/animal name (of any rank)
         */
        authorDescription?: string;
        /**
         * Contains extended information for property 'authorDescription'.
         */
        _authorDescription?: Element;
    }
    /**
     * 4.9.13.8.1 Hybrid species maternal organism ID (Optional)
     */
    interface SubstanceSourceMaterialOrganismHybrid extends BackboneElement {
        /**
         * The identifier of the maternal species constituting the hybrid organism shall be specified based on a controlled vocabulary. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal
         */
        maternalOrganismId?: string;
        /**
         * Contains extended information for property 'maternalOrganismId'.
         */
        _maternalOrganismId?: Element;
        /**
         * The name of the maternal species constituting the hybrid organism shall be specified. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal
         */
        maternalOrganismName?: string;
        /**
         * Contains extended information for property 'maternalOrganismName'.
         */
        _maternalOrganismName?: Element;
        /**
         * The identifier of the paternal species constituting the hybrid organism shall be specified based on a controlled vocabulary
         */
        paternalOrganismId?: string;
        /**
         * Contains extended information for property 'paternalOrganismId'.
         */
        _paternalOrganismId?: Element;
        /**
         * The name of the paternal species constituting the hybrid organism shall be specified
         */
        paternalOrganismName?: string;
        /**
         * Contains extended information for property 'paternalOrganismName'.
         */
        _paternalOrganismName?: Element;
        /**
         * The hybrid type of an organism shall be specified
         */
        hybridType?: CodeableConcept;
    }
    /**
     * 4.9.13.7.1 Kingdom (Conditional)
     */
    interface SubstanceSourceMaterialOrganismOrganismGeneral extends BackboneElement {
        /**
         * The kingdom of an organism shall be specified
         */
        kingdom?: CodeableConcept;
        /**
         * The phylum of an organism shall be specified
         */
        phylum?: CodeableConcept;
        /**
         * The class of an organism shall be specified
         */
        class?: CodeableConcept;
        /**
         * The order of an organism shall be specified,
         */
        order?: CodeableConcept;
    }
    /**
     * To do
     */
    interface SubstanceSourceMaterialPartDescription extends BackboneElement {
        /**
         * Entity of anatomical origin of source material within an organism
         */
        part?: CodeableConcept;
        /**
         * The detailed anatomic location when the part can be extracted from different anatomical locations of the organism. Multiple alternative locations may apply
         */
        partLocation?: CodeableConcept;
    }
    /**
     * Source material shall capture information on the taxonomic and anatomical origins as well as the fraction of a material that can result in or can be modified to form a substance. This set of data elements shall be used to define polymer substances isolated from biological matrices. Taxonomic and anatomical origins shall be described using a controlled vocabulary as required. This information is captured for naturally derived polymers ( . starch) and structurally diverse substances. For Organisms belonging to the Kingdom Plantae the Substance level defines the fresh material of a single species or infraspecies, the Herbal Drug and the Herbal preparation. For Herbal preparations, the fraction information will be captured at the Substance information level and additional information for herbal extracts will be captured at the Specified Substance Group 1 information level. See for further explanation the Substance Class: Structurally Diverse and the herbal annex
     */
    interface SubstanceSourceMaterial extends DomainResource {
        /**
         * General high level classification of the source material specific to the origin of the material
         */
        sourceMaterialClass?: CodeableConcept;
        /**
         * The type of the source material shall be specified based on a controlled vocabulary. For vaccines, this subclause refers to the class of infectious agent
         */
        sourceMaterialType?: CodeableConcept;
        /**
         * The state of the source material when extracted
         */
        sourceMaterialState?: CodeableConcept;
        /**
         * The unique identifier associated with the source material parent organism shall be specified
         */
        organismId?: Identifier;
        /**
         * The organism accepted Scientific name shall be provided based on the organism taxonomy
         */
        organismName?: string;
        /**
         * Contains extended information for property 'organismName'.
         */
        _organismName?: Element;
        /**
         * The parent of the herbal drug Ginkgo biloba, Leaf is the substance ID of the substance (fresh) of Ginkgo biloba L. or Ginkgo biloba L. (Whole plant)
         */
        parentSubstanceId?: Identifier[];
        /**
         * The parent substance of the Herbal Drug, or Herbal preparation
         */
        parentSubstanceName?: string[];
        /**
         * Contains extended information for property 'parentSubstanceName'.
         */
        _parentSubstanceName?: Element[];
        /**
         * The country where the plant material is harvested or the countries where the plasma is sourced from as laid down in accordance with the Plasma Master File. For “Plasma-derived substances” the attribute country of origin provides information about the countries used for the manufacturing of the Cryopoor plama or Crioprecipitate
         */
        countryOfOrigin?: CodeableConcept[];
        /**
         * The place/region where the plant is harvested or the places/regions where the animal source material has its habitat
         */
        geographicalLocation?: string[];
        /**
         * Contains extended information for property 'geographicalLocation'.
         */
        _geographicalLocation?: Element[];
        /**
         * Stage of life for animals, plants, insects and microorganisms. This information shall be provided only when the substance is significantly different in these stages (e.g. foetal bovine serum)
         */
        developmentStage?: CodeableConcept;
        /**
         * Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to define both Substances and Specified Group 1 Substances. For substances derived from Plants, fraction information will be captured at the Substance information level ( . Oils, Juices and Exudates). Additional information for Extracts, such as extraction solvent composition, will be captured at the Specified Substance Group 1 information level. For plasma-derived products fraction information will be captured at the Substance and the Specified Substance Group 1 levels
         */
        fractionDescription?: SubstanceSourceMaterialFractionDescription[];
        /**
         * This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf
         */
        organism?: SubstanceSourceMaterialOrganism;
        /**
         * To do
         */
        partDescription?: SubstanceSourceMaterialPartDescription[];
    }
    /**
     * Moiety, for structural modifications
     */
    interface SubstanceSpecificationMoiety extends BackboneElement {
        /**
         * Role that the moiety is playing
         */
        role?: CodeableConcept;
        /**
         * Identifier by which this moiety substance is known
         */
        identifier?: Identifier;
        /**
         * Textual name for this moiety substance
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Stereochemistry type
         */
        stereochemistry?: CodeableConcept;
        /**
         * Optical activity type
         */
        opticalActivity?: CodeableConcept;
        /**
         * Molecular formula
         */
        molecularFormula?: string;
        /**
         * Contains extended information for property 'molecularFormula'.
         */
        _molecularFormula?: Element;
        /**
         * Quantitative value for this moiety
         */
        amountQuantity?: Quantity;
        /**
         * Quantitative value for this moiety
         */
        amountString?: string;
        /**
         * Contains extended information for property 'amountString'.
         */
        _amountString?: Element;
    }
    /**
     * General specifications for this substance, including how it is related to other substances
     */
    interface SubstanceSpecificationProperty extends BackboneElement {
        /**
         * A category for this property, e.g. Physical, Chemical, Enzymatic
         */
        category?: CodeableConcept;
        /**
         * Property type e.g. viscosity, pH, isoelectric point
         */
        code?: CodeableConcept;
        /**
         * Parameters that were used in the measurement of a property (e.g. for viscosity: measured at 20C with a pH of 7.1)
         */
        parameters?: string;
        /**
         * Contains extended information for property 'parameters'.
         */
        _parameters?: Element;
        /**
         * A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol)
         */
        definingSubstanceReference?: Reference;
        /**
         * A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol)
         */
        definingSubstanceCodeableConcept?: CodeableConcept;
        /**
         * Quantitative value for this property
         */
        amountQuantity?: Quantity;
        /**
         * Quantitative value for this property
         */
        amountString?: string;
        /**
         * Contains extended information for property 'amountString'.
         */
        _amountString?: Element;
    }
    /**
     * Structural information
     */
    interface SubstanceSpecificationStructure extends BackboneElement {
        /**
         * Stereochemistry type
         */
        stereochemistry?: CodeableConcept;
        /**
         * Optical activity type
         */
        opticalActivity?: CodeableConcept;
        /**
         * Molecular formula
         */
        molecularFormula?: string;
        /**
         * Contains extended information for property 'molecularFormula'.
         */
        _molecularFormula?: Element;
        /**
         * Specified per moiety according to the Hill system, i.e. first C, then H, then alphabetical, each moiety separated by a dot
         */
        molecularFormulaByMoiety?: string;
        /**
         * Contains extended information for property 'molecularFormulaByMoiety'.
         */
        _molecularFormulaByMoiety?: Element;
        /**
         * Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio
         */
        isotope?: SubstanceSpecificationStructureIsotope[];
        /**
         * The molecular weight or weight range (for proteins, polymers or nucleic acids)
         */
        molecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeight;
        /**
         * Supporting literature
         */
        source?: Reference[];
        /**
         * Molecular structural representation
         */
        representation?: SubstanceSpecificationStructureRepresentation[];
    }
    /**
     * Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio
     */
    interface SubstanceSpecificationStructureIsotope extends BackboneElement {
        /**
         * Substance identifier for each non-natural or radioisotope
         */
        identifier?: Identifier;
        /**
         * Substance name for each non-natural or radioisotope
         */
        name?: CodeableConcept;
        /**
         * The type of isotopic substitution present in a single substance
         */
        substitution?: CodeableConcept;
        /**
         * Half life - for a non-natural nuclide
         */
        halfLife?: Quantity;
        /**
         * The molecular weight or weight range (for proteins, polymers or nucleic acids)
         */
        molecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeight;
    }
    /**
     * The molecular weight or weight range (for proteins, polymers or nucleic acids)
     */
    interface SubstanceSpecificationStructureIsotopeMolecularWeight extends BackboneElement {
        /**
         * The method by which the molecular weight was determined
         */
        method?: CodeableConcept;
        /**
         * Type of molecular weight such as exact, average (also known as. number average), weight average
         */
        type?: CodeableConcept;
        /**
         * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field
         */
        amount?: Quantity;
    }
    /**
     * Molecular structural representation
     */
    interface SubstanceSpecificationStructureRepresentation extends BackboneElement {
        /**
         * The type of structure (e.g. Full, Partial, Representative)
         */
        type?: CodeableConcept;
        /**
         * The structural representation as text string in a format e.g. InChI, SMILES, MOLFILE, CDX
         */
        representation?: string;
        /**
         * Contains extended information for property 'representation'.
         */
        _representation?: Element;
        /**
         * An attached file with the structural representation
         */
        attachment?: Attachment;
    }
    /**
     * Codes associated with the substance
     */
    interface SubstanceSpecificationCode extends BackboneElement {
        /**
         * The specific code
         */
        code?: CodeableConcept;
        /**
         * Status of the code assignment
         */
        status?: CodeableConcept;
        /**
         * The date at which the code status is changed as part of the terminology maintenance
         */
        statusDate?: dateTime;
        /**
         * Contains extended information for property 'statusDate'.
         */
        _statusDate?: Element;
        /**
         * Any comment can be provided in this field, if necessary
         */
        comment?: string;
        /**
         * Contains extended information for property 'comment'.
         */
        _comment?: Element;
        /**
         * Supporting literature
         */
        source?: Reference[];
    }
    /**
     * Names applicable to this substance
     */
    interface SubstanceSpecificationName extends BackboneElement {
        /**
         * The actual name
         */
        name: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Name type
         */
        type?: CodeableConcept;
        /**
         * The status of the name
         */
        status?: CodeableConcept;
        /**
         * If this is the preferred name for this substance
         */
        preferred?: boolean;
        /**
         * Contains extended information for property 'preferred'.
         */
        _preferred?: Element;
        /**
         * Language of the name
         */
        language?: CodeableConcept[];
        /**
         * The use context of this name for example if there is a different name a drug active ingredient as opposed to a food colour additive
         */
        domain?: CodeableConcept[];
        /**
         * The jurisdiction where this name applies
         */
        jurisdiction?: CodeableConcept[];
        /**
         * A synonym of this name
         */
        synonym?: [];
        /**
         * A translation for this name
         */
        translation?: [];
        /**
         * Details of the official nature of this name
         */
        official?: SubstanceSpecificationNameOfficial[];
        /**
         * Supporting literature
         */
        source?: Reference[];
    }
    /**
     * Details of the official nature of this name
     */
    interface SubstanceSpecificationNameOfficial extends BackboneElement {
        /**
         * Which authority uses this official name
         */
        authority?: CodeableConcept;
        /**
         * The status of the official name
         */
        status?: CodeableConcept;
        /**
         * Date of official name change
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
    }
    /**
     * A link between this substance and another, with details of the relationship
     */
    interface SubstanceSpecificationRelationship extends BackboneElement {
        /**
         * A pointer to another substance, as a resource or just a representational code
         */
        substanceReference?: Reference;
        /**
         * A pointer to another substance, as a resource or just a representational code
         */
        substanceCodeableConcept?: CodeableConcept;
        /**
         * For example "salt to parent", "active moiety", "starting material"
         */
        relationship?: CodeableConcept;
        /**
         * For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible substance relationships
         */
        isDefining?: boolean;
        /**
         * Contains extended information for property 'isDefining'.
         */
        _isDefining?: Element;
        /**
         * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other
         */
        amountQuantity?: Quantity;
        /**
         * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other
         */
        amountRange?: Range;
        /**
         * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other
         */
        amountRatio?: Ratio;
        /**
         * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other
         */
        amountString?: string;
        /**
         * Contains extended information for property 'amountString'.
         */
        _amountString?: Element;
        /**
         * For use when the numeric
         */
        amountRatioLowLimit?: Ratio;
        /**
         * An operator for the amount, for example "average", "approximately", "less than"
         */
        amountType?: CodeableConcept;
        /**
         * Supporting literature
         */
        source?: Reference[];
    }
    /**
     * The detailed description of a substance, typically at a level beyond what is used for prescribing
     */
    interface SubstanceSpecification extends DomainResource {
        /**
         * Identifier by which this substance is known
         */
        identifier?: Identifier;
        /**
         * High level categorization, e.g. polymer or nucleic acid
         */
        type?: CodeableConcept;
        /**
         * Status of substance within the catalogue e.g. approved
         */
        status?: CodeableConcept;
        /**
         * If the substance applies to only human or veterinary use
         */
        domain?: CodeableConcept;
        /**
         * Textual description of the substance
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Supporting literature
         */
        source?: Reference[];
        /**
         * Textual comment about this record of a substance
         */
        comment?: string;
        /**
         * Contains extended information for property 'comment'.
         */
        _comment?: Element;
        /**
         * Moiety, for structural modifications
         */
        moiety?: SubstanceSpecificationMoiety[];
        /**
         * General specifications for this substance, including how it is related to other substances
         */
        property?: SubstanceSpecificationProperty[];
        /**
         * General information detailing this substance
         */
        referenceInformation?: Reference;
        /**
         * Structural information
         */
        structure?: SubstanceSpecificationStructure;
        /**
         * Codes associated with the substance
         */
        code?: SubstanceSpecificationCode[];
        /**
         * Names applicable to this substance
         */
        name?: SubstanceSpecificationName[];
        /**
         * The molecular weight or weight range (for proteins, polymers or nucleic acids)
         */
        molecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeight[];
        /**
         * A link between this substance and another, with details of the relationship
         */
        relationship?: SubstanceSpecificationRelationship[];
        /**
         * Data items specific to nucleic acids
         */
        nucleicAcid?: Reference;
        /**
         * Data items specific to polymers
         */
        polymer?: Reference;
        /**
         * Data items specific to proteins
         */
        protein?: Reference;
        /**
         * Material or taxonomic/anatomical source for the substance
         */
        sourceMaterial?: Reference;
    }
    /**
     * The item that is delivered or supplied
     */
    interface SupplyDeliverySuppliedItem extends BackboneElement {
        /**
         * Amount dispensed
         */
        quantity?: Quantity;
        /**
         * Medication, Substance, or Device supplied
         */
        itemCodeableConcept?: CodeableConcept;
        /**
         * Medication, Substance, or Device supplied
         */
        itemReference?: Reference;
    }
    /**
     * Delivery of bulk Supplies
     */
    interface SupplyDelivery extends DomainResource {
        /**
         * External identifier
         */
        identifier?: Identifier[];
        /**
         * Fulfills plan, proposal or order
         */
        basedOn?: Reference[];
        /**
         * Part of referenced event
         */
        partOf?: Reference[];
        /**
         * in-progress | completed | abandoned | entered-in-error
         */
        status?: code;
        /**
         * Contains extended information for property 'status'.
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
         * The item that is delivered or supplied
         */
        suppliedItem?: SupplyDeliverySuppliedItem;
        /**
         * When event occurred
         */
        occurrenceDateTime?: dateTime;
        /**
         * Contains extended information for property 'occurrenceDateTime'.
         */
        _occurrenceDateTime?: Element;
        /**
         * When event occurred
         */
        occurrencePeriod?: Period;
        /**
         * When event occurred
         */
        occurrenceTiming?: Timing;
        /**
         * Dispenser
         */
        supplier?: Reference;
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
     * Ordered item details
     */
    interface SupplyRequestParameter extends BackboneElement {
        /**
         * Item detail
         */
        code?: CodeableConcept;
        /**
         * Value of detail
         */
        valueCodeableConcept?: CodeableConcept;
        /**
         * Value of detail
         */
        valueQuantity?: Quantity;
        /**
         * Value of detail
         */
        valueRange?: Range;
        /**
         * Value of detail
         */
        valueBoolean?: boolean;
        /**
         * Contains extended information for property 'valueBoolean'.
         */
        _valueBoolean?: Element;
    }
    /**
     * Request for a medication, substance or device
     */
    interface SupplyRequest extends DomainResource {
        /**
         * Business Identifier for SupplyRequest
         */
        identifier?: Identifier[];
        /**
         * draft | active | suspended +
         */
        status?: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * The kind of supply (central, non-stock, etc.)
         */
        category?: CodeableConcept;
        /**
         * routine | urgent | asap | stat
         */
        priority?: code;
        /**
         * Contains extended information for property 'priority'.
         */
        _priority?: Element;
        /**
         * Medication, Substance, or Device requested to be supplied
         */
        itemCodeableConcept?: CodeableConcept;
        /**
         * Medication, Substance, or Device requested to be supplied
         */
        itemReference?: Reference;
        /**
         * The requested amount of the item indicated
         */
        quantity: Quantity;
        /**
         * Ordered item details
         */
        parameter?: SupplyRequestParameter[];
        /**
         * When the request should be fulfilled
         */
        occurrenceDateTime?: dateTime;
        /**
         * Contains extended information for property 'occurrenceDateTime'.
         */
        _occurrenceDateTime?: Element;
        /**
         * When the request should be fulfilled
         */
        occurrencePeriod?: Period;
        /**
         * When the request should be fulfilled
         */
        occurrenceTiming?: Timing;
        /**
         * When the request was made
         */
        authoredOn?: dateTime;
        /**
         * Contains extended information for property 'authoredOn'.
         */
        _authoredOn?: Element;
        /**
         * Individual making the request
         */
        requester?: Reference;
        /**
         * Who is intended to fulfill the request
         */
        supplier?: Reference[];
        /**
         * The reason why the supply item was requested
         */
        reasonCode?: CodeableConcept[];
        /**
         * The reason why the supply item was requested
         */
        reasonReference?: Reference[];
        /**
         * The origin of the supply
         */
        deliverFrom?: Reference;
        /**
         * The destination of the supply
         */
        deliverTo?: Reference;
    }
    /**
     * Constraints on fulfillment tasks
     */
    interface TaskRestriction extends BackboneElement {
        /**
         * How many times to repeat
         */
        repetitions?: positiveInt;
        /**
         * Contains extended information for property 'repetitions'.
         */
        _repetitions?: Element;
        /**
         * When fulfillment sought
         */
        period?: Period;
        /**
         * For whom is fulfillment sought?
         */
        recipient?: Reference[];
    }
    /**
     * Information used to perform task
     */
    interface TaskInput extends BackboneElement {
        /**
         * Label for the input
         */
        type: CodeableConcept;
        /**
         * Content to use in performing the task
         */
        valueBase64Binary?: base64Binary;
        /**
         * Contains extended information for property 'valueBase64Binary'.
         */
        _valueBase64Binary?: Element;
        /**
         * Content to use in performing the task
         */
        valueBoolean?: boolean;
        /**
         * Contains extended information for property 'valueBoolean'.
         */
        _valueBoolean?: Element;
        /**
         * Content to use in performing the task
         */
        valueCanonical?: canonical;
        /**
         * Contains extended information for property 'valueCanonical'.
         */
        _valueCanonical?: Element;
        /**
         * Content to use in performing the task
         */
        valueCode?: code;
        /**
         * Contains extended information for property 'valueCode'.
         */
        _valueCode?: Element;
        /**
         * Content to use in performing the task
         */
        valueDate?: date;
        /**
         * Contains extended information for property 'valueDate'.
         */
        _valueDate?: Element;
        /**
         * Content to use in performing the task
         */
        valueDateTime?: dateTime;
        /**
         * Contains extended information for property 'valueDateTime'.
         */
        _valueDateTime?: Element;
        /**
         * Content to use in performing the task
         */
        valueDecimal?: decimal;
        /**
         * Contains extended information for property 'valueDecimal'.
         */
        _valueDecimal?: Element;
        /**
         * Content to use in performing the task
         */
        valueId?: id;
        /**
         * Contains extended information for property 'valueId'.
         */
        _valueId?: Element;
        /**
         * Content to use in performing the task
         */
        valueInstant?: instant;
        /**
         * Contains extended information for property 'valueInstant'.
         */
        _valueInstant?: Element;
        /**
         * Content to use in performing the task
         */
        valueInteger?: integer;
        /**
         * Contains extended information for property 'valueInteger'.
         */
        _valueInteger?: Element;
        /**
         * Content to use in performing the task
         */
        valueMarkdown?: markdown;
        /**
         * Contains extended information for property 'valueMarkdown'.
         */
        _valueMarkdown?: Element;
        /**
         * Content to use in performing the task
         */
        valueOid?: oid;
        /**
         * Contains extended information for property 'valueOid'.
         */
        _valueOid?: Element;
        /**
         * Content to use in performing the task
         */
        valuePositiveInt?: positiveInt;
        /**
         * Contains extended information for property 'valuePositiveInt'.
         */
        _valuePositiveInt?: Element;
        /**
         * Content to use in performing the task
         */
        valueString?: string;
        /**
         * Contains extended information for property 'valueString'.
         */
        _valueString?: Element;
        /**
         * Content to use in performing the task
         */
        valueTime?: time;
        /**
         * Contains extended information for property 'valueTime'.
         */
        _valueTime?: Element;
        /**
         * Content to use in performing the task
         */
        valueUnsignedInt?: unsignedInt;
        /**
         * Contains extended information for property 'valueUnsignedInt'.
         */
        _valueUnsignedInt?: Element;
        /**
         * Content to use in performing the task
         */
        valueUri?: uri;
        /**
         * Contains extended information for property 'valueUri'.
         */
        _valueUri?: Element;
        /**
         * Content to use in performing the task
         */
        valueUrl?: url;
        /**
         * Contains extended information for property 'valueUrl'.
         */
        _valueUrl?: Element;
        /**
         * Content to use in performing the task
         */
        valueUuid?: uuid;
        /**
         * Contains extended information for property 'valueUuid'.
         */
        _valueUuid?: Element;
        /**
         * Content to use in performing the task
         */
        valueAddress?: Address;
        /**
         * Content to use in performing the task
         */
        valueAge?: Age;
        /**
         * Content to use in performing the task
         */
        valueAnnotation?: Annotation;
        /**
         * Content to use in performing the task
         */
        valueAttachment?: Attachment;
        /**
         * Content to use in performing the task
         */
        valueCodeableConcept?: CodeableConcept;
        /**
         * Content to use in performing the task
         */
        valueCoding?: Coding;
        /**
         * Content to use in performing the task
         */
        valueContactPoint?: ContactPoint;
        /**
         * Content to use in performing the task
         */
        valueCount?: Count;
        /**
         * Content to use in performing the task
         */
        valueDistance?: Distance;
        /**
         * Content to use in performing the task
         */
        valueDuration?: Duration;
        /**
         * Content to use in performing the task
         */
        valueHumanName?: HumanName;
        /**
         * Content to use in performing the task
         */
        valueIdentifier?: Identifier;
        /**
         * Content to use in performing the task
         */
        valueMoney?: Money;
        /**
         * Content to use in performing the task
         */
        valuePeriod?: Period;
        /**
         * Content to use in performing the task
         */
        valueQuantity?: Quantity;
        /**
         * Content to use in performing the task
         */
        valueRange?: Range;
        /**
         * Content to use in performing the task
         */
        valueRatio?: Ratio;
        /**
         * Content to use in performing the task
         */
        valueReference?: Reference;
        /**
         * Content to use in performing the task
         */
        valueSampledData?: SampledData;
        /**
         * Content to use in performing the task
         */
        valueSignature?: Signature;
        /**
         * Content to use in performing the task
         */
        valueTiming?: Timing;
        /**
         * Content to use in performing the task
         */
        valueContactDetail?: ContactDetail;
        /**
         * Content to use in performing the task
         */
        valueContributor?: Contributor;
        /**
         * Content to use in performing the task
         */
        valueDataRequirement?: DataRequirement;
        /**
         * Content to use in performing the task
         */
        valueExpression?: Expression;
        /**
         * Content to use in performing the task
         */
        valueParameterDefinition?: ParameterDefinition;
        /**
         * Content to use in performing the task
         */
        valueRelatedArtifact?: RelatedArtifact;
        /**
         * Content to use in performing the task
         */
        valueTriggerDefinition?: TriggerDefinition;
        /**
         * Content to use in performing the task
         */
        valueUsageContext?: UsageContext;
        /**
         * Content to use in performing the task
         */
        valueDosage?: Dosage;
        /**
         * Content to use in performing the task
         */
        valueMeta?: Meta;
    }
    /**
     * Information produced as part of task
     */
    interface TaskOutput extends BackboneElement {
        /**
         * Label for output
         */
        type: CodeableConcept;
        /**
         * Result of output
         */
        valueBase64Binary?: base64Binary;
        /**
         * Contains extended information for property 'valueBase64Binary'.
         */
        _valueBase64Binary?: Element;
        /**
         * Result of output
         */
        valueBoolean?: boolean;
        /**
         * Contains extended information for property 'valueBoolean'.
         */
        _valueBoolean?: Element;
        /**
         * Result of output
         */
        valueCanonical?: canonical;
        /**
         * Contains extended information for property 'valueCanonical'.
         */
        _valueCanonical?: Element;
        /**
         * Result of output
         */
        valueCode?: code;
        /**
         * Contains extended information for property 'valueCode'.
         */
        _valueCode?: Element;
        /**
         * Result of output
         */
        valueDate?: date;
        /**
         * Contains extended information for property 'valueDate'.
         */
        _valueDate?: Element;
        /**
         * Result of output
         */
        valueDateTime?: dateTime;
        /**
         * Contains extended information for property 'valueDateTime'.
         */
        _valueDateTime?: Element;
        /**
         * Result of output
         */
        valueDecimal?: decimal;
        /**
         * Contains extended information for property 'valueDecimal'.
         */
        _valueDecimal?: Element;
        /**
         * Result of output
         */
        valueId?: id;
        /**
         * Contains extended information for property 'valueId'.
         */
        _valueId?: Element;
        /**
         * Result of output
         */
        valueInstant?: instant;
        /**
         * Contains extended information for property 'valueInstant'.
         */
        _valueInstant?: Element;
        /**
         * Result of output
         */
        valueInteger?: integer;
        /**
         * Contains extended information for property 'valueInteger'.
         */
        _valueInteger?: Element;
        /**
         * Result of output
         */
        valueMarkdown?: markdown;
        /**
         * Contains extended information for property 'valueMarkdown'.
         */
        _valueMarkdown?: Element;
        /**
         * Result of output
         */
        valueOid?: oid;
        /**
         * Contains extended information for property 'valueOid'.
         */
        _valueOid?: Element;
        /**
         * Result of output
         */
        valuePositiveInt?: positiveInt;
        /**
         * Contains extended information for property 'valuePositiveInt'.
         */
        _valuePositiveInt?: Element;
        /**
         * Result of output
         */
        valueString?: string;
        /**
         * Contains extended information for property 'valueString'.
         */
        _valueString?: Element;
        /**
         * Result of output
         */
        valueTime?: time;
        /**
         * Contains extended information for property 'valueTime'.
         */
        _valueTime?: Element;
        /**
         * Result of output
         */
        valueUnsignedInt?: unsignedInt;
        /**
         * Contains extended information for property 'valueUnsignedInt'.
         */
        _valueUnsignedInt?: Element;
        /**
         * Result of output
         */
        valueUri?: uri;
        /**
         * Contains extended information for property 'valueUri'.
         */
        _valueUri?: Element;
        /**
         * Result of output
         */
        valueUrl?: url;
        /**
         * Contains extended information for property 'valueUrl'.
         */
        _valueUrl?: Element;
        /**
         * Result of output
         */
        valueUuid?: uuid;
        /**
         * Contains extended information for property 'valueUuid'.
         */
        _valueUuid?: Element;
        /**
         * Result of output
         */
        valueAddress?: Address;
        /**
         * Result of output
         */
        valueAge?: Age;
        /**
         * Result of output
         */
        valueAnnotation?: Annotation;
        /**
         * Result of output
         */
        valueAttachment?: Attachment;
        /**
         * Result of output
         */
        valueCodeableConcept?: CodeableConcept;
        /**
         * Result of output
         */
        valueCoding?: Coding;
        /**
         * Result of output
         */
        valueContactPoint?: ContactPoint;
        /**
         * Result of output
         */
        valueCount?: Count;
        /**
         * Result of output
         */
        valueDistance?: Distance;
        /**
         * Result of output
         */
        valueDuration?: Duration;
        /**
         * Result of output
         */
        valueHumanName?: HumanName;
        /**
         * Result of output
         */
        valueIdentifier?: Identifier;
        /**
         * Result of output
         */
        valueMoney?: Money;
        /**
         * Result of output
         */
        valuePeriod?: Period;
        /**
         * Result of output
         */
        valueQuantity?: Quantity;
        /**
         * Result of output
         */
        valueRange?: Range;
        /**
         * Result of output
         */
        valueRatio?: Ratio;
        /**
         * Result of output
         */
        valueReference?: Reference;
        /**
         * Result of output
         */
        valueSampledData?: SampledData;
        /**
         * Result of output
         */
        valueSignature?: Signature;
        /**
         * Result of output
         */
        valueTiming?: Timing;
        /**
         * Result of output
         */
        valueContactDetail?: ContactDetail;
        /**
         * Result of output
         */
        valueContributor?: Contributor;
        /**
         * Result of output
         */
        valueDataRequirement?: DataRequirement;
        /**
         * Result of output
         */
        valueExpression?: Expression;
        /**
         * Result of output
         */
        valueParameterDefinition?: ParameterDefinition;
        /**
         * Result of output
         */
        valueRelatedArtifact?: RelatedArtifact;
        /**
         * Result of output
         */
        valueTriggerDefinition?: TriggerDefinition;
        /**
         * Result of output
         */
        valueUsageContext?: UsageContext;
        /**
         * Result of output
         */
        valueDosage?: Dosage;
        /**
         * Result of output
         */
        valueMeta?: Meta;
    }
    /**
     * A task to be performed
     */
    interface Task extends DomainResource {
        /**
         * Task Instance Identifier
         */
        identifier?: Identifier[];
        /**
         * Formal definition of task
         */
        instantiatesCanonical?: canonical;
        /**
         * Contains extended information for property 'instantiatesCanonical'.
         */
        _instantiatesCanonical?: Element;
        /**
         * Formal definition of task
         */
        instantiatesUri?: uri;
        /**
         * Contains extended information for property 'instantiatesUri'.
         */
        _instantiatesUri?: Element;
        /**
         * Request fulfilled by this task
         */
        basedOn?: Reference[];
        /**
         * Requisition or grouper id
         */
        groupIdentifier?: Identifier;
        /**
         * Composite task
         */
        partOf?: Reference[];
        /**
         * draft | requested | received | accepted | +
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Reason for current status
         */
        statusReason?: CodeableConcept;
        /**
         * E.g. "Specimen collected", "IV prepped"
         */
        businessStatus?: CodeableConcept;
        /**
         * unknown | proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option
         */
        intent: code;
        /**
         * Contains extended information for property 'intent'.
         */
        _intent?: Element;
        /**
         * routine | urgent | asap | stat
         */
        priority?: code;
        /**
         * Contains extended information for property 'priority'.
         */
        _priority?: Element;
        /**
         * Task Type
         */
        code?: CodeableConcept;
        /**
         * Human-readable explanation of task
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * What task is acting on
         */
        focus?: Reference;
        /**
         * Beneficiary of the Task
         */
        for?: Reference;
        /**
         * Healthcare event during which this task originated
         */
        encounter?: Reference;
        /**
         * Start and end time of execution
         */
        executionPeriod?: Period;
        /**
         * Task Creation Date
         */
        authoredOn?: dateTime;
        /**
         * Contains extended information for property 'authoredOn'.
         */
        _authoredOn?: Element;
        /**
         * Task Last Modified Date
         */
        lastModified?: dateTime;
        /**
         * Contains extended information for property 'lastModified'.
         */
        _lastModified?: Element;
        /**
         * Who is asking for task to be done
         */
        requester?: Reference;
        /**
         * Requested performer
         */
        performerType?: CodeableConcept[];
        /**
         * Responsible individual
         */
        owner?: Reference;
        /**
         * Where task occurs
         */
        location?: Reference;
        /**
         * Why task is needed
         */
        reasonCode?: CodeableConcept;
        /**
         * Why task is needed
         */
        reasonReference?: Reference;
        /**
         * Associated insurance coverage
         */
        insurance?: Reference[];
        /**
         * Comments made about the task
         */
        note?: Annotation[];
        /**
         * Key events in history of the Task
         */
        relevantHistory?: Reference[];
        /**
         * Constraints on fulfillment tasks
         */
        restriction?: TaskRestriction;
        /**
         * Information used to perform task
         */
        input?: TaskInput[];
        /**
         * Information produced as part of task
         */
        output?: TaskOutput[];
    }
    /**
     * Software that is covered by this terminology capability statement
     */
    interface TerminologyCapabilitiesSoftware extends BackboneElement {
        /**
         * A name the software is known by
         */
        name: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Version covered by this statement
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
    }
    /**
     * If this describes a specific instance
     */
    interface TerminologyCapabilitiesImplementation extends BackboneElement {
        /**
         * Describes this specific instance
         */
        description: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Base URL for the implementation
         */
        url?: url;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
    }
    /**
     * A code system supported by the server
     */
    interface TerminologyCapabilitiesCodeSystem extends BackboneElement {
        /**
         * URI for the Code System
         */
        uri?: canonical;
        /**
         * Contains extended information for property 'uri'.
         */
        _uri?: Element;
        /**
         * Version of Code System supported
         */
        version?: TerminologyCapabilitiesCodeSystemVersion[];
        /**
         * Whether subsumption is supported
         */
        subsumption?: boolean;
        /**
         * Contains extended information for property 'subsumption'.
         */
        _subsumption?: Element;
    }
    /**
     * Version of Code System supported
     */
    interface TerminologyCapabilitiesCodeSystemVersion extends BackboneElement {
        /**
         * Version identifier for this version
         */
        code?: string;
        /**
         * Contains extended information for property 'code'.
         */
        _code?: Element;
        /**
         * If this is the default version for this code system
         */
        isDefault?: boolean;
        /**
         * Contains extended information for property 'isDefault'.
         */
        _isDefault?: Element;
        /**
         * If compositional grammar is supported
         */
        compositional?: boolean;
        /**
         * Contains extended information for property 'compositional'.
         */
        _compositional?: Element;
        /**
         * Language Displays supported
         */
        language?: code[];
        /**
         * Contains extended information for property 'language'.
         */
        _language?: Element[];
        /**
         * Filter Properties supported
         */
        filter?: TerminologyCapabilitiesCodeSystemVersionFilter[];
        /**
         * Properties supported for $lookup
         */
        property?: code[];
        /**
         * Contains extended information for property 'property'.
         */
        _property?: Element[];
    }
    /**
     * Filter Properties supported
     */
    interface TerminologyCapabilitiesCodeSystemVersionFilter extends BackboneElement {
        /**
         * Code of the property supported
         */
        code: code;
        /**
         * Contains extended information for property 'code'.
         */
        _code?: Element;
        /**
         * Operations supported for the property
         */
        op: code[];
        /**
         * Contains extended information for property 'op'.
         */
        _op?: Element[];
    }
    /**
     * Information about the [ValueSet/$expand](valueset-operation-expand.html) operation
     */
    interface TerminologyCapabilitiesExpansion extends BackboneElement {
        /**
         * Whether the server can return nested value sets
         */
        hierarchical?: boolean;
        /**
         * Contains extended information for property 'hierarchical'.
         */
        _hierarchical?: Element;
        /**
         * Whether the server supports paging on expansion
         */
        paging?: boolean;
        /**
         * Contains extended information for property 'paging'.
         */
        _paging?: Element;
        /**
         * Allow request for incomplete expansions?
         */
        incomplete?: boolean;
        /**
         * Contains extended information for property 'incomplete'.
         */
        _incomplete?: Element;
        /**
         * Supported expansion parameter
         */
        parameter?: TerminologyCapabilitiesExpansionParameter[];
        /**
         * Documentation about text searching works
         */
        textFilter?: markdown;
        /**
         * Contains extended information for property 'textFilter'.
         */
        _textFilter?: Element;
    }
    /**
     * Supported expansion parameter
     */
    interface TerminologyCapabilitiesExpansionParameter extends BackboneElement {
        /**
         * Expansion Parameter name
         */
        name: code;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Description of support for parameter
         */
        documentation?: string;
        /**
         * Contains extended information for property 'documentation'.
         */
        _documentation?: Element;
    }
    /**
     * Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html) operation
     */
    interface TerminologyCapabilitiesValidateCode extends BackboneElement {
        /**
         * Whether translations are validated
         */
        translations: boolean;
        /**
         * Contains extended information for property 'translations'.
         */
        _translations?: Element;
    }
    /**
     * Information about the [ConceptMap/$translate](conceptmap-operation-translate.html) operation
     */
    interface TerminologyCapabilitiesTranslation extends BackboneElement {
        /**
         * Whether the client must identify the map
         */
        needsMap: boolean;
        /**
         * Contains extended information for property 'needsMap'.
         */
        _needsMap?: Element;
    }
    /**
     * Information about the [ConceptMap/$closure](conceptmap-operation-closure.html) operation
     */
    interface TerminologyCapabilitiesClosure extends BackboneElement {
        /**
         * If cross-system closure is supported
         */
        translation?: boolean;
        /**
         * Contains extended information for property 'translation'.
         */
        _translation?: Element;
    }
    /**
     * A statement of system capabilities
     */
    interface TerminologyCapabilities extends DomainResource {
        /**
         * Canonical identifier for this terminology capabilities, represented as a URI (globally unique)
         */
        url?: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Business version of the terminology capabilities
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
        /**
         * Name for this terminology capabilities (computer friendly)
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Name for this terminology capabilities (human friendly)
         */
        title?: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
        /**
         * draft | active | retired | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * For testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Contains extended information for property 'experimental'.
         */
        _experimental?: Element;
        /**
         * Date last changed
         */
        date: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Name of the publisher (organization or individual)
         */
        publisher?: string;
        /**
         * Contains extended information for property 'publisher'.
         */
        _publisher?: Element;
        /**
         * Contact details for the publisher
         */
        contact?: ContactDetail[];
        /**
         * Natural language description of the terminology capabilities
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * The context that the content is intended to support
         */
        useContext?: UsageContext[];
        /**
         * Intended jurisdiction for terminology capabilities (if applicable)
         */
        jurisdiction?: CodeableConcept[];
        /**
         * Why this terminology capabilities is defined
         */
        purpose?: markdown;
        /**
         * Contains extended information for property 'purpose'.
         */
        _purpose?: Element;
        /**
         * Use and/or publishing restrictions
         */
        copyright?: markdown;
        /**
         * Contains extended information for property 'copyright'.
         */
        _copyright?: Element;
        /**
         * instance | capability | requirements
         */
        kind: code;
        /**
         * Contains extended information for property 'kind'.
         */
        _kind?: Element;
        /**
         * Software that is covered by this terminology capability statement
         */
        software?: TerminologyCapabilitiesSoftware;
        /**
         * If this describes a specific instance
         */
        implementation?: TerminologyCapabilitiesImplementation;
        /**
         * Whether lockedDate is supported
         */
        lockedDate?: boolean;
        /**
         * Contains extended information for property 'lockedDate'.
         */
        _lockedDate?: Element;
        /**
         * A code system supported by the server
         */
        codeSystem?: TerminologyCapabilitiesCodeSystem[];
        /**
         * Information about the [ValueSet/$expand](valueset-operation-expand.html) operation
         */
        expansion?: TerminologyCapabilitiesExpansion;
        /**
         * explicit | all
         */
        codeSearch?: code;
        /**
         * Contains extended information for property 'codeSearch'.
         */
        _codeSearch?: Element;
        /**
         * Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html) operation
         */
        validateCode?: TerminologyCapabilitiesValidateCode;
        /**
         * Information about the [ConceptMap/$translate](conceptmap-operation-translate.html) operation
         */
        translation?: TerminologyCapabilitiesTranslation;
        /**
         * Information about the [ConceptMap/$closure](conceptmap-operation-closure.html) operation
         */
        closure?: TerminologyCapabilitiesClosure;
    }
    /**
     * A participant in the test execution, either the execution engine, a client, or a server
     */
    interface TestReportParticipant extends BackboneElement {
        /**
         * test-engine | client | server
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * The uri of the participant. An absolute URL is preferred
         */
        uri: uri;
        /**
         * Contains extended information for property 'uri'.
         */
        _uri?: Element;
        /**
         * The display name of the participant
         */
        display?: string;
        /**
         * Contains extended information for property 'display'.
         */
        _display?: Element;
    }
    /**
     * The results of the series of required setup operations before the tests were executed
     */
    interface TestReportSetup extends BackboneElement {
        /**
         * A setup operation or assert that was executed
         */
        action: TestReportSetupAction[];
    }
    /**
     * A setup operation or assert that was executed
     */
    interface TestReportSetupAction extends BackboneElement {
        /**
         * The operation to perform
         */
        operation?: TestReportSetupActionOperation;
        /**
         * The assertion to perform
         */
        assert?: TestReportSetupActionAssert;
    }
    /**
     * The operation to perform
     */
    interface TestReportSetupActionOperation extends BackboneElement {
        /**
         * pass | skip | fail | warning | error
         */
        result: code;
        /**
         * Contains extended information for property 'result'.
         */
        _result?: Element;
        /**
         * A message associated with the result
         */
        message?: markdown;
        /**
         * Contains extended information for property 'message'.
         */
        _message?: Element;
        /**
         * A link to further details on the result
         */
        detail?: uri;
        /**
         * Contains extended information for property 'detail'.
         */
        _detail?: Element;
    }
    /**
     * The assertion to perform
     */
    interface TestReportSetupActionAssert extends BackboneElement {
        /**
         * pass | skip | fail | warning | error
         */
        result: code;
        /**
         * Contains extended information for property 'result'.
         */
        _result?: Element;
        /**
         * A message associated with the result
         */
        message?: markdown;
        /**
         * Contains extended information for property 'message'.
         */
        _message?: Element;
        /**
         * A link to further details on the result
         */
        detail?: string;
        /**
         * Contains extended information for property 'detail'.
         */
        _detail?: Element;
    }
    /**
     * A test executed from the test script
     */
    interface TestReportTest extends BackboneElement {
        /**
         * Tracking/logging name of this test
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Tracking/reporting short description of the test
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * A test operation or assert that was performed
         */
        action: TestReportTestAction[];
    }
    /**
     * A test operation or assert that was performed
     */
    interface TestReportTestAction extends BackboneElement {
        /**
         * The operation performed
         */
        operation?: TestReportSetupActionOperation;
        /**
         * The assertion performed
         */
        assert?: TestReportSetupActionAssert;
    }
    /**
     * The results of running the series of required clean up steps
     */
    interface TestReportTeardown extends BackboneElement {
        /**
         * One or more teardown operations performed
         */
        action: TestReportTeardownAction[];
    }
    /**
     * One or more teardown operations performed
     */
    interface TestReportTeardownAction extends BackboneElement {
        /**
         * The teardown operation performed
         */
        operation: TestReportSetupActionOperation;
    }
    /**
     * Describes the results of a TestScript execution
     */
    interface TestReport extends DomainResource {
        /**
         * External identifier
         */
        identifier?: Identifier;
        /**
         * Informal name of the executed TestScript
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * completed | in-progress | waiting | stopped | entered-in-error
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Reference to the  version-specific TestScript that was executed to produce this TestReport
         */
        testScript: Reference;
        /**
         * pass | fail | pending
         */
        result: code;
        /**
         * Contains extended information for property 'result'.
         */
        _result?: Element;
        /**
         * The final score (percentage of tests passed) resulting from the execution of the TestScript
         */
        score?: decimal;
        /**
         * Contains extended information for property 'score'.
         */
        _score?: Element;
        /**
         * Name of the tester producing this report (Organization or individual)
         */
        tester?: string;
        /**
         * Contains extended information for property 'tester'.
         */
        _tester?: Element;
        /**
         * When the TestScript was executed and this TestReport was generated
         */
        issued?: dateTime;
        /**
         * Contains extended information for property 'issued'.
         */
        _issued?: Element;
        /**
         * A participant in the test execution, either the execution engine, a client, or a server
         */
        participant?: TestReportParticipant[];
        /**
         * The results of the series of required setup operations before the tests were executed
         */
        setup?: TestReportSetup;
        /**
         * A test executed from the test script
         */
        test?: TestReportTest[];
        /**
         * The results of running the series of required clean up steps
         */
        teardown?: TestReportTeardown;
    }
    /**
     * An abstract server representing a client or sender in a message exchange
     */
    interface TestScriptOrigin extends BackboneElement {
        /**
         * The index of the abstract origin server starting at 1
         */
        index: integer;
        /**
         * Contains extended information for property 'index'.
         */
        _index?: Element;
        /**
         * FHIR-Client | FHIR-SDC-FormFiller
         */
        profile: Coding;
    }
    /**
     * An abstract server representing a destination or receiver in a message exchange
     */
    interface TestScriptDestination extends BackboneElement {
        /**
         * The index of the abstract destination server starting at 1
         */
        index: integer;
        /**
         * Contains extended information for property 'index'.
         */
        _index?: Element;
        /**
         * FHIR-Server | FHIR-SDC-FormManager | FHIR-SDC-FormReceiver | FHIR-SDC-FormProcessor
         */
        profile: Coding;
    }
    /**
     * Required capability that is assumed to function correctly on the FHIR server being tested
     */
    interface TestScriptMetadata extends BackboneElement {
        /**
         * Links to the FHIR specification
         */
        link?: TestScriptMetadataLink[];
        /**
         * Capabilities  that are assumed to function correctly on the FHIR server being tested
         */
        capability: TestScriptMetadataCapability[];
    }
    /**
     * Links to the FHIR specification
     */
    interface TestScriptMetadataLink extends BackboneElement {
        /**
         * URL to the specification
         */
        url: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Short description
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
    }
    /**
     * Capabilities  that are assumed to function correctly on the FHIR server being tested
     */
    interface TestScriptMetadataCapability extends BackboneElement {
        /**
         * Are the capabilities required?
         */
        required: boolean;
        /**
         * Contains extended information for property 'required'.
         */
        _required?: Element;
        /**
         * Are the capabilities validated?
         */
        validated: boolean;
        /**
         * Contains extended information for property 'validated'.
         */
        _validated?: Element;
        /**
         * The expected capabilities of the server
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Which origin server these requirements apply to
         */
        origin?: integer[];
        /**
         * Contains extended information for property 'origin'.
         */
        _origin?: Element[];
        /**
         * Which server these requirements apply to
         */
        destination?: integer;
        /**
         * Contains extended information for property 'destination'.
         */
        _destination?: Element;
        /**
         * Links to the FHIR specification
         */
        link?: uri[];
        /**
         * Contains extended information for property 'link'.
         */
        _link?: Element[];
        /**
         * Required Capability Statement
         */
        capabilities: canonical;
        /**
         * Contains extended information for property 'capabilities'.
         */
        _capabilities?: Element;
    }
    /**
     * Fixture in the test script - by reference (uri)
     */
    interface TestScriptFixture extends BackboneElement {
        /**
         * Whether or not to implicitly create the fixture during setup
         */
        autocreate: boolean;
        /**
         * Contains extended information for property 'autocreate'.
         */
        _autocreate?: Element;
        /**
         * Whether or not to implicitly delete the fixture during teardown
         */
        autodelete: boolean;
        /**
         * Contains extended information for property 'autodelete'.
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
    interface TestScriptVariable extends BackboneElement {
        /**
         * Descriptive name for this variable
         */
        name: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Default, hard-coded, or user-defined value for this variable
         */
        defaultValue?: string;
        /**
         * Contains extended information for property 'defaultValue'.
         */
        _defaultValue?: Element;
        /**
         * Natural language description of the variable
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * The FHIRPath expression against the fixture body
         */
        expression?: string;
        /**
         * Contains extended information for property 'expression'.
         */
        _expression?: Element;
        /**
         * HTTP header field name for source
         */
        headerField?: string;
        /**
         * Contains extended information for property 'headerField'.
         */
        _headerField?: Element;
        /**
         * Hint help text for default value to enter
         */
        hint?: string;
        /**
         * Contains extended information for property 'hint'.
         */
        _hint?: Element;
        /**
         * XPath or JSONPath against the fixture body
         */
        path?: string;
        /**
         * Contains extended information for property 'path'.
         */
        _path?: Element;
        /**
         * Fixture Id of source expression or headerField within this variable
         */
        sourceId?: id;
        /**
         * Contains extended information for property 'sourceId'.
         */
        _sourceId?: Element;
    }
    /**
     * A series of required setup operations before tests are executed
     */
    interface TestScriptSetup extends BackboneElement {
        /**
         * A setup operation or assert to perform
         */
        action: TestScriptSetupAction[];
    }
    /**
     * A setup operation or assert to perform
     */
    interface TestScriptSetupAction extends BackboneElement {
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
    interface TestScriptSetupActionOperation extends BackboneElement {
        /**
         * The operation code type that will be executed
         */
        type?: Coding;
        /**
         * Resource type
         */
        resource?: code;
        /**
         * Contains extended information for property 'resource'.
         */
        _resource?: Element;
        /**
         * Tracking/logging operation label
         */
        label?: string;
        /**
         * Contains extended information for property 'label'.
         */
        _label?: Element;
        /**
         * Tracking/reporting operation description
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Mime type to accept in the payload of the response, with charset etc.
         */
        accept?: code;
        /**
         * Contains extended information for property 'accept'.
         */
        _accept?: Element;
        /**
         * Mime type of the request payload contents, with charset etc.
         */
        contentType?: code;
        /**
         * Contains extended information for property 'contentType'.
         */
        _contentType?: Element;
        /**
         * Server responding to the request
         */
        destination?: integer;
        /**
         * Contains extended information for property 'destination'.
         */
        _destination?: Element;
        /**
         * Whether or not to send the request url in encoded format
         */
        encodeRequestUrl: boolean;
        /**
         * Contains extended information for property 'encodeRequestUrl'.
         */
        _encodeRequestUrl?: Element;
        /**
         * delete | get | options | patch | post | put | head
         */
        method?: code;
        /**
         * Contains extended information for property 'method'.
         */
        _method?: Element;
        /**
         * Server initiating the request
         */
        origin?: integer;
        /**
         * Contains extended information for property 'origin'.
         */
        _origin?: Element;
        /**
         * Explicitly defined path parameters
         */
        params?: string;
        /**
         * Contains extended information for property 'params'.
         */
        _params?: Element;
        /**
         * Each operation can have one or more header elements
         */
        requestHeader?: TestScriptSetupActionOperationRequestHeader[];
        /**
         * Fixture Id of mapped request
         */
        requestId?: id;
        /**
         * Contains extended information for property 'requestId'.
         */
        _requestId?: Element;
        /**
         * Fixture Id of mapped response
         */
        responseId?: id;
        /**
         * Contains extended information for property 'responseId'.
         */
        _responseId?: Element;
        /**
         * Fixture Id of body for PUT and POST requests
         */
        sourceId?: id;
        /**
         * Contains extended information for property 'sourceId'.
         */
        _sourceId?: Element;
        /**
         * Id of fixture used for extracting the [id],  [type], and [vid] for GET requests
         */
        targetId?: id;
        /**
         * Contains extended information for property 'targetId'.
         */
        _targetId?: Element;
        /**
         * Request URL
         */
        url?: string;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
    }
    /**
     * Each operation can have one or more header elements
     */
    interface TestScriptSetupActionOperationRequestHeader extends BackboneElement {
        /**
         * HTTP header field name
         */
        field: string;
        /**
         * Contains extended information for property 'field'.
         */
        _field?: Element;
        /**
         * HTTP headerfield value
         */
        value: string;
        /**
         * Contains extended information for property 'value'.
         */
        _value?: Element;
    }
    /**
     * The assertion to perform
     */
    interface TestScriptSetupActionAssert extends BackboneElement {
        /**
         * Tracking/logging assertion label
         */
        label?: string;
        /**
         * Contains extended information for property 'label'.
         */
        _label?: Element;
        /**
         * Tracking/reporting assertion description
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * response | request
         */
        direction?: code;
        /**
         * Contains extended information for property 'direction'.
         */
        _direction?: Element;
        /**
         * Id of the source fixture to be evaluated
         */
        compareToSourceId?: string;
        /**
         * Contains extended information for property 'compareToSourceId'.
         */
        _compareToSourceId?: Element;
        /**
         * The FHIRPath expression to evaluate against the source fixture
         */
        compareToSourceExpression?: string;
        /**
         * Contains extended information for property 'compareToSourceExpression'.
         */
        _compareToSourceExpression?: Element;
        /**
         * XPath or JSONPath expression to evaluate against the source fixture
         */
        compareToSourcePath?: string;
        /**
         * Contains extended information for property 'compareToSourcePath'.
         */
        _compareToSourcePath?: Element;
        /**
         * Mime type to compare against the 'Content-Type' header
         */
        contentType?: code;
        /**
         * Contains extended information for property 'contentType'.
         */
        _contentType?: Element;
        /**
         * The FHIRPath expression to be evaluated
         */
        expression?: string;
        /**
         * Contains extended information for property 'expression'.
         */
        _expression?: Element;
        /**
         * HTTP header field name
         */
        headerField?: string;
        /**
         * Contains extended information for property 'headerField'.
         */
        _headerField?: Element;
        /**
         * Fixture Id of minimum content resource
         */
        minimumId?: string;
        /**
         * Contains extended information for property 'minimumId'.
         */
        _minimumId?: Element;
        /**
         * Perform validation on navigation links?
         */
        navigationLinks?: boolean;
        /**
         * Contains extended information for property 'navigationLinks'.
         */
        _navigationLinks?: Element;
        /**
         * equals | notEquals | in | notIn | greaterThan | lessThan | empty | notEmpty | contains | notContains | eval
         */
        operator?: code;
        /**
         * Contains extended information for property 'operator'.
         */
        _operator?: Element;
        /**
         * XPath or JSONPath expression
         */
        path?: string;
        /**
         * Contains extended information for property 'path'.
         */
        _path?: Element;
        /**
         * delete | get | options | patch | post | put | head
         */
        requestMethod?: code;
        /**
         * Contains extended information for property 'requestMethod'.
         */
        _requestMethod?: Element;
        /**
         * Request URL comparison value
         */
        requestURL?: string;
        /**
         * Contains extended information for property 'requestURL'.
         */
        _requestURL?: Element;
        /**
         * Resource type
         */
        resource?: code;
        /**
         * Contains extended information for property 'resource'.
         */
        _resource?: Element;
        /**
         * okay | created | noContent | notModified | bad | forbidden | notFound | methodNotAllowed | conflict | gone | preconditionFailed | unprocessable
         */
        response?: code;
        /**
         * Contains extended information for property 'response'.
         */
        _response?: Element;
        /**
         * HTTP response code to test
         */
        responseCode?: string;
        /**
         * Contains extended information for property 'responseCode'.
         */
        _responseCode?: Element;
        /**
         * Fixture Id of source expression or headerField
         */
        sourceId?: id;
        /**
         * Contains extended information for property 'sourceId'.
         */
        _sourceId?: Element;
        /**
         * Profile Id of validation profile reference
         */
        validateProfileId?: id;
        /**
         * Contains extended information for property 'validateProfileId'.
         */
        _validateProfileId?: Element;
        /**
         * The value to compare to
         */
        value?: string;
        /**
         * Contains extended information for property 'value'.
         */
        _value?: Element;
        /**
         * Will this assert produce a warning only on error?
         */
        warningOnly: boolean;
        /**
         * Contains extended information for property 'warningOnly'.
         */
        _warningOnly?: Element;
    }
    /**
     * A test in this script
     */
    interface TestScriptTest extends BackboneElement {
        /**
         * Tracking/logging name of this test
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Tracking/reporting short description of the test
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * A test operation or assert to perform
         */
        action: TestScriptTestAction[];
    }
    /**
     * A test operation or assert to perform
     */
    interface TestScriptTestAction extends BackboneElement {
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
    interface TestScriptTeardown extends BackboneElement {
        /**
         * One or more teardown operations to perform
         */
        action: TestScriptTeardownAction[];
    }
    /**
     * One or more teardown operations to perform
     */
    interface TestScriptTeardownAction extends BackboneElement {
        /**
         * The teardown operation to perform
         */
        operation: TestScriptSetupActionOperation;
    }
    /**
     * Describes a set of tests
     */
    interface TestScript extends DomainResource {
        /**
         * Canonical identifier for this test script, represented as a URI (globally unique)
         */
        url: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Additional identifier for the test script
         */
        identifier?: Identifier;
        /**
         * Business version of the test script
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
        /**
         * Name for this test script (computer friendly)
         */
        name: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Name for this test script (human friendly)
         */
        title?: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
        /**
         * draft | active | retired | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * For testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Contains extended information for property 'experimental'.
         */
        _experimental?: Element;
        /**
         * Date last changed
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Name of the publisher (organization or individual)
         */
        publisher?: string;
        /**
         * Contains extended information for property 'publisher'.
         */
        _publisher?: Element;
        /**
         * Contact details for the publisher
         */
        contact?: ContactDetail[];
        /**
         * Natural language description of the test script
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * The context that the content is intended to support
         */
        useContext?: UsageContext[];
        /**
         * Intended jurisdiction for test script (if applicable)
         */
        jurisdiction?: CodeableConcept[];
        /**
         * Why this test script is defined
         */
        purpose?: markdown;
        /**
         * Contains extended information for property 'purpose'.
         */
        _purpose?: Element;
        /**
         * Use and/or publishing restrictions
         */
        copyright?: markdown;
        /**
         * Contains extended information for property 'copyright'.
         */
        _copyright?: Element;
        /**
         * An abstract server representing a client or sender in a message exchange
         */
        origin?: TestScriptOrigin[];
        /**
         * An abstract server representing a destination or receiver in a message exchange
         */
        destination?: TestScriptDestination[];
        /**
         * Required capability that is assumed to function correctly on the FHIR server being tested
         */
        metadata?: TestScriptMetadata;
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
     * Content logical definition of the value set (CLD)
     */
    interface ValueSetCompose extends BackboneElement {
        /**
         * Fixed date for references with no specified version (transitive)
         */
        lockedDate?: date;
        /**
         * Contains extended information for property 'lockedDate'.
         */
        _lockedDate?: Element;
        /**
         * Whether inactive codes are in the value set
         */
        inactive?: boolean;
        /**
         * Contains extended information for property 'inactive'.
         */
        _inactive?: Element;
        /**
         * Include one or more codes from a code system or other value set(s)
         */
        include: ValueSetComposeInclude[];
        /**
         * Explicitly exclude codes from a code system or other value sets
         */
        exclude?: ValueSetComposeInclude[];
    }
    /**
     * Include one or more codes from a code system or other value set(s)
     */
    interface ValueSetComposeInclude extends BackboneElement {
        /**
         * The system the codes come from
         */
        system?: uri;
        /**
         * Contains extended information for property 'system'.
         */
        _system?: Element;
        /**
         * Specific version of the code system referred to
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
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
        /**
         * Select the contents included in this value set
         */
        valueSet?: canonical[];
        /**
         * Contains extended information for property 'valueSet'.
         */
        _valueSet?: Element[];
    }
    /**
     * A concept defined in the system
     */
    interface ValueSetComposeIncludeConcept extends BackboneElement {
        /**
         * Code or expression from system
         */
        code: code;
        /**
         * Contains extended information for property 'code'.
         */
        _code?: Element;
        /**
         * Text to display for this code for this value set in this valueset
         */
        display?: string;
        /**
         * Contains extended information for property 'display'.
         */
        _display?: Element;
        /**
         * Additional representations for this concept
         */
        designation?: ValueSetComposeIncludeConceptDesignation[];
    }
    /**
     * Additional representations for this concept
     */
    interface ValueSetComposeIncludeConceptDesignation extends BackboneElement {
        /**
         * Human language of the designation
         */
        language?: code;
        /**
         * Contains extended information for property 'language'.
         */
        _language?: Element;
        /**
         * Types of uses of designations
         */
        use?: Coding;
        /**
         * The text value for this designation
         */
        value: string;
        /**
         * Contains extended information for property 'value'.
         */
        _value?: Element;
    }
    /**
     * Select codes/concepts by their properties (including relationships)
     */
    interface ValueSetComposeIncludeFilter extends BackboneElement {
        /**
         * A property/filter defined by the code system
         */
        property: code;
        /**
         * Contains extended information for property 'property'.
         */
        _property?: Element;
        /**
         * = | is-a | descendent-of | is-not-a | regex | in | not-in | generalizes | exists
         */
        op: code;
        /**
         * Contains extended information for property 'op'.
         */
        _op?: Element;
        /**
         * Code from the system, or regex criteria, or boolean value for exists
         */
        value: string;
        /**
         * Contains extended information for property 'value'.
         */
        _value?: Element;
    }
    /**
     * Used when the value set is "expanded"
     */
    interface ValueSetExpansion extends BackboneElement {
        /**
         * Identifies the value set expansion (business identifier)
         */
        identifier?: uri;
        /**
         * Contains extended information for property 'identifier'.
         */
        _identifier?: Element;
        /**
         * Time ValueSet expansion happened
         */
        timestamp: dateTime;
        /**
         * Contains extended information for property 'timestamp'.
         */
        _timestamp?: Element;
        /**
         * Total number of codes in the expansion
         */
        total?: integer;
        /**
         * Contains extended information for property 'total'.
         */
        _total?: Element;
        /**
         * Offset at which this resource starts
         */
        offset?: integer;
        /**
         * Contains extended information for property 'offset'.
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
    interface ValueSetExpansionParameter extends BackboneElement {
        /**
         * Name as assigned by the client or server
         */
        name: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Value of the named parameter
         */
        valueString?: string;
        /**
         * Contains extended information for property 'valueString'.
         */
        _valueString?: Element;
        /**
         * Value of the named parameter
         */
        valueBoolean?: boolean;
        /**
         * Contains extended information for property 'valueBoolean'.
         */
        _valueBoolean?: Element;
        /**
         * Value of the named parameter
         */
        valueInteger?: integer;
        /**
         * Contains extended information for property 'valueInteger'.
         */
        _valueInteger?: Element;
        /**
         * Value of the named parameter
         */
        valueDecimal?: decimal;
        /**
         * Contains extended information for property 'valueDecimal'.
         */
        _valueDecimal?: Element;
        /**
         * Value of the named parameter
         */
        valueUri?: uri;
        /**
         * Contains extended information for property 'valueUri'.
         */
        _valueUri?: Element;
        /**
         * Value of the named parameter
         */
        valueCode?: code;
        /**
         * Contains extended information for property 'valueCode'.
         */
        _valueCode?: Element;
        /**
         * Value of the named parameter
         */
        valueDateTime?: dateTime;
        /**
         * Contains extended information for property 'valueDateTime'.
         */
        _valueDateTime?: Element;
    }
    /**
     * Codes in the value set
     */
    interface ValueSetExpansionContains extends BackboneElement {
        /**
         * System value for the code
         */
        system?: uri;
        /**
         * Contains extended information for property 'system'.
         */
        _system?: Element;
        /**
         * If user cannot select this entry
         */
        abstract?: boolean;
        /**
         * Contains extended information for property 'abstract'.
         */
        _abstract?: Element;
        /**
         * If concept is inactive in the code system
         */
        inactive?: boolean;
        /**
         * Contains extended information for property 'inactive'.
         */
        _inactive?: Element;
        /**
         * Version in which this code/display is defined
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
        /**
         * Code - if blank, this is not a selectable code
         */
        code?: code;
        /**
         * Contains extended information for property 'code'.
         */
        _code?: Element;
        /**
         * User display for the concept
         */
        display?: string;
        /**
         * Contains extended information for property 'display'.
         */
        _display?: Element;
        /**
         * Additional representations for this item
         */
        designation?: ValueSetComposeIncludeConceptDesignation[];
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
         * Canonical identifier for this value set, represented as a URI (globally unique)
         */
        url?: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Additional identifier for the value set (business identifier)
         */
        identifier?: Identifier[];
        /**
         * Business version of the value set
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
        /**
         * Name for this value set (computer friendly)
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Name for this value set (human friendly)
         */
        title?: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
        /**
         * draft | active | retired | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * For testing purposes, not real usage
         */
        experimental?: boolean;
        /**
         * Contains extended information for property 'experimental'.
         */
        _experimental?: Element;
        /**
         * Date last changed
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Name of the publisher (organization or individual)
         */
        publisher?: string;
        /**
         * Contains extended information for property 'publisher'.
         */
        _publisher?: Element;
        /**
         * Contact details for the publisher
         */
        contact?: ContactDetail[];
        /**
         * Natural language description of the value set
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * The context that the content is intended to support
         */
        useContext?: UsageContext[];
        /**
         * Intended jurisdiction for value set (if applicable)
         */
        jurisdiction?: CodeableConcept[];
        /**
         * Indicates whether or not any change to the content logical definition may occur
         */
        immutable?: boolean;
        /**
         * Contains extended information for property 'immutable'.
         */
        _immutable?: Element;
        /**
         * Why this value set is defined
         */
        purpose?: markdown;
        /**
         * Contains extended information for property 'purpose'.
         */
        _purpose?: Element;
        /**
         * Use and/or publishing restrictions
         */
        copyright?: markdown;
        /**
         * Contains extended information for property 'copyright'.
         */
        _copyright?: Element;
        /**
         * Content logical definition of the value set (CLD)
         */
        compose?: ValueSetCompose;
        /**
         * Used when the value set is "expanded"
         */
        expansion?: ValueSetExpansion;
    }
    /**
     * Information about the primary source(s) involved in validation
     */
    interface VerificationResultPrimarySource extends BackboneElement {
        /**
         * Reference to the primary source
         */
        who?: Reference;
        /**
         * Type of primary source (License Board; Primary Education; Continuing Education; Postal Service; Relationship owner; Registration Authority; legal source; issuing source; authoritative source)
         */
        type?: CodeableConcept[];
        /**
         * Method for exchanging information with the primary source
         */
        communicationMethod?: CodeableConcept[];
        /**
         * successful | failed | unknown
         */
        validationStatus?: CodeableConcept;
        /**
         * When the target was validated against the primary source
         */
        validationDate?: dateTime;
        /**
         * Contains extended information for property 'validationDate'.
         */
        _validationDate?: Element;
        /**
         * yes | no | undetermined
         */
        canPushUpdates?: CodeableConcept;
        /**
         * specific | any | source
         */
        pushTypeAvailable?: CodeableConcept[];
    }
    /**
     * Information about the entity attesting to information
     */
    interface VerificationResultAttestation extends BackboneElement {
        /**
         * The individual or organization attesting to information
         */
        who?: Reference;
        /**
         * When the who is asserting on behalf of another (organization or individual)
         */
        onBehalfOf?: Reference;
        /**
         * The method by which attested information was submitted/retrieved
         */
        communicationMethod?: CodeableConcept;
        /**
         * The date the information was attested to
         */
        date?: date;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * A digital identity certificate associated with the attestation source
         */
        sourceIdentityCertificate?: string;
        /**
         * Contains extended information for property 'sourceIdentityCertificate'.
         */
        _sourceIdentityCertificate?: Element;
        /**
         * A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source
         */
        proxyIdentityCertificate?: string;
        /**
         * Contains extended information for property 'proxyIdentityCertificate'.
         */
        _proxyIdentityCertificate?: Element;
        /**
         * Proxy signature
         */
        proxySignature?: Signature;
        /**
         * Attester signature
         */
        sourceSignature?: Signature;
    }
    /**
     * Information about the entity validating information
     */
    interface VerificationResultValidator extends BackboneElement {
        /**
         * Reference to the organization validating information
         */
        organization: Reference;
        /**
         * A digital identity certificate associated with the validator
         */
        identityCertificate?: string;
        /**
         * Contains extended information for property 'identityCertificate'.
         */
        _identityCertificate?: Element;
        /**
         * Validator signature
         */
        attestationSignature?: Signature;
    }
    /**
     * Describes validation requirements, source(s), status and dates for one or more elements
     */
    interface VerificationResult extends DomainResource {
        /**
         * A resource that was validated
         */
        target?: Reference[];
        /**
         * The fhirpath location(s) within the resource that was validated
         */
        targetLocation?: string[];
        /**
         * Contains extended information for property 'targetLocation'.
         */
        _targetLocation?: Element[];
        /**
         * none | initial | periodic
         */
        need?: CodeableConcept;
        /**
         * attested | validated | in-process | req-revalid | val-fail | reval-fail
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * When the validation status was updated
         */
        statusDate?: dateTime;
        /**
         * Contains extended information for property 'statusDate'.
         */
        _statusDate?: Element;
        /**
         * nothing | primary | multiple
         */
        validationType?: CodeableConcept;
        /**
         * The primary process by which the target is validated (edit check; value set; primary source; multiple sources; standalone; in context)
         */
        validationProcess?: CodeableConcept[];
        /**
         * Frequency of revalidation
         */
        frequency?: Timing;
        /**
         * The date/time validation was last completed (including failed validations)
         */
        lastPerformed?: dateTime;
        /**
         * Contains extended information for property 'lastPerformed'.
         */
        _lastPerformed?: Element;
        /**
         * The date when target is next validated, if appropriate
         */
        nextScheduled?: date;
        /**
         * Contains extended information for property 'nextScheduled'.
         */
        _nextScheduled?: Element;
        /**
         * fatal | warn | rec-only | none
         */
        failureAction?: CodeableConcept;
        /**
         * Information about the primary source(s) involved in validation
         */
        primarySource?: VerificationResultPrimarySource[];
        /**
         * Information about the entity attesting to information
         */
        attestation?: VerificationResultAttestation;
        /**
         * Information about the entity validating information
         */
        validator?: VerificationResultValidator[];
    }
    /**
     * Vision lens authorization
     */
    interface VisionPrescriptionLensSpecification extends BackboneElement {
        /**
         * Product to be supplied
         */
        product: CodeableConcept;
        /**
         * right | left
         */
        eye: code;
        /**
         * Contains extended information for property 'eye'.
         */
        _eye?: Element;
        /**
         * Power of the lens
         */
        sphere?: decimal;
        /**
         * Contains extended information for property 'sphere'.
         */
        _sphere?: Element;
        /**
         * Lens power for astigmatism
         */
        cylinder?: decimal;
        /**
         * Contains extended information for property 'cylinder'.
         */
        _cylinder?: Element;
        /**
         * Lens meridian which contain no power for astigmatism
         */
        axis?: integer;
        /**
         * Contains extended information for property 'axis'.
         */
        _axis?: Element;
        /**
         * Eye alignment compensation
         */
        prism?: VisionPrescriptionLensSpecificationPrism[];
        /**
         * Added power for multifocal levels
         */
        add?: decimal;
        /**
         * Contains extended information for property 'add'.
         */
        _add?: Element;
        /**
         * Contact lens power
         */
        power?: decimal;
        /**
         * Contains extended information for property 'power'.
         */
        _power?: Element;
        /**
         * Contact lens back curvature
         */
        backCurve?: decimal;
        /**
         * Contains extended information for property 'backCurve'.
         */
        _backCurve?: Element;
        /**
         * Contact lens diameter
         */
        diameter?: decimal;
        /**
         * Contains extended information for property 'diameter'.
         */
        _diameter?: Element;
        /**
         * Lens wear duration
         */
        duration?: Quantity;
        /**
         * Color required
         */
        color?: string;
        /**
         * Contains extended information for property 'color'.
         */
        _color?: Element;
        /**
         * Brand required
         */
        brand?: string;
        /**
         * Contains extended information for property 'brand'.
         */
        _brand?: Element;
        /**
         * Notes for coatings
         */
        note?: Annotation[];
    }
    /**
     * Eye alignment compensation
     */
    interface VisionPrescriptionLensSpecificationPrism extends BackboneElement {
        /**
         * Amount of adjustment
         */
        amount: decimal;
        /**
         * Contains extended information for property 'amount'.
         */
        _amount?: Element;
        /**
         * up | down | in | out
         */
        base: code;
        /**
         * Contains extended information for property 'base'.
         */
        _base?: Element;
    }
    /**
     * Prescription for vision correction products for a patient
     */
    interface VisionPrescription extends DomainResource {
        /**
         * Business Identifier for vision prescription
         */
        identifier?: Identifier[];
        /**
         * active | cancelled | draft | entered-in-error
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Response creation date
         */
        created: dateTime;
        /**
         * Contains extended information for property 'created'.
         */
        _created?: Element;
        /**
         * Who prescription is for
         */
        patient: Reference;
        /**
         * Created during encounter / admission / stay
         */
        encounter?: Reference;
        /**
         * When prescription was authorized
         */
        dateWritten: dateTime;
        /**
         * Contains extended information for property 'dateWritten'.
         */
        _dateWritten?: Element;
        /**
         * Who authorized the vision prescription
         */
        prescriber: Reference;
        /**
         * Vision lens authorization
         */
        lensSpecification: VisionPrescriptionLensSpecification[];
    }
    /**
     * Reference to a sub-type of ResourceBase. This is needed for stricter object literal typing introduced in TypeScript 1.6.
     */
    type Resource = (DomainResource|Account|ActivityDefinition|AdverseEvent|AllergyIntolerance|Appointment|AppointmentResponse|AuditEvent|Basic|BiologicallyDerivedProduct|BodyStructure|CapabilityStatement|CarePlan|CareTeam|CatalogEntry|ChargeItem|ChargeItemDefinition|Claim|ClaimResponse|ClinicalImpression|CodeSystem|Communication|CommunicationRequest|CompartmentDefinition|Composition|ConceptMap|Condition|Consent|Contract|Coverage|CoverageEligibilityRequest|CoverageEligibilityResponse|DetectedIssue|Device|DeviceDefinition|DeviceMetric|DeviceRequest|DeviceUseStatement|DiagnosticReport|DocumentManifest|DocumentReference|EffectEvidenceSynthesis|Encounter|Endpoint|EnrollmentRequest|EnrollmentResponse|EpisodeOfCare|EventDefinition|Evidence|EvidenceVariable|ExampleScenario|ExplanationOfBenefit|FamilyMemberHistory|Flag|Goal|GraphDefinition|Group|GuidanceResponse|HealthcareService|ImagingStudy|Immunization|ImmunizationEvaluation|ImmunizationRecommendation|ImplementationGuide|InsurancePlan|Invoice|Library|Linkage|List|Location|Measure|MeasureReport|Media|Medication|MedicationAdministration|MedicationDispense|MedicationKnowledge|MedicationRequest|MedicationStatement|MedicinalProduct|MedicinalProductAuthorization|MedicinalProductContraindication|MedicinalProductIndication|MedicinalProductIngredient|MedicinalProductInteraction|MedicinalProductManufactured|MedicinalProductPackaged|MedicinalProductPharmaceutical|MedicinalProductUndesirableEffect|MessageDefinition|MessageHeader|MolecularSequence|NamingSystem|NutritionOrder|Observation|ObservationDefinition|OperationDefinition|OperationOutcome|Organization|OrganizationAffiliation|Patient|PaymentNotice|PaymentReconciliation|Person|PlanDefinition|Practitioner|PractitionerRole|Procedure|Provenance|Questionnaire|QuestionnaireResponse|RelatedPerson|RequestGroup|ResearchDefinition|ResearchElementDefinition|ResearchStudy|ResearchSubject|RiskAssessment|RiskEvidenceSynthesis|Schedule|SearchParameter|ServiceRequest|Slot|Specimen|SpecimenDefinition|StructureDefinition|StructureMap|Subscription|Substance|SubstanceNucleicAcid|SubstancePolymer|SubstanceProtein|SubstanceReferenceInformation|SubstanceSourceMaterial|SubstanceSpecification|SupplyDelivery|SupplyRequest|Task|TerminologyCapabilities|TestReport|TestScript|ValueSet|VerificationResult|VisionPrescription|Binary|Bundle|Parameters);
}
