// Type definitions for Suite Script
// Project: http://www.netsuite.com
// Definitions by: Darren Hill <https://github.com/darrenhillconsulting>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace nlobjRecord.prototype {
    // nlobjRecord.prototype.getSubList.!ret

    /**
     *
     */
    interface GetSubListRet {

        /**
         *
         */
        prototype : {

            /**
             *
             */
            addButton : /*no type*/{};

            /**
             *
             */
            setLabel : /* nlobjSubList.prototype.setLabel */ any;

            /**
             *
             */
            setHelpText : /* nlobjSubList.prototype.setHelpText */ any;

            /**
             *
             */
            setDisplayType : /* nlobjSubList.prototype.setDisplayType */ any;

            /**
             *
             */
            setLineItemValue : /* nlobjSubList.prototype.setLineItemValue */ any;

            /**
             *
             */
            setLineItemMatrixValue : /* nlobjSubList.prototype.setLineItemMatrixValue */ any;

            /**
             *
             */
            setLineItemValues : /* nlobjSubList.prototype.setLineItemValues */ any;

            /**
             *
             */
            getLineItemCount : /* nlobjSubList.prototype.getLineItemCount */ string|number;

            /**
             *
             */
            addField : /* nlobjSubList.prototype.addField */ any;

            /**
             *
             */
            setUniqueField : /* nlobjSubList.prototype.setUniqueField */ any;

            /**
             *
             */
            addRefreshButton : /* nlobjSubList.prototype.addRefreshButton */ any;

            /**
             *
             */
            addMarkAllButtons : /* nlobjSubList.prototype.addMarkAllButtons */ any;
        }
    }
}
declare namespace nlobjRecord.prototype.GetSubListRet.prototype {
    // nlobjRecord.prototype.getSubList.!ret.prototype.addButton.!ret

    /**
     *
     */
    interface AddButtonRet {

        /**
         *
         */
        prototype : {

            /**
             *
             */
            setLabel : /* nlobjButton.prototype.setLabel */ any;

            /**
             *
             */
            setDisabled : /* nlobjButton.prototype.setDisabled */ any;
        }
    }
}
declare namespace nlobjRecord.prototype {
    // nlobjRecord.prototype.getField.!ret

    /**
     *
     */
    interface GetFieldRet {

        /**
         *
         */
        prototype : {

            /**
             *
             */
            getName : /* nlobjField.prototype.getName */ any;

            /**
             *
             */
            getLabel : /* nlobjField.prototype.getLabel */ any;

            /**
             *
             */
            getType : /* nlobjField.prototype.getType */ any;

            /**
             *
             */
            isHidden : /* nlobjField.prototype.isHidden */ any;

            /**
             *
             */
            isMandatory : /* nlobjField.prototype.isMandatory */ any;

            /**
             *
             */
            isDisabled : /* nlobjField.prototype.isDisabled */ any;

            /**
             *
             */
            setLabel : /* nlobjField.prototype.setLabel */ any;

            /**
             *
             */
            setAlias : /* nlobjField.prototype.setAlias */ any;

            /**
             *
             */
            setDefaultValue : /* nlobjField.prototype.setDefaultValue */ any;

            /**
             *
             */
            setDisabled : /* nlobjField.prototype.setDisabled */ any;

            /**
             *
             */
            setMandatory : /* nlobjField.prototype.setMandatory */ any;

            /**
             *
             */
            setMaxLength : /* nlobjField.prototype.setMaxLength */ any;

            /**
             *
             */
            setDisplayType : /* nlobjField.prototype.setDisplayType */ any;

            /**
             *
             */
            setBreakType : /* nlobjField.prototype.setBreakType */ any;

            /**
             *
             */
            setLayoutType : /* nlobjField.prototype.setLayoutType */ any;

            /**
             *
             */
            setLinkText : /* nlobjField.prototype.setLinkText */ any;

            /**
             *
             */
            setDisplaySize : /* nlobjField.prototype.setDisplaySize */ any;

            /**
             *
             */
            setPadding : /* nlobjField.prototype.setPadding */ any;

            /**
             *
             */
            setHelpText : /* nlobjField.prototype.setHelpText */ any;

            /**
             *
             */
            addSelectOption : /* nlobjField.prototype.addSelectOption */ any;
        }
    }
}
declare namespace nlobjPortlet.prototype {
    // nlobjPortlet.prototype.addEditColumn.!0

    /**
     *
     */
    interface AddEditColumn0 {

        /**
         *
         */
        prototype : {

            /**
             *
             */
            setLabel : /* nlobjColumn.prototype.setLabel */ any;

            /**
             *
             */
            setURL : /* nlobjColumn.prototype.setURL */ any;

            /**
             *
             */
            addParamToURL : /* nlobjColumn.prototype.addParamToURL */ any;
        }
    }
}
declare namespace nlobjForm.prototype {
    // nlobjForm.prototype.addTab.!ret

    /**
     *
     */
    interface AddTabRet {

        /**
         *
         */
        prototype : {

            /**
             *
             */
            setLabel : /* nlobjTab.prototype.setLabel */ any;

            /**
             *
             */
            setHelpText : /* nlobjTab.prototype.setHelpText */ any;
        }
    }
}
declare namespace nlobjAssistant.prototype {
    // nlobjAssistant.prototype.setCurrentStep.!0

    /**
     *
     */
    interface SetCurrentStep0 {

        /**
         *
         */
        prototype : {

            /**
             *
             */
            setLabel : /* nlobjAssistantStep.prototype.setLabel */ any;

            /**
             *
             */
            setHelpText : /* nlobjAssistantStep.prototype.setHelpText */ any;

            /**
             *
             */
            getStepNumber : /* nlobjAssistantStep.prototype.getStepNumber */ any;

            /**
             *
             */
            getFieldValue : /* nlobjAssistantStep.prototype.getFieldValue */ any;

            /**
             *
             */
            getFieldValues : /* nlobjAssistantStep.prototype.getFieldValues */ string[];

            /**
             *
             */
            getLineItemCount : /* nlobjAssistantStep.prototype.getLineItemCount */ string|number;

            /**
             *
             */
            getLineItemValue : /* nlobjAssistantStep.prototype.getLineItemValue */ string;

            /**
             *
             */
            getAllFields : /* nlobjAssistantStep.prototype.getAllFields */ string[];

            /**
             *
             */
            getAllLineItems : /* nlobjAssistantStep.prototype.getAllLineItems */ any;

            /**
             *
             */
            getAllLineItemFields : /* nlobjAssistantStep.prototype.getAllLineItemFields */ any;
        }
    }
}
declare namespace nlobjForm.prototype {
    // nlobjForm.prototype.addFieldGroup.!ret

    /**
     *
     */
    interface AddFieldGroupRet {

        /**
         *
         */
        prototype : {

            /**
             *
             */
            setLabel : /* nlobjFieldGroup.prototype.setLabel */ any;

            /**
             *
             */
            setCollapsible : /* nlobjFieldGroup.prototype.setCollapsible */ any;

            /**
             *
             */
            setSingleColumn : /* nlobjFieldGroup.prototype.setSingleColumn */ any;

            /**
             *
             */
            setShowBorder : /* nlobjFieldGroup.prototype.setShowBorder */ any;
        }
    }
}
declare namespace nlobjForm.prototype {
    // nlobjForm.prototype.addButton.!ret

    /**
     *
     */
    interface AddButtonRet {

        /**
         *
         */
        prototype : {

            /**
             *
             */
            setLabel : /* nlobjButton.prototype.setLabel */ any;

            /**
             *
             */
            setDisabled : /* nlobjButton.prototype.setDisabled */ any;
        }
    }
}

/**
 * Return a new record using values from an existing record.
 * @governance 10 units for transactions, 2 for custom records, 4 for all other records
 *
 * @param {string}    type The record type name.
 * @param {int}    id The internal ID for the record.
 * @param {Object}    initializeValues Contains an array of name/value pairs of defaults to be used during record initialization.
 * @return {nlobjRecord}  Returns an nlobjRecord object of a copied record.
 *
 * @since    2007.0
 * @param type
 * @param id
 * @param initializeValues
 * @return
 */
declare function nlapiCopyRecord(type:string, id:any, initializeValues?:any):nlobjRecord;

declare function nlapiDisableLineItemField(type:string, fldnam:string, val:boolean):void;
declare function nlapiDisableField(fldnam:string, val:any):void;
declare function nlapiLoadSearch(fldnam:string, val:any):void;
declare function nlapiCreateSearch(type:string, filters:nlobjSearchFilter|nlobjSearchFilter[], columns:nlobjSearchColumn|nlobjSearchColumn[]):nlobjSearch;

/**
 * Load an existing record from the system.
 * @governance 10 units for transactions, 2 for custom records, 4 for all other records
 *
 * @param {string}    type The record type name.
 * @param {int}    id The internal ID for the record.
 * @param {Object}    initializeValues Contains an array of name/value pairs of defaults to be used during record initialization.
 * @return {nlobjRecord}  Returns an nlobjRecord object of an existing NetSuite record.
 *
 * @exception {SSS_INVALID_RECORD_TYPE}
 * @exception {SSS_TYPE_ARG_REQD}
 * @exception {SSS_INVALID_INTERNAL_ID}
 * @exception {SSS_ID_ARG_REQD}
 *
 * @since    2007.0
 * @param type
 * @param id
 * @param initializeValues
 * @return
 */
declare function nlapiLoadRecord(type:string, id:any, initializeValues?:any):nlobjRecord;

/**
 * Instantiate a new nlobjRecord object containing all the default field data for that record type.
 * @governance 10 units for transactions, 2 for custom records, 4 for all other records
 *
 * @param {string} type record type ID.
 * @param {Object} initializeValues Contains an array of name/value pairs of defaults to be used during record initialization.
 * @return {nlobjRecord}   Returns an nlobjRecord object of a new record from the system.
 *
 * @exception {SSS_INVALID_RECORD_TYPE}
 * @exception {SSS_TYPE_ARG_REQD}
 *
 * @since    2007.0
 * @param type
 * @param initializeValues
 * @return
 */
declare function nlapiCreateRecord(type:string, initializeValues?:any):nlobjRecord;

