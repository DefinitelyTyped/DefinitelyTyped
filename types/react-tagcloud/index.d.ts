// Type definitions for react-tagcloud v1.1.0
// Project: https://github.com/madox2/react-tagcloud
// Definitions by: wassname <https://github.com/wassname>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

///<reference types="react"/>

declare namespace ReactTagCloud {
    interface TagCloudProps extends React.Props<void> {
        tags: any[];
        maxSize: number;
        minSize: number;
        shuffle?: boolean;
        colorOptions?: object;
        renderer?: Function;
        className?: string;
        onClick?: Function;
        disableRandomColor?: boolean;
    }
    interface TagCloudClass extends React.ComponentClass<TagCloudProps> { }

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
