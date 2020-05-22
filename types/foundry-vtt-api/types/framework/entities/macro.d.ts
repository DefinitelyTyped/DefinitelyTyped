/**
 * The Collection of Macro entities
 * @extends {Collection}
 */
declare class Macros extends Collection<Macro> {
	entities: Macro[];

	values(): IterableIterator<Macro>;

	/* -------------------------------------------- */
	/*  Properties                                  */
	/* -------------------------------------------- */

	/**
	 * Determine whether a given User is allowed to use JavaScript macros
	 * @param user	The User entity to test
	 * @return		Can the User use scripts?
	 */
	static canUseScripts(user: User): boolean;

	static registerSettings(): void;
}

/**
 * The Macro entity which implements a triggered chat or script expression which can be quickly activated by the user.
 * All users have permission to create and use chat-based Macros, but users must be given special permission to use
 * script-based macros.
 *
 * @see {@link Macros}        The Collection of Macro entities
 * @see {@link MacroConfig}   The Macro Configuration sheet
 * @see {@link Hotbar}        The Hotbar interface application
 */
declare class Macro extends Entity {
	/** @override */
	static get config(): {
		baseEntity: Macro;
		collection: Macros;
		embeddedEntities: [];
	};

	/**
	 * Execute the Macro command
	 */
	execute(): Promise<any>;
}
