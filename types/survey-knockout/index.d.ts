// Type definitions for Survey JavaScript library v0.9.7
// Project: http://surveyjs.org/
// Definitions by: Andrew Telnov <https://github.com/andrewtelnov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module Survey {
    interface HashTable<T> {
        [key: string]: T;
    }
    interface ISurvey {
        getValue(name: string): any;
        setValue(name: string, newValue: any): any;
        getComment(name: string): string;
        setComment(name: string, newValue: string): any;
        pageVisibilityChanged(page: IPage, newValue: boolean): any;
        questionVisibilityChanged(question: IQuestion, newValue: boolean): any;
        questionAdded(question: IQuestion, index: number): any;
        questionRemoved(question: IQuestion): any;
        validateQuestion(name: string): SurveyError;
        processHtml(html: string): string;
        processText(text: string): string;
        isDesignMode: boolean;
        requiredText: string;
    }
    interface IQuestion {
        name: string;
        visible: boolean;
        hasTitle: boolean;
        setVisibleIndex(value: number): any;
        onSurveyValueChanged(newValue: any): any;
    }
    interface IPage {
        visible: boolean;
    }
    class ItemValue {
        static Separator: string;
        static setData(items: Array<ItemValue>, values: Array<any>): void;
        static getData(items: Array<ItemValue>): any;
        private itemValue;
        private itemText;
        constructor(value: any, text?: string);
        getType(): string;
        value: any;
        hasText: boolean;
        text: string;
    }
    class Base {
        getType(): string;
    }
    class SurveyError {
        getText(): string;
    }
    class Event<T extends Function, Options> {
        private callbacks;
        isEmpty: boolean;
        fire(sender: any, options: Options): void;
        add(func: T): void;
        remove(func: T): void;
    }
}

declare module Survey {
    class dxSurveyService {
        static serviceUrl: string;
        constructor();
        loadSurvey(surveyId: string, onLoad: (success: boolean, result: string, response: any) => void): void;
        sendResult(postId: string, result: JSON, onSendResult: (success: boolean, response: any) => void, clientId?: string, isPartialCompleted?: boolean): void;
        getResult(resultId: string, name: string, onGetResult: (success: boolean, data: any, dataList: Array<any>, response: any) => void): void;
        isCompleted(resultId: string, clientId: string, onIsCompleted: (success: boolean, result: string, response: any) => void): void;
    }
}

declare module Survey {
    var surveyLocalization: {
        currentLocale: string;
        locales: {};
        getString: (strName: string) => any;
        getLocales: () => string[];
    };
    var surveyStrings: {
        pagePrevText: string;
        pageNextText: string;
        completeText: string;
        otherItemText: string;
        progressText: string;
        emptySurvey: string;
        completingSurvey: string;
        loadingSurvey: string;
        optionsCaption: string;
        requiredError: string;
        numericError: string;
        textMinLength: string;
        minSelectError: string;
        maxSelectError: string;
        numericMinMax: string;
        numericMin: string;
        numericMax: string;
        invalidEmail: string;
        otherRequiredError: string;
    };
}

/// <reference path="base.d.ts" />
/// <reference path="surveyStrings.d.ts" />
declare module Survey {
    class AnswerRequiredError extends SurveyError {
        constructor();
        getText(): string;
    }
    class RequreNumericError extends SurveyError {
        constructor();
        getText(): string;
    }
    class CustomError extends SurveyError {
        private text;
        constructor(text: string);
        getText(): string;
    }
}

