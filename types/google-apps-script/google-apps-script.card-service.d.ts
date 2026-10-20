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
            addRequiredWidget(requiredWidget: string): Action;
            setAllWidgetsAreRequired(allWidgetsAreRequired: boolean): Action;
            setFunctionName(functionName: string): Action;
            setInteraction(interaction: Interaction): Action;
            setLoadIndicator(loadIndicator: LoadIndicator): Action;
            setParameters(parameters: { [key: string]: string }): Action;
            /** @deprecated DO NOT USE */ setMethodName(functionName: string): Action;
            setPersistValues(persistValues: boolean): Action;
        }

        /**
         * A class that represents the status for a request to either invoke or submit a dialog.
         *
         *     const actionStatus = CardService.newActionStatus()
         *                              .setStatusCode(CardService.Status.OK)
         *                              .setUserFacingMessage('Success');
         */
        interface ActionStatus {
            setStatusCode(statusCode: Status): ActionStatus;
            setUserFacingMessage(message: string): ActionStatus;
        }
        /**
         * A builder for CardWithId objects. This class is a unique identifier for a card in a
         * message when sending multiple cards.
         *
         *     const cardSection = CardService.newCardSection();
         *     cardSection.addWidget(
         *         CardService.newTextParagraph().setText('This is a text paragraph widget.'),
         *     );
         *
         *     const card = CardService.newCardBuilder()
         *                      .setHeader(CardService.newCardHeader().setTitle('Card title'))
         *                      .addSection(cardSection)
         *                      .build();
         *
         *     const cardWithId =
         *         CardService.newCardWithId().setCardId('card_id').setCard(card);
         */
        interface CardWithId {
            setCard(card: Card): CardWithId;
            setCardId(id: string): CardWithId;
        }
        /**
         * Carousel, also known as slider, rotates and displays a list of widgets in a slideshow
         * format, with buttons navigating to the previous or next widget.
         *
         *     const carousel =
         *         CardService.newCarousel()
         *             .addCarouselCard(CardService.newCarouselCard().addWidget(
         *                 CardService.newTextParagraph().setText('The first text paragraph in carousel')))
         *             .addCarouselCard(CardService.newCarouselCard().addWidget(
         *                 CardService.newTextParagraph().setText('The second text paragraph in carousel')))
         *             .addCarouselCard(CardService.newCarouselCard().addWidget(
         *                 CardService.newTextParagraph().setText('The third text paragraph in carousel')))
         */
        interface Carousel {
            addCarouselCard(card: CarouselCard): Carousel;
            addEventAction(eventAction: EventAction): Widget;
            setId(id: string): Widget;
            setVisibility(visibility: Visibility): Widget;
        }
        /**
         * A card that can be displayed as a carousel item.
         *
         *     const carouselCard = CardService.newCarouselCard()
         *         .addWidget(
         *             CardService.newTextParagraph().setText('a text paragraph in the carousel card'))
         *         .addFooterWidget(
         *             CardService.newTextParagraph().setText('a text paragraph in the carousel card footer'));
         */
        interface CarouselCard {
            addFooterWidget(widget: Widget): CarouselCard;
            addWidget(widget: Widget): CarouselCard;
        }
        /**
         * A class that represents the parameters that a Chat app can use to configure how its
         * response is posted.
         *
         *     const card = CardService.newCardBuilder()
         *                      .setHeader(CardService.newCardHeader().setTitle('Card title'))
         *                      .build();
         *     const dialog = CardService.newDialog().setBody(card);
         *
         *     const dialogAction = CardService.newDialogAction().setDialog(dialog);
         *
         *     const chatActionResponse = CardService.newChatActionResponse()
         *                                    .setResponseType(CardService.Type.DIALOG)
         *                                    .setDialogAction(dialogAction);
         */
        interface ChatActionResponse {
            setDialogAction(dialogAction: DialogAction): ChatActionResponse;
            setResponseType(responseType: ResponseType): ChatActionResponse;
            setUpdatedWidget(updatedWidget: UpdatedWidget): ChatActionResponse;
            setUrl(url: string): ChatActionResponse;
        }
        /**
         * For a SelectionInput widget that uses a multiselect menu, a data source from Google Chat.
         * The data source populates selection items for the multiselect menu. For example, a user
         * can select Google Chat spaces that they're a member of.
         *
         *     const chatSpaceDataSource =
         *         CardService.newChatSpaceDataSource().setDefaultToCurrentSpace(true);
         *
         *     const chatClientDataSource =
         *         CardService.newChatClientDataSource().setSpaceDataSource(
         *             chatSpaceDataSource);
         */
        interface ChatClientDataSource {
            setSpaceDataSource(spaceDataSource: ChatSpaceDataSource): ChatClientDataSource;
        }
        /**
         * The response object for a card message in Google Chat.
         *
         *     // Creates a card message in Chat.
         *     const cardHeader = CardService.newCardHeader()
         *                            .setTitle('Card Header Title')
         *                            .setSubtitle('Card Header Subtitle');
         *
         *     const card = CardService.newCardBuilder().setHeader(cardHeader).build();
         *
         *     const chatResponse =
         *         CardService.newChatResponseBuilder()
         *             .setText('Example text')
         *             .addCardsV2(
         *                 CardService.newCardWithId().setCardId('card_id').setCard(card))
         *             .build();
         *
         *     console.log(chatResponse.printJson());
         */
        interface ChatResponse {
            printJson(): string;
        }
        /**
         * A builder for ChatResponse objects.
         *
         *     const cardSection = CardService.newCardSection();
         *     cardSection.addWidget(
         *         CardService.newTextParagraph().setText('This is a text paragraph widget.'),
         *     );
         *
         *     const card = CardService.newCardBuilder()
         *                      .setName('Card name')
         *                      .setHeader(CardService.newCardHeader().setTitle('Card title'))
         *                      .addSection(cardSection)
         *                      .build();
         *
         *     const cardWithId =
         *         CardService.newCardWithId().setCardId('card_id').setCard(card);
         *
         *     const chatResponse = CardService.newChatResponseBuilder()
         *                              .addCardsV2(cardWithId)
         *                              .setText('Example text')
         *                              .build();
         */
        interface ChatResponseBuilder {
            addCardsV2(cardWithId: CardWithId): ChatResponseBuilder;
            build(): ChatResponse;
            setActionResponse(actionResponse: ChatActionResponse): ChatResponseBuilder;
            setText(text: string): ChatResponseBuilder;
        }
        /**
         * A data source that populates Google Chat spaces as selection items for a multiselect
         * menu. Only populates spaces that the user is a member of.
         *
         *     const chatSpaceDataSource =
         *         CardService.newChatSpaceDataSource().setDefaultToCurrentSpace(true);
         */
        interface ChatSpaceDataSource {
            setDefaultToCurrentSpace(defaultToCurrentSpace: boolean): ChatSpaceDataSource;
        }
        /**
         * A Chip with an icon and text label. You can deactivate the chip when needed.
         *
         *     const chip = CardService.newChip()
         *                      .setLabel('Open Link')
         *                      .setOpenLink(CardService.newOpenLink().setUrl(
         *                          'https://www.google.com'));
         */
        interface Chip {
            setAltText(altText: string): Chip;
            setAuthorizationAction(action: AuthorizationAction): Chip;
            setComposeAction(action: Action, composedEmailType: ComposedEmailType): Chip;
            setDisabled(disabled: boolean): Chip;
            setIcon(icon: IconImage): Chip;
            setLabel(label: string): Chip;
            setOnClickAction(action: Action): Chip;
            setOnClickOpenLinkAction(action: Action): Chip;
            setOpenLink(openLink: OpenLink): Chip;
        }
        /**
         * Holds a set of Chip objects that are displayed in a row, wrapping to the next line to
         * horizontal scrollable.
         *
         *     const chip = CardService.newChip();
         *     // Finish building the text chip...
         *
         *     const chipList = CardService.newChipList()
         *                          .setLayout(CardService.ChipListLayout.WRAPPED)
         *                          .addChip(chip);
         */
        interface ChipList {
            addChip(chip: Chip): ChipList;
            addEventAction(eventAction: EventAction): Widget;
            setId(id: string): Widget;
            setLayout(layout: ChipListLayout): ChipList;
            setVisibility(visibility: Visibility): Widget;
        }
        /**
         * An enum that specifies the layout for ChipList.
         *
         * WRAPPED is the default; chips wrap to the next line if there isn't enough horizontal
         * space. HORIZONTAL_SCROLLABLE chips scroll horizontally if they don't fit in the available
         * space.
         */
        enum ChipListLayout {
            WRAPPED,
            HORIZONTAL_SCROLLABLE,
        }
        /**
         * A customizable collapse and expand control.
         *
         *     const collapseButton =
         *         CardService.newTextButton()
         *             .setTextButtonStyle(CardService.TextButtonStyle.BORDERLESS)
         *             .setText('Collapse');
         *
         *     const expandButton =
         *         CardService.newImageButton()
         *             .setImageButtonStyle(CardService.ImageButtonStyle.FILLED);
         *
         *     const collapseControl =
         *         CardService.newCollapseControl()
         *             .setHorizontalAlign(CardService.HorizontalAlignment.END)
         *             .setExpandButton(expandButton)
         *             .setCollapseButton(collapseButton);
         */
        interface CollapseControl {
            setCollapseButton(button: Button): CollapseControl;
            setExpandButton(button: Button): CollapseControl;
            setHorizontalAlign(horizontalAlignment: HorizontalAlignment): CollapseControl;
        }
        /**
         * A column.
         *
         *     const columnWidget = CardService.newTextParagraph();
         *     const column =
         *         CardService.newColumn()
         *             .setHorizontalSizeStyle(
         *                 CardService.HorizontalSizeStyle.FILL_AVAILABLE_SPACE)
         *             .setHorizontalAlignment(CardService.HorizontalAlignment.CENTER)
         *             .setVerticalAlignment(CardService.VerticalAlignment.CENTER)
         *             .addWidget(columnWidget);
         */
        interface Column {
            addWidget(widget: Widget): Column;
            setHorizontalAlignment(horizontalAlignment: HorizontalAlignment): Column;
            setHorizontalSizeStyle(horizontalSizeStyle: HorizontalSizeStyle): Column;
            setVerticalAlignment(verticalAlignment: VerticalAlignment): Column;
        }
        /**
         * The Columns widget displays up to 2 columns in a card or dialog. You can add widgets to
         * each Column; the widgets appear in the order that they are specified. For an example in
         * Google Chat apps, see Columns.
         *
         * The height of each column is determined by the taller column. For example, if the first
         * column is taller than the second column, both columns have the height of the first
         * column. Because each column can contain a different number of widgets, you can't define
         * rows or align widgets between the columns.
         *
         * Columns are displayed side-by-side. You can customize the width of each column using the
         * HorizontalSizeStyle field. If the user's screen width is too narrow, the second column
         * wraps below the first:
         *
         * - On web, the second column wraps if the screen width is less than or equal to 480
         *   pixels.
         * - On iOS devices, the second column wraps if the screen width is less than or equal to
         *   300 pt.
         * - On Android devices, the second column wraps if the screen width is less than or equal
         *   to 320 dp.
         *
         *   Google Calendar event.
         *
         *     // Build a column that is aligned in the center and fills the space:
         *     const column =
         *         CardService.newColumn()
         *             .setHorizontalSizeStyle(
         *                 CardService.HorizontalSizeStyle.FILL_AVAILABLE_SPACE)
         *             .setHorizontalAlignment(CardService.HorizontalAlignment.CENTER)
         *             .setVerticalAlignment(CardService.VerticalAlignment.CENTER);
         *     const columns = CardService.newColumns().addColumn(column).setWrapStyle(
         *         CardService.WrapStyle.WRAP);
         */
        interface Columns {
            addColumn(column: Column): Columns;
            addEventAction(eventAction: EventAction): Widget;
            setId(id: string): Widget;
            setVisibility(visibility: Visibility): Widget;
            setWrapStyle(wrapStyle: WrapStyle): Columns;
        }
        /**
         * A data source shared by all Google Workspace applications.
         */
        enum CommonDataSource {
            UNKNOWN,
            USER,
            DRIVE,
        }
        /**
         * Defines actions that don't involve evaluations, such as updating widget visibility. For
         * example, can reveal or hide widgets based on the value of an input as part of CEL
         * validation.
         *
         *     const commonWidgetAction = CardService.newCommonWidgetAction()
         *     .setUpdateVisibilityAction(CardService.Visibility.VISIBLE);
         */
        interface CommonWidgetAction {
            setUpdateVisibilityAction(updateVisibilityAction: UpdateVisibilityAction): CommonWidgetAction;
        }
        /**
         * A condition used to run an event action as part of CEL expression validation.
         *
         *     const condition = CardService.newCondition().setActionRuleId("CEL_TEXTBOX_SUCCESS_RULE_ID")
         *     .setExpressionDataCondition(CardService.newExpressionDataCondition()
         *     .setConditionType(CardService.ExpressionDataConditionType.EXPRESSION_EVALUATION_SUCCESS));
         */
        interface Condition {
            setActionRuleId(actionRuleId: string): Condition;
            setExpressionDataCondition(expressionDataCondition: ExpressionDataCondition): Condition;
        }
        /**
         * A configuration object that helps configure the data sources for a widget.
         *
         * Sample usage:
         *
         *     const dataSourceConfig = CardService.newDataSourceConfig()
         *          .setPlatformDataSource(CardService.newPlatformDataSource()
         *          .setWorkflowDataSource(CardService.WorkflowDataSourceType.USER));
         */
        interface DataSourceConfig {
            setMaxCharactersToDisable(maxCharactersToDisable: Integer): DataSourceConfig;
            setMaxResults(maxResults: Integer): DataSourceConfig;
            setMinCharactersToTrigger(minCharactersToTrigger: Integer): DataSourceConfig;
            setPlatformDataSource(platformDataSource: PlatformDataSource): DataSourceConfig;
            setRemoteDataSource(action: Action): DataSourceConfig;
        }
        /**
         * For details, see Open interactive dialogs in the Google Chat documentation.
         *
         * A builder for Dialog objects.
         *
         *     const card = CardService.newCardBuilder()
         *                      .setHeader(CardService.newCardHeader().setTitle('Card title'))
         *                      .build();
         *
         *     // Sets the card of the dialog.
         *     const dialog = CardService.newDialog().setBody(card);
         */
        interface Dialog {
            setBody(card: Card): Dialog;
        }
        /**
         * A builder for DialogAction objects.
         *
         *     const card = CardService.newCardBuilder()
         *                      .setHeader(CardService.newCardHeader().setTitle('Card title'))
         *                      .build();
         *     const dialog = CardService.newDialog().setBody(card);
         *
         *     const dialogAction = CardService.newDialogAction().setDialog(dialog);
         */
        interface DialogAction {
            setActionStatus(actionStatus: ActionStatus): DialogAction;
            setDialog(dialog: Dialog): DialogAction;
        }
        /**
         * Holds a set of DriveItemType objects that are displayed in a row.
         *
         *     const driveDataSourceSpec =
         *         CardService.newDriveDataSourceSpec()
         *          .addItemType(CardService.DriveItemType.DOCUMENTS)
         *          .addItemType(CardService.DriveItemType.FORMS);
         */
        interface DriveDataSourceSpec {
            addItemType(driveItemType: DriveItemType): DriveDataSourceSpec;
        }
        /**
         * An enum define the file type for a drive item.
         */
        enum DriveItemType {
            DRIVE_ITEM_TYPE_UNSPECIFIED,
            DOCUMENTS,
            SPREADSHEETS,
            PRESENTATIONS,
            PDFS,
            FORMS,
            FOLDERS,
        }
        /**
         * An EventAction to run when a CEL expression validation condition is met.
         *
         *     const eventAction = CardService.newEventAction().setActionRuleId("CEL_TEXTBOX_EVALUATION_RULE_ID")
         *     .setExpressionDataAction(expressionDataAction)
         *     .addPostEventTrigger(trigger_success)
         *     .addPostEventTrigger(trigger_failure);
         */
        interface EventAction {
            addPostEventTrigger(trigger: Trigger): EventAction;
            setActionRuleId(actionRuleId: string): EventAction;
            setCommonWidgetAction(commonWidgetAction: CommonWidgetAction): EventAction;
            setExpressionDataAction(expressionDataAction: ExpressionDataAction): EventAction;
        }
        /**
         * The expression data that is used to evaluate an expression.
         *
         *     const expressionData = CardService.newExpressionData();
         */
        interface ExpressionData {
            addCondition(condition: Condition): ExpressionData;
            addEventAction(eventAction: EventAction): ExpressionData;
            setExpression(expression: string): ExpressionData;
            setId(id: string): ExpressionData;
        }
        /**
         * Actions for CEL expression validation . Use START_EXPRESSION_EVALUATION for CEL
         * validation.
         *
         *     const expressionDataAction = CardService.newExpressionDataAction()
         *     .setActionType(CardService.ExpressionDataActionType.START_EXPRESSION_EVALUATION);
         */
        interface ExpressionDataAction {
            setActionType(type: ExpressionDataActionType): ExpressionDataAction;
        }
        /**
         * An enum that represents the type of the expression data action.
         *
         *     const expressionDataAction = CardService.newExpressionDataAction()
         *     .setActionType(CardService.ExpressionDataActionType.START_EXPRESSION_EVALUATION);
         */
        enum ExpressionDataActionType {
            ACTION_TYPE_UNSPECIFIED,
            START_EXPRESSION_EVALUATION,
        }
        /**
         * Represents a CEL expression validation result.
         *
         *     const expressionDataCondition = CardService.newExpressionDataCondition()
         *     .setConditionType(CardService.ExpressionDataConditionType.EXPRESSION_EVALUATION_SUCCESS);
         */
        interface ExpressionDataCondition {
            setConditionType(type: ExpressionDataConditionType): ExpressionDataCondition;
        }
        /**
         * Represents whether the CEL expression evaluated successfully.
         *
         *     const expressionDataCondition = CardService.newExpressionDataCondition()
         *     .setConditionType(CardService.ExpressionDataConditionType.EXPRESSION_EVALUATION_SUCCESS);
         */
        enum ExpressionDataConditionType {
            CONDITION_TYPE_UNSPECIFIED,
            EXPRESSION_EVALUATION_SUCCESS,
            EXPRESSION_EVALUATION_FAILURE,
        }
        /**
         * An enum that sets how widgets fill the space of a column.
         */
        enum HorizontalSizeStyle {
            FILL_AVAILABLE_SPACE,
            FILL_MINIMUM_SPACE,
        }
        /**
         * For a SelectionInput widget that uses a multiselect menu, a data source from a Google
         * Workspace application. The data source populates selection items for the multiselect
         * menu.
         *
         *     const chatSpaceDataSource =
         *         CardService.newChatSpaceDataSource().setDefaultToCurrentSpace(true);
         *
         *     const chatClientDataSource =
         *         CardService.newChatClientDataSource().setSpaceDataSource(
         *             chatSpaceDataSource);
         *
         *     const hostAppDataSource =
         *         CardService.newHostAppDataSource().setChatDataSource(chatClientDataSource);
         */
        interface HostAppDataSource {
            setChatDataSource(chatClientDataSource: ChatClientDataSource): HostAppDataSource;
            setWorkflowDataSource(workflowDataSource: WorkflowDataSource): HostAppDataSource;
        }
        /**
         * An enum type that specifies what to do in response to an interaction with a user,
         * such as a user clicking a button in a card message.
         */
        enum Interaction {
            INTERACTION_UNSPECIFIED,
            OPEN_DIALOG,
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
            setOverflowMenu(menu: OverflowMenu): Button;
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
            addEventAction(eventAction: EventAction): Widget;
            setId(id: string): Widget;
            setVisibility(visibility: Visibility): Widget;
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
        enum DisplayStyle {
            PEEK,
            REPLACE,
        }
        /**
         * A builder for Card objects.
         */
        interface CardBuilder {
            addCardAction(cardAction: CardAction): CardBuilder;
            addExpressionData(expressionData: ExpressionData): CardBuilder;
            addSection(section: CardSection): CardBuilder;
            build(): Card;
            setHeader(cardHeader: CardHeader): CardBuilder;
            setName(name: string): CardBuilder;
            setFixedFooter(fixedFooter: FixedFooter): CardBuilder;
            setDisplayStyle(displayStyle: DisplayStyle): CardBuilder;
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
            setCollapseControl(collapseControl: CollapseControl): CardSection;
            setCollapsible(collapsible: boolean): CardSection;
            setHeader(header: string): CardSection;
            setId(id: string): CardSection;
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
            ChipListLayout: typeof ChipListLayout;
            CommonDataSource: typeof CommonDataSource;
            ComposedEmailType: typeof ComposedEmailType;
            ContentType: typeof ContentType;
            DisplayStyle: typeof DisplayStyle;
            DriveItemType: typeof DriveItemType;
            ExpressionDataActionType: typeof ExpressionDataActionType;
            ExpressionDataConditionType: typeof ExpressionDataConditionType;
            GridItemLayout: typeof GridItemLayout;
            HorizontalAlignment: typeof HorizontalAlignment;
            HorizontalSizeStyle: typeof HorizontalSizeStyle;
            Icon: typeof Icon;
            ImageCropType: typeof ImageCropType;
            ImageStyle: typeof ImageStyle;
            LoadIndicator: typeof LoadIndicator;
            OnClose: typeof OnClose;
            OpenAs: typeof OpenAs;
            ResponseType: typeof ResponseType;
            SelectionInputType: typeof SelectionInputType;
            Status: typeof Status;
            SwitchControlType: typeof SwitchControlType;
            TextButtonStyle: typeof TextButtonStyle;
            UpdateDraftBodyType: typeof UpdateDraftBodyType;
            InputType: typeof InputType;
            Interaction: typeof Interaction;
            VariableButtonSize: typeof VariableButtonSize;
            VerticalAlignment: typeof VerticalAlignment;
            Visibility: typeof Visibility;
            WorkflowDataSourceType: typeof WorkflowDataSourceType;
            WrapStyle: typeof WrapStyle;
            newAction(): Action;
            newActionResponseBuilder(): ActionResponseBuilder;
            newActionStatus(): ActionStatus;
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
            newCardWithId(): CardWithId;
            newCarousel(): Carousel;
            newCarouselCard(): CarouselCard;
            newChatActionResponse(): ChatActionResponse;
            newChatClientDataSource(): ChatClientDataSource;
            newChatResponseBuilder(): ChatResponseBuilder;
            newChatSpaceDataSource(): ChatSpaceDataSource;
            newChip(): Chip;
            newChipList(): ChipList;
            newCollapseControl(): CollapseControl;
            newColumn(): Column;
            newColumns(): Columns;
            newCommonWidgetAction(): CommonWidgetAction;
            newComposeActionResponseBuilder(): ComposeActionResponseBuilder;
            newCondition(): Condition;
            newDataSourceConfig(): DataSourceConfig;
            newDatePicker(): DatePicker;
            newDateTimePicker(): DateTimePicker;
            newDecoratedText(): DecoratedText;
            newDialog(): Dialog;
            newDialogAction(): DialogAction;
            newDivider(): Divider;
            newDriveDataSourceSpec(): DriveDataSourceSpec;
            newDriveItemsSelectedActionResponseBuilder(): DriveItemsSelectedActionResponseBuilder;
            /**
             * Creates a new EditorFileScopeActionResponseBuilder.
             */
            newEditorFileScopeActionResponseBuilder(): EditorFileScopeActionResponseBuilder;
            newEventAction(): EventAction;
            newExpressionData(): ExpressionData;
            newExpressionDataAction(): ExpressionDataAction;
            newExpressionDataCondition(): ExpressionDataCondition;
            newFixedFooter(): FixedFooter;
            newHostAppDataSource(): HostAppDataSource;
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
            newLinkPreview(): LinkPreview;
            newMaterialIcon(): MaterialIcon;
            newNavigation(): Navigation;
            newNotification(): Notification;
            newOpenLink(): OpenLink;
            newOverflowMenu(): OverflowMenu;
            newOverflowMenuItem(): OverflowMenuItem;
            newPlatformDataSource(): PlatformDataSource;
            newSelectionInput(): SelectionInput;
            newSuggestions(): Suggestions;
            newSuggestionsResponseBuilder(): SuggestionsResponseBuilder;
            newSwitch(): Switch;
            newTextButton(): TextButton;
            newTextInput(): TextInput;
            newTextParagraph(): TextParagraph;
            newTimePicker(): TimePicker;
            newTrigger(): Trigger;
            newUniversalActionResponseBuilder(): UniversalActionResponseBuilder;
            newUpdateDraftActionResponseBuilder(): UpdateDraftActionResponseBuilder;
            newUpdateDraftBccRecipientsAction(): UpdateDraftBccRecipientsAction;
            newUpdateDraftBodyAction(): UpdateDraftBodyAction;
            newUpdateDraftCcRecipientsAction(): UpdateDraftCcRecipientsAction;
            newUpdateDraftSubjectAction(): UpdateDraftSubjectAction;
            newUpdateDraftToRecipientsAction(): UpdateDraftToRecipientsAction;
            newUpdateVisibilityAction(): UpdateVisibilityAction;
            newUpdatedWidget(): UpdatedWidget;
            newValidation(): Validation;
            newWorkflowDataSource(): WorkflowDataSource;
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
        enum ComposedEmailType {
            REPLY_AS_DRAFT,
            STANDALONE_DRAFT,
        }
        /**
         * An enum value that specifies the content type of the content generated by a UpdateDraftActionResponse.
         */
        enum ContentType {
            TEXT,
            MUTABLE_HTML,
            IMMUTABLE_HTML,
        }
        /**
         * Predefined icons that can be used in various UI objects, such as ImageButton or KeyValue widgets.
         */
        enum Icon {
            NONE,
            AIRPLANE,
            BOOKMARK,
            BUS,
            CAR,
            CLOCK,
            CONFIRMATION_NUMBER_ICON,
            DOLLAR,
            DESCRIPTION,
            EMAIL,
            EVENT_PERFORMER,
            EVENT_SEAT,
            FLIGHT_ARRIVAL,
            FLIGHT_DEPARTURE,
            HOTEL,
            HOTEL_ROOM_TYPE,
            INVITE,
            MAP_PIN,
            MEMBERSHIP,
            MULTIPLE_PEOPLE,
            OFFER,
            PERSON,
            PHONE,
            RESTAURANT_ICON,
            SHOPPING_CART,
            STAR,
            STORE,
            TICKET,
            TRAIN,
            VIDEO_CAMERA,
            VIDEO_PLAY,
        }
        /**
         * A predefined icon, a material design icon, or an icon from a URL with a customizable crop style.
         *
         *     var icon = CardService.newIconImage().setAltText("A nice icon").setIconUrl("https://example.com/icon.png");
         */
        interface IconImage {
            setAltText(altText: string): IconImage;
            setIcon(icon: Icon): IconImage;
            setIconUrl(url: string): IconImage;
            setImageCropType(imageCropType: ImageCropType): IconImage;
            setMaterialIcon(icon: MaterialIcon): IconImage;
        }
        /**
         * A widget that shows a single image.
         *
         *     var image = CardService.newImage().setAltText("A nice image").setImageUrl("https://image.png");
         */
        interface Image {
            addEventAction(eventAction: EventAction): Widget;
            setAltText(altText: string): Image;
            setAuthorizationAction(action: AuthorizationAction): Image;
            setComposeAction(action: Action, composedEmailType: ComposedEmailType): Image;
            setId(id: string): Widget;
            setImageUrl(url: string): Image;
            setOnClickAction(action: Action): Image;
            setOnClickOpenLinkAction(action: Action): Image;
            setOpenLink(openLink: OpenLink): Image;
            setVisibility(visibility: Visibility): Widget;
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
            setMaterialIcon(icon: MaterialIcon): ImageButton;
            setOnClickAction(action: Action): ImageButton;
            setOnClickOpenLinkAction(action: Action): ImageButton;
            setOpenLink(openLink: OpenLink): ImageButton;
            setOverflowMenu(menu: OverflowMenu): ImageButton;
        }
        /**
         * An enum that defines an image cropping style.
         */
        enum ImageStyle {
            SQUARE,
            CIRCLE,
        }
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
            addEventAction(eventAction: EventAction): Widget;
            setAuthorizationAction(action: AuthorizationAction): KeyValue;
            setBottomLabel(text: string): KeyValue;
            setButton(button: Button): KeyValue;
            setComposeAction(action: Action, composedEmailType: ComposedEmailType): KeyValue;
            setContent(text: string): KeyValue;
            setIcon(icon: Icon): KeyValue;
            setIconAltText(altText: string): KeyValue;
            setIconUrl(url: string): KeyValue;
            setId(id: string): Widget;
            setMultiline(multiline: boolean): KeyValue;
            setOnClickAction(action: Action): KeyValue;
            setOnClickOpenLinkAction(action: Action): KeyValue;
            setOpenLink(openLink: OpenLink): KeyValue;
            setSwitch(switchToSet: Switch): KeyValue;
            setTopLabel(text: string): KeyValue;
            setVisibility(visibility: Visibility): Widget;
        }

        /**
         * Card action that displays a link preview card and smart chip in the host app.
         *
         * const decoratedText = CardService.newDecoratedText()
         *       .setTopLabel('Hello')
         *       .setText('Hi!');
         *
         * const cardSection = CardService.newCardSection()
         *       .addWidget(decoratedText);
         *
         * const card = CardService.newCardBuilder()
         *       .addSection(cardSection)
         *       .build();
         *
         * const linkPreview = CardService.newLinkPreview()
         *       .setPreviewCard(card)
         *       .setTitle('Smart chip title');
         */

        interface LinkPreview {
            printJson(): string;
            setLinkPreviewTitle(title: string): LinkPreview;
            setPreviewCard(previewCard: Card): LinkPreview;
            setTitle(title: string): LinkPreview;
        }
        /**
         * An enum type that specifies the type of loading or progress indicator to display while an Action is being processed.
         */
        enum LoadIndicator {
            SPINNER,
            NONE,
        }

        /**
         * An object that supports all Google Font Icons ({@link https://fonts.google.com/icons}).
         *
         * Available for Google Workspace add-ons and Google Chat apps.
         *
         * const materialIcon = CardService.newMaterialIcon()
         *     .setName('search')
         *     .setFill(true)
         *     .setWeight(400)
         *     .setGrade(0);
         */
        interface MaterialIcon {
            setFill(fill: boolean): MaterialIcon;
            setGrade(grade: Integer): MaterialIcon;
            setName(name: string): MaterialIcon;
            setWeight(weight: Integer): MaterialIcon;
        }

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
        enum OnClose {
            NOTHING,
            RELOAD,
            RELOAD_ADD_ON,
        }
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
        enum OpenAs {
            FULL_SIZE,
            OVERLAY,
        }
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
         * Holds a list of OverflowMenuItem objects that are displayed in a pop-up menu.
         *
         *     const overflowMenuItem = CardService.newOverflowMenuItem();
         *     // Finish building the overflow menu item...
         *
         *     const overflowMenu =
         *         CardService.newOverflowMenu().addMenuItem(overflowMenuItem);
         */
        interface OverflowMenu {
            addMenuItem(menuItem: OverflowMenuItem): OverflowMenu;
        }
        /**
         * An OverflowMenuItem with an icon and text label. You can deactivate the menu item when
         * needed.
         *
         *     const overflowMenuItem =
         *         CardService.newOverflowMenuItem()
         *             .setStartIcon(
         *                 CardService.newIconImage().setIconUrl(
         *                     'https://www.google.com/images/branding/googleg/1x/googleg_standard_color_64dp.png',
         *                     ),
         *                 )
         *             .setText('Open Link')
         *             .setOpenLink(
         *                 CardService.newOpenLink().setUrl('https://www.google.com'));
         */
        interface OverflowMenuItem {
            setAuthorizationAction(action: AuthorizationAction): OverflowMenuItem;
            setComposeAction(action: Action, composedEmailType: ComposedEmailType): OverflowMenuItem;
            setDisabled(disabled: boolean): OverflowMenuItem;
            setOnClickAction(action: Action): OverflowMenuItem;
            setOnClickOpenLinkAction(action: Action): OverflowMenuItem;
            setOpenLink(openLink: OpenLink): OverflowMenuItem;
            setStartIcon(icon: IconImage): OverflowMenuItem;
            setText(text: string): OverflowMenuItem;
        }
        /**
         * For a SelectionInput widget that uses a multiselect menu, a data source from Google
         * Workspace. Used to populate items in a multiselect menu.
         *
         *     const platformDataSource =
         *         CardService.newPlatformDataSource().setCommonDataSource(
         *             CardService.CommonDataSource.USER,
         *         );
         *
         *     const multiSelect = CardService.newSelectionInput()
         *                             .setType(CardService.SelectionInputType.MULTI_SELECT)
         *                             .setFieldName('contacts')
         *                             .setTitle('Selected contacts')
         *                             .setMultiSelectMaxSelectedItems(5)
         *                             .setMultiSelectMinQueryLength(1)
         *                             .setPlatformDataSource(platformDataSource);
         */
        interface PlatformDataSource {
            setCommonDataSource(commonDataSource: CommonDataSource): PlatformDataSource;
            setDriveDataSourceSpec(driveDataSourceSpec: DriveDataSourceSpec): PlatformDataSource;
            setHostAppDataSource(hostAppDataSource: HostAppDataSource): PlatformDataSource;
        }
        /**
         * An enum that represents the type of Chat app response.
         */
        enum ResponseType {
            TYPE_UNSPECIFIED,
            NEW_MESSAGE,
            UPDATE_MESSAGE,
            UPDATE_USER_MESSAGE_CARDS,
            REQUEST_CONFIG,
            DIALOG,
            UPDATE_WIDGET,
        }
        /**
         * An input field that allows choosing between a set of predefined options.
         *
         *  const checkboxGroup =
         *      CardService.newSelectionInput()
         *          .setType(CardService.SelectionInputType.CHECK_BOX)
         *          .setTitle('A group of checkboxes. Multiple selections are allowed.')
         *          .setFieldName('checkbox_field')
         *          .addItem('checkbox one title', 'checkbox_one_value', false)
         *          .addItem('checkbox two title', 'checkbox_two_value', true)
         *          .addItem('checkbox three title', 'checkbox_three_value', true)
         *          .setOnChangeAction(
         *              CardService.newAction().setFunctionName('handleCheckboxChange'),
         *          );
         *
         *  const radioGroup =
         *      CardService.newSelectionInput()
         *          .setType(CardService.SelectionInputType.RADIO_BUTTON)
         *          .setTitle(
         *              'A group of radio buttons. Only a single selection is allowed.')
         *          .setFieldName('checkbox_field')
         *          .addItem('radio button one title', 'radio_one_value', true)
         *          .addItem('radio button two title', 'radio_two_value', false)
         *          .addItem('radio button three title', 'radio_three_value', false);
         *
         *  const multiSelect =
         *      CardService.newSelectionInput()
         *          .setType(CardService.SelectionInputType.MULTI_SELECT)
         *          .setFieldName('multiselect')
         *          .setTitle('A multi select input example.')
         *          .addMultiSelectItem(
         *              'Contact 1',
         *              'contact-1',
         *              false,
         *              'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
         *              'Contact one description',
         *              )
         *          .addMultiSelectItem(
         *              'Contact 2',
         *              'contact-2',
         *              false,
         *              'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
         *              'Contact two description',
         *              )
         *          .addMultiSelectItem(
         *              'Contact 3',
         *              'contact-3',
         *              false,
         *              'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
         *              'Contact three description',
         *              )
         *          .addMultiSelectItem(
         *              'Contact 4',
         *              'contact-4',
         *              false,
         *              'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
         *              'Contact four description',
         *              )
         *          .addMultiSelectItem(
         *              'Contact 5',
         *              'contact-5',
         *              false,
         *              'https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png',
         *              'Contact five description',
         *              )
         *          .setMultiSelectMaxSelectedItems(3)
         *          .setMultiSelectMinQueryLength(1);
         */
        interface SelectionInput {
            addDataSourceConfig(dataSourceConfig: DataSourceConfig): SelectionInput;
            addEventAction(eventAction: EventAction): Widget;
            addItem(text: any, value: any, selected: boolean): SelectionInput;
            addMultiSelectItem(
                text: string,
                value: string,
                selected: boolean,
                startIconUri: string,
                bottomText: string,
            ): SelectionInput;
            setExternalDataSource(action: Action): SelectionInput;
            setFieldName(fieldName: string): SelectionInput;
            setId(id: string): Widget;
            setMultiSelectMaxSelectedItems(maxSelectedItems: Integer): SelectionInput;
            setMultiSelectMinQueryLength(queryLength: Integer): SelectionInput;
            setOnChangeAction(action: Action): SelectionInput;
            setPlatformDataSource(platformDataSource: PlatformDataSource): SelectionInput;
            setTitle(title: string): SelectionInput;
            setType(type: SelectionInputType): SelectionInput;
            setVisibility(visibility: Visibility): Widget;
        }
        /**
         * Type of selection input.
         */
        enum SelectionInputType {
            CHECK_BOX,
            RADIO_BUTTON,
            DROPDOWN,
            SWITCH,
            MULTI_SELECT,
            OVERFLOW_MENU,
        }
        /**
         * An enum that represents the status code.
         */
        enum Status {
            OK,
            CANCELLED,
            UNKNOWN,
            INVALID_ARGUMENT,
            DEADLINE_EXCEEDED,
            NOT_FOUND,
            ALREADY_EXISTS,
            PERMISSION_DENIED,
            UNAUTHENTICATED,
            RESOURCE_EXHAUSTED,
            FAILED_PRECONDITION,
            ABORTED,
            OUT_OF_RANGE,
            UNIMPLEMENTED,
            INTERNAL,
            UNAVAILABLE,
            DATA_LOSS,
        }
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
        enum SwitchControlType {
            SWITCH,
            CHECK_BOX,
        }
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
            setAltText(altText: string): TextButton;
            setAuthorizationAction(action: AuthorizationAction): TextButton;
            setBackgroundColor(backgroundColor: string): TextButton;
            setComposeAction(action: Action, composedEmailType: ComposedEmailType): TextButton;
            setDisabled(disabled: boolean): TextButton;
            setOnClickAction(action: Action): TextButton;
            setOnClickOpenLinkAction(action: Action): TextButton;
            setOpenLink(openLink: OpenLink): TextButton;
            setOverflowMenu(menu: OverflowMenu): TextButton;
            setText(text: string): TextButton;
            setTextButtonStyle(textButtonStyle: TextButtonStyle): TextButton;
        }
        /**
         * An enum that specifies the style for TextButton.
         *
         * OUTLINED is the default; it renders a simple text button with clear background.
         * FILLED buttons have a background color you can set with
         * TextButton.setBackgroundColor(backgroundColor).
         *
         * To call an enum, you call its parent class, name, and property.
         * For example, CardService.TextButtonStyle.OUTLINED.
         */
        enum TextButtonStyle {
            OUTLINED,
            /** @deprecated DO NOT USE */ TEXT,
            FILLED,
            FILLED_TONAL,
            BORDERLESS,
        }
        /**
         * A input field widget that accepts text input.
         *
         *     var textInput = CardService.newTextInput()
         *         .setFieldName("text_input_form_input_key")
         *         .setTitle("Text input title")
         *         .setHint("Text input hint");
         */
        interface TextInput {
            addEventAction(eventAction: EventAction): Widget;
            setFieldName(fieldName: string): TextInput;
            setHint(hint: string): TextInput;
            setHostAppDataSource(hostAppDataSource: HostAppDataSource): TextInput;
            setId(id: string): Widget;
            setMultiline(multiline: boolean): TextInput;
            setOnChangeAction(action: Action): TextInput;
            setSuggestions(suggestions: Suggestions): TextInput;
            setSuggestionsAction(suggestionsAction: Action): TextInput;
            setTitle(title: string): TextInput;
            setValidation(validation: Validation): TextInput;
            setValue(value: string): TextInput;
            setVisibility(visibility: Visibility): Widget;
        }
        /**
         * A widget that displays text and supports basic HTML formatting.
         *
         *     var textParagraph = CardService.newTextParagraph()
         *         .setText("This is a text paragraph widget. Multiple lines are allowed if needed.");
         */
        interface TextParagraph {
            addEventAction(eventAction: EventAction): Widget;
            setId(id: string): Widget;
            setText(text: string): TextParagraph;
            setVisibility(visibility: Visibility): Widget;
        }
        /**
         * A trigger that runs CEL expression validation widget event actions according to the
         * action rule ID.
         *
         *     // Define Triggers for each Condition respectively
         *     const trigger_success = CardService.newTrigger()
         *       .setActionRuleId("CEL_TEXTINPUT_SUCCESS_RULE_ID");
         *
         *     const trigger_failure = CardService.newTrigger()
         *       .setActionRuleId("CEL_TEXTINPUT_FAILURE_RULE_ID");
         *
         *     const eventAction = CardService.newEventAction()
         *       .setActionRuleId("CEL_TEXTINPUT_EVALUATION_RULE_ID")
         *       .setExpressionDataAction(expressionDataAction)
         *       .addPostEventTrigger(trigger_success)
         *       .addPostEventTrigger(trigger_failure);
         */
        interface Trigger {
            setActionRuleId(actionRuleId: string): Trigger;
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
            addEventAction(eventAction: EventAction): Widget;
            setFieldName(fieldName: string): TimePicker;
            setHours(hours: number): TimePicker;
            setId(id: string): Widget;
            setMinutes(hours: number): TimePicker;
            setOnChangeAction(action: Action): TimePicker;
            setTitle(title: string): TimePicker;
            setVisibility(visibility: Visibility): Widget;
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
         * Updates the visibility of a card widget to make it display or to hide it.
         *
         *     const updateVisibilityAction = CardService.newUpdateVisibilityAction()
         *     .setVisibility(CardService.Visibility.VISIBLE);
         */
        interface UpdateVisibilityAction {
            setVisibility(visibility: Visibility): UpdateVisibilityAction;
        }
        /**
         * The response of the updated widget. Used to provide autocomplete options for multiselect
         * menu in SelectionInput.
         *
         *     const updatedWidget = CardService.newUpdatedWidget()
         *                               .addItem(
         *                                   'item_one_title',
         *                                   'item_one_value',
         *                                   false,
         *                                   'item_one_uri',
         *                                   'item_one_bottom_text',
         *                                   )
         *                               .addItem(
         *                                   'item_two_title',
         *                                   'item_two_value',
         *                                   false,
         *                                   'item_two_uri',
         *                                   'item_two_bottom_text',
         *                               );
         */
        interface UpdatedWidget {
            addItem(text: any, value: any, selected: boolean, startIconUri: any, bottomText: any): UpdatedWidget;
        }
        /**
         * An object that defines the validation rule for the widget that it is attached to.
         *
         * const validation = CardService.newValidation()
         *     .setCharacterLimit('10')
         *     .setInputType(CardService.InputType.TEXT);
         */
        interface Validation {
            setCharacterLimit(characterLimit: Integer): Validation;
            setInputType(inputType: InputType): Validation;
        }

        /**
         * An enum that defines the input type of the widget.
         */
        enum InputType {
            TEXT,
            INTEGER,
            FLOAT,
            EMAIL,
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
            addEventAction(eventAction: EventAction): Widget;
            setFieldName(fieldName: string): DatePicker;
            setId(id: string): Widget;
            setOnChangeAction(action: Action): DatePicker;
            setTitle(title: string): DatePicker;
            setValueInMsSinceEpoch(valueMsEpoch: number): DatePicker;
            setValueInMsSinceEpoch(valueMsEpoch: string): DatePicker;
            setVisibility(visibility: Visibility): Widget;
        }

        /**
         * An input field that allows inputing a date.
         */
        interface DateTimePicker {
            addEventAction(eventAction: EventAction): Widget;
            setFieldName(fieldName: string): DateTimePicker;
            setHostAppDataSource(hostAppDataSource: HostAppDataSource): DateTimePicker;
            setId(id: string): Widget;
            setOnChangeAction(action: Action): DateTimePicker;
            setTimeZoneOffsetInMins(timeZoneOffsetMins: Integer): DateTimePicker;
            setTitle(title: string): DateTimePicker;
            setValueInMsSinceEpoch(valueMsEpoch: number): DateTimePicker;
            setValueInMsSinceEpoch(valueMsEpoch: string): DateTimePicker;
            setVisibility(visibility: Visibility): Widget;
        }

        /**
         * A widget that displays text with optional decorations. Possible keys include an icon, a label
         * above and a label below. Setting the text content and one of the keys is required using setText(text)
         * and one of setIcon(icon), setIconUrl(url), setTopLabel(text), or setBottomLabel(text).
         * This class is intended to replace KeyValue.
         */
        interface DecoratedText {
            addEventAction(eventAction: EventAction): Widget;
            setAuthorizationAction(action: AuthorizationAction): DecoratedText;
            setBottomLabel(text: string): DecoratedText;
            setButton(button: Button): DecoratedText;
            setComposeAction(action: Action, composedEmailType: ComposedEmailType): DecoratedText;
            setEndIcon(endIcon: IconImage): DecoratedText;
            setIcon(icon: Icon): DecoratedText;
            setIconAltText(altText: string): DecoratedText;
            setIconUrl(url: string): DecoratedText;
            setId(id: string): Widget;
            setOnClickAction(action: Action): DecoratedText;
            setOnClickOpenLinkAction(action: Action): DecoratedText;
            setOpenLink(openLink: OpenLink): DecoratedText;
            setStartIcon(startIcon: IconImage): DecoratedText;
            setSwitchControl(switchToSet: Switch): DecoratedText;
            setText(text: string): DecoratedText;
            setTopLabel(text: string): DecoratedText;
            setVisibility(visibility: Visibility): Widget;
            setWrapText(wrapText: boolean): DecoratedText;
        }

        /**
         * A horizontal divider.
         */
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface Divider {
            addEventAction(eventAction: EventAction): Widget;
            setId(id: string): Widget;
            setVisibility(visibility: Visibility): Widget;
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
            addEventAction(eventAction: EventAction): Widget;
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
            setId(id: string): Widget;
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
            setVisibility(visibility: Visibility): Widget;
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
        enum UpdateDraftBodyType {
            IN_PLACE_INSERT,
        }
        /**
         * An enum that represents the size of the variable picker button.
         */
        enum VariableButtonSize {
            UNSPECIFIED,
            COMPACT,
            FULL_SIZE,
        }
        /**
         * An enum that sets the vertical alignment of widgets in a column.
         */
        enum VerticalAlignment {
            CENTER,
            TOP,
            BOTTOM,
        }
        /**
         * An enum that represents the visibility state of the widgets.
         *
         * Visibility.VISIBLE means that the widget is being displayed and is visible.
         *
         * Visibility.HIDDEN means that the widget is not displayed and is invisible.
         *
         * To call an enum, call its parent class, name, and property. For example,
         * CardService.Visibility.VISIBLE.
         */
        enum Visibility {
            VISIBLE,
            HIDDEN,
            VISIBILITY_UNSPECIFIED,
        }
        /**
         * Base class for all widgets that can be added to a Card.
         */
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface Widget {
            addEventAction(eventAction: EventAction): Widget;
            setId(id: string): Widget;
            setVisibility(visibility: Visibility): Widget;
        }
        /**
         * For a SelectionInput,DateTimePicker\` or TextInput widget, a data source used in Google
         * Workspace Studio. The data source populates available options for a widget.
         *
         *     const workflowDataSource = CardService.newWorkflowDataSource().setIncludeVariables(true)
         *     .setType(CardService.WorkflowDataSourceType.USER);
         */
        interface WorkflowDataSource {
            setIncludeVariables(includeVariables: boolean): WorkflowDataSource;
            setType(type: WorkflowDataSourceType): WorkflowDataSource;
            setVariableButtonLabel(variableButtonLabel: string): WorkflowDataSource;
            setVariableButtonSize(variableButtonSize: VariableButtonSize): WorkflowDataSource;
        }
        /**
         * An enum that represents the type of the workflow data source.
         *
         *     const workflowDataSource = CardService.newWorkflowDataSource().setIncludeVariables(true)
         *     .setType(CardService.WorkflowDataSourceType.USER);
         */
        enum WorkflowDataSourceType {
            UNKNOWN,
            USER,
            SPACE,
            USER_WITH_FREE_FORM,
        }
        /**
         * An enum that sets the wrapping style for content within a column.
         */
        enum WrapStyle {
            NOWRAP,
            WRAP,
        }
    }
}

declare var CardService: GoogleAppsScript.Card_Service.CardService;
