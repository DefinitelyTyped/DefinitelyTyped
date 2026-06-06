/** https://docs.com/CKEDITOR4/latest/api/CKEDITOR_config.html */

declare namespace CKEDITOR {
    interface config {
        allowedContent?: boolean | filter.allowedContentRules | undefined;
        autoEmbed_widget?: string | ((url: string) => string) | undefined;
        autoGrow_bottomSpace?: number | undefined;
        autoGrow_maxHeight?: number | undefined;
        autoGrow_minHeight?: number | undefined;
        autoGrow_onStartup?: boolean | undefined;
        autoUpdateElement?: boolean | undefined;

        baseFloatZIndex?: number | undefined;
        baseHref?: string | undefined;
        basicEntities?: boolean | undefined;
        blockedKeystrokes?: number[] | undefined;
        bodyClass?: string | undefined;
        bodyId?: string | undefined;
        browserContextMenuOnCtrl?: boolean | undefined;

        clipboard_defaultContentType?: "html" | "text" | undefined;
        clipboard_notificationDuration?: number | undefined;
        cloudServices_tokenUrl?: string | undefined;
        cloudServices_uploadUrl?: string | undefined;
        codeSnippetGeshi_url?: string | undefined;
        codeSnippet_codeClass?: string | undefined;
        codeSnippet_languages?: { [key: string]: unknown } | undefined;
        coceSnippet_theme?: string | undefined;
        colorButton_backStyle?: config.styleObject | undefined;
        colorButton_colors?: string | undefined;
        colorButton_colorsPerRow?: number | undefined;
        colorButton_enableAutomatic?: boolean | undefined;
        colorButton_enableMore?: boolean | undefined;
        colorButton_foreStyle?: config.styleObject | undefined;
        colorButton_normalizeBackground?: boolean | undefined;
        contentsCss?: string | string[] | undefined;
        contentsLangDirection?: string | undefined;
        contentsLanguage?: string | undefined;
        copyFormatting_allowRules?: string | undefined;
        copyFormatting_allowedContexts?: boolean | string[] | undefined;
        copyFormatting_keystrokeCopy?: number | undefined;
        copyFormatting_keystrokePaste?: number | undefined;
        copyFormatting_outerCursor?: boolean | undefined;
        coreStyles_bold?: config.styleObject | undefined;
        coreStyles_italic?: config.styleObject | undefined;
        coreStyles_strike?: config.styleObject | undefined;
        coreStyles_subscript?: config.styleObject | undefined;
        coreStyles_superscript?: config.styleObject | undefined;
        coreStyles_underline?: config.styleObject | undefined;
        customConfig?: string | undefined;

        dataIndentationChars?: string | undefined;
        defaultLanguage?: string | undefined;
        devtools_styles?: string | undefined;
        devtools_textCallback?:
            | ((editor: editor, dialog: dialog, element: dom.element, tabName: string) => string)
            | undefined;
        dialog_backgroundCoverColor?: string | undefined;
        dialog_backgroundCoverOpacity?: number | undefined;
        dialog_buttonsOrder?: string | undefined;
        dialog_magnetDistance?: number | undefined;
        dialog_noConfirmCancel?: boolean | undefined;
        dialog_startupFocusTab?: boolean | undefined;
        disableNativeSpellChecker?: boolean | undefined;
        disableNativeTableHandles?: boolean | undefined;
        disableNativeObjectResizing?: boolean | undefined;
        disableNativeReadonlyStyling?: boolean | undefined;
        disallowedContent?: filter.disallowedContentRules | undefined;
        div_wrapTable?: boolean | undefined;
        docType?: string | undefined;

        easyimage_class?: string | undefined;
        easyimage_defaultStyle?: string | undefined;
        easyimage_styles?: { [key: string]: unknown } | undefined;
        easyimage_toolbar?: string[] | string | undefined;
        emailProtection?: string | undefined;
        embed_provider?: string | undefined;
        emoji_emojiListUrl?: string | undefined;
        emoji_minChars?: number | undefined;
        enableContextMenu?: boolean | undefined;
        enableTabKeyTools?: boolean | undefined;
        enterMode?: number | undefined;
        entities?: boolean | undefined;
        entities_additional?: string | undefined;
        entities_greek?: boolean | undefined;
        entities_latin?: boolean | undefined;
        entities_processNumerical?: boolean | string | undefined;
        extraAllowedContent?: filter.allowedContentRules | undefined;
        extraPlugins?: string | undefined;