/// <reference path="base.d.ts" />
declare module Survey {
    class JsonObjectProperty {
        name: string;
        private typeValue;
        private choicesValue;
        private choicesfunc;
        className: string;
        classNamePart: string;
        baseClassName: string;
        defaultValue: any;
        onGetValue: (obj: any) => any;
        onSetValue: (obj: any, value: any, jsonConv: JsonObject) => any;
        constructor(name: string);
        type: string;
        hasToUseGetValue: (obj: any) => any;
        isDefaultValue(value: any): boolean;
        getValue(obj: any): any;
        hasToUseSetValue: (obj: any, value: any, jsonConv: JsonObject) => any;
        setValue(obj: any, value: any, jsonConv: JsonObject): void;
        getObjType(objType: string): string;
        getClassName(className: string): string;
        choices: Array<any>;
        setChoices(value: Array<any>, valueFunc: () => Array<any>): void;
    }
    class JsonMetadataClass {
        name: string;
        creator: () => any;
        parentName: string;
        static requiredSymbol: string;
        static typeSymbol: string;
        properties: Array<JsonObjectProperty>;
        requiredProperties: Array<string>;
        constructor(name: string, propertiesNames: Array<string>, creator?: () => any, parentName?: string);
        find(name: string): JsonObjectProperty;
        private getPropertyName(propertyName);
    }
    class JsonMetadata {
        private classes;
        private childrenClasses;
        private classProperties;
        private classRequiredProperties;
        addClass(name: string, propertiesNames: Array<string>, creator?: () => any, parentName?: string): JsonMetadataClass;
        overrideClassCreatore(name: string, creator: () => any): void;
        setPropertyValues(name: string, propertyName: string, propertyClassName: string, defaultValue?: any, onGetValue?: (obj: any) => any, onSetValue?: (obj: any, value: any, jsonConv: JsonObject) => any): void;
        setPropertyChoices(name: string, propertyName: string, choices: Array<any>, choicesFunc?: () => Array<any>): void;
        setPropertyClassInfo(name: string, propertyName: string, baseClassName: string, classNamePart?: string): void;
        getProperties(name: string): Array<JsonObjectProperty>;
        createClass(name: string): any;
        getChildrenClasses(name: string, canBeCreated?: boolean): Array<JsonMetadataClass>;
        getRequiredProperties(name: string): Array<string>;
        private fillChildrenClasses(name, canBeCreated, result);
        private findClass(name);
        private findProperty(name, propertyName);
        private fillProperties(name, list);
        private addProperty(property, list, endIndex);
        private fillRequiredProperties(name, list);
    }
    class JsonError {
        type: string;
        message: string;
        description: string;
        at: Number;
        constructor(type: string, message: string);
        getFullDescription(): string;
    }
    class JsonUnknownPropertyError extends JsonError {
        propertyName: string;
        className: string;
        constructor(propertyName: string, className: string);
    }
    class JsonMissingTypeErrorBase extends JsonError {
        baseClassName: string;
        type: string;
        message: string;
        constructor(baseClassName: string, type: string, message: string);
    }
    class JsonMissingTypeError extends JsonMissingTypeErrorBase {
        propertyName: string;
        baseClassName: string;
        constructor(propertyName: string, baseClassName: string);
    }
    class JsonIncorrectTypeError extends JsonMissingTypeErrorBase {
        propertyName: string;
        baseClassName: string;
        constructor(propertyName: string, baseClassName: string);
    }
    class JsonRequiredPropertyError extends JsonError {
        propertyName: string;
        className: string;
        constructor(propertyName: string, className: string);
    }
    class JsonObject {
        private static typePropertyName;
        private static positionPropertyName;
        private static metaDataValue;
        static metaData: JsonMetadata;
        errors: JsonError[];
        toJsonObject(obj: any): any;
        toObject(jsonObj: any, obj: any): void;
        protected toJsonObjectCore(obj: any, property: JsonObjectProperty): any;
        protected valueToJson(obj: any, result: any, property: JsonObjectProperty): void;
        protected valueToObj(value: any, obj: any, key: any, property: JsonObjectProperty): void;
        private isValueArray(value);
        private createNewObj(value, property);
        private checkNewObjectOnErrors(newObj, value, property, className);
        private addNewError(error, jsonObj);
        private valueToArray(value, obj, key, property);
        private findProperty(properties, key);
    }
}

/// <reference path="base.d.ts" />
/// <reference path="jsonobject.d.ts" />
declare module Survey {
    class QuestionBase extends Base implements IQuestion {
        name: string;
        protected data: ISurvey;
        private visibleValue;
        private visibleIndexValue;
        width: string;
        visibilityChangedCallback: () => void;
        visibleIndexChangedCallback: () => void;
        constructor(name: string);
        visible: boolean;
        visibleIndex: number;
        hasErrors(): boolean;
        hasTitle: boolean;
        hasComment: boolean;
        setData(newValue: ISurvey): void;
        protected fireCallback(callback: () => void): void;
        protected onSetData(): void;
        protected onCreating(): void;
        onSurveyValueChanged(newValue: any): void;
        setVisibleIndex(value: number): void;
    }
}

/// <reference path="questionbase.d.ts" />
/// <reference path="base.d.ts" />
declare module Survey {
    class QuestionFactory {
        static Instance: QuestionFactory;
        static DefaultChoices: (string | {
            value: number;
            text: string;
        })[];
        private creatorHash;
        registerQuestion(questionType: string, questionCreator: (name: string) => QuestionBase): void;
        getAllTypes(): Array<string>;
        createQuestion(questionType: string, name: string): QuestionBase;
    }
}

