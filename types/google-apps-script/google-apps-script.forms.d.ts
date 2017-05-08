// Type definitions for Google Apps Script 2015-11-12
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped




declare namespace GoogleAppsScript {
  export module Forms {
    /**
     * An enum representing the supported types of image alignment. Alignment types can be accessed from
     *  FormApp.Alignment.
     *
     *      // Open a form by ID and add a new image item with alignment
     *      var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *      var img = UrlFetchApp.fetch('https://www.google.com/images/srpr/logo4w.png');
     *      form.addImageItem()
     *          .setImage(img)
     *          .setAlignment(FormApp.Alignment.CENTER);
     */
    export enum Alignment { LEFT, CENTER, RIGHT }

    /**
     * A question item that allows the respondent to select one or more checkboxes, as well as an
     *  optional "other" field. Items can be accessed or created from a Form.
     *
     *      // Open a form by ID and add a new checkbox item.
     *      var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *      var item = form.addCheckboxItem();
     *      item.setTitle('What condiments would you like on your hot dog?')
     *          .setChoices([
     *                item.createChoice('Ketchup'),
     *                item.createChoice('Mustard'),
     *                item.createChoice('Relish')
     *          ])
     *          .showOtherOption(true);
     */
    export interface CheckboxItem {
      createChoice(value: string): Choice;
      createResponse(responses: String[]): ItemResponse;
      duplicate(): CheckboxItem;
      getChoices(): Choice[];
      getHelpText(): string;
      getId(): Integer;
      getIndex(): Integer;
      getTitle(): string;
      getType(): ItemType;
      hasOtherOption(): boolean;
      isRequired(): boolean;
      setChoiceValues(values: String[]): CheckboxItem;
      setChoices(choices: Choice[]): CheckboxItem;
      setHelpText(text: string): CheckboxItem;
      setRequired(enabled: boolean): CheckboxItem;
      setTitle(title: string): CheckboxItem;
      showOtherOption(enabled: boolean): CheckboxItem;
    }

    /**
     * A single choice associated with a type of Item that supports choices, like
     *  CheckboxItem, ListItem, or MultipleChoiceItem.
     *
     *      // Create a new form and add a multiple-choice item.
     *      var form = FormApp.create('Form Name');
     *      var item = form.addMultipleChoiceItem();
     *      item.setTitle('Do you prefer cats or dogs?')
     *          .setChoices([
     *              item.createChoice('Cats', FormApp.PageNavigationType.CONTINUE),
     *              item.createChoice('Dogs', FormApp.PageNavigationType.RESTART)
     *          ]);
     *
     *      // Add another page because navigation has no effect on the last page.
     *      form.addPageBreakItem().setTitle('You chose well!');
     *
     *      // Log the navigation types that each choice results in.
     *      var choices = item.getChoices();
     *      for (var i = 0; i < choices.length; i++) {
     *      Logger.log('If the respondent chooses "%s", the form will %s.',
     *                 choices[i].getValue(),
     *                 choices[i].getPageNavigationType());
     *      }
     */
    export interface Choice {
      getGotoPage(): PageBreakItem;
      getPageNavigationType(): PageNavigationType;
      getValue(): string;
    }

    /**
     * A question item that allows the respondent to indicate a date. Items can be accessed or created
     *  from a Form.
     *
     *      // Open a form by ID and add a new date item.
     *      var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *      var item = form.addDateItem();
     *      item.setTitle('When were you born?');
     */
    export interface DateItem {
      createResponse(response: Date): ItemResponse;
      duplicate(): DateItem;
      getHelpText(): string;
      getId(): Integer;
      getIndex(): Integer;
      getTitle(): string;
      getType(): ItemType;
      includesYear(): boolean;
      isRequired(): boolean;
      setHelpText(text: string): DateItem;
      setIncludesYear(enableYear: boolean): DateItem;
      setRequired(enabled: boolean): DateItem;
      setTitle(title: string): DateItem;
    }

    /**
     * A question item that allows the respondent to indicate a date and time. Items can be accessed or
     *  created from a Form.
     *
     *      // Open a form by ID and add a new date-time item.
     *      var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *      var item = form.addDateTimeItem();
     *      item.setTitle('When do you want to meet?');
     */
    export interface DateTimeItem {
      createResponse(response: Date): ItemResponse;
      duplicate(): DateTimeItem;
      getHelpText(): string;
      getId(): Integer;
      getIndex(): Integer;
      getTitle(): string;
      getType(): ItemType;
      includesYear(): boolean;
      isRequired(): boolean;
      setHelpText(text: string): DateTimeItem;
      setIncludesYear(enableYear: boolean): DateTimeItem;
      setRequired(enabled: boolean): DateTimeItem;
      setTitle(title: string): DateTimeItem;
    }