/**
 * Submit a record to the system for creation or update.
 * @governance 20 units for transactions, 4 for custom records, 8 for all other records
 *
 * @param {nlobjRecord} record nlobjRecord object containing the data record.
 * @param {boolean}    [doSourcing] If not set, this argument defaults to false.
 * @param {boolean}    [ignoreMandatoryFields] Disables mandatory field validation for this submit operation.
 * @return {string} internal ID for committed record.
 *
 * @exception {SSS_INVALID_RECORD_OBJ}
 * @exception {SSS_RECORD_OBJ_REQD}
 * @exception {SSS_INVALID_SOURCE_ARG}
 *
 * @since    2007.0
 * @param record
 * @param doSourcing?
 * @param ignoreMandatoryFields?
 * @return
 */
declare function nlapiSubmitRecord(record:any, doSourcing?:boolean, ignoreMandatoryFields?:boolean):any;

/**
 * Delete a record from the system.
 * @governance 20 units for transactions, 4 for custom records, 8 for all other records
 *
 * @param {string}    type The record type name.
 * @param {int}    id The internal ID for the record.
 * @return {void}
 *
 * @exception {SSS_INVALID_RECORD_TYPE}
 * @exception {SSS_TYPE_ARG_REQD}
 * @exception {SSS_INVALID_INTERNAL_ID}
 * @exception {SSS_ID_ARG_REQD}
 *
 * @since    2007.0
 * @param type
 * @param id
 * @return
 */
declare function nlapiDeleteRecord(type:string, id:any):void;

/**
 * Perform a record search using an existing search or filters and columns.
 * @governance 10 units
 * @restriction returns the first 1000 rows in the search
 *
 * @param {string}        type record type ID.
 * @param {int, string} [id] The internal ID or script ID for the saved search to use for search.
 * @param {nlobjSearchFilter, nlobjSearchFilter[]} [filters] [optional] A single nlobjSearchFilter object - or - an array of nlobjSearchFilter objects.
 * @param {nlobjSearchColumn, nlobjSearchColumn[]} [columns] [optional] A single nlobjSearchColumn object - or - an array of nlobjSearchColumn objects.
 * @return {nlobjSearchResult[]} Returns an array of nlobjSearchResult objects corresponding to the searched records.
 *
 * @exception {SSS_INVALID_RECORD_TYPE}
 * @exception {SSS_TYPE_ARG_REQD}
 * @exception {SSS_INVALID_SRCH_ID}
 * @exception {SSS_INVALID_SRCH_FILTER}
 * @exception {SSS_INVALID_SRCH_FILTER_JOIN}
 * @exception {SSS_INVALID_SRCH_OPERATOR}
 * @exception {SSS_INVALID_SRCH_COL_NAME}
 * @exception {SSS_INVALID_SRCH_COL_JOIN}
 *
 * @since    2007.0
 * @param type
 * @param id
 * @param filters
 * @param columns
 */
declare function nlapiSearchRecord(type:string, id:any, filters:any, columns:any):nlobjSearchResult[];

/**
 * Perform a global record search across the system.
 * @governance 10 units
 * @restriction returns the first 1000 rows in the search
 *
 * @param {string} keywords Global search keywords string or expression.
 * @return {nlobjSearchResult[]} Returns an Array of nlobjSearchResult objects containing the following four columns: name, type (as shown in the UI), info1, and info2.
 *
 * @since    2008.1
 * @param keywords
 */
declare function nlapiSearchGlobal(keywords:string):nlobjSearchResult[];

/**
 * Perform a duplicate record search using Duplicate Detection criteria.
 * @governance 10 units
 * @restriction returns the first 1000 rows in the search
 *
 * @param {string}        type The recordType you are checking duplicates for (for example, customer|lead|prospect|partner|vendor|contact).
 * @param {string[]}    [fields] array of field names used to detect duplicate (for example, companyname|email|name|phone|address1|city|state|zipcode).
 * @param {int}        [id] internal ID of existing record. Depending on the use case, id may or may not be a required argument.
 * @return {nlobjSearchResult[]} Returns an Array of nlobjSearchResult objects corresponding to the duplicate records.
 *
 * @since    2008.1
 * @param type
 * @param fields
 * @param id?
 */
declare function nlapiSearchDuplicate(type:string, fields:any, id?:any):nlobjSearchResult[];

/**
 * Create a new record using values from an existing record of a different type.
 * @governance 10 units for transactions, 2 for custom records, 4 for all other records
 *
 * @param {string}    type The record type name.
 * @param {int}    id The internal ID for the record.
 * @param {string}    transformType The recordType you are transforming the existing record into.
 * @param {Object}    [transformValues] An object containing transform default option/value pairs used to pre-configure transformed record
 * @return {nlobjRecord}
 *
 * @exception {SSS_INVALID_URL_CATEGORY}
 * @exception {SSS_CATEGORY_ARG_REQD}
 * @exception {SSS_INVALID_TASK_ID}
 * @exception {SSS_TASK_ID_REQD}
 * @exception {SSS_INVALID_INTERNAL_ID}
 * @exception {SSS_INVALID_EDITMODE_ARG}
 *
 * @since    2007.0
 * @param type
 * @param id
 * @param transformType
 * @param transformValues?
 * @return
 */
declare function nlapiTransformRecord(type:string, id:any, transformType:string, transformValues?:any):nlobjRecord;

/**
 * void a transaction based on type and id .
 * @governance 10 units for transactions
 *
 * @param {string}    type The transaction type name.
 * @param {string}    id The internal ID for the record.
 * @return {string}  if accounting preference is reversing journal, then it is new journal id,
 *                   otherwise, it is the input record id
 *
 * @since    2014.1
 * @param type
 * @param id
 * @return
 */
declare function nlapiVoidTransaction(type:string, id:string):string;

/**
 * Fetch the value of one or more fields on a record. This API uses search to look up the fields and is much
 * faster than loading the record in order to get the field.
 * @governance 10 units for transactions, 2 for custom records, 4 for all other records
 *
 * @param {string}    type The record type name.
 * @param {int}    id The internal ID for the record.
 * @param {string, string[]} fields - field or fields to look up.
 * @param {boolean} [text] If set then the display value is returned instead for select fields.
 * @return {string, Object} single value or an Object of field name/value pairs depending on the fields argument.
 *
 * @since    2008.1
 * @param type
 * @param id
 * @param fields
 * @param text?
 */
declare function nlapiLookupField(type:string, id:number, fields:string, text?:boolean):string;
declare function nlapiLookupField(type:string, id:number, fields:string[], text?:boolean):any;

/**
 * Submit the values of a field or set of fields for an existing record.
 * @governance 10 units for transactions, 2 for custom records, 4 for all other records
 * @restriction only supported for records and fields where DLE (Direct List Editing) is supported
 *
 * @param {string}        type The record type name.
 * @param {int}        id The internal ID for the record.
 * @param {string, string[]} fields field or fields being updated.
 * @param {string, string[]} values field value or field values used for updating.
 * @param {boolean}    [doSourcing] If not set, this argument defaults to false and field sourcing does not occur.
 * @return {void}
 *
 * @since    2008.1
 * @param type
 * @param id
 * @param fields
 * @param values
 * @param doSourcing?
 * @return
 */
declare function nlapiSubmitField(type:string, id:any, fields:any, values:any, doSourcing?:boolean):void;

/**
 * Attach a single record to another with optional properties.
 * @governance 10 units
 *
 * @param {string}    type1 The record type name being attached
 * @param {int}    id1 The internal ID for the record being attached
 * @param {string}    type2 The record type name being attached to
 * @param {int}    id2 The internal ID for the record being attached to
 * @param {Object}    [properties] Object containing name/value pairs used to configure attach operation
 * @return {void}
 *
 * @since    2008.2
 * @param type1
 * @param id1
 * @param type2
 * @param id2
 * @param properties?
 * @return
 */
declare function nlapiAttachRecord(type1:string, id1:any, type2:string, id2:any, properties?:any):void;

/**
 * Detach a single record from another with optional properties.
 * @governance 10 units
 *
 * @param {string}    type1 The record type name being attached
 * @param {int}    id1 The internal ID for the record being attached
 * @param {string}    type2 The record type name being attached to
 * @param {int}    id2 The internal ID for the record being attached to
 * @param {Object}    [properties] Object containing name/value pairs used to configure detach operation
 * @return {void}
 *
 * @since    2008.2
 * @param type1
 * @param id1
 * @param type2
 * @param id2
 * @param properties?
 * @return
 */
declare function nlapiDetachRecord(type1:string, id1:any, type2:string, id2:any, properties?:any):void;

/**
 * Resolve a URL to a resource or object in the system.
 *
 * @param {string} type type specifier for URL: suitelet|tasklink|record|mediaitem
 * @param {string} subtype subtype specifier for URL (corresponding to type): scriptid|taskid|recordtype|mediaid
 * @param {string} [id] internal ID specifier (sub-subtype corresponding to type): deploymentid|n/a|recordid|n/a
 * @param {string} [pagemode] string specifier used to configure page (suitelet: external|internal, tasklink|record: edit|view)
 * @return {string}
 *
 * @since    2007.0
 * @param type
 * @param subtype
 * @param id?
 * @param pagemode?
 * @return
 */
declare function nlapiResolveURL(type:string, subtype:string, id?:string, pagemode?:string):string;

/**
 * Redirect the user to a page. Only valid in the UI on Suitelets and User Events. In Client scripts this will initialize the redirect URL used upon submit.
 *
 * @param {string} type type specifier for URL: suitelet|tasklink|record|mediaitem
 * @param {string} subtype subtype specifier for URL (corresponding to type): scriptid|taskid|recordtype|mediaid
 * @param {string} [id] internal ID specifier (sub-subtype corresponding to type): deploymentid|n/a|recordid|n/a
 * @param {string} [pagemode] string specifier used to configure page (suitelet: external|internal, tasklink|record: edit|view)
 * @param {Object} [parameters] Object used to specify additional URL parameters as name/value pairs
 * @return {void}
 *
 * @since    2007.0
 * @param type
 * @param subtype
 * @param id?
 * @param pagemode?
 * @param parameters?
 * @return
 */
