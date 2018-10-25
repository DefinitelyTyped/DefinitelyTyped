declare namespace mtgjson {
  /**
   * For stuff about the game itself or stuff that doesn't
   * nessisarily relate to the card.
   */

  /**
   * mtgjson unique id for a card
   */
  export type UUID = string

  /**
   * WOTC set codename like "M19" for "Core Set 2019"
   * @example "M19" "RTR"
   */
  export type SetCode = string

  /**
   * mtgjson Date formated date. YYYY-MM-DD
   * "An ODBC standard date"
   *
   * @example "2018-10-13"
   */

  export type mtgjsonDate = string

  /**
   * @example "m19" "rtr"
   */
  export type LowercaseSetCode = SetCode

  /**
   * @example "M19" "RTR"
   */
  export type UppercaseSetCode = SetCode

  /**
   * WOTC card rulings.
   */
  export interface Ruling {
    date: mtgjsonDate
    text: string
  }

  /**
   * WOTC set number that is used as an identifier in thier DB
   *
   * may or may not be present for every card.
   */
  export type MultiverseID = number

  /**
   * What number is this card in the set?
   *
   * It is ordered by "Non-colored Non-Artifact" WUBRG Gold Hybrid Artifact
   *
   * a or b signifies the side of the card
   *
   *
   *
   * For meld cards, both front sides get "a", and the backside is the the bottom half's "b"
   *
   *
   * Bruna: 7a
   * Brisela: 7b
   */
  export type CollectorNumber = string

  /**
   * Printed rarities
   */
  export type Rarity = "common" | "uncommon" | "rare" | "mythic" | "Special"

  /**
   * Play formats
   */
  export type Format =
    | "1v1"
    | "brawl"
    | "commander"
    | "duel"
    | "frontier"
    | "future"
    | "legacy"
    | "modern"
    | "pauper"
    | "penny"
    | "standard"
    | "vintage"

  /**
   * States of ability to play the card in a format
   * "Future" is used for a revision of the format in which the card will be legal soon.
   */
  export type Legality = "Banned" | "Future" | "Legal" | "Restricted"
}