/// <reference path="questionbase.d.ts" />
/// <reference path="questionfactory.d.ts" />
/// <reference path="jsonobject.d.ts" />
declare module Survey {
    class PageModel extends Base implements IPage {
        name: string;
        questions: Array<QuestionBase>;
        data: ISurvey;
        title: string;
        visibleIndex: number;
        private numValue;
        private visibleValue;
        constructor(name?: string);
        processedTitle: string;
        num: number;
        visible: boolean;
        getType(): string;
        isVisible: boolean;
        addQuestion(question: QuestionBase, index?: number): void;
        addNewQuestion(questionType: string, name: string): QuestionBase;
        removeQuestion(question: QuestionBase): void;
        hasErrors(): boolean;
        addQuestionsToList(list: Array<IQuestion>, visibleOnly?: boolean): void;
        protected onNumChanged(value: number): void;
    }
}

/// <reference path="base.d.ts" />
/// <reference path="error.d.ts" />
/// <reference path="jsonobject.d.ts" />
declare module Survey {
    class ValidatorResult {
        value: any;
        error: SurveyError;
        constructor(value: any, error?: SurveyError);
    }
    class SurveyValidator extends Base {
        text: string;
        constructor();
        protected getErrorText(name: string): string;
        protected getDefaultErrorText(name: string): string;
        validate(value: any, name?: string): ValidatorResult;
    }
    interface IValidatorOwner {
        validators: Array<SurveyValidator>;
        value: any;
        getValidatorTitle(): string;
    }
    class ValidatorRunner {
        run(owner: IValidatorOwner): SurveyError;
    }
    class NumericValidator extends SurveyValidator {
        minValue: number;
        maxValue: number;
        constructor(minValue?: number, maxValue?: number);
        getType(): string;
        validate(value: any, name?: string): ValidatorResult;
        protected getDefaultErrorText(name: string): any;
        private isNumber(value);
    }
    class TextValidator extends SurveyValidator {
        minLength: number;
        constructor(minLength?: number);
        getType(): string;
        validate(value: any, name?: string): ValidatorResult;
        protected getDefaultErrorText(name: string): any;
    }
    class AnswerCountValidator extends SurveyValidator {
        minCount: number;
        maxCount: number;
        constructor(minCount?: number, maxCount?: number);
        getType(): string;
        validate(value: any, name?: string): ValidatorResult;
        protected getDefaultErrorText(name: string): string;
    }
    class RegexValidator extends SurveyValidator {
        regex: string;
        constructor(regex?: string);
        getType(): string;
        validate(value: any, name?: string): ValidatorResult;
    }
    class EmailValidator extends SurveyValidator {
        private re;
        constructor();
        getType(): string;
        validate(value: any, name?: string): ValidatorResult;
        protected getDefaultErrorText(name: string): any;
    }
}

/// <reference path="questionfactory.d.ts" />
/// <reference path="error.d.ts" />
/// <reference path="validator.d.ts" />
/// <reference path="jsonobject.d.ts" />
/// <reference path="questionbase.d.ts" />
declare module Survey {
    class Question extends QuestionBase implements IValidatorOwner {
        name: string;
        private titleValue;
        private questionValue;
        private isRequiredValue;
        private hasCommentValue;
        private hasOtherValue;
        errors: Array<SurveyError>;
        validators: Array<SurveyValidator>;
        valueChangedCallback: () => void;
        commentChangedCallback: () => void;
        errorsChangedCallback: () => void;
        constructor(name: string);
        hasTitle: boolean;
        title: string;
        processedTitle: string;
        supportComment(): boolean;
        supportOther(): boolean;
        isRequired: boolean;
        hasComment: boolean;
        hasOther: boolean;
        protected onSetData(): void;
        value: any;
        comment: string;
        isEmpty(): boolean;
        hasErrors(): boolean;
        requiredText: string;
        private checkForErrors();
        protected onCheckForErrors(errors: Array<SurveyError>): void;
        protected runValidators(): SurveyError;
        private isValueChangedInSurvey;
        protected setNewValue(newValue: any): void;
        protected onValueChanged(): void;
        private setNewComment(newValue);
        onSurveyValueChanged(newValue: any): void;
        getValidatorTitle(): string;
    }
}

/// <reference path="jsonobject.d.ts" />
/// <reference path="surveyStrings.d.ts" />
declare module Survey {
    class QuestionSelectBase extends Question {
        otherItem: ItemValue;
        choicesValues: Array<ItemValue>;
        otherErrorText: string;
        choicesOrderValue: string;
        constructor(name: string);
        isOtherSelected: boolean;
        choices: Array<any>;
        choicesOrder: string;
        otherText: string;
        visibleChoices: Array<ItemValue>;
        supportComment(): boolean;
        supportOther(): boolean;
        protected onCheckForErrors(errors: Array<SurveyError>): void;
        sortVisibleChoices(array: Array<ItemValue>): Array<ItemValue>;
        sortArray(array: Array<ItemValue>, mult: number): Array<ItemValue>;
        randomizeArray(array: Array<ItemValue>): Array<ItemValue>;
    }
    class QuestionCheckboxBase extends QuestionSelectBase {
        name: string;
        private colCountValue;
        colCountChangedCallback: () => void;
        constructor(name: string);
        colCount: number;
    }
}

