interface vCard {
    /**
     * Specifies a value that represents a persistent, globally unique identifier associated with the vCard
     */
    uid: string;

    /**
     * Date of birth
     */
    birthday: Date;

    /**
     * Anniversary
     */
    anniversary: Date;

    /**
     * Cell phone number
     */
    cellPhone: string | string[];

    /**
     * Other cell phone number or pager
     */
    pagerPhone: string | string[];

    /**
     * The address for private electronic mail communication
     */
    email: string | string[];

    /**
     * The address for work-related electronic mail communication
     */
    workEmail: string | string[];

    otherEmail: string | string[];

    /**
     * First name
     */
    firstName: string;

    /**
     * Formatted name string associated with the vCard object (will automatically populate if not set)
     */
    formattedName: string;

    /**
     * Gender.
     */
    gender: "M" | "F";

    /**
     * Home mailing address
     */
    homeAddress: Address;

    /**
     * Home phone
     */
    homePhone: string | string[];

    /**
     * Home facsimile
     */
    homeFax: string | string[];

    /**
     * Last name
     */
    lastName: string;

    /**
     * Logo
     */
    logo: Photo;

    /**
     * Middle name
     */
    middleName: string;

    /**
     * Prefix for individual's name
     */
    namePrefix: string;

    /**
     * Suffix for individual's name
     */
    nameSuffix: string;

    /**
     * Nickname of individual
     */
    nickname: string;

    /**
     * Specifies supplemental information or a comment that is associated with the vCard
     */
    note: string;

    /**
     * The name and optionally the unit(s) of the organization associated with the vCard object
     */
    organization: string;

    /**
     * Whether or not this contact should be shown as a company
     */
    isOrganization: boolean;

    /**
     * Individual's photo
     */
    photo: Photo;

    /**
     * The role, occupation, or business category of the vCard object within an organization
     */
    role: string;

    /**
     * Social URLs attached to the vCard object (ex: Facebook, Twitter, LinkedIn)
     */
    socialUrls: SocialUrls;

    /**
     * A URL that can be used to get the latest version of this vCard
     */
    source: string;

    /**
     * Specifies the job title, functional position or function of the individual within an organization
     */
    title: string;

    /**
     * URL pointing to a website that represents the person in some way
     */
    url: string;

    /**
     * URL pointing to a website that represents the person's work in some way
     */
    workUrl: string;

    /**
     * Work mailing address
     */
    workAddress: Address;

    /**
     * Work phone
     */
    workPhone: string | string[];

    /**
     * Work facsimile
     */
    workFax: string | string[];

    otherPhone: string | string[];

    /**
     * vCard version
     */
    version: string;

    /**
     * Get major version of the vCard format
     */
    getMajorVersion: () => number;

    /**
     * Get formatted vCard
     * @return Formatted vCard in VCF format
     */
    getFormattedString: () => string;

    /**
     * Save formatted vCard to file
     * @param filename - The file path
     */
    saveToFile: (filename: string) => void;
}

interface SocialUrls {
    facebook: string;
    linkedIn: string;
    twitter: string;
    flickr: string;

    [custom: string]: string;
}

interface Photo {
    url: string;
    mediaType: string;
    base64: boolean;

    /**
     * Attach a photo from a URL
     * @param   url       URL where photo can be found
     * @param  mediaType Media type of photo (JPEG, PNG, GIF)
     */
    attachFromUrl: (url: string, mediaType: string) => void;

    /**
     * Embed a photo from a file using base-64 encoding (not implemented yet)
     * @param  fileLocation - filename
     */
    embedFromFile: (fileLocation: string) => void;

    /**
     * Embed a photo from a base-64 string
     * @param  base64String - the base64 string
     * @param  mediaType - the media type
     */
    embedFromString: (base64String: string, mediaType: string) => void;
}

interface Address {
    /**
     * Represents the actual text that should be put on the mailing label when delivering a physical package
     */
    label: string;

    /**
     * Street address
     */
    street: string;

    /**
     * City
     */
    city: string;

    /**
     * State or province
     */
    stateProvince: string;

    /**
     * Postal code
     */
    postalCode: string;

    /**
     * Country or region
     */
    countryRegion: string;
}

declare function vCardFactory(): vCard;

export = vCardFactory;
