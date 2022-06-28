import { Permissions } from './permissions';

/**
 * Parameters for securing PDF file with a password using {@link ProtectPDFOperation}.
 */
export interface EncryptionAlgorithm {
    /**
     * Represents AES-128 encryption algorithm.
     */
    AES_128: 'AES_128';
    /**
     * Represents AES-256 encryption algorithm.
     */
    AES_256: 'AES_256';
}
export interface ContentEncryption {
    /**
     * Encrypts all the content of the PDF file.
     */
    ALL_CONTENT: 'ALL_CONTENT';

    /**
     * Encrypts all the content except the metadata of the PDF file.
     */
    ALL_CONTENT_EXCEPT_METADATA: 'ALL_CONTENT_EXCEPT_METADATA';
}
export interface Permission {
    /**
     * Enables low quality printing of the PDF document.
     */
    PRINT_LOW_QUALITY: 'PRINT_LOW_QUALITY';

    /**
     * Enables high quality printing of the PDF document.
     */
    PRINT_HIGH_QUALITY: 'PRINT_HIGH_QUALITY';

    /**
     * Enables all the editing permissions in the PDF document except commenting and page extraction.
     */
    EDIT_CONTENT: 'EDIT_CONTENT';

    /**
     * Enables insertion, deletion and rotation of pages in a PDF document.
     */
    EDIT_DOCUMENT_ASSEMBLY: 'EDIT_DOCUMENT_ASSEMBLY';

    /**
     * Enables additions of comments, digital signatures and filling in of forms in a PDF document.
     */
    EDIT_ANNOTATIONS: 'EDIT_ANNOTATIONS';

    /**
     * Enables filling in of forms, digital signature and creation of template pages in a PDF document.
     */
    EDIT_FILL_AND_SIGN_FORM_FIELDS: 'EDIT_FILL_AND_SIGN_FORM_FIELDS';

    /**
     * Enables copying of content from the PDF document.
     */
    COPY_CONTENT: 'COPY_CONTENT';
}
export class PasswordProtectOptions {
    static get EncryptionAlgorithm(): EncryptionAlgorithm;
    static get ContentEncryption(): ContentEncryption;
    static get Permission(): Permission;
    /**
     * Returns a builder for {@link PasswordProtectOptions}.
     */
    static get Builder(): typeof PasswordProtectOptionsBuilder;
    constructor(builder: PasswordProtectOptions);
    userPassword: string;
    ownerPassword: string;
    encryptionAlgorithm: EncryptionAlgorithm;
    contentEncryption: ContentEncryption;
    permissions: Permission;
    validate(): boolean;
}
export class PasswordProtectOptionsBuilder {
    setUserPassword(userPassword: string): PasswordProtectOptionsBuilder;
    setOwnerPassword(ownerPassword: string): PasswordProtectOptionsBuilder;
    setEncryptionAlgorithm(encryptionAlgorithm: keyof EncryptionAlgorithm): PasswordProtectOptionsBuilder;
    setContentEncryption(contentEncryption: keyof ContentEncryption): PasswordProtectOptionsBuilder;
    setPermissions(permissions: Permissions): PasswordProtectOptionsBuilder;
    build(): PasswordProtectOptions;
}
