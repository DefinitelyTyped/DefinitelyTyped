// Type definitions for Halfred v1.0.0
// Project: https://github.com/basti1302/halfred
// Definitions by: David Herges <https://github.com/dherges>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare module "halfred" {

  /**
   * halfred.parse(object) returns a Resource object.
   *
   * @see https://github.com/basti1302/halfred#usage
   */
  export function parse(object: any): Resource;

  /** @see https://github.com/basti1302/halfred#enabledisable-validation */
  export function enableValidation(flag: boolean): void;

  /** @see https://github.com/basti1302/halfred#enabledisable-validation */
  export function disableValidation(): void;

  /** @see https://github.com/basti1302/halfred#resource-api */
  export interface Resource {

    /**
     * Returns an object which has an array for each link that was present in the source object.
     * See below why each link is represented as an array.
     */
    allLinkArrays(): LinkCollection;

    /** Alias for allLinkArrays() */
    allLinks(): LinkCollection;

    /**
     * Returns the array of links for the given key, or null if there are no links for this key.
     */
    linkArray(key: string): Link[];

    /**
     * Returns the first element of the array of links for the given key or null if there are no
     * links for this key.
     */
    link(key: string): Link;

    /**
     * Returns an object which has an array for each embedded resource that was present in the
     * source object.
     * See below why each embedded resource is represented as an array. Each element of any of
     * this arrays is in turn a Resource object.
     */
    allEmbeddedResourceArrays(): ResourceCollection;

    /** Alias for allEmbeddedResourceArrays() */
    allEmbeddedArrays(): ResourceCollection;

    /** Alias for allEmbeddedResourceArrays() */
    allEmbeddedResources(): ResourceCollection;

    /**
     * Returns the array of embedded resources for the given key, or null if there are no embedded
     * resources for this key. Each element of this arrays is in turn a Resource object.
     */
    embeddedResourceArray(key: string): Resource[];

    /** Alias for embeddedResourceArray() */
    embeddedArray(key: string): Resource[];

    /**
     * Returns the first element of the array of embedded resources for the given key or null if
     * there are no embedded resources for this key. The returend object is a Resource object.
     */
    embeddedResource(key: string): Resource;

    /** Alias for embeddedResource(key) */
    embedded(key: string): Resource;  

    /**
     * Returns the unmodified, original object that was parsed to this resource. This is rather
     * uninteresting for the source object you give to the parse method (because you probably
     * still have a reference to the source object) but it is a convenient way to get the part of
     * the source object that corresponds to an embedded resource.
     */
    original(): any;

    /**
     * Returns true if the resource has any CURIEs (Compact URIs).
     *
     * @see http://www.w3.org/TR/2010/NOTE-curie-20101216/
     */
    hasCuries(): boolean;

    /**
     * Returns the array of CURIEs. Each object in the array is a link object, which means it
     * can be templated etc. See below for the link object API.
     */
    curieArray(): Link[];

    /**
     * Returns the curie with the given name, if any. The returned object is a link object, which
     * means it can be templated etc. See below for link object API.
     */
    curie(name: string): Link;

    /**
     * Returns the compact URI for the given full URL, if any
     */
    reverseResolveCurie(fullUrl: string): string;

    /**
     * Returns all validation issues. Validation issues are only gathered if validation has been
     * turned on by calling ``halfred.enableValidation()`` before calling ``halfred.parse``.
     */
    validationIssues(): any;

    /**
     * Alias for validationIssues()
     */
    validation(): any;

    /*
    XX ... think we should NOT try to represent these things in TypeScript.

    In addition to the methods mentioned here, resource has all properties of the source object.
    This is also true for embedded Resource objects. The non-HAL properties (that is, any
    property except _links and _embedded) are copied over to the Resource object. This is always
    a shallow copy, so modifying the a non-HAL property in the Resource object might also alter
    the source object and vice versa.

    The Resource object also has the properties _links and _embedded but they might differ from
    the _links/_embedded properties in the source object (Halfred applies some normalization to
    them). These are not intended to be accessed by clients directly, instead, use the provided
    methods to work with links and embedded resources.
    */
  }

  /** @see https://github.com/basti1302/halfred#links-and-embedded-resources */
  interface ResourceCollection {
    [key: string]: Resource[];
  }

  /** @see https://github.com/basti1302/halfred#links-and-embedded-resources */
  interface LinkCollection {
    [rel: string]: Link[]
  }

  /**
   * A Link Object represents a hyperlink from the containing resource to a URI.
   *
   * @see https://tools.ietf.org/html/draft-kelly-json-hal-08#section-5
   */
  interface Link {

    /**
     * The "href" property is REQUIRED.
     *
     * Its value is either a URI [RFC3986] or a URI Template [RFC6570].
     *
     * If the value is a URI Template then the Link Object SHOULD have a
     * "templated" attribute whose value is true.
     *
     * @see https://tools.ietf.org/html/draft-kelly-json-hal-08#section-5.1
     */
    href: string;

    /**
     * The "templated" property is OPTIONAL.
     *
     * Its value is boolean and SHOULD be true when the Link Object's "href"
     * property is a URI Template.
     *
     * Its value SHOULD be considered false if it is undefined or any other
     * value than true.
     *
     * @see https://tools.ietf.org/html/draft-kelly-json-hal-08#section-5.2
     */
    templated?: boolean;

    /**
     * The "type" property is OPTIONAL.
     *
     * Its value is a string used as a hint to indicate the media type
     * expected when dereferencing the target resource.
     *
     * @see https://tools.ietf.org/html/draft-kelly-json-hal-08#section-5.3
     */
    type?: string;

    /**
     * The "deprecation" property is OPTIONAL.
     * 
     * Its presence indicates that the link is to be deprecated (i.e.
     * removed) at a future date.  Its value is a URL that SHOULD provide
     * further information about the deprecation.
     *
     * A client SHOULD provide some notification (for example, by logging a
     * warning message) whenever it traverses over a link that has this
     * property.  The notification SHOULD include the deprecation property's
     * value so that a client manitainer can easily find information about
     * the deprecation.
     *
     * @see https://tools.ietf.org/html/draft-kelly-json-hal-08#section-5.4
     */
    deprecation?: string;

    /**
     * The "name" property is OPTIONAL.
     *
     * Its value MAY be used as a secondary key for selecting Link Objects
     * which share the same relation type.
     *
     * @see https://tools.ietf.org/html/draft-kelly-json-hal-08#section-5.5
     */
    name?: string;

    /**
     * The "profile" property is OPTIONAL.
     *
     * Its value is a string which is a URI that hints about the profile (as
     * defined by [I-D.wilde-profile-link]) of the target resource.
     *
     * @see https://tools.ietf.org/html/draft-kelly-json-hal-08#section-5.6
     */
    profile?: string;

    /**
     * The "title" property is OPTIONAL.
     *
     * Its value is a string and is intended for labelling the link with a
     * human-readable identifier (as defined by [RFC5988]).
     *
     * @see https://tools.ietf.org/html/draft-kelly-json-hal-08#section-5.7
     */
    title?: string;

    /**
     * The "hreflang" property is OPTIONAL.
     *
     * Its value is a string and is intended for indicating the language of
     * the target resource (as defined by [RFC5988]).
     *
     * @see https://tools.ietf.org/html/draft-kelly-json-hal-08#section-5.8
     */
    hreflang?: string;

  }

}