/// <reference path="questionfactory.d.ts" />
/// <reference path="jsonobject.d.ts" />
declare module Survey {
    class QuestionCheckboxModel extends QuestionCheckboxBase {
        name: string;
        constructor(name: string);
        isOtherSelected: boolean;
        getType(): string;
    }
}

/// <reference path="questionfactory.d.ts" />
/// <reference path="jsonobject.d.ts" />
declare module Survey {
    class QuestionCommentModel extends Question {
        name: string;
        rows: number;
        cols: number;
        constructor(name: string);
        getType(): string;
        isEmpty(): boolean;
    }
}

/// <reference path="questionfactory.d.ts" />
/// <reference path="jsonobject.d.ts" />
declare module Survey {
    class QuestionDropdownModel extends QuestionSelectBase {
        name: string;
        private optionsCaptionValue;
        constructor(name: string);
        optionsCaption: string;
        getType(): string;
    }
}

/// <reference path="questionfactory.d.ts" />
/// <reference path="jsonobject.d.ts" />
declare module Survey {
    class QuestionHtmlModel extends QuestionBase {
        name: string;
        private htmlValue;
        constructor(name: string);
        getType(): string;
        html: string;
        processedHtml: string;
    }
}

/// <reference path="questionfactory.d.ts" />
/// <reference path="jsonobject.d.ts" />
declare module Survey {
    interface IMatrixData {
        onMatrixRowChanged(row: MatrixRowModel): any;
    }
    class MatrixRowModel extends Base {
        name: any;
        text: string;
        fullName: string;
        private data;
        protected rowValue: any;
        constructor(name: any, text: string, fullName: string, data: IMatrixData, value: any);
        value: any;
        protected onValueChanged(): void;
    }
    class QuestionMatrixModel extends Question implements IMatrixData {
        name: string;
        private columnsValue;
        private rowsValue;
        private isRowChanging;
        private generatedVisibleRows;
        constructor(name: string);
        getType(): string;
        hasRows: boolean;
        columns: Array<any>;
        rows: Array<any>;
        visibleRows: Array<MatrixRowModel>;
        protected createMatrixRow(name: any, text: string, fullName: string, value: any): MatrixRowModel;
        protected onValueChanged(): void;
        onMatrixRowChanged(row: MatrixRowModel): void;
    }
}

/// <reference path="questionfactory.d.ts" />
/// <reference path="jsonobject.d.ts" />
declare module Survey {
    class QuestionRadiogroupModel extends QuestionCheckboxBase {
        name: string;
        constructor(name: string);
        getType(): string;
    }
}

/// <reference path="questionfactory.d.ts" />
/// <reference path="jsonobject.d.ts" />
declare module Survey {
    class QuestionTextModel extends Question {
        name: string;
        size: number;
        constructor(name: string);
        getType(): string;
        isEmpty(): boolean;
    }
}

