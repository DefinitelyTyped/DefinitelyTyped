// Type definitions for Google Apps Script 2021-01-24
// Project: https://developers.google.com/apps-script/
// Definitions by: PopGoesTheWza <https://github.com/PopGoesTheWza>
//                 motemen <https://github.com/motemen/>
//                 Safal Pillai <https://github.com/malienist>
//                 Oleg Valter <https://github.com/Oaphi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.conference-data.d.ts" />
/// <reference path="google-apps-script.gmail.d.ts" />

declare namespace GoogleAppsScript {
  namespace Card_Service {
    /**
     * An action that enables interactivity within UI elements. The action does not happen directly on
     * the client but rather invokes an Apps Script callback function with optional parameters.
     *
     *     var image = CardService.newImage()
     *         .setOnClickAction(CardService.newAction()
     *             .setFunctionName("handleImageClick")
     *             .setParameters({imageSrc: 'carImage'}));
     */
    interface Action {
      setFunctionName(functionName: string): Action;
      setLoadIndicator(loadIndicator: LoadIndicator): Action;
      setParameters(parameters: { [key: string]: string }): Action;
      /** @deprecated DO NOT USE */ setMethodName(functionName: string): Action;
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
    interface ActionResponse {
      printJson(): string;
    }
    /**
     * A builder for ActionResponse objects.
     */
    interface ActionResponseBuilder {
      build(): ActionResponse;
      setNavigation(navigation: Navigation): ActionResponseBuilder;
      setNotification(notification: Notification): ActionResponseBuilder;
      setOpenLink(openLink: OpenLink): ActionResponseBuilder;
      setStateChanged(stateChanged: boolean): ActionResponseBuilder;
    }
    /**
     * Represents an attachment created by an add-on. This can be used within the context of different
     * Google extensibility products to generate new attachments, such as for Calendar events.
     */
    interface Attachment {
      setIconUrl(iconUrl: string): Attachment;
      setMimeType(mimeType: string): Attachment;
      setResourceUrl(resourceUrl: string): Attachment;
      setTitle(title: string): Attachment;
    }
    /**
     * An authorization action that will send the user to the AuthorizationUrl when clicked.
     *
     *     CardService.newAuthorizationAction()
     *       .setAuthorizationUrl("http://google.com/");
     */
    interface AuthorizationAction {
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
    interface AuthorizationException {
      printJson(): string;
      setAuthorizationUrl(authUrl: string): AuthorizationException;
      setCustomUiCallback(callback: string): AuthorizationException;
      setResourceDisplayName(name: string): AuthorizationException;
      throwException(): void;
    }
    /**
     * A base class for all buttons.
     */
    interface Button {
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
    interface ButtonSet {
      addButton(button: Button): ButtonSet;
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
    interface Card {
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
    interface CardAction {
      setAuthorizationAction(action: AuthorizationAction): CardAction;
      setComposeAction(action: Action, composedEmailType: ComposedEmailType): CardAction;
      setOnClickAction(action: Action): CardAction;
      setOnClickOpenLinkAction(action: Action): CardAction;
      setOpenLink(openLink: OpenLink): CardAction;
      setText(text: string): CardAction;
    }
    /**
     * An enum that defines the display style of card.
     */
     enum DisplayStyle { PEEK, REPLACE }
    /**
     * A builder for Card objects.
     */
    interface CardBuilder {
      addCardAction(cardAction: CardAction): CardBuilder;
      addSection(section: CardSection): CardBuilder;
      build(): Card;
      setHeader(cardHeader: CardHeader): CardBuilder;
      setName(name: string): CardBuilder;
      setFixedFooter(fixedFooter: FixedFooter): CardBuilder;
      setDisplayStyle(displayStyle: DisplayStyle):	CardBuilder;
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
    interface CardHeader {
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
    interface CardSection {
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
    interface CardService {
      BorderType: typeof BorderType;
      ComposedEmailType: typeof ComposedEmailType;
      ContentType: typeof ContentType;
      DisplayStyle: typeof DisplayStyle;
      GridItemLayout: typeof GridItemLayout;
      HorizontalAlignment: typeof HorizontalAlignment;
      Icon: typeof Icon;
      ImageCropType: typeof ImageCropType;
      ImageStyle: typeof ImageStyle;
      LoadIndicator: typeof LoadIndicator;
      OnClose: typeof OnClose;
      OpenAs: typeof OpenAs;
      SelectionInputType: typeof SelectionInputType;
      SwitchControlType: typeof SwitchControlType;
      TextButtonStyle: typeof TextButtonStyle;
      UpdateDraftBodyType: typeof UpdateDraftBodyType;
      newAction(): Action;
      newActionResponseBuilder(): ActionResponseBuilder;
      newAttachment(): Attachment;
      newAuthorizationAction(): AuthorizationAction;
      newAuthorizationException(): AuthorizationException;
      /**
       * Creates a new BorderStyle.
       */
      newBorderStyle(): BorderStyle;
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
      newDivider(): Divider;
      newDriveItemsSelectedActionResponseBuilder(): DriveItemsSelectedActionResponseBuilder;
      /**
       * Creates a new EditorFileScopeActionResponseBuilder.
       */
      newEditorFileScopeActionResponseBuilder(): EditorFileScopeActionResponseBuilder;
      newFixedFooter(): FixedFooter;
      newIconImage(): IconImage;
      /**
       * Creates a new Grid
       */
      newGrid(): Grid;
      /**
       * Creates a new GridItem.
       */
      newGridItem(): GridItem;
      newImage(): Image;
      newImageButton(): ImageButton;
      /**
       * Creates a new ImageComponent.
       */
      newImageComponent(): ImageComponent;
      /**
       * Creates a new ImageCropStyle.
       */
      newImageCropStyle(): ImageCropStyle;
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
    interface ComposeActionResponse {
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
    interface ComposeActionResponseBuilder {
      build(): ComposeActionResponse;
      setGmailDraft(draft: Gmail.GmailDraft): ComposeActionResponseBuilder;
    }
    /**
     * An enum value that specifies whether the composed email is a standalone or reply draft.
     */
    enum ComposedEmailType { REPLY_AS_DRAFT, STANDALONE_DRAFT }
    /**
     * An enum value that specifies the content type of the content generated by a UpdateDraftActionResponse.
     */
    enum ContentType { TEXT, MUTABLE_HTML, IMMUTABLE_HTML }
    /**
     * Predefined icons that can be used in various UI objects, such as ImageButton or KeyValue widgets.
     */
    enum Icon { NONE, AIRPLANE, BOOKMARK, BUS, CAR, CLOCK, CONFIRMATION_NUMBER_ICON, DOLLAR, DESCRIPTION, EMAIL, EVENT_PERFORMER, EVENT_SEAT, FLIGHT_ARRIVAL, FLIGHT_DEPARTURE, HOTEL, HOTEL_ROOM_TYPE, INVITE, MAP_PIN, MEMBERSHIP, MULTIPLE_PEOPLE, OFFER, PERSON, PHONE, RESTAURANT_ICON, SHOPPING_CART, STAR, STORE, TICKET, TRAIN, VIDEO_CAMERA, VIDEO_PLAY }
    /**
     * A widget that shows an icon image.
     *
     *     var icon = CardService.newIconImage().setAltText("A nice icon").setIconUrl("https://example.com/icon.png");
     */
     interface IconImage {
      setAltText(altText: string): IconImage;
      setIcon(icon: Icon): IconImage;
      setIconUrl(url: string): IconImage;
      setImageCropType(imageCropType: ImageCropType): IconImage;
    }
    /**
     * A widget that shows a single image.
     *
     *     var image = CardService.newImage().setAltText("A nice image").setImageUrl("https://image.png");
     */
    interface Image {
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
    interface ImageButton {
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
    enum ImageStyle { SQUARE, CIRCLE }
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
    interface KeyValue {
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
    enum LoadIndicator { SPINNER, NONE }
    /**
     * A helper object that controls card navigation. See the card navigation guide for more details.
     */
    interface Navigation {
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
    interface Notification {
      setText(text: string): Notification;
    }
    /**
     * An enum that specifies what to do when a URL opened through an OpenLink is closed.
     *
     * When a link is opened, the client either forgets about it or waits until the window is closed.
     * The implementation depends on the client platform capabilities. OnClose may cause OpenAs to be ignored; if the client platform cannot support both selected values together,
     * OnClose takes precedence.
     */
    enum OnClose { NOTHING, RELOAD_ADD_ON }
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
    enum OpenAs { FULL_SIZE, OVERLAY }
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
    interface OpenLink {
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
     *         .addItem("checkbox three title", "checkbox_three_value", false)
     *         .setOnChangeAction(CardService.newAction()
     *             .setFunctionName("handleCheckboxChange"));
     *
     *     var radioGroup = CardService.newSelectionInput()
     *         .setType(CardService.SelectionInputType.RADIO_BUTTON)
     *         .setTitle("A group of radio buttons. Only a single selection is allowed.")
     *         .setFieldName("checkbox_field")
     *         .addItem("radio button one title", "radio_one_value", true)
     *         .addItem("radio button two title", "radio_two_value", true)
     *         .addItem("radio button three title", "radio_three_value", false);
     */
    interface SelectionInput {
      addItem(text: any, value: any, selected: boolean): SelectionInput;
      setFieldName(fieldName: string): SelectionInput;
      setOnChangeAction(action: Action): SelectionInput;
      setTitle(title: string): SelectionInput;
      setType(type: SelectionInputType): SelectionInput;
    }
    /**
     * Type of selection input.
     */
    enum SelectionInputType { CHECK_BOX, RADIO_BUTTON, DROPDOWN }
    /**
     * Autocomplete suggestions to supplement a TextInput widget.
     *
     *     var textInput = CardService.newTextInput()
     *         .setSuggestions(CardService.newSuggestions()
     *             .addSuggestion("First suggestion")
     *             .addSuggestion("Second suggestion"))
     */
    interface Suggestions {
      addSuggestion(suggestion: string): Suggestions;
      addSuggestions(suggestions: string[]): Suggestions;
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
    interface SuggestionsResponse {
      printJson(): string;
    }
    /**
     * A builder for SuggestionsResponse objects.
     */
    interface SuggestionsResponseBuilder {
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
     *             .setControlType(CardService.SwitchControlType.SWITCH)
     *             .setOnChangeAction(CardService.newAction()
     *                 .setFunctionName("handleSwitchChange")));
     */
    interface Switch {
      setFieldName(fieldName: string): Switch;
      setOnChangeAction(action: Action): Switch;
      setSelected(selected: boolean): Switch;
      setValue(value: string): Switch;
      setControlType(type: SwitchControlType): Switch;
    }
    /**
     * Type of switch.
     */
    enum SwitchControlType { SWITCH, CHECK_BOX }
    /**
     * A TextButton with a text label. You can set the background color and disable the button when
     * needed.
     *
     *     var textButton = CardService.newTextButton()
     *         .setText("Open Link")
     *         .setOpenLink(CardService.newOpenLink()
     *             .setUrl("https://www.google.com"));
     */
    interface TextButton {
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
    enum TextButtonStyle { TEXT, FILLED }
    /**
     * A input field widget that accepts text input.
     *
     *     var textInput = CardService.newTextInput()
     *         .setFieldName("text_input_form_input_key")
     *         .setTitle("Text input title")
     *         .setHint("Text input hint");
     */
    interface TextInput {
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
    interface TextParagraph {
      setText(text: string): TextParagraph;
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
    interface UniversalActionResponse {
      printJson(): string;
    }
    /**
     * An input field that allows users to input a time.
     *
     *     // A time picker with default value of 3:30 PM.
     *     var dateTimePicker = CardService.newTimePicker()
     *         .setTitle("Enter the time.")
     *         .setFieldName("time_field")
     *         .setHours(15)
     *         .setMinutes(30)
     *         .setOnChangeAction(CardService.newAction()
     *             .setFunctionName("handleTimeChange"));
     */
    interface TimePicker {
      setFieldName(fieldName: string): TimePicker;
      setHours(hours: number): TimePicker;
      setMinutes(hours: number): TimePicker;
      setOnChangeAction(action: Action): TimePicker;
      setTitle(title: string): TimePicker;
    }
    /**
     * A builder for the UniversalActionResponse objects.
     */
    interface UniversalActionResponseBuilder {
      build(): UniversalActionResponse;
      displayAddOnCards(cardObjects: Card[]): UniversalActionResponseBuilder;
      setOpenLink(openLink: OpenLink): UniversalActionResponseBuilder;
    }
    /**
     * Represents an action that updates the email draft that the user is currently editing.
     *
     *     // A UpdateDraftActionResponse that inserts non-editable content (a link in this case) into an
     *     // email draft.
     *     var updateDraftActionResponse = CardService.newUpdateDraftActionResponseBuilder()
     *         .setUpdateDraftBodyAction(CardService.newUpdateDraftBodyAction()
     *             .addUpdateContent(
     *                     "<a href=\"https://www.google.com\">Google</a>",
     *                     ContentType.IMMUTABLE_HTML)
     *             .setUpdateType(UpdateDraftBodyType.IN_PLACE_INSERT))
     *         .build();
     *
     *     // A UpdateDraftActionResponse that inserts a link into an email draft. The added content can be
     *     // edited further.
     *     var updateDraftActionResponse = CardService.newUpdateDraftActionResponseBuilder()
     *         .setUpdateDraftBodyAction(CardService.newUpdateDraftBodyAction()
     *             .addUpdateContent(
     *                     "<a href=\"https://www.google.com\">Google</a>",
     *                     ContentType.MUTABLE_HTML)
     *             .setUpdateType(UpdateDraftBodyType.IN_PLACE_INSERT))
     *         .build();
     *
     *     // A UpdateDraftActionResponse that inserts multiple values of different types.
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
    interface UpdateDraftActionResponse {
      printJson(): string;
    }
    /**
     * A builder for UpdateDraftActionResponse objects.
     */
    interface UpdateDraftActionResponseBuilder {
      build(): UpdateDraftActionResponse;
      setUpdateDraftBccRecipientsAction(updateDraftBccRecipientsAction: UpdateDraftBccRecipientsAction): UpdateDraftActionResponseBuilder;
      setUpdateDraftBodyAction(updateDraftBodyAction: UpdateDraftBodyAction): UpdateDraftActionResponseBuilder;
      setUpdateDraftCcRecipientsAction(updateDraftCcRecipientsAction: UpdateDraftCcRecipientsAction):	UpdateDraftActionResponseBuilder;
      setUpdateDraftSubjectAction(updateDraftSubjectAction: UpdateDraftSubjectAction):	UpdateDraftActionResponseBuilder;
      setUpdateDraftToRecipientsAction(updateDraftToRecipientsAction: UpdateDraftToRecipientsAction): UpdateDraftActionResponseBuilder;
    }
    /**
     * Represents an action that updates the email draft body.
     */
    interface UpdateDraftBodyAction {
      addUpdateContent(content: string, contentType: ContentType): UpdateDraftBodyAction;
      setUpdateType(updateType: UpdateDraftBodyType): UpdateDraftBodyAction;
    }

