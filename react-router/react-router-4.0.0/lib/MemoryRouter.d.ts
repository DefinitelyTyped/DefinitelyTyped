import * as React from 'react'

declare namespace MemoryRouterModule{
    interface MemoryRouterProps extends React.Props<MemoryRouter>{
        getUserConfirmation?:any,
        initialEntries?:any,
        initialIndex?:number,
        keyLength?:number,
        children?:any
    }
    interface MemoryRouter extends React.ComponentClass<MemoryRouterProps>{}
}

declare const MemoryRouter:MemoryRouterModule.MemoryRouter
export default MemoryRouter