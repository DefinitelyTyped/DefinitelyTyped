import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * IGVideoCopyrightCheckMatchesInformation
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGVideoCopyrightCheckMatchesInformation extends AbstractCrudObject {
    static get Fields(): Readonly<{
        copyright_matches: "copyright_matches";
        status: "status";
    }>;
}