    /**
     * Sets an action that updates the email Bcc recipients of a draft.
     */
    interface UpdateDraftBccRecipientsAction {
      addUpdateBccRecipients(bccRecipientEmails: string[]): UpdateDraftBccRecipientsAction;
    }

    /**
     * Sets an action that updates the Cc recipients of a draft.
     */
    interface UpdateDraftCcRecipientsAction {
      addUpdateCcRecipients(ccRecipientEmails: string[]): UpdateDraftCcRecipientsAction;
    }

    /**
     * Updates the subject line of an email draft.
     */
    interface UpdateDraftSubjectAction {
      addUpdateSubject(subject: string): UpdateDraftSubjectAction;
    }

    /**
     * Updates the To recipients of an email draft.
     */
    interface UpdateDraftToRecipientsAction {
      addUpdateToRecipients(toRecipientEmails: string[]): UpdateDraftToRecipientsAction;
    }
    /**
     * The fixed footer shown at the bottom of an add-on Card.
     */
    interface FixedFooter {
      setPrimaryButton(button: TextButton): FixedFooter;
      setSecondaryButton(button: TextButton): FixedFooter;
    }

    /**
     * Represents a response that makes changes to the calendar event that the user is currently editing in reaction to an action taken in the UI, such as a button click.
     */
    interface CalendarEventActionResponse {
      printJson(): string;
    }

