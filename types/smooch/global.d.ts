interface InitOptions {
    /**
     * Your integration id
     */
    integrationId: string;
    /**
     * User's external id, which can be passed in init() as an alternative to login()
     */
    externalId?: string;
    /**
     * User's authentication token, which can be passed in init() as an alternative to login()
     */
    jwt?: string;
    /**
     * An auth code for linking to an existing conversation
     */
    authCode?: string;
    /**
     * Locale used for date formatting using the <language>-<COUNTRY> format. Language codes can be found [here](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) and country codes
     * [here](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
     * Note 1: The country part is optional, and if a country is either not recognized or supported, it will fallback to using the generic language. If the language isn't supported, it will
     * fallback to en-US.
     * Note 2: this is only used for date formatting and doesn't provide built-in translations for Web Messenger. Refer to the
     * [documentation](https://docs.smooch.io/guide/web-messenger/#strings-customization) for how to handle translations.
     * @default 'en-US'
     */
    locale?: string;
    /**
     * Enables the sound notification for new messages
     * @default true
     */
    soundNotificationEnabled?: boolean;
    /**
     * Enables the image upload feature.
     * @deprecated use menuItems.imageUpload; if this option is false, it will disable menuItems.imageUpload and menuItems.fileUpload
     * @default true
     */
    imageUploadEnabled?: boolean;
    /**
     * When enabled, the introduction pane will be pinned at the top of the conversation instead of scrolling with it.
     * @default false
     */
    fixedHeader?: boolean;
    /**
     * Tells the widget it will be embedded.
     * @default false
     */
    embedded?: boolean;
    /**
     * Choose how the messenger will appear on your website.
     * @default 'button'
     */
    displayStyle?: 'button' | 'tab';
    /**
     * When the displayStyle is button, you have the option of selecting your own button icon. The image must be at least 200 x 200 pixels and must be in either JPG, PNG, or GIF format.
     */
    buttonIconUrl?: string;
    /**
     * When the displayStyle is button, you have the option of specifying the button width.
     * @default '58px'
     */
    buttonWidth?: string;
    /**
     * When the displayStyle is button, you have the option of specifying the button height.
     * @default '58px'
     */
    buttonHeight?: string;
    /**
     * A custom business name.
     */
    businessName?: string;
    /**
     * A custom business icon url. The image must be at least 200 x 200 pixels and must be in either JPG, PNG, or GIF format.
     */
    businessIconUrl?: string;
    /**
     * A background image url for the conversation. Image will be tiled to fit the window.
     */
    backgroundImageUrl?: string;
    /**
     * Array of integration IDs. When set, only integrations from this list will be displayed. If an empty array is used, no integrations will be displayed. Note: Listing an integration in the
     * array doesn't guarantee that it will be displayed in the Web Messenger.
     */
    integrationOrder?: string[];
    /**
     * Colors used in the Web Messenger UI.
     */
    customColors?: CustomColors;
    /**
     * Strings used in the Web Messenger UI. You can use these to either customize the text or translate it. Note: Some strings include variables (surrounded by {}) which must remain in your
     * customized text.
     */
    customText?: CustomText;
    /**
     * Choose menu items.
     */
    menuItems?: MenuItems;
    /**
     * Enables displaying a prompt to new users after their first message to suggest linking their chat instance with their other 3rd-party apps.
     * @default true
     */
    notificationChannelPromptEnabled?: boolean;
    /**
     * Choose the storage type to use for storing user identity in the browser. Must be either localStorage or sessionStorage.
     * @default 'localStorage'
     */
    browserStorage?: 'localStorage' | 'sessionStorage';
    /**
     * Sets a delegate on the conversation.
     */
    delegate?: Delegate;
    /**
     * Enables automatically capturing a user's name and email via a form before the start of a conversation. Disables the chat input until the form has been submitted.
     */
    prechatCapture?: PrechatCapture;
    /**
     * Allows users to view their list of conversations.
     * @default true
     */
    canUserSeeConversationList?: boolean;
}

interface CustomColors {
    /**
     * This color will be used in the messenger header and the button or tab in idle state. Must be a 3 or 6-character hexadecimal color.
     * @default '65758e'
     */
    brandColor?: string;
    /**
     * This color will be used for customer messages, quick replies and actions in the footer. Must be a 3 or 6-character hexadecimal color.
     * @default '0099ff'
     */
    conversationColor?: string;
    /**
     * This color will be used for call-to-actions inside your messages. Must be a 3 or 6-character hexadecimal color.
     * @default '0099ff'
     */
    actionColor?: string;
}

