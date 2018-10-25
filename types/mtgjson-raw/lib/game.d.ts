declare namespace mtgjson {
  /**
   * Place for "game mechanically important" things
   * like color or subtypes
   */

  /**
   * Single letter for a color
   */
  export type ColorCode = "W" | "U" | "B" | "R" | "G"

  /**
   * An attribute after the emdash on a card
   *
   * @example "Goblin"
   */
  export type SubType = string
}
