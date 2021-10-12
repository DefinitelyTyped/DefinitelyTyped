import { MDXContent, MDXModule } from 'mdx';
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
    // dts type validation is inconsistent here.
    const Content: MDXContent = props.default;

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
        div(props) {
            // $ExpectType DivProps
            props;
            return <div {...props} />;
        },
        img: CustomImageComponent,
        // $ExpectError
        video: CustomImageComponent,
        wrapper(props) {
            // $ExpectType any
            props;
            return <div />;
        },
        nested: {
            components: (props) => {
                // $ExpectType any
                props;
                return <div />;
            },
            very: {
                deeply: (props) => {
                    // $ExpectType any
                    props;
                    return <div />;
                },
                to: {
                    infinity: (props) => {
                        // $ExpectType any
                        props;
                        return <div />;
                    },
                    and: {
                        beyond: (props) => {
                            // $ExpectType any
                            props;
                            return <div />;
                        }
                    }
                }
            },
        },
        // $ExpectError
        invalid: 'Not just any type is allowed though',
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
            // $ExpectType any
            props;
            return <div />;
        },
        nested: {
            components: (props) => {
                // $ExpectType any
                props;
                return <div />;
            },
            very: {
                deeply: (props) => {
                    // $ExpectType any
                    props;
                    return <div />;
                },
                to: {
                    infinity: (props) => {
                        // $ExpectType any
                        props;
                        return <div />;
                    },
                    and: {
                        beyond: (props) => {
                            // $ExpectType any
                            props;
                            return <div />;
                        }
                    }
                }
            },
        },
        // $ExpectError
        invalid: 'Not just any type is allowed though',
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
            // $ExpectType any
            props;
            return <div />;
        },
        nested: {
            components: (props) => {
                // $ExpectType any
                props;
                return <div />;
            },
            very: {
                deeply: (props) => {
                    // $ExpectType any
                    props;
                    return <div />;
                },
                to: {
                    infinity: (props) => {
                        // $ExpectType any
                        props;
                        return <div />;
                    },
                    and: {
                        beyond: (props) => {
                            // $ExpectType any
                            props;
                            return <div />;
                        }
                    }
                }
            },
        },
        // $ExpectError
        invalid: 'Not just any type is allowed though',
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
            // $ExpectType any
            props;
            return <div />;
        },
        nested: {
            components: (props) => {
                // $ExpectType any
                props;
                return <div />;
            },
            very: {
                deeply: (props) => {
                    // $ExpectType any
                    props;
                    return <div />;
                },
                to: {
                    infinity: (props) => {
                        // $ExpectType any
                        props;
                        return <div />;
                    },
                    and: {
                        beyond: (props) => {
                            // $ExpectType any
                            props;
                            return <div />;
                        }
                    }
                }
            },
        },
        // $ExpectError
        invalid: 'Not just any type is allowed though',
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
            // $ExpectType any
            props;
            return <div />;
        },
        nested: {
            components: (props) => {
                // $ExpectType any
                props;
                return <div />;
            },
            very: {
                deeply: (props) => {
                    // $ExpectType any
                    props;
                    return <div />;
                },
                to: {
                    infinity: (props) => {
                        // $ExpectType any
                        props;
                        return <div />;
                    },
                    and: {
                        beyond: (props) => {
                            // $ExpectType any
                            props;
                            return <div />;
                        }
                    }
                }
            },
        },
        // $ExpectError
        invalid: 'Not just any type is allowed though',
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
            // $ExpectType any
            props;
            return <div />;
        },
        nested: {
            components: (props) => {
                // $ExpectType any
                props;
                return <div />;
            },
            very: {
                deeply: (props) => {
                    // $ExpectType any
                    props;
                    return <div />;
                },
                to: {
                    infinity: (props) => {
                        // $ExpectType any
                        props;
                        return <div />;
                    },
                    and: {
                        beyond: (props) => {
                            // $ExpectType any
                            props;
                            return <div />;
                        }
                    }
                }
            },
        },
        // $ExpectError
        invalid: 'Not just any type is allowed though',
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
            // $ExpectType any
            props;
            return <div />;
        },
        nested: {
            components: (props) => {
                // $ExpectType any
                props;
                return <div />;
            },
            very: {
                deeply: (props) => {
                    // $ExpectType any
                    props;
                    return <div />;
                },
                to: {
                    infinity: (props) => {
                        // $ExpectType any
                        props;
                        return <div />;
                    },
                    and: {
                        beyond: (props) => {
                            // $ExpectType any
                            props;
                            return <div />;
                        }
                    }
                }
            },
        },
        // $ExpectError
        invalid: 'Not just any type is allowed though',
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
            // $ExpectType any
            props;
            return <div />;
        },
        nested: {
            components: (props) => {
                // $ExpectType any
                props;
                return <div />;
            },
            very: {
                deeply: (props) => {
                    // $ExpectType any
                    props;
                    return <div />;
                },
                to: {
                    infinity: (props) => {
                        // $ExpectType any
                        props;
                        return <div />;
                    },
                    and: {
                        beyond: (props) => {
                            // $ExpectType any
                            props;
                            return <div />;
                        }
                    }
                }
            },
        },
        // $ExpectError
        invalid: 'Not just any type is allowed though',
    }}
/>;
