// Type definitions for Google Apps Script 2017-10-30
// Project: https://developers.google.com/apps-script/
// Definitions by: dhayab <https://github.com/dhayab/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.gmail.d.ts" />

declare namespace GoogleAppsScript {
    export module Card {
        export interface Action {
            /**
             * Sets the name of the callback function to be called.
             */
            setFunctionName(functionName: string): Action;
            /**
             * Sets the loading indicator that displays while the action is in progress.
             */
            setLoadIndicator(loadIndicator: LoadIndicator): Action;
            /**
             * Allows custom parameters to be passed to the callback function.
             */
            setParameters(parameters: { [key: string]: string }): Action;
        }

        export interface ActionEvent {
            messageMetadata: {
                /**
                 * An access token. You can use this to enable access to user data using temporary Gmail add-on scopes.
                 */
                accessToken: string;
                /**
                 * The message ID of the thread open in the Gmail UI.
                 */
                messageId: string;
            }
            /**
             * Indicates where the event originates (web, iOS, or Android).
             */
            clientPlatform: string;
            /**
             * The current values of all form widgets in the card, restricted to one value per widget. The keys are the string IDs associated with the widgets.
             *
             * The event object provides `formInput` as a convenience for when you need to read data from multiple widgets with expected singular values, such as text inputs and switches.
             *
             * For multi-valued widgets such as checkboxes, you can read each value from `formInputs` instead.
             */
            formInput: { [key: string]: string };
            /**
             * The current values of widgets in the card, presented in arrays. The keys are the string IDs associated with the widget.
             *
             * For single-valued widgets, the value is presented in a single-element array. For multi-valued widgets such as checkboxes, all the values are presented in an array.
             */
            formInputs: { [key: string]: string[] };
            /**
             * Any additional parameters you supply to the `Action` using `Action.setParameters()`.
             */
            parameters: { [key: string]: string };
        }

        export interface ActionResponse {
            /**
             * Prints the JSON representation of this object.
             */
            printJson(): string;
        }

        export interface ActionResponseBuilder {
            /**
             * Builds the current action response and validates it.
             */
            build(): ActionResponse;
            /**
             * Sets the response to `Navigation` action.
             */
            setNavigation(navigation: Navigation): ActionResponseBuilder;
            /**
             * Sets the notification to display when the action is activated.
             */
            setNotification(notification: Notification): ActionResponseBuilder;
            /**
             * Sets the URL to navigate to when the action is activated.
             */
            setOpenLink(openLink: OpenLink): ActionResponseBuilder;
        }

        export interface AuthorizationAction {
            /**
             * Sets the authorization URL that user is taken to from the authorization prompt.
             */
            setAuthorizationUrl(authorizationUrl: string): AuthorizationAction;
        }

        export interface AuthorizationException {
            /**
             * Prints the JSON representation of this object.
             */
            printJson(): string;
            /**
             * Sets the authorization URL that user is taken to from the authorization prompt.
             */
            setAuthorizationUrl(authUrl: string): AuthorizationException;
            /**
             * The name of a function to call to generate a custom authorization prompt.
             */
            setCustomUiCallback(callback: string): AuthorizationException;
            /**
             * Sets the name that is displayed to the user when asking for authorization.
             */
            setResourceDisplayName(name: string): AuthorizationException;
            /**
             * Triggers this exception to be thrown.
             */
            throwException(): void;
        }

        interface Button<T> extends Widget {
            /**
             * Sets an authorization action that opens a URL to the authorization flow when the object is clicked.
             */
            setAuthorizationAction(action: AuthorizationAction): T;
            /**
             * Sets an action that composes a draft email when the object is clicked.
             */
            setComposeAction(action: Action, composedEmailType: ComposedEmailType): T;
            /**
             * Sets an action that executes when the object is clicked.
             */
            setOnClickAction(action: Action): T;
            /**
             * Sets an action that opens a URL in a tab when the object is clicked.
             */
            setOnClickOpenLinkAction(action: Action): T;
            /**
             * Sets a URL to be opened when the object is clicked.
             */
            setOpenLink(openLink: OpenLink): T;
        }

        export interface ButtonSet extends Widget {
            /**
             * Adds a button.
             */
            addButton(button: Button<ImageButton | TextButton>): ButtonSet;
        }

        export interface Card {
            /**
             * Prints the JSON representation of this object.
             */
            printJson(): string;
        }

        export interface CardAction extends Button<CardAction> {
            /**
             * Sets the menu text for this action.
             */
            setText(text: string): CardAction;
        }

