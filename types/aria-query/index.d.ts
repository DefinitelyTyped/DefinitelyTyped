// Type definitions for aria-query 4.2
// Project: https://github.com/A11yance/aria-query#readme
// Definitions by: Sebastian Silbermann <https://github.com/eps1lon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

// index.js
export type ARIARoleDefintionKey = ARIAAbstractRole | ARIARole | ARIADPubRole;

export const aria: Map<ARIAProperty, ARIAPropertyDefinition>;
export interface DOMDefinition {
    reserved?: boolean;
    interactive?: boolean;
}
export const dom: Map<string, DOMDefinition>;
export const elementRoles: Map<ARIARoleRelationConcept, Set<ARIARoleDefintionKey>>;
export const roles: Map<ARIARoleDefintionKey, ARIARoleDefinition>;
export const roleElements: Map<ARIARoleDefintionKey, Set<ARIARoleRelationConcept>>;

// types
export type ARIAAbstractRole =
    | 'command'
    | 'composite'
    | 'input'
    | 'landmark'
    | 'range'
    | 'roletype'
    | 'section'
    | 'sectionhead'
    | 'select'
    | 'structure'
    | 'widget'
    | 'window';

export type ARIAWidgetRole =
    | 'button'
    | 'checkbox'
    | 'gridcell'
    | 'link'
    | 'menuitem'
    | 'menuitemcheckbox'
    | 'menuitemradio'
    | 'option'
    | 'progressbar'
    | 'radio'
    | 'scrollbar'
    | 'searchbox'
    | 'slider'
    | 'spinbutton'
    | 'switch'
    | 'tab'
    | 'tabpanel'
    | 'textbox'
    | 'treeitem';

export type ARIACompositeWidgetRole =
    | 'combobox'
    | 'grid'
    | 'listbox'
    | 'menu'
    | 'menubar'
    | 'radiogroup'
    | 'tablist'
    | 'tree'
    | 'treegrid';

export type ARIADocumentStructureRole =
    | 'application'
    | 'article'
    | 'blockquote'
    | 'caption'
    | 'cell'
    | 'columnheader'
    | 'definition'
    | 'deletion'
    | 'directory'
    | 'document'
    | 'emphasis'
    | 'feed'
    | 'figure'
    | 'generic'
    | 'group'
    | 'heading'
    | 'img'
    | 'insertion'
    | 'list'
    | 'listitem'
    | 'math'
    | 'meter'
    | 'none'
    | 'note'
    | 'paragraph'
    | 'presentation'
    | 'row'
    | 'rowgroup'
    | 'rowheader'
    | 'separator'
    | 'strong'
    | 'subscript'
    | 'superscript'
    | 'table'
    | 'term'
    | 'time'
    | 'toolbar'
    | 'tooltip';

export type ARIALandmarkRole =
    | 'banner'
    | 'complementary'
    | 'contentinfo'
    | 'form'
    | 'main'
    | 'navigation'
    | 'region'
    | 'search';

export type ARIALiveRegionRole = 'alert' | 'log' | 'marquee' | 'status' | 'timer';

export type ARIAWindowRole = 'alertdialog' | 'dialog';

export type ARIAUncategorizedRole = 'code';

export type ARIADPubRole =
    | 'doc-abstract'
    | 'doc-acknowledgments'
    | 'doc-afterword'
    | 'doc-appendix'
    | 'doc-backlink'
    | 'doc-biblioentry'
    | 'doc-bibliography'
    | 'doc-biblioref'
    | 'doc-chapter'
    | 'doc-colophon'
    | 'doc-conclusion'
    | 'doc-cover'
    | 'doc-credit'
    | 'doc-credits'
    | 'doc-dedication'
    | 'doc-endnote'
    | 'doc-endnotes'
    | 'doc-epigraph'
    | 'doc-epilogue'
    | 'doc-errata'
    | 'doc-example'
    | 'doc-footnote'
    | 'doc-foreword'
    | 'doc-glossary'
    | 'doc-glossref'
    | 'doc-index'
    | 'doc-introduction'
    | 'doc-noteref'
    | 'doc-notice'
    | 'doc-pagebreak'
    | 'doc-pagelist'
    | 'doc-part'
    | 'doc-preface'
    | 'doc-prologue'
    | 'doc-pullquote'
    | 'doc-qna'
    | 'doc-subtitle'
    | 'doc-tip'
    | 'doc-toc';

export type ARIARole =
    | ARIAWidgetRole
    | ARIACompositeWidgetRole
    | ARIADocumentStructureRole
    | ARIALandmarkRole
    | ARIALiveRegionRole
    | ARIAWindowRole
    | ARIAUncategorizedRole;

export interface ARIARoleDefinition {
    /* Abstract roles may not be used in HTML. */
    abstract: boolean;
    /* The concepts in related domains that inform behavior mappings. */
    baseConcepts: ARIARoleRelation[];
    /* Child presentational roles strip child nodes of roles and flatten the
     * content to text. */
    childrenPresentational: boolean;
    /* aria-* properties and states disallowed on this role. */
    prohibitedProps: ARIAPropertyMap;
    /* aria-* properties and states allowed on this role. */
    props: ARIAPropertyMap;
    /* The concepts in related domains that inform behavior mappings. */
    relatedConcepts: ARIARoleRelation[];
    /* aria-* properties and states required on this role. */
    requiredProps: ARIAPropertyMap;
    /* An array or super class "stacks." Each stack contains a LIFO list of
     * strings correspond to a super class in the inheritance chain of this
     * role. Roles may have more than one inheritance chain, which is why
     * this property is an array of arrays and not a single array. */
    superClass: Array<Array<ARIAAbstractRole | ARIARole | ARIADPubRole>>;
}