declare function nlapiSetRedirectURL(type:string, identifier:string, id?:string|number, editmode?:boolean, parameters?:any):void;

/**
 * Request a URL to an external or internal resource.
 * @restriction NetSuite maintains a white list of CAs that are allowed for https requests. Please see the online documentation for the complete list.
 * @governance 10 units
 *
 * @param {string} url        A fully qualified URL to an HTTP(s) resource
 * @param {string, Object}    [postdata] - string, document, or Object containing POST payload
 * @param {Object}            [headers] - Object containing request headers.
 * @param {function}        [callback] - available on the Client to support asynchronous requests. function is passed an nlobjServerResponse with the results.
 * @return {nlobjServerResponse}
 *
 * @exception {SSS_UNKNOWN_HOST}
 * @exception {SSS_INVALID_HOST_CERT}
 * @exception {SSS_REQUEST_TIME_EXCEEDED}
 *
 * @since    2007.0
 * @param url
 * @param postdata
 * @param headers?
 * @param callback?
 * @param method
 * @return
 */
declare function nlapiRequestURL(url:string, postdata?:any, headers?:any, callback?:any, method?:any):any;

/**
 * Return context information about the current user/script.
 *
 * @return {nlobjContext}
 *
 * @since    2007.0
 * @return
 */
declare function nlapiGetContext():any;

/**
 * Return the internal ID for the currently logged in user. Returns -4 when called from online forms or "Available without Login" Suitelets.
 *
 * @return {int}
 *
 * @since    2005.0
 * @return
 */
declare function nlapiGetUser():any;

/**
 * Return the internal ID for the current user's role. Returns 31 (Online Form User) when called from online forms or "Available without Login" Suitelets.
 *
 * @return {int}
 *
 * @since    2005.0
 * @return
 */
declare function nlapiGetRole():any;

/**
 * Return the internal ID for the current user's department.
 *
 * @return {int}
 *
 * @since    2005.0
 * @return
 */
declare function nlapiGetDepartment():any;

/**
 * Return the internal ID for the current user's location.
 *
 * @return {int}
 *
 * @since    2005.0
 * @return
 */
declare function nlapiGetLocation():any;

/**
 * Return the internal ID for the current user's subsidiary.
 *
 * @return {int}
 *
 * @since    2008.1
 * @return
 */
declare function nlapiGetSubsidiary():any;

/**
 * Return the recordtype corresponding to the current page or userevent script.
 *
 * @return {string}
 *
 * @since    2007.0
 * @return
 */
declare function nlapiGetRecordType():string;

/**
 * Return the internal ID corresponding to the current page or userevent script.
 *
 *  @return {int}
 *
 * @since    2007.0
 * @return
 */
declare function nlapiGetRecordId():any;

/**
 * Send out an email and associate it with records in the system.
 * Supported base types are entity for entities, transaction for transactions, activity for activities and cases, record|recordtype for custom records
 * @governance 10 units
 * @restriction all outbound emails subject to email Anti-SPAM policies
 *
 * @param {int}        from internal ID for employee user on behalf of whom this email is sent
 * @param {string, int} to email address or internal ID of user that this email is being sent to
 * @param {string}        subject email subject
 * @param {string}        body email body
 * @param {string, string[]} cc copy email address(es)
 * @param {string, string[]} bcc blind copy email address(es)
 * @param {Object}        records Object of base types -> internal IDs used to associate email to records. i.e. {entity: 100, record: 23, recordtype: customrecord_surveys}
 * @param {nlobjFile[]} files array of nlobjFile objects (files) to include as attachments
 * @param {boolean}     notifySenderOnBounce controls whether or not the sender will receive email notification of bounced emails (defaults to false)
 * @param {boolean}     internalOnly controls or not the resultingMmessage record will be visible to non-employees on the Communication tab of attached records (defaults to false)
 * @param {string}        replyTo email reply-to address
 * @return {void}
 *
 * @since    2007.0
 * @param from
 * @param to
 * @param subject
 * @param body
 * @param cc
 * @param bcc
 * @param records
 * @param files
 * @param notifySenderOnBounce
 * @param internalOnly
 * @param replyTo
 * @return
 */
declare function nlapiSendEmail(author:number, recipient:string|number, subject:string, body:string|nlobjFile[], cc?:string|string[], bcc?:string|string[], records?:any, attachments?:nlobjFile|nlobjFile[], notifySenderOnBounce?:boolean, internalOnly?:boolean, replyTo?:string):void;

/**
 * Sends a single on-demand campaign email to a specified recipient and returns a campaign response ID to track the email.
 * @governance 10 units
 * @restriction works in conjunction with the Lead Nurturing (campaigndrip) sublist only
 *
 * @param {int} campaigneventid internal ID of the campaign event
 * @param {int} recipientid internal ID of the recipient - the recipient must have an email
 * @return {int}
 *
 * @since    2010.1
 * @param campaigneventid
 * @param recipientid
 * @return
 */
declare function nlapiSendCampaignEmail(campaigneventid:any, recipientid:any):any;

/**
 * Send out a fax and associate it with records in the system. This requires fax preferences to be configured.
 * Supported base types are entity for entities, transaction for transactions, activity for activities and cases, record|recordtype for custom records
 * @governance 10 units
 *
 * @param {int}        from internal ID for employee user on behalf of whom this fax is sent
 * @param {string, int} to fax address or internal ID of user that this fax is being sent to
 * @param {string}        subject fax subject
 * @param {string}        body fax body
 * @param {Object}        records Object of base types -> internal IDs used to associate fax to records. i.e. {entity: 100, record: 23, recordtype: customrecord_surveys}
 * @param {nlobjFile[]} files array of nlobjFile objects (files) to include as attachments
 * @return {void}
 *
 * @since    2008.2
 * @param from
 * @param to
 * @param subject
 * @param body
 * @param records
 * @param files
 * @return
 */
declare function nlapiSendFax(from:any, to:any, subject:string, body:string, records:any, files:any):any;

/**
 * Return field definition for a field.
 *
 * @param {string} fldnam the name of the field
 * @return {nlobjField}
 *
 * @since    2009.1
 * @param fldnam
 * @return
 */
declare function nlapiGetField(fldnam:string):any;

/**
 * Return field definition for a matrix field.
 *
 * @param {string}    type    matrix sublist name
 * @param {string}    fldnam matrix field name
 * @param {int}    column matrix field column index (1-based)
 * @return {nlobjField}
 *
 * @since    2009.2
 * @param type
 * @param fldnam
 * @param column
 * @return
 */
declare function nlapiGetMatrixField(type:string, fldnam:string, column:any):any;

/**
 * Return field definition for a sublist field.
 *
 * @param {string}    type    sublist name
 * @param {string}    fldnam sublist field name
 * @param {int}    [linenum] line number for sublist field (1-based) and only valid for sublists of type staticlist and list
 * @return {nlobjField}
 *
 * @since    2009.1
 * @param type
 * @param fldnam
 * @param linenum?
 * @return
 */
declare function nlapiGetLineItemField(type:string, fldnam:string, linenum?:any):any;

/**
 * Return an nlobjField containing sublist field metadata.
 *
 * @param {string}    type    matrix sublist name
 * @param {string}    fldnam matrix field name
 * @param {int}    linenum line number (1-based)
 * @param {int}    column matrix column index (1-based)
 * @return {nlobjField}
 *
 * @since    2009.2
 * @param type
 * @param fldnam
 * @param linenum
 * @param column
 * @return
 */
declare function nlapiGetLineItemMatrixField(type:string, fldnam:string, linenum:any, column:any):any;

/**
 * Return the value of a field on the current record on a page.
 * @restriction supported in client and user event scripts only.
 * @param {string} fldnam the field name
 * @return {string}
 *
 * @since    2005.0
 * @param fldnam
 * @return
 */
declare function nlapiGetFieldValue(fldnam:string):string;

/**
 * Set the value of a field on the current record on a page.
 * @restriction supported in client and user event scripts only.
 * @restriction synchronous arg is only supported in client SuiteScript
 *
 * @param {string}    fldnam the field name
 * @param {string}    value value used to set field
 * @param {boolean} [firefieldchanged]    if false then the field change event is suppressed (defaults to true)
 * @param {boolean} [synchronous] if true then sourcing and field change execution happens synchronously (defaults to false).
 * @return {void}
 *
 * @since    2005.0
 * @param fldnam
 * @param value
 * @param firefieldchanged?
 * @param synchronous?
 * @return
 */
declare function nlapiSetFieldValue(fldnam:string, value:string, firefieldchanged?:boolean, synchronous?:boolean):any;

/**
 * Return the display value of a select field's current selection on the current record on a page.
 * @restriction supported in client and user event scripts only.
 * @param {string} fldnam the field name
 * @return {string}
 *
 * @since    2005.0
 * @param fldnam
 * @return
 */
declare function nlapiGetFieldText(fldnam:string):string;

/**
 * Set the value of a field on the current record on a page using it's label.
 * @restriction synchronous arg is only supported in client SuiteScript
 *
 * @param {string}    fldnam the field name
 * @param {string}    txt display name used to lookup field value
 * @param {boolean} [firefieldchanged]    if false then the field change event is suppressed (defaults to true)
 * @param {boolean} [synchronous] if true then sourcing and field change execution happens synchronously (defaults to false).
 * @return {void}
 *
 * @since    2005.0
 * @param fldnam
 * @param txt
 * @param firefieldchanged?
 * @param synchronous?
 * @return
 */
declare function nlapiSetFieldText(fldnam:string, txt:string, firefieldchanged?:boolean, synchronous?:boolean):any;

/**
 * Return the values of a multiselect field on the current record on a page.
 * @restriction supported in client and user event scripts only.
 * @param {string} fldnam the field name
 * @return {string[]}
 *
 * @since    2005.0
 * @param fldnam
 */
declare function nlapiGetFieldValues(fldnam:string):void;

