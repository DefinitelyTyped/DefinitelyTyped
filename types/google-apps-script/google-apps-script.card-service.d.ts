// Type definitions for Google Apps Script 2020-11-02
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.conference-data.d.ts" />
/// <reference path="google-apps-script.gmail.d.ts" />

declare namespace GoogleAppsScript {
  export module Card {
    /**
     * An action that enables interactivity within UI elements. The action does not happen directly on
     * the client but rather invokes an Apps Script callback function with optional parameters.
     *
     *     var image = CardService.newImage()
     *         .setOnClickAction(CardService.newAction()
     *             .setFunctionName("handleImageClick")
     *             .setParameters({imageSrc: 'carImage'}));
     */
    export interface Action {
      setFunctionName(functionName: string): Action;
      setLoadIndicator(loadIndicator: LoadIndicator): Action;
      setParameters(parameters: Object): Action;
      setMethodName(functionName: string): Action;
    }

    /**
     * The response object that may be returned from a callback function (e.g., a form response handler)
     * to perform one or more actions on the client. Some combinations of actions are not supported.
     *
     *     // An action that opens a link
     *     var actionResponse = CardService.newActionResponseBuilder()
     *         .setOpenLink(CardService.newOpenLink()
     *             .setUrl("https://www.google.com"))
     *         .build();
     *
     *     // An action that shows a notification.
     *     var actionResponse = CardService.newActionResponseBuilder()
     *         .setNotification(CardService.newNotification()
     *             .setText("Some info to display to user"))
     *         .build();
     *
     *     // An action that shows an additional card. It also sets a flag to indicate that the original
     *     // state data has changed.
     *
     *     var cardBuilder = CardService.newCardBuilder();
     *     // Build card ...
     *     var actionResponse = CardService.newActionResponseBuilder()
     *         .setNavigation(CardService.newNavigation()
     *             .pushCard(cardBuilder.build()))
     *         .setStateChanged(true)
     *         .build();
     */
    export interface ActionResponse {
      printJson(): string;
    }

    /**
     * A builder for ActionResponse objects.
     */
    export interface ActionResponseBuilder {
      build(): ActionResponse;
      setNavigation(navigation: Navigation): ActionResponseBuilder;
      setNotification(notification: Notification): ActionResponseBuilder;
      setOpenLink(openLink: OpenLink): ActionResponseBuilder;
      setStateChanged(stateChanged: boolean): ActionResponseBuilder;
    }

    /**
     * An authorization action that will send the user to the AuthorizationUrl when clicked.
     *
     *     CardService.newAuthorizationAction()
     *       .setAuthorizationUrl("http://google.com/");
     */
    export interface AuthorizationAction {
      setAuthorizationUrl(authorizationUrl: string): AuthorizationAction;
    }

    /**
     * An error that can be returned to trigger an authorization card to be shown to the user.
     *
     *     CardService.newAuthorizationException()
     *       .setAuthorizationUrl("http://auth.com/")
     *       .setResourceDisplayName("Example Resource")
     *       .throwException();
     */
    export interface AuthorizationException {
      printJson(): string;
      setAuthorizationUrl(authUrl: string): AuthorizationException;
      setCustomUiCallback(callback: string): AuthorizationException;
      setResourceDisplayName(name: string): AuthorizationException;
      throwException(): void;
    }

    /**
     * A base class for all buttons.
     */
    export interface Button {
      setAuthorizationAction(action: AuthorizationAction): Button;
      setComposeAction(action: Action, composedEmailType: ComposedEmailType): Button;
      setOnClickAction(action: Action): Button;
      setOnClickOpenLinkAction(action: Action): Button;
      setOpenLink(openLink: OpenLink): Button;
    }

    /**
     * Holds a set of Button objects that are displayed in a row.
     *
     *     var textButton = CardService.newTextButton();
     *     // Finish building the text button...
     *
     *     var imageButton = CardService.newImageButton();
     *     // Finish building the image button...
     *
     *     var buttonSet = CardService.newButtonSet()
     *         .addButton(textButton)
     *         .addButton(imageButton);
     */
    export interface ButtonSet {
      addButton(button: Button): ButtonSet;
    }

    /**
     * Represents a response that makes changes to the calendar event that the user is currently editing
     * in reaction to an action taken in the UI, such as a button click.
     *
     *     // A CalendarEventActionResponse that adds two attendees to an event.
     *     var calendarEventActionResponse = CardService.newCalendarEventActionResponseBuilder()
     *         .addAttendees(["user1@example.com", "user2@example.com"])
     *         .build();
     */
    export interface CalendarEventActionResponse {
      printJson(): string;
    }

    /**
     * A builder for CalendarEventActionResponse objects.
     */
    export interface CalendarEventActionResponseBuilder {
      addAttendees(emails: String[]): CalendarEventActionResponseBuilder;
      build(): CalendarEventActionResponse;
      setConferenceData(conferenceData: Conference_Data.ConferenceData): CalendarEventActionResponseBuilder;
    }

