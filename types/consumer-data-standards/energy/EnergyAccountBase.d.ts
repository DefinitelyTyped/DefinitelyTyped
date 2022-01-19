/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyAccountBase {
  /**
   * The ID of the account.  To be created in accordance with CDR ID permanence requirements
   */
  accountId: string;
  /**
   * Optional identifier of the account as defined by the data holder.  This must be the value presented on physical statements (if it exists) and must not be used for the value of accountId
   */
  accountNumber?: string | null;
  /**
   * An optional display name for the account if one exists or can be derived.  The content of this field is at the discretion of the data holder
   */
  displayName?: string | null;
  /**
   * The date that the account was created or opened
   */
  creationDate: string;
  [k: string]: unknown;
}
