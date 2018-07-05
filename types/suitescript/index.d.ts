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
 * @retun {void}
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
 * @retun {void}
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
 * @return{void}
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
 * @return{void}
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
 * @retun {nlobjSubrecord}
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
 * @retun {nlobjSubrecord}
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
 * @retun {void}
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
 * @retun {nlobjSubrecord}
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
 * @retun {nlobjSubrecord}
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
 * @retun {nlobjSubrecord}
 *
 * @since 2011.2
 * @param fldnam
 */
declare function createSubrecord(fldnam:string):void;

/**
 * edit a subrecord on body field on the current record on a page.
 * @restriction supported in client and user event scripts only.
 * @param {string}    fldnam body field name
 * @retun {nlobjSubrecord}
 *
 * @since 2011.2
 * @param fldnam
 */
declare function editSubrecord(fldnam:string):void;

/**
 * remove a subrecord on body field on the current record on a page.
 * @restriction supported in client and user event scripts only.
 * @param {string}    fldnam body field name
 * @retun {void}
 *
 * @since 2011.2
 * @param fldnam
 */
declare function removeSubrecord(fldnam:string):void;

/**
 * view a subrecord on body field on the current record on a page.
 * @restriction supported in client and user event scripts only.
 * @param {string}    fldnam body field name
 * @retun {nlobjSubrecord}
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
 * @constructor
 *
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
     * @memberOf nlobjRecord
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
     * @memberOf nlobjRecord
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
     * @memberOf nlobjRecord
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
     * @memberOf nlobjRecord
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
     * @memberOf nlobjRecord
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
     * @memberOf nlobjRecord
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
     * @memberOf nlobjRecord
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
     * @memberOf nlobjRecord
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
     * @memberOf nlobjRecord
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
     * @memberOf nlobjRecord
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
     * @memberOf nlobjRecord
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
     * @memberOf nlobjRecord
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
     * @memberOf nlobjRecord
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
     * @memberOf nlobjRecord
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
     * @memberOf nlobjRecord
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
     * @memberOf nlobjRecord
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
     * @memberOf nlobjRecord
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
     * @memberOf nlobjRecord
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
     * @memberOf nlobjRecord
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
     * @memberOf nlobjRecord
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
     * @memberOf nlobjRecord
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
     * @memberOf nlobjRecord
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
     * @memberOf nlobjRecord
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
     * @memberOf nlobjRecord
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
     * @memberOf nlobjRecord
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
     * @memberOf nlobjRecord
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
     * @memberOf nlobjRecord
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
     * @memberOf nlobjRecord
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
     * @memberOf nlobjRecord
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
     * @memberOf nlobjRecord
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
     * @memberOf nlobjRecord
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
     * @memberOf nlobjRecord
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
     * @memberOf nlobjRecord
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
     * @memberOf nlobjRecord
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
     * @param {string}    group    sublist name
     * @param {string}    fldnam    sublist field name
     * @param {int}    column  matrix column index (1-based)
     * @param {string}    value    matrix field value
     * @return {int}
     *
     * @method
     * @memberOf nlobjRecord
     *
     * @since 2009.2
     * @param group
     * @param fldnam
     * @param column
     * @param value
     * @return
     */
    findLineItemMatrixValue(group:string, fldnam:string, column:any, value:string): any;

    /**
     * Insert a new line into a sublist.
     *
     * @param {string}    group sublist name
     * @param {int}    [line] line index at which to insert line
     *
     * @method
     * @memberOf nlobjRecord
     *
     * @since 2009.2
     * @param group
     * @param line?
     */
    insertLineItem(group:string, line?:any): void;

    /**
     * Remove an existing line from a sublist.
     *
     * @param {string}    group sublist name
     * @param {int}    [line] line number to remove
     *
     * @method
     * @memberOf nlobjRecord
     *
     * @since 2009.2
     * @param group
     * @param line?
     */
    removeLineItem(group:string, line?:any): void;

    /**
     * Insert and select a new line in a sublist.
     *
     * @param {string} group sublist name
     * @return {void}
     *
     * @method
     * @memberOf nlobjRecord
     *
     * @since 2009.2
     * @param group
     * @return
     */
    selectNewLineItem(group:string): any;

    /**
     * Select an existing line in a sublist.
     *
     * @param {string}    group sublist name
     * @param {int}    line  line number to select
     * @return {void}
     *
     * @method
     * @memberOf nlobjRecord
     *
     * @since 2009.2
     * @param group
     * @param line
     * @return
     */
    selectLineItem(group:string, line:any): any;

    /**
     * Commit the current line in a sublist.
     *
     * @param {string}    group sublist name
     * @return {void}
     *
     * @method
     * @memberOf nlobjRecord
     *
     * @since 2009.2
     * @param group
     * @return
     */
    commitLineItem(group:string): any;

    /**
     * set the value of a field.
     *
     * @param {string} name field name
     * @param {string} value field value
     * @return {void}
     *
     * @method
     * @memberOf nlobjRecord
     *
     * @since 20013.2
     * @param name
     * @param value
     * @param timezone
     * @return
     */
    setDateTimeValue(name:string, value:string, timezone:string): any;

    /**
     * Return the value of a field on the current record on a page.
     * @restriction supported in client and user event scripts only.
     * @param {string} fldnam the field name
     * @param {string} timezone Olson value
     * @return {string}
     *
     * @since    2013.2
     * @param fldnam
     * @param timezone
     * @return
     */
    getDateTimeValue(fldnam:string, timezone:string): string;
}

/**
 * Return a new instance of nlobjConfiguration..
 *
 * @classDescription Class definition for interacting with setup/configuration pages
 * @return {nlobjConfiguration}
 * @constructor
 *
 * @since 2009.2
 */
declare interface nlobjConfiguration {

    /**
     *
     * @return
     */
    new (): any;

    /**
     * return the type corresponding to this setup record.
     *
     * @return {string}
     *
     * @method
     * @memberOf nlobjConfiguration
     *
     * @since 2009.2
     * @return
     */
    getType(): string;

    /**
     * return field metadata for field.
     *
     * @param {string} fldnam field name
     * @return {nlobjField}
     *
     * @method
     * @memberOf nlobjConfiguration
     *
     * @since 2009.2
     * @param fldnam
     * @return
     */
    getField(fldnam:string): () => void;

    /**
     * set the value of a field.
     *
     * @param {string} name field name
     * @param {string} value field value
     * @return {void}
     *
     * @method
     * @memberOf nlobjConfiguration
     *
     * @since 2009.2
     * @param name
     * @param value
     * @return
     */
    setFieldValue(name:string, value:string): any;

    /**
     * Set the values of a multi-select field.
     * @restriction only supported for multi-select fields
     *
     * @param {string} name field name
     * @param {string[]} value field values
     * @return {void}
     *
     * @method
     * @memberOf nlobjConfiguration
     *
     * @since 2009.2
     * @param name
     * @param value
     * @return
     */
    setFieldValues(name:string, value:any): any;

    /**
     * return the value of a field.
     *
     * @param {string} name field name
     * @return {string}
     *
     * @method
     * @memberOf nlobjConfiguration
     *
     * @since 2009.2
     * @param name
     * @return
     */
    getFieldValue(name:string): string;

    /**
     * return the selected values of a multi-select field as an Array.
     * @restriction only supported for multi-select fields
     *
     * @param {string} name field name
     * @return {string[]}
     *
     * @method
     * @memberOf nlobjConfiguration
     *
     * @since 2009.2
     * @param name
     */
    getFieldValues(name:string): string[];

    /**
     * set the value (via display value) of a field.
     * @restriction only supported for select fields
     *
     * @param {string} name field name
     * @param {string} text field display text
     * @return {void}
     *
     * @method
     * @memberOf nlobjConfiguration
     *
     * @since 2009.2
     * @param name
     * @param text
     * @return
     */
    setFieldText(name:string, text:string): any;

    /**
     * set the values (via display values) of a multi-select field.
     * @restriction only supported for multi-select fields
     *
     * @param {string}     name field name
     * @param {string[]} texts array of field display text values
     * @return {void}
     *
     * @method
     * @memberOf nlobjConfiguration
     *
     * @since 2009.2
     * @param name
     * @param texts
     * @return
     */
    setFieldTexts(name:string, texts:any): any;

    /**
     * return the text value of a field.
     * @restriction only supported for select fields
     *
     * @param {string} name field name
     * @return {string}
     *
     * @method
     * @memberOf nlobjConfiguration
     *
     * @since 2009.2
     * @param name
     * @return
     */
    getFieldText(name:string): string;

    /**
     * return the selected text values of a multi-select field as an Array.
     * @param {string} name field name
     * @return {string[]}
     *
     * @method
     * @memberOf nlobjConfiguration
     *
     * @since 2009.2
     * @param name
     */
    getFieldTexts(name:string): void;

    /**
     * return an Array of all field names on the record.
     * @return {string[]}
     *
     * @method
     * @memberOf nlobjConfiguration
     *
     * @since 2009.2
     */
    getAllFields(): string[];
}

/**
 * Return a new instance of nlobjFile used for accessing and manipulating files in the file cabinet.
 *
 * @classDescription Encapsulation of files (media items) in the file cabinet.
 * @return {nlobjFile}
 * @constructor
 *
 * @since 2009.1
 */
declare interface nlobjFile {

    /**
     *
     * @return
     */
    new (): any;

    /**
     * Return the name of the file.
     * @return {string}
     *
     * @method
     * @memberOf nlobjFile
     *
     * @since 2009.1
     * @return
     */
    getName(): string;

    /**
     * Sets the name of a file.
     * @param {string} name the name of the file
     * @return {void}
     *
     * @method
     * @memberOf nlobjFile
     *
     * @since 2009.1
     * @param name
     * @return
     */
    setName(name:string): any;

    /**
     * return the internal ID of the folder that this file is in.
     * @return {int}
     *
     * @method
     * @memberOf nlobjFile
     *
     * @since 2009.1
     * @return
     */
    getFolder(): any;