    /**
     * A context card that represents a single view in the
     * UI.
     *
     *     var cardSection = CardService.newCardSection();
     *     // Finish building the card section ...
     *
     *     var card = CardService.newCardBuilder()
     *         .setName("Card name")
     *         .setHeader(CardService.newCardHeader().setTitle("Card title"))
     *         .addSection(cardSection)
     *         .build();
     */
    export interface Card {
      printJson(): string;
    }

    /**
     * A clickable menu item that is added to the card header menu.
     *
     *     var action = CardService.newAction();
     *     // Finish building the action...
     *
     *     var cardAction = CardService.newCardAction()
     *         .setText("Card action")
     *         .setOnClickAction(action);
     */
    export interface CardAction {
      setAuthorizationAction(action: AuthorizationAction): CardAction;
      setComposeAction(action: Action, composedEmailType: ComposedEmailType): CardAction;
      setOnClickAction(action: Action): CardAction;
      setOnClickOpenLinkAction(action: Action): CardAction;
      setOpenLink(openLink: OpenLink): CardAction;
      setText(text: string): CardAction;
    }

    /**
     * A builder for Card objects.
     */
    export interface CardBuilder {
      addCardAction(cardAction: CardAction): CardBuilder;
      addSection(section: CardSection): CardBuilder;
      build(): Card;
      setDisplayStyle(displayStyle: DisplayStyle): CardBuilder;
      setFixedFooter(fixedFooter: FixedFooter): CardBuilder;
      setHeader(cardHeader: CardHeader): CardBuilder;
      setName(name: string): CardBuilder;
      setPeekCardHeader(peekCardHeader: CardHeader): CardBuilder;
    }

    /**
     * The header of a Card.
     *
     *     var cardHeader = CardService.newCardHeader()
     *         .setTitle("Card header title")
     *         .setSubtitle("Card header subtitle")
     *         .setImageStyle(CardService.ImageStyle.CIRCLE)
     *         .setImageUrl("https://image.png");
     */
    export interface CardHeader {
      setImageAltText(imageAltText: string): CardHeader;
      setImageStyle(imageStyle: ImageStyle): CardHeader;
      setImageUrl(imageUrl: string): CardHeader;
      setSubtitle(subtitle: string): CardHeader;
      setTitle(title: string): CardHeader;
    }

    /**
     * A card section holds groups of widgets and provides visual separation between them.
     *
     *     var image = CardService.newImage();
     *     // Build image ...
     *     var textParagraph = CardService.newTextParagraph();
     *     // Build text paragraph ...
     *
     *     var cardSection = CardService.newCardSection()
     *         .setHeader("Section header")
     *         .addWidget(image)
     *         .addWidget(textParagraph);
     */
    export interface CardSection {
      addWidget(widget: Widget): CardSection;
      setCollapsible(collapsible: boolean): CardSection;
      setHeader(header: string): CardSection;
      setNumUncollapsibleWidgets(numUncollapsibleWidgets: Integer): CardSection;
    }