    /**
     * An enum representing the supported types of form-response destinations. All forms, including
     *  those that do not have a destination set explicitly,
     *  save
     *  a copy of responses in the form's response store. Destination types can be accessed from
     *  FormApp.DestinationType.
     *
     *      // Open a form by ID and create a new spreadsheet.
     *      var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *      var ss = SpreadsheetApp.create('Spreadsheet Name');
     *
     *      // Update the form's response destination.
     *      form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());
     */
    export enum DestinationType { SPREADSHEET }

    /**
     * A question item that allows the respondent to indicate a length of time. Items can be accessed or
     *  created from a Form.
     *
     *      // Open a form by ID and add a new duration item.
     *      var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *      var item = form.addDurationItem();
     *      item.setTitle('How long can you hold your breath?');
     */
    export interface DurationItem {
      createResponse(hours: Integer, minutes: Integer, seconds: Integer): ItemResponse;
      duplicate(): DurationItem;
      getHelpText(): string;
      getId(): Integer;
      getIndex(): Integer;
      getTitle(): string;
      getType(): ItemType;
      isRequired(): boolean;
      setHelpText(text: string): DurationItem;
      setRequired(enabled: boolean): DurationItem;
      setTitle(title: string): DurationItem;
    }

    /**
     * A form that contains overall properties (such as title, settings, and where responses are stored)
     *  and items (which includes question items like checkboxes and layout items like page breaks).
     *  Forms can be accessed or created from FormApp.
     *
     *      // Open a form by ID and create a new spreadsheet.
     *      var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *      var ss = SpreadsheetApp.create('Spreadsheet Name');
     *
     *      // Update form properties via chaining.
     *      form.setTitle('Form Name')
     *          .setDescription('Description of form')
     *          .setConfirmationMessage('Thanks for responding!')
     *          .setAllowResponseEdits(true)
     *          .setAcceptingResponses(false);
     *
     *      // Update the form's response destination.
     *      form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());
     */
    export interface Form {
      addCheckboxItem(): CheckboxItem;
      addDateItem(): DateItem;
      addDateTimeItem(): DateTimeItem;
      addDurationItem(): DurationItem;
      addEditor(emailAddress: string): Form;
      addEditor(user: Base.User): Form;
      addEditors(emailAddresses: String[]): Form;
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
      getResponses(timestamp: Date): FormResponse[];
      getShuffleQuestions(): boolean;
      getSummaryUrl(): string;
      getTitle(): string;
      hasLimitOneResponsePerUser(): boolean;
      hasProgressBar(): boolean;
      hasRespondAgainLink(): boolean;
      isAcceptingResponses(): boolean;
      isPublishingSummary(): boolean;
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
      setLimitOneResponsePerUser(enabled: boolean): Form;
      setProgressBar(enabled: boolean): Form;
      setPublishingSummary(enabled: boolean): Form;
      setRequireLogin(requireLogin: boolean): Form;
      setShowLinkToRespondAgain(enabled: boolean): Form;
      setShuffleQuestions(shuffle: boolean): Form;
      setTitle(title: string): Form;
      shortenFormUrl(url: string): string;
    }

    /**
     * Allows a script to open existing Forms or create new ones.
     *
     *      // Open a form by ID.
     *      var existingForm = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *
     *      // Create and open a form.
     *      var newForm = FormApp.create('Form Name');
     */
    export interface FormApp {
      Alignment: Alignment
      DestinationType: DestinationType
      ItemType: ItemType
      PageNavigationType: PageNavigationType
      create(title: string): Form;
      getActiveForm(): Form;
      getUi(): Base.Ui;
      openById(id: string): Form;
      openByUrl(url: string): Form;
    }

