// Type definitions for Google Apps Script 2017-05-12
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />

declare namespace GoogleAppsScript {
  export module UI {
    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * An absolute panel positions all of its children absolutely, allowing them to overlap.
     *
     *  Here is an example of how to use this widget:
     *
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        var button = app.createButton("a button");
     *        var panel = app.createAbsolutePanel();
     *        // add a widget at position (10, 20)
     *        panel.add(button, 10, 20);
     *        app.add(panel);
     *        return app;
     *      }
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the AbsolutePanel documentation here.
     */
    export interface AbsolutePanel {
      add(widget: Widget): AbsolutePanel;
      add(widget: Widget, left: Integer, top: Integer): AbsolutePanel;
      addStyleDependentName(styleName: string): AbsolutePanel;
      addStyleName(styleName: string): AbsolutePanel;
      clear(): AbsolutePanel;
      getId(): string;
      getTag(): string;
      getType(): string;
      remove(index: Integer): AbsolutePanel;
      remove(widget: Widget): AbsolutePanel;
      setHeight(height: string): AbsolutePanel;
      setId(id: string): AbsolutePanel;
      setLayoutData(layout: Object): AbsolutePanel;
      setPixelSize(width: Integer, height: Integer): AbsolutePanel;
      setSize(width: string, height: string): AbsolutePanel;
      setStyleAttribute(attribute: string, value: string): AbsolutePanel;
      setStyleAttributes(attributes: Object): AbsolutePanel;
      setStyleName(styleName: string): AbsolutePanel;
      setStylePrimaryName(styleName: string): AbsolutePanel;
      setTag(tag: string): AbsolutePanel;
      setTitle(title: string): AbsolutePanel;
      setVisible(visible: boolean): AbsolutePanel;
      setWidgetPosition(widget: Widget, left: Integer, top: Integer): AbsolutePanel;
      setWidth(width: string): AbsolutePanel;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A widget that represents a simple <a> element. That is, a hyperlink to a different page.
     *
     *  By design, these hyperlinks always open in a new page. Links that reload the current page are
     *  not allowed.
     *
     *  Here is an example of how to use this widget:
     *
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        // Creates a link to your favorite search engine.
     *        var anchor = app.createAnchor("a link", "http://www.google.com");
     *        app.add(anchor);
     *        return app;
     *      }
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the Anchor documentation here.
     */
    export interface Anchor {
      addBlurHandler(handler: Handler): Anchor;
      addClickHandler(handler: Handler): Anchor;
      addFocusHandler(handler: Handler): Anchor;
      addKeyDownHandler(handler: Handler): Anchor;
      addKeyPressHandler(handler: Handler): Anchor;
      addKeyUpHandler(handler: Handler): Anchor;
      addMouseDownHandler(handler: Handler): Anchor;
      addMouseMoveHandler(handler: Handler): Anchor;
      addMouseOutHandler(handler: Handler): Anchor;
      addMouseOverHandler(handler: Handler): Anchor;
      addMouseUpHandler(handler: Handler): Anchor;
      addMouseWheelHandler(handler: Handler): Anchor;
      addStyleDependentName(styleName: string): Anchor;
      addStyleName(styleName: string): Anchor;
      getId(): string;
      getTag(): string;
      getType(): string;
      setAccessKey(accessKey: Char): Anchor;
      setDirection(direction: Component): Anchor;
      setEnabled(enabled: boolean): Anchor;
      setFocus(focus: boolean): Anchor;
      setHTML(html: string): Anchor;
      setHeight(height: string): Anchor;
      setHorizontalAlignment(horizontalAlignment: HorizontalAlignment): Anchor;
      setHref(href: string): Anchor;
      setId(id: string): Anchor;
      setLayoutData(layout: Object): Anchor;
      setName(name: string): Anchor;
      setPixelSize(width: Integer, height: Integer): Anchor;
      setSize(width: string, height: string): Anchor;
      setStyleAttribute(attribute: string, value: string): Anchor;
      setStyleAttributes(attributes: Object): Anchor;
      setStyleName(styleName: string): Anchor;
      setStylePrimaryName(styleName: string): Anchor;
      setTabIndex(index: Integer): Anchor;
      setTag(tag: string): Anchor;
      setTarget(target: string): Anchor;
      setText(text: string): Anchor;
      setTitle(title: string): Anchor;
      setVisible(visible: boolean): Anchor;
      setWidth(width: string): Anchor;
      setWordWrap(wordWrap: boolean): Anchor;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A standard push-button widget.
     *
     *  Here is an example of how to use this widget:
     *
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        // create a button and give it a click handler
     *        var button = app.createButton("click me!").setId("button");
     *        button.addClickHandler(app.createServerHandler("handlerFunction"));
     *        app.add(button);
     *        return app;
     *      }
     *
     *      function handlerFunction(eventInfo) {
     *        var app = UiApp.getActiveApplication();
     *        app.getElementById("button").setText("I was clicked!");
     *        return app;
     *      }
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the Button documentation here.
     */
    export interface Button {
      addBlurHandler(handler: Handler): Button;
      addClickHandler(handler: Handler): Button;
      addFocusHandler(handler: Handler): Button;
      addKeyDownHandler(handler: Handler): Button;
      addKeyPressHandler(handler: Handler): Button;
      addKeyUpHandler(handler: Handler): Button;
      addMouseDownHandler(handler: Handler): Button;
      addMouseMoveHandler(handler: Handler): Button;
      addMouseOutHandler(handler: Handler): Button;
      addMouseOverHandler(handler: Handler): Button;
      addMouseUpHandler(handler: Handler): Button;
      addMouseWheelHandler(handler: Handler): Button;
      addStyleDependentName(styleName: string): Button;
      addStyleName(styleName: string): Button;
      getId(): string;
      getTag(): string;
      getType(): string;
      setAccessKey(accessKey: Char): Button;
      setEnabled(enabled: boolean): Button;
      setFocus(focus: boolean): Button;
      setHTML(html: string): Button;
      setHeight(height: string): Button;
      setId(id: string): Button;
      setLayoutData(layout: Object): Button;
      setPixelSize(width: Integer, height: Integer): Button;
      setSize(width: string, height: string): Button;
      setStyleAttribute(attribute: string, value: string): Button;
      setStyleAttributes(attributes: Object): Button;
      setStyleName(styleName: string): Button;
      setStylePrimaryName(styleName: string): Button;
      setTabIndex(index: Integer): Button;
      setTag(tag: string): Button;
      setText(text: string): Button;
      setTitle(title: string): Button;
      setVisible(visible: boolean): Button;
      setWidth(width: string): Button;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A panel that wraps its contents in a border with a caption that appears in the upper left
     *  corner of the border. This is an implementation of the fieldset HTML element.
     *
     *  Note that this panel can contain at most one direct child widget. To add more children, make the
     *  child of this panel a different panel that can contain more than one child.
     *
     *  Note also that the placement of the caption in a caption panel will vary slightly from browser to
     *  browser, so this widget is not a good choice when precise cross-browser layout is needed.
     *
     *  Here is an example of how to use this widget:
     *
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        var panel = app.createCaptionPanel("my caption!");
     *        panel.add(app.createButton("a button inside..."));
     *        app.add(panel);
     *        return app;
     *      }
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the CaptionPanel documentation here.
     */
    export interface CaptionPanel {
      add(widget: Widget): CaptionPanel;
      addStyleDependentName(styleName: string): CaptionPanel;
      addStyleName(styleName: string): CaptionPanel;
      clear(): CaptionPanel;
      getId(): string;
      getTag(): string;
      getType(): string;
      setCaptionText(text: string): CaptionPanel;
      setContentWidget(widget: Widget): CaptionPanel;
      setHeight(height: string): CaptionPanel;
      setId(id: string): CaptionPanel;
      setLayoutData(layout: Object): CaptionPanel;
      setPixelSize(width: Integer, height: Integer): CaptionPanel;
      setSize(width: string, height: string): CaptionPanel;
      setStyleAttribute(attribute: string, value: string): CaptionPanel;
      setStyleAttributes(attributes: Object): CaptionPanel;
      setStyleName(styleName: string): CaptionPanel;
      setStylePrimaryName(styleName: string): CaptionPanel;
      setTag(tag: string): CaptionPanel;
      setText(text: string): CaptionPanel;
      setTitle(title: string): CaptionPanel;
      setVisible(visible: boolean): CaptionPanel;
      setWidget(widget: Widget): CaptionPanel;
      setWidth(width: string): CaptionPanel;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A standard check box widget.
     *
     *  Here is an example of how to use this widget:
     *
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        var handler = app.createServerHandler("change");
     *        var check = app.createCheckBox("click me").addValueChangeHandler(handler);
     *        app.add(check);
     *        return app;
     *      }
     *
     *      function change() {
     *        var app = UiApp.getActiveApplication();
     *        app.add(app.createLabel("The value changed!"));
     *        return app;
     *      }
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the CheckBox documentation here.
     */
    export interface CheckBox {
      addBlurHandler(handler: Handler): CheckBox;
      addClickHandler(handler: Handler): CheckBox;
      addFocusHandler(handler: Handler): CheckBox;
      addKeyDownHandler(handler: Handler): CheckBox;
      addKeyPressHandler(handler: Handler): CheckBox;
      addKeyUpHandler(handler: Handler): CheckBox;
      addMouseDownHandler(handler: Handler): CheckBox;
      addMouseMoveHandler(handler: Handler): CheckBox;
      addMouseOutHandler(handler: Handler): CheckBox;
      addMouseOverHandler(handler: Handler): CheckBox;
      addMouseUpHandler(handler: Handler): CheckBox;
      addMouseWheelHandler(handler: Handler): CheckBox;
      addStyleDependentName(styleName: string): CheckBox;
      addStyleName(styleName: string): CheckBox;
      addValueChangeHandler(handler: Handler): CheckBox;
      getId(): string;
      getTag(): string;
      getType(): string;
      setAccessKey(accessKey: Char): CheckBox;
      setEnabled(enabled: boolean): CheckBox;
      setFocus(focus: boolean): CheckBox;
      setFormValue(formValue: string): CheckBox;
      setHTML(html: string): CheckBox;
      setHeight(height: string): CheckBox;
      setId(id: string): CheckBox;
      setLayoutData(layout: Object): CheckBox;
      setName(name: string): CheckBox;
      setPixelSize(width: Integer, height: Integer): CheckBox;
      setSize(width: string, height: string): CheckBox;
      setStyleAttribute(attribute: string, value: string): CheckBox;
      setStyleAttributes(attributes: Object): CheckBox;
      setStyleName(styleName: string): CheckBox;
      setStylePrimaryName(styleName: string): CheckBox;
      setTabIndex(index: Integer): CheckBox;
      setTag(tag: string): CheckBox;
      setText(text: string): CheckBox;
      setTitle(title: string): CheckBox;
      setValue(value: boolean): CheckBox;
      setValue(value: boolean, fireEvents: boolean): CheckBox;
      setVisible(visible: boolean): CheckBox;
      setWidth(width: string): CheckBox;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * An event handler that runs in the user's browser without needing a call back to the server.
     *  These will, in general, run much faster than ServerHandlers but they are also more
     *  limited in what they can do.
     *
     *  Any method that accepts a "Handler" parameter can accept a ClientHandler.
     *
     *  If you set validators on a ClientHandler, they will be checked before the handler performs its
     *  actions. The actions will only be performed if the validators succeed.
     *
     *  If you have multiple ClientHandlers for the same event on the same widget, they will perform
     *  their actions in the order that they were added.
     *
     *  An example of using client handlers:
     *
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        var button = app.createButton("Say Hello");
     *
     *        // Create a label with the "Hello World!" text and hide it for now
     *        var label = app.createLabel("Hello World!").setVisible(false);
     *
     *        // Create a new handler that does not require the server.
     *        // We give the handler two actions to perform on different targets.
     *        // The first action disables the widget that invokes the handler
     *        // and the second displays the label.
     *        var handler = app.createClientHandler()
     *          .forEventSource().setEnabled(false)
     *          .forTargets(label).setVisible(true);
     *
     *        // Add our new handler to be invoked when the button is clicked
     *        button.addClickHandler(handler);
     *
     *        app.add(button);
     *        app.add(label);
     *        return app;
     *      }
     */
    export interface ClientHandler {
      forEventSource(): ClientHandler;
      forTargets(...widgets: Object[]): ClientHandler;
      getId(): string;
      getTag(): string;
      getType(): string;
      setEnabled(enabled: boolean): ClientHandler;
      setHTML(html: string): ClientHandler;
      setId(id: string): ClientHandler;
      setStyleAttribute(row: Integer, column: Integer, attribute: string, value: string): ClientHandler;
      setStyleAttribute(attribute: string, value: string): ClientHandler;
      setStyleAttributes(row: Integer, column: Integer, attributes: Object): ClientHandler;
      setStyleAttributes(attributes: Object): ClientHandler;
      setTag(tag: string): ClientHandler;
      setText(text: string): ClientHandler;
      setValue(value: boolean): ClientHandler;
      setVisible(visible: boolean): ClientHandler;
      validateEmail(widget: Widget): ClientHandler;
      validateInteger(widget: Widget): ClientHandler;
      validateLength(widget: Widget, min: Integer, max: Integer): ClientHandler;
      validateMatches(widget: Widget, pattern: string): ClientHandler;
      validateMatches(widget: Widget, pattern: string, flags: string): ClientHandler;
      validateNotEmail(widget: Widget): ClientHandler;
      validateNotInteger(widget: Widget): ClientHandler;
      validateNotLength(widget: Widget, min: Integer, max: Integer): ClientHandler;
      validateNotMatches(widget: Widget, pattern: string): ClientHandler;
      validateNotMatches(widget: Widget, pattern: string, flags: string): ClientHandler;
      validateNotNumber(widget: Widget): ClientHandler;
      validateNotOptions(widget: Widget, options: String[]): ClientHandler;
      validateNotRange(widget: Widget, min: Number, max: Number): ClientHandler;
      validateNotSum(widgets: Widget[], sum: Integer): ClientHandler;
      validateNumber(widget: Widget): ClientHandler;
      validateOptions(widget: Widget, options: String[]): ClientHandler;
      validateRange(widget: Widget, min: Number, max: Number): ClientHandler;
      validateSum(widgets: Widget[], sum: Integer): ClientHandler;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A generic component object.
     * Implementing classes
     *
     * NameBrief description
     *
     * AbsolutePanelAn absolute panel positions all of its children absolutely, allowing them to overlap.
     *
     * AnchorA widget that represents a simple <a> element.
     *
     * ButtonA standard push-button widget.
     *
     * CaptionPanelA panel that wraps its contents in a border with a caption that appears in the upper left
     *  corner of the border.
     *
     * ChartA Chart object, which can be embedded into documents, UI elements, or used as a static image.
     *
     * CheckBoxA standard check box widget.
     *
     * ClientHandlerAn event handler that runs in the user's browser without needing a call back to the server.
     *
     * ControlA user interface control object, that drives the data displayed by a DashboardPanel.
     *
     * DashboardPanelA dashboard is a visual structure that enables the organization and management
     *  of multiple charts that share the same underlying data.
     *
     * DateBoxA text box that shows a DatePicker when the user focuses on it.
     *
     * DatePickerA date picker widget.
     *
     * DecoratedStackPanelA StackPanel that wraps each item in a 2x3 grid (six box), which allows users to add
     *  rounded corners.
     *
     * DecoratedTabBarA TabBar that wraps each tab in a 2x3 grid (six box), which allows users to add rounded corners.
     *
     * DecoratedTabPanelA TabPanel that uses a DecoratedTabBar with rounded corners.
     *
     * DecoratorPanelA SimplePanel that wraps its contents in stylized boxes, which can be used to add rounded
     *  corners to a Widget.
     *
     * DialogBoxA form of popup that has a caption area at the top and can be dragged by the
     *  user.
     *
     * DocsListDialogA "file-open" dialog for Google Drive.
     *
     * EmbeddedChartRepresents a chart that has been embedded into a Spreadsheet.
     *
     * FileUploadA widget that wraps the HTML <input type='file'> element.
     *
     * FlexTableA flexible table that creates cells on demand.
     *
     * FlowPanelA panel that formats its child widgets using the default HTML layout behavior.
     *
     * FocusPanelA simple panel that makes its contents focusable, and adds the ability to catch mouse and
     *  keyboard events.
     *
     * FormPanelA panel that wraps its contents in an HTML <FORM> element.
     *
     * GridA rectangular grid that can contain text, html, or a child widget within its cells.
     *
     * HTMLA widget that contains arbitrary text, which is interpreted as HTML.
     *
     * HandlerBase interface for client and server handlers.
     *
     * HiddenRepresents a hidden field for storing data in the user's browser that can be passed back to a
     *  handler as a "callback element".
     *
     * HorizontalPanelA panel that lays all of its widgets out in a single horizontal column.
     *
     * ImageA widget that displays the image at a given URL.
     *
     * InlineLabelA widget that contains arbitrary text, not interpreted as HTML.
     *
     * LabelA widget that contains arbitrary text, not interpreted as HTML.
     *
     * ListBoxA widget that presents a list of choices to the user, either as a list box or
     *  as a drop-down list.
     *
     * MenuBarA standard menu bar widget.
     *
     * MenuItemAn entry in a MenuBar.
     *
     * MenuItemSeparatorA separator that can be placed in a MenuBar.
     *
     * PasswordTextBoxA text box that visually masks its input to prevent eavesdropping.
     *
     * PopupPanelA panel that can "pop up" over other widgets.
     *
     * PushButtonA normal push button with custom styling.
     *
     * RadioButtonA mutually-exclusive selection radio button widget.
     *
     * ResetButtonA standard push-button widget which will automatically reset its enclosing FormPanel if
     *  any.
     *
     * ScrollPanelA panel that wraps its contents in a scrollable element.
     *
     * ServerHandlerAn event handler that runs on the server.
     *
     * SimpleCheckBoxA simple checkbox widget, with no label.
     *
     * SimplePanelA panel that can contain only one widget.
     *
     * SimpleRadioButtonA simple radio button widget, with no label.
     *
     * SplitLayoutPanelA panel that adds user-positioned splitters between each of its child widgets.
     *
     * StackPanelA panel that stacks its children vertically, displaying only one at a time,
     *  with a header for each child which the user can click to display.
     *
     * SubmitButtonA standard push-button widget which will automatically submit its enclosing FormPanel if
     *  any.
     *
     * SuggestBoxA SuggestBox is a text box or text area which displays a
     *  pre-configured set of selections that match the user's input.
     *
     * TabBarA horizontal bar of folder-style tabs, most commonly used as part of a TabPanel.
     *
     * TabPanelA panel that represents a tabbed set of pages, each of which contains another
     *  widget.
     *
     * TextAreaA text box that allows multiple lines of text to be entered.
     *
     * TextBoxA standard single-line text box.
     *
     * ToggleButtonA ToggleButton is a stylish stateful button which allows the
     *  user to toggle between up and down states.
     *
     * TreeA standard hierarchical tree widget.
     *
     * TreeItemAn item that can be contained within a Tree.
     *
     * VerticalPanelA panel that lays all of its widgets out in a single vertical column.
     *
     * WidgetBase interface for UiApp widgets.
     */
    export interface Component {
      getId(): string;
      getType(): string;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A text box that shows a DatePicker when the user focuses on it.
     *
     *  Here is an example of how to use this widget:
     *
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        var handler = app.createServerHandler("change");
     *        var dateBox = app.createDateBox().addValueChangeHandler(handler).setId("datebox");
     *        app.add(dateBox);
     *        return app;
     *      }
     *
     *      function change(eventInfo) {
     *        var app = UiApp.getActiveApplication();
     *        app.add(app.createLabel("The value of the date box changed to " +
     *            eventInfo.parameter.datebox));
     *         return app;
     *       }
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the DateBox documentation here.
     */
    export interface DateBox {
      addStyleDependentName(styleName: string): DateBox;
      addStyleName(styleName: string): DateBox;
      addValueChangeHandler(handler: Handler): DateBox;
      getId(): string;
      getTag(): string;
      getType(): string;
      hideDatePicker(): DateBox;
      setAccessKey(accessKey: Char): DateBox;
      setEnabled(enabled: boolean): DateBox;
      setFireEventsForInvalid(fireEvents: boolean): DateBox;
      setFocus(focus: boolean): DateBox;
      setFormat(dateTimeFormat: DateTimeFormat): DateBox;
      setHeight(height: string): DateBox;
      setId(id: string): DateBox;
      setLayoutData(layout: Object): DateBox;
      setName(name: string): DateBox;
      setPixelSize(width: Integer, height: Integer): DateBox;
      setSize(width: string, height: string): DateBox;
      setStyleAttribute(attribute: string, value: string): DateBox;
      setStyleAttributes(attributes: Object): DateBox;
      setStyleName(styleName: string): DateBox;
      setStylePrimaryName(styleName: string): DateBox;
      setTabIndex(index: Integer): DateBox;
      setTag(tag: string): DateBox;
      setTitle(title: string): DateBox;
      setValue(date: Date): DateBox;
      setVisible(visible: boolean): DateBox;
      setWidth(width: string): DateBox;
      showDatePicker(): DateBox;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A date picker widget.
     *
     *  Here is an example of how to use this widget:
     *
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        var handler = app.createServerHandler("change");
     *        var picker = app.createDatePicker().addValueChangeHandler(handler).setId("picker");
     *        app.add(picker);
     *        return app;
     *      }
     *
     *      function change(eventInfo) {
     *        var app = UiApp.getActiveApplication();
     *        app.add(app.createLabel("The value of the date picker changed to " +
     *            eventInfo.parameter.picker));
     *         return app;
     *       }
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the DatePicker documentation here.
     */
    export interface DatePicker {
      addStyleDependentName(styleName: string): DatePicker;
      addStyleName(styleName: string): DatePicker;
      addValueChangeHandler(handler: Handler): DatePicker;
      getId(): string;
      getTag(): string;
      getType(): string;
      setCurrentMonth(date: Date): DatePicker;
      setHeight(height: string): DatePicker;
      setId(id: string): DatePicker;
      setLayoutData(layout: Object): DatePicker;
      setName(name: string): DatePicker;
      setPixelSize(width: Integer, height: Integer): DatePicker;
      setSize(width: string, height: string): DatePicker;
      setStyleAttribute(attribute: string, value: string): DatePicker;
      setStyleAttributes(attributes: Object): DatePicker;
      setStyleName(styleName: string): DatePicker;
      setStylePrimaryName(styleName: string): DatePicker;
      setTag(tag: string): DatePicker;
      setTitle(title: string): DatePicker;
      setValue(date: Date): DatePicker;
      setVisible(visible: boolean): DatePicker;
      setWidth(width: string): DatePicker;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * Date and time format constants for widgets such as
     *  DateBox.
     *
     *  These correspond to the predefined constants from the Google Web Toolkit. You can read
     *  more about these constants
     *  here.
     */
    export enum DateTimeFormat { ISO_8601, RFC_2822, DATE_FULL, DATE_LONG, DATE_MEDIUM, DATE_SHORT, TIME_FULL, TIME_LONG, TIME_MEDIUM, TIME_SHORT, DATE_TIME_FULL, DATE_TIME_LONG, DATE_TIME_MEDIUM, DATE_TIME_SHORT, DAY, HOUR_MINUTE, HOUR_MINUTE_SECOND, HOUR24_MINUTE, HOUR24_MINUTE_SECOND, MINUTE_SECOND, MONTH, MONTH_ABBR, MONTH_ABBR_DAY, MONTH_DAY, MONTH_NUM_DAY, MONTH_WEEKDAY_DAY, YEAR, YEAR_MONTH, YEAR_MONTH_ABBR, YEAR_MONTH_ABBR_DAY, YEAR_MONTH_DAY, YEAR_MONTH_NUM, YEAR_MONTH_NUM_DAY, YEAR_MONTH_WEEKDAY_DAY, YEAR_QUARTER, YEAR_QUARTER_ABBR }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A StackPanel that wraps each item in a 2x3 grid (six box), which allows users to add
     *  rounded corners.
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the DecoratedStackPanel documentation here.
     */
    export interface DecoratedStackPanel {
      add(widget: Widget): DecoratedStackPanel;
      add(widget: Widget, text: string): DecoratedStackPanel;
      add(widget: Widget, text: string, asHtml: boolean): DecoratedStackPanel;
      addStyleDependentName(styleName: string): DecoratedStackPanel;
      addStyleName(styleName: string): DecoratedStackPanel;
      clear(): DecoratedStackPanel;
      getId(): string;
      getTag(): string;
      getType(): string;
      remove(index: Integer): DecoratedStackPanel;
      remove(widget: Widget): DecoratedStackPanel;
      setHeight(height: string): DecoratedStackPanel;
      setId(id: string): DecoratedStackPanel;
      setLayoutData(layout: Object): DecoratedStackPanel;
      setPixelSize(width: Integer, height: Integer): DecoratedStackPanel;
      setSize(width: string, height: string): DecoratedStackPanel;
      setStackText(index: Integer, text: string): DecoratedStackPanel;
      setStackText(index: Integer, text: string, asHtml: boolean): DecoratedStackPanel;
      setStyleAttribute(attribute: string, value: string): DecoratedStackPanel;
      setStyleAttributes(attributes: Object): DecoratedStackPanel;
      setStyleName(styleName: string): DecoratedStackPanel;
      setStylePrimaryName(styleName: string): DecoratedStackPanel;
      setTag(tag: string): DecoratedStackPanel;
      setTitle(title: string): DecoratedStackPanel;
      setVisible(visible: boolean): DecoratedStackPanel;
      setWidth(width: string): DecoratedStackPanel;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A TabBar that wraps each tab in a 2x3 grid (six box), which allows users to add rounded corners.
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the DecoratedTabBar documentation here.
     */
    export interface DecoratedTabBar {
      addBeforeSelectionHandler(handler: Handler): DecoratedTabBar;
      addSelectionHandler(handler: Handler): DecoratedTabBar;
      addStyleDependentName(styleName: string): DecoratedTabBar;
      addStyleName(styleName: string): DecoratedTabBar;
      addTab(title: string): DecoratedTabBar;
      addTab(title: string, asHtml: boolean): DecoratedTabBar;
      addTab(widget: Widget): DecoratedTabBar;
      getId(): string;
      getTag(): string;
      getType(): string;
      selectTab(index: Integer): DecoratedTabBar;
      setHeight(height: string): DecoratedTabBar;
      setId(id: string): DecoratedTabBar;
      setLayoutData(layout: Object): DecoratedTabBar;
      setPixelSize(width: Integer, height: Integer): DecoratedTabBar;
      setSize(width: string, height: string): DecoratedTabBar;
      setStyleAttribute(attribute: string, value: string): DecoratedTabBar;
      setStyleAttributes(attributes: Object): DecoratedTabBar;
      setStyleName(styleName: string): DecoratedTabBar;
      setStylePrimaryName(styleName: string): DecoratedTabBar;
      setTabEnabled(index: Integer, enabled: boolean): DecoratedTabBar;
      setTabText(index: Integer, text: string): DecoratedTabBar;
      setTag(tag: string): DecoratedTabBar;
      setTitle(title: string): DecoratedTabBar;
      setVisible(visible: boolean): DecoratedTabBar;
      setWidth(width: string): DecoratedTabBar;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A TabPanel that uses a DecoratedTabBar with rounded corners.
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the DecoratedTabPanel documentation here.
     */
    export interface DecoratedTabPanel {
      add(widget: Widget): DecoratedTabPanel;
      add(widget: Widget, text: string): DecoratedTabPanel;
      add(widget: Widget, text: string, asHtml: boolean): DecoratedTabPanel;
      add(widget: Widget, tabWidget: Widget): DecoratedTabPanel;
      addBeforeSelectionHandler(handler: Handler): DecoratedTabPanel;
      addSelectionHandler(handler: Handler): DecoratedTabPanel;
      addStyleDependentName(styleName: string): DecoratedTabPanel;
      addStyleName(styleName: string): DecoratedTabPanel;
      getId(): string;
      getTag(): string;
      getType(): string;
      selectTab(index: Integer): DecoratedTabPanel;
      setAnimationEnabled(animationEnabled: boolean): DecoratedTabPanel;
      setHeight(height: string): DecoratedTabPanel;
      setId(id: string): DecoratedTabPanel;
      setLayoutData(layout: Object): DecoratedTabPanel;
      setPixelSize(width: Integer, height: Integer): DecoratedTabPanel;
      setSize(width: string, height: string): DecoratedTabPanel;
      setStyleAttribute(attribute: string, value: string): DecoratedTabPanel;
      setStyleAttributes(attributes: Object): DecoratedTabPanel;
      setStyleName(styleName: string): DecoratedTabPanel;
      setStylePrimaryName(styleName: string): DecoratedTabPanel;
      setTag(tag: string): DecoratedTabPanel;
      setTitle(title: string): DecoratedTabPanel;
      setVisible(visible: boolean): DecoratedTabPanel;
      setWidth(width: string): DecoratedTabPanel;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A SimplePanel that wraps its contents in stylized boxes, which can be used to add rounded
     *  corners to a Widget.
     *
     *  Note that this panel can contain at most one direct child widget. To add more children, make the
     *  child of this panel a different panel that can contain more than one child.
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the DecoratorPanel documentation here.
     */
    export interface DecoratorPanel {
      add(widget: Widget): DecoratorPanel;
      addStyleDependentName(styleName: string): DecoratorPanel;
      addStyleName(styleName: string): DecoratorPanel;
      clear(): DecoratorPanel;
      getId(): string;
      getTag(): string;
      getType(): string;
      setHeight(height: string): DecoratorPanel;
      setId(id: string): DecoratorPanel;
      setLayoutData(layout: Object): DecoratorPanel;
      setPixelSize(width: Integer, height: Integer): DecoratorPanel;
      setSize(width: string, height: string): DecoratorPanel;
      setStyleAttribute(attribute: string, value: string): DecoratorPanel;
      setStyleAttributes(attributes: Object): DecoratorPanel;
      setStyleName(styleName: string): DecoratorPanel;
      setStylePrimaryName(styleName: string): DecoratorPanel;
      setTag(tag: string): DecoratorPanel;
      setTitle(title: string): DecoratorPanel;
      setVisible(visible: boolean): DecoratorPanel;
      setWidget(widget: Widget): DecoratorPanel;
      setWidth(width: string): DecoratorPanel;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A form of popup that has a caption area at the top and can be dragged by the
     *  user. Unlike a PopupPanel, calls to setWidth(width) and
     *  setHeight(height) will set the width and height of the dialog box
     *  itself, even if a widget has not been added as yet.
     *
     *  In general it's not recommended to add this panel as a child of another widget or of the app
     *  as that will make it behave like any other inline panel and not act as a popup. Instead, create
     *  the popup and then use its show() and hide() methods to show and hide it. See
     *  the example below.
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the DialogBox documentation here.
     *
     *  Here is an example showing how to use the dialog box widget:
     *
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        // Create a dialog box.
     *        var dialog = app.createDialogBox();
     *        // Set the position and dimensions.
     *        dialog.setPopupPosition(100, 100).setSize(500, 500);
     *        // Show the dialog. Note that it does not have to be "added" to the UiInstance.
     *        dialog.show();
     *        return app;
     *      }
     */
    export interface DialogBox {
      add(widget: Widget): DialogBox;
      addAutoHidePartner(partner: Component): DialogBox;
      addCloseHandler(handler: Handler): DialogBox;
      addStyleDependentName(styleName: string): DialogBox;
      addStyleName(styleName: string): DialogBox;
      clear(): DialogBox;
      getId(): string;
      getTag(): string;
      getType(): string;
      hide(): DialogBox;
      setAnimationEnabled(animationEnabled: boolean): DialogBox;
      setAutoHideEnabled(enabled: boolean): DialogBox;
      setGlassEnabled(enabled: boolean): DialogBox;
      setGlassStyleName(styleName: string): DialogBox;
      setHTML(html: string): DialogBox;
      setHeight(height: string): DialogBox;
      setId(id: string): DialogBox;
      setLayoutData(layout: Object): DialogBox;
      setModal(modal: boolean): DialogBox;
      setPixelSize(width: Integer, height: Integer): DialogBox;
      setPopupPosition(left: Integer, top: Integer): DialogBox;
      setPopupPositionAndShow(a: Component): DialogBox;
      setPreviewingAllNativeEvents(previewing: boolean): DialogBox;
      setSize(width: string, height: string): DialogBox;
      setStyleAttribute(attribute: string, value: string): DialogBox;
      setStyleAttributes(attributes: Object): DialogBox;
      setStyleName(styleName: string): DialogBox;
      setStylePrimaryName(styleName: string): DialogBox;
      setTag(tag: string): DialogBox;
      setText(text: string): DialogBox;
      setTitle(title: string): DialogBox;
      setVisible(visible: boolean): DialogBox;
      setWidget(widget: Widget): DialogBox;
      setWidth(width: string): DialogBox;
      show(): DialogBox;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A "file-open" dialog for Google Drive. Unlike most UiApp objects, DocsListDialog
     *  should not be added to the UiInstance. The
     *  example below shows how to display a DocsListDialog in the
     *  new version of Google Sheets.
     *
     * Note that HTML service offers a similar but superior
     *  feature, Google Picker. In almost all
     *  cases, using Google Picker is preferable.
     *
     *      function onOpen() {
     *        SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
     *            .createMenu('Custom Menu')
     *            .addItem('Select file', 'showDialog')
     *            .addToUi();
     *      }
     *
     *      function showDialog() {
     *        // Dummy call to DriveApp to ensure the OAuth dialog requests Google Drive scope, so that the
     *        // getOAuthToken() call below returns a token with the necessary permissions.
     *        DriveApp.getRootFolder();
     *
     *        var app = UiApp.createApplication()
     *            .setWidth(570)
     *            .setHeight(352);
     *
     *        var serverHandler = app.createServerHandler('pickerHandler');
     *
     *        app.createDocsListDialog()
     *           .addCloseHandler(serverHandler)
     *           .addSelectionHandler(serverHandler)
     *           .setOAuthToken(ScriptApp.getOAuthToken())
     *           .showDocsPicker();
     *
     *        SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
     *           .showModalDialog(app,' ');
     *      }
     *
     *      function pickerHandler(e) {
     *        var action = e.parameter.eventType;
     *        var app = UiApp.getActiveApplication();
     *
     *        if (action == 'selection') {
     *          var doc = e.parameter.items[0];
     *          var id = doc.id;
     *          var name = doc.name;
     *          var url = doc.url;
     *          app.add(app.createLabel('You picked '));
     *          app.add(app.createAnchor(name, url));
     *          app.add(app.createLabel('(ID: ' + id + ').'));
     *        } else if (action == 'close') {
     *          app.add(app.createLabel('You clicked "Cancel".'));
     *        }
     *
     *        return app;
     *      }
     */
    export interface DocsListDialog {
      addCloseHandler(handler: Handler): DocsListDialog;
      addSelectionHandler(handler: Handler): DocsListDialog;
      addView(fileType: FileType): DocsListDialog;
      getId(): string;
      getType(): string;
      setDialogTitle(title: string): DocsListDialog;
      setHeight(height: Integer): DocsListDialog;
      setInitialView(fileType: FileType): DocsListDialog;
      setMultiSelectEnabled(multiSelectEnabled: boolean): DocsListDialog;
      setOAuthToken(oAuthToken: string): DocsListDialog;
      setWidth(width: Integer): DocsListDialog;
      showDocsPicker(): DocsListDialog;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * File type constants for the
     *  DocsListDialog.
     */
    export enum FileType { ALL, ALL_DOCS, DRAWINGS, DOCUMENTS, SPREADSHEETS, FOLDERS, RECENTLY_PICKED, PRESENTATIONS, FORMS, PHOTOS, PHOTO_ALBUMS, PDFS }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A widget that wraps the HTML <input type='file'> element. This widget
     *  must be used within a FormPanel.
     *
     *  The result of a FileUpload is a "Blob" which can we used in various other functions. Below is an
     *  example of how to use FileUpload.
     *
     *      function doGet(e) {
     *
     *      var app = UiApp.createApplication().setTitle("Upload CSV to Sheet");
     *        var formContent = app.createVerticalPanel();
     *        formContent.add(app.createFileUpload().setName('thefile'));
     *        formContent.add(app.createSubmitButton());
     *        var form = app.createFormPanel();
     *        form.add(formContent);
     *        app.add(form);
     *        return app;
     *      }
     *
     *      function doPost(e) {
     *        // data returned is a blob for FileUpload widget
     *        var fileBlob = e.parameter.thefile;
     *        var doc = DocsList.createFile(fileBlob);
     *      }
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the FileUpload documentation here.
     */
    export interface FileUpload {
      addChangeHandler(handler: Handler): FileUpload;
      addStyleDependentName(styleName: string): FileUpload;
      addStyleName(styleName: string): FileUpload;
      getId(): string;
      getTag(): string;
      getType(): string;
      setEnabled(enabled: boolean): FileUpload;
      setHeight(height: string): FileUpload;
      setId(id: string): FileUpload;
      setLayoutData(layout: Object): FileUpload;
      setName(name: string): FileUpload;
      setPixelSize(width: Integer, height: Integer): FileUpload;
      setSize(width: string, height: string): FileUpload;
      setStyleAttribute(attribute: string, value: string): FileUpload;
      setStyleAttributes(attributes: Object): FileUpload;
      setStyleName(styleName: string): FileUpload;
      setStylePrimaryName(styleName: string): FileUpload;
      setTag(tag: string): FileUpload;
      setTitle(title: string): FileUpload;
      setVisible(visible: boolean): FileUpload;
      setWidth(width: string): FileUpload;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A flexible table that creates cells on demand. It can be jagged (that is,
     *  each row can contain a different number of cells) and individual cells can be
     *  set to span multiple rows or columns.
     *
     *  Here is an example of how to use this widget:
     *
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        app.add(app.createFlexTable()
     *          .insertRow(0).insertRow(0).insertRow(0)
     *          .insertCell(0, 0)
     *          .insertCell(0, 1)
     *          .insertCell(0, 2)
     *          .insertCell(1, 0)
     *          .insertCell(1, 1)
     *          .insertCell(2, 0)
     *          .setBorderWidth(5).setCellPadding(10).setCellSpacing(10));
     *        return app;
     *      }
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the FlexTable documentation here.
     */
    export interface FlexTable {
      addCell(row: Integer): FlexTable;
      addClickHandler(handler: Handler): FlexTable;
      addStyleDependentName(styleName: string): FlexTable;
      addStyleName(styleName: string): FlexTable;
      clear(): FlexTable;
      getId(): string;
      getTag(): string;
      getType(): string;
      insertCell(beforeRow: Integer, beforeColumn: Integer): FlexTable;
      insertRow(beforeRow: Integer): FlexTable;
      removeCell(row: Integer, column: Integer): FlexTable;
      removeCells(row: Integer, column: Integer, num: Integer): FlexTable;
      removeRow(row: Integer): FlexTable;
      setBorderWidth(width: Integer): FlexTable;
      setCellPadding(padding: Integer): FlexTable;
      setCellSpacing(spacing: Integer): FlexTable;
      setColumnStyleAttribute(column: Integer, attribute: string, value: string): FlexTable;
      setColumnStyleAttributes(column: Integer, attributes: Object): FlexTable;
      setHeight(height: string): FlexTable;
      setId(id: string): FlexTable;
      setLayoutData(layout: Object): FlexTable;
      setPixelSize(width: Integer, height: Integer): FlexTable;
      setRowStyleAttribute(row: Integer, attribute: string, value: string): FlexTable;
      setRowStyleAttributes(row: Integer, attributes: Object): FlexTable;
      setSize(width: string, height: string): FlexTable;
      setStyleAttribute(row: Integer, column: Integer, attribute: string, value: string): FlexTable;
      setStyleAttribute(attribute: string, value: string): FlexTable;
      setStyleAttributes(row: Integer, column: Integer, attributes: Object): FlexTable;
      setStyleAttributes(attributes: Object): FlexTable;
      setStyleName(styleName: string): FlexTable;
      setStylePrimaryName(styleName: string): FlexTable;
      setTag(tag: string): FlexTable;
      setText(row: Integer, column: Integer, text: string): FlexTable;
      setTitle(title: string): FlexTable;
      setVisible(visible: boolean): FlexTable;
      setWidget(row: Integer, column: Integer, widget: Widget): FlexTable;
      setWidth(width: string): FlexTable;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A panel that formats its child widgets using the default HTML layout behavior.
     *
     *  Here is an example of how to use this widget:
     *
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        var panel = app.createFlowPanel();
     *        panel.add(app.createButton("button 1"));
     *        panel.add(app.createButton("button 2"));
     *        app.add(panel);
     *        return app;
     *      }
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the FlowPanel documentation here.
     */
    export interface FlowPanel {
      add(widget: Widget): FlowPanel;
      addStyleDependentName(styleName: string): FlowPanel;
      addStyleName(styleName: string): FlowPanel;
      clear(): FlowPanel;
      getId(): string;
      getTag(): string;
      getType(): string;
      insert(widget: Widget, beforeIndex: Integer): FlowPanel;
      remove(index: Integer): FlowPanel;
      remove(widget: Widget): FlowPanel;
      setHeight(height: string): FlowPanel;
      setId(id: string): FlowPanel;
      setLayoutData(layout: Object): FlowPanel;
      setPixelSize(width: Integer, height: Integer): FlowPanel;
      setSize(width: string, height: string): FlowPanel;
      setStyleAttribute(attribute: string, value: string): FlowPanel;
      setStyleAttributes(attributes: Object): FlowPanel;
      setStyleName(styleName: string): FlowPanel;
      setStylePrimaryName(styleName: string): FlowPanel;
      setTag(tag: string): FlowPanel;
      setTitle(title: string): FlowPanel;
      setVisible(visible: boolean): FlowPanel;
      setWidth(width: string): FlowPanel;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A simple panel that makes its contents focusable, and adds the ability to catch mouse and
     *  keyboard events.
     *
     *  Note that this panel can contain at most one direct child widget. To add more children, make the
     *  child of this panel a different panel that can contain more than one child.
     *
     *  Here is an example of how to use this widget:
     *
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        var focus = app.createFocusPanel();
     *        var flow = app.createFlowPanel();
     *        flow.add(app.createButton("button 1"));
     *        flow.add(app.createButton("button 2"));
     *        focus.add(flow);
     *        app.add(focus);
     *        return app;
     *      }
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the FocusPanel documentation here.
     */
    export interface FocusPanel {
      add(widget: Widget): FocusPanel;
      addBlurHandler(handler: Handler): FocusPanel;
      addClickHandler(handler: Handler): FocusPanel;
      addFocusHandler(handler: Handler): FocusPanel;
      addKeyDownHandler(handler: Handler): FocusPanel;
      addKeyPressHandler(handler: Handler): FocusPanel;
      addKeyUpHandler(handler: Handler): FocusPanel;
      addMouseDownHandler(handler: Handler): FocusPanel;
      addMouseMoveHandler(handler: Handler): FocusPanel;
      addMouseOutHandler(handler: Handler): FocusPanel;
      addMouseOverHandler(handler: Handler): FocusPanel;
      addMouseUpHandler(handler: Handler): FocusPanel;
      addMouseWheelHandler(handler: Handler): FocusPanel;
      addStyleDependentName(styleName: string): FocusPanel;
      addStyleName(styleName: string): FocusPanel;
      clear(): FocusPanel;
      getId(): string;
      getTag(): string;
      getType(): string;
      setAccessKey(accessKey: Char): FocusPanel;
      setFocus(focus: boolean): FocusPanel;
      setHeight(height: string): FocusPanel;
      setId(id: string): FocusPanel;
      setLayoutData(layout: Object): FocusPanel;
      setPixelSize(width: Integer, height: Integer): FocusPanel;
      setSize(width: string, height: string): FocusPanel;
      setStyleAttribute(attribute: string, value: string): FocusPanel;
      setStyleAttributes(attributes: Object): FocusPanel;
      setStyleName(styleName: string): FocusPanel;
      setStylePrimaryName(styleName: string): FocusPanel;
      setTabIndex(index: Integer): FocusPanel;
      setTag(tag: string): FocusPanel;
      setTitle(title: string): FocusPanel;
      setVisible(visible: boolean): FocusPanel;
      setWidget(widget: Widget): FocusPanel;
      setWidth(width: string): FocusPanel;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A panel that wraps its contents in an HTML <FORM> element.
     *
     *  This panel can be used with a SubmitButton to post form values to the server. All
     *  children of this panel (direct, or even children of sub-panels) that have a setName function
     *  and have been given a name will have their values sent to the server when the form is submitted.
     *  The submit can be handled in the special "doPost" function, as shown in the example.
     *
     *  Note that this panel can contain at most one direct child widget. To add more children, make the
     *  child of this panel a different panel that can contain more than one child.
     *
     *  Here is an example of how to use this widget:
     *
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        var form = app.createFormPanel();
     *        var flow = app.createFlowPanel();
     *        flow.add(app.createTextBox().setName("textBox"));
     *        flow.add(app.createListBox().setName("listBox").addItem("option 1").addItem("option 2"));
     *        flow.add(app.createSubmitButton("Submit"));
     *        form.add(flow);
     *        app.add(form);
     *        return app;
     *      }
     *
     *      function doPost(eventInfo) {
     *        var app = UiApp.getActiveApplication();
     *        app.add(app.createLabel("Form submitted. The text box's value was '" +
     *            eventInfo.parameter.textBox +
     *            "' and the list box's value was '" +
     *            eventInfo.parameter.listBox + "'"));
     *        return app;
     *      }
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the FormPanel documentation here.
     */
    export interface FormPanel {
      add(widget: Widget): FormPanel;
      addStyleDependentName(styleName: string): FormPanel;
      addStyleName(styleName: string): FormPanel;
      addSubmitCompleteHandler(handler: Handler): FormPanel;
      addSubmitHandler(handler: Handler): FormPanel;
      clear(): FormPanel;
      getId(): string;
      getTag(): string;
      getType(): string;
      setAction(action: string): FormPanel;
      setEncoding(encoding: string): FormPanel;
      setHeight(height: string): FormPanel;
      setId(id: string): FormPanel;
      setLayoutData(layout: Object): FormPanel;
      setMethod(method: string): FormPanel;
      setPixelSize(width: Integer, height: Integer): FormPanel;
      setSize(width: string, height: string): FormPanel;
      setStyleAttribute(attribute: string, value: string): FormPanel;
      setStyleAttributes(attributes: Object): FormPanel;
      setStyleName(styleName: string): FormPanel;
      setStylePrimaryName(styleName: string): FormPanel;
      setTag(tag: string): FormPanel;
      setTitle(title: string): FormPanel;
      setVisible(visible: boolean): FormPanel;
      setWidget(widget: Widget): FormPanel;
      setWidth(width: string): FormPanel;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A rectangular grid that can contain text, html, or a child widget within its cells. It must be
     *  resized explicitly to the desired number of rows and columns.
     *
     *  Here is an example of how to use this widget:
     *
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        app.add(app.createGrid(3, 3)
     *            .setBorderWidth(1)
     *            .setCellSpacing(10)
     *            .setCellPadding(10)
     *            .setText(0, 0, "X")
     *            .setText(1, 1, "X")
     *            .setText(2, 2, "X")
     *            .setText(0, 1, "O")
     *            .setText(0, 2, "O")
     *            .setStyleAttribute(0, 0, "color", "red")
     *            .setStyleAttribute(1, 1, "color", "red")
     *            .setStyleAttribute(2, 2, "color", "red")
     *            .setStyleAttribute(0, 1, "color", "blue")
     *            .setStyleAttribute(0, 2, "color", "blue"));
     *        return app;
     *      }
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the Grid documentation here.
     */
    export interface Grid {
      addClickHandler(handler: Handler): Grid;
      addStyleDependentName(styleName: string): Grid;
      addStyleName(styleName: string): Grid;
      clear(): Grid;
      getId(): string;
      getTag(): string;
      getType(): string;
      resize(rows: Integer, columns: Integer): Grid;
      setBorderWidth(width: Integer): Grid;
      setCellPadding(padding: Integer): Grid;
      setCellSpacing(spacing: Integer): Grid;
      setColumnStyleAttribute(column: Integer, attribute: string, value: string): Grid;
      setColumnStyleAttributes(column: Integer, attributes: Object): Grid;
      setHeight(height: string): Grid;
      setId(id: string): Grid;
      setLayoutData(layout: Object): Grid;
      setPixelSize(width: Integer, height: Integer): Grid;
      setRowStyleAttribute(row: Integer, attribute: string, value: string): Grid;
      setRowStyleAttributes(row: Integer, attributes: Object): Grid;
      setSize(width: string, height: string): Grid;
      setStyleAttribute(row: Integer, column: Integer, attribute: string, value: string): Grid;
      setStyleAttribute(attribute: string, value: string): Grid;
      setStyleAttributes(row: Integer, column: Integer, attributes: Object): Grid;
      setStyleAttributes(attributes: Object): Grid;
      setStyleName(styleName: string): Grid;
      setStylePrimaryName(styleName: string): Grid;
      setTag(tag: string): Grid;
      setText(row: Integer, column: Integer, text: string): Grid;
      setTitle(title: string): Grid;
      setVisible(visible: boolean): Grid;
      setWidget(row: Integer, column: Integer, widget: Widget): Grid;
      setWidth(width: string): Grid;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A widget that contains arbitrary text, which is interpreted as HTML.
     *
     *  Only basic HTML markup such as bold, italic, etc. are allowed; in particular, scripts will be
     *  stripped out completely.
     *
     *  Here is an example of how to use this widget:
     *
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        app.add(app.createHTML("<b>Hello World!</b>"));
     *        return app;
     *      }
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the HTML documentation here.
     */
    export interface HTML {
      addClickHandler(handler: Handler): HTML;
      addMouseDownHandler(handler: Handler): HTML;
      addMouseMoveHandler(handler: Handler): HTML;
      addMouseOutHandler(handler: Handler): HTML;
      addMouseOverHandler(handler: Handler): HTML;
      addMouseUpHandler(handler: Handler): HTML;
      addMouseWheelHandler(handler: Handler): HTML;
      addStyleDependentName(styleName: string): HTML;
      addStyleName(styleName: string): HTML;
      getId(): string;
      getTag(): string;
      getType(): string;
      setDirection(direction: Component): HTML;
      setHTML(html: string): HTML;
      setHeight(height: string): HTML;
      setHorizontalAlignment(horizontalAlignment: HorizontalAlignment): HTML;
      setId(id: string): HTML;
      setLayoutData(layout: Object): HTML;
      setPixelSize(width: Integer, height: Integer): HTML;
      setSize(width: string, height: string): HTML;
      setStyleAttribute(attribute: string, value: string): HTML;
      setStyleAttributes(attributes: Object): HTML;
      setStyleName(styleName: string): HTML;
      setStylePrimaryName(styleName: string): HTML;
      setTag(tag: string): HTML;
      setText(text: string): HTML;
      setTitle(title: string): HTML;
      setVisible(visible: boolean): HTML;
      setWidth(width: string): HTML;
      setWordWrap(wordWrap: boolean): HTML;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * Base interface for client and server handlers.
     * Implementing classes
     *
     * NameBrief description
     *
     * ClientHandlerAn event handler that runs in the user's browser without needing a call back to the server.
     *
     * ServerHandlerAn event handler that runs on the server.
     */
    export interface Handler {
      getId(): string;
      getTag(): string;
      getType(): string;
      setId(id: string): Handler;
      setTag(tag: string): Handler;
      validateEmail(widget: Widget): Handler;
      validateInteger(widget: Widget): Handler;
      validateLength(widget: Widget, min: Integer, max: Integer): Handler;
      validateMatches(widget: Widget, pattern: string): Handler;
      validateMatches(widget: Widget, pattern: string, flags: string): Handler;
      validateNotEmail(widget: Widget): Handler;
      validateNotInteger(widget: Widget): Handler;
      validateNotLength(widget: Widget, min: Integer, max: Integer): Handler;
      validateNotMatches(widget: Widget, pattern: string): Handler;
      validateNotMatches(widget: Widget, pattern: string, flags: string): Handler;
      validateNotNumber(widget: Widget): Handler;
      validateNotOptions(widget: Widget, options: String[]): Handler;
      validateNotRange(widget: Widget, min: Number, max: Number): Handler;
      validateNotSum(widgets: Widget[], sum: Integer): Handler;
      validateNumber(widget: Widget): Handler;
      validateOptions(widget: Widget, options: String[]): Handler;
      validateRange(widget: Widget, min: Number, max: Number): Handler;
      validateSum(widgets: Widget[], sum: Integer): Handler;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * Represents a hidden field for storing data in the user's browser that can be passed back to a
     *  handler as a "callback element".
     *
     *  Here is an example of how to use this widget:
     *
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        // Note that the name "appState" for callbacks, and the id "hidden" for
     *        // getting a reference to the widget, are not required to be the same.
     *        var hidden = app.createHidden("appState", "0").setId("hidden");
     *        app.add(hidden);
     *        var handler = app.createServerHandler("click").addCallbackElement(hidden);
     *        app.add(app.createButton("click me!", handler));
     *        app.add(app.createLabel("clicked 0 times").setId("label"));
     *        return app;
     *      }
     *
     *      function click(eventInfo) {
     *        var app = UiApp.createApplication();
     *        // We have the value of the hidden field because it was a callback element.
     *        var numClicks = Number(eventInfo.parameter.appState);
     *        numClicks++;
     *        // Just store the number as a string. We could actually store arbitrarily complex data
     *        // here using JSON.stringify() to turn a JavaScript object into a string to store, and
     *        // JSON.parse() to turn the string back into an object.
     *        app.getElementById("hidden").setValue(String(numClicks));
     *        app.getElementById("label").setText("clicked " + numClicks + " times");
     *        return app;
     *      }
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the Hidden documentation here.
     */
    export interface Hidden {
      addStyleDependentName(styleName: string): Hidden;
      addStyleName(styleName: string): Hidden;
      getId(): string;
      getTag(): string;
      getType(): string;
      setDefaultValue(value: string): Hidden;
      setHeight(height: string): Hidden;
      setID(id: string): Hidden;
      setId(id: string): Hidden;
      setLayoutData(layout: Object): Hidden;
      setName(name: string): Hidden;
      setPixelSize(width: Integer, height: Integer): Hidden;
      setSize(width: string, height: string): Hidden;
      setStyleAttribute(attribute: string, value: string): Hidden;
      setStyleAttributes(attributes: Object): Hidden;
      setStyleName(styleName: string): Hidden;
      setStylePrimaryName(styleName: string): Hidden;
      setTag(tag: string): Hidden;
      setTitle(title: string): Hidden;
      setValue(value: string): Hidden;
      setVisible(visible: boolean): Hidden;
      setWidth(width: string): Hidden;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * Horizontal alignment constants to use with setHorizontalAlignment methods in UiApp.
     */
    export enum HorizontalAlignment { LEFT, RIGHT, CENTER, DEFAULT, JUSTIFY, LOCALE_START, LOCALE_END }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A panel that lays all of its widgets out in a single horizontal column.
     *
     *  Here is an example of how to use this widget:
     *
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        var panel = app.createHorizontalPanel();
     *        panel.add(app.createButton("button 1"));
     *        panel.add(app.createButton("button 2"));
     *        app.add(panel);
     *        return app;
     *      }
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the HorizontalPanel documentation here.
     */
    export interface HorizontalPanel {
      add(widget: Widget): HorizontalPanel;
      addStyleDependentName(styleName: string): HorizontalPanel;
      addStyleName(styleName: string): HorizontalPanel;
      clear(): HorizontalPanel;
      getId(): string;
      getTag(): string;
      getType(): string;
      remove(index: Integer): HorizontalPanel;
      remove(widget: Widget): HorizontalPanel;
      setBorderWidth(width: Integer): HorizontalPanel;
      setCellHeight(widget: Widget, height: string): HorizontalPanel;
      setCellHorizontalAlignment(widget: Widget, horizontalAlignment: HorizontalAlignment): HorizontalPanel;
      setCellVerticalAlignment(widget: Widget, verticalAlignment: VerticalAlignment): HorizontalPanel;
      setCellWidth(widget: Widget, width: string): HorizontalPanel;
      setHeight(height: string): HorizontalPanel;
      setHorizontalAlignment(horizontalAlignment: HorizontalAlignment): HorizontalPanel;
      setId(id: string): HorizontalPanel;
      setLayoutData(layout: Object): HorizontalPanel;
      setPixelSize(width: Integer, height: Integer): HorizontalPanel;
      setSize(width: string, height: string): HorizontalPanel;
      setSpacing(spacing: Integer): HorizontalPanel;
      setStyleAttribute(attribute: string, value: string): HorizontalPanel;
      setStyleAttributes(attributes: Object): HorizontalPanel;
      setStyleName(styleName: string): HorizontalPanel;
      setStylePrimaryName(styleName: string): HorizontalPanel;
      setTag(tag: string): HorizontalPanel;
      setTitle(title: string): HorizontalPanel;
      setVerticalAlignment(verticalAlignment: VerticalAlignment): HorizontalPanel;
      setVisible(visible: boolean): HorizontalPanel;
      setWidth(width: string): HorizontalPanel;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A widget that displays the image at a given URL.
     *
     *  The image can be in 'unclipped' mode (the default) or 'clipped' mode.
     *  In clipped mode, a viewport is overlaid on top of the image so that a subset of the image will be
     *  displayed. In unclipped mode, there is no viewport - the entire image will be
     *  visible. Whether an image is in clipped or unclipped mode depends on how the
     *  image is constructed, and how it is transformed after construction. Methods
     *  will operate differently depending on the mode that the image is in. These
     *  differences are detailed in the documentation for each method.
     *
     *  Here is an example of how to use this widget:
     *
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        // The very first Google Doodle!
     *        app.add(app.createImage("http://www.google.com/logos/googleburn.jpg"));
     *        // Just the man in the middle
     *        app.add(app.createImage("http://www.google.com/logos/googleburn.jpg", 118, 0, 50, 106));
     *        return app;
     *      }
     *
     *  Due to browser-specific HTML constructions needed to achieve the clipping effect, certain CSS
     *  attributes, such as padding and background, may not work as expected when an image is in clipped
     *  mode. These limitations can usually be easily worked around by encapsulating the image in a
     *  container widget that can itself be styled.
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the Image documentation here.
     */
    export interface Image {
      addClickHandler(handler: Handler): Image;
      addErrorHandler(handler: Handler): Image;
      addLoadHandler(handler: Handler): Image;
      addMouseDownHandler(handler: Handler): Image;
      addMouseMoveHandler(handler: Handler): Image;
      addMouseOutHandler(handler: Handler): Image;
      addMouseOverHandler(handler: Handler): Image;
      addMouseUpHandler(handler: Handler): Image;
      addMouseWheelHandler(handler: Handler): Image;
      addStyleDependentName(styleName: string): Image;
      addStyleName(styleName: string): Image;
      getId(): string;
      getTag(): string;
      getType(): string;
      setHeight(height: string): Image;
      setId(id: string): Image;
      setLayoutData(layout: Object): Image;
      setPixelSize(width: Integer, height: Integer): Image;
      setResource(resource: Component): Image;
      setSize(width: string, height: string): Image;
      setStyleAttribute(attribute: string, value: string): Image;
      setStyleAttributes(attributes: Object): Image;
      setStyleName(styleName: string): Image;
      setStylePrimaryName(styleName: string): Image;
      setTag(tag: string): Image;
      setTitle(title: string): Image;
      setUrl(url: string): Image;
      setUrlAndVisibleRect(url: string, left: Integer, top: Integer, width: Integer, height: Integer): Image;
      setVisible(visible: boolean): Image;
      setVisibleRect(left: Integer, top: Integer, width: Integer, height: Integer): Image;
      setWidth(width: string): Image;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A widget that contains arbitrary text, not interpreted as HTML.
     *
     *  This widget uses a <span> element, causing it to be displayed with inline layout.
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the InlineLabel documentation here.
     */
    export interface InlineLabel {
      addClickHandler(handler: Handler): InlineLabel;
      addMouseDownHandler(handler: Handler): InlineLabel;
      addMouseMoveHandler(handler: Handler): InlineLabel;
      addMouseOutHandler(handler: Handler): InlineLabel;
      addMouseOverHandler(handler: Handler): InlineLabel;
      addMouseUpHandler(handler: Handler): InlineLabel;
      addMouseWheelHandler(handler: Handler): InlineLabel;
      addStyleDependentName(styleName: string): InlineLabel;
      addStyleName(styleName: string): InlineLabel;
      getId(): string;
      getTag(): string;
      getType(): string;
      setDirection(direction: Component): InlineLabel;
      setHeight(height: string): InlineLabel;
      setHorizontalAlignment(horizontalAlignment: HorizontalAlignment): InlineLabel;
      setId(id: string): InlineLabel;
      setLayoutData(layout: Object): InlineLabel;
      setPixelSize(width: Integer, height: Integer): InlineLabel;
      setSize(width: string, height: string): InlineLabel;
      setStyleAttribute(attribute: string, value: string): InlineLabel;
      setStyleAttributes(attributes: Object): InlineLabel;
      setStyleName(styleName: string): InlineLabel;
      setStylePrimaryName(styleName: string): InlineLabel;
      setTag(tag: string): InlineLabel;
      setText(text: string): InlineLabel;
      setTitle(title: string): InlineLabel;
      setVisible(visible: boolean): InlineLabel;
      setWidth(width: string): InlineLabel;
      setWordWrap(wordWrap: boolean): InlineLabel;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A widget that contains arbitrary text, not interpreted as HTML.
     *
     *  Here is an example of how to use this widget:
     *
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        app.add(app.createLabel("Hello World!"));
     *        return app;
     *      }
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the Label documentation here.
     */
    export interface Label {
      addClickHandler(handler: Handler): Label;
      addMouseDownHandler(handler: Handler): Label;
      addMouseMoveHandler(handler: Handler): Label;
      addMouseOutHandler(handler: Handler): Label;
      addMouseOverHandler(handler: Handler): Label;
      addMouseUpHandler(handler: Handler): Label;
      addMouseWheelHandler(handler: Handler): Label;
      addStyleDependentName(styleName: string): Label;
      addStyleName(styleName: string): Label;
      getId(): string;
      getTag(): string;
      getType(): string;
      setDirection(direction: Component): Label;
      setHeight(height: string): Label;
      setHorizontalAlignment(horizontalAlignment: HorizontalAlignment): Label;
      setId(id: string): Label;
      setLayoutData(layout: Object): Label;
      setPixelSize(width: Integer, height: Integer): Label;
      setSize(width: string, height: string): Label;
      setStyleAttribute(attribute: string, value: string): Label;
      setStyleAttributes(attributes: Object): Label;
      setStyleName(styleName: string): Label;
      setStylePrimaryName(styleName: string): Label;
      setTag(tag: string): Label;
      setText(text: string): Label;
      setTitle(title: string): Label;
      setVisible(visible: boolean): Label;
      setWidth(width: string): Label;
      setWordWrap(wordWrap: boolean): Label;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A widget that presents a list of choices to the user, either as a list box or
     *  as a drop-down list.
     *
     *  Here is an example usage, which should be executed from within a spreadsheet bound script.
     *
     *      // execute this in a spreadsheet
     *      function show() {
     *        var doc = SpreadsheetApp.getActiveSpreadsheet();
     *        var app = UiApp.createApplication().setTitle('My Application');
     *        var panel = app.createVerticalPanel();
     *        var lb = app.createListBox(true).setId('myId').setName('myLbName');
     *
     *        // add items to ListBox
     *        lb.setVisibleItemCount(3);
     *        lb.addItem('first');
     *        lb.addItem('second');
     *        lb.addItem('third');
     *        lb.addItem('fourth');
     *        lb.addItem('fifth');
     *        lb.addItem('sixth');
     *
     *        panel.add(lb);
     *        var button = app.createButton('press me');
     *        var handler = app.createServerClickHandler('click').addCallbackElement(panel);
     *        button.addClickHandler(handler);
     *        panel.add(button);
     *        app.add(panel);
     *        doc.show(app);
     *      }
     *
     *      function click(eventInfo) {
     *        var app = UiApp.getActiveApplication();
     *        // get values of ListBox
     *        var value = eventInfo.parameter.myLbName;
     *        // multi select box returns a comma separated string
     *        var n = value.split(',');
     *
     *        var doc = SpreadsheetApp.getActiveSpreadsheet();
     *        doc.getRange('a1').setValue(value);
     *        doc.getRange('b1').setValue('there are ' + n.length + ' items selected');
     *        return app;
     *      }
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the ListBox documentation here.
     */
    export interface ListBox {
      addBlurHandler(handler: Handler): ListBox;
      addChangeHandler(handler: Handler): ListBox;
      addClickHandler(handler: Handler): ListBox;
      addFocusHandler(handler: Handler): ListBox;
      addItem(text: string): ListBox;
      addItem(text: string, value: string): ListBox;
      addKeyDownHandler(handler: Handler): ListBox;
      addKeyPressHandler(handler: Handler): ListBox;
      addKeyUpHandler(handler: Handler): ListBox;
      addMouseDownHandler(handler: Handler): ListBox;
      addMouseMoveHandler(handler: Handler): ListBox;
      addMouseOutHandler(handler: Handler): ListBox;
      addMouseOverHandler(handler: Handler): ListBox;
      addMouseUpHandler(handler: Handler): ListBox;
      addMouseWheelHandler(handler: Handler): ListBox;
      addStyleDependentName(styleName: string): ListBox;
      addStyleName(styleName: string): ListBox;
      clear(): ListBox;
      getId(): string;
      getTag(): string;
      getType(): string;
      removeItem(index: Integer): ListBox;
      setAccessKey(accessKey: Char): ListBox;
      setEnabled(enabled: boolean): ListBox;
      setFocus(focus: boolean): ListBox;
      setHeight(height: string): ListBox;
      setId(id: string): ListBox;
      setItemSelected(index: Integer, selected: boolean): ListBox;
      setItemText(index: Integer, text: string): ListBox;
      setLayoutData(layout: Object): ListBox;
      setName(name: string): ListBox;
      setPixelSize(width: Integer, height: Integer): ListBox;
      setSelectedIndex(index: Integer): ListBox;
      setSize(width: string, height: string): ListBox;
      setStyleAttribute(attribute: string, value: string): ListBox;
      setStyleAttributes(attributes: Object): ListBox;
      setStyleName(styleName: string): ListBox;
      setStylePrimaryName(styleName: string): ListBox;
      setTabIndex(index: Integer): ListBox;
      setTag(tag: string): ListBox;
      setTitle(title: string): ListBox;
      setValue(index: Integer, value: string): ListBox;
      setVisible(visible: boolean): ListBox;
      setVisibleItemCount(count: Integer): ListBox;
      setWidth(width: string): ListBox;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A standard menu bar widget.
     *
     *  A menu bar can contain any number of menu items,
     *  each of which can either fire an event handler or open a cascaded menu bar.
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the MenuBar documentation here.
     */
    export interface MenuBar {
      addCloseHandler(handler: Handler): MenuBar;
      addItem(item: MenuItem): MenuBar;
      addItem(text: string, asHtml: boolean, command: Handler): MenuBar;
      addItem(text: string, asHtml: boolean, subMenu: MenuBar): MenuBar;
      addItem(text: string, command: Handler): MenuBar;
      addItem(text: string, subMenu: MenuBar): MenuBar;
      addSeparator(): MenuBar;
      addSeparator(separator: MenuItemSeparator): MenuBar;
      addStyleDependentName(styleName: string): MenuBar;
      addStyleName(styleName: string): MenuBar;
      getId(): string;
      getTag(): string;
      getType(): string;
      setAnimationEnabled(animationEnabled: boolean): MenuBar;
      setAutoOpen(autoOpen: boolean): MenuBar;
      setHeight(height: string): MenuBar;
      setId(id: string): MenuBar;
      setLayoutData(layout: Object): MenuBar;
      setPixelSize(width: Integer, height: Integer): MenuBar;
      setSize(width: string, height: string): MenuBar;
      setStyleAttribute(attribute: string, value: string): MenuBar;
      setStyleAttributes(attributes: Object): MenuBar;
      setStyleName(styleName: string): MenuBar;
      setStylePrimaryName(styleName: string): MenuBar;
      setTag(tag: string): MenuBar;
      setTitle(title: string): MenuBar;
      setVisible(visible: boolean): MenuBar;
      setWidth(width: string): MenuBar;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * An entry in a MenuBar.
     *
     *  Menu items can either fire an event handler when they are clicked, or open a cascading sub-menu.
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the MenuItem documentation here.
     */
    export interface MenuItem {
      addStyleDependentName(styleName: string): MenuItem;
      addStyleName(styleName: string): MenuItem;
      getId(): string;
      getTag(): string;
      getType(): string;
      setCommand(handler: Handler): MenuItem;
      setHTML(html: string): MenuItem;
      setHeight(height: string): MenuItem;
      setId(id: string): MenuItem;
      setPixelSize(width: Integer, height: Integer): MenuItem;
      setSize(width: string, height: string): MenuItem;
      setStyleAttribute(attribute: string, value: string): MenuItem;
      setStyleAttributes(attributes: Object): MenuItem;
      setStyleName(styleName: string): MenuItem;
      setStylePrimaryName(styleName: string): MenuItem;
      setSubMenu(subMenu: MenuBar): MenuItem;
      setTag(tag: string): MenuItem;
      setText(text: string): MenuItem;
      setTitle(title: string): MenuItem;
      setVisible(visible: boolean): MenuItem;
      setWidth(width: string): MenuItem;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A separator that can be placed in a MenuBar.
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the MenuItemSeparator documentation here.
     */
    export interface MenuItemSeparator {
      addStyleDependentName(styleName: string): MenuItemSeparator;
      addStyleName(styleName: string): MenuItemSeparator;
      getId(): string;
      getTag(): string;
      getType(): string;
      setHeight(height: string): MenuItemSeparator;
      setId(id: string): MenuItemSeparator;
      setPixelSize(width: Integer, height: Integer): MenuItemSeparator;
      setSize(width: string, height: string): MenuItemSeparator;
      setStyleAttribute(attribute: string, value: string): MenuItemSeparator;
      setStyleAttributes(attributes: Object): MenuItemSeparator;
      setStyleName(styleName: string): MenuItemSeparator;
      setStylePrimaryName(styleName: string): MenuItemSeparator;
      setTag(tag: string): MenuItemSeparator;
      setTitle(title: string): MenuItemSeparator;
      setVisible(visible: boolean): MenuItemSeparator;
      setWidth(width: string): MenuItemSeparator;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A text box that visually masks its input to prevent eavesdropping.
     *
     *  Here is an example of how to use this widget:
     *
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        var text = app.createPasswordTextBox().setName("text");
     *        var handler = app.createServerHandler("test").addCallbackElement(text);
     *        app.add(text);
     *        app.add(app.createButton("Test", handler));
     *        app.add(app.createLabel("0 characters").setId("label"));
     *        return app;
     *      }
     *
     *      function test(eventInfo) {
     *        var app = UiApp.createApplication();
     *        // Because the text box was named "text" and added as a callback element to the
     *        // button's click event, we have its value available in eventInfo.parameter.text.
     *        var pass = eventInfo.parameter.text;
     *        var isStrong =
     *            pass.length >= 10 && /[A-Z]/.test(pass) && /[a-z]/.test(pass) && /[0-9]/.test(pass);
     *        var label = app.getElementById("label");
     *        if (isStrong) {
     *          label.setText("Strong! Well, not really, but this is just an example.")
     *              .setStyleAttribute("color", "green");
     *        } else {
     *          label.setText("Weak! Use at least 10 characters, with uppercase, lowercase, and digits")
     *              .setStyleAttribute("color", "red");
     *        }
     *        return app;
     *      }
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the PasswordTextBox documentation here.
     */
    export interface PasswordTextBox {
      addBlurHandler(handler: Handler): PasswordTextBox;
      addChangeHandler(handler: Handler): PasswordTextBox;
      addClickHandler(handler: Handler): PasswordTextBox;
      addFocusHandler(handler: Handler): PasswordTextBox;
      addKeyDownHandler(handler: Handler): PasswordTextBox;
      addKeyPressHandler(handler: Handler): PasswordTextBox;
      addKeyUpHandler(handler: Handler): PasswordTextBox;
      addMouseDownHandler(handler: Handler): PasswordTextBox;
      addMouseMoveHandler(handler: Handler): PasswordTextBox;
      addMouseOutHandler(handler: Handler): PasswordTextBox;
      addMouseOverHandler(handler: Handler): PasswordTextBox;
      addMouseUpHandler(handler: Handler): PasswordTextBox;
      addMouseWheelHandler(handler: Handler): PasswordTextBox;
      addStyleDependentName(styleName: string): PasswordTextBox;
      addStyleName(styleName: string): PasswordTextBox;
      addValueChangeHandler(handler: Handler): PasswordTextBox;
      getId(): string;
      getTag(): string;
      getType(): string;
      setAccessKey(accessKey: Char): PasswordTextBox;
      setCursorPos(position: Integer): PasswordTextBox;
      setDirection(direction: Component): PasswordTextBox;
      setEnabled(enabled: boolean): PasswordTextBox;
      setFocus(focus: boolean): PasswordTextBox;
      setHeight(height: string): PasswordTextBox;
      setId(id: string): PasswordTextBox;
      setLayoutData(layout: Object): PasswordTextBox;
      setMaxLength(length: Integer): PasswordTextBox;
      setName(name: string): PasswordTextBox;
      setPixelSize(width: Integer, height: Integer): PasswordTextBox;
      setReadOnly(readOnly: boolean): PasswordTextBox;
      setSelectionRange(position: Integer, length: Integer): PasswordTextBox;
      setSize(width: string, height: string): PasswordTextBox;
      setStyleAttribute(attribute: string, value: string): PasswordTextBox;
      setStyleAttributes(attributes: Object): PasswordTextBox;
      setStyleName(styleName: string): PasswordTextBox;
      setStylePrimaryName(styleName: string): PasswordTextBox;
      setTabIndex(index: Integer): PasswordTextBox;
      setTag(tag: string): PasswordTextBox;
      setText(text: string): PasswordTextBox;
      setTextAlignment(textAlign: Component): PasswordTextBox;
      setTitle(title: string): PasswordTextBox;
      setValue(value: string): PasswordTextBox;
      setValue(value: string, fireEvents: boolean): PasswordTextBox;
      setVisible(visible: boolean): PasswordTextBox;
      setVisibleLength(length: Integer): PasswordTextBox;
      setWidth(width: string): PasswordTextBox;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A panel that can "pop up" over other widgets. It overlays the browser's
     *  client area (and any previously-created popups).
     *
     *  In general it's not recommended to add this panel as a child of another widget or of the app
     *  as that will make it behave like any other inline panel and not act as a popup. Instead, create
     *  the popup and then use its show() and hide() methods to show and hide it. See
     *  the example below.
     *
     *  To make the popup stay at a fixed location rather than scrolling with the page, try setting the
     *  'position', 'fixed' style on it with setStyleAttribute(attribute, value).
     *
     *  Note that this panel can contain at most one direct child widget. To add more children, make the
     *  child of this panel a different panel that can contain more than one child.
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the PopupPanel documentation here.
     *
     *  Here is an example showing how to use the popup panel widget:
     *
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        // Create a popup panel and set it to be modal.
     *        var popupPanel = app.createPopupPanel(false, true);
     *        // Add a button to the panel and set the dimensions and position.
     *        popupPanel.add(app.createButton()).setWidth("100px").setHeight("100px")
     *            .setPopupPosition(100, 100);
     *        // Show the panel. Note that it does not have to be "added" to the UiInstance.
     *        popupPanel.show();
     *        return app;
     *      }
     */
    export interface PopupPanel {
      add(widget: Widget): PopupPanel;
      addAutoHidePartner(partner: Component): PopupPanel;
      addCloseHandler(handler: Handler): PopupPanel;
      addStyleDependentName(styleName: string): PopupPanel;
      addStyleName(styleName: string): PopupPanel;
      clear(): PopupPanel;
      getId(): string;
      getTag(): string;
      getType(): string;
      hide(): PopupPanel;
      setAnimationEnabled(animationEnabled: boolean): PopupPanel;
      setAutoHideEnabled(enabled: boolean): PopupPanel;
      setGlassEnabled(enabled: boolean): PopupPanel;
      setGlassStyleName(styleName: string): PopupPanel;
      setHeight(height: string): PopupPanel;
      setId(id: string): PopupPanel;
      setLayoutData(layout: Object): PopupPanel;
      setModal(modal: boolean): PopupPanel;
      setPixelSize(width: Integer, height: Integer): PopupPanel;
      setPopupPosition(left: Integer, top: Integer): PopupPanel;
      setPopupPositionAndShow(a: Component): PopupPanel;
      setPreviewingAllNativeEvents(previewing: boolean): PopupPanel;
      setSize(width: string, height: string): PopupPanel;
      setStyleAttribute(attribute: string, value: string): PopupPanel;
      setStyleAttributes(attributes: Object): PopupPanel;
      setStyleName(styleName: string): PopupPanel;
      setStylePrimaryName(styleName: string): PopupPanel;
      setTag(tag: string): PopupPanel;
      setTitle(title: string): PopupPanel;
      setVisible(visible: boolean): PopupPanel;
      setWidget(widget: Widget): PopupPanel;
      setWidth(width: string): PopupPanel;
      show(): PopupPanel;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A normal push button with custom styling.
     *
     *  Here is an example of how to use this widget:
     *
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        // create a button and give it a click handler
     *        var button = app.createPushButton().setText("click me!").setId("button");
     *        button.addClickHandler(app.createServerHandler("handlerFunction"));
     *        app.add(button);
     *        return app;
     *      }
     *
     *      function handlerFunction(eventInfo) {
     *        var app = UiApp.getActiveApplication();
     *        app.add(app.createLabel("The button was clicked!"));
     *        return app;
     *      }
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the PushButton documentation here.
     */
    export interface PushButton {
      addBlurHandler(handler: Handler): PushButton;
      addClickHandler(handler: Handler): PushButton;
      addFocusHandler(handler: Handler): PushButton;
      addKeyDownHandler(handler: Handler): PushButton;
      addKeyPressHandler(handler: Handler): PushButton;
      addKeyUpHandler(handler: Handler): PushButton;
      addMouseDownHandler(handler: Handler): PushButton;
      addMouseMoveHandler(handler: Handler): PushButton;
      addMouseOutHandler(handler: Handler): PushButton;
      addMouseOverHandler(handler: Handler): PushButton;
      addMouseUpHandler(handler: Handler): PushButton;
      addMouseWheelHandler(handler: Handler): PushButton;
      addStyleDependentName(styleName: string): PushButton;
      addStyleName(styleName: string): PushButton;
      getId(): string;
      getTag(): string;
      getType(): string;
      setAccessKey(accessKey: Char): PushButton;
      setEnabled(enabled: boolean): PushButton;
      setFocus(focus: boolean): PushButton;
      setHTML(html: string): PushButton;
      setHeight(height: string): PushButton;
      setId(id: string): PushButton;
      setLayoutData(layout: Object): PushButton;
      setPixelSize(width: Integer, height: Integer): PushButton;
      setSize(width: string, height: string): PushButton;
      setStyleAttribute(attribute: string, value: string): PushButton;
      setStyleAttributes(attributes: Object): PushButton;
      setStyleName(styleName: string): PushButton;
      setStylePrimaryName(styleName: string): PushButton;
      setTabIndex(index: Integer): PushButton;
      setTag(tag: string): PushButton;
      setText(text: string): PushButton;
      setTitle(title: string): PushButton;
      setVisible(visible: boolean): PushButton;
      setWidth(width: string): PushButton;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A mutually-exclusive selection radio button widget.
     *
     *  This widget fires
     *  click events when the radio button is clicked, and value change events when the
     *  button becomes checked. Note, however, that browser limitations prevent
     *  value change events from being sent when the radio button is cleared as a side
     *  effect of another in the group being clicked.
     *
     *  RadioButtons are grouped according to the following rules:
     *
     * In the absence of a FormPanel, RadioButtons with the same name are part of the same
     *  group.
     *
     * Within a FormPanel, all unnamed RadioButtons are part of the same group.
     *
     * Within a FormPanel, all RadioButtons with the same name are part of the same group - but
     *      not part of the same group as RadioButtons with the same name outside of the
     *      FormPanel.
     *
     *  Note that radio button selections within a group do not propagate to server handlers created with
     *  UiInstance#createServerHandler(). Instead, to capture values on the server, use
     *  doPost() or separate handlers for each RadioButton.
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the RadioButton documentation here.
     */
    export interface RadioButton {
      addBlurHandler(handler: Handler): RadioButton;
      addClickHandler(handler: Handler): RadioButton;
      addFocusHandler(handler: Handler): RadioButton;
      addKeyDownHandler(handler: Handler): RadioButton;
      addKeyPressHandler(handler: Handler): RadioButton;
      addKeyUpHandler(handler: Handler): RadioButton;
      addMouseDownHandler(handler: Handler): RadioButton;
      addMouseMoveHandler(handler: Handler): RadioButton;
      addMouseOutHandler(handler: Handler): RadioButton;
      addMouseOverHandler(handler: Handler): RadioButton;
      addMouseUpHandler(handler: Handler): RadioButton;
      addMouseWheelHandler(handler: Handler): RadioButton;
      addStyleDependentName(styleName: string): RadioButton;
      addStyleName(styleName: string): RadioButton;
      addValueChangeHandler(handler: Handler): RadioButton;
      getId(): string;
      getTag(): string;
      getType(): string;
      setAccessKey(accessKey: Char): RadioButton;
      setEnabled(enabled: boolean): RadioButton;
      setFocus(focus: boolean): RadioButton;
      setFormValue(formValue: string): RadioButton;
      setHTML(html: string): RadioButton;
      setHeight(height: string): RadioButton;
      setId(id: string): RadioButton;
      setLayoutData(layout: Object): RadioButton;
      setName(name: string): RadioButton;
      setPixelSize(width: Integer, height: Integer): RadioButton;
      setSize(width: string, height: string): RadioButton;
      setStyleAttribute(attribute: string, value: string): RadioButton;
      setStyleAttributes(attributes: Object): RadioButton;
      setStyleName(styleName: string): RadioButton;
      setStylePrimaryName(styleName: string): RadioButton;
      setTabIndex(index: Integer): RadioButton;
      setTag(tag: string): RadioButton;
      setText(text: string): RadioButton;
      setTitle(title: string): RadioButton;
      setValue(value: boolean): RadioButton;
      setValue(value: boolean, fireEvents: boolean): RadioButton;
      setVisible(visible: boolean): RadioButton;
      setWidth(width: string): RadioButton;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A standard push-button widget which will automatically reset its enclosing FormPanel if
     *  any.
     *
     *  Here is an example of how to use this widget:
     *
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        var panel = app.createFlowPanel();
     *        panel.add(app.createTextBox().setText("some text"));
     *        panel.add(app.createResetButton("reset the textbox"));
     *        var form = app.createFormPanel();
     *        form.add(panel);
     *        app.add(form);
     *        return app;
     *      }
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the ResetButton documentation here.
     */
    export interface ResetButton {
      addBlurHandler(handler: Handler): ResetButton;
      addClickHandler(handler: Handler): ResetButton;
      addFocusHandler(handler: Handler): ResetButton;
      addKeyDownHandler(handler: Handler): ResetButton;
      addKeyPressHandler(handler: Handler): ResetButton;
      addKeyUpHandler(handler: Handler): ResetButton;
      addMouseDownHandler(handler: Handler): ResetButton;
      addMouseMoveHandler(handler: Handler): ResetButton;
      addMouseOutHandler(handler: Handler): ResetButton;
      addMouseOverHandler(handler: Handler): ResetButton;
      addMouseUpHandler(handler: Handler): ResetButton;
      addMouseWheelHandler(handler: Handler): ResetButton;
      addStyleDependentName(styleName: string): ResetButton;
      addStyleName(styleName: string): ResetButton;
      getId(): string;
      getTag(): string;
      getType(): string;
      setAccessKey(accessKey: Char): ResetButton;
      setEnabled(enabled: boolean): ResetButton;
      setFocus(focus: boolean): ResetButton;
      setHTML(html: string): ResetButton;
      setHeight(height: string): ResetButton;
      setId(id: string): ResetButton;
      setLayoutData(layout: Object): ResetButton;
      setPixelSize(width: Integer, height: Integer): ResetButton;
      setSize(width: string, height: string): ResetButton;
      setStyleAttribute(attribute: string, value: string): ResetButton;
      setStyleAttributes(attributes: Object): ResetButton;
      setStyleName(styleName: string): ResetButton;
      setStylePrimaryName(styleName: string): ResetButton;
      setTabIndex(index: Integer): ResetButton;
      setTag(tag: string): ResetButton;
      setText(text: string): ResetButton;
      setTitle(title: string): ResetButton;
      setVisible(visible: boolean): ResetButton;
      setWidth(width: string): ResetButton;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A panel that wraps its contents in a scrollable element.
     *
     *  Note that this panel can contain at most one direct child widget. To add more children, make the
     *  child of this panel a different panel that can contain more than one child.
     *
     *  Here is an example of how to use this widget:
     *
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        // Create some long content.
     *        var vertical = app.createVerticalPanel();
     *        for (var i = 0; i < 100; ++i) {
     *          vertical.add(app.createButton("button " + i));
     *        }
     *        var scroll = app.createScrollPanel().setPixelSize(100, 100);
     *        scroll.add(vertical);
     *        app.add(scroll);
     *        return app;
     *      }
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the ScrollPanel documentation here.
     */
    export interface ScrollPanel {
      add(widget: Widget): ScrollPanel;
      addScrollHandler(handler: Handler): ScrollPanel;
      addStyleDependentName(styleName: string): ScrollPanel;
      addStyleName(styleName: string): ScrollPanel;
      clear(): ScrollPanel;
      getId(): string;
      getTag(): string;
      getType(): string;
      setAlwaysShowScrollBars(alwaysShow: boolean): ScrollPanel;
      setHeight(height: string): ScrollPanel;
      setHorizontalScrollPosition(position: Integer): ScrollPanel;
      setId(id: string): ScrollPanel;
      setLayoutData(layout: Object): ScrollPanel;
      setPixelSize(width: Integer, height: Integer): ScrollPanel;
      setScrollPosition(position: Integer): ScrollPanel;
      setSize(width: string, height: string): ScrollPanel;
      setStyleAttribute(attribute: string, value: string): ScrollPanel;
      setStyleAttributes(attributes: Object): ScrollPanel;
      setStyleName(styleName: string): ScrollPanel;
      setStylePrimaryName(styleName: string): ScrollPanel;
      setTag(tag: string): ScrollPanel;
      setTitle(title: string): ScrollPanel;
      setVisible(visible: boolean): ScrollPanel;
      setWidget(widget: Widget): ScrollPanel;
      setWidth(width: string): ScrollPanel;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * An event handler that runs on the server. These will, in general, run much slower than
     *  ClientHandlers but they are not limited in what they can do.
     *
     *  Any method that accepts a "Handler" parameter can accept a ServerHandler.
     *
     *  When a ServerHandler is invoked, the function it refers to is called on the Apps Script server in
     *  a "fresh" script. This means that no variable values will have survived from previous handlers or
     *  from the initial script that loaded the app. Global variables in the script will be re-evaluated,
     *  which means that it's a bad idea to do anything slow (like opening a Spreadsheet or fetching a
     *  Calendar) in a global variable.
     *
     *  If you need to save state on the server, you can try using ScriptProperties or UserProperties.
     *  You can also add a Hidden field to your app storing the information you want to save
     *  and pass it back explicitly to handlers as a "callback element."
     *
     *  If you set validators on a ServerHandler, they will be checked before the handler calls the
     *  server. The server will only be called if the validators succeed.
     *
     *  If you have multiple ServerHandlers for the same event on the same widget, they will be called
     *  simultaneously.
     */
    export interface ServerHandler {
      addCallbackElement(widget: Widget): ServerHandler;
      getId(): string;
      getTag(): string;
      getType(): string;
      setCallbackFunction(functionToInvoke: string): ServerHandler;
      setId(id: string): ServerHandler;
      setTag(tag: string): ServerHandler;
      validateEmail(widget: Widget): ServerHandler;
      validateInteger(widget: Widget): ServerHandler;
      validateLength(widget: Widget, min: Integer, max: Integer): ServerHandler;
      validateMatches(widget: Widget, pattern: string): ServerHandler;
      validateMatches(widget: Widget, pattern: string, flags: string): ServerHandler;
      validateNotEmail(widget: Widget): ServerHandler;
      validateNotInteger(widget: Widget): ServerHandler;
      validateNotLength(widget: Widget, min: Integer, max: Integer): ServerHandler;
      validateNotMatches(widget: Widget, pattern: string): ServerHandler;
      validateNotMatches(widget: Widget, pattern: string, flags: string): ServerHandler;
      validateNotNumber(widget: Widget): ServerHandler;
      validateNotOptions(widget: Widget, options: String[]): ServerHandler;
      validateNotRange(widget: Widget, min: Number, max: Number): ServerHandler;
      validateNotSum(widgets: Widget[], sum: Integer): ServerHandler;
      validateNumber(widget: Widget): ServerHandler;
      validateOptions(widget: Widget, options: String[]): ServerHandler;
      validateRange(widget: Widget, min: Number, max: Number): ServerHandler;
      validateSum(widgets: Widget[], sum: Integer): ServerHandler;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A simple checkbox widget, with no label.
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the SimpleCheckBox documentation here.
     */
    export interface SimpleCheckBox {
      addBlurHandler(handler: Handler): SimpleCheckBox;
      addClickHandler(handler: Handler): SimpleCheckBox;
      addFocusHandler(handler: Handler): SimpleCheckBox;
      addKeyDownHandler(handler: Handler): SimpleCheckBox;
      addKeyPressHandler(handler: Handler): SimpleCheckBox;
      addKeyUpHandler(handler: Handler): SimpleCheckBox;
      addMouseDownHandler(handler: Handler): SimpleCheckBox;
      addMouseMoveHandler(handler: Handler): SimpleCheckBox;
      addMouseOutHandler(handler: Handler): SimpleCheckBox;
      addMouseOverHandler(handler: Handler): SimpleCheckBox;
      addMouseUpHandler(handler: Handler): SimpleCheckBox;
      addMouseWheelHandler(handler: Handler): SimpleCheckBox;
      addStyleDependentName(styleName: string): SimpleCheckBox;
      addStyleName(styleName: string): SimpleCheckBox;
      getId(): string;
      getTag(): string;
      getType(): string;
      setAccessKey(accessKey: Char): SimpleCheckBox;
      setChecked(checked: boolean): SimpleCheckBox;
      setEnabled(enabled: boolean): SimpleCheckBox;
      setFocus(focus: boolean): SimpleCheckBox;
      setHeight(height: string): SimpleCheckBox;
      setId(id: string): SimpleCheckBox;
      setLayoutData(layout: Object): SimpleCheckBox;
      setName(name: string): SimpleCheckBox;
      setPixelSize(width: Integer, height: Integer): SimpleCheckBox;
      setSize(width: string, height: string): SimpleCheckBox;
      setStyleAttribute(attribute: string, value: string): SimpleCheckBox;
      setStyleAttributes(attributes: Object): SimpleCheckBox;
      setStyleName(styleName: string): SimpleCheckBox;
      setStylePrimaryName(styleName: string): SimpleCheckBox;
      setTabIndex(index: Integer): SimpleCheckBox;
      setTag(tag: string): SimpleCheckBox;
      setTitle(title: string): SimpleCheckBox;
      setVisible(visible: boolean): SimpleCheckBox;
      setWidth(width: string): SimpleCheckBox;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A panel that can contain only one widget.
     *
     *  This panel is useful for adding styling effects to the child widget. To add more children, make
     *  the child of this panel a different panel that can contain more than one child.
     *
     *  Here is an example of how to use this widget:
     *
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        var simple = app.createSimplePanel();
     *        var flow = app.createFlowPanel();
     *        flow.add(app.createButton("button 1"));
     *        flow.add(app.createButton("button 2"));
     *        simple.add(flow);
     *        app.add(simple);
     *        return app;
     *      }
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the SimplePanel documentation here.
     */
    export interface SimplePanel {
      add(widget: Widget): SimplePanel;
      addStyleDependentName(styleName: string): SimplePanel;
      addStyleName(styleName: string): SimplePanel;
      clear(): SimplePanel;
      getId(): string;
      getTag(): string;
      getType(): string;
      setHeight(height: string): SimplePanel;
      setId(id: string): SimplePanel;
      setLayoutData(layout: Object): SimplePanel;
      setPixelSize(width: Integer, height: Integer): SimplePanel;
      setSize(width: string, height: string): SimplePanel;
      setStyleAttribute(attribute: string, value: string): SimplePanel;
      setStyleAttributes(attributes: Object): SimplePanel;
      setStyleName(styleName: string): SimplePanel;
      setStylePrimaryName(styleName: string): SimplePanel;
      setTag(tag: string): SimplePanel;
      setTitle(title: string): SimplePanel;
      setVisible(visible: boolean): SimplePanel;
      setWidget(widget: Widget): SimplePanel;
      setWidth(width: string): SimplePanel;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A simple radio button widget, with no label.
     *
     *  SimpleRadioButtons are grouped according to the same rules as RadioButtons.
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the SimpleRadioButton documentation here.
     */
    export interface SimpleRadioButton {
      addBlurHandler(handler: Handler): SimpleRadioButton;
      addClickHandler(handler: Handler): SimpleRadioButton;
      addFocusHandler(handler: Handler): SimpleRadioButton;
      addKeyDownHandler(handler: Handler): SimpleRadioButton;
      addKeyPressHandler(handler: Handler): SimpleRadioButton;
      addKeyUpHandler(handler: Handler): SimpleRadioButton;
      addMouseDownHandler(handler: Handler): SimpleRadioButton;
      addMouseMoveHandler(handler: Handler): SimpleRadioButton;
      addMouseOutHandler(handler: Handler): SimpleRadioButton;
      addMouseOverHandler(handler: Handler): SimpleRadioButton;
      addMouseUpHandler(handler: Handler): SimpleRadioButton;
      addMouseWheelHandler(handler: Handler): SimpleRadioButton;
      addStyleDependentName(styleName: string): SimpleRadioButton;
      addStyleName(styleName: string): SimpleRadioButton;
      getId(): string;
      getTag(): string;
      getType(): string;
      setAccessKey(accessKey: Char): SimpleRadioButton;
      setChecked(checked: boolean): SimpleRadioButton;
      setEnabled(enabled: boolean): SimpleRadioButton;
      setFocus(focus: boolean): SimpleRadioButton;
      setHeight(height: string): SimpleRadioButton;
      setId(id: string): SimpleRadioButton;
      setLayoutData(layout: Object): SimpleRadioButton;
      setName(name: string): SimpleRadioButton;
      setPixelSize(width: Integer, height: Integer): SimpleRadioButton;
      setSize(width: string, height: string): SimpleRadioButton;
      setStyleAttribute(attribute: string, value: string): SimpleRadioButton;
      setStyleAttributes(attributes: Object): SimpleRadioButton;
      setStyleName(styleName: string): SimpleRadioButton;
      setStylePrimaryName(styleName: string): SimpleRadioButton;
      setTabIndex(index: Integer): SimpleRadioButton;
      setTag(tag: string): SimpleRadioButton;
      setTitle(title: string): SimpleRadioButton;
      setVisible(visible: boolean): SimpleRadioButton;
      setWidth(width: string): SimpleRadioButton;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A panel that adds user-positioned splitters between each of its child widgets.
     *
     *  This panel is similar to a DockLayoutPanel, but each pair of child widgets has a splitter
     *  between them that the user can drag.
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the SplitLayoutPanel documentation here.
     */
    export interface SplitLayoutPanel {
      add(widget: Widget): SplitLayoutPanel;
      addEast(widget: Widget, width: Number): SplitLayoutPanel;
      addNorth(widget: Widget, height: Number): SplitLayoutPanel;
      addSouth(widget: Widget, height: Number): SplitLayoutPanel;
      addStyleDependentName(styleName: string): SplitLayoutPanel;
      addStyleName(styleName: string): SplitLayoutPanel;
      addWest(widget: Widget, width: Number): SplitLayoutPanel;
      clear(): SplitLayoutPanel;
      getId(): string;
      getTag(): string;
      getType(): string;
      remove(index: Integer): SplitLayoutPanel;
      remove(widget: Widget): SplitLayoutPanel;
      setHeight(height: string): SplitLayoutPanel;
      setId(id: string): SplitLayoutPanel;
      setLayoutData(layout: Object): SplitLayoutPanel;
      setPixelSize(width: Integer, height: Integer): SplitLayoutPanel;
      setSize(width: string, height: string): SplitLayoutPanel;
      setStyleAttribute(attribute: string, value: string): SplitLayoutPanel;
      setStyleAttributes(attributes: Object): SplitLayoutPanel;
      setStyleName(styleName: string): SplitLayoutPanel;
      setStylePrimaryName(styleName: string): SplitLayoutPanel;
      setTag(tag: string): SplitLayoutPanel;
      setTitle(title: string): SplitLayoutPanel;
      setVisible(visible: boolean): SplitLayoutPanel;
      setWidgetMinSize(widget: Widget, minSize: Integer): SplitLayoutPanel;
      setWidth(width: string): SplitLayoutPanel;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A panel that stacks its children vertically, displaying only one at a time,
     *  with a header for each child which the user can click to display.
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the StackPanel documentation here.
     */
    export interface StackPanel {
      add(widget: Widget): StackPanel;
      add(widget: Widget, text: string): StackPanel;
      add(widget: Widget, text: string, asHtml: boolean): StackPanel;
      addStyleDependentName(styleName: string): StackPanel;
      addStyleName(styleName: string): StackPanel;
      clear(): StackPanel;
      getId(): string;
      getTag(): string;
      getType(): string;
      remove(index: Integer): StackPanel;
      remove(widget: Widget): StackPanel;
      setHeight(height: string): StackPanel;
      setId(id: string): StackPanel;
      setLayoutData(layout: Object): StackPanel;
      setPixelSize(width: Integer, height: Integer): StackPanel;
      setSize(width: string, height: string): StackPanel;
      setStackText(index: Integer, text: string): StackPanel;
      setStackText(index: Integer, text: string, asHtml: boolean): StackPanel;
      setStyleAttribute(attribute: string, value: string): StackPanel;
      setStyleAttributes(attributes: Object): StackPanel;
      setStyleName(styleName: string): StackPanel;
      setStylePrimaryName(styleName: string): StackPanel;
      setTag(tag: string): StackPanel;
      setTitle(title: string): StackPanel;
      setVisible(visible: boolean): StackPanel;
      setWidth(width: string): StackPanel;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A standard push-button widget which will automatically submit its enclosing FormPanel if
     *  any.
     *
     *  Here is an example of how to use this widget:
     *
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        var form = app.createFormPanel();
     *        var flow = app.createFlowPanel();
     *        flow.add(app.createTextBox().setName("textBox"));
     *        flow.add(app.createSubmitButton("Submit"));
     *        form.add(flow);
     *        app.add(form);
     *        return app;
     *      }
     *
     *      function doPost(eventInfo) {
     *        var app = UiApp.getActiveApplication();
     *        app.add(app.createLabel("Form submitted. The text box's value was '" +
     *            eventInfo.parameter.textBox + "'"));
     *        return app;
     *      }
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the SubmitButton documentation here.
     */
    export interface SubmitButton {
      addBlurHandler(handler: Handler): SubmitButton;
      addClickHandler(handler: Handler): SubmitButton;
      addFocusHandler(handler: Handler): SubmitButton;
      addKeyDownHandler(handler: Handler): SubmitButton;
      addKeyPressHandler(handler: Handler): SubmitButton;
      addKeyUpHandler(handler: Handler): SubmitButton;
      addMouseDownHandler(handler: Handler): SubmitButton;
      addMouseMoveHandler(handler: Handler): SubmitButton;
      addMouseOutHandler(handler: Handler): SubmitButton;
      addMouseOverHandler(handler: Handler): SubmitButton;
      addMouseUpHandler(handler: Handler): SubmitButton;
      addMouseWheelHandler(handler: Handler): SubmitButton;
      addStyleDependentName(styleName: string): SubmitButton;
      addStyleName(styleName: string): SubmitButton;
      getId(): string;
      getTag(): string;
      getType(): string;
      setAccessKey(accessKey: Char): SubmitButton;
      setEnabled(enabled: boolean): SubmitButton;
      setFocus(focus: boolean): SubmitButton;
      setHTML(html: string): SubmitButton;
      setHeight(height: string): SubmitButton;
      setId(id: string): SubmitButton;
      setLayoutData(layout: Object): SubmitButton;
      setPixelSize(width: Integer, height: Integer): SubmitButton;
      setSize(width: string, height: string): SubmitButton;
      setStyleAttribute(attribute: string, value: string): SubmitButton;
      setStyleAttributes(attributes: Object): SubmitButton;
      setStyleName(styleName: string): SubmitButton;
      setStylePrimaryName(styleName: string): SubmitButton;
      setTabIndex(index: Integer): SubmitButton;
      setTag(tag: string): SubmitButton;
      setText(text: string): SubmitButton;
      setTitle(title: string): SubmitButton;
      setVisible(visible: boolean): SubmitButton;
      setWidth(width: string): SubmitButton;
    }