interface CustomText {
    /**
     * @default 'Payment Completed'
     */
    actionPaymentCompleted?: string;
    /**
     * @default 'An error occurred while processing the card. <br> Please try again or use a different card.'
     */
    actionPaymentError?: string;
    /**
     * @default 'An error occurred while processing your action. Please try again.'
     */
    actionPostbackError?: string;
    /**
     * @default 'Message not delivered. Click to retry.'
     */
    clickToRetry?: string;
    /**
     * @default 'Form not submitted. Click anywhere on the form to retry.'
     */
    clickToRetryForm?: string;
    /**
     * @default 'Sync your conversation and continue messaging us through your favorite app.'
     */
    connectNotificationText?: string;
    /**
     * @default 'Be notified when you get a reply.'
     */
    connectNotificationSingleText?: string;
    /**
     * @default 'My conversations'
     */
    conversationListHeaderText?: string;
    /**
     * @default 'Just now'
     */
    conversationListRelativeTimeJustNow?: string;
    /**
     * @default '1 minute ago'
     */
    conversationListRelativeTimeMinute?: string;
    /**
     * @default '{value} minutes ago'
     */
    conversationListRelativeTimeMinutes?: string;
    /**
     * @default '1 hour ago'
     */
    conversationListRelativeTimeHour?: string;
    /**
     * @default '{value} hours ago'
     */
    conversationListRelativeTimeHours?: string;
    /**
     * @default 'Yesterday'
     */
    conversationListRelativeTimeYesterday?: string;
    /**
     * @default 'MM/DD/YY'
     */
    conversationListTimestampFormat?: string;
    /**
     * @default 'Someone'
     */
    conversationListPreviewAnonymousText?: string;
    /**
     * @default '{user} sent a message'
     */
    conversationListPreviewCarouselText?: string;
    /**
     * @default '{user} sent a file'
     */
    conversationListPreviewFileText?: string;
    /**
     * @default '{user} sent a form'
     */
    conversationListPreviewFormText?: string;
    /**
     * @default '{user} filled a form'
     */
    conversationListPreviewFormResponseText?: string;
    /**
     * @default '{user} sent an image'
     */
    conversationListPreviewImageText?: string;
    /**
     * @default '{user} sent a location request'
     */
    conversationListPreviewLocationRequestText?: string;
    /**
     * @default 'You'
     */
    conversationListPreviewUserText?: string;
    /**
     * @default 'MMMM D YYYY, h:mm A'
     */
    conversationTimestampHeaderFormat?: string;
    /**
     * @default 'Offline. You will not receive messages.'
     */
    couldNotConnect?: string;
    /**
     * @default 'Reconnecting...'
     */
    couldNotConnectRetry?: string;
    /**
     * @default 'You're back online!'
     */
    couldNotConnectRetrySuccess?: string;
    /**
     * @default 'Couldn’t load conversations.'
     */
    couldNotLoadConversations?: string;
    /**
     * @default 'Change my email'
     */
    emailChangeAddress?: string;
    /**
     * @default 'To be notified by email when you get a reply, enter your email address.'
     */
    emailDescription?: string;
    /**
     * @default 'Email'
     */
    emailFieldLabel?: string;
    /**
     * @default 'Your email address'
     */
    emailFieldPlaceholder?: string;
    /**
     * @default 'Submit'
     */
    emailFormButton?: string;
    /**
     * @default 'Please submit a valid email address.'
     */
    emailLinkingErrorMessage?: string;
    /**
     * @default 'Load more'
     */
    fetchHistory?: string;
    /**
     * @default 'Retrieving history...'
     */
    fetchingHistory?: string;
    /**
     * @default 'Max file size limit exceeded ({size})'
     */
    fileTooLargeError?: string;
    /**
     * @default 'Unsupported file type.'
     */
    fileTypeError?: string;
    /**
     * @default 'Email is invalid'
     */
    formErrorInvalidEmail?: string;
    /**
     * @default 'Must contain no more than ({characters}) characters'
     */
    formErrorNoLongerThan?: string;
    /**
     * @default 'Must contain at least ({characters}) characters'
     */
    formErrorNoShorterThan?: string;
    /**
     * @default 'This doesn't look quite right'
     */
    formErrorUnknown?: string;
    /**
     * @default 'Choose one...'
     */
    formFieldSelectPlaceholderFallback?: string;
    /**
     * @default "To talk to us using email just send a message to our email address and we'll reply shortly:"
     */
    frontendEmailChannelDescription?: string;
    /**
     * @default 'How can we help?'
     */
    headerText?: string;
    /**
     * @default 'Click to reload image.'
     */
    imageClickToReload?: string;
    /**
     * @default 'Click to view {size} image.'
     */
    imageClickToView?: string;
    /**
     * @default 'Preview not available.'
     */
    imagePreviewNotAvailable?: string;
    /**
     * @default 'Type a message...'
     */
    inputPlaceholder?: string;
    /**
     * @default 'Complete the form above...'
     */
    inputPlaceholderBlocked?: string;
    /**
     * @default 'Message us below or from your favorite app.'
     */
    introAppText?: string;
    /**
     * @default 'To talk to us using LINE, scan this QR code using the LINE app and send us a message.'
     */
    lineChannelDescription?: string;
    /**
     * @default 'An error occurred when attempting to generate a link for this channel. Please try again.'
     */
    linkError?: string;
    /**
     * @default 'Sync your conversation'
     */
    linkChannelPageHeader?: string;
    /**
     * @default 'Your browser does not support location services or it’s been disabled. Please type your location instead.'
     */
    locationNotSupported?: string;
    /**
     * @default 'This website cannot access your location. Please type your location instead.'
     */
    locationSecurityRestriction?: string;
    /**
     * @default 'Could not send location'
     */
    locationSendingFailed?: string;
    /**
     * @default 'This website cannot access your location. Allow access in your settings or type your location instead.'
     */
    locationServicesDenied?: string;
    /**
     * @default 'An error occured while sending your message. Please try again.'
     */
    messageError?: string;
    /**
     * @default '({count}) New messages'
     */
    messageIndicatorTitlePlural?: string;
    /**
     * @default '({count}) New message'
     */
    messageIndicatorTitleSingular?: string;
    /**
     * @default '{value}d ago'
     */
    messageRelativeTimeDay?: string;
    /**
     * @default '{value}h ago'
     */
    messageRelativeTimeHour?: string;
    /**
     * @default 'Just now'
     */
    messageRelativeTimeJustNow?: string;
    /**
     * @default '{value}m ago'
     */
    messageRelativeTimeMinute?: string;
    /**
     * @default 'h:mm A'
     */
    messageTimestampFormat?: string;
    /**
     * @default 'Delivered'
     */
    messageDelivered?: string;
    /**
     * @default 'Seen'
     */
    messageSeen?: string;
    /**
     * @default 'Sending...'
     */
    messageSending?: string;
    /**
     * @default 'Max message size limit exceeded ({size}).'
     */
    messageTooLongError?: string;
    /**
     * @default 'Connect your Facebook Messenger account to be notified when you get a reply and continue the conversation on Facebook Messenger.'
     */
    messengerChannelDescription?: string;
    /**
     * @default 'New Conversation'
     */
    newConversationButtonText?: string;
    /**
     * @default 'Sync this conversation by connecting to your favorite messaging app to continue the conversation your way.'
     */
    notificationSettingsChannelsDescription?: string;
    /**
     * @default 'Other Channels'
     */
    notificationSettingsChannelsTitle?: string;
    /**
     * @default 'Connected'
     */
    notificationSettingsConnected?: string;
    /**
     * @default 'Connected as {username}'
     */
    notificationSettingsConnectedAs?: string;
    /**
     * Text for the initial greeting message.
     * @default "Hi there 👋\nTo start off, we'd like to know a little bit more about you:"
     */
    prechatCaptureGreetingText?: string;
    /**
     * Label displayed for the default form's first field.
     * @default 'Your name'
     */
    prechatCaptureNameLabel?: string;
    /**
     * Placeholder for the default form's first field.
     * @default 'Type your name...'
     */
    prechatCaptureNamePlaceholder?: string;
    /**
     * Label displayed for the default form's second field.
     * @default 'Email'
     */
    prechatCaptureEmailLabel?: string;
    /**
     * Placeholder for the default form's second field.
     * @default 'name@company.com'
     */
    prechatCaptureEmailPlaceholder?: string;
    /**
     * Text for the confirmation message sent when the form is completed.
     * @default 'Thanks for that! What can we help you with?'
     */
    prechatCaptureConfirmationText?: string;
    /**
     * Text for the notification message when a user has linked their email address.
     * @default "You'll be notified here and by email at {email} once we reply."
     */
    prechatCaptureMailgunLinkingConfirmation?: string;
    /**
     * @default 'Send'
     */
    sendButtonText?: string;
    /**
     * @default 'Settings'
     */
    settingsHeaderText?: string;
    /**
     * @default 'Location'
     */
    shareLocation?: string;
    /**
     * @default 'We were unable to communicate with this number. Try again or use a different one.'
     */
    smsBadRequestError?: string;
    /**
     * @default 'Cancel'
     */
    smsCancel?: string;
    /**
     * @default 'Change my number'
     */
    smsChangeNumber?: string;
    /**
     * @default 'Connect your SMS number to be notified when you get a reply and continue the conversation over SMS.'
     */
    smsChannelDescription?: string;
    /**
     * @default 'Check your messages at {number} to confirm your phone number.'
     */
    smsChannelPendingDescription?: string;
    /**
     * @default 'Send'
     */
    smsContinue?: string;
    /**
     * @default 'Please submit a valid phone number.'
     */
    smsInvalidNumberError?: string;
    /**
     * @default 'Link to {appUserNumber} was cancelled.'
     */
    smsLinkCancelled?: string;
    /**
     * @default 'Pending'
     */
    smsLinkPending?: string;
    /**
     * @default 'There was an error sending a message to your number.'
     */
    smsPingChannelError?: string;
    /**
     * @default 'Send me a text'
     */
    smsSendText?: string;
    /**
     * @default 'Start Texting'
     */
    smsStartTexting?: string;
    /**
     * @default 'A connection for that number was requested recently. Please try again in {minutes} minutes.'
     */
    smsTooManyRequestsError?: string;
    /**
     * @default 'A connection for that number was requested recently. Please try again in 1 minute.'
     */
    smsTooManyRequestsOneMinuteError?: string;
    /**
     * @default 'Something went wrong. Please try again.'
     */
    smsUnhandledError?: string;
    /**
     * @default 'Sync conversation'
     */
    syncConversation?: string;
    /**
     * @default 'Message not delivered. Tap to retry.'
     */
    tapToRetry?: string;
    /**
     * @default 'Form not submitted. Tap anywhere on the form to retry.'
     */
    tapToRetryForm?: string;
    /**
     * @default 'Connect your Telegram account to be notified when you get a reply and continue the conversation on Telegram'
     */
    telegramChannelDescription?: string;
    /**
     * @default 'Unsupported message type.'
     */
    unsupportedMessageType?: string;
    /**
     * @default 'Unsupported action type.'
     */
    unsupportedActionType?: string;
    /**
     * @default 'File'
     */
    uploadDocument?: string;
    /**
     * @default 'Invalid file.'
     */
    uploadInvalidError?: string;
    /**
     * @default 'Image'
     */
    uploadPhoto?: string;
    /**
     * @default 'A virus was detected in your file and it has been rejected'
     */
    uploadVirusError?: string;
    /**
     * @default 'Connect your Viber account to be notified when you get a reply and continue the conversation on Viber. To get started, scan the QR code using the Viber app.'
     */
    viberChannelDescription?: string;
    /**
     * @default 'Connect your Viber account to be notified when you get a reply and continue the conversation on Viber. To get started, install the Viber app and tap Connect.'
     */
    viberChannelDescriptionMobile?: string;
    /**
     * @default 'An error occurred while fetching your Viber QR code. Please try again.'
     */
    viberQRCodeError?: string;
    /**
     * @default 'Connect your WeChat account to be notified when you get a reply and continue the conversation on WeChat. To get started, scan this QR code using the WeChat app.'
     */
    wechatChannelDescription?: string;
    /**
     * @default "Connect your WeChat account to be notified when you get a reply and continue the conversation on WeChat. To get started, save this QR code image and upload it
     * <a href=\'weixin://dl/scan\'>QR code scanner</a>."
     */
    wechatChannelDescriptionMobile?: string;
    /**
     * @default 'An error occurred while fetching your WeChat QR code. Please try again.'
     */
    wechatQRCodeError?: string;
    /**
     * @default 'Sync your account to WhatsApp by scanning the QR code or clicking the link below.\nThen, send the pre-populated message to validate the sync request. (Your code: {{code}}).'
     */
    whatsappChannelDescriptionDesktop?: string;
    /**
     * @default 'Sync your account to WhatsApp by clicking the link below.\nThen, send the pre-populated message to validate the sync request. (Your code: {{code}}).'
     */
    whatsappChannelDescriptionMobile?: string;
    /**
     * @default 'An error occurred while fetching your WhatsApp linking information. Please try again.'
     */
    whatsappLinkingError?: string;
}