    /**
     * A response to the form as a whole. Form responses have three main uses: they contain the answers
     *  submitted by a respondent (see getItemResponses(), they can be used to programmatically
     *  respond to the form (see withItemResponse(response) and submit()), and they
     *  can be used as a template to create a URL for the form with pre-filled answers. Form responses
     *  can be created or accessed from a Form.
     *
     *      // Open a form by ID and log the responses to each question.
     *      var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *      var formResponses = form.getResponses();
     *      for (var i = 0; i < formResponses.length; i++) {
     *        var formResponse = formResponses[i];
     *        var itemResponses = formResponse.getItemResponses();
     *        for (var j = 0; j < itemResponses.length; j++) {
     *          var itemResponse = itemResponses[j];
     *          Logger.log('Response #%s to the question "%s" was "%s"',
     *              (i + 1).toString(),
     *              itemResponse.getItem().getTitle(),
     *              itemResponse.getResponse());
     *        }
     *      }
     */
    export interface FormResponse {
      getEditResponseUrl(): string;
      getId(): string;
      getItemResponses(): ItemResponse[];
      getRespondentEmail(): string;
      getResponseForItem(item: Item): ItemResponse;
      getTimestamp(): Date;
      submit(): FormResponse;
      toPrefilledUrl(): string;
      withItemResponse(response: ItemResponse): FormResponse;
    }

    /**
     * A question item, presented as a grid of columns and rows, that allows the respondent to select
     *  one choice per row from a sequence of radio buttons. Items can be accessed or created from a
     *  Form.
     *
     *      // Open a form by ID and add a new grid item.
     *      var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *      var item = form.addGridItem();
     *      item.setTitle('Rate your interests')
     *          .setRows(['Cars', 'Computers', 'Celebrities'])
     *          .setColumns(['Boring', 'So-so', 'Interesting']);
     */
    export interface GridItem {
      createResponse(responses: String[]): ItemResponse;
      duplicate(): GridItem;
      getColumns(): String[];
      getHelpText(): string;
      getId(): Integer;
      getIndex(): Integer;
      getRows(): String[];
      getTitle(): string;
      getType(): ItemType;
      isRequired(): boolean;
      setColumns(columns: String[]): GridItem;
      setHelpText(text: string): GridItem;
      setRequired(enabled: boolean): GridItem;
      setRows(rows: String[]): GridItem;
      setTitle(title: string): GridItem;
    }

    /**
     * A layout item that displays an image. Items can be accessed or created from a Form.
     *
     *      // Open a form by ID and add a new image item
     *      var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *      var img = UrlFetchApp.fetch('https://www.google.com/images/srpr/logo4w.png');
     *      form.addImageItem()
     *          .setTitle('Google')
     *          .setHelpText('Google Logo') // The help text is the image description
     *          .setImage(img);
     */
    export interface ImageItem {
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
     *  Items can be accessed or created from a Form.
     *
     *  To operate on type-specific properties, use getType() to check the item's
     *  ItemType, then cast the item to the
     *  appropriate class using a method like asCheckboxItem().
     *
     *      // Create a new form and add a text item.
     *      var form = FormApp.create('Form Name');
     *      form.addTextItem();
     *
     *      // Access the text item as a generic item.
     *      var items = form.getItems();
     *      var item = items[0];
     *
     *      // Cast the generic item to the text-item class.
     *      if (item.getType() == 'TEXT') {
     *        var textItem = item.asTextItem();
     *        textItem.setRequired(false);
     *      }
     */
    export interface Item {
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
     * A response to one question item within a form. Item responses can be accessed from
     *  FormResponse and created from any Item that asks the respondent to answer a
     *  question.
     *
     *      // Open a form by ID and log the responses to each question.
     *      var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *      var formResponses = form.getResponses();
     *      for (var i = 0; i < formResponses.length; i++) {
     *        var formResponse = formResponses[i];
     *        var itemResponses = formResponse.getItemResponses();
     *        for (var j = 0; j < itemResponses.length; j++) {
     *          var itemResponse = itemResponses[j];
     *          Logger.log('Response #%s to the question "%s" was "%s"',
     *              (i + 1).toString(),
     *              itemResponse.getItem().getTitle(),
     *              itemResponse.getResponse());
     *        }
     *      }
     */
    export interface ItemResponse {
      getItem(): Item;
      getResponse(): Object;
    }

    /**
     * An enum representing the supported types of form items. Item types can be accessed from
     *  FormApp.ItemType.
     *
     *      // Open a form by ID and add a new section header.
     *      var form = FormApp.create('Form Name');
     *      var item = form.addSectionHeaderItem();
     *      item.setTitle('Title of new section');
     *
     *      // Check the item type.
     *      if (item.getType() == FormApp.ItemType.SECTION_HEADER) {
     *        item.setHelpText('Description of new section.');
     *      }
     */
    export enum ItemType { CHECKBOX, DATE, DATETIME, DURATION, GRID, IMAGE, LIST, MULTIPLE_CHOICE, PAGE_BREAK, PARAGRAPH_TEXT, SCALE, SECTION_HEADER, TEXT, TIME }