    /**
     * sets the internal ID of the folder that this file is in.
     * @param {int} folder
     * @return {void}
     *
     * @method
     * @memberOf nlobjFile
     *
     * @since 2009.1
     * @param folder
     * @return
     */
    setFolder(folder:any): any;

    /**
     * sets the character encoding for the file.
     * @param {String} encoding
     * @return {void}
     *
     * @method
     * @memberOf nlobjFile
     *
     * @since 2010.2
     * @param encoding
     * @return
     */
    setEncoding(encoding:string): any;

    /**
     * return true if the file is "Available without Login".
     * @return {boolean}
     *
     * @method
     * @memberOf nlobjFile
     *
     * @since 2009.1
     * @return
     */
    isOnline(): boolean;

    /**
     * sets the file's "Available without Login" status.
     * @param {boolean} online
     * @return {void}
     *
     * @method
     * @memberOf nlobjFile
     *
     * @since 2009.1
     * @param online
     * @return
     */
    setIsOnline(online:boolean): any;

    /**
     * return true if the file is inactive.
     * @return {boolean}
     *
     * @method
     * @memberOf nlobjFile
     *
     * @since 2009.1
     * @return
     */
    isInactive(): boolean;

    /**
     * sets the file's inactive status.
     * @param {boolean} inactive
     * @return {void}
     *
     * @method
     * @memberOf nlobjFile
     *
     * @since 2009.1
     * @param inactive
     * @return
     */
    setIsInactive(inactive:boolean): any;

    /**
     * return the file description.
     * @return {string}
     *
     * @method
     * @memberOf nlobjFile
     *
     * @since 2009.1
     * @return
     */
    getDescription(): string;

    /**
     * sets the file's description.
     * @param {string} descr the file description
     * @return {void}
     *
     * @method
     * @memberOf nlobjFile
     *
     * @since 2009.1
     * @param descr
     * @return
     */
    setDescription(descr:string): any;

    /**
     * Return the id of the file (if stored in the FC).
     * @return {int}
     *
     * @method
     * @memberOf nlobjFile
     *
     * @since 2009.1
     * @return
     */
    getId(): any;

    /**
     * Return the size of the file in bytes.
     * @return {int}
     *
     * @method
     * @memberOf nlobjFile
     *
     * @since 2009.1
     * @return
     */
    getSize(): any;

    /**
     * Return the URL of the file (if stored in the FC).
     * @return {string}
     *
     * @method
     * @memberOf nlobjFile
     *
     * @since 2009.1
     * @return
     */
    getURL(): string;

    /**
     * Return the type of the file.
     * @return {string}
     *
     * @method
     * @memberOf nlobjFile
     *
     * @since 2009.1
     * @return
     */
    getType(): string;

    /**
     * Return the value (base64 encoded for binary types) of the file.
     * @return {string}
     *
     * @method
     * @memberOf nlobjFile
     *
     * @since 2009.1
     * @return
     */
    getValue(): string;
}

/**
 * Return a new instance of nlobjSearchFilter filter objects used to define search criteria.
 *
 * @classDescription search filter
 * @constructor
 * @param {string} name filter name.
 * @param {string} join internal ID for joined search where this filter is defined
 * @param {string} operator operator name (i.e. anyOf, contains, lessThan, etc..)
 * @param {string|string[]} value
 * @param {string} value2
 * @return {nlobjSearchFilter}
 *
 * @since 2007.0
 */
declare interface nlobjSearchFilter {

    /**
     *
     * @param name
     * @param join
     * @param operator
     * @param value
     * @param value2
     * @return
     */
    new (name:string, join:string, operator:string, value:any, value2:string): any;

    /**
     * Return the name of this search filter.
     * @return {string}
     *
     * @method
     * @memberOf nlobjSearchFilter
     *
     * @since 2007.0
     * @return
     */
    getName(): string;

    /**
     * Return the join id for this search filter.
     * @return {string}
     *
     * @method
     * @memberOf nlobjSearchFilter
     *
     * @since 2008.1
     * @return
     */
    getJoin(): string;

    /**
     * Return the filter operator used.
     * @return {string}
     *
     * @method
     * @memberOf nlobjSearchFilter
     *
     * @since 2008.2
     * @return
     */
    getOperator(): string;
}

/**
 * Return a new instance of nlobjSearchColumn used for column objects used to define search return columns.
 *
 * @classDescription search column.
 * @return {nlobjSearchColumn}
 * @constructor
 * @param {string} name column name.
 * @param {string} join internal ID for joined search where this column is defined
 * @param {string} summary
 *
 * @since 2007.0
 */
declare interface nlobjSearchColumn {

    /**
     *
     * @param name
     * @param join
     * @param summary
     * @return
     */
    new (name:string, join?:string, summary?:string): nlobjSearchColumn;

    /**
     * return the name of this search column.
     * @return {string}
     *
     * @method
     * @memberOf nlobjSearchColumn
     * @since 2008.1
     * @return
     */
    getName(): string;

    /**
     * return the join id for this search column.
     * @return {string}
     *
     * @method
     * @memberOf nlobjSearchColumn
     * @since 2008.1
     * @return
     */
    getJoin(): string;

    /**
     * return the label of this search column.
     * @return {string}
     *
     * @method
     * @memberOf nlobjSearchColumn
     *
     * @since 2009.1
     * @return
     */
    getLabel(): string;

    /**
     * return the summary type (avg,group,sum,count) of this search column.
     * @return {string}
     *
     * @method
     * @memberOf nlobjSearchColumn
     * @since 2008.1
     * @return
     */
    getSummary(): string;

    /**
     * return formula for this search column.
     * @return {string}
     *
     * @method
     * @memberOf nlobjSearchColumn
     *
     * @since 2009.2
     * @return
     */
    getFormula(): string;

    /**
     * return nlobjSearchColumn sorted in either ascending or descending order.
     * @return {nlobjSearchColumn}
     * @param {boolean} sort if not set, defaults to false, which returns column data in ascending order.
     *
     * @method
     * @memberOf nlobjSearchColumn
     *
     * @since 2010.1
     * @param order
     * @return
     */
    setSort(order:any): (name:string, join:string, summary:string) => void;

    setLabel(label:string): nlobjSearchColumn;
}

declare class nlobjSearchColumn {
    constructor (name:string, join?:string, summary?:string);
}

/**
 * Return a new instance of nlobjSearchResult used for search result row object.
 *
 * @classDescription Class definition for interacting with the results of a search operation
 * @return {nlobjSearchResult}
 * @constructor
 */
declare interface nlobjSearchResult {

    /**
     *
     * @return
     */
    new (): any;

    /**
     * return the internalId for the record returned in this row.
     * @method
     * @memberOf nlobjSearchResult
     * @return {int}
     * @return
     */
    getId(): any;

    /**
     * return the recordtype for the record returned in this row.
     * @method
     * @memberOf nlobjSearchResult
     * @return {string}
     * @return
     */
    getRecordType(): string;

    /**
     * return the value for a return column specified by name, join ID, and summary type.
     * @param {string} name the name of the search column
     * @param {string} join the join ID for the search column
     * @param {string} summary summary type specified for this column
     * @return {string}
     *
     * @method
     * @memberOf nlobjSearchResult
     *
     * @since 2008.1
     * @param name
     * @param join
     * @param summary
     * @return
     */
    getValue(name:string, join:string, summary:string): string;

    /**
     * return the text value of this return column if it's a select field.
     * @param {string} name the name of the search column
     * @param {string} join the join ID for the search column
     * @param {string} summary summary type specified for this column
     * @return {string}
     *
     * @method
     * @memberOf nlobjSearchResult
     *
     * @since 2008.1
     * @param name
     * @param join
     * @param summary
     * @return
     */
    getText(name:string, join:string, summary:string): string;

    /**
     * return an array of all nlobjSearchColumn objects returned in this search.
     * @return {nlobjSearchColumn[]}
     *
     * @method
     * @memberOf nlobjSearchResult
     *
     * @since 2009.2
     */
    getAllColumns(): void;
}

/**
 * Return a new instance of nlobjContext used for user and script context information.
 *
 * @classDescription Utility class providing information about the current user and the script runtime.
 * @return {nlobjContext}
 * @constructor
 */
declare interface nlobjContext {

    /**
     *
     * @return
     */
    new (): any;

    /**
     * return the name of the current user.
     * @return {string}
     *
     * @method
     * @memberOf nlobjContext
     *
     * @since 2007.0
     * @return
     */
    getName(): string;

    /**
     * return the internalId of the current user.
     * @return {string}
     *
     * @method
     * @memberOf nlobjContext
     *
     * @since 2007.0
     * @return
     */
    getUser(): string;

    /**
     * return the internalId of the current user's role.
     * @return {string}
     *
     * @method
     * @memberOf nlobjContext
     *
     * @since 2007.0
     * @return
     */
    getRole(): string;

    /**
     * return the script ID of the current user's role.
     * @return {string}
     *
     * @method
     * @memberOf nlobjContext
     *
     * @since 2008.2
     * @return
     */
    getRoleId(): string;

    /**
     * return the internalId of the current user's center type.
     * @return {string}
     *
     * @method
     * @memberOf nlobjContext
     *
     * @since 2008.2
     * @return
     */
    getRoleCenter(): string;

    /**
     * return the email address of the current user.
     * @return {string}
     *
     * @method
     * @memberOf nlobjContext
     *
     * @since 2007.0
     * @return
     */
    getEmail(): string;

    /**
     * return the internal ID of the contact logged in on behalf of a customer, vendor, or partner. It returns -1 for non-contact logins
     * @return {int}
     *
     * @method
     * @memberOf nlobjContext
     *
     * @since 2009.1
     * @return
     */
    getContact(): any;

    /**
     * return the account ID of the current user.
     * @return {string}
     *
     * @method
     * @memberOf nlobjContext
     *
     * @since 2007.0
     * @return
     */
    getCompany(): string;

    /**
     * return the internalId of the current user's department.
     * @return {int}
     *
     * @method
     * @memberOf nlobjContext
     *
     * @since 2007.0
     * @return
     */
    getDepartment(): any;

