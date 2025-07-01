import FrappeResponse from '../common/response'
import { UnknownRecord, LiteralStringUnion, Arrayable } from '../../utils/type-fest'

type DocTypeKey = keyof DocTypeMap
type PartialRecord<T> = Partial<T> & UnknownRecord

/**
 * Database APIs
 */
declare global {
  namespace frappe {
    namespace db {
      /**
       * Returns the Document object of doctype and name. If name is not provided, gets the first document matched by filters.
       *
       * {@link [Documentation](https://docs.frappe.io/framework/user/en/api/server-calls)}
       */
      function get_doc<DT extends DocTypeKey>(
        doctype: LiteralStringUnion<DT>,
        name?: string | null,
        filters?: PartialRecord<DocTypeMap[DT]>
      ): Promise<DocTypeMap[DT]>

      /**
       * Returns a list of records of doctype with fields and filters.
       *
       * {@link [Documentation](https://docs.frappe.io/framework/user/en/api/server-calls)}
       */
      function get_list<DT extends DocTypeKey>(
        doctype: LiteralStringUnion<DT>,
        opts?: {
          fields?: Array<LiteralStringUnion<keyof DocTypeMap[DT]>>
          filters?: PartialRecord<DocTypeMap[DT]>
        }
      ): Promise<DocTypeMap[DT][]>

      /**
       * Returns a document's field value or a list of values.
       *
       * {@link [Documentation](https://docs.frappe.io/framework/user/en/api/server-calls)}
       */
      function get_value<DT extends DocTypeKey, K extends keyof DocTypeMap[DT]>(
        doctype: LiteralStringUnion<DT>,
        nameOrFilters: PartialRecord<DocTypeMap[DT]>,
        fieldnames: Arrayable<K>
      ): Promise<FrappeResponse<Pick<DocTypeMap[DT], K>>>

      /**
       * Returns a field value from a Single DocType.
       *
       * {@link [Documentation](https://docs.frappe.io/framework/user/en/api/server-calls)}
       */
      function get_single_value<
        DT extends DocTypeKey,
        K extends keyof DocTypeMap[DT]
      >(
        doctype: LiteralStringUnion<DT>,
        field: LiteralStringUnion<K>
      ): Promise<DocTypeMap[DT][K]>

      /**
       * Sets a document's property using frappe.get_doc and doc.save on server.
       *
       * {@link [Documentation](https://docs.frappe.io/framework/user/en/api/server-calls)}
       */
      function set_value<DT extends DocTypeKey, K extends keyof DocTypeMap[DT]>(
        doctype: LiteralStringUnion<DT>,
        docname: string,
        fieldname: LiteralStringUnion<K>,
        value?: DocTypeMap[DT][K]
      ): Promise<FrappeResponse<DocTypeMap[DT]>>

      /**
       * Insert a new document.
       *
       * {@link [Documentation](https://docs.frappe.io/framework/user/en/api/server-calls)}
       */
      function insert<DT extends DocType>(doc: PartialRecord<DT>): Promise<DT>

      /**
       * Returns number of records for a given doctype and filters.
       *
       * {@link [Documentation](https://docs.frappe.io/framework/user/en/api/server-calls)}
       */
      function count<DT extends DocTypeKey>(
        doctype: LiteralStringUnion<DT>,
        filters?: Partial<DocTypeMap[DT]>
      ): Promise<number>

      /**
       * Delete a document identified by doctype and name.
       *
       * {@link [Documentation](https://docs.frappe.io/framework/user/en/api/server-calls)}
       */
      function delete_doc(
        doctype: LiteralStringUnion<DocTypeKey>,
        name: string
      ): Promise<void>

      /**
       * Returns true if a document record exists.
       *
       * {@link [Documentation](https://docs.frappe.io/framework/user/en/api/server-calls)}
       */
      function exists(
        doctype: LiteralStringUnion<DocTypeKey>,
        name: string
      ): Promise<boolean>
    }
  }
}

export {}