    /**
     *
     * Deprecated. This class is deprecated and should not be used in new scripts.
     * A SuggestBox is a text box or text area which displays a
     *  pre-configured set of selections that match the user's input.
     *
     *  This widget is not currently functional.
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the SuggestBox documentation here.
     */
    export interface SuggestBox {
      addKeyDownHandler(handler: Handler): SuggestBox;
      addKeyPressHandler(handler: Handler): SuggestBox;
      addKeyUpHandler(handler: Handler): SuggestBox;
      addSelectionHandler(handler: Handler): SuggestBox;
      addStyleDependentName(styleName: string): SuggestBox;
      addStyleName(styleName: string): SuggestBox;
      addValueChangeHandler(handler: Handler): SuggestBox;
      getId(): string;
      getTag(): string;
      getType(): string;
      setAccessKey(accessKey: Char): SuggestBox;
      setAnimationEnabled(animationEnabled: boolean): SuggestBox;
      setAutoSelectEnabled(autoSelectEnabled: boolean): SuggestBox;
      setFocus(focus: boolean): SuggestBox;
      setHeight(height: string): SuggestBox;
      setId(id: string): SuggestBox;
      setLayoutData(layout: Object): SuggestBox;
      setLimit(limit: Integer): SuggestBox;
      setPixelSize(width: Integer, height: Integer): SuggestBox;
      setPopupStyleName(styleName: string): SuggestBox;
      setSize(width: string, height: string): SuggestBox;
      setStyleAttribute(attribute: string, value: string): SuggestBox;
      setStyleAttributes(attributes: Object): SuggestBox;
      setStyleName(styleName: string): SuggestBox;
      setStylePrimaryName(styleName: string): SuggestBox;
      setTabIndex(index: Integer): SuggestBox;
      setTag(tag: string): SuggestBox;
      setText(text: string): SuggestBox;
      setTitle(title: string): SuggestBox;
      setValue(value: string): SuggestBox;
      setValue(value: string, fireEvents: boolean): SuggestBox;
      setVisible(visible: boolean): SuggestBox;
      setWidth(width: string): SuggestBox;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A horizontal bar of folder-style tabs, most commonly used as part of a TabPanel.
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the TabBar documentation here.
     */
    export interface TabBar {
      addBeforeSelectionHandler(handler: Handler): TabBar;
      addSelectionHandler(handler: Handler): TabBar;
      addStyleDependentName(styleName: string): TabBar;
      addStyleName(styleName: string): TabBar;
      addTab(title: string): TabBar;
      addTab(title: string, asHtml: boolean): TabBar;
      addTab(widget: Widget): TabBar;
      getId(): string;
      getTag(): string;
      getType(): string;
      selectTab(index: Integer): TabBar;
      setHeight(height: string): TabBar;
      setId(id: string): TabBar;
      setLayoutData(layout: Object): TabBar;
      setPixelSize(width: Integer, height: Integer): TabBar;
      setSize(width: string, height: string): TabBar;
      setStyleAttribute(attribute: string, value: string): TabBar;
      setStyleAttributes(attributes: Object): TabBar;
      setStyleName(styleName: string): TabBar;
      setStylePrimaryName(styleName: string): TabBar;
      setTabEnabled(index: Integer, enabled: boolean): TabBar;
      setTabText(index: Integer, text: string): TabBar;
      setTag(tag: string): TabBar;
      setTitle(title: string): TabBar;
      setVisible(visible: boolean): TabBar;
      setWidth(width: string): TabBar;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A panel that represents a tabbed set of pages, each of which contains another
     *  widget. Its child widgets are shown as the user selects the various tabs
     *  associated with them.
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the TabPanel documentation here.
     */
    export interface TabPanel {
      add(widget: Widget): TabPanel;
      add(widget: Widget, text: string): TabPanel;
      add(widget: Widget, text: string, asHtml: boolean): TabPanel;
      add(widget: Widget, tabWidget: Widget): TabPanel;
      addBeforeSelectionHandler(handler: Handler): TabPanel;
      addSelectionHandler(handler: Handler): TabPanel;
      addStyleDependentName(styleName: string): TabPanel;
      addStyleName(styleName: string): TabPanel;
      getId(): string;
      getTag(): string;
      getType(): string;
      selectTab(index: Integer): TabPanel;
      setAnimationEnabled(animationEnabled: boolean): TabPanel;
      setHeight(height: string): TabPanel;
      setId(id: string): TabPanel;
      setLayoutData(layout: Object): TabPanel;
      setPixelSize(width: Integer, height: Integer): TabPanel;
      setSize(width: string, height: string): TabPanel;
      setStyleAttribute(attribute: string, value: string): TabPanel;
      setStyleAttributes(attributes: Object): TabPanel;
      setStyleName(styleName: string): TabPanel;
      setStylePrimaryName(styleName: string): TabPanel;
      setTag(tag: string): TabPanel;
      setTitle(title: string): TabPanel;
      setVisible(visible: boolean): TabPanel;
      setWidth(width: string): TabPanel;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A text box that allows multiple lines of text to be entered.
     *
     *  Here is an example of how to use this widget:
     *
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        var text = app.createTextArea().setName("text");
     *        var handler = app.createServerHandler("count").addCallbackElement(text);
     *        app.add(text);
     *        app.add(app.createButton("Count", handler));
     *        app.add(app.createLabel("0 characters").setId("label"));
     *        return app;
     *      }
     *
     *      function count(eventInfo) {
     *        var app = UiApp.createApplication();
     *        // Because the text area was named "text" and added as a callback element to the
     *        // button's click event, we have its value available in eventInfo.parameter.text.
     *        app.getElementById("label").setText(eventInfo.parameter.text.length + " characters");
     *        return app;
     *      }
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the TextArea documentation here.
     */
    export interface TextArea {
      addBlurHandler(handler: Handler): TextArea;
      addChangeHandler(handler: Handler): TextArea;
      addClickHandler(handler: Handler): TextArea;
      addFocusHandler(handler: Handler): TextArea;
      addKeyDownHandler(handler: Handler): TextArea;
      addKeyPressHandler(handler: Handler): TextArea;
      addKeyUpHandler(handler: Handler): TextArea;
      addMouseDownHandler(handler: Handler): TextArea;
      addMouseMoveHandler(handler: Handler): TextArea;
      addMouseOutHandler(handler: Handler): TextArea;
      addMouseOverHandler(handler: Handler): TextArea;
      addMouseUpHandler(handler: Handler): TextArea;
      addMouseWheelHandler(handler: Handler): TextArea;
      addStyleDependentName(styleName: string): TextArea;
      addStyleName(styleName: string): TextArea;
      addValueChangeHandler(handler: Handler): TextArea;
      getId(): string;
      getTag(): string;
      getType(): string;
      setAccessKey(accessKey: Char): TextArea;
      setCharacterWidth(width: Integer): TextArea;
      setCursorPos(position: Integer): TextArea;
      setDirection(direction: Component): TextArea;
      setEnabled(enabled: boolean): TextArea;
      setFocus(focus: boolean): TextArea;
      setHeight(height: string): TextArea;
      setId(id: string): TextArea;
      setLayoutData(layout: Object): TextArea;
      setName(name: string): TextArea;
      setPixelSize(width: Integer, height: Integer): TextArea;
      setReadOnly(readOnly: boolean): TextArea;
      setSelectionRange(position: Integer, length: Integer): TextArea;
      setSize(width: string, height: string): TextArea;
      setStyleAttribute(attribute: string, value: string): TextArea;
      setStyleAttributes(attributes: Object): TextArea;
      setStyleName(styleName: string): TextArea;
      setStylePrimaryName(styleName: string): TextArea;
      setTabIndex(index: Integer): TextArea;
      setTag(tag: string): TextArea;
      setText(text: string): TextArea;
      setTextAlignment(textAlign: Component): TextArea;
      setTitle(title: string): TextArea;
      setValue(value: string): TextArea;
      setValue(value: string, fireEvents: boolean): TextArea;
      setVisible(visible: boolean): TextArea;
      setVisibleLines(lines: Integer): TextArea;
      setWidth(width: string): TextArea;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A standard single-line text box.
     *
     *  Here is an example of how to use this widget:
     *
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        var text = app.createTextBox().setName("text");
     *        var handler = app.createServerHandler("count").addCallbackElement(text);
     *        app.add(text);
     *        app.add(app.createButton("Count", handler));
     *        app.add(app.createLabel("0 characters").setId("label"));
     *        return app;
     *      }
     *
     *      function count(eventInfo) {
     *        var app = UiApp.createApplication();
     *        // Because the text box was named "text" and added as a callback element to the
     *        // button's click event, we have its value available in eventInfo.parameter.text.
     *        app.getElementById("label").setText(eventInfo.parameter.text.length + " characters");
     *        return app;
     *      }
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the TextBox documentation here.
     */
    export interface TextBox {
      addBlurHandler(handler: Handler): TextBox;
      addChangeHandler(handler: Handler): TextBox;
      addClickHandler(handler: Handler): TextBox;
      addFocusHandler(handler: Handler): TextBox;
      addKeyDownHandler(handler: Handler): TextBox;
      addKeyPressHandler(handler: Handler): TextBox;
      addKeyUpHandler(handler: Handler): TextBox;
      addMouseDownHandler(handler: Handler): TextBox;
      addMouseMoveHandler(handler: Handler): TextBox;
      addMouseOutHandler(handler: Handler): TextBox;
      addMouseOverHandler(handler: Handler): TextBox;
      addMouseUpHandler(handler: Handler): TextBox;
      addMouseWheelHandler(handler: Handler): TextBox;
      addStyleDependentName(styleName: string): TextBox;
      addStyleName(styleName: string): TextBox;
      addValueChangeHandler(handler: Handler): TextBox;
      getId(): string;
      getTag(): string;
      getType(): string;
      setAccessKey(accessKey: Char): TextBox;
      setCursorPos(position: Integer): TextBox;
      setDirection(direction: Component): TextBox;
      setEnabled(enabled: boolean): TextBox;
      setFocus(focus: boolean): TextBox;
      setHeight(height: string): TextBox;
      setId(id: string): TextBox;
      setLayoutData(layout: Object): TextBox;
      setMaxLength(length: Integer): TextBox;
      setName(name: string): TextBox;
      setPixelSize(width: Integer, height: Integer): TextBox;
      setReadOnly(readOnly: boolean): TextBox;
      setSelectionRange(position: Integer, length: Integer): TextBox;
      setSize(width: string, height: string): TextBox;
      setStyleAttribute(attribute: string, value: string): TextBox;
      setStyleAttributes(attributes: Object): TextBox;
      setStyleName(styleName: string): TextBox;
      setStylePrimaryName(styleName: string): TextBox;
      setTabIndex(index: Integer): TextBox;
      setTag(tag: string): TextBox;
      setText(text: string): TextBox;
      setTextAlignment(textAlign: Component): TextBox;
      setTitle(title: string): TextBox;
      setValue(value: string): TextBox;
      setValue(value: string, fireEvents: boolean): TextBox;
      setVisible(visible: boolean): TextBox;
      setVisibleLength(length: Integer): TextBox;
      setWidth(width: string): TextBox;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A ToggleButton is a stylish stateful button which allows the
     *  user to toggle between up and down states.
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the ToggleButton documentation here.
     */
    export interface ToggleButton {
      addBlurHandler(handler: Handler): ToggleButton;
      addClickHandler(handler: Handler): ToggleButton;
      addFocusHandler(handler: Handler): ToggleButton;
      addKeyDownHandler(handler: Handler): ToggleButton;
      addKeyPressHandler(handler: Handler): ToggleButton;
      addKeyUpHandler(handler: Handler): ToggleButton;
      addMouseDownHandler(handler: Handler): ToggleButton;
      addMouseMoveHandler(handler: Handler): ToggleButton;
      addMouseOutHandler(handler: Handler): ToggleButton;
      addMouseOverHandler(handler: Handler): ToggleButton;
      addMouseUpHandler(handler: Handler): ToggleButton;
      addMouseWheelHandler(handler: Handler): ToggleButton;
      addStyleDependentName(styleName: string): ToggleButton;
      addStyleName(styleName: string): ToggleButton;
      getId(): string;
      getTag(): string;
      getType(): string;
      setAccessKey(accessKey: Char): ToggleButton;
      setDown(down: boolean): ToggleButton;
      setEnabled(enabled: boolean): ToggleButton;
      setFocus(focus: boolean): ToggleButton;
      setHTML(html: string): ToggleButton;
      setHeight(height: string): ToggleButton;
      setId(id: string): ToggleButton;
      setLayoutData(layout: Object): ToggleButton;
      setPixelSize(width: Integer, height: Integer): ToggleButton;
      setSize(width: string, height: string): ToggleButton;
      setStyleAttribute(attribute: string, value: string): ToggleButton;
      setStyleAttributes(attributes: Object): ToggleButton;
      setStyleName(styleName: string): ToggleButton;
      setStylePrimaryName(styleName: string): ToggleButton;
      setTabIndex(index: Integer): ToggleButton;
      setTag(tag: string): ToggleButton;
      setText(text: string): ToggleButton;
      setTitle(title: string): ToggleButton;
      setVisible(visible: boolean): ToggleButton;
      setWidth(width: string): ToggleButton;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A standard hierarchical tree widget. The tree contains a hierarchy of
     *  TreeItems that the user can open, close, and select.
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the Tree documentation here.
     */
    export interface Tree {
      add(widget: Widget): Tree;
      addBlurHandler(handler: Handler): Tree;
      addCloseHandler(handler: Handler): Tree;
      addFocusHandler(handler: Handler): Tree;
      addItem(text: string): Tree;
      addItem(item: TreeItem): Tree;
      addItem(widget: Widget): Tree;
      addKeyDownHandler(handler: Handler): Tree;
      addKeyPressHandler(handler: Handler): Tree;
      addKeyUpHandler(handler: Handler): Tree;
      addMouseDownHandler(handler: Handler): Tree;
      addMouseMoveHandler(handler: Handler): Tree;
      addMouseOutHandler(handler: Handler): Tree;
      addMouseOverHandler(handler: Handler): Tree;
      addMouseUpHandler(handler: Handler): Tree;
      addMouseWheelHandler(handler: Handler): Tree;
      addOpenHandler(handler: Handler): Tree;
      addSelectionHandler(handler: Handler): Tree;
      addStyleDependentName(styleName: string): Tree;
      addStyleName(styleName: string): Tree;
      clear(): Tree;
      getId(): string;
      getTag(): string;
      getType(): string;
      setAccessKey(accessKey: Char): Tree;
      setAnimationEnabled(animationEnabled: boolean): Tree;
      setFocus(focus: boolean): Tree;
      setHeight(height: string): Tree;
      setId(id: string): Tree;
      setLayoutData(layout: Object): Tree;
      setPixelSize(width: Integer, height: Integer): Tree;
      setSelectedItem(item: TreeItem): Tree;
      setSelectedItem(item: TreeItem, fireEvents: boolean): Tree;
      setSize(width: string, height: string): Tree;
      setStyleAttribute(attribute: string, value: string): Tree;
      setStyleAttributes(attributes: Object): Tree;
      setStyleName(styleName: string): Tree;
      setStylePrimaryName(styleName: string): Tree;
      setTabIndex(index: Integer): Tree;
      setTag(tag: string): Tree;
      setTitle(title: string): Tree;
      setVisible(visible: boolean): Tree;
      setWidth(width: string): Tree;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * An item that can be contained within a Tree.
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the TreeItem documentation here.
     */
    export interface TreeItem {
      addItem(text: string): TreeItem;
      addItem(item: TreeItem): TreeItem;
      addItem(widget: Widget): TreeItem;
      addStyleDependentName(styleName: string): TreeItem;
      addStyleName(styleName: string): TreeItem;
      clear(): TreeItem;
      getId(): string;
      getTag(): string;
      getType(): string;
      setHTML(html: string): TreeItem;
      setHeight(height: string): TreeItem;
      setId(id: string): TreeItem;
      setPixelSize(width: Integer, height: Integer): TreeItem;
      setSelected(selected: boolean): TreeItem;
      setSize(width: string, height: string): TreeItem;
      setState(open: boolean): TreeItem;
      setState(open: boolean, fireEvents: boolean): TreeItem;
      setStyleAttribute(attribute: string, value: string): TreeItem;
      setStyleAttributes(attributes: Object): TreeItem;
      setStyleName(styleName: string): TreeItem;
      setStylePrimaryName(styleName: string): TreeItem;
      setTag(tag: string): TreeItem;
      setText(text: string): TreeItem;
      setTitle(title: string): TreeItem;
      setUserObject(a: Object): TreeItem;
      setVisible(visible: boolean): TreeItem;
      setWidget(widget: Widget): TreeItem;
      setWidth(width: string): TreeItem;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * Create user interfaces for use inside G Suite or as standalone services.
     */
    export interface UiApp {
      DateTimeFormat: typeof DateTimeFormat;
      FileType: typeof FileType;
      HorizontalAlignment: typeof HorizontalAlignment;
      VerticalAlignment: typeof VerticalAlignment;
      createApplication(): UiInstance;
      getActiveApplication(): UiInstance;
      getUserAgent(): string;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A representation of a user interface.
     *
     *  You can use this to create a new user interface or manipulate an existing one.
     */
    export interface UiInstance {
      add(child: Widget): UiInstance;
      close(): UiInstance;
      createAbsolutePanel(): AbsolutePanel;
      createAnchor(text: string, asHtml: boolean, href: string): Anchor;
      createAnchor(text: string, href: string): Anchor;
      createButton(): Button;
      createButton(html: string): Button;
      createButton(html: string, clickHandler: Handler): Button;
      createCaptionPanel(): CaptionPanel;
      createCaptionPanel(caption: string): CaptionPanel;
      createCaptionPanel(caption: string, asHtml: boolean): CaptionPanel;
      createCheckBox(): CheckBox;
      createCheckBox(label: string): CheckBox;
      createCheckBox(label: string, asHtml: boolean): CheckBox;
      createClientHandler(): ClientHandler;
      createDateBox(): DateBox;
      createDatePicker(): DatePicker;
      createDecoratedStackPanel(): DecoratedStackPanel;
      createDecoratedTabBar(): DecoratedTabBar;
      createDecoratedTabPanel(): DecoratedTabPanel;
      createDecoratorPanel(): DecoratorPanel;
      createDialogBox(): DialogBox;
      createDialogBox(autoHide: boolean): DialogBox;
      createDialogBox(autoHide: boolean, modal: boolean): DialogBox;
      createDocsListDialog(): DocsListDialog;
      createFileUpload(): FileUpload;
      createFlexTable(): FlexTable;
      createFlowPanel(): FlowPanel;
      createFocusPanel(): FocusPanel;
      createFocusPanel(child: Widget): FocusPanel;
      createFormPanel(): FormPanel;
      createGrid(): Grid;
      createGrid(rows: Integer, columns: Integer): Grid;
      createHTML(): HTML;
      createHTML(html: string): HTML;
      createHTML(html: string, wordWrap: boolean): HTML;
      createHidden(): Hidden;
      createHidden(name: string): Hidden;
      createHidden(name: string, value: string): Hidden;
      createHorizontalPanel(): HorizontalPanel;
      createImage(): Image;
      createImage(url: string): Image;
      createImage(url: string, left: Integer, top: Integer, width: Integer, height: Integer): Image;
      createInlineLabel(): InlineLabel;
      createInlineLabel(text: string): InlineLabel;
      createLabel(): Label;
      createLabel(text: string): Label;
      createLabel(text: string, wordWrap: boolean): Label;
      createListBox(): ListBox;
      createListBox(isMultipleSelect: boolean): ListBox;
      createMenuBar(): MenuBar;
      createMenuBar(vertical: boolean): MenuBar;
      createMenuItem(text: string, asHtml: boolean, command: Handler): MenuItem;
      createMenuItem(text: string, command: Handler): MenuItem;
      createMenuItemSeparator(): MenuItemSeparator;
      createPasswordTextBox(): PasswordTextBox;
      createPopupPanel(): PopupPanel;
      createPopupPanel(autoHide: boolean): PopupPanel;
      createPopupPanel(autoHide: boolean, modal: boolean): PopupPanel;
      createPushButton(): PushButton;
      createPushButton(upText: string): PushButton;
      createPushButton(upText: string, clickHandler: Handler): PushButton;
      createPushButton(upText: string, downText: string): PushButton;
      createPushButton(upText: string, downText: string, clickHandler: Handler): PushButton;
      createRadioButton(name: string): RadioButton;
      createRadioButton(name: string, label: string): RadioButton;
      createRadioButton(name: string, label: string, asHtml: boolean): RadioButton;
      createResetButton(): ResetButton;
      createResetButton(html: string): ResetButton;
      createResetButton(html: string, clickHandler: Handler): ResetButton;
      createScrollPanel(): ScrollPanel;
      createScrollPanel(child: Widget): ScrollPanel;
      createServerBlurHandler(): ServerHandler;
      createServerBlurHandler(functionName: string): ServerHandler;
      createServerChangeHandler(): ServerHandler;
      createServerChangeHandler(functionName: string): ServerHandler;
      createServerClickHandler(): ServerHandler;
      createServerClickHandler(functionName: string): ServerHandler;
      createServerCloseHandler(): ServerHandler;
      createServerCloseHandler(functionName: string): ServerHandler;
      createServerCommand(): ServerHandler;
      createServerCommand(functionName: string): ServerHandler;
      createServerErrorHandler(): ServerHandler;
      createServerErrorHandler(functionName: string): ServerHandler;
      createServerFocusHandler(): ServerHandler;
      createServerFocusHandler(functionName: string): ServerHandler;
      createServerHandler(): ServerHandler;
      createServerHandler(functionName: string): ServerHandler;
      createServerInitializeHandler(): ServerHandler;
      createServerInitializeHandler(functionName: string): ServerHandler;
      createServerKeyHandler(): ServerHandler;
      createServerKeyHandler(functionName: string): ServerHandler;
      createServerLoadHandler(): ServerHandler;
      createServerLoadHandler(functionName: string): ServerHandler;
      createServerMouseHandler(): ServerHandler;
      createServerMouseHandler(functionName: string): ServerHandler;
      createServerScrollHandler(): ServerHandler;
      createServerScrollHandler(functionName: string): ServerHandler;
      createServerSelectionHandler(): ServerHandler;
      createServerSelectionHandler(functionName: string): ServerHandler;
      createServerSubmitHandler(): ServerHandler;
      createServerSubmitHandler(functionName: string): ServerHandler;
      createServerValueChangeHandler(): ServerHandler;
      createServerValueChangeHandler(functionName: string): ServerHandler;
      createSimpleCheckBox(): SimpleCheckBox;
      createSimplePanel(): SimplePanel;
      createSimpleRadioButton(name: string): SimpleRadioButton;
      createSplitLayoutPanel(): SplitLayoutPanel;
      createStackPanel(): StackPanel;
      createSubmitButton(): SubmitButton;
      createSubmitButton(html: string): SubmitButton;
      createSuggestBox(): SuggestBox;
      createTabBar(): TabBar;
      createTabPanel(): TabPanel;
      createTextArea(): TextArea;
      createTextBox(): TextBox;
      createToggleButton(): ToggleButton;
      createToggleButton(upText: string): ToggleButton;
      createToggleButton(upText: string, clickHandler: Handler): ToggleButton;
      createToggleButton(upText: string, downText: string): ToggleButton;
      createTree(): Tree;
      createTreeItem(): TreeItem;
      createTreeItem(text: string): TreeItem;
      createTreeItem(child: Widget): TreeItem;
      createVerticalPanel(): VerticalPanel;
      getElementById(id: string): Component;
      getId(): string;
      isStandardsMode(): boolean;
      loadComponent(componentName: string): Component;
      loadComponent(componentName: string, optAdvancedArgs: Object): Component;
      remove(index: Integer): UiInstance;
      remove(widget: Widget): UiInstance;
      setHeight(height: Integer): UiInstance;
      setStandardsMode(standardsMode: boolean): UiInstance;
      setStyleAttribute(attribute: string, value: string): UiInstance;
      setTitle(title: string): UiInstance;
      setWidth(width: Integer): UiInstance;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * Vertical alignment constants to use with setVerticalAlignment methods in UiApp.
     */
    export enum VerticalAlignment { TOP, MIDDLE, BOTTOM }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A panel that lays all of its widgets out in a single vertical column.
     *
     *  Here is an example of how to use this widget:
     *
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        var panel = app.createVerticalPanel();
     *        panel.add(app.createButton("button 1"));
     *        panel.add(app.createButton("button 2"));
     *        app.add(panel);
     *        return app;
     *      }
     *
     *  Internally, UiApp widgets are built on top of the
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the VerticalPanel documentation
     *  here.
     */
    export interface VerticalPanel {
      add(widget: Widget): VerticalPanel;
      addStyleDependentName(styleName: string): VerticalPanel;
      addStyleName(styleName: string): VerticalPanel;
      clear(): VerticalPanel;
      getId(): string;
      getTag(): string;
      getType(): string;
      remove(index: Integer): VerticalPanel;
      remove(widget: Widget): VerticalPanel;
      setBorderWidth(width: Integer): VerticalPanel;
      setCellHeight(widget: Widget, height: string): VerticalPanel;
      setCellHorizontalAlignment(widget: Widget, horizontalAlignment: HorizontalAlignment): VerticalPanel;
      setCellVerticalAlignment(widget: Widget, verticalAlignment: VerticalAlignment): VerticalPanel;
      setCellWidth(widget: Widget, width: string): VerticalPanel;
      setHeight(height: string): VerticalPanel;
      setHorizontalAlignment(horizontalAlignment: HorizontalAlignment): VerticalPanel;
      setId(id: string): VerticalPanel;
      setLayoutData(layout: Object): VerticalPanel;
      setPixelSize(width: Integer, height: Integer): VerticalPanel;
      setSize(width: string, height: string): VerticalPanel;
      setSpacing(spacing: Integer): VerticalPanel;
      setStyleAttribute(attribute: string, value: string): VerticalPanel;
      setStyleAttributes(attributes: Object): VerticalPanel;
      setStyleName(styleName: string): VerticalPanel;
      setStylePrimaryName(styleName: string): VerticalPanel;
      setTag(tag: string): VerticalPanel;
      setTitle(title: string): VerticalPanel;
      setVerticalAlignment(verticalAlignment: VerticalAlignment): VerticalPanel;
      setVisible(visible: boolean): VerticalPanel;
      setWidth(width: string): VerticalPanel;
    }