    /**
     * return the internalId of the current user's location.
     * @return {int}
     *
     * @method
     * @memberOf nlobjContext
     *
     * @since 2007.0
     * @return
     */
    getLocation(): any;

    /**
     * return the internalId of the current user's subsidiary.
     * @return {int}
     *
     * @method
     * @memberOf nlobjContext
     *
     * @since 2007.0
     * @return
     */
    getSubsidiary(): any;

    /**
     * return the execution context for this script: webServices|csvImport|client|userInterface|scheduledScript|portlet|suitelet|debugger|custommassupdate
     * @return {string}
     *
     * @method
     * @memberOf nlobjContext
     *
     * @since 2007.0
     * @return
     */
    getExecutionContext(): string;

    /**
     * return the amount of usage units remaining for this script.
     * @return {int}
     *
     * @method
     * @memberOf nlobjContext
     *
     * @since 2007.0
     * @return
     */
    getRemainingUsage(): any;

    /**
     * return true if feature is enabled, false otherwise
     * @param {string} name
     * @return {boolean}
     *
     * @method
     * @memberOf nlobjContext
     *
     * @since 2009.2
     * @param name
     * @return
     */
    getFeature(name:string): boolean;

    /**
     * return current user's permission level (0-4) for this permission
     * @param {string} name
     * @return {int}
     *
     * @method
     * @memberOf nlobjContext
     *
     * @since 2009.2
     * @param name
     * @return
     */
    getPermission(name:string): any;

    /**
     * return system or script preference selection for current user
     * @param {string} name
     * @return {string}
     *
     * @method
     * @memberOf nlobjContext
     *
     * @since 2009.2
     * @param name
     * @return
     */
    getPreference(name:string): string;

    /**
     * return value of session object set by script
     * @param {string} name
     * @return {string}
     *
     * @method
     * @memberOf nlobjContext
     *
     * @since 2009.2
     * @param name
     * @return
     */
    getSessionObject(name:string): string;

    /**
     * set the value of a session object using a key.
     * @param {string} name
     * @param {string} value
     * @return {void}
     *
     * @method
     * @memberOf nlobjContext
     *
     * @since 2009.2
     * @param name
     * @param value
     * @return
     */
    setSessionObject(name:string, value:string): any;

    /**
     * return an array containing the names of all keys used to set session objects
     * @return {string[]}
     *
     * @method
     * @memberOf nlobjContext
     *
     * @since 2009.2
     */
    getAllSessionObjects(): void;

    /**
     * return the NetSuite version for the current account
     * @return {string}
     *
     * @method
     * @memberOf nlobjContext
     *
     * @since 2009.2
     * @return
     */
    getVersion(): string;

    /**
     * return the environment that the script is executing in: SANDBOX, PRODUCTION, BETA, INTERNAL
     * @since 2008.2
     */
    getEnvironment(): string;

    /**
     * return the logging level for the current script execution. Not supported in CLIENT scripts
     * @since 2008.2
     */
    getLogLevel(): void;

    /**
     * return the script ID for the current script
     * @return {string}
     *
     * @method
     * @memberOf nlobjContext
     *
     * @since 2009.2
     * @return
     */
    getScriptId(): string;

    /**
     * return the deployment ID for the current script
     * @return {string}
     *
     * @method
     * @memberOf nlobjContext
     *
     * @since 2009.2
     * @return
     */
    getDeploymentId(): string;

    /**
     * return the % complete specified for the current scheduled script execution
     * @return {int}
     *
     * @method
     * @memberOf nlobjContext
     *
     * @since 2009.2
     * @return
     */
    getPercentComplete(): any;

    /**
     * set the % complete for the current scheduled script execution
     * @param {float} ct the percentage of records completed
     * @return {void}
     *
     * @method
     * @memberOf nlobjContext
     *
     * @since 2009.2
     * @param pct
     * @return
     */
    setPercentComplete(pct:any): any;

    /**
     * return a system/script setting. Types are SCRIPT, SESSION, FEATURE, PERMISSION
     *
     * @param {string} type
     * @param {string} name
     * @since 2007.0
     * @deprecated
     * @param type
     * @param name
     */
    getSetting(type:string, name:string): void;

    /**
     * set a system/script setting. Only supported type is SESSION
     *
     * @param {string} type
     * @param {string} name
     * @param {string} value
     * @since 2007.0
     * @deprecated
     * @param type
     * @param name
     * @param value
     */
    setSetting(type:string, name:string, value:string): void;

    /**
     * return an Object containing name/value pairs of color groups to their corresponding RGB hex color based on the currenly logged in user's color them preferences.
     * @return {Object}
     *
     * @method
     * @memberOf nlobjContext
     *
     * @since 2010.1
     * @return
     */
    getColorPreferences(): any;

    /**
     * return the runtime version of SuiteScript, could be 1.0 or 2.0
     * @return {Object}
     *
     * @method
     * @memberOf nlobjContext
     *
     * @since 2014.1
     * @return
     */
    getRuntimeVersion(): any;
}

/**
 * Return a new instance of nlobjError used system or user-defined error object.
 *
 * @classDescription Encapsulation of errors thrown during script execution.
 * @return {nlobjError}
 * @constructor
 */
declare interface nlobjError {

    /**
     *
     * @return
     */
    new (): any;

    /**
     * return the error db ID for this error (if it was an unhandled unexpected error).
     * @return {string}
     *
     * @method
     * @memberOf nlobjError
     *
     * @since 2008.2
     * @return
     */
    getId(): string;

    /**
     * return the error code for this system or user-defined error.
     * @return {string}
     *
     * @method
     * @memberOf nlobjError
     *
     * @since 2008.2
     * @return
     */
    getCode(): string;

    /**
     * return the error description for this error.
     * @return {string}
     *
     * @method
     * @memberOf nlobjError
     *
     * @since 2008.2
     * @return
     */
    getDetails(): string;

    /**
     * return a stacktrace containing the location of the error.
     * @return {string[]}
     *
     * @method
     * @memberOf nlobjError
     *
     * @since 2008.2
     */
    getStackTrace(): void;

    /**
     * return the userevent script name where this error was thrown.
     * @return {string}
     *
     * @method
     * @memberOf nlobjError
     *
     * @since 2008.2
     * @return
     */
    getUserEvent(): string;

    /**
     * return the internalid of the record if this error was thrown in an aftersubmit script.
     * @return {int}
     *
     * @method
     * @memberOf nlobjError
     *
     * @since 2008.2
     * @return
     */
    getInternalId(): any;
}

declare class nlobjError {
    constructor (name:string, join?:string, summary?:string);
}

/**
 * Return a new instance of nlobjServerResponse..
 *
 * @classDescription Contains the results of a server response to an outbound Http(s) call.
 * @return {nlobjServerResponse}
 * @constructor
 *
 * @since 2008.1
 */
declare interface nlobjServerResponse {

    /**
     *
     * @return
     */
    new (): any;

    /**
     * return the Content-Type header in response
     * @return {string}
     *
     * @method
     * @memberOf nlobjServerResponse
     *
     * @since 2008.1
     * @return
     */
    getContentType(): string;

    /**
     * return the value of a header returned.
     * @param {string} name the name of the header to return
     * @return {string}
     *
     * @method
     * @memberOf nlobjServerResponse
     *
     * @since 2008.1
     * @param name
     * @return
     */
    getHeader(name:string): string;

    /**
     * return all the values of a header returned.
     * @param {string} name the name of the header to return
     * @return {string[]}
     *
     * @method
     * @memberOf nlobjServerResponse
     *
     * @since 2008.1
     * @param name
     */
    getHeaders(name:string): void;

    /**
     * return an Array of all headers returned.
     * @return {string[]}
     *
     * @method
     * @memberOf nlobjServerResponse
     *
     * @since 2008.1
     */
    getAllHeaders(): void;

    /**
     * return the response code returned.
     * @return {int}
     *
     * @method
     * @memberOf nlobjServerResponse
     *
     * @since 2008.1
     * @return
     */
    getCode(): string;

    /**
     * return the response body returned.
     * @return {string}
     *
     * @method
     * @memberOf nlobjServerResponse
     *
     * @since 2008.1
     * @return
     */
    getBody(): any;

    /**
     * return the nlobjError thrown via a client call to nlapiRequestURL.
     * @return {nlobjError}
     *
     * @method
     * @memberOf nlobjServerResponse
     *
     * @since 2008.1
     * @return
     */
    getError(): () => void;
}

/**
 * Return a new instance of nlobjResponse used for scripting web responses in Suitelets
 *
 * @classDescription Accessor to Http response made available to Suitelets.
 * @return {nlobjResponse}
 * @constructor
 */
declare interface nlobjResponse {

    /**
     *
     * @return
     */
    new (): any;

    getBody(): any;

    /**
     * add a value for a response header.
     * @param  {string} name of header
     * @param  {string} value for header
     * @return  {void}
     *
     * @method
     * @memberOf nlobjResponse
     *
     * @since 2008.2
     * @param name
     * @param value
     * @return
     */
    addHeader(name:string, value:string): any;

    /**
     * set the value of a response header.
     * @param  {string} name of header
     * @param  {string} value for header
     * @return  {void}
     *
     * @method
     * @memberOf nlobjResponse
     *
     * @since 2008.2
     * @param name
     * @param value
     * @return
     */
    setHeader(name:string, value:string): any;

    /**
     * return the value of a response header.
     * @param  {string} name of header
     * @return  {string}
     *
     * @method
     * @memberOf nlobjResponse
     *
     * @since 2008.2
     * @return
     */
    getHeader(): string;

    /**
     * return an Array of all response header values for a header
     * @param  {string} name of header
     * @return  {string[]}
     *
     * @method
     * @memberOf nlobjResponse
     *
     * @since 2008.2
     * @param name
     */
    getHeaders(name:string): void;

    /**
     * return an Array of all response headers
     * @return  {Object}
     *
     * @method
     * @memberOf nlobjResponse
     *
     * @since 2008.2
     * @return
     */
    getAllHeaders(): any;

