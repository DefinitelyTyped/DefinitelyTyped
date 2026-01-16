import { Term } from "@rdfjs/types";
import PathList = require("./PathList");

/**
 * A graph pointer object
 */
declare class Grapoi extends PathList {
    /**
     * Add quad(s) with the current terms as the object
     * @param predicates Predicates of the quads
     * @param subjects Subjects of the quads
     * @param callback Function called for each subject as a pointer argument
     * @returns this
     */
    addIn(
        predicates: Grapoi | Grapoi[] | Term | Term[],
        subjects?: Grapoi | Grapoi[] | Term | Term[],
        callback?: (ptr: this) => void,
    ): this;

    /**
     * Add list(s) with the given items
     * @param predicates Predicates of the lists
     * @param items List items
     * @returns this
     */
    addList(predicates: Grapoi | Grapoi[] | Term | Term[], items?: Grapoi | Grapoi[] | Term | Term[]): this;

    /**
     * Add quad(s) with the current terms as the subject
     * @param predicates Predicates of the quads
     * @param objects Objects of the quads
     * @param callback Function called for each subject as a pointer argument
     * @returns this
     */
    addOut(
        predicates: Grapoi | Grapoi[] | Term | Term[],
        objects?: Grapoi | Grapoi[] | Term | Term[],
        callback?: (ptr: this) => void,
    ): this;

    /**
     * Base all terms with a relative IRI with the given base.
     * @param base Base of the terms
     * @returns Instance with a single pointer with the term based
     */
    base(base: Grapoi | Grapoi[] | Term | Term[]): this;

    /**
     * Use the given score function on all pointers and return the pointer with the best score.
     * @param score Score function
     * @returns Instance with a single pointer with the best score
     */
    best(score: (ptr: this) => number): this;

    /**
     * Delete quad(s) with the current terms as the object.
     * @param predicates Predicates of the quads
     * @param subjects Subjects of the quads
     * @returns this
     */
    deleteIn(predicates?: Grapoi | Grapoi[] | Term | Term[], subjects?: Grapoi | Grapoi[] | Term | Term[]): this;

    /**
     * Delete list(s).
     * @param predicates Predicates of the lists
     * @returns this
     */
    deleteList(predicates?: Grapoi | Grapoi[] | Term | Term[]): this;

    /**
     * Delete quad(s) with the current terms as the subject.
     * @param predicates Predicates of the quads
     * @param objects Objects of the quads
     * @returns this
     */
    deleteOut(predicates: Grapoi | Grapoi[] | Term | Term[], objects?: Grapoi | Grapoi[] | Term | Term[]): this;

    /**
     * Filter the pointers based on matching quad(s) with the current terms as the object.
     * @param predicates Predicates of the quads
     * @param subjects Subjects of the quads
     * @returns Instance that contains only the filtered pointers
     */
    hasIn(predicates?: Grapoi | Grapoi[] | Term | Term[], subjects?: Grapoi | Grapoi[] | Term | Term[]): this;

    /**
     * Filter the pointers based on matching quad(s) with the current terms as the subject.
     * @param predicates Predicates of the quads
     * @param objects Objects of the quads
     * @returns Instance that contains only the filtered pointers
     */
    hasOut(predicates: Grapoi | Grapoi[] | Term | Term[], objects?: Grapoi | Grapoi[] | Term | Term[]): this;

    /**
     * Traverse the graph with the current terms as the object.
     * @param predicates Predicates of the quads
     * @param subjects Subjects of the quads
     * @returns Instance with pointers of the traversed target terms
     */
    in(predicates?: Grapoi | Grapoi[] | Term | Term[], subjects?: Grapoi | Grapoi[] | Term | Term[]): this;

    /**
     * Traverse the graph with the current terms as the subject.
     * @param predicates Predicates of the quads
     * @param objects Objects of the quads
     * @returns Instance with pointers of the traversed target terms
     */
    out(predicates?: Grapoi | Grapoi[] | Term | Term[], objects?: Grapoi | Grapoi[] | Term | Term[]): this;

    /**
     * Jump to specific terms.
     * @param terms Terms for the new pointers
     * @returns Instance with pointers of the selected terms
     */
    node(terms?: Grapoi | Grapoi[] | Term | Term[] | string | string[]): this;

    /**
     * Rebase all terms of the current pointers with a new base.
     * @param base New base of the terms
     * @returns Instance with a single pointer with the new base as the term
     */
    rebase(base: Grapoi | Grapoi[] | Term | Term[]): this;

    /**
     * Replace all terms of the current pointers with another term.
     * @param replacement Term used as replacement
     * @returns Instance with a single pointer with the replacement as the term
     */
    replace(replacement: Grapoi | Grapoi[] | Term | Term[]): this;

    /**
     * Score the pointers and sort them by score value.
     * @param score @rdfjs/score compatible score function
     * @param options Options for limit and offset
     * @returns Instance of the scored pointers, sorted and sliced.
     */
    score(score: (ptr: this) => number, options?: { limit?: number; offset?: number }): this;
}

export = Grapoi;
