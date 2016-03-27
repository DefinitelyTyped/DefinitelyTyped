// Type definitions for react-router-bootstrap
// Project: https://github.com/react-bootstrap/react-router-bootstrap
// Definitions by: Vincent Lesierse <https://github.com/vlesierse>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path="../react/react.d.ts"/>
///<reference path="../react-router/react-router.d.ts"/>

declare namespace ReactRouterBootstrap {
    // Import React
    import React = __React;

    interface LinkContainerProps extends ReactRouter.LinkProps {
        disabled?: boolean
    }
    interface LinkContainer extends React.ComponentClass<LinkContainerProps> {}
    interface LinkContainerElement extends React.ReactElement<LinkContainerProps> {}
    const LinkContainer: LinkContainer

    const IndexLinkContainer: LinkContainer
}

declare module "react-router-bootstrap/lib/LinkContainer" {

    export default ReactRouterBootstrap.LinkContainer

}

declare module "react-router-bootstrap/lib/IndexLinkContainer" {

    export default ReactRouterBootstrap.IndexLinkContainer

}

declare module "react-router-bootstrap" {

    import LinkContainer from "react-router-bootstrap/lib/LinkContainer"
    
    import IndexLinkContainer from "react-router-bootstrap/lib/IndexLinkContainer"

    export {
        LinkContainer,
        IndexLinkContainer
    }

}