interface MenuItems {
    /**
     * Enables the image upload menu item.
     * @default true
     */
    imageUpload?: boolean;
    /**
     * Enables the file upload menu item.
     * @default true
     */
    fileUpload?: boolean;
    /**
     * Enables the share location menu item.
     * @default true
     */
    shareLocation?: boolean;
}

interface PrechatCapture {
    /**
     * Sets the URL of the avatar to use for the automatic reply to the prechat capture messages.
     */
    avatarUrl?: string;
    /**
     * Enables the prechat capture experience.
     * @default false
     */
    enabled?: boolean;
    /**
     * Automatically links the user's email to the app's Mailgun integration if it exists. If the property fields is defined, the first field of type email will be used.
     * @default true
     */
    enableEmailLinking?: boolean;
    /**
     * Overrides the default Prechat Capture fields to define a custom form.
     */
    fields?: PrechatCaptureField[];
}

interface PrechatCaptureField {
    type: 'text' | 'select' | 'email';
    name: string;
    label: string;
    placeholder: string;
    options?: PrechatCaptureFieldOptions[];
}

interface PrechatCaptureFieldOptions {
    name: string;
    label: string;
}

interface User {
    id: string;
    externalId: string;
    signedUpAt: string;
    hasPaymendInfo: boolean;
    givenName: string;
    surname: string;
    email: string;
    avatarUrl: string;
    metadata: Metadata;
    properties: unknown;
}