    /**
     * A builder for CalendarEventActionResponse objects.
     */
    interface CalendarEventActionResponseBuilder {
      addAttachments(attachments: Attachment[]): CalendarEventActionResponseBuilder;
      addAttendees(emails: string[]): CalendarEventActionResponseBuilder;
      build(): CalendarEventActionResponse;
      setConferenceData(conferenceData: Conference_Data.ConferenceData): CalendarEventActionResponseBuilder;
    }

    /**
     * An input field that allows inputing a date.
     */
    interface DatePicker {
      setFieldName(fieldName: string): DatePicker;
      setOnChangeAction(action: Action): DatePicker;
      setTitle(title: string): DatePicker;
      setValueInMsSinceEpoch(valueMsEpoch: number): DatePicker;
      setValueInMsSinceEpoch(valueMsEpoch: string): DatePicker;
    }

    /**
     * An input field that allows inputing a date.
     */
    interface DateTimePicker {
      setFieldName(fieldName: string): DateTimePicker;
      setOnChangeAction(action: Action): DateTimePicker;
      setTimeZoneOffsetInMins(timeZoneOffsetMins: Integer): DateTimePicker;
      setTitle(title: string): DateTimePicker;
      setValueInMsSinceEpoch(valueMsEpoch: number): DateTimePicker;
      setValueInMsSinceEpoch(valueMsEpoch: string): DateTimePicker;
    }