        fileTools_defaultFileName?: string | undefined;
        fileTools_requestHeaders?: { [key: string]: unknown } | undefined;
        filebrowserBrowseUrl?: string | undefined;
        filebrowserFlashBrowseUrl?: string | undefined;
        filebrowserFlashUploadUrl?: string | undefined;
        filebrowserImageBrowseLinkUrl?: string | undefined;
        filebrowserImageBrowseUrl?: string | undefined;
        filebrowserImageUploadUrl?: string | undefined;
        filebrowserUploadMethod?: string | undefined;
        filebrowserUploadUrl?: string | undefined;
        filebrowserWindowFeatures?: string | undefined;
        filebrowserWindowHeight?: number | string | undefined;
        filebrowserWindowWidth?: number | string | undefined;
        fillEmptyBlocks?: boolean | ((element: htmlParser.element) => boolean) | undefined;
        find_highlight?: config.styleObject | undefined;
        flashAddEmbedTag?: boolean | undefined;
        flashConvertOnEdit?: boolean | undefined;
        flashEmbedTagOnly?: boolean | undefined;
        floatSpaceDockedOffsetX?: number | undefined;
        floatSpaceDockedOffsetY?: number | undefined;
        floatSpacePinnedOffsetX?: number | undefined;
        floatSpacePinnedOffsetY?: number | undefined;
        floatSpacePreferRight?: boolean | undefined;
        fontSize_defaultLabel?: string | undefined;
        fontSize_sizes?: string | undefined;
        fontSize_style?: config.styleObject | undefined;
        font_defaultLabel?: string | undefined;
        font_names?: string | undefined;
        font_style?: config.styleObject | undefined;
        forceEnterMode?: boolean | undefined;
        forcePasteAsPlainText?: boolean | undefined;
        forceSimpleAmpersand?: boolean | undefined;
        format_address?: config.styleObject | undefined;
        format_div?: config.styleObject | undefined;
        format_h1?: config.styleObject | undefined;
        format_h2?: config.styleObject | undefined;
        format_h3?: config.styleObject | undefined;
        format_h4?: config.styleObject | undefined;
        format_h5?: config.styleObject | undefined;
        format_h6?: config.styleObject | undefined;
        format_p?: config.styleObject | undefined;
        format_pre?: config.styleObject | undefined;
        format_tags?: string | undefined;
        fullPage?: boolean | undefined;

        grayt_autoStartup?: boolean | undefined;

        height?: string | number | undefined;
        htmlEncodeOutput?: boolean | undefined;

        ignoreEmptyParagraph?: boolean | undefined;
        image2_alignClasses?: string[] | undefined;
        image2_altRequired?: boolean | undefined;
        image2_captionedClass?: string | undefined;
        image2_disableResizer?: boolean | undefined;
        image2_prefillDimensions?: boolean | undefined;
        imageUploadUrl?: string | undefined;
        image_prefillDimensions?: boolean | undefined;
        image_previewText?: string | undefined;
        image_removeLinkByEmptyUrl?: boolean | undefined;
        indentClasses?: string[] | undefined;
        indentOffset?: number | undefined;
        indentUnit?: string | undefined;

        jqueryOverrideVal?: boolean | undefined;
        justifyClasses?: string[] | undefined;

        keystrokes?: Array<[number, string]> | undefined;

        language?: string | undefined;
        language_list?: string[] | undefined;
        linkJavaScriptLinksAllowed?: boolean | undefined;
        linkShowAdvancedTab?: boolean | undefined;
        linkShowTargetTab?: boolean | undefined;

        magicline_color?: string | undefined;
        magicline_everywhere?: boolean | undefined;
        magicline_holdDistance?: number | undefined;
        magicline_keystrokeNext?: number | undefined;
        magicline_keystrokePrevious?: number | undefined;
        magicline_tabuList?: string[] | undefined;
        magicline_triggerOffset?: number | undefined;
        mathJaxClass?: string | undefined;
        mathJaxLib?: string | undefined;
        menu_groups?: string | undefined;
        menu_subMenuDelay?: number | undefined;

        newpage_html?: string | undefined;
        notification_duration?: number | undefined;

        on?: eventObject | undefined;

        pasteFilter?: string | undefined;
        pasteFromWordCleanupFile?: string | undefined;
        pasteFromWordNumberedHeadingToList?: boolean | undefined;
        pasteFromWordPromptCleanup?: boolean | undefined;
        pasteFromWordRemoveFontStyles?: boolean | undefined;
        pasteFromWordRemoveStyles?: boolean | undefined;
        pasteFromWord_heuristicsEdgeList?: boolean | undefined;
        pasteFromWord_inlineImages?: boolean | undefined;
        plugins?: string | undefined;
        protectedSource?: RegExp[] | undefined;