interface ConversationParticipant {
    id: string;
    userId: string;
    unreadCount: number;
    lastRead: number;
}

type Metadata = Record<string, string | number | boolean>;

type ContentType = 'text'
    | 'carousel'
    | 'file'
    | 'form'
    | 'formResponse'
    | 'image'
    | 'list'
    | 'location'
    | 'template';

interface Message {
    role: 'user' | 'business';
    userId: string;
    displayName: string;
    id: string;
    type: ContentType;
    received: number;
    text: string;
    source: MessageSource;
}

interface SimpleMessage {
    type: string;
    text: string;
}

interface MessageSource {
    type: 'web' | 'slack';
    id: string;
    integrationId: string;
}

interface Conversation {
    id: string;
    lastUpdatedAt: number;
    businessLastRead: number;
    description: string;
    displayName: string;
    iconUrl: string;
    type: 'sdkGroup' | string;
    participants: ConversationParticipant[];
    metadata: Metadata;
    messages: Message[];
}

interface Status {
    status: 'resolved' | 'pending' | string;
}

interface ConversationData {
    conversation: Conversation;
}

interface ConversationReadEventPayload {
    // If the conversation was read by the business, the userId property will not exist
    userId: string;
    lastRead: number;
    role: string;
}

interface DebugLog {
    timestamp: number; // (Float) Date.now() when it was emitted
    message: string;
    data: any;
}

/**
 * Smooch allows you to set a delegate to receive callbacks when important changes happen in the conversation.
 *
 * To set a delegate, pass the `delegate` parameter in to [init options](#Smooch::init), or use the [setDelegate](#Smooch::setDelegate) method. The `delegate` object may optionally contain
 * `beforeDisplay`, `beforeSend`, `beforePostbackSend` and `onInvalidAuth` delegate functions.
 * Passing `delegate` as part of `init` options is the preferred method. The `setDelegate` method can be used to change or remove delegate behaviors after a conversation has been initialized.
 *
 * A `data` object is passed down with all the delegate events except `onInvalidAuth`. This is a read-only object containing a truncated version of the conversation associated with the event.
 *
 * `beforeSend` delegate will apply to the `formResponse` message sent when a [Prechat Capture](https://docs.smooch.io/guide/web-messenger/#prechat-capture) form is completed.
 */
interface Delegate {
    beforeDisplay?: (message: Message, data: ConversationData) => Message | null;
    beforeSend?: (message: Message, data: ConversationData) => Message | null;
    beforePostbackSend?: (postback: unknown, data: ConversationData) => unknown;
    onInvalidAuth?: () => string | Promise<string>;
}