/**
 * Set the values of a multiselect field on the current record on a page.
 * @restriction supported in client and user event scripts only.
 * @restriction synchronous arg is only supported in client SuiteScript
 *
 * @param {string}        fldnam field name
 * @param {string[]}    values array of strings containing values for field
 * @param {boolean}    [firefieldchanged] if false then the field change event is suppressed (defaults to true)
 * @param {boolean}    [synchronous] if true then sourcing and field change execution happens synchronously (defaults to false).
 * @return {void}
 *
 * @since    2005.0
 * @param fldnam
 * @param values
 * @param firefieldchanged?
 * @param synchronous?
 * @return
 */
declare function nlapiSetFieldValues(fldnam:string, values:any, firefieldchanged?:boolean, synchronous?:boolean):any;

/**
 * Return the values (via display text) of a multiselect field on the current record.
 * @restriction supported in client and user event scripts only.
 * @param {string} fldnam field name
 * @return {string[]}
 *
 * @since    2009.1
 * @param fldnam
 */
declare function nlapiGetFieldTexts(fldnam:string):void;

/**
 * Set the values (via display text) of a multiselect field on the current record on a page.
 * @restriction supported in client and user event scripts only.
 * @restriction synchronous arg is only supported in client SuiteScript
 *
 * @param {string}        fldnam field name
 * @param {string[]}    texts array of strings containing display values for field
 * @param {boolean}        [firefieldchanged]    if false then the field change event is suppressed (defaults to true)
 * @param {boolean}    [synchronous] if true then sourcing and field change execution happens synchronously (defaults to false).
 * @return {void}
 *
 * @since    2009.1
 * @param fldnam
 * @param texts
 * @param firefieldchanged?
 * @param synchronous?
 * @return
 */
declare function nlapiSetFieldTexts(fldnam:string, texts:any, firefieldchanged?:boolean, synchronous?:boolean):any;

/**
 * Get the value of a matrix header field
 *
 * @param {string}    type sublist name
 * @param {string}    fldnam sublist field name
 * @param {int}    column matrix column index (1-based)
 * @return {string}
 *
 * @since    2009.2
 * @param type
 * @param fldnam
 * @param column
 * @return
 */
declare function nlapiGetMatrixValue(type:string, fldnam:string, column:any):string;

/**
 * Set the value of a matrix header field
 * @restriction synchronous arg is only supported in client SuiteScript
 *
 * @param {string}    type sublist name
 * @param {string}    fldnam sublist field name
 * @param {int}    column matrix column index (1-based)
 * @param {string}    value field value for matrix field
 * @param {boolean} [firefieldchanged]    if false then the field change event is suppressed (defaults to true)
 * @param {boolean} [synchronous] if true then sourcing and field change execution happens synchronously (defaults to false).
 * @return {void}
 *
 * @since    2009.2
 * @param type
 * @param fldnam
 * @param column
 * @param value
 * @param firefieldchanged?
 * @param synchronous?
 * @return
 */
declare function nlapiSetMatrixValue(type:string, fldnam:string, column:any, value:string, firefieldchanged?:boolean, synchronous?:boolean):any;

/**
 * Get the current value of a sublist field on the current record on a page.
 * @restriction supported in client and user event scripts only.
 * @param {string}    type sublist name
 * @param {string}    fldnam sublist field name
 * @param {int}    column matrix column index (1-based)
 * @return {string} value
 *
 * @since    2009.2
 * @param type
 * @param fldnam
 * @param column
 * @return
 */
declare function nlapiGetCurrentLineItemMatrixValue(type:string, fldnam:string, column:any):string;

/**
 * Set the current value of a sublist field on the current record on a page.
 * @restriction supported in client and user event scripts only.
 * @restriction synchronous arg is only supported in Client SuiteScript
 *
 * @param {string}    type sublist name
 * @param {string}    fldnam sublist field name
 * @param {int}    column matrix column index (1-based)
 * @param {string}    value matrix field value
 * @param {boolean} [firefieldchanged] if false then the field change event is suppressed (defaults to true)
 * @param {boolean} [synchronous] if true then sourcing and field change execution happens synchronously (defaults to false).
 * @return {void}
 *
 * @since    2009.2
 * @param type
 * @param fldnam
 * @param column
 * @param value
 * @param firefieldchanged?
 * @param synchronous?
 * @return
 */
declare function nlapiSetCurrentLineItemMatrixValue(type:string, fldnam:string, column:any, value:string, firefieldchanged?:boolean, synchronous?:boolean):any;

/**
 * Return the value of a sublist matrix field on the current record on a page.
 * @restriction supported in client and user event scripts only.
 * @param {string}    type sublist name
 * @param {string}    fldnam sublist field name
 * @param {int}    linenum line number (1-based)
 * @param {int}    column column index (1-based)
 * @param {string} value
 *
 * @since    2009.2
 * @param type
 * @param fldnam
 * @param linenum
 * @param column
 */
declare function nlapiGetLineItemMatrixValue(type:string, fldnam:string, linenum:any, column:any):void;

/**
 * Return the value of a sublist field on the current record on a page.
 * @restriction supported in client and user event scripts only.
 * @param {string}    type sublist name
 * @param {string}    fldnam sublist field name
 * @param {int}    linenum line number (1-based)
 * @return {string}
 *
 * @since 2005.0
 * @param type
 * @param fldnam
 * @param linenum
 * @return
 */
declare function nlapiGetLineItemValue(type:string, fldnam:string, linenum:any):string;

/**
 * Return the value of a sublist field on the current record on a page.
 * @restriction supported in client and user event scripts only.
 * @param {string}    type sublist name
 * @param {string}    fldnam sublist field name
 * @param {int}    linenum line number (1-based)
 * @param {string}    timezone value
 * @return {string}
 *
 * @since 2013.2
 * @param type
 * @param fldnam
 * @param linenum
 * @param timezone
 * @return
 */
declare function nlapiGetLineItemDateTimeValue(type:string, fldnam:string, linenum:any, timezone:string):string;

/**
 * Set the value of a sublist field on the current record on a page.
 * @restriction supported in client and user event scripts only.
 * @param {string}    type sublist name
 * @param {string}    fldnam sublist field name
 * @param {int}    linenum line number (1-based)
 * @param {string} value
 *
 * @since 2005.0
 * @param type
 * @param fldnam
 * @param linenum
 * @param value
 */
declare function nlapiSetLineItemValue(type:string, fldnam:string, linenum:any, value:string|number):void;

/**
 * Set the value of a sublist field on the current record on a page.
 * @restriction supported in client and user event scripts only.
 * @param {string}    type sublist name
 * @param {string}    fldnam sublist field name
 * @param {int}    linenum line number (1-based)
 * @param {string} datetime value
 * @param {string} timezone value
 *
 * @since 2013.2
 * @param type
 * @param fldnam
 * @param linenum
 * @param value
 * @param timezone
 */
declare function nlapiSetLineItemDateTimeValue(type:string, fldnam:string, linenum:any, value:any, timezone:string):void;

/**
 * Return the label of a select field's current selection for a particular line.
 *
 * @param {string}    type sublist name
 * @param {string}    fldnam sublist field name
 * @param {int}    linenum line number (1-based)
 * @return {string}
 *
 * @since 2005.0
 * @param type
 * @param fldnam
 * @param linenum
 * @return
 */
declare function nlapiGetLineItemText(type:string, fldnam:string, linenum:any):string;

/**
 * Return the 1st line number that a sublist field value appears in
 *
 * @param {string} type sublist name
 * @param {string} fldnam sublist field name
 * @param {string} val the value being queried for in a sublist field
 * @return {int}
 *
 * @since 2009.2
 * @param type
 * @param fldnam
 * @param val
 * @return
 */
declare function nlapiFindLineItemValue(type:string, fldnam:string, val:string):any;

/**
 * Return the 1st line number that a matrix field value appears in
 *
 * @param {string}    type sublist name
 * @param {string}    fldnam matrix field name
 * @param {int}    column matrix column index (1-based)
 * @param {string}    val the value being queried for in a matrix field
 * @return {int}
 *
 * @since 2009.2
 * @param type
 * @param fldnam
 * @param column
 * @param val
 * @return
 */
declare function nlapiFindLineItemMatrixValue(type:string, fldnam:string, column:any, val:string):any;

/**
 * Return the number of columns for a matrix field
 *
 * @param {string} type sublist name
 * @param {string} fldnam matrix field name
 * @return {int}
 *
 * @since 2009.2
 * @param type
 * @param fldnam
 * @return
 */
declare function nlapiGetMatrixCount(type:string, fldnam:string):any;

/**
 * Return the number of sublists in a sublist on the current record on a page.
 * @restriction supported in client and user event scripts only.
 * @param {string} type sublist name
 * @return {int}
 *
 * @since 2005.0
 * @param type
 * @return
 */
declare function nlapiGetLineItemCount(type:string):string|number;

/**
 * Insert and select a new line into the sublist on a page or userevent.
 *
 * @param {string} type sublist name
 * @param {int} [line] line number at which to insert a new line.
 *
 * @since 2005.0
 * @param type
 * @param line?
 */
declare function nlapiInsertLineItem(type:string, line?:any):void;

/**
 * Remove the currently selected line from the sublist on a page or userevent.
 *
 * @param {string} type sublist name
 * @param {int} [line]    line number to remove.
 * @return {void}
 *
 * @since 2005.0
 * @param type
 * @param line?
 * @return
 */
declare function nlapiRemoveLineItem(type:string, line?:any):any;

/**
 * Set the value of a field on the currently selected line.
 * @restriction synchronous arg is only supported in client SuiteScript
 *
 * @param {string} type sublist name
 * @param {string} fldnam sublist field name
 * @param {string} value field value
 * @param {boolean} [firefieldchanged]    if false then the field change event is suppressed (defaults to true)
 * @param {boolean} [synchronous] if true then sourcing and field change execution happens synchronously (defaults to false).
 * @return {void}
 *
 * @since 2005.0
 * @param type
 * @param fldnam
 * @param value
 * @param firefieldchanged?
 * @param synchronous?
 * @return
 */
declare function nlapiSetCurrentLineItemValue(type:string, fldnam:string, value:string|number, firefieldchanged?:boolean, synchronous?:boolean):void;