/// <reference path="question.d.ts" />
/// <reference path="questionfactory.d.ts" />
/// <reference path="jsonobject.d.ts" />
/// <reference path="question_dropdown.d.ts" />
/// <reference path="question_checkbox.d.ts" />
/// <reference path="question_radiogroup.d.ts" />
/// <reference path="question_text.d.ts" />
/// <reference path="question_comment.d.ts" />
declare module Survey {
    interface IMatrixDropdownData {
        onCellChanged(cell: MatrixDropdownCellModel): any;
        columns: Array<MatrixDropdownColumn>;
        choices: Array<any>;
        optionsCaption: string;
    }
    class MatrixDropdownColumn extends Base {
        name: string;
        private choicesValue;
        private titleValue;
        optionsCaption: string;
        private cellTypeValue;
        private colCountValue;
        constructor(name: string, title?: string);
        getType(): string;
        title: string;
        choices: Array<any>;
        cellType: string;
        colCount: number;
    }
    class MatrixDropdownCellModel {
        column: MatrixDropdownColumn;
        row: MatrixDropdownRowModel;
        private data;
        private questionValue;
        constructor(column: MatrixDropdownColumn, row: MatrixDropdownRowModel, data: IMatrixDropdownData, value: any);
        choices: Array<any>;
        optionsCaption: string;
        question: Question;
        value: any;
        protected onValueChanged(): void;
        protected createQuestion(): Question;
        protected createDropdown(name: string): QuestionDropdownModel;
        protected createCheckbox(name: string): QuestionCheckboxModel;
        protected createRadiogroup(name: string): QuestionRadiogroupModel;
        protected createText(name: string): QuestionTextModel;
        protected createComment(name: string): QuestionCommentModel;
        protected createDropdownCore(name: string): QuestionDropdownModel;
        protected createCheckboxCore(name: string): QuestionCheckboxModel;
        protected createRadiogroupCore(name: string): QuestionRadiogroupModel;
        protected getQuestionName(): string;
    }
    class MatrixDropdownRowModel {
        name: any;
        text: string;
        protected data: IMatrixDropdownData;
        protected rowValue: any;
        cells: Array<MatrixDropdownCellModel>;
        constructor(name: any, text: string, data: IMatrixDropdownData, value: any);
        value: any;
        private buildCells();
        protected createCell(column: MatrixDropdownColumn, value: any): MatrixDropdownCellModel;
        protected getCellValue(column: MatrixDropdownColumn): any;
    }
    class QuestionMatrixDropdownModel extends Question implements IMatrixDropdownData {
        name: string;
        private columnsValue;
        private rowsValue;
        private choicesValue;
        private optionsCaptionValue;
        private isRowChanging;
        private generatedVisibleRows;
        constructor(name: string);
        getType(): string;
        columns: Array<MatrixDropdownColumn>;
        rows: Array<any>;
        choices: Array<any>;
        optionsCaption: string;
        addColumn(name: string, title?: string): MatrixDropdownColumn;
        visibleRows: Array<MatrixDropdownRowModel>;
        protected createMatrixRow(name: any, text: string, value: any): MatrixDropdownRowModel;
        protected onValueChanged(): void;
        onCellChanged(cell: MatrixDropdownCellModel): void;
    }
}

/// <reference path="questionfactory.d.ts" />
/// <reference path="jsonobject.d.ts" />
declare module Survey {
    interface IMultipleTextData {
        getMultipleTextValue(name: string): any;
        setMultipleTextValue(name: string, value: any): any;
    }
    class MultipleTextItemModel extends Base implements IValidatorOwner {
        name: any;
        private data;
        private titleValue;
        validators: Array<SurveyValidator>;
        constructor(name?: any, title?: string);
        getType(): string;
        setData(data: IMultipleTextData): void;
        title: string;
        value: any;
        onValueChanged(newValue: any): void;
        getValidatorTitle(): string;
    }
    class QuestionMultipleTextModel extends Question implements IMultipleTextData {
        name: string;
        private colCountValue;
        colCountChangedCallback: () => void;
        itemSize: number;
        private itemsValues;
        constructor(name: string);
        getType(): string;
        items: Array<MultipleTextItemModel>;
        AddItem(name: string, title?: string): MultipleTextItemModel;
        colCount: number;
        getRows(): Array<any>;
        private isMultipleItemValueChanging;
        protected onValueChanged(): void;
        protected createTextItem(name: string, title: string): MultipleTextItemModel;
        protected onItemValueChanged(): void;
        protected runValidators(): SurveyError;
        getMultipleTextValue(name: string): any;
        setMultipleTextValue(name: string, value: any): void;
    }
}

/// <reference path="questionfactory.d.ts" />
/// <reference path="jsonobject.d.ts" />
declare module Survey {
    class QuestionRatingModel extends Question {
        name: string;
        static defaultRateValues: ItemValue[];
        private rates;
        mininumRateDescription: string;
        maximumRateDescription: string;
        rateValuesChangedCallback: () => void;
        constructor(name: string);
        rateValues: Array<any>;
        visibleRateValues: ItemValue[];
        getType(): string;
        supportComment(): boolean;
        supportOther(): boolean;
    }
}

/// <reference path="base.d.ts" />
/// <reference path="jsonobject.d.ts" />
declare module Survey {
    class Trigger extends Base {
        static operatorsValue: HashTable<Function>;
        static operators: HashTable<Function>;
        private opValue;
        value: any;
        constructor();
        operator: string;
        check(value: any): void;
        protected onSuccess(): void;
        protected onFailure(): void;
    }
    interface ISurveyTriggerOwner {
        getObjects(pages: string[], questions: string[]): any[];
        doComplete(): any;
        setTriggerValue(name: string, value: any, isVariable: boolean): any;
    }
    class SurveyTrigger extends Trigger {
        name: string;
        protected owner: ISurveyTriggerOwner;
        constructor();
        setOwner(owner: ISurveyTriggerOwner): void;
        isOnNextPage: boolean;
    }
    class SurveyTriggerVisible extends SurveyTrigger {
        pages: string[];
        questions: string[];
        constructor();
        getType(): string;
        protected onSuccess(): void;
        protected onFailure(): void;
        private onTrigger(func);
        protected onItemSuccess(item: any): void;
        protected onItemFailure(item: any): void;
    }
    class SurveyTriggerComplete extends SurveyTrigger {
        constructor();
        getType(): string;
        isOnNextPage: boolean;
        protected onSuccess(): void;
    }
    class SurveyTriggerSetValue extends SurveyTrigger {
        setToName: string;
        setValue: any;
        isVariable: boolean;
        constructor();
        getType(): string;
        protected onSuccess(): void;
    }
}

