declare namespace OO.ui {
    type Deferrable<T> = T | (() => T);

    type Numberish = `${number}` | number;

    type Direction = "ltr" | "rtl";

    type LiteralUnion<T extends string> = T | (string & {});

    interface DeprecatedPromise<TR, TJ, TN, UR = never, UJ = never, UN = never> {
        /** @deprecated */
        state: JQuery.PromiseBase<TR, TJ, TN, UR, UJ, UN, never, never, never, never, never, never>["state"];

        /** @deprecated */
        always: JQuery.PromiseBase<TR, TJ, TN, UR, UJ, UN, never, never, never, never, never, never>["always"];

        /** @deprecated */
        catch: JQuery.PromiseBase<TR, TJ, TN, UR, UJ, UN, never, never, never, never, never, never>["catch"];

        /** @deprecated */
        pipe: JQuery.PromiseBase<TR, TJ, TN, UR, UJ, UN, never, never, never, never, never, never>["pipe"];

        /** @deprecated */
        then: JQuery.PromiseBase<TR, TJ, TN, UR, UJ, UN, never, never, never, never, never, never>["then"];

        /** @deprecated */
        promise: JQuery.PromiseBase<TR, TJ, TN, UR, UJ, UN, never, never, never, never, never, never>["promise"];

        /** @deprecated */
        progress: JQuery.PromiseBase<TR, TJ, TN, UR, UJ, UN, never, never, never, never, never, never>["progress"];

        /** @deprecated */
        done: JQuery.PromiseBase<TR, TJ, TN, UR, UJ, UN, never, never, never, never, never, never>["done"];

        /** @deprecated */
        fail: JQuery.PromiseBase<TR, TJ, TN, UR, UJ, UN, never, never, never, never, never, never>["fail"];
    }

