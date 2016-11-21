// Type definitions for react-tagcloud v0.4.0
// Project: https://github.com/madox2/react-tagcloud
// Definitions by: wassname <https://github.com/wassname/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path="../react/react.d.ts"/>

declare namespace ReactTagCloud {
    interface TagCloudProps extends __React.Props<void> {
        tags: any[];
        maxSize: number;
        minSize: number;
        shuffle?: boolean;
        renderer?: Function;
        className?: string;
        onClick?: Function;
    }
    interface TagCloudClass extends __React.ComponentClass<TagCloudProps> { }

    interface DefaultRendererFactoryOptions {
        tagRenderer?: Function;
        colorOptions?: any;
        props?: any;
    }
    interface RendererFunction {
        (tag: any, size: number, key: string | number, handlers: any): any;
    }
    interface DefaultRendererFactory {
        new (_ref?: DefaultRendererFactoryOptions): RendererFunction;
        (_ref?: DefaultRendererFactoryOptions): RendererFunction;
    }
}


// export = TagCloud
declare module reactTagCloud {
    const TagCloud: ReactTagCloud.TagCloudClass;
    const DefaultRenderer: ReactTagCloud.DefaultRendererFactory;
}

declare module "react-tagcloud" {
    export = reactTagCloud
}
