/* tslint:disable:unified-signatures no-misused-new */

/**
 * Scoped GlideRecord is used for database operations.
 */
interface ScopedGlideRecord {
    readonly sys_created_by: string & ScopedGlideElement;
    readonly sys_created_on: GlideDateTime & ScopedGlideElement;
    readonly sys_id: string & ScopedGlideElement;
    readonly sys_mod_count: number & ScopedGlideElement;
    readonly sys_updated_by: string & ScopedGlideElement;
    readonly sys_updated_on: GlideDateTime & ScopedGlideElement;
    variables: { [name: string]: any };
    [fieldName: string]: any;

    /**
     * Creates an instance of the GlideRecord class for the specified table.
     *
     * @param tableName The table to be used.
     * @example
     *
     * var gr = new GlideRecord('incident');
     */
    new (tableName: string): ScopedGlideRecord;

    /**
     * Adds a filter to return active records.
     *
     * @returns Filter to return active records.
     * @example
     *
     * var inc = new GlideRecord('incident');
     * inc.addActiveQuery();
     * inc.query();
     */
    addActiveQuery(): ScopedQueryCondition;

    /**
     * Adds an encoded query to other queries that may have been set.
     *
     * @param query An encoded query string
     * @example
     *
     * var queryString = "priority=1^ORpriority=2";
     * var gr = new GlideRecord('incident');
     * gr.addEncodedQuery(queryString);
     * gr.query();
     * while (gr.next()) {
     *   gs.addInfoMessage(gr.number);
     * }
     */
    addEncodedQuery(query: string): void;

    /**
     * Applies a pre-defined GlideDBFunctionBuilder object to a record.
     *
     * @param fun A GlideDBFunctionBuilder object that defines a SQL operation.
     * @returns Method does not return a value
     * @example
     *
     * var functionBuilder = new GlideDBFunctionBuilder();
     * var myAddingFunction = functionBuilder.add();
     * myAddingFunction = functionBuilder.field('order');
     * myAddingFunction = functionBuilder.field('priority');
     * myAddingFunction = functionBuilder.build();
     *
     * var gr = new GlideRecord('incident');
     * gr.addFunction(myAddingFunction);
     * gr.addQuery(myAddingFunction, '<', 5);
     * gr.query();
     * while(gr.next())
     *   gs.log(gr.getValue(myAddingFunction));
     *
     */
    addFunction(fun: string): void;

    /**
     * Adds a filter to return records based on a relationship in a related table.
     *
     * @param joinTable Table name
     * @param primaryField (Optional) If other than sys_id, the primary field
     * @param joinTableField (Optional) If other than sys_id, the field that joins the tables.
     * @returns A filter that lists records where the relationships match.
     * @example
     *
     * var prob = new GlideRecord('problem');
     * prob.addJoinQuery('incident');
     * prob.query();
     *
     * @example
     *
     * // Look for Problem records that have associated Incident records
     * var gr = new GlideRecord('problem');
     * var grSQ = gr.addJoinQuery('incident');
     * // Where the Problem records are "active=false"
     * gr.addQuery('active', 'false');
     * // And the Incident records are "active=true"
     * grSQ.addCondition('active', 'true');
     * // Query
     * gr.query();
     * // Iterate and output results
     * while (gr.next()) {
     *   gs.info(gr.getValue('number'));
     * }
     *
     * @example
     *
     * var gr = new GlideRecord('problem');
     * gr.addJoinQuery('incident', 'opened_by', 'caller_id');
     * gr.query();
     */
    addJoinQuery(
        joinTable: string,
        primaryField?: string,
        joinTableField?: string
    ): ScopedQueryCondition;

    /**
     * A filter that specifies records where the value of the field passed in the parameter is not
     * null.
     *
     * @param fieldName The name of the field to be checked.
     * @returns A filter that specifies records where the value of the field passed in the
     * parameter is not null.
     * @example
     *
     * var target = new GlideRecord('incident');
     * target.addNotNullQuery('short_description');
     * // Issue the query to the database to get all records where short_description is not null
     * target.query();
     * while (target.next()) {
     *   // add code here to process the incident record
     * }
     */
    addNotNullQuery(fieldName: string): ScopedQueryCondition;

