import { MDXComponents, MDXContent, MDXModule } from 'mdx/types';
import MyMDXComponent from './MyComponent.mdx';
import MyMDComponent from './MyComponent.md';
import MyMarkdownComponent from './MyComponent.markdown';
import MyMDownComponent from './MyComponent.mdown';
import MyMKDNComponent from './MyComponent.mkdn';
import MyMKDComponent from './MyComponent.mkd';
import MyMKDownComponent from './MyComponent.mkdown';
import MyRonComponent from './MyComponent.ron';

// Test setup — A minimal JSX framework.

interface TestElementType {
    type: string;
    props: unknown;
    children: TestElementType[];
}

interface AnchorProps {
    className?: string;
}

interface DivProps {
    className?: string;
}

interface ImgProps {
    className?: string;
    src?: string;
}

interface H1Props {
    className?: string;
}

interface SpanProps {
    className?: string;
}

interface VideoProps {
    controls?: boolean;
}

// A JSX implementation stub
declare function jsx(): TestElementType;

// A JSX test implementation type
declare global {
    namespace JSX {
        type Element = TestElementType;

        interface IntrinsicElements {
            a: AnchorProps;
            div: DivProps;
            img: ImgProps;
            h1: H1Props;
            span: SpanProps;
            video: VideoProps;
        }

        interface ElementClass {
            render(): Element;
        }
    }
}

// Test setup — User code

class CustomImageComponent {
    constructor(props: ImgProps) {}

    render() {
        return <div />;
    }
}

// Tests — The `mdx` imports.

function MyMDXPage(props: MDXModule) {
    // $ExpectType MDXContent
    const Content = props.default;

    // $ExpectType unknown
    props.title;

    return (
        <div>
            <h1>{props.title as string}</h1>
            <Content />
        </div>
    );
}

const MyComponentAlias: MDXContent = MyMDXComponent;
const MyComponentAliasAlias: typeof MyMDXComponent = MyComponentAlias;

// Ensure custom components are valid JSX components.
declare const customComponents: MDXComponents;
const Div = customComponents.div!;
<Div />;

// Tests — All mdx file exports.

// $ExpectType TestElementType
<MyMDXComponent />;

// $ExpectType TestElementType
<MyMDXComponent
    the="answer"
    to={{ life: 'the' }}
    universe={() => 'and'}
    everything={42}
    components={{
        a(props) {
            // $ExpectType AnchorProps
            props;
            return null;
        },
        div(props) {
            // $ExpectType DivProps
            props;
            return <div {...props} />;
        },
        img: CustomImageComponent,
        // @ts-expect-error
        video: CustomImageComponent,
        wrapper(props) {
            // $ExpectType any
            props;
            return <div />;
        },
        nested: {
            components: props => {
                // $ExpectType any
                props;
                return <div />;
            },
            very: {
                deeply: props => {
                    // $ExpectType any
                    props;
                    return <div />;
                },
                to: {
                    infinity: props => {
                        // $ExpectType any
                        props;
                        return <div />;
                    },
                    and: {
                        beyond: props => {
                            // $ExpectType any
                            props;
                            return <div />;
                        },
                        span: 'div',
                    },
                },
            },
        },
        // @ts-expect-error
        invalid: 'Not just any type is allowed though',
        // Aliasing is valid though
        span: 'div',
    }}
/>;

// $ExpectType TestElementType
<MyMDComponent />;