    /**
     * CardService provides the ability to create generic cards used across different Google
     * extensibility products, such as Gmail add-ons.
     *
     * Currently you can only use this service to construct Gmail add-ons.
     *
     *     return CardService.newCardBuilder()
     *              .setHeader(CardService.newCardHeader().setTitle("CardTitle"))
     *              .build();
     *
     * Or you can return multiple Cards like so:
     *
     *     return [
     *       CardService.newCardBuilder().build(),
     *       CardService.newCardBuilder().build(),
     *       CardService.newCardBuilder().build()
     *     ]
     *
     * The following shows how you could define a card with a header, text, an image and a menu item:
     *
     *     function createWidgetDemoCard() {
     *       return CardService
     *          .newCardBuilder()
     *          .setHeader(
     *              CardService.newCardHeader()
     *                  .setTitle('Widget demonstration')
     *                  .setSubtitle('Check out these widgets')
     *                  .setImageStyle(CardService.ImageStyle.SQUARE)
     *                  .setImageUrl(
     *                      'https://www.example.com/images/headerImage.png'))
     *          .addSection(
     *               CardService.newCardSection()
     *                   .setHeader('Simple widgets')  // optional
     *                   .addWidget(CardService.newTextParagraph().setText(
     *                       'These widgets are display-only. ' +
     *                       'A text paragraph can have multiple lines and ' +
     *                       'formatting.'))
     *                   .addWidget(CardService.newImage().setImageUrl(
     *                       'https://www.example.com/images/mapsImage.png')))
     *          .addCardAction(CardService.newCardAction().setText('Gmail').setOpenLink(
     *              CardService.newOpenLink().setUrl('https://mail.google.com/mail')))
     *          .build();
     *     }
     */
    export interface CardService {
      ComposedEmailType: typeof ComposedEmailType;
      ContentType: typeof ContentType;
      Icon: typeof Icon;
      ImageStyle: typeof ImageStyle;
      LoadIndicator: typeof LoadIndicator;
      OnClose: typeof OnClose;
      OpenAs: typeof OpenAs;
      SelectionInputType: typeof SelectionInputType;
      TextButtonStyle: typeof TextButtonStyle;
      UpdateDraftBodyType: typeof UpdateDraftBodyType;
      newAction(): Action;
      newActionResponseBuilder(): ActionResponseBuilder;
      newAuthorizationAction(): AuthorizationAction;
      newAuthorizationException(): AuthorizationException;
      newButtonSet(): ButtonSet;
      newCalendarEventActionResponseBuilder(): CalendarEventActionResponseBuilder;
      newCardAction(): CardAction;
      newCardBuilder(): CardBuilder;
      newCardHeader(): CardHeader;
      newCardSection(): CardSection;
      newComposeActionResponseBuilder(): ComposeActionResponseBuilder;
      newDatePicker(): DatePicker;
      newDateTimePicker(): DateTimePicker;
      newDecoratedText(): DecoratedText;
      newDriveItemsSelectedActionResponseBuilder(): DriveItemsSelectedActionResponseBuilder;
      newFixedFooter(): FixedFooter;
      newImage(): Image;
      newImageButton(): ImageButton;
      newKeyValue(): KeyValue;
      newNavigation(): Navigation;
      newNotification(): Notification;
      newOpenLink(): OpenLink;
      newSelectionInput(): SelectionInput;
      newSuggestions(): Suggestions;
      newSuggestionsResponseBuilder(): SuggestionsResponseBuilder;
      newSwitch(): Switch;
      newTextButton(): TextButton;
      newTextInput(): TextInput;
      newTextParagraph(): TextParagraph;
      newTimePicker(): TimePicker;
      newUniversalActionResponseBuilder(): UniversalActionResponseBuilder;
      newUpdateDraftActionResponseBuilder(): UpdateDraftActionResponseBuilder;
      newUpdateDraftBccRecipientsAction(): UpdateDraftBccRecipientsAction;
      newUpdateDraftBodyAction(): UpdateDraftBodyAction;
      newUpdateDraftCcRecipientsAction(): UpdateDraftCcRecipientsAction;
      newUpdateDraftSubjectAction(): UpdateDraftSubjectAction;
      newUpdateDraftToRecipientsAction(): UpdateDraftToRecipientsAction;
    }

    /**
     * The response object that may be returned from a callback method for compose action in a Gmail add-on.
     *
     * Note: This object isn't related to compose actions that are
     * used to extend the compose UI. Rather,
     * this object is a response to an Action that composes draft messages when a specific UI element is
     * selected.
     *
     *     var composeActionResponse = CardService.newComposeActionResponseBuilder()
     *         .setGmailDraft(GmailApp.createDraft("recipient", "subject", "body"))
     *         .build();
     */
    export interface ComposeActionResponse {
      printJson(): string;
    }

    /**
     * A builder for ComposeActionResponse objects.
     *
     * Note: This object isn't related to compose actions that are
     * used to extend the compose UI. Rather,
     * this builder creates responses to an Action that composes draft messages when a specific
     * UI element is selected.
     */
    export interface ComposeActionResponseBuilder {
      build(): ComposeActionResponse;
      setGmailDraft(draft: Gmail.GmailDraft): ComposeActionResponseBuilder;
    }

    /**
     * An enum value that specifies whether the composed email is a standalone or reply draft.
     */
    export enum ComposedEmailType { REPLY_AS_DRAFT, STANDALONE_DRAFT }

    /**
     * An enum value that specifies the content type of the content generated by a UpdateDraftActionResponse.
     */
    export enum ContentType { TEXT, MUTABLE_HTML, IMMUTABLE_HTML }

    /**
     * An input field that allows inputing a date.
     *
     *     var dateTimePicker = CardService.newDatePicker()
     *         .setTitle("Enter the date.")
     *         .setFieldName("date_field")
     *         // Set default value as Jan 1, 2018 UTC. Either a number or string is acceptable.
     *         .setValueInMsSinceEpoch(1514775600)
     *         .setOnChangeAction(CardService.newAction()
     *             .setFunctionName("handleDateTimeChange"));
     */
    export interface DatePicker {
      setFieldName(fieldName: string): DatePicker;
      setOnChangeAction(action: Action): DatePicker;
      setTitle(title: string): DatePicker;
      setValueInMsSinceEpoch(valueMsEpoch: Number): DatePicker;
      setValueInMsSinceEpoch(valueMsEpoch: string): DatePicker;
    }