    /**
     * Adds a filter to return records where the value of the specified field is null.
     *
     * @param fieldName The name of the field to be checked.
     * @returns The query condition added to the GlideRecord.
     * @example
     *
     * var target = new GlideRecord('incident');
     * target.addNullQuery('short_description');
     * // Issue the query to the database to get all records where short_description is null
     * target.query();
     * while (target.next()) {
     *   // add code here to process the incident record
     * }
     */
    addNullQuery(fieldName: string): ScopedQueryCondition;

    /**
     * Provides the ability to build a request, which when executed, returns the rows from the
     * specified table, that match the request.
     *
     * @param name Table field name.
     * @param value Value on which to query (not case-sensitive).
     * @returns The query condition added to the GlideRecord.
     * @example
     *
     * var rec = new GlideRecord('incident');
     * rec.addQuery('active', true);
     * rec.query();
     * while (rec.next()) {
     *   rec.active = false;
     *   gs.info('Active incident ' + rec.number + ' closed');
     *   rec.update();
     * }
     */
    addQuery(name: string, value: any): ScopedQueryCondition;

    /**
     * Provides the ability to build a request, which when executed, returns the rows from the
     * specified table, that match the request.
     *
     * @param name Table field name.
     * @param operator Query operator. The available values are dependent on the data type of the
     * value parameter.
     *
     * Numbers:
     * - =
     * - !=
     * - &gt;
     * - &gt;=
     * - &lt;
     * - &lt;=
     *
     * Strings (must be in upper case):
     * - =
     * - !=
     * - IN
     * - NOT IN
     * - STARTSWITH
     * - ENDSWITH
     * - CONTAINS
     * - DOES NOT CONTAIN
     * - INSTANCEOF
     *
     * @param value Value on which to query (not case-sensitive).
     * @returns The query condition that was added to the GlideRecord.
     * @example
     *
     * var rec = new GlideRecord('incident');
     * rec.addQuery('active', true);
     * rec.addQuery('sys_created_on', '>', '2010-01-19 04:05:00');
     * rec.query();
     * while (rec.next()) {
     *   rec.active = false;
     *   gs.info('Active incident ' + rec.number + ' closed');
     *   rec.update();
     * }
     *
     * @example Using the IN operator.
     *
     * var gr = new GlideRecord('incident');
     * gr.addQuery('number','IN','INC00001,INC00002');
     * gr.query();
     * while (gr.next()) {
     *   //do something....
     * }
     */
    addQuery(name: string, operator: QueryOperator, value: any): ScopedQueryCondition;

    /**
     * Adds a filter to return records using an encoded query string.
     *
     * @param query An encoded query string
     * @returns The query condition added to the GlideRecord.
     * @example
     *
     * var rec = new GlideRecord('incident');
     * rec.addQuery('active=true');
     * rec.query();
     * while (rec.next()) {
     *   rec.active = false;
     *   gs.info('Active incident ' + rec.number + ' closed');
     *   rec.update();
     * }
     */
    addQuery(query: string): ScopedQueryCondition;

    /**
     * Determines if the Access Control Rules, which include the user's roles, permit
     * inserting new records in this table.
     *
     * @returns True if the user's roles permit creation of new records in this
     * table.
     * @example
     *
     * var gr = new GlideRecord('incident');
     * gs.info(gr.canCreate());
     */
    canCreate(): boolean;

    /**
     * Determines if the Access Control Rules, which include the user's roles, permit deleting
     * records in this table.
     *
     * @returns True if the user's roles permit deletions of records in this table.
     * @example
     *
     * var att = new GlideRecord('sys_attachment');
     * gs.info(att.canDelete());
     */
    canDelete(): boolean;

    /**
     * Determines if the Access Control Rules, which include the user's roles, permit reading
     * records in this table.
     *
     * @returns True if the user's roles permit reading records from this table.
     * @example
     *
     * var gr = new GlideRecord('incident');
     * gs.info(gr.canRead());
     */
    canRead(): boolean;

    /**
     * Determines if the Access Control Rules, which include the user's roles, permit editing
     * records in this table.
     *
     * @returns True if the user's roles permit writing to records from this table.
     * @example
     *
     * var gr = new GlideRecord('incident');
     * gs.info(gr.canWrite());
     */
    canWrite(): boolean;