/**
 * Set the value of a field on the currently selected line.
 * @restriction synchronous arg is only supported in client SuiteScript
 *
 * @param {string} type sublist name
 * @param {string} fldnam sublist field name
 * @param {string} value field value
 * @param {string} timezone value
 * @return {void}
 *
 * @since 2013.2
 * @param type
 * @param fldnam
 * @param value
 * @param timezone
 * @return
 */
declare function nlapiSetCurrentLineItemDateTimeValue(type:string, fldnam:string, value:string, timezone:string):any;

/**
 * Set the value of a field on the currently selected line using it's label.
 * @restriction synchronous arg is only supported in client SuiteScript
 *
 * @param {string} type sublist name
 * @param {string} fldnam sublist field name
 * @param {string} txt string containing display value or search text.
 * @param {boolean} [firefieldchanged]    if false then the field change event is suppressed (defaults to true)
 * @param {boolean} [synchronous] if true then sourcing and field change execution happens synchronously (defaults to false).
 * @return {void}
 *
 * @since 2005.0
 * @param type
 * @param fldnam
 * @param txt
 * @param firefieldchanged?
 * @param synchronous?
 * @return
 */
declare function nlapiSetCurrentLineItemText(type:string, fldnam:string, txt:string, firefieldchanged?:boolean, synchronous?:boolean):any;

/**
 * Return the value of a field on the currently selected line.
 *
 * @param {string} type sublist name
 * @param {string} fldnam sublist field name
 * @return {string}
 *
 * @since 2005.0
 * @param type
 * @param fldnam
 * @return
 */
declare function nlapiGetCurrentLineItemValue(type:string, fldnam:string):string;

/**
 * Return the value of a field on the currently selected line.
 *
 * @param {string} type sublist name
 * @param {string} fldnam sublist field name
 * @param {string} timezone value
 * @return {string}
 *
 * @since 2013.2
 * @param type
 * @param fldnam
 * @param timezone
 * @return
 */
declare function nlapiGetCurrentLineItemDateTimeValue(type:string, fldnam:string, timezone:string):string;

/**
 * Return the label of a select field's current selection on the currently selected line.
 *
 * @param {string} type sublist name
 * @param {string} fldnam sublist field name
 * @return {string}
 *
 * @since 2005.0
 * @param type
 * @param fldnam
 * @return
 */
declare function nlapiGetCurrentLineItemText(type:string, fldnam:string):string;

/**
 * Return the line number for the currently selected line.
 *
 * @param {string} type sublist name
 * @return {int}
 *
 * @since 2005.0
 * @param type
 * @return
 */
declare function nlapiGetCurrentLineItemIndex(type:string):any;

/**
 * Disable a sublist field.
 * @restriction Only supported on sublists of type inlineeditor, editor and list (current field only)
 *
 * @param {string}    type sublist name
 * @param {string}    fldnam sublist field name
 * @param {boolean} disable if true then field is disabled
 * @param {int} linenum line number for sublist field (1-based) and only valid for sublists of type list
 * @return {void}
 *
 * @since 2009.1
 * @param type
 * @param fldnam
 * @param disable
 * @param linenum
 * @return
 */
declare function nlapiSetLineItemDisabled(type:string, fldnam:string, disable:boolean, linenum:any):any;

/**
 * Return field mandatoriness.
 *
 * @param {string} fldnam field name
 * @return {boolean}
 *
 * @since 2009.1
 * @param fldnam
 * @return
 */
declare function nlapiGetFieldMandatory(fldnam:string):boolean;

/**
 * Return sublist field mandatoriness.
 * @restriction Only supported on sublists of type inlineeditor or editor (current field only)
 *
 * @param {string}    type sublist name
 * @param {string}    fldnam sublist field name
 * @return {boolean}
 *
 * @since 2009.1
 * @param type
 * @param fldnam
 * @return
 */
declare function nlapiGetLineItemMandatory(type:string, fldnam:string):boolean;

/**
 * Make a field mandatory.
 *
 * @param {string}    fldnam field name
 * @param {boolean} mandatory if true then field is made mandatory
 * @return {void}
 *
 * @since 2009.1
 * @param fldnam
 * @param mandatory
 * @return
 */
declare function nlapiSetFieldMandatory(fldnam:string, mandatory:boolean):any;

/**
 * Make a sublist field mandatory.
 * @restriction Only supported on sublists of type inlineeditor or editor (current field only)
 *
 * @param {string}    type sublist name
 * @param {string}    fldnam sublist field name
 * @param {boolean} mandatory if true then field is made mandatory
 * @return {void}
 *
 * @since 2009.2
 * @param type
 * @param fldnam
 * @param mandatory
 * @return
 */
declare function nlapiSetLineItemMandatory(type:string, fldnam:string, mandatory:boolean):any;

/**
 * Select an existing line in a sublist.
 *
 * @param {string} type sublist name
 * @param {int} linenum line number to select
 * @return {void}
 *
 * @since 2005.0
 * @param type
 * @param linenum
 * @return
 */
declare function nlapiSelectLineItem(type:string, linenum:any):any;

/**
 * Save changes made on the currently selected line to the sublist.
 *
 * @param {string} type sublist name
 * @return {void}
 *
 * @since 2005.0
 * @param type
 * @return
 */
declare function nlapiCommitLineItem(type:string):any;

/**
 * Cancel any changes made on the currently selected line.
 * @restriction Only supported for sublists of type inlineeditor and editor
 *
 * @param {string} type sublist name
 * @return {void}
 *
 * @since 2005.0
 * @param type
 * @return
 */
declare function nlapiCancelLineItem(type:string):any;

/**
 * Select a new line in a sublist.
 * @restriction Only supported for sublists of type inlineeditor and editor
 *
 * @param {string} type sublist name
 * @return {void}
 *
 * @since 2005.0
 * @param type
 * @return
 */
declare function nlapiSelectNewLineItem(type:string):any;

/**
 * Refresh the sublist table.
 * @restriction Only supported for sublists of type inlineeditor, editor, and staticlist
 * @restriction Client SuiteScript only.
 *
 * @param {string} type sublist name
 *
 * @since 2005.0
 * @param type
 */
declare function nlapiRefreshLineItems(type:string):void;

/**
 * Adds a select option to a scripted select or multiselect field.
 * @restriction Client SuiteScript only
 *
 * @param {string} fldnam field name
 * @param {string} value internal ID for select option
 * @param {string} text display text for select option
 * @param {boolean} [selected] if true then option will be selected by default
 * @return {void}
 *
 * @since 2008.2
 * @param fldnam
 * @param value
 * @param text
 * @param selected?
 * @return
 */
declare function nlapiInsertSelectOption(fldnam:string, value:string, text:string, selected?:boolean):any;

/**
 * Removes a select option (or all if value is null) from a scripted select or multiselect field.
 * @restriction Client SuiteScript only
 *
 * @param {string} fldnam field name
 * @param {string} value internal ID of select option to remove
 * @return {void}
 *
 * @since 2008.2
 * @param fldnam
 * @param value
 * @return
 */
declare function nlapiRemoveSelectOption(fldnam:string, value:string):any;

/**
 * Adds a select option to a scripted select or multiselect sublist field.
 * @restriction Client SuiteScript only
 *
 * @param {string} type    sublist name
 * @param {string} fldnam sublist field name
 * @param {string} value internal ID for select option
 * @param {string} text display text for select option
 * @param {boolean} [selected] if true then option will be selected by default
 * @return {void}
 *
 * @since 2008.2
 * @param type
 * @param fldnam
 * @param value
 * @param text
 * @param selected?
 * @return
 */
declare function nlapiInsertLineItemOption(type:string, fldnam:string, value:string, text:string, selected?:boolean):any;

/**
 * Removes a select option (or all if value is null) from a scripted select or multiselect sublist field.
 * @restriction Client SuiteScript only
 *
 * @param {string} type    sublist name
 * @param {string} fldnam sublist field name
 * @param {string} value internal ID for select option to remove
 * @return {void}
 *
 * @since 2008.2
 * @param type
 * @param fldnam
 * @param value
 * @return
 */
declare function nlapiRemoveLineItemOption(type:string, fldnam:string, value:string):any;

/**
 * Returns true if any changes have been made to a sublist.
 * @restriction Client SuiteScript only
 *
 * @param {string} type sublist name
 * @return {boolean}
 *
 * @since 2005.0
 * @param type
 * @return
 */
declare function nlapiIsLineItemChanged(type:string):boolean;

/**
 * Return an record object containing the data being submitted to the system for the currenr record.
 * @restriction User Event scripts only
 *
 * @return {nlobjRecord}
 *
 * @since 2008.1
 * @return
 */
declare function nlapiGetNewRecord():any;

/**
 * Return an record object containing the current record's data prior to the write operation.
 * @restriction beforeSubmit|afterSubmit User Event scripts only
 *
 * @return {nlobjRecord}
 *
 * @since 2008.1
 * @return
 */
declare function nlapiGetOldRecord():any;

/**
 * Create an nlobjError object that can be used to abort script execution and configure error notification
 *
 * @param {string}    code error code
 * @param {string}    details error description
 * @param {boolean} [suppressEmail] if true then suppress the error notification emails from being sent out (false by default).
 * @return {nlobjError}
 *
 * @since 2008.2
 * @param code
 * @param details
 * @param suppressEmail?
 * @return
 */
declare function nlapiCreateError(code:string, details:string, suppressEmail?:boolean):any;

/**
 * Return a new entry form page.
 * @restriction Suitelets only
 *
 * @param {string}    title page title
 * @param {boolean} [hideHeader] true to hide the page header (false by default)
 * @return {nlobjForm}
 *
 * @since 2008.2
 * @param title
 * @param hideHeader?
 * @return
 */
declare function nlapiCreateForm(title:string, hideHeader?:boolean):nlobjForm;

/**
 * Return a new list page.
 * @restriction Suitelets only
 *
 * @param {string}    title page title
 * @param {boolean} [hideHeader] true to hide the page header (false by default)
 * @return {nlobjList}
 *
 * @since 2008.2
 * @param title
 * @param hideHeader?
 * @return
 */
declare function nlapiCreateList(title:string, hideHeader?:boolean):any;

