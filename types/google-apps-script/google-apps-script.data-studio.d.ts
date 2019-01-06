// Type definitions for Google Apps Script 2019-01-06
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />

declare namespace GoogleAppsScript {
  export module Data_Studio {
    /**
     * An enum that defines the aggregation types that can be set for a Field.
     */
    export enum AggregationType { NO_AGGREGATION, AVG, COUNT, COUNT_DISTINCT, MAX, MIN, SUM }

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
    export interface Checkbox {
      setAllowOverride(allowOverride: boolean): Checkbox;
      setHelpText(helpText: string): Checkbox;
      setId(id: string): Checkbox;
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
     *       .setFieldType(fieldType.CURRENCY_USD);
     */
    export interface CommunityConnector {
      AggregationType: typeof AggregationType;
      FieldType: typeof FieldType;
      getConfig(): Config;
      getFields(): Fields;
      newDebugError(): DebugError;
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
    export interface Config {
      build(): Object;
      newCheckbox(): Checkbox;
      newInfo(): Info;
      newOptionBuilder(): OptionBuilder;
      newSelectMultiple(): SelectMultiple;
      newSelectSingle(): SelectSingle;
      newTextArea(): TextArea;
      newTextInput(): TextInput;
      printJson(): string;
      setDateRangeRequired(dateRangeRequired: boolean): Config;
    }

    /**
     * DataStudioApp allows scripts to interact with developer-oriented features for Data Studio.
     */
    export interface DataStudioApp {
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
    export interface DebugError {
      printJson(): string;
      setText(text: string): DebugError;
      throwException(): void;
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
    export interface Field {
      getAggregation(): AggregationType;
      getDescription(): string;
      getFormula(): string;
      getGroup(): string;
      getId(): string;
      getName(): string;
      getType(): FieldType;
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
      setName(name: string): Field;
      setType(type: FieldType): Field;
    }

    /**
     * An enum that defines the types that can be set for a Field.
     */
    export enum FieldType { YEAR, YEAR_QUARTER, YEAR_MONTH, YEAR_WEEK, YEAR_MONTH_DAY, YEAR_MONTH_DAY_HOUR, QUARTER, MONTH, WEEK, MONTH_DAY, DAY_OF_WEEK, DAY, HOUR, MINUTE, DURATION, COUNTRY, COUNTRY_CODE, CONTINENT, CONTINENT_CODE, SUB_CONTINENT, SUB_CONTINENT_CODE, REGION, REGION_CODE, CITY, CITY_CODE, METRO, METRO_CODE, LATITUDE_LONGITUDE, NUMBER, PERCENT, TEXT, BOOLEAN, URL, CURRENCY_AED, CURRENCY_ALL, CURRENCY_ARS, CURRENCY_AUD, CURRENCY_BDT, CURRENCY_BGN, CURRENCY_BOB, CURRENCY_BRL, CURRENCY_CAD, CURRENCY_CDF, CURRENCY_CHF, CURRENCY_CLP, CURRENCY_CNY, CURRENCY_COP, CURRENCY_CRC, CURRENCY_CZK, CURRENCY_DKK, CURRENCY_DOP, CURRENCY_EGP, CURRENCY_ETB, CURRENCY_EUR, CURRENCY_GBP, CURRENCY_HKD, CURRENCY_HRK, CURRENCY_HUF, CURRENCY_IDR, CURRENCY_ILS, CURRENCY_INR, CURRENCY_IRR, CURRENCY_ISK, CURRENCY_JMD, CURRENCY_JPY, CURRENCY_KRW, CURRENCY_LKR, CURRENCY_LTL, CURRENCY_MNT, CURRENCY_MVR, CURRENCY_MXN, CURRENCY_MYR, CURRENCY_NOK, CURRENCY_NZD, CURRENCY_PAB, CURRENCY_PEN, CURRENCY_PHP, CURRENCY_PKR, CURRENCY_PLN, CURRENCY_RON, CURRENCY_RSD, CURRENCY_RUB, CURRENCY_SAR, CURRENCY_SEK, CURRENCY_SGD, CURRENCY_THB, CURRENCY_TRY, CURRENCY_TWD, CURRENCY_TZS, CURRENCY_UAH, CURRENCY_USD, CURRENCY_UYU, CURRENCY_VEF, CURRENCY_VND, CURRENCY_YER, CURRENCY_ZAR }

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
    export interface Fields {
      asArray(): Field[];
      build(): Object[];
      forIds(ids: string[]): Fields;
      getDefaultDimension(): Field;
      getDefaultMetric(): Field;
      getFieldById(fieldId: string): Field;
      newDimension(): Field;
      newMetric(): Field;
      setDefaultDimension(fieldId: string): void;
      setDefaultMetric(fieldId: string): void;
    }

    /**
     * Contains info data for the config. Its properties determine how the info is displayed in Data
     * Studio.
     *
     *     var cc = DataStudioApp.createCommunityConnector();
     *     var config = cc.getConfig();
     *
     *     var info1 = config.newInfo()
     *       .setName("info1")
     *       .setText("This text gives some context on the configuration.");
     */
    export interface Info {
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
    export interface OptionBuilder {
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
    export interface SelectMultiple {
      addOption(optionBuilder: OptionBuilder): SelectMultiple;
      setAllowOverride(allowOverride: boolean): SelectMultiple;
      setHelpText(helpText: string): SelectMultiple;
      setId(id: string): SelectMultiple;
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
     *     var info1 = config.newSelectMultiple()
     *       .setId("api_endpoint")
     *       .setName("Data Type")
     *       .setHelpText("Select the data type you're interested in.")
     *       .setAllowOverride(true)
     *       .addOption(option1)
     *       .addOption(option2);
     */
    export interface SelectSingle {
      addOption(optionBuilder: OptionBuilder): SelectSingle;
      setAllowOverride(allowOverride: boolean): SelectSingle;
      setHelpText(helpText: string): SelectSingle;
      setId(id: string): SelectSingle;
      setName(name: string): SelectSingle;
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
    export interface TextArea {
      setAllowOverride(allowOverride: boolean): TextArea;
      setHelpText(helpText: string): TextArea;
      setId(id: string): TextArea;
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
    export interface TextInput {
      setAllowOverride(allowOverride: boolean): TextInput;
      setHelpText(helpText: string): TextInput;
      setId(id: string): TextInput;
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
    export interface UserError {
      printJson(): string;
      setDebugText(text: string): UserError;
      setText(text: string): UserError;
      throwException(): void;
    }

  }
}

declare var DataStudioApp: GoogleAppsScript.Data_Studio.DataStudioApp;
