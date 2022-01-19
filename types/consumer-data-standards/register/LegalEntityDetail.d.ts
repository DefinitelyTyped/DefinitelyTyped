/* These are the schema definitions stipulated by the Data Standards Body for the register api. */

/**
 * The data that is common to all organisations, regardless of the type (e.g. company, trust, partnership, government)
 */
export interface LegalEntityDetail {
  /**
   * Unique id of the organisation issued by the CDR Register
   */
  legalEntityId: string;
  /**
   * Unique legal name of the organisation
   */
  legalEntityName: string;
  /**
   * Legal Entity logo URI
   */
  logoUri: string;
  /**
   * Unique registration number (if the company is registered outside Australia)
   */
  registrationNumber?: string;
  /**
   * Date of registration (if the company is registered outside Australia)
   */
  registrationDate?: string;
  /**
   * Country of registeration (if the company is registered outside Australia)
   */
  registeredCountry?: string;
  /**
   * Australian Business Number for the organisation
   */
  abn?: string;
  /**
   * Australian Company Number for the organisation
   */
  acn?: string;
  /**
   * Australian Registered Body Number.  ARBNs are issued to registrable Australian bodies and foreign companies
   */
  arbn?: string;
  /**
   * ANZSIC division of the organisation. [ANZSIC (2006)](http://www.abs.gov.au/anzsic)
   */
  anzsicDivision?: string;
  /**
   * Legal organisation type
   */
  organisationType?: "SOLE_TRADER" | "COMPANY" | "PARTNERSHIP" | "TRUST" | "GOVERNMENT_ENTITY" | "OTHER";
  status: "ACTIVE" | "REMOVED";
  [k: string]: unknown;
}