        export interface CardBuilder {
            /**
             * Adds a CardAction to this Card.
             */
            addCardAction(cardAction: CardAction): CardBuilder;
            /**
             * Adds a section to this card.
             */
            addSection(section: CardSection): CardBuilder;
            /**
             * Builds the current card and validates it.
             */
            build(): Card;
            /**
             * Sets the header for this card.
             */
            setHeader(cardHeader: CardHeader): CardBuilder;
            /**
             * Sets the name for this card.
             */
            setName(name: string): CardBuilder;
        }

        export interface CardHeader {
            /**
             * Sets the alternative text for the header image.
             */
            setImageAltText(imageAltText: string): CardHeader;
            /**
             * Sets the cropping of the icon in the card header.
             */
            setImageStyle(imageStyle: ImageStyle): CardHeader;
            /**
             * Sets the image to use in the header by providing its URL.
             */
            setImageUrl(imageUrl: string): CardHeader;
            /**
             * Sets the subtitle of the card header.
             */
            setSubtitle(subtitle: string): CardHeader;
            /**
             * Sets the title of the card header.
             */
            setTitle(title: string): CardHeader;
        }

        export interface CardSection {
            /**
             * Adds the given widget to this section.
             */
            addWidget(widget: Widget): CardSection;
            /**
             * Sets whether the section can be collapsed.
             */
            setCollapsible(collapsible: boolean): CardSection;
            /**
             * Sets the header of the section.
             */
            setHeader(header: string): CardSection;
            /**
             * Sets the number of widgets that are still shown when this section is collapsed.
             */
            setNumUncollapsibleWidgets(numUncollapsibleWidgets: Integer): CardSection;
        }

        export interface CardService {
            /**
             * Specifies whether the composed email is a standalone or reply draft.
             */
            ComposedEmailType: typeof ComposedEmailType;
            /**
             * Predefined icons that can be used in various UI objects, such as ImageButton or KeyValue widgets.
             */
            Icon: typeof Icon;
            /**
             * Defines an image cropping style.
             */
            ImageStyle: typeof ImageStyle;
            /**
             * Specifies the type of loading or progress indicator to display while an Action is being processed.
             */
            LoadIndicator: typeof LoadIndicator;
            /**
             * Type of notification to show.
             */
            NotificationType: typeof NotificationType;
            /**
             * Specifies what to do when a URL opened through an OpenLink is closed.
             *
             * When a link is opened, the client either forgets about it or waits until the window is closed. The implementation depends on the client platform capabilities. OnClose may cause OpenAs to be ignored; if the client platform cannot support both selected values together, OnClose takes precedence.
             */
            OnClose: typeof OnClose;
            /**
             * Specifies how to open a URL.
             *
             * The client can open a URL as either a full size window (if that is the frame used by the client), or an overlay (such as a pop-up). The implementation depends on the client platform capabilities, and the value selected may be ignored if the client does not support it. FULL_SIZE is supported by all clients.
             *
             * Using OnClose may cause OpenAs to be ignored; if the client platform cannot support both selected values together, OnClose takes precedence.
             */
            OpenAs: typeof OpenAs;
            /**
             * Type of selection input.
             */
            SelectionInputType: typeof SelectionInputType;
            /**
             * Creates a new `Action`.
             */
            newAction(): Action;
            /**
             * Creates a new `ActionResponseBuilder`.
             */
            newActionResponseBuilder(): ActionResponseBuilder;
            /**
             * Creates a new `AuthorizationAction`.
             */
            newAuthorizationAction(): AuthorizationAction;
            /**
             * Creates a new `AuthorizationException`.
             */
            newAuthorizationException(): AuthorizationException;
            /**
             * Creates a new `ButtonSet`.
             */
            newButtonSet(): ButtonSet;
            /**
             * Creates a new `CardAction`.
             */
            newCardAction(): CardAction;
            /**
             * Creates a new `CardBuilder`.
             */
            newCardBuilder(): CardBuilder;
            /**
             * Creates a new `CardHeader`.
             */
            newCardHeader(): CardHeader;
            /**
             * Creates a new `CardSection`.
             */
            newCardSection(): CardSection;
            /**
             * Creates a new `ComposeActionResponseBuilder`.
             */
            newComposeActionResponseBuilder(): ComposeActionResponseBuilder;
            /**
             * Creates a new `Image`.
             */
            newImage(): Image;
            /**
             * Creates a new `ImageButton`.
             */
            newImageButton(): ImageButton;
            /**
             * Creates a new `KeyValue`.
             */
            newKeyValue(): KeyValue;
            /**
             * Creates a new `Navigation`.
             */
            newNavigation(): Navigation;
            /**
             * Creates a new `Notification`.
             */
            newNotification(): Notification;
            /**
             * Creates a new `OpenLink`.
             */
            newOpenLink(): OpenLink;
            /**
             * Creates a new `SelectionInput`.
             */
            newSelectionInput(): SelectionInput;
            /**
             * Creates a new `Suggestions`.
             */
            newSuggestions(): Suggestions;
            /**
             * Creates a new `SuggestionsResponseBuilder`.
             */
            newSuggestionsResponseBuilder(): SuggestionsResponseBuilder;
            /**
             * Creates a new `Switch`.
             */
            newSwitch(): Switch;
            /**
             * Creates a new `TextButton`.
             */
            newTextButton(): TextButton;
            /**
             * Creates a new `TextInput`.
             */
            newTextInput(): TextInput;
            /**
             * Creates a new `TextParagraph`.
             */
            newTextParagraph(): TextParagraph;
            /**
             * Creates a new `UniversalActionResponseBuilder`.
             */
            newUniversalActionResponseBuilder(): UniversalActionResponseBuilder;
        }

