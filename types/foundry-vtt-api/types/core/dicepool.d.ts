/**
 * A dice pool represents a set of Roll expressions which are collectively modified to compute an effective total
 * across all Rolls in the pool. The final total for the pool is defined as the sum over kept rolls, relative to any
 * success count or margin.
 *
 * @example
 * // Consider 3 rolls
 * let r1 = new Roll("4d6");
 * let r2 = new Roll("3d8");
 * let r3 = new Roll("2d10");
 * // Keep the highest of the 3 roll expressions
 * let pool = new DicePool([r1,r2,r3], "kh");
 *
 * @example
 * // Construct a DicePool from a string formula
 * let pool = DicePool.fromFormula("{4d6,3d8,2d10}kh");
 */
declare class DicePool {
	/**
	 * The elements of a Dice Pool must be Roll objects
	 */
	rolls: Roll[];

	/**
	 * The string modifiers applied to resolve the pool
	 */
	modifiers: string;

	/**
	 * An Array of rolled Die instances created through this Pool
	 */
	dice: Die[];

	/**
	 * The final numeric total resulting from the rolled DicePool
	 */
	total: number;

	constructor(rolls: Roll[], modifiers: string);

	/**
	 * For now, for testing purposes, choose the maximum result always
	 */
	roll(): DicePool;

	/**
	 * Parse a modifier query string into an ordered Array of modifiers to apply.
	 * @param modifiers
	 */
	protected _parseModifiers(modifiers: string): string[];

	/**
	 * Iterate over the results Array and apply a keep-or-drop modifier
	 * @param results
	 * @param mod
	 */
	protected _keepOrDrop(results: any[], mod: string): void;

	/**
	 * Iterate over the results Array and count successes or compute margin of success
	 * @param results
	 * @param mod
	 */
	protected _countSuccess(results: any[], mod: string): void;

	/* -------------------------------------------- */
	/*  Factory Method                              */
	/* -------------------------------------------- */

	/**
	 * Given a string formula, create and return an evaluated DicePool object
	 * @param formula	The string formula to parse
	 * @return			The evaluated DicePool object or null if the formula is invalid
	 */
	static fromFormula(formula: string): DicePool;

	/* -------------------------------------------- */
	/*  Serialization and Storage                   */
	/* -------------------------------------------- */

	/**
	 * Convert the DicePool instance into an Object which can be serialized to JSON
	 * @return	The converted data
	 */
	toJSON(): {
		class: string;
		rolls: Roll[];
		total: number;
		modifiers: string;
	};

	/**
	 * Reconstruct a DicePool instance from a provided data Object
	 * @param data	The provided data
	 * @return		The constructed Dice Pool
	 */
	static fromData(data: any): DicePool;

	/**
	 * Reconstruct a DicePool instance from a provided data Object
	 * @param json	The serialized JSON string
	 * @return		The constructed Dice Pool
	 */
	static fromJSON(json: string): DicePool;
}
