/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.card-service.d.ts" />

declare namespace GoogleAppsScript {
    namespace AddOns_Response_Service {
        /**
         * A builder for Chat AccessoryWidget objects. Accessory widgets are interactive widgets
         * that appear at the bottom of a message.
         *
         *     const widget = CardService.newButtonSet()
         *         .addButton(CardService.newImageButton()
         *           .setIcon(CardService.Icon.PHONE)
         *           .setOnClickAction(CardService.newAction()
         *             .setFunctionName("phone")))
         *         .addButton(CardService.newTextButton()
         *           .setText("Robot")
         *           .setIconUrl("https://developers.google.com/chat/images/quickstart-app-avatar.png")
         *           .setOnClickAction(CardService.newAction()
         *             .setFunctionName("robot")));
         *
         *     const accessoryWidget = AddOnsResponseService.newAccessoryWidget()
         *         .addWidget(widget);
         */
        interface AccessoryWidget {
            addWidget(widget: Card_Service.Widget): AccessoryWidget;
        }
        /**
         * An action that Google Workspace add-ons that extend Google Workspace Studio can use to
         * render a new card.
         *
         *     const link = AddOnsResponseService.newLink().setUrl('https://www.google.com');
         *     const action =
         *         AddOnsResponseService.newAction()
         *             .setLink(link);
         *
         *     const renderAction = AddOnsResponseService.newRenderActionBuilder().setAction(action).build();
         */
        interface Action {
            addModifyCard(modifyCard: ModifyCard): Action;
            addNavigation(navigation: Navigation): Action;
        }
        /**
         * The actions that add-ons can use in cards or the host application.
         *
         *     const notification = AddOnsResponseService.newNotification().setText("You closed a dialog!");
         *
         *     const navigation = AddOnsResponseService.newNavigation()
         *         .setEndNavigation(AddOnsResponseService.EndNavigation.CLOSE_DIALOG);
         *
         *     // An action that closes the dialog and shows a notification.
         *     const action = AddOnsResponseService.newActionResponseBuilder()
         *         .setNavigation(navigation)
         *         .setNotification(notification)
         *         .build();
         */
        interface ActionResponse {
            printJson(): string;
        }
        /**
         * A builder for ActionResponse objects.
         *
         *     const notification = AddOnsResponseService.newNotification().setText("You closed a dialog!");
         *
         *     const navigation = AddOnsResponseService.newNavigation()
         *         .setEndNavigation(AddOnsResponseService.EndNavigation.CLOSE_DIALOG);
         *
         *     const action = AddOnsResponseService.newActionResponseBuilder()
         *         .setNavigation(navigation)
         *         .setNotification(notification)
         *         .build();
         */
        interface ActionResponseBuilder {
            addModifyCard(modifyCard: ModifyCard): ActionResponseBuilder;
            build(): ActionResponse;
            setLinkPreview(linkPreview: LinkPreview): ActionResponseBuilder;
            setNavigation(navigation: Navigation): ActionResponseBuilder;
            setNotification(notification: Notification): ActionResponseBuilder;
            setOpenLink(openLink: OpenLink): ActionResponseBuilder;
            setStateChanged(stateChanged: boolean): ActionResponseBuilder;
        }
        /**
         * AddOnsResponseService provides the ability to create responses for Google Workspace
         * add-ons.
         *
         * Sample usage:
         *
         *     function myFunction() {
         *       return AddOnsResponseService.newChatDataActionBuilder();
         *     }
         *
         * The following example shows how a Chat app responds with a dialog:
         *
         *     const card = CardService.newCardBuilder()
         *         .setHeader(CardService.newCardHeader().setTitle("Card Title"))
         *         .addSection(CardService.newCardSection()
         *           .addWidget(CardService.newTextParagraph().setText("Text paragraph")))
         *         .build();
         *
         *     const actionResponse = AddOnsResponseService.newActionResponseBuilder()
         *         .setNavigation(AddOnsResponseService.newNavigation().pushCard(card))
         *         .build();
         *
         * The following example shows how a Chat app responds with a link preview card:
         *
         *     const card = CardService.newCardBuilder()
         *         .setHeader(CardService.newCardHeader().setTitle("Unfurl Card!"))
         *         .addSection(CardService.newCardSection()
         *           .addWidget(CardService.newTextParagraph().setText("url"))
         *           .addWidget(CardService.newButtonSet()
         *             .addButton(CardService.newTextButton()
         *               .setText("Open URL!")
         *               .setOpenLink(CardService.newOpenLink().setUrl("https://www.google.com")))))
         *         .build();
         *
         *     const cardWithId = CardService.newCardWithId().setCardId("card_one").setCard(card);
         *
         *     const chatDataAction = AddOnsResponseService.newChatDataActionBuilder()
         *         .setUpdateInlinePreviewAction(AddOnsResponseService.newUpdateInlinePreviewAction()
         *         .addCardWithId(cardWithId)).build();
         */
        interface AddOnsResponseService {
            AddonComposeUiActionType: typeof AddonComposeUiActionType;
            BasicDataType: typeof BasicDataType;
            ComposedEmailType: typeof ComposedEmailType;
            ContentType: typeof ContentType;
            EndNavigation: typeof EndNavigation;
            ErrorActionability: typeof ErrorActionability;
            ErrorRetryability: typeof ErrorRetryability;
            FontWeight: typeof FontWeight;
            ListType: typeof ListType;
            OnClose: typeof OnClose;
            OpenAs: typeof OpenAs;
            SendStatus: typeof SendStatus;
            TextStyle: typeof TextStyle;
            UpdateDraftBodyType: typeof UpdateDraftBodyType;
            ValidationErrorSeverity: typeof ValidationErrorSeverity;
            newAccessoryWidget(): AccessoryWidget;
            newAction(): Action;
            newActionResponseBuilder(): ActionResponseBuilder;
            newAddonComposeUiActionResponseBuilder(): AddonComposeUiActionResponseBuilder;
            newAttachment(): Attachment;
            newCalendarEventActionResponseBuilder(): CalendarEventActionResponseBuilder;
            newChatDataActionBuilder(): ChatDataActionsResponseBuilder;
            newChatMessage(): ChatMessage;
            newColor(): Color;
            newComposeActionResponseBuilder(): ComposeActionResponseBuilder;
            newCreateMessageAction(): CreateMessageAction;
            newDataType(): DataType;
            newDriveItemsSelectedActionResponseBuilder(): DriveItemsSelectedActionResponseBuilder;
            newDynamicResourceDefinition(): DynamicResourceDefinition;
            newEditorFileScopeActionResponseBuilder(): EditorFileScopeActionResponseBuilder;
            newHostAppAction(): HostAppAction;
            newHyperlink(): Hyperlink;
            newInsertSection(): InsertSection;
            newInsertWidget(): InsertWidget;
            newLink(): Link;
            newLinkPreview(): LinkPreview;
            newListContainer(): ListContainer;
            newListItem(): ListItem;
            newModifyCard(): ModifyCard;
            newNavigation(): Navigation;
            newNotification(): Notification;
            newOpenLink(): OpenLink;
            newRemoveSection(): RemoveSection;
            newRemoveWidget(): RemoveWidget;
            newRenderActionBuilder(): RenderActionBuilder;
            newResourceData(): ResourceData;
            newResourceField(): ResourceField;
            newResourceFieldsDefinitionRetrievedAction(): ResourceFieldsDefinitionRetrievedAction;
            newResourceRetrievedAction(): ResourceRetrievedAction;
            newResourceType(): ResourceType;
            newReturnElementErrorAction(): ReturnElementErrorAction;
            newReturnOutputVariablesAction(): ReturnOutputVariablesAction;
            newSaveWorkflowAction(): SaveWorkflowAction;
            newStyledText(): StyledText;
            newTextFormatChip(): TextFormatChip;
            newTextFormatElement(): TextFormatElement;
            newTextFormatIcon(): TextFormatIcon;
            newTimeStamp(): TimeStamp;
            newUniversalActionResponseBuilder(): UniversalActionResponseBuilder;
            newUpdateDraftActionResponseBuilder(): UpdateDraftActionResponseBuilder;
            newUpdateDraftBccRecipientsAction(): UpdateDraftBccRecipientsAction;
            newUpdateDraftBodyAction(): UpdateDraftBodyAction;
            newUpdateDraftCcRecipientsAction(): UpdateDraftCcRecipientsAction;
            newUpdateDraftSubjectAction(): UpdateDraftSubjectAction;
            newUpdateDraftToRecipientsAction(): UpdateDraftToRecipientsAction;
            newUpdateInlinePreviewAction(): UpdateInlinePreviewAction;
            newUpdateMessageAction(): UpdateMessageAction;
            newValueMetadata(): ValueMetadata;
            newVariableData(): VariableData;
            newWorkflowAction(): WorkflowAction;
            newWorkflowTextFormat(): WorkflowTextFormat;
            newWorkflowValidationErrorAction(): WorkflowValidationErrorAction;
        }
        /**
         * Represents an action on the addon compose ui.
         *
         *     // An AddonComposeUiActionResponse that dismiss the addon compose ui.
         *     const addonComposeUiActionResponse =
         *         AddOnsResponseService.newAddonComposeUiActionResponseBuilder()
         *             .setType(AddOnsResponseService.AddonComposeUiActionType.DISMISS)
         *             .build();
         */
        interface AddonComposeUiActionResponse {
            printJson(): string;
        }
        /**
         * A builder for AddonComposeUiActionResponse objects.
         */
        interface AddonComposeUiActionResponseBuilder {
            build(): AddonComposeUiActionResponse;
            setType(type: AddonComposeUiActionType): AddonComposeUiActionResponseBuilder;
        }
        /**
         * An enum value that specifies the type of an AddonComposeUiActionResponse.
         */
        enum AddonComposeUiActionType {
            DISMISS,
        }
        /**
         * Represents an attachment created by an add-on. This can be used within the context of
         * different Google extensibility products to generate new attachments, such as for Calendar
         * events.
         *
         *     const attachment = AddOnsResponseService.newAttachment()
         *         .setResourceUrl('https://fakeresourceurl.com')
         *         .setTitle('Attachment title')
         *         .setMimeType('text/html')
         *         .setIconUrl('https://fakeresourceurl.com/iconurl.png');
         */
        interface Attachment {
            setIconUrl(iconUrl: string): Attachment;
            setMimeType(mimeType: string): Attachment;
            setResourceUrl(resourceUrl: string): Attachment;
            setTitle(title: string): Attachment;
        }
        /**
         * An enum that represents the basic generic data types.
         */
        enum BasicDataType {
            BASIC_TYPE_UNSPECIFIED,
            STRING,
            INTEGER,
            FLOAT,
            TIMESTAMP,
            BOOLEAN,
            EMAIL_ADDRESS,
            GOOGLE_USER,
            FILE,
            FORMATTED_TEXT,
        }
        /**
         * Represents a response that makes changes to the calendar event that the user is currently
         * editing in reaction to an action taken in the UI, such as a button click.
         *
         *     // A CalendarEventActionResponse that adds two attendees to an event.
         *     const calendarEventActionResponse =
         *         AddOnsResponseService.newCalendarEventActionResponseBuilder()
         *             .addAttendees(['user1@example.com', 'user2@example.com'])
         *             .build();
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
         * A builder for Chat DataAction objects.
         *
         *     const card = CardService.newCardBuilder()
         *         .setHeader(CardService.newCardHeader().setTitle("Card Title"))
         *         .addSection(CardService.newCardSection()
         *           .addWidget(CardService.newTextParagraph().setText("Text paragraph")))
         *         .build()
         *
         *     const cardWithId = CardService.newCardWithId().setCardId("card_one").setCard(card)
         *
         *     const message = AddOnsResponseService.newChatMessage().addCardWithId(cardWithId)
         *
         *     const chatDataAction = AddOnsResponseService.newChatDataActionBuilder()
         *         .setCreateChatMessageAction(AddOnsResponseService.newCreateMessageAction()
         *         .setMessage(message))
         *         .build()
         */
        interface ChatDataActionsResponseBuilder {
            build(): DataActionsResponse;
            setCreateChatMessageAction(createMessageAction: CreateMessageAction): ChatDataActionsResponseBuilder;
            setUpdateChatMessageAction(updateMessageAction: UpdateMessageAction): ChatDataActionsResponseBuilder;
            setUpdateInlinePreviewAction(
                updateInlinePreviewAction: UpdateInlinePreviewAction,
            ): ChatDataActionsResponseBuilder;
        }
        /**
         * A Google Chat message.
         *
         *     const card = CardService.newCardBuilder()
         *         .setHeader(CardService.newCardHeader().setTitle("Card Title"))
         *         .addSection(CardService.newCardSection()
         *           .addWidget(CardService.newTextParagraph().setText("Text paragraph")))
         *         .build();
         *
         *     const cardWithId = CardService.newCardWithId().setCardId("card_one").setCard(card);
         *
         *     const message = AddOnsResponseService.newChatMessage().addCardWithId(cardWithId);
         */
        interface ChatMessage {
            addAccessoryWidget(accessoryWidget: AccessoryWidget): ChatMessage;
            addCardWithId(cardWithId: Card_Service.CardWithId): ChatMessage;
            setText(text: string): ChatMessage;
        }
        /**
         * A Color object which represents a color in the RGBA color space.
         *
         *     const errorStyledText = AddOnsResponseService.newStyledText()
         *       .setText("Styled Text!")
         *       .addStyle(AddOnsResponseService.TextStyle.UNDERLINE)
         *       .setColor(
         *         AddOnsResponseService.newColor()
         *           .setRed(0.1)
         *           .setBlue(1.0)
         *           .setGreen(1.0)
         *           .setAlpha(0.78)
         *       )
         */
        interface Color {
            setAlpha(alpha: number): Color;
            setBlue(blue: number): Color;
            setGreen(green: number): Color;
            setRed(red: number): Color;
        }
        /**
         * The response object that may be returned from a callback method for compose action in a
         * Gmail add-on.
         *
         * Note: This object isn't related to compose actions that are used to extend the compose
         * UI. Rather, this object is a response to an Action that composes draft messages when a
         * specific UI element is selected.
         *
         *     const composeActionResponse =
         *         AddOnsResponseService.newComposeActionResponseBuilder()
         *             .setGmailDraft(GmailApp.createDraft('recipient', 'subject', 'body'))
         *             .build();
         */
        interface ComposeActionResponse {
            printJson(): string;
        }
        /**
         * A builder for ComposeActionResponse objects.
         *
         * Note: This object isn't related to compose actions that are used to extend the compose
         * UI. Rather, this builder creates responses to an Action that composes draft messages when
         * a specific UI element is selected.
         */
        interface ComposeActionResponseBuilder {
            build(): ComposeActionResponse;
            setGmailDraft(draft: Gmail.GmailDraft): ComposeActionResponseBuilder;
        }
        /**
         * An enum value that specifies whether the composed email is a standalone or reply draft.
         */
        enum ComposedEmailType {
            REPLY_AS_DRAFT,
            STANDALONE_DRAFT,
        }
        /**
         * An enum value that specifies the content type of the content generated by a
         * UpdateDraftActionResponse.
         */
        enum ContentType {
            TEXT,
            MUTABLE_HTML,
            IMMUTABLE_HTML,
        }
        /**
         * A builder for Chat CreateMessageAction objects.
         *
         *     const card = CardService.newCardBuilder()
         *         .setHeader(CardService.newCardHeader().setTitle("Card Title"))
         *         .addSection(CardService.newCardSection()
         *           .addWidget(CardService.newTextParagraph().setText("Text paragraph")))
         *         .build();
         *
         *     const cardWithId = CardService.newCardWithId().setCardId("card_one").setCard(card);
         *
         *     const message = AddOnsResponseService.newChatMessage().addCardWithId(cardWithId);
         *
         *     const chatDataAction = AddOnsResponseService.newChatDataActionBuilder()
         *         .setCreateChatMessageAction(AddOnsResponseService.newCreateMessageAction()
         *         .setMessage(message))
         *         .build();
         */
        interface CreateMessageAction {
            setMessage(message: ChatMessage): CreateMessageAction;
        }
        /**
         * Creates or updates a message in Google Chat. For details, see Build Google Chat
         * interfaces.
         */
        interface DataActionsResponse {
            printJson(): string;
        }
        /**
         * A DataType is used to set the type of a variable. The type can be one of the basic data
         * type or a Workspace Studio-specific resource type.
         *
         * Sample usage:
         *
         *     const dataType = AddOnsResponseService.newDataType()
         *         .setBasicDataType(
         *           AddOnsResponseService.BasicDataType.STRING
         *         )
         *         .setValueMetadata(
         *           AddOnsResponseService.newValueMetadata()
         *             .addEnumValue("sample_enum_value")
         *         );
         *
         *     let resourceField = AddOnsResponseService.newResourceField()
         *         .setSelector("question_1")
         *         .setDisplayText("Question 1")
         *         .setDataType(dataType);
         *
         *     }
         */
        interface DataType {
            setBasicDataType(basicDataType: BasicDataType): DataType;
            setResourceType(resourceType: ResourceType): DataType;
            setValueMetadata(valueMetadata: ValueMetadata): DataType;
        }
        /**
         * Represents a response that makes changes to Drive while Drive items are selected and in
         * reaction to an action taken in the UI, such as a button click.
         */
        interface DriveItemsSelectedActionResponse {
            printJson(): string;
        }
        /**
         * A builder for DriveItemsSelectedActionResponse objects.
         */
        interface DriveItemsSelectedActionResponseBuilder {
            build(): DriveItemsSelectedActionResponse;
            requestFileScope(itemId: string): DriveItemsSelectedActionResponseBuilder;
        }
        /**
         * A DynamicResourceDefinition is a building block for a
         * ResourceFieldsDefinitionRetrievedAction, it can contain one or more numbers of
         * ResourceField to dynamically define the number of output variables provided by a step in
         * Google Workspace Studio.
         *
         * Sample usage:
         *
         *     let dynamicResourceDefinition = AddOnsResponseService.newDynamicResourceDefinition()
         *        .setResourceId("resource_definition_1") // The resource ID must match the one defined in the manifest.
         *        .addResourceField(
         *          AddOnsResponseService.newResourceField()
         *            .setSelector("question_1")
         *            .setDisplayText("Question 1")
         *        );
         */
        interface DynamicResourceDefinition {
            addResourceField(resourceField: ResourceField): DynamicResourceDefinition;
            setResourceId(resourceId: string): DynamicResourceDefinition;
        }
        /**
         * Makes changes to an Editor, such as Google Docs, Sheets, or Slides in reaction to an
         * action taken in the UI. For example a request for drive.file scope for the current active
         * document.
         */
        interface EditorFileScopeActionResponse {
            printJson(): string;
        }
        /**
         * A builder for EditorFileScopeActionResponse objects.
         */
        interface EditorFileScopeActionResponseBuilder {
            build(): EditorFileScopeActionResponse;
            requestFileScopeForActiveDocument(): EditorFileScopeActionResponseBuilder;
        }
        /**
         * An enum that specifies the action during navigation.
         *
         *     const navigation = AddOnsResponseService.newNavigation()
         *         .setEndNavigation(AddOnsResponseService.EndNavigation.CLOSE_DIALOG);
         */
        enum EndNavigation {
            ACTION_UNSPECIFIED,
            CLOSE_DIALOG,
            CLOSE_DIALOG_AND_EXECUTE,
        }
        /**
         * A Enum that represents the error actionability. The enum values are mapped to the proto
         * enum values to provide the corresponding enum value support in AppScript.
         */
        enum ErrorActionability {
            ERROR_ACTIONABILITY_UNSPECIFIED,
            NOT_ACTIONABLE,
            ACTIONABLE,
        }
        /**
         * A Enum that represents the retry-ability of action invocation when having an error.
         */
        enum ErrorRetryability {
            RETRYABILITY_UNSPECIFIED,
            NOT_RETRYABLE,
            RETRYABLE,
        }
        /**
         * An enum that represents the font weight of the styled text.
         */
        enum FontWeight {
            FONT_WEIGHT_UNSPECIFIED,
            LIGHT,
            MEDIUM,
            BOLD,
        }
        /**
         * A HostAppAction is a type of Action that is handled by individual host apps. Host Apps
         * include Gmail, Chat, Drive, Calendar, Editor, Sheets, Studio, DuetAI.
         *
         * Sample usage:
         *
         *     const hostAppAction = AddOnsResponseService.newHostAppAction()
         *     .setWorkflowAction(AddOnsResponseService.newWorkflowAction());
         */
        interface HostAppAction {
            setWorkflowAction(workflowAction: WorkflowAction): HostAppAction;
        }
        /**
         * A Hyperlink element used in TextFormatElement.
         *
         *     const hyperLink = AddOnsResponseService.newHyperlink()
         *           .setText("Hyperlink_text")
         *           .setLink("https://www.google.com");
         */
        interface Hyperlink {
            setLink(link: string): Hyperlink;
            setText(text: string): Hyperlink;
        }
        /**
         * A builder for InsertSection objects. Developers can insert a new section to the card by
         * passing a InsertSection to ModifyCard
         *
         * Sample usage:
         *
         *     const insertSection = AddOnsResponseService.newInsertSection().insertBelowSection('sample_id')
         *     .setSection(CardService.newCardSection().setHeader('New Section'));
         *
         *     const modifyCard = AddOnsResponseService.newModifyCard()
         *     .setInsertSection(insertSection);
         */
        interface InsertSection {
            insertAtTop(onCardTop: boolean): InsertSection;
            insertBelowSection(sectionId: string): InsertSection;
            setSection(section: Card_Service.CardSection): InsertSection;
        }
        /**
         * A builder for InsertWidget objects. Developers cans insert a widget into a card by
         * passing a InsertWidget to ModifyCard
         *
         * Sample usage:
         *
         *     const newWidget = CardService.newDecoratedText().setText('New Widget');
         *
         *     const insertWidget = AddOnsResponseService.newInsertWidget()
         *                                               .insertAboveWidget('sample_id')
         *                                               .setWidget(newWidget);
         *
         *     const modifyCard = AddOnsResponseService.newModifyCard().setInsertWidget(insertWidget);
         */
        interface InsertWidget {
            insertAboveWidget(widgetId: string): InsertWidget;
            insertBelowWidget(widgetId: string): InsertWidget;
            setWidget(widget: Card_Service.Widget): InsertWidget;
        }
        /**
         * The link object from a third-party resource which gets converted it to a smart chip in
         * the host application.
         *
         *     const link =
         *         AddOnsResponseService.newLink()
         *             .setUrl("www.clickme.com");
         */
        interface Link {
            setTitle(title: string): Link;
            setUrl(url: string): Link;
        }
        /**
         * Card action that displays a link preview card and smart chip in the host app. For more
         * information, refer to Preview links with smart chips.
         *
         *     const decoratedText =
         *         CardService.newDecoratedText().setTopLabel('Hello').setText('Hi!');
         *
         *     const cardSection = CardService.newCardSection().addWidget(decoratedText);
         *
         *     const card = CardService.newCardBuilder().addSection(cardSection).build();
         *
         *     const linkPreview =
         *         AddOnsResponseService.newLinkPreview().setPreviewCard(card).setTitle(
         *             'Smart chip title');
         */
        interface LinkPreview {
            printJson(): string;
            setLinkPreviewTitle(title: string): LinkPreview;
            setPreviewCard(previewCard: Card_Service.Card): LinkPreview;
            setTitle(title: string): LinkPreview;
        }
        /**
         * Container for list items, where each list item can contain multiple TextFormatElement. \*
         *
         *     const listContainer = AddOnsResponseService.newListContainer()
         *           .setListType(AddOnsResponseService.ListType.UNORDERED)
         *           .addListItem(
         *             AddOnsResponseService.newListItem()
         *               .addTextFormatElement(
         *                 AddOnsResponseService.newTextFormatElement()
         *                   .setStyledText(sampleStyledText)
         *               ));
         */
        interface ListContainer {
            addListItem(listItem: ListItem): ListContainer;
            setListNestLevel(listLevel: Integer): ListContainer;
            setListType(listType: ListType): ListContainer;
        }
        /**
         * A list item, where each list item can contain multiple TextFormatElement.
         *
         *     const listItem = AddOnsResponseService.newListItem()
         *           .addTextFormatElements(AddOnsResponseService.newStyledText());
         */
        interface ListItem {
            addTextFormatElement(textFormatElement: TextFormatElement): ListItem;
        }
        /**
         * An enum that represents the type of the list.
         */
        enum ListType {
            LIST_TYPE_UNSPECIFIED,
            ORDERED,
            UNORDERED,
        }
        /**
         * A builder for ModifyCard objects that changes and updates an existing card's interface by
         * passing the ModifyCard object to a Action. For usage, see Update configuration cards.
         *
         * Sample usage:
         *
         *     const insertSection = AddOnsResponseService.newInsertSection().insertBelowSection('sample_id')
         *     .setSection(CardService.newCardSection().setHeader('New Section'));
         *
         *     const modifyCard = AddOnsResponseService.newModifyCard().setInsertSection(insertSection);
         *
         *     const navigation = AddOnsResponseService.newNavigation().addModifyCard(modifyCard);
         */
        interface ModifyCard {
            setInsertSection(insertSection: InsertSection): ModifyCard;
            setInsertWidget(insertWidget: InsertWidget): ModifyCard;
            setRemoveSection(removeSection: RemoveSection): ModifyCard;
            setRemoveWidget(removeWidget: RemoveWidget): ModifyCard;
            setReplaceSection(replacementSection: Card_Service.CardSection): ModifyCard;
            setReplaceWidget(replacementWidget: Card_Service.Widget): ModifyCard;
            setUpdateWidget(updateWidget: UpdateWidget): ModifyCard;
        }
        /**
         * A helper object that controls card navigation. See the card navigation guide for more
         * details.
         *
         * Sample usage:
         *
         *     function myFunction() {
         *       return AddOnsResponseService.newChatDataActionBuilder();
         *     }
         */
        interface Navigation {
            popCard(): Navigation;
            popToNamedCard(cardName: string): Navigation;
            popToRoot(): Navigation;
            printJson(): string;
            pushCard(card: Card_Service.Card): Navigation;
            setEndNavigation(endNavigation: EndNavigation): Navigation;
            updateCard(card: Card_Service.Card): Navigation;
        }
        /**
         * Displays a notification when users submit and close a dialog.
         *
         *     const notification = AddOnsResponseService.newNotification().setText("You closed a dialog!");
         */
        interface Notification {
            setText(text: string): Notification;
        }
        /**
         * An enum that specifies what to do when a URL opened through an OpenLink is closed.
         *
         * When a link is opened, the client either forgets about it or waits until the window is
         * closed. The implementation depends on the client platform capabilities. OnClose may cause
         * OpenAs to be ignored; if the client platform cannot support both selected values
         * together, OnClose takes precedence.
         */
        enum OnClose {
            NOTHING,
            RELOAD,
        }
        /**
         * An enum that specifies how to open a URL.
         *
         * The client can open a URL as either a full size window (if that is the frame used by the
         * client), or an overlay (such as a pop-up). The implementation depends on the client
         * platform capabilities, and the value selected may be ignored if the client does not
         * support it. FULL_SIZE is supported by all clients.
         *
         * Using OnClose may cause OpenAs to be ignored; if the client platform cannot support both
         * selected values together, OnClose takes precedence.
         */
        enum OpenAs {
            FULL_SIZE,
            OVERLAY,
        }
        /**
         * Represents an action to open a link with some options.
         *
         *     // A button that opens as a link in an overlay and
         *     // requires a reload when closed.
         *     const button = CardService.newTextButton()
         *                        .setText('This button opens a link in an overlay window')
         *                        .setOpenLink(
         *                            CardService.newOpenLink()
         *                                .setUrl('https://www.google.com')
         *                                .setOpenAs(CardService.OpenAs.OVERLAY)
         *                                .setOnClose(CardService.OnClose.RELOAD_ADD_ON),
         *                        );
         *
         *     // An action response that opens a link in full screen and
         *     // requires no action when closed.
         *     const actionResponse =
         *         AddOnsResponseService.newActionResponseBuilder()
         *             .setOpenLink(
         *                 AddOnsResponseService.newOpenLink()
         *                     .setUrl('https://www.google.com')
         *                     .setOpenAs(AddOnsResponseService.OpenAs.FULL_SIZE)
         *                     .setOnClose(AddOnsResponseService.OnClose.NOTHING),
         *                 )
         *             .build();
         *
         * Note: To reload add-ons after closing a link, don't use a link with
         * Cross-Origin-Opener-Policy (COOP) header enabled. If COOP is enabled in a link, add-ons
         * can't detect the window state, and the add-on card doesn't update.
         */
        interface OpenLink {
            setOnClose(onClose: OnClose): OpenLink;
            setOpenAs(openAs: OpenAs): OpenLink;
            setUrl(url: string): OpenLink;
        }
        /**
         * A builder for RemoveSection objects. Developers can remove a section from the card by
         * passing a RemoveSection to ModifyCard
         *
         * Sample usage:
         *
         *     const removeSection = AddOnsResponseService.newRemoveSection().setSectionId('sample_id');
         *
         *     const modifyCard = AddOnsResponseService.newModifyCard().setRemoveSection(removeSection);
         */
        interface RemoveSection {
            setSectionId(sectionId: string): RemoveSection;
        }
        /**
         * A builder for RemoveWidget objects. Developers can remove a widget from the card by
         * passing a RemoveWidget to ModifyCard.
         *
         * Sample usage:
         *
         *     const removeWidget = AddOnsResponseService.newRemoveWidget().setWidgetId('sample_id');
         *
         *     const modifyCard = AddOnsResponseService.newModifyCard().setRemoveWidget(removeWidget);
         */
        interface RemoveWidget {
            setWidgetId(widgetId: string): RemoveWidget;
        }
        /**
         * Renders or updates a card by performing an Action in response to a user interaction.
         *
         * Sample usage:
         *
         *     const renderAction = AddOnsResponseService.newRenderActionBuilder()
         *     .setAction(AddOnsResponseService.newAction().setLink(AddOnsResponseService.newLink().setUrl('https://www.google.com')))
         *     .build();
         */
        interface RenderAction {
            printJson(): string;
        }
        /**
         * A builder for RenderAction objects.
         */
        interface RenderActionBuilder {
            build(): RenderAction;
            setAction(action: Action): RenderActionBuilder;
            setHostAppAction(hostAppAction: HostAppAction): RenderActionBuilder;
        }
        /**
         * Represents a application specific resource data, a resource data contains a collection of
         * key-value pairs of variable names and VariableData.
         *
         * Sample usage:
         *
         *     let customResourceData = AddOnsResponseService.newResourceData()
         *       .setVariableDataMap(
         *         {
         *           "field_1": fieldData_1,
         *           "field_2": fieldData_2
         *         }
         *       );
         *
         *     let outputVariableData = AddOnsResponseService.newVariableData()
         *       .addResourceData(customResourceData);
         *
         *     let workflowAction = AddOnsResponseService.newReturnOutputVariablesAction()
         *       .setVariableDataMap({ "resource_data": outputVariableData });
         */
        interface ResourceData {
            addVariableData(key: string, value: VariableData): ResourceData;
            setVariableDataMap(fields: any): ResourceData;
        }
        /**
         * A ResourceField is a basic building block of a DynamicResourceDefinition, each resource
         * field corresponds to a output variable of the current step. A single
         * DynamicResourceDefinition can contain multiple resource fields.
         *
         * Sample usage:
         *
         *     function onDynamicDefinitionFunction(e) {
         *       // ...
         *       let resourceField = AddOnsResponseService.newResourceField()
         *         .setSelector("question_1")
         *         .setDisplayText("Question 1")
         *         .setDataType(AddOnsResponseService.newDataType()
         *            .setBasicDataType(AddOnsResponseService.BasicDataType.STRING)
         *         );
         *
         *       let resourceDefinitions = AddOnsResponseService.newDynamicResourceDefinition()
         *         .setResourceId("resource_definition_1")
         *         .addResourceField(resourceField);
         *       // ...
         *     }
         *
         *     function onDynamicProviderFunction(e) {
         *       // ...
         *       let workflowAction = AddOnsResponseService.newResourceRetrievedAction()
         *         .setResourceData(
         *           AddOnsResponseService.newResourceData()
         *             .addVariableData("question_1", AddOnsResponseService.newVariableData().addStringValue("Answer 1"))
         *         );
         *       // ...
         *     }
         */
        interface ResourceField {
            setDataType(dataType: DataType): ResourceField;
            setDisplayText(displayText: string): ResourceField;
            setSelector(selector: string): ResourceField;
        }
        /**
         * A ResourceFieldsDefinitionRetrievedAction is a type of
         * ResourceFieldsDefinitionRetrievedAction that is used to retrieve the definition of a list
         * of resource fields through the dynamicResourceDefinitionProvider function specified in
         * the manifest. A ResourceFieldsDefinitionRetrievedAction can contain one or more
         * DynamicResourceDefinition.
         *
         * Sample usage:
         *
         *     let resourceDefinitions = AddOnsResponseService.newDynamicResourceDefinition()
         *        .setResourceId("resource_definition_1")
         *        .addResourceField(AddOnsResponseService.newResourceField()
         *          .setSelector("question_1")
         *          .setDisplayText("Question 1"))
         *
         *     let workflowAction = AddOnsResponseService.newResourceFieldsDefinitionRetrievedAction()
         *        .addDynamicResourceDefinition(resourceDefinitions)
         *
         *     let hostAppAction = AddOnsResponseService.newHostAppAction()
         *        .setWorkflowAction(workflowAction);
         *
         *     return AddOnsResponseService.newRenderActionBuilder()
         *        .setHostAppAction(hostAppAction)
         *        .build();
         */
        interface ResourceFieldsDefinitionRetrievedAction {
            addDynamicResourceDefinition(
                dynamicResourceDefinition: DynamicResourceDefinition,
            ): ResourceFieldsDefinitionRetrievedAction;
        }
        /**
         * A ResourceRetrievedAction is used to retrieve custom resource content when needed, where
         * the custom resource field is defined in the ResourceData.
         *
         * Sample usage:
         *
         *     let fieldData_1 = AddOnsResponseService.newVariableData()
         *        .addStringValue("value_1");
         *     let fieldData_2 = AddOnsResponseService.newVariableData()
         *        .addStringValue("value_2");
         *
         *     let resourceData = AddOnsResponseService.newResourceData()
         *        .addVariableData("field_1", fieldData_1)
         *        .addVariableData("field_2", fieldData_2)
         *
         *     let workflowAction = AddOnsResponseService.newResourceRetrievedAction()
         *        .setResourceData(resourceData)
         *
         *     let hostAppAction = AddOnsResponseService.newHostAppAction()
         *        .setWorkflowAction(workflowAction);
         *
         *     return AddOnsResponseService.newRenderActionBuilder()
         *        .setHostAppAction(hostAppAction)
         *        .build();
         */
        interface ResourceRetrievedAction {
            setResourceData(resourceData: ResourceData): ResourceRetrievedAction;
        }
        /**
         * An application specific resource type, the unique identifier of the resource type should
         * have a corresponding WorkflowResourceDefinition.
         *
         * Sample usage:
         *
         *     const customResourceType = AddOnsResponseService.newResourceType()
         *        .setWorkflowResourceDefinitionId("sample_resource_type_1");
         */
        interface ResourceType {
            setWorkflowResourceDefinitionId(resourceType: string): ResourceType;
        }
        /**
         * A ReturnElementErrorAction indicates that an error occurred during element invocation.
         *
         * Sample usage:
         *
         *     const workflowAction = AddOnsResponseService.newReturnElementErrorAction()
         *     .setErrorActionability(
         *       AddOnsResponseService.ErrorActionability.NOT_ACTIONABLE
         *     )
         *     .setErrorRetryability(
         *       AddOnsResponseService.ErrorRetryability.NOT_RETRYABLE
         *     )
         *     // Set the user-facing error log
         *     .setErrorLog(
         *       AddOnsResponseService.newWorkflowTextFormat()
         *         .addTextFormatElement(
         *           AddOnsResponseService.newTextFormatElement()
         *             .setText("Failed to create Google Doc.")
         *         )
         *     );
         */
        interface ReturnElementErrorAction {
            setErrorActionability(errorActionability: ErrorActionability): ReturnElementErrorAction;
            setErrorLog(log: WorkflowTextFormat): ReturnElementErrorAction;
            setErrorRetryability(errorRetryability: ErrorRetryability): ReturnElementErrorAction;
        }
        /**
         * Contains output variables generated by the executed action in Google Workspace Studio.
         *
         * Sample usage:
         *
         *     const variableDataMap = {
         *       "result": AddOnsResponseService.newVariableData()
         *         .addIntegerValue(100)
         *     };
         *     const workflowAction = AddOnsResponseService.newReturnOutputVariablesAction()
         *       .setVariableDataMap(variableDataMap);
         *
         *     const hostAppAction = AddOnsResponseService.newHostAppAction()
         *       .setWorkflowAction(workflowAction);
         *
         *      const renderAction = AddOnsResponseService.newRenderActionBuilder()
         *       .setHostAppAction(hostAppAction)
         *       .build();
         *
         *     return renderAction;
         */
        interface ReturnOutputVariablesAction {
            addVariableData(key: string, value: VariableData): ReturnOutputVariablesAction;
            setLog(log: WorkflowTextFormat): ReturnOutputVariablesAction;
            setVariableDataMap(variables: any): ReturnOutputVariablesAction;
        }
        /**
         * This action indicates that the host app (Google Workspace Studio) should save the agent.
         *
         * Sample usage:
         *
         *     const workflowClientAction = AddOnsResponseService.newWorkflowClientAction()
         *         .setSaveWorkflowAction(
         *            AddOnsResponseService.newSaveWorkflowAction()
         *         );
         */
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface SaveWorkflowAction {
        }
        /**
         * An enum value that specifies the send status of an UpdateDraftActionResponse.
         */
        enum SendStatus {
            NOT_SEND,
            CONTINUE_SEND,
        }
        /**
         * Text element with styles such as bold, italic and color.
         *
         * Sample usage:
         *
         *     const styledText = AddOnsResponseService.newStyledText()
         *       .setText("Styled Text!")
         *       .addStyle(AddOnsResponseService.TextStyle.ITALIC)
         *       .addStyle(AddOnsResponseService.TextStyle.UNDERLINE)
         *       .setFontWeight(AddOnsResponseService.FontWeight.BOLD)
         *       .setColor(
         *         AddOnsResponseService.newColor()
         *           .setRed(0.1)
         *           .setBlue(0.3)
         *           .setGreen(0.1)
         *           .setAlpha(0.78)
         *       );
         */
        interface StyledText {
            addStyle(style: TextStyle): StyledText;
            setColor(color: Color): StyledText;
            setFontWeight(fontWeight: FontWeight): StyledText;
            setText(text: string): StyledText;
        }
        /**
         * A clickable chip in the text format.
         *
         * Sample usage:
         *
         *     const chip = AddOnsResponseService.newChip()
         *         .setTextFormatIcon(AddOnsResponseService.newTextFormatIcon()
         *           .setIconUrl("https://www.google.com/icon.png"))
         *         .setLabel("test_label")
         *         .setUrl("https://www.google.com/chip.png");
         *
         *     }
         */
        interface TextFormatChip {
            setLabel(label: string): TextFormatChip;
            setTextFormatIcon(icon: TextFormatIcon): TextFormatChip;
            setUrl(url: string): TextFormatChip;
        }
        /**
         * A text format element, which can be a TextFormatChip, StyledText, Hyperlink, or
         * ListContainer.
         *
         * Sample usage:
         *
         *     const sampleChip = AddOnsResponseService.newTextFormatChip()
         *             .setLabel("Label!");
         *     const textFormatElement = AddOnsResponseService.newTextFormatElement()
         *             .setTextFormatChip(sampleChip);
         */
        interface TextFormatElement {
            setHyperlink(hyperlink: Hyperlink): TextFormatElement;
            setListContainer(listContainer: ListContainer): TextFormatElement;
            setStyledText(styledText: StyledText): TextFormatElement;
            setText(text: string): TextFormatElement;
            setTextFormatChip(chip: TextFormatChip): TextFormatElement;
        }
        /**
         * An icon that is displayed in a TextFormatChip.
         *
         * Sample usage:
         *
         *     const icon = AddOnsResponseService.newTextFormatIcon()
         *           .setMaterialIconName("check_box");
         */
        interface TextFormatIcon {
            setIconUrl(iconUrl: string): TextFormatIcon;
            setMaterialIconName(materialIconName: string): TextFormatIcon;
        }
        /**
         * An enum that represents the style of the styled text.
         */
        enum TextStyle {
            STYLE_UNSPECIFIED,
            ITALIC,
            UNDERLINE,
            STRIKETHROUGH,
            LINE_BREAK,
            UPPERCASE,
            CODE,
            CODE_BLOCK,
        }
        /**
         * Represents a timestamp object which is can be added to a VariableData.
         *
         * Sample usage:
         *
         *     const timeStamp = AddOnsResponseService.newTimeStamp()
         *         .setSeconds(10086)
         *         .setNanos(123);
         */
        interface TimeStamp {
            setNanos(nanos: Integer): TimeStamp;
            setSeconds(seconds: Integer): TimeStamp;
        }
        /**
         * The response object that may be returned from a method that creates universal action.
         *
         *     // A universal action that opens a link.
         *     const openLinkUniversalAction =
         *         AddOnsResponseService.newUniversalActionResponseBuilder()
         *             .setOpenLink(AddOnsResponseService.newOpenLink().setUrl('https://www.google.com'))
         *             .build();
         *
         *     const cardBuilder1 = CardService.newCardBuilder();
         *     const cardBuilder2 = CardService.newCardBuilder();
         *     // Finish building the cards ...
         *
         *     // A universal action that shows two static cards.
         *     const cardsUniversalAction =
         *         AddOnsResponseService.newUniversalActionResponseBuilder()
         *             .displayAddOnCards([cardBuilder1.build(), cardBuilder2.build()])
         *             .build();
         */
        interface UniversalActionResponse {
            printJson(): string;
        }
        /**
         * A builder for the UniversalActionResponse objects.
         */
        interface UniversalActionResponseBuilder {
            build(): UniversalActionResponse;
            displayAddOnCards(cardObjects: any[]): UniversalActionResponseBuilder;
            setOpenLink(openLink: OpenLink): UniversalActionResponseBuilder;
        }
        /**
         * Represents an action that updates the email draft that the user is currently editing.
         *
         *     // An UpdateDraftActionResponse that inserts a list of To recipients into an
         *     // email draft
         *     let updateDraftActionResponse =
         *         AddOnsResponseService.newUpdateDraftActionResponseBuilder()
         *             .setUpdateToRecipientsAction(
         *                 AddOnsResponseService.newUpdateToRecipientsAction().addUpdateToRecipients([
         *                   'joe@example.com',
         *                   'wen@example.com',
         *                 ]),
         *                 )
         *             .build();
         *
         *     // An UpdateDraftActionResponse that inserts a list of Cc recipients into an
         *     // email draft
         *     updateDraftActionResponse =
         *         AddOnsResponseService.newUpdateDraftActionResponseBuilder()
         *             .setUpdateCcRecipientsAction(
         *                 AddOnsResponseService.newUpdateCcRecipientsAction().addUpdateCcRecipients([
         *                   'joe@example.com',
         *                   'wen@example.com',
         *                 ]),
         *                 )
         *             .build()
         *
         *             // An UpdateDraftActionResponse that inserts a list of Bcc recipients
         *             // into an email draft
         *             .setUpdateCcRecipientsAction(
         *                 AddOnsResponseService.newUpdateBccRecipientsAction().addUpdateBccRecipients([
         *                   'joe@example.com',
         *                   'wen@example.com',
         *                 ]),
         *             );
         *
         *     // An UpdateDraftActionResponse that inserts a subject line into an email draft
         *     updateDraftActionResponse =
         *         AddOnsResponseService.newUpdateDraftActionResponseBuilder()
         *             .setUpdateDraftSubjectAction(
         *                 AddOnsResponseService.newUpdateDraftSubjectAction().addUpdateSubject(
         *                     'example subject',
         *                     ),
         *                 )
         *             .build();
         *
         *     // An UpdateDraftActionResponse that inserts non-editable content (a link in
         *     // this case) into an email draft.
         *     updateDraftActionResponse =
         *         AddOnsResponseService.newUpdateDraftActionResponseBuilder()
         *             .setUpdateDraftBodyAction(
         *                 AddOnsResponseService.newUpdateDraftBodyAction()
         *                     .addUpdateContent(
         *                         '<a href="https://www.google.com">Google</a>',
         *                         CardService.ContentType.IMMUTABLE_HTML,
         *                         )
         *                     .setUpdateType(CardService.UpdateDraftBodyType.IN_PLACE_INSERT),
         *                 )
         *             .build();
         *
         *     // An UpdateDraftActionResponse that inserts a link into an email draft. The
         *     // added content can be edited further.
         *     updateDraftActionResponse =
         *         AddOnsResponseService.newUpdateDraftActionResponseBuilder()
         *             .setUpdateDraftBodyAction(
         *                 AddOnsResponseService.newUpdateDraftBodyAction()
         *                     .addUpdateContent(
         *                         '<a href="https://www.google.com">Google</a>',
         *                         CardService.ContentType.MUTABLE_HTML,
         *                         )
         *                     .setUpdateType(CardService.UpdateDraftBodyType.IN_PLACE_INSERT),
         *                 )
         *             .build();
         *
         *     // An UpdateDraftActionResponse that inserts multiple values of different types.
         *     // The example action response inserts two lines next to each other in the email
         *     // draft, at the cursor position. Each line contains the content added by
         *     // {@link UpdateDraftActionResponseBuilder#addUpdateContent}.
         *     updateDraftActionResponse =
         *         AddOnsResponseService.newUpdateDraftActionResponseBuilder()
         *             .setUpdateDraftBodyAction(
         *                 AddOnsResponseService.newUpdateDraftBodyAction()
         *                     .addUpdateContent(
         *                         '<a href="https://www.google.com">Google</a>',
         *                         CardService.ContentType.MUTABLE_HTML,
         *                         )
         *                     .addUpdateContent(
         *                         'Above is a google link.', CardService.ContentType.PLAIN_TEXT)
         *                     .setUpdateType(CardService.UpdateDraftBodyType.IN_PLACE_INSERT),
         *                 )
         *             .build();
         */
        interface UpdateDraftActionResponse {
            printJson(): string;
        }
        /**
         * A builder for UpdateDraftActionResponse objects.
         */
        interface UpdateDraftActionResponseBuilder {
            build(): UpdateDraftActionResponse;
            setSendStatus(sendStatus: SendStatus): UpdateDraftActionResponseBuilder;
            setUpdateDraftBccRecipientsAction(
                updateDraftBccRecipientsAction: UpdateDraftBccRecipientsAction,
            ): UpdateDraftActionResponseBuilder;
            setUpdateDraftBodyAction(updateDraftBodyAction: UpdateDraftBodyAction): UpdateDraftActionResponseBuilder;
            setUpdateDraftCcRecipientsAction(
                updateDraftCcRecipientsAction: UpdateDraftCcRecipientsAction,
            ): UpdateDraftActionResponseBuilder;
            setUpdateDraftSubjectAction(
                updateDraftSubjectAction: UpdateDraftSubjectAction,
            ): UpdateDraftActionResponseBuilder;
            setUpdateDraftToRecipientsAction(
                updateDraftToRecipientsAction: UpdateDraftToRecipientsAction,
            ): UpdateDraftActionResponseBuilder;
        }
        /**
         * Updates the Bcc recipients of an email draft.
         */
        interface UpdateDraftBccRecipientsAction {
            addUpdateBccRecipients(bccRecipientEmails: string[]): UpdateDraftBccRecipientsAction;
        }
        /**
         * Updates the email draft body.
         */
        interface UpdateDraftBodyAction {
            addUpdateContent(content: string, contentType: ContentType): UpdateDraftBodyAction;
            setUpdateType(updateType: UpdateDraftBodyType): UpdateDraftBodyAction;
        }
        /**
         * An enum value that specifies the type of an UpdateDraftBodyAction.
         */
        enum UpdateDraftBodyType {
            IN_PLACE_INSERT,
            INSERT_AT_START,
            INSERT_AT_END,
        }
        /**
         * Updates the Cc recipients of an email draft.
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
         * The Chat app previews a link in a message by adding or updating one or more cards. For
         * details, see Preview links in Google Chat messages.
         *
         *     const card = CardService.newCardBuilder()
         *         .setHeader(CardService.newCardHeader().setTitle("Unfurl Card!"))
         *         .addSection(CardService.newCardSection()
         *           .addWidget(CardService.newTextParagraph().setText("url"))
         *           .addWidget(CardService.newButtonSet()
         *             .addButton(CardService.newTextButton()
         *               .setText("Open URL!")
         *               .setOpenLink(CardService.newOpenLink().setUrl("https://www.google.com")))))
         *         .build();
         *
         *     const cardWithId = CardService.newCardWithId().setCardId("card_one").setCard(card);
         *
         *     const chatDataAction = AddOnsResponseService.newChatDataActionBuilder()
         *         .setUpdateInlinePreviewAction(AddOnsResponseService.newUpdateInlinePreviewAction()
         *         .addCardWithId(cardWithId)).build();
         */
        interface UpdateInlinePreviewAction {
            addCardWithId(cardWithId: Card_Service.CardWithId): UpdateInlinePreviewAction;
            addExpiration(ttl: Integer): UpdateInlinePreviewAction;
        }
        /**
         * The Chat app updates text or cards in a message. For details, see Send Google Chat
         * messages.
         *
         *     const card = CardService.newCardBuilder()
         *         .setHeader(CardService.newCardHeader().setTitle("Card Title"))
         *         .addSection(CardService.newCardSection()
         *           .addWidget(CardService.newTextParagraph().setText("Text paragraph")))
         *         .build();
         *
         *     const cardWithId = CardService.newCardWithId().setCardId("card_one").setCard(card);
         *
         *     const message = AddOnsResponseService.newChatMessage().addCardWithId(cardWithId);
         *
         *     const chatDataAction = AddOnsResponseService.newChatDataActionBuilder()
         *         .setUpdateChatMessageAction(AddOnsResponseService.newUpdateMessageAction()
         *         .setMessage(message))
         *         .build();
         */
        interface UpdateMessageAction {
            setMessage(message: ChatMessage): UpdateMessageAction;
        }
        /**
         * A builder for UpdateWidget objects. Developers can update a widget in the card by passing
         * a UpdateWidget to ModifyCard
         */
        interface UpdateWidget {
            addSuggestion(text: any, value: any, selected: boolean, startIconUri: any, bottomText: any): UpdateWidget;
        }
        /**
         * An enum that represents the severity of the validation error.
         */
        enum ValidationErrorSeverity {
            SEVERITY_UNSPECIFIED,
            CRITICAL,
            WARNING,
        }
        /**
         * A valueMetadata contains information about the potential values of a variable.
         *
         * Sample usage:
         *
         *     let allowedValue1 = "001";
         *     let allowedValue2 = "002";
         *
         *     const valueMetadata = AddOnsResponseService.newValueMetadata()
         *        .addEnumValue(allowedValue1);
         *        .addEnumValue(allowedValue2)
         *        .setDefaultValue(allowedValue1)
         *        .addCastableType(AddOnsResponseService.BasicDataType.STRING)
         *        .addCastableType(AddOnsResponseService.BasicDataType.INTEGER);
         */
        interface ValueMetadata {
            addCastableType(dataType: BasicDataType): ValueMetadata;
            addEnumValue(enumValue: string): ValueMetadata;
            setDefaultValue(defaultValue: string): ValueMetadata;
        }
        /**
         * Represents a variable data which can contain a collection of values in various types.
         *
         * Sample usage:
         *
         *     const variableData = AddOnsResponseService.newVariableData()
         *         .addBooleanValue(true)
         *         .addIntegerValue(123);
         */
        interface VariableData {
            addBooleanValue(value: boolean): VariableData;
            addEmailAddress(emailAddress: string): VariableData;
            addFloatValue(value: number): VariableData;
            addGoogleUser(googleUser: string): VariableData;
            addIntegerValue(value: Integer): VariableData;
            addResourceData(resourceData: ResourceData): VariableData;
            addResourceReference(resourceReference: string): VariableData;
            addStringValue(value: string): VariableData;
            addTimestampValue(value: TimeStamp): VariableData;
            addWorkflowTextFormat(workflowTextFormat: WorkflowTextFormat): VariableData;
        }
        /**
         * A WorkflowAction is a type of HostAppAction that is used to perform a specific action in
         * Google Workspace Studio. A WorkflowAction can be one of the following actions:
         *
         * - SaveWorkflowAction
         * - ReturnOutputVariablesAction
         * - ReturnElementErrorAction
         * - ResourceRetrievedAction
         * - WorkflowValidationErrorAction
         * - ResourceFieldsDefinitionRetrievedAction
         *
         * Sample usage:
         *
         *     const hostAppAction = AddOnsResponseService.newHostAppAction();
         *     hostAppAction.setWorkflowAction(AddOnsResponseService.newSaveWorkflowAction());
         */
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface WorkflowAction {
        }
        /**
         * A block of text with rich formatting options including styles, hyperlinks, and
         * interactive elements defined in TextFormatElement. A WorkflowTextFormat can contain one
         * or more TextFormatElements.
         *
         * Sample usage:
         *
         *     const workflowTextFormat = AddOnsResponseService.newWorkflowTextFormat()
         *       .addTextFormatElement(
         *         AddOnsResponseService.newTextFormatElement()
         *           .setText("example_text")
         *       );
         */
        interface WorkflowTextFormat {
            addTextFormatElement(textFormatElement: TextFormatElement): WorkflowTextFormat;
        }
        /**
         * This action indicates that the host app (Google Workspace Studio) should display a
         * validation error.
         *
         * Sample usage:
         *
         *     const hostAppAction = AddOnsResponseService.newHostAppAction()
         *        .setWorkflowAction(
         *          AddOnsResponseService.newWorkflowValidationErrorAction()
         *            .setSeverity(AddOnsResponseService.ValidationErrorSeverity.CRITICAL)
         *        );
         */
        interface WorkflowValidationErrorAction {
            setSeverity(severity: ValidationErrorSeverity): WorkflowValidationErrorAction;
        }
    }
}

declare var AddOnsResponseService: GoogleAppsScript.AddOns_Response_Service.AddOnsResponseService;