    /**
     * A widget that displays text with optional decorations. Possible keys include an icon, a label
     * above and a label below. Setting the text content and one of the keys is required using setText(text)
     * and one of setIcon(icon), setIconUrl(url), setTopLabel(text), or setBottomLabel(text).
     * This class is intended to replace KeyValue.
     */
    interface DecoratedText {
      setAuthorizationAction(action: AuthorizationAction): DecoratedText;
      setBottomLabel(text: string): DecoratedText;
      setButton(button: Button): DecoratedText;
      setComposeAction(action: Action, composedEmailType: ComposedEmailType): DecoratedText;
      setEndIcon(endIcon: IconImage): DecoratedText;
      setIcon(icon: Icon): DecoratedText;
      setIconAltText(altText: string): DecoratedText;
      setIconUrl(url: string): DecoratedText;
      setOnClickAction(action: Action): DecoratedText;
      setOnClickOpenLinkAction(action: Action): DecoratedText;
      setOpenLink(openLink: OpenLink): DecoratedText;
      setStartIcon(startIcon: IconImage): DecoratedText;
      setSwitchControl(switchToSet: Switch): DecoratedText;
      setText(text: string): DecoratedText;
      setTopLabel(text: string): DecoratedText;
      setWrapText(wrapText: boolean): DecoratedText;
    }