    /**
     * An input field that allows users to input a date and time.
     *
     *     var dateTimePicker = CardService.newDateTimePicker()
     *         .setTitle("Enter the date and time.")
     *         .setFieldName("date_time_field")
     *         // Set default value as Jan 1, 2018, 3:00 AM UTC. Either a number or string is acceptable.
     *         .setValueInMsSinceEpoch(1514775600)
     *         // EDT time is 5 hours behind UTC.
     *         .setTimeZoneOffsetInMins(-5 * 60)
     *         .setOnChangeAction(CardService.newAction()
     *             .setFunctionName("handleDateTimeChange"));
     */
    export interface DateTimePicker {
      setFieldName(fieldName: string): DateTimePicker;
      setOnChangeAction(action: Action): DateTimePicker;
      setTimeZoneOffsetInMins(timeZoneOffsetMins: Integer): DateTimePicker;
      setTitle(title: string): DateTimePicker;
      setValueInMsSinceEpoch(valueMsEpoch: Number): DateTimePicker;
      setValueInMsSinceEpoch(valueMsEpoch: string): DateTimePicker;
    }

    /**
     * A widget that displays text with optional decorations. Possible keys include an icon, a label
     * above and a label below. Setting the text content and one of the keys is required using setText(text) and one of setIcon(icon), setIconUrl(url), setTopLabel(text), or setBottomLabel(text). This class is intended to replace KeyValue.
     *
     *     var decoratedText = CardService.newDecoratedText()
     *         .setText("Text")
     *         .setTopLabel("TopLabel");
     *
     *     var multilineDecoratedText = CardService.newDecoratedText()
     *         .setText("Text")
     *         .setTopLabel("TopLabel")
     *         .setWrapText(true)
     *         .setBottomLabel("BottomLabel");
     */
    export interface DecoratedText {
      setAuthorizationAction(action: AuthorizationAction): DecoratedText;
      setBottomLabel(text: string): DecoratedText;
      setButton(button: Button): DecoratedText;
      setComposeAction(action: Action, composedEmailType: ComposedEmailType): DecoratedText;
      setIcon(icon: Icon): DecoratedText;
      setIconAltText(altText: string): DecoratedText;
      setIconUrl(url: string): DecoratedText;
      setOnClickAction(action: Action): DecoratedText;
      setOnClickOpenLinkAction(action: Action): DecoratedText;
      setOpenLink(openLink: OpenLink): DecoratedText;
      setSwitchControl(switchToSet: Switch): DecoratedText;
      setText(text: string): DecoratedText;
      setTopLabel(text: string): DecoratedText;
      setWrapText(wrapText: boolean): DecoratedText;
    }

    /**
     * An enum that defines the display style of card.
     *
     * DisplayStyle.REPLACE means that the card is shown by replacing the view of top card in
     * the card stack.
     *
     * DisplayStyle.PEEK mean that the header of the card appears at the bottom of the
     * sidebar, partially covering the current top card of the stack. Clicking the header pops the card
     * into the card stack. If the card has no header, a generated header is used instead.
     *
     * DisplayStyle only works for card returned from contextual trigger function.
     */
    export enum DisplayStyle { PEEK, REPLACE }

    /**
     * Represents a response that makes changes to Drive while Drive items are selected and in reaction
     * to an action taken in the UI, such as a button click.
     */
    export interface DriveItemsSelectedActionResponse {
      printJson(): string;
    }

    /**
     * A builder for DriveItemsSelectedActionResponse objects.
     */
    export interface DriveItemsSelectedActionResponseBuilder {
      build(): DriveItemsSelectedActionResponse;
      requestFileScope(itemId: string): DriveItemsSelectedActionResponseBuilder;
    }

    /**
     * The fixed footer shown at the bottom of an add-on Card.
     *
     *     var fixedFooter =
     *           CardService
     *               .newFixedFooter()
     *               .setPrimaryButton(
     *                   CardService
     *                       .newTextButton()
     *                       .setText("help")
     *                       .setOpenLink(CardService.newOpenLink().setUrl("http://www.google.com")));
     */
    export interface FixedFooter {
      setPrimaryButton(button: TextButton): FixedFooter;
      setSecondaryButton(button: TextButton): FixedFooter;
    }

    /**
     * Predefined icons that can be used in various UI objects, such as ImageButton or KeyValue widgets.
     */
    export enum Icon { NONE, AIRPLANE, BOOKMARK, BUS, CAR, CLOCK, CONFIRMATION_NUMBER_ICON, DOLLAR, DESCRIPTION, EMAIL, EVENT_PERFORMER, EVENT_SEAT, FLIGHT_ARRIVAL, FLIGHT_DEPARTURE, HOTEL, HOTEL_ROOM_TYPE, INVITE, MAP_PIN, MEMBERSHIP, MULTIPLE_PEOPLE, OFFER, PERSON, PHONE, RESTAURANT_ICON, SHOPPING_CART, STAR, STORE, TICKET, TRAIN, VIDEO_CAMERA, VIDEO_PLAY }

    /**
     * A widget that shows a single image.
     *
     *     var image = CardService.newImage().setAltText("A nice image").setImageUrl("https://image.png");
     */
    export interface Image {
      setAltText(altText: string): Image;
      setAuthorizationAction(action: AuthorizationAction): Image;
      setComposeAction(action: Action, composedEmailType: ComposedEmailType): Image;
      setImageUrl(url: string): Image;
      setOnClickAction(action: Action): Image;
      setOnClickOpenLinkAction(action: Action): Image;
      setOpenLink(openLink: OpenLink): Image;
    }

