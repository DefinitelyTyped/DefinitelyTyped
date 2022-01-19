/* These are the schema definitions stipulated by the Data Standards Body for the banking api. */

export interface BankingDigitalWalletPayee {
  /**
   * The name assigned to the digital wallet by the owner of the wallet, else the display name provided by the digital wallet provider
   */
  name: string;
  /**
   * The identifier of the digital wallet (dependent on type)
   */
  identifier: string;
  /**
   * The type of the digital wallet identifier
   */
  type: "EMAIL" | "CONTACT_NAME" | "TELEPHONE";
  /**
   * The provider of the digital wallet
   */
  provider: "PAYPAL_AU" | "OTHER";
  [k: string]: unknown;
}