    /**
     * suppress caching for this response.
     * @return  {void}
     *
     * @method
     * @memberOf nlobjResponse
     *
     * @since 2009.1
     * @return
     */
    sendNoCache(): any;

    /**
     * sets the content type for the response (and an optional filename for binary output).
     *
     * @param {string} type the file type i.e. plainText, word, pdf, htmldoc (see list of media item types)
     * @param {string} filename the file name
     * @param {string} disposition Content Disposition used for streaming attachments: inline|attachment
     * @return {void}
     * @method
     * @memberOf nlobjResponse
     *
     * @since 2008.2
     * @param type
     * @param filename
     * @param disposition
     * @return
     */
    setContentType(type:string, name?:string, disposition?:string): void;

    /**
     * sets the redirect URL for the response. all URLs must be internal unless the Suitelet is being executed in an "Available without Login" context
     *  at which point it can use type "external" to specify an external url via the subtype arg
     *
     * @param {string} type type specifier for URL: suitelet|tasklink|record|mediaitem|external
     * @param {string} subtype subtype specifier for URL (corresponding to type): scriptid|taskid|recordtype|mediaid|url
     * @param {string} [id] internal ID specifier (sub-subtype corresponding to type): deploymentid|n/a|recordid|n/a
     * @param {string} [pagemode] string specifier used to configure page (suitelet: external|internal, tasklink|record: edit|view)
     * @param {Object} [parameters] Object used to specify additional URL parameters as name/value pairs
     * @return {void}
     * @method
     * @memberOf nlobjResponse
     *
     * @since 2008.2
     * @param type
     * @param subtype
     * @param id?
     * @param pagemode?
     * @param parameters?
     * @return
     */
    sendRedirect(type:string, subtype:string, id?:string|number, pagemode?:boolean, parameters?:any): any;

    /**
     * write information (text/xml/html) to the response.
     *
     * @param {string} output
     * @return {void}
     * @method
     * @memberOf nlobjResponse
     *
     * @since 2008.2
     * @param output
     * @return
     */
    write(output:string): any;

    /**
     * write line information (text/xml/html) to the response.
     *
     * @param {string} output
     * @return {void}
     * @method
     * @memberOf nlobjResponse
     *
     * @since 2008.2
     * @param output
     * @return
     */
    writeLine(output:string): any;

    /**
     * write a UI object page.
     *
     * @param {Object} pageobject page UI object: nlobjList|nlobjAssistant|nlobjForm|nlobjDashboard
     * @return {void}
     * @method
     * @memberOf nlobjResponse
     *
     * @since 2008.2
     * @param pageobject
     * @return
     */
    writePage(pageobject:any): any;

    /**
     * sets the character encoding for the response.
     * @param {String} encoding
     * @return {void}
     * @method
     * @memberOf nlobjResponse
     *
     * @since 2012.2
     * @param encoding
     * @return
     */
    setEncoding(encoding:string): any;

    getCode():string;
}

/**
 * Return a new instance of nlobjRequest used for scripting web requests in Suitelets
 *
 * @classDescription Accessor to Http request data made available to Suitelets
 * @return {nlobjRequest}
 * @constructor
 */
declare interface nlobjRequest {

    /**
     *
     * @return
     */
    new (): any;

    /**
     * return the value of a request parameter.
     *
     * @param {string} name parameter name
     * @return {string}
     * @method
     * @memberOf nlobjRequest
     *
     * @since 2008.2
     * @param name
     * @return
     */
    getParameter(name:string): string;

    /**
     * return the values of a request parameter as an Array.
     *
     * @param {string} name parameter name
     * @return {string[]}
     * @method
     * @memberOf nlobjRequest
     *
     * @since 2008.2
     * @param name
     */
    getParameterValues(name:string): void;

    /**
     * return an Object containing all the request parameters and their values.
     * @return {Object}
     * @method
     * @memberOf nlobjRequest
     *
     * @since 2008.2
     * @return
     */
    getAllParameters(): any;

    /**
     * return the value of a sublist value.
     * @param {string}    group sublist name
     * @param {string}    name  sublist field name
     * @param {int}    line  sublist line number
     * @return {string}
     *
     * @method
     * @memberOf nlobjRequest
     *
     * @since 2008.2
     * @param group
     * @param name
     * @param line
     * @return
     */
    getLineItemValue(group:string, name:string, line:any): string;

    /**
     * return the number of lines in a sublist.
     * @param {string} group sublist name
     * @return {int}
     *
     * @method
     * @memberOf nlobjRequest
     *
     * @since 2008.2
     * @param group
     * @return
     */
    getLineItemCount(group:string): string|number;

    /**
     * return the value of a request header.
     * @param {string} name
     * @return {string}
     *
     * @method
     * @memberOf nlobjRequest
     *
     * @since 2008.2
     * @param name
     * @return
     */
    getHeader(name:string): string;

    /**
     * return an Object containing all the request headers and their values.
     * @return {Object}
     *
     * @method
     * @memberOf nlobjRequest
     *
     * @since 2008.2
     * @return
     */
    getAllHeaders(): any;

    /**
     * return the value of an uploaded file.
     * @param {string} name file field name
     * @return {nlobjFile}
     *
     * @method
     * @memberOf nlobjRequest
     *
     * @since 2009.1
     * @param name
     * @return
     */
    getFile(name:string): nlobjFile;

    /**
     * return an Object containing field names to file objects for all uploaded files.
     * @return {Object}
     *
     * @method
     * @memberOf nlobjRequest
     *
     * @since 2009.1
     * @return
     */
    getAllFiles(): any;

    /**
     * return the body of the POST request
     * @return {string}
     *
     * @method
     * @memberOf nlobjRequest
     * @since 2008.1
     * @return
     */
    getBody(): any;

    /**
     * return the URL of the request
     * @return {string}
     *
     * @method
     * @memberOf nlobjRequest
     * @since 2008.1
     * @return
     */
    getURL(): string;

    /**
     * return the METHOD of the request
     * @return {string}
     *
     * @method
     * @memberOf nlobjRequest
     * @since 2008.1
     * @return
     */
    getMethod(): string;
}

/**
 * Return a new instance of nlobjPortlet used for scriptable dashboard portlet.
 *
 * @classDescription UI Object used for building portlets that are displayed on dashboard pages
 * @return {nlobjPortlet}
 * @constructor
 */
declare interface nlobjPortlet {

    /**
     *
     * @return
     */
    new (): any;

    /**
     * set the portlet title.
     *
     * @param {string} title
     * @since 2008.2
     * @param title
     */
    setTitle(title:string): void;

    /**
     * set the entire contents of the HTML portlet (will be placed inside a <TD>...</TD>).
     *
     * @param {string} html
     * @since 2008.2
     * @param html
     */
    setHtml(html:string): void;

    /**
     * add a column (nlobjColumn) to this LIST portlet and return it.
     *
     * @param {string} name    column name
     * @param {string} type column type
     * @param {string} label column label
     * @param {string} [align] column alignment
     * @since 2008.2
     * @param name
     * @param type
     * @param label
     * @param align?
     */
    addColumn(name:string, type:string, label:string, align?:string): void;

    /**
     * add an Edit column (nlobjColumn) to the left of the column specified (supported on LIST portlets only).
     *
     * @param {nlobjColumn} column
     * @param {boolean} showView should Edit|View instead of Edit link
     * @param {string}    [showHref] column that evaluates to T or F that determines whether to disable the edit|view link per-row.
     * @return {nlobjColumn}
     *
     * @since 2008.2
     * @param column
     * @param showView
     * @param showHref?
     * @return
     */
    addEditColumn(column:() => void, showView:boolean, showHref?:string): () => void;

    /**
     * add a row (nlobjSearchResult or Array of name-value pairs) to this LIST portlet.
     *
     * @param {string[]|nlobjSearchResult} row
     * @since 2008.2
     * @param row
     */
    addRow(row:any): void;

    /**
     * add multiple rows (Array of nlobjSearchResults or name-value pair Arrays) to this LIST portlet.
     *
     * @param {string[][]|nlobjSearchResult[]} rows
     * @since 2008.2
     * @param rows
     */
    addRows(rows:any): void;

    /**
     * add a field (nlobjField) to this FORM portlet and return it.
     *
     * @param {string} name field name
     * @param {string} type field type
     * @param {string} [label] field label
     * @param {string, int} [source] script ID or internal ID for source list (select and multiselects only) -or- radio value for radio fields
     * @return {nlobjField}
     *
     * @since 2008.2
     * @param name
     * @param type
     * @param label?
     * @param source
     * @return
     */
    addField(name:string, type:string, label?:string, source?:any): () => void;

    /**
     * add a FORM submit button to this FORM portlet.
     *
     * @param {string} url    URL that this form portlet will POST to
     * @param {string} [label] label for submit button (defaults to Save)
     * @since 2008.2
     * @param url
     * @param label?
     */
    setSubmitButton(url:string, label?:string): void;

    /**
     * add a line (containing text or simple HTML) with optional indenting and URL to this LINKS portlet.
     *
     * @param {string}    text data to output to line
     * @param {string}    [url] URL if this line should be clickable (if NULL then line will not be clickable)
     * @param {int}    indent # of indents to insert before text
     * @since 2008.2
     * @param text
     * @param url?
     * @param indent
     */
    addLine(text:string, url?:string, indent?:any): void;
}

/**
 * Return a new instance of nlobjList used for scriptable list page.
 *
 * @classDescription UI Object page type used for building lists
 * @return {nlobjList}
 * @constructor
 */
declare interface nlobjList {

    /**
     *
     * @return
     */
    new (): any;

    /**
     * set the page title.
     *
     * @param {string} title
     * @since 2008.2
     * @param title
     */
    setTitle(title:string): void;

    /**
     * set the global style for this list: grid|report|plain|normal.
     *
     * @param {string} style overall style used to render list
     * @since 2008.2
     * @param style
     */
    setStyle(style:string): void;

    /**
     * set the Client SuiteScript used for this page.
     *
     * @param {string, int} script script ID or internal ID for global client script used to enable Client SuiteScript on page
     * @since 2008.2
     * @param script
     */
    setScript(script:any): void;

