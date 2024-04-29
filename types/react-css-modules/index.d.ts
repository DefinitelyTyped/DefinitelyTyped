interface TypeOptions {
    allowMultiple?: boolean | undefined;
    handleNotFoundStyleName?: "throw" | "log" | "ignore" | undefined;
}

type StylesObject = any;

interface CSSModules {
    (defaultStyles: StylesObject, options?: TypeOptions): <C extends Function>(Component: C) => C;
    <C extends Function>(Component: C, defaultStyles: StylesObject, options?: TypeOptions): C;
}

declare namespace CSSModules {
    // Extend your component's Prop interface with this one to get access to `this.props.styles`
    //
    // interface MyComponentProps extends CSSModules.InjectedCSSModuleProps {}
    interface InjectedCSSModuleProps {
        styles?: StylesObject | undefined;
    }
}

declare let CSSModules: CSSModules;

export = CSSModules;

declare module "react" {
    interface Attributes {
        styleName?: string | undefined;
    }
    interface HTMLAttributes<T> {
        styleName?: string | undefined;
    }
    interface SVGAttributes<T> {
        styleName?: string | undefined;
    }
}