/**
 * Return a new assistant page.
 * @restriction Suitelets only
 *
 * @param {string}    title page title
 * @param {boolean} [hideHeader] true to hide the page header (false by default)
 * @return {nlobjAssistant}
 *
 * @since 2009.2
 * @param title
 * @param hideHeader?
 * @return
 */
declare function nlapiCreateAssistant(title:string, hideHeader?:boolean):any;

/**
 * Load a file from the file cabinet (via its internal ID or path).
 * @governance 10 units
 * @restriction Server SuiteScript only
 *
 * @param {string, int} id internal ID or relative path to file in the file cabinet (i.e. /SuiteScript/foo.js)
 * @return {nlobjFile}
 *
 * @since 2008.2
 * @param id
 * @return
 */
declare function nlapiLoadFile(id:any):any;

/**
 * Add/update a file in the file cabinet.
 * @governance 20 units
 * @restriction Server SuiteScript only
 *
 * @param {nlobjFile} file a file object to submit
 * @return {int} return internal ID of file
 *
 * @since 2009.1
 * @param file
 * @return
 */
declare function nlapiSubmitFile(file:nlobjFile):any;

/**
 * Delete a file from the file cabinet.
 * @governance 20 units
 * @restriction Server SuiteScript only
 *
 * @param {int} id internal ID of file to be deleted
 * @return {id}
 *
 * @since 2009.1
 * @param id
 * @return
 */
declare function nlapiDeleteFile(id:any):any;

/**
 * Instantiate a file object (specifying the name, type, and contents which are base-64 encoded for binary types.)
 * @restriction Server SuiteScript only
 *
 * @param {string} name file name
 * @param {string} type file type i.e. plainText, htmlDoc, pdf, word (see documentation for the list of supported file types)
 * @param {string} contents string containing file contents (must be base-64 encoded for binary types)
 * @return {nlobjFile}
 *
 * @since 2009.1
 * @param name
 * @param type
 * @param contents
 * @return
 */
declare function nlapiCreateFile(name:string, type:string, contents:string):nlobjFile;

/**
 * Perform a mail merge operation using any template and up to 2 records and returns an nlobjFile with the results.
 * @restriction only supported for record types that are available in mail merge: transactions, entities, custom records, and cases
 * @restriction Server SuiteScript only
 * @governance 10 units
 *
 * @param {int}    id internal ID of template
 * @param {string}    baseType primary record type
 * @param {int}    baseId internal ID of primary record
 * @param {string}    [altType] secondary record type
 * @param {int}    [altId] internal ID of secondary record
 * @param {Object}    [fields] Object of merge field values to use in the mail merge (by default all field values are obtained from records) which overrides those from the record.
 * @return {nlobjFile}
 *
 * @since 2008.2
 * @param id
 * @param baseType
 * @param baseId
 * @param altType?
 * @param altId?
 * @param fields?
 * @return
 */
declare function nlapiMergeRecord(id:any, baseType:string, baseId:any, altType?:string, altId?:any, fields?:any):any;

/**
 * Print a record (transaction) gievn its type, id, and output format.
 * @restriction Server SuiteScript only
 * @governance 10 units
 *
 * @param {string}    type print output type: transaction|statement|packingslip|pickingticket
 * @param {int}    id internal ID of record to print
 * @param {string}    [format] output format: html|pdf|default
 * @param {Object}    [properties] Object of properties used to configure print
 * @return {nlobjFile}
 *
 * @since 2008.2
 * @param type
 * @param id
 * @param format?
 * @param properties?
 * @return
 */
declare function nlapiPrintRecord(type:string, id:any, format?:string, properties?:any):any;

/**
 * Generate a PDF from XML using the BFO report writer (see http://big.faceless.org/products/report/).
 * @restriction Server SuiteScript only
 * @governance 10 units
 *
 * @param {string} input string containing BFO compliant XHTML
 * @return {nlobjFile}
 *
 * @since 2009.1
 * @param input
 * @return
 */
declare function nlapiXMLToPDF(input:string):any;

/**
 * Create a template renderer used to generate various outputs based on a template.
 * @restriction Server SuiteScript only
 * @governance 10 units
 *
 * @param {string} type    media type: pdf|html
 * @param {string} [engineType] [optional]: default is freemarker/html
 * @return {nlobjTemplateRenderer}
 * @return
 */
declare function nlapiCreateTemplateRenderer():any;

/**
 * Create an email merger used to assemble subject and body text of an email from a given
 * FreeMarker template and a set of associated records.
 * @restriction Server SuiteScript only
 *
 * @param {int} templateId    internal ID of the template
 * @return {nlobjEmailMerger}
 *
 * @since 2015.1
 * @param id
 * @return
 */
declare function nlapiCreateEmailMerger(id:any):any;

/**
 * Create an entry in the script execution log (note that execution log entries are automatically purged after 30 days).
 *
 * @param {string} type    log type: debug|audit|error|emergency
 * @param {string} title log title (up to 90 characters supported)
 * @param {string} [details] log details (up to 3000 characters supported)
 * @return {void}
 *
 * @since 2008.1
 * @param type
 * @param title
 * @param details?
 * @return
 */
declare function nlapiLogExecution(type:string, title:string, details?:string):any;

/**
 * Queue a scheduled script for immediate execution and return the status QUEUED if successfull.
 * @restriction Server SuiteScript only
 * @governance 20 units
 *
 * @param {string, int}    script script ID or internal ID of scheduled script
 * @param {string, int} [deployment] script ID or internal ID of scheduled script deployment. If empty, the first "free" deployment (i.e. status = Not Scheduled or Completed) will be used
 * @param {Object}        parameters Object of parameter name->values used in this scheduled script instance
 * @return {string}    QUEUED or null if no available deployments were found or the current status of the deployment specified if it was not available.
 *
 * @since 2008.1
 * @param script
 * @param deployment
 * @param parameters
 * @return
 */
declare function nlapiScheduleScript(script:string, deployment:string, parameters?:any):string;

/**
 * Return a URL with a generated OAuth token.
 * @restriction Suitelets and Portlets only
 * @governance 20 units
 *
 * @param {string} ssoAppKey
 * @return {string}
 *
 * @since 2009.2
 * @param ssoAppKey
 * @return
 */
declare function nlapiOutboundSSO(ssoAppKey:string):string;

/**
 * Loads a configuration record
 * @restriction Server SuiteScript only
 * @governance 10 units
 *
 * @param {string} type
 * @return {nlobjConfiguration}
 *
 * @since 2009.2
 * @param type
 * @return
 */
declare function nlapiLoadConfiguration(type:string):any;

/**
 * Commits all changes to a configuration record.
 * @restriction Server SuiteScript only
 * @governance 10 units
 *
 * @param {nlobjConfiguration} setup record
 * @return (void)
 *
 * @since 2009.2
 * @param setup
 */
declare function nlapiSubmitConfiguration(setup:any):void;

/**
 * Convert a String into a Date object.
 *
 * @param {string} str date string in the user's date format, timeofday format, or datetime format
 * @param {string} format format type to use: date|datetime|timeofday with date being the default
 * @return {date}
 *
 * @since 2005.0
 * @param str
 * @param format
 * @return
 */
declare function nlapiStringToDate(str:string, format?:string):Date;

/**
 * Convert a Date object into a String
 *
 * @param {date}    d date object being converted to a string
 * @param {string} [formattype] format type to use: date|datetime|timeofday with date being the default
 * @return {string}
 *
 * @since 2005.0
 * @param d
 * @param formattype?
 * @return
 */
declare function nlapiDateToString(d:Date, formattype?:string):string;

/**
 * Add days to a Date object and returns a new Date
 *
 * @param {date} d date object used to calculate the new date
 * @param {int}    days the number of days to add to this date object.
 * @return {date}
 *
 * @since 2008.1
 * @param d
 * @param days
 * @return
 */
declare function nlapiAddDays(d:any, days:any):any;

/**
 * Add months to a Date object and returns a new Date.
 *
 * @param {date} d date object used to calculate the new date
 * @param {int} months the number of months to add to this date object.
 * @return {date}
 *
 * @since 2008.1
 * @param d
 * @param months
 * @return
 */
declare function nlapiAddMonths(d:any, months:any):any;

/**
 * Format a number for data entry into a currency field.
 *
 * @param {string} str numeric string used to format for display as currency using user's locale
 * @return {string}
 *
 * @since 2008.1
 * @param str
 * @return
 */
declare function nlapiFormatCurrency(str:string):string;

/**
 * Encrypt a String using a SHA-1 hash function
 *
 * @param {string} s string to encrypt
 * @return {string}
 *
 * @since 2009.2
 * @param s
 * @return
 */
declare function nlapiEncrypt(s:string, algotithm:string, key?:string):string;

/**
 * Escape a String for use in an XML document.
 *
 * @param {string} text string to escape
 * @return {string}
 *
 * @since 2008.1
 * @param text
 * @return
 */
declare function nlapiEscapeXML(text:string):string;

/**
 * Convert a String into an XML document. Note that in Server SuiteScript XML is supported natively by the JS runtime using the e4x standard (http://en.wikipedia.org/wiki/E4X)
 * This makes scripting XML simpler and more efficient
 *
 * @param {string} str string being parsed into an XML document
 * @return {document}
 *
 * @since 2008.1
 * @param str
 * @return
 */
declare function nlapiStringToXML(str:string):any;

/**
 * Convert an XML document into a String.  Note that in Server SuiteScript XML is supported natively by the JS runtime using the e4x standard (http://en.wikipedia.org/wiki/E4X)
 * This makes scripting XML data simpler and more efficient
 *
 * @param {document} xml document being serialized into a string
 * @return {string}
 *
 * @since 2008.1
 * @param xml
 * @return
 */
declare function nlapiXMLToString(xml:any):string;

/**
 * Validate that a given XML document conforms to a given XML schema. XML Schema Definition (XSD) is the expected schema format.
 *
 * @param {document} xmlDocument xml to validate
 * @param {document} schemaDocument schema to enforce
 * @param {string} schemaFolderId if your schema utilizes <import> or <include> tags which refer to sub-schemas by file name (as opposed to URL),
 *                 provide the Internal Id of File Cabinet folder containing these sub-schemas as the schemaFolderId argument
 * @throws {nlobjError} error containsing validation failure message(s) - limited to first 10
 *
 * @since 2014.1
 * @param xmlDocument
 * @param schemaDocument
 * @param schemaFolderId
 */