    /**
     * add a column (nlobjColumn) to this list and return it.
     *
     * @param {string} name column name
     * @param {string} type column type
     * @param {string} label column label
     * @param {string} [align] column alignment
     * @return {nlobjColumn}
     *
     * @since 2008.2
     * @param name
     * @param type
     * @param label
     * @param align?
     * @return
     */
    addColumn(name:string, type:string, label:string, align?:string): () => void;

    /**
     * add an Edit column (nlobjColumn) to the left of the column specified.
     *
     * @param {nlobjColumn} column
     * @param {boolean} showView should Edit|View instead of Edit link
     * @param {string}    [showHref] column that evaluates to T or F that determines whether to disable the edit|view link per-row.
     * @return {nlobjColumn}
     *
     * @since 2008.2
     * @param column
     * @param showView
     * @param showHref?
     * @return
     */
    addEditColumn(column:() => void, showView:boolean, showHref?:string): () => void;

    /**
     * add a row (Array of name-value pairs or nlobjSearchResult) to this portlet.
     *
     * @param {string[], nlobjSearchResult} row data used to add a single row
     * @since 2008.2
     * @param row
     */
    addRow(row:any): void;

    /**
     * add multiple rows (Array of nlobjSearchResults or name-value pair Arrays) to this portlet.
     *
     * @param {string[][], nlobjSearchResult[]} rows data used to add multiple rows
     * @since 2008.2
     * @param rows
     */
    addRows(rows:any): void;

    /**
     * add a button (nlobjButton) to the footer of this page.
     *
     * @param {string} name button name
     * @param {string} label button label
     * @param {string} script button script (function name)
     * @since 2008.2
     * @param name
     * @param label
     * @param script
     */
    addButton(name:string, label:string, script:string): void;

    /**
     * add a navigation cross-link to the page.
     *
     * @param {string} type    page link type: crosslink|breadcrumb
     * @param {string} title page link title
     * @param {string} url URL for page link
     * @since 2008.2
     * @param type
     * @param title
     * @param url
     */
    addPageLink(type:string, title:string, url:string): void;
}

/**
 * Return a new instance of nlobjForm used for scriptable form page.
 *
 * @classDescription UI Object page type used for building basic data entry forms.
 * @return {nlobjForm}
 * @constructor
 */
declare interface nlobjForm {

    /**
     *
     * @return
     */
    new (): nlobjForm;

    /**
     * set the page title.
     *
     * @param {string} title
     * @since 2008.2
     * @param title
     */
    setTitle(title:string): void;

    /**
     * set additional title Html. INTERNAL ONLY
     *
     * @param {string} title
     * @since 2008.2
     * @param html
     */
    addTitleHtml(html:any): void;

    /**
     * set the Client Script definition used for this page.
     *
     * @param {string, int} script script ID or internal ID for global client script used to enable Client SuiteScript on page
     * @since 2008.2
     * @param script
     */
    setScript(script:any): void;

    /**
     * set the values for all the fields on this form.
     *
     * @param {Object} values Object containing field name/value pairs
     * @since 2008.2
     * @param values
     */
    setFieldValues(values:any): void;

    /**
     * add a navigation cross-link to the page.
     *
     * @param {string} type    page link type: crosslink|breadcrumb
     * @param {string} title page link title
     * @param {string} url URL for page link
     * @since 2008.2
     * @param type
     * @param title
     * @param url
     */
    addPageLink(type:string, title:string, url:string): void;

    /**
     * add a button to this form.
     *
     * @param {string} name button name
     * @param {string} label button label
     * @param {string} script button script (function name)
     * @return {nlobjButton}
     *
     * @since 2008.2
     * @param name
     * @param label
     * @param script
     * @return
     */
    addButton(name:string, label:string, script?:string): nlobjButton;

    /**
     * get a button from this form by name.
     * @param {string} name
     * @return {nlobjButton}
     *
     * @method
     * @memberOf nlobjForm
     *
     * @since 2009.2                                                                           add
     * @param name
     * @return
     */
    getButton(name:string): nlobjButton;

    /**
     * add a reset button to this form.
     *
     * @param {string} [label] label for this button. defaults to "Reset"
     * @return {nlobjButton}
     *
     * @since 2008.2
     * @param label?
     * @return
     */
    addResetButton(label?:string): nlobjButton;

    /**
     * add a submit button to this form.
     *
     * @param {string} [label] label for this submit button. defaults to "Save"
     * @return {nlobjButton}
     *
     * @since 2008.2
     * @param label?
     * @return
     */
    addSubmitButton(label?:string): nlobjButton;

    /**
     * add a tab (nlobjTab) to this form and return it.
     *
     * @param {string} name tab name
     * @param {string} label tab label
     * @return {nlobjTab}
     *
     * @since 2008.2
     * @param name
     * @param label
     * @return
     */
    addTab(name:string, label:string): nlobjTab;

    /**
     * add a field (nlobjField) to this form and return it.
     *
     * @param {string} name field name
     * @param {string} type field type
     * @param {string} [label] field label
     * @param {string, int} [source] script ID or internal ID for source list (select and multiselects only) -or- radio value for radio fields
     * @param {string} [tab] tab name that this field will live on. If empty then the field is added to the main section of the form (immediately below the title bar)
     * @return {nlobjField}
     *
     * @since 2008.2
     * @param name
     * @param type
     * @param label?
     * @param sourceOrRadio
     * @param tab?
     * @return
     */
    addField(name:string, type:string, label?:string, sourceOrRadio?:any, tab?:string): nlobjField;

    /**
     *
     * @param name
     * @param label
     * @param domain
     * @param scriptId
     * @param value
     */
    addCredentialField(name:string, label:string, website?:string, scriptId?:string, value?:string, entityMatch?:boolean, tab?:string): nlobjField;

    /**
     * add a subtab (nlobjTab) to this form and return it.
     *
     * @param {string} name subtab name
     * @param {string} label subtab label
     * @param {string} [tab] parent tab that this subtab lives on. If empty, it is added to the main tab.
     * @return {nlobjTab}
     *
     * @since 2008.2
     * @param name
     * @param label
     * @param tab?
     * @return
     */
    addSubTab(name:string, label:string, tab?:string): nlobjTab;

    /**
     * add a sublist (nlobjSubList) to this form and return it.
     *
     * @param {string} name sublist name
     * @param {string} type sublist type: inlineeditor|editor|list|staticlist
     * @param {string} label sublist label
     * @param {string} [tab] parent tab that this sublist lives on. If empty, it is added to the main tab
     * @return {nlobjSubList}
     *
     * @since 2008.2
     * @param name
     * @param type
     * @param label
     * @param tab?
     * @return
     */
    addSubList(name:string, type:string, label:string, tab?:string): nlobjSubList;

    /**
     * insert a tab (nlobjTab) before another tab (name).
     *
     * @param {nlobjTab}        tab the tab object to insert
     * @param {string}        nexttab the name of the tab before which to insert this tab
     * @return {nlobjTab}
     *
     * @since 2008.2
     * @param tab
     * @param nexttab
     * @return
     */
    insertTab(tab:() => void, nexttab:string): nlobjTab;

    /**
     * insert a field (nlobjField) before another field (name).
     *
     * @param {nlobjField}    field the field object to insert
     * @param {string}        nextfld the name of the field before which to insert this field
     * @return {nlobjField}
     *
     * @since 2008.2
     * @param field
     * @param nextfld
     * @return
     */
    insertField(field:() => void, nextfld:string): nlobjField;

    /**
     * insert a subtab (nlobjTab) before another subtab or sublist (name).
     *
     * @param {nlobjTab}    subtab the subtab object to insert
     * @param {string}    nextsubtab the name of the subtab before which to insert this subtab
     * @return {nlobjTab}
     *
     * @since 2008.2
     * @param subtab
     * @param nextsubtab
     * @return
     */
    insertSubTab(subtab:() => void, nextsubtab:string): nlobjTab;

    /**
     * insert a sublist (nlobjSubList) before another subtab or sublist (name).
     *
     * @param {nlobjSubList}    sublist the sublist object to insert
     * @param {string}        nextsublist the name of the sublist before which to insert this sublist
     * @return {nlobjSubList}
     *
     * @since 2008.2
     * @param sublist
     * @param nextsublist
     * @return
     */
    insertSubList(sublist:() => void, nextsublist:string): nlobjSubList;

    /**
     * return a tab (nlobjTab) on this form.
     *
     * @param {string} name tab name
     * @return {nlobjTab}
     *
     * @since 2008.2
     * @param name
     * @return
     */
    getTab(name:string): nlobjTab;

    /**
     * return a field (nlobjField) on this form.
     *
     * @param {string} name field name
     * @param {string} [radio] if this is a radio field, specify which radio field to return based on radio value
     * @return {nlobjField}
     *
     * @since 2008.2
     * @param name
     * @param radio?
     * @return
     */
    getField(name:string, radio?:string): nlobjField;

    /**
     * return a subtab (nlobjTab) on this form.
     *
     * @param {string} name subtab name
     * @return {nlobjTab}
     *
     * @since 2008.2
     * @param name
     * @return
     */
    getSubTab(name:string): nlobjTab;

    /**
     * return a sublist (nlobjSubList) on this form.
     *
     * @param {string} name sublist name
     * @return {nlobjSubList}
     *
     * @since 2008.2
     * @param name
     * @return
     */
    getSubList(name:string): nlobjSubList;

    /**
     * add a field group to the form.
     * @param {string} name field group name
     * @param {string} label field group label
     * @param tab
     * @return {nlobjFieldGroup}
     *
     * @method
     * @memberOf nlobjForm
     *
     * @since 2011.1
     * @param name
     * @param label
     * @param tab
     * @return
     */
    addFieldGroup(name:string, label:string, tab:any): nlobjFieldGroup;

    /**
     * get a list of all tabs.
     * @return an array with names of all tabs
     *
     * @method
     * @memberOf nlobjForm
     *
     * @since 2012.2
     */
    getTabs(): nlobjTab[];
}

