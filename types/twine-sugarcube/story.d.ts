import { Passage, PassageBase } from "./passage";

export interface StoryAPI {
    /**
     * The DOM ID of the story (created from the slugified story title).
     * @since 2.0.0
     * @deprecated 2.37.0 in favor of Story.id
     */
    readonly domId: string;

    /**
     * The DOM-compatible ID of the story, created from the slugified story name.
     * @since 2.37.0
     */
    readonly id: string;

    /**
     * The IFID of the story, or an empty string if no IFID exists. The Twine 2 ecosystem's IFIDs are v4 random UUIDs.
     * @since 2.5.0
     */
    readonly ifId: string;

    /**
     * The name of the story.
     * @since 2.37.0
     */
    readonly name: string;

    /**
     * The title of the story.
     * @since 2.0.0
     * @deprecated 2.37.0 in favor of Story.name
     */
    readonly title: string;

    /**
     * Adds the passage to the passage store.
     * NOTE: This method cannot add code passages or passages tagged with code tags.
     * @param descriptor The passage descriptor object.
     * @returns Boolean true if the passage was added, elsewise false.
     * @since 2.37.0
     * @example
     * // Add a passage
     * const descriptor = {
     * 	name : "Forest 4",
     * 	tags : "forest heavy",
     * 	text : "You can barely see farther than arm's length for all the trees.",
     * };
     *
     * if (Story.add(descriptor)) {
     * 	// The "Forest 4" passage was added.
     * }
     */
    add(descriptor: PassageBase): boolean;

    /**
     * Deletes the Passage instance with the given name.
     * NOTE: This method cannot add code passages or passages tagged with code tags.
     * @param name
     * @returns Boolean true if a Passage instance with the given name was deleted, elsewise false.
     * @since 2.37.0
     * @example
     * // Delete the Passage instance with the name "The Ducky"
     * if (Story.delete("The Ducky")) {
     * 	// The "The Ducky" passage was deleted.
     * }
     */
    delete(name: string): boolean;

    /**
     * Searches all Passage instances for those that pass the test implemented by the given predicate function.
     * NOTE: This method cannot retrieve passages tagged with code tags.
     * @param predicate The function used to test each Passage instance, which is passed into the function as its
     * sole parameter. If the function returns true, then the Passage instance is added to the results.
     * @returns A new Array<Passage> filled with all instances that pass the test implemented by the given predicate function,
     * or an empty Array if no instances pass.
     * @since 2.37.0
     * @example
     * // Returns all 'forest'-tagged Passage instances
     * Story.filter(function (p) {
     * 	return p.tags.includes("forest");
     * });
     *
     * // Returns all Passage instances whose names include whitespace
     * var hasWhitespaceRegExp = /\s/;
     * Story.filter(function (p) {
     * 	return hasWhitespaceRegExp.test(p.name);
     * });
     */
    filter(predicate: (passage: Passage) => boolean): Passage[];
    filter<TThis>(predicate: (this: TThis, passage: Passage) => boolean, thisArg: TThis): Passage[];

    /**
     * Searches all Passage instances for the first that passes the test implemented by the given predicate function.
     * @param predicate The function used to test each Passage object, which is passed into the function as its sole parameter.
     * If the function returns true, then the Passage instance is added to the results.
     * @returns The first Passage instance that passed the test implemented by the given predicate function, or undefined if no instance passes.
     * @since 2.37.0
     * @example
     * // Returns the first 'forest'-tagged Passage instance
     * Story.find(function (p) {
     * 	return p.tags.includes("forest");
     * });
     *
     * // Returns the first Passage instance whose name includes whitespace
     * var hasWhitespaceRegExp = /\s/;
     * Story.find(function (p) {
     * 	return hasWhitespaceRegExp.test(p.name);
     * });
     */
    find(predicate: (passage: Passage) => boolean): Passage | undefined;
    find<TThis>(predicate: (this: TThis, passage: Passage) => boolean, thisArg: TThis): Passage | undefined;
    /**
     * Returns the Passage object referenced by the given title, or an empty Passage object on failure.
     * @param passageTitle The title of the Passage object to return.
     * @since 2.0.0
     */
    get(passageTitle: string): Passage;

    /**
     * Returns whether a Passage object referenced by the given title exists.
     * @param passageTitle The title of the Passage object whose existence will be verified.
     * @since 2.0.0
     */
    has(passageTitle: string): boolean;

    /**
     * Returns an array of Passage objects each of which must contain a property matching the given name,
     * whose value matches the given needle, or an empty array, if no matches are made.
     * @param propertyName The name of property whose value will be compared to the search value.
     * @param searchValue he value to search for within the matched property. The type of the property determines
     * how the search occurs; direct comparison for non-arrays, while arrays are iterated over. If the property
     * value, for non-arrays, or any of the property members' values, for arrays, match, then the Passage object
     * is added to the results array.
     * @param sortProperty The property whose value will be used to lexicographically sort the returned array.
     * If not given, the Passage object's title property is used.
     * @since 2.0.0
     * @example
     * // Returns all 'forest'-tagged Passage objects, sorted by their titles
     * Story.lookup("tags", "forest");
     * @deprecated 2.37.0 in favor of Story.name.
     */
    lookup(propertyName: string, searchValue: string | number, sortProperty?: string): Passage[];

    /**
     * Returns an array of Passage objects which passed the test implemented by the given filter function or
     * an empty array, if no objects pass.
     * @param filter The function used to test each Passage object, which is passed in as its sole parameter.
     * If the function returns true, then the Passage object is added to the results array.
     * @param sortProperty The property whose value will be used to lexicographically sort the returned array.
     * If not given, the Passage object's title property is used.
     * @since 2.11.0
     * @deprecated in 2.37.0 in favor of Story.filter().
     */
    lookupWith(filter: (p: Passage) => boolean, sortProperty?: string): Passage[];
}

export {};