    /**
     * A horizontal divider.
     */
    // tslint:disable-next-line:no-empty-interface
    interface Divider {
    }

    /**
     * An enum that represents the border types that can be applied to widgets.
     */
    enum BorderType {
      /** No border style. */
      NO_BORDER,
      /** Stroke border style. */
      STROKE,
    }

    /**
     * An enum that defines the image and text style of a GridItem.
     */
    enum GridItemLayout {
      /** The title and subtitle are shown below the grid item's image. */
      TEXT_BELOW,
      /** The title and subtitle are shown above the grid item's image. */
      TEXT_ABOVE,
    }

    /**
     * An enum that specifies the horizontal alignment of a widget.
     */
    enum HorizontalAlignment {
      /** Align the widget to the start of the sentence side. */
      START,
      /** Align the widget to the center. */
      CENTER,
      /** Align the widget to the end of the sentence side. */
      END,
    }

    /**
     * An enum that represents the crop styles applied to image components.
     * If you want to apply a crop style to an IconImage, you can only use SQUARE or CIRCLE.
     */
    enum ImageCropType {
      /** Square shape crop style. */
      SQUARE,
      /** Circle shape crop style. */
      CIRCLE,
      /** Rectangle shape crop style with custom ratio. */
      RECTANGLE_CUSTOM,
      /** Rectangle shape crop style with 4:3 ratio. */
      RECTANGLE_4_3,
    }

    /**
     * A class that represents a complete border style that can be applied to widgets.
     */
    interface BorderStyle {
      /**
       * Sets the corner radius of the border, for example 8.
       */
      setCornerRadius(radius: number): BorderStyle;
      /**
       * The color in #RGB format to be applied to the border.
       */
      setStrokeColor(color: string): BorderStyle;
      /**
       * Sets the type of the border.
       */
      setType(type: BorderType): BorderStyle;
    }

    /**
     * A class that represents a crop style that can be applied to image components.
     */
    interface ImageCropStyle {
      /**
       * Sets the aspect ratio to use if the crop type is RECTANGLE_CUSTOM. The ratio must be a positive value.
       */
      setAspectRatio(ratio: number): ImageCropStyle;
      /**
       * Sets the crop type for the image.
       */
      setImageCropType(type: ImageCropType): ImageCropStyle;
    }