    /**
     * A question item that allows the respondent to select one choice from a drop-down list. Items can
     *  be accessed or created from a Form.
     *
     *      // Open a form by ID and add a new list item.
     *      var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *      var item = form.addListItem();
     *      item.setTitle('Do you prefer cats or dogs?')
     *          .setChoices([
     *              item.createChoice('Cats'),
     *              item.createChoice('Dogs')
     *          ]);
     */
    export interface ListItem {
      createChoice(value: string): Choice;
      createChoice(value: string, navigationItem: PageBreakItem): Choice;
      createChoice(value: string, navigationType: PageNavigationType): Choice;
      createResponse(response: string): ItemResponse;
      duplicate(): ListItem;
      getChoices(): Choice[];
      getHelpText(): string;
      getId(): Integer;
      getIndex(): Integer;
      getTitle(): string;
      getType(): ItemType;
      isRequired(): boolean;
      setChoiceValues(values: String[]): ListItem;
      setChoices(choices: Choice[]): ListItem;
      setHelpText(text: string): ListItem;
      setRequired(enabled: boolean): ListItem;
      setTitle(title: string): ListItem;
    }

    /**
     * A question item that allows the respondent to select one choice from a list of radio buttons or
     *  an optional "other" field. Items can be accessed or created from a Form.
     *
     *      // Open a form by ID and add a new multiple choice item.
     *      var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *      var item = form.addMultipleChoiceItem();
     *      item.setTitle('Do you prefer cats or dogs?')
     *          .setChoices([
     *              item.createChoice('Cats'),
     *              item.createChoice('Dogs')
     *           ])
     *          .showOtherOption(true);
     */
    export interface MultipleChoiceItem {
      createChoice(value: string): Choice;
      createChoice(value: string, navigationItem: PageBreakItem): Choice;
      createChoice(value: string, navigationType: PageNavigationType): Choice;
      createResponse(response: string): ItemResponse;
      duplicate(): MultipleChoiceItem;
      getChoices(): Choice[];
      getHelpText(): string;
      getId(): Integer;
      getIndex(): Integer;
      getTitle(): string;
      getType(): ItemType;
      hasOtherOption(): boolean;
      isRequired(): boolean;
      setChoiceValues(values: String[]): MultipleChoiceItem;
      setChoices(choices: Choice[]): MultipleChoiceItem;
      setHelpText(text: string): MultipleChoiceItem;
      setRequired(enabled: boolean): MultipleChoiceItem;
      setTitle(title: string): MultipleChoiceItem;
      showOtherOption(enabled: boolean): MultipleChoiceItem;
    }

    /**
     * A layout item that marks the start of a page. Items can be accessed or
     *  created from a Form.
     *
     *      // Create a form and add three page-break items.
     *      var form = FormApp.create('Form Name');
     *      var pageTwo = form.addPageBreakItem().setTitle('Page Two');
     *      var pageThree = form.addPageBreakItem().setTitle('Page Three');
     *
     *      // Make the first two pages navigate elsewhere upon completion.
     *      pageTwo.setGoToPage(pageThree); // At end of page one (start of page two), jump to page three
     *      pageThree.setGoToPage(FormApp.PageNavigationType.RESTART); // At end of page two, restart form
     */
    export interface PageBreakItem {
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
     *  accessed from FormApp.PageNavigationType.
     *
     * The page navigation occurs after the respondent completes a page that contains the option, and
     *  only if the respondent chose that option. If the respondent chose multiple options with
     *  page-navigation instructions on the same page, only the last navigation option has any effect.
     *  Page navigation also has no effect on the last page of a form.
     * Choices that use page navigation cannot be combined in the same item with choices that do not
     *  use page navigation.
     *
     *      // Create a form and add a new multiple-choice item and a page-break item.
     *      var form = FormApp.create('Form Name');
     *      var item = form.addMultipleChoiceItem();
     *      var pageBreak = form.addPageBreakItem();
     *
     *      // Set some choices with go-to-page logic.
     *      var rightChoice = item.createChoice('Vanilla', FormApp.PageNavigationType.SUBMIT);
     *      var wrongChoice = item.createChoice('Chocolate', FormApp.PageNavigationType.RESTART);
     *
     *      // For GO_TO_PAGE, just pass in the page break item. For CONTINUE (normally the default), pass in
     *      // CONTINUE explicitly because page navigation cannot be mixed with non-navigation choices.
     *      var iffyChoice = item.createChoice('Peanut', pageBreak);
     *      var otherChoice = item.createChoice('Strawberry', FormApp.PageNavigationType.CONTINUE);
     *      item.setChoices([rightChoice, wrongChoice, iffyChoice, otherChoice]);
     */
    export enum PageNavigationType { CONTINUE, GO_TO_PAGE, RESTART, SUBMIT }

