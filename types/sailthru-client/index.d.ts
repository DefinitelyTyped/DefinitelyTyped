// Type definitions for sailthru-client 3.0
// Project: https://github.com/sailthru/sailthru-node-client
// Definitions by: Sergey Smolnikov <https://github.com/smolnikov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as Restler from "restler";
import * as http from "http";

export {};

interface RestlerResult {
    on(eventName: string, listener: (data?: any, response?: http.ServerResponse) => void): RestlerResult;
}

export type SailthruError = {
    statusCode: string,
    error: string,
    errormsg: string
} | null;

export interface PurchaseItem {
    qty: number;
    title: string;
    price: number;
    id: string | number;
    url: string;
    tags?: string[];
    vars?: object;
    images?: {
        full?: {
            url: string
        },
        thumb?: {
            url: string
        }
    };
}

export type SailthruResponse = object | string;

export type SailthruCallback = (err: SailthruError, response: SailthruResponse) => void;

/**
 * API client version
 */
export const VERSION: string;

export function createSailthruClient(apiKey: string, apiSecret: string, apiUrl?: string): SailthruClient;
export function createClient(apiKey: string, apiSecret: string, apiUrl?: string): SailthruClient;

export interface SailthruClient {
    logging: boolean;

    /**
     * Enable Logging
     */
    enableLogging(): void;

    /**
     * Disable Logging
     */
    disableLogging(): void;