/**
 * Return a new instance of nlobjAssistant.
 *
 * @classDescription UI Object page type used to build multi-step "assistant" pages to simplify complex workflows. All data and state for an assistant is tracked automatically
 * throughout the user's session up until completion of the assistant.
 *
 * @return {nlobjAssistant}
 * @constructor
 *
 * @since 2009.2
 */
declare interface nlobjAssistant {

    /**
     *
     * @return
     */
    new (): any;

    /**
     * set the page title.
     * @param {string} title
     * @return {void}
     *
     * @method
     * @memberOf nlobjAssistant
     *
     * @since 2009.2
     * @param title
     * @return
     */
    setTitle(title:string): any;

    /**
     * set the script ID for Client Script used for this form.
     * @param {string, int} script script ID or internal ID for global client script used to enable Client SuiteScript on page
     * @return {void}
     *
     * @method
     * @memberOf nlobjAssistant
     *
     * @since 2009.2
     * @param script
     * @return
     */
    setScript(script:any): any;

    /**
     * set the splash screen used for this page.
     * @param {string} title splash portlet title
     * @param {string} text1 splash portlet content (left side)
     * @param {string} [text2] splash portlet content (right side)
     * @return {void}
     *
     * @method
     * @memberOf nlobjAssistant
     *
     * @since 2009.2
     * @param title
     * @param text1
     * @param text2?
     * @return
     */
    setSplash(title:string, text1:string, text2?:string): any;

    /**
     * show/hide shortcut link. Always hidden on external pages
     * @param {boolean} show enable/disable "Add To Shortcut" link on this page
     * @return {void}
     *
     * @method
     * @memberOf nlobjAssistant
     *
     * @since 2009.2
     * @param show
     * @return
     */
    setShortcut(show:boolean): any;

    /**
     * set the values for all the fields on this page.
     * @param {Object} values Object of field name/value pairs used to set all fields on page
     * @return {void}
     *
     * @method
     * @memberOf nlobjAssistant
     *
     * @since 2009.2
     * @param values
     * @return
     */
    setFieldValues(values:any): any;

    /**
     * if ordered, steps are show on left and must be completed sequentially, otherwise steps are shown on top and can be done in any order
     * @param {boolean} ordered    If true (default assistant behavior) then a navigation order thru the steps/pages will be imposed on the user. Otherwise the user
     *                            will be allowed to navigate across steps/pages in any order they choose.
     * @return  {void}
     *
     * @method
     * @memberOf nlobjAssistant
     *
     * @since 2009.2
     * @param ordered
     * @return
     */
    setOrdered(ordered:boolean): any;

    /**
     * if numbered, step numbers are displayed next to the step's label in the navigation area
     * @param {boolean} numbered    If true (default assistant behavior) step numbers will be displayed next to the step label
     * @return  {void}
     *
     * @method
     * @memberOf nlobjAssistant
     *
     * @since 2009.2
     * @param numbered
     * @return
     */
    setNumbered(numbered:boolean): any;

    /**
     * return true if all the steps have been completed.
     * @return {boolean}
     *
     * @method
     * @memberOf nlobjAssistant
     *
     * @since 2009.2
     * @return
     */
    isFinished(): boolean;

    /**
     * mark assistant page as completed and optionally set the rich text to display on completed page.
     * @param {string} html completion message (rich text) to display on the "Finish" page
     * @return  {void}
     *
     * @method
     * @memberOf nlobjAssistant
     *
     * @since 2009.2
     * @param html
     * @return
     */
    setFinished(html:string): any;

    /**
     * return true if the assistant has an error message to display for the current step.
     * @return {boolean}
     *
     * @method
     * @memberOf nlobjAssistant
     *
     * @since 2009.2
     * @return
     */
    hasError(): boolean;

    /**
     * set the error message for the currrent step.
     * @param {string} html error message (rich text) to display on the page to the user
     * @return {void}
     *
     * @method
     * @memberOf nlobjAssistant
     *
     * @since 2009.2
     * @param html
     * @return
     */
    setError(html:string): any;

    /**
     * mark a step as current. It will be highlighted accordingly when the page is displayed
     * @param {nlobjAssistantStep} step assistant step object representing the current step that the user is on.
     * @return {void}
     *
     * @method
     * @memberOf nlobjAssistant
     *
     * @since 2009.2
     * @param step
     * @return
     */
    setCurrentStep(step:() => void): any;

    /**
     * add a step to the assistant.
     * @param {string} name the name of the step
     * @param {string} label label used for this step
     * @return {nlobjAssistantStep}
     *
     * @method
     * @memberOf nlobjAssistant
     *
     * @since 2009.2
     * @param name
     * @param label
     * @return
     */
    addStep(name:string, label:string): () => void;

    /**
     * add a field to this page and return it.
     * @param {string} name field name
     * @param {string} type field type
     * @param {string} [label] field label
     * @param {string, int} [source] script ID or internal ID for source list (select and multiselects only) -or- radio value for radio fields
     * @param {string} [group] group name that this field will live on. If empty then the field is added to the main section of the page
     * @return {nlobjField}
     *
     * @method
     * @memberOf nlobjAssistant
     *
     * @since 2009.2
     * @param name
     * @param type
     * @param label?
     * @param source
     * @param group?
     * @return
     */
    addField(name:string, type:string, label?:string, source?:any, group?:string): () => void;

    /**
     * add a sublist to this page and return it. For now only sublists of type inlineeditor are supported
     * @param {string} name sublist name
     * @param {string} type sublist type (inlineeditor only for now)
     * @param {string} label sublist label
     * @return {nlobjSubList}
     *
     * @method
     * @memberOf nlobjAssistant
     *
     * @since 2009.2
     * @param name
     * @param type
     * @param label
     * @return
     */
    addSubList(name:string, type:string, label:string): () => void;

    /**
     * add a field group to the page.
     * @param {string} name field group name
     * @param {string} label field group label
     * @return {nlobjFieldGroup}
     *
     * @method
     * @memberOf nlobjAssistant
     *
     * @since 2009.2
     * @param name
     * @param label
     * @return
     */
    addFieldGroup(name:string, label:string): () => void;

    /**
     * return an assistant step on this page.
     * @param {string} name step name
     * @return {nlobjAssistantStep}
     *
     * @method
     * @memberOf nlobjAssistant
     *
     * @since 2009.2
     * @param name
     * @return
     */
    getStep(name:string): () => void;

    /**
     * return a field on this page.
     * @param {string} name field name
     * @return {nlobjField}
     *
     * @method
     * @memberOf nlobjAssistant
     *
     * @since 2009.2
     * @param name
     * @return
     */
    getField(name:string): () => void;

    /**
     * return a sublist on this page.
     * @param {string} name sublist name
     * @return {nlobjSubList}
     *
     * @method
     * @memberOf nlobjAssistant
     *
     * @since 2009.2
     * @param name
     * @return
     */
    getSubList(name:string): () => void;

    /**
     * return a field group on this page.
     * @param {string} name field group name
     * @return {nlobjFieldGroup}
     *
     * @method
     * @memberOf nlobjAssistant
     *
     * @since 2009.2
     * @param name
     * @return
     */
    getFieldGroup(name:string): () => void;

    /**
     * return an array of all the assistant steps for this assistant.
     * @return {nlobjAssistantStep[]}
     *
     * @method
     * @memberOf nlobjAssistant
     *
     * @since 2009.2
     */
    getAllSteps(): void;

    /**
     * return an array of the names of all fields on this page.
     * @return {string[]}
     *
     * @method
     * @memberOf nlobjAssistant
     *
     * @since 2009.2
     */
    getAllFields(): string[];

    /**
     *  return an array of the names of all sublists on this page .
     * @return {string[]}
     *
     * @method
     * @memberOf nlobjAssistant
     *
     * @since 2009.2
     */
    getAllSubLists(): void;

    /**
     * return an array of the names of all field groups on this page.
     * @return {string[]}
     *
     * @method
     * @memberOf nlobjAssistant
     *
     * @since 2009.2
     */
    getAllFieldGroups(): void;

    /**
     * return the last submitted action by the user: next|back|cancel|finish|jump
     * @return {string}
     *
     * @method
     * @memberOf nlobjAssistant
     *
     * @since 2009.2
     * @return
     */
    getLastAction(): string;

    /**
     * return step from which the last submitted action came from
     * @return {nlobjAssistantStep}
     *
     * @method
     * @memberOf nlobjAssistant
     *
     * @since 2009.2
     * @return
     */
    getLastStep(): () => void;

    /**
     * return the next logical step corresponding to the user's last submitted action. You should only call this after
     * you have successfully captured all the information from the last step and are ready to move on to the next step. You
     * would use the return value to set the current step prior to continuing.
     *
     * @return {nlobjAssistantStep}
     *
     * @method
     * @memberOf nlobjAssistant
     *
     * @since 2009.2
     * @return
     */
    getNextStep(): () => void;

    /**
     * return current step set via nlobjAssistant.setCurrentStep(step)
     * @return {nlobjAssistantStep}
     *
     * @method
     * @memberOf nlobjAssistant
     *
     * @since 2009.2
     * @return
     */
    getCurrentStep(): () => void;

    /**
     * return the total number of steps in the assistant
     * @return {int}
     *
     * @method
     * @memberOf nlobjAssistant
     *
     * @since 2009.2
     * @return
     */
    getStepCount(): any;

    /**
     * redirect the user following a user submit operation. Use this to automatically redirect the user to the next logical step.
     * @param {nlobjResponse} response the response object used to communicate back to the user's client
     * @return {void}
     *
     * @method
     * @memberOf nlobjAssistant
     *
     * @since 2009.2
     * @param response
     * @return
     */
    sendRedirect(response:() => void): any;
}

/**
 * Return a new instance of nlobjField used for scriptable form/sublist field.
 * This object is READ-ONLY except for scripted fields created via the UI Object API using Suitelets or beforeLoad user events
 *
 * @classDescription Core descriptor for fields used to define records and also used to build pages and portlets.
 * @return {nlobjField}
 * @constructor
 */