    /**
     *
     * Deprecated. The UI service was
     *
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * Base interface for UiApp widgets.
     * Implementing classes
     *
     * NameBrief description
     *
     * AbsolutePanelAn absolute panel positions all of its children absolutely, allowing them to overlap.
     *
     * AnchorA widget that represents a simple <a> element.
     *
     * ButtonA standard push-button widget.
     *
     * CaptionPanelA panel that wraps its contents in a border with a caption that appears in the upper left
     *  corner of the border.
     *
     * ChartA Chart object, which can be embedded into documents, UI elements, or used as a static image.
     *
     * CheckBoxA standard check box widget.
     *
     * ControlA user interface control object, that drives the data displayed by a DashboardPanel.
     *
     * DashboardPanelA dashboard is a visual structure that enables the organization and management
     *  of multiple charts that share the same underlying data.
     *
     * DateBoxA text box that shows a DatePicker when the user focuses on it.
     *
     * DatePickerA date picker widget.
     *
     * DecoratedStackPanelA StackPanel that wraps each item in a 2x3 grid (six box), which allows users to add
     *  rounded corners.
     *
     * DecoratedTabBarA TabBar that wraps each tab in a 2x3 grid (six box), which allows users to add rounded corners.
     *
     * DecoratedTabPanelA TabPanel that uses a DecoratedTabBar with rounded corners.
     *
     * DecoratorPanelA SimplePanel that wraps its contents in stylized boxes, which can be used to add rounded
     *  corners to a Widget.
     *
     * DialogBoxA form of popup that has a caption area at the top and can be dragged by the
     *  user.
     *
     * EmbeddedChartRepresents a chart that has been embedded into a Spreadsheet.
     *
     * FileUploadA widget that wraps the HTML <input type='file'> element.
     *
     * FlexTableA flexible table that creates cells on demand.
     *
     * FlowPanelA panel that formats its child widgets using the default HTML layout behavior.
     *
     * FocusPanelA simple panel that makes its contents focusable, and adds the ability to catch mouse and
     *  keyboard events.
     *
     * FormPanelA panel that wraps its contents in an HTML <FORM> element.
     *
     * GridA rectangular grid that can contain text, html, or a child widget within its cells.
     *
     * HTMLA widget that contains arbitrary text, which is interpreted as HTML.
     *
     * HiddenRepresents a hidden field for storing data in the user's browser that can be passed back to a
     *  handler as a "callback element".
     *
     * HorizontalPanelA panel that lays all of its widgets out in a single horizontal column.
     *
     * ImageA widget that displays the image at a given URL.
     *
     * InlineLabelA widget that contains arbitrary text, not interpreted as HTML.
     *
     * LabelA widget that contains arbitrary text, not interpreted as HTML.
     *
     * ListBoxA widget that presents a list of choices to the user, either as a list box or
     *  as a drop-down list.
     *
     * MenuBarA standard menu bar widget.
     *
     * PasswordTextBoxA text box that visually masks its input to prevent eavesdropping.
     *
     * PopupPanelA panel that can "pop up" over other widgets.
     *
     * PushButtonA normal push button with custom styling.
     *
     * RadioButtonA mutually-exclusive selection radio button widget.
     *
     * ResetButtonA standard push-button widget which will automatically reset its enclosing FormPanel if
     *  any.
     *
     * ScrollPanelA panel that wraps its contents in a scrollable element.
     *
     * SimpleCheckBoxA simple checkbox widget, with no label.
     *
     * SimplePanelA panel that can contain only one widget.
     *
     * SimpleRadioButtonA simple radio button widget, with no label.
     *
     * SplitLayoutPanelA panel that adds user-positioned splitters between each of its child widgets.
     *
     * StackPanelA panel that stacks its children vertically, displaying only one at a time,
     *  with a header for each child which the user can click to display.
     *
     * SubmitButtonA standard push-button widget which will automatically submit its enclosing FormPanel if
     *  any.
     *
     * SuggestBoxA SuggestBox is a text box or text area which displays a
     *  pre-configured set of selections that match the user's input.
     *
     * TabBarA horizontal bar of folder-style tabs, most commonly used as part of a TabPanel.
     *
     * TabPanelA panel that represents a tabbed set of pages, each of which contains another
     *  widget.
     *
     * TextAreaA text box that allows multiple lines of text to be entered.
     *
     * TextBoxA standard single-line text box.
     *
     * ToggleButtonA ToggleButton is a stylish stateful button which allows the
     *  user to toggle between up and down states.
     *
     * TreeA standard hierarchical tree widget.
     *
     * VerticalPanelA panel that lays all of its widgets out in a single vertical column.
     */
    export interface Widget {
      getId(): string;
      getType(): string;
    }

  }
}

declare var UiApp: GoogleAppsScript.UI.UiApp;
