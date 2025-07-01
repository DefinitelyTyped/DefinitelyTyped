/// <reference path="./types/cypress/cypress.d.ts" />
/// <reference path="./types/model/doctype.d.ts" />
/// <reference path="./types/ui/form/form-handler.d.ts" />
/// <reference path="./types/ui/form/frappe-form.d.ts" />
/// <reference path="./types/ui/form/make-control.d.ts" />
/// <reference path="./types/utilities/common-utilities.d.ts" />
/// <reference path="./types/ui/dialog/dialog.d.ts" />
/// <reference path="./types/requests/requests.d.ts" />
/// <reference path="./types/db/db.d.ts" />

import type FrappeResponse from './types/common/response.d.ts'
import type { DocTypeName } from './types/model/doctype.d.ts'

// Set as global so we can allow interface merging from generators
declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DocTypeMap {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface FrappeWhitelistedMethods {}
}

export { FrappeResponse, DocTypeName }