declare interface nlobjField {

    /**
     *
     * @return
     */
    new (): /* nlobjField */ any;

    /**
     *  return field name.
     *  @return {string}
     *
     * @method
     * @memberOf nlobjField
     *
     * @since 2009.2
     * @return
     */
    getName(): string;

    /**
     * return field label.
     * @return {string}
     *
     * @method
     * @memberOf nlobjField
     *
     * @since 2009.2
     * @return
     */
    getLabel(): string;

    /**
     * return field type.
     *  @return {string}
     *
     * @method
     * @memberOf nlobjField
     *
     * @since 2009.2
     * @return
     */
    getType(): string;

    /**
     * return true if field is hidden.
     * @return {boolean}
     *
     * @method
     * @memberOf nlobjField
     *
     * @since 2009.2
     * @return
     */
    isHidden(): boolean;

    /**
     * return true if field is mandatory.
     * @return {boolean}
     *
     * @method
     * @memberOf nlobjField
     *
     * @since 2009.2
     * @return
     */
    isMandatory(): boolean;

    /**
     * return true if field is disabled.
     * @return {boolean}
     *
     * @method
     * @memberOf nlobjField
     *
     * @since 2009.2
     * @return
     */
    isDisabled(): boolean;

    /**
     * set the label for this field.
     * This method is only supported on scripted fields via the UI Object API
     *
     * @param {string} label
     * @return {nlobjField}
     *
     * @since 2008.2
     * @param label
     * @return
     */
    setLabel(label:string): () => void;

    /**
     * set the alias used to set the value for this field. Defaults to field name.
     * This method is only supported on scripted fields via the UI Object API
     *
     * @param {string} alias column used to populate the field (mostly relevant when populating sublist fields)
     * @return {nlobjField}
     *
     * @since 2008.2
     * @param alias
     * @return
     */
    setAlias(alias:string): () => void;

    /**
     * set the default value for this field.
     * This method is only supported on scripted fields via the UI Object API
     *
     * @param {string} value
     * @return {nlobjField}
     *
     * @since 2008.2
     * @param value
     * @return
     */
    setDefaultValue(value:string): () => void;

    /**
     * Disable field via field metadata.
     * This method is only supported on scripted fields via the UI Object API
     * @param {boolean} disabled if true then field should be disabled.
     * @return {nlobjField}
     *
     * @method
     * @memberOf nlobjField
     *
     * @since 2009.2
     * @param disabled
     * @return
     */
    setDisabled(disabled:boolean): () => void;

    /**
     * make this field mandatory.
     * This method is only supported on scripted fields via the UI Object API
     *
     * @param {boolean} mandatory if true then field becomes mandatory
     * @return {nlobjField}
     *
     * @since 2008.2
     * @param mandatory
     * @return
     */
    setMandatory(mandatory:boolean): () => void;

    /**
     * set the maxlength for this field (only valid for certain field types).
     *  This method is only supported on scripted fields via the UI Object API
     *
     * @param {int} maxlength maximum length for this field
     * @return {nlobjField}
     *
     * @since 2008.2
     * @param maxlength
     * @return
     */
    setMaxLength(maxlength:any): () => void;

    /**
     * set the display type for this field.
     * This method is only supported on scripted fields via the UI Object API
     *
     * @param {string} type display type: inline|normal|hidden|disabled|readonly|entry
     * @return {nlobjField}
     *
     * @since 2008.2
     * @param type
     * @return
     */
    setDisplayType(type:string): () => void;

    /**
     * set the break type (startcol|startrow|none) for this field. startrow is only used for fields with a layout type of outside
     * This method is only supported on scripted fields via the UI Object API
     *
     * @param {string} breaktype break type used to add a break in flow layout for this field: startcol|startrow|none
     * @return {nlobjField}
     *
     * @method
     * @memberOf nlobjField
     *
     * @since 2009.2
     * @param breaktype
     * @return
     */
    setBreakType(breaktype:string): () => void;

    /**
     * set the layout type and optionally the break type.
     * This method is only supported on scripted fields via the UI Object API
     *
     * @param {string} type layout type: outside|startrow|midrow|endrow|normal
     * @param {string} [breaktype] break type: startcol|startrow|none
     * @return {nlobjField}
     *
     * @since 2008.2
     * @param type
     * @param breaktype?
     * @return
     */
    setLayoutType(type:string, breaktype?:string): () => void;

    /**
     * set the text that gets displayed in lieu of the field value for URL fields.
     *
     * @param {string} text user-friendly display value in lieu of URL
     * @return {nlobjField}
     *
     * @since 2008.2
     * @param text
     * @return
     */
    setLinkText(text:string): () => void;

    /**
     * set the width and height for this field.
     * This method is only supported on scripted fields via the UI Object API
     *
     * @param {int} width
     * @param {int} height
     * @return {nlobjField}
     *
     * @since 2008.2
     * @param width
     * @param height
     * @return
     */
    setDisplaySize(width:any, height:any): () => void;

    /**
     * set the amount of emppty vertical space (rows) between this field and the previous field.
     * This method is only supported on scripted fields via the UI Object API
     *
     * @param {int} padding # of empty rows to display above field
     * @return {nlobjField}
     *
     * @since 2008.2
     * @param padding
     * @return
     */
    setPadding(padding:any): () => void;

    /**
     * set help text for this field. If inline is set on assistant pages, help is displayed inline below field
     * This method is only supported on scripted fields via the UI Object API
     *
     * @param {string} help    field level help content (rich text) for field
     * @param {string} [inline] if true then in addition to the popup field help, the help will also be displayed inline below field (supported on assistant pages only)
     * @return {nlobjField}
     *
     * @method
     * @memberOf nlobjField
     *
     * @since 2009.2
     * @param help
     * @param inline?
     * @return
     */
    setHelpText(help:string, inline?:string): () => void;

    /**
     * add a select option to this field (valid for select/multiselect fields).
     * This method is only supported on scripted fields via the UI Object API
     *
     * @param {string} value internal ID for this select option
     * @param {string} text display value for this select option
     * @param {boolean} [selected] if true then this select option will be selected by default
     * @since 2008.2
     * @param value
     * @param text
     * @param selected?
     */
    addSelectOption(value:string, text:string, selected?:boolean): void;
}

/**
 * Return a new instance of nlobjSubList used for scriptable sublist (sublist).
 * This object is READ-ONLY except for instances created via the UI Object API using Suitelets or beforeLoad user events.
 *
 * @classDescription high level container for defining sublist (many to one) relationships on a record or multi-line data entry UIs on pages.
 * @return {nlobjSubList}
 * @constructor
 */
declare interface nlobjSubList {

    /**
     *
     * @return
     */
    new (): /* nlobjSubList */ any;

    /**
     * set the label for this sublist.
     * This method is only supported on sublists via the UI Object API
     *
     * @param {string} label
     * @since 2008.2
     * @param label
     */
    setLabel(label:string): void;

    /**
     * set helper text for this sublist.
     * This method is only supported on sublists via the UI Object API
     *
     * @param {string} help
     * @since 2008.2
     * @param help
     */
    setHelpText(help:string): void;

    /**
     * set the displaytype for this sublist: hidden|normal.
     * This method is only supported on scripted or staticlist sublists via the UI Object API
     *
     * @param {string} type
     * @since 2008.2
     * @param type
     */
    setDisplayType(type:string): void;

    /**
     * set the value of a cell in this sublist.
     *
     * @param {string}    field sublist field name
     * @param {int}    line  line number (1-based)
     * @param {string}    value sublist value
     *
     * @method
     * @memberOf nlobjSubList
     *
     * @since 2008.2
     * @param field
     * @param line
     * @param value
     */
    setLineItemValue(field:string, line:any, value:string): void;

    /**
     * set the value of a matrix cell in this sublist.
     * @param {string}    field    matrix field name
     * @param {int}    line    line number (1-based)
     * @param {int}    column  matrix column index (1-based)
     * @param {string}    value   matrix field value
     * @return {void}
     *
     * @method
     * @memberOf nlobjSubList
     *
     * @since 2009.2
     * @param field
     * @param line
     * @param column
     * @param value
     * @return
     */
    setLineItemMatrixValue(field:string, line:any, column:any, value:string): any;

    /**
     * set values for multiple lines (Array of nlobjSearchResults or name-value pair Arrays) in this sublist.
     * Note that this method is only supported on scripted sublists via the UI Object API
     *
     * @param {string[][], nlobjSearchResult[]} values
     * @since 2008.2
     * @param values
     */
    setLineItemValues(values:any): void;

    /**
     * Return the number of lines in a sublist.
     *
     * @param {string} group sublist name
     *
     * @method
     * @memberOf nlobjSubList
     * @since 2010.1
     * @param group
     */
    getLineItemCount(group:string): string|number;

    /**
     * add a field (column) to this sublist.
     *
     * @param {string} name field name
     * @param {string} type field type
     * @param {string} label field label
     * @param {string, int} [source] script ID or internal ID for source list used for this select field
     * @return {nlobjField}
     *
     * @method
     * @memberOf nlobjSubList
     *
     * @since 2008.2
     * @param name
     * @param type
     * @param label
     * @param source
     * @return
     */
    addField(name:string, type:string, label:string, source:any): () => void;

    /**
     * designate a field on sublist that must be unique across all lines (only supported on sublists of type inlineeditor, editor).
     * @param {string} fldnam the name of a field on this sublist whose value must be unique across all lines
     * @return {nlobjField}
     *
     * @method
     * @memberOf nlobjSubList
     *
     * @since 2009.2
     * @param fldnam
     * @return
     */
    setUniqueField(fldnam:string): () => void;

    /**
     * add a button to this sublist.
     *
     * @param {string} name button name
     * @param {string} label button label
     * @param {string} script button script (function name)
     * @return {nlobjButton}
     *
     * @method
     * @memberOf nlobjSubList
     *
     * @since 2008.2
     * @param name
     * @param label
     * @param script
     * @return
     */
    addButton(name:string, label:string, script:string): () => void;