        readOnly?: boolean | undefined;
        removeButtons?: string | undefined;
        removeDialogTabs?: string | undefined;
        removeFormatAttributes?: string | undefined;
        removeFormatTags?: string | undefined;
        removePlugins?: string | undefined;
        resize_dir?: string | undefined;
        resize_enabled?: boolean | undefined;
        resize_maxHeight?: number | undefined;
        resize_maxWidth?: number | undefined;
        resize_minHeight?: number | undefined;
        resize_minWidth?: number | undefined;

        scayt_autoStartup?: boolean | undefined;
        scayt_contextCommands?: string | undefined;
        scayt_contextMenuItemsOrder?: string | undefined;
        scayt_customDictionaryIds?: string | undefined;
        scayt_customerId?: string | undefined;
        scayt_disableOptionsStorage?: string | string[] | undefined;
        scayt_elementsToIgnore?: string | undefined;
        scayt_handleCheckDirty?: string | undefined;
        scayt_handleUndoRedo?: string | undefined;
        scayt_ignoreAllCapsWords?: boolean | undefined;
        scayt_ignoreDomainNames?: boolean | undefined;
        scayt_ignoreWordsWithMixedCases?: boolean | undefined;
        scayt_ignoreWordsWithNumbers?: boolean | undefined;
        scayt_inlineModeImmediateMarkup?: boolean | undefined;
        scayt_maxSuggestions?: number | undefined;
        scayt_minWordLength?: number | undefined;
        scayt_moreSuggestions?: string | undefined;
        scayt_multiLanguageMode?: boolean | undefined;
        scayt_multiLanguageStyles?: { [key: string]: unknown } | undefined;
        scayt_sLang?: string | undefined;
        scayt_serviceHost?: string | undefined;
        scayt_servicePath?: string | undefined;
        scayt_servicePort?: string | undefined;
        scayt_serviceProtocol?: string | undefined;
        scayt_srcUrl?: string | undefined;
        scayt_uiTabs?: string | undefined;
        scayt_userDictionaryName?: string | undefined;

        sharedSpaces?: config.sharedSpace | undefined;
        shiftEnterMode?: number | undefined;
        skin?: string | undefined;
        smiley_columns?: number | undefined;
        smiley_descriptions?: string[] | undefined;
        smiley_images?: string[] | undefined;
        smiley_path?: string | undefined;
        sourceAreaTabSize?: number | undefined;
        specialChars?: Array<string | [string, string]> | undefined;
        startupFocus?: string | boolean | undefined;
        startupMode?: string | undefined;
        startupOutlineBlocks?: boolean | undefined;
        startupShowBorders?: boolean | undefined;
        stylesSet?: string | boolean | config.styleObject[] | undefined;
        stylesheetParser_skipSelectors?: RegExp | undefined;
        stylesheetParser_validSelectors?: RegExp | undefined;

        tabIndex?: number | undefined;
        tabSpaces?: number | undefined;
        templates?: string | undefined;
        templates_files?: { [key: string]: unknown } | undefined;
        templates_replaceContent?: boolean | undefined;
        title?: string | boolean | undefined;
        toolbar?:
            | string
            | Array<
                | string
                | string[]
                | {
                    name: string;
                    items?: string[] | undefined;
                    groups?: string[] | undefined;
                }
            >
            | null
            | undefined;
        toolbarCanCollapse?: boolean | undefined;
        toolbarGroupCycling?: boolean | undefined;
        toolbarGroups?: Array<config.toolbarGroups | string> | undefined;
        toolbarLocation?: string | undefined;
        toolbarStartupExpanded?: boolean | undefined;

        uiColor?: string | undefined;
        undoStackSize?: number | undefined;
        uploadUrl?: string | undefined;
        useComputedState?: boolean | undefined;

        width?: string | number | undefined;
        wsc_cmd?: string | undefined;
        wsc_customDictionaryIds?: string | undefined;
        wsc_customLoaderScript?: string | undefined;
        wsc_customerId?: string | undefined;
        wsc_height?: string | undefined;
        wsc_lang?: string | undefined;
        wsc_left?: string | undefined;
        wsc_top?: string | undefined;
        wsc_userDictionaryName?: string | undefined;
        wsc_width?: string | undefined;
    }

    namespace config {
        interface styleObject {
            name?: string | undefined;
            element: string;
            attributes?: { [key: string]: unknown } | undefined;
            styles?: { [key: string]: unknown } | undefined;
            overrides?: { [key: string]: unknown } | undefined;
        }
        interface toolbarGroups {
            name?: string | undefined;
            groups?: string[] | undefined;
        }
        interface sharedSpace {
            top?: string | HTMLElement | null | undefined;
            bottom?: string | HTMLElement | null | undefined;
        }
    }
}
