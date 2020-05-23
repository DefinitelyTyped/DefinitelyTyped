/**
 * This class provides an interface and API for conducting dice rolls.
 * The basic structure for a dice roll is a string formula and an object of data against which to parse it.
 *
 * @param formula    The string formula to parse
 * @param data        The data object against which to parse attributes within the formula
 *
 * @example
 * // Attack with advantage!
 * let r = new Roll("2d20kh + @prof + @strMod", {prof: 2, strMod: 4});
 *
 * // The parsed components of the roll formula
 * console.log(r.parts);    // [Die, +, 2, +, 4]
 *
 * // Execute the roll
 * r.roll();
 *
 * // The resulting equation after it was rolled
 * console.log(r.result);   // 16 + 2 + 4
 *
 * // The total resulting from the roll
 * console.log(r.total);    // 22
 */
declare class Roll {
    /**
     * The original provided data
     */
    data: any;

    /**
     * The original "raw" formula before any substitutions or evaluation
     */
    _formula: string;

    /**
     * The processed formula resulting from substitution and evaluation
     */
    formula: string;

    /**
     * An array of evaluate Roll parts
     */
    parts: any[];

    /**
     * An Array of Die instance which were included as part of this Roll
     */
    _dice: Die[];

    /**
     * An internal flag for whether the Roll object has been rolled
     */
    _rolled: boolean;

    /**
     * Cache the rolled total to avoid re-evaluating it multiple times
     */
    _result: any;

    /**
     * Cache the evaluated total to avoid re-evaluating it
     */
    _total: any;

    /**
     * Regular expression patterns
     */
    rgx: {
        reroll: RegExp;
        explode: RegExp;
        keep: RegExp;
        success: RegExp;
    };

    constructor(formula: string, data?: object);

    /**
     * Replace referenced data attributes in the roll formula with the syntax `@attr` with the corresponding key from
     * the provided `data` object.
     * @param formula    The original formula within which to replace
     */
    protected _replaceData(formula: string): string;

    /* -------------------------------------------- */
    /*  Properties                                  */
    /* -------------------------------------------- */

    /**
     * The resulting arithmetic expression after rolls have been evaluated
     */
    get result(): string;

    /**
     * Express the total result of the roll and cache the result to avoid re-evaluating
     */
    get total(): number;

    /**
     * Get an Array of any Die objects which were rolled as part of the evaluation of this roll
     */
    get dice(): Die[];

    /**
     * The regular expression used to identify a Die component of a Roll
     */
    protected static get diceRgx(): string;

    static get rgx(): { dice: string; pool: string };

    /**
     * Record supported arithmetic operators for Roll instances
     */
    protected static get arithmeticOperators(): string[];

    /* -------------------------------------------- */
    /*  Methods                                     */
    /* -------------------------------------------- */

    /**
     * Execute the Roll, replacing dice and evaluating the total result
     * @returns    The rolled Roll object, able to be chained into other methods
     *
     * @example
     * let r = new Roll("2d6 + 4 + 1d4");
     * r.roll();
     * > 12
     */
    roll(): Roll;

    /**
     * Create a new Roll object using the original provided formula and data
     * Each roll is immutable, so this method returns a new Roll instance using the same data.
     * @returns    A new Roll object, rolled using the same formula and data
     */
    reroll(): Roll;

    /* -------------------------------------------- */
    /*  Helpers
    /* -------------------------------------------- */

    /**
     * Separate a dice roll formula into parenthetical terms to be evaluated first
     * @param formula
     */
    protected _evalParentheticalTerms(formula: string): string[];

    /**
     * Isolate any Dice Pool terms within a formula and evaluate them
     * @param formula
     */
    protected _evalPoolTerms(formula: string): string[];

    /**
     * Expand and reallocate an array of terms, separating them based on arithmetic operators
     */
    protected _expandArithmeticTerms(terms): any;

    /**
     * Replace a dice roll term enclosed in {brackets} with a DicePool instance
     * @param term    The string term being replaced
     * @param rgx    The regexp match for the term
     * @return        The replaced DicePool
     */
    protected _replacePool(term: string, rgx: RegExpMatchArray): DicePool;

    protected _validateResult(result: any): any;

    /**
     * Safely evaluate a formulaic expression using a Proxy environment which is allowed access to Math commands
     * @param expression    The formula expression to evaluate
     * @return                The returned numeric result
     */
    protected _safeEval(expression: string): number;

    /* -------------------------------------------- */
    /*  HTML Rendering
    /* -------------------------------------------- */

    /**
     * Render a Roll instance to HTML
     * @param chatOptions    An object configuring the behavior of the resulting chat message.
     * @return                A Promise which resolves to the rendered HTML
     */
    render(chatOptions?: object): Promise<JQuery | HTMLElement>;

    /**
     * Render the tooltip HTML for a Roll instance
     */
    getTooltip(): Promise<JQuery | HTMLElement>;

    /**
     * Transform a Roll instance into a ChatMessage, displaying the roll result.
     * This function can either create the ChatMessage directly, or return the data object that will be used to create.
     *
     * @param chatData    The data object to use when creating the message
     * @param rollMode    The template roll mode to use for the message from CONFIG.rollModes
     * @param create    Whether to automatically create the chat message, or only return the prepared
     *                    chatData object.
     * @return            A promise which resolves to the created ChatMessage entity, if create is true
     *                    or the Object of prepared chatData otherwise.
     */
    toMessage(chatData?: object, { rollMode, create }?: { rollMode?: string; create?: boolean }): Promise<ChatMessage>;

    /* -------------------------------------------- */
    /*  Methods
    /* -------------------------------------------- */

    /**
     * Alter the Roll formula by adding or multiplying the number of dice included in each roll term
     *
     * @param add        A number of dice to add to each Die term
     * @param multiply    A multiplier for the number of dice in each Die term
     *
     * @example
     * let r = new Roll("4d8 + 4 + 2d4");
     * r.alter(1, 2);
     * r.formula;
     * > 9d8 + 4 + 5d4
     */
    alter(add: number, multiple: number): Roll;

    /**
     * Return the minimum possible Dice roll which can result from the given formula
     * @param formula    A dice roll formula to minimize
     * @return            A Roll instance representing the minimal roll
     */
    static minimize(formula: string): Roll;

    /**
     * Return the maximum possible Dice roll which can result from the given formula
     * @param formula    A dice roll formula to maximize
     * @return            A Roll instance representing the maximal roll
     */
    static maximize(formula: string): Roll;

    /**
     * Acquire data object representing the most-likely current actor.
     * This data can be included in the invocation of a Roll instance for evaluating dynamic attributes.
     *
     * @return    An object of data representing the current Actor (if any)
     */
    static getActorData(): any;

    static simulate(formula: string, n: number): number[];

    /* -------------------------------------------- */
    /*  Saving and Loading
    /* -------------------------------------------- */

    /**
     * Structure the Roll data as an object suitable for JSON stringification
     * @return    Structured data which can be serialized into JSON
     */
    toJSON(): any;

    /**
     * Recreate a Roll instance using a provided JSON string
     * @param json    Serialized JSON data representing the Roll
     * @return        A revived Roll instance
     */
    static fromJSON(json: string): Roll;
}