    /**
     * An image component that can be added to grid items.
     */
    interface ImageComponent {
      /**
       * Sets the alternative text of the image.
       */
      setAltText(altText: string): ImageComponent;
      /**
       * Sets the border style applied to the image.
       */
      setBorderStyle(borderStyle: BorderStyle): ImageComponent;
      /**
       * Sets the crop style for the image.
       */
      setCropStyle(imageCropStyle: ImageCropStyle): ImageComponent;
      /**
       * Sets the URL of the image.
       */
      setImageUrl(url: string): ImageComponent;
    }

    /**
     * The items users interact with within a grid widget.
     */
    interface GridItem {
      /**
       * Sets the identifier for the grid item. When a user clicks this grid item,
       * this ID is returned in the parent grid's on_click call back parameters.
       */
      setIdentifier(id: string): GridItem;
      /**
       * Sets the image for this grid item.
       */
      setImage(image: ImageComponent): GridItem;
      /**
       * Sets the layout of text and image for the grid item. Default is TEXT_BELOW
       */
      setLayout(layout: GridItemLayout): GridItem;
      /**
       * Sets the subtitle of the grid item.
       */
      setSubtitle(subtitle: string): GridItem;
      /**
       * Sets the horizontal alignment of the grid item. Default is START.
       */
      setTextAlignment(alignment: HorizontalAlignment): GridItem;
      /**
       * Sets the title text of the grid item.
       */
      setTitle(title: string): GridItem;
    }

    /**
     * An organized grid to display a collection of grid items.
     */
    interface Grid {
      /**
       * Adds a new grid item to the grid.
       */
      addItem(gridItem: GridItem): Grid;
      /**
       * Sets an authorization action that opens a URL to the authorization flow when the object is clicked.
       */
      setAuthorizationAction(action: AuthorizationAction): Grid;
      /**
       * Sets the border style applied to each grid item.
       */
      setBorderStyle(borderStyle: BorderStyle): Grid;
      /**
       * Sets an action that composes a draft email when the object is clicked.
       */
      setComposeAction(action: Action, composedEmailType: ComposedEmailType): Grid;
      /**
       * The number of columns to display in the grid.
       */
      setNumColumns(numColumns: number): Grid;
      /**
       * Sets an action that executes when the object is clicked.
       */
      setOnClickAction(action: Action): Grid;
      /**
       * Sets an action that opens a URL in a tab when the object is clicked.
       */
      setOnClickOpenLinkAction(action: Action): Grid;
      /**
       * Sets a URL to be opened when the object is clicked.
       */
      setOpenLink(openLink: OpenLink): Grid;
      /**
       * Sets the title text of the grid.
       */
      setTitle(title: string): Grid;
    }

    /**
     * A builder for DriveItemsSelectedActionResponse objects.
     */
    interface DriveItemsSelectedActionResponseBuilder {
      build(): DriveItemsSelectedActionResponse;
      requestFileScope(itemId: string): DriveItemsSelectedActionResponseBuilder;
    }

    /**
     * Represents a response that makes changes to Drive while Drive items are selected and in reaction to an action taken in the UI, such as a button click.
     */
    interface DriveItemsSelectedActionResponse {
      printJson(): string;
    }

    /**
     * Makes changes to an Editor, such as Google Docs, Sheets, or Slides in reaction to an action taken in the UI.
     */
    interface EditorFileScopeActionResponse {
        /**
         * Prints the JSON representation of this object.
         */
        printJson(): string;
    }
    /**
     * A builder for EditorFileScopeActionResponse objects.
     */
    interface EditorFileScopeActionResponseBuilder {
        /**
         * Builds the current Editor action response.
         */
        build(): EditorFileScopeActionResponse;
        /**
         * Requests the drive.file scope for the current active Editor document.
         */
        requestFileScopeForActiveDocument(): EditorFileScopeActionResponseBuilder;
    }

    /**
     * An enum value that specifies the type of an UpdateDraftBodyAction.
     */
    enum UpdateDraftBodyType { IN_PLACE_INSERT }
    /**
     * Base class for all widgets that can be added to a Card.
     */
    // tslint:disable-next-line: no-empty-interface
    interface Widget {
    }
  }
}

declare var CardService: GoogleAppsScript.Card_Service.CardService;