    /**
     * A ImageButton with an image displayed on it.
     *
     *     var imageButton = CardService.newImageButton()
     *         .setAltText("An image button with an airplane icon.")
     *         .setIcon(CardService.Icon.AIRPLANE)
     *         .setOpenLink(CardService.newOpenLink()
     *             .setUrl("https://airplane.com"));
     */
    export interface ImageButton {
      setAltText(altText: string): ImageButton;
      setAuthorizationAction(action: AuthorizationAction): ImageButton;
      setComposeAction(action: Action, composedEmailType: ComposedEmailType): ImageButton;
      setIcon(icon: Icon): ImageButton;
      setIconUrl(url: string): ImageButton;
      setOnClickAction(action: Action): ImageButton;
      setOnClickOpenLinkAction(action: Action): ImageButton;
      setOpenLink(openLink: OpenLink): ImageButton;
    }

    /**
     * An enum that defines an image cropping style.
     */
    export enum ImageStyle { SQUARE, CIRCLE }

    /**
     * A widget that displays one or more "keys" around a text "value". The possible keys include an
     * icon, a label above and a label below. Setting the text content and one of the keys is required
     * using setContent(text) and one of setIcon(icon), setIconUrl(url), setTopLabel(text),
     * or setBottomLabel(text).
     *
     *     var imageKeyValue = CardService.newKeyValue()
     *         .setIconUrl("https://icon.png")
     *         .setContent("KeyValue widget with an image on the left and text on the right");
     *
     *     var textKeyValue = CardService.newKeyValue()
     *         .setTopLabel("Text key")
     *         .setContent("KeyValue widget with text key on top and cotent below");
     *
     *     var multilineKeyValue = CardService.newKeyValue()
     *         .setTopLabel("Top label - single line)")
     *         .setContent("Content can be multiple lines")
     *         .setMultiline(true)
     *         .setBottomLabel("Bottom label - single line");
     */
    export interface KeyValue {
      setAuthorizationAction(action: AuthorizationAction): KeyValue;
      setBottomLabel(text: string): KeyValue;
      setButton(button: Button): KeyValue;
      setComposeAction(action: Action, composedEmailType: ComposedEmailType): KeyValue;
      setContent(text: string): KeyValue;
      setIcon(icon: Icon): KeyValue;
      setIconAltText(altText: string): KeyValue;
      setIconUrl(url: string): KeyValue;
      setMultiline(multiline: boolean): KeyValue;
      setOnClickAction(action: Action): KeyValue;
      setOnClickOpenLinkAction(action: Action): KeyValue;
      setOpenLink(openLink: OpenLink): KeyValue;
      setSwitch(switchToSet: Switch): KeyValue;
      setTopLabel(text: string): KeyValue;
    }

    /**
     * An enum type that specifies the type of loading or progress indicator to display while an Action is being processed.
     */
    export enum LoadIndicator { SPINNER, NONE }

    /**
     * A helper object that controls card navigation. See the card navigation guide for more details.
     */
    export interface Navigation {
      popCard(): Navigation;
      popToNamedCard(cardName: string): Navigation;
      popToRoot(): Navigation;
      printJson(): string;
      pushCard(card: Card): Navigation;
      updateCard(card: Card): Navigation;
    }

    /**
     * A notification shown to the user as a response to interacting with a UI element.
     *
     *     var action = CardService.newAction().setFunctionName("notificationCallback");
     *     CardService.newTextButton().setText('Save').setOnClickAction(action);
     *
     *     // ...
     *
     *     function notificationCallback() {
     *       return CardService.newActionResponseBuilder()
     *           .setNotification(CardService.newNotification()
     *               .setText("Some info to display to user"))
     *           .build();
     *     }
     */
    export interface Notification {
      setText(text: string): Notification;
    }

    /**
     * An enum that specifies what to do when a URL opened through an OpenLink is closed.
     *
     * When a link is opened, the client either forgets about it or waits until the window is closed.
     * The implementation depends on the client platform capabilities. OnClose may cause OpenAs to be ignored; if the client platform cannot support both selected values together,
     * OnClose takes precedence.
     */
    export enum OnClose { NOTHING, RELOAD_ADD_ON }

    /**
     * An enum that specifies how to open a URL.
     *
     * The client can open a URL as either a full size window (if that is the frame used by the
     * client), or an overlay (such as a pop-up). The implementation depends on the client platform
     * capabilities, and the value selected may be ignored if the client does not support it. FULL_SIZE is supported by all clients.
     *
     * Using OnClose may cause OpenAs to be ignored; if the client platform cannot
     * support both selected values together, OnClose takes precedence.
     */
    export enum OpenAs { FULL_SIZE, OVERLAY }

