// Type definitions for Google Apps Script 2017-05-12
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />

declare namespace GoogleAppsScript {
  export module XML_Service {
    /**
     * A representation of an XML attribute.
     *
     *      // Reads the first and last name of each person and adds a new attribute with the full name.
     *      var xml = '<roster>'
     *          + '<person first="John" last="Doe"/>'
     *          + '<person first="Mary" last="Smith"/>'
     *          + '</roster>';
     *      var document = XmlService.parse(xml);
     *      var people = document.getRootElement().getChildren('person');
     *      for (var i = 0; i < people.length; i++) {
     *        var person = people[i];
     *        var firstName = person.getAttribute('first').getValue();
     *        var lastName = person.getAttribute('last').getValue();
     *        person.setAttribute('full', firstName + ' ' + lastName);
     *      }
     *      xml = XmlService.getPrettyFormat().format(document);
     *      Logger.log(xml);
     */
    export interface Attribute {
      getName(): string;
      getNamespace(): Namespace;
      getValue(): string;
      setName(name: string): Attribute;
      setNamespace(namespace: Namespace): Attribute;
      setValue(value: string): Attribute;
    }

    /**
     * A representation of an XML CDATASection node.
     *
     *      // Create and log an XML document that shows how special characters like '<', '>', and '&' are
     *      // stored in a CDATASection node as compared to in a Text node.
     *      var illegalCharacters = '<em>The Amazing Adventures of Kavalier & Clay</em>';
     *      var cdata = XmlService.createCdata(illegalCharacters);
     *      var text = XmlService.createText(illegalCharacters);
     *      var root = XmlService.createElement('root').addContent(cdata).addContent(text);
     *      var document = XmlService.createDocument(root);
     *      var xml = XmlService.getPrettyFormat().format(document);
     *      Logger.log(xml);
     */
    export interface Cdata {
      append(text: string): Text;
      detach(): Content;
      getParentElement(): Element;
      getText(): string;
      getValue(): string;
      setText(text: string): Text;
    }

    /**
     * A representation of an XML Comment node.
     */
    export interface Comment {
      detach(): Content;
      getParentElement(): Element;
      getText(): string;
      getValue(): string;
      setText(text: string): Comment;
    }

    /**
     * A representation of a generic XML node.
     * Implementing classes
     *
     * NameBrief description
     *
     * CdataA representation of an XML CDATASection node.
     *
     * CommentA representation of an XML Comment node.
     *
     * DocTypeA representation of an XML DocumentType node.
     *
     * ElementA representation of an XML Element node.
     *
     * EntityRefA representation of an XML EntityReference node.
     *
     * ProcessingInstructionA representation of an XML ProcessingInstruction node.
     *
     * TextA representation of an XML Text node.
     */
    export interface Content {
      asCdata(): Cdata;
      asComment(): Comment;
      asDocType(): DocType;
      asElement(): Element;
      asEntityRef(): EntityRef;
      asProcessingInstruction(): ProcessingInstruction;
      asText(): Text;
      detach(): Content;
      getParentElement(): Element;
      getType(): ContentType;
      getValue(): string;
    }

    /**
     * An enumeration representing the types of XML content nodes.
     */
    export enum ContentType { CDATA, COMMENT, DOCTYPE, ELEMENT, ENTITYREF, PROCESSINGINSTRUCTION, TEXT }

    /**
     * A representation of an XML DocumentType node.
     */
    export interface DocType {
      detach(): Content;
      getElementName(): string;
      getInternalSubset(): string;
      getParentElement(): Element;
      getPublicId(): string;
      getSystemId(): string;
      getValue(): string;
      setElementName(name: string): DocType;
      setInternalSubset(data: string): DocType;
      setPublicId(id: string): DocType;
      setSystemId(id: string): DocType;
    }

    /**
     * A representation of an XML document.
     */
    export interface Document {
      addContent(content: Content): Document;
      addContent(index: Integer, content: Content): Document;
      cloneContent(): Content[];
      detachRootElement(): Element;
      getAllContent(): Content[];
      getContent(index: Integer): Content;
      getContentSize(): Integer;
      getDescendants(): Content[];
      getDocType(): DocType;
      getRootElement(): Element;
      hasRootElement(): boolean;
      removeContent(): Content[];
      removeContent(content: Content): boolean;
      removeContent(index: Integer): Content;
      setDocType(docType: DocType): Document;
      setRootElement(element: Element): Document;
    }

    /**
     * A representation of an XML Element node.
     *
     *      // Adds up the values listed in a sample XML document and adds a new element with the total.
     *      var xml = '<things>'
     *          + '<plates>12</plates>'
     *          + '<bowls>18</bowls>'
     *          + '<cups>25</cups>'
     *          + '</things>';
     *      var document = XmlService.parse(xml);
     *      var root = document.getRootElement();
     *      var items = root.getChildren();
     *      var total = 0;
     *      for (var i = 0; i < items.length; i++) {
     *        total += Number(items[i].getText());
     *      }
     *      var totalElement = XmlService.createElement('total').setText(total);
     *      root.addContent(totalElement);
     *      xml = XmlService.getPrettyFormat().format(document);
     *      Logger.log(xml);
     */
    export interface Element {
      addContent(content: Content): Element;
      addContent(index: Integer, content: Content): Element;
      cloneContent(): Content[];
      detach(): Content;
      getAllContent(): Content[];
      getAttribute(name: string): Attribute;
      getAttribute(name: string, namespace: Namespace): Attribute;
      getAttributes(): Attribute[];
      getChild(name: string): Element;
      getChild(name: string, namespace: Namespace): Element;
      getChildText(name: string): string;
      getChildText(name: string, namespace: Namespace): string;
      getChildren(): Element[];
      getChildren(name: string): Element[];
      getChildren(name: string, namespace: Namespace): Element[];
      getContent(index: Integer): Content;
      getContentSize(): Integer;
      getDescendants(): Content[];
      getDocument(): Document;
      getName(): string;
      getNamespace(): Namespace;
      getNamespace(prefix: string): Namespace;
      getParentElement(): Element;
      getQualifiedName(): string;
      getText(): string;
      getValue(): string;
      isAncestorOf(other: Element): boolean;
      isRootElement(): boolean;
      removeAttribute(attribute: Attribute): boolean;
      removeAttribute(attributeName: string): boolean;
      removeAttribute(attributeName: string, namespace: Namespace): boolean;
      removeContent(): Content[];
      removeContent(content: Content): boolean;
      removeContent(index: Integer): Content;
      setAttribute(attribute: Attribute): Element;
      setAttribute(name: string, value: string): Element;
      setAttribute(name: string, value: string, namespace: Namespace): Element;
      setName(name: string): Element;
      setNamespace(namespace: Namespace): Element;
      setText(text: string): Element;
    }

