// Type definitions for FHIR Release 3 (STU)
// Project: http://hl7.org/fhir/index.html
// Definitions by: Artifact Health <https://www.artifacthealth.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare module fhir {
    /**
     * Any combination of letters, numerals, "-" and ".", with a length limit of 64 characters.  (This might be an integer, an unprefixed OID, UUID or any other identifier pattern that meets these constraints.)  Ids are case-insensitive.
     */
    type id = string;
    /**
     * String of characters used to identify a name or a resource
     */
    type uri = string;
    /**
     * A stream of bytes
     */
    type base64Binary = string;
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
     * An instant in time - known at least to the second
     */
    type instant = string;
    /**
     * A whole number
     */
    type integer = number;
    /**
     * A string that may contain markdown syntax for optional processing by a mark down presentation engine
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
         * home | work | temp | old - purpose of this address
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
         * usual | official | temp | secondary (If known)
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
         * The annotation  - text content
         */
        text: string;
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
        url?: uri;
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
    interface Money extends Quantity {
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
        data: string;
        /**
         * Contains extended information for property 'data'.
         */
        _data?: Element;
    }
    /**
     * A digital Signature - XML DigSig, JWT, Graphical image of signature, etc.
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
        whoUri?: uri;
        /**
         * Contains extended information for property 'whoUri'.
         */
        _whoUri?: Element;
        /**
         * Who signed
         */
        whoReference?: Reference;
        /**
         * The party represented
         */
        onBehalfOfUri?: uri;
        /**
         * Contains extended information for property 'onBehalfOfUri'.
         */
        _onBehalfOfUri?: Element;
        /**
         * The party represented
         */
        onBehalfOfReference?: Reference;
        /**
         * The technical format of the signature
         */
        contentType?: code;
        /**
         * Contains extended information for property 'contentType'.
         */
        _contentType?: Element;
        /**
         * The actual signature content (XML DigSig. JWT, picture, etc.)
         */
        blob?: base64Binary;
        /**
         * Contains extended information for property 'blob'.
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
        count?: integer;
        /**
         * Contains extended information for property 'count'.
         */
        _count?: Element;
        /**
         * Maximum number of times to repeat
         */
        countMax?: integer;
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
        frequency?: integer;
        /**
         * Contains extended information for property 'frequency'.
         */
        _frequency?: Element;
        /**
         * Event occurs up to frequencyMax times per period
         */
        frequencyMax?: integer;
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
         * Regular life events the event is tied to
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
    interface Timing extends Element {
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
         * BID | TID | QID | AM | PM | QD | QOD | Q4H | Q6H +
         */
        code?: CodeableConcept;
    }
    /**
     * Optional Extensions Element
     */
    interface Extension extends Element {
        /**
         * identifies the meaning of the extension
         */
        url: uri;
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
         * xml:id (or equivalent in JSON)
         */
        id?: string;
        /**
         * Contains extended information for property 'id'.
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
         * Profiles this resource claims to conform to
         */
        profile?: uri[];
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
        id?: id;
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
     * A human-readable formatted text, including images
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
         * Additional Content defined by implementations
         */
        extension?: Extension[];
        /**
         * Extensions that cannot be ignored
         */
        modifierExtension?: Extension[];
    }
    /**
     * Base for elements defined inside a resource
     */
    interface BackboneElement extends Element {
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
         * The party(s) that are responsible for covering the payment of this account
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
     * Responsible for the account
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
         * Guarrantee account during
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
         * active | inactive | entered-in-error
         */
        status?: code;
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
         * What is account tied to?
         */
        subject?: Reference;
        /**
         * Transaction window
         */
        period?: Period;
        /**
         * Time window that transactions may be posted to this account
         */
        active?: Period;
        /**
         * How much is in account?
         */
        balance?: Money;
        /**
         * The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account
         */
        coverage?: AccountCoverage[];
        /**
         * Who is responsible?
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
         * Responsible for the account
         */
        guarantor?: AccountGuarantor[];
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
        citation?: string;
        /**
         * Contains extended information for property 'citation'.
         */
        _citation?: Element;
        /**
         * Where the artifact can be accessed
         */
        url?: uri;
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
        resource?: Reference;
    }
    /**
     * Who should participate in the action
     */
    interface ActivityDefinitionParticipant extends BackboneElement {
        /**
         * patient | practitioner | related-person
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * E.g. Nurse, Surgeon, Parent, etc
         */
        role?: CodeableConcept;
    }
    /**
     * How the medication is/was taken or should be taken
     */
    interface Dosage extends Element {
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
         * Supplemental instruction - e.g. "with meals"
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
         * Amount of medication per dose
         */
        doseRange?: Range;
        /**
         * Amount of medication per dose
         */
        doseQuantity?: Quantity;
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
     * Dynamic aspects of the definition
     */
    interface ActivityDefinitionDynamicValue extends BackboneElement {
        /**
         * Natural language description of the dynamic value
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * The path to the element to be set dynamically
         */
        path?: string;
        /**
         * Contains extended information for property 'path'.
         */
        _path?: Element;
        /**
         * Language of the expression
         */
        language?: string;
        /**
         * Contains extended information for property 'language'.
         */
        _language?: Element;
        /**
         * An expression that provides the dynamic value for the customization
         */
        expression?: string;
        /**
         * Contains extended information for property 'expression'.
         */
        _expression?: Element;
    }
    /**
     * The definition of a specific activity to be taken, independent of any particular patient or context
     */
    interface ActivityDefinition extends DomainResource {
        /**
         * Logical URI to reference this activity definition (globally unique)
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
         * Date this was last changed
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
         * Natural language description of the activity definition
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Why this activity definition is defined
         */
        purpose?: markdown;
        /**
         * Contains extended information for property 'purpose'.
         */
        _purpose?: Element;
        /**
         * Describes the clinical usage of the asset
         */
        usage?: string;
        /**
         * Contains extended information for property 'usage'.
         */
        _usage?: Element;
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
         * Context the content is intended to support
         */
        useContext?: UsageContext[];
        /**
         * Intended jurisdiction for activity definition (if applicable)
         */
        jurisdiction?: CodeableConcept[];
        /**
         * E.g. Education, Treatment, Assessment, etc
         */
        topic?: CodeableConcept[];
        /**
         * A content contributor
         */
        contributor?: Contributor[];
        /**
         * Contact details for the publisher
         */
        contact?: ContactDetail[];
        /**
         * Use and/or publishing restrictions
         */
        copyright?: markdown;
        /**
         * Contains extended information for property 'copyright'.
         */
        _copyright?: Element;
        /**
         * Additional documentation, citations, etc
         */
        relatedArtifact?: RelatedArtifact[];
        /**
         * Logic used by the asset
         */
        library?: Reference[];
        /**
         * Kind of resource
         */
        kind?: code;
        /**
         * Contains extended information for property 'kind'.
         */
        _kind?: Element;
        /**
         * Detail type of activity
         */
        code?: CodeableConcept;
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
        timingPeriod?: Period;
        /**
         * When activity is to occur
         */
        timingRange?: Range;
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
         * Transform to apply the template
         */
        transform?: Reference;
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
         * causality1 | causality2
         */
        causality?: code;
        /**
         * Contains extended information for property 'causality'.
         */
        _causality?: Element;
        /**
         * assess1 | assess2
         */
        causalityAssessment?: CodeableConcept;
        /**
         * AdverseEvent.suspectEntity.causalityProductRelatedness
         */
        causalityProductRelatedness?: string;
        /**
         * Contains extended information for property 'causalityProductRelatedness'.
         */
        _causalityProductRelatedness?: Element;
        /**
         * method1 | method2
         */
        causalityMethod?: CodeableConcept;
        /**
         * AdverseEvent.suspectEntity.causalityAuthor
         */
        causalityAuthor?: Reference;
        /**
         * result1 | result2
         */
        causalityResult?: CodeableConcept;
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
         * AE | PAE
         * An adverse event is an event that caused harm to a patient,  an adverse reaction is a something that is a subject-specific event that is a result of an exposure to a medication, food, device or environmental substance, a potential adverse event is something that occurred and that could have caused harm to a patient but did not
         */
        category?: code;
        /**
         * Contains extended information for property 'category'.
         */
        _category?: Element;
        /**
         * actual | potential
         */
        type?: CodeableConcept;
        /**
         * Subject or group impacted by event
         */
        subject?: Reference;
        /**
         * When the event occurred
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Adverse Reaction Events linked to exposure to substance
         */
        reaction?: Reference[];
        /**
         * Location where adverse event occurred
         */
        location?: Reference;
        /**
         * Mild | Moderate | Severe
         */
        seriousness?: CodeableConcept;
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
        eventParticipant?: Reference;
        /**
         * Description of the adverse event
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
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
        clinicalStatus?: code;
        /**
         * Contains extended information for property 'clinicalStatus'.
         */
        _clinicalStatus?: Element;
        /**
         * unconfirmed | confirmed | refuted | entered-in-error
         */
        verificationStatus: code;
        /**
         * Contains extended information for property 'verificationStatus'.
         */
        _verificationStatus?: Element;
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
         * Date record was believed accurate
         */
        assertedDate?: dateTime;
        /**
         * Contains extended information for property 'assertedDate'.
         */
        _assertedDate?: Element;
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
         * proposed | pending | booked | arrived | fulfilled | cancelled | noshow | entered-in-error
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * A broad categorisation of the service that is to be performed during this appointment
         */
        serviceCategory?: CodeableConcept;
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
         * Reason this appointment is scheduled
         */
        reason?: CodeableConcept[];
        /**
         * Reason the appointment is to takes place (resource)
         */
        indication?: Reference[];
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
         * The ReferralRequest provided as information to allocate to the Encounter
         */
        incomingReferral?: Reference[];
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
         * Person, Location/HealthcareService or Device
         */
        actor?: Reference;
        /**
         * accepted | declined | tentative | in-process | completed | needs-action | entered-in-error
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
         * Agent role in the event
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
         * Contains extended information for property 'altId'.
         */
        _altId?: Element;
        /**
         * Human-meaningful name for the agent
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
        identifier: Identifier;
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
         * Specific instance of object
         */
        identifier?: Identifier;
        /**
         * Specific instance of resource
         */
        reference?: Reference;
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
        value: base64Binary;
        /**
         * Contains extended information for property 'value'.
         */
        _value?: Element;
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
         * Time when the event occurred on source
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
         * Access Control Management
         */
        securityContext?: Reference;
        /**
         * The actual content
         */
        content: base64Binary;
        /**
         * Contains extended information for property 'content'.
         */
        _content?: Element;
    }
    /**
     * Specific and identified anatomical location
     */
    interface BodySite extends DomainResource {
        /**
         * Bodysite identifier
         */
        identifier?: Identifier[];
        /**
         * Whether this body site record is in active use
         */
        active?: boolean;
        /**
         * Contains extended information for property 'active'.
         */
        _active?: Element;
        /**
         * Named anatomical location
         */
        code?: CodeableConcept;
        /**
         * Modification to location code
         */
        qualifier?: CodeableConcept[];
        /**
         * Anatomical location description
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
     * Entry in the bundle - will have a resource, or information
     */
    interface BundleEntry extends BackboneElement {
        /**
         * Links related to this entry
         */
        link?: BundleLink[];
        /**
         * Absolute URL for resource (server address, or UUID/OID)
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
     * Transaction Related Information
     */
    interface BundleEntryRequest extends BackboneElement {
        /**
         * GET | POST | PUT | DELETE
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
         * For managing update contention
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
     * Transaction Related Information
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
         * The location, if the operation returns a location
         */
        location?: uri;
        /**
         * Contains extended information for property 'location'.
         */
        _location?: Element;
        /**
         * The etag for the resource (if relevant)
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
         * Entry in the bundle - will have a resource, or information
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
         * Date this version released
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
        url?: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
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
        documentation?: string;
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
         * Definition of an operation or a custom query
         */
        operation?: CapabilityStatementRestOperation[];
        /**
         * Compartments served/used by system
         */
        compartment?: uri[];
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
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Certificates associated with security profiles
         */
        certificate?: CapabilityStatementRestSecurityCertificate[];
    }
    /**
     * Certificates associated with security profiles
     */
    interface CapabilityStatementRestSecurityCertificate extends BackboneElement {
        /**
         * Mime type for certificates
         */
        type?: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * Actual certificate
         */
        blob?: base64Binary;
        /**
         * Contains extended information for property 'blob'.
         */
        _blob?: Element;
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
        profile?: Reference;
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
        interaction: CapabilityStatementRestResourceInteraction[];
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
        documentation?: string;
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
        definition?: uri;
        /**
         * Contains extended information for property 'definition'.
         */
        _definition?: Element;
        /**
         * number | date | string | token | reference | composite | quantity | uri
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * Server-specific usage
         */
        documentation?: string;
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
        documentation?: string;
        /**
         * Contains extended information for property 'documentation'.
         */
        _documentation?: Element;
    }
    /**
     * Definition of an operation or a custom query
     */
    interface CapabilityStatementRestOperation extends BackboneElement {
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
        definition: Reference;
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
        documentation?: string;
        /**
         * Contains extended information for property 'documentation'.
         */
        _documentation?: Element;
        /**
         * Messages supported by this system
         */
        supportedMessage?: CapabilityStatementMessagingSupportedMessage[];
        /**
         * Declare support for this event
         */
        event?: CapabilityStatementMessagingEvent[];
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
        address: uri;
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
        definition: Reference;
    }
    /**
     * Declare support for this event
     */
    interface CapabilityStatementMessagingEvent extends BackboneElement {
        /**
         * Event type
         */
        code: Coding;
        /**
         * Consequence | Currency | Notification
         */
        category?: code;
        /**
         * Contains extended information for property 'category'.
         */
        _category?: Element;
        /**
         * sender | receiver
         */
        mode: code;
        /**
         * Contains extended information for property 'mode'.
         */
        _mode?: Element;
        /**
         * Resource that's focus of message
         */
        focus: code;
        /**
         * Contains extended information for property 'focus'.
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
         * Contains extended information for property 'documentation'.
         */
        _documentation?: Element;
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
        documentation?: string;
        /**
         * Contains extended information for property 'documentation'.
         */
        _documentation?: Element;
        /**
         * Constraint on a resource used in the document
         */
        profile: Reference;
    }
    /**
     * A statement of system capabilities
     */
    interface CapabilityStatement extends DomainResource {
        /**
         * Logical URI to reference this capability statement (globally unique)
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
         * Date this was last changed
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
         * Context the content is intended to support
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
        instantiates?: uri[];
        /**
         * Contains extended information for property 'instantiates'.
         */
        _instantiates?: Element[];
        /**
         * Software that is covered by this capability statement
         */
        software?: CapabilityStatementSoftware;
        /**
         * If this describes a specific instance
         */
        implementation?: CapabilityStatementImplementation;
        /**
         * FHIR Version the system uses
         */
        fhirVersion: id;
        /**
         * Contains extended information for property 'fhirVersion'.
         */
        _fhirVersion?: Element;
        /**
         * no | extensions | elements | both
         */
        acceptUnknown: code;
        /**
         * Contains extended information for property 'acceptUnknown'.
         */
        _acceptUnknown?: Element;
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
        implementationGuide?: uri[];
        /**
         * Contains extended information for property 'implementationGuide'.
         */
        _implementationGuide?: Element[];
        /**
         * Profiles for use cases supported
         */
        profile?: Reference[];
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
         * diet | drug | encounter | observation | procedure | supply | other
         */
        category?: CodeableConcept;
        /**
         * Protocol or definition
         */
        definition?: Reference;
        /**
         * Detail type of activity
         */
        code?: CodeableConcept;
        /**
         * Why activity should be done or why activity was prohibited
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
         * not-started | scheduled | in-progress | on-hold | completed | cancelled | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Reason for current status
         */
        statusReason?: string;
        /**
         * Contains extended information for property 'statusReason'.
         */
        _statusReason?: Element;
        /**
         * Do NOT do
         */
        prohibited?: boolean;
        /**
         * Contains extended information for property 'prohibited'.
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
         * Protocol or definition
         */
        definition?: Reference[];
        /**
         * Fulfills care plan
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
         * draft | active | suspended | completed | entered-in-error | cancelled | unknown
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
         * Human-friendly name for the CarePlan
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
         * Who care plan is for
         */
        subject: Reference;
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
        role?: CodeableConcept;
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
         * Encounter or episode associated with CareTeam
         */
        context?: Reference;
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
         * Comments made about the CareTeam
         */
        note?: Annotation[];
    }
    /**
     * Who performed charged service
     */
    interface ChargeItemParticipant extends BackboneElement {
        /**
         * What type of performance was done
         */
        role?: CodeableConcept;
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
        identifier?: Identifier;
        /**
         * Defining information about the code of this charge item
         */
        definition?: uri[];
        /**
         * Contains extended information for property 'definition'.
         */
        _definition?: Element[];
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
        participant?: ChargeItemParticipant[];
        /**
         * Organization providing the charged sevice
         */
        performingOrganization?: Reference;
        /**
         * Organization requesting the charged service
         */
        requestingOrganization?: Reference;
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
         * Account to place this charge
         */
        account?: Reference[];
        /**
         * Comments made about the ChargeItem
         */
        note?: Annotation[];
        /**
         * Further information supporting the this charge
         */
        supportingInformation?: Reference[];
    }
    /**
     * Related Claims which may be revelant to processing this claimn
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
         * Related file or case reference
         */
        reference?: Identifier;
    }
    /**
     * Party to be paid any benefits payable
     */
    interface ClaimPayee extends BackboneElement {
        /**
         * Type of party: Subscriber, Provider, other
         */
        type: CodeableConcept;
        /**
         * organization | patient | practitioner | relatedperson
         */
        resourceType?: Coding;
        /**
         * Party to receive the payable
         */
        party?: Reference;
    }
    /**
     * Members of the care team
     */
    interface ClaimCareTeam extends BackboneElement {
        /**
         * Number to covey order of careTeam
         */
        sequence: positiveInt;
        /**
         * Contains extended information for property 'sequence'.
         */
        _sequence?: Element;
        /**
         * Provider individual or organization
         */
        provider: Reference;
        /**
         * Billing provider
         */
        responsible?: boolean;
        /**
         * Contains extended information for property 'responsible'.
         */
        _responsible?: Element;
        /**
         * Role on the team
         */
        role?: CodeableConcept;
        /**
         * Type, classification or Specialization
         */
        qualification?: CodeableConcept;
    }
    /**
     * Exceptions, special considerations, the condition, situation, prior or concurrent issues
     */
    interface ClaimInformation extends BackboneElement {
        /**
         * Information instance identifier
         */
        sequence: positiveInt;
        /**
         * Contains extended information for property 'sequence'.
         */
        _sequence?: Element;
        /**
         * General class of information
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
         * Additional Data or supporting information
         */
        valueString?: string;
        /**
         * Contains extended information for property 'valueString'.
         */
        _valueString?: Element;
        /**
         * Additional Data or supporting information
         */
        valueQuantity?: Quantity;
        /**
         * Additional Data or supporting information
         */
        valueAttachment?: Attachment;
        /**
         * Additional Data or supporting information
         */
        valueReference?: Reference;
        /**
         * Reason associated with the information
         */
        reason?: CodeableConcept;
    }
    /**
     * List of Diagnosis
     */
    interface ClaimDiagnosis extends BackboneElement {
        /**
         * Number to covey order of diagnosis
         */
        sequence: positiveInt;
        /**
         * Contains extended information for property 'sequence'.
         */
        _sequence?: Element;
        /**
         * Patient's diagnosis
         */
        diagnosisCodeableConcept?: CodeableConcept;
        /**
         * Patient's diagnosis
         */
        diagnosisReference?: Reference;
        /**
         * Timing or nature of the diagnosis
         */
        type?: CodeableConcept[];
        /**
         * Package billing code
         */
        packageCode?: CodeableConcept;
    }
    /**
     * Procedures performed
     */
    interface ClaimProcedure extends BackboneElement {
        /**
         * Procedure sequence for reference
         */
        sequence: positiveInt;
        /**
         * Contains extended information for property 'sequence'.
         */
        _sequence?: Element;
        /**
         * When the procedure was performed
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Patient's list of procedures performed
         */
        procedureCodeableConcept?: CodeableConcept;
        /**
         * Patient's list of procedures performed
         */
        procedureReference?: Reference;
    }
    /**
     * Insurance or medical plan
     */
    interface ClaimInsurance extends BackboneElement {
        /**
         * Service instance identifier
         */
        sequence: positiveInt;
        /**
         * Contains extended information for property 'sequence'.
         */
        _sequence?: Element;
        /**
         * Is the focal Coverage
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
         * Business agreement
         */
        businessArrangement?: string;
        /**
         * Contains extended information for property 'businessArrangement'.
         */
        _businessArrangement?: Element;
        /**
         * Pre-Authorization/Determination Reference
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
     * Details about an accident
     */
    interface ClaimAccident extends BackboneElement {
        /**
         * When the accident occurred
         * see information codes
         * see information codes
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
         * Accident Place
         */
        locationAddress?: Address;
        /**
         * Accident Place
         */
        locationReference?: Reference;
    }
    /**
     * Goods and Services
     */
    interface ClaimItem extends BackboneElement {
        /**
         * Service instance
         */
        sequence: positiveInt;
        /**
         * Contains extended information for property 'sequence'.
         */
        _sequence?: Element;
        /**
         * Applicable careTeam members
         */
        careTeamLinkId?: positiveInt[];
        /**
         * Contains extended information for property 'careTeamLinkId'.
         */
        _careTeamLinkId?: Element[];
        /**
         * Applicable diagnoses
         */
        diagnosisLinkId?: positiveInt[];
        /**
         * Contains extended information for property 'diagnosisLinkId'.
         */
        _diagnosisLinkId?: Element[];
        /**
         * Applicable procedures
         */
        procedureLinkId?: positiveInt[];
        /**
         * Contains extended information for property 'procedureLinkId'.
         */
        _procedureLinkId?: Element[];
        /**
         * Applicable exception and supporting information
         */
        informationLinkId?: positiveInt[];
        /**
         * Contains extended information for property 'informationLinkId'.
         */
        _informationLinkId?: Element[];
        /**
         * Revenue or cost center code
         */
        revenue?: CodeableConcept;
        /**
         * Type of service or product
         */
        category?: CodeableConcept;
        /**
         * Billing Code
         */
        service?: CodeableConcept;
        /**
         * Service/Product billing modifiers
         */
        modifier?: CodeableConcept[];
        /**
         * Program specific reason for item inclusion
         */
        programCode?: CodeableConcept[];
        /**
         * Date or dates of Service
         */
        servicedDate?: date;
        /**
         * Contains extended information for property 'servicedDate'.
         */
        _servicedDate?: Element;
        /**
         * Date or dates of Service
         */
        servicedPeriod?: Period;
        /**
         * Place of service
         */
        locationCodeableConcept?: CodeableConcept;
        /**
         * Place of service
         */
        locationAddress?: Address;
        /**
         * Place of service
         */
        locationReference?: Reference;
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
         * Contains extended information for property 'factor'.
         */
        _factor?: Element;
        /**
         * Total item cost
         */
        net?: Money;
        /**
         * Unique Device Identifier
         */
        udi?: Reference[];
        /**
         * Service Location
         */
        bodySite?: CodeableConcept;
        /**
         * Service Sub-location
         */
        subSite?: CodeableConcept[];
        /**
         * Encounters related to this billed item
         */
        encounter?: Reference[];
        /**
         * Additional items
         */
        detail?: ClaimItemDetail[];
    }
    /**
     * Additional items
     */
    interface ClaimItemDetail extends BackboneElement {
        /**
         * Service instance
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
         * Type of service or product
         */
        category?: CodeableConcept;
        /**
         * Billing Code
         */
        service?: CodeableConcept;
        /**
         * Service/Product billing modifiers
         */
        modifier?: CodeableConcept[];
        /**
         * Program specific reason for item inclusion
         */
        programCode?: CodeableConcept[];
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
         * Contains extended information for property 'factor'.
         */
        _factor?: Element;
        /**
         * Total additional item cost
         */
        net?: Money;
        /**
         * Unique Device Identifier
         */
        udi?: Reference[];
        /**
         * Additional items
         */
        subDetail?: ClaimItemDetailSubDetail[];
    }
    /**
     * Additional items
     */
    interface ClaimItemDetailSubDetail extends BackboneElement {
        /**
         * Service instance
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
         * Type of service or product
         */
        category?: CodeableConcept;
        /**
         * Billing Code
         */
        service?: CodeableConcept;
        /**
         * Service/Product billing modifiers
         */
        modifier?: CodeableConcept[];
        /**
         * Program specific reason for item inclusion
         */
        programCode?: CodeableConcept[];
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
         * Contains extended information for property 'factor'.
         */
        _factor?: Element;
        /**
         * Net additional item cost
         */
        net?: Money;
        /**
         * Unique Device Identifier
         */
        udi?: Reference[];
    }
    /**
     * Claim, Pre-determination or Pre-authorization
     */
    interface Claim extends DomainResource {
        /**
         * Claim number
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
         * Type or discipline
         */
        type?: CodeableConcept;
        /**
         * Finer grained claim type information
         */
        subType?: CodeableConcept[];
        /**
         * complete | proposed | exploratory | other
         */
        use?: code;
        /**
         * Contains extended information for property 'use'.
         */
        _use?: Element;
        /**
         * The subject of the Products and Services
         */
        patient?: Reference;
        /**
         * Period for charge submission
         */
        billablePeriod?: Period;
        /**
         * Creation date
         */
        created?: dateTime;
        /**
         * Contains extended information for property 'created'.
         */
        _created?: Element;
        /**
         * Author
         */
        enterer?: Reference;
        /**
         * Target
         */
        insurer?: Reference;
        /**
         * Responsible provider
         */
        provider?: Reference;
        /**
         * Responsible organization
         */
        organization?: Reference;
        /**
         * Desired processing priority
         */
        priority?: CodeableConcept;
        /**
         * Funds requested to be reserved
         */
        fundsReserve?: CodeableConcept;
        /**
         * Related Claims which may be revelant to processing this claimn
         */
        related?: ClaimRelated[];
        /**
         * Prescription authorizing services or products
         */
        prescription?: Reference;
        /**
         * Original prescription if superceded by fulfiller
         */
        originalPrescription?: Reference;
        /**
         * Party to be paid any benefits payable
         */
        payee?: ClaimPayee;
        /**
         * Treatment Referral
         */
        referral?: Reference;
        /**
         * Servicing Facility
         */
        facility?: Reference;
        /**
         * Members of the care team
         */
        careTeam?: ClaimCareTeam[];
        /**
         * Exceptions, special considerations, the condition, situation, prior or concurrent issues
         */
        information?: ClaimInformation[];
        /**
         * List of Diagnosis
         */
        diagnosis?: ClaimDiagnosis[];
        /**
         * Procedures performed
         */
        procedure?: ClaimProcedure[];
        /**
         * Insurance or medical plan
         */
        insurance?: ClaimInsurance[];
        /**
         * Details about an accident
         */
        accident?: ClaimAccident;
        /**
         * Period unable to work
         */
        employmentImpacted?: Period;
        /**
         * Period in hospital
         */
        hospitalization?: Period;
        /**
         * Goods and Services
         */
        item?: ClaimItem[];
        /**
         * Total claim cost
         */
        total?: Money;
    }
    /**
     * Line items
     */
    interface ClaimResponseItem extends BackboneElement {
        /**
         * Service instance
         */
        sequenceLinkId: positiveInt;
        /**
         * Contains extended information for property 'sequenceLinkId'.
         */
        _sequenceLinkId?: Element;
        /**
         * List of note numbers which apply
         */
        noteNumber?: positiveInt[];
        /**
         * Contains extended information for property 'noteNumber'.
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
    interface ClaimResponseItemAdjudication extends BackboneElement {
        /**
         * Adjudication category such as co-pay, eligible, benefit, etc.
         */
        category: CodeableConcept;
        /**
         * Explanation of Adjudication outcome
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
     * Detail line items
     */
    interface ClaimResponseItemDetail extends BackboneElement {
        /**
         * Service instance
         */
        sequenceLinkId: positiveInt;
        /**
         * Contains extended information for property 'sequenceLinkId'.
         */
        _sequenceLinkId?: Element;
        /**
         * List of note numbers which apply
         */
        noteNumber?: positiveInt[];
        /**
         * Contains extended information for property 'noteNumber'.
         */
        _noteNumber?: Element[];
        /**
         * Detail level adjudication details
         */
        adjudication?: ClaimResponseItemAdjudication[];
        /**
         * Subdetail line items
         */
        subDetail?: ClaimResponseItemDetailSubDetail[];
    }
    /**
     * Subdetail line items
     */
    interface ClaimResponseItemDetailSubDetail extends BackboneElement {
        /**
         * Service instance
         */
        sequenceLinkId: positiveInt;
        /**
         * Contains extended information for property 'sequenceLinkId'.
         */
        _sequenceLinkId?: Element;
        /**
         * List of note numbers which apply
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
         * Service instances
         */
        sequenceLinkId?: positiveInt[];
        /**
         * Contains extended information for property 'sequenceLinkId'.
         */
        _sequenceLinkId?: Element[];
        /**
         * Revenue or cost center code
         */
        revenue?: CodeableConcept;
        /**
         * Type of service or product
         */
        category?: CodeableConcept;
        /**
         * Group, Service or Product
         */
        service?: CodeableConcept;
        /**
         * Service/Product billing modifiers
         */
        modifier?: CodeableConcept[];
        /**
         * Professional fee or Product charge
         */
        fee?: Money;
        /**
         * List of note numbers which apply
         */
        noteNumber?: positiveInt[];
        /**
         * Contains extended information for property 'noteNumber'.
         */
        _noteNumber?: Element[];
        /**
         * Added items adjudication
         */
        adjudication?: ClaimResponseItemAdjudication[];
        /**
         * Added items details
         */
        detail?: ClaimResponseAddItemDetail[];
    }
    /**
     * Added items details
     */
    interface ClaimResponseAddItemDetail extends BackboneElement {
        /**
         * Revenue or cost center code
         */
        revenue?: CodeableConcept;
        /**
         * Type of service or product
         */
        category?: CodeableConcept;
        /**
         * Service or Product
         */
        service?: CodeableConcept;
        /**
         * Service/Product billing modifiers
         */
        modifier?: CodeableConcept[];
        /**
         * Professional fee or Product charge
         */
        fee?: Money;
        /**
         * List of note numbers which apply
         */
        noteNumber?: positiveInt[];
        /**
         * Contains extended information for property 'noteNumber'.
         */
        _noteNumber?: Element[];
        /**
         * Added items detail adjudication
         */
        adjudication?: ClaimResponseItemAdjudication[];
    }
    /**
     * Processing errors
     */
    interface ClaimResponseError extends BackboneElement {
        /**
         * Item sequence number
         */
        sequenceLinkId?: positiveInt;
        /**
         * Contains extended information for property 'sequenceLinkId'.
         */
        _sequenceLinkId?: Element;
        /**
         * Detail sequence number
         */
        detailSequenceLinkId?: positiveInt;
        /**
         * Contains extended information for property 'detailSequenceLinkId'.
         */
        _detailSequenceLinkId?: Element;
        /**
         * Subdetail sequence number
         */
        subdetailSequenceLinkId?: positiveInt;
        /**
         * Contains extended information for property 'subdetailSequenceLinkId'.
         */
        _subdetailSequenceLinkId?: Element;
        /**
         * Error code detailing processing issues
         */
        code: CodeableConcept;
    }
    /**
     * Payment details, if paid
     */
    interface ClaimResponsePayment extends BackboneElement {
        /**
         * Partial or Complete
         */
        type?: CodeableConcept;
        /**
         * Payment adjustment for non-Claim issues
         */
        adjustment?: Money;
        /**
         * Explanation for the non-claim adjustment
         */
        adjustmentReason?: CodeableConcept;
        /**
         * Expected data of Payment
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
         * Identifier of the payment instrument
         */
        identifier?: Identifier;
    }
    /**
     * Processing notes
     */
    interface ClaimResponseProcessNote extends BackboneElement {
        /**
         * Sequence Number for this note
         */
        number?: positiveInt;
        /**
         * Contains extended information for property 'number'.
         */
        _number?: Element;
        /**
         * display | print | printoper
         */
        type?: CodeableConcept;
        /**
         * Note explanatory text
         */
        text?: string;
        /**
         * Contains extended information for property 'text'.
         */
        _text?: Element;
        /**
         * Language if different from the resource
         */
        language?: CodeableConcept;
    }
    /**
     * Insurance or medical plan
     */
    interface ClaimResponseInsurance extends BackboneElement {
        /**
         * Service instance identifier
         */
        sequence: positiveInt;
        /**
         * Contains extended information for property 'sequence'.
         */
        _sequence?: Element;
        /**
         * Is the focal Coverage
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
         * Business agreement
         */
        businessArrangement?: string;
        /**
         * Contains extended information for property 'businessArrangement'.
         */
        _businessArrangement?: Element;
        /**
         * Pre-Authorization/Determination Reference
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
     * Remittance resource
     */
    interface ClaimResponse extends DomainResource {
        /**
         * Response  number
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
         * The subject of the Products and Services
         */
        patient?: Reference;
        /**
         * Creation date
         */
        created?: dateTime;
        /**
         * Contains extended information for property 'created'.
         */
        _created?: Element;
        /**
         * Insurance issuing organization
         */
        insurer?: Reference;
        /**
         * Responsible practitioner
         */
        requestProvider?: Reference;
        /**
         * Responsible organization
         */
        requestOrganization?: Reference;
        /**
         * Id of resource triggering adjudication
         */
        request?: Reference;
        /**
         * complete | error | partial
         */
        outcome?: CodeableConcept;
        /**
         * Disposition Message
         */
        disposition?: string;
        /**
         * Contains extended information for property 'disposition'.
         */
        _disposition?: Element;
        /**
         * Party to be paid any benefits payable
         */
        payeeType?: CodeableConcept;
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
         * Unallocated deductible
         */
        unallocDeductable?: Money;
        /**
         * Total benefit payable for the Claim
         */
        totalBenefit?: Money;
        /**
         * Payment details, if paid
         */
        payment?: ClaimResponsePayment;
        /**
         * Funds reserved status
         */
        reserved?: Coding;
        /**
         * Printed Form Identifier
         */
        form?: CodeableConcept;
        /**
         * Processing notes
         */
        processNote?: ClaimResponseProcessNote[];
        /**
         * Request for additional information
         */
        communicationRequest?: Reference[];
        /**
         * Insurance or medical plan
         */
        insurance?: ClaimResponseInsurance[];
    }
    /**
     * One or more sets of investigations (signs, symptions, etc.)
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
         * draft | completed | entered-in-error
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
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
         * Encounter or Episode created from
         */
        context?: Reference;
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
         * One or more sets of investigations (signs, symptions, etc.)
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
         * Action taken as part of assessment procedure
         */
        action?: Reference[];
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
         * Operators that can be used with filter
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
         * code | Coding | string | integer | boolean | dateTime
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
    }
    /**
     * A set of codes drawn from one or more code systems
     */
    interface CodeSystem extends DomainResource {
        /**
         * Logical URI to reference this code system (globally unique) (Coding.system)
         */
        url?: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Additional identifier for the code system
         */
        identifier?: Identifier;
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
         * Date this was last changed
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
         * Context the content is intended to support
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
         * Canonical URL for value set with entire code system
         */
        valueSet?: uri;
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
         * If code system defines a post-composition grammar
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
         * not-present | example | fragment | complete
         */
        content: code;
        /**
         * Contains extended information for property 'content'.
         */
        _content?: Element;
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
         * Instantiates protocol or definition
         */
        definition?: Reference[];
        /**
         * Request fulfilled by this communication
         */
        basedOn?: Reference[];
        /**
         * Part of this action
         */
        partOf?: Reference[];
        /**
         * preparation | in-progress | suspended | aborted | completed | entered-in-error
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Communication did not occur
         */
        notDone?: boolean;
        /**
         * Contains extended information for property 'notDone'.
         */
        _notDone?: Element;
        /**
         * Why communication did not occur
         */
        notDoneReason?: CodeableConcept;
        /**
         * Message category
         */
        category?: CodeableConcept[];
        /**
         * A channel of communication
         */
        medium?: CodeableConcept[];
        /**
         * Focus of message
         */
        subject?: Reference;
        /**
         * Message recipient
         */
        recipient?: Reference[];
        /**
         * Focal resources
         */
        topic?: Reference[];
        /**
         * Encounter or episode leading to message
         */
        context?: Reference;
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
     * Who/what is requesting service
     */
    interface CommunicationRequestRequester extends BackboneElement {
        /**
         * Individual making the request
         */
        agent: Reference;
        /**
         * Organization agent is acting for
         */
        onBehalfOf?: Reference;
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
         * draft | active | suspended | cancelled | completed | entered-in-error | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Message category
         */
        category?: CodeableConcept[];
        /**
         * Message urgency
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
         * Message recipient
         */
        recipient?: Reference[];
        /**
         * Focal resources
         */
        topic?: Reference[];
        /**
         * Encounter or episode leading to message
         */
        context?: Reference;
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
         * Message sender
         */
        sender?: Reference;
        /**
         * Who/what is requesting service
         */
        requester?: CommunicationRequestRequester;
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
         * Logical URI to reference this compartment definition (globally unique)
         */
        url: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Name for this compartment definition (computer friendly)
         */
        name: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Name for this compartment definition (human friendly)
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
         * Date this was last changed
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
         * Why this compartment definition is defined
         */
        purpose?: markdown;
        /**
         * Contains extended information for property 'purpose'.
         */
        _purpose?: Element;
        /**
         * Context the content is intended to support
         */
        useContext?: UsageContext[];
        /**
         * Intended jurisdiction for compartment definition (if applicable)
         */
        jurisdiction?: CodeableConcept[];
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
        mode: code[];
        /**
         * Contains extended information for property 'mode'.
         */
        _mode?: Element[];
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
         * Logical identifier of composition (version-independent)
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
        class?: CodeableConcept;
        /**
         * Who and/or what the composition is about
         */
        subject: Reference;
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
         * Code System (if value set crosses code systems)
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
         * System of the target (if necessary)
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
         * When no match in the mappings
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
        equivalence?: code;
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
        system?: uri;
        /**
         * Contains extended information for property 'system'.
         */
        _system?: Element;
        /**
         * Value of the referenced element
         */
        code: string;
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
    }
    /**
     * When no match in the mappings
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
         * Canonical URL for other concept map
         */
        url?: uri;
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
         * Logical URI to reference this concept map (globally unique)
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
         * Date this was last changed
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
         * Context the content is intended to support
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
         * Identifies the source of the concepts which are being mapped
         */
        sourceUri?: uri;
        /**
         * Contains extended information for property 'sourceUri'.
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
         * Contains extended information for property 'targetUri'.
         */
        _targetUri?: Element;
        /**
         * Provides context to the mappings
         */
        targetReference?: Reference;
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
         * active | recurrence | inactive | remission | resolved
         */
        clinicalStatus?: code;
        /**
         * Contains extended information for property 'clinicalStatus'.
         */
        _clinicalStatus?: Element;
        /**
         * provisional | differential | confirmed | refuted | entered-in-error | unknown
         */
        verificationStatus?: code;
        /**
         * Contains extended information for property 'verificationStatus'.
         */
        _verificationStatus?: Element;
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
         * Encounter or episode when condition first asserted
         */
        context?: Reference;
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
         * If/when in resolution/remission
         */
        abatementDateTime?: dateTime;
        /**
         * Contains extended information for property 'abatementDateTime'.
         */
        _abatementDateTime?: Element;
        /**
         * If/when in resolution/remission
         */
        abatementAge?: Age;
        /**
         * If/when in resolution/remission
         */
        abatementBoolean?: boolean;
        /**
         * Contains extended information for property 'abatementBoolean'.
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
         * Contains extended information for property 'abatementString'.
         */
        _abatementString?: Element;
        /**
         * Date record was believed accurate
         */
        assertedDate?: dateTime;
        /**
         * Contains extended information for property 'assertedDate'.
         */
        _assertedDate?: Element;
        /**
         * Person who asserts this condition
         */
        asserter?: Reference;
        /**
         * Stage/grade, usually assessed formally
         */
        stage?: ConditionStage;
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
     * Who|what controlled by this consent (or group, by role)
     */
    interface ConsentActor extends BackboneElement {
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
     * Data controlled by this consent
     */
    interface ConsentData extends BackboneElement {
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
     * Additional rule -  addition or removal of permissions
     */
    interface ConsentExcept extends BackboneElement {
        /**
         * deny | permit
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * Timeframe for this exception
         */
        period?: Period;
        /**
         * Who|what controlled by this exception (or group, by role)
         */
        actor?: ConsentExceptActor[];
        /**
         * Actions controlled by this exception
         */
        action?: CodeableConcept[];
        /**
         * Security Labels that define affected resources
         */
        securityLabel?: Coding[];
        /**
         * Context of activities covered by this exception
         */
        purpose?: Coding[];
        /**
         * e.g. Resource Type, Profile, or CDA etc
         */
        class?: Coding[];
        /**
         * e.g. LOINC or SNOMED CT code, etc in the content
         */
        code?: Coding[];
        /**
         * Timeframe for data controlled by this exception
         */
        dataPeriod?: Period;
        /**
         * Data controlled by this exception
         */
        data?: ConsentExceptData[];
    }
    /**
     * Who|what controlled by this exception (or group, by role)
     */
    interface ConsentExceptActor extends BackboneElement {
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
     * Data controlled by this exception
     */
    interface ConsentExceptData extends BackboneElement {
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
     * A healthcare consumer's policy choices to permits or denies recipients or roles to perform actions for specific purposes and periods of time
     */
    interface Consent extends DomainResource {
        /**
         * Identifier for this record (external references)
         */
        identifier?: Identifier;
        /**
         * draft | proposed | active | rejected | inactive | entered-in-error
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Classification of the consent statement - for indexing/retrieval
         */
        category?: CodeableConcept[];
        /**
         * Who the consent applies to
         */
        patient: Reference;
        /**
         * Period that this consent applies
         */
        period?: Period;
        /**
         * When this Consent was created or indexed
         */
        dateTime?: dateTime;
        /**
         * Contains extended information for property 'dateTime'.
         */
        _dateTime?: Element;
        /**
         * Who is agreeing to the policy and exceptions
         */
        consentingParty?: Reference[];
        /**
         * Who|what controlled by this consent (or group, by role)
         */
        actor?: ConsentActor[];
        /**
         * Actions controlled by this consent
         */
        action?: CodeableConcept[];
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
        sourceIdentifier?: Identifier;
        /**
         * Source from which this consent is taken
         */
        sourceReference?: Reference;
        /**
         * Policies covered by this consent
         */
        policy?: ConsentPolicy[];
        /**
         * Policy that this consents to
         */
        policyRule?: uri;
        /**
         * Contains extended information for property 'policyRule'.
         */
        _policyRule?: Element;
        /**
         * Security Labels that define affected resources
         */
        securityLabel?: Coding[];
        /**
         * Context of activities for which the agreement is made
         */
        purpose?: Coding[];
        /**
         * Timeframe for data controlled by this consent
         */
        dataPeriod?: Period;
        /**
         * Data controlled by this consent
         */
        data?: ConsentData[];
        /**
         * Additional rule -  addition or removal of permissions
         */
        except?: ConsentExcept[];
    }
    /**
     * Entity being ascribed responsibility
     */
    interface ContractAgent extends BackboneElement {
        /**
         * Contract Agent Type
         */
        actor: Reference;
        /**
         * Role type of the agent
         */
        role?: CodeableConcept[];
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
     * Contract Valued Item List
     */
    interface ContractValuedItem extends BackboneElement {
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
         * Contract Term Type or Form
         */
        type?: CodeableConcept;
        /**
         * Contract Term Type specific classification
         */
        subType?: CodeableConcept;
        /**
         * Context of the Contract term
         */
        topic?: Reference[];
        /**
         * Contract Term Activity
         */
        action?: CodeableConcept[];
        /**
         * Purpose for the Contract Term Action
         */
        actionReason?: CodeableConcept[];
        /**
         * Security Labels that define affected terms
         */
        securityLabel?: Coding[];
        /**
         * Contract Term Agent List
         */
        agent?: ContractTermAgent[];
        /**
         * Human readable Contract term text
         */
        text?: string;
        /**
         * Contains extended information for property 'text'.
         */
        _text?: Element;
        /**
         * Contract Term Valued Item List
         */
        valuedItem?: ContractTermValuedItem[];
        /**
         * Nested Contract Term Group
         */
        group?: ContractTerm[];
    }
    /**
     * Contract Term Agent List
     */
    interface ContractTermAgent extends BackboneElement {
        /**
         * Contract Term Agent Subject
         */
        actor: Reference;
        /**
         * Type of the Contract Term Agent
         */
        role?: CodeableConcept[];
    }
    /**
     * Contract Term Valued Item List
     */
    interface ContractTermValuedItem extends BackboneElement {
        /**
         * Contract Term Valued Item Type
         */
        entityCodeableConcept?: CodeableConcept;
        /**
         * Contract Term Valued Item Type
         */
        entityReference?: Reference;
        /**
         * Contract Term Valued Item Number
         */
        identifier?: Identifier;
        /**
         * Contract Term Valued Item Effective Tiem
         */
        effectiveTime?: dateTime;
        /**
         * Contains extended information for property 'effectiveTime'.
         */
        _effectiveTime?: Element;
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
         * Contains extended information for property 'factor'.
         */
        _factor?: Element;
        /**
         * Contract Term Valued Item Difficulty Scaling Factor
         */
        points?: decimal;
        /**
         * Contains extended information for property 'points'.
         */
        _points?: Element;
        /**
         * Total Contract Term Valued Item Value
         */
        net?: Money;
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
        identifier?: Identifier;
        /**
         * amended | appended | cancelled | disputed | entered-in-error | executable | executed | negotiable | offered | policy | rejected | renewed | revoked | resolved | terminated
         */
        status?: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
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
         * Contract Target Entity
         */
        subject?: Reference[];
        /**
         * Context of the Contract
         */
        topic?: Reference[];
        /**
         * Authority under which this Contract has standing
         */
        authority?: Reference[];
        /**
         * Domain in which this Contract applies
         */
        domain?: Reference[];
        /**
         * Type or form
         */
        type?: CodeableConcept;
        /**
         * Subtype within the context of type
         */
        subType?: CodeableConcept[];
        /**
         * Action stipulated by this Contract
         */
        action?: CodeableConcept[];
        /**
         * Rationale for the stiplulated action
         */
        actionReason?: CodeableConcept[];
        /**
         * Decision by Grantor
         */
        decisionType?: CodeableConcept;
        /**
         * Content derived from the basal information
         */
        contentDerivative?: CodeableConcept;
        /**
         * Security Labels that define affected resources
         */
        securityLabel?: Coding[];
        /**
         * Entity being ascribed responsibility
         */
        agent?: ContractAgent[];
        /**
         * Contract Signatory
         */
        signer?: ContractSigner[];
        /**
         * Contract Valued Item List
         */
        valuedItem?: ContractValuedItem[];
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
     * Additional coverage classifications
     */
    interface CoverageGrouping extends BackboneElement {
        /**
         * An identifier for the group
         */
        group?: string;
        /**
         * Contains extended information for property 'group'.
         */
        _group?: Element;
        /**
         * Display text for an identifier for the group
         */
        groupDisplay?: string;
        /**
         * Contains extended information for property 'groupDisplay'.
         */
        _groupDisplay?: Element;
        /**
         * An identifier for the subsection of the group
         */
        subGroup?: string;
        /**
         * Contains extended information for property 'subGroup'.
         */
        _subGroup?: Element;
        /**
         * Display text for the subsection of the group
         */
        subGroupDisplay?: string;
        /**
         * Contains extended information for property 'subGroupDisplay'.
         */
        _subGroupDisplay?: Element;
        /**
         * An identifier for the plan
         */
        plan?: string;
        /**
         * Contains extended information for property 'plan'.
         */
        _plan?: Element;
        /**
         * Display text for the plan
         */
        planDisplay?: string;
        /**
         * Contains extended information for property 'planDisplay'.
         */
        _planDisplay?: Element;
        /**
         * An identifier for the subsection of the plan
         */
        subPlan?: string;
        /**
         * Contains extended information for property 'subPlan'.
         */
        _subPlan?: Element;
        /**
         * Display text for the subsection of the plan
         */
        subPlanDisplay?: string;
        /**
         * Contains extended information for property 'subPlanDisplay'.
         */
        _subPlanDisplay?: Element;
        /**
         * An identifier for the class
         */
        class?: string;
        /**
         * Contains extended information for property 'class'.
         */
        _class?: Element;
        /**
         * Display text for the class
         */
        classDisplay?: string;
        /**
         * Contains extended information for property 'classDisplay'.
         */
        _classDisplay?: Element;
        /**
         * An identifier for the subsection of the class
         */
        subClass?: string;
        /**
         * Contains extended information for property 'subClass'.
         */
        _subClass?: Element;
        /**
         * Display text for the subsection of the subclass
         */
        subClassDisplay?: string;
        /**
         * Contains extended information for property 'subClassDisplay'.
         */
        _subClassDisplay?: Element;
    }
    /**
     * Insurance or medical plan or a payment agreement
     */
    interface Coverage extends DomainResource {
        /**
         * The primary coverage ID
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
         * Type of coverage such as medical or accident
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
         * ID assigned to the Subscriber
         */
        subscriberId?: string;
        /**
         * Contains extended information for property 'subscriberId'.
         */
        _subscriberId?: Element;
        /**
         * Plan Beneficiary
         */
        beneficiary?: Reference;
        /**
         * Beneficiary relationship to the Subscriber
         */
        relationship?: CodeableConcept;
        /**
         * Coverage start and end dates
         */
        period?: Period;
        /**
         * Identifier for the plan or agreement issuer
         */
        payor?: Reference[];
        /**
         * Additional coverage classifications
         */
        grouping?: CoverageGrouping;
        /**
         * Dependent number
         */
        dependent?: string;
        /**
         * Contains extended information for property 'dependent'.
         */
        _dependent?: Element;
        /**
         * The plan instance or sequence counter
         */
        sequence?: string;
        /**
         * Contains extended information for property 'sequence'.
         */
        _sequence?: Element;
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
         * Contract details
         */
        contract?: Reference[];
    }
    /**
     * External specification mapped to
     */
    interface DataElementMapping extends BackboneElement {
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
         * Versions, issues, scope limitations, etc.
         */
        comment?: string;
        /**
         * Contains extended information for property 'comment'.
         */
        _comment?: Element;
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
         * Profile (StructureDefinition) to apply (or IG)
         */
        profile?: uri;
        /**
         * Contains extended information for property 'profile'.
         */
        _profile?: Element;
        /**
         * Profile (StructureDefinition) to apply to reference target (or IG)
         */
        targetProfile?: uri;
        /**
         * Contains extended information for property 'targetProfile'.
         */
        _targetProfile?: Element;
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
        expression: string;
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
        source?: uri;
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
        valueSetUri?: uri;
        /**
         * Contains extended information for property 'valueSetUri'.
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
    interface ElementDefinition extends Element {
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
         * If the element must supported
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
     * Resource data element
     */
    interface DataElement extends DomainResource {
        /**
         * Logical URI to reference this data element (globally unique)
         */
        url?: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Additional identifier for the data element
         */
        identifier?: Identifier[];
        /**
         * Business version of the data element
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
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
         * Date this was last changed
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
         * Name for this data element (computer friendly)
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Name for this data element (human friendly)
         */
        title?: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
        /**
         * Contact details for the publisher
         */
        contact?: ContactDetail[];
        /**
         * Context the content is intended to support
         */
        useContext?: UsageContext[];
        /**
         * Intended jurisdiction for data element (if applicable)
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
         * comparable | fully-specified | equivalent | convertable | scaleable | flexible
         */
        stringency?: code;
        /**
         * Contains extended information for property 'stringency'.
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
        identifier?: Identifier;
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
        category?: CodeableConcept;
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
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * The provider or device that identified the issue
         */
        author?: Reference;
        /**
         * Problem resource
         */
        implicated?: Reference[];
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
    interface DeviceUdi extends BackboneElement {
        /**
         * Mandatory fixed portion of UDI
         */
        deviceIdentifier?: string;
        /**
         * Contains extended information for property 'deviceIdentifier'.
         */
        _deviceIdentifier?: Element;
        /**
         * Device Name as appears on UDI label
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Regional UDI authority
         */
        jurisdiction?: uri;
        /**
         * Contains extended information for property 'jurisdiction'.
         */
        _jurisdiction?: Element;
        /**
         * UDI Human Readable Barcode String
         */
        carrierHRF?: string;
        /**
         * Contains extended information for property 'carrierHRF'.
         */
        _carrierHRF?: Element;
        /**
         * UDI Machine Readable Barcode String
         */
        carrierAIDC?: base64Binary;
        /**
         * Contains extended information for property 'carrierAIDC'.
         */
        _carrierAIDC?: Element;
        /**
         * UDI Issuing Organization
         */
        issuer?: uri;
        /**
         * Contains extended information for property 'issuer'.
         */
        _issuer?: Element;
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
     * Item used in healthcare
     */
    interface Device extends DomainResource {
        /**
         * Instance identifier
         */
        identifier?: Identifier[];
        /**
         * Unique Device Identifier (UDI) Barcode string
         */
        udi?: DeviceUdi;
        /**
         * active | inactive | entered-in-error | unknown
         */
        status?: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * What kind of device this is
         */
        type?: CodeableConcept;
        /**
         * Lot number of manufacture
         */
        lotNumber?: string;
        /**
         * Contains extended information for property 'lotNumber'.
         */
        _lotNumber?: Element;
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
         * Model id assigned by the manufacturer
         */
        model?: string;
        /**
         * Contains extended information for property 'model'.
         */
        _model?: Element;
        /**
         * Version number (i.e. software)
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
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
         * Where the resource is found
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
    }
    /**
     * Specification details such as Component Revisions, or Serial Numbers
     */
    interface DeviceComponentProductionSpecification extends BackboneElement {
        /**
         * Type or kind of production specification, for example serial number or software revision
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
         * Contains extended information for property 'productionSpec'.
         */
        _productionSpec?: Element;
    }
    /**
     * An instance of a medical-related component of a medical device
     */
    interface DeviceComponent extends DomainResource {
        /**
         * Instance id assigned by the software stack
         */
        identifier: Identifier;
        /**
         * What kind of component it is
         */
        type: CodeableConcept;
        /**
         * Recent system change timestamp
         */
        lastSystemChange?: instant;
        /**
         * Contains extended information for property 'lastSystemChange'.
         */
        _lastSystemChange?: Element;
        /**
         * Top-level device resource link
         */
        source?: Reference;
        /**
         * Parent resource link
         */
        parent?: Reference;
        /**
         * Current operational status of the component, for example On, Off or Standby
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
         * Contains extended information for property 'measurementPrinciple'.
         */
        _measurementPrinciple?: Element;
        /**
         * Specification details such as Component Revisions, or Serial Numbers
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
         * Unique identifier of this DeviceMetric
         */
        identifier: Identifier;
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
         * Describes the link to the parent DeviceComponent
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
     * Who/what is requesting diagnostics
     */
    interface DeviceRequestRequester extends BackboneElement {
        /**
         * Individual making the request
         */
        agent: Reference;
        /**
         * Organization agent is acting for
         */
        onBehalfOf?: Reference;
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
         * Protocol or definition
         */
        definition?: Reference[];
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
         * draft | active | suspended | completed | entered-in-error | cancelled
         */
        status?: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * proposal | plan | original-order | encoded | reflex-order
         */
        intent: CodeableConcept;
        /**
         * Indicates how quickly the {{title}} should be addressed with respect to other requests
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
         * Focus of request
         */
        subject: Reference;
        /**
         * Encounter or Episode motivating request
         */
        context?: Reference;
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
        requester?: DeviceRequestRequester;
        /**
         * Fille role
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
         * Period device was used
         */
        whenUsed?: Period;
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
        indication?: CodeableConcept[];
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
     * Participants in producing the report
     */
    interface DiagnosticReportPerformer extends BackboneElement {
        /**
         * Type of performer
         */
        role?: CodeableConcept;
        /**
         * Practitioner or Organization  participant
         */
        actor: Reference;
    }
    /**
     * Key images associated with this report
     */
    interface DiagnosticReportImage extends BackboneElement {
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
        category?: CodeableConcept;
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
        context?: Reference;
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
         * DateTime this version was released
         */
        issued?: instant;
        /**
         * Contains extended information for property 'issued'.
         */
        _issued?: Element;
        /**
         * Participants in producing the report
         */
        performer?: DiagnosticReportPerformer[];
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
         * Contains extended information for property 'conclusion'.
         */
        _conclusion?: Element;
        /**
         * Codes for the conclusion
         */
        codedDiagnosis?: CodeableConcept[];
        /**
         * Entire report as issued
         */
        presentedForm?: Attachment[];
    }
    /**
     * The items included
     */
    interface DocumentManifestContent extends BackboneElement {
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
         * Who and/or what authored the manifest
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
         * The items included
         */
        content: DocumentManifestContent[];
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
        encounter?: Reference;
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
        related?: DocumentReferenceContextRelated[];
    }
    /**
     * Related identifiers or resources
     */
    interface DocumentReferenceContextRelated extends BackboneElement {
        /**
         * Identifier of related objects or events
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
         * current | superseded | entered-in-error
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * preliminary | final | appended | amended | entered-in-error
         */
        docStatus?: code;
        /**
         * Contains extended information for property 'docStatus'.
         */
        _docStatus?: Element;
        /**
         * Kind of document (LOINC if possible)
         */
        type: CodeableConcept;
        /**
         * Categorization of document
         */
        class?: CodeableConcept;
        /**
         * Who/what is the subject of the document
         */
        subject?: Reference;
        /**
         * Document creation time
         */
        created?: dateTime;
        /**
         * Contains extended information for property 'created'.
         */
        _created?: Element;
        /**
         * When this document reference was created
         */
        indexed: instant;
        /**
         * Contains extended information for property 'indexed'.
         */
        _indexed?: Element;
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
         * Human-readable description (title)
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
     * Determine insurance validity and scope of coverage
     */
    interface EligibilityRequest extends DomainResource {
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
         * Desired processing priority
         */
        priority?: CodeableConcept;
        /**
         * The subject of the Products and Services
         */
        patient?: Reference;
        /**
         * Estimated date or dates of Service
         */
        servicedDate?: date;
        /**
         * Contains extended information for property 'servicedDate'.
         */
        _servicedDate?: Element;
        /**
         * Estimated date or dates of Service
         */
        servicedPeriod?: Period;
        /**
         * Creation date
         */
        created?: dateTime;
        /**
         * Contains extended information for property 'created'.
         */
        _created?: Element;
        /**
         * Author
         */
        enterer?: Reference;
        /**
         * Responsible practitioner
         */
        provider?: Reference;
        /**
         * Responsible organization
         */
        organization?: Reference;
        /**
         * Target
         */
        insurer?: Reference;
        /**
         * Servicing Facility
         */
        facility?: Reference;
        /**
         * Insurance or medical plan
         */
        coverage?: Reference;
        /**
         * Business agreement
         */
        businessArrangement?: string;
        /**
         * Contains extended information for property 'businessArrangement'.
         */
        _businessArrangement?: Element;
        /**
         * Type of services covered
         */
        benefitCategory?: CodeableConcept;
        /**
         * Detailed services covered within the type
         */
        benefitSubCategory?: CodeableConcept;
    }
    /**
     * Details by insurance coverage
     */
    interface EligibilityResponseInsurance extends BackboneElement {
        /**
         * Updated Coverage details
         */
        coverage?: Reference;
        /**
         * Contract details
         */
        contract?: Reference;
        /**
         * Benefits by Category
         */
        benefitBalance?: EligibilityResponseInsuranceBenefitBalance[];
    }
    /**
     * Benefits by Category
     */
    interface EligibilityResponseInsuranceBenefitBalance extends BackboneElement {
        /**
         * Type of services covered
         */
        category: CodeableConcept;
        /**
         * Detailed services covered within the type
         */
        subCategory?: CodeableConcept;
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
        financial?: EligibilityResponseInsuranceBenefitBalanceFinancial[];
    }
    /**
     * Benefit Summary
     */
    interface EligibilityResponseInsuranceBenefitBalanceFinancial extends BackboneElement {
        /**
         * Deductable, visits, benefit amount
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
     * Processing errors
     */
    interface EligibilityResponseError extends BackboneElement {
        /**
         * Error code detailing processing issues
         */
        code: CodeableConcept;
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
         * Responsible practitioner
         */
        requestProvider?: Reference;
        /**
         * Responsible organization
         */
        requestOrganization?: Reference;
        /**
         * Eligibility reference
         */
        request?: Reference;
        /**
         * complete | error | partial
         */
        outcome?: CodeableConcept;
        /**
         * Disposition Message
         */
        disposition?: string;
        /**
         * Contains extended information for property 'disposition'.
         */
        _disposition?: Element;
        /**
         * Insurer issuing the coverage
         */
        insurer?: Reference;
        /**
         * Coverage inforce indicator
         */
        inforce?: boolean;
        /**
         * Contains extended information for property 'inforce'.
         */
        _inforce?: Element;
        /**
         * Details by insurance coverage
         */
        insurance?: EligibilityResponseInsurance[];
        /**
         * Printed Form Identifier
         */
        form?: CodeableConcept;
        /**
         * Processing errors
         */
        error?: EligibilityResponseError[];
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
         * Reason the encounter takes place (resource)
         */
        condition: Reference;
        /**
         * Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …)
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
     * Details about the admission to a healthcare service
     */
    interface EncounterHospitalization extends BackboneElement {
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
         * Location to which the patient is discharged
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
         * inpatient | outpatient | ambulatory | emergency +
         */
        class?: Coding;
        /**
         * List of past encounter classes
         */
        classHistory?: EncounterClassHistory[];
        /**
         * Specific type of encounter
         */
        type?: CodeableConcept[];
        /**
         * Indicates the urgency of the encounter
         */
        priority?: CodeableConcept;
        /**
         * The patient ro group present at the encounter
         */
        subject?: Reference;
        /**
         * Episode(s) of care that this encounter should be recorded against
         */
        episodeOfCare?: Reference[];
        /**
         * The ReferralRequest that initiated this encounter
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
        length?: Duration;
        /**
         * Reason the encounter takes place (code)
         */
        reason?: CodeableConcept[];
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
         * The custodian organization of this Encounter record
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
         * Organization that manages this endpoint (may not be the organization that exposes the endpoint)
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
        address: uri;
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
     * Enrollment request
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
         * Responsible organization
         */
        organization?: Reference;
        /**
         * The subject of the Products and Services
         */
        subject?: Reference;
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
         * complete | error | partial
         */
        outcome?: CodeableConcept;
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
        /**
         * Responsible organization
         */
        requestOrganization?: Reference;
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
         * Care manager/care co-ordinator for the patient
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
     * Fix use of a code system to a particular version
     */
    interface ExpansionProfileFixedVersion extends BackboneElement {
        /**
         * System to have its version fixed
         */
        system: uri;
        /**
         * Contains extended information for property 'system'.
         */
        _system?: Element;
        /**
         * Specific version of the code system referred to
         */
        version: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
        /**
         * default | check | override
         */
        mode: code;
        /**
         * Contains extended information for property 'mode'.
         */
        _mode?: Element;
    }
    /**
     * Systems/Versions to be exclude
     */
    interface ExpansionProfileExcludedSystem extends BackboneElement {
        /**
         * The specific code system to be excluded
         */
        system: uri;
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
    }
    /**
     * When the expansion profile imposes designation contraints
     */
    interface ExpansionProfileDesignation extends BackboneElement {
        /**
         * Designations to be included
         */
        include?: ExpansionProfileDesignationInclude;
        /**
         * Designations to be excluded
         */
        exclude?: ExpansionProfileDesignationExclude;
    }
    /**
     * Designations to be included
     */
    interface ExpansionProfileDesignationInclude extends BackboneElement {
        /**
         * The designation to be included
         */
        designation?: ExpansionProfileDesignationIncludeDesignation[];
    }
    /**
     * The designation to be included
     */
    interface ExpansionProfileDesignationIncludeDesignation extends BackboneElement {
        /**
         * Human language of the designation to be included
         */
        language?: code;
        /**
         * Contains extended information for property 'language'.
         */
        _language?: Element;
        /**
         * What kind of Designation to include
         */
        use?: Coding;
    }
    /**
     * Designations to be excluded
     */
    interface ExpansionProfileDesignationExclude extends BackboneElement {
        /**
         * The designation to be excluded
         */
        designation?: ExpansionProfileDesignationExcludeDesignation[];
    }
    /**
     * The designation to be excluded
     */
    interface ExpansionProfileDesignationExcludeDesignation extends BackboneElement {
        /**
         * Human language of the designation to be excluded
         */
        language?: code;
        /**
         * Contains extended information for property 'language'.
         */
        _language?: Element;
        /**
         * What kind of Designation to exclude
         */
        use?: Coding;
    }
    /**
     * Defines behaviour and contraints on the ValueSet Expansion operation
     */
    interface ExpansionProfile extends DomainResource {
        /**
         * Logical URI to reference this expansion profile (globally unique)
         */
        url?: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Additional identifier for the expansion profile
         */
        identifier?: Identifier;
        /**
         * Business version of the expansion profile
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
        /**
         * Name for this expansion profile (computer friendly)
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
         * Date this was last changed
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
         * Natural language description of the expansion profile
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Context the content is intended to support
         */
        useContext?: UsageContext[];
        /**
         * Intended jurisdiction for expansion profile (if applicable)
         */
        jurisdiction?: CodeableConcept[];
        /**
         * Fix use of a code system to a particular version
         */
        fixedVersion?: ExpansionProfileFixedVersion[];
        /**
         * Systems/Versions to be exclude
         */
        excludedSystem?: ExpansionProfileExcludedSystem;
        /**
         * Whether the expansion should include concept designations
         */
        includeDesignations?: boolean;
        /**
         * Contains extended information for property 'includeDesignations'.
         */
        _includeDesignations?: Element;
        /**
         * When the expansion profile imposes designation contraints
         */
        designation?: ExpansionProfileDesignation;
        /**
         * Include or exclude the value set definition in the expansion
         */
        includeDefinition?: boolean;
        /**
         * Contains extended information for property 'includeDefinition'.
         */
        _includeDefinition?: Element;
        /**
         * Include or exclude inactive concepts in the expansion
         */
        activeOnly?: boolean;
        /**
         * Contains extended information for property 'activeOnly'.
         */
        _activeOnly?: Element;
        /**
         * Nested codes in the expansion or not
         */
        excludeNested?: boolean;
        /**
         * Contains extended information for property 'excludeNested'.
         */
        _excludeNested?: Element;
        /**
         * Include or exclude codes which cannot be rendered in user interfaces in the value set expansion
         */
        excludeNotForUI?: boolean;
        /**
         * Contains extended information for property 'excludeNotForUI'.
         */
        _excludeNotForUI?: Element;
        /**
         * Include or exclude codes which are post coordinated expressions in the value set expansion
         */
        excludePostCoordinated?: boolean;
        /**
         * Contains extended information for property 'excludePostCoordinated'.
         */
        _excludePostCoordinated?: Element;
        /**
         * Specify the language for the display element of codes in the value set expansion
         */
        displayLanguage?: code;
        /**
         * Contains extended information for property 'displayLanguage'.
         */
        _displayLanguage?: Element;
        /**
         * Controls behaviour of the value set expand operation when value sets are too large to be completely expanded
         */
        limitedExpansion?: boolean;
        /**
         * Contains extended information for property 'limitedExpansion'.
         */
        _limitedExpansion?: Element;
    }
    /**
     * Related Claims which may be revelant to processing this claim
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
         * Related file or case reference
         */
        reference?: Identifier;
    }
    /**
     * Party to be paid any benefits payable
     */
    interface ExplanationOfBenefitPayee extends BackboneElement {
        /**
         * Type of party: Subscriber, Provider, other
         */
        type?: CodeableConcept;
        /**
         * organization | patient | practitioner | relatedperson
         */
        resourceType?: CodeableConcept;
        /**
         * Party to receive the payable
         */
        party?: Reference;
    }
    /**
     * Exceptions, special considerations, the condition, situation, prior or concurrent issues
     */
    interface ExplanationOfBenefitInformation extends BackboneElement {
        /**
         * Information instance identifier
         */
        sequence: positiveInt;
        /**
         * Contains extended information for property 'sequence'.
         */
        _sequence?: Element;
        /**
         * General class of information
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
         * Additional Data or supporting information
         */
        valueString?: string;
        /**
         * Contains extended information for property 'valueString'.
         */
        _valueString?: Element;
        /**
         * Additional Data or supporting information
         */
        valueQuantity?: Quantity;
        /**
         * Additional Data or supporting information
         */
        valueAttachment?: Attachment;
        /**
         * Additional Data or supporting information
         */
        valueReference?: Reference;
        /**
         * Reason associated with the information
         */
        reason?: Coding;
    }
    /**
     * Care Team members
     */
    interface ExplanationOfBenefitCareTeam extends BackboneElement {
        /**
         * Number to covey order of careteam
         */
        sequence: positiveInt;
        /**
         * Contains extended information for property 'sequence'.
         */
        _sequence?: Element;
        /**
         * Member of the Care Team
         */
        provider: Reference;
        /**
         * Billing practitioner
         */
        responsible?: boolean;
        /**
         * Contains extended information for property 'responsible'.
         */
        _responsible?: Element;
        /**
         * Role on the team
         */
        role?: CodeableConcept;
        /**
         * Type, classification or Specialization
         */
        qualification?: CodeableConcept;
    }
    /**
     * List of Diagnosis
     */
    interface ExplanationOfBenefitDiagnosis extends BackboneElement {
        /**
         * Number to covey order of diagnosis
         */
        sequence: positiveInt;
        /**
         * Contains extended information for property 'sequence'.
         */
        _sequence?: Element;
        /**
         * Patient's diagnosis
         */
        diagnosisCodeableConcept?: CodeableConcept;
        /**
         * Patient's diagnosis
         */
        diagnosisReference?: Reference;
        /**
         * Timing or nature of the diagnosis
         */
        type?: CodeableConcept[];
        /**
         * Package billing code
         */
        packageCode?: CodeableConcept;
    }
    /**
     * Procedures performed
     */
    interface ExplanationOfBenefitProcedure extends BackboneElement {
        /**
         * Procedure sequence for reference
         */
        sequence: positiveInt;
        /**
         * Contains extended information for property 'sequence'.
         */
        _sequence?: Element;
        /**
         * When the procedure was performed
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Patient's list of procedures performed
         */
        procedureCodeableConcept?: CodeableConcept;
        /**
         * Patient's list of procedures performed
         */
        procedureReference?: Reference;
    }
    /**
     * Insurance or medical plan
     */
    interface ExplanationOfBenefitInsurance extends BackboneElement {
        /**
         * Insurance information
         */
        coverage?: Reference;
        /**
         * Pre-Authorization/Determination Reference
         */
        preAuthRef?: string[];
        /**
         * Contains extended information for property 'preAuthRef'.
         */
        _preAuthRef?: Element[];
    }
    /**
     * Details of an accident
     */
    interface ExplanationOfBenefitAccident extends BackboneElement {
        /**
         * When the accident occurred
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
         * Accident Place
         */
        locationAddress?: Address;
        /**
         * Accident Place
         */
        locationReference?: Reference;
    }
    /**
     * Goods and Services
     */
    interface ExplanationOfBenefitItem extends BackboneElement {
        /**
         * Service instance
         */
        sequence: positiveInt;
        /**
         * Contains extended information for property 'sequence'.
         */
        _sequence?: Element;
        /**
         * Applicable careteam members
         */
        careTeamLinkId?: positiveInt[];
        /**
         * Contains extended information for property 'careTeamLinkId'.
         */
        _careTeamLinkId?: Element[];
        /**
         * Applicable diagnoses
         */
        diagnosisLinkId?: positiveInt[];
        /**
         * Contains extended information for property 'diagnosisLinkId'.
         */
        _diagnosisLinkId?: Element[];
        /**
         * Applicable procedures
         */
        procedureLinkId?: positiveInt[];
        /**
         * Contains extended information for property 'procedureLinkId'.
         */
        _procedureLinkId?: Element[];
        /**
         * Applicable exception and supporting information
         */
        informationLinkId?: positiveInt[];
        /**
         * Contains extended information for property 'informationLinkId'.
         */
        _informationLinkId?: Element[];
        /**
         * Revenue or cost center code
         */
        revenue?: CodeableConcept;
        /**
         * Type of service or product
         */
        category?: CodeableConcept;
        /**
         * Billing Code
         */
        service?: CodeableConcept;
        /**
         * Service/Product billing modifiers
         */
        modifier?: CodeableConcept[];
        /**
         * Program specific reason for item inclusion
         */
        programCode?: CodeableConcept[];
        /**
         * Date or dates of Service
         */
        servicedDate?: date;
        /**
         * Contains extended information for property 'servicedDate'.
         */
        _servicedDate?: Element;
        /**
         * Date or dates of Service
         */
        servicedPeriod?: Period;
        /**
         * Place of service
         */
        locationCodeableConcept?: CodeableConcept;
        /**
         * Place of service
         */
        locationAddress?: Address;
        /**
         * Place of service
         */
        locationReference?: Reference;
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
         * Contains extended information for property 'factor'.
         */
        _factor?: Element;
        /**
         * Total item cost
         */
        net?: Money;
        /**
         * Unique Device Identifier
         */
        udi?: Reference[];
        /**
         * Service Location
         */
        bodySite?: CodeableConcept;
        /**
         * Service Sub-location
         */
        subSite?: CodeableConcept[];
        /**
         * Encounters related to this billed item
         */
        encounter?: Reference[];
        /**
         * List of note numbers which apply
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
         * Adjudication category such as co-pay, eligible, benefit, etc.
         */
        category: CodeableConcept;
        /**
         * Explanation of Adjudication outcome
         */
        reason?: CodeableConcept;
        /**
         * Monetary amount
         */
        amount?: Money;
        /**
         * Non-monitory value
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
         * Service instance
         */
        sequence: positiveInt;
        /**
         * Contains extended information for property 'sequence'.
         */
        _sequence?: Element;
        /**
         * Group or type of product or service
         */
        type: CodeableConcept;
        /**
         * Revenue or cost center code
         */
        revenue?: CodeableConcept;
        /**
         * Type of service or product
         */
        category?: CodeableConcept;
        /**
         * Billing Code
         */
        service?: CodeableConcept;
        /**
         * Service/Product billing modifiers
         */
        modifier?: CodeableConcept[];
        /**
         * Program specific reason for item inclusion
         */
        programCode?: CodeableConcept[];
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
         * Contains extended information for property 'factor'.
         */
        _factor?: Element;
        /**
         * Total additional item cost
         */
        net?: Money;
        /**
         * Unique Device Identifier
         */
        udi?: Reference[];
        /**
         * List of note numbers which apply
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
         * Service instance
         */
        sequence: positiveInt;
        /**
         * Contains extended information for property 'sequence'.
         */
        _sequence?: Element;
        /**
         * Type of product or service
         */
        type: CodeableConcept;
        /**
         * Revenue or cost center code
         */
        revenue?: CodeableConcept;
        /**
         * Type of service or product
         */
        category?: CodeableConcept;
        /**
         * Billing Code
         */
        service?: CodeableConcept;
        /**
         * Service/Product billing modifiers
         */
        modifier?: CodeableConcept[];
        /**
         * Program specific reason for item inclusion
         */
        programCode?: CodeableConcept[];
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
         * Contains extended information for property 'factor'.
         */
        _factor?: Element;
        /**
         * Net additional item cost
         */
        net?: Money;
        /**
         * Unique Device Identifier
         */
        udi?: Reference[];
        /**
         * List of note numbers which apply
         */
        noteNumber?: positiveInt[];
        /**
         * Contains extended information for property 'noteNumber'.
         */
        _noteNumber?: Element[];
        /**
         * Language if different from the resource
         */
        adjudication?: ExplanationOfBenefitItemAdjudication[];
    }
    /**
     * Insurer added line items
     */
    interface ExplanationOfBenefitAddItem extends BackboneElement {
        /**
         * Service instances
         */
        sequenceLinkId?: positiveInt[];
        /**
         * Contains extended information for property 'sequenceLinkId'.
         */
        _sequenceLinkId?: Element[];
        /**
         * Revenue or cost center code
         */
        revenue?: CodeableConcept;
        /**
         * Type of service or product
         */
        category?: CodeableConcept;
        /**
         * Billing Code
         */
        service?: CodeableConcept;
        /**
         * Service/Product billing modifiers
         */
        modifier?: CodeableConcept[];
        /**
         * Professional fee or Product charge
         */
        fee?: Money;
        /**
         * List of note numbers which apply
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
         * Added items details
         */
        detail?: ExplanationOfBenefitAddItemDetail[];
    }
    /**
     * Added items details
     */
    interface ExplanationOfBenefitAddItemDetail extends BackboneElement {
        /**
         * Revenue or cost center code
         */
        revenue?: CodeableConcept;
        /**
         * Type of service or product
         */
        category?: CodeableConcept;
        /**
         * Billing Code
         */
        service?: CodeableConcept;
        /**
         * Service/Product billing modifiers
         */
        modifier?: CodeableConcept[];
        /**
         * Professional fee or Product charge
         */
        fee?: Money;
        /**
         * List of note numbers which apply
         */
        noteNumber?: positiveInt[];
        /**
         * Contains extended information for property 'noteNumber'.
         */
        _noteNumber?: Element[];
        /**
         * Added items detail adjudication
         */
        adjudication?: ExplanationOfBenefitItemAdjudication[];
    }
    /**
     * Payment (if paid)
     */
    interface ExplanationOfBenefitPayment extends BackboneElement {
        /**
         * Partial or Complete
         */
        type?: CodeableConcept;
        /**
         * Payment adjustment for non-Claim issues
         */
        adjustment?: Money;
        /**
         * Explanation for the non-claim adjustment
         */
        adjustmentReason?: CodeableConcept;
        /**
         * Expected date of Payment
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
         * Identifier of the payment instrument
         */
        identifier?: Identifier;
    }
    /**
     * Processing notes
     */
    interface ExplanationOfBenefitProcessNote extends BackboneElement {
        /**
         * Sequence number for this note
         */
        number?: positiveInt;
        /**
         * Contains extended information for property 'number'.
         */
        _number?: Element;
        /**
         * display | print | printoper
         */
        type?: CodeableConcept;
        /**
         * Note explanitory text
         */
        text?: string;
        /**
         * Contains extended information for property 'text'.
         */
        _text?: Element;
        /**
         * Language if different from the resource
         */
        language?: CodeableConcept;
    }
    /**
     * Balance by Benefit Category
     */
    interface ExplanationOfBenefitBenefitBalance extends BackboneElement {
        /**
         * Type of services covered
         */
        category: CodeableConcept;
        /**
         * Detailed services covered within the type
         */
        subCategory?: CodeableConcept;
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
         * Deductable, visits, benefit amount
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
         * Type or discipline
         */
        type?: CodeableConcept;
        /**
         * Finer grained claim type information
         */
        subType?: CodeableConcept[];
        /**
         * The subject of the Products and Services
         */
        patient?: Reference;
        /**
         * Period for charge submission
         */
        billablePeriod?: Period;
        /**
         * Creation date
         */
        created?: dateTime;
        /**
         * Contains extended information for property 'created'.
         */
        _created?: Element;
        /**
         * Author
         */
        enterer?: Reference;
        /**
         * Insurer responsible for the EOB
         */
        insurer?: Reference;
        /**
         * Responsible provider for the claim
         */
        provider?: Reference;
        /**
         * Responsible organization for the claim
         */
        organization?: Reference;
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
         * complete | error | partial
         */
        outcome?: CodeableConcept;
        /**
         * Disposition Message
         */
        disposition?: string;
        /**
         * Contains extended information for property 'disposition'.
         */
        _disposition?: Element;
        /**
         * Related Claims which may be revelant to processing this claim
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
         * Party to be paid any benefits payable
         */
        payee?: ExplanationOfBenefitPayee;
        /**
         * Exceptions, special considerations, the condition, situation, prior or concurrent issues
         */
        information?: ExplanationOfBenefitInformation[];
        /**
         * Care Team members
         */
        careTeam?: ExplanationOfBenefitCareTeam[];
        /**
         * List of Diagnosis
         */
        diagnosis?: ExplanationOfBenefitDiagnosis[];
        /**
         * Procedures performed
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
         * Insurance or medical plan
         */
        insurance?: ExplanationOfBenefitInsurance;
        /**
         * Details of an accident
         */
        accident?: ExplanationOfBenefitAccident;
        /**
         * Period unable to work
         */
        employmentImpacted?: Period;
        /**
         * Period in hospital
         */
        hospitalization?: Period;
        /**
         * Goods and Services
         */
        item?: ExplanationOfBenefitItem[];
        /**
         * Insurer added line items
         */
        addItem?: ExplanationOfBenefitAddItem[];
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
         * Payment (if paid)
         */
        payment?: ExplanationOfBenefitPayment;
        /**
         * Printed Form Identifier
         */
        form?: CodeableConcept;
        /**
         * Processing notes
         */
        processNote?: ExplanationOfBenefitProcessNote[];
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
         * Instantiates protocol or definition
         */
        definition?: Reference[];
        /**
         * partial | completed | entered-in-error | health-unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * The taking of a family member's history did not occur
         */
        notDone?: boolean;
        /**
         * Contains extended information for property 'notDone'.
         */
        _notDone?: Element;
        /**
         * subject-unknown | withheld | unable-to-obtain | deferred
         */
        notDoneReason?: CodeableConcept;
        /**
         * Patient history is about
         */
        patient: Reference;
        /**
         * When history was captured/updated
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
        gender?: code;
        /**
         * Contains extended information for property 'gender'.
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
        category?: CodeableConcept;
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
         * proposed | accepted | planned | in-progress | on-target | ahead-of-target | behind-target | sustaining | achieved | on-hold | cancelled | entered-in-error | rejected
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
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
        subject?: Reference;
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
        target?: GoalTarget;
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
        path: string;
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
        target: GraphDefinitionLinkTarget[];
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
         * Profile for the target resource
         */
        profile?: uri;
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
         * Identifies the compartment
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
     * Definition of an graph of resources
     */
    interface GraphDefinition extends DomainResource {
        /**
         * Logical URI to reference this graph definition (globally unique)
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
         * Date this was last changed
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
         * Context the content is intended to support
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
        profile?: uri;
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
     * Trait of group members
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
         * Trait of group members
         */
        characteristic?: GroupCharacteristic[];
        /**
         * Who or what is in group
         */
        member?: GroupMember[];
    }
    /**
     * What codes are expected
     */
    interface DataRequirementCodeFilter extends Element {
        /**
         * The code-valued attribute of the filter
         */
        path: string;
        /**
         * Contains extended information for property 'path'.
         */
        _path?: Element;
        /**
         * Valueset for the filter
         */
        valueSetString?: string;
        /**
         * Contains extended information for property 'valueSetString'.
         */
        _valueSetString?: Element;
        /**
         * Valueset for the filter
         */
        valueSetReference?: Reference;
        /**
         * What code is expected
         */
        valueCode?: code[];
        /**
         * Contains extended information for property 'valueCode'.
         */
        _valueCode?: Element[];
        /**
         * What Coding is expected
         */
        valueCoding?: Coding[];
        /**
         * What CodeableConcept is expected
         */
        valueCodeableConcept?: CodeableConcept[];
    }
    /**
     * What dates/date ranges are expected
     */
    interface DataRequirementDateFilter extends Element {
        /**
         * The date-valued attribute of the filter
         */
        path: string;
        /**
         * Contains extended information for property 'path'.
         */
        _path?: Element;
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
        profile?: uri[];
        /**
         * Contains extended information for property 'profile'.
         */
        _profile?: Element[];
        /**
         * Indicates that specific structure elements are referenced by the knowledge module
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
    }
    /**
     * The formal response to a guidance request
     */
    interface GuidanceResponse extends DomainResource {
        /**
         * The id of the request associated with this response, if any
         */
        requestId?: id;
        /**
         * Contains extended information for property 'requestId'.
         */
        _requestId?: Element;
        /**
         * Business identifier
         */
        identifier?: Identifier;
        /**
         * A reference to a knowledge module
         */
        module: Reference;
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
         * Encounter or Episode during which the response was returned
         */
        context?: Reference;
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
         * Reason for the response
         */
        reasonCodeableConcept?: CodeableConcept;
        /**
         * Reason for the response
         */
        reasonReference?: Reference;
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
         * Service not availablefrom this date
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
         * Whether this healthcareservice is in active use
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
        category?: CodeableConcept;
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
        extraDetails?: string;
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
         * Location(s) service is inteded for/available to
         */
        coverageArea?: Reference[];
        /**
         * Conditions under which service is available/offered
         */
        serviceProvisionCode?: CodeableConcept[];
        /**
         * Specific eligibility requirements required to use the service
         */
        eligibility?: CodeableConcept;
        /**
         * Describes the eligibility conditions for the service
         */
        eligibilityNote?: string;
        /**
         * Contains extended information for property 'eligibilityNote'.
         */
        _eligibilityNote?: Element;
        /**
         * Program Names that categorize the service
         */
        programName?: string[];
        /**
         * Contains extended information for property 'programName'.
         */
        _programName?: Element[];
        /**
         * Collection of characteristics (attributes)
         */
        characteristic?: CodeableConcept[];
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
         * Technical endpoints providing access to services operated for the location
         */
        endpoint?: Reference[];
    }
    /**
     * Study identity of the selected instances
     */
    interface ImagingManifestStudy extends BackboneElement {
        /**
         * Study instance UID
         */
        uid: oid;
        /**
         * Contains extended information for property 'uid'.
         */
        _uid?: Element;
        /**
         * Reference to ImagingStudy
         */
        imagingStudy?: Reference;
        /**
         * Study access service endpoint
         */
        endpoint?: Reference[];
        /**
         * Series identity of the selected instances
         */
        series: ImagingManifestStudySeries[];
    }
    /**
     * Series identity of the selected instances
     */
    interface ImagingManifestStudySeries extends BackboneElement {
        /**
         * Series instance UID
         */
        uid: oid;
        /**
         * Contains extended information for property 'uid'.
         */
        _uid?: Element;
        /**
         * Series access endpoint
         */
        endpoint?: Reference[];
        /**
         * The selected instance
         */
        instance: ImagingManifestStudySeriesInstance[];
    }
    /**
     * The selected instance
     */
    interface ImagingManifestStudySeriesInstance extends BackboneElement {
        /**
         * SOP class UID of instance
         */
        sopClass: oid;
        /**
         * Contains extended information for property 'sopClass'.
         */
        _sopClass?: Element;
        /**
         * Selected instance UID
         */
        uid: oid;
        /**
         * Contains extended information for property 'uid'.
         */
        _uid?: Element;
    }
    /**
     * Key Object Selection
     */
    interface ImagingManifest extends DomainResource {
        /**
         * SOP Instance UID
         */
        identifier?: Identifier;
        /**
         * Patient of the selected objects
         */
        patient: Reference;
        /**
         * Time when the selection of instances was made
         */
        authoringTime?: dateTime;
        /**
         * Contains extended information for property 'authoringTime'.
         */
        _authoringTime?: Element;
        /**
         * Author (human or machine)
         */
        author?: Reference;
        /**
         * Description text
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Study identity of the selected instances
         */
        study: ImagingManifestStudy[];
    }
    /**
     * Each study has one or more series of instances
     */
    interface ImagingStudySeries extends BackboneElement {
        /**
         * Formal DICOM identifier for this series
         */
        uid: oid;
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
         * ONLINE | OFFLINE | NEARLINE | UNAVAILABLE
         */
        availability?: code;
        /**
         * Contains extended information for property 'availability'.
         */
        _availability?: Element;
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
        performer?: Reference[];
        /**
         * A single SOP instance from the series
         */
        instance?: ImagingStudySeriesInstance[];
    }
    /**
     * A single SOP instance from the series
     */
    interface ImagingStudySeriesInstance extends BackboneElement {
        /**
         * Formal DICOM identifier for this instance
         */
        uid: oid;
        /**
         * Contains extended information for property 'uid'.
         */
        _uid?: Element;
        /**
         * The number of this instance in the series
         */
        number?: unsignedInt;
        /**
         * Contains extended information for property 'number'.
         */
        _number?: Element;
        /**
         * DICOM class type
         */
        sopClass: oid;
        /**
         * Contains extended information for property 'sopClass'.
         */
        _sopClass?: Element;
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
         * Formal DICOM identifier for the study
         */
        uid: oid;
        /**
         * Contains extended information for property 'uid'.
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
         * ONLINE | OFFLINE | NEARLINE | UNAVAILABLE
         */
        availability?: code;
        /**
         * Contains extended information for property 'availability'.
         */
        _availability?: Element;
        /**
         * All series modality if actual acquisition modalities
         */
        modalityList?: Coding[];
        /**
         * Who the images are of
         */
        patient: Reference;
        /**
         * Originating context
         */
        context?: Reference;
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
        procedureReference?: Reference[];
        /**
         * The performed procedure code
         */
        procedureCode?: CodeableConcept[];
        /**
         * Why the study was requested
         */
        reason?: CodeableConcept;
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
    interface ImmunizationPractitioner extends BackboneElement {
        /**
         * What type of performance was done
         */
        role?: CodeableConcept;
        /**
         * Individual who was performing
         */
        actor: Reference;
    }
    /**
     * Administration/non-administration reasons
     */
    interface ImmunizationExplanation extends BackboneElement {
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
     * What protocol was followed
     */
    interface ImmunizationVaccinationProtocol extends BackboneElement {
        /**
         * Dose number within series
         */
        doseSequence?: positiveInt;
        /**
         * Contains extended information for property 'doseSequence'.
         */
        _doseSequence?: Element;
        /**
         * Details of vaccine protocol
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
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
         * Contains extended information for property 'series'.
         */
        _series?: Element;
        /**
         * Recommended number of doses for immunity
         */
        seriesDoses?: positiveInt;
        /**
         * Contains extended information for property 'seriesDoses'.
         */
        _seriesDoses?: Element;
        /**
         * Disease immunized against
         */
        targetDisease: CodeableConcept[];
        /**
         * Indicates if dose counts towards immunity
         */
        doseStatus: CodeableConcept;
        /**
         * Why dose does (not) count
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
         * completed | entered-in-error
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Flag for whether immunization was given
         */
        notGiven: boolean;
        /**
         * Contains extended information for property 'notGiven'.
         */
        _notGiven?: Element;
        /**
         * Vaccine product administered
         */
        vaccineCode: CodeableConcept;
        /**
         * Who was immunized
         */
        patient: Reference;
        /**
         * Encounter administered as part of
         */
        encounter?: Reference;
        /**
         * Vaccination administration date
         */
        date?: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Indicates context the data was recorded in
         */
        primarySource: boolean;
        /**
         * Contains extended information for property 'primarySource'.
         */
        _primarySource?: Element;
        /**
         * Indicates the source of a secondarily reported record
         */
        reportOrigin?: CodeableConcept;
        /**
         * Where vaccination occurred
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
        practitioner?: ImmunizationPractitioner[];
        /**
         * Vaccination notes
         */
        note?: Annotation[];
        /**
         * Administration/non-administration reasons
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
    interface ImmunizationRecommendationRecommendation extends BackboneElement {
        /**
         * Date recommendation created
         */
        date: dateTime;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Vaccine recommendation applies to
         */
        vaccineCode?: CodeableConcept;
        /**
         * Disease to be immunized against
         */
        targetDisease?: CodeableConcept;
        /**
         * Recommended dose number
         */
        doseNumber?: positiveInt;
        /**
         * Contains extended information for property 'doseNumber'.
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
     * Protocol used by recommendation
     */
    interface ImmunizationRecommendationRecommendationProtocol extends BackboneElement {
        /**
         * Dose number within sequence
         */
        doseSequence?: positiveInt;
        /**
         * Contains extended information for property 'doseSequence'.
         */
        _doseSequence?: Element;
        /**
         * Protocol details
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
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
         * Contains extended information for property 'series'.
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
     * Another Implementation guide this depends on
     */
    interface ImplementationGuideDependency extends BackboneElement {
        /**
         * reference | inclusion
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * Where to find dependency
         */
        uri: uri;
        /**
         * Contains extended information for property 'uri'.
         */
        _uri?: Element;
    }
    /**
     * Group of resources as used in .page.package
     */
    interface ImplementationGuidePackage extends BackboneElement {
        /**
         * Name used .page.package
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
        /**
         * Resource in the implementation guide
         */
        resource: ImplementationGuidePackageResource[];
    }
    /**
     * Resource in the implementation guide
     */
    interface ImplementationGuidePackageResource extends BackboneElement {
        /**
         * If not an example, has its normal meaning
         */
        example: boolean;
        /**
         * Contains extended information for property 'example'.
         */
        _example?: Element;
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
         * Short code to identify the resource
         */
        acronym?: string;
        /**
         * Contains extended information for property 'acronym'.
         */
        _acronym?: Element;
        /**
         * Location of the resource
         */
        sourceUri?: uri;
        /**
         * Contains extended information for property 'sourceUri'.
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
    interface ImplementationGuideGlobal extends BackboneElement {
        /**
         * Type this profiles applies to
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
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
    interface ImplementationGuidePage extends BackboneElement {
        /**
         * Where to find that page
         */
        source: uri;
        /**
         * Contains extended information for property 'source'.
         */
        _source?: Element;
        /**
         * Short title shown for navigational assistance
         */
        title: string;
        /**
         * Contains extended information for property 'title'.
         */
        _title?: Element;
        /**
         * page | example | list | include | directory | dictionary | toc | resource
         */
        kind: code;
        /**
         * Contains extended information for property 'kind'.
         */
        _kind?: Element;
        /**
         * Kind of resource to include in the list
         */
        type?: code[];
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element[];
        /**
         * Name of package to include
         */
        package?: string[];
        /**
         * Contains extended information for property 'package'.
         */
        _package?: Element[];
        /**
         * Format of the page (e.g. html, markdown, etc.)
         */
        format?: code;
        /**
         * Contains extended information for property 'format'.
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
         * Logical URI to reference this implementation guide (globally unique)
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
         * Date this was last changed
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
         * Context the content is intended to support
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
         * FHIR Version this Implementation Guide targets
         */
        fhirVersion?: id;
        /**
         * Contains extended information for property 'fhirVersion'.
         */
        _fhirVersion?: Element;
        /**
         * Another Implementation guide this depends on
         */
        dependency?: ImplementationGuideDependency[];
        /**
         * Group of resources as used in .page.package
         */
        package?: ImplementationGuidePackage[];
        /**
         * Profiles that apply globally
         */
        global?: ImplementationGuideGlobal[];
        /**
         * Image, css, script, etc.
         */
        binary?: uri[];
        /**
         * Contains extended information for property 'binary'.
         */
        _binary?: Element[];
        /**
         * Page/Section in the Guide
         */
        page?: ImplementationGuidePage;
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
        profile?: Reference;
    }
    /**
     * Represents a library of quality improvement components
     */
    interface Library extends DomainResource {
        /**
         * Logical URI to reference this library (globally unique)
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
         * Date this was last changed
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
         * Natural language description of the library
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
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
         * Context the content is intended to support
         */
        useContext?: UsageContext[];
        /**
         * Intended jurisdiction for library (if applicable)
         */
        jurisdiction?: CodeableConcept[];
        /**
         * E.g. Education, Treatment, Assessment, etc
         */
        topic?: CodeableConcept[];
        /**
         * A content contributor
         */
        contributor?: Contributor[];
        /**
         * Contact details for the publisher
         */
        contact?: ContactDetail[];
        /**
         * Use and/or publishing restrictions
         */
        copyright?: markdown;
        /**
         * Contains extended information for property 'copyright'.
         */
        _copyright?: Element;
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
     * Information summarized from a list of other resources
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
         * The Operational status of the location (typically only for a bed/room)
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
         * A list of alternate names that the location is known as, or was known as in the past
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
         * Organization responsible for provisioning and upkeep
         */
        managingOrganization?: Reference;
        /**
         * Another Location this one is physically part of
         */
        partOf?: Reference;
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
         * Unique identifier
         */
        identifier: Identifier;
        /**
         * Short name
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
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
         * Unique identifier
         */
        identifier?: Identifier;
        /**
         * initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation
         */
        code?: CodeableConcept;
        /**
         * Short name
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * The human readable description of this population criteria
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * The name of a valid referenced CQL expression (may be namespaced) that defines this population criteria
         */
        criteria: string;
        /**
         * Contains extended information for property 'criteria'.
         */
        _criteria?: Element;
    }
    /**
     * Stratifier criteria for the measure
     */
    interface MeasureGroupStratifier extends BackboneElement {
        /**
         * The identifier for the stratifier used to coordinate the reported data back to this stratifier
         */
        identifier?: Identifier;
        /**
         * How the measure should be stratified
         */
        criteria?: string;
        /**
         * Contains extended information for property 'criteria'.
         */
        _criteria?: Element;
        /**
         * Path to the stratifier
         */
        path?: string;
        /**
         * Contains extended information for property 'path'.
         */
        _path?: Element;
    }
    /**
     * What other data should be reported with the measure
     */
    interface MeasureSupplementalData extends BackboneElement {
        /**
         * Identifier, unique within the measure
         */
        identifier?: Identifier;
        /**
         * supplemental-data | risk-adjustment-factor
         */
        usage?: CodeableConcept[];
        /**
         * Expression describing additional data to be reported
         */
        criteria?: string;
        /**
         * Contains extended information for property 'criteria'.
         */
        _criteria?: Element;
        /**
         * Path to the supplemental data element
         */
        path?: string;
        /**
         * Contains extended information for property 'path'.
         */
        _path?: Element;
    }
    /**
     * A quality measure definition
     */
    interface Measure extends DomainResource {
        /**
         * Logical URI to reference this measure (globally unique)
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
         * Date this was last changed
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
         * Natural language description of the measure
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
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
         * Context the content is intended to support
         */
        useContext?: UsageContext[];
        /**
         * Intended jurisdiction for measure (if applicable)
         */
        jurisdiction?: CodeableConcept[];
        /**
         * E.g. Education, Treatment, Assessment, etc
         */
        topic?: CodeableConcept[];
        /**
         * A content contributor
         */
        contributor?: Contributor[];
        /**
         * Contact details for the publisher
         */
        contact?: ContactDetail[];
        /**
         * Use and/or publishing restrictions
         */
        copyright?: markdown;
        /**
         * Contains extended information for property 'copyright'.
         */
        _copyright?: Element;
        /**
         * Additional documentation, citations, etc
         */
        relatedArtifact?: RelatedArtifact[];
        /**
         * Logic used by the measure
         */
        library?: Reference[];
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
         * How is risk adjustment applied for this measure
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
         * Why does this measure exist
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
         * Improvement notation for the measure, e.g. higher score indicates better quality
         */
        improvementNotation?: string;
        /**
         * Contains extended information for property 'improvementNotation'.
         */
        _improvementNotation?: Element;
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
         * The measure set, e.g. Preventive Care and Screening
         */
        set?: string;
        /**
         * Contains extended information for property 'set'.
         */
        _set?: Element;
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
         * What group of the measure
         */
        identifier: Identifier;
        /**
         * The populations in the group
         */
        population?: MeasureReportGroupPopulation[];
        /**
         * What score this group achieved
         */
        measureScore?: decimal;
        /**
         * Contains extended information for property 'measureScore'.
         */
        _measureScore?: Element;
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
         * Population identifier as defined in the measure
         */
        identifier?: Identifier;
        /**
         * initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-score
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
         * For patient-list reports, the patients in this population
         */
        patients?: Reference;
    }
    /**
     * Stratification results
     */
    interface MeasureReportGroupStratifier extends BackboneElement {
        /**
         * What stratifier of the group
         */
        identifier?: Identifier;
        /**
         * Stratum results, one for each unique value in the stratifier
         */
        stratum?: MeasureReportGroupStratifierStratum[];
    }
    /**
     * Stratum results, one for each unique value in the stratifier
     */
    interface MeasureReportGroupStratifierStratum extends BackboneElement {
        /**
         * The stratum value, e.g. male
         */
        value: string;
        /**
         * Contains extended information for property 'value'.
         */
        _value?: Element;
        /**
         * Population results in this stratum
         */
        population?: MeasureReportGroupStratifierStratumPopulation[];
        /**
         * What score this stratum achieved
         */
        measureScore?: decimal;
        /**
         * Contains extended information for property 'measureScore'.
         */
        _measureScore?: Element;
    }
    /**
     * Population results in this stratum
     */
    interface MeasureReportGroupStratifierStratumPopulation extends BackboneElement {
        /**
         * Population identifier as defined in the measure
         */
        identifier?: Identifier;
        /**
         * initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-score
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
         * For patient-list reports, the patients in this population
         */
        patients?: Reference;
    }
    /**
     * Results of a measure evaluation
     */
    interface MeasureReport extends DomainResource {
        /**
         * Additional identifier for the Report
         */
        identifier?: Identifier;
        /**
         * complete | pending | error
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * individual | patient-list | summary
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * What measure was evaluated
         */
        measure: Reference;
        /**
         * What patient the report is for
         */
        patient?: Reference;
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
        reportingOrganization?: Reference;
        /**
         * What period the report covers
         */
        period: Period;
        /**
         * Measure results for each group
         */
        group?: MeasureReportGroup[];
        /**
         * What data was evaluated to produce the measure score
         */
        evaluatedResources?: Reference;
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
         * photo | video | audio
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * The type of acquisition equipment/process
         */
        subtype?: CodeableConcept;
        /**
         * Imaging view, e.g. Lateral or Antero-posterior
         */
        view?: CodeableConcept;
        /**
         * Who/What this Media is a record of
         */
        subject?: Reference;
        /**
         * Encounter / Episode associated with media
         */
        context?: Reference;
        /**
         * When Media was collected
         */
        occurrenceDateTime?: dateTime;
        /**
         * Contains extended information for property 'occurrenceDateTime'.
         */
        _occurrenceDateTime?: Element;
        /**
         * When Media was collected
         */
        occurrencePeriod?: Period;
        /**
         * The person who generated the image
         */
        operator?: Reference;
        /**
         * Why was event performed?
         */
        reasonCode?: CodeableConcept[];
        /**
         * Body part in media
         */
        bodySite?: CodeableConcept;
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
        duration?: unsignedInt;
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
         * The product contained
         */
        itemCodeableConcept?: CodeableConcept;
        /**
         * The product contained
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
        amount?: Ratio;
    }
    /**
     * Details about packaged medications
     */
    interface MedicationPackage extends BackboneElement {
        /**
         * E.g. box, vial, blister-pack
         */
        container?: CodeableConcept;
        /**
         * What is  in the package
         */
        content?: MedicationPackageContent[];
        /**
         * Identifies a single production run
         */
        batch?: MedicationPackageBatch[];
    }
    /**
     * What is  in the package
     */
    interface MedicationPackageContent extends BackboneElement {
        /**
         * The item in the package
         */
        itemCodeableConcept?: CodeableConcept;
        /**
         * The item in the package
         */
        itemReference?: Reference;
        /**
         * Quantity present in the package
         */
        amount?: Quantity;
    }
    /**
     * Identifies a single production run
     */
    interface MedicationPackageBatch extends BackboneElement {
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
         * True if a brand
         */
        isBrand?: boolean;
        /**
         * Contains extended information for property 'isBrand'.
         */
        _isBrand?: Element;
        /**
         * True if medication does not require a prescription
         */
        isOverTheCounter?: boolean;
        /**
         * Contains extended information for property 'isOverTheCounter'.
         */
        _isOverTheCounter?: Element;
        /**
         * Manufacturer of the item
         */
        manufacturer?: Reference;
        /**
         * powder | tablets | capsule +
         */
        form?: CodeableConcept;
        /**
         * Active or inactive ingredient
         */
        ingredient?: MedicationIngredient[];
        /**
         * Details about packaged medications
         */
        package?: MedicationPackage;
        /**
         * Picture of the medication
         */
        image?: Attachment[];
    }
    /**
     * Who administered substance
     */
    interface MedicationAdministrationPerformer extends BackboneElement {
        /**
         * Individual who was performing
         */
        actor: Reference;
        /**
         * Organization organization was acting for
         */
        onBehalfOf?: Reference;
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
        definition?: Reference[];
        /**
         * Part of referenced event
         */
        partOf?: Reference[];
        /**
         * in-progress | on-hold | completed | entered-in-error | stopped | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
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
         * Who administered substance
         */
        performer?: MedicationAdministrationPerformer[];
        /**
         * True if medication not administered
         */
        notGiven?: boolean;
        /**
         * Contains extended information for property 'notGiven'.
         */
        _notGiven?: Element;
        /**
         * Reason administration not performed
         */
        reasonNotGiven?: CodeableConcept[];
        /**
         * Reason administration performed
         */
        reasonCode?: CodeableConcept[];
        /**
         * Condition or Observation that supports why the medication was administered
         */
        reasonReference?: Reference[];
        /**
         * Request administration performed against
         */
        prescription?: Reference;
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
         * Individual who was performing
         */
        actor: Reference;
        /**
         * Organization organization was acting for
         */
        onBehalfOf?: Reference;
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
         * preparation | in-progress | on-hold | completed | entered-in-error | stopped
         */
        status?: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
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
         * Whether the dispense was or was not performed
         */
        notDone?: boolean;
        /**
         * Contains extended information for property 'notDone'.
         */
        _notDone?: Element;
        /**
         * Why a dispense was not performed
         */
        notDoneReasonCodeableConcept?: CodeableConcept;
        /**
         * Why a dispense was not performed
         */
        notDoneReasonReference?: Reference;
        /**
         * A list of releveant lifecycle events
         */
        eventHistory?: Reference[];
    }
    /**
     * Who/What requested the Request
     */
    interface MedicationRequestRequester extends BackboneElement {
        /**
         * Who ordered the initial medication(s)
         */
        agent: Reference;
        /**
         * Organization agent is acting for
         */
        onBehalfOf?: Reference;
    }
    /**
     * Medication supply authorization
     */
    interface MedicationRequestDispenseRequest extends BackboneElement {
        /**
         * Time period supply is authorized for
         */
        validityPeriod?: Period;
        /**
         * Number of refills authorized
         */
        numberOfRepeatsAllowed?: positiveInt;
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
     * Any restrictions on medication substitution
     */
    interface MedicationRequestSubstitution extends BackboneElement {
        /**
         * Whether substitution is allowed or not
         */
        allowed: boolean;
        /**
         * Contains extended information for property 'allowed'.
         */
        _allowed?: Element;
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
         * Protocol or definition
         */
        definition?: Reference[];
        /**
         * What request fulfills
         */
        basedOn?: Reference[];
        /**
         * Composite request this is part of
         */
        groupIdentifier?: Identifier;
        /**
         * active | on-hold | cancelled | completed | entered-in-error | stopped | draft | unknown
         */
        status?: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * proposal | plan | order | instance-order
         */
        intent: code;
        /**
         * Contains extended information for property 'intent'.
         */
        _intent?: Element;
        /**
         * Type of medication usage
         */
        category?: CodeableConcept;
        /**
         * routine | urgent | stat | asap
         */
        priority?: code;
        /**
         * Contains extended information for property 'priority'.
         */
        _priority?: Element;
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
         * Created during encounter/admission/stay
         */
        context?: Reference;
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
        requester?: MedicationRequestRequester;
        /**
         * Person who entered the request
         */
        recorder?: Reference;
        /**
         * Reason or indication for writing the prescription
         */
        reasonCode?: CodeableConcept[];
        /**
         * Condition or Observation that supports why the prescription is being written
         */
        reasonReference?: Reference[];
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
         * Encounter / Episode associated with MedicationStatement
         */
        context?: Reference;
        /**
         * active | completed | entered-in-error | intended | stopped | on-hold
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
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
         * The date/time or interval when the medication was taken
         */
        effectiveDateTime?: dateTime;
        /**
         * Contains extended information for property 'effectiveDateTime'.
         */
        _effectiveDateTime?: Element;
        /**
         * The date/time or interval when the medication was taken
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
         * Who is/was taking  the medication
         */
        subject: Reference;
        /**
         * Additional supporting information
         */
        derivedFrom?: Reference[];
        /**
         * y | n | unk | na
         */
        taken: code;
        /**
         * Contains extended information for property 'taken'.
         */
        _taken?: Element;
        /**
         * True if asserting medication was not given
         */
        reasonNotTaken?: CodeableConcept[];
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
        profile?: Reference;
        /**
         * Minimum number of focuses of this type
         */
        min?: unsignedInt;
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
        message: Reference;
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
         * Logical URI to reference this message definition (globally unique)
         */
        url?: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Additional identifier for the message definition
         */
        identifier?: Identifier;
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
         * Date this was last changed
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
         * Context the content is intended to support
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
        base?: Reference;
        /**
         * Protocol/workflow this is part of
         */
        parent?: Reference[];
        /**
         * Takes the place of
         */
        replaces?: Reference[];
        /**
         * Event type
         */
        event: Coding;
        /**
         * Consequence | Currency | Notification
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
         * Is a response required?
         */
        responseRequired?: boolean;
        /**
         * Contains extended information for property 'responseRequired'.
         */
        _responseRequired?: Element;
        /**
         * Responses to this message
         */
        allowedResponse?: MessageDefinitionAllowedResponse[];
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
        endpoint: uri;
        /**
         * Contains extended information for property 'endpoint'.
         */
        _endpoint?: Element;
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
        endpoint: uri;
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
         * Code for the event this message represents
         */
        event: Coding;
        /**
         * Message destination application(s)
         */
        destination?: MessageHeaderDestination[];
        /**
         * Intended "real-world" recipient for the data
         */
        receiver?: Reference;
        /**
         * Real world sender of the message
         */
        sender?: Reference;
        /**
         * Time that the message was sent
         */
        timestamp: instant;
        /**
         * Contains extended information for property 'timestamp'.
         */
        _timestamp?: Element;
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
         * Date this was last changed
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
         * Context the content is intended to support
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
        /**
         * Use this instead
         */
        replacedBy?: Reference;
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
         * proposed | draft | planned | requested | active | on-hold | completed | cancelled | entered-in-error
         */
        status?: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
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
     * Resource related to this observation
     */
    interface ObservationRelated extends BackboneElement {
        /**
         * has-member | derived-from | sequel-to | replaces | qualified-by | interfered-by
         */
        type?: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * Resource that is related to this one
         */
        target: Reference;
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
        interpretation?: CodeableConcept;
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
         * Who and/or what this is about
         */
        subject?: Reference;
        /**
         * Healthcare event during which this observation is made
         */
        context?: Reference;
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
         * Date/Time this was made available
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
        interpretation?: CodeableConcept;
        /**
         * Comments about result
         */
        comment?: string;
        /**
         * Contains extended information for property 'comment'.
         */
        _comment?: Element;
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
         * number | date | string | token | reference | composite | quantity | uri
         */
        searchType?: code;
        /**
         * Contains extended information for property 'searchType'.
         */
        _searchType?: Element;
        /**
         * Profile on the type
         */
        profile?: Reference;
        /**
         * ValueSet details if this is coded
         */
        binding?: OperationDefinitionParameterBinding;
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
        valueSetUri?: uri;
        /**
         * Contains extended information for property 'valueSetUri'.
         */
        _valueSetUri?: Element;
        /**
         * Source of value set
         */
        valueSetReference?: Reference;
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
         * Logical URI to reference this operation definition (globally unique)
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
         * Date this was last changed
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
         * Context the content is intended to support
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
         * Whether content is unchanged by the operation
         */
        idempotent?: boolean;
        /**
         * Contains extended information for property 'idempotent'.
         */
        _idempotent?: Element;
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
        comment?: string;
        /**
         * Contains extended information for property 'comment'.
         */
        _comment?: Element;
        /**
         * Marks this as a profile of the base
         */
        base?: Reference;
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
         * Invole at the type level?
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
         * Path of element(s) related to issue
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
         * A list of alternate names that the organization is known as, or was known as in the past
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
     * This patient is known to be an animal (non-human)
     */
    interface PatientAnimal extends BackboneElement {
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
     * A list of Languages which may be used to communicate with the patient about their health
     */
    interface PatientCommunication extends BackboneElement {
        /**
         * The language which can be used to communicate with the patient about their health
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
         * replaced-by | replaces | refer | seealso - type of link
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
         * This patient is known to be an animal (non-human)
         */
        animal?: PatientAnimal;
        /**
         * A list of Languages which may be used to communicate with the patient about their health
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
         * Request reference
         */
        request?: Reference;
        /**
         * Response reference
         */
        response?: Reference;
        /**
         * Payment or clearing date
         */
        statusDate?: date;
        /**
         * Contains extended information for property 'statusDate'.
         */
        _statusDate?: Element;
        /**
         * Creation date
         */
        created?: dateTime;
        /**
         * Contains extended information for property 'created'.
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
         * Whether payment has been sent or cleared
         */
        paymentStatus?: CodeableConcept;
    }
    /**
     * List of settlements
     */
    interface PaymentReconciliationDetail extends BackboneElement {
        /**
         * Type code
         */
        type: CodeableConcept;
        /**
         * Claim
         */
        request?: Reference;
        /**
         * Claim Response
         */
        response?: Reference;
        /**
         * Organization which submitted the claim
         */
        submitter?: Reference;
        /**
         * Organization which is receiving the payment
         */
        payee?: Reference;
        /**
         * Invoice date
         */
        date?: date;
        /**
         * Contains extended information for property 'date'.
         */
        _date?: Element;
        /**
         * Amount being paid
         */
        amount?: Money;
    }
    /**
     * Processing comments
     */
    interface PaymentReconciliationProcessNote extends BackboneElement {
        /**
         * display | print | printoper
         */
        type?: CodeableConcept;
        /**
         * Comment on the processing
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
         * Period covered
         */
        period?: Period;
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
         * Claim reference
         */
        request?: Reference;
        /**
         * complete | error | partial
         */
        outcome?: CodeableConcept;
        /**
         * Disposition Message
         */
        disposition?: string;
        /**
         * Contains extended information for property 'disposition'.
         */
        _disposition?: Element;
        /**
         * Responsible practitioner
         */
        requestProvider?: Reference;
        /**
         * Responsible organization
         */
        requestOrganization?: Reference;
        /**
         * List of settlements
         */
        detail?: PaymentReconciliationDetail[];
        /**
         * Printed Form Identifier
         */
        form?: CodeableConcept;
        /**
         * Total amount of Payment
         */
        total?: Money;
        /**
         * Processing comments
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
         * E.g. Treatment, dietary, behavioral, etc
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
         * User-visible label for the action (e.g. 1. or A.)
         */
        label?: string;
        /**
         * Contains extended information for property 'label'.
         */
        _label?: Element;
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
         * When the action should be triggered
         */
        triggerDefinition?: TriggerDefinition[];
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
        type?: Coding;
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
        definition?: Reference;
        /**
         * Transform to apply the template
         */
        transform?: Reference;
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
     * Defines an expected trigger for a module
     */
    interface TriggerDefinition extends Element {
        /**
         * named-event | periodic | data-added | data-modified | data-removed | data-accessed | data-access-ended
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * Triggering event name
         */
        eventName?: string;
        /**
         * Contains extended information for property 'eventName'.
         */
        _eventName?: Element;
        /**
         * Timing of the event
         */
        eventTimingTiming?: Timing;
        /**
         * Timing of the event
         */
        eventTimingReference?: Reference;
        /**
         * Timing of the event
         */
        eventTimingDate?: date;
        /**
         * Contains extended information for property 'eventTimingDate'.
         */
        _eventTimingDate?: Element;
        /**
         * Timing of the event
         */
        eventTimingDateTime?: dateTime;
        /**
         * Contains extended information for property 'eventTimingDateTime'.
         */
        _eventTimingDateTime?: Element;
        /**
         * Triggering data of the event
         */
        eventData?: DataRequirement;
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
         * patient | practitioner | related-person
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * E.g. Nurse, Surgeon, Parent, etc
         */
        role?: CodeableConcept;
    }
    /**
     * Dynamic aspects of the definition
     */
    interface PlanDefinitionActionDynamicValue extends BackboneElement {
        /**
         * Natural language description of the dynamic value
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * The path to the element to be set dynamically
         */
        path?: string;
        /**
         * Contains extended information for property 'path'.
         */
        _path?: Element;
        /**
         * Language of the expression
         */
        language?: string;
        /**
         * Contains extended information for property 'language'.
         */
        _language?: Element;
        /**
         * An expression that provides the dynamic value for the customization
         */
        expression?: string;
        /**
         * Contains extended information for property 'expression'.
         */
        _expression?: Element;
    }
    /**
     * The definition of a plan for a series of actions, independent of any specific patient or context
     */
    interface PlanDefinition extends DomainResource {
        /**
         * Logical URI to reference this plan definition (globally unique)
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
         * order-set | protocol | eca-rule
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
         * Date this was last changed
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
         * Natural language description of the plan definition
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Why this plan definition is defined
         */
        purpose?: markdown;
        /**
         * Contains extended information for property 'purpose'.
         */
        _purpose?: Element;
        /**
         * Describes the clinical usage of the asset
         */
        usage?: string;
        /**
         * Contains extended information for property 'usage'.
         */
        _usage?: Element;
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
         * Context the content is intended to support
         */
        useContext?: UsageContext[];
        /**
         * Intended jurisdiction for plan definition (if applicable)
         */
        jurisdiction?: CodeableConcept[];
        /**
         * E.g. Education, Treatment, Assessment, etc
         */
        topic?: CodeableConcept[];
        /**
         * A content contributor
         */
        contributor?: Contributor[];
        /**
         * Contact details for the publisher
         */
        contact?: ContactDetail[];
        /**
         * Use and/or publishing restrictions
         */
        copyright?: markdown;
        /**
         * Contains extended information for property 'copyright'.
         */
        _copyright?: Element;
        /**
         * Related artifacts for the asset
         */
        relatedArtifact?: RelatedArtifact[];
        /**
         * Logic used by the plan definition
         */
        library?: Reference[];
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
     * Qualifications obtained by training and certification
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
         * A identifier for the person as this agent
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
         * Qualifications obtained by training and certification
         */
        qualification?: PractitionerQualification[];
        /**
         * A language the practitioner is able to use in patient communication
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
         * Service not availablefrom this date
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
         * Whether this practitioner's record is in active use
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
         * Practitioner that is able to provide the defined services for the organation
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
         * The role the actor was in
         */
        role?: CodeableConcept;
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
     * Device changed in procedure
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
         * Instantiates protocol or definition
         */
        definition?: Reference[];
        /**
         * A request for this procedure
         */
        basedOn?: Reference[];
        /**
         * Part of referenced event
         */
        partOf?: Reference[];
        /**
         * preparation | in-progress | suspended | aborted | completed | entered-in-error | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * True if procedure was not performed as scheduled
         */
        notDone?: boolean;
        /**
         * Contains extended information for property 'notDone'.
         */
        _notDone?: Element;
        /**
         * Reason procedure was not performed
         */
        notDoneReason?: CodeableConcept;
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
         * Encounter or episode associated with the procedure
         */
        context?: Reference;
        /**
         * Date/Period the procedure was performed
         */
        performedDateTime?: dateTime;
        /**
         * Contains extended information for property 'performedDateTime'.
         */
        _performedDateTime?: Element;
        /**
         * Date/Period the procedure was performed
         */
        performedPeriod?: Period;
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
         * Condition that is the reason the procedure performed
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
         * A condition that is a result of the procedure
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
         * Device changed in procedure
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
     * Who/what is requesting procedure or diagnostic
     */
    interface ProcedureRequestRequester extends BackboneElement {
        /**
         * Individual making the request
         */
        agent: Reference;
        /**
         * Organization agent is acting for
         */
        onBehalfOf?: Reference;
    }
    /**
     * A request for a procedure or diagnostic to be performed
     */
    interface ProcedureRequest extends DomainResource {
        /**
         * Identifiers assigned to this order
         */
        identifier?: Identifier[];
        /**
         * Protocol or definition
         */
        definition?: Reference[];
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
         * draft | active | suspended | completed | entered-in-error | cancelled
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * proposal | plan | order +
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
         * True if procedure should not be performed
         */
        doNotPerform?: boolean;
        /**
         * Contains extended information for property 'doNotPerform'.
         */
        _doNotPerform?: Element;
        /**
         * Classification of procedure
         */
        category?: CodeableConcept[];
        /**
         * What is being requested/ordered
         */
        code: CodeableConcept;
        /**
         * Individual the service is ordered for
         */
        subject: Reference;
        /**
         * Encounter or Episode during which request was created
         */
        context?: Reference;
        /**
         * When procedure should occur
         */
        occurrenceDateTime?: dateTime;
        /**
         * Contains extended information for property 'occurrenceDateTime'.
         */
        _occurrenceDateTime?: Element;
        /**
         * When procedure should occur
         */
        occurrencePeriod?: Period;
        /**
         * When procedure should occur
         */
        occurrenceTiming?: Timing;
        /**
         * Preconditions for procedure or diagnostic
         */
        asNeededBoolean?: boolean;
        /**
         * Contains extended information for property 'asNeededBoolean'.
         */
        _asNeededBoolean?: Element;
        /**
         * Preconditions for procedure or diagnostic
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
         * Who/what is requesting procedure or diagnostic
         */
        requester?: ProcedureRequestRequester;
        /**
         * Performer role
         */
        performerType?: CodeableConcept;
        /**
         * Requested perfomer
         */
        performer?: Reference;
        /**
         * Explanation/Justification for test
         */
        reasonCode?: CodeableConcept[];
        /**
         * Explanation/Justification for test
         */
        reasonReference?: Reference[];
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
         * Request provenance
         */
        relevantHistory?: Reference[];
    }
    /**
     * Items to re-adjudicate
     */
    interface ProcessRequestItem extends BackboneElement {
        /**
         * Service instance
         */
        sequenceLinkId: integer;
        /**
         * Contains extended information for property 'sequenceLinkId'.
         */
        _sequenceLinkId?: Element;
    }
    /**
     * Request to perform some action on or in regards to an existing resource
     */
    interface ProcessRequest extends DomainResource {
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
         * cancel | poll | reprocess | status
         */
        action?: code;
        /**
         * Contains extended information for property 'action'.
         */
        _action?: Element;
        /**
         * Party which is the target of the request
         */
        target?: Reference;
        /**
         * Creation date
         */
        created?: dateTime;
        /**
         * Contains extended information for property 'created'.
         */
        _created?: Element;
        /**
         * Responsible practitioner
         */
        provider?: Reference;
        /**
         * Responsible organization
         */
        organization?: Reference;
        /**
         * Reference to the Request resource
         */
        request?: Reference;
        /**
         * Reference to the Response resource
         */
        response?: Reference;
        /**
         * Remove history
         */
        nullify?: boolean;
        /**
         * Contains extended information for property 'nullify'.
         */
        _nullify?: Element;
        /**
         * Reference number/string
         */
        reference?: string;
        /**
         * Contains extended information for property 'reference'.
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
         * Contains extended information for property 'include'.
         */
        _include?: Element[];
        /**
         * Resource type(s) to exclude
         */
        exclude?: string[];
        /**
         * Contains extended information for property 'exclude'.
         */
        _exclude?: Element[];
        /**
         * Selection period
         */
        period?: Period;
    }
    /**
     * Processing comments or additional requirements
     */
    interface ProcessResponseProcessNote extends BackboneElement {
        /**
         * display | print | printoper
         */
        type?: CodeableConcept;
        /**
         * Comment on the processing
         */
        text?: string;
        /**
         * Contains extended information for property 'text'.
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
         * Authoring Organization
         */
        organization?: Reference;
        /**
         * Request reference
         */
        request?: Reference;
        /**
         * Processing outcome
         */
        outcome?: CodeableConcept;
        /**
         * Disposition Message
         */
        disposition?: string;
        /**
         * Contains extended information for property 'disposition'.
         */
        _disposition?: Element;
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
        form?: CodeableConcept;
        /**
         * Processing comments or additional requirements
         */
        processNote?: ProcessResponseProcessNote[];
        /**
         * Error code
         */
        error?: CodeableConcept[];
        /**
         * Request for additional information
         */
        communicationRequest?: Reference[];
    }
    /**
     * Actor involved
     */
    interface ProvenanceAgent extends BackboneElement {
        /**
         * What the agents role was
         */
        role?: CodeableConcept[];
        /**
         * Who participated
         */
        whoUri?: uri;
        /**
         * Contains extended information for property 'whoUri'.
         */
        _whoUri?: Element;
        /**
         * Who participated
         */
        whoReference?: Reference;
        /**
         * Who the agent is representing
         */
        onBehalfOfUri?: uri;
        /**
         * Contains extended information for property 'onBehalfOfUri'.
         */
        _onBehalfOfUri?: Element;
        /**
         * Who the agent is representing
         */
        onBehalfOfReference?: Reference;
        /**
         * Type of relationship between agents
         */
        relatedAgentType?: CodeableConcept;
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
        whatUri?: uri;
        /**
         * Contains extended information for property 'whatUri'.
         */
        _whatUri?: Element;
        /**
         * Identity of entity
         */
        whatReference?: Reference;
        /**
         * Identity of entity
         */
        whatIdentifier?: Identifier;
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
        period?: Period;
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
        reason?: Coding[];
        /**
         * Activity that occurred
         */
        activity?: Coding;
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
        options?: Reference;
        /**
         * Permitted answer
         */
        option?: QuestionnaireItemOption[];
        /**
         * Default value when item is first rendered
         */
        initialBoolean?: boolean;
        /**
         * Contains extended information for property 'initialBoolean'.
         */
        _initialBoolean?: Element;
        /**
         * Default value when item is first rendered
         */
        initialDecimal?: decimal;
        /**
         * Contains extended information for property 'initialDecimal'.
         */
        _initialDecimal?: Element;
        /**
         * Default value when item is first rendered
         */
        initialInteger?: integer;
        /**
         * Contains extended information for property 'initialInteger'.
         */
        _initialInteger?: Element;
        /**
         * Default value when item is first rendered
         */
        initialDate?: date;
        /**
         * Contains extended information for property 'initialDate'.
         */
        _initialDate?: Element;
        /**
         * Default value when item is first rendered
         */
        initialDateTime?: dateTime;
        /**
         * Contains extended information for property 'initialDateTime'.
         */
        _initialDateTime?: Element;
        /**
         * Default value when item is first rendered
         */
        initialTime?: time;
        /**
         * Contains extended information for property 'initialTime'.
         */
        _initialTime?: Element;
        /**
         * Default value when item is first rendered
         */
        initialString?: string;
        /**
         * Contains extended information for property 'initialString'.
         */
        _initialString?: Element;
        /**
         * Default value when item is first rendered
         */
        initialUri?: uri;
        /**
         * Contains extended information for property 'initialUri'.
         */
        _initialUri?: Element;
        /**
         * Default value when item is first rendered
         */
        initialAttachment?: Attachment;
        /**
         * Default value when item is first rendered
         */
        initialCoding?: Coding;
        /**
         * Default value when item is first rendered
         */
        initialQuantity?: Quantity;
        /**
         * Default value when item is first rendered
         */
        initialReference?: Reference;
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
         * Enable when answered or not
         */
        hasAnswer?: boolean;
        /**
         * Contains extended information for property 'hasAnswer'.
         */
        _hasAnswer?: Element;
        /**
         * Value question must have
         */
        answerBoolean?: boolean;
        /**
         * Contains extended information for property 'answerBoolean'.
         */
        _answerBoolean?: Element;
        /**
         * Value question must have
         */
        answerDecimal?: decimal;
        /**
         * Contains extended information for property 'answerDecimal'.
         */
        _answerDecimal?: Element;
        /**
         * Value question must have
         */
        answerInteger?: integer;
        /**
         * Contains extended information for property 'answerInteger'.
         */
        _answerInteger?: Element;
        /**
         * Value question must have
         */
        answerDate?: date;
        /**
         * Contains extended information for property 'answerDate'.
         */
        _answerDate?: Element;
        /**
         * Value question must have
         */
        answerDateTime?: dateTime;
        /**
         * Contains extended information for property 'answerDateTime'.
         */
        _answerDateTime?: Element;
        /**
         * Value question must have
         */
        answerTime?: time;
        /**
         * Contains extended information for property 'answerTime'.
         */
        _answerTime?: Element;
        /**
         * Value question must have
         */
        answerString?: string;
        /**
         * Contains extended information for property 'answerString'.
         */
        _answerString?: Element;
        /**
         * Value question must have
         */
        answerUri?: uri;
        /**
         * Contains extended information for property 'answerUri'.
         */
        _answerUri?: Element;
        /**
         * Value question must have
         */
        answerAttachment?: Attachment;
        /**
         * Value question must have
         */
        answerCoding?: Coding;
        /**
         * Value question must have
         */
        answerQuantity?: Quantity;
        /**
         * Value question must have
         */
        answerReference?: Reference;
    }
    /**
     * Permitted answer
     */
    interface QuestionnaireItemOption extends BackboneElement {
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
    }
    /**
     * A structured set of questions
     */
    interface Questionnaire extends DomainResource {
        /**
         * Logical URI to reference this questionnaire (globally unique)
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
         * Date this was last changed
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
         * Natural language description of the questionnaire
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Why this questionnaire is defined
         */
        purpose?: markdown;
        /**
         * Contains extended information for property 'purpose'.
         */
        _purpose?: Element;
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
         * Context the content is intended to support
         */
        useContext?: UsageContext[];
        /**
         * Intended jurisdiction for questionnaire (if applicable)
         */
        jurisdiction?: CodeableConcept[];
        /**
         * Contact details for the publisher
         */
        contact?: ContactDetail[];
        /**
         * Use and/or publishing restrictions
         */
        copyright?: markdown;
        /**
         * Contains extended information for property 'copyright'.
         */
        _copyright?: Element;
        /**
         * Concept that represents the overall questionnaire
         */
        code?: Coding[];
        /**
         * Resource that can be subject of QuestionnaireResponse
         */
        subjectType?: code[];
        /**
         * Contains extended information for property 'subjectType'.
         */
        _subjectType?: Element[];
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
         * The subject this group's answers are about
         */
        subject?: Reference;
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
        parent?: Reference[];
        /**
         * Form being answered
         */
        questionnaire?: Reference;
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
         * Encounter or Episode during which questionnaire was completed
         */
        context?: Reference;
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
     * Who/what is requesting service
     */
    interface ReferralRequestRequester extends BackboneElement {
        /**
         * Individual making the request
         */
        agent: Reference;
        /**
         * Organization agent is acting for
         */
        onBehalfOf?: Reference;
    }
    /**
     * A request for referral or transfer of care
     */
    interface ReferralRequest extends DomainResource {
        /**
         * Business identifier
         */
        identifier?: Identifier[];
        /**
         * Instantiates protocol or definition
         */
        definition?: Reference[];
        /**
         * Request fulfilled by this request
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
         * draft | active | suspended | cancelled | completed | entered-in-error | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * proposal | plan | order
         */
        intent: code;
        /**
         * Contains extended information for property 'intent'.
         */
        _intent?: Element;
        /**
         * Referral/Transition of care request type
         */
        type?: CodeableConcept;
        /**
         * Urgency of referral / transfer of care request
         */
        priority?: code;
        /**
         * Contains extended information for property 'priority'.
         */
        _priority?: Element;
        /**
         * Actions requested as part of the referral
         */
        serviceRequested?: CodeableConcept[];
        /**
         * Patient referred to care or transfer
         */
        subject: Reference;
        /**
         * Originating encounter
         */
        context?: Reference;
        /**
         * When the service(s) requested in the referral should occur
         */
        occurrenceDateTime?: dateTime;
        /**
         * Contains extended information for property 'occurrenceDateTime'.
         */
        _occurrenceDateTime?: Element;
        /**
         * When the service(s) requested in the referral should occur
         */
        occurrencePeriod?: Period;
        /**
         * Date of creation/activation
         */
        authoredOn?: dateTime;
        /**
         * Contains extended information for property 'authoredOn'.
         */
        _authoredOn?: Element;
        /**
         * Who/what is requesting service
         */
        requester?: ReferralRequestRequester;
        /**
         * The clinical specialty (discipline) that the referral is requested for
         */
        specialty?: CodeableConcept;
        /**
         * Receiver of referral / transfer of care request
         */
        recipient?: Reference[];
        /**
         * Reason for referral / transfer of care request
         */
        reasonCode?: CodeableConcept[];
        /**
         * Why is service needed?
         */
        reasonReference?: Reference[];
        /**
         * A textual description of the referral
         */
        description?: string;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Additonal information to support referral or transfer of care request
         */
        supportingInfo?: Reference[];
        /**
         * Comments made about referral request
         */
        note?: Annotation[];
        /**
         * Key events in history of request
         */
        relevantHistory?: Reference[];
    }
    /**
     * An person that is related to a patient, but who is not a direct target of care
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
        relationship?: CodeableConcept;
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
    }
    /**
     * Proposed actions, if any
     */
    interface RequestGroupAction extends BackboneElement {
        /**
         * User-visible label for the action (e.g. 1. or A.)
         */
        label?: string;
        /**
         * Contains extended information for property 'label'.
         */
        _label?: Element;
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
        type?: Coding;
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
         * Instantiates protocol or definition
         */
        definition?: Reference[];
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
         * draft | active | suspended | cancelled | completed | entered-in-error | unknown
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * proposal | plan | order
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
         * Who the request group is about
         */
        subject?: Reference;
        /**
         * Encounter or Episode for the request group
         */
        context?: Reference;
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
         * Reason for the request group
         */
        reasonCodeableConcept?: CodeableConcept;
        /**
         * Reason for the request group
         */
        reasonReference?: Reference;
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
        code?: CodeableConcept;
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
         * draft | in-progress | suspended | stopped | completed | entered-in-error
         */
        status: code;
        /**
         * Contains extended information for property 'status'.
         */
        _status?: Element;
        /**
         * Classifications for the study
         */
        category?: CodeableConcept[];
        /**
         * Drugs, devices, conditions, etc. under study
         */
        focus?: CodeableConcept[];
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
        jurisdiction?: CodeableConcept[];
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
         * Organization responsible for the study
         */
        sponsor?: Reference;
        /**
         * The individual responsible for the study
         */
        principalInvestigator?: Reference;
        /**
         * Location involved in study execution
         */
        site?: Reference[];
        /**
         * Reason for terminating study early
         */
        reasonStopped?: CodeableConcept;
        /**
         * Comments made about the event
         */
        note?: Annotation[];
        /**
         * Defined path through the study for a subject
         */
        arm?: ResearchStudyArm[];
    }
    /**
     * Investigation to increase healthcare-related patient-independent knowledge
     */
    interface ResearchSubject extends DomainResource {
        /**
         * Business Identifier for research subject
         */
        identifier?: Identifier;
        /**
         * candidate | enrolled | active | suspended | withdrawn | completed
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
        outcome: CodeableConcept;
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
        identifier?: Identifier;
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
        subject?: Reference;
        /**
         * Where was assessment performed?
         */
        context?: Reference;
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
        reasonCodeableConcept?: CodeableConcept;
        /**
         * Why the assessment was necessary?
         */
        reasonReference?: Reference;
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
        comment?: string;
        /**
         * Contains extended information for property 'comment'.
         */
        _comment?: Element;
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
         * A broad categorisation of the service that is to be performed during this appointment
         */
        serviceCategory?: CodeableConcept;
        /**
         * The specific service that is to be performed during this appointment
         */
        serviceType?: CodeableConcept[];
        /**
         * The specialty of a practitioner that would be required to perform the service requested in this appointment
         */
        specialty?: CodeableConcept[];
        /**
         * The resource this Schedule resource is providing availability information for. These are expected to usually be one of HealthcareService, Location, Practitioner, PractitionerRole, Device, Patient or RelatedPerson
         */
        actor: Reference[];
        /**
         * The period of time that the slots that are attached to this Schedule resource cover (even if none exist). These  cover the amount of time that an organization's planning horizon; the interval for which they are currently accepting appointments. This does not define a "template" for planning outside these dates
         */
        planningHorizon?: Period;
        /**
         * Comments on the availability to describe any extended information. Such as custom constraints on the slots that may be associated
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
        definition: Reference;
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
     * Search Parameter for a resource
     */
    interface SearchParameter extends DomainResource {
        /**
         * Logical URI to reference this search parameter (globally unique)
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
         * Date this was last changed
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
         * Context the content is intended to support
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
         * number | date | string | token | reference | composite | quantity | uri
         */
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * Original Definition for the search parameter
         */
        derivedFrom?: uri;
        /**
         * Contains extended information for property 'derivedFrom'.
         */
        _derivedFrom?: Element;
        /**
         * Natural language description of the search parameter
         */
        description: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
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
         * eq | ne | gt | lt | ge | le | sa | eb | ap
         */
        comparator?: code[];
        /**
         * Contains extended information for property 'comparator'.
         */
        _comparator?: Element[];
        /**
         * missing | exact | contains | not | text | in | not-in | below | above | type
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
     * A sequence used as reference
     */
    interface SequenceReferenceSeq extends BackboneElement {
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
         * Reference identifier
         */
        referenceSeqId?: CodeableConcept;
        /**
         * A Pointer to another Sequence entity as reference sequence
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
         * Directionality of DNA ( +1/-1)
         */
        strand?: integer;
        /**
         * Contains extended information for property 'strand'.
         */
        _strand?: Element;
        /**
         * Start position of the window on the  reference sequence
         */
        windowStart: integer;
        /**
         * Contains extended information for property 'windowStart'.
         */
        _windowStart?: Element;
        /**
         * End position of the window on the reference sequence
         */
        windowEnd: integer;
        /**
         * Contains extended information for property 'windowEnd'.
         */
        _windowEnd?: Element;
    }
    /**
     * Variant in sequence
     */
    interface SequenceVariant extends BackboneElement {
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
    interface SequenceQuality extends BackboneElement {
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
    }
    /**
     * External repository which contains detailed report related with observedSeq in this resource
     */
    interface SequenceRepository extends BackboneElement {
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
     * Information about a biological sequence
     */
    interface Sequence extends DomainResource {
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
         * The number of copies of the seqeunce of interest.  (RNASeq)
         */
        quantity?: Quantity;
        /**
         * A sequence used as reference
         */
        referenceSeq?: SequenceReferenceSeq;
        /**
         * Variant in sequence
         */
        variant?: SequenceVariant[];
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
        quality?: SequenceQuality[];
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
        repository?: SequenceRepository[];
        /**
         * Pointer to next atomic sequence
         */
        pointer?: Reference[];
    }
    /**
     * A description of decision support service functionality
     */
    interface ServiceDefinition extends DomainResource {
        /**
         * Logical URI to reference this service definition (globally unique)
         */
        url?: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Additional identifier for the service definition
         */
        identifier?: Identifier[];
        /**
         * Business version of the service definition
         */
        version?: string;
        /**
         * Contains extended information for property 'version'.
         */
        _version?: Element;
        /**
         * Name for this service definition (computer friendly)
         */
        name?: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Name for this service definition (human friendly)
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
         * Date this was last changed
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
         * Natural language description of the service definition
         */
        description?: markdown;
        /**
         * Contains extended information for property 'description'.
         */
        _description?: Element;
        /**
         * Why this service definition is defined
         */
        purpose?: markdown;
        /**
         * Contains extended information for property 'purpose'.
         */
        _purpose?: Element;
        /**
         * Describes the clinical usage of the module
         */
        usage?: string;
        /**
         * Contains extended information for property 'usage'.
         */
        _usage?: Element;
        /**
         * When the service definition was approved by publisher
         */
        approvalDate?: date;
        /**
         * Contains extended information for property 'approvalDate'.
         */
        _approvalDate?: Element;
        /**
         * When the service definition was last reviewed
         */
        lastReviewDate?: date;
        /**
         * Contains extended information for property 'lastReviewDate'.
         */
        _lastReviewDate?: Element;
        /**
         * When the service definition is expected to be used
         */
        effectivePeriod?: Period;
        /**
         * Context the content is intended to support
         */
        useContext?: UsageContext[];
        /**
         * Intended jurisdiction for service definition (if applicable)
         */
        jurisdiction?: CodeableConcept[];
        /**
         * E.g. Education, Treatment, Assessment, etc
         */
        topic?: CodeableConcept[];
        /**
         * A content contributor
         */
        contributor?: Contributor[];
        /**
         * Contact details for the publisher
         */
        contact?: ContactDetail[];
        /**
         * Use and/or publishing restrictions
         */
        copyright?: markdown;
        /**
         * Contains extended information for property 'copyright'.
         */
        _copyright?: Element;
        /**
         * Additional documentation, citations, etc
         */
        relatedArtifact?: RelatedArtifact[];
        /**
         * "when" the module should be invoked
         */
        trigger?: TriggerDefinition[];
        /**
         * What data is used by the module
         */
        dataRequirement?: DataRequirement[];
        /**
         * Operation to invoke
         */
        operationDefinition?: Reference;
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
         * A broad categorisation of the service that is to be performed during this appointment
         */
        serviceCategory?: CodeableConcept;
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
         * Where the specimen came from. This may be from the patient(s) or from the environment or a device
         */
        subject: Reference;
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
         * Comments
         */
        note?: Annotation[];
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
     * Snapshot view of the structure
     */
    interface StructureDefinitionSnapshot extends BackboneElement {
        /**
         * Definition of elements in the resource (if no StructureDefinition)
         */
        element: ElementDefinition[];
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
         * Logical URI to reference this structure definition (globally unique)
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
         * Date this was last changed
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
         * Context the content is intended to support
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
        fhirVersion?: id;
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
         * resource | datatype | extension
         */
        contextType?: code;
        /**
         * Contains extended information for property 'contextType'.
         */
        _contextType?: Element;
        /**
         * Where the extension can be used in instances
         */
        context?: string[];
        /**
         * Contains extended information for property 'context'.
         */
        _context?: Element[];
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
        type: code;
        /**
         * Contains extended information for property 'type'.
         */
        _type?: Element;
        /**
         * Definition that this type is constrained/specialized from
         */
        baseDefinition?: uri;
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
         * Canonical URL for structure definition
         */
        url: uri;
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
         * Additional description/explaination for group
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
         * Logical URI to reference this structure map (globally unique)
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
         * Date this was last changed
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
         * Context the content is intended to support
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
        import?: uri[];
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
        endpoint?: uri;
        /**
         * Contains extended information for property 'endpoint'.
         */
        _endpoint?: Element;
        /**
         * Mimetype to send, or omit for no payload
         */
        payload?: string;
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
     * A server push subscription criteria
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
         * Rule for server push criteria
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
        /**
         * A tag to add to matching resources
         */
        tag?: Coding[];
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
        identifier?: Identifier;
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
     * The item being requested
     */
    interface SupplyRequestOrderedItem extends BackboneElement {
        /**
         * The requested amount of the item indicated
         */
        quantity: Quantity;
        /**
         * Medication, Substance, or Device requested to be supplied
         */
        itemCodeableConcept?: CodeableConcept;
        /**
         * Medication, Substance, or Device requested to be supplied
         */
        itemReference?: Reference;
    }
    /**
     * Who/what is requesting service
     */
    interface SupplyRequestRequester extends BackboneElement {
        /**
         * Individual making the request
         */
        agent: Reference;
        /**
         * Organization agent is acting for
         */
        onBehalfOf?: Reference;
    }
    /**
     * Request for a medication, substance or device
     */
    interface SupplyRequest extends DomainResource {
        /**
         * Unique identifier
         */
        identifier?: Identifier;
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
         * The item being requested
         */
        orderedItem?: SupplyRequestOrderedItem;
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
         * Who/what is requesting service
         */
        requester?: SupplyRequestRequester;
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
         * The origin of the supply
         */
        deliverFrom?: Reference;
        /**
         * The destination of the supply
         */
        deliverTo?: Reference;
    }
    /**
     * Who is asking for task to be done
     */
    interface TaskRequester extends BackboneElement {
        /**
         * Individual asking for task
         */
        agent: Reference;
        /**
         * Organization individual is acting for
         */
        onBehalfOf?: Reference;
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
        definitionUri?: uri;
        /**
         * Contains extended information for property 'definitionUri'.
         */
        _definitionUri?: Element;
        /**
         * Formal definition of task
         */
        definitionReference?: Reference;
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
         * proposal | plan | order +
         */
        intent: code;
        /**
         * Contains extended information for property 'intent'.
         */
        _intent?: Element;
        /**
         * normal | urgent | asap | stat
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
        context?: Reference;
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
        requester?: TaskRequester;
        /**
         * requester | dispatcher | scheduler | performer | monitor | manager | acquirer | reviewer
         */
        performerType?: CodeableConcept[];
        /**
         * Responsible individual
         */
        owner?: Reference;
        /**
         * Why task is needed
         */
        reason?: CodeableConcept;
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
        required?: boolean;
        /**
         * Contains extended information for property 'required'.
         */
        _required?: Element;
        /**
         * Are the capabilities validated?
         */
        validated?: boolean;
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
        capabilities: Reference;
    }
    /**
     * Fixture in the test script - by reference (uri)
     */
    interface TestScriptFixture extends BackboneElement {
        /**
         * Whether or not to implicitly create the fixture during setup
         */
        autocreate?: boolean;
        /**
         * Contains extended information for property 'autocreate'.
         */
        _autocreate?: Element;
        /**
         * Whether or not to implicitly delete the fixture during teardown
         */
        autodelete?: boolean;
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
         * The fluentpath expression against the fixture body
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
     * Assert rule used within the test script
     */
    interface TestScriptRule extends BackboneElement {
        /**
         * Assert rule resource reference
         */
        resource: Reference;
        /**
         * Rule parameter template
         */
        param?: TestScriptRuleParam[];
    }
    /**
     * Rule parameter template
     */
    interface TestScriptRuleParam extends BackboneElement {
        /**
         * Parameter name matching external assert rule parameter
         */
        name: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Parameter value defined either explicitly or dynamically
         */
        value?: string;
        /**
         * Contains extended information for property 'value'.
         */
        _value?: Element;
    }
    /**
     * Assert ruleset used within the test script
     */
    interface TestScriptRuleset extends BackboneElement {
        /**
         * Assert ruleset resource reference
         */
        resource: Reference;
        /**
         * The referenced rule within the ruleset
         */
        rule: TestScriptRulesetRule[];
    }
    /**
     * The referenced rule within the ruleset
     */
    interface TestScriptRulesetRule extends BackboneElement {
        /**
         * Id of referenced rule within the ruleset
         */
        ruleId: id;
        /**
         * Contains extended information for property 'ruleId'.
         */
        _ruleId?: Element;
        /**
         * Ruleset rule parameter template
         */
        param?: TestScriptRulesetRuleParam[];
    }
    /**
     * Ruleset rule parameter template
     */
    interface TestScriptRulesetRuleParam extends BackboneElement {
        /**
         * Parameter name matching external assert ruleset rule parameter
         */
        name: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Parameter value defined either explicitly or dynamically
         */
        value?: string;
        /**
         * Contains extended information for property 'value'.
         */
        _value?: Element;
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
         * xml | json | ttl | none
         */
        accept?: code;
        /**
         * Contains extended information for property 'accept'.
         */
        _accept?: Element;
        /**
         * xml | json | ttl | none
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
        encodeRequestUrl?: boolean;
        /**
         * Contains extended information for property 'encodeRequestUrl'.
         */
        _encodeRequestUrl?: Element;
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
         * The fluentpath expression to evaluate against the source fixture
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
         * xml | json | ttl | none
         */
        contentType?: code;
        /**
         * Contains extended information for property 'contentType'.
         */
        _contentType?: Element;
        /**
         * The fluentpath expression to be evaluated
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
         * delete | get | options | patch | post | put
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
         * The reference to a TestScript.rule
         */
        rule?: TestScriptSetupActionAssertRule;
        /**
         * The reference to a TestScript.ruleset
         */
        ruleset?: TestScriptSetupActionAssertRuleset;
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
        warningOnly?: boolean;
        /**
         * Contains extended information for property 'warningOnly'.
         */
        _warningOnly?: Element;
    }
    /**
     * The reference to a TestScript.rule
     */
    interface TestScriptSetupActionAssertRule extends BackboneElement {
        /**
         * Id of the TestScript.rule
         */
        ruleId: id;
        /**
         * Contains extended information for property 'ruleId'.
         */
        _ruleId?: Element;
        /**
         * Rule parameter template
         */
        param?: TestScriptSetupActionAssertRuleParam[];
    }
    /**
     * Rule parameter template
     */
    interface TestScriptSetupActionAssertRuleParam extends BackboneElement {
        /**
         * Parameter name matching external assert rule parameter
         */
        name: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Parameter value defined either explicitly or dynamically
         */
        value: string;
        /**
         * Contains extended information for property 'value'.
         */
        _value?: Element;
    }
    /**
     * The reference to a TestScript.ruleset
     */
    interface TestScriptSetupActionAssertRuleset extends BackboneElement {
        /**
         * Id of the TestScript.ruleset
         */
        rulesetId: id;
        /**
         * Contains extended information for property 'rulesetId'.
         */
        _rulesetId?: Element;
        /**
         * The referenced rule within the ruleset
         */
        rule?: TestScriptSetupActionAssertRulesetRule[];
    }
    /**
     * The referenced rule within the ruleset
     */
    interface TestScriptSetupActionAssertRulesetRule extends BackboneElement {
        /**
         * Id of referenced rule within the ruleset
         */
        ruleId: id;
        /**
         * Contains extended information for property 'ruleId'.
         */
        _ruleId?: Element;
        /**
         * Rule parameter template
         */
        param?: TestScriptSetupActionAssertRulesetRuleParam[];
    }
    /**
     * Rule parameter template
     */
    interface TestScriptSetupActionAssertRulesetRuleParam extends BackboneElement {
        /**
         * Parameter name matching external assert ruleset rule parameter
         */
        name: string;
        /**
         * Contains extended information for property 'name'.
         */
        _name?: Element;
        /**
         * Parameter value defined either explicitly or dynamically
         */
        value: string;
        /**
         * Contains extended information for property 'value'.
         */
        _value?: Element;
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
         * Logical URI to reference this test script (globally unique)
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
         * Date this was last changed
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
         * Context the content is intended to support
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
         * Assert rule used within the test script
         */
        rule?: TestScriptRule[];
        /**
         * Assert ruleset used within the test script
         */
        ruleset?: TestScriptRuleset[];
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
     * Definition of the content of the value set (CLD)
     */
    interface ValueSetCompose extends BackboneElement {
        /**
         * Fixed date for version-less references (transitive)
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
         * Select only contents included in this value set
         */
        valueSet?: uri[];
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
     * Select codes/concepts by their properties (including relationships)
     */
    interface ValueSetComposeIncludeFilter extends BackboneElement {
        /**
         * A property defined by the code system
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
        value: code;
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
         * Uniquely identifies this expansion
         */
        identifier: uri;
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
         * Name as assigned by the server
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
         * Logical URI to reference this value set (globally unique)
         */
        url?: uri;
        /**
         * Contains extended information for property 'url'.
         */
        _url?: Element;
        /**
         * Additional identifier for the value set
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
         * Date this was last changed
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
         * Context the content is intended to support
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
         * Whether this is intended to be used with an extensible binding
         */
        extensible?: boolean;
        /**
         * Contains extended information for property 'extensible'.
         */
        _extensible?: Element;
        /**
         * Definition of the content of the value set (CLD)
         */
        compose?: ValueSetCompose;
        /**
         * Used when the value set is "expanded"
         */
        expansion?: ValueSetExpansion;
    }
    /**
     * Vision supply authorization
     */
    interface VisionPrescriptionDispense extends BackboneElement {
        /**
         * Product to be supplied
         */
        product?: CodeableConcept;
        /**
         * right | left
         */
        eye?: code;
        /**
         * Contains extended information for property 'eye'.
         */
        _eye?: Element;
        /**
         * Lens sphere
         */
        sphere?: decimal;
        /**
         * Contains extended information for property 'sphere'.
         */
        _sphere?: Element;
        /**
         * Lens cylinder
         */
        cylinder?: decimal;
        /**
         * Contains extended information for property 'cylinder'.
         */
        _cylinder?: Element;
        /**
         * Lens axis
         */
        axis?: integer;
        /**
         * Contains extended information for property 'axis'.
         */
        _axis?: Element;
        /**
         * Lens prism
         */
        prism?: decimal;
        /**
         * Contains extended information for property 'prism'.
         */
        _prism?: Element;
        /**
         * up | down | in | out
         */
        base?: code;
        /**
         * Contains extended information for property 'base'.
         */
        _base?: Element;
        /**
         * Lens add
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
     * Prescription for vision correction products for a patient
     */
    interface VisionPrescription extends DomainResource {
        /**
         * Business identifier
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
         * Who prescription is for
         */
        patient?: Reference;
        /**
         * Created during encounter / admission / stay
         */
        encounter?: Reference;
        /**
         * When prescription was authorized
         */
        dateWritten?: dateTime;
        /**
         * Contains extended information for property 'dateWritten'.
         */
        _dateWritten?: Element;
        /**
         * Who authorizes the vision product
         */
        prescriber?: Reference;
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
     * Reference to a sub-type of ResourceBase. This is needed for stricter object literal typing introduced in TypeScript 1.6.
     */
    type Resource = (DomainResource|Account|ActivityDefinition|AdverseEvent|AllergyIntolerance|Appointment|AppointmentResponse|AuditEvent|Basic|BodySite|CapabilityStatement|CarePlan|CareTeam|ChargeItem|Claim|ClaimResponse|ClinicalImpression|CodeSystem|Communication|CommunicationRequest|CompartmentDefinition|Composition|ConceptMap|Condition|Consent|Contract|Coverage|DataElement|DetectedIssue|Device|DeviceComponent|DeviceMetric|DeviceRequest|DeviceUseStatement|DiagnosticReport|DocumentManifest|DocumentReference|EligibilityRequest|EligibilityResponse|Encounter|Endpoint|EnrollmentRequest|EnrollmentResponse|EpisodeOfCare|ExpansionProfile|ExplanationOfBenefit|FamilyMemberHistory|Flag|Goal|GraphDefinition|Group|GuidanceResponse|HealthcareService|ImagingManifest|ImagingStudy|Immunization|ImmunizationRecommendation|ImplementationGuide|Library|Linkage|List|Location|Measure|MeasureReport|Media|Medication|MedicationAdministration|MedicationDispense|MedicationRequest|MedicationStatement|MessageDefinition|MessageHeader|NamingSystem|NutritionOrder|Observation|OperationDefinition|OperationOutcome|Organization|Patient|PaymentNotice|PaymentReconciliation|Person|PlanDefinition|Practitioner|PractitionerRole|Procedure|ProcedureRequest|ProcessRequest|ProcessResponse|Provenance|Questionnaire|QuestionnaireResponse|ReferralRequest|RelatedPerson|RequestGroup|ResearchStudy|ResearchSubject|RiskAssessment|Schedule|SearchParameter|Sequence|ServiceDefinition|Slot|Specimen|StructureDefinition|StructureMap|Subscription|Substance|SupplyDelivery|SupplyRequest|Task|TestReport|TestScript|ValueSet|VisionPrescription|Binary|Bundle|Parameters);
}