    /**
     * Perform an arbitrary API GET request to Sailthru.
     * @param action the API endpoint to send a request to
     * @param data provide the API options, as outlined in the GET section of the documentation for that endpoint
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    apiGet(
        action: string,
        data: object,
        callback: SailthruCallback
    ): void;

    /**
     * Perform an arbitrary API DELETE request to Sailthru.
     * @param action the API endpoint to send a request to
     * @param data provide the API options, as outlined in the DELETE section of the documentation for that endpoint
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    apiDelete(
        action: string,
        data: object,
        callback?: SailthruCallback
    ): void;

    /**
     * Perform an arbitrary API POST request to Sailthru.
     * @param action the API endpoint to send a request to
     * @param data provide the API options, as outlined in the POST section of the documentation for that endpoint
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    apiPost(
        action: string,
        data: object,
        callback: SailthruCallback
    ): void;

    /**
     * Perform an arbitrary API POST request to Sailthru.
     * @param action the API endpoint to send a request to
     * @param data provide the API options, as outlined in the POST section of the documentation for that endpoint
     * @param binary_data_params used to specify file upload details. Should be an array which includes strings, corresponding to fields in the “options” parameter that should be read in as files
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    apiPost(
        action: string,
        data: object,
        binary_data_params: string[],
        callback: SailthruCallback
    ): void | RestlerResult;

    /**
     * Perform multipart API POST request to Sailthru
     * @param action the API endpoint to send a request to
     * @param data provide the API options, as outlined in the POST section of the documentation for that endpoint
     * @param binary_data_params used to specify file upload details. Should be an array which includes strings, corresponding to fields in the “options” parameter that should be read in as files
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    apiPostMultiPart(
        action: string,
        data: object,
        binary_data_param: string[],
        callback: SailthruCallback
    ): RestlerResult;

    /**
     * Send a single message to email, using the given template.
     * @param template Name of the template to use as the basis for the message content
     * @param email valid email address to send the message to
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    send(
        template: string,
        email: string,
        callback: SailthruCallback
    ): void;

    /**
     * Send a single message to email, using the given template.
     * @param template Name of the template to use as the basis for the message content
     * @param email valid email address to send the message to
     * @param options a Javascript object that can be used to specify any other valid API parameters for the send POST,
     * the full list is available https://getstarted.sailthru.com/new-for-developers-overview/email-and-user-profiles/send/
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    send(
        template: string,
        email: string,
        options: object,
        callback: SailthruCallback
    ): void;

    /**
     * Send a message to each of the “emails” specified, using the given “template”.
     * @param template Name of the template to use as the basis for the message content
     * @param emails valid email addresses to send the message to. This can be either a comma-separated String, or a Javascript Array.
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    multiSend(
        template: string,
        emails: string | string[],
        callback: SailthruCallback
    ): void;

    /**
     * Send a message to each of the “emails” specified, using the given “template”.
     * @param template Name of the template to use as the basis for the message content
     * @param emails valid email addresses to send the message to. This can be either a comma-separated String, or a Javascript Array.
     * @param options a Javascript object that can be used to specify any other valid API parameters for the send POST,
     * the full list is available https://getstarted.sailthru.com/new-for-developers-overview/email-and-user-profiles/send/
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    multiSend(
        template: string,
        emails: string[],
        options: object,
        callback: SailthruCallback
    ): void;

    /**
     * Looks up the delivery status of a particular send, by its “send_id”.
     * @param send_id the send ID which was in the response of a previous send call
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    getSend(
        send_id: string,
        callback: SailthruCallback
    ): void;

    /**
     * Cancels the scheduled send which is identified by “send_id”. Note that you can only cancel sends which were scheduled in the future with the “schedule_time” parameters.
     * @param send_id the send ID which was in the response of a previous send call
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    cancelSend(
        send_id: string,
        callback: SailthruCallback
    ): void;

    /**
     * Return a user profile by looking up via a Sailthru ID (sid).
     * @param sid the sailthru id for a given user
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    getUserBySid(
        sid: string,
        callback: SailthruCallback
    ): void;

    /**
     * Return a user profile by looking up via a given key and ID.
     * @param id the id for a given user
     * @param key specify which type of key was provided in the “id” parameter
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    getUserByKey(
        id: string,
        key: string,
        callback: SailthruCallback
    ): void;

    /**
     * Return a user profile by looking up via a given key and ID.
     * @param id the id for a given user
     * @param key specify which type of key was provided in the “id” parameter
     * @param fields specify which fields to return. Options are documented here https://getstarted.sailthru.com/new-for-developers-overview/email-and-user-profiles/user/#fieldstype
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    getUserByKey(
        id: string,
        key: string,
        fields: object,
        callback: SailthruCallback
    ): void;

    /**
     * Update a user profile.
     * @param sid the sailthru id for a given user
     * @param options provide user API options, as outlined in the user POST documentation
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    saveUserBySid(
        sid: string,
        options: object,
        callback: SailthruCallback
    ): void | RestlerResult;

    /**
     * Update a user profile.
     * @param id the id for a given user
     * @param key specify which type of key was provided in the “id” parameter
     * @param options provide user API options, as outlined in the user POST documentation
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    saveUserByKey(
        id: string,
        key: string,
        options: object,
        callback: SailthruCallback
    ): void | RestlerResult;

    /**
     * Looks up the details about a particular campaign, using blast ID.
     * @param blastId the blast ID which was in the response of a previous blast call
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    getBlast(
        blastId: string | number,
        callback: SailthruCallback
    ): void;

    /**
     * Delete a previously created campaign, by blast ID. This cannot be undone.
     * @param blastId the blast ID which was in the response of a previous blast call
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    deleteBlast(
        blastId: string | number,
        callback: SailthruCallback
    ): void;

    /**
     * Unschedule a previously scheduled campaign, by blast ID.
     * @param blastId the blast ID which was in the response of a previous blast call
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    unscheduleBlast(
        blastId: string | number,
        callback: SailthruCallback
    ): void;

    /**
     * Pause a currently sending created campaign, by blast ID.
     * @param blastId the blast ID which was in the response of a previous blast call
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    pauseBlast(
        blastId: string | number,
        callback: SailthruCallback
    ): void;

    /**
     * Resume a previously paused campaign, by blast ID.
     * @param blastId the blast ID which was in the response of a previous blast call
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    resumeBlast(
        blastId: string | number,
        callback: SailthruCallback
    ): void;

    /**
     * Cancel a campaign which is currently sending, by blast ID. This cannot be undone.
     * @param blastId the blast ID which was in the response of a previous blast call
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    cancelBlast(
        blastId: string | number,
        callback: SailthruCallback
    ): void;

    /**
     * Modify an existing campaign by setting any field.
     * @param blastId the blast ID which was in the response of a previous blast call
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    updateBlast(
        blastId: string | number,
        callback: SailthruCallback
    ): void;

    /**
     * Modify an existing campaign by setting any field.
     * @param blastId the blast ID which was in the response of a previous blast call
     * @param options provide additional blast API options, as outlined in the blast POST documentation
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    updateBlast(
        blastId: string | number,
        options: object,
        callback: SailthruCallback
    ): void;

    /**
     * Modify an existing campaign by copying data into it from a Template, and then scheduling it.
     * @param blastId the blast ID which was in the response of a previous blast call
     * @param template the name of a template to copy from, as the basis for this campaign
     * @param list the target list for the campaign
     * @param scheduleTime when the campaign should be sent
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    scheduleBlastFromTemplate(
        blastId: string | number,
        template: string,
        list: string,
        scheduleTime: string,
        callback: SailthruCallback
    ): void;

    /**
     * Modify an existing campaign by copying data into it from a Template, and then scheduling it.
     * @param blastId the blast ID which was in the response of a previous blast call
     * @param template the name of a template to copy from, as the basis for this campaign
     * @param list the target list for the campaign
     * @param scheduleTime when the campaign should be sent
     * @param options provide additional blast API options, as outlined in the blast POST documentation
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    scheduleBlastFromTemplate(
        blastId: string | number,
        template: string,
        list: string,
        scheduleTime: string,
        options: object,
        callback: SailthruCallback
    ): void;

    /**
     * Modify an existing campaign by setting any field.
     * @param blastId the blast ID which was in the response of a previous blast call
     * @param scheduleTime when the campaign should be sent
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    scheduleBlastFromBlast(
        blastId: string | number,
        scheduleTime: string,
        callback: SailthruCallback
    ): void;

    /**
     * Modify an existing campaign by setting any field.
     * @param blastId the blast ID which was in the response of a previous blast call
     * @param scheduleTime when the campaign should be sent
     * @param options provide additional blast API options, as outlined in the blast POST documentation
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    scheduleBlastFromBlast(
        blastId: string | number,
        scheduleTime: string,
        options: object,
        callback: SailthruCallback
    ): void;

    /**
     * Schedule a new campaign.
     * @param name the name for the campaign, which will be used to identify it in Campaign Reporting
     * @param list the target list for the campaign
     * @param scheduleTime when the campaign should be sent
     * @param fromName the from name for the email campaign
     * @param fromEmail the from email for the email campaign
     * @param subject the email subject line for the campaign
     * @param contentHtml the content of the email body, for the HTML version of the campaign
     * @param contentText the content of the email body, for the Text version of the campaign
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    scheduleBlast(
        name: string,
        list: string,
        scheduleTime: string,
        fromName: string,
        fromEmail: string,
        subject: string,
        contentHtml: string,
        contentText: string,
        callback: SailthruCallback
    ): void;

    /**
     * Schedule a new campaign.
     * @param name the name for the campaign, which will be used to identify it in Campaign Reporting
     * @param list the target list for the campaign
     * @param scheduleTime when the campaign should be sent
     * @param fromName the from name for the email campaign
     * @param fromEmail the from email for the email campaign
     * @param subject the email subject line for the campaign
     * @param contentHtml the content of the email body, for the HTML version of the campaign
     * @param contentText the content of the email body, for the Text version of the campaign
     * @param options provide additional blast API options, as outlined in the blast POST documentation
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    scheduleBlast(
        name: string,
        list: string,
        scheduleTime: string,
        fromName: string,
        fromEmail: string,
        subject: string,
        contentHtml: string,
        contentText: string,
        options: object,
        callback: SailthruCallback
    ): void;

    /**
     * Create or update a template with the given name
     * @param template the name of the template
     * @param options any template API options, as outlined in the template POST documentation
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    saveTemplate(
        template: string,
        options: object,
        callback: SailthruCallback
    ): void;

    /**
     * Revert a template to one of its previous revisions.
     * @param template the name of the template
     * @param revision_id a revision_id of the template
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    saveTemplateFromRevision(
        template: string,
        revision_id: string,
        callback: SailthruCallback
    ): void;

    /**
     * Delete a template from your account. This cannot be undone.
     * @param template the name of the template
     * @param callbacka standard callback function which will be invoked after the API server responds
     */
    deleteTemplate(
        template: string,
        callback: SailthruCallback
    ): void;