    /**
     * Sets a range of rows to be returned by subsequent queries.
     *
     * @param firstRow The first row to include.
     * @param lastRow The last row to include.
     * @param forceCount If true, the getRowCount() method will return all possible records.
     * @returns Method does not return a value
     * @example
     *
     * var gr = new GlideRecord('incident');
     * gr.orderBy('number');
     * gr.chooseWindow(2, 4);
     * gr.query();
     * if (gr.next()) {
     *   gs.info(gr.number + ' is within window');
     * }
     */
    chooseWindow(firstRow: number, lastRow: number, forceCount?: boolean): void;

    /**
     * Returns the number of milliseconds since January 1, 1970, 00:00:00 GMT for a duration field.
     * Does not require the creation of a GlideDateTime object because the duration field is already a
     * GlideDateTime object.
     *
     * @returns Number of milliseconds since January 1, 1970, 00:00:00 GMT.
     * @example
     *
     * var inc = new GlideRecord('incident');
     * inc.get('17c90efb13418700cc36b1422244b05d');
     * gs.info(inc.calendar_duration.dateNumericValue());
     */
    dateNumericValue(): number;

    /**
     * Deletes multiple records that satisfy the query condition.
     *
     * @example
     *
     * var gr = new GlideRecord('incident')
     * gr.addQuery('active','false'); //to delete all inactive incidents
     * gr.deleteMultiple();
     */
    deleteMultiple(): void;

    /**
     * Deletes the current record.
     *
     * @returns True if the record was deleted; false if no record was found to delete.
     * @example
     *
     * var gr = new GlideRecord('incident')
     * gr.addQuery('sys_id','99ebb4156fa831005be8883e6b3ee4b9'); //to delete one record
     * gr.query();
     * gr.next();
     * gr.deleteRecord();
     */
    deleteRecord(): boolean;

    /**
     * Defines a GlideRecord based on the specified expression of 'name = value'.
     *
     * @param name Column name to match (if two arguments are specified), or sys_id (if one is
     * specified)
     * @param [value] Value to match. If value is not specified, then the expression used is
     * 'sys_id = name'.
     * @returns True if one or more matching records was found. False if no matches
     * found.
     * @example
     *
     * var gr = new GlideRecord('incident');
     * gr.get('99ebb4156fa831005be8883e6b3ee4b9');
     * gs.info(gr.number);
     */
    get(name: string, value?: string): boolean;

    /**
     * Returns the dictionary attributes for the specified field.
     *
     * @param fieldName Field name for which to return the dictionary attributes
     * @returns Dictionary attributes
     * @example
     *
     * doit();
     * function doit() {
     *   var gr = new GlideRecord('sys_user');
     *   gr.query("user_name","admin");
     *   if (gr.next()) {
     *     gs.print("we got one");
     *     gs.print(gr.location.getAttribute("tree_picker"));
     *   }
     * }
     */
    getAttribute(fieldName: string): string;

    /**
     * Returns the table's label.
     *
     * @returns Table's label
     */
    getClassDisplayValue(): string;

    /**
     * Retrieves the display value for the current record.
     *
     * @returns The display value for the current record.
     * @example
     *
     * var gr = new GlideRecord('incident');
     * gr.get('sys_id','ef43c6d40a0a0b5700c77f9bf387afe3');
     * gs.info(gr.getDisplayValue());
     */
    getDisplayValue(field?: string): string;

    /**
     * Returns the element's descriptor.
     *
     * @returns Element's descriptor
     * @example
     *
     * var gr = new GlideRecord('incident');
     * var ed = gr.getED();
     * gs.info(ed.getLabel());
     * // Incident
     */
    getED(): ScopedElementDescriptor;

    /**
     * Retrieves the GlideElement object for the specified field.
     *
     * @param columnName Name of the column to get the element from.
     * @returns The GlideElement for the specified column of the current record.
     * @example
     *
     * var elementName = 'short_description';
     * var gr = new GlideRecord('incident');
     * gr.initialize();
     * gr.setValue(elementName, "My DB is not working");
     * gr.insert();
     * gs.info(gr.getElement('short_description'));
     */
    getElement(columnName: string): ScopedGlideElement;