    /**
     * Represents an action to open a link with some options.
     *
     *     // A button that opens as a link in an overlay and
     *     // requires a reload when closed.
     *     var button = CardService.newTextButton()
     *         .setText("This button opens a link in an overlay window")
     *         .setOpenLink(CardService.newOpenLink()
     *             .setUrl("https://www.google.com")
     *             .setOpenAs(CardService.OpenAs.OVERLAY)
     *             .setOnClose(CardService.OnClose.RELOAD_ADD_ON));
     *
     *     // An action response that opens a link in full screen and
     *     // requires no action when closed.
     *     var actionResponse = CardService.newActionResponseBuilder()
     *         .setOpenLink(CardService.newOpenLink()
     *             .setUrl("https://www.google.com")
     *             .setOpenAs(CardService.OpenAs.FULL_SIZE)
     *             .setOnClose(CardService.OnClose.NOTHING));
     *         .build();
     */
    export interface OpenLink {
      setOnClose(onClose: OnClose): OpenLink;
      setOpenAs(openAs: OpenAs): OpenLink;
      setUrl(url: string): OpenLink;
    }

    /**
     * An input field that allows choosing between a set of predefined options.
     *
     *     var checkboxGroup = CardService.newSelectionInput()
     *         .setType(CardService.SelectionInputType.CHECK_BOX)
     *         .setTitle("A group of checkboxes. Multiple selections are allowed.")
     *         .setFieldName("checkbox_field")
     *         .addItem("checkbox one title", "checkbox_one_value", false)
     *         .addItem("checkbox two title", "checkbox_two_value", true)
     *         .addItem("checkbox three title", "checkbox_three_value", true)
     *         .setOnChangeAction(CardService.newAction()
     *             .setFunctionName("handleCheckboxChange"));
     *
     *     var radioGroup = CardService.newSelectionInput()
     *         .setType(CardService.SelectionInputType.RADIO_BUTTON)
     *         .setTitle("A group of radio buttons. Only a single selection is allowed.")
     *         .setFieldName("checkbox_field")
     *         .addItem("radio button one title", "radio_one_value", true)
     *         .addItem("radio button two title", "radio_two_value", false)
     *         .addItem("radio button three title", "radio_three_value", false);
     */
    export interface SelectionInput {
      addItem(text: Object, value: Object, selected: boolean): SelectionInput;
      setFieldName(fieldName: string): SelectionInput;
      setOnChangeAction(action: Action): SelectionInput;
      setTitle(title: string): SelectionInput;
      setType(type: SelectionInputType): SelectionInput;
    }

    /**
     * Type of selection input.
     */
    export enum SelectionInputType { CHECK_BOX, RADIO_BUTTON, DROPDOWN }

    /**
     * Autocomplete suggestions to supplement a TextInput widget.
     *
     *     var textInput = CardService.newTextInput()
     *         .setSuggestions(CardService.newSuggestions()
     *             .addSuggestion("First suggestion")
     *             .addSuggestion("Second suggestion"))
     */
    export interface Suggestions {
      addSuggestion(suggestion: string): Suggestions;
      addSuggestions(suggestions: Object[]): Suggestions;
    }

    /**
     * A response object that can be returned from a suggestions callback function. This is used with
     * TextInput widgets that implement autocomplete.
     *
     *     var suggestionsResponse = CardService.newSuggestionsResponseBuilder()
     *         .setSuggestions(CardService.newSuggestions()
     *             .addSuggestion("First suggestion")
     *             .addSuggestion("Second suggestion"))
     *             .build();
     */
    export interface SuggestionsResponse {
      printJson(): string;
    }

    /**
     * A builder for SuggestionsResponse objects.
     */
    export interface SuggestionsResponseBuilder {
      build(): SuggestionsResponse;
      setSuggestions(suggestions: Suggestions): SuggestionsResponseBuilder;
    }

    /**
     * A UI element that supports being toggled on or off. This can only be used within a KeyValue widget.
     *
     *     var switchKeyValue = CardService.newKeyValue()
     *         .setTopLabel("Switch key value widget label")
     *         .setContent("This is a key value widget with a switch on the right")
     *         .setSwitch(CardService.newSwitch()
     *             .setFieldName("form_input_switch_key")
     *             .setValue("form_input_switch_value")
     *             .setOnChangeAction(CardService.newAction()
     *                 .setFunctionName("handleSwitchChange")));
     */
    export interface Switch {
      setControlType(controlType: SwitchControlType): Switch;
      setFieldName(fieldName: string): Switch;
      setOnChangeAction(action: Action): Switch;
      setSelected(selected: boolean): Switch;
      setValue(value: string): Switch;
    }

    /**
     * Type of a Switch widget control.
     */
    export enum SwitchControlType { SWITCH, CHECK_BOX }

