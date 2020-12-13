import { GraphQueryable, GraphQueryableInstance, GraphQueryableCollection } from "./graphqueryable";
import { Notebook as INotebook, Onenote as IOnenote, OnenoteSection as ISection } from "@microsoft/microsoft-graph-types";
export interface OneNoteMethods {
    notebooks: Notebooks;
    sections: Sections;
    pages: Pages;
}
/**
 * Represents a onenote entity
 */
export declare class OneNote extends GraphQueryableInstance<IOnenote> implements OneNoteMethods {
    readonly notebooks: Notebooks;
    readonly sections: Sections;
    readonly pages: Pages;
}
/**
 * Describes a collection of Notebook objects
 *
 */
export declare class Notebooks extends GraphQueryableCollection<INotebook[]> {
    /**
     * Gets a notebook instance by id
     *
     * @param id Notebook id
     */
    getById(id: string): Notebook;
    /**
     * Create a new notebook as specified in the request body.
     *
     * @param displayName Notebook display name
     */
    add(displayName: string): Promise<NotebookAddResult>;
}
/**
 * Describes a notebook instance
 *
 */
export declare class Notebook extends GraphQueryableInstance<INotebook> {
    constructor(baseUrl: string | GraphQueryable, path?: string);
    readonly sections: Sections;
}
/**
 * Describes a collection of Sections objects
 *
 */
export declare class Sections extends GraphQueryableCollection<ISection[]> {
    /**
     * Gets a section instance by id
     *
     * @param id Section id
     */
    getById(id: string): Section;
    /**
     * Adds a new section
     *
     * @param displayName New section display name
     */
    add(displayName: string): Promise<SectionAddResult>;
}
/**
 * Describes a sections instance
 *
 */
export declare class Section extends GraphQueryableInstance<ISection> {
    constructor(baseUrl: string | GraphQueryable, path?: string);
}
/**
 * Describes a collection of Pages objects
 *
 */
export declare class Pages extends GraphQueryableCollection {
}
export interface NotebookAddResult {
    data: any;
    notebook: Notebook;
}
export interface SectionAddResult {
    data: any;
    section: Section;
}
