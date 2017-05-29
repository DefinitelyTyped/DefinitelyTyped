// Type definitions for Microsoft Parature extentions to Xrm.Page - available for CRM Online Only
// Project: http://msdn.microsoft.com/en-us/library/gg328255.aspx
// Definitions by: David Berry <https://github.com/6ix4our/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Xrm.Page
{
    /**
     * Interface for Parature's knowledge base search control.
     *
     * @sa  Control
     */
    export interface KbSearchControl extends Xrm.Page.Control
    {
        /**
         * Use this method to add an event handler to the OnResultOpened event.
         *
         * @param   {Function} handler The handler.
         */
        addOnResultOpened( handler: () => void ): void;

        /**
         * Use this method to add an event handler to the OnSelection event.
         *
         * @param   {Function} handler The handler.
         */
        addOnSelection( handler: () => void ): void;

        /**
         * Use this method to get the text used as the search criteria for the knowledge base management control.
         *
         * @return  The search query.
         */
        getSearchQuery(): string;

        /**
         * Use this method to get the currently selected result of the search control. The currently selected result also
         * represents the result that is currently open.
         *
         * @return  The selected result.
         */
        getSelectedResult(): KbSearchResult;

        /**
         * Use this method to remove an event handler from the OnResultOpened event.
         *
         * @param   {Function} handler The handler.
         */
        removeOnResultOpened( handler: () => void ): void;

        /**
         * Use this method to remove an event handler from the OnSelection event.
         *
         * @param   {Function} handler The handler.
         */
        removeOnSelection( handler: () => void ): void;

        /**
         * Use this method to set the text used as the search criteria for the knowledge base management control.
         *
         * @param   {string}    query   The text for the search query.
         */
        setSearchQuery( query: string ): void;
    }

    /**
     * Interface for a Parature knowledge base search result.
     */
    export interface KbSearchResult
    {
        /**
         * The HTML markup containing the content of the article.
         */
        answer: string;

        /**
         * The Article ID in a Parature department
         */
        articleId: string;

        /**
         * Unique Article ID for the Parature system.
         */
        articleUid: string;

        /**
         * The date the article was created.
         */
        createdOn: Date;

        /**
         * The date the article was or will be expired.
         */
        expiredDate: Date;

        /**
         * Whether the article is associated with the parent record or not
         */
        isAssociated: boolean;

        /**
         * Date on which the article was last modified.
         */
        lastModifiedOn: Date;

        /**
         * Support Portal URL of the article.
         */
        publicUrl: string;

        /**
         * Whether the Article is in published or draft state.
         */
        published: boolean;

        /**
         * The title of the article.
         */
        question: string;

        /**
         * The rating of the article.
         */
        rating: number;

        /**
         * A short snippet of article content which contains the areas where the search query was hit.
         */
        searchBlurb: string;

        /**
         * Link to the article in the Parature service desk.
         */
        serviceDeskUri: string;

        /**
         * The number of times an article is viewed on the Parature portal by customers.
         */
        timesViewed: number;
    }
}