// $ExpectType TestElementType
<MyMDComponent
    the="answer"
    to={{ life: 'the' }}
    universe={() => 'and'}
    everything={42}
    components={{
        a(props) {
            // $ExpectType AnchorProps
            props;
            return null;
        },
        div(props) {
            // $ExpectType DivProps
            props;
            return <div {...props} />;
        },
        img: CustomImageComponent,
        // @ts-expect-error
        video: CustomImageComponent,
        wrapper(props) {
            // $ExpectType any
            props;
            return <div />;
        },
        nested: {
            components: props => {
                // $ExpectType any
                props;
                return <div />;
            },
            very: {
                deeply: props => {
                    // $ExpectType any
                    props;
                    return <div />;
                },
                to: {
                    infinity: props => {
                        // $ExpectType any
                        props;
                        return <div />;
                    },
                    and: {
                        beyond: props => {
                            // $ExpectType any
                            props;
                            return <div />;
                        },
                        span: 'div',
                    },
                },
            },
        },
        // @ts-expect-error
        invalid: 'Not just any type is allowed though',
        // Aliasing is valid though
        span: 'div',
    }}
/>;

// $ExpectType TestElementType
<MyMarkdownComponent />;

// $ExpectType TestElementType
<MyMarkdownComponent
    the="answer"
    to={{ life: 'the' }}
    universe={() => 'and'}
    everything={42}
    components={{
        a(props) {
            // $ExpectType AnchorProps
            props;
            return null;
        },
        div(props) {
            // $ExpectType DivProps
            props;
            return <div {...props} />;
        },
        img: CustomImageComponent,
        // @ts-expect-error
        video: CustomImageComponent,
        wrapper(props) {
            // $ExpectType any
            props;
            return <div />;
        },
        nested: {
            components: props => {
                // $ExpectType any
                props;
                return <div />;
            },
            very: {
                deeply: props => {
                    // $ExpectType any
                    props;
                    return <div />;
                },
                to: {
                    infinity: props => {
                        // $ExpectType any
                        props;
                        return <div />;
                    },
                    and: {
                        beyond: props => {
                            // $ExpectType any
                            props;
                            return <div />;
                        },
                        span: 'div',
                    },
                },
            },
        },
        // @ts-expect-error
        invalid: 'Not just any type is allowed though',
        // Aliasing is valid though
        span: 'div',
    }}
/>;

// $ExpectType TestElementType
<MyMDownComponent />;

// $ExpectType TestElementType
<MyMDownComponent
    the="answer"
    to={{ life: 'the' }}
    universe={() => 'and'}
    everything={42}
    components={{
        a(props) {
            // $ExpectType AnchorProps
            props;
            return null;
        },
        div(props) {
            // $ExpectType DivProps
            props;
            return <div {...props} />;
        },
        img: CustomImageComponent,
        // @ts-expect-error
        video: CustomImageComponent,
        wrapper(props) {
            // $ExpectType any
            props;
            return <div />;
        },
        nested: {
            components: props => {
                // $ExpectType any
                props;
                return <div />;
            },
            very: {
                deeply: props => {
                    // $ExpectType any
                    props;
                    return <div />;
                },
                to: {
                    infinity: props => {
                        // $ExpectType any
                        props;
                        return <div />;
                    },
                    and: {
                        beyond: props => {
                            // $ExpectType any
                            props;
                            return <div />;
                        },
                        span: 'div',
                    },
                },
            },
        },
        // @ts-expect-error
        invalid: 'Not just any type is allowed though',
        // Aliasing is valid though
        span: 'div',
    }}
/>;

// $ExpectType TestElementType
<MyMKDNComponent />;

// $ExpectType TestElementType
<MyMKDNComponent
    the="answer"
    to={{ life: 'the' }}
    universe={() => 'and'}
    everything={42}
    components={{
        a(props) {
            // $ExpectType AnchorProps
            props;
            return null;
        },
        div(props) {
            // $ExpectType DivProps
            props;
            return <div {...props} />;
        },
        img: CustomImageComponent,
        // @ts-expect-error
        video: CustomImageComponent,
        wrapper(props) {
            // $ExpectType any
            props;
            return <div />;
        },
        nested: {
            components: props => {
                // $ExpectType any
                props;
                return <div />;
            },
            very: {
                deeply: props => {
                    // $ExpectType any
                    props;
                    return <div />;
                },
                to: {
                    infinity: props => {
                        // $ExpectType any
                        props;
                        return <div />;
                    },
                    and: {
                        beyond: props => {
                            // $ExpectType any
                            props;
                            return <div />;
                        },
                        span: 'div',
                    },
                },
            },
        },
        // @ts-expect-error
        invalid: 'Not just any type is allowed though',
        // Aliasing is valid though
        span: 'div',
    }}
