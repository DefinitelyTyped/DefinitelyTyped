declare namespace mtgjson {
  /**
   * mtgjson release info
   */
  export interface SetMetadata {
    /**
     * OBDC Date of build (YYYY-MM-DD)
     */
    date: mtgjsonDate

    /**
     * mtgjson release version
     */
    version: string
  }

  /**
   * All possible set types
   */
  export type SetType =
    | "archenemy"
    | "box"
    | "commander"
    | "core"
    | "draft_innovation"
    | "duel_deck"
    | "expansion"
    | "from_the_vault"
    | "funny"
    | "masterpiece"
    | "masters"
    | "memorabilia"
    | "planechase"
    | "premium_deck"
    | "promo"
    | "spellbook"
    | "starter"
    | "token"
    | "vanguard"

  /**
   * Representation of an MTG Set
   * @see https://mtgjson.com/v4/docs.html
   */
  export interface Set {
    /**
     * Block the set was in. Sometimes blocks are their own set.
     */
    block: string

    /**
     * List of cards
     */
    cards: Card[]

    /**
     * Set code for the set.
     */
    code: LowercaseSetCode

    /**
     * Info about MTJSON publishing
     */
    meta: SetMetadata

    /**
     * Set code for the set as it appears on Magic: The Gathering Online.
     */
    mtgoCode: LowercaseSetCode

    /**
     * Name of set
     */
    name: string

    /**
     * Release date
     */
    releaseDate: mtgjsonDate

    /**
     * Type of set
     */
    type: SetType

    /**
     * Tokens in the set
     */
    tokens: {}[]
  }
}
