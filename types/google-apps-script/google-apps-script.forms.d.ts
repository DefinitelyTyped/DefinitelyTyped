// Type definitions for Google Apps Script 2020-01-02
// Project: https://developers.google.com/apps-script/
// Definitions by: PopGoesTheWza <https://github.com/PopGoesTheWza>
//                 motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare namespace GoogleAppsScript {
  namespace Forms {
    /**
     * An enum representing the supported types of image alignment. Alignment types can be accessed from
     * FormApp.Alignment.
     *
     *     // Open a form by ID and add a new image item with alignment
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var img = UrlFetchApp.fetch('https://www.google.com/images/srpr/logo4w.png');
     *     form.addImageItem()
     *         .setImage(img)
     *         .setAlignment(FormApp.Alignment.CENTER);
     */
    enum Alignment { LEFT, CENTER, RIGHT }
    /**
     * A question item, presented as a grid of columns and rows, that allows the respondent to select
     * multiple choices per row from a sequence of checkboxes. Items can be accessed or created from a
     * Form.
     *
     *     // Open a form by ID and add a new checkgox grid item.
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var item = form.addCheckboxGridItem();
     *     item.setTitle('Where did you celebrate New Years?')
     *       .setRows(['New York', 'San Francisco', 'London'])
     *       .setColumns(['2014', '2015', '2016', '2017']);
     */
    interface CheckboxGridItem {
      clearValidation(): CheckboxGridItem;
      createResponse(responses: string[][]): ItemResponse;
      duplicate(): CheckboxGridItem;
      getColumns(): string[];
      getHelpText(): string;
      getId(): Integer;
      getIndex(): Integer;
      getRows(): string[];
      getTitle(): string;
      getType(): ItemType;
      isRequired(): boolean;
      setColumns(columns: string[]): CheckboxGridItem;
      setHelpText(text: string): CheckboxGridItem;
      setRequired(enabled: boolean): CheckboxGridItem;
      setRows(rows: string[]): CheckboxGridItem;
      setTitle(title: string): CheckboxGridItem;
      setValidation(validation: CheckboxGridValidation): CheckboxGridItem;
    }
    /**
     * A DataValidation for a CheckboxGridItem.
     *
     *     // Add a checkbox grid item to a form and require one response per column.
     *     var checkboxGridItem = form.addCheckboxGridItem();
     *     checkboxGridItem.setTitle('Where did you celebrate New Years?')
     *       .setRows(['New York', 'San Francisco', 'London'])
     *       .setColumns(['2014', '2015', '2016', '2017']);
     *     var checkboxGridValidation = FormApp.createCheckboxGridValidation()
     *       .setHelpText(“Select one item per column.”)
     *       .requireLimitOneResponsePerColumn()
     *       .build();
     *     checkboxGridItem.setValidation(checkboxGridValidation);
     */
    // tslint:disable-next-line: no-empty-interface
    interface CheckboxGridValidation {
    }
    /**
     * A DataValidationBuilder for a CheckboxGridValidation.
     *
     *     // Add a checkbox grid item to a form and restrict it to one response per column.
     *     var checkboxGridItem = form.addCheckboxGridItem();
     *     checkboxGridItem.setTitle('Where did you celebrate New Years?')
     *       .setRows(['New York', 'San Francisco', 'London'])
     *       .setColumns(['2014', '2015', '2016', '2017']);
     *     var checkboxGridValidation = FormApp.createcheckboxGridValidation()
     *       .setHelpText(“Select one item per column.”)
     *       .requireLimitOneResponsePerColumn()
     *       .build();
     *     checkboxGridItem.setValidation(checkboxGridValidation);
     */
    interface CheckboxGridValidationBuilder {
      requireLimitOneResponsePerColumn(): CheckboxGridValidationBuilder;
    }
    /**
     * A question item that allows the respondent to select one or more checkboxes, as well as an
     * optional "other" field. Items can be accessed or created from a Form. When used in a
     * quiz, these items are autograded.
     *
     *     // Open a form by ID and add a new checkbox item.
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var item = form.addCheckboxItem();
     *     item.setTitle('What condiments would you like on your hot dog?')
     *         .setChoices([
     *               item.createChoice('Ketchup'),
     *               item.createChoice('Mustard'),
     *               item.createChoice('Relish')
     *         ])
     *         .showOtherOption(true);
     */
    interface CheckboxItem {
      clearValidation(): CheckboxItem;
      createChoice(value: string): Choice;
      createChoice(value: string, isCorrect: boolean): Choice;
      createResponse(responses: string[]): ItemResponse;
      duplicate(): CheckboxItem;
      getChoices(): Choice[];
      getFeedbackForCorrect(): QuizFeedback;
      getFeedbackForIncorrect(): QuizFeedback;
      getHelpText(): string;
      getId(): Integer;
      getIndex(): Integer;
      getPoints(): Integer;
      getTitle(): string;
      getType(): ItemType;
      hasOtherOption(): boolean;
      isRequired(): boolean;
      setChoiceValues(values: string[]): CheckboxItem;
      setChoices(choices: Choice[]): CheckboxItem;
      setFeedbackForCorrect(feedback: QuizFeedback): CheckboxItem;
      setFeedbackForIncorrect(feedback: QuizFeedback): CheckboxItem;
      setHelpText(text: string): CheckboxItem;
      setPoints(points: Integer): CheckboxItem;
      setRequired(enabled: boolean): CheckboxItem;
      setTitle(title: string): CheckboxItem;
      setValidation(validation: CheckboxValidation): CheckboxItem;
      showOtherOption(enabled: boolean): CheckboxItem;
    }
    /**
     * A DataValidation for a CheckboxItem.
     *
     *     // Add a checkBox item to a form and require exactly two selections.
     *     var checkBoxItem = form.addCheckboxItem();
     *     checkBoxItem.setTitle('What two condiments would you like on your hot dog?');
     *     checkBoxItem.setChoices([
     *       checkBoxItem.createChoice('Ketchup'),
     *       checkBoxItem.createChoice('Mustard'),
     *       checkBoxItem.createChoice('Relish')
     *     ]);
     *     var checkBoxValidation = FormApp.createCheckboxValidation()
     *       .setHelpText(“Select two condiments.”)
     *       .requireSelectExactly(2)
     *       .build();
     *     checkBoxItem.setValidation(checkBoxValidation);
     */
    interface CheckboxValidation {
      requireSelectAtLeast(number: Integer): CheckboxValidation;
      requireSelectAtMost(number: Integer): CheckboxValidation;
      requireSelectExactly(number: Integer): CheckboxValidation;
    }
    /**
     * A DataValidationBuilder for a CheckboxValidation.
     *
     *     // Add a checkBox item to a form and require exactly two selections.
     *     var checkBoxItem = form.addCheckboxItem();
     *     checkBoxItem.setTitle('What two condiments would you like on your hot dog?');
     *     checkBoxItem.setChoices([
     *       checkBoxItem.createChoice('Ketchup'),
     *       checkBoxItem.createChoice('Mustard'),
     *       checkBoxItem.createChoice('Relish')
     *     ]);
     *     var checkBoxValidation = FormApp.createCheckboxValidation()
     *       .setHelpText(“Select two condiments.”)
     *       .requireSelectExactly(2)
     *       .build();
     *     checkBoxItem.setValidation(checkBoxValidation);
     */
    interface CheckboxValidationBuilder {
      requireSelectAtLeast(number: Integer): CheckboxValidationBuilder;
      requireSelectAtMost(number: Integer): CheckboxValidationBuilder;
      requireSelectExactly(number: Integer): CheckboxValidationBuilder;
    }
    /**
     * A single choice associated with a type of Item that supports choices, like CheckboxItem, ListItem, or MultipleChoiceItem.
     *
     *     // Create a new form and add a multiple-choice item.
     *     var form = FormApp.create('Form Name');
     *     var item = form.addMultipleChoiceItem();
     *     item.setTitle('Do you prefer cats or dogs?')
     *         .setChoices([
     *             item.createChoice('Cats', FormApp.PageNavigationType.CONTINUE),
     *             item.createChoice('Dogs', FormApp.PageNavigationType.RESTART)
     *         ]);
     *
     *     // Add another page because navigation has no effect on the last page.
     *     form.addPageBreakItem().setTitle('You chose well!');
     *
     *     // Log the navigation types that each choice results in.
     *     var choices = item.getChoices();
     *     for (var i = 0; i < choices.length; i++) {
     *     Logger.log('If the respondent chooses "%s", the form will %s.',
     *                choices[i].getValue(),
     *                choices[i].getPageNavigationType());
     *     }
     */
    interface Choice {
      getGotoPage(): PageBreakItem;
      getPageNavigationType(): PageNavigationType;
      getValue(): string;
      isCorrectAnswer(): boolean;
    }
    /**
     * A question item that allows the respondent to indicate a date. Items can be accessed or created
     * from a Form. When used in a quiz, these items are graded.
     *
     *     // Open a form by ID and add a new date item.
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var item = form.addDateItem();
     *     item.setTitle('When were you born?');
     */
    interface DateItem {
      createResponse(response: Base.Date): ItemResponse;
      duplicate(): DateItem;
      getGeneralFeedback(): QuizFeedback;
      getHelpText(): string;
      getId(): Integer;
      getIndex(): Integer;
      getPoints(): Integer;
      getTitle(): string;
      getType(): ItemType;
      includesYear(): boolean;
      isRequired(): boolean;
      setGeneralFeedback(feedback: QuizFeedback): DateItem;
      setHelpText(text: string): DateItem;
      setIncludesYear(enableYear: boolean): DateItem;
      setPoints(points: Integer): DateItem;
      setRequired(enabled: boolean): DateItem;
      setTitle(title: string): DateItem;
    }
    /**
     * A question item that allows the respondent to indicate a date and time. Items can be accessed or
     * created from a Form. When used in a quiz, these items are graded.
     *
     *     // Open a form by ID and add a new date-time item.
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var item = form.addDateTimeItem();
     *     item.setTitle('When do you want to meet?');
     */
    interface DateTimeItem {
      createResponse(response: Base.Date): ItemResponse;
      duplicate(): DateTimeItem;
      getGeneralFeedback(): QuizFeedback;
      getHelpText(): string;
      getId(): Integer;
      getIndex(): Integer;
      getPoints(): Integer;
      getTitle(): string;
      getType(): ItemType;
      includesYear(): boolean;
      isRequired(): boolean;
      setGeneralFeedback(feedback: QuizFeedback): DateTimeItem;
      setHelpText(text: string): DateTimeItem;
      setIncludesYear(enableYear: boolean): DateTimeItem;
      setPoints(points: Integer): DateTimeItem;
      setRequired(enabled: boolean): DateTimeItem;
      setTitle(title: string): DateTimeItem;
    }
    /**
     * An enum representing the supported types of form-response destinations. All forms, including
     * those that do not have a destination set explicitly, save a copy of responses in the form's
     * response store. Destination types can be accessed from FormApp.DestinationType.
     *
     *     // Open a form by ID and create a new spreadsheet.
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var ss = SpreadsheetApp.create('Spreadsheet Name');
     *
     *     // Update the form's response destination.
     *     form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());
     */
    enum DestinationType { SPREADSHEET }
    /**
     * A question item that allows the respondent to indicate a length of time. Items can be accessed or
     * created from a Form. When used in a quiz, these items are graded.
     *
     *     // Open a form by ID and add a new duration item.
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var item = form.addDurationItem();
     *     item.setTitle('How long can you hold your breath?');
     */
    interface DurationItem {
      createResponse(hours: Integer, minutes: Integer, seconds: Integer): ItemResponse;
      duplicate(): DurationItem;
      getGeneralFeedback(): QuizFeedback;
      getHelpText(): string;
      getId(): Integer;
      getIndex(): Integer;
      getPoints(): Integer;
      getTitle(): string;
      getType(): ItemType;
      isRequired(): boolean;
      setGeneralFeedback(feedback: QuizFeedback): DurationItem;
      setHelpText(text: string): DurationItem;
      setPoints(points: Integer): DurationItem;
      setRequired(enabled: boolean): DurationItem;
      setTitle(title: string): DurationItem;
    }
    /**
     * An enum representing the supported types of feedback. Feedback types can be accessed from FormApp.FeedbackType.
     *
     *     // Open a form by ID and add a new list item.
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var item = form.addListItem();
     *     item.setTitle('Do you prefer cats or dogs?');
     *     // Set "Dogs" as the correct answer to this question.
     *     item.setChoices([
     *       item.createChoice('Dogs', true),
     *       item.createChoice('Cats', false)]);
     *     // Add feedback which will be shown for correct responses; ie "Dogs".
     *     item.setFeedbackForCorrect(
     *         FormApp.createFeedback().setDisplayText("Dogs rule, cats drool.").build());
     */
    enum FeedbackType { CORRECT, INCORRECT, GENERAL }
    /**
     * A form that contains overall properties and items. Properties include title, settings, and where
     * responses are stored. Items include question items like checkboxes or radio items, while layout
     * items refer to things like page breaks. Forms can be accessed or created from FormApp.
     *
     *     // Open a form by ID and create a new spreadsheet.
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var ss = SpreadsheetApp.create('Spreadsheet Name');
     *
     *     // Update form properties via chaining.
     *     form.setTitle('Form Name')
     *         .setDescription('Description of form')
     *         .setConfirmationMessage('Thanks for responding!')
     *         .setAllowResponseEdits(true)
     *         .setAcceptingResponses(false);
     *
     *     // Update the form's response destination.
     *     form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());
     */
    interface Form {
      addCheckboxGridItem(): CheckboxGridItem;
      addCheckboxItem(): CheckboxItem;
      addDateItem(): DateItem;
      addDateTimeItem(): DateTimeItem;
      addDurationItem(): DurationItem;
      addEditor(emailAddress: string): Form;
      addEditor(user: Base.User): Form;
      addEditors(emailAddresses: string[]): Form;
      addGridItem(): GridItem;
      addImageItem(): ImageItem;
      addListItem(): ListItem;
      addMultipleChoiceItem(): MultipleChoiceItem;
      addPageBreakItem(): PageBreakItem;
      addParagraphTextItem(): ParagraphTextItem;
      addScaleItem(): ScaleItem;
      addSectionHeaderItem(): SectionHeaderItem;
      addTextItem(): TextItem;
      addTimeItem(): TimeItem;
      addVideoItem(): VideoItem;
      canEditResponse(): boolean;
      collectsEmail(): boolean;
      createResponse(): FormResponse;
      deleteAllResponses(): Form;
      deleteItem(index: Integer): void;
      deleteItem(item: Item): void;
      deleteResponse(responseId: string): Form;
      getConfirmationMessage(): string;
      getCustomClosedFormMessage(): string;
      getDescription(): string;
      getDestinationId(): string;
      getDestinationType(): DestinationType;
      getEditUrl(): string;
      getEditors(): Base.User[];
      getId(): string;
      getItemById(id: Integer): Item;
      getItems(): Item[];
      getItems(itemType: ItemType): Item[];
      getPublishedUrl(): string;
      getResponse(responseId: string): FormResponse;
      getResponses(): FormResponse[];
      getResponses(timestamp: Base.Date): FormResponse[];
      getShuffleQuestions(): boolean;
      getSummaryUrl(): string;
      getTitle(): string;
      hasLimitOneResponsePerUser(): boolean;
      hasProgressBar(): boolean;
      hasRespondAgainLink(): boolean;
      isAcceptingResponses(): boolean;
      isPublishingSummary(): boolean;
      isQuiz(): boolean;
      moveItem(from: Integer, to: Integer): Item;
      moveItem(item: Item, toIndex: Integer): Item;
      removeDestination(): Form;
      removeEditor(emailAddress: string): Form;
      removeEditor(user: Base.User): Form;
      requiresLogin(): boolean;
      setAcceptingResponses(enabled: boolean): Form;
      setAllowResponseEdits(enabled: boolean): Form;
      setCollectEmail(collect: boolean): Form;
      setConfirmationMessage(message: string): Form;
      setCustomClosedFormMessage(message: string): Form;
      setDescription(description: string): Form;
      setDestination(type: DestinationType, id: string): Form;
      setIsQuiz(enabled: boolean): Form;
      setLimitOneResponsePerUser(enabled: boolean): Form;
      setProgressBar(enabled: boolean): Form;
      setPublishingSummary(enabled: boolean): Form;
      setRequireLogin(requireLogin: boolean): Form;
      setShowLinkToRespondAgain(enabled: boolean): Form;
      setShuffleQuestions(shuffle: boolean): Form;
      setTitle(title: string): Form;
      shortenFormUrl(url: string): string;
      submitGrades(responses: FormResponse[]): Form;
    }
    /**
     * Allows a script to open an existing Form or create a new one.
     *
     *     // Open a form by ID.
     *     var existingForm = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *
     *     // Create and open a form.
     *     var newForm = FormApp.create('Form Name');
     */
    interface FormApp {
      Alignment: typeof Alignment;
      DestinationType: typeof DestinationType;
      FeedbackType: typeof FeedbackType;
      ItemType: typeof ItemType;
      PageNavigationType: typeof PageNavigationType;
      create(title: string): Form;
      createCheckboxGridValidation(): CheckboxGridValidationBuilder;
      createCheckboxValidation(): CheckboxValidationBuilder;
      createFeedback(): QuizFeedbackBuilder;
      createGridValidation(): GridValidationBuilder;
      createParagraphTextValidation(): ParagraphTextValidationBuilder;
      createTextValidation(): TextValidationBuilder;
      getActiveForm(): Form;
      getUi(): Base.Ui;
      openById(id: string): Form;
      openByUrl(url: string): Form;
    }
    /**
     * A response to the form as a whole. A FormResponse can be used in three ways: to access
     * the answers submitted by a respondent (see getItemResponses()), to programmatically
     * submit a response to the form (see withItemResponse(response) and submit()), and to generate a URL for the form which pre-fills fields using the provided
     * answers. FormResponses can be created or accessed from a Form.
     *
     *     // Open a form by ID and log the responses to each question.
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var formResponses = form.getResponses();
     *     for (var i = 0; i < formResponses.length; i++) {
     *       var formResponse = formResponses[i];
     *       var itemResponses = formResponse.getItemResponses();
     *       for (var j = 0; j < itemResponses.length; j++) {
     *         var itemResponse = itemResponses[j];
     *         Logger.log('Response #%s to the question "%s" was "%s"',
     *             (i + 1).toString(),
     *             itemResponse.getItem().getTitle(),
     *             itemResponse.getResponse());
     *       }
     *     }
     */
    interface FormResponse {
      getEditResponseUrl(): string;
      getGradableItemResponses(): ItemResponse[];
      getGradableResponseForItem(item: Item): ItemResponse;
      getId(): string;
      getItemResponses(): ItemResponse[];
      getRespondentEmail(): string;
      getResponseForItem(item: Item): ItemResponse;
      getTimestamp(): Base.Date;
      submit(): FormResponse;
      toPrefilledUrl(): string;
      withItemGrade(gradedResponse: ItemResponse): FormResponse;
      withItemResponse(response: ItemResponse): FormResponse;
    }
    /**
     * A question item, presented as a grid of columns and rows, that allows the respondent to select
     * one choice per row from a sequence of radio buttons. Items can be accessed or created from a
     * Form.
     *
     *     // Open a form by ID and add a new grid item.
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var item = form.addGridItem();
     *     item.setTitle('Rate your interests')
     *         .setRows(['Cars', 'Computers', 'Celebrities'])
     *         .setColumns(['Boring', 'So-so', 'Interesting']);
     */
    interface GridItem {
      clearValidation(): GridItem;
      createResponse(responses: string[]): ItemResponse;
      duplicate(): GridItem;
      getColumns(): string[];
      getHelpText(): string;
      getId(): Integer;
      getIndex(): Integer;
      getRows(): string[];
      getTitle(): string;
      getType(): ItemType;
      isRequired(): boolean;
      setColumns(columns: string[]): GridItem;
      setHelpText(text: string): GridItem;
      setRequired(enabled: boolean): GridItem;
      setRows(rows: string[]): GridItem;
      setTitle(title: string): GridItem;
      setValidation(validation: GridValidation): GridItem;
    }
    /**
     * A DataValidation for a GridItem.
     *
     *     // Add a grid item to a form and require one response per column.
     *     var gridItem = form.addGridItem();
     *     gridItem.setTitle('Rate your interests')
     *       .setRows(['Cars', 'Computers', 'Celebrities'])
     *       .setColumns(['Boring', 'So-so', 'Interesting']);
     *     var gridValidation = FormApp.createGridValidation()
     *       .setHelpText(“Select one item per column.”)
     *       .requireLimitOneResponsePerColumn()
     *       .build();
     *     gridItem.setValidation(gridValidation);
     */
    // tslint:disable-next-line: no-empty-interface
    interface GridValidation {
    }
    /**
     * A DataValidationBuilder for a GridValidation.
     *
     *     // Add a grid item to a form and require one response per column.
     *     var gridItem = form.addGridItem();
     *     gridItem.setTitle('Rate your interests')
     *       .setRows(['Cars', 'Computers', 'Celebrities'])
     *       .setColumns(['Boring', 'So-so', 'Interesting']);
     *     var gridValidation = FormApp.createGridValidation()
     *       .setHelpText(“Select one item per column.”)
     *       .requireLimitOneResponsePerColumn()
     *       .build();
     *     gridItem.setValidation(gridValidation);
     */
    interface GridValidationBuilder {
      requireLimitOneResponsePerColumn(): GridValidationBuilder;
    }
    /**
     * A layout item that displays an image. Items can be accessed or created from a Form.
     *
     *     // Open a form by ID and add a new image item
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var img = UrlFetchApp.fetch('https://www.google.com/images/srpr/logo4w.png');
     *     form.addImageItem()
     *         .setTitle('Google')
     *         .setHelpText('Google Logo') // The help text is the image description
     *         .setImage(img);
     */
    interface ImageItem {
      duplicate(): ImageItem;
      getAlignment(): Alignment;
      getHelpText(): string;
      getId(): Integer;
      getImage(): Base.Blob;
      getIndex(): Integer;
      getTitle(): string;
      getType(): ItemType;
      getWidth(): Integer;
      setAlignment(alignment: Alignment): ImageItem;
      setHelpText(text: string): ImageItem;
      setImage(image: Base.BlobSource): ImageItem;
      setTitle(title: string): ImageItem;
      setWidth(width: Integer): ImageItem;
    }
    /**
     * A generic form item that contains properties common to all items, such as title and help text.
     * Items can be accessed or created from a Form.
     *
     * To operate on type-specific properties, use getType() to check the item's ItemType, then cast the item to the
     * appropriate class using a method like asCheckboxItem().
     *
     *     // Create a new form and add a text item.
     *     var form = FormApp.create('Form Name');
     *     form.addTextItem();
     *
     *     // Access the text item as a generic item.
     *     var items = form.getItems();
     *     var item = items[0];
     *
     *     // Cast the generic item to the text-item class.
     *     if (item.getType() == 'TEXT') {
     *       var textItem = item.asTextItem();
     *       textItem.setRequired(false);
     *     }
     *
     * Implementing classes
     *
     * NameBrief description
     */
    interface Item {
      asCheckboxGridItem(): CheckboxGridItem;
      asCheckboxItem(): CheckboxItem;
      asDateItem(): DateItem;
      asDateTimeItem(): DateTimeItem;
      asDurationItem(): DurationItem;
      asGridItem(): GridItem;
      asImageItem(): ImageItem;
      asListItem(): ListItem;
      asMultipleChoiceItem(): MultipleChoiceItem;
      asPageBreakItem(): PageBreakItem;
      asParagraphTextItem(): ParagraphTextItem;
      asScaleItem(): ScaleItem;
      asSectionHeaderItem(): SectionHeaderItem;
      asTextItem(): TextItem;
      asTimeItem(): TimeItem;
      asVideoItem(): VideoItem;
      duplicate(): Item;
      getHelpText(): string;
      getId(): Integer;
      getIndex(): Integer;
      getTitle(): string;
      getType(): ItemType;
      setHelpText(text: string): Item;
      setTitle(title: string): Item;
    }
    /**
     * A response to one question item within a form. Item responses can be accessed from FormResponse and created from any Item that asks the respondent to answer a question.
     *
     *     // Open a form by ID and log the responses to each question.
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var formResponses = form.getResponses();
     *     for (var i = 0; i < formResponses.length; i++) {
     *       var formResponse = formResponses[i];
     *       var itemResponses = formResponse.getItemResponses();
     *       for (var j = 0; j < itemResponses.length; j++) {
     *         var itemResponse = itemResponses[j];
     *         Logger.log('Response #%s to the question "%s" was "%s"',
     *             (i + 1).toString(),
     *             itemResponse.getItem().getTitle(),
     *             itemResponse.getResponse());
     *       }
     *     }
     */
    interface ItemResponse {
      getFeedback(): QuizFeedback;
      getItem(): Item;
      getResponse(): string[][] | string[] | string;
      getScore(): number;
      setFeedback(feedback: any): ItemResponse;
      setScore(score: any): ItemResponse;
    }
    /**
     * An enum representing the supported types of form items. Item types can be accessed from FormApp.ItemType.
     *
     *     // Open a form by ID and add a new section header.
     *     var form = FormApp.create('Form Name');
     *     var item = form.addSectionHeaderItem();
     *     item.setTitle('Title of new section');
     *
     *     // Check the item type.
     *     if (item.getType() == FormApp.ItemType.SECTION_HEADER) {
     *       item.setHelpText('Description of new section.');
     *     }
     */
    enum ItemType { CHECKBOX, CHECKBOX_GRID, DATE, DATETIME, DURATION, GRID, IMAGE, LIST, MULTIPLE_CHOICE, PAGE_BREAK, PARAGRAPH_TEXT, SCALE, SECTION_HEADER, TEXT, TIME, VIDEO }
    /**
     * A question item that allows the respondent to select one choice from a drop-down list. Items can
     * be accessed or created from a Form.
     *
     *     // Open a form by ID and add a new list item.
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var item = form.addListItem();
     *     item.setTitle('Do you prefer cats or dogs?')
     *         .setChoices([
     *             item.createChoice('Cats'),
     *             item.createChoice('Dogs')
     *         ]);
     */
    interface ListItem {
      createChoice(value: string): Choice;
      createChoice(value: string, isCorrect: boolean): Choice;
      createChoice(value: string, navigationItem: PageBreakItem): Choice;
      createChoice(value: string, navigationType: PageNavigationType): Choice;
      createResponse(response: string): ItemResponse;
      duplicate(): ListItem;
      getChoices(): Choice[];
      getFeedbackForCorrect(): QuizFeedback;
      getFeedbackForIncorrect(): QuizFeedback;
      getHelpText(): string;
      getId(): Integer;
      getIndex(): Integer;
      getPoints(): Integer;
      getTitle(): string;
      getType(): ItemType;
      isRequired(): boolean;
      setChoiceValues(values: string[]): ListItem;
      setChoices(choices: Choice[]): ListItem;
      setFeedbackForCorrect(feedback: QuizFeedback): ListItem;
      setFeedbackForIncorrect(feedback: QuizFeedback): ListItem;
      setHelpText(text: string): ListItem;
      setPoints(points: Integer): ListItem;
      setRequired(enabled: boolean): ListItem;
      setTitle(title: string): ListItem;
    }
    /**
     * A question item that allows the respondent to select one choice from a list of radio buttons or
     * an optional "other" field. Items can be accessed or created from a Form. When used in a
     * quiz, these items are autograded.
     *
     *     // Open a form by ID and add a new multiple choice item.
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var item = form.addMultipleChoiceItem();
     *     item.setTitle('Do you prefer cats or dogs?')
     *         .setChoices([
     *             item.createChoice('Cats'),
     *             item.createChoice('Dogs')
     *          ])
     *         .showOtherOption(true);
     */
    interface MultipleChoiceItem {
      createChoice(value: string): Choice;
      createChoice(value: string, isCorrect: boolean): Choice;
      createChoice(value: string, navigationItem: PageBreakItem): Choice;
      createChoice(value: string, navigationType: PageNavigationType): Choice;
      createResponse(response: string): ItemResponse;
      duplicate(): MultipleChoiceItem;
      getChoices(): Choice[];
      getFeedbackForCorrect(): QuizFeedback;
      getFeedbackForIncorrect(): QuizFeedback;
      getHelpText(): string;
      getId(): Integer;
      getIndex(): Integer;
      getPoints(): Integer;
      getTitle(): string;
      getType(): ItemType;
      hasOtherOption(): boolean;
      isRequired(): boolean;
      setChoiceValues(values: string[]): MultipleChoiceItem;
      setChoices(choices: Choice[]): MultipleChoiceItem;
      setFeedbackForCorrect(feedback: QuizFeedback): MultipleChoiceItem;
      setFeedbackForIncorrect(feedback: QuizFeedback): MultipleChoiceItem;
      setHelpText(text: string): MultipleChoiceItem;
      setPoints(points: Integer): MultipleChoiceItem;
      setRequired(enabled: boolean): MultipleChoiceItem;
      setTitle(title: string): MultipleChoiceItem;
      showOtherOption(enabled: boolean): MultipleChoiceItem;
    }
    /**
     * A layout item that marks the start of a page. Items can be accessed or created from a Form.
     *
     *     // Create a form and add three page-break items.
     *     var form = FormApp.create('Form Name');
     *     var pageTwo = form.addPageBreakItem().setTitle('Page Two');
     *     var pageThree = form.addPageBreakItem().setTitle('Page Three');
     *
     *     // Make the first two pages navigate elsewhere upon completion.
     *     pageTwo.setGoToPage(pageThree); // At end of page one (start of page two), jump to page three
     *     pageThree.setGoToPage(FormApp.PageNavigationType.RESTART); // At end of page two, restart form
     */
    interface PageBreakItem {
      duplicate(): PageBreakItem;
      getGoToPage(): PageBreakItem;
      getHelpText(): string;
      getId(): Integer;
      getIndex(): Integer;
      getPageNavigationType(): PageNavigationType;
      getTitle(): string;
      getType(): ItemType;
      setGoToPage(goToPageItem: PageBreakItem): PageBreakItem;
      setGoToPage(navigationType: PageNavigationType): PageBreakItem;
      setHelpText(text: string): PageBreakItem;
      setTitle(title: string): PageBreakItem;
    }
    /**
     * An enum representing the supported types of page navigation. Page navigation types can be
     * accessed from FormApp.PageNavigationType.
     *
     * The page navigation occurs after the respondent completes a page that contains the option, and
     * only if the respondent chose that option. If the respondent chose multiple options with
     * page-navigation instructions on the same page, only the last navigation option has any effect.
     * Page navigation also has no effect on the last page of a form.
     *
     * Choices that use page navigation cannot be combined in the same item with choices that do not
     * use page navigation.
     *
     *     // Create a form and add a new multiple-choice item and a page-break item.
     *     var form = FormApp.create('Form Name');
     *     var item = form.addMultipleChoiceItem();
     *     var pageBreak = form.addPageBreakItem();
     *
     *     // Set some choices with go-to-page logic.
     *     var rightChoice = item.createChoice('Vanilla', FormApp.PageNavigationType.SUBMIT);
     *     var wrongChoice = item.createChoice('Chocolate', FormApp.PageNavigationType.RESTART);
     *
     *     // For GO_TO_PAGE, just pass in the page break item. For CONTINUE (normally the default), pass in
     *     // CONTINUE explicitly because page navigation cannot be mixed with non-navigation choices.
     *     var iffyChoice = item.createChoice('Peanut', pageBreak);
     *     var otherChoice = item.createChoice('Strawberry', FormApp.PageNavigationType.CONTINUE);
     *     item.setChoices([rightChoice, wrongChoice, iffyChoice, otherChoice]);
     */
    enum PageNavigationType { CONTINUE, GO_TO_PAGE, RESTART, SUBMIT }
    /**
     * A question item that allows the respondent to enter a block of text. Items can be accessed or
     * created from a Form. When used in a quiz, these items are graded.
     *
     *     // Open a form by ID and add a new paragraph text item.
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var item = form.addParagraphTextItem();
     *     item.setTitle('What is your address?');
     */
    interface ParagraphTextItem {
      clearValidation(): ParagraphTextItem;
      createResponse(response: string): ItemResponse;
      duplicate(): ParagraphTextItem;
      getGeneralFeedback(): QuizFeedback;
      getHelpText(): string;
      getId(): Integer;
      getIndex(): Integer;
      getPoints(): Integer;
      getTitle(): string;
      getType(): ItemType;
      isRequired(): boolean;
      setGeneralFeedback(feedback: QuizFeedback): ParagraphTextItem;
      setHelpText(text: string): ParagraphTextItem;
      setPoints(points: Integer): ParagraphTextItem;
      setRequired(enabled: boolean): ParagraphTextItem;
      setTitle(title: string): ParagraphTextItem;
      setValidation(validation: ParagraphTextValidation): ParagraphTextItem;
    }
    /**
     * A DataValidation for a ParagraphTextItem.
     *
     *     // Add a paragraph text item to a form and require the answer to be at least 100 characters.
     *     var paragraphTextItem = form.addParagraphTextItem().setTitle('Describe yourself:');
     *     var paragraphtextValidation = FormApp.createParagraphTextValidation()
     *       .setHelpText(“Answer must be more than 100 characters.”)
     *       .requireTextLengthGreatherThan(100);
     *     paragraphTextItem.setValidation(paragraphtextValidation);
     */
    // tslint:disable-next-line: no-empty-interface
    interface ParagraphTextValidation {
    }
    /**
     * A DataValidationBuilder for a ParagraphTextValidation.
     *
     *     // Add a paragraph text item to a form and require the answer to be at least 100 characters.
     *     var paragraphTextItem = form.addParagraphTextItem().setTitle('Describe yourself:');
     *     var paragraphtextValidation = FormApp.createParagraphTextValidation()
     *       .setHelpText(“Answer must be more than 100 characters.”)
     *       .requireTextLengthGreatherThan(100);
     *     paragraphTextItem.setValidation(paragraphtextValidation);
     */
    interface ParagraphTextValidationBuilder {
      requireTextContainsPattern(pattern: string): ParagraphTextValidationBuilder;
      requireTextDoesNotContainPattern(pattern: string): ParagraphTextValidationBuilder;
      requireTextDoesNotMatchPattern(pattern: string): ParagraphTextValidationBuilder;
      requireTextLengthGreaterThanOrEqualTo(number: Integer): ParagraphTextValidationBuilder;
      requireTextLengthLessThanOrEqualTo(number: Integer): ParagraphTextValidationBuilder;
      requireTextMatchesPattern(pattern: string): ParagraphTextValidationBuilder;
    }
    /**
     * The bean implementation of a Feedback, which contains properties common to all feedback, such as
     * display text or links.
     *
     * Feedback can be added to gradeable Form items.
     *
     *     // Setting feedback which should be automatically shown when a user responds to a question
     *     // incorrectly.
     *     var textItem = form.addTextItem().setTitle('Re-hydrating dried fruit is an example of what?');
     *     var feedback = FormApp.createFeedback()
     *       .setDisplayText(
     *           “Good answer, but not quite right.  Please review chapter 4 before next time.”)
     *       .addLink("http://wikipedia.com/osmosis");
     *     textItem.setFeedbackForIncorrect(feedback);
     */
    interface QuizFeedback {
      getLinkUrls(): string[];
      getText(): string;
    }
    /**
     * The base FeedbackBuilder that contains setters for properties common to all feedback, such as
     * display text. Used to build Feedback objects.
     *
     *     // Open a form by ID and add a new list item.
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var item = form.addListItem();
     *     item.setTitle('Do you prefer cats or dogs?');
     *     item.setChoices([
     *       item.createChoice('Dogs', true),
     *       item.createChoice('Cats', false)]);
     *     // Add feedback which will be shown for correct responses; ie "Dogs".
     *     item.setFeedbackForCorrect(FormApp.createFeedback().setText("Dogs rule, cats drool.").build());
     */
    interface QuizFeedbackBuilder {
      addLink(url: string): QuizFeedbackBuilder;
      addLink(url: string, displayText: string): QuizFeedbackBuilder;
      build(): QuizFeedback;
      copy(): QuizFeedbackBuilder;
      setText(text: string): QuizFeedbackBuilder;
    }
    /**
     * A question item that allows the respondent to choose one option from a numbered sequence of radio
     * buttons. Items can be accessed or created from a Form. When used in a quiz, these items
     * are graded.
     *
     *     // Open a form by ID and add a new scale item.
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var item = form.addScaleItem();
     *     item.setTitle('Pick a number between 1 and 10')
     *         .setBounds(1, 10);
     */
    interface ScaleItem {
      createResponse(response: Integer): ItemResponse;
      duplicate(): ScaleItem;
      getGeneralFeedback(): QuizFeedback;
      getHelpText(): string;
      getId(): Integer;
      getIndex(): Integer;
      getLeftLabel(): string;
      getLowerBound(): Integer;
      getPoints(): Integer;
      getRightLabel(): string;
      getTitle(): string;
      getType(): ItemType;
      getUpperBound(): Integer;
      isRequired(): boolean;
      setBounds(lower: Integer, upper: Integer): ScaleItem;
      setGeneralFeedback(feedback: QuizFeedback): ScaleItem;
      setHelpText(text: string): ScaleItem;
      setLabels(lower: string, upper: string): ScaleItem;
      setPoints(points: Integer): ScaleItem;
      setRequired(enabled: boolean): ScaleItem;
      setTitle(title: string): ScaleItem;
    }
    /**
     * A layout item that visually indicates the start of a section. Items can be accessed or created
     * from a Form.
     *
     *     // Open a form by ID and add a new section header.
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var item = form.addSectionHeaderItem();
     *     item.setTitle('Title of new section');
     */
    interface SectionHeaderItem {
      duplicate(): SectionHeaderItem;
      getHelpText(): string;
      getId(): Integer;
      getIndex(): Integer;
      getTitle(): string;
      getType(): ItemType;
      setHelpText(text: string): SectionHeaderItem;
      setTitle(title: string): SectionHeaderItem;
    }
    /**
     * A question item that allows the respondent to enter a single line of text. Items can be accessed
     * or created from a Form. When used in a quiz, these items are graded.
     *
     *     // Open a form by ID and add a new text item.
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var item = form.addTextItem();
     *     item.setTitle('What is your name?');
     */
    interface TextItem {
      clearValidation(): TextItem;
      createResponse(response: string): ItemResponse;
      duplicate(): TextItem;
      getGeneralFeedback(): QuizFeedback;
      getHelpText(): string;
      getId(): Integer;
      getIndex(): Integer;
      getPoints(): Integer;
      getTitle(): string;
      getType(): ItemType;
      isRequired(): boolean;
      setGeneralFeedback(feedback: QuizFeedback): TextItem;
      setHelpText(text: string): TextItem;
      setPoints(points: Integer): TextItem;
      setRequired(enabled: boolean): TextItem;
      setTitle(title: string): TextItem;
      setValidation(validation: TextValidation): TextItem;
    }
    /**
     * A DataValidation for a TextItem.
     *
     *     // Add a text item to a form and require it to be a number within a range.
     *     var textItem = form.addTextItem().setTitle('Pick a number between 1 and 100?');
     *     var textValidation = FormApp.createTextValidation()
     *       .setHelpText(“Input was not a number between 1 and 100.”)
     *       .requireNumberBetween(1, 100)
     *       .build();
     *     textItem.setValidation(textValidation);
     */
    // tslint:disable-next-line: no-empty-interface
    interface TextValidation {
    }
    /**
     * A DataValidationBuilder for a TextValidation.
     *
     *     // Add a text item to a form and require it to be a number within a range.
     *     var textItem = form.addTextItem().setTitle('Pick a number between 1 and 100?');
     *     var textValidation = FormApp.createTextValidation()
     *       .setHelpText(“Input was not a number between 1 and 100.”)
     *       .requireNumberBetween(1, 100);
     *     textItem.setValidation(textValidation);
     */
    interface TextValidationBuilder {
      requireNumber(): TextValidationBuilder;
      requireNumberBetween(start: number, end: number): TextValidationBuilder;
      requireNumberEqualTo(number: number): TextValidationBuilder;
      requireNumberGreaterThan(number: number): TextValidationBuilder;
      requireNumberGreaterThanOrEqualTo(number: number): TextValidationBuilder;
      requireNumberLessThan(number: number): TextValidationBuilder;
      requireNumberLessThanOrEqualTo(number: number): TextValidationBuilder;
      requireNumberNotBetween(start: number, end: number): TextValidationBuilder;
      requireNumberNotEqualTo(number: number): TextValidationBuilder;
      requireTextContainsPattern(pattern: string): TextValidationBuilder;
      requireTextDoesNotContainPattern(pattern: string): TextValidationBuilder;
      requireTextDoesNotMatchPattern(pattern: string): TextValidationBuilder;
      requireTextIsEmail(): TextValidationBuilder;
      requireTextIsUrl(): TextValidationBuilder;
      requireTextLengthGreaterThanOrEqualTo(number: Integer): TextValidationBuilder;
      requireTextLengthLessThanOrEqualTo(number: Integer): TextValidationBuilder;
      requireTextMatchesPattern(pattern: string): TextValidationBuilder;
      requireWholeNumber(): TextValidationBuilder;
    }
    /**
     * A question item that allows the respondent to indicate a time of day. Items can be accessed or
     * created from a Form. When used in a quiz, these items are graded.
     *
     *     // Open a form by ID and add a new time item.
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     var item = form.addTimeItem();
     *     item.setTitle('What time do you usually wake up in the morning?');
     */
    interface TimeItem {
      createResponse(hour: Integer, minute: Integer): ItemResponse;
      duplicate(): TimeItem;
      getGeneralFeedback(): QuizFeedback;
      getHelpText(): string;
      getId(): Integer;
      getIndex(): Integer;
      getPoints(): Integer;
      getTitle(): string;
      getType(): ItemType;
      isRequired(): boolean;
      setGeneralFeedback(feedback: QuizFeedback): TimeItem;
      setHelpText(text: string): TimeItem;
      setPoints(points: Integer): TimeItem;
      setRequired(enabled: boolean): TimeItem;
      setTitle(title: string): TimeItem;
    }
    /**
     * A layout item that displays a video. Items can be accessed or created from a Form.
     *
     *     // Open a form by ID and add three new video items, using a long URL,
     *     // a short URL, and a video ID.
     *     var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *     form.addVideoItem()
     *         .setTitle('Video Title')
     *         .setHelpText('Video Caption')
     *         .setVideoUrl('www.youtube.com/watch?v=1234abcdxyz');
     *
     *     form.addVideoItem()
     *         .setTitle('Video Title')
     *         .setHelpText('Video Caption')
     *         .setVideoUrl('youtu.be/1234abcdxyz');
     *
     *     form.addVideoItem()
     *         .setTitle('Video Title')
     *         .setHelpText('Video Caption')
     *         .setVideoUrl('1234abcdxyz');
     */
    interface VideoItem {
      duplicate(): VideoItem;
      getAlignment(): Alignment;
      getHelpText(): string;
      getId(): Integer;
      getIndex(): Integer;
      getTitle(): string;
      getType(): ItemType;
      getWidth(): Integer;
      setAlignment(alignment: Alignment): VideoItem;
      setHelpText(text: string): VideoItem;
      setTitle(title: string): VideoItem;
      setVideoUrl(youtubeUrl: string): VideoItem;
      setWidth(width: Integer): VideoItem;
    }
  }
}

declare var FormApp: GoogleAppsScript.Forms.FormApp;