    /**
     * A representation of an XML EntityReference node.
     */
    export interface EntityRef {
      detach(): Content;
      getName(): string;
      getParentElement(): Element;
      getPublicId(): string;
      getSystemId(): string;
      getValue(): string;
      setName(name: string): EntityRef;
      setPublicId(id: string): EntityRef;
      setSystemId(id: string): EntityRef;
    }

    /**
     * A formatter for outputting an XML document, with three pre-defined formats that can be further
     *  customized.
     *
     *      // Log an XML document with specified formatting options.
     *      var xml = '<root><a><b>Text!</b><b>More text!</b></a></root>';
     *      var document = XmlService.parse(xml);
     *      var output = XmlService.getCompactFormat()
     *          .setLineSeparator('\n')
     *          .setEncoding('UTF-8')
     *          .setIndent('   ')
     *          .format(document);
     *      Logger.log(output);
     */
    export interface Format {
      format(document: Document): string;
      format(element: Element): string;
      setEncoding(encoding: string): Format;
      setIndent(indent: string): Format;
      setLineSeparator(separator: string): Format;
      setOmitDeclaration(omitDeclaration: boolean): Format;
      setOmitEncoding(omitEncoding: boolean): Format;
    }

    /**
     * A representation of an XML namespace.
     */
    export interface Namespace {
      getPrefix(): string;
      getURI(): string;
    }

    /**
     * A representation of an XML ProcessingInstruction node.
     */
    export interface ProcessingInstruction {
      detach(): Content;
      getData(): string;
      getParentElement(): Element;
      getTarget(): string;
      getValue(): string;
    }

    /**
     * A representation of an XML Text node.
     */
    export interface Text {
      append(text: string): Text;
      detach(): Content;
      getParentElement(): Element;
      getText(): string;
      getValue(): string;
      setText(text: string): Text;
    }

    /**
     * This service allows scripts to parse, navigate, and programmatically create XML documents.
     *
     *      // Log the title and labels for the first page of blog posts on the G Suite Developer blog.
     *      function parseXml() {
     *        var url = 'https://gsuite-developers.googleblog.com/atom.xml';
     *        var xml = UrlFetchApp.fetch(url).getContentText();
     *        var document = XmlService.parse(xml);
     *        var root = document.getRootElement();
     *        var atom = XmlService.getNamespace('http://www.w3.org/2005/Atom');
     *
     *        var entries = document.getRootElement().getChildren('entry', atom);
     *        for (var i = 0; i < entries.length; i++) {
     *          var title = entries[i].getChild('title', atom).getText();
     *          var categoryElements = entries[i].getChildren('category', atom);
     *          var labels = [];
     *          for (var j = 0; j < categoryElements.length; j++) {
     *            labels.push(categoryElements[j].getAttribute('term').getValue());
     *          }
     *          Logger.log('%s (%s)', title, labels.join(', '));
     *        }
     *      }
     *
     *      // Create and log an XML representation of the threads in your Gmail inbox.
     *      function createXml() {
     *        var root = XmlService.createElement('threads');
     *        var threads = GmailApp.getInboxThreads();
     *        for (var i = 0; i < threads.length; i++) {
     *          var child = XmlService.createElement('thread')
     *              .setAttribute('messageCount', threads[i].getMessageCount())
     *              .setAttribute('isUnread', threads[i].isUnread())
     *              .setText(threads[i].getFirstMessageSubject());
     *          root.addContent(child);
     *        }
     *        var document = XmlService.createDocument(root);
     *        var xml = XmlService.getPrettyFormat().format(document);
     *        Logger.log(xml);
     *      }
     */
    export interface XmlService {
      ContentTypes: typeof ContentType;
      createCdata(text: string): Cdata;
      createComment(text: string): Comment;
      createDocType(elementName: string): DocType;
      createDocType(elementName: string, systemId: string): DocType;
      createDocType(elementName: string, publicId: string, systemId: string): DocType;
      createDocument(): Document;
      createDocument(rootElement: Element): Document;
      createElement(name: string): Element;
      createElement(name: string, namespace: Namespace): Element;
      createText(text: string): Text;
      getCompactFormat(): Format;
      getNamespace(uri: string): Namespace;
      getNamespace(prefix: string, uri: string): Namespace;
      getNoNamespace(): Namespace;
      getPrettyFormat(): Format;
      getRawFormat(): Format;
      getXmlNamespace(): Namespace;
      parse(xml: string): Document;
    }

  }
}

declare var XmlService: GoogleAppsScript.XML_Service.XmlService;