        export interface ComposeActionResponse {
            /**
             * Prints the JSON representation of this object.
             */
            printJson(): string;
        }

        export interface ComposeActionResponseBuilder {
            /**
             * Builds the current compose action response and validates it.
             */
            build(): ComposeActionResponse;
            /**
             * Sets the draft `GmailMessage` created using `GmailMessage.createDraftReply(body)` or similar functions.
             */
            setGmailDraft(draft: Gmail.GmailDraft): ComposeActionResponseBuilder;
        }

        export interface Image extends Button<Image> {
            /**
             * Sets the alternative text of the image for accessibility.
             */
            setAltText(altText: string): Image;
            /**
             * Sets the URL of the image.
             */
            setImageUrl(url: string): Image;
        }

        export interface ImageButton extends Button<ImageButton> {
            /**
             * Sets the alternative text of the button for accessibility.
             */
            setAltText(altText: string): ImageButton;
            /**
             * Sets a predefined Icon to display on the button.
             */
            setIcon(icon: Icon): ImageButton;
            /**
             * Sets the URL of an image to use as this button's icon.
             */
            setIconUrl(url: string): ImageButton;
        }

        export interface KeyValue extends Button<KeyValue> {
            /**
             * Sets the label text to be used as the key.
             */
            setBottomLabel(text: string): KeyValue;
            /**
             * Sets the Button that is displayed to the right of the context.
             */
            setButton(button: Button<ImageButton | TextButton>): KeyValue;
            /**
             * Sets the text to be used as the value.
             */
            setContent(text: string): KeyValue;
            /**
             * Sets the icon to be used as the key.
             */
            setIcon(icon: Icon): KeyValue;
            /**
             * Sets the alternative text for the icon.
             */
            setIconAltText(altText: string): KeyValue;
            /**
             * Sets the URL of the icon to be used as the key.
             */
            setIconUrl(url: string): KeyValue;
            /**
             * Sets whether the value text should be displayed on a single line or multiple lines.
             */
            setMultiline(multiline: boolean): KeyValue;
            /**
             * Sets the Switch that is displayed to the right of the content.
             */
            setSwitch(switchToSet: Switch): KeyValue;
            /**
             * Sets the label text to be used as the key.
             */
            setTopLabel(text: string): KeyValue;
        }

        export interface Navigation {
            /**
             * Pops a card from the navigation stack.
             */
            popCard(): Navigation;
            /**
             * Pops to the specified card by its card name.
             */
            popToNamedCard(cardName: string): Navigation;
            /**
             * Pops the card stack to the root card.
             */
            popToRoot(): Navigation;
            /**
             * Prints the JSON representation of this object.
             */
            printJson(): string;
            /**
             * Pushes the given card onto the stack.
             */
            pushCard(card: Card): Navigation;
            /**
             * Does an in-place replacement of the current card.
             */
            updateCard(card: Card): Navigation;
        }

        export interface Notification {
            /**
             * Sets the text to show in the notification.
             */
            setText(text: string): Notification;
            /**
             * Sets the notification type to show.
             */
            setType(type: NotificationType): Notification;
        }

        export interface OpenLink {
            /**
             * Sets the behavior of the URL action when the URL window or tab is closed.
             */
            setOnClose(onClose: OnClose): OpenLink;
            /**
             * Sets the behavior of URL when it is opened.
             */
            setOpenAs(openAs: OpenAs): OpenLink;
            /**
             * Sets the URL to be opened.
             */
            setUrl(url: string): OpenLink;
        }

        export interface SelectionInput extends Widget {
            /**
             * Adds a new item that can be selected.
             */
            addItem(text: Object, value: Object, selected: boolean): SelectionInput;
            /**
             * Sets the key that identifies this selection input in the event object that is generated when there is a UI interaction.
             */
            setFieldName(fieldName: string): SelectionInput;
            /**
             * Sets an Action to be performed whenever the selection input changes.
             */
            setOnChangeAction(action: Action): SelectionInput;
            /**
             * Sets the title to be shown ahead of the input field.
             */
            setTitle(title: string): SelectionInput;
            /**
             * Sets the type of this input.
             */
            setType(type: SelectionInputType): SelectionInput;
        }

