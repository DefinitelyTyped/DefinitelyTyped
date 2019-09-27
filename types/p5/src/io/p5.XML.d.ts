// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    class XML {
        /**
         *   XML is a representation of an XML object, able to
         *   parse XML code. Use loadXML() to load external XML
         *   files and create XML objects.
         *
         */
        constructor();

        /**
         *   Gets a copy of the element's parent. Returns the
         *   parent as another p5.XML object.
         *   @return element parent
         */
        getParent(): XML;

        /**
         *   Gets the element's full name, which is returned as
         *   a String.
         *   @return the name of the node
         */
        getName(): string;

        /**
         *   Sets the element's name, which is specified as a
         *   String.
         *   @param the new name of the node
         */
        setName(the: string): void;

        /**
         *   Checks whether or not the element has any
         *   children, and returns the result as a boolean.
         */
        hasChildren(): boolean;

        /**
         *   Get the names of all of the element's children,
         *   and returns the names as an array of Strings. This
         *   is the same as looping through and calling
         *   getName() on each child element individually.
         *   @return names of the children of the element
         */
        listChildren(): string[];

        /**
         *   Returns all of the element's children as an array
         *   of p5.XML objects. When the name parameter is
         *   specified, then it will return all children that
         *   match that name.
         *   @param [name] element name
         *   @return children of the element
         */
        getChildren(name?: string): XML[];

        /**
         *   Returns the first of the element's children that
         *   matches the name parameter or the child of the
         *   given index.It returns undefined if no matching
         *   child is found.
         *   @param name element name or index
         */
        getChild(name: string | number): XML;

        /**
         *   Appends a new child to the element. The child can
         *   be specified with either a String, which will be
         *   used as the new tag's name, or as a reference to
         *   an existing p5.XML object. A reference to the
         *   newly created child is returned as an p5.XML
         *   object.
         *   @param node a p5.XML Object which will be the
         *   child to be added
         */
        addChild(node: XML): void;

        /**
         *   Removes the element specified by name or index.
         *   @param name element name or index
         */
        removeChild(name: string | number): void;

        /**
         *   Counts the specified element's number of
         *   attributes, returned as an Number.
         */
        getAttributeCount(): number;

        /**
         *   Gets all of the specified element's attributes,
         *   and returns them as an array of Strings.
         *   @return an array of strings containing the names
         *   of attributes
         */
        listAttributes(): string[];

        /**
         *   Checks whether or not an element has the specified
         *   attribute.
         *   @param the attribute to be checked
         *   @return true if attribute found else false
         */
        hasAttribute(the: string): boolean;

        /**
         *   Returns an attribute value of the element as an
         *   Number. If the defaultValue parameter is specified
         *   and the attribute doesn't exist, then defaultValue
         *   is returned. If no defaultValue is specified and
         *   the attribute doesn't exist, the value 0 is
         *   returned.
         *   @param name the non-null full name of the
         *   attribute
         *   @param [defaultValue] the default value of the
         *   attribute
         */
        getNum(name: string, defaultValue?: number): number;

        /**
         *   Returns an attribute value of the element as an
         *   String. If the defaultValue parameter is specified
         *   and the attribute doesn't exist, then defaultValue
         *   is returned. If no defaultValue is specified and
         *   the attribute doesn't exist, null is returned.
         *   @param name the non-null full name of the
         *   attribute
         *   @param [defaultValue] the default value of the
         *   attribute
         */
        getString(name: string, defaultValue?: number): string;

        /**
         *   Sets the content of an element's attribute. The
         *   first parameter specifies the attribute name,
         *   while the second specifies the new content.
         *   @param name the full name of the attribute
         *   @param value the value of the attribute
         */
        setAttribute(name: string, value: number | string | boolean): void;

        /**
         *   Returns the content of an element. If there is no
         *   such content, defaultValue is returned if
         *   specified, otherwise null is returned.
         *   @param [defaultValue] value returned if no content
         *   is found
         */
        getContent(defaultValue?: string): string;

        /**
         *   Sets the element's content.
         *   @param text the new content
         */
        setContent(text: string): void;

        /**
         *   Serializes the element into a string. This
         *   function is useful for preparing the content to be
         *   sent over a http request or saved to file.
         *   @return Serialized string of the element
         */
        serialize(): string;
    }
}
