// Type definitions for Google Apps Script 2020-01-02
// Project: https://developers.google.com/apps-script/
// Definitions by: PopGoesTheWza <https://github.com/PopGoesTheWza>
//                 motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare namespace GoogleAppsScript {
  namespace Document {
    /**
     * An enumeration of the element attributes.
     *
     * Use attributes to compose custom styles. For example:
     *
     *     // Define a style with yellow background.
     *     var highlightStyle = {};
     *     highlightStyle[DocumentApp.Attribute.BACKGROUND_COLOR] = '#FFFF00';
     *     highlightStyle[DocumentApp.Attribute.BOLD] = true;
     *
     *     // Insert "Hello", highlighted.
     *     DocumentApp.getActiveDocument().editAsText()
     *       .insertText(0, 'Hello\n')
     *       .setAttributes(0, 4, highlightStyle);
     */
    enum Attribute { BACKGROUND_COLOR, BOLD, BORDER_COLOR, BORDER_WIDTH, CODE, FONT_FAMILY, FONT_SIZE, FOREGROUND_COLOR, HEADING, HEIGHT, HORIZONTAL_ALIGNMENT, INDENT_END, INDENT_FIRST_LINE, INDENT_START, ITALIC, GLYPH_TYPE, LEFT_TO_RIGHT, LINE_SPACING, LINK_URL, LIST_ID, MARGIN_BOTTOM, MARGIN_LEFT, MARGIN_RIGHT, MARGIN_TOP, NESTING_LEVEL, MINIMUM_HEIGHT, PADDING_BOTTOM, PADDING_LEFT, PADDING_RIGHT, PADDING_TOP, PAGE_HEIGHT, PAGE_WIDTH, SPACING_AFTER, SPACING_BEFORE, STRIKETHROUGH, UNDERLINE, VERTICAL_ALIGNMENT, WIDTH }
    /**
     * An element representing a document body. The Body may contain ListItem, Paragraph, Table, and TableOfContents elements. For more information on document
     * structure, see the guide to extending
     * Google Docs.
     *
     * The Body typically contains the full document contents except for the HeaderSection, FooterSection, and any FootnoteSection elements.
     *
     *     var doc = DocumentApp.getActiveDocument();
     *     var body = doc.getBody();
     *
     *     // Append a paragraph and a page break to the document body section directly.
     *     body.appendParagraph("A paragraph.");
     *     body.appendPageBreak();
     */
    interface Body extends Element {
      appendHorizontalRule(): HorizontalRule;
      appendImage(image: Base.BlobSource): InlineImage;
      appendImage(image: InlineImage): InlineImage;
      appendListItem(listItem: ListItem): ListItem;
      appendListItem(text: string): ListItem;
      appendPageBreak(): PageBreak;
      appendPageBreak(pageBreak: PageBreak): PageBreak;
      appendParagraph(paragraph: Paragraph): Paragraph;
      appendParagraph(text: string): Paragraph;
      appendTable(): Table;
      appendTable(cells: string[][]): Table;
      appendTable(table: Table): Table;
      clear(): Body;
      copy(): Body;
      editAsText(): Text;
      findElement(elementType: ElementType): RangeElement;
      findElement(elementType: ElementType, from: RangeElement): RangeElement;
      findText(searchPattern: string): RangeElement;
      findText(searchPattern: string, from: RangeElement): RangeElement;
      getAttributes(): any;
      getChild(childIndex: Integer): Element;
      getChildIndex(child: Element): Integer;
      getHeadingAttributes(paragraphHeading: ParagraphHeading): any;
      getImages(): InlineImage[];
      getListItems(): ListItem[];
      getMarginBottom(): number;
      getMarginLeft(): number;
      getMarginRight(): number;
      getMarginTop(): number;
      getNumChildren(): Integer;
      getPageHeight(): number;
      getPageWidth(): number;
      getParagraphs(): Paragraph[];
      getParent(): ContainerElement;
      getTables(): Table[];
      getText(): string;
      getTextAlignment(): TextAlignment;
      getType(): ElementType;
      insertHorizontalRule(childIndex: Integer): HorizontalRule;
      insertImage(childIndex: Integer, image: Base.BlobSource): InlineImage;
      insertImage(childIndex: Integer, image: InlineImage): InlineImage;
      insertListItem(childIndex: Integer, listItem: ListItem): ListItem;
      insertListItem(childIndex: Integer, text: string): ListItem;
      insertPageBreak(childIndex: Integer): PageBreak;
      insertPageBreak(childIndex: Integer, pageBreak: PageBreak): PageBreak;
      insertParagraph(childIndex: Integer, paragraph: Paragraph): Paragraph;
      insertParagraph(childIndex: Integer, text: string): Paragraph;
      insertTable(childIndex: Integer): Table;
      insertTable(childIndex: Integer, cells: string[][]): Table;
      insertTable(childIndex: Integer, table: Table): Table;
      removeChild(child: Element): Body;
      replaceText(searchPattern: string, replacement: string): Element;
      setAttributes(attributes: any): Body;
      setHeadingAttributes(paragraphHeading: ParagraphHeading, attributes: any): Body;
      setMarginBottom(marginBottom: number): Body;
      setMarginLeft(marginLeft: number): Body;
      setMarginRight(marginRight: number): Body;
      setMarginTop(marginTop: number): Body;
      setPageHeight(pageHeight: number): Body;
      setPageWidth(pageWidth: number): Body;
      setText(text: string): Body;
      setTextAlignment(textAlignment: TextAlignment): Body;
      /** @deprecated DO NOT USE */ getFootnotes(): Footnote[];
      /** @deprecated DO NOT USE */ getLinkUrl(): string;
      /** @deprecated DO NOT USE */ getNextSibling(): Element;
      /** @deprecated DO NOT USE */ getPreviousSibling(): Element;
      /** @deprecated DO NOT USE */ isAtDocumentEnd(): boolean;
      /** @deprecated DO NOT USE */ setLinkUrl(url: string): Body;
    }
    /**
     * An object representing a bookmark.
     *
     *     // Insert a bookmark at the cursor position and log its ID.
     *     var doc = DocumentApp.getActiveDocument();
     *     var cursor = doc.getCursor();
     *     var bookmark = doc.addBookmark(cursor);
     *     Logger.log(bookmark.getId());
     */
    interface Bookmark {
      getId(): string;
      getPosition(): Position;
      remove(): void;
    }
    /**
     * A generic element that may contain other elements. All elements that may contain child elements,
     * such as Paragraph, inherit from ContainerElement.
     */
    interface ContainerElement extends Element {
      asBody(): Body;
      asEquation(): Equation;
      asFooterSection(): FooterSection;
      asFootnoteSection(): FootnoteSection;
      asHeaderSection(): HeaderSection;
      asListItem(): ListItem;
      asParagraph(): Paragraph;
      asTable(): Table;
      asTableCell(): TableCell;
      asTableOfContents(): TableOfContents;
      asTableRow(): TableRow;
      clear(): ContainerElement;
      copy(): ContainerElement;
      editAsText(): Text;
      findElement(elementType: ElementType): RangeElement;
      findElement(elementType: ElementType, from: RangeElement): RangeElement;
      findText(searchPattern: string): RangeElement;
      findText(searchPattern: string, from: RangeElement): RangeElement;
      getAttributes(): any;
      getChild(childIndex: Integer): Element;
      getChildIndex(child: Element): Integer;
      getLinkUrl(): string;
      getNextSibling(): Element;
      getNumChildren(): Integer;
      getParent(): ContainerElement;
      getPreviousSibling(): Element;
      getText(): string;
      getTextAlignment(): TextAlignment;
      getType(): ElementType;
      isAtDocumentEnd(): boolean;
      merge(): ContainerElement;
      removeFromParent(): ContainerElement;
      replaceText(searchPattern: string, replacement: string): Element;
      setAttributes(attributes: any): ContainerElement;
      setLinkUrl(url: string): ContainerElement;
      setTextAlignment(textAlignment: TextAlignment): ContainerElement;
    }
    /**
     * A document, containing rich text and elements such as tables and lists.
     *
     * Documents may be opened or created using DocumentApp.
     *
     *     // Open a document by ID.
     *     var doc = DocumentApp.openById("<my-id>");
     *
     *     // Create and open a document.
     *     doc = DocumentApp.create("Document Title");
     */
    interface Document {
      addBookmark(position: Position): Bookmark;
      addEditor(emailAddress: string): Document;
      addEditor(user: Base.User): Document;
      addEditors(emailAddresses: string[]): Document;
      addFooter(): FooterSection;
      addHeader(): HeaderSection;
      addNamedRange(name: string, range: Range): NamedRange;
      addViewer(emailAddress: string): Document;
      addViewer(user: Base.User): Document;
      addViewers(emailAddresses: string[]): Document;
      getAs(contentType: string): Base.Blob;
      getBlob(): Base.Blob;
      getBody(): Body;
      getBookmark(id: string): Bookmark;
      getBookmarks(): Bookmark[];
      getCursor(): Position;
      getEditors(): Base.User[];
      getFooter(): FooterSection;
      getFootnotes(): Footnote[];
      getHeader(): HeaderSection;
      getId(): string;
      getLanguage(): string;
      getName(): string;
      getNamedRangeById(id: string): NamedRange;
      getNamedRanges(): NamedRange[];
      getNamedRanges(name: string): NamedRange[];
      getSelection(): Range;
      getSupportedLanguageCodes(): string[];
      getUrl(): string;
      getViewers(): Base.User[];
      newPosition(element: Element, offset: Integer): Position;
      newRange(): RangeBuilder;
      removeEditor(emailAddress: string): Document;
      removeEditor(user: Base.User): Document;
      removeViewer(emailAddress: string): Document;
      removeViewer(user: Base.User): Document;
      saveAndClose(): void;
      setCursor(position: Position): Document;
      setLanguage(languageCode: string): Document;
      setName(name: string): Document;
      setSelection(range: Range): Document;
    }
    /**
     * The document service creates and opens Documents that can be edited.
     *
     *     // Open a document by ID.
     *     var doc = DocumentApp.openById('DOCUMENT_ID_GOES_HERE');
     *
     *     // Create and open a document.
     *     doc = DocumentApp.create('Document Name');
     */
    interface DocumentApp {
      Attribute: typeof Attribute;
      ElementType: typeof ElementType;
      GlyphType: typeof GlyphType;
      HorizontalAlignment: typeof HorizontalAlignment;
      ParagraphHeading: typeof ParagraphHeading;
      PositionedLayout: typeof PositionedLayout;
      TextAlignment: typeof TextAlignment;
      VerticalAlignment: typeof VerticalAlignment;
      create(name: string): Document;
      getActiveDocument(): Document;
      getUi(): Base.Ui;
      openById(id: string): Document;
      openByUrl(url: string): Document;
      /** @deprecated DO NOT USE */ FontFamily: typeof FontFamily;
    }
    /**
     * A generic element. Document contents are
     * represented as elements. For example, ListItem, Paragraph, and Table are
     * elements and inherit all of the methods defined by Element, such as getType().
     * Implementing classes
     *
     * NameBrief description
     *
     * BodyAn element representing a document body.
     *
     * ContainerElementA generic element that may contain other elements.
     *
     * EquationAn element representing a mathematical expression.
     *
     * EquationFunctionAn element representing a function in a mathematical Equation.
     *
     * EquationFunctionArgumentSeparatorAn element representing a function separator in a mathematical Equation.
     *
     * EquationSymbolAn element representing a symbol in a mathematical Equation.
     *
     * FooterSectionAn element representing a footer section.
     *
     * FootnoteAn element representing a footnote.
     *
     * FootnoteSectionAn element representing a footnote section.
     *
     * HeaderSectionAn element representing a header section.
     *
     * HorizontalRuleAn element representing an horizontal rule.
     *
     * InlineDrawingAn element representing an embedded drawing.
     *
     * InlineImageAn element representing an embedded image.
     *
     * ListItemAn element representing a list item.
     *
     * PageBreakAn element representing a page break.
     *
     * ParagraphAn element representing a paragraph.
     *
     * TableAn element representing a table.
     *
     * TableCellAn element representing a table cell.
     *
     * TableOfContentsAn element containing a table of contents.
     *
     * TableRowAn element representing a table row.
     *
     * TextAn element representing a rich text region.
     *
     * UnsupportedElementAn element representing a region that is unknown or cannot be affected by a script, such as a
     * page number.
     */
    interface Element {
      asBody(): Body;
      asEquation(): Equation;
      asEquationFunction(): EquationFunction;
      asEquationFunctionArgumentSeparator(): EquationFunctionArgumentSeparator;
      asEquationSymbol(): EquationSymbol;
      asFooterSection(): FooterSection;
      asFootnote(): Footnote;
      asFootnoteSection(): FootnoteSection;
      asHeaderSection(): HeaderSection;
      asHorizontalRule(): HorizontalRule;
      asInlineDrawing(): InlineDrawing;
      asInlineImage(): InlineImage;
      asListItem(): ListItem;
      asPageBreak(): PageBreak;
      asParagraph(): Paragraph;
      asTable(): Table;
      asTableCell(): TableCell;
      asTableOfContents(): TableOfContents;
      asTableRow(): TableRow;
      asText(): Text;
      copy(): Element;
      getAttributes(): any;
      getNextSibling(): Element;
      getParent(): ContainerElement;
      getPreviousSibling(): Element;
      getType(): ElementType;
      isAtDocumentEnd(): boolean;
      merge(): Element;
      removeFromParent(): Element;
      setAttributes(attributes: any): Element;
    }
    /**
     * An enumeration of all the element types.
     *
     * Use the ElementType enumeration to check the type of a given element, for instance:
     *
     *     var firstChild = DocumentApp.getActiveDocument().getBody().getChild(0);
     *     if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
     *       // It's a paragraph, apply a paragraph heading.
     *       firstChild.asParagraph().setHeading(DocumentApp.ParagraphHeading.HEADING1);
     *     }
     */
    enum ElementType { BODY_SECTION, COMMENT_SECTION, DOCUMENT, EQUATION, EQUATION_FUNCTION, EQUATION_FUNCTION_ARGUMENT_SEPARATOR, EQUATION_SYMBOL, FOOTER_SECTION, FOOTNOTE, FOOTNOTE_SECTION, HEADER_SECTION, HORIZONTAL_RULE, INLINE_DRAWING, INLINE_IMAGE, LIST_ITEM, PAGE_BREAK, PARAGRAPH, TABLE, TABLE_CELL, TABLE_OF_CONTENTS, TABLE_ROW, TEXT, UNSUPPORTED }
    /**
     * An element representing a mathematical expression. An Equation may contain EquationFunction, EquationSymbol, and Text elements. For more information on
     * document structure, see the guide to
     * extending Google Docs.
     */
    interface Equation extends Element {
      clear(): Equation;
      copy(): Equation;
      editAsText(): Text;
      findElement(elementType: ElementType): RangeElement;
      findElement(elementType: ElementType, from: RangeElement): RangeElement;
      findText(searchPattern: string): RangeElement;
      findText(searchPattern: string, from: RangeElement): RangeElement;
      getAttributes(): any;
      getChild(childIndex: Integer): Element;
      getChildIndex(child: Element): Integer;
      getLinkUrl(): string;
      getNextSibling(): Element;
      getNumChildren(): Integer;
      getParent(): ContainerElement;
      getPreviousSibling(): Element;
      getText(): string;
      getTextAlignment(): TextAlignment;
      getType(): ElementType;
      isAtDocumentEnd(): boolean;
      merge(): Equation;
      removeFromParent(): Equation;
      replaceText(searchPattern: string, replacement: string): Element;
      setAttributes(attributes: any): Equation;
      setLinkUrl(url: string): Equation;
      setTextAlignment(textAlignment: TextAlignment): Equation;
    }
    /**
     * An element representing a function in a mathematical Equation. An EquationFunction may contain EquationFunction, EquationFunctionArgumentSeparator, EquationSymbol, and Text elements. For more
     * information on document structure, see the guide to extending Google Docs.
     */
    interface EquationFunction extends Element {
      clear(): EquationFunction;
      copy(): EquationFunction;
      editAsText(): Text;
      findElement(elementType: ElementType): RangeElement;
      findElement(elementType: ElementType, from: RangeElement): RangeElement;
      findText(searchPattern: string): RangeElement;
      findText(searchPattern: string, from: RangeElement): RangeElement;
      getAttributes(): any;
      getChild(childIndex: Integer): Element;
      getChildIndex(child: Element): Integer;
      getCode(): string;
      getLinkUrl(): string;
      getNextSibling(): Element;
      getNumChildren(): Integer;
      getParent(): ContainerElement;
      getPreviousSibling(): Element;
      getText(): string;
      getTextAlignment(): TextAlignment;
      getType(): ElementType;
      isAtDocumentEnd(): boolean;
      merge(): EquationFunction;
      removeFromParent(): EquationFunction;
      replaceText(searchPattern: string, replacement: string): Element;
      setAttributes(attributes: any): EquationFunction;
      setLinkUrl(url: string): EquationFunction;
      setTextAlignment(textAlignment: TextAlignment): EquationFunction;
    }
    /**
     * An element representing a function separator in a mathematical Equation. An EquationFunctionArgumentSeparator cannot contain any other element. For more information on
     * document structure, see the guide to
     * extending Google Docs.
     */
    interface EquationFunctionArgumentSeparator extends Element {
      copy(): EquationFunctionArgumentSeparator;
      getAttributes(): any;
      getNextSibling(): Element;
      getParent(): ContainerElement;
      getPreviousSibling(): Element;
      getType(): ElementType;
      isAtDocumentEnd(): boolean;
      merge(): EquationFunctionArgumentSeparator;
      removeFromParent(): EquationFunctionArgumentSeparator;
      setAttributes(attributes: any): EquationFunctionArgumentSeparator;
    }
    /**
     * An element representing a symbol in a mathematical Equation. An EquationSymbol
     * cannot contain any other element. For more information on document structure, see the guide to extending Google Docs.
     */
    interface EquationSymbol extends Element {
      copy(): EquationSymbol;
      getAttributes(): any;
      getCode(): string;
      getNextSibling(): Element;
      getParent(): ContainerElement;
      getPreviousSibling(): Element;
      getType(): ElementType;
      isAtDocumentEnd(): boolean;
      merge(): EquationSymbol;
      removeFromParent(): EquationSymbol;
      setAttributes(attributes: any): EquationSymbol;
    }
    /**
     *
     * Deprecated. The methods getFontFamily() and setFontFamily(String) now use string
     *     names for fonts instead of this enum. Although this enum is deprecated, it will remain
     *     available for compatibility with older scripts.
     * An enumeration of the supported fonts.
     *
     * Use the FontFamily enumeration to set the font for a range of text, element or
     * document.
     *
     *     var body = DocumentApp.getActiveDocument().getBody();
     *
     *     // Insert a paragraph at the start of the document.
     *     body.insertParagraph(0, "Hello, Apps Script!");
     *
     *     // Set the document font to Calibri.
     *     body.editAsText().setFontFamily(DocumentApp.FontFamily.CALIBRI);
     *
     *     // Set the first paragraph font to Arial.
     *     body.getParagraphs()[0].setFontFamily(DocumentApp.FontFamily.ARIAL);
     *
     *     // Set "Apps Script" to Comic Sans MS.
     *     var text = 'Apps Script';
     *     var a = body.getText().indexOf(text);
     *     var b = a + text.length - 1;
     *     body.editAsText().setFontFamily(a, b, DocumentApp.FontFamily.COMIC_SANS_MS);
     */
    enum FontFamily { AMARANTH, ARIAL, ARIAL_BLACK, ARIAL_NARROW, ARVO, CALIBRI, CAMBRIA, COMIC_SANS_MS, CONSOLAS, CORSIVA, COURIER_NEW, DANCING_SCRIPT, DROID_SANS, DROID_SERIF, GARAMOND, GEORGIA, GLORIA_HALLELUJAH, GREAT_VIBES, LOBSTER, MERRIWEATHER, PACIFICO, PHILOSOPHER, POIRET_ONE, QUATTROCENTO, ROBOTO, SHADOWS_INTO_LIGHT, SYNCOPATE, TAHOMA, TIMES_NEW_ROMAN, TREBUCHET_MS, UBUNTU, VERDANA }
    /**
     * An element representing a footer section. A Document typically contains at most one FooterSection. The FooterSection may contain ListItem, Paragraph, and
     * Table elements. For more information on document structure, see the guide to extending Google Docs.
     */
    interface FooterSection extends Element {
      appendHorizontalRule(): HorizontalRule;
      appendImage(image: Base.BlobSource): InlineImage;
      appendImage(image: InlineImage): InlineImage;
      appendListItem(listItem: ListItem): ListItem;
      appendListItem(text: string): ListItem;
      appendParagraph(paragraph: Paragraph): Paragraph;
      appendParagraph(text: string): Paragraph;
      appendTable(): Table;
      appendTable(cells: string[][]): Table;
      appendTable(table: Table): Table;
      clear(): FooterSection;
      copy(): FooterSection;
      editAsText(): Text;
      findElement(elementType: ElementType): RangeElement;
      findElement(elementType: ElementType, from: RangeElement): RangeElement;
      findText(searchPattern: string): RangeElement;
      findText(searchPattern: string, from: RangeElement): RangeElement;
      getAttributes(): any;
      getChild(childIndex: Integer): Element;
      getChildIndex(child: Element): Integer;
      getImages(): InlineImage[];
      getListItems(): ListItem[];
      getNumChildren(): Integer;
      getParagraphs(): Paragraph[];
      getParent(): ContainerElement;
      getTables(): Table[];
      getText(): string;
      getTextAlignment(): TextAlignment;
      getType(): ElementType;
      insertHorizontalRule(childIndex: Integer): HorizontalRule;
      insertImage(childIndex: Integer, image: Base.BlobSource): InlineImage;
      insertImage(childIndex: Integer, image: InlineImage): InlineImage;
      insertListItem(childIndex: Integer, listItem: ListItem): ListItem;
      insertListItem(childIndex: Integer, text: string): ListItem;
      insertParagraph(childIndex: Integer, paragraph: Paragraph): Paragraph;
      insertParagraph(childIndex: Integer, text: string): Paragraph;
      insertTable(childIndex: Integer): Table;
      insertTable(childIndex: Integer, cells: string[][]): Table;
      insertTable(childIndex: Integer, table: Table): Table;
      removeChild(child: Element): FooterSection;
      removeFromParent(): FooterSection;
      replaceText(searchPattern: string, replacement: string): Element;
      setAttributes(attributes: any): FooterSection;
      setText(text: string): FooterSection;
      setTextAlignment(textAlignment: TextAlignment): FooterSection;
      /** @deprecated DO NOT USE */ getFootnotes(): Footnote[];
      /** @deprecated DO NOT USE */ getLinkUrl(): string;
      /** @deprecated DO NOT USE */ getNextSibling(): Element;
      /** @deprecated DO NOT USE */ getPreviousSibling(): Element;
      /** @deprecated DO NOT USE */ isAtDocumentEnd(): boolean;
      /** @deprecated DO NOT USE */ setLinkUrl(url: string): FooterSection;
    }
    /**
     * An element representing a footnote. Each Footnote is contained within a ListItem
     * or Paragraph and has a corresponding FootnoteSection element for the footnote's
     * contents. The Footnote itself cannot contain any other element. For more information on
     * document structure, see the guide to
     * extending Google Docs.
     */
    interface Footnote extends Element {
      copy(): Footnote;
      getAttributes(): any;
      getFootnoteContents(): FootnoteSection;
      getNextSibling(): Element;
      getParent(): ContainerElement;
      getPreviousSibling(): Element;
      getType(): ElementType;
      isAtDocumentEnd(): boolean;
      removeFromParent(): Footnote;
      setAttributes(attributes: any): Footnote;
    }
    /**
     * An element representing a footnote section. A FootnoteSection contains the text that
     * corresponds to a Footnote. The FootnoteSection may contain ListItem or
     * Paragraph elements. For more information on document structure, see the guide to extending Google Docs.
     */
    interface FootnoteSection extends Element {
      appendParagraph(paragraph: Paragraph): Paragraph;
      appendParagraph(text: string): Paragraph;
      clear(): FootnoteSection;
      copy(): FootnoteSection;
      editAsText(): Text;
      findElement(elementType: ElementType): RangeElement;
      findElement(elementType: ElementType, from: RangeElement): RangeElement;
      findText(searchPattern: string): RangeElement;
      findText(searchPattern: string, from: RangeElement): RangeElement;
      getAttributes(): any;
      getChild(childIndex: Integer): Element;
      getChildIndex(child: Element): Integer;
      getNextSibling(): Element;
      getNumChildren(): Integer;
      getParagraphs(): Paragraph[];
      getParent(): ContainerElement;
      getPreviousSibling(): Element;
      getText(): string;
      getTextAlignment(): TextAlignment;
      getType(): ElementType;
      insertParagraph(childIndex: Integer, paragraph: Paragraph): Paragraph;
      insertParagraph(childIndex: Integer, text: string): Paragraph;
      removeChild(child: Element): FootnoteSection;
      removeFromParent(): FootnoteSection;
      replaceText(searchPattern: string, replacement: string): Element;
      setAttributes(attributes: any): FootnoteSection;
      setText(text: string): FootnoteSection;
      setTextAlignment(textAlignment: TextAlignment): FootnoteSection;
      /** @deprecated DO NOT USE */ getFootnotes(): Footnote[];
      /** @deprecated DO NOT USE */ getLinkUrl(): string;
      /** @deprecated DO NOT USE */ isAtDocumentEnd(): boolean;
      /** @deprecated DO NOT USE */ setLinkUrl(url: string): FootnoteSection;
    }
    /**
     * An enumeration of the supported glyph types.
     *
     * Use the GlyphType enumeration to set the bullet type for list items.
     *
     *     var body = DocumentApp.getActiveDocument().getBody();
     *
     *     // Insert at list item, with the default nesting level of zero.
     *      body.appendListItem("Item 1");
     *
     *      // Append a second list item, with a nesting level of one, indented one inch.
     *      // The two items will have different bullet glyphs.
     *      body.appendListItem("Item 2").setNestingLevel(1).setIndentStart(72)
     *          .setGlyphType(DocumentApp.GlyphType.SQUARE_BULLET);
     */
    enum GlyphType { BULLET, HOLLOW_BULLET, SQUARE_BULLET, NUMBER, LATIN_UPPER, LATIN_LOWER, ROMAN_UPPER, ROMAN_LOWER }
    /**
     * An element representing a header section. A Document typically contains at most one HeaderSection. The HeaderSection may contain ListItem, Paragraph, and
     * Table elements. For more information on document structure, see the guide to extending Google Docs.
     */
    interface HeaderSection extends Element {
      appendHorizontalRule(): HorizontalRule;
      appendImage(image: Base.BlobSource): InlineImage;
      appendImage(image: InlineImage): InlineImage;
      appendListItem(listItem: ListItem): ListItem;
      appendListItem(text: string): ListItem;
      appendParagraph(paragraph: Paragraph): Paragraph;
      appendParagraph(text: string): Paragraph;
      appendTable(): Table;
      appendTable(cells: string[][]): Table;
      appendTable(table: Table): Table;
      clear(): HeaderSection;
      copy(): HeaderSection;
      editAsText(): Text;
      findElement(elementType: ElementType): RangeElement;
      findElement(elementType: ElementType, from: RangeElement): RangeElement;
      findText(searchPattern: string): RangeElement;
      findText(searchPattern: string, from: RangeElement): RangeElement;
      getAttributes(): any;
      getChild(childIndex: Integer): Element;
      getChildIndex(child: Element): Integer;
      getImages(): InlineImage[];
      getListItems(): ListItem[];
      getNumChildren(): Integer;
      getParagraphs(): Paragraph[];
      getParent(): ContainerElement;
      getTables(): Table[];
      getText(): string;
      getTextAlignment(): TextAlignment;
      getType(): ElementType;
      insertHorizontalRule(childIndex: Integer): HorizontalRule;
      insertImage(childIndex: Integer, image: Base.BlobSource): InlineImage;
      insertImage(childIndex: Integer, image: InlineImage): InlineImage;
      insertListItem(childIndex: Integer, listItem: ListItem): ListItem;
      insertListItem(childIndex: Integer, text: string): ListItem;
      insertParagraph(childIndex: Integer, paragraph: Paragraph): Paragraph;
      insertParagraph(childIndex: Integer, text: string): Paragraph;
      insertTable(childIndex: Integer): Table;
      insertTable(childIndex: Integer, cells: string[][]): Table;
      insertTable(childIndex: Integer, table: Table): Table;
      removeChild(child: Element): HeaderSection;
      removeFromParent(): HeaderSection;
      replaceText(searchPattern: string, replacement: string): Element;
      setAttributes(attributes: any): HeaderSection;
      setText(text: string): HeaderSection;
      setTextAlignment(textAlignment: TextAlignment): HeaderSection;
      /** @deprecated DO NOT USE */ getFootnotes(): Footnote[];
      /** @deprecated DO NOT USE */ getLinkUrl(): string;
      /** @deprecated DO NOT USE */ getNextSibling(): Element;
      /** @deprecated DO NOT USE */ getPreviousSibling(): Element;
      /** @deprecated DO NOT USE */ isAtDocumentEnd(): boolean;
      /** @deprecated DO NOT USE */ setLinkUrl(url: string): HeaderSection;
    }
    /**
     * An enumeration of the supported horizontal alignment types.
     *
     * Use the HorizontalAlignment enumeration to manipulate the alignment of Paragraph contents.
     *
     *     var body = DocumentApp.getActiveDocument().getBody();
     *
     *     // Insert a paragraph and a table at the start of document.
     *     var par1 = body.insertParagraph(0, "Center");
     *     var table = body.insertTable(1, [['Left', 'Right']]);
     *     var par2 = table.getCell(0, 0).getChild(0).asParagraph();
     *     var par3 = table.getCell(0, 0).getChild(0).asParagraph();
     *
     *     // Center align the first paragraph.
     *     par1.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
     *
     *     // Left align the first cell.
     *     par2.setAlignment(DocumentApp.HorizontalAlignment.LEFT);
     *
     *     // Right align the second cell.
     *     par3.setAlignment(DocumentApp.HorizontalAlignment.RIGHT);
     */
    enum HorizontalAlignment { LEFT, CENTER, RIGHT, JUSTIFY }
    /**
     * An element representing an horizontal rule. A HorizontalRule can be contained within a
     * ListItem or Paragraph, but cannot itself contain any other element. For more
     * information on document structure, see the guide to extending Google Docs.
     */
    interface HorizontalRule extends Element {
      copy(): HorizontalRule;
      getAttributes(): any;
      getNextSibling(): Element;
      getParent(): ContainerElement;
      getPreviousSibling(): Element;
      getType(): ElementType;
      isAtDocumentEnd(): boolean;
      removeFromParent(): HorizontalRule;
      setAttributes(attributes: any): HorizontalRule;
    }
    /**
     * An element representing an embedded drawing. An InlineDrawing can be contained within a
     * ListItem or Paragraph, unless the ListItem or Paragraph is within
     * a FootnoteSection. An InlineDrawing cannot itself contain any other element. For
     * more information on document structure, see the guide to extending Google Docs.
     */
    interface InlineDrawing extends Element {
      copy(): InlineDrawing;
      getAltDescription(): string;
      getAltTitle(): string;
      getAttributes(): any;
      getNextSibling(): Element;
      getParent(): ContainerElement;
      getPreviousSibling(): Element;
      getType(): ElementType;
      isAtDocumentEnd(): boolean;
      merge(): InlineDrawing;
      removeFromParent(): InlineDrawing;
      setAltDescription(description: string): InlineDrawing;
      setAltTitle(title: string): InlineDrawing;
      setAttributes(attributes: any): InlineDrawing;
    }
    /**
     * An element representing an embedded image. An InlineImage can be contained within a
     * ListItem or Paragraph, unless the ListItem or Paragraph is within
     * a FootnoteSection. An InlineImage cannot itself contain any other element. For
     * more information on document structure, see the guide to extending Google Docs.
     */
    interface InlineImage extends Element {
      copy(): InlineImage;
      getAltDescription(): string;
      getAltTitle(): string;
      getAs(contentType: string): Base.Blob;
      getAttributes(): any;
      getBlob(): Base.Blob;
      getHeight(): Integer;
      getLinkUrl(): string;
      getNextSibling(): Element;
      getParent(): ContainerElement;
      getPreviousSibling(): Element;
      getType(): ElementType;
      getWidth(): Integer;
      isAtDocumentEnd(): boolean;
      merge(): InlineImage;
      removeFromParent(): InlineImage;
      setAltDescription(description: string): InlineImage;
      setAltTitle(title: string): InlineImage;
      setAttributes(attributes: any): InlineImage;
      setHeight(height: Integer): InlineImage;
      setLinkUrl(url: string): InlineImage;
      setWidth(width: Integer): InlineImage;
    }
    /**
     * An element representing a list item. A ListItem is a Paragraph that is associated
     * with a list ID. A ListItem may contain Equation, Footnote, HorizontalRule, InlineDrawing, InlineImage, PageBreak, and Text
     * elements. For more information on document structure, see the guide to extending Google Docs.
     *
     * ListItems may not contain new-line characters. New-line characters ("\n") are
     * converted to line-break characters ("\r").
     *
     * ListItems with the same list ID belong to the same list and are numbered accordingly.
     * The ListItems for a given list are not required to be adjacent in the document or even
     * have the same parent element. Two items belonging to the same list may exist anywhere in the
     * document while maintaining consecutive numbering, as the following example illustrates:
     *
     *     var body = DocumentApp.getActiveDocument().getBody();
     *
     *     // Append a new list item to the body.
     *     var item1 = body.appendListItem('Item 1');
     *
     *     // Log the new list item's list ID.
     *     Logger.log(item1.getListId());
     *
     *     // Append a table after the list item.
     *     body.appendTable([
     *       ['Cell 1', 'Cell 2']
     *     ]);
     *
     *     // Append a second list item with the same list ID. The two items are treated as the same list,
     *     // despite not being consecutive.
     *     var item2 = body.appendListItem('Item 2');
     *     item2.setListId(item1);
     */
    interface ListItem extends Element {
      addPositionedImage(image: Base.BlobSource): PositionedImage;
      appendHorizontalRule(): HorizontalRule;
      appendInlineImage(image: Base.BlobSource): InlineImage;
      appendInlineImage(image: InlineImage): InlineImage;
      appendPageBreak(): PageBreak;
      appendPageBreak(pageBreak: PageBreak): PageBreak;
      appendText(text: string): Text;
      appendText(text: Text): Text;
      clear(): ListItem;
      copy(): ListItem;
      editAsText(): Text;
      findElement(elementType: ElementType): RangeElement;
      findElement(elementType: ElementType, from: RangeElement): RangeElement;
      findText(searchPattern: string): RangeElement;
      findText(searchPattern: string, from: RangeElement): RangeElement;
      getAlignment(): HorizontalAlignment;
      getAttributes(): any;
      getChild(childIndex: Integer): Element;
      getChildIndex(child: Element): Integer;
      getGlyphType(): GlyphType;
      getHeading(): ParagraphHeading;
      getIndentEnd(): number;
      getIndentFirstLine(): number;
      getIndentStart(): number;
      getLineSpacing(): number;
      getLinkUrl(): string;
      getListId(): string;
      getNestingLevel(): Integer;
      getNextSibling(): Element;
      getNumChildren(): Integer;
      getParent(): ContainerElement;
      getPositionedImage(id: string): PositionedImage;
      getPositionedImages(): PositionedImage[];
      getPreviousSibling(): Element;
      getSpacingAfter(): number;
      getSpacingBefore(): number;
      getText(): string;
      getTextAlignment(): TextAlignment;
      getType(): ElementType;
      insertHorizontalRule(childIndex: Integer): HorizontalRule;
      insertInlineImage(childIndex: Integer, image: Base.BlobSource): InlineImage;
      insertInlineImage(childIndex: Integer, image: InlineImage): InlineImage;
      insertPageBreak(childIndex: Integer): PageBreak;
      insertPageBreak(childIndex: Integer, pageBreak: PageBreak): PageBreak;
      insertText(childIndex: Integer, text: string): Text;
      insertText(childIndex: Integer, text: Text): Text;
      isAtDocumentEnd(): boolean;
      isLeftToRight(): boolean;
      merge(): ListItem;
      removeChild(child: Element): ListItem;
      removeFromParent(): ListItem;
      removePositionedImage(id: string): boolean;
      replaceText(searchPattern: string, replacement: string): Element;
      setAlignment(alignment: HorizontalAlignment): ListItem;
      setAttributes(attributes: any): ListItem;
      setGlyphType(glyphType: GlyphType): ListItem;
      setHeading(heading: ParagraphHeading): ListItem;
      setIndentEnd(indentEnd: number): ListItem;
      setIndentFirstLine(indentFirstLine: number): ListItem;
      setIndentStart(indentStart: number): ListItem;
      setLeftToRight(leftToRight: boolean): ListItem;
      setLineSpacing(multiplier: number): ListItem;
      setLinkUrl(url: string): ListItem;
      setListId(listItem: ListItem): ListItem;
      setNestingLevel(nestingLevel: Integer): ListItem;
      setSpacingAfter(spacingAfter: number): ListItem;
      setSpacingBefore(spacingBefore: number): ListItem;
      setText(text: string): void;
      setTextAlignment(textAlignment: TextAlignment): ListItem;
    }
    /**
     * A Range that has a name and ID to allow later retrieval. Names are not
     * necessarily unique; several different ranges in the same document may share the same name, much
     * like a class in HTML. By contrast, IDs are unique within the document, like an ID in HTML. Once a
     * NamedRange has been added to a document, it cannot be modified, only removed.
     *
     * A NamedRange can be accessed by any script that accesses the document. To avoid
     * unintended conflicts between scripts, consider prefixing range names with a unique string.
     *
     *     // Create a named range that includes every table in the document.
     *     var doc = DocumentApp.getActiveDocument();
     *     var rangeBuilder = doc.newRange();
     *     var tables = doc.getBody().getTables();
     *     for (var i = 0; i < tables.length; i++) {
     *       rangeBuilder.addElement(tables[i]);
     *     }
     *     doc.addNamedRange('myUniquePrefix-tables', rangeBuilder.build());
     */
    interface NamedRange {
      getId(): string;
      getName(): string;
      getRange(): Range;
      remove(): void;
    }
    /**
     * An element representing a page break. A PageBreak can be contained within a ListItem or Paragraph, unless the ListItem or Paragraph is within a
     * Table, HeaderSection, FooterSection, or FootnoteSection. A PageBreak cannot itself contain any other element. For more information on document structure,
     * see the guide to extending Google
     * Docs.
     */
    interface PageBreak extends Element {
      copy(): PageBreak;
      getAttributes(): any;
      getNextSibling(): Element;
      getParent(): ContainerElement;
      getPreviousSibling(): Element;
      getType(): ElementType;
      isAtDocumentEnd(): boolean;
      removeFromParent(): PageBreak;
      setAttributes(attributes: any): PageBreak;
    }
    /**
     * An element representing a paragraph. A Paragraph may contain Equation, Footnote, HorizontalRule, InlineDrawing, InlineImage, PageBreak,
     * and Text elements. For more information on document structure, see the guide to extending Google Docs.
     *
     * Paragraphs may not contain new-line characters. New-line characters ("\n") are
     * converted to line-break characters ("\r").
     *
     *     var body = DocumentApp.getActiveDocument().getBody();
     *
     *     // Append a document header paragraph.
     *     var header = body.appendParagraph("A Document");
     *     header.setHeading(DocumentApp.ParagraphHeading.HEADING1);
     *
     *     // Append a section header paragraph.
     *     var section = body.appendParagraph("Section 1");
     *     section.setHeading(DocumentApp.ParagraphHeading.HEADING2);
     *
     *     // Append a regular paragraph.
     *     body.appendParagraph("This is a typical paragraph.");
     */
    interface Paragraph extends Element {
      addPositionedImage(image: Base.BlobSource): PositionedImage;
      appendHorizontalRule(): HorizontalRule;
      appendInlineImage(image: Base.BlobSource): InlineImage;
      appendInlineImage(image: InlineImage): InlineImage;
      appendPageBreak(): PageBreak;
      appendPageBreak(pageBreak: PageBreak): PageBreak;
      appendText(text: string): Text;
      appendText(text: Text): Text;
      clear(): Paragraph;
      copy(): Paragraph;
      editAsText(): Text;
      findElement(elementType: ElementType): RangeElement;
      findElement(elementType: ElementType, from: RangeElement): RangeElement;
      findText(searchPattern: string): RangeElement;
      findText(searchPattern: string, from: RangeElement): RangeElement;
      getAlignment(): HorizontalAlignment;
      getAttributes(): any;
      getChild(childIndex: Integer): Element;
      getChildIndex(child: Element): Integer;
      getHeading(): ParagraphHeading;
      getIndentEnd(): number;
      getIndentFirstLine(): number;
      getIndentStart(): number;
      getLineSpacing(): number;
      getLinkUrl(): string;
      getNextSibling(): Element;
      getNumChildren(): Integer;
      getParent(): ContainerElement;
      getPositionedImage(id: string): PositionedImage;
      getPositionedImages(): PositionedImage[];
      getPreviousSibling(): Element;
      getSpacingAfter(): number;
      getSpacingBefore(): number;
      getText(): string;
      getTextAlignment(): TextAlignment;
      getType(): ElementType;
      insertHorizontalRule(childIndex: Integer): HorizontalRule;
      insertInlineImage(childIndex: Integer, image: Base.BlobSource): InlineImage;
      insertInlineImage(childIndex: Integer, image: InlineImage): InlineImage;
      insertPageBreak(childIndex: Integer): PageBreak;
      insertPageBreak(childIndex: Integer, pageBreak: PageBreak): PageBreak;
      insertText(childIndex: Integer, text: string): Text;
      insertText(childIndex: Integer, text: Text): Text;
      isAtDocumentEnd(): boolean;
      isLeftToRight(): boolean;
      merge(): Paragraph;
      removeChild(child: Element): Paragraph;
      removeFromParent(): Paragraph;
      removePositionedImage(id: string): boolean;
      replaceText(searchPattern: string, replacement: string): Element;
      setAlignment(alignment: HorizontalAlignment): Paragraph;
      setAttributes(attributes: any): Paragraph;
      setHeading(heading: ParagraphHeading): Paragraph;
      setIndentEnd(indentEnd: number): Paragraph;
      setIndentFirstLine(indentFirstLine: number): Paragraph;
      setIndentStart(indentStart: number): Paragraph;
      setLeftToRight(leftToRight: boolean): Paragraph;
      setLineSpacing(multiplier: number): Paragraph;
      setLinkUrl(url: string): Paragraph;
      setSpacingAfter(spacingAfter: number): Paragraph;
      setSpacingBefore(spacingBefore: number): Paragraph;
      setText(text: string): void;
      setTextAlignment(textAlignment: TextAlignment): Paragraph;
    }
    /**
     * An enumeration of the standard paragraph headings.
     *
     * Use the ParagraphHeading enumeration to configure the heading style for ParagraphElement.
     *
     *     var body = DocumentApp.getActiveDocument().getBody();
     *
     *     // Append a paragraph, with heading 1.
     *     var par1 = body.appendParagraph("Title");
     *     par1.setHeading(DocumentApp.ParagraphHeading.HEADING1);
     *
     *     // Append a paragraph, with heading 2.
     *     var par2 = body.appendParagraph("SubTitle");
     *     par2.setHeading(DocumentApp.ParagraphHeading.HEADING2);
     *
     *     // Append a paragraph, with normal heading.
     *     var par3 = body.appendParagraph("Text");
     *     par3.setHeading(DocumentApp.ParagraphHeading.NORMAL);
     */
    enum ParagraphHeading { NORMAL, HEADING1, HEADING2, HEADING3, HEADING4, HEADING5, HEADING6, TITLE, SUBTITLE }
    /**
     * A reference to a location in the document, relative to a specific element. The user's cursor is
     * represented as a Position, among other uses. Scripts can only access the cursor of the
     * user who is running the script, and only if the script is bound to the document.
     *
     *     // Insert some text at the cursor position and make it bold.
     *     var cursor = DocumentApp.getActiveDocument().getCursor();
     *     if (cursor) {
     *       // Attempt to insert text at the cursor position. If the insertion returns null, the cursor's
     *       // containing element doesn't allow insertions, so show the user an error message.
     *       var element = cursor.insertText('ಠ‿ಠ');
     *       if (element) {
     *         element.setBold(true);
     *       } else {
     *         DocumentApp.getUi().alert('Cannot insert text here.');
     *       }
     *     } else {
     *       DocumentApp.getUi().alert('Cannot find a cursor.');
     *     }
     */
    interface Position {
      getElement(): Element;
      getOffset(): Integer;
      getSurroundingText(): Text;
      getSurroundingTextOffset(): Integer;
      insertBookmark(): Bookmark;
      insertInlineImage(image: Base.BlobSource): InlineImage;
      insertText(text: string): Text;
    }
    /**
     * Fixed position image anchored to a Paragraph. Unlike an InlineImage, a PositionedImage is
     * not an Element. It does not have a
     * parent or sibling Element. Instead,
     * it is anchored to a Paragraph or ListItem, and is placed via offsets from
     * that anchor. A PositionedImage has an ID that can be used to reference it.
     *
     *     var body = DocumentApp.getActiveDocument().getBody();
     *
     *     // Append a new paragraph.
     *     var paragraph = body.appendParagraph("New paragraph to anchor the image to.");
     *     *
     *     // Get an image in Drive from its ID.
     *     var image = DriveApp.getFileById('ENTER_IMAGE_FILE_ID_HERE').getBlob();
     *
     *     // Add the PositionedImage with offsets (in points).
     *     var posImage = paragraph.addPositionedImage(image)
     *         .setTopOffset(60)
     *         .setLeftOffset(40);
     */
    interface PositionedImage {
      getAs(contentType: string): Base.Blob;
      getBlob(): Base.Blob;
      getHeight(): Integer;
      getId(): string;
      getLayout(): PositionedLayout;
      getLeftOffset(): number;
      getParagraph(): Paragraph;
      getTopOffset(): number;
      getWidth(): Integer;
      setHeight(height: Integer): PositionedImage;
      setLayout(layout: PositionedLayout): PositionedImage;
      setLeftOffset(offset: number): PositionedImage;
      setTopOffset(offset: number): PositionedImage;
      setWidth(width: Integer): PositionedImage;
    }
    /**
     * An enumeration that specifies how to lay out a PositionedImage in relation to surrounding
     * text.
     */
    enum PositionedLayout { ABOVE_TEXT, BREAK_BOTH, BREAK_LEFT, BREAK_RIGHT, WRAP_TEXT }
    /**
     * A range of elements in a document. The user's selection is represented as a Range, among
     * other uses. Scripts can only access the selection of the user who is running the script, and only
     * if the script is bound to the document.
     *
     *     // Bold all selected text.
     *     var selection = DocumentApp.getActiveDocument().getSelection();
     *     if (selection) {
     *       var elements = selection.getRangeElements();
     *       for (var i = 0; i < elements.length; i++) {
     *         var element = elements[i];
     *
     *         // Only modify elements that can be edited as text; skip images and other non-text elements.
     *         if (element.getElement().editAsText) {
     *           var text = element.getElement().editAsText();
     *
     *           // Bold the selected part of the element, or the full element if it's completely selected.
     *           if (element.isPartial()) {
     *             text.setBold(element.getStartOffset(), element.getEndOffsetInclusive(), true);
     *           } else {
     *             text.setBold(true);
     *           }
     *         }
     *       }
     *     }
     */
    interface Range {
      getRangeElements(): RangeElement[];
      /** @deprecated DO NOT USE */ getSelectedElements(): RangeElement[];
    }
    /**
     * A builder used to construct Range objects from document elements.
     *
     *     // Change the user's selection to a range that includes every table in the document.
     *     var doc = DocumentApp.getActiveDocument();
     *     var rangeBuilder = doc.newRange();
     *     var tables = doc.getBody().getTables();
     *     for (var i = 0; i < tables.length; i++) {
     *       rangeBuilder.addElement(tables[i]);
     *     }
     *     doc.setSelection(rangeBuilder.build());
     */
    interface RangeBuilder {
      addElement(element: Element): RangeBuilder;
      addElement(textElement: Text, startOffset: Integer, endOffsetInclusive: Integer): RangeBuilder;
      addElementsBetween(startElement: Element, endElementInclusive: Element): RangeBuilder;
      addElementsBetween(startTextElement: Text, startOffset: Integer, endTextElementInclusive: Text, endOffsetInclusive: Integer): RangeBuilder;
      addRange(range: Range): RangeBuilder;
      build(): Range;
      getRangeElements(): RangeElement[];
      /** @deprecated DO NOT USE */ getSelectedElements(): RangeElement[];
    }
    /**
     * A wrapper around an Element with a possible start and end offset. These offsets allow a
     * range of characters within a Text
     * element to be represented in search results, document selections, and named ranges.
     */
    interface RangeElement {
      getElement(): Element;
      getEndOffsetInclusive(): Integer;
      getStartOffset(): Integer;
      isPartial(): boolean;
    }
    /**
     * An element representing a table. A Table may only contain TableRow elements. For
     * more information on document structure, see the guide to extending Google Docs.
     *
     * When creating a Table that contains a large number of rows or cells, consider building
     * it from a string array, as shown in the following example.
     *
     *     var body = DocumentApp.getActiveDocument().getBody();
     *
     *     // Create a two-dimensional array containing the cell contents.
     *     var cells = [
     *       ['Row 1, Cell 1', 'Row 1, Cell 2'],
     *       ['Row 2, Cell 1', 'Row 2, Cell 2']
     *     ];
     *
     *     // Build a table from the array.
     *     body.appendTable(cells);
     */
    interface Table extends Element {
      appendTableRow(): TableRow;
      appendTableRow(tableRow: TableRow): TableRow;
      clear(): Table;
      copy(): Table;
      editAsText(): Text;
      findElement(elementType: ElementType): RangeElement;
      findElement(elementType: ElementType, from: RangeElement): RangeElement;
      findText(searchPattern: string): RangeElement;
      findText(searchPattern: string, from: RangeElement): RangeElement;
      getAttributes(): any;
      getBorderColor(): string;
      getBorderWidth(): number;
      getCell(rowIndex: Integer, cellIndex: Integer): TableCell;
      getChild(childIndex: Integer): Element;
      getChildIndex(child: Element): Integer;
      getColumnWidth(columnIndex: Integer): number;
      getLinkUrl(): string;
      getNextSibling(): Element;
      getNumChildren(): Integer;
      getNumRows(): Integer;
      getParent(): ContainerElement;
      getPreviousSibling(): Element;
      getRow(rowIndex: Integer): TableRow;
      getText(): string;
      getTextAlignment(): TextAlignment;
      getType(): ElementType;
      insertTableRow(childIndex: Integer): TableRow;
      insertTableRow(childIndex: Integer, tableRow: TableRow): TableRow;
      isAtDocumentEnd(): boolean;
      removeChild(child: Element): Table;
      removeFromParent(): Table;
      removeRow(rowIndex: Integer): TableRow;
      replaceText(searchPattern: string, replacement: string): Element;
      setAttributes(attributes: any): Table;
      setBorderColor(color: string): Table;
      setBorderWidth(width: number): Table;
      setColumnWidth(columnIndex: Integer, width: number): Table;
      setLinkUrl(url: string): Table;
      setTextAlignment(textAlignment: TextAlignment): Table;
    }
    /**
     * An element representing a table cell. A TableCell is always contained within a TableRow and may contain ListItem, Paragraph, or Table elements. For
     * more information on document structure, see the guide to extending Google Docs.
     */
    interface TableCell extends Element {
      appendHorizontalRule(): HorizontalRule;
      appendImage(image: Base.BlobSource): InlineImage;
      appendImage(image: InlineImage): InlineImage;
      appendListItem(listItem: ListItem): ListItem;
      appendListItem(text: string): ListItem;
      appendParagraph(paragraph: Paragraph): Paragraph;
      appendParagraph(text: string): Paragraph;
      appendTable(): Table;
      appendTable(cells: string[][]): Table;
      appendTable(table: Table): Table;
      clear(): TableCell;
      copy(): TableCell;
      editAsText(): Text;
      findElement(elementType: ElementType): RangeElement;
      findElement(elementType: ElementType, from: RangeElement): RangeElement;
      findText(searchPattern: string): RangeElement;
      findText(searchPattern: string, from: RangeElement): RangeElement;
      getAttributes(): any;
      getBackgroundColor(): string;
      getChild(childIndex: Integer): Element;
      getChildIndex(child: Element): Integer;
      getColSpan(): Integer;
      getLinkUrl(): string;
      getNextSibling(): Element;
      getNumChildren(): Integer;
      getPaddingBottom(): number;
      getPaddingLeft(): number;
      getPaddingRight(): number;
      getPaddingTop(): number;
      getParent(): ContainerElement;
      getParentRow(): TableRow;
      getParentTable(): Table;
      getPreviousSibling(): Element;
      getRowSpan(): Integer;
      getText(): string;
      getTextAlignment(): TextAlignment;
      getType(): ElementType;
      getVerticalAlignment(): VerticalAlignment;
      getWidth(): number;
      insertHorizontalRule(childIndex: Integer): HorizontalRule;
      insertImage(childIndex: Integer, image: Base.BlobSource): InlineImage;
      insertImage(childIndex: Integer, image: InlineImage): InlineImage;
      insertListItem(childIndex: Integer, listItem: ListItem): ListItem;
      insertListItem(childIndex: Integer, text: string): ListItem;
      insertParagraph(childIndex: Integer, paragraph: Paragraph): Paragraph;
      insertParagraph(childIndex: Integer, text: string): Paragraph;
      insertTable(childIndex: Integer): Table;
      insertTable(childIndex: Integer, cells: string[][]): Table;
      insertTable(childIndex: Integer, table: Table): Table;
      isAtDocumentEnd(): boolean;
      merge(): TableCell;
      removeChild(child: Element): TableCell;
      removeFromParent(): TableCell;
      replaceText(searchPattern: string, replacement: string): Element;
      setAttributes(attributes: any): TableCell;
      setBackgroundColor(color: string): TableCell;
      setLinkUrl(url: string): TableCell;
      setPaddingBottom(paddingBottom: number): TableCell;
      setPaddingLeft(paddingLeft: number): TableCell;
      setPaddingRight(paddingTop: number): TableCell;
      setPaddingTop(paddingTop: number): TableCell;
      setText(text: string): TableCell;
      setTextAlignment(textAlignment: TextAlignment): TableCell;
      setVerticalAlignment(alignment: VerticalAlignment): TableCell;
      setWidth(width: number): TableCell;
    }
    /**
     * An element containing a table of contents. A TableOfContents may contain ListItem, Paragraph, and Table elements, although the contents of a TableOfContents are usually generated automatically by Google Docs. For more information on
     * document structure, see the guide to
     * extending Google Docs.
     */
    interface TableOfContents extends Element {
      clear(): TableOfContents;
      copy(): TableOfContents;
      editAsText(): Text;
      findElement(elementType: ElementType): RangeElement;
      findElement(elementType: ElementType, from: RangeElement): RangeElement;
      findText(searchPattern: string): RangeElement;
      findText(searchPattern: string, from: RangeElement): RangeElement;
      getAttributes(): any;
      getChild(childIndex: Integer): Element;
      getChildIndex(child: Element): Integer;
      getLinkUrl(): string;
      getNextSibling(): Element;
      getNumChildren(): Integer;
      getParent(): ContainerElement;
      getPreviousSibling(): Element;
      getText(): string;
      getTextAlignment(): TextAlignment;
      getType(): ElementType;
      isAtDocumentEnd(): boolean;
      removeFromParent(): TableOfContents;
      replaceText(searchPattern: string, replacement: string): Element;
      setAttributes(attributes: any): TableOfContents;
      setLinkUrl(url: string): TableOfContents;
      setTextAlignment(textAlignment: TextAlignment): TableOfContents;
    }
    /**
     * An element representing a table row. A TableRow is always contained within a Table and may only contain TableCell elements. For more information on document
     * structure, see the guide to extending
     * Google Docs.
     */
    interface TableRow extends Element {
      appendTableCell(): TableCell;
      appendTableCell(textContents: string): TableCell;
      appendTableCell(tableCell: TableCell): TableCell;
      clear(): TableRow;
      copy(): TableRow;
      editAsText(): Text;
      findElement(elementType: ElementType): RangeElement;
      findElement(elementType: ElementType, from: RangeElement): RangeElement;
      findText(searchPattern: string): RangeElement;
      findText(searchPattern: string, from: RangeElement): RangeElement;
      getAttributes(): any;
      getCell(cellIndex: Integer): TableCell;
      getChild(childIndex: Integer): Element;
      getChildIndex(child: Element): Integer;
      getLinkUrl(): string;
      getMinimumHeight(): number;
      getNextSibling(): Element;
      getNumCells(): Integer;
      getNumChildren(): Integer;
      getParent(): ContainerElement;
      getParentTable(): Table;
      getPreviousSibling(): Element;
      getText(): string;
      getTextAlignment(): TextAlignment;
      getType(): ElementType;
      insertTableCell(childIndex: Integer): TableCell;
      insertTableCell(childIndex: Integer, textContents: string): TableCell;
      insertTableCell(childIndex: Integer, tableCell: TableCell): TableCell;
      isAtDocumentEnd(): boolean;
      merge(): TableRow;
      removeCell(cellIndex: Integer): TableCell;
      removeChild(child: Element): TableRow;
      removeFromParent(): TableRow;
      replaceText(searchPattern: string, replacement: string): Element;
      setAttributes(attributes: any): TableRow;
      setLinkUrl(url: string): TableRow;
      setMinimumHeight(minHeight: number): TableRow;
      setTextAlignment(textAlignment: TextAlignment): TableRow;
    }
    /**
     * An element representing a rich text region. All text in a Document is contained within Text elements.
     * A Text element can be contained within an Equation, EquationFunction,
     * ListItem, or Paragraph, but cannot itself contain any other element. For more
     * information on document structure, see the guide to extending Google Docs.
     *
     *     var body = DocumentApp.getActiveDocument().getBody();
     *
     *     // Use editAsText to obtain a single text element containing
     *     // all the characters in the document.
     *     var text = body.editAsText();
     *
     *     // Insert text at the beginning of the document.
     *     text.insertText(0, 'Inserted text.\n');
     *
     *     // Insert text at the end of the document.
     *     text.appendText('\nAppended text.');
     *
     *     // Make the first half of the document blue.
     *     text.setForegroundColor(0, text.getText().length / 2, '#00FFFF');
     */
    interface Text extends Element {
      appendText(text: string): Text;
      copy(): Text;
      deleteText(startOffset: Integer, endOffsetInclusive: Integer): Text;
      editAsText(): Text;
      findText(searchPattern: string): RangeElement;
      findText(searchPattern: string, from: RangeElement): RangeElement;
      getAttributes(): any;
      getAttributes(offset: Integer): any;
      getBackgroundColor(): string;
      getBackgroundColor(offset: Integer): string;
      getFontFamily(): string;
      getFontFamily(offset: Integer): string;
      getFontSize(): Integer;
      getFontSize(offset: Integer): Integer;
      getForegroundColor(): string;
      getForegroundColor(offset: Integer): string;
      getLinkUrl(): string;
      getLinkUrl(offset: Integer): string;
      getNextSibling(): Element;
      getParent(): ContainerElement;
      getPreviousSibling(): Element;
      getText(): string;
      getTextAlignment(): TextAlignment;
      getTextAlignment(offset: Integer): TextAlignment;
      getTextAttributeIndices(): Integer[];
      getType(): ElementType;
      insertText(offset: Integer, text: string): Text;
      isAtDocumentEnd(): boolean;
      isBold(): boolean;
      isBold(offset: Integer): boolean;
      isItalic(): boolean;
      isItalic(offset: Integer): boolean;
      isStrikethrough(): boolean;
      isStrikethrough(offset: Integer): boolean;
      isUnderline(): boolean;
      isUnderline(offset: Integer): boolean;
      merge(): Text;
      removeFromParent(): Text;
      replaceText(searchPattern: string, replacement: string): Element;
      setAttributes(startOffset: Integer, endOffsetInclusive: Integer, attributes: any): Text;
      setAttributes(attributes: any): Text;
      setBackgroundColor(startOffset: Integer, endOffsetInclusive: Integer, color: string): Text;
      setBackgroundColor(color: string): Text;
      setBold(bold: boolean): Text;
      setBold(startOffset: Integer, endOffsetInclusive: Integer, bold: boolean): Text;
      setFontFamily(startOffset: Integer, endOffsetInclusive: Integer, fontFamilyName: string): Text;
      setFontFamily(fontFamilyName: string): Text;
      setFontSize(size: Integer): Text;
      setFontSize(startOffset: Integer, endOffsetInclusive: Integer, size: Integer): Text;
      setForegroundColor(startOffset: Integer, endOffsetInclusive: Integer, color: string): Text;
      setForegroundColor(color: string): Text;
      setItalic(italic: boolean): Text;
      setItalic(startOffset: Integer, endOffsetInclusive: Integer, italic: boolean): Text;
      setLinkUrl(startOffset: Integer, endOffsetInclusive: Integer, url: string): Text;
      setLinkUrl(url: string): Text;
      setStrikethrough(strikethrough: boolean): Text;
      setStrikethrough(startOffset: Integer, endOffsetInclusive: Integer, strikethrough: boolean): Text;
      setText(text: string): Text;
      setTextAlignment(startOffset: Integer, endOffsetInclusive: Integer, textAlignment: TextAlignment): Text;
      setTextAlignment(textAlignment: TextAlignment): Text;
      setUnderline(underline: boolean): Text;
      setUnderline(startOffset: Integer, endOffsetInclusive: Integer, underline: boolean): Text;
    }
    /**
     * An enumeration of the type of text alignments.
     *
     *     // Make the first character in the first paragraph be superscript.
     *     var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
     *     text.setTextAlignment(0, 0, DocumentApp.TextAlignment.SUPERSCRIPT);
     */
    enum TextAlignment { NORMAL, SUPERSCRIPT, SUBSCRIPT }
    /**
     * An element representing a region that is unknown or cannot be affected by a script, such as a
     * page number.
     */
    interface UnsupportedElement extends Element {
      copy(): UnsupportedElement;
      getAttributes(): any;
      getNextSibling(): Element;
      getParent(): ContainerElement;
      getPreviousSibling(): Element;
      getType(): ElementType;
      isAtDocumentEnd(): boolean;
      merge(): UnsupportedElement;
      removeFromParent(): UnsupportedElement;
      setAttributes(attributes: any): UnsupportedElement;
    }
    /**
     * An enumeration of the supported vertical alignment types.
     *
     * Use the VerticalAlignment enumeration to set the vertical alignment of table cells.
     *
     *     var body = DocumentApp.getActiveDocument().getBody();
     *
     *     // Append table containing two cells.
     *     var table = body.appendTable([['Top', 'Center', 'Bottom']]);
     *
     *     // Align the first cell's contents to the top.
     *     table.getCell(0, 0).setVerticalAlignment(DocumentApp.VerticalAlignment.TOP);
     *
     *     // Align the second cell's contents to the center.
     *     table.getCell(0, 1).setVerticalAlignment(DocumentApp.VerticalAlignment.CENTER);
     *
     *     // Align the third cell's contents to the bottom.
     *     table.getCell(0, 2).setVerticalAlignment(DocumentApp.VerticalAlignment.BOTTOM);
     */
    enum VerticalAlignment { BOTTOM, CENTER, TOP }
  }
}

declare var DocumentApp: GoogleAppsScript.Document.DocumentApp;