declare function nlapiValidateXML(xmlDocument:any, schemaDocument:any, schemaFolderId:string):void;

/**
 * select a value from an XML node using XPath. Supports custom namespaces (nodes in default namespace can be referenced using "nlapi" as the prefix)
 *
 * @param {node} node node being queried
 * @param {string} xpath string containing XPath expression.
 * @return {string}
 *
 * @since 2008.2
 * @param node
 * @param xpath
 * @return
 */
declare function nlapiSelectValue(node:any, xpath:string):string;

declare function nlapiYieldScript():void;

/**
 * Select an array of values from an XML node using XPath. Supports custom namespaces (nodes in default namespace can be referenced using "nlapi" as the prefix)
 *
 * @param {node}    node node being queried
 * @param {string}    xpath string containing XPath expression.
 * @return {string[]}
 *
 * @since 2008.1
 * @param node
 * @param xpath
 */
declare function nlapiSelectValues(node:any, xpath:string):void;

/**
 * Select a node from an XML node using XPath. Supports custom namespaces (nodes in default namespace can be referenced using "nlapi" as the prefix)
 *
 * @param {node}    node node being queried
 * @param {string}    xpath string containing XPath expression.
 * @return {node}
 *
 * @since 2008.1
 * @param node
 * @param xpath
 * @return
 */
declare function nlapiSelectNode(node:any, xpath:string):any;

/**
 * Select an array of nodes from an XML node using XPath. Supports custom namespaces (nodes in default namespace can be referenced using "nlapi" as the prefix)
 *
 * @param {node}    node node being queried
 * @param {string}    xpath string containing XPath expression.
 * @return {node[]}
 *
 * @since 2008.1
 * @param node
 * @param xpath
 */
declare function nlapiSelectNodes(node:any, xpath:string):any;

/**
 * Calculate exchange rate between two currencies as of today or an optional effective date.
 * @governance 10 units
 *
 * @param {string, int} fromCurrency internal ID or currency code of currency we are converting from
 * @param {string, int} toCurrency internal ID or currency code of currency we are converting to
 * @param {string} [date] string containing date of effective exchange rate. defaults to today
 * @return {float}
 *
 * @since 2009.1
 * @param fromCurrency
 * @param toCurrency
 * @param date?
 * @return
 */
declare function nlapiExchangeRate(fromCurrency:any, toCurrency:any, date?:string):any;

/**
 * Initiates a workflow on-demand and returns the workflow instance ID for the workflow-record combination.
 * @governance 20 units
 *
 * @param {string} recordtype record type ID of the workflow base record
 * @param {int} id internal ID of the base record
 * @param {string, int} workflowid internal ID or script ID for the workflow definition
 * @return {int}
 *
 * @since 2010.1
 * @param recordtype
 * @param id
 * @param workflowid
 * @return
 */
declare function nlapiInitiateWorkflow(recordtype:string, id:any, workflowid:any):any;

/**
 * Initiates a workflow on-demand and returns the workflow instance ID for the workflow-record combination.
 * @governance 20 units
 *
 * @param {string} recordtype record type ID of the workflow base record
 * @param {string, int} id internal ID of the base record
 * @param {string, int} workflowid internal ID or script ID for the workflow definition
 * @return {string}
 *
 * @since 2014.2
 * @param recordType
 * @param id
 * @param workflowId
 * @param parameters
 * @return
 */
declare function nlapiInitiateWorkflowAsync(recordType:any, id:any, workflowId:any, parameters:any):string;

/**
 * Triggers a workflow on a record.
 * @governance 20 units
 *
 * @param {string} recordtype record type ID of the workflow base record
 * @param {int} id internal ID of the base record
 * @param {string, int} workflowid internal ID or script ID for the workflow definition
 * @param {string, int} actionid internal ID or script ID of the action script
 * @param {string, int} stateid internal ID or script ID of the state contains the referenced add button action
 * @return {int}
 *
 * @since 2010.1
 * @param recordtype
 * @param id
 * @param workflowid
 * @param actionid
 * @param stateid
 * @return
 */
declare function nlapiTriggerWorkflow(recordtype:string, id:any, workflowid:any, actionid:any, stateid:any):any;

/**
 * Create a subrecord on a sublist field on the current record on a page.
 * @restriction supported in client and user event scripts only.
 * @param {string}    type sublist name
 * @param {string}    fldnam sublist field name
 *
 * @since 2011.2
 * @param type
 * @param fldnam
 */
declare function nlapiCreateCurrentLineSubrecord(type:string, fldnam:string):void;

/**
 * edit a subrecord on a sublist field on the current record on a page.
 * @restriction supported in client and user event scripts only.
 * @param {string}    type sublist name
 * @param {string}    fldnam sublist field name
 *
 * @since 2011.2
 * @param type
 * @param fldnam
 */
declare function nlapiEditCurrentLineItemSubrecord(type:string, fldnam:string):void;

/**
 * remove a subrecord on a sublist field on the current record on a page.
 * @restriction supported in client and user event scripts only.
 * @param {string}    type sublist name
 * @param {string}    fldnam sublist field name
 *
 * @since 2011.2
 * @param type
 * @param fldnam
 */
declare function nlapiRemoveCurrentLineItemSubrecord(type:string, fldnam:string):void;

/**
 * view a subrecord on a sublist field on the current record on a page.
 * @restriction supported in client and user event scripts only.
 * @param {string}    type sublist name
 * @param {string}    fldnam sublist field name
 *
 * @since 2011.2
 * @param type
 * @param fldnam
 */
declare function nlapiViewCurrentLineItemSubrecord(type:string, fldnam:string):void;

/**
 * view a subrecord on a sublist field on the current record on a page.
 * @restriction supported in client and user event scripts only.
 * @param {string}    type sublist name
 * @param {string}    fldnam sublist field name
 *
 * @since 2011.2
 * @param type
 * @param fldnam
 * @param linenum
 */
declare function nlapiViewLineItemSubrecord(type:string, fldnam:string, linenum:any):void;

/**
 * get a cache object.
 * @param {string} name of the cache
 * @return {nlobjCache}
 *
 * @since 2013.2
 * @param name
 * @return
 */
declare function nlapiGetCache(name:string):any;

/**
 * create a subrecord on body field on the current record on a page.
 * @restriction supported in client and user event scripts only.
 * @param {string}    fldnam body field name
 *
 * @since 2011.2
 * @param fldnam
 */
declare function createSubrecord(fldnam:string):void;

/**
 * edit a subrecord on body field on the current record on a page.
 * @restriction supported in client and user event scripts only.
 * @param {string}    fldnam body field name
 *
 * @since 2011.2
 * @param fldnam
 */
declare function editSubrecord(fldnam:string):void;

/**
 * remove a subrecord on body field on the current record on a page.
 * @restriction supported in client and user event scripts only.
 * @param {string}    fldnam body field name
 *
 * @since 2011.2
 * @param fldnam
 */
declare function removeSubrecord(fldnam:string):void;

/**
 * view a subrecord on body field on the current record on a page.
 * @restriction supported in client and user event scripts only.
 * @param {string}    fldnam body field name
 *
 * @since 2011.2
 * @param fldnam
 */
declare function viewSubrecord(fldnam:string):void;


declare interface nlobjSearch {

}

declare interface StandardLine {
    getEntityId():number;
    getId():number;
    getSubsidiaryId():number;
    getTaxableAmount():string;
    getTaxAmount():string;
    getTaxItemId():number;
    getTaxType():string;
    isPosting():boolean;
    isTaxable():boolean;
}

declare interface StandardLines {
    getCount(): number;
    getLine(index:number):StandardLine;
}

declare interface CustomLine {
    isBookSpecific():boolean;
    setBookSpecific(bookSpecific:boolean):void;
    setAccountId(accountId:number):void;
    setClassId(classId:number):void;
    setCreditAmount(credit:string):void;
    setDebitAmount(debit:string):void;
    setDepartmentId(departmentId:number):void;
    setLocationId(locationId:number):void;
    setMemo(memo:string):void;
}

declare interface CustomLines {
    addNewLine():CustomLine;
    getCount():number;
    getLine(index:number):CustomLine;
}

declare interface AccountingBook {
    getId():number;
    isPrimary():boolean;
}

/**
 * Return a new instance of nlobjRecord used for accessing and manipulating record objects.
 *
 * @classDescription Class definition for business records in the system.
 * @return {nlobjRecord}
 * @since 2008.2
 */
declare interface nlobjRecord {

    /**
     *
     * @return
     */
    new (): any;

    /**
     * Return the internalId of the record or NULL for new records.
     *
     * @return {int} Return the integer value of the record ID.
     *
     * @method
     *
     * @since 2008.1
     * @return
     */
    getId(): string|number;

    /**
     * Return the recordType corresponding to this record.
     *
     * @return {string} The string value of the record name internal ID
     *
     * @method
     *
     * @since 2008.1
     * @return
     */
    getRecordType(): string;

    /**
     * Return field metadata for field.
     *
     * @param {string} fldnam field name
     * @return    {nlobjField}
     *
     * @method
     *
     * @since 2009.1
     * @param fldnam
     * @return
     */
    getField(fldnam:string): () => void;

    /**
     * Return sublist metadata for sublist.
     *
     * @param {string} type sublist name
     * @return {nlobjSubList}
     *
     * @method
     *
     * @since 2009.2
     * @param type
     * @return
     */
    getSubList(type:string): () => void;

    /**
     * Return field metadata for field.
     *
     * @param {string} type matrix sublist name
     * @param {string} fldnam matrix field name
     * @param {column} linenum matrix column (1-based)
     * @return {nlobjField}
     *
     * @method
     *
     * @since 2009.2
     * @param type
     * @param fldnam
     * @param column
     * @return
     */
    getMatrixField(type:string, fldnam:string, column:any): () => void;

