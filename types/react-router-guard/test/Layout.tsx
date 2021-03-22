import * as React from 'react';

interface Props {
    children: any;
}

const Layout = ({ children }: Props) => (
    <>
        <h1>Layout Test</h1>
        {children}
    </>
);

export default Layout;