    // #region Icon
    /**
     * Represents an icon name. You need to load additional ResourceLoader modules to use these
     * icons. Please refer to OOUI documentation or the code here.
     *
     * Note: only use it as function parameters, otherwise it may break CFA.
     * @see https://doc.wikimedia.org/oojs-ui/master/demos/?page=icons&theme=wikimediaui&direction=ltr&platform=desktop
     */
    type Icon = LiteralUnion<
        // Module: oojs-ui.styles.icons-movement
        | "arrowNext"
        | "arrowPrevious"
        | "collapse"
        | "downTriangle"
        | "draggable"
        | "doubleChevronEnd"
        | "doubleChevronStart"
        | "expand"
        | "move"
        | "next"
        | "previous"
        | "last"
        | "first"
        | "upTriangle"
        // Module: oojs-ui.styles.icons-content
        | "article"
        | "articles"
        | "articleAdd"
        | "articleCheck"
        | "articleDisambiguation"
        | "articleNotFound"
        | "articleSearch"
        | "articlesSearch"
        | "articleRedirect"
        | "database"
        | "die"
        | "download"
        | "folderPlaceholder"
        | "history"
        | "info"
        | "infoFilled"
        | "robot"
        | "share"
        | "specialPages"
        | "tag"
        | "upload"
        | "window"
        // Module: oojs-ui.styles.icons-alerts
        | "alert"
        | "bell"
        | "bellOutline"
        | "error"
        | "message"
        | "notice"
        | "speechBubble"
        | "speechBubbleAdd"
        | "speechBubbles"
        | "tray"
        // Module: oojs-ui.styles.icons-interactions
        | "add"
        | "browser"
        | "cancel"
        | "check"
        | "checkAll"
        | "clear"
        | "clock"
        | "close"
        | "ellipsis"
        | "feedback"
        | "funnel"
        | "hand"
        | "heart"
        | "help"
        | "helpNotice"
        | "home"
        | "key"
        | "keyboard"
        | "lightbulb"
        | "logIn"
        | "logOut"
        | "network"
        | "networkOff"
        | "newWindow"
        | "pageSettings"
        | "printer"
        | "reload"
        | "search"
        | "settings"
        | "subtract"
        // Module: oojs-ui.styles.icons-moderation
        | "bookmarkOutline"
        | "bookmark"
        | "block"
        | "unBlock"
        | "flag"
        | "unFlag"
        | "lock"
        | "unLock"
        | "restore"
        | "star"
        | "halfStar"
        | "unStar"
        | "trash"
        | "pushPin"
        | "ongoingConversation"
        // Module: oojs-ui.styles.icons-editing-core
        | "edit"
        | "editLock"
        | "editUndo"
        | "link"
        | "unLink"
        | "linkExternal"
        | "linkSecure"
        | "redo"
        | "undo"
        // Module: oojs-ui.styles.icons-editing-styling
        | "bigger"
        | "smaller"
        | "subscript"
        | "superscript"
        | "bold"
        | "highlight"
        | "italic"
        | "strikethrough"
        | "underline"
        | "textLanguage"
        | "textDirLTR"
        | "textDirRTL"
        | "textStyle"
        // Module: oojs-ui.styles.icons-editing-list
        | "indent"
        | "listBullet"
        | "listNumbered"
        | "outdent"
        // Module: oojs-ui.styles.icons-editing-advanced
        | "alignCenter"
        | "alignLeft"
        | "alignRight"
        | "attachment"
        | "calendar"
        | "code"
        | "copy"
        | "cut"
        | "hieroglyph"
        | "imageLayoutBasic"
        | "imageLayoutFrame"
        | "imageLayoutFrameless"
        | "imageLayoutThumbnail"
        | "labFlask"
        | "language"
        | "layout"
        | "markup"
        | "mathematics"
        | "mathematicsDisplayBlock"
        | "mathematicsDisplayDefault"
        | "mathematicsDisplayInline"
        | "newline"
        | "noWikiText"
        | "ocr"
        | "outline"
        | "palette"
        | "paste"
        | "puzzle"
        | "quotes"
        | "sandbox"
        | "searchCaseSensitive"
        | "searchDiacritics"
        | "searchRegularExpression"
        | "signature"
        | "specialCharacter"
        | "table"
        | "tableAddColumnAfter"
        | "tableAddColumnBefore"
        | "tableAddRowAfter"
        | "tableAddRowBefore"
        | "tableCaption"
        | "tableMergeCells"
        | "tableMoveColumnAfter"
        | "tableMoveColumnBefore"
        | "tableMoveRowAfter"
        | "tableMoveRowBefore"
        | "templateAdd"
        | "translation"
        | "wikiText"
        // Module: oojs-ui.styles.icons-editing-citation
        | "book"
        | "journal"
        | "newspaper"
        | "reference"
        | "referenceExisting"
        | "references"
        // Module: oojs-ui.styles.icons-media
        | "camera"
        | "chart"
        | "exitFullscreen"
        | "fullScreen"
        | "image"
        | "imageAdd"
        | "imageBroken"
        | "imageLock"
        | "imageGallery"
        | "musicalScore"
        | "pause"
        | "play"
        | "stop"
        | "volumeDown"
        | "volumeOff"
        | "volumeUp"
        | "zoomIn"
        | "zoomOut"
        // Module: oojs-ui.styles.icons-location
        | "globe"
        | "map"
        | "mapPin"
        | "mapPinAdd"
        | "mapTrail"
        // Module: oojs-ui.styles.icons-user
        | "userAdd"
        | "userAnonymous"
        | "userAvatar"
        | "userAvatarOutline"
        | "userContributions"
        | "userGroup"
        | "userTalk"
        | "watchlist"
        // Module: oojs-ui.styles.icons-layout
        | "menu"
        | "recentChanges"
        | "textFlow"
        | "textSummary"
        | "viewCompact"
        | "viewDetails"
        // Module: oojs-ui.styles.icons-accessibility
        | "bright"
        | "halfBright"
        | "notBright"
        | "eye"
        | "eyeClosed"
        | "moon"
        | "largerText"
        | "smallerText"
        | "visionSimulator"
        // Module: oojs-ui.styles.icons-wikimedia
        | "logoCC"
        | "logoWikidata"
        | "logoWikimedia"
        | "logoWikimediaCommons"
        | "logoWikimediaDiscovery"
        | "logoWikipedia"
    >;
    // #endregion

    /**
     * Represents an indicator name.
     *
     * Note: only use it as function parameters, otherwise it may break CFA.
     * @see https://doc.wikimedia.org/oojs-ui/master/demos/?page=icons&theme=wikimediaui&direction=ltr&platform=desktop
     */
    type Indicator = LiteralUnion<"clear" | "up" | "down" | "required">;

    interface Rectangle {
        top: number;
        right: number;
        bottom: number;
        left: number;
    }

    interface Coordinate {
        left: number;
        top: number;
    }
}