    /**
     * Returns an array of GlideElements for the current record.
     *
     * @returns The array of GlideElements for the current record.
     */
    getElements(): [ScopedGlideElement];

    /**
     * Retrieves the query condition of the current result set as an encoded query string.
     *
     * @returns The encoded query as a string.
     * @example
     *
     * var gr = new GlideRecord('incident');
     * gr.addQuery('active', true);
     * gr.addQuery('priority', 1);
     * gr.query();
     * var encodedQuery = gr.getEncodedQuery();
     * gs.info(encodedQuery);
     */
    getEncodedQuery(): string;

    /**
     * Returns the field's label.
     *
     * @returns Field's label
     * @example
     *
     * var gr = new GlideRecord('incident');
     * gs.info(gr.getLabel());
     * // Incident
     */
    getLabel(): string;

    /**
     * Retrieves the last error message. If there is no last error message, null is returned.
     *
     * @returns The last error message as a string.
     * @example
     *
     * // Setup a data policy where short_description field in incident is mandatory
     * var gr = new GlideRecord('incident');
     * gr.insert(); // insert without data in mandatory field
     * var errormessage = gr.getLastErrorMessage();
     * gs.info(errormessage);
     */
    getLastErrorMessage(): string;

    /**
     * Retrieves a link to the current record.
     *
     * @param noStack If true, the sysparm_stack parameter is not appended to the link.
     * The parameter sysparm_stack specifies the page to visit after closing the current link.
     * @returns A link to the current record as a string.
     * @example
     *
     * gr = new GlideRecord('incident');
     * gr.addActiveQuery();
     * gr.addQuery("priority", 1);
     * gr.query();
     * gr.next()
     * gs.info(gs.getProperty('glide.servlet.uri') + gr.getLink(false));
     */
    getLink(noStack: boolean): string;

    /**
     * Retrieves the class name for the current record.
     *
     * @returns The class name.
     * @example
     *
     * var gr = new GlideRecord('incident');
     * var recordClassName = gr.getRecordClassName();
     * gs.info(recordClassName);
     */
    getRecordClassName(): string;

    /**
     * Retrieves the number of rows in the query result.
     *
     * @returns The number of rows.
     * @example
     *
     * var gr = new GlideRecord('incident')
     * gr.query();
     * gs.info("Records in incident table: " + gr.getRowCount());
     */
    getRowCount(): number;

    /**
     * Retrieves the name of the table associated with the GlideRecord.
     *
     * @returns The table name
     * @example
     *
     * var gr = new GlideRecord('incident');
     * gs.info(gr.getTableName());
     */
    getTableName(): string;

    /**
     * Gets the primary key of the record, which is usually the sys_id unless otherwise
     * specified.
     *
     * @returns The unique primary key as a String, or null if the key is null.
     * @example
     *
     * var gr = new GlideRecord('kb_knowledge');
     * gr.query();
     * gr.next();
     * var uniqueid = gr.getUniqueValue();
     * gs.info(uniqueid);
     */
    getUniqueValue(): string;

    /**
     * Retrieves the string value of an underlying element in a field.
     *
     * @param name The name of the field to get the value from.
     * @returns The value of the field.
     * @example
     *
     * var gr = new GlideRecord('incident');
     * gr.orderBy('number');
     * gr.query('active','true');
     * gr.next() ;
     * gs.info(gr.getValue('number'));
     */
    getValue(name: string): string;

    /**
     * Determines if there are any more records in the GlideRecord object.
     *
     * @returns True if there are more records in the query result set.
     * @example
     *
     * var rec = new GlideRecord('incident');
     * rec.query();
     * if (rec.hasNext()) {
     * gs.info("Table is not empty");
     * }
     */
    hasNext(): boolean;

    /**
     * Creates an empty record suitable for population before an insert.
     *
     * @example
     *
     * var gr = new GlideRecord('incident');
     * gr.initialize();
     * gr.name='New Incident';
     * gr.description='Incident description';
     * gr.insert();
     */
    initialize(): void;

    /**
     * Inserts a new record using the field values that have been set for the current record.
     *
     * @returns Unique ID of the inserted record, or null if the record is not inserted.
     * @example
     *
     * var gr = new GlideRecord('incident');
     * gr.initialize();
     * gr.name = 'New Incident';
     * gr.description = 'Incident description';
     * gr.insert();
     */
    insert(): string;