export type ARIAState =
    | 'aria-busy'
    | 'aria-checked'
    | 'aria-disabled'
    | 'aria-expanded'
    | 'aria-grabbed'
    | 'aria-hidden'
    | 'aria-invalid'
    | 'aria-pressed'
    | 'aria-selected';

export type ARIAProperty =
    | 'aria-activedescendant'
    | 'aria-atomic'
    | 'aria-autocomplete'
    | 'aria-colcount'
    | 'aria-colindex'
    | 'aria-colspan'
    | 'aria-controls'
    | 'aria-current'
    | 'aria-describedat'
    | 'aria-describedby'
    | 'aria-details'
    | 'aria-dropeffect'
    | 'aria-errormessage'
    | 'aria-flowto'
    | 'aria-haspopup'
    | 'aria-keyshortcuts'
    | 'aria-label'
    | 'aria-labelledby'
    | 'aria-level'
    | 'aria-live'
    | 'aria-modal'
    | 'aria-multiline'
    | 'aria-multiselectable'
    | 'aria-orientation'
    | 'aria-owns'
    | 'aria-placeholder'
    | 'aria-posinset'
    | 'aria-readonly'
    | 'aria-relevant'
    | 'aria-required'
    | 'aria-roledescription'
    | 'aria-rowcount'
    | 'aria-rowindex'
    | 'aria-rowspan'
    | 'aria-setsize'
    | 'aria-sort'
    | 'aria-valuemax'
    | 'aria-valuemin'
    | 'aria-valuenow'
    | 'aria-valuetext'
    | ARIAState;

export interface ARIAPropertyMap {
    'aria-busy'?: unknown;
    'aria-checked'?: unknown;
    'aria-disabled'?: unknown;
    'aria-expanded'?: unknown;
    'aria-grabbed'?: unknown;
    'aria-hidden'?: unknown;
    'aria-invalid'?: unknown;
    'aria-pressed'?: unknown;
    'aria-selected'?: unknown;
    'aria-activedescendant'?: unknown;
    'aria-atomic'?: unknown;
    'aria-autocomplete'?: unknown;
    'aria-colcount'?: unknown;
    'aria-colindex'?: unknown;
    'aria-colspan'?: unknown;
    'aria-controls'?: unknown;
    'aria-current'?: ARIAPropertyCurrent | null;
    'aria-describedat'?: unknown;
    'aria-describedby'?: unknown;
    'aria-details'?: unknown;
    'aria-dropeffect'?: unknown;
    'aria-errormessage'?: unknown;
    'aria-flowto'?: unknown;
    'aria-haspopup'?: unknown;
    'aria-keyshortcuts'?: unknown;
    'aria-label'?: unknown;
    'aria-labelledby'?: unknown;
    'aria-level'?: unknown;
    'aria-live'?: unknown;
    'aria-modal'?: unknown;
    'aria-multiline'?: unknown;
    'aria-multiselectable'?: unknown;
    'aria-orientation'?: unknown;
    'aria-owns'?: unknown;
    'aria-placeholder'?: unknown;
    'aria-posinset'?: unknown;
    'aria-readonly'?: unknown;
    'aria-relevant'?: unknown;
    'aria-required'?: unknown;
    'aria-roledescription'?: unknown;
    'aria-rowcount'?: unknown;
    'aria-rowindex'?: unknown;
    'aria-rowspan'?: unknown;
    'aria-setsize'?: unknown;
    'aria-sort'?: unknown;
    'aria-valuemax'?: unknown;
    'aria-valuemin'?: unknown;
    'aria-valuenow'?: unknown;
    'aria-valuetext'?: unknown;
}

export interface ARIAPropertyDefinition {
    type: 'string' | 'id' | 'idlist' | 'integer' | 'number' | 'boolean' | 'token' | 'tokenlist' | 'tristate';
    values?: Array<string | boolean>;
    allowundefined?: boolean;
}

export type ARIAPropertyCurrent = 'page' | 'step' | 'location' | 'date' | 'time' | 'true' | 'false' | true | false;

export interface ARIARoleRelation {
    module?: string;
    concept?: ARIARoleRelationConcept;
}

/* The concept in a related domain that informs behavior mappings.
 * Related domains include: HTML, "Device Independence Delivery Unit", XForms,
 * and ARIA to name a few. */
export interface ARIARoleRelationConcept {
    name: string;
    attributes?: ARIARoleRelationConceptAttribute[];
    // These constraints are drawn from the mapping between ARIA and HTML:
    // https://www.w3.org/TR/html-aria
    constraints?: Array<
        | 'direct descendant of document'
        | 'direct descendant of ol, ul or menu'
        | 'direct descendant of details element with the open attribute defined'
        | 'descendant of table'
    >;
}

export interface ARIARoleRelationConceptAttribute {
    name: string;
    value?: string | number;
    // These constraints are drawn from the mapping between ARIA and HTML:
    // https://www.w3.org/TR/html-aria
    constraints?: Array<'unset' | '>1'>;
}
