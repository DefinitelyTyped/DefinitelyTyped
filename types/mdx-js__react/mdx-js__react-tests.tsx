import { FC } from 'react';
import { MDXProvider, useMDXComponents, withMDXComponents, InjectedMDXProviderProps } from '@mdx-js/react';
import { renderToString } from 'react-dom/server';

const H1: FC = props => <h1 style={{ color: 'tomato' }} {...props} />;

renderToString(
    <MDXProvider components={{ h1: H1 }}>
        <div />
    </MDXProvider>,
);

renderToString(
    <MDXProvider components={c => ({ ...c, h1: H1 })}>
        <div />
    </MDXProvider>,
);

const Hooked: FC = () => {
    const components = useMDXComponents();
    return null;
};

const HookedFN: FC = () => {
    const components = useMDXComponents(c => ({ ...c, h1: H1 }));
    return null;
};

const HOC: FC<InjectedMDXProviderProps & { t: string }> = props => {
    return null;
};

const InjectedHOC = withMDXComponents(HOC);

renderToString(<InjectedHOC t="" />);
