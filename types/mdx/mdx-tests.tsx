import MyMDXComponent from './MyComponent.mdx';
import MyMDComponent from './MyComponent.md';
import MyMarkdownComponent from './MyComponent.markdown';
import MyMDownComponent from './MyComponent.mdown';
import MyMKDNComponent from './MyComponent.mkdn';
import MyMKDComponent from './MyComponent.mkd';
import MyMKDownComponent from './MyComponent.mkdown';
import MyRonComponent from './MyComponent.ron';

interface TestElementType {
    foo: 'bar';
}

interface DivProps {
    className?: string;
}

interface ImgProps {
    className?: string;
    src?: string;
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
            div: DivProps;
            img: ImgProps;
            span: SpanProps;
            video: VideoProps;
        }

        interface ElementClass {
            render(): Element;
        }
    }
}

class CustomImageComponent {
    constructor(props: ImgProps) {}

    render() {
        return <div />;
    }
}

// $ExpectType TestElementType
<MyMDXComponent />;

// $ExpectType TestElementType
<MyMDXComponent
    the="answer"
    to={{ life: 'the' }}
    universe={() => 'and'}
    everything={42}
    components={{
        div(props) {
            // $ExpectType DivProps
            props;
            return <div {...props} />;
        },
        img: CustomImageComponent,
        // $ExpectError
        video: CustomImageComponent,
        wrapper(props) {
            // $ExpectType MDXProps
            props;
            return <div />;
        },
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
        div(props) {
            // $ExpectType DivProps
            props;
            return <div {...props} />;
        },
        img: CustomImageComponent,
        // $ExpectError
        video: CustomImageComponent,
        wrapper(props) {
            // $ExpectType MDXProps
            props;
            return <div />;
        },
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
        div(props) {
            // $ExpectType DivProps
            props;
            return <div {...props} />;
        },
        img: CustomImageComponent,
        // $ExpectError
        video: CustomImageComponent,
        wrapper(props) {
            // $ExpectType MDXProps
            props;
            return <div />;
        },
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
        div(props) {
            // $ExpectType DivProps
            props;
            return <div {...props} />;
        },
        img: CustomImageComponent,
        // $ExpectError
        video: CustomImageComponent,
        wrapper(props) {
            // $ExpectType MDXProps
            props;
            return <div />;
        },
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
        div(props) {
            // $ExpectType DivProps
            props;
            return <div {...props} />;
        },
        img: CustomImageComponent,
        // $ExpectError
        video: CustomImageComponent,
        wrapper(props) {
            // $ExpectType MDXProps
            props;
            return <div />;
        },
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
        div(props) {
            // $ExpectType DivProps
            props;
            return <div {...props} />;
        },
        img: CustomImageComponent,
        // $ExpectError
        video: CustomImageComponent,
        wrapper(props) {
            // $ExpectType MDXProps
            props;
            return <div />;
        },
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
        div(props) {
            // $ExpectType DivProps
            props;
            return <div {...props} />;
        },
        img: CustomImageComponent,
        // $ExpectError
        video: CustomImageComponent,
        wrapper(props) {
            // $ExpectType MDXProps
            props;
            return <div />;
        },
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
        div(props) {
            // $ExpectType DivProps
            props;
            return <div {...props} />;
        },
        img: CustomImageComponent,
        // $ExpectError
        video: CustomImageComponent,
        wrapper(props) {
            // $ExpectType MDXProps
            props;
            return <div />;
        },
    }}
/>;