    /**
     * Checks to see if the current database action is to be aborted.
     *
     * @returns True if the current database action is to be aborted
     * @example
     *
     * var gr = new GlideRecord('incident');
     * gs.info(gr.isActionAborted());
     */
    isActionAborted(): boolean;

    /**
     * Checks if the current record is a new record that has not yet been inserted into the database.
     *
     * @returns True if the record is new and has not been inserted into the database.
     * @example
     *
     * var gr = new GlideRecord("x_app_table");
     * gr.newRecord(); // create a new record and populate it with default values
     * gs.info(gr.isNewRecord());
     */
    isNewRecord(): boolean;

    /**
     * Determines if the table exists.
     *
     * @returns True if table is valid or if record was successfully retrieved. False if table is
     * invalid or record was not successfully retrieved.
     * @example
     *
     * var gr = new GlideRecord('incident');
     * gs.info(gr.isValid());
     * var anotherGr = new GlideRecord('wrong_table_name');
     * gs.info(anotherGr.isValid());
     */
    isValid(): boolean;

    /**
     * Determines if the specified field is defined in the current table.
     *
     * @param columnName The name of the the field.
     * @returns True if the field is defined for the current table.
     * @example
     *
     * var gr = new GlideRecord('incident');
     * gr.initialize();
     * gs.info(gr.isValidField("short_description"));
     */
    isValidField(columnName: string): boolean;

    /**
     * Determines if current record is a valid record.
     *
     * @returns True if the current record is valid. False if past the end of the record set.
     * @example
     *
     * var rec = new GlideRecord('incident');
     * rec.query();
     * while (rec.next()) {
     *   gs.info(rec.number + ' exists');
     * }
     * gs.info(rec.isValidRecord());
     */
    isValidRecord(): boolean;

    /**
     * Creates a new GlideRecord record, sets the default values for the fields, and assigns a unique
     * ID to the record.
     *
     * @example
     *
     * var gr = new GlideRecord("x_app_table");
     * gr.newRecord();
     * gs.info(gr.isNewRecord());
     */
    newRecord(): void;

    /**
     * Moves to the next record in the GlideRecord object.
     *
     * @returns True if moving to the next record is successful. False if there are no more records in
     * the result set.
     * @example
     *
     * var rec = new GlideRecord('incident');
     * rec.query();
     * while (rec.next()) {
     *   gs.info(rec.number + ' exists');
     * }
     */
    next(): boolean;

    /**
     * Retrieves the current operation being performed, such as insert, update, or delete.
     *
     * @returns The current operation.
     * @example
     *
     * // Commonly used in a business rule, returns insert if the current operation is insert
     * gs.info("current operation " + current.operation());
     */
    operation(): GlideRecordOperation;

    /**
     * Specifies an orderBy column.
     *
     * @param name The column name used to order the records in this GlideRecord object.
     * @example
     *
     * var queryString = "priority=2";
     * var gr = new GlideRecord('incident');
     * gr.orderBy('short_description'); // Ascending Order
     * gr.addEncodedQuery(queryString);
     * gr.query();
     * while (gr.next()) {
     *   gs.info(gr.short_description);
     * }
     */
    orderBy(name: string): void;

    /**
     * Specifies a decending orderBy column.
     *
     * @param name The column name to be used to order the records in a GlideRecord object.
     * @example
     *
     * var queryString = "priority=2";
     * var gr = new GlideRecord('incident');
     * gr.orderByDesc('short_description'); //Descending Order
     * gr.addEncodedQuery(queryString);
     * gr.query();
     * while (gr.next()) {
     *   gs.info(gr.short_description);
     * }
     */
    orderByDesc(name: string): void;

    /**
     * Runs the query against the table based on the filters specified by addQuery, addEncodedQuery,
     * etc.
     *
     * This queries the GlideRecord table as well as any references of the table. Usually this is
     * performed without arguments. If name/value pair is specified, "name=value" condition is added
     * to the query.
     *
     * @param field The column name to query on.
     * @param value The value to query for.
     * @example
     *
     * var rec = new GlideRecord('incident');
     * rec.query();
     * while (rec.next()) {
     *   gs.info(rec.number + ' exists');
     * }
     */
    query(field?: string, value?: any): void;

