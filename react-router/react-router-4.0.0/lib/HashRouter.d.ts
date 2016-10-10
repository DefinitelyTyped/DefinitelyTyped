import * as React from 'react'

declare namespace HashRouterModule{
    interface HashRouterProps extends React.Props<HashRouter>{
        basename?:string,
        getUserConfirmation?:any,
        hashType?:string,
        children?:any
    }
    interface HashRouter extends React.ComponentClass<HashRouterProps>{}
}

declare const HashRouter:HashRouterModule.HashRouter
export default HashRouter