/>;

// $ExpectType TestElementType
<MyMKDComponent />;

// $ExpectType TestElementType
<MyMKDComponent
    the="answer"
    to={{ life: 'the' }}
    universe={() => 'and'}
    everything={42}
    components={{
        a(props) {
            // $ExpectType AnchorProps
            props;
            return null;
        },
        div(props) {
            // $ExpectType DivProps
            props;
            return <div {...props} />;
        },
        img: CustomImageComponent,
        // @ts-expect-error
        video: CustomImageComponent,
        wrapper(props) {
            // $ExpectType any
            props;
            return <div />;
        },
        nested: {
            components: props => {
                // $ExpectType any
                props;
                return <div />;
            },
            very: {
                deeply: props => {
                    // $ExpectType any
                    props;
                    return <div />;
                },
                to: {
                    infinity: props => {
                        // $ExpectType any
                        props;
                        return <div />;
                    },
                    and: {
                        beyond: props => {
                            // $ExpectType any
                            props;
                            return <div />;
                        },
                        span: 'div',
                    },
                },
            },
        },
        // @ts-expect-error
        invalid: 'Not just any type is allowed though',
        // Aliasing is valid though
        span: 'div',
    }}
/>;

// $ExpectType TestElementType
<MyMKDownComponent />;

// $ExpectType TestElementType
<MyMKDownComponent
    the="answer"
    to={{ life: 'the' }}
    universe={() => 'and'}
    everything={42}
    components={{
        a(props) {
            // $ExpectType AnchorProps
            props;
            return null;
        },
        div(props) {
            // $ExpectType DivProps
            props;
            return <div {...props} />;
        },
        img: CustomImageComponent,
        // @ts-expect-error
        video: CustomImageComponent,
        wrapper(props) {
            // $ExpectType any
            props;
            return <div />;
        },
        nested: {
            components: props => {
                // $ExpectType any
                props;
                return <div />;
            },
            very: {
                deeply: props => {
                    // $ExpectType any
                    props;
                    return <div />;
                },
                to: {
                    infinity: props => {
                        // $ExpectType any
                        props;
                        return <div />;
                    },
                    and: {
                        beyond: props => {
                            // $ExpectType any
                            props;
                            return <div />;
                        },
                        span: 'div',
                    },
                },
            },
        },
        // @ts-expect-error
        invalid: 'Not just any type is allowed though',
        // Aliasing is valid though
        span: 'div',
    }}
/>;

// $ExpectType TestElementType
<MyRonComponent />;

// $ExpectType TestElementType
<MyRonComponent
    the="answer"
    to={{ life: 'the' }}
    universe={() => 'and'}
    everything={42}
    components={{
        a(props) {
            // $ExpectType AnchorProps
            props;
            return null;
        },
        div(props) {
            // $ExpectType DivProps
            props;
            return <div {...props} />;
        },
        img: CustomImageComponent,
        // @ts-expect-error
        video: CustomImageComponent,
        wrapper(props) {
            // $ExpectType any
            props;
            return <div />;
        },
        nested: {
            components: props => {
                // $ExpectType any
                props;
                return <div />;
            },
            very: {
                deeply: props => {
                    // $ExpectType any
                    props;
                    return <div />;
                },
                to: {
                    infinity: props => {
                        // $ExpectType any
                        props;
                        return <div />;
                    },
                    and: {
                        beyond: props => {
                            // $ExpectType any
                            props;
                            return <div />;
                        },
                        span: 'div',
                    },
                },
            },
        },
        // @ts-expect-error
        invalid: 'Not just any type is allowed though',
        // Aliasing is valid though
        span: 'div',
    }}
/>;