    /**
     * A TextButton with a text label. You can set the background color and disable the button when
     * needed.
     *
     *     var textButton = CardService.newTextButton()
     *         .setText("Open Link")
     *         .setOpenLink(CardService.newOpenLink()
     *             .setUrl("https://www.google.com"));
     */
    export interface TextButton {
      setAuthorizationAction(action: AuthorizationAction): TextButton;
      setBackgroundColor(backgroundColor: string): TextButton;
      setComposeAction(action: Action, composedEmailType: ComposedEmailType): TextButton;
      setDisabled(disabled: boolean): TextButton;
      setOnClickAction(action: Action): TextButton;
      setOnClickOpenLinkAction(action: Action): TextButton;
      setOpenLink(openLink: OpenLink): TextButton;
      setText(text: string): TextButton;
      setTextButtonStyle(textButtonStyle: TextButtonStyle): TextButton;
    }

    /**
     * An enum that specifies the style for TextButton.
     *
     * TEXT is the default; it renders a simple text button with clear background.
     * FILLED buttons have a background color you can set with
     * TextButton.setBackgroundColor(backgroundColor).
     */
    export enum TextButtonStyle { TEXT, FILLED }

    /**
     * A input field widget that accepts text input.
     *
     *     var textInput = CardService.newTextInput()
     *         .setFieldName("text_input_form_input_key")
     *         .setTitle("Text input title")
     *         .setHint("Text input hint");
     */
    export interface TextInput {
      setFieldName(fieldName: string): TextInput;
      setHint(hint: string): TextInput;
      setMultiline(multiline: boolean): TextInput;
      setOnChangeAction(action: Action): TextInput;
      setSuggestions(suggestions: Suggestions): TextInput;
      setSuggestionsAction(suggestionsAction: Action): TextInput;
      setTitle(title: string): TextInput;
      setValue(value: string): TextInput;
    }

    /**
     * A widget that displays text and supports basic HTML formatting.
     *
     *     var textParagraph = CardService.newTextParagraph()
     *         .setText("This is a text paragraph widget. Multiple lines are allowed if needed.");
     */
    export interface TextParagraph {
      setText(text: string): TextParagraph;
    }

    /**
     * An input field that allows users to input a time.
     *
     *     var dateTimePicker = CardService.newTimePicker()
     *         .setTitle("Enter the time.")
     *         .setFieldName("time_field")
     *         // Set default value as 3:30 AM.
     *         .setHours(3)
     *         .setMinutes(30)
     *         .setOnChangeAction(CardService.newAction()
     *             .setFunctionName("handleDateTimeChange"));
     */
    export interface TimePicker {
      setFieldName(fieldName: string): TimePicker;
      setHours(hours: Integer): TimePicker;
      setMinutes(minutes: Integer): TimePicker;
      setOnChangeAction(action: Action): TimePicker;
      setTitle(title: string): TimePicker;
    }

    /**
     * The response object that may be returned from a method that creates universal action.
     *
     *     // A universal action that opens a link.
     *     var openLinkUniversalAction = CardService.newUniversalActionResponseBuilder()
     *         .setOpenLink(CardService.newOpenLink()
     *             .setUrl("https://www.google.com"))
     *             .build();
     *
     *     var cardBuilder1 = CardService.newCardBuilder();
     *     var cardBuilder2 = CardService.newCardBuilder();
     *     // Finish building the cards ...
     *
     *     // A universal action that shows two static cards.
     *     var cardsUniversalAction = CardService.newUniversalActionResponseBuilder()
     *         .displayAddOnCards([
     *             cardBuilder1.build();
     *             cardBuilder2.build();
     *         ]).build();
     */
    export interface UniversalActionResponse {
      printJson(): string;
    }

    /**
     * A builder for the UniversalActionResponse objects.
     */
    export interface UniversalActionResponseBuilder {
      build(): UniversalActionResponse;
      displayAddOnCards(cardObjects: Object[]): UniversalActionResponseBuilder;
      setOpenLink(openLink: OpenLink): UniversalActionResponseBuilder;
    }