    /**
     * Return a list of all the lists in your account.
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    getLists(
        callback: SailthruCallback
    ): void;

    /**
     * Delete a list from your account, and remove all record of it from your user profiles. This cannot be undone.
     * @param list the name of an existing list in your account
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    deleteList(
        list: string,
        callback: SailthruCallback
    ): void;

    /**
     * Create a new content item.
     * @param title the name of the content item being created
     * @param url the URL of the content item, which will be used as its unique identifier
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    pushContent(
        title: string,
        url: string,
        callback: SailthruCallback
    ): void;

    /**
     * Create a new content item.
     * @param title the name of the content item being created
     * @param url the URL of the content item, which will be used as its unique identifier
     * @param options provide additional content API options, as outlined in the content POST documentation
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    pushContent(
        title: string,
        url: string,
        options: object,
        callback: SailthruCallback
    ): void;

    /**
     * Record a purchase into the Sailthru system.
     * @param email the email of the user who made the purchase
     * @param items a description of what items the user purchased. See the examples on the main Purchase API page
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    purchase(
        email: string,
        items: PurchaseItem[],
        callback: SailthruCallback
    ): void;

    /**
     * Record a purchase into the Sailthru system.
     * @param email the email of the user who made the purchase
     * @param items a description of what items the user purchased. See the examples on the main Purchase API page
     * @param options provide additional purchase API options, as outlined in the purchase POST documentation
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    purchase(
        email: string,
        items: PurchaseItem[],
        options: object,
        callback: SailthruCallback
    ): void;

    /**
     * Fetch stats for any part of Sailthru.
     * @param data provide stats API options, as outlined in the stats GET documentation
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    stats(
        data: object,
        callback: SailthruCallback
    ): void;

    /**
     * Fetch stats for a List within Sailthru.
     * @param options provide stats API options, as outlined in the stats GET documentation
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    statsList(
        options: object,
        callback: SailthruCallback
    ): void;

    /**
     * Fetch stats for a campaign send, or aggregate campaign data over a time period.
     * @param options provide stats API options, as outlined in the stats GET documentation
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    statsBlast(
        options: object,
        callback: SailthruCallback
    ): void;

    /**
     * Fetch the status of a job
     * @param job the job ID which was returned from a previous job POST
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    getJobStatus(
        job: string,
        callback: SailthruCallback
    ): void;

    /**
     * Create a new job with specific options.
     * @param job the name of the job to create
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    processJob(
        job: string,
        callback: SailthruCallback
    ): void;

    /**
     * Create a new job with specific options.
     * @param job the name of the job to create
     * @param options provide additional job API options, as outlined in the job POST documentation
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    processJob(
        job: string,
        options: object,
        callback: SailthruCallback
    ): void;

    /**
     * Create a new job with specific options.
     * @param job the name of the job to create
     * @param options provide additional job API options, as outlined in the job POST documentation
     * @param report_email the email address that will be emailed when the job completes or fails
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    processJob(
        job: string,
        options: object,
        report_email: string,
        callback: SailthruCallback
    ): void;

    /**
     * Create a new job with specific options.
     * @param job the name of the job to create
     * @param options provide additional job API options, as outlined in the job POST documentation
     * @param report_email the email address that will be emailed when the job completes or fails
     * @param postback_url the URL which will receive postback data when the job completes or fails
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    processJob(
        job: string,
        options: object,
        report_email: string,
        postback_url: string,
        callback: SailthruCallback
    ): void;

    /**
     * Create a new job with specific options.
     * @param job the name of the job to create
     * @param options provide additional job API options, as outlined in the job POST documentation
     * @param report_email the email address that will be emailed when the job completes or fails
     * @param postback_url the URL which will receive postback data when the job completes or fails
     * @param binary_data_params used to specify file upload details. Should be an array which includes strings, corresponding to fields in the “options” parameter that should be read in as files.
     * @param callback a standard callback function which will be invoked after the API server responds
     */
    processJob(
        job: string,
        options: object,
        report_email: string,
        postback_url: string,
        binary_data_params: string[],
        callback: SailthruCallback
    ): void;

    receiveOptoutPost(): void;

    /**
     * Retrieve the last known rate limit information for the given action / method combination
     * @param action API action to get rate limit information
     * @param method API method to get rate limit information
     */
    getLastRateLimitInfo(action: string, method: string): {
        limit: number,
        remaining: number,
        reset: number
    };
}