    /**
     * Return metadata for sublist field.
     *
     * @param {string} type sublist name
     * @param {string} fldnam sublist field name
     * @param {int} [linenum] line number (1-based). If empty, the current sublist field is returned. only settable for sublists of type list
     * @return {nlobjField}
     *
     * @method
     *
     * @since 2009.2
     * @param type
     * @param fldnam
     * @param linenum?
     * @return
     */
    getLineItemField(type:string, fldnam:string, linenum?:any): () => void;

    /**
     * Return metadata for sublist field.
     *
     * @param {string} type matrix sublist name
     * @param {string} fldnam matrix field name
     * @param {int} linenum line number
     * @param {column} linenum matrix column (1-based)
     * @return {nlobjField}
     *
     * @method
     *
     * @since 2009.2
     * @param type
     * @param fldnam
     * @param linenum
     * @param column
     * @return
     */
    getLineItemMatrixField(type:string, fldnam:string, linenum:any, column:any): () => void;

    /**
     * Set the value of a field.
     *
     * @param {string} name field name
     * @param {string} value field value
     * @return {void}
     *
     * @method
     *
     * @since 2008.1
     * @param name
     * @param value
     * @return
     */
    setFieldValue(name:string, value:string|number): any;

    /**
     * Set the values of a multi-select field.
     *
     * @param {string} name field name
     * @param {string[]} values string array containing field values
     *
     * @method
     *
     * @since 2008.1
     * @param name
     * @param values
     */
    setFieldValues(name:string, values:any): void;

    /**
     * Return the value of a field.
     *
     * @param {string} name field name
     * @return {string}
     *
     * @method
     *
     * @since 2008.1
     * @param name
     * @return
     */
    getFieldValue(name:string): string;

    /**
     * Return the selected values of a multi-select field as an Array.
     *
     * @param {string} name field name
     * @return {string[]}
     *
     * @method
     *
     * @since 2008.1
     * @param name
     */
    getFieldValues(name:string): string[];

    /**
     * Set the value (via display value) of a select field.
     * @restriction only supported for select fields
     *
     * @param {string} name field name
     * @param {string} text field display value
     * @return {void}
     *
     * @method
     *
     * @since 2008.2
     * @param name
     * @param text
     * @return
     */
    setFieldText(name:string, text:string): any;

    /**
     * Set the values (via display values) of a multi-select field.
     * @restriction only supported for multi-select fields
     *
     * @param {string} name field name
     * @param {string[]} texts array of field display values
     * @return {void}
     *
     * @method
     *
     * @since 2008.2
     * @param name
     * @param texts
     * @return
     */
    setFieldTexts(name:string, texts:any): any;

    /**
     * Return the display value for a select field.
     * @restriction only supported for select fields
     *
     * @param {string} name field name
     * @return {string}
     *
     * @method
     *
     * @since 2008.2
     * @param name
     * @return
     */
    getFieldText(name:string): string;

    /**
     * Return the selected display values of a multi-select field as an Array.
     * @restriction only supported for multi-select fields
     *
     * @param {string} name field name
     * @return {string[]}
     *
     * @method
     *
     * @since 2008.2
     * @param name
     */
    getFieldTexts(name:string): void;

    /**
     * Get the value of a matrix header field.
     *
     * @param {string} type matrix sublist name
     * @param {string} name    matrix field name
     * @param {int} column matrix column index (1-based)
     * @return {string}
     *
     * @method
     *
     * @since 2009.2
     * @param type
     * @param name
     * @param column
     * @return
     */
    getMatrixValue(type:string, name:string, column:any): string;

    /**
     * Set the value of a matrix header field.
     *
     * @param {string}    type matrix sublist name
     * @param {string}    name    matrix field name
     * @param {int}    column matrix column index (1-based)
     * @param {string}    value field value
     * @return {void}
     *
     * @method
     *
     * @since 2009.2
     * @param type
     * @param name
     * @param column
     * @param value
     * @return
     */
    setMatrixValue(type:string, name:string, column:any, value:string): any;

    /**
     * Return an Array of all field names on the record.
     *
     * @return {string[]}
     *
     * @method
     *
     * @since 2008.1
     */
    getAllFields(): string[];

    /**
     * Return an Array of all field names on a record for a particular sublist.
     *
     * @param {string} group sublist name
     * @return {string[]}
     *
     * @method
     *
     * @since 2008.2
     * @param group
     */
    getAllLineItemFields(group:string): void;

    /**
     * Set the value of a sublist field.
     *
     * @param {string}    group sublist name
     * @param {string}    name sublist field name
     * @param {int}    line line number (1-based)
     * @param {string}    value sublist field value
     *
     * @method
     *
     * @since 2008.1
     * @param group
     * @param name
     * @param line
     * @param value
     */
    setLineItemValue(group:string, name:string, line:any, value:string): void;

    /**
     * Set the value of a sublist field.
     *
     * @param {string}    group sublist name
     * @param {string}    name sublist field name
     * @param {int}    line line number (1-based)
     * @param {string}    datetime value
     * @param {string}    timezone value
     *
     * @method
     *
     * @since 2013.2
     * @param group
     * @param name
     * @param line
     * @param value
     * @param timezone
     */
    setLineItemDateTimeValue(group:string, name:string, line:any, value:any, timezone:string): void;

    /**
     * Return the value of a sublist field.
     *
     * @param {string}    group sublist name
     * @param {string}    name sublist field name
     * @param {int}    line line number (1-based)
     *
     * @method
     *
     * @since 2008.1
     * @param group
     * @param name
     * @param line
     */
    getLineItemValue(group:string, name:string, line:any): string;

    /**
     * Return the value of a sublist field.
     *
     * @param {string}    group sublist name
     * @param {string}    name sublist field name
     * @param {int}    line line number (1-based)
     * @param {string}    timezone value
     *
     * @method
     *
     * @since 2013.2
     * @param group
     * @param name
     * @param line
     * @param timezone
     */
    getLineItemDateTimeValue(group:string, name:string, line:any, timezone:string): void;

    /**
     * Return the text value of a sublist field.
     *
     * @param {string}    group sublist name
     * @param {string}    name sublist field name
     * @param {int}    line line number (1-based)
     * @return {string}
     *
     * @method
     *
     * @since 2008.2
     * @param group
     * @param name
     * @param line
     * @return
     */
    getLineItemText(group:string, name:string, line:any): string;

    /**
     * Set the current value of a sublist field.
     * @param {string}    group sublist name
     * @param {string}    name sublist field name
     * @param {string}    value sublist field value
     * @return {void}
     *
     * @method
     *
     * @since 2009.2
     * @param group
     * @param name
     * @param value
     * @return
     */
    setCurrentLineItemValue(group:string, name:string, value:string|number, firefieldchanged?:boolean, synchronous?:boolean):void;

    setCurrentLineItemText(group:string, name:string, value:string|number, firefieldchanged?:boolean, synchronous?:boolean):void;

    /**
     * Set the current value of a sublist field.
     * @param {string}    group sublist name
     * @param {string}    name sublist field name
     * @param {string}    value sublist field value
     * @param {string}    timezone value
     * @return {void}
     *
     * @method
     *
     * @since 2013.2
     * @param group
     * @param name
     * @param value
     * @param timezone
     * @return
     */
    setCurrentLineItemDateTimeValue(group:string, name:string, value:string, timezone:string): any;

    /**
     * Return the current value of a sublist field.
     *
     * @param {string}    group sublist name
     * @param {string}    name sublist field name
     * @return {string}
     *
     * @method
     *
     * @since 2009.2
     * @param group
     * @param name
     * @return
     */
    getCurrentLineItemValue(group:string, name:string): string;

    /**
     * Return the current value of a sublist field.
     *
     * @param {string}    group sublist name
     * @param {string}    name sublist field name
     * @param {string}    timezone value
     * @return {string}
     *
     * @method
     *
     * @since 2013.2
     * @param group
     * @param name
     * @param timezone
     * @return
     */
    getCurrentLineItemDateTimeValue(group:string, name:string, timezone:string): string;

    /**
     * Return the current display value of a sublist field.
     *
     * @param {string}    group sublist name
     * @param {string}    name sublist field name
     * @return {string}
     *
     * @method
     *
     * @since 2009.2
     * @param group
     * @param name
     * @return
     */
    getCurrentLineItemText(group:string, name:string): string;

    /**
     * Set the current value of a sublist matrix field.
     *
     * @param {string}    group matrix sublist name
     * @param {string}    name matrix field name
     * @param {int}    column matrix field column index (1-based)
     * @param {string}    value matrix field value
     * @return {void}
     *
     * @method
     *
     * @since 2009.2
     * @param group
     * @param name
     * @param column
     * @param value
     * @return
     */
    setCurrentLineItemMatrixValue(group:string, name:string, column:any, value:string): any;

    /**
     * Return the current value of a sublist matrix field.
     *
     * @param {string}    group matrix sublist name
     * @param {string}    name matrix field name
     * @param {int}    column matrix field column index (1-based)
     * @return {string}
     *
     * @method
     *
     * @since 2009.2
     * @param group
     * @param name
     * @param column
     * @return
     */
    getCurrentLineItemMatrixValue(group:string, name:string, column:any): string;

    /**
     * Return the number of columns for a matrix field.
     *
     * @param {string}    group matrix sublist name
     * @param {string}    name matrix field name
     * @return {int}
     *
     * @method
     *
     * @since 2009.2
     * @param group
     * @param name
     * @return
     */
    getMatrixCount(group:string, name:string): any;

    /**
     * Return the number of lines in a sublist.
     *
     * @param {string} group sublist name
     *
     * @method
     *
     * @since 2009.2
     * @param group
     */
    getLineItemCount(group:string): string|number;

    /**
     * Return line number for 1st occurence of field value in a sublist column.
     *
     * @param {string} group    sublist name
     * @param {string} fldnam    sublist field name
     * @param {string} value    sublist field value
     * @return {int}
     *
     * @method
     *
     * @since 2009.2
     * @param group
     * @param fldnam
     * @param value
     * @return
     */
    findLineItemValue(group:string, fldnam:string, value:string): any;

    /**
     * Return line number for 1st occurence of field value in a sublist column.
     *
     * @param {string}    group    sublist na