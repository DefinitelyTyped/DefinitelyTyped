/// <reference path="google-apps-script.types.d.ts" />

declare namespace GoogleAppsScript {
    namespace Data_Studio {
        /**
         * An enum that defines the aggregation types that can be set for a Field.
         */
        enum AggregationType {
            AVG,
            COUNT,
            COUNT_DISTINCT,
            MAX,
            MIN,
            SUM,
            AUTO,
            NO_AGGREGATION,
        }
        /**
         * An enum that defines the authentication types that can be set for a connector.
         */
        enum AuthType {
            NONE,
            OAUTH2,
            USER_PASS,
            KEY,
            USER_TOKEN,
        }
        /**
         * A configuration object for a native BigQuery connector. Return this object from getData()
         * for Data Studio to query BigQuery for the connector.
         *
         *     var cc = DataStudioApp.createCommunityConnector();
         *     var types = cc.BigQueryParameterType;
         *
         *     var bqConfig = cc.newBigQueryConfig()
         *       .setBillingProjectId('billingProjectId')
         *       .setQuery('queryString')
         *       .setUseStandardSql(true)
         *       .setAccessToken('accessToken')
         *       .addQueryParameter('dob', types.STRING, '01011990')
         *       .build();
         */
        interface BigQueryConfig {
            addQueryParameter(name: string, type: BigQueryParameterType, value: string): BigQueryConfig;
            build(): Config;
            printJson(): string;
            setAccessToken(accessToken: string): BigQueryConfig;
            setBillingProjectId(billingProjectId: string): BigQueryConfig;
            setQuery(query: string): BigQueryConfig;
            setUseStandardSql(useStandardSql: boolean): BigQueryConfig;
        }
        /**
         * An enum that defines the BigQuery parameter types that you can set.
         */
        enum BigQueryParameterType {
            STRING,
            INT64,
            BOOL,
            FLOAT64,
        }
        /**
         * Contains checkbox information for the config. Its properties determine how the checkbox is
         * displayed in Data Studio.
         *
         *     var checkbox = config.newCheckbox()
         *       .setId("use_https")
         *       .setName("Use Https?")
         *       .setHelpText("Whether or not https should be used.")
         *       .setAllowOverride(true);
         */
        interface Checkbox {
            setAllowOverride(allowOverride: boolean): Checkbox;
            setHelpText(helpText: string): Checkbox;
            setId(id: string): Checkbox;
            setIsDynamic(isDynamic: boolean): Checkbox;
            setName(name: string): Checkbox;
        }
        /**
         * CommunityConnector enables scripts to access builders and utilities to help with development of
         * Community Connectors for Data Studio. Use this class to get a reference to the Fields
         * object and the FieldType and AggregationType enums so they can be used in the
         * construction of Fields.
         *
         *     var cc = DataStudioApp.createCommunityConnector();
         *     var fieldType = cc.FieldType;
         *     var aggregationType = cc.AggregationType;
         *
         *     var fields = cc.getFields();
         *
         *     fields.newMetric()
         *       .setAggregation(aggregationType.AVG)
         *       .setType(fieldType.CURRENCY_USD);
         */
        interface CommunityConnector {
            AggregationType: typeof AggregationType;
            AuthType: typeof AuthType;
            BigQueryParameterType: typeof BigQueryParameterType;
            FieldType: typeof FieldType;
            getConfig(): Config;
            getFields(): Fields;
            newAuthTypeResponse(): GetAuthTypeResponse;
            newBigQueryConfig(): BigQueryConfig;
            newDebugError(): DebugError;
            newGetDataResponse(): GetDataResponse;
            newGetSchemaResponse(): GetSchemaResponse;
            newSetCredentialsResponse(): SetCredentialsResponse;
            newUserError(): UserError;
        }
        /**
         * Contains the configuration entries for a connector. These configuration entries define what
         * questions are asked when adding a new connector.
         *
         *     var cc = DataStudioApp.createCommunityConnector();
         *     var config = cc.getConfig();
         *
         *     var info_entry = config.newInfo()
         *       .setId("info_id")
         *       .setHelpText("This connector can connect to multiple data endpoints.");
         */
        interface Config {
            build(): Config;
            newCheckbox(): Checkbox;
            newInfo(): Info;
            newOptionBuilder(): OptionBuilder;
            newSelectMultiple(): SelectMultiple;
            newSelectSingle(): SelectSingle;
            newTextArea(): TextArea;
            newTextInput(): TextInput;
            printJson(): string;
            setDateRangeRequired(dateRangeRequired: boolean): Config;
            setIsSteppedConfig(isSteppedConfig: boolean): Config;
        }
        /**
         * DataStudioApp allows scripts to interact with developer-oriented features for Data Studio.
         */
        interface DataStudioApp {
            createCommunityConnector(): CommunityConnector;
        }
        /**
         * An error that is only visible to admins of the connector.
         *
         *     var cc = DataStudioApp.createCommunityConnector();
         *
         *     cc.newDebugError()
         *       .setText("This is the debug error text.")
         *       .throwException();
         */
        interface DebugError {
            printJson(): string;
            setText(text: string): DebugError;
            throwException(): never;
        }
        /**
         * Contains field-related data. Its properties determine how the field is used in Data Studio.
         *
         *     var cc = DataStudioApp.createCommunityConnector();
         *     var fields = cc.getFields();
         *     var types = cc.FieldType;
         *
         *     var field1 = fields.newDimension()
         *       .setId('field1_id')
         *       .setName('Field 1 ID')
         *       .setDescription('The first field.')
         *       .setType(types.YEAR_MONTH)
         *       .setGroup('DATETIME');
         */
        interface Field {
            getAggregation(): AggregationType | null;
            getDescription(): string | null;
            getFormula(): string | null;
            getGroup(): string | null;
            getId(): string | null;
            getIsReaggregatable(): boolean | null;
            getName(): string | null;
            getType(): FieldType | null;
            isDefault(): boolean;
            isDimension(): boolean;
            isHidden(): boolean;
            isMetric(): boolean;
            setAggregation(aggregation: AggregationType): Field;
            setDescription(description: string): Field;
            setFormula(formula: string): Field;
            setGroup(group: string): Field;
            setId(id: string): Field;
            setIsHidden(isHidden: boolean): Field;
            setIsReaggregatable(isReaggregatable: boolean): Field;
            setName(name: string): Field;
            setType(type: FieldType): Field;
        }
        /**
         * An enum that defines the types that can be set for a Field.
         */
        enum FieldType {
            YEAR,
            YEAR_QUARTER,
            YEAR_MONTH,
            YEAR_WEEK,
            YEAR_MONTH_DAY,
            YEAR_MONTH_DAY_HOUR,
            YEAR_MONTH_DAY_SECOND,
            QUARTER,
            MONTH,
            WEEK,
            MONTH_DAY,
            DAY_OF_WEEK,
            DAY,
            HOUR,
            MINUTE,
            DURATION,
            COUNTRY,
            COUNTRY_CODE,
            CONTINENT,
            CONTINENT_CODE,
            SUB_CONTINENT,
            SUB_CONTINENT_CODE,
            REGION,
            REGION_CODE,
            CITY,
            CITY_CODE,
            METRO,
            METRO_CODE,
            LATITUDE_LONGITUDE,
            NUMBER,
            PERCENT,
            TEXT,
            BOOLEAN,
            URL,
            HYPERLINK,
            IMAGE,
            IMAGE_LINK,
            CURRENCY_AED,
            CURRENCY_ALL,
            CURRENCY_ARS,
            CURRENCY_AUD,
            CURRENCY_BDT,
            CURRENCY_BGN,
            CURRENCY_BOB,
            CURRENCY_BRL,
            CURRENCY_CAD,
            CURRENCY_CDF,
            CURRENCY_CHF,
            CURRENCY_CLP,
            CURRENCY_CNY,
            CURRENCY_COP,
            CURRENCY_CRC,
            CURRENCY_CZK,
            CURRENCY_DKK,
            CURRENCY_DOP,
            CURRENCY_EGP,
            CURRENCY_ETB,
            CURRENCY_EUR,
            CURRENCY_GBP,
            CURRENCY_HKD,
            CURRENCY_HRK,
            CURRENCY_HUF,
            CURRENCY_IDR,
            CURRENCY_ILS,
            CURRENCY_INR,
            CURRENCY_IRR,
            CURRENCY_ISK,
            CURRENCY_JMD,
            CURRENCY_JPY,
            CURRENCY_KRW,
            CURRENCY_LKR,
            CURRENCY_LTL,
            CURRENCY_MNT,
            CURRENCY_MVR,
            CURRENCY_MXN,
            CURRENCY_MYR,
            CURRENCY_NOK,
            CURRENCY_NZD,
            CURRENCY_PAB,
            CURRENCY_PEN,
            CURRENCY_PHP,
            CURRENCY_PKR,
            CURRENCY_PLN,
            CURRENCY_RON,
            CURRENCY_RSD,
            CURRENCY_RUB,
            CURRENCY_SAR,
            CURRENCY_SEK,
            CURRENCY_SGD,
            CURRENCY_THB,
            CURRENCY_TRY,
            CURRENCY_TWD,
            CURRENCY_TZS,
            CURRENCY_UAH,
            CURRENCY_USD,
            CURRENCY_UYU,
            CURRENCY_VEF,
            CURRENCY_VND,
            CURRENCY_YER,
            CURRENCY_ZAR,
        }
        /**
         * Contains a set of Fields for a community connector. This set of fields define which
         * dimensions and metrics can be used in Data Studio.
         *
         *     var cc = DataStudioApp.createCommunityConnector();
         *     var fields = cc.getFields();
         *     var types = cc.FieldType;
         *
         *     var field1 = fields.newDimension()
         *       // Set other properties as needed.
         *       .setId('field1_id');
         */
        interface Fields {
            asArray(): Field[];
            build(): any[];
            forIds(ids: string[]): Fields;
            getDefaultDimension(): Field | null;
            getDefaultMetric(): Field | null;
            getFieldById(fieldId: string): Field | null;
            newDimension(): Field;
            newMetric(): Field;
            setDefaultDimension(fieldId: string): void;
            setDefaultMetric(fieldId: string): void;
        }
        /**
         * Builder to create a getAuthType() response for your script project.
         *
         *     function getAuthType() {
         *       var cc = DataStudioApp.createCommunityConnector();
         *       var authTypes = cc.AuthType;
         *
         *       return cc.newGetAuthTypeResponse()
         *         .setAuthType(authTypes.USER_PASS)
         *         .setHelpUrl("https://www.example.org/connector-auth-help")
         *         .build();
         *     }
         */
        interface GetAuthTypeResponse {
            build(): GetAuthTypeResponse;
            printJson(): string;
            setAuthType(authType: AuthType): GetAuthTypeResponse;
            setHelpUrl(helpUrl: string): GetAuthTypeResponse;
        }
        /**
         * Builder to create a getData() response for your script project.
         *
         *     function getFields() {...}
         *     function getData() {
         *       var cc = DataStudioApp.createCommunityConnector();
         *
         *       return cc.newGetDataResponse()
         *         .setFields(getFields())
         *         .addRow(['3', 'Foobar.com'])
         *         .addRow(['4', 'Foobaz.com'])
         *         .addRows([
         *           ['5', 'Fizzbuz.com'],
         *           ['6', 'Fizzbaz.com']
         *          ])
         *         .build();
         *     }
         */
        interface GetDataResponse {
            addAllRows(rows: string[][]): GetDataResponse;
            addRow(row: string[]): GetDataResponse;
            build(): any;
            setFields(fields: Fields): GetDataResponse;
            setFiltersApplied(filtersApplied: boolean): GetDataResponse;
        }
        /**
         * Builder to create a getSchema() response for your script project.
         *
         *     function getSchema() {
         *       var cc = DataStudioApp.createCommunityConnector();
         *       var fields = cc.getFields();
         *       var types = cc.FieldType;
         *
         *       fields.newDimension()
         *           .setId('Created')
         *           .setName('Date Created')
         *           .setDescription('The date that this was created')
         *           .setType(types.YEAR_MONTH_DAY);
         *
         *       fields.newMetric()
         *           .setId('Amount')
         *           .setName('Amount (USD)')
         *           .setDescription('The cost in US dollars')
         *           .setType(types.CURRENCY_USD);
         *
         *       return cc.newGetSchemaResponse()
         *           .setFields(fields)
         *           .build();
         *     }
         */
        interface GetSchemaResponse {
            build(): any;
            printJson(): string;
            setFields(fields: Fields): GetSchemaResponse;
        }
        /**
         * Contains info data for the config. Its properties determine how the info is displayed in Data
         * Studio.
         *
         *     var cc = DataStudioApp.createCommunityConnector();
         *     var config = cc.getConfig();
         *
         *     var info1 = config.newInfo()
         *       .setId("info1")
         *       .setText("This text gives some context on the configuration.");
         */
        interface Info {
            setId(id: string): Info;
            setText(text: string): Info;
        }
        /**
         * A builder for creating options for SelectSingles and SelectMultiples.
         *
         *     var cc = DataStudioApp.createCommunityConnector();
         *     var config = cc.getConfig();
         *
         *     var option1 = config.newOptionBuilder()
         *       .setLabel("option label")
         *       .setValue("option_value");
         *
         *     var option2 = config.newOptionBuilder()
         *       .setLabel("second option label")
         *       .setValue("option_value_2");
         *
         *     var info1 = config.newSelectSingle()
         *       .setId("api_endpoint")
         *       .setName("Data Type")
         *       .setHelpText("Select the data type you're interested in.")
         *       .addOption(option1)
         *       .addOption(option2);
         */
        interface OptionBuilder {
            setLabel(label: string): OptionBuilder;
            setValue(value: string): OptionBuilder;
        }
        /**
         * Contains select multiple information for the config. Its properties determine how the select
         * multiple is displayed in Data Studio.
         *
         * Usage:
         *
         *     var option1 = config.newOptionBuilder()
         *       .setLabel("option label")
         *       .setValue("option_value");
         *
         *     var option2 = config.newOptionBuilder()
         *       .setLabel("second option label")
         *       .setValue("option_value_2");
         *
         *     var info1 = config.newSelectMultiple()
         *       .setId("api_endpoint")
         *       .setName("Data Type")
         *       .setHelpText("Select the data type you're interested in.")
         *       .setAllowOverride(true)
         *       .addOption(option1)
         *       .addOption(option2);
         */
        interface SelectMultiple {
            addOption(optionBuilder: OptionBuilder): SelectMultiple;
            setAllowOverride(allowOverride: boolean): SelectMultiple;
            setHelpText(helpText: string): SelectMultiple;
            setId(id: string): SelectMultiple;
            setIsDynamic(isDynamic: boolean): SelectMultiple;
            setName(name: string): SelectMultiple;
        }
        /**
         * Contains select single information for the config. Its properties determine how the select single
         * is displayed in Data Studio.
         *
         *     var option1 = config.newOptionBuilder()
         *       .setLabel("option label")
         *       .setValue("option_value");
         *
         *     var option2 = config.newOptionBuilder()
         *       .setLabel("second option label")
         *       .setValue("option_value_2");
         *
         *     var info1 = config.newSelectSingle()
         *       .setId("api_endpoint")
         *       .setName("Data Type")
         *       .setHelpText("Select the data type you're interested in.")
         *       .setAllowOverride(true)
         *       .addOption(option1)
         *       .addOption(option2);
         */
        interface SelectSingle {
            addOption(optionBuilder: OptionBuilder): SelectSingle;
            setAllowOverride(allowOverride: boolean): SelectSingle;
            setHelpText(helpText: string): SelectSingle;
            setId(id: string): SelectSingle;
            setIsDynamic(isDynamic: boolean): SelectSingle;
            setName(name: string): SelectSingle;
        }
        /**
         * Builder to create a setCredentials() response for your script project.
         *
         *     function setCredentials(request) {
         *       var isValid = checkForValidCreds(request);
         *
         *       if (isValid) {
         *         // store the creds somewhere.
         *       }
         *
         *       return cc.newSetCredentialsResponse()
         *         .setIsValid(isValid)
         *         .build();
         *     }
         */
        interface SetCredentialsResponse {
            build(): any;
            printJson(): string;
            setIsValid(isValid: boolean): SetCredentialsResponse;
        }
        /**
         * Contains text area information for the config. Its properties determine how the text input is
         * displayed in Data Studio.
         *
         * Usage:
         *
         *     var cc = DataStudioApp.createCommunityConnector();
         *     var config = cc.getConfig();
         *
         *     var textArea1 = config.newTextArea()
         *       .setId("textArea1")
         *       .setName("Search")
         *       .setHelpText("for example, Coldplay")
         *       .setAllowOverride(true)
         *       .setPlaceholder("Search for an artist for all songs.");
         */
        interface TextArea {
            setAllowOverride(allowOverride: boolean): TextArea;
            setHelpText(helpText: string): TextArea;
            setId(id: string): TextArea;
            setIsDynamic(isDynamic: boolean): TextArea;
            setName(name: string): TextArea;
            setPlaceholder(placeholder: string): TextArea;
        }
        /**
         * Contains text input information for the config. Its properties determine how the text input is
         * displayed in Data Studio.
         *
         *     var cc = DataStudioApp.createCommunityConnector();
         *     var config = cc.getConfig();
         *
         *     var info1 = config.newTextInput()
         *       .setId("info1")
         *       .setName("Search")
         *       .setHelpText("for example, Coldplay")
         *       .setAllowOverride(true)
         *       .setPlaceholder("Search for an artist for all songs.");
         */
        interface TextInput {
            setAllowOverride(allowOverride: boolean): TextInput;
            setHelpText(helpText: string): TextInput;
            setId(id: string): TextInput;
            setIsDynamic(isDynamic: boolean): TextInput;
            setName(name: string): TextInput;
            setPlaceholder(placeholder: string): TextInput;
        }
        /**
         * An error that is shown to users of the connector.
         *
         *     var cc = DataStudioApp.createCommunityConnector();
         *
         *     cc.newUserError()
         *       .setText("This is the debug error text.")
         *       .setDebugText("This text is only shown to admins.")
         *       .throwException();
         */
        interface UserError {
            printJson(): string;
            setDebugText(text: string): UserError;
            setText(text: string): UserError;
            throwException(): never;
        }
        /**
         * function getData(request: GoogleAppsScript.Data_Studio.Request<YourConnectorParams>)
         *
         * See https://developers.google.com/datastudio/connector/reference#getdata
         */
        interface Request<T> {
            /** An object containing the user provided values for the config parameters defined by the connector. */
            configParams: T;
            /** An object containing information relevant to connector execution. */
            scriptParams: ScriptParams;
            /**
             * By default, the date range provided will be the last 28 days excluding today.
             * If a user applies a date range filter for a report, then the date range provided will reflect the user selection.
             * When sampleExtraction is set to true, the date two days earlier than today is given as both the start and end date.
             */
            dateRange: DateRange;
            /** The names of the requested fields. */
            fields: Array<{ name: string }>;
            /**
             * A nested array of the user selected filters.
             * The innermost arrays should be ORed together, the outermost arrays should be ANDed together.
             */
            dimensionsFilters: DimensionsFilters[][];
        }
        interface DateRange {
            /** The start date for filtering the data. Applies only if dateRangeRequired is set to true. It will be in YYYY-MM-DD format. */
            startDate: string;
            /** The end date for filtering the data. Applies only dateRangeRequired is set to true. It will be in YYYY-MM-DD format. */
            endDate: string;
        }
        interface ScriptParams {
            /** If true, the getData() request is for automatic semantic type detection. */
            sampleExtraction?: boolean | undefined;
            /** A timestamp that marks the most recent request for a refresh of data. */
            lastRefresh: string;
        }
        type RegexpOperator = "REGEXP_PARTIAL_MATCH" | "REGEXP_EXACT_MATCH";
        type NumericOperator =
            | "NUMERIC_GREATER_THAN"
            | "NUMERIC_GREATER_THAN_OR_EQUAL"
            | "NUMERIC_LESS_THAN"
            | "NUMERIC_LESS_THAN_OR_EQUAL";
        interface DimensionsFilters {
            /** The name of the field to be filtered */
            fieldName: string;
            /** An array of values to use for the operator. */
            values: string[];
            /** Whether data matching this filter should be included or excluded from the getData() response. */
            type: "INCLUDE" | "EXCLUDE";
            /** The operator to apply. */
            operator: "EQUALS" | "CONTAINS" | RegexpOperator | "IN_LIST" | "IS_NULL" | "BETWEEN" | NumericOperator;
        }
    }
}

declare var DataStudioApp: GoogleAppsScript.Data_Studio.DataStudioApp;