declare module Survey {
    class TextPreProcessor {
        onProcess: (name: string) => any;
        onHasValue: (name: string) => boolean;
        constructor();
        process(text: string): string;
        private getItems(text);
        private getName(name);
        private canProcessName(name);
    }
}

/// <reference path="base.d.ts" />
/// <reference path="page.d.ts" />
/// <reference path="trigger.d.ts" />
/// <reference path="jsonobject.d.ts" />
/// <reference path="dxSurveyService.d.ts" />
/// <reference path="textPreProcessor.d.ts" />
declare module Survey {
    class SurveyModel extends Base implements ISurvey, ISurveyTriggerOwner {
        surveyId: string;
        surveyPostId: string;
        clientId: string;
        cookieName: string;
        sendResultOnPageNext: boolean;
        commentPrefix: string;
        title: string;
        showNavigationButtons: boolean;
        showTitle: boolean;
        showPageTitles: boolean;
        completedHtml: string;
        requiredText: string;
        showProgressBar: string;
        pages: Array<PageModel>;
        triggers: Array<SurveyTrigger>;
        private currentPageValue;
        private valuesHash;
        private variablesHash;
        private pagePrevTextValue;
        private pageNextTextValue;
        private completeTextValue;
        private showPageNumbersValue;
        private showQuestionNumbersValue;
        private localeValue;
        private isCompleted;
        private isLoading;
        private processedTextValues;
        private textPreProcessor;
        onComplete: Event<(sender: SurveyModel) => any, any>;
        onCurrentPageChanged: Event<(sender: SurveyModel, options: any) => any, any>;
        onValueChanged: Event<(sender: SurveyModel, options: any) => any, any>;
        onVisibleChanged: Event<(sender: SurveyModel, options: any) => any, any>;
        onPageVisibleChanged: Event<(sender: SurveyModel, options: any) => any, any>;
        onQuestionAdded: Event<(sender: SurveyModel, options: any) => any, any>;
        onQuestionRemoved: Event<(sender: SurveyModel, options: any) => any, any>;
        onValidateQuestion: Event<(sender: SurveyModel, options: any) => any, any>;
        onProcessHtml: Event<(sender: SurveyModel, options: any) => any, any>;
        onSendResult: Event<(sender: SurveyModel, options: any) => any, any>;
        onGetResult: Event<(sender: SurveyModel, options: any) => any, any>;
        jsonErrors: Array<JsonError>;
        mode: string;
        constructor(jsonObj?: any);
        getType(): string;
        locale: string;
        getLocString(str: string): any;
        emptySurveyText: string;
        pagePrevText: string;
        pageNextText: string;
        completeText: string;
        showPageNumbers: boolean;
        showQuestionNumbers: string;
        data: any;
        comments: any;
        visiblePages: Array<PageModel>;
        isEmpty: boolean;
        PageCount: number;
        visiblePageCount: number;
        currentPage: PageModel;
        state: string;
        clear(): void;
        protected mergeValues(src: any, dest: any): void;
        protected currentPageChanged(newValue: PageModel, oldValue: PageModel): void;
        getProgress(): number;
        isDesignMode: boolean;
        hasCookie: boolean;
        setCookie(): void;
        deleteCookie(): void;
        nextPage(): boolean;
        isCurrentPageHasErrors: boolean;
        prevPage(): boolean;
        completeLastPage(): boolean;
        isFirstPage: boolean;
        isLastPage: boolean;
        doComplete(): void;
        protected setCompleted(): void;
        processedCompletedHtml: string;
        processedLoadingHtml: string;
        progressText: string;
        getPage(index: number): PageModel;
        addPage(page: PageModel): void;
        addNewPage(name: string): PageModel;
        removePage(page: PageModel): void;
        getQuestionByName(name: string, caseInsensitive?: boolean): IQuestion;
        getQuestionsByNames(names: string[], caseInsensitive?: boolean): IQuestion[];
        getPageByQuestion(question: IQuestion): PageModel;
        getPageByName(name: string): PageModel;
        getPagesByNames(names: string[]): PageModel[];
        getAllQuestions(visibleOnly?: boolean): Array<IQuestion>;
        protected createNewPage(name: string): PageModel;
        private notifyQuestionOnValueChanged(name, newValue);
        private notifyAllQuestionsOnValueChanged();
        protected doSurveyValueChanged(question: IQuestion, newValue: any): void;
        private checkOnPageTriggers();
        private checkTriggers(name, newValue, isOnNextPage);
        sendResult(postId?: string, clientId?: string, isPartialCompleted?: boolean): void;
        getResult(resultId: string, name: string): void;
        loadSurveyFromService(surveyId?: string): void;
        protected onLoadingSurveyFromService(): void;
        protected onLoadSurveyFromService(): void;
        private updateVisibleIndexes();
        private updatePageVisibleIndexes(showIndex);
        private updateQuestionVisibleIndexes(questions, showIndex);
        private setJsonObject(jsonObj);
        protected onBeforeCreating(): void;
        protected onCreating(): void;
        private updateProcessedTextValues();
        private addQuestionToProcessedTextValues(question);
        private getProcessedTextValue(name);
        getVariable(name: string): any;
        setVariable(name: string, newValue: any): void;
        getValue(name: string): any;
        setValue(name: string, newValue: any): void;
        getComment(name: string): string;
        setComment(name: string, newValue: string): void;
        questionVisibilityChanged(question: IQuestion, newValue: boolean): void;
        pageVisibilityChanged(page: IPage, newValue: boolean): void;
        questionAdded(question: IQuestion, index: number): void;
        questionRemoved(question: IQuestion): void;
        validateQuestion(name: string): SurveyError;
        processHtml(html: string): string;
        processText(text: string): string;
        getObjects(pages: string[], questions: string[]): any[];
        setTriggerValue(name: string, value: any, isVariable: boolean): void;
    }
}