    /**
     * add "Refresh" button to sublists of type "staticlist" to support manual refreshing of the sublist (without entire page reloads) if it's contents are very volatile
     * @return {nlobjButton}
     *
     * @method
     * @memberOf nlobjSubList
     *
     * @since 2009.2
     * @return
     */
    addRefreshButton(): () => void;

    /**
     * add "Mark All" and "Unmark All" buttons to this sublist of type "list".
     *
     * @method
     * @memberOf nlobjSubList
     *
     * @since 2008.2
     */
    addMarkAllButtons(): void;
}

/**
 * Return a new instance of nlobjColumn used for scriptable list column.
 *
 * @classDescription Class definition for columns used on lists and list portlets.
 * @return {nlobjColumn}
 * @constructor
 */
declare interface nlobjColumn {

    /**
     *
     * @return
     */
    new (): /* nlobjColumn */ any;

    /**
     * set the header name for this column.
     *
     * @param {string} label the label for this column
     *
     * @method
     * @memberOf nlobjColumn
     *
     * @since 2008.2
     * @param label
     */
    setLabel(label:string): void;

    /**
     * set the base URL (optionally defined per row) for this column.
     *
     * @param {string} value the base URL or a column in the datasource that returns the base URL for each row
     * @param {boolean} perRow if true then the 1st arg is expected to be a column in the datasource
     *
     * @method
     * @memberOf nlobjColumn
     *
     * @since 2008.2
     * @param value
     * @param perRow
     */
    setURL(value:string, perRow:boolean): void;

    /**
     * add a URL parameter (optionally defined per row) to this column's URL.
     *
     * @param {string} param the name of a parameter to add to URL
     * @param {string} value the value of the parameter to add to URL -or- a column in the datasource that returns the parameter value for each row
     * @param {boolean} [perRow] if true then the 2nd arg is expected to be a column in the datasource
     *
     * @method
     * @memberOf nlobjColumn
     *
     * @since 2008.2
     * @param param
     * @param value
     * @param perRow?
     */
    addParamToURL(param:string, value:string, perRow?:boolean): void;
}

/**
 * Return a new instance of nlobjTab used for scriptable tab or subtab.
 *
 * @classDescription high level grouping for fields on a data entry form (nlobjForm).
 * @return {nlobjTab}
 * @constructor
 */
declare interface nlobjTab {

    /**
     *
     * @return
     */
    new (): /* nlobjTab */ any;

    /**
     * set the label for this tab or subtab.
     *
     * @param {string} label string used as label for this tab or subtab
     * @return {nlobjTab}
     *
     * @since 2008.2
     * @param label
     * @return
     */
    setLabel(label:string): () => void;

    /**
     * set helper text for this tab or subtab.
     *
     * @param {string} help inline help text used for this tab or subtab
     * @return {nlobjTab}
     *
     * @since 2008.2
     * @param help
     * @return
     */
    setHelpText(help:string): () => void;
}

/**
 * Return a new instance of nlobjAssistantStep.
 *
 * @classDescription assistant step definition. Used to define individual steps/pages in multi-step workflows.
 * @return {nlobjAssistantStep}
 * @constructor
 *
 * @since 2009.2
 */
declare interface nlobjAssistantStep {

    /**
     *
     * @return
     */
    new (): /* nlobjAssistantStep */ any;

    /**
     * set the label for this assistant step.
     * @param {string} label display label used for this assistant step
     * @return {void}
     *
     * @method
     * @memberOf nlobjAssistantStep
     *
     * @since 2009.2
     * @param label
     * @return
     */
    setLabel(label:string): any;

    /**
     * set helper text for this assistant step.
     * @param {string} help inline help text to display on assistant page for this step
     * @return {nlobjAssistantStep}
     *
     * @method
     * @memberOf nlobjAssistantStep
     *
     * @since 2009.2
     * @param help
     * @return
     */
    setHelpText(help:string): () => void;

    /**
     * return the index of this step in the assistant page (1-based)
     * @return  {int} the index of this step in the assistant (1-based) based on the order in which the steps were added.
     *
     * @method
     * @memberOf nlobjAssistantStep
     *
     * @since 2009.2
     * @return
     */
    getStepNumber(): any;

    /**
     * return the value of a field entered by the user during this step.
     * @param {string} name field name
     * @return {string}
     *
     * @method
     * @memberOf nlobjAssistantStep
     *
     * @since 2009.2
     * @param name
     * @return
     */
    getFieldValue(name:string): string;

    /**
     * return the selected values of a multi-select field as an Array entered by the user during this step.
     * @param {string} name multi-select field name
     * @return {string[]}
     *
     * @method
     * @memberOf nlobjAssistantStep
     *
     * @since 2009.2
     * @param name
     */
    getFieldValues(name:string): string[];

    /**
     * return the number of lines previously entered by the user in this step (or -1 if the sublist does not exist).
     * @param {string} group sublist name
     * @return {int}
     *
     * @method
     * @memberOf nlobjAssistantStep
     *
     * @since 2009.2
     * @param group
     * @return
     */
    getLineItemCount(group:string): any;

    /**
     * return the value of a sublist field entered by the user during this step.
     * @param {string}    group sublist name
     * @param {string}    name sublist field name
     * @param {int}    line sublist (1-based)
     * @return  {string}
     *
     * @method
     * @memberOf nlobjAssistantStep
     *
     * @since 2009.2
     * @param group
     * @param name
     * @param line
     * @return
     */
    getLineItemValue(group:string, name:string, line:any): string;

    /**
     * return an array of the names of all fields entered by the user during this step.
     * @return {string[]}
     *
     * @method
     * @memberOf nlobjAssistantStep
     *
     * @since 2009.2
     */
    getAllFields(): string[];

    /**
     * return an array of the names of all sublists entered by the user during this step.
     * @return {string[]}
     *
     * @method
     * @memberOf nlobjAssistantStep
     *
     * @since 2009.2
     */
    getAllLineItems(): void;

    /**
     * return an array of the names of all sublist fields entered by the user during this step
     * @param {string} group sublist name
     * @return {string[]}
     *
     * @method
     * @memberOf nlobjAssistantStep
     *
     * @since 2009.2
     * @param group
     */
    getAllLineItemFields(group:string): void;
}

/**
 * Return a new instance of nlobjFieldGroup (currently only supported on nlobjAssistant pages)
 *
 * @classDescription object used for grouping fields on pages (currently only supported on assistant pages).
 * @return {nlobjFieldGroup}
 * @constructor
 *
 * @since 2009.2
 */
declare interface nlobjFieldGroup {

    /**
     *
     * @return
     */
    new (): /* nlobjFieldGroup */ any;

    /**
     * set the label for this field group.
     * @param {string} label display label for field group
     * @return {nlobjFieldGroup}
     *
     * @method
     * @memberOf nlobjFieldGroup
     *
     * @since 2009.2
     * @param label
     * @return
     */
    setLabel(label:string): () => void;

    /**
     * set collapsibility property for this field group.
     *
     * @param {boolean} collapsible if true then this field group is collapsible
     * @param {boolean} [defaultcollapsed] if true and the field group is collapsible, collapse this field group by default
     * @return {nlobjFieldGroup}
     *
     * @method
     * @memberOf nlobjFieldGroup
     *
     * @since 2009.2
     * @param collapsible
     * @param defaultcollapsed?
     * @return
     */
    setCollapsible(collapsible:boolean, defaultcollapsed?:boolean): () => void;

    /**
     * set singleColumn property for this field group.
     *
     * @param {boolean} singleColumn if true then this field group is displayed in single column
     * @return {nlobjFieldGroup}
     *
     * @method
     * @memberOf nlobjFieldGroup
     *
     * @since 2011.1
     * @param singleColumn
     * @return
     */
    setSingleColumn(singleColumn:boolean): () => void;

    /**
     * set showBorder property for this field group.
     *
     * @param {boolean} showBorder if true then this field group shows border including label of group
     * @return {nlobjFieldGroup}
     *
     * @method
     * @memberOf nlobjFieldGroup
     *
     * @since 2011.1
     * @param showBorder
     * @return
     */
    setShowBorder(showBorder:boolean): () => void;
}

/**
 * Return a new instance of nlobjButton.
 *
 * @classDescription buttons used for triggering custom behaviors on pages.
 * @return {nlobjButton}
 * @constructor
 *
 * @since 2009.2
 */
declare interface nlobjButton {

    /**
     *
     * @return
     */
    new (): nlobjButton;

    /**
     * set the label for this button.
     * @param {string} label display label for button
     * @return {nlobjButton}
     *
     * @method
     * @memberOf nlobjButton
     *
     * @since 2008.2
     * @param label
     * @return
     */
    setLabel(label:string): nlobjButton;

    /**
     * disable or enable button.
     * @param {boolean} disabled if true then this button should be disabled on the page
     * @return {nlobjButton}
     *
     * @method
     * @memberOf nlobjButton
     *
     * @since 2008.2
     * @param disabled
     * @return
     */
    setDisabled(disabled:boolean): nlobjButton;

    setVisible(visible:boolean): nlobjButton;
}

/**
 * Return a new instance of nlobjSelectOption.
 *
 * @classDescription select|radio option used for building select fields via the UI Object API and for describing select|radio fields.
 * @return {nlobjSelectOption}
 * @constructor
 *
 * @since 2009.2
 */
declare interface nlobjSelectOption {

    /**
     *
     * @return
     */
    new (): any;

    /**
     * return internal ID for select option
     * @return {string}
     *
     * @method
     * @memberOf nlobjSelectOption
     *
     * @since 2009.2
     * @return
     */
    getId(): string;

    /**
     * return display value for select option.
     * @return {string}
     *
     * @method
     * @memberOf nlobjSelectOption
     *
     * @since 2009.2
     * @return
     */
    getText(): string;
}

/**
 * @return nlobjLogin
 *
 * @since 2012.2
 */
declare function nlapiGetLogin():void;

/**
 * @param {string} Job Type
 * @return {nlobjJobManager}
 *
 * @since 2013.1
 * @param jobType
 * @return
 */
declare function nlapiGetJobManager(jobType:any):any;