    /**
     * Sets a flag to indicate if the next database action (insert, update, delete) is to be aborted.
     * This is often used in business rules.
     *
     * @param b True to abort the next action. False if the action is to be allowed.
     * @example
     *
     * // Often used in business rule to check whether the current operation should be aborted.
     * if (current.size > 16) {
     *   current.setAbortAction(true);
     * }
     */
    setAbortAction(b: boolean): void;

    /**
     * Scoped API docs include `setDateNumericValue` but it is not a valid method.
     * When called, it throws:
     *   org.mozilla.javascript.EcmaError: Cannot find function setDateNumericValue in object
     *   [object GlideRecord].
     */
    // setDateNumericValue(milliseconds: number): void;

    /**
     * Sets the limit for number of records are fetched by the GlideRecord query.
     *
     * @param maxNumRecords The maximum number of records to fetch.
     * @example
     *
     * var gr = new GlideRecord('incident');
     * gr.orderByDesc('sys_created_on');
     * gr.setLimit(10);
     * gr.query(); // this retrieves latest 10 incident records created
     */
    setLimit(maxNumRecords: number): void;

    /**
     * Sets sys_id value for the current record.
     *
     * @param guid The GUID to be assigned to the current record.
     * @example
     *
     * var gr = new GlideRecord('incident');
     * gr.short_description='The third floor printer is broken';
     * gr.setNewGuidValue('eb4636ca6f6d31005be8883e6b3ee333');
     * gr.insert();
     * gs.info(gr.sys_id);
     */
    setNewGuidValue(guid: string): void;

    /**
     * Sets the value of the field with the specified name to the specified value.
     *
     * @param name Name of the field.
     * @param value The value to assign to the field.
     * @example
     *
     * var elementName = 'short_description';
     * var gr = new GlideRecord('incident');
     * gr.initialize();
     * gr.setValue(elementName, "My DB is not working");
     * gr.insert();
     */
    setValue(name: string, value: any): void;

    /**
     * Enables or disables the running of business rules, script engines, and audit.
     *
     * @param enable If true (default), enables business rules. If false, disables business
     * rules.
     * @example
     *
     * //Enable business rules, scripts engines for x_app_table
     * var gr = new GlideRecord("x_app_table");
     * gr.setWorkflow(true);
     */
    setWorkflow(enable: boolean): void;

    /**
     * Updates the GlideRecord with any changes that have been made. If the record does not already
     * exist, it is inserted.
     *
     * @param [reason] The reason for the update. The reason is displayed in the audit record.
     * @returns Unique ID of the new or updated record. Returns null if the update fails.
     * @example
     *
     * var gr = new GlideRecord('incident')
     * gr.get('99ebb4156fa831005be8883e6b3ee4b9');
     * gr.short_description='Update the short description';
     * gr.update();
     * gs.info(gr.getElement('short_description'));
     */
    update(reason?: string): string;

    /**
     * Updates each GlideRecord in the list with any changes that have been made.
     *
     * @example
     *
     * // update the state of all active incidents to 4 - "Awaiting User Info"
     * var gr = new GlideRecord('incident')
     * gr.addQuery('active', true);
     * gr.query();
     * gr.setValue('state',  4);
     * gr.updateMultiple();
     */
    updateMultiple(): void;

    /**
     * Moves to the next record in the GlideRecord. Provides the same functionality as next(), it is
     * intended to be used in cases where the GlideRecord has a column named next.
     *
     * @returns True if there are more records in the query set.
     * @example
     *
     * var rec = new GlideRecord('sys_template');
     * rec.query();
     * while (rec._next()) {
     *   gs.print(rec.number + ' exists');
     * }
     */
    _next(): boolean;

    /**
     * Identical to query(). This method is intended to be used on tables where there is a column
     * named query, which would interfere with using the query() method.
     *
     * @param name Column name on which to query
     * @param value Value for which to query
     * @example
     *
     * var rec = new GlideRecord('sys_app_module');
     * rec._query();
     * while (rec.next()) {
     *   gs.print(rec.number + ' exists');
     * }
     */
    _query(name?: string, value?: any): void;
}