declare module Survey {
    class SurveyWindowModel extends Base {
        static surveyElementName: string;
        surveyValue: SurveyModel;
        windowElement: HTMLDivElement;
        isShowingValue: boolean;
        isExpandedValue: boolean;
        titleValue: string;
        templateValue: string;
        constructor(jsonObj: any);
        getType(): string;
        survey: SurveyModel;
        isShowing: boolean;
        isExpanded: boolean;
        title: string;
        expand(): void;
        collapse(): void;
        protected createSurvey(jsonObj: any): SurveyModel;
        protected expandcollapse(value: boolean): void;
    }
}

declare module Survey {
}

declare module Survey {
}

declare module Survey {
}

declare module Survey {
    class Page extends PageModel {
        koNo: any;
        constructor(name?: string);
        protected onCreating(): void;
        protected onNumChanged(value: number): void;
    }
}

declare module Survey {
    class QuestionImplementorBase {
        question: QuestionBase;
        koVisible: any;
        koNo: any;
        koErrors: any;
        constructor(question: QuestionBase);
        protected onVisibilityChanged(): void;
        protected onVisibleIndexChanged(): void;
        protected getNo(): string;
    }
}

declare module Survey {
    class QuestionImplementor extends QuestionImplementorBase {
        question: Question;
        private isUpdating;
        koValue: any;
        koComment: any;
        constructor(question: Question);
        protected onValueChanged(): void;
        protected onCommentChanged(): void;
        protected onVisibilityChanged(): void;
        protected onVisibleIndexChanged(): void;
        protected onErrorsChanged(): void;
        protected createkoValue(): any;
        protected setkoValue(newValue: any): void;
        protected updateValue(newValue: any): void;
        protected updateComment(newValue: any): void;
        protected getNo(): string;
    }
}

/// <reference path="koquestion.d.ts" />
declare module Survey {
    class QuestionSelectBaseImplementor extends QuestionImplementor {
        koOtherVisible: any;
        constructor(question: Question);
        protected isOtherSelected: boolean;
    }
    class QuestionCheckboxBaseImplementor extends QuestionSelectBaseImplementor {
        koWidth: any;
        constructor(question: Question);
        protected onColCountChanged(): void;
        protected colWidth: string;
        private koAfterRender(el, con);
    }
}

declare module Survey {
    class QuestionCheckbox extends QuestionCheckboxModel {
        name: string;
        constructor(name: string);
    }
}

declare module Survey {
    class QuestionComment extends QuestionCommentModel {
        name: string;
        constructor(name: string);
    }
}

declare module Survey {
    class QuestionDropdown extends QuestionDropdownModel {
        name: string;
        constructor(name: string);
    }
}

declare module Survey {
    class QuestionHtml extends QuestionHtmlModel {
        name: string;
        constructor(name: string);
    }
}

declare module Survey {
    class MatrixRow extends MatrixRowModel {
        name: any;
        text: string;
        fullName: string;
        private isValueUpdating;
        koValue: any;
        constructor(name: any, text: string, fullName: string, data: IMatrixData, value: any);
        protected onValueChanged(): void;
    }
    class QuestionMatrix extends QuestionMatrixModel {
        name: string;
        constructor(name: string);
        protected createMatrixRow(name: any, text: string, fullName: string, value: any): MatrixRowModel;
    }
}

