declare module goog {
    function require(name: 'goog.ui.editor.messages'): typeof goog.ui.editor.messages;
}

declare module goog.ui.editor.messages {

    /** @desc Link button / bubble caption. */
    var MSG_LINK_CAPTION: any;

    /** @desc Title for the dialog that edits a link. */
    var MSG_EDIT_LINK: any;

    /** @desc Prompt the user for the text of the link they've written. */
    var MSG_TEXT_TO_DISPLAY: any;

    /** @desc Prompt the user for the URL of the link they've created. */
    var MSG_LINK_TO: any;

    /** @desc Prompt the user to type a web address for their link. */
    var MSG_ON_THE_WEB: any;

    /** @desc More details on what linking to a web address involves.. */
    var MSG_ON_THE_WEB_TIP: any;

    /**
     * @desc Text for a button that allows the user to test the link that
     *     they created.
     */
    var MSG_TEST_THIS_LINK: any;

    /**
     * @desc Explanation for how to create a link with the link-editing dialog.
     */
    var MSG_TR_LINK_EXPLANATION: any;

    /** @desc Prompt for the URL of a link that the user is creating. */
    var MSG_WHAT_URL: any;

    /**
     * @desc Prompt for an email address, so that the user can create a link
     *    that sends an email.
     */
    var MSG_EMAIL_ADDRESS: any;

    /**
     * @desc Explanation of the prompt for an email address in a link.
     */
    var MSG_EMAIL_ADDRESS_TIP: any;

    /** @desc Error message when the user enters an invalid email address. */
    var MSG_INVALID_EMAIL: any;

    /**
     * @desc When the user creates a mailto link, asks them what email
     *     address clicking on this link will send mail to.
     */
    var MSG_WHAT_EMAIL: any;

    /**
     * @desc Warning about the dangers of creating links with email
     *     addresses in them.
     */
    var MSG_EMAIL_EXPLANATION: any;

    /**
     * @desc Label for the checkbox that allows the user to specify what when this
     *     link is clicked, it should be opened in a new window.
     */
    var MSG_OPEN_IN_NEW_WINDOW: any;

    /** @desc Image bubble caption. */
    var MSG_IMAGE_CAPTION: any;

    /**
     * @return {!goog.html.SafeHtml} SafeHtml version of MSG_TR_LINK_EXPLANATION.
     */
    function getTrLinkExplanationSafeHtml(): goog.html.SafeHtml;

    /**
     * @return {!goog.html.SafeHtml} SafeHtml version of MSG_EMAIL_EXPLANATION.
     */
    function getEmailExplanationSafeHtml(): goog.html.SafeHtml;
}
