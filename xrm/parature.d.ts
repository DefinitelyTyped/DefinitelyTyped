// Type definitions for Microsoft Parature extentions to Xrm.Page - available for CRM Online Only.
// Project: http://msdn.microsoft.com/en-us/library/gg328255.aspx
// Definitions by: David Berry <https://github.com/6ix4our/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="xrm.d.ts" />

declare module Xrm.Page
{
    export interface KbSearchControl extends Control
    {
        addOnResultOpened( handler: () => void ): void;

        addOnSelection( handler: () => void ): void;

        getSearchQuery(): string;

        getSelectedResult(): KbSearchResult;

        removeOnResultOpened( handler: () => void ): void;

        removeOnSelection( handler: () => void ): void;

        setSearchQuery( query: string ): void;
    }

    export interface KbSearchResult
    {
        answer: string;
        articleId: string;
        articleUid: string;
        createdOn: Date;
        expiredDate: Date;
        isAssociated: boolean;
        lastModifiedOn: Date;
        publicUrl: string;
        published: boolean;
        question: string;
        rating: number;
        searchBlurb: string;
        serviceDeskUri: string;
        timesViewed: number;
    }
} 