    /**
     * Represents an action that updates the email draft that the user is currently editing.
     *
     *     // An UpdateDraftActionResponse that inserts a list of To recipients into an email draft
     *     var updateDraftActionResponse = CardService.newUpdateDraftActionResponseBuilder()
     *         .setUpdateToRecipientsAction(CardService.newUpdateToRecipientsAction()
     *            .addUpdateToRecipients(["joe@example.com", "wen@example.com"]))
     *         .build()
     *
     *     // An UpdateDraftActionResponse that inserts a list of Cc recipients into an email draft
     *     var updateDraftActionResponse = CardService.newUpdateDraftActionResponseBuilder()
     *         .setUpdateCcRecipientsAction(CardService.newUpdateCcRecipientsAction()
     *            .addUpdateCcRecipients(["joe@example.com", "wen@example.com"]))
     *         .build()
     *
     *     // An UpdateDraftActionResponse that inserts a list of Bcc recipients into an email draft
     *         .setUpdateCcRecipientsAction(CardService.newUpdateBccRecipientsAction()
     *            .addUpdateBccRecipients(["joe@example.com", "wen@example.com"]))
     *
     *     // An UpdateDraftActionResponse that inserts a subject line into an email draft
     *     var updateDraftActionResponse = CARD_SERVICE.newUpdateDraftActionResponseBuilder()
     *     .setUpdateDraftSubjectAction(CARD_SERVICE.newUpdateDraftSubjectAction()
     *     .addUpdateSubject("example subject"))
     *     .build();
     *
     *     // An UpdateDraftActionResponse that inserts non-editable content (a link in this case) into an
     *     // email draft.
     *     var updateDraftActionResponse = CardService.newUpdateDraftActionResponseBuilder()
     *         .setUpdateDraftBodyAction(CardService.newUpdateDraftBodyAction()
     *             .addUpdateContent(
     *                     "<a href=\"https://www.google.com\">Google</a>",
     *                     ContentType.IMMUTABLE_HTML)
     *             .setUpdateType(UpdateDraftBodyType.IN_PLACE_INSERT))
     *         .build();
     *
     *     // An UpdateDraftActionResponse that inserts a link into an email draft. The added content can be
     *     // edited further.
     *     var updateDraftActionResponse = CardService.newUpdateDraftActionResponseBuilder()
     *         .setUpdateDraftBodyAction(CardService.newUpdateDraftBodyAction()
     *             .addUpdateContent(
     *                     "<a href=\"https://www.google.com\">Google</a>",
     *                     ContentType.MUTABLE_HTML)
     *             .setUpdateType(UpdateDraftBodyType.IN_PLACE_INSERT))
     *         .build();
     *
     *     // An UpdateDraftActionResponse that inserts multiple values of different types.
     *     // The example action response inserts two lines next to each other in the email
     *     // draft, at the cursor position. Each line contains the content added by
     *     // {@link UpdateDraftActionResponseBuilder#addUpdateContent}.
     *     var updateDraftActionResponse = CardService.newUpdateDraftActionResponseBuilder()
     *         .setUpdateDraftBodyAction(CardService.newUpdateDraftBodyAction()
     *             .addUpdateContent(
     *                     "<a href=\"https://www.google.com\">Google</a>",
     *                     ContentType.MUTABLE_HTML)
     *             .addUpdateContent("Above is a google link.", ContentType.PLAIN_TEXT)
     *             .setUpdateType(UpdateDraftBodyType.IN_PLACE_INSERT))
     *         .build();
     */
    export interface UpdateDraftActionResponse {
      printJson(): string;
    }

    /**
     * A builder for UpdateDraftActionResponse objects.
     */
    export interface UpdateDraftActionResponseBuilder {
      build(): UpdateDraftActionResponse;
      setUpdateDraftBccRecipientsAction(updateDraftBccRecipientsAction: UpdateDraftBccRecipientsAction): UpdateDraftActionResponseBuilder;
      setUpdateDraftBodyAction(updateDraftBodyAction: UpdateDraftBodyAction): UpdateDraftActionResponseBuilder;
      setUpdateDraftCcRecipientsAction(updateDraftCcRecipientsAction: UpdateDraftCcRecipientsAction): UpdateDraftActionResponseBuilder;
      setUpdateDraftSubjectAction(updateDraftSubjectAction: UpdateDraftSubjectAction): UpdateDraftActionResponseBuilder;
      setUpdateDraftToRecipientsAction(updateDraftToRecipientsAction: UpdateDraftToRecipientsAction): UpdateDraftActionResponseBuilder;
    }

    /**
     * Updates the Bcc recipients of an email draft.
     */
    export interface UpdateDraftBccRecipientsAction {
      addUpdateBccRecipients(bccRecipientEmails: String[]): UpdateDraftBccRecipientsAction;
    }

    /**
     * Updates the email draft body.
     */
    export interface UpdateDraftBodyAction {
      addUpdateContent(content: string, contentType: ContentType): UpdateDraftBodyAction;
      setUpdateType(updateType: UpdateDraftBodyType): UpdateDraftBodyAction;
    }

    /**
     * An enum value that specifies the type of an UpdateDraftBodyAction.
     */
    export enum UpdateDraftBodyType { IN_PLACE_INSERT, INSERT_AT_START, INSERT_AT_END }

    /**
     * Updates the Cc recipients of an email draft.
     */
    export interface UpdateDraftCcRecipientsAction {
      addUpdateCcRecipients(ccRecipientEmails: String[]): UpdateDraftCcRecipientsAction;
    }

    /**
     * Updates the subject line of an email draft.
     */
    export interface UpdateDraftSubjectAction {
      addUpdateSubject(subject: string): UpdateDraftSubjectAction;
    }

    /**
     * Updates the To recipients of an email draft.
     */
    export interface UpdateDraftToRecipientsAction {
      addUpdateToRecipients(toRecipientEmails: String[]): UpdateDraftToRecipientsAction;
    }

    /**
     * Base class for all widgets that can be added to a Card.
     */
    export interface Widget {
    }

  }
}

declare var CardService: GoogleAppsScript.Card.CardService;
