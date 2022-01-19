/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface RequestAccountIds {
  data: {
    accountIds: string[];
    [k: string]: unknown;
  };
  meta?: {
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
