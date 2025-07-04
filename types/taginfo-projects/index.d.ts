export type ObjectType = "node" | "way" | "relation" | "area";

export interface Tag {
    /** OSM tag key */
    key: string;
    /** OSM tag value (if not supplied it means 'all values') */
    value?: string;
    /** OSM object types this key/tag can be used for */
    object_types?: ObjectType[];
    /** how the key/tag is used in this project */
    description?: string;
    /** link to further documentation of the project about this specific key/tag */
    doc_url?: string;
    /** URL of an icon, should work in 16x16 pixels on white and light gray backgrounds */
    icon_url?: string;
}

/** meta information about the project */
export interface Project {
    /** name of the project */
    name: string;
    /** short description of the project */
    description: string;
    /** homepage of the project with general information */
    project_url: string;
    /** documentation of the project and especially the tags used */
    doc_url?: string;
    /** project logo, should work in 16x16 pixels on white and light gray backgrounds */
    icon_url?: string;
    /** contact name (needed for taginfo maintainer) */
    contact_name: string;
    /** contact email (needed for taginfo maintainer) */
    contact_email: string;
}

export type DateString = `${number}T${number}Z`;

export interface Schema {
    /** a url to the JSON schema used to validating this file */
    $schema?: string;
    /** data format version, currently always `1`, will get updated if there are incompatible changes to the format */
    data_format: 1;
    /** the URL under which this project file can be accessed */
    data_url?: string;
    /** `yyyymmddThhmmssZ` timestamp when project file was updated */
    data_updated?: DateString;
    project: Project;
    tags: Tag[];
}
