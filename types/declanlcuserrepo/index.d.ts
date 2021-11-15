// Type definitions for declanlcuserrepo
// Project: https://github.com/declanlc/declanlcuserrepo
// Definitions by: delanlc <https://github.com/declanlc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// NOTE: Users of the `experimental` builds of React should add a reference
// to 'react/experimental' in their project. See experimental.d.ts's top comment
// for reference and documentation on how exactly to do it.


// tslint:disable-next-line:export-just-namespace
export = DeclanlcUserRepo
export as namespace DeclanlcUserRepo

declare namespace DeclanlcUserRepo {
  interface RepType {
    id: string|number,
    name: string
  }
}