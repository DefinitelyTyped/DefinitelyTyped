/** A single field value in Frappe filters */
type FrappeFilterValue = string | number | boolean | Date

/** Standard comparison operators */
type ComparisonOperator =
  | "="
  | "!="
  | ">"
  | ">="
  | "<"
  | "<="
  | "like"
  | "not like"

/** Operators that take an array of values */
type ArrayOperator = "in" | "not in"

/** Operators that take two scalar values (“between”/“not between”) */
type RangeOperator = "between" | "not between"

/**
 * A single filter expression for one field:
 *  - A bare value        ⇒  { field: value }   (interpreted as “= value”)
 *  - Unary comparitor    ⇒  [ ">",  10 ]
 *  - Array comparitor    ⇒  [ "in", [1,2,3] ]
 *  - Range comparitor    ⇒  [ "between", 10, 20 ]
 */
export type FilterCondition =
  | FrappeFilterValue
  | [ComparisonOperator, FrappeFilterValue]
  | [ArrayOperator, FrappeFilterValue[]]
  | [RangeOperator, FrappeFilterValue, FrappeFilterValue]

/**
 * The full filters map you can return from set_query:
 * 
 * ```
 * frm.set_query("customer", () => ({
 *   filters: {
 *     territory: doc.territory,           // bare value ⇒ "="
 *     status: ["!=", "Inactive"],        // unary operator
 *     category: ["in", ["A","B","C"]],   // array operator
 *     date: ["between", start, end],     // range operator
 *   }
 * }))
 * ```
 */
export type Filters<Field extends PropertyKey> = Partial<
  Record<Field, FilterCondition>
>   

export {}