    /**
     * A question item that allows the respondent to enter a block of text. Items can be accessed or
     *  created from a Form.
     *
     *      // Open a form by ID and add a new paragraph text item.
     *      var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *      var item = form.addParagraphTextItem();
     *      item.setTitle('What is your address?');
     */
    export interface ParagraphTextItem {
      createResponse(response: string): ItemResponse;
      duplicate(): ParagraphTextItem;
      getHelpText(): string;
      getId(): Integer;
      getIndex(): Integer;
      getTitle(): string;
      getType(): ItemType;
      isRequired(): boolean;
      setHelpText(text: string): ParagraphTextItem;
      setRequired(enabled: boolean): ParagraphTextItem;
      setTitle(title: string): ParagraphTextItem;
    }

    /**
     * A question item that allows the respondent to choose one option from a numbered sequence of radio
     *  buttons. Items can be accessed or created from a Form.
     *
     *      // Open a form by ID and add a new scale item.
     *      var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *      var item = form.addScaleItem();
     *      item.setTitle('Pick a number between 1 and 10')
     *          .setBounds(1, 10);
     */
    export interface ScaleItem {
      createResponse(response: Integer): ItemResponse;
      duplicate(): ScaleItem;
      getHelpText(): string;
      getId(): Integer;
      getIndex(): Integer;
      getLeftLabel(): string;
      getLowerBound(): Integer;
      getRightLabel(): string;
      getTitle(): string;
      getType(): ItemType;
      getUpperBound(): Integer;
      isRequired(): boolean;
      setBounds(lower: Integer, upper: Integer): ScaleItem;
      setHelpText(text: string): ScaleItem;
      setLabels(lower: string, upper: string): ScaleItem;
      setRequired(enabled: boolean): ScaleItem;
      setTitle(title: string): ScaleItem;
    }

    /**
     * A layout item that visually indicates the start of a section. Items can be accessed or created
     *  from a Form.
     *
     *      // Open a form by ID and add a new section header.
     *      var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *      var item = form.addSectionHeaderItem();
     *      item.setTitle('Title of new section');
     */
    export interface SectionHeaderItem {
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
     *  or created from a Form.
     *
     *      // Open a form by ID and add a new text item.
     *      var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *      var item = form.addTextItem();
     *      item.setTitle('What is your name?');
     */
    export interface TextItem {
      createResponse(response: string): ItemResponse;
      duplicate(): TextItem;
      getHelpText(): string;
      getId(): Integer;
      getIndex(): Integer;
      getTitle(): string;
      getType(): ItemType;
      isRequired(): boolean;
      setHelpText(text: string): TextItem;
      setRequired(enabled: boolean): TextItem;
      setTitle(title: string): TextItem;
    }

    /**
     * A question item that allows the respondent to indicate a time of day. Items can be accessed or
     *  created from a Form.
     *
     *      // Open a form by ID and add a new time item.
     *      var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *      var item = form.addTimeItem();
     *      item.setTitle('What time do you usually wake up in the morning?');
     */
    export interface TimeItem {
      createResponse(hour: Integer, minute: Integer): ItemResponse;
      duplicate(): TimeItem;
      getHelpText(): string;
      getId(): Integer;
      getIndex(): Integer;
      getTitle(): string;
      getType(): ItemType;
      isRequired(): boolean;
      setHelpText(text: string): TimeItem;
      setRequired(enabled: boolean): TimeItem;
      setTitle(title: string): TimeItem;
    }

    /**
     * A layout item that displays a video. Items can be accessed or created from a Form.
     *
     *      // Open a form by ID and add three new video items, using a long URL,
     *      // a short URL, and a video ID.
     *      var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
     *      form.addVideoItem()
     *          .setTitle('Video Title')
     *          .setHelpText('Video Caption')
     *          .setVideoUrl('www.youtube.com/watch?v=1234abcdxyz');
     *
     *      form.addVideoItem()
     *          .setTitle('Video Title')
     *          .setHelpText('Video Caption')
     *          .setVideoUrl('youtu.be/1234abcdxyz');
     *
     *      form.addVideoItem()
     *          .setTitle('Video Title')
     *          .setHelpText('Video Caption')
     *          .setVideoUrl('1234abcdxyz');
     */
    export interface VideoItem {
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
