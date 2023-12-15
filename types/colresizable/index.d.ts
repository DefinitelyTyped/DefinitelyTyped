/// <reference types="jquery" />

interface JQuery {
    colResizable(param?: colResizable.Settings): JQuery;
}

declare namespace colResizable {
    interface Settings {
        /**
         * [default: 'fit']  It is used to set how the resize method works. Those are the possible values:
         * - 'fit': this is default resizing model, in which resizing a column does not alter table width, which means that when a column is expanded the next one shrinks.
         * - 'flex': in this mode tables can change its width and each column can shrink or expand independently if there is enough space in the parent container.
         *           If there is not enough space, columns will share its width as they are resized. Table will never get bigger than its parent.
         * - 'overflow': allows to resize columns with overflow of parent container.
         * [version: 1.6]
         */
        resizeMode?: "fit" | "flex" | "overflow" | undefined;

        /**
         * [default: false] When set to true the table layout is updated while dragging column anchors.
         * liveDrag enabled is more CPU consuming so it is not recommended for slow computers, specially when dealing with huge or extremely complicated tables.
         * [version: 1.0]
         */
        liveDrag?: boolean | undefined;

        /**
         * @deprecated use resizeMode instead
         * [default: true] It is used to set how the resize method works.
         * In fixed mode resizing a column does not alter total table width, which means that when a column is expanded the next one shrinks.
         * If fixed is set to false then table can change its width and each column can shrink or expand independently.
         * [version: 1.5]
         */
        fixed?: boolean | undefined;

        /**
         * [default: false]  This attribute can be used to specify that the manually selected column widths must remain unaltered after a postback or browser refresh.
         * This feature is mainly oriented to those pages created with server-side logic (codebehind), such as PHP or .NET, and it is only compatible with browsers
         * with sessionStorage support (all modern browsers).
         * However, if you are targeting older browsers (such as IE7 and IE8) you can still emulate sessionStorage using sessionStorage.js.
         * It is important to note that some browsers (IE and FF) doesn’t enable the sessionStorage object while running the website directly from the local file system,
         * so if you want to test this feature it is recommended to view the website through a web server or use browsers such as Chrome or Opera which doesn’t have this limitation.
         * Don't worry about compatibility issues, once your site is up on the internet, all browsers will act in exactly the same way.
         * [version: 1.3]
         */
        postbackSafe?: boolean | undefined;

        /**
         * [default: false]  This attribute should be set to true if the table is inside of an updatePanel or any other kind of partial page refresh using ajax.
         * Table's ID should be same before and after the partial partial refresh.
         * [version: 1.5]
         */
        partialRefresh?: boolean | undefined;

        /**
         * [default: false]  This attribute can be used to prevent vertical expansion of the column anchors to fit the table height.
         * If it is set to true, column handler's size will be bounded to the first row's vertical size.
         * [version: 1.2]
         */
        headerOnly?: boolean | undefined;

        /**
         * [default: ""]  Its purpose is to allow column anchor customization by defining the HTML to be used in the column grips to provide some visual feedback.
         * It can be used in a wide range of ways to obtain very different outputs, and its flexibility can be increased by combining it with the draggingClass attribute.
         * [version: 1.0]
         */
        gripInnerHtml?: string | undefined;

        /**
         * [default: (internal class)]  This attribute is used as the css class assigned to column anchors while being dragged. It can be used for visual feedback purposes.
         * [version: 1.0]
         */
        draggingClass?: string | undefined;

        /**
         * [default: false] When set to true it aims to remove all previously added enhancements such as events and additional DOM elements assigned by this plugin to
         * a single or collection of tables. It is required to disable a previously colResized table prior its removal from the document object tree.
         * [version: 1.0]
         */
        disable?: boolean | undefined;

        /**
         * [default: [ ] ] An array of column indexes to be excluded, so it will not be possible to drag them manually.
         * [version: 1.6]
         */
        disabledColumns?: number[] | undefined;

        /**
         * [default: 15]  This value specifies the minimum width (measured in pixels) that is allowed for the columns.
         * [version: 1.1]
         */
        minWidth?: number | undefined;

        /**
         * [default: "e-resize"]  This attribute can be used to customize the cursor that will be displayed when the user is positioned on the column anchors.
         * [version: 1.3]
         */
        hoverCursor?: string | undefined;

        /**
         * [default: "e-resize"]  Defines the cursor that will be used while the user is resizing a column.
         * [version: 1.3]
         */
        dragCursor?: string | undefined;

        /**
         * [default: false]  Flush is only effective when postbackSafe is enabled.
         * Its purpose is to remove all previously stored data related to the current table layout to get it back to its original layout preventing width restoration after postback.
         * [version: ]
         */
        flush?: boolean | undefined;

        /**
         * [default: null]  If the target table contains an explicit margin-left CSS rule, the same value must be used in this attribute (for example: "auto", "20%", "10px").
         * The reason why it is needed it is because most browsers (all except of IE) don’t allow direct access to the current CSS rule applied to an element in
         * its original units (such as "%", "em" or "auto" values).
         * If you know any workaround which doesn’t involve iteration through all the styles defined in the site and any other external dependencies, please let me know!
         * [version: 1.3]
         */
        marginLeft?: string | undefined;

        /**
         * [default: null]  It behaves in exactly the same way than the marginLeft attribute but applied to the right margin.
         * [version: 1.3]
         */
        marginRight?: string | undefined;

        /**
         * If a callback function is supplied it will be fired when the user has ended dragging a column anchor altering the previous table layout.
         * The callback function can obtain a reference to the updated table through the currentTarget attribute of the event retrieved by parameters
         * [version: 1.0]
         */
        onResize?: FunctionCallback | undefined;

        /**
         * This event is fired while dragging a column anchor if liveDrag is enabled. It can be useful if the table is being used as a multiple range slider.
         * The callback function can obtain a reference to the updated table through the currentTarget attribute of the event retrieved by parameters
         * [version: 1.1]
         */
        onDrag?: FunctionCallback | undefined;
    }

    type FunctionCallback = (e: JQueryMouseEventObject) => void;
}
