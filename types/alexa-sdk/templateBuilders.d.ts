import { Image, TextField, ListItem, Template } from './types';
export namespace templateBuilders {
    export interface SetTextContent<T extends TemplateBuilder<T>> {
        setTextContent(primaryText: TextField, secondaryText?: TextField, tertiaryText?: TextField): T;
    }
    export interface SetListItems<T extends TemplateBuilder<T>> {
        setListItems(listItems: ListItem[]): T;
    }
    export abstract class TemplateBuilder<T extends TemplateBuilder<T>> {
        public template: Template;
        constructor();

        /**
         * Sets the title of the template
         * 
         * @param {string} title 
         * @returns 
         * @memberof TemplateBuilder
         */
        public setTitle(title: string): T;

        /**
         * Sets the token of the template
         * 
         * @param {string} token 
         * @returns 
         * @memberof TemplateBuilder
         */
        public setToken(token: string): T;

        /**
         * Sets the background image of the template
         * 
         * @param {Image} image 
         * @returns 
         * @memberof TemplateBuilder
         */
        public setBackgroundImage(image: Image): T;

        /**
         * Sets the backButton behavior
         * 
         * @param {string} backButtonBehavior 'VISIBLE' or 'HIDDEN'
         * @returns 
         * @memberof TemplateBuilder
         */
        public setBackButtonBehavior(backButtonBehavior: string): T;

        /**
         * Builds the template JSON object
         * 
         * @returns 
         * @memberof TemplateBuilder
         */
        public build(): Template;
        // /**
        //  * Sets the text content for the template
        //  * 
        //  * @param {TextField} primaryText 
        //  * @param {TextField} secondaryText 
        //  * @param {TextField} tertiaryText 
        //  * @returns TemplateBuilder
        //  * @memberof TemplateBuilder
        //  */
        // public setTextContent(primaryText: TextField, secondaryText?: TextField, tertiaryText?: TextField): T;
    }
    /**
     * Used to build a list of ListItems for ListTemplate
     * 
     * @class ListItemBuilder
     */
    export class ListItemBuilder {
        constructor();
        public items: ListItem[];
        /**
         * Add an item to the list of template
         * 
         * @param {Image} image 
         * @param {string} token 
         * @param {TextField} primaryText 
         * @param {TextField} secondaryText 
         * @param {TextField} tertiaryText 
         * @memberof ListItemBuilder
         */
        public addItem(image: Image, token: string, primaryText: TextField, secondaryText?: TextField, tertiaryText?: TextField): ListItemBuilder;

        public build(): ListItem[];
    }
    /**
     * Used to create BodyTemplate1 objects
     * 
     * @class BodyTemplate1Builder
     * @extends {TemplateBuilder}
     */
    export class BodyTemplate1Builder extends TemplateBuilder<BodyTemplate1Builder> implements SetTextContent<BodyTemplate1Builder>{
        constructor();
        /**
         * Sets the text content for the template
         * 
         * @param {TextField} primaryText 
         * @param {TextField} secondaryText 
         * @param {TextField} tertiaryText 
         * @returns BodyTemplate1Builder
         * @memberof BodyTemplate1Builder
         */
        public setTextContent(primaryText: TextField, secondaryText?: TextField, tertiaryText?: TextField): BodyTemplate1Builder;
    }
    /**
     * Used to create BodyTemplate2 objects
     * 
     * @class BodyTemplate2Builder
     * @extends {TemplateBuilder}
     */
    export class BodyTemplate2Builder extends TemplateBuilder<BodyTemplate2Builder> implements SetTextContent<BodyTemplate2Builder> {
        constructor();

        /**
         * Sets the image for the template
         * 
         * @param {Image} image 
         * @returns 
         * @memberof BodyTemplate2Builder
         */
        public setImage(image: Image): BodyTemplate2Builder

        /**
         * Sets the text content for the template
         * 
         * @param {TextField} primaryText 
         * @param {TextField} secondaryText 
         * @param {TextField} tertiaryText 
         * @returns BodyTemplate2Builder
         * @memberof BodyTemplate2Builder
         */
        public setTextContent(primaryText: TextField, secondaryText?: TextField, tertiaryText?: TextField): BodyTemplate2Builder;
    }
    /**
     * Used to create BodyTemplate3 objects
     * 
     * @class BodyTemplate3Builder
     * @extends {TemplateBuilder}
     */
    export class BodyTemplate3Builder extends TemplateBuilder<BodyTemplate3Builder> implements SetTextContent<BodyTemplate3Builder> {
        constructor();

        /**
         * Sets the image for the template
         * 
         * @param {any} image 
         * @returns 
         * @memberof BodyTemplate3Builder
         */
        public setImage(image: any): BodyTemplate3Builder;

        /**
         * Sets the text content for the template
         * 
         * @param {TextField} primaryText 
         * @param {TextField} secondaryText 
         * @param {TextField} tertiaryText 
         * @returns BodyTemplate3Builder
         * @memberof BodyTemplate3Builder
         */
        public setTextContent(primaryText: TextField, secondaryText?: TextField, tertiaryText?: TextField): BodyTemplate3Builder;
    }
    /**
     * Used to create BodyTemplate6 objects
     * 
     * @class BodyTemplate6Builder
     * @extends {TemplateBuilder}
     */
    export class BodyTemplate6Builder extends TemplateBuilder<BodyTemplate6Builder> implements SetTextContent<BodyTemplate6Builder> {
        constructor();

        /**
         * Sets the image for the template
         * 
         * @param {any} image 
         * @returns 
         * @memberof BodyTemplate6Builder
         */
        public setImage(image: any): BodyTemplate6Builder;

        /**
         * Sets the text content for the template
         * 
         * @param {TextField} primaryText 
         * @param {TextField} secondaryText 
         * @param {TextField} tertiaryText 
         * @returns BodyTemplate6Builder
         * @memberof BodyTemplate6Builder
         */
        public setTextContent(primaryText: TextField, secondaryText?: TextField, tertiaryText?: TextField): BodyTemplate6Builder;
    }
    /**
     * Used to create ListTemplate1 objects
     * 
     * @class ListTemplate1Builder
     * @extends {TemplateBuilder}
     */
    export class ListTemplate1Builder extends TemplateBuilder<ListTemplate1Builder> implements SetListItems<ListTemplate1Builder> {
        constructor();

        /**
         * Set the items for the list
         * 
         * @param {any} listItems 
         * @returns 
         * @memberof ListTemplate1Builder
         */
        setListItems(listItems: ListItem[]): ListTemplate1Builder;
    }
    /**
     * Used to create ListTemplate2 objects
     * 
     * @class ListTemplate2Builder
     * @extends {TemplateBuilder}
     */
    export class ListTemplate2Builder extends TemplateBuilder<ListTemplate2Builder> implements SetListItems<ListTemplate2Builder> {
        constructor();

        /**
         * Set the items for the list
         * 
         * @param {any} listItems 
         * @returns 
         * @memberof ListTemplate2Builder
         */
        setListItems(listItems: ListItem[]): ListTemplate2Builder;
    }

}