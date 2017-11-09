// Type definitions for json-schema 4.0
// Project: https://www.npmjs.com/package/json-schema
// Definitions by: Boris Cherny <https://github.com/bcherny>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node"/>

/**
 * @see https://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.1
 */
export type JSONSchema4TypeName = 'string' | 'number' | 'integer' | 'boolean'
                                | 'object' | 'array' | 'null' | 'any'

/**
 * @see https://tools.ietf.org/html/draft-zyp-json-schema-04#section-3.5
 */
export type JSONSchema4Type = any[] | boolean | number | null | object | string

/**
 * JSON Schema V4
 * @see https://tools.ietf.org/html/draft-zyp-json-schema-04
 */
export interface JSONSchema4 {
  id?: string
  $ref?: string
  $schema?: 'http://json-schema.org/schema#' | 'http://json-schema.org/hyper-schema#'
          | 'http://json-schema.org/draft-04/schema#' | 'http://json-schema.org/draft-04/hyper-schema#'
          | 'http://json-schema.org/draft-03/schema#' | 'http://json-schema.org/draft-03/hyper-schema#'
          | string

  /**
   * This attribute is a string that provides a short description of the
   * instance property.
   *
   * @see https://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.21
   */
  title?: string

  /**
   * This attribute is a string that provides a full description of the of
   * purpose the instance property.
   *
   * @see https://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.22
   */
  description?: string

  default?: JSONSchema4Type
  multipleOf?: number
  maximum?: number
  exclusiveMaximum?: boolean
  minimum?: number
  exclusiveMinimum?: boolean
  maxLength?: number
  minLength?: number
  pattern?: string

  /**
   * May only be defined when "items" is defined, and is a tuple of JSONSchemas.
   *
   * This provides a definition for additional items in an array instance
   * when tuple definitions of the items is provided.  This can be false
   * to indicate additional items in the array are not allowed, or it can
   * be a schema that defines the schema of the additional items.
   *
   * @see https://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.6
   */
  additionalItems?: boolean | JSONSchema4

  /**
   * This attribute defines the allowed items in an instance array, and
   * MUST be a schema or an array of schemas.  The default value is an
   * empty schema which allows any value for items in the instance array.
   *
   * When this attribute value is a schema and the instance value is an
   * array, then all the items in the array MUST be valid according to the
   * schema.
   *
   * When this attribute value is an array of schemas and the instance
   * value is an array, each position in the instance array MUST conform
   * to the schema in the corresponding position for this array.  This
   * called tuple typing.  When tuple typing is used, additional items are
   * allowed, disallowed, or constrained by the "additionalItems"
   * (Section 5.6) attribute using the same rules as
   * "additionalProperties" (Section 5.4) for objects.
   *
   * @see https://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.5
   */
  items?: JSONSchema4 | JSONSchema4[]

  maxItems?: number
  minItems?: number
  uniqueItems?: boolean
  maxProperties?: number
  minProperties?: number

  /**
   * This attribute indicates if the instance must have a value, and not
   * be undefined. This is false by default, making the instance
   * optional.
   *
   * @see https://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.7
   */
  required?: false | string[]

  /**
   * This attribute defines a schema for all properties that are not
   * explicitly defined in an object type definition. If specified, the
   * value MUST be a schema or a boolean. If false is provided, no
   * additional properties are allowed beyond the properties defined in
   * the schema. The default value is an empty schema which allows any
   * value for additional properties.
   *
   * @see https://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.4
   */
  additionalProperties?: boolean | JSONSchema4

  definitions?: {
    [k: string]: JSONSchema4
  }

  /**
   * This attribute is an object with property definitions that define the
   * valid values of instance object property values. When the instance
   * value is an object, the property values of the instance object MUST
   * conform to the property definitions in this object. In this object,
   * each property definition's value MUST be a schema, and the property's
   * name MUST be the name of the instance property that it defines.  The
   * instance property value MUST be valid according to the schema from
   * the property definition. Properties are considered unordered, the
   * order of the instance properties MAY be in any order.
   *
   * @see https://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.2
   */
  properties?: {
    [k: string]: JSONSchema4
  }

  /**
   * This attribute is an object that defines the schema for a set of
   * property names of an object instance. The name of each property of
   * this attribute's object is a regular expression pattern in the ECMA
   * 262/Perl 5 format, while the value is a schema. If the pattern
   * matches the name of a property on the instance object, the value of
   * the instance's property MUST be valid against the pattern name's
   * schema value.
   *
   * @see https://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.3
   */
  patternProperties?: {
    [k: string]: JSONSchema4
  }
  dependencies?: {
    [k: string]: JSONSchema4 | string[]
  }

  /**
   * This provides an enumeration of all possible values that are valid
   * for the instance property. This MUST be an array, and each item in
   * the array represents a possible value for the instance value. If
   * this attribute is defined, the instance value MUST be one of the
   * values in the array in order for the schema to be valid.
   *
   * @see https://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.19
   */
  enum?: JSONSchema4Type[]

  /**
   * A single type, or a union of simple types
   */
  type?: JSONSchema4TypeName | JSONSchema4TypeName[]

  allOf?: JSONSchema4[]
  anyOf?: JSONSchema4[]
  oneOf?: JSONSchema4[]
  not?: JSONSchema4

  /**
   * The value of this property MUST be another schema which will provide
   * a base schema which the current schema will inherit from.  The
   * inheritance rules are such that any instance that is valid according
   * to the current schema MUST be valid according to the referenced
   * schema.  This MAY also be an array, in which case, the instance MUST
   * be valid for all the schemas in the array.  A schema that extends
   * another schema MAY define additional attributes, constrain existing
   * attributes, or add other constraints.
   *
   * Conceptually, the behavior of extends can be seen as validating an
   * instance against all constraints in the extending schema as well as
   * the extended schema(s).
   *
   * @see https://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.26
   */
  extends?: string | string[]

  /**
   * @see https://tools.ietf.org/html/draft-zyp-json-schema-04#section-5.6
   */
  [k: string]: any
}
