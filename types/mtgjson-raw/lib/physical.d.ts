declare namespace mtgjson {
  /**
   * For things about the card itself like what is written on it
   * or what shape it is
   */

  /**
   * Border format
   */
  export type BorderColor = "black" | "borderless" | "gold" | "silver" | "white"

  /**
   * Valid card frame styles
   */
  export type FrameVersion = "1993" | "1997" | "2003" | "2015" | "future"

  /**
   * Describes all possible card layouts
   */
  export type Layout =
    | "normal"
    | "split"
    | "flip"
    | "transform"
    | "meld"
    | "vanguard"
    | "token"
    | "double_faced_token"
    | "emblem"
    | "augment"
    | "host"

  /**
   * The full foreign language name in English for ForeignDataEntry
   *
   * Includes promo language ones like Arabic and Phyrexian
   *
   * @see ForeignDataEntry
   */
  export type ForeignLanguage =
    | "English"
    | "Spanish"
    | "French"
    | "German"
    | "Italian"
    | "Portuguese (Brazil)"
    | "Japanese"
    | "Korean"
    | "Russian"
    | "Chinese Simplified"
    | "Chinese Traditional"
    // Promo cards
    | "Hebrew"
    | "Latin"
    | "Ancient Greek"
    | "Arabic"
    | "Sanskrit"
    | "Phyrexian"
}
