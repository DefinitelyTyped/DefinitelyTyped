import * as React from "react";

/*
 * JSnoX requires an object with a createElement method.
 * This will normally be the React object but could be something else
 */
interface ReactLikeObject {
    createElement<P>(
        type: React.ComponentClass<P> | string,
        props: P,
        children: React.ReactNode,
    ): React.ReactElement<P>;
}

type Module = (reactObj: ReactLikeObject) => CreateElement;

interface CreateElement {
    /**
     * Renders an HTML element from the given spec string, with children but without
     * extra props.
     * @param specString A string that defines a component in a way that resembles
     * CSS selectors. Eg. "input:email#foo.bar.baz[name=email][required]"
     * @param children A single React node (string or ReactElement) or array of nodes.
     * Note that unlike with React itself, multiple children must be placed into an array.
     */
    <P>(specString: string, children: React.ReactNode): React.DOMElement<P, Element>;

    /**
     * Renders an HTML element from the given spec string, with optional props
     * and children
     * @param specString A string that defines a component in a way that resembles
     * CSS selectors. Eg. "input:email#foo.bar.baz[name=email][required]"
     * @param props Object of html attribute key-value pairs
     * @param children A single React node (string or ReactElement) or array of nodes.
     * Note that unlike with React itself, multiple children must be placed into an array.
     */
    <P>(specString: string, props?: React.HTMLAttributes<{}>, children?: React.ReactNode): React.DOMElement<P, Element>;

    /**
     * Renders a React component, with children but no props
     * @param component A plain React component (created from React.createClass()) or
     * component factory (created from React.createFactory())
     * @param children A single React node (string or ReactElement) or array of nodes.
     * Note that unlike with React itself, multiple children must be placed into an array.
     */
    <P>(component: React.ComponentClass<P>, children: React.ReactNode): React.ReactElement<P>;

    /**
     * Renders a React component, with optional props and children
     * @param component A plain React component (created from React.createClass()) or
     * component factory (created from React.createFactory())
     * @param props Props object to pass to the component
     * @param children A single React node (string or ReactElement) or array of nodes.
     * Note that unlike with React itself, multiple children must be placed into an array.
     */
    <P>(component: React.ComponentClass<P>, props?: P, children?: React.ReactNode): React.ReactElement<P>;
}

declare var exports: Module;
export = exports;