        export interface Suggestions {
            /**
             * Add a text suggestion.
             */
            addSuggestion(suggestion: string): Suggestions;
            /**
             * Add a list of text suggestions.
             */
            addSuggestions(suggestions: string[]): Suggestions;
        }

        export interface SuggestionsResponse {
            /**
             * Prints the JSON representation of this object.
             */
            printJson(): string;
        }

        export interface SuggestionsResponseBuilder {
            /**
             * Builds the current suggestions response and validates it.
             */
            build(): SuggestionsResponse;
            /**
             * Sets the suggestions used in auto complete in text fields.
             */
            setSuggestions(suggestions: Suggestions): SuggestionsResponseBuilder;
        }

        export interface Switch extends Widget {
            /**
             * Sets the key that identified this switch in the event object that is generated when there is a UI interaction.
             */
            setFieldName(fieldName: string): Switch;
            /**
             * Sets the action to take when the switch is toggled.
             */
            setOnChangeAction(action: Action): Switch;
            /**
             * Sets whether this switch should start as selected or unselected.
             */
            setSelected(selected: boolean): Switch;
            /**
             * Sets the value that is sent as the form input when this switch is toggled on.
             */
            setValue(value: string): Switch;
        }

        export interface TextButton extends Button<TextButton> {
            /**
             * Sets the text to be displayed on the button.
             */
            setText(text: string): TextButton;
        }

        export interface TextInput extends Widget {
            /**
             * Sets the key that identifies this text input in the event object that is generated when there is a UI interaction.
             */
            setFieldName(fieldName: string): TextInput;
            /**
             * Sets a hint for the text input.
             */
            setHint(hint: string): TextInput;
            /**
             * Sets whether the input text shows on one line or multiple lines.
             */
            setMultiline(multiline: boolean): TextInput;
            /**
             * Sets an action to be performed whenever the text input changes.
             */
            setOnChangeAction(action: Action): TextInput;
            /**
             * Sets the suggestions for autocompletion in the text field.
             */
            setSuggestions(suggestions: Suggestions): TextInput;
            /**
             * Sets the callback action to fetch suggestions based on user input for autocompletion.
             */
            setSuggestionsAction(suggestionsAction: Action): TextInput
            /**
             * Sets the title to be shown above the input field.
             */
            setTitle(title: string): TextInput;
            /**
             * Sets the pre-filled value to be set in the input field.
             */
            setValue(value: string): TextInput;
        }

        export interface TextParagraph extends Widget {
            /**
             * Sets the text of the paragraph.
             */
            setText(text: string): TextParagraph;
        }

        export interface UniversalActionResponse {
            /**
             * Prints the JSON representation of this object.
             */
            printJson(): string;
        }

        export interface UniversalActionResponseBuilder {
            /**
             * Builds the current universal action response and validates it.
             */
            build(): UniversalActionResponse;
            /**
             * Displays the add-on with the specified cards.
             */
            displayAddOnCards(cardObjects: Card[]): UniversalActionResponseBuilder;
            /**
             * Sets the URL to open when the universal action is selected.
             */
            setOpenLink(openLink: OpenLink): UniversalActionResponseBuilder;
        }

        export interface Widget { }

        export enum ComposedEmailType { REPLY_AS_DRAFT, STANDALONE_DRAFT }
        export enum Icon { NONE, AIRPLANE, BOOKMARK, BUS, CAR, CLOCK, CONFIRMATION_NUMBER_ICON, DOLLAR, DESCRIPTION, EMAIL, EVENT_PERFORMER, EVENT_SEAT, FLIGHT_ARRIVAL, FLIGHT_DEPARTURE, HOTEL, HOTEL_ROOM_TYPE, INVITE, MAP_PIN, MEMBERSHIP, MULTIPLE_PEOPLE, OFFER, PERSON, PHONE, RESTAURANT_ICON, SHOPPING_CART, STAR, STORE, TICKET, TRAIN, VIDEO_CAMERA, VIDEO_PLAY }
        export enum ImageStyle { SQUARE, CIRCLE }
        export enum LoadIndicator { SPINNER, NONE }
        export enum NotificationType { INFO, ERROR, WARNING }
        export enum OnClose { NOTHING, RELOAD_ADD_ON }
        export enum OpenAs { FULL_SIZE, OVERLAY }
        export enum SelectionInputType { CHECK_BOX, RADIO_BUTTON, DROPDOWN }
    }
}

/**
 * CardService provides the ability to create generic cards used across different Google extensibility products, such as [Gmail add-ons](https://developers.google.com/gmail/add-ons).
 */
declare var CardService: GoogleAppsScript.Card.CardService;