declare module Survey {
    class QuestionRadiogroup extends QuestionRadiogroupModel {
        name: string;
        constructor(name: string);
    }
}

declare module Survey {
    class QuestionText extends QuestionTextModel {
        name: string;
        constructor(name: string);
    }
}

declare module Survey {
    class MatrixDropdownCell extends MatrixDropdownCellModel {
        column: MatrixDropdownColumn;
        row: MatrixDropdownRowModel;
        constructor(column: MatrixDropdownColumn, row: MatrixDropdownRowModel, data: IMatrixDropdownData, value: any);
        protected createText(name: string): QuestionTextModel;
        protected createComment(name: string): QuestionCommentModel;
        protected createDropdownCore(name: string): QuestionDropdownModel;
        protected createCheckboxCore(name: string): QuestionCheckboxModel;
        protected createRadiogroupCore(name: string): QuestionRadiogroupModel;
    }
    class MatrixDropdownRow extends MatrixDropdownRowModel {
        name: any;
        text: string;
        constructor(name: any, text: string, data: IMatrixDropdownData, value: any);
        protected createCell(column: MatrixDropdownColumn, value: any): MatrixDropdownCellModel;
    }
    class QuestionMatrixDropdown extends QuestionMatrixDropdownModel {
        name: string;
        constructor(name: string);
        protected createMatrixRow(name: any, text: string, value: any): MatrixDropdownRowModel;
    }
}

declare module Survey {
    class MultipleTextItem extends MultipleTextItemModel {
        name: any;
        private isKOValueUpdating;
        koValue: any;
        constructor(name?: any, title?: string);
        onValueChanged(newValue: any): void;
    }
    class QuestionMultipleTextImplementor extends QuestionImplementor {
        koRows: any;
        constructor(question: Question);
        protected onColCountChanged(): void;
    }
    class QuestionMultipleText extends QuestionMultipleTextModel {
        name: string;
        constructor(name: string);
        protected createTextItem(name: string, title: string): MultipleTextItemModel;
    }
}

declare module Survey {
    class QuestionRating extends QuestionRatingModel {
        name: string;
        itemCss: string;
        constructor(name: string);
        protected onSetData(): void;
    }
}

declare module Survey {
    class SurveyBase extends SurveyModel {
        private renderedElement;
        private cssValue;
        onRendered: Event<(sender: SurveyModel) => any, any>;
        koCurrentPage: any;
        koIsFirstPage: any;
        koIsLastPage: any;
        dummyObservable: any;
        koState: any;
        koProgress: any;
        koProgressText: any;
        constructor(jsonObj?: any, renderedElement?: any, css?: any);
        css: any;
        render(element?: any): void;
        loadSurveyFromService(surveyId?: string, renderedElement?: any): void;
        protected setCompleted(): void;
        protected createNewPage(name: string): Page;
        protected createCssObject(): any;
        protected getTemplate(): string;
        protected onBeforeCreating(): void;
        protected currentPageChanged(newValue: PageModel, oldValue: PageModel): void;
        protected onLoadSurveyFromService(): void;
        protected onLoadingSurveyFromService(): void;
        private applyBinding();
        private updateKoCurrentPage();
    }
}

declare module Survey {
    class SurveyWindowBase extends SurveyWindowModel {
        koExpanded: any;
        doExpand: any;
        constructor(jsonObj: any);
        protected createSurvey(jsonObj: any): SurveyModel;
        protected expandcollapse(value: boolean): void;
        protected template: string;
        show(): void;
        protected getDefaultTemplate(): string;
        hide(): void;
        private changeExpanded();
        private onComplete();
    }
}

declare module Survey {
    class SurveyTemplateTextBase {
        constructor();
        replaceText(replaceText: string, id: string, questionType?: string): void;
        protected getId(id: string, questionType: string): string;
        protected text: string;
    }
}

declare module template.ko {
    var html: string;
}

declare module Survey {
    class Survey extends SurveyBase {
        constructor(jsonObj?: any, renderedElement?: any, css?: any);
        protected getTemplate(): string;
        protected createCssObject(): any;
    }
}

declare module Survey {
    class SurveyWindow extends SurveyWindowBase {
        koExpanded: any;
        doExpand: any;
        constructor(jsonObj: any);
        protected createSurvey(jsonObj: any): SurveyModel;
        protected getDefaultTemplate(): string;
    }
}

declare module template.window.ko {
    var html: string;
}


declare module Survey {
    class SurveyTemplateText extends SurveyTemplateTextBase {
        protected text: string;
    }
}
